import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;
const media = (n: string) => `${BASE}media/${n}`;

// ---- helpers
function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(eased * to));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  const fmt = to >= 1000 ? val.toLocaleString("es-CL") : String(val);
  return <span ref={ref}>{prefix}{fmt}{suffix}</span>;
}

export function App() {
  const progress = useScrollProgress();
  const revealRef = useReveal();
  const [navHidden, setNavHidden] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [svcOpen, setSvcOpen] = useState<number | null>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [vocIdx, setVocIdx] = useState(0);
  const [vocPaused, setVocPaused] = useState(false);
  const lastY = useRef(0);

  // nav hide/show + compact
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavCompact(y > 24);
      setShowSticky(y > 520);
      if (y > lastY.current && y > 120) setNavHidden(true);
      else setNavHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // voces autoplay
  useEffect(() => {
    if (vocPaused) return;
    const id = window.setInterval(() => setVocIdx((v) => (v + 1) % 3), 5200);
    return () => clearInterval(id);
  }, [vocPaused]);

  const servicios = [
    { idx: "01", t: "Psicoterapia adultos", para: "Ansiedad, ánimo, estrés sostenido, duelo y transiciones vitales.", det: "50 min · semanal o quincenal", precio: "desde $45.000" },
    { idx: "02", t: "Psiquiatría", para: "Evaluación, diagnóstico y tratamiento farmacológico cuando corresponde.", det: "50 min primera vez · 30 min control", precio: "desde $65.000" },
    { idx: "03", t: "Infanto-juvenil", para: "Niños y adolescentes con apoyo a padres y colegio.", det: "50 min · con familia", precio: "desde $48.000" },
    { idx: "04", t: "Terapia de pareja y familia", para: "Comunicación, acuerdos y crisis relacionales.", det: "60 min · ambos presentes", precio: "desde $58.000" },
    { idx: "05", t: "Intervención en crisis", para: "Contención breve y plan de seguimiento coordinado.", det: "60 min · respuesta en 24h", precio: "desde $55.000" },
    { idx: "06", t: "Talleres y grupos", para: "Ansiedad, habilidades parentales y regulación emocional.", det: "90 min · 6–8 personas", precio: "desde $18.000" },
  ];

  const faqs = [
    { q: "¿Cuánto cuesta la primera hora?", a: <>La primera conversación cuesta <b>desde $45.000</b> (50 min). El valor final se confirma ahí mismo según tu caso. Emitimos boleta reembolsable para Fonasa e Isapre.</> },
    { q: "¿Atienden Fonasa / Isapre?", a: <>Sí. Atendemos <b>Fonasa, Isapre y particular</b>. Emitimos boleta y te orientamos en el reembolso. Si tu plan exige derivación, la coordinamos.</> },
    { q: "¿Presencial u online?", a: <>Ambas. Presencial en Providencia / Las Condes y <b>online en todo Chile</b>. Puedes cambiar de modalidad sin perder a tu terapeuta.</> },
    { q: "¿Cada cuánto son las sesiones?", a: <>Habitual: <b>semanal al inicio</b>, luego quincenal según avance. Lo acuerdas con tu profesional y queda por escrito en tu plan.</> },
    { q: "¿Qué pasa si no conecto con mi terapeuta?", a: <>Lo conversas sin culpa. <b>Te reasignamos</b> dentro del equipo sin costo extra en la primera derivación. La alianza importa más que la agenda.</> },
    { q: "¿Cómo pido hora si estoy en crisis?", a: <><b>Llámanos al +56 2 2840 1188</b> (Lun–Vie 8:30–20:00, Sáb 9:00–14:00). Si hay riesgo vital, acude a urgencias o llama a Salud Responde 600 360 7777. No esperes a la agenda web.</> },
  ];

  return (
    <div ref={revealRef}>
      {/* progress */}
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden />

      {/* NAV */}
      <nav className={`nav ${navHidden ? "nav--hidden" : ""} ${navCompact ? "nav--compact" : ""}`} aria-label="Principal">
        <div className="nav__inner">
          <a href="#inicio" className="nav__brand">ÉTER<small>Centro de Salud Mental</small></a>
          <div className="nav__links">
            <a href="#servicios">Servicios</a>
            <a href="#equipo">Equipo</a>
            <a href="#precios">Valores</a>
            <a href="#faq">Preguntas</a>
            <a href="tel:+56228401188" className="nav__tel">+56 2 2840 1188</a>
            <a href="#reserva" className="btn-solid">Agendar</a>
          </div>
          <button className="hamburger" aria-label="Abrir menú" onClick={() => setMobOpen(true)}>
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden><path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.2" /></svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`mob-menu ${mobOpen ? "open" : ""}`} aria-hidden={!mobOpen} inert={!mobOpen ? true as unknown as undefined : undefined}>
        <div className="mob-menu__top">
          <span style={{ fontFamily: "'Cormorant Garamond',serif", letterSpacing: ".18em", fontWeight: 600 }}>ÉTER</span>
          <button onClick={() => setMobOpen(false)} aria-label="Cerrar menú" style={{ background: "none", border: "1px solid var(--linea)", padding: "8px 12px", cursor: "pointer" }}>✕</button>
        </div>
        {["inicio", "servicios", "equipo", "precios", "faq", "reserva"].map((id) => (
          <a key={id} href={`#${id}`} onClick={() => setMobOpen(false)}>{id}</a>
        ))}
        <a href="#reserva" className="btn-solid" onClick={() => setMobOpen(false)}>Agendar primera conversación</a>
        <a href="tel:+56228401188" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, textDecoration: "none" }}>+56 2 2840 1188 · hola@eter.cl</a>
      </div>

      {/* sticky mobile CTA */}
      <div className={`sticky-cta ${showSticky ? "" : "hidden"}`} role="region" aria-label="Agendar">
        <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gris)" }}>Primera hora en 72h</span>
        <a href="#reserva" className="btn-solid">Agendar primera conversación</a>
      </div>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero__grid">
          <div>
            <div className="kicker">Centro de Salud Mental · Providencia / Online</div>
            <h1 className="hero__h1 clip-reveal" aria-label="Hablar ayuda. Pedir hora no debería costar tanto.">
              <span>Hablar ayuda.</span>
              <span>Pedir hora no debería</span>
              <span>costar tanto.</span>
            </h1>
            <p className="hero__sub">
              Psicología y psiquiatría sin lista de espera eterna. Primera hora en 72 horas, arancel claro y un equipo que te escucha sin juzgar.
            </p>
            <div className="hero__ctas">
              <a href="#reserva" className="btn-solid">Agendar primera conversación</a>
              <a href="#equipo" className="btn-ghost">Ver equipo y valores</a>
            </div>
            <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gris)", border: "1px solid var(--linea)", padding: "6px 10px", background: "var(--papel-2)" }}>Fonasa · Isapre · Particular — boleta reembolsable</span>
            </div>
            {/* dolor chileno */}
            <div className="reveal" style={{ marginTop: 28, borderLeft: "2px solid var(--sage)", paddingLeft: 14 }}>
              <p style={{ margin: 0, fontSize: 13, color: "var(--gris)", lineHeight: 1.7 }}>
                Llevas meses funcionando en rojo y lo llamas “estrés”.<br />
                No es falta de voluntad. Es ansiedad que no te deja dormir a las 3 AM.<br />
                <span style={{ color: "var(--tinta)", fontWeight: 500 }}>Pedir ayuda da pudor. Aquí la primera entrevista es conversación, no interrogatorio.</span>
              </p>
            </div>
          </div>
          <figure className="hero__fig reveal">
            <div className="hero__dots" aria-hidden>
              <span className="dot" style={{ top: "12%", left: "18%" }} />
              <span className="dot" style={{ top: "34%", right: "14%" }} />
              <span className="dot" style={{ bottom: "22%", left: "26%" }} />
              <span className="dot" style={{ bottom: "38%", right: "28%" }} />
            </div>
            <img src={media("room.jpg")} alt="Sala de terapia vacía con luz norte, sillón de lino claro y ventana grande — visual pro ÉTER sin personas" width={800} height={450} loading="eager" />
            <figcaption className="hero__cap"><span>Sala Éter — luz norte, sin interrupciones</span><span>Providencia</span></figcaption>
          </figure>
        </div>
        <div className="hero-band">
          <div className="hero-band__inner">
            <span>Primera hora en 72h</span>
            <span>Arancel informado antes</span>
            <span>Presencial y online</span>
            <span>Fonasa / Isapre</span>
          </div>
        </div>
      </section>

      {/* EVIDENCIA */}
      <section id="evidencia" className="evidencia reveal">
        <div className="evidencia__grid">
          <div>
            <div className="evidencia__n"><CountUp to={1800} prefix="+" /></div>
            <small>primeras conversaciones</small>
          </div>
          <div>
            <div className="evidencia__n"><CountUp to={94} suffix="%" /></div>
            <small>continúa su proceso</small>
          </div>
          <div>
            <div className="evidencia__n"><CountUp to={11} suffix=" años" /></div>
            <small>trabajando en Santiago</small>
          </div>
          <div>
            <div className="evidencia__n">72h</div>
            <small>primera hora disponible</small>
          </div>
        </div>
        <div className="evidencia__note">Sin antes/después. La evidencia es continuidad, no foto. · Datos de gestión clínica 2023–2025.</div>
      </section>

      {/* CIFRAS alias */}
      <section id="cifras" className="evidencia reveal" style={{ borderTop: "1px solid var(--linea)" }} aria-label="Cifras">
        <div style={{ maxWidth: "var(--max)", margin: "0 auto 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <span className="label">Cifras que importan</span>
          <span style={{ fontSize: 11, color: "var(--gris)", letterSpacing: ".04em" }}>La confianza se mide en continuidad.</span>
        </div>
        <div className="evidencia__grid">
          <div><div className="evidencia__n"><CountUp to={1800} prefix="+" /></div><small>primeras conversaciones</small></div>
          <div><div className="evidencia__n"><CountUp to={94} suffix="%" /></div><small>continúa su proceso</small></div>
          <div><div className="evidencia__n"><CountUp to={11} suffix=" años" /></div><small>trabajando en Santiago</small></div>
          <div><div className="evidencia__n">72h</div><small>primera hora disponible</small></div>
        </div>
        <div className="evidencia__note">Sin antes/después. La evidencia es continuidad, no foto.</div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section reveal">
        <div className="wrap">
          <div className="servicios__head">
            <div>
              <div className="kicker">Servicios</div>
              <h2>Lo que hacemos, sin jerga.</h2>
            </div>
            <p>Un profesional a cargo de tu caso. Sin rotación, sin derivaciones eternas. Si no somos el lugar indicado, te derivamos donde sí — sin cobrar de más.</p>
          </div>
          <div className="svc-list" role="list">
            {servicios.map((s, i) => (
              <div key={s.idx} className={`svc ${svcOpen === i ? "open" : ""}`} role="listitem" onClick={() => setSvcOpen(svcOpen === i ? null : i)}>
                <span className="svc__idx">{s.idx}</span>
                <span className="svc__title">{s.t}</span>
                <span className="svc__arrow" aria-hidden>{svcOpen === i ? "—" : "+"}</span>
                <div className="svc__detail">
                  <span><b>Para quién:</b> {s.para}</span>
                  <span>{s.det}</span>
                  <span><b>{s.precio}</b></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="section reveal">
        <div className="wrap">
          <div className="kicker">Equipo</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, letterSpacing: "-.03em", margin: "6px 0 8px", fontWeight: 500, lineHeight: 1 }}>Personas, no turnos.</h2>
          <p style={{ color: "var(--gris)", maxWidth: "60ch", fontSize: 14, margin: 0 }}>Un profesional a cargo, no rotación. Coordinación clínica interna cuando tu caso lo requiere.</p>
          <div className="equipo__grid">
            <article className="eq">
              <img src={media("room.jpg")} alt="Detalle de sala de terapia con sillón claro y luz natural — visual pro" loading="lazy" />
              <h3>Dra. Valentina Rivas</h3>
              <div className="eq__cred">Psiquiatra · U. de Chile</div>
              <p className="eq__focus">Trastornos de ansiedad y ánimo · farmacología prudente y seguimiento continuo.</p>
            </article>
            <article className="eq">
              <img src={media("still.jpg")} alt="Cuaderno clínico abierto con lápiz y taza sobre papel hueso — bodegón ÉTER" loading="lazy" />
              <h3>Ps. Martín Echeverría</h3>
              <div className="eq__cred">Psicólogo · PUC</div>
              <p className="eq__focus">Adultos y crisis vitales · enfoque integrativo, conversación sin juicio.</p>
            </article>
            <article className="eq">
              <img src={media("window.jpg")} alt="Pasillo luminoso con luz natural y sombra suave — ÉTER" loading="lazy" />
              <h3>Ps. Javiera Soto</h3>
              <div className="eq__cred">Psicóloga infanto-juvenil · U. de Chile</div>
              <p className="eq__focus">Niños, adolescentes y familia · trabajo con padres y colegio.</p>
            </article>
          </div>
          <div className="equipo__grid" style={{ marginTop: 24 }}>
            <article className="eq">
              <img src={media("detail.jpg")} alt="Textura de lino pálido y papel algodón con luz rasante — detail ÉTER" loading="lazy" />
              <h3>Ps. Camilo Ulloa</h3>
              <div className="eq__cred">Psicólogo · UDP</div>
              <p className="eq__focus">Pareja y familia · acuerdos, comunicación y reparación.</p>
            </article>
            <article className="eq" style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "1px solid var(--linea)", padding: "18px 0 0" }}>
              <div style={{ border: "1px solid var(--linea)", background: "var(--papel-2)", padding: 18 }}>
                <div className="label" style={{ marginBottom: 8 }}>Cómo asignamos</div>
                <p style={{ fontSize: 13, color: "var(--gris)", lineHeight: 1.6, margin: 0 }}>
                  En la primera conversación evaluamos tu motivo y preferencias (presencial/online, terapeuta hombre/mujer). Te proponemos un profesional y, si no hay ajuste, reasignamos sin costo.
                </p>
              </div>
              <div style={{ marginTop: 16, fontSize: 12, color: "var(--gris)", display: "flex", gap: 8, alignItems: "center" }}>
                <i style={{ width: 6, height: 6, background: "var(--sage)", display: "inline-block" }} /> Supervisión clínica semanal
              </div>
            </article>
            <article className="eq" style={{ borderTop: "1px solid var(--linea)", paddingTop: 18 }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontStyle: "italic", lineHeight: 1.3, letterSpacing: "-.02em" }}>
                “Sin lista de espera de 3 meses. Sin derivaciones eternas.”
              </div>
              <p style={{ fontSize: 12, color: "var(--gris)", marginTop: 10 }}>Si tu caso necesita otro especialista, te derivamos donde sí corresponde.</p>
            </article>
          </div>
          <div className="eq__note"><i aria-hidden /><span><b style={{ color: "var(--tinta)" }}>Un profesional a cargo, no rotación.</b> Coordinación interna y seguimiento escrito.</span></div>

          {/* GALERÍA VISUAL PRO B — 16 A+B */}
          <div className="reveal" style={{ marginTop: 48, borderTop: '1px solid var(--linea)', paddingTop: 28 }}>
            <div className="kicker">Galería visual pro — 16 A+B</div>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: 26, letterSpacing:"-.02em", margin:"8px 0 6px", fontWeight:500 }}>Espacios que calman antes de hablar.</h3>
            <p style={{ color:'var(--gris)', fontSize:13, maxWidth:'62ch', margin:'0 0 18px' }}>Serie B — segunda lectura del mismo lenguaje: luz norte, lino, roble y silencio. Sin personas, sin branding, Google Flow ready.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
              <figure style={{ margin:0 }}><img src={media("room-b.jpg")} alt="Sala ÉTER B — diálogo dos sillones luz norte" loading="lazy" style={{ width:'100%', aspectRatio:'16/9', objectFit:'cover', border:'1px solid var(--linea)' }}/><figcaption style={{ fontSize:10, letterSpacing:'.08em', color:'var(--gris)', marginTop:6, fontFamily:"'JetBrains Mono',monospace" }}>SALA B — 16:9 · diálogo</figcaption></figure>
              <figure style={{ margin:0 }}><img src={media("still-b.jpg")} alt="Bodegón ÉTER B — eucalipto papel hueso" loading="lazy" style={{ width:'100%', aspectRatio:'4/5', objectFit:'cover', border:'1px solid var(--linea)' }}/><figcaption style={{ fontSize:10, letterSpacing:'.08em', color:'var(--gris)', marginTop:6, fontFamily:"'JetBrains Mono',monospace" }}>STILL B — 4:5</figcaption></figure>
              <figure style={{ margin:0 }}><img src={media("window-b.jpg")} alt="Ventana alta ÉTER B — alféizar y planta" loading="lazy" style={{ width:'100%', aspectRatio:'4/5', objectFit:'cover', border:'1px solid var(--linea)' }}/><figcaption style={{ fontSize:10, letterSpacing:'.08em', color:'var(--gris)', marginTop:6, fontFamily:"'JetBrains Mono',monospace" }}>VENTANA B — 4:5</figcaption></figure>
              <figure style={{ margin:0 }}><img src={media("detail-b.jpg")} alt="Detail ÉTER B — papel algodón grano" loading="lazy" style={{ width:'100%', aspectRatio:'1/1', objectFit:'cover', border:'1px solid var(--linea)' }}/><figcaption style={{ fontSize:10, letterSpacing:'.08em', color:'var(--gris)', marginTop:6, fontFamily:"'JetBrains Mono',monospace" }}>DETAIL B — 1:1</figcaption></figure>
            </div>
            <div style={{ marginTop:12, fontSize:11, color:'var(--gris)', display:'flex', gap:10, flexWrap:'wrap' }}><span style={{ border:'1px solid var(--linea)', padding:'4px 8px', background:'var(--papel-2)', letterSpacing:'.06em' }}>16 imágenes A+B · ÉTER × 8 + NOCTUA × 8</span><span style={{ border:'1px solid var(--linea)', padding:'4px 8px', letterSpacing:'.06em' }}>Google Flow · muse-spark-1.2 · sin branding</span><span style={{ border:'1px solid var(--linea)', padding:'4px 8px', letterSpacing:'.06em' }}>Map: Providencia / Las Condes</span></div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section reveal">
        <div className="wrap">
          <div className="precios__head">
            <div className="kicker">Valores</div>
            <h2>Valores claros, sin sorpresas.</h2>
            <p style={{ color: "var(--gris)", fontSize: 14, margin: 0, maxWidth: "62ch" }}>Arancel informado antes de agendar. El valor final se confirma en la primera conversación según tu caso.</p>
          </div>
          <table className="precios__table" aria-label="Valores">
            <thead><tr><th>Prestación</th><th>Duración</th><th style={{ textAlign: "right" }}>Desde</th></tr></thead>
            <tbody>
              <tr><td>Primera conversación</td><td className="muted">50 min</td><td>$45.000</td></tr>
              <tr><td>Psicoterapia sesión</td><td className="muted">50 min</td><td>$45.000</td></tr>
              <tr><td>Psiquiatría control</td><td className="muted">30 min</td><td>$65.000</td></tr>
              <tr><td>Terapia de pareja</td><td className="muted">60 min</td><td>$58.000</td></tr>
              <tr><td>Taller grupal</td><td className="muted">90 min</td><td>$18.000</td></tr>
            </tbody>
          </table>
          <div className="precios__note">
            El valor final se confirma en la primera conversación. Emitimos <b>boleta reembolsable</b> (Fonasa / Isapre / seguro complementario). Si tu caso necesita otro especialista, <b>te derivamos sin costo extra</b> en la primera derivación. Sin planes “más elegido”, sin letra chica.
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="section reveal">
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, letterSpacing: "-.03em", margin: "6px 0 8px", fontWeight: 500 }}>Simple. Humano. Por escrito.</h2>
          <div className="metodo__grid">
            <div className="met">
              <div className="met__num">01</div>
              <h3>Conversación inicial</h3>
              <p>50 min, sin juicio. Nos cuentas qué te trae, qué te preocupa y qué esperas. Sin interrogatorio ni checklist frío.</p>
            </div>
            <div className="met">
              <div className="met__num">02</div>
              <h3>Plan y frecuencia por escrito</h3>
              <p>Acuerdas objetivos, frecuencia y arancel. Todo queda por escrito para que sepas qué esperar y cuánto costará.</p>
            </div>
            <div className="met">
              <div className="met__num">03</div>
              <h3>Seguimiento y ajuste</h3>
              <p>Revisamos avances, ajustamos el plan y coordinamos con psiquiatría o familia si hace falta. Continuidad, no rotación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VOCES */}
      <section id="voces" className="section reveal" onMouseEnter={() => setVocPaused(true)} onMouseLeave={() => setVocPaused(false)}>
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, flexWrap: "wrap" }}>
            <div>
              <div className="kicker">Voces</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, letterSpacing: "-.03em", margin: "6px 0 0", fontWeight: 500 }}>Lo que nos cuentan.</h2>
            </div>
            <button onClick={() => setVocPaused((v) => !v)} aria-pressed={vocPaused} style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", border: "1px solid var(--linea)", background: "var(--papel)", padding: "8px 12px", cursor: "pointer", color: "var(--gris)" }}>
              {vocPaused ? "Reanudar" : "Pausar"}
            </button>
          </div>
          <div className="voces__viewport" aria-live="polite">
            {[
              { q: "Llegué pensando que era estrés. Me escucharon sin apurarme y por primera vez entendí qué me pasaba.", a: "— C., 34 · ansiedad" },
              { q: "Mi hija volvió a dormir tranquila. Nos incluyeron a los papás sin culpas ni sermones.", a: "— Madre de M., 9 · infanto-juvenil" },
              { q: "Pedí hora un martes y el jueves ya estaba conversando. Sin letra chica, sin derivaciones eternas.", a: "— J., 41 · terapia de pareja" },
            ].map((v, i) => (
              <div key={i} className={`voces__slide ${vocIdx === i ? "active" : ""}`}>
                <div className="voces__quote">{v.q}</div>
                <div className="voces__attr">{v.a}</div>
              </div>
            ))}
          </div>
          <div className="voces__controls" role="tablist" aria-label="Testimonios">
            {[0, 1, 2].map((i) => (
              <button key={i} className={`voces__dot ${vocIdx === i ? "active" : ""}`} role="tab" aria-selected={vocIdx === i} aria-label={`Testimonio ${i + 1}`} onClick={() => setVocIdx(i)} />
            ))}
            <span style={{ marginLeft: 12, fontSize: 11, color: "var(--gris)", letterSpacing: ".06em" }}>{String(vocIdx + 1).padStart(2, "0")} / 03</span>
          </div>
          <div className="voces__disc">Testimonios con consentimiento, sin datos identificables. No usamos fotos ni nombres reales.</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section reveal">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, letterSpacing: "-.03em", margin: "6px 0 0", fontWeight: 500 }}>Lo que nos preguntan antes de pedir hora.</h2>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq ${faqOpen === i ? "open" : ""}`}>
                <button className="faq__q" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}>
                  <span>{f.q}</span><span aria-hidden>{faqOpen === i ? "—" : "+"}</span>
                </button>
                <div className="faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP — Providencia / Las Condes */}
      <section className="section reveal" style={{ paddingTop: 48, paddingBottom: 48, background:'var(--papel-2)', borderTop:'1px solid var(--linea)' }}>
        <div className="wrap">
          <div className="kicker">Ubicación — Maps</div>
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr .8fr', gap:24, marginTop:12, alignItems:'stretch' }}>
            <div style={{ border:'1px solid var(--linea)', background:'var(--papel)', overflow:'hidden' }}>
              <div style={{ aspectRatio:'16/10', background:`linear-gradient(135deg, var(--papel-2) 0%, #E8E6E0 100%)`, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                <svg viewBox="0 0 640 400" width="100%" height="100%" role="img" aria-label="Mapa Providencia Las Condes estilizado">
                  <rect width="640" height="400" fill="#F2EFEB"/>
                  <path d="M0 120 H640 M0 200 H640 M0 280 H640 M120 0 V400 M260 0 V400 M420 0 V400" stroke="#D9D3C8" strokeWidth="1" opacity="0.6"/>
                  <path d="M 40 200 C 160 160 260 240 360 180 S 520 120 600 200" fill="none" stroke="#7A9A84" strokeWidth="2.5" opacity="0.9"/>
                  <g><circle cx="220" cy="186" r="14" fill="#1E1C19" stroke="white" strokeWidth="2"/><text x="220" y="192" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="'JetBrains Mono',monospace">A</text><text x="220" y="218" textAnchor="middle" fontSize="9" fill="#1E1C19" fontFamily="'Inter',sans-serif" fontWeight="600">Providencia</text><text x="220" y="230" textAnchor="middle" fontSize="8" fill="#8A8378" fontFamily="'JetBrains Mono',monospace">· Los Leones</text></g>
                  <g><circle cx="420" cy="168" r="14" fill="#7A9A84" stroke="white" strokeWidth="2"/><text x="420" y="174" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="'JetBrains Mono',monospace">B</text><text x="420" y="198" textAnchor="middle" fontSize="9" fill="#1E1C19" fontFamily="'Inter',sans-serif" fontWeight="600">Las Condes</text><text x="420" y="210" textAnchor="middle" fontSize="8" fill="#8A8378" fontFamily="'JetBrains Mono',monospace">· Manquehue</text></g>
                  <text x="320" y="380" textAnchor="middle" fontSize="7" fill="#8A8378" letterSpacing="2.5" fontFamily="'JetBrains Mono',monospace">MAPA ESTILIZADO — SIN GOOGLE BRANDING · GOOGLE FLOW READY</text>
                </svg>
              </div>
              <div style={{ padding:'10px 14px', display:'flex', justifyContent:'space-between', fontSize:11, color:'var(--gris)', fontFamily:"'JetBrains Mono',monospace", borderTop:'1px solid var(--linea)' }}><span>Providencia · Las Condes</span><span style={{ color:'var(--sage)' }}>● Presencial y online</span></div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', gap:12 }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, margin:0, letterSpacing:"-.02em" }}>A pasos del metro,<br/>a una conversación.</h3>
              <p style={{ color:'var(--gris)', fontSize:13, lineHeight:1.6, margin:0 }}>Providencia (Los Leones) y Las Condes (Manquehue). Entrada discreta, sin sala de espera expuesta. Online en todo Chile por videollamada segura.</p>
              <div style={{ fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--gris)', border:'1px solid var(--linea)', padding:'10px 12px', background:'var(--papel)' }}>Lun–Vie 8:30–20:00 · Sáb 9:00–14:00<br/>+56 2 2840 1188 · hola@eter.cl</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" className="reserva section reveal">
        <div className="wrap">
          <div className="reserva__grid">
            <div>
              <div className="kicker">Reserva</div>
              <h2 className="reserva__h">Da el primer paso.<br />Nosotros el segundo.</h2>
              <a href="tel:+56228401188" className="reserva__tel">+56 2 2840 1188</a>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
                <a href="tel:+56228401188" className="btn-solid">Agendar primera conversación</a>
                <a href="mailto:hola@eter.cl" className="btn-ghost" style={{ alignSelf: "center" }}>hola@eter.cl</a>
              </div>
              <p className="reserva__micro">
                Respondemos personas, no bots. Si no contestamos en el momento, devolvemos el llamado el mismo día.<br />
                Lun–Vie 8:30–20:00 · Sáb 9:00–14:00<br />
                Si hay riesgo vital, acude a urgencias o llama a Salud Responde 600 360 7777.
              </p>
            </div>
            <div className="reserva__card">
              <h4>Presencial y online</h4>
              <p><strong>Providencia / Las Condes</strong> — a pasos de metro Los Leones y Manquehue.</p>
              <p>Online en todo Chile por videollamada segura.</p>
              <div style={{ borderTop: "1px solid var(--linea)", marginTop: 16, paddingTop: 16 }}>
                <h4>Horarios</h4>
                <p>Lun–Vie 8:30–20:00<br />Sáb 9:00–14:00 · Dom cerrado</p>
              </div>
              <div style={{ borderTop: "1px solid var(--linea)", marginTop: 16, paddingTop: 16 }}>
                <h4>Contacto</h4>
                <p><strong>hola@eter.cl</strong><br />+56 2 2840 1188</p>
                <p style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris)" }}>Fonasa · Isapre · Particular — boleta reembolsable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} ÉTER SpA · RUT 76.XXX.XXX-X · Razón social ÉTER SpA. Atención de salud mental bajo consentimiento informado. Derivación responsable a urgencia cuando corresponde.</span>
          <span><a href="mailto:hola@eter.cl">hola@eter.cl</a> · Providencia / Las Condes — presencial y online</span>
        </div>
      </footer>
    </div>
  );
}
