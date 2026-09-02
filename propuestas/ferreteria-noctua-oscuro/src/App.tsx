import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

// ── NAV (EXACTO BUILD-01) ──
const NAV = [
  { label: "Catálogo", href: "#catalogo-bodega" },
  { label: "Estantería", href: "#estanteria" },
  { label: "Despacho", href: "#despacho-obra" },
  { label: "Ficha", href: "#ficha-tecnica" },
  { label: "Bodega", href: "#bodega-real" },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const onChange = () => setReduced(m.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// ── HEADER — NO TOCAR (EXACT BUILD-01) ──
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <div className="header-left">
            <a href="#galpon" className="logo-block" aria-label="NOCTUA inicio">
              <span className="logo-noctua">NOCTUA</span>
              <span className="logo-sub">Ferretería industrial · Santiago — desde 2009</span>
            </a>
            <nav className="nav-desktop" aria-label="Principal">
              {NAV.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="header-right">
            <div className="header-tel">
              <a href="tel:+56982345561">+56 9 8234 5561</a>
              <span>WhatsApp bodega</span>
            </div>
            <a href="#cotiza-noctua" className="btn-cotizar">
              Cotizar ahora
            </a>
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
      </header>
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="mobile-panel-top">
            <span className="logo-noctua">NOCTUA</span>
            <button className="btn-close" aria-label="Cerrar menú" onClick={() => setOpen(false)} type="button">
              ✕
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Móvil">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mobile-panel-tel">
            <span>WhatsApp bodega</span>
            <a href="tel:+56982345561">+56 9 8234 5561</a>
            <a href="#cotiza-noctua" className="btn-cotizar" onClick={() => setOpen(false)}>
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// ── HERO — NO TOCAR (EXACT BUILD-01) ──
function HeroBand() {
  const reduced = useReducedMotion();
  const [missing16, setMissing16] = useState(false);
  const [missing9, setMissing9] = useState(false);
  const [useVideo, setUseVideo] = useState(false);
  useEffect(() => {
    const check = async (file: string) => {
      try {
        const r = await fetch(`media/${file}`, { method: "HEAD" });
        return r.ok;
      } catch {
        return false;
      }
    };
    check("noctua-hero-16x9.png").then((ok) => {
      if (!ok) {
        console.warn("[NOCTUA] Falta media: noctua-hero-16x9.png");
        setMissing16(true);
      }
    });
    check("noctua-hero-9x16.png").then((ok) => {
      if (!ok) {
        console.warn("[NOCTUA] Falta media: noctua-hero-9x16.png");
        setMissing9(true);
      }
    });
    check("noctua-hero-loop.mp4").then((ok) => {
      if (ok) {
        console.log("[NOCTUA] noctua-hero-loop.mp4 disponible — usando video");
        setUseVideo(true);
      } else {
        console.log("[NOCTUA] noctua-hero-loop.mp4 no disponible — se usa imagen");
      }
    });
  }, []);
  const bandInitial = reduced ? false : { y: -12, opacity: 0 };
  const bandAnimate = reduced ? {} : { y: 0, opacity: 1 };
  return (
    <div className="hero-band-wrap">
      <motion.div
        initial={bandInitial as never}
        animate={bandAnimate as never}
        transition={reduced ? { duration: 0 } : { duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", height: "100%" }}
      >
        {useVideo && !missing16 ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="media/noctua-hero-16x9.png"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setUseVideo(false)}
          >
            <source src="media/noctua-hero-loop.mp4" type="video/mp4" />
          </video>
        ) : (
          <picture style={{ width: "100%", height: "100%", display: "block" }}>
            <source media="(max-width: 640px)" srcSet={missing9 ? undefined : "media/noctua-hero-9x16.png"} />
            {!missing16 ? (
              <img
                src="media/noctua-hero-16x9.png"
                alt=""
                role="presentation"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={() => {
                  console.warn("[NOCTUA] Falta media: noctua-hero-16x9.png");
                  setMissing16(true);
                }}
              />
            ) : (
              <div
                className="media-falta"
                data-falta="noctua-hero-16x9.png"
                style={{
                  border: "1px solid var(--line)",
                  aspectRatio: "16/9",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--muted)",
                  font: "12px IBM Plex Sans",
                  width: "100%",
                  height: "100%",
                  background: "var(--bg-2)",
                }}
              >
                Falta: noctua-hero-16x9.png
              </div>
            )}
          </picture>
        )}
        {missing16 && missing9 && (
          <div
            className="media-falta"
            data-falta="noctua-hero-9x16.png"
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid var(--line)",
              display: "grid",
              placeItems: "center",
              color: "var(--muted)",
              font: "12px IBM Plex Sans",
              background: "var(--bg-2)",
            }}
          >
            Falta: noctua-hero-9x16.png / noctua-hero-16x9.png
          </div>
        )}
      </motion.div>
      <div className="hero-floating" aria-label="Ahora en bodega">
        <p className="hero-floating-title">Ahora en bodega</p>
        <p className="hero-floating-row">Pasillo 04 · Pernos y fijaciones — 312 cajas</p>
        <div className="hero-stock-bar" aria-hidden="true">
          <span className="hero-stock-seg filled" />
          <span className="hero-stock-seg filled" />
          <span className="hero-stock-seg filled" />
          <span className="hero-stock-seg" style={{ opacity: 0.5 }} />
        </div>
        <p className="hero-floating-leyenda">Actualizado hoy 14:30</p>
      </div>
    </div>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="galpon" className="hero-galpon" aria-label="Galpón nocturno">
      <HeroBand />
      <div className="hero-filete" aria-hidden="true" />
      <div className="hero-copy">
        <div className="container">
          <div className="hero-copy-inner">
            <motion.p
              className="kicker"
              initial={reduced ? false : { opacity: 0 }}
              animate={reduced ? {} : { opacity: 1 }}
              transition={reduced ? { duration: 0 } : { duration: 0.18, delay: 0.1, ease: "linear" }}
            >
              <span className="kicker-dot" aria-hidden="true" />
              Galpón nocturno — Vicuña Mackenna 1370 · abierto hasta 20:00
            </motion.p>
            <motion.h1
              className="hero-h1"
              initial={reduced ? false : { opacity: 0 }}
              animate={reduced ? {} : { opacity: 1 }}
              transition={reduced ? { duration: 0 } : { duration: 0.18, delay: 0.18, ease: "linear" }}
            >
              Bodega abierta hasta tarde. Fierro, perno y plancha. <span>Sin vuelta.</span>
            </motion.h1>
            <p className="hero-bajada">
              Estantería real, no catálogo infinito. Si está en la web, está en la estantería. Pides hoy, despachamos hoy en
              Santiago. Retiro en 30 min.
            </p>
            <div className="hero-ctas">
              <a href="#cotiza-noctua" className="btn-primary">
                Cotiza por WhatsApp — respuesta hoy
              </a>
              <a href="#catalogo-bodega" className="btn-secondary">
                Ver catálogo desde $2.490
              </a>
            </div>
            <p className="hero-micro">Stock en vivo. Si dice &apos;retiro inmediato&apos;, está en Vicuña Mackenna.</p>
            <p className="hero-prueba">
              1.240 SKUs con stock <span className="sep">·</span> despacho hoy RM <span className="sep">·</span> retiro 30 min
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── helpers media ──
function MediaImg({
  filename,
  alt,
  className,
  style,
}: {
  filename: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [falta, setFalta] = useState(false);
  if (falta) {
    return (
      <div className="media-falta" data-falta={filename} style={{ border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--muted)", font: "11px IBM Plex Sans", background: "var(--bg-2)", minHeight: 120, ...style } as React.CSSProperties}>
        Falta: {filename}
      </div>
    );
  }
  return (
    <img
      src={`media/${filename}`}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => {
        console.warn(`[NOCTUA] Falta media: ${filename}`);
        setFalta(true);
      }}
    />
  );
}

// ── #catalogo-bodega ──
function CatalogoBodega() {
  const wa = (text: string) => `https://wa.me/56982345561?text=${encodeURIComponent(text)}`;
  return (
    <section id="catalogo-bodega" className="sec-catalogo">
      <div className="container">
        <div className="sec-header">
          <p className="kicker"><span className="kicker-dot" aria-hidden="true" /> Catálogo bodega — stock real — precios hoy</p>
          <div className="filete-amarillo" aria-hidden="true" />
          <h2 className="h2">Lo que hay. Con precio. Sin humo.</h2>
          <p className="bajada">
            Pack pensado para obra y mantención, no para vitrina. Valores referenciales con IVA; se confirma al cotizar por
            WhatsApp según largo y terminación.
          </p>
        </div>

        <div className="packs-grid">
          {/* Pack1 */}
          <div className="pack pack-1">
            <p className="pack-label">Pack obra chica — retiro hoy</p>
            <p className="pack-nombre">Fijación base</p>
            <p className="pack-precio">$42.900</p>
            <p className="pack-desde">desde · 100 pernos + tarugo + broca 6mm</p>
            <ul className="pack-bullets">
              <li>— Pernos hex 1/4 x 2&quot; zincado (100 u)</li>
              <li>— Tarugo nylon 6mm (100 u)</li>
              <li>— Broca concreto 6 x 100mm</li>
            </ul>
            <span className="pack-tag">Stock: 84 packs</span>
            <a className="pack-cta" href={wa("Hola NOCTUA, quiero cotizar Pack FIJACIÓN BASE $42.900")}>
              Cotizar este pack — WhatsApp
            </a>
          </div>

          {/* Pack2 destacado */}
          <div className="pack pack-2">
            <div className="pack-ribete" aria-hidden="true" />
            <p className="pack-label">Pack contratista — el que más sale</p>
            <p className="pack-nombre">OSB + Fijación</p>
            <p className="pack-precio">$89.900</p>
            <p className="pack-desde">desde · 2 planchas OSB 11mm + fijación completa</p>
            <ul className="pack-bullets">
              <li>— 2 planchas OSB 11mm 1,22x2,44</li>
              <li>— Tornillo OSB 6x1&quot; (200 u)</li>
              <li>— Despacho RM incluido hasta 40 km</li>
            </ul>
            <span className="pack-pill">Despacho hoy</span>
            <a className="pack-cta pack-cta-accent" href={wa("Hola NOCTUA, quiero cotizar Pack OSB + FIJACIÓN $89.900")}>
              Cotizar contratista — WhatsApp
            </a>
            <p className="pack-nota">Trimestral obra: 4 packs $84.900 c/u</p>
          </div>

          {/* Pack3 */}
          <div className="pack pack-3">
            <p className="pack-label">Plancha + perfil — a medida</p>
            <p className="pack-nombre">Perfil y plancha</p>
            <p className="pack-precio pack-precio-sm">$124.900</p>
            <p className="pack-desde">desde · perfil 40x40x2mm 6m + plancha diamantada 3mm</p>
            <ul className="pack-bullets">
              <li>— Perfil tubular 40x40x2mm (1 tira 6m)</li>
              <li>— Plancha diamantada 3mm 1x2m</li>
              <li>— Corte a medida incluido</li>
            </ul>
            <a className="pack-cta" href={wa("Hola NOCTUA, quiero cotizar Pack PERFIL Y PLANCHA $124.900")}>
              Cotizar este pack — WhatsApp
            </a>
            <p className="pack-nota">Retiro con camión propio o despacho $18.000</p>
          </div>
        </div>

        <div className="tabla-wrap">
          <table className="tabla-comparativa" aria-label="Comparativa servicios">
            <thead>
              <tr>
                <th></th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Despacho RM</td>
                <td>Hoy si cotizas antes 14:00 — $12.900 / gratis sobre $150.000</td>
              </tr>
              <tr>
                <td>Retiro bodega</td>
                <td>30 min — Vicuña Mackenna 1370</td>
              </tr>
              <tr>
                <td>Corte a medida</td>
                <td>Incluido en perfil/plancha — 24h</td>
              </tr>
              <tr>
                <td>Factura</td>
                <td>Con IVA y guía</td>
              </tr>
            </tbody>
          </table>
          <p className="tabla-nota">Valores referenciales con IVA; se confirman al cotizar. No incluye instalación.</p>
        </div>
      </div>
    </section>
  );
}

// ── #estanteria ──
function Estanteria() {
  return (
    <section id="estanteria" className="sec-estanteria">
      <div className="container">
        <div className="sec-header estanteria-header">
          <p className="kicker">Estantería — 1.240 SKUs — pasillo 01 a 08</p>
          <h2 className="h2">Cada pasillo, una familia. Sin perder tiempo.</h2>
          <p className="bajada">Fijaciones, planchas, perfiles, herramientas y EPP. Todo rotulado, todo a mano. Te decimos pasillo y caja.</p>
        </div>

        <div className="est-grid">
          <a className="tile tile-3-4" href="#cotiza-noctua">
            <div className="tile-media">
              <MediaImg filename="noctua-tile-01-3x4.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="tile-text">
              <p className="tile-label">Pasillo 01 — Fijaciones</p>
              <p className="tile-title">Pernos, tuercas, golillas, tarugos</p>
              <p className="tile-spec">M4 a M16 · zincado / inox · caja 50/100 u</p>
            </div>
          </a>
          <a className="tile tile-3-4" href="#cotiza-noctua">
            <div className="tile-media">
              <MediaImg filename="noctua-tile-02-3x4.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="tile-text">
              <p className="tile-label">Pasillo 02 — Planchas</p>
              <p className="tile-title">OSB, terciado, diamantada, zinc</p>
              <p className="tile-spec">Cortes 1,22x2,44 · hasta 18mm</p>
            </div>
          </a>
          <a className="tile tile-3-4" href="#cotiza-noctua">
            <div className="tile-media">
              <MediaImg filename="noctua-tile-03-3x4.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="tile-text">
              <p className="tile-label">Pasillo 03 — Perfiles</p>
              <p className="tile-title">Tubular, ángulo, canal, pletina</p>
              <p className="tile-spec">40x40 a 100x100 · 2 a 3mm · tira 6m</p>
            </div>
          </a>
          <a className="tile tile-3-4" href="#cotiza-noctua">
            <div className="tile-media">
              <MediaImg filename="noctua-tile-04-1x1.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="tile-text">
              <p className="tile-label">Pasillo 04 — Herramientas</p>
              <p className="tile-title">Manuales, eléctricas, discos</p>
              <p className="tile-spec">Martillo a rotomartillo · discos 4 1/2 a 9&quot;</p>
            </div>
          </a>
          <a className="tile tile-4-3 tile-wide" href="#cotiza-noctua">
            <div className="tile-media">
              <MediaImg filename="noctua-interior-16x9.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="tile-text">
              <p className="tile-label">Pasillo 06 — EPP — casco / guantes / lentes</p>
              <p className="tile-title tile-title-lg">Seguridad real, no cotillón</p>
              <p className="tile-spec">Certificado · talla S a XL</p>
            </div>
          </a>
          <a className="tile tile-4-3 tile-wide" href="#cotiza-noctua">
            <div className="tile-media">
              <MediaImg filename="noctua-proof-16x9.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="tile-text">
              <p className="tile-label">Granel — a peso — desde $2.490/kg</p>
              <p className="tile-title tile-title-lg">Perno a granel cuando necesitas 8, no 100</p>
              <p className="tile-spec">Pesaje en balanza bodega · bolsa etiquetada</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── #despacho-obra ──
function DespachoObra() {
  return (
    <section id="despacho-obra" className="sec-despacho">
      <div className="container">
        <div className="despacho-left">
          <p className="kicker kicker-accent">Despacho obra — hoy mismo</p>
          <h2 className="h2 h2-despacho">Si lo pides antes de las 14:00, sale hoy.</h2>
          <ul className="despacho-bullets">
            <li>— RM $12.900 / gratis sobre $150.000 (hasta 40 km)</li>
            <li>— Retiro bodega en 30 min — te avisamos por WhatsApp</li>
            <li>— Corte y dimensionado en 24 h (perfil/plancha)</li>
            <li>— Guía y factura al tiro, con IVA incluido</li>
          </ul>
          <p className="despacho-nota">Valores referenciales con IVA; se confirma al cotizar. No incluye instalación ni descarga con grúa.</p>
        </div>
        <div className="despacho-right">
          <div className="despacho-card">
            <p className="despacho-card-title">¿Cómo funciona?</p>
            <ol className="despacho-pasos">
              <li>01 Cotizas por WhatsApp (foto o lista)</li>
              <li>02 Confirmamos stock y valor cerrado</li>
              <li>03 Pagas transferencia / link</li>
              <li>04 Despachamos o retiras con QR</li>
            </ol>
            <a className="btn-primary btn-full" href="https://wa.me/56982345561?text=Hola%20NOCTUA,%20quiero%20cotizar%20despacho">
              Cotizar despacho — WhatsApp
            </a>
            <p className="despacho-micro">Vicuña Mackenna 1370, La Florida — lun a vie 8:30–20:00, sáb 9:00–16:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #ficha-tecnica ──
function FichaTecnica() {
  return (
    <section id="ficha-tecnica" className="sec-ficha">
      <div className="container">
        <div className="ficha-col ficha-spec">
          <p className="kicker">Ficha técnica — sin humo</p>
          <h2 className="h2 h2-sm">Medida, terminación y stock. Nada más.</h2>
          <div className="spec-table">
            <div className="spec-row">
              <span className="spec-key">Perno hex 1/4 x 2&quot;</span>
              <span className="spec-val">Zincado · hilo UNC · caja 100 u · origen importado</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Plancha OSB 11mm</span>
              <span className="spec-val">1,22x2,44 · APA · stock 48 u</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Perfil 40x40x2mm</span>
              <span className="spec-val">Tira 6m · corte a medida · stock 22 tiras</span>
            </div>
            <p className="spec-nota">Todo con guía. Si no hay stock, te proponemos equivalente y valor cerrado antes de pagar.</p>
          </div>
        </div>

        <div className="ficha-col ficha-horario">
          <p className="kicker">Bodega — horario — acceso</p>
          <ul className="horario-list">
            <li><span className="dot" aria-hidden="true" /> Lun a vie 8:30–20:00</li>
            <li><span className="dot" aria-hidden="true" /> Sábado 9:00–16:00</li>
            <li><span className="dot" aria-hidden="true" /> Domingo cerrado</li>
          </ul>
          <p className="ficha-dir">
            Vicuña Mackenna 1370, La Florida — a 4 cuadras de Metro Vicente Valdés. Portón gris, letrero amarillo NOCTUA.
          </p>
          <a className="link-mapa" href="https://maps.google.com/?q=Vicu%C3%B1a+Mackenna+1370+La+Florida" target="_blank" rel="noopener noreferrer">Ver en mapa</a>
        </div>

        <div className="ficha-col ficha-numeros">
          <div className="numeros-card">
            <p className="numeros-kicker">NOCTUA en números</p>
            <div className="stats">
              <div><p className="stat-num">1.240 SKUs</p><p className="stat-label">con stock hoy</p></div>
              <div><p className="stat-num">15 años</p><p className="stat-label">en bodega</p></div>
              <div><p className="stat-num stat-num-sm">4,5/5 · 218 reseñas Google</p><p className="stat-label">verificadas</p></div>
            </div>
            <p className="numeros-nota">Reseñas verificables en Google — no usamos fotos de stock con caras</p>
          </div>
          <div className="proof-img-wrap">
            <MediaImg filename="noctua-proof-16x9.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #bodega-real ──
function BodegaReal() {
  return (
    <section id="bodega-real" className="sec-bodega">
      <div className="container">
        <div className="bodega-head">
          <p className="kicker">Bodega real — no render — foto de hoy</p>
          <h2 className="h2 h2-bodega">Así se ve la estantería. No más, no menos.</h2>
          <p className="bajada">Foto tomada esta semana en Vicuña Mackenna. Si vienes, ves lo mismo. Orden por pasillo, rótulo amarillo, piso barrido.</p>
        </div>
        <div className="bodega-hero-media">
          <MediaImg filename="noctua-interior-16x9.png" alt="Pasillo 01–04 — fijaciones y planchas" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p className="bodega-caption">Pasillo 01–04 — fijaciones y planchas — foto 27 ago 2026, 19:40</p>
        <div className="bodega-tiles">
          <div className="tile tile-3-4">
            <div className="tile-media"><MediaImg filename="noctua-tile-01-3x4.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          </div>
          <div className="tile tile-3-4">
            <div className="tile-media"><MediaImg filename="noctua-tile-02-3x4.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          </div>
          <div className="tile tile-square">
            <div className="tile-media"><MediaImg filename="noctua-tile-03-3x4.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #cotiza-noctua + form ──
type FormState = {
  nombre: string;
  whatsapp: string;
  email: string;
  tipo: string;
  retiro: string;
  fecha: string;
  lista: string;
  acepto: boolean;
};

function CotizaNoctua() {
  const [form, setForm] = useState<FormState>({ nombre: "", whatsapp: "", email: "", tipo: "Obra", retiro: "Despacho RM", fecha: "", lista: "", acepto: false });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // load localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("noctua_cotiza_2026");
      if (raw) setForm((prev) => ({ ...prev, ...JSON.parse(raw) }));
    } catch { /* ignore */ }
    console.log("[NOCTUA] checklist secciones: #galpon ✓ #catalogo-bodega ✓ #estanteria ✓ #despacho-obra ✓ #ficha-tecnica ✓ #bodega-real ✓ #cotiza-noctua ✓ header ✓ footer ✓");
  }, []);

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (form.nombre.trim().length < 2) e.nombre = "Nombre mínimo 2 caracteres";
    const waClean = form.whatsapp.replace(/\D/g, "");
    // acepta 569... (11 dígitos), 569 sin +, o 9 + 8 dígitos (9 dígitos)
    const waRegex = /^(?:\+?56)?\s*9\s*\d{8}$/;
    const waOk = waRegex.test(form.whatsapp.trim()) || (waClean.length === 11 && waClean.startsWith("569")) || (waClean.length === 9 && waClean.startsWith("9"));
    if (!waOk) e.whatsapp = "WhatsApp: +56 9 + 8 dígitos (ej: +56 9 8234 5561)";
    if (form.fecha) {
      const today = new Date(); today.setHours(0, 0, 0, 0);
      const sel = new Date(form.fecha + "T00:00:00");
      if (sel < today) e.fecha = "Fecha no puede ser pasada";
    }
    if (form.lista.trim().length < 6) e.lista = "Lista mínima 6 caracteres";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      localStorage.setItem("noctua_cotiza_2026", JSON.stringify(form));
    } catch { /* ignore */ }
    // simulación envío + wa fallback
    const text = `Hola NOCTUA, quiero cotizar: ${form.lista} Mi retiro es ${form.retiro} y lo necesito para ${form.fecha || "a convenir"}. Nombre: ${form.nombre} ${form.email ? "(" + form.email + ")" : ""}`;
    const waUrl = `https://wa.me/56982345561?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      setStatus("success");
      // abrir wa en nueva pestaña tras success (no bloquea si user gesture? lo dejamos a click en link)
      window.open(waUrl, "_blank", "noopener");
    }, 700);
  };

  const waPrefill = `https://wa.me/56982345561?text=${encodeURIComponent(`Hola NOCTUA, quiero cotizar: ${form.lista || "___"} Mi retiro es ${form.retiro} y lo necesito para ${form.fecha || "___"}.`)}`;

  return (
    <section id="cotiza-noctua" className="sec-cotiza">
      <div className="container">
        <div className="cotiza-copy">
          <p className="kicker kicker-accent">Cotiza — WhatsApp bodega</p>
          <h2 className="h2 h2-cotiza">Manda tu lista. Te respondemos hoy.</h2>
          <p className="bajada">Foto de tu lista, audio o texto. Te devolvemos valor cerrado con stock y despacho. Sin formulario eterno.</p>
          <p className="cotiza-tel">+56 9 8234 5561</p>
          <a className="btn-primary" href="https://wa.me/56982345561?text=Hola%20NOCTUA,%20quiero%20cotizar" target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a>
          <p className="cotiza-micro">Respuesta lun–vie 8:30–20:00, sáb 9:00–16:00 — fuera de horario te llega al día siguiente 9:00</p>
        </div>

        <div className="cotiza-form-wrap">
          <form className="cotiza-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="field field-full">
                <label htmlFor="f-nombre">Nombre</label>
                <input id="f-nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre" required />
                {errors.nombre && <span className="field-error">{errors.nombre}</span>}
              </div>

              <div className="field">
                <label htmlFor="f-wa">WhatsApp (+56 9 ____) *</label>
                <input id="f-wa" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+56 9 8234 5561" required inputMode="tel" />
                {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
              </div>

              <div className="field">
                <label htmlFor="f-email">Email (opcional)</label>
                <input id="f-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.cl" />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="field">
                <label htmlFor="f-tipo">Tipo pedido</label>
                <select id="f-tipo" value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })}>
                  <option>Obra</option>
                  <option>Mantención</option>
                  <option>Empresa</option>
                  <option>Particular</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="f-retiro">Retiro</label>
                <select id="f-retiro" value={form.retiro} onChange={(e) => setForm({ ...form, retiro: e.target.value })}>
                  <option>Despacho RM</option>
                  <option>Retiro bodega</option>
                  <option>Envío regiones por pagar</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="f-fecha">Fecha necesaria</label>
                <input id="f-fecha" type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} />
                {errors.fecha && <span className="field-error">{errors.fecha}</span>}
              </div>

              <div className="field field-full">
                <label htmlFor="f-lista">Lista *</label>
                <textarea id="f-lista" rows={4} value={form.lista} onChange={(e) => setForm({ ...form, lista: e.target.value })} placeholder="Ej: 20 pernos 1/4x2 zinc, 2 OSB 11mm, 1 perfil 40x40x2 6m — o sube foto por WhatsApp" required />
                {errors.lista && <span className="field-error">{errors.lista}</span>}
              </div>
            </div>

            <label className="check-row">
              <input type="checkbox" checked={form.acepto} onChange={(e) => setForm({ ...form, acepto: e.target.checked })} />
              <span>Acepto que me contacten por WhatsApp para cerrar la cotización — <a href="#" onClick={(e) => e.preventDefault()}>privacidad</a></span>
            </label>

            {status === "success" && (
              <div className="form-success" role="status">
                Listo. Te escribimos hoy al WhatsApp que dejaste. Si no ves mensaje, escribe directo al +56 9 8234 5561.
                <br />
                <a href={waPrefill} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline", marginTop: 8, display: "inline-block" }}>
                  Abrir WhatsApp con tu lista
                </a>
              </div>
            )}
            {status === "error" && Object.keys(errors).length > 0 && (
              <div className="form-error" role="alert">
                Revisa los campos marcados.
              </div>
            )}
            {status === "error" && Object.keys(errors).length === 0 && (
              <div className="form-error" role="alert">
                No se pudo enviar. Prueba por WhatsApp directo.
              </div>
            )}

            <button type="submit" className="btn-submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <span className="spinner" aria-hidden="true" /> Enviando…
                </>
              ) : (
                "Cotizar — Enviar por WhatsApp"
              )}
            </button>
            {status === "error" && (
              <a className="fallback-wa" href={waPrefill} target="_blank" rel="noopener noreferrer">
                O escribe directo por WhatsApp →
              </a>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-left">
          <span className="logo-noctua logo-footer">NOCTUA</span>
          <p className="footer-dir">Ferretería industrial — Vicuña Mackenna 1370</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#catalogo-bodega">Catálogo</a>
          <a href="#estanteria">Estantería</a>
          <a href="#despacho-obra">Despacho</a>
          <a href="#cotiza-noctua">Cotizar</a>
        </nav>
        <div className="footer-right">
          <p>© 2026 NOCTUA · Vicuña Mackenna 1370, La Florida · +56 9 8234 5561 · Valores referenciales con IVA</p>
          <p className="hecho">Hecho por Órbita</p>
        </div>
      </div>
    </footer>
  );
}

function BottomBar() {
  const [show, setShow] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = document.getElementById("galpon");
    if (!el) { setShow(true); return; }
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // mostrar cuando hero no está visible (scrolled past)
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  if (!show) return null;
  return (
    <div className="bottom-bar" role="complementary" aria-label="Acciones rápidas">
      <a className="bottom-btn bottom-btn-accent" href="https://wa.me/56982345561?text=Hola%20NOCTUA" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a className="bottom-btn bottom-btn-ghost" href="#cotiza-noctua">
        Cotizar $42.900
      </a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CatalogoBodega />
        <Estanteria />
        <DespachoObra />
        <FichaTecnica />
        <BodegaReal />
        <CotizaNoctua />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
}
