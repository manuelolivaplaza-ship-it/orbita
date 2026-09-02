import { useEffect, useState, useRef } from "react";

function useHeroMedia() {
  const [exists16x9, setExists16x9] = useState<boolean | null>(null);
  const [exists9x16, setExists9x16] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const base = import.meta.env.BASE_URL || "/";
    const b = base.endsWith("/") ? base : base + "/";

    async function check(path: string): Promise<boolean> {
      try {
        const res = await fetch(path, { method: "HEAD" });
        if (res.ok) return true;
        const r2 = await fetch(path, { method: "GET" });
        return r2.ok;
      } catch {
        return false;
      }
    }

    const p16 = `${b}media/alameda-hero-16x9.png`;
    const p9 = `${b}media/alameda-hero-9x16.png`;
    const p16alt = `${b}public/media/alameda-hero-16x9.png`;

    Promise.all([check(p16).then((ok) => (ok ? true : check(p16alt))), check(p9)]).then(
      ([ok16, ok9]) => {
        if (cancelled) return;
        setExists16x9(ok16);
        setExists9x16(ok9);
        if (!ok16) console.warn("Falta: alameda-hero-16x9.png en public/media/");
        if (!ok9) console.warn("Falta: alameda-hero-9x16.png en public/media/ (opcional móvil)");
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return { exists16x9, exists9x16 };
}

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="grid">
        <a href="#portada" className="header-logo" aria-label="Alameda inicio">
          ALAMEDA
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#propiedades">Propiedades</a>
          <a href="#ficha-alameda">Ficha</a>
          <a href="#barrio-alameda">Barrio</a>
          <a href="#honorarios">Honorarios</a>
        </nav>

        {/* desktop tel */}
        <a className="header-phone" href="tel:+56984210765" aria-label="Teléfono +56 9 8421 0765">
          +56 9 8421 0765
        </a>

        {/* mobile icon tel */}
        <a className="header-phone-icon" href="tel:+56984210765" aria-label="Llamar +56 9 8421 0765">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.02.37 2.02.73 2.98a2 2 0 0 1-.57 2.11L8.09 9.91a16 16 0 0 0 6 6l1.1-1.18a2 2 0 0 1 2.11-.57c.96.36 1.96.61 2.98.73A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        <div className="header-cta">
          <a className="btn-primary" href="#visita">
            Agendar visita
          </a>
        </div>

        <button className="header-hamburger" aria-label="Abrir menú" type="button">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function HeroMedia() {
  const { exists16x9, exists9x16 } = useHeroMedia();
  const base = import.meta.env.BASE_URL || "/";
  const b = base.endsWith("/") ? base : base + "/";

  if (exists16x9 === null) {
    return (
      <div
        className="media-falta"
        data-falta="alameda-hero-16x9.png"
        style={{
          aspectRatio: "16/9",
          border: "1px solid var(--linea)",
          display: "grid",
          placeItems: "center",
          color: "var(--muted)",
          font: "500 0.85rem Outfit",
        }}
      >
        Cargando…
      </div>
    );
  }

  if (exists16x9) {
    const src16 = `${b}media/alameda-hero-16x9.png`;
    const src9 = `${b}media/alameda-hero-9x16.png`;
    if (exists9x16) {
      return (
        <picture>
          <source media="(max-width: 640px)" srcSet={src9} />
          <img
            className="hero-media"
            src={src16}
            alt="Mesa de trabajo con plano 1:100"
            loading="eager"
          />
        </picture>
      );
    }
    return (
      <img
        className="hero-media"
        src={src16}
        alt="Mesa de trabajo con plano 1:100"
        loading="eager"
        onError={() => console.warn("Falta: alameda-hero-16x9.png")}
      />
    );
  }

  return (
    <div
      className="media-falta"
      data-falta="alameda-hero-16x9.png"
      style={{
        aspectRatio: "16/9",
        border: "1px solid var(--linea)",
        display: "grid",
        placeItems: "center",
        color: "var(--muted)",
        font: "500 0.85rem Outfit",
      }}
    >
      Falta: alameda-hero-16x9.png
    </div>
  );
}

function Hero() {
  return (
    <section id="portada" aria-labelledby="hero-h1">
      <div className="hero-grid">
        <div className="hero-left">
          <p className="kicker">CORREDORA · ÑUÑOA — DESDE 2016</p>
          <h1 id="hero-h1">Corredora seria de Ñuñoa publica todo: UF, gastos y visita sin humo.</h1>
          <p className="hero-subhead">
            Ficha completa antes de preguntar. Metros útiles reales, gastos comunes del último mes y
            disponibilidad para hoy. Si no está disponible, no está publicada.
          </p>

          <div className="hero-ctas">
            <a className="btn-primary" href="#propiedades">
              Ver propiedades con ficha real
            </a>
            <a className="btn-ghost" href="#visita">
              Agendar visita hoy
            </a>
          </div>

          <div className="banda" aria-label="Información honesta">
            <span className="banda-item">
              <span className="banda-dot" aria-hidden="true" />
              UF del día 39.180
            </span>
            <span className="banda-item">
              <span className="banda-dot" aria-hidden="true" />
              Gastos comunes reales
            </span>
            <span className="banda-item">
              <span className="banda-dot" aria-hidden="true" />
              Visita en 24h o te avisamos
            </span>
          </div>

          <p className="micro-copy">
            No pedimos reserva para mostrar. Comisión 1,9% + IVA por lado en venta. Arriendo 50% del mes
            por lado. Tasación $85.000 se abona si vendes con nosotros.
          </p>
        </div>

        <div className="hero-right">
          <HeroMedia />
          <p className="hero-caption">Mesa de trabajo · plano 1:100 · Ñuñoa</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */
function SafeImg({
  file,
  alt,
  ratio,
  className,
}: {
  file: string;
  alt: string;
  ratio: string;
  className?: string;
}) {
  const [error, setError] = useState(false);
  const base = import.meta.env.BASE_URL || "/";
  const b = base.endsWith("/") ? base : base + "/";
  const src = `${b}media/${file}`;
  if (error) {
    return (
      <div
        className="media-falta"
        data-falta={file}
        style={{
          aspectRatio: ratio,
          border: "1px solid var(--linea)",
          display: "grid",
          placeItems: "center",
          color: "var(--muted)",
          font: "500 0.82rem Outfit",
          background: "#EDE7DA",
          width: "100%",
        }}
      >
        Falta: {file}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      style={{ objectFit: "cover", width: "100%", display: "block", aspectRatio: ratio } as React.CSSProperties}
      onError={() => {
        console.warn(`Falta: ${file} en public/media/`);
        setError(true);
      }}
    />
  );
}

/* ---------- #propiedades ---------- */
type Prop = {
  id: string;
  comuna: string;
  tipo: string;
  dorm: number;
  uf: number;
  clp: string;
  gc: string;
  titulo: string;
  datos: string;
  estado: "DISPONIBLE" | "RESERVADA";
  barrio: string;
};

const PROPIEDADES: Prop[] = [
  {
    id: "01",
    comuna: "Ñuñoa",
    tipo: "Depto",
    dorm: 1,
    uf: 3250,
    clp: "$127.335.000",
    gc: "$82.300",
    titulo: "Depto 1D 34m² · Irarrázaval",
    datos: "1D · 1B · 34m² útiles · piso 3",
    estado: "DISPONIBLE",
    barrio: "Irarrázaval",
  },
  {
    id: "02",
    comuna: "Ñuñoa",
    tipo: "Depto",
    dorm: 2,
    uf: 4900,
    clp: "$192.058.000",
    gc: "$118.420",
    titulo: "Depto 2D 62m² · Seminario",
    datos: "2D · 1B · 62m² útiles · piso 4",
    estado: "DISPONIBLE",
    barrio: "Seminario",
  },
  {
    id: "03",
    comuna: "Providencia",
    tipo: "Depto",
    dorm: 2,
    uf: 5400,
    clp: "$211.572.000",
    gc: "$135.600",
    titulo: "Depto 2D 58m² · Manuel Montt",
    datos: "2D · 1B · 58m² útiles · piso 5",
    estado: "DISPONIBLE",
    barrio: "Manuel Montt",
  },
  {
    id: "04",
    comuna: "La Reina",
    tipo: "Depto",
    dorm: 3,
    uf: 7400,
    clp: "$290.052.000",
    gc: "$182.400",
    titulo: "Depto 3D 89m² · Larraín",
    datos: "3D · 2B · 89m² útiles · piso 2",
    estado: "DISPONIBLE",
    barrio: "Larraín",
  },
  {
    id: "05",
    comuna: "Peñalolén",
    tipo: "Casa",
    dorm: 3,
    uf: 9800,
    clp: "$383.964.000",
    gc: "—",
    titulo: "Casa 3D 138m² · Las Pircas",
    datos: "3D · 2B · 138m² útiles · piso 1",
    estado: "DISPONIBLE",
    barrio: "Las Pircas",
  },
  {
    id: "06",
    comuna: "Ñuñoa",
    tipo: "Depto",
    dorm: 3,
    uf: 6200,
    clp: "$243.036.000",
    gc: "$148.900",
    titulo: "Depto 3D 76m² · Echeñique",
    datos: "3D · 2B · 76m² útiles · piso 6",
    estado: "DISPONIBLE",
    barrio: "Echeñique",
  },
];

function PropiedadesSection() {
  const [comuna, setComuna] = useState("Todas");
  const [tipo, setTipo] = useState("Todos");
  const [dorm, setDorm] = useState("Todos");
  const [precio, setPrecio] = useState("Todos");

  const filtered = PROPIEDADES.filter((p) => {
    if (comuna !== "Todas" && p.comuna !== comuna) return false;
    if (tipo !== "Todos" && p.tipo !== tipo) return false;
    if (dorm !== "Todos" && String(p.dorm) !== dorm) return false;
    if (precio !== "Todos") {
      const max = parseInt(precio, 10);
      if (p.uf > max) return false;
    }
    return true;
  });

  return (
    <section id="propiedades" aria-labelledby="prop-h2">
      <div className="section-inner">
        <div className="section-header">
          <p className="kicker" style={{ color: "var(--accent-2)" }}>
            STOCK REAL · 11 PROPIEDADES HOY
          </p>
          <h2 id="prop-h2">Filtra por comuna y ve el precio con gastos</h2>
          <p className="section-intro">
            Todo lo publicado está disponible para visita. Si se reserva, sale del listado en el día.
            Precio en UF + CLP del día.
          </p>
        </div>

        <div className="filtros-bar" role="toolbar" aria-label="Filtros de propiedades">
          <select
            aria-label="Filtrar por comuna"
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
            className="filtro-select"
          >
            <option value="Todas">Comuna: Todas</option>
            <option value="Ñuñoa">Ñuñoa</option>
            <option value="Providencia">Providencia</option>
            <option value="La Reina">La Reina</option>
            <option value="Peñalolén">Peñalolén</option>
          </select>
          <select
            aria-label="Filtrar por tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="filtro-select"
          >
            <option value="Todos">Tipo: Todos</option>
            <option value="Depto">Depto</option>
            <option value="Casa">Casa</option>
          </select>
          <select
            aria-label="Filtrar por dormitorios"
            value={dorm}
            onChange={(e) => setDorm(e.target.value)}
            className="filtro-select"
          >
            <option value="Todos">Dorm: Todos</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <select
            aria-label="Filtrar por precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="filtro-select"
          >
            <option value="Todos">Precio: Todos</option>
            <option value="5000">Hasta UF 5.000</option>
            <option value="8000">Hasta UF 8.000</option>
            <option value="12000">Hasta UF 12.000</option>
          </select>
          <span className="filtros-contador" aria-live="polite">
            {filtered.length} propiedades · 4 con visita hoy
          </span>
        </div>

        <div className="prop-layout">
          <div className="prop-mapa-col">
            <SafeImg file="alameda-mapa-4x3.png" alt="Plano de barrio calles interiores" ratio="4/3" className="prop-mapa-img" />
            <p className="media-caption">Plano de barrio · calles interiores · sin pins genéricos</p>
            <div className="mapa-pins" aria-hidden="true">
              {PROPIEDADES.map((p) => (
                <span key={p.id} className="pin">
                  {p.id}
                </span>
              ))}
            </div>
          </div>

          <div className="prop-grilla-col">
            <div className="prop-grilla">
              {filtered.map((p, idx) => (
                <article
                  key={p.id}
                  className="prop-ficha"
                  style={{ animationDelay: `${idx * 40}ms` } as React.CSSProperties}
                >
                  <div className="ficha-top">
                    <span className="ficha-comuna">{p.comuna}</span>
                    <span className="ficha-sep">·</span>
                    <span className="ficha-tipo">{p.tipo}</span>
                    <span className="ficha-estado">
                      <span
                        className="estado-dot"
                        style={{ background: p.estado === "DISPONIBLE" ? "var(--accent-2)" : "var(--accent)" }}
                      />
                      {p.estado}
                    </span>
                  </div>
                  <h3 className="ficha-titulo">{p.titulo}</h3>
                  <p className="ficha-datos">{p.datos}</p>
                  <div className="ficha-precio-block">
                    <span className="precio-desde">desde</span>
                    <span className="precio-uf">UF {p.uf.toLocaleString("es-CL")} · {p.clp}</span>
                    <span className="precio-gc">
                      {p.gc === "—" ? "Gastos comunes — (casa sin GC)" : `Gastos comunes ${p.gc} (abr 2026)`}
                    </span>
                  </div>
                  <div className="ficha-ctas">
                    <a href="#ficha-alameda" className="link-accent">
                      Ver ficha →
                    </a>
                    <a href="#visita" className="btn-visita-hoy">
                      Visita hoy
                    </a>
                  </div>
                </article>
              ))}
              {filtered.length === 0 && (
                <div
                  style={{
                    gridColumn: "1 / -1",
                    padding: "32px",
                    textAlign: "center",
                    color: "var(--muted)",
                    font: "400 0.92rem Outfit",
                    border: "1px solid var(--linea)",
                    background: "#FFFEFC",
                  }}
                >
                  Sin resultados con esos filtros. Prueba ampliar comuna o precio.
                </div>
              )}
            </div>

            <p className="prop-nota">
              Valores en UF al día; CLP referencial UF 39.180. Gastos comunes del último mes informado por
              copropiedad. Valores referenciales; se confirman en ficha y visita.
            </p>

            <aside className="prop-aside">
              <p className="aside-title">¿Buscas arriendo?</p>
              <p className="aside-text">
                Arriendo 2D desde UF 22/mes · GC incluido en ficha. Comisión 50% del mes por lado.
              </p>
              <a href="tel:+56984210765" className="aside-tel">
                +56 9 8421 0765
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function FichaAlamedaSection() {
  return (
    <section id="ficha-alameda" aria-labelledby="ficha-h2">
      <div className="section-inner">
        <div className="ficha-grid">
          <div className="ficha-media-col">
            <SafeImg file="alameda-interior-16x9.png" alt="Interior vacío luz mediodía Seminario" ratio="16/9" />
            <p className="media-caption">Interior vacío · luz mediodía · Seminario</p>
            <div className="thumbs-row">
              <SafeImg file="alameda-tile-01-1x1.png" alt="Detalle interior cortina lino y piso madera" ratio="1/1" />
              <SafeImg file="alameda-tile-02-1x1.png" alt="Detalle cocina encimera piedra" ratio="1/1" />
            </div>
          </div>

          <div className="ficha-data-col">
            <p className="kicker" style={{ color: "var(--accent)" }}>
              FICHA EJEMPLO · 2D SEMINARIO
            </p>
            <h2 id="ficha-h2">Depto 2D que se arrienda solo, pero lo vendemos con números</h2>
            <p className="section-intro">
              No es el más barato de Ñuñoa. Es el que tiene gastos al día, sin multas y con visita sin
              apuro.
            </p>

            <div className="tabla-ficha" role="table" aria-label="Ficha técnica">
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Superficie útil
                </span>
                <span className="tabla-valor" role="cell">
                  62m² + 6m² balcón
                </span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Dormitorios / baños
                </span>
                <span className="tabla-valor" role="cell">
                  2D · 1B · 1E (bodega pequeña)
                </span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Orientación / piso
                </span>
                <span className="tabla-valor" role="cell">
                  Sur-oriente · piso 4 de 7
                </span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Antigüedad
                </span>
                <span className="tabla-valor" role="cell">
                  2014 · sin ampliaciones
                </span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Gastos comunes
                </span>
                <span className="tabla-valor" role="cell">
                  $118.420 (abr 2026, boleta a la vista en visita)
                </span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Contribuciones
                </span>
                <span className="tabla-valor" role="cell">
                  $48.300 trimestral aprox.
                </span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Precio venta
                </span>
                <span className="tabla-valor" role="cell">
                  UF 4.900 · $192.058.000
                </span>
              </div>
              <div className="tabla-row" role="row">
                <span className="tabla-campo" role="cell">
                  Precio arriendo alternativo
                </span>
                <span className="tabla-valor" role="cell">
                  UF 22/mes · $861.960/mes (si no se vende en 45 días)
                </span>
              </div>
            </div>

            <div className="ficha-pills" aria-label="Estado de la propiedad">
              <span className="pill">
                <span className="pill-dot" /> Gastos al día ✔
              </span>
              <span className="pill">
                <span className="pill-dot" /> Sin multas copropiedad
              </span>
              <span className="pill">
                <span className="pill-dot" /> Visita hoy 17:00 y 18:30 libre
              </span>
            </div>

            <div className="ficha-ctas-below">
              <a href="#visita" className="btn-primary" style={{ padding: "14px 22px" }}>
                Agendar visita para este depto
              </a>
              <a
                href="https://wa.me/56984210765?text=Hola%20Alameda%2C%20quiero%20la%20ficha%20PDF%20del%202D%20Seminario"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Pedir ficha PDF por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BarrioSection() {
  return (
    <section id="barrio-alameda" aria-labelledby="barrio-h2">
      <div className="section-inner">
        <div className="barrio-grid">
          <div className="barrio-media-col">
            <SafeImg file="alameda-barrio-3x4.png" alt="Calle interior Ñuñoa fachadas bajas y árboles" ratio="3/4" />
          </div>
          <div className="barrio-data-col">
            <p className="kicker" style={{ color: "var(--accent-2)" }}>
              BARRIO · ÑUÑOA – SEMINARIO
            </p>
            <h2 id="barrio-h2">Vivir a 4 cuadras del metro sin pagar ruido de avenida</h2>
            <p className="section-intro">
              Barrio de pasaje interior, no de avenida. Supermercado a 2 cuadras, colegio a 3, metro
              Irarrázaval a 6 min a pie. Lo medimos caminando.
            </p>

            <div className="barrio-paneles">
              <div className="barrio-panel">
                <h3 className="panel-title">A pie</h3>
                <ul className="panel-list">
                  <li>Metro Irarrázaval 480m · 6 min</li>
                  <li>Jumbo Bilbao 320m</li>
                  <li>Colegio Seminario 280m</li>
                  <li>Plaza Ñuñoa 620m</li>
                </ul>
              </div>
              <div className="barrio-panel">
                <h3 className="panel-title">En micro/auto</h3>
                <ul className="panel-list">
                  <li>Parada Irarrázaval / Seminario 120m</li>
                  <li>Salida Autopista 1.2km</li>
                  <li>Estacionamiento visita: 1 por depto + visita en calle sin parquímetro</li>
                  <li>Bicicletero techado</li>
                </ul>
              </div>
              <div className="barrio-panel">
                <h3 className="panel-title">Ruido y luz</h3>
                <ul className="panel-list">
                  <li>Sur-oriente: luz mañana sin sol poniente directo</li>
                  <li>Pasaje interior: bajo tránsito 18h–20h</li>
                  <li>Sin pubs en la cuadra</li>
                  <li>Ventana termopanel 2014</li>
                </ul>
              </div>
            </div>

            <p className="cita-honesta">
              No es para quien busca vista despejada. Es para quien quiere caminar a todo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HonorariosSection() {
  return (
    <section id="honorarios" aria-labelledby="honorarios-h2">
      <div className="section-inner">
        <div className="honorarios-header">
          <p className="kicker" style={{ color: "var(--accent)" }}>
            HONORARIOS · TRANSPARENTES
          </p>
          <h2 id="honorarios-h2">Cobramos 1,9% + IVA por lado. Sin sorpresas.</h2>
          <p className="section-intro">
            La tasación cuesta $85.000 y se descuenta si vendes con nosotros. Si no vendes, te queda el
            informe con comparables reales de conservador.
          </p>
        </div>

        <div className="honorarios-layout">
          <div className="honorarios-tabla-col">
            <div className="honorarios-tabla-wrap">
              <table className="honorarios-tabla" aria-label="Tabla de honorarios">
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
                    <td className="tabla-label">Comisión</td>
                    <td>1,9% + IVA c/lado (3,8% + IVA total)</td>
                    <td>50% del mes c/lado</td>
                    <td>$85.000 informe completo</td>
                  </tr>
                  <tr>
                    <td className="tabla-label">Qué incluye</td>
                    <td>Fotos, plano, publicación portales, visitas, promesa y cierre</td>
                    <td>Fotos, contrato, garantía mes garantía</td>
                    <td>Visita técnica, comparables, sugerencia de precio</td>
                  </tr>
                  <tr>
                    <td className="tabla-label">Cuándo se paga</td>
                    <td>Contra firma promesa y escritura</td>
                    <td>Contra firma contrato</td>
                    <td>Al entregar informe (se abona si sigues)</td>
                  </tr>
                  <tr>
                    <td className="tabla-label">Si no resulta</td>
                    <td>Sin cobro si no hay promesa</td>
                    <td>Sin cobro si no hay contrato</td>
                    <td>Te queda el informe</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="honorarios-nota">
              No inflamos el precio para cobrar más comisión. Preferimos precio de mercado y venta en 45–60
              días que 8 meses publicado.
            </p>
          </div>

          <aside className="honorarios-aside" aria-label="Garantía reserva">
            <h3 className="aside-title">¿Y si se reserva?</h3>
            <p className="aside-text">
              Reserva con $500.000 contra promesa en 10 días. Si no firma, se devuelve íntegra. Nadie queda
              amarrado.
            </p>
            <ul className="aside-checks">
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Promesa revisada por abogado
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Certificados al día
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Sin multa por retracto pre-promesa
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- #visita ---------- */
function VisitaSection() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [propiedad, setPropiedad] = useState("");
  const [operacion, setOperacion] = useState("Venta");
  const [fecha, setFecha] = useState("Hoy");
  const [hora, setHora] = useState("Mañana 10–13");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [proofExists, setProofExists] = useState(false);

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const b = base.endsWith("/") ? base : base + "/";
    fetch(`${b}media/alameda-proof-16x9.png`, { method: "HEAD" })
      .then((r) => setProofExists(r.ok))
      .catch(() => setProofExists(false));
  }, []);

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Nombre mínimo 2 caracteres.";
    const telDigits = tel.replace(/\D/g, "");
    // Accept 9 digits or 11 with 569 prefix
    let digits = telDigits;
    if (digits.startsWith("569") && digits.length === 11) digits = digits.slice(2);
    else if (digits.startsWith("56") && digits.length === 11) digits = digits.slice(2);
    // after strip, expect 9 digits starting with 9
    if (!/^\d{9}$/.test(digits) || !digits.startsWith("9")) {
      e.tel = "Tel 9 dígitos, ej: 9 8421 0765 (validamos +56).";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email no válido.";
    if (!propiedad) e.propiedad = "Elige una propiedad.";
    if (!acepta) e.acepta = "Debes aceptar el contacto por WhatsApp.";
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
      const ts = Date.now();
      const data = { nombre, tel, email, propiedad, operacion, fecha, hora, mensaje, ts };
      try {
        localStorage.setItem(`alameda_visita_${ts}`, JSON.stringify(data));
      } catch {}
      const baseMsg = `Hola Alameda, quiero visitar ${propiedad} el ${fecha} ${hora}. Soy ${nombre}.`;
      const url = `https://wa.me/56984210765?text=${encodeURIComponent(baseMsg)}`;
      window.open(url, "_blank");
    }, 800);
  }

  return (
    <section id="visita" aria-labelledby="visita-h2">
      <div className="section-inner">
        <div className="visita-grid">
          <div className="visita-left">
            <p className="kicker" style={{ color: "var(--accent-2)" }}>
              VISITA · HOY O MAÑANA
            </p>
            <h2 id="visita-h2">Elige hora y te confirmamos por WhatsApp en minutos</h2>
            <p className="section-intro">
              Lunes a sábado 09:00–19:00. Domingo solo con reserva previa. Si la hora ya se tomó, te
              ofrecemos la siguiente libre sin hacerte esperar en la puerta.
            </p>

            <a href="tel:+56984210765" className="visita-tel-grande" aria-label="Teléfono +56 9 8421 0765">
              +56 9 8421 0765
            </a>
            <p className="visita-tel-sub">WhatsApp directo con corredora, no call center.</p>

            <p className="visita-horarios-hoy">
              <span className="dot-verde" aria-hidden="true" /> Hoy quedan 2 visitas: 17:00 y 18:30
            </p>

            {proofExists && (
              <div className="visita-proof">
                <SafeImg file="alameda-proof-16x9.png" alt="Plaza Ñuñoa vacía mañana" ratio="16/9" />
              </div>
            )}

            <div className="prueba-social">
              <p className="prueba-titulo">Últimas 4 operaciones (conservador)</p>
              <ul className="prueba-lista">
                <li>Depto 2D Seminario · UF 4.850 · 38 días</li>
                <li>Casa Peñalolén 3D · UF 9.600 · 52 días</li>
                <li>Depto 1D Irarrázaval · UF 3.180 · 21 días</li>
                <li>Depto 3D La Reina · UF 7.250 · 67 días</li>
              </ul>
            </div>

            <p className="cita-honesta">
              Si llegas y el depto no es como en fotos, te decimos al tiro y no te hacemos perder la tarde.
            </p>
          </div>

          <div className="visita-right">
            <form className="visita-form" onSubmit={handleSubmit} noValidate aria-label="Formulario agenda visita">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="visita-nombre">Nombre*</label>
                  <input
                    id="visita-nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                  {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="visita-tel">Tel / WhatsApp*</label>
                  <input
                    id="visita-tel"
                    type="tel"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    placeholder="9 8421 0765"
                    autoComplete="tel"
                  />
                  {errors.tel && <span className="field-error">{errors.tel}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="visita-email">Email (opcional)</label>
                <input
                  id="visita-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.cl"
                  autoComplete="email"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="visita-propiedad">Propiedad que te interesa*</label>
                <select
                  id="visita-propiedad"
                  value={propiedad}
                  onChange={(e) => setPropiedad(e.target.value)}
                >
                  <option value="">Selecciona</option>
                  <option value="Depto 1D 34m² · Irarrázaval — UF 3.250">Depto 1D 34m² · Irarrázaval — UF 3.250</option>
                  <option value="Depto 2D 62m² · Seminario — UF 4.900">Depto 2D 62m² · Seminario — UF 4.900</option>
                  <option value="Depto 2D 58m² · Manuel Montt — UF 5.400">Depto 2D 58m² · Manuel Montt — UF 5.400</option>
                  <option value="Depto 3D 89m² · Larraín — UF 7.400">Depto 3D 89m² · Larraín — UF 7.400</option>
                  <option value="Casa 3D 138m² · Las Pircas — UF 9.800">Casa 3D 138m² · Las Pircas — UF 9.800</option>
                  <option value="Depto 3D 76m² · Echeñique — UF 6.200">Depto 3D 76m² · Echeñique — UF 6.200</option>
                  <option value="Otra / aún no elijo">Otra / aún no elijo</option>
                </select>
                {errors.propiedad && <span className="field-error">{errors.propiedad}</span>}
              </div>

              <fieldset className="form-fieldset">
                <legend>¿Venta o arriendo?</legend>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="operacion"
                    value="Venta"
                    checked={operacion === "Venta"}
                    onChange={(e) => setOperacion(e.target.value)}
                  />{" "}
                  Venta
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="operacion"
                    value="Arriendo"
                    checked={operacion === "Arriendo"}
                    onChange={(e) => setOperacion(e.target.value)}
                  />{" "}
                  Arriendo
                </label>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Fecha preferida</legend>
                <label className="radio-label">
                  <input type="radio" name="fecha" value="Hoy" checked={fecha === "Hoy"} onChange={(e) => setFecha(e.target.value)} /> Hoy
                </label>
                <label className="radio-label">
                  <input type="radio" name="fecha" value="Mañana" checked={fecha === "Mañana"} onChange={(e) => setFecha(e.target.value)} /> Mañana
                </label>
                <label className="radio-label">
                  <input type="radio" name="fecha" value="Esta semana" checked={fecha === "Esta semana"} onChange={(e) => setFecha(e.target.value)} /> Esta semana
                </label>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Hora preferida</legend>
                <label className="radio-label">
                  <input type="radio" name="hora" value="Mañana 10–13" checked={hora === "Mañana 10–13"} onChange={(e) => setHora(e.target.value)} /> Mañana 10–13
                </label>
                <label className="radio-label">
                  <input type="radio" name="hora" value="Tarde 15–19" checked={hora === "Tarde 15–19"} onChange={(e) => setHora(e.target.value)} /> Tarde 15–19
                </label>
              </fieldset>

              <div className="form-field">
                <label htmlFor="visita-mensaje">Mensaje</label>
                <textarea
                  id="visita-mensaje"
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Ej: quiero ver el 2D de Seminario, ¿tiene bodega grande?"
                />
              </div>

              <label className="checkbox-honesto">
                <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} /> Acepto que me
                contacten por WhatsApp para coordinar la visita. No spam, solo esta propiedad.
              </label>
              {errors.acepta && <span className="field-error">{errors.acepta}</span>}

              <button type="submit" className="btn-primary btn-submit" disabled={loading}>
                {loading ? "Enviando…" : "Pedir visita por WhatsApp"}
              </button>

              <a href="tel:+56984210765" className="btn-ghost" style={{ width: "100%", textAlign: "center" }}>
                Llamar ahora
              </a>

              {success && (
                <p className="form-success">
                  Te llega WhatsApp con hora confirmada y dirección exacta. Si no hay hora hoy, te
                  proponemos mañana antes de las 10:00.
                </p>
              )}
              {success && <p className="form-success-sub">Te llega WhatsApp con hora confirmada…</p>}
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
      <div className="footer-grid">
        <div className="footer-left">
          <p className="footer-marca">ALAMEDA · Corredora Ñuñoa · Irarrázaval 2800, oficina 42</p>
          <p className="footer-horario">Horario oficina 09:00–19:00 Lun–Sáb</p>
        </div>
        <div className="footer-right">
          <nav className="footer-links" aria-label="Links footer">
            <a href="#propiedades">Propiedades</a>
            <a href="#honorarios">Honorarios</a>
            <a href="#visita">Visita</a>
          </nav>
          <p className="footer-copy">© 2026 Alameda</p>
        </div>
      </div>
    </footer>
  );
}

function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("alameda_mobile_cta_dismissed") === "1") {
        setDismissed(true);
        return;
      }
    } catch {}
    const el = document.getElementById("propiedades");
    if (!el) {
      const onScroll = () => setVisible(window.scrollY > 600);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // visible when propiedades has passed (not intersecting and scroll after it)
        if (!e.isIntersecting && e.boundingClientRect.top < 0) setVisible(true);
        else if (e.isIntersecting) setVisible(false);
      },
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="mobile-cta-bar" role="toolbar" aria-label="Acciones rápidas">
      <a href="#propiedades" className="mobile-cta-btn mobile-cta-secondary">
        Ver propiedades
      </a>
      <a href="#visita" className="mobile-cta-btn mobile-cta-primary">
        Agendar visita
      </a>
      <button
        className="mobile-cta-dismiss"
        aria-label="Cerrar barra"
        onClick={() => {
          setDismissed(true);
          try {
            sessionStorage.setItem("alameda_mobile_cta_dismissed", "1");
          } catch {}
        }}
      >
        ✕
      </button>
    </div>
  );
}

export function App() {
  // keep body padding for mobile cta bar offset? CSS handles.
  const sentinelRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropiedadesSection />
        <FichaAlamedaSection />
        <BarrioSection />
        <HonorariosSection />
        <VisitaSection />
      </main>
      <Footer />
      <MobileCtaBar />
      <div ref={sentinelRef} aria-hidden="true" />
    </>
  );
}
