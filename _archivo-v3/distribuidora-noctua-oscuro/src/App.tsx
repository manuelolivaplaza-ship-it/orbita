import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];

const CATALOGO = [
  { n: "01", title: "Licores y destilados", meta: "120 SKUs · desde $18.900", skus: "Pisco 35° · Ron · Vodka · Whisky", price: "desde $18.900 caja 6" },
  { n: "02", title: "Confites y snacks premium", meta: "380 SKUs · desde $9.400", skus: "Chocolate · Galletas · Snack caja 30", price: "desde $9.400" },
  { n: "03", title: "Abarrotes", meta: "900 SKUs · desde $6.200", skus: "Aceite · Arroz · Conservas · Harinas", price: "desde $6.200" },
  { n: "04", title: "Refrigerados", meta: "210 SKUs · frío garantizado", skus: "Lácteos · Cecinas · Bebidas heladas", price: "frío garantizado" },
  { n: "05", title: "Aseo", meta: "180 SKUs · desde $4.800", skus: "Detergente · Papel · Higiene", price: "desde $4.800" },
];

const PRECIOS = [
  { prod: "Pisco 35° caja 6 × 750cc", sku: "PIS-35-6", price: 18900 },
  { prod: "Ron caja 6 × 750cc", sku: "RON-6", price: 22400 },
  { prod: "Cerveza pack 24 × 350cc", sku: "CER-24", price: 16800 },
  { prod: "Snack caja 30 unidades", sku: "SNK-30", price: 14200 },
  { prod: "Bebida pack 6 × 1.5L", sku: "BEB-6", price: 9400 },
];

const FAQS = [
  { q: "¿Hasta qué hora puedo pedir para despacho nocturno?", a: "Pedidos hasta las 18:00 se despachan la misma noche entre 18:00 y 04:00. Después de 18:00, tu pedido entra al despacho de la noche siguiente. Te confirmamos por WhatsApp la ventana exacta." },
  { q: "¿Despachan de noche en mi comuna?", a: "Despacho nocturno sin recargo en toda la RM. Fuera de RM coordinamos despacho diurno con frío garantizado. Escríbenos y validamos tu dirección en minutos — responde bodega nocturna, no bot." },
  { q: "¿Frío garantizado cómo funciona?", a: "Refrigerados viajan en frío activo y se entregan con control de temperatura. Si algo llega fuera de rango, no lo recibes y se repone al día siguiente sin costo. Sin letra chica." },
  { q: "¿Mínimo y costo despacho nocturno?", a: "Mínimo $80.000 neto. Despacho nocturno sin recargo en RM. IVA incluido en todos los precios por caja publicados. El valor final se confirma al facturar stock del día." },
  { q: "¿Puedo pedir mixto licor + abarrotes?", a: "Sí. Un solo pedido, una sola factura. Puedes mezclar licores, confites, abarrotes, refrigerados y aseo. Si no hay stock de un ítem, lo ves antes de pagar — de noche también." },
  { q: "¿Factura y pago a crédito?", a: "Factura electrónica al tiro al momento del picking. Pago: transferencia, efectivo contra entrega y crédito evaluado para clientes con historial. Nunca despachamos sin tu OK." },
];

const CIFRAS = [
  { v: 12, suffix: " años", label: "abasteciendo botillerías y minimarkets de la RM" },
  { v: 2800, suffix: " SKUs", label: "licores, confites, abarrotes y refrigerados" },
  { v: 97, suffix: "% despacho nocturno a tiempo", label: "ventana 18:00–04:00 medida último trimestre" },
  { v: 600, suffix: " botillerías", label: "confían su reposición premium a NOCTUA" },
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

export function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openCat, setOpenCat] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cifrasIn, setCifrasIn] = useState(false);
  const [galIn, setGalIn] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const lastY = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBig = useRef(false);

  // scroll handling
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

  // cifras + galeria intersection
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

  // custom cursor
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = 0, y = 0, raf = 0;
    let curX = 0, curY = 0;
    const el = cursorRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      curX += (x - curX) * 0.18;
      curY += (y - curY) * 0.18;
      el.style.left = curX + "px";
      el.style.top = curY + "px";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    const links = document.querySelectorAll("a, button");
    const enter = () => { cursorBig.current = true; el.classList.add("big"); };
    const leave = () => { cursorBig.current = false; el.classList.remove("big"); };
    links.forEach((l) => { l.addEventListener("mouseenter", enter); l.addEventListener("mouseleave", leave); });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      links.forEach((l) => { l.removeEventListener("mouseenter", enter); l.removeEventListener("mouseleave", leave); });
    };
  }, []);

  // clip reveal for hero
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <div ref={cursorRef} className="cursor-dot" aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="NOCTUA — inicio">NOCTUA<span>DISTRIBUIDORA NOCTURNA</span></a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`}>{l.label}</a>
            ))}
            <a href="#reserva" className="btn-ambar">Ver catálogo</a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--superficie)", borderBottom: "1px solid var(--filete)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris-calido)" }}>{l.label}</a>
            ))}
            <a href="#reserva" onClick={() => setMobileNav(false)} className="btn-ambar" style={{ justifyContent: "center" }}>Cotizar botillería</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Distribuidora nocturna · Maipú · Despacho 18–04h</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>La bodega</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>no duerme.</span></span>
            </h1>
            <p className="hero-sub">Licores, confites y abarrotes premium con reposición nocturna. Pides hasta las 18:00, despachamos de noche — tu sala amanece llena.</p>
            <div className="hero-ctas">
              <a href="#precios" className="btn-ambar">Ver catálogo nocturno →</a>
              <a href="#reserva" className="btn-ghost">Cotizar botillería</a>
            </div>
            <div className="hero-badges" aria-label="Beneficios">
              <span>Despacho nocturno</span>
              <span>Factura electrónica</span>
              <span>Frío garantizado</span>
            </div>
            <p style={{ marginTop: 14, color: "var(--gris-calido)", fontSize: 12, lineHeight: 1.6 }}>Si no hay stock, lo ves antes de pagar. De noche también.</p>
          </div>
          <div className="hero-right">
            <img src="media/hero.jpg" alt="Bodega nocturna vacía con pallets iluminados con luz cálida rasante, sin personas" loading="eager" />
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="section-pad">
        <div className="wrap">
          <div className="kicker">Filosofía</div>
          <div className="filo-grid" style={{ marginTop: 18 }}>
            <div>
              <div className="filo-quote">Reposición nocturna,<br />sala llena al abrir.</div>
              <p className="filo-copy" style={{ marginTop: 18 }}>Despachamos cuando tu sala está cerrada. Sin camión bloqueando la puerta a las 11:00. Frío garantizado, factura al tiro. No es bodegón barato: es abastecimiento donde el botillero no queda sin stock premium el fin de semana.</p>
              <div className="filete" style={{ marginTop: 22 }} />
              <div style={{ marginTop: 18, display: "flex", gap: 22, flexWrap: "wrap", fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris-calido)" }}>
                <span>◆ Sin quiebre sábado</span><span>◆ Precio por caja fijo</span><span>◆ Entrega 18–04h</span>
              </div>
            </div>
            <dl className="filo-side">
              <dt>El dolor que quitamos</dt>
              <dd>“Te quedas sin stock premium el sábado y el proveedor responde el lunes.” Aquí no.</dd>
              <dt>Precio sin susto</dt>
              <dd>El precio de licor no cambia sin aviso. La factura llega idéntica a lo cotizado.</dd>
              <dt>Despacho que no estorba</dt>
              <dd>De noche, con sala cerrada. Tu cliente nunca ve el camión.</dd>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--filete)", fontSize: 12, color: "var(--gris-calido)", lineHeight: 1.6 }}>
                Lun–Sáb 18:00–04:00 despacho nocturno · Pedidos hasta 18:00 · Maipú / Santiago
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia, no promesas</div>
          <h2 className="h2" style={{ maxWidth: 640 }}>Números que tu botillería siente el lunes.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            {CIFRAS.map((c, i) => {
              const v = useCountUp(cifrasIn, c.v);
              const display = i === 1 ? v.toLocaleString("es-CL") : String(v);
              return (
                <div key={i} className="cifra">
                  <div className="cifra-num">+{i === 2 ? `${v}%` : i === 1 ? `${display}` : String(v)}{i === 0 ? " años" : i === 1 ? " SKUs" : i === 3 ? " botillerías" : ""}{i === 2 ? "" : ""}</div>
                  <div style={{ display: "none" }}>{c.suffix}</div>
                  <div className="cifra-label">{c.label}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 14, color: "var(--gris-calido)", fontSize: 12 }}>Medición interna despacho nocturno · Facturación electrónica SII · Frío con trazabilidad.</p>
        </div>
      </section>

      {/* CATALOGO */}
      <section id="catalogo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Catálogo</div>
          <h2 className="h2">Todo por caja, todo mixto.</h2>
          <p className="lead">Licor + abarrotes + frío en un solo pedido. Toca cada familia para ver SKUs y precio desde.</p>
          <div className="catalogo-list" style={{ marginTop: 24 }}>
            {CATALOGO.map((it, idx) => {
              const open = openCat === idx;
              return (
                <div key={it.n} className="catalogo-row" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenCat(open ? null : idx)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenCat(open ? null : idx); } }}>
                  <div className="catalogo-num">{it.n}</div>
                  <div>
                    <div className="catalogo-title">{it.title}</div>
                    <div className="sku" style={{ marginTop: 4 }}>{it.skus}</div>
                  </div>
                  <div className="catalogo-meta">{it.meta}</div>
                  <div style={{ color: "var(--ambar)", fontSize: 18, textAlign: "right" }}>{open ? "—" : "+"}</div>
                  {open && (
                    <div className="catalogo-panel">
                      <div className="sku">SKUs: {it.skus} · <span className="price">{it.price}</span></div>
                      <a href="#reserva" className="btn-ambar" style={{ padding: "8px 14px", fontSize: 10 }} onClick={(e) => e.stopPropagation()}>Cotizar</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--filete)", background: "var(--fondo)", overflow: "hidden" }}>
            <img src="media/corridor.jpg" alt="Pasillo de bodega nocturno simétrico con focos empotrados cálidos, sin personas" loading="lazy" style={{ width: "100%", height: 280, objectFit: "cover", opacity: .9 }} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-calido)", borderTop: "1px solid var(--filete)" }}>
              <span>Corredor NOCTUA · 04:00 · picking nocturno</span><span>Maipú · RM</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Precios por caja, sin sorpresas</div>
          <h2 className="h2">Lo que ves, facturas.</h2>
          <p className="lead">Valores de referencia por caja/pack. IVA incluido. Mínimo $80.000 neto.</p>
          <div style={{ marginTop: 24, overflowX: "auto" }}>
            <table className="tabla">
              <thead>
                <tr><th>Producto</th><th>SKU</th><th style={{ textAlign: "right" }}>Precio desde</th><th></th></tr>
              </thead>
              <tbody>
                {PRECIOS.map((r) => (
                  <tr key={r.sku}>
                    <td style={{ fontWeight: 600 }}>{r.prod}</td>
                    <td className="mono" style={{ color: "var(--gris-calido)", fontSize: 11, letterSpacing: "0.08em" }}>{r.sku}</td>
                    <td className="num">${r.price.toLocaleString("es-CL")}</td>
                    <td style={{ textAlign: "right" }}><a href="#reserva" className="btn-ambar" style={{ padding: "7px 12px", fontSize: 10 }}>Cotizar</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="nota">
            IVA incluido. Mínimo $80.000. Despacho nocturno sin recargo RM. El valor final se confirma al facturar stock del día. Nunca despachamos sin tu OK. Si un SKU no tiene stock, lo ves antes de pagar — de noche también.
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 className="h2">Pides hoy, amanece lleno.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Pides hasta 18:00</div>
              <div className="metodo-desc">Catálogo web o WhatsApp. Un pedido mixto: licor, confites, abarrotes y frío. Te confirmamos stock en el momento.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Picking nocturno y factura</div>
              <div className="metodo-desc">Armamos de noche con factura electrónica al tiro. Control de frío y lote. Nada se despacha sin tu confirmación.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Despacho 18–04h, frío garantizado</div>
              <div className="metodo-desc">Entrega nocturna sin camión en tu puerta a las 11:00. Cadena de frío trazada. Tu sala amanece lista para vender.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Galería</div>
          <h2 className="h2">La bodega como galería.</h2>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className={`gal-card ken reveal ${galIn ? "in" : ""}`} style={{ height: 520 }}>
              <img src="media/bodegon.jpg" alt="Bodegón chiaroscuro con botella, caja y albarán sobre piedra oscura iluminados" loading="lazy" />
              <div className="gal-caption"><span>Bodegón 01 · botella + caja + albarán · piedra oscura</span><span>4:5</span></div>
            </div>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 520, transitionDelay: "0.12s" }}>
              <img src="media/texture.jpg" alt="Macro de cartón oscuro texturado con luz rasante cálida" loading="lazy" />
              <div className="gal-caption"><span>Textura 02 · cartón oscuro · luz rasante cálida</span><span>1:1</span></div>
            </div>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--filete)", background: "var(--superficie)", padding: "12px 14px", display: "flex", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-calido)" }}>
            <span>Filete 1px · revelado cortina 700ms · Ken Burns 36s solo en bodegón</span><span>Noctua oscuro</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* RESERVA */}
      <section id="reserva" className="section-pad">
        <div className="wrap">
          <div className="kicker">Reserva despacho nocturno</div>
          <div className="reserva-box" style={{ marginTop: 18 }}>
            <div className="reserva-left">
              <h2 className="h2" style={{ fontSize: "2rem" }}>Tu sala amanece llena.<br />Cotiza esta noche.</h2>
              <div className="tel">+56 2 2840 3315</div>
              <div style={{ color: "var(--gris-calido)", fontSize: 13, lineHeight: 1.6 }}>hola@noctuadistribuidora.cl<br />Maipú / Santiago — despacho nocturno RM<br />Lun–Sáb 18:00–04:00 · Pedidos hasta 18:00</div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="tel:+56228403315" className="btn-ambar">Llamar bodega</a>
                <a href="https://wa.me/56228403315" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp nocturno</a>
              </div>
              <p style={{ marginTop: 12, fontSize: 12, color: "var(--gris-calido)" }}>Responde bodega nocturna, no bot. Si no hay stock, lo ves antes de pagar.</p>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={(e) => { e.preventDefault(); setFormOk(true); }} style={{ display: "grid", gap: 10 }}>
                  <input className="field" placeholder="Nombre botillería / minimarket" required aria-label="Nombre" />
                  <input className="field" placeholder="WhatsApp" required aria-label="WhatsApp" />
                  <input className="field" placeholder="Comuna" required aria-label="Comuna" />
                  <select className="field" aria-label="Pedido" defaultValue="">
                    <option value="" disabled>¿Qué necesitas reponer?</option>
                    <option>Licores + confites</option>
                    <option>Refrigerados</option>
                    <option>Mix completo</option>
                  </select>
                  <button type="submit" className="btn-ambar" style={{ justifyContent: "center" }}>Solicitar cotización nocturna</button>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--gris-calido)", lineHeight: 1.5 }}>Mínimo $80.000 · Factura electrónica · Frío garantizado. Te respondemos en la ventana nocturna.</p>
                </form>
              ) : (
                <div style={{ border: "1px solid var(--ambar)", background: "var(--fondo)", padding: 18 }}>
                  <div style={{ fontWeight: 600, color: "var(--hueso)" }}>Solicitud recibida — NOCTUA</div>
                  <p style={{ color: "var(--gris-calido)", lineHeight: 1.6, fontSize: 13, margin: "8px 0 0" }}>Te contacta bodega nocturna esta noche para confirmar stock y ventana 18–04h. Si pediste antes de 18:00, despacho hoy.</p>
                  <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => setFormOk(false)}>Enviar otra</button>
                </div>
              )}
              <div style={{ borderTop: "1px solid var(--filete)", paddingTop: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-calido)" }}>
                Despacho nocturno · Factura electrónica · Frío garantizado
              </div>
            </div>
          </div>

          <footer className="footer" style={{ marginTop: 28 }}>
            <span>© {new Date().getFullYear()} NOCTUA — Distribuidora Nocturna · Maipú, Santiago</span>
            <span>Hecho con rigor logístico · Contraste AA · radios 0</span>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} role="complementary" aria-label="Acción rápida">
        <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--hueso)" }}>¿Repones esta noche?</span>
        <a href="#reserva" className="btn-ambar" style={{ padding: "8px 14px", fontSize: 11 }}>Cotizar botillería</a>
      </div>
    </>
  );
}
