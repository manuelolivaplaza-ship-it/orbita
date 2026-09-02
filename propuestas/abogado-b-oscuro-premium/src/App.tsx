import { useEffect, useState } from "react";

const NAV = [
  { n: "01", label: "Materias", href: "#materias-abogado-b-oscuro-premium" },
  { n: "02", label: "Cómo partimos", href: "#como-partimos-abogado-b-oscuro-premium" },
  { n: "03", label: "Honorarios", href: "#honorarios-abogado-b-oscuro-premium" },
  { n: "04", label: "Respaldo", href: "#respaldo-abogado-b-oscuro-premium" },
  { n: "05", label: "Urgencia", href: "#urgencia-abogado-b-oscuro-premium" },
  { n: "06", label: "Reserva", href: "#reserva" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#contenido-abogado-b-oscuro-premium" className="skip-link">Saltar al contenido</a>
      <header className="site-header" role="banner">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="logo" aria-label="VALPARAISO — inicio">VALPARAISO</a>

            <nav className="nav-center" aria-label="Índice principal">
              {NAV.map((it) => (
                <a key={it.n} href={it.href}>
                  <span className="num">{it.n}</span>{it.label}
                </a>
              ))}
            </nav>

            <div className="header-right">
              <a href="tel:+56912345678" className="header-phone" aria-label="Llamar +56 9 1234 5678">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5a1 1 0 0 1 .9-.6h3.2a1 1 0 0 1 1 .8l.6 4a1 1 0 0 1-.5 1l-2.2 1.5a15 15 0 0 0 6.5 6.5l1.5-2.2a1 1 0 0 1 1-.5l4 .6a1 1 0 0 1 .8 1v3.2a1 1 0 0 1-.6.9A18 18 0 0 1 5 4.5Z" /></svg>
                +56 9 1234 5678
              </a>
              <a href="#reserva" className="header-cta">Agenda tu primera reunión</a>
            </div>

            <button
              className="hamburger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              )}
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Índice móvil">
          {NAV.map((it) => (
            <a key={it.n} href={it.href} onClick={() => setOpen(false)}>
              <span className="num">{it.n}</span>{it.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="bottom-bar" role="navigation" aria-label="Acciones rápidas">
        <a href="tel:+56912345678">Llamar</a>
        <a href="#reserva">Agenda $75k</a>
      </div>
    </>
  );
}

function HeroMedia() {
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const [hasImg, setHasImg] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/media/valparaiso-hero-loop.mp4", { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
    fetch("/media/valparaiso-hero-16x9.png", { method: "HEAD" })
      .then((r) => {
        setHasImg(r.ok);
        if (!r.ok) console.warn("Falta media: valparaiso-hero-16x9.png");
      })
      .catch(() => {
        setHasImg(false);
        console.warn("Falta media: valparaiso-hero-16x9.png");
      });
  }, []);

  if (hasImg === false) {
    return (
      <div className="media-falta" data-falta="valparaiso-hero-16x9.png">
        Falta media: valparaiso-hero-16x9.png
      </div>
    );
  }

  if (hasVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/media/valparaiso-hero-16x9.png"
        aria-label="Biblioteca nocturna Valparaíso"
      >
        <source src="/media/valparaiso-hero-loop.mp4" type="video/mp4" />
        <img
          src="/media/valparaiso-hero-16x9.png"
          alt="Biblioteca de nogal a penumbra con expediente sobre vidrio ahumado reflejando luz cálida"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center right" }}
        />
      </video>
    );
  }

  return (
    <picture>
      <source media="(max-width: 760px)" srcSet="/media/valparaiso-hero-9x16.png" />
      <img
        src="/media/valparaiso-hero-16x9.png"
        alt="Biblioteca de nogal a penumbra con expediente sobre vidrio ahumado reflejando luz cálida"
        onError={(e) => {
          const el = e.currentTarget;
          console.warn("Falta media: valparaiso-hero-16x9.png");
          el.style.display = "none";
          const wrapper = el.closest(".hero-media");
          if (wrapper && !wrapper.querySelector(".media-falta")) {
            const fallback = document.createElement("div");
            fallback.className = "media-falta";
            fallback.setAttribute("data-falta", "valparaiso-hero-16x9.png");
            fallback.textContent = "Falta media: valparaiso-hero-16x9.png";
            wrapper.appendChild(fallback);
          }
        }}
      />
    </picture>
  );
}

function Hero() {
  return (
    <section className="hero" id="indice-abogado-b-oscuro-premium" aria-label="Presentación">
      <span id="contenido-abogado-b-oscuro-premium" aria-hidden="true" style={{ position: "absolute" }} />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="kicker">ESTUDIO VALPARAISO · VALPARAÍSO · DESDE 2011</p>
            <h1 className="hero-title">Defensa seria cuando importa.</h1>
            <p className="hero-lead">
              Primera reunión clara, honorario transparente. Te decimos si conviene pelear y cuánto cuesta antes de partir.
            </p>
            <div className="hero-ctas">
              <a href="#reserva" className="btn-primary">Agenda tu primera reunión</a>
              <a href="#honorarios-abogado-b-oscuro-premium" className="btn-ghost">Ver honorarios desde $75.000</a>
            </div>
            <p className="hero-micro">Respuesta en el día. Si no tomamos tu caso, te derivamos sin costo.</p>

            <nav className="hero-index" aria-label="Índice editorial">
              <p className="hero-index-label">Índice</p>
              <div className="hero-index-list">
                {NAV.map((it) => (
                  <a key={it.n} href={it.href}>
                    <span className="num">{it.n}</span>
                    <span className="label">{it.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="hero-media" role="img" aria-label="Biblioteca nocturna Valparaíso">
            <HeroMedia />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helper: image with fallback to media-falta */
function MediaImg({ src, alt, className, style, filename }: { src: string; alt: string; className?: string; style?: React.CSSProperties; filename: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    console.warn(`Falta media: ${filename}`);
    return <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={style as React.CSSProperties}>Falta media: {filename}</div>;
  }
  return <img src={src} alt={alt} className={className} style={style} onError={() => setFailed(true)} />;
}

/* ====== #materias ====== */
function SectionMaterias() {
  const fichas = [
    { kicker: "LABORAL", title: "Despido y tutela", bullets: ["Despido injustificado", "Autodespido", "Tutela por vulneración"], micro: "Desde demanda · Juzgados de Valparaíso y Santiago", num: "01" },
    { kicker: "FAMILIA", title: "Pensión, relación directa y divorcio", bullets: ["Pensión de alimentos", "Cuidado personal", "Divorcio unilateral/bilateral"], micro: "Juzgado de Familia Valparaíso", num: "02" },
    { kicker: "CIVIL", title: "Incumplimientos y cobranza", bullets: ["Juicio ejecutivo", "Indemnización", "Herencias / posesión efectiva"], micro: "Civil y cobranza", num: "03" },
    { kicker: "PENAL", title: "Defensa y querellas", bullets: ["Delitos económicos", "Lesiones", "Querella particular"], micro: "Garantía y juicio oral", num: "04" },
    { kicker: "POLICÍA LOCAL", title: "Choques y multas", bullets: ["Colisiones", "Infracciones", "Apelaciones"], micro: "Juzgado Policía Local", num: "05" },
    { kicker: "ADMINISTRATIVO", title: "Reclamos y sumarios", bullets: ["Reclamos municipales", "Sumarios", "Recursos"], micro: "Reclamos y recursos", num: "06" },
  ];
  return (
    <section id="materias-abogado-b-oscuro-premium" className="section-materias" aria-labelledby="materias-h2">
      <div className="container">
        <div className="grid">
          <div className="materias-title">
            <div className="section-num">01</div>
            <h2 id="materias-h2-abogado-b-oscuro-premium" className="h2">Materias que tomamos. Pocas, bien llevadas.</h2>
            <p className="section-intro">No tomamos todo. Si no es nuestra materia, te decimos en la primera reunión. Sin vueltas.</p>
          </div>
          <div className="materias-grid">
            {fichas.map((f) => (
              <div key={f.num} className="ficha">
                <span className="ficha-num">{f.num}</span>
                <p className="ficha-kicker">{f.kicker}</p>
                <h3 className="ficha-h3">{f.title}</h3>
                <ul className="ficha-bullets">
                  {f.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
                <p className="ficha-micro">{f.micro}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== #como-partimos ====== */
function SectionComoPartimos() {
  const [imgFail, setImgFail] = useState(false);
  return (
    <section id="como-partimos-abogado-b-oscuro-premium" className="section-como" aria-labelledby="como-h2">
      <div className="container">
        <div className="grid">
          <div className="como-main">
            <p className="section-num">02</p>
            <h2 id="como-h2-abogado-b-oscuro-premium" className="h2">Cómo partimos: en una reunión sabes si seguimos.</h2>
            <p className="section-intro">Sin diagnóstico no hay presupuesto. La primera reunión es la que ordena todo.</p>

            <div className="timeline">
              <div className="paso">
                <p className="paso-num">01</p>
                <h3 className="paso-title">01 — Primera reunión</h3>
                <p className="paso-text">Revisamos hechos, plazos y papeles. Te decimos en simple si hay caso, qué vía conviene y qué riesgo tiene. Si no conviene demandar, te lo decimos ahí.</p>
                <ul className="paso-bullets">
                  <li>· Presencial en Valparaíso o videollamada</li>
                  <li>· Lleva: contrato/finiquito, demanda previa si existe, pantallazos ordenados</li>
                </ul>
                <p className="paso-chip">Valor: $75.000 — se abona al honorario si sigues con nosotros</p>
              </div>
              <div className="paso">
                <p className="paso-num">02</p>
                <h3 className="paso-title">02 — Propuesta con honorario cerrado</h3>
                <p className="paso-text">Te enviamos por escrito: estrategia, etapas, honorario fijo o por hito y gastos. Sin sorpresas. Firmas solo si te acomoda.</p>
                <ul className="paso-bullets">
                  <li>· Honorario fijo, cuota mensual o % a resultado según materia</li>
                  <li>· Gastos ( receptor, notaría) separados y cotizados</li>
                </ul>
              </div>
              <div className="paso">
                <p className="paso-num">03</p>
                <h3 className="paso-title">03 — Seguimiento con bitácora</h3>
                <p className="paso-text">Avance por correo y WhatsApp con copia de cada escrito. Sabes en qué etapa estás y qué viene.</p>
                <ul className="paso-bullets">
                  <li>· Bitácora quincenal</li>
                  <li>· Acceso a escritos</li>
                  <li>· Respuesta en 24h hábiles</li>
                </ul>
              </div>
            </div>

            <a href="#reserva" className="btn-ghost como-cta">Reserva tu primera reunión — $75.000</a>
          </div>

          <div className="como-side">
            {!imgFail ? (
              <img
                src="/media/valparaiso-tile-expediente-3x4.png"
                alt="Expediente de tela grafito cerrado con cinta de algodón sobre mesa de nogal"
                className="como-img"
                onError={() => {
                  console.warn("Falta media: valparaiso-tile-expediente-3x4.png");
                  setImgFail(true);
                }}
              />
            ) : (
              <div className="media-falta como-img-falta" data-falta="valparaiso-tile-expediente-3x4.png">Falta media: valparaiso-tile-expediente-3x4.png</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== #honorarios ====== */
function SectionHonorarios() {
  const rows: { left: string; small?: string; price: string }[] = [
    { left: "Primera reunión · 45 min · presencial o remoto", small: "Se abona si continuas", price: "$75.000" },
    { left: "Consulta escrita con informe (2–3 pág.)", price: "desde $120.000" },
    { left: "Juicio laboral · despido injustificado", small: "Honorario fijo + % a resultado según monto", price: "desde $850.000 + 15% de lo obtenido" },
    { left: "Tutela laboral / vulneración", price: "desde $1.200.000" },
    { left: "Divorcio unilateral", price: "desde $450.000" },
    { left: "Pensión de alimentos · demanda / aumento / rebaja", price: "desde $380.000" },
    { left: "Juicio civil · incumplimiento / indemnización", price: "desde $900.000" },
    { left: "Defensa penal · control / audiencia", price: "desde $700.000 por audiencia, plan mensual desde $1.100.000" },
    { left: "Policía local · colisión / infracción", price: "desde $280.000" },
    { left: "Redacción de contrato / acuerdo", price: "desde $180.000" },
    { left: "Asesoría empresa · mensualidad PyME", small: "Revisión laboral + civil básico", price: "desde $350.000/mes" },
  ];
  return (
    <section id="honorarios-abogado-b-oscuro-premium" className="section-honorarios" aria-labelledby="honorarios-h2">
      <div className="container">
        <div className="grid">
          <div className="honor-left">
            <p className="section-num">03</p>
            <h2 id="honorarios-h2-abogado-b-oscuro-premium" className="h2">Honorarios que puedes comparar.</h2>
            <p className="section-intro">Valores referenciales — se confirma tras la primera reunión según complejidad y jurisdicción. Gastos de receptor/notaría no incluidos.</p>
            <p className="honor-nota">Si no hay caso, no cobramos más que la primera reunión. Lo decimos por escrito.</p>
          </div>
          <div className="honor-right">
            <div className="tabla" role="table" aria-label="Tabla de honorarios">
              {rows.map((r, i) => (
                <div key={i} className="tabla-row" role="row">
                  <div className="tabla-left" role="cell">
                    <span className="tabla-label">{r.left}</span>
                    {r.small && <span className="tabla-small">{r.small}</span>}
                  </div>
                  <span className="tabla-price" role="cell">{r.price}</span>
                </div>
              ))}
            </div>
            <p className="honor-micro">¿No cachai qué fila es la tuya? Reserva la primera reunión y te decimos en qué tramo caes.</p>
            <a href="#reserva" className="btn-ghost">Pedir presupuesto por escrito</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== #respaldo ====== */
function SectionRespaldo() {
  const [imgFail, setImgFail] = useState(false);
  return (
    <section id="respaldo-abogado-b-oscuro-premium" className="section-respaldo" aria-labelledby="respaldo-h2">
      <div className="container">
        <div className="grid">
          <div className="respaldo-left">
            <p className="section-num">04</p>
            <h2 id="respaldo-h2" className="h2">Respaldo que puedes verificar.</h2>
            <div className="respaldo-datos">
              <div className="dato">
                <p className="dato-label">RUT ESTUDIO</p>
                <p className="dato-value">76.***.***-K · Valparaíso — giro asesoría jurídica (visible en SII)</p>
              </div>
              <div className="dato">
                <p className="dato-label">AÑOS</p>
                <p className="dato-value">Desde 2011 · 14 años en Valparaíso</p>
              </div>
              <div className="dato">
                <p className="dato-label">REGISTRO</p>
                <p className="dato-value">Abogados habilitados Corte de Apelaciones de Valparaíso — título verificable</p>
              </div>
              <div className="dato">
                <p className="dato-label">MATERIAS REALES</p>
                <p className="dato-value">6 materias (las de arriba). No tomamos tributario ni marca registrada — derivamos</p>
              </div>
              <div className="dato">
                <p className="dato-label">FORMA DE COBRO</p>
                <p className="dato-value">Boleta electrónica · Transferencia · Cuotas sin interés interno hasta 6</p>
              </div>
              <div className="dato">
                <p className="dato-label">HORARIO</p>
                <p className="dato-value">Lun–vie 09:00–18:30 · Respuesta en 24h hábiles</p>
              </div>
            </div>
            <blockquote className="respaldo-quote">“Si tu caso no es nuestra materia, te lo decimos en la primera reunión. No ganamos por alargar causas.” — Dirección, Estudio Valparaíso</blockquote>
            <div className="respaldo-banda">
              <p>Causa RIT ... · Juzgado Letras Valparaíso · 2023-24 &nbsp;|&nbsp; RIT ... · Juzgado Familia Valparaíso · 2024 &nbsp;|&nbsp; RIT ... · JPL Valparaíso · 2023</p>
              <span>Referencias anonimizadas — mostramos RIT y tribunal al reservar.</span>
            </div>
          </div>
          <div className="respaldo-right">
            {!imgFail ? (
              <img
                src="/media/valparaiso-interior-4x3.png"
                alt="Sala de reunión vacía noche, mesa nogal y vidrio reflejando luz cálida"
                className="respaldo-img"
                onError={() => {
                  console.warn("Falta media: valparaiso-interior-4x3.png");
                  setImgFail(true);
                }}
              />
            ) : (
              <div className="media-falta respaldo-img-falta" data-falta="valparaiso-interior-4x3.png">Falta media: valparaiso-interior-4x3.png</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== #urgencia ====== */
function SectionUrgencia() {
  return (
    <section id="urgencia-abogado-b-oscuro-premium" className="section-urgencia" aria-labelledby="urgencia-h2">
      <div className="container">
        <div className="grid">
          <div className="urg-left">
            <h2 id="urgencia-h2" className="urg-h2">¿Es urgente? Penal y familia no esperan.</h2>
            <p className="urg-p">Si hay audiencia mañana, detención o medida cautelar, escribe directo. Priorizamos esas primeras reuniones el mismo día.</p>
            <ul className="urg-bullets">
              <li>· Control de detención</li>
              <li>· Audiencia de formalización</li>
              <li>· Medida de protección</li>
              <li>· Alimentos provisorios</li>
            </ul>
          </div>
          <div className="urg-right">
            <p className="urg-label">GUARDIA URGENCIA</p>
            <a href="tel:+56912345678" className="urg-tel">+56 9 1234 5678</a>
            <p className="urg-sub">WhatsApp directo — responde abogado de turno, no bot. Lun–dom 08:00–22:00</p>
            <a href="https://wa.me/56912345678?text=Urgencia%20VALPARAISO" target="_blank" rel="noopener noreferrer" className="btn-urg">Escribir por WhatsApp ahora</a>
            <p className="urg-micro">Si llamas fuera de hora, deja audio de 30s con RIT/tribunal si existe.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== #reserva ====== */
type FormErrors = Record<string, string>;

function SectionReserva() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [materia, setMateria] = useState("");
  const [region, setRegion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [preferencia, setPreferencia] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!nombre.trim() || nombre.trim().length < 3) e.nombre = "Ingresa tu nombre y apellido (mín. 3 caracteres).";
    if (!telefono.trim()) e.telefono = "Ingresa tu teléfono.";
    else if (!/^\+56\s?9\s?\d{4}\s?\d{4}$/.test(telefono.trim())) e.telefono = "Formato: +56 9 1234 5678";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Correo no válido.";
    if (!materia) e.materia = "Selecciona una materia.";
    if (!mensaje.trim() || mensaje.trim().length < 10) e.mensaje = "Cuéntanos en 2 líneas qué pasó (mín. 10 caracteres).";
    if (mensaje.length > 280) e.mensaje = "Máximo 280 caracteres.";
    if (!preferencia) e.preferencia = "Elige una preferencia.";
    if (!acepto) e.acepto = "Debes aceptar ser contactado.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const data = { nombre, telefono, email, materia, region, mensaje, preferencia, fecha: new Date().toISOString() };
      try {
        localStorage.setItem("valparaiso-reserva-2025", JSON.stringify(data));
      } catch {}
      const subject = encodeURIComponent("Reserva VALPARAISO - " + materia + " - " + nombre);
      const body = encodeURIComponent(`Nombre: ${nombre}\nTel: ${telefono}\nEmail: ${email}\nMateria: ${materia}\nRegión/Juzgado: ${region}\nPreferencia: ${preferencia}\nMensaje: ${mensaje}`);
      window.location.href = `mailto:contacto@valparaiso-abogados.cl?subject=${subject}&body=${body}`;
    }, 900);
  };

  const [tileBibFail, setTileBibFail] = useState(false);
  const [tileSelloFail, setTileSelloFail] = useState(false);
  const [ogFail, setOgFail] = useState(false);

  return (
    <section id="reserva" className="section-reserva" aria-labelledby="reserva-h2">
      <div className="container">
        <p className="section-num">06</p>
        <h2 id="reserva-h2-abogado-b-oscuro-premium" className="h2">Reserva tu primera reunión.</h2>
        <p className="reserva-sub">45 min · $75.000 · presencial en Valparaíso o videollamada. Se abona si sigues.</p>

        <div className="grid reserva-grid">
          <div className="reserva-form-col">
            {success ? (
              <div className="reserva-success">
                <p className="success-title">Listo. Te escribimos en el día con hora y link de pago. Revisa tu WhatsApp.</p>
                <a
                  href={`https://wa.me/56912345678?text=${encodeURIComponent(`Hola VALPARAISO, quiero reservar primera reunión $75.000 — materia: ${materia || "___"}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Abrir WhatsApp
                </a>
                <button
                  type="button"
                  className="btn-ghost"
                  style={{ marginLeft: 12 }}
                  onClick={() => {
                    setSuccess(false);
                    setNombre(""); setTelefono(""); setEmail(""); setMateria(""); setRegion(""); setMensaje(""); setPreferencia(""); setAcepto(false);
                  }}
                >
                  Nueva reserva
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="form">
                <div className="field">
                  <label htmlFor="rv-nombre">NOMBRE Y APELLIDO *</label>
                  <input id="rv-nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre y apellido" required />
                  {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                </div>

                <div className="field">
                  <label htmlFor="rv-telefono">TELÉFONO / WHATSAPP *</label>
                  <input id="rv-telefono" type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="+56 9 1234 5678" required pattern="\+56 9 [0-9 ]+" />
                  {errors.telefono && <span className="field-error">{errors.telefono}</span>}
                </div>

                <div className="field">
                  <label htmlFor="rv-email">EMAIL</label>
                  <input id="rv-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.cl" />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="field">
                  <label htmlFor="rv-materia">MATERIA *</label>
                  <select id="rv-materia" value={materia} onChange={(e) => setMateria(e.target.value)} required>
                    <option value="">Selecciona</option>
                    <option value="Laboral">Laboral</option>
                    <option value="Familia">Familia</option>
                    <option value="Civil">Civil</option>
                    <option value="Penal">Penal</option>
                    <option value="Policía Local">Policía Local</option>
                    <option value="Administrativo">Administrativo</option>
                    <option value="No sé">No sé</option>
                  </select>
                  {errors.materia && <span className="field-error">{errors.materia}</span>}
                </div>

                <div className="field">
                  <label htmlFor="rv-region">REGIÓN / JUZGADO</label>
                  <input id="rv-region" type="text" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Valparaíso / Santiago / Otro" />
                </div>

                <div className="field">
                  <label htmlFor="rv-mensaje">CUÉNTANOS EN 2 LÍNEAS *</label>
                  <textarea id="rv-mensaje" rows={3} maxLength={280} value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Qué pasó, cuándo y qué buscas. Sé breve." required />
                  <div className="field-foot">
                    <span className="field-error">{errors.mensaje ?? ""}</span>
                    <span className="char-count">{mensaje.length}/280</span>
                  </div>
                  {errors.preferencia && <span className="field-error">{errors.preferencia}</span>}
                </div>

                <fieldset className="field fieldset">
                  <legend>¿CÓMO PREFIERES?</legend>
                  <label className="radio"><input type="radio" name="pref" value="Presencial Valparaíso" checked={preferencia === "Presencial Valparaíso"} onChange={(e) => setPreferencia(e.target.value)} /> Presencial Valparaíso</label>
                  <label className="radio"><input type="radio" name="pref" value="Videollamada" checked={preferencia === "Videollamada"} onChange={(e) => setPreferencia(e.target.value)} /> Videollamada</label>
                  <label className="radio"><input type="radio" name="pref" value="Me da igual" checked={preferencia === "Me da igual"} onChange={(e) => setPreferencia(e.target.value)} /> Me da igual</label>
                  {errors.preferencia && <span className="field-error">{errors.preferencia}</span>}
                </fieldset>

                <label className="checkbox">
                  <input type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} required />
                  <span>Acepto ser contactado por WhatsApp/correo con mi presupuesto *</span>
                </label>
                {errors.acepto && <span className="field-error" style={{ marginTop: 4, display: "block" }}>{errors.acepto}</span>}

                <button type="submit" className="btn-primary form-submit" disabled={loading}>
                  {loading ? "Enviando…" : "Reservar — te respondemos hoy"}
                </button>
              </form>
            )}
          </div>

          <div className="reserva-info-col">
            <div className="info-block">
              <p className="info-label">OFICINA</p>
              <p className="info-value">Almirante Montt 320, Cerro Alegre, Valparaíso</p>
              <p className="info-muted">Lun–vie 09:00–18:30 · Con cita</p>
              <a href="https://maps.google.com/?q=Almirante+Montt+320+Cerro+Alegre+Valparaiso" target="_blank" rel="noopener noreferrer" className="info-link">Abrir en Maps</a>
            </div>
            <div className="info-block">
              <p className="info-label">PAGO</p>
              <p className="info-value small">Transferencia / Webpay / 3 cuotas sin interés · Boleta electrónica</p>
            </div>

            <div className="mosaico">
              {!tileBibFail ? (
                <img src="/media/valparaiso-tile-biblioteca-1x1.png" alt="Lomos biblioteca nogal macro" className="mosaico-img" onError={() => { console.warn("Falta media: valparaiso-tile-biblioteca-1x1.png"); setTileBibFail(true); }} />
              ) : (
                <div className="media-falta mosaico-falta" data-falta="valparaiso-tile-biblioteca-1x1.png">Falta media: valparaiso-tile-biblioteca-1x1.png</div>
              )}
              {!tileSelloFail ? (
                <img src="/media/valparaiso-tile-sello-1x1.png" alt="Sello lacre bronce sobre papel algodón" className="mosaico-img" onError={() => { console.warn("Falta media: valparaiso-tile-sello-1x1.png"); setTileSelloFail(true); }} />
              ) : (
                <div className="media-falta mosaico-falta" data-falta="valparaiso-tile-sello-1x1.png">Falta media: valparaiso-tile-sello-1x1.png</div>
              )}
            </div>

            <div className="mapa" style={!ogFail ? { backgroundImage: "url(/media/valparaiso-og-16x9.png)" } : undefined}>
              {/* check og existence via img error: use hidden img */}
              {!ogFail && (
                <img
                  src="/media/valparaiso-og-16x9.png"
                  alt=""
                  aria-hidden="true"
                  style={{ position: "absolute", width: 0, height: 0, opacity: 0, pointerEvents: "none" }}
                  onError={() => {
                    console.warn("Falta media: valparaiso-og-16x9.png");
                    setOgFail(true);
                  }}
                />
              )}
              {ogFail && <div className="media-falta mapa-falta" data-falta="valparaiso-og-16x9.png" style={{ border: "none", background: "transparent" }}>Falta media: valparaiso-og-16x9.png</div>}
              {!ogFail && <span className="mapa-label">Mapa Valparaíso — Almirante Montt (sin API, imagen estática valparaiso-og-16x9 como fondo desenfocado)</span>}
            </div>
          </div>
        </div>

        <footer className="site-footer" aria-label="Pie de página">
          <div className="footer-grid">
            <div className="footer-col">
              <p className="footer-logo">VALPARAISO</p>
              <p className="footer-copy">Estudio Valparaíso © 2025 · Valparaíso, Chile</p>
            </div>
            <div className="footer-col footer-links">
              <a href="#">Privacidad</a>
              <span> · </span>
              <a href="#">Términos</a>
            </div>
            <div className="footer-col footer-contact">
              <p>RUT 76.***.***-K · contacto@valparaiso-abogados.cl · +56 9 1234 5678</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionMaterias />
        <SectionComoPartimos />
        <SectionHonorarios />
        <SectionRespaldo />
        <SectionUrgencia />
        <SectionReserva />
      </main>
    </>
  );
}
