import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  // close on resize >768
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <a href="#portada-arquitectura-b-claro" className="brand" aria-label="NORTE — Inicio">
          <span className="brand-mark">NORTE</span>
          <span className="brand-desc">ESTUDIO · PUERTO VARAS</span>
        </a>

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Principal">
          <a href="#indice-obras-arquitectura-b-claro" onClick={() => setOpen(false)}>Obras</a>
          <a href="#taller-norte" onClick={() => setOpen(false)}>Taller</a>
          <a href="#permiseria" onClick={() => setOpen(false)}>Permisería</a>
          <a href="#proceso-obra" onClick={() => setOpen(false)}>Proceso</a>
          <a href="#honorarios-arquitectura-b-claro" onClick={() => setOpen(false)}>Honorarios</a>
        </nav>

        <div className="header-right">
          <a href="tel:+56987654321" className="tel-link" aria-label="Llamar al +56 9 8765 4321">
            <span className="tel-text">+56 9 8765 4321</span>
            <span aria-hidden="true" className="tel-icon-mobile">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="badge-visita">VISITA</span>
          </a>
          <a href="#visita-terreno" className="cta-header">Cotizar tu proyecto</a>
          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroMedia() {
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (err) {
      console.warn("[NORTE] Falta: norte-hero-16x9.png no encontrada en public/media/. Usando placeholder con data-falta. Si existe norte-hero-9x16.png también debe estar en public/media/.");
    }
  }, [err]);

  if (err) {
    return (
      <div className="media-falta" data-falta="norte-hero-16x9.png" style={{ aspectRatio: "16/9", border: "1px dashed #DCD6CA", display: "grid", placeItems: "center", color: "#8B857A", font: "500 0.82rem DM Sans, sans-serif", background: "var(--panel)" }}>
        Falta: norte-hero-16x9.png
      </div>
    );
  }

  return (
    <div className="media-wrap">
      <picture>
        <source media="(max-width: 767px)" srcSet="/media/norte-hero-9x16.png" />
        <img
          src="/media/norte-hero-16x9.png"
          alt="Mesa de anteproyecto en luz norte 5500K: pliego de lino hueso de 700 por 1000 milímetros plegado a 15 milímetros con planta residencial trazada en grafito y cotas a lápiz, escuadra de acero inoxidable de 300 milímetros apoyada a 90 grados sobre el pliego y bloque-maqueta abstracta de roble claro de 40 milímetros con sombra nítida de 1 píxel proyectada a 45 grados sobre fondo vacío color lino hueso, documental editorial sin personas en Puerto Varas"
          loading="eager"
          decoding="async"
          onError={() => setErr(true)}
        />
      </picture>
    </div>
  );
}

// Helper for media fallback
function MediaTile({ src, alt, ratio, falta }: { src: string; alt: string; ratio: string; falta: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="media-falta" data-falta={falta} style={{ aspectRatio: ratio, border: "1px dashed #DCD6CA", display: "grid", placeItems: "center", color: "#8B857A" } as React.CSSProperties}>
        Falta: {falta}
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />;
}

// #indice-obras
type Obra = { n: string; nombre: string; meta: string; ficha: string };
const OBRAS: Obra[] = [
  { n: "01", nombre: "Casa Rupanco", meta: "Puerto Varas · 214 m² · 2024", ficha: "214 m² · 2024 · casa · roble + hormigón visto · habitada" },
  { n: "02", nombre: "Casa Pelluco", meta: "Puerto Montt · 168 m² · 2023", ficha: "168 m² · 2023 · casa · zinc + madera · habitada" },
  { n: "03", nombre: "Casa Ensenada", meta: "Ensenada · 245 m² · 2024", ficha: "245 m² · 2024 · casa · piedra + madera · en obra" },
  { n: "04", nombre: "Ampliación Llanquihue", meta: "Llanquihue · 86 m² · 2023", ficha: "86 m² · 2023 · ampliación · estructura madera · habitada" },
  { n: "05", nombre: "Casa Frutillar", meta: "Frutillar · 192 m² · 2022", ficha: "192 m² · 2022 · casa · patio interior y galería vidriada · habitada" },
  { n: "06", nombre: "Casa Puyehue", meta: "Entre Lagos · 178 m² · 2023", ficha: "178 m² · 2023 · casa · bosque nativo, cubierta a dos aguas · habitada" },
  { n: "07", nombre: "Casa Calbuco", meta: "Calbuco · 156 m² · 2024", ficha: "156 m² · 2024 · casa · fundación pilotes y zinc negro · en obra" },
  { n: "08", nombre: "Regularización La Vara", meta: "Puerto Montt · 124 m² · 2023", ficha: "124 m² · 2023 · regularización + ampliación menor · habitada" },
];

function IndiceObras() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="indice-obras-arquitectura-b-claro" className="section" aria-labelledby="indice-title">
      <div className="container">
        <div className="section-header">
          <p className="kicker">OBRAS 01–08</p>
          <h2 id="indice-title" className="h2">Ocho casas. Ocho terrenos distintos.</h2>
          <p className="intro">Cada una con su pendiente, su viento y su presupuesto. El índice es la obra.</p>
        </div>
        <div className="indice-grid">
          <div className="indice-lista" role="list">
            {OBRAS.map((o) => (
              <div
                key={o.n}
                role="listitem"
                className={`indice-fila ${expanded === o.n ? "is-expanded" : ""}`}
                onMouseEnter={() => setExpanded(o.n)}
                onMouseLeave={() => setExpanded(null)}
                onClick={() => setExpanded(expanded === o.n ? null : o.n)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded(expanded === o.n ? null : o.n); } }}
                aria-expanded={expanded === o.n}
              >
                <div className="fila-main">
                  <span className="fila-num">{o.n}</span>
                  <div className="fila-text">
                    <span className="fila-nombre">{o.nombre}</span>
                    <span className="fila-meta">{o.meta}</span>
                  </div>
                  <span className="fila-arrow" aria-hidden="true">→</span>
                </div>
                <div className="fila-ficha" aria-hidden={expanded !== o.n}>
                  <span>{o.ficha}</span>
                </div>
              </div>
            ))}
          </div>
          <aside className="indice-aside" aria-label="Imagen índice">
            <div className="aside-media" style={{ aspectRatio: "1/1", border: "1px solid var(--linea)", background: "var(--panel)", overflow: "hidden" }}>
              <MediaTile src="/media/norte-tile-01-1x1.png" alt="Detalle macro de maqueta abstracta de roble claro de 40 milímetros posada sobre pliego de lino hueso con cotas a grafito de 0,5 milímetros y borde recortado de escuadra de acero inoxidable, sombra precisa de 1 píxel sobre fondo hueso, luz norte difusa 5500K, documental editorial sin personas" ratio="1/1" falta="norte-tile-01-1x1.png" />
            </div>
            <p className="caption">Índice · maqueta roble 40mm · cotas grafito</p>
            <div className="banda-aside">Visitas con acta — cada visita queda en PDF con fotos y acuerdos</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FichaTecnica() {
  return (
    <section id="ficha-tecnica-arquitectura-b-claro" className="section" aria-labelledby="ficha-title">
      <div className="container">
        <div className="ficha-grid">
          <div className="ficha-media-col">
            <div style={{ border: "1px solid var(--linea)", background: "var(--panel)", overflow: "hidden", aspectRatio: "3/4" }}>
              <MediaTile src="/media/norte-tile-02-3x4.png" alt="Detalle de textura de revestimiento de roble termotratado color miel claro junto a junta de hormigón visto de 8 milímetros, veta y poro visibles bajo luz rasante norte 5500K, muestra material a escala 1:1 sobre fondo hueso, documental limpia sin personas en Puerto Varas" ratio="3/4" falta="norte-tile-02-3x4.png" />
            </div>
            <p className="caption" style={{ textAlign: "right" }}>Detalle · roble + hormigón · luz rasante 5500K</p>
          </div>
          <div className="ficha-copy">
            <p className="kicker">FICHA TÉCNICA — CASA RUPANCO</p>
            <h2 id="ficha-title" className="h2">214 m² en ladera sur. Roble, hormigón y luz pareja.</h2>
            <p className="intro-sm">Pendiente 18%, viento sur y presupuesto cerrado desde el anteproyecto. Estructura mixta que deja la madera a la vista donde importa.</p>
            <div className="tabla-tecnica" role="table" aria-label="Ficha técnica Casa Rupanco">
              <div className="tt-row" role="row"><span className="tt-label">Superficie</span><span className="tt-value">214 m² · 2024 · obra nueva</span></div>
              <div className="tt-row" role="row"><span className="tt-label">Estructura</span><span className="tt-value">hormigón visto + entramado roble laminado</span></div>
              <div className="tt-row" role="row"><span className="tt-label">Revestimiento</span><span className="tt-value">roble termotratado + zinc prepintado grafito</span></div>
              <div className="tt-row" role="row"><span className="tt-label">Heating</span><span className="tt-value">losa radiante + cocina a leña contenida</span></div>
              <div className="tt-row" role="row"><span className="tt-label">Permiso</span><span className="tt-value">aprobado DOM Puerto Varas · 96 días corridos</span></div>
              <div className="tt-row" role="row"><span className="tt-label">Costo obra gruesa</span><span className="tt-value">$42.800.000 CLP (referencial, ver honorarios)</span></div>
            </div>
            <ul className="entregables">
              <li>Planos 1:50 con cotas y detalles 1:20</li>
              <li>EETT y cubicación por partida</li>
              <li>Maqueta roble 1:100 + lámina A1</li>
            </ul>
            <p className="nota-honesta">Fotos documentales reales de obra, no renders. La luz es la del lugar a las 10:30.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TallerNorte() {
  return (
    <section id="taller-norte" className="section" aria-labelledby="taller-title">
      <div className="container">
        <div className="taller-grid">
          <div className="taller-media-col">
            <div style={{ border: "1px solid var(--linea)", background: "var(--panel)", overflow: "hidden", aspectRatio: "4/3" }}>
              <MediaTile src="/media/norte-interior-16x9.png" alt="Taller vacío de arquitectura en Puerto Varas: muro de yeso color lino hueso, mesa baja de anteproyecto color hueso al centro con pliego de 700 por 1000 milímetros, escuadra de acero de 300 milímetros y bloque de roble de 40 milímetros, piso de pino barnizado mate, luz norte difusa entrando por ventana a la izquierda con sombra larga precisa a 45 grados, sin sillas ni personas, documental editorial" ratio="4/3" falta="norte-interior-16x9.png" />
            </div>
            <p className="caption">Taller · mesa anteproyecto · luz norte 5500K</p>
          </div>
          <div className="taller-copy">
            <p className="kicker">TALLER NORTE</p>
            <h2 id="taller-title" className="h2">Taller pequeño. Arquitecto a cargo de punta a punta.</h2>
            <p className="intro-sm">Somos 4. No derivamos tu obra a terceros. Quien firma el plano es quien va a la visita.</p>
            <div className="taller-cols">
              <div className="taller-dato">
                <span className="td-label">Arquitecto a cargo</span>
                <span className="td-value">Martín Norte · U. de Chile · 18 años en sur austral. Firma y visita.</span>
              </div>
              <div className="taller-dato">
                <span className="td-label">Equipo</span>
                <span className="td-value">2 arquitectos + 1 dibujante + 1 coordinadora de permisos. Todos en Puerto Varas.</span>
              </div>
            </div>
            <ul className="filosofia">
              <li>— La casa se adapta al terreno, no al revés.</li>
              <li>— Presupuesto antes que forma. Sin costo claro no hay anteproyecto.</li>
              <li>— Madera del sur bien detallada dura 40 años sin maquillaje.</li>
            </ul>
            <div className="banda-prueba" aria-label="Prueba honesta">+120 proyectos · 18 años · 96% permisos aprobados al primer ingreso · 0 obras sin contrato</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Permiseria() {
  return (
    <section id="permiseria" className="section" aria-labelledby="permiseria-title">
      <div className="container">
        <p className="kicker">QUÉ RECIBES</p>
        <h2 id="permiseria-title" className="h2">Del croquis al permiso sin perder el hilo.</h2>
        <p className="intro" style={{ marginBottom: 28 }}>Cada etapa tiene entregable en papel y PDF. Sabes qué viene y cuánto falta.</p>
        <div className="permiseria-grid">
          <div className="permiso-bloque">
            <div style={{ border: "1px solid var(--linea)", background: "var(--panel)", overflow: "hidden", aspectRatio: "1/1", marginBottom: 16 }}>
              <MediaTile src="/media/norte-tile-03-1x1.png" alt="Detalle de pliego de lino plegado con fragmento de planta a escala 1:100, cotas a grafito y anotación manuscrita a lápiz que dice pendiente 18 por ciento viento sur, escuadra de acero inoxidable apoyada a 90 grados, borde de papel con fibra visible y 15 milímetros de espesor, luz difusa 5500K sin personas" ratio="1/1" falta="norte-tile-03-1x1.png" />
            </div>
            <h3 className="bloque-title">01 · Anteproyecto</h3>
            <p className="bloque-text">Plantas, cortes, elevaciones 1:100 + maqueta roble 1:100 + lámina A1. Con costo por m² estimado.</p>
            <ul className="bloque-bullets"><li>· 2 reuniones de ajuste incluidas</li><li>· Entrega PDF + lámina A1</li></ul>
          </div>
          <div className="permiso-bloque">
            <h3 className="bloque-title">02 · Permisería</h3>
            <p className="bloque-text">Carpeta DOM completa: planos, EETT, formularios y seguimiento hasta recepción.</p>
            <ul className="bloque-bullets"><li>· Ingreso y subsanaciones incluidas</li><li>· Plazo DOM 96 días promedio</li></ul>
          </div>
          <div className="permiso-bloque">
            <div style={{ border: "1px solid var(--linea)", background: "var(--panel)", overflow: "hidden", aspectRatio: "4/3", marginBottom: 16 }}>
              <MediaTile src="/media/norte-tile-04-4x3.png" alt="Junta constructiva a escala 1:20 de viga de roble claro encontrándose con escalón de hormigón visto color gris medio, escuadra de acero inoxidable de 300 milímetros y portaminas de 0,5 milímetros apoyados paralelos sobre mesa hueso como referencia de escala, sombra de 1 píxel y textura de veta visible, luz norte 5500K sin personas" ratio="4/3" falta="norte-tile-04-4x3.png" />
            </div>
            <h3 className="bloque-title">03 · Detalle constructivo</h3>
            <p className="bloque-text">Detalles 1:20, cubicación por partida y coordinación con cálculo.</p>
            <ul className="bloque-bullets"><li>· Planos 1:50 + detalles 1:20</li><li>· EETT por partida</li></ul>
          </div>
          <div className="permiso-bloque">
            <h3 className="bloque-title">04 · Administración de obra</h3>
            <p className="bloque-text">Visitas con acta, control de partidas y cierre con fotos. Tú ves cada peso.</p>
            <ul className="bloque-bullets"><li>· Visita quincenal con acta PDF</li><li>· Libro de obra digital</li></ul>
          </div>
        </div>
        <p className="nota-honesta" style={{ marginTop: 24 }}>No somos constructora. Coordinamos o administramos; tú eliges constructor. Sin amarre.</p>
      </div>
    </section>
  );
}

function ProcesoObra() {
  const etapas = [
    { n: "01", t: "Conversación", d: "Terreno, programa y presupuesto objetivo. Acta 01.", dur: "7 días" },
    { n: "02", t: "Levantamiento", d: "Topografía, fotos y normativa DOM. Acta 02.", dur: "10–14 días" },
    { n: "03", t: "Anteproyecto", d: "Planta + maqueta roble + costo m². Acta 03.", dur: "21 días" },
    { n: "04", t: "Permisos", d: "Carpeta DOM y subsanaciones. Acta 04.", dur: "60–96 días" },
    { n: "05", t: "Obra", d: "Visitas quincenales, libro y cierre. Acta 05.", dur: "4–8 meses" },
  ];
  return (
    <section id="proceso-obra" className="section" aria-labelledby="proceso-title">
      <div className="container">
        <p className="kicker">PROCESO</p>
        <h2 id="proceso-title" className="h2">Cinco etapas. Cada una con su acta.</h2>
        <div className="proceso-grid">
          {etapas.map((e) => (
            <div key={e.n} className="proceso-col">
              <span className="proceso-num">{e.n}</span>
              <h3 className="proceso-title">{e.t}</h3>
              <p className="proceso-desc">{e.d}</p>
              <span className="proceso-dur">{e.dur}</span>
            </div>
          ))}
        </div>
        <div className="banda-proceso">Cada acta es PDF con fotos, acuerdos y próxima fecha. Queda registro.</div>
      </div>
    </section>
  );
}

type HonorarioRow = { prest: string; precio: string; nota: string };
const HONORARIOS: HonorarioRow[] = [
  { prest: "Visita terreno + informe norma + acta 01", precio: "$190.000", nota: "1 visita + informe 4 págs + acta PDF con fotos" },
  { prest: "Anteproyecto (plantas/cortes/elev 1:100 + maqueta 1:100 + lámina A1)", precio: "desde $1.290.000", nota: "hasta 150 m² · 2 ajustes incluidos · costo m² estimado" },
  { prest: "Anteproyecto 150–250 m²", precio: "desde $1.850.000", nota: "3 ajustes · maqueta roble incluida" },
  { prest: "Proyecto completo + carpeta DOM (planos 1:50 + EETT + formularios)", precio: "desde $2.850.000", nota: "ingreso y 1 subsanación incluida · DOM 96 días promedio" },
  { prest: "Regularización / ampliación menor (hasta 100 m²)", precio: "desde $890.000", nota: "levantamiento + planos + carpeta DOM" },
  { prest: "Detalle constructivo 1:20 + cubicación por partida", precio: "desde $1.150.000", nota: "coordinación con cálculo estructural" },
  { prest: "Administración de obra (visitas quincenales con acta + libro)", precio: "8% costo obra", nota: "mínimo $380.000/mes · visitas con acta PDF" },
  { prest: "Hora arquitecto adicional", precio: "$45.000 / h", nota: "se descuenta si contratas etapa siguiente" },
];

function Honorarios() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="honorarios-arquitectura-b-claro" className="section" aria-labelledby="honorarios-title">
      <div className="container">
        <div className="honor-header">
          <p className="kicker">HONORARIOS A LA VISTA</p>
          <h2 id="honorarios-title-arquitectura-b-claro" className="h2">Presupuesto claro desde el primer día</h2>
          <p className="intro intro-60">Cada fila es ‘desde’ para casa hasta 200 m² en zona Puerto Varas–Puerto Montt. El definitivo se confirma tras visitar el terreno. Sin sorpresas ni letra chica.</p>
        </div>
        <div className="honor-grid">
          <div className="honor-tabla-wrap">
            <div className="honor-tabla" role="table" aria-label="Tabla de honorarios">
              <div className="honor-head" role="row">
                <span>Prestación</span><span style={{ textAlign: "right" }}>Desde CLP</span>
              </div>
              {HONORARIOS.map((r, i) => (
                <div
                  key={i}
                  className={`honor-row ${hover === i ? "is-hover" : ""}`}
                  role="row"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  tabIndex={0}
                >
                  <div className="honor-prest-col">
                    <span className="honor-prest">{r.prest}</span>
                    <span className={`honor-nota ${hover === i ? "visible" : ""}`}>{r.nota}</span>
                  </div>
                  <span className="honor-precio">{r.precio}</span>
                </div>
              ))}
            </div>
            <p className="nota-honesta" style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 12, marginTop: 14 }}>Valores referenciales con IVA incluido donde corresponde. El valor final depende del terreno (pendiente, viento, acceso), programa y sistema constructivo. Se confirma en tu primera visita. Nunca partimos sin presupuesto firmado.</p>
          </div>
          <aside className="honor-aside" aria-label="Cómo se paga">
            <div className="aside-card">
              <h3 className="aside-title">Hitos, no mes a mes</h3>
              <p className="aside-text">30% al encargo · 40% anteproyecto aprobado · 30% al ingreso DOM. Administración mensual contra acta.</p>
            </div>
            <div className="aside-card" style={{ marginTop: 12 }}>
              <p className="aside-mono">Respuesta &lt;24h hábil · Visita en 7 días · Acta siempre</p>
            </div>
            <a href="#visita-terreno" className="btn-primary" style={{ width: "100%", marginTop: 12, justifyContent: "center" }}>Cotizar tu proyecto</a>
            <a href="https://wa.me/56987654321" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ width: "100%", marginTop: 8, justifyContent: "center" }}>WhatsApp +56 9 8765 4321</a>
          </aside>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "¿Cuánto demora el permiso en Puerto Varas?", a: "DOM toma 60–96 días corridos si la carpeta entra completa. Nosotros promediamos 96 días al primer ingreso con subsanación incluida. Te avisamos cada hito por mail con copia del acta." },
  { q: "¿Qué incluye el anteproyecto?", a: "Plantas/cortes/elev 1:100, maqueta roble 1:100, lámina A1 y costo por m² estimado por partida. 2 ajustes incluidos. Sale listo para visar con cálculo." },
  { q: "¿Construyen ustedes o con externos?", a: "No somos constructora. Tú eliges constructor; nosotros administramos con visitas quincenales y acta. Si tienes constructor de confianza, nos coordinamos sin costo extra." },
  { q: "¿Cómo se paga?", a: "Por hitos contra entrega (30/40/30). Administración mensual contra acta de visita. Todo con boleta y contrato. Sin pie sorpresa." },
  { q: "¿Diseñan fuera de Los Lagos?", a: "Sí, sur austral completo con visita. Fuera de zona se suma viático $95.000 por visita. Anteproyecto puede ser remoto si nos envías levantamiento confiable." },
];

function PreguntasObra() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="preguntas-obra" className="section" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-media-col">
            <div style={{ border: "1px solid var(--linea)", background: "var(--panel)", overflow: "hidden", aspectRatio: "4/3" }}>
              <MediaTile src="/media/norte-proof-16x9.png" alt="Obra en estructura vista en Puerto Varas: entramado de madera de roble a la vista con aislación entre pies derechos, base de hormigón visto, andamio mínimo, cielo gris claro parejo de día nublado, fotografía documental limpia sin personas ni letreros, luz pareja 5500K" ratio="4/3" falta="norte-proof-16x9.png" />
            </div>
            <p className="caption">Obra · entramado roble · luz pareja 5500K</p>
          </div>
          <div className="faq-copy">
            <p className="kicker">PREGUNTAS DE OBRA</p>
            <h2 id="faq-title-arquitectura-b-claro" className="h2">Lo que preguntan antes de firmar.</h2>
            <div className="acordeones" role="list">
              {FAQS.map((f, i) => (
                <div key={i} className={`acordeon ${open === i ? "is-open" : ""}`} role="listitem">
                  <button className="acordeon-trigger" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} type="button">
                    <span>{f.q}</span>
                    <span className="acordeon-icon" aria-hidden="true">{open === i ? "−" : "+"}</span>
                  </button>
                  <div className="acordeon-panel" hidden={open !== i}>
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitaTerreno() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // preload from localStorage
  useEffect(() => {
    try {
      const s = localStorage.getItem("norte-visita-success");
      if (s === "1") setSuccess(true);
    } catch { /* ignore */ }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const nombre = String(fd.get("nombre") || "").trim();
    const telefono = String(fd.get("telefono") || "").trim();
    const comuna = String(fd.get("comuna") || "").trim();
    const acepta = fd.get("acepta");

    if (nombre.length < 2) { setError("Revisa los campos marcados."); (form.querySelector('[name="nombre"]') as HTMLElement)?.focus(); return; }
    if (!telefono || !/^\+?56\s?9\s?\d{4}\s?\d{4}$/.test(telefono.replace(/\s+/g, " ").trim()) && telefono.length < 8) {
      // fallback simple: must contain 9 and at least 8 digits
      const digits = telefono.replace(/\D/g, "");
      if (digits.length < 9) { setError("Revisa los campos marcados."); (form.querySelector('[name="telefono"]') as HTMLElement)?.focus(); return; }
    }
    if (!comuna) { setError("Revisa los campos marcados."); return; }
    if (!acepta) { setError("Revisa los campos marcados."); return; }

    setLoading(true);
    setTimeout(() => {
      try {
        localStorage.setItem("norte-visita-success", "1");
        localStorage.setItem("norte-visita-data", JSON.stringify(Object.fromEntries(fd.entries())));
      } catch { /* ignore */ }
      setLoading(false);
      setSuccess(true);
      // optional mailto
      const email = String(fd.get("email") || "");
      const mensaje = String(fd.get("mensaje") || "");
      const subject = encodeURIComponent(`Visita terreno — ${nombre} — ${comuna}`);
      const body = encodeURIComponent(`Nombre: ${nombre}\nTel: ${telefono}\nEmail: ${email}\nComuna: ${comuna}\nSuperficie: ${fd.get("superficie") || ""}\nMensaje: ${mensaje}`);
      // open mailto in background (no block)
      const href = `mailto:hola@norteestudio.cl?subject=${subject}&body=${body}`;
      // create invisible link
      const a = document.createElement("a");
      a.href = href;
      a.style.display = "none";
      document.body.appendChild(a);
      // don't auto-click to avoid popup; just prepare
      setTimeout(() => a.remove(), 1000);
    }, 180);
  };

  return (
    <section id="visita-terreno" className="section" aria-labelledby="visita-title">
      <div className="container">
        <div className="visita-grid">
          <div className="visita-copy">
            <p className="kicker">VISITA TERRENO</p>
            <h2 id="visita-title" className="h2">Agenda tu visita. Llegamos con huincha y acta.</h2>
            <a href="tel:+56987654321" className="visita-tel">+56 9 8765 4321</a>
            <a href="mailto:hola@norteestudio.cl" className="visita-email">hola@norteestudio.cl</a>
            <p className="visita-direccion">Puerto Varas · Los Lagos · visitas en toda la cuenca</p>
            <p className="visita-horario"><span className="dot" aria-hidden="true" /> Lun–Vie 9:00–18:30 · Sáb visita con agenda</p>
            <p className="micro" style={{ maxWidth: 42 + "ch" }}>Responde el arquitecto, no un call center. Si no contestamos en obra, devolvemos el mismo día.</p>
          </div>
          <div className="visita-form-col">
            <form className="visita-form" onSubmit={handleSubmit} noValidate aria-label="Formulario visita terreno">
              <div className="form-field">
                <label htmlFor="nombre">Nombre *</label>
                <input id="nombre-arquitectura-b-claro" name="nombre" type="text" required minLength={2} placeholder="Tu nombre" autoComplete="name" />
              </div>
              <div className="form-field">
                <label htmlFor="telefono">Teléfono *</label>
                <input id="telefono" name="telefono" type="tel" required placeholder="+56 9 1234 5678" pattern=".*\+?56.*9.*" autoComplete="tel" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email-arquitectura-b-claro" name="email" type="email" placeholder="tu@mail.cl" autoComplete="email" />
              </div>
              <div className="form-field">
                <label htmlFor="comuna">Comuna del terreno *</label>
                <select id="comuna" name="comuna" required defaultValue="">
                  <option value="" disabled>Selecciona comuna</option>
                  <option value="Puerto Varas">Puerto Varas</option>
                  <option value="Puerto Montt">Puerto Montt</option>
                  <option value="Frutillar">Frutillar</option>
                  <option value="Ensenada">Ensenada</option>
                  <option value="Llanquihue">Llanquihue</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="superficie">Superficie aproximada</label>
                <select id="superficie" name="superficie" defaultValue="">
                  <option value="">Selecciona superficie</option>
                  <option value="<100 m²">&lt;100 m²</option>
                  <option value="100–150 m²">100–150 m²</option>
                  <option value="150–250 m²">150–250 m²</option>
                  <option value="250+ m²">250+ m²</option>
                </select>
              </div>
              <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje-arquitectura-b-claro" name="mensaje" rows={4} placeholder="Cuéntanos pendiente, acceso y qué te imaginas. Si tienes rol, adjunta en visita." />
              </div>
              <div className="form-check" style={{ gridColumn: "1 / -1" }}>
                <input id="acepta" name="acepta" type="checkbox" required />
                <label htmlFor="acepta">Acepto ser contactado por WhatsApp o mail para coordinar visita *</label>
              </div>
              {error && <p role="alert" className="form-error">Revisa los campos marcados.</p>}
              {success && <p role="status" className="form-success">Listo. Te escribimos hoy para fijar día de visita. Revisa tu WhatsApp.</p>}
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={loading} aria-busy={loading}>
                {loading ? <span className="spinner" aria-hidden="true" /> : null}
                {loading ? " Enviando…" : "Solicitar visita — $190.000"}
              </button>
              <p className="form-alt"><a href="https://wa.me/56987654321" target="_blank" rel="noopener noreferrer">o escríbenos por WhatsApp</a></p>
            </form>
            <p className="nota-honesta" style={{ marginTop: 12 }}>La visita se descuenta si contratas anteproyecto. Si el terreno no es viable, te lo decimos en el acta sin costo extra.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-marca">
            <span className="footer-logo">NORTE — ESTUDIO · PUERTO VARAS</span>
            <span className="footer-desc">Arquitectura residencial · Los Lagos · obra nueva y ampliación</span>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="#indice-obras-arquitectura-b-claro">Obras</a>
            <a href="#taller-norte">Taller</a>
            <a href="#honorarios-arquitectura-b-claro">Honorarios</a>
            <a href="#visita-terreno">Visita</a>
          </nav>
          <div className="footer-legal">
            <span>© 2026 NORTE ESTUDIO · Puerto Varas · +56 9 8765 4321 · hola@norteestudio.cl</span>
            <span>Hecho en el sur. Permisería incluida.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyMobile() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    try {
      const v = sessionStorage.getItem("norte-sticky-hidden");
      if (v) {
        const ts = Number(v);
        if (Date.now() - ts < 24 * 60 * 60 * 1000) setHidden(true);
      }
    } catch { /* ignore */ }
    const onScroll = () => {
      const hero = document.getElementById("portada-arquitectura-b-claro");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const bar = document.getElementById("sticky-mobile");
      if (!bar) return;
      if (rect.bottom < 0) bar.classList.add("is-visible");
      else bar.classList.remove("is-visible");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (hidden) return null;
  const close = () => {
    try { sessionStorage.setItem("norte-sticky-hidden", String(Date.now())); } catch { /* ignore */ }
    setHidden(true);
  };
  return (
    <div id="sticky-mobile" className="sticky-mobile" role="complementary" aria-label="Contacto rápido">
      <a href="tel:+56987654321" className="sticky-tel">+56 9 8765 4321</a>
      <a href="#visita-terreno" className="sticky-cta">Cotizar</a>
      <button type="button" className="sticky-close" aria-label="Cerrar barra" onClick={close}>×</button>
    </div>
  );
}

export function App() {
  return (
    <>
      <a href="#portada-arquitectura-b-claro" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido-arquitectura-b-claro">
        <section id="portada-arquitectura-b-claro" className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">PUERTO VARAS · LOS LAGOS · OBRA NUEVA Y AMPLIACIÓN</p>
              <h1 id="hero-title-arquitectura-b-claro" className="hero-title">
                Casas que calzan con el <span className="underline">lugar</span>. Papel, regla y obra.
              </h1>
              <p className="hero-sub">
                Arquitectura residencial en el sur. Del anteproyecto al permiso y la obra, con presupuesto por escrito y visitas que quedan
                registradas.
              </p>
              <div className="hero-ctas">
                <a href="#visita-terreno" className="btn-primary">
                  Cotizar tu proyecto
                </a>
                <a href="#indice-obras-arquitectura-b-claro" className="btn-ghost">
                  Ver obras 01–08
                </a>
              </div>
              <div className="banda" aria-label="Atributos">
                <span className="banda-item">Permisería incluida</span>
                <span className="banda-sep" aria-hidden="true">
                  ·
                </span>
                <span className="banda-item">Visitas con acta</span>
                <span className="banda-sep" aria-hidden="true">
                  ·
                </span>
                <span className="banda-item">Costo por m² a la vista</span>
              </div>
              <p className="micro">Si el terreno pide ajustar el programa, te avisamos antes de dibujar en limpio. Nada parte sin tu ok por escrito.</p>
              <p className="firma">Obra 00 · mesa de anteproyecto · luz norte 5500K</p>
            </div>

            <div className="hero-media">
              <HeroMedia />
              <p className="hero-caption">Mesa 01 · pliego lino 700×1000 + escuadra 300mm · bloque roble 40mm</p>
            </div>
          </div>
        </section>
        <IndiceObras />
        <FichaTecnica />
        <TallerNorte />
        <Permiseria />
        <ProcesoObra />
        <Honorarios />
        <PreguntasObra />
        <VisitaTerreno />
      </main>
      <Footer />
      <StickyMobile />
    </>
  );
}
