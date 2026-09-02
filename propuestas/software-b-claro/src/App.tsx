import { useEffect, useState, useRef } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <a href="#portada" className="brand" aria-label="BALIZA — Inicio">
          <span className="brand-mark">BALIZA</span>
          <span className="brand-desc">SOFTWARE A MEDIDA · SANTIAGO</span>
        </a>

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Principal" id="baliza-nav">
          <a href="#stack-a-escuadra" onClick={() => setOpen(false)}>Stack</a>
          <a href="#integraciones-vivas" onClick={() => setOpen(false)}>Integraciones</a>
          <a href="#planes-a-la-vista" onClick={() => setOpen(false)}>Planes</a>
          <a href="#entrega-con-plano" onClick={() => setOpen(false)}>Entrega</a>
          <a href="#soporte-que-contesta" onClick={() => setOpen(false)}>Soporte</a>
        </nav>

        <div className="header-right">
          <a href="tel:+56984012250" className="tel-link" aria-label="Llamar al +56 9 8401 2250">
            <span className="tel-text">+56 9 8401 2250</span>
            <span aria-hidden="true" className="tel-icon-mobile">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="badge-plano">PLANO</span>
          </a>
          <a href="#hablemos-baliza" className="cta-header">Agenda demo</a>
          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="baliza-nav"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
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
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (err) {
      console.warn("[BALIZA] media faltante: baliza-hero-16x9.png no encontrada en public/media/. Usando placeholder .media-falta con data-falta=\"baliza-hero-16x9.png\". También debe existir baliza-hero-9x16.png para <768px en public/media/.");
    }
  }, [err]);

  if (err) {
    return (
      <div
        className="media-falta"
        data-falta="baliza-hero-16x9.png"
        style={{ aspectRatio: "16/9" } as React.CSSProperties}
      >
        Falta: baliza-hero-16x9.png
      </div>
    );
  }

  return (
    <div className="media-wrap">
      <picture>
        <source media="(max-width: 767px)" srcSet="/media/baliza-hero-9x16.png" />
        <img
          src="/media/baliza-hero-16x9.png"
          alt="Mesa delineante color hueso con pliego A3 plegado a 15mm con diagrama de flujo impreso en tinta petróleo y anotaciones a lápiz grafito, escuadra de acero inox 300mm y portaminas 0.5mm alineados a escuadra bajo luz norte difusa 5500K con sombra precisa de 1px"
          loading="eager"
          decoding="async"
          onError={() => setErr(true)}
        />
      </picture>
    </div>
  );
}

// Helper for media with fallback
function MediaImg({ src, alt, filename, ratio, className, caption }: { src: string; alt: string; filename: string; ratio: string; className?: string; caption?: string }) {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn(`[BALIZA] media faltante: ${filename} no encontrada en public/media/. Usando placeholder .media-falta con data-falta="${filename}" aspect-ratio:${ratio}`);
  }, [err, filename, ratio]);
  if (err) {
    return (
      <>
        <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={{ aspectRatio: ratio } as React.CSSProperties}>
          Falta: {filename}
        </div>
        {caption ? <p className="media-caption">{caption}</p> : null}
      </>
    );
  }
  return (
    <>
      <div className={`media-wrap ${className ?? ""}`} style={{ aspectRatio: ratio } as React.CSSProperties}>
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setErr(true)} />
      </div>
      {caption ? <p className="media-caption">{caption}</p> : null}
    </>
  );
}

// #stack-a-escuadra
function SectionStack() {
  return (
    <section id="stack-a-escuadra" aria-labelledby="baliza-stack-title">
      <div className="stack-inner">
        <p className="kicker">STACK REAL</p>
        <h2 id="baliza-stack-title" className="h2">Lo que usamos. Lo que no te amarramos.</h2>
        <p className="intro">Elegimos pocas piezas y las operamos bien. Todo en tu cuenta, con acceso y docs en tu repo.</p>
        <div className="stack-grid">
          <article className="stack-card">
            <MediaImg src="/media/baliza-tile-01-1x1.png" alt="Detalle pliego plegado a 15mm con escuadra inox 300mm alineada sobre papel hueso bajo luz norte, sombra precisa 1px" filename="baliza-tile-01-1x1.png" ratio="1/1" className="card-media" />
            <h3 className="card-title">Backend &amp; datos</h3>
            <p className="card-text">Node / Python, Postgres, colas y jobs. Migrations y seeds versionados.</p>
            <ul className="card-bullets">
              <li>· Repo tuyo desde día 1</li>
              <li>· Logs y métricas incluidas</li>
            </ul>
          </article>
          <article className="stack-card">
            <MediaImg src="/media/baliza-tile-02-3x4.png" alt="Portaminas 0.5mm sobre pliego hueso con anotación grafito fina, luz rasante norte" filename="baliza-tile-02-3x4.png" ratio="3/4" className="card-media" />
            <h3 className="card-title">Frontend que no pesa</h3>
            <p className="card-text">React + Vite, sin framework pesado. Accesible, rápido, sin animaciones que distraen.</p>
            <ul className="card-bullets">
              <li>· AA + 360px real</li>
              <li>· Build en tu pipeline</li>
            </ul>
          </article>
          <article className="stack-card">
            <MediaImg src="/media/baliza-tile-03-1x1.png" alt="Detalle borde escuadra inox cepillado y tornillo micro sobre papel hueso, luz norte que recorta metal" filename="baliza-tile-03-1x1.png" ratio="1/1" className="card-media" />
            <h3 className="card-title">Infra que duerme tranquila</h3>
            <p className="card-text">Docker, CI/CD, backups diarios y rollback en un comando.</p>
            <ul className="card-bullets">
              <li>· Deploy con tag</li>
              <li>· Rollback &lt;5 min</li>
            </ul>
          </article>
        </div>
        <p className="nota-pie">No usamos no-code bloqueante ni licencias que te amarren. Si te vas, te llevas todo: repo, llaves y datos.</p>
      </div>
    </section>
  );
}

function SectionIntegraciones() {
  return (
    <section id="integraciones-vivas" aria-labelledby="baliza-integraciones-title">
      <div className="integraciones-inner">
        <div className="integraciones-media-col">
          <MediaImg
            src="/media/baliza-interior-16x9.png"
            alt="Sala museo vacía con muro hueso y mesa delineante baja color hueso con pliego plegado, escuadra inox y portaminas bajo luz norte difusa 5500K"
            filename="baliza-interior-16x9.png"
            ratio="4/3"
            className="integraciones-img"
            caption="Sala 01 · mesa delineante · luz norte 5500K"
          />
        </div>
        <div className="integraciones-copy">
          <p className="kicker">INTEGRACIONES</p>
          <h2 id="baliza-integraciones-title" className="h2">Se enchufa a lo que ya usas.</h2>
          <p className="intro">No reescribimos todo. Nos colgamos a tu facturación, stock y envíos sin detener la operación.</p>
          <ol className="integraciones-lista">
            <li className="integ-item">
              <span className="integ-num">01</span>
              <div className="integ-text">
                <h3 className="integ-title">Facturación &amp; SII</h3>
                <p>Boleta/factura electrónica, DTE y folio. Conciliación diaria sin Excel paralelo.</p>
              </div>
            </li>
            <li className="integ-item">
              <span className="integ-num">02</span>
              <div className="integ-text">
                <h3 className="integ-title">Stock &amp; bodega</h3>
                <p>Kardex, reserva y quiebres. Alertas por quiebre.</p>
              </div>
            </li>
            <li className="integ-item">
              <span className="integ-num">03</span>
              <div className="integ-text">
                <h3 className="integ-title">Pagos &amp; despacho</h3>
                <p>Webpay, transfer, couriers. Tracking por webhook a tu bodega.</p>
              </div>
            </li>
            <li className="integ-item">
              <span className="integ-num">04</span>
              <div className="integ-text">
                <h3 className="integ-title">Datos &amp; reportes</h3>
                <p>Tablero simple con tus KPIs. Export a Sheets en un clic.</p>
              </div>
            </li>
          </ol>
          <p className="precio-inline">Integración API desde $550.000 — incluye docs + sandbox + llaves en tu cuenta.</p>
          <ul className="checklist">
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

function SectionPlanes() {
  const rows: Array<{ prest: string; precio: string; desde?: boolean; nota: string }> = [
    { prest: "Diagnóstico + mapa (2 semanas)", precio: "$480.000", nota: "entrevistas + mapa + alcances + riesgos por escrito" },
    { prest: "MVP a medida (6–8 semanas)", precio: "$1.450.000", desde: true, nota: "1 flujo crítico + panel + deploy + docs en tu repo" },
    { prest: "Módulo / integración API", precio: "$550.000", desde: true, nota: "docs + sandbox + llaves en tu cuenta" },
    { prest: "SaaS / plataforma (desde 0)", precio: "$2.800.000", desde: true, nota: "multi-usuario + roles + facturación + reportes" },
    { prest: "Mantención & evolución", precio: "$270.000 / mes", desde: true, nota: "horas + fixes + mejoras menores + monitoreo" },
    { prest: "Soporte SLA", precio: "$180.000 / mes", desde: true, nota: "respuesta <4h hábil + status + rollback" },
    { prest: "Horas dev adicionales", precio: "$35.000 / h", nota: "se descuenta de mantención si contratas" },
    { prest: "Migración de datos", precio: "$380.000", desde: true, nota: "ETL + validación + carga + rollback" },
  ];
  return (
    <section id="planes-a-la-vista" aria-labelledby="baliza-planes-title">
      <div className="planes-inner">
        <div className="planes-header">
          <p className="kicker">PLANES A LA VISTA</p>
          <h2 id="baliza-planes-title" className="h2">Precio que se puede comparar</h2>
          <p className="intro">Cada fila es ‘desde’. El definitivo se confirma tras revisar tu sistema. Sin sorpresas ni letra chica.</p>
        </div>
        <div className="planes-grid">
          <div className="planes-tabla-col">
            <div className="planes-ficha" role="table" aria-label="Tabla de precios">
              <div className="ficha-dots" aria-hidden="true"><span /><span /><span /></div>
              {rows.map((r) => (
                <div className="ficha-row" key={r.prest} role="row">
                  <div className="ficha-prest" role="cell">
                    <span className="prest-name">{r.prest}</span>
                    <span className="prest-nota">{r.nota}</span>
                  </div>
                  <div className="ficha-precio" role="cell">
                    {r.desde ? <span className="desde">desde </span> : null}
                    <span className="precio">{r.precio}</span>
                  </div>
                </div>
              ))}
              <p className="ficha-nota-pie">Valores referenciales; se confirma tras revisión técnica. Factura exenta. Hasta 6 cuotas sin interés. Repo y llaves siempre en tu cuenta.</p>
            </div>
          </div>
          <aside className="planes-aside" aria-label="¿Necesitas fecha?">
            <div className="aside-card">
              <h3 className="aside-title">¿Necesitas fecha?</h3>
              <p className="aside-text">Agendamos demo con tus datos. Te damos fecha real, no ‘te llamamos’.</p>
              <p className="aside-tel">
                <span className="tel-mono">+56 9 8401 2250</span> <span className="badge-plano">PLANO</span>
              </p>
              <a href="#hablemos-baliza" className="btn-primary aside-cta">Hablar con ingeniería</a>
              <a href="#entrega-con-plano" className="btn-ghost aside-sec">Ver entrega</a>
              <p className="aside-micro">Demo 30 min · Sin humo · Presupuesto por escrito</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SectionEntrega() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: "¿Y si no sirve?", a: "Te decimos antes de codear. Cobras solo el plano. Sin código innecesario." },
    { q: "¿Quedamos amarrados?", a: "No. Te llevas repo, llaves y datos. Licencia tuya, hospedaje en tu cuenta." },
    { q: "¿Cuánto tarda?", a: "MVP 6–8 semanas desde plano aprobado. Con fecha por escrito y demo semanal." },
  ];
  return (
    <section id="entrega-con-plano" aria-labelledby="baliza-entrega-title">
      <div className="entrega-inner">
        <p className="kicker">ENTREGA</p>
        <h2 id="baliza-entrega-title" className="h2">Release con dueño, no ticket eterno.</h2>
        <p className="intro">Cada release tiene dueño, fecha y demo en producción. Sin ‘sprint infinito’.</p>
        <div className="entrega-grid">
          <div className="timeline-col">
            <ol className="timeline">
              <li className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <h3 className="tl-title">01 · Plano (semana 1–2)</h3>
                <p>Levantamos flujos, datos y bordes. Alcances con riesgos por escrito. El plano se firma.</p>
              </li>
              <li className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <h3 className="tl-title">02 · Build (semana 3–7)</h3>
                <p>Demo semanal con tus datos, no lorem. Ajustes en vivo sobre el plano.</p>
              </li>
              <li className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <h3 className="tl-title">03 · Deploy (semana 8)</h3>
                <p>En tu cuenta, con tag y rollback. Capacitación de 60 min.</p>
              </li>
              <li className="tl-item">
                <span className="tl-node" aria-hidden="true" />
                <h3 className="tl-title">04 · Estabilización (30 días)</h3>
                <p>Monitoreo + fixes incluidos. Luego mantención o pausa sin amarre.</p>
              </li>
            </ol>
          </div>
          <div className="detalles-col">
            <div className="detalles-panel">
              <h3 className="panel-title">Qué te llevas siempre</h3>
              <ul className="checklist">
                <li><span className="check">✓</span> Repo en tu GitHub/GitLab</li>
                <li><span className="check">✓</span> Docs + diagrama impreso</li>
                <li><span className="check">✓</span> Llaves y backups en tu cuenta</li>
                <li><span className="check">✓</span> Runbook de deploy/rollback</li>
              </ul>
              <p className="precio-inline small">Plano $480.000 se descuenta si sigues a MVP.</p>
            </div>
            <div className="acordeon" role="region" aria-label="Preguntas frecuentes">
              {faqs.map((f, i) => (
                <div className={`ac-item ${openIdx === i ? "is-open" : ""}`} key={f.q}>
                  <button className="ac-trigger" aria-expanded={openIdx === i} onClick={() => setOpenIdx(openIdx === i ? null : i)} type="button">
                    <span>{f.q}</span>
                    <span className="ac-chevron" aria-hidden="true">⌄</span>
                  </button>
                  {openIdx === i ? <p className="ac-body">{f.a}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSoporte() {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn('[BALIZA] media faltante: baliza-proof-16x9.png no encontrada en public/media/. Usando placeholder .media-falta con data-falta="baliza-proof-16x9.png" aspect-ratio:16/9');
  }, [err]);
  return (
    <section id="soporte-que-contesta" aria-labelledby="baliza-soporte-title">
      <div className="soporte-inner">
        <p className="kicker">SOPORTE</p>
        <h2 id="baliza-soporte-title" className="h2">Soporte que no es un bot.</h2>
        <p className="intro">Humano que conoce tu repo y tu plano. Estado y tiempo de respuesta por contrato.</p>

        <div className="soporte-tabla" role="table" aria-label="Comparativa soporte">
          <div className="soporte-header-row" role="row">
            <div className="soporte-th empty" role="columnheader"></div>
            <div className="soporte-th" role="columnheader">BASE</div>
            <div className="soporte-th" role="columnheader">SLA</div>
            <div className="soporte-th" role="columnheader">ON-CALL</div>
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
            <div className="soporte-cell" role="cell">Todo base + monitoreo + status</div>
            <div className="soporte-cell" role="cell">Todo SLA + guardia + rollback asistido</div>
          </div>
          <div className="soporte-row" role="row">
            <div className="soporte-cell label" role="rowheader">Desde CLP</div>
            <div className="soporte-cell precio-cell" role="cell">$180.000 / mes</div>
            <div className="soporte-cell precio-cell" role="cell">$270.000 / mes</div>
            <div className="soporte-cell precio-cell" role="cell">$510.000 / mes</div>
          </div>
          <div className="soporte-row" role="row">
            <div className="soporte-cell label" role="rowheader">Horario</div>
            <div className="soporte-cell" role="cell">Lun–Vie 10–18h</div>
            <div className="soporte-cell" role="cell">Lun–Sáb 9–19h</div>
            <div className="soporte-cell" role="cell">24/7</div>
          </div>
        </div>

        {/* Mobile cards fallback via CSS, same data rendered as cards */}
        <div className="soporte-cards" aria-hidden="true">
          <div className="soporte-card">
            <div className="soporte-card-header">BASE</div>
            <dl>
              <dt>Para quién</dt><dd>MVP sin urgencia</dd>
              <dt>Respuesta</dt><dd>&lt;1 día hábil</dd>
              <dt>Qué incluye</dt><dd>Fixes + guía</dd>
              <dt>Desde CLP</dt><dd>$180.000 / mes</dd>
              <dt>Horario</dt><dd>Lun–Vie 10–18h</dd>
            </dl>
          </div>
          <div className="soporte-card">
            <div className="soporte-card-header">SLA</div>
            <dl>
              <dt>Para quién</dt><dd>Operación diaria</dd>
              <dt>Respuesta</dt><dd>&lt;4 h hábil</dd>
              <dt>Qué incluye</dt><dd>Todo base + monitoreo + status</dd>
              <dt>Desde CLP</dt><dd>$270.000 / mes</dd>
              <dt>Horario</dt><dd>Lun–Sáb 9–19h</dd>
            </dl>
          </div>
          <div className="soporte-card">
            <div className="soporte-card-header">ON-CALL</div>
            <dl>
              <dt>Para quién</dt><dd>Operación crítica 24/7</dd>
              <dt>Respuesta</dt><dd>&lt;1 h (24/7)</dd>
              <dt>Qué incluye</dt><dd>Todo SLA + guardia + rollback asistido</dd>
              <dt>Desde CLP</dt><dd>$510.000 / mes</dd>
              <dt>Horario</dt><dd>24/7</dd>
            </dl>
          </div>
        </div>

        <p className="soporte-nota">Sin permanencia. Pausas con 30 días de aviso. Horas no usadas se arrastran 1 mes.</p>

        {err ? (
          <div className="media-falta" data-falta="baliza-proof-16x9.png" style={{ aspectRatio: "16/9" } as React.CSSProperties}>Falta: baliza-proof-16x9.png</div>
        ) : (
          <div className="media-wrap proof-media">
            <img src="/media/baliza-proof-16x9.png" alt="Pliego desplegado con diagrama completo, escuadra inox y portaminas alineados sobre mesa hueso, luz museo contenida" loading="lazy" decoding="async" onError={() => setErr(true)} />
          </div>
        )}
        <p className="media-caption align-left">Deploy 04 · pliego + acero · luz norte</p>
      </div>
    </section>
  );
}

function SectionHablemos() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (data: FormData) => {
    const e: Record<string, string> = {};
    const nombre = String(data.get("nombre") ?? "").trim();
    const tel = String(data.get("telefono") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const objetivo = String(data.get("objetivo") ?? "");
    const sistema = String(data.get("sistema") ?? "");
    if (!nombre || nombre.length < 2) e.nombre = "Ingresa tu nombre y apellido.";
    if (!tel) e.telefono = "Teléfono requerido.";
    else {
      const digits = tel.replace(/\D/g, "");
      // debe ser +56 9...
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
      repo_plano: data.get("repo_plano") === "on",
      fecha: new Date().toISOString(),
    };
    setStatus("loading");
    setTimeout(() => {
      try { localStorage.setItem("baliza-lead", JSON.stringify(payload)); } catch {}
      setStatus("success");
      const text = `Hola BALIZA quiero demo: ${payload.nombre} ${payload.objetivo} ${payload.sistema}`;
      const wa = `https://wa.me/56984012250?text=${encodeURIComponent(text)}`;
      // open whatsapp or fallback mailto
      window.open(wa, "_blank");
    }, 700);
  };

  return (
    <section id="hablemos-baliza" aria-labelledby="baliza-hablemos-title">
      <div className="hablemos-inner">
        <div className="hablemos-form-col">
          <p className="kicker">HABLEMOS</p>
          <h2 id="baliza-hablemos-title" className="h2">Cuenta tu flujo. Te decimos si te sirve.</h2>
          <p className="intro sub">Elige objetivo y sistema actual. Te respondemos hoy con alcance y rango honesto.</p>

          <form ref={formRef} className="baliza-form" onSubmit={onSubmit} noValidate>
            <div className="form-dots" aria-hidden="true"><span /><span /><span /></div>

            <label className="form-label" htmlFor="baliza-nombre">Nombre</label>
            <input id="baliza-nombre" name="nombre" type="text" placeholder="Nombre y apellido" className={errors.nombre ? "input-error" : ""} aria-invalid={!!errors.nombre} aria-describedby={errors.nombre ? "err-baliza-nombre" : undefined} />
            {errors.nombre ? <p id="err-baliza-nombre" className="field-error">{errors.nombre}</p> : null}

            <label className="form-label" htmlFor="baliza-tel">Teléfono</label>
            <input id="baliza-tel" name="telefono" type="tel" placeholder="+56 9 8401 2250" className={errors.telefono ? "input-error" : ""} aria-invalid={!!errors.telefono} aria-describedby={errors.telefono ? "err-baliza-tel" : undefined} />
            {errors.telefono ? <p id="err-baliza-tel" className="field-error">{errors.telefono}</p> : null}

            <label className="form-label" htmlFor="baliza-email">Email</label>
            <input id="baliza-email" name="email" type="email" placeholder="hola@empresa.cl" className={errors.email ? "input-error" : ""} aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-baliza-email" : undefined} />
            {errors.email ? <p id="err-baliza-email" className="field-error">{errors.email}</p> : null}

            <label className="form-label" htmlFor="baliza-objetivo">Objetivo</label>
            <select id="baliza-objetivo" name="objetivo" defaultValue="" className={errors.objetivo ? "input-error" : ""} aria-invalid={!!errors.objetivo}>
              <option value="" disabled>Selecciona objetivo</option>
              <option>Automatizar operación</option>
              <option>Integrar sistemas</option>
              <option>SaaS desde 0</option>
              <option>Migrar datos</option>
              <option>Otro</option>
            </select>
            {errors.objetivo ? <p className="field-error">{errors.objetivo}</p> : null}

            <label className="form-label" htmlFor="baliza-sistema">Sistema actual</label>
            <select id="baliza-sistema" name="sistema" defaultValue="" className={errors.sistema ? "input-error" : ""} aria-invalid={!!errors.sistema}>
              <option value="" disabled>Selecciona sistema</option>
              <option>Excel/Sheets</option>
              <option>ERP</option>
              <option>A mano</option>
              <option>Desarrollo propio</option>
              <option>No tengo</option>
            </select>
            {errors.sistema ? <p className="field-error">{errors.sistema}</p> : null}

            <label className="form-label" htmlFor="baliza-msg">Mensaje</label>
            <textarea id="baliza-msg" name="mensaje" rows={3} placeholder="Cuéntanos flujo y volumen mensual" />

            <label className="form-check">
              <input type="checkbox" name="repo_plano" defaultChecked />
              <span>Quiero repo y plano en mi cuenta desde día 1</span>
            </label>

            {status === "success" ? (
              <div className="form-success" role="status">Te escribimos hoy · revisa tu WhatsApp ✓</div>
            ) : null}

            <button type="submit" className="btn-primary form-cta" disabled={status === "loading"}>
              {status === "loading" ? "Enviando…" : "Agendar demo con tus datos"}
            </button>
            <a href="tel:+56984012250" className="btn-ghost form-sec">Llamar ahora</a>
            {Object.keys(errors).length ? <p className="field-error">Revisa los campos marcados.</p> : null}
          </form>
        </div>

        <div className="hablemos-datos-col">
          <p className="tel-gigante"><span className="tel-mono">+56 9 8401 2250</span> <span className="badge-plano">PLANO</span></p>
          <a href="mailto:hola@baliza.cl" className="email-link">hola@baliza.cl</a>
          <p className="dato-line">Santiago · remoto Chile — deploy en tu cuenta</p>
          <p className="dato-horario">Lun–Vie 09:00–18:30 · Demo con agenda</p>
          <ul className="checklist confianza">
            <li><span className="check">✓</span> Repo tuyo día 1</li>
            <li><span className="check">✓</span> Plano firmado</li>
            <li><span className="check">✓</span> Factura exenta</li>
            <li><span className="check">✓</span> Rollback &lt;5 min</li>
          </ul>
          <MediaImg src="/media/baliza-tile-04-1x1.png" alt="Escuadra inox en diagonal 45° sobre pliego hueso con sombra proyectada larga, composición sello museo" filename="baliza-tile-04-1x1.png" ratio="1/1" className="sello-media" />
        </div>
      </div>
      <div className="footer-bar">
        <p className="footer-line">BALIZA SpA · Santiago · hola@baliza.cl · +56 9 8401 2250</p>
        <p className="footer-copy">© 2026 BALIZA. Valores referenciales; se confirma tras revisión técnica.</p>
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
      <a href="#hablemos-baliza" className="btn-primary sticky-btn">Agendar</a>
    </div>
  );
}

export function App() {
  useEffect(() => {
    const img = new Image();
    img.src = "/media/baliza-hero-9x16.png";
    img.onerror = () => {
      console.warn("[BALIZA] media faltante: baliza-hero-9x16.png no encontrada en public/media/. Usar placeholder con data-falta=\"baliza-hero-9x16.png\" en móvil.");
    };
    // warn for all media if missing (preload check optional, onError in components covers)
    const files = ["baliza-tile-01-1x1.png","baliza-tile-02-3x4.png","baliza-tile-03-1x1.png","baliza-tile-04-1x1.png","baliza-interior-16x9.png","baliza-proof-16x9.png","baliza-og-16x9.png"];
    files.forEach((f) => {
      const im = new Image();
      im.src = `/media/${f}`;
      im.onerror = () => console.warn(`[BALIZA] media faltante: ${f} no encontrada en public/media/. Usando placeholder .media-falta con data-falta="${f}"`);
    });
  }, []);

  return (
    <>
      <a href="#portada" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="baliza-contenido">
        <section id="portada" className="hero" aria-labelledby="baliza-hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">SANTIAGO · REMOTO CHILE · PLANO ANTES QUE CÓDIGO</p>
              <h1 id="baliza-hero-title" className="hero-title">
                Software dibujado a escuadra que queda <span className="underline">funcionando</span>.
              </h1>
              <p className="hero-sub">
                No vendemos horas. Entregamos releases con dueño, plano y demo en tus datos reales. Si no suma, te decimos no.
              </p>
              <div className="hero-ctas">
                <a href="#hablemos-baliza" className="btn-primary">Agenda demo con tus datos</a>
                <a href="#planes-a-la-vista" className="btn-ghost">Ver planes desde $270.000/mes</a>
              </div>
              <div className="banda" aria-label="Atributos">
                <span className="banda-item">Plano + repo tuyo</span>
                <span className="banda-sep" aria-hidden="true">·</span>
                <span className="banda-item">Demo con tus datos</span>
                <span className="banda-sep" aria-hidden="true">·</span>
                <span className="banda-item">SLA por escrito</span>
              </div>
              <p className="micro">Si el alcance crece tras revisar tu sistema, te avisamos antes de codear. Nada parte sin tu ok por escrito.</p>
              <p className="firma">Plano 01 · vitrina · luz norte 5500K</p>
            </div>

            <div className="hero-media-col">
              <HeroMedia />
              <p className="hero-caption">Mesa 01 · pliego hueso + escuadra inox 300mm · sombra 1px</p>
            </div>
          </div>
        </section>

        <SectionStack />
        <SectionIntegraciones />
        <SectionPlanes />
        <SectionEntrega />
        <SectionSoporte />
        <SectionHablemos />
      </main>
      <StickyCta />
    </>
  );
}
