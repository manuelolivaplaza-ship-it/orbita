import { useEffect, useState } from "react";

function HeroMedia() {
  const [missing16, setMissing16] = useState(false);
  const [missingVideo, setMissingVideo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    fetch("/media/vega-hero-loop.mp4", { method: "HEAD" }).then((r) => {
      if (r.ok) setShowVideo(true);
      else setMissingVideo(true);
    }).catch(() => setMissingVideo(true));
    if (missingVideo) {
      console.warn("[VEGA] falta: vega-hero-loop.mp4");
    }
  }, [missingVideo]);

  return (
    <>
      <div className="media-frame">
        {!missing16 ? (
          <>
            <picture>
              <source media="(max-width: 767px)" srcSet="/media/vega-hero-9x16.png" />
              <img
                src="/media/vega-hero-16x9.png"
                alt="Bandeja acero inox mate con paño verde quirúrgico doblado y frasco ámbar + jeringa sobre acero, vidrio nocturno"
                loading="eager"
                decoding="async"
                onError={() => {
                  setMissing16(true);
                  console.warn("[VEGA] falta: vega-hero-16x9.png");
                  console.warn("[VEGA] falta: vega-hero-9x16.png");
                }}
              />
            </picture>
            {showVideo && !missingVideo && (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/media/vega-hero-16x9.png"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                onError={() => setMissingVideo(true)}
              >
                <source src="/media/vega-hero-loop.mp4" type="video/mp4" />
              </video>
            )}
          </>
        ) : (
          <div
            className="media-falta"
            data-falta="vega-hero-16x9.png"
            style={{
              aspectRatio: "16/9",
              background: "#0F1B18",
              border: "1px solid #1E2E2A",
              display: "grid",
              placeItems: "center",
              color: "#6B8A82",
              font: "500 0.85rem Figtree, sans-serif",
            }}
          >
            falta: vega-hero-16x9.png
          </div>
        )}
      </div>
      <p className="media-caption">Acero 01 · paño verde + frasco ámbar · vidrio nocturno</p>
    </>
  );
}

function ImgFallback({ src, alt, filename, aspect, className, style }: { src: string; alt: string; filename: string; aspect: string; className?: string; style?: React.CSSProperties }) {
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    // also HEAD check to log if missing upfront
    fetch(src, { method: "HEAD" }).then((r) => {
      if (!r.ok) console.warn(`[VEGA] falta: ${filename}`);
    }).catch(() => console.warn(`[VEGA] falta: ${filename}`));
  }, [src, filename]);
  if (missing) {
    return (
      <div
        className={`media-falta ${className ?? ""}`}
        data-falta={filename}
        style={{
          aspectRatio: aspect,
          background: "#0F1B18",
          border: "1px solid #1E2E2A",
          display: "grid",
          placeItems: "center",
          color: "#6B8A82",
          font: "500 0.85rem Figtree, sans-serif",
          ...style,
        }}
      >
        falta: {filename}
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
        setMissing(true);
        console.warn(`[VEGA] falta: ${filename}`);
      }}
    />
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);
  // form state
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [especie, setEspecie] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [whatsappOk, setWhatsappOk] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const check = async () => {
      try {
        const r16 = await fetch("/media/vega-hero-16x9.png", { method: "HEAD" });
        if (!r16.ok) console.warn("[VEGA] falta: vega-hero-16x9.png");
      } catch { console.warn("[VEGA] falta: vega-hero-16x9.png"); }
      try {
        const r9 = await fetch("/media/vega-hero-9x16.png", { method: "HEAD" });
        if (!r9.ok) console.warn("[VEGA] falta: vega-hero-9x16.png");
      } catch { console.warn("[VEGA] falta: vega-hero-9x16.png"); }
    };
    check();
  }, []);

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
    else if (!/^\+?56\s?9\s?\d{4}\s?\d{4}$/.test(telefono.replace(/\s/g, "").replace(/-/g, "")) && !/^\+569\d{8}$/.test(telefono.replace(/\s/g, ""))) {
      // permissive pattern for +56 9
      const cleaned = telefono.replace(/\s/g, "");
      if (!cleaned.includes("9") || cleaned.replace(/\D/g, "").length < 11) e.telefono = "Formato: +56 9 7421 8800";
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
      const lead = { nombre, telefono, email, especie, motivo, mensaje, whatsappOk, ts: Date.now() };
      try { localStorage.setItem("vega-lead", JSON.stringify(lead)); } catch {}
      const text = `Hola VEGA quiero agendar: ${nombre} ${especie} ${motivo}`;
      const url = `https://wa.me/56974218800?text=${encodeURIComponent(text)}`;
      setLoading(false);
      setSuccess(true);
      // open whatsapp or fallback mailto after short delay
      setTimeout(() => {
        try {
          window.open(url, "_blank");
        } catch {
          window.location.href = `mailto:hola@vega.cl?subject=Agendar%20hora%20VEGA&body=${encodeURIComponent(text + "\n" + mensaje)}`;
        }
      }, 400);
    }, 900);
  };

  const arancelRows: { prest: string; precio: string; desde?: boolean; nota: string }[] = [
    { prest: "Consulta general (30 min)", precio: "$19.900", nota: "revisión completa + receta + control 14 días" },
    { prest: "Vacuna óctuple / triple felina", precio: "$23.900", desde: true, nota: "incluye carnet + sello + desparasitación" },
    { prest: "Vacuna antirrábica", precio: "$19.900", desde: true, nota: "con certificado para Registro Nacional" },
    { prest: "Esterilización gato/a", precio: "$94.900", desde: true, nota: "anestesia + 1 control + collar isabelino" },
    { prest: "Esterilización perro mediano (10–25 kg)", precio: "$139.900", desde: true, nota: "anestesia + 1 control + antibiótico" },
    { prest: "Limpieza dental (destartraje)", precio: "$79.900", desde: true, nota: "sin extracciones · con sedación" },
    { prest: "Consulta urgencia 24H (triage)", precio: "$29.900", desde: true, nota: "estabilización inicial + presupuesto escrito" },
    { prest: "Hospitalización 24 h", precio: "$48.000", desde: true, nota: "monitoreo + fluidos · por día" },
    { prest: "Chip + inscripción Registro Nacional", precio: "$26.900", nota: "chip ISO + alta en tenencia responsable" },
    { prest: "Radiografía / ecografía", precio: "$34.900", desde: true, nota: "informe impreso + digital" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="vega-wrap vega-grid header-grid">
          <div className="logo-wrap">
            <a className="logo" href="#" aria-label="VEGA — inicio">
              <span className="logo-mark">VEGA</span>
              <span className="logo-dot">·</span>
            </a>
            <span className="logo-sub">CLÍNICA VETERINARIA · ÑUÑOA</span>
          </div>

          <nav className="nav" aria-label="Principal">
            <a href="#arancel-vet">Arancel</a>
            <a href="#especies">Especies</a>
            <a href="#vacunas-plan">Vacunas</a>
            <a href="#hospital-vela">Hospital</a>
          </nav>

          <button
            className="menu-btn"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="tel-wrap">
            <a className="tel-link" href="tel:+56974218800" aria-label="Llamar +56 9 7421 8800">
              <svg className="tel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.39 2.39.82 3.52a2 2 0 0 1-.57 2.11L8.09 10.62a16.05 16.05 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.57c1.13.43 2.31.7 3.52.82A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="tel-number">+56 9 7421 8800</span>
              <span className="badge-24h">24H</span>
            </a>
          </div>

          <div className="cta-header-wrap">
            <a className="cta-header" href="#hora-vet">
              Agendar hora
            </a>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="mobile-nav"
            style={{
              position: "absolute",
              top: "60px",
              left: 0,
              right: 0,
              background: "rgba(7,14,12,0.98)",
              borderBottom: "1px solid var(--linea)",
              padding: "16px var(--gutter)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              zIndex: 31,
            }}
          >
            <a href="#arancel-vet" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "0.95rem", color: "#EAF0ED" }}>Arancel</a>
            <a href="#especies" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "0.95rem", color: "#EAF0ED" }}>Especies</a>
            <a href="#vacunas-plan" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "0.95rem", color: "#EAF0ED" }}>Vacunas</a>
            <a href="#hospital-vela" onClick={() => setMenuOpen(false)} style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "0.95rem", color: "#EAF0ED" }}>Hospital</a>
          </nav>
        )}
      </header>

      <section id="guardia" className="hero">
        <div className="vega-wrap vega-grid hero-grid">
          <div className="hero-copy">
            <p className="kicker">
              <span className="kicker-dot" aria-hidden="true" />
              GUARDIA NOCTURNA · ÑUÑOA — AV. IRARRÁZAVAL 2420
            </p>

            <h1 className="hero-h1">
              Urgencia real, sin vueltas, toda la <span className="ul-accent">noche</span>.
            </h1>

            <p className="subhead">
              Box iluminado, teléfono que contesta y presupuesto por escrito antes de tocar. Si no es urgencia, te lo decimos.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="tel:+56974218800">
                Llamar urgencia 24H
              </a>
              <a className="btn btn-ghost" href="#hora-vet">
                Agendar hora
              </a>
            </div>

            <div className="banda" aria-label="Compromisos">
              <span>Triaje en 15 min</span>
              <span className="sep" aria-hidden="true">·</span>
              <span>Boleta + receta al alta</span>
              <span className="sep" aria-hidden="true">·</span>
              <span>Mismo equipo toda la noche</span>
            </div>

            <p className="micro-copy">
              Si cambia algo tras revisar, te llamamos antes de avanzar. Nada parte sin tu ok por escrito.
            </p>

            <div className="urgencia-card">
              <p className="urgencia-title">¿Ahora? Llama directo</p>
              <a className="urgencia-tel" href="tel:+56974218800">
                +56 9 7421 8800
              </a>
              <p className="urgencia-micro">Tiempo medio de respuesta: &lt;2 min</p>
            </div>

            <p className="firma">Box 01 · guardia · luz 5600K</p>
          </div>

          <div className="hero-media">
            <HeroMedia />
          </div>
        </div>
      </section>

      {/* #arancel-vet */}
      <section id="arancel-vet" className="vega-section-arancel">
        <div className="vega-wrap vega-grid">
          <div className="arancel-header">
            <p className="kicker">ARANCEL A LA VISTA</p>
            <h2 className="h2">Precios con nombre y apellido</h2>
            <p className="intro">Cada fila es precio desde. El definitivo se confirma en box con tu mascota. Nunca por WhatsApp.</p>
          </div>

          <div className="arancel-layout">
            <div className="indicator-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="ficha-panel">
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
                    <span className="arancel-nota">{r.nota}</span>
                  </div>
                ))}
              </div>
              <p className="arancel-nota-pie">Valores referenciales; se confirma tras evaluación en box. Sin sorpresas. Boleta para reembolso si tu seguro la cubre. Hasta 6 cuotas sin interés.</p>
            </div>

            <aside className="arancel-aside">
              <div className="aside-card">
                <h3 className="aside-title">¿Es urgencia ahora?</h3>
                <p className="aside-text">Llama directo. Triaje el mismo día según cupo. Te damos hora real, no ‘te llamamos’.</p>
                <div className="aside-tel-row">
                  <span className="aside-tel">+56 9 7421 8800</span>
                  <span className="badge-24h">24H</span>
                </div>
                <a className="btn btn-primary aside-cta" href="tel:+56974218800">Llamar ahora</a>
                <a className="btn btn-ghost aside-cta-ghost" href="#hora-vet">Agendar hora</a>
                <p className="aside-micro">Receta y boleta al alta · Control 7 días incluido en cirugías</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* #especies */}
      <section id="especies" className="vega-section-especies">
        <div className="vega-wrap">
          <p className="kicker">ESPECIES</p>
          <h2 className="h2">Perro y gato, todo. Exóticos con agenda.</h2>
          <p className="intro">Mismo box, mismo protocolo, ficha única. Exóticos solo con veterinario de turno agendado.</p>

          <div className="especies-grid">
            {/* Card 01 perro 1:1 */}
            <article className="especie-card">
              <div className="especie-media" style={{ aspectRatio: "1/1" }}>
                <ImgFallback src="/media/vega-tile-01-1x1.png" alt="Paño verde doblado + correa trenzada sobre acero" filename="vega-tile-01-1x1.png" aspect="1/1" style={{ width: "100%", height: "100%", objectFit: "cover", border: "1px solid #1E2E2A" }} />
              </div>
              <h3 className="card-title">Perro — todas las edades</h3>
              <p className="card-text">Vacunas, esterilización, dental, trauma y hospitalización. Control mensual cachorro.</p>
              <ul className="card-bullets">
                <li><span className="dot" /> Consulta $19.900</li>
                <li><span className="dot" /> Vacuna desde $23.900</li>
              </ul>
            </article>

            {/* Card 02 gato 3:4 */}
            <article className="especie-card">
              <div className="especie-media" style={{ aspectRatio: "3/4" }}>
                <ImgFallback src="/media/vega-tile-02-3x4.png" alt="Frasco ámbar + jeringa estéril a 15mm" filename="vega-tile-02-3x4.png" aspect="3/4" style={{ width: "100%", height: "100%", objectFit: "cover", border: "1px solid #1E2E2A" }} />
              </div>
              <h3 className="card-title">Gato — indoor y mestizo</h3>
              <p className="card-text">Triple felina, leucemia, esterilización temprana, dental y hospital sin jaulas a la vista.</p>
              <ul className="card-bullets">
                <li><span className="dot" /> Esterilización desde $94.900</li>
                <li><span className="dot" /> Chip $26.900</li>
              </ul>
            </article>

            {/* Card 03 exóticos 1:1 */}
            <article className="especie-card">
              <div className="especie-media" style={{ aspectRatio: "1/1" }}>
                <ImgFallback src="/media/vega-tile-03-1x1.png" alt="Pinza + gasa verde sobre bandeja acero" filename="vega-tile-03-1x1.png" aspect="1/1" style={{ width: "100%", height: "100%", objectFit: "cover", border: "1px solid #1E2E2A" }} />
              </div>
              <h3 className="card-title">Exóticos — con reserva</h3>
              <p className="card-text">Conejos, hamsters y aves. Solo con agenda y ayuno indicado. No atendemos reptiles.</p>
              <ul className="card-bullets">
                <li><span className="dot" /> Consulta exóticos $24.900</li>
                <li><span className="dot" /> Con hora, no por orden</li>
              </ul>
            </article>
          </div>

          <p className="nota-alerta">Si tu mascota es urgencia ahora, llama. No esperes al formulario.</p>
        </div>
      </section>

      {/* #vacunas-plan */}
      <section id="vacunas-plan" className="vega-section-vacunas">
        <div className="vega-wrap vega-grid vacunas-grid">
          <div className="vacunas-media">
            <div style={{ border: "1px solid #1E2E2A", overflow: "hidden", aspectRatio: "4/3", background: "#0F1B18" }}>
              <ImgFallback src="/media/vega-interior-16x9.png" alt="Box clínico nocturno vacío Ñuñoa" filename="vega-interior-16x9.png" aspect="4/3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <p className="media-caption" style={{ textAlign: "right" }}>Box 02 · Ñuñoa · luz 5600K</p>
          </div>

          <div className="vacunas-copy">
            <p className="kicker">CALENDARIO</p>
            <h2 className="h2">El plan en 4 pasos, por escrito.</h2>
            <p className="intro">No es vacuna express. Es una cita para dejar el calendario claro y que decidas en casa.</p>

            <div className="timeline">
              <div className="tl-line" aria-hidden="true" />
              <div className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <span className="tl-num">01 · Revisión y peso</span>
                <p className="tl-text">Examen completo, piel y dientes. Ves la ficha en pantalla. 20 min.</p>
              </div>
              <div className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <span className="tl-num">02 · Vacuna que toca hoy</span>
                <p className="tl-text">Óctuple/triple según edad. Sello y carnet al tiro.</p>
              </div>
              <div className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <span className="tl-num">03 · Lo que espera</span>
                <p className="tl-text">Antirrábica y refuerzos con fecha exacta. Nada por si acaso.</p>
              </div>
              <div className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <span className="tl-num">04 · Recordatorio</span>
                <p className="tl-text">WhatsApp 48 h antes. Reagendas sin costo con 12 h de aviso.</p>
              </div>
            </div>

            <p className="precio-inline">Consulta + vacuna desde $23.900 — carnet timbrado incluido.</p>

            <ul className="checklist">
              <li><span className="chk">✓</span> Carnet timbrado</li>
              <li><span className="chk">✓</span> Calendario impreso</li>
              <li><span className="chk">✓</span> Recordatorio WhatsApp</li>
              <li><span className="chk">✓</span> Control 14 días</li>
            </ul>
          </div>
        </div>
      </section>

      {/* #hospital-vela */}
      <section id="hospital-vela" className="vega-section-hospital">
        <div className="vega-wrap">
          <p className="kicker">HOSPITAL</p>
          <h2 className="h2">Hospitalización que puedes visitar.</h2>
          <p className="intro" style={{ maxWidth: "56ch" }}>No es bodega con jaulas. Es sala climatizada, monitoreo y visitas con hora.</p>

          <div className="hospital-table">
            <div className="hosp-head">
              <div></div>
              <div>HOSPITAL DÍA</div>
              <div>HOSPITAL 24H</div>
              <div>VISITAS</div>
            </div>
            <div className="hosp-row">
              <div className="hosp-label">Cómo funciona</div>
              <div>Monitoreo + fluidos 8 h</div>
              <div>Monitoreo continuo + informe</div>
              <div>Con hora, 30 min</div>
            </div>
            <div className="hosp-row">
              <div className="hosp-label">Qué incluye</div>
              <div>Control signos + receta</div>
              <div>Todo lo anterior + exámenes</div>
              <div>Sala limpia, sin jaula a la vista</div>
            </div>
            <div className="hosp-row">
              <div className="hosp-label">Desde CLP</div>
              <div><strong>$48.000 / día</strong></div>
              <div><strong>$68.000 / 24 h</strong></div>
              <div>sin costo</div>
            </div>
            <div className="hosp-row">
              <div className="hosp-label">Horario</div>
              <div>09:00–21:00</div>
              <div>24 h</div>
              <div>16:00–19:00 con reserva</div>
            </div>
          </div>

          {/* mobile cards fallback via CSS */}
          <div className="hospital-cards-mobile" aria-hidden="true">
            <div className="h-card">
              <div className="h-card-head">HOSPITAL DÍA</div>
              <div className="h-card-body">
                <p><strong>Cómo funciona:</strong> Monitoreo + fluidos 8 h</p>
                <p><strong>Qué incluye:</strong> Control signos + receta</p>
                <p><strong>Desde CLP:</strong> $48.000 / día</p>
                <p><strong>Horario:</strong> 09:00–21:00</p>
              </div>
            </div>
            <div className="h-card">
              <div className="h-card-head">HOSPITAL 24H</div>
              <div className="h-card-body">
                <p><strong>Cómo funciona:</strong> Monitoreo continuo + informe</p>
                <p><strong>Qué incluye:</strong> Todo lo anterior + exámenes</p>
                <p><strong>Desde CLP:</strong> $68.000 / 24 h</p>
                <p><strong>Horario:</strong> 24 h</p>
              </div>
            </div>
            <div className="h-card">
              <div className="h-card-head">VISITAS</div>
              <div className="h-card-body">
                <p><strong>Cómo funciona:</strong> Con hora, 30 min</p>
                <p><strong>Qué incluye:</strong> Sala limpia, sin jaula a la vista</p>
                <p><strong>Desde CLP:</strong> sin costo</p>
                <p><strong>Horario:</strong> 16:00–19:00 con reserva</p>
              </div>
            </div>
          </div>

          <p className="arancel-nota-pie" style={{ marginTop: "10px", fontFamily: "Figtree", fontSize: "0.78rem", color: "#6B8A82" }}>Alta con receta y control 24 h incluido. Te llamamos si cambia el plan.</p>

          <div className="acordeon">
            {[
              { q: "¿Puedo visitar?", a: "Sí, con hora entre 16:00 y 19:00. 30 min, sala limpia. No entras a sala técnica." },
              { q: "¿Me avisan si sube la cuenta?", a: "Siempre. Presupuesto por escrito y aviso previo. Nada parte sin tu firma." },
              { q: "¿Queda solo de noche?", a: "No. Turno nocturno con técnico + veterinario de llamado. Teléfono contesta." },
            ].map((item, i) => (
              <div key={item.q} className={`acc-item ${accordionOpen === i ? "open" : ""}`}>
                <button className="acc-trigger" onClick={() => setAccordionOpen(accordionOpen === i ? null : i)} aria-expanded={accordionOpen === i}>
                  <span>{item.q}</span>
                  <span className="chevron" aria-hidden="true">‹</span>
                </button>
                <div className="acc-body">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hospital-media vega-grid" style={{ marginTop: "16px" }}>
            <div style={{ gridColumn: "1 / span 8", border: "1px solid #1E2E2A", overflow: "hidden", aspectRatio: "16/9", background: "#0F1B18" }}>
              <ImgFallback src="/media/vega-proof-16x9.png" alt="Sala hospitalización acero + vidrio luz fría" filename="vega-proof-16x9.png" aspect="16/9" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ gridColumn: "9 / span 4", border: "1px solid #1E2E2A", overflow: "hidden", aspectRatio: "3/4", background: "#0F1B18" }}>
              <ImgFallback src="/media/vega-tile-04-3x4.png" alt="Detalle bandeja suero + línea fluido" filename="vega-tile-04-3x4.png" aspect="3/4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <p className="media-caption" style={{ textAlign: "right" }}>Sala 01 · acero + vidrio · luz fría</p>
        </div>
      </section>

      {/* #hora-vet */}
      <section id="hora-vet" className="vega-section-hora">
        <div className="vega-wrap vega-grid hora-grid">
          <div className="hora-form-wrap">
            <div className="form-panel">
              <div className="indicator-dots" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <span /><span /><span />
              </div>
              <p className="kicker">AGENDA</p>
              <h2 className="h2" style={{ maxWidth: "16ch" }}>Agenda hoy. Te responden antes de las 21:00.</h2>
              <p className="intro" style={{ maxWidth: "36ch", color: "#9AAFA8" }}>Elige especie y motivo. Te confirmamos por WhatsApp con hora exacta, no ventana.</p>

              <form className="vega-form" onSubmit={handleSubmit} noValidate>
                <label className="form-label">Nombre
                  <input type="text" placeholder="Nombre y apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} className={errors.nombre ? "input-error" : ""} required />
                  {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                </label>

                <label className="form-label">Teléfono
                  <input type="tel" placeholder="+56 9 7421 8800" value={telefono} onChange={(e) => setTelefono(e.target.value)} className={errors.telefono ? "input-error" : ""} required />
                  {errors.telefono && <span className="field-error">{errors.telefono}</span>}
                </label>

                <label className="form-label">Email
                  <input type="email" placeholder="hola@..." value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? "input-error" : ""} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </label>

                <label className="form-label">Especie
                  <select value={especie} onChange={(e) => setEspecie(e.target.value)} className={errors.especie ? "input-error" : ""} required>
                    <option value="">Selecciona</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Exótico</option>
                    <option>Otro</option>
                  </select>
                  {errors.especie && <span className="field-error">{errors.especie}</span>}
                </label>

                <label className="form-label">Motivo
                  <select value={motivo} onChange={(e) => setMotivo(e.target.value)} className={errors.motivo ? "input-error" : ""} required>
                    <option value="">Selecciona</option>
                    <option>Consulta general</option>
                    <option>Vacuna</option>
                    <option>Esterilización</option>
                    <option>Urgencia</option>
                    <option>Hospitalización</option>
                    <option>Otro</option>
                  </select>
                  {errors.motivo && <span className="field-error">{errors.motivo}</span>}
                </label>

                <label className="form-label" style={{ gridColumn: "1 / -1" }}>Mensaje
                  <textarea rows={3} placeholder="Cuéntanos peso y síntomas si es urgencia" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                </label>

                <label className="checkbox-row">
                  <input type="checkbox" checked={whatsappOk} onChange={(e) => setWhatsappOk(e.target.checked)} />
                  <span>Quiero recordatorio por WhatsApp</span>
                </label>

                {success && <div className="form-success">Te escribimos hoy · revisa tu WhatsApp ✓</div>}

                <button type="submit" className="btn btn-primary form-cta" disabled={loading}>
                  {loading ? "Enviando…" : "Agendar hora"}
                </button>
                <a className="btn btn-ghost form-ghost" href="tel:+56974218800">Llamar urgencia</a>
              </form>
            </div>
          </div>

          <div className="hora-datos">
            <div className="dato-tel-row">
              <span className="dato-tel">+56 9 7421 8800</span>
              <span className="badge-24h">24H</span>
            </div>
            <a className="dato-email" href="mailto:hola@vega.cl">hola@vega.cl</a>
            <p className="dato-dir">Av. Irarrázaval 2420, Ñuñoa — Metro Ñuñoa 4 min a pie</p>
            <p className="dato-horario">Lun–Vie 09:00–21:00 · Sáb 10:00–14:00 · Urgencia 24H con triaje</p>
            <ul className="confianza">
              <li><span className="chk">✓</span> Receta y boleta al alta</li>
              <li><span className="chk">✓</span> Chip con inscripción</li>
              <li><span className="chk">✓</span> Presupuesto por escrito</li>
              <li><span className="chk">✓</span> Mismo equipo toda la noche</li>
            </ul>
            <div className="hora-thumb">
              <ImgFallback src="/media/vega-proof-16x9.png" alt="Sala limpia prueba" filename="vega-proof-16x9.png" aspect="16/9" style={{ width: "100%", height: "100%", objectFit: "cover", border: "1px solid #1E2E2A" }} />
            </div>
            <p className="media-caption" style={{ textAlign: "right" }}>Sala 01 · acero + vidrio · luz fría</p>
          </div>
        </div>

        <div className="vega-wrap">
          <footer className="site-footer">
            <p className="footer-line">VEGA SpA · Av. Irarrázaval 2420, Ñuñoa · hola@vega.cl · +56 9 7421 8800</p>
            <p className="footer-copy">© 2026 VEGA. Todos los derechos reservados. Valores referenciales; se confirma en box.</p>
          </footer>
        </div>
      </section>

      <div className={`sticky-bar ${stickyVisible ? "visible" : ""}`} aria-hidden={!stickyVisible}>
        <a className="btn btn-ghost sticky-ghost" href="tel:+56974218800">Llamar</a>
        <a className="btn btn-primary sticky-solid" href="#hora-vet">Agendar</a>
      </div>
    </>
  );
}
