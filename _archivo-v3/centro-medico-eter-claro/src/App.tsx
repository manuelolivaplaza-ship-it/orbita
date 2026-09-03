import { useEffect, useRef, useState } from "react"

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
]

const SERVICIOS = [
  { n: "01", title: "Medicina interna", meta: "20–30 min", desc: "Chequeo integral, control crónico y derivación precisa. Para quien no sabe por dónde partir.", price: "desde $34.900" },
  { n: "02", title: "Pediatría", meta: "30 min", desc: "Control sano, vacunas y fiebre sin deriva eterna. Con bono, sin fila de caja.", price: "desde $32.900" },
  { n: "03", title: "Ginecología", meta: "30 min", desc: "Control anual, anticoncepción y ecografía en el mismo lugar. Resultado en portal.", price: "desde $36.900" },
  { n: "04", title: "Traumatología", meta: "20 min", desc: "Dolor articular, esguince o lumbago. Indica si es kine o imagen antes de pagar.", price: "desde $38.900" },
  { n: "05", title: "Dermatología", meta: "20 min", desc: "Acné, manchas y control lunar. Dermatoscopía y receta en portal.", price: "desde $42.900" },
  { n: "06", title: "Otorrino", meta: "20 min", desc: "Oído, nariz y garganta. Audiometría y lavado si aplica, mismo día.", price: "desde $38.900" },
  { n: "07", title: "Cardiología", meta: "30 min", desc: "HTA, chequeo y ECG 12 derivaciones. Informe firmado el mismo día.", price: "desde $44.900" },
  { n: "08", title: "Procedimientos ambulatorios", meta: "15–30 min", desc: "ECG, ecografía abdominal, curaciones e infiltraciones. Con orden, sin hospitalizar.", price: "desde $18.500" },
]

const PRECIOS = [
  { nombre: "Consulta general", desde: 34900, prev: "FONASA A–D / ISAPRE / Particular" },
  { nombre: "Consulta especialidad", desde: 38900, prev: "FONASA / ISAPRE / Particular" },
  { nombre: "Control / evaluación", desde: 28900, prev: "FONASA / ISAPRE / Particular" },
  { nombre: "ECG 12 derivaciones", desde: 18500, prev: "FONASA / ISAPRE / Particular" },
  { nombre: "Ecografía abdominal", desde: 45900, prev: "FONASA / ISAPRE / Particular" },
  { nombre: "Curación / procedimiento menor", desde: 22500, prev: "FONASA / ISAPRE / Particular" },
  { nombre: "Bono PAD (procedimiento)", desde: 0, prev: "FONASA — cotización al agendar" },
]

const FAQS = [
  { q: "¿Cómo reservo hora y con bono electrónico?", a: "Por web (reserva 24/7), teléfono +56 2 2840 3315 o WhatsApp de sede. Compras el bono electrónico antes — te enviamos el link con tu RUT y previsión. Sin bono emitido no parte la atención, así no haces fila en caja. Si no hay cupo en 48h te lo decimos altiro y te ofrecemos la siguiente fecha, no te dejamos en espera eterna." },
  { q: "¿Qué previsión aceptan y cómo es el reembolso FONASA/ISAPRE?", a: "FONASA A–D, ISAPRE (todas) y particular. Bono electrónico FONASA se compra con tu RUT; ISAPRE emite bono o reembolso según plan — te informamos el copago antes de agendar. Particular boleta SII. El valor final se confirma al agendar según previsión; nunca partimos sin bono." },
  { q: "¿Qué llevo a la primera consulta?", a: "Cédula, orden si vienes derivado, exámenes previos y lista de medicamentos. Llega 10 minutos antes. Box con ficha clínica digital — tu hora es de 30 min reales, no 12." },
  { q: "¿Cómo veo mis exámenes y resultados (portal paciente)?", a: "Portal paciente con RUT. Exámenes (ECG, eco) y recetas quedan el mismo día en PDF firmado. Te avisa por mail/SMS. No tienes que volver presencial a retirar sobre." },
  { q: "¿Atienden presencial y telemedicina — cuándo conviene cada una?", a: "Presencial para examen físico, procedimientos y primera vez. Telemedicina para control, revisión de exámenes y receta — con ficha clínica y videollamada formal, no WhatsApp. Si tu caso no es de la especialidad, te derivamos responsablemente sin cobrar de más." },
  { q: "¿Cómo anulo o reprogramo (plazo 24h) y qué pasa si el doctor no asiste?", a: "Anulas o reprogramas hasta 24h antes por web/teléfono sin costo. Si el doctor no asiste (urgencia), te reasignamos en 48h o devolvemos el bono — te avisa administración de sede, no call center. Respondemos el mismo día si no alcanzamos a contestar." },
]

const CIFRAS = [
  { v: 12, suffix: " años", label: "mismo equipo, misma comuna" },
  { v: 18000, suffix: "", label: "pacientes / año · 3 sedes" },
  { v: 92, suffix: "%", label: "horas asignadas en ≤48h" },
  { v: 14, suffix: "", label: "especialidades en el mismo lugar" },
]

function useCountUp(active: boolean, target: number) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(target); return }
    let raf = 0
    const start = performance.now()
    const dur = 1200
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return val
}

function formatCLP(n: number) {
  if (n === 0) return "a cotizar"
  return "$" + n.toLocaleString("es-CL")
}

export function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [openServ, setOpenServ] = useState<number | null>(0)
  const [scrolled, setScrolled] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  const [progress, setProgress] = useState(0)
  const [cifrasIn, setCifrasIn] = useState(false)
  const [galIn, setGalIn] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const [formOk, setFormOk] = useState(false)
  const lastY = useRef(0)

  // scroll progress + nav hide/show + compact
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 18)
      const delta = y - lastY.current
      if (y > 120) {
        if (delta > 6) setHideNav(true)
        else if (delta < -6) setHideNav(false)
      } else setHideNav(false)
      lastY.current = y
      // progress
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? y / h : 0)
      setShowSticky(y > 620)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // intersection observers
  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCifrasIn(true) }, { threshold: 0.25 })
    const el1 = document.getElementById("cifras")
    if (el1) obs1.observe(el1)
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGalIn(true) }, { threshold: 0.2 })
    const el2 = document.getElementById("galeria")
    if (el2) obs2.observe(el2)
    const fades = document.querySelectorAll(".fade-rise")
    const obs3 = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in") })
    }, { threshold: 0.15 })
    fades.forEach(f => obs3.observe(f))
    return () => { obs1.disconnect(); obs2.disconnect(); obs3.disconnect() }
  }, [])

  const [heroReady, setHeroReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 120); return () => clearTimeout(t) }, [])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="ÉTER — inicio">ÉTER<em>CENTRO MÉDICO</em></a>
          <div className="nav-links" role="list">
            {NAV_LINKS.map(l => (
              <a key={l.id} href={`#${l.id}`} role="listitem">{l.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="tel:+56228403315" className="link-underline desktop-only" style={{ marginRight: 6 }}>+56 2 2840 3315</a>
            <a href="#reserva" className="btn-tinta desktop-only">Agendar hora</a>
            <button className="hamburger" aria-label="Abrir menú" aria-expanded={mobileNav} onClick={() => setMobileNav(v => !v)}>
              {mobileNav ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-panel ${mobileNav ? "open" : ""}`}>
        {NAV_LINKS.map(l => <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)}>{l.label}</a>)}
        <a href="#reserva" className="btn-tinta" style={{ justifyContent: "center" }} onClick={() => setMobileNav(false)}>Agendar hora</a>
        <a href="tel:+56228403315" style={{ textAlign: "center", border: "none", fontSize: 11, color: "var(--gris)" }}>+56 2 2840 3315 · hola@etercentromedico.cl</a>
      </div>

      {/* HERO */}
      <section id="inicio" aria-label="Inicio">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="kicker">Centro médico · Providencia / Las Condes · 3 sedes</span>
              <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
                <span className="line"><span>Tu hora,</span></span>
                <span className="line"><span>sin esperar</span></span>
                <span className="line"><span>semanas.</span></span>
              </h1>
              <p className="hero-sub">
                Especialidades con bono electrónico, exámenes y resultado en portal. Pides hoy, te ves en 48h — FONASA, ISAPRE y particular, sin letra chica.
              </p>
              <div className="hero-ctas">
                <a href="#reserva" className="btn-tinta">Agendar hora</a>
                <a href="#precios" className="link-underline">Ver especialidades y precios →</a>
              </div>
              <p style={{ marginTop: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.08em", color: "var(--gris)", lineHeight: 1.6 }}>
                Hora con bono electrónico y resultado en portal el mismo día. Si no hay cupo en 48h, te lo decimos altiro — no te dejamos en espera eterna.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-points" aria-hidden />
              <img src={`${BASE}media/consulta.jpg`} alt="Box de consulta vacío con luz norte, camilla de lino claro y mesa de roble — calma clínica" loading="eager" />
              <div className="caption"><span>Box ÉTER — luz norte, 30 min por atención</span><span style={{ opacity: .7 }}>bono electrónico · portal paciente</span></div>
            </div>
          </div>
        </div>
        <div className="hero-band" aria-label="Beneficios">
          <span>Bono electrónico</span><span aria-hidden>·</span><span>Resultado en portal</span><span aria-hidden>·</span><span>48h o te avisamos</span><span aria-hidden>·</span><span>FONASA / ISAPRE / Particular</span>
        </div>
      </section>

      {/* CIFRAS + EVIDENCIA alias */}
      <section id="cifras" aria-label="Cifras">
        {/* alias anchor for evidencia */}
        <span id="evidencia" aria-hidden style={{ position: "absolute", top: 0 }} />
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ marginBottom: 24 }}>
            <span className="kicker">Evidencia, no promesa</span>
            <h2 className="h2" style={{ maxWidth: 560 }}>Un centro médico que te conoce por tu nombre.</h2>
            <p className="lead">Sin fotos de doctores posando. La evidencia es hora oportuna, no stock.</p>
          </div>
          <div className="cifras-grid">
            {CIFRAS.map((c, i) => {
              const v = useCountUp(cifrasIn, c.v)
              return (
                <div key={i} className="cifra">
                  <div className="cifra-num">
                    +{c.v >= 1000 ? v.toLocaleString("es-CL") : v}{c.suffix}
                  </div>
                  <div className="cifra-label">{c.label}</div>
                </div>
              )
            })}
          </div>
          <p className="cifra-nota">Medición último trimestre. +18.000 pacientes/año agregado 3 sedes · 92% horas con bono emitido en ≤48h. Sin letra chica.</p>
        </div>
      </section>

      {/* SERVICIOS índice 01-08 */}
      <section id="servicios" aria-label="Especialidades">
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap", alignItems: "end", marginBottom: 22 }}>
            <div>
              <span className="kicker">Especialidades · 14 en el mismo lugar</span>
              <h2 className="h2">No sabes si es trauma o medicina interna — te orientamos.</h2>
              <p className="lead">Lenguaje plano, duración real y precio desde con previsión. Toca para ver para quién es.</p>
            </div>
            <a href="#precios" className="link-underline">Ver valores por previsión →</a>
          </div>
          <div className="serv-list">
            {SERVICIOS.map((s, i) => (
              <div key={s.n} className={`serv-row ${openServ === i ? "open" : ""}`} onClick={() => setOpenServ(openServ === i ? null : i)} role="button" tabIndex={0} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpenServ(openServ === i ? null : i) }} aria-expanded={openServ === i}>
                <span className="serv-n">{s.n}</span>
                <span className="serv-title">{s.title}</span>
                <span className="serv-meta">{s.meta}</span>
                <span className="expand-icon" aria-hidden>{openServ === i ? "−" : "+"}</span>
                {openServ === i && (
                  <div className="serv-panel">
                    <p><strong style={{ color: "var(--tinta)" }}>{s.desc}</strong><br /><span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)" }}>Duración {s.meta} · Bono electrónico · Resultado en portal</span></p>
                    <span className="serv-price">{s.price}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 14, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)", lineHeight: 1.6 }}>
            ¿No sabes cuál elegir? Escríbenos por WhatsApp con tu síntoma y te indicamos la especialidad correcta antes de agendar — sin costo.
          </p>
        </div>
      </section>

      {/* ESPECIALISTAS */}
      <section id="especialistas" aria-label="Especialistas">
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ marginBottom: 22 }}>
            <span className="kicker">Equipo · mismo por sede</span>
            <h2 className="h2">No rotación sorpresa. Sabes quién te atiende.</h2>
            <p className="lead">Sin fotos de personas posando — el espacio y el instrumento hablan del rigor. Credencial verificable.</p>
          </div>
          <div className="esp-grid">
            <div className="esp-col fade-rise">
              <div className="esp-thumb"><img src={`${BASE}media/corridor.jpg`} alt="Pasillo luminoso de consulta vacía con luz natural" loading="lazy" /></div>
              <div className="esp-name">Dra. Valentina Rios — Medicina interna</div>
              <div className="esp-cred">Médico cirujano U. de Chile · Registro 18.442 · 12 años control crónico y chequeo</div>
              <div className="esp-focus">Enfoque: ordena tus exámenes en una sola visita y te deriva solo si corresponde.</div>
            </div>
            <div className="esp-col fade-rise">
              <div className="esp-thumb"><img src={`${BASE}media/still.jpg`} alt="Bodegón clínico sobre papel hueso con cuaderno, bono electrónico y taza" loading="lazy" /></div>
              <div className="esp-name">Dr. Martín Echeverría — Traumatología</div>
              <div className="esp-cred">Médico cirujano PUC · Traumatólogo · Registro 22.109 · 9 años musculoesquelético</div>
              <div className="esp-focus">Enfoque: indica kine o imagen el mismo día, sin derivarte a otro centro.</div>
            </div>
            <div className="esp-col fade-rise">
              <div className="esp-thumb"><img src={`${BASE}media/detail.jpg`} alt="Textura de camilla de lino pálido con luz rasante" loading="lazy" /></div>
              <div className="esp-name">Dra. Camila Soto — Ginecología</div>
              <div className="esp-cred">Médico cirujano U. de los Andes · Ginecóloga · Registro 19.883 · 10 años control y eco</div>
              <div className="esp-focus">Enfoque: control anual + ecografía en el mismo box, resultado en portal.</div>
            </div>
          </div>
          <p style={{ marginTop: 14, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)" }}>Mismo equipo por sede. Si hay cambio por urgencia, te avisa administración el mismo día.</p>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" aria-label="Precios">
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ marginBottom: 22 }}>
            <span className="kicker">Valores claros, sin sorpresas</span>
            <h2 className="h2">El valor se confirma al agendar según tu previsión.</h2>
            <p className="lead">Publicamos DESDE en CLP. Nunca partimos sin bono emitido y reembolso informado antes.</p>
          </div>
          <div className="precios-layout">
            <div>
              <table className="tabla" aria-label="Tabla de precios">
                <thead>
                  <tr><th>Prestación</th><th className="num">Desde</th><th>Previsión</th></tr>
                </thead>
                <tbody>
                  {PRECIOS.map(r => (
                    <tr key={r.nombre}>
                      <td>{r.nombre}</td>
                      <td className="num">{formatCLP(r.desde)}</td>
                      <td className="muted">{r.prev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="nota">
                Bono electrónico y reembolso informado antes. El valor final se confirma al agendar según previsión (FONASA A–D, ISAPRE o particular). Nunca partimos sin bono emitido. Boleta SII. Valores referenciales a mayo 2026.
              </div>
            </div>
            <aside className="side-box fade-rise">
              <span className="side-title">Sedes y horarios</span>
              <h4>Providencia — Manuel Montt 1.277</h4>
              <p>Lun–Vie 8:00–20:00 · Sáb 8:30–14:00</p>
              <h4>Las Condes — Rosario Norte 532</h4>
              <p>Lun–Vie 8:00–20:00 · Sáb 8:30–14:00</p>
              <h4>Santiago Centro — Huérfanos 1.140</h4>
              <p>Lun–Vie 8:00–19:00 · Sáb 8:30–14:00</p>
              <div className="filete" style={{ margin: "14px 0" }} />
              <p><strong style={{ color: "var(--tinta)" }}>Convenios:</strong> FONASA A–D, ISAPRE (todas), seguros complementarios. Bono electrónico en todas.</p>
              <p style={{ marginTop: 8 }}><strong style={{ color: "var(--tinta)" }}>Portal paciente:</strong> resultados, recetas y derivación en PDF firmado el mismo día.</p>
            </aside>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" aria-label="Método">
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ marginBottom: 22 }}>
            <span className="kicker">Cómo funciona</span>
            <h2 className="h2">Agenda, te atiendes, ves tu resultado. Sin fila de 40 minutos.</h2>
          </div>
          <div className="metodo-grid">
            <div className="metodo-col fade-rise">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Agenda</div>
              <div className="metodo-desc">Web 24/7, teléfono o WhatsApp. Eliges sede, especialidad y previsión; te enviamos link de bono electrónico con tu RUT. Si no hay cupo en 48h te lo decimos altiro.</div>
            </div>
            <div className="metodo-col fade-rise">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Atención</div>
              <div className="metodo-desc">30 min reales de box. Trae CI, orden y exámenes previos. Ficha clínica digital; si necesitas ECG/eco, se hace en el mismo lugar sin derivarte.</div>
            </div>
            <div className="metodo-col fade-rise">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Resultado</div>
              <div className="metodo-desc">Receta, orden y resultado en portal paciente el mismo día (PDF firmado). Derivación responsable si el caso no es de la especialidad.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" aria-label="Galería">
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ marginBottom: 22 }}>
            <span className="kicker">Espacio — luz norte</span>
            <h2 className="h2">Un box sereno, no un hospital frío.</h2>
            <p className="lead">Papel, roble claro y lino. Nada clínico genérico.</p>
          </div>
          <div className="gal-grid">
            <div className={`gal-card ken reveal ${galIn ? "in" : ""}`}>
              <img src={`${BASE}media/still.jpg`} alt="Bodegón clínico sobre papel hueso con ficha, lápiz y bono electrónico" loading="lazy" />
              <div className="gal-caption"><span>Ficha clínica · 30 min · bono electrónico</span><span>still 4:5</span></div>
            </div>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ transitionDelay: ".12s" }}>
              <img src={`${BASE}media/detail.jpg`} alt="Detalle macro de lino pálido de camilla con luz rasante" loading="lazy" />
              <div className="gal-caption"><span>Lino pálido · luz rasante · calma</span><span>detail 1:1</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-label="Preguntas frecuentes">
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ marginBottom: 22 }}>
            <span className="kicker">FAQ — sin letra chica</span>
            <h2 className="h2">Respuestas con teléfono visible.</h2>
            <p className="lead">Si tu caso no es de la especialidad, te derivamos responsablemente. Sin diagnósticos por web.</p>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span>{f.q}</span><span className="faq-icon" aria-hidden>{openFaq === i ? "−" : "+"}</span>
                </button>
                <div className="faq-a"><div className="faq-a-inner"><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" aria-label="Reserva">
        <div className="wrap section-pad">
          <div className="fade-rise" style={{ marginBottom: 22 }}>
            <span className="kicker">Reserva · responden administrativos de sede</span>
            <h2 className="h2" style={{ fontSize: "clamp(2.2rem,4.4vw,3.6rem)" }}>Agenda hoy. Atiéndete en 48h.</h2>
          </div>
          <div className="reserva-box fade-rise">
            <div className="reserva-left">
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)", margin: 0 }}>Teléfono central</p>
              <div className="tel"><a href="tel:+56228403315">+56 2 2840 3315</a></div>
              <p style={{ margin: "0 0 10px", color: "var(--gris)", lineHeight: 1.6 }}>hola@etercentromedico.cl · Reserva web 24/7 · Lun–Vie 8:00–20:00 · Sáb 8:30–14:00</p>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)", lineHeight: 1.6 }}>Responden administrativos de sede, no call center. Si no contestamos, devolvemos el llamado el mismo día.</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                <a href="tel:+56228403315" className="btn-tinta">Llamar ahora</a>
                <a href="mailto:hola@etercentromedico.cl" className="link-underline" style={{ alignSelf: "center" }}>hola@etercentromedico.cl →</a>
              </div>
              <div className="filete" style={{ margin: "18px 0" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, lineHeight: 1.6, color: "var(--gris)" }}>
                <div><strong style={{ color: "var(--tinta)" }}>Providencia</strong><br />Manuel Montt 1.277<br />8:00–20:00</div>
                <div><strong style={{ color: "var(--tinta)" }}>Las Condes</strong><br />Rosario Norte 532<br />8:00–20:00</div>
                <div><strong style={{ color: "var(--tinta)" }}>Santiago</strong><br />Huérfanos 1.140<br />8:00–19:00</div>
              </div>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={e => { e.preventDefault(); setFormOk(true) }} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span className="side-title">Pide tu hora — te respondemos hoy</span>
                  <input className="field" required placeholder="Nombre y apellido" aria-label="Nombre" />
                  <input className="field" required placeholder="Teléfono / WhatsApp" aria-label="Teléfono" />
                  <select className="field" defaultValue="" aria-label="Especialidad">
                    <option value="" disabled>Especialidad</option>
                    <option>Medicina interna</option><option>Pediatría</option><option>Ginecología</option><option>Traumatología</option><option>Dermatología</option><option>Otorrino</option><option>Cardiología</option><option>Procedimiento</option>
                  </select>
                  <select className="field" defaultValue="" aria-label="Previsión">
                    <option value="" disabled>Previsión</option>
                    <option>FONASA</option><option>ISAPRE</option><option>Particular</option>
                  </select>
                  <button type="submit" className="btn-tinta" style={{ justifyContent: "center" }}>Solicitar hora</button>
                  <p style={{ margin: 0, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--gris)", lineHeight: 1.5 }}>Al enviar aceptas contacto por teléfono/WhatsApp para coordinar bono y hora. Sin spam.</p>
                </form>
              ) : (
                <div style={{ background: "#fff", border: "1px solid var(--linea)", padding: 18 }}>
                  <p style={{ margin: "0 0 6px", fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", color: "var(--tinta)" }}>Solicitud enviada.</p>
                  <p style={{ margin: 0, color: "var(--gris)", lineHeight: 1.6, fontSize: ".92rem" }}>Te contacta administración de sede hoy mismo (hábil) para confirmar bono y hora en 48h. Si no ves nuestro mensaje, revisa spam o llama al <a href="tel:+56228403315" style={{ color: "var(--azul-clinico)", textDecoration: "underline" }}>+56 2 2840 3315</a>.</p>
                  <button className="link-underline" style={{ marginTop: 12, background: "none", border: "none", cursor: "pointer", padding: 0 }} onClick={() => setFormOk(false)}>Enviar otra →</button>
                </div>
              )}
            </div>
          </div>

          <footer className="footer">
            <span>© 2026 ÉTER SpA · RUT 76.XXX.XXX-X · Boleta SII · Providencia · Las Condes · Santiago</span>
            <span>Bono electrónico · FONASA · ISAPRE · Particular · Portal paciente</span>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} role="complementary" aria-label="Acción rápida">
        <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>¿Hora en 48h? · +56 2 2840 3315</span>
        <a href="#reserva" className="btn-tinta" style={{ padding: "10px 16px" }}>Agendar hora</a>
      </div>
    </>
  )
}
