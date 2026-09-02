import { useEffect, useState } from "react";

function useMediaExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => { if (!cancelled) setExists(true); };
    img.onerror = () => { if (!cancelled) setExists(false); };
    img.src = src;
    return () => { cancelled = true; };
  }, [src]);
  return exists;
}

function ImgFallback({ src, alt, filename, aspect, className, style }: { src: string; alt: string; filename: string; aspect: string; className?: string; style?: React.CSSProperties }) {
  const exists = useMediaExists(src);
  useEffect(() => {
    if (exists === false) console.warn("[Aurea] falta:", filename);
  }, [exists, filename]);
  if (exists === false) {
    return (
      <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={{ aspectRatio: aspect, ...style }}>
        falta: {filename}
      </div>
    );
  }
  if (exists === null) {
    return <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={{ aspectRatio: aspect, background: "#E6F0EE", border: "1px solid #D3E6E2", display: "grid", placeItems: "center", color: "#7AA8A6", font: "500 0.85rem DM Sans, sans-serif", ...style }}>cargando…</div>;
  }
  return <img src={src} alt={alt} className={className} style={style} loading="lazy" decoding="async" onError={() => console.warn("[Aurea] falta:", filename)} />;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);
  const [stickyVisible, setStickyVisible] = useState(false);

  // form state
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [especie, setEspecie] = useState("");
  const [motivo, setMotivo] = useState("");
  const [detalle, setDetalle] = useState("");
  const [whatsappOk, setWhatsappOk] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const hero16 = "/media/aurea-hero-16x9.png";
  const hero9 = "/media/aurea-hero-9x16.png";
  const heroVideo = "/media/aurea-hero-loop.mp4";

  const hero16Exists = useMediaExists(hero16);
  const hero9Exists = useMediaExists(hero9);
  const [videoExists, setVideoExists] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(heroVideo, { method: "HEAD" }).then(r => setVideoExists(r.ok)).catch(() => setVideoExists(false));
  }, []);

  useEffect(() => {
    if (hero16Exists === false) console.warn("[Aurea] falta:", hero16);
    if (hero9Exists === false) console.warn("[Aurea] falta:", hero9);
    if (videoExists === false) console.info("[Aurea] video opcional no encontrado:", heroVideo);
  }, [hero16Exists, hero9Exists, videoExists, hero16, hero9, heroVideo]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? scrolled / total : 0;
      setStickyVisible(pct > 0.40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!telefono.trim()) e.telefono = "Ingresa tu teléfono.";
    else {
      const digits = telefono.replace(/\D/g, "");
      if (!telefono.includes("+56") || digits.length < 11) e.telefono = "Formato: +56 9 1234 5678";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email no válido.";
    if (!especie) e.especie = "Elige especie.";
    if (!motivo) e.motivo = "Elige motivo.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      const lead = { nombre, telefono, email, especie, motivo, detalle, whatsappOk, ts: Date.now() };
      try { localStorage.setItem("aurea-lead", JSON.stringify(lead)); } catch {}
      const text = `Hola Aurea, quiero agendar: ${nombre} ${especie} ${motivo}`;
      const url = `https://wa.me/56983456721?text=${encodeURIComponent(text)}`;
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        try {
          window.open(url, "_blank");
        } catch {
          window.location.href = `mailto:hola@aurea.cl?subject=Agendar%20hora%20Aurea&body=${encodeURIComponent(text + "\n" + detalle)}`;
        }
      }, 400);
    }, 900);
  };

  const arancelRows: { prest: string; precio: string; desde?: boolean; nota: string }[] = [
    { prest: "Consulta general (30 min)", precio: "$18.900", nota: "revisión completa + receta + control" },
    { prest: "Vacuna óctuple / triple felina", precio: "$22.900", desde: true, nota: "incluye carnet + sello + desparasitación" },
    { prest: "Vacuna antirrábica", precio: "$18.900", desde: true, nota: "con certificado para inscripción" },
    { prest: "Esterilización gato/a", precio: "$89.900", desde: true, nota: "anestesia + 1 control + collar isabelino" },
    { prest: "Esterilización perro mediano (10–25 kg)", precio: "$129.900", desde: true, nota: "anestesia + 1 control + antibiótico" },
    { prest: "Limpieza dental (destartraje)", precio: "$75.900", desde: true, nota: "sin extracciones · con sedación" },
    { prest: "Consulta urgencia (fuera de hora)", precio: "$28.900", desde: true, nota: "triage + estabilización inicial" },
    { prest: "Hospitalización día", precio: "$45.000", desde: true, nota: "monitoreo + fluidos · por 24 h" },
    { prest: "Chip + inscripción Registro Nacional", precio: "$25.900", nota: "chip ISO + alta en tenencia responsable" },
    { prest: "Desparasitación interna/externa", precio: "$12.900", desde: true, nota: "pipeta o comprimido según peso" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="header-logo" href="#portada" aria-label="Aurea inicio">
            <span className="logo-aurea">Aurea<span className="dot">·</span></span>
            <span className="logo-desc">CLÍNICA VETERINARIA</span>
          </a>

          <nav className="header-nav" aria-label="Principal">
            <a href="#arancel-aurea">Arancel</a>
            <a href="#crianza-aurea">Crianza</a>
            <a href="#ficha-viva">Ficha</a>
            <a href="#planes-aurea">Planes</a>
          </nav>

          <a className="header-tel" href="tel:+56983456721" style={{ fontVariantNumeric: "tabular-nums" }}>+56 9 8345 6721</a>

          <button
            className="header-tel-icon"
            aria-label="Llamar"
            onClick={() => (window.location.href = "tel:+56983456721")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12a19.79 19.79 0 0 1-3.07-8.68A2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.72c.12 1.1.38 2.18.77 3.23a2 2 0 0 1-.57 2.11L8.09 9.14a16 16 0 0 0 6.77 6.77l1.08-1.11a2 2 0 0 1 2.11-.57c1.05.39 2.13.65 3.23.77A2 2 0 0 1 22 16.92z" /></svg>
          </button>

          <div className="header-cta">
            <a href="#hora-aurea">Agendar hora</a>
          </div>

          <button className="header-burger" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Móvil">
            <a href="#arancel-aurea" onClick={() => setMenuOpen(false)}>Arancel</a>
            <a href="#crianza-aurea" onClick={() => setMenuOpen(false)}>Crianza</a>
            <a href="#ficha-viva" onClick={() => setMenuOpen(false)}>Ficha</a>
            <a href="#planes-aurea" onClick={() => setMenuOpen(false)}>Planes</a>
            <a href="tel:+56983456721" style={{ fontVariantNumeric: "tabular-nums", color: "var(--ink)", fontWeight: 600 }}>+56 9 8345 6721</a>
          </nav>
        )}
      </header>

      <section id="portada">
        <div className="portada-left">
          <p className="kicker">CLÍNICA VETERINARIA · ÑUÑOA — DESDE 2012</p>
          <h1 className="h1">Vacunas al día, ficha en pantalla y todo por escrito.</h1>
          <p className="subhead">Revisamos, te mostramos la ficha en pantalla y te damos el presupuesto por escrito. Tú decides en casa, sin apuro.</p>

          <div className="cta-row">
            <a className="cta-primary" href="#hora-aurea">Agendar hora</a>
            <a className="cta-ghost" href="#arancel-aurea">Ver arancel</a>
          </div>

          <div className="banda" aria-label="Garantías">
            <span className="banda-item"><span className="banda-dot" />Hora exacta o reagendamos</span>
            <span className="banda-item"><span className="banda-dot" />Boleta y receta en el momento</span>
            <span className="banda-item"><span className="banda-dot" />Mismo veterinario siempre</span>
          </div>

          <p className="microcopy">Si algo cambia tras la revisión, te avisamos antes de partir. Nunca iniciamos sin tu firma.</p>
          <p className="firma">Box 01 — Aurea, Ñuñoa</p>
        </div>

        <div className="portada-right">
          <div className="media-wrap">
            {hero16Exists === false && hero9Exists === false ? (
              <div className="media-falta" data-falta="aurea-hero-16x9.png">falta: aurea-hero-16x9.png</div>
            ) : (
              <>
                {videoExists ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={hero16}
                    style={{ objectFit: "cover" }}
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                ) : null}
                <picture>
                  {hero9Exists ? <source media="(max-width: 767px)" srcSet={hero9} /> : null}
                  {hero16Exists ? <img src={hero16} alt="Bandeja esmaltada blanca con paño celeste y frasco vacuna sobre azulejo teal — Aurea" loading="eager" /> : (
                    hero9Exists ? <img src={hero9} alt="Bandeja esmaltada — Aurea" /> : null
                  )}
                  {hero16Exists === null && <div className="media-falta" data-falta="aurea-hero-16x9.png" style={{ position: "absolute", inset: 0 }}>cargando…</div>}
                </picture>
                {hero16Exists === false && hero9Exists ? <img src={hero9} alt="Bandeja esmaltada — Aurea" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : null}
              </>
            )}
            {hero16Exists === false ? <span data-falta="aurea-hero-16x9.png" style={{ display: "none" }} /> : null}
            {hero9Exists === false ? <span data-falta="aurea-hero-9x16.png" style={{ display: "none" }} /> : null}
          </div>
          <p className="caption">Bandeja 01 · esmalte + azulejo · luz pareja</p>
        </div>
      </section>

      {/* #arancel-aurea */}
      <section id="arancel-aurea" className="section-arancel">
        <div className="arancel-inner">
          <div className="arancel-header">
            <p className="kicker">ARANCEL A LA VISTA</p>
            <h2 className="h2">Precios con nombre y apellido</h2>
            <p className="arancel-intro">Cada fila es precio desde. El definitivo se confirma en box con tu mascota. Nunca por WhatsApp.</p>
          </div>
          <div className="arancel-layout">
            <div className="arancel-ficha">
              <div className="ficha-fillete" aria-hidden="true" />
              <div className="ficha-rows">
                {arancelRows.map((r) => (
                  <div key={r.prest} className="arancel-row">
                    <div className="arancel-row-main">
                      <span className="arancel-prest">{r.prest}</span>
                      <span className="arancel-precio">
                        {r.desde && <span className="arancel-desde">desde </span>}
                        {r.precio}
                      </span>
                    </div>
                    <span className="arancel-nota-hover">{r.nota}</span>
                  </div>
                ))}
              </div>
              <p className="arancel-nota-pie">Valores referenciales; se confirma tras evaluación en box. Sin sorpresas. Boleta para reembolso si tu seguro la cubre.</p>
            </div>
            <aside className="arancel-aside">
              <div className="aside-card">
                <h3 className="aside-title">¿Urgencia hoy?</h3>
                <p className="aside-text">Triage el mismo día según cupo. Llámanos y te damos hora real, no ‘te llamamos’.</p>
                <a className="aside-tel" href="tel:+56983456721">+56 9 8345 6721</a>
                <a className="cta-primary aside-cta" href="#hora-aurea">Agendar hora</a>
                <p className="aside-micro">Receta y boleta en el momento · Control 7 días incluido en cirugías</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* #crianza-aurea */}
      <section id="crianza-aurea" className="section-crianza">
        <div className="crianza-inner">
          <div className="crianza-left">
            <div className="crianza-media-wrap">
              <ImgFallback src="/media/aurea-interior-16x9.png" alt="Box vacío Aurea con azulejo teal pálido, bandeja esmaltada con paño y frasco alineado, mesada lavable" filename="aurea-interior-16x9.png" aspect="4/3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <p className="caption" style={{ textAlign: "right", marginTop: "8px" }}>Box 02 · azulejo + esmalte · Ñuñoa</p>
          </div>
          <div className="crianza-right">
            <p className="kicker">PRIMER CONTROL</p>
            <h2 className="h2">45 minutos para dejar el calendario claro</h2>
            <p className="crianza-intro">No es vacuna express. Es una cita para armar el calendario de tu cachorro o gatito sin venderte de más.</p>
            <div className="crianza-pasos">
              <div className="crianza-paso">
                <span className="crianza-num">01 · Revisión y peso</span>
                <p className="crianza-text">Examen completo, peso, piel y dientes de leche. Ves la ficha en pantalla.</p>
              </div>
              <div className="crianza-paso">
                <span className="crianza-num">02 · Calendario en simple</span>
                <p className="crianza-text">Qué vacuna va ahora, cuál espera y qué no hace falta. Preguntas todo.</p>
              </div>
              <div className="crianza-paso">
                <span className="crianza-num">03 · Carnet por escrito</span>
                <p className="crianza-text">Hoja con fechas, dosis y recordatorio por WhatsApp. Decides en casa.</p>
              </div>
            </div>
            <ul className="crianza-checks">
              <li><span className="chk">✓</span> Carnet timbrado</li>
              <li><span className="chk">✓</span> Calendario impreso</li>
              <li><span className="chk">✓</span> Recordatorio WhatsApp</li>
              <li><span className="chk">✓</span> Control 14 días</li>
            </ul>
            <p className="crianza-precio">Control cachorro/gatito $22.900 — se abona al plan si sigues.</p>
          </div>
        </div>
      </section>

      {/* #ficha-viva */}
      <section id="ficha-viva" className="section-ficha">
        <div className="ficha-inner">
          <p className="kicker">CÓMO TE ATENDEMOS</p>
          <h2 className="h2">Mismo veterinario, misma ficha, siempre.</h2>
          <p className="ficha-intro">No rotamos tu caso. Cada control lo sigue quien lo vio primero. La ficha es una sola y la ves en pantalla.</p>

          <div className="ficha-tabla-wrap">
            <div className="ficha-tabla">
              <div className="ficha-head">
                <div></div>
                <div>CONSULTA GENERAL</div>
                <div>URGENCIA</div>
                <div>CIRUGÍA</div>
              </div>
              <div className="ficha-row">
                <div className="ficha-label">Cómo funciona</div>
                <div>Hora agendada 30 min</div>
                <div>Triage + estabilización</div>
                <div>Evaluación + presupuesto escrito</div>
              </div>
              <div className="ficha-row">
                <div className="ficha-label">Qué traes</div>
                <div>Carnet + antecedentes</div>
                <div>Carnet si lo tienes</div>
                <div>Ayuno 8 h + exámenes</div>
              </div>
              <div className="ficha-row">
                <div className="ficha-label">Seguimiento</div>
                <div>Control 14 días incluido</div>
                <div>Alta con receta y control</div>
                <div>Control 7 días + retiro puntos</div>
              </div>
              <div className="ficha-row">
                <div className="ficha-label">Facilidades</div>
                <div>3 cuotas sin interés</div>
                <div>Pago al alta</div>
                <div>Hasta 6 cuotas s/i</div>
              </div>
            </div>
            {/* mobile cards */}
            <div className="ficha-cards-mobile">
              <div className="ficha-card">
                <div className="ficha-card-head">CONSULTA GENERAL</div>
                <div className="ficha-card-body">
                  <p><strong>Cómo funciona:</strong> Hora agendada 30 min</p>
                  <p><strong>Qué traes:</strong> Carnet + antecedentes</p>
                  <p><strong>Seguimiento:</strong> Control 14 días incluido</p>
                  <p><strong>Facilidades:</strong> 3 cuotas sin interés</p>
                </div>
              </div>
              <div className="ficha-card">
                <div className="ficha-card-head">URGENCIA</div>
                <div className="ficha-card-body">
                  <p><strong>Cómo funciona:</strong> Triage + estabilización</p>
                  <p><strong>Qué traes:</strong> Carnet si lo tienes</p>
                  <p><strong>Seguimiento:</strong> Alta con receta y control</p>
                  <p><strong>Facilidades:</strong> Pago al alta</p>
                </div>
              </div>
              <div className="ficha-card">
                <div className="ficha-card-head">CIRUGÍA</div>
                <div className="ficha-card-body">
                  <p><strong>Cómo funciona:</strong> Evaluación + presupuesto escrito</p>
                  <p><strong>Qué traes:</strong> Ayuno 8 h + exámenes</p>
                  <p><strong>Seguimiento:</strong> Control 7 días + retiro puntos</p>
                  <p><strong>Facilidades:</strong> Hasta 6 cuotas s/i</p>
                </div>
              </div>
            </div>
            <p className="ficha-nota">Cirugías solo con exámenes previos. Te damos presupuesto por escrito antes de agendar.</p>
          </div>

          <div className="ficha-acordeon">
            {[
              { q: "¿Atienden sin hora?", a: "Solo urgencias por triage. Para control general agenda y te damos hora exacta, no ventana de 3 horas." },
              { q: "¿Hacen domicilio?", a: "Sí, para vacunas y controles sanos en Ñuñoa/Providencia. Cirugía y urgencia solo en clínica." },
              { q: "¿Cuotas?", a: "Tarjeta hasta 6 cuotas sin interés. Total por escrito. Sin letra chica." },
            ].map((item, i) => (
              <div key={item.q} className={`acc-item ${accordionOpen === i ? "open" : ""}`}>
                <button className="acc-trigger" onClick={() => setAccordionOpen(accordionOpen === i ? null : i)} aria-expanded={accordionOpen === i}>
                  <span>{item.q}</span>
                  <span className="acc-chevron" aria-hidden="true">›</span>
                </button>
                <div className="acc-body">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* #planes-aurea */}
      <section id="planes-aurea" className="section-planes">
        <div className="planes-inner">
          <p className="kicker">LO QUE HACEMOS BIEN</p>
          <h2 className="h2">Cuatro planes, el mismo equipo siempre</h2>
          <p className="planes-sub">No rotamos tu caso. Cada plan lo sigue quien lo diagnosticó.</p>
          <div className="planes-grid">
            <article className="plan-card">
              <div className="plan-media" style={{ aspectRatio: "1/1" }}>
                <ImgFallback src="/media/aurea-tile-01-1x1.png" alt="Bandeja esmaltada blanca vacía con paño celeste doblado y sello redondo teal sobre azulejo teal pálido" filename="aurea-tile-01-1x1.png" aspect="1/1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">01</span>
                <h3 className="plan-title">Plan cachorro / gatito</h3>
                <p className="plan-desc">Calendario de vacunas, desparasitación y controles hasta el año.</p>
                <span className="plan-meta">Desde $22.900 por control</span>
              </div>
            </article>
            <article className="plan-card">
              <div className="plan-media" style={{ aspectRatio: "3/4" }}>
                <ImgFallback src="/media/aurea-tile-02-3x4.png" alt="Frasco vacuna vidrio + jeringa alineados sobre esmalte blanco con reborde teal, paño celeste al lado" filename="aurea-tile-02-3x4.png" aspect="3/4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">02</span>
                <h3 className="plan-title">Esterilización</h3>
                <p className="plan-desc">Gato desde $89.900, perro mediano desde $129.900. Con control incluido.</p>
                <span className="plan-meta">Desde $89.900 · 1 control</span>
              </div>
            </article>
            <article className="plan-card">
              <div className="plan-media" style={{ aspectRatio: "1/1" }}>
                <ImgFallback src="/media/aurea-tile-03-1x1.png" alt="Instrumental dental inox alineado milimétrico sobre bandeja esmaltada, paño celeste enrollado al borde, azulejo atrás" filename="aurea-tile-03-1x1.png" aspect="1/1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">03</span>
                <h3 className="plan-title">Limpieza dental</h3>
                <p className="plan-desc">Destartraje con sedación monitoreada. Sin extracciones incluidas.</p>
                <span className="plan-meta">Desde $75.900</span>
              </div>
            </article>
            <article className="plan-card">
              <div className="plan-media" style={{ aspectRatio: "3/4" }}>
                <ImgFallback src="/media/aurea-tile-04-3x4.png" alt="Paño celeste doblado perfecto + placa esmaltada redonda sobre bandeja blanca, borde teal visible" filename="aurea-tile-04-3x4.png" aspect="3/4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">04</span>
                <h3 className="plan-title">Chequeo anual + vacunas</h3>
                <p className="plan-desc">Examen, vacunas al día y carnet timbrado. Recordatorio por WhatsApp.</p>
                <span className="plan-meta">Desde $22.900</span>
              </div>
            </article>
          </div>
          <p className="planes-prueba">+12 años en Ñuñoa · +8.200 pacientes · 97% nos recomienda · 3 veterinarios fijos</p>
        </div>
      </section>

      {/* #hora-aurea */}
      <section id="hora-aurea" className="section-hora">
        <div className="hora-inner">
          <div className="hora-left">
            <div className="hora-form-card">
              <p className="kicker">AGENDA</p>
              <h2 className="h2">Agenda el control. Te responden hoy.</h2>
              <p className="hora-sub">Elige día y te confirmamos por WhatsApp el mismo día. Si es urgencia, llama directo.</p>
              <form className="aurea-form" onSubmit={handleSubmit} noValidate>
                <label className="form-label">Nombre
                  <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className={errors.nombre ? "input-error" : ""} required />
                  {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                </label>
                <label className="form-label">Teléfono
                  <input type="tel" placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} className={errors.telefono ? "input-error" : ""} required />
                  {errors.telefono && <span className="field-error">{errors.telefono}</span>}
                </label>
                <label className="form-label">Email
                  <input type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? "input-error" : ""} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </label>
                <label className="form-label">Especie
                  <select value={especie} onChange={(e) => setEspecie(e.target.value)} className={errors.especie ? "input-error" : ""} required>
                    <option value="">Selecciona</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Otro</option>
                  </select>
                  {errors.especie && <span className="field-error">{errors.especie}</span>}
                </label>
                <label className="form-label">Motivo
                  <select value={motivo} onChange={(e) => setMotivo(e.target.value)} className={errors.motivo ? "input-error" : ""} required>
                    <option value="">Selecciona</option>
                    <option>Control / vacuna</option>
                    <option>Consulta general</option>
                    <option>Urgencia</option>
                    <option>Esterilización</option>
                    <option>Dental</option>
                    <option>Otro</option>
                  </select>
                  {errors.motivo && <span className="field-error">{errors.motivo}</span>}
                </label>
                <label className="form-label full">Detalle
                  <textarea rows={3} placeholder="Cuéntanos en una línea: especie, edad, motivo" value={detalle} onChange={(e) => setDetalle(e.target.value)} />
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" checked={whatsappOk} onChange={(e) => setWhatsappOk(e.target.checked)} />
                  <span>Acepto que me contacten por WhatsApp</span>
                </label>
                {success && <div className="form-success">Te escribimos hoy · revisa tu WhatsApp</div>}
                <button type="submit" className="cta-primary form-cta" disabled={loading}>
                  {loading ? "Enviando…" : "Agendar hora"}
                </button>
              </form>
            </div>
          </div>
          <div className="hora-right">
            <a className="hora-tel" href="tel:+56983456721">+56 9 8345 6721</a>
            <a className="hora-email" href="mailto:hola@aurea.cl">hola@aurea.cl</a>
            <p className="hora-dir">Av. Irarrázaval 2420, Ñuñoa, Santiago</p>
            <p className="hora-horario">Lun–Vie 9:00–19:30 · Sáb 10:00–14:00 · Urgencia 24h triage</p>
            <div className="hora-indice">
              <span className="hora-dot" />
              <span>Metro Ñuñoa · 4 min a pie</span>
            </div>
            <div className="hora-proof-wrap">
              <ImgFallback src="/media/aurea-proof-16x9.png" alt="Box Aurea vacío con azulejo teal y bandeja esmaltada vista ancha, mesada y muro azulejo 10×10" filename="aurea-proof-16x9.png" aspect="16/9" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <p className="hora-confianza">Receta y boleta en el momento · Chip con inscripción · Controles con recordatorio</p>
          </div>
        </div>
        <div className="hora-footer">
          <p className="footer-line">Aurea SpA · Av. Irarrázaval 2420, Ñuñoa · hola@aurea.cl · +56 9 8345 6721</p>
          <p className="footer-sub">© 2026 Aurea. Todos los derechos reservados. Valores referenciales.</p>
        </div>
      </section>

      <div className={`sticky-cta ${stickyVisible ? "visible" : ""}`} aria-hidden={!stickyVisible}>
        <a className="cta-primary sticky-btn" href="#hora-aurea">Agendar hora</a>
      </div>
    </>
  );
}
