import { useState, useEffect } from "react";

const base = import.meta.env.BASE_URL;
const mediaBase = `${base}media/`;

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <a href="#indice-abogado-b-azul-cian" className="logo" aria-label="ARRIETA — Inicio">
          ARRIETA
        </a>

        <nav className="header-nav" aria-label="Principal">
          <a href="#materias-abogado-b-azul-cian">Materias</a>
          <a href="#como-partimos-abogado-b-azul-cian">Cómo partimos</a>
          <a href="#honorarios-abogado-b-azul-cian">Honorarios</a>
          <a href="#respaldo-abogado-b-azul-cian">Respaldo</a>
          <a href="#urgencia-abogado-b-azul-cian">Urgencia</a>
          <a href="#reserva">Reserva</a>
        </nav>

        <div className="header-right">
          <a href="tel:+56912345678" className="header-phone">
            2 2924 1840
          </a>
          <a href="#reserva" className="header-cta">
            Agenda
          </a>
        </div>

        <button
          className="hamburger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav id="mobile-nav-abogado-b-azul-cian" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Móvil">
        <a href="#materias-abogado-b-azul-cian" onClick={() => setOpen(false)}>
          Materias
        </a>
        <a href="#como-partimos-abogado-b-azul-cian" onClick={() => setOpen(false)}>
          Cómo partimos
        </a>
        <a href="#honorarios-abogado-b-azul-cian" onClick={() => setOpen(false)}>
          Honorarios
        </a>
        <a href="#respaldo-abogado-b-azul-cian" onClick={() => setOpen(false)}>
          Respaldo
        </a>
        <a href="#urgencia-abogado-b-azul-cian" onClick={() => setOpen(false)}>
          Urgencia
        </a>
        <a href="#reserva" onClick={() => setOpen(false)}>
          Reserva
        </a>
        <a href="tel:+56912345678" className="mobile-phone" onClick={() => setOpen(false)}>
          2 2924 1840
        </a>
      </nav>
    </header>
  );
}

function HeroMedia() {
  const poster = `${mediaBase}arrieta-hero-16x9.png`;
  const videoSrc = `${mediaBase}arrieta-hero-loop.mp4`;
  const img16x9 = `${mediaBase}arrieta-hero-16x9.png`;
  const img9x16 = `${mediaBase}arrieta-hero-9x16.png`;

  const [videoFailed, setVideoFailed] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const [mobileImgFailed, setMobileImgFailed] = useState(false);

  useEffect(() => {
    if (imgFailed && mobileImgFailed) {
      // eslint-disable-next-line no-console
      console.warn("media pendiente: arrieta-hero-16x9.png");
    }
    if (mobileImgFailed) {
      // eslint-disable-next-line no-console
      console.warn("media pendiente: arrieta-hero-9x16.png");
    }
    if (videoFailed) {
      // eslint-disable-next-line no-console
      console.warn("media pendiente: arrieta-hero-loop.mp4 (fallback a imagen)");
    }
  }, [imgFailed, mobileImgFailed, videoFailed]);

  if (imgFailed && mobileImgFailed) {
    return (
      <div className="hero-media">
        <div className="media-falta" data-falta="arrieta-hero-16x9.png">
          media pendiente: arrieta-hero-16x9.png
        </div>
      </div>
    );
  }

  return (
    <div className="hero-media" aria-label="Arrieta hero">
      {!videoFailed ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <picture>
          <source media="(max-width: 900px)" srcSet={mobileImgFailed ? img16x9 : img9x16} />
          <img
            src={img16x9}
            alt="Torre de expedientes cian-petróleo apilados como fachada acristalada, cinta blanca y sello seco sobre vidrio templado, luz norte fría"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
            decoding="async"
            onError={() => setImgFailed(true)}
          />
        </picture>
      )}

      {videoFailed ? null : (
        <span style={{ display: "none" }} aria-hidden="true">
          <img src={img9x16} alt="" onError={() => setMobileImgFailed(true)} />
          <img src={img16x9} alt="" onError={() => setImgFailed(true)} />
        </span>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="indice-abogado-b-azul-cian" className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
        <p className="hero-kicker">ARRIETA · ESTUDIO JURÍDICO · SANTIAGO · DESDE 2014</p>
        <h1 id="hero-title-abogado-b-azul-cian" className="hero-title">
          Defensa laboral y familia con honorario claro.
        </h1>
        <p className="hero-lead">
          Primera reunión de 45 minutos donde revisamos tu caso, plazos y papeles. Te decimos si conviene avanzar y cuánto cuesta, por
          escrito y sin letra chica.
        </p>
        <div className="hero-ctas">
          <a href="#reserva" className="btn-primary">
            Agenda tu primera reunión
          </a>
          <a href="#honorarios-abogado-b-azul-cian" className="btn-ghost">
            Ver honorarios desde $70.000
          </a>
        </div>
        <p className="hero-micro">Respuesta en el día hábil. Si no tomamos tu materia, te derivamos sin costo.</p>
        <nav className="hero-index" aria-label="Índice">
          <a href="#materias-abogado-b-azul-cian">
            <span className="hero-index-num">01</span>
            <span className="hero-index-label">Materias</span>
          </a>
          <a href="#como-partimos-abogado-b-azul-cian">
            <span className="hero-index-num">02</span>
            <span className="hero-index-label">Cómo partimos</span>
          </a>
          <a href="#honorarios-abogado-b-azul-cian">
            <span className="hero-index-num">03</span>
            <span className="hero-index-label">Honorarios</span>
          </a>
          <a href="#respaldo-abogado-b-azul-cian">
            <span className="hero-index-num">04</span>
            <span className="hero-index-label">Respaldo</span>
          </a>
          <a href="#urgencia-abogado-b-azul-cian">
            <span className="hero-index-num">05</span>
            <span className="hero-index-label">Urgencia</span>
          </a>
          <a href="#reserva">
            <span className="hero-index-num">06</span>
            <span className="hero-index-label">Reserva</span>
          </a>
        </nav>
      </div>

      <HeroMedia />
    </section>
  );
}

function Materias() {
  return (
    <section id="materias-abogado-b-azul-cian" className="section materias" aria-labelledby="materias-title">
      <div className="materias-grid">
        <div className="materias-sticky">
          <div className="section-kicker">
            <span className="section-num">01</span>
            <span className="section-line" aria-hidden="true" />
          </div>
          <h2 id="materias-title-abogado-b-azul-cian" className="section-h2">
            Materias que tomamos. Pocas, bien llevadas.
          </h2>
          <p className="section-intro">No tomamos todo. Si no es nuestra materia, te lo decimos en la primera reunión y te derivamos. Sin vueltas.</p>
          <span className="chip">Atención en Santiago y RM · Videollamada a todo Chile</span>
        </div>
        <div className="materias-cards">
          <article className="materia-card">
            <span className="materia-num">01</span>
            <h3>Despido y tutela</h3>
            <p className="materia-label">LABORAL</p>
            <ul>
              <li>Despido injustificado</li>
              <li>Autodespido</li>
              <li>Tutela por vulneración</li>
            </ul>
            <p className="materia-micro">Juzgado Laboral de Santiago</p>
          </article>
          <article className="materia-card">
            <span className="materia-num">02</span>
            <h3>Pensión, relación directa y divorcio</h3>
            <p className="materia-label">FAMILIA</p>
            <ul>
              <li>Pensión de alimentos</li>
              <li>Cuidado personal</li>
              <li>Divorcio unilateral / bilateral</li>
            </ul>
            <p className="materia-micro">Juzgado de Familia</p>
          </article>
          <article className="materia-card">
            <span className="materia-num">03</span>
            <h3>Incumplimientos y herencias</h3>
            <p className="materia-label">CIVIL</p>
            <ul>
              <li>Juicio ejecutivo</li>
              <li>Indemnización</li>
              <li>Posesión efectiva</li>
            </ul>
            <p className="materia-micro">Juzgado Civil de Santiago</p>
          </article>
          <article className="materia-card">
            <span className="materia-num">04</span>
            <h3>Defensa y querellas</h3>
            <p className="materia-label">PENAL</p>
            <ul>
              <li>Delitos económicos</li>
              <li>Lesiones</li>
              <li>Querella particular</li>
            </ul>
            <p className="materia-micro">Juzgado de Garantía</p>
          </article>
          <article className="materia-card">
            <span className="materia-num">05</span>
            <h3>Choques, multas y apelaciones</h3>
            <p className="materia-label">POLICÍA LOCAL</p>
            <ul>
              <li>Colisiones</li>
              <li>TAG</li>
              <li>Infracciones municipales</li>
            </ul>
            <p className="materia-micro">Juzgado de Policía Local</p>
          </article>
          <article className="materia-card">
            <span className="materia-num">06</span>
            <h3>Reclamos y sumarios</h3>
            <p className="materia-label">ADMINISTRATIVO</p>
            <ul>
              <li>Reclamos municipales</li>
              <li>Sumarios</li>
              <li>Recursos de protección acotados</li>
            </ul>
            <p className="materia-micro">Corte de Apelaciones</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ComoPartimos() {
  return (
    <section id="como-partimos-abogado-b-azul-cian" className="section como" aria-labelledby="como-title">
      <div className="como-inner">
        <h2 id="como-title" className="section-h2 como-h2">
          Cómo partimos: en una reunión sabes si seguimos.
        </h2>
        <p className="section-intro como-sub">Sin diagnóstico no hay presupuesto. La primera reunión es la que ordena todo. Todo queda por escrito.</p>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          <div className="paso">
            <span className="paso-num">01</span>
            <div className="paso-body">
              <h3 className="paso-title">01 — Primera reunión</h3>
              <p className="paso-text">
                Revisamos hechos, plazos y papeles. Te decimos en simple si hay caso, qué vía conviene y qué riesgo tiene. Si no conviene
                demandar, te lo decimos ahí.
              </p>
              <ul className="paso-bullets">
                <li>Presencial en Santiago centro o videollamada</li>
                <li>Trae: contrato o finiquito, demanda previa si existe, pantallazos ordenados por fecha</li>
              </ul>
              <span className="chip chip-accent">Valor: $70.000 — se abona al honorario si sigues con nosotros</span>
            </div>
          </div>

          <div className="paso-separator" aria-hidden="true" />

          <div className="paso">
            <span className="paso-num">02</span>
            <div className="paso-body">
              <h3 className="paso-title">02 — Propuesta con honorario cerrado</h3>
              <p className="paso-text">Te enviamos por escrito: estrategia, etapas, honorario fijo o por hito y gastos. Sin sorpresas. Firmas solo si te acomoda.</p>
              <ul className="paso-bullets">
                <li>Honorario fijo, cuota mensual o % a resultado según materia</li>
                <li>Gastos de receptor y notaría separados y cotizados</li>
              </ul>
            </div>
          </div>

          <div className="paso-separator" aria-hidden="true" />

          <div className="paso">
            <span className="paso-num">03</span>
            <div className="paso-body">
              <h3 className="paso-title">03 — Seguimiento con bitácora</h3>
              <p className="paso-text">Avance por correo y WhatsApp con copia de cada escrito. Sabes en qué etapa estás y qué viene.</p>
              <ul className="paso-bullets">
                <li>Bitácora quincenal</li>
                <li>Copia de escritos</li>
                <li>Respuesta en 24 h hábiles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="como-cta">
          <a href="#reserva" className="btn-ghost">
            Reserva tu primera reunión — $70.000
          </a>
        </div>
      </div>
    </section>
  );
}

function Honorarios() {
  return (
    <section id="honorarios-abogado-b-azul-cian" className="section honorarios" aria-labelledby="honorarios-title">
      <div className="honorarios-grid">
        <div className="honorarios-left">
          <div className="section-kicker">
            <span className="section-num">03</span>
            <span className="section-line" aria-hidden="true" />
          </div>
          <h2 id="honorarios-title-abogado-b-azul-cian" className="section-h2">
            Honorarios que puedes comparar.
          </h2>
          <p className="section-intro">Valores referenciales — se confirman tras la primera reunión según complejidad y jurisdicción. Gastos de receptor/notaría no incluidos.</p>
          <p className="honorarios-nota">Si no hay caso, no cobramos más que la primera reunión. Te lo dejamos por escrito. Valores referenciales; se confirma tras diagnóstico.</p>
        </div>
        <div className="honorarios-right">
          <div className="tabla-carta" role="table" aria-label="Honorarios">
            <div className="tabla-header" role="row">
              <span role="columnheader">MATERIA</span>
              <span role="columnheader">QUÉ INCLUYE</span>
              <span role="columnheader">DESDE</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Consulta y diagnóstico 45 min</span>
              <span className="tabla-incluye">Revisión de antecedentes y propuesta por escrito</span>
              <span className="tabla-precio">Desde $70.000</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Despido injustificado (laboral)</span>
              <span className="tabla-incluye">Demanda + comparendo + 1 audiencia</span>
              <span className="tabla-precio">Desde $650.000 + 15% a resultado</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Tutela laboral</span>
              <span className="tabla-incluye">Medida y demanda completa</span>
              <span className="tabla-precio">Desde $850.000</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Divorcio mutuo acuerdo</span>
              <span className="tabla-incluye">Acuerdo + tramitación hasta sentencia</span>
              <span className="tabla-precio">Desde $380.000</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Divorcio unilateral</span>
              <span className="tabla-incluye">Demanda + notificación + audiencia</span>
              <span className="tabla-precio">Desde $650.000</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Pensión de alimentos (demanda o aumento)</span>
              <span className="tabla-incluye">Mediación frustrada + demanda</span>
              <span className="tabla-precio">Desde $450.000</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Juicio ejecutivo / cobranza</span>
              <span className="tabla-incluye">Demanda + embargo + remate</span>
              <span className="tabla-precio">Desde $700.000 + 10% recuperado</span>
            </div>
            <div className="tabla-row" role="row">
              <span className="tabla-materia">Querella/defensa penal acotada</span>
              <span className="tabla-incluye">Querella o defensa en J. Garantía</span>
              <span className="tabla-precio">Desde $900.000</span>
            </div>
            <div className="tabla-footer">Medios de pago: transferencia, Webpay, 3 cuotas sin interés. Factura exenta.</div>
          </div>
          <div className="honorarios-ctas">
            <a href="#reserva" className="btn-primary">
              Agenda y congela este valor
            </a>
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Habla por WhatsApp
            </a>
          </div>
          <p className="honorarios-ref">Valores referenciales; se confirma tras diagnóstico</p>
        </div>
      </div>
    </section>
  );
}

function Respaldo() {
  const [imgErr, setImgErr] = useState(false);
  const src = `${mediaBase}arrieta-interior-16x9.png`;
  return (
    <section id="respaldo-abogado-b-azul-cian" className="section respaldo" aria-labelledby="respaldo-title">
      <div className="respaldo-grid">
        <div className="respaldo-left">
          <div className="section-kicker">
            <span className="section-num">04</span>
            <span className="section-line" aria-hidden="true" />
          </div>
          <h2 id="respaldo-title" className="section-h2">
            Respaldo que puedes verificar.
          </h2>
          <p className="section-intro">No mostramos caras ni testimonios inventados. Mostramos datos duros que puedes chequear en el Poder Judicial.</p>
          <div className="metricas">
            <div className="metrica">
              <span className="metrica-valor">11 años</span>
              <span className="metrica-label">EJERCIENDO EN SANTIAGO</span>
            </div>
            <div className="metrica">
              <span className="metrica-valor">650+ causas</span>
              <span className="metrica-label">LABORAL Y FAMILIA TRAMITADAS</span>
            </div>
            <div className="metrica metrica-wide">
              <span className="metrica-valor small">Poder Judicial</span>
              <span className="metrica-label">TODAS LAS CAUSAS CONSULTABLES CON RUC</span>
            </div>
          </div>
          <ul className="respaldo-lista">
            <li>Registro en Corte de Apelaciones de Santiago</li>
            <li>Oficina en Santiago centro</li>
            <li>Atención presencial y videollamada</li>
            <li>Bitácora quincenal garantizada</li>
          </ul>
          <p className="respaldo-micro">No publicamos RUT ni RUC de clientes por confidencialidad. En reunión te mostramos causas anonimizadas.</p>
        </div>
        <div className="respaldo-media">
          {!imgErr ? (
            <img src={src} alt="Sala de reunión vacía con mesa de vidrio templado, expediente cian al centro, luz norte fría" loading="lazy" decoding="async" onError={() => setImgErr(true)} />
          ) : (
            <div className="media-falta" data-falta="arrieta-interior-16x9.png">
              media pendiente: arrieta-interior-16x9.png
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Urgencia() {
  return (
    <section id="urgencia-abogado-b-azul-cian" className="section urgencia" aria-labelledby="urgencia-title">
      <div className="urgencia-grid">
        <div className="urgencia-text">
          <div className="section-kicker urgencia-kicker">
            <span className="section-num" style={{ color: "var(--accent-2)" }}>
              05
            </span>
            <span className="section-line" style={{ background: "var(--accent-2)" }} aria-hidden="true" />
          </div>
          <h2 id="urgencia-title" className="urgencia-h2">
            ¿Es urgente? Escríbenos hoy.
          </h2>
          <p className="urgencia-p">Si tienes plazo corriendo (3 días hábiles en tutela, 60 días en despido, notificación de demanda), no esperes. Respuesta el mismo día hábil.</p>
          <p className="urgencia-nota">Si es fuera de horario, deja audio y te respondemos a primera hora.</p>
        </div>
        <div className="urgencia-caja">
          <a href="tel:+56912345678" className="urgencia-tel">
            2 2924 1840
          </a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="urgencia-wa">
            WhatsApp +56 9 1234 5678
          </a>
          <p className="urgencia-horario">Lun–vie 9:00–18:30 · Sáb 10:00–13:00</p>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="btn-primary urgencia-btn">
            Escribir por WhatsApp ahora
          </a>
        </div>
      </div>
    </section>
  );
}

type FormErrors = Partial<Record<string, string>>;

function Reserva() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [materia, setMateria] = useState("");
  const [cuentanos, setCuentanos] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [proofErr, setProofErr] = useState(false);
  const [t1Err, setT1Err] = useState(false);
  const [t2Err, setT2Err] = useState(false);
  const [t3Err, setT3Err] = useState(false);
  const [t4Err, setT4Err] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre y apellido.";
    const digits = telefono.replace(/\D/g, "");
    if (!telefono.trim()) e.telefono = "Ingresa tu teléfono.";
    else if (!((digits.length === 9 && digits.startsWith("9")) || (digits.length === 11 && digits.startsWith("56") && digits[2] === "9") || (digits.length === 8))) {
      e.telefono = "Formato +56 o 9 dígitos. Ej: +56 9 1234 5678";
    }
    if (!materia) e.materia = "Elige una materia.";
    if (!cuentanos.trim()) e.cuentanos = "Cuéntanos en 2 líneas tu caso.";
    if (!modalidad) e.modalidad = "Elige una modalidad.";
    if (correo.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) e.correo = "Correo no válido.";
    if (fecha) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const d = new Date(fecha + "T00:00:00");
      if (d < today) e.fecha = "La fecha no puede ser pasada.";
    }
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    setSuccess("");
    setTimeout(() => {
      const payload = { nombre, telefono, correo, materia, cuentanos, modalidad, fecha, acepto, at: new Date().toISOString() };
      try {
        localStorage.setItem("arrieta-lead", JSON.stringify(payload));
      } catch {
        // ignore
      }
      const resumen = cuentanos.slice(0, 80);
      const waText = `Hola Arrieta, soy ${nombre} — materia ${materia} — ${resumen}`;
      const waUrl = `https://wa.me/56912345678?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");
      window.location.href = `mailto:contacto@arrieta.cl?subject=${encodeURIComponent(`Reserva ${materia}`)}&body=${encodeURIComponent(`${nombre} - ${telefono} - ${materia}\n${cuentanos}`)}`;
      setLoading(false);
      setSuccess("¡Listo! Te escribimos en el día para confirmar hora. Revisa tu WhatsApp.");
      setNombre("");
      setTelefono("");
      setCorreo("");
      setMateria("");
      setCuentanos("");
      setModalidad("");
      setFecha("");
      setAcepto(false);
      setErrors({});
    }, 1200);
  }

  const proofSrc = `${mediaBase}arrieta-proof-16x9.png`;
  const t1 = `${mediaBase}arrieta-tile-01-1x1.png`;
  const t2 = `${mediaBase}arrieta-tile-02-1x1.png`;
  const t3 = `${mediaBase}arrieta-tile-03-3x4.png`;
  const t4 = `${mediaBase}arrieta-tile-04-3x4.png`;

  return (
    <section id="reserva" className="section reserva" aria-labelledby="reserva-title">
      <div className="reserva-grid">
        <div className="reserva-form-col">
          <h2 id="reserva-title" className="section-h2">
            Reserva tu primera reunión.
          </h2>
          <p className="section-intro">45 minutos, $70.000 abonables. Elige presencial o videollamada.</p>
          <form className="form-card" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="f-nombre">Nombre y apellido *</label>
              <input id="f-nombre-abogado-b-azul-cian" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre y apellido" />
              {errors.nombre && <span className="field-error">{errors.nombre}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-telefono">Teléfono *</label>
              <input id="f-telefono-abogado-b-azul-cian" type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="+56 9 1234 5678" />
              {errors.telefono && <span className="field-error">{errors.telefono}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-correo">Correo</label>
              <input id="f-correo" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="correo@ejemplo.cl" />
              {errors.correo && <span className="field-error">{errors.correo}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-materia">Materia *</label>
              <select id="f-materia-abogado-b-azul-cian" value={materia} onChange={(e) => setMateria(e.target.value)}>
                <option value="">Selecciona</option>
                <option value="Laboral">Laboral</option>
                <option value="Familia">Familia</option>
                <option value="Civil">Civil</option>
                <option value="Penal">Penal</option>
                <option value="Policía Local">Policía Local</option>
                <option value="Administrativo">Administrativo</option>
                <option value="No estoy seguro">No estoy seguro</option>
              </select>
              {errors.materia && <span className="field-error">{errors.materia}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-cuentanos">Cuéntanos en 2 líneas *</label>
              <textarea id="f-cuentanos" rows={3} value={cuentanos} onChange={(e) => setCuentanos(e.target.value)} placeholder="Ej: me despidieron el 12/08 sin carta, tengo finiquito" />
              {errors.cuentanos && <span className="field-error">{errors.cuentanos}</span>}
            </div>
            <fieldset className="field fieldset">
              <legend>Modalidad *</legend>
              <label className="radio">
                <input type="radio" name="modalidad" value="Presencial Santiago" checked={modalidad === "Presencial Santiago"} onChange={(e) => setModalidad(e.target.value)} />
                Presencial Santiago
              </label>
              <label className="radio">
                <input type="radio" name="modalidad" value="Videollamada" checked={modalidad === "Videollamada"} onChange={(e) => setModalidad(e.target.value)} />
                Videollamada
              </label>
              {errors.modalidad && <span className="field-error">{errors.modalidad}</span>}
            </fieldset>
            <div className="field">
              <label htmlFor="f-fecha">Fecha tentativa</label>
              <input id="f-fecha-abogado-b-azul-cian" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
              {errors.fecha && <span className="field-error">{errors.fecha}</span>}
            </div>
            <label className="checkbox">
              <input type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} />
              Acepto ser contactado por teléfono/WhatsApp para coordinar la reunión.
            </label>
            <button type="submit" className="btn-primary form-submit" disabled={loading}>
              {loading ? "Enviando…" : "Reservar — $70.000"}
            </button>
            {success && <p className="form-success">{success}</p>}
            <p className="form-micro">No compartimos tus datos. Factura exenta disponible.</p>
          </form>
        </div>
        <div className="reserva-data-col">
          <p className="reserva-kicker">OFICINA</p>
          <p className="reserva-dir">Huérfanos 835, of. 402 — Santiago centro (Metro U. de Chile)</p>
          <p className="reserva-horario">Lun–vie 9:00–18:30</p>
          <div className="reserva-proof">
            {!proofErr ? (
              <img src={proofSrc} alt="Fachada vidriada corporativa reflejando cielo pálido, vereda vacía" loading="lazy" decoding="async" onError={() => setProofErr(true)} />
            ) : (
              <div className="media-falta" data-falta="arrieta-proof-16x9.png">
                media pendiente: arrieta-proof-16x9.png
              </div>
            )}
          </div>
          <div className="tiles">
            <div className="tile">
              {!t1Err ? (
                <img src={t1} alt="" loading="lazy" decoding="async" onError={() => setT1Err(true)} />
              ) : (
                <div className="media-falta" data-falta="arrieta-tile-01-1x1.png">media pendiente: arrieta-tile-01-1x1.png</div>
              )}
            </div>
            <div className="tile">
              {!t2Err ? (
                <img src={t2} alt="" loading="lazy" decoding="async" onError={() => setT2Err(true)} />
              ) : (
                <div className="media-falta" data-falta="arrieta-tile-02-1x1.png">media pendiente: arrieta-tile-02-1x1.png</div>
              )}
            </div>
            <div className="tile tile-tall">
              {!t3Err ? (
                <img src={t3} alt="" loading="lazy" decoding="async" onError={() => setT3Err(true)} />
              ) : (
                <div className="media-falta" data-falta="arrieta-tile-03-3x4.png">media pendiente: arrieta-tile-03-3x4.png</div>
              )}
            </div>
            <div className="tile tile-tall">
              {!t4Err ? (
                <img src={t4} alt="" loading="lazy" decoding="async" onError={() => setT4Err(true)} />
              ) : (
                <div className="media-falta" data-falta="arrieta-tile-04-3x4.png">media pendiente: arrieta-tile-04-3x4.png</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">ARRIETA</span>
          <span className="footer-tag">Estudio jurídico laboral y familia · Santiago · 11 años</span>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#materias-abogado-b-azul-cian">Materias</a>
          <a href="#como-partimos-abogado-b-azul-cian">Cómo partimos</a>
          <a href="#honorarios-abogado-b-azul-cian">Honorarios</a>
          <a href="#respaldo-abogado-b-azul-cian">Respaldo</a>
          <a href="tel:+56912345678">2 2924 1840</a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
      <p className="footer-copy">© 2026 Arrieta. Información referencial, no constituye asesoría hasta la primera reunión.</p>
    </footer>
  );
}

function StickyBottom() {
  return (
    <div className="sticky-bottom" role="complementary" aria-label="Contacto rápido">
      <a href="tel:+56912345678">Llamar</a>
      <a href="#reserva">Reserva $70.000</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Materias />
        <ComoPartimos />
        <Honorarios />
        <Respaldo />
        <Urgencia />
        <Reserva />
      </main>
      <Footer />
      <StickyBottom />
    </>
  );
}
