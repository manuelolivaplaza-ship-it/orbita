import { useEffect, useState } from "react";

export function App() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMissing, setDesktopMissing] = useState(false);
  const [mobileMissing, setMobileMissing] = useState(false);

  // media faltante cosechas / cata / barricas / proof
  const [tile01Missing, setTile01Missing] = useState(false);
  const [tile02Missing, setTile02Missing] = useState(false);
  const [tile03Missing, setTile03Missing] = useState(false);
  const [tile04Missing, setTile04Missing] = useState(false);
  const [cataMissing, setCataMissing] = useState(false);
  const [interiorMissing, setInteriorMissing] = useState(false);
  const [proofMissing, setProofMissing] = useState(false);

  // CTA persistente móvil
  const [showSticky, setShowSticky] = useState(false);

  // form
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 24);
      const scrolled = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? scrolled / docH : 0;
      setShowSticky(p > 0.35);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const test = (src: string, onMissing: () => void, label: string) => {
      const img = new Image();
      img.onload = () => {};
      img.onerror = () => {
        onMissing();
        console.warn(`[NOCTUA] media faltante: ${label}`);
      };
      img.src = src;
    };
    test("/media/noctua-hero-16x9.png", () => setDesktopMissing(true), "noctua-hero-16x9.png");
    test("/media/noctua-hero-9x16.png", () => setMobileMissing(true), "noctua-hero-9x16.png");
    test("/media/noctua-tile-01-1x1.png", () => setTile01Missing(true), "noctua-tile-01-1x1.png");
    test("/media/noctua-tile-02-1x1.png", () => setTile02Missing(true), "noctua-tile-02-1x1.png");
    test("/media/noctua-tile-03-3x4.png", () => setTile03Missing(true), "noctua-tile-03-3x4.png");
    test("/media/noctua-tile-04-3x4.png", () => setTile04Missing(true), "noctua-tile-04-3x4.png");
    test("/media/noctua-cata-4x3.png", () => setCataMissing(true), "noctua-cata-4x3.png");
    test("/media/noctua-interior-16x9.png", () => setInteriorMissing(true), "noctua-interior-16x9.png");
    test("/media/noctua-proof-16x9.png", () => setProofMissing(true), "noctua-proof-16x9.png");
  }, []);

  useEffect(() => {
    if (showSticky) document.body.style.paddingBottom = "68px";
    else document.body.style.paddingBottom = "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [showSticky]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres).";
    const telOk = /^\+56\s?2?\s?9?\s?\d{3,4}\s?\d{3,4}$/.test(tel.trim()) || /^\+56\s?\d{1,2}\s?\d{3,4}\s?\d{3,4}$/.test(tel.trim()) || tel.trim().startsWith("+56");
    // pattern +56 required
    if (!tel.trim().startsWith("+56") || tel.trim().length < 8) e.tel = "Ingresa un teléfono válido con +56.";
    else if (!telOk) e.tel = "Revisa el formato +56 9 1234 5678.";
    if (!fecha) e.fecha = "Elige una fecha.";
    if (!personas) e.personas = "Elige cantidad.";
    if (mensaje.trim().length < 10) e.mensaje = "Cuéntanos algo más (mín. 10 caracteres).";
    if (!acepta) e.acepta = "Debes aceptar para continuar.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSuccess(false);
    setTimeout(() => {
      const payload = { nombre, tel, fecha, personas, mensaje, at: new Date().toISOString() };
      try {
        localStorage.setItem("noctua-reserva", JSON.stringify(payload));
      } catch {}
      const text = `Hola NOCTUA, quiero reservar cata ${fecha} para ${personas}. Soy ${nombre}.`;
      const waUrl = `https://wa.me/56228407710?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank");
      setSending(false);
      setSuccess(true);
      // mailto fallback hint: if popup blocked, user can mail
    }, 650);
  };

  return (
    <>
      <header className={`site-header ${compact ? "is-compact" : ""}`}>
        <div className="header__inner">
          <a href="#cava" className="header__brand" aria-label="NOCTUA — inicio">
            <span className="header__logo">NOCTUA</span>
            <span className="header__descriptor">Cava · Pirque · Desde 2007</span>
          </a>

          <button
            className="header__burger"
            aria-label="Abrir navegación"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="header__nav" aria-label="Navegación principal">
            <a href="#cosechas">Cosechas</a>
            <a href="#cata-nocturna">Cata nocturna</a>
            <a href="#barricas">Barricas</a>
            <a href="#tienda-cava">Tienda</a>
          </nav>

          <a href="tel:+56228407710" className="header__tel tel">
            +56 2 2840 7710
          </a>

          <a href="tel:+56228407710" className="header__tel--icon" aria-label="Llamar +56 2 2840 7710">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 4a1 1 0 0 1 1 1v3a1 1 0 0 1-.3.7l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a1 1 0 0 1 .7-.3h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1 19 19 0 0 1-14-14 1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <div className="header__cta">
            <a href="#reserva-cata">
              <span className="cta-full">Reservar cata</span>
              <span className="cta-short">Reservar</span>
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu is-open">
            <nav aria-label="Navegación móvil">
              <a href="#cosechas" onClick={() => setMenuOpen(false)}>
                Cosechas
              </a>
              <a href="#cata-nocturna" onClick={() => setMenuOpen(false)}>
                Cata nocturna
              </a>
              <a href="#barricas" onClick={() => setMenuOpen(false)}>
                Barricas
              </a>
              <a href="#tienda-cava" onClick={() => setMenuOpen(false)}>
                Tienda
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="cava" className="hero" aria-label="Cava">
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="hero__kicker">CAVA · PIRQUE · 12 BARICAS AL AÑO</p>
              <h1 className="hero__title">Una sola barrica guarda cien noches: prueba dónde nace NOCTUA esta noche.</h1>
              <p className="hero__sub">Cata nocturna de 75 minutos en cava de basalto. Tres cosechas, pan de masa madre y la barrica abierta a tu lado.</p>

              <div className="hero__ctas">
                <a href="#reserva-cata" className="btn-primary">
                  Reservar cata
                </a>
                <a href="#tienda-cava" className="btn-ghost">
                  Ver tienda
                </a>
              </div>

              <div className="hero__banda" aria-label="Información honesta">
                <span className="hero__banda-item">
                  <span className="hero__banda-dot" aria-hidden="true" /> Cupos de 8 por noche
                </span>
                <span className="hero__banda-item">
                  <span className="hero__banda-dot" aria-hidden="true" /> Guía enóloga residente
                </span>
                <span className="hero__banda-item">
                  <span className="hero__banda-dot" aria-hidden="true" /> Compra con retiro en cava
                </span>
              </div>

              <p className="hero__micro">NOCTUA Cava SpA · RUT 76.412.890-1 · Pirque, Valle del Maipo. Venta exclusiva a mayores de 18 años. Beber con moderación.</p>
            </div>

            <div className="hero__altar">
              {desktopMissing ? (
                <div className="media-falta" data-falta="noctua-hero-16x9.png" role="img" aria-label="media faltante noctua-hero-16x9.png" />
              ) : (
                <>
                  <div className="hero__media">
                    <picture>
                      <source media="(max-width: 720px)" srcSet="/media/noctua-hero-9x16.png" />
                      <img
                        src="/media/noctua-hero-16x9.png"
                        alt="Altar NOCTUA — botella Gran Reserva 2021 sobre mesa de barrica en cava de basalto con cenital ambar 38°"
                        width={1280}
                        height={720}
                        loading="eager"
                        onError={() => {
                          setDesktopMissing(true);
                          console.warn("[NOCTUA] media faltante: noctua-hero-16x9.png");
                        }}
                      />
                    </picture>
                  </div>
                  <p className="hero__caption">Altar: botella Gran Reserva 2021 · mesa de barrica · cenital ambar 38°</p>
                </>
              )}
              {mobileMissing && desktopMissing && (
                <div className="media-falta" data-falta="noctua-hero-9x16.png" role="img" aria-label="media faltante noctua-hero-9x16.png" style={{ display: "none" }} />
              )}
              {mobileMissing && !desktopMissing && (
                <span data-falta="noctua-hero-9x16.png" aria-hidden="true" style={{ display: "none" }}>
                  media faltante noctua-hero-9x16.png
                </span>
              )}
            </div>
          </div>
        </section>

        {/* #cosechas */}
        <section id="cosechas" className="sec cosechas" aria-label="Cosechas">
          <div className="wrap grid12 cosechas__grid">
            <div className="cosechas__header">
              <p className="kicker">COSECHAS</p>
              <h2 className="h2">Cuatro cosechas. Una guarda. El resto espera.</h2>
              <p className="intro">No embotellamos todo. Micro-cosechas de 1 a 2 barricas, guarda de 14 meses en roble francés. Si no está a altura, no sale.</p>
              <p className="indice">2021 — 2024 · guarda mínima 14 meses</p>
            </div>

            <div className="cosechas__list">
              {/* 01 */}
              <article className="ficha">
                <div className="ficha__num">01</div>
                <div className="ficha__content">
                  <div className="ficha__thumb">
                    {tile01Missing ? (
                      <div className="media-falta thumb" data-falta="noctua-tile-01-1x1.png" role="img" aria-label="media faltante noctua-tile-01-1x1.png" />
                    ) : (
                      <img
                        src="/media/noctua-tile-01-1x1.png"
                        alt="Gran Reserva 2021 — detalle etiqueta bronce"
                        width={200}
                        height={200}
                        loading="lazy"
                        onError={() => setTile01Missing(true)}
                      />
                    )}
                  </div>
                  <div className="ficha__text">
                    <h3 className="ficha__title">
                      Gran Reserva 2021 <span className="badge">AGOTANDO</span> <span className="ficha__variedad">Carménère / Cabernet</span>
                    </h3>
                    <p className="ficha__notas">Mora negra, grafito y tabaco. 14 meses barrica, 6 botella. 900 botellas.</p>
                    <p className="ficha__desde price">Botella 750ml desde $24.900 · Caja 6 desde $139.000</p>
                  </div>
                </div>
              </article>

              {/* 02 */}
              <article className="ficha">
                <div className="ficha__num">02</div>
                <div className="ficha__content">
                  <div className="ficha__thumb">
                    {tile02Missing ? (
                      <div className="media-falta thumb" data-falta="noctua-tile-02-1x1.png" role="img" aria-label="media faltante noctua-tile-02-1x1.png" />
                    ) : (
                      <img
                        src="/media/noctua-tile-02-1x1.png"
                        alt="Reserva Pirque 2022 — botella acostada sobre laja basalto"
                        width={200}
                        height={200}
                        loading="lazy"
                        onError={() => setTile02Missing(true)}
                      />
                    )}
                  </div>
                  <div className="ficha__text">
                    <h3 className="ficha__title">
                      Reserva Pirque 2022 <span className="ficha__variedad">Syrah</span>
                    </h3>
                    <p className="ficha__notas">Pimienta, arándano y piedra. 12 meses barrica, fresca y vertical. 1.200 botellas.</p>
                    <p className="ficha__desde price">Desde $18.500 · Caja 6 desde $102.000</p>
                  </div>
                </div>
              </article>

              {/* 03 */}
              <article className="ficha">
                <div className="ficha__num">03</div>
                <div className="ficha__content">
                  <div className="ficha__thumb thumb--34">
                    {tile03Missing ? (
                      <div className="media-falta thumb" data-falta="noctua-tile-03-3x4.png" role="img" aria-label="media faltante noctua-tile-03-3x4.png" />
                    ) : (
                      <img
                        src="/media/noctua-tile-03-3x4.png"
                        alt="Noctua Blanc 2023 — botella clara vertical"
                        width={180}
                        height={240}
                        loading="lazy"
                        onError={() => setTile03Missing(true)}
                      />
                    )}
                  </div>
                  <div className="ficha__text">
                    <h3 className="ficha__title">
                      Noctua Blanc 2023 <span className="ficha__variedad">Chardonnay barrica</span>
                    </h3>
                    <p className="ficha__notas">Mantequilla, avellana y lima. 10 meses barrica usada, batonnage semanal. 600 botellas.</p>
                    <p className="ficha__desde price">Desde $19.900 · Caja 6 desde $109.000</p>
                  </div>
                </div>
              </article>

              {/* 04 */}
              <article className="ficha">
                <div className="ficha__num">04</div>
                <div className="ficha__content">
                  <div className="ficha__thumb thumb--34">
                    {tile04Missing ? (
                      <div className="media-falta thumb" data-falta="noctua-tile-04-3x4.png" role="img" aria-label="media faltante noctua-tile-04-3x4.png" />
                    ) : (
                      <img
                        src="/media/noctua-tile-04-3x4.png"
                        alt="Rosé de Guarda 2024 — botella rosé con pomelo"
                        width={180}
                        height={240}
                        loading="lazy"
                        onError={() => setTile04Missing(true)}
                      />
                    )}
                  </div>
                  <div className="ficha__text">
                    <h3 className="ficha__title">
                      Rosé de Guarda 2024 <span className="ficha__variedad">Pinot Noir</span>
                    </h3>
                    <p className="ficha__notas">Pomelo rosado y sal. Prensa directa, guarda breve. Partida única 400 botellas.</p>
                    <p className="ficha__desde price">Desde $16.900 · Caja 6 desde $94.000</p>
                  </div>
                </div>
              </article>

              <p className="cosechas__nota">
                ¿Buscas guarda larga? La 2021 está en su ventana. La 2022 pide decantar 30 min.
              </p>
            </div>
          </div>
        </section>

        {/* #cata-nocturna */}
        <section id="cata-nocturna" className="sec cata" aria-label="Cata nocturna">
          <div className="wrap grid12 cata__grid">
            <div className="cata__media">
              {cataMissing ? (
                <div className="media-falta media-4x3" data-falta="noctua-cata-4x3.png" role="img" aria-label="media faltante noctua-cata-4x3.png" />
              ) : (
                <>
                  <div className="img-frame">
                    <img
                      src="/media/noctua-cata-4x3.png"
                      alt="Mesa de barrica con pipeta y tres copas vista cenital 38°"
                      width={640}
                      height={480}
                      loading="lazy"
                      onError={() => setCataMissing(true)}
                    />
                  </div>
                  <p className="caption">Mesa de barrica · pipeta y tres copas · cenital 38°</p>
                </>
              )}
            </div>

            <div className="cata__content">
              <p className="kicker">CATA NOCTURNA</p>
              <h2 className="h2 h2--cata">75 minutos donde la cava hace el silencio</h2>
              <p className="intro">A las 20:00 la cava baja a 15°. Ocho lugares, sin música, con la barrica abierta a tu lado. La enóloga sirve, tú anotas.</p>

              <div className="pasos">
                <div className="paso">
                  <span className="paso__num">01</span>
                  <div>
                    <h3 className="paso__title">Llegada y piedra</h3>
                    <p className="paso__text">Bajas a la cava, tocas el basalto húmedo. Pan de masa madre y agua de Pirque en la mesa.</p>
                  </div>
                </div>
                <div className="paso">
                  <span className="paso__num">02</span>
                  <div>
                    <h3 className="paso__title">Tres cosechas a ciegas</h3>
                    <p className="paso__text">Sirve 2022, 2023 y 2021 sin etiqueta. Anotas, comparas, eliges. Sin puntajes, solo tu boca.</p>
                  </div>
                </div>
                <div className="paso">
                  <span className="paso__num">03</span>
                  <div>
                    <h3 className="paso__title">Barrica abierta</h3>
                    <p className="paso__text">Pruebas directo de barrica con pipeta. Te llevas ficha y botella a precio de cava.</p>
                  </div>
                </div>
              </div>

              <ul className="checklist" aria-label="Incluye">
                <li>Ficha de cata impresa</li>
                <li>Copa Riedel de regalo</li>
                <li>Botella 375ml de cortesía</li>
                <li>10% en tienda esa noche</li>
              </ul>

              <p className="cata__precio">Cata nocturna $38.000 p/p — 8 cupos, jueves a sábado 20:00. Se descuenta $15.000 si llevas caja.</p>
            </div>
          </div>
        </section>

        {/* #barricas */}
        <section id="barricas" className="sec barricas" aria-label="Barricas">
          <div className="wrap grid12 barricas__grid">
            <div className="barricas__text">
              <p className="kicker">BARRICAS</p>
              <h2 className="h2">14 meses quieta. Sin apuro ni maquillaje.</h2>
              <p className="intro">Roble francés de segundo uso, toast medio. No filtramos en frío. La guarda la hace el tiempo, no el marketing.</p>

              <div className="datos">
                <div className="dato">
                  <span className="dato__val">12 barricas/año</span>
                  <span className="dato__label">Micro-producción 2.400 botellas</span>
                </div>
                <div className="dato">
                  <span className="dato__val">Basalto 15°</span>
                  <span className="dato__label">Cava subterránea, humedad 82%</span>
                </div>
                <div className="dato">
                  <span className="dato__val">Sin filtrar</span>
                  <span className="dato__label">Decanta 20 min y sirve</span>
                </div>
              </div>

              <div className="principios">
                <div className="princ">
                  <h3>Segundo uso</h3>
                  <p>Madera que no tapa la fruta. Solo ordena.</p>
                </div>
                <div className="princ">
                  <h3>Batonnage</h3>
                  <p>Blanc 2023: lías finas cada lunes. Textura sin crema.</p>
                </div>
                <div className="princ">
                  <h3>Pirque</h3>
                  <p>Suelo pedregoso, riego por goteo, cosecha manual de madrugada.</p>
                </div>
                <div className="princ">
                  <h3>Etiqueta bronce</h3>
                  <p>Estampada en frío, sin plástico. Tinta vegetal.</p>
                </div>
              </div>
            </div>

            <div className="barricas__media">
              {interiorMissing ? (
                <div className="media-falta media-16x9" data-falta="noctua-interior-16x9.png" role="img" aria-label="media faltante noctua-interior-16x9.png" />
              ) : (
                <>
                  <div className="img-frame">
                    <img
                      src="/media/noctua-interior-16x9.png"
                      alt="Fila de barricas en cava de basalto con luz cenital al fondo"
                      width={640}
                      height={360}
                      loading="lazy"
                      onError={() => setInteriorMissing(true)}
                    />
                  </div>
                  <p className="caption">Cava NOCTUA · fila 2023–2024 · basalto húmedo</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* #tienda-cava */}
        <section id="tienda-cava" className="sec tienda" aria-label="Tienda cava">
          <div className="wrap grid12">
            <div className="tienda__header">
              <p className="kicker">TIENDA CAVA</p>
              <h2 className="h2">Precios de cava, sin retail ni letra chica</h2>
              <p className="intro">Retiro en cava o despacho a RM. Valores IVA incluido. Caja de 6 con 10% menos. La cata descuenta $15.000 en tu primera caja.</p>
            </div>

            <div className="tienda__table">
              <div className="tabla__head">
                <span>Producto</span>
                <span>Desde</span>
                <span>Nota</span>
              </div>

              <div className="tabla__row">
                <span className="cell-prod">Gran Reserva 2021 · 750ml</span>
                <span className="cell-price price">desde $24.900</span>
                <span className="cell-nota">900 botellas · guarda 14+6 · caja 6 $139.000</span>
              </div>
              <div className="tabla__row">
                <span className="cell-prod">Reserva Pirque 2022 · 750ml</span>
                <span className="cell-price price">desde $18.500</span>
                <span className="cell-nota">1.200 botellas · caja 6 $102.000</span>
              </div>
              <div className="tabla__row">
                <span className="cell-prod">Noctua Blanc 2023 · 750ml</span>
                <span className="cell-price price">desde $19.900</span>
                <span className="cell-nota">600 botellas · caja 6 $109.000</span>
              </div>
              <div className="tabla__row">
                <span className="cell-prod">Rosé de Guarda 2024 · 750ml</span>
                <span className="cell-price price">desde $16.900</span>
                <span className="cell-nota">400 botellas · caja 6 $94.000</span>
              </div>
              <div className="tabla__row">
                <span className="cell-prod">Cata nocturna (75 min, 8 cupos)</span>
                <span className="cell-price price">$38.000 p/p</span>
                <span className="cell-nota">Jue–Sáb 20:00 · -$15.000 en caja esa noche</span>
              </div>
              <div className="tabla__row">
                <span className="cell-prod">Vertical 2021-2024 (3 botellas)</span>
                <span className="cell-price price">$58.500</span>
                <span className="cell-nota">Estuche basalto · solo en cava</span>
              </div>
              <div className="tabla__row">
                <span className="cell-prod">Visita + cata privada (6–8 pax)</span>
                <span className="cell-price price">desde $220.000</span>
                <span className="cell-nota">Enóloga exclusiva · reserva con 7 días</span>
              </div>
              <div className="tabla__row">
                <span className="cell-prod">Despacho RM · retiro Pirque</span>
                <span className="cell-price price">$6.900 / $0</span>
                <span className="cell-nota">Gratis sobre $90.000 · retiro sin costo</span>
              </div>

              <p className="tienda__pie">
                Valores referenciales; se confirman al reservar. Venta solo a mayores de 18 años. Despacho RM 24–48h, regiones 72h vía Chilexpress. Quebrados se reponen sin costo con foto en 24h.
              </p>
              <p className="tienda__facil">3 cuotas sin interés con Transbank · Transferencia con 5% dcto. adicional.</p>
            </div>

            <aside className="tienda__aside" aria-label="Reserva esta semana">
              <h3>¿Vienes esta semana?</h3>
              <p className="aside__txt">Jueves a sábado quedan 3 cupos. Reserva hoy y aseguras botella 2021 a precio cava.</p>
              <a href="tel:+56228407710" className="aside__tel tel">+56 2 2840 7710</a>
              <p className="aside__sub">Mié–Dom 11:00–20:00 · Lun–Mar cerrado por guarda</p>
              <a href="#reserva-cata" className="aside__cta">
                Reservar cata
              </a>
              <p className="aside__micro">Si no contestamos en 2 horas hábiles, tu cata va con copa de regalo.</p>
            </aside>
          </div>
        </section>

        {/* #reserva-cata */}
        <section id="reserva-cata" className="sec reserva" aria-label="Reserva cata">
          <div className="wrap grid12 reserva__grid">
            <div className="reserva__formcol">
              <p className="kicker">RESERVA</p>
              <h2 className="h2">Reserva tu noche. Te confirmamos hoy.</h2>
              <p className="intro">Elige jueves, viernes o sábado 20:00 y te confirmamos por WhatsApp en el día. Cupo se guarda 24h.</p>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="noctua-nombre">Nombre</label>
                  <input
                    id="noctua-nombre" name="noctua-nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    autoComplete="name"
                  />
                  {errors.nombre && <span className="err">{errors.nombre}</span>}
                </div>

                <div className="field">
                  <label htmlFor="noctua-tel">Teléfono</label>
                  <input
                    id="noctua-tel" name="noctua-tel"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    required
                    className="tel"
                    autoComplete="tel"
                  />
                  {errors.tel && <span className="err">{errors.tel}</span>}
                </div>

                <div className="field">
                  <label htmlFor="noctua-fecha">Fecha cata</label>
                  <select id="noctua-fecha" name="noctua-fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required>
                    <option value="">Elige fecha</option>
                    <option>Jueves 20:00</option>
                    <option>Viernes 20:00</option>
                    <option>Sábado 20:00</option>
                    <option>Privada 6–8 pax</option>
                  </select>
                  {errors.fecha && <span className="err">{errors.fecha}</span>}
                </div>

                <div className="field">
                  <label htmlFor="noctua-personas">Personas</label>
                  <select id="noctua-personas" name="noctua-personas" value={personas} onChange={(e) => setPersonas(e.target.value)} required>
                    <option value="">Elige</option>
                    <option>1 persona</option>
                    <option>2 personas</option>
                    <option>3–4 personas</option>
                    <option>5–8 personas</option>
                  </select>
                  {errors.personas && <span className="err">{errors.personas}</span>}
                </div>

                <div className="field field--full">
                  <label htmlFor="noctua-mensaje">Mensaje</label>
                  <textarea
                    id="noctua-mensaje" name="noctua-mensaje"
                    placeholder="¿Vienes con alguien? ¿Alguna alergia o preferencia?"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                  />
                  {errors.mensaje && <span className="err">{errors.mensaje}</span>}
                </div>

                <label className="check">
                  <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} />
                  <span>
                    Acepto que me contacten por WhatsApp y correo para confirmar la cata — <a href="#" className="link-priv">privacidad</a>
                  </span>
                </label>
                {errors.acepta && <span className="err">{errors.acepta}</span>}

                <button type="submit" className="form__cta" disabled={sending}>
                  {sending ? "Enviando…" : "Reservar cata"}
                </button>

                {success && <p className="form__success">✓ Quedaste pre-reservada · revisa tu WhatsApp</p>}
                <p className="form__alt">
                  O escríbenos directo: <a href="https://wa.me/56228407710" target="_blank" rel="noreferrer">WhatsApp</a> ·{" "}
                  <a href="mailto:cava@noctua.cl">cava@noctua.cl</a>
                </p>
              </form>
            </div>

            <div className="reserva__datos">
              <a href="tel:+56228407710" className="reserva__tel tel">
                +56 2 2840 7710
              </a>
              <a href="mailto:cava@noctua.cl" className="reserva__email">
                cava@noctua.cl
              </a>
              <p className="reserva__dir">Camino El Principal 1.240, Pirque, Valle del Maipo</p>
              <p className="reserva__hor">
                <span className="dot" aria-hidden="true" /> Cata 20:00 Jue–Sáb · Tienda Mié–Dom 11:00–20:00
              </p>

              <div className="mapa-linea" aria-label="Ubicación">
                <span className="mapa-linea__bar">
                  <span className="mapa-linea__dot" aria-hidden="true" />
                </span>
                <span className="mapa-linea__label">A 35 min de Las Condes · estacionamiento interior</span>
              </div>

              <div className="reserva__proof">
                {proofMissing ? (
                  <div className="media-falta media-16x9" data-falta="noctua-proof-16x9.png" role="img" aria-label="media faltante noctua-proof-16x9.png" />
                ) : (
                  <div className="img-frame">
                    <img
                      src="/media/noctua-proof-16x9.png"
                      alt="Mesa de barrica vacía con tres copas y ficha de cata iluminada cenital"
                      width={640}
                      height={360}
                      loading="lazy"
                      onError={() => setProofMissing(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="wrap">
            <footer className="footer">
              <p className="footer__line">NOCTUA Cava SpA · RUT 76.412.890-1 · Camino El Principal 1.240, Pirque · cava@noctua.cl · +56 2 2840 7710</p>
              <p className="footer__copy">© 2026 NOCTUA. Todos los derechos reservados. Valores referenciales; se confirman al reservar. Venta solo a mayores de 18 años.</p>
              <nav className="footer__nav" aria-label="Footer">
                <a href="#cosechas">Cosechas</a> · <a href="#cata-nocturna">Cata nocturna</a> · <a href="#barricas">Barricas</a> · <a href="#tienda-cava">Tienda</a>
              </nav>
            </footer>
          </div>
        </section>
      </main>

      {showSticky && (
        <div className="sticky-cta" role="complementary" aria-label="Reservar cata">
          <a href="#reserva-cata">Reservar cata</a>
        </div>
      )}
    </>
  );
}
