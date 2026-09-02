import { useEffect, useState, useRef } from "react"

const NAV = [
  { label: "Facultades", href: "#facultades-carreras" },
  { label: "Vías", href: "#admision-vias" },
  { label: "Aranceles", href: "#aranceles-beneficios" },
  { label: "Campus", href: "#campus-talleres" },
  { label: "Acreditación", href: "#acreditacion-empleabilidad" },
  { label: "FAQ", href: "#preguntas-academicas" },
]

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])
  return scrolled
}

function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`} role="banner">
        <div className="header-inner">
          <a href="#inicio" className="header-brand" aria-label="ETER Universidad Privada - Inicio">
            <span className="header-brand__logo">ETER</span>
            <span className="header-brand__sub">UNIVERSIDAD PRIVADA</span>
          </a>

          <nav className="header-nav" aria-label="Navegación principal">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="tel:+56229468200" className="header-tel">+56 2 2946 8200</a>
            <a href="#agenda-admision" className="btn-cta">Agenda entrevista</a>
          </div>

          <button
            className="header-burger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="drawer-eter"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="header-burger__icon" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="drawer-eter"
        className={`drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="drawer-nav" aria-label="Navegación móvil">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <div className="drawer-actions">
          <a href="tel:+56229468200" className="drawer-tel">+56 2 2946 8200</a>
          <a href="#agenda-admision" className="btn-cta" onClick={() => setOpen(false)}>Agenda entrevista</a>
        </div>
      </div>
    </>
  )
}

function HeroMedia() {
  const base = import.meta.env.BASE_URL
  const hero16 = `${base}media/eter-hero-16x9.png`
  const hero9x16 = `${base}media/eter-hero-9x16.png`
  const heroVideo = `${base}media/eter-hero-loop.mp4`

  const [imgError, setImgError] = useState(false)
  const [videoExists, setVideoExists] = useState<boolean | null>(null)

  useEffect(() => {
    fetch(heroVideo, { method: "HEAD" })
      .then((r) => setVideoExists(r.ok))
      .catch(() => setVideoExists(false))
    fetch(hero16, { method: "HEAD" })
      .then((r) => {
        if (!r.ok) {
          console.warn("[ETER] falta media real: eter-hero-16x9.png — usando placeholder media-falta")
        }
      })
      .catch(() => {
        console.warn("[ETER] falta media real: eter-hero-16x9.png — usando placeholder media-falta")
      })
  }, [hero16, heroVideo])

  if (imgError) {
    return (
      <div
        className="media-falta"
        data-falta="eter-hero-16x9.png"
        style={{
          background: "#E2DDD4",
          aspectRatio: "16/9",
          display: "grid",
          placeItems: "center",
          color: "#6b7280",
          font: "12px Public Sans",
        }}
      >
        falta: eter-hero-16x9.png
      </div>
    )
  }

  if (videoExists === true) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={hero16}
        aria-label="Atrio ETER - video loop"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onError={() => setImgError(true)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    )
  }

  return (
    <picture>
      <source media="(max-width: 900px)" srcSet={hero9x16} />
      <img
        src={hero16}
        alt="Atrio de universidad de hormigón claro y lenga con celosía geométrica que proyecta sombra nítida sobre piedra — ETER"
        loading="eager"
        decoding="async"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onError={() => {
          console.warn("[ETER] falta media real: eter-hero-16x9.png — usando placeholder media-falta")
          setImgError(true)
        }}
      />
    </picture>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero-wrap" aria-label="Hero Admisión 2026">
      <div className="hero">
        <div className="hero-text">
          <p className="hero-kicker">ADMISIÓN 2026 · SANTIAGO — PROVIDENCIA / LAS CONDES</p>
          <h1 className="hero-h1">
            Entra claro. Elige con <span className="accent-word">datos</span>. Proyecta tu carrera.
          </h1>
          <p className="hero-bajada">
            ETER es universidad privada acreditada. Mallas actualizadas, talleres con equipamiento real y acompañamiento desde la primera entrevista. Sin letra chica: aranceles y becas a la vista.
          </p>
          <div className="hero-ctas">
            <a href="#agenda-admision" className="btn-primary">Agenda tu entrevista de admisión</a>
            <a href="#facultades-carreras" className="btn-secondary">Descarga malla PDF</a>
          </div>
          <p className="hero-micro">Respuesta en 24 h hábiles · Sin costo · Cupos por carrera</p>

          <div className="hero-trust" aria-label="Datos de confianza">
            <div className="hero-trust__item">
              <span className="hero-trust__value">5 años acreditada</span>
              <span className="hero-trust__label">hasta 2029</span>
            </div>
            <div className="hero-trust__item">
              <span className="hero-trust__value">86% empleabilidad 1er año</span>
              <span className="hero-trust__label">titulados 2023</span>
            </div>
            <div className="hero-trust__item">
              <span className="hero-trust__value">12.400 estudiantes</span>
              <span className="hero-trust__label">3 campus RM</span>
            </div>
          </div>
        </div>

        <div className="hero-media" role="img" aria-label="Atrio ETER - patio de luz con celosía">
          <HeroMedia />
        </div>
      </div>
    </section>
  )
}

// ---------- Media helper ----------

function MediaTile({ file, alt, ratio, style }: { file: string; alt: string; ratio: string; style?: React.CSSProperties }) {
  const base = import.meta.env.BASE_URL
  const src = `${base}media/${file}`
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then(r => { if (!r.ok) console.warn(`[ETER] falta media real: ${file} — usando placeholder media-falta`) })
      .catch(() => console.warn(`[ETER] falta media real: ${file} — usando placeholder media-falta`))
  }, [src, file])
  if (error) {
    return (
      <div className="media-falta" data-falta={file} style={{ background: "#E2DDD4", aspectRatio: ratio, display: "grid", placeItems: "center", color: "#6b7280", font: "12px Public Sans", width: "100%", height: "100%", ...style }}>
        falta: {file}
      </div>
    )
  }
  return <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: ratio, ...style }} onError={() => { console.warn(`[ETER] falta media real: ${file} — usando placeholder media-falta`); setError(true) }} />
}

// ---------- Facultades ----------

type Carrera = {
  id: string
  nombre: string
  facultad: string
  categorias: string[]
  duracion: string
  jornada: string
  malla: string
  arancel: number
  matricula: number
  beca: string
  becaPct: number
}

const CARRERAS: Carrera[] = [
  { id: "enfermeria", nombre: "Enfermería", facultad: "Salud", categorias: ["Salud"], duracion: "10 semestres", jornada: "Diurno", malla: "Anatomía · Fisiología · Práctica clínica desde 3er año", arancel: 4850000, matricula: 790000, beca: "40%", becaPct: 40 },
  { id: "kinesiologia", nombre: "Kinesiología", facultad: "Salud", categorias: ["Salud"], duracion: "10 semestres", jornada: "Diurno", malla: "Biomecánica · Evaluación motriz · Internado desde 4to año", arancel: 4920000, matricula: 790000, beca: "35%", becaPct: 35 },
  { id: "psicologia", nombre: "Psicología", facultad: "Salud", categorias: ["Salud", "Derecho y Sociales"], duracion: "10 semestres", jornada: "Diurno/Vespertino", malla: "Psicología general · Psicometría · Práctica desde 3er año", arancel: 4550000, matricula: 750000, beca: "40%", becaPct: 40 },
  { id: "derecho", nombre: "Derecho", facultad: "Derecho y Sociales", categorias: ["Derecho y Sociales"], duracion: "10 semestres", jornada: "Diurno/Vespertino", malla: "Derecho civil · Penal · Clínica jurídica desde 2do año", arancel: 5890000, matricula: 820000, beca: "30%", becaPct: 30 },
  { id: "comercial", nombre: "Ingeniería Comercial", facultad: "Ingeniería", categorias: ["Ingeniería"], duracion: "10 semestres", jornada: "Diurno/Vespertino", malla: "Economía · Finanzas · Talleres de emprendimiento", arancel: 5650000, matricula: 790000, beca: "35%", becaPct: 35 },
  { id: "industrial", nombre: "Ing. Civil Industrial", facultad: "Ingeniería", categorias: ["Ingeniería"], duracion: "12 semestres", jornada: "Diurno", malla: "Optimización · Operaciones · Proyecto industrial 5to año", arancel: 5980000, matricula: 820000, beca: "30%", becaPct: 30 },
  { id: "arquitectura", nombre: "Arquitectura", facultad: "Arquitectura y Diseño", categorias: ["Arquitectura y Diseño"], duracion: "12 semestres", jornada: "Diurno", malla: "Taller de obra · Historia · Urbanismo desde 2do año", arancel: 5720000, matricula: 790000, beca: "35%", becaPct: 35 },
  { id: "medicina", nombre: "Medicina", facultad: "Salud", categorias: ["Salud"], duracion: "14 semestres", jornada: "Diurno", malla: "Ciencias básicas · Clínica integrada · Internado 6to-7mo año", arancel: 8450000, matricula: 890000, beca: "20%", becaPct: 20 },
]

const FILTROS = ["Todas", "Salud", "Ingeniería", "Derecho y Sociales", "Arquitectura y Diseño"] as const

function formatCLP(n: number) {
  return "$" + n.toLocaleString("es-CL")
}

function FacultadesCarreras() {
  const [filtro, setFiltro] = useState<string>("Todas")
  const [changing, setChanging] = useState(false)
  const handleFiltro = (f: string) => {
    if (f === filtro) return
    setChanging(true)
    setTimeout(() => {
      setFiltro(f)
      setChanging(false)
    }, 120)
  }
  const filtradas = CARRERAS.filter(c => filtro === "Todas" || c.categorias.includes(filtro))
  return (
    <section id="facultades-carreras" className="section section-facultades">
      <div className="container">
        <div className="section-header">
          <p className="kicker">FACULTADES · 4 ÁREAS</p>
          <h2 className="h2">Elige por campo, no por folleto.</h2>
          <p className="bajada">Cada carrera con duración, jornada y arancel desde. Malla descargable sin formulario largo.</p>
        </div>

        <div className="filtros-sticky">
          <div className="filtros-chips" role="tablist" aria-label="Filtros por facultad">
            {FILTROS.map(f => (
              <button
                key={f}
                role="tab"
                aria-selected={filtro === f}
                className={`chip ${filtro === f ? "is-active" : ""}`}
                onClick={() => handleFiltro(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className={`carreras-grid ${changing ? "is-changing" : ""}`}>
          {filtradas.map(c => (
            <article key={c.id} className="carrera-card">
              <div className="carrera-top">
                <span className="carrera-facultad">{c.facultad}</span>
                <span className="carrera-duracion">{c.duracion} · {c.jornada}</span>
              </div>
              <h3 className="carrera-title">{c.nombre}{c.id === "medicina" ? " — cupos limitados, PAES 900+" : ""}</h3>
              <p className="carrera-malla">{c.malla}</p>
              <div className="carrera-arancel">
                <div>
                  <span className="carrera-arancel-label">Arancel anual desde</span>
                  <span className="carrera-arancel-valor">{formatCLP(c.arancel)}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="carrera-matricula">Matrícula {formatCLP(c.matricula)}</span>
                  <a href="#agenda-admision" className="carrera-link">Ver malla →</a>
                </div>
              </div>
            </article>
          ))}
          {/* tile lateral 1:1 */}
          <div className="carrera-tile">
            <MediaTile file="eter-tile-01.png" alt="Detalle de taller de salud vacío — camilla y carro de acero" ratio="1/1" />
          </div>
        </div>

        <p className="nota-referencial">Valores referenciales 2025-2026. Se confirman tras postulación y becas. No incluye titulación.</p>
      </div>
    </section>
  )
}

// ---------- Admision Vias ----------

function AdmisionVias() {
  return (
    <section id="admision-vias" className="section section-vias">
      <div className="container grid-12">
        <div className="col-6 vias-izq">
          <p className="kicker">CÓMO ENTRAS</p>
          <h2 className="h2">Vías claras, sin laberinto.</h2>
          <p className="bajada">Admisión regular: PAES + NEM/Ranking. Puntaje corte referencial por carrera (2025) a la vista.</p>
          <ul className="bullets-vias">
            <li><span className="dash">—</span> PAES obligatoria + NEM/Ranking — ponderación 10-20% según carrera</li>
            <li><span className="dash">—</span> Admisión directa titulados y traslados — convalidación caso a caso</li>
            <li><span className="dash">—</span> Cupos deportistas y equidad — entrevista + antecedentes</li>
          </ul>
          <div className="docs-fila">Trae: Cédula · Licencia EM · Concentración notas · PAES o título</div>
          <a href="#aranceles-beneficios" className="btn-outline">Simula tu puntaje</a>
        </div>
        <div className="col-6 vias-der">
          <div className="timeline">
            <div className="timeline-line" aria-hidden="true" />
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <span className="timeline-step">01 · Postula online</span>
                <span className="timeline-desc">RUT, NEM, PAES o certificado título. 6 minutos.</span>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <span className="timeline-step">02 · Entrevista</span>
                <span className="timeline-desc">20 min con director de carrera. Orientación de malla y becas.</span>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <span className="timeline-step">03 · Resultado</span>
                <span className="timeline-desc">En 48 h. Carta de aceptación + simulación de arancel con beca.</span>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <span className="timeline-step">04 · Matrícula</span>
                <span className="timeline-desc">Reserva online $150.000 abonables. Firma digital.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- Aranceles Beneficios ----------

function ArancelesBeneficios() {
  const [simCarrera, setSimCarrera] = useState<string>("enfermeria")
  const [simPaes, setSimPaes] = useState<string>("750")
  const [simCae, setSimCae] = useState(false)
  const [simResult, setSimResult] = useState<string | null>(null)

  const handleSimular = () => {
    const c = CARRERAS.find(x => x.id === simCarrera) || CARRERAS[0]
    // Use beca pct from table, if PAES <600 reduce beca by 10, if CAE checked add note but same calc
    let pct = c.becaPct
    const paesNum = Number(simPaes) || 0
    if (paesNum && paesNum < 600) pct = Math.max(5, pct - 10)
    // if paes high >800 boost small? keep as is for honesty
    const conBeca = Math.round(c.arancel * (1 - pct / 100))
    const mensual = Math.round(conBeca / 10)
    setSimResult(`Arancel con beca ${pct}%: ${formatCLP(conBeca)}/año · ${formatCLP(mensual)}/mes${simCae ? " · CAE disponible" : ""}`)
  }

  return (
    <section id="aranceles-beneficios" className="section section-aranceles">
      <div className="container">
        <div className="section-header">
          <p className="kicker">ARANCELES 2026</p>
          <h2 className="h2">Precio a la vista. Beca simulada al tiro.</h2>
          <p className="bajada">Matrícula y arancel separados. Simula CAE y becas internas sin dejar tu RUT.</p>
        </div>

        <div className="tabla-wrap">
          <table className="tabla-aranceles">
            <thead>
              <tr>
                <th>Carrera</th>
                <th>Arancel anual</th>
                <th>Matrícula</th>
                <th>Mensualidad referencial (10 cuotas)</th>
                <th>Beca ETER hasta</th>
              </tr>
            </thead>
            <tbody>
              {CARRERAS.map(c => (
                <tr key={c.id}>
                  <td>{c.nombre}</td>
                  <td>{formatCLP(c.arancel)}</td>
                  <td>{formatCLP(c.matricula)}</td>
                  <td>{formatCLP(Math.round(c.arancel / 10))}</td>
                  <td>{c.beca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="simulador-wrap grid-12">
          <div className="simulador-card">
            <h3 className="sim-title">Simulador de beca</h3>
            <div className="sim-fields">
              <label className="f-label">Carrera
                <select value={simCarrera} onChange={e => setSimCarrera(e.target.value)} className="f-input">
                  {CARRERAS.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
                </select>
              </label>
              <label className="f-label">NEM / PAES (referencial)
                <input type="number" min={0} max={1000} value={simPaes} onChange={e => setSimPaes(e.target.value)} placeholder="ej. 750" className="f-input" />
              </label>
              <label className="f-check">
                <input type="checkbox" checked={simCae} onChange={e => setSimCae(e.target.checked)} /> CAE
              </label>
            </div>
            <button className="btn-primary" onClick={handleSimular}>Simular beca</button>
            {simResult && <div className="sim-result">{simResult}</div>}
            <p className="nota-sim">Simulación referencial. Evaluación socioeconómica confirma.</p>
          </div>

          <div className="beneficios-grid">
            <div className="benef-card">
              <h4>Beca ETER Mérito</h4>
              <p>Hasta 40% arancel por PAES/NEM. Renovable con promedio 5.0</p>
            </div>
            <div className="benef-card">
              <h4>CAE y becas MINEDUC</h4>
              <p>ETE acreditada, CAE disponible. Orientación completa en entrevista.</p>
            </div>
            <div className="benef-card">
              <h4>Pago en cuotas sin interés</h4>
              <p>Hasta 10 cuotas con PAC/PAT. Descuento 5% pago anual contado.</p>
            </div>
          </div>

          <div className="benef-imagen">
            <MediaTile file="eter-tile-02.png" alt="Biblioteca vacía — mesa de roble claro con lámpara cilíndrica y sombra celosía" ratio="3/4" />
          </div>
        </div>

        <p className="nota-referencial">Valores referenciales 2025-2026. Se confirman tras postulación y becas.</p>
      </div>
    </section>
  )
}

// ---------- Campus ----------

function CampusTalleres() {
  return (
    <section id="campus-talleres" className="section section-campus">
      <div className="container">
        <h2 className="h2">Campus pensado para hacer, no solo para mirar.</h2>
        <p className="bajada">Tres sedes RM, talleres equipados, biblioteca abierta hasta 21h, patios que se usan.</p>

        <div className="mosaico grid-12">
          <div className="mosaico-grande">
            <MediaTile file="eter-interior-16x9.png" alt="Atrio-biblioteca doble altura — baranda lenga, estanterías vacías, piso piedra clara" ratio="16/9" />
          </div>
          <div className="mosaico-tile-1">
            <MediaTile file="eter-tile-03.png" alt="Taller simulación vacío — fantoma torso sobre mesa acero" ratio="1/1" />
          </div>
          <div className="mosaico-tile-2">
            <MediaTile file="eter-tile-04.png" alt="Patio de piedra y vegetación contenida con sombra celosía" ratio="3/4" />
          </div>
          <div className="mosaico-texto">
            <ul className="sedes-lista">
              <li><strong>Providencia — Manuel Montt 1xxx</strong><span>Biblioteca + talleres Salud · Metro Manuall Montt 4 min</span></li>
              <li><strong>Las Condes — Rosario Norte 5xx</strong><span>Ingeniería y Arquitectura · Estacionamiento bici y auto</span></li>
              <li><strong>La Reina — Larraín 9xxx</strong><span>Derecho y Postgrados · Patio central y auditorio 240 p.</span></li>
            </ul>
            <div className="mapa-placeholder">
              <span>Mapa RM — 3 pin con distancia a metro, sin mapa externo pesado</span>
              <a href="#agenda-admision">Cómo llegar →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- Acreditacion ----------

function Acreditacion() {
  return (
    <section id="acreditacion-empleabilidad" className="section section-acreditacion">
      <div className="container grid-12">
        <div className="acred-izq">
          <h2 className="h2">Acreditada. Medible.</h2>
          <p className="bajada">5 años hasta 2029 por CNA-Chile. No es claim, es resolución. Empleabilidad medida a 12 meses, no encuesta interna.</p>
          <div className="sello-cna">
            <span className="sello-main">CNA 5 AÑOS · 2024-2029</span>
            <span className="sello-sub">Res. exenta N° 123/2024 (referencial demo)</span>
          </div>
          <ul className="bullets-convenio">
            <li><span className="bullet-sq" /> Convenios práctica: 34 centros salud RM + 18 estudios y empresas</li>
            <li><span className="bullet-sq" /> Profesores activos en ejercicio, no solo académicos</li>
          </ul>
        </div>
        <div className="acred-centro">
          <table className="tabla-emplea">
            <thead><tr><th>Carrera</th><th>Empleabilidad 1er año</th><th>Renta mediana 2do año</th></tr></thead>
            <tbody>
              <tr><td>Enfermería</td><td>92% trabaja al 1er año</td><td>$1.450.000</td></tr>
              <tr><td>Ing. Comercial</td><td>88%</td><td>$1.680.000</td></tr>
              <tr><td>Derecho</td><td>84%</td><td>$1.520.000</td></tr>
            </tbody>
          </table>
          <p className="fuente-pie">Fuente: demo basada en mifuturo.cl, cohorte 2023. ETER publica su reporte anual en transparencia.</p>
        </div>
        <div className="acred-der">
          <MediaTile file="eter-proof-16x9.png" alt="Auditorio vacío de 240 butacas en roble claro — escenario con podio simple" ratio="16/9" />
        </div>
      </div>
    </section>
  )
}

// ---------- Form validation ----------

function validarRUT(rut: string): boolean {
  const limpio = rut.replace(/\./g, "").replace(/-/g, "").toUpperCase().trim()
  if (!/^[0-9]{7,8}[0-9K]$/.test(limpio)) return false
  const cuerpo = limpio.slice(0, -1)
  const dv = limpio.slice(-1)
  let suma = 0
  let mult = 2
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * mult
    mult = mult === 7 ? 2 : mult + 1
  }
  const resto = 11 - (suma % 11)
  let dvCalc = ""
  if (resto === 11) dvCalc = "0"
  else if (resto === 10) dvCalc = "K"
  else dvCalc = String(resto)
  return dvCalc === dv
}

function AgendaAdmision() {
  const [form, setForm] = useState({
    nombre: "", apellido: "", rut: "", email: "", telefono: "", carrera: "", sede: "", via: "", paes: "", mensaje: "", politica: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const draftKey = "eter-agenda-borrador"

  // load draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey)
      if (raw) setForm(JSON.parse(raw))
    } catch { /* ignore */ }
  }, [])

  // save draft 800ms
  const saveRef = useRef<number | null>(null)
  useEffect(() => {
    if (saveRef.current) window.clearTimeout(saveRef.current)
    saveRef.current = window.setTimeout(() => {
      try { localStorage.setItem(draftKey, JSON.stringify(form)) } catch { /* ignore */ }
    }, 800)
    return () => { if (saveRef.current) window.clearTimeout(saveRef.current) }
  }, [form])

  const validate = (): boolean => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = "Requerido"
    if (!form.apellido.trim()) e.apellido = "Requerido"
    if (!form.rut.trim()) e.rut = "Requerido"
    else if (!validarRUT(form.rut)) e.rut = "RUT no válido (módulo 11)"
    if (!form.email.trim()) e.email = "Requerido"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email no válido"
    if (!form.telefono.trim()) e.telefono = "Requerido"
    else if (!/^\d{9}$/.test(form.telefono.replace(/\s/g, ""))) e.telefono = "9 dígitos (ej. 912345678)"
    if (!form.carrera) e.carrera = "Selecciona carrera"
    if (!form.sede) e.sede = "Selecciona sede"
    if (!form.politica) e.politica = "Debes aceptar la política"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setSuccess(false)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      try { localStorage.removeItem(draftKey) } catch { /* ignore */ }
      setTimeout(() => setSuccess(false), 8000)
    }, 800)
  }

  const f = (k: keyof typeof form, v: string | boolean) => setForm(s => ({ ...s, [k]: v }))

  return (
    <section id="agenda-admision" className="section section-agenda">
      <div className="container grid-12">
        <div className="col-6 agenda-izq">
          <h2 className="h2">Agenda tu entrevista.</h2>
          <p className="bajada">20 minutos, presencial o Meet. Te vas con malla, arancel simulado y becas aplicables.</p>
          <ul className="bullets-checks">
            <li>Dudas de malla y prácticas</li>
            <li>Simulación de beca con tu NEM/PAES</li>
            <li>Convalidaciones si vienes de otra U</li>
          </ul>
          <div className="contacto-box">
            <span>Admisión ETER · +56 2 2946 8200 · admision@eter.cl</span>
            <span>Lun-Vie 9:00-19:00, Sáb 9:00-14:00</span>
          </div>
        </div>
        <div className="col-6 agenda-der">
          <form className="form-card" onSubmit={onSubmit} noValidate>
            {success && (
              <div className="form-success">¡Listo! Te contactamos en 24 h hábiles. Revisa tu correo (y spam).</div>
            )}
            <div className="form-grid">
              <label className="f-label">Nombre* {errors.nombre && <span className="f-error">{errors.nombre}</span>}
                <input className={`f-input ${errors.nombre ? "is-error" : ""}`} value={form.nombre} onChange={e => f("nombre", e.target.value)} placeholder="Nombre" />
              </label>
              <label className="f-label">Apellido* {errors.apellido && <span className="f-error">{errors.apellido}</span>}
                <input className={`f-input ${errors.apellido ? "is-error" : ""}`} value={form.apellido} onChange={e => f("apellido", e.target.value)} placeholder="Apellido" />
              </label>
              <label className="f-label">RUT* (ej. 12.345.678-5) {errors.rut && <span className="f-error">{errors.rut}</span>}
                <input className={`f-input ${errors.rut ? "is-error" : ""}`} value={form.rut} onChange={e => f("rut", e.target.value)} placeholder="12.345.678-5" />
              </label>
              <label className="f-label">Email* {errors.email && <span className="f-error">{errors.email}</span>}
                <input type="email" className={`f-input ${errors.email ? "is-error" : ""}`} value={form.email} onChange={e => f("email", e.target.value)} placeholder="tu@correo.cl" />
              </label>
              <label className="f-label">Teléfono* (+56 9) {errors.telefono && <span className="f-error">{errors.telefono}</span>}
                <input className={`f-input ${errors.telefono ? "is-error" : ""}`} value={form.telefono} onChange={e => f("telefono", e.target.value)} placeholder="912345678" />
              </label>
              <label className="f-label">Carrera de interés* {errors.carrera && <span className="f-error">{errors.carrera}</span>}
                <select className={`f-input ${errors.carrera ? "is-error" : ""}`} value={form.carrera} onChange={e => f("carrera", e.target.value)}>
                  <option value="">Selecciona</option>
                  {CARRERAS.map(c => <option key={c.id} value={c.nombre}>{c.nombre}</option>)}
                </select>
              </label>
              <label className="f-label">Sede* {errors.sede && <span className="f-error">{errors.sede}</span>}
                <select className={`f-input ${errors.sede ? "is-error" : ""}`} value={form.sede} onChange={e => f("sede", e.target.value)}>
                  <option value="">Selecciona</option>
                  <option>Providencia</option><option>Las Condes</option><option>La Reina</option>
                </select>
              </label>
              <label className="f-label">Vía
                <select className="f-input" value={form.via} onChange={e => f("via", e.target.value)}>
                  <option value="">Selecciona</option><option>PAES</option><option>Titulado</option><option>Traslado</option>
                </select>
              </label>
              <label className="f-label">PAES / NEM referencial
                <input type="number" className="f-input" value={form.paes} onChange={e => f("paes", e.target.value)} placeholder="ej. 650" />
              </label>
              <label className="f-label f-full">Mensaje
                <textarea className="f-input" rows={3} value={form.mensaje} onChange={e => f("mensaje", e.target.value)} placeholder="Cuéntanos tu situación..." />
              </label>
              <label className="f-check f-full">
                <input type="checkbox" checked={form.politica} onChange={e => f("politica", e.target.checked)} /> Acepto política y contacto admisión* {errors.politica && <span className="f-error">{errors.politica}</span>}
              </label>
            </div>
            <button type="submit" className="btn-primary btn-full" disabled={loading}>
              {loading ? <span className="spinner" aria-label="cargando" /> : null}
              {loading ? " Enviando…" : "Solicitar entrevista"}
            </button>
            <a href="https://wa.me/56900000000?text=Hola%20ETER%20quiero%20agendar%20entrevista%20de%20admisi%C3%B3n" target="_blank" rel="noopener noreferrer" className="wa-link">O escribe directo a WhatsApp admisión →</a>
            <p className="nota-pie">Datos solo para admisión. No spam. Puedes pedir eliminación.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

// ---------- FAQ ----------

const FAQS = [
  { q: "¿Cuál es la diferencia entre arancel y matrícula? ¿Se paga todo junto?", a: "Matrícula anual ($750-890k) se paga al inscribirte. Arancel ($4.5-8.4M) en hasta 10 cuotas. No cobramos pagaré semestral." },
  { q: "¿Puedo convalidar ramos si vengo de otra universidad o IP?", a: "Sí. Trae concentración y programas. Convalidación en 5 días hábiles, sin costo de evaluación." },
  { q: "¿La beca se pierde si bajo el promedio un semestre?", a: "Beca ETER exige 5.0 anual. Si bajas, queda en pausa un semestre, no se pierde definitiva." },
  { q: "¿Hay práctica desde el primer año?", a: "Salud: observación desde 2º año, práctica clínica desde 3º. Ingeniería/Derecho: talleres y clínica jurídica desde 2º año." },
  { q: "¿CAE y gratuidad?", a: "ETER es privada acreditada: CAE sí, gratuidad no. Becas internas hasta 40% + MINEDUC según FUAS." },
  { q: "¿Jornada vespertina es la misma malla?", a: "Sí, misma malla, horario 19:00-22:30. Laboratorios sábados mañana. Duración idéntica." },
  { q: "¿Puedo cambiarme de carrera dentro de ETER?", a: "Sí, hasta 3er semestre con convalidación interna. Pagas diferencia de arancel si corresponde." },
]

function Preguntas() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="preguntas-academicas" className="section section-faq">
      <div className="container">
        <h2 className="h2">Preguntas que hacen las familias.</h2>
        <div className="acordeones">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`acordeon ${isOpen ? "is-open" : ""}`}>
                <button
                  className="acordeon-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={`acordeon-icon ${isOpen ? "is-rotated" : ""}`} aria-hidden="true">+</span>
                </button>
                {isOpen && <div className="acordeon-panel">{item.a}</div>}
              </div>
            )
          })}
        </div>
        <a href="#agenda-admision" className="faq-cta">¿No ves tu duda? Habla con admisión →</a>
      </div>
    </section>
  )
}

// ---------- Footer ----------

function Footer() {
  const [email, setEmail] = useState("")
  const [sub, setSub] = useState(false)
  return (
    <footer className="footer">
      <div className="container grid-12 footer-grid">
        <div className="footer-col1">
          <span className="footer-logo">ETER</span>
          <span className="footer-sub">Universidad Privada</span>
          <span className="footer-meta">Santiago, Chile · 3 sedes RM</span>
          <a href="tel:+56229468200" className="footer-tel">+56 2 2946 8200</a>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#facultades-carreras">Facultades</a>
          <a href="#admision-vias">Vías</a>
          <a href="#aranceles-beneficios">Aranceles</a>
          <a href="#campus-talleres">Campus</a>
          <a href="#acreditacion-empleabilidad">Acreditación</a>
          <a href="#preguntas-academicas">FAQ</a>
          <a href="#agenda-admision">Transparencia</a>
          <a href="#agenda-admision">Reglamento</a>
          <a href="#agenda-admision">Política privacidad</a>
        </nav>
        <div className="footer-news">
          <p className="news-title">Recibe fechas PAES y becas</p>
          <div className="news-row">
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@correo.cl" className="news-input" aria-label="email newsletter" />
            <button onClick={() => { if (email.includes("@")) { setSub(true); setTimeout(() => setSub(false), 2500) } }} className="news-btn">Suscribir</button>
          </div>
          {sub && <span className="news-ok">¡Suscrito! Revisa tu correo.</span>}
        </div>
      </div>
      <div className="container footer-pie">
        <span>© 2026 ETER Universidad Privada · Resolución demo · Valores referenciales.</span>
        <span>Hecho en Chile</span>
      </div>
    </footer>
  )
}

function StickyMobile() {
  return (
    <div className="sticky-mobile" role="region" aria-label="Acciones rápidas móvil">
      <a href="tel:+56229468200" className="sticky-btn sticky-btn--call">Llamar</a>
      <a href="#agenda-admision" className="sticky-btn sticky-btn--agenda">Agenda entrevista</a>
    </div>
  )
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FacultadesCarreras />
        <AdmisionVias />
        <ArancelesBeneficios />
        <CampusTalleres />
        <Acreditacion />
        <AgendaAdmision />
        <Preguntas />
      </main>
      <Footer />
      <StickyMobile />
    </>
  )
}
