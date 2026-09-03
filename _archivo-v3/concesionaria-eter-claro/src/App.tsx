import { useEffect, useRef, useState } from "react";

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "catalogo", label: "Stock" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Contacto" },
];

const CATALOGO = [
  { n: "01", title: "Citycar y hatch", meta: "Citycar · hatch · urbano", detalle: "desde $7.490.000 CLP · pie $1.498.000 + cuota $149.000 · año 2019–2021 / 35–60 mil km", extra: "150 puntos · VIN verificable · fotos sin filtro ayer" },
  { n: "02", title: "Sedán", meta: "Sedán · confort · familiar", detalle: "desde $9.900.000 CLP · pie $1.980.000 + cuota $198.000 · año 2020 / 40–70 mil km", extra: "Historial y prueba de ruta incluidos" },
  { n: "03", title: "SUV / Crossover", meta: "SUV · crossover · familiar grande", detalle: "desde $13.900.000 CLP · pie $2.780.000 + cuota $289.000 · año 2020–2021", extra: "El más pedido · transferencia 5 días" },
  { n: "04", title: "Camioneta", meta: "Camioneta · trabajo · doble cabina", detalle: "desde $16.500.000 CLP · pie $3.300.000 + cuota $339.000 · año 2021", extra: "Revisión carga y chasis incluida" },
  { n: "05", title: "Premium / alta gama", meta: "Premium · alemán · curado", detalle: "desde $24.900.000 CLP · pie $4.980.000 + cuota $498.000 · año 2022", extra: "Detailing y garantía extendida opcional" },
  { n: "06", title: "Consignación", meta: "Consignación · custodia · pago al instante", detalle: "Tasación $0 · auto asegurado bajo techo · pago al instante al vender", extra: "Resguardo Manquehue · sin comisión oculta" },
];

const PRECIOS = [
  { seg: "Citycar 2019", precio: 7490000, pie: 1498000, cuota: 149000, modelo: "hatch 2019 · 45.000 km" },
  { seg: "SUV 2020", precio: 13900000, pie: 2780000, cuota: 289000, modelo: "SUV 2020 · 58.000 km" },
  { seg: "Camioneta 2021", precio: 16500000, pie: 3300000, cuota: 339000, modelo: "Doble cabina 2021 · 62.000 km" },
  { seg: "Premium 2022", precio: 24900000, pie: 4980000, cuota: 498000, modelo: "Premium 2022 · 34.000 km" },
  { seg: "Consignación", precio: 0, pie: 0, cuota: 0, modelo: "tasación $0 · custodia incluida" },
];

const FAQS = [
  { q: "¿Cómo funciona la tasación online y cuánto demora realmente?", a: "Envías 6 fotos (4 exteriores, tablero y padrón) + patente por WhatsApp o formulario. Te respondemos en 15 minutos hábiles con valor y rango según estado. Si aceptas, agendas visita en showroom Las Condes. Sin compromiso y sin que te pidamos 'qué auto es' dos veces. +56 2 2840 3315." },
  { q: "¿El precio publicado incluye transferencia y qué cubre la garantía de usados?", a: "El precio es con IVA y sin 'desde' engañoso. La transferencia (5 días hábiles, padrón a tu nombre) se detalla aparte antes de firmar. Garantía legal usados: motor y caja 3 meses o 5.000 km, con informe 150 puntos en mano. Lo que tiene el auto —detalle de pintura, neuma— te lo decimos antes de venir, no después de pagar." },
  { q: "¿Reciben mi auto en parte de pago y cómo valoran el retoma?", a: "Sí, retoma con tasación 15 min. Valoramos por estado real, km verificable y mercado — no por 'anual'. Te mostramos comparables publicados. Si el retoma supera el pie, la diferencia te la abonamos. Puedes consignar si prefieres esperar mejor precio, con auto asegurado bajo techo." },
  { q: "¿Qué revisan en los 150 puntos y puedo ver el informe antes?", a: "VIN, historial, chasis, motor, caja, electrónica, prueba de ruta, neumáticos, frenos y detalle de pintura. El informe es PDF de 4 páginas con fotos. Te lo enviamos por WhatsApp antes de la visita — si algo no calza, lo ves antes de firmar. Stock fotografiado ayer en showroom." },
  { q: "¿Cómo funciona el crédito y qué pasa si es rechazado?", a: "Simulamos pie + cuota real (pie mínimo 20%). Te mostramos bancario vs automotriz con CAE antes de firmar — nada de 'cuota mágica'. Si es rechazado, no pierdes la reserva y te proponemos alternativa o consignación. La cuota simulada es a 48 meses, referencial." },
  { q: "¿En cuántos días tengo el padrón y puedo agendar test drive sin compromiso?", a: "Padrón a tu nombre en 5 días hábiles — te avisamos por WhatsApp cuando llega. Test drive con hora (Lun–Vie 9:00–19:00, Sáb 10:00–17:00), sin vendedor encima y sin presión para firmar. Si el auto se vendió después de tu reserva, te llamamos en 2 horas y devolvemos la reserva." },
];

function useCountUp(active: boolean, target: number) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    let raf = 0;
    const t0 = performance.now(); const dur = 1200;
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
  const [formOk, setFormOk] = useState(false);
  const lastY = useRef(0);
  const base = import.meta.env.BASE_URL;
  const [heroReady, setHeroReady] = useState(false);

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

  const nA = useCountUp(cifrasIn, 14);
  const nB = useCountUp(cifrasIn, 6200);
  const nC = useCountUp(cifrasIn, 98);
  const nD = useCountUp(cifrasIn, 2800);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="ÉTER — inicio">ÉTER<span>CONCESIONARIA</span></a>
          <div className="nav-links">
            {NAV.map(l => <a key={l.id} href={`#${l.id}`} className="under">{l.label}</a>)}
            <a href="#catalogo" className="btn-tinta">Ver stock</a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav(v => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--papel)", borderBottom: "1px solid var(--linea)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV.map(l => <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris-oscuro)" }}>{l.label}</a>)}
            <a href="#catalogo" onClick={() => setMobileNav(false)} className="btn-tinta" style={{ justifyContent: "center" }}>Ver stock verificado</a>
          </div>
        )}
      </nav>

      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Concesionaria · Las Condes · Usados verificados</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>El auto que ves</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>es el auto que</span></span>
              <span className="line" style={{ transitionDelay: "0.24s" }}><span style={{ transitionDelay: "0.29s" }}>retiras.</span></span>
            </h1>
            <p className="hero-sub">Usados y seminuevos verificados con inspección 150 puntos, precio publicado con IVA, financiamiento explicado en pie + cuota real y transferencia en 5 días. Tasación online en 15 minutos — sin letra chica ni auto maquillado.</p>
            <div className="hero-ctas">
              <a href="#catalogo" className="btn-tinta">Ver stock verificado →</a>
              <a href="#precios" className="link-rojo">Ver valores publicados</a>
            </div>
            <div className="hero-filtro" aria-label="Filtro de stock">
              <div><div className="filtro-label">Marca</div><div className="filtro-val">Todas</div></div>
              <div><div className="filtro-label">Modelo</div><div className="filtro-val">Todos</div></div>
              <div><div className="filtro-label">Año</div><div className="filtro-val">2019 — 2023</div></div>
              <div><div className="filtro-label">Precio CLP</div><div className="filtro-val">$7.490.000 — $24.900.000</div></div>
            </div>
            <p style={{ marginTop: 12, color: "var(--gris-oscuro)", fontSize: 11, lineHeight: 1.6 }}>Stock fotografiado ayer en showroom. Si un auto se vendió después de tu reserva, te llamamos en 2 horas y te devolvemos la reserva — no te hacemos venir por nada.</p>
          </div>
          <div className="hero-right">
            <img src={`${base}media/showroom.jpg`} alt="Interior de showroom vacío con 3 autos alineados sobre piso pulido gris claro, muro blanco con filete horizontal, luz natural lateral" loading="eager" />
            <div className="hero-caption"><span>ÉTER — stock fotografiado ayer · 150 puntos revisados</span><span>7/12</span></div>
          </div>
        </div>
        <div className="hero-band">Precio publicado · Stock real ayer · Transferencia 5 días · Pie + cuota sin letra chica</div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia, no promesas</div>
          <h2 className="h2" style={{ maxWidth: 620 }}>Un precio que se factura tal cual.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            <div className="cifra"><div className="cifra-num">+{nA} años</div><div className="cifra-label">en Las Condes — compra y venta directa</div></div>
            <div className="cifra"><div className="cifra-num">+{nB.toLocaleString("es-CL")}</div><div className="cifra-label">autos entregados con informe 150 puntos</div></div>
            <div className="cifra"><div className="cifra-num">{nC}%</div><div className="cifra-label">transferencias en 5 días hábiles</div></div>
            <div className="cifra"><div className="cifra-num">{nD.toLocaleString("es-CL")}</div><div className="cifra-label">tasaciones al año · respuesta 15 min</div></div>
          </div>
          <p style={{ marginTop: 14, color: "var(--gris-oscuro)", fontSize: 12 }}>Sin “desde” engañoso. El precio que ves es el que facturas.</p>
        </div>
      </section>
      <div id="evidencia" aria-hidden style={{ height: 0 }} />

      <section id="catalogo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Stock editorial</div>
          <h2 className="h2">Elige por uso. Sin jerga importadora.</h2>
          <p className="lead">Índice 01–06 — toca para ver pie, cuota y año/km referencia. Fotos sin filtro, VIN verificable.</p>
          <div style={{ marginTop: 24, border: "1px solid var(--linea)", background: "var(--papel)" }}>
            {CATALOGO.map((it, idx) => {
              const open = openCat === idx;
              return (
                <div key={it.n} className="cat-row" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenCat(open ? null : idx)} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenCat(open ? null : idx); } }}>
                  <div className="cat-num">{it.n}</div>
                  <div>
                    <div className="cat-title">{it.title}</div>
                    <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-oscuro)", marginTop: 4 }}>{it.meta}</div>
                  </div>
                  <div className="cat-meta" style={{ maxWidth: 340 }}>{it.detalle}</div>
                  <div style={{ color: "var(--rojo)", fontSize: 18, textAlign: "right" }}>{open ? "—" : "+"}</div>
                  {open && (
                    <div className="cat-panel">
                      <div><div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-oscuro)", lineHeight: 1.6 }}>{it.detalle} · <span style={{ color: "var(--tinta)", fontWeight: 600 }}>{it.extra}</span></div></div>
                      <a href="#reserva" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 10 }} onClick={e => e.stopPropagation()}>Agendar visita</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="servicios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Servicios</div>
          <h2 className="h2">Compra, crédito y consignación — sin letra chica.</h2>
          <div className="serv-grid" style={{ marginTop: 24 }}>
            <div className="serv-col"><div className="serv-num">01</div><div className="serv-title">Compra verificada 150 puntos</div><div className="serv-desc">VIN, historial, prueba de ruta, chasis y detalle de pintura. Informe PDF de 4 páginas con fotos — te lo enviamos antes de venir.</div></div>
            <div className="serv-col"><div className="serv-num">02</div><div className="serv-title">Financiamiento pie + cuota real</div><div className="serv-desc">Bancario vs automotriz explicado en 3 números. CAE informado antes de firmar. Pie mínimo 20% — cuota simulada a 48 meses, referencial.</div></div>
            <div className="serv-col"><div className="serv-num">03</div><div className="serv-title">Consignación sin comisión oculta</div><div className="serv-desc">Tu auto bajo techo, asegurado y con resguardo Manquehue. Pago al instante cuando se vende. Tasación $0.</div></div>
          </div>
          <div style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-oscuro)" }}>
            <span style={{ border: "1px solid var(--linea)", padding: "6px 10px", background: "#fff" }}>150 puntos revisados</span>
            <span style={{ border: "1px solid var(--linea)", padding: "6px 10px", background: "#fff" }}>Precio publicado</span>
            <span style={{ border: "1px solid var(--linea)", padding: "6px 10px", background: "#fff" }}>Transferencia 5 días</span>
            <span style={{ border: "1px solid var(--linea)", padding: "6px 10px", background: "#fff" }}>Pie + cuota real</span>
          </div>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Valores publicados, sin letra chica</div>
          <h2 className="h2">Lo que ves, facturas.</h2>
          <p className="lead">Precios CLP con IVA. Simulaciones referenciales — el total se confirma antes de pagar, nunca después.</p>
          <div className="precios-layout">
            <div style={{ overflowX: "auto" }}>
              <table className="tabla">
                <thead><tr><th>Segmento</th><th>Modelo / año / km</th><th style={{ textAlign: "right" }}>Precio</th><th style={{ textAlign: "right" }}>Pie / Cuota 48m</th><th>Transferencia</th><th></th></tr></thead>
                <tbody>
                  {PRECIOS.map(r => (
                    <tr key={r.seg}>
                      <td style={{ fontWeight: 600 }}>{r.seg}</td>
                      <td style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-oscuro)" }}>{r.modelo}</td>
                      <td className="num">{r.precio === 0 ? "—" : `$${r.precio.toLocaleString("es-CL")}`}</td>
                      <td className="num" style={{ fontSize: ".85rem" }}>{r.precio === 0 ? "—" : `$${r.pie.toLocaleString("es-CL")} / $${r.cuota.toLocaleString("es-CL")}`}</td>
                      <td style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-oscuro)" }}>{r.seg === "Consignación" ? "—" : "5 días hábiles"}</td>
                      <td style={{ textAlign: "right" }}><a href="#reserva" className="btn-tinta" style={{ padding: "7px 12px", fontSize: 10 }}>Reservar</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="nota" style={{ marginTop: 14 }}>Pie mínimo 20% referencial. Cuota simulada a 48 meses, CAE informado antes de firmar. Transferencia 5 días hábiles con padrón a tu nombre. Precios actualizados cada lunes. El total se confirma antes de pagar, nunca después.</div>
            </div>
            <div className="side-box">
              <h4>Despacho y test drive</h4>
              <p>Despacho RM + comunas aledañas. Test drive con hora agendada — sin vendedor encima y sin presión para firmar. Showroom Las Condes.</p>
              <div style={{ marginTop: 14, borderTop: "1px solid var(--linea)", paddingTop: 12, display: "grid", gap: 6, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-oscuro)" }}>
                <span>◆ Lun–Vie 9:00–19:00 · Sáb 10:00–17:00</span>
                <span>◆ Test drive con hora · informe en mano</span>
                <span>◆ Financiamiento pie + cuota real</span>
              </div>
              <a href="#reserva" className="btn-ghost" style={{ marginTop: 14, display: "inline-flex" }}>Tasar mi auto en 15 min</a>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 className="h2">Tasas online. Vienes informado.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col"><div className="metodo-num">01</div><div className="metodo-title">Tasas online 15 min</div><div className="metodo-desc">Envías fotos + patente por WhatsApp. Te respondemos con valor y rango según estado. Sin “¿qué auto es?” por segunda vez.</div></div>
            <div className="metodo-col"><div className="metodo-num">02</div><div className="metodo-title">Agendas visita y test drive</div><div className="metodo-desc">Vienes con informe 150 puntos en mano. Manejas tranquilo, revisas VIN y fotos sin filtro de ayer.</div></div>
            <div className="metodo-col"><div className="metodo-num">03</div><div className="metodo-title">Firmas y retiras con padrón</div><div className="metodo-desc">O consignas con custodia asegurada y pago al instante cuando se vende. Padrón en 5 días, sin poder notarial eterno.</div></div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Galería</div>
          <h2 className="h2">Papeles y detalle.</h2>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className={`gal-card ken reveal ${galIn ? "in" : ""}`} style={{ height: 520 }}>
              <img src={`${base}media/still.jpg`} alt="Bodegón sobre papel hueso claro con llave tipo navaja, padrón genérico sin marca y lápiz técnico, luz natural" loading="lazy" />
              <div className="gal-caption"><span>Padrón a tu nombre en 5 días · VIN verificable</span><span>4:5</span></div>
            </div>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 520, transitionDelay: "0.12s" }}>
              <img src={`${base}media/detail.jpg`} alt="Macro de costura de cuero y aro diamantado con luz rasante suave, detalle automotriz premium" loading="lazy" />
              <div className="gal-caption"><span>Detalle · cuero y filete cromado · luz rasante</span><span>1:1</span></div>
            </div>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--linea)", background: "var(--papel-2)", padding: "12px 14px", display: "flex", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-oscuro)" }}>
            <span>Filete 1px · revelado cortina 700ms · Ken Burns 36s solo en still</span><span>ÉTER claro</span>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--linea)", overflow: "hidden" }}>
            <img src={`${base}media/pasillo.jpg`} alt="Pasillo de showroom luminoso vacío con sombra suave, perspectiva serena" loading="lazy" style={{ width: "100%", height: 320, objectFit: "cover" }} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-oscuro)", borderTop: "1px solid var(--linea)", background: "rgba(248,245,239,0.92)" }}><span>Pasillo showroom · luz mañana · vacío</span><span>16:9</span></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Todo claro antes de venir.</h2>
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
          <div className="kicker">Reserva tu visita</div>
          <div className="reserva-box" style={{ marginTop: 18 }}>
            <div className="reserva-left">
              <h2 className="h2" style={{ fontSize: "2rem" }}>Ven a verlo.<br />Si te gusta, te lo llevas con papeles al día.</h2>
              <div className="tel">+56 2 2840 3315</div>
              <div style={{ color: "var(--gris-oscuro)", fontSize: 13, lineHeight: 1.6 }}>hola@eterconcesionaria.cl<br />Las Condes · Stock en showroom + despacho RM<br />Lun–Vie 9:00–19:00 · Sáb 10:00–17:00 · Test drive con hora agendada</div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="tel:+56228403315" className="btn-tinta">Llamar showroom</a>
                <a href="https://wa.me/56228403315" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
              </div>
              <p style={{ marginTop: 12, fontSize: 11, color: "var(--gris-oscuro)", lineHeight: 1.5 }}>Responden vendedores, no bots. Si no contestamos, devolvemos el llamado en 2 horas hábiles.</p>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={e => { e.preventDefault(); setFormOk(true); }} style={{ display: "grid", gap: 10 }}>
                  <input className="field" placeholder="Nombre" required aria-label="Nombre" />
                  <input className="field" placeholder="WhatsApp / Email" required aria-label="Contacto" />
                  <select className="field" aria-label="Interés" defaultValue="">
                    <option value="" disabled>¿Qué buscas?</option>
                    <option>Ver stock verificado</option>
                    <option>Tasar mi auto en 15 min</option>
                    <option>Consignación</option>
                  </select>
                  <input className="field" placeholder="Marca / modelo / año" aria-label="Auto" />
                  <button type="submit" className="btn-tinta" style={{ justifyContent: "center" }}>Solicitar tasación</button>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--gris-oscuro)", lineHeight: 1.5 }}>Tasación 15 min · informe 150 puntos antes de venir · padrón 5 días.</p>
                </form>
              ) : (
                <div style={{ border: "1px solid var(--rojo)", background: "var(--papel)", padding: 18 }}>
                  <div style={{ fontWeight: 600, color: "var(--tinta)" }}>Solicitud recibida — ÉTER</div>
                  <p style={{ color: "var(--gris-oscuro)", lineHeight: 1.6, fontSize: 13, margin: "8px 0 0" }}>Te contacta un vendedor esta mañana para confirmar tasación y agendar visita con informe en mano.</p>
                  <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => setFormOk(false)}>Enviar otra</button>
                </div>
              )}
              <div style={{ borderTop: "1px solid var(--linea)", paddingTop: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris-oscuro)" }}>150 puntos · Precio publicado · Transferencia 5 días</div>
            </div>
          </div>
          <footer className="footer" style={{ marginTop: 28 }}>
            <span>© {new Date().getFullYear()} ÉTER SpA · Las Condes · SII · Boleta/factura</span>
            <span>Precio publicado con IVA · Transferencia 5 días · Hecho con orden</span>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} role="complementary" aria-label="Acción rápida">
        <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tinta)" }}>¿Tasas hoy?</span>
        <a href="#reserva" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 11 }}>Tasar</a>
      </div>
    </>
  );
}
