import { useEffect, useRef, useState } from "react";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cifras", label: "Cifras" },
  { href: "#planes", label: "Planes" },
  { href: "#metodo", label: "Método" },
  { href: "#casos", label: "Casos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

function MediaImage({
  desktop,
  mobile,
}: {
  desktop: string;
  mobile: string;
}) {
  const [desktopOk, setDesktopOk] = useState(true);
  const [mobileOk, setMobileOk] = useState(true);
  const [desktopExists, setDesktopExists] = useState<boolean | null>(null);
  const [mobileExists, setMobileExists] = useState<boolean | null>(null);
  const [videoExists, setVideoExists] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(desktop, { method: "HEAD" })
      .then((r) => setDesktopExists(r.ok))
      .catch(() => setDesktopExists(false));
    fetch(mobile, { method: "HEAD" })
      .then((r) => setMobileExists(r.ok))
      .catch(() => setMobileExists(false));
    fetch("/media/pulso-hero-loop.mp4", { method: "HEAD" })
      .then((r) => setVideoExists(r.ok))
      .catch(() => setVideoExists(false));
  }, [desktop, mobile]);

  const showDesktopFallback = desktopExists === false || desktopOk === false;
  const showMobileFallback = mobileExists === false || mobileOk === false;

  return (
    <div className="hero__media-wrap">
      {videoExists === true ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={desktop}
          className="hero__img hero__img--desktop"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        >
          <source src="/media/pulso-hero-loop.mp4" type="video/mp4" />
        </video>
      ) : !showDesktopFallback ? (
        <img
          src={desktop}
          alt=""
          className="hero__img hero__img--desktop"
          onError={() => setDesktopOk(false)}
        />
      ) : (
        <div className="media-falta hero__img--desktop" data-falta="pulso-hero-16x9.png">
          Falta media: pulso-hero-16x9.png
        </div>
      )}
      {!showMobileFallback ? (
        <img
          src={mobile}
          alt=""
          className="hero__img hero__img--mobile"
          onError={() => setMobileOk(false)}
        />
      ) : (
        <div className="media-falta hero__img--mobile" data-falta="pulso-hero-9x16.png">
          Falta media: pulso-hero-9x16.png
        </div>
      )}
    </div>
  );
}

function MediaSingle({
  src,
  falta,
  alt,
  ratio,
  caption,
  className,
}: {
  src: string;
  falta: string;
  alt: string;
  ratio?: string;
  caption?: string;
  className?: string;
}) {
  const [ok, setOk] = useState(true);
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((r) => setExists(r.ok))
      .catch(() => setExists(false));
  }, [src]);
  const showFallback = exists === false || !ok;
  return (
    <figure className={className} style={{ margin: 0 }}>
      {!showFallback ? (
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          style={ratio ? { aspectRatio: ratio, objectFit: "cover", width: "100%", display: "block" } : { width: "100%", display: "block" }}
        />
      ) : (
        <div className="media-falta" data-falta={falta} style={ratio ? { aspectRatio: ratio } : { minHeight: 200 }}>
          Falta media: {falta}
        </div>
      )}
      {caption ? <figcaption className="metodo__caption">{caption}</figcaption> : null}
    </figure>
  );
}

// Servicios data literal BLUEPRINT
const SERVICIOS = [
  {
    n: "01",
    title: "Estrategia y posicionamiento",
    price: "desde $380.000",
    detail: "Diagnóstico de 10 días, mapa de categorías y plan trimestral. Incluye taller inicial.",
  },
  {
    n: "02",
    title: "Pauta digital y paid media",
    price: "desde $450.000/mes",
    detail: "Meta / Google / LinkedIn. Fee + inversión del cliente. Optimización semanal.",
  },
  {
    n: "03",
    title: "Contenido y producción audiovisual",
    price: "desde $520.000/mes",
    detail: "Guiones, rodaje estudio gris-azul, edición. 8 piezas/mes.",
  },
  {
    n: "04",
    title: "SEO técnico y contenidos",
    price: "desde $420.000/mes",
    detail: "Auditoría, sitemap, 4 artículos/mes con intención chilena.",
  },
  {
    n: "05",
    title: "Redes sociales (gestión integral)",
    price: "desde $390.000/mes",
    detail: "Calendario, copies, community 9-18:30, reporte alcance.",
  },
  {
    n: "06",
    title: "Analítica y dashboards",
    price: "desde $320.000/mes",
    detail: "Looker Studio con fuentes auditables, reunión mensual.",
  },
];

const CIFRAS = [
  { value: 10, prefix: "+", suffix: "", label: "años operando", desc: "Desde 2014 con el mismo RUT. PULSO SpA." },
  { value: 120, prefix: "+", suffix: "", label: "cuentas atendidas", desc: "De servicios profesionales a retail. 70% fuera de RM hoy en remoto." },
  { value: 91, prefix: "", suffix: "%", label: "retención anual", desc: "Contratos mensuales, sin permanencia. Se quedan por números." },
  { value: 1, prefix: "", suffix: "", label: "ejecutivo senior por cuenta", desc: "Responde por nombre, no ticket. Lun-Vie 9:00–18:30." },
];

function CountUp({ value, prefix, suffix, trigger }: { value: number; prefix: string; suffix: string; trigger: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    let start: number | null = null;
    const duration = 1200;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      // ease cubic-bezier(0.22,1,0.36,1) approx
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, value]);
  return (
    <span className="cifra__num" style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const PLANES = [
  { plan: "Diagnóstico y plan trimestral", incluye: "Taller + auditoría + roadmap 90 días", desde: "$380.000", plazo: "10 días hábiles" },
  { plan: "Plan mensual integral (más pedido)", incluye: "Estrategia + pauta + contenido + SEO + redes + analítica", desde: "$1.450.000/mes", plazo: "mensual sin permanencia" },
  { plan: "Gestión de pauta", incluye: "Setup + optimización + informe", desde: "$450.000/mes + inversión", plazo: "mensual" },
  { plan: "Producción audiovisual", incluye: "8 piezas estudio/calle", desde: "$520.000/mes", plazo: "mensual" },
  { plan: "Auditoría SEO", incluye: "Técnico + contenidos + priorización", desde: "$420.000", plazo: "15 días" },
  { plan: "Reporte y dashboard", incluye: "Looker + ETL fuentes", desde: "$320.000", plazo: "7 días" },
];

const CASOS = [
  {
    quote: "Pasamos de pedir alcance a pedir reuniones. El reporte mensual nos dejó discutir con números, no con gusto.",
    attr: "Marcela, gerenta de marketing · servicios B2B, La Reina",
  },
  {
    quote: "Nos ordenaron la pauta. Mismo presupuesto, 34% menos CPL en 60 días. Lo vimos en el dashboard, no en un PPT.",
    attr: "Felipe, director comercial · educación, Concepción",
  },
  {
    quote: "Sin contrato de permanencia nos dio confianza. Llevamos 14 meses. El ejecutivo responde el mismo día.",
    attr: "Daniela, fundadora · retail, Viña del Mar",
  },
];

const FAQS = [
  { q: "¿Hay contrato de permanencia?", a: "No. Planes mensuales. Avisas 30 días. Nos quedamos por resultados, no por cláusula." },
  { q: "¿Cuánto cuesta la propuesta?", a: "Nada. El diagnóstico ($380.000) es aparte sólo si lo contratas. La propuesta del plan es sin costo tras la reunión." },
  { q: "¿Quién trabaja mi cuenta?", a: "Un ejecutivo senior con nombre y WhatsApp. No derivamos a juniors sin aviso. Lo conoces en la primera reunión." },
  { q: "¿Cada cuánto reportan?", a: "Optimización semanal interna y reporte mensual con dashboard en vivo. Reunión de lectura 45 min." },
  { q: "¿Qué pasa si los números no mejoran?", a: "Revisamos KPIs, pausamos lo que no tracciona y reasignamos presupuesto. Si en 90 días no hay avance acordado, cierras sin multa." },
  { q: "¿Qué formas de pago aceptan?", a: "Transferencia, Webpay, 3 cuotas sin interés. Factura exenta/afecta según servicio. Valores sin IVA cuando aplica." },
];

export function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [servOpen, setServOpen] = useState<number | null>(null);
  const [cifrasVisible, setCifrasVisible] = useState(false);
  const cifrasRef = useRef<HTMLDivElement>(null);
  const [casosIndex, setCasosIndex] = useState(0);
  const [casosPaused, setCasosPaused] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  // form states
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    presupuesto: "",
    mensaje: "",
    acepto: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // cifras observer
  useEffect(() => {
    if (!cifrasRef.current) return;
    const el = cifrasRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCifrasVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // casos rotation
  useEffect(() => {
    if (casosPaused) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = setInterval(() => {
      setCasosIndex((i) => (i + 1) % CASOS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [casosPaused]);

  // Restore from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("pulso-contacto");
      if (raw) {
        const parsed = JSON.parse(raw);
        setForm((f) => ({ ...f, ...parsed }));
      }
    } catch {
      /* ignore */
    }
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres).";
    if (!form.empresa.trim()) e.empresa = "Empresa es requerida.";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRe.test(form.email)) e.email = "Email inválido.";
    if (form.telefono.trim()) {
      const digits = form.telefono.replace(/\D/g, "");
      // allow +56 and 8-9 digits
      if (digits.length < 8 || digits.length > 11) e.telefono = "Teléfono debe tener 8 a 9 dígitos (puede incluir +56).";
    }
    if (!form.servicio) e.servicio = "Selecciona un servicio.";
    if (!form.presupuesto) e.presupuesto = "Selecciona un presupuesto.";
    if (!form.acepto) e.acepto = "Debes aceptar ser contactado.";
    if (form.mensaje && form.mensaje.length > 2000) e.mensaje = "Mensaje muy largo.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("pulso-contacto", JSON.stringify(form));
      } catch {
        /* ignore */
      }
      // simulate mailto/whatsapp not auto-open to avoid popup blocker; user can click links
    }, 900);
  };

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />

      <header className="header">
        <div className="header__inner">
          <a href="#inicio" className="header__logo">
            PULSO
          </a>

          <nav aria-label="Navegación principal">
            <ul className="header__nav">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__right">
            <a href="tel:+56228403344" className="header__tel">
              +56 2 2840 3344
            </a>
            <a href="#contacto" className="header__cta">
              Solicitar propuesta
            </a>
            <button
              className="header__burger"
              aria-label={drawerOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`} aria-hidden={!drawerOpen}>
        <ul className="drawer__nav">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setDrawerOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="drawer__cta" onClick={() => setDrawerOpen(false)}>
          Solicitar propuesta
        </a>
      </div>

      <section id="inicio" className="hero" aria-label="Inicio">
        <div className="hero__grid">
          <div className="hero__left">
            <p className="hero__kicker">Agencia de marketing · Las Condes — desde 2014</p>
            <h1 className="hero__title">Presencia digital con respaldo de datos.</h1>
            <p className="hero__sub">
              Pauta, contenido y analítica bajo un solo plan mensual. Reportes claros y un ejecutivo que responde por su nombre.
            </p>
            <div className="hero__ctas">
              <a href="#contacto" className="hero__cta-primary">
                Solicitar propuesta
              </a>
              <a href="#servicios" className="hero__cta-secondary">
                Ver servicios
              </a>
            </div>
            <p className="hero__micro">Respuesta en 24h hábiles · Propuesta sin costo</p>
          </div>

          <div className="hero__right">
            <MediaImage desktop="/media/pulso-hero-16x9.png" mobile="/media/pulso-hero-9x16.png" />
          </div>
        </div>
      </section>

      <div className="banda" role="note" aria-label="Información de planes">
        <p className="banda__text">Planes mensuales con ejecutivo dedicado · Reporte con números auditables</p>
      </div>

      {/* #servicios */}
      <section id="servicios" className="section servicios" aria-label="Servicios">
        <p className="section__kicker">Servicios</p>
        <h2 className="section__h2">Un plan que junta lo que hoy está separado.</h2>
        <p className="section__bajada">Sin derivar a terceros. Todo operado por el mismo equipo.</p>

        <div className="servicios__list">
          {SERVICIOS.map((s, idx) => (
            <div
              key={s.n}
              className={`serv-row ${servOpen === idx ? "serv-row--open" : ""}`}
              onClick={() => setServOpen(servOpen === idx ? null : idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(ev) => {
                if (ev.key === "Enter" || ev.key === " ") {
                  ev.preventDefault();
                  setServOpen(servOpen === idx ? null : idx);
                }
              }}
              aria-expanded={servOpen === idx}
            >
              <span className="serv-row__num">{s.n}</span>
              <span className="serv-row__title">{s.title}</span>
              <span className="serv-row__price">{s.price}</span>
              <span className="serv-row__detail">{s.detail}</span>
            </div>
          ))}
        </div>
        <p className="servicios__nota">Valores referenciales; se confirman tras diagnóstico. No partimos sin objetivos escritos y aprobados.</p>
      </section>

      {/* #cifras */}
      <section id="cifras" className="section cifras" aria-label="Cifras">
        <div className="cifras__grid" ref={cifrasRef}>
          {CIFRAS.map((c, i) => (
            <div key={i} className="cifra">
              <div className="cifra__num-wrap">
                <span className="cifra__bar" aria-hidden="true" />
                <CountUp value={c.value} prefix={c.prefix} suffix={c.suffix} trigger={cifrasVisible} />
              </div>
              <div className="cifra__label">{c.label}</div>
              <p className="cifra__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* #planes */}
      <section id="planes" className="section planes" aria-label="Planes">
        <p className="section__kicker">Precios claros</p>
        <h2 className="section__h2" style={{ fontSize: 32 }}>
          Elige el punto de partida.
        </h2>
        <p className="section__bajada">Todos incluyen reporte mensual con fuentes auditables.</p>

        <div className="planes__table-wrap">
          <table className="planes__table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Que incluye</th>
                <th>Desde CLP</th>
                <th>Plazo</th>
              </tr>
            </thead>
            <tbody>
              {PLANES.map((r) => (
                <tr key={r.plan}>
                  <td>{r.plan}</td>
                  <td>{r.incluye}</td>
                  <td>{r.desde}</td>
                  <td>{r.plazo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="planes__nota">
          Valores referenciales válidos Región Metropolitana; regiones sin recargo remoto. Inversión en medios no incluida. Factura
          exenta/afecta según servicio. Se confirma tras diagnóstico.
        </p>
        <a href="#faq" className="planes__cta">
          Comparar planes
        </a>
      </section>

      {/* #metodo */}
      <section id="metodo" className="section metodo" aria-label="Método">
        <p className="section__kicker">Método</p>
        <h2 className="section__h2" style={{ fontSize: 32 }}>
          Tres pasos, números a la vista.
        </h2>
        <div className="metodo__grid">
          <div className="metodo__col">
            <p className="metodo__num">01</p>
            <h3 className="metodo__title">Diagnóstico</h3>
            <p className="metodo__text">
              Entrevistas, acceso a cuentas y auditoría técnica. Entregas un doc de 12 páginas con brechas y oportunidades
              priorizadas.
            </p>
          </div>
          <div className="metodo__col">
            <p className="metodo__num">02</p>
            <h3 className="metodo__title">Plan y KPIs por escrito</h3>
            <p className="metodo__text">Objetivos trimestrales con KPIs y semáforo. Lo firmas tú. Si no hay meta escrita, no hay pauta.</p>
          </div>
          <div className="metodo__col">
            <p className="metodo__num">03</p>
            <h3 className="metodo__title">Ejecución y reporte mensual</h3>
            <p className="metodo__text">Sprints de 2 semanas, optimización semanal, reunión mensual con dashboard. Ajustes sin letra chica.</p>
          </div>
        </div>
        <MediaSingle
          src="/media/pulso-consola-4x3.png"
          falta="pulso-consola-4x3.png"
          alt="Mesa de mezclas del estudio"
          ratio="4 / 3"
          caption="Mesa de mezclas del estudio — señal antes que show."
          className="metodo__media"
        />
      </section>

      {/* #casos */}
      <section id="casos" className="section casos" aria-label="Casos">
        <p className="section__kicker">Casos</p>
        <h2 className="section__h2 casos__h2">Resultados contables, no virales.</h2>

        <div className="casos__viewport">
          <div className="casos__grid casos__grid--carousel">
            {CASOS.map((c, idx) => (
              <div key={idx} className={`casos__card ${casosIndex === idx ? "casos__card--active" : ""}`} aria-hidden={casosIndex !== idx}>
                <span className="casos__quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote className="casos__quote">{c.quote}</blockquote>
                <p className="casos__attr">— {c.attr}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="casos__controls">
          <div className="casos__dots" role="tablist" aria-label="Testimonios">
            {CASOS.map((_, idx) => (
              <button
                key={idx}
                className={`casos__dot ${casosIndex === idx ? "casos__dot--active" : ""}`}
                aria-label={`Testimonio ${idx + 1}`}
                aria-selected={casosIndex === idx}
                onClick={() => setCasosIndex(idx)}
              />
            ))}
          </div>
          <button className="casos__pause" onClick={() => setCasosPaused((v) => !v)} aria-pressed={casosPaused}>
            {casosPaused ? "Reanudar" : "Pausar"}
          </button>
        </div>

        <div className="casos__banner">
          <MediaSingle
            src="/media/pulso-estudio-16x9.png"
            falta="pulso-estudio-16x9.png"
            alt="Estudio gris-azul vacío"
            ratio="16 / 9"
            className=""
          />
        </div>
        <p className="casos__banner-caption">Estudio gris-azul vacío — listo para grabar.</p>
      </section>

      {/* #faq */}
      <section id="faq" className="section faq" aria-label="Preguntas frecuentes">
        <p className="section__kicker">Preguntas frecuentes</p>
        <h2 className="section__h2" style={{ fontSize: 28 }}>
          Sin letra chica.
        </h2>
        <div>
          {FAQS.map((f, idx) => (
            <div key={idx} className={`faq__item ${faqOpen === idx ? "faq__item--open" : ""}`}>
              <button className="faq__btn" onClick={() => setFaqOpen(faqOpen === idx ? null : idx)} aria-expanded={faqOpen === idx}>
                <span className="faq__q">{f.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq__panel" aria-hidden={faqOpen !== idx}>
                <p className="faq__a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* #contacto */}
      <section id="contacto" className="section contacto" aria-label="Contacto">
        <div className="contacto__grid">
          <div className="contacto__left">
            <p className="section__kicker">Contacto</p>
            <h2 className="contacto__h2">Hablemos de tu próximo trimestre.</h2>
            <a href="tel:+56228403344" className="contacto__tel">
              +56 2 2840 3344
            </a>
            <p className="contacto__email">
              <a href="mailto:hola@pulso.cl">hola@pulso.cl</a> · Las Condes, Santiago
            </p>
            <p className="contacto__horario">Lun–Vie 9:00–18:30 · Respuesta en 24h hábiles.</p>
            <p className="contacto__micro">Respondemos personalmente. Sin call centers.</p>
            <div className="contacto__links">
              <a href="mailto:hola@pulso.cl" className="contacto__link">
                hola@pulso.cl
              </a>
              <a href="https://wa.me/56228403344" target="_blank" rel="noopener noreferrer" className="contacto__link">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contacto__right">
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form__field">
                <label className="form__label" htmlFor="pulso-nombre">
                  Nombre*
                </label>
                <input
                  id="pulso-nombre"
                  className="form__input"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
                {errors.nombre ? <span className="form__error">{errors.nombre}</span> : null}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="pulso-empresa">
                  Empresa*
                </label>
                <input
                  id="pulso-empresa"
                  className="form__input"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  placeholder="Nombre de tu empresa"
                  autoComplete="organization"
                />
                {errors.empresa ? <span className="form__error">{errors.empresa}</span> : null}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="pulso-email">
                  Email*
                </label>
                <input
                  id="pulso-email"
                  type="email"
                  className="form__input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@empresa.cl"
                  autoComplete="email"
                />
                {errors.email ? <span className="form__error">{errors.email}</span> : null}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="pulso-telefono">
                  Teléfono
                </label>
                <input
                  id="pulso-telefono"
                  type="tel"
                  className="form__input"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  placeholder="+56 9 1234 5678"
                  autoComplete="tel"
                />
                {errors.telefono ? <span className="form__error">{errors.telefono}</span> : null}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="pulso-servicio">
                  Servicio interés
                </label>
                <select
                  id="pulso-servicio"
                  className="form__select"
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Diagnóstico">Diagnóstico</option>
                  <option value="Plan integral">Plan integral</option>
                  <option value="Pauta">Pauta</option>
                  <option value="Contenido">Contenido</option>
                  <option value="SEO">SEO</option>
                  <option value="Analítica">Analítica</option>
                </select>
                {errors.servicio ? <span className="form__error">{errors.servicio}</span> : null}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="pulso-presupuesto">
                  Presupuesto mensual
                </label>
                <select
                  id="pulso-presupuesto"
                  className="form__select"
                  value={form.presupuesto}
                  onChange={(e) => setForm({ ...form, presupuesto: e.target.value })}
                >
                  <option value="">Selecciona un rango</option>
                  <option value="$300-600k">$300-600k</option>
                  <option value="$600k-1MM">$600k-1MM</option>
                  <option value="$1MM-2MM">$1MM-2MM</option>
                  <option value="+$2MM">+$2MM</option>
                </select>
                {errors.presupuesto ? <span className="form__error">{errors.presupuesto}</span> : null}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="pulso-mensaje">
                  Mensaje
                </label>
                <textarea
                  id="pulso-mensaje"
                  className="form__textarea"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntanos tu meta del trimestre y qué has probado"
                />
                {errors.mensaje ? <span className="form__error">{errors.mensaje}</span> : null}
              </div>

              <label className="form__check">
                <input
                  type="checkbox"
                  checked={form.acepto}
                  onChange={(e) => setForm({ ...form, acepto: e.target.checked })}
                />
                <span>Acepto ser contactado por PULSO</span>
              </label>
              {errors.acepto ? <span className="form__error">{errors.acepto}</span> : null}

              <button type="submit" className="form__submit" disabled={loading}>
                {loading ? <span className="form__spinner" aria-hidden="true" /> : null}
                {loading ? "Enviando…" : "Solicitar propuesta"}
              </button>

              {success ? (
                <div className="form__success" role="status">
                  Gracias — te escribimos en 24h hábiles. Revisa tu correo (y spam).
                </div>
              ) : null}

              <div className="form__actions-alt">
                <a href="mailto:hola@pulso.cl" className="contacto__link">
                  Enviar por email
                </a>
                <a href="https://wa.me/56228403344" target="_blank" rel="noopener noreferrer" className="contacto__link">
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 PULSO SpA · RUT 76.xxx.xxx-x · Las Condes, Santiago · SII · Privacidad · Términos</footer>

      <div className="sticky-cta" aria-label="Acción rápida">
        <a href="tel:+56228403344" className="sticky-cta__tel">
          +56 2 2840 3344
        </a>
        <a href="#contacto" className="sticky-cta__btn">
          Solicitar propuesta
        </a>
      </div>
    </>
  );
}
