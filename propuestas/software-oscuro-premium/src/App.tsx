import { useEffect, useState, useRef } from "react";

const HERO_DESKTOP = "/media/vertice-hero-16x9.png";
const HERO_MOBILE = "/media/vertice-hero-9x16.png";
const HERO_VIDEO = "/media/vertice-hero-loop.mp4";

const MEDIA_INTERIOR = "/media/vertice-interior-16x9.png";
const MEDIA_PROOF = "/media/vertice-proof-16x9.png";
const MEDIA_T1 = "/media/vertice-tile-01-1x1.png";
const MEDIA_T2 = "/media/vertice-tile-02-3x4.png";
const MEDIA_T3 = "/media/vertice-tile-03-1x1.png";
const MEDIA_T4 = "/media/vertice-tile-04-3x4.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="header__inner">
        <a className="header__logo" href="#vertice" aria-label="Vertice — inicio">
          <span className="header__logo-top">
            <span className="header__logo-name">Vertice</span>
            <span className="header__logo-dot" aria-hidden>
              ·
            </span>
          </span>
          <span className="header__logo-desc">FÁBRICA DE SOFTWARE</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#engagement">Engagement</a>
          <a href="#stack-real">Stack</a>
          <a href="#sla">SLA</a>
          <a href="#casos-industria">Casos</a>
        </nav>

        <a className="header__tel tabular" href="tel:+56981234567">
          +56 9 8123 4567
        </a>

        <a className="header__tel-icon" href="tel:+56981234567" aria-label="Llamar +56 9 8123 4567">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.5 3.5a1 1 0 0 1 1-.9h2.2a1 1 0 0 1 1 .78l.6 3a1 1 0 0 1-.42 1.02l-1.6 1.2a14.5 14.5 0 0 0 5.2 5.2l1.2-1.6a1 1 0 0 1 1.02-.42l3 .6a1 1 0 0 1 .78 1V16a1 1 0 0 1-.9 1A17.5 17.5 0 0 1 3.5 6.5a1 1 0 0 1 .9-1Z" strokeWidth="1.6" />
          </svg>
        </a>

        <button
          className="header__burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <a className="header__cta" href="#agenda-vertice">
          Agendar discovery
        </a>
      </div>

      <div className={`header__drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <a href="#engagement" onClick={() => setOpen(false)}>
          Engagement
        </a>
        <a href="#stack-real" onClick={() => setOpen(false)}>
          Stack
        </a>
        <a href="#sla" onClick={() => setOpen(false)}>
          SLA
        </a>
        <a href="#casos-industria" onClick={() => setOpen(false)}>
          Casos
        </a>
      </div>
    </header>
  );
}

function HeroMedia() {
  const [desktopFailed, setDesktopFailed] = useState(false);
  const [mobileFailed, setMobileFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const check = async (url: string, name: string) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (!res.ok) {
          console.warn(`[Vertice] falta: ${name}`);
        }
      } catch {
        console.warn(`[Vertice] falta: ${name}`);
      }
    };
    check(HERO_DESKTOP, "vertice-hero-16x9.png");
    check(HERO_MOBILE, "vertice-hero-9x16.png");
  }, []);

  const handleDesktopError = () => {
    if (!desktopFailed) {
      console.warn("[Vertice] falta: vertice-hero-16x9.png");
      setDesktopFailed(true);
    }
  };
  const handleMobileError = () => {
    if (!mobileFailed) {
      console.warn("[Vertice] falta: vertice-hero-9x16.png");
      setMobileFailed(true);
    }
  };

  const showFallback = isMobile ? mobileFailed : desktopFailed;

  if (showFallback) {
    const falta = isMobile ? "vertice-hero-9x16.png" : "vertice-hero-16x9.png";
    return (
      <div
        className="media-falta"
        data-falta={falta}
        style={{
          aspectRatio: isMobile ? "9/16" : "16/9",
          background: "#0F172A",
          border: "1px solid rgba(230,234,242,0.10)",
          display: "grid",
          placeItems: "center",
          color: "#6B7C8A",
          font: "500 0.85rem Syne",
        }}
      >
        falta: {falta}
      </div>
    );
  }

  return (
    <div className={`hero-media${isMobile ? " is-mobile" : ""}`}>
      {!videoFailed && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_DESKTOP}
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}
      <picture>
        <source media="(max-width: 767px)" srcSet={HERO_MOBILE} />
        <img
          src={HERO_DESKTOP}
          alt="Prisma obsidiana facetado sobre mesa basalto grafito con haz menta marcando el vértice, luz de arista fría 6200K"
          loading="eager"
          decoding="async"
          onError={() => {
            if (isMobile) handleMobileError();
            else handleDesktopError();
            if (!isMobile) handleDesktopError();
          }}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </picture>
      <img
        src={HERO_MOBILE}
        alt=""
        aria-hidden="true"
        style={{ display: "none" }}
        onError={handleMobileError}
      />
    </div>
  );
}

function MediaTile({
  src,
  alt,
  falta,
  aspect,
}: {
  src: string;
  alt: string;
  falta: string;
  aspect: string;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    // warn if missing via HEAD check
    const check = async () => {
      try {
        const r = await fetch(src, { method: "HEAD" });
        if (!r.ok) {
          console.warn(`[Vertice] falta: ${falta}`);
        }
      } catch {
        console.warn(`[Vertice] falta: ${falta}`);
      }
    };
    check();
  }, [src, falta]);
  if (failed) {
    return (
      <div
        className="media-falta"
        data-falta={falta}
        style={{
          aspectRatio: aspect,
          background: "#0F172A",
          border: "1px solid rgba(230,234,242,0.10)",
          display: "grid",
          placeItems: "center",
          color: "#6B7C8A",
          font: "500 0.85rem Syne",
          width: "100%",
        }}
      >
        falta: {falta}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        console.warn(`[Vertice] falta: ${falta}`);
        setFailed(true);
      }}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );
}

function EngagementSection() {
  return (
    <section id="engagement">
      <div className="eng-grid">
        <div className="eng-header">
          <p className="sec-kicker">ENGAGEMENT · SIN LETRA CHICA</p>
          <h2 className="sec-h2">Tres formas de partir, una sola forma de cobrar</h2>
          <p className="sec-intro">
            Eliges cómo partimos. Cada modalidad con precio desde, qué incluye y qué no. Todo por escrito antes de
            escribir una línea de código.
          </p>
        </div>

        <div className="eng-fichas">
          {/* Ficha A destacada */}
          <div className="eng-ficha eng-ficha--destacada">
            <span className="eng-etiqueta">MÁS PEDIDO</span>
            <p className="eng-num">01</p>
            <h3 className="eng-ficha-title">Squad dedicado</h3>
            <p className="eng-ficha-text">2 dev + 1 QA + 1 lead técnico. Tu repo, tu board, deploy semanal. Mes a mes.</p>
            <ul className="eng-lista">
              <li>Planning lunes · demo viernes</li>
              <li>CI/CD y ambientes listos</li>
              <li>SLA 4h hábil</li>
            </ul>
            <p className="eng-precio tabular">
              <span className="eng-desde">desde</span> $5.900.000 / mes
            </p>
            <a className="eng-cta" href="#agenda-vertice">
              Agendar squad
            </a>
          </div>

          <div className="eng-ficha">
            <p className="eng-num">02</p>
            <h3 className="eng-ficha-title">Proyecto cerrado</h3>
            <p className="eng-ficha-text">Alcance fijo, hitos con demo y pago por entrega. Ideal para MVP o migración.</p>
            <ul className="eng-lista">
              <li>Discovery 2 sem incluido</li>
              <li>Hitos quincenales</li>
              <li>Garantía 30 días bug crítico</li>
            </ul>
            <p className="eng-precio tabular">
              <span className="eng-desde">desde</span> $8.900.000
            </p>
            <a className="eng-cta" href="#agenda-vertice">
              Cotizar proyecto
            </a>
          </div>

          <div className="eng-ficha">
            <p className="eng-num">03</p>
            <h3 className="eng-ficha-title">Staff augmentation</h3>
            <p className="eng-ficha-text">Un perfil senior en tu equipo, con code review de Vertice.</p>
            <ul className="eng-lista">
              <li>Senior fullstack / mobile / data</li>
              <li>40h sem, reporte semanal</li>
              <li>Cambio de perfil en 10 días</li>
            </ul>
            <p className="eng-precio tabular">
              <span className="eng-desde">desde</span> $3.200.000 / perfil / mes
            </p>
            <a className="eng-cta" href="#agenda-vertice">
              Ver perfiles
            </a>
          </div>
        </div>

        <div className="eng-barra">
          <p className="eng-barra-text">
            Valores referenciales; se confirma tras discovery de 2 semanas. Factura en CLP, pago mensual. Sin amarre.
          </p>
          <div className="eng-barra-dots">
            <span>· 6 años</span>
            <span>· 42 productos</span>
            <span>· 98% retención squad</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StackRealSection() {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const check = async () => {
      try {
        const r = await fetch(MEDIA_INTERIOR, { method: "HEAD" });
        if (!r.ok) console.warn("[Vertice] falta: vertice-interior-16x9.png");
      } catch {
        console.warn("[Vertice] falta: vertice-interior-16x9.png");
      }
    };
    check();
  }, []);
  return (
    <section id="stack-real">
      <div className="stack-grid">
        <div className="stack-left">
          <div className="stack-media-wrap">
            {failed ? (
              <div
                className="media-falta"
                data-falta="vertice-interior-16x9.png"
                style={{
                  aspectRatio: "4/3",
                  background: "#0F172A",
                  border: "1px solid rgba(230,234,242,0.10)",
                  display: "grid",
                  placeItems: "center",
                  color: "#6B7C8A",
                  font: "500 0.85rem Syne",
                }}
              >
                falta: vertice-interior-16x9.png
              </div>
            ) : (
              <img
                src={MEDIA_INTERIOR}
                alt="Mesa basalto grafito con diagrama relieve grabado bajo luz rasante fría 6200K, sala control nocturna"
                loading="lazy"
                decoding="async"
                onError={() => {
                  console.warn("[Vertice] falta: vertice-interior-16x9.png");
                  setFailed(true);
                }}
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", border: "1px solid rgba(230,234,242,0.10)", display: "block" }}
              />
            )}
            <p className="stack-caption">Mesa 02 · basalto grabado · luz rasante 6200K</p>
          </div>
        </div>
        <div className="stack-right">
          <p className="sec-kicker">STACK REAL · SIN HUMO</p>
          <h2 className="sec-h2">Lo que tocamos todos los días</h2>
          <p className="sec-intro">No listamos todo lo que existe. Esto es lo que operamos en producción hoy, con pipeline y on-call reales.</p>

          <div className="stack-cols">
            <div className="stack-col">
              <p className="stack-grupo">FRONT &amp; MOBILE</p>
              <ul className="stack-items">
                <li>
                  <span className="stack-dot" />
                  Next.js / React 19
                </li>
                <li>
                  <span className="stack-dot" />
                  React Native
                </li>
                <li>
                  <span className="stack-dot" />
                  TypeScript
                </li>
              </ul>
              <p className="stack-nota">build &lt;2min, preview por PR</p>
            </div>
            <div className="stack-col">
              <p className="stack-grupo">BACK &amp; DATA</p>
              <ul className="stack-items">
                <li>
                  <span className="stack-dot" />
                  Node / Nest · Python / FastAPI
                </li>
                <li>
                  <span className="stack-dot" />
                  Postgres · Redis · BigQuery
                </li>
                <li>
                  <span className="stack-dot" />
                  AWS / GCP · Terraform
                </li>
              </ul>
              <p className="stack-nota">infra como código, no consola a mano</p>
            </div>
            <div className="stack-full">
              <p className="stack-grupo">PIPELINE</p>
              <p className="stack-pipeline">GitHub Actions · Vercel / Cloud Run · Datadog · Sentry — deploy diario, rollback 1 click</p>
            </div>
          </div>

          <div className="stack-nota-honesta">Si tu stack no está acá, lo evaluamos en el discovery. No improvisamos en producción.</div>
        </div>
      </div>
    </section>
  );
}

function SlaSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="sla">
      <div className="sla-wrap">
        <p className="sec-kicker">SLA · RESPUESTA REAL</p>
        <h2 className="sec-h2 sla-h2">Tiempos con nombre, no 'soporte 24/7'</h2>
        <p className="sec-intro sla-intro">3 ambientes siempre: dev · staging · prod. Cada entrega con demo grabada y notas.</p>

        {/* Tabla desktop */}
        <div className="sla-tabla" role="table" aria-label="Tabla SLA">
          <div className="sla-row sla-head" role="row">
            <div className="sla-cell sla-cell--empty" role="columnheader" />
            <div className="sla-cell" role="columnheader">
              DISCOVERY (2 sem)
            </div>
            <div className="sla-cell" role="columnheader">
              SQUAD MES
            </div>
            <div className="sla-cell" role="columnheader">
              POST-GO LIVE
            </div>
          </div>
          <div className="sla-row" role="row">
            <div className="sla-cell sla-cell--label" role="rowheader">
              Qué entregas
            </div>
            <div className="sla-cell" role="cell">
              Mapa, riesgos, plan y presupuesto por escrito
            </div>
            <div className="sla-cell" role="cell">
              Demo viernes + deploy staging
            </div>
            <div className="sla-cell" role="cell">
              Hotfix crítico + monitoreo
            </div>
          </div>
          <div className="sla-row" role="row">
            <div className="sla-cell sla-cell--label" role="rowheader">
              Tiempo respuesta
            </div>
            <div className="sla-cell" role="cell">
              24h hábil
            </div>
            <div className="sla-cell" role="cell">
              4h hábil (Slack)
            </div>
            <div className="sla-cell" role="cell">
              2h hábil crítico / 8h mayor
            </div>
          </div>
          <div className="sla-row" role="row">
            <div className="sla-cell sla-cell--label" role="rowheader">
              Si no cumplimos
            </div>
            <div className="sla-cell" role="cell">
              No se cobra
            </div>
            <div className="sla-cell" role="cell">
              Día de crédito
            </div>
            <div className="sla-cell" role="cell">
              Crédito proporcional
            </div>
          </div>
          <div className="sla-row" role="row">
            <div className="sla-cell sla-cell--label" role="rowheader">
              Rituales
            </div>
            <div className="sla-cell" role="cell">
              Kickoff + cierre
            </div>
            <div className="sla-cell" role="cell">
              Planning lun · demo vie
            </div>
            <div className="sla-cell" role="cell">
              Guardia rotativa Vertice
            </div>
          </div>
        </div>

        {/* Cards colapsadas mobile */}
        <div className="sla-cards">
          <div className="sla-card">
            <div className="sla-card-head">DISCOVERY (2 sem)</div>
            <div className="sla-card-row">
              <span>Qué entregas</span>
              <span>Mapa, riesgos, plan y presupuesto por escrito</span>
            </div>
            <div className="sla-card-row">
              <span>Tiempo respuesta</span>
              <span>24h hábil</span>
            </div>
            <div className="sla-card-row">
              <span>Si no cumplimos</span>
              <span>No se cobra</span>
            </div>
            <div className="sla-card-row">
              <span>Rituales</span>
              <span>Kickoff + cierre</span>
            </div>
          </div>
          <div className="sla-card">
            <div className="sla-card-head">SQUAD MES</div>
            <div className="sla-card-row">
              <span>Qué entregas</span>
              <span>Demo viernes + deploy staging</span>
            </div>
            <div className="sla-card-row">
              <span>Tiempo respuesta</span>
              <span>4h hábil (Slack)</span>
            </div>
            <div className="sla-card-row">
              <span>Si no cumplimos</span>
              <span>Día de crédito</span>
            </div>
            <div className="sla-card-row">
              <span>Rituales</span>
              <span>Planning lun · demo vie</span>
            </div>
          </div>
          <div className="sla-card">
            <div className="sla-card-head">POST-GO LIVE</div>
            <div className="sla-card-row">
              <span>Qué entregas</span>
              <span>Hotfix crítico + monitoreo</span>
            </div>
            <div className="sla-card-row">
              <span>Tiempo respuesta</span>
              <span>2h hábil crítico / 8h mayor</span>
            </div>
            <div className="sla-card-row">
              <span>Si no cumplimos</span>
              <span>Crédito proporcional</span>
            </div>
            <div className="sla-card-row">
              <span>Rituales</span>
              <span>Guardia rotativa Vertice</span>
            </div>
          </div>
        </div>

        <p className="sla-nota">Horario hábil Chile Lun–Vie 9:00–19:00. Crítico = caída prod sin workaround.</p>

        <div className="sla-acordeon" role="region" aria-label="Preguntas SLA">
          {[
            {
              q: "¿Partimos sin discovery?",
              a: "No. 2 semanas para mapear riesgos. Si ya tienes spec cerrada, lo acortamos a 1 semana por $950.000.",
            },
            {
              q: "¿El código es mío?",
              a: "100% tuyo desde el día 1. Repo en tu GitHub, con acceso completo. Sin retención.",
            },
            {
              q: "¿Puedo pausar el squad?",
              a: "Sí, con 15 días de aviso. Retomas con el mismo equipo si hay disponibilidad, si no con onboarding en 3 días.",
            },
          ].map((item, idx) => (
            <div key={idx} className={`sla-acc-item${openIdx === idx ? " open" : ""}`}>
              <button className="sla-acc-trigger" onClick={() => setOpenIdx(openIdx === idx ? null : idx)} aria-expanded={openIdx === idx}>
                <span>{item.q}</span>
                <span className="sla-chevron" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5L7 9L11 5" stroke="#2EE5A6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className="sla-acc-body" style={{ display: openIdx === idx ? "block" : "none" }}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasosIndustriaSection() {
  return (
    <section id="casos-industria">
      <div className="casos-wrap">
        <p className="sec-kicker">CASOS POR INDUSTRIA · CHILE</p>
        <h2 className="sec-h2 casos-h2">Mismo método, distinto dominio</h2>
        <p className="sec-intro casos-sub">Sin nombres de clientes inventados. Métricas y stacks que puedes auditar en demo.</p>

        <div className="casos-grid">
          <div className="caso-caja">
            <div className="caso-img-wrap caso-img--1x1">
              <MediaTile src={MEDIA_T1} falta="vertice-tile-01-1x1.png" alt="Prisma obsidiana cenital sobre basalto con arista iluminada, grano de piedra visible" aspect="1/1" />
            </div>
            <div className="caso-text">
              <p className="caso-num">01</p>
              <h3 className="caso-title">WMS liviano para bodega</h3>
              <p className="caso-desc">PDA + picking + despacho RM/regiones. Stock en línea sin Excel.</p>
              <p className="caso-meta tabular">— 38% menos quiebres · Next.js + Postgres</p>
            </div>
          </div>

          <div className="caso-caja caso-caja--alt">
            <div className="caso-img-wrap caso-img--3x4">
              <MediaTile src={MEDIA_T2} falta="vertice-tile-02-3x4.png" alt="Diagrama en relieve grabado sobre basalto con nodos geométricos, luz rasante fría" aspect="3/4" />
            </div>
            <div className="caso-text">
              <p className="caso-num caso-num--lila">02</p>
              <h3 className="caso-title">Conciliación bancaria diaria</h3>
              <p className="caso-desc">Match automático + reporte SII. De 3 días a 2 horas.</p>
              <p className="caso-meta caso-meta--lila tabular">— 92% auto-match · Python + BigQuery</p>
            </div>
          </div>

          <div className="caso-caja">
            <div className="caso-img-wrap caso-img--1x1">
              <MediaTile src={MEDIA_T3} falta="vertice-tile-03-1x1.png" alt="Pizarra vidrio ahumado con trazo fino menta convergente en vértice, bokeh noche" aspect="1/1" />
            </div>
            <div className="caso-text">
              <p className="caso-num">03</p>
              <h3 className="caso-title">Agenda con lista de espera</h3>
              <p className="caso-desc">Sobreventa controlada, re-agenda 1 click y recordatorio WA.</p>
              <p className="caso-meta tabular">— 21% menos no-show · React Native + Node</p>
            </div>
          </div>

          <div className="caso-caja caso-caja--alt">
            <div className="caso-img-wrap caso-img--3x4">
              <MediaTile src={MEDIA_T4} falta="vertice-tile-04-3x4.png" alt="Prisma obsidiana en tres cuartos con faceta pulida reflejando haz lila tenue, basalto abajo" aspect="3/4" />
            </div>
            <div className="caso-text">
              <p className="caso-num caso-num--lila">04</p>
              <h3 className="caso-title">Post-venta y mantenciones</h3>
              <p className="caso-desc">Ticket + cuadrilla + SLA por comuna. Foto antes/después operativa, no comercial.</p>
              <p className="caso-meta caso-meta--lila tabular">— 4.2 días → 1.1 día cierre · Nest + Postgres</p>
            </div>
          </div>
        </div>

        <p className="casos-prueba tabular">· 6 años · 42 productos en prod · 18 squads activos 2025 · 98% sigue después del mes 3</p>
      </div>
    </section>
  );
}

function AgendaVerticeSection() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [desafio, setDesafio] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [detalle, setDetalle] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [proofFailed, setProofFailed] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const r = await fetch(MEDIA_PROOF, { method: "HEAD" });
        if (!r.ok) console.warn("[Vertice] falta: vertice-proof-16x9.png");
      } catch {
        console.warn("[Vertice] falta: vertice-proof-16x9.png");
      }
    };
    check();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    // validation
    if (!nombre.trim()) {
      setErrorMsg("Ingresa tu nombre.");
      setStatus("error");
      return;
    }
    if (!telefono.trim()) {
      setErrorMsg("Ingresa tu teléfono.");
      setStatus("error");
      return;
    }
    // simple tel pattern: must include +56 or 9 digits
    const telValid = /\+56|9\d{7,}/.test(telefono);
    if (!telValid) {
      setErrorMsg("Teléfono con formato +56 9 1234 5678.");
      setStatus("error");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Email con formato hola@empresa.cl.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    // simulate async
    setTimeout(() => {
      try {
        const payload = { nombre, telefono, email, empresa, desafio, presupuesto, detalle, whatsapp, at: new Date().toISOString() };
        localStorage.setItem("vertice-lead", JSON.stringify(payload));
      } catch {}
      const text = `Hola Vertice, soy ${encodeURIComponent(nombre)} de ${encodeURIComponent(empresa || "")} — ${encodeURIComponent(desafio || "")} — ${encodeURIComponent(detalle || "")}`;
      const wa = `https://wa.me/56981234567?text=${text}`;
      // open wa or mailto fallback
      try {
        window.open(wa, "_blank");
      } catch {
        window.location.href = `mailto:hola@vertice.cl?subject=Discovery%20Vertice&body=${text}`;
      }
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  return (
    <section id="agenda-vertice">
      <div className="agenda-grid">
        <div className="agenda-left">
          <p className="sec-kicker">AGENDA · DISCOVERY</p>
          <h2 className="sec-h2">Agenda el discovery. Te responden hoy.</h2>
          <p className="sec-intro">2 semanas, plan con riesgos y presupuesto por escrito. Si no te sirve, no lo cobramos.</p>

          <form className="agenda-form" onSubmit={handleSubmit} noValidate>
            <div className="agenda-field">
              <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required aria-label="Tu nombre" />
            </div>
            <div className="agenda-field">
              <input
                type="tel"
                placeholder="+56 9 1234 5678"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                aria-label="Teléfono"
                pattern=".*\+56.*"
              />
            </div>
            <div className="agenda-field">
              <input type="email" placeholder="hola@empresa.cl" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
            </div>
            <div className="agenda-field">
              <input type="text" placeholder="Empresa / rubro" value={empresa} onChange={(e) => setEmpresa(e.target.value)} aria-label="Empresa / rubro" />
            </div>
            <div className="agenda-field">
              <select value={desafio} onChange={(e) => setDesafio(e.target.value)} aria-label="Desafío">
                <option value="">Desafío</option>
                <option value="MVP/migración">MVP / migración</option>
                <option value="Automatizar operación">Automatizar operación</option>
                <option value="App clientes">App clientes</option>
                <option value="Datos/integración">Datos / integración</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="agenda-field">
              <select value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} aria-label="Presupuesto">
                <option value="">Presupuesto</option>
                <option value="$3–6M/mes">$3–6M/mes</option>
                <option value="$6–10M/mes">$6–10M/mes</option>
                <option value="$10M+/mes">$10M+/mes</option>
                <option value="Por definir">Por definir</option>
              </select>
            </div>
            <div className="agenda-field agenda-field--full">
              <textarea placeholder="En 2 líneas: qué necesitas y qué duele hoy" rows={3} value={detalle} onChange={(e) => setDetalle(e.target.value)} aria-label="Detalle del desafío" />
            </div>
            <label className="agenda-check">
              <input type="checkbox" checked={whatsapp} onChange={(e) => setWhatsapp(e.target.checked)} />
              <span>Acepto que me contacten por WhatsApp</span>
            </label>

            {status === "error" && <p className="agenda-error">{errorMsg}</p>}
            {status === "success" && (
              <div className="agenda-success">
                <span className="agenda-success-check">✓</span> Te escribimos hoy · revisa tu WhatsApp
              </div>
            )}

            <button type="submit" className="agenda-submit" disabled={status === "loading"}>
              {status === "loading" ? "Enviando…" : "Agendar discovery — $1.900.000 / 2 sem"}
            </button>
            <p className="agenda-honest">Valores referenciales; se confirma tras discovery.</p>
          </form>
        </div>

        <div className="agenda-right">
          <a className="agenda-tel tabular" href="tel:+56981234567">
            +56 9 8123 4567
          </a>
          <a className="agenda-email" href="mailto:hola@vertice.cl">
            hola@vertice.cl
          </a>
          <p className="agenda-addr">Av. Apoquindo 4700, Las Condes, Santiago</p>
          <p className="agenda-horario">Lun–Vie 9:00–19:00 · discovery remoto o presencial</p>
          <div className="agenda-barra">
            <span className="agenda-dot" />
            <span>Respuesta hábil &lt;4h · repo tuyo día 1</span>
          </div>

          <div className="agenda-proof-wrap">
            {proofFailed ? (
              <div
                className="media-falta"
                data-falta="vertice-proof-16x9.png"
                style={{
                  aspectRatio: "16/9",
                  background: "#0F172A",
                  border: "1px solid rgba(230,234,242,0.10)",
                  display: "grid",
                  placeItems: "center",
                  color: "#6B7C8A",
                  font: "500 0.85rem Syne",
                }}
              >
                falta: vertice-proof-16x9.png
              </div>
            ) : (
              <img
                src={MEDIA_PROOF}
                alt="Sala control nocturna vacía con basalto, vidrio ahumado y mesa alineada, prisma desenfocado al fondo"
                loading="lazy"
                decoding="async"
                onError={() => {
                  console.warn("[Vertice] falta: vertice-proof-16x9.png");
                  setProofFailed(true);
                }}
                style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", border: "1px solid rgba(230,234,242,0.10)", display: "block" }}
              />
            )}
          </div>

          <p className="agenda-confianza">Factura CLP · boleta reembolsable si aplica · sin amarre mes a mes</p>
        </div>
      </div>

      <footer className="agenda-footer">
        <div className="agenda-footer-inner">
          <p className="agenda-footer-line">Vertice SpA · Av. Apoquindo 4700, Las Condes · hola@vertice.cl · +56 9 8123 4567</p>
          <p className="agenda-footer-copy">© 2026 Vertice. Todos los derechos reservados. Valores referenciales.</p>
        </div>
      </footer>
    </section>
  );
}

function MobileSticky() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Use IntersectionObserver for 40% scroll: observe a sentinel at 40% height
    // Simpler: scroll listener checking ratio
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? window.scrollY / total : 0;
      const shouldShow = ratio > 0.4;
      setVisible(shouldShow);
      if (shouldShow) {
        document.body.style.paddingBottom = "72px";
      } else {
        document.body.style.paddingBottom = "";
      }
    };
    // Initial check
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // also use IntersectionObserver on engagement section to trigger after hero scrolled
    const el = document.getElementById("engagement");
    let obs: IntersectionObserver | null = null;
    if (el && "IntersectionObserver" in window) {
      obs = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          if (!e) return;
          // when engagement enters viewport, show sticky
          if (e.isIntersecting && !reduced) {
            // rely on scroll logic as well
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (obs && el) obs.unobserve(el);
      document.body.style.paddingBottom = "";
    };
  }, []);

  // hide sticky when agenda visible? keep visible per spec: appears after 40% and stays
  // add no animation if reduced motion
  const style: React.CSSProperties = visible ? { transform: "translateY(0)", opacity: 1 } : { transform: "translateY(100%)", opacity: 0 };
  const reduced = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  if (reduced) {
    style.transition = "none";
  }

  return (
    <>
      <div ref={sentinelRef} aria-hidden style={{ position: "absolute", top: "40vh", height: 1, width: 1 }} />
      <div className="mobile-sticky" style={style} aria-hidden={!visible}>
        <a href="#agenda-vertice" className="mobile-sticky-cta">
          Agendar discovery
        </a>
      </div>
    </>
  );
}

export function App() {
  return (
    <>
      <Header />
      <section id="vertice">
        <div className="hero-grid">
          <div className="hero-left">
            <p className="hero-kicker">FÁBRICA DE SOFTWARE · SANTIAGO — SQUAD DESDE 2019</p>
            <h1 className="hero-h1">Squad fijo en dos semanas con demo real.</h1>
            <p className="hero-sub">
              No vendemos horas sueltas. Un equipo dedicado, tu stack real y un demo navegable en 14 días. Si no ves avance, no sigues.
            </p>

            <div className="hero-ctas">
              <a className="hero-cta-primary" href="#agenda-vertice">
                Agendar discovery
              </a>
              <a className="hero-cta-ghost" href="#stack-real">
                Ver stack real
              </a>
            </div>

            <div className="hero-banda" aria-label="Garantías">
              <span className="hero-banda-item" style={{ animationDelay: "0ms" }}>
                Demo día 14 o no facturamos
              </span>
              <span className="hero-banda-item" style={{ animationDelay: "60ms" }}>
                Tu repo desde el día 1
              </span>
              <span className="hero-banda-item" style={{ animationDelay: "120ms" }}>
                Sin amarre: mes a mes
              </span>
            </div>

            <p className="hero-micro">Si el discovery no te da un plan con riesgos y costos por escrito, no lo cobramos.</p>

            <p className="hero-firma">VÉRTICE 01 — Santiago · noche basalto</p>
          </div>

          <div className="hero-right">
            <HeroMedia />
            <p className="hero-caption">Vértice 01 · basalto + obsidiana · haz 6200K</p>
          </div>
        </div>
      </section>

      <EngagementSection />
      <StackRealSection />
      <SlaSection />
      <CasosIndustriaSection />
      <AgendaVerticeSection />
      <MobileSticky />
    </>
  );
}
