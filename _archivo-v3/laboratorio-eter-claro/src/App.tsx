import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "confianza", label: "Confianza" },
  { id: "examenes", label: "Exámenes" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
];

const EXAMENES = [
  { n: "01", title: "Hemograma y coagulación", prep: "Ayuno 8 h · agua sí · remedios con indicación", dur: "5–8 min", para: "Control general, cirugías, anticoagulados", price: "desde $12.900" },
  { n: "02", title: "Perfil bioquímico / lipídico", prep: "Ayuno 12 h · sin alcohol 24 h", dur: "5–8 min", para: "Colesterol, glicemia, función hepática/renal", price: "desde $18.500" },
  { n: "03", title: "Orina y cultivos", prep: "Primera orina mañana · frasco estéril", dur: "5 min", para: "Infección urinaria, control renal, cultivos", price: "desde $9.700" },
  { n: "04", title: "Hormonas y tiroides", prep: "Toma matinal 07:30–10:30 · ayuno según indicación", dur: "6–8 min", para: "TSH, T4, perfil tiroideo, hormonas", price: "desde $29.900" },
  { n: "05", title: "Exámenes preventivos y alergias", prep: "Sin ayuno (alergias) · ayuno según pack", dur: "6–8 min", para: "Chequeo anual, IgE, panel alérgenos", price: "pack anual disponible" },
  { n: "06", title: "PCR y test rápidos", prep: "Sin ayuno · sin antibiótico previo ideal", dur: "5 min", para: "PCR, antígeno, influenza, test rápidos", price: "desde $14.500" },
];

const PRECIOS = [
  { prod: "Hemograma", price: 12900, prep: "Ayuno 8 h", plazo: "6 h" },
  { prod: "Perfil lipídico", price: 18500, prep: "Ayuno 12 h", plazo: "12 h" },
  { prod: "Orina completa", price: 9700, prep: "Sin ayuno", plazo: "8 h" },
  { prod: "Perfil tiroideo", price: 29900, prep: "Ayuno 8 h", plazo: "24 h" },
  { prod: "Pack preventivo anual", price: 54900, prep: "Ayuno 12 h", plazo: "24 h", highlight: true },
  { prod: "Toma a domicilio RM", price: 14900, prep: "Según examen", plazo: "mismo día" },
];

const CIFRAS = [
  { v: 13, suffix: " años", label: "operando en la RM" },
  { v: 42000, suffix: "", label: "exámenes al año" },
  { v: 98, suffix: "%", label: "resultados en plazo informado" },
  { v: 3, suffix: " sedes", label: "+ domicilio 12 comunas RM" },
];

const FAQS = [
  { q: "¿Necesito orden médica para tomarme un examen?", a: "Depende del examen. Hemograma, perfil lipídico, orina y muchos preventivos se toman sin orden. Hormonas, cultivos y algunos específicos sí la requieren. Al agendar te confirmamos por escrito si la necesitas y, si la tienes, basta foto por WhatsApp o correo — no debes imprimirla." },
  { q: "¿Cuántas horas de ayuno y puedo tomar agua o mis remedios?", a: "Hemograma 8 h, lipídico/bioquímico 12 h, orina sin ayuno. Agua sí — incluso se recomienda. Remedios habituales con sorbo de agua salvo indicación contraria. Te enviamos indicaciones exactas al agendar, con hora límite para comer según tu hora de toma." },
  { q: "¿Cuándo y cómo recibo mis resultados — correo, WhatsApp o plataforma?", a: "Por las tres vías: correo con PDF, WhatsApp con aviso y plataforma web con descarga. Hemograma 6 h, orina 8 h, lipídico 12 h en días hábiles. La hora estimada se confirma al agendar y, si hay atraso, te avisamos antes — no debes llamar para consultar." },
  { q: "¿Qué convenios y previsiones aceptan (Fonasa/Isapre) y cómo es el reembolso?", a: "Bonos Fonasa nivel 1 e Isapre con reembolso. Al agendar indicamos si tu examen tiene cobertura y el copago estimado. Emitimos boleta/factura electrónica para reembolso y el comprobante llega junto al resultado. El valor final se confirma antes de la toma, nunca después." },
  { q: "¿Cuánto cuesta y qué comunas cubre la toma a domicilio?", a: "Toma a domicilio $14.900 fijo en 12 comunas RM (Providencia, Las Condes, Santiago Centro, Ñuñoa, La Reina, Vitacura, Lo Barnechea, Peñalolén, La Florida, Macul, San Miguel, Independencia). Ventana 07:30–11:00. Si estás fuera, coordinamos traslado con costo informado antes." },
  { q: "¿Duele la toma y cuánto demora?", a: "Punción breve 5–8 minutos en sala climatizada, personal certificado. Molestia mínima tipo pinchazo. Si tienes venas difíciles, avísanos al agendar y asignamos box con mayor tiempo. Niñas y niños con protocolo de acompañamiento." },
  { q: "¿Puedo ir sin hora o debo agendar? ¿Qué hago si necesito factura o boleta para reembolso?", a: "Agendado es lo recomendado: aseguras ayuno correcto, box a la hora y resultado en plazo. Sin hora te atendemos por orden de llegada hasta las 10:30 (ayunas). Factura/boleta se emite al momento de la toma y se envía con el resultado — indica RUT y razón social al agendar." },
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
  const [openEx, setOpenEx] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cifrasIn, setCifrasIn] = useState(false);
  const [galIn, setGalIn] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const lastY = useRef(0);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

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
    const g = document.getElementById("gal");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target.id === "cifras" && e.isIntersecting) setCifrasIn(true);
        if (e.target.id === "gal" && e.isIntersecting) setGalIn(true);
      }
    }, { threshold: 0.25 });
    if (c) io.observe(c);
    if (g) io.observe(g);
    return () => io.disconnect();
  }, []);

  const fmt = (n: number) => n.toLocaleString("es-CL");

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="CRISTALAB — inicio">CRISTALAB<span>LABORATORIO CLÍNICO</span></a>
          <div className="nav-links">
            {NAV.map((l) => (<a key={l.id} href={`#${l.id}`}>{l.label}</a>))}
            <a href="#reserva" className="btn-petroleo">Agendar toma</a>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span className="phone-desktop">+56 2 2952 3200</span>
            <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
          </div>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--papel)", borderBottom: "1px solid var(--linea)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV.map((l) => (<a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>{l.label}</a>))}
            <a href="#reserva" onClick={() => setMobileNav(false)} className="btn-petroleo" style={{ justifyContent: "center" }}>Agendar toma de muestra</a>
          </div>
        )}
      </nav>

      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Laboratorio clínico · Santiago · Desde 2012</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>Exámenes claros,</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>resultados que</span></span>
              <span className="line" style={{ transitionDelay: "0.24s" }}><span style={{ transitionDelay: "0.29s" }}>llegan cuando</span></span>
              <span className="line" style={{ transitionDelay: "0.36s" }}><span style={{ transitionDelay: "0.41s" }}>los prometimos.</span></span>
            </h1>
            <p className="hero-sub">Toma de muestras, laboratorio clínico y exámenes preventivos en Santiago. Ayuno indicado al agendar, resultados en línea y toma a domicilio sin sorpresas.</p>
            <div className="hero-ctas">
              <a href="#reserva" className="btn-petroleo">Agendar toma de muestra →</a>
              <a href="#precios" className="btn-ghost">Ver precios y preparación</a>
            </div>
            <p style={{ marginTop: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.08em", color: "var(--gris)", lineHeight: 1.6 }}>¿Dudas? Te responde una persona, no un menú eterno · <span style={{ color: "var(--tinta)", fontVariantNumeric: "tabular-nums" }}>+56 2 2952 3200</span></p>
          </div>
          <div className="hero-right">
            <picture>
              <source srcSet={`${BASE}media/hero.webp`} type="image/webp" />
              <img src={`${BASE}media/hero.jpg`} alt="Mesada de laboratorio vacía con tubos de ensayo alineados en gradilla metálica, luz norte fría, fondo blanco desenfocado" loading="eager" decoding="async" fetchPriority="high" width={1024} height={576} style={{ filter: "saturate(0.97) contrast(1.03)" }} />
            </picture>
            <div className="hero-caption"><span>Toma en ayunas hasta 10:30 · Resultados en línea el mismo día en exámenes seleccionados</span><span style={{ color: "var(--petroleo)" }}>—Santiago</span></div>
          </div>
        </div>
        <div className="hero-band">Ayuno indicado al agendar · Resultados por correo y plataforma · Toma a domicilio RM</div>
      </section>

      <section id="confianza" className="section-pad">
        <div className="wrap">
          <div className="kicker">El dolor real</div>
          <div className="confianza-grid" style={{ marginTop: 16 }}>
            <div>
              <div className="confianza-quote">El examen ya genera ansiedad. El resto no debería.</div>
              <p className="confianza-copy">Sabes si necesitas ayuno antes de venir. Sabes a qué hora llega la toma a domicilio — y cuánto cuesta antes de agendar. Sabes cuándo está tu resultado y dónde descargarlo sin llamar tres veces. Sin fila a las 6:30 para que te digan que faltó la orden.</p>
              <ul className="confianza-list">
                <li>Indicaciones de ayuno por escrito antes de venir.</li>
                <li>Hora de toma y costo confirmados al agendar.</li>
                <li>Resultado con aviso por correo y WhatsApp.</li>
              </ul>
              <p style={{ marginTop: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-suave)", letterSpacing: "0.06em" }}>Tiempo promedio entrega: hemograma 6 h · perfil lipídico 12 h · orina 8 h (días hábiles)</p>
            </div>
            <div className="confianza-side">
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--petroleo)" }}>Cómo trabajamos</div>
              <p style={{ color: "var(--gris)", lineHeight: 1.7, fontSize: ".92rem", margin: "10px 0 0" }}>Agenda con preparación escrita. Toma puntual 5–8 min. Resultado en plataforma con PDF descargable y notificación. Si algo faltó, te avisamos antes de cobrar.</p>
              <div className="filete" style={{ margin: "16px 0" }} />
              <div className="metric">Horario toma en ayunas hasta 10:30 todos los días.<br />Sáb 07:30–13:00 · Dom solo domicilio.<br />Providencia · Las Condes · Santiago Centro.</div>
              <picture>
                <source srcSet={`${BASE}media/recepcion.webp`} type="image/webp" />
                <img src={`${BASE}media/recepcion.jpg`} alt="Recepción de toma de muestras vacía con sillas alineadas y luz natural, sin personas" loading="lazy" decoding="async" width={1024} height={576} style={{ marginTop: 14, border: "1px solid var(--linea)", width: "100%", height: 180, objectFit: "cover", filter: "saturate(0.97) contrast(1.03)" }} />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section id="examenes" className="section-pad">
        <div className="wrap">
          <div className="kicker">Exámenes</div>
          <h2 className="h2">Todo lo que puedes tomar — y cómo prepararte.</h2>
          <p className="lead">Índice numerado. Toca cada fila para ver preparación exacta, duración y para quién es. Sin iconitos centrales.</p>
          <div className="examen-list" style={{ marginTop: 24 }}>
            {EXAMENES.map((ex, idx) => {
              const open = openEx === idx;
              return (
                <div key={ex.n} className="examen-row" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenEx(open ? null : idx)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenEx(open ? null : idx); } }}>
                  <div className="examen-num">{ex.n}</div>
                  <div>
                    <div className="examen-title">{ex.title}</div>
                    <div className="sku" style={{ marginTop: 4 }}>{ex.para}</div>
                  </div>
                  <div className="examen-meta">{ex.price}</div>
                  <div style={{ gridColumn: "1/-1", display: open ? "block" : "none" }}>
                    <div className="examen-panel">
                      <div>
                        <dt>Preparación</dt><dd>{ex.prep}</dd>
                      </div>
                      <div>
                        <dt>Duración toma</dt><dd>{ex.dur}</dd>
                      </div>
                    </div>
                  </div>
                  <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 16, color: open ? "var(--petroleo)" : "var(--gris-suave)", textAlign: "right" }}>{open ? "−" : "+"}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-suave)" }}>Valores referenciales 2025 · Indicaciones exactas se confirman al agendar.</p>
        </div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia, no promesas</div>
          <h2 className="h2" style={{ maxWidth: 640 }}>Números que importan cuando esperas un resultado.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            {CIFRAS.map((c, i) => {
              const v = useCountUp(cifrasIn, c.v);
              const display = c.v >= 1000 ? fmt(v) : String(v);
              return (
                <div key={i} className="cifra">
                  <div className="cifra-num">+{i === 1 ? display : v}{c.suffix.replace(String(c.v), "").trim() ? ` ${c.suffix.trim()}` : c.suffix.includes("%") ? "%" : ""}{i === 0 ? " años" : i === 1 ? "" : i === 2 ? "" : ""}</div>
                  <div className="cifra-label">{c.label}</div>
                  {i === 1 && <div className="cifra-cap">al año</div>}
                  {i === 2 && <div className="cifra-cap">en plazo informado</div>}
                  {i === 3 && <div className="cifra-cap">toma a domicilio</div>}
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 12, fontFamily: "IBM Plex Mono, monospace" }}>Fuente interna CRISTALAB, actualizado 2025 · Días hábiles.</p>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Precios claros, sin letra chica</div>
          <h2 className="h2">Lo que cuesta — y lo que incluye.</h2>
          <p className="lead">Tabla editorial sobria en CLP tabulares. Preparación y plazo a la vista. El valor final se confirma antes de la toma, nunca después.</p>
          <div style={{ marginTop: 24, overflowX: "auto" }}>
            <table className="tabla" aria-label="Precios CRISTALAB">
              <thead><tr><th>Examen</th><th>Preparación</th><th>Plazo resultado</th><th style={{ textAlign: "right" }}>Precio</th></tr></thead>
              <tbody>
                {PRECIOS.map((r) => (
                  <tr key={r.prod} className={r.highlight ? "highlight" : ""}>
                    <td><strong style={{ fontWeight: 600, color: "var(--tinta)" }}>{r.prod}</strong>{r.highlight ? <span style={{ marginLeft: 8, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--petroleo)", border: "1px solid var(--petroleo)", padding: "2px 6px" }}>pack</span> : null}</td>
                    <td style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "var(--gris)" }}>{r.prep}</td>
                    <td style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "var(--gris)" }}>{r.plazo}</td>
                    <td className="num">${fmt(r.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="nota">Valores referenciales 2025. Con orden médica o sin ella (según examen). Bonos Fonasa nivel 1 e Isapre con reembolso indicados al agendar. El valor final se confirma antes de la toma, nunca después.</div>
          <div id="gal" className={`gal-mini reveal ${galIn ? "in" : ""}`}>
            <div className="gal-card" style={{ height: 280 }}>
              <picture>
                <source srcSet={`${BASE}media/tubos.webp`} type="image/webp" />
                <img src={`${BASE}media/tubos.jpg`} alt="Bodegón macro de tres tubos al vacío con etiqueta tipográfica mínima sobre superficie blanca, luz rasante fría" loading="lazy" decoding="async" width={576} height={1024} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.97) contrast(1.03)" }} />
              </picture>
              <div className="gal-caption"><span>Tubos EDTA · etiqueta tipográfica mínima · luz rasante</span><span>04:05</span></div>
            </div>
            <div className="gal-card" style={{ height: 280 }}>
              <picture>
                <source srcSet={`${BASE}media/texture.webp`} type="image/webp" />
                <img src={`${BASE}media/texture.jpg`} alt="Macro de papel de examen impreso con trama tipográfica y filete fino, luz rasante" loading="lazy" decoding="async" width={1024} height={1024} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.97) contrast(1.03)" }} />
              </picture>
              <div className="gal-caption"><span>Papel examen · trama tipográfica · filete 1px</span><span>—</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método CRISTALAB</div>
          <h2 className="h2">Tres pasos, cero sorpresas.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Agendas y confirmas preparación</div>
              <p className="metodo-desc">WhatsApp/correo con indicaciones escritas: ayuno, agua, remedios y hora exacta. Sin letra chica.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Toma puntual 5–8 min</div>
              <p className="metodo-desc">Sala climatizada, personal certificado, tubo etiquetado delante tuyo. Agendada cada 15 min.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Resultado en línea y aviso</div>
              <p className="metodo-desc">Correo + plataforma con PDF descargable, notificación por WhatsApp a la hora informada.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sedes" className="section-pad">
        <div className="wrap">
          <div className="kicker">Sedes</div>
          <h2 className="h2">Dónde tomarte el examen — y a qué hora en ayunas.</h2>
          <div className="sedes-grid" style={{ marginTop: 24 }}>
            <div className="sede">
              <div className="sede-name">Providencia</div>
              <div className="sede-addr">Av. Providencia 1208, piso 3<br />Toma ayunas 07:00–10:30 · Lun–Sáb</div>
              <div className="sede-phone">+56 2 2952 3200</div>
            </div>
            <div className="sede">
              <div className="sede-name">Las Condes</div>
              <div className="sede-addr">Rosario Norte 532, of. 21<br />Toma ayunas 07:00–10:30 · Lun–Sáb</div>
              <div className="sede-phone">+56 2 2952 3201</div>
            </div>
            <div className="sede">
              <div className="sede-name">Santiago Centro</div>
              <div className="sede-addr">Huérfanos 1147, piso 5<br />Toma ayunas 07:00–10:30 · Lun–Sáb</div>
              <div className="sede-phone">+56 2 2952 3202</div>
            </div>
          </div>
          <div className="sede-extra">
            <div>
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--petroleo)" }}>Toma a domicilio RM</div>
              <p style={{ margin: "8px 0 0", color: "var(--gris)", lineHeight: 1.6, fontSize: ".93rem" }}>12 comunas · ventana 07:30–11:00 · costo fijo <span style={{ color: "var(--tinta)", fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>$14.900</span> · indicaciones de ayuno por comuna incluidas.</p>
              <p style={{ margin: "6px 0 0", fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-suave)" }}>Providencia · Las Condes · Vitacura · Lo Barnechea · Ñuñoa · La Reina · Peñalolén · La Florida · Macul · Santiago Centro · Independencia · San Miguel</p>
            </div>
            <a href="#reserva" className="btn-petroleo">Agendar toma a domicilio</a>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Lo que todos preguntan antes de agendar.</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={`faq-item ${open ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}>
                    <span>{f.q}</span><span className="faq-icon">+</span>
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
          <div className="reserva-box">
            <div className="reserva-left">
              <div className="kicker">Reserva</div>
              <h2 className="h2" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", marginBottom: 8 }}>¿Listo para tu toma?</h2>
              <div className="tel">+56 2 2952 3200</div>
              <p style={{ color: "var(--gris)", lineHeight: 1.6, fontSize: ".93rem", margin: "0 0 18px" }}>Te responde una persona. Indicaciones de ayuno por escrito antes de venir.<br />Horario toma en ayunas hasta 10:30 todos los días.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+56229523200" className="btn-petroleo">Agendar toma de muestra</a>
                <a href="mailto:hola@cristalab.cl" className="btn-ghost">hola@cristalab.cl</a>
              </div>
              <p style={{ marginTop: 14, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-suave)" }}>Lun–Vie 07:00–18:00 · Sáb 07:30–13:00 · Dom toma a domicilio · hola@cristalab.cl</p>
            </div>
            <div className="reserva-right">
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--petroleo)" }}>Escríbenos</div>
              <input className="field" placeholder="Nombre" aria-label="Nombre" />
              <input className="field" placeholder="Teléfono / WhatsApp" aria-label="Teléfono" />
              <select className="field" aria-label="Examen"><option>Examen / motivo</option><option>Hemograma</option><option>Perfil lipídico</option><option>Orina / cultivos</option><option>Hormonas / tiroides</option><option>Preventivo</option><option>Toma a domicilio</option></select>
              <button className="btn-petroleo" style={{ justifyContent: "center" }} onClick={() => setFormOk(true)}>Solicitar agendamiento</button>
              {formOk && <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--petroleo)", margin: 0 }}>¡Recibido! Te escribimos con indicaciones de ayuno en minutos.</p>}
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-suave)", margin: 0, lineHeight: 1.5 }}>Respuesta en horario de toma. Si escribes fuera de hora, te respondemos a primera hora — con indicaciones escritas.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <span>© 2025 CRISTALAB SpA · RUT 76.123.456-7 · Providencia, Las Condes y Santiago Centro · hola@cristalab.cl</span>
          <span>Lun–Vie 07:00–18:00 · Sáb 07:30–13:00 · Toma a domicilio RM</span>
        </div>
      </footer>

      <div className={`cta-movil ${!showSticky ? "hidden" : ""}`} aria-hidden={!showSticky}>
        <a href="#reserva">Agendar toma →</a>
      </div>
    </>
  );
}
