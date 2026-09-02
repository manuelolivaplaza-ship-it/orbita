import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, animate } from "framer-motion";

const MEDIA = {
  hero16: "/media/abasto-hero-16x9.png",
  hero9: "/media/abasto-hero-9x16.png",
  heroLoop: "/media/abasto-hero-loop.mp4",
  tile01: "/media/abasto-tile-01-1x1.png",
  tile02: "/media/abasto-tile-02-3x4.png",
  tile03: "/media/abasto-tile-03-1x1.png",
  interior: "/media/abasto-interior-16x9.png",
  proof: "/media/abasto-proof-16x9.png",
};

function useMediaExists(src: string) {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    if (src.endsWith(".mp4")) {
      fetch(src, { method: "HEAD" })
        .then((r) => { if (!cancelled) setOk(r.ok); })
        .catch(() => { if (!cancelled) setOk(false); });
      return () => { cancelled = true; };
    }
    const img = new Image();
    img.onload = () => { if (!cancelled) setOk(true); };
    img.onerror = () => { if (!cancelled) setOk(false); };
    img.src = src;
    return () => { cancelled = true; };
  }, [src]);
  return ok;
}

function MediaFalta({ filename, aspect }: { filename: string; aspect?: string }) {
  useEffect(() => { console.warn(`Falta: ${filename}`); }, [filename]);
  return (
    <div
      className="media-falta"
      data-falta={filename}
      style={{
        border: "1px solid var(--line)",
        aspectRatio: aspect ?? "16/9",
        display: "grid",
        placeItems: "center",
        color: "var(--muted)",
        font: "12px IBM Plex Sans, system-ui, sans-serif",
        background: "var(--surface)",
      }}
    >
      Falta: {filename}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const hero = document.getElementById("hero-abasto");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
        setShowStickyBar(y > heroBottom - 88 || y > 88 && y > 400);
      } else {
        setShowStickyBar(y > 88);
      }
    };
    let lastY = window.scrollY;
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (Math.abs(y - lastY) > 8) {
            onScroll();
            lastY = y;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <header
        className="site-header"
        style={{
          height: scrolled ? "56px" : undefined,
          transition: "height 200ms ease",
        }}
      >
        <div className="header-inner">
          <a href="#" className="header-wordmark" aria-label="ABASTO inicio">
            <span className="header-wordmark__logo">ABASTO</span>
            <span className="header-wordmark__sub">MINIMAYORISTA · BODEGA RM</span>
          </a>

          <nav className="header-nav" aria-label="Navegación principal">
            <a href="#lista-mayorista">Lista</a>
            <a href="#condiciones-abasto">Cuenta</a>
            <a href="#cobertura-bodega">Cobertura</a>
            <a href="#cotizacion-lote">Cotizar</a>
          </nav>

          <div className="header-actions">
            <a href="tel:+56228489100" className="header-phone" aria-label="Llamar +56 2 2848 9100">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2.2 1.2h1.8l1.1 2.4-1.4 1.4c.6 1.2 1.6 2.2 2.8 2.8l1.4-1.4 2.4 1.1v1.8c0 .5-.4.9-.9.9C5.1 10.2 1.8 6.9 1.8 2.6c0-.5.4-.9.9-.9h-.5z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
              </svg>
              <span>+56 2 2848 9100</span>
            </a>
            <a href="#lista-mayorista" className="header-cta">Pedir lista</a>
            <button
              className="header-hamburger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`sheet-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} aria-hidden={!open} />
      <div className={`sheet ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Menú">
        <button className="sheet-close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
        <nav className="sheet-nav">
          <a href="#lista-mayorista" onClick={() => setOpen(false)}>Lista mayorista</a>
          <a href="#condiciones-abasto" onClick={() => setOpen(false)}>Cuenta corriente</a>
          <a href="#cobertura-bodega" onClick={() => setOpen(false)}>Cobertura bodega</a>
          <a href="#cotizacion-lote" onClick={() => setOpen(false)}>Cotizar lote</a>
        </nav>
        <a href="#lista-mayorista" className="sheet-cta" onClick={() => setOpen(false)}>Pedir lista</a>
      </div>

      <div className={`mobile-sticky-cta ${showStickyBar ? "visible" : ""}`} aria-hidden={!showStickyBar}>
        <a href="#lista-mayorista" className="mobile-sticky-cta__btn">Pedir lista</a>
        <a href="tel:+56228489100" className="mobile-sticky-cta__llamar">Llamar</a>
      </div>
    </>
  );
}

function Hero() {
  const hero16Exists = useMediaExists(MEDIA.hero16);
  const hero9Exists = useMediaExists(MEDIA.hero9);
  const heroLoopExists = useMediaExists(MEDIA.heroLoop);
  const canvasRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const missing: string[] = [];
    if (hero16Exists === false) missing.push("abasto-hero-16x9.png");
    if (hero9Exists === false) missing.push("abasto-hero-9x16.png");
    if (heroLoopExists === false) missing.push("abasto-hero-loop.mp4");
    if (missing.length) {
      console.warn("[ABASTO] Media faltante:", missing.join(", "));
    }
  }, [hero16Exists, hero9Exists, heroLoopExists]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    if (canvasRef.current) {
      animate(
        canvasRef.current,
        { scale: [1.02, 1] },
        { duration: 0.28, ease: "easeOut" }
      );
    }
    if (kickerRef.current) {
      animate(
        kickerRef.current,
        { opacity: [0, 1], y: [8, 0] },
        { duration: 0.32, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] as const }
      );
    }
    if (h1Ref.current) {
      const lines = h1Ref.current.querySelectorAll("span");
      animate(
        lines,
        { opacity: [0, 1], y: [12, 0] },
        { duration: 0.32, delay: 0.18, ease: [0.22, 0.61, 0.36, 1] as const }
      );
    }
  }, []);

  const hasAnyHero = hero16Exists !== false || hero9Exists !== false;

  return (
    <section id="hero-abasto" className="hero" aria-label="Hero ABASTO">
      <div className="hero-grid">
        <div className="hero-canvas-wrap">
          <div ref={canvasRef} className="hero-canvas">
            {hasAnyHero ? (
              <>
                {heroLoopExists ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={hero16Exists ? MEDIA.hero16 : undefined}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  >
                    <source src={MEDIA.heroLoop} type="video/mp4" />
                  </video>
                ) : null}
                <picture style={{ display: heroLoopExists ? "none" : "block", width: "100%", height: "100%" }}>
                  {hero9Exists && <source media="(max-width: 768px)" srcSet={MEDIA.hero9} />}
                  {hero16Exists && <img src={MEDIA.hero16} alt="Pallet monolito en bodega La Florida — luz cenital fría 4000K sobre losa de hormigón, racks bokeh al fondo" />}
                  {!hero16Exists && hero9Exists && <img src={MEDIA.hero9} alt="Pallet monolito vertical — bodega La Florida" />}
                </picture>
                {heroLoopExists && hero16Exists && (
                  <img
                    src={MEDIA.hero16}
                    alt=""
                    aria-hidden
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
                  />
                )}
              </>
            ) : (
              <MediaFalta filename="abasto-hero-16x9.png / abasto-hero-9x16.png" />
            )}
            <div className="hero-panel" aria-label="Ahora en bodega">
              <span className="hero-panel__dot" aria-hidden />
              <span className="hero-panel__text">• 1.240 SKUs · 94% con stock · Último pallet 09:42</span>
            </div>
          </div>
          <div className="hero-filete" aria-hidden />
        </div>

        <div className="hero-copy">
          <p ref={kickerRef} className="hero-kicker">BODEGA · LA FLORIDA · DESDE 2018</p>
          <h1 ref={h1Ref} className="hero-h1">
            <span>Precio por manga.</span>
            <span>Retiro hoy.</span>
            <span className="accent">Despacho mañana.</span>
          </h1>
          <p className="hero-bajada">
            Minimayorista para almacén, botillería y food service. Venta por manga, pack y caja. Sin carrito: lista clara, mínimo bajo. IVA incluido.
          </p>
          <div className="hero-ctas">
            <a href="#lista-mayorista" className="btn-primary">Pedir lista mayorista</a>
            <a href="#cotizacion-lote" className="btn-ghost">Cotizar lote por WhatsApp</a>
          </div>
          <p className="hero-micro">La Florida · Lun–Sáb 8:00–18:30 · +56 2 2848 9100 · pedido mínimo $49.990</p>
          <div className="hero-banda">Retiro 30 min Av. La Florida 9600 · Despacho RM hoy si pides antes de 14:00 · Regiones 24–48h · Boleta y factura</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- #lista-mayorista ---------- */

type Row = {
  id: number;
  sku: string;
  sub: string;
  unidad: string;
  equiv: string;
  minimo: string;
  minimoPrecio: string;
  despacho: "HOY RM" | "24H REGIONES";
  precio: string;
  precioDetalle: string;
  familia: string;
  thumb?: string;
};

const ROWS: Row[] = [
  { id: 1, sku: "ARROZ TUCAPEL 1KG", sub: "Manga 10 · Grado 1", unidad: "manga", equiv: "10×1kg", minimo: "1 manga", minimoPrecio: "· mínimo $13.990", despacho: "HOY RM", precio: "$13.990", precioDetalle: "manga · $1.399 c/u", familia: "Abarrotes", thumb: MEDIA.tile01 },
  { id: 2, sku: "AZÚCAR IANSA 1KG", sub: "Manga 10 · Blanca", unidad: "manga", equiv: "10×1kg", minimo: "1 manga", minimoPrecio: "· mínimo $12.900", despacho: "HOY RM", precio: "$12.900", precioDetalle: "manga · $1.290 c/u", familia: "Abarrotes" },
  { id: 3, sku: "ACEITE MIRAFLORES 900ML", sub: "Caja 12 · Maravilla", unidad: "caja", equiv: "12×900ml", minimo: "1 caja", minimoPrecio: "· mínimo $23.880", despacho: "HOY RM", precio: "$23.880", precioDetalle: "caja · $1.990 c/u", familia: "Abarrotes", thumb: MEDIA.tile02 },
  { id: 4, sku: "HARINA SELECTA 1KG", sub: "Manga 10 · Sin polvos", unidad: "manga", equiv: "10×1kg", minimo: "1 manga", minimoPrecio: "· mínimo $11.500", despacho: "24H REGIONES", precio: "$11.500", precioDetalle: "manga · $1.150 c/u", familia: "Abarrotes" },
  { id: 5, sku: "FIDEOS CAROZZI 400G", sub: "Pack 12 · Spaghetti", unidad: "pack", equiv: "12×400g", minimo: "1 pack", minimoPrecio: "· mínimo $11.880", despacho: "HOY RM", precio: "$11.880", precioDetalle: "pack 12 · $990 c/u", familia: "Abarrotes" },
  { id: 6, sku: "LECHE SUR LAT 1L", sub: "Caja 12 · Entera", unidad: "caja", equiv: "12×1L", minimo: "1 caja", minimoPrecio: "· mínimo $13.800", despacho: "HOY RM", precio: "$13.800", precioDetalle: "caja · $1.150 c/u", familia: "Lácteos" },
  { id: 7, sku: "ATÚN ROBINSON 170G", sub: "Pack 12 · Agua", unidad: "pack", equiv: "12×170g", minimo: "1 pack", minimoPrecio: "· mínimo $14.400", despacho: "HOY RM", precio: "$14.400", precioDetalle: "pack 12 · $1.200 c/u", familia: "Abarrotes" },
  { id: 8, sku: "COCA-COLA 3L", sub: "Pack 6 · Desechable", unidad: "pack", equiv: "6×3L", minimo: "1 pack", minimoPrecio: "· mínimo $11.400", despacho: "HOY RM", precio: "$11.400", precioDetalle: "pack 6 · $1.900 c/u", familia: "Líquidos", thumb: MEDIA.tile03 },
  { id: 9, sku: "PAPEL CONFORT 22M", sub: "Manga 20 rollos · Doble hoja", unidad: "manga", equiv: "20×22m", minimo: "1 manga", minimoPrecio: "· mínimo $9.990", despacho: "HOY RM", precio: "$9.990", precioDetalle: "manga", familia: "Aseo" },
  { id: 10, sku: "DETERGENTE OMO 3KG", sub: "Saco 1 · Matic", unidad: "saco", equiv: "1×3kg", minimo: "1 saco", minimoPrecio: "· mínimo $8.990", despacho: "24H REGIONES", precio: "$8.990", precioDetalle: "saco", familia: "Aseo" },
  { id: 11, sku: "YOGURT SOPROLE 120G", sub: "Pack 24 · Surtido", unidad: "pack", equiv: "24×120g", minimo: "1 pack", minimoPrecio: "· mínimo $9.900", despacho: "HOY RM", precio: "$9.900", precioDetalle: "pack 24 · $413 c/u", familia: "Lácteos" },
  { id: 12, sku: "CAFÉ NESCAFÉ 170G", sub: "Caja 12 · Tradición", unidad: "caja", equiv: "12×170g", minimo: "1 caja", minimoPrecio: "· mínimo $38.400", despacho: "24H REGIONES", precio: "$38.400", precioDetalle: "caja · $3.200 c/u", familia: "Abarrotes" },
];

const FAMILIAS = ["Todo", "Abarrotes", "Líquidos", "Aseo", "Lácteos"] as const;

function ListaMayorista() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [familia, setFamilia] = useState<string>("Todo");
  const t01Exists = useMediaExists(MEDIA.tile01);
  const t02Exists = useMediaExists(MEDIA.tile02);
  const t03Exists = useMediaExists(MEDIA.tile03);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 120);
    return () => clearTimeout(t);
  }, [query]);

  const filtered = ROWS.filter((r) => {
    const byFam = familia === "Todo" || r.familia === familia;
    const bySearch = !debounced || r.sku.toLowerCase().includes(debounced) || r.sub.toLowerCase().includes(debounced) || r.familia.toLowerCase().includes(debounced);
    return byFam && bySearch;
  });

  return (
    <section id="lista-mayorista" className="section-lista">
      <div className="section-inner">
        <div className="lista-header">
          <div className="lista-header-left">
            <p className="kicker">LISTA MAYORISTA · IVA INCLUIDO</p>
            <h2 className="h2">El precio está en la manga.</h2>
            <p className="bajada">Unidad de venta y mínimo impresos. Sin letra chica. Si el stock cambia, te avisamos antes de armar el pallet.</p>
          </div>
          <div className="lista-header-right">
            <input
              className="lista-buscador"
              type="search"
              placeholder="Buscar SKU · ej: arroz, aceite, confort"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar SKU"
            />
            <div className="lista-tabs" role="tablist" aria-label="Filtrar por familia">
              {FAMILIAS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={familia === f}
                  className={`lista-tab ${familia === f ? "active" : ""}`}
                  onClick={() => setFamilia(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className="lista-contador">1.240 SKUs · 18 familias</p>
          </div>
        </div>

        <div className="tabla-wrap">
          <div className="tabla-header">
            <span className="col-sku">SKU</span>
            <span className="col-unidad">Unidad</span>
            <span className="col-minimo">Mínimo</span>
            <span className="col-despacho">Despacho</span>
            <span className="col-precio">Precio manga</span>
          </div>
          <div className="tabla-body">
            {filtered.length === 0 ? (
              <p className="tabla-vacio">Sin resultados para “{query}”. Prueba con arroz, aceite o confort.</p>
            ) : (
              filtered.map((r) => (
                <div key={r.id} className="tabla-row">
                  <div className="col-sku">
                    <div className="sku-thumb-wrap">
                      {r.thumb ? (
                        (r.id === 1 && t01Exists) || (r.id === 3 && t02Exists) || (r.id === 8 && t03Exists) ? (
                          <img
                            className="sku-thumb"
                            src={r.thumb}
                            alt=""
                            aria-hidden
                            width={64}
                            height={64}
                            style={{ objectFit: "cover", border: "1px solid var(--line)", flexShrink: 0 }}
                          />
                        ) : r.thumb && ( (r.id===1 && t01Exists===false) || (r.id===3 && t02Exists===false) || (r.id===8 && t03Exists===false) ) ? (
                          <div className="media-falta thumb-falta" data-falta={r.thumb.split("/").pop()} style={{width:64,height:64,border:"1px solid var(--line)",display:"grid",placeItems:"center",fontSize:8,color:"var(--muted)",background:"var(--surface)"}}>Falta</div>
                        ) : null
                      ) : null}
                      <div>
                        <p className="sku-nombre">{r.sku}</p>
                        <p className="sku-sub">{r.sub}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-unidad">
                    <span className="unidad-main">{r.unidad}</span>
                    <span className="unidad-equiv">{r.equiv}</span>
                  </div>
                  <div className="col-minimo">
                    <span className="minimo-main">{r.minimo}</span>
                    <span className="minimo-precio">{r.minimoPrecio}</span>
                  </div>
                  <div className="col-despacho">
                    <span className={`tag-despacho ${r.despacho === "HOY RM" ? "tag-hoy" : "tag-regiones"}`}>{r.despacho}</span>
                  </div>
                  <div className="col-precio">
                    <span className="precio-main">{r.precio}</span>
                    <span className="precio-detalle">{r.precioDetalle}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Cards móvil */}
        <div className="cards-mobile">
          {filtered.map((r) => (
            <div key={r.id} className="card-mobile">
              <div className="card-mobile-top">
                <div>
                  <p className="sku-nombre">{r.sku}</p>
                  <p className="sku-sub">{r.sub}</p>
                </div>
                <span className="precio-main mobile-accent">{r.precio}</span>
              </div>
              <div className="card-mobile-tags">
                <span className="tag-pill">{r.unidad} · {r.equiv}</span>
                <span className="tag-pill accent-pill">{r.minimo} {r.minimoPrecio}</span>
                <span className={`tag-despacho ${r.despacho === "HOY RM" ? "tag-hoy" : "tag-regiones"}`}>{r.despacho}</span>
              </div>
              <p className="precio-detalle">{r.precioDetalle}</p>
            </div>
          ))}
        </div>

        <p className="lista-nota">Valores referenciales con IVA incluido; se confirma al cotizar. Stock variable por bodega. Despacho RM $3.990 gratis sobre $149.990.</p>

        <div className="lista-ctas">
          <a href="#cotizacion-lote" className="btn-ghost">Pedir lista completa en PDF</a>
          <a href="#cotizacion-lote" className="btn-primary">Cotizar estas 12 mangas</a>
        </div>
      </div>
    </section>
  );
}

function CondicionesCuenta() {
  const proofExists = useMediaExists(MEDIA.proof);
  return (
    <section id="condiciones-abasto" className="section-condiciones">
      <div className="section-inner">
        <div className="condiciones-grid">
          <div className="condiciones-intro">
            <h2 className="h2 h2--sm">Cuenta corriente y factura. Sin letra chica.</h2>
            <p className="bajada">Te abrimos cuenta en 24h con RUT y giro. Factura al día siguiente. Primer pedido contra transferencia; desde el segundo, plazo según historial.</p>
          </div>
          <div className="condiciones-cards">
            <div className="cc-card">
              <p className="kicker kicker--sm">CUENTA EMPRESA</p>
              <h3 className="cc-h3">RUT + giro + dirección</h3>
              <ul className="cc-list">
                <li>· Cabida según historial (desde $300.000)</li>
                <li>· Factura electrónica D+1</li>
                <li>· Estado de cuenta por WhatsApp</li>
              </ul>
            </div>
            <div className="cc-card">
              <p className="kicker kicker--sm">PLAZO</p>
              <h3 className="cc-h3">7 a 15 días</h3>
              {proofExists ? (
                <img src={MEDIA.proof} alt="" aria-hidden style={{width:48,height:48,objectFit:"cover",border:"1px solid var(--line)",margin:"8px 0"}} />
              ) : proofExists===false ? (
                <div className="media-falta" data-falta="abasto-proof-16x9.png" style={{width:48,height:48,border:"1px solid var(--line)",display:"grid",placeItems:"center",fontSize:8,color:"var(--muted)",background:"var(--bg)"}}>Falta</div>
              ) : null}
              <ul className="cc-list">
                <li>· Transferencia el día 7/15</li>
                <li>· Sin interés por 15 días</li>
                <li>· Bloqueo suave si te atrasas (aviso 48h)</li>
              </ul>
            </div>
            <div className="cc-card">
              <p className="kicker kicker--sm">PAGO CONTADO</p>
              <h3 className="cc-h3">5% dcto. transferencia</h3>
              <ul className="cc-list">
                <li>· Antes de las 14:00 armas hoy</li>
                <li>· Webpay y transferencia</li>
                <li>· Boleta inmediata</li>
              </ul>
            </div>
            <div className="cc-card">
              <p className="kicker kicker--sm">MÍNIMO</p>
              <h3 className="cc-h3">$49.990</h3>
              <ul className="cc-list">
                <li>· 1 manga o 1 pack</li>
                <li>· No pedimos pallet completo</li>
                <li>· Retiro sin mínimo</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="condiciones-micro">Giro sugerido: almacén, botillería, minimarket, food service. No vendemos a consumidor final por unidad.</p>
      </div>
    </section>
  );
}

function CoberturaBodega() {
  const interiorExists = useMediaExists(MEDIA.interior);
  return (
    <section id="cobertura-bodega" className="section-cobertura">
      <div className="section-inner">
        <div className="cobertura-grid">
          <div className="cobertura-text">
            <h2 className="h2 h2--sm">Bodega La Florida. Patio a la calle.</h2>
            <p className="bajada">Retiro en 30 min por Av. La Florida 9600, portón 3. Muelle techado, grúa y tote. Te cargamos el pallet filmado.</p>
            <ul className="cobertura-list">
              <li><span className="dot" aria-hidden /> Lun–Sáb 8:00–18:30 · Dom cerrado</li>
              <li><span className="dot" aria-hidden /> Retiro: 30 min desde que confirmas</li>
              <li><span className="dot" aria-hidden /> Despacho RM: hoy si pides antes de 14:00 ($3.990, gratis sobre $149.990)</li>
              <li><span className="dot" aria-hidden /> Regiones: 24–48h por Starken/Cruz del Sur (costo según kg/vol)</li>
            </ul>
          </div>
          <div className="cobertura-media">
            <div className="cobertura-foto-wrap">
              {interiorExists ? (
                <img src={MEDIA.interior} alt="Pasillo de racks en bodega La Florida — luz cenital fría, losa con junta, muelle al fondo" className="cobertura-foto" />
              ) : interiorExists === false ? (
                <MediaFalta filename="abasto-interior-16x9.png" aspect="16/9" />
              ) : (
                <div style={{height:360, background:"var(--surface)", border:"1px solid var(--line)"}} />
              )}
              <span className="cobertura-etiqueta">MUELLE 3 · LA FLORIDA</span>
            </div>
            <div className="cobertura-stats">
              <div className="cob-stat">
                <span className="cob-stat-num">34</span>
                <span className="cob-stat-label">RM 34 comunas</span>
              </div>
              <div className="cob-stat">
                <span className="cob-stat-num">V–X</span>
                <span className="cob-stat-label">Regiones V a X + RM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cobertura-comunas">
          La Florida · Puente Alto · La Pintana · Peñalolén · Macul · Ñuñoa · Santiago · Maipú · Pudahuel · San Bernardo · Quilicura · Renca · La Granja · El Bosque · San Miguel · La Cisterna · Cerrillos · Estación Central · Lo Espejo · Pedro Aguirre Cerda · San Ramón · La Reina · Las Condes · Providencia · Vitacura · Lo Barnechea · Huechuraba · Recoleta · Independencia · Conchalí · Quilicura · Renca...
        </div>
      </div>
    </section>
  );
}

function CotizacionLote() {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [comuna, setComuna] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [lista, setLista] = useState("");
  const [plazo, setPlazo] = useState(false);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    const e: Record<string,string> = {};
    if (nombre.trim().length < 3) e.nombre = "Mínimo 3 caracteres";
    // whatsapp required regex +56 9 dddd dddd (allow with/without spaces)
    const normalized = whatsapp.trim();
    // must match +56 9 xxxx xxxx — allow +569xxxxxxxx or +56 9 xxxx xxxx
    const re = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    // also accept tight +56912345678? Spec says regex +56 9 \d{4} \d{4} — enforce that shape but be lenient with spaces
    // We'll normalize: remove extra spaces, ensure starts with +56 9
    // Use strict: must be +56 9 + 8 digits with optional spaces
    const digitsOnly = normalized.replace(/\s/g,"");
    const reTight = /^\+569\d{8}$/;
    if (!re.test(normalized) && !reTight.test(digitsOnly)) e.whatsapp = "Formato: +56 9 1234 5678";
    if (lista.trim().length < 10) e.lista = "Mínimo 10 caracteres";
    if (!comuna) e.comuna = "Elige una opción";
    return e;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setLoading(true);
    setSuccess("");
    setTimeout(() => {
      setLoading(false);
      const msg = "Listo. Te mando el PDF por WhatsApp en 25 min. Si es urgente, llama +56 2 2848 9100.";
      setSuccess(msg);
      const payload = { nombre, rut, comuna, whatsapp, lista, plazo, ts: Date.now() };
      try { localStorage.setItem("abasto-lote", JSON.stringify(payload)); } catch {}
      const text = `Hola ABASTO, quiero cotizar lote: ${lista} — ${nombre} · ${comuna} · ${whatsapp}`;
      const url = `https://wa.me/56968421133?text=${encodeURIComponent(text)}`;
      const w = window.open(url, "_blank");
      if (!w) {
        window.location.href = `mailto:hola@abasto.cl?subject=Cotizar%20lote%20ABASTO&body=${encodeURIComponent(text)}`;
      }
    }, 1200);
  };

  return (
    <section id="cotizacion-lote" className="section-cotizacion">
      <div className="section-inner">
        <div className="cotizacion-grid">
          <div className="cotizacion-intro">
            <h2 className="h2">Cotiza tu lote. Te respondo con pallet y flete.</h2>
            <p className="bajada">No es carrito. Elige familias, pon cantidades por manga/pack y te mando PDF con precio cerrado y flete. Respuesta en 25 min hábil.</p>
            <p className="cotizacion-prueba">WSP +56 9 6842 1133 · respuesta promedio 23 min · Lun–Sáb 8:00–18:30</p>
            <ul className="cotizacion-checks">
              <li>✓ PDF con IVA</li>
              <li>✓ Stock confirmado</li>
              <li>✓ Flete separado</li>
            </ul>
          </div>
          <form className="cotizacion-form" onSubmit={onSubmit} noValidate>
            <div className="form-row form-row--2">
              <label className="form-field">
                <span className="form-label">Nombre local / giro *</span>
                <input type="text" placeholder="Ej: Almacén Don Segundo · Botillería La Cisterna" value={nombre} onChange={(e)=>setNombre(e.target.value)} aria-invalid={!!errors.nombre} />
                {errors.nombre && <span className="form-error">{errors.nombre}</span>}
              </label>
              <label className="form-field">
                <span className="form-label">RUT empresa</span>
                <input type="text" placeholder="76.***.***-K (opcional)" value={rut} onChange={(e)=>setRut(e.target.value)} />
              </label>
            </div>
            <div className="form-row form-row--2">
              <label className="form-field">
                <span className="form-label">Comuna retiro/despacho *</span>
                <select value={comuna} onChange={(e)=>setComuna(e.target.value)} aria-invalid={!!errors.comuna}>
                  <option value="">Elige comuna</option>
                  <option value="Retiro La Florida">Retiro La Florida</option>
                  <option value="Despacho RM">Despacho RM</option>
                  <option value="Regiones">Regiones</option>
                </select>
                {errors.comuna && <span className="form-error">{errors.comuna}</span>}
              </label>
              <label className="form-field">
                <span className="form-label">WhatsApp *</span>
                <input type="tel" placeholder="+56 9 1234 5678" value={whatsapp} onChange={(e)=>setWhatsapp(e.target.value)} aria-invalid={!!errors.whatsapp} />
                {errors.whatsapp && <span className="form-error">{errors.whatsapp}</span>}
              </label>
            </div>
            <label className="form-field form-field--full">
              <span className="form-label">Lista estimada *</span>
              <textarea rows={4} placeholder="Ej: 3 mangas arroz Tucapel, 2 cajas aceite 900ml, 1 pack Coca 3L×6, 2 mangas confort 20..." value={lista} onChange={(e)=>setLista(e.target.value)} aria-invalid={!!errors.lista} />
              {errors.lista && <span className="form-error">{errors.lista}</span>}
            </label>
            <label className="form-check">
              <input type="checkbox" checked={plazo} onChange={(e)=>setPlazo(e.target.checked)} />
              <span>Tengo cuenta corriente Abasto y quiero plazo 7 días</span>
            </label>

            <button type="submit" className="btn-primary btn-full" disabled={loading} style={{height:52,fontFamily:"Big Shoulders Display,system-ui,sans-serif",fontWeight:700,fontSize:16,letterSpacing:"0.06em"}}>
              {loading ? "Armando pallet..." : "Enviar cotización por WhatsApp"}
            </button>
            {success && <p className="form-success" role="status">{success}</p>}
            <a href="mailto:hola@abasto.cl" className="form-secundario">o pedir lista PDF por mail</a>
            <p className="form-micro">Al enviar aceptas que te coticemos por WhatsApp o mail. No spam. Precio final con flete según kg/vol.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function PreguntasAbasto() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "¿Venden por unidad a público?", a: "No. Mínimo 1 manga, pack o caja. El precio es por manga, no por unidad suelta." },
    { q: "¿Puedo mezclar mangas para llegar al mínimo $49.990?", a: "Sí. Puedes armar lote mixto: 1 manga de arroz + 1 pack de bebida + 1 manga de confort, por ejemplo." },
    { q: "¿A qué hora corta el despacho RM hoy?", a: "14:00. Si pagas antes, sale hoy. Después, mañana a primera hora. Sáb hasta 14:00 sale hoy, después lunes." },
    { q: "¿Factura con IVA?", a: "Sí. Todos los precios incluyen IVA. Factura electrónica al día siguiente. Boleta inmediata si es contado." },
    { q: "¿Cuánto sale el flete a regiones?", a: "Según kg/vol por Starken/Cruz del Sur. Te cotizamos flete aparte en el PDF, con peso estimado del pallet." },
    { q: "¿Puedo abrir cuenta corriente?", a: "Sí. Con RUT y giro te abrimos en 24h. Primer pedido contra transferencia; desde el segundo evaluamos plazo 7–15 días." },
  ];
  return (
    <section id="preguntas-abasto" className="section-preguntas">
      <div className="section-inner">
        <div className="preguntas-grid">
          <div className="preguntas-intro">
            <h2 className="h2 h2--sm">Preguntas de bodega.</h2>
            <p className="bajada bajada--sm">Lo que preguntan almaceneros, no consumidores finales.</p>
          </div>
          <div className="acordeon">
            {items.map((it, i) => (
              <div key={i} className={`acordeon-item ${open===i ? "open" : ""}`}>
                <button className="acordeon-header" onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i} aria-controls={`faq-${i}`}>
                  <span className="acordeon-q">{it.q}</span>
                  <span className="acordeon-icon" aria-hidden>{open===i ? "−" : "+"}</span>
                </button>
                <div id={`faq-${i}`} className="acordeon-body" style={{display: open===i ? "block":"none"}}>
                  <p>{it.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <p className="footer-wordmark">ABASTO</p>
            <p className="footer-sub">Minimayorista · Bodega La Florida · Desde 2018</p>
            <p className="footer-address">Av. La Florida 9600, portón 3, La Florida, Santiago · +56 2 2848 9100 · hola@abasto.cl</p>
          </div>
          <div className="footer-col">
            <nav className="footer-links" aria-label="Links footer">
              <a href="#lista-mayorista">Lista mayorista</a>
              <a href="#condiciones-abasto">Condiciones cuenta</a>
              <a href="#cobertura-bodega">Cobertura</a>
              <a href="#cotizacion-lote">Cotizar lote</a>
              <a href="#preguntas-abasto">Preguntas</a>
            </nav>
            <p className="footer-sec">Retiro 30 min · Despacho RM hoy · Regiones 24–48h</p>
          </div>
          <div className="footer-col">
            <p className="footer-horario">Lun–Sáb 8:00–18:30 · Dom cerrado</p>
            <p className="footer-nota">Precios con IVA incluido. Valores referenciales; se confirman al cotizar. Imágenes referenciales de bodega sin personas.</p>
          </div>
        </div>
        <div className="footer-bottom">© 2026 ABASTO · RUT 76.***.***-K · La Florida, Santiago de Chile · Hecho en bodega, no en mall.</div>
      </div>
    </footer>
  );
}

export function App() {
  useEffect(() => {
    const handler = (e: Event) => {
      const a = e.target as HTMLAnchorElement;
      if (a.tagName !== "A") return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const id = href.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", href);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ListaMayorista />
        <CondicionesCuenta />
        <CoberturaBodega />
        <CotizacionLote />
        <PreguntasAbasto />
      </main>
      <Footer />
    </>
  );
}
