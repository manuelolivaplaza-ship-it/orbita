import { useEffect, useState } from "react";

function Header() {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setCompact(y > 24);
        if (y > lastY && y > 120 && !open) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={`site-header ${hidden ? "site-header--hidden" : ""} ${compact ? "site-header--compact" : ""}`}
    >
      <div className="header-inner">
        <div className="header-left">
          <a href="#umbral" className="logo" aria-label="LUMEN inicio">
            LUMEN
          </a>
        </div>

        <nav className="nav-center" aria-label="Navegación principal">
          <a href="#luminarias">Luminarias</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#taller">Taller</a>
          <a href="#fotometria">Fotometría</a>
          <a href="#valores">Valores</a>
        </nav>

        <div className="header-right">
          <a href="tel:+56981239044" className="header-tel">
            +56 9 8123 9044
          </a>
          <a href="#muestra" className="btn-accent">
            Agendar visita
          </a>
          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              style={
                open ? { transform: "translateY(6px) rotate(45deg)" } : undefined
              }
            />
            <span style={open ? { opacity: 0 } : undefined} />
            <span
              style={
                open ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined
              }
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Menú móvil">
          <a href="#luminarias" onClick={() => setOpen(false)}>
            Luminarias
          </a>
          <a href="#proyectos" onClick={() => setOpen(false)}>
            Proyectos
          </a>
          <a href="#taller" onClick={() => setOpen(false)}>
            Taller
          </a>
          <a href="#fotometria" onClick={() => setOpen(false)}>
            Fotometría
          </a>
          <a href="#valores" onClick={() => setOpen(false)}>
            Valores
          </a>
          <a href="tel:+56981239044" className="mobile-tel">
            +56 9 8123 9044
          </a>
          <a href="#muestra" className="mobile-cta" onClick={() => setOpen(false)}>
            Agendar visita
          </a>
        </nav>
      )}
    </header>
  );
}

function HeroMedia() {
  const [imgError, setImgError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    fetch("/media/lumen-hero-loop.mp4", { method: "HEAD" })
      .then((r) => {
        if (r.ok) setHasVideo(true);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (imgError) {
      console.warn("Falta: lumen-hero-16x9.png");
    }
  }, [imgError]);

  useEffect(() => {
    if (mobileError) {
      console.warn("Falta: lumen-hero-9x16.png");
    }
  }, [mobileError]);

  const showVideo = hasVideo && !videoError;

  return (
    <div className="hero-media-wrap hero-media-wrap--masked">
      <div className="halo" aria-hidden="true" />
      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/lumen-hero-16x9.png"
          onError={() => setVideoError(true)}
          style={{ opacity: 0.92 }}
        >
          <source src="/media/lumen-hero-loop.mp4" type="video/mp4" />
        </video>
      ) : imgError && mobileError ? (
        <div
          className="media-falta"
          data-falta="lumen-hero-16x9.png"
          style={{
            aspectRatio: "16/9",
            background: "var(--surface)",
            border: "1px solid var(--line)",
            display: "grid",
            placeItems: "center",
            color: "var(--muted)",
            fontSize: "12px",
          }}
        >
          Falta: lumen-hero-16x9.png
        </div>
      ) : (
        <picture>
          <source
            media="(max-width: 900px)"
            srcSet="/media/lumen-hero-9x16.png"
          />
          <img
            src="/media/lumen-hero-16x9.png"
            alt="Mesa negra mate con luminaria prototipo encendida, cono de luz cálida 2700K recortado sobre fondo carbón, taller nocturno Ñuñoa"
            loading="eager"
            onError={() => {
              if (window.innerWidth <= 900) setMobileError(true);
              setImgError(true);
            }}
          />
        </picture>
      )}
      <img
        src="/media/lumen-hero-9x16.png"
        alt=""
        style={{ display: "none" }}
        onError={() => setMobileError(true)}
      />
      <div className="chip">Desde $68.000 · Aplique LUMEN 01</div>
    </div>
  );
}

function MediaImg({
  src,
  alt,
  ratio,
  withWrap,
  classNameWrap,
}: {
  src: string;
  alt: string;
  ratio: string;
  withWrap?: boolean;
  classNameWrap?: string;
}) {
  const [err, setErr] = useState(false);
  const file = src.split("/").pop() || src;
  const imgEl = err ? (
    <div className="media-falta" data-falta={file} style={{ aspectRatio: ratio, background: "var(--surface)", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--muted)", fontSize: "12px", width: "100%" }}>
      Falta: {file}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErr(true)}
      style={{ aspectRatio: ratio, objectFit: "cover", width: "100%", display: "block" }}
    />
  );
  if (withWrap) {
    return <div className={classNameWrap || ""}>{imgEl}</div>;
  }
  return imgEl;
}

function LuminariasSection() {
  const filas = [
    { n: "01", nombre: "LUMEN 01 — Aplique muro · Ø 18 cm · acero grafito + vidrio ópalo", foto: "2700K · 520 lux a 1m · CRI 95", precio: "$68.000" },
    { n: "02", nombre: "LUMEN 02 — Colgante comedor · Ø 32 cm · 1,2m cable textil", foto: "2700K · 780 lux a 1m · CRI 95 · dimmable", precio: "$124.000" },
    { n: "03", nombre: "LUMEN 03 — Lámpara pie · 158 cm · base hormigón pulido", foto: "2700K · 640 lux a 1m · CRI 93", precio: "$189.000" },
    { n: "04", nombre: "LUMEN 04 — Riel 1m · 3 focos orientables · negro mate", foto: "2700–3000K tunable · 900 lux · CRI 95", precio: "$146.000" },
    { n: "05", nombre: "LUMEN 05 — Sobremesa · Ø 24 cm · cerámica + lino", foto: "2700K · 480 lux · CRI 95", precio: "$89.000" },
    { n: "06", nombre: "LUMEN 06 — Kit tira LED 5m + perfil difusor", foto: "2700K · 1200 lm/m · CRI 95 · 24V", precio: "$72.000" },
  ];
  const [tileErr, setTileErr] = useState(false);
  return (
    <section id="luminarias" className="section section--luminarias" aria-label="Luminarias a medida">
      <div className="section-inner">
        <div className="luminarias-grid">
          <div className="luminarias-main">
            <p className="kicker">01 — LUMINARIAS A MEDIDA</p>
            <h2 className="h2">Pocas piezas. Bien hechas.</h2>
            <p className="section-sub">Cada luminaria trae fotometría impresa: Kelvin, lux a 1m y CRI. Si no calza tu espacio, no la vendemos.</p>
            <div className="luminarias-list">
              {filas.map((f) => (
                <div key={f.n} className="lum-row">
                  <div className="lum-row-left">
                    <span className="lum-num">{f.n}</span>
                    <span className="lum-nombre">{f.nombre}</span>
                  </div>
                  <div className="lum-row-mid">{f.foto}</div>
                  <div className="lum-row-right">
                    <span className="lum-precio">{f.precio}</span>
                    <a href="#muestra" className="lum-cta">Ver ficha →</a>
                  </div>
                </div>
              ))}
            </div>
            <p className="nota-italic">Valores referenciales IVA incluido. Confirmamos stock y temperatura antes de cobrar. Driver incluido donde corresponde.</p>
          </div>
          <aside className="luminarias-aside" aria-label="Destacado">
            <div className="aside-card">
              <div className="aside-img-wrap">
                {tileErr ? (
                  <div className="media-falta" data-falta="lumen-tile-01-1x1.png" style={{ aspectRatio: "1/1", background: "var(--bg)", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--muted)", fontSize: "12px" }}>Falta: lumen-tile-01-1x1.png</div>
                ) : (
                  <img
                    src="/media/lumen-tile-01-1x1.png"
                    alt="Colgante LUMEN 02 Ø32cm suspendido sobre fondo carbón, vidrio ópalo encendido tenue, borde de luz recortado"
                    loading="lazy"
                    style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }}
                    onError={() => setTileErr(true)}
                  />
                )}
              </div>
              <p className="aside-label">MÁS PEDIDA</p>
              <p className="aside-title">LUMEN 02 — Colgante</p>
              <p className="aside-precio">$124.000</p>
              <a href="#muestra" className="aside-link">Cotizar colgante →</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProyectosSection() {
  return (
    <section id="proyectos" className="section section--proyectos" aria-label="Proyectos">
      <div className="section-inner">
        <h2 className="h2 h2--center">La luz puesta en obra, no en render.</h2>
        <p className="section-sub section-sub--center">Tres proyectos medidos con luxómetro. Foto nocturna real, sin Photoshop de brillos.</p>
        <div className="proyectos-grid">
          <article className="proyecto-card">
            <div className="proyecto-img">
              <MediaImg src="/media/lumen-tile-03-4x3.png" alt="Interior departamento Ñuñoa nocturno con riel negro y dos colgantes sobre mesa de comedor, luz cálida 2700K 180 lux" ratio="4/3" />
            </div>
            <div className="proyecto-body">
              <h3 className="proyecto-title">Depto 58m² — Ñuñoa</h3>
              <p className="proyecto-datos">Riel 02 + 2× Colgante 02 · 2700K · 180 lux promedio mesa</p>
              <p className="proyecto-desc">Reemplazo de 6 spots fríos por riel cálido dimmable. Cocina y estar en un circuito.</p>
            </div>
          </article>
          <article className="proyecto-card">
            <div className="proyecto-img">
              <MediaImg src="/media/lumen-tile-02-3x4.png" alt="Cafetería en Providencia con 8 apliques LUMEN 01 sobre muro de hormigón, luz cálida 220 lux en barra" ratio="3/4" />
            </div>
            <div className="proyecto-body">
              <h3 className="proyecto-title">Café 90m² — Providencia</h3>
              <p className="proyecto-datos">8× Aplique 01 · 2700K · 220 lux barra</p>
              <p className="proyecto-desc">Luz que deja leer carta sin encandilar. Foto 21:30, lux medido a 1m.</p>
            </div>
          </article>
          <article className="proyecto-card">
            <div className="proyecto-img">
              <MediaImg src="/media/lumen-tile-04-1x1.png" alt="Detalle macro de vidrio ópalo y cerámica con luz cálida, casa en La Reina capa de luz baja 150 lux" ratio="1/1" />
            </div>
            <div className="proyecto-body">
              <h3 className="proyecto-title">Casa 140m² — La Reina</h3>
              <p className="proyecto-datos">Pie 03 + tiras difusas · 2700K · 150 lux estar</p>
              <p className="proyecto-desc">Capas bajas para noche: pie + tira perimetral, techo sin luz directa.</p>
            </div>
          </article>
        </div>
        <p className="nota-italic caption--proyectos">Mediciones con luxómetro Sekonic. CRI 93–95 verificado. Fotos sin retoque de intensidad.</p>
      </div>
    </section>
  );
}

function TallerSection() {
  return (
    <section id="taller" className="section section--taller" aria-label="Taller LUMEN">
      <div className="section-inner">
        <div className="taller-grid">
          <div className="taller-text">
            <p className="kicker">02 — TALLER LUMEN</p>
            <h2 className="h2">Prototipo encendido antes de prometer.</h2>
            <p className="taller-p">No vendemos de catálogo. Armamos prototipo en mesa negra mate, lo encendemos a las 21:00 y medimos. Ves el cono, el borde y la sombra. Si no te convence el haz, ajustamos altura o diámetro antes de fabricar.</p>
            <div className="taller-nums">
              <div className="taller-num">
                <span className="taller-num-val">2700K</span>
                <span className="taller-num-label">temperatura fija</span>
                <span className="taller-num-desc">cálida constante, no blanco frío</span>
              </div>
              <div className="taller-num">
                <span className="taller-num-val">CRI 95</span>
                <span className="taller-num-label">índice reproducción</span>
                <span className="taller-num-desc">colores reales, piel y madera</span>
              </div>
              <div className="taller-num">
                <span className="taller-num-val">48h</span>
                <span className="taller-num-label">prototipo</span>
                <span className="taller-num-desc">desde visita a muestra encendida</span>
              </div>
            </div>
            <ul className="taller-bullets">
              <li>— Cable textil, driver dimmable y vidrio ópalo nacional</li>
              <li>— Base hormigón o acero grafito, no plástico</li>
              <li>— Garantía 2 años, repuesto de vidrio disponible</li>
            </ul>
          </div>
          <div className="taller-media">
            <div className="taller-img-wrap">
              <MediaImg src="/media/lumen-interior-16x9.png" alt="Mesa negra mate de taller con tres prototipos apagados y uno encendido al centro, luxómetro Sekonic y cuaderno técnico al lado, fondo carbón" ratio="16/9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FotometriaSection() {
  return (
    <section id="fotometria" className="section section--fotometria" aria-label="Fotometría">
      <div className="section-inner">
        <h2 className="h2">Fotometría sin humo.</h2>
        <p className="section-sub">Curva polar y tabla lux a 50cm / 1m / 1,5m. Todo medido, no simulado.</p>
        <div className="fotometria-grid">
          <div className="foto-col">
            <div className="foto-img-wrap">
              <MediaImg src="/media/lumen-proof-16x9.png" alt="Luxómetro sobre mesa negra midiendo haz cálido junto a curva polar impresa, estética laboratorio de luz" ratio="16/9" />
            </div>
            <p className="foto-caption">Curva polar LUMEN 02 · 32° haz · luxómetro Sekonic</p>
            <div className="lux-table">
              <div className="lux-row"><span>50cm</span><span>1.420 lux</span></div>
              <div className="lux-row"><span>100cm</span><span>780 lux</span></div>
              <div className="lux-row"><span>150cm</span><span>340 lux</span></div>
            </div>
          </div>
          <div className="foto-col">
            <h3 className="foto-title">Qué significa 2700K y CRI 95</h3>
            <p className="foto-body">2700K es blanco cálido (atardecer interior). CRI 95 es que el rojo de una manzana y el tono de tu piel se ven reales, no lavados. No usamos 3000K por default: lo eliges si tu madera es muy clara.</p>
            <div className="chips">
              <span className="chip-mini">2700K</span>
              <span className="chip-mini">CRI 95</span>
              <span className="chip-mini">Dimmable</span>
            </div>
          </div>
          <div className="foto-col">
            <h3 className="foto-title">Dimmer que no parpadea</h3>
            <p className="foto-body">Driver 24V con dimmer trailing-edge. Atenúa 10–100% sin flicker visible ni zumbido. Probado con luxómetro a 30cm. Si tu casa tiene dimmer viejo, lo revisamos en visita.</p>
            <a href="#dudas" className="foto-link">Ver compatibilidad dimmers →</a>
          </div>
        </div>
        <p className="nota-italic caption--foto">Mediciones en taller a 21°C, fondo negro mate. Equipo calibrado 2025.</p>
      </div>
    </section>
  );
}

function ValoresSection() {
  const rows = [
    { lum: "Aplique LUMEN 01", precio: "$68.000", incluye: "Driver + instal. simple", plazo: "7 días" },
    { lum: "Colgante LUMEN 02", precio: "$124.000", incluye: "Driver dimmable + cable 1,2m", plazo: "10 días" },
    { lum: "Lámpara pie LUMEN 03", precio: "$189.000", incluye: "Base hormigón + dimmer", plazo: "14 días" },
    { lum: "Proyecto luz depto 50–80m²", precio: "desde $280.000", incluye: "Visita + plano lux + 2 prototipos", plazo: "14 días" },
    { lum: "Visita luminotécnica RM", precio: "$45.000", incluye: "Se abona si compras", plazo: "48h agenda" },
  ];
  const [tileErr, setTileErr] = useState(false);
  return (
    <section id="valores" className="section section--valores" aria-label="Valores">
      <div className="section-inner valores-layout">
        <div className="valores-left-col">
          <h2 className="h2">Precios claros, sin letra chica.</h2>
          <p className="section-sub">Valores referenciales 2025. Se confirma tras visita o medidas. Si la luminaria no calza, no se cobra fabricación.</p>
          <div className="valores-table">
            <div className="valores-header">
              <span>Luminaria</span><span>Valor CLP</span><span>Incluye</span><span>Plazo</span>
            </div>
            {rows.map((r) => (
              <div key={r.lum} className="valores-row">
                <span className="vr-nombre">{r.lum}</span>
                <span className="vr-valor">{r.precio}</span>
                <span className="vr-incluye">{r.incluye}</span>
                <span className="vr-plazo">{r.plazo}</span>
              </div>
            ))}
          </div>
          <div className="valores-cards">
            {rows.map((r) => (
              <div key={r.lum + "-m"} className="valor-card">
                <div className="valor-card-top">
                  <span className="valor-card-nombre">{r.lum}</span>
                  <span className="valor-card-precio">{r.precio}</span>
                </div>
                <div className="valor-card-meta">
                  <span>{r.incluye}</span><span>{r.plazo}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="nota-italic">Visita $45.000 se descuenta de la compra. Despacho RM $12.900–$18.900 según tamaño. Retiro en taller Ñuñoa sin costo. Boleta o factura. Garantía 2 años.</p>
        </div>
        <div className="valores-media">
          <div className="valores-img-wrap">
            {tileErr ? (
              <div className="media-falta" data-falta="lumen-tile-01-1x1.png" style={{ aspectRatio: "1/1", background: "var(--surface)", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--muted)", fontSize: "12px" }}>Falta: lumen-tile-01-1x1.png</div>
            ) : (
              <img src="/media/lumen-tile-01-1x1.png" alt="Detalle vidrio ópalo del colgante encendido, borde de luz recortado sobre fondo carbón" loading="lazy" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", display: "block" }} onError={() => setTileErr(true)} />
            )}
          </div>
          <p className="foto-caption">Detalle vidrio ópalo · borde luz recortado</p>
        </div>
      </div>
    </section>
  );
}

function DudasSection() {
  const faqs = [
    { q: "¿Puedo ver la luz encendida antes de comprar?", a: "Sí. Agenda visita 45 min en taller Ñuñoa 18:00–22:00. Vemos 2–3 prototipos encendidos sobre mesa negra y medimos lux a 1m. Sin compromiso." },
    { q: "¿2700K no es muy amarilla? ¿Tienen 3000K o 4000K?", a: "Trabajamos 2700K por default porque es cálida habitable de noche. Podemos hacer 3000K si tu interior es muy claro o pides oficina. No hacemos 4000K: es luz de oficina fría." },
    { q: "¿Hacen a medida o solo esos 6 modelos?", a: "Esos 6 son base. Ajustamos diámetro, alto, cable y terminación. Si es fuera de base, cotizamos como pieza especial con plano y prototipo." },
    { q: "¿El dimmer parpadea o zumba?", a: "No con nuestro driver. Atenúa 10–100% sin flicker ni zumbido, probado con luxómetro. Si tienes dimmer antiguo, lo evaluamos en visita; a veces toca cambiarlo ($18.000)." },
    { q: "¿Instalan o solo entregan?", a: "Entregamos con driver y diagrama. Instalación simple la haces con tu eléctrico. Si es riel o proyecto mayor, coordinamos eléctrico partner (costo aparte desde $55.000)." },
    { q: "¿Garantía y repuestos?", a: "2 años por falla driver o soldadura. Vidrio ópalo de repuesto $12.000–$18.000 según modelo. Cable textil recambiable." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="dudas" className="section section--dudas" aria-label="Dudas">
      <div className="section-inner section-inner--narrow">
        <h2 className="h2 h2--center">Dudas que preguntarías en taller.</h2>
        <p className="section-sub section-sub--center">Respuestas cortas. Si no está, escribe a hola@lumen.cl y responde quien suelda.</p>
        <div className="accordion">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`acc-item ${isOpen ? "acc-item--open" : ""}`}>
                <button className="acc-trigger" aria-expanded={isOpen} onClick={() => setOpenIdx(isOpen ? null : i)}>
                  <span className="acc-q">{f.q}</span>
                  <span className={`acc-chevron ${isOpen ? "acc-chevron--open" : ""}`} aria-hidden="true">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="square" /></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="acc-panel">
                    <p className="acc-a">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MuestraSection() {
  const [nombre, setNombre] = useState("");
  const [ws, setWs] = useState("");
  const [espacio, setEspacio] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [origen, setOrigen] = useState("visita");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem("lumen-muestra");
    if (saved) {
      try {
        const v = JSON.parse(saved);
        if (v.nombre) setNombre(v.nombre);
        if (v.ws) setWs(v.ws);
      } catch {}
    }
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre";
    const onlyDigits = ws.replace(/\D/g, "");
    if (!ws.trim()) e.ws = "Ingresa tu WhatsApp";
    else {
      const d = onlyDigits.slice(-9);
      if (!/^9\d{8}$/.test(d)) e.ws = "WhatsApp debe ser +56 9 8 dígitos";
    }
    if (!espacio) e.espacio = "Elige tu espacio";
    if (!fecha) e.fecha = "Elige fecha preferida";
    if (!mensaje.trim()) e.mensaje = "Cuéntanos medidas y lo que buscas";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("lumen-muestra", JSON.stringify({ nombre, ws, espacio, fecha, origen, ts: Date.now() }));
    }, 650);
  };

  return (
    <section id="muestra" className="section section--muestra" aria-label="Agendar visita">
      <div className="section-inner">
        <div className="muestra-grid">
          <div className="muestra-left">
            <h2 className="h2">¿Agendamos visita luminotécnica?</h2>
            <p className="muestra-sub">Vienes al taller, vemos luz encendida y te vas con medidas y precio cerrado. Sin showroom con 200 lámparas.</p>
            <a href="tel:+56981239044" className="muestra-tel">+56 9 8123 9044</a>
            <p className="muestra-horarios">Mar–Sáb 18:00–22:00 · Taller Ñuñoa (dirección al agendar)</p>
            <a href="mailto:hola@lumen.cl" className="muestra-email">hola@lumen.cl · Despacho a todo Chile</a>
            <ul className="muestra-bullets">
              <li>· Prototipo encendido en mesa</li>
              <li>· Medición lux/CRI delante tuyo</li>
              <li>· Precio cerrado en visita</li>
            </ul>
            <a href="https://wa.me/56981239044" target="_blank" rel="noopener noreferrer" className="muestra-wa-link">WhatsApp directo → https://wa.me/56981239044</a>
          </div>
          <div className="muestra-right">
            <div className="form-card">
              {success ? (
                <div className="form-success">
                  <p className="form-success-title">Gracias — te contacta equipo LUMEN hoy.</p>
                  <p className="form-success-sub">Guardamos tu solicitud. Te escribimos por WhatsApp en el día.</p>
                  <a href="https://wa.me/56981239044" target="_blank" rel="noopener noreferrer" className="btn-primary btn-full">Abrir WhatsApp →</a>
                  <button type="button" className="link-secondary" onClick={() => setSuccess(false)} style={{ marginTop: "12px", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Enviar otra solicitud</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="form-field">
                    <label htmlFor="f-nombre">Nombre</label>
                    <input id="f-nombre" type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required aria-invalid={!!errors.nombre} />
                    {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-ws">WhatsApp</label>
                    <input id="f-ws" type="tel" placeholder="+56 9 8123 9044" value={ws} onChange={(e) => setWs(e.target.value)} required aria-invalid={!!errors.ws} />
                    {errors.ws && <span className="field-error">{errors.ws}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-espacio">Espacio</label>
                    <select id="f-espacio" value={espacio} onChange={(e) => setEspacio(e.target.value)} required aria-invalid={!!errors.espacio}>
                      <option value="">Elige tu espacio</option>
                      <option>Depto 30–60m²</option>
                      <option>Depto 60–90m²</option>
                      <option>Casa</option>
                      <option>Local/café</option>
                      <option>Solo luminaria</option>
                    </select>
                    {errors.espacio && <span className="field-error">{errors.espacio}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-fecha">Fecha preferida</label>
                    <select id="f-fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required aria-invalid={!!errors.fecha}>
                      <option value="">Elige fecha</option>
                      <option>Esta semana noche</option>
                      <option>Próxima semana</option>
                      <option>Otra</option>
                    </select>
                    {errors.fecha && <span className="field-error">{errors.fecha}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-mensaje">Mensaje</label>
                    <textarea id="f-mensaje" placeholder="Ej: comedor 3×4m, techo 2,4m, quiero colgante cálido dimmable" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required rows={4} aria-invalid={!!errors.mensaje} />
                    {errors.mensaje && <span className="field-error">{errors.mensaje}</span>}
                  </div>
                  <fieldset className="form-field form-field--radio">
                    <legend>Origen</legend>
                    <label className="radio-label"><input type="radio" name="origen" value="visita" checked={origen === "visita"} onChange={() => setOrigen("visita")} /> Visita taller $45.000</label>
                    <label className="radio-label"><input type="radio" name="origen" value="cotizacion" checked={origen === "cotizacion"} onChange={() => setOrigen("cotizacion")} /> Cotización sin visita</label>
                  </fieldset>
                  <button type="submit" className="btn-primary btn-full btn-submit" disabled={loading}>
                    {loading ? "Enviando…" : "Solicitar visita por WhatsApp →"}
                  </button>
                  <p className="form-nota">Visita $45.000 se abona al comprar. Confirmamos hora por WhatsApp en el día. No pedimos datos de tarjeta por este formulario.</p>
                </form>
              )}
            </div>
          </div>
        </div>
        <footer className="site-footer" aria-label="Footer">
          <div className="footer-top">
            <span className="footer-brand">LUMEN — Estudio de Luz</span>
            <span className="footer-razon">LUMEN SpA · Ñuñoa, Santiago</span>
          </div>
          <div className="footer-bottom">
            <span>© 2025 LUMEN. Luz a medida.</span>
            <span className="footer-links"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> · <a href="mailto:hola@lumen.cl">hola@lumen.cl</a></span>
          </div>
        </footer>
      </div>
    </section>
  );
}

function StickyMobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 520);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="sticky-cta" aria-label="CTA sticky móvil">
      <a href="tel:+56981239044" className="sticky-tel">+56 9 8123 9044</a>
      <a href="#muestra" className="sticky-btn">Agendar visita</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <section id="umbral" className="hero" aria-label="Hero LUMEN">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="kicker">ESTUDIO DE LUZ · ÑUÑOA · TALLER DE PROTOTIPOS 2700K</p>
              <h1 className="hero-h1">Luz a medida que deja habitar la noche.</h1>
              <p className="subhead">
                Diseñamos luminarias y proyectos de luz cálida. Prototipo encendido en mesa, medimos lux y
                CRI delante tuyo. Sin catálogo infinito.
              </p>
              <div className="cta-row">
                <a href="#muestra" className="btn-primary">
                  Agendar visita luminotécnica
                </a>
                <a href="#luminarias" className="link-secondary">
                  Ver luminarias disponibles →
                </a>
              </div>
              <p className="caption">Taller nocturno 18:00–22:00 · Medición lux/CRI in situ · Despacho a todo Chile</p>
            </div>
            <HeroMedia />
          </div>
        </section>

        <LuminariasSection />
        <ProyectosSection />
        <TallerSection />
        <FotometriaSection />
        <ValoresSection />
        <DudasSection />
        <MuestraSection />
      </main>
      <StickyMobileCta />
    </>
  );
}
