import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroMedia() {
  const [imgError16, setImgError16] = useState(false);
  const [imgError9, setImgError9] = useState(false);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width:768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    fetch("/media/eter-hero-loop.mp4", { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, []);

  useEffect(() => {
    if (imgError16) console.warn("falta: eter-hero-16x9.png");
    if (imgError9) console.warn("falta: eter-hero-9x16.png");
  }, [imgError16, imgError9]);

  if (hasVideo === null) {
    // pending
  }

  if (hasVideo) {
    return (
      <div className="hero-media">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/eter-hero-16x9.png"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          onError={() => setHasVideo(false)}
        >
          <source src="/media/eter-hero-loop.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  if (isMobile) {
    if (imgError9) {
      return (
        <div className="media-falta" data-falta="eter-hero-9x16.png" style={{ height: "420px", border: "1px dashed var(--linea)", display: "grid", placeItems: "center", color: "var(--muted)", font: "500 12px Figtree" }}>
          falta: eter-hero-9x16.png
        </div>
      );
    }
    return (
      <div className="hero-media">
        <img
          src="/media/eter-hero-9x16.png"
          alt="Box de kinesiologia luminoso — camilla de madera clara con funda de papel tensado, cinta metrica y goniometro"
          onError={() => setImgError9(true)}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    );
  }

  if (imgError16) {
    return (
      <div className="media-falta" data-falta="eter-hero-16x9.png" style={{ height: "520px", border: "1px dashed var(--linea)", display: "grid", placeItems: "center", color: "var(--muted)", font: "500 12px Figtree" }}>
        falta: eter-hero-16x9.png
      </div>
    );
  }

  return (
    <div className="hero-media">
      <img
        src="/media/eter-hero-16x9.png"
        alt="Box de kinesiologia luminoso — camilla de madera clara con funda de papel tensado, cinta metrica amarilla y goniometro acrilico"
        onError={() => setImgError16(true)}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
}

function TileMedia({ file, alt, style, className }: { file: string; alt: string; style?: React.CSSProperties; className?: string }) {
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    fetch(`/media/${file}`, { method: "HEAD" })
      .then((r) => { if (!r.ok) { console.warn(`falta: ${file}`); } })
      .catch(() => console.warn(`falta: ${file}`));
  }, [file]);
  if (missing) {
    return <div className="media-falta" data-falta={file} style={{ border: "1px dashed var(--linea)", display: "grid", placeItems: "center", color: "var(--muted)", font: "500 11px Figtree", background: "var(--white)", ...style }}>{`falta: ${file}`}</div>;
  }
  return <img src={`/media/${file}`} alt={alt} className={className} style={style} onError={() => { setMissing(true); console.warn(`falta: ${file}`); }} />;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Reserva form state
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [motivo, setMotivo] = useState("");
  const [prevision, setPrevision] = useState("");
  const [fase, setFase] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("eter_reserva");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.nombre) setNombre(d.nombre);
        if (d.prevision) setPrevision(d.prevision);
      }
    } catch { /* ignore */ }
  }, []);

  // hero warn + og image
  useEffect(() => {
    const checks = [
      { url: "/media/eter-hero-16x9.png", name: "eter-hero-16x9.png" },
      { url: "/media/eter-hero-9x16.png", name: "eter-hero-9x16.png" },
    ];
    checks.forEach(({ url, name }) => {
      fetch(url, { method: "HEAD" })
        .then((r) => { if (!r.ok) console.warn(`falta: ${name}`); })
        .catch(() => console.warn(`falta: ${name}`));
    });
    fetch("/media/eter-hero-loop.mp4", { method: "HEAD" }).then((r) => {
      if (!r.ok) console.warn("falta: eter-hero-loop.mp4 (opcional, usa fallback a imagen)");
    }).catch(() => {});
    // og:image
    fetch("/media/eter-og-16x9.png", { method: "HEAD" }).then((r) => {
      if (r.ok) {
        if (!document.querySelector('meta[property="og:image"]')) {
          const m = document.createElement("meta");
          m.setAttribute("property", "og:image");
          m.setAttribute("content", "/media/eter-og-16x9.png");
          document.head.appendChild(m);
        }
      } else {
        console.warn("falta: eter-og-16x9.png");
      }
    }).catch(() => console.warn("falta: eter-og-16x9.png"));
  }, []);

  // sticky bottom via IntersectionObserver on hero
  useEffect(() => {
    const heroEl = document.querySelector(".hero") as HTMLElement | null;
    if (!heroEl) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // show sticky when hero not intersecting and viewport is mobile
        setShowSticky(!e.isIntersecting);
      },
      { threshold: 0, rootMargin: "-56px 0px 0px 0px" }
    );
    obs.observe(heroEl);
    return () => obs.disconnect();
  }, []);

  // restore scroll hero ref not needed

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!nombre.trim()) errs.nombre = "Ingresa tu nombre";
    if (!whatsapp.trim()) errs.whatsapp = "Ingresa tu WhatsApp";
    else {
      // flexible Chilean pattern: +56 9 XXXX XXXX, accepts with/without spaces, with + or not
      const digits = whatsapp.replace(/\s/g, "");
      const re = /^\+?56\s?9\s?\d{4}\s?\d{4}$/;
      const re2 = /^\+?569\d{8}$/;
      const compact = whatsapp.replace(/[\s+]/g, "");
      // Also allow normalized: check digits only
      const normalized = whatsapp.replace(/[^\d]/g, "");
      // valid if 11 digits starting 569 or 9 digits starting 9
      const isValid = re.test(whatsapp.trim()) || re2.test(digits) || (normalized.length === 11 && normalized.startsWith("569")) || (normalized.length === 9 && normalized.startsWith("9")) || (normalized.length === 12 && normalized.startsWith("569"));
      // Simpler: test flexible regex without spaces strict
      const flexible = whatsapp.replace(/\s/g, "");
      const flexRe = /^\+?56?9\d{8}$/;
      // Use main pattern + fallback
      if (!isValid && !flexRe.test(flexible)) {
        errs.whatsapp = "Formato: +56 9 1234 5678";
      }
    }
    if (!motivo) errs.motivo = "Selecciona un motivo";
    if (!prevision) errs.prevision = "Selecciona tu prevision";
    if (!fase) errs.fase = "Selecciona una fase";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      try { localStorage.setItem("eter_reserva", JSON.stringify({ nombre, prevision })); } catch {}
      const text = `Hola ETER, soy ${nombre} (${prevision}) — motivo: ${motivo}. Quiero evaluacion. Mi WhatsApp: ${whatsapp}. ${mensaje}`;
      const waUrl = `https://wa.me/56951239870?text=${encodeURIComponent(text)}`;
      const win = window.open(waUrl, "_blank");
      if (!win) {
        window.location.href = `mailto:hola@eterkine.cl?subject=Reserva evaluacion ETER&body=${encodeURIComponent(text)}`;
      }
      setLoading(false);
      setSuccess(true);
    }, 700);
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#" className="site-header__logo" aria-label="ETER inicio">
            ETER
          </a>

          <nav className="site-header__nav" aria-label="Navegacion principal">
            <a href="#evaluacion-funcional">Evaluacion</a>
            <a href="#plan-semanas">Plan</a>
            <a href="#prevision">Prevision</a>
            <a href="#sede-horario">Sede</a>
          </nav>

          <div className="site-header__right">
            <a href="tel:+56951239870" className="site-header__phone">
              +56 9 5123 9870
            </a>
            <a href="#reserva" className="site-header__cta">
              Reservar evaluacion
            </a>
          </div>

          <div className="site-header__mobile-actions">
            <a href="tel:+56951239870" className="site-header__phone-icon" aria-label="Llamar +56 9 5123 9870">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.57 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.57c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <button
              className="site-header__icon-btn"
              aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6L18 18M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav id="mobile-nav" className={`site-header__mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegacion movil">
          <a href="#evaluacion-funcional" onClick={() => setMenuOpen(false)}>Evaluacion</a>
          <a href="#plan-semanas" onClick={() => setMenuOpen(false)}>Plan</a>
          <a href="#prevision" onClick={() => setMenuOpen(false)}>Prevision</a>
          <a href="#sede-horario" onClick={() => setMenuOpen(false)}>Sede</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-label="Hero" ref={heroRef as any}>
          <div className="hero-text">
            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              Kinesiologia musculoesqueletica y deportiva · Providencia
            </motion.p>
            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              Vuelve a moverte sin dolor. Plan claro, semana a semana.
            </motion.h1>
            <motion.p
              className="hero-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.32, ease: "easeOut", delay: 0.05 }}
            >
              Evaluamos el dia 1 que te duele y cuanto te falta para volver. Te vas con un plan por semanas, ejercicios para la casa y valores por escrito.
            </motion.p>
            <div className="hero-ctas">
              <a href="#reserva" className="btn-primary">Reservar evaluacion</a>
              <a href="#plan-semanas" className="btn-secondary">Ver plan por semanas</a>
            </div>
            <p className="hero-micro">
              <span>45 min</span>
              <span className="dot" aria-hidden="true"></span>
              <span>sin dolor inmediato exigido</span>
              <span className="dot" aria-hidden="true"></span>
              <span>boleta reembolsable</span>
            </p>
          </div>
          <HeroMedia />
        </section>

        <div className="banda" aria-label="Banda de confianza">
          <div className="banda__inner">
            <div className="banda__item">
              <span className="banda__check" aria-hidden="true"><CheckIcon /></span>
              Evaluacion funcional el dia 1
            </div>
            <div className="banda__item">
              <span className="banda__check" aria-hidden="true"><CheckIcon /></span>
              Plan por semanas con alta definida
            </div>
            <div className="banda__item">
              <span className="banda__check" aria-hidden="true"><CheckIcon /></span>
              Fonasa / Isapre / Particular — boleta reembolsable
            </div>
          </div>
        </div>

        {/* #evaluacion-funcional */}
        <section id="evaluacion-funcional" className="sec-eval" aria-label="Evaluacion funcional">
          <div className="sec-eval__grid">
            <div className="sec-eval__left">
              <p className="kicker">01 — Dia 1</p>
              <div className="kicker-line" aria-hidden="true"></div>
              <h2 className="h2">La evaluacion donde se mide todo.</h2>
              <p className="p">
                45 minutos con el mismo kine. Medimos dolor (EVA), rango articular con goniometro, fuerza y como te mueves. Sales con informe de 1 pagina y plan por semanas.
              </p>
              <ul className="checklist">
                <li><span className="checklist__icon"><CheckIcon /></span> Dolor y funcion: EVA + cuestionario breve</li>
                <li><span className="checklist__icon"><CheckIcon /></span> Rango y fuerza: goniometria + dinamometria si aplica</li>
                <li><span className="checklist__icon"><CheckIcon /></span> Marcha / gesto deportivo en camilla y de pie</li>
                <li><span className="checklist__icon"><CheckIcon /></span> Informe escrito + plan: que haces cada semana y cuando te doy el alta</li>
              </ul>
              <div className="nota-caja">
                Si necesitas derivar a imagen o medico, te lo decimos en la misma sesion. Sin venderte packs a ciegas.
              </div>
              <a href="#reserva" className="link-fantasma">Que trae el informe →</a>
            </div>

            <div className="sec-eval__right">
              <div className="fichas">
                <div className="ficha"><span className="ficha__num">00 Dolor</span><span className="ficha__title">EVA 0-10 + donde y cuando</span><span className="ficha__desc">Escala visual y mapa del dolor</span></div>
                <div className="ficha"><span className="ficha__num">01 Rango</span><span className="ficha__title">Flexion / extension en grados</span><span className="ficha__desc">Goniometria bilateral</span></div>
                <div className="ficha"><span className="ficha__num">02 Fuerza</span><span className="ficha__title">Test manual + simetria izq-der</span><span className="ficha__desc">Dinamometria si aplica</span></div>
                <div className="ficha"><span className="ficha__num">03 Funcion</span><span className="ficha__title">Volver a correr / sentadilla / alcance</span><span className="ficha__desc">Gestos de tu dia a dia</span></div>
              </div>
              <div className="precio-fila">
                <span className="precio-fila__left">Evaluacion funcional 45 min — $35.000</span>
                <span className="precio-fila__right">se abona a tu pack si sigues</span>
              </div>
              <p className="precio-nota">Valor referencial; se confirma al agendar segun prevision.</p>
              <div className="eval-media-wrap">
                <TileMedia file="eter-tile-01-1x1.png" alt="Bodegon de goniometro acrilico y cinta metrica sobre papel" className="eval-acento" style={{ width: "120px", height: "120px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* #plan-semanas */}
        <section id="plan-semanas" className="sec-plan" aria-label="Plan por semanas">
          <div className="sec-plan__inner">
            <div className="sec-plan__head">
              <p className="kicker">02 — Plan por semanas</p>
              <h2 className="h2">Sabes que toca cada semana.</h2>
              <p className="p p--muted">No es sesion suelta: es un protocolo con alta. Cada fase tiene objetivo, frecuencia y precio desde.</p>
            </div>

            <div className="timeline">
              <div className="timeline__line" aria-hidden="true"></div>
              {/* Fase 1 */}
              <div className="fase-card">
                <div className="fase-card__dot" aria-hidden="true"></div>
                <p className="fase__etiq fase__etiq--1">Fase 1 · Semanas 1-2</p>
                <h3 className="fase__title">Calmar y medir</h3>
                <p className="fase__obj">Bajar dolor, recuperar rango. 2× por semana. Ejercicios diarios 12 min.</p>
                <ul className="fase__bullets"><li>Terapia manual + pauta en casa</li><li>Reevaluamos EVA cada sesion</li></ul>
                <div className="fase__precio"><span className="fase__precio-main">Desde $29.000 / sesion</span><span className="fase__precio-sub">en pack 10</span></div>
                <a href="#reserva" className="fase__cta" onClick={() => setFase("Semanas 1-2")}>Reservar esta fase →</a>
              </div>
              {/* Fase 2 */}
              <div className="fase-card fase-card--with-media">
                <div className="fase-card__dot" aria-hidden="true"></div>
                <p className="fase__etiq fase__etiq--2">Fase 2 · Semanas 3-6</p>
                <h3 className="fase__title">Recuperar fuerza</h3>
                <p className="fase__obj">Fuerza y control. 1-2× por semana. Progresion de carga.</p>
                <ul className="fase__bullets"><li>Bandas y peso libre</li><li>Re-test de rango y fuerza</li></ul>
                <div className="fase-card__media">
                  <TileMedia file="eter-tile-02-3x4.png" alt="Pesa rusa liviana y banda elastica terracota sobre papel" style={{ width: "100%", height: "240px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }} />
                </div>
                <div className="fase__precio"><span className="fase__precio-main">Desde $29.000 / sesion</span><span className="fase__precio-sub">en pack 10</span></div>
                <a href="#reserva" className="fase__cta" onClick={() => setFase("Semanas 3-6")}>Reservar esta fase →</a>
              </div>
              {/* Fase 3 */}
              <div className="fase-card">
                <div className="fase-card__dot" aria-hidden="true"></div>
                <p className="fase__etiq fase__etiq--3">Fase 3 · Alta</p>
                <h3 className="fase__title">Volver y no recaer</h3>
                <p className="fase__obj">Alta con plan de mantencion. Control a las 4 semanas.</p>
                <ul className="fase__bullets"><li>Retorno a trote / deporte / trabajo sin dolor</li></ul>
                <div className="fase__precio"><span className="fase__precio-main fase__precio-main--alta">Control alta incluido</span></div>
                <a href="#reserva" className="fase__cta" onClick={() => setFase("Mantencion")}>Reservar esta fase →</a>
              </div>
            </div>

            <div className="plan-precios-detalle" aria-label="Detalle de precios CLP">
              <div className="plan-precios-detalle__row"><span>Evaluacion funcional</span><span>$35.000 (abona a pack)</span></div>
              <div className="plan-precios-detalle__row"><span>Sesion suelta 45 min</span><span>desde $32.000 particular · Fonasa bono nivel 2 aprox $18.500</span></div>
              <div className="plan-precios-detalle__row"><span>Pack 6 sesiones</span><span>desde $174.000 ($29.000 c/u) — ahorro $18.000</span></div>
              <div className="plan-precios-detalle__row"><span>Pack 10 sesiones</span><span>desde $270.000 ($27.000 c/u) — ahorro $50.000</span></div>
              <div className="plan-precios-detalle__row"><span>Sesion neuro / kinesio respiratoria</span><span>desde $38.000</span></div>
            </div>

            <div className="plan-nota">Valores referenciales; el valor final se confirma tras evaluacion y segun prevision. Sin letra chica.</div>
          </div>
        </section>

        {/* #prevision */}
        <section id="prevision" className="sec-prevision" aria-label="Prevision">
          <div className="sec-prevision__grid">
            <div className="sec-prevision__left">
              <h2 className="h2 h2--28">Paga como te quede comodo.</h2>
              <p className="p">Boleta reembolsable para Isapre. Fonasa con bono. Particular con packs.</p>
              <div className="prevision__media-wrap">
                <TileMedia file="eter-tile-03-1x1.png" alt="Detalle de boleta papel timbrado abstracto" style={{ width: "160px", height: "160px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }} />
              </div>
            </div>
            <div className="sec-prevision__right">
              <div className="tabla-prev">
                <div className="tabla-prev__header">
                  <div>Fonasa</div><div>Isapre</div><div>Particular</div>
                </div>
                <div className="tabla-prev__fila">
                  <div>Bono nivel 2 · ~$18.500/sesion</div><div>Reembolso 60-90% segun plan · boleta $32.000</div><div>Sesion $32.000 · Pack 6 $174.000</div>
                </div>
                <div className="tabla-prev__fila">
                  <div>Tramo A/B sin copago segun derivacion</div><div>Te damos boleta timbrada al dia</div><div>Pack 10 $270.000 · 12 cuotas sin interes</div>
                </div>
                <div className="tabla-prev__fila tabla-prev__fila--destacada">
                  <div>Evaluacion $35.000 se descuenta si tomas pack</div>
                </div>
                <div className="tabla-prev__nota">
                  Verificamos tu prevision por WhatsApp antes de la evaluacion. Si no tienes prevision, avisa y te damos el valor cerrado por escrito.
                </div>
              </div>
              <a href="https://wa.me/56951239870?text=Hola%20ETER%2C%20quiero%20consultar%20mi%20prevision%20para%20kine" target="_blank" rel="noopener noreferrer" className="btn-prevision">Consultar mi prevision por WhatsApp</a>
            </div>
          </div>
        </section>

        {/* #sede-horario */}
        <section id="sede-horario" className="sec-sede" aria-label="Sede y horario">
          <div className="sec-sede__grid">
            <div className="sec-sede__media">
              <TileMedia file="eter-interior-16x9.png" alt="Interior del box luminoso — camilla vacia con luz norte" style={{ width: "100%", height: "360px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }} />
            </div>
            <div className="sec-sede__text">
              <p className="kicker">03 — Sede</p>
              <h2 className="h2 h2--26">Box luminoso, hora exacta.</h2>
              <ul className="sede-lista">
                <li>Providencia · Luis Thayer Ojeda 0191, of. 402 (Metro Los Leones)</li>
                <li>Horario: Lun–Vie 08:00–20:00 · Sab 09:00–13:00</li>
                <li>Estacionamiento bici y auto bajo ticket · Box accesible</li>
              </ul>
              <a href="https://maps.google.com/?q=Luis+Thayer+Ojeda+0191+Providencia+Santiago+Chile" target="_blank" rel="noopener noreferrer" className="mapa-placeholder" aria-label="Abrir en Google Maps">
                Mapa — abierto en Google Maps →
              </a>
              <span className="cupos">Cupos esta semana: 6</span>
            </div>
          </div>
        </section>

        {/* #reserva */}
        <section id="reserva" className="sec-reserva" aria-label="Reserva tu evaluacion">
          <div className="sec-reserva__bg" aria-hidden="true">
            <img src="/media/eter-proof-4x3.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
          </div>
          <div className="sec-reserva__grid">
            <div className="sec-reserva__left">
              <h2 className="h2 h2--28">Reserva tu evaluacion.</h2>
              <p className="p">45 min. Eliges sede y prevision. Te confirmamos por WhatsApp en el dia.</p>
              <div className="prueba-social">+8 años en Providencia · 3 kines · Informe escrito siempre · 96% vuelve para el alta</div>
              <a href="tel:+56951239870" className="telefono-grande">+56 9 5123 9870</a>
            </div>
            <div className="sec-reserva__right">
              <form className="form-card" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="res-nombre">Nombre</label>
                  <input id="res-nombre" type="text" placeholder="Nombre y apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} required aria-invalid={!!errors.nombre} />
                  {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-wa">WhatsApp</label>
                  <input id="res-wa" type="tel" placeholder="+56 9 ..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required aria-invalid={!!errors.whatsapp} />
                  {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-motivo">Motivo</label>
                  <select id="res-motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} required aria-invalid={!!errors.motivo}>
                    <option value="">Selecciona</option>
                    <option value="Dolor lumbar">Dolor lumbar</option>
                    <option value="Rodilla">Rodilla</option>
                    <option value="Hombro">Hombro</option>
                    <option value="Tobillo">Tobillo</option>
                    <option value="Post-operatorio">Post-operatorio</option>
                    <option value="Respiratoria">Respiratoria</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.motivo && <span className="field-error">{errors.motivo}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-prevision">Prevision</label>
                  <select id="res-prevision" value={prevision} onChange={(e) => setPrevision(e.target.value)} required aria-invalid={!!errors.prevision}>
                    <option value="">Selecciona</option>
                    <option value="Fonasa">Fonasa</option>
                    <option value="Isapre">Isapre</option>
                    <option value="Particular">Particular</option>
                    <option value="No se">No se</option>
                  </select>
                  {errors.prevision && <span className="field-error">{errors.prevision}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-fase">Fase preferida</label>
                  <select id="res-fase" value={fase} onChange={(e) => setFase(e.target.value)} required aria-invalid={!!errors.fase}>
                    <option value="">Selecciona</option>
                    <option value="Evaluacion esta semana">Evaluacion esta semana</option>
                    <option value="Semanas 1-2">Semanas 1-2</option>
                    <option value="Semanas 3-6">Semanas 3-6</option>
                    <option value="Mantencion">Mantencion</option>
                  </select>
                  {errors.fase && <span className="field-error">{errors.fase}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-mensaje">Mensaje</label>
                  <textarea id="res-mensaje" rows={3} placeholder="Donde te duele y hace cuanto" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn-submit" disabled={loading}>{loading ? "Enviando..." : "Reservar evaluacion — $35.000"}</button>
                <p className="micro-copy">Al enviar aceptas que te contactemos por WhatsApp. No spam. Boleta reembolsable.</p>
                {success && (
                  <div className="form-success" role="status">
                    Listo. Te escribimos hoy para confirmar hora y prevision. Si es urgente, escribe directo al +56 9 5123 9870.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Footer">
        <div className="site-footer__inner">
          <div className="footer-col">
            <p className="footer-brand">ETER — Kinesiologia</p>
            <p className="footer-sub">Providencia · Santiago · Chile</p>
          </div>
          <div className="footer-col footer-links">
            <a href="#evaluacion-funcional">Evaluacion</a>
            <a href="#plan-semanas">Plan</a>
            <a href="#prevision">Prevision</a>
            <a href="#sede-horario">Sede</a>
          </div>
          <div className="footer-col footer-contact">
            <p>hola@eterkine.cl · +56 9 5123 9870</p>
            <p className="footer-nota">Valores referenciales; se confirma tras evaluacion.</p>
          </div>
        </div>
      </footer>

      <div className={`sticky-bar ${showSticky ? "is-visible" : ""}`} aria-hidden={!showSticky}>
        <a href="tel:+56951239870" className="sticky-bar__phone">+56 9 5123 9870</a>
        <a href="#reserva" className="sticky-bar__cta">Reservar</a>
      </div>
    </>
  );
}
