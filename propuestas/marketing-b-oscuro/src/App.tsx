import { useEffect, useState } from 'react';

const HERO_DESKTOP = '/media/brujula-hero-16x9.png';
const HERO_MOBILE = '/media/brujula-hero-9x16.png';
const HERO_VIDEO = '/media/brujula-hero-loop.mp4';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="header-logo" aria-label="BRÚJULA — inicio">
          BRÚJULA<span className="header-logo-dot" aria-hidden="true" />
        </a>
        <nav className="header-nav" aria-label="Principal">
          <a href="#senal-brujula">Señal</a>
          <a href="#capacidad-brujula">Capacidad</a>
          <a href="#retainer-brujula">Retainer</a>
          <a href="#casos-brujula">Casos</a>
          <a href="#sprint-brujula">Sprint</a>
        </nav>
        <div className="header-right">
          <a href="tel:+56955128840" className="header-tel">
            <span>+56 9 5512 8840</span>
            <span className="header-tel-icon" aria-hidden="true">☎</span>
          </a>
          <a href="#brief-brujula" className="header-cta">
            Auditar hoy
          </a>
          <button className="header-burger" aria-label="Abrir menú" aria-expanded="false">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroMedia() {
  const [imgError, setImgError] = useState(false);
  const [videoExists, setVideoExists] = useState<boolean | null>(null);

  useEffect(() => {
    const missing: string[] = [];
    fetch(HERO_VIDEO, { method: 'HEAD' })
      .then((r) => setVideoExists(r.ok))
      .catch(() => setVideoExists(false));

    if (missing.length) {
      console.warn('[BRUJULA] Media faltante:', missing.join(', '));
    }
  }, []);

  useEffect(() => {
    if (imgError) {
      console.warn('[BRUJULA] Media faltante: brujula-hero-16x9.png');
    }
  }, [imgError]);

  if (imgError) {
    return (
      <div
        className="media-falta"
        data-falta="brujula-hero-16x9.png"
        style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid var(--linea)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--muted)',
          font: '11px Instrument Sans, sans-serif',
          background: 'var(--bg-2)',
        }}
      >
        Falta: brujula-hero-16x9.png
      </div>
    );
  }

  if (videoExists === true) {
    return (
      <>
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_DESKTOP}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </>
    );
  }

  return (
    <picture>
      <source media="(max-width:640px)" srcSet={HERO_MOBILE} />
      <img
        className="hero-media"
        src={HERO_DESKTOP}
        alt="Sala de pauta nocturna BRÚJULA — mesa negra con planchas sobre lightbox ámbar"
        onError={() => setImgError(true)}
      />
    </picture>
  );
}

function Hero() {
  return (
    <section id="senal-brujula" className="hero" aria-label="Señal BRÚJULA">
      <HeroMedia />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">AGENCIA DE PAUTA NOCTURNA · SANTIAGO — RM</p>
          <h1 className="hero-h1">Pauta que guía ventas. Sin humo.</h1>
          <p className="hero-bajada">
            Gestionamos Google Ads, Meta y SEO con reporte Lunes 9:00. Sin amarre. Pagas pauta aparte,
            nosotros cobramos gestión. De noche se edita, de día se mide.
          </p>
          <div className="hero-ctas">
            <a href="#brief-brujula" className="btn-primary">
              Auditar mi pauta hoy
            </a>
            <a href="#retainer-brujula" className="btn-secondary">
              Ver retainer desde $290.000
            </a>
          </div>
          <p className="hero-micro">Respuesta en 24h hábiles · Valores referenciales; se confirma tras auditoría nocturna</p>
          <div className="hero-banda">Pauta directa en tus cuentas · Reporte Lunes 9:00 · Pausa/cancela con 7 días</div>
        </div>
      </div>
    </section>
  );
}

/* ── helpers ── */
function TileThumb({ src, alt, filename }: { src: string; alt: string; filename: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div
        className="media-falta tile-falta"
        data-falta={filename}
        style={{
          width: 80,
          height: 80,
          border: '1px solid var(--linea)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--muted)',
          font: '11px Instrument Sans, sans-serif',
          background: 'var(--bg)',
          flexShrink: 0,
        }}
      >
        Falta: {filename}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={80}
      height={80}
      className="cap-tile-img"
      onError={() => setErr(true)}
      loading="lazy"
    />
  );
}

/* ── CAPACIDAD ── */
function Capacidad() {
  useEffect(() => {
    const ids = ['brujula-tile-01-1x1.png', 'brujula-tile-02-3x4.png', 'brujula-tile-03-1x1.png'];
    ids.forEach((f) => {
      fetch(`/media/${f}`, { method: 'HEAD' })
        .then((r) => { if (!r.ok) console.warn(`[BRUJULA] Media faltante: ${f}`); })
        .catch(() => console.warn(`[BRUJULA] Media faltante: ${f}`));
    });
  }, []);
  return (
    <section id="capacidad-brujula" className="capacidad">
      <div className="cap-inner">
        <div className="cap-head">
          <p className="cap-kicker">CAPACIDAD REAL · 4 CANALES, NO TODO-LOGÍA</p>
          <h2 className="cap-h2">Lo que hacemos de noche, se mide de día.</h2>
          <p className="cap-bajada">Solo pauta que se mide en ventas. Cada canal trae reporte, no storytelling. Si no lo medimos, no lo vendemos.</p>
        </div>
        <div className="cap-rows">
          {/* 01 Google */}
          <div className="cap-row">
            <TileThumb src="/media/brujula-tile-01-1x1.png" alt="Google Ads detalle plancha" filename="brujula-tile-01-1x1.png" />
            <div className="cap-row-body">
              <div className="cap-row-top">
                <h3 className="cap-row-title">01 — Google Ads (Search / PMax / YouTube)</h3>
                <span className="cap-precio">desde $290.000/mes gestión</span>
              </div>
              <p className="cap-desc">Desde exacta a PMax feed. Negativos semanales, extensiones y tracking server-side.</p>
              <p className="cap-bullets">CPC objetivo · CTR · Conversión</p>
              <p className="cap-micro">+ pauta cliente</p>
            </div>
          </div>
          {/* 02 Meta */}
          <div className="cap-row">
            <TileThumb src="/media/brujula-tile-02-3x4.png" alt="Meta Ads afiches escala" filename="brujula-tile-02-3x4.png" />
            <div className="cap-row-body">
              <div className="cap-row-top">
                <h3 className="cap-row-title">02 — Meta Ads (FB/IG)</h3>
              </div>
              <p className="cap-desc">Creativo + copy + audiencias frías/tibias. Test A/B permanente, no receta única.</p>
              <p className="cap-bullets">CPM · CTR · CPA</p>
            </div>
          </div>
          {/* 03 SEO */}
          <div className="cap-row">
            <TileThumb src="/media/brujula-tile-03-1x1.png" alt="SEO técnico grilla" filename="brujula-tile-03-1x1.png" />
            <div className="cap-row-body">
              <div className="cap-row-top">
                <h3 className="cap-row-title">03 — SEO Técnico + Contenido</h3>
              </div>
              <p className="cap-desc">Screaming Frog, Search Console, sitemap. Contenido que rankea, no blog relleno.</p>
              <p className="cap-bullets">Impresiones · CTR orgánico · Posición media</p>
            </div>
          </div>
          {/* 04 Embudo */}
          <div className="cap-row">
            <div
              className="media-falta tile-falta"
              data-falta="sin-tile-embudo"
              style={{
                width: 80,
                height: 80,
                border: '1px solid var(--linea)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--muted)',
                font: '11px Instrument Sans, sans-serif',
                background: 'var(--bg)',
                flexShrink: 0,
              }}
            >
              04
            </div>
            <div className="cap-row-body">
              <div className="cap-row-top">
                <h3 className="cap-row-title">04 — Embudo &amp; Landing (1 página)</h3>
              </div>
              <p className="cap-desc">Landing 1 objetivo, form corto, gracias + pixel. Sin multipágina que diluye. Host en tu dominio.</p>
            </div>
          </div>
        </div>
        <p className="cap-nota">Gestión mensual sin amarre. Pauta se paga directo a Google/Meta. Nosotros solo gestión + reporte Lunes 9:00.</p>
      </div>
    </section>
  );
}

/* ── RETAINER ── */
function Retainer() {
  return (
    <section id="retainer-brujula" className="retainer">
      <div className="ret-inner">
        <div className="ret-head">
          <p className="ret-kicker">RETAINER MENSUAL · SIN CONTRATO AMARRADO</p>
          <h2 className="ret-h2">Retainer claro. Pauta aparte. Sin letra chica.</h2>
          <p className="ret-bajada">Elige por inversión mensual en pauta. Todos incluyen reporte Lunes 9:00 y acceso total.</p>
        </div>
        <div className="ret-grid">
          <div className="ret-card">
            <div className="ret-card-top">
              <h3 className="ret-card-name">Plan Base</h3>
              <p className="ret-card-price">$290.000<span>/mes</span></p>
              <p className="ret-card-sub">Para pauta $600k–$1,2MM</p>
            </div>
            <ul className="ret-bullets">
              <li>1 canal (Google o Meta)</li>
              <li>2 campañas</li>
              <li>6 anuncios/mes</li>
              <li>Reporte Lunes 9:00</li>
              <li>Soporte WhatsApp 24h</li>
            </ul>
            <a href="#brief-brujula" className="ret-cta ghost">Elegir Base →</a>
          </div>

          <div className="ret-card ret-card--featured">
            <div className="ret-featured-tag">Más pedido</div>
            <div className="ret-card-top">
              <h3 className="ret-card-name">Plan Growth</h3>
              <p className="ret-card-price">$590.000<span>/mes</span></p>
              <p className="ret-card-sub">Para pauta $1,2–$3MM</p>
            </div>
            <ul className="ret-bullets">
              <li>2 canales + SEO técnico básico</li>
              <li>4 campañas</li>
              <li>12 anuncios/mes</li>
              <li>Landing 1 pág incluida</li>
              <li>Test A/B mensual</li>
            </ul>
            <a href="#brief-brujula" className="ret-cta solid">Elegir Growth →</a>
          </div>

          <div className="ret-card">
            <div className="ret-card-top">
              <h3 className="ret-card-name">Plan Scale</h3>
              <p className="ret-card-price">$990.000<span>/mes</span></p>
              <p className="ret-card-sub">Para pauta $3MM+</p>
            </div>
            <ul className="ret-bullets">
              <li>2 canales + SEO contenido</li>
              <li>6 campañas</li>
              <li>20 anuncios/mes</li>
              <li>2 landings</li>
              <li>Reunión quincenal + Slack</li>
            </ul>
            <a href="#brief-brujula" className="ret-cta ghost">Elegir Scale →</a>
          </div>
        </div>

        <div className="ret-audit">
          <span className="ret-audit-name">Auditoría express (una vez) — <strong>$150.000</strong></span>
          <span className="ret-audit-desc">Revisión de cuenta + video 20min + plan 30 días. Se descuenta si contratas retainer.</span>
        </div>

        <p className="ret-nota">Valores con IVA, referenciales. Pauta se paga aparte directo a Google/Meta. Sin permanencia: pausa con 7 días de aviso. Se confirma tras auditoría.</p>
        <p className="ret-micromsg">
          ¿Inversión mayor? <a href="https://wa.me/56955128840?text=Hola%20BRUJULA,%20quiero%20auditar%20mi%20pauta" target="_blank" rel="noreferrer">Escríbenos — armamos retainer a medida por WhatsApp.</a>
        </p>
      </div>
    </section>
  );
}

/* ── CASOS ── */
function Casos() {
  const [proofErr, setProofErr] = useState(false);
  useEffect(() => {
    fetch('/media/brujula-proof-4x3.png', { method: 'HEAD' })
      .then((r) => { if (!r.ok) { setProofErr(true); console.warn('[BRUJULA] Media faltante: brujula-proof-4x3.png'); } })
      .catch(() => { setProofErr(true); console.warn('[BRUJULA] Media faltante: brujula-proof-4x3.png'); });
  }, []);
  return (
    <section id="casos-brujula" className="casos">
      <div className="casos-inner">
        <div className="casos-head">
          <p className="casos-kicker">CASOS CON CIFRAS · NO LOGOS INVENTADOS</p>
          <h2 className="casos-h2">Lo que baja y lo que sube, con números.</h2>
          <p className="casos-bajada">Sin nombres de clientes. Solo vertical, inversión y resultado. Todo verificable en tu Ads.</p>
        </div>
        <div className="casos-grid">
          <div className="caso-card">
            <p className="caso-label">Ecommerce hogar — RM</p>
            <p className="caso-metrica">ROAS 4,2×</p>
            <p className="caso-sec">CPA $8.900 → $5.400 (-39%)</p>
            <p className="caso-text">PMax + Search exacta, feed optimizado, negativas semanales. 90 días.</p>
          </div>
          <div className="caso-card">
            <p className="caso-label">Servicios — Viña</p>
            <p className="caso-metrica">Leads 38 → 94/mes (+147%)</p>
            <p className="caso-sec">CPL $12.300 → $6.100</p>
            <p className="caso-text">Search + Meta retarget, copy local y form corto. 60 días.</p>
          </div>
          <div className="caso-card">
            <p className="caso-label">Retail — Concepción</p>
            <p className="caso-metrica">CTR 1,1% → 2,4%</p>
            <p className="caso-sec">Impresiones orgánicas +82% en 4 meses (SEO técnico)</p>
            <p className="caso-text">Screaming Frog + sitemap + contenido que rankea. 120 días.</p>
          </div>
        </div>
        <div className="casos-proof">
          {!proofErr ? (
            <img
              src="/media/brujula-proof-4x3.png"
              alt="Prueba pauta CPC -18% anotación naranja"
              className="casos-proof-img"
              onError={() => setProofErr(true)}
              loading="lazy"
            />
          ) : (
            <div className="media-falta casos-proof-falta" data-falta="brujula-proof-4x3.png">
              Falta: brujula-proof-4x3.png
            </div>
          )}
        </div>
        <div className="casos-trazabilidad">+47 cuentas activas · 4,7/5 (89 auditorías) · 2019—2026 · 1 sala, 3 personas</div>
      </div>
    </section>
  );
}

/* ── SPRINT ── */
function Sprint() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetch('/media/brujula-interior-16x9.png', { method: 'HEAD' })
      .then((r) => { if (!r.ok) { setErr(true); console.warn('[BRUJULA] Media faltante: brujula-interior-16x9.png'); } })
      .catch(() => { setErr(true); console.warn('[BRUJULA] Media faltante: brujula-interior-16x9.png'); });
  }, []);
  return (
    <section id="sprint-brujula" className="sprint">
      <div className="sprint-inner">
        <div className="sprint-left">
          <p className="sprint-kicker">FORMA DE TRABAJO · SPRINT BRÚJULA</p>
          <h2 className="sprint-h2">Auditar, lanzar, optimizar. Cada lunes.</h2>
          <p className="sprint-bajada">Sin humo. Mismo ritual cada semana, en tu cuenta. De noche se corrige.</p>
        </div>
        <div className="sprint-right">
          <div className="sprint-steps">
            <div className="sprint-step">
              <span className="sprint-num">01</span>
              <div>
                <h3 className="sprint-step-title">Sprint 1 — Auditoría &amp; Plan (Semana 1)</h3>
                <p className="sprint-step-desc">Revisamos cuenta, pixel, conversiones, feed. Plan 30 días con 2 tests prioritarios.</p>
                <p className="sprint-step-entrega">Entrega: Video 20min + sheet</p>
              </div>
            </div>
            <div className="sprint-step">
              <span className="sprint-num">02</span>
              <div>
                <h3 className="sprint-step-title">Sprint 2 — Lanzamiento nocturno (Semana 2)</h3>
                <p className="sprint-step-desc">Campañas en tu cuenta, anuncios nuevos, tracking OK. No tocamos tu dominio sin permiso. Deploy 21:00.</p>
              </div>
            </div>
            <div className="sprint-step">
              <span className="sprint-num">03</span>
              <div>
                <h3 className="sprint-step-title">Sprint 3-4 — Optimización &amp; Reporte (Semanas 3–4)</h3>
                <p className="sprint-step-desc">Negativas, pujas, audiencias. Lunes 9:00: reporte 1 página con siguiente test. Pausa si no rinde.</p>
              </div>
            </div>
          </div>
          <div className="sprint-media">
            {!err ? (
              <img
                src="/media/brujula-interior-16x9.png"
                alt="Sala oscura vacía con mesa negra y lightbox ámbar"
                className="sprint-img"
                onError={() => setErr(true)}
                loading="lazy"
              />
            ) : (
              <div className="media-falta sprint-falta" data-falta="brujula-interior-16x9.png">
                Falta: brujula-interior-16x9.png
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const FAQ_DATA = [
  { q: '¿La pauta la pago a ustedes?', a: 'No. Pagas directo a Google/Meta con tu tarjeta. Nosotros solo gestión. Ves gasto en tu cuenta, sin retención.' },
  { q: '¿Hay contrato amarrado?', a: 'No. Mes a mes. Pausa o cancela avisando 7 días antes del cobro. Sin multa.' },
  { q: '¿Hacen creativos?', a: 'Sí, 6–20 anuncios/mes según retainer. Si tienes diseñador, trabajamos con él. Sin costo extra, edición nocturna incluida.' },
  { q: '¿En cuánto veo resultados?', a: 'Pauta: 14–21 días para estabilizar. SEO: 60–90 días. Reporte semanal, sin promesa mágica. Si no hay oportunidad, te lo decimos en auditoría.' },
  { q: '¿Qué acceso necesitan?', a: 'Acceso a Ads y Analytics como administrador. Nunca pedimos clave bancaria ni retenemos cuenta.' },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq-brujula" className="faq">
      <div className="faq-inner">
        <div className="faq-head">
          <p className="faq-kicker">PREGUNTAS</p>
          <h2 className="faq-h2">Dudas antes de auditar.</h2>
        </div>
        <div className="faq-grid">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">{open === i ? '—' : '+'}</span>
              </button>
              <div className="faq-a-wrap" style={{ display: open === i ? 'block' : 'none' }}>
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── BRIEF FORM ── */
type FormErrors = Partial<Record<'nombre' | 'whatsapp' | 'email' | 'donde' | 'inversion' | 'checkbox', string>>;

function Brief() {
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [donde, setDonde] = useState('');
  const [inversion, setInversion] = useState('');
  const [url, setUrl] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!nombre.trim() || nombre.trim().length < 3) e.nombre = 'Ingresa nombre y apellido (mín. 3 caracteres).';
    const digits = whatsapp.replace(/\D/g, '');
    // Chile: +56 9 8 dígitos => 11 dígitos, empieza 569
    let waOk = false;
    if (digits.length === 11 && digits.startsWith('569')) waOk = true;
    else if (digits.length === 9 && digits.startsWith('9')) waOk = true; // without 56
    else if (digits.length === 12 && digits.startsWith('569')) waOk = true;
    // also accept formatted +56 9 1234 5678 regex
    const regexFormatted = /^\+?56\s?9\s?\d{4}\s?\d{4}$/;
    if (regexFormatted.test(whatsapp.trim())) waOk = true;
    if (!waOk) e.whatsapp = 'WhatsApp debe ser +56 9 xxxx xxxx (9 dígitos). Ej: +56 9 1234 5678';
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) e.email = 'Email no válido.';
    if (!donde) e.donde = 'Selecciona dónde pauteas hoy.';
    if (!inversion) e.inversion = 'Selecciona inversión mensual.';
    if (!consent) e.checkbox = 'Debes aceptar para enviar la auditoría por WhatsApp.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const payload = { nombre, whatsapp, email, donde, inversion, url, mensaje, ts: Date.now() };
      try { localStorage.setItem('brujula-brief', JSON.stringify(payload)); } catch {}
      setNombre(''); setWhatsapp(''); setEmail(''); setDonde(''); setInversion(''); setUrl(''); setMensaje(''); setConsent(false);
      setErrors({});
    }, 800);
  }

  return (
    <section id="brief-brujula" className="brief">
      <div className="brief-inner">
        <div className="brief-form-col">
          <p className="brief-kicker">BRIEF BRÚJULA · AUDITORÍA GRATIS</p>
          <h2 className="brief-h2">Auditemos tu pauta. Respondemos en 24h.</h2>
          <p className="brief-sub">Deja tu cuenta y vemos gasto, CTR y fugas. Sin call eterna. Si no hay oportunidad, te lo decimos de noche.</p>
          <form className="brief-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="b-nombre">Nombre*</label>
              <input id="b-nombre" type="text" placeholder="Nombre y apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              {errors.nombre && <span className="field-error">{errors.nombre}</span>}
            </div>
            <div className="field">
              <label htmlFor="b-wsp">WhatsApp*</label>
              <input id="b-wsp" type="tel" placeholder="+56 9 1234 5678" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
              {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
            </div>
            <div className="field">
              <label htmlFor="b-email">Email</label>
              <input id="b-email" type="email" placeholder="correo@ejemplo.cl" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="b-donde">¿Dónde pauteas hoy?*</label>
              <select id="b-donde" value={donde} onChange={(e) => setDonde(e.target.value)}>
                <option value="">Selecciona</option>
                <option>Google Ads</option>
                <option>Meta Ads</option>
                <option>Ambos</option>
                <option>Aún no pauteo</option>
              </select>
              {errors.donde && <span className="field-error">{errors.donde}</span>}
            </div>
            <div className="field">
              <label htmlFor="b-inv">Inversión mensual en pauta*</label>
              <select id="b-inv" value={inversion} onChange={(e) => setInversion(e.target.value)}>
                <option value="">Selecciona</option>
                <option>&lt;$600k</option>
                <option>$600k–$1,2MM</option>
                <option>$1,2–$3MM</option>
                <option>&gt;$3MM</option>
              </select>
              {errors.inversion && <span className="field-error">{errors.inversion}</span>}
            </div>
            <div className="field">
              <label htmlFor="b-url">URL de tu sitio / cuenta</label>
              <input id="b-url" type="text" placeholder="https://..." value={url} onChange={(e) => setUrl(e.target.value)} />
            </div>
            <div className="field field-full">
              <label htmlFor="b-msg">Mensaje</label>
              <textarea id="b-msg" rows={3} placeholder="¿Qué vendes? ¿Qué no rinde de noche?" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            </div>
            <div className="field field-full field-check">
              <label className="check-label">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>Acepto que me contacten por WhatsApp para enviar auditoría.</span>
              </label>
              {errors.checkbox && <span className="field-error">{errors.checkbox}</span>}
            </div>
            <button type="submit" className="brief-submit" disabled={loading}>
              {loading ? 'Enviando…' : 'Enviar brief →'}
            </button>
            {success && (
              <div className="brief-success">
                ¡Recibido! Te escribimos por WhatsApp en 24h hábiles. Si no ves mensaje, escribe al{' '}
                <a href="https://wa.me/56955128840?text=Hola%20BRUJULA,%20quiero%20auditar%20mi%20pauta" target="_blank" rel="noreferrer">+56 9 5512 8840</a>.
              </div>
            )}
          </form>
          <p className="brief-nota-precios">Valores referenciales con IVA; se confirman tras auditoría.</p>
        </div>
        <div className="brief-info-col">
          <div className="brief-contact">
            <h3 className="brief-contact-title">¿Prefieres hablar?</h3>
            <a href="tel:+56955128840" className="brief-fono">+56 9 5512 8840</a>
            <p className="brief-muted">WhatsApp directo · Lun–Vie 9:00–20:00 (nocturno hasta 22:00)</p>
            <a href="mailto:hola@brujula.cl" className="brief-mail">hola@brujula.cl</a>
            <p className="brief-muted">Av. Apoquindo 2929, piso 12 — Las Condes</p>
            <a href="https://maps.google.com/?q=Av+Apoquindo+2929+Las+Condes" target="_blank" rel="noreferrer" className="brief-maps">Ver en Maps →</a>
          </div>
          <div className="brief-trazabilidad">
            <p className="traz-kicker">TRAZABILIDAD BRÚJULA</p>
            <div className="traz-grid">
              <div className="traz-item"><span className="traz-num">47</span><span className="traz-label">cuentas</span></div>
              <div className="traz-item"><span className="traz-num">2019</span><span className="traz-label">desde</span></div>
              <div className="traz-item"><span className="traz-num">7 días</span><span className="traz-label">aviso pausa</span></div>
            </div>
            <p className="traz-text">Acceso total a tus cuentas. Sin retención, sin letra chica. Sala nocturna real.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">BRÚJULA</p>
          <p className="footer-sub">Agencia de pauta nocturna · Santiago</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#capacidad-brujula">Capacidad</a>
          <a href="#retainer-brujula">Retainer</a>
          <a href="#casos-brujula">Casos</a>
          <a href="#sprint-brujula">Sprint</a>
        </nav>
        <div className="footer-legal">© 2026 BRÚJULA · RUT 77.123.456-7 · Valores referenciales · Datos protegidos. Sin humo nocturno.</div>
      </div>
    </footer>
  );
}

function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="sticky-cta">
      <a href="https://wa.me/56955128840?text=Hola%20BRUJULA,%20quiero%20auditar%20mi%20pauta" target="_blank" rel="noreferrer" className="sticky-tel">+56 9 5512 8840</a>
      <a href="#brief-brujula" className="sticky-btn">Auditar hoy</a>
    </div>
  );
}

export function App() {
  useEffect(() => {
    fetch(HERO_DESKTOP, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) console.warn('[BRUJULA] Media faltante: brujula-hero-16x9.png (HEAD', r.status, ')');
      })
      .catch(() => console.warn('[BRUJULA] Media faltante: brujula-hero-16x9.png (fetch error)'));
    fetch(HERO_MOBILE, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) console.warn('[BRUJULA] Media faltante: brujula-hero-9x16.png (HEAD', r.status, ')');
      })
      .catch(() => console.warn('[BRUJULA] Media faltante: brujula-hero-9x16.png (fetch error)'));
    fetch(HERO_VIDEO, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) console.info('[BRUJULA] Video no disponible (opcional): brujula-hero-loop.mp4');
      })
      .catch(() => console.info('[BRUJULA] Video no disponible (opcional): brujula-hero-loop.mp4'));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <p className="hero-caption">Mesa BRÚJULA 21:30 — edición en lightbox antes de subir a Ads.</p>
        <Capacidad />
        <Retainer />
        <Casos />
        <Sprint />
        <Faq />
        <Brief />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
