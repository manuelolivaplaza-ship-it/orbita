import { useState, useEffect } from "react";

// ---------- media helpers ----------
function useMediaExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => { if (!cancelled) setExists(true); };
    img.onerror = () => {
      if (!cancelled) {
        setExists(false);
        console.warn(`media falta: ${src}`);
      }
    };
    img.src = src;
    return () => { cancelled = true; };
  }, [src]);
  return exists;
}

function useVideoExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((r) => { if (!cancelled) setExists(r.ok); })
      .catch(() => { if (!cancelled) setExists(false); });
    return () => { cancelled = true; };
  }, [src]);
  return exists;
}

function MediaImg({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop() || src;
  if (failed) {
    return <div className={`media-falta ${className ?? ""}`.trim()} data-falta={filename} style={style}>media falta: {filename}</div>;
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      style={style}
      onError={() => {
        console.warn(`media falta: ${filename}`);
        setFailed(true);
      }}
    />
  );
}

function HeroMedia() {
  const desktop = "/media/alba-hero-16x9.png";
  const mobile = "/media/alba-hero-9x16.png";
  const videoSrc = "/media/alba-hero-loop.mp4";
  const dExists = useMediaExists(desktop);
  const mExists = useMediaExists(mobile);
  const vExists = useVideoExists(videoSrc);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = vExists === true && !videoFailed;

  useEffect(() => {
    if (dExists === false) console.warn("media falta: alba-hero-16x9.png");
    if (mExists === false) console.warn("media falta: alba-hero-9x16.png");
  }, [dExists, mExists]);

  return (
    <div className="hero__media">
      {showVideo && (
        <video
          className="hero__video hero__img--desktop"
          autoPlay
          muted
          loop
          playsInline
          poster={desktop}
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {/* desktop still - hidden when video works on desktop */}
      <div className={showVideo ? "hero__img-wrap hero__img-wrap--hidemobile" : undefined} style={showVideo ? { display: "contents" } : undefined}>
        {dExists === false ? (
          <div className="media-falta hero__img--desktop" data-falta="alba-hero-16x9.png">media falta: alba-hero-16x9.png</div>
        ) : (
          <img
            className={`hero__img hero__img--desktop${showVideo ? " hero__img--behind" : ""}`}
            src={desktop}
            alt="Tabla de raulí con masa madre fermentando y harina espolvoreada, luz de amanecer por ventana alta"
            loading="eager"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const ph = document.createElement("div");
              ph.className = "media-falta hero__img--desktop";
              ph.setAttribute("data-falta", "alba-hero-16x9.png");
              ph.textContent = "media falta: alba-hero-16x9.png";
              t.parentElement?.appendChild(ph);
              console.warn("media falta: alba-hero-16x9.png");
            }}
          />
        )}
      </div>
      {/* mobile always image */}
      {mExists === false ? (
        <div className="media-falta hero__img--mobile" data-falta="alba-hero-9x16.png">media falta: alba-hero-9x16.png</div>
      ) : (
        <img
          className="hero__img hero__img--mobile"
          src={mobile}
          alt="Tabla de raulí con masa madre en vertical, aire superior negativo"
          loading="eager"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            const ph = document.createElement("div");
            ph.className = "media-falta hero__img--mobile";
            ph.setAttribute("data-falta", "alba-hero-9x16.png");
            ph.textContent = "media falta: alba-hero-9x16.png";
            t.parentElement?.appendChild(ph);
            console.warn("media falta: alba-hero-9x16.png");
          }}
        />
      )}
      <div className="hero__chip">Desde $3.900 · hogaza 900g</div>
    </div>
  );
}

// ---------- form ----------
type FormErrors = Partial<Record<"nombre" | "whatsapp" | "pedido" | "direccion", string>>;

function validateNombre(v: string): string | null {
  if (!v.trim() || v.trim().length < 2) return "Ingresa al menos 2 caracteres";
  return null;
}
function validateWhatsapp(v: string): string | null {
  const raw = v.replace(/\s/g, "");
  // +56 9 + 8 dígitos
  const re = /^\+56\s?9\d{8}$/;
  // allow variants: +56912345678, +56 9 12345678, +56 912345678
  const compact = raw.replace(/\s/g, "");
  if (!re.test(compact) && !/^\+569\d{8}$/.test(compact)) return "Formato: +56 9 + 8 dígitos";
  return null;
}
function validatePedido(v: string): string | null {
  if (!v.trim() || v.trim().length < 5) return "Describe tu pedido (mín 5 caracteres)";
  return null;
}

export function App() {
  const [drawer, setDrawer] = useState(false);
  // form state
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [fecha, setFecha] = useState("Retiro mañana 08:00");
  const [direccion, setDireccion] = useState("");
  const [pedido, setPedido] = useState("");
  const [pago, setPago] = useState("Webpay");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const isDespacho = fecha.includes("Despacho");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("alba_pedido");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.nombre) setNombre(d.nombre);
        if (d.whatsapp) setWhatsapp(d.whatsapp);
        if (d.fecha) setFecha(d.fecha);
        if (d.direccion) setDireccion(d.direccion);
        if (d.pedido) setPedido(d.pedido);
        if (d.pago) setPago(d.pago);
      }
    } catch { /* ignore */ }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: FormErrors = {};
    const nErr = validateNombre(nombre);
    if (nErr) errs.nombre = nErr;
    const wErr = validateWhatsapp(whatsapp);
    if (wErr) errs.whatsapp = wErr;
    const pErr = validatePedido(pedido);
    if (pErr) errs.pedido = pErr;
    if (isDespacho && !direccion.trim()) errs.direccion = "Ingresa dirección para despacho";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const data = { nombre, whatsapp, fecha, direccion, pedido, pago };
      try { localStorage.setItem("alba_pedido", JSON.stringify(data)); } catch { /* ignore */ }
      const waText = `Hola ALBA, soy ${nombre} (${whatsapp}). Fecha: ${fecha}${isDespacho ? ` - Dirección: ${direccion}` : ""}. Pedido: ${pedido}. Pago: ${pago}.`;
      const url = `https://wa.me/56981234567?text=${encodeURIComponent(waText)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }, 800);
  }

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__left">
            <a className="logo" href="#">ALBA</a>
            <nav className="nav" aria-label="Principal">
              <a className="nav__link" href="#carta"><span>01</span> Carta</a>
              <a className="nav__link" href="#horno-de-piedra"><span>02</span> Horno</a>
              <a className="nav__link" href="#packs-suscripcion"><span>03</span> Packs</a>
              <a className="nav__link" href="#despacho-retiro"><span>04</span> Despacho</a>
              <a className="nav__link" href="#taller-abierto"><span>05</span> Taller</a>
            </nav>
          </div>
          <div className="header__right">
            <a className="header__phone" href="tel:+56981234567">+56 9 8123 4567</a>
            <a className="header__cta" href="#pedido">Armar pedido</a>
          </div>
          <button
            className="header__ham"
            aria-label="Menú"
            aria-expanded={drawer}
            onClick={() => setDrawer(v => !v)}
          >
            <span />
          </button>
        </div>
        <div className={`drawer ${drawer ? "drawer--open" : ""}`}>
          <nav className="drawer__nav" aria-label="Menú móvil">
            <a className="drawer__link" href="#carta" onClick={() => setDrawer(false)}><span>01</span> Carta</a>
            <a className="drawer__link" href="#horno-de-piedra" onClick={() => setDrawer(false)}><span>02</span> Horno</a>
            <a className="drawer__link" href="#packs-suscripcion" onClick={() => setDrawer(false)}><span>03</span> Packs</a>
            <a className="drawer__link" href="#despacho-retiro" onClick={() => setDrawer(false)}><span>04</span> Despacho</a>
            <a className="drawer__link" href="#taller-abierto" onClick={() => setDrawer(false)}><span>05</span> Taller</a>
            <a className="drawer__phone" href="tel:+56981234567">+56 9 8123 4567</a>
            <a className="drawer__cta" href="#pedido" onClick={() => setDrawer(false)}>Armar pedido</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-label="Presentación">
        <div className="hero__inner">
          <div className="hero__index" aria-hidden="true">
            <span>01</span>
            <span>02</span>
            <span>03</span>
          </div>
          <div className="hero__text">
            <p className="hero__kicker">OBRADOR PROPIO · HORNO DE PIEDRA · DESDE 2019</p>
            <h1 className="hero__h1">Pan de masa madre horneado hoy. Retira 08:00 o despachamos a domicilio.</h1>
            <p className="hero__bajada">Hogazas de 72 horas de fermentación. Harina nacional, agua y sal. Sin premezclas. Cupos diarios limitados — si se agota, se agota.</p>
            <div className="hero__ctas">
              <a className="btn-primary" href="https://wa.me/56981234567?text=Hola%20ALBA%2C%20quiero%20armar%20un%20pedido" target="_blank" rel="noopener noreferrer">Armar pedido por WhatsApp</a>
              <a className="btn-secondary" href="#carta">Ver carta completa →</a>
            </div>
            <p className="hero__micro">Valores referenciales. Se confirma stock al pagar. Retiro en Providencia o despacho RM.</p>
          </div>
          <HeroMedia />
        </div>
      </section>

      {/* #carta */}
      <section id="carta" className="section section--carta">
        <div className="shell grid12 carta__grid">
          <div className="carta__index" aria-hidden="true">01</div>
          <div className="carta__main">
            <h2 className="h2">La carta de hoy</h2>
            <p className="sub">Horneamos cada madrugada. Lo que ves es lo que hay. Cupos por orden de pedido.</p>
            <ul className="carta__list" role="list">
              <li className="carta__row">
                <span className="carta__name">Hogaza masa madre <em>· 900g · fermentación 72h</em></span>
                <span className="carta__desc"></span>
                <span className="carta__price">$6.900</span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Baguette rústica <em>· 350g · corteza fina</em></span>
                <span className="carta__price">$3.900</span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Focaccia romero y oliva <em>· 500g · molde rectangular</em></span>
                <span className="carta__price">$5.500 <i>desde</i></span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Pan de molde integral <em>· 700g · sin azúcar</em></span>
                <span className="carta__price">$5.200</span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Croissant mantequilla <em>· 80g · hojaldre 3 pliegues</em></span>
                <span className="carta__price">$2.400 <i>c/u</i></span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Pain au chocolat <em>· 90g</em></span>
                <span className="carta__price">$2.600 <i>c/u</i></span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Roll de canela <em>· 110g · glaseado leve</em></span>
                <span className="carta__price">$2.800 <i>c/u</i></span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Ciabatta <em>· 400g · miga alveolada</em></span>
                <span className="carta__price">$4.200</span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Pan pita integral <em>· pack 6u</em></span>
                <span className="carta__price">$4.800</span>
              </li>
              <li className="carta__row">
                <span className="carta__name">Granola tostada <em>· 500g</em></span>
                <span className="carta__price">$6.400</span>
              </li>
            </ul>
            <p className="micro-nota">Valores referenciales IVA incluido. Se confirma tras elegir retiro/despacho. Sin stock = no cobramos.</p>
          </div>
          <aside className="carta__aside" aria-label="Destacado">
            <div className="carta__card">
              <MediaImg src="/media/alba-tile-02-3x4.png" alt="Croissants de mantequilla apilados sobre papel kraft, corteza laminada" className="carta__card-img" />
              <h3 className="carta__card-title">Caja del día</h3>
              <p className="carta__card-desc">6 piezas surtidas para hoy</p>
              <p className="carta__card-price">$18.900</p>
              <a className="carta__card-cta" href="#pedido">Agregar caja →</a>
            </div>
            <div className="carta__card carta__card--alt">
              <MediaImg src="/media/alba-tile-01-1x1.png" alt="Focaccia de romero y oliva en bandeja metálica" className="carta__card-img carta__card-img--1x1" />
              <p className="carta__card-alttext">Focaccia del día · aceite y romero fresco</p>
            </div>
          </aside>
        </div>
      </section>

      {/* #horno-de-piedra */}
      <section id="horno-de-piedra" className="section section--horno">
        <div className="shell grid12 horno__grid">
          <div className="horno__text">
            <p className="kicker">02 — HORNO DE PIEDRA</p>
            <h2 className="h2">Fuego, tiempo y harina. Nada más.</h2>
            <div className="horno__block">
              <h3 className="horno__h3">Fermentación larga, horno caliente</h3>
              <p className="body">Fermentamos 48–72h en frío. Horneamos a 260° en piedra. Cada hogaza cruje igual, nunca idéntica.</p>
            </div>
            <div className="horno__datos">
              <div className="dato"><span className="dato__num">72h</span><span className="dato__label">fermentación</span></div>
              <div className="dato"><span className="dato__num">260°</span><span className="dato__label">piedra</span></div>
              <div className="dato"><span className="dato__num">06:00</span><span className="dato__label">horneada</span></div>
            </div>
            <p className="body">Usamos harina de La Unión y sal de Cáhuil. Sin mejoradores. El pan dura 3 días envuelto en paño — o lo congelas en rebanadas.</p>
            <p className="micro-nota">Valores referenciales IVA incluido. Se confirma tras elegir retiro/despacho.</p>
          </div>
          <div className="horno__media">
            <MediaImg src="/media/alba-interior-16x9.png" alt="Interior de horno de piedra vacío con pala de madera apoyada, ladrillo refractario" className="horno__img" />
          </div>
        </div>
      </section>

      {/* #packs-suscripcion */}
      <section id="packs-suscripcion" className="section section--packs">
        <div className="shell">
          <p className="kicker">03 — PACKS Y SUSCRIPCIÓN</p>
          <h2 className="h2">Si pan es todos los días, que llegue solo.</h2>
          <div className="packs__grid">
            <article className="pack">
              <span className="pack__label">MÁS PEDIDO</span>
              <h3 className="pack__title">Caja Alba 6</h3>
              <p className="pack__desc">2 hogazas o 6 piezas dulces a elección. Ideal para la semana.</p>
              <p className="pack__price">$18.900</p>
              <p className="pack__sub">Retiro o despacho</p>
              <MediaImg src="/media/alba-tile-04-4x3.png" alt="Caja kraft abierta con 6 piezas surtidas" className="pack__img" />
              <a className="pack__cta" href="#pedido">Elegir caja →</a>
            </article>
            <article className="pack">
              <h3 className="pack__title">Suscripción semanal</h3>
              <p className="pack__desc">3 entregas (lun mié vie) · 2 panes chicos + focaccia. Pausa cuando quieras.</p>
              <p className="pack__price">$34.900 <em>/ semana</em></p>
              <span className="pack__badge">Ahorra 12%</span>
              <MediaImg src="/media/alba-tile-01-1x1.png" alt="Focaccia romero y oliva en bandeja" className="pack__img" />
              <a className="pack__cta" href="#pedido">Ver suscripción →</a>
            </article>
            <article className="pack">
              <h3 className="pack__title">Pack oficina 20</h3>
              <p className="pack__desc">20 piezas surtidas para reunión o regalo equipo. Con tarjeta escrita a mano.</p>
              <p className="pack__price">$42.000</p>
              <MediaImg src="/media/alba-tile-03-1x1.png" alt="Hogaza masa madre con greña abierta y miga alveolada" className="pack__img pack__img--1x1" />
              <a className="pack__cta" href="#pedido">Cotizar pack →</a>
            </article>
          </div>
          <p className="micro-nota">Despacho martes a sábado. Suscripción sin amarre: pausas por WhatsApp hasta 18:00 día anterior.</p>
          <p className="micro-nota">Valores referenciales IVA incluido. Se confirma tras elegir retiro/despacho.</p>
        </div>
      </section>

      {/* #despacho-retiro */}
      <section id="despacho-retiro" className="section section--despacho">
        <div className="shell">
          <h2 className="h2">Retiro y despacho sin letra chica</h2>
          <div className="despacho__grid">
            <div className="despacho__col despacho__col--retiro">
              <h3 className="despacho__h3">Retiro en obrador</h3>
              <p className="body">Av. Providencia 1208, local 3. Lun–sáb 08:00–14:00.</p>
              <div className="despacho__map" aria-label="Mapa retiro">
                <span className="despacho__pin" aria-hidden="true">◎</span>
                <span>Av. Providencia 1208</span>
              </div>
              <p className="micro-nota">Retira 08:00–11:00 pan caliente. Después, temperatura ambiente.</p>
            </div>
            <div className="despacho__col despacho__col--despacho">
              <h3 className="despacho__h3">Despacho RM</h3>
              <div className="despacho__tabla">
                <div className="despacho__fila"><span>Santiago centro/oriente</span><strong>$3.900</strong></div>
                <div className="despacho__fila"><span>Resto RM</span><strong>$4.900</strong></div>
                <div className="despacho__fila despacho__fila--accent"><span>Gratis sobre $35.000</span><span></span></div>
              </div>
              <p className="body">Pedidos hasta 18:00 llegan mañana 09:00–13:00. Domingo no horneamos.</p>
              <MediaImg src="/media/alba-proof-4x3.png" alt="Mesa de trabajo con harina espolvoreada, rasqueta y paño lino" className="despacho__proof" />
            </div>
          </div>
          <div className="despacho__pagos" aria-label="Medios de pago">
            <span className="chip">Webpay</span>
            <span className="chip">Transferencia</span>
            <span className="chip">Efectivo en retiro</span>
          </div>
          <p className="micro-nota">Valores referenciales IVA incluido. Se confirma tras elegir retiro/despacho.</p>
        </div>
      </section>

      {/* #taller-abierto */}
      <section id="taller-abierto" className="section section--taller">
        <div className="shell grid12 taller__grid">
          <div className="taller__text">
            <p className="kicker">04 — TALLER ABIERTO</p>
            <h2 className="h2">Ven a mirar cómo se hace.</h2>
            <p className="body">Abrimos el obrador los sábados 10:00 a visitas de 20 min. Sin inscripción, por orden de llegada. Ves la masa, el horno y te llevas un pancito caliente.</p>
            <div className="taller__metrics">
              <div className="metric"><span className="metric__num">142</span><span className="metric__label">pedidos sábado promedio</span></div>
              <div className="metric"><span className="metric__num">4,8/5</span><span className="metric__label">· 316 reseñas Google</span></div>
              <div className="metric"><span className="metric__num">Desde 2019</span><span className="metric__label">horneando</span></div>
            </div>
            <p className="micro-nota">Valores referenciales IVA incluido. Se confirma tras elegir retiro/despacho.</p>
          </div>
          <div className="taller__mosaico" aria-label="Mosaico taller">
            <MediaImg src="/media/alba-tile-01-1x1.png" alt="Focaccia romero y oliva" className="taller__tile" />
            <MediaImg src="/media/alba-tile-03-1x1.png" alt="Hogaza masa madre corteza caramelo" className="taller__tile" />
          </div>
        </div>
      </section>

      {/* #pedido */}
      <section id="pedido" className="section section--pedido">
        <div className="shell grid12 pedido__grid">
          <div className="pedido__formcol">
            <h2 className="h2">Arma tu pedido</h2>
            <p className="sub">Elige, paga y te confirmamos stock por WhatsApp en minutos. Si algo se agotó, te proponemos cambio o devolvemos.</p>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <label className="field">
                <span className="field__label">Nombre *</span>
                <input className={`field__input ${errors.nombre ? "field__input--error" : ""}`} type="text" required placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                {errors.nombre && <span className="field__error">{errors.nombre}</span>}
              </label>
              <label className="field">
                <span className="field__label">WhatsApp *</span>
                <input className={`field__input ${errors.whatsapp ? "field__input--error" : ""}`} type="tel" required placeholder="+56 9 ..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                {errors.whatsapp && <span className="field__error">{errors.whatsapp}</span>}
              </label>
              <label className="field">
                <span className="field__label">Fecha retiro/despacho *</span>
                <select className="field__input" value={fecha} onChange={(e) => setFecha(e.target.value)}>
                  <option>Retiro mañana 08:00</option>
                  <option>Despacho mañana 09–13h</option>
                  <option>Otra fecha</option>
                </select>
              </label>
              {isDespacho && (
                <label className="field">
                  <span className="field__label">Dirección despacho *</span>
                  <input className={`field__input ${errors.direccion ? "field__input--error" : ""}`} type="text" placeholder="Calle, comuna" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                  {errors.direccion && <span className="field__error">{errors.direccion}</span>}
                </label>
              )}
              <label className="field">
                <span className="field__label">Pedido *</span>
                <textarea className={`field__input field__textarea ${errors.pedido ? "field__input--error" : ""}`} required placeholder="Ej: 1 hogaza + 4 croissants + 1 caja Alba 6" rows={4} value={pedido} onChange={(e) => setPedido(e.target.value)} />
                {errors.pedido && <span className="field__error">{errors.pedido}</span>}
              </label>
              <fieldset className="field field--radio">
                <legend className="field__label">Medio de pago *</legend>
                <label className="radio"><input type="radio" name="pago" value="Webpay" checked={pago === "Webpay"} onChange={() => setPago("Webpay")} /> Webpay</label>
                <label className="radio"><input type="radio" name="pago" value="Transferencia" checked={pago === "Transferencia"} onChange={() => setPago("Transferencia")} /> Transferencia</label>
                <label className="radio"><input type="radio" name="pago" value="Efectivo" checked={pago === "Efectivo"} onChange={() => setPago("Efectivo")} /> Efectivo retiro</label>
              </fieldset>
              <p className="micro-nota">Valores referenciales IVA incluido. Confirmamos total y stock por WhatsApp antes de cobrar. No pedimos datos de tarjeta por este formulario.</p>
              <button className="btn-primary form__submit" type="submit" disabled={loading}>
                {loading ? "Enviando…" : "Enviar pedido por WhatsApp →"}
              </button>
              {success && <p className="form__success" role="status">Pedido enviado — te confirmamos stock por WhatsApp en minutos</p>}
            </form>
          </div>
          <div className="pedido__resumen">
            <ul className="resumen__list" role="list">
              <li>· Horneamos 06:00, confirmamos 07:30</li>
              <li>· Despacho RM $3.900–$4.900, gratis +$35k</li>
              <li>· Si no hay stock, te avisamos antes de cobrar</li>
            </ul>
            <p className="resumen__phone"><a href="tel:+56981234567">+56 9 8123 4567</a></p>
            <p className="resumen__horario">Lun–sáb 07:30–14:00 · Domingo cerrado</p>
            <div className="faq" aria-label="Preguntas frecuentes">
              {[
                { q: "¿Puedo congelar el pan?", a: "Sí. Rebanado y en bolsa bien cerrada, 2–3 meses. Tostador directo sin descongelar." },
                { q: "¿Tienen sin gluten?", a: "No. Nuestro obrador trabaja con harina de trigo. No podemos asegurar libre de gluten." },
                { q: "¿Factura?", a: "Sí, emitimos factura electrónica. Pídela al confirmar por WhatsApp con datos de empresa." },
              ].map((item, i) => (
                <div key={item.q} className={`faq__item ${faqOpen === i ? "faq__item--open" : ""}`}>
                  <button type="button" className="faq__q" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}>
                    <span>{item.q}</span><span className="faq__icon">{faqOpen === i ? "−" : "+"}</span>
                  </button>
                  <div className="faq__a" hidden={faqOpen !== i}>
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stickybar" aria-label="Acción rápida">
        <a className="stickybar__phone" href="tel:+56981234567">+56 9 8123 4567</a>
        <a className="stickybar__cta" href="#pedido">Pedir</a>
      </div>

      <footer className="footer">
        <div className="shell">
          <p className="micro-nota">ALBA · Av. Providencia 1208, local 3 · Lun–sáb 08:00–14:00 · Domingo cerrado</p>
          <p className="micro-nota">Valores referenciales IVA incluido. Se confirma tras elegir retiro/despacho.</p>
        </div>
      </footer>
    </>
  );
}
