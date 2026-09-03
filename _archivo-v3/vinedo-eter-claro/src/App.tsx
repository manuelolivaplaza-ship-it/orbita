import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];

const TOURS = [
  { n: "01", title: "Visita Clásica Cava", meta: "60 min · hasta 12 personas", detail: "Recorrido cava + historia de la viña + 2 degustaciones. Guía enológica ES/EN. No incluye tabla.", price: "desde $18.900" },
  { n: "02", title: "Degustación Reserva", meta: "90 min · hasta 12 personas", detail: "Cava + 4 vinos Reserva/Gran Reserva + maridaje ligero. Guía enológica. Copa grabada incluida.", price: "desde $28.900" },
  { n: "03", title: "Tour Premium Barrica", meta: "120 min · hasta 8 personas", detail: "Cava + sala de barricas roble francés + 5 vinos premium + tabla. Grupo reducido.", price: "desde $42.900" },
  { n: "04", title: "Maridaje & Tabla", meta: "90 min · hasta 10 personas", detail: "Degustación guiada de 3 vinos con tabla de quesos y charcutería. Ideal tarde.", price: "desde $34.900" },
  { n: "05", title: "Atardecer en Viñedo", meta: "75 min · hasta 12 personas", detail: "Paseo entre hileras + degustación al aire libre + 2 vinos. Estacional (oct–abr).", price: "desde $26.900" },
  { n: "06", title: "Visita Privada Grupos", meta: "120 min · a medida", detail: "Grupos y empresas · horario exclusivo · degustación y maridaje a medida. Cotización por grupo.", price: "a cotizar" },
];

const VINOS = [
  { n: "01", title: "Vinos jóvenes", desc: "Sauvignon Blanc, Rosé y Carmenere joven. Frescura inmediata, guarda corta.", items: ["Sauvignon Blanc 2024 — fresco, mineral", "Rosé 2024 — frutal, seco"] },
  { n: "02", title: "Reserva & Gran Reserva", desc: "Cabernet, Carmenere y blend bordelés. 12 meses roble francés, guarda 5–8 años.", items: ["Carmenere Reserva 2022 — fruta negra, especias", "Cabernet Gran Reserva 2021 — estructura, reserva"] },
  { n: "03", title: "Espumante & Rosé", desc: "Método tradicional, burbuja fina. Brut y Rosé brut, ideal aperitivo.", items: ["Brut Nature 2023 — cítrico, mineral", "Rosé Brut — frutos rojos, fresco"] },
];

const PRECIOS = [
  { prod: "Tour Cava · Visita Clásica", sku: "TOUR-CL", unit: "p/p 60min", price: 18900, incluye: "2 degustaciones" },
  { prod: "Degustación Reserva", sku: "TOUR-RE", unit: "p/p 90min", price: 28900, incluye: "4 vinos + copa" },
  { prod: "Premium Barrica", sku: "TOUR-PB", unit: "p/p 120min", price: 42900, incluye: "5 vinos + tabla" },
  { prod: "Maridaje & Tabla", sku: "TOUR-MT", unit: "p/p 90min", price: 34900, incluye: "3 vinos + tabla" },
  { prod: "Caja mixta 6 botellas", sku: "CAJA-6", unit: "caja 6", price: 89900, incluye: "surtida + despacho" },
];

const FAQS = [
  { q: "¿Cómo reservo y hasta cuándo puedo cancelar o reprogramar?", a: "Reservas en línea con horario y cupo visible. Pago al reservar. Cancelación con reembolso 100% hasta 48h antes; reprogramación sin costo hasta 24h antes. Cupo máximo 12 personas, niños sin degustación no pagan." },
  { q: "¿Qué incluye cada tour y cuánto dura realmente?", a: "Clásica 60 min (2 vinos), Reserva 90 min (4 vinos + copa), Premium 120 min (5 vinos + tabla), Maridaje 90 min, Atardecer 75 min. Guía enológica ES/EN, cava a 14°C. El tiempo publicado es efectivo, sin espera ni bus con parlante." },
  { q: "¿Puedo comprar vino sin hacer el tour y cómo es el despacho?", a: "Sí, venta directa en viña y tienda online. Caja mixta 6 desde $89.900. Despacho RM 24–48h ($4.990), regiones 48–72h ($7.990). Retiro en viña sin costo, boleta/factura SII. Stock actualizado cada mañana." },
  { q: "¿Hacen eventos privados o de empresa para grupos?", a: "Visita Privada para grupos, empresas y celebraciones. Horario exclusivo, degustación y maridaje a medida. Cotización por grupo según número y vinos. Escríbenos con fecha y cantidad." },
  { q: "¿Qué pasa si llueve o hace mucho calor — se suspende el tour?", a: "Cava techada siempre operativa. Atardecer en viñedo se reprograma si hay lluvia intensa o alerta térmica; te avisamos 24h antes y reubicamos sin costo. Resto de tours no se suspende." },
  { q: "¿Cómo llego desde Santiago y hay estacionamiento?", a: "Pirque, 35 min desde Providencia. Ruta directa por Vicuña Mackenna / Pirque. Estacionamiento interno gratuito, señalizado. Último tour 15:30 para salida con luz. Coordenadas y mapa al confirmar reserva." },
];

function useCountUp(active: boolean, target: number) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(target); return; }
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return val;
}

function Cifra({ v, suffix, label, active }: { v: number; suffix: string; label: string; active: boolean }) {
  const n = useCountUp(active, v);
  return (
    <div className="cifra">
      <div className="cifra-num">{n.toLocaleString("es-CL")}{suffix}</div>
      <div className="cifra-label">{label}</div>
    </div>
  );
}

export function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openTour, setOpenTour] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cifrasIn, setCifrasIn] = useState(false);
  const [galIn, setGalIn] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const lastY = useRef(0);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
      setHideNav(y > lastY.current && y > 120);
      lastY.current = y;
      setShowSticky(y > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const c = document.getElementById("cifras");
    const g = document.getElementById("galeria");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target.id === "cifras" && e.isIntersecting) setCifrasIn(true);
        if (e.target.id === "galeria" && e.isIntersecting) setGalIn(true);
      }
    }, { threshold: 0.25 });
    if (c) io.observe(c);
    if (g) io.observe(g);
    return () => io.disconnect();
  }, []);

  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="LUMEN — inicio">LUMEN<span>VIÑA & CAVA</span></a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`}>{l.label}</a>
            ))}
            <a href="#reserva" className="btn-tinta">Reservar</a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--papel)", borderBottom: "1px solid var(--linea)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>{l.label}</a>
            ))}
            <a href="#reserva" onClick={() => setMobileNav(false)} className="btn-tinta" style={{ justifyContent: "center" }}>Reservar visita</a>
          </div>
        )}
      </nav>

      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Viña & Cava · Pirque · Valle Central</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>Vino con</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>origen.</span></span>
              <span className="line" style={{ transitionDelay: "0.24s" }}><span style={{ transitionDelay: "0.29s" }}>Visita sin</span></span>
              <span className="line" style={{ transitionDelay: "0.36s" }}><span style={{ transitionDelay: "0.41s" }}>apuro.</span></span>
            </h1>
            <p className="hero-sub">Tours de cava, degustación guiada y venta directa en el Valle Central. Reserva en línea con horario y cupo visible, despacho a todo Chile y retiro en viña sin sorpresas.</p>
            <div className="hero-ctas">
              <a href="#reserva" className="btn-tinta">Reservar visita guiada →</a>
              <a href="#precios" className="btn-ghost">Ver vinos y despacho</a>
            </div>
            <div className="hero-badges">
              <span>Cupo y horario visibles</span>
              <span>Degustación guiada</span>
              <span>Despacho a todo Chile</span>
              <span>Venta directa viña</span>
            </div>
            <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12, lineHeight: 1.6 }}>Cupo en línea actualizado cada mañana. Si tu horario se llena después de reservar, te reubicamos en 2 horas — no te dejamos con la copa vacía.</p>
          </div>
          <div className="hero-right">
            <img src={`${base}media/vinedo.jpg`} alt="Hilera de parras vacía con luz de mañana lateral, suelo mineral y cordón ordenado, sin personas" loading="eager" />
          </div>
        </div>
        <div className="hero-band">Cupo y horario visibles · Degustación guiada · Despacho a todo Chile · Venta directa viña</div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia, no promesas</div>
          <h2 className="h2" style={{ maxWidth: 640 }}>Una cava que respeta la hora del tour.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            <Cifra v={14} suffix=" años" label="de viña en Pirque, cosecha y guarda propias" active={cifrasIn} />
            <Cifra v={12000} suffix="" label="visitas al año, grupos de máximo 12" active={cifrasIn} />
            <div className="cifra">
              <div className="cifra-num">{useCountUp(cifrasIn, 98)}%</div>
              <div className="cifra-label">tours a horario — medido último trimestre</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">42<span style={{ fontSize: "1.6rem" }}> ha / </span>{useCountUp(cifrasIn, 18).toLocaleString("es-CL")}k</div>
              <div className="cifra-label">hectáreas / botellas guarda anual</div>
            </div>
          </div>
          <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12 }}>Sin “desde” engañoso. El precio que ves es el que pagas. Cupo actualizado cada mañana.</p>
        </div>
      </section>
      <div id="evidencia" aria-hidden style={{ height: 0 }} />

      <section id="tours" className="section-pad">
        <div className="wrap">
          <div className="kicker">Tours</div>
          <h2 className="h2">Elige tu visita. Sin bus con parlante.</h2>
          <p className="lead">Grupo pequeño, horario respetado y vino servido a temperatura. Toca cada tour para ver incluye, cupo y precio desde.</p>
          <div className="tours-list" style={{ marginTop: 24 }}>
            {TOURS.map((it, idx) => {
              const open = openTour === idx;
              return (
                <div key={it.n} className="tour-row" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenTour(open ? null : idx)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenTour(open ? null : idx); } }}>
                  <div className="tour-num">{it.n}</div>
                  <div>
                    <div className="tour-title">{it.title}</div>
                    <div className="sku" style={{ marginTop: 4 }}>{it.n} · {it.meta}</div>
                  </div>
                  <div className="tour-meta" style={{ textAlign: "right" }}>{it.price}</div>
                  <div style={{ color: "var(--terracota)", fontSize: 18, textAlign: "right" }}>{open ? "—" : "+"}</div>
                  {open && (
                    <div className="tour-panel">
                      <div><div className="sku" style={{ lineHeight: 1.6 }}>{it.detail} · <span className="price">{it.price}</span></div></div>
                      <a href="#reserva" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 10 }} onClick={(e) => e.stopPropagation()}>Reservar</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--linea)", background: "var(--papel)", overflow: "hidden" }}>
            <img src={`${base}media/parra.jpg`} alt="Detalle macro de hoja de parra con luz rasante suave, textura vegetal premium" loading="lazy" style={{ width: "100%", height: 280, objectFit: "cover" }} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)", borderTop: "1px solid var(--linea)" }}>
              <span>LUMEN · Pirque — tours con cupo visible, último tour 15:30</span><span>Valle Central</span>
            </div>
          </div>
        </div>
      </section>

      <section id="vinos" className="section-pad">
        <div className="wrap">
          <div className="kicker">Vinos</div>
          <h2 className="h2">Colección viña.</h2>
          <div className="vinos-grid" style={{ marginTop: 24 }}>
            {VINOS.map((v) => (
              <div key={v.n} className="vino-col">
                <div className="vino-num">{v.n}</div>
                <div className="vino-title">{v.title}</div>
                <div className="vino-desc">{v.desc}</div>
                <div className="vino-list">
                  {v.items.map((it) => <span key={it}>◆ {it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Valores viña, sin letra chica</div>
          <h2 className="h2">Lo que ves, pagas.</h2>
          <p className="lead">Valores CLP tabulares por persona y caja. IVA incluido. Cupo máximo 12 personas. Niños no pagan sin degustación.</p>
          <div style={{ marginTop: 24, overflowX: "auto" }}>
            <table className="tabla">
              <thead>
                <tr><th>Programa / Producto</th><th>SKU</th><th>Formato</th><th style={{ textAlign: "right" }}>Precio</th><th>Incluye</th><th></th></tr>
              </thead>
              <tbody>
                {PRECIOS.map((r) => (
                  <tr key={r.sku}>
                    <td style={{ fontWeight: 600 }}>{r.prod}</td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11, letterSpacing: "0.08em" }}>{r.sku}</td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11 }}>{r.unit}</td>
                    <td className="num">${r.price.toLocaleString("es-CL")}</td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11 }}>{r.incluye}</td>
                    <td style={{ textAlign: "right" }}><a href="#reserva" className="btn-tinta" style={{ padding: "7px 12px", fontSize: 10 }}>Reservar</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="nota">
            Cupo máximo 12 personas. Niños no pagan sin degustación. Despacho RM desde $4.990, regiones desde $7.990. Precios actualizados cada temporada. El total se confirma antes de pagar, nunca después. Ventana RM 24–48h, regiones 48–72h.
          </div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 className="h2">Reservas con horario y cupo visible.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Reservas con horario y cupo visible</div>
              <div className="metodo-desc">Eliges fecha, horario y cantidad. Pago en línea. Confirmación inmediata con mapa y coordenadas Pirque.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Llegas y degustas</div>
              <div className="metodo-desc">Grupo pequeño, guía enológica, cava a 14°C constante. Vino servido a temperatura controlada, sin apuro.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Llevas o te despachamos</div>
              <div className="metodo-desc">Caja sellada, guía y boleta/factura SII. Cambio en 48h si falla. Retiro en viña o despacho a domicilio.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Cava</div>
          <h2 className="h2">Barrica y botella.</h2>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className={`gal-card ken reveal ${galIn ? "in" : ""}`} style={{ height: 520 }}>
              <img src={`${base}media/cava.jpg`} alt="Interior de cava vacía con barricas alineadas, pasillo central vacío, piedra y madera, luz natural filtrada" loading="lazy" />
              <div className="gal-caption"><span>Cava LUMEN · barrica roble francés 225L · 14°C constante</span><span>4:5</span></div>
            </div>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 520, transitionDelay: "0.12s" }}>
              <img src={`${base}media/botella.jpg`} alt="Bodegón sobre papel hueso claro: botella sin etiqueta genérica, copa vacía, corcho y lápiz de cata, luz natural" loading="lazy" />
              <div className="gal-caption"><span>Bodegón viña · botella, copa y corcho · papel hueso</span><span>1:1</span></div>
            </div>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--linea)", background: "var(--papel-2)", padding: "12px 14px", display: "flex", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
            <span>Filete 1px · revelado cortina 700ms · Ken Burns 36s solo en cava</span><span>LUMEN claro</span>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Todo claro antes de pagar.</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={`faq-item ${open ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}>
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden>{open ? "×" : "+"}</span>
                  </button>
                  <div className="faq-a">
                    <div className="faq-a-inner"><p>{f.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reserva" className="section-pad">
        <div className="wrap">
          <div className="kicker">Reserva tu visita</div>
          <div className="reserva-box" style={{ marginTop: 18 }}>
            <div className="reserva-left">
              <h2 className="h2" style={{ fontSize: "2rem" }}>Reserva tu visita.<br />Nosotros ponemos la cava.</h2>
              <div className="tel">+56 2 2840 7731</div>
              <div style={{ color: "var(--gris)", fontSize: 13, lineHeight: 1.6 }}>hola@lumenvina.cl<br />Pirque · Tours Lun–Sáb · Despacho RM 24–48h y regiones 48–72h<br />Lun–Vie 10:00–18:00 · Sáb 10:00–17:00 · Dom cerrado · Último tour 15:30</div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="tel:+56228407731" className="btn-tinta">Llamar viña</a>
                <a href="https://wa.me/56228407731" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
              </div>
              <p style={{ marginTop: 12, fontSize: 12, color: "var(--gris)" }}>Responden anfitriones, no bots. Si no contestamos, devolvemos el llamado en 2 horas hábiles.</p>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={(e) => { e.preventDefault(); setFormOk(true); }} style={{ display: "grid", gap: 10 }}>
                  <input className="field" placeholder="Nombre" required aria-label="Nombre" />
                  <input className="field" placeholder="WhatsApp / Email" required aria-label="Contacto" />
                  <select className="field" aria-label="Motivo" defaultValue="">
                    <option value="" disabled>¿Qué te interesa?</option>
                    <option>Reservar tour</option>
                    <option>Comprar vinos / caja mixta</option>
                    <option>Evento privado / empresa</option>
                  </select>
                  <input className="field" placeholder="Fecha tentativa" type="date" aria-label="Fecha" />
                  <button type="submit" className="btn-tinta" style={{ justifyContent: "center" }}>Solicitar reserva</button>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--gris)", lineHeight: 1.5 }}>Horario y cupo visibles. Confirmación inmediata. Reembolso 100% hasta 48h antes.</p>
                </form>
              ) : (
                <div style={{ border: "1px solid var(--terracota)", background: "var(--papel)", padding: 18 }}>
                  <div style={{ fontWeight: 600, color: "var(--tinta)" }}>Solicitud recibida — LUMEN</div>
                  <p style={{ color: "var(--gris)", lineHeight: 1.6, fontSize: 13, margin: "8px 0 0" }}>Te contacta un anfitrión esta mañana para confirmar horario, cupo y despacho. Si reservaste antes de 15:30, confirmamos hoy.</p>
                  <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => setFormOk(false)}>Enviar otra</button>
                </div>
              )}
              <div style={{ borderTop: "1px solid var(--linea)", paddingTop: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
                Cupo y horario visibles · 14°C cava · Despacho a todo Chile
              </div>
            </div>
          </div>
          <footer className="footer" style={{ marginTop: 28 }}>
            <span>© {new Date().getFullYear()} LUMEN — Viña & Cava · Pirque, Valle Central</span>
            <span>Hecho con respeto por la parra · Contraste AA · radios 0</span>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} role="complementary" aria-label="Acción rápida">
        <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tinta)" }}>¿Reservas hoy?</span>
        <a href="#reserva" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 11 }}>Reservar</a>
      </div>
    </>
  );
}
