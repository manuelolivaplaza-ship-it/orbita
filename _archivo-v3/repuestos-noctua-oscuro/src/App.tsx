import { useEffect, useRef, useState } from "react"

const BASE = import.meta.env.BASE_URL
const img = (p: string) => `${BASE}media/${p}`

const CATALOGO = [
  { n: "01", nombre: "Frenos", desc: "Pastillas · discos · tambores · sensores", count: "— 4.200 códigos", skus: "Brembo · Textar · TRW · Bosch", compat: "VIN + medida exacta", precio: "desde $18.900 con IVA" },
  { n: "02", nombre: "Suspensión y dirección", desc: "Amortiguadores · bandejas · terminales", count: "— 3.800 códigos", skus: "Monroe · Kayaba · CTR · Febi", compat: "Por chasis y año", precio: "desde $24.500 con IVA" },
  { n: "03", nombre: "Motor y distribución", desc: "Correas · bombas · kits · empaques", count: "— 5.600 códigos", skus: "Gates · SKF · INA · Mahle", compat: "Código OEM verificado", precio: "desde $12.900 con IVA" },
  { n: "04", nombre: "Eléctrico y encendido", desc: "Alternadores · arranque · bobinas · sensores", count: "— 2.900 códigos", skus: "Valeo · Denso · Delphi · NGK", compat: "Por VIN, sin error", precio: "desde $9.900 con IVA" },
  { n: "05", nombre: "Filtros y lubricación", desc: "Aceite · aire · combustible · habitáculo", count: "— 3.400 códigos", skus: "Mann · Mahle · Bosch · K&N", compat: "Medida y rosca exacta", precio: "desde $6.500 con IVA" },
  { n: "06", nombre: "Carrocería y espejos", desc: "Espejos · ópticos · parachoques · manillas", count: "— 1.800 códigos", skus: "TYC · Depo · Prasco", compat: "Por modelo y lado", precio: "desde $19.900 con IVA" },
]

const PRECIOS = [
  { prod: "Pastillas freno delantero", sku: "PF-D-AXIAL · Original / Alternativo homologado", spec: "Cerámica · con sensor", price: 28900, highlight: true },
  { prod: "Disco de freno ventilado par", sku: "DF-V-280 · Original / Homologado", spec: "280mm · 5×114.3", price: 54900, highlight: false },
  { prod: "Filtro aceite + aire kit", sku: "KIT-FA-03 · Mann / Mahle", spec: "Rosca M20×1.5", price: 18900, highlight: false },
  { prod: "Kit embrague completo", sku: "KE-230 · Valeo / Sachs", spec: "Disco+prensa+rodamiento", price: 129900, highlight: false },
  { prod: "Amortiguador delantero (unidad)", sku: "AM-KYB-01 · Kayaba Excel-G", spec: "Gas · OEM 54661-2E200", price: 48900, highlight: false },
  { prod: "Bomba de agua con empaque", sku: "BA-GMB-08 · GMB / Gates", spec: "Con termostato opcional", price: 35900, highlight: false },
]

const FAQS = [
  { q: "¿Cómo verifican que el repuesto le hace a mi auto?", a: "Por VIN o patente. Cruzamos código OEM exacto y medida contra tu chasis, año y motor. Si hay dos variantes (ej: con/sin sensor), te pedimos foto del original antes de vender. Si no calza, lo decimos antes de cobrar." },
  { q: "¿Original o alternativo homologado? ¿Qué conviene?", a: "Ambos con garantía escrita. Original cuando la tolerancia es crítica (distribución, electrónica). Alternativo homologado (Brembo, Mann, Gates, Valeo) misma norma, 30–45% menos. Te mostramos las dos opciones con precio con IVA y eliges." },
  { q: "¿Despachan de noche y a regiones el mismo día?", a: "RM: despacho noche 18–23h y madrugada 05–08h si pides antes de las 18:00. Regiones: retiro en 30 min en 10 de Julio o despacho Starken/Chilexpress día siguiente. Te avisamos con guía y foto del código antes de salir." },
  { q: "¿Puedo devolver si no calzó por error de código?", a: "Sí. Si el error fue nuestro, cambio inmediato sin costo y retiramos. Si fue pedido sin VIN verificado, evaluamos cambio con 10% de reposición si la caja está intacta. Por eso insistimos en verificar por VIN antes." },
  { q: "¿Boleta, factura y crédito taller?", a: "Boleta o factura SII al tiro, también en horario extendido. Crédito taller 30 días con RUT y carpeta tributaria (evaluación 24h). Pago: transferencia, Webpay, crédito. Sin letra chica: el total con IVA se confirma por VIN y stock del día antes de pagar." },
  { q: "¿Tienen stock real o es “a pedido de 10 días”?", a: "Stock real en 10 de Julio: 42.000 códigos físicos. Si aparece disponible está en estantería. Si no lo tenemos, te decimos alternativas equivalentes esa misma hora — no te dejamos esperando sin repuesto." },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on, .reveal")
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) } })
    }, { threshold: 0.14 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(target); return }
        const t0 = performance.now()
        const dur = 1200
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(target * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [target])
  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{n.toLocaleString("es-CL")}{suffix}</span>
}

export function App() {
  const [compacta, setCompacta] = useState(false)
  const [oculta, setOculta] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [menu, setMenu] = useState(false)
  const [openCat, setOpenCat] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [progress, setProgress] = useState(0)
  const [formOk, setFormOk] = useState(false)
  const [vin, setVin] = useState("")
  const lastY = useRef(0)
  const dotRef = useRef<HTMLDivElement>(null)
  useReveal()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setCompacta(y > 18)
      setOculta(y > lastY.current && y > 120)
      lastY.current = y
      setSticky(y > window.innerHeight * 0.7)
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? y / max : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const dot = dotRef.current
    if (!dot) return
    const pos = { x: -100, y: -100 }
    const cur = { x: -100, y: -100 }
    const onMove = (e: MouseEvent) => { pos.x = e.clientX; pos.y = e.clientY }
    const onEnter = (e: Event) => { const t = e.target as HTMLElement; if (t.closest("a,button")) dot.classList.add("hover") }
    const onLeave = (e: Event) => { const t = e.target as HTMLElement; if (t.closest("a,button")) dot.classList.remove("hover") }
    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onEnter)
    document.addEventListener("mouseout", onLeave)
    let raf = 0
    const lerp = () => {
      cur.x += (pos.x - cur.x) * 0.18
      cur.y += (pos.y - cur.y) * 0.18
      if (dot) { dot.style.left = cur.x + "px"; dot.style.top = cur.y + "px" }
      raf = requestAnimationFrame(lerp)
    }
    raf = requestAnimationFrame(lerp)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseover", onEnter); document.removeEventListener("mouseout", onLeave) }
  }, [])

  useEffect(() => { document.documentElement.classList.add("ready") }, [])

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" aria-hidden><div className="progress-bar" style={{ transform: `scaleX(${progress})` }} /></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden />

      <nav className={`nav ${compacta ? "compacta" : ""} ${oculta ? "oculta" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-marca">NOCTUA REPUESTOS<span>CASA DE REPUESTOS · 10 DE JULIO</span></a>
          <div className="nav-links">
            <a href="#filosofia">Filosofía</a>
            <a href="#cifras">Cifras</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#precios">Precios</a>
            <a href="#metodo">Método</a>
            <a href="#galeria">Galería</a>
            <a href="#faq">FAQ</a>
            <a href="#reserva" className="btn-champagne">Cotizar por VIN</a>
          </div>
          <button className="nav-toggle" aria-label="Abrir menú" onClick={() => setMenu(v => !v)}>{menu ? "×" : "≡"}</button>
        </div>
      </nav>
      <div className={`nav-drawer ${menu ? "abierto" : ""}`}>
        <a href="#filosofia" onClick={() => setMenu(false)}>Filosofía</a>
        <a href="#cifras" onClick={() => setMenu(false)}>Cifras</a>
        <a href="#catalogo" onClick={() => setMenu(false)}>Catálogo</a>
        <a href="#precios" onClick={() => setMenu(false)}>Precios</a>
        <a href="#metodo" onClick={() => setMenu(false)}>Método</a>
        <a href="#galeria" onClick={() => setMenu(false)}>Galería</a>
        <a href="#faq" onClick={() => setMenu(false)}>FAQ</a>
        <a href="#reserva" onClick={() => setMenu(false)} style={{ color: "var(--champagne)", borderBottom: "none", fontWeight: 700 }}>Cotizar por VIN →</a>
      </div>

      <a href="#reserva" className={`cta-sticky ${sticky ? "visible" : ""}`}>Cotizar por VIN · +56 9 8234 5678</a>

      <section id="inicio" className="hero">
        <div className="hero-text">
          <p className="kicker">Casa de repuestos · 10 de Julio · Desde 2008 · Nocturna</p>
          <h1>
            <span className="line"><i>El repuesto</i></span>
            <span className="line"><i>correcto, hasta</i></span>
            <span className="line"><i>de noche.</i></span>
          </h1>
          <p className="hero-sub">Verificamos por VIN, confirmamos stock real y despachamos en el día — también noche y madrugada. Si no lo tenemos, te decimos al tiro — no te hacemos perder el taller.</p>
          <div className="hero-actions">
            <a href="#reserva" className="btn-champagne">Cotizar por VIN</a>
            <a href="#precios" className="link-underline">Ver precios referencia</a>
          </div>
          <div style={{ marginTop: 22, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={vin} onChange={e => setVin(e.target.value)} placeholder="Ej: VF1... o patente · Marca · Modelo · Año" aria-label="Buscar por VIN" className="field" style={{ maxWidth: 360, flex: "1 1 200px" }} />
            <button className="btn-champagne" onClick={() => document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" })}>Verificar</button>
          </div>
          <p className="micro">Respuesta en &lt;15 min hábil · Foto del código antes de cobrar · Si no calza, te decimos antes de vender.</p>
          <p className="micro" style={{ marginTop: 4 }}>¿Auto detenido? <a href="https://wa.me/56982345678" target="_blank" rel="noreferrer" style={{ color: "var(--champagne)", textDecoration: "underline", textUnderlineOffset: 3 }}>Escríbenos +56 9 8234 5678</a></p>
        </div>
        <div className="hero-media">
          <img src={img("mostrador.jpg")} alt="Mostrador técnico nocturno con estanterías y cajas alineadas, luz cálida rasante" loading="eager" width={1600} height={900} />
          <div className="hero-caption"><span>Stock verificable · Código y compatibilidad a la vista</span><span>10 de Julio 771 · RM</span></div>
        </div>
      </section>

      <div className="hero-banda" aria-hidden>
        <div className="hero-banda-inner">
          <span><b>Stock real</b> · 42.000 códigos</span><span>·</span><span><b>Compatibilidad por VIN</b> · sin error</span><span>·</span><span><b>Despacho hoy RM</b> · noche incluida</span><span>·</span><span><b>Retiro en 30 min</b></span>
        </div>
      </div>

      <section id="filosofia" className="dark-layer">
        <div className="wrap">
          <div className="filosofia reveal-on">
            <p className="kicker">Filosofía</p>
            <h2>No vendemos humo.<br />Vendemos el código que calza.</h2>
            <p>Dieciocho años en 10 de Julio nos enseñaron una cosa: el taller no puede quedar parado esperando. Por eso verificamos por VIN, confirmamos con foto del código y <strong>solo entonces</strong> cobramos. Preferimos perder una venta que vender el parecido.</p>
            <p>De día atendemos mesón. De noche preparamos y despachamos — noche y madrugada — para que el auto no duerma en el elevador.</p>
            <div className="quote">“Si no hay stock, lo ves antes de pagar. De noche también.”</div>
          </div>
        </div>
      </section>

      <section id="cifras">
        <div className="wrap">
          <p className="kicker">Cifras que importan</p>
          <h2 style={{ marginTop: 10 }}>Números de bodega, no de marketing.</h2>
          <p className="sub" style={{ marginTop: 12 }}>Stock medido, despachos contados, talleres que vuelven.</p>
          <div className="cifras-grid">
            <div className="cifra"><div className="cifra-num"><em>+</em><CountUp target={18} /> años</div><div className="cifra-label">en 10 de Julio · desde 2008</div></div>
            <div className="cifra"><div className="cifra-num"><em>+</em><CountUp target={42} suffix=".000" /> códigos</div><div className="cifra-label">en catálogo físico verificable</div></div>
            <div className="cifra"><div className="cifra-num"><CountUp target={94} suffix="%" /> noche</div><div className="cifra-label">despacho en el día RM · noche incluida</div></div>
            <div className="cifra"><div className="cifra-num"><em>+</em><CountUp target={1200} /> talleres</div><div className="cifra-label">confían · La Florida a Quilicura</div></div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="dark-layer">
        <div className="wrap">
          <p className="kicker">Catálogo por VIN</p>
          <h2>El repuesto que buscas, sin adivinar.</h2>
          <p className="sub" style={{ marginTop: 12 }}>Seis familias. Cada una verificada por VIN, medida y norma. Toca para ver compatibilidad y precio desde.</p>
          <div className="catalogo-list">
            {CATALOGO.map((c, i) => (
              <div key={c.n} className={`catalogo-row ${openCat === i ? "open" : ""}`} onClick={() => setOpenCat(openCat === i ? null : i)} role="button" tabIndex={0} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpenCat(openCat === i ? null : i) }} aria-expanded={openCat === i}>
                <div className="catalogo-num">{c.n}</div>
                <div>
                  <h3 className="catalogo-name">{c.nombre}</h3>
                  <div className="catalogo-desc">{c.desc} · {c.count}</div>
                </div>
                <div className="catalogo-arrow">+</div>
                <div className="catalogo-expand" aria-hidden={openCat !== i}>
                  <div className="catalogo-expand-inner">
                    <div className="catalogo-panel">
                      <div><dt>Marcas</dt><dd>{c.skus}</dd></div>
                      <div><dt>Compatibilidad</dt><dd>{c.compat}</dd></div>
                      <div><dt>Precio</dt><dd style={{ color: "var(--champagne)", fontWeight: 600 }}>{c.precio}</dd></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="micro">¿Dudas de compatibilidad? <a href="#reserva" style={{ color: "var(--champagne)", textDecoration: "underline", textUnderlineOffset: 3 }}>Envía VIN y te confirmamos código exacto</a> — foto del repuesto antes de pagar.</p>
        </div>
      </section>

      <section id="precios" className="dark-layer-2">
        <div className="wrap">
          <p className="kicker">Precios de referencia, sin sorpresas</p>
          <h2>Transparencia de 10 de Julio, con criterio nocturno.</h2>
          <p className="sub" style={{ marginTop: 12 }}>Valores con IVA. El precio final se confirma por VIN y stock del día. Sin letra chica.</p>
          <div className="tabla-wrap">
            <table className="tabla">
              <thead><tr><th>Producto</th><th className="mono">Formato</th><th style={{ textAlign: "right" }}>Precio desde</th></tr></thead>
              <tbody>
                {PRECIOS.map(r => (
                  <tr key={r.prod} style={r.highlight ? { background: "rgba(200,169,106,.08)" } : undefined}>
                    <td>
                      {r.highlight && <span className="badge-champ">Destacado</span>}
                      <div>{r.prod}</div><div className="mono" style={{ color: "var(--gris)", fontSize: 11, marginTop: 4 }}>{r.sku} · {r.spec}</div>
                    </td>
                    <td className="mono" style={{ color: "var(--gris)", fontSize: 11 }}>{r.sku.includes("Original") ? "Original / Alternativo homologado" : "Unidad / kit"}</td>
                    <td className="price" style={{ textAlign: "right" }}>${r.price.toLocaleString("es-CL")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="nota">Precio final se confirma por VIN y stock del día. Con IVA. Incluye garantía escrita. Despacho RM hoy si pides antes de 18:00 — noche incluida sin recargo. Retiro en 30 min en 10 de Julio 771.</p>
        </div>
      </section>

      <section id="metodo">
        <div className="wrap">
          <p className="kicker">Método nocturno</p>
          <h2>VIN → Foto → Despacho. Sin vueltas.</h2>
          <div className="metodo-grid">
            <div className="metodo-col reveal-on"><div className="metodo-num">01</div><h3 className="metodo-title">Cotizas por VIN</h3><p className="metodo-desc">Envías VIN o patente + foto si tienes. Respuesta en &lt;15 min hábil con código exacto, marca y precio con IVA. Si hay dos variantes, te pedimos foto del original.</p></div>
            <div className="metodo-col reveal-on"><div className="metodo-num">02</div><h3 className="metodo-title">Confirmamos stock con foto</h3><p className="metodo-desc">Te mandamos foto del código en estantería y confirmación de compatibilidad por chasis. Solo entonces pagas. Si no calza, te decimos antes — no después.</p></div>
            <div className="metodo-col reveal-on"><div className="metodo-num">03</div><h3 className="metodo-title">Retiro o despacho noche</h3><p className="metodo-desc">Retiro en 30 min en 10 de Julio o despacho RM noche/madrugada con seguimiento. Factura al tiro. Garantía escrita. El taller no queda detenido.</p></div>
          </div>
        </div>
      </section>

      <section id="galeria" className="dark-layer">
        <div className="wrap">
          <p className="kicker">Galería técnica</p>
          <h2>El repuesto como pieza técnica, no como decoración.</h2>
          <div className="galeria-grid">
            <figure className="gal-card reveal ken" style={{ margin: 0 }}>
              <div className="gal-wrap" style={{ aspectRatio: "16/9" }}>
                <img src={img("bodega.jpg")} alt="Pasillo de bodega nocturna ordenado con cajas rotuladas por código, simetría industrial, luz cálida" loading="lazy" width={1600} height={900} />
              </div>
              <figcaption className="caption"><span>Bodega nocturna · pasillo 03 · cajas por código OEM</span><span>10 de Julio 771</span></figcaption>
            </figure>
            <figure className="gal-card reveal" style={{ margin: 0 }}>
              <div className="gal-wrap" style={{ aspectRatio: "4/5" }}>
                <img src={img("detalle.jpg")} alt="Macro de disco de freno nuevo sobre superficie oscura, luz rasante cálida, detalle técnico" loading="lazy" width={800} height={800} />
              </div>
              <figcaption className="caption"><span>Detalle técnico · disco ventilado 280mm</span><span>luz rasante / 5600K</span></figcaption>
            </figure>
          </div>
          <div className="galeria-grid" style={{ marginTop: 18 }}>
            <figure className="gal-card reveal" style={{ margin: 0 }}>
              <div className="gal-wrap" style={{ aspectRatio: "4/5" }}>
                <img src={img("kit.jpg")} alt="Bodegón de filtros y pastillas alineados sobre superficie oscura, sombra suave" loading="lazy" width={800} height={1000} />
              </div>
              <figcaption className="caption"><span>Kit filtros y pastillas alineados · sombra suave</span><span>5600K / hueso</span></figcaption>
            </figure>
            <figure className="gal-card reveal" style={{ margin: 0, background: "var(--superficie)", display: "flex", flexDirection: "column", justifyContent: "center", padding: 28 }}>
              <p className="kicker" style={{ margin: 0 }}>Compromiso</p>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 24, lineHeight: 1.25, margin: "12px 0 10px", color: "var(--hueso)" }}>Si no calza,<br />te decimos antes<br />de vender.</p>
              <p style={{ color: "var(--gris)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>Foto del código, medida y compatibilidad por VIN antes de cobrar. Preferimos perder una venta que dejar un auto parado con el repuesto equivocado.</p>
              <a href="#reserva" className="btn-champagne" style={{ marginTop: 18, alignSelf: "flex-start" }}>Cotizar por VIN</a>
            </figure>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <p className="kicker">Preguntas honestas</p>
          <h2>Sin letra chica.</h2>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}>
                  <span>{f.q}</span><span className="faq-icon">+</span>
                </button>
                <div className="faq-a" aria-hidden={faqOpen !== i}>
                  <div className="faq-a-inner"><p>{f.a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserva" className="dark-layer">
        <div className="wrap">
          <p className="kicker">¿Auto detenido? Hablemos ahora.</p>
          <h2 style={{ marginTop: 10 }}>No te hacemos perder el taller.</h2>
          <div className="reserva-box" style={{ marginTop: 28 }}>
            <div className="reserva-left">
              <p className="micro" style={{ margin: 0 }}>Teléfono directo · respuesta humana</p>
              <div className="tel"><a href="tel:+56982345678">+56 9 8234 5678</a></div>
              <p className="micro">ventas@noctuarepuestos.cl · 10 de Julio 771, Santiago · Estacionamiento clientes</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                <a href="https://wa.me/56982345678" target="_blank" rel="noreferrer" className="btn-champagne">WhatsApp ahora</a>
                <a href={`mailto:ventas@noctuarepuestos.cl?subject=Cotización por VIN ${vin ? "— " + vin : ""}`} className="btn-ghost">Escribir correo</a>
              </div>
              <div className="mapa-line" style={{ marginTop: 18 }}>
                <div className="mapa-dot" /><div className="mapa-text">10 de Julio 771 · Santiago · Lun–Vie 8:30–20:00 · Sáb 9:00–18:00 · Noche con despacho programado</div>
              </div>
              <p className="micro">Responde mesón técnico, no bot. Si llamas de noche, dejamos todo preparado para despacho madrugada.</p>
            </div>
            <div className="reserva-right">
              <p style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: 20, color: "var(--hueso)" }}>Cotiza por VIN en 30 segundos</p>
              <input className="field" placeholder="Nombre y taller" aria-label="Nombre" />
              <input className="field" placeholder="WhatsApp" aria-label="WhatsApp" />
              <input className="field" placeholder="VIN / patente · Marca · Modelo · Año" aria-label="VIN" value={vin} onChange={e => setVin(e.target.value)} />
              <textarea className="field" rows={3} placeholder="Qué necesitas (ej: pastillas delanteras con sensor...)" aria-label="Mensaje" />
              {!formOk ? <button className="btn-champagne" onClick={() => setFormOk(true)}>Enviar cotización</button> : <p className="micro" style={{ color: "var(--champagne)", fontWeight: 600 }}>¡Recibido! Te respondemos en &lt;15 min hábil con código exacto y foto.</p>}
              <p className="micro">Horario: Lun–Vie 8:30–20:00 · Sáb 9:00–18:00 · Despacho noche 18–23h / madrugada 05–08h RM.</p>
            </div>
          </div>
          <div className="footer">
            <span>NOCTUA REPUESTOS SpA · RUT 76.123.456-7 · 10 de Julio 771, Santiago · SII · © {new Date().getFullYear()}</span>
            <span style={{ color: "var(--gris)" }}>Hecho para talleres que no pueden parar.</span>
          </div>
        </div>
      </section>
    </>
  )
}
