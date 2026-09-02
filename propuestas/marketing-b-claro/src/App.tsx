import { useEffect, useState } from "react";

function MediaTile({
  filename,
  alt,
  className,
  style,
}: {
  filename: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="media-falta" data-falta={filename}>
        Falta — {filename}
      </div>
    );
  }
  return (
    <img
      src={`/media/${filename}`}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setErr(true)}
    />
  );
}

export function App() {
  const [heroError, setHeroError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    canal: "",
    inversion: "",
    url: "",
    mensaje: "",
    acepta: false,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (heroError) console.warn("[PULSO] Falta media: pulso-hero-16x9.png — deja placeholder media-falta");
  }, [heroError]);
  useEffect(() => {
    if (videoError) console.warn("[PULSO] Video no disponible: pulso-hero-loop.mp4");
  }, [videoError]);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (formData.nombre.trim().length < 3) e.nombre = "Nombre debe tener al menos 3 caracteres.";
    const waDigits = formData.whatsapp.replace(/\D/g, "");
    // whatsapp 9 dígitos +56 -> total 11 con 56, or 9 digits local
    const localDigits = waDigits.startsWith("56") ? waDigits.slice(2) : waDigits;
    if (localDigits.length !== 9 || !/^\d{9}$/.test(localDigits)) e.whatsapp = "WhatsApp debe tener 9 dígitos (+56 9 xxxx xxxx).";
    if (!formData.canal) e.canal = "Selecciona dónde pauteas.";
    if (!formData.inversion) e.inversion = "Selecciona inversión mensual.";
    if (!formData.acepta) e.acepta = "Debes aceptar el contacto por WhatsApp.";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Email no válido.";
    if (formData.url && formData.url.trim() && !/^https?:\/\/.+\..+/.test(formData.url.trim())) e.url = "URL debe comenzar con https://";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    setFormErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setSuccess(false);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      const payload = { ...formData, fecha: new Date().toISOString() };
      try {
        localStorage.setItem("pulso-contacto", JSON.stringify(payload));
      } catch {
        /* ignore */
      }
      const waText = `Hola PULSO, soy ${formData.nombre} — pauta ${formData.canal} inversión ${formData.inversion}`;
      const waUrl = `https://wa.me/56938415570?text=${encodeURIComponent(waText)}`;
      const mailto = `mailto:hola@pulso.cl?subject=${encodeURIComponent("Auditoría PULSO — " + formData.nombre)}&body=${encodeURIComponent(
        `Nombre: ${formData.nombre}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}\nCanal: ${formData.canal}\nInversión: ${formData.inversion}\nURL: ${formData.url}\nMensaje: ${formData.mensaje}\n`,
      )}`;
      // abrir mailto y wa.me sin romper UX: solo si success, user puede clickear; auto attempt en new tab
      window.open(waUrl, "_blank");
      window.location.href = mailto;
    }, 800);
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__brand">
            <a href="#indice-pulso" className="logo" aria-label="PULSO inicio">
              PULSO<span className="logo__dot" aria-hidden="true" />
            </a>
          </div>

          <nav className="header__nav" aria-label="Navegación principal">
            <a href="#indice-pulso">Índice</a>
            <a href="#servicios-pauta">Servicios</a>
            <a href="#planes-pulso">Planes</a>
            <a href="#casos-cifras">Casos</a>
            <a href="#metodo-pulso">Método</a>
          </nav>

          <button className="hamburger" aria-label="Abrir menú" aria-expanded="false" type="button">
            <span />
            <span />
            <span style={{ width: "70%" }} />
          </button>

          <div className="header__actions">
            <a href="tel:+56938415570" className="phone">
              +56 9 3841 5570
            </a>
            <a href="#contacto-pulso" className="btn-auditar">
              Auditar pauta
            </a>
          </div>
        </div>
      </header>

      <section id="indice-pulso" className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="kicker">AGENCIA DE PAUTA · SANTIAGO — RM</p>
            <h1>Pauta que rinde. Métricas claras. Sin humo.</h1>
            <p className="hero__sub">
              Gestionamos Google Ads, Meta y SEO con reporte semanal honesto. Sin contratos amarrados. Pagas pauta aparte, nosotros
              cobramos gestión.
            </p>
            <div className="hero__ctas">
              <a href="#contacto-pulso" className="btn-primary">
                Auditar mi pauta gratis
              </a>
              <a href="#planes-pulso" className="btn-secondary">
                Ver planes desde $290.000
              </a>
            </div>
            <p className="hero__micro">Respuesta en 24h hábiles · Valores referenciales; se confirma tras auditoría</p>
            <p className="hero__banda">Pauta directa en tus cuentas · Reporte Lunes 9:00 · Pausa/cancela con 7 días</p>
          </div>

          <div className="hero__right">
            <nav className="indice" aria-label="Índice de servicios">
              <a href="#servicios-pauta" className="indice__row">
                <span className="indice__num">01</span>
                <span className="indice__label">Google Ads</span>
              </a>
              <a href="#servicios-pauta" className="indice__row">
                <span className="indice__num">02</span>
                <span className="indice__label">Meta Ads</span>
              </a>
              <a href="#servicios-pauta" className="indice__row">
                <span className="indice__num">03</span>
                <span className="indice__label">SEO Técnico</span>
              </a>
              <a href="#servicios-pauta" className="indice__row">
                <span className="indice__num">04</span>
                <span className="indice__label">Embudo &amp; Landing</span>
              </a>
              <a href="#servicios-pauta" className="indice__row">
                <span className="indice__num">05</span>
                <span className="indice__label">Reporte &amp; Métricas</span>
              </a>
            </nav>

            <div className="hero__media" aria-label="Mesa de pauta PULSO">
              {!heroError ? (
                <>
                  {!videoError && (
                    <video
                      src="/media/pulso-hero-loop.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-hidden="true"
                      className={videoLoaded ? "is-loaded" : undefined}
                      onLoadedData={() => setVideoLoaded(true)}
                      onError={() => setVideoError(true)}
                    />
                  )}
                  <picture>
                    <source media="(max-width: 720px)" srcSet="/media/pulso-hero-9x16.png" />
                    <img
                      src="/media/pulso-hero-16x9.png"
                      alt="Mesa de pauta en papel con pliegos recortados y regla de acero — estudio PULSO"
                      loading="eager"
                      decoding="async"
                      onError={() => setHeroError(true)}
                      style={videoLoaded ? { opacity: 0, position: "absolute", inset: "0" } : undefined}
                    />
                  </picture>
                </>
              ) : (
                <div className="media-falta" data-falta="pulso-hero-16x9.png">
                  Falta hero 16:9 — pulso-hero-16x9.png
                </div>
              )}
            </div>
            <p className="hero__caption">Mesa de pauta PULSO — edición en papel antes de subir a Ads.</p>
          </div>
        </div>
      </section>

      {/* #servicios-pauta */}
      <section id="servicios-pauta" className="sec-servicios">
        <div className="sec-inner">
          <p className="kicker" style={{ color: "var(--accent-2)" }}>
            SERVICIOS DE PAUTA · DE LA CUENTA A LA VENTA
          </p>
          <h2>Lo que hacemos todos los días.</h2>
          <p className="sec-bajada">
            No somos todo-logía. Solo pauta que se mide en ventas. Cada servicio trae reporte, no storytelling.
          </p>

          <div className="servicios-lista">
            {/* 01 */}
            <div className="serv-row">
              <div className="serv-row__num">01</div>
              <div className="serv-row__content">
                <h3>Google Ads (Search / PMax / YouTube)</h3>
                <p>Desde búsqueda exacta a PMax feed. Negativos semanales, extensiones y tracking.</p>
                <p className="serv-row__meta">CPC objetivo · CTR · Conversión</p>
                <p className="serv-row__precio">
                  desde $290.000/mes gestión <span>+ pauta cliente</span>
                </p>
              </div>
              <div className="serv-row__tile" aria-hidden="true">
                <MediaTile filename="pulso-tile-01-1x1.png" alt="Detalle pliego Search a lápiz — PULSO" />
              </div>
            </div>

            {/* 02 */}
            <div className="serv-row">
              <div className="serv-row__num">02</div>
              <div className="serv-row__content">
                <h3>Meta Ads (FB/IG)</h3>
                <p>Creativo + copy + audiencias. Test A/B permanente, no receta única.</p>
                <p className="serv-row__meta">CPM · CTR · CPA</p>
                <p className="serv-row__precio">
                  desde $290.000/mes gestión <span>+ pauta cliente</span>
                </p>
              </div>
              <div className="serv-row__tile" aria-hidden="true">
                <MediaTile filename="pulso-tile-02-1x1.png" alt="Pliego Meta creativos 2x2 — PULSO" />
              </div>
            </div>

            {/* 03 */}
            <div className="serv-row">
              <div className="serv-row__num">03</div>
              <div className="serv-row__content">
                <h3>SEO Técnico + Contenido</h3>
                <p>Screaming Frog, Search Console, sitemap. Contenido que rankea, no blog relleno.</p>
                <p className="serv-row__meta">Impresiones · CTR orgánico · Posición media</p>
                <p className="serv-row__precio">
                  desde $290.000/mes gestión <span>+ pauta cliente</span>
                </p>
              </div>
              <div className="serv-row__spacer" aria-hidden="true" />
            </div>

            {/* 04 */}
            <div className="serv-row">
              <div className="serv-row__num">04</div>
              <div className="serv-row__content">
                <h3>Embudo &amp; Landing (1 página)</h3>
                <p>Landing 1 objetivo, formulario corto, gracias + pixel. Sin multipágina que diluye.</p>
                <p className="serv-row__precio">
                  desde $290.000/mes gestión <span>+ pauta cliente</span>
                </p>
              </div>
              <div className="serv-row__spacer" aria-hidden="true" />
            </div>

            {/* 05 */}
            <div className="serv-row">
              <div className="serv-row__num">05</div>
              <div className="serv-row__content">
                <h3>Reporte &amp; Métricas</h3>
                <p>Lunes 9:00: gasto, ventas, ROAS, siguiente test. Acceso total a cuentas, sin retención.</p>
                <p className="serv-row__precio">
                  desde $290.000/mes gestión <span>+ pauta cliente</span>
                </p>
              </div>
              <div className="serv-row__spacer" aria-hidden="true" />
            </div>
          </div>

          <p className="serv-nota">Gestión mensual sin amarre. Pauta se paga directo a Google/Meta. Nosotros solo gestión + reporte.</p>
        </div>
      </section>

      {/* #planes-pulso */}
      <section id="planes-pulso" className="sec-planes">
        <div className="sec-inner">
          <p className="kicker">PLANES MENSUALES · SIN CONTRATO AMARRADO</p>
          <h2>Planes claros. Pauta aparte. Sin letra chica.</h2>
          <p className="sec-bajada">Elige por inversión mensual en pauta. Todos incluyen reporte Lunes 9:00.</p>

          <div className="planes-header" aria-hidden="true">
            <span>Plan</span>
            <span>Para quién</span>
            <span>Gestión/mes</span>
            <span>Pauta sugerida</span>
          </div>

          <div className="planes-grid">
            {/* Base */}
            <article className="plan-card">
              <h3>Plan Base</h3>
              <p className="plan-precio">$290.000/mes</p>
              <p className="plan-para">Para pauta $600k–$1,2MM</p>
              <ul>
                <li>1 canal (Google o Meta)</li>
                <li>2 campañas</li>
                <li>6 anuncios/mes</li>
                <li>Reporte Lunes 9:00</li>
                <li>Soporte WhatsApp 24h</li>
              </ul>
              <a href="#contacto-pulso" className="plan-cta plan-cta--ghost">
                Elegir Base →
              </a>
            </article>

            {/* Growth destacado primero en móvil */}
            <article className="plan-card plan-card--featured">
              <div className="plan-badge">Más pedido</div>
              <h3>Plan Growth</h3>
              <p className="plan-precio">$590.000/mes</p>
              <p className="plan-para">Para pauta $1,2–$3MM</p>
              <ul>
                <li>2 canales + SEO técnico básico</li>
                <li>4 campañas</li>
                <li>12 anuncios/mes</li>
                <li>Landing 1 pág incluida</li>
                <li>Test A/B mensual</li>
              </ul>
              <a href="#contacto-pulso" className="plan-cta plan-cta--solid">
                Elegir Growth →
              </a>
            </article>

            {/* Scale */}
            <article className="plan-card">
              <h3>Plan Scale</h3>
              <p className="plan-precio">$990.000/mes</p>
              <p className="plan-para">Para pauta $3MM+</p>
              <ul>
                <li>2 canales + SEO contenido</li>
                <li>6 campañas</li>
                <li>20 anuncios/mes</li>
                <li>2 landings</li>
                <li>Reunión quincenal + Slack</li>
              </ul>
              <a href="#contacto-pulso" className="plan-cta plan-cta--ghost">
                Elegir Scale →
              </a>
            </article>
          </div>

          <div className="plan-auditoria">
            <span className="plan-auditoria__label">Auditoría express (una vez) — $150.000</span>
            <span className="plan-auditoria__desc">Revisión de cuenta + video 20min + plan 30 días. Se descuenta si contratas plan.</span>
          </div>

          <p className="planes-nota">
            Valores con IVA, referenciales. Pauta se paga aparte directo a Google/Meta. Sin permanencia: pausa con 7 días de aviso. Se
            confirma tras auditoría.
          </p>
          <p className="planes-micro">¿Inversión mayor? Escríbenos — armamos plan a medida por WhatsApp.</p>
        </div>
      </section>

      {/* #casos-cifras */}
      <section id="casos-cifras" className="sec-casos">
        <div className="sec-inner">
          <p className="kicker" style={{ color: "var(--accent-2)" }}>
            CASOS CON CIFRAS · NO LOGOS INVENTADOS
          </p>
          <h2>Lo que baja y lo que sube, con números.</h2>
          <p className="sec-bajada">Sin nombres de clientes. Solo vertical, inversión y resultado. Todo verificable en Ads.</p>

          <div className="casos-grid">
            <article className="caso-card">
              <p className="caso-vert">Ecommerce hogar — RM</p>
              <p className="caso-metrica">ROAS 4,2×</p>
              <p className="caso-sec">CPA $8.900 → $5.400 (-39%)</p>
              <p className="caso-txt">PMax + Search exacta, feed optimizado, negativas semanales. 90 días.</p>
              <div className="caso-tile-mini">
                <MediaTile filename="pulso-tile-03-1x1.png" alt="CPC -18% proof manuscrito — PULSO" />
              </div>
            </article>
            <article className="caso-card">
              <p className="caso-vert">Servicios — Viña</p>
              <p className="caso-metrica">Leads 38 → 94/mes (+147%)</p>
              <p className="caso-sec">CPL $12.300 → $6.100</p>
              <p className="caso-txt">Meta + Landing 1 objetivo, formulario corto, test A/B semanal. 60 días.</p>
            </article>
            <article className="caso-card">
              <p className="caso-vert">Retail — Concepción</p>
              <p className="caso-metrica">CTR 1,1% → 2,4%</p>
              <p className="caso-sec">Impresiones orgánicas +82% en 4 meses (SEO técnico)</p>
              <p className="caso-txt">Screaming Frog + sitemap + contenido que rankea. Sin blog relleno.</p>
            </article>
          </div>

          <div className="casos-prueba">+47 cuentas activas · 4,7/5 (89 auditorías) · 2019—2026 · 1 estudio, 3 personas</div>

          <div className="casos-proof-media">
            <MediaTile filename="pulso-proof-4x3.png" alt="Pliegos pauta con regla acero — proof cenital PULSO" />
          </div>
        </div>
      </section>

      {/* #metodo-pulso */}
      <section id="metodo-pulso" className="sec-metodo">
        <div className="sec-inner">
          <div className="metodo-grid">
            <div className="metodo-left">
              <p className="kicker" style={{ color: "var(--accent-2)" }}>
                MÉTODO PULSO · 3 PASOS
              </p>
              <h2>Auditar, lanzar, optimizar. Cada lunes.</h2>
              <p className="sec-bajada" style={{ marginBottom: 22 }}>
                Sin humo. Mismo ritual cada semana, en tu cuenta.
              </p>

              <div className="metodo-pasos">
                <div className="paso">
                  <span className="paso-num">01</span>
                  <div>
                    <h3>Semana 1 — Auditoría &amp; Plan</h3>
                    <p>Revisamos cuenta, pixel, conversiones, feed. Plan de 30 días con test.</p>
                    <p className="paso-entrega">Entrega: Video 20min + sheet</p>
                  </div>
                </div>
                <div className="paso">
                  <span className="paso-num">02</span>
                  <div>
                    <h3>Semana 2 — Lanzamiento &amp; Pauta</h3>
                    <p>Campañas en tu cuenta, anuncios nuevos, tracking OK. No tocamos tu dominio sin permiso.</p>
                  </div>
                </div>
                <div className="paso">
                  <span className="paso-num">03</span>
                  <div>
                    <h3>Semanas 3–4 — Optimización &amp; Reporte</h3>
                    <p>Negativas, pujas, audiencias. Lunes 9:00: reporte de 1 página con siguiente test.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="metodo-right">
              <div className="metodo-interior">
                <MediaTile filename="pulso-interior-16x9.png" alt="Estudio luminoso vacío — mesa clara PULSO" />
              </div>
              <div className="metodo-tile-vert">
                <MediaTile filename="pulso-tile-04-3x4.png" alt="Pila de pliegos pauta vertical — PULSO" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* #preguntas-pauta */}
      <section id="preguntas-pauta" className="sec-faq">
        <div className="sec-inner">
          <p className="kicker" style={{ color: "var(--accent-2)" }}>
            PREGUNTAS DE PAUTA
          </p>
          <h2>Dudas directas, respuestas directas.</h2>
          <div className="faq-grid">
            {[
              {
                q: "¿La pauta la pago a ustedes?",
                a: "No. Pagas directo a Google/Meta con tu tarjeta. Nosotros solo gestión. Ves gasto en tu cuenta.",
              },
              {
                q: "¿Hay contrato amarrado?",
                a: "No. Mes a mes. Pausa o cancela avisando 7 días antes del cobro.",
              },
              {
                q: "¿Hacen creativos?",
                a: "Sí, 6–20 anuncios/mes según plan. Si tienes diseñador, trabajamos con él. Sin costo extra.",
              },
              {
                q: "¿En cuánto veo resultados?",
                a: "Pauta: 14–21 días para estabilizar. SEO: 60–90 días. Reporte semanal, sin promesa mágica.",
              },
              {
                q: "¿Qué acceso necesitan?",
                a: "Acceso a Ads y Analytics como administrador. Nunca pedimos clave bancaria.",
              },
            ].map((item, i) => (
              <div key={i} className={`faq-item ${faqOpen === i ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={faqOpen === i}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {faqOpen === i ? "—" : "+"}
                  </span>
                </button>
                <div id={`faq-a-${i}`} className="faq-a" hidden={faqOpen !== i}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* #contacto-pulso */}
      <section id="contacto-pulso" className="sec-contacto">
        <div className="sec-inner contacto-grid">
          <div className="contacto-form-col">
            <p className="kicker">CONTACTO PULSO · AUDITORÍA GRATIS</p>
            <h2>Auditemos tu pauta. Te respondemos en 24h.</h2>
            <p className="sec-bajada">
              Deja tu cuenta y vemos gasto, CTR y fugas. Sin call de venta eterna. Si no hay oportunidad, te lo decimos.
            </p>

            {success ? (
              <div className="success-box" role="status" aria-live="polite">
                <p>¡Recibido! Te escribimos por WhatsApp en 24h hábiles. Si no ves mensaje, escribe al +56 9 3841 5570.</p>
                <a href="https://wa.me/56938415570" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 12 }}>
                  Abrir WhatsApp
                </a>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="f-nombre">Nombre*</label>
                  <input
                    id="f-nombre"
                    type="text"
                    placeholder="Nombre y apellido"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    aria-invalid={!!formErrors.nombre}
                    aria-describedby={formErrors.nombre ? "err-nombre" : undefined}
                  />
                  {formErrors.nombre && (
                    <span id="err-nombre" className="field-error">
                      {formErrors.nombre}
                    </span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-wa">WhatsApp*</label>
                  <input
                    id="f-wa"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    aria-invalid={!!formErrors.whatsapp}
                    aria-describedby={formErrors.whatsapp ? "err-wa" : undefined}
                  />
                  {formErrors.whatsapp && (
                    <span id="err-wa" className="field-error">
                      {formErrors.whatsapp}
                    </span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    type="email"
                    placeholder="correo@ejemplo.cl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? "err-email" : undefined}
                  />
                  {formErrors.email && (
                    <span id="err-email" className="field-error">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-canal">¿Dónde pauteas hoy?*</label>
                  <select
                    id="f-canal"
                    value={formData.canal}
                    onChange={(e) => setFormData({ ...formData, canal: e.target.value })}
                    aria-invalid={!!formErrors.canal}
                    aria-describedby={formErrors.canal ? "err-canal" : undefined}
                  >
                    <option value="">Selecciona</option>
                    <option>Google Ads</option>
                    <option>Meta Ads</option>
                    <option>Ambos</option>
                    <option>Aún no pauteo</option>
                  </select>
                  {formErrors.canal && (
                    <span id="err-canal" className="field-error">
                      {formErrors.canal}
                    </span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-inv">Inversión mensual en pauta*</label>
                  <select
                    id="f-inv"
                    value={formData.inversion}
                    onChange={(e) => setFormData({ ...formData, inversion: e.target.value })}
                    aria-invalid={!!formErrors.inversion}
                    aria-describedby={formErrors.inversion ? "err-inv" : undefined}
                  >
                    <option value="">Selecciona</option>
                    <option>&lt;$600k</option>
                    <option>$600k–$1,2MM</option>
                    <option>$1,2–$3MM</option>
                    <option>&gt;$3MM</option>
                  </select>
                  {formErrors.inversion && (
                    <span id="err-inv" className="field-error">
                      {formErrors.inversion}
                    </span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-url">URL de tu sitio / cuenta</label>
                  <input
                    id="f-url"
                    type="url"
                    placeholder="https://..."
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    aria-invalid={!!formErrors.url}
                    aria-describedby={formErrors.url ? "err-url" : undefined}
                  />
                  {formErrors.url && (
                    <span id="err-url" className="field-error">
                      {formErrors.url}
                    </span>
                  )}
                </div>

                <div className="field field--full">
                  <label htmlFor="f-msg">Mensaje</label>
                  <textarea
                    id="f-msg"
                    rows={3}
                    placeholder="¿Qué vendes? ¿Qué no rinde?"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  />
                </div>

                <div className="field field--full">
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={formData.acepta}
                      onChange={(e) => setFormData({ ...formData, acepta: e.target.checked })}
                      aria-invalid={!!formErrors.acepta}
                    />
                    <span>Acepto que me contacten por WhatsApp para enviar auditoría.</span>
                  </label>
                  {formErrors.acepta && <span className="field-error">{formErrors.acepta}</span>}
                </div>

                <button type="submit" className="btn-primary btn-full" disabled={submitting}>
                  {submitting ? "Enviando…" : "Enviar auditoría →"}
                </button>
              </form>
            )}
            <p className="contacto-nota">Valores referenciales con IVA; se confirman tras auditoría.</p>
          </div>

          <aside className="contacto-panel" aria-label="Información de contacto">
            <div className="panel-card">
              <h3>¿Prefieres hablar?</h3>
              <a href="tel:+56938415570" className="panel-phone">
                +56 9 3841 5570
              </a>
              <p className="panel-sub">WhatsApp directo · Lun–Vie 9:00–18:30</p>
              <a href="mailto:hola@pulso.cl" className="panel-mail">
                hola@pulso.cl
              </a>
              <p className="panel-dir">Av. Providencia 1208, of. 603 — Santiago</p>
              <a href="https://maps.google.com/?q=Av.+Providencia+1208+Santiago" target="_blank" rel="noreferrer" className="panel-maps">
                Ver en Maps →
              </a>
            </div>

            <div className="panel-trace">
              <p className="panel-trace__kicker">TRAZABILIDAD PULSO</p>
              <div className="trace-metrics">
                <div>
                  <strong>47</strong>
                  <span>cuentas</span>
                </div>
                <div>
                  <strong>2019</strong>
                  <span>desde</span>
                </div>
                <div>
                  <strong>7 días</strong>
                  <span>aviso pausa</span>
                </div>
              </div>
              <p className="panel-trace__txt">Acceso total a tus cuentas. Sin retención, sin letra chica.</p>
            </div>

            <div className="panel-proof-mini">
              <MediaTile filename="pulso-proof-4x3.png" alt="Proof cenital PULSO mini" />
            </div>
          </aside>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__logo">PULSO</p>
            <p className="footer__sub">Agencia de pauta · Santiago</p>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            <a href="#servicios-pauta">Servicios</a>
            <a href="#planes-pulso">Planes</a>
            <a href="#casos-cifras">Casos</a>
            <a href="#metodo-pulso">Método</a>
          </nav>
          <p className="footer__legal">© 2026 PULSO · RUT 77.123.456-7 · Valores referenciales · Datos protegidos.</p>
        </div>
      </footer>

      <div className={`sticky-bottom ${stickyVisible ? "is-visible" : ""}`} aria-label="Contacto rápido">
        <a href="tel:+56938415570" className="sticky-bottom__phone" aria-label="Llamar +56 9 3841 5570">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.33.4 2.64.83 3.9a2 2 0 0 1-.57 2L8 11a16 16 0 0 0 6 6l1.38-1.38a2 2 0 0 1 2-.57c1.26.43 2.57.71 3.9.83A2 2 0 0 1 22 16.92z" />
          </svg>
          +56 9 3841 5570
        </a>
        <a href="#contacto-pulso" className="sticky-bottom__cta">
          Auditar pauta
        </a>
      </div>
    </>
  );
}
