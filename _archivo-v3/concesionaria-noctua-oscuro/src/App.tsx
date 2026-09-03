import { useEffect, useRef, useState } from "react";

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "filosofia", label: "Filosofía" },
  { id: "cifras", label: "Cifras" },
  { id: "catalogo", label: "Stock" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Contacto" },
];

const CATALOGO = [
  { n: "01", title: "Premium alemán", detalle: "desde $22.900.000 CLP · pie $4.580.000 + cuota $459.000 · sedán 2021 · 38.000 km · 150 puntos + detailing", extra: "Boutique La Dehesa · custodia incluida" },
  { n: "02", title: "SUV alta gama", detalle: "desde $32.500.000 CLP · pie $6.500.000 + cuota $629.000 · SUV 2022 · 28.000 km", extra: "Garantía extendida · padrón 5 días" },
  { n: "03", title: "Deportivo y coupé", detalle: "desde $28.900.000 CLP · pie $5.780.000 + cuota $559.000 · coupé 2020", extra: "Informe 150 puntos + VIN verificable" },
  { n: "04", title: "Eléctrico / híbrido", detalle: "desde $34.900.000 CLP · pie $6.980.000 + cuota $678.000 · eléctrico 2023", extra: "Batería verificada · cargador incluido" },
  { n: "05", title: "Consignación boutique", detalle: "Custodia bajo techo con seguro · pago al instante al vender · tasación $0", extra: "Seguro mientras se vende · sin letra chica" },
  { n: "06", title: "Detailing y garantía extendida", detalle: "Detailing premium + garantía hasta 12 meses incluidos en premium", extra: "Entrega con detailing · sin neuma a media vida" },
];

const PRECIOS = [
  { seg: "Premium sedán 2021", precio: 22900000, pie: 4580000, cuota: 459000, modelo: "Premium 2021 · 38.000 km" },
  { seg: "SUV premium 2022", precio: 32500000, pie: 6500000, cuota: 629000, modelo: "SUV 2022 · 28.000 km" },
  { seg: "Deportivo 2020", precio: 28900000, pie: 5780000, cuota: 559000, modelo: "Coupé 2020 · 31.000 km" },
  { seg: "Eléctrico 2023", precio: 34900000, pie: 6980000, cuota: 678000, modelo: "Eléctrico 2023 · 19.000 km" },
  { seg: "Consignación custodia", precio: 0, pie: 0, cuota: 0, modelo: "$0 + seguro incluido" },
];

const FAQS = [
  { q: "¿Cómo tasan mi auto y cuánto demora la tasación online real?", a: "Fotos + patente + VIN por WhatsApp. Respuesta en 15 minutos hábiles con valor y rango. Si aceptas, agendas visita boutique Lo Barnechea con informe en mano. Sin 'cuota mágica' después. +56 2 2840 3316." },
  { q: "¿Qué cubre la custodia con seguro mientras mi auto está consignado?", a: "Bajo techo, con seguro a todo evento mientras está en vitrina. Detailing antes de mostrarse. Pago al instante cuando se cierra la venta — transferencia el mismo día. Si no se vende en plazo acordado, te avisamos y retiras sin costo." },
  { q: "¿El precio publicado incluye transferencia, detailing y garantía extendida?", a: "Precio con IVA — sin 'desde' engañoso. Detailing y revisión 150 puntos incluidos en premium. Transferencia 5 días padrón a tu nombre se detalla antes de firmar. Garantía extendida según plan (hasta 12 meses) incluida en alta gama." },
  { q: "¿Qué pasa si el crédito premium es rechazado y cuánto es el pie real?", a: "Pie 20–30% referencial según banco. Te mostramos CAE antes de firmar — nada en letra chica. Si es rechazado, no pierdes la reserva y buscamos alternativa bancaria o consignación. Cuota a 48 meses referencial." },
  { q: "¿En cuántos días tengo el padrón a mi nombre y qué informe me entregan?", a: "Padrón en 5 días hábiles. Informe 150 puntos de 4 páginas con fotos, VIN verificable y prueba de ruta. Te lo enviamos antes de firmar — si algo no calza, lo ves antes de pagar. Fotos nocturnas sin filtro." },
  { q: "¿Puedo traer mi auto a pedido o encargo premium y cuánto demora?", a: "Sí, encargo premium a pedido: buscas modelo/año/equipamiento y lo curamos con informe 150 puntos. Plazo 15–30 días según stock y traslado. Te avisamos en 2 horas si el auto deja de estar disponible — no te hacemos venir a ver aire." },
];

function useCountUp(active: boolean, target: number) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    let raf = 0; const t0 = performance.now(); const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(e * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return v;
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
  const [heroReady, setHeroReady] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const lastY = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const base = import.meta.env.BASE_URL;
  const curPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 80); return () => clearTimeout(t); }, []);

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

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => { targetPos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      curPos.current.x += (targetPos.current.x - curPos.current.x) * 0.18;
      curPos.current.y += (targetPos.current.y - curPos.current.y) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${curPos.current.x}px, ${curPos.current.y}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button")) {
        if (cursorRef.current) { cursorRef.current.style.width = "18px"; cursorRef.current.style.height = "18px"; cursorRef.current.style.opacity = "0.5"; }
      } else {
        if (cursorRef.current) { cursorRef.current.style.width = "6px"; cursorRef.current.style.height = "6px"; cursorRef.current.style.opacity = "0.9"; }
      }
    };
    window.addEventListener("mouseover", onOver);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseover", onOver); cancelAnimationFrame(raf); };
  }, []);

  const nA = useCountUp(cifrasIn, 14);
  const nB = useCountUp(cifrasIn, 4800);
  const nC = useCountUp(cifrasIn, 99);
  const nD = useCountUp(cifrasIn, 1900);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <div ref={cursorRef} className="cursor" aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="NOCTUA — inicio">NOCTUA<span>CONCESIONARIA</span></a>
          <div className="nav-links">
            {NAV.map(l => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
            <a href="#catalogo" className="btn-champagne">Ver stock</a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav(v => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--fondo)", borderBottom: "1px solid var(--filete)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV.map(l => <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>{l.label}</a>)}
            <a href="#catalogo" onClick={() => setMobileNav(false)} className="btn-champagne" style={{ justifyContent: "center" }}>Ver stock curado</a>
          </div>
        )}
      </nav>

      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Concesionaria premium · Lo Barnechea · Stock curado</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>Alta gama</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>curada.</span></span>
              <span className="line" style={{ transitionDelay: "0.24s" }}><span style={{ transitionDelay: "0.29s" }}>Papeles sin</span></span>
              <span className="line" style={{ transitionDelay: "0.36s" }}><span style={{ transitionDelay: "0.41s" }}>drama.</span></span>
            </h1>
            <p className="hero-sub">Seminuevos premium verificados con informe 150 puntos, detailing y garantía extendida. Consignación boutique con custodia, seguro y pago al instante. Financiamiento premium explicado en pie + cuota real — transferencia en 5 días.</p>
            <div className="hero-ctas">
              <a href="#catalogo" className="btn-champagne">Ver stock curado →</a>
              <a href="#precios" className="link-champagne">Ver valores curados</a>
            </div>
            <div style={{ marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
              <span style={{ border: "1px solid var(--filete)", padding: "6px 10px" }}>Boutique La Dehesa</span>
              <span style={{ border: "1px solid var(--filete)", padding: "6px 10px" }}>Custodia con seguro</span>
              <span style={{ border: "1px solid var(--filete)", padding: "6px 10px" }}>Detailing incluido</span>
              <span style={{ border: "1px solid var(--filete)", padding: "6px 10px" }}>Padrón 5 días</span>
            </div>
          </div>
          <div className="hero-right">
            <img src={`${base}media/cava.jpg`} alt="Showroom nocturno vacío con 2 autos premium alineados sobre piso oscuro pulido, luz rasante cálida oculta, muro tinta mate" loading="eager" />
            <div className="hero-caption"><span>NOCTUA — cava nocturna · stock curado sin filtro</span><span>7/12</span></div>
          </div>
        </div>
      </section>

      <section id="filosofia" className="section-pad">
        <div className="wrap">
          <div className="kicker">Filosofía boutique</div>
          <div className="filo-grid" style={{ marginTop: 18 }}>
            <div>
              <div className="filo-quote">Vender premium<br />es custodiar.</div>
              <p className="filo-text">No vendemos lo que no custodiamos. Cada auto duerme bajo techo, asegurado y con detailing antes de mostrarse. El precio que ves es el publicado con IVA. Si un auto se vendió después de tu reserva, te llamamos en 2 horas — no te hacemos venir a ver aire.</p>
              <p className="filo-text" style={{ opacity: 0.9 }}>Cada entrega va con informe 150 puntos y padrón en 5 días. Esa es la diferencia entre una feria y tu boutique. La discreción del cliente premium es el argumento.</p>
            </div>
            <div style={{ border: "1px solid var(--filete)", background: "var(--fondo)", padding: 20, display: "grid", gap: 10 }}>
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--champagne)" }}>Compromiso Noctua</div>
              <div style={{ fontFamily: "Cormorant Garamond", serif, fontSize: "1.15rem", color: "var(--hueso)", lineHeight: 1.35 }}>Si algo no calza en el informe 150 puntos, te lo mostramos antes de que firmes — no después de que pagaste.</div>
              <div style={{ fontFamily: "IBM Plex Mono", monospace, fontSize: 11, color: "var(--gris)", lineHeight: 1.6, borderTop: "1px solid var(--filete)", paddingTop: 10, marginTop: 4 }}>Cada auto con fotos nocturnas sin filtro + VIN verificable. Si se vendió después de tu visita, te llamamos en 2 horas.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia, no humo</div>
          <h2 className="h2" style={{ maxWidth: 620 }}>Curado que se puede verificar.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            <div className="cifra"><div className="cifra-num">+{nA} años</div><div className="cifra-label">boutique premium Lo Barnechea</div></div>
            <div className="cifra"><div className="cifra-num">+{nB.toLocaleString("es-CL")}</div><div className="cifra-label">premium entregados con custody</div></div>
            <div className="cifra"><div className="cifra-num">{nC}%</div><div className="cifra-label">custodias sin detalle reportado</div></div>
            <div className="cifra"><div className="cifra-num">{nD.toLocaleString("es-CL")}</div><div className="cifra-label">clientes recurrentes · recompra</div></div>
          </div>
          <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12 }}>Sin “desde” engañoso. El precio publicado es el facturado.</p>
        </div>
      </section>
      <div id="evidencia" aria-hidden style={{ height: 0 }} />

      <section id="catalogo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Stock curado</div>
          <h2 className="h2">Alta gama sin feria.</h2>
          <p className="lead">06 líneas boutique — hover revela pie + cuota real. En móvil, toca para abrir.</p>
          <div className="cat-list" style={{ marginTop: 24 }}>
            {CATALOGO.map((it, idx) => {
              const open = openCat === idx;
              return (
                <div key={it.n} className="cat-row" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenCat(open ? null : idx)} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenCat(open ? null : idx); } }}>
                  <div className="cat-num">{it.n}</div>
                  <div>
                    <div className="cat-title">{it.title}</div>
                    <div className="cat-desc">{it.detalle.slice(0, 72)}…</div>
                  </div>
                  <div style={{ color: "var(--champagne)", fontSize: 18, textAlign: "right" }}>{open ? "—" : "+"}</div>
                  {open && (
                    <div className="cat-panel">
                      <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)", lineHeight: 1.6 }}>{it.detalle} · <span style={{ color: "var(--hueso)", fontWeight: 600 }}>{it.extra}</span></div>
                      <a href="#reserva" className="btn-champagne" style={{ padding: "8px 14px", fontSize: 10 }} onClick={e => e.stopPropagation()}>Consignar / Ver</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Valores curados, sin sorpresas</div>
          <h2 className="h2">Precios de boutique, claros.</h2>
          <p className="lead">CLP con IVA. Simulaciones a 48 meses — el total se confirma antes de pagar.</p>
          <div className="precios-layout">
            <div style={{ overflowX: "auto" }}>
              <table className="tabla">
                <thead><tr><th>Segmento</th><th>Modelo / año / km</th><th style={{ textAlign: "right" }}>Precio</th><th style={{ textAlign: "right" }}>Pie / Cuota 48m</th><th></th></tr></thead>
                <tbody>
                  {PRECIOS.map(r => (
                    <tr key={r.seg}>
                      <td style={{ fontWeight: 600 }}>{r.seg}</td>
                      <td style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)" }}>{r.modelo}</td>
                      <td className="num">{r.precio === 0 ? "—" : `$${r.precio.toLocaleString("es-CL")}`}</td>
                      <td className="num" style={{ fontSize: ".85rem" }}>{r.precio === 0 ? "—" : `$${r.pie.toLocaleString("es-CL")} / $${r.cuota.toLocaleString("es-CL")}`}</td>
                      <td style={{ textAlign: "right" }}><a href="#reserva" className="btn-champagne" style={{ padding: "7px 12px", fontSize: 10 }}>Reservar</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="nota" style={{ marginTop: 14 }}>Pie 20–30% referencial. Cuota a 48 meses, CAE informado antes de firmar. Transferencia 5 días padrón a tu nombre. Detailing y revisión 150 puntos incluidos. El total se confirma antes de pagar. Factura el mismo día.</div>
            </div>
            <div className="side-box">
              <h4>Test drive por comuna</h4>
              <p>Ventana RM 10:00–18:00 con hora agendada. Showroom Lo Barnechea — visita boutique, no feria.</p>
              <div style={{ marginTop: 14, borderTop: "1px solid var(--filete)", paddingTop: 12, display: "grid", gap: 6, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)" }}>
                <span>◆ Lun–Vie 9:30–19:00 · Sáb 10:30–17:00</span>
                <span>◆ Test drive y detailing con hora</span>
                <span>◆ Custodia con seguro incluida</span>
              </div>
              <a href="#reserva" className="btn-ghost" style={{ marginTop: 14, display: "inline-flex" }}>Consignar mi auto</a>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método boutique</div>
          <h2 className="h2">Tasas online. Vienes informado.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col"><div className="metodo-num">01</div><div className="metodo-title">Tasas online 15 min</div><div className="metodo-desc">Fotos + patente + VIN. Te respondemos con valor y rango según estado real.</div></div>
            <div className="metodo-col"><div className="metodo-num">02</div><div className="metodo-title">Visitas boutique con informe en mano</div><div className="metodo-desc">Test drive con hora, informe 150 puntos impreso y VIN verificable.</div></div>
            <div className="metodo-col"><div className="metodo-num">03</div><div className="metodo-title">Firmas y retiras con padrón</div><div className="metodo-desc">O consignas con custodia asegurada y pago al instante cuando se vende.</div></div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Galería</div>
          <h2 className="h2">Custodia y textura.</h2>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className={`gal-card ken reveal ${galIn ? "in" : ""}`} style={{ height: 520 }}>
              <img src={`${base}media/still.jpg`} alt="Bodegón chiaroscuro con llave premium, padrón oscuro sin marca y lápiz metálico sobre piedra oscura" loading="lazy" />
              <div className="gal-caption"><span>Custodia bajo techo · padrón 5 días · VIN verificable</span><span>4:5</span></div>
            </div>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 520, transitionDelay: "0.12s" }}>
              <img src={`${base}media/texture.jpg`} alt="Macro de cuero perforado y aro diamantado con luz rasante cálida, textura premium" loading="lazy" />
              <div className="gal-caption"><span>Textura · cuero perforado · luz rasante cálida</span><span>1:1</span></div>
            </div>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--filete)", background: "var(--superficie)", padding: "12px 14px", display: "flex", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
            <span>Filete 1px · revelado cortina 700ms · Ken Burns 36s solo en still</span><span>NOCTUA oscuro</span>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--filete)", overflow: "hidden" }}>
            <img src={`${base}media/pasillo.jpg`} alt="Pasillo de showroom nocturno simétrico con focos cálidos empotrados, vacío y sereno" loading="lazy" style={{ width: "100%", height: 320, objectFit: "cover" }} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)", borderTop: "1px solid var(--filete)", background: "rgba(14,17,19,0.88)" }}><span>Pasillo nocturno · focos cálidos · vacío</span><span>16:9</span></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Todo claro antes de firmar.</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={`faq-item ${open ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}>
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden>{open ? "×" : "+"}</span>
                  </button>
                  <div className="faq-a"><div className="faq-a-inner"><p>{f.a}</p></div></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reserva" className="section-pad">
        <div className="wrap">
          <div className="kicker">Reserva boutique</div>
          <div className="reserva-box" style={{ marginTop: 18 }}>
            <div className="reserva-left">
              <h2 className="h2" style={{ fontSize: "2rem" }}>Que tu próximo auto<br />no sea una lotería.</h2>
              <div className="tel">+56 2 2840 3316</div>
              <div style={{ color: "var(--gris)", fontSize: 13, lineHeight: 1.6 }}>hola@noctuaconcesionaria.cl<br />Lo Barnechea · Showroom con hora agendada<br />Lun–Vie 9:30–19:00 · Sáb 10:30–17:00 · Test drive y detailing con hora</div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="tel:+56228403316" className="btn-champagne">Llamar boutique</a>
                <a href="https://wa.me/56228403316" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
              </div>
              <p style={{ marginTop: 12, fontSize: 11, color: "var(--gris)", lineHeight: 1.5 }}>Responden curadores, no bots. Si no contestamos, devolvemos el llamado el mismo día.</p>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={e => { e.preventDefault(); setFormOk(true); }} style={{ display: "grid", gap: 10 }}>
                  <input className="field" placeholder="Nombre" required aria-label="Nombre" />
                  <input className="field" placeholder="WhatsApp / Email" required aria-label="Contacto" />
                  <select className="field" aria-label="Interés" defaultValue="">
                    <option value="" disabled>¿Qué buscas?</option>
                    <option>Ver stock curado</option>
                    <option>Consignar mi auto</option>
                    <option>Encargo premium a pedido</option>
                  </select>
                  <input className="field" placeholder="Modelo / año / presupuesto" aria-label="Modelo" />
                  <button type="submit" className="btn-champagne" style={{ justifyContent: "center" }}>Solicitar visita boutique</button>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--gris)", lineHeight: 1.5 }}>Custodia con seguro · detailing incluido · padrón 5 días.</p>
                </form>
              ) : (
                <div style={{ border: "1px solid var(--champagne)", background: "var(--fondo)", padding: 18 }}>
                  <div style={{ fontWeight: 600, color: "var(--hueso)" }}>Solicitud recibida — NOCTUA</div>
                  <p style={{ color: "var(--gris)", lineHeight: 1.6, fontSize: 13, margin: "8px 0 0" }}>Te contacta un curador hoy para confirmar visita boutique con informe 150 puntos en mano.</p>
                  <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => setFormOk(false)}>Enviar otra</button>
                </div>
              )}
              <div style={{ borderTop: "1px solid var(--filete)", paddingTop: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>Custodia con seguro · Detailing incluido · Padrón 5 días</div>
            </div>
          </div>
          <footer className="footer" style={{ marginTop: 28 }}>
            <span>© {new Date().getFullYear()} NOCTUA — Concesionaria · Lo Barnechea</span>
            <span>Precio curado con IVA · Custodia boutique · Hecho con precisión</span>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} role="complementary" aria-label="Acción rápida">
        <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--hueso)" }}>¿Consignas hoy?</span>
        <a href="#reserva" className="btn-champagne" style={{ padding: "8px 14px", fontSize: 11 }}>Consignar</a>
      </div>
    </>
  );
}
