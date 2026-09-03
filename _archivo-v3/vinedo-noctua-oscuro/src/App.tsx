import { useEffect, useRef, useState } from "react";

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "filosofia", label: "Filosofía" },
  { id: "cavas", label: "Cavas" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];

const CAVAS = [
  {
    n: "01",
    title: "Cava Clásica Nocturna",
    meta: "60 min · 8 máx · 19:30",
    incluye: ["Recorrido cava subterránea climatizada", "3 etiquetas guarda + tabla nocturna", "Guía de cava, copa Riedel"],
    noIncluye: ["Traslado", "Compra guarda (opcional)"],
    temp: "Tinto guarda 16–18°C · Blanco 8–10°C",
  },
  {
    n: "02",
    title: "Reserva Barrica",
    meta: "90 min · 8 máx · 19:30",
    incluye: ["Barrica roble francés 225L + trazabilidad", "4 etiquetas + maridaje nocturno", "Relato de guarda por añada"],
    noIncluye: ["Caja guarda (se compra aparte)"],
    temp: "Reserva 16°C · Gran reserva 17–18°C",
  },
  {
    n: "03",
    title: "Guarda Premium — etiqueta negra",
    meta: "120 min · 6 máx · 20:00",
    incluye: ["Cata vertical 3 añadas guarda negra", "Botella guarda negra incluida (1)", "Ficha técnica + guarda sellada"],
    noIncluye: ["Nada: todo incluido premium"],
    temp: "Guarda negra 16–17°C exacta",
  },
  {
    n: "04",
    title: "Maridaje Nocturno & Tabla",
    meta: "90 min · 8 máx · 19:30",
    incluye: ["4 etiquetas + tabla curada nocturna", "Pan de masa madre + aceite valle"],
    noIncluye: ["Botella para llevar"],
    temp: "Maridaje 16°C · Tabla a temperatura cava",
  },
  {
    n: "05",
    title: "Atardecer a Nocturno",
    meta: "75 min · 8 máx · 18:30",
    incluye: ["Paseo parra atardecer + cava noche", "2 etiquetas + copa atardecer"],
    noIncluye: ["Cena"],
    temp: "Atardecer 14°C cava · Servicio 16°C",
  },
  {
    n: "06",
    title: "Cava Privada Grupos",
    meta: "120 min · 8 máx · horario a convenir",
    incluye: ["Cava exclusiva + guía dedicado", "Hasta 8 personas, relato de guarda", "Factura empresa + guarda a domicilio"],
    noIncluye: ["Traslado privado (se coordina)"],
    temp: "Temperatura por etiqueta · Guarda 14°C",
  },
];

const PRECIOS = [
  { nombre: "Cava Nocturna", precio: 24900, incluye: "60 min · 3 etiquetas · tabla", temp: "16–18°C · 24–48h" },
  { nombre: "Reserva Barrica", precio: 38900, incluye: "90 min · 4 etiquetas · maridaje", temp: "16°C · 24–48h" },
  { nombre: "Guarda Premium", precio: 58900, incluye: "120 min · vertical 3 añadas · 1 botella negra", temp: "16–17°C · guarda incluida" },
  { nombre: "Maridaje Nocturno", precio: 44900, incluye: "90 min · 4 etiquetas · tabla curada", temp: "16°C · 24–48h" },
  { nombre: "Caja Guarda Negra 6", precio: 149900, incluye: "6 botellas guarda negra · caja climatizada", temp: "Guarda 14°C · despacho premium" },
];

const FAQS = [
  {
    q: "¿Cómo reservo cava privada y hasta cuándo puedo cancelar?",
    a: "Reserva por teléfono +56 2 2840 7732 o mail hola@noctuavina.cl. Confirmamos en 2 horas hábiles con horario exacto y cupo. Cancela o reprograma hasta 24h antes sin costo. Si tu guarda no está en condición, te avisamos antes de cobrarte, no después.",
  },
  {
    q: "¿Qué incluye la degustación premium y qué temperatura tiene cada etiqueta?",
    a: "Incluye cava climatizada 14°C, copa Riedel, relato de guarda y temperatura de servicio por etiqueta: tinto guarda 16–18°C, no 22°C de sala sin climatizar. Si llueve, la cava es subterránea: no se suspende.",
  },
  {
    q: "¿Puedo comprar guarda sin hacer el tour y cómo es el despacho premium?",
    a: "Sí. Venta directa de etiqueta negra con despacho premium RM 24–48h. Caja sellada climatizada, guía y factura. Si tu etiqueta no está en guarda, te avisamos en 2 horas — no te cobramos para después decir 'no había'.",
  },
  {
    q: "¿Hacen cava privada para empresa o celebración?",
    a: "Sí. Cava Privada 8 máx, 120 min, guía dedicado, factura empresa y guarda a domicilio. Horario a convenir Lun–Sáb 15:00–22:00. Escríbenos a hola@noctuavina.cl con fecha y número de invitados.",
  },
  {
    q: "¿Qué pasa si llueve — la cava es subterránea climatizada?",
    a: "La cava es subterránea a 14°C constante y 75% humedad. Lluvia no afecta la degustación. Si hay alerta que impida llegar, reprogramamos sin costo con 24h de aviso.",
  },
  {
    q: "¿Cómo llego de noche desde Santiago y hay chofer privado?",
    a: "Pirque a 35 min de Santiago. Coordinamos chofer privado ida y vuelta con costo adicional. Estacionamiento privado en viña. Último ingreso 20:30, degustación 19:30 puntual — horario respetado aunque llegue un solo invitado.",
  },
];

const CIFRAS = [
  { v: 16, suffix: " años", label: "de guarda" },
  { v: 9000, suffix: "", label: "visitas nocturnas al año" },
  { v: 99, suffix: "%", label: "degustaciones a temperatura exacta" },
  { v: 3000, suffix: "", label: "botellas guarda negra" },
];

function useCountUp(active: boolean, target: number) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return val;
}

export function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openCava, setOpenCava] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cifrasIn, setCifrasIn] = useState(false);
  const [galIn, setGalIn] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 18);
      setHideNav(y > lastY.current && y > 120);
      lastY.current = y;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
      setShowSticky(y > 720);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    document.documentElement.classList.add("hero-mounted");
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = document.getElementById("cifras");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setCifrasIn(true);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById("galeria");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setGalIn(true);
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = import.meta.env.BASE_URL;
  const fmt = (n: number) => n.toLocaleString("es-CL");

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})`, width: "100%" }} />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Navegación principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="NOCTUA inicio">
            NOCTUA <small>VIÑA & CAVA</small>
          </a>
          <div className="nav-links">
            {NAV.map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
            <a href="#reserva" className="btn-burdeo">
              Reservar
            </a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-expanded={mobileNav} aria-label="Menú">
            {mobileNav ? "Cerrar" : "Menú"}
          </button>
        </div>
      </nav>

      {mobileNav && (
        <div className="mobile-menu" role="dialog" aria-label="Menú móvil">
          {NAV.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)}>
              {l.label}
            </a>
          ))}
          <a href="#reserva" className="btn-burdeo" onClick={() => setMobileNav(false)}>
            Reservar cava privada
          </a>
          <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "#9A9590", marginTop: 8 }}>
            +56 2 2840 7732 · hola@noctuavina.cl · Pirque · Lun–Sáb 15:00–22:00
          </div>
        </div>
      )}

      <section id="inicio" aria-label="Inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Viña nocturna · Pirque · Cava a 14°C</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line">
                <span>Guarda precisa.</span>
              </span>
              <span className="line">
                <span>Botella servida</span>
              </span>
              <span className="line">
                <span>a su hora.</span>
              </span>
            </h1>
            <p className="hero-sub">
              Cava nocturna en Pirque. Degustación premium con cupo íntimo, guarda controlada y venta directa de etiqueta negra — con
              horario respetado y temperatura de servicio exacta.
            </p>
            <div className="hero-ctas">
              <a href="#reserva" className="btn-burdeo">
                Reservar cava privada
              </a>
              <a href="#precios" className="btn-ghost">
                Ver guarda y despacho
              </a>
            </div>
            <div className="hero-caption">Cava NOCTUA · 8 máx por degustación · Temperatura 14°C constante · Etiqueta negra</div>
            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6763", border: "1px solid #2E2A26", padding: "6px 9px" }}>
                Cupo íntimo 8 máx
              </span>
              <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6763", border: "1px solid #2E2A26", padding: "6px 9px" }}>
                Guarda a 14°C
              </span>
              <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6763", border: "1px solid #2E2A26", padding: "6px 9px" }}>
                Despacho premium
              </span>
              <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6763", border: "1px solid #2E2A26", padding: "6px 9px" }}>
                Etiqueta negra
              </span>
            </div>
          </div>
          <div className="hero-right">
            <img src={`${base}media/hero.jpg`} alt="Cava nocturna vacía con barricas iluminadas cenitalmente en Pirque" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      <section id="filosofia" className="section-pad">
        <div className="wrap">
          <div className="kicker" style={{ marginBottom: 10 }}>
            Filosofía de guarda
          </div>
          <div className="filo-grid">
            <div>
              <div className="filo-quote">La guarda no improvisa. Nosotros tampoco.</div>
              <p className="filo-copy">
                Barrica roble francés 225L con trazabilidad de guarda desde el encube. Botella etiquetada en cava, no en bodega
                externa. Temperatura de servicio controlada por etiqueta — tinto guarda 16–18°C, no 22°C de sala sin climatizar. Si tu
                guarda no está en condición, te avisamos antes de cobrarte, no después.
              </p>
              <p className="filo-copy" style={{ marginTop: 12 }}>
                Micro-compromiso: guarda en cava propia a 14°C constante. Si tu etiqueta no está en guarda, te avisamos en 2 horas —
                no te cobramos para después decir “no había”.
              </p>
              <div className="filo-meta">Guarda 14°C · Humedad 75% · 18 meses barrica promedio</div>
            </div>
            <div className="filo-side">
              <dl>
                <dt>14°C constante</dt>
                <dd>Cava subterránea climatizada. Sin bodega externa, sin “llega en 10 días”.</dd>
                <dt>8 máx · copa Riedel</dt>
                <dd>Degustación íntima, no sala común con 25 personas y parlante.</dd>
                <dt>Etiqueta negra</dt>
                <dd>Guarda controlada y venta directa. Temperatura exacta por etiqueta.</dd>
                <dt>Horario respetado</dt>
                <dd>19:30 puntual. Aunque llegue un solo invitado, la cava abre.</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="cavas" className="section-pad">
        <div className="wrap">
          <div className="kicker">Cavas nocturnas</div>
          <h2 className="h2">Seis cavas. Una sola guarda.</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Índice numerado 01–06. Hover revela incluye, temperatura y guarda. En móvil, tap abre el detalle.
          </p>
          <div className="cavas-list" role="list">
            {CAVAS.map((c, i) => (
              <div key={c.n} className={`cava-row ${openCava === i ? "open" : ""}`} role="listitem">
                <div className="cava-head" onClick={() => setOpenCava(openCava === i ? null : i)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setOpenCava(openCava === i ? null : i)} aria-expanded={openCava === i}>
                  <div className="cava-num">{c.n}</div>
                  <div className="cava-title">{c.title}</div>
                  <div className="cava-meta">{c.meta}</div>
                </div>
                <div className="cava-panel" aria-hidden={openCava !== i}>
                  <div className="cava-panel-inner">
                    <div className="cava-panel-body">
                      <div>
                        <h4>Incluye</h4>
                        <ul>
                          {c.incluye.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                        <h4>No incluye</h4>
                        <ul>
                          {c.noIncluye.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Temperatura & guarda</h4>
                        <div className="temp">{c.temp}</div>
                        <p style={{ marginTop: 12, color: "#9A9590", fontSize: ".9rem", lineHeight: 1.6 }}>
                          Reserva con horario exacto. Si reprogramas con 24h, no se cobra. Guarda a 14°C con humedad 75%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Cifras de cava</div>
          <h2 className="h2">Disciplina medida en guarda.</h2>
          <div className="cifras-grid" style={{ marginTop: 24 }}>
            {CIFRAS.map((c) => {
              const v = useCountUp(cifrasIn, c.v);
              return (
                <div key={c.label} className={`cifra ${cifrasIn ? "visible" : ""}`}>
                  <div className="cifra-num">
                    +{cifrasIn ? fmt(v) : "0"}
                    {c.suffix}
                  </div>
                  <div className="cifra-label">{c.label}</div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 14, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "#6B6763", letterSpacing: "0.08em" }}>
            Medición 2024–2025 · 99% degustaciones servidas entre 16–18°C según etiqueta · Guarda auditada trimestral
          </div>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Precios guarda</div>
          <h2 className="h2">Precios guarda, sin letra chica.</h2>
          <p className="lead" style={{ marginBottom: 20 }}>
            Valores referenciales 2025. Cupo 8 máx. Sin sorpresas en la cava: el precio que ves es el que pagas.
          </p>
          <div className="precios-wrap">
            <table className="precios-table" aria-label="Tabla de precios">
              <thead>
                <tr>
                  <th>Experiencia / Caja</th>
                  <th>Desde (CLP)</th>
                  <th>Incluye</th>
                  <th>Temperatura / Plazo</th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS.map((p) => (
                  <tr key={p.nombre}>
                    <td>{p.nombre}</td>
                    <td className="price">${fmt(p.precio)}</td>
                    <td>
                      <small>{p.incluye}</small>
                    </td>
                    <td>
                      <small>{p.temp}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="precios-note">
            Valores referenciales 2025. Cupo 8 máx. Despacho premium RM desde $5.990. Si la guarda no está en condición, no se cobra la
            degustación.
          </p>
          <div className="precios-side">
            <div className="precios-box">
              <h4>Despacho premium</h4>
              <p>RM 24–48h premium. Regiones 48–72h. Caja sellada climatizada, guía y factura. Cambio en 48h si falla temperatura o guarda.</p>
            </div>
            <div className="precios-box">
              <h4>Cupo íntimo</h4>
              <p>8 máx por degustación. Último ingreso 20:30. Degustación nocturna 19:30. Responde equipo de cava, no call center.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método NOCTUA</div>
          <h2 className="h2">Tres pasos. Temperatura exacta.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <h3>Reserva cava privada con horario exacto</h3>
              <p>Eliges fecha, cava y temperatura por etiqueta. Confirmamos en 2 horas con cupo y guía. Reprograma hasta 24h antes.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <h3>Degustación íntima</h3>
              <p>8 máx, copa Riedel, relato de guarda por añada y temperatura 16–18°C controlada. Sin parlante, sin apuro.</p>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <h3>Guarda a domicilio premium</h3>
              <p>Caja sellada climatizada, guía y factura. Si tu guarda no está en condición, te avisamos antes — nunca después.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Galería de guarda</div>
          <h2 className="h2">La botella y la cava, como obras.</h2>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className="gal-card">
              <div className={`gal-media ${galIn ? "in" : ""} ${galIn ? "ken" : ""}`}>
                <img src={`${base}media/botella-dark.jpg`} alt="Botella guarda negra sobre piedra oscura con copa de vino tinto" loading="lazy" decoding="async" />
              </div>
              <div className="gal-cap">Botella guarda negra · 14°C · Barrica 225L · 19:30 degustación</div>
            </div>
            <div className="gal-card">
              <div className={`gal-media ${galIn ? "in" : ""}`}>
                <img src={`${base}media/cava-noche.jpg`} alt="Mesa de degustación nocturna vacía con copas alineadas y luz baja" loading="lazy" decoding="async" />
              </div>
              <div className="gal-cap">Cava NOCTUA · Pirque · 8 máx · Temperatura exacta por etiqueta</div>
            </div>
          </div>
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ border: "1px solid #2E2A26", background: "#1A1816", padding: 12, display: "flex", gap: 12, alignItems: "center" }}>
              <img src={`${base}media/texture.jpg`} alt="Macro roble de barrica con veta y sello a fuego" style={{ width: 72, height: 72, objectFit: "cover", border: "1px solid #2E2A26" }} loading="lazy" />
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10.5, color: "#6B6763", lineHeight: 1.5 }}>
                <strong style={{ color: "#EDE6D6", letterSpacing: "0.08em" }}>Roble francés 225L</strong>
                <br />
                Veta + sello a fuego · 18 meses promedio
              </div>
            </div>
            <div style={{ border: "1px solid #2E2A26", background: "#252220", padding: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 10.5, color: "#9A9590", lineHeight: 1.6 }}>
              <strong style={{ color: "#EDE6D6", letterSpacing: "0.08em" }}>Nota técnica</strong>
              <br />
              Cava subterránea · 14°C · 75% humedad · Guarda auditada
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Sin letra chica, con teléfono visible.</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {FAQS.map((f, i) => (
              <div key={f.q} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span className="num">0{i + 1}</span> {f.q}
                  </span>
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 16, color: "#8B2E3A", flexShrink: 0 }}>{openFaq === i ? "—" : "+"}</span>
                </button>
                <div className="faq-a" aria-hidden={openFaq !== i}>
                  <div className="faq-a-inner">
                    <div className="faq-a-body">
                      {f.a} · <a href="tel:+56228407732">+56 2 2840 7732</a> · <a href="mailto:hola@noctuavina.cl">hola@noctuavina.cl</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserva" className="section-pad">
        <div className="wrap">
          <div className="reserva-card">
            <div>
              <div className="kicker">Reserva tu cava</div>
              <h2 className="reserva-title">¿Reservamos tu cava?</h2>
              <p style={{ color: "#9A9590", lineHeight: 1.6, margin: "0 0 8px" }}>
                Responde nuestro equipo de cava, no un call center. Horario respetado aunque llegue un solo invitado.
              </p>
              <div className="phone-big">+56 2 2840 7732</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
                <a href="tel:+56228407732" className="btn-burdeo">
                  Reservar cava privada
                </a>
                <a href="mailto:hola@noctuavina.cl" className="btn-ghost">
                  hola@noctuavina.cl
                </a>
              </div>
              <div style={{ marginTop: 14, fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "#6B6763", lineHeight: 1.6 }}>
                Pirque · Cava Lun–Sáb · Despacho RM 24–48h premium
                <br />
                Lun–Sáb 15:00–22:00 · Degustación nocturna 19:30 · Último ingreso 20:30
              </div>
            </div>
            <div className="reserva-side">
              <h4>Horarios nocturnos</h4>
              <p>Lun–Sáb 15:00–22:00 · Degustación 19:30 puntual. Reprograma hasta 24h antes.</p>
              <h4 style={{ marginTop: 16 }}>Despacho</h4>
              <p>RM 24–48h premium desde $5.990. Regiones 48–72h. Caja climatizada. Si la guarda no está, avisamos en 2h.</p>
              <h4 style={{ marginTop: 16 }}>Dirección</h4>
              <p>Pirque, Valle Central · Estacionamiento privado · Chofer privado coordinable.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", letterSpacing: "0.10em", color: "#EDE6D6", marginBottom: 8 }}>NOCTUA — Viña & Cava Nocturna</div>
              <div>Pirque · Valle Central · Chile</div>
              <div>
                <a href="tel:+56228407732">+56 2 2840 7732</a> · <a href="mailto:hola@noctuavina.cl">hola@noctuavina.cl</a>
              </div>
              <div style={{ marginTop: 8 }}>NOCTUA SpA · RUT 76.123.456-7 · SII · Boleta y factura · © 2025</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div>Guarda a 14°C · Humedad 75% · 18 meses barrica promedio</div>
              <div style={{ marginTop: 6 }}>
                <a href="#inicio">Volver arriba ↑</a>
              </div>
              <div style={{ marginTop: 10, color: "#6B6763" }}>Diseño Órbita · Propuesta vinedo-noctua-oscuro</div>
            </div>
          </div>
        </div>
      </footer>

      <div className="cta-movil" style={{ opacity: showSticky ? 1 : 0, pointerEvents: showSticky ? "auto" : "none", transition: "opacity .25s" }}>
        <a href="#reserva">Reservar cava privada — +56 2 2840 7732</a>
      </div>
    </>
  );
}
