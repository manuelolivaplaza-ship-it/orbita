import { useState, useEffect } from "react";

const base = import.meta.env.BASE_URL;
const mediaBase = `${base}media/`;

function MediaFalta({ filename, aspect }: { filename: string; aspect?: string }) {
  return (
    <div
      className="media-falta"
      data-falta={filename}
      style={{
        aspectRatio: aspect ?? "16/9",
        background: "#D6E6EE",
        display: "grid",
        placeItems: "center",
        color: "#6B8A9A",
        font: '500 0.8rem "Figtree", sans-serif',
        border: "1px solid var(--linea)",
        width: "100%",
      }}
    >
      falta: {filename}
    </div>
  );
}

function MediaImg({
  filename,
  alt,
  aspect,
  className,
  style,
}: {
  filename: string;
  alt: string;
  aspect?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [missing, setMissing] = useState(false);
  if (missing) return <MediaFalta filename={filename} aspect={aspect} />;
  return (
    <img
      src={`${mediaBase}${filename}`}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (typeof console !== "undefined") console.warn(`falta: ${filename}`);
        setMissing(true);
      }}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo" aria-label="AZURA">
          <span className="logo-azura">AZURA</span>
          <span className="logo-descriptor">Clínica Dental · Providencia</span>
        </div>

        <nav className="header-nav" aria-label="Principal">
          <a href="#arancel-azura">Arancel</a>
          <a href="#evaluacion-azura">Evaluación</a>
          <a href="#prevision-azura">Previsión</a>
          <a href="#box-azura">Box</a>
        </nav>

        <div className="header-tel">
          <a href="tel:+56981234567">+56 9 8123 4567</a>
        </div>

        <div className="header-cta">
          <a href="#reserva-azura">Agendar evaluación</a>
        </div>

        <a className="header-tel-icon" href="tel:+56981234567" aria-label="Llamar +56 9 8123 4567">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.07 12.81 19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.21.4 2.39.82 3.5a2 2 0 0 1-.57 2.11L8.09 10.49a16 16 0 0 0 5.42 5.42l1.16-1.16a2 2 0 0 1 2.11-.57c1.11.42 2.29.7 3.5.82A2 2 0 0 1 22 16.92Z" />
          </svg>
        </a>

        <button
          className="header-hamburger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav className={`header-mobile-nav ${open ? "open" : ""}`} aria-label="Móvil">
        <a href="#arancel-azura" onClick={() => setOpen(false)}>Arancel</a>
        <a href="#evaluacion-azura" onClick={() => setOpen(false)}>Evaluación</a>
        <a href="#prevision-azura" onClick={() => setOpen(false)}>Previsión</a>
        <a href="#box-azura" onClick={() => setOpen(false)}>Box</a>
      </nav>
      {open ? (
        <div className="header-mobile-cta">
          <a href="#reserva-azura" onClick={() => setOpen(false)}>Agendar evaluación</a>
        </div>
      ) : null}
    </header>
  );
}

function HeroMediaDesktop() {
  const [imgMissing, setImgMissing] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);
  const poster = `${mediaBase}azura-hero-16x9.png`;
  const video = `${mediaBase}azura-hero-loop.mp4`;
  const img = `${mediaBase}azura-hero-16x9.png`;

  if (videoMissing && imgMissing) {
    if (typeof console !== "undefined") console.warn("falta: azura-hero-16x9.png");
    return (
      <div
        className="hero-media-wrap media-falta"
        data-falta="azura-hero-16x9.png"
        style={{
          aspectRatio: "16/9",
          background: "#D6E6EE",
          display: "grid",
          placeItems: "center",
          color: "#6B8A9A",
          font: '500 0.8rem "Figtree", sans-serif',
        }}
      >
        falta: azura-hero-16x9.png
      </div>
    );
  }

  if (!videoMissing) {
    return (
      <div className="hero-media-wrap hero-desktop-media">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onError={() => {
            if (typeof console !== "undefined") console.warn("falta: azura-hero-loop.mp4");
            setVideoMissing(true);
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="hero-media-wrap hero-desktop-media">
      <img
        src={img}
        alt="Vaso de porcelana celeste con agua cian en calma y burbuja suspendida, luz norte de box"
        loading="eager"
        decoding="async"
        onError={() => {
          if (typeof console !== "undefined") console.warn("falta: azura-hero-16x9.png");
          setImgMissing(true);
        }}
      />
    </div>
  );
}

function HeroMediaMobile() {
  const [missing, setMissing] = useState(false);
  const img9x16 = `${mediaBase}azura-hero-9x16.png`;
  const fallback16x9 = `${mediaBase}azura-hero-16x9.png`;
  const src = missing ? fallback16x9 : img9x16;
  const [fallbackMissing, setFallbackMissing] = useState(false);

  if (fallbackMissing) {
    if (typeof console !== "undefined") console.warn("falta: azura-hero-16x9.png");
    return (
      <div
        className="hero-media-wrap media-falta hero-mobile-media"
        data-falta="azura-hero-16x9.png"
        style={{
          aspectRatio: "16/9",
          background: "#D6E6EE",
          display: "grid",
          placeItems: "center",
          color: "#6B8A9A",
          font: '500 0.8rem "Figtree", sans-serif',
        }}
      >
        falta: azura-hero-16x9.png
      </div>
    );
  }

  return (
    <div className="hero-media-wrap hero-mobile-media" style={missing ? { aspectRatio: "16/9" } : { aspectRatio: "9/16" }}>
      <img
        src={src}
        alt="Vaso de porcelana celeste con agua cian en calma, recorte vertical"
        loading="eager"
        decoding="async"
        onError={() => {
          if (!missing) {
            if (typeof console !== "undefined") console.warn("falta: azura-hero-9x16.png");
            setMissing(true);
          } else {
            if (typeof console !== "undefined") console.warn("falta: azura-hero-16x9.png");
            setFallbackMissing(true);
          }
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section id="portada-azura" className="hero">
      <div className="hero-grid">
        <div className="hero-right">
          <HeroMediaDesktop />
          <HeroMediaMobile />
          <p className="hero-caption">Vaso y porcelana · luz norte · Box 1</p>
        </div>

        <div className="hero-left">
          <p className="hero-kicker">CLÍNICA DENTAL · PROVIDENCIA</p>
          <h1 className="hero-h1">
            <span className="hero-h1-inner">Agua clara, diagnóstico claro.</span>
          </h1>
          <p className="hero-sub">
            En Azura ves lo que vemos: scanner, fotos y presupuesto por escrito antes de partir. Sin apuro, sin letra chica.
          </p>

          <div className="hero-ctas">
            <a href="#reserva-azura" className="btn-primary">
              Agendar evaluación Azura
            </a>
            <a href="#arancel-azura" className="btn-ghost">
              Ver valores desde
            </a>
          </div>

          <div className="hero-banda" aria-label="Garantías">
            <span className="banda-item">
              <span className="banda-dot" aria-hidden="true" /> Hora exacta, sin sala llena
            </span>
            <span className="banda-item">
              <span className="banda-dot" aria-hidden="true" /> Boleta reembolsable Isapre/Fonasa
            </span>
            <span className="banda-item">
              <span className="banda-dot" aria-hidden="true" /> El mismo dentista siempre
            </span>
          </div>

          <p className="hero-micro">Si aparece algo extra en la evaluación, te avisamos antes de tocar. Nunca partimos sin tu firma.</p>
        </div>
      </div>
    </section>
  );
}

// #arancel-azura — G10 corazón conversión
function ArancelAzura() {
  const filas: Array<{ prest: string; precio: string; nota: string }> = [
    { prest: "Evaluación + scanner", precio: "$32.900", nota: "45 min · fotos + radio + diagnóstico explicado en pantalla" },
    { prest: "Limpieza y pulido", precio: "desde $42.900", nota: "40 min · higiene + pulido + flúor neutro" },
    { prest: "Tapadura resina", precio: "desde $62.900", nota: "50 min · resina fotocurable + pulido espejo" },
    { prest: "Endodoncia 1 conducto", precio: "desde $135.000", nota: "90 min · microscopio + control rx" },
    { prest: "Extracción simple", precio: "desde $52.900", nota: "30 min · anestesia + control 7 días" },
    { prest: "Blanqueamiento clínico", precio: "desde $94.900", nota: "60 min · peróxido + barrera gingival" },
    { prest: "Implante (tornillo + corona)", precio: "desde $395.000", nota: "plan 2 fases · controles incluidos" },
    { prest: "Alineadores transparentes", precio: "desde $48.000/mes", nota: "12–18 meses · controles mensuales" },
  ];
  return (
    <section id="arancel-azura" className="section-arancel">
      <div className="section-inner">
        <div className="section-header">
          <p className="kicker">ARANCEL A LA VISTA</p>
          <h2 className="h2">Valores desde, por escrito. Sin sorpresas después.</h2>
          <p className="intro">Cada fila es precio desde. El valor final se cierra tras diagnóstico en box — nunca por WhatsApp.</p>
        </div>

        <div className="arancel-grid">
          <div className="arancel-tabla-wrap">
            <div className="arancel-tabla" role="table" aria-label="Arancel">
              {filas.map((f) => (
                <div className="arancel-fila" role="row" key={f.prest}>
                  <div className="arancel-prest" role="cell">
                    <span className="prest-nombre">{f.prest}</span>
                    <span className="prest-nota">{f.nota}</span>
                  </div>
                  <div className="arancel-precio" role="cell">
                    <span className="precio-valor">{f.precio}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="arancel-nota-pie">Valores referenciales; se confirman tras diagnóstico. Fonasa nivel 3 e Isapre con boleta reembolsable.</p>
          </div>

          <aside className="arancel-aside" aria-label="Urgencia">
            <h3 className="aside-title">¿Dolor hoy?</h3>
            <p className="aside-text">Urgencia el mismo día según cupo. Llama y te damos hora real, sin call center.</p>
            <a className="aside-tel" href="tel:+56981234567">
              +56 9 8123 4567
            </a>
            <a className="btn-primary aside-cta" href="#reserva-azura">
              Agendar evaluación
            </a>
            <p className="aside-micro">Evaluación $32.900 se abona al tratamiento si sigues.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function EvaluacionAzura() {
  return (
    <section id="evaluacion-azura" className="section-evaluacion">
      <div className="section-inner">
        <div className="evaluacion-grid">
          <div className="evaluacion-media">
            <div className="evaluacion-img-wrap">
              <MediaImg filename="azura-tile-01-1x1.png" alt="Bandeja con vaso de agua y porcelana, luz lateral del box" aspect="1/1" />
            </div>
            <p className="media-caption">Box 2 · luz lateral</p>
          </div>

          <div className="evaluacion-content">
            <p className="kicker">PRIMERA VEZ EN AZURA</p>
            <h2 className="h2">45 minutos para entender, no para correr.</h2>
            <p className="intro">No es una limpieza express. Es una cita para mirar con calma y decidir sin presión.</p>

            <div className="pasos">
              <div className="paso">
                <span className="paso-num" aria-hidden="true">
                  01
                </span>
                <div className="paso-body">
                  <h3 className="paso-title">Fotos y scanner</h3>
                  <p className="paso-text">Scanner intraoral y radiografía en el mismo sillón. Ves tu boca en pantalla gigante.</p>
                </div>
              </div>
              <div className="paso">
                <span className="paso-num" aria-hidden="true">
                  02
                </span>
                <div className="paso-body">
                  <h3 className="paso-title">Diagnóstico en palabras simples</h3>
                  <p className="paso-text">Te mostramos qué es urgente, qué puede esperar y qué no hace falta tocar. Preguntas todo.</p>
                </div>
              </div>
              <div className="paso">
                <span className="paso-num" aria-hidden="true">
                  03
                </span>
                <div className="paso-body">
                  <h3 className="paso-title">Presupuesto por escrito + plan a tu ritmo</h3>
                  <p className="paso-text">Hoja firmada con valores por pieza, alternativas y facilidades. Te la llevas a casa.</p>
                </div>
              </div>
            </div>

            <ul className="checklist" aria-label="Entrega">
              <li>
                <span className="check" aria-hidden="true">✓</span> Informe impreso
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span> Presupuesto firmado
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span> Indicaciones post-evaluación
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span> WhatsApp directo con tu dentista
              </li>
            </ul>

            <p className="precio-inline">Evaluación $32.900 — se abona al tratamiento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrevisionAzura() {
  const [open, setOpen] = useState<number | null>(0);
  const acordeon = [
    {
      q: "¿Atienden Fonasa?",
      a: "Sí, nivel 3. Compras el bono y te atendemos sin copago extra en prestaciones bonificables.",
    },
    {
      q: "¿Qué Isapres?",
      a: "Todas con reembolso. Emitimos boleta y reembolsas donde te convenga. No hay convenio cerrado.",
    },
    {
      q: "¿Cuotas sin interés?",
      a: "Sí, hasta 6 sin interés con Isapre/Fonasa y hasta 12 en particular. Total por escrito.",
    },
  ];

  return (
    <section id="prevision-azura" className="section-prevision">
      <div className="section-inner">
        <div className="section-header">
          <p className="kicker">CÓMO PAGAS</p>
          <h2 className="h2">Fonasa, Isapre o particular. Te decimos el número antes.</h2>
          <p className="intro">Boleta reembolsable. Antes de partir, te calculamos cuánto cubre tu plan y cuánto pagas tú.</p>
        </div>

        <div className="prevision-tabla-wrap">
          {/* Desktop table */}
          <div className="prevision-tabla" role="table" aria-label="Previsión">
            <div className="prevision-head" role="row">
              <span className="prevision-cell head blank" role="columnheader" aria-label="vacío"></span>
              <span className="prevision-cell head" role="columnheader">
                FONASA
              </span>
              <span className="prevision-cell head" role="columnheader">
                ISAPRE (todas)
              </span>
              <span className="prevision-cell head" role="columnheader">
                PARTICULAR
              </span>
            </div>
            <div className="prevision-row" role="row">
              <span className="prevision-cell label" role="cell">
                Cómo
              </span>
              <span className="prevision-cell" role="cell">
                Bono nivel 3 en sucursal o web
              </span>
              <span className="prevision-cell" role="cell">
                Pagas y reembolsas con boleta
              </span>
              <span className="prevision-cell" role="cell">
                Pago directo
              </span>
            </div>
            <div className="prevision-row" role="row">
              <span className="prevision-cell label" role="cell">
                Traes
              </span>
              <span className="prevision-cell" role="cell">
                Carnet + bono
              </span>
              <span className="prevision-cell" role="cell">
                Credencial + plan impreso
              </span>
              <span className="prevision-cell" role="cell">
                Carnet
              </span>
            </div>
            <div className="prevision-row" role="row">
              <span className="prevision-cell label" role="cell">
                Reembolso
              </span>
              <span className="prevision-cell" role="cell">
                Directo Fonasa
              </span>
              <span className="prevision-cell" role="cell">
                50–80% según plan*
              </span>
              <span className="prevision-cell" role="cell">
                —
              </span>
            </div>
            <div className="prevision-row" role="row">
              <span className="prevision-cell label" role="cell">
                Cuotas
              </span>
              <span className="prevision-cell" role="cell">
                3 sin interés
              </span>
              <span className="prevision-cell" role="cell">
                6 sin interés
              </span>
              <span className="prevision-cell" role="cell">
                Hasta 12 cuotas
              </span>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="prevision-cards" aria-hidden="false">
            <div className="prevision-card">
              <h3 className="prevision-card-title">FONASA</h3>
              <dl>
                <dt>Cómo</dt>
                <dd>Bono nivel 3 en sucursal o web</dd>
                <dt>Traes</dt>
                <dd>Carnet + bono</dd>
                <dt>Reembolso</dt>
                <dd>Directo Fonasa</dd>
                <dt>Cuotas</dt>
                <dd>3 sin interés</dd>
              </dl>
            </div>
            <div className="prevision-card">
              <h3 className="prevision-card-title">ISAPRE (todas)</h3>
              <dl>
                <dt>Cómo</dt>
                <dd>Pagas y reembolsas con boleta</dd>
                <dt>Traes</dt>
                <dd>Credencial + plan impreso</dd>
                <dt>Reembolso</dt>
                <dd>50–80% según plan*</dd>
                <dt>Cuotas</dt>
                <dd>6 sin interés</dd>
              </dl>
            </div>
            <div className="prevision-card">
              <h3 className="prevision-card-title">PARTICULAR</h3>
              <dl>
                <dt>Cómo</dt>
                <dd>Pago directo</dd>
                <dt>Traes</dt>
                <dd>Carnet</dd>
                <dt>Reembolso</dt>
                <dd>—</dd>
                <dt>Cuotas</dt>
                <dd>Hasta 12 cuotas</dd>
              </dl>
            </div>
          </div>

          <p className="prevision-nota">* El % depende de tu Isapre. Lo verificamos en box y te damos cálculo por escrito.</p>
        </div>

        <div className="prevision-acordeon-grid">
          <div className="acordeon">
            {acordeon.map((item, i) => (
              <div className={`acordeon-item ${open === i ? "open" : ""}`} key={item.q}>
                <button
                  className="acordeon-trigger"
                  aria-expanded={open === i}
                  aria-controls={`acordeon-panel-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="acordeon-icon" aria-hidden="true">
                    {open === i ? "—" : "+"}
                  </span>
                </button>
                <div
                  id={`acordeon-panel-${i}`}
                  className="acordeon-panel"
                  role="region"
                  aria-hidden={open !== i}
                  style={open === i ? undefined : { display: "none" }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="prevision-aside" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}

function BoxAzura() {
  return (
    <section id="box-azura" className="section-box">
      <div className="section-inner">
        <div className="section-header">
          <p className="kicker">EL BOX</p>
          <h2 className="h2">Luz norte, agua quieta y el mismo equipo siempre.</h2>
          <p className="intro">Cuatro especialidades. Siempre los mismos 3 dentistas — no rotamos.</p>
        </div>

        <div className="box-interior-wrap">
          <div className="box-interior-img">
            <MediaImg filename="azura-interior-16x9.png" alt="Interior de box dental vacío en Providencia, luz norte" aspect="16/9" />
          </div>
          <p className="media-caption">Box 1 · Providencia · luz norte</p>
        </div>

        <div className="box-grid">
          <article className="box-block">
            <div className="box-block-media" style={{ aspectRatio: "3/4" }}>
              <MediaImg filename="azura-tile-02-3x4.png" alt="Detalle de instrumental esterilizado sobre paño celeste" aspect="3/4" />
            </div>
            <h3 className="box-block-title">Endodoncia microscópica</h3>
            <p className="box-block-text">Un conducto a la vez, con microscopio y rx. Sin apuro.</p>
            <p className="box-block-meta">Desde $135.000 · 90 min</p>
          </article>

          <article className="box-block">
            <div className="box-block-media" style={{ aspectRatio: "4/3" }}>
              <MediaImg filename="azura-tile-03-4x3.png" alt="Lámpara operatoria y porcelana reflejada en agua" aspect="4/3" />
            </div>
            <h3 className="box-block-title">Implantología digital</h3>
            <p className="box-block-text">Tornillo + corona en 2 fases, planificación 3D y controles incluidos.</p>
            <p className="box-block-meta">Desde $395.000 · plan 2 fases</p>
          </article>

          <article className="box-block">
            <div className="box-block-media" style={{ aspectRatio: "1/1" }}>
              <MediaImg filename="azura-tile-01-1x1.png" alt="Vaso de enjuague cian, borde de porcelana nítido" aspect="1/1" />
            </div>
            <h3 className="box-block-title">Alineadores transparentes</h3>
            <p className="box-block-text">Controles mensuales, mismo ortodoncista, progreso visible en scanner.</p>
            <p className="box-block-meta">Desde $48.000/mes</p>
          </article>

          <article className="box-block">
            <div className="box-block-media" style={{ aspectRatio: "1/1" }}>
              <MediaImg filename="azura-proof-16x9.png" alt="Detalle de cerámica y borde incisal bajo luz fría" aspect="1/1" style={{ objectPosition: "center" }} />
            </div>
            <h3 className="box-block-title">Estética adhesiva</h3>
            <p className="box-block-text">Carillas y resinas que parecen tuyas. Menos es más.</p>
            <p className="box-block-meta">Desde $62.900</p>
          </article>
        </div>

        <p className="box-proof">+12 años en Providencia · +8.200 pacientes · 97% nos recomienda · 3 dentistas fijos</p>
      </div>
    </section>
  );
}

type FormState = "idle" | "loading" | "success" | "error";

function ReservaAzura() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [detalle, setDetalle] = useState("");
  const [whatsappOk, setWhatsappOk] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const telRegex = /^\+56\s?9\s?\d{4}\s?\d{4}$/;

  function validate(): string | null {
    if (!nombre.trim()) return "Ingresa tu nombre.";
    if (!telefono.trim()) return "Ingresa tu teléfono.";
    if (!telRegex.test(telefono.trim())) return "Teléfono debe ser +56 9 1234 5678.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Email no válido.";
    if (!motivo) return "Elige un motivo.";
    if (!whatsappOk) return "Debes aceptar el contacto por WhatsApp.";
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err);
      setState("error");
      return;
    }
    setErrorMsg("");
    setState("loading");
    const payload = { nombre: nombre.trim(), telefono: telefono.trim(), email: email.trim(), motivo, detalle: detalle.trim(), whatsappOk, fecha: new Date().toISOString() };
    try {
      localStorage.setItem("azura-reserva", JSON.stringify(payload));
    } catch {
      // ignore
    }
    // simulate async
    setTimeout(() => {
      setState("success");
      const mensaje = `Hola Azura, quiero agendar evaluación. Nombre: ${payload.nombre}. Motivo: ${payload.motivo}. Fono: ${payload.telefono}${payload.detalle ? ` Detalle: ${payload.detalle}` : ""}`;
      const waUrl = `https://wa.me/56981234567?text=${encodeURIComponent(mensaje)}`;
      const mailto = `mailto:hola@azura.cl?subject=${encodeURIComponent("Reserva Azura - " + payload.nombre)}&body=${encodeURIComponent(mensaje + (payload.email ? ` Email: ${payload.email}` : ""))}`;
      // Prefer wa.me if whatsapp accepted; otherwise mailto fallback - spec says wa.me or mailto. Use wa.me.
      try {
        window.open(waUrl, "_blank");
      } catch {
        window.location.href = mailto;
      }
      // keep success visible; do not reset immediately
    }, 700);
  }

  return (
    <section id="reserva-azura" className="section-reserva">
      <div className="section-inner">
        <div className="reserva-grid">
          <div className="reserva-left">
            <p className="kicker">RESERVA</p>
            <h2 className="h2">Agenda hoy. Te respondemos hoy.</h2>
            <p className="intro">Elige día y te confirmamos por WhatsApp el mismo día. Si es urgencia, llama.</p>

            <form className="reserva-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="reserva-nombre">Nombre</label>
                <input id="reserva-nombre" type="text" required placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>

              <div className="form-field">
                <label htmlFor="reserva-tel">Teléfono</label>
                <input id="reserva-tel" type="tel" required placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} pattern="\+56 9.*" />
              </div>

              <div className="form-field">
                <label htmlFor="reserva-email">Email</label>
                <input id="reserva-email" type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-field">
                <label htmlFor="reserva-motivo">Motivo</label>
                <select id="reserva-motivo" required value={motivo} onChange={(e) => setMotivo(e.target.value)}>
                  <option value="">Selecciona</option>
                  <option>Evaluación general</option>
                  <option>Dolor/urgencia</option>
                  <option>Limpieza</option>
                  <option>Ortodoncia/alineadores</option>
                  <option>Implante</option>
                  <option>Estética</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="reserva-detalle">Detalle</label>
                <textarea id="reserva-detalle" rows={3} placeholder="Cuéntanos en una línea (opcional)" value={detalle} onChange={(e) => setDetalle(e.target.value)} />
              </div>

              <label className="form-checkbox">
                <input type="checkbox" required checked={whatsappOk} onChange={(e) => setWhatsappOk(e.target.checked)} />
                <span>Acepto que me contacten por WhatsApp</span>
              </label>

              <button type="submit" className="btn-primary form-submit" disabled={state === "loading"}>
                {state === "loading" ? "Enviando…" : "Agendar evaluación Azura"}
              </button>

              {state === "success" ? (
                <p className="form-success" role="status" aria-live="polite">
                  <span className="form-success-check" aria-hidden="true">
                    ✓
                  </span>{" "}
                  Listo · te escribimos hoy por WhatsApp
                </p>
              ) : null}
              {state === "error" ? (
                <p className="form-error" role="alert">
                  {errorMsg}
                </p>
              ) : null}
            </form>
          </div>

          <div className="reserva-right">
            <a className="reserva-tel-gigante" href="tel:+56981234567">
              +56 9 8123 4567
            </a>
            <a className="reserva-email" href="mailto:hola@azura.cl">
              hola@azura.cl
            </a>
            <p className="reserva-direccion">Av. Providencia 1208, of. 402, Providencia, Santiago</p>
            <p className="reserva-horario">
              Lun–Vie 9:00–19:30 · Sáb 10:00–14:00
            </p>
            <p className="reserva-metro">
              <span className="metro-dot" aria-hidden="true" /> Metro Los Leones · 4 min a pie
            </p>

            <div className="reserva-proof-img">
              <MediaImg filename="azura-proof-16x9.png" alt="Interior premium sin personas, luz fría limpia" aspect="16/9" />
            </div>

            <footer className="reserva-footer">
              <p className="reserva-footer-line">AZURA SpA · Av. Providencia 1208, of. 402, Providencia · hola@azura.cl · +56 9 8123 4567</p>
              <p className="reserva-footer-copy">© 2026 AZURA. Valores referenciales. Se confirman tras diagnóstico.</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? scrollY / max : 0;
      const hero = document.getElementById("portada-azura");
      const heroBottom = hero ? hero.getBoundingClientRect().bottom + scrollY : 600;
      // visible after 40% and after hero
      if (progress > 0.4 && scrollY > heroBottom) {
        // hide if reserva in viewport
        const reserva = document.getElementById("reserva-azura");
        if (reserva) {
          const rRect = reserva.getBoundingClientRect();
          if (rRect.top < window.innerHeight * 0.85) {
            setVisible(false);
            return;
          }
        }
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (visible) document.body.style.paddingBottom = "72px";
    else document.body.style.paddingBottom = "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <div className="sticky-mobile-cta" role="complementary" aria-label="Agendar">
      <a href="#reserva-azura" className="btn-primary sticky-cta-btn">
        Agendar evaluación
      </a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ArancelAzura />
        <EvaluacionAzura />
        <PrevisionAzura />
        <BoxAzura />
        <ReservaAzura />
      </main>
      <MobileStickyCta />
    </>
  );
}
