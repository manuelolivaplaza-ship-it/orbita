import { useEffect, useState, useRef } from "react";

function baseUrl() {
  const b = (import.meta as unknown as { env: { BASE_URL?: string } }).env?.BASE_URL ?? "/";
  return b.endsWith("/") ? b : b + "/";
}

type Ficha = {
  id: number;
  comuna: string;
  tipo: string;
  dorm: string;
  tituloEstado: "al-dia" | "en-revision";
  tituloLabel: string;
  dotColor: string;
  fileteColor: string;
  title: string;
  datos: string;
  uf: number;
  ufLabel: string;
  clp: string;
  gc: string;
  folio: string;
  folioExtra: string;
};

const FICHAS: Ficha[] = [
  {
    id: 1,
    comuna: "Providencia",
    tipo: "Depto",
    dorm: "1",
    tituloEstado: "al-dia",
    tituloLabel: "TÍTULOS AL DÍA",
    dotColor: "#3A7D6B",
    fileteColor: "#3A7D6B",
    title: "Depto 1D 31m² · Lyon",
    datos: "1D · 1B · 31m² útiles · piso 5 · 2018",
    uf: 3180,
    ufLabel: "UF 3.180",
    clp: "$124.592.400",
    gc: "Gastos comunes $79.800 (may 2026)",
    folio: "F° 2988",
    folioExtra: "sin hipoteca · gastos al día",
  },
  {
    id: 2,
    comuna: "Providencia",
    tipo: "Depto",
    dorm: "2",
    tituloEstado: "al-dia",
    tituloLabel: "TÍTULOS AL DÍA",
    dotColor: "#3A7D6B",
    fileteColor: "#3A7D6B",
    title: "Depto 2D 58m² · Los Leones",
    datos: "2D · 1B · 58m² útiles · piso 3 · 2016",
    uf: 5200,
    ufLabel: "UF 5.200",
    clp: "$203.736.000",
    gc: "Gastos comunes $128.400 (may 2026)",
    folio: "F° 3421",
    folioExtra: "sin hipoteca · gastos al día",
  },
  {
    id: 3,
    comuna: "Ñuñoa",
    tipo: "Depto",
    dorm: "2",
    tituloEstado: "al-dia",
    tituloLabel: "TÍTULOS AL DÍA",
    dotColor: "#3A7D6B",
    fileteColor: "#3A7D6B",
    title: "Depto 2D 64m² · Irarrázaval",
    datos: "2D · 2B · 64m² útiles · piso 4 · 2017",
    uf: 4750,
    ufLabel: "UF 4.750",
    clp: "$186.105.000",
    gc: "Gastos comunes $112.300 (may 2026)",
    folio: "F° 3170",
    folioExtra: "títulos al día",
  },
  {
    id: 4,
    comuna: "Las Condes",
    tipo: "Depto",
    dorm: "3",
    tituloEstado: "en-revision",
    tituloLabel: "EN REVISIÓN",
    dotColor: "#B46A2F",
    fileteColor: "#B46A2F",
    title: "Depto 3D 84m² · Apoquindo",
    datos: "3D · 2B · 84m² útiles · piso 6 · 2015",
    uf: 7800,
    ufLabel: "UF 7.800",
    clp: "$305.604.000",
    gc: "Gastos comunes $176.500 (may 2026)",
    folio: "F° 4092",
    folioExtra: "en revisión (llega mar)",
  },
  {
    id: 5,
    comuna: "La Reina",
    tipo: "Casa",
    dorm: "3",
    tituloEstado: "al-dia",
    tituloLabel: "TÍTULOS AL DÍA",
    dotColor: "#3A7D6B",
    fileteColor: "#3A7D6B",
    title: "Casa 4D 142m² · Príncipe de Gales",
    datos: "4D · 3B · 142m² útiles · 2 pisos · 2010",
    uf: 10200,
    ufLabel: "UF 10.200",
    clp: "$399.636.000",
    gc: "Casa · sin gastos comunes",
    folio: "F° 1844",
    folioExtra: "sin hipoteca",
  },
  {
    id: 6,
    comuna: "Ñuñoa",
    tipo: "Depto",
    dorm: "3",
    tituloEstado: "al-dia",
    tituloLabel: "TÍTULOS AL DÍA",
    dotColor: "#3A7D6B",
    fileteColor: "#3A7D6B",
    title: "Depto 3D 72m² · Echeñique",
    datos: "3D · 2B · 72m² útiles · piso 2 · 2019",
    uf: 6050,
    ufLabel: "UF 6.050",
    clp: "$237.039.000",
    gc: "Gastos comunes $141.200 (may 2026)",
    folio: "F° 3618",
    folioExtra: "títulos al día",
  },
];

export function App() {
  const [imgError, setImgError] = useState(false);
  const [imgMobileError, setImgMobileError] = useState(false);
  const [mapaError, setMapaError] = useState(false);
  const [interiorError, setInteriorError] = useState(false);
  const [tile1Error, setTile1Error] = useState(false);
  const [tile2Error, setTile2Error] = useState(false);
  const [barrioError, setBarrioError] = useState(false);
  const [proofError, setProofError] = useState(false);

  // filtros inventario
  const [fComuna, setFComuna] = useState("Todas");
  const [fTipo, setFTipo] = useState("Todos");
  const [fDorm, setFDorm] = useState("Todos");
  const [fTitulo, setFTitulo] = useState("Todos");
  const [fPrecio, setFPrecio] = useState("Todos");

  const b = baseUrl();
  const heroDesktop = `${b}media/meridiano-hero-16x9.png`;
  const heroMobile = `${b}media/meridiano-hero-9x16.png`;
  const mapaSrc = `${b}media/meridiano-mapa-4x3.png`;
  const interiorSrc = `${b}media/meridiano-interior-16x9.png`;
  const tile1Src = `${b}media/meridiano-tile-01-1x1.png`;
  const tile2Src = `${b}media/meridiano-tile-02-1x1.png`;
  const barrioSrc = `${b}media/meridiano-barrio-3x4.png`;
  const proofSrc = `${b}media/meridiano-proof-16x9.png`;

  useEffect(() => {
    if (imgError) console.warn("Falta: meridiano-hero-16x9.png");
  }, [imgError]);
  useEffect(() => {
    if (imgMobileError) console.warn("Falta: meridiano-hero-9x16.png");
  }, [imgMobileError]);
  useEffect(() => {
    if (mapaError) console.warn("Falta: meridiano-mapa-4x3.png");
  }, [mapaError]);
  useEffect(() => {
    if (interiorError) console.warn("Falta: meridiano-interior-16x9.png");
  }, [interiorError]);
  useEffect(() => {
    if (tile1Error) console.warn("Falta: meridiano-tile-01-1x1.png");
  }, [tile1Error]);
  useEffect(() => {
    if (tile2Error) console.warn("Falta: meridiano-tile-02-1x1.png");
  }, [tile2Error]);
  useEffect(() => {
    if (barrioError) console.warn("Falta: meridiano-barrio-3x4.png");
  }, [barrioError]);
  useEffect(() => {
    if (proofError) console.warn("Falta: meridiano-proof-16x9.png");
  }, [proofError]);

  // filtering logic
  const filtered = FICHAS.filter((f) => {
    if (fComuna !== "Todas" && f.comuna !== fComuna) return false;
    if (fTipo !== "Todos" && f.tipo !== fTipo) return false;
    if (fDorm !== "Todos" && f.dorm !== fDorm) return false;
    if (fTitulo !== "Todos") {
      const want = fTitulo === "Con estudio" ? "al-dia" : "en-revision";
      if (f.tituloEstado !== want) return false;
    }
    if (fPrecio !== "Todos") {
      const limit = parseInt(fPrecio.replace("Hasta UF ", "").replace(".", ""), 10);
      if (f.uf > limit) return false;
    }
    return true;
  });

  const hasActiveFilter = fComuna !== "Todas" || fTipo !== "Todos" || fDorm !== "Todos" || fTitulo !== "Todos" || fPrecio !== "Todos";

  function limpiarFiltros() {
    setFComuna("Todas");
    setFTipo("Todos");
    setFDorm("Todos");
    setFTitulo("Todos");
    setFPrecio("Todos");
  }

  // form state
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [propiedad, setPropiedad] = useState("");
  const [ventaArriendo, setVentaArriendo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!nombre.trim() || nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres).";
    const telOk = /^\+56\s?9\s?\d{8}$/.test(tel.trim()) || /^9\d{8}$/.test(tel.trim());
    if (!tel.trim() || !telOk) e.tel = "Ingresa WhatsApp válido: +56 9 + 8 dígitos o 9 + 8 dígitos.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Correo no válido.";
    if (!propiedad) e.propiedad = "Elige una propiedad.";
    if (!ventaArriendo) e.ventaArriendo = "Elige venta o arriendo.";
    if (!fecha) e.fecha = "Elige una fecha.";
    if (!hora) e.hora = "Elige un horario.";
    if (!acepta) e.acepta = "Debes aceptar para coordinar por WhatsApp.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const key = `meridiano_visita_${Date.now()}`;
      try {
        localStorage.setItem(key, JSON.stringify({ nombre, tel, email, propiedad, ventaArriendo, fecha, hora, mensaje, at: new Date().toISOString() }));
      } catch {}
      const text = `Hola Meridiano, quiero visitar ${propiedad} el ${fecha} ${hora}. Soy ${nombre}.`;
      const url = `https://wa.me/56976340892?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    }, 800);
  }

  // CTA móvil persistente
  const [ctaDismissed, setCtaDismissed] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const inventarioRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("meridiano_cta_dismissed") === "1") {
        setCtaDismissed(true);
        return;
      }
    } catch {}
    const el = document.getElementById("inventario");
    if (!el) return;
    inventarioRef.current = el as HTMLElement;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // show when inventario has passed viewport (not intersecting and was above)
        // simpler: show when inventario is not visible but we've scrolled past its top
        const rect = el.getBoundingClientRect();
        const passed = rect.bottom < 0 || (rect.top < window.innerHeight * 0.3 && !entry.isIntersecting && rect.top < 0);
        // fallback: if we have scrolled beyond inventario top
        const scrolledPast = window.scrollY > el.offsetTop + 100;
        if (scrolledPast && !ctaDismissed) {
          setCtaVisible(true);
        } else if (!scrolledPast) {
          setCtaVisible(false);
        }
        // also if entry is not intersecting and we scrolled past, show
        if (!entry.isIntersecting && passed && !ctaDismissed) setCtaVisible(true);
      },
      { threshold: 0, rootMargin: "0px" }
    );
    obs.observe(el);
    const onScroll = () => {
      if (ctaDismissed) return;
      const scrolledPast = window.scrollY > el.offsetTop + 80;
      setCtaVisible(scrolledPast);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ctaDismissed]);

  function dismissCta() {
    setCtaDismissed(true);
    setCtaVisible(false);
    try {
      sessionStorage.setItem("meridiano_cta_dismissed", "1");
    } catch {}
  }

  return (
    <>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <a href="#portada" className="logo" aria-label="Meridiano inicio">
            <span className="m">M</span>ERIDIANO
          </a>

          <nav className="nav" aria-label="Navegación principal">
            <a href="#inventario">Inventario</a>
            <a href="#expediente">Expediente</a>
            <a href="#barrio-meridiano">Barrio</a>
            <a href="#costos">Costos</a>
          </nav>

          <button className="hamburger" aria-label="Abrir menú" type="button">
            <span />
            <span />
            <span />
          </button>

          <a href="tel:+56976340892" className="header-tel">
            +56 9 7634 0892
          </a>

          <a
            href="tel:+56976340892"
            className="tel-icon"
            aria-label="Llamar +56 9 7634 0892"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.08.37 2.13.73 3.13a2 2 0 0 1-.57 2.11L8.09 10.14a16 16 0 0 0 6 6l1.18-1.18a2 2 0 0 1 2.11-.57c1 .36 2.05.61 3.13.73A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          <a href="#agendar" className="header-cta">
            Agendar visita
          </a>
        </div>
      </header>

      <main>
        {/* HERO #portada */}
        <section id="portada" className="hero-wrap" aria-labelledby="hero-meridiano-title">
          <div className="grid-12">
            <div className="dossier">
              <div className="hero-left">
                <p className="kicker">ARCHIVO · PROVIDENCIA — ESTUDIO DE TÍTULOS AL DÍA</p>
                <h1 id="hero-meridiano-title" className="hero-h1">
                  Inventario publicado con estudio de títulos y gastos del mes a la vista.
                </h1>
                <p className="hero-sub">
                  Cada propiedad con carpeta física: plano catastral, certificados y gastos comunes del
                  último mes. Si no está saneada, no se publica. Si se reserva, sale del inventario el
                  mismo día.
                </p>
                <div className="hero-ctas">
                  <a href="#inventario" className="btn-primary">
                    Revisar inventario con papeles a la vista
                  </a>
                  <a href="#agendar" className="btn-ghost">
                    Agendar visita con carpeta lista
                  </a>
                </div>
                <div className="banda" aria-label="Garantías">
                  <span className="banda-item">
                    <span className="banda-dot" aria-hidden="true" /> UF hoy 39.180
                  </span>
                  <span className="banda-item">
                    <span className="banda-dot" aria-hidden="true" /> Gastos del mes informados
                  </span>
                  <span className="banda-item">
                    <span className="banda-dot" aria-hidden="true" /> Títulos revisados
                  </span>
                </div>
                <p className="micro-copy">
                  Comisión 2% + IVA por lado en venta. Arriendo 50% del mes por lado. Tasación $90.000 se
                  abona si vendes con nosotros. Sin reserva para mostrar.
                </p>
              </div>

              <div className="hero-right">
                <div className="hero-media-wrap">
                  {!imgError ? (
                    <picture>
                      {!imgMobileError && <source media="(max-width: 640px)" srcSet={heroMobile} />}
                      <img
                        className="hero-media"
                        src={heroDesktop}
                        alt="Carpeta expediente gris perla con elástico negro, plano catastral plegado y sello seco del Conservador en relieve bajo luz rasante"
                        loading="eager"
                        decoding="async"
                        onError={() => setImgError(true)}
                      />
                    </picture>
                  ) : (
                    <div className="media-falta" data-falta="meridiano-hero-16x9.png">
                      Falta: meridiano-hero-16x9.png
                    </div>
                  )}
                  <img
                    src={heroMobile}
                    alt=""
                    aria-hidden="true"
                    style={{ display: "none" }}
                    onError={() => setImgMobileError(true)}
                  />
                </div>
                <div className="hero-caption" aria-label="Folio expediente">
                  <span>Expediente 07/2026 · Conservador Santiago — sello seco</span>
                  <strong>F° 3421 · Carpeta gris perla</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #inventario */}
        <section id="inventario" className="section-inventario" aria-labelledby="inv-meridiano-h2">
          <div className="grid-12">
            <div className="inv-header">
              <p className="kicker kicker-salvia">INVENTARIO REAL · 11 PROPIEDADES ESTA SEMANA</p>
              <h2 id="inv-meridiano-h2" className="h2-inv">
                Filtra por comuna y ve UF, gastos y estado del título
              </h2>
              <p className="inv-intro">
                Todo lo del listado tiene carpeta con títulos revisados y gastos del último mes. Si se
                reserva, sale el mismo día. Precio en UF + CLP del día.
              </p>
            </div>

            <div className="filtros-bar" role="toolbar" aria-label="Filtros inventario">
              <div className="filtros-selects">
                <label className="filter-label">
                  <select value={fComuna} onChange={(e) => setFComuna(e.target.value)} aria-label="Filtrar por comuna">
                    <option value="Todas">Comuna: Todas</option>
                    <option value="Providencia">Providencia</option>
                    <option value="Ñuñoa">Ñuñoa</option>
                    <option value="Las Condes">Las Condes</option>
                    <option value="La Reina">La Reina</option>
                  </select>
                </label>
                <label className="filter-label">
                  <select value={fTipo} onChange={(e) => setFTipo(e.target.value)} aria-label="Filtrar por tipo">
                    <option value="Todos">Tipo: Todos</option>
                    <option value="Depto">Depto</option>
                    <option value="Casa">Casa</option>
                  </select>
                </label>
                <label className="filter-label">
                  <select value={fDorm} onChange={(e) => setFDorm(e.target.value)} aria-label="Filtrar por dormitorios">
                    <option value="Todos">Dorm: Todos</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </label>
                <label className="filter-label">
                  <select value={fTitulo} onChange={(e) => setFTitulo(e.target.value)} aria-label="Filtrar por título">
                    <option value="Todos">Título: Todos</option>
                    <option value="Con estudio">Con estudio</option>
                    <option value="En revisión">En revisión</option>
                  </select>
                </label>
                <label className="filter-label">
                  <select value={fPrecio} onChange={(e) => setFPrecio(e.target.value)} aria-label="Filtrar por precio">
                    <option value="Todos">Precio: Todos</option>
                    <option value="Hasta UF 5.000">Hasta UF 5.000</option>
                    <option value="Hasta UF 8.000">Hasta UF 8.000</option>
                    <option value="Hasta UF 12.000">Hasta UF 12.000</option>
                  </select>
                </label>
              </div>
              <div className="contador" aria-live="polite">
                {filtered.length} propiedades · 5 con visita hoy · 9 con títulos al día
              </div>
            </div>

            <div className="inv-layout">
              <div className="inv-mapa">
                {!mapaError ? (
                  <div className="mapa-frame">
                    <img
                      src={mapaSrc}
                      alt="Trazado de barrio · líneas 1px sobre papel"
                      loading="lazy"
                      onError={() => setMapaError(true)}
                    />
                    <div className="mapa-pins" aria-hidden="true">
                      {Array.from({ length: 11 }, (_, i) => (
                        <span key={i} className="pin" style={{ left: `${12 + (i * 7) % 78}%`, top: `${14 + (i * 11) % 66}%` }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="media-falta media-falta-4x3" data-falta="meridiano-mapa-4x3.png">
                    Falta: meridiano-mapa-4x3.png
                  </div>
                )}
                <p className="mapa-caption">Trazado de barrio · líneas 1px sobre papel — sin pins genéricos</p>
              </div>

              <div className="inv-grilla">
                {filtered.length === 0 ? (
                  <div className="sin-resultados">
                    <p>Sin resultados — prueba con otro filtro</p>
                    <button type="button" onClick={limpiarFiltros} className="link-limpiar">
                      Limpiar filtros
                    </button>
                  </div>
                ) : (
                  <div className="fichas-grid">
                    {filtered.map((f, idx) => (
                      <article
                        key={f.id}
                        className="ficha"
                        data-comuna={f.comuna}
                        data-tipo={f.tipo}
                        data-dorm={f.dorm}
                        data-titulo={f.tituloEstado}
                        data-uf={String(f.uf)}
                        style={{ borderLeftColor: f.fileteColor, animationDelay: `${idx * 40}ms` } as React.CSSProperties}
                      >
                        <div className="ficha-top">
                          <span className="ficha-comuna">{f.comuna}</span>
                          <span className="ficha-tipo">· {f.tipo}</span>
                          <span className="ficha-estado">
                            <span className="dot-estado" style={{ background: f.dotColor }} aria-hidden="true" />
                            {f.tituloLabel}
                          </span>
                        </div>
                        <h3 className="ficha-title">{f.title}</h3>
                        <p className="ficha-datos">{f.datos}</p>
                        <div className="ficha-precio">
                          <span className="desde">desde</span>
                          <span className="precio-uf">
                            {f.ufLabel} · {f.clp}
                          </span>
                          <span className="gc">{f.gc}</span>
                        </div>
                        <div className="ficha-folio">
                          {f.folio} · {f.folioExtra}
                        </div>
                        <div className="ficha-ctas">
                          <a href="#expediente" className="ficha-link">
                            Ver expediente →
                          </a>
                          <a href="#agendar" className="ficha-visita">
                            Visita hoy
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
                <p className="nota-pie">
                  Valores en UF al día; CLP referencial UF 39.180. Gastos comunes del último mes informado
                  por copropiedad. Valores referenciales; se confirman en expediente y visita.
                </p>
                {hasActiveFilter && filtered.length > 0 && (
                  <button type="button" onClick={limpiarFiltros} className="link-limpiar" style={{ marginTop: "10px" }}>
                    Limpiar filtros
                  </button>
                )}
                <aside className="aside-arriendo">
                  <p className="aside-title">¿Buscas arriendo?</p>
                  <p className="aside-text">Arriendo 2D desde UF 21/mes · GC y títulos en ficha. Comisión 50% del mes por lado.</p>
                  <a href="tel:+56976340892" className="aside-tel">
                    +56 9 7634 0892
                  </a>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* #expediente */}
        <section id="expediente" className="section-expediente" aria-labelledby="exp-meridiano-h2">
          <div className="grid-12">
            <div className="exp-kicker-col">
              <p className="kicker" style={{ color: "var(--accent)" }}>
                EXPEDIENTE EJEMPLO · 2D LOS LEONES
              </p>
              <h2 id="exp-meridiano-h2" className="h2-exp">
                Depto 2D que no necesita cuento, solo papeles en orden
              </h2>
              <p className="exp-intro">
                No es el más barato de Providencia. Es el que tiene hipoteca alzada, sin multas y con carpeta
                que puedes hojear en la visita.
              </p>
            </div>
            <div className="exp-left">
              {!interiorError ? (
                <img
                  src={interiorSrc}
                  alt="Interior vacío · luz norte · Los Leones · folio 3421"
                  loading="lazy"
                  className="exp-main-img"
                  onError={() => setInteriorError(true)}
                />
              ) : (
                <div className="media-falta media-falta-16x9" data-falta="meridiano-interior-16x9.png">
                  Falta: meridiano-interior-16x9.png
                </div>
              )}
              <p className="exp-caption">
                Interior vacío · luz norte · Los Leones · folio 3421 <strong style={{ color: "var(--accent-2)" }}>Sello seco</strong>
              </p>
              <div className="exp-thumbs">
                <div className="thumb">
                  <span className="thumb-folio">F° 3421-A</span>
                  {!tile1Error ? (
                    <img src={tile1Src} alt="Detalle sello seco" loading="lazy" onError={() => setTile1Error(true)} />
                  ) : (
                    <div className="media-falta media-falta-1x1" data-falta="meridiano-tile-01-1x1.png">
                      Falta: meridiano-tile-01-1x1.png
                    </div>
                  )}
                </div>
                <div className="thumb">
                  <span className="thumb-folio">F° 3421-B</span>
                  {!tile2Error ? (
                    <img src={tile2Src} alt="Cinta elástica negra tensa sobre carpeta" loading="lazy" onError={() => setTile2Error(true)} />
                  ) : (
                    <div className="media-falta media-falta-1x1" data-falta="meridiano-tile-02-1x1.png">
                      Falta: meridiano-tile-02-1x1.png
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="exp-right">
              <div className="folio-franja">
                <span>Folio F° 3421 · Conservador Santiago</span>
                <span className="badge-titulos">TÍTULOS AL DÍA ✔</span>
              </div>
              <table className="exp-tabla" aria-label="Ficha expediente">
                <tbody>
                  <tr>
                    <th>Superficie útil</th>
                    <td>58m² + 5m² balcón</td>
                  </tr>
                  <tr>
                    <th>Dorm / baños / bodega</th>
                    <td>2D · 1B · 1E (bodega 3m²)</td>
                  </tr>
                  <tr>
                    <th>Orientación / piso</th>
                    <td>Nor-oriente · piso 3 de 9</td>
                  </tr>
                  <tr>
                    <th>Antigüedad</th>
                    <td>2016 · sin ampliaciones</td>
                  </tr>
                  <tr>
                    <th>Gastos comunes</th>
                    <td>$128.400 (may 2026, boleta a la vista)</td>
                  </tr>
                  <tr>
                    <th>Contribuciones</th>
                    <td>$46.800 trimestral aprox.</td>
                  </tr>
                  <tr>
                    <th>Hipoteca / gravamen</th>
                    <td>Sin hipoteca · sin embargo</td>
                  </tr>
                  <tr>
                    <th>Precio venta</th>
                    <td>UF 5.200 · $203.736.000</td>
                  </tr>
                  <tr>
                    <th>Arriendo alternativo</th>
                    <td>UF 21/mes · $822.780/mes (si no se vende en 45 días)</td>
                  </tr>
                </tbody>
              </table>
              <div className="banda-estado">
                <span className="pill">
                  <span className="dot" style={{ background: "#3A7D6B" }} /> Gastos al día ✔
                </span>
                <span className="pill">
                  <span className="dot" style={{ background: "#3A7D6B" }} /> Sin multas
                </span>
                <span className="pill">
                  <span className="dot" style={{ background: "#3A7D6B" }} /> Hipoteca alzada 2019
                </span>
              </div>
              <div className="papeles-lista">
                <p className="papeles-title">Qué trae la carpeta</p>
                <ul>
                  <li>— Plano catastral</li>
                  <li>— Certificado dominio vigente</li>
                  <li>— Certificado hipotecas y gravámenes</li>
                  <li>— Boleta gastos comunes may 2026</li>
                  <li>— Certificado contribuciones</li>
                </ul>
              </div>
              <div className="exp-ctas">
                <a href="#agendar" className="btn-primary">
                  Agendar visita con carpeta
                </a>
                <a href="https://wa.me/56976340892?text=Hola%20Meridiano,%20quiero%20el%20expediente%20F%C2%B03421%20en%20PDF" target="_blank" rel="noopener" className="btn-ghost">
                  Pedir expediente PDF por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* #barrio-meridiano */}
        <section id="barrio-meridiano" className="section-barrio" aria-labelledby="barrio-meridiano-h2">
          <div className="grid-12">
            <div className="barrio-img">
              {!barrioError ? (
                <img src={barrioSrc} alt="Calle interior · Los Leones · mañana 10:30" loading="lazy" onError={() => setBarrioError(true)} />
              ) : (
                <div className="media-falta media-falta-3x4" data-falta="meridiano-barrio-3x4.png">
                  Falta: meridiano-barrio-3x4.png
                </div>
              )}
              <p className="barrio-caption">Calle interior · Los Leones · mañana 10:30</p>
            </div>
            <div className="barrio-content">
              <p className="kicker kicker-salvia">BARRIO · PROVIDENCIA — LOS LEONES</p>
              <h2 id="barrio-meridiano-h2" className="h2-barrio">
                A 3 cuadras del metro sin pagar ruido de avenida troncal
              </h2>
              <p className="barrio-intro">
                Calle interior, no avenida. Supermercado a 1 cuadra, clínica a 2, metro Los Leones a 5 min a
                pie. Lo medimos caminando, no con mapa.
              </p>
              <div className="barrio-bloques">
                <div className="barrio-bloque">
                  <h3>A pie</h3>
                  <ul>
                    <li>Metro Los Leones 380m · 5 min</li>
                    <li>Jumbo Los Leones 180m</li>
                    <li>Clínica Santa María 420m</li>
                    <li>Parque Balmaceda 650m</li>
                  </ul>
                </div>
                <div className="barrio-bloque">
                  <h3>En micro/auto</h3>
                  <ul>
                    <li>Parada Los Leones / Eliodoro Yáñez 90m</li>
                    <li>Salida Costanera 800m</li>
                    <li>Estacionamiento visita 1 + visita calle sin parquímetro</li>
                    <li>Bicicletero techado interior</li>
                  </ul>
                </div>
                <div className="barrio-bloque">
                  <h3>Ruido y luz</h3>
                  <ul>
                    <li>Nor-oriente: luz mañana sin poniente directo</li>
                    <li>Calle interior: bajo tránsito 17h–19h</li>
                    <li>Sin bares en la cuadra</li>
                    <li>Ventana termopanel 2016 + cortina blackout</li>
                  </ul>
                </div>
              </div>
              <blockquote className="barrio-cita">
                No es para quien busca vista despejada. Es para quien quiere caminar a todo y dormir sin
                bocinas.
              </blockquote>
            </div>
          </div>
        </section>

        {/* #costos */}
        <section id="costos" className="section-costos" aria-labelledby="costos-meridiano-h2">
          <div className="grid-12">
            <div className="costos-header">
              <p className="kicker" style={{ color: "var(--accent)" }}>
                COSTOS · TRANSPARENTES
              </p>
              <h2 id="costos-meridiano-h2">2% + IVA por lado en venta. Sin letra chica.</h2>
              <p className="costos-intro">
                La tasación cuesta $90.000 y se descuenta si vendes con nosotros. Si no vendes, te queda el
                informe con comparables reales del Conservador.
              </p>
            </div>
            <div className="costos-table-wrap">
              <div className="tabla-scroll-hint">desliza →</div>
              <table className="costos-tabla" aria-label="Tabla costos">
                <thead>
                  <tr>
                    <th></th>
                    <th>VENTA</th>
                    <th>ARRIENDO</th>
                    <th>TASACIÓN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Comisión</th>
                    <td>2% + IVA c/lado (4% + IVA total)</td>
                    <td>50% del mes c/lado</td>
                    <td>$90.000 informe completo</td>
                  </tr>
                  <tr>
                    <th>Qué incluye</th>
                    <td>Fotos, plano, portales, visitas, promesa y cierre</td>
                    <td>Fotos, contrato, mes de garantía</td>
                    <td>Visita técnica, comparables, precio sugerido</td>
                  </tr>
                  <tr>
                    <th>Cuándo se paga</th>
                    <td>Contra firma promesa y escritura</td>
                    <td>Contra firma contrato</td>
                    <td>Al entregar informe (se abona si sigues)</td>
                  </tr>
                  <tr>
                    <th>Si no resulta</th>
                    <td>Sin cobro si no hay promesa</td>
                    <td>Sin cobro si no hay contrato</td>
                    <td>Te queda el informe</td>
                  </tr>
                </tbody>
              </table>
              <p className="nota-costos">
                No inflamos el precio para cobrar más comisión. Preferimos precio de mercado y venta en 45–60
                días que 8 meses publicado. Papeles mandan.
              </p>
            </div>
            <aside className="costos-aside">
              <h3>¿Y si se reserva?</h3>
              <p>Reserva con $500.000 contra promesa en 10 días. Si no firma, se devuelve íntegra. Nadie queda amarrado. Expediente queda retenido.</p>
              <ul className="aside-checks">
                <li><span>✔</span> Promesa revisada por abogado</li>
                <li><span>✔</span> Certificados al día</li>
                <li><span>✔</span> Sin multa por retracto pre-promesa</li>
              </ul>
              <a href="tel:+56976340892" className="aside-tel">
                +56 9 7634 0892
              </a>
            </aside>
          </div>
        </section>

        {/* #agendar */}
        <section id="agendar" className="section-agendar" aria-labelledby="agendar-meridiano-h2">
          <div className="grid-12">
            <div className="agendar-left">
              <p className="kicker kicker-salvia">AGENDA · HOY O MAÑANA</p>
              <h2 id="agendar-meridiano-h2">Elige hora y te confirmamos por WhatsApp en minutos</h2>
              <p className="agendar-intro">
                Lunes a sábado 09:00–19:00. Domingo solo con reserva. Si la hora ya se tomó, te ofrecemos la
                siguiente libre sin hacerte esperar en la puerta.
              </p>
              <a href="tel:+56976340892" className="tel-grande">+56 9 7634 0892</a>
              <p className="tel-sub">WhatsApp directo con corredora, no call center.</p>
              <p className="horarios-hoy">
                <span className="dot-hoy" aria-hidden="true" /> Hoy quedan 2 visitas: 16:30 y 18:00 · carpeta lista
              </p>
              <div className="prueba-ops">
                <p className="prueba-title">Últimas 4 operaciones (conservador)</p>
                <ul>
                  <li>Depto 2D Los Leones · UF 5.100 · 36 días</li>
                  <li>Casa La Reina 4D · UF 10.000 · 58 días</li>
                  <li>Depto 1D Lyon · UF 3.100 · 22 días</li>
                  <li>Depto 3D Apoquindo · UF 7.600 · 61 días</li>
                </ul>
              </div>
              <blockquote className="compromiso">
                Si llegas y el depto no es como en fotos y papeles, te lo decimos al tiro y no te hacemos perder
                la tarde.
              </blockquote>
              <p className="oficina">Oficina: Los Leones 2200, oficina 31 · Providencia</p>
              {!proofError ? (
                <div className="proof-wrap">
                  <img
                    src={proofSrc}
                    alt="Plaza Balmaceda vacía mañana con cordillera brumosa"
                    loading="lazy"
                    onError={() => setProofError(true)}
                    style={{ width: "100%", display: "block", border: "1px solid var(--linea)", objectFit: "cover" }}
                  />
                </div>
              ) : null}
            </div>
            <div className="agendar-right">
              <form className="form-agenda" onSubmit={handleSubmit} noValidate aria-label="Formulario agendar visita">
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="f-meridiano-nombre">NOMBRE *</label>
                    <input id="f-meridiano-nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className={errors.nombre ? "input-error" : ""} autoComplete="name" />
                    {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="f-meridiano-tel">TEL / WHATSAPP *</label>
                    <input id="f-meridiano-tel" type="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="+56 9 12345678" className={errors.tel ? "input-error" : ""} autoComplete="tel" />
                    {errors.tel && <span className="field-error">{errors.tel}</span>}
                  </div>
                  <div className="field field-full">
                    <label htmlFor="f-meridiano-email">EMAIL (OPCIONAL)</label>
                    <input id="f-meridiano-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? "input-error" : ""} autoComplete="email" />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                  <div className="field field-full">
                    <label htmlFor="f-meridiano-prop">PROPIEDAD QUE TE INTERESA *</label>
                    <select id="f-meridiano-prop" value={propiedad} onChange={(e) => setPropiedad(e.target.value)} className={errors.propiedad ? "input-error" : ""}>
                      <option value="">Selecciona una propiedad</option>
                      <option value="Depto 1D 31m² · Lyon — UF 3.180">Depto 1D 31m² · Lyon — UF 3.180</option>
                      <option value="Depto 2D 58m² · Los Leones — UF 5.200">Depto 2D 58m² · Los Leones — UF 5.200</option>
                      <option value="Depto 2D 64m² · Irarrázaval — UF 4.750">Depto 2D 64m² · Irarrázaval — UF 4.750</option>
                      <option value="Depto 3D 84m² · Apoquindo — UF 7.800">Depto 3D 84m² · Apoquindo — UF 7.800</option>
                      <option value="Casa 4D 142m² · Príncipe de Gales — UF 10.200">Casa 4D 142m² · Príncipe de Gales — UF 10.200</option>
                      <option value="Depto 3D 72m² · Echeñique — UF 6.050">Depto 3D 72m² · Echeñique — UF 6.050</option>
                      <option value="Otra / aún no elijo">Otra / aún no elijo</option>
                    </select>
                    {errors.propiedad && <span className="field-error">{errors.propiedad}</span>}
                  </div>
                  <div className="field field-full">
                    <span className="label-like">¿VENTA O ARRIENDO? *</span>
                    <div className="radios" role="radiogroup" aria-label="Venta o arriendo">
                      <label>
                        <input type="radio" name="ventaArriendo" value="Venta" checked={ventaArriendo === "Venta"} onChange={(e) => setVentaArriendo(e.target.value)} /> Venta
                      </label>
                      <label>
                        <input type="radio" name="ventaArriendo" value="Arriendo" checked={ventaArriendo === "Arriendo"} onChange={(e) => setVentaArriendo(e.target.value)} /> Arriendo
                      </label>
                    </div>
                    {errors.ventaArriendo && <span className="field-error">{errors.ventaArriendo}</span>}
                  </div>
                  <div className="field">
                    <span className="label-like">FECHA PREFERIDA *</span>
                    <div className="radios radios-col">
                      <label>
                        <input type="radio" name="fecha" value="Hoy" checked={fecha === "Hoy"} onChange={(e) => setFecha(e.target.value)} /> Hoy
                      </label>
                      <label>
                        <input type="radio" name="fecha" value="Mañana" checked={fecha === "Mañana"} onChange={(e) => setFecha(e.target.value)} /> Mañana
                      </label>
                      <label>
                        <input type="radio" name="fecha" value="Esta semana" checked={fecha === "Esta semana"} onChange={(e) => setFecha(e.target.value)} /> Esta semana
                      </label>
                    </div>
                    {errors.fecha && <span className="field-error">{errors.fecha}</span>}
                  </div>
                  <div className="field">
                    <span className="label-like">HORA *</span>
                    <div className="radios radios-col">
                      <label>
                        <input type="radio" name="hora" value="Mañana 10–13" checked={hora === "Mañana 10–13"} onChange={(e) => setHora(e.target.value)} /> Mañana 10–13
                      </label>
                      <label>
                        <input type="radio" name="hora" value="Tarde 15–19" checked={hora === "Tarde 15–19"} onChange={(e) => setHora(e.target.value)} /> Tarde 15–19
                      </label>
                    </div>
                    {errors.hora && <span className="field-error">{errors.hora}</span>}
                  </div>
                  <div className="field field-full">
                    <label htmlFor="f-meridiano-msg">MENSAJE</label>
                    <textarea id="f-meridiano-msg" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Ej: quiero ver el 2D de Los Leones, ¿tiene bodega? ¿hipoteca alzada?" rows={3} />
                  </div>
                  <div className="field field-full">
                    <label className="checkbox">
                      <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} />
                      <span>Acepto que me contacten por WhatsApp para coordinar la visita. No spam, solo esta propiedad.</span>
                    </label>
                    {errors.acepta && <span className="field-error">{errors.acepta}</span>}
                  </div>
                </div>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? <span className="spinner" aria-label="Cargando" /> : "Pedir visita por WhatsApp"}
                </button>
                <a href="tel:+56976340892" className="btn-ghost btn-ghost-full">
                  Llamar ahora
                </a>
                {success && (
                  <p className="form-success">
                    Te llega WhatsApp con hora confirmada y dirección exacta. Si no hay hora hoy, te proponemos
                    mañana antes de las 10:00.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="grid-12">
          <div className="footer-left">
            <p className="footer-brand">MERIDIANO · Corredora Providencia · Los Leones 2200, oficina 31</p>
            <p className="footer-sub">Horario oficina 09:00–19:00 Lun–Sáb</p>
          </div>
          <div className="footer-right">
            <nav className="footer-nav" aria-label="Footer">
              <a href="#inventario">Inventario</a>
              <span aria-hidden="true">·</span>
              <a href="#costos">Costos</a>
              <span aria-hidden="true">·</span>
              <a href="#agendar">Agendar</a>
            </nav>
            <p className="footer-copy">© 2026 Meridiano</p>
          </div>
        </div>
      </footer>

      {ctaVisible && !ctaDismissed && (
        <div className="cta-mobile-bar" role="region" aria-label="Acciones rápidas">
          <a href="#inventario" className="cta-mobile-btn cta-mobile-secondary">
            Revisar inventario
          </a>
          <a href="#agendar" className="cta-mobile-btn cta-mobile-primary">
            Agendar visita
          </a>
          <button type="button" className="cta-dismiss" aria-label="Cerrar barra" onClick={dismissCta}>
            ×
          </button>
        </div>
      )}
    </>
  );
}
