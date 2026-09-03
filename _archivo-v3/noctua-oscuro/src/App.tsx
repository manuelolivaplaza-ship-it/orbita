import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

// --- hooks ---
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVis(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.14 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, vis } as const;
}

function CountUp({ target, suffix = "", duration = 1200 }: { target: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const { ref, vis } = useReveal();
  const started = useRef(false);
  useEffect(() => {
    if (!vis || started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(target); return; }
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [vis, target, duration]);
  return <span ref={ref as unknown as React.RefObject<HTMLSpanElement>}>{n.toLocaleString("es-CL")}{suffix}</span>;
}

// --- componentes ---
function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const on = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = total > 0 ? window.scrollY / total : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div className="progreso" aria-hidden><div className="progreso-barra" ref={ref} /></div>;
}

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const cur = useRef({ x: -100, y: -100 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dot = dotRef.current;
    if (!dot) return;
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button")) dot.classList.add("hover");
    };
    const onLeave = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button")) dot.classList.remove("hover");
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    let raf = 0;
    const lerp = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.18;
      cur.current.y += (pos.current.y - cur.current.y) * 0.18;
      dot.style.left = cur.current.x + "px";
      dot.style.top = cur.current.y + "px";
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseover", onEnter); document.removeEventListener("mouseout", onLeave); };
  }, []);
  return <div ref={dotRef} className="cursor-dot" aria-hidden />;
}

export function App() {
  const [menu, setMenu] = useState(false);
  const [compacta, setCompacta] = useState(false);
  const [oculta, setOculta] = useState(false);
  const [sticky, setSticky] = useState(false);
  const lastY = useRef(0);
  const [salonOpen, setSalonOpen] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const galRef1 = useReveal();
  const galRef2 = useReveal();
  const filoRef = useReveal();
  const cifrasRef = useReveal();
  const salonesRef = useReveal();
  const preciosRef = useReveal();
  const metodoRef = useReveal();
  const faqRef = useReveal();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompacta(y > 24);
      setOculta(y > lastY.current && y > 120);
      lastY.current = y;
      setSticky(y > window.innerHeight * 0.72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // clip reveal gate
  useEffect(() => { document.documentElement.classList.add("ready"); }, []);

  const salones = [
    {
      n: "01", nombre: "Salón Noctua", cap: "200 personas", m2: "240 m²", tec: "Audio line array, iluminación teatral, proyección 4K", precio: "desde $3.200.000 CLP",
      img: `${BASE}media/hero.jpg`,
    },
    {
      n: "02", nombre: "Terraza Ámbar", cap: "120 personas", m2: "180 m²", tec: "Barra equipada, sonido ambiental, calefacción exterior", precio: "desde $2.400.000 CLP",
      img: `${BASE}media/corridor.jpg`,
    },
    {
      n: "03", nombre: "Salón Cava", cap: "60 personas", m2: "95 m²", tec: "Bóveda acústica, luz cálida regulable, mesa imperial", precio: "desde $1.650.000 CLP",
      img: `${BASE}media/bodegon.jpg`,
    },
  ];

  const faqs = [
    { q: "¿Hacen solo un evento por noche realmente?", a: "Sí. Un solo evento por noche, sin cruce de fiestas. El salón, el parque, la cocina y el equipo completo son tuyos. Es la base de la discreción que vendemos." },
    { q: "¿Qué técnica incluye el arriendo (audio, luces, proyector)?", a: "Cada salón incluye audio profesional, iluminación teatral regulable, microfonía y proyección 4K. Te entregamos rider técnico por escrito en la visita privada." },
    { q: "¿Puedo traer mi banquetería o DJ externo?", a: "Puedes. Cobramos descorche técnico y coordinamos montaje. Nuestra banquetería asociada está incluida en los precios de referencia, pero no es obligatoria." },
    { q: "¿Hasta qué hora es el evento y cómo es el ruido?", a: "Hasta las 03:00 con extensión opcional. Aislamiento acústico certificado y limitador de decibeles. Nunca hemos tenido un corte por ruido." },
    { q: "¿Qué pasa si necesito montar el día anterior?", a: "Montaje el día anterior sin costo si no hay evento previo — y como hacemos uno por noche, casi siempre es posible. Se confirma al reservar fecha." },
    { q: "¿Cómo se reserva y qué garantía piden?", a: "Reserva con 40% y contrato simple. El saldo 10 días antes. Garantía reembolsable por daños, devuelta en 48 h hábiles tras el evento." },
  ];

  return (
    <>
      <ProgressBar />
      <Cursor />

      <nav className={`nav ${compacta ? "compacta" : ""} ${oculta ? "oculta" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="nav-marca" aria-label="NOCTUA inicio">NOCTUA <span>Casa de eventos · Vitacura</span></a>
          <div className="nav-links">
            <a href="#filosofia">Filosofía</a>
            <a href="#salones">Salones</a>
            <a href="#precios">Precios</a>
            <a href="#faq">Preguntas</a>
            <a href="#reserva" className="btn-ambar">Reservar visita</a>
          </div>
          <button className="nav-toggle" aria-expanded={menu} aria-label="Abrir menú" onClick={() => setMenu(v => !v)}>{menu ? "×" : "≡"}</button>
        </div>
      </nav>
      <div className={`nav-mobile ${menu ? "abierto" : ""}`} role="dialog" aria-label="Menú móvil">
        <a href="#filosofia" onClick={() => setMenu(false)}>Filosofía</a>
        <a href="#salones" onClick={() => setMenu(false)}>Salones</a>
        <a href="#precios" onClick={() => setMenu(false)}>Precios</a>
        <a href="#metodo" onClick={() => setMenu(false)}>Método</a>
        <a href="#faq" onClick={() => setMenu(false)}>Preguntas</a>
        <a href="#reserva" onClick={() => setMenu(false)} className="btn-ambar" style={{ marginTop: 12, textAlign: "center" }}>Reservar visita privada</a>
      </div>

      <a href="#reserva" className={`cta-sticky ${sticky ? "visible" : ""}`} aria-label="Reservar visita">Reservar visita →</a>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-text">
          <p className="kicker">Casa de eventos · Vitacura</p>
          <h1>La noche<br />también<br /><i>se diseña.</i></h1>
          <p className="hero-sub">Eventos corporativos y matrimonios con dirección de arte, banquetería y técnica a medida. Un solo evento por noche, sin cruce de fiestas.</p>
          <div className="hero-ctas">
            <a href="#reserva" className="btn-ambar">Reservar visita privada</a>
            <a href="#precios" className="ghost">Ver precios de referencia</a>
          </div>
          <div className="hero-meta">
            <span><strong>+12</strong> años</span>
            <span><strong>Vitacura</strong> · Santiago</span>
            <span style={{ color: "var(--ambar)" }}>Un solo evento por noche</span>
          </div>
        </div>
        <div className="hero-media">
          <img src={`${BASE}media/hero.jpg`} alt="Salón nocturno vacío con mesa larga vestida de lino hueso iluminada por luz cálida oculta" width={1600} height={900} loading="eager" decoding="async" />
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" ref={filoRef.ref} className={`sin-borde ${filoRef.vis ? "in" : ""}`}>
        <div className="wrap filosofia">
          <div className={`reveal ${filoRef.vis ? "in" : ""}`}>
            <p className="kicker">Filosofía</p>
            <h2>Un solo evento<br />por noche.</h2>
            <p className="lead" style={{ marginTop: 18 }}>No cruzamos fiestas. Tu celebración tiene el salón, el parque, la cocina y el equipo completos. La discreción es el lujo.</p>
          </div>
          <div className={`reveal ${filoRef.vis ? "in" : ""}`} style={{ transitionDelay: ".12s" }}>
            <blockquote>“Diseñamos la noche para que tu evento se sienta como una casa tomada solo para ti. Luz, sonido y servicio sin interferencias.”</blockquote>
            <p className="filo-nota">Sin testimonios públicos. La exclusividad habla por sí misma.</p>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gris-calido)", border: "1px solid var(--filete)", padding: "8px 12px" }}>Dirección de arte</span>
              <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gris-calido)", border: "1px solid var(--filete)", padding: "8px 12px" }}>Técnica incluida</span>
              <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gris-calido)", border: "1px solid var(--filete)", padding: "8px 12px" }}>Banquetería a medida</span>
            </div>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <div id="cifras" ref={cifrasRef.ref} className="cifras">
        <div className="wrap">
          <div className={`cifras-grid stagger ${cifrasRef.vis ? "in" : ""}`}>
            <div className="cifra">
              <div className="cifra-num">+<CountUp target={12} /> años</div>
              <div className="cifra-label">Haciendo noches memorables</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">+<CountUp target={2400} /> eventos</div>
              <div className="cifra-label">Corporativos y matrimonios</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">4.9/5 · 890 reseñas</div>
              <div className="cifra-label">Evidencia, no fotos de stock</div>
            </div>
            <div className="cifra">
              <div className="cifra-num">1 evento por noche</div>
              <div className="cifra-label">Siempre · sin excepción</div>
            </div>
          </div>
        </div>
      </div>

      {/* SALONES */}
      <section id="salones" ref={salonesRef.ref}>
        <div className="wrap">
          <div className="salones-head">
            <div>
              <p className="kicker">Salones</p>
              <h2>Tres espacios,<br />una misma noche.</h2>
            </div>
            <p className="sub" style={{ maxWidth: 360 }}>Cada salón se entrega completo: montaje, técnica y equipo. Hover para detalles — en móvil toca la fila.</p>
          </div>
          <div className="salon-lista">
            {salones.map(s => {
              const open = salonOpen === s.n;
              return (
                <div key={s.n} className="salon-row" onClick={() => setSalonOpen(open ? null : s.n)} onMouseEnter={() => setSalonOpen(s.n)} onMouseLeave={() => setSalonOpen(null)} role="button" tabIndex={0} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSalonOpen(open ? null : s.n); } }} aria-expanded={open}>
                  <span className="salon-num">{s.n}</span>
                  <span className="salon-nombre">{s.nombre}</span>
                  <span className="salon-cap">{s.cap} · <strong>{s.m2}</strong></span>
                  <div className={`salon-panel ${open ? "open" : ""}`}>
                    <div className="salon-panel-inner">
                      <div className="salon-card">
                        <img src={s.img} alt={`${s.nombre}: salón para ${s.cap} con ${s.m2} y técnica profesional`} loading="lazy" />
                        <div className="salon-card-info">
                          <h3 style={{ margin: 0 }}>{s.nombre}</h3>
                          <ul>
                            <li>{s.m2} · capacidad {s.cap}</li>
                            <li>{s.tec}</li>
                            <li>Montaje y desmontaje incluidos</li>
                          </ul>
                          <div className="salon-card-precio"><span>Arriendo</span><strong>{s.precio}</strong></div>
                          <a href="#reserva" className="btn-ambar" style={{ marginTop: 8, textAlign: "center" }} onClick={e => e.stopPropagation()}>Reservar visita</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" ref={preciosRef.ref}>
        <div className="wrap">
          <p className="kicker">Precios de referencia</p>
          <h2>Precios claros,<br />sin sorpresas.</h2>
          <p className="sub" style={{ marginTop: 16, maxWidth: 560 }}>Valores base con banquetería y técnica. El valor final se confirma con fecha y asistencia.</p>
          <table className="tabla" aria-label="Precios de referencia">
            <thead><tr><th>Formato</th><th>Asistencia</th><th>Incluye</th><th>Desde</th></tr></thead>
            <tbody>
              <tr><td>Matrimonio</td><td>150 personas</td><td>Salón Noctua + banquetería + técnica</td><td>$8.900.000 CLP</td></tr>
              <tr><td>Corporativo</td><td>100 personas</td><td>Salón Cava o Terraza + cóctel + AV</td><td>$5.400.000 CLP</td></tr>
              <tr><td>Gala</td><td>200 personas</td><td>Salón Noctua + cena servida + iluminación</td><td>$11.200.000 CLP</td></tr>
              <tr><td>Cóctel</td><td>120 personas</td><td>Terraza Ámbar + barras + sonido</td><td>$4.100.000 CLP</td></tr>
            </tbody>
          </table>
          <div className="tabla-nota"><strong>Nota honesta:</strong> El valor final se confirma con fecha y asistencia. Nunca partimos un montaje sin tu aprobación por escrito. Todos los valores incluyen IVA.</div>
          <div className="corridor">
            <img src={`${BASE}media/corridor.jpg`} alt="Pasillo nocturno simétrico del centro de eventos con focos cálidos empotrados y piedra oscura" loading="lazy" />
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" ref={metodoRef.ref}>
        <div className="wrap">
          <p className="kicker">Método</p>
          <h2>De la visita al<br />día D, sin fricción.</h2>
          <div className="metodo-grid">
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <h3>Visita privada</h3>
              <p>Recorre el salón de noche, con la luz y el sonido como estarán tu evento. Sin grupos, sin apuro. Lun–Sáb 10:00–19:00, nocturnas con reserva.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <h3>Propuesta técnica y menú por escrito</h3>
              <p>Plano, rider técnico, menú y presupuesto detallado en 48 h. Ajustes hasta que todo cale. Tu aprobación por escrito gatilla el montaje.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <h3>Montaje y dirección día D</h3>
              <p>Coordinador dedicado, prueba técnica completa y dirección en sitio. Tú llegas cuando todo está listo. Un solo evento por noche.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria">
        <div className="wrap">
          <p className="kicker">Galería técnica</p>
          <h2>La mesa como<br />obra.</h2>
          <p className="sub" style={{ marginTop: 16 }}>Materiales, luz y montaje. Sin fotos de fiestas desbordadas.</p>
          <div className="galeria-grid">
            <div className="gal-card">
              <div ref={galRef1.ref} className={`gal-media ken ${galRef1.vis ? "in" : ""}`}>
                <img src={`${BASE}media/bodegon.jpg`} alt="Bodegón chiaroscuro: copa de vino y plato de cerámica hueso sobre piedra oscura con servilleta negra" loading="lazy" />
              </div>
              <div className="gal-caption"><span>Bodegón · luz rasante</span><em>Óptica 85mm · 1/125</em></div>
            </div>
            <div className="gal-card">
              <div ref={galRef2.ref} className={`gal-media ratio-1 ${galRef2.vis ? "in" : ""}`}>
                <img src={`${BASE}media/texture.jpg`} alt="Macro de lino negro texturado iluminado con luz cálida rasante que revela la trama" loading="lazy" />
              </div>
              <div className="gal-caption"><span>Lino negro · macro</span><em>Textura · filete 1px</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" ref={faqRef.ref}>
        <div className="wrap">
          <p className="kicker">Preguntas honestas</p>
          <h2>Lo que todos<br />preguntan antes de reservar.</h2>
          <div className="faq-lista">
            {faqs.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div key={i} className={`faq-item ${open ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setFaqOpen(open ? null : i)} aria-expanded={open}>
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden>{open ? "—" : "+"}</span>
                  </button>
                  <div className={`faq-a ${open ? "open" : ""}`}>
                    <div className="faq-a-inner"><p>{f.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" className="reserva">
        <div className="wrap">
          <div className="reserva-grid">
            <div>
              <p className="kicker">Reserva</p>
              <h2>¿Conversamos<br />tu noche?</h2>
              <a href="tel:+56228403315" className="tel-gigante">+56 2 2840 3315</a>
              <p className="micro">Responde el coordinador, no un formulario.</p>
              <p className="sub" style={{ maxWidth: 480 }}>Visitas privadas lun–sáb 10:00–19:00 · nocturnas con reserva. Vitacura, Santiago. Respuesta en menos de 2 horas hábiles.</p>
              <div className="reserva-actions">
                <a href="tel:+56228403315" className="btn-ambar">Llamar ahora</a>
                <a href="https://wa.me/56984033315" target="_blank" rel="noopener noreferrer" className="ghost" style={{ padding: "10px 22px", border: "1px solid var(--filete)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase" }}>WhatsApp +56 9 8403 3315</a>
              </div>
              <p style={{ marginTop: 18, fontSize: 12, color: "var(--gris-calido)" }}>Coordinación directa, sin call center · hola@noctua-eventos.cl</p>
            </div>
            <div className="reserva-card">
              <h4>Visita privada</h4>
              <p>Agenda tu recorrido nocturno. Verás el salón iluminado como estará tu evento, con prueba de sonido y degustación opcional.</p>
              <p style={{ marginTop: 12 }}><strong style={{ color: "var(--hueso)" }}>Dirección:</strong> Vitacura, Santiago<br /><strong style={{ color: "var(--hueso)" }}>Horario:</strong> Lun–Sáb 10:00–19:00</p>
              <div className="reserva-actions">
                <a href="mailto:hola@noctua-eventos.cl" className="btn-ambar" style={{ width: "100%", textAlign: "center" }}>Reservar visita privada</a>
              </div>
              <p style={{ marginTop: 14, fontSize: 11, color: "var(--gris-calido)", letterSpacing: ".06em" }}>Confirmación por correo en el día. Sin formularios eternos.</p>
            </div>
          </div>
          <div className="footer" style={{ marginTop: 56 }}>
            <span className="footer-marca">NOCTUA — Casa de Eventos Nocturna</span>
            <span className="footer-legal">Vitacura, Santiago · © {new Date().getFullYear()} NOCTUA · Propuesta Órbita</span>
          </div>
        </div>
      </section>
    </>
  );
}
