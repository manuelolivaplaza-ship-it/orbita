import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];

const EXAMENES = [
  { n: "01", title: "Hemograma y coagulación con control interno", prep: "Ayuno 8 h · toma matinal ideal", dur: "5–8 min", bio: "Control interno diario, tubo EDTA etiquetado delante tuyo" },
  { n: "02", title: "Perfil lipídico y bioquímico con ayuno controlado", prep: "Ayuno 12 h · sin alcohol 24 h", dur: "6–8 min", bio: "Cadena de frío inmediata, suero refrigerado" },
  { n: "03", title: "Orina y cultivos con frasco estéril entregado", prep: "Primera orina · frasco estéril incluido", dur: "5 min", bio: "Frasco estéril entregado al agendar" },
  { n: "04", title: "Hormonas y tiroides con toma matinal", prep: "07:30–10:30 · ayuno según indicación", dur: "6–8 min", bio: "Toma matinal para curva hormonal estable" },
  { n: "05", title: "Preventivos ejecutivos y alergias", prep: "Ayuno según pack · alergias sin ayuno", dur: "6–8 min", bio: "Panel ejecutivo, IgE, perfil alérgenos" },
  { n: "06", title: "PCR y carga viral", prep: "Sin ayuno · sin antibiótico previo ideal", dur: "5 min", bio: "PCR, antígeno, carga viral, hisopado" },
];

const PRECIOS = [
  { prod: "Hemograma premium", price: 16900, prep: "Ayuno 8 h", plazo: "6 h" },
  { prod: "Perfil lipídico", price: 22500, prep: "Ayuno 12 h", plazo: "12 h" },
  { prod: "Perfil tiroideo completo", price: 34900, prep: "Ayuno 8 h", plazo: "24 h" },
  { prod: "Toma privada a domicilio RM", price: 19900, prep: "Según examen", plazo: "mismo día" },
];

const CIFRAS = [
  { v: 15, suffix: " años", label: "de laboratorio" },
  { v: 38000, suffix: "", label: "informes al año" },
  { v: 99.1, suffix: "%", label: "muestras sin re-toma por trazabilidad", isFloat: true },
  { v: 1, suffix: "", label: "bioquímico firmante por informe" },
];

const FAQS = [
  { q: "¿Necesito orden médica o puedo tomarme el examen directo?", a: "Muchos exámenes se toman sin orden (hemograma, lipídico, orina). Hormonas, cultivos y específicos sí la requieren. Al agendar te confirmamos por escrito si la necesitas; basta foto por WhatsApp, no debes imprimirla." },
  { q: "¿Cuántas horas de ayuno y qué pasa con agua y remedios?", a: "Hemograma 8 h, lipídico 12 h, hormonas toma matinal. Agua sí, remedios con sorbo salvo indicación contraria. Te enviamos indicaciones exactas con hora límite para comer según tu hora agendada." },
  { q: "¿Cómo y cuándo recibo mi resultado — plataforma, correo o WhatsApp?", a: "Plataforma con PDF firmado por bioquímico + correo + aviso WhatsApp. Plazo garantizado al agendar (hemograma 6 h, tiroideo 24 h hábiles). La hora de liberación se respeta; si hay atraso te avisamos antes." },
  { q: "¿Qué pasa si mi muestra no es viable o necesita re-toma?", a: "Si algo compromete la muestra te avisamos antes de cobrar el procesamiento. Re-toma sin costo cuando es por trazabilidad/transporte. Informe indica si hubo incidencia y nuevo plazo. No cobramos procesamiento de muestra no viable." },
  { q: "¿Qué convenios aceptan y cómo funciona el reembolso Fonasa/Isapre?", a: "Fonasa nivel 1 y reembolso Isapre informados antes de agendar. Emitimos boleta/factura electrónica junto al resultado. Valor final y copago estimado confirmados por escrito antes de la toma." },
  { q: "¿Cuánto cuesta la toma a domicilio privada y qué comunas cubre con cadena de frío?", a: "Toma privada $19.900 RM con cadena de frío controlada, transporte refrigerado y trazabilidad completa. RM amplia con ventana agendada. Si estás fuera de cobertura, coordinamos con costo informado antes." },
  { q: "¿Cómo garantizan la bioseguridad y la trazabilidad de mi muestra?", a: "Box individual, tubo etiquetado delante tuyo, cadena de frío desde la toma hasta el informe y firma bioquímico por informe. Transporte refrigerado con registro. Informe con hora de liberación y trazabilidad completa." },
];

function useCountUp(active: boolean, target: number, isFloat?: boolean) {
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
      setVal(eased * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return isFloat ? Number(val.toFixed(1)) : Math.round(val);
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
  const [heroReady, setHeroReady] = useState(false);
  const lastY = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);

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

  const fmt = (n: number) => n.toLocaleString("es-CL");

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <div ref={cursorRef} className="cursor-dot" aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="ORIA — inicio">ORIA<span>LABORATORIO PRIVADO</span></a>
          <div className="nav-links">
            {NAV.map((l) => (<a key={l.id} href={`#${l.id}`}>{l.label}</a>))}
            <a href="#reserva" className="btn-cian">Agendar</a>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span className="phone-desktop">+56 2 2952 3200</span>
            <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
          </div>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--fondo)", borderBottom: "1px solid var(--filete)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV.map((l) => (<a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris-calido)" }}>{l.label}</a>))}
            <a href="#reserva" onClick={() => setMobileNav(false)} className="btn-cian" style={{ justifyContent: "center" }}>Agendar toma privada</a>
          </div>
        )}
      </nav>

      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Laboratorio privado · Santiago · Cadena de frío controlada</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>Precisión que se</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>nota antes de</span></span>
              <span className="line" style={{ transitionDelay: "0.24s" }}><span style={{ transitionDelay: "0.29s" }}>abrir el</span></span>
              <span className="line" style={{ transitionDelay: "0.36s" }}><span style={{ transitionDelay: "0.41s" }}>resultado.</span></span>
            </h1>
            <p className="hero-sub">Laboratorio clínico privado en Santiago. Toma agendada sin espera, cadena de frío controlada y resultados en plataforma con aviso directo.</p>
            <div className="hero-ctas">
              <a href="#reserva" className="btn-cian">Agendar toma privada →</a>
              <a href="#precios" className="link-anim" style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--filete)", padding: "11px 18px" }}>Ver protocolos y bioseguridad</a>
            </div>
            <p style={{ marginTop: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.08em", color: "var(--gris-calido)", lineHeight: 1.6 }}>Hablamos hoy, responde nuestro equipo técnico · <span style={{ color: "var(--hueso)", fontVariantNumeric: "tabular-nums" }}>+56 2 2952 3200</span></p>
          </div>
          <div className="hero-right">
            <picture>
              <source srcSet={`${BASE}media/hero.webp`} type="image/webp" />
              <img src={`${BASE}media/hero.jpg`} alt="Sala de toma de muestras crepuscular vacía con camilla y gradilla iluminada puntual cálida sobre fondo noche, sin personas" loading="eager" decoding="async" fetchPriority="high" width={1024} height={576} style={{ filter: "saturate(0.92) contrast(1.05) brightness(1.02)" }} />
            </picture>
            <div className="hero-caption"><span>Toma agendada cada 15 min · Sin sala de espera compartida · Bioseguridad certificada</span><span>—Providencia</span></div>
          </div>
        </div>
      </section>

      <section id="filosofia" className="section-pad">
        <div className="wrap">
          <div className="kicker">La diferencia premium</div>
          <div className="filo-grid" style={{ marginTop: 16 }}>
            <div>
              <div className="filo-quote">La muestra no espera.<br />Nosotros tampoco.</div>
              <p className="filo-copy">Cadena de frío desde la toma hasta el informe. Tubo etiquetado delante tuyo, no después. Resultado en plataforma con hora de liberación informada al agendar — no “entre 24 y 72 horas, llame para consultar”. Si algo compromete la muestra, te avisamos antes de cobrarte, no después.</p>
              <p style={{ marginTop: 16, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-apagado)", letterSpacing: "0.06em" }}>Trazabilidad completa · Transporte refrigerado · Informe con firma bioquímico</p>
            </div>
            <div className="filo-side">
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cian-hielo)" }}>Trazabilidad</div>
              <p style={{ color: "var(--gris-calido)", lineHeight: 1.7, fontSize: ".92rem", margin: "10px 0 0" }}>Cada tubo viaja refrigerado y etiquetado delante tuyo. Informe con firma bioquímico y hora de liberación respetada. Si la muestra no es viable, no se cobra el procesamiento.</p>
              <div className="filete" style={{ margin: "16px 0" }} />
              <div className="metric">Box individual · Etiquetado delante tuyo · Cadena de frío inmediata<br />Providencia, toma a domicilio nocturna con agenda.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="examenes" className="section-pad">
        <div className="wrap">
          <div className="kicker">Exámenes</div>
          <h2 className="h2">Seis familias — detalle al pasar el cursor.</h2>
          <p className="lead">Hover flip 280 ms en desktop, tap acordeón en móvil. Cada fila revela preparación exacta y bioseguridad.</p>
          <div className="examen-list" style={{ marginTop: 24 }}>
            {EXAMENES.map((ex, idx) => {
              const open = openEx === idx;
              return (
                <div key={ex.n} className="examen-row" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenEx(open ? null : idx)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenEx(open ? null : idx); } }}>
                  <div className="examen-num">{ex.n}</div>
                  <div>
                    <div className="examen-title">{ex.title}</div>
                    <div style={{ marginTop: 4, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-calido)" }}>{ex.bio}</div>
                  </div>
                  <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 16, color: open ? "var(--cian-hielo)" : "var(--gris-apagado)", textAlign: "right" }}>{open ? "−" : "+"}</div>
                  {open && (
                    <div className="examen-panel" style={{ gridColumn: "1/-1" }}>
                      <div><dt>Preparación</dt><dd>{ex.prep}</dd></div>
                      <div><dt>Duración / bioseguridad</dt><dd>{ex.dur} · box individual</dd></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia nocturna</div>
          <h2 className="h2" style={{ maxWidth: 640 }}>Números que sostienen la promesa premium.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            {CIFRAS.map((c, i) => {
              const v = useCountUp(cifrasIn, c.v, c.isFloat);
              return (
                <div key={i} className="cifra">
                  <div className="cifra-num">+{c.isFloat ? (v as number).toFixed(1) : fmt(v as number)}{c.suffix.includes("%") ? "%" : c.suffix.includes("años") ? " años" : ""}{i === 1 ? "" : ""}</div>
                  <div className="cifra-label">{c.label}{i === 1 ? " al año" : ""}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 14, color: "var(--gris-calido)", fontSize: 12, fontFamily: "IBM Plex Mono, monospace" }}>Trazabilidad medida · Informe con firma bioquímico · 2025.</p>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Precios claros, sin letra chica</div>
          <h2 className="h2">Lo que cuesta — y el plazo que se respeta.</h2>
          <p className="lead">Tabla sobria en CLP tabulares sobre superficie. Preparación y plazo garantizado a la vista.</p>
          <div style={{ marginTop: 24, overflowX: "auto" }}>
            <table className="tabla" aria-label="Precios ORIA">
              <thead><tr><th>Examen</th><th>Preparación</th><th>Plazo garantizado</th><th style={{ textAlign: "right" }}>Precio</th></tr></thead>
              <tbody>
                {PRECIOS.map((r) => (
                  <tr key={r.prod}>
                    <td><strong style={{ fontWeight: 600 }}>{r.prod}</strong></td>
                    <td style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "var(--gris-calido)" }}>{r.prep}</td>
                    <td style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "var(--gris-calido)" }}>{r.plazo}</td>
                    <td className="num">${fmt(r.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="nota">Valores referenciales 2025. Orden médica según examen. Fonasa nivel 1 y reembolso Isapre informados antes de agendar. Si la muestra no es viable, no se cobra el procesamiento.</div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método ORIA</div>
          <h2 className="h2">Tres pasos con trazabilidad.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Agenda con preparación escrita</div>
              <p className="metodo-desc">Ventana horaria exacta y indicaciones de ayuno por comuna. Confirmación por WhatsApp/correo.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Toma privada puntual</div>
              <p className="metodo-desc">Box individual, etiquetado delante tuyo, cadena de frío inmediata. Sin sala de espera compartida.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Informe con aviso</div>
              <p className="metodo-desc">PDF firmado por bioquímico en plataforma, notificación por WhatsApp/correo, hora de liberación respetada.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Galería técnica</div>
          <h2 className="h2">Material que se deja mirar de cerca.</h2>
          <div className={`gal-grid reveal ${galIn ? "in" : ""}`} style={{ marginTop: 24 }}>
            <div className="gal-card ken">
              <picture>
                <source srcSet={`${BASE}media/tubos-dark.webp`} type="image/webp" />
                <img src={`${BASE}media/tubos-dark.jpg`} alt="Bodegón chiaroscuro de tubos al vacío sobre acero oscuro cepillado con luz rasante fría, sin personas" loading="lazy" decoding="async" width={576} height={1024} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.92) contrast(1.05)" }} />
              </picture>
              <div className="gal-caption"><span>Tubo EDTA etiquetado en box · Acero 316 cepillado · 07:30 toma en ayunas</span><span>01</span></div>
            </div>
            <div className="gal-card">
              <picture>
                <source srcSet={`${BASE}media/lab-noche.webp`} type="image/webp" />
                <img src={`${BASE}media/lab-noche.jpg`} alt="Mesada de laboratorio nocturna con microscopio y cuaderno técnico cerrado, luz lateral dramática, sin personas" loading="lazy" decoding="async" width={1024} height={576} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.92) contrast(1.05)" }} />
              </picture>
              <div className="gal-caption"><span>Mesada nocturna · microscopio · cuaderno técnico · luz lateral</span><span>02</span></div>
            </div>
          </div>
          <div className="gal-card" style={{ marginTop: 18, height: 200, border: "1px solid var(--filete)", overflow: "hidden", position: "relative" }}>
            <picture>
              <source srcSet={`${BASE}media/texture.webp`} type="image/webp" />
              <img src={`${BASE}media/texture.jpg`} alt="Macro de superficie de acero inoxidable cepillado con luz rasante, textura lineal fina" loading="lazy" decoding="async" width={1024} height={1024} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05)" }} />
            </picture>
            <div className="gal-caption"><span>Acero inox cepillado · luz rasante · textura ORIA</span><span>—</span></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Todo lo que un paciente premium pregunta — respondido sin humo.</h2>
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
              <div className="kicker">Reserva privada</div>
              <h2 className="h2" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", marginBottom: 8 }}>¿Agendamos tu toma privada?</h2>
              <div className="tel">+56 2 2952 3200</div>
              <p style={{ color: "var(--gris-calido)", lineHeight: 1.6, fontSize: ".93rem", margin: "0 0 18px" }}>Responde nuestro equipo técnico, no un call center.<br />Horario Lun–Vie 07:00–19:00 · Sáb 07:30–14:00 · Toma a domicilio nocturna.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+56229523200" className="btn-cian">Agendar toma privada</a>
                <a href="mailto:hola@oria.cl" className="btn-ghost">hola@oria.cl</a>
              </div>
              <p style={{ marginTop: 14, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-apagado)" }}>hola@oria.cl · Providencia, Santiago · Respuesta hoy en horario de toma.</p>
            </div>
            <div className="reserva-right">
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cian-hielo)" }}>Escríbenos</div>
              <input className="field" placeholder="Nombre" aria-label="Nombre" />
              <input className="field" placeholder="Teléfono / WhatsApp" aria-label="Teléfono" />
              <select className="field" aria-label="Examen"><option>Examen / motivo</option><option>Hemograma premium</option><option>Perfil lipídico</option><option>Tiroideo completo</option><option>Preventivo ejecutivo</option><option>Toma privada a domicilio</option></select>
              <button className="btn-cian" style={{ justifyContent: "center" }} onClick={() => setFormOk(true)}>Solicitar agendamiento</button>
              {formOk && <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--cian-hielo)", margin: 0 }}>¡Recibido! Nuestro equipo técnico te escribe con ventana exacta en minutos.</p>}
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris-apagado)", margin: 0, lineHeight: 1.5 }}>Respuesta en horario de toma. Fuera de hora, primera hora del día siguiente — con preparación escrita.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <span>© 2025 ORIA SpA · Laboratorio Clínico Privado · Providencia, Santiago · hola@oria.cl</span>
          <span>Lun–Vie 07:00–19:00 · Sáb 07:30–14:00 · Toma a domicilio nocturna</span>
        </div>
      </footer>

      <div className={`cta-movil ${!showSticky ? "hidden" : ""}`} aria-hidden={!showSticky}>
        <a href="#reserva">Agendar toma privada →</a>
      </div>
    </>
  );
}
