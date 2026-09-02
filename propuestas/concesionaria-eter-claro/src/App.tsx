import { useEffect, useState, useRef } from "react";

// ── helpers ──
function useCountUp(active: boolean, target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

function MediaFalta({ file, ratio }: { file: string; ratio: string }) {
  return (
    <div
      className="media-falta"
      data-falta={file}
      style={{
        aspectRatio: ratio,
        border: "1px solid var(--linea)",
        display: "grid",
        placeItems: "center",
        color: "var(--gris)",
        fontSize: 12,
        background: "var(--papel-2)",
      }}
    >
      Falta {file}
    </div>
  );
}

const WA_LINK = "https://wa.me/56228403315";
const TEL_HREF = "tel:+56228403315";
const TEL_LABEL = "+56 2 2840 3315";

// ── STOCK data ──
const STOCK_ROWS = [
  { n: "01", nombre: "Citycar y hatch", meta: "desde $7.490.000 · 2019 · 62.000 km · pie $1.498.000 + cuota $148.000" },
  { n: "02", nombre: "Sedán", meta: "desde $9.900.000 · 2020 · 48.000 km · pie $1.980.000 + cuota $182.000" },
  { n: "03", nombre: "SUV / Crossover", meta: "desde $13.900.000 · 2020 · 55.000 km · pie $2.780.000 + cuota $256.000" },
  { n: "04", nombre: "Camioneta", meta: "desde $16.500.000 · 2021 · 71.000 km · pie $3.300.000 + cuota $298.000" },
  { n: "05", nombre: "Premium / alta gama", meta: "desde $24.900.000 · 2022 · 38.000 km · pie $4.980.000 + cuota $438.000" },
  { n: "06", nombre: "Consignación", meta: "tasación $0 · resguardo Manquehue · pago al instante" },
];

// ── FAQ ──
const FAQS = [
  {
    q: "¿Cómo funciona la tasación online y cuánto demora realmente?",
    a: "Envías patente + 6 fotos por WhatsApp o formulario. En 15 min hábiles te llamamos con valor de mercado Las Condes, no con '¿qué auto es?'. Si vienes, verificamos VIN y cerramos.",
  },
  {
    q: "¿El precio publicado incluye transferencia y qué cubre la garantía de usados?",
    a: "Sí, precio con IVA y transferencia incluida en 5 días hábiles. Garantía legal 3 meses motor/caja, extendible 12 meses. Informe 150 puntos en mano.",
  },
  {
    q: "¿Reciben mi auto en parte de pago y cómo valoran el retoma?",
    a: "Sí, retoma con tasación 15 min + inspección. Valor según mercado real, no castigado. Descuento directo del pie.",
  },
  {
    q: "¿Qué revisan en los 150 puntos y puedo ver el informe antes?",
    a: "Mecánica, carrocería, pintura por panel, VIN/km, prenda/multa/encargo, historial. Informe impreso en visita, sin letra chica.",
  },
  {
    q: "¿Cómo funciona el crédito y qué pasa si es rechazado?",
    a: "Pie mínimo 20%, cuota 48m simulada, CAE antes de firmar. Bancario vs automotriz explicado. Si rechazan, te proponemos alternativa o devolvemos reserva.",
  },
  {
    q: "¿En cuántos días tengo el padrón y puedo agendar test drive sin compromiso?",
    a: "Padrón 5 días hábiles a tu nombre. Test drive 45 min con hora agendada, sin compromiso. Si no vienes, reprogramamos.",
  },
];

export function App() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaOkDesktop, setMediaOkDesktop] = useState<boolean | null>(null);
  const [mediaOkMobile, setMediaOkMobile] = useState<boolean | null>(null);

  // media tile probes
  const [tile1Ok, setTile1Ok] = useState<boolean | null>(null);
  const [tile2Ok, setTile2Ok] = useState<boolean | null>(null);
  const [inspeccionOk, setInspeccionOk] = useState<boolean | null>(null);
  const [detalleOk, setDetalleOk] = useState<boolean | null>(null);
  const [patioOk, setPatioOk] = useState<boolean | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
      if (y > lastY && y > 120) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const probe = async (url: string) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        return res.ok;
      } catch {
        return false;
      }
    };
    probe("/media/eter-hero-16x9.png").then(setMediaOkDesktop);
    probe("/media/eter-hero-9x16.png").then(setMediaOkMobile);
    probe("/media/eter-tile-01-4x3.png").then(setTile1Ok);
    probe("/media/eter-tile-02-1x1.png").then(setTile2Ok);
    probe("/media/eter-inspeccion-16x9.png").then(setInspeccionOk);
    probe("/media/eter-detalle-3x4.png").then(setDetalleOk);
    probe("/media/eter-patio-16x9.png").then(setPatioOk);
    // og metadata — inject if file exists (no visible block)
    probe("/media/eter-og-16x9.png").then((ok) => {
      if (ok) {
        let m = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
        if (!m) {
          m = document.createElement("meta");
          m.setAttribute("property", "og:image");
          document.head.appendChild(m);
        }
        m.content = "/media/eter-og-16x9.png";
      }
    });
  }, []);

  const showDesktopImg = mediaOkDesktop === true;
  const showMobileImg = mediaOkMobile === true;
  const fallbackDesktopVisible = mediaOkDesktop !== true;
  const fallbackMobileVisible = mediaOkMobile !== true;

  // ── cifras count-up ──
  const cifrasRef = useRef<HTMLElement | null>(null);
  const [cifrasActive, setCifrasActive] = useState(false);
  useEffect(() => {
    const el = cifrasRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCifrasActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const countAnios = useCountUp(cifrasActive, 14);
  const countAutos = useCountUp(cifrasActive, 6200);
  const countPct = useCountUp(cifrasActive, 98);
  const countTas = useCountUp(cifrasActive, 2800);

  // ── cortina reveals ──
  const [cortinaFicha, setCortinaFicha] = useState(false);
  const fichaMediaRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = fichaMediaRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCortinaFicha(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ── tasacion form ──
  const [tasForm, setTasForm] = useState({ patente: "", marca: "", modelo: "", ano: "", km: "", telefono: "", email: "" });
  const [tasErrors, setTasErrors] = useState<Record<string, string>>({});
  const [tasLoading, setTasLoading] = useState(false);
  const [tasSuccess, setTasSuccess] = useState(false);
  useEffect(() => {
    try {
      const p = localStorage.getItem("eter_patente");
      const e = localStorage.getItem("eter_email");
      if (p || e) setTasForm((f) => ({ ...f, patente: p || f.patente, email: e || f.email }));
    } catch {}
  }, []);
  const validateTas = () => {
    const err: Record<string, string> = {};
    const pat = tasForm.patente.trim().toUpperCase();
    if (!/^[A-Z0-9]{6,8}$/.test(pat.replace(/[- ]/g, ""))) err.patente = "Patente 6–8 caracteres alfanuméricos.";
    if (!tasForm.marca.trim()) err.marca = "Ingresa la marca.";
    if (!tasForm.modelo.trim()) err.modelo = "Ingresa el modelo.";
    const ano = Number(tasForm.ano);
    if (!ano || ano < 2005 || ano > 2025) err.ano = "Año entre 2005 y 2025.";
    const km = Number(String(tasForm.km).replace(/\./g, "").replace(/,/g, ""));
    if (!km || km <= 0) err.km = "Kilometraje debe ser mayor a 0.";
    const tel = tasForm.telefono.trim();
    if (!/^(\+?56)?\s*9\d{8}$/.test(tel.replace(/[\s-]/g, ""))) err.telefono = "Teléfono chileno +56 9xxxxxxxx.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tasForm.email.trim())) err.email = "Email inválido.";
    return err;
  };
  const handleTasSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateTas();
    setTasErrors(err);
    if (Object.keys(err).length) return;
    setTasLoading(true);
    setTimeout(() => {
      setTasLoading(false);
      setTasSuccess(true);
      try {
        localStorage.setItem("eter_patente", tasForm.patente.trim().toUpperCase());
        localStorage.setItem("eter_email", tasForm.email.trim());
      } catch {}
    }, 180);
  };

  // ── reserva form ──
  const [resForm, setResForm] = useState({ nombre: "", telefono: "", email: "", segmento: "", mensaje: "" });
  const [resErrors, setResErrors] = useState<Record<string, string>>({});
  const [resLoading, setResLoading] = useState(false);
  const [resSuccess, setResSuccess] = useState(false);
  const validateRes = () => {
    const err: Record<string, string> = {};
    if (!resForm.nombre.trim()) err.nombre = "Ingresa tu nombre.";
    if (!/^(\+?56)?\s*9\d{8}$/.test(resForm.telefono.trim().replace(/[\s-]/g, ""))) err.telefono = "Teléfono +56 9xxxxxxxx.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resForm.email.trim())) err.email = "Email inválido.";
    if (!resForm.segmento) err.segmento = "Elige un segmento.";
    return err;
  };
  const handleResSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateRes();
    setResErrors(err);
    if (Object.keys(err).length) return;
    setResLoading(true);
    setTimeout(() => {
      setResLoading(false);
      setResSuccess(true);
    }, 180);
  };

  // ── FAQ open ──
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // ── sticky bar visibility (after hero) ──
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("patio-hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([e]) => setShowSticky(!e.isIntersecting),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className={`site-header ${hidden ? "site-header--hidden" : ""}`} role="banner">
        <div className="site-header__progress" style={{ width: `${progress}%` }} aria-hidden="true" />
        <div className="wrap site-header__inner">
          <a href="#patio-hero" className="site-header__brand" aria-label="ÉTER — inicio">
            <span className="site-header__logo">ETER</span>
            <span className="site-header__kicker">CONCESIONARIA · LAS CONDES</span>
          </a>

          <nav className="site-header__nav" aria-label="Principal">
            <a href="#stock-verificado">Stock</a>
            <a href="#tasacion-15min">Tasación</a>
            <a href="#ficha-150puntos">150 puntos</a>
            <a href="#pie-cuota-real">Financiamiento</a>
            <a href="#dudas-compra">FAQ</a>
          </nav>

          <div className="site-header__right">
            <a href={TEL_HREF} className="site-header__phone" aria-label={`Llamar ${TEL_LABEL}`}>
              <span>{TEL_LABEL}</span>
            </a>
            <a href="#stock-verificado" className="site-header__cta">
              Ver stock
            </a>
            <button
              className="site-header__burger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          className={`site-header__mobile-nav ${menuOpen ? "site-header__mobile-nav--open" : ""}`}
          aria-label="Principal móvil"
        >
          <a href="#stock-verificado" onClick={() => setMenuOpen(false)}>
            Stock
          </a>
          <a href="#tasacion-15min" onClick={() => setMenuOpen(false)}>
            Tasación
          </a>
          <a href="#ficha-150puntos" onClick={() => setMenuOpen(false)}>
            150 puntos
          </a>
          <a href="#pie-cuota-real" onClick={() => setMenuOpen(false)}>
            Financiamiento
          </a>
          <a href="#dudas-compra" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <div className="site-header__mobile-meta">
            <a href={TEL_HREF} style={{ fontSize: 14, fontVariantNumeric: "tabular-nums" }}>
              {TEL_LABEL}
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO — EXACT as BUILD-01, DO NOT RESTYLE */}
        <section id="patio-hero" className="hero">
          <span id="inicio-concesionaria-eter-claro" aria-hidden="true" style={{ position: "absolute" }} />
          <div className="wrap">
            <div className="grid12 hero__grid">
              <div className="hero__copy">
                <p className="kicker hero__kicker">CONCESIONARIA · LAS CONDES · USADOS VERIFICADOS</p>
                <h1 className="h1 hero__h1" aria-label="El auto que ves es el auto que retiras.">
                  <span className="hero__h1-line">
                    <span>El auto que ves</span>
                  </span>
                  <span className="hero__h1-line">
                    <span>es el auto que</span>
                  </span>
                  <span className="hero__h1-line">
                    <span>retiras.</span>
                  </span>
                </h1>
                <p className="hero__sub">
                  Usados y seminuevos verificados con inspección 150 puntos, precio publicado con IVA,
                  financiamiento explicado en pie + cuota real y transferencia en 5 días. Tasación online en
                  15 minutos — sin letra chica ni auto maquillado.
                </p>

                <div className="hero__ctas">
                  <a href="#stock-verificado" className="hero__cta-primary">
                    Ver stock verificado
                  </a>
                  <a href="#tasacion-15min" className="hero__cta-secondary">
                    Tasar mi auto en 15 min →
                  </a>
                </div>

                <div className="hero__filtro" role="group" aria-label="Filtro referencial">
                  <div className="hero__filtro-cell">
                    <span className="hero__filtro-label">Marca</span>
                    <span className="hero__filtro-value">Todos</span>
                  </div>
                  <div className="hero__filtro-cell">
                    <span className="hero__filtro-label">Modelo</span>
                    <span className="hero__filtro-value">Todos</span>
                  </div>
                  <div className="hero__filtro-cell">
                    <span className="hero__filtro-label">Año</span>
                    <span className="hero__filtro-value">2020+</span>
                  </div>
                  <div className="hero__filtro-cell">
                    <span className="hero__filtro-label">Precio</span>
                    <span className="hero__filtro-value">—</span>
                  </div>
                </div>
              </div>

              <div className="hero__media">
                <div className="hero__media-frame hero__media-frame--desktop">
                  {showDesktopImg ? (
                    <img
                      src="/media/eter-hero-16x9.png"
                      alt="Patio de entrega ÉTER — playón de hormigón pulido con autos alineados bajo luz norte, stock fotografiado ayer"
                      loading="eager"
                      decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "16/9" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : null}
                  <div
                    className="media-falta"
                    data-falta="eter-hero-16x9.png"
                    style={{
                      display: fallbackDesktopVisible ? "grid" : "none",
                      aspectRatio: "16/9",
                      border: "1px solid var(--linea)",
                      placeItems: "center",
                      color: "var(--gris)",
                      fontSize: 12,
                      background: "var(--papel-2)",
                    }}
                  >
                    Falta eter-hero-16x9.png
                  </div>
                </div>
                <div className="hero__media-frame hero__media-frame--mobile">
                  {showMobileImg ? (
                    <img
                      src="/media/eter-hero-9x16.png"
                      alt="Patio de entrega ÉTER — vista vertical playón con autos, luz norte"
                      loading="eager"
                      style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "9/16" }}
                    />
                  ) : null}
                  <div
                    className="media-falta media-falta--mobile"
                    data-falta="eter-hero-9x16.png"
                    style={{
                      display: fallbackMobileVisible ? "grid" : "none",
                      aspectRatio: "9/16",
                      border: "1px solid var(--linea)",
                      placeItems: "center",
                      color: "var(--gris)",
                      fontSize: 12,
                      background: "var(--papel-2)",
                    }}
                  >
                    Falta eter-hero-9x16.png
                  </div>
                </div>

                <p className="hero__caption">ÉTER — stock fotografiado ayer · 150 puntos revisados</p>
              </div>
            </div>
          </div>
        </section>

        <div className="hero__banda" role="note" aria-label="Beneficios">
          <div className="wrap">Precio publicado · Stock real ayer · Transferencia 5 días · Pie + cuota sin letra chica</div>
        </div>

        {/* #cifras-eter */}
        <section id="cifras-eter-concesionaria-eter-claro" className="sec-cifras" ref={cifrasRef} aria-label="Cifras ÉTER">
          <div className="wrap">
            <div className="cifras__grid">
              <div className="cifras__cell" style={{ animationDelay: "0ms" }}>
                <div className="cifras__num">+{cifrasActive ? countAnios : 0} años</div>
                <div className="cifras__label">En Las Condes, compra y venta</div>
              </div>
              <div className="cifras__cell" style={{ animationDelay: "60ms" }}>
                <div className="cifras__num">+{cifrasActive ? countAutos.toLocaleString("es-CL") : 0} autos entregados</div>
                <div className="cifras__label">Stock con historial verificable</div>
              </div>
              <div className="cifras__cell" style={{ animationDelay: "120ms" }}>
                <div className="cifras__num">{cifrasActive ? countPct : 0}% transferencias en 5 días</div>
                <div className="cifras__label">Padrón a tu nombre, sin poder eterno</div>
              </div>
              <div className="cifras__cell" style={{ animationDelay: "180ms" }}>
                <div className="cifras__num">{cifrasActive ? countTas.toLocaleString("es-CL") : 0} tasaciones/año</div>
                <div className="cifras__label">Respuestas en 15 min, no mañana</div>
              </div>
            </div>
            <p className="cifras__nota">Sin &lsquo;desde&rsquo; engañoso. El precio que ves es el que facturas.</p>
          </div>
        </section>

        {/* #stock-verificado */}
        <section id="stock-verificado" className="sec-stock">
          <div className="wrap">
            <p className="kicker">STOCK VERIFICADO</p>
            <h2 className="sec-h2">Un índice, no un catálogo con globos.</h2>
            <p className="sec-sub">Elige segmento. Cada fila abre ficha con año, km y pie+cuota. Fotos sin filtro ayer en showroom.</p>

            <div className="stock__indice" role="list">
              {STOCK_ROWS.map((r) => (
                <a key={r.n} href="#tasacion-15min" className="stock__row" role="listitem">
                  <span className="stock__num">{r.n}</span>
                  <span className="stock__nombre">{r.nombre}</span>
                  <span className="stock__meta">{r.meta}</span>
                  <span className="stock__reveal">Fotos sin filtro · VIN verificable · Informe 150 puntos en mano.</span>
                </a>
              ))}
            </div>

            <div className="grid12 stock__mosaic">
              <div className="stock__tile stock__tile--a">
                {tile1Ok ? (
                  <img
                    src="/media/eter-tile-01-4x3.png"
                    alt="SUV 2020 — luz norte, sin filtro — bodegón llave y padrón sobre papel hueso"
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", border: "1px solid var(--linea)" }}
                  />
                ) : (
                  <MediaFalta file="eter-tile-01-4x3.png" ratio="4/3" />
                )}
                <p className="media-cap">SUV 2020 — luz norte, sin filtro</p>
              </div>
              <div className="stock__tile stock__tile--b">
                {tile2Ok ? (
                  <img
                    src="/media/eter-tile-02-1x1.png"
                    alt="Detalle aro diamantado y costura cuero — luz rasante"
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", border: "1px solid var(--linea)" }}
                  />
                ) : (
                  <MediaFalta file="eter-tile-02-1x1.png" ratio="1/1" />
                )}
                <p className="media-cap">Detalle aro diamantado</p>
              </div>
            </div>
          </div>
        </section>

        {/* #tasacion-15min */}
        <section id="tasacion-15min" className="sec-tasacion">
          <div className="wrap">
            <div className="grid12 tasacion__grid">
              <div className="tasacion__left">
                <p className="kicker">TASACIÓN EXPRESS</p>
                <h2 className="sec-h2">Tasación en 15 minutos, no mañana.</h2>
                <ol className="tasacion__bullets">
                  <li>
                    <span className="tasacion__n">01</span> Envías patente + 6 fotos (exterior, interior, motor,
                    kilometraje)
                  </li>
                  <li>
                    <span className="tasacion__n">02</span> Cruzamos VIN, historial y mercado real Las Condes
                  </li>
                  <li>
                    <span className="tasacion__n">03</span> Te llamamos con valor pie + retoma, sin &lsquo;¿qué auto
                    es?&rsquo;
                  </li>
                </ol>
                <p className="tasacion__micro">Si el valor cambia tras inspección, te avisamos antes — no te hacemos venir por nada.</p>
              </div>

              <div className="tasacion__right">
                <form className="form-card" onSubmit={handleTasSubmit} noValidate aria-label="Formulario tasación">
                  {tasSuccess ? (
                    <div className="form-success" role="status">
                      <p>Tasación solicitada. Te llamamos en 15 min hábiles. Revisa WhatsApp.</p>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="form-success__wa">
                        Abrir WhatsApp →
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="form-grid">
                        <label className="f-field">
                          <span>Patente *</span>
                          <input
                            value={tasForm.patente}
                            onChange={(e) => setTasForm({ ...tasForm, patente: e.target.value })}
                            placeholder="ABCD12"
                            autoComplete="off"
                            style={tasErrors.patente ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {tasErrors.patente && <em className="f-error">{tasErrors.patente}</em>}
                        </label>
                        <label className="f-field">
                          <span>Marca *</span>
                          <input
                            value={tasForm.marca}
                            onChange={(e) => setTasForm({ ...tasForm, marca: e.target.value })}
                            placeholder="Toyota"
                            style={tasErrors.marca ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {tasErrors.marca && <em className="f-error">{tasErrors.marca}</em>}
                        </label>
                        <label className="f-field">
                          <span>Modelo *</span>
                          <input
                            value={tasForm.modelo}
                            onChange={(e) => setTasForm({ ...tasForm, modelo: e.target.value })}
                            placeholder="Corolla"
                            style={tasErrors.modelo ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {tasErrors.modelo && <em className="f-error">{tasErrors.modelo}</em>}
                        </label>
                        <label className="f-field">
                          <span>Año *</span>
                          <input
                            type="number"
                            value={tasForm.ano}
                            onChange={(e) => setTasForm({ ...tasForm, ano: e.target.value })}
                            placeholder="2020"
                            style={tasErrors.ano ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {tasErrors.ano && <em className="f-error">{tasErrors.ano}</em>}
                        </label>
                        <label className="f-field">
                          <span>Kilometraje *</span>
                          <input
                            type="number"
                            value={tasForm.km}
                            onChange={(e) => setTasForm({ ...tasForm, km: e.target.value })}
                            placeholder="62000"
                            style={tasErrors.km ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {tasErrors.km && <em className="f-error">{tasErrors.km}</em>}
                        </label>
                        <label className="f-field">
                          <span>Teléfono *</span>
                          <input
                            value={tasForm.telefono}
                            onChange={(e) => setTasForm({ ...tasForm, telefono: e.target.value })}
                            placeholder="+56 9 1234 5678"
                            inputMode="tel"
                            style={tasErrors.telefono ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {tasErrors.telefono && <em className="f-error">{tasErrors.telefono}</em>}
                        </label>
                        <label className="f-field f-field--full">
                          <span>Email *</span>
                          <input
                            value={tasForm.email}
                            onChange={(e) => setTasForm({ ...tasForm, email: e.target.value })}
                            placeholder="tu@email.cl"
                            type="email"
                            style={tasErrors.email ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {tasErrors.email && <em className="f-error">{tasErrors.email}</em>}
                        </label>
                      </div>
                      <button type="submit" className="btn-tinta btn-tinta--full" disabled={tasLoading}>
                        {tasLoading ? <span className="btn-spinner" aria-hidden="true" /> : null}
                        {tasLoading ? "Enviando…" : "Tasar mi auto en 15 min"}
                      </button>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="form-wa-fallback">
                        ¿Prefieres WhatsApp? Escríbenos →
                      </a>
                      <p className="form-nota">Tasación sin costo, sin compromiso. Padrón y VIN verificados.</p>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* #ficha-150puntos */}
        <section id="ficha-150puntos" className="sec-ficha">
          <div className="wrap">
            <p className="kicker">150 PUNTOS</p>
            <h2 className="sec-h2">No compramos humo. Cada auto trae su ficha y se puede leer.</h2>
            <p className="sec-sub">Si tiene un detalle, te lo mostramos antes. No lo maquillamos para la foto.</p>

            <div className="grid12 ficha__cols">
              <div className="ficha__col">
                <span className="ficha__n">01</span>
                <h3>Mecánica y VIN</h3>
                <p>Motor, caja, suspensión, frenos, VIN y kilometraje verificable, prueba de ruta 12 km.</p>
              </div>
              <div className="ficha__col">
                <span className="ficha__n">02</span>
                <h3>Carrocería y pintura</h3>
                <p>Espesor pintura por panel, choques previos, vidrios originales, sellos.</p>
              </div>
              <div className="ficha__col">
                <span className="ficha__n">03</span>
                <h3>Papeles y historial</h3>
                <p>Prenda, multas, encargo, revisiones, dueño anterior, mantenciones.</p>
              </div>
            </div>

            <div className="grid12 ficha__media" ref={fichaMediaRef}>
              <div className={`ficha__img ficha__img--a ${cortinaFicha ? "is-visible" : ""}`}>
                {inspeccionOk ? (
                  <img
                    src="/media/eter-inspeccion-16x9.png"
                    alt="Mesa de revisión — llave + informe + padrón sin marca, orden quirúrgico"
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid var(--linea)" }}
                  />
                ) : (
                  <MediaFalta file="eter-inspeccion-16x9.png" ratio="16/9" />
                )}
                <p className="media-cap">Mesa de revisión — llave + informe + padrón sin marca</p>
              </div>
              <div className={`ficha__img ficha__img--b ${cortinaFicha ? "is-visible" : ""}`}>
                {detalleOk ? (
                  <img
                    src="/media/eter-detalle-3x4.png"
                    alt="Costura cuero — luz rasante, detalle material sin retoque"
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", border: "1px solid var(--linea)" }}
                  />
                ) : (
                  <MediaFalta file="eter-detalle-3x4.png" ratio="3/4" />
                )}
                <p className="media-cap">Costura cuero — luz rasante</p>
              </div>
            </div>
            <p className="ficha__proof">Informe impreso en visita. Si no te convence, no avanzas. Sin presión.</p>
          </div>
        </section>

        {/* #pie-cuota-real */}
        <section id="pie-cuota-real" className="sec-pie">
          <div className="wrap">
            <div className="grid12 pie__top">
              <div className="pie__head">
                <p className="kicker">VALORES PUBLICADOS</p>
                <h2 className="sec-h2">Precio publicado, sin letra chica.</h2>
                <p className="sec-sub">Todo con IVA. Pie mínimo 20% referencial. Cuota simulada 48 meses.</p>
              </div>
            </div>

            <div className="grid12 pie__layout">
              <div className="pie__table-wrap">
                <div className="pie__scroll-hint" aria-hidden="true">
                  Desliza →
                </div>
                <div className="pie__table-scroll">
                  <table className="pie__table" aria-label="Valores por segmento">
                    <thead>
                      <tr>
                        <th>Segmento</th>
                        <th>Precio desde</th>
                        <th>Pie 20%</th>
                        <th>Cuota 48m</th>
                        <th>Transferencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Citycar y hatch 2019</td>
                        <td>$7.490.000</td>
                        <td>$1.498.000</td>
                        <td>$148.000</td>
                        <td>incluida 5 días</td>
                      </tr>
                      <tr>
                        <td>Sedán 2020</td>
                        <td>$9.900.000</td>
                        <td>$1.980.000</td>
                        <td>$182.000</td>
                        <td>incluida 5 días</td>
                      </tr>
                      <tr>
                        <td>SUV 2020</td>
                        <td>$13.900.000</td>
                        <td>$2.780.000</td>
                        <td>$256.000</td>
                        <td>incluida 5 días</td>
                      </tr>
                      <tr>
                        <td>Camioneta 2021</td>
                        <td>$16.500.000</td>
                        <td>$3.300.000</td>
                        <td>$298.000</td>
                        <td>incluida 5 días</td>
                      </tr>
                      <tr>
                        <td>Premium 2022</td>
                        <td>$24.900.000</td>
                        <td>$4.980.000</td>
                        <td>$438.000</td>
                        <td>incluida 5 días</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <aside className="pie__card" aria-label="Detalles financiamiento">
                <h3>Financiamiento pie+cuota real</h3>
                <ul>
                  <li>Bancario vs automotriz explicado</li>
                  <li>Seguro desgravamen incluido</li>
                  <li>Sin pie ficticio</li>
                </ul>
                <hr />
                <p>
                  <strong>Despacho RM + comunas:</strong> Las Condes, Vitacura, La Reina, Providencia
                </p>
                <p>Test drive con hora, 45 min.</p>
              </aside>
            </div>
            <p className="pie__nota">
              Valores referenciales actualizados cada lunes. El total se confirma antes de pagar, nunca después. CAE
              informado antes de firmar. No incluye seguro obligatorio.
            </p>
          </div>
        </section>

        {/* #padron-5dias */}
        <section id="padron-5dias" className="sec-padron">
          <div className="wrap">
            <h2 className="sec-h2">Padrón a tu nombre en 5 días hábiles.</h2>
            <div className="grid12 padron__cols">
              <div className="padron__col">
                <span className="padron__n">01</span>
                <h3>Firma y pago</h3>
                <p>Reserva $350.000, firma compraventa y pago con vale vista o transferencia. Sin poder notarial eterno.</p>
              </div>
              <div className="padron__col">
                <span className="padron__n">02</span>
                <h3>Trámite Registro Civil</h3>
                <p>Nosotros hacemos la transferencia, tú recibes comprobante y seguimiento. Sin filas.</p>
              </div>
              <div className="padron__col">
                <span className="padron__n">03</span>
                <h3>Entrega con padrón</h3>
                <p>Retiras con padrón y llaves, o despacho a domicilio RM. Si hay atraso, te avisamos en 2 horas.</p>
              </div>
            </div>
            <div className="padron__media">
              {patioOk ? (
                <img
                  src="/media/eter-patio-16x9.png"
                  alt="Patio de entrega — 3 autos alineados, sombra suave, hormigón pulido"
                  loading="lazy"
                  style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid var(--linea)" }}
                />
              ) : (
                <MediaFalta file="eter-patio-16x9.png" ratio="16/9" />
              )}
              <p className="media-cap">Patio de entrega — 3 autos alineados, sombra suave</p>
            </div>
          </div>
        </section>

        {/* #dudas-compra */}
        <section id="dudas-compra" className="sec-faq">
          <div className="wrap">
            <div className="grid12 faq__grid">
              <div className="faq__left">
                <h2 className="sec-h2">Dudas que sí importan.</h2>
                <p className="sec-sub">Responden vendedores, no bots.</p>
              </div>
              <div className="faq__right">
                {FAQS.map((f, i) => (
                  <div key={i} className={`faq__item ${faqOpen === i ? "is-open" : ""}`}>
                    <button
                      className="faq__q"
                      aria-expanded={faqOpen === i}
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    >
                      <span>{f.q}</span>
                      <span className="faq__chev" aria-hidden="true">
                        {faqOpen === i ? "−" : "+"}
                      </span>
                    </button>
                    <div className="faq__a" hidden={faqOpen !== i}>
                      <p>{f.a}</p>
                      <p className="faq__tel">
                        <a href={TEL_HREF}>{TEL_LABEL}</a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* #agendar-visita */}
        <section id="agendar-visita" className="sec-visita">
          <div className="wrap">
            <div className="grid12 visita__grid">
              <div className="visita__left">
                <h2 className="sec-h2">Ven a verlo. Si te gusta, te lo llevas con papeles al día.</h2>
                <a href={TEL_HREF} className="visita__tel">
                  {TEL_LABEL}
                </a>
                <div className="visita__ctas">
                  <a href="#agendar-visita" className="btn-tinta" onClick={(e) => e.preventDefault()}>
                    Agendar test drive
                  </a>
                  <a href="#tasacion-15min" className="visita__link">
                    Tasar mi auto
                  </a>
                </div>
                <div className="visita__card">
                  <p>
                    <strong>Las Condes</strong> · Stock en showroom + despacho RM
                  </p>
                  <p>Lun–Vie 9:00–19:00 · Sáb 10:00–17:00 · Test drive con hora</p>
                  <p>
                    <a href="mailto:hola@eterconcesionaria.cl">hola@eterconcesionaria.cl</a>
                  </p>
                  <p className="visita__micro">Responden vendedores, no bots. Si no contestamos, devolvemos el llamado en 2 horas hábiles.</p>
                </div>
              </div>

              <div className="visita__right">
                <form className="form-card" onSubmit={handleResSubmit} noValidate aria-label="Formulario reserva">
                  {resSuccess ? (
                    <div className="form-success" role="status">
                      <p>Agendado. Te confirmamos por WhatsApp en 2 horas.</p>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="form-success__wa">
                        Abrir WhatsApp →
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="form-grid">
                        <label className="f-field">
                          <span>Nombre *</span>
                          <input
                            value={resForm.nombre}
                            onChange={(e) => setResForm({ ...resForm, nombre: e.target.value })}
                            placeholder="Tu nombre"
                            style={resErrors.nombre ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {resErrors.nombre && <em className="f-error">{resErrors.nombre}</em>}
                        </label>
                        <label className="f-field">
                          <span>Teléfono *</span>
                          <input
                            value={resForm.telefono}
                            onChange={(e) => setResForm({ ...resForm, telefono: e.target.value })}
                            placeholder="+56 9 1234 5678"
                            style={resErrors.telefono ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {resErrors.telefono && <em className="f-error">{resErrors.telefono}</em>}
                        </label>
                        <label className="f-field">
                          <span>Email *</span>
                          <input
                            value={resForm.email}
                            onChange={(e) => setResForm({ ...resForm, email: e.target.value })}
                            placeholder="tu@email.cl"
                            type="email"
                            style={resErrors.email ? { borderColor: "var(--rojo)" } : undefined}
                          />
                          {resErrors.email && <em className="f-error">{resErrors.email}</em>}
                        </label>
                        <label className="f-field">
                          <span>Segmento *</span>
                          <select
                            value={resForm.segmento}
                            onChange={(e) => setResForm({ ...resForm, segmento: e.target.value })}
                            style={resErrors.segmento ? { borderColor: "var(--rojo)" } : undefined}
                          >
                            <option value="">Elige…</option>
                            <option>Citycar y hatch</option>
                            <option>Sedán</option>
                            <option>SUV / Crossover</option>
                            <option>Camioneta</option>
                            <option>Premium / alta gama</option>
                            <option>Consignación</option>
                          </select>
                          {resErrors.segmento && <em className="f-error">{resErrors.segmento}</em>}
                        </label>
                        <label className="f-field f-field--full">
                          <span>Mensaje</span>
                          <textarea
                            value={resForm.mensaje}
                            onChange={(e) => setResForm({ ...resForm, mensaje: e.target.value })}
                            placeholder="Cuéntanos qué buscas…"
                            rows={3}
                          />
                        </label>
                      </div>
                      <button type="submit" className="btn-tinta btn-tinta--full" disabled={resLoading}>
                        {resLoading ? <span className="btn-spinner" aria-hidden="true" /> : null}
                        {resLoading ? "Agendando…" : "Agendar visita"}
                      </button>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="form-wa-fallback">
                        ¿Prefieres WhatsApp? Escríbenos →
                      </a>
                    </>
                  )}
                </form>
              </div>
            </div>

            <footer className="site-footer site-footer--full">
              <div>ÉTER SpA · RUT 76.XXX.XXX-X · Las Condes, Santiago · SII boleta/factura · © 2026 · Stock fotografiado ayer.</div>
            </footer>
          </div>
        </section>
      </main>

      {/* sticky móvil bar — solo móvil */}
      <div className={`sticky-bar ${showSticky ? "is-visible" : ""}`} role="navigation" aria-label="Acciones rápidas">
        <a href="#tasacion-15min" className="sticky-bar__primary">
          Tasar
        </a>
        <a href="#stock-verificado" className="sticky-bar__secondary">
          Ver stock
        </a>
      </div>
    </>
  );
}
