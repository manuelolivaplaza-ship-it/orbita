import { useEffect, useState, useRef } from "react";

const BASE = import.meta.env.BASE_URL;
const HERO_DESKTOP = `${BASE}media/umbral-hero-16x9.png`;
const HERO_MOBILE = `${BASE}media/umbral-hero-9x16.png`;

// ---- helpers media ----
function MediaTile({
  src,
  alt,
  filename,
  ratio,
  className,
  caption,
}: {
  src: string;
  alt: string;
  filename: string;
  ratio: string;
  className?: string;
  caption?: string;
}) {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn(`[UMBRAL] media faltante: ${filename}`);
  }, [err, filename]);
  if (err) {
    return (
      <>
        <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={{ aspectRatio: ratio } as React.CSSProperties}>
          media faltante: {filename}
        </div>
        {caption ? <p className="media-caption">{caption}</p> : null}
      </>
    );
  }
  return (
    <>
      <div className={className} style={{ aspectRatio: ratio } as React.CSSProperties}>
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setErr(true)} />
      </div>
      {caption ? <p className="media-caption">{caption}</p> : null}
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="brand" aria-label="UMBRAL inicio">
          <span className="brand-mark">UMBRAL<i>·</i></span>
          <span className="brand-desc">SOFTWARE A MEDIDA · SANTIAGO</span>
        </a>

        <nav className="nav" aria-label="Principal">
          <a href="#stack-real">Stack</a>
          <a href="#integraciones">Integraciones</a>
          <a href="#planes-software">Planes</a>
          <a href="#entrega">Entrega</a>
          <a href="#soporte-sla">Soporte</a>
        </nav>

        <div className="header-actions">
          <a href="tel:+56984012250" className="tel" aria-label="Llamar +56 9 8401 2250">
            <span className="tel-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.6l-1.5 1.5a16 16 0 0 0 6.2 6.2l1.5-1.5a2 2 0 0 1 1.6-.6l2.8.4A2 2 0 0 1 22 16.9z" />
              </svg>
            </span>
            <span className="tel-text">+56 9 8401 2250</span>
            <span className="live">LIVE</span>
          </a>
          <a href="#hablemos" className="cta-header">Agenda demo</a>
          <button className="hamburger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Menú móvil">
          <a href="#stack-real" onClick={() => setOpen(false)}>Stack</a>
          <a href="#integraciones" onClick={() => setOpen(false)}>Integraciones</a>
          <a href="#planes-software" onClick={() => setOpen(false)}>Planes</a>
          <a href="#entrega" onClick={() => setOpen(false)}>Entrega</a>
          <a href="#soporte-sla" onClick={() => setOpen(false)}>Soporte</a>
        </nav>
      )}
    </header>
  );
}

function HeroMedia() {
  const [errD, setErrD] = useState(false);
  const [errM, setErrM] = useState(false);

  useEffect(() => {
    if (errD) console.warn("[UMBRAL] media faltante: umbral-hero-16x9.png");
    if (errM) console.warn("[UMBRAL] media faltante: umbral-hero-9x16.png");
  }, [errD, errM]);

  useEffect(() => {
    const check = async (url: string, name: string) => {
      try {
        const r = await fetch(url, { method: "HEAD" });
        if (!r.ok) console.warn(`[UMBRAL] media faltante: ${name}`);
      } catch {
        //
      }
    };
    check(HERO_DESKTOP, "umbral-hero-16x9.png");
    check(HERO_MOBILE, "umbral-hero-9x16.png");
  }, []);

  return (
    <>
      {!errD ? (
        <div className="hero-figure hero-figure--desktop">
          <img
            src={HERO_DESKTOP}
            alt="Mesa 01 · basalto + aluminio anodizado · filete teal 1px"
            onError={() => setErrD(true)}
            loading="eager"
          />
        </div>
      ) : (
        <div className="media-falta hero-figure--desktop" data-falta="umbral-hero-16x9.png" style={{ aspectRatio: "16/9" }}>
          media faltante: umbral-hero-16x9.png
        </div>
      )}
      {!errM ? (
        <div className="hero-figure hero-figure--mobile">
          <img
            src={HERO_MOBILE}
            alt="Mesa 01 · basalto + aluminio anodizado · filete teal 1px"
            onError={() => setErrM(true)}
            loading="eager"
          />
        </div>
      ) : (
        <div className="media-falta hero-figure--mobile" data-falta="umbral-hero-9x16.png" style={{ aspectRatio: "9/16" }}>
          media faltante: umbral-hero-9x16.png
        </div>
      )}
      <p className="media-caption">Mesa 01 · basalto + aluminio anodizado · filete teal 1px</p>
    </>
  );
}

function Hero() {
  return (
    <section id="release" className="hero" aria-label="Release">
      <div className="grid12 hero-grid">
        <div className="hero-left">
          <p className="kicker">Santiago · Remoto Chile · Deploy en producción</p>
          <h1>
            Software a medida que queda <em>funcionando.</em>
          </h1>
          <p className="subhead">No vendemos horas. Entregamos releases con dueño, SLA y demo en tu datos reales. Si no suma, te decimos no.</p>
          <div className="ctas">
            <a href="#hablemos" className="btn-primary">Agenda demo técnica</a>
            <a href="#planes-software" className="btn-ghost">Ver planes desde $280.000/mes</a>
          </div>
          <div className="banda" aria-label="Banda honesta">
            <span className="banda-item">Release dueño + repo tuyo</span>
            <span className="banda-item">Demo con tus datos</span>
            <span className="banda-item">SLA por escrito</span>
          </div>
          <p className="micro">Si el scope crece tras revisar tu sistema, te avisamos antes de codear. Nada parte sin tu ok.</p>
          <p className="firma">Release 01 · monolito · luz 6000K</p>
        </div>
        <div className="hero-media-col">
          <HeroMedia />
        </div>
      </div>
    </section>
  );
}

// ---- #stack-real ----
function StackReal() {
  return (
    <section id="stack-real" aria-labelledby="stack-real-title">
      <div className="grid12">
        <div className="stack-real-header">
          <p className="kicker kicker--stack">STACK REAL</p>
          <h2 id="stack-real-title">Lo que usamos. Lo que no te amarramos.</h2>
          <p className="stack-intro">Elegimos pocas piezas y las operamos bien. Todo en tu cuenta, con acceso y docs.</p>
        </div>
        <div className="stack-grid">
          <article className="stack-card">
            <MediaTile
              src={`${BASE}media/umbral-tile-01-1x1.png`}
              alt="Detalle basalto + cable trenzado negro mate alineado 15mm sobre basalto oscuro"
              filename="umbral-tile-01-1x1.png"
              ratio="1/1"
              className="stack-card-media"
            />
            <h3>Backend &amp; datos</h3>
            <p className="stack-card-desc">Node / Python, Postgres, colas y jobs. Migrations y seeds versionados.</p>
            <ul className="stack-bullets">
              <li>· Repo tuyo desde día 1</li>
              <li>· Logs y métricas incluidas</li>
            </ul>
          </article>
          <article className="stack-card">
            <MediaTile
              src={`${BASE}media/umbral-tile-02-3x4.png`}
              alt="Trackpad vidrio con reflejo filete teal sobre basalto desenfocado luz 6000K"
              filename="umbral-tile-02-3x4.png"
              ratio="3/4"
              className="stack-card-media"
            />
            <h3>Frontend que no pesa</h3>
            <p className="stack-card-desc">React + Vite, sin framework pesado. Accesible y rápido.</p>
            <ul className="stack-bullets">
              <li>· AA + 360px real</li>
              <li>· Build en tu pipeline</li>
            </ul>
          </article>
          <article className="stack-card">
            <MediaTile
              src={`${BASE}media/umbral-tile-03-1x1.png`}
              alt="Borde teclado anodizado + tornillo torx luz rasante sobre basalto"
              filename="umbral-tile-03-1x1.png"
              ratio="1/1"
              className="stack-card-media"
            />
            <h3>Infra que duerme tranquila</h3>
            <p className="stack-card-desc">Docker, CI/CD, backups diarios y rollback en un comando.</p>
            <ul className="stack-bullets">
              <li>· Deploy con tag</li>
              <li>· Rollback &lt;5 min</li>
            </ul>
          </article>
        </div>
        <p className="stack-nota">No usamos no-code bloqueante ni licencias que te amarren. Si te vas, te llevas repo, llaves y datos.</p>
      </div>
    </section>
  );
}

// ---- #integraciones ----
function Integraciones() {
  return (
    <section id="integraciones" aria-labelledby="integraciones-title">
      <div className="grid12 integ-grid">
        <div className="integ-media-col">
          <MediaTile
            src={`${BASE}media/umbral-interior-16x9.png`}
            alt="Sala 01 · basalto · luz 6000K — mesa baja negra con teclado y filete teal"
            filename="umbral-interior-16x9.png"
            ratio="4/3"
            className="integ-media"
            caption="Sala 01 · basalto · luz 6000K"
          />
        </div>
        <div className="integ-copy">
          <p className="kicker">INTEGRACIONES</p>
          <h2 id="integraciones-title">Se enchufa a lo que ya usas.</h2>
          <p className="integ-intro">No reescribimos todo. Nos colgamos a tu facturación, stock y envíos sin detener la operación.</p>
          <ol className="integ-list">
            <li>
              <span className="integ-num">01</span>
              <div>
                <h3>Facturación &amp; SII</h3>
                <p>Boleta y factura electrónica, DTE y folio. Conciliación diaria sin Excel paralelo.</p>
              </div>
            </li>
            <li>
              <span className="integ-num">02</span>
              <div>
                <h3>Stock &amp; bodega</h3>
                <p>Kardex, reserva y quiebres. Alertas por stock crítico.</p>
              </div>
            </li>
            <li>
              <span className="integ-num">03</span>
              <div>
                <h3>Pagos &amp; despacho</h3>
                <p>Webpay, transfer, couriers. Tracking por webhook a tu bodega.</p>
              </div>
            </li>
            <li>
              <span className="integ-num">04</span>
              <div>
                <h3>Datos &amp; reportes</h3>
                <p>Tablero simple con tus KPIs. Export a Sheets en un clic.</p>
              </div>
            </li>
          </ol>
          <p className="precio-inline-integ">Integración API desde $590.000 — incluye docs + sandbox.</p>
          <ul className="integ-checks">
            <li><span className="check">✓</span> Docs entregados</li>
            <li><span className="check">✓</span> Sandbox</li>
            <li><span className="check">✓</span> Llaves en tu cuenta</li>
            <li><span className="check">✓</span> Rollback por versión</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---- #planes-software ----
function PlanesSoftware() {
  const rows: Array<{ name: string; price: string; desde?: boolean; nota: string }> = [
    { name: "Descubrimiento", price: "$490.000", nota: "mapa 2 semanas — entrevistas + alcances + riesgos por escrito" },
    { name: "MVP", price: "$1.490.000", desde: true, nota: "1 flujo crítico + panel + deploy + docs en tu repo · 6–8 semanas" },
    { name: "Módulo", price: "$590.000", desde: true, nota: "integración API — docs + sandbox + llaves en tu cuenta" },
    { name: "SaaS", price: "$2.900.000", desde: true, nota: "desde 0 — multi-usuario + roles + facturación + reportes" },
    { name: "Mantención", price: "$280.000/mes", desde: true, nota: "horas + fixes + mejoras menores + monitoreo" },
    { name: "Soporte", price: "$190.000/mes", desde: true, nota: "respuesta <1 día hábil + guía + fixes" },
    { name: "Horas", price: "$35.000/h", nota: "se descuenta si contratas mantención" },
    { name: "Migración", price: "$390.000", desde: true, nota: "ETL + validación + carga + rollback" },
  ];
  return (
    <section id="planes-software" aria-labelledby="planes-title">
      <div className="grid12">
        <div className="planes-header">
          <p className="kicker">PLANES A LA VISTA</p>
          <h2 id="planes-title">Precio que se puede comparar</h2>
          <p className="planes-intro">Cada fila es ‘desde’. El definitivo se confirma tras revisar tu sistema. Sin sorpresas.</p>
        </div>
        <div className="planes-grid">
          <div className="planes-ficha-col">
            <div className="planes-ficha" role="table" aria-label="Tabla de precios UMBRAL">
              {rows.map((r) => (
                <div className="ficha-row" key={r.name} role="row">
                  <div className="ficha-prest" role="cell">
                    <span className="prest-name">{r.name}</span>
                    <span className="prest-nota">{r.nota}</span>
                  </div>
                  <div className="ficha-precio" role="cell">
                    {r.desde ? <span className="desde">desde </span> : null}
                    <span className="precio">{r.price}</span>
                  </div>
                </div>
              ))}
              <p className="ficha-nota-pie">Valores referenciales IVA incluido. Se confirma tras revisar tu sistema. Factura disponible. Repo y llaves siempre en tu cuenta.</p>
            </div>
          </div>
          <aside className="planes-aside" aria-label="¿Necesitas fecha?">
            <div className="aside-card">
              <h3>¿Necesitas fecha?</h3>
              <p>Agendamos demo con tus datos. Te damos fecha real, no ‘te llamamos’.</p>
              <p className="aside-tel">
                <span className="tel-mono">+56 9 8401 2250</span> <span className="live">LIVE</span>
              </p>
              <a href="#hablemos" className="btn-primary aside-cta">Hablar con ingeniería</a>
              <a href="#entrega" className="btn-ghost aside-sec">Ver entrega</a>
              <p className="aside-micro">Demo 30 min · Sin humo · Presupuesto por escrito</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ---- #entrega ----
function Entrega() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "¿Y si no sirve?", a: "Te decimos antes de codear. Cobras solo el mapa ($490.000). Sin código innecesario que pagar." },
    { q: "¿Quedamos amarrados?", a: "No. Te llevas repo, llaves y datos. Hospedaje en tu cuenta. Licencia tuya." },
    { q: "¿Cuánto tarda el primer release?", a: "MVP 6–8 semanas desde mapa aprobado. Con fecha por escrito y demo semanal." },
  ];
  return (
    <section id="entrega" aria-labelledby="entrega-title">
      <div className="grid12">
        <div className="entrega-header">
          <p className="kicker">ENTREGA</p>
          <h2 id="entrega-title">Release con dueño, no ticket eterno.</h2>
          <p className="entrega-intro">Cada release tiene dueño, fecha y demo en producción. Sin sprint infinito.</p>
        </div>
        <div className="entrega-grid">
          <div className="timeline-col">
            <ol className="timeline">
              <li>
                <span className="tl-node" aria-hidden="true" />
                <h3>01 · Mapa — semana 1–2</h3>
                <p>Levantamos flujos, datos y bordes. Alcances con riesgos por escrito. El mapa se firma antes de codear.</p>
              </li>
              <li>
                <span className="tl-node" aria-hidden="true" />
                <h3>02 · Build — semana 3–7</h3>
                <p>Demo semanal con tus datos, no lorem. Ajustes en vivo sobre el mapa.</p>
              </li>
              <li>
                <span className="tl-node" aria-hidden="true" />
                <h3>03 · Deploy — semana 8</h3>
                <p>En tu cuenta, con tag y rollback. Capacitación de 60 min.</p>
              </li>
              <li>
                <span className="tl-node" aria-hidden="true" />
                <h3>04 · Estabilización — 30 días</h3>
                <p>Monitoreo + fixes incluidos. Luego mantención o pausa sin amarre.</p>
              </li>
            </ol>
          </div>
          <div className="entrega-panel-col">
            <div className="detalles-panel">
              <h3>Qué te llevas siempre</h3>
              <ul className="detalles-checks">
                <li><span className="check">✓</span> Repo en tu GitHub/GitLab</li>
                <li><span className="check">✓</span> Docs + diagrama de flujo</li>
                <li><span className="check">✓</span> Llaves y backups en tu cuenta</li>
                <li><span className="check">✓</span> Runbook de deploy y rollback</li>
              </ul>
              <p className="precio-mini">Mapa $490.000 se descuenta si sigues a MVP.</p>
            </div>
            <div className="acordeon" role="region" aria-label="Preguntas frecuentes">
              {faqs.map((f, i) => (
                <div className={`ac-item ${open === i ? "is-open" : ""}`} key={f.q}>
                  <button className="ac-trigger" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} type="button">
                    <span>{f.q}</span>
                    <span className="ac-chevron" aria-hidden="true">⌄</span>
                  </button>
                  {open === i ? <p className="ac-body">{f.a}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- #soporte-sla ----
function SoporteSla() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn("[UMBRAL] media faltante: umbral-proof-16x9.png");
  }, [err]);
  return (
    <section id="soporte-sla" aria-labelledby="soporte-title">
      <div className="grid12">
        <div className="soporte-header">
          <p className="kicker">SOPORTE</p>
          <h2 id="soporte-title">Soporte que no es un bot.</h2>
          <p className="soporte-intro">Humano que conoce tu repo y tu release. Estado y tiempo de respuesta por contrato.</p>
        </div>

        <div className="soporte-tabla" role="table" aria-label="Tabla soporte UMBRAL">
          <div className="soporte-head" role="row">
            <div role="columnheader"></div>
            <div role="columnheader">BASE</div>
            <div role="columnheader">SLA</div>
            <div role="columnheader">ON-CALL</div>
          </div>
          <div className="soporte-row" role="row">
            <div className="soporte-cell label" role="rowheader">Para quién</div>
            <div className="soporte-cell" role="cell">MVP sin urgencia</div>
            <div className="soporte-cell" role="cell">Operación diaria</div>
            <div className="soporte-cell" role="cell">Operación crítica 24/7</div>
          </div>
          <div className="soporte-row" role="row">
            <div className="soporte-cell label" role="rowheader">Respuesta</div>
            <div className="soporte-cell" role="cell">&lt;1 día hábil</div>
            <div className="soporte-cell" role="cell">&lt;4 h hábil</div>
            <div className="soporte-cell" role="cell">&lt;1 h (24/7)</div>
          </div>
          <div className="soporte-row" role="row">
            <div className="soporte-cell label" role="rowheader">Qué incluye</div>
            <div className="soporte-cell" role="cell">Fixes + guía</div>
            <div className="soporte-cell" role="cell">Todo BASE + monitoreo + status</div>
            <div className="soporte-cell" role="cell">Todo SLA + guardia + rollback asistido</div>
          </div>
          <div className="soporte-row" role="row">
            <div className="soporte-cell label" role="rowheader">Desde CLP</div>
            <div className="soporte-cell precio-cell" role="cell">$190.000 / mes</div>
            <div className="soporte-cell precio-cell" role="cell">$280.000 / mes</div>
            <div className="soporte-cell precio-cell" role="cell">$520.000 / mes</div>
          </div>
          <div className="soporte-row" role="row">
            <div className="soporte-cell label" role="rowheader">Horario</div>
            <div className="soporte-cell" role="cell">Lun–Vie 10–18h</div>
            <div className="soporte-cell" role="cell">Lun–Sáb 9–19h</div>
            <div className="soporte-cell" role="cell">24/7</div>
          </div>
        </div>

        <div className="soporte-cards" aria-hidden="true">
          <div className="soporte-card">
            <div className="soporte-card-head">BASE</div>
            <dl>
              <dt>Para quién</dt><dd>MVP sin urgencia</dd>
              <dt>Respuesta</dt><dd>&lt;1 día hábil</dd>
              <dt>Qué incluye</dt><dd>Fixes + guía</dd>
              <dt>Desde CLP</dt><dd>$190.000 / mes</dd>
              <dt>Horario</dt><dd>Lun–Vie 10–18h</dd>
            </dl>
          </div>
          <div className="soporte-card">
            <div className="soporte-card-head">SLA</div>
            <dl>
              <dt>Para quién</dt><dd>Operación diaria</dd>
              <dt>Respuesta</dt><dd>&lt;4 h hábil</dd>
              <dt>Qué incluye</dt><dd>Todo BASE + monitoreo + status</dd>
              <dt>Desde CLP</dt><dd>$280.000 / mes</dd>
              <dt>Horario</dt><dd>Lun–Sáb 9–19h</dd>
            </dl>
          </div>
          <div className="soporte-card">
            <div className="soporte-card-head">ON-CALL</div>
            <dl>
              <dt>Para quién</dt><dd>Operación crítica 24/7</dd>
              <dt>Respuesta</dt><dd>&lt;1 h (24/7)</dd>
              <dt>Qué incluye</dt><dd>Todo SLA + guardia + rollback asistido</dd>
              <dt>Desde CLP</dt><dd>$520.000 / mes</dd>
              <dt>Horario</dt><dd>24/7</dd>
            </dl>
          </div>
        </div>

        <p className="soporte-nota">Sin permanencia. Pausa con 30 días de aviso. Horas no usadas se arrastran 1 mes.</p>

        {err ? (
          <div className="media-falta soporte-proof-falta" data-falta="umbral-proof-16x9.png" style={{ aspectRatio: "16/9" }}>
            media faltante: umbral-proof-16x9.png
          </div>
        ) : (
          <div className="soporte-proof-wrap">
            <img src={`${BASE}media/umbral-proof-16x9.png`} alt="Basalto + vidrio + etiqueta técnica 1px, filete teal desenfocado" loading="lazy" decoding="async" onError={() => setErr(true)} />
          </div>
        )}
        <p className="media-caption umbral-caption">Release 02 · basalto + vidrio · luz 6000K</p>
      </div>
    </section>
  );
}

// ---- #hablemos ----
function Hablemos() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (data: FormData) => {
    const e: Record<string, string> = {};
    const nombre = String(data.get("nombre") ?? "").trim();
    const tel = String(data.get("telefono") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const objetivo = String(data.get("objetivo") ?? "").trim();
    const sistema = String(data.get("sistema") ?? "").trim();
    if (!nombre || nombre.length < 2) e.nombre = "Ingresa tu nombre y apellido.";
    if (!tel) e.telefono = "Teléfono requerido.";
    else {
      const digits = tel.replace(/\D/g, "");
      if (!tel.includes("+56") || digits.length < 11) e.telefono = "Usa formato +56 9 8401 2250.";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email no válido.";
    if (!objetivo) e.objetivo = "Elige un objetivo.";
    if (!sistema) e.sistema = "Elige tu sistema actual.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const payload = {
      nombre: String(data.get("nombre") ?? ""),
      telefono: String(data.get("telefono") ?? ""),
      email: String(data.get("email") ?? ""),
      objetivo: String(data.get("objetivo") ?? ""),
      sistema: String(data.get("sistema") ?? ""),
      mensaje: String(data.get("mensaje") ?? ""),
      repo: data.get("repo") === "on",
      fecha: new Date().toISOString(),
    };
    setStatus("loading");
    setTimeout(() => {
      try {
        localStorage.setItem("umbral-lead", JSON.stringify(payload));
      } catch {}
      setStatus("success");
      const text = `Hola UMBRAL quiero demo: ${payload.nombre} ${payload.objetivo} ${payload.sistema}`;
      const wa = `https://wa.me/56984012250?text=${encodeURIComponent(text)}`;
      window.open(wa, "_blank");
      setTimeout(() => {
        window.location.href = "mailto:hola@umbral.cl?subject=Demo UMBRAL&body=" + encodeURIComponent(text + "\n\n" + payload.mensaje);
      }, 600);
    }, 600);
  };

  return (
    <section id="hablemos" aria-labelledby="hablemos-title">
      <div className="grid12 hablemos-grid">
        <div className="hablemos-form-col">
          <div className="umbral-form-panel">
            <div className="form-topbar" aria-hidden="true">
              <span className="form-filete" />
              <span className="form-dots"><i /><i /><i /></span>
            </div>
            <p className="kicker">HABLEMOS</p>
            <h2 id="hablemos-title">Cuenta tu flujo. Te decimos si te sirve.</h2>
            <p className="hablemos-sub">Cuéntanos flujo y volumen mensual. Te respondemos hoy con alcance y rango honesto.</p>
            <form ref={formRef} className="umbral-form" onSubmit={onSubmit} noValidate>
              <label htmlFor="umbral-nombre">Nombre</label>
              <input id="umbral-nombre" name="nombre" type="text" placeholder="Nombre y apellido" className={errors.nombre ? "input-error" : ""} aria-invalid={!!errors.nombre} />
              {errors.nombre ? <p className="field-error">{errors.nombre}</p> : null}

              <label htmlFor="umbral-tel">Teléfono</label>
              <input id="umbral-tel" name="telefono" type="tel" placeholder="+56 9 8401 2250" className={errors.telefono ? "input-error" : ""} aria-invalid={!!errors.telefono} />
              {errors.telefono ? <p className="field-error">{errors.telefono}</p> : null}

              <label htmlFor="umbral-email">Email</label>
              <input id="umbral-email" name="email" type="email" placeholder="hola@empresa.cl" className={errors.email ? "input-error" : ""} aria-invalid={!!errors.email} />

              <label htmlFor="umbral-objetivo">Objetivo</label>
              <select id="umbral-objetivo" name="objetivo" defaultValue="" className={errors.objetivo ? "input-error" : ""}>
                <option value="" disabled>Selecciona objetivo</option>
                <option>Automatizar operación</option>
                <option>Integrar sistemas</option>
                <option>SaaS desde 0</option>
                <option>Migrar datos</option>
                <option>Otro</option>
              </select>
              {errors.objetivo ? <p className="field-error">{errors.objetivo}</p> : null}

              <label htmlFor="umbral-sistema">Sistema actual</label>
              <select id="umbral-sistema" name="sistema" defaultValue="" className={errors.sistema ? "input-error" : ""}>
                <option value="" disabled>Selecciona sistema</option>
                <option>Excel/Sheets</option>
                <option>ERP</option>
                <option>A mano</option>
                <option>Desarrollo propio</option>
                <option>No tengo</option>
              </select>
              {errors.sistema ? <p className="field-error">{errors.sistema}</p> : null}

              <label htmlFor="umbral-msg">Mensaje</label>
              <textarea id="umbral-msg" name="mensaje" rows={3} placeholder="Cuéntanos flujo y volumen mensual" />

              <label className="form-check">
                <input type="checkbox" name="repo" defaultChecked />
                <span>Quiero repo y docs en mi cuenta desde día 1</span>
              </label>

              {status === "success" ? <div className="form-success" role="status">Te escribimos hoy · revisa tu WhatsApp ✓</div> : null}

              <button type="submit" className="btn-primary form-cta" disabled={status === "loading"} style={{ opacity: status === "loading" ? 0.7 : 1 }}>
                {status === "loading" ? "Enviando…" : "Agendar demo técnica"}
              </button>
              <a href="tel:+56984012250" className="btn-ghost form-sec">Llamar ahora</a>
              {Object.keys(errors).length ? <p className="field-error">Revisa los campos marcados.</p> : null}
            </form>
          </div>
        </div>
        <div className="hablemos-datos-col">
          <p className="tel-gigante">
            <span className="tel-mono-gigante">+56 9 8401 2250</span> <span className="live">LIVE</span>
          </p>
          <a href="mailto:hola@umbral.cl" className="email-link">hola@umbral.cl</a>
          <p className="dato-dir">Santiago · remoto Chile — deploy en tu cuenta</p>
          <p className="dato-horario">Lun–Vie 09:00–18:30 · Demo con agenda</p>
          <ul className="confianza">
            <li><span className="check">✓</span> Repo tuyo día 1</li>
            <li><span className="check">✓</span> Release con dueño</li>
            <li><span className="check">✓</span> SLA por escrito</li>
            <li><span className="check">✓</span> Rollback &lt;5 min</li>
          </ul>
        </div>
      </div>
      <div className="umbral-footer">
        <div className="grid12 footer-grid">
          <p className="footer-line">UMBRAL SpA · Santiago · hola@umbral.cl · +56 9 8401 2250 · Repo y docs en tu cuenta</p>
          <p className="footer-copy">© 2026 UMBRAL. Valores referenciales; se confirma tras revisión técnica y se firma en presupuesto.</p>
        </div>
      </div>
    </section>
  );
}

function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrolled > 0.4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-cta" role="region" aria-label="Acciones rápidas">
      <a href="tel:+56984012250" className="btn-ghost sticky-btn">Llamar</a>
      <a href="#hablemos" className="btn-primary sticky-btn">Agendar</a>
    </div>
  );
}

export function App() {
  useEffect(() => {
    // checklist secciones vs BLUEPRINT
    const ids = ["release", "stack-real", "integraciones", "planes-software", "entrega", "soporte-sla", "hablemos"];
    const missing = ids.filter((id) => !document.getElementById(id));
    if (missing.length) console.warn("[UMBRAL] Faltan secciones:", missing.join(", "));
    else console.log("[UMBRAL] Checklist secciones vs BLUEPRINT:", ids.map((id) => ({ id, ok: true })));
    // media faltante report
    const files = [
      "umbral-hero-16x9.png",
      "umbral-hero-9x16.png",
      "umbral-tile-01-1x1.png",
      "umbral-tile-02-3x4.png",
      "umbral-tile-03-1x1.png",
      "umbral-interior-16x9.png",
      "umbral-proof-16x9.png",
      "umbral-og-16x9.png",
      "umbral-hero-loop.mp4",
    ];
    files.forEach((f) => {
      const img = new Image();
      img.src = `${BASE}media/${f}`;
      img.onerror = () => {
        if (f.endsWith(".mp4")) return;
        console.warn(`[UMBRAL] media faltante: ${f}`);
      };
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StackReal />
        <Integraciones />
        <PlanesSoftware />
        <Entrega />
        <SoporteSla />
        <Hablemos />
      </main>
      <StickyCta />
    </>
  );
}
