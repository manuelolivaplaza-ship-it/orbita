import { useState, useEffect } from "react";
import { motion } from "motion";

const BASE = import.meta.env.BASE_URL;

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [interiorError, setInteriorError] = useState(false);
  const [tile01Error, setTile01Error] = useState(false);
  const [tile02Error, setTile02Error] = useState(false);
  const [tile03Error, setTile03Error] = useState(false);
  const [tile04Error, setTile04Error] = useState(false);
  const [proofError, setProofError] = useState(false);

  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);
  const [stickyVisible, setStickyVisible] = useState(false);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [detalle, setDetalle] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const hero16 = `${BASE}media/lago-azul-hero-16x9.png`;
  const hero9 = `${BASE}media/lago-azul-hero-9x16.png`;
  const heroVideo = `${BASE}media/lago-azul-hero-loop.mp4`;
  const interiorSrc = `${BASE}media/lago-azul-interior-16x9.png`;
  const tile01Src = `${BASE}media/lago-azul-tile-01-1x1.png`;
  const tile02Src = `${BASE}media/lago-azul-tile-02-3x4.png`;
  const tile03Src = `${BASE}media/lago-azul-tile-03-1x1.png`;
  const tile04Src = `${BASE}media/lago-azul-tile-04-3x4.png`;
  const proofSrc = `${BASE}media/lago-azul-proof-16x9.png`;

  useEffect(() => {
    if (imgError) console.warn("media falta: lago-azul-hero-16x9.png");
  }, [imgError]);
  useEffect(() => { if (interiorError) console.warn("media falta: lago-azul-interior-16x9.png"); }, [interiorError]);
  useEffect(() => { if (tile01Error) console.warn("media falta: lago-azul-tile-01-1x1.png"); }, [tile01Error]);
  useEffect(() => { if (tile02Error) console.warn("media falta: lago-azul-tile-02-3x4.png"); }, [tile02Error]);
  useEffect(() => { if (tile03Error) console.warn("media falta: lago-azul-tile-03-1x1.png"); }, [tile03Error]);
  useEffect(() => { if (tile04Error) console.warn("media falta: lago-azul-tile-04-3x4.png"); }, [tile04Error]);
  useEffect(() => { if (proofError) console.warn("media falta: lago-azul-proof-16x9.png"); }, [proofError]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const docHeight = doc.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setStickyVisible(pct > 0.4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (stickyVisible) document.body.style.paddingBottom = "72px";
    else document.body.style.paddingBottom = "";
    return () => { document.body.style.paddingBottom = ""; };
  }, [stickyVisible]);

  const arancelRows: { prest: string; price: string; desde?: boolean; note: string }[] = [
    { prest: "Evaluación con scanner + fotos", price: "$32.900", note: "45 min · scanner + radiografía + informe impreso" },
    { prest: "Limpieza y profilaxis", price: "$44.900", desde: true, note: "40 min · higiene + pulido + flúor + fotos" },
    { prest: "Tapadura resina (1 cara)", price: "$64.900", desde: true, note: "45 min · resina + pulido espejo" },
    { prest: "Endodoncia 1 conducto", price: "$138.000", desde: true, note: "90 min · microscopio + control rx" },
    { prest: "Extracción simple", price: "$54.900", desde: true, note: "30 min · anestesia + control 7 días" },
    { prest: "Blanqueamiento clínico", price: "$98.900", desde: true, note: "60 min · peróxido + protector gingival" },
    { prest: "Implante (tornillo + corona)", price: "$445.000", desde: true, note: "2 fases · provisorio + controles" },
    { prest: "Alineadores transparentes", price: "$49.900/mes", desde: true, note: "12–18 meses · control mensual" },
  ];

  const validate = () => {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres)";
    const normalized = telefono.replace(/\s+/g, " ").trim();
    const telCompact = telefono.replace(/\s/g, "");
    const isValidTel = /^\+56\s?9\s?\d{8}$/.test(normalized) || /^\+569\d{8}$/.test(telCompact);
    if (!isValidTel) e.telefono = "Formato +56 9 1234 5678";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email inválido";
    if (!motivo) e.motivo = "Selecciona un motivo";
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
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("lago-azul-lead", JSON.stringify({ nombre, telefono, email, motivo, detalle, fecha: Date.now() }));
      } catch {}
      const msg = `Hola LAGO AZUL, quiero agendar: ${nombre} ${motivo}${detalle ? " — " + detalle : ""} Tel: ${telefono}`;
      const url = `https://wa.me/56981234567?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    }, 800);
  };

  return (
    <>
      <header className="tl-top">
        <div className="tl-top__inner">
          <a href="#portada-dentista-b-teal" className="tl-brand" aria-label="LAGO AZUL inicio">
            LAGO AZUL
          </a>

          <nav className="tl-nav" aria-label="Navegación principal">
            <a href="#arancel-lago">Arancel</a>
            <a href="#ficha-45">Ficha 45&apos;</a>
            <a href="#reembolso-fonasa">Fonasa</a>
            <a href="#cajas-clinicas">Cajas</a>
          </nav>

          <div className="tl-actions">
            <a href="tel:+56981234567" className="tl-phone" aria-label="Llamar +56 9 8123 4567">
              +56 9 8123 4567
            </a>
            <a href="tel:+56981234567" className="tl-icon" aria-label="Llamar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a href="#hora-lago" className="tl-btn tl-btn--primary tl-cta">
              Agendar hora
            </a>
            <button
              className="tl-burger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`tl-drawer ${menuOpen ? "open" : ""}`}>
          <nav aria-label="Navegación móvil">
            <a href="#arancel-lago" onClick={() => setMenuOpen(false)}>Arancel</a>
            <a href="#ficha-45" onClick={() => setMenuOpen(false)}>Ficha 45&apos;</a>
            <a href="#reembolso-fonasa" onClick={() => setMenuOpen(false)}>Fonasa</a>
            <a href="#cajas-clinicas" onClick={() => setMenuOpen(false)}>Cajas</a>
            <a href="tel:+56981234567" onClick={() => setMenuOpen(false)}>+56 9 8123 4567</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO — portada */}
        <section id="portada-dentista-b-teal" className="tl-hero">
          <div className="tl-hero__inner">
            <motion.div
              className="tl-hero__copy"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="tl-eyebrow">CLÍNICA DENTAL · PROVIDENCIA</p>
              <h1 className="tl-h1">Sonrisa sana, sin sustos ni letra chica.</h1>
              <p className="tl-lead">
                Revisamos con fotos, te mostramos en pantalla y te damos el presupuesto por escrito. Tú decides en casa, no en el sillón.
              </p>
              <div className="tl-hero__ctas">
                <a href="#hora-lago" className="tl-btn tl-btn--primary">Agendar hora</a>
                <a href="#arancel-lago" className="tl-btn tl-btn--ghost">Ver arancel</a>
              </div>
              <motion.div
                className="tl-strip"
                aria-label="Información de atención"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {["Hora exacta o urgencia hoy", "Boleta reembolsable", "Mismo especialista siempre"].map((txt, i) => (
                  <motion.span
                    key={i}
                    className="tl-strip__item"
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" as const } }
                    }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
                  >
                    {i !== 0 && <span className="tl-strip__dot" aria-hidden="true" />}
                    {txt}
                  </motion.span>
                ))}
              </motion.div>
              <p className="tl-micro">Si algo cambia tras la evaluación, te avisamos antes de partir. Nunca iniciamos sin tu firma.</p>
              <div className="tl-sig">
                <div className="tl-sig__line" aria-hidden="true" />
                <p className="tl-sig__txt">Ficha nº 2026 — LAGO AZUL, Providencia</p>
              </div>
            </motion.div>

            <motion.div
              className="tl-hero__visual"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: "easeOut", delay: 0.08 }}
            >
              {!imgError ? (
                <div className="tl-frame">
                  <div className="tl-frame__media">
                    {!videoError ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={hero16}
                        onError={() => setVideoError(true)}
                        aria-label="Bandeja LAGO AZUL hero video"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      >
                        <source src={heroVideo} type="video/mp4" />
                      </video>
                    ) : null}
                    <img
                      src={hero16}
                      alt="Bandeja de vidrio esmerilado teal sobre niebla, ficha perforada y pinza, luz lago difusa"
                      className="tl-media--desktop"
                      loading="eager"
                      decoding="async"
                      onError={() => setImgError(true)}
                      style={videoError ? undefined : { display: "none" }}
                    />
                    <img
                      src={hero9}
                      alt="Bandeja de vidrio esmerilado teal sobre niebla, ficha perforada y pinza, vista vertical"
                      className="tl-media--mobile"
                      loading="eager"
                      decoding="async"
                      onError={() => setImgError(true)}
                      style={videoError ? undefined : { display: "none" }}
                    />
                  </div>
                </div>
              ) : (
                <div className="tl-missing" data-falta="lago-azul-hero-16x9.png" style={{ aspectRatio: "16/9" }}>
                  falta: lago-azul-hero-16x9.png
                </div>
              )}
              <p className="tl-caption">Bandeja 01 · vidrio esmerilado · luz lago</p>
            </motion.div>
          </div>
        </section>

        {/* 2 — ARANCEL (sube a 2º lugar para diferenciar flujo: precio primero) */}
        <section id="arancel-lago" className="tl-tariff">
          <div className="tl-wrap">
            <p className="tl-kicker">ARANCEL A LA VISTA</p>
            <h2 className="tl-h2">Precios con nombre y apellido</h2>
            <p className="tl-intro">Cada fila es precio desde. El definitivo se confirma con scanner en la ficha 45&apos;. Nunca por WhatsApp.</p>
          </div>

          <div className="tl-tariff__layout">
            <div className="tl-sheet">
              <div className="tl-sheet__head">
                <span>Prestación</span>
                <span>Desde CLP</span>
              </div>
              {arancelRows.map((r, idx) => (
                <div key={idx} className="tl-row">
                  <div className="tl-row__main">
                    <span className="tl-row__name">{r.prest}</span>
                    <span className="tl-row__note">{r.note}</span>
                  </div>
                  <div className="tl-row__price">
                    {r.desde && <span className="tl-row__from">desde</span>}
                    <span className="tl-row__amount">{r.price}</span>
                  </div>
                </div>
              ))}
              <p className="tl-sheet__foot">Valores referenciales; se confirma tras diagnóstico. Sin sorpresas. Fonasa e Isapre con boleta reembolsable.</p>
            </div>

            <aside className="tl-side">
              <h3 className="tl-side__title">¿Dolor hoy?</h3>
              <p className="tl-side__text">Urgencia el mismo día según cupo. Llámanos y te damos hora real, no &apos;te llamamos&apos;.</p>
              <a href="tel:+56981234567" className="tl-side__tel">+56 9 8123 4567</a>
              <a href="#hora-lago" className="tl-btn tl-btn--primary tl-side__cta">Agendar hora</a>
              <p className="tl-side__micro">Boleta reembolsable · Fonasa nivel 3 · Isapre todas</p>
            </aside>
          </div>
        </section>

        {/* 3 — FICHA 45 (rail vertical con numeración circular) */}
        <section id="ficha-45" className="tl-eval">
          <div className="tl-eval__grid">
            <div className="tl-eval__content">
              <p className="tl-kicker">PRIMERA VISITA</p>
              <h2 className="tl-h2">45 minutos para dejar todo claro</h2>
              <p className="tl-intro">No es limpieza express. Es una cita para entender tu boca sin venderte nada.</p>

              <div className="tl-steps">
                <div className="tl-step">
                  <p className="tl-step__n">1</p>
                  <div>
                    <h3 className="tl-step__title">Fotos y scanner</h3>
                    <p className="tl-step__text">Scanner intraoral y radiografía en el mismo box. Ves lo que vemos, en pantalla grande.</p>
                  </div>
                </div>
                <div className="tl-step">
                  <p className="tl-step__n">2</p>
                  <div>
                    <h3 className="tl-step__title">Diagnóstico en simple</h3>
                    <p className="tl-step__text">Qué es urgente, qué puede esperar y qué no hace falta. Preguntas todo.</p>
                  </div>
                </div>
                <div className="tl-step">
                  <p className="tl-step__n">3</p>
                  <div>
                    <h3 className="tl-step__title">Presupuesto por escrito</h3>
                    <p className="tl-step__text">Hoja con valores por pieza, alternativas y reembolso. Decides en casa.</p>
                  </div>
                </div>
              </div>

              <ul className="tl-checks" aria-label="Qué te llevas">
                <li><i aria-hidden="true">✓</i> Informe impreso</li>
                <li><i aria-hidden="true">✓</i> Presupuesto firmado</li>
                <li><i aria-hidden="true">✓</i> Fotos de tu caso</li>
                <li><i aria-hidden="true">✓</i> WhatsApp directo</li>
              </ul>

              <div className="tl-tag">Evaluación completa $32.900 — se abona al tratamiento si sigues.</div>
            </div>
            <div className="tl-eval__figure">
              {!interiorError ? (
                <div className="tl-eval__shot">
                  <img
                    src={interiorSrc}
                    alt="Box clínico claro con bandeja vidrio y ficha abierta, luz pareja sin ventana"
                    loading="lazy"
                    onError={() => setInteriorError(true)}
                  />
                </div>
              ) : (
                <div className="tl-missing" data-falta="lago-azul-interior-16x9.png" style={{ aspectRatio: "4/3" }}>
                  falta: lago-azul-interior-16x9.png
                </div>
              )}
              <p className="tl-caption">Ficha 45&apos; · box 2 · Providencia</p>
            </div>
          </div>
        </section>

        {/* 4 — REEMBOLSO FONASA (grilla 3x1 uniforme) */}
        <section id="reembolso-fonasa" className="tl-pay">
          <div className="tl-wrap">
            <p className="tl-kicker">CÓMO PAGAS</p>
            <h2 className="tl-h2">Fonasa, Isapre o particular. Sin letra chica.</h2>
            <p className="tl-intro">Boleta reembolsable. Te decimos antes cuánto cubre tu plan y cuánto pagas tú.</p>

            <div className="tl-pay__grid">
              <article className="tl-payCard">
                <h3 className="tl-payCard__head">FONASA</h3>
                <dl className="tl-payCard__dl">
                  <div><dt>Cómo funciona</dt><dd>Bono nivel 3 en sucursal o web</dd></div>
                  <div><dt>Qué traes</dt><dd>Carnet + bono</dd></div>
                  <div><dt>Reembolso</dt><dd>Directo en Fonasa</dd></div>
                  <div><dt>Facilidades</dt><dd>3 cuotas sin interés</dd></div>
                </dl>
              </article>
              <article className="tl-payCard tl-payCard--accent">
                <h3 className="tl-payCard__head">ISAPRE (todas)</h3>
                <dl className="tl-payCard__dl">
                  <div><dt>Cómo funciona</dt><dd>Pagas y reembolsas con boleta</dd></div>
                  <div><dt>Qué traes</dt><dd>Credencial + plan</dd></div>
                  <div><dt>Reembolso</dt><dd>50–80% según plan*</dd></div>
                  <div><dt>Facilidades</dt><dd>6 cuotas sin interés</dd></div>
                </dl>
              </article>
              <article className="tl-payCard">
                <h3 className="tl-payCard__head">PARTICULAR</h3>
                <dl className="tl-payCard__dl">
                  <div><dt>Cómo funciona</dt><dd>Pago directo con facilidades</dd></div>
                  <div><dt>Qué traes</dt><dd>Carnet</dd></div>
                  <div><dt>Reembolso</dt><dd>—</dd></div>
                  <div><dt>Facilidades</dt><dd>Hasta 12 cuotas</dd></div>
                </dl>
              </article>
            </div>
            <p className="tl-pay__note">* Depende de tu plan. Lo verificamos en la ficha y te damos cálculo por escrito.</p>

            <div className="tl-acc">
              {[
                { q: "¿Atienden Fonasa?", a: "Sí, nivel 3. Compras el bono antes y te atendemos sin copago extra en prestaciones bonificables." },
                { q: "¿Qué Isapres?", a: "Todas con reembolso. Emitimos boleta y reembolsas donde te convenga. No hay convenio cerrado." },
                { q: "¿Cuotas?", a: "Tarjeta hasta 12 cuotas. Sin interés hasta 6 con Fonasa/Isapre. Total por escrito." },
              ].map((item, idx) => (
                <div key={idx} className={`tl-acc__item ${accordionOpen === idx ? "open" : ""}`}>
                  <button className="tl-acc__btn" onClick={() => setAccordionOpen(accordionOpen === idx ? null : idx)} aria-expanded={accordionOpen === idx} type="button">
                    <span>{item.q}</span>
                    <span className="tl-acc__chev" aria-hidden="true">›</span>
                  </button>
                  <div className="tl-acc__panel">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — CAJAS — patrón ledger: grilla 2x2 uniforme vertical (otro patrón vs bento horizontal previo) */}
        <section id="cajas-clinicas" className="tl-works">
          <div className="tl-works__head">
            <p className="tl-kicker">LO QUE HACEMOS BIEN</p>
            <h2 className="tl-h2">Cuatro cajas, los mismos especialistas siempre</h2>
            <p className="tl-intro">No rotamos tu caso. Cada plan lo sigue quien lo diagnosticó.</p>
          </div>

          <div className="tl-bento">
            <div className="tl-card">
              <div className="tl-card__media">
                {!tile01Error ? (
                  <img src={tile01Src} alt="Pinza y espejo dental sobre vidrio esmerilado teal" loading="lazy" onError={() => setTile01Error(true)} />
                ) : (
                  <div className="tl-missing" data-falta="lago-azul-tile-01-1x1.png" style={{ aspectRatio: "4/3" }}>falta: lago-azul-tile-01-1x1.png</div>
                )}
              </div>
              <div className="tl-card__body">
                <p className="tl-card__num">01</p>
                <h3 className="tl-card__title">Endodoncia con microscopio</h3>
                <p className="tl-card__text">Un diente a la vez. Microscopio y control rx. Sin apuro.</p>
                <p className="tl-card__meta">Desde $138.000 · 90 min</p>
              </div>
            </div>

            <div className="tl-card">
              <div className="tl-card__media">
                {!tile02Error ? (
                  <img src={tile02Src} alt="Radiografía retroiluminada sobre bandeja vidrio" loading="lazy" onError={() => setTile02Error(true)} />
                ) : (
                  <div className="tl-missing" data-falta="lago-azul-tile-02-3x4.png" style={{ aspectRatio: "4/3" }}>falta: lago-azul-tile-02-3x4.png</div>
                )}
              </div>
              <div className="tl-card__body">
                <p className="tl-card__num">02</p>
                <h3 className="tl-card__title">Implantología</h3>
                <p className="tl-card__text">Tornillo + corona en 2 fases, planificación digital y provisorio.</p>
                <p className="tl-card__meta">Desde $445.000 · 2 fases</p>
              </div>
            </div>

            <div className="tl-card">
              <div className="tl-card__media">
                {!tile03Error ? (
                  <img src={tile03Src} alt="Ficha perforada con lápiz técnico sobre niebla" loading="lazy" onError={() => setTile03Error(true)} />
                ) : (
                  <div className="tl-missing" data-falta="lago-azul-tile-03-1x1.png" style={{ aspectRatio: "4/3" }}>falta: lago-azul-tile-03-1x1.png</div>
                )}
              </div>
              <div className="tl-card__body">
                <p className="tl-card__num">03</p>
                <h3 className="tl-card__title">Alineadores transparentes</h3>
                <p className="tl-card__text">Controles mensuales, mismo ortodoncista siempre.</p>
                <p className="tl-card__meta">Desde $49.900/mes</p>
              </div>
            </div>

            <div className="tl-card">
              <div className="tl-card__media">
                {!tile04Error ? (
                  <img src={tile04Src} alt="Macro cerámica dental sobre vidrio esmerilado teal" loading="lazy" onError={() => setTile04Error(true)} />
                ) : (
                  <div className="tl-missing" data-falta="lago-azul-tile-04-3x4.png" style={{ aspectRatio: "4/3" }}>falta: lago-azul-tile-04-3x4.png</div>
                )}
              </div>
              <div className="tl-card__body">
                <p className="tl-card__num">04</p>
                <h3 className="tl-card__title">Estética adhesiva</h3>
                <p className="tl-card__text">Carillas que parecen tuyas, no postizas. Menos es más.</p>
                <p className="tl-card__meta">Desde $64.900</p>
              </div>
            </div>
          </div>

          <p className="tl-works__trust">+12 años en Providencia · +6.800 pacientes · 96% nos recomienda · 3 especialistas fijos</p>
        </section>

        {/* 6 — HORA LAGO */}
        <section id="hora-lago" className="tl-book">
          <div className="tl-book__grid">
            <div className="tl-book__formCol">
              <p className="tl-kicker">AGENDA</p>
              <h2 className="tl-h2">Agenda tu ficha. Te responden hoy.</h2>
              <p className="tl-intro">Elige día y te confirmamos por WhatsApp el mismo día. Si es urgencia, llama directo.</p>

              <form className="tl-formCard" onSubmit={handleSubmit} noValidate>
                <div className="tl-field">
                  <label htmlFor="f-nombre-dentista-b-teal">Nombre</label>
                  <input id="f-nombre-dentista-b-teal" type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                  {errors.nombre && <span className="tl-err">{errors.nombre}</span>}
                </div>

                <div className="tl-field">
                  <label htmlFor="f-telefono-dentista-b-teal">Teléfono</label>
                  <input id="f-telefono-dentista-b-teal" type="tel" placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
                  {errors.telefono && <span className="tl-err">{errors.telefono}</span>}
                </div>

                <div className="tl-field">
                  <label htmlFor="f-email-dentista-b-teal">Email</label>
                  <input id="f-email-dentista-b-teal" type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <span className="tl-err">{errors.email}</span>}
                </div>

                <div className="tl-field">
                  <label htmlFor="f-motivo-dentista-b-teal">Motivo</label>
                  <select id="f-motivo-dentista-b-teal" value={motivo} onChange={(e) => setMotivo(e.target.value)} required>
                    <option value="">Selecciona</option>
                    <option>Evaluación general</option>
                    <option>Dolor/urgencia</option>
                    <option>Limpieza</option>
                    <option>Ortodoncia</option>
                    <option>Implante</option>
                    <option>Estética</option>
                    <option>Otro</option>
                  </select>
                  {errors.motivo && <span className="tl-err">{errors.motivo}</span>}
                </div>

                <div className="tl-field">
                  <label htmlFor="f-detalle-dentista-b-teal">Cuéntanos en una línea</label>
                  <textarea id="f-detalle-dentista-b-teal" rows={3} placeholder="Cuéntanos en una línea" value={detalle} onChange={(e) => setDetalle(e.target.value)} />
                </div>

                <label className="tl-check">
                  <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} />
                  <span>Acepto que me contacten por WhatsApp</span>
                </label>

                <button type="submit" className="tl-btn tl-btn--primary tl-submit" disabled={loading}>
                  {loading ? "Enviando…" : "Agendar hora"}
                </button>
                {success && <p className="tl-success">✓ Te escribimos hoy · revisa tu WhatsApp</p>}
              </form>
            </div>

            <div className="tl-book__aside">
              <a href="tel:+56981234567" className="tl-book__phone">+56 9 8123 4567</a>
              <a href="mailto:hola@lagoazul.cl" className="tl-book__mail">hola@lagoazul.cl</a>
              <p className="tl-book__addr">Av. Providencia 1208, Providencia, Santiago</p>
              <p className="tl-book__hours"><span className="tl-dot" aria-hidden="true" /> Lun–Vie 9:00–19:30 · Sáb 10:00–14:00</p>
              <div className="tl-rail"><span className="tl-dot" aria-hidden="true" /> Metro Los Leones · 3 min a pie</div>

              <div className="tl-proof">
                {!proofError ? (
                  <img src={proofSrc} alt="Pasillo recepción vacía luminosa con vidrio y madera clara, luz lago difusa" loading="lazy" onError={() => setProofError(true)} />
                ) : (
                  <div className="tl-missing" data-falta="lago-azul-proof-16x9.png" style={{ aspectRatio: "16/9" }}>falta: lago-azul-proof-16x9.png</div>
                )}
              </div>
              <p className="tl-confidence">Boleta reembolsable · Fonasa nivel 3 · Isapre todas</p>
            </div>
          </div>

          <footer className="tl-foot">
            <p>LAGO AZUL SpA · Av. Providencia 1208, Providencia · hola@lagoazul.cl · +56 9 8123 4567</p>
            <p>© 2026 LAGO AZUL. Todos los derechos reservados. Valores referenciales.</p>
          </footer>
        </section>
      </main>

      <div className={`tl-sticky ${stickyVisible ? "visible" : ""}`} aria-hidden={!stickyVisible}>
        <a href="#hora-lago" className="tl-btn tl-btn--primary tl-sticky__btn">Agendar hora</a>
      </div>
    </>
  );
}
