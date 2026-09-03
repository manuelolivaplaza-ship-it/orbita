import { useEffect, useRef, useState } from "react"

const base = import.meta.env.BASE_URL
const img = (p: string) => `${base}media/${p}`

// ---------- hooks ----------
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
      if (y > lastY.current && y > 120) setHidden(true)
      else setHidden(false)
      lastY.current = y
      setShowMobileCta(y > 600)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return { compact, hidden, progress, showMobileCta }
}

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
const familias = [
  { n: "01", nombre: "Fierro y perfiles", desc: "Ángulo, canal, cuadrado, rectangular 6mt", medida: "40×40×3mm — 100×100×5mm", norma: "NCh203 / ASTM A36", precio: "desde $18.900 con IVA", stock: "Stock 6mt inmediato" },
  { n: "02", nombre: "Planchas", desc: "Zinc, diamantada, lisa", medida: "0.35mm–5mm · 1000×2000 a 1500×3000", norma: "Zinc Alum / ASTM", precio: "desde $11.400 con IVA", stock: "Stock bodega" },
  { n: "03", nombre: "Pernos y fijaciones", desc: "Hexagonal, allen, autoperforante Ø y largo", medida: "Ø 3/16\" a 3/4\" · largo 1/2\" a 6\"", norma: "G 4.6 · 8.8 · Inox A2", precio: "desde $14.900 ciento con IVA", stock: "Contado con calibre" },
  { n: "04", nombre: "Herramientas", desc: "Eléctricas y manuales", medida: "Taladros, esmeriles, llaves", norma: "Bosch / Makita / Stanley", precio: "desde $12.900 con IVA", stock: "Garantía nacional" },
  { n: "05", nombre: "Gasfitería y eléctrico", desc: "Cañerías, cables, tableros", medida: "PVC, cobre, THHN", norma: "SEC certificado", precio: "desde $3.900 con IVA", stock: "Stock RM" },
  { n: "06", nombre: "EPP y abrasivos", desc: "Seguridad y corte", medida: "Guantes, discos, lentes", norma: "Certificado ISP", precio: "desde $2.890 con IVA", stock: "Stock inmediato" },
]

const precios = [
  { producto: "Perfil ángulo 40×40×3mm 6mt", medida: "40×40×3mm", formato: "Tira 6mt", precio: "$18.900" },
  { producto: "Plancha zinc 0.35×3000mm", medida: "0.35×3000mm", formato: "Unidad", precio: "$11.400" },
  { producto: "Perno hexagonal 1/2×2\" ciento", medida: "Ø1/2\"×2\"", formato: "Ciento (100 un)", precio: "$14.900" },
  { producto: "Tornillo autoperforante 14×1\" mil", medida: "14×1\"", formato: "Mil (1000 un)", precio: "$22.500" },
  { producto: "Disco corte 4.5\"", medida: "115×1.0mm", formato: "Unidad", precio: "$2.890" },
  { producto: "Guante cabritilla", medida: "Talla M–XL", formato: "Par", precio: "$4.200" },
]

const faqs = [
  { q: "¿Cómo cotizo y qué datos necesitas?", a: "Por web, WhatsApp (+56 2 2840 3315) o teléfono mesón. Mándanos foto + medida (Ø, largo, espesor, kilos o metros), cantidad y comuna de despacho. Te respondemos con precio CON IVA, stock real y ventana de entrega en minutos en horario hábil." },
  { q: "¿Despacho a obra vs retiro en local — plazos y costo?", a: "Despacho RM 24–48h según comuna desde $4.990. Coordinamos ventana mañana/tarde y te avisamos antes de salir. Retiro en bodega 10 de Julio sin fila, con fierro rotulado por medida y guía con kilos. Regiones por turbus/cruz del sur a convenir." },
  { q: "¿Hacen corte y doblado de fierro en el día y cuánto cobran?", a: "Sí, corte $1.500 por corte, doblado según plano (desde $3.500). Corte en el día si cotizas antes de las 11:00; después, al día siguiente AM. Tolerancia ±1mm, escuadra verificada. Te entregamos pieza rotulada." },
  { q: "¿Venta por mayor vs al detalle y desde cuántas tiras/cientos?", a: "Vendemos desde 1 tira / 1 ciento sin mínimo. Por mayor desde 20 tiras o 10 cientos: precio volumen. Crédito empresa 30 días evaluado (RUT, carpeta tributaria). Todo con boleta/factura en el acto y precio por medida real." },
  { q: "¿Boleta/factura y crédito empresa 30 días — qué piden?", a: "Boleta o factura al instante SII. Crédito: RUT empresa, última carpeta tributaria y orden de compra. Evaluación en 24h hábiles. Pago: transferencia, Webpay o cheque empresa. Sin letra chica: el total se confirma antes de pagar, nunca después." },
  { q: "¿Cambios por medida errónea o falla y qué llevar para comprar en mesón?", a: "Cambios por falla de fabricación inmediato con guía. Si la medida errónea fue nuestra, reponemos sin costo y retiramos. Si fue pedido, evaluamos corte nuevo con costo. Para mesón trae RUT, OC si es empresa y la medida escrita — te atendemos en mesón técnico sin espera." },
]

export function App() {
  const { compact, hidden, progress, showMobileCta } = useNavBehavior()
  const [familiaOpen, setFamiliaOpen] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  useReveal()

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      <nav className={`nav ${compact ? "compact" : ""} ${hidden ? "hidden" : ""}`} aria-label="Navegación principal">
        <div className="nav-inner">
          <a href="#inicio" className="nav-brand">ÉTER — FERRETERÍA INDUSTRIAL</a>
          <div className="nav-links" role="list">
            <a href="#familias">Familias</a>
            <a href="#precios">Precios</a>
            <a href="#cifras">Cifras</a>
            <a href="#faq">Preguntas</a>
            <span className="nav-tel">+56 2 2840 3315</span>
            <a href="#reserva" className="nav-cta">Cotizar</a>
          </div>
        </div>
      </nav>

      <div className={`mobile-cta ${showMobileCta ? "visible" : ""}`} aria-hidden={!showMobileCta}>
        <a href="#reserva">Cotizar por WhatsApp</a>
      </div>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-grid">
          <div>
            <p className="kicker">Barraca · Pernería · Santiago · Despacho RM 24H</p>
            <h1 className="h1" aria-label="Fierro a medida. Perno exacto. Sin vueltas.">
              <span className="h1-line"><span>Fierro a medida.</span></span>
              <span className="h1-line"><span>Perno exacto.</span></span>
              <span className="h1-line"><span>Sin vueltas.</span></span>
            </h1>
            <p className="subhead">Barraca y pernería para obra y maestranza en RM: perfiles, planchas, pernos, fijaciones, herramientas y EPP con precio por medida y stock real. Cotiza por WhatsApp con foto y te respondemos con precio con IVA y disponibilidad en minutos.</p>
            <div className="hero-actions">
              <a href="https://wa.me/56228403315" target="_blank" rel="noopener noreferrer" className="btn-primary">Cotizar por WhatsApp</a>
              <a href="#familias" className="link-underline">Ver fierro y pernos</a>
            </div>
            <p style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris)", marginTop: 14, letterSpacing: "0.04em" }}>
              +56 2 2840 3315 · hola@eter-ferreteria.cl · 10 de Julio / Franklin
            </p>
          </div>
          <div className="hero-media">
            <div className="hero-media-wrap">
              <img
                src={img("bodega.jpg")}
                alt="Bodega industrial exterior con vigas de acero galvanizado estibadas y grúa naranja"
                width={1200}
                height={675}
                className="ken"
                loading="eager"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />
            </div>
            <p className="caption">Bodega ÉTER — perfiles 6mt y vigas U · stock estibado</p>
          </div>
        </div>
        <div className="banda" aria-label="Atributos clave">
          <div className="banda-inner">
            <span>Precio con IVA</span><span className="dot" aria-hidden />
            <span>Stock actualizado anoche</span><span className="dot" aria-hidden />
            <span>Corte y doblado</span><span className="dot" aria-hidden />
            <span>Despacho 24h RM</span>
          </div>
        </div>
      </section>

      {/* CIFRAS + evidencia alias */}
      <section id="cifras" className="section">
        <span id="evidencia" aria-hidden style={{ position: "absolute", top: 0 }} />
        <div className="wrap">
          <p className="sec-kicker">Evidencia, no promesa</p>
          <h2 className="sec-title reveal">Números que sostienen la barraca.</h2>
          <p className="sec-desc reveal d1">Sin “desde” engañoso. El precio que ves es con IVA y por medida real (Ø, largo, kg/tira). Stock en línea actualizado cada noche.</p>
          <div className="cifras-grid reveal d2">
            <div>
              <div className="cifra-num">+<CountUp to={18} /> años</div>
              <div className="cifra-label">Abasteciendo obra y maestranza en RM</div>
            </div>
            <div>
              <div className="cifra-num">+<CountUp to={14000} /> SKU</div>
              <div className="cifra-label">Perfiles, planchas, pernos y fijaciones</div>
            </div>
            <div>
              <div className="cifra-num"><CountUp to={98} />% despachos 24h</div>
              <div className="cifra-label">En RM con ventana coordinada</div>
            </div>
            <div>
              <div className="cifra-num"><CountUp to={1200} /> clientes</div>
              <div className="cifra-label">Obra, maestranza y contratistas</div>
            </div>
          </div>
          <p className="cifra-note reveal">Si algo quedó sin stock después de tu pedido, te llamamos en 2 horas — no te lo cobramos para después decir “no había”. Corte desde 1 tira.</p>
        </div>
      </section>

      {/* FAMILIAS */}
      <section id="familias" className="section">
        <div className="wrap">
          <p className="sec-kicker">Familias</p>
          <h2 className="sec-title reveal">Todo el fierro y el perno, ordenado como se compra en mesón.</h2>
          <p className="sec-desc reveal d1">No es catálogo genérico: es el mesón digital donde la medida manda y el precio es con IVA.</p>
          <div className="familias-list">
            {familias.map((f, i) => (
              <div key={f.n} className={`familia-row ${familiaOpen === i ? "open" : ""}`} onClick={() => setFamiliaOpen(familiaOpen === i ? null : i)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFamiliaOpen(familiaOpen === i ? null : i) } }} aria-expanded={familiaOpen === i}>
                <span className="familia-num">{f.n}</span>
                <div>
                  <h3 className="familia-name">{f.nombre}</h3>
                  <p className="familia-cap">{f.desc}</p>
                  <div className="familia-expand" aria-hidden={familiaOpen !== i}>
                    <div className="familia-expand-inner">
                      <div className="familia-detail">
                        <dl><dt>Medida</dt><dd>{f.medida}</dd></dl>
                        <dl><dt>Norma</dt><dd>{f.norma}</dd></dl>
                        <dl><dt>Precio</dt><dd style={{ color: "var(--oxido)", fontWeight: 600 }}>{f.precio} · {f.stock}</dd></dl>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="familia-arrow" aria-hidden>+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section">
        <div className="wrap">
          <p className="sec-kicker">Precios con IVA — sin letra chica</p>
          <h2 className="sec-title reveal">Valores con IVA, por medida real.</h2>
          <p className="sec-desc reveal d1">La tabla es la cotización: sin “desde” oculto, sin despacho sorpresa. Actualizados cada lunes. El total se confirma antes de pagar, nunca después.</p>
          <div className="tabla-wrap reveal d2">
            <table className="tabla" aria-label="Precios con IVA">
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
                    <td style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 12, color: "var(--gris)" }}>{r.medida}</td>
                    <td style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 12, color: "var(--gris)" }}>{r.formato}</td>
                    <td className="tabla-price" style={{ textAlign: "right" }}>{r.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="precios-layout reveal">
            <p className="nota">Despacho RM desde $4.990 según comuna. Corte $1.500 por corte. Doblado según plano. Precios actualizados cada lunes. El total se confirma antes de pagar, nunca después. Boleta/factura en el acto.</p>
            <aside className="precios-lateral">
              <h4>Despacho &amp; retiro</h4>
              <p><strong>Despacho RM 24–48h:</strong> desde $4.990 según comuna. Ventana mañana (08:00–13:00) o tarde (14:00–18:00).</p>
              <p><strong>Retiro en bodega:</strong> 10 de Julio 1234, Santiago. Sin fila, fierro rotulado y guía con kilos.</p>
              <p><strong>Corte en el día</strong> si cotizas antes de las 11:00.</p>
              <p style={{ marginTop: 12 }}><a href="#reserva" style={{ color: "var(--oxido)", borderBottom: "1px solid var(--oxido)", paddingBottom: 2, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>Ver comunas →</a></p>
            </aside>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="section">
        <div className="wrap">
          <p className="sec-kicker">Cómo funciona</p>
          <h2 className="sec-title reveal">Cotizas, confirmas y recibes rotulado.</h2>
          <div className="metodo-grid" style={{ marginTop: 40 }}>
            <div className="metodo-col reveal">
              <p className="metodo-num">01 — Cotizas</p>
              <h3 className="metodo-title">Foto por WhatsApp o web</h3>
              <p className="metodo-desc">Te respondemos con medida, stock y precio con IVA en minutos en horario hábil. Sin “te llamamos mañana”.</p>
            </div>
            <div className="metodo-col reveal d1">
              <p className="metodo-num">02 — Confirmas y pagas</p>
              <h3 className="metodo-title">Transferencia, Webpay o crédito</h3>
              <p className="metodo-desc">Crédito empresa 30 días evaluado. El total se confirma antes de cobrar, con boleta/factura SII en el acto.</p>
            </div>
            <div className="metodo-col reveal d2">
              <p className="metodo-num">03 — Recibes rotulado o retiras</p>
              <h3 className="metodo-title">Fierro cortado/doblado, perno contado</h3>
              <p className="metodo-desc">Guía con kilos reales. Despacho 24–48h RM con ventana coordinada o retiro en bodega sin fila.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section">
        <div className="wrap">
          <p className="sec-kicker">Material</p>
          <h2 className="sec-title reveal" style={{ marginBottom: 40 }}>La pieza, no el render.</h2>
          <div className="galeria-grid">
            <figure className="galeria-fig">
              <div className="galeria-wrap reveal ken">
                <img
                  src={img("pernos.jpg")}
                  alt="Vigas U y perfiles galvanizados apilados con extremo azul, estibado industrial preciso"
                  width={800}
                  height={1000}
                  style={{ aspectRatio: "4/5", objectFit: "cover" }}
                  loading="lazy"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
              </div>
              <figcaption className="caption">Perfil U galvanizado 100×50×5mm · estiba rotulada</figcaption>
            </figure>
            <figure className="galeria-fig">
              <div className="galeria-wrap reveal d1">
                <img
                  src={img("fierro.jpg")}
                  alt="Detalle de vigas galvanizadas apiladas con inscripciones técnicas y extremo azul"
                  width={800}
                  height={800}
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                  loading="lazy"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
              </div>
              <figcaption className="caption">Viga U galvanizada — acero real, no render</figcaption>
            </figure>
          </div>
          <div style={{ marginTop: 32 }} className="galeria-wrap reveal">
            <img
              src={img("pasillo.jpg")}
              alt="Acopio exterior de perfiles de acero galvanizado y perfiles amarillos apilados, stock industrial"
              width={1600}
              height={900}
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
              loading="lazy"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
          </div>
          <p className="caption">Acopio de perfiles 6mt — stock real en bodega</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="wrap">
          <p className="sec-kicker">Preguntas honestas</p>
          <h2 className="sec-title reveal">Sin letra chica oculta.</h2>
          <div className="faq-list" style={{ marginTop: 40 }}>
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
      <section id="reserva" className="section">
        <div className="wrap">
          <div className="reserva-grid">
            <div>
              <p className="sec-kicker">Cotiza ahora</p>
              <h2 className="sec-title">Manda la foto de lo que necesitas. Te respondemos con precio y medida.</h2>
              <p className="tel-gigante"><a href="tel:+56228403315">+56 2 2840 3315</a></p>
              <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <a href="https://wa.me/56228403315" target="_blank" rel="noopener noreferrer" className="btn-primary">Cotizar por WhatsApp</a>
                <span style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris)", letterSpacing: "0.06em", textTransform: "uppercase" }}>hola@eter-ferreteria.cl</span>
              </div>
              <p className="micro">Responden vendedores de mesón, no bots. Si no contestamos, devolvemos el llamado en 2 horas hábiles.</p>
              <div className="reserva-meta">
                <div><strong>Horario:</strong> Lun–Vie 7:30–18:00 · Sáb 7:30–14:00 · Corte y doblado en el día</div>
                <div><strong>Bodega:</strong> 10 de Julio 1234, Santiago — Franklin / Matta (retiro sin fila)</div>
                <div><strong>Despacho RM:</strong> 24–48h · Desde $4.990 según comuna · Ventana coordinada</div>
              </div>
              <div className="mapa-linea">
                <span className="mapa-linea-dot" aria-hidden />
                <span className="mapa-linea-text">Santiago · San Bernardo · Puente Alto · Maipú · Quilicura · La Florida · Recoleta → RM completa</span>
              </div>
            </div>
            <div>
              <div style={{ border: "1px solid var(--linea)", padding: 24, background: "var(--papel-2)" }}>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 22, margin: "0 0 12px" }}>¿Qué mandar para cotizar?</h3>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--gris)", lineHeight: 1.8 }}>
                  <li>Foto o medida: Ø, largo, espesor, kg/tira</li>
                  <li>Cantidad: tiras, cientos, kilos o unidades</li>
                  <li>Comuna de despacho o “retiro en bodega”</li>
                  <li>RUT empresa si necesitas factura/crédito</li>
                </ul>
                <p style={{ fontFamily: '"Fragment Mono",monospace', fontSize: 11, color: "var(--gris)", marginTop: 16, lineHeight: 1.6 }}>Stock en línea actualizado cada noche. Si algo quedó sin stock después de tu pedido, te llamamos en 2 horas — no te lo cobramos para después decir “no había”. Precio con IVA. Corte desde 1 tira.</p>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-inner">
              <span>ÉTER SpA · RUT 76.123.456-7 · 10 de Julio 1234, Santiago · SII boleta/factura</span>
              <span>© {new Date().getFullYear()} ÉTER — Ferretería Industrial · Santiago, Chile</span>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
