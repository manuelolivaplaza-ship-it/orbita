import { useEffect, useState, useRef } from "react";

function MediaImg({
  src,
  alt,
  ratio,
  filename,
  style,
}: {
  src: string;
  alt: string;
  ratio?: string;
  filename: string;
  style?: React.CSSProperties;
}) {
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((r) => {
        if (!r.ok) {
          console.warn(`media falta: ${filename}`);
          setMissing(true);
        }
      })
      .catch(() => {
        // do not mark missing on fetch error during dev, only on img error
      });
  }, [src, filename]);
  if (missing) {
    return (
      <div
        className="media-falta"
        data-falta={filename}
        style={{
          aspectRatio: ratio ?? "16/9",
          border: "1px solid var(--linea)",
          display: "grid",
          placeItems: "center",
          color: "var(--muted)",
          font: "600 0.8rem var(--font-ui)",
          background: "var(--paper)",
          ...style,
        }}
      >
        Falta: {filename}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={style}
      onError={() => {
        console.warn(`media falta: ${filename}`);
        setMissing(true);
      }}
    />
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroMissing, setHeroMissing] = useState(false);
  const [videoExists, setVideoExists] = useState<boolean | null>(null);

  // acordeon
  const [openFaq, setOpenFaq] = useState(0);

  // form
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [pieza, setPieza] = useState("");
  const [bn, setBn] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [donde, setDonde] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroMissing) console.warn("media falta: trama-hero-16x9.png");
  }, [heroMissing]);

  useEffect(() => {
    fetch("/media/trama-hero-loop.mp4", { method: "HEAD" })
      .then((r) => setVideoExists(r.ok))
      .catch(() => setVideoExists(false));
  }, []);

  useEffect(() => {
    fetch("/media/trama-hero-16x9.png", { method: "HEAD" })
      .then((r) => {
        if (!r.ok) setHeroMissing(true);
      })
      .catch(() => setHeroMissing(true));
  }, []);

  // sticky mobile: show if form not in viewport after scrolling past servicios
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // if form is not visible and scrollY > 400, show sticky
        const scrolled = window.scrollY > 500;
        setShowSticky(!entry.isIntersecting && scrolled && !success);
      },
      { threshold: 0 }
    );
    obs.observe(el);
    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setShowSticky(!inView && window.scrollY > 500 && !success);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [success]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Mínimo 2 caracteres";
    const telClean = tel.replace(/\s/g, "");
    // regex +56 9 XXXXXXXX or 9XXXXXXXX
    const telOk = /^(\+569\d{8}|9\d{8})$/.test(telClean);
    if (!telOk) e.tel = "Formato: +56 9 81234450";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Email no válido";
    if (!pieza) e.pieza = "Selecciona una pieza";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const key = `trama_encargo_${Date.now()}`;
      const data = { nombre, tel, email, pieza, bn, presupuesto, donde, fecha, mensaje, date: new Date().toISOString() };
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch {}
      const uso = donde.trim() || "mi proyecto";
      const pres = presupuesto || "por definir";
      const texto = `Hola TRAMA, quiero encargar ${pieza} para ${uso}. Soy ${nombre}, presupuesto ${pres}. ¿Tienen cupo Q2?`;
      const url = `https://wa.me/56981234450?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
    }, 800);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#portada-manifiesto" className="header-logo" aria-label="TRAMA inicio">
            <span className="tr">TR</span>AMA
          </a>
          <nav className="header-nav" aria-label="Principal">
            <a href="#servicios-pieza">Piezas</a>
            <a href="#proceso-tres">Proceso</a>
            <a href="#seleccion-obras">Obras</a>
            <a href="#encargo-desde">Encargo</a>
          </nav>
          <a className="header-tel" href="tel:+56981234450">
            +56 9 8123 4450
          </a>
          <a className="header-cta" href="#contacto-estudio">
            Encargar
          </a>
          <button
            className="header-burger"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className={`header-mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Móvil">
          <a href="#servicios-pieza" onClick={() => setMenuOpen(false)}>Piezas</a>
          <a href="#proceso-tres" onClick={() => setMenuOpen(false)}>Proceso</a>
          <a href="#seleccion-obras" onClick={() => setMenuOpen(false)}>Obras</a>
          <a href="#encargo-desde" onClick={() => setMenuOpen(false)}>Encargo</a>
          <a href="tel:+56981234450" onClick={() => setMenuOpen(false)}>+56 9 8123 4450</a>
        </nav>
      </header>

      <section id="portada-manifiesto">
        <div className="hero-wrap">
          <div className="mancheta">
            <span className="mancheta-left">TRAMA · ESTUDIO DE DISEÑO — SANTIAGO · 2014—2026</span>
            <span className="mancheta-right">
              ED. 04 / PAPEL 600G / TINTA 1+0 <i className="mancheta-dot" aria-hidden="true" />
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">IDENTIDAD · WEB · EDITORIAL</p>
              <h1 className="hero-h1">
                Identidad, web y editorial que se <em>imprimen</em> bien y funcionan mejor.
              </h1>
              <p className="hero-subhead">
                Estudio chico, entregables grandes. Retícula a medida, tipografía con oficio y archivos que cualquier imprenta respeta. Sin plantillas, sin mockups flotantes.
              </p>
              <div className="hero-ctas">
                <a href="#contacto-estudio" className="btn-primary">
                  Encargar proyecto
                </a>
                <a href="#seleccion-obras" className="btn-ghost">
                  Ver obras →
                </a>
              </div>
              <div className="hero-banda" aria-label="Banda honesta">
                <span className="hero-banda-item">Entrega con retícula y guías</span>
                <span className="hero-banda-sep">—</span>
                <span className="hero-banda-item">Archivos abiertos incluidos</span>
                <span className="hero-banda-sep">—</span>
                <span className="hero-banda-item">Imprenta y web coordinadas</span>
              </div>
              <p className="hero-micro">
                Si tu marca actual no aguanta una fotocopia en blanco y negro, no es marca. La probamos en una cara antes de mostrarte el color.
              </p>
            </div>
            <div className="hero-media-col">
              {heroMissing ? (
                <div
                  className="media-falta"
                  data-falta="trama-hero-16x9.png"
                  style={{
                    aspectRatio: "16/9",
                    border: "1px solid var(--linea)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--muted)",
                    font: "600 0.8rem var(--font-ui)",
                  }}
                >
                  Falta: trama-hero-16x9.png
                </div>
              ) : videoExists ? (
                <div className="hero-media-frame">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/media/trama-hero-16x9.png"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={() => setHeroMissing(true)}
                  >
                    <source src="/media/trama-hero-loop.mp4" type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="hero-media-frame">
                  <img
                    src="/media/trama-hero-16x9.png"
                    alt="Pliego de papel de algodón 600g sobre platina de acero grafito, retícula trazada a lápiz y tipos móviles de plomo"
                    loading="eager"
                    onError={() => setHeroMissing(true)}
                  />
                </div>
              )}
              <div className="hero-caption">
                <span className="hero-caption-left">Pliego 600g · retícula 12 col · luz norte 11:20</span>
                <span className="hero-caption-right">Taller · Providencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* #servicios-pieza */}
      <section id="servicios-pieza" className="section-pad">
        <div className="wrap">
          <p className="section-kicker">SERVICIOS · POR PIEZA, NO POR HORAS</p>
          <h2 className="section-h2 section-h2--servicios">
            Tres piezas, <u>precio</u> desde y qué te llevas impreso
          </h2>
          <p className="section-intro">
            Cobramos por entregable cerrado, no por horas. Cada pieza con archivos abiertos, guía de uso y una prueba impresa. Si no lo puedes mandar a imprenta tú solo, no está terminado.
          </p>

          <div className="servicios-layout">
            <div className="servicios-main">
              {/* Fila 01 Identidad */}
              <div className="carta-fila">
                <div className="carta-text">
                  <div className="fila-meta">
                    <span className="fila-indice">01</span>
                    <span className="fila-estado">
                      <i aria-hidden="true" /> DISPONIBLE Q2
                    </span>
                  </div>
                  <h3 className="carta-titulo">Identidad (marca + sistema)</h3>
                  <p className="carta-entregables">
                    Logotipo en retícula, paleta, tipografía, tarjetas, hoja carta, firma mail, marca en 1 tinta + guía de 12 páginas.
                  </p>
                  <p className="carta-lista">
                    <span className="sep">—</span>Logotipo vectorial · Variantes horizontal/vertical · Prueba en fotocopia B/N · Guía PDF 12p
                  </p>
                </div>
                <div className="carta-price">
                  <span className="carta-precio-sub">CLP · IVA incl.</span>
                  <span className="carta-precio">desde $385.000</span>
                  <span className="carta-plazo">10 días hábiles</span>
                  <span className="carta-nota">valores referenciales; se confirma tras brief</span>
                  <a href="#contacto-estudio" className="carta-cta">
                    Encargar identidad →
                  </a>
                </div>
              </div>

              {/* Fila 02 Web */}
              <div className="carta-fila">
                <div className="carta-text">
                  <div className="fila-meta">
                    <span className="fila-indice">02</span>
                    <span className="fila-estado">
                      <i aria-hidden="true" /> DISPONIBLE Q2
                    </span>
                  </div>
                  <h3 className="carta-titulo">Sitio web (diseño + front)</h3>
                  <p className="carta-entregables">
                    Diseño en retícula 12 col, front en tu hosting, CMS editable, SEO base y prueba de velocidad &gt;90. Sin plantilla.
                  </p>
                  <p className="carta-lista">
                    <span className="sep">—</span>Figma con retícula · Front estático/CMS · 3 breakpoints · Entrega en tu dominio
                  </p>
                </div>
                <div className="carta-price">
                  <span className="carta-precio-sub">CLP</span>
                  <span className="carta-precio">desde $680.000</span>
                  <span className="carta-plazo">15 días hábiles</span>
                  <span className="carta-nota">Hosting primer año incluido si contratas identidad + web.</span>
                  <a href="#contacto-estudio" className="carta-cta">
                    Encargar web →
                  </a>
                </div>
              </div>

              {/* Fila 03 Editorial */}
              <div className="carta-fila">
                <div className="carta-text">
                  <div className="fila-meta">
                    <span className="fila-indice">03</span>
                    <span className="fila-estado">
                      <i aria-hidden="true" /> DISPONIBLE Q2
                    </span>
                  </div>
                  <h3 className="carta-titulo">Editorial / dossier</h3>
                  <p className="carta-entregables">
                    Memoria, catálogo o dossier de 16–24 páginas, retícula editorial, tipografía con oficio y PDF de imprenta con sangres.
                  </p>
                  <p className="carta-lista">
                    <span className="sep">—</span>Retícula editorial · Estilos tipográficos · PDF/X-1a con sangres · Prueba impresa A3
                  </p>
                </div>
                <div className="carta-price">
                  <span className="carta-precio-sub">CLP</span>
                  <span className="carta-precio">desde $445.000</span>
                  <span className="carta-plazo">12 días hábiles</span>
                  <a href="#contacto-estudio" className="carta-cta">
                    Encargar editorial →
                  </a>
                </div>
              </div>

              <p className="carta-pie">
                Valores en CLP referenciales; el valor final se confirma tras brief de 20 min. Sin letra chica. 50% al encargo, 50% al entregar abiertos.
              </p>
            </div>

            <aside className="servicios-aside">
              <div className="aside-card">
                <h3>¿Cuál pides primero?</h3>
                <p>Si no tienes marca sólida, parte por identidad. Si ya tienes marca, web o editorial directo. No vendemos pack amarrado.</p>
                <ul>
                  <li>
                    <span className="dash">—</span>Identidad valida en B/N primero
                  </li>
                  <li>
                    <span className="dash">—</span>Web sin plantilla
                  </li>
                  <li>
                    <span className="dash">—</span>Editorial con retícula visible
                  </li>
                </ul>
                <a href="tel:+56981234450" className="aside-tel">
                  +56 9 8123 4450
                </a>
                <span className="aside-sub">WhatsApp con muestra de pliego</span>
                <div className="aside-media" style={{ aspectRatio: "1/1" }}>
                  <MediaImg
                    src="/media/trama-tile-01-1x1.png"
                    alt="Tipos móviles de plomo 12pt sobre papel algodón"
                    filename="trama-tile-01-1x1.png"
                    ratio="1/1"
                  />
                </div>
                <p className="aside-caption">Tipos móviles · plomo — 12pt</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* #proceso-tres */}
      <section id="proceso-tres" className="section-pad">
        <div className="wrap">
          <p className="section-kicker section-kicker--blue">PROCESO · 3 HITOS, SIN HUMO</p>
          <h2 className="section-h2 section-h2--proceso">Brief, prueba y entrega. Ves el pliego antes que la pantalla</h2>
          <p className="section-intro" style={{ maxWidth: "52ch" }}>
            No hay &apos;workshop de co-creación&apos;. Hay brief de 20 min, prueba impresa en tu mano y archivos que imprimes tú.
          </p>

          <div className="proceso-timeline">
            <div className="hito">
              <p className="hito-num">01</p>
              <h3 className="hito-titulo">01 · Brief (20 min)</h3>
              <p className="hito-texto">
                Te preguntamos qué vendes, a quién y dónde se va a imprimir. Trae referentes y lo que no te gusta. Salimos con retícula y tono definidos.
              </p>
              <span className="hito-entrega">Quedas con minuta de 1 página</span>
              <span className="hito-tiempo">Día 1</span>
            </div>
            <div className="hito">
              <p className="hito-num">02</p>
              <h3 className="hito-titulo">02 · Prueba (pliego real)</h3>
              <p className="hito-texto">
                Te mostramos identidad en fotocopia B/N + color en papel real. Web en tu dominio de prueba. Editorial en A3 con sangres. Corriges una vez incluido.
              </p>
              <span className="hito-entrega">Prueba impresa + link</span>
              <span className="hito-tiempo">Día 5–7</span>
            </div>
            <div className="hito">
              <p className="hito-num">03</p>
              <h3 className="hito-titulo">03 · Entrega (abiertos)</h3>
              <p className="hito-texto">
                Archivos vectoriales, tipografías con licencia, guía de 12p y PDF/X-1a. Web con CMS y claves. Sin amarre.
              </p>
              <span className="hito-entrega">Carpeta Drive + pliego firmado</span>
              <span className="hito-tiempo">Día 10–15 según pieza</span>
            </div>
          </div>

          <div className="proceso-banda">
            <span className="banda-pill">
              <i aria-hidden="true" /> 1 corrección incluida
            </span>
            <span className="banda-pill">
              <i aria-hidden="true" /> Archivos abiertos
            </span>
            <span className="banda-pill">
              <i aria-hidden="true" /> Sin plantilla
            </span>
          </div>

          <div className="proceso-media-wrap">
            <div className="proceso-media-col">
              <div className="proceso-media-frame">
                <MediaImg
                  src="/media/trama-interior-16x9.png"
                  alt="Taller gráfico vacío: mesa de corte con papeles y regla T, ventanal norte desenfocado"
                  filename="trama-interior-16x9.png"
                  ratio="16/9"
                />
              </div>
              <p className="proceso-caption">Taller · mesa de corte — luz norte 10:40</p>
              <p className="cita-taller">Si la prueba no te convence en B/N, no seguimos a color. Repetimos retícula sin costo dentro del hito 02.</p>
            </div>
          </div>
        </div>
      </section>

      {/* #seleccion-obras */}
      <section id="seleccion-obras" className="section-pad">
        <div className="wrap">
          <p className="section-kicker">OBRAS · 4 PIEZAS RECIENTES</p>
          <h2 className="section-h2 section-h2--obras">Menos portfolio infinito, más pliego que se toca</h2>
          <p className="section-intro" style={{ maxWidth: "56ch" }}>
            Cuatro encargos distintos: marca que aguanta fotocopia, web que carga en 1s y editorial que no se rompe al imprimir. Cada pieza con ficha.
          </p>

          <div className="obras-grid">
            {/* Obra 01 */}
            <article className="obra-card">
              <div className="obra-media obra-media--1x1">
                <MediaImg src="/media/trama-tile-01-1x1.png" alt="Bodega Central — tipos móviles plomo" filename="trama-tile-01-1x1.png" ratio="1/1" />
              </div>
              <div className="obra-body">
                <div className="obra-folio">
                  <span className="obra-folio-left">01 / IDENTIDAD — BODEGA CENTRAL</span>
                  <span className="obra-folio-right">2025</span>
                </div>
                <h3 className="obra-title">Bodega Central · sistema en 1 tinta</h3>
                <p className="obra-ficha">Logotipo retícula 8 col · Paleta 2 tintas · Guía 12p</p>
                <span className="obra-precio">desde $385.000</span>
              </div>
            </article>

            {/* Obra 02 */}
            <article className="obra-card">
              <div className="obra-media obra-media--4x3">
                <MediaImg src="/media/trama-tile-02-4x3.png" alt="Estudio Norte — pliego editorial plegado" filename="trama-tile-02-4x3.png" ratio="4/3" />
              </div>
              <div className="obra-body">
                <div className="obra-folio">
                  <span className="obra-folio-left">02 / WEB — ESTUDIO NORTE</span>
                  <span className="obra-folio-right">2025</span>
                </div>
                <h3 className="obra-title">Estudio Norte · web editorial 12 col</h3>
                <p className="obra-ficha">Retícula 12 col · CMS · Speed 96</p>
                <span className="obra-precio">desde $680.000</span>
              </div>
            </article>

            {/* Obra 03 */}
            <article className="obra-card">
              <div className="obra-media obra-media--3x4">
                <MediaImg src="/media/trama-tile-03-3x4.png" alt="Memoria Anual — detalle sangres 170g" filename="trama-tile-03-3x4.png" ratio="3/4" />
              </div>
              <div className="obra-body">
                <div className="obra-folio">
                  <span className="obra-folio-left">03 / EDITORIAL — MEMORIA ANUAL</span>
                  <span className="obra-folio-right">2024</span>
                </div>
                <h3 className="obra-title">Memoria Anual · 24 páginas</h3>
                <p className="obra-ficha">Retícula editorial · PDF/X-1a · Papel 170g</p>
                <span className="obra-precio">desde $445.000</span>
              </div>
            </article>

            {/* Obra 04 */}
            <article className="obra-card">
              <div className="obra-media obra-media--1x1">
                <MediaImg src="/media/trama-tile-04-1x1.png" alt="Feria Taller — afiche 70×100 enrollado" filename="trama-tile-04-1x1.png" ratio="1/1" />
              </div>
              <div className="obra-body">
                <div className="obra-folio">
                  <span className="obra-folio-left">04 / SISTEMA — FERIA TALLER</span>
                  <span className="obra-folio-right">2025</span>
                </div>
                <h3 className="obra-title">Feria Taller · afiche + señalética</h3>
                <p className="obra-ficha">Afiche 70×100 · Señalética 1px · Tintas directas</p>
                <span className="obra-precio">desde $320.000</span>
              </div>
            </article>
          </div>

          <p className="obras-nota">Obras con ficha real, sin logos de clientes inventados ni métricas infladas. Cada imagen es pliego/pieza, no mockup 3D.</p>

          <div className="obras-wide">
            <MediaImg src="/media/trama-proof-16x9.png" alt="Prueba de color — pliego con corrección en rojo" filename="trama-proof-16x9.png" ratio="16/9" />
          </div>
          <p className="obras-wide-caption">Prueba de color · Pantone + pliego — corrección en rojo</p>
        </div>
      </section>

      {/* #encargo-desde */}
      <section id="encargo-desde" className="section-pad">
        <div className="wrap">
          <p className="section-kicker section-kicker--blue">ENCARGO · DESDE Y CONDICIONES</p>
          <h2 className="section-h2 section-h2--encargo">Precio desde, plazos y qué pasa si no te gusta la prueba</h2>
          <p className="section-intro">Sin pack amarrado. Pides una pieza y si resulta, sigues. 50% al encargo, 50% al entregar abiertos. Factura exenta.</p>

          <div className="encargo-layout">
            <div className="encargo-main">
              <table className="tabla-encargo" aria-label="Tabla de encargos">
                <thead>
                  <tr>
                    <th>Pieza</th>
                    <th>Desde (CLP)</th>
                    <th>Plazo</th>
                    <th>Qué incluye</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Identidad (marca + sistema)</td>
                    <td>
                      <strong>$385.000</strong>
                    </td>
                    <td>10 días hábiles</td>
                    <td>Logotipo vectorial + guía 12p + prueba B/N y color + archivos abiertos</td>
                  </tr>
                  <tr>
                    <td>Sitio web (diseño + front)</td>
                    <td>
                      <strong>$680.000</strong>
                    </td>
                    <td>15 días hábiles</td>
                    <td>Diseño 12 col + front/CMS + 3 breakpoints + hosting año 1 si va con identidad</td>
                  </tr>
                  <tr>
                    <td>Editorial / dossier (16–24p)</td>
                    <td>
                      <strong>$445.000</strong>
                    </td>
                    <td>12 días hábiles</td>
                    <td>Retícula + estilos + PDF/X-1a + prueba A3</td>
                  </tr>
                  <tr>
                    <td>Afiche / señalética suelta</td>
                    <td>
                      <strong>$180.000</strong>
                    </td>
                    <td>5 días hábiles</td>
                    <td>1 pliego 70×100 o set señalética 1px + PDF imprenta</td>
                  </tr>
                  <tr>
                    <td>Retainer mensual (si hay)</td>
                    <td>
                      <strong>$520.000/mes</strong>
                    </td>
                    <td>mensual</td>
                    <td>3 piezas menores/mes + ajuste web + prioridad taller</td>
                  </tr>
                </tbody>
              </table>

              {/* stack mobile */}
              <div className="tabla-stack">
                <div className="stack-card">
                  <p className="stack-label">Pieza</p>
                  <p className="stack-title">Identidad (marca + sistema)</p>
                  <div className="stack-row">
                    <span>Desde</span>
                    <strong>$385.000</strong>
                  </div>
                  <div className="stack-row">
                    <span>Plazo</span>
                    <span>10 días hábiles</span>
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "#2A2E33", margin: "6px 0 0 0" }}>Logotipo vectorial + guía 12p + prueba B/N y color + archivos abiertos</p>
                </div>
                <div className="stack-card">
                  <p className="stack-label">Pieza</p>
                  <p className="stack-title">Sitio web (diseño + front)</p>
                  <div className="stack-row">
                    <span>Desde</span>
                    <strong>$680.000</strong>
                  </div>
                  <div className="stack-row">
                    <span>Plazo</span>
                    <span>15 días hábiles</span>
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "#2A2E33", margin: "6px 0 0 0" }}>
                    Diseño 12 col + front/CMS + 3 breakpoints + hosting año 1 si va con identidad
                  </p>
                </div>
                <div className="stack-card">
                  <p className="stack-label">Pieza</p>
                  <p className="stack-title">Editorial / dossier (16–24p)</p>
                  <div className="stack-row">
                    <span>Desde</span>
                    <strong>$445.000</strong>
                  </div>
                  <div className="stack-row">
                    <span>Plazo</span>
                    <span>12 días hábiles</span>
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "#2A2E33", margin: "6px 0 0 0" }}>Retícula + estilos + PDF/X-1a + prueba A3</p>
                </div>
                <div className="stack-card">
                  <p className="stack-label">Pieza</p>
                  <p className="stack-title">Afiche / señalética suelta</p>
                  <div className="stack-row">
                    <span>Desde</span>
                    <strong>$180.000</strong>
                  </div>
                  <div className="stack-row">
                    <span>Plazo</span>
                    <span>5 días hábiles</span>
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "#2A2E33", margin: "6px 0 0 0" }}>1 pliego 70×100 o set señalética 1px + PDF imprenta</p>
                </div>
                <div className="stack-card">
                  <p className="stack-label">Pieza</p>
                  <p className="stack-title">Retainer mensual (si hay)</p>
                  <div className="stack-row">
                    <span>Desde</span>
                    <strong>$520.000/mes</strong>
                  </div>
                  <div className="stack-row">
                    <span>Plazo</span>
                    <span>mensual</span>
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "#2A2E33", margin: "6px 0 0 0" }}>3 piezas menores/mes + ajuste web + prioridad taller</p>
                </div>
              </div>

              <div className="encargo-banda">Identidad + web juntos desde $980.000 · Editorial + identidad desde $780.000</div>
              <p className="encargo-banda-sub">Valores referenciales; se confirman tras brief. 1 corrección incluida, extras $45.000 c/u.</p>

              <ul className="encargo-condiciones">
                <li>
                  <span className="dash">—</span>50% al encargo (transferencia) · 50% al entregar abiertos
                </li>
                <li>
                  <span className="dash">—</span>1 corrección incluida por hito
                </li>
                <li>
                  <span className="dash">—</span>Archivos abiertos siempre · sin amarre
                </li>
                <li>
                  <span className="dash">—</span>Factura exenta · boleta si necesitas
                </li>
              </ul>

              <p className="encargo-cita">Si la prueba B/N no te convence, repetimos retícula sin costo dentro del hito 02. No avanzamos a color hasta que la marca aguante fotocopia.</p>
            </div>

            <aside className="encargo-aside">
              <div className="aside-card">
                <h3>Qué te llevas siempre</h3>
                <p>Carpeta Drive con vectores, tipografías con licencia, guía de uso y PDF/X-1a. Web con claves y manual de 1 página.</p>
                <ul>
                  <li>
                    <span className="dash">—</span>Vectores + tipografías
                  </li>
                  <li>
                    <span className="dash">—</span>Guía 12p
                  </li>
                  <li>
                    <span className="dash">—</span>Prueba impresa A3
                  </li>
                </ul>
                <a href="#contacto-estudio" style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "0.84rem", color: "var(--accent)" }}>
                  Encargar ahora →
                </a>
                <div className="encargo-aside-media">
                  <MediaImg src="/media/trama-tile-04-1x1.png" alt="Guía 12p — afiche enrollado con hilo rojo" filename="trama-tile-04-1x1.png" ratio="1/1" />
                </div>
                <p className="aside-caption">Guía 12p · portada — 1 tinta + rojo</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* #preguntas-taller */}
      <section id="preguntas-taller" className="section-pad">
        <div className="wrap">
          <p className="section-kicker">PREGUNTAS · DE TALLER</p>
          <h2 className="section-h2 section-h2--preguntas">Lo que preguntan antes de encargar</h2>
          <div className="preguntas-layout">
            <div className="preguntas-main">
              <div className="acordeon">
                {[
                  {
                    q: "¿Trabajan con plantillas?",
                    a: "No. Cada retícula se traza para tu pieza. Si detectas una plantilla, te devolvemos el 50% del encargo.",
                  },
                  {
                    q: "¿Qué pasa si mi imprenta dice que el archivo no sirve?",
                    a: "Lo arreglamos en 24h sin costo. Entregamos PDF/X-1a con sangres y marcas. Hemos impreso en A Impresores, Ograma y talleres chicos sin reclamo.",
                  },
                  {
                    q: "¿Hacen solo web sin identidad?",
                    a: "Sí. Si tu marca aguanta B/N, directo a web. Si no, te decimos y cotizamos ajuste menor ($120.000) antes de web.",
                  },
                  {
                    q: "¿Cuántas correcciones?",
                    a: "1 por hito incluida. Extras $45.000 c/u. La prueba B/N cuenta como hito 02: si no te gusta, repetimos retícula sin costo dentro de ese hito.",
                  },
                  {
                    q: "¿Puedo encargar solo afiche?",
                    a: "Sí, desde $180.000. Si después pides identidad, el afiche se descuenta.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`acordeon-row ${openFaq === i ? "open" : ""}`}>
                    <button className="acordeon-btn" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                      <span className="acordeon-q">{item.q}</span>
                      <svg className="acordeon-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    </button>
                    <div className="acordeon-a">
                      <div className="acordeon-a-inner">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="preguntas-aside">
              <div className="aside-card">
                <h3>Taller abierto</h3>
                <p>Lun–Vie 09:00–18:30 · Sáb con hora. Providencia, a 4 cuadras de Metro Los Leones. Ven a ver pliegos, no renders.</p>
                <ul>
                  <li>
                    <span className="dash">—</span>Prueba impresa en mano
                  </li>
                  <li>
                    <span className="dash">—</span>Archivos abiertos
                  </li>
                  <li>
                    <span className="dash">—</span>Sin amarre
                  </li>
                </ul>
                <a href="tel:+56981234450" className="aside-tel">
                  +56 9 8123 4450
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* #contacto-estudio */}
      <section id="contacto-estudio" className="section-pad">
        <div className="wrap">
          <p className="section-kicker">ENCARGO · TALLER ABIERTO</p>
          <h2 className="section-h2 section-h2--contacto">Cuéntanos la pieza y te mandamos prueba en 5 días</h2>
          <p className="section-intro">Brief de 20 min por Meet o en taller. Si no hay fit, te decimos en la misma reunión y no cobramos.</p>

          <div className="contacto-layout">
            <div className="contacto-left">
              <a href="tel:+56981234450" className="tel-grande">
                +56 9 8123 4450
              </a>
              <p className="tel-sub">WhatsApp directo con taller, no bot.</p>
              <div className="horarios-line">
                <i aria-hidden="true" />
                Lun–Vie 09:00–18:30 · Sáb con hora · Respuesta en 2h hábiles
              </div>

              <div className="encargos-lista">
                <h4>Últimos 4 encargos (ficha, sin nombres)</h4>
                <ul>
                  <li>Identidad · bodega · 1 tinta + guía 12p</li>
                  <li>Web · estudio norte · 96 speed</li>
                  <li>Editorial · memoria 24p · PDF/X-1a</li>
                  <li>Afiche · feria taller · 70×100</li>
                </ul>
              </div>

              <p className="cita-taller" style={{ fontSize: "0.82rem" }}>
                Si la prueba B/N no te convence, repetimos retícula sin costo. No avanzamos a color hasta que aguante fotocopia.
              </p>
              <p className="sede-mini">Providencia · a 4 cuadras Metro Los Leones · Taller con pliegos a la vista</p>
            </div>

            <div className="contacto-right" ref={formRef}>
              <form className="form-card" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="form-label" htmlFor="f-nombre">
                      Nombre*
                    </label>
                    <input id="f-nombre-diseno-claro" className="form-input" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
                    {errors.nombre && <span className="form-error">{errors.nombre}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="f-tel">
                      Tel / WhatsApp*
                    </label>
                    <input id="f-tel-diseno-claro" className="form-input" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="+56 9 8123 4450" />
                    {errors.tel && <span className="form-error">{errors.tel}</span>}
                  </div>
                  <div className="form-field form-field--full">
                    <label className="form-label" htmlFor="f-email">
                      Email
                    </label>
                    <input id="f-email-diseno-claro" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hola@ejemplo.cl" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="f-pieza">
                      Pieza que necesitas*
                    </label>
                    <select id="f-pieza" className="form-select" value={pieza} onChange={(e) => setPieza(e.target.value)}>
                      <option value="">Selecciona</option>
                      <option value="Identidad">Identidad</option>
                      <option value="Web">Web</option>
                      <option value="Editorial">Editorial</option>
                      <option value="Afiche/Señalética">Afiche/Señalética</option>
                      <option value="Retainer">Retainer</option>
                      <option value="No sé, me orientan">No sé, me orientan</option>
                    </select>
                    {errors.pieza && <span className="form-error">{errors.pieza}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="f-bn">
                      ¿Marca aguanta B/N?
                    </label>
                    <select id="f-bn" className="form-select" value={bn} onChange={(e) => setBn(e.target.value)}>
                      <option value="">Selecciona</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                      <option value="No sé">No sé</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="f-pres">
                      Presupuesto estimado
                    </label>
                    <select id="f-pres" className="form-select" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)}>
                      <option value="">Selecciona</option>
                      <option value="180k–400k">180k–400k</option>
                      <option value="400k–700k">400k–700k</option>
                      <option value="700k–1M">700k–1M</option>
                      <option value="1M+">1M+</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="f-donde">
                      ¿Dónde se va a imprimir/usar?
                    </label>
                    <input
                      id="f-donde"
                      className="form-input"
                      value={donde}
                      onChange={(e) => setDonde(e.target.value)}
                      placeholder="Ej: web + tarjetas + afiche feria"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="f-fecha">
                      Fecha deseada
                    </label>
                    <select id="f-fecha-diseno-claro" className="form-select" value={fecha} onChange={(e) => setFecha(e.target.value)}>
                      <option value="">Selecciona</option>
                      <option value="Esta semana">Esta semana</option>
                      <option value="Próxima">Próxima</option>
                      <option value="Este mes">Este mes</option>
                    </select>
                  </div>
                  <div className="form-field form-field--full">
                    <label className="form-label" htmlFor="f-mensaje">
                      Mensaje
                    </label>
                    <textarea
                      id="f-mensaje-diseno-claro"
                      className="form-textarea"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Ej: necesito identidad para bodega de vinos, va en etiqueta y web. Referente: bodega X, no quiero dorado."
                      rows={4}
                    />
                  </div>
                </div>

                <label className="form-check">
                  <input type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} style={{ marginTop: 3 }} />
                  <span>Acepto que me contacten por WhatsApp para el brief. No spam, solo este encargo.</span>
                </label>

                <div style={{ marginTop: 16 }}>
                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading && <span className="spinner" aria-hidden="true" />}
                    {loading ? "Enviando..." : "Encargar por WhatsApp"}
                  </button>
                  <a href="tel:+56981234450" className="form-ghost">
                    Llamar ahora
                  </a>
                </div>

                {success && (
                  <div className="form-success">
                    Te llega WhatsApp con hora de brief y link de Drive para referentes. Si no hay cupo Q2, te proponemos fecha sin perder el 50%.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-brand">TRAMA · Estudio de diseño · Providencia — Santiago</p>
            <p className="footer-sub">Taller 09:00–18:30 Lun–Vie · Sáb con hora</p>
          </div>
          <div className="footer-right">
            <nav className="footer-links" aria-label="Footer">
              <a href="#servicios-pieza">Piezas</a>
              <span className="footer-dot">·</span>
              <a href="#proceso-tres">Proceso</a>
              <span className="footer-dot">·</span>
              <a href="#seleccion-obras">Obras</a>
              <span className="footer-dot">·</span>
              <a href="#encargo-desde">Encargo</a>
            </nav>
            <p className="footer-copy">© 2026 TRAMA</p>
          </div>
        </div>
      </footer>

      {showSticky && (
        <div className="mobile-sticky">
          <a href="#contacto-estudio">Encargar</a>
        </div>
      )}
    </>
  );
}
