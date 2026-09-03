import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];

const CATALOGO = [
  { n: "01", title: "Abarrotes", meta: "900 SKUs · desde $6.200", skus: "Aceite 900ml · Arroz 1kg · Conservas · Harinas", price: "desde $6.200" },
  { n: "02", title: "Lácteos y refrigerados", meta: "320 SKUs · frío garantizado", skus: "Leche · Yogur · Cecinas · Queso", price: "frío garantizado" },
  { n: "03", title: "Bebestibles", meta: "480 SKUs · desde $7.400", skus: "Bebida 1.5L · Agua · Jugo · Cerveza", price: "desde $7.400" },
  { n: "04", title: "Aseo y hogar", meta: "260 SKUs · desde $4.800", skus: "Detergente 3kg · Papel · Lavaloza", price: "desde $4.800" },
  { n: "05", title: "Confites y snacks", meta: "380 SKUs · desde $5.900", skus: "Galleta · Chocolate · Snack caja 30", price: "desde $5.900" },
  { n: "06", title: "Harinas y pastas", meta: "180 SKUs · desde $4.200", skus: "Harina 1kg · Fideos · Arroz saco 10", price: "desde $4.200" },
];

const PRECIOS = [
  { prod: "Aceite 900ml caja 12", sku: "ACE-12", unit: "caja 12", price: 18900 },
  { prod: "Arroz 1kg saco 10", sku: "ARZ-10", unit: "saco 10", price: 12400 },
  { prod: "Bebida 1.5L pack 6", sku: "BEB-6", unit: "pack 6", price: 7400 },
  { prod: "Detergente 3kg caja 6", sku: "DET-6", unit: "caja 6", price: 16800 },
  { prod: "Harina 1kg saco 10", sku: "HAR-10", unit: "saco 10", price: 9200 },
  { prod: "Conserva atún caja 24", sku: "ATU-24", unit: "caja 24", price: 14200 },
];

const FAQS = [
  { q: "¿Cuál es el pedido mínimo y costo despacho?", a: "Mínimo $80.000 neto. Despacho $3.990 en RM. Fuera de RM coordinamos despacho con tarifa por bulto. El precio final se confirma al facturar stock del día — sin sorpresas al llegar." },
  { q: "¿Precio por caja o unidad?", a: "Publicamos ambos: por caja (precio mayorista) y por unidad para tu margen. En la cotización por escrito ves el desglose completo con IVA. Si no hay stock de un SKU, lo ves antes de pagar — no después." },
  { q: "¿Cómo veo stock en vivo?", a: "Catálogo con stock en vivo. Si un producto no tiene stock, aparece como 'sin stock' y no entra al carro. Te confirmamos por WhatsApp en menos de 30 minutos hábiles el total y la fecha de despacho." },
  { q: "¿Despachan a regiones y en cuánto?", a: "Sí, despacho a regiones vía transporte. RM día siguiente si pides antes de 16:00. Regiones 48–72h según comuna. Todo con guía y factura electrónica al tiro." },
  { q: "¿Puedo pedir mixto y qué pasa si algo no hay?", a: "Un solo pedido mixto: abarrotes, refrigerados, aseo y bebestibles. Si algo no tiene stock, te avisamos antes de facturar y eliges si lo sacamos o lo reemplazas. Nunca facturamos algo que no aprobaste." },
  { q: "¿Boleta/factura y pago (transferencia, crédito almacenero)?", a: "Factura electrónica SII al momento del picking. Pago: transferencia, efectivo contra entrega y crédito almacenero evaluado para clientes con historial. Nunca despachamos sin tu OK." },
];

const CIFRAS = [
  { v: 17, suffix: " años", label: "abasteciendo almacenes y minimarkets de la RM" },
  { v: 3200, suffix: " SKUs", label: "abarrotes, refrigerados, bebestibles y aseo" },
  { v: 98, suffix: "% pedidos completos", label: "sin quiebre fantasma — medido último trimestre" },
  { v: 1800, suffix: " almacenes", label: "confían su reposición a ÉTER" },
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
          <a href="#inicio" className="brand" aria-label="ÉTER — inicio">ÉTER<span>DISTRIBUIDORA MAYORISTA</span></a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`}>{l.label}</a>
            ))}
            <a href="#reserva" className="btn-tinta">Ver catálogo</a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--papel)", borderBottom: "1px solid var(--linea)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>{l.label}</a>
            ))}
            <a href="#reserva" onClick={() => setMobileNav(false)} className="btn-tinta" style={{ justifyContent: "center" }}>Cotizar pedido</a>
          </div>
        )}
      </nav>

      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Distribuidora mayorista · La Florida · Desde 2008</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>Abastecimiento</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>sin WhatsApp</span></span>
              <span className="line" style={{ transitionDelay: "0.24s" }}><span style={{ transitionDelay: "0.29s" }}>eterno.</span></span>
            </h1>
            <p className="hero-sub">Catálogo con precio por caja y unidad, stock en vivo y despacho programado. Pides hoy, facturado hoy — sin perseguir al vendedor.</p>
            <div className="hero-ctas">
              <a href="#precios" className="btn-tinta">Ver catálogo y precios →</a>
              <a href="#reserva" className="btn-ghost">Cotizar por WhatsApp</a>
            </div>
            <div className="hero-badges">
              <span>Factura electrónica</span>
              <span>SII</span>
              <span>Despacho programado</span>
              <span>Mínimo $80.000</span>
            </div>
            <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12, lineHeight: 1.6 }}>Stock en vivo. Si no hay, lo ves antes de pedir — no después.</p>
          </div>
          <div className="hero-right">
            <img src="media/bodega.jpg" alt="Bodega luminosa vacía con pasillo de pallets y cajas alineadas rotuladas, sin personas, luz norte" loading="eager" />
          </div>
        </div>
        <div className="hero-band" aria-label="Beneficios">Stock en vivo · Precio por caja y unidad · Despacho programado · Factura al tiro</div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia, no promesas</div>
          <h2 className="h2" style={{ maxWidth: 640 }}>Números que tu almacén siente el fin de semana.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            {CIFRAS.map((c, i) => {
              const v = useCountUp(cifrasIn, c.v);
              const display = i === 1 ? v.toLocaleString("es-CL") : String(v);
              return (
                <div key={i} className="cifra">
                  <div className="cifra-num">{i === 2 ? `${v}%` : `${display}`}{i === 0 ? " años" : i === 1 ? " SKUs" : i === 2 ? "" : " almacenes"}</div>
                  <div className="cifra-label">{c.label}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12 }}>Medición interna pedidos completos · Facturación SII · Stock rotulado con picking 06:00.</p>
        </div>
      </section>

      <section id="catalogo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Catálogo</div>
          <h2 className="h2">Todo por caja, todo mixto.</h2>
          <p className="lead">Abarrotes, refrigerados, bebestibles y aseo en un solo pedido. Toca cada familia para ver SKUs y precio desde.</p>
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
                  <div style={{ color: "var(--oxido)", fontSize: 18, textAlign: "right" }}>{open ? "—" : "+"}</div>
                  {open && (
                    <div className="catalogo-panel">
                      <div className="sku">SKUs: {it.skus} · <span className="price">{it.price}</span></div>
                      <a href="#reserva" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 10 }} onClick={(e) => e.stopPropagation()}>Cotizar</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--linea)", background: "var(--papel)", overflow: "hidden" }}>
            <img src="media/camion.jpg" alt="Camión de reparto blanco estacionado frente a portón de bodega, luz de mañana sin personas" loading="lazy" style={{ width: "100%", height: 280, objectFit: "cover" }} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)", borderTop: "1px solid var(--linea)" }}>
              <span>Bodega ÉTER · picking diario 06:00 · La Florida</span><span>Despacho RM y regiones</span>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Precios por caja y unidad, sin letra chica</div>
          <h2 className="h2">Lo que ves, pagas.</h2>
          <p className="lead">Valores de referencia por caja. IVA incluido. Mínimo $80.000 neto. Despacho $3.990 RM.</p>
          <div style={{ marginTop: 24, overflowX: "auto" }}>
            <table className="tabla">
              <thead>
                <tr><th>Producto</th><th>SKU</th><th>Por</th><th style={{ textAlign: "right" }}>Precio desde</th><th></th></tr>
              </thead>
              <tbody>
                {PRECIOS.map((r) => (
                  <tr key={r.sku}>
                    <td style={{ fontWeight: 600 }}>{r.prod}</td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11, letterSpacing: "0.08em" }}>{r.sku}</td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11 }}>{r.unit}</td>
                    <td className="num">${r.price.toLocaleString("es-CL")}</td>
                    <td style={{ textAlign: "right" }}><a href="#reserva" className="btn-tinta" style={{ padding: "7px 12px", fontSize: 10 }}>Cotizar</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="nota">
            IVA incluido. Mínimo $80.000. Despacho $3.990 RM. El valor final se confirma al facturar stock del día. Nunca despachamos sin tu OK. Si un SKU no tiene stock, lo ves antes de pagar.
          </div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 className="h2">Pides hoy. Vendes mañana.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Cotizas</div>
              <div className="metodo-desc">Catálogo web o WhatsApp con tu lista. Un pedido mixto: abarrotes, frío, aseo y bebestibles. Te confirmamos stock al tiro.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Confirmamos y facturamos</div>
              <div className="metodo-desc">Stock y total por escrito en menos de 30 minutos hábiles. Factura electrónica SII al tiro. Nada se despacha sin tu confirmación.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Picking y despacho programado</div>
              <div className="metodo-desc">Armamos con picking por caja, guía y trazabilidad. Despacho programado a tu sala. Tu cliente nunca queda sin stock el finde.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Bodega</div>
          <h2 className="h2">Orden que se ve.</h2>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className={`gal-card ken reveal ${galIn ? "in" : ""}`} style={{ height: 520 }}>
              <img src="media/still.jpg" alt="Caja abierta con productos alineados, albarán y lápiz sobre papel hueso, luz natural" loading="lazy" />
              <div className="gal-caption"><span>Still 01 · caja + albarán · papel hueso</span><span>4:5</span></div>
            </div>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 520, transitionDelay: "0.12s" }}>
              <img src="media/detail.jpg" alt="Macro de cartón corrugado texturado con luz rasante suave" loading="lazy" />
              <div className="gal-caption"><span>Textura 02 · cartón corrugado · luz rasante</span><span>1:1</span></div>
            </div>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--linea)", background: "var(--papel-2)", padding: "12px 14px", display: "flex", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
            <span>Filete 1px · revelado cortina 700ms · Ken Burns 36s solo en still</span><span>ÉTER claro</span>
          </div>
        </div>
      </section>

      <section id="evidencia" className="section-pad" style={{ background: "var(--papel-2)", borderTop: "1px solid var(--linea)", borderBottom: "1px solid var(--linea)" }}>
        <div className="wrap">
          <div className="kicker">Evidencia</div>
          <h2 className="h2">Sin quiebre fantasma.</h2>
          <p className="lead">Si no hay stock, lo ves antes de pagar. No después, no con la mitad del pedido. Nuestra métrica es pedido completo, no pedido facturado.</p>
          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>
            <span style={{ border: "1px solid var(--linea)", padding: "6px 10px", background: "#fff" }}>◆ Stock en vivo</span>
            <span style={{ border: "1px solid var(--linea)", padding: "6px 10px", background: "#fff" }}>◆ Factura al tiro</span>
            <span style={{ border: "1px solid var(--linea)", padding: "6px 10px", background: "#fff" }}>◆ Guía trazada</span>
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
          <div className="kicker">Cotizar pedido</div>
          <div className="reserva-box" style={{ marginTop: 18 }}>
            <div className="reserva-left">
              <h2 className="h2" style={{ fontSize: "2rem" }}>Pide hoy.<br />Vende mañana.</h2>
              <div className="tel">+56 2 2840 3315</div>
              <div style={{ color: "var(--gris)", fontSize: 13, lineHeight: 1.6 }}>hola@eterdistribuidora.cl<br />La Florida / Santiago — despacho RM y regiones<br />Lun–Sáb 6:00–18:00 · Pedidos hasta 16:00 despacho día siguiente</div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="tel:+56228403315" className="btn-tinta">Llamar bodega</a>
                <a href="https://wa.me/56984033315" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
              </div>
              <p style={{ marginTop: 12, fontSize: 12, color: "var(--gris)" }}>Responde bodega, no bot. Si no contestamos, devolvemos el llamado en 30 min hábil.</p>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={(e) => { e.preventDefault(); setFormOk(true); }} style={{ display: "grid", gap: 10 }}>
                  <input className="field" placeholder="Nombre almacén / minimarket" required aria-label="Nombre" />
                  <input className="field" placeholder="WhatsApp" required aria-label="WhatsApp" />
                  <input className="field" placeholder="Comuna" required aria-label="Comuna" />
                  <select className="field" aria-label="Pedido" defaultValue="">
                    <option value="" disabled>¿Qué necesitas reponer?</option>
                    <option>Abarrotes + bebestibles</option>
                    <option>Refrigerados</option>
                    <option>Mix completo</option>
                  </select>
                  <button type="submit" className="btn-tinta" style={{ justifyContent: "center" }}>Solicitar cotización</button>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--gris)", lineHeight: 1.5 }}>Mínimo $80.000 · Factura SII · Stock en vivo. Te respondemos en menos de 30 min hábil.</p>
                </form>
              ) : (
                <div style={{ border: "1px solid var(--oxido)", background: "var(--papel)", padding: 18 }}>
                  <div style={{ fontWeight: 600, color: "var(--tinta)" }}>Solicitud recibida — ÉTER</div>
                  <p style={{ color: "var(--gris)", lineHeight: 1.6, fontSize: 13, margin: "8px 0 0" }}>Te contacta bodega esta mañana para confirmar stock, total y ventana de despacho. Si pediste antes de 16:00, despacho día siguiente.</p>
                  <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => setFormOk(false)}>Enviar otra</button>
                </div>
              )}
              <div style={{ borderTop: "1px solid var(--linea)", paddingTop: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
                Despacho programado · Factura electrónica · Stock en vivo
              </div>
            </div>
          </div>
          <footer className="footer" style={{ marginTop: 28 }}>
            <span>© {new Date().getFullYear()} ÉTER — Distribuidora Mayorista · La Florida, Santiago</span>
            <span>Hecho con rigor logístico · Contraste AA · radios 0</span>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} role="complementary" aria-label="Acción rápida">
        <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tinta)" }}>¿Repones hoy?</span>
        <a href="#reserva" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 11 }}>Cotizar pedido</a>
      </div>
    </>
  );
}
