import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`} role="banner">
      <div className="header-inner">
        <a href="#portada" className="header-logo" aria-label="ETER — inicio">
          ETER
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#primera-sesion">Primera sesión</a>
          <a href="#modalidad">Modalidad</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#aranceles">Aranceles</a>
        </nav>

        <button
          className="header-burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="tel:+56944318820" className="header-tel">
          +56 9 4431 8820
        </a>
        <a href="tel:+56944318820" className="header-tel-icon" aria-label="Llamar +56 9 4431 8820">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72c.12 1.2.4 2.38.82 3.5a2 2 0 0 1-.57 2.11L8.09 9.41a16 16 0 0 0 6.5 6.5l1.08-1.08a2 2 0 0 1 2.11-.57c1.12.42 2.3.7 3.5.82A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        <a href="#agenda-eter" className="header-cta">
          Agendar primera sesión
        </a>
      </div>

      <nav className={`header-mobile-nav ${open ? "open" : ""}`} aria-label="Navegación móvil">
        <a href="#primera-sesion" onClick={() => setOpen(false)}>Primera sesión</a>
        <a href="#modalidad" onClick={() => setOpen(false)}>Modalidad</a>
        <a href="#especialidades" onClick={() => setOpen(false)}>Especialidades</a>
        <a href="#aranceles" onClick={() => setOpen(false)}>Aranceles</a>
      </nav>
    </header>
  );
}

function Hero() {
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const [hasImage, setHasImage] = useState<boolean | null>(null);

  useEffect(() => {
    const imgUrl = "media/eter-hero-16x9.png";
    const videoUrl = "media/eter-hero-loop.mp4";

    fetch(imgUrl, { method: "HEAD" }).then((r) => {
      setHasImage(r.ok);
      if (!r.ok) console.warn("[ETER] Falta media: eter-hero-16x9.png — esperado en public/media/eter-hero-16x9.png");
    }).catch(() => {
      setHasImage(false);
      console.warn("[ETER] Falta media: eter-hero-16x9.png");
    });

    fetch(videoUrl, { method: "HEAD" }).then((r) => setHasVideo(r.ok)).catch(() => setHasVideo(false));
  }, []);

  const showVideo = hasVideo === true;
  const showImage = hasImage !== false;

  return (
    <section id="portada" className="hero" aria-label="Portada">
      <div className="hero-grid">
        <div className="hero-left">
          <p className="hero-kicker">SALUD MENTAL · PROVIDENCIA</p>

          <h1 className="hero-h1" aria-label="Hablar sin apuro. Con hora esta semana.">
            <motion.span
              className="hero-h1-line"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0 }}
              style={{ display: "block", overflow: "hidden" }}
            >
              <span>Hablar sin</span>
            </motion.span>
            <motion.span
              className="hero-h1-line"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              style={{ display: "block", overflow: "hidden" }}
            >
              <span>apuro.</span>
            </motion.span>
            <motion.span
              className="hero-h1-line"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              style={{ display: "block", overflow: "hidden" }}
            >
              <span>Con hora</span>
            </motion.span>
            <motion.span
              className="hero-h1-line"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              style={{ display: "block", overflow: "hidden" }}
            >
              <span>esta semana.</span>
            </motion.span>
          </h1>

          <p className="hero-sub">
            Psicología y psiquiatría en un mismo lugar. Primera sesión de 50 minutos, sin derivaciones eternas ni cuestionarios infinitos.
          </p>

          <div className="hero-ctas">
            <a href="#agenda-eter" className="btn-primary">
              Agendar primera sesión
            </a>
            <a href="#aranceles" className="btn-ghost">
              Ver valores
            </a>
          </div>

          <div className="hero-banda" aria-label="Características">
            <span className="hero-banda-item">Presencial y teleconsulta</span>
            <span className="hero-banda-dot" aria-hidden="true" />
            <span className="hero-banda-item">Fonasa e Isapre con boleta</span>
            <span className="hero-banda-dot" aria-hidden="true" />
            <span className="hero-banda-item">Confidencialidad clínica</span>
          </div>

          <p className="hero-micro">
            Si necesitas psiquiatría, la coordinación es interna. No te mandamos a buscar hora en otro lado.
          </p>

          <div className="hero-badge" aria-label="Disponibilidad">
            <span className="hero-badge-dot" aria-hidden="true" />
            Hay hora esta semana · Providencia y online
          </div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut", delay: 0.18 }}
        >
          <div className="hero-media-wrap">
            {showVideo ? (
              <video
                className="hero-media-video"
                autoPlay
                muted
                loop
                playsInline
                poster="media/eter-hero-16x9.png"
                aria-label="Box 3 luz de tarde Providencia"
              >
                <source src="media/eter-hero-loop.mp4" type="video/mp4" />
                {showImage && (
                  <img
                    className="hero-media"
                    src="media/eter-hero-16x9.png"
                    alt="Box 3 con silla de lino vacía mirando ventana con cortina de gasa, puerta entreabierta a contraluz y mesa baja con planta — luz de tarde en Providencia"
                  />
                )}
              </video>
            ) : hasImage === false ? (
              <div
                className="media-falta"
                data-falta="eter-hero-16x9.png"
                style={{
                  aspectRatio: "16/9",
                  background: "#EDE8DF",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--muted)",
                  font: "500 0.85rem var(--font-ui)",
                }}
              >
                Falta media: eter-hero-16x9.png
              </div>
            ) : showImage ? (
              <img
                className="hero-media"
                src="media/eter-hero-16x9.png"
                alt="Box 3 con silla de lino vacía mirando ventana con cortina de gasa, puerta entreabierta a contraluz y mesa baja con planta — luz de tarde en Providencia"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const fallback = el.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "grid";
                  console.warn("[ETER] Falta media: eter-hero-16x9.png — no se pudo cargar public/media/eter-hero-16x9.png");
                }}
              />
            ) : null}
            <div
              className="media-falta"
              data-falta="eter-hero-16x9.png"
              style={{
                display: "none",
                aspectRatio: "16/9",
                background: "#EDE8DF",
                placeItems: "center",
                color: "var(--muted)",
                font: "500 0.85rem var(--font-ui)",
                border: "1px solid var(--linea)",
              }}
            >
              Falta media: eter-hero-16x9.png
            </div>
          </div>
          <p className="hero-caption">Box 3 · luz de tarde · Providencia</p>
        </motion.div>
      </div>
    </section>
  );
}

function MediaImg({ src, alt, className, ratioClass, fallback }: { src: string; alt: string; className: string; ratioClass?: string; fallback: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    fetch(src, { method: "HEAD" }).then((r) => {
      if (!r.ok) {
        console.warn(`[ETER] Falta media: ${fallback}`);
        // don't force failed yet; let onError handle, but warn
      }
    }).catch(() => {});
  }, [src, fallback]);
  if (failed) {
    return (
      <div className={`media-falta ${ratioClass ?? ""}`} data-falta={fallback}>
        Falta media: {fallback}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        console.warn(`[ETER] Falta media: ${fallback} — no se pudo cargar ${src}`);
        setFailed(true);
      }}
    />
  );
}

function PrimeraSesion() {
  return (
    <section id="primera-sesion" aria-label="Primera sesión">
      <div className="ps-grid">
        <div className="ps-left">
          <MediaImg src="media/eter-sesion-4x3.png" fallback="eter-sesion-4x3.png" alt="Box vacío con silla mirando ventana con cortina de gasa y mesa con planta, luz de tarde" className="ps-img" ratioClass="is-4x3" />
          <p className="ps-caption">Box con luz de tarde · sin papeles legibles</p>
        </div>
        <div className="ps-right">
          <p className="ps-kicker">PRIMERA VEZ</p>
          <h2 className="ps-h2">50 minutos para entender, no para etiquetar</h2>
          <p className="ps-intro">Llegas, te sientas y conversamos. Sin test de 200 preguntas. Te vas con una idea clara de qué hacer después.</p>

          <div className="ps-pasos">
            <motion.div
              className="ps-paso"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.28, delay: 0 }}
            >
              <p className="ps-paso-t">01 · Escucha sin libreto</p>
              <p className="ps-paso-p">Qué te trae hoy, desde cuándo, qué has intentado. Sin interrumpir cada dos frases.</p>
            </motion.div>
            <motion.div
              className="ps-paso"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.28, delay: 0.04 }}
            >
              <p className="ps-paso-t">02 · Hipótesis y plan en palabras simples</p>
              <p className="ps-paso-p">Te decimos qué vemos, qué descartamos y qué proponemos. Si hace falta psiquiatría, lo hablamos ahí mismo.</p>
            </motion.div>
            <motion.div
              className="ps-paso"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.28, delay: 0.08 }}
            >
              <p className="ps-paso-t">03 · Te vas con indicaciones por escrito</p>
              <p className="ps-paso-p">Frecuencia sugerida, objetivos del primer mes y qué hacer si te sientes peor antes de la próxima sesión. Sin jerga.</p>
            </motion.div>
          </div>

          <ul className="ps-checklist" aria-label="Entregables primera sesión">
            <li className="ps-check-item">Resumen por escrito</li>
            <li className="ps-check-item">Plan de 4 semanas</li>
            <li className="ps-check-item">Coordinación psiquiatría si aplica</li>
            <li className="ps-check-item">WhatsApp clínico para reagendar</li>
          </ul>

          <div className="ps-precio">Primera sesión $52.000 · 50 min · se abona si sigues</div>
        </div>
      </div>
    </section>
  );
}

function Modalidad() {
  return (
    <section id="modalidad" aria-label="Modalidad">
      <div className="mo-grid">
        <div className="mo-header">
          <p className="mo-kicker">CÓMO NOS VEMOS</p>
          <h2 className="mo-h2">Presencial u online. La misma terapeuta, el mismo plan.</h2>
          <p className="mo-intro">Eliges al agendar. Puedes alternar semana a semana sin perder continuidad.</p>
        </div>

        <motion.div
          className="mo-card mo-card--presencial"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.28, delay: 0 }}
        >
          <MediaImg src="media/eter-modalidad-1x1.png" fallback="eter-modalidad-1x1.png" alt="Umbral pasillo consulta puerta entreabierta luz cálida" className="mo-card-img is-1x1" ratioClass="is-1x1" />
          <h3 className="mo-card-title">Presencial · Providencia</h3>
          <ul className="mo-card-bullets">
            <li>Av. Providencia 1208, of. 402 · Metro Los Leones 4 min</li>
            <li>Box individual, sin sala de espera compartida</li>
            <li>Horario: Lun–Vie 9:00–20:00 · Sáb 10:00–14:00</li>
          </ul>
          <span className="mo-badge">Hay hora esta semana</span>
        </motion.div>

        <motion.div
          className="mo-card mo-card--tele"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.28, delay: 0.06 }}
        >
          <MediaImg src="media/eter-interior-16x9.png" fallback="eter-interior-16x9.png" alt="Escritorio vacío con planta y textil lino luz mañana" className="mo-card-img is-16x9" ratioClass="is-1x1" />
          <h3 className="mo-card-title">Teleconsulta · todo Chile</h3>
          <ul className="mo-card-bullets">
            <li>Videollamada privada, sin grabar · Link por WhatsApp 10 min antes</li>
            <li>Mismo valor que presencial</li>
            <li>Boleta reembolsable igual</li>
          </ul>
          <p className="mo-nota">Si tu conexión falla, reagendamos sin costo. No cobramos la sesión perdida por técnica.</p>
        </motion.div>

        <div className="mo-conf">
          <span className="mo-conf-title">Confidencialidad</span>
          <span className="mo-conf-text"> — Lo que hablas queda entre tú y tu terapeuta. Sin informes a terceros sin tu firma. Registro clínico privado.</span>
        </div>
      </div>
    </section>
  );
}

function Especialidades() {
  return (
    <section id="especialidades" aria-label="Especialidades">
      <div className="es-grid">
        <div className="es-header">
          <p className="es-kicker">EN QUÉ TE ACOMPAÑAMOS</p>
          <h2 className="es-h2">Especialidades por momento vital, no por etiqueta</h2>
          <p className="es-intro">No atendemos todo. Estas son las áreas donde tenemos horas y formación continua.</p>
        </div>

        <div className="es-blocks">
          <motion.div className="es-block" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.28, delay: 0 }}>
            <MediaImg src="media/eter-tile-01-1x1.png" fallback="eter-tile-01-1x1.png" alt="Silla y planta bodegón luz tarde" className="es-block-img is-1x1" ratioClass="is-1x1" />
            <h3 className="es-block-title">Adultos</h3>
            <p className="es-block-text">Ansiedad, insomnio, burnout, duelos. Terapia individual 50 min, plan de 4 semanas revisable.</p>
            <span className="es-block-meta">Desde $48.000/sesión · semanal o quincenal</span>
          </motion.div>

          <motion.div className="es-block" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.28, delay: 0.04 }}>
            <MediaImg src="media/eter-tile-02-3x4.png" fallback="eter-tile-02-3x4.png" alt="Escritorio vacío con cuaderno cerrado lino y planta" className="es-block-img is-3x4" ratioClass="is-3x4" />
            <h3 className="es-block-title">Adolescentes (14–18)</h3>
            <p className="es-block-text">Con consentimiento informado y una sesión breve con cuidador al inicio. Sin exponer lo privado del joven.</p>
            <span className="es-block-meta">Desde $48.000/sesión</span>
          </motion.div>

          <motion.div className="es-block" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.28, delay: 0.08 }}>
            <MediaImg src="media/eter-tile-03-1x1.png" fallback="eter-tile-03-1x1.png" alt="Dos sillas enfrentadas con mesa central y tazas" className="es-block-img is-1x1" ratioClass="is-1x1" />
            <h3 className="es-block-title">Parejas y vínculos</h3>
            <p className="es-block-text">Ciclos de discusión, distancia, celos. Sesiones de 70 min, ambos presentes.</p>
            <span className="es-block-meta">Desde $62.000/sesión · 70 min</span>
          </motion.div>

          <motion.div className="es-block" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.28, delay: 0.12 }}>
            <MediaImg src="media/eter-tile-04-3x4.png" fallback="eter-tile-04-3x4.png" alt="Repisa con libros lomo neutro planta y cerámica mate" className="es-block-img is-3x4" ratioClass="is-3x4" />
            <h3 className="es-block-title">Psiquiatría</h3>
            <p className="es-block-text">Evaluación 45 min, control 30 min. Coordinación interna con psicología. Sin sobremedicar.</p>
            <span className="es-block-meta">Evaluación desde $78.000 · Control desde $62.000</span>
          </motion.div>
        </div>

        <p className="es-nota">Lo que no hacemos: no atendemos urgencias 24h ni peritajes judiciales. Si hay riesgo vital, te derivamos a red de urgencia con acompañamiento.</p>
        <p className="es-prueba">6 años en Providencia · 3 psicólogas + 1 psiquiatra · supervisión clínica semanal · 92% continúa tras primera sesión</p>
      </div>
    </section>
  );
}

function Aranceles() {
  const [openAcc, setOpenAcc] = useState<string | null>(null);
  const rows = [
    { prest: "Primera sesión psicología", precio: "$52.000", desde: false, nota: "50 min · incluye resumen por escrito + plan 4 semanas" },
    { prest: "Sesión psicología (semanal/quincenal)", precio: "$48.000", desde: true, nota: "50 min · frecuencia acordada, sin amarre" },
    { prest: "Terapia de pareja", precio: "$62.000", desde: true, nota: "70 min · ambos presentes, plan revisable mes a mes" },
    { prest: "Evaluación psiquiatría", precio: "$78.000", desde: true, nota: "45 min · anamnesis + indicación + receta si aplica" },
    { prest: "Control psiquiatría", precio: "$62.000", desde: true, nota: "30 min · ajuste y seguimiento, cada 3–6 semanas" },
    { prest: "Pack 4 sesiones psicología", precio: "$176.000", desde: false, nota: "4x50 min · $44.000 c/u · vence en 6 semanas" },
    { prest: "Informe / certificado (si aplica)", precio: "$18.000", desde: false, nota: "a solicitud, con firma clínica" },
  ];

  return (
    <section id="aranceles" aria-label="Aranceles">
      <div className="ar-grid">
        <div className="ar-header">
          <p className="ar-kicker">VALORES</p>
          <h2 className="ar-h2">Arancel claro, sin letra chica</h2>
          <p className="ar-intro">Cada fila es el valor desde. El total se confirma tras la primera sesión, nunca por WhatsApp. Boleta reembolsable en todas las modalidades.</p>
        </div>

        <div className="ar-tabla-wrap">
          <div className="ar-tabla">
            {rows.map((r) => (
              <div className="ar-fila" key={r.prest}>
                <div className="ar-fila-left">
                  <span className="ar-prest">{r.prest}</span>
                  <div className="ar-nota-hover">{r.nota}</div>
                </div>
                <span className="ar-precio">{r.desde ? <span className="desde">desde</span> : null}{r.precio}</span>
              </div>
            ))}
          </div>
          <p className="ar-pie">Valores referenciales; se confirma tras primera sesión. Sin cobros sorpresa. Fonasa tramo A–D con boleta reembolsable según tu plan Isapre (50–80%).</p>
        </div>

        <div className="ar-aside">
          <div className="ar-aside-card">
            <h3 className="ar-aside-title">¿Necesitas reembolso?</h3>
            <p className="ar-aside-text">Emitimos boleta electrónica. Te decimos antes cuánto cubre tu Isapre y cuánto pagas tú. Sin convenio cerrado que te amarre.</p>

            <div className="ar-acordeon">
              {[
                { id: "fonasa", label: "Fonasa", text: "Tramo A–D: compras bono nivel 3 o pides boleta para reembolso. Te explicamos en la primera sesión." },
                { id: "isapre", label: "Isapre", text: "Todas con reembolso 50–80% según plan. Pagas, te damos boleta y reembolsas directo." },
                { id: "particular", label: "Particular", text: "Hasta 6 cuotas sin interés con tarjeta. Pack 4 sesiones con valor preferente." },
              ].map((it) => (
                <div className="ar-ac-item" key={it.id}>
                  <button className="ar-ac-btn" onClick={() => setOpenAcc(openAcc === it.id ? null : it.id)} aria-expanded={openAcc === it.id} type="button">
                    <span>{it.label}</span><span>{openAcc === it.id ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {openAcc === it.id && (
                      <motion.div
                        className="ar-ac-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p>{it.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <a href="tel:+56944318820" className="ar-aside-tel">+56 9 4431 8820</a>
            <a href="#agenda-eter" className="ar-aside-cta">Agendar primera sesión</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaEter() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [motivo, setMotivo] = useState("");
  const [detalle, setDetalle] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!nombre.trim()) { setStatus("error"); setErrorMsg("Ingresa tu nombre."); return; }
    if (!telefono.trim()) { setStatus("error"); setErrorMsg("Ingresa tu teléfono."); return; }
    const telPat = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    // allow flexible but must contain +56
    if (!telefono.includes("+56")) { setStatus("error"); setErrorMsg("Usa formato +56 9 1234 5678."); return; }
    if (telPat.test(telefono.trim()) === false && telefono.replace(/\s/g,"").length < 11) { /* soft check */ }
    if (!modalidad) { setStatus("error"); setErrorMsg("Elige una modalidad."); return; }
    if (!acepta) { setStatus("error"); setErrorMsg("Debes aceptar el contacto por WhatsApp y confidencialidad."); return; }

    setStatus("loading");

    const payload = { nombre, telefono, modalidad, motivo, detalle, fecha: new Date().toISOString() };
    try { localStorage.setItem("eter-agenda", JSON.stringify(payload)); } catch {}

    const mensaje = `Hola ETER, quiero agendar primera sesión. Nombre: ${nombre} Tel: ${telefono} Modalidad: ${modalidad} Motivo: ${motivo || "—"} Detalle: ${detalle || "—"}`;
    const wa = `https://wa.me/56944318820?text=${encodeURIComponent(mensaje)}`;

    setTimeout(() => {
      setStatus("success");
      // open WhatsApp; fallback to mailto if blocked
      const win = window.open(wa, "_blank");
      if (!win) {
        window.location.href = `mailto:hola@eter.cl?subject=${encodeURIComponent("Agendar primera sesión — ETER")}&body=${encodeURIComponent(mensaje)}`;
      }
    }, 700);
  };

  return (
    <section id="agenda-eter" aria-label="Agenda">
      <div className="ag-grid">
        <div className="ag-left">
          <p className="ag-kicker">AGENDA</p>
          <h2 className="ag-h2">Pide tu primera sesión. Te responden hoy.</h2>
          <p className="ag-sub">Elige modalidad y horario. Te confirmamos por WhatsApp el mismo día. Si prefieres, llama directo.</p>

          <form className="ag-form" onSubmit={handleSubmit} noValidate>
            <div className="ag-field">
              <label htmlFor="ag-nombre">Nombre</label>
              <input id="ag-nombre" className="ag-input" type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div className="ag-field">
              <label htmlFor="ag-tel">Teléfono</label>
              <input id="ag-tel" className="ag-input ag-input--tel" type="tel" placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} required pattern="\+56.*" />
            </div>
            <div className="ag-field">
              <label htmlFor="ag-modalidad">Modalidad</label>
              <select id="ag-modalidad" className="ag-select" value={modalidad} onChange={(e) => setModalidad(e.target.value)} required>
                <option value="">Selecciona modalidad</option>
                <option value="Presencial Providencia">Presencial Providencia</option>
                <option value="Teleconsulta">Teleconsulta</option>
                <option value="Indiferente">Indiferente</option>
              </select>
            </div>
            <div className="ag-field">
              <label htmlFor="ag-motivo">Motivo</label>
              <select id="ag-motivo" className="ag-select" value={motivo} onChange={(e) => setMotivo(e.target.value)}>
                <option value="">Selecciona motivo</option>
                <option value="Ansiedad/estrés">Ansiedad/estrés</option>
                <option value="Ánimo/burnout">Ánimo/burnout</option>
                <option value="Adolescente">Adolescente</option>
                <option value="Pareja/vínculos">Pareja/vínculos</option>
                <option value="Psiquiatría">Psiquiatría</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="ag-field">
              <label htmlFor="ag-detalle">Detalle (opcional)</label>
              <textarea id="ag-detalle" className="ag-textarea" placeholder="Cuéntanos en una línea qué te trae hoy (opcional)" value={detalle} onChange={(e) => setDetalle(e.target.value)} rows={3} />
            </div>
            <label className="ag-checkbox">
              <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} />
              <span>Acepto que me contacten por WhatsApp y conozco la confidencialidad</span>
            </label>

            <button type="submit" className="ag-submit" disabled={status === "loading"}>
              {status === "loading" ? "Enviando…" : "Agendar primera sesión"}
            </button>

            {status === "success" && <p className="ag-msg ag-msg--success">Te escribimos hoy · revisa tu WhatsApp</p>}
            {status === "error" && <p className="ag-msg ag-msg--error">{errorMsg}</p>}

            <p className="ag-priv">Tus datos solo se usan para coordinar la cita. No compartimos con terceros.</p>
          </form>
        </div>

        <div className="ag-right">
          <a href="tel:+56944318820" className="ag-tel-big">+56 9 4431 8820</a>
          <a href="mailto:hola@eter.cl" className="ag-email">hola@eter.cl</a>
          <p className="ag-dir">Av. Providencia 1208, of. 402, Providencia, Santiago</p>
          <p className="ag-horario">Lun–Vie 9:00–20:00 · Sáb 10:00–14:00</p>
          <div className="ag-mapa-linea">
            <span className="ag-mapa-dot" aria-hidden="true" />
            <span className="ag-mapa-label">Metro Los Leones · 4 min a pie</span>
          </div>
          <MediaImg src="media/eter-interior-16x9.png" fallback="eter-interior-16x9.png" alt="Interior box silla mesa ventana planta luz natural" className="ag-proof" />
          <p className="ag-aviso">No atendemos urgencias 24h. Si hay riesgo vital, llama a 131 o acude a urgencia.</p>
        </div>

        <footer className="ag-footer">
          <span className="ag-footer-line1">ETER Salud Mental SpA · Av. Providencia 1208, of. 402, Providencia · hola@eter.cl · +56 9 4431 8820</span>
          <span className="ag-footer-line2">© 2026 ETER. Todos los derechos reservados. Valores referenciales. Confidencialidad clínica.</span>
        </footer>
      </div>
    </section>
  );
}

function CtaMobileBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const should = scrolled > 0.4;
      setVisible(should);
      document.body.classList.toggle("has-cta-bar", should);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("has-cta-bar");
    };
  }, []);
  return (
    <div className={`cta-mobile-bar ${visible ? "visible" : ""}`} aria-hidden={!visible}>
      <a href="#agenda-eter">Agendar primera sesión</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimeraSesion />
        <Modalidad />
        <Especialidades />
        <Aranceles />
        <AgendaEter />
      </main>
      <CtaMobileBar />
    </>
  );
}
