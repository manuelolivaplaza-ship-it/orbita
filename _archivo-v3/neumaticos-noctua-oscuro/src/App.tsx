import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "cifras", label: "Cifras" },
  { id: "catalogo", label: "Catálogo" },
  { id: "servicios", label: "Servicios" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];

const CATALOGO = [
  { n: "01", title: "Neumáticos UHP", meta: "205/55 R16 — 245/40 R19 · desde $119.900", skus: "Michelin · Continental · Pirelli · Bridgestone", price: "desde $119.900 c/u" },
  { n: "02", title: "SUV & 4×4", meta: "265/65 R17 — 285/45 R22 · desde $149.900", skus: "All-Terrain · Highway · M+S · XL", price: "desde $149.900" },
  { n: "03", title: "Llanta diamantada", meta: "17\" — 22\" · forjada & flow-formed", skus: "Negro satín · Diamantada · Gunmetal · Brushed", price: "desde $289.900" },
  { n: "04", title: "Pack Llanta + Neumático", meta: "Balanceado · centrado · TPMS", skus: "Set 4 · incluye montaje y balanceo", price: "desde $890.000 set 4" },
  { n: "05", title: "Runflat & Sellado", meta: "Seguridad sin auxilio · 80km a 80km/h", skus: "RunFlat · Seal Inside · ContiSeal", price: "desde $139.900" },
  { n: "06", title: "Invierno & All Season", meta: "3PMSF · compuesto frío · lamelado", skus: "Nordic · All Season · 4 estaciones", price: "desde $129.900" },
];

const PRECIOS = [
  { prod: "Michelin Pilot Sport 5 225/45 R18", sku: "MPS5-225-18", spec: "UHP · XL 95Y", price: 189900 },
  { prod: "Continental PremiumContact 7 205/55 R16", sku: "CPC7-205-16", spec: "Turismo · 91W", price: 139900 },
  { prod: "Llanta NOCTUA D01 19\" diamantada", sku: "D01-19-DM", spec: "Flow-formed · 5×112 · ET35", price: 329900 },
  { prod: "Pack 4 × 245/40 R19 + D01 19\"", sku: "PACK-19-D01", spec: "Balanceado · TPMS · válvulas", price: 1290000 },
  { prod: "Montaje + Balanceo dinámico + Alineación 3D", sku: "MBA-3D", spec: "Por vehículo · garantía escrita", price: 89900 },
];

const FAQS = [
  { q: "¿Instalan en el día sin espera eterna?", a: "Sí. Agendas por hora exacta en Vitacura. Llegas, pasas a sala negra con café, y en 55 minutos sales alineado y balanceado con hoja de torque firmada. Sin fila, sin galpón abierto." },
  { q: "¿Puedo ver el stock real antes de ir?", a: "Stock curado en vivo: si aparece disponible, está físicamente en bunker. No traemos “a pedido de 10 días”. Si no hay tu medida, te proponemos equivalente premium inmediato — no te hacemos perder el viaje." },
  { q: "¿Garantía y torque con ficha?", a: "Todo montaje incluye balanceo dinámico 0g, torque con torquímetro y reapriete gratuito a los 100 km. Ficha firmada con presiones, DOT y garantía escrita 12 meses por defecto de montaje." },
  { q: "¿Llanta diamantada se repara si la cuneteo?", a: "Sí. Taller propio de rectificado y diamantado CNC. La mayoría de llanteos urbanos se corrigen sin repintar paño completo. Evaluación en 10 minutos con luz rasante — te decimos si es cosmético o estructural." },
  { q: "¿Alineación 3D incluida en pack llanta+neumático?", a: "Sí. Todo pack set 4 incluye montaje, balanceo, válvulas nuevas, TPMS y alineación 3D. Sale en una sola factura, un solo torque. No cobramos “aparte” lo que debe ir incluido." },
  { q: "¿Factura, garantía y pago en cuotas?", a: "Factura electrónica al tiro. Garantía oficial de marca + garantía NOCTUA de montaje. Pago: transferencia, tarjetas en cuotas y crédito evaluado para flotas. Todo con orden de trabajo firmada." },
];

const CIFRAS = [
  { v: 11, suffix: " años", label: "montaje de precisión en Santiago oriente" },
  { v: 8400, suffix: " montajes", label: "balanceados a 0g · medidos último año" },
  { v: 98, suffix: "% sin vibración", label: "reclamos <2% · reapriete incluido 100km" },
  { v: 320, suffix: " llantas", label: "diamantadas en stock curado Vitacura" },
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
  const [formOk, setFormOk] = useState(false);
  const lastY = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
      setHideNav(y > lastY.current && y > 120);
      lastY.current = y;
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
    const enter = () => el.classList.add("big");
    const leave = () => el.classList.remove("big");
    links.forEach((l) => { l.addEventListener("mouseenter", enter); l.addEventListener("mouseleave", leave); });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      links.forEach((l) => { l.removeEventListener("mouseenter", enter); l.removeEventListener("mouseleave", leave); });
    };
  }, []);

  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <div ref={cursorRef} className="cursor-dot" aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="NEUMA NOCTUA — inicio"><em>◉</em>NEUMA NOCTUA<span>NEUMÁTICOS PREMIUM · VITACURA</span></a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`}>{l.label}</a>
            ))}
            <a href="#reserva" className="btn-hueso">Ver stock curado</a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--tinta)", borderBottom: "1px solid var(--linea)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>{l.label}</a>
            ))}
            <a href="#reserva" onClick={() => setMobileNav(false)} className="btn-hueso" style={{ justifyContent: "center" }}>Ver stock curado</a>
          </div>
        )}
      </nav>

      {/* HERO — #inicio */}
      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Showroom Vitacura · Montaje con cita · Desde 2014</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`} style={{ opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(8px)", transition: "opacity .7s ease, transform .7s ease" }}>
              Neumático premium.<br />Llanta diamantada.<br />Montaje de precisión.
            </h1>
            <p className="hero-sub">No vendemos “neumáticos baratos”. Curamos stock premium, diamantamos llanta y montamos con torque certificado. Agenda por hora — entras, tomas café, sales alineado.</p>
            <div className="hero-ctas">
              <a href="#catalogo" className="btn-hueso">Ver stock curado →</a>
              <a href="#reserva" className="btn-ghost">Agendar montaje</a>
            </div>
            <div className="hero-badges" aria-label="Beneficios">
              <span>Balanceo 0g</span>
              <span>Alineación 3D</span>
              <span>Reapriete 100 km</span>
            </div>
            <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12, lineHeight: 1.6 }}>Vitacura · Alonso de Córdova · L–S 09:00–19:00 con cita. Si no hay stock, lo ves antes de pagar.</p>
          </div>
          <div className="hero-right">
            <img src="media/taller-noir.jpg" alt="Taller nocturno oscuro con luz rasante, rack de neumáticos premium sin personas" loading="eager" />
            <div className="hero-meta"><span>Bunker NOCTUA · luz rasante · 4000K</span><span>Santiago</span></div>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Evidencia, no promesas</div>
          <h2 className="h2" style={{ maxWidth: 640 }}>Números que sientes a 120 km/h.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            {CIFRAS.map((c, i) => {
              const v = useCountUp(cifrasIn, c.v);
              const display = c.v >= 1000 ? v.toLocaleString("es-CL") : String(v);
              return (
                <div key={i} className="cifra">
                  <div className="cifra-num">+{i === 2 ? `${v}%` : i === 1 ? display : i === 3 ? display : String(v)}{i === 0 ? " años" : i === 1 ? " montajes" : i === 3 ? " llantas" : ""}</div>
                  <div className="cifra-label">{c.label}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12 }}>Medición interna montajes 2024 · Balanceo Hunter · Alineación John Bean 3D.</p>
        </div>
      </section>

      {/* CATALOGO 01-06 */}
      <section id="catalogo" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Catálogo nocturno</div>
          <h2 className="h2">Stock curado, no bodega infinita.</h2>
          <p className="lead">Seis familias. Solo premium con DOT vigente. Toca cada fila para ver medidas y precio desde.</p>
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
                  <div style={{ color: "var(--rojo-noir)", fontSize: 18, textAlign: "right" }}>{open ? "—" : "+"}</div>
                  {open && (
                    <div className="catalogo-panel">
                      <div className="sku">Incluye: {it.skus} · <span className="price">{it.price}</span></div>
                      <a href="#reserva" className="btn-hueso" style={{ padding: "8px 14px", fontSize: 10 }} onClick={(e) => e.stopPropagation()}>Ver stock curado</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--linea)", background: "var(--tinta)", overflow: "hidden" }}>
            <img src="media/pasillo-noir.jpg" alt="Pasillo de bunker nocturno con racks iluminados y neumáticos ordenados, sin personas" loading="lazy" style={{ width: "100%", height: 280, objectFit: "cover", opacity: .92, filter: "saturate(0.85) brightness(0.9)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)", borderTop: "1px solid var(--linea)" }}>
              <span>Pasillo NOCTUA · stock curado · 04:00</span><span>Vitacura · RM</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS 3 cols */}
      <section id="servicios" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Servicios bunker</div>
          <h2 className="h2">Montaje que no vibra.</h2>
          <p className="lead">Tres servicios, un mismo estándar: tolerancia 0,02 mm, torque certificado, hoja firmada.</p>
          <div className="serv-grid" style={{ marginTop: 24 }}>
            <div className="serv-col">
              <div className="serv-icon">◎</div>
              <div className="serv-title">Montaje & Balanceo 0g</div>
              <div className="serv-desc">Desmontaje con protección de pestaña, válvula nueva, balanceo dinámico Hunter a 0 gramos y centrado con anillo si corresponde.</div>
              <ul className="serv-list">
                <li>Protección de llanta diamantada</li>
                <li>Balanceo road-force opcional</li>
                <li>Hoja de torque firmada</li>
              </ul>
            </div>
            <div className="serv-col">
              <div className="serv-icon">⬡</div>
              <div className="serv-title">Alineación 3D + Geometría</div>
              <div className="serv-desc">John Bean 3D con informe antes/después. Caída, avance y convergencia ajustados a ficha fabricante — no “a ojo”.</div>
              <ul className="serv-list">
                <li>Informe impreso + PDF</li>
                <li>Volante centrado garantizado</li>
                <li>Revisión 100 km sin costo</li>
              </ul>
            </div>
            <div className="serv-col">
              <div className="serv-icon">✦</div>
              <div className="serv-title">Diamantado & Rectificado</div>
              <div className="serv-desc">Corrección CNC de llanteo urbano, pulido y sellado cerámico. La mayoría sin repintar paño completo.</div>
              <ul className="serv-list">
                <li>Evaluación con luz rasante</li>
                <li>Diamantado en 24–48h</li>
                <li>Sellado cerámico 12 meses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS tabla tinta 5 filas */}
      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Precios bunker — sin susto</div>
          <h2 className="h2">Lo que ves, facturas.</h2>
          <p className="lead">Valores de referencia IVA incluido. Stock con DOT vigente. Montaje y balanceo incluidos donde indica.</p>
          <div style={{ marginTop: 24, overflowX: "auto" }}>
            <table className="tabla">
              <thead>
                <tr><th>Producto</th><th>Especificación</th><th>SKU</th><th style={{ textAlign: "right" }}>Precio</th><th></th></tr>
              </thead>
              <tbody>
                {PRECIOS.map((r) => (
                  <tr key={r.sku}>
                    <td style={{ fontWeight: 600 }}>{r.prod}</td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11 }}>{r.spec}</td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11, letterSpacing: "0.06em" }}>{r.sku}</td>
                    <td className="num">${r.price.toLocaleString("es-CL")}</td>
                    <td style={{ textAlign: "right" }}><a href="#reserva" className="btn-hueso" style={{ padding: "7px 12px", fontSize: 10 }}>Reservar</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="nota">Precios referenciales Santiago · DOT &gt; 2024 · ¿No está tu medida? Escríbenos: proponemos equivalente premium en 10 minutos. <span className="badge-rojo" style={{ marginLeft: 8 }}>Stock curado</span></div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Método NOCTUA</div>
          <h2 className="h2">Cita. Café. Torque.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Agendas por hora exacta</div>
              <div className="metodo-desc">Eliges medida y hora en la web. Te confirmamos por WhatsApp con orden de trabajo. Llegas y tu box ya está reservado — sin espera en galpón.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Montaje con luz rasante</div>
              <div className="metodo-desc">Protegemos pestaña diamantada, válvula nueva, balanceo 0g y registro fotográfico. Ves el proceso desde sala negra vidriada.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Sales con hoja firmada</div>
              <div className="metodo-desc">Alineación 3D con informe antes/después, torque con torquímetro y reapriete gratuito a los 100 km. Garantía escrita.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Galería bunker</div>
          <h2 className="h2">Oscuro, ordenado, sin ruido.</h2>
          <p className="lead">Showroom nocturno: neumático como pieza premium, no como bodega.</p>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 520 }}>
              <img src="media/still-noir.jpg" alt="Still de llanta diamantada sobre fondo oscuro, iluminación de estudio sin personas" loading="lazy" />
              <div className="gal-caption"><span>Still NOCTUA · D01 19” diamantada</span><span>4:5</span></div>
            </div>
            <div style={{ display: "grid", gap: 18 }}>
              <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 250, transitionDelay: ".12s" }}>
                <img src="media/detail-noir.jpg" alt="Detalle de válvula y grabado láser en llanta, luz rasante sin personas" loading="lazy" />
                <div className="gal-caption"><span>Detalle · válvula + grabado láser</span><span>1:1</span></div>
              </div>
              <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 250, transitionDelay: ".22s" }}>
                <img src="media/taller-noir.jpg" alt="Taller bunker nocturno vacío con luz cálida rasante, sin personas" loading="lazy" />
                <div className="gal-caption"><span>Bunker · luz rasante 4000K</span><span>16:9</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 6 acordeones */}
      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>FAQ</div>
          <h2 className="h2">Preguntas que cierran la venta.</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={`faq-item ${open ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}>
                    <span>{f.q}</span>
                    <span className="faq-icon">{open ? "—" : "+"}</span>
                  </button>
                  <div className="faq-a" aria-hidden={!open}>
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
          <div className="kicker" style={{ color: "var(--rojo-noir)" }}>Reserva bunker</div>
          <h2 className="h2">Agenda tu montaje sin espera.</h2>
          <p className="lead">Cuéntanos medida, modelo y hora ideal. Confirmamos stock y box en menos de 30 minutos hábiles.</p>
          <div className="reserva-box" style={{ marginTop: 24 }}>
            <div className="reserva-left">
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>Showroom Vitacura</div>
              <div className="tel">+56 9 8400 2211</div>
              <div style={{ color: "var(--gris)", fontSize: 13, lineHeight: 1.6 }}>Alonso de Córdova 3827 · Vitacura<br />L–V 09:00–19:00 · Sáb 10:00–14:00 con cita<br />Estacionamiento bunker interior</div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="tel:+56984002211" className="btn-hueso">Llamar ahora</a>
                <a href="https://wa.me/56984002211" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
              </div>
              <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12, borderLeft: "2px solid var(--rojo-noir)", paddingLeft: 12 }}>Si no hay tu medida, proponemos equivalente premium en 10 min. Sin “vuelva mañana”.</p>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={(e) => { e.preventDefault(); setFormOk(true); }} style={{ display: "grid", gap: 10 }}>
                  <input className="field" placeholder="Nombre y apellido" required />
                  <input className="field" placeholder="WhatsApp +56 9 ..." required />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <input className="field" placeholder="Medida ej. 225/45 R18" required />
                    <input className="field" placeholder="Modelo / año" />
                  </div>
                  <select className="field" defaultValue="">
                    <option value="" disabled>Servicio</option>
                    <option>Pack llanta + neumático</option>
                    <option>Solo neumáticos</option>
                    <option>Diamantado / rectificado</option>
                  </select>
                  <textarea className="field" placeholder="Hora ideal y comentarios" rows={3} />
                  <button type="submit" className="btn-hueso" style={{ justifyContent: "center", background: "var(--hueso)", color: "var(--tinta)" }}>Solicitar stock curado →</button>
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gris)", textAlign: "center" }}>Respuesta en &lt;30 min hábiles · Sin spam</span>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "18px 0" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", color: "var(--hueso)" }}>Solicitud enviada.</div>
                  <p style={{ color: "var(--gris)", lineHeight: 1.6, fontSize: 14, marginTop: 8 }}>Te confirmamos stock y hora por WhatsApp en minutos. Revisa tu teléfono — responde bunker, no bot.</p>
                  <button className="btn-ghost" style={{ marginTop: 14 }} onClick={() => setFormOk(false)}>Enviar otra</button>
                </div>
              )}
            </div>
          </div>

          <div className="footer" style={{ marginTop: 28 }}>
            <span>© 2026 NEUMA NOCTUA · Neumáticos Premium · Vitacura, Santiago</span>
            <span style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#inicio">Inicio</a>
              <a href="#catalogo">Catálogo</a>
              <a href="#reserva">Reserva</a>
              <span style={{ color: "var(--rojo-noir)" }}>Propuesta Órbita</span>
            </span>
          </div>
          <div style={{ marginTop: 10, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.08em", color: "var(--gris)", opacity: .7, textAlign: "center" }}>Fondo oscuro consistente en todas las secciones · Radios 0 · Contraste AA hueso sobre tinta · Acento rojo-noir &lt;5%</div>
        </div>
      </section>

      {/* sticky mobile */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 30, background: "rgba(14,17,19,0.96)", borderTop: "1px solid var(--linea)", padding: "10px 14px", display: scrolled ? "flex" : "none", justifyContent: "space-between", alignItems: "center", gap: 12 }} className="mobile-sticky">
        <span className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>¿Tu medida?</span>
        <a href="#reserva" className="btn-hueso" style={{ padding: "9px 14px", fontSize: 10 }}>Ver stock curado</a>
      </div>
    </>
  );
}
