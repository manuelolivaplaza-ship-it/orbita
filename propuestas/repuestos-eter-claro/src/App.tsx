import { useEffect, useState } from "react";

function useMediaExists(src: string) {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    let alive = true;
    const img = new Image();
    img.onload = () => { if (alive) setOk(true); };
    img.onerror = () => { if (alive) setOk(false); };
    img.src = src;
    return () => { alive = false; };
  }, [src]);
  return ok;
}

function SafeImg({ src, filename, alt, style, className }: { src: string; filename: string; alt: string; style?: React.CSSProperties; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={style}>Falta media: {filename}</div>;
  return <img src={src} alt={alt} style={style} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

const FAMILIAS = [
  { id: "01", title: "Frenos", sub: "Pastillas, discos, tambor", ej: "Pastilla Sail 1.5 D1293 · Hi-Q", precio: "$18.900 / juego (4 pastillas) IVA inc.", pill: "STOCK RM" },
  { id: "02", title: "Filtros", sub: "Aceite, aire, bencina, polen", ej: "Filtro aceite PH-6811 · koreano", precio: "$7.900 / unidad", pill: "STOCK RM" },
  { id: "03", title: "Distribución y correas", sub: "Correa, tensor, bomba agua", ej: "Kit distribución Sail 1.5", precio: "$89.900 / kit", pill: "POR PEDIDO 48H", muted: true },
  { id: "04", title: "Encendido", sub: "Bujías, bobinas, cables", ej: "Bujías NGK x4 BKR5E", precio: "$19.900 / juego 4", pill: "STOCK RM" },
  { id: "05", title: "Suspensión", sub: "Amortiguador, bandeja, axial", ej: "Amortiguador delantero Sail", precio: "$44.900 / unidad", pill: "STOCK RM" },
  { id: "06", title: "Eléctrico y batería", sub: "Batería, alternador, motor partida", ej: "Batería 55Ah 12V", precio: "$79.900 / unidad", pill: "STOCK RM" },
];

const FICHA_ROWS = [
  { familia: "Frenos", codigo: "Pastilla del. D1293 SP-1365", medida: "131.2×52.5×15.8 mm", origen: "Hi-Q koreano", precio: "$18.900", iva: "IVA inc.", stock: "● Stock RM", sku: "D1293" },
  { familia: "Frenos", codigo: "Disco vent. 256 mm 5×100", medida: "256×22 mm", origen: "Genuine koreano", precio: "$52.900 / par", iva: "IVA inc.", stock: "● Stock RM", sku: "DISC256" },
  { familia: "Filtros", codigo: "Filtro aceite PH-6811", medida: "H 68mm Ø 65mm", origen: "Koreano", precio: "$7.900", iva: "IVA inc.", stock: "● Stock RM", sku: "PH-6811" },
  { familia: "Filtros", codigo: "Filtro aire 28113-H8100", medida: "283×162×38 mm", origen: "Koreano", precio: "$13.900", iva: "IVA inc.", stock: "● Stock RM", sku: "28113-H8100" },
  { familia: "Distribución", codigo: "Correa 6PK-1870", medida: "1870 mm 6 estrías", origen: "Gates USA", precio: "$38.900", iva: "IVA inc.", stock: "○ Por pedido 48h", sku: "6PK-1870" },
  { familia: "Encendido", codigo: "Bujía BKR5E-11 (x4)", medida: "14mm hex 16", origen: "NGK Japón", precio: "$19.900 / juego", iva: "IVA inc.", stock: "● Stock RM", sku: "BKR5E" },
  { familia: "Suspensión", codigo: "Amortiguador del. 333329", medida: "Vástago 22 mm", origen: "Mando koreano", precio: "$44.900", iva: "IVA inc.", stock: "● Stock RM", sku: "333329" },
  { familia: "Batería", codigo: "55Ah 460CCA SMF", medida: "238×129×223 mm", origen: "Hankook", precio: "$79.900", iva: "IVA inc.", stock: "● Stock RM", sku: "55AH" },
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = import.meta.env.BASE_URL;
  const src16 = `${base}media/eter-hero-16x9.png`;
  const src9 = `${base}media/eter-hero-9x16.png`;
  const srcVideo = `${base}media/eter-hero-loop.mp4`;
  const ok16 = useMediaExists(src16);
  const ok9 = useMediaExists(src9);
  const [videoOk, setVideoOk] = useState<boolean | null>(null);

  // tile srcs
  const tilePastilla = `${base}media/eter-tile-pastilla-1x1.png`;
  const tileFiltro = `${base}media/eter-tile-filtro-1x1.png`;
  const tileDisco = `${base}media/eter-tile-disco-1x1.png`;
  const tileKit = `${base}media/eter-tile-kit-3x4.png`;
  const interior = `${base}media/eter-interior-16x9.png`;
  const proof = `${base}media/eter-proof-16x9.png`;

  // compatibilidad patente mock
  const [patente, setPatente] = useState("");
  const [patError, setPatError] = useState("");
  const [searching, setSearching] = useState(false);
  const [compatResult, setCompatResult] = useState("");

  const handleCompatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = patente.trim().toUpperCase();
    const re = /^[A-Z]{2,4}[0-9]{2,4}$/;
    if (!re.test(val)) {
      setPatError("Formato patente chilena sin guión");
      setCompatResult("");
      return;
    }
    setPatError("");
    setSearching(true);
    setCompatResult("");
    setTimeout(() => {
      setSearching(false);
      setCompatResult("Chevrolet Sail 2018 1.5 · Pastilla D1293 · Disco 256 mm · Filtro aceite PH-6811");
    }, 600);
  };

  // cotiza form
  const [form, setForm] = useState({
    patente: "",
    marca: "",
    modelo: "",
    anno: "",
    repuesto: "",
    codigo: "",
    nombre: "",
    whatsapp: "",
    comuna: "",
    mensaje: "",
    consent: false,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const lastPat = localStorage.getItem("eter_patente");
      const lastRep = localStorage.getItem("eter_repuesto");
      if (lastPat || lastRep) setForm((p) => ({ ...p, patente: lastPat ?? p.patente, repuesto: lastRep ?? p.repuesto }));
    } catch { /* ignore */ }
    // prefill sku from query
    try {
      const params = new URLSearchParams(window.location.search);
      const sku = params.get("sku");
      if (sku) setForm((p) => ({ ...p, codigo: sku }));
      const hash = window.location.hash;
      if (hash.includes("sku=")) {
        const sku2 = new URLSearchParams(hash.split("?")[1] ?? "").get("sku");
        if (sku2) setForm((p) => ({ ...p, codigo: sku2 }));
      }
    } catch { /* ignore */ }
  }, []);

  const validateForm = () => {
    const e: Record<string, string> = {};
    const patVal = form.patente.trim().toUpperCase();
    const hasPat = patVal.length > 0;
    const hasMM = form.marca || form.modelo || form.anno;
    if (!hasPat && !hasMM) e.patente = "Ingresa patente o elige marca / modelo / año";
    if (hasPat && !/^[A-Z]{2,4}[0-9]{2,4}$/.test(patVal)) e.patente = "Formato patente chilena sin guión";
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!form.whatsapp.trim()) e.whatsapp = "Ingresa tu WhatsApp";
    else {
      const digits = form.whatsapp.replace(/[\s\-]/g, "");
      const norm = digits.replace(/^\+56/, "");
      if (!/^9\d{8}$/.test(norm)) e.whatsapp = "Formato +56 9 xxxx xxxx";
    }
    if (!form.comuna) e.comuna = "Elige comuna";
    if (!form.consent) e.consent = "Debes aceptar el contacto por WhatsApp";
    if (!form.repuesto) e.repuesto = "Elige un repuesto";
    return e;
  };

  const handleCotizaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateForm();
    setFormErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("eter_patente", form.patente.trim().toUpperCase());
        localStorage.setItem("eter_repuesto", form.repuesto);
      } catch { /* ignore */ }
    }, 800);
  };

  useEffect(() => {
    let alive = true;
    fetch(srcVideo, { method: "HEAD" })
      .then((r) => { if (alive) setVideoOk(r.ok); })
      .catch(() => { if (alive) setVideoOk(false); });
    return () => { alive = false; };
  }, [srcVideo]);

  const waHref = `https://wa.me/56912345678?text=${encodeURIComponent(`Hola ETER patente ${form.patente.trim().toUpperCase()} ${form.repuesto}`)}`;

  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#" aria-label="ETER inicio">
            <span className="brand-mark">ETER</span>
            <span className="brand-claim">10 DE JULIO 771 · SANTIAGO · DESDE 1998</span>
          </a>

          <nav aria-label="Principal" className="nav-desktop">
            <a href="#compatibilidad-patente">Compatibilidad</a>
            <a href="#familias-repuesto">Familias</a>
            <a href="#ficha-origen">Ficha</a>
            <a href="#stock-bodega">Stock</a>
            <a href="#retiro-despacho">Retiro</a>
          </nav>

          <div className="header-right">
            <a className="header-phone header-phone--desktop" href="tel:+56228408890">
              +56 2 2840 8890
            </a>
            <a className="btn-cta" href="#cotiza-patente">
              Cotizar por patente
            </a>
            <button
              className="hamburger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="drawer"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>

        <div id="drawer" className={`drawer ${menuOpen ? "open" : ""}`}>
          <a className="drawer-phone" href="tel:+56228408890">
            +56 2 2840 8890
          </a>
          <ul className="drawer-nav">
            <li><a href="#compatibilidad-patente" onClick={() => setMenuOpen(false)}>Compatibilidad</a></li>
            <li><a href="#familias-repuesto" onClick={() => setMenuOpen(false)}>Familias</a></li>
            <li><a href="#ficha-origen" onClick={() => setMenuOpen(false)}>Ficha y origen</a></li>
            <li><a href="#stock-bodega" onClick={() => setMenuOpen(false)}>Stock</a></li>
            <li><a href="#retiro-despacho" onClick={() => setMenuOpen(false)}>Retiro y despacho</a></li>
          </ul>
          <a className="btn-cta" href="#cotiza-patente" onClick={() => setMenuOpen(false)}>
            Cotizar por patente
          </a>
        </div>
      </header>

      <main>
        <section id="portada-bandeja" className="wrap hero" aria-label="Portada bandeja">
          <div className="hero-copy">
            <p className="kicker">REPUESTOS POR PATENTE · ORIGEN Y COMPATIBILIDAD CLAROS</p>
            <h1 className="h1" aria-label="Repuesto exacto, sin adivinar.">
              <span className="h1-line"><span>Repuesto</span></span>
              <span className="h1-line"><span><em className="h1-accent">exacto,</em> sin</span></span>
              <span className="h1-line"><span>adivinar.</span></span>
              <span style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">Repuesto exacto, sin adivinar.</span>
            </h1>
            <p className="subhead">
              Manda tu patente y te digo qué pastilla, disco o filtro usa tu auto, con precio con IVA
              y si está en mesón hoy. Alternativo coreano, original o japonés — tú eliges.
            </p>
            <div className="hero-ctas">
              <a className="btn-cta" href="#cotiza-patente">Cotizar por patente</a>
              <a className="btn-ghost" href="#ficha-origen">Ver ficha y origen</a>
            </div>
            <div className="banda-honesta">Boleta o factura · Alternativo / Original · Garantía 6 meses</div>
            <p className="micro-copy">
              ¿Cuántas veces compraste la pastilla que no era? Acá cruzamos por VIN y año exacto antes de cobrarte.
            </p>
            <div className="badges hero-badge-sello">
              <span className="badge"><em>desde</em> $18.900 IVA inc. · Pastillas</span>
              <span className="badge"><em>desde</em> $7.900 IVA inc. · Filtros</span>
            </div>
            <span style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
              Pastillas desde $18.900 IVA inc. Filtros desde $7.900 IVA inc.
            </span>
          </div>

          <div className="hero-media-wrap">
            <div className="hero-media">
              {videoOk === true ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={src16}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={() => setVideoOk(false)}
                >
                  <source src={srcVideo} type="video/mp4" />
                </video>
              ) : ok16 === false && ok9 === false ? (
                <div className="media-falta" data-falta="eter-hero-16x9.png">Falta media: eter-hero-16x9.png</div>
              ) : ok16 === false && ok9 !== false ? (
                <img src={src9} alt="Bandeja ETER vertical" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : ok16 !== false && ok9 === false ? (
                <img src={src16} alt="Bandeja ETER con pastilla, disco y filtro sobre kraft" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <picture>
                  <source media="(max-width: 900px)" srcSet={src9} />
                  <img src={src16} alt="Bandeja ETER con pastilla, disco y filtro sobre kraft" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </picture>
              )}
              {ok16 === null && ok9 === null && videoOk === false ? (
                <div style={{ display: "none" }} data-falta="eter-hero-16x9.png">Falta media: eter-hero-16x9.png</div>
              ) : null}
            </div>
            <div className="hero-caption">Bandeja ETER · pastilla + disco ventilado + filtro aceite · papel kraft · luz norte 08:00</div>
          </div>
        </section>

        {/* BANDA DE CONFIANZA sin id */}
        <section className="banda" aria-label="Banda de confianza">
          <div className="wrap banda-grid">
            <div className="banda-item">
              <span className="banda-num">27 AÑOS</span>
              <span className="banda-label">en 10 de Julio, mismo mesón</span>
            </div>
            <div className="banda-item">
              <span className="banda-num">9.400 SKU</span>
              <span className="banda-label">rotulados por modelo/año</span>
            </div>
            <div className="banda-item">
              <span className="banda-num">24H RM</span>
              <span className="banda-label">despacho por comuna · retiro 2h</span>
            </div>
            <div className="banda-item">
              <span className="banda-num">POR PATENTE</span>
              <span className="banda-label">compatibilidad por VIN</span>
            </div>
          </div>
        </section>

        {/* #compatibilidad-patente */}
        <section id="compatibilidad-patente" className="wrap section-pad">
          <p className="eyebrow">COMPATIBILIDAD</p>
          <h2 className="h2">Tu patente manda. No el ojo.</h2>
          <p className="sub">
            Ingresa patente y te muestro año, motor y qué repuesto calza. Si hay dos medidas (ej. disco 256 vs 280 mm), te digo cómo medir sin desarmar.
          </p>
          <div className="compat-grid">
            <div className="compat-left">
              <form className="card-white" onSubmit={handleCompatSubmit} noValidate>
                <label className="label-mini" htmlFor="patente-input">PATENTE</label>
                <input
                  id="patente-input"
                  className={`input-patente ${patError ? "error" : ""}`}
                  value={patente}
                  onChange={(e) => setPatente(e.target.value.toUpperCase())}
                  placeholder="ABCD12 · JXRT34"
                  inputMode="text"
                  autoComplete="off"
                  spellCheck={false}
                  aria-invalid={!!patError}
                  aria-describedby={patError ? "patente-error" : "patente-help"}
                />
                <p id="patente-help" className="micro">Formato chileno sin guión. Usamos VIN si la patente es nueva.</p>
                {patError ? <p id="patente-error" className="error-msg">{patError}</p> : null}
                <button type="submit" className="btn-compat" disabled={searching}>
                  {searching ? "Buscando en base ETER…" : "Ver qué usa mi auto"}
                </button>
                <div className="result-box" aria-live="polite">
                  {searching ? "Buscando en base ETER…" : compatResult || <span style={{ color: "rgba(23,28,32,.40)" }}>Ingresa tu patente arriba y ve el cruce exacto.</span>}
                </div>
                <a className="link-sec" href="#familias-repuesto">¿No tienes la patente a mano? Elige marca / modelo / año</a>
              </form>
            </div>
            <div className="compat-right">
              <div className="card-kraft">
                <span className="sello">COMPATIBLE</span>
                <p className="kraft-title">EJEMPLO · SAIL 1.5 2018</p>
                <p className="kraft-body">
                  Pastilla delantera Hi-Q SP-1365<br />
                  Disco ventilado 256 mm<br />
                  Filtro aceite koreano
                </p>
                <p className="kraft-precio">Desde $18.900 / juego</p>
                <p className="kraft-nota">Si tu disco es 280 mm (LTZ), avisamos antes de vender.</p>
                <div className="thumb-row">
                  <div className="thumb-88">
                    <SafeImg src={tilePastilla} filename="eter-tile-pastilla-1x1.png" alt="Pastilla de freno Hi-Q D1293" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="kraft-body" style={{ fontSize: "10px", color: "rgba(23,28,32,.55)" }}>Foto macro 1:1 · pastilla Hi-Q D1293 sobre kraft 5 mm · luz rasante textura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #familias-repuesto */}
        <section id="familias-repuesto" className="wrap section-pad">
          <p className="eyebrow">FAMILIAS</p>
          <h2 className="h2">Lo que más falla, rotulado por origen.</h2>
          <p className="sub">Elige familia, ve compatibilidad y precio al tiro. Sin pasillos infinitos.</p>
          <div className="familias-grid">
            {FAMILIAS.map((f) => (
              <a key={f.id} href="#ficha-origen" className="familia-row">
                {f.id === "02" ? (
                  <div className="familia-thumb">
                    <SafeImg src={tileFiltro} filename="eter-tile-filtro-1x1.png" alt="Filtro aceite PH-6811" />
                  </div>
                ) : f.id === "01" ? (
                  <div className="familia-thumb">
                    <SafeImg src={tilePastilla} filename="eter-tile-pastilla-1x1.png" alt="Pastilla Hi-Q" />
                  </div>
                ) : null}
                <div className="familia-main">
                  <h3 className="familia-title">{f.id} — {f.title}</h3>
                  <p className="familia-sub">{f.sub}</p>
                  <span className="familia-ej">{f.ej}</span>
                  <span className="familia-precio"><em>desde</em> {f.precio}</span>
                  <span className={`familia-pill ${f.muted ? "muted" : ""}`}>{f.pill}</span>
                </div>
                <span className="familia-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        {/* #ficha-origen */}
        <section id="ficha-origen" className="wrap section-pad">
          <p className="eyebrow">FICHA / ORIGEN</p>
          <h2 className="h2 h2-sm">Ficha con medida, origen y precio con IVA.</h2>
          <p className="sub">Cada fila trae código ETER, medida exacta y origen. El precio es con IVA y se confirma por comuna al cotizar. Alternativo koreano/japonés u original a pedido.</p>
          <div className="ficha-layout">
            <div className="ficha-table-col">
              <div className="table-wrap">
                <table className="table" aria-label="Ficha con medida y precio">
                  <thead>
                    <tr>
                      <th>FAMILIA</th>
                      <th>CÓDIGO / MEDIDA</th>
                      <th>ORIGEN</th>
                      <th>$ UNITARIO (CLP)</th>
                      <th>IVA</th>
                      <th>STOCK</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FICHA_ROWS.map((r) => (
                      <tr key={r.sku} onClick={() => { window.location.hash = `cotiza-patente?sku=${encodeURIComponent(r.sku)}`; const el = document.getElementById("cotiza-patente"); el?.scrollIntoView({ behavior: "smooth" }); setForm((p) => ({ ...p, codigo: r.sku })); }}>
                        <td>{r.familia}</td>
                        <td><span className="mono">{r.codigo}</span> <span style={{ color: "rgba(23,28,32,.55)", fontSize: "11px" }}>{r.medida}</span></td>
                        <td>{r.origen}</td>
                        <td className="mono">{r.precio}</td>
                        <td>{r.iva}</td>
                        <td>{r.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="ficha-note">Valores referenciales con IVA; despacho por comuna y garantía 6 meses. Se confirma al cotizar por patente/WhatsApp. Original a pedido 48–72h.</p>
            </div>
            <div className="ficha-media-col">
              <div className="discover-media">
                <SafeImg src={tileDisco} filename="eter-tile-disco-1x1.png" alt="Disco ventilado 256 mm sobre kraft" />
              </div>
              <p className="caption">Disco ventilado 256 mm · canto y pista nítidos · kraft</p>
            </div>
          </div>
        </section>

        {/* #stock-bodega */}
        <section id="stock-bodega" className="wrap section-pad">
          <h2 className="h2 h2-sm">Stock real en mesón. No humo.</h2>
          <p className="sub">Si dice stock, está en la mano. Si es a pedido, te digo cuántas horas.</p>
          <div className="stock-wrap">
            <div className="mini-table-wrap">
              <table className="mini-table">
                <thead>
                  <tr><th>BODEGA</th><th>DIRECCIÓN</th><th>HORARIO</th><th>SKU HOY</th><th>RETIRO</th></tr>
                </thead>
                <tbody>
                  <tr><td>10 de Julio</td><td>10 de Julio 771, Santiago</td><td>Lun–Vie 9:00–18:30 Sáb 9:30–14:00</td><td>● 9.400 SKU</td><td>Hoy 2h</td></tr>
                  <tr><td>Puente Alto</td><td>Eyzaguirre 01234</td><td>Lun–Vie 9:30–18:00 Sáb 9:30–13:30</td><td>○ 2.100 SKU</td><td>Hoy 2h</td></tr>
                </tbody>
              </table>
              <div className="mini-cards">
                <div className="mini-card reveal">
                  <strong>10 de Julio — 10 de Julio 771, Santiago</strong>
                  <span>Lun–Vie 9:00–18:30 · Sáb 9:30–14:00</span>
                  <span>● 9.400 SKU · Hoy 2h</span>
                </div>
                <div className="mini-card reveal">
                  <strong>Puente Alto — Eyzaguirre 01234</strong>
                  <span>Lun–Vie 9:30–18:00 · Sáb 9:30–13:30</span>
                  <span>○ 2.100 SKU · Hoy 2h</span>
                </div>
              </div>
            </div>

            <div className="map-wrap">
              <SafeImg src={proof} filename="eter-proof-16x9.png" alt="Mesón con bandejas y guías de despacho" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span className="map-overlay">Cobertura RM hoy · regiones por Starken/Bluexpress 24–48h</span>
            </div>
            {/* fallback for missing proof when SafeImg fails we already show media-falta; overlay still visible via CSS? we keep it separate? SafeImg fallback div replaces img but overlay stays */}
            <div className="metrics">
              <div className="metric reveal"><span className="metric-num">98%</span><span className="metric-label">DESPACHO A TIEMPO</span></div>
              <div className="metric reveal"><span className="metric-num">6 MESES</span><span className="metric-label">GARANTÍA</span></div>
              <div className="metric reveal"><span className="metric-num">27 AÑOS</span><span className="metric-label">EN 10 DE JULIO</span></div>
            </div>

            <div className="interior-wrap">
              <SafeImg src={interior} filename="eter-interior-16x9.png" alt="Bodega Santiago con racks rotulados" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <p className="caption">Bodega Santiago · racks rotulados por marca/modelo/año · 09:15</p>
          </div>
        </section>

        {/* #retiro-despacho */}
        <section id="retiro-despacho" className="wrap section-pad">
          <p className="eyebrow">RETIRO Y DESPACHO</p>
          <h2 className="h2 h2-sm">Retiro en 2h o despacho por comuna mañana.</h2>
          <div className="retiro-grid">
            <div className="retiro-col reveal">
              <p className="retiro-num">01 — Cotiza por patente</p>
              <h3 className="retiro-h3">En 3 minutos por WhatsApp</h3>
              <p className="retiro-p">Manda foto del padrón o patente, te respondo con código exacto y precio cerrado. Humana 09:00–18:30.</p>
            </div>
            <div className="retiro-col reveal">
              <p className="retiro-num">02 — Reserva</p>
              <h3 className="retiro-h3">Boleta o factura al tiro</h3>
              <p className="retiro-p">Te guardo el repuesto 24h sin abono. Empresa con OC y crédito 30 días.</p>
            </div>
            <div className="retiro-col reveal">
              <p className="retiro-num">03 — Recibe</p>
              <h3 className="retiro-h3">En mesón o en tu taller</h3>
              <p className="retiro-p">Retiro 2h en 10 de Julio, despacho RM mañana por comuna, regiones 24–48h.</p>
            </div>
            <div className="kit-media">
              <SafeImg src={tileKit} filename="eter-tile-kit-3x4.png" alt="Kit distribución correa y tensor sobre papel técnico" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* #cotiza-patente */}
        <section id="cotiza-patente" className="wrap section-pad" style={{ paddingBottom: "72px" }}>
          <p className="eyebrow">COTIZAR</p>
          <h2 className="h2 h2-sm">Cotiza por patente. Te respondo con código exacto.</h2>
          <p className="sub">Si no tienes la patente, elige marca/modelo/año. Respuesta humana, no bot que adivina.</p>
          <div className="cotiza-grid">
            <div className="cotiza-left">
              {success ? (
                <div className="success-card">
                  <div className="success-head"><span className="check-icon">✓</span> Listo. Te hablo por WhatsApp en minutos con precio y stock. Queda guardado en este equipo.</div>
                  <a className="btn-wa" href={waHref} target="_blank" rel="noreferrer">Abrir WhatsApp</a>
                  <button className="btn-ghost" type="button" onClick={() => setSuccess(false)}>Hacer otra cotización</button>
                </div>
              ) : (
                <form className="form" onSubmit={handleCotizaSubmit} noValidate>
                  <div className="field">
                    <label className="label-mini" htmlFor="c-patente">Patente</label>
                    <input id="c-patente" className={`input mono ${formErrors.patente ? "error" : ""}`} value={form.patente} onChange={(e) => setForm({ ...form, patente: e.target.value.toUpperCase() })} placeholder="ABCD12" aria-invalid={!!formErrors.patente} />
                    {formErrors.patente ? <span className="error-msg">{formErrors.patente}</span> : <span className="help">Formato chileno sin guión (ABCD12 · JXRT34)</span>}
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label className="label-mini" htmlFor="c-marca">Marca</label>
                      <select id="c-marca" className="select" value={form.marca} onChange={(e) => setForm({ ...form, marca: e.target.value })}>
                        <option value="">Elige marca</option>
                        <option>Chevrolet</option><option>Hyundai</option><option>Kia</option><option>Toyota</option><option>Nissan</option><option>Suzuki</option><option>Peugeot</option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="label-mini" htmlFor="c-modelo">Modelo</label>
                      <select id="c-modelo" className="select" value={form.modelo} onChange={(e) => setForm({ ...form, modelo: e.target.value })}>
                        <option value="">Elige modelo</option>
                        <option>Sail</option><option>Accent</option><option>Rio</option><option>Yaris</option><option>Versa</option><option>Baleno</option><option>208</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label-mini" htmlFor="c-anno">Año</label>
                    <select id="c-anno" className="select" value={form.anno} onChange={(e) => setForm({ ...form, anno: e.target.value })}>
                      <option value="">Elige año</option>
                      {Array.from({ length: 16 }, (_, i) => 2010 + i).map((y) => <option key={y} value={String(y)}>{y}</option>)}
                    </select>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label className="label-mini" htmlFor="c-repuesto">Repuesto que buscas</label>
                      <select id="c-repuesto" className={`select ${formErrors.repuesto ? "error" : ""}`} value={form.repuesto} onChange={(e) => setForm({ ...form, repuesto: e.target.value })} aria-invalid={!!formErrors.repuesto}>
                        <option value="">Elige repuesto</option>
                        <option>Pastillas</option><option>Discos</option><option>Filtros</option><option>Correa</option><option>Bujías</option><option>Amortiguador</option><option>Batería</option><option>Otro</option>
                      </select>
                      {formErrors.repuesto ? <span className="error-msg">{formErrors.repuesto}</span> : null}
                    </div>
                    <div className="field">
                      <label className="label-mini" htmlFor="c-codigo">Código si lo tienes (opcional)</label>
                      <input id="c-codigo" className="input mono" value={form.codigo} onChange={(e) => setForm({ ...form, codigo: e.target.value.toUpperCase() })} placeholder="Ej. D1293, PH-6811" />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label className="label-mini" htmlFor="c-nombre">Nombre</label>
                      <input id="c-nombre" className={`input ${formErrors.nombre ? "error" : ""}`} value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre" aria-invalid={!!formErrors.nombre} />
                      {formErrors.nombre ? <span className="error-msg">{formErrors.nombre}</span> : null}
                    </div>
                    <div className="field">
                      <label className="label-mini" htmlFor="c-wa">WhatsApp</label>
                      <input id="c-wa" className={`input ${formErrors.whatsapp ? "error" : ""}`} value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+56 9 1234 5678" inputMode="tel" aria-invalid={!!formErrors.whatsapp} />
                      {formErrors.whatsapp ? <span className="error-msg">{formErrors.whatsapp}</span> : <span className="help">Te hablo al WhatsApp, no llamo sin avisar</span>}
                    </div>
                  </div>

                  <div className="field">
                    <label className="label-mini" htmlFor="c-comuna">Comuna despacho</label>
                    <select id="c-comuna" className={`select ${formErrors.comuna ? "error" : ""}`} value={form.comuna} onChange={(e) => setForm({ ...form, comuna: e.target.value })} aria-invalid={!!formErrors.comuna}>
                      <option value="">Elige comuna</option>
                      <option>Santiago Centro</option><option>Providencia</option><option>Las Condes</option><option>Ñuñoa</option><option>La Florida</option><option>Maipú</option><option>Puente Alto</option><option>San Bernardo</option><option>Valparaíso</option><option>Concepción</option>
                    </select>
                    {formErrors.comuna ? <span className="error-msg">{formErrors.comuna}</span> : null}
                  </div>

                  <div className="field">
                    <label className="label-mini" htmlFor="c-mensaje">Mensaje</label>
                    <textarea id="c-mensaje" className="textarea" rows={3} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} placeholder="Ej. Sail 2018 1.5 LT, ¿tienes pastilla Hi-Q o sólo original?" />
                  </div>

                  <label className="checkbox-wrap">
                    <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} aria-invalid={!!formErrors.consent} />
                    <span>Acepto que me contacten por WhatsApp para esta cotización</span>
                  </label>
                  {formErrors.consent ? <span className="error-msg" style={{ marginTop: "-8px" }}>{formErrors.consent}</span> : null}

                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? <><span className="spinner" aria-hidden="true" /> Enviando…</> : "Cotizar por patente"}
                  </button>
                </form>
              )}
              <div className="sticky-mobile">
                <a href="tel:+56228408890" className="header-phone">+56 2 2840 8890</a>
                <a href="#cotiza-patente" className="btn-cta">Cotizar por patente</a>
              </div>
            </div>

            <div className="cotiza-right">
              <div className="kraft-right">
                <h3>QUÉ PASA DESPUÉS</h3>
                <ul className="kraft-bullets">
                  <li>1. Cruzo patente/VIN y te mando foto del repuesto exacto</li>
                  <li>2. Precio con IVA y si es alternativo u original</li>
                  <li>3. Reserva 24h y retiro 2h o despacho mañana</li>
                </ul>
                <p className="help">Garantía 6 meses. Factura al tiro.</p>
                <div className="proof-block">
                  <p className="proof-label">TALLERES QUE COMPRAN ACÁ</p>
                  <div className="proof-names">
                    <span>TALLER LINK</span><span>AS AUTOMOTRIZ</span><span>SERVO 10</span><span>FRENO 10</span>
                  </div>
                  <p className="proof-note">27 años en 10 de Julio. No usamos fotos de clientes ni estrellas inventadas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="footer-mark">ETER</div>
            <p className="footer-claim">10 DE JULIO 771 · SANTIAGO · Lun–Vie 9:00–18:30 Sáb 9:30–14:00</p>
            <p className="footer-meta">Desde 1998 · 9.400 SKU rotulados</p>
          </div>
          <div className="footer-links">
            <nav className="footer-nav" aria-label="Footer">
              <a href="#familias-repuesto">Familias</a>
              <a href="#ficha-origen">Ficha</a>
              <a href="#stock-bodega">Stock</a>
              <a href="#retiro-despacho">Retiro</a>
            </nav>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-lines">
              +56 2 2840 8890 · +56 9 1234 5678<br />
              hola@eter-repuestos.cl (demo)
            </div>
            <p className="footer-contact-note">Boleta o factura · Garantía 6 meses</p>
          </div>
        </div>
      </footer>
    </>
  );
}
