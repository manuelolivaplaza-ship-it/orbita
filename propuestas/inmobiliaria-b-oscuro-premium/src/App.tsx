import { useEffect, useState, useRef } from "react";

// ── Header (exact BUILD-01, no restyle) ──
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} role="banner">
      <div className="site-header__inner">
        <div className="header__brand">
          <a href="#" className="logo" aria-label="CUMBRES — inicio">CUMBRES</a>
        </div>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#propiedades">Propiedades</a>
          <a href="#ficha-cumbres">Ficha</a>
          <a href="#barrio-noche">Barrio noche</a>
          <a href="#en-verde">En verde</a>
        </nav>

        <div className="header__right">
          <a href="tel:+56973842051" className="header__tel" aria-label="Llamar +56 9 7384 2051">
            +56 9 7384 2051
          </a>
          <a href="tel:+56973842051" className="header__tel--icon" aria-label="Llamar +56 9 7384 2051">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M5 4.5a1 1 0 0 1 .9-.6h3.2a1 1 0 0 1 1 .8l.6 4a1 1 0 0 1-.5 1l-2.2 1.5a15 15 0 0 0 6.5 6.5l1.5-2.2a1 1 0 0 1 1-.5l4 .6a1 1 0 0 1 .8 1v3.2a1 1 0 0 1-.6.9A18 18 0 0 1 5 4.5Z" />
            </svg>
          </a>
          <a href="#visita-privada" className="btn-cta">Agendar visita privada</a>
          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`mobile-panel ${open ? "is-open" : ""}`} aria-label="Navegación móvil">
        <a href="#propiedades" onClick={() => setOpen(false)}>Propiedades</a>
        <a href="#ficha-cumbres" onClick={() => setOpen(false)}>Ficha</a>
        <a href="#barrio-noche" onClick={() => setOpen(false)}>Barrio noche</a>
        <a href="#en-verde" onClick={() => setOpen(false)}>En verde</a>
        <a href="tel:+56973842051" onClick={() => setOpen(false)}>+56 9 7384 2051</a>
      </nav>
    </header>
  );
}

function HeroMedia() {
  const [imgFailed, setImgFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const base = import.meta.env.BASE_URL ?? "/";

  useEffect(() => {
    fetch(`${base}media/cumbres-hero-loop.mp4`, { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, [base]);

  useEffect(() => {
    if (imgFailed) {
      console.warn("[CUMBRES] falta cumbres-hero-16x9.png");
    }
  }, [imgFailed]);

  if (imgFailed) {
    return (
      <div
        className="media-falta"
        data-falta="cumbres-hero-16x9.png"
        style={{
          aspectRatio: "16/9",
          border: "1px solid var(--linea)",
          display: "grid",
          placeItems: "center",
          color: "var(--muted)",
          font: "500 0.8rem var(--font-ui)",
        }}
      >
        Falta cumbres-hero-16x9.png
      </div>
    );
  }

  if (hasVideo && !videoFailed) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={`${base}media/cumbres-hero-16x9.png`}
        aria-label="Mesa de piedra negra con llave de bronce y plano plegado reflejando ventanal nocturno — CUMBRES Vitacura"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onError={() => setVideoFailed(true)}
      >
        <source src={`${base}media/cumbres-hero-loop.mp4`} type="video/mp4" />
        <img
          src={`${base}media/cumbres-hero-16x9.png`}
          alt="Mesa de piedra negra con llave de bronce y plano plegado reflejando ventanal nocturno — CUMBRES Vitacura"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setImgFailed(true)}
        />
      </video>
    );
  }

  return (
    <picture>
      <source media="(max-width: 720px)" srcSet={`${base}media/cumbres-hero-9x16.png`} />
      <img
        src={`${base}media/cumbres-hero-16x9.png`}
        alt="Mesa de piedra negra con llave de bronce y plano plegado reflejando ventanal nocturno — CUMBRES Vitacura"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onError={() => setImgFailed(true)}
      />
    </picture>
  );
}

function Hero() {
  return (
    <section id="portada" aria-label="Portada CUMBRES">
      <div className="portada__inner">
        <div className="hero__copy">
          <p className="kicker">VITACURA — DESDE 2018 · VISITAS HASTA LAS 21:00</p>
          <h1 className="h1">Propiedades que se visitan de noche y se firman sin humo.</h1>
          <p className="hero__sub">
            Ficha completa antes de preguntar. Metros útiles reales, gastos comunes del último mes y disponibilidad para hoy. Si no está disponible, no está publicada.
          </p>

          <div className="hero__ctas">
            <a href="#propiedades" className="btn-primary">Ver stock nocturno con ficha real</a>
            <a href="#visita-privada" className="btn-ghost">Agendar visita privada</a>
          </div>

          <div className="hero__banda" aria-label="Banda honesta">
            <span className="hero__banda-item">UF del día 39.180</span>
            <span className="dot" aria-hidden="true" />
            <span className="hero__banda-item">Gastos comunes reales</span>
            <span className="dot" aria-hidden="true" />
            <span className="hero__banda-item">Visita en 24h o te avisamos</span>
          </div>

          <p className="hero__micro">
            No pedimos reserva para mostrar. Comisión 1,9% + IVA por lado en venta. Arriendo 50% del mes por lado. Tasación $85.000 se abona si vendes con nosotros.
          </p>
        </div>

        <div className="hero__media" role="img" aria-label="Mesa de piedra negra con llave de bronce y plano plegado reflejando ventanal nocturno — CUMBRES Vitacura">
          <div className="hero__media-wrap">
            <HeroMedia />
          </div>
          <p className="hero__caption">Mesa de piedra negra · llave bronce n°7 · Vitacura 21:00</p>
        </div>
      </div>
    </section>
  );
}

// ── Helpers ──
function MediaFalta({ filename, ratio }: { filename: string; ratio: string }) {
  useEffect(() => {
    console.warn(`[CUMBRES] falta ${filename}`);
  }, [filename]);
  return (
    <div
      className="media-falta"
      data-falta={filename}
      style={{
        aspectRatio: ratio,
        border: "1px solid var(--linea)",
        display: "grid",
        placeItems: "center",
        color: "var(--muted)",
        font: "500 0.78rem var(--font-ui)",
        background: "var(--bg-soft)",
        textAlign: "center",
        padding: "16px",
      }}
    >
      Falta {filename}
    </div>
  );
}

function ImgWithFallback({ src, alt, ratio, filename, extraStyle }: { src: string; alt: string; ratio: string; filename: string; extraStyle?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <MediaFalta filename={filename} ratio={ratio} />;
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...extraStyle }}
      onError={() => setFailed(true)}
    />
  );
}

// ── #propiedades ──
type Ficha = {
  id: number;
  comuna: string;
  tipo: "Depto" | "Casa";
  dorm: string;
  titulo: string;
  datos: string;
  uf: number;
  clp: string;
  gc: string;
  ufStr: string;
  gcLabel: string;
  estado: "DISPONIBLE" | "RESERVADA";
};

const FICHAS: Ficha[] = [
  {
    id: 1,
    comuna: "Vitacura",
    tipo: "Depto",
    dorm: "1",
    titulo: "Depto 1D 38m² · Nueva Costanera",
    datos: "1D · 1B · 38m² útiles · piso 4",
    uf: 3850,
    ufStr: "UF 3.850",
    clp: "$150.843.000",
    gc: "$94.600",
    gcLabel: "Gastos comunes $94.600 (abr 2026)",
    estado: "DISPONIBLE",
  },
  {
    id: 2,
    comuna: "Vitacura",
    tipo: "Depto",
    dorm: "2",
    titulo: "Depto 2D 68m² · Alonso de Córdova",
    datos: "2D · 2B · 68m² útiles · piso 7",
    uf: 5600,
    ufStr: "UF 5.600",
    clp: "$219.408.000",
    gc: "$142.800",
    gcLabel: "Gastos comunes $142.800 (abr 2026)",
    estado: "DISPONIBLE",
  },
  {
    id: 3,
    comuna: "Las Condes",
    tipo: "Depto",
    dorm: "3",
    titulo: "Depto 3D 94m² · Rosario Norte",
    datos: "3D · 2B · 94m² útiles · piso 12",
    uf: 7900,
    ufStr: "UF 7.900",
    clp: "$309.522.000",
    gc: "$198.400",
    gcLabel: "Gastos comunes $198.400 (abr 2026)",
    estado: "DISPONIBLE",
  },
  {
    id: 4,
    comuna: "Lo Barnechea",
    tipo: "Casa",
    dorm: "4",
    titulo: "Casa 4D 185m² · La Dehesa",
    datos: "4D · 3B · 185m² útiles · 2 pisos",
    uf: 13500,
    ufStr: "UF 13.500",
    clp: "$528.930.000",
    gc: "",
    gcLabel: "",
    estado: "DISPONIBLE",
  },
  {
    id: 5,
    comuna: "Vitacura",
    tipo: "Depto",
    dorm: "2",
    titulo: "Depto 2D 62m² · Escandinavia",
    datos: "2D · 2B · 62m² útiles · piso 5",
    uf: 5150,
    ufStr: "UF 5.150",
    clp: "$201.777.000",
    gc: "$128.900",
    gcLabel: "Gastos comunes $128.900 (abr 2026)",
    estado: "DISPONIBLE",
  },
  {
    id: 6,
    comuna: "La Reina",
    tipo: "Depto",
    dorm: "3",
    titulo: "Depto 3D 82m² · Príncipe de Gales",
    datos: "3D · 2B · 82m² útiles · piso 3",
    uf: 6800,
    ufStr: "UF 6.800",
    clp: "$266.424.000",
    gc: "$167.300",
    gcLabel: "Gastos comunes $167.300 (abr 2026)",
    estado: "RESERVADA",
  },
];

function Propiedades() {
  const base = import.meta.env.BASE_URL ?? "/";
  const [comuna, setComuna] = useState("Todas");
  const [tipo, setTipo] = useState("Todos");
  const [dorm, setDorm] = useState("Todos");
  const [precio, setPrecio] = useState("Todos");
  const [mapFailed, setMapFailed] = useState(false);

  const filtered = FICHAS.filter((f) => {
    if (comuna !== "Todas" && f.comuna !== comuna) return false;
    if (tipo !== "Todos" && f.tipo !== tipo) return false;
    if (dorm !== "Todos" && f.dorm !== dorm) return false;
    if (precio !== "Todos") {
      const limit = Number(precio);
      if (f.uf > limit) return false;
    }
    return true;
  });

  return (
    <section id="propiedades" aria-label="Propiedades stock real">
      <div className="section__inner">
        <div className="prop__header">
          <p className="kicker" style={{ color: "var(--accent-2)" }}>STOCK REAL · 9 PROPIEDADES HOY</p>
          <h2 className="h2">Filtra por comuna y ve el precio con gastos</h2>
          <p className="prop__intro">Todo lo publicado está disponible para visita nocturna. Si se reserva, sale del listado en el día. Precio en UF + CLP del día.</p>
        </div>

        <div className="prop__filtros">
          <div className="prop__filtros-selects">
            <label className="sr-only" htmlFor="f-cumbres-comuna">Comuna</label>
            <select id="f-cumbres-comuna" value={comuna} onChange={(e) => setComuna(e.target.value)} aria-label="Filtrar por comuna">
              <option value="Todas">Comuna · Todas</option>
              <option value="Vitacura">Vitacura</option>
              <option value="Las Condes">Las Condes</option>
              <option value="Lo Barnechea">Lo Barnechea</option>
              <option value="La Reina">La Reina</option>
            </select>

            <label className="sr-only" htmlFor="f-cumbres-tipo">Tipo</label>
            <select id="f-cumbres-tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} aria-label="Filtrar por tipo">
              <option value="Todos">Tipo · Todos</option>
              <option value="Depto">Depto</option>
              <option value="Casa">Casa</option>
            </select>

            <label className="sr-only" htmlFor="f-cumbres-dorm">Dormitorios</label>
            <select id="f-cumbres-dorm" value={dorm} onChange={(e) => setDorm(e.target.value)} aria-label="Filtrar por dormitorios">
              <option value="Todos">Dorm · Todos</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <label className="sr-only" htmlFor="f-cumbres-precio">Precio</label>
            <select id="f-cumbres-precio" value={precio} onChange={(e) => setPrecio(e.target.value)} aria-label="Filtrar por precio">
              <option value="Todos">Precio · Todos</option>
              <option value="6000">Hasta UF 6.000</option>
              <option value="9000">Hasta UF 9.000</option>
              <option value="14000">Hasta UF 14.000</option>
            </select>
          </div>
          <span className="prop__contador">9 propiedades · 3 con visita hoy</span>
        </div>

        <div className="prop__grid">
          <div className="prop__mapa-col">
            <div className="prop__mapa-frame">
              {mapFailed ? (
                <MediaFalta filename="cumbres-mapa-4x3.png" ratio="4/3" />
              ) : (
                <img
                  src={`${base}media/cumbres-mapa-4x3.png`}
                  alt="Plano de barrio Vitacura Alonso de Córdova, calles interiores"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={() => { console.warn("[CUMBRES] falta cumbres-mapa-4x3.png"); setMapFailed(true); }}
                />
              )}
            </div>
            <p className="media__caption">Plano de barrio · calles interiores · Vitacura — sin pins genéricos</p>

            <aside className="prop__aside">
              <p className="prop__aside-title">¿Buscas arriendo nocturno?</p>
              <p className="prop__aside-text">Arriendo 2D desde UF 24/mes · GC incluido en ficha. Comisión 50% del mes por lado.</p>
              <a href="tel:+56973842051" className="prop__aside-tel">+56 9 7384 2051</a>
            </aside>
          </div>

          <div className="prop__grilla-col">
            <div className="prop__cards">
              {filtered.length === 0 ? (
                <p style={{ font: "400 0.9rem var(--font-ui)", color: "var(--muted)", padding: "24px", border: "1px solid var(--linea)", background: "var(--bg-soft)" }}>
                  Sin resultados con esos filtros. Prueba ampliar comuna o precio.
                </p>
              ) : (
                filtered.map((f) => (
                  <article key={f.id} className="prop__card">
                    <div className="prop__card-top">
                      <span className="prop__card-comuna">{f.comuna}</span>
                      <span className="prop__card-sep">·</span>
                      <span className="prop__card-tipo">{f.tipo}</span>
                      <span className="prop__card-estado">
                        <span className={`dot-estado ${f.estado === "RESERVADA" ? "dot-reservada" : "dot-disponible"}`} aria-hidden="true" />
                        {f.estado}
                      </span>
                    </div>
                    <h3 className="prop__card-titulo">{f.titulo}</h3>
                    <p className="prop__card-datos">{f.datos}</p>
                    <div className="prop__card-precio-wrap">
                      <span className="prop__card-desde">desde</span>
                      <p className="prop__card-precio">{f.ufStr} · {f.clp}</p>
                      {f.gc ? <p className="prop__card-gc">{f.gcLabel}</p> : <p className="prop__card-gc" style={{ color: "var(--muted)" }}>Sin gastos comunes</p>}
                    </div>
                    <div className="prop__card-ctas">
                      <a href="#ficha-cumbres" className="prop__card-link">Ver ficha →</a>
                      <a href="#visita-privada" className="prop__card-ghost">Visita hoy</a>
                    </div>
                  </article>
                ))
              )}
            </div>
            <p className="prop__nota">
              Valores en UF al día; CLP referencial UF 39.180. Gastos comunes del último mes informado por copropiedad. Valores referenciales; se confirman en ficha y visita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #ficha-cumbres ──
function FichaCumbres() {
  const base = import.meta.env.BASE_URL ?? "/";
  return (
    <section id="ficha-cumbres" aria-label="Ficha tipo nocturna">
      <div className="section__inner">
        <div className="ficha__grid">
          <div className="ficha__media-col">
            <div className="ficha__main-img">
              <ImgWithFallback
                src={`${base}media/cumbres-interior-16x9.png`}
                alt="Interior vacío iluminado de noche en Alonso de Córdova, living con ventanal cordillera"
                ratio="16/9"
                filename="cumbres-interior-16x9.png"
              />
            </div>
            <p className="media__caption">Interior vacío · luz noche · Alonso de Córdova</p>
            <div className="ficha__thumbs">
              <div className="ficha__thumb">
                <ImgWithFallback src={`${base}media/cumbres-tile-01-1x1.png`} alt="Detalle interior piso madera y ventanal nocturno" ratio="1/1" filename="cumbres-tile-01-1x1.png" />
              </div>
              <div className="ficha__thumb">
                <ImgWithFallback src={`${base}media/cumbres-tile-02-1x1.png`} alt="Macro piedra negra y planimetría con huincha" ratio="1/1" filename="cumbres-tile-02-1x1.png" />
              </div>
            </div>
          </div>

          <div className="ficha__content">
            <p className="kicker">FICHA EJEMPLO · 2D ALONSO DE CÓRDOVA</p>
            <h2 className="h2 h2--sm">Depto 2D que se arrienda solo, pero lo vendemos con números de noche</h2>
            <p className="ficha__intro">No es el más barato de Vitacura. Es el que tiene gastos al día, sin multas y con visita sin apuro a las 20:30.</p>

            <div className="ficha__tabla" role="table" aria-label="Ficha técnica">
              <div className="ficha__fila ficha__fila--header" role="row">
                <span role="columnheader">Campo</span><span role="columnheader">Valor</span>
              </div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Superficie útil</span><span className="ficha__valor">68m² + 8m² balcón mirador</span></div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Dormitorios / baños</span><span className="ficha__valor">2D · 2B · 1E (bodega)</span></div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Orientación / piso</span><span className="ficha__valor">Nor-oriente · piso 7 de 9 · vista cordillera</span></div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Antigüedad</span><span className="ficha__valor">2016 · sin ampliaciones · termopanel</span></div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Gastos comunes</span><span className="ficha__valor">$142.800 (abr 2026, boleta a la vista en visita)</span></div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Contribuciones</span><span className="ficha__valor">$52.400 trimestral aprox.</span></div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Precio venta</span><span className="ficha__valor">UF 5.600 · $219.408.000</span></div>
              <div className="ficha__fila" role="row"><span className="ficha__campo">Precio arriendo alternativo</span><span className="ficha__valor">UF 24/mes · $940.320/mes (si no se vende en 45 días)</span></div>
            </div>

            <div className="ficha__pildoras">
              <span className="pildora"><span className="dot-estado dot-disponible" aria-hidden="true" />Gastos al día ✔</span>
              <span className="pildora"><span className="dot-estado dot-disponible" aria-hidden="true" />Sin multas copropiedad</span>
              <span className="pildora"><span className="dot-estado dot-disponible" aria-hidden="true" />Visita hoy 19:00 y 20:30 libre</span>
            </div>

            <div className="ficha__ctas">
              <a href="#visita-privada" className="btn-primary">Agendar visita para este depto</a>
              <a href="https://wa.me/56973842051?text=Hola%20CUMBRES,%20quiero%20la%20ficha%20PDF%20del%202D%20Alonso%20de%20C%C3%B3rdova." target="_blank" rel="noopener noreferrer" className="btn-ghost">Pedir ficha PDF por WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #barrio-noche ──
function BarrioNoche() {
  const base = import.meta.env.BASE_URL ?? "/";
  return (
    <section id="barrio-noche" aria-label="Barrio de noche">
      <div className="section__inner">
        <div className="barrio__grid">
          <div className="barrio__img-col">
            <div className="barrio__img-frame">
              <ImgWithFallback src={`${base}media/cumbres-barrio-3x4.png`} alt="Fachada vidriada de noche en Vitacura reflejando calle vacía" ratio="3/4" filename="cumbres-barrio-3x4.png" />
            </div>
          </div>
          <div className="barrio__content">
            <p className="kicker" style={{ color: "var(--accent-2)" }}>BARRIO · VITACURA — ALONSO DE CÓRDOVA</p>
            <h2 className="h2 h2--sm">Vivir a 3 cuadras del parque sin pagar ruido de avenida</h2>
            <p className="barrio__intro">Pasaje interior vidriado, no avenida. Parque Bicentenario a 4 min a pie, colegio a 5, metro Manquehue a 9. Lo medimos caminando de noche.</p>

            <div className="barrio__panels">
              <div className="barrio__panel">
                <h3 className="barrio__panel-title">A pie (noche)</h3>
                <ul className="barrio__list">
                  <li>Parque Bicentenario 320m · 4 min</li>
                  <li>Colegio Saint George 450m</li>
                  <li>Jumbo Costanera 600m</li>
                  <li>Café de barrio 80m (abierto hasta 22:00)</li>
                </ul>
              </div>
              <div className="barrio__panel">
                <h3 className="barrio__panel-title">En micro/auto</h3>
                <ul className="barrio__list">
                  <li>Parada Alonso / Vitacura 90m</li>
                  <li>Salida Costanera Norte 1.0km</li>
                  <li>Estacionamiento visita: 1 por depto + visita en calle sin parquímetro noche</li>
                  <li>Bicicletero techado con luz</li>
                </ul>
              </div>
              <div className="barrio__panel">
                <h3 className="barrio__panel-title">Ruido y luz nocturna</h3>
                <ul className="barrio__list">
                  <li>Nor-oriente: sol mañana sin poniente directo</li>
                  <li>Pasaje interior: bajo tránsito 19h–22h</li>
                  <li>Vidrio DVH 2016: 32dB menos</li>
                  <li>Vista cordillera apagada + luces ciudad como brasa</li>
                </ul>
              </div>
            </div>

            <p className="cita-honesta">No es para quien busca vista despejada total. Es para quien quiere caminar a todo incluso de noche.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #en-verde ──
function EnVerde() {
  const base = import.meta.env.BASE_URL ?? "/";
  const [proofFailed, setProofFailed] = useState(false);
  const [hasProof, setHasProof] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(`${base}media/cumbres-proof-16x9.png`, { method: "HEAD" })
      .then((r) => setHasProof(r.ok))
      .catch(() => setHasProof(false));
  }, [base]);

  return (
    <section id="en-verde" aria-label="En verde vs entrega inmediata">
      <div className="section__inner">
        <div className="enverde__grid">
          <div className="enverde__main">
            <p className="kicker">MODALIDAD · VERDE O INMEDIATA</p>
            <h2 className="h2 h2--sm">En verde con precio de hoy. O inmediata para visitar mañana.</h2>
            <p className="enverde__intro">No vendemos humo de plusvalía. Precio cerrado en UF, entrega con fecha y multa por atraso. Si no te sirve esperar, hay stock inmediato.</p>

            {hasProof && !proofFailed && (
              <div className="enverde__proof">
                <img
                  src={`${base}media/cumbres-proof-16x9.png`}
                  alt="Obra en verde de noche con casco sobre plano iluminado"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={() => { console.warn("[CUMBRES] falta cumbres-proof-16x9.png"); setProofFailed(true); }}
                />
              </div>
            )}

            <div className="enverde__table-wrap">
              <table className="enverde__table" aria-label="Comparativa en verde vs inmediata">
                <thead>
                  <tr>
                    <th></th>
                    <th>EN VERDE</th>
                    <th>ENTREGA INMEDIATA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Plazo entrega</td><td>14 meses (abr 2027) · obra 68% avance</td><td>Inmediata · escritura en 30 días</td></tr>
                  <tr><td>Precio</td><td>UF 5.150 · $201.777.000 (precio verde)</td><td>UF 5.600 · $219.408.000</td></tr>
                  <tr><td>Pie</td><td>15% pie en 12 cuotas sin interés</td><td>10% pie contra promesa</td></tr>
                  <tr><td>Gastos comunes estimados</td><td>$138.000 (estimado 2027)</td><td>$142.800 reales (abr 2026)</td></tr>
                  <tr><td>Visita</td><td>Piloto + obra con casco (sábados 10:00)</td><td>Depto real hoy 19:00/20:30</td></tr>
                  <tr><td>Garantía</td><td>Multa 0,5 UF/día atraso · postventa 1 año</td><td>Sin multa · postventa 5 años estructura</td></tr>
                </tbody>
              </table>
            </div>

            <p className="cita-honesta cita-honesta--verde">No prometemos plusvalía. En verde es más barato porque esperas; inmediata es más cara porque entras mañana. Ambos con precio en UF, sin reajuste.</p>
          </div>

          <aside className="enverde__aside" aria-label="Reserva de noche">
            <h3 className="enverde__aside-title">¿Y si se reserva de noche?</h3>
            <p className="enverde__aside-text">Reserva con $500.000 contra promesa en 10 días. Si no firma, se devuelve íntegra. Nadie queda amarrado, ni de día ni de noche.</p>
            <ul className="enverde__checks">
              <li><span aria-hidden="true">✔</span> Promesa revisada por abogado</li>
              <li><span aria-hidden="true">✔</span> Certificados al día</li>
              <li><span aria-hidden="true">✔</span> Sin multa por retracto pre-promesa</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ── #visita-privada ──
function VisitaPrivada() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [propiedad, setPropiedad] = useState("");
  const [modalidad, setModalidad] = useState("venta");
  const [fecha, setFecha] = useState("Hoy");
  const [hora, setHora] = useState("Noche 19–21");
  const [mensaje, setMensaje] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string,string> = {};
    if (nombre.trim().length < 2) e.nombre = "Nombre mínimo 2 caracteres";
    const digits = tel.replace(/\D/g, "");
    if (digits.length < 9) e.tel = "Tel debe tener 9 dígitos (+56)";
    else if (digits.length > 12) e.tel = "Tel demasiado largo";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email inválido";
    if (!propiedad) e.propiedad = "Elige una propiedad";
    if (!acepto) e.acepto = "Debes aceptar el contacto por WhatsApp";
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
      const data = { nombre, tel, email, propiedad, modalidad, fecha, hora, mensaje, at: new Date().toISOString() };
      try { localStorage.setItem("cumbres_visita", JSON.stringify(data)); } catch {}
      const texto = `Hola CUMBRES, quiero visitar ${propiedad} el ${fecha} ${hora}. Soy ${nombre}.`;
      const url = `https://wa.me/56973842051?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
    }, 800);
  };

  return (
    <section id="visita-privada" aria-label="Visita privada agenda nocturna">
      <div className="section__inner">
        <div className="visita__grid">
          <div className="visita__left">
            <p className="kicker" style={{ color: "var(--accent-2)" }}>VISITA PRIVADA · HOY O MAÑANA · HASTA 21:00</p>
            <h2 className="h2">Elige hora y te confirmamos por WhatsApp en minutos</h2>
            <p className="visita__intro">Lunes a sábado 10:00–21:00. Domingo solo con reserva previa. Si la hora ya se tomó, te ofrecemos la siguiente libre sin hacerte esperar en la puerta del edificio de noche.</p>

            <a href="tel:+56973842051" className="visita__tel">+56 9 7384 2051</a>
            <p className="visita__tel-sub">WhatsApp directo con corredora, no call center. Contesta de noche.</p>

            <p className="visita__horarios"><span className="dot-verde" aria-hidden="true" /> Hoy quedan 2 visitas: 19:00 y 20:30</p>

            <div className="visita__prueba">
              <p className="visita__prueba-title">Últimas 4 operaciones (conservador, Vitacura/Las Condes)</p>
              <ul className="visita__prueba-list">
                <li><span>Depto 2D Alonso · UF 5.450 · 41 días</span></li>
                <li><span>Casa La Dehesa 4D · UF 13.200 · 58 días</span></li>
                <li><span>Depto 1D Costanera · UF 3.780 · 24 días</span></li>
                <li><span>Depto 3D Rosario · UF 7.650 · 63 días</span></li>
              </ul>
            </div>

            <p className="cita-honesta">Si llegas de noche y el depto no es como en fotos, te decimos al tiro y no te hacemos perder la tarde.</p>
          </div>

          <div className="visita__form-col" ref={useRef<HTMLDivElement>(null)}>
            <form className="visita__form" onSubmit={handleSubmit} noValidate aria-label="Formulario visita privada">
              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="f-cumbres-nombre">Nombre*</label>
                  <input id="f-cumbres-nombre" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Tu nombre" aria-invalid={!!errors.nombre} aria-describedby={errors.nombre?"err-cumbres-nombre":undefined} />
                  {errors.nombre && <span id="err-cumbres-nombre" className="form__error">{errors.nombre}</span>}
                </div>
                <div className="form__field">
                  <label htmlFor="f-cumbres-tel">Tel / WhatsApp*</label>
                  <input id="f-cumbres-tel" type="tel" value={tel} onChange={(e)=>setTel(e.target.value)} placeholder="+56 9 1234 5678" aria-invalid={!!errors.tel} aria-describedby={errors.tel?"err-cumbres-tel":undefined} />
                  {errors.tel && <span id="err-cumbres-tel" className="form__error">{errors.tel}</span>}
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="f-cumbres-email">Email</label>
                <input id="f-cumbres-email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="tucorreo@email.cl (opcional)" aria-invalid={!!errors.email} aria-describedby={errors.email?"err-cumbres-email":undefined} />
                {errors.email && <span id="err-cumbres-email" className="form__error">{errors.email}</span>}
              </div>

              <div className="form__field">
                <label htmlFor="f-cumbres-prop">Propiedad que te interesa*</label>
                <select id="f-cumbres-prop" value={propiedad} onChange={(e)=>setPropiedad(e.target.value)} aria-invalid={!!errors.propiedad} aria-describedby={errors.propiedad?"err-cumbres-prop":undefined}>
                  <option value="">Selecciona una propiedad</option>
                  <option value="Depto 1D 38m² · Nueva Costanera — UF 3.850">Depto 1D 38m² · Nueva Costanera — UF 3.850</option>
                  <option value="Depto 2D 68m² · Alonso de Córdova — UF 5.600">Depto 2D 68m² · Alonso de Córdova — UF 5.600</option>
                  <option value="Depto 3D 94m² · Rosario Norte — UF 7.900">Depto 3D 94m² · Rosario Norte — UF 7.900</option>
                  <option value="Casa 4D 185m² · La Dehesa — UF 13.500">Casa 4D 185m² · La Dehesa — UF 13.500</option>
                  <option value="Depto 2D 62m² · Escandinavia — UF 5.150">Depto 2D 62m² · Escandinavia — UF 5.150</option>
                  <option value="Depto 3D 82m² · Príncipe de Gales — UF 6.800">Depto 3D 82m² · Príncipe de Gales — UF 6.800</option>
                  <option value="Otra / aún no elijo">Otra / aún no elijo</option>
                </select>
                {errors.propiedad && <span id="err-cumbres-prop" className="form__error">{errors.propiedad}</span>}
              </div>

              <fieldset className="form__fieldset">
                <legend>¿Venta o arriendo?</legend>
                <label className="radio"><input type="radio" name="modalidad" value="venta" checked={modalidad==="venta"} onChange={()=>setModalidad("venta")} /> Venta</label>
                <label className="radio"><input type="radio" name="modalidad" value="arriendo" checked={modalidad==="arriendo"} onChange={()=>setModalidad("arriendo")} /> Arriendo</label>
              </fieldset>

              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="f-cumbres-fecha">Fecha preferida</label>
                  <select id="f-cumbres-fecha" value={fecha} onChange={(e)=>setFecha(e.target.value)}>
                    <option value="Hoy">Hoy</option>
                    <option value="Mañana">Mañana</option>
                    <option value="Esta semana">Esta semana</option>
                  </select>
                </div>
                <div className="form__field">
                  <label htmlFor="f-cumbres-hora">Hora</label>
                  <select id="f-cumbres-hora" value={hora} onChange={(e)=>setHora(e.target.value)}>
                    <option value="Tarde 15–18">Tarde 15–18</option>
                    <option value="Noche 19–21">Noche 19–21</option>
                  </select>
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="f-cumbres-mensaje">Mensaje</label>
                <textarea id="f-cumbres-mensaje" rows={3} value={mensaje} onChange={(e)=>setMensaje(e.target.value)} placeholder="Ej: quiero ver el 2D de Alonso, ¿tiene logia y vista cordillera?" />
              </div>

              <label className="form__check">
                <input type="checkbox" checked={acepto} onChange={(e)=>setAcepto(e.target.checked)} aria-invalid={!!errors.acepto} />
                <span>Acepto que me contacten por WhatsApp para coordinar la visita. No spam, solo esta propiedad.</span>
              </label>
              {errors.acepto && <span className="form__error">{errors.acepto}</span>}

              <button type="submit" className="btn-primary btn-full" disabled={loading}>
                {loading ? "Enviando…" : "Pedir visita privada por WhatsApp"}
              </button>
              <a href="tel:+56973842051" className="btn-ghost btn-full" style={{ justifyContent: "center" }}>Llamar ahora</a>

              {success && <p className="form__success">Te llega WhatsApp con hora confirmada y dirección exacta. Si no hay hora hoy, te proponemos mañana antes de las 10:00.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section__inner footer__inner">
        <div className="footer__left">
          <p className="footer__brand">CUMBRES · Vitacura · Alonso de Córdova 2700, oficina 52</p>
          <p className="footer__horario">Horario 10:00–21:00 Lun–Sáb · Dom con reserva</p>
        </div>
        <div className="footer__right">
          <nav className="footer__links" aria-label="Links footer">
            <a href="#propiedades">Propiedades</a>
            <a href="#en-verde">En verde</a>
            <a href="#visita-privada">Visita privada</a>
          </nav>
          <p className="footer__copy">© 2026 CUMBRES</p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("propiedades");
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      setVisible(window.scrollY > 400 && top < window.innerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;
  return (
    <div className="sticky-mobile" role="region" aria-label="Acciones rápidas">
      <a href="#propiedades" className="sticky-mobile__link">Ver stock</a>
      <a href="#visita-privada" className="sticky-mobile__cta">Agendar visita privada</a>
      <button type="button" className="sticky-mobile__close" aria-label="Cerrar barra" onClick={() => setDismissed(true)}>×</button>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Propiedades />
        <FichaCumbres />
        <BarrioNoche />
        <EnVerde />
        <VisitaPrivada />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
