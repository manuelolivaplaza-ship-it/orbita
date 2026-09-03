import { useEffect, useRef, useState } from "react";

type Carrera = {
  n: string;
  nombre: string;
  sede: string;
  duracion: string;
  malla: string;
  campo: string;
  arancel: number;
};

const carreras: Carrera[] = [
  { n: "01", nombre: "Derecho", sede: "Santiago / Viña", duracion: "10 semestres", malla: "Civil, penal, procesal, constitucional y clínicas jurídicas.", campo: "Estudios jurídicos, fiscalía, empresas y litigación.", arancel: 4890000 },
  { n: "02", nombre: "Ingeniería Comercial", sede: "Santiago / Concepción", duracion: "10 semestres", malla: "Economía, finanzas, marketing y estrategia.", campo: "Banca, consultoría, empresas y emprendimiento.", arancel: 4590000 },
  { n: "03", nombre: "Psicología", sede: "Santiago / Viña", duracion: "10 semestres", malla: "Clínica, organizacional, educacional y neuropsicología.", campo: "Clínica, RR.HH., educación y salud mental.", arancel: 4290000 },
  { n: "04", nombre: "Enfermería", sede: "Santiago / Concepción", duracion: "10 semestres", malla: "Ciencias básicas, cuidados y gestión en salud.", campo: "Hospitales, clínicas, APS y salud pública.", arancel: 4450000 },
  { n: "05", nombre: "Arquitectura", sede: "Santiago", duracion: "10 semestres", malla: "Taller, estructuras, urbanismo y representación.", campo: "Oficinas, obras, patrimonio y ciudad.", arancel: 4750000 },
  { n: "06", nombre: "Medicina", sede: "Santiago", duracion: "12 semestres", malla: "Ciencias preclínicas, clínicas e internados.", campo: "Hospitales, investigación y salud pública.", arancel: 8950000 },
  { n: "07", nombre: "Diseño", sede: "Santiago / Viña", duracion: "8 semestres", malla: "Tipografía, editorial, digital y producto.", campo: "Estudios, agencias, producto y editorial.", arancel: 3980000 },
  { n: "08", nombre: "Pedagogía", sede: "Viña / Concepción", duracion: "8 semestres", malla: "Didáctica, currículum y prácticas progresivas.", campo: "Colegios, formación continua y gestión educativa.", arancel: 3250000 },
];

const preciosRows = [
  { carrera: "Derecho", arancel: 4890000, matricula: 420000, beca: 30, gratuidad: "Sí" },
  { carrera: "Ingeniería Comercial", arancel: 4590000, matricula: 390000, beca: 25, gratuidad: "Sí" },
  { carrera: "Psicología", arancel: 4290000, matricula: 390000, beca: 25, gratuidad: "Sí" },
  { carrera: "Enfermería", arancel: 4450000, matricula: 410000, beca: 20, gratuidad: "Sí" },
  { carrera: "Medicina", arancel: 8950000, matricula: 650000, beca: 15, gratuidad: "No" },
  { carrera: "Diseño", arancel: 3980000, matricula: 350000, beca: 30, gratuidad: "Sí" },
];

function fmt(n: number) {
  return "$" + n.toLocaleString("es-CL");
}

export function App() {
  const [active, setActive] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<number>(0);
  const [gratuidad, setGratuidad] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testi, setTesti] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cifrasIn, setCifrasIn] = useState(false);
  const [cifrasVals, setCifrasVals] = useState([0, 0, 0, 0]);

  const lastY = useRef(0);
  const cifrasRef = useRef<HTMLDivElement>(null);

  // scroll progress + nav hide/show + sticky
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
      setNavCompact(y > 24);
      setNavHidden(y > lastY.current && y > 120);
      lastY.current = y;
      setShowSticky(y > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // reveal observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // cifras count up
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setCifrasIn(true),
      { threshold: 0.4 }
    );
    if (cifrasRef.current) io.observe(cifrasRef.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!cifrasIn) return;
    const targets = [42, 96, 5, 18000];
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCifrasVals(targets.map((t) => Math.round(t * eased)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cifrasIn]);

  // carousel
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setTesti((v) => (v + 1) % 3), 6000);
    return () => clearInterval(id);
  }, [paused]);

  // cursor
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dot = document.createElement("div");
    dot.className = "cursor";
    document.body.appendChild(dot);
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => { x += (tx - x) * 0.18; y += (ty - y) * 0.18; dot.style.left = x + "px"; dot.style.top = y + "px"; raf = requestAnimationFrame(loop); };
    loop();
    const enter = () => dot.classList.add("big");
    const leave = () => dot.classList.remove("big");
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      dot.remove();
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})`, width: "100%" }} />

      <nav className={`nav ${navHidden ? "hidden" : ""} ${navCompact ? "compact" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-logo">NOCTUA <span>· Universidad</span></a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#carreras" onClick={() => setMenuOpen(false)}>Carreras</a>
            <a href="#cifras" onClick={() => setMenuOpen(false)}>Cifras</a>
            <a href="#admision" onClick={() => setMenuOpen(false)}>Admisión</a>
            <a href="#precios" onClick={() => setMenuOpen(false)}>Aranceles</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>Preguntas</a>
            <a href="#reserva" className="nav-cta" onClick={() => setMenuOpen(false)}>Postular</a>
          </div>
          <button className="nav-burger" aria-label="Menú" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </nav>

      <a href="#reserva" className={`sticky-cta ${showSticky ? "visible" : ""}`}>Postular ahora — Admisión 2026 →</a>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-left">
          <p className="hero-kicker">Universidad privada · Acreditada 5 años · Biblioteca nocturna</p>
          <h1>
            <span className="line"><span>Prestigio que</span></span>
            <span className="line"><span>no necesita</span></span>
            <span className="line"><span>gritar.</span></span>
          </h1>
          <p className="hero-sub">Carreras acreditadas, profesores con nombre y apellido, y una admisión que entiendes en 5 minutos — ahora en una universidad que se lee de noche como una biblioteca iluminada.</p>
          <div className="hero-actions">
            <a href="#reserva" className="btn-champagne">Postular ahora →</a>
            <a href="#carreras" className="link-anim">Conocer carreras</a>
          </div>
          <p style={{ marginTop: 22, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gris-apagado)" }}>Admisión 2026 · Vespertino y posgrados · Santiago / Viña / Concepción</p>
        </div>
        <div className="hero-right">
          <img src="/media/biblioteca-noche.jpg" alt="Biblioteca universitaria vacía de noche, mesas de madera oscura iluminadas puntual, estanterías en penumbra" />
        </div>
      </section>
      <div className="band">Admisión 2026 abierta · Acreditada 5 años · Vespertino y posgrados · Sedes Santiago / Viña / Concepción</div>

      {/* confianza */}
      <div id="confianza" className="confianza">
        <div className="confianza-item"><strong><em>5</em> años</strong><span>Acreditada 2024—2029</span></div>
        <div className="confianza-item"><strong><em>96</em>%</strong><span>Empleabilidad 1er año</span></div>
        <div className="confianza-item"><strong><em>42</em> carreras</strong><span>Pregrado y posgrado</span></div>
        <div className="confianza-item"><strong><em>+18.000</em></strong><span>Titulados</span></div>
      </div>

      {/* carreras */}
      <section id="carreras" className="section reveal">
        <div className="section-head">
          <div>
            <p className="eyebrow">Índice editorial — 01 / 08</p>
            <h2>Carreras que<br />se leen con luz puntual.</h2>
          </div>
          <p>Sin cards brillantes. Un índice numerado como un colofón: nombre grande, sede y duración. Toca para desplegar la ficha completa sin salir de la noche.</p>
        </div>
        <div className="carreras-list">
          {carreras.map((c) => (
            <div key={c.n} className={`carrera-row ${active === c.n ? "active" : ""}`}>
              <div className="carrera-main" onClick={() => setActive(active === c.n ? null : c.n)}>
                <span className="carrera-num tabular">{c.n}</span>
                <div>
                  <div className="carrera-name">{c.nombre}</div>
                  <div className="carrera-meta"><span>{c.sede}</span><span>·</span><span>{c.duracion}</span></div>
                </div>
                <span className="carrera-arrow">↗</span>
              </div>
              <div className="carrera-detail">
                <div className="carrera-detail-inner">
                  <div>
                    <h4>Malla resumida</h4>
                    <p>{c.malla}</p>
                  </div>
                  <div>
                    <h4>Campo laboral</h4>
                    <p>{c.campo}</p>
                  </div>
                  <div className="carrera-detail-foot">
                    <span className="arancel tabular">Desde {fmt(c.arancel)} CLP/año</span>
                    <span className="sello">Acreditada · Sede {c.sede.split("/")[0].trim()}</span>
                    <a href="#precios" className="link-anim" style={{ fontSize: 11 }}>Ver arancel</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* cifras */}
      <section id="cifras" ref={cifrasRef} className="cifras">
        <div className="cifras-grid">
          <div className="cifra">
            <div className="cifra-num tabular"><em>+</em>{cifrasVals[0]}<span style={{ fontSize: 16, color: "var(--gris)", marginLeft: 6 }}>carreras</span></div>
            <div className="cifra-caption">Pregrado, vespertino y posgrados</div>
          </div>
          <div className="cifra">
            <div className="cifra-num tabular">{cifrasVals[1]}<em>%</em></div>
            <div className="cifra-caption">Empleabilidad 1er año</div>
          </div>
          <div className="cifra">
            <div className="cifra-num tabular">{cifrasVals[2]}<span style={{ fontSize: 22, color: "var(--champagne)" }}> años</span></div>
            <div className="cifra-caption">Acreditada 2024—2029</div>
          </div>
          <div className="cifra">
            <div className="cifra-num tabular"><em>+</em>{cifrasVals[3].toLocaleString("es-CL")}</div>
            <div className="cifra-caption">Titulados</div>
          </div>
        </div>
      </section>

      {/* evidencia */}
      <section id="evidencia" className="section reveal">
        <p className="eyebrow" style={{ textAlign: "center" }}>Prueba social nocturna — sin fotos, solo voz</p>
        <div className="quote-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {[
            { q: "Entré por el vespertino y salí con el título que me abrió la fiscalía. La exigencia es serena, no ruidosa.", a: "Valentina, egresada Derecho 2023 · Fiscalía" },
            { q: "Profesores que te conocen por tu nombre. No eres un número, pero tampoco te regalan nada.", a: "Martín, egresado Ingeniería Comercial 2022 · Banca" },
            { q: "De noche la biblioteca es otra universidad: silencio que te obliga a tomarte en serio.", a: "Camila, egresada Psicología 2024 · Hospital" },
          ].map((t, i) => (
            <div key={i} className={`quote ${testi === i ? "active" : ""}`}>
              <blockquote>{t.q}<cite>— <strong>{t.a}</strong></cite></blockquote>
            </div>
          ))}
        </div>
        <div className="evidencia-dots">
          {[0, 1, 2].map((i) => (
            <button key={i} className={`dot ${testi === i ? "active" : ""}`} onClick={() => setTesti(i)} aria-label={`Testimonio ${i + 1}`} />
          ))}
        </div>
        <div className="evidencia-logos">
          <span>CNA 5 años</span><span>CNED</span><span>SII · RUT 76.XXX.XXX-X</span><span>Sedes Santiago · Viña · Concepción</span><span>Vespertino acreditado</span>
        </div>
        <div className="media-grid">
          <img src="/media/patio-noche.jpg" alt="Patio interior de campus de noche, hormigón y madera oscura con iluminación rasante cálida" />
          <img src="/media/aula-noche.jpg" alt="Aula taller nocturno ordenado, mesas alineadas, pizarra limpia con luz cálida puntual" />
        </div>
      </section>

      {/* admision */}
      <section id="admision" className="section reveal" style={{ maxWidth: "var(--max)" }}>
        <p className="eyebrow">Admisión sin fricción</p>
        <h2 style={{ fontFamily: "Cormorant Garamond", fontSize: "clamp(32px,4vw,42px)", letterSpacing: "-0.03em", margin: 0 }}>Cuatro pasos, sin laberinto.</h2>
        <p style={{ color: "var(--gris)", maxWidth: 58 + "ch", lineHeight: 1.6, marginTop: 12 }}>De la simulación a la matrícula sin call center externo. Te responde Admisión en menos de 24 horas.</p>
        <div className="admision-grid">
          {[
            { n: "01", t: "Simula tu puntaje", d: "Ingresa tus notas y PAES. Ves tu puntaje ponderado al instante.", meta: "2 min · Sin documentos" },
            { n: "02", t: "Postula online", d: "Formulario breve, carga de certificados y elección de sede.", meta: "8 min · Cédula + NEM" },
            { n: "03", t: "Entrevista", d: "Conversación de 20 min con tu escuela. Presencial o videollamada.", meta: "20 min · Agendada en 48h" },
            { n: "04", t: "Matrícula", d: "Firma digital y pago inicial. Nunca matriculamos sin entrevista previa.", meta: "15 min · Online" },
          ].map((s) => (
            <div key={s.n} className="admision-step">
              <p className="admision-num tabular">{s.n}</p>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <p className="admision-meta">{s.meta}</p>
            </div>
          ))}
        </div>
        <div className="admision-cta">
          <a href="#precios" className="btn-champagne">Simular postulación →</a>
        </div>
      </section>

      {/* precios */}
      <section id="precios" className="section reveal">
        <div className="section-head">
          <h2>Aranceles claros,<br />sin sorpresas.</h2>
          <p>Valores referenciales 2026. El arancel final depende de carrera y beneficios. Se confirma por escrito tras tu postulación.</p>
        </div>
        <div className="precios-wrap">
          <div className="precios-head">
            <p style={{ margin: 0, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gris)" }}>Arancel anual · valores en CLP</p>
            <div className="toggle">
              <button className={!gratuidad ? "active" : ""} onClick={() => setGratuidad(false)}>Sin gratuidad</button>
              <button className={gratuidad ? "active" : ""} onClick={() => setGratuidad(true)}>Con gratuidad</button>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Carrera</th><th>Arancel anual</th><th>Matrícula</th><th>Beca % ref</th><th>Gratuidad</th></tr>
              </thead>
              <tbody>
                {preciosRows.map((r) => {
                  const ar = gratuidad && r.gratuidad === "Sí" ? 0 : r.arancel;
                  return (
                    <tr key={r.carrera}>
                      <td>{r.carrera}</td>
                      <td className="tabular-cell tabular">{ar === 0 ? "— exento —" : fmt(ar)}</td>
                      <td className="tabular-cell tabular">{fmt(r.matricula)}</td>
                      <td className="beca tabular">{r.beca}%</td>
                      <td><span className="gratuidad">{r.gratuidad}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="precios-nota">El arancel final depende de la carrera y beneficios. Se confirma por escrito tras tu postulación. Nunca matriculamos sin entrevista previa. Consulta gratuidad y becas con tu puntaje — te respondemos en &lt;24h al <a href="tel:+56228403315" style={{ color: "var(--champagne)" }}>+56 2 2840 3315</a>.</p>
        </div>
        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <img src="/media/detalle-noche.jpg" alt="Macro de papel hueso con sello seco dorado NOCTUA sobre tinta, luz rasante cálida" style={{ width: "100%", height: 280, objectFit: "cover", border: "1px solid var(--filete)" }} />
          <div style={{ border: "1px solid var(--filete)", background: "var(--superficie)", padding: 24, display: "grid", placeContent: "center" }}>
            <p style={{ fontFamily: "Cormorant Garamond", fontStyle: "italic", fontSize: 20, color: "var(--hueso)", margin: 0, lineHeight: 1.4 }}>“El prestigio no se grita.<br />Se lee en el detalle.”</p>
            <p style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gris)", marginTop: 12 }}>Sello seco · Papel hueso · Tinta noche</p>
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="section reveal">
        <p className="eyebrow">Preguntas que sí responden</p>
        <h2 style={{ fontFamily: "Cormorant Garamond", fontSize: "clamp(32px,4vw,42px)", letterSpacing: "-0.03em", margin: "0 0 32px" }}>Honestidad antes del formulario.</h2>
        <div className="faq-list">
          {[
            { q: "¿Cuánto cuesta postular?", a: "Nada. La postulación es gratuita y sin compromiso. Solo necesitas tu cédula y NEM. Si quedas seleccionado, recién ahí ves matrícula y arancel con tu beca aplicada. Dudas: +56 2 2840 3315." },
            { q: "¿Hay gratuidad, becas y cómo sé si califico?", a: "Sí — gratuidad y becas internas hasta 30% según carrera y puntaje. En la simulación ves tu escenario y luego te lo confirmamos por escrito. Activa el toggle 'Con gratuidad' en Aranceles para ver el exento." },
            { q: "¿Puedo convalidar ramos?", a: "Sí. Trae tu concentración de notas y programas. La escuela evalúa caso a caso en 5 días hábiles y te dice qué ramos se convalidan antes de matricularte." },
            { q: "¿Hay intercambio?", a: "Convenios semestrales en España, México y Colombia. Requisito: 50% de la carrera aprobada y promedio ≥5.0." },
            { q: "¿Dónde están las sedes y hay vespertino / online nocturno?", a: "Santiago (Providencia), Viña del Mar y Concepción. Vespertino 18:30–22:00 y formato online nocturno en 4 carreras (Derecho, Comercial, Psicología y Diseño). Horario Lun–Vie 9:00–19:00, Sáb 9:00–13:00." },
            { q: "¿Cómo es la entrevista y cuánto demora la respuesta?", a: "20 min con tu director de carrera, presencial o Meet. No es prueba: es conversación sobre tu motivación. Respuesta en 48h hábiles por correo y teléfono. Escríbenos a admision@noctua.cl." },
          ].map((f, i) => (
            <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* reserva */}
      <section id="reserva" className="reserva">
        <div className="reserva-inner">
          <div>
            <p className="eyebrow">Admisión 2026</p>
            <h2>Conversemos<br />tu postulación.</h2>
            <p className="reserva-phone tabular">+56 2 2840 3315</p>
            <p className="reserva-meta">admision@noctua.cl · Providencia, Santiago<br />Lun–Vie 9:00–19:00 · Sáb 9:00–13:00<br />Sedes Santiago / Viña del Mar / Concepción</p>
            <p style={{ fontSize: 12, color: "var(--gris)", marginTop: 16 }}>Responde Admisión en &lt;24h. Sin call center externo.</p>
          </div>
          <div className="reserva-card">
            <p>Agenda tu entrevista en el horario que te acomoda. Vespertino disponible. Confirmación por correo y WhatsApp.</p>
            <a href="tel:+56228403315" className="btn-champagne" style={{ width: "100%", justifyContent: "center" }}>Agendar entrevista</a>
            <p style={{ marginTop: 14, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris-apagado)", textAlign: "center" }}>Acreditada 5 años (2024–2029) · 42 carreras · +18.000 titulados</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <strong style={{ color: "var(--hueso)", letterSpacing: ".06em" }}>NOCTUA — Universidad Privada</strong> · NOCTUA Universidad SpA · RUT 76.XXX.XXX-X (demo)<br />
            Casa central Providencia, Santiago · Sedes Viña del Mar / Concepción · © 2026
          </div>
          <div className="footer-links">
            <a href="#carreras">Carreras</a><a href="#precios">Aranceles</a><a href="#faq">FAQ</a><a href="mailto:admision@noctua.cl">admision@noctua.cl</a>
          </div>
        </div>
      </footer>
    </>
  );
}
