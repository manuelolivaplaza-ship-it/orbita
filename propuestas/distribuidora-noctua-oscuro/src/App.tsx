import { useEffect, useRef, useState } from "react";

const base = import.meta.env.BASE_URL;
const mediaBase = `${base}media/`;

// ── Header (BUILD-01 exact) ─────────────────────────────────
function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-header__brand" aria-label="NOCTUA">
          NOCTUA
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          <a href="#lista-mayorista">Lista mayorista</a>
          <a href="#condiciones-cuenta">Condiciones</a>
          <a href="#cobertura-bodega">Cobertura</a>
        </nav>
        <div className="site-header__right">
          <a className="site-header__phone" href="tel:+56984072218">
            +56 9 8407 2218
          </a>
          <a className="site-header__cta" href="#cotizacion-lote">
            Cotizar lote
          </a>
        </div>
        <button className="site-header__burger" aria-label="Abrir menú" type="button">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function HeroMedia() {
  const [videoMissing, setVideoMissing] = useState(false);
  const [imgMissing, setImgMissing] = useState(false);
  const [imgMobileMissing, setImgMobileMissing] = useState(false);
  const poster = `${mediaBase}noctua-hero-16x9.png`;
  const videoSrc = `${mediaBase}noctua-hero-loop.mp4`;
  const imgDesktop = `${mediaBase}noctua-hero-16x9.png`;
  const imgMobile = `${mediaBase}noctua-hero-9x16.png`;
  const showVideo = !videoMissing;
  const showImgFallback = videoMissing && !imgMissing;
  return (
    <>
      <div className="hero__media" aria-hidden="true">
        {showVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            onError={() => {
              console.warn("Falta media: noctua-hero-loop.mp4");
              setVideoMissing(true);
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : showImgFallback ? (
          <picture>
            <source media="(max-width: 900px)" srcSet={imgMobile} />
            <img
              src={imgDesktop}
              alt=""
              onError={() => {
                console.warn("Falta media: noctua-hero-16x9.png");
                setImgMissing(true);
              }}
            />
          </picture>
        ) : null}
        {videoMissing && imgMissing && !imgMobileMissing ? (
          <img
            src={imgMobile}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => {
              console.warn("Falta media: noctua-hero-9x16.png");
              console.warn("Falta media: noctua-hero-16x9.png");
              setImgMobileMissing(true);
            }}
          />
        ) : null}
        {videoMissing && imgMissing && imgMobileMissing ? (
          <div
            className="media-falta"
            data-falta="noctua-hero-16x9.png"
            style={{
              background: "#141A1C",
              border: "1px solid var(--line)",
              display: "grid",
              placeItems: "center",
              color: "var(--muted)",
              height: "100%",
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              textAlign: "center",
              padding: "24px",
            }}
          >
            Falta media: noctua-hero-16x9.png
          </div>
        ) : null}
      </div>
      {showVideo && (
        <img src={imgMobile} alt="" style={{ display: "none" }} onError={() => console.warn("Falta media: noctua-hero-9x16.png")} />
      )}
      {showVideo && (
        <img src={imgDesktop} alt="" style={{ display: "none" }} onError={() => console.warn("Falta media: noctua-hero-16x9.png")} />
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Hero NOCTUA">
      <HeroMedia />
      <div className="hero__overlay">
        <div className="hero__content">
          <p className="hero__kicker">DISTRIBUIDORA MAYORISTA · SANTIAGO · DESPACHO RM Y REGIONES</p>
          <h1 className="hero__title">
            Pallet completo,
            <br />
            precio cerrado.
          </h1>
          <p className="hero__subhead">
            Bodega NOCTUA lista. Stock a la vista, mínimo por SKU y plazo de despacho real. Sin letra chica.
          </p>
          <div className="hero__bullets" aria-label="Condiciones clave">
            <span>✓ Mínimo desde 1 pallet</span>
            <span className="dot" aria-hidden="true" />
            <span>✓ Factura y cuenta corriente</span>
            <span className="dot" aria-hidden="true" />
            <span>✓ Despacho mañana RM</span>
          </div>
          <div className="hero__ctas">
            <a className="hero__cta-primary" href="#cotizacion-lote">
              Cotizar lote por WhatsApp
            </a>
            <a className="hero__cta-secondary" href="#lista-mayorista">
              Pedir lista PDF
            </a>
          </div>
          <p className="hero__micro">Valores referenciales. Se confirma al cotizar comuna y volumen.</p>
          <p className="hero__sello">500+ clientes B2B · Bodega Quilicura 2.400m²</p>
        </div>
      </div>
    </section>
  );
}

// ── #lista-mayorista ────────────────────────────────────────
type SKU = {
  sku: string;
  familia: string;
  formato: string;
  minimo: string;
  stock: string;
  stockTone: "ok" | "critico" | "agotado";
  precio: string;
  thumb: string;
};

const SKUS: SKU[] = [
  {
    sku: "Aceite vegetal 5L (caja 4u)",
    familia: "Abarrotes",
    formato: "Caja 4 × 5L",
    minimo: "1 pallet (56 cajas)",
    stock: "Disponible",
    stockTone: "ok",
    precio: "$34.600 / caja  — $8.650 / botella",
    thumb: "noctua-tile-01-1x1.png",
  },
  {
    sku: "Arroz grado 1 · 10kg",
    familia: "Abarrotes",
    formato: "Saco 10kg",
    minimo: "1 pallet (100 sacos)",
    stock: "Disponible",
    stockTone: "ok",
    precio: "$12.500 / saco",
    thumb: "noctua-tile-02-1x1.png",
  },
  {
    sku: "Azúcar granulada 25kg",
    familia: "Abarrotes",
    formato: "Saco 25kg",
    minimo: "1 pallet (40 sacos)",
    stock: "Disponible",
    stockTone: "ok",
    precio: "$22.900 / saco",
    thumb: "noctua-tile-01-1x1.png",
  },
  {
    sku: "Harina 000 25kg",
    familia: "Abarrotes",
    formato: "Saco 25kg",
    minimo: "1 pallet (40 sacos)",
    stock: "Stock crítico (12 sacos)",
    stockTone: "critico",
    precio: "$18.900 / saco",
    thumb: "noctua-tile-02-1x1.png",
  },
  {
    sku: "Leche en polvo 25kg",
    familia: "Lácteos y frío",
    formato: "Saco 25kg",
    minimo: "1 pallet (20 sacos)",
    stock: "Disponible",
    stockTone: "ok",
    precio: "$58.000 / saco",
    thumb: "noctua-tile-01-1x1.png",
  },
  {
    sku: "Detergente industrial 20L",
    familia: "Aseo",
    formato: "Bidón 20L",
    minimo: "1 pallet (32 bidones)",
    stock: "Disponible",
    stockTone: "ok",
    precio: "$24.500 / bidón",
    thumb: "noctua-tile-02-1x1.png",
  },
  {
    sku: "Papel higiénico 48 rollos (pack mayorista)",
    familia: "Aseo",
    formato: "Pack 48u",
    minimo: "1 pallet (48 packs)",
    stock: "Disponible",
    stockTone: "ok",
    precio: "$19.900 / pack",
    thumb: "noctua-tile-01-1x1.png",
  },
  {
    sku: "Bebida cola 1.5L (pack 6u)",
    familia: "Bebestibles",
    formato: "Pack 6 × 1.5L",
    minimo: "1 pallet (84 packs)",
    stock: "Agotado — reposición Lun",
    stockTone: "agotado",
    precio: "$5.200 / pack — $867 / botella",
    thumb: "noctua-tile-02-1x1.png",
  },
];

const FAMILIA_FILTERS = ["Todas", "Abarrotes", "Lácteos y frío", "Aseo", "Bebestibles", "Snacks"] as const;

function Thumb({ filename }: { filename: string }) {
  const [missing, setMissing] = useState(false);
  const src = `${mediaBase}${filename}`;
  useEffect(() => {
    // probe to log warn even if missing state handled differently
  }, []);
  if (missing) {
    return <div className="media-falta thumb-falta" data-falta={filename} aria-hidden="true" />;
  }
  return (
    <img
      src={src}
      alt=""
      width={40}
      height={40}
      loading="lazy"
      onError={() => {
        console.warn(`Falta media: ${filename}`);
        setMissing(true);
      }}
    />
  );
}

function ListaMayorista() {
  const [filtro, setFiltro] = useState<string>("Todas");

  const filtered = filtro === "Todas" ? SKUS : SKUS.filter((s) => s.familia === filtro);

  // Optional vertical tile 04 probe
  const [tile04Missing, setTile04Missing] = useState(false);

  return (
    <section id="lista-mayorista" className="section lista-mayorista">
      <div className="section__inner">
        <div className="section__header">
          <p className="kicker">LISTA MAYORISTA — STOCK A LA VISTA</p>
          <h2 className="h2">Todo por pallet. Precio cerrado, sin sorpresas.</h2>
          <p className="bajada">SKU, unidad de venta y mínimo claro. Filtra por familia y ve el mínimo y el despacho antes de cotizar.</p>
        </div>

        <div className="filtros-bar" role="toolbar" aria-label="Filtros por familia">
          {FAMILIA_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`pill ${filtro === f ? "pill--active" : ""}`}
              aria-pressed={filtro === f}
              onClick={() => setFiltro(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="lista-layout">
          {/* Optional secondary image col — tile-04 vertical */}
          <div className="lista-side" aria-hidden="true">
            {!tile04Missing ? (
              <img
                src={`${mediaBase}noctua-tile-04-3x4.png`}
                alt=""
                loading="lazy"
                onError={() => {
                  console.warn("Falta media: noctua-tile-04-3x4.png");
                  setTile04Missing(true);
                }}
              />
            ) : (
              <div className="media-falta" data-falta="noctua-tile-04-3x4.png">
                Falta media: noctua-tile-04-3x4.png
              </div>
            )}
            <p className="lista-side__cap">Muelle — referencia bodega, sin stock.</p>
          </div>

          <div className="lista-table-wrap">
            {/* Desktop table */}
            <div className="tabla-densa" role="table" aria-label="Lista mayorista">
              <div className="tabla-head" role="row">
                <span role="columnheader">SKU</span>
                <span role="columnheader">Familia</span>
                <span role="columnheader">Formato / unidad de venta</span>
                <span role="columnheader">Mínimo</span>
                <span role="columnheader">Stock</span>
                <span role="columnheader">Precio desde (CLP)</span>
                <span role="columnheader" aria-label="Acción" />
              </div>
              {filtered.length === 0 ? (
                <div className="tabla-empty">Sin SKUs en esta familia.</div>
              ) : (
                filtered.map((row) => (
                  <div key={row.sku} className="tabla-row" role="row">
                    <span className="cell-sku" role="cell">
                      <span className="thumb-40">
                        <Thumb filename={row.thumb} />
                      </span>
                      {row.sku}
                    </span>
                    <span role="cell" className="cell-familia">
                      {row.familia}
                    </span>
                    <span role="cell">{row.formato}</span>
                    <span role="cell">{row.minimo}</span>
                    <span role="cell" className={`cell-stock cell-stock--${row.stockTone}`}>
                      {row.stock}
                    </span>
                    <span role="cell" className="cell-precio">
                      {row.precio}
                    </span>
                    <span role="cell">
                      <a href="#cotizacion-lote" className="btn-ghost-row">
                        Cotizar este pallet
                      </a>
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Mobile fichas */}
            <div className="fichas-densas">
              {filtered.length === 0 && <div className="ficha-empty">Sin SKUs en esta familia.</div>}
              {filtered.map((row) => (
                <article key={row.sku} className="ficha">
                  <div className="ficha__top">
                    <span className="thumb-40">
                      <Thumb filename={row.thumb} />
                    </span>
                    <h3 className="ficha__sku">{row.sku}</h3>
                  </div>
                  <div className="ficha__meta">
                    <span>
                      <em>Mínimo</em> {row.minimo}
                    </span>
                    <span>
                      <em>Stock</em> <span className={`cell-stock--${row.stockTone}`}>{row.stock}</span>
                    </span>
                  </div>
                  <div className="ficha__meta2">
                    <span>{row.familia}</span> · <span>{row.formato}</span>
                  </div>
                  <p className="ficha__precio">{row.precio}</p>
                  <a href="#cotizacion-lote" className="ficha__cta">
                    Cotizar
                  </a>
                </article>
              ))}
            </div>

            <p className="nota-legal">Valores referenciales neto + IVA. Se confirma al cotizar lote y comuna. Vigencia 7 días. No incluye flete si comuna fuera de cobertura.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #condiciones-cuenta ────────────────────────────────────
function CondicionesCuenta() {
  const [bgMissing, setBgMissing] = useState(false);
  return (
    <section id="condiciones-cuenta" className="section condiciones">
      <div className="section__inner">
        <div className="section__header">
          <p className="kicker">CONDICIONES CUENTA — B2B, NO RETAIL</p>
          <h2 className="h2 h2--36">Cuenta corriente y factura. Sin letra chica.</h2>
          <p className="bajada">Trabajamos con factura. Evaluación simple, sin “soluciones integrales”.</p>
        </div>

        <div className="kpi-row">
          <div className="kpi glass" style={{ animationDelay: "0ms" }}>
            <p className="kpi__label">Plazo despacho RM</p>
            <p className="kpi__value">Mañana</p>
            <p className="kpi__micro">Si cotizas antes de 14:00, sale al día hábil siguiente. Regiones 48–72h.</p>
          </div>
          <div className="kpi glass" style={{ animationDelay: "60ms" }}>
            <p className="kpi__label">Mínimo de pedido</p>
            <p className="kpi__value">1 pallet</p>
            <p className="kpi__micro">Puedes mezclar SKUs por pallet según familia. Te armamos el mix.</p>
          </div>
          <div className="kpi glass" style={{ animationDelay: "120ms" }}>
            <p className="kpi__label">Cuenta corriente</p>
            <p className="kpi__value">Factura 30 días</p>
            <p className="kpi__micro">Evaluación en 24h con carpeta tributaria. Sin costo.</p>
          </div>
        </div>

        <div className="condiciones-grid">
          <div className="condiciones-left">
            <h3 className="h3">Qué necesitas para abrir cuenta</h3>
            <ul className="check-list">
              <li>RUT empresa + carpeta tributaria SII + referencia comercial</li>
              <li>Dirección de entrega con acceso para camión 3/4</li>
              <li>Horario de recepción Lun–Vie 09:00–17:00</li>
            </ul>
            <p className="micro-12">No pedimos “estados financieros auditados” ni “soluciones a medida”. Solo lo que usa la bodega.</p>
          </div>

          <div className="condiciones-right">
            {!bgMissing && (
              <img
                src={`${mediaBase}noctua-tile-03-4x3.png`}
                alt=""
                className="condiciones-bg"
                aria-hidden="true"
                loading="lazy"
                onError={() => {
                  console.warn("Falta media: noctua-tile-03-4x3.png");
                  setBgMissing(true);
                }}
              />
            )}
            {bgMissing && <div className="media-falta condiciones-bg-falta" data-falta="noctua-tile-03-4x3.png" aria-hidden="true" />}
            <div className="condiciones-right__overlay" />
            <div className="condiciones-right__content">
              <h3 className="h3">Plazos y cobertura montacarga</h3>
              <div className="tabla-compacta" role="table" aria-label="Plazos">
                <div className="tc-row" role="row">
                  <span role="cell">RM urbano</span>
                  <span role="cell">24h</span>
                </div>
                <div className="tc-row" role="row">
                  <span role="cell">RM rural (Tiltil, Melipilla)</span>
                  <span role="cell">48h</span>
                </div>
                <div className="tc-row" role="row">
                  <span role="cell">V Región</span>
                  <span role="cell">48h</span>
                </div>
                <div className="tc-row" role="row">
                  <span role="cell">VI–VII</span>
                  <span role="cell">72h</span>
                </div>
                <div className="tc-row" role="row">
                  <span role="cell">Sur</span>
                  <span role="cell">consultar</span>
                </div>
              </div>
              <p className="micro-12">Flete incluido RM por compras sobre $450.000 neto. Bajo ese monto, flete desde $18.900 RM.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #cobertura-bodega ──────────────────────────────────────
function CoberturaBodega() {
  const [missing, setMissing] = useState(false);
  return (
    <section id="cobertura-bodega" className="section cobertura">
      <div className="section__inner cobertura__inner">
        <div className="cobertura__text">
          <p className="kicker">COBERTURA BODEGA — QUILICURA 2.400M²</p>
          <h2 className="h2 h2--36">De Quilicura a tu bodega. Sin intermediarios.</h2>
          <p className="bajada15">Muelle propio, flota 3/4 y full. Entrega con pallet jack y filmado. No dejamos el pallet en la vereda.</p>

          <div className="metricas">
            <p className="metricas__row">Bodega 2.400m² · 480 posiciones de pallet · Temperatura 14–18°C (abarrotes secos)</p>
            <p className="metricas__row">Horario carga: Lun–Vie 07:00–16:00 · Sáb 07:00–11:00</p>
            <p className="metricas__list">
              Comunas con despacho propio: Quilicura, Pudahuel, Maipú, Cerrillos, San Bernardo, Puente Alto, Las Condes, Providencia, Ñuñoa, La Florida, Peñalolén, La Pintana. Otras comunas RM con flete externo (48h).
            </p>
          </div>

          <p className="prueba-honesta">500+ clientes B2B activos · 98,2% entregas a tiempo últimos 90 días (n=1.842 despachos) · Reclamos por daño 0,6%</p>
        </div>

        <div className="cobertura__visual">
          {!missing ? (
            <img
              src={`${mediaBase}noctua-interior-16x9.png`}
              alt="Bodega Quilicura"
              loading="lazy"
              onError={() => {
                console.warn("Falta media: noctua-interior-16x9.png");
                setMissing(true);
              }}
            />
          ) : (
            <div className="media-falta" data-falta="noctua-interior-16x9.png">
              Falta media: noctua-interior-16x9.png
            </div>
          )}
          <div className="cobertura__card">
            <p className="cobertura__card-title">Muelle 3 — Carga nocturna</p>
            <p className="cobertura__card-micro">Foto bodega real Quilicura, sin stock.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #cotizacion-lote ───────────────────────────────────────
type FormErrors = Partial<Record<string, string>>;

function CotizacionLote() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const comunas = [
    "Quilicura",
    "Pudahuel",
    "Maipú",
    "Cerrillos",
    "San Bernardo",
    "Puente Alto",
    "Las Condes",
    "Providencia",
    "Ñuñoa",
    "La Florida",
    "Peñalolén",
    "La Pintana",
    "Otra comuna RM",
    "Otra región (especificar)",
  ];

  function validate(form: HTMLFormElement): FormErrors {
    const ne: FormErrors = {};
    const get = (n: string) => (form.elements.namedItem(n) as HTMLInputElement)?.value?.trim() ?? "";
    const rut = get("rut");
    const contacto = get("contacto");
    const whatsapp = get("whatsapp");
    const email = get("email");
    const comuna = get("comuna");
    const familia = get("familia");
    const volumen = get("volumen");
    const acepto = (form.elements.namedItem("acepto") as HTMLInputElement)?.checked;

    const rutWithDots = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;
    const rutWithout = /^\d{7,8}-[\dkK]$/;
    if (!rut) ne.rut = "Campo requerido.";
    else if (!rutWithDots.test(rut) && !rutWithout.test(rut)) ne.rut = "RUT inválido. Ej: 76.123.456-7";

    if (!contacto || contacto.length < 2) ne.contacto = "Campo requerido (mín 2 caracteres).";
    const waPat = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    if (!whatsapp) ne.whatsapp = "Campo requerido.";
    else if (!waPat.test(whatsapp)) ne.whatsapp = "Formato inválido. Ej: +56 9 8407 2218";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ne.email = "Email inválido.";
    if (!comuna) ne.comuna = "Campo requerido.";
    if (!familia) ne.familia = "Campo requerido.";
    if (!volumen) ne.volumen = "Campo requerido.";
    if (!acepto) ne.acepto = "Debes aceptar para continuar.";
    return ne;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    fd.forEach((val, key) => (data[key] = String(val)));

    // simulate async
    setTimeout(() => {
      try {
        localStorage.setItem("noctua-cotizacion", JSON.stringify({ ...data, ts: Date.now() }));
      } catch {}
      setSubmitting(false);
      setSuccess(true);

      const msg = `Hola NOCTUA, quiero cotizar lote: ${data.rut || ""} ${data.comuna || ""} ${data.volumen || ""} ${data.detalle || ""}`.trim();
      const waUrl = `https://wa.me/56984072218?text=${encodeURIComponent(msg)}`;
      const win = window.open(waUrl, "_blank");
      if (!win) {
        // fallback mailto
        const mailto = `mailto:cotiza@noctua.cl?subject=${encodeURIComponent("Cotización lote NOCTUA")}&body=${encodeURIComponent(
          `Razón social / RUT: ${data.rut}\nContacto: ${data.contacto}\nWhatsApp: ${data.whatsapp}\nEmail: ${data.email || "-"}\nComuna: ${data.comuna}\nFamilia: ${data.familia}\nVolumen: ${data.volumen}\nDetalle: ${data.detalle || "-"}\n`,
        )}`;
        window.location.href = mailto;
      }
      form.reset();
      setTimeout(() => setSuccess(false), 6000);
    }, 600);
  }

  return (
    <section id="cotizacion-lote" className="section cotizacion">
      <div className="section__inner">
        <div className="section__header">
          <p className="kicker">COTIZACIÓN LOTE — RESPUESTA EN 90 MIN</p>
          <h2 className="h2 h2--36">Cotiza tu pallet. Te respondemos con stock y flete cerrado.</h2>
          <p className="bajada15">No es carrito retail. Eliges familia y volumen, te proponemos el mix y el mínimo exacto.</p>
        </div>

        <div className="cotizacion__grid">
          <form ref={formRef} className="cotizacion__form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="f-rut">Razón social / RUT empresa*</label>
              <input id="f-rut" name="rut" type="text" placeholder="76.123.456-7" autoComplete="off" />
              {errors.rut && <span className="field-error">{errors.rut}</span>}
            </div>

            <div className="field">
              <label htmlFor="f-contacto">Contacto (nombre y cargo)*</label>
              <input id="f-contacto" name="contacto" type="text" placeholder="Ej: Ana Rojas — Compras" />
              {errors.contacto && <span className="field-error">{errors.contacto}</span>}
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="f-whatsapp">WhatsApp*</label>
                <input id="f-whatsapp" name="whatsapp" type="tel" placeholder="+56 9 8407 2218" />
                {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" placeholder="contacto@empresa.cl" />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-comuna">Comuna de entrega*</label>
              <select id="f-comuna" name="comuna" defaultValue="">
                <option value="" disabled>
                  Selecciona comuna
                </option>
                {comunas.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.comuna && <span className="field-error">{errors.comuna}</span>}
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="f-familia">Familia que te interesa*</label>
                <select id="f-familia" name="familia" defaultValue="">
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="Abarrotes">Abarrotes</option>
                  <option value="Aseo">Aseo</option>
                  <option value="Bebestibles">Bebestibles</option>
                  <option value="Mezcla">Mezcla</option>
                </select>
                {errors.familia && <span className="field-error">{errors.familia}</span>}
              </div>
              <div className="field">
                <label htmlFor="f-volumen">Volumen estimado*</label>
                <select id="f-volumen" name="volumen" defaultValue="">
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="1 pallet">1 pallet</option>
                  <option value="2–3 pallets">2–3 pallets</option>
                  <option value="4+ pallets">4+ pallets</option>
                  <option value="Camión completo">Camión completo</option>
                </select>
                {errors.volumen && <span className="field-error">{errors.volumen}</span>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-detalle">Detalle (SKU o necesidad)</label>
              <textarea id="f-detalle" name="detalle" rows={3} placeholder="Ej: 2 pallets de aceite 5L + 1 de arroz 10kg, entrega en Maipú, bodega con rampa" />
            </div>

            <label className="checkbox">
              <input type="checkbox" name="acepto" />
              <span>Acepto que NOCTUA me contacte por WhatsApp y email para esta cotización. No spam.</span>
            </label>
            {errors.acepto && <span className="field-error">{errors.acepto}</span>}

            <button type="submit" className="cotizacion__submit" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Enviando…
                </>
              ) : (
                "Cotizar lote por WhatsApp"
              )}
            </button>

            {success && <p className="success-msg">Cotización enviada. Te abrimos WhatsApp con el detalle.</p>}
            <p className="micro-12" style={{ marginTop: 8 }}>
              Respuesta Lun–Vie 08:30–18:00 en 90 min. Fuera de horario, al día hábil siguiente.
            </p>
            <p className="cotizacion__alt">
              ¿Prefieres hablar? <a href="tel:+56984072218">+56 9 8407 2218</a>
            </p>
          </form>

          <div className="cotizacion__side">
            <div className="side-card">
              <h3 className="h3">Qué pasa después</h3>
              <ol className="steps">
                <li>
                  <span className="steps__n">01</span> Te confirmamos stock y mínimo exacto por SKU
                </li>
                <li>
                  <span className="steps__n">02</span> Te enviamos flete cerrado por comuna
                </li>
                <li>
                  <span className="steps__n">03</span> Factura y fecha de despacho (no “soluciones integrales”)
                </li>
              </ol>
              <div className="side-sep" />
              <p className="micro-12">Horario bodega: Lun–Vie 07:00–16:00. Carga nocturna sin costo.</p>
            </div>
            <div className="side-card side-card--accent">
              <p className="side-card__text">Sin cuenta corriente aún puedes cotizar. Te evaluamos en 24h si quieres factura 30 días.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-cols">
          <div className="footer-brand">
            <p className="footer-brand__title">NOCTUA — Distribuidora mayorista · Bodega Quilicura, Santiago. No sala de ventas retail.</p>
            <p className="footer-brand__contact">
              <a href="tel:+56984072218">+56 9 8407 2218</a> · <a href="mailto:cotiza@noctua.cl">cotiza@noctua.cl</a> · Lun–Vie 08:30–18:00
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#lista-mayorista">Lista mayorista</a>
            <a href="#condiciones-cuenta">Condiciones</a>
            <a href="#cobertura-bodega">Cobertura</a>
            <a href="#cotizacion-lote">Cotización</a>
          </nav>
        </div>
        <p className="footer-legal">Valores referenciales neto + IVA, vigencia 7 días. Fotos referenciales de bodega propia, sin marcas de terceros. NOCTUA no vende al detalle.</p>
        <p className="footer-copy">© 2026 NOCTUA SpA · RUT 76.xxx.xxx-x (ficticio demo)</p>
      </div>
    </footer>
  );
}

function StickyMobile() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-mobile" role="complementary" aria-label="Acción rápida">
      <a href="tel:+56984072218" className="sticky-mobile__ghost">
        Llamar
      </a>
      <a href="#cotizacion-lote" className="sticky-mobile__cta">
        Cotizar lote
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
        <ListaMayorista />
        <CondicionesCuenta />
        <CoberturaBodega />
        <CotizacionLote />
      </main>
      <Footer />
      <StickyMobile />
    </>
  );
}
