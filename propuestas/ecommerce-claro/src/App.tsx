import { useEffect, useState } from "react";

// ─── tipos ───────────────────────────────────────────────────────────────────
type ItemCarro = { id: string; nombre: string; precio: number; qty: number };
type Producto = { id: string; nombre: string; precio: number; stock: number; micro?: string; cat: string; tile: string; alt: string };

// helpers
const CLP = (n: number) => `$${n.toLocaleString("es-CL")}`;
const STORAGE_CARRO = "bazar-austral-carro";
const STORAGE_PEDIDOS = "bazar-austral-pedidos";

// ─── datos literales BLUEPRINT ───────────────────────────────────────────────
const SELECCION: (Producto & { micro: string; badge: string })[] = [
  {
    id: "sel-tabla-lenga",
    nombre: "Tabla de lenga 38cm — veta viva",
    precio: 24900,
    stock: 6,
    micro: "Lenga valdiviana, aceite natural. 38×22×2cm.",
    badge: "Quedan 6",
    cat: "Cocina",
    tile: "bazar-austral-tile-01-1x1.png",
    alt: "Tabla de lenga 38cm veta viva sobre lino",
  },
  {
    id: "sel-set-bowl",
    nombre: "Set bowl cerámica 3u — gres moteado",
    precio: 32900,
    stock: 4,
    micro: "Gres moteado, 16cm. Apilables.",
    badge: "Quedan 4",
    cat: "Mesa",
    tile: "bazar-austral-tile-02-1x1.png",
    alt: "Set bowl gres moteado trío apilado sobre lino",
  },
  {
    id: "sel-manta-merino",
    nombre: "Manta lana merino — crudo",
    precio: 49900,
    stock: 9,
    micro: "Merino crudo 130×180cm. Tejido denso.",
    badge: "Quedan 9",
    cat: "Textil",
    tile: "bazar-austral-tile-03-1x1.png",
    alt: "Manta lana merino crudo doblada textura lana",
  },
];

const CATALOGO: Producto[] = [
  { id: "p01", nombre: "Frasco hermético roble 1L", precio: 12900, stock: 11, micro: "Vidrio + tapa roble", cat: "Cocina", tile: "bazar-austral-tile-01-1x1.png", alt: "Frasco hermético vidrio tapa roble 1L sobre lino" },
  { id: "p02", nombre: "Frasco hermético roble 0.6L", precio: 9900, stock: 8, micro: "Vidrio + tapa roble", cat: "Cocina", tile: "bazar-austral-tile-02-1x1.png", alt: "Frasco hermético vidrio tapa roble 0.6L sobre lino" },
  { id: "p03", nombre: "Tabla lenga 38cm", precio: 24900, stock: 6, micro: "Lenga valdiviana, aceite natural", cat: "Cocina", tile: "bazar-austral-tile-03-1x1.png", alt: "Tabla lenga 38cm veta viva" },
  { id: "p04", nombre: "Tabla raulí 32cm", precio: 19900, stock: 10, micro: "Raulí nativo, borde vivo", cat: "Cocina", tile: "bazar-austral-tile-04-1x1.png", alt: "Tabla raulí 32cm sobre lino" },
  { id: "p05", nombre: "Bowl gres moteado 16cm", precio: 14900, stock: 7, micro: "Gres moteado artesanal", cat: "Mesa", tile: "bazar-austral-tile-01-1x1.png", alt: "Bowl gres moteado 16cm" },
  { id: "p06", nombre: "Set bowl 3u", precio: 32900, stock: 4, micro: "Gres moteado — 3 piezas", cat: "Mesa", tile: "bazar-austral-tile-02-1x1.png", alt: "Set bowl gres moteado 3 unidades" },
  { id: "p07", nombre: "Canasto tejido tote", precio: 18900, stock: 9, micro: "Fibra natural tejido", cat: "Guarda", tile: "bazar-austral-tile-03-1x1.png", alt: "Canasto tejido tote" },
  { id: "p08", nombre: "Manta merino crudo 130×180", precio: 49900, stock: 5, micro: "Lana merino crudo", cat: "Textil", tile: "bazar-austral-tile-04-1x1.png", alt: "Manta merino crudo 130 por 180 doblada" },
  { id: "p09", nombre: "Lámpara velador lino", precio: 39900, stock: 3, micro: "Base cerámica + pantalla lino", cat: "Mesa", tile: "bazar-austral-tile-01-1x1.png", alt: "Lámpara velador lino sobre mesa" },
  { id: "p10", nombre: "Vela soya 280g", precio: 15900, stock: 14, micro: "Cera soya, pabilo algodón", cat: "Mesa", tile: "bazar-austral-tile-02-1x1.png", alt: "Vela soya 280 gramos" },
  { id: "p11", nombre: "Dispensador jabón cerámica", precio: 16900, stock: 6, micro: "Gres esmaltado", cat: "Mesa", tile: "bazar-austral-tile-03-1x1.png", alt: "Dispensador jabón cerámica" },
  { id: "p12", nombre: "Caja guarda kraft 32L plegable", precio: 22900, stock: 12, micro: "Kraft reciclado, asa reforzada", cat: "Guarda", tile: "bazar-austral-tile-04-1x1.png", alt: "Caja guarda kraft 32 litros plegable" },
];

const FILTROS = ["Todo", "Cocina", "Mesa", "Textil", "Guarda"] as const;

// ─── tile helper ─────────────────────────────────────────────────────────────
function TileImg({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="media-falta" data-falta={src}>Falta {src}</div>;
  return <img src={`/media/${src}`} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header({ count }: { count: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <a href="#" className="brand" aria-label="Bazar Austral — inicio">
            <span className="brand-name">BAZAR AUSTRAL</span>
            <span className="brand-sub">Valdivia — despacho a todo Chile</span>
          </a>
          <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Navegación principal">
            <a href="#seleccion-austral" onClick={() => setMenuOpen(false)}>Selección</a>
            <a href="#catalogo-bazar" onClick={() => setMenuOpen(false)}>Catálogo</a>
            <a href="#taller-empaque" onClick={() => setMenuOpen(false)}>Taller</a>
            <a href="#despacho-retiro" onClick={() => setMenuOpen(false)}>Despacho</a>
            <a href="#cambios-garantia" onClick={() => setMenuOpen(false)}>Cambios</a>
            <a href="#preguntas-bodega" onClick={() => setMenuOpen(false)}>Preguntas</a>
          </nav>
          <div className="header-right">
            <a href="tel:+56941238870" className="phone" aria-label="Llamar al +56 9 4123 8870">+56 9 4123 8870</a>
            <a href="#pedido-bazar" className="btn-carro" aria-label={`Ver carro, ${count} productos`}>Ver carro ({count})</a>
            <button className="hamburger" aria-label="Abrir menú" aria-expanded={menuOpen} type="button" onClick={() => setMenuOpen((v) => !v)}><span /></button>
          </div>
        </div>
      </header>
      <div className="sticky-bottom" role="note" aria-label="Acciones rápidas">
        <a href="tel:+56941238870" className="sticky-phone" aria-label="Llamar">☎</a>
        <a href="#pedido-bazar" className="sticky-carro">Ver carro ({count})</a>
      </div>
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function HeroMedia() {
  const [imgFailed, setImgFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const handleImgError = () => {
    setImgFailed(true);
    // eslint-disable-next-line no-console
    console.warn("[ecommerce-claro] Falta hero 16:9 — bazar-austral-hero-16x9.png");
  };
  return (
    <div className="hero-media">
      {!videoFailed && (
        <video
          className={`hero-video ${videoLoaded ? "is-loaded" : ""}`}
          autoPlay muted loop playsInline poster="/media/bazar-austral-hero-16x9.png"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          <source src="/media/bazar-austral-hero-loop.mp4" type="video/mp4" />
        </video>
      )}
      {imgFailed ? (
        <div className="media-falta" data-falta="bazar-austral-hero-16x9.png">Falta hero 16:9</div>
      ) : (
        <picture className="hero-img-wrap">
          <source media="(max-width: 719px)" srcSet="/media/bazar-austral-hero-9x16.png" />
          <img className="hero-img" src="/media/bazar-austral-hero-16x9.png" alt="Mesa de lenga con caja kraft abierta y objetos de bazar — bodegón austral" onError={handleImgError} loading="eager" />
        </picture>
      )}
    </div>
  );
}
function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-h1">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">BODEGÓN AUSTRAL · STOCK PROPIO</p>
          <h1 id="hero-h1">Cosas útiles, bonitas y duraderas. Despacho 24h en RM.</h1>
          <p className="hero-sub">Curamos pocos objetos y buenos. Madera, cerámica, lana y vidrio. Vienen embalados en kraft reciclado, listos para usar.</p>
          <div className="hero-ctas">
            <a href="#catalogo-bazar" className="btn-primary">Ver catálogo</a>
            <a href="https://wa.me/56941238870" className="btn-secondary" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
          </div>
          <div className="banda">Stock en Valdivia · Despacho Chilexpress/Starken · Retiro gratis · Cambios 10 días</div>
        </div>
        <HeroMedia />
      </div>
    </section>
  );
}

// ─── #seleccion-austral ─────────────────────────────────────────────────────
function SeleccionAustral({ onAdd }: { onAdd: (id: string, nombre: string, precio: number) => void }) {
  return (
    <section id="seleccion-austral" className="seccion seleccion">
      <div className="wrap">
        <div className="seleccion-header">
          <p className="kicker">SELECCIÓN DE LA SEMANA / 6 piezas</p>
          <h2>Lo que dejamos entrar a la bodega</h2>
          <p className="bajada">No traemos de todo. Solo lo que usamos en casa y dura. Esta semana: madera nativa, cerámica de La Greda y lana merino.</p>
        </div>
        <div className="grilla-seleccion">
          {SELECCION.map((p) => (
            <article key={p.id} className="card-seleccion">
              <div className="card-media">
                <TileImg src={p.tile} alt={p.alt} />
              </div>
              <div className="card-body">
                <h3>{p.nombre}</h3>
                <p className="precio">{CLP(p.precio)}</p>
                <p className="meta">{p.micro}</p>
                <span className="badge-stock">{p.badge}</span>
                <button type="button" className="btn-agregar" onClick={() => onAdd(p.id, p.nombre, p.precio)}>Agregar</button>
              </div>
            </article>
          ))}
        </div>
        <p className="nota-honesta">Valores con IVA. Despacho se calcula al pagar.</p>
      </div>
    </section>
  );
}

// ─── #catalogo-bazar ─────────────────────────────────────────────────────────
function CatalogoBazar({ onAdd }: { onAdd: (id: string, nombre: string, precio: number) => void }) {
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todo");
  const filtrados = filtro === "Todo" ? CATALOGO : CATALOGO.filter((p) => p.cat === filtro);
  return (
    <section id="catalogo-bazar" className="seccion catalogo">
      <div className="wrap">
        <div className="catalogo-head">
          <div>
            <h2>Catálogo — precio honesto, stock visible</h2>
            <p className="sub">Fotos reales de bodega. Lo que ves es lo que llega. Sin letra chica.</p>
          </div>
          <p className="contador" aria-live="polite">12 productos · stock en vivo</p>
        </div>
        <div className="filtros" role="tablist" aria-label="Filtrar por categoría">
          {FILTROS.map((f) => (
            <button key={f} type="button" role="tab" aria-selected={filtro === f} className={`filtro ${filtro === f ? "is-active" : ""}`} onClick={() => setFiltro(f)}>{f}</button>
          ))}
        </div>
        <div className="grilla-catalogo">
          {filtrados.map((p) => (
            <article key={p.id} className="tile">
              <div className="tile-media"><TileImg src={p.tile} alt={p.alt} /></div>
              <div className="tile-body">
                <h3 className="tile-title">{p.nombre}</h3>
                <p className="precio">{CLP(p.precio)}</p>
                <p className={`stock ${p.stock < 5 ? "stock-low" : ""}`}>Quedan {p.stock}</p>
                {p.micro && <p className="meta">{p.micro}</p>}
                <button type="button" className="btn-agregar btn-tile" onClick={() => onAdd(p.id, p.nombre, p.precio)}>Agregar</button>
              </div>
            </article>
          ))}
        </div>
        <p className="nota-honesta">Valores referenciales con IVA; despacho no incluido. Stock se actualiza cada mañana. Si algo se agotó, te avisamos antes de cobrar.</p>
      </div>
    </section>
  );
}

// ─── #taller-empaque ────────────────────────────────────────────────────────
function TallerEmpaque() {
  const [interiorFail, setInteriorFail] = useState(false);
  const [proofFail, setProofFail] = useState(false);
  return (
    <section id="taller-empaque" className="seccion taller">
      <div className="wrap taller-grid">
        <div className="taller-text">
          <p className="kicker">TALLER EN VALDIVIA · DESDE 2019</p>
          <h2>Embalamos como si fuera para nuestra casa</h2>
          <p>Somos dos personas en una bodega de Is Teja. Probamos cada objeto un mes antes de venderlo. Si no pasa la prueba de uso diario, no entra.</p>
          <ul className="bullets">
            <li>Kraft reciclado, cinta papel, sin plástico. Caja lista para regalo.</li>
            <li>Foto real, sin render. Pesa, mide y suena como en la foto.</li>
            <li>Reparamos antes de cambiar. Tenemos repuestos de tapas y herrajes.</li>
          </ul>
          <p className="prueba">+3.200 pedidos · 4,8/5 (413 reseñas) · 2 personas · 1 bodega</p>
          {!proofFail ? (
            <img src="/media/bazar-austral-proof-4x3.png" alt="Detalle sello cobre sobre caja kraft cerrada con cinta papel" className="proof-thumb" loading="lazy" onError={() => setProofFail(true)} />
          ) : (
            <div className="media-falta" data-falta="bazar-austral-proof-4x3.png">Falta proof 4:3</div>
          )}
        </div>
        <div className="taller-media">
          {interiorFail ? (
            <div className="media-falta" data-falta="bazar-austral-interior-16x9.png">Falta interior 16:9</div>
          ) : (
            <img src="/media/bazar-austral-interior-16x9.png" alt="Taller empaque vacío Isla Teja: mesa lenga con estantería kraft y rollo cinta papel, sin personas" loading="lazy" onError={() => setInteriorFail(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

// ─── #despacho-retiro ───────────────────────────────────────────────────────
function DespachoRetiro() {
  return (
    <section id="despacho-retiro" className="seccion despacho">
      <div className="wrap">
        <h2>Despacho sin sorpresas</h2>
        <div className="tabla-wrap">
          <table className="tabla-despacho">
            <thead>
              <tr><th>Zona</th><th>Plazo</th><th>Costo</th></tr>
            </thead>
            <tbody>
              <tr><td data-label="Zona">RM</td><td data-label="Plazo">24h hábil</td><td data-label="Costo" className="tabular">$4.990 <span className="muted">(gratis sobre $60.000)</span></td></tr>
              <tr><td data-label="Zona">Regiones (Starken)</td><td data-label="Plazo">48–72h</td><td data-label="Costo" className="tabular">$6.990–$9.900 según comuna</td></tr>
              <tr><td data-label="Zona">Retiro Valdivia (Isla Teja)</td><td data-label="Plazo">hoy mismo</td><td data-label="Costo" className="tabular">Gratis</td></tr>
            </tbody>
          </table>
        </div>
        <p className="nota-honesta">Despacho se calcula en el carro por comuna. Hacemos un envío al día 15:00. Si compras después, sale mañana.</p>
        <a href="https://wa.me/56941238870" target="_blank" rel="noopener noreferrer" className="link-ws">Seguimiento por WhatsApp</a>
      </div>
    </section>
  );
}

// ─── #cambios-garantia ──────────────────────────────────────────────────────
function CambiosGarantia() {
  return (
    <section id="cambios-garantia" className="seccion cambios">
      <div className="wrap">
        <h2>Si no te sirve, lo cambiamos</h2>
        <div className="grilla-cambios">
          <article className="card-cambio">
            <span className="icono" aria-hidden="true">↺</span>
            <h3>10 días para cambios</h3>
            <p>Sin uso, embalaje original. Escribes al WhatsApp y coordinamos retiro.</p>
          </article>
          <article className="card-cambio">
            <span className="icono" aria-hidden="true">✓</span>
            <h3>Garantía 6 meses</h3>
            <p>Falla de material o fabricación. Reparamos o cambiamos. No cubre mal uso.</p>
          </article>
          <article className="card-cambio">
            <span className="icono" aria-hidden="true">✦</span>
            <h3>Pago seguro</h3>
            <p>Webpay / Transferencia. Boleta o factura. Sin recargo.</p>
          </article>
        </div>
        <p className="nota-honesta">¿Duda? Mándanos foto por WhatsApp antes de comprar. Respondemos en horas, no en días.</p>
      </div>
    </section>
  );
}

// ─── #preguntas-bodega ─────────────────────────────────────────────────────
const FAQ = [
  { q: "¿Las fotos son reales?", a: "Sí. Foto de bodega con luz norte. Sin renders ni filtros. Si el tono varía por madera/cerámica, te avisamos." },
  { q: "¿Puedo ver antes de comprar?", a: "Retiro en Isla Teja con aviso. Puedes tocar y decidir ahí." },
  { q: "¿Hacen factura?", a: "Sí, con datos al pagar. Factura exenta si corresponde." },
  { q: "¿Embalaje con plástico?", a: "No. Kraft, papel y cinta engomada. Relleno de viruta si hace falta." },
  { q: "¿Stock real?", a: "Actualizamos a mano cada mañana. Web refleja bodega. Si justo se agotó, te devolvemos en 24h." },
];
function PreguntasBodega() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="preguntas-bodega" className="seccion faq">
      <div className="wrap">
        <h2>Preguntas de bodega</h2>
        <div className="acordeon">
          {FAQ.map((item, i) => (
            <details key={i} open={open === i} onToggle={(e) => {
              const d = e.currentTarget as HTMLDetailsElement;
              if (d.open) setOpen(i); else if (open === i) setOpen(null);
            }}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── #pedido-bazar ──────────────────────────────────────────────────────────
function PedidoBazar({ carro, onQty, onVaciar }: { carro: ItemCarro[]; onQty: (id: string, delta: number) => void; onVaciar: () => void }) {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [comuna, setComuna] = useState("");
  const [region, setRegion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comentario, setComentario] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subtotal = carro.reduce((s, it) => s + it.precio * it.qty, 0);
  const despacho = carro.length ? 4990 : 0;
  const total = subtotal + despacho;

  const validate = () => {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Nombre debe tener al menos 2 caracteres";
    const digits = whatsapp.replace(/\D/g, "");
    if (digits.length !== 9) e.whatsapp = "WhatsApp debe tener 9 dígitos";
    if (!comuna.trim()) e.comuna = "Requerido";
    if (!region.trim()) e.region = "Requerido";
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email)) e.email = "Formato email inválido";
    if (carro.length === 0) e.carro = "Agrega al menos un producto al carro";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const resumen = carro.map((it) => `${it.nombre} x${it.qty}`).join(", ");
      const pedido = { nombre, whatsapp, email, comuna, region, direccion, comentario, carro, subtotal, total, fecha: new Date().toISOString() };
      try {
        const prev = JSON.parse(localStorage.getItem(STORAGE_PEDIDOS) || "[]");
        localStorage.setItem(STORAGE_PEDIDOS, JSON.stringify([...prev, pedido]));
      } catch { /* ignore */ }
      // mailto + whatsapp
      const texto = `Hola Bazar Austral, soy ${nombre} — pedido ${resumen} a ${comuna} (${region})`;
      const waUrl = `https://wa.me/56941238870?text=${encodeURIComponent(texto)}`;
      const mailto = `mailto:hola@bazaraustral.cl?subject=${encodeURIComponent(`Pedido Bazar Austral — ${nombre}`)}&body=${encodeURIComponent(`${texto}\n\nWhatsApp: ${whatsapp}\nEmail: ${email}\nDirección: ${direccion}\nComentario: ${comentario}\n\nSubtotal: ${CLP(subtotal)}\nDespacho estimado: desde $4.990\nTotal: ${CLP(total)}`)}`;
      // open whatsapp
      window.open(waUrl, "_blank");
      // trigger mailto after short delay
      setTimeout(() => { window.location.href = mailto; }, 600);
    }, 800);
  };

  if (success) {
    return (
      <section id="pedido-bazar" className="seccion pedido">
        <div className="wrap">
          <h2>Haz tu pedido — te confirmamos por WhatsApp</h2>
          <div className="success">
            <p>¡Pedido recibido! Te escribimos por WhatsApp en minutos (horario 9:00–18:30).</p>
            <button type="button" className="btn-secondary" onClick={() => setSuccess(false)}>Hacer otro pedido</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pedido-bazar" className="seccion pedido">
      <div className="wrap">
        <h2>Haz tu pedido — te confirmamos por WhatsApp</h2>
        <p className="sub">Deja tu carro y datos. No cobramos hasta confirmar stock y despacho por WhatsApp. Sin letra chica.</p>
        <div className="pedido-grid">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="f-nombre">Nombre*</label>
              <input id="f-nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre y apellido" />
              {errors.nombre && <span className="error">{errors.nombre}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-wa">WhatsApp* (+56 9)</label>
              <input id="f-wa" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="912345678" inputMode="numeric" />
              {errors.whatsapp && <span className="error">{errors.whatsapp}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hola@ejemplo.cl" />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="row2">
              <div className="field">
                <label htmlFor="f-comuna">Comuna*</label>
                <input id="f-comuna" value={comuna} onChange={(e) => setComuna(e.target.value)} placeholder="Valdivia" />
                {errors.comuna && <span className="error">{errors.comuna}</span>}
              </div>
              <div className="field">
                <label htmlFor="f-region">Región*</label>
                <input id="f-region" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Los Ríos" />
                {errors.region && <span className="error">{errors.region}</span>}
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-dir">Dirección</label>
              <input id="f-dir" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Calle, número, depto" />
            </div>
            <div className="field">
              <label htmlFor="f-com">Comentario empaque</label>
              <textarea id="f-com" value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="¿es regalo? ¿mensaje?" rows={3} />
            </div>
            {errors.carro && <span className="error">{errors.carro}</span>}
            <button type="submit" className="btn-primary btn-full" disabled={loading}>{loading ? "Enviando…" : "Confirmar por WhatsApp"}</button>
            <p className="nota-honesta">Bodega real, stock contado a mano. Si algo no está, te avisamos antes de cobrar.</p>
          </form>

          <aside className="resumen" aria-label="Tu carro">
            <h3>Tu carro</h3>
            {carro.length === 0 ? (
              <p className="muted">Tu carro está vacío. Agrega productos de la selección o catálogo.</p>
            ) : (
              <>
                <ul className="carro-lista">
                  {carro.map((it) => (
                    <li key={it.id} className="carro-item">
                      <span className="carro-nombre">{it.nombre}</span>
                      <span className="carro-precio tabular">{CLP(it.precio)}</span>
                      <div className="qty">
                        <button type="button" aria-label="Disminuir" onClick={() => onQty(it.id, -1)}>−</button>
                        <span className="tabular">{it.qty}</span>
                        <button type="button" aria-label="Aumentar" onClick={() => onQty(it.id, 1)}>+</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="totales">
                  <div className="linea"><span>Subtotal</span><span className="tabular">{CLP(subtotal)}</span></div>
                  <div className="linea"><span>Despacho estimado</span><span className="tabular">desde $4.990 RM</span></div>
                  <div className="linea total"><span>Total</span><span className="tabular">desde {CLP(total)}</span></div>
                </div>
                <button type="button" className="btn-primary btn-full" onClick={() => {
                  // trigger form submit via hidden?
                  const form = document.querySelector<HTMLFormElement>(".form");
                  form?.requestSubmit();
                }}>Confirmar por WhatsApp</button>
                <button type="button" className="btn-secondary btn-full" onClick={onVaciar}>Vaciar carro</button>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="brand-name">BAZAR AUSTRAL</p>
          <p className="muted small">Valdivia · despacho todo Chile</p>
          <p className="legal">Boleta o factura · Cambios 10 días · Datos protegidos.</p>
        </div>
        <div>
          <p className="footer-title">Links</p>
          <a href="#catalogo-bazar">Catálogo</a>
          <a href="#taller-empaque">Taller</a>
          <a href="#despacho-retiro">Despacho</a>
          <a href="#cambios-garantia">Cambios</a>
        </div>
        <div>
          <p className="footer-title">Contacto</p>
          <a href="tel:+56941238870">+56 9 4123 8870</a>
          <a href="mailto:hola@bazaraustral.cl">hola@bazaraustral.cl</a>
          <p className="muted small">Isla Teja, Valdivia</p>
        </div>
        <div>
          <p className="footer-title">Horario</p>
          <p className="muted small">Lun–Vie 9:00–18:30 · Sáb 10:00–14:00</p>
          <p className="muted small">@bazaraustral</p>
        </div>
      </div>
    </footer>
  );
}

// ─── App raíz ────────────────────────────────────────────────────────────────
export function App() {
  const [carro, setCarro] = useState<ItemCarro[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CARRO);
      return raw ? (JSON.parse(raw) as ItemCarro[]) : [];
    } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem(STORAGE_CARRO, JSON.stringify(carro)); } catch { /* */ }
  }, [carro]);

  const add = (id: string, nombre: string, precio: number) => {
    setCarro((prev) => {
      const ex = prev.find((p) => p.id === id);
      if (ex) return prev.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { id, nombre, precio, qty: 1 }];
    });
  };
  const qtyDelta = (id: string, delta: number) => {
    setCarro((prev) => {
      const ex = prev.find((p) => p.id === id);
      if (!ex) return prev;
      const nq = ex.qty + delta;
      if (nq <= 0) return prev.filter((p) => p.id !== id);
      return prev.map((p) => p.id === id ? { ...p, qty: nq } : p);
    });
  };
  const vaciar = () => setCarro([]);

  const count = carro.reduce((s, it) => s + it.qty, 0);

  return (
    <>
      <Header count={count} />
      <main>
        <Hero />
        <SeleccionAustral onAdd={add} />
        <CatalogoBazar onAdd={add} />
        <TallerEmpaque />
        <DespachoRetiro />
        <CambiosGarantia />
        <PreguntasBodega />
        <PedidoBazar carro={carro} onQty={qtyDelta} onVaciar={vaciar} />
      </main>
      <Footer />
    </>
  );
}
