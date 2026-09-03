import { useEffect, useRef, useState } from "react"

const BASE = import.meta.env.BASE_URL

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true); return
    }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return { ref: ref as React.RefObject<HTMLElement>, visible }
}

function CountUp({ to, suffix = "", duration = 1200 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0)
  const { ref, visible } = useReveal()
  const started = useRef(false)
  useEffect(() => {
    if (!visible || started.current) return
    started.current = true
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(to); return }
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible, to, duration])
  return <span ref={ref as React.RefObject<HTMLSpanElement>} style={{ fontVariantNumeric: "tabular-nums" }}>{val.toLocaleString("es-CL")}{suffix}</span>
}

export function App() {
  const [navCompact, setNavCompact] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number>(0)
  const [voz, setVoz] = useState(0)
  const [vin, setVin] = useState("")
  const [vinMsg, setVinMsg] = useState("")
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)
  const lastY = useRef(0)

  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t) }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setNavCompact(y > 24)
      setNavHidden(y > 200 && y > lastY.current)
      lastY.current = y
      const doc = document.documentElement
      const p = doc.scrollHeight > doc.clientHeight ? (y / (doc.scrollHeight - doc.clientHeight)) * 100 : 0
      setProgress(p)
      const hero = document.getElementById("inicio")
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 400
      setShowSticky(y > heroBottom + 80 && y < doc.scrollHeight - 900)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // voces autoplay pausable
  const vozPaused = useRef(false)
  useEffect(() => {
    const id = setInterval(() => { if (!vozPaused.current) setVoz(v => (v + 1) % 3) }, 5200)
    return () => clearInterval(id)
  }, [])

  const precios = [
    { item: "Pastillas freno delantero", desde: 28900, tipo: "Alternativo homologado", hi: false },
    { item: "Disco freno ventilado", desde: 45900, tipo: "Original / Alternativo", hi: true },
    { item: "Filtro aceite + aire (kit)", desde: 18900, tipo: "Alternativo homologado", hi: false },
    { item: "Kit embrague completo", desde: 129900, tipo: "Original / Alternativo", hi: false },
    { item: "Amortiguador delantero", desde: 54900, tipo: "Alternativo homologado", hi: false },
    { item: "Bomba de agua", desde: 38900, tipo: "Original", hi: false },
  ]

  const cats = [
    { n: "Frenos", c: "— 3.400 códigos", img: "detalle.jpg" },
    { n: "Suspensión / Dirección", c: "— 5.100 códigos", img: "bodega.jpg" },
    { n: "Motor / Distribución", c: "— 7.800 códigos", img: "mostrador.jpg" },
    { n: "Eléctrico / Encendido", c: "— 2.900 códigos", img: "kit.jpg" },
    { n: "Filtros / Lubricación", c: "— 4.200 códigos", img: "detalle.jpg" },
    { n: "Carrocería / Espejos", c: "— 3.600 códigos", img: "bodega.jpg" },
  ]

  const handleVin = () => {
    if (!vin.trim()) { setVinMsg("Ingresa VIN, patente, marca o modelo."); return }
    setVinMsg("Recibido. Te confirmamos código exacto y stock en <15 min hábil por WhatsApp.")
  }

  const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const { ref, visible } = useReveal()
    return <div ref={ref as React.RefObject<HTMLDivElement>} className={`${className} reveal ${visible ? "in" : ""}`}>{children}</div>
  }

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden />
      <nav className={`nav ${navCompact ? "compact" : ""} ${navHidden ? "hidden" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-brand"><span><b>ÉTER</b> REPUESTOS</span> <small>· 10 DE JULIO · DESDE 2008</small></a>
          <div className="nav-links">
            <a href="#cifras">Cifras</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#servicios">Compatibilidad</a>
            <a href="#precios">Precios</a>
            <a href="#metodo">Método</a>
            <a href="#galeria">Galería</a>
            <a href="#faq">FAQ</a>
            <a href="#reserva">Reserva</a>
          </div>
          <div className="nav-cta">
            <a className="nav-tel" href="tel:+56982345678"><span>¿Auto detenido? </span>+56 9 8234 5678</a>
            <a href="#reserva" className="btn-primary">Cotizar por VIN</a>
            <button className="hamburger" aria-label="Menú" onClick={() => setMobOpen(v => !v)}><span /><span /><span /></button>
          </div>
        </div>
      </nav>
      <div className={`mob-nav ${mobOpen ? "open" : ""}`}>
        <a href="#inicio" onClick={() => setMobOpen(false)}>Inicio</a>
        <a href="#cifras" onClick={() => setMobOpen(false)}>Cifras</a>
        <a href="#catalogo" onClick={() => setMobOpen(false)}>Catálogo</a>
        <a href="#servicios" onClick={() => setMobOpen(false)}>Compatibilidad</a>
        <a href="#precios" onClick={() => setMobOpen(false)}>Precios</a>
        <a href="#metodo" onClick={() => setMobOpen(false)}>Método</a>
        <a href="#galeria" onClick={() => setMobOpen(false)}>Galería</a>
        <a href="#faq" onClick={() => setMobOpen(false)}>FAQ</a>
        <a href="#reserva" onClick={() => setMobOpen(false)}>Reserva</a>
        <a href="#reserva" className="btn-primary mob-cta" onClick={() => setMobOpen(false)}>Cotizar por VIN</a>
      </div>

      <main style={{ paddingTop: "var(--nav-h)" }}>
        {/* INICIO */}
        <section id="inicio" className={ready ? "ready" : ""} style={{ paddingBottom: 0, borderBottom: "none" }}>
          <div className="wrap">
            <div className="hero">
              <div>
                <p className="kicker">Casa de repuestos · 10 de Julio · Desde 2008</p>
                <h1><span><i>El repuesto</i></span><span><i>correcto, hoy.</i></span><span><i>Sin vueltas.</i></span></h1>
                <p className="hero-sub">Verificamos por VIN, confirmamos stock real y despachamos en el día. Si no lo tenemos, te decimos al tiro — no te hacemos perder el taller.</p>
                <div className="hero-actions">
                  <a href="#reserva" className="btn-primary">Cotizar por VIN</a>
                  <a href="#precios" className="btn-ghost">Ver precios referencia</a>
                </div>
                <p style={{ fontSize: 12, color: "var(--gris)", marginTop: 14 }}>Respuesta en &lt;15 min hábil · Lun–Vie 8:30–18:30 · Sáb 9:00–14:00</p>
              </div>
              <div className="hero-img">
                <img src={`${BASE}media/mostrador.jpg`} alt="Mostrador técnico luminoso con estanterías y cajas alineadas" />
                <div className="hero-caption"><span>Stock verificable · Código y compatibilidad a la vista</span><span>10 de Julio 771</span></div>
              </div>
            </div>
          </div>
          <div className="banda" style={{ marginTop: 48 }}><div className="wrap">Stock real · Compatibilidad por VIN · Despacho hoy RM · Retiro en 30 min</div></div>
        </section>

        {/* CIFRAS */}
        <section id="cifras" className="cifras">
          <div className="wrap">
            <Reveal>
              <div className="cifras-grid">
                <div className="cifra"><div className="cifra-num">+<CountUp to={18} /> años</div><div className="cifra-label">En 10 de Julio</div><div className="cifra-sub">Desde 2008, mismo mostrador</div></div>
                <div className="cifra"><div className="cifra-num">+<CountUp to={42000} /></div><div className="cifra-label">Códigos en catálogo</div><div className="cifra-sub">Original y alternativo homologado</div></div>
                <div className="cifra"><div className="cifra-num"><CountUp to={94} suffix="%" /> </div><div className="cifra-label">Despacho en el día RM</div><div className="cifra-sub">Hábil, con stock confirmado</div></div>
                <div className="cifra"><div className="cifra-num">+<CountUp to={1200} /></div><div className="cifra-label">Talleres confían</div><div className="cifra-sub">Cuenta corriente taller disponible</div></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COMPATIBILIDAD / SERVICIOS - covers #servicios and #compatibilidad alias */}
        <section id="servicios">
          <div id="compatibilidad" style={{ position: "relative", top: -84 }} aria-hidden />
          <div className="wrap">
            <Reveal>
              <p className="kicker">Compatibilidad</p>
              <h2 className="h2">¿Le hace a mi auto? Lo verificamos por VIN.</h2>
              <p className="lead2">No vendemos a ojo. Nos envías VIN o patente y confirmamos el código exacto antes de cobrar. Si no calza, te decimos antes de vender.</p>
            </Reveal>
            <div className="compat-grid" style={{ marginTop: 28 }}>
              <Reveal className="vin-box">
                <label htmlFor="vin">Buscador por VIN / Patente / Modelo</label>
                <div className="vin-row">
                  <input id="vin" value={vin} onChange={e => setVin(e.target.value)} placeholder="Ej: VF1... o patente · Marca · Modelo · Año" />
                  <button className="btn-rojo" onClick={handleVin}>Verificar</button>
                </div>
                {vinMsg && <p style={{ fontSize: 13, color: vinMsg.includes("Recibido") ? "var(--tinta)" : "var(--rojo-signal)", margin: 0 }}>{vinMsg}</p>}
                <p className="vin-hint">UI demostrativa · La verificación real la hace nuestro equipo por WhatsApp en minutos. Sin compromiso.</p>
              </Reveal>
              <Reveal>
                <div style={{ border: "1px solid var(--linea)", background: "#fff", padding: 20 }}>
                  <p style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gris)", margin: "0 0 8px" }}>Horario de verificación</p>
                  <p style={{ fontSize: 14, margin: 0 }}>Lun–Vie 8:30–18:30 · Sáb 9:00–14:00<br /><span style={{ color: "var(--gris)", fontSize: 13 }}>Fuera de horario dejamos tu consulta en cola prioritaria.</span></p>
                  <div className="divider" />
                  <p style={{ fontSize: 12, color: "var(--gris)", margin: 0 }}>¿Auto detenido? Escríbenos · <a href="https://wa.me/56982345678" style={{ color: "var(--rojo-signal)", textDecoration: "underline" }}>+56 9 8234 5678</a></p>
                </div>
              </Reveal>
            </div>
            <div className="steps">
              <div className="step"><div className="step-num">01</div><div className="step-title">Envías VIN</div><div className="step-desc">Foto del padrón, VIN o patente + modelo/año.</div></div>
              <div className="step"><div className="step-num">02</div><div className="step-title">Confirmamos código exacto</div><div className="step-desc">Te mandamos foto del repuesto y código OEM.</div></div>
              <div className="step"><div className="step-num">03</div><div className="step-title">Retiras o despachamos</div><div className="step-desc">Retiro en 30 min o despacho hoy con seguimiento.</div></div>
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section id="precios">
          <div className="wrap">
            <Reveal>
              <p className="kicker">Transparencia</p>
              <h2 className="h2">Precios de referencia, sin sorpresas.</h2>
              <p className="lead2">Valores DESDE con IVA incluido, verificables por VIN. El precio final se confirma según stock del día y compatibilidad exacta.</p>
            </Reveal>
            <Reveal>
              <div className="tabla-wrap" style={{ marginTop: 28 }}>
                <table>
                  <thead><tr><th>Repuesto</th><th>Desde</th><th>Origen</th><th>Disponibilidad</th></tr></thead>
                  <tbody>
                    {precios.map(p => (
                      <tr key={p.item} className={p.hi ? "highlight" : ""}>
                        <td style={{ fontWeight: 600 }}>{p.item}</td>
                        <td className="price">${p.desde.toLocaleString("es-CL")}</td>
                        <td><span className="badge">{p.tipo}</span></td>
                        <td style={{ color: "var(--gris)", fontSize: 12 }}>Stock verificable</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="nota">Precio final se confirma por VIN y stock del día. Con IVA. Sin letra chica. Despacho RM hoy si compras antes de 14:00. Regiones 24–48 h.</p>
            </Reveal>
          </div>
        </section>

        {/* CATALOGO / STOCK - covers #catalogo and #stock */}
        <section id="catalogo">
          <div id="stock" style={{ position: "relative", top: -84 }} aria-hidden />
          <div className="wrap">
            <Reveal>
              <p className="kicker">Catálogo</p>
              <h2 className="h2">Stock a la vista. Código por código.</h2>
              <p className="lead2">Más de 42.000 códigos ordenados. Cada categoría con foto técnica real — nada de renders con brillo neón.</p>
            </Reveal>
            <div className="catalogo-grid" style={{ marginTop: 28 }}>
              {cats.map(c => (
                <a key={c.n} href="#reserva" className="cat-card">
                  <img src={`${BASE}media/${c.img}`} alt={`${c.n} repuestos`} loading="lazy" />
                  <div className="cat-hover"><span>Ver compatibilidad</span></div>
                  <div className="cat-info"><span className="cat-name">{c.n}</span><span className="cat-count">{c.c}</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* METODO */}
        <section id="metodo">
          <div className="wrap">
            <Reveal>
              <p className="kicker">Método</p>
              <h2 className="h2">Tres pasos. Cero humo.</h2>
            </Reveal>
            <div className="metodo-grid" style={{ marginTop: 28 }}>
              <div className="metodo-col"><div className="metodo-num">01</div><div className="metodo-title">Cotizas por VIN</div><p className="metodo-desc">Nos escribes por WhatsApp con VIN o patente. Respuesta en &lt;15 min hábil con foto y código exacto.</p></div>
              <div className="metodo-col"><div className="metodo-num">02</div><div className="metodo-title">Confirmamos stock y compatibilidad</div><p className="metodo-desc">Verificamos por catálogo OEM, confirmamos stock real en bodega y te damos precio cerrado.</p></div>
              <div className="metodo-col"><div className="metodo-num">03</div><div className="metodo-title">Retiro o despacho con seguimiento</div><p className="metodo-desc">Retiro en tienda en 30 min o despacho con número de seguimiento. Si no calzó, devolución simple.</p></div>
            </div>
          </div>
        </section>

        {/* GALERIA + VOCES alias */}
        <section id="galeria">
          <div id="voces" style={{ position: "relative", top: -84 }} aria-hidden />
          <div className="wrap">
            <Reveal>
              <p className="kicker">Bodega & taller</p>
              <h2 className="h2">Orden industrial, luz norte.</h2>
              <p className="lead2">Pasillos simétricos, cajas rotuladas, kits alineados. El repuesto como protagonista técnico.</p>
            </Reveal>
            <Reveal>
              <div className="galeria-grid" style={{ marginTop: 28 }}>
                <div><img src={`${BASE}media/bodega.jpg`} alt="Pasillo de bodega claro ordenado con cajas rotuladas" loading="lazy" /><p style={{ fontSize: 11, color: "var(--gris)", marginTop: 6, letterSpacing: ".06em", textTransform: "uppercase" }}>Bodega · Simetría industrial · Stock rotulado</p></div>
                <div><img src={`${BASE}media/kit.jpg`} alt="Kit de filtros y pastillas alineados sobre superficie hueso" loading="lazy" /><p style={{ fontSize: 11, color: "var(--gris)", marginTop: 6, letterSpacing: ".06em", textTransform: "uppercase" }}>Kit · Filtros y pastillas · Sombra suave</p></div>
                <div><img src={`${BASE}media/detalle.jpg`} alt="Macro de disco de freno nuevo sobre papel kraft" loading="lazy" /><p style={{ fontSize: 11, color: "var(--gris)", marginTop: 6, letterSpacing: ".06em", textTransform: "uppercase" }}>Detalle · Disco ventilado · Luz rasante</p></div>
              </div>
            </Reveal>

            <div style={{ marginTop: 48 }}>
              <Reveal>
                <p className="kicker">Voces</p>
                <h2 className="h2" style={{ fontSize: "clamp(22px,3vw,30px)" }}>Lo que dicen los talleres.</h2>
              </Reveal>
              <div className="voces-wrap" onMouseEnter={() => { vozPaused.current = true }} onMouseLeave={() => { vozPaused.current = false }}>
                <div className="voces-track">
                  {[
                    { q: "“Nos confirmaron por VIN que el kit no era el mismo y nos ahorraron una devolución. Llegó en la tarde y el auto salió al día siguiente.”", a: "— Taller M. Rojas, La Florida · cliente desde 2019" },
                    { q: "“Stock real. Si no lo tienen, te dicen al tiro. Preferimos eso a perder medio día esperando.”", a: "— Taller Don Bosco, Santiago Centro · cliente desde 2017" },
                    { q: "“Despacho hoy y factura sin peros. Para flota es clave que el código calce a la primera.”", a: "— Flota Sur, La Cisterna · cliente desde 2021" },
                  ].map((v, i) => (
                    <div key={i} className={`voz ${voz === i ? "active" : ""}`}>
                      <blockquote>{v.q}</blockquote>
                      <cite>{v.a}</cite>
                    </div>
                  ))}
                </div>
                <div className="voz-dots" role="tablist" aria-label="Testimonios">
                  {[0, 1, 2].map(i => (
                    <button key={i} className={voz === i ? "active" : ""} aria-label={`Testimonio ${i + 1}`} onClick={() => setVoz(i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="wrap">
            <Reveal>
              <p className="kicker">Preguntas honestas</p>
              <h2 className="h2">Sin jerga, sin letra chica.</h2>
            </Reveal>
            <div className="faq-list" style={{ marginTop: 28 }}>
              {[
                { q: "¿Cómo verifican que el repuesto le hace a mi auto?", a: "Con VIN o patente + modelo/año. Cruzamos por catálogo OEM y te mandamos foto del código antes de vender. Si no calza, te lo decimos antes de cobrar." },
                { q: "¿Original o alternativo? ¿Qué garantía tiene?", a: "Trabajamos ambas líneas: original y alternativo homologado con garantía escrita. Te decimos cuál conviene según uso y presupuesto, sin empujar el más caro." },
                { q: "¿Qué garantía tiene el repuesto?", a: "6 meses por falla de fabricación en uso normal. No cubre mal montaje. Guardamos lote y factura para trazabilidad." },
                { q: "¿Despachan hoy a regiones?", a: "RM hoy si compras antes de 14:00. Regiones 24–48 h hábiles vía Starken/Chilexpress según comuna. Te damos número de seguimiento." },
                { q: "¿Puedo devolver si no calzó?", a: "Sí, dentro de 10 días con empaque intacto y sin montar. Si el error fue nuestro en la verificación, asumimos el despacho." },
                { q: "¿Tienen boleta/factura y pago a crédito taller?", a: "Sí. Boleta y factura con giro repuestos. Talleres con cuenta corriente pueden operar a 30 días previa evaluación." },
              ].map((f, i) => (
                <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}>
                    <span>{f.q}</span><span className="faq-icon" aria-hidden />
                  </button>
                  <div className="faq-a"><div className="faq-a-inner"><p>{f.a}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESERVA */}
        <section id="reserva" style={{ borderBottom: "none" }}>
          <div className="wrap">
            <Reveal>
              <p className="kicker">Contacto directo</p>
              <h2 className="h2">¿Auto detenido? Hablemos ahora.</h2>
              <p className="lead2">Cotización por VIN en minutos. Si no lo tenemos, te decimos al tiro.</p>
            </Reveal>
            <div className="reserva-grid" style={{ marginTop: 28 }}>
              <div>
                <div className="tel-big"><a href="tel:+56982345678">+56 9 8234 5678</a></div>
                <a href="https://wa.me/56982345678" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: "var(--rojo-signal)", borderColor: "var(--rojo-signal)" }}>Escribir por WhatsApp</a>
                <ul className="detail-list">
                  <li><span>Correo</span><strong>ventas@eterrepuestos.cl</strong></li>
                  <li><span>Dirección</span><strong>10 de Julio 771, Santiago</strong></li>
                  <li><span>Horario</span><strong>Lun–Vie 8:30–18:30 · Sáb 9:00–14:00</strong></li>
                  <li><span>Despacho</span><strong>RM hoy · Regiones 24–48 h</strong></li>
                  <li><span>Estacionamiento</span><strong>Clientes · 30 min</strong></li>
                </ul>
              </div>
              <div className="mapa">
                <svg className="mapa-svg" viewBox="0 0 400 180" aria-hidden>
                  <rect width="400" height="180" fill="var(--papel)" stroke="var(--linea)" />
                  <path d="M40 90 H360 M200 20 V160" stroke="var(--linea-2)" strokeWidth="1" />
                  <text x="200" y="36" textAnchor="middle" fontSize="9" letterSpacing="2" fill="var(--gris)">10 DE JULIO</text>
                  <rect x="178" y="78" width="44" height="28" fill="none" stroke="var(--rojo-signal)" strokeWidth="1.2" />
                  <text x="200" y="96" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--tinta)">ÉTER 771</text>
                  <circle cx="200" cy="92" r="2.5" fill="var(--rojo-signal)" />
                  <text x="200" y="124" textAnchor="middle" fontSize="7" letterSpacing="1.2" fill="var(--gris)">ESTACIONAMIENTO CLIENTES</text>
                </svg>
                <p className="mapa-caption">10 de Julio 771, Santiago — A pasos de Portugal · Micro-mapa esquemático</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div><strong>ÉTER REPUESTOS SpA</strong> · RUT 76.123.456-7<br />Giro: Comercialización de repuestos automotrices · SII · © 2026<br />10 de Julio 771, Santiago — Estacionamiento clientes</div>
            <div style={{ textAlign: "right" }}><span style={{ letterSpacing: ".08em", textTransform: "uppercase", fontSize: 10 }}>Propuesta Órbita</span><br />Diseño claro minimalista · Papel #F8F5EF</div>
          </div>
        </div>
      </footer>

      <div className={`sticky-cta ${showSticky ? "visible" : ""}`}>
        <small>¿Auto detenido? Escríbenos</small>
        <a href="https://wa.me/56982345678" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "8px 14px", fontSize: 11 }}>Cotizar por VIN</a>
      </div>
    </>
  )
}
