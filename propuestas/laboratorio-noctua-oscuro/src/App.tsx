import { useEffect, useState, useRef } from "react";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgMobileError, setImgMobileError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoExists, setVideoExists] = useState(true);
  const [examenOpen, setExamenOpen] = useState<number | null>(null);
  const [dudaOpen, setDudaOpen] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // agenda form
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [examenSel, setExamenSel] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // media fallbacks
  const [tile02Error, setTile02Error] = useState(false);
  const [proofError, setProofError] = useState(false);
  const [tile01Error, setTile01Error] = useState(false);
  const [interiorError, setInteriorError] = useState(false);

  // trazabilidad count-up
  const [c15, setC15] = useState(0);
  const [c38000, setC38000] = useState(0);
  const [c991, setC991] = useState(0);
  const [c1, setC1] = useState(0);
  const trazRef = useRef<HTMLDivElement | null>(null);
  const hasCounted = useRef(false);

  const base = import.meta.env.BASE_URL;
  const heroDesktop = `${base}media/noctua-hero-16x9.png`;
  const heroMobile = `${base}media/noctua-hero-9x16.png`;
  const heroVideo = `${base}media/noctua-hero-loop.mp4`;
  const tile02 = `${base}media/noctua-tile-02-3x4.png`;
  const proofImg = `${base}media/noctua-proof-4x3.png`;
  const tile01 = `${base}media/noctua-tile-01-1x1.png`;
  const interior = `${base}media/noctua-interior-16x9.png`;

  // hide/show header on scroll + compact + progress + sticky
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY;
        setCompact(y > 24);
        if (y < 80) {
          setHidden(false);
        } else if (dy > 8) {
          setHidden(true);
        } else if (dy < -8) {
          setHidden(false);
        }
        lastY = y;
        // progress
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const prog = docH > 0 ? Math.min(100, (y / docH) * 100) : 0;
        setScrollProgress(prog);
        // sticky mobile bar appears after hero (400px)
        setShowSticky(y > 520);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // report missing media
  useEffect(() => {
    if (imgError) console.warn("[NOCTUA] Falta: noctua-hero-16x9.png — deja hueco reportado, NUNCA stock.");
    if (imgMobileError) console.warn("[NOCTUA] Falta: noctua-hero-9x16.png");
  }, [imgError, imgMobileError]);

  // check video exists
  useEffect(() => {
    fetch(heroVideo, { method: "HEAD" })
      .then((r) => {
        if (!r.ok) setVideoExists(false);
      })
      .catch(() => setVideoExists(false));
  }, [heroVideo]);

  // trazabilidad count-up IntersectionObserver + rAF 1200ms
  useEffect(() => {
    const el = trazRef.current;
    if (!el) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      setC15(15);
      setC38000(38000);
      setC991(99.1);
      setC1(1);
      return;
    }
    const animate = () => {
      if (hasCounted.current) return;
      hasCounted.current = true;
      const duration = 1200;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const tick = (now: number) => {
        const elapsed = now - start;
        const p = Math.min(1, elapsed / duration);
        const e = ease(p);
        setC15(Math.round(15 * e));
        setC38000(Math.round(38000 * e));
        setC991(parseFloat((99.1 * e).toFixed(1)));
        setC1(1);
        if (p < 1) requestAnimationFrame(tick);
        else {
          setC15(15);
          setC38000(38000);
          setC991(99.1);
        }
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // load saved agenda
  useEffect(() => {
    try {
      const raw = localStorage.getItem("noctua-agenda");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.nombre) setNombre(d.nombre);
        if (d.telefono) setTelefono(d.telefono);
        if (d.examenSel) setExamenSel(d.examenSel);
        if (d.fecha) setFecha(d.fecha);
        if (d.motivo) setMotivo(d.motivo);
      }
    } catch {}
  }, []);

  const validateForm = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim() || nombre.trim().length < 2) e.nombre = "Ingresa tu nombre completo.";
    if (!telefono.trim()) e.telefono = "Ingresa tu teléfono.";
    else {
      const clean = telefono.replace(/\s/g, "");
      // expect +569xxxxxxxx or 569xxxxxxxx or 9xxxxxxxx Chile
      if (!/^\+?56?9\d{8}$/.test(clean) && !/^\+?569\d{8}$/.test(clean)) {
        // fallback: allow +569 pattern with 8 digits
        if (!/^\+569\d{8}$/.test(clean) && !/^569\d{8}$/.test(clean) && !/^9\d{8}$/.test(clean)) {
          e.telefono = "Formato: +569XXXXXXXX";
        }
      }
    }
    if (!examenSel) e.examenSel = "Selecciona un examen.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validateForm();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("noctua-agenda", JSON.stringify({ nombre, telefono, examenSel, fecha, motivo }));
      } catch {}
    }, 700);
  };

  const examenes = [
    {
      num: "01",
      nombre: "Hemograma y coagulación — control interno diario",
      meta: "ayuno 8h · 24h",
      panel: "Ayuno: 8h (agua sí). Toma ideal 07:30–10:00. Duración toma 10 min. Plazo: 24h.",
    },
    {
      num: "02",
      nombre: "Perfil lipídico y bioquímico — ayuno controlado",
      meta: "ayuno 12h · 24h",
      panel: "Ayuno: 12h estricto. Sin alcohol 24h. Plazo: 24h. Incluye informe con rangos por edad.",
    },
    {
      num: "03",
      nombre: "Orina y cultivos — frasco estéril entregado",
      meta: "sin ayuno · 48h",
      panel: "Primera orina mañana. Frasco estéril sin costo. Plazo: 48h cultivo.",
    },
    {
      num: "04",
      nombre: "Hormonas y tiroides — toma matinal",
      meta: "07:30–09:00 · 48h",
      panel: "Toma 07:30–09:00. Sin biotina 48h. Plazo: 48h.",
    },
    {
      num: "05",
      nombre: "Preventivos ejecutivos y alergias",
      meta: "según panel · 72h",
      panel: "Sin ayuno (según panel). Plazo: 72h. Incluye interpretación bioquímica.",
    },
    {
      num: "06",
      nombre: "PCR y carga viral",
      meta: "sin ayuno · 12h",
      panel: "Sin ayuno. Hisopado 5 min. Plazo: 12h. Aviso por WhatsApp.",
    },
  ];

  const dudas = [
    {
      q: "¿Necesito orden médica o puedo tomarme el examen directo?",
      a: "Algunos exámenes no requieren orden (hemograma, perfil lipídico, preventivos). Hormonas, cultivos y PCR según indicación médica. Si vienes sin orden, te orientamos por WhatsApp antes de agendar.",
    },
    {
      q: "¿Cuántas horas de ayuno y qué pasa con agua y remedios?",
      a: "Hemograma 8h, lipídico 12h. Agua sí, jugo no. Remedios habituales con sorbo de agua salvo indicación contraria. Si tomas biotina, suspende 48h para tiroides.",
    },
    {
      q: "¿Cómo y cuándo recibo mi resultado?",
      a: "Plataforma web con RUT y clave, PDF firmado, aviso por WhatsApp y correo a la hora comprometida al agendar. No tienes que llamar para consultar.",
    },
    {
      q: "¿Qué pasa si mi muestra no es viable o necesita re-toma?",
      a: "Te avisamos antes de procesar. Si es falla de toma o cadena, re-toma sin costo y con prioridad. Si no es viable por ayuno o muestra, no se cobra el procesamiento.",
    },
    {
      q: "¿Qué convenios aceptan y cómo funciona el reembolso?",
      a: "Fonasa nivel 1 con orden y bono. Isapres con reembolso según plan — te informamos monto estimado antes de pagar. Particular con boleta electrónica.",
    },
    {
      q: "¿Cuánto cuesta la toma a domicilio y qué comunas cubre?",
      a: "$19.900 RM urbano (Providencia, Las Condes, Ñuñoa, La Reina, Santiago, Vitacura, Lo Barnechea, Peñalolén, Macul, La Florida). Otras comunas consultar. Incluye transporte refrigerado 2–8°C.",
    },
  ];

  // format helpers for count-up display
  const fmt38000 = c38000.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const fmt991 = c991.toFixed(1).replace(".", ",");

  return (
    <>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ width: `${scrollProgress}%` }}
      />
      <header className={`site-header ${hidden ? "is-hidden" : ""} ${compact ? "is-compact" : ""}`}>
        <div className="header-inner">
          <a href="#portada" className="header-brand" aria-label="NOCTUA inicio">
            NOCTUA
          </a>

          <nav className="header-nav" aria-label="Principal">
            <a href="#examenes">Exámenes</a>
            <a href="#protocolo">Protocolo</a>
            <a href="#valores">Valores</a>
          </nav>

          <div className="header-right">
            <a href="tel:+56229523200" className="header-tel">
              +56 2 2952 3200
            </a>
            <a href="#agenda" className="btn-accent">
              Agendar toma privada
            </a>
            <button
              className="hamburger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <a href="#examenes" onClick={() => setMenuOpen(false)}>
          Exámenes
        </a>
        <a href="#protocolo" onClick={() => setMenuOpen(false)}>
          Protocolo
        </a>
        <a href="#valores" onClick={() => setMenuOpen(false)}>
          Valores
        </a>
        <a href="tel:+56229523200" className="mobile-tel">
          +56 2 2952 3200 — Hablamos hoy, responde equipo técnico
        </a>
        <a href="#agenda" className="btn-accent" onClick={() => setMenuOpen(false)}>
          Agendar toma privada
        </a>
      </div>

      <div className="hero-wrap">
        <section id="portada" className="hero" aria-label="Portada NOCTUA">
          <div className="hero-copy">
            <p className="kicker">LABORATORIO PRIVADO · SANTIAGO · CADENA DE FRÍO CONTROLADA</p>
            <h1 className="hero-h1">Precisión que se nota antes de abrir el resultado.</h1>
            <p className="hero-sub">
              Toma agendada cada 15 min, sin sala de espera compartida. Tubo etiquetado delante tuyo y resultado con hora de
              liberación informada.
            </p>
            <div className="hero-ctas">
              <a href="#agenda" className="btn-accent">
                Agendar toma privada
              </a>
              <a href="#protocolo" className="link-secondary">
                Ver protocolos y bioseguridad →
              </a>
            </div>
            <p className="hero-caption">Toma a domicilio nocturna con agenda · Bioseguridad certificada · Transporte refrigerado</p>
          </div>

          <div className="hero-media" aria-label="Cámara frigorífica NOCTUA">
            {videoExists && !videoError ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={heroDesktop}
                onError={() => setVideoError(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            ) : null}

            {!imgError ? (
              <picture>
                <source media="(max-width: 980px)" srcSet={imgMobileError ? undefined : heroMobile} />
                <img
                  src={heroDesktop}
                  alt="Cámara frigorífica de acero inox 316 con gradilla de tubos al vacío iluminada puntual cian hielo, espacio negativo a la izquierda"
                  onError={() => {
                    setImgError(true);
                    console.warn("Falta: noctua-hero-16x9.png");
                  }}
                />
              </picture>
            ) : (
              <div
                className="media-falta hero-fallback"
                data-falta="noctua-hero-16x9.png"
                style={{
                  aspectRatio: "16/9",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--muted)",
                  fontSize: "12px",
                }}
              >
                Falta: noctua-hero-16x9.png
              </div>
            )}

            <img
              src={heroMobile}
              alt=""
              aria-hidden="true"
              style={{ display: "none" }}
              onError={() => setImgMobileError(true)}
              onLoad={() => {}}
            />
          </div>
        </section>
      </div>

      {/* #toma */}
      <section id="toma" className="section-toma">
        <div className="toma-inner">
          <p className="kicker">LA MUESTRA NO ESPERA</p>
          <h2 className="h2">Nosotros tampoco.</h2>
          <p className="toma-p">
            Cadena de frío desde la toma hasta el informe. Tubo etiquetado delante tuyo, no después. Resultado en
            plataforma con hora de liberación informada al agendar — no &quot;entre 24 y 72 horas, llame para
            consultar&quot;. Si algo compromete la muestra, te avisamos antes de cobrarte, no después.
          </p>
          <ul className="toma-bullets" aria-label="Trazabilidad">
            <li>— Trazabilidad completa con hora y responsable</li>
            <li>— Transporte refrigerado 2–8°C con logger</li>
            <li>— Informe PDF firmado por bioquímico, no por sistema</li>
          </ul>
          <p className="toma-metric">TRAZABILIDAD COMPLETA · TRANSPORTE REFRIGERADO · INFORME CON FIRMA BIOQUÍMICO</p>
        </div>
      </section>

      {/* #examenes */}
      <section id="examenes" className="section-examenes">
        <div className="examenes-head">
          <h2 className="h2">Exámenes con preparación exacta</h2>
          <p className="sub">Elige el examen. Ve preparación, ayuno y plazo garantizado al pasar el cursor. En móvil, toca para abrir.</p>
        </div>
        <div className="examenes-grid">
          <div className="examenes-list">
            {examenes.map((ex, i) => (
              <div
                key={ex.num}
                className={`examen-row ${examenOpen === i ? "is-open" : ""}`}
                onMouseEnter={() => {
                  if (window.innerWidth > 980) setExamenOpen(i);
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 980) setExamenOpen(null);
                }}
              >
                <button
                  className="examen-trigger"
                  onClick={() => setExamenOpen(examenOpen === i ? null : i)}
                  aria-expanded={examenOpen === i}
                  aria-controls={`examen-panel-${i}`}
                >
                  <span className="examen-num">{ex.num}</span>
                  <span className="examen-nombre">{ex.nombre}</span>
                  <span className="examen-meta">{ex.meta}</span>
                  <span className="examen-chevron" aria-hidden="true">
                    ›
                  </span>
                </button>
                <div
                  id={`examen-panel-${i}`}
                  className="examen-panel"
                  aria-hidden={examenOpen !== i}
                >
                  <p>{ex.panel}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="examenes-thumb" aria-label="Gradilla nocturna">
            {!tile02Error ? (
              <img
                src={tile02}
                alt="Gradilla nocturna 3:4 con 6 tubos en fila, foco selectivo en central, acero frío sin personas"
                loading="lazy"
                onError={() => setTile02Error(true)}
              />
            ) : (
              <div className="media-falta" data-falta="noctua-tile-02-3x4.png">
                Falta: noctua-tile-02-3x4.png
              </div>
            )}
          </div>
        </div>
      </section>

      {/* #trazabilidad */}
      <section id="trazabilidad" className="section-traz" ref={trazRef}>
        <div className="traz-inner">
          <p className="kicker">CIFRAS DE TRAZABILIDAD — NO PROMESAS</p>
          <div className="traz-stats">
            <div className="traz-stat">
              <span className="traz-num">+{c15}</span>
              <span className="traz-label">años de laboratorio</span>
              <span className="traz-cap">operando en RM</span>
            </div>
            <div className="traz-stat">
              <span className="traz-num">{fmt38000}</span>
              <span className="traz-label">informes al año</span>
              <span className="traz-cap">con firma bioquímico</span>
            </div>
            <div className="traz-stat">
              <span className="traz-num">{fmt991}%</span>
              <span className="traz-label">muestras sin re-toma</span>
              <span className="traz-cap">por trazabilidad completa</span>
            </div>
            <div className="traz-stat">
              <span className="traz-num">{c1}</span>
              <span className="traz-label">bioquímico firmante por informe</span>
              <span className="traz-cap">no sistema automático</span>
            </div>
          </div>
          <p className="traz-note">Datos 2024 auditados internamente. Sin fotos de personas ni identidades inventadas.</p>
        </div>
      </section>

      {/* #valores */}
      <section id="valores" className="section-valores">
        <div className="valores-grid">
          <div className="valores-main">
            <h2 className="h2">Precios claros, sin letra chica</h2>
            <p className="sub">Valores referenciales 2025. Se confirma tras revisar orden y ayuno. Si la muestra no es viable, no se cobra el procesamiento.</p>

            <div className="tabla-wrap" role="table" aria-label="Precios NOCTUA">
              <div className="tabla-head" role="row">
                <span role="columnheader">Examen</span>
                <span role="columnheader">Valor CLP</span>
                <span role="columnheader">Preparación</span>
                <span role="columnheader">Plazo</span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-examen" role="cell">Hemograma premium</span>
                <span className="tabla-precio" role="cell">$16.900</span>
                <span className="tabla-prep" role="cell">Ayuno 8h</span>
                <span className="tabla-plazo" role="cell">24h garantizado</span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-examen" role="cell">Perfil lipídico completo</span>
                <span className="tabla-precio" role="cell">$22.500</span>
                <span className="tabla-prep" role="cell">Ayuno 12h</span>
                <span className="tabla-plazo" role="cell">24h garantizado</span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-examen" role="cell">Perfil tiroideo completo (TSH, T4L, T3)</span>
                <span className="tabla-precio" role="cell">$34.900</span>
                <span className="tabla-prep" role="cell">07:30–09:00</span>
                <span className="tabla-plazo" role="cell">48h garantizado</span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-examen" role="cell">Toma privada a domicilio RM</span>
                <span className="tabla-precio" role="cell">$19.900</span>
                <span className="tabla-prep" role="cell">Agenda 15 min</span>
                <span className="tabla-plazo" role="cell">Mismo día toma</span>
              </div>
            </div>

            {/* mobile cards fallback same data */}
            <div className="valores-cards" aria-label="Precios en formato tarjeta">
              <div className="valor-card">
                <div className="valor-card-top">
                  <span className="valor-card-name">Hemograma premium</span>
                  <span className="valor-card-precio">$16.900</span>
                </div>
                <div className="valor-card-meta">
                  <span>Ayuno 8h</span> · <span>24h garantizado</span>
                </div>
              </div>
              <div className="valor-card">
                <div className="valor-card-top">
                  <span className="valor-card-name">Perfil lipídico completo</span>
                  <span className="valor-card-precio">$22.500</span>
                </div>
                <div className="valor-card-meta">
                  <span>Ayuno 12h</span> · <span>24h garantizado</span>
                </div>
              </div>
              <div className="valor-card">
                <div className="valor-card-top">
                  <span className="valor-card-name">Perfil tiroideo completo (TSH, T4L, T3)</span>
                  <span className="valor-card-precio">$34.900</span>
                </div>
                <div className="valor-card-meta">
                  <span>07:30–09:00</span> · <span>48h garantizado</span>
                </div>
              </div>
              <div className="valor-card">
                <div className="valor-card-top">
                  <span className="valor-card-name">Toma privada a domicilio RM</span>
                  <span className="valor-card-precio">$19.900</span>
                </div>
                <div className="valor-card-meta">
                  <span>Agenda 15 min</span> · <span>Mismo día toma</span>
                </div>
              </div>
            </div>

            <p className="valores-nota">
              Fonasa nivel 1 y reembolso Isapre informados antes de agendar. Orden médica según examen. Valores con IVA incluido. Transporte refrigerado incluido en toma a domicilio.
            </p>
            <p className="valores-ref">Valores referenciales 2025. Desde $16.900. Se confirma tras revisar orden y ayuno.</p>
          </div>
          <div className="valores-proof" aria-label="Logger trazabilidad">
            {!proofError ? (
              <img
                src={proofImg}
                alt="Close-up de logger de temperatura 2–8°C sobre acero con etiqueta trazabilidad, luz puntual fría"
                loading="lazy"
                onError={() => setProofError(true)}
              />
            ) : (
              <div className="media-falta" data-falta="noctua-proof-4x3.png">
                Falta: noctua-proof-4x3.png
              </div>
            )}
          </div>
        </div>
      </section>

      {/* #protocolo */}
      <section id="protocolo" className="section-protocolo">
        <h2 className="h2 protocolo-h2">Protocolo en 3 pasos, sin sorpresas</h2>
        <div className="protocolo-grid">
          <div className="proto-col">
            <span className="proto-num">01</span>
            <h3 className="proto-title">Agenda con preparación escrita</h3>
            <p className="proto-copy">Eliges ventana horaria exacta. Recibes PDF con ayuno, medicamentos y qué llevar. Ventana de 15 min, no bloque de mañana.</p>
          </div>
          <div className="proto-col">
            <span className="proto-num">02</span>
            <h3 className="proto-title">Toma privada puntual</h3>
            <p className="proto-copy">Box individual, etiquetado delante tuyo, cadena de frío inmediata 2–8°C con logger. Sin sala de espera compartida.</p>
          </div>
          <div className="proto-col">
            <span className="proto-num">03</span>
            <h3 className="proto-title">Informe en plataforma con aviso</h3>
            <p className="proto-copy">PDF firmado por bioquímico, notificación por WhatsApp y correo a la hora comprometida. Si hay retraso, aviso previo.</p>
          </div>
        </div>
      </section>

      {/* #camara */}
      <section id="camara" className="section-camara">
        <div className="camara-grid">
          <figure className="obra">
            <div className="obra-media ratio-1x1 cortina">
              {!tile01Error ? (
                <img
                  src={tile01}
                  alt="Bodegón 1:1 de tubos EDTA etiquetados sobre bandeja acero cepillado, luz rasante fría sin manos"
                  loading="lazy"
                  onError={() => setTile01Error(true)}
                />
              ) : (
                <div className="media-falta" data-falta="noctua-tile-01-1x1.png">
                  Falta: noctua-tile-01-1x1.png
                </div>
              )}
            </div>
            <figcaption>Tubo EDTA K2 · Etiquetado en box · Acero 316 cepillado · 07:30 toma en ayunas</figcaption>
          </figure>
          <figure className="obra">
            <div className="obra-media ratio-16x9 cortina kenburns">
              {!interiorError ? (
                <img
                  src={interior}
                  alt="Mesada de laboratorio nocturna vacía con microscopio y cuaderno técnico, luz lateral dramática y cadena de frío al fondo"
                  loading="lazy"
                  onError={() => setInteriorError(true)}
                />
              ) : (
                <div className="media-falta" data-falta="noctua-interior-16x9.png">
                  Falta: noctua-interior-16x9.png
                </div>
              )}
            </div>
            <figcaption>Mesada nocturna · Microscopio y cuaderno técnico · Luz lateral dramática · Cadena de frío al fondo</figcaption>
          </figure>
        </div>
      </section>

      {/* #dudas */}
      <section id="dudas" className="section-dudas">
        <div className="dudas-inner">
          <h2 className="h2">Dudas que preguntarías en el box</h2>
          <p className="sub">Respuestas cortas, sin letra chica. Si no está aquí, escribe a hola@noctua.cl y responde bioquímico.</p>
          <div className="acordeones">
            {dudas.map((d, i) => (
              <div key={i} className={`acordeon ${dudaOpen === i ? "is-open" : ""}`}>
                <button
                  className="acordeon-trigger"
                  onClick={() => setDudaOpen(dudaOpen === i ? null : i)}
                  aria-expanded={dudaOpen === i}
                  aria-controls={`duda-panel-${i}`}
                >
                  <span>{d.q}</span>
                  <span className="chevron" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </span>
                </button>
                <div id={`duda-panel-${i}`} className="acordeon-panel" aria-hidden={dudaOpen !== i}>
                  <p>{d.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* #agenda */}
      <section id="agenda" className="section-agenda">
        <div className="agenda-grid">
          <div className="agenda-copy">
            <h2 className="h2">¿Agendamos tu toma privada?</h2>
            <p className="sub">Responde nuestro equipo técnico, no un call center. Ventana de 15 min, sin espera compartida.</p>
            <a href="tel:+56229523200" className="agenda-tel">
              +56 2 2952 3200
            </a>
            <p className="agenda-horarios">Lun–Vie 07:00–19:00 · Sáb 07:30–14:00 · Toma a domicilio nocturna con agenda</p>
            <p className="agenda-email">hola@noctua.cl · Providencia, Santiago</p>
            <a href="https://wa.me/56229523200" target="_blank" rel="noopener noreferrer" className="agenda-wa">
              WhatsApp directo →
            </a>
          </div>
          <div className="agenda-form-wrap">
            {success ? (
              <div className="form-success" role="status" aria-live="polite">
                <p className="form-success-title">Gracias — te contacta equipo técnico hoy.</p>
                <p className="form-success-sub">Guardamos tu solicitud. Responderemos a {telefono}.</p>
                <button className="link-secondary" onClick={() => setSuccess(false)} style={{ marginTop: 12, background: "transparent", border: 0, cursor: "pointer", padding: 0 }}>
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form className="agenda-form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="f-noctua-nombre">Nombre *</label>
                  <input
                    id="f-noctua-nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                  />
                  {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                </div>
                <div className="field">
                  <label htmlFor="f-noctua-telefono">Teléfono *</label>
                  <input
                    id="f-noctua-telefono"
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+56912345678"
                    autoComplete="tel"
                  />
                  {errors.telefono && <span className="field-error">{errors.telefono}</span>}
                </div>
                <div className="field">
                  <label htmlFor="f-noctua-examen">Examen *</label>
                  <select
                    id="f-noctua-examen"
                    required
                    value={examenSel}
                    onChange={(e) => setExamenSel(e.target.value)}
                  >
                    <option value="">Selecciona examen</option>
                    {examenes.map((ex) => (
                      <option key={ex.num} value={ex.nombre}>
                        {ex.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.examenSel && <span className="field-error">{errors.examenSel}</span>}
                </div>
                <div className="field">
                  <label htmlFor="f-noctua-fecha">Fecha preferida</label>
                  <input id="f-noctua-fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className="field field-full">
                  <label htmlFor="f-noctua-motivo">Motivo / orden médica</label>
                  <textarea
                    id="f-noctua-motivo"
                    rows={3}
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    placeholder="Ej: control anual, orden Dra. ... "
                  />
                </div>
                <button type="submit" className="btn-accent form-submit" disabled={loading}>
                  {loading ? "Enviando…" : "Solicitar agenda"}
                </button>
                <a href="https://wa.me/56229523200" target="_blank" rel="noopener noreferrer" className="form-wa-link">
                  o escribir por WhatsApp
                </a>
              </form>
            )}
          </div>
        </div>
        <footer className="site-footer">
          <p className="footer-brand">NOCTUA — Laboratorio Clínico Privado</p>
          <p className="footer-rut">NOCTUA SpA · RUT 76.XXX.XXX-X · Providencia, Santiago</p>
          <p className="footer-copy">© 2025 NOCTUA. Trazabilidad completa. — hola@noctua.cl</p>
        </footer>
      </section>

      {/* sticky mobile bar */}
      <div className={`sticky-bar ${showSticky ? "is-visible" : ""}`} aria-hidden={!showSticky}>
        <a href="tel:+56229523200" className="sticky-tel">
          +56 2 2952 3200
        </a>
        <a href="#agenda" className="btn-accent sticky-cta">
          Agendar
        </a>
      </div>
    </>
  );
}
