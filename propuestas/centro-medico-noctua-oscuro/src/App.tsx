import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "Especialidades", href: "#especialidades-agenda" },
  { label: "Convenios", href: "#convenios-bonos" },
  { label: "Exámenes", href: "#examenes-sede" },
  { label: "Sede", href: "#sucursales-horario" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > last && y > 80 && !open) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`header ${hidden ? "header--hidden" : ""} ${scrolled ? "header--scrolled" : ""}`}
        role="banner"
      >
        <div className="header__inner">
          <a href="#guardia" className="header__brand" aria-label="NOCTUA — inicio">
            <span className="header__brand-text">NOCTUA</span>
            <span className="header__dot" aria-hidden="true" />
          </a>

          <nav className="header__nav" aria-label="Principal">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header__right">
            <a href="tel:+56232101593" className="header__tel" aria-label="Llamar a +56 2 3210 1593">
              +56 2 3210 1593
            </a>
            <a href="#reserva" className="header__cta">
              Pedir hora hoy
            </a>
          </div>

          <button
            className={`header__burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open ? (true as unknown as boolean) : undefined}
      >
        <nav className="mobile-menu__links" aria-label="Móvil">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#reserva" onClick={() => setOpen(false)}>Reserva</a>
        </nav>

        <div>
          <span className="mobile-menu__tel-label">Llámanos — Lun a Sáb 08:00–21:00</span>
          <a href="tel:+56232101593" className="mobile-menu__tel">+56 2 3210 1593</a>
          <a href="#reserva" className="mobile-menu__cta" onClick={() => setOpen(false)}>Pedir hora hoy</a>
        </div>

        <div className="mobile-menu__foot">
          Av. Providencia 1.234, Providencia — Metro Los Leones (L1) — Lun–Vie 08:00–21:00 · Sáb 09:00–14:00
          <br />© 2026 NOCTUA · Centro Médico · Providencia, Chile
        </div>
      </div>
    </>
  );
}

function HeroMedia() {
  const [videoExists, setVideoExists] = useState<boolean | null>(null);
  const [img16Exists, setImg16Exists] = useState<boolean | null>(null);
  const [img9Exists, setImg9Exists] = useState<boolean | null>(null);

  useEffect(() => {
    const check = async (url: string) => {
      try {
        const r = await fetch(url, { method: "HEAD" });
        return r.ok;
      } catch { return false; }
    };
    check("media/noctua-hero-16x9.png").then((ok) => {
      setImg16Exists(ok);
      if (!ok) console.warn("[NOCTUA] Falta media: noctua-hero-16x9.png");
    });
    check("media/noctua-hero-9x16.png").then((ok) => {
      setImg9Exists(ok);
      if (!ok) console.warn("[NOCTUA] Falta media: noctua-hero-9x16.png");
    });
    check("media/noctua-hero-loop.mp4").then((ok) => {
      setVideoExists(ok);
      if (ok) console.log("[NOCTUA] noctua-hero-loop.mp4 disponible — usando video");
      else console.log("[NOCTUA] noctua-hero-loop.mp4 no disponible — se usa imagen");
    });
  }, []);

  const missing16 = img16Exists === false;
  const missing9 = img9Exists === false;
  const useVideo = videoExists === true && !missing16;

  return (
    <div className="hero__media" role="img" aria-label="Recepción nocturna vidriada con luz clínica blanca neutra filtrada — NOCTUA">
      <span className="hero__grain" aria-hidden="true" />
      {useVideo ? (
        <video
          className="hero__img-desktop"
          autoPlay
          muted
          loop
          playsInline
          poster="media/noctua-hero-16x9.png"
          aria-label="Recepción nocturna vidriada con luz clínica blanca neutra filtrada — NOCTUA"
        >
          <source src="media/noctua-hero-loop.mp4" type="video/mp4" />
        </video>
      ) : missing16 ? (
        <div className="media-falta" data-falta="noctua-hero-16x9.png" style={{ aspectRatio: "16/9" } as React.CSSProperties}>
          Falta media: noctua-hero-16x9.png
        </div>
      ) : (
        <img
          className="hero__img-desktop"
          src="media/noctua-hero-16x9.png"
          alt="Recepción nocturna vidriada con luz clínica blanca neutra filtrada — NOCTUA"
          loading="eager"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            setImg16Exists(false);
            const parent = img.parentElement;
            if (parent && !parent.querySelector('[data-falta="noctua-hero-16x9.png"]')) {
              const d = document.createElement("div");
              d.className = "media-falta";
              d.setAttribute("data-falta", "noctua-hero-16x9.png");
              d.textContent = "Falta media: noctua-hero-16x9.png";
              d.style.cssText = "aspect-ratio:16/9; border:1px dashed var(--line); display:grid; place-items:center; color:var(--muted); background:var(--surface); padding:20px; text-align:center;";
              parent.appendChild(d);
            }
          }}
        />
      )}
      {!missing16 && missing9 ? (
        <div
          className="media-falta--mobile"
          data-falta="noctua-hero-9x16.png"
          style={{ display: "none", aspectRatio: "9/16" } as React.CSSProperties}
        >
          Falta media: noctua-hero-9x16.png
        </div>
      ) : !missing16 ? (
        <img
          className="hero__img-mobile"
          src="media/noctua-hero-9x16.png"
          alt="Recepción nocturna vidriada con luz clínica blanca neutra filtrada — NOCTUA"
          loading="eager"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            setImg9Exists(false);
          }}
        />
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section id="guardia" aria-label="Hero — guardia nocturna">
      <div className="hero__copy">
        <p className="hero__kicker reveal">CENTRO MEDICO · PROVIDENCIA — LUN A SAB 08:00–21:00</p>
        <h1 className="hero__title reveal reveal-2">Tu hora es hoy. NOCTUA te atiende sin espera ni letra chica.</h1>
        <p className="hero__sub reveal reveal-3">
          Medicina general, pediatría, ginecología y traumatología con bono electrónico. Agenda en 2 minutos, examen en la misma sede y
          resultado en 24h.
        </p>

        <div className="hero__ctas">
          <a href="#reserva" className="cta-primary">
            Pedir hora hoy
          </a>
          <a href="#convenios-bonos" className="cta-ghost">
            Ver convenios
          </a>
        </div>

        <p className="hero__banda">Bono electrónico Isapre y Fonasa · Boleta reembolsable · Sin sobreventa de exámenes</p>

        <div className="hero__avail" aria-live="polite">
          <span className="dot-avail" aria-hidden="true" />
          <span>Hoy quedan 6 horas disponibles — última 19:40</span>
        </div>

        <p className="hero__tel2">
          ¿Prefieres llamar? <a href="tel:+56232101593">+56 2 3210 1593</a>
        </p>
      </div>

      <HeroMedia />
    </section>
  );
}

/* Helper media with fallback */
function MediaImage({
  src,
  alt,
  ratio,
  filename,
  className,
  style,
}: {
  src: string;
  alt: string;
  ratio: string;
  filename: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    // report missing after onError
  }, []);
  if (missing) {
    return (
      <div className="media-falta" data-falta={filename} style={{ aspectRatio: ratio, ...(style || {}) } as React.CSSProperties}>
        Falta media: {filename}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => {
        console.warn(`[NOCTUA] Falta media: ${filename}`);
        setMissing(true);
      }}
    />
  );
}

/* #especialidades-agenda */
const ESPECIALIDADES = [
  { nombre: "Medicina general adulto", detalle: "20 min · control, licencia", fonasa: "$19.900", particular: "$29.900" },
  { nombre: "Pediatría", detalle: "20 min · control sano", fonasa: "$19.900", particular: "$32.900" },
  { nombre: "Ginecología y obstetricia", detalle: "30 min · PAP incluido", fonasa: "$22.900", particular: "$38.900" },
  { nombre: "Traumatología", detalle: "20 min · infiltración si aplica", fonasa: "$24.900", particular: "$42.900" },
  { nombre: "Medicina interna", detalle: "30 min · crónicos", fonasa: "$24.900", particular: "$42.900" },
  { nombre: "Dermatología", detalle: "20 min · lunares", fonasa: "$26.900", particular: "$45.900" },
  { nombre: "Otorrino", detalle: "20 min · audiometría en sede", fonasa: "$26.900", particular: "$45.900" },
  { nombre: "Psicología adulto", detalle: "45 min · presencial/tele", fonasa: "$18.900", particular: "$34.900" },
];

function EspecialidadesAgenda() {
  return (
    <section id="especialidades-agenda" className="section">
      <div className="container">
        <p className="kicker">ESPECIALIDADES</p>
        <h2 className="h2">La hora que necesitas, sin derivaciones eternas.</h2>
        <p className="micro">Todas con bono electrónico. Si necesitas examen, lo tomas acá.</p>

        <div className="esp-grid">
          <div className="esp-list">
            {ESPECIALIDADES.map((e) => (
              <div key={e.nombre} className="esp-row">
                <div className="esp-row__main">
                  <span className="esp-row__nombre">{e.nombre}</span>
                  <span className="esp-row__detalle">{e.detalle}</span>
                </div>
                <div className="esp-row__precio" aria-label={`desde ${e.fonasa} Fonasa / ${e.particular} particular`}>
                  <span className="esp-precio-fonasa">desde {e.fonasa}</span>
                  <span className="esp-precio-sep">·</span>
                  <span className="esp-precio-part">{e.particular}</span>
                </div>
                <a href="#reserva" className="esp-row__cta">
                  Pedir hora
                </a>
              </div>
            ))}
            <p className="esp-nota">Valores referenciales; se confirma al agendar según previsión. Sin cobros sorpresa. Si el bono no corre, te avisamos antes.</p>
          </div>

          <div className="esp-media">
            <MediaImage
              src="media/noctua-box-1x1.png"
              alt="Box de consulta vacío noche, camilla blanca centrada, luz clínica cenital 4000K — NOCTUA"
              ratio="1 / 1"
              filename="noctua-box-1x1.png"
              className="esp-media__img"
            />
            <p className="esp-media__cap">Box privado · bono en el momento · receta electrónica</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConveniosBonos() {
  const [bandaMissing, setBandaMissing] = useState(false);
  return (
    <section id="convenios-bonos" className="section section--surface">
      <div className="container">
        <p className="kicker">CONVENIOS</p>
        <h2 className="h2">Fonasa, Isapre o particular: pagas claro antes de entrar.</h2>
        <p className="section__p">Bono electrónico en mesón. Si tu Isapre no tiene convenio, emitimos boleta reembolsable en el momento.</p>

        <div className="convenios__table">
          <div className="convenios__col">
            <div className="convenios__head">
              <h3 className="convenios__title">Fonasa</h3>
              <span className="tag tag--teal">Bono en 2 min</span>
            </div>
            <ul className="convenios__bullets">
              <li>Tramo A–D todos · Bono electrónico en mesón</li>
              <li>Copago desde $7.990</li>
              <li>Sin compra previa en sucursal</li>
            </ul>
          </div>
          <div className="convenios__col">
            <div className="convenios__head">
              <h3 className="convenios__title">Isapre</h3>
              <span className="tag tag--bruma">Convenio + reembolso</span>
            </div>
            <ul className="convenios__bullets">
              <li>Colmena, Banmédica, Vida Tres, Consalud, CruzBlanca, Masvida</li>
              <li>Bono electrónico si hay convenio</li>
              <li>Si no, boleta reembolsable inmediata</li>
              <li>Copago según plan, te lo cotizamos por WhatsApp</li>
            </ul>
          </div>
          <div className="convenios__col">
            <div className="convenios__head">
              <h3 className="convenios__title">Particular</h3>
              <span className="tag tag--ghost">Precio cerrado</span>
            </div>
            <ul className="convenios__bullets">
              <li>Pago Webpay / transferencia</li>
              <li>Boleta inmediata</li>
              <li>Valor particular desde $29.900 medicina general</li>
              <li>Pack control + exámenes con 15% dcto</li>
            </ul>
          </div>
        </div>

        <div className="convenios__fila-inferior">
          <span>¿Dudas con tu plan? Escríbenos el RUT y previsión por WhatsApp y te decimos el copago en 5 minutos.</span>
          <a href="https://wa.me/56232101593?text=Hola%20NOCTUA%20quiero%20cotizar%20mi%20copago%20seg%C3%BAn%20mi%20previsi%C3%B3n" target="_blank" rel="noopener noreferrer" className="convenios__cta-wsp">Cotizar copago por WhatsApp →</a>
        </div>

        <div className="convenios__banda">
          {!bandaMissing ? (
            <img
              src="media/noctua-senaletica-4x3.png"
              alt="Señalética desenfocada sobre vidrio pavonado, luz clínica rasante — NOCTUA"
              loading="lazy"
              onError={() => {
                console.warn("[NOCTUA] Falta media: noctua-senaletica-4x3.png");
                setBandaMissing(true);
              }}
            />
          ) : (
            <div className="media-falta" data-falta="noctua-senaletica-4x3.png" style={{ aspectRatio: "4/3" }}>
              Falta media: noctua-senaletica-4x3.png
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ExamenesSede() {
  return (
    <section id="examenes-sede" className="section section--grain">
      <div className="container">
        <div className="examenes__grid">
          <div className="examenes__left">
            <p className="kicker">EXAMENES EN SEDE</p>
            <h2 className="h2">No te mandamos a otro lado para un examen básico.</h2>
            <p className="section__p">Toma de muestra 08:00–10:30 sin hora. Imagenología con agenda en el mismo box. Resultado en tu correo y en la app.</p>
            <div className="badge">MISMA SEDE — Toma hasta 10:30</div>
            <ul className="examenes__lista">
              <li><span>Hemograma, perfil lipídico, glicemia</span><span className="examenes__meta">ayuno 8h — resultado 24h</span></li>
              <li><span>Orina completa</span><span className="examenes__meta">sin ayuno — 24h</span></li>
              <li><span>ECG reposo</span><span className="examenes__meta">sin preparación — 24h</span></li>
              <li><span>Ecotomografía abdominal</span><span className="examenes__meta">ayuno 8h — 48h</span></li>
              <li><span>Radiografía tórax</span><span className="examenes__meta">sin preparación — 24h</span></li>
              <li><span>Audiometría</span><span className="examenes__meta">sin preparación — inmediata</span></li>
            </ul>
            <p className="examenes__nota">Indicaciones de ayuno se confirman al agendar. Si vienes sin ayuno, igual te atendemos y reprogramamos solo el examen.</p>
          </div>
          <div className="examenes__media">
            <span className="grain grain--section" aria-hidden="true" />
            <MediaImage
              src="media/noctua-examen-3x4.png"
              alt="Sala de toma de muestra vacía noche, gradilla y bandeja blanca, luz clínica neutra — NOCTUA"
              ratio="3 / 4"
              filename="noctua-examen-3x4.png"
              className="examenes__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SucursalesHorario() {
  return (
    <section id="sucursales-horario" className="section">
      <div className="container">
        <div className="sede__grid">
          <div className="sede__left">
            <p className="kicker">SEDE Y HORARIO</p>
            <h2 className="h2">Una sede, horario largo, sin sucursales fantasma.</h2>

            <p className="sede__direccion">Av. Providencia 1.234, Providencia — Metro Los Leones (L1) — Salida norte 3 min a pie</p>

            <div className="sede__mapa" aria-label="Mapa abstracto Providencia — Metro Los Leones">
              <div className="sede__mapa-grid" aria-hidden="true" />
              <div className="sede__pin" aria-hidden="true">
                <span className="sede__pin-dot" />
                <span className="sede__pin-pulse" />
              </div>
              <span className="sede__mapa-label">Providencia · Los Leones L1 — 3 min</span>
            </div>

            <div className="sede__horario">
              <div className="sede__horario-row sede__horario-row--vivo">
                <span>Lun–Vie</span><span>08:00–21:00 (última 19:40)</span><span className="sede__vivo"><span className="dot-avail dot-avail--sm" aria-hidden="true" /> HOY ABIERTO</span>
              </div>
              <div className="sede__horario-row"><span>Sáb</span><span>09:00–14:00 (última 13:00)</span><span></span></div>
              <div className="sede__horario-row sede__horario-row--cerrado"><span>Dom</span><span>cerrado</span><span></span></div>
              <div className="sede__horario-row sede__horario-row--muestra"><span>Toma de muestra</span><span>Lun–Vie 08:00–10:30 sin hora</span><span className="sede__tag-muestra">SIN HORA</span></div>
            </div>

            <ul className="sede__bullets">
              <li>Estacionamiento subterráneo $2.900/hora</li>
              <li>Bicicletero interior</li>
              <li>Acceso silla ruedas por rampa lateral</li>
              <li>Ascensor a box segundo piso</li>
            </ul>

            <div className="sede__ctas">
              <a href="https://wa.me/56232101593?text=Hola%20NOCTUA%20%C2%BFc%C3%B3mo%20llego%20a%20Av.%20Providencia%201.234%3F" target="_blank" rel="noopener noreferrer" className="cta-ghost">Cómo llegar por WhatsApp</a>
              <a href="#reserva" className="cta-primary">Pedir hora hoy</a>
            </div>
          </div>

          <div className="sede__media">
            <MediaImage
              src="media/noctua-sede-16x9.png"
              alt="Sala de espera vacía noche, sillas roble claro y porcelanato gris, luz clínica puntual — NOCTUA"
              ratio="16 / 9"
              filename="noctua-sede-16x9.png"
              className="sede__img"
            />
            <p className="sede__media-cap">Lu–Vi 08:00–21:00 · Sáb 09:00–14:00 · Dom cerrado · Última hora 19:40</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const DUDAS = [
  { q: "¿Atienden Fonasa sin comprar bono antes?", a: "Sí. Lo emitimos en mesón con tu RUT. Llega con tu carnet y 5 minutos de anticipación. Tramos A–D." },
  { q: "¿Cuánto demora el resultado de exámenes?", a: "Sangre y orina 24h hábiles, eco 48h. Te llega al correo y lo ves en la app. Si es urgente, avisa en mesón y lo priorizamos." },
  { q: "¿Puedo tomar examen sin hora?", a: "Toma de muestra sí, 08:00–10:30 sin agenda. Imagenología y ECG con hora para no hacerte esperar." },
  { q: "¿Qué pasa si mi Isapre no tiene convenio?", a: "Te emitimos boleta reembolsable en el momento. Te cotizamos el copago por WhatsApp antes de agendar para que no haya sorpresas." },
  { q: "¿Hay estacionamiento?", a: "Subterráneo en el edificio, $2.900 la hora. Si vienes en bici, tenemos bicicletero. Metro Los Leones a 3 minutos." },
];

function Dudas() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="dudas" className="section section--border-top">
      <div className="container container--narrow">
        <p className="kicker" style={{ textAlign: "center" }}>DUDAS</p>
        <h2 className="h2" style={{ textAlign: "center" }}>Respuestas cortas, sin letra chica.</h2>
        <div className="dudas__lista">
          {DUDAS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`duda ${isOpen ? "duda--open" : ""}`}>
                <button
                  type="button"
                  className="duda__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`duda-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="duda__icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/></svg>
                  </span>
                </button>
                <div id={`duda-panel-${i}`} className="duda__panel" aria-hidden={!isOpen}>
                  <div className="duda__content">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Reserva() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [prevision, setPrevision] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blocked, setBlocked] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const ts = localStorage.getItem("noctua-reserva-ts");
    if (ts) {
      const diff = Date.now() - parseInt(ts, 10);
      if (diff < 5 * 60 * 1000) setBlocked(true);
    }
  }, []);

  const waLink = () => {
    const txt = `Hola NOCTUA quiero pedir hora. Nombre: ${nombre}, Tel: ${tel}, Previsión: ${prevision}, Especialidad: ${especialidad}, Fecha: ${fecha}, Hora: ${hora}, Mensaje: ${mensaje}`;
    return `https://wa.me/56232101593?text=${encodeURIComponent(txt)}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (blocked) {
      setError("Ya enviaste una solicitud hace poco. Espera 5 minutos o escríbenos directo por WhatsApp.");
      return;
    }
    if (!nombre.trim() || nombre.trim().length < 2 || nombre.trim().length > 40) {
      setError("Revisa tu nombre (2–40 caracteres).");
      return;
    }
    const cleanTel = tel.replace(/\D/g, "");
    // expect 9 digits for +56 9 xxxx xxxx (9 digits) but user enters 9 digits
    if (!/^\d{9}$/.test(cleanTel)) {
      setError("Revisa tu teléfono (+56 9). Debe tener 9 dígitos.");
      return;
    }
    if (!prevision) { setError("Elige tu previsión."); return; }
    if (!especialidad) { setError("Elige una especialidad."); return; }
    if (!fecha) { setError("Elige una fecha."); return; }
    const chosen = new Date(fecha + "T00:00:00");
    const today = new Date(); today.setHours(0,0,0,0);
    if (chosen < today) { setError("La fecha no puede ser pasada."); return; }
    if (!hora) { setError("Elige tu hora preferida."); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("noctua-reserva-ts", String(Date.now()));
      setBlocked(true);
      setTimeout(() => setBlocked(false), 5 * 60 * 1000);
    }, 800);
  };

  return (
    <section id="reserva" className="section section--surface section--reserva">
      <div className="container">
        <div className="reserva__grid">
          <div className="reserva__left">
            <p className="kicker">RESERVA</p>
            <h2 className="h2">Pide tu hora en 2 minutos.</h2>
            <p className="section__p">Elige especialidad, previsión y horario. Confirmación por WhatsApp en 5 minutos hábiles. Sin call center eterno.</p>

            <div className="reserva__contact-huge">
              <a href="tel:+56232101593" className="reserva__tel">+56 2 3210 1593</a>
              <a href="mailto:hola@noctua.cl" className="reserva__mail">hola@noctua.cl</a>
              <p className="reserva__addr">Av. Providencia 1.234, Providencia · Lun–Vie 08:00–21:00 · Sáb 09:00–14:00</p>
            </div>

            {!success ? (
              <form ref={formRef} className="reserva__form" onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  <label className="field">
                    <span className="field__label">Nombre *</span>
                    <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required minLength={2} maxLength={40} className="field__input" />
                  </label>
                  <label className="field">
                    <span className="field__label">Teléfono (+56 9) *</span>
                    <input type="tel" placeholder="9 1234 5678" value={tel} onChange={(e) => setTel(e.target.value)} required className="field__input" inputMode="numeric" />
                  </label>
                  <label className="field">
                    <span className="field__label">Previsión *</span>
                    <select value={prevision} onChange={(e) => setPrevision(e.target.value)} required className="field__input">
                      <option value="">Elige previsión</option>
                      <option>Fonasa</option>
                      <option>Colmena</option>
                      <option>Banmédica</option>
                      <option>Vida Tres</option>
                      <option>Consalud</option>
                      <option>CruzBlanca</option>
                      <option>Masvida</option>
                      <option>Particular</option>
                      <option>No sé</option>
                    </select>
                  </label>
                  <label className="field">
                    <span className="field__label">Especialidad *</span>
                    <select value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} required className="field__input">
                      <option value="">Elige especialidad</option>
                      <option>Medicina general adulto</option>
                      <option>Pediatría</option>
                      <option>Ginecología y obstetricia</option>
                      <option>Traumatología</option>
                      <option>Medicina interna</option>
                      <option>Dermatología</option>
                      <option>Otorrino</option>
                      <option>Psicología adulto</option>
                    </select>
                  </label>
                  <label className="field">
                    <span className="field__label">Fecha preferida *</span>
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required min={todayStr} className="field__input" />
                  </label>
                  <label className="field">
                    <span className="field__label">Hora preferida *</span>
                    <select value={hora} onChange={(e) => setHora(e.target.value)} required className="field__input">
                      <option value="">Elige horario</option>
                      <option>Mañana 08:00–12:00</option>
                      <option>Tarde 12:00–17:00</option>
                      <option>Última 17:00–19:40</option>
                    </select>
                  </label>
                  <label className="field field--full">
                    <span className="field__label">Mensaje (opcional)</span>
                    <textarea placeholder="Cuéntanos motivo o examen si necesitas" value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows={3} className="field__input field__textarea" />
                  </label>
                </div>

                {error && <p className="form-error" role="alert">{error}</p>}

                <button type="submit" className="cta-primary reserva__submit" disabled={loading}>
                  {loading ? "Enviando…" : "Pedir hora por WhatsApp"}
                </button>
                <p className="form-micro">Al enviar aceptas que te contactemos para confirmar la hora. No spam. Tus datos no se comparten.</p>
              </form>
            ) : (
              <div className="reserva__success" role="status">
                <p className="reserva__success-title">Gracias. Te confirmamos por WhatsApp en 5 minutos hábiles. Si es urgente, llámanos directo.</p>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="cta-primary">Abrir WhatsApp +56 2 3210 1593</a>
                <button type="button" className="cta-ghost" style={{ marginTop: 12 }} onClick={() => { setSuccess(false); setNombre(""); setTel(""); setPrevision(""); setEspecialidad(""); setFecha(""); setHora(""); setMensaje(""); }}>Enviar otra solicitud</button>
              </div>
            )}
          </div>

          <div className="reserva__right">
            <div className="reserva__proof">
              <p className="reserva__proof-title">NOCTUA · Providencia</p>
              <p className="reserva__proof-line">8 especialidades · 12 boxes · 08:00–21:00 · Bono electrónico en mesón · 96% llega a su hora</p>
              <p className="reserva__proof-sub">medición interna 3 meses · sin sobreventa de exámenes · boleta reembolsable en el momento</p>
              <div className="reserva__proof-divider" />
              <p className="reserva__proof-horario">
                <strong>Lun–Vie 08:00–21:00</strong> última 19:40<br />
                <strong>Sáb 09:00–14:00</strong> última 13:00<br />
                Toma de muestra Lun–Vie 08:00–10:30 sin hora
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer__brand">NOCTUA</div>
          <p className="footer__copy">© {new Date().getFullYear()} NOCTUA · Centro Médico · Providencia, Chile</p>
          <div className="footer__links">
            <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
            <span>·</span>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacidad</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("guardia");
    if (!hero) return;
    const onScroll = () => {
      const bottom = hero.getBoundingClientRect().bottom;
      setVisible(bottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-mobile">
      <a href="tel:+56232101593" className="sticky-mobile__tel">+56 2 3210 1593</a>
      <a href="#reserva" className="sticky-mobile__cta">Pedir hora hoy</a>
    </div>
  );
}

export function App() {
  useEffect(() => {
    const imgs = ["noctua-box-1x1.png", "noctua-senaletica-4x3.png", "noctua-examen-3x4.png", "noctua-sede-16x9.png", "noctua-espera-3x4.png", "noctua-og-16x9.png"];
    imgs.forEach(async (f) => {
      try {
        const r = await fetch(`media/${f}`, { method: "HEAD" });
        if (!r.ok) console.warn(`[NOCTUA] Falta media: ${f}`);
      } catch {
        console.warn(`[NOCTUA] Falta media: ${f}`);
      }
    });
  }, []);

  return (
    <>
      <a
        href="#guardia"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        onFocus={(e) => {
          const t = e.currentTarget as HTMLAnchorElement;
          t.style.left = "12px";
          t.style.top = "12px";
          t.style.width = "auto";
          t.style.height = "auto";
          t.style.background = "var(--accent)";
          t.style.color = "var(--bg)";
          t.style.padding = "8px 12px";
          t.style.zIndex = "999";
        }}
        onBlur={(e) => {
          const t = e.currentTarget as HTMLAnchorElement;
          t.style.left = "-9999px";
          t.style.width = "1px";
          t.style.height = "1px";
        }}
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Hero />
        <EspecialidadesAgenda />
        <ConveniosBonos />
        <ExamenesSede />
        <SucursalesHorario />
        <Dudas />
        <Reserva />
      </main>
      <StickyMobileCta />
    </>
  );
}
