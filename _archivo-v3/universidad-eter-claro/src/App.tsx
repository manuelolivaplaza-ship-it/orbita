import { useEffect, useRef, useState } from "react"

const base = import.meta.env.BASE_URL
const img = (p: string) => `${base}media/${p}`

// ---------- hooks ----------
function useNavBehavior() {
  const [compact, setCompact] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showSticky, setShowSticky] = useState(false)
  const lastY = useRef(0)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? y / h : 0)
      setCompact(y > 24)
      if (y > lastY.current && y > 120) setHidden(true)
      else setHidden(false)
      lastY.current = y
      // sticky after 40% of hero (~ 0.4 * innerHeight) or 600px
      setShowSticky(y > window.innerHeight * 0.4)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return { compact, hidden, progress, showSticky }
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-rise, .reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(Math.round(eased * to))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])
  return (
    <span ref={ref} className="tabular">
      {val.toLocaleString("es-CL")}
    </span>
  )
}

// ---------- data ----------
type Carrera = {
  n: string
  nombre: string
  sede: string
  duracion: string
  ramos: string
  campo: string
  arancel: number
  sello: string
}

const carreras: Carrera[] = [
  { n: "01", nombre: "Derecho", sede: "Santiago · Viña del Mar", duracion: "10 semestres", ramos: "Derecho Civil · Procesal · Constitucional", campo: "Estudios jurídicos, sector público y privado", arancel: 4980000, sello: "Acreditada 5 años" },
  { n: "02", nombre: "Ingeniería Comercial", sede: "Santiago · Concepción", duracion: "10 semestres", ramos: "Microeconomía · Finanzas · Marketing", campo: "Gestión, finanzas y emprendimiento", arancel: 4720000, sello: "Acreditada 5 años" },
  { n: "03", nombre: "Psicología", sede: "Santiago · Viña del Mar", duracion: "10 semestres", ramos: "Psicopatología · Evaluación · Intervención", campo: "Clínica, organizacional y educacional", arancel: 4290000, sello: "Acreditada 4 años" },
  { n: "04", nombre: "Enfermería", sede: "Santiago · Concepción", duracion: "10 semestres", ramos: "Anatomía · Cuidados · Farmacología", campo: "Clínicas, hospitales y atención primaria", arancel: 3850000, sello: "Acreditada 5 años" },
  { n: "05", nombre: "Arquitectura", sede: "Santiago", duracion: "10 semestres", ramos: "Taller · Estructuras · Urbanismo", campo: "Oficinas, obras y planificación urbana", arancel: 4620000, sello: "Acreditada 4 años" },
  { n: "06", nombre: "Medicina", sede: "Santiago", duracion: "12 semestres", ramos: "Anatomía · Fisiología · Clínica", campo: "Campos clínicos acreditados nacionalmente", arancel: 7850000, sello: "Acreditada 6 años" },
  { n: "07", nombre: "Diseño", sede: "Santiago · Viña del Mar", duracion: "10 semestres", ramos: "Tipografía · Producto · Interacción", campo: "Estudios, industria creativa y tech", arancel: 3980000, sello: "Acreditada 4 años" },
  { n: "08", nombre: "Pedagogía", sede: "Santiago · Concepción", duracion: "10 semestres", ramos: "Didáctica · Currículum · Evaluación", campo: "Colegios, formación y gestión educativa", arancel: 3420000, sello: "Acreditada 5 años" },
]

type PrecioRow = { carrera: string; arancel: number; matricula: number; beca: string; gratuidad: string }
const preciosRows: PrecioRow[] = [
  { carrera: "Derecho", arancel: 4980000, matricula: 420000, beca: "hasta 40%", gratuidad: "Sí*" },
  { carrera: "Ingeniería Comercial", arancel: 4720000, matricula: 420000, beca: "hasta 35%", gratuidad: "Sí*" },
  { carrera: "Psicología", arancel: 4290000, matricula: 380000, beca: "hasta 35%", gratuidad: "Sí" },
  { carrera: "Enfermería", arancel: 3850000, matricula: 380000, beca: "hasta 30%", gratuidad: "Sí" },
  { carrera: "Arquitectura", arancel: 4620000, matricula: 400000, beca: "hasta 30%", gratuidad: "Sí*" },
  { carrera: "Medicina", arancel: 7850000, matricula: 520000, beca: "hasta 25%", gratuidad: "No" },
]

const faqs = [
  { q: "¿Cuánto cuesta postular?", a: "Postular no tiene costo. La reserva de matrícula solo se realiza después de tu entrevista y con tu arancel y beneficios confirmados por escrito. Sin sorpresas. Si quieres, agendamos tu entrevista esta semana: +56 2 2840 3315. Respondemos en <24 h." },
  { q: "¿Hay gratuidad, becas y cómo sé si califico?", a: "Sí. Tenemos gratuidad (según Mineduc) y becas internas por puntaje PAES, NEM y situación socioeconómica. En tu simulación y entrevista te decimos con número exacto qué aplica en tu caso, antes de matricularte. Escríbenos a admision@eter.cl o +56 2 2840 3315." },
  { q: "¿Puedo convalidar ramos de otra universidad o IP?", a: "Sí. Evaluamos convalidación con tus programas y notas (certificado y malla de origen). Trae o envía tus antecedentes y te respondemos en 48 h hábiles con el porcentaje convalidable y el plan acortado. Consulta por admision@eter.cl." },
  { q: "¿Hay intercambio internacional y dónde?", a: "Sí. Convenios activos en España, Portugal, México y Colombia para Derecho, Comercial, Psicología, Arquitectura y Diseño. Estadías de 1 semestre desde tercer año, con convalidación directa. Te mostramos destinos por carrera en entrevista." },
  { q: "¿Dónde están las sedes y hay vespertino u online?", a: "Sedes demo: Santiago (Providencia), Viña del Mar y Concepción. Derecho, Comercial, Psicología y Pedagogía tienen opción vespertina; varias carreras combinan asignaturas híbridas. Todo con acceso a biblioteca y talleres. Horario Admisión: Lun–Vie 9:00–19:00 · Sáb 9:00–13:00." },
  { q: "¿Cómo es la entrevista de admisión y cuánto demora la respuesta?", a: "20 minutos, presencial u online. Es una conversación — no una prueba — para entender tu motivación y resolver arancel, becas y puntaje. Te damos respuesta escrita en <24 h. Agenda en +56 2 2840 3315 o admision@eter.cl." },
]

const evidencias = [
  { texto: "Entré por la malla y me quedé por los profesores. En segundo año ya estaba haciendo pasantía.", attr: "— Valentina, egresada Derecho 2023 · Fiscalía" },
  { texto: "El arancel que me simularon fue el que pagué. Sin letra chica, eso se agradece.", attr: "— Martín, Ing. Comercial 2022 · Banco" },
  { texto: "Postulé un viernes y el lunes tenía mi plan convalidado. Claridad total.", attr: "— Camila, Enfermería 2021 · Clínica" },
]

function fmtCLP(n: number) {
  return `$${n.toLocaleString("es-CL")}`
}

export function App() {
  const { compact, hidden, progress, showSticky } = useNavBehavior()
  const [heroReady, setHeroReady] = useState(false)
  const [carreraOpen, setCarreraOpen] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [conGratuidad, setConGratuidad] = useState(false)
  const [evIdx, setEvIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useReveal()

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  // carrusel evidencia 6s
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setEvIdx((p) => (p + 1) % evidencias.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  // factor gratuidad: solo visual, descuenta 35% referencia si toggle activo (demo)
  const calcArancel = (base: number) => (conGratuidad ? Math.round(base * 0.65) : base)

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      <nav className={`nav ${compact ? "compact" : ""} ${hidden ? "hidden" : ""}`} aria-label="Navegación principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="ÉTER Universidad Privada inicio">
            ÉTER <em>UNIVERSIDAD PRIVADA</em>
          </a>
          <div className="nav-links" role="list">
            <a href="#carreras">Carreras</a>
            <a href="#cifras">Cifras</a>
            <a href="#admision">Admisión</a>
            <a href="#precios">Aranceles</a>
            <a href="#faq">Preguntas</a>
            <span className="mono" style={{ fontSize: 11, color: "var(--gris)", letterSpacing: ".06em", display: "none" } as React.CSSProperties} aria-hidden> {/* tel desktop visible via CSS breakpoint maybe */} </span>
            <a href="#reserva" className="btn-acento" style={{ padding: "10px 18px" }}>
              Postular
            </a>
          </div>
          <button className="hamburger" aria-expanded={mobileOpen} aria-controls="mobile-panel" onClick={() => setMobileOpen((v) => !v)} aria-label="Abrir menú">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div id="mobile-panel" className={`mobile-panel ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <a href="#carreras" onClick={() => setMobileOpen(false)}>Carreras</a>
        <a href="#cifras" onClick={() => setMobileOpen(false)}>Cifras</a>
        <a href="#admision" onClick={() => setMobileOpen(false)}>Admisión</a>
        <a href="#precios" onClick={() => setMobileOpen(false)}>Aranceles</a>
        <a href="#faq" onClick={() => setMobileOpen(false)}>Preguntas</a>
        <a href="#reserva" onClick={() => setMobileOpen(false)} style={{ background: "var(--acento)", color: "var(--papel)", borderBottom: "none", textAlign: "center", padding: "14px" }}>Postular ahora</a>
        <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: "var(--gris)", textAlign: "center" }}>+56 2 2840 3315 · admision@eter.cl</span>
      </div>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} aria-hidden={!showSticky}>
        <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gris)" }}>Admisión 2026 abierta</span>
        <a href="#reserva" className="btn-acento" style={{ padding: "10px 18px" }}>Postular ahora</a>
      </div>

      {/* HERO */}
      <section id="inicio">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="kicker">Universidad privada · Acreditada 5 años</p>
              <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`} aria-label="Una universidad que se elige con claridad.">
                <span className="line"><span>Una universidad</span></span>
                <span className="line"><span>que se elige</span></span>
                <span className="line"><span>con claridad.</span></span>
              </h1>
              <p className="hero-sub">Carreras acreditadas, profesores con nombre y apellido, y un proceso de admisión que puedes entender en 5 minutos. Sin letra chica, sin vueltas.</p>
              <div className="hero-ctas">
                <a href="#reserva" className="btn-acento">Postular ahora</a>
                <a href="#carreras" className="link-underline">Conocer carreras</a>
              </div>
            </div>
            <div className="hero-right">
              <img
                src={img("hero.jpg")}
                alt="Patio interior de campus universitario vacío al mediodía, hormigón claro y madera, bancas vacías con luz norte difusa y orden obsesivo"
                width={1200}
                height={675}
                loading="eager"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
              />
              <div className="hero-caption">
                <span>Campus Providencia · Patio Central</span>
                <span className="mono" style={{ color: "var(--gris-suave)" }}>12:00 · luz norte</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-band" aria-label="Banda informativa admisión 2026">
          <span>Admisión 2026 abierta</span><span aria-hidden>·</span>
          <span>Acreditada 5 años</span><span aria-hidden>·</span>
          <span>Gratuidad y becas</span><span aria-hidden>·</span>
          <span>Sedes Santiago / Viña / Concepción</span>
        </div>
      </section>

      {/* CONFIANZA */}
      <section id="confianza" aria-label="Barra de confianza">
        <div className="wrap">
          <div className="confianza-inner">
            <span>Acreditada 5 años <span className="label">(2024–2029)</span></span>
            <span className="sep" aria-hidden />
            <span>96% empleabilidad 1er año</span>
            <span className="sep" aria-hidden />
            <span>42 carreras</span>
            <span className="sep" aria-hidden />
            <span>+18.000 titulados</span>
          </div>
        </div>
      </section>

      {/* CARRERAS */}
      <section id="carreras" className="section-pad">
        <div className="wrap">
          <p className="kicker fade-rise">Carreras</p>
          <div className="carreras-head">
            <h2 className="h2 fade-rise" style={{ marginBottom: 0 }}>Ocho decisiones con nombre propio.</h2>
            <p className="lead fade-rise" style={{ maxWidth: 420 }}>Toca cada fila para ver malla resumida, campo laboral y arancel referencia. Sin folleto genérico: datos por escrito.</p>
          </div>

          <div className="carreras-list fade-rise">
            {carreras.map((c, i) => (
              <div
                key={c.n}
                className={`carrera-row ${carreraOpen === i ? "open" : ""}`}
                onClick={() => setCarreraOpen(carreraOpen === i ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={carreraOpen === i}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCarreraOpen(carreraOpen === i ? null : i) } }}
              >
                <span className="carrera-n">{c.n}</span>
                <div>
                  <h3 className="carrera-title">{c.nombre}</h3>
                  <div className="carrera-ramos" style={{ marginTop: 6 }}>{c.sede} · {c.duracion}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="carrera-meta" style={{ display: "none" } as React.CSSProperties}>
                    {/* hidden on mobile via css, but keep for a11y */}
                    {c.sede}
                  </span>
                  <span className="carrera-arrow" aria-hidden>→</span>
                </div>
                <div className="carrera-exp" aria-hidden={carreraOpen !== i}>
                  <div className="carrera-exp-inner">
                    <div className="carrera-panel">
                      <div className="carrera-panel-left">
                        <strong>Malla resumida:</strong> {c.ramos} <br />
                        <span style={{ color: "var(--gris)" }}>Campo laboral:</span> {c.campo}
                      </div>
                      <div>
                        <div className="carrera-price">desde {fmtCLP(c.arancel)} CLP/año</div>
                        <div className="carrera-price" style={{ fontWeight: 400, color: "var(--gris)", fontSize: 11, marginTop: 4 }}>Matrícula + arancel referencia</div>
                        <span className="carrera-sello">{c.sello}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mono" style={{ fontSize: 11, color: "var(--gris)", marginTop: 14, letterSpacing: ".04em" }}>
            * Arancel referencia 2026. Valores finales se confirman por escrito tras entrevista. Nunca matriculamos sin entrevista previa.
          </p>
        </div>
      </section>

      {/* CIFRAS */}
      <section id="cifras" className="section-pad">
        <div className="wrap">
          <p className="kicker fade-rise">Cifras</p>
          <h2 className="h2 fade-rise" style={{ marginBottom: 28 }}>Prueba social en números tabulares.</h2>
          <div className="cifras-grid fade-rise">
            <div className="cifra">
              <div className="cifra-num"><em>+</em><CountUp to={42} /></div>
              <div className="cifra-label">carreras</div>
              <div className="cifra-nota">Pregrado acreditado, malla por competencias.</div>
            </div>
            <div className="cifra">
              <div className="cifra-num"><CountUp to={96} /><em>%</em></div>
              <div className="cifra-label">empleabilidad 1er año</div>
              <div className="cifra-nota">MiFuturo / encuestas egresados 2023–24.</div>
            </div>
            <div className="cifra">
              <div className="cifra-num"><CountUp to={5} /></div>
              <div className="cifra-label">años acreditada</div>
              <div className="cifra-nota">2024–2029 · Comisión Nacional de Acreditación.</div>
            </div>
            <div className="cifra">
              <div className="cifra-num"><em>+</em><CountUp to={18000} /></div>
              <div className="cifra-label">titulados</div>
              <div className="cifra-nota">Red de egresados en sector público y privado.</div>
            </div>
          </div>

          <div className="cifras-media">
            <div style={{ border: "1px solid var(--linea)", background: "var(--superficie)", padding: 12 }}>
              <img src={img("biblioteca.jpg")} alt="Sala de biblioteca luminosa con estanterías y mesas vacías, luz natural lateral documental serena sin ocupantes" width={800} height={1000} style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
              <p className="mono" style={{ fontSize: 11, color: "var(--gris)", marginTop: 8, textTransform: "uppercase", letterSpacing: ".06em" }}>Biblioteca · luz lateral · silencio medido</p>
            </div>
            <div style={{ border: "1px solid var(--linea)", background: "var(--superficie)", padding: 12 }}>
              <img src={img("laboratorio.jpg")} alt="Laboratorio universitario ordenado con mesas limpias e instrumentos alineados, sin ocupantes, luz clínica suave" width={1200} height={675} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
              <p className="mono" style={{ fontSize: 11, color: "var(--gris)", marginTop: 8, textTransform: "uppercase", letterSpacing: ".06em" }}>Taller / laboratorio · orden quirúrgico</p>
              <div style={{ marginTop: 16, borderTop: "1px solid var(--linea)", paddingTop: 12 }}>
                <img src={img("detalle.jpg")} alt="Macro de papel hueso con sello seco y tipografía en relieve sobre fondo cálido con luz rasante" width={800} height={800} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
                <p className="mono" style={{ fontSize: 11, color: "var(--gris)", marginTop: 8, textTransform: "uppercase", letterSpacing: ".06em" }}>Detalle · sello seco · relieve tipográfico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCIA */}
      <section id="evidencia" className="section-pad">
        <div className="wrap">
          <p className="kicker fade-rise">Evidencia</p>
          <h2 className="h2 fade-rise" style={{ marginBottom: 10 }}>Egresados con nombre, no folletos.</h2>
          <p className="lead fade-rise" style={{ marginBottom: 24 }}>Tres citas reales. Sin estrellas, sin fotos de stock, sin badges. Solo palabra y trayectoria verificable.</p>

          <div
            className="fade-rise"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-live="polite"
            aria-label="Carrusel de testimonios"
            style={{ border: "1px solid var(--linea)", background: "var(--papel)", padding: "22px 22px 18px" }}
          >
            {/* contenedor relativo con altura fija para fade */}
            <div className="evidencia-track" style={{ position: "relative", minHeight: 140 }}>
              {evidencias.map((ev, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: 12,
                    alignItems: "start",
                    opacity: evIdx === idx ? 1 : 0,
                    transition: "opacity 600ms ease",
                    position: evIdx === idx ? "relative" : "absolute",
                    inset: evIdx === idx ? "auto" : 0,
                    pointerEvents: evIdx === idx ? "auto" : "none",
                  }}
                  aria-hidden={evIdx !== idx}
                >
                  <span className="evidencia-mark" aria-hidden>“</span>
                  <div>
                    <p className="evidencia-text">“{ev.texto}”</p>
                    <p className="evidencia-attr">{ev.attr}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="evidencia-controls" role="tablist" aria-label="Controles carrusel evidencia">
              {evidencias.map((_, idx) => (
                <button
                  key={idx}
                  className={`evidencia-dot ${evIdx === idx ? "active" : ""}`}
                  role="tab"
                  aria-selected={evIdx === idx}
                  aria-label={`Testimonio ${idx + 1}`}
                  onClick={() => setEvIdx(idx)}
                />
              ))}
              <span className="mono" style={{ marginLeft: 12, fontSize: 11, color: "var(--gris)", letterSpacing: ".08em" }}>{paused ? "pausado" : "avance 6s · pausa al pasar el mouse"}</span>
            </div>
          </div>

          <div className="empleadores fade-rise" aria-label="Sellos de acreditación y empleadores como filetes tipográficos">
            <span>CNA 5 años</span><span aria-hidden>·</span>
            <span>MiFuturo</span><span aria-hidden>·</span>
            <span>Fiscalía</span><span aria-hidden>·</span>
            <span>Clínica Las Condes</span><span aria-hidden>·</span>
            <span>Banco Central</span><span aria-hidden>·</span>
            <span>Estudio Jurídico</span>
          </div>
        </div>
      </section>

      {/* ADMISION */}
      <section id="admision" className="section-pad">
        <div className="wrap">
          <p className="kicker fade-rise">Admisión</p>
          <h2 className="h2 fade-rise">De curiosidad a matrícula, sin vueltas.</h2>
          <p className="lead fade-rise" style={{ marginBottom: 28 }}>Cuatro pasos, tiempos reales y documentos claros. Sin letra chica, sin call center externo.</p>

          <div className="admision-grid fade-rise">
            <div className="paso">
              <p className="paso-num">01</p>
              <h3 className="paso-title">Simula tu puntaje</h3>
              <p className="paso-meta">2 min · Sin documentos · Online</p>
              <p className="paso-desc">Ingresa tu PAES/NEM y ve en qué carreras quedas y qué beca referencial aplica. Resultado inmediato.</p>
            </div>
            <div className="paso">
              <p className="paso-num">02</p>
              <h3 className="paso-title">Postula online (10 min)</h3>
              <p className="paso-meta">10 min · Cédula + NEM · Gratuito</p>
              <p className="paso-desc">Formulario breve y carga de documentos. Te llega comprobante al correo al instante.</p>
            </div>
            <div className="paso">
              <p className="paso-num">03</p>
              <h3 className="paso-title">Entrevista 20 min</h3>
              <p className="paso-meta">20 min · Presencial u online · Equipo Admisión</p>
              <p className="paso-desc">Conversación honesta: malla, arancel final, becas y gratuidad. Sin prueba sorpresa.</p>
            </div>
            <div className="paso">
              <p className="paso-num">04</p>
              <h3 className="paso-title">Matrícula</h3>
              <p className="paso-meta">24 h · Contrato simple · Por escrito</p>
              <p className="paso-desc">Confirmas con tu arancel y beneficios por escrito. Nunca matriculamos sin entrevista previa.</p>
            </div>
          </div>

          <div style={{ marginTop: 22, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#precios" className="btn-acento">Simular postulación</a>
            <span className="mono" style={{ fontSize: 11, color: "var(--gris)" }}>Te lleva a aranceles con simulador · respuesta &lt;24 h</span>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section-pad">
        <div className="wrap">
          <p className="kicker fade-rise">Aranceles</p>
          <h2 className="h2 fade-rise">Aranceles claros, sin sorpresas.</h2>
          <p className="lead fade-rise" style={{ marginBottom: 18 }}>Valores anuales de referencia en pesos chilenos, con separador chileno y sin decimales. El final se confirma por escrito tras tu postulación.</p>

          <div className="precios-toggle fade-rise" role="group" aria-label="Alternar gratuidad">
            <button className={`toggle-btn ${!conGratuidad ? "active" : ""}`} aria-pressed={!conGratuidad} onClick={() => setConGratuidad(false)}>Sin gratuidad</button>
            <button className={`toggle-btn ${conGratuidad ? "active" : ""}`} aria-pressed={conGratuidad} onClick={() => setConGratuidad(true)}>Con gratuidad</button>
            <span className="mono" style={{ fontSize: 11, color: "var(--gris)", letterSpacing: ".06em" }}>{conGratuidad ? "Referencia con beneficio aplicado (−35% demo) · confirmación por escrito" : "Valores sin beneficio · simulación en 2 min"}</span>
          </div>

          <div className="tabla-wrap fade-rise" style={{ marginTop: 14 }}>
            <table className="tabla" aria-label="Tabla de aranceles por carrera">
              <thead>
                <tr>
                  <th>Carrera</th>
                  <th style={{ textAlign: "right" }}>Arancel anual</th>
                  <th style={{ textAlign: "right" }}>Matrícula</th>
                  <th>Beca % ref</th>
                  <th>Gratuidad</th>
                </tr>
              </thead>
              <tbody>
                {preciosRows.map((r) => (
                  <tr key={r.carrera} className="highlight">
                    <td><strong style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: "1.05rem" }}>{r.carrera}</strong></td>
                    <td className="num tabular">{fmtCLP(calcArancel(r.arancel))}</td>
                    <td className="num tabular muted">{fmtCLP(r.matricula)}</td>
                    <td className="muted">{r.beca}</td>
                    <td className="muted">{r.gratuidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="simula-row fade-rise" aria-label="Llamado a simulación">
            <div>
              <strong>Simula tu arancel en 2 min</strong><br />
              <span>Elige carrera y ve tu arancel con / sin gratuidad antes de postular.</span>
            </div>
            <a href="#reserva" className="btn-acento">Simular ahora</a>
          </div>

          <div className="precios-nota fade-rise">
            El arancel final depende de la carrera y beneficios. Se confirma por escrito tras tu postulación. Nunca matriculamos sin entrevista previa.
            <br />
            <span className="mono" style={{ fontSize: 11 }}>Admisión 2026 · Sedes Santiago / Viña / Concepción · Admisión responde en &lt;24 h · admision@eter.cl · +56 2 2840 3315</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad">
        <div className="wrap">
          <p className="kicker fade-rise">Preguntas</p>
          <h2 className="h2 fade-rise">Respuestas que sí caben en un mensaje.</h2>
          <div className="faq-list fade-rise" style={{ marginTop: 18 }}>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i} aria-controls={`faq-a-${i}`}>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden>+</span>
                </button>
                <div id={`faq-a-${i}`} className="faq-a" aria-hidden={faqOpen !== i}>
                  <div className="faq-a-inner">
                    <p>{f.a} {f.q.includes("Cuánto cuesta") ? null : <a href="tel:+56228403315">+56 2 2840 3315</a>}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" className="section-pad">
        <div className="wrap">
          <div className="reserva-box fade-rise">
            <div className="reserva-left">
              <p className="kicker">Conversemos</p>
              <h2 className="reserva-head">Conversemos tu postulación</h2>
              <p className="tel tabular"><a href="tel:+56228403315">+56 2 2840 3315</a></p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginTop: 12 }}>
                <a href="tel:+56228403315" className="btn-acento">Agendar entrevista</a>
                <span className="mono" style={{ fontSize: 11, color: "var(--gris)" }}>Respuesta Admisión en &lt;24 h</span>
              </div>
              <p className="mono" style={{ fontSize: 11, color: "var(--gris)", marginTop: 14, letterSpacing: ".06em" }}>Responde Admisión en &lt;24 h. Sin call center externo.</p>
              <div style={{ marginTop: 18, display: "grid", gap: 8, fontSize: 13, color: "var(--gris)", lineHeight: 1.6 }}>
                <div><strong style={{ color: "var(--tinta)" }}>Correo</strong> · admision@eter.cl</div>
                <div><strong style={{ color: "var(--tinta)" }}>Horario</strong> · Lun–Vie 9:00–19:00 · Sáb 9:00–13:00</div>
                <div><strong style={{ color: "var(--tinta)" }}>Dirección</strong> · Providencia, Santiago — Campus Providencia</div>
              </div>
              <div style={{ marginTop: 16, display: "flex", gap: 10, alignItems: "center", border: "1px solid var(--linea)", padding: "12px 14px", background: "var(--papel)" }}>
                <span style={{ width: 6, height: 6, background: "var(--acento)", display: "inline-block", borderRadius: 999 }} aria-hidden />
                <span className="mono" style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris)" }}>Providencia · acceso Metro · estacionamiento convenido · accesibilidad universal</span>
              </div>
            </div>
            <div className="reserva-right">
              <p className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gris)", margin: "0 0 4px" }}>Solicitar entrevista</p>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Gracias — Admisión te contacta en menos de 24 h con tu arancel confirmado por escrito.") }}
                style={{ display: "grid", gap: 12 }}
                aria-label="Formulario agendar entrevista"
              >
                <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris)" }}>
                  Nombre
                  <input required placeholder="Tu nombre" className="field" aria-label="Nombre" />
                </label>
                <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris)" }}>
                  Correo
                  <input required type="email" placeholder="tu@correo.cl" className="field" aria-label="Correo" />
                </label>
                <div className="form-two">
                  <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris)" }}>
                    Carrera de interés
                    <select required className="field" defaultValue="" aria-label="Carrera de interés">
                      <option value="" disabled>Elige</option>
                      {carreras.map((c) => <option key={c.n} value={c.nombre}>{c.nombre}</option>)}
                    </select>
                  </label>
                  <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris)" }}>
                    Sede
                    <select required className="field" defaultValue="" aria-label="Sede">
                      <option value="" disabled>Elige</option>
                      <option>Santiago</option>
                      <option>Viña del Mar</option>
                      <option>Concepción</option>
                    </select>
                  </label>
                </div>
                <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gris)" }}>
                  Mensaje
                  <textarea placeholder="Cuéntanos puntaje, NEM o dudas de arancel" rows={3} className="field" style={{ resize: "vertical" }} aria-label="Mensaje" />
                </label>
                <button type="submit" className="btn-acento" style={{ justifyContent: "center" }}>Agendar entrevista</button>
                <p className="mono" style={{ fontSize: 11, color: "var(--gris)", textAlign: "center", margin: "2px 0 0" }}>Sin compromiso · confirmación por escrito</p>
              </form>
            </div>
          </div>

          <footer className="footer">
            <span>© 2026 ÉTER — Universidad Privada · ÉTER Universidad SpA · RUT 76.XXX.XXX-X</span>
            <span>SII · Política de privacidad · Providencia, Santiago · admision@eter.cl</span>
          </footer>
        </div>
      </section>
    </>
  )
}
