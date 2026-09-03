import { useEffect, useRef, useState } from "react"

const BASE = import.meta.env.BASE_URL

function useCountUp(target: number, active: boolean, suffix = "", prefix = "") {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const dur = 1200
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return `${prefix}${val}${suffix}`
}

export function App() {
  const [openNav, setOpenNav] = useState(false)
  const [compact, setCompact] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeServ, setActiveServ] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [showSticky, setShowSticky] = useState(false)
  const [cifrasIn, setCifrasIn] = useState(false)
  const [galIn, setGalIn] = useState(false)
  const cifrasRef = useRef<HTMLDivElement>(null)
  const galRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const lastY = useRef(0)
  const [scrollP, setScrollP] = useState(0)
  useEffect(() => {
    const onP = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setScrollP(h > 0 ? window.scrollY / h : 0)
    }
    window.addEventListener("scroll", onP, { passive: true })
    onP()
    return () => window.removeEventListener("scroll", onP)
  }, [])

  // nav scroll behavior
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setCompact(y > 24)
      setHidden(y > lastY.current && y > 120 && !openNav)
      setShowSticky(y > 700)
      lastY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [openNav])

  // hero reveal
  useEffect(() => {
    const els = document.querySelectorAll(".hero-h1 .line span")
    els.forEach((el, i) => {
      const h = el as HTMLElement
      h.style.transition = `transform .78s cubic-bezier(.22,1,.36,1) ${i * 0.12}s`
      requestAnimationFrame(() => (h.style.transform = "translateY(0)"))
    })
  }, [])

  // observers
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCifrasIn(true) }, { threshold: 0.3 })
    if (cifrasRef.current) io.observe(cifrasRef.current)
    const io2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGalIn(true) }, { threshold: 0.2 })
    if (galRef.current) io2.observe(galRef.current)
    return () => { io.disconnect(); io2.disconnect() }
  }, [])

  // custom cursor
  useEffect(() => {
    const el = cursorRef.current
    if (!el || window.matchMedia("(pointer:coarse)").matches || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; el.style.opacity = "1" }
    const onLeave = () => { el.style.opacity = "0" }
    const loop = () => { x += (tx - x) * 0.14; y += (ty - y) * 0.14; el.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`; raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseout", onLeave)
    const links = document.querySelectorAll("a,button")
    const enter = () => el.classList.add("big")
    const leave = () => el.classList.remove("big")
    links.forEach(l => { l.addEventListener("mouseenter", enter); l.addEventListener("mouseleave", leave) })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseout", onLeave)
      links.forEach(l => { l.removeEventListener("mouseenter", enter); l.removeEventListener("mouseleave", leave) })
    }
  }, [])

  const servicios = [
    { idx: "01", name: "Medicina interna", desc: "Evaluación integral adulto, manejo crónico y chequeo.", dur: "30 min", precio: "desde $45.000" },
    { idx: "02", name: "Cardiología", desc: "Riesgo cardiovascular, ECG y seguimiento.", dur: "30 min", precio: "desde $58.000" },
    { idx: "03", name: "Dermatología premium", desc: "Clínica estética médica y dermatología.", dur: "30 min", precio: "desde $62.000" },
    { idx: "04", name: "Traumatología", desc: "Lesiones, infiltraciones y control post-quirúrgico.", dur: "30 min", precio: "desde $55.000" },
    { idx: "05", name: "Ginecología", desc: "Control, ecografía y prevención.", dur: "30 min", precio: "desde $52.000" },
    { idx: "06", name: "Procedimientos ambulatorios", desc: "ECG, ecografía, infiltraciones y curaciones.", dur: "20–30 min", precio: "desde $28.000" },
  ]

  const faqs = [
    { q: "¿Cómo agendo con bono electrónico prioritario?", a: "Agenda web 24/7 o al +56 2 2840 3315. Emitimos el bono al confirmar según tu previsión (FONASA/ISAPRE). Llega a tu correo y queda asociado a tu ficha. Nunca atendemos sin bono emitido." },
    { q: "¿Qué previsión cubren y cómo es el reembolso?", a: "FONASA, ISAPRE y particular. El valor final se confirma al agendar según tu plan. Si tu ISAPRE es con reembolso, te entregamos boleta y documentación para reembolso." },
    { q: "¿Qué llevo a la primera atención?", a: "Cédula de identidad, orden si aplica, exámenes previos y lista de medicamentos. Si es control, trae exámenes recientes. Todo queda en portal paciente después." },
    { q: "¿Portal paciente — cómo veo exámenes y recetas?", a: "Tras tu primera atención se activa tu acceso. Ves resultados, recetas y derivaciones en PDF. Si tu caso no es de nuestra especialidad, te derivamos donde corresponde." },
    { q: "¿Atienden telemedicina premium cuándo corresponde?", a: "Sí, para controles y seguimiento cuando el médico lo indica. La primera evaluación es presencial. Telemedicina con receta electrónica y bono según cobertura." },
    { q: "¿Política de anulación y qué pasa si el médico se ausenta?", a: "Anulación sin costo hasta 6h antes por web o teléfono. Si el médico se ausenta por urgencia, te re-agendamos prioritario el mismo día o siguiente hábil y avisamos por WhatsApp." },
  ]

  const c1 = useCountUp(15, cifrasIn)
  const c2 = useCountUp(14, cifrasIn)
  const c3 = useCountUp(94, cifrasIn)
  const c4 = useCountUp(22, cifrasIn)

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${scrollP})` }} />
      <div ref={cursorRef} className="cursor" aria-hidden />

      <nav className={`nav ${compact ? "compact" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-logo">NOCTUA<span>CENTRO MÉDICO</span></a>
          <div className={`nav-links ${openNav ? "open" : ""}`}>
            <a href="#filosofia" onClick={() => setOpenNav(false)}>Filosofía</a>
            <a href="#servicios" onClick={() => setOpenNav(false)}>Especialidades</a>
            <a href="#precios" onClick={() => setOpenNav(false)}>Precios</a>
            <a href="#metodo" onClick={() => setOpenNav(false)}>Método</a>
            <a href="#faq" onClick={() => setOpenNav(false)}>FAQ</a>
            <a href="#reserva" className="nav-cta" onClick={() => setOpenNav(false)}>Agendar hora</a>
          </div>
          <button className="nav-burger" aria-label="Menú" onClick={() => setOpenNav(v => !v)}>☰</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" ref={heroRef}>
        <div className="hero-grid">
          <div>
            <p className="kicker">Centro médico premium · Las Condes / Vitacura · Hora exacta</p>
            <h1 className="hero-h1">
              <span className="line"><span>Medicina</span></span>
              <span className="line"><span>sin sala</span></span>
              <span className="line"><span>llena.</span></span>
            </h1>
            <p className="hero-sub">Especialidades con hora exacta, bono electrónico prioritario y portal paciente. 30 minutos por atención — sin atraso en cadena.</p>
            <div className="hero-ctas">
              <a href="#reserva" className="btn-teal">Agendar hora premium →</a>
              <a href="#servicios" className="btn-ghost">Ver especialidades</a>
            </div>
            <div className="hero-badges">
              <span>Bono electrónico prioritario</span>
              <span>Portal paciente</span>
              <span>Estacionamiento privado</span>
            </div>
          </div>
          <div className="hero-media">
            <img src={`${BASE}media/lab.jpg`} alt="Consulta nocturna vacía con camilla oscura y luz cálida rasante" loading="eager" />
            <div className="hero-media-cap">
              <p>Consulta NOCTUA · noche · luz cálida empotrada</p>
              <p>Las Condes</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia">
        <div className="wrap filo-grid">
          <div>
            <p className="kicker">Filosofía</p>
            <h2 className="filo-big">La hora<br />se respeta.</h2>
          </div>
          <div>
            <p className="filo-copy"><strong>30 minutos por paciente. Sin sobrecupo.</strong> Si tu caso no es de nuestra especialidad, te derivamos donde corresponde — no te retenemos para facturar. La ficha queda impecable y el resultado no se pierde entre papeles.</p>
            <p className="filo-quote">Hora exacta. Si nos atrasamos 15 min, te avisamos por WhatsApp — no te dejamos sentado mirando el reloj.</p>
            <p className="lead" style={{ marginTop: 18, fontSize: 13 }}>Atención premium discreta: sin sala llena, con estacionamiento privado y acceso directo. Reserva web prioritaria 24/7.</p>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section id="cifras">
        <div className="wrap">
          <div className="cifras-grid" ref={cifrasRef}>
            <div className="cifra">
              <div className="cifra-num">+{c1}<small> años</small></div>
              <div className="cifra-label">Trayectoria equipo</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">+{c2}</div>
              <div className="cifra-label">Especialidades</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">{c3}<small>%</small></div>
              <div className="cifra-label">Atención a la hora</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">+{c4}</div>
              <div className="cifra-label">Médicos mismo equipo</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <div className="wrap">
          <p className="kicker">Especialidades</p>
          <h2>Índice 01 — 06</h2>
          <p className="lead">Seis líneas clínicas. Cada una con duración real y precio desde. Sin derivaciones innecesarias.</p>
          <div className="serv-list">
            {servicios.map((s, i) => (
              <div key={s.idx}>
                <div
                  className="serv-row"
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeServ === i}
                  onClick={() => setActiveServ(activeServ === i ? null : i)}
                  onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveServ(activeServ === i ? null : i) } }}
                >
                  <span className="serv-idx">{s.idx}</span>
                  <span className="serv-name">{s.name}</span>
                  <span className="serv-arrow">{activeServ === i ? "—" : "→"}</span>
                </div>
                {activeServ === i && (
                  <div className="serv-panel">
                    <p><strong>{s.desc}</strong> · Incluye ficha y portal paciente.</p>
                    <span className="serv-meta">{s.dur} · {s.precio}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios">
        <div className="wrap">
          <div className="precios-head">
            <div>
              <p className="kicker">Tarifas</p>
              <h2>Precios por bono,<br />sin sorpresas.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 360 }}>Valores desde según previsión. Confirmación al agendar.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="tabla">
              <thead>
                <tr><th>Prestación</th><th>Desde</th><th>FONASA / ISAPRE / Particular</th></tr>
              </thead>
              <tbody>
                <tr><td>Consulta general</td><td className="price">$35.000</td><td className="muted">Bono electrónico · copago según plan</td></tr>
                <tr><td>Consulta especialidad premium</td><td className="price">$52.000</td><td className="muted">Cardiología / Dermatología / Ginecología</td></tr>
                <tr><td>Control</td><td className="price">$32.000</td><td className="muted">Seguimiento mismo especialista</td></tr>
                <tr><td>ECG / ecografía</td><td className="price">$28.000</td><td className="muted">Ambulatorio · informe en portal</td></tr>
                <tr><td>Procedimiento menor</td><td className="price">$42.000</td><td className="muted">Infiltración / curación · según insumo</td></tr>
              </tbody>
            </table>
          </div>
          <p className="nota"><strong>Bono electrónico prioritario.</strong> El valor final se confirma al agendar según previsión. Nunca atendemos sin bono emitido y ficha creada. Valores referenciales CLP, no incluyen insumos especiales.</p>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo">
        <div className="wrap">
          <p className="kicker">Método</p>
          <h2>Tres pasos. Sin fila.</h2>
          <div className="metodo-grid">
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <h3>Agenda prioritaria</h3>
              <p>Reserva web 24/7 o telefónica. Emitimos tu bono electrónico al confirmar.</p>
              <ul><li>Elige especialidad y médico</li><li>Confirmación por WhatsApp</li><li>Bono asociado a tu ficha</li></ul>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <h3>Atención 30 min</h3>
              <p>Tiempo real para escucharte. Sin sobrecupo ni atraso en cadena.</p>
              <ul><li>Trae CI, orden y exámenes</li><li>Estacionamiento privado</li><li>Acceso directo sin sala llena</li></ul>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <h3>Portal paciente</h3>
              <p>Resultado, receta y derivación si aplica. Todo en tu portal.</p>
              <ul><li>Exámenes y recetas en PDF</li><li>Derivación honesta si no es nuestra área</li><li>Seguimiento sin perder ficha</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria">
        <div className="wrap">
          <p className="kicker">Galería</p>
          <h2>La consulta como pieza iluminada.</h2>
          <div className="gal-grid" ref={galRef}>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`}>
              <img src={`${BASE}media/measure.jpg`} alt="Bodegón clínico: fonendo de acero y cuaderno sobre piedra oscura" loading="lazy" style={{ aspectRatio: "4/5" }} />
              <div className="gal-cap"><p>01 · Instrumental · acero · piedra oscura · luz cálida</p><p>4:5</p></div>
            </div>
            <div className={`gal-card wide reveal ${galIn ? "in" : ""}`} style={{ transitionDelay: ".14s" }}>
              <img src={`${BASE}media/texture.jpg`} alt="Macro textura lino oscuro con luz rasante cálida" loading="lazy" />
              <div className="gal-cap"><p>02 · Lino oscuro · luz rasante · tacto clínico</p><p>1:1</p></div>
            </div>
          </div>
          <div style={{ marginTop: 18, border: "1px solid var(--filete)", overflow: "hidden" }} className={`reveal ${galIn ? "in" : ""}`}>
            <img src={`${BASE}media/corridor.jpg`} alt="Pasillo nocturno simétrico con focos cálidos empotrados" loading="lazy" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} />
          </div>
          <div className="gal-cap" style={{ border: "1px solid var(--filete)", borderTop: "none" }}><p>03 · Pasillo · noche institucional · simetría · sin personas</p><p>16:9</p></div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <p className="kicker">Preguntas honestas</p>
          <h2>Sin letra chica.</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span>{f.q}</span>
                  <span className="faq-icon">{openFaq === i ? "×" : "+"}</span>
                </button>
                <div className="faq-a"><div><p>{f.a} <a href="tel:+56228403315">+56 2 2840 3315</a></p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva">
        <div className="wrap reserva-grid">
          <div>
            <p className="kicker">Reserva</p>
            <h2>Hora exacta.<br />Sin espera.</h2>
            <a href="tel:+56228403315" className="tel">+56 2 2840 3315</a>
            <div className="reserva-info">
              <p><strong style={{ color: "var(--hueso)" }}>hola@noctuacentromedico.cl</strong></p>
              <p>Las Condes / Vitacura — estacionamiento privado, acceso directo</p>
              <p>Lun–Vie 8:00–20:30 · Sáb 9:00–14:00 · Reserva web prioritaria 24/7</p>
            </div>
            <div style={{ marginTop: 20 }}>
              <a href="tel:+56228403315" className="btn-teal">Agendar hora premium →</a>
            </div>
            <p className="micro">Responde administración premium, no bot. Si no contestamos, devolvemos el llamado en 30 min hábil.</p>
          </div>
          <div style={{ background: "var(--fondo)", border: "1px solid var(--filete)", padding: 24 }}>
            <p style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--teal)", margin: "0 0 12px", fontWeight: 600 }}>Solicitar hora</p>
            <p style={{ color: "var(--gris-calido)", fontSize: 13, lineHeight: 1.7, margin: "0 0 16px" }}>Cuéntanos especialidad y previsión. Confirmamos bono y hora por WhatsApp.</p>
            <form onSubmit={e => e.preventDefault()} style={{ display: "grid", gap: 10 }}>
              <input placeholder="Nombre" aria-label="Nombre" style={{ background: "var(--superficie)", border: "1px solid var(--filete)", color: "var(--hueso)", padding: "12px 14px", fontSize: 13, outline: "none" }} />
              <input placeholder="Teléfono" aria-label="Teléfono" style={{ background: "var(--superficie)", border: "1px solid var(--filete)", color: "var(--hueso)", padding: "12px 14px", fontSize: 13, outline: "none" }} />
              <select aria-label="Especialidad" style={{ background: "var(--superficie)", border: "1px solid var(--filete)", color: "var(--hueso)", padding: "12px 14px", fontSize: 13 }}>
                <option>Medicina interna</option><option>Cardiología</option><option>Dermatología premium</option><option>Traumatología</option><option>Ginecología</option><option>Procedimiento</option>
              </select>
              <button type="submit" className="btn-teal" style={{ justifyContent: "center" }}>Solicitar hora</button>
            </form>
            <p style={{ fontSize: 10, color: "var(--gris-calido)", marginTop: 10, lineHeight: 1.5 }}>Al enviar aceptas contacto para coordinar tu hora. Sin spam.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p>NOCTUA — Centro Médico · Las Condes / Vitacura · © 2026</p>
          <p>Bono electrónico prioritario · Portal paciente · Estacionamiento privado · hola@noctuacentromedico.cl</p>
        </div>
      </footer>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`}>
        <a href="#reserva">Agendar hora — +56 2 2840 3315</a>
      </div>
    </>
  )
}
