import { useEffect, useState } from "react";

const NAV = [
  { label: "Stock", href: "#stock-revisado" },
  { label: "Chequeo 180", href: "#chequeo-180" },
  { label: "Financia", href: "#financia-y-papeles" },
  { label: "Box", href: "#box-noctua" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (!open) {
        if (y > last && y > 80) setHidden(true);
        else setHidden(false);
      }
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`header ${scrolled ? "header--scrolled" : ""} ${hidden ? "header--hidden" : ""}`}
        role="banner"
      >
        <div className="header__inner">
          <a href="#cochera" className="header__logo" aria-label="NOCTUA — inicio">
            NOCTUA
          </a>

          <nav className="header__nav" aria-label="Principal">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="tel:+56954159299" className="header__tel" aria-label="Llamar +56 9 5415 9299">
            +56 9 5415 9299
          </a>

          <a href="#agenda-noctua" className="header__cta">
            Agendar inspección
          </a>

          <a href="tel:+56954159299" className="header__tel-icon" aria-label="Llamar +56 9 5415 9299">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.48.45 2.94.97 4.32a2 2 0 0 1-.57 2.07l-1.5 1.5a14.08 14.08 0 0 0 5.07 5.07l1.5-1.5a2 2 0 0 1 2.07-.57c1.38.52 2.84.85 4.32.97A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          <button
            className={`header__burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span className="header__burger-lines" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile-concesionaria-noctua-oscuro"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open ? (true as unknown as boolean) : undefined}
      >
        <nav className="mobile-menu__links" aria-label="Móvil">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#agenda-noctua" onClick={() => setOpen(false)}>
            Agendar inspección
          </a>
        </nav>
        <div>
          <span className="mobile-menu__tel-label">Vitacura — Cochera nocturna · hasta 21:30</span>
          <a href="tel:+56954159299" className="mobile-menu__tel">
            +56 9 5415 9299
          </a>
          <a href="#agenda-noctua" className="mobile-menu__cta" onClick={() => setOpen(false)}>
            Agendar inspección
          </a>
        </div>
        <div className="mobile-menu__foot">
          <span style={{ fontFamily: '"IBM Plex Sans",system-ui,sans-serif', fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
            Av. Vitacura 6830, Vitacura — Inspecciones hasta 21:30 con hora
            <br />© 2026 NOCTUA · Cochera nocturna Vitacura
          </span>
        </div>
      </div>
    </>
  );
}

function HeroMedia() {
  const [videoExists, setVideoExists] = useState<boolean | null>(null);
  const [img16Missing, setImg16Missing] = useState(false);
  const [img9Missing, setImg9Missing] = useState(false);

  useEffect(() => {
    const check = async (url: string) => {
      try {
        const r = await fetch(url, { method: "HEAD" });
        return r.ok;
      } catch {
        return false;
      }
    };
    check("media/noctua-hero-16x9.png").then((ok) => {
      if (!ok) {
        console.warn("[NOCTUA] Falta media: noctua-hero-16x9.png");
        setImg16Missing(true);
      }
    });
    check("media/noctua-hero-9x16.png").then((ok) => {
      if (!ok) {
        console.warn("[NOCTUA] Falta media: noctua-hero-9x16.png");
        setImg9Missing(true);
      }
    });
    check("media/noctua-hero-loop.mp4").then((ok) => setVideoExists(ok));
  }, []);

  const useVideo = videoExists === true && !img16Missing;

  if (img16Missing && img9Missing && !useVideo) {
    return (
      <>
        <div className="media-falta" data-falta="noctua-hero-16x9.png" style={{ position: "absolute", inset: 0 } as React.CSSProperties}>
          Falta media: noctua-hero-16x9.png
        </div>
        <div className="media-falta" data-falta="noctua-hero-9x16.png" style={{ position: "absolute", inset: 0, opacity: 0, pointerEvents: "none" } as React.CSSProperties}>
          Falta media: noctua-hero-9x16.png
        </div>
      </>
    );
  }

  return (
    <>
      {useVideo ? (
        <>
          <video
            className="hero__img-desktop"
            autoPlay
            muted
            loop
            playsInline
            poster="media/noctua-hero-16x9.png"
            aria-label="Box nocturno Vitacura con puente elevador y haz ámbar"
          >
            <source src="media/noctua-hero-loop.mp4" type="video/mp4" />
          </video>
          {!img9Missing ? (
            <img
              className="hero__img-mobile"
              src="media/noctua-hero-9x16.png"
              alt="Box nocturno Vitacura con puente elevador y haz ámbar"
              loading="eager"
              decoding="async"
              onError={() => setImg9Missing(true)}
            />
          ) : (
            <div className="media-falta" data-falta="noctua-hero-9x16.png">
              Falta media: noctua-hero-9x16.png
            </div>
          )}
        </>
      ) : (
        <>
          {!img16Missing ? (
            <img
              className="hero__img-desktop"
              src="media/noctua-hero-16x9.png"
              alt="Box nocturno Vitacura con puente elevador vacío bajo luz cenital fría y haz ámbar barriendo neumático"
              loading="eager"
              decoding="async"
              onError={() => {
                console.warn("[NOCTUA] Falta media: noctua-hero-16x9.png");
                setImg16Missing(true);
              }}
            />
          ) : (
            <div className="media-falta" data-falta="noctua-hero-16x9.png">
              Falta media: noctua-hero-16x9.png
            </div>
          )}

          {!img9Missing ? (
            <img
              className="hero__img-mobile"
              src="media/noctua-hero-9x16.png"
              alt="Box nocturno Vitacura con puente elevador y haz ámbar en vertical"
              loading="eager"
              decoding="async"
              onError={() => {
                console.warn("[NOCTUA] Falta media: noctua-hero-9x16.png");
                setImg9Missing(true);
              }}
            />
          ) : (
            <div className="media-falta" data-falta="noctua-hero-9x16.png">
              Falta media: noctua-hero-9x16.png
            </div>
          )}
        </>
      )}

      {img16Missing && !img9Missing ? (
        <div className="media-falta" data-falta="noctua-hero-16x9.png" style={{ display: "none" } as React.CSSProperties} aria-hidden="true">
          Falta media: noctua-hero-16x9.png
        </div>
      ) : null}
      {img9Missing && !img16Missing ? (
        <div className="media-falta" data-falta="noctua-hero-9x16.png" style={{ display: "none" } as React.CSSProperties} aria-hidden="true">
          Falta media: noctua-hero-9x16.png
        </div>
      ) : null}
    </>
  );
}

function Hero() {
  return (
    <section id="cochera" aria-label="Cochera nocturna — hero">
      <div className="hero__media" aria-hidden="true">
        <HeroMedia />
      </div>

      <div className="hero__overlay">
        <div className="hero__copy">
          <p className="hero__kicker reveal">VITACURA — COCHERA NOCTURNA · INSPECCIÓN HASTA LAS 21:30</p>
          <h1 className="hero__title reveal reveal-2">Seminuevos revisados bajo luz fría, listos para firmar sin letra chica hoy.</h1>
          <p className="hero__sub reveal reveal-3">
            Cada auto se levanta en el box. Ves el informe de 180 puntos antes de preguntar precio. Si no está disponible, no está
            publicado.
          </p>

          <div className="hero__ctas">
            <a href="#stock-revisado" className="hero__cta-primary">
              Ver stock revisado con precio real
            </a>
            <a href="#agenda-noctua" className="hero__cta-secondary">
              Agendar inspección en box
            </a>
          </div>

          <div className="hero__banda" aria-label="Banda honesta">
            <span className="hero__banda-item">
              <span className="hero__banda-dot" aria-hidden="true" /> 180 puntos en elevador
            </span>
            <span className="hero__banda-item">
              <span className="hero__banda-dot" aria-hidden="true" /> Autofact + papeles a la vista
            </span>
            <span className="hero__banda-item">
              <span className="hero__banda-dot" aria-hidden="true" /> Transferencia en el día
            </span>
          </div>

          <p className="hero__micro">
            No pedimos reserva para mostrar. Comisión 0% comprador. Transferencia $189.000 + IVA. Crédito con pie desde 15% sujeto a
            evaluación.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- helpers for media falta ----
function MediaImg({ src, alt, className, ratioClass, fallbackFile }: { src: string; alt: string; className?: string; ratioClass?: string; fallbackFile: string; }) {
  const [missing, setMissing] = useState(false);
  if (missing) return <div className={`media-falta ${ratioClass ?? ""} ${className ?? ""}`} data-falta={fallbackFile}>Falta media: {fallbackFile}</div>;
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" onError={() => { console.warn(`[NOCTUA] Falta media: ${fallbackFile}`); setMissing(true); }} />;
}

// ---- stock data literal ----
type Auto = { id: number; marca: string; modelo: string; title: string; year: number; km: string; caja: "Mec" | "Aut" | "CVT"; comb: "Bencina" | "Diésel"; duenos: string; precio: string; precioNum: number; pie: string; estado: "DISPONIBLE" | "RESERVADO"; };
const AUTOS: Auto[] = [
  { id: 1, marca: "Suzuki", modelo: "Swift", title: "Suzuki Swift 1.2 GL Mec 2021", year: 2021, km: "45.000 km", caja: "Mec", comb: "Bencina", duenos: "1 dueño", precio: "$8.990.000", precioNum: 8990000, pie: "$1.348.500", estado: "DISPONIBLE" },
  { id: 2, marca: "Suzuki", modelo: "Baleno", title: "Suzuki Baleno 1.4 GLX CVT 2021", year: 2021, km: "38.200 km", caja: "CVT", comb: "Bencina", duenos: "1 dueño", precio: "$9.850.000", precioNum: 9850000, pie: "$1.477.500", estado: "DISPONIBLE" },
  { id: 3, marca: "Hyundai", modelo: "Tucson", title: "Hyundai Tucson 2.0 Aut 2020", year: 2020, km: "71.000 km", caja: "Aut", comb: "Bencina", duenos: "2 dueños", precio: "$15.900.000", precioNum: 15900000, pie: "$2.385.000", estado: "DISPONIBLE" },
  { id: 4, marca: "Jeep", modelo: "Compass", title: "Jeep Compass 2.4 Limited Aut 2022", year: 2022, km: "48.600 km", caja: "Aut", comb: "Bencina", duenos: "1 dueño", precio: "$17.200.000", precioNum: 17200000, pie: "$2.580.000", estado: "DISPONIBLE" },
  { id: 5, marca: "Toyota", modelo: "Hilux", title: "Toyota Hilux 2.4 4x4 Mec Diésel 2021", year: 2021, km: "89.000 km", caja: "Mec", comb: "Diésel", duenos: "1 dueño", precio: "$18.900.000", precioNum: 18900000, pie: "$2.835.000", estado: "DISPONIBLE" },
  { id: 6, marca: "Mazda", modelo: "CX-5", title: "Mazda CX-5 2.0 Core Aut 2022", year: 2022, km: "62.400 km", caja: "Aut", comb: "Bencina", duenos: "1 dueño", precio: "$19.500.000", precioNum: 19500000, pie: "$2.925.000", estado: "DISPONIBLE" },
  { id: 7, marca: "Mazda", modelo: "CX-30", title: "Mazda CX-30 2.0 GT Aut 2022", year: 2022, km: "41.800 km", caja: "Aut", comb: "Bencina", duenos: "1 dueño", precio: "$20.800.000", precioNum: 20800000, pie: "$3.120.000", estado: "DISPONIBLE" },
  { id: 8, marca: "BMW", modelo: "320i", title: "BMW 320i 2.0 Aut 2020", year: 2020, km: "58.300 km", caja: "Aut", comb: "Bencina", duenos: "2 dueños", precio: "$21.500.000", precioNum: 21500000, pie: "$3.225.000", estado: "DISPONIBLE" },
];

function StockRevisado() {
  const [marca, setMarca] = useState("Todas");
  const [anio, setAnio] = useState("Todos");
  const [caja, setCaja] = useState("Todas");
  const [precio, setPrecio] = useState("Todos");
  const [mapMissing, setMapMissing] = useState(false);

  const filtered = AUTOS.filter((a) => {
    if (marca !== "Todas" && a.marca !== marca) return false;
    if (anio !== "Todos" && String(a.year) !== anio) return false;
    if (caja !== "Todas" && a.caja !== caja) return false;
    if (precio === "Hasta $12M" && a.precioNum > 12000000) return false;
    if (precio === "Hasta $18M" && a.precioNum > 18000000) return false;
    if (precio === "Hasta $25M" && a.precioNum > 25000000) return false;
    return true;
  });

  return (
    <section id="stock-revisado" className="section">
      <div className="grid">
        {/* header col 1-12 */}
        <div className="stock__header">
          <p className="kicker">STOCK REAL · 8 AUTOS HOY · COCHERA VITACURA</p>
          <h2 className="h2">Filtra por caja, km y ve el precio con transferencia</h2>
          <p className="intro">
            Todo lo publicado está disponible para ver hoy con papeles y Autofact. Si se reserva, sale del listado en el día. Precio CLP
            con transferencia separada.
          </p>
        </div>

        <div className="stock__filters" role="toolbar" aria-label="Filtros de stock">
          <div className="stock__filters-selects">
            <label className="stock__select-wrap">
              <span className="sr-only">Marca</span>
              <select value={marca} onChange={(e) => setMarca(e.target.value)} aria-label="Filtrar por marca">
                <option>Todas</option>
                <option>Toyota</option>
                <option>Mazda</option>
                <option>Hyundai</option>
                <option>BMW</option>
                <option>Suzuki</option>
                <option>Jeep</option>
              </select>
            </label>
            <label className="stock__select-wrap">
              <span className="sr-only">Año</span>
              <select value={anio} onChange={(e) => setAnio(e.target.value)} aria-label="Filtrar por año">
                <option value="Todos">Año</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </label>
            <label className="stock__select-wrap">
              <span className="sr-only">Caja</span>
              <select value={caja} onChange={(e) => setCaja(e.target.value)} aria-label="Filtrar por caja">
                <option value="Todas">Caja</option>
                <option value="Mec">Mec</option>
                <option value="Aut">Aut</option>
                <option value="CVT">CVT</option>
              </select>
            </label>
            <label className="stock__select-wrap">
              <span className="sr-only">Precio</span>
              <select value={precio} onChange={(e) => setPrecio(e.target.value)} aria-label="Filtrar por precio">
                <option value="Todos">Precio</option>
                <option>Hasta $12M</option>
                <option>Hasta $18M</option>
                <option>Hasta $25M</option>
              </select>
            </label>
          </div>
          <span className="stock__counter">
            {filtered.length} autos · 5 con revisión hoy · 3 con crédito pre-aprobado
          </span>
        </div>

        {/* mapa col 1-5 */}
        <div className="stock__mapa">
          {!mapMissing ? (
            <img
              src="media/noctua-mapa-4x3.png"
              alt="Trazado cochera Vitacura — Lo Barnechea"
              className="stock__mapa-img"
              loading="lazy"
              decoding="async"
              onError={() => { console.warn("[NOCTUA] Falta media: noctua-mapa-4x3.png"); setMapMissing(true); }}
            />
          ) : (
            <div className="media-falta stock__mapa-falta" data-falta="noctua-mapa-4x3.png">Falta media: noctua-mapa-4x3.png</div>
          )}
          <p className="img-caption">Trazado cochera · Vitacura — Lo Barnechea · sin pins genéricos</p>
        </div>

        {/* grilla col 6-12 */}
        <div className="stock__grid">
          {filtered.map((a, i) => (
            <article key={a.id} className="ficha" style={{ animationDelay: `${i * 40}ms` } as React.CSSProperties}>
              <div className="ficha__top">
                <span className="ficha__marca">{a.marca.toUpperCase()}</span>
                <span className="ficha__year">{a.year}</span>
                <span className="ficha__estado">
                  <span className={`ficha__dot ${a.estado === "RESERVADO" ? "ficha__dot--res" : ""}`} aria-hidden="true" /> {a.estado}
                </span>
              </div>
              <h3 className="ficha__title">{a.title}</h3>
              <p className="ficha__datos">
                {a.km} · {a.caja} · {a.comb} · {a.duenos} · Revisión al día
              </p>
              <p className="ficha__precio">{a.precio}</p>
              <p className="ficha__sub">+ transferencia $189.000 · pie desde {a.pie} (15%)</p>
              <a href="#chequeo-180" className="ficha__cta">
                Ver ficha + informe 180
              </a>
            </article>
          ))}
          {filtered.length === 0 ? (
            <p className="ficha__empty">Sin resultados con esos filtros. Prueba ampliar el rango.</p>
          ) : null}
          <p className="stock__nota">
            Valores referenciales CLP; se confirma tras inspección en box. Autofact y certificado de anotaciones a la vista. Sin reserva
            previa para mostrar. Comisión 0% comprador.
          </p>
        </div>
      </div>
    </section>
  );
}

function Chequeo180() {
  const [tallerMissing, setTallerMissing] = useState(false);
  return (
    <section id="chequeo-180" className="section">
      <div className="grid chequeo__grid">
        <div className="chequeo__media">
          {!tallerMissing ? (
            <img
              src="media/noctua-taller-4x3.png"
              alt="Box 1 luz cenital 5600K puente Rotary"
              className="chequeo__img"
              loading="lazy"
              decoding="async"
              onError={() => { console.warn("[NOCTUA] Falta media: noctua-taller-4x3.png"); setTallerMissing(true); }}
            />
          ) : (
            <div className="media-falta chequeo__img-falta" data-falta="noctua-taller-4x3.png">Falta media: noctua-taller-4x3.png</div>
          )}
          <p className="img-caption img-caption--right">Box 1 · luz cenital 5600K · puente Rotary · Vitacura</p>
        </div>
        <div className="chequeo__content">
          <p className="kicker">PROTOCOLO NOCTUA 180</p>
          <h2 className="h2">Cada auto se levanta. 180 puntos, sin maquillaje.</h2>
          <p className="intro">
            No vendemos lo que no levantaríamos para nuestra familia. Scanner, elevador y ruta de 15 km. El informe es tuyo impreso.
          </p>

          <div className="chequeo__bloques">
            <div className="chequeo__bloque" style={{ animationDelay: "0ms" } as React.CSSProperties}>
              <p className="chequeo__bloque-title">01 · Mecánica en elevador</p>
              <p className="chequeo__bloque-text">Fugas, cuna, suspensión, frenos, neumáticos y bajos. Fotos del puente incluidas.</p>
            </div>
            <div className="chequeo__bloque" style={{ animationDelay: "40ms" } as React.CSSProperties}>
              <p className="chequeo__bloque-title">02 · Scanner + compresión + ruta</p>
              <p className="chequeo__bloque-text">OBD2, compresión por cilindro, prueba en frío y ruta de 15 km. Sin humo, sin ruidos escondidos.</p>
            </div>
            <div className="chequeo__bloque" style={{ animationDelay: "80ms" } as React.CSSProperties}>
              <p className="chequeo__bloque-title">03 · Papeles y chasis</p>
              <p className="chequeo__bloque-text">Autofact, anotaciones, multas, prendas, VIN y chasis a la vista. Informe impreso con fotos.</p>
            </div>
          </div>

          <ul className="chequeo__checklist" aria-label="Checklist de entrega">
            <li><span className="chequeo__check" aria-hidden="true">✓</span> Informe 180 impreso con fotos del elevador</li>
            <li><span className="chequeo__check" aria-hidden="true">✓</span> Scanner OBD2 y compresión por cilindro</li>
            <li><span className="chequeo__check" aria-hidden="true">✓</span> Prueba de ruta 15 km con acta</li>
            <li><span className="chequeo__check" aria-hidden="true">✓</span> Autofact + CAV a la vista</li>
            <li><span className="chequeo__check" aria-hidden="true">✓</span> Garantía escrita 90 días motor/caja</li>
          </ul>

          <p className="chequeo__inline">Chequeo 180 incluido en el precio — no se cobra aparte. Si no pasa, no se publica. Transferencia $189.000 aparte.</p>
        </div>
      </div>
    </section>
  );
}

function FinanciaYPapeles() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "¿Puedo dejar mi auto en parte de pago?",
      a: "Sí, lo tasamos en el box con informe 180 y valor por escrito. Si lo traes lavado, la tasación es más rápida. No castigamos por detalles menores.",
    },
    {
      q: "¿Qué papeles traigo?",
      a: "Carnet, licencias anteriores, certificado de anotaciones (lo sacamos nosotros si prefieres) y comprobante de domicilio. Autofact listo.",
    },
    {
      q: "¿Cuánto demora la transferencia?",
      a: "Mismo día si llegas antes de las 15:00. Registro Civil electrónico o notaría. Padrón a tu nombre y llaves con copia.",
    },
  ];
  return (
    <section id="financia-y-papeles" className="section">
      <div className="grid">
        <div className="financia__header">
          <p className="kicker">CÓMO PAGAS Y TRANSFIERES</p>
          <h2 className="h2">Pie desde 15%, aprobación en horas. Transferencia en el día.</h2>
          <p className="intro">
            Te decimos cuota real antes de firmar. Sin globo, sin letra chica. Transferencia electrónica en Registro Civil o notaría, a tu
            elección.
          </p>
        </div>

        {/* tabla desktop */}
        <div className="financia__tabla-wrap" role="table" aria-label="Comparativa de financiamiento">
          <div className="financia__tabla">
            <div className="financia__th" role="columnheader"></div>
            <div className="financia__th" role="columnheader">CONTADO</div>
            <div className="financia__th" role="columnheader">CRÉDITO TRADICIONAL</div>
            <div className="financia__th" role="columnheader">CRÉDITO INTELIGENTE</div>

            <div className="financia__tdlabel">Pie</div>
            <div className="financia__td">100%</div>
            <div className="financia__td">Desde 15% ($1.34M)</div>
            <div className="financia__td">Desde 20%</div>

            <div className="financia__tdlabel">Plazo</div>
            <div className="financia__td">—</div>
            <div className="financia__td">12–48 meses</div>
            <div className="financia__td">12–36 + cuotón</div>

            <div className="financia__tdlabel">CAE ref</div>
            <div className="financia__td">—</div>
            <div className="financia__td">Desde 0,89% mensual*</div>
            <div className="financia__td">Desde 0,95% mensual*</div>

            <div className="financia__tdlabel">Transferencia</div>
            <div className="financia__td">$189.000 en el día</div>
            <div className="financia__td">$189.000 en el día</div>
            <div className="financia__td">$189.000 en el día</div>

            <div className="financia__tdlabel">Entrega</div>
            <div className="financia__td">Inmediata</div>
            <div className="financia__td">Aprobación 2–4h</div>
            <div className="financia__td">Aprobación 2–4h</div>
          </div>
          <p className="financia__nota">* CAE depende de banco y pie. Simulación por escrito antes de reservar. Sin comisiones ocultas.</p>
        </div>

        {/* cards mobile — misma info */}
        <div className="financia__cards">
          <div className="financia__card">
            <p className="financia__card-title">CONTADO</p>
            <p><strong>Pie</strong> 100%</p><p><strong>Plazo</strong> —</p><p><strong>CAE ref</strong> —</p><p><strong>Transferencia</strong> $189.000 en el día</p><p><strong>Entrega</strong> Inmediata</p>
          </div>
          <div className="financia__card">
            <p className="financia__card-title">CRÉDITO TRADICIONAL</p>
            <p><strong>Pie</strong> Desde 15% ($1.34M)</p><p><strong>Plazo</strong> 12–48 meses</p><p><strong>CAE ref</strong> Desde 0,89% mensual*</p><p><strong>Transferencia</strong> $189.000 en el día</p><p><strong>Entrega</strong> Aprobación 2–4h</p>
          </div>
          <div className="financia__card">
            <p className="financia__card-title">CRÉDITO INTELIGENTE</p>
            <p><strong>Pie</strong> Desde 20%</p><p><strong>Plazo</strong> 12–36 + cuotón</p><p><strong>CAE ref</strong> Desde 0,95% mensual*</p><p><strong>Transferencia</strong> $189.000 en el día</p><p><strong>Entrega</strong> Aprobación 2–4h</p>
          </div>
          <p className="financia__nota">* CAE depende de banco y pie. Simulación por escrito antes de reservar. Sin comisiones ocultas.</p>
        </div>

        <div className="financia__acordeon" role="list">
          {faqs.map((f, i) => (
            <div key={i} className={`financia__acordeon-item ${open === i ? "is-open" : ""}`} role="listitem">
              <button
                type="button"
                className="financia__acordeon-q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span className="financia__acordeon-icon" aria-hidden="true">{open === i ? "—" : "+"}</span>
              </button>
              <div className="financia__acordeon-a" hidden={open !== i}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="financia__simulacion">
          <p className="financia__simulacion-kicker">EJEMPLO REAL · MAZDA CX-5 $19.500.000</p>
          <p className="financia__simulacion-fila">
            Pie $2.925.000 (15%) · 48 cuotas de $398.400* · CAE 18,2% · Costo total $22.048.200
          </p>
          <p className="financia__simulacion-nota">Cuota incluye seguro desgravamen. Sin globo. Simulación referencial; se confirma con RUT.</p>
        </div>
      </div>
    </section>
  );
}

function BoxNoctua() {
  const [proofMissing, setProofMissing] = useState(false);
  const tiles = [
    { file: "noctua-tile-01-1x1.png", title: "Puente y luz cenital", text: "Luz 5600K pareja. Se ve cada fuga, cada soldadura. Fotos incluidas en el informe.", meta: "Rotary 3.5T · 5600K", ratio: "1:1" },
    { file: "noctua-tile-02-3x4.png", title: "Haz ámbar", text: "Lámpara de inspección 3200K barriendo neumático, llanta y bajos. Sin maquillaje.", meta: "3200K · 180 puntos", ratio: "3:4" },
    { file: "noctua-tile-03-1x1.png", title: "Panel perforado", text: "Cada herramienta en su silueta. Orden de hangar, no de vitrina.", meta: "Orden hangar", ratio: "1:1" },
    { file: "noctua-tile-04-3x4.png", title: "Vidrio empañado", text: "Vidrio que devuelve la avenida como línea ámbar. Adentro, acero y silencio.", meta: "Vitacura 22:00", ratio: "3:4" },
  ];
  const [tilesMissing, setTilesMissing] = useState<Record<string, boolean>>({});
  return (
    <section id="box-noctua" className="section">
      <div className="grid">
        <div className="box__header">
          <p className="kicker">EL BOX NOCTUA</p>
          <h2 className="h2">Cochera pequeña, revisión obsesiva</h2>
          <p className="intro">Atendemos con hora. Un auto a la vez en el elevador. Sin vendedores en bandada.</p>
        </div>

        <div className="box__tiles">
          {tiles.map((t, i) => (
            <div key={t.file} className="box__tile" style={{ animationDelay: `${i * 40}ms` } as React.CSSProperties}>
              <div className={`box__tile-media ${t.ratio === "3:4" ? "box__tile-media--34" : "box__tile-media--11"}`}>
                {!tilesMissing[t.file] ? (
                  <img
                    src={`media/${t.file}`}
                    alt={t.title}
                    loading="lazy"
                    decoding="async"
                    onError={() => { console.warn(`[NOCTUA] Falta media: ${t.file}`); setTilesMissing((p) => ({ ...p, [t.file]: true })); }}
                  />
                ) : (
                  <div className="media-falta" data-falta={t.file}>Falta media: {t.file}</div>
                )}
              </div>
              <h3 className="box__tile-title">{t.title}</h3>
              <p className="box__tile-text">{t.text}</p>
              <p className="box__tile-meta">{t.meta}</p>
            </div>
          ))}
        </div>

        <p className="box__proof-line">9 años en Vitacura · +1.240 autos revisados · 4,8/5 en Google · 1 box, 1 auto a la vez</p>

        <div className="box__proof">
          {!proofMissing ? (
            <img
              src="media/noctua-proof-16x9.png"
              alt="Carpeta NOCTUA Autofact + informe 180"
              loading="lazy"
              decoding="async"
              onError={() => { console.warn("[NOCTUA] Falta media: noctua-proof-16x9.png"); setProofMissing(true); }}
            />
          ) : (
            <div className="media-falta box__proof-falta" data-falta="noctua-proof-16x9.png">Falta media: noctua-proof-16x9.png</div>
          )}
          <p className="img-caption">Carpeta NOCTUA · Autofact + informe 180 + CAV · lista para firmar</p>
        </div>
      </div>
    </section>
  );
}

function AgendaNoctua() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [auto, setAuto] = useState("");
  const [fecha, setFecha] = useState("");
  const [detalle, setDetalle] = useState("");
  const [wsp, setWsp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [interiorMissing, setInteriorMissing] = useState(false);

  const validate = () => {
    if (!nombre.trim()) return "Ingresa tu nombre.";
    if (!tel.trim()) return "Ingresa tu teléfono.";
    // pattern +56
    const telRe = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    if (!telRe.test(tel.trim())) return "Tel debe ser formato +56 9 1234 5678.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Email no válido.";
    return null;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) { setError(v); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const payload = { nombre, tel, email, auto, fecha, detalle, wsp, date: new Date().toISOString() };
      try { localStorage.setItem("noctua_agenda", JSON.stringify(payload)); } catch { /* ignore */ }
      const msg = `Hola NOCTUA, quiero ver el ${auto || "auto"} — soy ${nombre} (${tel})`;
      const wa = `https://wa.me/56954159299?text=${encodeURIComponent(msg)}`;
      // open wa or mailto
      if (wsp) window.open(wa, "_blank");
      else window.location.href = `mailto:hola@noctua.cl?subject=Agenda%20inspección%20NOCTUA&body=${encodeURIComponent(msg + (detalle ? "\n" + detalle : ""))}`;
    }, 900);
  };

  return (
    <section id="agenda-noctua" className="section">
      <div className="grid agenda__grid">
        <div className="agenda__left">
          <p className="kicker">AGENDA NOCTUA</p>
          <h2 className="h2">Agenda tu inspección. Te responden hoy.</h2>
          <p className="intro">Elige hora y te confirmamos por WhatsApp en el día. Si es urgencia, llama directo y te damos hora real en box.</p>

          <form className="agenda__form" onSubmit={onSubmit} noValidate>
            <label className="agenda__field">
              <span className="agenda__label">Nombre *</span>
              <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required aria-required="true" />
            </label>
            <label className="agenda__field">
              <span className="agenda__label">Teléfono *</span>
              <input type="tel" placeholder="+56 9 1234 5678" value={tel} onChange={(e) => setTel(e.target.value)} required aria-required="true" pattern="\+56 9 [0-9 ]+" />
            </label>
            <label className="agenda__field">
              <span className="agenda__label">Email</span>
              <input type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="agenda__field">
              <span className="agenda__label">Auto de interés</span>
              <select value={auto} onChange={(e) => setAuto(e.target.value)}>
                <option value="">Selecciona</option>
                <option>Suzuki Swift 2021 $8.99M</option>
                <option>Suzuki Baleno 2021 $9.85M</option>
                <option>Hyundai Tucson 2020 $15.9M</option>
                <option>Jeep Compass 2022 $17.2M</option>
                <option>Toyota Hilux 2021 $18.9M</option>
                <option>Mazda CX-5 2022 $19.5M</option>
                <option>Mazda CX-30 2022 $20.8M</option>
                <option>BMW 320i 2020 $21.5M</option>
                <option>Otro / aún no decido</option>
              </select>
            </label>
            <label className="agenda__field">
              <span className="agenda__label">Fecha / hora preferida</span>
              <select value={fecha} onChange={(e) => setFecha(e.target.value)}>
                <option value="">Selecciona</option>
                <option>Hoy tarde</option>
                <option>Mañana mañana</option>
                <option>Mañana tarde</option>
                <option>Esta semana noche (hasta 21:30)</option>
              </select>
            </label>
            <label className="agenda__field agenda__field--full">
              <span className="agenda__label">Detalle</span>
              <textarea placeholder="¿Dejas auto en parte de pago? ¿Financiamiento?" rows={3} value={detalle} onChange={(e) => setDetalle(e.target.value)} />
            </label>
            <label className="agenda__check">
              <input type="checkbox" checked={wsp} onChange={(e) => setWsp(e.target.checked)} />
              <span>Acepto que me contacten por WhatsApp</span>
            </label>

            {error ? <p className="agenda__error" role="alert">{error}</p> : null}
            {success ? <p className="agenda__success" role="status"><span className="agenda__success-check" aria-hidden="true">✓</span> Te escribimos hoy · revisa tu WhatsApp</p> : null}

            <button type="submit" className="agenda__submit" disabled={loading}>
              {loading ? "Enviando…" : "Agendar inspección en box"}
            </button>
          </form>
        </div>

        <div className="agenda__right">
          <a href="tel:+56954159299" className="agenda__tel">+56 9 5415 9299</a>
          <a href="mailto:hola@noctua.cl" className="agenda__email">hola@noctua.cl</a>
          <p className="agenda__dir">Av. Vitacura 6830, Vitacura, Santiago — cochera interior, con hora</p>
          <p className="agenda__horario">Lun–Vie 10:00–19:30 · Sáb 10:00–14:00 · Inspecciones hasta 21:30 con hora</p>

          <div className="agenda__img-wrap">
            {!interiorMissing ? (
              <img
                src="media/noctua-interior-16x9.png"
                alt="Box NOCTUA interior"
                loading="lazy"
                decoding="async"
                onError={() => { console.warn("[NOCTUA] Falta media: noctua-interior-16x9.png"); setInteriorMissing(true); }}
              />
            ) : (
              <div className="media-falta" data-falta="noctua-interior-16x9.png">Falta media: noctua-interior-16x9.png</div>
            )}
            <p className="img-caption">Box NOCTUA · luz fría + ámbar · Vitacura</p>
          </div>

          <p className="agenda__nota">
            Valores referenciales; el valor final se confirma tras inspección en box. Sin sorpresas. Comisión 0% comprador. Transferencia y crédito sujetos a evaluación.
          </p>
        </div>
      </div>
    </section>
  );
}

function StickyCtas() {
  // barra bottom fija 56px móvil solo
  return (
    <div className="sticky-cta" aria-label="Acciones rápidas">
      <a href="#agenda-noctua" className="sticky-cta__primary">Agendar inspección</a>
      <a href="#stock-revisado" className="sticky-cta__ghost">Ver stock</a>
      <a href="tel:+56954159299" className="sticky-cta__tel" aria-label="Llamar +56 9 5415 9299">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.48.45 2.94.97 4.32a2 2 0 0 1-.57 2.07l-1.5 1.5a14.08 14.08 0 0 0 5.07 5.07l1.5-1.5a2 2 0 0 1 2.07-.57c1.38.52 2.84.85 4.32.97A2 2 0 0 1 22 16.92z" /></svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="grid footer__grid">
        <span>© 2026 NOCTUA · Cochera nocturna Vitacura · Av. Vitacura 6830</span>
        <span>Transferencia $189.000 · Chequeo 180 incluido · Comisión 0% comprador</span>
      </div>
    </footer>
  );
}

export function App() {
  useEffect(() => {
    const files = ["noctua-hero-16x9.png", "noctua-hero-9x16.png", "noctua-hero-loop.mp4"];
    files.forEach(async (f) => {
      try {
        const r = await fetch(`media/${f}`, { method: "HEAD" });
        if (!r.ok && f !== "noctua-hero-loop.mp4") console.warn(`[NOCTUA] Falta media: ${f}`);
        if (r.ok && f === "noctua-hero-loop.mp4") console.log(`[NOCTUA] video disponible: ${f}`);
      } catch {
        if (f !== "noctua-hero-loop.mp4") console.warn(`[NOCTUA] Falta media: ${f}`);
      }
    });
  }, []);

  return (
    <>
      <a
        href="#cochera"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        onFocus={(e) => {
          const t = e.currentTarget as HTMLAnchorElement;
          t.style.left = "12px";
          t.style.top = "12px";
          t.style.width = "auto";
          t.style.height = "auto";
          t.style.background = "#E8A838";
          t.style.color = "#0B0F14";
          t.style.padding = "8px 12px";
          t.style.zIndex = "999";
        }}
        onBlur={(e) => {
          const t = e.currentTarget as HTMLAnchorElement;
          t.style.left = "-9999px";
          t.style.width = "1px";
          t.style.height = "1px";
        }}
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main-concesionaria-noctua-oscuro">
        <Hero />
        <StockRevisado />
        <Chequeo180 />
        <FinanciaYPapeles />
        <BoxNoctua />
        <AgendaNoctua />
      </main>
      <Footer />
      <StickyCtas />
    </>
  );
}
