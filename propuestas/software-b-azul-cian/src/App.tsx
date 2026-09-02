import { useState, useEffect, useRef } from "react";

const base = import.meta.env.BASE_URL;
const mediaBase = `${base}media/`;

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      const diff = y - lastY;
      if (y < 80) {
        setHidden(false);
      } else if (diff > 6 && y > 100) {
        setHidden(true);
      } else if (diff < -6) {
        setHidden(false);
      }
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on resize >900
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900 && open) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className={`site-header ${hidden && !open ? "header-hidden" : ""}`}>
      <div className="header-inner">
        <a href="#continuidad" className="header-logo" aria-label="ALTIVA inicio">
          <span className="logo-altiva">
            ALTIVA<span className="logo-dot">·</span>
          </span>
          <span className="logo-descriptor">TECNOLOGÍA CORPORATIVA · SANTIAGO</span>
        </a>

        <nav className="header-nav" aria-label="Principal">
          <a href="#parque-instalado">Parque</a>
          <a href="#cobertura-sla">Cobertura</a>
          <a href="#planes-soporte">Planes</a>
          <a href="#pase-a-produccion">Pase</a>
          <a href="#guardia-tecnica">Guardia</a>
        </nav>

        <div className="header-tel-wrap" aria-label="Teléfono">
          <span className="header-tel-etiqueta">¿Problema ahora?</span>
          <a href="tel:+56229654821" className="header-tel">
            +56 2 2965 4821
          </a>
        </div>

        <div className="header-cta">
          <a href="#conversemos">Solicitar evaluación</a>
        </div>

        <a
          className="header-tel-icon"
          href="tel:+56229654821"
          aria-label="Llamar +56 2 2965 4821"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.07 12.81 19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.21.4 2.39.82 3.5a2 2 0 0 1-.57 2.11L8.09 10.49a16 16 0 0 0 5.42 5.42l1.16-1.16a2 2 0 0 1 2.11-.57c1.11.42 2.29.7 3.5.82A2 2 0 0 1 22 16.92Z" />
          </svg>
        </a>

        <button
          className="header-hamburger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav className={`header-mobile-nav ${open ? "open" : ""}`} aria-label="Móvil">
        <a href="#parque-instalado" onClick={() => setOpen(false)}>
          Parque
        </a>
        <a href="#cobertura-sla" onClick={() => setOpen(false)}>
          Cobertura
        </a>
        <a href="#planes-soporte" onClick={() => setOpen(false)}>
          Planes
        </a>
        <a href="#pase-a-produccion" onClick={() => setOpen(false)}>
          Pase
        </a>
        <a href="#guardia-tecnica" onClick={() => setOpen(false)}>
          Guardia
        </a>
        <a href="tel:+56229654821" onClick={() => setOpen(false)}>
          +56 2 2965 4821
        </a>
        <a href="#conversemos" onClick={() => setOpen(false)}>
          Solicitar evaluación
        </a>
      </nav>
    </header>
  );
}

function HeroFoto() {
  const [missingDesktop, setMissingDesktop] = useState(false);
  const [missingMobile, setMissingMobile] = useState(false);

  const desktopSrc = `${mediaBase}altiva-hero-16x9.png`;
  const mobileSrc = `${mediaBase}altiva-hero-9x16.png`;

  return (
    <>
      {/* Desktop 16:9 */}
      <div className="hero-foto-desktop" style={{ width: "100%" }}>
        {missingDesktop ? (
          <div
            className="media-falta hero-foto-wrap"
            data-falta="altiva-hero-16x9.png"
            style={{
              aspectRatio: "16/9",
              border: "1px dashed #DCE3E8",
              display: "grid",
              placeItems: "center",
              color: "#8A95AD",
              font: "500 0.85rem \"DM Sans\", sans-serif",
            }}
          >
            falta: altiva-hero-16x9.png
          </div>
        ) : (
          <div className="hero-foto-wrap">
            <img
              src={desktopSrc}
              alt="Patch panel peinado 15 mm con cables azules sobre bandeja metálica, luz fría 5000K"
              loading="eager"
              decoding="async"
              onError={() => {
                console.warn("falta: altiva-hero-16x9.png");
                setMissingDesktop(true);
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile 9:16 */}
      <div className="hero-foto-mobile" style={{ width: "100%" }}>
        {missingMobile ? (
          <div
            className="media-falta hero-foto-wrap"
            data-falta="altiva-hero-9x16.png"
            style={{
              aspectRatio: "9/16",
              border: "1px dashed #DCE3E8",
              display: "grid",
              placeItems: "center",
              color: "#8A95AD",
              font: "500 0.85rem \"DM Sans\", sans-serif",
            }}
          >
            falta: altiva-hero-9x16.png
          </div>
        ) : (
          <div className="hero-foto-wrap">
            <img
              src={mobileSrc}
              alt="Patch panel peinado vertical 9:16, cables azules etiquetados, luz fría lateral"
              loading="eager"
              decoding="async"
              onError={() => {
                console.warn("falta: altiva-hero-9x16.png");
                setMissingMobile(true);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="continuidad" aria-label="Continuidad">
      <div className="hero-grid">
        {/* Franja foto - en móvil va arriba (order 1 via CSS), en desktop abajo col 1-12 */}
        <div className="hero-franja">
          <HeroFoto />
          <p className="hero-caption">Franja 01 · patch panel peinado 15 mm · filete cian 1px</p>
        </div>

        <div className="hero-left">
          <p className="kicker">
            <span className="kicker-dot" aria-hidden="true" />
            TECNOLOGÍA CORPORATIVA · SANTIAGO — PROVEEDOR TI DESDE 2009
          </p>
          <h1 className="hero-h1">
            Tu empresa <span className="u-underline">funcionando</span> sin cortes, con soporte que contesta y <span className="u-accent">respalda</span> hoy
          </h1>
          <p className="hero-sub">
            Soporte informático, redes y sistemas para pymes que no pueden detenerse. Respuesta en menos de 2 horas hábiles, compromiso
            por escrito y repo en tu cuenta.
          </p>

          <div className="hero-ctas">
            <a href="#conversemos" className="btn-primary">
              Solicitar evaluación
            </a>
            <a href="#planes-soporte" className="btn-ghost">
              Ver planes desde $280.000/mes
            </a>
          </div>

          <div className="hero-banda" aria-label="Garantías">
            <span className="hero-banda-item">
              <span className="hero-banda-dot" aria-hidden="true">
                ·
              </span>{" "}
              SLA por escrito
            </span>
            <span className="hero-banda-item">
              <span className="hero-banda-dot" aria-hidden="true">
                ·
              </span>{" "}
              Técnicos certificados
            </span>
            <span className="hero-banda-item">
              <span className="hero-banda-dot" aria-hidden="true">
                ·
              </span>{" "}
              Respuesta &lt; 2 hrs hábiles
            </span>
          </div>

          <p className="hero-micro">
            Si el diagnóstico muestra que no necesitas cambio, te lo decimos antes de cotizar. Nada parte sin tu ok por escrito.
          </p>
          <p className="hero-firma">Central 01 · patch panel · luz 5000K</p>
        </div>

        <div className="hero-right">
          <div className="indice-panel" aria-label="Cobertura en 6 puntos">
            <p className="indice-titulo">COBERTURA EN 6 PUNTOS</p>
            <div className="indice-lista">
              <a href="#parque-instalado" className="indice-fila">
                <span className="indice-num">01</span>
                <span className="indice-text">
                  <span className="indice-title">HelpDesk con dueño</span>
                  <span className="indice-sub">Ticket con responsable, no rebote</span>
                </span>
              </a>
              <a href="#cobertura-sla" className="indice-fila">
                <span className="indice-num">02</span>
                <span className="indice-text">
                  <span className="indice-title">Redes y conectividad</span>
                  <span className="indice-sub">Switching, Wi-Fi, VPN sin cortes</span>
                </span>
              </a>
              <a href="#cobertura-sla" className="indice-fila">
                <span className="indice-num">03</span>
                <span className="indice-text">
                  <span className="indice-title">Ciberseguridad base</span>
                  <span className="indice-sub">Hardening + respaldo + monitoreo</span>
                </span>
              </a>
              <a href="#cobertura-sla" className="indice-fila">
                <span className="indice-num">04</span>
                <span className="indice-text">
                  <span className="indice-title">Respaldo y continuidad</span>
                  <span className="indice-sub">Backup diario + prueba de restore</span>
                </span>
              </a>
              <a href="#parque-instalado" className="indice-fila">
                <span className="indice-num">05</span>
                <span className="indice-text">
                  <span className="indice-title">Microsoft 365 / Google</span>
                  <span className="indice-sub">Migración y administración</span>
                </span>
              </a>
              <a href="#guardia-tecnica" className="indice-fila">
                <span className="indice-num">06</span>
                <span className="indice-text">
                  <span className="indice-title">Equipos y arriendo</span>
                  <span className="indice-sub">Inventario y recambio programado</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Hook reveal stagger */
function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ParqueInstalado() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  return (
    <section id="parque-instalado" aria-label="Parque instalado">
      <div className="container">
        <div ref={ref as any} className="reveal">
          <p className="kicker">PARQUE INSTALADO</p>
          <h2 className="section-h2">Cuidamos lo que ya tienes. Sin vender fierros primero.</h2>
          <p className="section-intro">Levantamos tu red, licencias y equipos en una tarde. Inventario con dueño y fecha. Sin auditoría eterna.</p>

          <div className="parque-grid">
            {/* Bloque 1 */}
            <div className="parque-bloque reveal-child">
              <div className="parque-media-wrap" style={{ aspectRatio: "1/1" }}>
                {m1 ? (
                  <div className="media-falta" data-falta="altiva-tile-01-1x1.png" style={{ aspectRatio: "1/1" }}>
                    falta: altiva-tile-01-1x1.png
                  </div>
                ) : (
                  <img
                    src={`${mediaBase}altiva-tile-01-1x1.png`}
                    alt="Detalle patch panel cables azules etiquetados a 15mm sobre bandeja metálica"
                    loading="lazy"
                    onError={() => {
                      console.warn("falta: altiva-tile-01-1x1.png");
                      setM1(true);
                    }}
                  />
                )}
              </div>
              <h3 className="parque-title">Red y conectividad</h3>
              <p className="parque-text">Switches, APs, firewall y VPN. Cableado peinado y documentado.</p>
              <ul className="parque-bullets">
                <li>Mapa de red entregado</li>
                <li>Etiquetado por punto</li>
              </ul>
            </div>

            {/* Bloque 2 */}
            <div className="parque-bloque reveal-child">
              <div className="parque-media-wrap" style={{ aspectRatio: "3/4" }}>
                {m2 ? (
                  <div className="media-falta" data-falta="altiva-tile-02-3x4.png" style={{ aspectRatio: "3/4" }}>
                    falta: altiva-tile-02-3x4.png
                  </div>
                ) : (
                  <img
                    src={`${mediaBase}altiva-tile-02-3x4.png`}
                    alt="Vitrina esmerilada con reflejo azul suave y mesa técnica vacía"
                    loading="lazy"
                    onError={() => {
                      console.warn("falta: altiva-tile-02-3x4.png");
                      setM2(true);
                    }}
                  />
                )}
              </div>
              <h3 className="parque-title">Puestos y licencias</h3>
              <p className="parque-text">Microsoft 365 / Google, antivirus, backup. Sin licencias fantasma.</p>
              <ul className="parque-bullets">
                <li>Inventario por usuario</li>
                <li>Renovaciones calendarizadas</li>
              </ul>
            </div>

            {/* Bloque 3 */}
            <div className="parque-bloque reveal-child">
              <div className="parque-media-wrap" style={{ aspectRatio: "1/1" }}>
                {m3 ? (
                  <div className="media-falta" data-falta="altiva-tile-03-1x1.png" style={{ aspectRatio: "1/1" }}>
                    falta: altiva-tile-03-1x1.png
                  </div>
                ) : (
                  <img
                    src={`${mediaBase}altiva-tile-03-1x1.png`}
                    alt="Diagrama topología de red impreso sobre mesa blanca con regla metálica"
                    loading="lazy"
                    onError={() => {
                      console.warn("falta: altiva-tile-03-1x1.png");
                      setM3(true);
                    }}
                  />
                )}
              </div>
              <h3 className="parque-title">Respaldos a prueba</h3>
              <p className="parque-text">Backup diario con prueba de restore mensual en tu cuenta.</p>
              <ul className="parque-bullets">
                <li>Restore testeado</li>
                <li>Bitácora mensual</li>
              </ul>
            </div>
          </div>

          <p className="parque-nota">Si tu proveedor anterior no entrega claves, las recuperamos sin detener la operación.</p>
          <div className="parque-precio">Levantamiento e inventario desde $490.000 — se descuenta si sigues a plan.</div>
        </div>
      </div>
    </section>
  );
}

function CoberturaSla() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;
  const [missing, setMissing] = useState(false);
  return (
    <section id="cobertura-sla" aria-label="Cobertura SLA">
      <div className="container">
        <div ref={ref as any} className="reveal cobertura-grid">
          <div className="cobertura-left">
            <div className="cobertura-media-wrap">
              {missing ? (
                <div className="media-falta" data-falta="altiva-interior-16x9.png" style={{ aspectRatio: "4/3" }}>
                  falta: altiva-interior-16x9.png
                </div>
              ) : (
                <img
                  src={`${mediaBase}altiva-interior-16x9.png`}
                  alt="Hall corporativo vidrio y acero vacío, luz 5000K suelo pulido reflejo cian"
                  loading="lazy"
                  onError={() => {
                    console.warn("falta: altiva-interior-16x9.png");
                    setMissing(true);
                  }}
                />
              )}
            </div>
            <p className="media-caption">Hall 01 · vidrio + acero · luz 5000K</p>
          </div>
          <div className="cobertura-right">
            <p className="kicker">COBERTURA</p>
            <h2 className="section-h2">Respuesta con responsable, no con call center.</h2>
            <p className="section-intro" style={{ maxWidth: "56ch" }}>
              Asignamos técnico con nombre y teléfono. Ves estado del ticket sin llamar dos veces.
            </p>

            <div className="cobertura-lista">
              <div className="cobertura-item reveal-child">
                <div className="cobertura-line">
                  <span className="cobertura-nodo" />
                </div>
                <div className="cobertura-content">
                  <p className="cobertura-num">01 · HelpDesk con dueño</p>
                  <p className="cobertura-desc">Ticket con responsable, seguimiento por WhatsApp o mail, cierre con tu ok.</p>
                </div>
              </div>
              <div className="cobertura-item reveal-child">
                <div className="cobertura-line">
                  <span className="cobertura-nodo" />
                </div>
                <div className="cobertura-content">
                  <p className="cobertura-num">02 · Redes sin cortes</p>
                  <p className="cobertura-desc">Switching, Wi-Fi, VPN y firewall con monitoreo y reporte mensual.</p>
                </div>
              </div>
              <div className="cobertura-item reveal-child">
                <div className="cobertura-line">
                  <span className="cobertura-nodo" />
                </div>
                <div className="cobertura-content">
                  <p className="cobertura-num">03 · Continuidad probada</p>
                  <p className="cobertura-desc">Backup diario + restore mensual documentado en tu cuenta.</p>
                </div>
              </div>
              <div className="cobertura-item reveal-child">
                <div className="cobertura-line">
                  <span className="cobertura-nodo" />
                </div>
                <div className="cobertura-content">
                  <p className="cobertura-num">04 · Equipos al día</p>
                  <p className="cobertura-desc">Inventario, recambio programado y arriendo con SLA.</p>
                </div>
              </div>
            </div>

            <ul className="cobertura-checks">
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Ticket con dueño
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Reporte mensual
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Claves en tu cuenta
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Descuento si no cumplimos SLA
              </li>
            </ul>

            <div className="precio-inline">Visita de diagnóstico sin costo si contratas plan — inventario incluido.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANES = [
  { prest: "Plan Esencial — hasta 15 usuarios", precio: "$380.000 / mes", nota: "10 h remotas + 1 visita, SLA <4h hábil, reporte mensual" },
  { prest: "Plan Corporativo — hasta 50 usuarios", precio: "$680.000 / mes", nota: "20 h + 2 visitas, SLA <2h hábil, monitoreo + backup incluido" },
  { prest: "Plan A medida — 50+ o sedes", precio: "desde $950.000 / mes", nota: "horas y visitas según parque, SLA a convenir, guardia sábados" },
  { prest: "Horas extra (fuera de plan)", precio: "$35.000 / h", nota: "se descuenta de plan si contratas mes siguiente" },
  { prest: "Levantamiento e inventario", precio: "desde $490.000 (una vez)", nota: "se descuenta si sigues a plan — mapa + inventario + riesgos" },
  { prest: "Migración Microsoft 365 / Google", precio: "desde $390.000", nota: "buzones + archivos + capacitación 60 min" },
  { prest: "Respaldo y restore probado", precio: "incluido en Corporativo / desde $120.000", nota: "backup diario + prueba restore mensual" },
  { prest: "Guardia técnica sábados", precio: "desde $190.000 / mes", nota: "09:00–14:00, respuesta <2h" },
];

function PlanesSoporte() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;
  return (
    <section id="planes-soporte" aria-label="Planes soporte">
      <div className="container">
        <div ref={ref as any} className="reveal">
          <p className="kicker">PLANES A LA VISTA</p>
          <h2 className="section-h2">Precio que se puede comparar, con SLA por escrito</h2>
          <p className="section-intro" style={{ maxWidth: "60ch" }}>
            Cada valor es ‘desde’. El definitivo se confirma tras levantar tu parque. Sin permanencia obligatoria.
          </p>

          <div className="planes-layout">
            <div className="planes-tabla-wrap">
              <div className="planes-indicador" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="planes-tabla">
                {PLANES.map((row, i) => (
                  <div key={i} className="planes-fila reveal-child">
                    <div className="planes-prest">
                      <span className="planes-prest-text">{row.prest}</span>
                      <span className="planes-nota-hover">{row.nota}</span>
                    </div>
                    <div className="planes-precio">{row.precio}</div>
                  </div>
                ))}
                <p className="planes-nota-pie">
                  Valores referenciales; el valor final se confirma tras diagnóstico en terreno. Factura exenta. Hasta 6 cuotas. Si no
                  cumplimos el SLA, ese mes se descuenta proporcional.
                </p>
              </div>
            </div>

            <aside className="planes-aside">
              <h3 className="planes-aside-title">¿Necesitas fecha real?</h3>
              <p className="planes-aside-text">Agendamos visita de levantamiento con hora. Te damos alcance y rango el mismo día.</p>
              <div className="planes-aside-tel">
                <span className="planes-aside-etiqueta">¿Problema ahora?</span>
                <a href="tel:+56229654821">+56 2 2965 4821</a>
              </div>
              <a href="#conversemos" className="btn-primary" style={{ width: "100%", marginTop: "14px" }}>
                Hablar con soporte
              </a>
              <a href="#pase-a-produccion" className="btn-ghost" style={{ width: "100%", marginTop: "8px", justifyContent: "center" }}>
                Ver método de pase
              </a>
              <p className="planes-aside-micro">Visita 60 min · Inventario incluido · Presupuesto por escrito</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaseAProduccion() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const acordeon = [
    { q: "¿Quedamos amarrados?", a: "No. Claves, inventario y respaldos quedan en tu cuenta. Licencia tuya." },
    { q: "¿Y si no sirve?", a: "Te decimos antes de cotizar. Cobramos solo el levantamiento." },
    { q: "¿Cuánto demora el pase?", a: "1 semana desde plan aprobado. Con fecha y ventana por escrito." },
  ];
  return (
    <section id="pase-a-produccion" aria-label="Pase a producción">
      <div className="container">
        <div ref={ref as any} className="reveal">
          <p className="kicker">PASE A PRODUCCIÓN</p>
          <h2 className="section-h2">Entramos sin detener tu operación.</h2>
          <p className="section-intro" style={{ maxWidth: "56ch" }}>
            Cada pase tiene ventana, rollback y dueño. Sin ‘sprint infinito’ ni corte sorpresa.
          </p>

          <div className="pase-layout">
            <div className="pase-timeline">
              <div className="pase-line" aria-hidden="true" />
              {[
                { num: "01 · Levantamiento (día 1–2)", desc: "Visita + inventario + mapa de red y riesgos por escrito." },
                { num: "02 · Plan por escrito (día 3)", desc: "Alcances, SLA y calendario con fecha. Tú apruebas." },
                { num: "03 · Toma de control (semana 1)", desc: "Claves en tu cuenta, monitoreo y primera mantención sin corte." },
                { num: "04 · Estabilización (30 días)", desc: "Ajustes incluidos. Luego plan mensual o pausa." },
              ].map((step, i) => (
                <div key={i} className="pase-step reveal-child">
                  <span className="pase-nodo" aria-hidden="true" />
                  <div>
                    <p className="pase-step-num">{step.num}</p>
                    <p className="pase-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pase-detalle">
              <h3 className="pase-detalle-title">Qué te llevas siempre</h3>
              <ul className="pase-checks">
                <li>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>{" "}
                  Inventario en tu cuenta
                </li>
                <li>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>{" "}
                  Claves y accesos tuyos
                </li>
                <li>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>{" "}
                  Runbook de restore
                </li>
                <li>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>{" "}
                  Reporte mensual
                </li>
              </ul>
              <div className="pase-precio">Levantamiento $490.000 se descuenta si sigues a plan.</div>

              <div className="pase-acordeon">
                {acordeon.map((item, i) => {
                  const open = openIdx === i;
                  return (
                    <div key={i} className={`pase-acc-item ${open ? "open" : ""}`}>
                      <button className="pase-acc-trigger" aria-expanded={open} onClick={() => setOpenIdx(open ? null : i)}>
                        <span>{item.q}</span>
                        <span className="pase-chevron" aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E7AA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      <div className="pase-acc-body" aria-hidden={!open}>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuardiaTecnica() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;
  const [missing, setMissing] = useState(false);
  return (
    <section id="guardia-tecnica" aria-label="Guardia técnica">
      <div className="container">
        <div ref={ref as any} className="reveal">
          <p className="kicker">GUARDIA TÉCNICA</p>
          <h2 className="section-h2">Guardia humana, no bot que rebota.</h2>
          <p className="section-intro" style={{ maxWidth: "56ch" }}>
            Técnico que conoce tu red. Estado y tiempo de respuesta por contrato, no por promesa.
          </p>

          <div className="guardia-tabla-wrap reveal-child">
            {/* Desktop grid */}
            <div className="guardia-table-grid">
              <div className="guardia-head"> </div>
              <div className="guardia-head">ESENCIAL</div>
              <div className="guardia-head">CORPORATIVO</div>
              <div className="guardia-head">GUARDIA SÁBADOS</div>

              <div className="guardia-cell guardia-label">Para quién</div>
              <div className="guardia-cell">Hasta 15 usuarios sin urgencia</div>
              <div className="guardia-cell">Operación diaria</div>
              <div className="guardia-cell">Operación que no puede parar sábado</div>

              <div className="guardia-cell guardia-label">Respuesta</div>
              <div className="guardia-cell">&lt;4 h hábil</div>
              <div className="guardia-cell">&lt;2 h hábil</div>
              <div className="guardia-cell">&lt;2 h sábado 09–14h</div>

              <div className="guardia-cell guardia-label">Qué incluye</div>
              <div className="guardia-cell">HelpDesk + 1 visita + reporte</div>
              <div className="guardia-cell">Todo Esencial + monitoreo + backup + 2 visitas</div>
              <div className="guardia-cell">Todo Corporativo + guardia + rollback asistido</div>

              <div className="guardia-cell guardia-label">Desde CLP</div>
              <div className="guardia-cell guardia-precio">$380.000 / mes</div>
              <div className="guardia-cell guardia-precio">$680.000 / mes</div>
              <div className="guardia-cell guardia-precio">+$190.000 / mes</div>

              <div className="guardia-cell guardia-label">Horario</div>
              <div className="guardia-cell">Lun–Vie 08:30–18:30</div>
              <div className="guardia-cell">Lun–Vie 08:30–18:30</div>
              <div className="guardia-cell">Sáb 09:00–14:00</div>
            </div>

            {/* Mobile cards */}
            <div className="guardia-cards">
              <div className="guardia-card">
                <div className="guardia-card-head">ESENCIAL</div>
                <div className="guardia-card-body">
                  <p><strong>Para quién:</strong> Hasta 15 usuarios sin urgencia</p>
                  <p><strong>Respuesta:</strong> &lt;4 h hábil</p>
                  <p><strong>Qué incluye:</strong> HelpDesk + 1 visita + reporte</p>
                  <p><strong>Desde CLP:</strong> $380.000 / mes</p>
                  <p><strong>Horario:</strong> Lun–Vie 08:30–18:30</p>
                </div>
              </div>
              <div className="guardia-card">
                <div className="guardia-card-head">CORPORATIVO</div>
                <div className="guardia-card-body">
                  <p><strong>Para quién:</strong> Operación diaria</p>
                  <p><strong>Respuesta:</strong> &lt;2 h hábil</p>
                  <p><strong>Qué incluye:</strong> Todo Esencial + monitoreo + backup + 2 visitas</p>
                  <p><strong>Desde CLP:</strong> $680.000 / mes</p>
                  <p><strong>Horario:</strong> Lun–Vie 08:30–18:30</p>
                </div>
              </div>
              <div className="guardia-card">
                <div className="guardia-card-head">GUARDIA SÁBADOS</div>
                <div className="guardia-card-body">
                  <p><strong>Para quién:</strong> Operación que no puede parar sábado</p>
                  <p><strong>Respuesta:</strong> &lt;2 h sábado 09–14h</p>
                  <p><strong>Qué incluye:</strong> Todo Corporativo + guardia + rollback asistido</p>
                  <p><strong>Desde CLP:</strong> +$190.000 / mes</p>
                  <p><strong>Horario:</strong> Sáb 09:00–14:00</p>
                </div>
              </div>
            </div>
          </div>

          <p className="guardia-nota">Sin permanencia. Pausas con 30 días de aviso. Horas no usadas se arrastran 1 mes. Si no cumplimos SLA, descuento proporcional.</p>

          <div className="guardia-proof">
            <div className="guardia-proof-media">
              {missing ? (
                <div className="media-falta" data-falta="altiva-proof-16x9.png" style={{ aspectRatio: "16/9" }}>
                  falta: altiva-proof-16x9.png
                </div>
              ) : (
                <img
                  src={`${mediaBase}altiva-proof-16x9.png`}
                  alt="Bandeja metálica con switch alineado y filete cian 1px, luz fría cenital"
                  loading="lazy"
                  onError={() => {
                    console.warn("falta: altiva-proof-16x9.png");
                    setMissing(true);
                  }}
                />
              )}
            </div>
            <p className="media-caption">Deploy 04 · bandeja metálica · luz fría · filete cian</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Conversemos() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tamano: "",
    sistema: "",
    urgencia: "",
    mensaje: "",
    claves: true,
  });

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!form.telefono.trim()) e.telefono = "Ingresa tu teléfono";
    else if (!/^\+?56.*/.test(form.telefono.replace(/\s/g, "")) && form.telefono.length < 8) e.telefono = "Formato +56 2 ...";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email no válido";
    if (!form.tamano) e.tamano = "Selecciona tamaño";
    if (!form.sistema) e.sistema = "Selecciona sistema";
    if (!form.urgencia) e.urgencia = "Selecciona urgencia";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("altiva-lead", JSON.stringify({ ...form, fecha: new Date().toISOString() }));
      } catch {}
      const text = `Hola ALTIVA quiero evaluación: ${form.nombre} ${form.tamano} ${form.urgencia}`;
      const url = `https://wa.me/56229654821?text=${encodeURIComponent(text)}`;
      // try wa.me, fallback mailto handled via window.open; if blocked open mailto
      const w = window.open(url, "_blank");
      if (!w) {
        window.location.href = `mailto:contacto@altiva.cl?subject=Evaluacion ${encodeURIComponent(form.nombre)}&body=${encodeURIComponent(text + "\n" + form.mensaje)}`;
      }
    }, 600);
  }

  return (
    <section id="conversemos" aria-label="Conversemos">
      <div className="container">
        <div ref={ref as any} className="reveal conversemos-grid">
          <div className="conversemos-left">
            <p className="kicker">CONVERSEMOS</p>
            <h2 className="section-h2">Cuenta tu parque. Te decimos si te sirve.</h2>
            <p className="section-intro" style={{ maxWidth: "36ch" }}>
              Elige tamaño y urgencia. Te respondemos hoy con alcance y rango.
            </p>

            <form className="conversemos-form" onSubmit={handleSubmit} noValidate>
              <div className="form-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <label className="form-label">
                Nombre y apellido *
                <input
                  className={`form-input ${errors.nombre ? "input-error" : ""}`}
                  type="text"
                  placeholder="Nombre y apellido"
                  value={form.nombre}
                  onChange={(ev) => setForm({ ...form, nombre: ev.target.value })}
                />
                {errors.nombre && <span className="form-error">{errors.nombre}</span>}
              </label>

              <label className="form-label">
                Teléfono *
                <input
                  className={`form-input ${errors.telefono ? "input-error" : ""}`}
                  type="tel"
                  placeholder="+56 2 2965 4821"
                  value={form.telefono}
                  onChange={(ev) => setForm({ ...form, telefono: ev.target.value })}
                />
                {errors.telefono && <span className="form-error">{errors.telefono}</span>}
              </label>

              <label className="form-label">
                Email
                <input
                  className={`form-input ${errors.email ? "input-error" : ""}`}
                  type="email"
                  placeholder="hola@empresa.cl"
                  value={form.email}
                  onChange={(ev) => setForm({ ...form, email: ev.target.value })}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </label>

              <label className="form-label">
                Tamaño empresa *
                <select
                  className={`form-input ${errors.tamano ? "input-error" : ""}`}
                  value={form.tamano}
                  onChange={(ev) => setForm({ ...form, tamano: ev.target.value })}
                >
                  <option value="">Selecciona</option>
                  <option value="1–15 usuarios">1–15 usuarios</option>
                  <option value="16–50 usuarios">16–50 usuarios</option>
                  <option value="50+ o sedes">50+ o sedes</option>
                  <option value="No sé">No sé</option>
                </select>
                {errors.tamano && <span className="form-error">{errors.tamano}</span>}
              </label>

              <label className="form-label">
                Sistema actual *
                <select
                  className={`form-input ${errors.sistema ? "input-error" : ""}`}
                  value={form.sistema}
                  onChange={(ev) => setForm({ ...form, sistema: ev.target.value })}
                >
                  <option value="">Selecciona</option>
                  <option value="Microsoft 365">Microsoft 365</option>
                  <option value="Google Workspace">Google Workspace</option>
                  <option value="Mixto">Mixto</option>
                  <option value="Servidor propio">Servidor propio</option>
                  <option value="No tengo claro">No tengo claro</option>
                </select>
                {errors.sistema && <span className="form-error">{errors.sistema}</span>}
              </label>

              <label className="form-label">
                Urgencia *
                <select
                  className={`form-input ${errors.urgencia ? "input-error" : ""}`}
                  value={form.urgencia}
                  onChange={(ev) => setForm({ ...form, urgencia: ev.target.value })}
                >
                  <option value="">Selecciona</option>
                  <option value="Falla ahora">Falla ahora</option>
                  <option value="Quiero cotizar cambio">Quiero cotizar cambio</option>
                  <option value="Solo respaldo">Solo respaldo</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.urgencia && <span className="form-error">{errors.urgencia}</span>}
              </label>

              <label className="form-label">
                Mensaje
                <textarea
                  className="form-input form-textarea"
                  placeholder="Cuéntanos qué falla o qué quieres ordenar"
                  rows={3}
                  value={form.mensaje}
                  onChange={(ev) => setForm({ ...form, mensaje: ev.target.value })}
                />
              </label>

              <label className="form-checkbox">
                <input
                  type="checkbox"
                  checked={form.claves}
                  onChange={(ev) => setForm({ ...form, claves: ev.target.checked })}
                />
                <span>Quiero claves e inventario en mi cuenta desde día 1</span>
              </label>

              {success && <div className="form-success">Te escribimos hoy · revisa tu WhatsApp ✓</div>}

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? "Enviando…" : "Solicitar evaluación"}
              </button>
              <a href="tel:+56229654821" className="btn-ghost" style={{ width: "100%", marginTop: "8px", justifyContent: "center" }}>
                Llamar ahora
              </a>
            </form>
          </div>

          <div className="conversemos-right">
            <div className="conversemos-tel">
              <span className="conversemos-tel-label">¿Problema ahora?</span>
              <a href="tel:+56229654821" className="conversemos-tel-num">
                +56 2 2965 4821
              </a>
            </div>
            <a href="mailto:contacto@altiva.cl" className="conversemos-email">
              contacto@altiva.cl
            </a>
            <p className="conversemos-dir">Las Condes, Santiago · remoto Chile — visita en tu oficina</p>
            <p className="conversemos-horario">Lun–Vie 08:30–18:30 · Guardia sábados 09–14h</p>
            <ul className="conversemos-checks">
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Inventario en tu cuenta día 1
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Claves tuyas
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Factura exenta
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{" "}
                Descuento si no cumplimos SLA
              </li>
            </ul>
            <p className="conversemos-mini">+16 años · +140 empresas · 97% resuelto el mismo día</p>
          </div>
        </div>

        <footer className="site-footer">
          <p className="footer-line">
            ALTIVA SpA · Las Condes · <a href="mailto:contacto@altiva.cl">contacto@altiva.cl</a> ·{" "}
            <a href="tel:+56229654821">+56 2 2965 4821</a>
          </p>
          <p className="footer-sub">© 2026 ALTIVA. Valores referenciales; se confirma tras diagnóstico. SLA por escrito.</p>
        </footer>
      </div>
    </section>
  );
}

function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(total > 0 && scrolled / total > 0.4);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-cta-mobile" role="region" aria-label="Acciones">
      <a href="tel:+56229654821" className="btn-ghost sticky-cta-ghost">
        Llamar
      </a>
      <a href="#conversemos" className="btn-primary sticky-cta-primary">
        Evaluación
      </a>
    </div>
  );
}

export function App() {
  return (
    <>
      <a
        href="#continuidad"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <ParqueInstalado />
        <CoberturaSla />
        <PlanesSoporte />
        <PaseAProduccion />
        <GuardiaTecnica />
        <Conversemos />
      </main>
      <StickyMobileCta />
    </>
  );
}
