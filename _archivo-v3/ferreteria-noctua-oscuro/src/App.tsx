import { useEffect, useRef, useState } from "react"

const BASE = import.meta.env.BASE_URL
const img = (p: string) => `${BASE}media/${p}`

function useRevealTrigger() {
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
      { threshold: 0.14 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function CountUp({ target, suffix = "", duration = 1200 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(target); return }
          const t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(target * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])
  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{n.toLocaleString("es-CL")}{suffix}</span>
}

const catalogo = [
  { n: "01", nombre: "Fierro pesado 6mt", desc: "Ángulo, canal, tubular", medida: "40×40×5 a 100×100×6mm", norma: "ASTM A36 / NCh203", precio: "desde $24.900 con IVA", stock: "Stock pesado San Bernardo" },
  { n: "02", nombre: "Planchas", desc: "Diamantada, lisa, zinc", medida: "3mm–6mm · 1500×3000", norma: "Antideslizante / ASTM", precio: "desde $89.500 con IVA", stock: "Stock 3mm inmediato" },
  { n: "03", nombre: "Pernos estructurales", desc: "G8.8, G10.9, ASTM A325", medida: "Ø 1/2\" a 1\" · L 1\" a 6\"", norma: "A325 / 8.8 galvanizado", precio: "desde $34.900 ciento con IVA", stock: "Lote trazado" },
  { n: "04", nombre: "Herramientas y soldadura", desc: "Esmeriles, soldadoras, electrodos", medida: "6011 · 7018 · MIG", norma: "Indura / Lincoln", precio: "desde $8.900 kg con IVA", stock: "Stock taller" },
  { n: "05", nombre: "EPP y abrasivos noche", desc: "Cascos, guantes, discos, lentes", medida: "Kit obra + disco 7\"", norma: "Certificado ISP", precio: "desde $12.400 con IVA", stock: "Stock nocturno" },
]

const precios = [
  { producto: "Ángulo 50×50×5mm 6mt", medida: "50×50×5mm", formato: "Tira 6mt", precio: "$24.900" },
  { producto: "Plancha diamantada 3mm 1500×3000", medida: "3×1500×3000mm", formato: "Unidad", precio: "$89.500" },
  { producto: "Perno estructural 3/4×3\" G8.8 ciento", medida: "Ø3/4\"×3\"", formato: "Ciento (100 un)", precio: "$34.900" },
  { producto: "Soldadura 6011 kg", medida: "3.25mm", formato: "Kilo", precio: "$8.900" },
  { producto: "Casco + guante kit", medida: "Talla única", formato: "Kit", precio: "$12.400" },
]

const faqs = [
  { q: "¿Realmente preparan y despachan de noche/madrugada y qué comunas cubren?", a: "Sí. Turno noche con reserva 18:00–23:00 + despacho madrugada programado 05:00–08:00 RM: Santiago, San Bernardo, Puente Alto, Maipú, Quilicura, Pudahuel, La Florida y comunas aledañas. Coordinamos ventana y te avisamos antes de salir. Regiones a convenir." },
  { q: "¿Qué fierro tienen en stock pesado 6mt y qué traen a pedido 48–72h?", a: "Stock pesado San Bernardo: ángulos 40–100mm, canales, tubulares y planchas diamantadas 3mm. Medidas especiales o espesores mayores a 6mm a pedido 48–72h con abono 30% — no te vendemos el 'parecido' sin avisar." },
  { q: "¿Corte y doblado nocturno con qué tolerancia y cuánto cobran?", a: "Corte nocturno $1.500 por corte, doblado según plano desde $3.800. Tolerancia ±1mm, escuadra verificada con calibre y escuadra. Pieza rotulada por medida y guía con kilos reales. Si cotizas antes de las 16:00, preparamos esa misma noche." },
  { q: "¿Venta por mayor vs detalle en turno noche y desde cuántas tiras/cientos?", a: "Desde 1 tira / 1 ciento, sin mínimo, también de noche. Por mayor desde 15 tiras o 8 cientos: precio volumen. Crédito empresa 30 días evaluado igual en horario extendido (RUT + carpeta)." },
  { q: "¿Boleta/factura y crédito empresa 30 días en horario extendido?", a: "Boleta o factura SII en el acto, también 18:00–23:00. Crédito 30 días: RUT, carpeta tributaria y OC. Evaluación 24h hábiles. Pago: transferencia, Webpay o crédito aprobado. El total se confirma antes de pagar." },
  { q: "¿Cambios por medida errónea o falla y qué llevar para compra nocturna?", a: "Falla de fabricación: cambio inmediato con guía. Error nuestro de medida: reponemos sin costo y retiramos. Si la medida errónea fue del pedido, evaluamos corte nuevo con costo. Para compra nocturna trae RUT, OC y medida escrita — atiende jefe de turno." },
]

export function App() {
  const [compacta, setCompacta] = useState(false)
  const [oculta, setOculta] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [menu, setMenu] = useState(false)
  const [openCat, setOpenCat] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const lastY = useRef(0)
  useRevealTrigger()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setCompacta(y > 24)
      setOculta(y > lastY.current && y > 120)
      lastY.current = y
      setSticky(y > window.innerHeight * 0.72)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // cursor
  const dotRef = useRef<HTMLDivElement>(null)
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
      dot.style.left = cur.x + "px"
      dot.style.top = cur.y + "px"
      raf = requestAnimationFrame(lerp)
    }
    raf = requestAnimationFrame(lerp)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseover", onEnter); document.removeEventListener("mouseout", onLeave) }
  }, [])

  return (
    <>
      <div className="progreso" aria-hidden><div className="progreso-barra" ref={(el) => { if (el) { const on = () => { const t = document.documentElement.scrollHeight - window.innerHeight; const p = t > 0 ? window.scrollY / t : 0; el.style.transform = `scaleX(${p})` }; on(); window.addEventListener("scroll", on, { passive: true }) } }} /></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden />

      <nav className={`nav ${compacta ? "compacta" : ""} ${oculta ? "oculta" : ""}`} aria-label="Navegación principal">
        <div className="nav-inner">
          <a href="#inicio" className="nav-marca">NOCTUA <span>— Ferretería nocturna</span></a>
          <div className="nav-links" role="list">
            <a href="#catalogo">Catálogo</a>
            <a href="#precios">Precios</a>
            <a href="#cifras">Cifras</a>
            <a href="#faq">Preguntas</a>
            <a href="#reserva" className="btn-ambar">Cotizar noche</a>
          </div>
          <button className="nav-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Abrir menú">{menu ? "×" : "☰"}</button>
        </div>
      </nav>
      <div className={`nav-mobile ${menu ? "abierto" : ""}`} aria-hidden={!menu}>
        <a href="#catalogo" onClick={() => setMenu(false)}>Catálogo</a>
        <a href="#precios" onClick={() => setMenu(false)}>Precios</a>
        <a href="#cifras" onClick={() => setMenu(false)}>Cifras</a>
        <a href="#faq" onClick={() => setMenu(false)}>Preguntas</a>
        <a href="#reserva" className="btn-ambar" onClick={() => setMenu(false)}>Cotizar turno noche</a>
      </div>

      <a href="#reserva" className={`cta-sticky ${sticky ? "visible" : ""}`} aria-hidden={!sticky}>Cotizar noche</a>

      {/* HERO */}
      <section id="inicio" className="hero sin-borde">
        <div className="hero-text">
          <p className="kicker">Fierro pesado · Pernería estructural · Despacho madrugada RM</p>
          <h1 aria-label="Abastecimiento pesado. De noche también.">
            <span><i>Abastecimiento</i></span>
            <span><i>pesado. De noche</i></span>
            <span><i>también.</i></span>
          </h1>
          <p className="hero-sub">Para faena continua, maestranza y contratista que no para a las 18:00. Perfiles 6mt, planchas, pernos estructurales y EPP con preparación nocturna y despacho madrugada en RM. Stock pesado real, no catálogo.</p>
          <div className="hero-actions">
            <a href="https://wa.me/56228403315" target="_blank" rel="noopener noreferrer" className="btn-ambar">Cotizar turno noche</a>
            <a href="#catalogo" className="link-underline">Ver fierro pesado</a>
          </div>
          <p style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris-calido)", marginTop: 14, letterSpacing: "0.04em" }}>+56 2 2840 3315 · hola@noctua-ferreteria.cl · Franklin / San Bernardo</p>
        </div>
        <div className="hero-media">
          <img src={img("hero.jpg")} alt="Nave industrial vacía con luz cenital y suelo de hormigón pulido, estética nocturna premium" width={1200} height={900} loading="eager" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia">
        <div className="wrap">
          <div className="filosofia reveal">
            <p className="kicker">La obra no para a las 18:00</p>
            <h2>Preparamos de noche lo que tu faena necesita al amanecer.</h2>
            <p>Fierro rotulado, perno contado con calibre, guía con kilos reales. Sin “llega mañana si alcanza”. La disponibilidad nocturna es nuestro argumento premium — no un eslogan.</p>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section id="cifras">
        <span id="evidencia" aria-hidden style={{ position: "absolute", top: 0 }} />
        <div className="wrap">
          <p className="kicker">Evidencia nocturna</p>
          <h2 className="reveal">La maestranza que no cierra a las 18:00.</h2>
          <div className="cifras-grid reveal">
            <div>
              <div className="cifra-num">+<CountUp target={22} /> <em>años</em></div>
              <div className="cifra-label">Abasteciendo faena continua</div>
            </div>
            <div>
              <div className="cifra-num">+<CountUp target={9000} /> <em>t/año</em></div>
              <div className="cifra-label">Toneladas despachadas</div>
            </div>
            <div>
              <div className="cifra-num"><CountUp target={4} suffix=".8" />/5</div>
              <div className="cifra-label">620 reseñas · maestranza real</div>
            </div>
            <div>
              <div className="cifra-num">hasta <CountUp target={23} />:00</div>
              <div className="cifra-label">Turno noche con reserva</div>
            </div>
          </div>
          <p style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris-calido)", marginTop: 16, lineHeight: 1.6 }} className="reveal">Evidencia numérica, no fotos de gente feliz. Stock pesado real en San Bernardo — tolerancia corte ±1mm.</p>
        </div>
      </section>

      {/* CATALOGO */}
      <section id="catalogo">
        <div className="wrap">
          <p className="kicker">Catálogo pesado</p>
          <h2 className="reveal">Fierro y perno como pieza de precisión, no commodity.</h2>
          <p className="sub reveal" style={{ marginTop: 12 }}>La fila revela panel var(--superficie) con medida, norma y stock — nocturno también.</p>
          <div className="catalogo-list">
            {catalogo.map((c, i) => (
              <div key={c.n} className={`catalogo-row ${openCat === i ? "open" : ""}`} onClick={() => setOpenCat(openCat === i ? null : i)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenCat(openCat === i ? null : i) } }} aria-expanded={openCat === i}>
                <span className="catalogo-num">{c.n}</span>
                <div>
                  <h3 className="catalogo-name">{c.nombre}</h3>
                  <p className="catalogo-desc">{c.desc}</p>
                  <div className="catalogo-expand" aria-hidden={openCat !== i}>
                    <div className="catalogo-expand-inner">
                      <div className="catalogo-panel">
                        <dl><dt>Medida</dt><dd>{c.medida}</dd></dl>
                        <dl><dt>Norma</dt><dd>{c.norma}</dd></dl>
                        <dl><dt>Precio</dt><dd style={{ color: "var(--oxido-noche)", fontWeight: 600 }}>{c.precio} · {c.stock}</dd></dl>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="catalogo-arrow" aria-hidden>+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios">
        <div className="wrap">
          <p className="kicker">Precios con IVA — turno noche incluido</p>
          <h2 className="reveal">Valores con IVA, sin letra chica.</h2>
          <p className="sub reveal" style={{ marginTop: 12 }}>Turno noche incluido: corte nocturno, despacho madrugada y factura sin recargo oculto.</p>
          <div className="tabla-wrap reveal">
            <table className="tabla" aria-label="Precios con IVA nocturno">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Medida</th>
                  <th>Formato</th>
                  <th style={{ textAlign: "right" }}>Precio con IVA</th>
                </tr>
              </thead>
              <tbody>
                {precios.map((r) => (
                  <tr key={r.producto}>
                    <td>{r.producto}</td>
                    <td style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 12, color: "var(--gris-calido)" }}>{r.medida}</td>
                    <td style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 12, color: "var(--gris-calido)" }}>{r.formato}</td>
                    <td className="tabla-price" style={{ textAlign: "right" }}>{r.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="nota reveal">Corte nocturno $1.500/corte. Doblado según plano. Despacho madrugada RM desde $6.900 según comuna. Precios actualizados cada lunes. El total se confirma antes de pagar.</p>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo">
        <div className="wrap">
          <p className="kicker">Cómo funciona de noche</p>
          <h2 className="reveal">Cotizas turno noche, preparamos y recibes al amanecer.</h2>
          <div className="metodo-grid">
            <div className="metodo-col reveal">
              <p className="metodo-num">01 — Cotizas turno noche</p>
              <h3 className="metodo-title">Foto por WhatsApp</h3>
              <p className="metodo-desc">Te respondemos con medida y ventana madrugada 05:00–08:00. Sin formulario que nadie lee.</p>
            </div>
            <div className="metodo-col reveal">
              <p className="metodo-num">02 — Confirmas y preparamos nocturno</p>
              <h3 className="metodo-title">Corte ±1mm, rotulado</h3>
              <p className="metodo-desc">Contado con calibre, rotulado por medida, guía con kilos reales. Preparación nocturna discreta.</p>
            </div>
            <div className="metodo-col reveal">
              <p className="metodo-num">03 — Recibes 05:00–08:00 o retiras 07:30</p>
              <h3 className="metodo-title">Guía y factura en mano</h3>
              <p className="metodo-desc">Despacho madrugada coordinado o retiro en San Bernardo con factura SII inmediata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria">
        <div className="wrap">
          <p className="kicker">Material</p>
          <h2 className="reveal" style={{ marginBottom: 8 }}>Acero iluminado, no render.</h2>
          <div className="galeria-grid">
            <figure className="galeria-fig">
              <div className="galeria-wrap reveal ken">
                <img src={img("bodegon.jpg")} alt="Estiba de vigas perforadas galvanizadas con detalle industrial, stock estructura" width={800} height={1000} style={{ aspectRatio: "4/5", objectFit: "cover" }} loading="lazy" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
              </div>
              <figcaption className="caption">Vigas perforadas galvanizadas · lote trazado</figcaption>
            </figure>
            <figure className="galeria-fig">
              <div className="galeria-wrap reveal">
                <img src={img("texture.jpg")} alt="Detalle de vigas galvanizadas apiladas con estiba precisa y relieve industrial" width={800} height={800} style={{ aspectRatio: "1/1", objectFit: "cover" }} loading="lazy" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
              </div>
              <figcaption className="caption">Viga U galvanizada — acero real</figcaption>
            </figure>
          </div>
          <div style={{ marginTop: 32 }} className="galeria-wrap reveal">
            <img src={img("corridor.jpg")} alt="Acopio exterior de perfiles galvanizados amarillos y azules, stock industrial nocturno" width={1600} height={900} style={{ aspectRatio: "16/9", objectFit: "cover" }} loading="lazy" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
          </div>
          <p className="caption">Acopio de perfiles — stock pesado listo</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <p className="kicker">Preguntas honestas</p>
          <h2 className="reveal">Sin letra chica nocturna.</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden>+</span>
                </button>
                <div className="faq-a" aria-hidden={faqOpen !== i}>
                  <div className="faq-a-inner"><p>{f.a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" className="reserva">
        <div className="wrap">
          <div className="reserva-grid">
            <div>
              <p className="kicker">Cotiza turno noche</p>
              <h2>Si tu faena no para, nosotros tampoco.</h2>
              <p className="tel-gigante"><a href="tel:+56228403315">+56 2 2840 3315</a></p>
              <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <a href="https://wa.me/56228403315" target="_blank" rel="noopener noreferrer" className="btn-ambar">Cotizar turno noche</a>
                <span style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris-calido)", letterSpacing: "0.06em", textTransform: "uppercase" }}>hola@noctua-ferreteria.cl</span>
              </div>
              <p className="micro">Responde el jefe de turno, no un formulario. Si no contestamos, devolvemos el llamado en 1 hora.</p>
              <div className="reserva-meta">
                <div><strong>Horario:</strong> Lun–Vie 7:30–18:00 · Turno noche con reserva 18:00–23:00 · Despacho madrugada 05:00–08:00</div>
                <div><strong>Bodega:</strong> San Bernardo / Franklin, Santiago — preparación nocturna</div>
                <div><strong>Despacho madrugada RM</strong> desde $6.900 según comuna · Ventana 05:00–08:00</div>
              </div>
              <div className="mapa-linea">
                <span className="mapa-linea-dot" aria-hidden />
                <span className="mapa-linea-text">Santiago · San Bernardo · Puente Alto · Maipú · Quilicura · Pudahuel → RM madrugada</span>
              </div>
            </div>
            <div>
              <div style={{ border: "1px solid var(--filete)", padding: 24, background: "var(--fondo)" }}>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 22, margin: "0 0 12px", color: "var(--hueso)" }}>Turno noche: qué mandar</h3>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--gris-calido)", lineHeight: 1.8 }}>
                  <li>Foto + medida, norma (A325 / 8.8) y cantidad</li>
                  <li>Comuna y ventana madrugada o “retiro 07:30”</li>
                  <li>RUT + OC si necesitas factura/crédito 30 días</li>
                  <li>Plano si es doblado — tolerancia ±1mm</li>
                </ul>
                <p style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris-calido)", marginTop: 16, lineHeight: 1.6 }}>Stock pesado real en bodega San Bernardo. Si la medida no está, te traemos a pedido en 48–72h con abono — no te vendemos el “parecido” sin avisar.</p>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-inner">
              <span>NOCTUA SpA · San Bernardo / Franklin, Santiago · SII boleta/factura</span>
              <span>© {new Date().getFullYear()} NOCTUA — Ferretería Industrial Nocturna</span>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
