import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap">
        <div className="header-inner">
          <a href="#meson" className="logo" aria-label="NOCTUA inicio">
            NOCTUA
          </a>
          <nav className="nav" aria-label="Navegación principal">
            <a href="#busca-por-vin">Busca por VIN</a>
            <a href="#stock-hoy">Stock hoy</a>
            <a href="#compatibilidad-garantia">Compatibilidad</a>
            <a href="#bodega-noctua">Bodega</a>
          </nav>
          <a href="tel:+56983417729" className="header-tel">
            +56 9 8341 7729
          </a>
          <a href="#cotiza-retira" className="header-cta">
            Cotizar por VIN
          </a>
          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={open ? { transform: "translateY(5.5px) rotate(45deg)" } : undefined} />
            <span style={open ? { opacity: 0 } : undefined} />
            <span style={open ? { transform: "translateY(-5.5px) rotate(-45deg)" } : undefined} />
          </button>
        </div>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`} id="mobile-nav">
        <a href="#busca-por-vin" onClick={() => setOpen(false)}>
          Busca por VIN
        </a>
        <a href="#stock-hoy" onClick={() => setOpen(false)}>
          Stock hoy
        </a>
        <a href="#compatibilidad-garantia" onClick={() => setOpen(false)}>
          Compatibilidad
        </a>
        <a href="#bodega-noctua" onClick={() => setOpen(false)}>
          Bodega
        </a>
        <a href="tel:+56983417729" className="mobile-tel">
          +56 9 8341 7729
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const heroDesktop = "/media/noctua-hero-16x9.png";
  const heroMobile = "/media/noctua-hero-9x16.png";
  const [desktopOk, setDesktopOk] = useState<boolean | null>(null);
  const [mobileOk, setMobileOk] = useState<boolean | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = heroDesktop;
    img.onload = () => setDesktopOk(true);
    img.onerror = () => {
      setDesktopOk(false);
      console.warn("[NOCTUA] falta media: noctua-hero-16x9.png");
    };
    const imgM = new Image();
    imgM.src = heroMobile;
    imgM.onload = () => setMobileOk(true);
    imgM.onerror = () => {
      setMobileOk(false);
      console.warn("[NOCTUA] falta media: noctua-hero-9x16.png");
    };
  }, []);

  const showMedia = desktopOk === true || mobileOk === true;

  return (
    <section id="meson" className="hero" aria-label="Hero mesón">
      {showMedia ? (
        <picture className="hero-media" aria-hidden="true">
          <source media="(max-width: 760px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="" decoding="async" fetchPriority="high" />
        </picture>
      ) : desktopOk === false ? (
        <div
          className="media-falta"
          data-falta="noctua-hero-16x9.png"
          style={{
            aspectRatio: "16/9",
            background: "#121A22",
            border: "1px solid #1E2A33",
            display: "grid",
            placeItems: "center",
            color: "#7A8A9A",
            font: "500 0.85rem 'IBM Plex Sans'",
          }}
        >
          falta: noctua-hero-16x9.png
        </div>
      ) : (
        <div
          className="media-falta"
          data-falta="noctua-hero-16x9.png"
          style={{
            aspectRatio: "16/9",
            background: "#121A22",
            border: "1px solid #1E2A33",
            display: "grid",
            placeItems: "center",
            color: "#7A8A9A",
            font: "500 0.85rem 'IBM Plex Sans'",
          }}
        >
          falta: noctua-hero-16x9.png
        </div>
      )}

      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-filete" aria-hidden="true" />

      <div className="hero-content">
        <div className="wrap" style={{ width: "100%" }}>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">10 DE JULIO — BODEGA NOCTURNA · DESPACHO HOY HASTA LAS 19:00</p>
              <h1 className="hero-h1">Repuesto exacto por VIN hoy, con boleta, sin vuelta ni letra chica.</h1>
              <p className="hero-sub">
                Pones patente o VIN y ves si lo tenemos en mesón. Foto real de la pieza, código OEM y precio con
                IVA. Si no está, no lo publicamos.
              </p>
              <div className="hero-ctas">
                <a href="#busca-por-vin" className="btn-primary">
                  Cotizar por VIN con precio real
                </a>
                <a href="#stock-hoy" className="btn-ghost">
                  Ver stock crítico hoy
                </a>
              </div>
              <div className="hero-banda" aria-label="Banda honesta">
                <span className="banda-item">
                  <span className="banda-dot" aria-hidden="true" /> Stock en 10 de Julio
                </span>
                <span className="banda-item">
                  <span className="banda-dot" aria-hidden="true" /> Código OEM a la vista
                </span>
                <span className="banda-item">
                  <span className="banda-dot" aria-hidden="true" /> Boleta y garantía escrita
                </span>
              </div>
              <p className="hero-micro">
                Sin abono para cotizar. Precio con IVA. Despacho RM hoy si pides antes de las 14:00. Retiro en
                mesón hasta las 19:00.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-caption">
        <div className="wrap">
          <span>Disco ventilado 280mm · caja kraft · etiqueta VIN 5000K · 20:45</span>
        </div>
      </div>
    </section>
  );
}

function SafeImg({
  src,
  alt,
  style,
  className,
  fallbackStyle,
}: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  fallbackStyle?: React.CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop() || src;
  useEffect(() => {
    setFailed(false);
  }, [src]);
  if (failed) {
    return (
      <div
        className="media-falta"
        data-falta={filename}
        style={{
          display: "grid",
          placeItems: "center",
          background: "#121A22",
          border: "1px solid #1E2A33",
          color: "#7A8A9A",
          font: "500 0.85rem 'IBM Plex Sans'",
          textAlign: "center",
          padding: "24px",
          ...fallbackStyle,
          ...style,
        }}
      >
        falta: {filename}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => {
        setFailed(true);
        console.warn(`[NOCTUA] falta media: ${filename}`);
      }}
    />
  );
}

function BuscaPorVin() {
  const [motor, setMotor] = useState<string | null>(null);
  const [lado, setLado] = useState<string | null>(null);
  const [origen, setOrigen] = useState<string | null>(null);

  return (
    <section id="busca-por-vin" className="section">
      <div className="wrap">
        <div className="grid12">
          <div className="busca-header">
            <p className="kicker">BUSCA POR PATENTE O VIN</p>
            <h2 className="h2">Escribe tu patente. Te digo en segundos si lo tengo y cuánto vale.</h2>
            <p className="intro">
              Base por modelo/año/motor + revisión visual en mesón. Si el OEM no calza, te digo cuál sí y por qué.
              Sin “universal”.
            </p>
          </div>
        </div>

        <div className="grid12" style={{ marginTop: "28px" }}>
          {/* buscador col 1-7 */}
          <div className="busca-card">
            <div className="busca-inputs">
              <label className="field">
                <span className="label">Patente *</span>
                <input placeholder="ABCD12" className="input" />
              </label>
              <label className="field">
                <span className="label">VIN (opcional)</span>
                <input placeholder="17 caracteres" className="input" />
              </label>
              <label className="field">
                <span className="label">Modelo / Año</span>
                <select className="input" defaultValue="">
                  <option value="" disabled>
                    ej. Mazda 3 2018 2.0
                  </option>
                  <option>Mazda 3 2018 2.0</option>
                  <option>Mazda CX-30 2020 2.0</option>
                  <option>Mazda 6 2019 2.5</option>
                </select>
              </label>
            </div>

            <div className="chips-group">
              <div className="chips-row" aria-label="Motor">
                <span className="chips-label">Motor</span>
                {["1.6", "2.0", "Diésel"].map((c) => (
                  <button
                    key={c}
                    className={`chip ${motor === c ? "chip-active" : ""}`}
                    onClick={() => setMotor(motor === c ? null : c)}
                    type="button"
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="chips-row" aria-label="Lado">
                <span className="chips-label">Lado</span>
                {["Delantero", "Trasero"].map((c) => (
                  <button
                    key={c}
                    className={`chip ${lado === c ? "chip-active" : ""}`}
                    onClick={() => setLado(lado === c ? null : c)}
                    type="button"
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="chips-row" aria-label="Origen">
                <span className="chips-label">Origen</span>
                {["Original", "Alternativo coreano", "Alternativo japonés"].map((c) => (
                  <button
                    key={c}
                    className={`chip ${origen === c ? "chip-active" : ""}`}
                    onClick={() => setOrigen(origen === c ? null : c)}
                    type="button"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <button className="btn-primary" style={{ width: "100%", marginTop: "14px" }} type="button">
              Buscar repuesto exacto
            </button>

            <div className="resultado">
              <div className="resultado-main">
                <SafeImg
                  src="/media/noctua-tile-01-1x1.png"
                  alt="Pastillas delanteras"
                  style={{ width: "72px", height: "72px", objectFit: "cover", flexShrink: 0, border: "1px solid var(--linea)" }}
                  fallbackStyle={{ width: "72px", height: "72px" }}
                />
                <div className="resultado-txt">
                  <p className="resultado-title">Mazda 3 2018 2.0 — Pastillas delanteras OEM B4Y0-33-23Z</p>
                  <p className="resultado-meta">
                    Stock: SÍ · En mesón · Precio $42.900 con IVA · Alternativo $38.900
                  </p>
                  <div className="resultado-links">
                    <a href="#stock-hoy">Ver foto 1:1</a>
                    <span>·</span>
                    <a href="#stock-hoy">Ver stock hoy</a>
                  </div>
                </div>
              </div>
              <p className="resultado-nota">
                Valores referenciales CLP con IVA; se confirma al validar VIN en mesón.
              </p>
            </div>
          </div>

          {/* lateral col 8-12 */}
          <div className="busca-lateral">
            <SafeImg
              src="/media/noctua-tile-04-1x1.png"
              alt="Mesón de acero con caja kraft"
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
              fallbackStyle={{ aspectRatio: "4/3", width: "100%" }}
            />
            <p className="caption">Mesón acero · caja kraft · etiqueta OEM · 5000K</p>
            <div className="verificamos">
              <p className="verificamos-title">Cómo verificamos</p>
              <ul>
                <li>Cruzamos VIN con catálogo OEM</li>
                <li>Medimos espesor/cotas en mesón</li>
                <li>Foto real antes de despachar</li>
                <li>Si no calza, no se cobra</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Ficha = {
  titulo: string;
  oem: string;
  estado: "En mesón" | "A pedido 24h";
  compat: string;
  precio: string;
  sub: string;
};

const FICHAS: Ficha[] = [
  { titulo: "Pastillas delanteras Mazda 3 / CX-30", oem: "B4Y0-33-23Z", estado: "En mesón", compat: "Mazda 3 2.0 / CX-30 2.0 · Delantero · 280mm", precio: "$42.900", sub: "+ IVA incluido · alternativo $38.900" },
  { titulo: "Discos delanteros ventilados 280mm", oem: "B45A-33-25X", estado: "En mesón", compat: "Mazda 3 2.0 · Delantero · 280mm", precio: "$89.900", sub: "par" },
  { titulo: "Filtro aceite", oem: "PE01-14-302", estado: "En mesón", compat: "Mazda 3 / CX-30 2.0 · Motor 2.0", precio: "$12.900", sub: "" },
  { titulo: "Filtro aire", oem: "PEY1-13-3A0", estado: "En mesón", compat: "Mazda 3 2.0 · Admisión", precio: "$18.500", sub: "" },
  { titulo: "Filtro polen/cabina", oem: "B61P-61-J6X", estado: "En mesón", compat: "Mazda 3 / CX-30 · Cabina", precio: "$16.900", sub: "" },
  { titulo: "Amortiguador delantero", oem: "BJS7-34-700", estado: "A pedido 24h", compat: "Mazda 3 2014–2018 · Delantero", precio: "$72.900", sub: "c/u" },
  { titulo: "Amortiguador trasero", oem: "BJS7-28-700", estado: "A pedido 24h", compat: "Mazda 3 2014–2018 · Trasero", precio: "$68.500", sub: "c/u" },
  { titulo: "Kit embrague 2.0", oem: "Exedy OEM", estado: "En mesón", compat: "Mazda 3 2.0 · Manual", precio: "$189.000", sub: "" },
  { titulo: "Correa accesorios 6PK", oem: "Gates OEM", estado: "En mesón", compat: "Mazda 3 2.0 · Accesorios", precio: "$24.900", sub: "" },
  { titulo: "Bujías iridio x4", oem: "NGK OEM", estado: "En mesón", compat: "Mazda 3 / CX-30 2.0 · Kit", precio: "$44.900", sub: "kit" },
  { titulo: "Termostato 82°C", oem: "LF01-15-170", estado: "A pedido 24h", compat: "Mazda 3 2.0 · Refrigeración", precio: "$32.500", sub: "" },
  { titulo: "Pastillas traseras", oem: "B4Y0-26-43Z", estado: "En mesón", compat: "Mazda 3 2.0 · Trasero", precio: "$36.900", sub: "" },
];

function tileForIndex(i: number) {
  const mod = i % 4;
  if (mod === 0) return "/media/noctua-tile-01-1x1.png";
  if (mod === 1) return "/media/noctua-tile-02-1x1.png";
  if (mod === 2) return "/media/noctua-tile-03-1x1.png";
  return "/media/noctua-tile-04-1x1.png";
}

function StockHoy() {
  return (
    <section id="stock-hoy" className="section" style={{ background: "var(--bg)" }}>
      <div className="wrap">
        <div className="grid12">
          <div className="stock-header">
            <p className="kicker">STOCK CRÍTICO HOY · 12 PIEZAS EN MESÓN · 10 DE JULIO 771</p>
            <h2 className="h2">Lo que ves está en mesón. Foto real, código y precio con IVA.</h2>
            <p className="intro">Si dice “En mesón” lo retiras hoy hasta las 19:00. Si dice “A pedido 24h” llega mañana con abono.</p>
          </div>
        </div>

        <div className="stock-grid">
          {FICHAS.map((f, idx) => (
            <article key={idx} className="ficha">
              <div className="ficha-img-wrap">
                <SafeImg
                  src={tileForIndex(idx)}
                  alt={f.titulo}
                  style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }}
                  fallbackStyle={{ aspectRatio: "1/1", width: "100%", minHeight: "180px" }}
                />
              </div>
              <div className="ficha-body">
                <p className="ficha-oem">
                  <span className={`dot ${f.estado === "En mesón" ? "dot-ok" : "dot-warn"}`} aria-hidden="true" />
                  {f.oem} · {f.estado}
                </p>
                <h3 className="ficha-title">{f.titulo}</h3>
                <p className="ficha-compat">{f.compat}</p>
                <p className="ficha-precio">
                  {f.precio} <span className="ficha-sub">{f.sub}</span>
                </p>
                {idx === 0 && <p className="ficha-sub" style={{ marginTop: "2px" }}>alternativo $38.900</p>}
                <a href="#cotiza-retira" className="ficha-cta">
                  Cotizar este por VIN
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="banda-despacho">
          <span className="banda-item">
            <span className="banda-dot" /> Retiro hoy hasta 19:00
          </span>
          <span className="banda-item">
            <span className="banda-dot" /> Despacho RM hoy si pides antes 14:00 $7.900
          </span>
          <span className="banda-item">
            <span className="banda-dot" /> Regiones 24–48h por Starken/Correos
          </span>
        </div>
        <p className="nota-honesta">
          Valores con IVA referenciales; se confirman al validar VIN. Garantía 6 meses por falla de fabricación. No se
          acepta retorno de parte instalada.
        </p>
      </div>
    </section>
  );
}

function CompatibilidadGarantia() {
  return (
    <section id="compatibilidad-garantia" className="section">
      <div className="wrap">
        <div className="grid12 comp-grid">
          <div className="comp-img-col">
            <SafeImg
              src="/media/noctua-tile-02-1x1.png"
              alt="Detalle disco y calibre sobre mesón"
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
              fallbackStyle={{ aspectRatio: "3/4", width: "100%" }}
            />
            <p className="caption">Mesón acero · calibre vernier · 5000K</p>
          </div>
          <div className="comp-content">
            <p className="kicker">COMPATIBILIDAD Y GARANTÍA</p>
            <h2 className="h2">Si no es tu medida exacta, te digo antes de cobrar.</h2>
            <p className="intro">No vendemos “universal”. Cruzamos año/motor/VIN y medimos en mesón.</p>

            <div className="comp-bloques">
              <div className="comp-bloque">
                <p className="bloque-k">01 · Original vs alternativo</p>
                <p className="bloque-t">Original Mazda, alternativo japonés/coreano con ficha de dureza y país. Eliges con precio a la vista.</p>
              </div>
              <div className="comp-bloque">
                <p className="bloque-k">02 · Qué incluye</p>
                <p className="bloque-t">Caja sellada, clips/antirruido si aplica, boleta y etiqueta OEM. Foto real antes de despachar.</p>
              </div>
              <div className="comp-bloque">
                <p className="bloque-k">03 · Qué no</p>
                <p className="bloque-t">No incluye instalación. No se recibe parte usada. Parte instalada no tiene devolución salvo falla de fábrica.</p>
              </div>
            </div>

            <div className="tabla-wrap">
              <table className="tabla">
                <thead>
                  <tr>
                    <th></th>
                    <th>ORIGINAL</th>
                    <th>ALTERNATIVO JAPONÉS</th>
                    <th>ALTERNATIVO COREANO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pastillas del. Mazda 3</td>
                    <td className="precio-td">$42.900</td>
                    <td className="precio-td">$38.900</td>
                    <td className="precio-td">$32.500</td>
                  </tr>
                  <tr>
                    <td>Discos 280mm par</td>
                    <td className="precio-td">$118.000</td>
                    <td className="precio-td">$89.900</td>
                    <td className="precio-td">$79.900</td>
                  </tr>
                  <tr>
                    <td>Garantía</td>
                    <td>6 meses</td>
                    <td>6 meses</td>
                    <td>3 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="checklist">
              <li>
                <span className="check">✓</span> Boleta con SKU/OEM
              </li>
              <li>
                <span className="check">✓</span> Etiqueta VIN fotografiada
              </li>
              <li>
                <span className="check">✓</span> Medidas en mesón
              </li>
              <li>
                <span className="check">✓</span> Garantía escrita con fecha y timbre
              </li>
            </ul>

            <p className="precio-inline">Validación por VIN sin costo. Si no calza, no se cobra despacho.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BodegaNoctua() {
  return (
    <section id="bodega-noctua" className="section">
      <div className="wrap">
        <div className="grid12 bodega-grid">
          <div className="bodega-img-col">
            <SafeImg
              src="/media/noctua-interior-16x9.png"
              alt="Pasillo bodega nocturna"
              style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
              fallbackStyle={{ aspectRatio: "16/9", width: "100%" }}
            />
            <p className="caption">Pasillo 3 · anaquel galvanizado · luz 5000K · hormigón sellado</p>
          </div>
          <div className="bodega-txt">
            <p className="kicker">10 DE JULIO 771 · SANTIAGO — BODEGA NOCTURNA</p>
            <h2 className="h2" style={{ fontSize: "1.65rem" }}>
              Bodega ordenada, pieza a la vista, sin humo.
            </h2>
            <p className="intro">
              No tenemos vendedora comisionista. Tenemos mesón con vernier, catálogo OEM y foto real. Entras, mides,
              comparas y te vas con boleta.
            </p>
            <div className="bodega-datos">
              <span>
                <span className="dot dot-amber" /> 11 años en 10 de Julio
              </span>
              <span>
                <span className="dot dot-amber" /> +18.000 SKU cruzados
              </span>
              <span>
                <span className="dot dot-amber" /> 96% calce a la primera por VIN
              </span>
              <span>
                <span className="dot dot-amber" /> Horario Lun–Vie 9:00–19:00 Sáb 10:00–14:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CotizaRetira() {
  const [nombre, setNombre] = useState("");
  const [wa, setWa] = useState("");
  const [patente, setPatente] = useState("");
  const [vin, setVin] = useState("");
  const [repuesto, setRepuesto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fotoReal, setFotoReal] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Nombre debe tener al menos 2 caracteres";
    // WhatsApp regex: +56 9 1234 5678 or 9 + 8 digits
    const waClean = wa.trim();
    const waRegex1 = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    const waRegex2 = /^9\d{8}$/;
    if (!waRegex1.test(waClean) && !waRegex2.test(waClean.replace(/\s/g, ""))) {
      e.wa = "Formato: +56 9 1234 5678 o 9XXXXXXXX";
    }
    if (!/^[A-Z0-9]{6,8}$/.test(patente.trim().toUpperCase())) {
      e.patente = "Patente 6–8 caracteres alfanuméricos (ej. ABCD12)";
    }
    if (vin.trim() !== "" && !/^[A-Za-z0-9]{17}$/.test(vin.trim())) {
      e.vin = "VIN debe tener 17 caracteres alfanuméricos";
    }
    if (!repuesto) e.repuesto = "Selecciona un repuesto";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const data = { nombre, wa, patente, vin, repuesto, mensaje, fotoReal, at: Date.now() };
      try {
        localStorage.setItem("noctua-cotiza-v1", JSON.stringify(data));
      } catch {}
      const texto = `Hola NOCTUA, patente ${patente.toUpperCase()} necesito ${repuesto}${mensaje ? " — " + mensaje : ""}`;
      const url = `https://wa.me/56983417729?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
      setTimeout(() => setSuccess(false), 4000);
    }, 800);
  };

  return (
    <section id="cotiza-retira" className="section">
      <div className="wrap">
        <div className="grid12 cotiza-grid">
          <div className="cotiza-form-col">
            <p className="kicker">COTIZA Y RETIRA HOY</p>
            <h2 className="h2" style={{ fontSize: "1.65rem" }}>
              Mándame patente y foto del padrón. Te respondo con precio y foto real en minutos.
            </h2>
            <p className="intro">Si lo tengo en mesón, lo retiras hoy. Si es a pedido 24h, te digo hora exacta de llegada.</p>

            <form className="form-card" onSubmit={handleSubmit} noValidate>
              <label className="field">
                <span className="label">Nombre *</span>
                <input
                  className={`input ${errors.nombre ? "input-error" : ""}`}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                />
                {errors.nombre && <span className="error-msg">{errors.nombre}</span>}
              </label>

              <label className="field">
                <span className="label">WhatsApp *</span>
                <input
                  className={`input ${errors.wa ? "input-error" : ""}`}
                  value={wa}
                  onChange={(e) => setWa(e.target.value)}
                  placeholder="+56 9 1234 5678"
                />
                {errors.wa && <span className="error-msg">{errors.wa}</span>}
              </label>

              <div className="form-row2">
                <label className="field">
                  <span className="label">Patente *</span>
                  <input
                    className={`input ${errors.patente ? "input-error" : ""}`}
                    value={patente}
                    onChange={(e) => setPatente(e.target.value.toUpperCase())}
                    placeholder="ABCD12"
                    style={{ textTransform: "uppercase" }}
                  />
                  {errors.patente && <span className="error-msg">{errors.patente}</span>}
                </label>
                <label className="field">
                  <span className="label">VIN opcional</span>
                  <input
                    className={`input ${errors.vin ? "input-error" : ""}`}
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    placeholder="17 caracteres"
                  />
                  {errors.vin && <span className="error-msg">{errors.vin}</span>}
                </label>
              </div>

              <label className="field">
                <span className="label">Repuesto que buscas *</span>
                <select
                  className={`input ${errors.repuesto ? "input-error" : ""}`}
                  value={repuesto}
                  onChange={(e) => setRepuesto(e.target.value)}
                >
                  <option value="">Selecciona</option>
                  <option>Pastillas</option>
                  <option>Discos</option>
                  <option>Filtro</option>
                  <option>Amortiguador</option>
                  <option>Kit embrague</option>
                  <option>Correa</option>
                  <option>Bujías</option>
                  <option>Otro</option>
                </select>
                {errors.repuesto && <span className="error-msg">{errors.repuesto}</span>}
              </label>

              <label className="field">
                <span className="label">Mensaje</span>
                <textarea
                  className="input"
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Ej: Mazda 3 2018 2.0, necesito discos delanteros 280mm"
                  style={{ resize: "vertical" }}
                />
              </label>

              <label className="checkbox-row">
                <input type="checkbox" checked={fotoReal} onChange={(e) => setFotoReal(e.target.checked)} />
                <span>Quiero foto real antes de pagar</span>
              </label>

              <button className="btn-primary" style={{ width: "100%", marginTop: "8px" }} type="submit" disabled={loading}>
                {loading ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span className="spinner" aria-hidden="true" />
                    Cotizando...
                  </span>
                ) : (
                  "Cotizar por VIN ahora"
                )}
              </button>

              {success && (
                <div className="form-success" role="status">
                  <span style={{ color: "#E8B84A" }}>✓</span> Cotización enviada. Te respondo por WhatsApp con foto y precio en
                  minutos. Quedó guardado — si recargas, no pierdes datos.
                </div>
              )}

              <p className="form-micro">
                Sin abono para cotizar. Respuesta en horario de mesón (9:00–19:00). Fuera de horario respondemos a
                primera hora.
              </p>
            </form>
          </div>

          <div className="cotiza-lateral">
            <SafeImg
              src="/media/noctua-proof-16x9.png"
              alt="Boleta y etiqueta OEM"
              style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
              fallbackStyle={{ aspectRatio: "16/9", width: "100%" }}
            />
            <p className="caption">Etiqueta OEM + boleta + foto real antes de despachar</p>

            <div className="contact-block">
              <p>+56 9 8341 7729 · hola@noctua-repuestos.cl</p>
              <p>10 de Julio 771, Santiago (10 de Julio con San Francisco)</p>
              <p>Horario Lun–Vie 9:00–19:00 Sáb 10:00–14:00</p>
            </div>

            <div className="mapa-minimo" aria-label="Mapa 10 de Julio">
              <svg viewBox="0 0 300 220" width="100%" height="100%" role="img" aria-label="Mapa mínimo 10 de Julio">
                <rect width="300" height="220" fill="#0E1318" />
                {/* calles grilla */}
                <line x1="0" y1="60" x2="300" y2="60" stroke="#1E2A33" strokeWidth="1" />
                <line x1="0" y1="110" x2="300" y2="110" stroke="#E8B84A" strokeWidth="2.5" />
                <line x1="0" y1="160" x2="300" y2="160" stroke="#1E2A33" strokeWidth="1" />
                <line x1="80" y1="0" x2="80" y2="220" stroke="#1E2A33" strokeWidth="1" />
                <line x1="150" y1="0" x2="150" y2="220" stroke="#1E2A33" strokeWidth="1" />
                <line x1="220" y1="0" x2="220" y2="220" stroke="#1E2A33" strokeWidth="1" />
                {/* labels */}
                <text x="152" y="105" fill="#E8B84A" fontFamily="IBM Plex Sans" fontSize="7" fontWeight="600" letterSpacing="0.08em">
                  10 DE JULIO
                </text>
                <text x="84" y="50" fill="#7A8A9A" fontFamily="IBM Plex Sans" fontSize="6">
                  San Francisco
                </text>
                <text x="154" y="175" fill="#7A8A9A" fontFamily="IBM Plex Sans" fontSize="6">
                  Carmen
                </text>
                {/* punto noctua */}
                <circle cx="150" cy="110" r="5" fill="#FF3D2E" stroke="#E8E6E1" strokeWidth="1" />
                <text x="150" y="128" fill="#E8E6E1" fontFamily="IBM Plex Sans" fontSize="7" fontWeight="600" textAnchor="middle">
                  NOCTUA 771
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid12 footer-grid">
          <div className="footer-brand">
            <p className="footer-logo">NOCTUA</p>
            <p className="footer-tagline">Repuestos exactos por VIN — 10 de Julio 771.</p>
          </div>
          <div className="footer-links">
            <a href="#busca-por-vin">Busca por VIN</a>
            <a href="#stock-hoy">Stock hoy</a>
            <a href="#compatibilidad-garantia">Compatibilidad</a>
            <a href="#cotiza-retira">Cotiza</a>
          </div>
          <div className="footer-contact">
            <p>+56 9 8341 7729 · hola@noctua-repuestos.cl</p>
            <p>Horario Lun–Vie 9:00–19:00 Sáb 10:00–14:00</p>
            <p className="footer-legales">
              Valores con IVA referenciales; se confirman al validar VIN en mesón. Boleta reembolsable. Garantía escrita
              según tabla.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BuscaPorVin />
        <StockHoy />
        <CompatibilidadGarantia />
        <BodegaNoctua />
        <CotizaRetira />
      </main>
      <Footer />
    </>
  );
}
