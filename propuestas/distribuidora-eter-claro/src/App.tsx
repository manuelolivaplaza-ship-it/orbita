import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;
const WA_BASE = "https://wa.me/56227108840?text=";

function MediaFalta({ file, aspect }: { file: string; aspect: string }) {
  useEffect(() => { console.warn(`falta: ${file}`); }, [file]);
  return (
    <div
      className="media-falta"
      data-falta={file}
      style={{
        aspectRatio: aspect,
        border: "1px dashed #E8E2D6",
        display: "grid",
        placeItems: "center",
        color: "#6F7276",
        font: "500 0.85rem DM Sans, sans-serif",
        background: "#F3EFE6",
        padding: "16px",
        textAlign: "center",
      }}
    >
      falta: {file}
    </div>
  );
}

function SafeImg({
  file,
  aspect,
  alt,
  className,
  style,
}: {
  file: string;
  aspect: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [err, setErr] = useState(false);
  if (err) return <MediaFalta file={file} aspect={aspect} />;
  return (
    <img
      src={`${BASE}media/${file}`}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => {
        console.warn(`falta: ${file}`);
        setErr(true);
      }}
    />
  );
}

type FormState = {
  nombre: string;
  telefono: string;
  email: string;
  comuna: string;
  categoria: string;
  moq: string;
  mensaje: string;
  guia: boolean;
};

export function App() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
      if (y > lastY.current && y > 80) setHidden(true);
      else setHidden(false);
      lastY.current = y;
      const pct = max > 0 ? y / max : 0;
      setShowSticky(pct > 0.4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [heroOk, setHeroOk] = useState(true);
  const [heroMobileOk, setHeroMobileOk] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [heroVideoOk, setHeroVideoOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    fetch(`${BASE}media/eter-hero-16x9.png`, { method: "HEAD" }).then((r) => {
      if (!r.ok) { console.warn("falta: eter-hero-16x9.png"); setHeroOk(false); }
    }).catch(() => { console.warn("falta: eter-hero-16x9.png"); setHeroOk(false); });
    fetch(`${BASE}media/eter-hero-9x16.png`, { method: "HEAD" }).then((r) => {
      if (!r.ok) { console.warn("falta: eter-hero-9x16.png"); setHeroMobileOk(false); }
    }).catch(() => { console.warn("falta: eter-hero-9x16.png"); setHeroMobileOk(false); });
    fetch(`${BASE}media/eter-hero-loop.mp4`, { method: "HEAD" }).then((r) => {
      if (r.ok) setHeroVideoOk(true);
    }).catch(() => {});
    // og:image
    if (!document.querySelector('meta[property="og:image"]')) {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:image");
      m.setAttribute("content", "/media/eter-og-16x9.png");
      document.head.appendChild(m);
    }
  }, []);

  // pedido-24h form
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    email: "",
    comuna: "",
    categoria: "",
    moq: "",
    mensaje: "",
    guia: true,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa nombre y negocio";
    if (!form.telefono.trim()) e.telefono = "Ingresa teléfono";
    else if (!/^\+56\s?9\s?\d{4}\s?\d{4}$/.test(form.telefono.trim()) && !/^\+569\d{8}$/.test(form.telefono.replace(/\s/g, ""))) {
      // accept +56 9 1234 5678 or +56912345678
      // if fails, show error
      if (!form.telefono.includes("+56")) e.telefono = "Usa formato +56 9 1234 5678";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email no válido";
    if (!form.comuna) e.comuna = "Elige comuna";
    if (!form.categoria) e.categoria = "Elige categoría";
    if (!form.moq) e.moq = "Elige MOQ";
    if (!form.mensaje.trim()) e.mensaje = "Describe tu lista";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setFormError("");
    setSuccess(false);
    if (!validate()) {
      setFormError("Revisa los campos marcados.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const payload = { ...form, fecha: new Date().toISOString() };
      try { localStorage.setItem("eter-pedido", JSON.stringify(payload)); } catch {}
      const text = `Hola ETER quiero cotizar: ${form.nombre} ${form.categoria} ${form.moq} ${form.comuna} - ${form.mensaje}`.slice(0, 800);
      const url = WA_BASE + encodeURIComponent(text);
      setLoading(false);
      setSuccess(true);
      // open whatsapp
      try {
        window.open(url, "_blank");
      } catch {
        window.location.href = "mailto:contacto@eter.cl?subject=Cotización ETER&body=" + encodeURIComponent(text);
      }
    }, 600);
  };

  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      <a className="skip-link" href="#pasillo-bodega">Saltar al contenido</a>
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <header className={`site-header ${hidden ? "is-hidden" : ""}`}>
        <div className="wrap header-inner">
          <a className="header-left" href="#pasillo-bodega" aria-label="ETER inicio">
            <span className="logo">ETER<span className="logo-dot">·</span></span>
            <span className="logo-sub">DISTRIBUIDORA · SANTIAGO</span>
          </a>

          <nav className="header-nav" aria-label="Principal">
            <a href="#catalogo-mayor">Catálogo</a>
            <a href="#precios-mayor">Precios</a>
            <a href="#despacho-flota">Despacho</a>
            <a href="#pedido-24h">Pedido</a>
            <a href="#dudas-mayorista">Dudas</a>
          </nav>

          <div className="header-right">
            <a className="header-phone" href="tel:+56227108840">
              <span className="header-phone-label">¿Pedido hoy?</span>
              <span className="header-phone-num">+56 2 2710 8840</span>
            </a>
            <a className="btn-catalogo" href="#catalogo-mayor">Ver catálogo</a>
            <button
              className="hamburger"
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
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Móvil">
          <a href="#catalogo-mayor" onClick={() => setMenuOpen(false)}>Catálogo</a>
          <a href="#precios-mayor" onClick={() => setMenuOpen(false)}>Precios</a>
          <a href="#despacho-flota" onClick={() => setMenuOpen(false)}>Despacho</a>
          <a href="#pedido-24h" onClick={() => setMenuOpen(false)}>Pedido</a>
          <a href="#dudas-mayorista" onClick={() => setMenuOpen(false)}>Dudas</a>
        </nav>
      </header>

      <main>
        <section id="pasillo-bodega" className="hero" aria-label="Pasillo bodega">
          {/* alias inicio for legacy */}
          <span id="inicio" aria-hidden="true" style={{ position: "absolute" }} />
          <div className="wrap">
            <div className="hero-grid">
              {/* copy */}
              <div className="hero-copy">
                <p className="hero-kicker reveal">DISTRIBUIDORA · SANTIAGO — ABASTECIMIENTO MAYORISTA DESDE 2011</p>
                <h1 className="hero-h1 reveal reveal-2">
                  <span className="u-stock">Stock</span> real en bodega. Precio mayor publicado, despacho <span className="c-manana">mañana</span> en RM.
                </h1>
                <p className="hero-sub reveal reveal-3">
                  Abarrotes, aseo y alimentos para almacenes, minimarkets y cocinas que no pueden quedar sin stock. Precio por caja a la vista, MOQ claro y guía de despacho con factura inmediata.
                </p>

                <div className="hero-ctas reveal reveal-3">
                  <a className="btn-primary" href="#catalogo-mayor">Ver catálogo mayor</a>
                  <a className="btn-ghost" href="#pedido-24h">Cotizar despacho mañana</a>
                </div>

                <div className="hero-ficha reveal-ficha" aria-label="Ficha rápida">
                  <div className="hero-ficha-item">
                    <span className="hero-ficha-label">Categoría</span>
                    Abarrotes ▾
                  </div>
                  <div className="hero-ficha-item">
                    <span className="hero-ficha-label">MOQ</span>
                    desde 1 caja ▾
                  </div>
                  <div className="hero-ficha-item">
                    <span className="hero-ficha-label">Despacho</span>
                    RM 24h ▾
                  </div>
                </div>

                <div className="hero-banda" aria-label="Banda honesta">
                  <span>Stock contado ayer</span><span className="dot">·</span>
                  <span>Factura inmediata</span><span className="dot">·</span>
                  <span>RM 24h</span><span className="dot">·</span>
                  <span>Retiro en 2h</span>
                </div>

                <p className="hero-micro">Si no hay stock, te avisamos antes de confirmar. Nada se cobra sin tu ok por WhatsApp.</p>

                <p className="hero-firma">Pasillo 04 · rack gris claro · luz cenital difusa · hormigón junta 3 m</p>
              </div>

              {/* media */}
              <div className="hero-media-wrap">
                <div className="hero-media reveal-media">
                  {(() => {
                    if (!heroOk && !heroMobileOk) {
                      return (
                        <>
                          <div className="media-falta media-falta-desktop" data-falta="eter-hero-16x9.png" style={{ aspectRatio: "16/9", border: "1px dashed #E8E2D6", display: "grid", placeItems: "center", color: "#6F7276", font: "500 0.85rem DM Sans, sans-serif" }}>
                            falta: eter-hero-16x9.png
                          </div>
                          <div className="media-falta media-falta-mobile" data-falta="eter-hero-9x16.png" style={{ aspectRatio: "9/16", border: "1px dashed #E8E2D6", display: "grid", placeItems: "center", color: "#6F7276", font: "500 0.85rem DM Sans, sans-serif" }}>
                            falta: eter-hero-9x16.png
                          </div>
                        </>
                      );
                    }
                    if (!heroOk) {
                      return (
                        <div className="media-falta" data-falta="eter-hero-16x9.png" style={{ aspectRatio: "16/9", border: "1px dashed #E8E2D6", display: "grid", placeItems: "center", color: "#6F7276", font: "500 0.85rem DM Sans, sans-serif" }}>
                          falta: eter-hero-16x9.png
                        </div>
                      );
                    }
                    if (!heroMobileOk && isMobile) {
                      return (
                        <div className="media-falta" data-falta="eter-hero-9x16.png" style={{ aspectRatio: "9/16", border: "1px dashed #E8E2D6", display: "grid", placeItems: "center", color: "#6F7276", font: "500 0.85rem DM Sans, sans-serif" }}>
                          falta: eter-hero-9x16.png
                        </div>
                      );
                    }
                    // if video exists and desktop, show video
                    if (heroVideoOk && !isMobile && heroOk) {
                      return (
                        <>
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={`${BASE}media/eter-hero-16x9.png`}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            aria-label="Pasillo bodega loop"
                          >
                            <source src={`${BASE}media/eter-hero-loop.mp4`} type="video/mp4" />
                          </video>
                          <picture style={{ display: "none" }}>
                            <img src={`${BASE}media/eter-hero-16x9.png`} alt="" />
                          </picture>
                        </>
                      );
                    }
                    return (
                      <picture>
                        <source media="(max-width: 900px)" srcSet={`${BASE}media/eter-hero-9x16.png`} />
                        <img
                          src={`${BASE}media/eter-hero-16x9.png`}
                          alt="Pasillo central de bodega con rack gris claro y cajas kraft a escuadra"
                          loading="eager"
                          decoding="async"
                          onError={() => {
                            console.warn("falta: eter-hero-16x9.png");
                            setHeroOk(false);
                          }}
                        />
                      </picture>
                    );
                  })()}
                </div>
                {/* ensure mobile falta is always present in DOM when missing for audit */}
                {!heroMobileOk && heroOk && !isMobile ? (
                  <div className="media-falta" data-falta="eter-hero-9x16.png" style={{ display: "none" }} aria-hidden="true">falta: eter-hero-9x16.png</div>
                ) : null}
                <p className="hero-caption">Pasillo 04 · cajas kraft a escuadra · etiqueta blanca 90°</p>
              </div>
            </div>
          </div>
          <div className="hero-banda-full wrap" aria-label="Banda stock">
            Stock contado ayer · Guía con lote y vencimiento · Factura inmediata
          </div>
        </section>

        {/* 1) CIFRAS */}
        <section id="cifras-eter" className="cifras" aria-label="Cifras ETER">
          <div className="wrap">
            <p className="kicker cifras-kicker">CIFRAS ETER</p>
            <div className="cifras-grid">
              <div className="cifras-cell">
                <div className="cifras-num">+8 años</div>
                <div className="cifras-label">Abasteciendo RM y V Región, sin quiebres</div>
              </div>
              <div className="cifras-cell">
                <div className="cifras-num">+2.400 SKUs</div>
                <div className="cifras-label">Abarrotes, aseo, confites y pet con stock contado</div>
              </div>
              <div className="cifras-cell">
                <div className="cifras-num">+640 clientes</div>
                <div className="cifras-label">Almacenes, minimarkets y cocinas con reposición semanal</div>
              </div>
              <div className="cifras-cell">
                <div className="cifras-num">98% despachos a tiempo</div>
                <div className="cifras-label">Guía y factura el mismo día, trazabilidad por WhatsApp</div>
              </div>
            </div>
            <p className="cifras-nota">Sin ‘desde’ engañoso en cifras. Stock físico, no promesa.</p>
          </div>
        </section>

        {/* 2) CATALOGO MAYOR */}
        <section id="catalogo-mayor" className="catalogo" aria-label="Catálogo mayor">
          <div className="wrap">
            <div className="catalogo-header">
              <p className="kicker">CATÁLOGO MAYOR</p>
              <h2>Un pasillo por categoría. Elige y ve precio por caja.</h2>
              <p className="catalogo-intro">Cada fila abre detalle con SKU, MOQ y despacho. Fotos de bodega sin filtro ayer.</p>
            </div>
            <div className="catalogo-layout">
              <div className="catalogo-indice">
                {[
                  { n: "01", t: "Abarrotes secos", sub: "desde $8.900 / caja 12 un. · MOQ 1 caja · harina, arroz, legumbres", price: "desde $8.900" },
                  { n: "02", t: "Conservas y salsas", sub: "desde $11.200 / caja 12 un. · MOQ 1 caja · atún, tomate, salsas", price: "desde $11.200" },
                  { n: "03", t: "Aseo industrial", sub: "desde $9.400 / caja 6 un. · MOQ 1 caja · detergente, cloro, papel", price: "desde $9.400" },
                  { n: "04", t: "Licores y cervezas", sub: "desde $14.500 / caja 6 un. · MOQ 1 caja · cerveza, vino, pisco", price: "desde $14.500" },
                  { n: "05", t: "Snacks y confites", sub: "desde $7.800 / caja 24 un. · MOQ 1 caja · galletas, papas, chocolate", price: "desde $7.800" },
                  { n: "06", t: "Alimentos mascota", sub: "desde $12.600 / saco 15 kg · MOQ 1 saco · perro/gato, arena", price: "desde $12.600" },
                ].map((row) => (
                  <div key={row.n} className="catalogo-row">
                    <span className="catalogo-num">{row.n}</span>
                    <div className="catalogo-row-main">
                      <div className="catalogo-row-title">{row.t}</div>
                      <div className="catalogo-row-sub">{row.sub}</div>
                      <div className="catalogo-row-hover">Stock ayer · Lote y vencimiento en guía · Foto rack sin filtro</div>
                    </div>
                    <span className="catalogo-row-price">{row.price}</span>
                  </div>
                ))}
                <p className="catalogo-nota">MOQ = mínimo por caja/saco. Si necesitas media caja, lo vemos por WhatsApp.</p>
              </div>

              <div className="catalogo-mosaico">
                <div className="mosaico-tile">
                  <div className="mosaico-img-wrap" style={{ aspectRatio: "4/3" }}>
                    <SafeImg file="eter-tile-01-4x3.png" aspect="4/3" alt="Rack con cajas kraft alineadas a escuadra" />
                  </div>
                  <p className="mosaico-caption">Rack 04 · kraft a escuadra · etiqueta 90°</p>
                </div>
                <div className="mosaico-tile">
                  <div className="mosaico-img-wrap" style={{ aspectRatio: "1/1" }}>
                    <SafeImg file="eter-tile-02-1x1.png" aspect="1/1" alt="Junta de hormigón pulido cada 3 metros" />
                  </div>
                  <p className="mosaico-caption">Junta 3 m · hormigón pulido</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3) PRECIOS MAYOR */}
        <section id="precios-mayor" className="precios" aria-label="Precios a la vista">
          <div className="wrap">
            <div className="precios-header">
              <p className="kicker">PRECIOS A LA VISTA</p>
              <h2>Precio por caja publicado, sin letra chica</h2>
              <p className="precios-intro">Cada valor es ‘desde’ por caja/saco. El total con IVA y despacho se confirma antes de pagar. Factura exenta disponible.</p>
            </div>
            <div className="precios-layout">
              <div className="precios-table-wrap">
                <div className="precios-indicador" aria-hidden="true"><span /><span /><span /></div>
                <div className="precios-panel">
                  <div className="precios-head">
                    <span>Producto (MOQ)</span>
                    <span>Desde CLP</span>
                    <span className="precios-head-nota">Nota</span>
                  </div>
                  {[
                    { prod: "Harina 1 kg ×12 — Abarrotes", price: "$8.900 / caja", nota: "lote y vencimiento en guía" },
                    { prod: "Arroz grado 2 ×12 — Abarrotes", price: "$9.400 / caja", nota: "stock ayer 142 cajas" },
                    { prod: "Atún 170 g ×24 — Conservas", price: "$11.200 / caja", nota: "venc 18 meses" },
                    { prod: "Detergente líquido 3 L ×6 — Aseo", price: "$14.800 / caja", nota: "MOQ 1 caja" },
                    { prod: "Papel higiénico 24 rollos — Aseo", price: "$9.400 / caja", nota: "stock 86 cajas" },
                    { prod: "Cerveza lata 350 cc ×24 — Licores", price: "$14.500 / caja", nota: "frío opcional" },
                    { prod: "Galletas soda ×24 — Snacks", price: "$7.800 / caja", nota: "venc 9 meses" },
                    { prod: "Saco perro adulto 15 kg — Pet", price: "$12.600 / saco", nota: "entrega paletizada" },
                    { prod: "Arena sanitaria 8 kg — Pet", price: "$13.900 / saco", nota: "MOQ 1 saco" },
                  ].map((r) => (
                    <div key={r.prod} className="precios-row">
                      <div className="precios-row-prod">
                        <span className="precios-prod">{r.prod}</span>
                        <span className="precios-nota-hover">{r.nota}</span>
                      </div>
                      <span className="precios-price">{r.price}</span>
                    </div>
                  ))}
                  <p className="precios-foot">Valores referenciales con IVA; se confirma stock y despacho antes de facturar. Guía de despacho impresa. Hasta 3 cuotas. Si no hay stock, no se cobra.</p>
                </div>
              </div>

              <aside className="precios-aside" aria-label="Cotización">
                <div className="aside-card">
                  <h3>¿Necesitas reposición mañana?</h3>
                  <p className="aside-text">Cotizamos por WhatsApp con foto de tu lista. Confirmamos stock y ventana hoy mismo.</p>
                  <div className="aside-phone">
                    <span className="aside-phone-label">¿Pedido hoy?</span>
                    <a href="tel:+56227108840" className="aside-phone-num">+56 2 2710 8840</a>
                  </div>
                  <a href="#pedido-24h" className="btn-primary aside-cta">Cotizar despacho mañana</a>
                  <a href="#despacho-flota" className="btn-ghost aside-ghost">Ver despacho y flota</a>
                  <p className="aside-micro">RM 24h · V Región 48h · Retiro 2h · Factura y guía al instante</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 4) DESPACHO FLOTA */}
        <section id="despacho-flota" className="despacho" aria-label="Despacho y flota">
          <div className="wrap despacho-grid">
            <div className="despacho-img-col">
              <div className="despacho-img-wrap" style={{ aspectRatio: "4/3" }}>
                <SafeImg file="eter-interior-16x9.png" aspect="4/3" alt="Andén de carga vacío con cortina gris y línea amarilla" />
              </div>
              <p className="despacho-caption">Andén 02 · cortina gris · línea amarilla 80mm · luz cenital</p>
              <div className="despacho-tile-optional">
                <div className="mosaico-img-wrap" style={{ aspectRatio: "1/1" }}>
                  <SafeImg file="eter-tile-04-1x1.png" aspect="1/1" alt="Detalle andén cortina metálica y línea amarilla" />
                </div>
              </div>
            </div>
            <div className="despacho-copy">
              <p className="kicker">DESPACHO Y FLOTA</p>
              <h2>Despacho con ventana, no con promesa.</h2>
              <p className="despacho-intro">Flota propia RM + aliado V Región. Ves guía y ventana por WhatsApp, sin llamar dos veces.</p>
              <ol className="despacho-lista">
                <li>
                  <span className="despacho-num">01</span>
                  <div>
                    <strong>RM 24h</strong> — Santiago pedido antes 14:00, mañana 09–16h ventana 2h
                  </div>
                </li>
                <li>
                  <span className="despacho-num">02</span>
                  <div>
                    <strong>V Región 48h</strong> — Valpo/Viña y Quillota 48h hábiles guía por WhatsApp
                  </div>
                </li>
                <li>
                  <span className="despacho-num">03</span>
                  <div>
                    <strong>Retiro 2h</strong> — Bodega Pudahuel 2h hábiles guía impresa sin fila
                  </div>
                </li>
                <li>
                  <span className="despacho-num">04</span>
                  <div>
                    <strong>Trazabilidad</strong> — Guía + lote/vencimiento + foto carga si pides
                  </div>
                </li>
              </ol>
              <p className="despacho-precio">Despacho RM desde $4.900 — gratis sobre $350.000. Retiro sin costo.</p>
              <div className="despacho-checks">
                <span>Guía impresa</span>
                <span>Factura inmediata</span>
                <span>Lote y vencimiento</span>
                <span>Ventana por WhatsApp</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5) PEDIDO 24H */}
        <section id="pedido-24h" className="pedido" aria-label="Pedido en 24h">
          <div className="wrap">
            <div className="pedido-grid">
              <div className="pedido-form-col">
                <p className="kicker">PEDIDO EN 24H</p>
                <h2>Manda tu lista. Confirmamos stock hoy.</h2>
                <p className="pedido-sub">Elige categoría y MOQ. Te respondemos hoy con total y ventana.</p>

                <form className="pedido-form" onSubmit={handleSubmit} noValidate aria-label="Formulario pedido">
                  <div className="pedido-dots" aria-hidden="true"><span /><span /><span /></div>

                  <label className="field">
                    <span className="field-label">Nombre</span>
                    <input
                      type="text"
                      required
                      placeholder="Nombre y negocio"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      aria-invalid={!!errors.nombre}
                      style={errors.nombre ? { borderColor: "#D94F30" } : undefined}
                    />
                    {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                  </label>

                  <label className="field">
                    <span className="field-label">Teléfono</span>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      aria-invalid={!!errors.telefono}
                      style={errors.telefono ? { borderColor: "#D94F30" } : undefined}
                    />
                    {errors.telefono && <span className="field-error">{errors.telefono}</span>}
                  </label>

                  <label className="field">
                    <span className="field-label">Email</span>
                    <input
                      type="email"
                      placeholder="hola@negocio.cl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      aria-invalid={!!errors.email}
                      style={errors.email ? { borderColor: "#D94F30" } : undefined}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </label>

                  <label className="field">
                    <span className="field-label">Comuna despacho</span>
                    <select
                      required
                      value={form.comuna}
                      onChange={(e) => setForm({ ...form, comuna: e.target.value })}
                      aria-invalid={!!errors.comuna}
                      style={errors.comuna ? { borderColor: "#D94F30" } : undefined}
                    >
                      <option value="">Selecciona comuna</option>
                      <option>Santiago</option>
                      <option>Puente Alto</option>
                      <option>Maipú</option>
                      <option>Pudahuel</option>
                      <option>La Florida</option>
                      <option>Valparaíso</option>
                      <option>Viña del Mar</option>
                      <option>Otra</option>
                    </select>
                    {errors.comuna && <span className="field-error">{errors.comuna}</span>}
                  </label>

                  <label className="field">
                    <span className="field-label">Categoría principal</span>
                    <select
                      required
                      value={form.categoria}
                      onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                      aria-invalid={!!errors.categoria}
                      style={errors.categoria ? { borderColor: "#D94F30" } : undefined}
                    >
                      <option value="">Selecciona categoría</option>
                      <option>Abarrotes</option>
                      <option>Conservas</option>
                      <option>Aseo</option>
                      <option>Licores</option>
                      <option>Snacks</option>
                      <option>Pet</option>
                      <option>Mix</option>
                    </select>
                    {errors.categoria && <span className="field-error">{errors.categoria}</span>}
                  </label>

                  <label className="field">
                    <span className="field-label">MOQ estimado</span>
                    <select
                      required
                      value={form.moq}
                      onChange={(e) => setForm({ ...form, moq: e.target.value })}
                      aria-invalid={!!errors.moq}
                      style={errors.moq ? { borderColor: "#D94F30" } : undefined}
                    >
                      <option value="">Selecciona MOQ</option>
                      <option>1–5 cajas</option>
                      <option>6–20 cajas</option>
                      <option>20+ cajas</option>
                      <option>Pallet</option>
                    </select>
                    {errors.moq && <span className="field-error">{errors.moq}</span>}
                  </label>

                  <label className="field field-full">
                    <span className="field-label">Lista o mensaje</span>
                    <textarea
                      rows={3}
                      required
                      placeholder="Ej: 3 cajas harina 1kg, 2 cajas atún 170g, 1 saco perro 15kg"
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      aria-invalid={!!errors.mensaje}
                      style={errors.mensaje ? { borderColor: "#D94F30" } : undefined}
                    />
                    {errors.mensaje && <span className="field-error">{errors.mensaje}</span>}
                  </label>

                  <label className="field-check">
                    <input
                      type="checkbox"
                      checked={form.guia}
                      onChange={(e) => setForm({ ...form, guia: e.target.checked })}
                    />
                    <span>Quiero guía con lote y vencimiento en cada entrega</span>
                  </label>

                  {success && (
                    <div className="form-success" role="status">
                      Pedido recibido. Confirmamos stock y ventana hoy · revisa WhatsApp ✓
                    </div>
                  )}
                  {formError && !success && <p className="form-error-global" role="alert">{formError}</p>}

                  <button type="submit" className="btn-primary pedido-cta" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? "Enviando…" : "Cotizar despacho mañana"}
                  </button>
                  <a href="tel:+56227108840" className="btn-ghost pedido-ghost">Llamar ahora</a>
                </form>
              </div>

              <div className="pedido-datos">
                <div className="pedido-tel">
                  <span className="pedido-tel-label">¿Pedido hoy?</span>
                  <a href="tel:+56227108840" className="pedido-tel-num">+56 2 2710 8840</a>
                </div>
                <a href="mailto:contacto@eter.cl" className="pedido-email">contacto@eter.cl</a>
                <p className="pedido-dir">Bodega Pudahuel · despacho RM 24h / V Región 48h · retiro 2h</p>
                <p className="pedido-horario">Lun–Vie 08:00–18:00 · Sáb 08:00–14:00 · Pedido antes 14:00 = mañana</p>
                <ul className="pedido-confianza">
                  <li>Stock contado ayer</li>
                  <li>Guía y lote en despacho</li>
                  <li>Factura inmediata</li>
                  <li>Ventana por WhatsApp</li>
                </ul>
                <p className="pedido-mini">+8 años · +640 negocios · 98% a tiempo · +2.400 SKUs</p>

                <div className="pedido-tile3">
                  <div className="mosaico-img-wrap" style={{ aspectRatio: "3/4" }}>
                    <SafeImg file="eter-tile-03-3x4.png" aspect="3/4" alt="Detalle cajas kraft con huincha metálica" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pedido-proof">
              <div className="pedido-proof-img" style={{ aspectRatio: "16/9" }}>
                <SafeImg file="eter-proof-16x9.png" aspect="16/9" alt="Mesa con guía de despacho, etiqueta y huincha metálica" />
              </div>
              <p className="pedido-proof-caption">Mesa 01 · guía + etiqueta 90° · huincha metálica</p>
            </div>

            <div className="pedido-footer">
              <p className="pedido-footer-main">ETER SpA · Pudahuel, Santiago · contacto@eter.cl · +56 2 2710 8840</p>
              <p className="pedido-footer-sub">© 2026 ETER. Valores referenciales con IVA; se confirma stock y despacho antes de facturar.</p>
            </div>
          </div>
        </section>

        {/* 6) DUDAS MAYORISTA */}
        <section id="dudas-mayorista" className="dudas" aria-label="Dudas mayorista">
          <div className="wrap dudas-grid">
            <div className="dudas-intro">
              <p className="kicker">DUDAS MAYORISTA</p>
              <h2>Dudas que sí importan.</h2>
              <p className="dudas-sub">Si no está acá, te respondemos por WhatsApp en 2 horas hábiles.</p>
            </div>
            <div className="dudas-acordeon">
              {[
                {
                  q: "¿Cuál es el MOQ y puedo pedir surtido?",
                  a: "MOQ es 1 caja/saco por SKU. Surtido sí: puedes mezclar SKUs hasta completar tu pedido. Si necesitas media caja, lo revisamos por WhatsApp y lo anotamos en la guía.",
                },
                {
                  q: "¿El precio publicado incluye IVA y despacho?",
                  a: "Precio con IVA por caja/saco publicado. Despacho RM desde $4.900, gratis sobre $350.000. V Región 48h con costo según comuna. Se confirma total antes de facturar.",
                },
                {
                  q: "¿Cómo confirmo stock y vencimiento antes de pagar?",
                  a: "Nos mandas tu lista. Confirmamos stock contado ayer, lote y vencimiento por WhatsApp con foto de guía. Nada se cobra sin tu ok.",
                },
                {
                  q: "¿Puedo retirar en bodega y en cuánto tiempo?",
                  a: "Sí, retiro Pudahuel en 2h hábiles con guía impresa. Te avisamos cuando está armado y te esperamos con factura.",
                },
                {
                  q: "¿Facturan inmediato y con guía de despacho?",
                  a: "Sí, factura inmediata y guía de despacho con lote/vencimiento. Envío por WhatsApp y correo. Clientes con cuenta: facturación a 7 días.",
                },
                {
                  q: "¿Qué pasa si un producto viene dañado o no es lo que pedí?",
                  a: "Cambio en 48h con foto de guía y lote. Reponemos en el siguiente despacho o retiro sin costo. Sin letra chica.",
                },
              ].map((it, i) => (
                <div key={i} className={`dudas-item ${faqOpen === i ? "is-open" : ""}`}>
                  <button
                    className="dudas-q"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                  >
                    <span>{it.q}</span>
                    <span className="dudas-chevron" aria-hidden="true">›</span>
                  </button>
                  <div className="dudas-a-wrap">
                    <div className="dudas-a">
                      <p>{it.a}</p>
                      <p className="dudas-tel">+56 2 2710 8840</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <span>ETER SpA · Pudahuel, Santiago · contacto@eter.cl · +56 2 2710 8840</span>
          <span>© 2026 ETER. Valores referenciales con IVA; se confirma stock y despacho antes de facturar.</span>
        </div>
      </footer>

      <div className={`sticky-cta ${showSticky ? "is-visible" : ""}`} aria-label="CTA móvil">
        <a href="tel:+56227108840" className="btn-ghost sticky-ghost">Llamar</a>
        <a href="#pedido-24h" className="btn-primary sticky-primary">Cotizar</a>
      </div>
    </>
  );
}
