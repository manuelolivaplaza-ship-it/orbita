import { useEffect, useState } from "react";

function HeroMedia() {
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    fetch("/media/rivera-hero-loop.mp4", { method: "HEAD" })
      .then((r) => {
        if (r.ok) setUseVideo(true);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (imgError && !useVideo) {
      console.warn("[RIVERA] Falta media: rivera-hero-16x9.png y rivera-hero-9x16.png en public/media/");
    }
    if (useVideo && videoError && imgError) {
      console.warn("[RIVERA] Falta media: rivera-hero-loop.mp4 y rivera-hero-16x9.png");
    }
  }, [imgError, videoError, useVideo]);

  const showFallback = imgError && (!useVideo || videoError);

  if (showFallback) {
    return (
      <div className="media-falta" data-falta="rivera-hero-16x9.png">
        Falta media: rivera-hero-16x9.png (agrega public/media/rivera-hero-16x9.png y rivera-hero-9x16.png)
      </div>
    );
  }

  if (useVideo && !videoError) {
    return (
      <>
        <video autoPlay muted loop playsInline poster="/media/rivera-hero-16x9.png" onError={() => setVideoError(true)} aria-hidden="true">
          <source src="/media/rivera-hero-loop.mp4" type="video/mp4" />
        </video>
        <img src="/media/rivera-hero-16x9.png" alt="" aria-hidden="true" onError={() => setImgError(true)} style={{ display: "none" }} />
      </>
    );
  }

  return (
    <picture>
      <source media="(max-width: 720px)" srcSet="/media/rivera-hero-9x16.png" />
      <img
        src="/media/rivera-hero-16x9.png"
        alt="Biblioteca nocturna del bufete — estantería de roble oscuro a contraluz, lámpara banker verde encendida recorta el lomo dorado de un Código y expediente cerrado con cinta negra mate sobre cuero"
        onError={() => setImgError(true)}
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}

function InteriorMedia({ ratio, caption, alt }: { ratio: "4-3" | "16-9"; caption: string; alt: string }) {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn("[RIVERA] Falta media: rivera-interior-16x9.png");
  }, [err]);
  if (err) {
    return <div className="media-falta" data-falta="rivera-interior-16x9.png">Falta media: rivera-interior-16x9.png</div>;
  }
  return (
    <figure className={`media-frame media-frame--${ratio}`}>
      <img src="/media/rivera-interior-16x9.png" alt={alt} onError={() => setErr(true)} loading="lazy" decoding="async" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function ProofMedia() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn("[RIVERA] Falta media: rivera-proof-16x9.png");
  }, [err]);
  if (err) return <div className="media-falta" data-falta="rivera-proof-16x9.png">Falta media: rivera-proof-16x9.png</div>;
  return (
    <figure className="media-frame media-frame--16-9">
      <img src="/media/rivera-proof-16x9.png" alt="Mesa de trabajo nocturna — cuero, expediente cerrado cinta negra, lápiz latón, luz banker tenue" onError={() => setErr(true)} loading="lazy" decoding="async" />
    </figure>
  );
}

function ConfianzaMedia() {
  const [err, setErr] = useState(false);
  const [fallbackNote, setFallbackNote] = useState(false);
  // Prefer rivera-confianza-16x9.png, fallback to interior
  const [src, setSrc] = useState("/media/rivera-confianza-16x9.png");
  useEffect(() => {
    if (err && src.includes("rivera-confianza")) {
      // try interior
      setErr(false);
      setSrc("/media/rivera-interior-16x9.png");
      setFallbackNote(true);
      console.warn("[RIVERA] Falta media: rivera-confianza-16x9.png — usando rivera-interior-16x9.png");
    } else if (err) {
      console.warn("[RIVERA] Falta media: rivera-interior-16x9.png (fallback confianza)");
    }
  }, [err, src]);
  // final fallback if both fail (err true after fallback)
  if (err && src.includes("rivera-interior")) {
    return <div className="media-falta" data-falta="rivera-interior-16x9.png">Falta media: rivera-interior-16x9.png</div>;
  }
  return (
    <figure className="media-frame media-frame--16-9">
      <img src={src} alt="Estantería de repertorios jurídicos en penumbra con haz banker, sin personas" onError={() => setErr(true)} loading="lazy" decoding="async" />
      <figcaption>
        Repertorios 2009–2025 · luz banker · sin retoque
        {fallbackNote ? " · usando rivera-interior-16x9.png" : ""}
      </figcaption>
    </figure>
  );
}

function TileStrip() {
  const tiles = [
    { f: "rivera-tile-01-1x1.png", label: "Laboral" },
    { f: "rivera-tile-02-1x1.png", label: "Familia" },
    { f: "rivera-tile-03-1x1.png", label: "Penal" },
    { f: "rivera-tile-04-1x1.png", label: "Civil / Herencias" },
  ];
  return (
    <div className="tile-strip" aria-label="Mosaico de materias">
      {tiles.map((t) => (
        <Tile key={t.f} filename={t.f} label={t.label} />
      ))}
    </div>
  );
}

function Tile({ filename, label }: { filename: string; label: string }) {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn(`[RIVERA] Falta media: ${filename}`);
  }, [err, filename]);
  if (err) return <div className="media-falta" data-falta={filename}>Falta media: {filename}</div>;
  return (
    <figure className="tile">
      <img src={`/media/${filename}`} alt={label} onError={() => setErr(true)} loading="lazy" decoding="async" />
    </figure>
  );
}

/* Agenda form */
type FormState = { nombre: string; tel: string; email: string; materia: string; mensaje: string; acepto: boolean };
type Errors = Partial<Record<keyof FormState, string>>;

function AgendaForm() {
  const [form, setForm] = useState<FormState>({ nombre: "", tel: "", email: "", materia: "", mensaje: "", acepto: false });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate(): Errors {
    const e: Errors = {};
    if (form.nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres).";
    // teléfono debe partir con +56
    const telTrim = form.tel.trim();
    if (!telTrim) e.tel = "Teléfono requerido.";
    else if (!telTrim.startsWith("+56")) e.tel = "Usa formato +56 9 1234 5678 o +56 2 2410 8820.";
    else if (telTrim.replace(/\D/g, "").length < 11) e.tel = "Revisa tu número (+56 + 9 dígitos).";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Revisa tu correo.";
    if (!form.materia) e.materia = "Elige una materia.";
    if (form.mensaje.trim().length < 10) e.mensaje = "Cuéntanos en al menos 10 caracteres.";
    if (!form.acepto) e.acepto = "Debes aceptar para coordinar la reunión.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setStatus("error");
      setErrorMsg("Revisa los campos marcados.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const payload = { nombre: form.nombre.trim(), tel: form.tel.trim(), email: form.email.trim(), materia: form.materia, mensaje: form.mensaje.trim(), ts: new Date().toISOString() };
      localStorage.setItem("rivera-agenda", JSON.stringify(payload));
      const text = `Hola RIVERA, quiero agendar reunión por ${payload.materia}. Mi caso: ${payload.mensaje}`;
      const waUrl = `https://wa.me/56224108820?text=${encodeURIComponent(text)}`;
      // open wa.me
      const w = window.open(waUrl, "_blank");
      if (!w) {
        // fallback mailto
        const mailto = `mailto:contacto@riveraabogados.cl?subject=${encodeURIComponent(`Agenda RIVERA — ${payload.materia}`)}&body=${encodeURIComponent(`${text}\n\nNombre: ${payload.nombre}\nTel: ${payload.tel}\nEmail: ${payload.email}`)}`;
        window.location.href = mailto;
      }
      setStatus("success");
      // checklist console
      console.log("[RIVERA] Agenda guardada", payload);
    } catch (err) {
      setStatus("error");
      setErrorMsg("No pudimos guardar tu solicitud. Intenta de nuevo.");
      console.error(err);
    }
  }

  return (
    <form className="agenda-form" onSubmit={handleSubmit} noValidate aria-label="Formulario agenda">
      <div className="field">
        <input className="inp" type="text" placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required aria-label="Nombre" />
        {errors.nombre && <span className="field-error">{errors.nombre}</span>}
      </div>
      <div className="field">
        <input className="inp" type="tel" placeholder="+56 9 1234 5678" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} required aria-label="Teléfono" style={{ fontVariantNumeric: "tabular-nums" }} />
        {errors.tel && <span className="field-error">{errors.tel}</span>}
      </div>
      <div className="field">
        <input className="inp" type="email" placeholder="hola@email.cl" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-label="Email" />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      <div className="field">
        <select className="inp" value={form.materia} onChange={(e) => setForm({ ...form, materia: e.target.value })} required aria-label="Materia">
          <option value="">Materia</option>
          <option value="Laboral">Laboral</option>
          <option value="Familia">Familia</option>
          <option value="Penal">Penal</option>
          <option value="Civil/Herencias">Civil/Herencias</option>
          <option value="Otra (derivar)">Otra (derivar)</option>
        </select>
        {errors.materia && <span className="field-error">{errors.materia}</span>}
      </div>
      <div className="field">
        <textarea className="inp" placeholder="Cuéntanos en 2 líneas qué pasó y qué buscas" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} required aria-label="Mensaje" rows={4} />
        {errors.mensaje && <span className="field-error">{errors.mensaje}</span>}
      </div>
      <label className="check">
        <input type="checkbox" checked={form.acepto} onChange={(e) => setForm({ ...form, acepto: e.target.checked })} />
        <span>
          Acepto que me contacten por WhatsApp y correo para coordinar la reunión — <a href="#">privacidad</a>
        </span>
      </label>
      {errors.acepto && <span className="field-error">{errors.acepto}</span>}

      <button type="submit" className="btn-primary btn-full" disabled={status === "loading"} aria-busy={status === "loading"}>
        {status === "loading" ? "Enviando…" : "Agendar reunión"}
      </button>
      {status === "success" && <p className="form-success" role="status">✓ Te escribimos hoy · revisa tu WhatsApp</p>}
      {status === "error" && errorMsg && <p className="form-error">{errorMsg}</p>}
    </form>
  );
}

function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrolled > 0.35);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="mobile-sticky-cta" role="complementary" aria-label="Agendar reunión">
      <a href="#agenda-rivera" className="btn-primary btn-full">
        Agendar reunión
      </a>
    </div>
  );
}

export function App() {
  useEffect(() => {
    const ids = ["portada", "materias", "como-defendemos", "honorarios", "confianza", "agenda-rivera"];
    const missing = ids.filter((id) => !document.getElementById(id));
    console.log("[RIVERA] Checklist secciones vs BLUEPRINT:", ids.map((id) => ({ id, ok: !missing.includes(id) })));
    if (missing.length) console.warn("[RIVERA] Faltan ids:", missing);
    else console.log("[RIVERA] Todas las secciones BLUEPRINT presentes (6 ids)");
    // lista media faltante
    setTimeout(() => {
      const faltas = Array.from(document.querySelectorAll<HTMLElement>("[data-falta]")).map((el) => el.dataset.falta);
      if (faltas.length) console.warn("[RIVERA] Media faltante:", faltas);
      else console.log("[RIVERA] Media completa");
    }, 800);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <div className="header-left">
            <a href="#portada-abogado-oscuro-premium" className="logo" aria-label="RIVERA — Estudio Jurídico, volver a portada">
              <span className="logo-name">RIVERA</span>
              <span className="logo-desc">Estudio Jurídico · Santiago</span>
            </a>
          </div>

          <nav className="header-center" aria-label="Navegación principal">
            <a href="#materias-abogado-oscuro-premium" className="nav-link">
              Materias
            </a>
            <a href="#como-defendemos-abogado-oscuro-premium" className="nav-link">
              Cómo defendemos
            </a>
            <a href="#honorarios-abogado-oscuro-premium" className="nav-link">
              Honorarios
            </a>
            <a href="#confianza-abogado-oscuro-premium" className="nav-link">
              Confianza
            </a>
          </nav>

          <div className="header-right">
            <a href="tel:+56224108820" className="header-tel">
              +56 2 2410 8820
            </a>
            <a href="tel:+56224108820" className="header-tel-icon" aria-label="Llamar +56 2 2410 8820">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.6l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 1.6-.6l2.8.4A2 2 0 0 1 22 16.9z" />
              </svg>
            </a>
            <a href="#agenda-rivera" className="btn-cta">
              <span className="btn-cta-full">Agendar reunión</span>
              <span className="btn-cta-short">Agendar</span>
            </a>
            <button className="hamburger" aria-label="Abrir menú" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <section id="portada-abogado-oscuro-premium" className="hero" aria-label="Portada RIVERA">
        <div className="hero__media hero__media--img" aria-hidden="true">
          <HeroMedia />
        </div>
        <div className="hero__overlay" aria-hidden="true"></div>

        <div className="wrap hero__content">
          <div className="grid">
            <div className="hero__text">
              <p className="kicker">ESTUDIO JURÍDICO · SANTIAGO DESDE 2009</p>

              <h1 className="hero__title">
                <span>Defensa seria que</span>
                <span>cobra por escrito y</span>
                <span>te acompaña hasta</span>
                <span>el fallo.</span>
              </h1>

              <p className="hero__sub">
                Reunión inicial de 60 minutos, diagnóstico honesto y presupuesto cerrado. El mismo abogado te reporta
                cada 30 días, con copia de cada escrito.
              </p>

              <div className="hero__ctas">
                <a href="#agenda-rivera" className="btn-primary">
                  Agendar reunión
                </a>
                <a href="#honorarios-abogado-oscuro-premium" className="btn-secondary">
                  Ver honorarios
                </a>
              </div>

              <div className="banda" aria-label="Garantías">
                <span className="banda-item">Presupuesto firmado antes de partir</span>
                <span className="banda-dot" aria-hidden="true"></span>
                <span className="banda-item">Mismo abogado de inicio a cierre</span>
                <span className="banda-dot" aria-hidden="true"></span>
                <span className="banda-item">Boleta y factura · todo declarable</span>
              </div>

              <p className="micro-rut">
                RIVERA Abogados SpA · RUT 76.884.120-3 · Registro Nº 18.402 · Santiago, Chile. Sin letra chica: si el
                escenario cambia, te avisamos antes de avanzar y firmas de nuevo.
              </p>
            </div>

            <nav className="hero__index" aria-label="Índice editorial">
              <a href="#materias-abogado-oscuro-premium">01 Materias</a>
              <a href="#como-defendemos-abogado-oscuro-premium">02 Cómo defendemos</a>
              <a href="#honorarios-abogado-oscuro-premium">03 Honorarios</a>
              <a href="#confianza-abogado-oscuro-premium">04 Confianza</a>
            </nav>
          </div>
        </div>
      </section>

      {/* #materias */}
      <section id="materias-abogado-oscuro-premium" className="sec sec-materias" aria-label="Materias">
        <div className="wrap">
          <div className="grid">
            <div className="materias-header">
              <p className="kicker">MATERIAS</p>
              <h2>Cuatro materias. Las hacemos bien o derivamos.</h2>
              <p className="sec-intro">No somos estudio ómnibus. Si tu caso no calza, te derivamos con nombre y teléfono. Sin vueltas y sin retener.</p>
              <p className="indice-nota">01 — 04 · índice editorial</p>
            </div>
            <div className="materias-index">
              <article className="capitulo">
                <div className="cap-num">01</div>
                <div className="cap-body">
                  <h3>Laboral</h3>
                  <ul>
                    <li>Despido injustificado y nulidad del despido</li>
                    <li>Autodespido y cobro de prestaciones</li>
                    <li>Tutela laboral, acoso y vulneración</li>
                    <li>Asesoría mensual a pymes (desde 8 UF)</li>
                  </ul>
                  <p className="queno">No tomamos accidentes del trabajo con peritaje externo.</p>
                  <p className="desde">Consulta laboral desde $85.000 · Juicio desde $550.000</p>
                </div>
              </article>
              <article className="capitulo">
                <div className="cap-num">02</div>
                <div className="cap-body">
                  <h3>Familia</h3>
                  <ul>
                    <li>Divorcio mutuo acuerdo y unilateral</li>
                    <li>Pensión de alimentos, aumento y rebaja</li>
                    <li>Relación directa y regular</li>
                    <li>Violencia intrafamiliar (medidas urgentes mismo día)</li>
                  </ul>
                  <p className="queno">No vemos adopción internacional.</p>
                  <p className="desde">Divorcio mutuo acuerdo desde $320.000 · Pensión desde $350.000</p>
                </div>
              </article>
              <article className="capitulo">
                <div className="cap-num">03</div>
                <div className="cap-body">
                  <h3>Penal</h3>
                  <ul>
                    <li>Control de detención y cautelares</li>
                    <li>Querella y defensa en estafa, hurto, lesiones</li>
                    <li>Delitos económicos y tributarios</li>
                    <li>Recursos y apelaciones</li>
                  </ul>
                  <p className="queno">No tomamos causas con prisión preventiva decretada sin primera reunión.</p>
                  <p className="desde">Defensa penal desde $750.000 · Control detención $220.000 · Urgencia 24h</p>
                </div>
              </article>
              <article className="capitulo">
                <div className="cap-num">04</div>
                <div className="cap-body">
                  <h3>Civil y herencias</h3>
                  <ul>
                    <li>Herencias y posesión efectiva</li>
                    <li>Contratos, arriendos y cobranza</li>
                    <li>Indemnización de perjuicios</li>
                    <li>Copropiedad inmobiliaria</li>
                  </ul>
                  <p className="queno">No vemos causas de aguas ni minería.</p>
                  <p className="desde">Posesión efectiva desde $350.000 · Contrato desde $150.000</p>
                </div>
              </article>
              <p className="nota-foco">¿Tu caso no está aquí? Escríbenos igual. Si no lo tomamos, te decimos quién sí — con nombre y teléfono.</p>
            </div>
          </div>
          <TileStrip />
        </div>
      </section>

      {/* #como-defendemos */}
      <section id="como-defendemos-abogado-oscuro-premium" className="sec sec-como" aria-label="Cómo defendemos">
        <div className="wrap">
          <div className="grid">
            <div className="como-media">
              <InteriorMedia ratio="4-3" caption="Expediente con cinta negra · mesa de cuero · luz banker 45°" alt="Expediente con cinta negra sobre mesa de cuero, luz banker 45 grados" />
            </div>
            <div className="como-body">
              <p className="kicker">CÓMO DEFENDEMOS</p>
              <h2>Primera reunión de 60 minutos que ordena tu caso</h2>
              <p className="sec-intro">No es una llamada de 10. Es una reunión para entender hechos, papeles y riesgos. Sales con plan, plazos y número cerrado.</p>

              <div className="pasos">
                <div className="paso">
                  <div className="paso-num">01</div>
                  <div className="paso-text">
                    <h4>Reunión y diagnóstico</h4>
                    <p>Revisamos documentos, línea de tiempo y qué busca el tribunal. Te decimos si hay caso, cuánto demora y qué puede salir mal. Sin humo.</p>
                  </div>
                </div>
                <div className="paso">
                  <div className="paso-num">02</div>
                  <div className="paso-text">
                    <h4>Presupuesto y mandato por escrito</h4>
                    <p>Honorario, gastos y forma de pago en una hoja. Firmas mandato solo si estás de acuerdo. Nada por WhatsApp a medias.</p>
                  </div>
                </div>
                <div className="paso">
                  <div className="paso-num">03</div>
                  <div className="paso-text">
                    <h4>Causa en marcha y reporte mensual</h4>
                    <p>El mismo abogado te reporta avances por escrito cada 30 días. Audiencias y escritos con copia a tu correo. Si el escenario cambia, te avisamos antes de avanzar y firmas de nuevo.</p>
                  </div>
                </div>
              </div>

              <ul className="checklist">
                <li>Acta de reunión firmada</li>
                <li>Presupuesto con hitos y forma de pago</li>
                <li>Mandato judicial</li>
                <li>Acceso a carpeta digital con escritos</li>
              </ul>

              <p className="precio-inline">Reunión inicial $85.000 — se abona al honorario si sigues con nosotros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* #honorarios */}
      <section id="honorarios-abogado-oscuro-premium" className="sec sec-honorarios" aria-label="Honorarios">
        <div className="wrap">
          <div className="sec-header-full">
            <p className="kicker">HONORARIOS TRANSPARENTES</p>
            <h2>Valores por escrito, sin sorpresas después</h2>
            <p className="sec-intro" style={{ maxWidth: "64ch" }}>
              Cada fila es el honorario desde, IVA incluido. Gastos de receptor y notariales van aparte y se rinden con
              boleta. El valor final se firma antes de partir.
            </p>
          </div>
          <div className="grid honorarios-grid">
            <div className="honorarios-tabla">
              <div className="tabla-head">
                <span>Prestación</span>
                <span>Desde CLP (IVA inc.)</span>
                <span>Plazo / Nota</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Reunión de diagnóstico (60 min)</span>
                <span className="f-precio">$85.000</span>
                <span className="f-nota">Se abona al juicio si sigues · presencial o videollamada</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Divorcio mutuo acuerdo</span>
                <span className="f-precio">desde $320.000</span>
                <span className="f-nota">60–90 días · incluye acuerdo y escritos</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Divorcio unilateral</span>
                <span className="f-precio">desde $550.000</span>
                <span className="f-nota">6–12 meses · con notificación y audiencia</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Pensión de alimentos (demanda)</span>
                <span className="f-precio">desde $350.000</span>
                <span className="f-nota">Incluye mediación previa obligatoria</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Juicio laboral (demanda)</span>
                <span className="f-precio">desde $550.000</span>
                <span className="f-nota">Cobro contra resultado 15–20% pactado</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Defensa penal (querella/defensa)</span>
                <span className="f-precio">desde $750.000</span>
                <span className="f-nota">Control detención $220.000 · urgencia 24h</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Posesión efectiva / herencias</span>
                <span className="f-precio">desde $350.000</span>
                <span className="f-nota">Trámite completo Registro Civil + SII</span>
              </div>
              <div className="fila">
                <span className="f-prestacion">Contratos y cobranza civil</span>
                <span className="f-precio">desde $150.000</span>
                <span className="f-nota">Redacción + revisión · desde 1,5 UF</span>
              </div>
              <p className="tabla-nota">
                Valores referenciales; el honorario final se confirma tras reunión y se firma en presupuesto. Sin
                reajustes unilaterales. Gastos de receptor/notario se rinden con comprobante. Facilidades: hasta 6
                cuotas sin interés, factura exenta si corresponde.
              </p>
              <p className="facilidades">
                Consulta laboral y penal con pago contra resultado disponible según mérito — lo evaluamos en la reunión,
                sin promesa previa.
              </p>
            </div>
            <aside className="honorarios-aside" aria-label="Urgencia hoy">
              <h3>¿Urgencia hoy?</h3>
              <p>Penal y familia con medidas urgentes el mismo día según tribunal. Llámanos y te decimos hora real y qué traer.</p>
              <a href="tel:+56224108820" className="aside-tel">
                +56 2 2410 8820
              </a>
              <p className="aside-horario">Lun–Vie 9:00–18:30 · Sáb 10:00–13:00</p>
              <a href="#agenda-rivera" className="btn-primary btn-full" style={{ marginTop: "12px" }}>
                Agendar reunión
              </a>
              <p className="aside-micro">Si no contestamos en 2 horas hábiles, la reunión va sin costo.</p>
            </aside>
          </div>
        </div>
      </section>

      {/* #confianza */}
      <section id="confianza-abogado-oscuro-premium" className="sec sec-confianza" aria-label="Confianza">
        <div className="wrap">
          <div className="grid">
            <div className="conf-izq">
              <p className="kicker">CONFIANZA</p>
              <h2>Un estudio chico, con la causa a la vista</h2>
              <p className="sec-intro">No prometemos resultados. Prometemos expediente ordenado, reporte mensual y el mismo abogado de principio a fin.</p>

              <div className="datos-duros">
                <div>
                  <strong>15 años · Santiago</strong>
                  <span>Desde 2009 en el mismo domicilio</span>
                </div>
                <div>
                  <strong>1.400+ causas</strong>
                  <span>Laboral, familia y penal — con rol y tribunal a la vista</span>
                </div>
                <div>
                  <strong>Mismo abogado</strong>
                  <span>No rotamos tu causa entre juniors</span>
                </div>
              </div>

              <div className="principios">
                <div className="principio-card">
                  <h4>Papel firmado</h4>
                  <p>Todo por escrito: honorario, hitos y gastos. Sin &lsquo;después vemos&rsquo;.</p>
                </div>
                <div className="principio-card">
                  <h4>Reporte mensual</h4>
                  <p>Cada 30 días te llega estado con escritos y audiencias. Sin pedirlo.</p>
                </div>
                <div className="principio-card">
                  <h4>Derivación honesta</h4>
                  <p>Si no es nuestra materia, te derivamos con nombre. No retenemos.</p>
                </div>
                <div className="principio-card">
                  <h4>Boleta y factura</h4>
                  <p>Todo declarable. Sin sobres ni vueltas.</p>
                </div>
              </div>

              <p className="linea-tabular">15 años en Santiago · 1.400+ causas · reporte mensual · mismo abogado siempre</p>
            </div>
            <div className="conf-der">
              <ConfianzaMedia />
            </div>
          </div>
        </div>
      </section>

      {/* #agenda-rivera */}
      <section id="agenda-rivera" className="sec sec-agenda" aria-label="Agenda">
        <div className="wrap">
          <div className="grid">
            <div className="agenda-izq">
              <p className="kicker">AGENDA</p>
              <h2>Agenda tu reunión. Te responden hoy.</h2>
              <p className="sec-intro">Elige día y te confirmamos por WhatsApp en el día. Si es urgencia penal o VIF, llama directo.</p>
              <AgendaForm />
            </div>
            <div className="agenda-der">
              <a href="tel:+56224108820" className="agenda-tel">
                +56 2 2410 8820
              </a>
              <a href="mailto:contacto@riveraabogados.cl" className="agenda-email">
                contacto@riveraabogados.cl
              </a>
              <p className="agenda-dir">Av. Apoquindo 3.600, piso 8, Las Condes, Santiago</p>
              <p className="agenda-horario">
                <span>Lun–Vie 9:00–18:30</span>
                <span className="dot" aria-hidden="true"></span>
                <span>Sáb 10:00–13:00</span>
              </p>
              <div className="mapa-linea" aria-label="Ubicación">
                <span className="mapa-dot" aria-hidden="true"></span>
                <span>Metro Manquehue · 3 min a pie</span>
              </div>
              <div className="agenda-proof">
                <ProofMedia />
              </div>
            </div>
          </div>

          <footer className="site-footer">
            <p>RIVERA Abogados SpA · RUT 76.884.120-3 · Av. Apoquindo 3.600, piso 8 · contacto@riveraabogados.cl · +56 2 2410 8820</p>
            <p>© 2026 RIVERA. Todos los derechos reservados. Valores referenciales; honorario final se firma en presupuesto. Sin fotos de clientes ni testimonios inventados.</p>
            <nav className="footer-links" aria-label="Enlaces pie">
              <a href="#materias-abogado-oscuro-premium">Materias</a>
              <span>·</span>
              <a href="#como-defendemos-abogado-oscuro-premium">Cómo defendemos</a>
              <span>·</span>
              <a href="#honorarios-abogado-oscuro-premium">Honorarios</a>
            </nav>
          </footer>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
