import { useEffect, useRef, useState } from "react";

type Ayuno = { title: string; desc: string; badge: string; badgeClass: string };

const AYUNOS: Ayuno[] = [
  { title: "Hemograma y coagulación", desc: "Sin ayuno. Toma 5 min. Trae orden si tienes.", badge: "SIN AYUNO", badgeClass: "badge--sin" },
  { title: "Perfil lipídico / bioquímico", desc: "Ayuno 8 a 12 h. Agua permitida. Ideal antes de las 10:00.", badge: "AYUNO 8–12H", badgeClass: "badge--ayuno12" },
  { title: "Orina completa y urocultivo", desc: "Primera orina de la mañana, frasco estéril. Sin ayuno.", badge: "PRIMERA ORINA", badgeClass: "badge--orina" },
  { title: "Perfil tiroideo (TSH, T4)", desc: "Sin ayuno. Toma 5–8 min. Sin suspender levotiroxina sin indicación.", badge: "SIN AYUNO", badgeClass: "badge--sin" },
  { title: "Glicemia y curva", desc: "Ayuno 8 h. Trae colación para después.", badge: "AYUNO 8H", badgeClass: "badge--ayuno8" },
  { title: "PCR y antígeno", desc: "Sin ayuno. Resultado 12–24 h por plataforma.", badge: "SIN AYUNO", badgeClass: "badge--sin" },
];

function MediaFalta({ file, height }: { file: string; height?: number }) {
  return (
    <div className="media-falta" data-falta={file} style={height ? { height } : undefined}>
      falta: {file}
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgMobileError, setImgMobileError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // header compact on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mobile sticky: visible tras 60% hero con IntersectionObserver
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.position = "absolute";
    sentinel.style.top = "60%";
    sentinel.style.height = "1px";
    sentinel.style.width = "100%";
    sentinel.style.pointerEvents = "none";
    hero.style.position = "relative";
    hero.appendChild(sentinel);
    const io = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );
    io.observe(sentinel);
    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, []);

  useEffect(() => {
    if (imgError) console.warn("falta: ETER-hero-16x9.png");
    if (imgMobileError) console.warn("falta: ETER-hero-9x16.png");
  }, [imgError, imgMobileError]);

  const tryVideo = !videoError;

  // ayuno accordion
  const [ayunoOpen, setAyunoOpen] = useState<number | null>(0);
  const [fonasaOpen, setFonasaOpen] = useState(false);

  // media error states for new tiles
  const [errAyunoBanner, setErrAyunoBanner] = useState(false);
  const [errTile02, setErrTile02] = useState(false);
  const [errTile03, setErrTile03] = useState(false);
  const [errTile04, setErrTile04] = useState(false);
  const [errTile01, setErrTile01] = useState(false);

  useEffect(() => {
    if (errAyunoBanner) console.warn("falta: ETER-interior-16x9.png");
  }, [errAyunoBanner]);
  useEffect(() => {
    if (errTile02) console.warn("falta: ETER-tile-02-3x4.png");
  }, [errTile02]);
  useEffect(() => {
    if (errTile03) console.warn("falta: ETER-tile-03-4x3.png");
  }, [errTile03]);
  useEffect(() => {
    if (errTile04) console.warn("falta: ETER-tile-04-1x1.png");
  }, [errTile04]);
  useEffect(() => {
    if (errTile01) console.warn("falta: ETER-tile-01-1x1.png");
  }, [errTile01]);

  // form
  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    whatsapp: "",
    email: "",
    sede: "",
    examen: "",
    fecha: "",
    mensaje: "",
    acepto: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [waLink, setWaLink] = useState("");

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("eter-reserva");
      if (raw) {
        const d = JSON.parse(raw);
        setForm((f) => ({ ...f, ...d, acepto: false }));
      }
    } catch {}
  }, []);

  const todayStr = new Date().toISOString().slice(0, 10);
  const maxDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().slice(0, 10);
  })();

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 3) e.nombre = "Nombre requerido (mín. 3 caracteres).";
    if (form.rut.trim()) {
      const rutRe = /^(\d{1,2}\.)?\d{3}\.\d{3}-[\dkK]$|^\d{7,8}-[\dkK]$/;
      if (!rutRe.test(form.rut.trim())) e.rut = "RUT con formato 12.345.678-9.";
    }
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp requerido.";
    else if (!/^\+56\s?9\s?\d{4}\s?\d{4}$/.test(form.whatsapp.trim().replace(/\s+/g, " "))) {
      // accept +56 9 1234 5678 with spaces, also without space
      const cleaned = form.whatsapp.trim().replace(/\s/g, "");
      if (!/^\+569\d{8}$/.test(cleaned)) e.whatsapp = "Usa +56 9 1234 5678.";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Email válido requerido.";
    if (!form.sede) e.sede = "Elige una sede.";
    if (!form.examen) e.examen = "Elige un examen.";
    if (!form.fecha) e.fecha = "Elige fecha.";
    else if (form.fecha < todayStr || form.fecha > maxDate) e.fecha = "Fecha entre hoy y +30 días.";
    if (!form.acepto) e.acepto = "Debes aceptar ser contactado.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const text = `Hola ETER, quiero agendar ${form.examen} en ${form.sede} el ${form.fecha}.`;
      const url = `https://wa.me/56229523200?text=${encodeURIComponent(text)}`;
      setWaLink(url);
      try {
        localStorage.setItem("eter-reserva", JSON.stringify(form));
      } catch {}
    }, 800);
  }

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#inicio" className="logo" aria-label="ETER Laboratorio">
            <span className="logo-mark">ETER</span>
            <span className="logo-sub">
              <span className="logo-dot" aria-hidden />
              <span className="logo-lab">LABORATORIO</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Navegación principal">
            <a href="#indicaciones-ayuno">Ayuno</a>
            <a href="#tomas-sin-hora-vs-agenda">Tomas</a>
            <a href="#plazo-resultado">Plazos</a>
            <a href="#resultados-online">Resultados</a>
            <a href="#arancel-examenes">Precios</a>
          </nav>

          <div className="header-right">
            <a href="tel:+56229523200" className="header-phone">
              +56 2 2952 3200
            </a>
            <a href="#reserva" className="btn-cta">
              Agendar toma
            </a>
          </div>

          <button
            className="hamburger"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`nav-mobile ${menuOpen ? "is-open" : ""}`} aria-label="Navegación móvil">
          <a href="#indicaciones-ayuno" onClick={() => setMenuOpen(false)}>
            Ayuno
          </a>
          <a href="#tomas-sin-hora-vs-agenda" onClick={() => setMenuOpen(false)}>
            Tomas
          </a>
          <a href="#plazo-resultado" onClick={() => setMenuOpen(false)}>
            Plazos
          </a>
          <a href="#resultados-online" onClick={() => setMenuOpen(false)}>
            Resultados
          </a>
          <a href="#arancel-examenes" onClick={() => setMenuOpen(false)}>
            Precios
          </a>
          <a href="#reserva" onClick={() => setMenuOpen(false)} style={{ fontWeight: 600, color: "var(--accent)" }}>
            Agendar toma de muestra →
          </a>
          <a href="tel:+56229523200" style={{ fontVariantNumeric: "tabular-nums", color: "var(--ink)", fontWeight: 600 }}>
            +56 2 2952 3200
          </a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero" ref={heroRef} aria-label="Hero ETER">
          <div className="hero-text">
            <p className="kicker">LABORATORIO CLÍNICO · PROVIDENCIA · LAS CONDES · SANTIAGO CENTRO · DESDE 2012</p>
            <h1>Exámenes claros, resultados que llegan cuando los prometimos.</h1>
            <p className="hero-sub">
              Toma de muestras, laboratorio clínico y exámenes preventivos en Santiago. Ayuno indicado al agendar, resultados en línea y toma a domicilio sin sorpresas.
            </p>

            <div className="hero-ctas">
              <a href="#reserva" className="btn-primary">
                Agendar toma de muestra
              </a>
              <a href="#arancel-examenes" className="btn-secondary">
                Ver precios y preparación
              </a>
            </div>

            <p className="banda-prueba">Ayuno indicado al agendar · Resultados por correo y plataforma · Toma a domicilio RM $14.900</p>
          </div>

          <div className="hero-media">
            {tryVideo ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/media/ETER-hero-16x9.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                onError={() => {
                  console.warn("falta: ETER-hero-loop.mp4");
                  setVideoError(true);
                }}
              >
                <source src="/media/ETER-hero-loop.mp4" type="video/mp4" />
              </video>
            ) : null}

            <div
              style={{
                position: tryVideo ? ("absolute" as const) : "static",
                inset: tryVideo ? 0 : undefined,
                display: tryVideo ? "contents" : "block",
                pointerEvents: tryVideo ? "none" : undefined,
              }}
            >
              {!imgError ? (
                <picture>
                  <source media="(max-width:768px)" srcSet="/media/ETER-hero-9x16.png" />
                  <img
                    src="/media/ETER-hero-16x9.png"
                    alt=""
                    width={1200}
                    height={675}
                    onError={() => {
                      console.warn("falta: ETER-hero-16x9.png");
                      setImgError(true);
                    }}
                    style={tryVideo ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0 } : undefined}
                  />
                </picture>
              ) : (
                <div className="media-falta" data-falta="ETER-hero-16x9.png">
                  falta: ETER-hero-16x9.png
                </div>
              )}
              <img
                src="/media/ETER-hero-9x16.png"
                alt=""
                width={1}
                height={1}
                style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
                onError={() => {
                  if (!imgMobileError) {
                    console.warn("falta: ETER-hero-9x16.png");
                    setImgMobileError(true);
                  }
                }}
              />
            </div>

            <div className="hero-caption">Toma en ayunas hasta 10:30 · Resultados en línea el mismo día en exámenes seleccionados</div>
          </div>
        </section>

        <div className="banda-hero" aria-label="Información clave">
          <div className="banda-inner">
            <span>Ayuno indicado al agendar</span>
            <span>Resultados por correo y plataforma</span>
            <span>Toma a domicilio RM $14.900</span>
          </div>
        </div>

        <div className={`mobile-sticky ${showSticky ? "is-visible" : ""}`} role="region" aria-label="Acción rápida">
          <a href="tel:+56229523200" className="mobile-sticky-phone">
            +56 2 2952 3200
          </a>
          <a href="#reserva" className="btn-primary">
            Agendar toma
          </a>
        </div>
      </main>

      {/* #indicaciones-ayuno */}
      <section id="indicaciones-ayuno" className="sec">
        <div className="sec-inner">
          <div className="sec-header">
            <p className="kicker">ANTES DE VENIR</p>
            <h2>¿Cuántas horas de ayuno? Te lo decimos por escrito.</h2>
            <p className="sec-bajada">Al agendar te llega WhatsApp y correo con la preparación exacta. Sin letra chica, sin llamar para preguntar.</p>
            <ul className="bullets-intro">
              <li>Agua sí: puedes tomar agua y tus remedios habituales salvo indicación contraria.</li>
              <li>Toma en ayunas hasta las 10:30 todos los días.</li>
              <li>Si te equivocaste de ayuno, te re-agendamos sin costo el mismo día.</li>
            </ul>
          </div>

          <div className="banner-ayuno">
            {!errAyunoBanner ? (
              <img
                src="/media/ETER-interior-16x9.png"
                alt=""
                width={1200}
                height={675}
                onError={() => setErrAyunoBanner(true)}
              />
            ) : (
              <MediaFalta file="ETER-interior-16x9.png" height={320} />
            )}
          </div>

          <div className="accordion" role="list">
            {AYUNOS.map((it, i) => {
              const open = ayunoOpen === i;
              return (
                <div key={i} className="accordion-item" role="listitem">
                  <button
                    className="accordion-trigger"
                    aria-expanded={open}
                    onClick={() => setAyunoOpen(open ? null : i)}
                    style={{ paddingLeft: 16, paddingRight: 16 }}
                  >
                    <span className="accordion-left">
                      <span className="accordion-title">{it.title}</span>
                      <span className="accordion-desc">{it.desc}</span>
                    </span>
                    <span className="accordion-right">
                      <span className={`badge ${it.badgeClass}`}>{it.badge}</span>
                      <svg className={`chev ${open ? "is-open" : ""}`} viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="accordion-panel"
                    style={{
                      maxHeight: open ? 120 : 0,
                      opacity: open ? 1 : 0,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }}
                    aria-hidden={!open}
                  >
                    <div className="accordion-panel-inner">
                      {it.desc} Indicación detallada disponible al agendar por WhatsApp.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="pie-ayuno">
            ¿Dudas? Escríbenos antes de venir. Te responde una persona, no un menú eterno. <a href="tel:+56229523200">+56 2 2952 3200</a>
          </p>
        </div>
      </section>

      {/* #tomas-sin-hora-vs-agenda */}
      <section id="tomas-sin-hora-vs-agenda" className="sec sec--paper">
        <div className="sec-inner">
          <div className="tomas-grid">
            <div className="tomas-text">
              <p className="kicker">CÓMO ATENDEMOS</p>
              <h2>Sin hora o con agenda. Tú eliges.</h2>

              <div className="cards-stack">
                <div className="card-eter card-eter--accent">
                  <h3>Con agenda (recomendado)</h3>
                  <p>Eliges día y hora. Llegas, te toman la muestra en 5–8 min y te vas. Confirmación por WhatsApp con preparación y dirección exacta.</p>
                  <ul className="card-list">
                    <li>· Ventana ayunas 07:00–10:30</li>
                    <li>· Puntualidad informada</li>
                    <li>· Re-agende sin costo si falló el ayuno</li>
                  </ul>
                  <a href="#reserva" className="card-cta">
                    Agendar toma de muestra →
                  </a>
                </div>

                <div className="card-eter">
                  <h3>Sin hora (orden de llegada)</h3>
                  <p>Llegas directo a mesón. Espera promedio 12–18 min en mañana. Te avisamos si hay alta demanda por WhatsApp.</p>
                  <ul className="card-list">
                    <li>· Lun–Vie 07:00–11:00</li>
                    <li>· Sáb 07:30–11:00</li>
                    <li>· Toma a domicilio 07:30–11:00</li>
                  </ul>
                </div>
              </div>

              <p className="nota-pie">Toma a domicilio RM: $14.900 fijo, 12 comunas. Ventana 07:30–11:00.</p>
            </div>

            <div className="tomas-media">
              {!errTile02 ? (
                <img
                  src="/media/ETER-tile-02-3x4.png"
                  alt=""
                  width={600}
                  height={800}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  onError={() => setErrTile02(true)}
                />
              ) : (
                <MediaFalta file="ETER-tile-02-3x4.png" height={520} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* #plazo-resultado */}
      <section id="plazo-resultado" className="sec">
        <div className="sec-inner">
          <div className="plazo-header">
            <p className="kicker">CUÁNDO LO TIENES</p>
            <h2>Plazos que se cumplen. Sin promesas vacías.</h2>
            <p className="sec-bajada">Te avisamos por correo y WhatsApp cuando está listo. Descarga PDF desde la plataforma, sin llamar.</p>
          </div>

          <div className="plazo-media">
            {!errTile03 ? (
              <img src="/media/ETER-tile-03-4x3.png" alt="" width={1200} height={900} onError={() => setErrTile03(true)} />
            ) : (
              <MediaFalta file="ETER-tile-03-4x3.png" height={320} />
            )}
          </div>
          <p className="caption">Equipo analítico calibrado a diario — trazabilidad sin operador en foto</p>

          <div className="tabla-wrap" role="table" aria-label="Plazos de entrega">
            <div className="tabla-head" role="row">
              <span role="columnheader">Examen</span>
              <span role="columnheader">Plazo</span>
              <span role="columnheader">Entrega</span>
              <span role="columnheader">Estado</span>
            </div>
            <div className="tabla-row" role="row">
              <span>Hemograma completo</span>
              <span className="muted">6 h</span>
              <span className="muted">Mismo día si toma antes 10:30</span>
              <span>
                <span className="badge-estado badge-estado--listo">Listo hoy</span>
              </span>
            </div>
            <div className="tabla-row" role="row">
              <span>Perfil lipídico</span>
              <span className="muted">12 h</span>
              <span className="muted">Mismo día / mañana siguiente</span>
              <span>
                <span className="badge-estado badge-estado--proceso">En proceso</span>
              </span>
            </div>
            <div className="tabla-row" role="row">
              <span>Orina completa</span>
              <span className="muted">8 h</span>
              <span className="muted">Mismo día</span>
              <span>
                <span className="badge-estado badge-estado--listo">Listo hoy</span>
              </span>
            </div>
            <div className="tabla-row" role="row">
              <span>Perfil tiroideo (TSH, T4 libre)</span>
              <span className="muted">24 h</span>
              <span className="muted">Día siguiente hábil</span>
              <span>
                <span className="badge-estado badge-estado--proceso">En proceso</span>
              </span>
            </div>
            <div className="tabla-row" role="row">
              <span>Vitamina D</span>
              <span className="muted">24–48 h</span>
              <span className="muted">1–2 días hábiles</span>
              <span>
                <span className="badge-estado badge-estado--programado">Programado</span>
              </span>
            </div>
            <div className="tabla-row" role="row">
              <span>PCR</span>
              <span className="muted">12–24 h</span>
              <span className="muted">Día siguiente</span>
              <span>
                <span className="badge-estado badge-estado--programado">Programado</span>
              </span>
            </div>
          </div>

          {/* mobile collapsed cards */}
          <div className="plazo-cards" aria-label="Plazos móvil">
            {[
              { ex: "Hemograma completo", plazo: "6 h", entrega: "Mismo día si toma antes 10:30", estado: "Listo hoy", cls: "listo" },
              { ex: "Perfil lipídico", plazo: "12 h", entrega: "Mismo día / mañana siguiente", estado: "En proceso", cls: "proceso" },
              { ex: "Orina completa", plazo: "8 h", entrega: "Mismo día", estado: "Listo hoy", cls: "listo" },
              { ex: "Perfil tiroideo (TSH, T4 libre)", plazo: "24 h", entrega: "Día siguiente hábil", estado: "En proceso", cls: "proceso" },
              { ex: "Vitamina D", plazo: "24–48 h", entrega: "1–2 días hábiles", estado: "Programado", cls: "programado" },
              { ex: "PCR", plazo: "12–24 h", entrega: "Día siguiente", estado: "Programado", cls: "programado" },
            ].map((r, i) => (
              <div key={i} className="plazo-card">
                <div className="plazo-card-row">
                  <span>Examen</span>
                  <span>{r.ex}</span>
                </div>
                <div className="plazo-card-row">
                  <span>Plazo</span>
                  <span>{r.plazo}</span>
                </div>
                <div className="plazo-card-row">
                  <span>Entrega</span>
                  <span>{r.entrega}</span>
                </div>
                <div className="plazo-card-row">
                  <span>Estado</span>
                  <span className={`badge-estado badge-estado--${r.cls}`}>{r.estado}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="plazo-pie">Plazos en días hábiles. Feriados se informa al agendar. Tiempo promedio entrega actualizado julio 2025.</p>
        </div>
      </section>

      {/* #resultados-online */}
      <section id="resultados-online" className="sec sec--paper">
        <div className="sec-inner">
          <div className="resultados-grid">
            <div className="resultados-media">
              {!errTile04 ? (
                <img src="/media/ETER-tile-04-1x1.png" alt="" width={600} height={600} onError={() => setErrTile04(true)} />
              ) : (
                <MediaFalta file="ETER-tile-04-1x1.png" height={460} />
              )}
            </div>
            <div className="resultados-text">
              <p className="kicker">RESULTADOS EN LÍNEA</p>
              <h2>Tu resultado donde lo necesitas. Sin llamar tres veces.</h2>
              <p className="sec-bajada">Correo + plataforma con PDF descargable + aviso por WhatsApp. Reenvío sin costo si lo perdiste.</p>

              <div className="pasos">
                <div className="paso">
                  <span className="paso-num">01</span>
                  <div>
                    <h4>Te llega aviso</h4>
                    <p>Correo y WhatsApp cuando está listo. Asunto: ‘ETER — Resultado disponible’.</p>
                  </div>
                </div>
                <div className="paso">
                  <span className="paso-num">02</span>
                  <div>
                    <h4>Descargas PDF</h4>
                    <p>Plataforma con RUT y código. PDF con folio y firma. Compartes con tu médico en 1 toque.</p>
                  </div>
                </div>
                <div className="paso">
                  <span className="paso-num">03</span>
                  <div>
                    <h4>Queda guardado</h4>
                    <p>Historial 24 meses. Reenvío y boleta para reembolso sin pedirlo dos veces.</p>
                  </div>
                </div>
              </div>

              <ul className="bullets-conf">
                <li>Isapre y Fonasa: boleta con detalle para reembolso.</li>
                <li>Si es alterado, te contactamos el mismo día.</li>
              </ul>

              <a href="#reserva" className="btn-demo">
                Ver demo de plataforma <small>· acceso real con tu RUT, no demo genérica</small>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* #arancel-examenes */}
      <section id="arancel-examenes" className="sec">
        <div className="sec-inner">
          <div className="sec-header">
            <p className="kicker">PRECIOS CLAROS</p>
            <h2>¿Cuánto cuesta? Aquí, sin letra chica.</h2>
            <p className="sec-bajada">Valores referenciales 2025 en CLP. Se confirman al agendar según previsión y comuna. Sin sorpresas después de la toma.</p>
            <p style={{ marginTop: 10 }}>
              <button type="button" className="link-wa" onClick={() => setFonasaOpen((v) => !v)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                ¿Cómo funciona Fonasa/Isapre?
              </button>
            </p>
          </div>

          <div className="arancel-layout">
            <div className="arancel-main">
              <div className="tabla-arancel" role="table" aria-label="Arancel exámenes">
                <div className="tabla-arancel-head" role="row">
                  <span role="columnheader">Examen</span>
                  <span role="columnheader">Desde CLP</span>
                  <span role="columnheader">Preparación</span>
                  <span role="columnheader">Plazo</span>
                </div>
                <div className="arancel-row" role="row">
                  <span className="examen">Hemograma completo</span>
                  <span className="precio">$12.900</span>
                  <span className="meta">Sin ayuno</span>
                  <span className="meta">6 h</span>
                </div>
                <div className="arancel-row" role="row">
                  <span className="examen">Perfil lipídico (colesterol total, HDL, LDL, triglicéridos)</span>
                  <span className="precio">$18.500</span>
                  <span className="meta">Ayuno 8–12 h</span>
                  <span className="meta">12 h</span>
                </div>
                <div className="arancel-row" role="row">
                  <span className="examen">Orina completa</span>
                  <span className="precio">$9.700</span>
                  <span className="meta">Primera orina</span>
                  <span className="meta">8 h</span>
                </div>
                <div className="arancel-row" role="row">
                  <span className="examen">Perfil tiroideo (TSH + T4 libre)</span>
                  <span className="precio">$29.900</span>
                  <span className="meta">Sin ayuno</span>
                  <span className="meta">24 h</span>
                </div>
                <div className="arancel-row" role="row">
                  <span className="examen">Vitamina D (25-OH)</span>
                  <span className="precio">$22.900</span>
                  <span className="meta">Sin ayuno</span>
                  <span className="meta">24–48 h</span>
                </div>
                <div className="arancel-row" role="row">
                  <span className="examen">Toma a domicilio (RM, 12 comunas)</span>
                  <span className="precio">$14.900</span>
                  <span className="meta">Según examen</span>
                  <span className="meta">Ventana 07:30–11:00</span>
                </div>
                <div className="arancel-row arancel-row--pack" role="row">
                  <span className="examen">Pack preventivo anual (hemograma + perfil lipídico + orina + glicemia)</span>
                  <span className="precio">$52.900</span>
                  <span className="meta">Preparación mixta</span>
                  <span className="meta">24 h</span>
                </div>
              </div>

              {/* mobile cards */}
              <div className="arancel-cards" aria-label="Arancel móvil">
                {[
                  { ex: "Hemograma completo", precio: "$12.900", prep: "Sin ayuno", plazo: "6 h" },
                  { ex: "Perfil lipídico (colesterol total, HDL, LDL, triglicéridos)", precio: "$18.500", prep: "Ayuno 8–12 h", plazo: "12 h" },
                  { ex: "Orina completa", precio: "$9.700", prep: "Primera orina", plazo: "8 h" },
                  { ex: "Perfil tiroideo (TSH + T4 libre)", precio: "$29.900", prep: "Sin ayuno", plazo: "24 h" },
                  { ex: "Vitamina D (25-OH)", precio: "$22.900", prep: "Sin ayuno", plazo: "24–48 h" },
                  { ex: "Toma a domicilio (RM, 12 comunas)", precio: "$14.900", prep: "Según examen", plazo: "Ventana 07:30–11:00" },
                  { ex: "Pack preventivo anual (hemograma + perfil lipídico + orina + glicemia)", precio: "$52.900", prep: "Preparación mixta", plazo: "24 h", pack: true },
                ].map((r, i) => (
                  <div key={i} className="arancel-card" style={r.pack ? { background: "#F6F7F9", borderLeft: "2px solid var(--accent)" } : undefined}>
                    <span className="examen">{r.ex}</span>
                    <span className="precio">{r.precio}</span>
                    <span className="meta">
                      {r.prep} · {r.plazo}
                    </span>
                  </div>
                ))}
              </div>

              <p className="nota-honesta">
                Valores referenciales 2025. Con o sin orden médica según examen (te lo confirmamos al agendar). Bonos Fonasa nivel 1 e Isapre con reembolso indicados antes de
                la toma. El valor final se confirma antes de tomar la muestra, nunca después. Factura y boleta para reembolso incluidas.
              </p>

              <div className="acordeon-fonasa">
                <button type="button" aria-expanded={fonasaOpen} onClick={() => setFonasaOpen((v) => !v)}>
                  <span>¿Cómo funciona Fonasa/Isapre?</span>
                  <svg className={`chev ${fonasaOpen ? "is-open" : ""}`} viewBox="0 0 16 16" fill="none" aria-hidden style={{ width: 16, height: 16 }}>
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </button>
                <div className="acordeon-fonasa-panel" style={{ maxHeight: fonasaOpen ? 120 : 0, opacity: fonasaOpen ? 1 : 0 }}>
                  Fonasa nivel 1: bono en caja al momento de la toma. Isapre: pagas particular y te entregamos boleta detallada para reembolso en tu app. Si tu plan cubre 100%, lo
                  vemos al agendar.
                </div>
              </div>

              <div className="cta-arancel">
                <a href="#reserva" className="btn-primary">
                  Agendar toma de muestra
                </a>
                <a href="https://wa.me/56229523200?text=Hola%20ETER%2C%20quiero%20cotizar%20ex%C3%A1menes." target="_blank" rel="noreferrer" className="link-wa">
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>

            <div className="arancel-side">
              {!errTile01 ? (
                <img src="/media/ETER-tile-01-1x1.png" alt="" width={400} height={400} onError={() => setErrTile01(true)} />
              ) : (
                <MediaFalta file="ETER-tile-01-1x1.png" height={240} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* #reserva */}
      <section id="reserva" className="sec sec--paper">
        <div className="sec-inner">
          <div className="reserva-grid">
            <div className="reserva-form">
              <p className="kicker">AGENDA TU TOMA</p>
              <h2>¿Listo para tu toma? Te responde una persona.</h2>
              <p className="sec-bajada" style={{ marginBottom: 22 }}>
                Elige sede o domicilio. Te confirmamos preparación por escrito en minutos.
              </p>

              {success ? (
                <div className="success-box" role="status">
                  <strong>Listo. Te escribimos en minutos con la preparación.</strong>
                  <br />
                  Revisa WhatsApp y correo con la indicación de ayuno.
                  <div style={{ marginTop: 14 }}>
                    <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary">
                      Abrir WhatsApp +56 2 2952 3200
                    </a>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <button type="button" className="link-wa" onClick={() => setSuccess(false)}>
                      Enviar otra solicitud
                    </button>
                  </div>
                </div>
              ) : (
                <form className="form-eter" onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label htmlFor="eter-nombre">Nombre y apellido *</label>
                    <input
                      id="eter-nombre"
                      type="text"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Ej. María González"
                      className={errors.nombre ? "is-error" : ""}
                      aria-invalid={!!errors.nombre}
                    />
                    {errors.nombre && <span className="error-msg">{errors.nombre}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="eter-rut">RUT (opcional)</label>
                    <input
                      id="eter-rut"
                      type="text"
                      value={form.rut}
                      onChange={(e) => setForm({ ...form, rut: e.target.value })}
                      placeholder="12.345.678-9"
                      className={errors.rut ? "is-error" : ""}
                      aria-invalid={!!errors.rut}
                    />
                    {errors.rut ? <span className="error-msg">{errors.rut}</span> : <span className="error-msg" style={{ color: "var(--gris-suave)" }}>para boleta Fonasa/Isapre</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="eter-wa">WhatsApp *</label>
                    <input
                      id="eter-wa"
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="+56 9 1234 5678"
                      className={errors.whatsapp ? "is-error" : ""}
                      aria-invalid={!!errors.whatsapp}
                    />
                    {errors.whatsapp && <span className="error-msg">{errors.whatsapp}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="eter-email">Email *</label>
                    <input
                      id="eter-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@correo.cl"
                      className={errors.email ? "is-error" : ""}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="eter-sede">Sede *</label>
                    <select
                      id="eter-sede"
                      value={form.sede}
                      onChange={(e) => setForm({ ...form, sede: e.target.value })}
                      className={errors.sede ? "is-error" : ""}
                      aria-invalid={!!errors.sede}
                    >
                      <option value="">Selecciona sede</option>
                      <option value="Providencia">Providencia</option>
                      <option value="Las Condes">Las Condes</option>
                      <option value="Santiago Centro">Santiago Centro</option>
                      <option value="Toma a domicilio RM">Toma a domicilio RM</option>
                    </select>
                    {errors.sede && <span className="error-msg">{errors.sede}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="eter-examen">Examen *</label>
                    <select
                      id="eter-examen"
                      value={form.examen}
                      onChange={(e) => setForm({ ...form, examen: e.target.value })}
                      className={errors.examen ? "is-error" : ""}
                      aria-invalid={!!errors.examen}
                    >
                      <option value="">Selecciona examen</option>
                      <option value="Hemograma">Hemograma</option>
                      <option value="Perfil lipídico">Perfil lipídico</option>
                      <option value="Orina">Orina</option>
                      <option value="Tiroideo">Tiroideo</option>
                      <option value="Vitamina D">Vitamina D</option>
                      <option value="Pack preventivo">Pack preventivo</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.examen && <span className="error-msg">{errors.examen}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="eter-fecha">Fecha preferida *</label>
                    <input
                      id="eter-fecha"
                      type="date"
                      value={form.fecha}
                      min={todayStr}
                      max={maxDate}
                      onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                      className={errors.fecha ? "is-error" : ""}
                      aria-invalid={!!errors.fecha}
                    />
                    {errors.fecha && <span className="error-msg">{errors.fecha}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="eter-mensaje">Mensaje</label>
                    <textarea
                      id="eter-mensaje"
                      rows={3}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="¿Tomas remedios? ¿Ayuno cumplido? Cuéntanos"
                    />
                  </div>

                  <div className="field">
                    <label style={{ textTransform: "none", letterSpacing: 0, fontWeight: 400, display: "flex", gap: 8, alignItems: "flex-start", cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        checked={form.acepto}
                        onChange={(e) => setForm({ ...form, acepto: e.target.checked })}
                        style={{ marginTop: 4 }}
                      />
                      <span style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.5 }}>Acepto ser contactado por WhatsApp/correo para confirmar preparación *</span>
                    </label>
                    {errors.acepto && <span className="error-msg">{errors.acepto}</span>}
                  </div>

                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? "Enviando…" : "Agendar toma de muestra"}
                  </button>
                  <p className="micropy">Te responde una persona. Indicaciones de ayuno por escrito antes de venir. No spam.</p>
                </form>
              )}
            </div>

            <div className="reserva-info">
              <p className="tel-gigante">
                <a href="tel:+56229523200">+56 2 2952 3200</a>
              </p>
              <p className="sec-bajada" style={{ marginTop: 8 }}>
                ¿Dudas? Te responde una persona, no un menú eterno
              </p>

              <div className="horarios">
                <span>Toma en sede: Lun–Vie 07:00–18:00 · Sáb 07:30–13:00</span>
                <span>Toma en ayunas hasta 10:30 todos los días.</span>
                <span>Domicilio: 07:30–11:00 · 12 comunas RM · $14.900</span>
              </div>

              <div className="sedes">
                <div className="sede">
                  <strong>Providencia — Av. Providencia 1208, piso 3</strong>
                  <span>07:00–18:00</span>
                  <a href="https://maps.google.com/?q=Av.+Providencia+1208+Santiago" target="_blank" rel="noreferrer">
                    Cómo llegar
                  </a>
                </div>
                <div className="sede">
                  <strong>Las Condes — Rosario Norte 532</strong>
                  <span>07:00–18:00</span>
                  <a href="https://maps.google.com/?q=Rosario+Norte+532+Las+Condes" target="_blank" rel="noreferrer">
                    Cómo llegar
                  </a>
                </div>
                <div className="sede">
                  <strong>Santiago Centro — Huérfanos 812</strong>
                  <span>07:00–17:30</span>
                  <a href="https://maps.google.com/?q=Hu%C3%A9rfanos+812+Santiago" target="_blank" rel="noreferrer">
                    Cómo llegar
                  </a>
                </div>
              </div>

              <p className="email-line">
                <a href="mailto:hola@eterlab.cl">hola@eterlab.cl</a>
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-inner">
            <span>ETER Laboratorio SpA · RUT 76.XXX.XXX-X · © 2025 ETER. Resultados con folio y firma. Toma a domicilio según cobertura.</span>
            <span>
              <a href="#">Privacidad</a> · <a href="#">Términos</a>
            </span>
          </div>
        </footer>
      </section>
    </>
  );
}
