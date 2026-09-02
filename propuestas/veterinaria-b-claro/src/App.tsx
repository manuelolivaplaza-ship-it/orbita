import { useEffect, useState } from "react";

function mediaExists(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function ImgWithFallback({ src, alt, dataFalta, style, aspect }: { src: string; alt: string; dataFalta: string; style?: React.CSSProperties; aspect?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="media-falta" data-falta={dataFalta} style={aspect ? { aspectRatio: aspect } as React.CSSProperties : undefined}>falta: {dataFalta}</div>;
  }
  return <img src={src} alt={alt} loading="lazy" decoding="async" style={style} onError={() => { console.warn(`[vet] falta: ${dataFalta}`); setFailed(true); }} />;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasHero16x9, setHasHero16x9] = useState<boolean | null>(null);
  const [hasHero9x16, setHasHero9x16] = useState<boolean | null>(null);
  const [hasHeroVideo, setHasHeroVideo] = useState<boolean | null>(null);
  const [accOpen, setAccOpen] = useState<number | null>(null);
  // form
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
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const b = base.endsWith("/") ? base : base + "/";
    void b;
    const urls = {
      hero16: "/media/vet-hero-16x9.png",
      hero9: "/media/vet-hero-9x16.png",
      video: "/media/vet-hero-loop.mp4",
    };
    Promise.all([mediaExists(urls.hero16), mediaExists(urls.hero9)]).then(([a, b2]) => {
      setHasHero16x9(a);
      setHasHero9x16(b2);
      if (!a) console.warn("[vet] falta: vet-hero-16x9.png — esperado en public/media/vet-hero-16x9.png");
      if (!b2) console.warn("[vet] falta: vet-hero-9x16.png — esperado en public/media/vet-hero-9x16.png (móvil)");
    });
    fetch(urls.video, { method: "HEAD" })
      .then((r) => {
        const ok = r.ok;
        setHasHeroVideo(ok);
        if (!ok) console.warn("[vet] falta: vet-hero-loop.mp4 — video opcional no encontrado");
      })
      .catch(() => {
        setHasHeroVideo(false);
        console.warn("[vet] falta: vet-hero-loop.mp4 — video opcional no encontrado");
      });

    // sticky CTA after 40% scroll
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = total > 0 ? window.scrollY / (total - window.innerHeight) : 0;
      // also guard: only show after 40%
      setShowSticky(pct > 0.4 && scrolled < total);
      void scrolled;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!telefono.trim()) e.telefono = "Ingresa tu teléfono";
    else if (!/^\+56\s?9\s?\d{4}\s?\d{4}$/.test(telefono.trim()) && !/^\+569\d{8}$/.test(telefono.trim().replace(/\s/g, ""))) {
      // accept +56 9 1234 5678 or +56912345678 with optional spaces
      if (!telefono.includes("+56")) e.telefono = "Usa formato +56 9 1234 5678";
      else if (telefono.trim().replace(/\s/g, "").length < 12) e.telefono = "Revisa el número (+56 9 1234 5678)";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Revisa el email";
    if (!especie) e.especie = "Elige especie";
    if (!motivo) e.motivo = "Elige motivo";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const data = { nombre, telefono, email, especie, motivo, mensaje, whatsappOk, date: new Date().toISOString() };
      try { localStorage.setItem("vet-lead", JSON.stringify(data)); } catch {}
      const text = `Hola Vet, quiero agendar: ${nombre} ${especie} ${motivo}`;
      const url = `https://wa.me/56983456721?text=${encodeURIComponent(text)}`;
      // open wa.me, fallback mailto
      const w = window.open(url, "_blank");
      if (!w) {
        window.location.href = `mailto:hola@vet.cl?subject=Agendar%20hora%20Vet&body=${encodeURIComponent(text + (mensaje ? " — " + mensaje : ""))}`;
      }
    }, 650);
  };

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a href="#portada" className="brand" aria-label="Vet — Clínica Veterinaria">
            <span className="brand-top">
              <span className="brand-name">Vet</span>
              <span className="brand-dot" aria-hidden>·</span>
            </span>
            <span className="brand-sub">Clínica Veterinaria</span>
          </a>

          <nav className="nav" aria-label="Principal">
            <a href="#arancel-vet">Arancel</a>
            <a href="#control-cachorro">Control</a>
            <a href="#ficha-clinica">Ficha</a>
            <a href="#planes-cuidado">Planes</a>
          </nav>

          <a href="tel:+56983456721" className="header-tel tabular">
            +56 9 8345 6721
          </a>

          <a href="tel:+56983456721" className="tel-icon" aria-label="Llamar +56 9 8345 6721">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.07 12.81 19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.7 2.63a2 2 0 0 1-.57 2.11L8 9.59a16 16 0 0 0 6.41 6.41l1.13-1.13a2 2 0 0 1 2.11-.57c.85.35 1.73.58 2.63.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          <button className="hamburger" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>

          <a href="#hora-vet" className="header-cta">
            Agendar hora
          </a>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-label="Menú móvil">
          <a href="#arancel-vet" onClick={() => setMenuOpen(false)}>Arancel</a>
          <a href="#control-cachorro" onClick={() => setMenuOpen(false)}>Control</a>
          <a href="#ficha-clinica" onClick={() => setMenuOpen(false)}>Ficha</a>
          <a href="#planes-cuidado" onClick={() => setMenuOpen(false)}>Planes</a>
          <a href="tel:+56983456721" className="mobile-tel tabular">+56 9 8345 6721</a>
        </div>
      </header>

      <section id="portada" className="hero">
        <div className="wrap">
          <div className="hero-left">
            <p className="kicker">Clínica Veterinaria · Ñuñoa — Desde 2012</p>
            <h1>Tu mascota en buenas manos, con todo a la vista.</h1>
            <p className="subhead">Revisamos, te mostramos la ficha en pantalla y te damos el presupuesto por escrito. Tú decides en casa, sin apuro.</p>

            <div className="hero-ctas">
              <a href="#hora-vet" className="btn-primary">Agendar hora</a>
              <a href="#arancel-vet" className="btn-ghost">Ver arancel</a>
            </div>

            <div className="banda" aria-label="Compromisos">
              <span className="banda-item">Hora exacta o reagendamos</span>
              <span className="banda-item">Boleta y receta en el momento</span>
              <span className="banda-item">Mismo veterinario siempre</span>
            </div>

            <p className="micro-copy">Si algo cambia tras la revisión, te avisamos antes de partir. Nunca iniciamos sin tu firma.</p>
            <p className="firma">Carnet nº 2026 — Vet, Ñuñoa</p>
          </div>

          <div className="hero-right">
            <div className="hero-media">
              {hasHero16x9 === false && hasHero9x16 === false ? (
                <div className="media-falta" data-falta="vet-hero-16x9.png">falta: vet-hero-16x9.png</div>
              ) : hasHeroVideo ? (
                <>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={hasHero16x9 ? "/media/vet-hero-16x9.png" : undefined}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  >
                    <source src="/media/vet-hero-loop.mp4" type="video/mp4" />
                  </video>
                  {hasHero16x9 && (
                    <picture>
                      {hasHero9x16 && <source media="(max-width: 768px)" srcSet="/media/vet-hero-9x16.png" />}
                      <img src="/media/vet-hero-16x9.png" alt="Carnet sanitario plegado en acordeón sobre bandeja de acero inox y lino hueso, con correa de cuero cognac enrollada y sello circular — luz pareja cenital" loading="eager" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </picture>
                  )}
                </>
              ) : hasHero16x9 === null ? (
                <div className="media-falta" style={{ background: "#EDE8E0" }} aria-busy="true">cargando…</div>
              ) : hasHero16x9 ? (
                <picture>
                  {hasHero9x16 && <source media="(max-width: 768px)" srcSet="/media/vet-hero-9x16.png" />}
                  <img
                    src="/media/vet-hero-16x9.png"
                    alt="Carnet sanitario plegado en acordeón sobre bandeja de acero inox y lino hueso, con correa de cuero cognac enrollada y sello circular — luz pareja cenital"
                    loading="eager"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const parent = el.closest(".hero-media") as HTMLElement | null;
                      if (parent) {
                        const d = document.createElement("div");
                        d.className = "media-falta";
                        d.setAttribute("data-falta", "vet-hero-16x9.png");
                        d.textContent = "falta: vet-hero-16x9.png";
                        parent.appendChild(d);
                      }
                      console.warn("[vet] falta: vet-hero-16x9.png");
                    }}
                  />
                </picture>
              ) : (
                <div className="media-falta" data-falta="vet-hero-16x9.png">falta: vet-hero-16x9.png</div>
              )}
            </div>
            <span className="hero-caption">Carnet 01 · papel + acero · luz pareja</span>
          </div>
        </div>
      </section>

      {/* 1 — ARANCEL */}
      <section id="arancel-vet" className="section-arancel">
        <div className="wrap">
          <div className="arancel-header">
            <p className="kicker">ARANCEL A LA VISTA</p>
            <h2>Precios con nombre y apellido</h2>
            <p className="arancel-intro">Cada fila es precio desde. El definitivo se confirma en box con tu mascota. Nunca por WhatsApp.</p>
          </div>

          <div className="arancel-grid">
            <div className="arancel-ficha">
              <div className="perforacion" aria-hidden>
                <span /><span /><span />
              </div>

              <div className="tabla-arancel" role="table" aria-label="Arancel Vet">
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Consulta general (30 min)</span>
                    <span className="nota-hover">revisión completa + receta + receta control</span>
                  </div>
                  <span className="precio tabular">$18.900</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Vacuna óctuple / triple felina</span>
                    <span className="nota-hover">incluye carnet + sello + desparasitación</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $22.900</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Vacuna antirrábica</span>
                    <span className="nota-hover">con certificado para inscripción</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $18.900</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Esterilización gato/a</span>
                    <span className="nota-hover">anestesia + 1 control + collar isabelino</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $89.900</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Esterilización perro mediano (10–25 kg)</span>
                    <span className="nota-hover">anestesia + 1 control + antibiótico</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $129.900</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Limpieza dental (destartraje)</span>
                    <span className="nota-hover">sin extracciones · con sedación</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $75.900</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Consulta urgencia (fuera de hora)</span>
                    <span className="nota-hover">triage + estabilización inicial</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $28.900</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Hospitalización día</span>
                    <span className="nota-hover">monitoreo + fluidos · por 24 h</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $45.000</span>
                </div>
                <div className="fila" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Chip + inscripción Registro Nacional</span>
                    <span className="nota-hover">chip ISO + alta en tenencia responsable</span>
                  </div>
                  <span className="precio tabular">$25.900</span>
                </div>
                <div className="fila fila-last" role="row">
                  <div className="fila-main" role="cell">
                    <span className="prestacion">Desparasitación interna/externa</span>
                    <span className="nota-hover">pipeta o comprimido según peso</span>
                  </div>
                  <span className="precio tabular"><em>desde</em> $12.900</span>
                </div>
              </div>

              <p className="nota-pie">Valores referenciales; se confirma tras evaluación en box. Sin sorpresas. Boleta para reembolso si tu seguro la cubre.</p>
            </div>

            <aside className="arancel-aside" aria-label="Urgencia">
              <div className="aside-card">
                <div className="aside-perfo" aria-hidden><span /><span /></div>
                <h3>¿Urgencia hoy?</h3>
                <p className="aside-text">Triage el mismo día según cupo. Llámanos y te damos hora real, no &lsquo;te llamamos&rsquo;.</p>
                <a href="tel:+56983456721" className="aside-tel tabular">+56 9 8345 6721</a>
                <a href="#hora-vet" className="btn-primary aside-cta">Agendar hora</a>
                <p className="aside-micro">Receta y boleta en el momento · Control 7 días incluido en cirugías</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2 — CONTROL */}
      <section id="control-cachorro" className="section-control">
        <div className="wrap control-grid">
          <div className="control-media">
            <div className="control-img-wrap">
              <ImgWithFallback src="/media/vet-interior-16x9.png" alt="Box clínico claro vacío con carnet abierto y bandeja de acero, luz pareja" dataFalta="vet-interior-16x9.png" aspect="4/3" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <span className="control-caption">Carnet 45&apos; · box 2 · Ñuñoa</span>
          </div>

          <div className="control-content">
            <p className="kicker">PRIMER CONTROL</p>
            <h2>45 minutos para dejar el calendario claro</h2>
            <p className="control-intro">No es vacuna express. Es una cita para armar el calendario de tu cachorro o gatito sin venderte de más.</p>

            <div className="pasos">
              <div className="paso">
                <div className="paso-num">01 · Revisión y peso</div>
                <div className="paso-titulo">Revisión y peso</div>
                <p>Examen completo, peso, piel y dientes de leche. Ves la ficha en pantalla.</p>
              </div>
              <div className="paso">
                <div className="paso-num">02 · Calendario en simple</div>
                <div className="paso-titulo">Calendario en simple</div>
                <p>Qué vacuna va ahora, cuál espera y qué no hace falta. Preguntas todo.</p>
              </div>
              <div className="paso">
                <div className="paso-num">03 · Carnet por escrito</div>
                <div className="paso-titulo">Carnet por escrito</div>
                <p>Hoja con fechas, dosis y recordatorio por WhatsApp. Decides en casa.</p>
              </div>
            </div>

            <ul className="checklist" aria-label="Entrega">
              <li><span className="chk" aria-hidden>✓</span> Carnet timbrado</li>
              <li><span className="chk" aria-hidden>✓</span> Calendario impreso</li>
              <li><span className="chk" aria-hidden>✓</span> Recordatorio WhatsApp</li>
              <li><span className="chk" aria-hidden>✓</span> Control 14 días</li>
            </ul>

            <div className="precio-inline">Control cachorro/gatito $22.900 — se abona al plan si sigues.</div>
          </div>
        </div>
      </section>

      {/* 3 — FICHA */}
      <section id="ficha-clinica" className="section-ficha">
        <div className="wrap">
          <p className="kicker">CÓMO TE ATENDEMOS</p>
          <h2>Mismo veterinario, misma ficha, siempre.</h2>
          <p className="ficha-intro">No rotamos tu caso. Cada control lo sigue quien lo vio primero. La ficha es una sola.</p>

          <div className="tabla-comparativa" role="table" aria-label="Cómo trabajamos">
            <div className="tabla-head" role="row">
              <div className="th th-empty" role="columnheader" aria-label="Concepto"></div>
              <div className="th" role="columnheader">Consulta general</div>
              <div className="th" role="columnheader">Urgencia</div>
              <div className="th" role="columnheader">Cirugía</div>
            </div>
            <div className="tabla-body">
              <div className="tr" role="row">
                <div className="td td-label" role="cell">Cómo funciona</div>
                <div className="td" role="cell">Hora agendada 30 min</div>
                <div className="td" role="cell">Triage + estabilización</div>
                <div className="td" role="cell">Evaluación + presupuesto escrito</div>
              </div>
              <div className="tr" role="row">
                <div className="td td-label" role="cell">Qué traes</div>
                <div className="td" role="cell">Carnet + antecedentes</div>
                <div className="td" role="cell">Carnet si lo tienes</div>
                <div className="td" role="cell">Ayuno 8 h + exámenes</div>
              </div>
              <div className="tr" role="row">
                <div className="td td-label" role="cell">Seguimiento</div>
                <div className="td" role="cell">Control 14 días incluido</div>
                <div className="td" role="cell">Alta con receta y control</div>
                <div className="td" role="cell">Control 7 días + retiro puntos</div>
              </div>
              <div className="tr" role="row">
                <div className="td td-label" role="cell">Facilidades</div>
                <div className="td" role="cell">3 cuotas sin interés</div>
                <div className="td" role="cell">Pago al alta</div>
                <div className="td" role="cell">Hasta 6 cuotas s/i</div>
              </div>
            </div>
          </div>

          {/* mobile cards fallback via CSS grid collapse */}

          <p className="ficha-nota">Cirugías solo con exámenes previos. Te damos presupuesto por escrito antes de agendar.</p>

          <div className="acordeon" role="list">
            {[
              { q: "¿Atienden sin hora?", a: "Solo urgencias por triage. Para control general agenda y te damos hora exacta, no ventana de 3 horas." },
              { q: "¿Hacen domicilio?", a: "Sí, para vacunas y controles sanos en Ñuñoa/Providencia. Cirugía y urgencia solo en clínica." },
              { q: "¿Cuotas?", a: "Tarjeta hasta 6 cuotas sin interés. Total por escrito. Sin letra chica." },
            ].map((it, idx) => (
              <div key={idx} className={`ac-item ${accOpen === idx ? "open" : ""}`} role="listitem">
                <button className="ac-trigger" aria-expanded={accOpen === idx} onClick={() => setAccOpen(accOpen === idx ? null : idx)}>
                  <span>{it.q}</span>
                  <span className="chevron" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                  </span>
                </button>
                <div className="ac-body" hidden={accOpen !== idx}>
                  <p>{it.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — PLANES */}
      <section id="planes-cuidado" className="section-planes">
        <div className="wrap">
          <p className="kicker">LO QUE HACEMOS BIEN</p>
          <h2>Cuatro planes, el mismo equipo siempre</h2>
          <p className="planes-sub">No rotamos tu caso. Cada plan lo sigue quien lo diagnosticó.</p>

          <div className="planes-grid">
            <article className="plan-caja">
              <div className="plan-media" style={{ aspectRatio: "1/1" }}>
                <ImgWithFallback src="/media/vet-tile-01-1x1.png" alt="Carnet plegado con sello redondo sobre acero mate" dataFalta="vet-tile-01-1x1.png" aspect="1/1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">01</span>
                <h3>Plan cachorro / gatito</h3>
                <p>Calendario de vacunas, desparasitación y controles hasta el año.</p>
                <span className="plan-meta tabular">Desde $22.900 por control</span>
              </div>
            </article>

            <article className="plan-caja">
              <div className="plan-media" style={{ aspectRatio: "3/4" }}>
                <ImgWithFallback src="/media/vet-tile-02-3x4.png" alt="Correa de cuero cognac enrollada con placa redonda sobre lino" dataFalta="vet-tile-02-3x4.png" aspect="3/4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">02</span>
                <h3>Esterilización</h3>
                <p>Gato desde $89.900, perro mediano desde $129.900. Con control incluido.</p>
                <span className="plan-meta tabular">Desde $89.900 · 1 control</span>
              </div>
            </article>

            <article className="plan-caja">
              <div className="plan-media" style={{ aspectRatio: "1/1" }}>
                <ImgWithFallback src="/media/vet-tile-03-1x1.png" alt="Instrumental dental de acero alineado sobre bandeja" dataFalta="vet-tile-03-1x1.png" aspect="1/1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">03</span>
                <h3>Limpieza dental</h3>
                <p>Destartraje con sedación monitoreada. Sin extracciones incluidas.</p>
                <span className="plan-meta tabular">Desde $75.900</span>
              </div>
            </article>

            <article className="plan-caja">
              <div className="plan-media" style={{ aspectRatio: "3/4" }}>
                <ImgWithFallback src="/media/vet-tile-04-3x4.png" alt="Frasco de vacuna ámbar y jeringa sobre acero con luz rasante" dataFalta="vet-tile-04-3x4.png" aspect="3/4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plan-text">
                <span className="plan-num">04</span>
                <h3>Chequeo anual + vacunas</h3>
                <p>Examen, vacunas al día y carnet timbrado. Recordatorio por WhatsApp.</p>
                <span className="plan-meta tabular">Desde $22.900</span>
              </div>
            </article>
          </div>

          <div className="linea-honesta tabular">+12 años en Ñuñoa · +8.200 pacientes · 97% nos recomienda · 3 veterinarios fijos</div>
        </div>
      </section>

      {/* 5 — HORA VET */}
      <section id="hora-vet" className="section-hora">
        <div className="wrap hora-grid">
          <div className="hora-left">
            <div className="form-papel">
              <div className="form-perfo" aria-hidden><span /><span /></div>
              <p className="kicker">AGENDA</p>
              <h2>Agenda el control. Te responden hoy.</h2>
              <p className="hora-sub">Elige día y te confirmamos por WhatsApp el mismo día. Si es urgencia, llama directo.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="vet-nombre">Nombre</label>
                  <input id="vet-nombre" type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required aria-invalid={!!errors.nombre} />
                  {errors.nombre && <span className="err">{errors.nombre}</span>}
                </div>
                <div className="field">
                  <label htmlFor="vet-tel">Teléfono</label>
                  <input id="vet-tel" type="tel" placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} required pattern="\+56.*" aria-invalid={!!errors.telefono} className="tabular" />
                  {errors.telefono && <span className="err">{errors.telefono}</span>}
                </div>
                <div className="field">
                  <label htmlFor="vet-email">Email</label>
                  <input id="vet-email" type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="vet-especie">Especie</label>
                  <select id="vet-especie" value={especie} onChange={(e) => setEspecie(e.target.value)} required aria-invalid={!!errors.especie}>
                    <option value="">Elige</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.especie && <span className="err">{errors.especie}</span>}
                </div>
                <div className="field">
                  <label htmlFor="vet-motivo">Motivo</label>
                  <select id="vet-motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} required aria-invalid={!!errors.motivo}>
                    <option value="">Elige</option>
                    <option value="Control / vacuna">Control / vacuna</option>
                    <option value="Consulta general">Consulta general</option>
                    <option value="Urgencia">Urgencia</option>
                    <option value="Esterilización">Esterilización</option>
                    <option value="Dental">Dental</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.motivo && <span className="err">{errors.motivo}</span>}
                </div>
                <div className="field field-full">
                  <label htmlFor="vet-msg">Detalle</label>
                  <textarea id="vet-msg" rows={3} placeholder="Cuéntanos en una línea: especie, edad, motivo" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                </div>
                <label className="check-row">
                  <input type="checkbox" checked={whatsappOk} onChange={(e) => setWhatsappOk(e.target.checked)} />
                  <span>Acepto que me contacten por WhatsApp</span>
                </label>

                <button type="submit" className="btn-primary btn-full" disabled={loading}>
                  {loading ? "Enviando…" : "Agendar hora"}
                </button>

                {success && <div className="form-success"><span className="check-cobre" aria-hidden>✓</span> Te escribimos hoy · revisa tu WhatsApp</div>}
              </form>
            </div>
          </div>

          <div className="hora-right">
            <a href="tel:+56983456721" className="hora-tel-big tabular">+56 9 8345 6721</a>
            <a href="mailto:hola@vet.cl" className="hora-email">hola@vet.cl</a>
            <p className="hora-dir">Av. Irarrázaval 2420, Ñuñoa, Santiago</p>
            <p className="hora-horario">Lun–Vie 9:00–19:30 · Sáb 10:00–14:00 · Urgencia 24h triage</p>
            <div className="hora-barra"><span className="dot" aria-hidden /> Metro Ñuñoa · 4 min a pie</div>

            <div className="hora-proof">
              <ImgWithFallback src="/media/vet-proof-16x9.png" alt="Recepción luminosa de la clínica con acero y madera clara, sin personas" dataFalta="vet-proof-16x9.png" aspect="16/9" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <p className="hora-confianza">Receta y boleta en el momento · Chip con inscripción · Controles con recordatorio</p>
          </div>
        </div>

        <div className="wrap">
          <footer className="site-footer">
            <p>Vet SpA · Av. Irarrázaval 2420, Ñuñoa · hola@vet.cl · +56 9 8345 6721</p>
            <p className="footer-legal">© 2026 Vet. Todos los derechos reservados. Valores referenciales.</p>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "visible" : ""}`} aria-hidden={!showSticky}>
        <a href="#hora-vet" className="btn-primary">Agendar hora</a>
      </div>
    </>
  );
}
