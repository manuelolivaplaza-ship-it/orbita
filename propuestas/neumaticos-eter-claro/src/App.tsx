import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 24);
      if (y > lastY.current && y > 120) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""} ${compact ? "is-compact" : ""}`}>
      <div className="header-inner">
        <a href="#inicio" className="logo" aria-label="ÉTER NEUMÁTICOS — inicio">
          <span className="logo-eter">ÉTER</span>
          <span className="logo-sub">NEUMÁTICOS</span>
        </a>

        <nav className="nav-desktop" aria-label="Navegación principal">
          <a href="#medida-exacta">Medida</a>
          <a href="#tabla-precios">Precios</a>
          <a href="#servicios-neuma">Servicios</a>
          <a href="#cotiza-eter">Contacto</a>
        </nav>

        <div className="header-right">
          <a href="tel:+56971234567" className="phone-link">
            +56 9 7123 4567
          </a>
          <a href="#cotiza-eter" className="btn-prim">
            Cotizar mis medidas
          </a>
        </div>

        <button
          className="hamburger"
          aria-expanded={open}
          aria-controls="sheet-eter"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      {open && (
        <div id="sheet-eter" className="sheet">
          <a href="tel:+56971234567" className="sheet-phone">
            +56 9 7123 4567
          </a>
          <nav aria-label="Navegación móvil">
            <a href="#medida-exacta" onClick={() => setOpen(false)}>
              Medida
            </a>
            <a href="#tabla-precios" onClick={() => setOpen(false)}>
              Precios
            </a>
            <a href="#servicios-neuma" onClick={() => setOpen(false)}>
              Servicios
            </a>
            <a href="#cotiza-eter" onClick={() => setOpen(false)}>
              Contacto
            </a>
          </nav>
          <a href="#cotiza-eter" className="btn-prim" onClick={() => setOpen(false)}>
            Cotizar mis medidas
          </a>
        </div>
      )}
    </header>
  );
}

function HeroMedia() {
  const [err16, setErr16] = useState(false);
  const [err9, setErr9] = useState(false);

  useEffect(() => {
    if (err16) console.warn("[ÉTER] Falta media: eter-hero-16x9.png en public/media/");
    if (err9) console.warn("[ÉTER] Falta media: eter-hero-9x16.png en public/media/");
  }, [err16, err9]);

  const showFallback16 = err16;
  const showFallback9 = err9;

  return (
    <div className="hero-media-col">
      <motion.div
        className="hero-media hero-media--16x9"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {!showFallback16 ? (
          <img
            className="hero-img-desktop"
            src="/media/eter-hero-16x9.png"
            alt="Galpón de serviteca luminoso con torres de neumáticos nuevos alineados sobre piso concreto claro"
            loading="eager"
            decoding="async"
            onError={() => setErr16(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            className="media-falta hero-img-desktop"
            data-falta="eter-hero-16x9.png"
            style={{
              aspectRatio: "16/9",
              background: "var(--muted)",
              border: "1px solid var(--linea)",
              display: "grid",
              placeItems: "center",
              color: "var(--gris)",
              font: "12px Outfit, sans-serif",
            }}
          >
            Falta eter-hero-16x9.png
          </div>
        )}

        {!showFallback9 ? (
          <img
            className="hero-img-mobile"
            src="/media/eter-hero-9x16.png"
            alt="Torre central de neumáticos en galpón luminoso, formato vertical"
            loading="eager"
            decoding="async"
            onError={() => setErr9(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            className="media-falta hero-img-mobile"
            data-falta="eter-hero-9x16.png"
            style={{
              aspectRatio: "9/16",
              background: "var(--muted)",
              border: "1px solid var(--linea)",
              display: "grid",
              placeItems: "center",
              color: "var(--gris)",
              font: "12px Outfit, sans-serif",
            }}
          >
            Falta eter-hero-9x16.png
          </div>
        )}
      </motion.div>
      <div className="hero-caption">Stock verificable · Medida, carga y velocidad a la vista · Av. Los Pajaritos 2400, Maipú</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">SERVITECA · MAIPÚ · DESDE 2006</p>

          <h1 id="hero-title" className="hero-h1">
            <motion.span
              className="line"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            >
              <span className="line-inner">La llanta correcta,</span>
            </motion.span>
            <motion.span
              className="line"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              <span className="line-inner">instalada hoy.</span>
            </motion.span>
          </h1>

          <p className="hero-sub">
            Confirmamos stock, cotizamos en el día y la instalamos al tiro. Medidas, carga y velocidad verificadas — sin sorpresas al llegar.
          </p>

          <div className="hero-ctas">
            <a href="#cotiza-eter" className="btn-prim">
              Cotizar mis medidas
            </a>
            <a href="#tabla-precios" className="link-sec">
              Ver stock y precios
            </a>
          </div>
        </div>

        <HeroMedia />
      </div>

      <div className="hero-banda" aria-label="Garantías">
        Stock real · Cotización en el día · Instalación al tiro · Despacho RM
      </div>
    </section>
  );
}

/* ───────── Progress bar ───────── */
function ProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress-bar" style={{ width: `${w}%` }} aria-hidden="true" />;
}

/* ───────── Sticky mobile ───────── */
function StickyMobile() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);
  return (
    <div className={`sticky-mobile ${visible ? "is-visible" : ""}`} role="region" aria-label="Acción rápida móvil">
      <a href="tel:+56971234567" className="sticky-phone">
        +56 9 7123 4567
      </a>
      <a href="#cotiza-eter" className="sticky-cta">
        <span className="sticky-cta-icon" aria-hidden="true">
          ◯
        </span>{" "}
        Cotizar medidas
      </a>
    </div>
  );
}

/* ───────── #taller-en-numeros ───────── */
function useCountUp(target: number, duration = 1200, startOnView = true) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!startOnView) {
      animate();
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          animate();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    function animate() {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [target, duration, startOnView]);
  return { val, ref };
}

function TallerEnNumeros() {
  const c1 = useCountUp(18);
  const c2 = useCountUp(28000);
  const c3 = useCountUp(96);
  const c4 = useCountUp(1400);

  // respect prefers-reduced-motion: if user prefers reduce, skip animation
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(m.matches);
    const h = () => setReduce(m.matches);
    m.addEventListener?.("change", h);
    return () => m.removeEventListener?.("change", h);
  }, []);

  const fmt = (n: number) => n.toLocaleString("es-CL");

  return (
    <section id="taller-en-numeros" className="sec-numeros" aria-labelledby="numeros-title">
      <div className="wrap">
        <h2 id="numeros-title" className="sr-only">
          Taller en números
        </h2>
        <div className="numeros-grid">
          <div className="numero-col" ref={c1.ref}>
            <div className="numero-num">{reduce ? "+18" : `+${fmt(c1.val)}`}</div>
            <div className="numero-label">años en Maipú</div>
            <div className="numero-sub">Desde 2006 en Los Pajaritos</div>
          </div>
          <div className="numero-col" ref={c2.ref}>
            <div className="numero-num">{reduce ? "+28.000" : `+${fmt(c2.val)}`}</div>
            <div className="numero-label">llantas instaladas</div>
            <div className="numero-sub">Registro interno taller</div>
          </div>
          <div className="numero-col" ref={c3.ref}>
            <div className="numero-num">{reduce ? "96%" : `${c3.val}%`}</div>
            <div className="numero-label">instalación en el día</div>
            <div className="numero-sub">Si hay stock, sale hoy</div>
          </div>
          <div className="numero-col" ref={c4.ref}>
            <div className="numero-num">{reduce ? "+1.400" : `+${fmt(c4.val)}`}</div>
            <div className="numero-label">autos al mes</div>
            <div className="numero-sub">Promedio últimos 12 meses</div>
          </div>
        </div>
        <p className="numeros-nota">Cifras de gestión interna ÉTER, no promesas.</p>
      </div>
    </section>
  );
}

/* ───────── #medida-exacta ───────── */
function MedidaExacta() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [imgErr, setImgErr] = useState(false);

  const handleConfirm = () => {
    if (!value.trim()) {
      setError("Indica tu medida para cotizar");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess(`Stock verificado para "${value.trim()}" — te confirmamos precio en el día.`);
    // optional scroll to cotiza
  };

  useEffect(() => {
    if (imgErr) console.warn("[ÉTER] Falta media: eter-interior-16x9.png");
  }, [imgErr]);

  return (
    <section id="medida-exacta" className="sec-medida" aria-labelledby="medida-title">
      {/* sutil bg */}
      {!imgErr ? (
        <img
          src="/media/eter-interior-16x9.png"
          alt=""
          aria-hidden="true"
          className="medida-bg"
          onError={() => setImgErr(true)}
        />
      ) : (
        <div className="media-falta" data-falta="eter-interior-16x9.png" style={{ display: "none" }} aria-hidden="true" />
      )}
      <div className="wrap medida-wrap">
        <div className="medida-header">
          <p className="kicker">ENCUENTRA TU MEDIDA</p>
          <h2 id="medida-title" className="h2">¿Qué medida necesita tu auto? La verificamos.</h2>
          <p className="sub">Ingresa la medida del costado del neumático o tu modelo. Te confirmamos stock y precio en el día.</p>
        </div>

        <div className="buscador">
          <div className="buscador-row">
            <input
              className="buscador-input"
              type="text"
              placeholder="Ej: 205/55 R16 · Marca · Modelo · Año"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError("");
                if (success) setSuccess("");
              }}
              aria-label="Medida del neumático"
              aria-invalid={!!error}
            />
            <button type="button" className="buscador-btn" onClick={handleConfirm}>
              Confirmar stock
            </button>
          </div>
          {error && (
            <p className="buscador-error" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="buscador-success" role="status">
              {success} <a href="#cotiza-eter">Ir a cotizar →</a>
            </p>
          )}
        </div>

        <div className="pasos3">
          <div className="paso">
            <div className="paso-num">01</div>
            <div className="paso-title">Envías tu medida</div>
            <div className="paso-micro">Foto del costado o padrón</div>
          </div>
          <div className="paso">
            <div className="paso-num">02</div>
            <div className="paso-title">Confirmamos stock y precio</div>
            <div className="paso-micro">Respuesta en &lt;10 min hábil</div>
          </div>
          <div className="paso">
            <div className="paso-num">03</div>
            <div className="paso-title">Instalas o despachas</div>
            <div className="paso-micro">En el día en Maipú o despacho RM</div>
          </div>
        </div>

        <p className="medida-micro">Si no hay stock, te decimos al tiro — no te hacemos perder el día.</p>
      </div>
    </section>
  );
}

/* ───────── #tabla-precios ───────── */
const PRECIOS = [
  { medida: "175/70 R14", a: "$62.900", b: "$54.900", dest: false },
  { medida: "185/65 R15", a: "$74.900", b: "$64.900", dest: false },
  { medida: "195/55 R16", a: "$89.900", b: "$79.900", dest: false },
  { medida: "205/55 R16", a: "$98.900", b: "$86.900", dest: true },
  { medida: "215/45 R17", a: "$129.900", b: "$114.900", dest: false },
  { medida: "225/40 R18", a: "$149.900", b: "$132.900", dest: false },
];

function TablaPrecios() {
  return (
    <section id="tabla-precios" className="sec-precios" aria-labelledby="precios-title">
      <div className="wrap">
        <p className="kicker">VALORES REFERENCIALES</p>
        <h2 id="precios-title" className="h2">
          Precios de referencia, sin sorpresas
        </h2>
        <p className="sub">Incluye montaje y balanceo. Con IVA. El valor final se confirma por medida y stock del día.</p>

        <div className="tabla-wrap" role="table" aria-label="Tabla de precios">
          <div className="tabla-head" role="row">
            <span role="columnheader">Medida</span>
            <span role="columnheader">Marca A — importación directa</span>
            <span role="columnheader">Marca B — origen alternativo</span>
            <span className="tabla-head-reveal" aria-hidden="true"></span>
          </div>
          {PRECIOS.map((r) => (
            <div key={r.medida} className={`tabla-row ${r.dest ? "is-dest" : ""}`} role="row">
              <span className="tabla-medida" role="cell">
                {r.medida}
              </span>
              <span className="tabla-precio" role="cell">
                desde {r.a}
              </span>
              <span className="tabla-precio tabla-precio-b" role="cell">
                desde {r.b}
              </span>
              <span className="tabla-reveal" aria-hidden="true">
                Incluye válvula y balanceo
              </span>
            </div>
          ))}
        </div>

        <p className="tabla-nota">Valores referenciales; se confirma tras diagnóstico de medida, carga y velocidad. Montaje y balanceo incluidos. Despacho RM $7.900.</p>
      </div>
    </section>
  );
}

/* ───────── #servicios-neuma ───────── */
const SERVICIOS = [
  { title: "CAMBIO Y MONTAJE", desc: "Desmontaje, montaje y torque con ficha técnica." },
  { title: "ALINEACIÓN Y BALANCEO", desc: "Corrección y balanceo computarizado." },
  { title: "REPARACIÓN DE LLANTAS", desc: "Reparación de aleación leve y pintura." },
  { title: "VENTA ONLINE CON DESPACHO", desc: "Compra con retiro o despacho RM." },
  { title: "NEUMÁTICOS AGRÍCOLAS / INDUSTRIALES", desc: "Medidas especiales a pedido." },
  { title: "REVISIÓN DE PRESIÓN Y ROTACIÓN", desc: "Control preventivo sin costo con montaje." },
];

function ServiciosNeuma() {
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  useEffect(() => {
    if (err1) console.warn("[ÉTER] Falta media: eter-tile-01-1x1.png");
    if (err2) console.warn("[ÉTER] Falta media: eter-tile-02-1x1.png");
  }, [err1, err2]);

  return (
    <section id="servicios-neuma" className="sec-servicios" aria-labelledby="servicios-title">
      <div className="wrap">
        <h2 id="servicios-title" className="sr-only">
          Servicios
        </h2>
        <div className="serv-grid">
          {SERVICIOS.map((s, i) => {
            const isTile1 = i % 2 === 0; // 0,2,4 -> tile01
            const src = isTile1 ? "/media/eter-tile-01-1x1.png" : "/media/eter-tile-02-1x1.png";
            const alt = isTile1
              ? "Macro de banda de rodadura nueva sobre papel kraft claro, detalle técnico"
              : "Tuercas y manómetro alineados sobre superficie hueso, orden industrial";
            const err = isTile1 ? err1 : err2;
            const setErr = isTile1 ? setErr1 : setErr2;
            return (
              <div key={s.title} className="serv-cell">
                <div className="serv-img-wrap">
                  {!err ? (
                    <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} />
                  ) : (
                    <div className="media-falta" data-falta={isTile1 ? "eter-tile-01-1x1.png" : "eter-tile-02-1x1.png"}>
                      Falta {isTile1 ? "eter-tile-01-1x1.png" : "eter-tile-02-1x1.png"}
                    </div>
                  )}
                </div>
                <div className="serv-body">
                  <h3 className="serv-title">{s.title}</h3>
                  <p className="serv-desc">{s.desc}</p>
                  <a href="#cotiza-eter" className="serv-link">
                    Agendar hora →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── #montaje-express ───────── */
function MontajeExpress() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn("[ÉTER] Falta media: eter-tile-03-3x4.png");
  }, [err]);

  return (
    <section id="montaje-express" className="sec-montaje" aria-labelledby="montaje-title">
      <div className="wrap">
        <p className="kicker">MÉTODO ÉTER</p>
        <h2 id="montaje-title" className="h2">
          Cotizas, confirmamos, instalas.
        </h2>
        <div className="montaje-grid">
          <div className="montaje-cols">
            <div className="montaje-col">
              <div className="montaje-num">01</div>
              <h3 className="montaje-h3">Cotizas por medida</h3>
              <p className="montaje-desc">Respuesta en &lt;10 min hábil con foto del código.</p>
            </div>
            <div className="montaje-col">
              <div className="montaje-num">02</div>
              <h3 className="montaje-h3">Confirmamos stock y precio</h3>
              <p className="montaje-desc">Foto del neumático y código DOT.</p>
            </div>
            <div className="montaje-col">
              <div className="montaje-num">03</div>
              <h3 className="montaje-h3">Instalación en el día o despacho</h3>
              <p className="montaje-desc">Montaje, balanceo y entrega con seguimiento.</p>
            </div>
          </div>
          <div className="montaje-media">
            {!err ? (
              <img
                src="/media/eter-tile-03-3x4.png"
                alt="Detalle vertical de llanta montada de perfil, flanco con código DOT legible sobre concreto claro"
                loading="lazy"
                onError={() => setErr(true)}
              />
            ) : (
              <div className="media-falta" data-falta="eter-tile-03-3x4.png">
                Falta eter-tile-03-3x4.png
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── #ruta-testimonios ───────── */
const TESTIMONIOS = [
  {
    cita: "“Llegué con la medida justa y tenían stock. Instalado en una hora.”",
    attr: "— R. Fuentes, Cerrillos · Cliente desde 2019 · Flota taxi",
  },
  {
    cita: "“Cotización clara por WhatsApp, sin letra chica. Precio final igual al inicial.”",
    attr: "— M. Soto, Maipú · Particular",
  },
  {
    cita: "“Para la agrícola consiguieron la medida en 48 horas. Con factura y garantía.”",
    attr: "— Agrícola Santa Marta, Buin · Empresa",
  },
];

function RutaTestimonios() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  useEffect(() => {
    if (imgErr) console.warn("[ÉTER] Falta media: eter-proof-16x9.png");
  }, [imgErr]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIOS.length), 4200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="ruta-testimonios"
      className="sec-testimonios"
      aria-labelledby="testimonios-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* banda sutil arriba */}
      <div className="testi-banda">
        {!imgErr ? (
          <img
            src="/media/eter-proof-16x9.png"
            alt=""
            aria-hidden="true"
            className="testi-banda-img"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="media-falta" data-falta="eter-proof-16x9.png" style={{ display: "none" }} aria-hidden="true" />
        )}
      </div>

      <div className="wrap">
        <h2 id="testimonios-title" className="sr-only">
          Testimonios
        </h2>

        {/* desktop grid */}
        <div className="testi-grid" aria-hidden="true">
          {TESTIMONIOS.map((t) => (
            <div key={t.attr} className="testi-col">
              <p className="testi-cita">{t.cita}</p>
              <p className="testi-attr">{t.attr}</p>
            </div>
          ))}
        </div>

        {/* mobile carousel */}
        <div className="testi-carousel" aria-live="polite">
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="testi-slide"
          >
            <p className="testi-cita">{TESTIMONIOS[idx].cita}</p>
            <p className="testi-attr">{TESTIMONIOS[idx].attr}</p>
          </motion.div>
          <div className="testi-dots" role="tablist" aria-label="Testimonios">
            {TESTIMONIOS.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === idx ? "is-active" : ""}`}
                aria-label={`Testimonio ${i + 1}`}
                aria-selected={i === idx}
                role="tab"
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── #dudas-rodero ───────── */
const FAQS = [
  {
    q: "¿Cómo verifico qué medida lleva mi auto?",
    a: "En el costado del neumático (ej: 205/55 R16) o en el marco de la puerta. Mándanos foto y la confirmamos.",
  },
  {
    q: "¿Con qué marcas trabajan?",
    a: "Bridgestone, Michelin, Continental, Goodyear, Hankook y alternativas de importación con garantía. Según stock del día.",
  },
  {
    q: "¿Cuánto demora la instalación?",
    a: "30 a 60 min por par, con balanceo. Si agendás, no esperás.",
  },
  {
    q: "¿Despachan a regiones?",
    a: "RM despacho $7.900. Regiones por pagar según courier, embalaje reforzado.",
  },
  {
    q: "¿La cotización es con IVA?",
    a: "Sí, todos los valores son con IVA e incluyen montaje y balanceo.",
  },
  {
    q: "¿Puedo agendar para no esperar?",
    a: "Sí, por WhatsApp +56 9 7123 4567. Te damos hora exacta.",
  },
];

function DudasRodero() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="dudas-rodero" className="sec-faq" aria-labelledby="faq-title">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <h2 id="faq-title" className="h2" style={{ textAlign: "center" }}>
          Dudas frecuentes
        </h2>
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="faq-a-wrap"
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 272ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p className="faq-a">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── #cotiza-eter ───────── */
function CotizaEter() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [medida, setMedida] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("eter_cotizacion");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.nombre) setNombre(d.nombre);
        if (d.telefono) setTel(d.telefono);
        if (d.medida) setMedida(d.medida);
      }
    } catch {}
  }, []);

  const validateTel = (v: string) => {
    const clean = v.replace(/[\s\-]/g, "");
    return /^(\+?56)?9\d{8}$/.test(clean);
  };
  const validateMedida = (v: string) => /\d{3}\/\d{2}\s*R\d{2}/i.test(v);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setWarning("");
    setSuccess("");

    if (!nombre.trim() || !validateTel(tel) || !medida.trim()) {
      setError("Revisa tu medida y teléfono");
      return;
    }
    if (!validateMedida(medida)) {
      setWarning("Verifica formato: 205/55 R16");
    } else {
      setWarning("");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Cotización enviada. Te respondemos en <10 min hábil.");
      const data = { nombre: nombre.trim(), telefono: tel.trim(), medida: medida.trim(), mensaje: mensaje.trim(), date: new Date().toISOString() };
      try {
        localStorage.setItem("eter_cotizacion", JSON.stringify(data));
      } catch {}
    }, 800);
  };

  const waText = encodeURIComponent(
    `Hola ÉTER, consulta por medida ${medida || "205/55 R16"} — Nombre: ${nombre || ""} Tel: ${tel || ""} ${mensaje ? `— ${mensaje}` : ""}`.trim()
  );
  const waHref = `https://wa.me/56971234567?text=${waText}`;

  return (
    <section id="cotiza-eter" className="sec-cotiza" aria-labelledby="cotiza-title">
      <div className="wrap">
        <div className="cotiza-grid">
          <div className="cotiza-left">
            <h2 id="cotiza-title" className="h2">
              ¿Llanta ponchada? Hablemos ahora.
            </h2>
            <a href="tel:+56971234567" className="cotiza-phone">
              +56 9 7123 4567
            </a>
            <a href="https://wa.me/56971234567" target="_blank" rel="noopener noreferrer" className="btn-accent">
              Escribir por WhatsApp
            </a>
            <div className="cotiza-meta">
              <p>Lun–Sáb 8:30–19:30 · Dom 9:00–14:00 (urgencias)</p>
              <p>Av. Los Pajaritos 2400, Maipú — Estacionamiento clientes</p>
            </div>
            <div className="micro-mapa" aria-hidden="true">
              <svg viewBox="0 0 400 140" width="100%" height="100%" role="img" aria-label="Mapa lineal Maipú">
                <rect x="0.5" y="0.5" width="399" height="139" fill="none" stroke="var(--linea)" strokeWidth="1" />
                {/* calles */}
                <line x1="0" y1="42" x2="400" y2="42" stroke="var(--linea)" strokeWidth="1" />
                <line x1="0" y1="84" x2="400" y2="84" stroke="var(--linea)" strokeWidth="1" />
                <line x1="120" y1="0" x2="120" y2="140" stroke="var(--linea)" strokeWidth="1" />
                <line x1="250" y1="0" x2="250" y2="140" stroke="var(--linea)" strokeWidth="1" />
                {/* point */}
                <circle cx="185" cy="63" r="5" fill="var(--accent)" />
                <text x="195" y="67" fontFamily="Outfit, sans-serif" fontSize="11" fill="var(--ink)" fontWeight="600">
                  ÉTER
                </text>
                <text x="12" y="18" fontFamily="Outfit, sans-serif" fontSize="10" fill="var(--gris)" letterSpacing="0.08em">
                  AV. LOS PAJARITOS
                </text>
                <text x="12" y="100" fontFamily="Outfit, sans-serif" fontSize="9" fill="var(--gris)">
                  Maipú — 2400
                </text>
              </svg>
            </div>
          </div>

          <div className="cotiza-right">
            <form className="cotiza-form" onSubmit={handleSubmit} noValidate>
              <label className="field">
                <span className="field-label">
                  Nombre <span aria-hidden="true">*</span>
                </span>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </label>

              <label className="field">
                <span className="field-label">
                  Teléfono +56 9 <span aria-hidden="true">*</span>
                </span>
                <input
                  type="tel"
                  required
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="+56 9 1234 5678"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </label>

              <label className="field">
                <span className="field-label">
                  Medida <span aria-hidden="true">*</span>
                </span>
                <input
                  type="text"
                  required
                  value={medida}
                  onChange={(e) => {
                    setMedida(e.target.value);
                    if (warning) setWarning("");
                  }}
                  placeholder="Ej: 205/55 R16"
                />
                {warning && <span className="field-warning">{warning}</span>}
              </label>

              <label className="field">
                <span className="field-label">Mensaje</span>
                <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Marca, modelo, año o duda..." rows={3} />
              </label>

              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              {success && (
                <p className="form-success" role="status">
                  {success}
                </p>
              )}

              <button type="submit" className="btn-prim form-submit" disabled={loading}>
                {loading ? "Enviando…" : "Cotizar mis medidas"}
              </button>

              {success && (
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="wa-extra">
                  Abrir WhatsApp con mi medida →
                </a>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="wrap">
          <p>ÉTER NEUMÁTICOS SpA · RUT 76.123.456-7 · Av. Los Pajaritos 2400, Maipú · ventas@eterneumaticos.cl · © 2026</p>
        </div>
      </footer>
    </section>
  );
}

export function App() {
  return (
    <>
      <a href="#inicio" className="skip">
        Saltar al contenido
      </a>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <TallerEnNumeros />
        <MedidaExacta />
        <TablaPrecios />
        <ServiciosNeuma />
        <MontajeExpress />
        <RutaTestimonios />
        <DudasRodero />
        <CotizaEter />
      </main>
      <StickyMobile />
    </>
  );
}
