import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgErrorMobile, setImgErrorMobile] = useState(false);

  // media errors for BUILD-02 sections
  const [errFicha, setErrFicha] = useState(false);
  const [errInterior, setErrInterior] = useState(false);
  const [errAdmision, setErrAdmision] = useState(false);
  const [errDetalle, setErrDetalle] = useState(false);

  // form state
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMsg, setFormMsg] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const scrolledPx = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolledPx / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("casanorte-agenda");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.nombre) setNombre(d.nombre);
        if (d.email) setEmail(d.email);
        if (d.tel) setTel(d.tel);
        if (d.especialidad) setEspecialidad(d.especialidad);
        if (d.mensaje) setMensaje(d.mensaje);
      }
    } catch { /* ignore */ }
  }, []);

  function validateEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }
  function validateTel(v: string) {
    if (!v.trim()) return true; // optional
    const digits = v.replace(/\D/g, "");
    if (!digits) return false;
    // normalize: if starts with 56, strip it
    let d = digits;
    if (d.startsWith("56")) d = d.slice(2);
    if (d.startsWith("9")) d = d.slice(1);
    // after stripping, must be 8 digits
    return /^\d{8}$/.test(d);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailOk = validateEmail(email);
    const telOk = validateTel(tel);
    const nombreOk = nombre.trim().length >= 2;
    const espOk = !!especialidad;
    const msgOk = mensaje.length <= 500;
    const aceptaOk = acepta;

    if (!nombreOk || !emailOk || !telOk || !espOk || !msgOk || !aceptaOk) {
      setFormStatus("error");
      setFormMsg("Revisa email y teléfono.");
      return;
    }
    setFormStatus("loading");
    setFormMsg("Enviando…");

    // simulate async
    setTimeout(() => {
      const payload = { nombre: nombre.trim(), email: email.trim(), tel: tel.trim(), especialidad, mensaje: mensaje.trim(), ts: Date.now() };
      try { localStorage.setItem("casanorte-agenda", JSON.stringify(payload)); } catch { /* ignore */ }
      setFormStatus("success");
      setFormMsg("¡Listo! Te escribimos en <2h hábil. Revisa tu WhatsApp.");

      // build wa text
      const waText = `Hola Casa Norte, quiero agendar evaluaci\u00F3n de ${encodeURIComponent(especialidad)} — ${encodeURIComponent(nombre.trim())}`;
      const waUrl = `https://wa.me/56987654321?text=Hola%20Casa%20Norte%2C%20quiero%20agendar%20evaluaci%C3%B3n%20de%20${encodeURIComponent(especialidad)}%20—%20${encodeURIComponent(nombre.trim())}`;

      // mailto
      const subject = `Evaluaci\u00F3n ${especialidad} — ${nombre.trim()}`;
      const body = `Nombre: ${nombre.trim()}\nEmail: ${email.trim()}\nTel: ${tel.trim()}\nEspecialidad: ${especialidad}\nMensaje: ${mensaje.trim()}`;
      const mailto = `mailto:hola@casanorte.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // open both — mailto first, then whatsapp
      window.location.href = mailto;
      setTimeout(() => window.open(waUrl, "_blank"), 400);
      // also log waText for debugging
      void waText;
    }, 900);
  }

  return (
    <>
      <a className="skip-link" href="#casanorte-umbral">Saltar al contenido</a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
        <div className="container">
          <a className="wordmark" href="#casanorte-umbral">CASA NORTE</a>

          <nav className="nav" aria-label="Principal">
            <a href="#especialidades-arancel">Especialidades</a>
            <a href="#visita-paso">La visita</a>
            <a href="#espacio-clinico">Espacio</a>
            <a href="#arancel-transparente">Arancel</a>
          </nav>

          <a className="tel" href="tel:+56987654321">+56 9 8765 4321</a>
          <a className="cta-header" href="#agenda-casanorte">Agendar evaluación</a>

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
      </header>

      {/* mobile sheet */}
      <div className={`overlay ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <nav className={`nav-mobile ${menuOpen ? "is-open" : ""}`} aria-label="Menú móvil">
        <a href="#especialidades-arancel" onClick={() => setMenuOpen(false)}>Especialidades</a>
        <a href="#visita-paso" onClick={() => setMenuOpen(false)}>La visita</a>
        <a href="#espacio-clinico" onClick={() => setMenuOpen(false)}>Espacio</a>
        <a href="#arancel-transparente" onClick={() => setMenuOpen(false)}>Arancel</a>
        <a className="small" href="#agenda-casanorte" onClick={() => setMenuOpen(false)}>Agendar evaluación →</a>
        <a className="tel-mobile" href="tel:+56987654321">+56 9 8765 4321</a>
      </nav>

      <section id="casanorte-umbral" className="hero" aria-label="Hero Casa Norte">
        <div className="hero-copy">
          <p className="kicker">CLÍNICA POLIVALENTE · SANTIAGO</p>
          <h1>
            <span>Una clínica.</span>
            <span>Todas las</span>
            <span>especialidades.</span>
          </h1>
          <p className="lead">
            Ortodoncia, implantes, endodoncia, niño y adulto. Un expediente. Un mostrador. El horario se cumple.
          </p>
          <p className="bullets">· Evaluación 40 min · Plan el mismo día · Fonasa e Isapre</p>

          <div className="cta-row">
            <a className="cta-primary" href="#agenda-casanorte">Agendar evaluación</a>
            <a className="cta-secondary" href="#arancel-transparente">Ver arancel transparente →</a>
          </div>

          <p className="micro">Lun–Vie 8:00–20:00 · Sáb 9:00–14:00 · Respuesta &lt;2h hábil</p>

          <div className="hero-datos" aria-label="Datos de la clínica">
            <span>22 años</span>
            <span>·</span>
            <span>11 box</span>
            <span>·</span>
            <span>un jefe de turno</span>
            <span>·</span>
            <span>6 especialidades</span>
          </div>
        </div>

        <div className="hero-media">
          {!imgError ? (
            <img
              className="hero-img"
              src={`${base}media/casanorte-hero-16x9.png`}
              alt="Fachada CASA NORTE — revoque blanco y ventanas acero navy"
              loading="eager"
              onError={() => {
                console.warn("Falta: casanorte-hero-16x9.png");
                setImgError(true);
              }}
              style={{ display: "block" }}
            />
          ) : (
            <div
              className="media-falta"
              data-falta="casanorte-hero-16x9.png"
              style={{
                aspectRatio: "16/9",
                border: "1px dashed var(--line)",
                display: "grid",
                placeItems: "center",
                color: "var(--ink)",
                opacity: 0.6,
              }}
            >
              Falta: casanorte-hero-16x9.png
            </div>
          )}

          <div className="hero-mobile-fallback" style={{ display: "none" }}>
            {!imgErrorMobile ? (
              <img
                src={`${base}media/casanorte-hero-9x16.png`}
                alt=""
                onError={() => {
                  console.warn("Falta: casanorte-hero-9x16.png");
                  setImgErrorMobile(true);
                }}
              />
            ) : (
              <div
                className="media-falta"
                data-falta="casanorte-hero-9x16.png"
                style={{
                  aspectRatio: "9/16",
                  border: "1px dashed var(--line)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--ink)",
                  opacity: 0.6,
                }}
              >
                Falta: casanorte-hero-9x16.png
              </div>
            )}
          </div>

          <p className="hero-caption">Sede Providencia · 11:00 · Sin filtro cálido</p>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .hero-media .hero-img{ display:none !important; }
          .hero-media .hero-mobile-fallback{ display:block !important; }
          .hero-media .hero-mobile-fallback img{ width:100%; aspect-ratio:9/16; object-fit:cover; border:1px solid var(--ink); background:var(--paper); display:block; }
        }
        @media(min-width:901px){
          .hero-mobile-fallback{ display:none !important; }
        }
      `}</style>

      {/* #especialidades-arancel */}
      <section id="especialidades-arancel" className="sec-especialidades" aria-label="Especialidades con arancel">
        <div className="sec-inner">
          <div className="sec-header">
            <h2>Especialidades. Con arancel a la vista.</h2>
            <p className="bajada">Seis sillas, un expediente. Eliges especialidad y ves desde cuánto, qué incluye y cuánto dura. Sin ‘te llamamos’.</p>
          </div>
          <div className="esp-grid">
            <div className="esp-list">
              <div className="esp-row">
                <div className="esp-kicker">01 — ORTODONCIA</div>
                <div className="esp-title">Brackets metálicos y alineadores</div>
                <div className="esp-desc">Niños y adultos, visible e invisible. Controles mensuales.</div>
                <div className="esp-price">desde $35.000/mes CLP <span className="tag tag-green">controles incluidos</span></div>
              </div>
              <div className="esp-row">
                <div className="esp-kicker">02 — IMPLANTES</div>
                <div className="esp-title">Planificación + corona atornillada</div>
                <div className="esp-desc">CBCT, guía y provisorio. Una sola ficha.</div>
                <div className="esp-price">desde $690.000 CLP <span className="tag">corona incluida</span></div>
              </div>
              <div className="esp-row">
                <div className="esp-kicker">03 — ENDODONCIA</div>
                <div className="esp-title">Microscopio, una sesión cuando se puede</div>
                <div className="esp-desc">Molar y premolar. Derivación interna.</div>
                <div className="esp-price">desde $180.000 CLP</div>
              </div>
              <div className="esp-row">
                <div className="esp-kicker">04 — ODONTOPEDIATRÍA</div>
                <div className="esp-title">Agenda propia, no el hueco de las 13:00</div>
                <div className="esp-desc">Prevención, sellantes, manejo conducta.</div>
                <div className="esp-price">desde $45.000 CLP</div>
              </div>
              <div className="esp-row">
                <div className="esp-kicker">05 — ESTÉTICA</div>
                <div className="esp-title">Carillas y blanqueamiento con prueba</div>
                <div className="esp-desc">Mock-up previo. Sin tallado innecesario.</div>
                <div className="esp-price">desde $250.000 CLP</div>
              </div>
              <div className="esp-row">
                <div className="esp-kicker">06 — URGENCIA</div>
                <div className="esp-title">Cupos 8:00 y 19:00 reservados</div>
                <div className="esp-desc">Dolor, trauma, perno provisorio.</div>
                <div className="esp-price">desde $38.000 CLP <span className="tag tag-accent">hoy mismo</span></div>
              </div>
            </div>
            <aside className="esp-side">
              <div className="card-membrete">
                <div className="card-title">¿Fonasa o Isapre?</div>
                <p>Atendemos Fonasa, Isapre y particular. Boleta reembolsable. Bono electrónico en recepción.</p>
                <a href="#prevision-convenio">Ver previsión →</a>
              </div>
              {!errFicha ? (
                <img
                  src={`${base}media/casanorte-ficha-4x3.png`}
                  alt="Ficha clínica foliada sobre roble"
                  className="esp-img"
                  loading="lazy"
                  onError={() => { console.warn("Falta: casanorte-ficha-4x3.png"); setErrFicha(true); }}
                />
              ) : (
                <div className="media-falta" data-falta="casanorte-ficha-4x3.png" style={{ aspectRatio: "4/3", border: "1px dashed var(--line)", display: "grid", placeItems: "center", color: "var(--ink)", opacity: .6, fontSize: "13px", background: "var(--paper)" }}>Falta: casanorte-ficha-4x3.png</div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* #primera-evaluacion */}
      <section id="primera-evaluacion" className="sec-visita" aria-label="La visita en 40 minutos">
        <div className="sec-inner">
          <h2>La visita. En 40 minutos.</h2>
          <p className="sub">Sin vueltas. Llegas, te evaluamos, sales con plan impreso.</p>
          <div className="visita-grid">
            <div className="visita-card">
              <div className="visita-num">01</div>
              <div className="visita-title">Hora por web o teléfono. Confirmación el día anterior.</div>
              <p>Eliges especialidad, no hora suelta. Te confirmamos por WhatsApp.</p>
            </div>
            <div className="visita-card">
              <div className="visita-num">02</div>
              <div className="visita-title">Llegas 5 minutos antes. Si tardamos, avisamos.</div>
              <p>Jefe de turno controla puntualidad. Sala de espera con luz día.</p>
            </div>
            <div className="visita-card">
              <div className="visita-num">03</div>
              <div className="visita-title">Sales con el plan impreso. No con ‘te llamamos’.</div>
              <p>Ficha foliada con presupuesto y plazos. Firma en recepción si aceptas.</p>
            </div>
          </div>
          <div className="visita-banda">Duración evaluación 40 min · Plan el mismo día · 11 box operativos</div>
        </div>
      </section>

      {/* #prevision-convenio */}
      <section id="prevision-convenio" className="sec-prevision" aria-label="Previsión sin letra chica">
        <div className="sec-inner">
          <h2>Previsión. Sin letra chica.</h2>
          <p className="sub">Trabajamos con previsión chilena real. Valores en CLP, boleta reembolsable.</p>
          <div className="prev-grid">
            <div className="prev-card">
              <div className="prev-kicker k-green">FONASA</div>
              <div className="prev-title">Bono electrónico en recepción</div>
              <ul>
                <li>Tramos B/C/D con copago</li>
                <li>Bono se emite aquí</li>
                <li>Reembolso según tramo</li>
              </ul>
            </div>
            <div className="prev-card">
              <div className="prev-kicker">ISAPRE</div>
              <div className="prev-title">Boleta reembolsable + presupuesto</div>
              <ul>
                <li>Todas las Isapres</li>
                <li>Presupuesto detallado por código</li>
                <li>Reembolso presentando boleta</li>
              </ul>
            </div>
            <div className="prev-card">
              <div className="prev-kicker k-accent">PARTICULAR</div>
              <div className="prev-title">Cuotas en recepción</div>
              <ul>
                <li>3–12 cuotas</li>
                <li>Se firman en mostrador</li>
                <li>Sin interés clínica (sujeto a evaluación)</li>
              </ul>
            </div>
          </div>
          <p className="nota-honesta">Convenio y forma de pago se confirman en evaluación según prestación y previsión. Valores referenciales en #arancel-transparente.</p>
          <div className="prev-friso">
            {!errAdmision ? (
              <img
                src={`${base}media/casanorte-admision-16x9.png`}
                alt="Mostrador de admisión vacío"
                loading="lazy"
                onError={() => { console.warn("Falta: casanorte-admision-16x9.png"); setErrAdmision(true); }}
              />
            ) : (
              <div className="media-falta" data-falta="casanorte-admision-16x9.png" style={{ aspectRatio: "16/9", border: "1px dashed var(--line)", display: "grid", placeItems: "center", color: "var(--ink)", opacity: .6, fontSize: "13px", background: "var(--paper)", minHeight: "160px" }}>Falta: casanorte-admision-16x9.png</div>
            )}
          </div>
        </div>
      </section>

      {/* #espacio-clinico */}
      <section id="espacio-clinico" className="sec-espacio" aria-label="Espacio clínico">
        <div className="espacio-media-wrap">
          {!errInterior ? (
            <img
              src={`${base}media/casanorte-interior-16x9.png`}
              alt="Recepción linóleo navy y mostrador roble"
              className="espacio-img"
              loading="lazy"
              onError={() => { console.warn("Falta: casanorte-interior-16x9.png"); setErrInterior(true); }}
            />
          ) : (
            <div className="media-falta" data-falta="casanorte-interior-16x9.png" style={{ aspectRatio: "16/9", border: "1px dashed var(--line)", display: "grid", placeItems: "center", color: "var(--ink)", opacity: .6, fontSize: "13px", background: "var(--paper)", minHeight: "320px", maxHeight: "64vh" }}>Falta: casanorte-interior-16x9.png</div>
          )}
          <div className="espacio-overlay">
            <div className="kicker" style={{ marginBottom: "12px" }}>ESPACIO</div>
            <h2>Once box. El paciente no es un número que viaja solo.</h2>
            <p>Pasillo corto, fichas a mano, jefe de turno visible. Todo a 15 metros.</p>
          </div>
        </div>
      </section>

      {/* #visita-paso */}
      <section id="visita-paso" className="sec-logistica" aria-label="Logística clara">
        <div className="sec-inner">
          <h2>Logística clara.</h2>
          <div className="log-grid">
            <div className="log-item">
              <div className="log-q">¿Más sucursales?</div>
              <p>En el demo, una sede Providencia. Proyecto real: red por comuna.</p>
            </div>
            <div className="log-item">
              <div className="log-q">¿Estacionamiento?</div>
              <p>En el edificio. Ticket validado 60 min en recepción.</p>
            </div>
            <div className="log-item">
              <div className="log-q">¿Horario?</div>
              <p>Lun–Vie 8:00–20:00 · Sáb 9:00–14:00. Último ingreso 19:30.</p>
            </div>
            <div className="log-item">
              <div className="log-q">¿Urgencia sin hora?</div>
              <p>Cupos 8:00 y 19:00 todos los días. Llama <a href="tel:+56987654321">+56 9 8765 4321</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* #arancel-transparente */}
      <section id="arancel-transparente" className="sec-arancel" aria-label="Arancel transparente">
        <div className="sec-inner">
          <div className="arancel-grid">
            <div className="arancel-main">
              <h2>Arancel transparente.</h2>
              <p className="sub">Valores referenciales CLP; se confirman tras evaluación. Sin planes ‘Pro’ ni ‘Empresa’.</p>
              <div className="tabla-wrap">
                <table className="tabla">
                  <thead>
                    <tr>
                      <th>Prestación</th>
                      <th>Qué incluye</th>
                      <th>Desde CLP</th>
                      <th>Plazo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Limpieza + destartraje</td><td>Higiene + pulido + flúor</td><td>desde $45.000</td><td>45 min</td></tr>
                    <tr><td>Endodoncia premolar</td><td>Microscopio + provisorio</td><td>desde $180.000</td><td>1 sesión (cuando se puede)</td></tr>
                    <tr><td>Endodoncia molar</td><td>Microscopio + provisorio</td><td>desde $220.000</td><td>1–2 sesiones</td></tr>
                    <tr><td>Implante + corona atornillada</td><td>CBCT + guía + provisorio + corona</td><td>desde $690.000</td><td>8–12 semanas</td></tr>
                    <tr><td>Ortodoncia metálica (mensual)</td><td>Control + arco</td><td>desde $35.000/mes</td><td>12–18 meses</td></tr>
                    <tr><td>Blanqueamiento clínico</td><td>2 sesiones + kit</td><td>desde $250.000</td><td>14 días</td></tr>
                    <tr><td>Odontopediatría (consulta)</td><td>Prevención + sellantes evaluación</td><td>desde $45.000</td><td>30 min</td></tr>
                    <tr><td>Urgencia (cupo reservado)</td><td>Diagnóstico + alivio provisorio</td><td>desde $38.000</td><td>hoy mismo</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="nota-honesta">Valores referenciales; se confirman tras diagnóstico según previsión y complejidad. No incluye exámenes CBCT externos si se requieren. Factura exenta disponible.</p>
              <a className="cta-primary" href="#agenda-casanorte">Agendar evaluación para presupuesto exacto →</a>
            </div>
            <div className="arancel-vignette">
              {!errDetalle ? (
                <img
                  src={`${base}media/casanorte-detalle-1x1.png`}
                  alt="Instrumental sobre papel algodón"
                  loading="lazy"
                  onError={() => { console.warn("Falta: casanorte-detalle-1x1.png"); setErrDetalle(true); }}
                />
              ) : (
                <div className="media-falta" data-falta="casanorte-detalle-1x1.png" style={{ aspectRatio: "1/1", border: "1px dashed var(--line)", display: "grid", placeItems: "center", color: "var(--ink)", opacity: .6, fontSize: "13px", background: "var(--paper)", minHeight: "240px" }}>Falta: casanorte-detalle-1x1.png</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* #agenda-casanorte */}
      <section id="agenda-casanorte" className="sec-agenda" aria-label="Agenda tu evaluación">
        <div className="sec-inner agenda-grid">
          <div className="agenda-copy">
            <h2>Agenda tu evaluación.</h2>
            <p className="lead-sm">20 minutos por teléfono o en admisión. Sin pitch de 90 diapositivas. Plan impreso el mismo día.</p>
            <div className="agenda-datos">
              <a href="https://wa.me/56987654321?text=Hola%20Casa%20Norte%2C%20quiero%20agendar%20evaluaci%C3%B3n" target="_blank" rel="noopener">WhatsApp +56 9 8765 4321</a>
              <span> · </span>
              <a href="mailto:hola@casanorte.cl">hola@casanorte.cl</a>
              <span> · Providencia, Santiago</span>
            </div>
            <p className="agenda-horario">Lun–Vie 8:00–20:00 · Sáb 9:00–14:00</p>
            <p className="agenda-micro">Respuesta &lt;2h hábil</p>
          </div>

          <form className="agenda-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="cn-nombre">Nombre*</label>
              <input id="cn-nombre" type="text" required placeholder="Nombre y apellido" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="cn-email">Email*</label>
              <input id="cn-email" type="email" required placeholder="correo@ejemplo.cl" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="cn-tel">Tel / WhatsApp</label>
              <input id="cn-tel" type="tel" placeholder="+56 9 ..." value={tel} onChange={e => setTel(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="cn-esp">Especialidad*</label>
              <select id="cn-esp" required value={especialidad} onChange={e => setEspecialidad(e.target.value)}>
                <option value="">Selecciona</option>
                <option>Ortodoncia</option>
                <option>Implantes</option>
                <option>Endodoncia</option>
                <option>Odontopediatría</option>
                <option>Estética</option>
                <option>Urgencia</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="cn-msg">Mensaje</label>
              <textarea id="cn-msg" rows={4} placeholder="Cuéntanos en 2 líneas qué necesitas" maxLength={500} value={mensaje} onChange={e => setMensaje(e.target.value)} />
              <span className="char-count">{mensaje.length}/500</span>
            </div>
            <div className="field field-full check-row">
              <label className="check-label">
                <input type="checkbox" checked={acepta} onChange={e => setAcepta(e.target.checked)} required />
                <span>Acepto que me contacten por WhatsApp/email sobre esta evaluación</span>
              </label>
            </div>
            <button type="submit" className="cta-submit" disabled={formStatus === "loading"}>
              {formStatus === "loading" ? "Enviando…" : "Solicitar hora →"}
            </button>
            {formStatus !== "idle" && (
              <p className={`form-feedback ${formStatus}`} role="status" aria-live="polite">{formMsg}</p>
            )}
          </form>
        </div>
        <div className="sec-inner">
          <div className="prueba-social">Demo Órbita v5 · 22 años · 11 box · 6 especialidades · 0 fotos de personas · Build 0 errores</div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="sec-inner footer-grid">
          <div className="footer-brand">CASA NORTE — Clínica dental polivalente · Providencia, Santiago</div>
          <div className="footer-links">
            <a href="/COLA-V2.json" target="_blank" rel="noopener">COLA-V2.json</a>
            <span> · </span>
            <a href="/propuestas/_plantilla/" target="_blank" rel="noopener">_plantilla</a>
            <span> · </span>
            <span>PROMPT-BOT-ARQUITECTO</span>
          </div>
          <div className="footer-meta">
            <div>© 2026 Órbita — Hecho en Chile · Demo v5</div>
            <div><a href="mailto:hola@casanorte.cl">hola@casanorte.cl</a> · <a href="tel:+56987654321">+56 9 8765 4321</a></div>
          </div>
        </div>
      </footer>

      {/* sticky móvil */}
      <div className="sticky-bar" aria-label="Barra de contacto móvil">
        <a href="tel:+56987654321" className="sticky-tel">+56 9 8765 4321</a>
        <a href="#agenda-casanorte" className="sticky-cta">Agendar evaluación</a>
      </div>
    </>
  );
}
