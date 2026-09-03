import { useEffect, useRef, useState } from "react"

const base = import.meta.env.BASE_URL
const img = (p: string) => `${base}media/${p}`

// ---------- hook: progress + nav compact/hide + mobile cta visibility ----------
function useNavBehavior() {
  const [compact, setCompact] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showMobileCta, setShowMobileCta] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? y / h : 0)
      setCompact(y > 24)
      // hide down show up
      if (y > lastY.current && y > 120) setHidden(true)
      else setHidden(false)
      lastY.current = y
      // mobile cta after hero (hero height ~ 600)
      setShowMobileCta(y > 600)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return { compact, hidden, progress, showMobileCta }
}

// ---------- hook: reveal on scroll ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ---------- hook: count up ----------
function CountUp({ to, suffix = "", duration = 1200 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
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
            setDisplay(Math.round(eased * to))
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
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display.toLocaleString("es-CL")}
      {suffix}
    </span>
  )
}

// ---------- data ----------
const salones = [
  {
    n: "01",
    nombre: "Salón Central",
    cap: "180 personas",
    m2: "320 m² · altura 4,2 m",
    banquete: "180 sentados · 220 cóctel",
    precio: "desde $1.850.000",
    detalle: "Luz norte, ventanales al parque, pista integrada.",
  },
  {
    n: "02",
    nombre: "Terraza Parque",
    cap: "120 personas",
    m2: "240 m² · 120 m² cubiertos",
    banquete: "120 sentados · 160 cóctel",
    precio: "desde $1.450.000",
    detalle: "Jardín cerrado, guirnalda tenue, plan lluvia interior.",
  },
  {
    n: "03",
    nombre: "Salón Íntimo",
    cap: "60 personas",
    m2: "110 m² · altura 3,4 m",
    banquete: "60 sentados · 80 cóctel",
    precio: "desde $790.000",
    detalle: "Luz cálida, mesa roble, ideal matrimonios pequeños.",
  },
]

const precios = [
  { evento: "Matrimonio", pers: "150 personas", precio: "$2.150.000", incluye: "Mobiliario, audio básico, mantelería, coordinación día D", noIncluye: "Banquetería, barra, DJ, flores" },
  { evento: "Corporativo", pers: "80 personas", precio: "$1.250.000", incluye: "Mobiliario, proyector, audio básico, mantelería", noIncluye: "Catering, barra, técnica adicional" },
  { evento: "Cumpleaños", pers: "60 personas", precio: "$890.000", incluye: "Mobiliario, audio básico, mantelería, coordinación", noIncluye: "Banquetería, torta, decoración" },
  { evento: "Cóctel", pers: "120 personas", precio: "$1.480.000", incluye: "Mobiliario alto, audio, mantelería, coordinación", noIncluye: "Bebestibles, banquetería, DJ" },
]

const faqs = [
  { q: "¿Cómo reservo mi fecha?", a: "Con visita y cotización por escrito en 24 h. Si te acomoda, firmamos contrato simple y abonas el 40 % para bloquear la fecha. El saldo se paga 10 días antes del evento. Todo queda por escrito, sin sorpresas." },
  { q: "¿Cuál es el mínimo de personas y horarios?", a: "Mínimo 40 personas en Salón Íntimo y 60 en los demás. Horario base 19:00–02:00. Montaje desde las 12:00 el mismo día. Extensión de hora con costo adicional y aviso previo." },
  { q: "¿Qué incluye el arriendo y qué se paga aparte?", a: "Incluye: uso exclusivo del salón y parque, mobiliario (mesas, sillas, mantelería hueso), audio básico, coordinación día D y aseo. Aparte: banquetería, barra/bebestibles, DJ/iluminación, flores y técnica extra. Te entregamos lista de proveedores aliados o puedes traer los tuyos sin recargo." },
  { q: "¿Puedo traer proveedores externos?", a: "Sí. Puedes traer banquetería, barra, DJ y decoración externa sin costo adicional. Solo pedimos que acrediten experiencia y cumplan nuestro reglamento de montaje y horarios. Nos coordinamos directo con ellos." },
  { q: "¿Qué pasa si llueve (terraza)?", a: "Terraza Parque tiene 120 m² cubiertos y plan B interior sin costo: movemos el montaje al Salón Central o Íntimo según asistencia. Lo dejamos definido en la visita y confirmado en el contrato, para que no dependas del clima." },
  { q: "¿Cómo se paga y cuál es la política de devolución?", a: "40 % para reservar, 60 % diez días antes. Transferencia o Webpay. Si reprogramas con 45+ días de anticipación, movemos la fecha sin costo (sujeto a disponibilidad). Con 30–44 días, retienes el 50 % del abono. Menos de 30 días, el abono no es reembolsable, pero puedes ceder la fecha." },
]

export function App() {
  const { compact, hidden, progress, showMobileCta } = useNavBehavior()
  const [salonOpen, setSalonOpen] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  useReveal()

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <nav className={`nav ${compact ? "compact" : ""} ${hidden ? "hidden" : ""}`} aria-label="Navegación principal">
        <div className="nav-inner">
          <a href="#inicio" className="nav-brand">ÉTER — CASA DE EVENTOS</a>
          <div className="nav-links" role="list">
            <a href="#salones">Salones</a>
            <a href="#precios">Precios</a>
            <a href="#faq">Preguntas</a>
            <span className="nav-tel">+56 2 2840 3315</span>
            <a href="#reserva" className="nav-cta">Cotizar</a>
          </div>
        </div>
      </nav>

      <div className={`mobile-cta ${showMobileCta ? "visible" : ""}`} aria-hidden={!showMobileCta}>
        <a href="#reserva">Cotizar mi fecha</a>
      </div>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-grid">
          <div>
            <p className="kicker">Casa de eventos · La Reina</p>
            <h1 className="h1" aria-label="Celebraciones que se quedan en la memoria.">
              <span className="h1-line"><span>Celebraciones</span></span>
              <span className="h1-line"><span>que se quedan</span></span>
              <span className="h1-line"><span>en la memoria.</span></span>
            </h1>
            <p className="subhead">Salones con luz, parque y un equipo que no te deja sola el día del evento. Cotiza hoy con precios y disponibilidad reales.</p>
            <div className="hero-actions">
              <a href="#reserva" className="btn-primary">Cotizar mi fecha</a>
              <a href="#precios" className="link-underline">Ver salones</a>
            </div>
            <p style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris)", marginTop: 14, letterSpacing: "0.04em" }}>
              Respuesta en &lt;2 h hábiles · +56 9 8403 3315
            </p>
          </div>
          <div className="hero-media">
            <div className="hero-media-wrap">
              <img
                src={img("salon.jpg")}
                alt="Salón Central vacío con luz norte, mesa larga de roble vestida con lino hueso y parque al fondo desenfocado"
                width={1200}
                height={675}
                className="ken"
                loading="eager"
              />
            </div>
            <p className="caption">Salón Central · 180 sentados · luz norte</p>
          </div>
        </div>
        <div className="banda" aria-label="Atributos clave">
          <div className="banda-inner">
            <span>Un solo evento por día</span><span className="dot" aria-hidden />
            <span>Equipo dedicado</span><span className="dot" aria-hidden />
            <span>Estacionamiento privado</span>
          </div>
        </div>
      </section>

      {/* SALONES */}
      <section id="salones" className="section">
        <div className="wrap">
          <p className="sec-kicker reveal">Salones</p>
          <h2 className="sec-title reveal d1">Tres espacios, una misma luz.</h2>
          <p className="sec-desc reveal d2">Sin salones genéricos. Cada uno se arrienda exclusivo, con parque y equipo propio el día del evento. Toca para ver detalle.</p>
          <div className="salon-list reveal d3">
            {salones.map((s, i) => (
              <div key={s.n} className={`salon-row ${salonOpen === i ? "open" : ""}`} onClick={() => setSalonOpen(salonOpen === i ? null : i)} role="button" tabIndex={0} aria-expanded={salonOpen === i} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSalonOpen(salonOpen === i ? null : i) } }}>
                <span className="salon-num">{s.n}</span>
                <div>
                  <h3 className="salon-name">{s.nombre}</h3>
                  <p className="salon-meta">{s.cap} · {s.m2}</p>
                </div>
                <span className="salon-price">{s.precio}</span>
                <div className="salon-expand" aria-hidden={salonOpen !== i}>
                  <div className="salon-expand-inner">
                    <div className="salon-detail">
                      <dl>
                        <dt>Capacidad</dt>
                        <dd>{s.banquete}</dd>
                      </dl>
                      <dl>
                        <dt>Detalle</dt>
                        <dd style={{ color: "var(--gris)", lineHeight: 1.6 }}>{s.detalle}</dd>
                      </dl>
                      <a href="#reserva" className="salon-cta" onClick={(e) => e.stopPropagation()}>Ver disponibilidad →</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 32, border: "1px solid var(--linea)", padding: 16, display: "grid", placeItems: "center", background: "var(--papel)" }}>
            <img src={img("plano.jpg")} alt="Plano cenital esquemático del Salón Central con distribución de mesas, pista y acceso al parque, líneas tinta sobre papel" width={600} height={600} style={{ maxWidth: 480, width: "100%", aspectRatio: "1/1", objectFit: "cover" }} loading="lazy" />
            <p className="caption" style={{ textAlign: "center" }}>Plano cenital — Salón Central · 320 m² · escala 1:100</p>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section id="cifras" className="section">
        <div className="wrap">
          <p className="sec-kicker reveal">Cifras</p>
          <h2 className="sec-title reveal d1" style={{ marginBottom: 40 }}>Una casa que cuida cada celebración.</h2>
          <div className="cifras-grid reveal d2">
            <div>
              <div className="cifra-num">+<CountUp to={14} /></div>
              <p className="cifra-label">Años operando</p>
              <p className="cifra-note">Desde 2011 en La Reina</p>
            </div>
            <div>
              <div className="cifra-num">+<CountUp to={3800} /></div>
              <p className="cifra-label">Eventos realizados</p>
              <p className="cifra-note">Matrimonios, empresas y familias</p>
            </div>
            <div>
              <div className="cifra-num">4,8/5</div>
              <p className="cifra-label">1.240 reseñas verificadas</p>
              <p className="cifra-note">Google · Maps</p>
            </div>
            <div>
              <div className="cifra-num" style={{ fontSize: "clamp(22px,2.5vw,28px)", paddingTop: 12 }}>Un solo evento por día</div>
              <p className="cifra-label">Exclusividad total</p>
              <p className="cifra-note">Tu fecha, tu casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section">
        <div className="wrap">
          <p className="sec-kicker reveal">Precios</p>
          <h2 className="sec-title reveal d1">Precios claros, sin letra chica.</h2>
          <p className="sec-desc reveal d2">Valores desde, en pesos chilenos. Incluyen uso exclusivo del salón. El valor final se confirma con fecha y asistencia exactas. Nunca cobramos algo que no aprobaste por escrito.</p>
          <div className="tabla-wrap reveal d3">
            <table className="tabla" aria-label="Tabla de precios por tipo de evento">
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Desde</th>
                  <th>Incluye</th>
                  <th>No incluye</th>
                </tr>
              </thead>
              <tbody>
                {precios.map((r) => (
                  <tr key={r.evento}>
                    <td>
                      <strong style={{ fontWeight: 600 }}>{r.evento}</strong>
                      <br />
                      <span style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{r.pers}</span>
                    </td>
                    <td className="tabla-price">{r.precio}</td>
                    <td className="tabla-incl">{r.incluye}</td>
                    <td className="tabla-incl" style={{ color: "#9AA09D" }}>{r.noIncluye}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="nota reveal">El valor final se confirma con fecha y asistencia. Nunca cobramos algo que no aprobaste por escrito. Todos los precios incluyen IVA. Visita y cotización sin costo, con respuesta en 24 h hábiles.</p>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="section">
        <div className="wrap">
          <p className="sec-kicker reveal">Método</p>
          <h2 className="sec-title reveal d1" style={{ marginBottom: 48 }}>Tres pasos, todo por escrito.</h2>
          <div className="metodo-grid">
            <div className="metodo-col reveal">
              <p className="metodo-num">01</p>
              <h3 className="metodo-title">Visita y cotización 24 h</h3>
              <p className="metodo-desc">Recorres los tres salones con luz real, medimos tu lista y te enviamos propuesta con fecha, asistencia y precios por escrito en 24 h.</p>
            </div>
            <div className="metodo-col reveal d1">
              <p className="metodo-num">02</p>
              <h3 className="metodo-title">Reserva con contrato simple</h3>
              <p className="metodo-desc">Contrato de dos páginas, sin letra chica. Abonas el 40 % y tu fecha queda bloqueada. Un solo evento por día, sin dobles reservas.</p>
            </div>
            <div className="metodo-col reveal d2">
              <p className="metodo-num">03</p>
              <h3 className="metodo-title">Montaje y coordinación día D</h3>
              <p className="metodo-desc">Nuestro equipo monta, recibe a tus proveedores y coordina el día completo. Tú llegas a celebrar; nosotros nos quedamos hasta el final.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section">
        <div className="wrap">
          <p className="sec-kicker reveal">Galería</p>
          <h2 className="sec-title reveal d1" style={{ marginBottom: 40 }}>Luz, lino y parque.</h2>
          <div className="galeria-grid">
            <figure className="galeria-fig reveal">
              <div className="galeria-wrap reveal">
                <img src={img("detalle.jpg")} alt="Bodegón de mesa con platos hueso, cubiertos pulidos, copa de agua y servilleta de lino doblada con luz rasante cálida" className="detalle" width={800} height={1000} loading="lazy" />
              </div>
              <figcaption className="caption">Bodegón mesa · lino hueso · luz rasante</figcaption>
            </figure>
            <figure className="galeria-fig reveal d1">
              <div className="galeria-wrap reveal ken">
                <img src={img("parque.jpg")} alt="Parque vacío al crepúsculo con guirnalda de luces cálidas tenue entre árboles, atmósfera cinematográfica serena" className="parque" width={1200} height={675} loading="lazy" />
              </div>
              <figcaption className="caption">Parque crepuscular · guirnalda tenue · vacío</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="wrap">
          <p className="sec-kicker reveal">Preguntas</p>
          <h2 className="sec-title reveal d1" style={{ marginBottom: 40 }}>Todo claro antes de reservar.</h2>
          <div className="faq-list reveal d2">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i} aria-controls={`faq-a-${i}`}>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden>+</span>
                </button>
                <div id={`faq-a-${i}`} className="faq-a" aria-hidden={faqOpen !== i}>
                  <div className="faq-a-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" className="section" style={{ borderTop: "1px solid var(--linea)" }}>
        <div className="wrap">
          <div className="reserva-grid">
            <div className="reveal">
              <p className="sec-kicker">Reserva</p>
              <h2 className="sec-title" style={{ fontSize: "clamp(28px,4vw,48px)" }}>¿Hablamos de tu fecha?</h2>
              <p className="tel-gigante"><a href="tel:+56228403315">+56 2 2840 3315</a></p>
              <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <a href="https://wa.me/56984033315" target="_blank" rel="noopener noreferrer" className="btn-primary">Cotizar mi fecha</a>
                <span style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris)" }}>Respuesta en &lt;2 h hábiles</span>
              </div>
              <p className="micro">Cotización con fecha, asistencia y precios por escrito en 24 h.</p>
              <div className="reserva-meta">
                <div><strong>WhatsApp</strong> · +56 9 8403 3315 · hola@eter-eventos.cl</div>
                <div><strong>Visitas</strong> · Lun–Sáb 10:00–19:00 · Dom con reserva</div>
                <div><strong>Dirección</strong> · La Reina, Santiago — a 5 min de Príncipe de Gales</div>
              </div>
              <div className="mapa-linea">
                <span className="mapa-linea-dot" aria-hidden />
                <span className="mapa-linea-text">La Reina · acceso por Av. Larraín · estacionamiento privado 60 autos · acceso parque</span>
              </div>
            </div>
            <div className="reveal d1" style={{ border: "1px solid var(--linea)", padding: 24, background: "var(--papel)" }}>
              <p style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)", margin: "0 0 16px" }}>Solicitar cotización</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Gracias — te contactamos en menos de 2 h hábiles con precios y disponibilidad.") }} style={{ display: "grid", gap: 12 }}>
                <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gris)" }}>
                  Nombre
                  <input required placeholder="Tu nombre" style={{ border: "1px solid var(--linea)", background: "var(--papel)", padding: "12px 14px", borderRadius: 0, fontSize: 14, color: "var(--tinta)", outline: "none" }} />
                </label>
                <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gris)" }}>
                  Fecha tentiva
                  <input type="date" required style={{ border: "1px solid var(--linea)", background: "var(--papel)", padding: "12px 14px", borderRadius: 0, fontSize: 14, color: "var(--tinta)", outline: "none" }} />
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gris)" }}>
                    Asistencia
                    <input required placeholder="Ej. 120" type="number" min={10} style={{ border: "1px solid var(--linea)", background: "var(--papel)", padding: "12px 14px", borderRadius: 0, fontSize: 14, color: "var(--tinta)", outline: "none" }} />
                  </label>
                  <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gris)" }}>
                    Tipo
                    <select required style={{ border: "1px solid var(--linea)", background: "var(--papel)", padding: "12px 14px", borderRadius: 0, fontSize: 14, color: "var(--tinta)", outline: "none" }}>
                      <option value="">Elige</option>
                      <option>Matrimonio</option>
                      <option>Corporativo</option>
                      <option>Cumpleaños</option>
                      <option>Cóctel</option>
                    </select>
                  </label>
                </div>
                <label style={{ display: "grid", gap: 6, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gris)" }}>
                  Mensaje
                  <textarea placeholder="Cuéntanos qué imaginas" rows={3} style={{ border: "1px solid var(--linea)", background: "var(--papel)", padding: "12px 14px", borderRadius: 0, fontSize: 14, color: "var(--tinta)", outline: "none", resize: "vertical" }} />
                </label>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", marginTop: 4 }}>Cotizar mi fecha</button>
                <p className="micro" style={{ textAlign: "center", marginTop: 4 }}>Respuesta en &lt;2 h hábiles · sin compromiso</p>
              </form>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-inner">
              <span>© 2026 ÉTER — Casa de Eventos · La Reina, Santiago</span>
              <span>Razón social: ÉTER SpA · RUT 76.000.000-1 · hola@eter-eventos.cl</span>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
