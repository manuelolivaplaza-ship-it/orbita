import { useEffect, useState, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Calendario', href: '#calendario-sii' },
  { label: 'Régimen', href: '#regimen-tributario' },
  { label: 'Remuneraciones', href: '#remuneraciones-previred' },
  { label: 'Planes', href: '#planes-mensuales' },
] as const;

// ---------- helpers ----------
function SafeImg({ src, alt, className, style, filename }: { src: string; alt: string; className?: string; style?: React.CSSProperties; filename: string }) {
  const [missing, setMissing] = useState(false);
  useEffect(() => { console.warn(`media check: ${filename}`); }, [filename]);
  if (missing) {
    console.warn(`media pendiente: ${filename}`);
    return <div className="media-falta" data-falta={filename}>media pendiente: {filename}</div>;
  }
  return <img src={src} alt={alt} className={className} style={style} loading="lazy" onError={() => setMissing(true)} />;
}

// RUT validation modulo 11
function cleanRut(rut: string) {
  return rut.replace(/[^0-9kK]/g, '').toUpperCase();
}
function validateRut(rut: string): boolean {
  const c = cleanRut(rut);
  if (c.length < 7) return false;
  const body = c.slice(0, -1);
  const dv = c.slice(-1);
  let sum = 0;
  let mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  const res = 11 - (sum % 11);
  let expected = '';
  if (res === 11) expected = '0';
  else if (res === 10) expected = 'K';
  else expected = String(res);
  return dv === expected;
}
function formatRut(v: string) {
  const c = cleanRut(v);
  if (c.length <= 1) return c;
  const body = c.slice(0, -1);
  const dv = c.slice(-1);
  // add dots every 3 from right?
  let formatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  // classic formatting with dash: but spec placeholder 76.123.456-7 - we keep dots+dash
  return `${formatted}-${dv}`;
}

// ---------- Header ----------
function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <a href="#inicio-contador-claro" className="header-left" style={{ textDecoration: 'none' }}>
            <div>
              <span className="logo">FOLIO</span>
              <span className="logo-sub">ESTUDIO CONTABLE</span>
            </div>
          </a>

          <nav className="nav" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="header-right">
            <a href="tel:+56984051234" className="phone" aria-label="Llamar +56 9 8405 1234">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.07 12a19.8 19.8 0 0 1-3.07-8.68A2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.72c.12 1.35.43 2.66.92 3.91a2 2 0 0 1-.57 2.11L8.09 10.01a16 16 0 0 0 5.9 5.9l1.27-1.26a2 2 0 0 1 2.11-.57c1.25.49 2.56.8 3.91.92A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span className="phone-full">+56 9 8405 1234</span>
              <span className="phone-short">9 8405 1234</span>
            </a>
            <a href="#agenda-diagnostico" className="btn-primary cta-desktop">Agenda diagnóstico</a>
            <button
              className="menu-toggle"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true">{open ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div className="drawer-overlay" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="drawer" role="dialog" aria-modal="true" aria-label="Menú">
            <div className="drawer-head">
              <div>
                <span className="logo" style={{ fontSize: 18 }}>FOLIO</span>
                <span className="logo-sub">ESTUDIO CONTABLE</span>
              </div>
              <button className="drawer-close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>✕</button>
            </div>
            <nav className="drawer-nav" aria-label="Móvil">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              ))}
              <a href="#como-trabajamos-contador-claro" onClick={() => setOpen(false)}>Cómo trabajamos</a>
            </nav>
            <a href="tel:+56984051234" className="drawer-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={16} height={16} aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.07 12a19.8 19.8 0 0 1-3.07-8.68A2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.72c.12 1.35.43 2.66.92 3.91a2 2 0 0 1-.57 2.11L8.09 10.01a16 16 0 0 0 5.9 5.9l1.27-1.26a2 2 0 0 1 2.11-.57c1.25.49 2.56.8 3.91.92A2 2 0 0 1 22 16.92Z" />
              </svg>
              +56 9 8405 1234
            </a>
            <a href="#agenda-diagnostico" className="drawer-cta" onClick={() => setOpen(false)}>Agenda diagnóstico</a>
          </div>
        </>
      )}
    </>
  );
}

function HeroMedia() {
  const [hasVideo, setHasVideo] = useState(false);
  const [imgOk, setImgOk] = useState<boolean | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    fetch('/media/folio-hero-loop.mp4', { method: 'HEAD' }).then((r) => {
      if (r.ok) setHasVideo(true);
    }).catch(() => {});
  }, []);

  const onImgError = () => {
    setImgOk(false);
    console.warn('media pendiente: folio-hero-16x9.png');
    console.warn('media pendiente: folio-hero-9x16.png');
  };
  const onImgLoad = () => setImgOk(true);
  const showFallback = imgOk === false;

  return (
    <div className="hero-media">
      {!showFallback ? (
        <>
          {hasVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/media/folio-hero-16x9.png"
              className={videoLoaded ? 'is-loaded' : ''}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setHasVideo(false)}
            >
              <source src="/media/folio-hero-loop.mp4" type="video/mp4" />
            </video>
          )}
          <picture>
            <source media="(max-width: 768px)" srcSet="/media/folio-hero-9x16.png" />
            <img
              src="/media/folio-hero-16x9.png"
              alt=""
              role="presentation"
              loading="eager"
              onError={onImgError}
              onLoad={onImgLoad}
              style={hasVideo && videoLoaded ? { opacity: 0 } : undefined}
            />
          </picture>
        </>
      ) : (
        <div className="media-falta" data-falta="folio-hero-16x9.png">
          media pendiente: folio-hero-16x9.png
        </div>
      )}
      <div className="sello" aria-hidden="true">FOLIO · AL DÍA</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio-contador-claro" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">ESTUDIO CONTABLE · LAS CONDES — RM Y TODO CHILE</p>
            <h1>Contabilidad al día. Impuestos sin sorpresas. Tú vendes, nosotros cuadramos cada peso.</h1>
            <p className="hero-bajada">
              Llevamos tu contabilidad completa, remuneraciones en Previred y declaraciones F29/F22/Renta Operación. Papeles ordenados, calendario SII al día y un contador que contesta.
            </p>
            <ul className="hero-bullets" aria-label="Incluye">
              <li>F29 mensual y F22 anual sin atrasos</li>
              <li>Remuneraciones y Previred hasta 150 trabajadores</li>
              <li>Respuesta en &lt;24h hábiles por WhatsApp</li>
            </ul>
            <div className="hero-ctas">
              <a href="#agenda-diagnostico" className="btn-hero-primary">Agenda diagnóstico contable (20 min) →</a>
              <a href="https://wa.me/56984051234" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">Escríbenos por WhatsApp</a>
            </div>
            <p className="hero-nota">Sin permanencia. Migración sin costo si vienes con tu F29 y libro de compras/ventas.</p>
          </div>
          <HeroMedia />
        </div>
      </div>
    </section>
  );
}

// ---------- #calendario-sii ----------
function CalendarioSII() {
  return (
    <section id="calendario-sii" className="section-calendario">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow eyebrow-oxide">CALENDARIO SII 2025-2026</p>
          <h2>Qué se declara y cuándo. Sin letra chica.</h2>
          <p className="section-bajada">F29 todos los meses, F50 si retienes honorarios, Previred hasta el 13, Renta en abril. Te avisamos 5 días antes por WhatsApp.</p>
        </div>
        <div className="cal-grid">
          <article className="cal-card">
            <span className="cal-pill">ABRIL</span>
            <h3>Renta Operación</h3>
            <ul>
              <li>· F22 anual (14D3 / 14A)</li>
              <li>· DJ 1948 / 1947 si corresponde</li>
              <li>· Propuesta SII revisada línea por línea</li>
            </ul>
          </article>
          <article className="cal-card cal-card-vigente">
            <span className="cal-pill">TODOS LOS MESES</span>
            <span className="cal-tag">VENCE ESTE MES</span>
            <h3>F29 + Libros</h3>
            <ul>
              <li>· F29 (IVA) hasta día 12/20 según rut</li>
              <li>· Libro compras/ventas electrónico</li>
              <li>· F50 retenciones honorarios</li>
            </ul>
          </article>
          <article className="cal-card">
            <span className="cal-pill">HASTA EL 13</span>
            <h3>Previred / Remuneraciones</h3>
            <ul>
              <li>· Liquidaciones y libro de remuneraciones</li>
              <li>· Previred y licencias</li>
              <li>· Contratos y finiquitos</li>
            </ul>
          </article>
          <article className="cal-card">
            <span className="cal-pill">A PEDIDO</span>
            <h3>Trámites SII</h3>
            <ul>
              <li>· Inicio actividades, verificación</li>
              <li>· Clave tributaria y representación</li>
              <li>· Termino de giro y fiscalización</li>
            </ul>
          </article>
        </div>
        <p className="cal-nota">Fechas según calendario SII vigente; el día exacto depende de tu dígito verificador.</p>
      </div>
    </section>
  );
}

// ---------- #regimen-tributario ----------
function RegimenTributario() {
  const [imgMissing, setImgMissing] = useState(false);
  return (
    <section id="regimen-tributario" className="section-regimen">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow eyebrow-green">RÉGIMEN TRIBUTARIO</p>
          <h2>No todos pagan igual. Te dejamos en el que conviene.</h2>
          <p className="section-bajada">Revisamos tu situación y te cambiamos si corresponde (F22, DJ y SII incluidos).</p>
        </div>

        <div className="regimen-layout">
          <div className="regimen-table-wrap">
            {/* Desktop table */}
            <div className="regimen-table" role="table" aria-label="Comparador regímenes">
              <div className="reg-head" role="row">
                <div role="columnheader">Atributo</div>
                <div role="columnheader">Pro Pyme General 14 D3 <span className="tag-reco">RECOMENDADO PYME</span></div>
                <div role="columnheader">Pro Pyme Transparente 14 D8</div>
                <div role="columnheader">Régimen General 14 A</div>
              </div>
              <div className="reg-row" role="row">
                <div role="cell" className="reg-attr">Tributación</div>
                <div role="cell">25% IDPC con crédito 100%</div>
                <div role="cell">Dueños tributan directo (sin IDPC empresa)</div>
                <div role="cell">27% IDPC</div>
              </div>
              <div className="reg-row" role="row">
                <div role="cell" className="reg-attr">ID SII</div>
                <div role="cell">Tasa general</div>
                <div role="cell">Transparente</div>
                <div role="cell">General</div>
              </div>
              <div className="reg-row" role="row">
                <div role="cell" className="reg-attr">Contabilidad</div>
                <div role="cell">Completa</div>
                <div role="cell">Simplificada</div>
                <div role="cell">Completa obligatoria</div>
              </div>
              <div className="reg-row" role="row">
                <div role="cell" className="reg-attr">Ideal para</div>
                <div role="cell">Ventas hasta 75.000 UF</div>
                <div role="cell">Sociedades de personas</div>
                <div role="cell">Grandes</div>
              </div>
              <div className="reg-row" role="row">
                <div role="cell" className="reg-attr">Nuestra gestión</div>
                <div role="cell">F22 + DJ 1948 + balance 8 columnas</div>
                <div role="cell">F22 socio + DJ 1947</div>
                <div role="cell">Alta complejidad, auditoría incluida</div>
              </div>
            </div>

            {/* Mobile cards */}
            <div className="regimen-cards-mobile">
              <div className="reg-card">
                <div className="reg-card-head">Pro Pyme General 14 D3 <span className="tag-reco">RECOMENDADO PYME</span></div>
                <ul>
                  <li><strong>Tributación:</strong> 25% IDPC con crédito 100%</li>
                  <li><strong>ID SII:</strong> Tasa general</li>
                  <li><strong>Contabilidad:</strong> Completa</li>
                  <li><strong>Ideal para:</strong> Ventas hasta 75.000 UF</li>
                  <li><strong>Nuestra gestión:</strong> F22 + DJ 1948 + balance 8 columnas</li>
                </ul>
              </div>
              <div className="reg-card">
                <div className="reg-card-head">Pro Pyme Transparente 14 D8</div>
                <ul>
                  <li><strong>Tributación:</strong> Dueños tributan directo (sin IDPC empresa)</li>
                  <li><strong>ID SII:</strong> Transparente</li>
                  <li><strong>Contabilidad:</strong> Simplificada</li>
                  <li><strong>Ideal para:</strong> Sociedades de personas</li>
                  <li><strong>Nuestra gestión:</strong> F22 socio + DJ 1947</li>
                </ul>
              </div>
              <div className="reg-card">
                <div className="reg-card-head">Régimen General 14 A</div>
                <ul>
                  <li><strong>Tributación:</strong> 27% IDPC</li>
                  <li><strong>ID SII:</strong> General</li>
                  <li><strong>Contabilidad:</strong> Completa obligatoria</li>
                  <li><strong>Ideal para:</strong> Grandes</li>
                  <li><strong>Nuestra gestión:</strong> Alta complejidad, auditoría incluida</li>
                </ul>
              </div>
            </div>

            <div className="regimen-callout">
              ¿No sabes en cuál estás? Lo vemos en el diagnóstico con tu RUT y última Renta. Cambio de régimen sin costo si contratas plan anual.
            </div>
          </div>

          <div className="regimen-media">
            {!imgMissing ? (
              <img src="/media/folio-regimen-4x3.png" alt="Separadores por régimen" loading="lazy" onError={() => { setImgMissing(true); console.warn('media pendiente: folio-regimen-4x3.png'); }} />
            ) : (
              <div className="media-falta" data-falta="folio-regimen-4x3.png">media pendiente: folio-regimen-4x3.png</div>
            )}
            <p className="media-caption">Separadores por régimen — cada carpeta con su DJ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- #remuneraciones-previred ----------
function Remuneraciones() {
  return (
    <section id="remuneraciones-previred" className="section-remu">
      <div className="container">
        <div className="remu-grid">
          <div className="remu-copy">
            <p className="eyebrow eyebrow-oxide">REMUNERACIONES & PREVIRED</p>
            <h2>Tus trabajadores, al día y sin multas.</h2>
            <p className="section-bajada">Liquidaciones, Previred, LRE y finiquitos con firma electrónica. Tú apruebas, nosotros declaramos.</p>
            <ul className="remu-list">
              <li>Liquidaciones mensuales con desglose haberes/descuentos</li>
              <li>Libro de remuneraciones electrónico (LRE) SII</li>
              <li>Previred, AFC y mutualidad — hasta día 13</li>
              <li>Contratos, anexos y finiquitos con modelo DT</li>
              <li>Licencias médicas y carga en Previred</li>
              <li>Indicadores mes: UTM, UF, sueldo mínimo actualizados</li>
            </ul>
            <p className="remu-nota">Hasta 150 trabajadores por RUT. Más, plan a medida.</p>
            <a href="#agenda-diagnostico" className="remu-link">Ver ejemplo de liquidación →</a>
          </div>
          <div className="remu-mosaico">
            <div className="remu-img-wrap">
              <SafeImg src="/media/folio-remu-1x1.png" alt="Liquidación" filename="folio-remu-1x1.png" />
            </div>
            <div className="remu-img-wrap">
              <SafeImg src="/media/folio-remu2-1x1.png" alt="Papel verjurado" filename="folio-remu2-1x1.png" />
            </div>
            <div className="remu-img-wrap remu-span2">
              <SafeImg src="/media/folio-timbres-16x9.png" alt="Timbres y sello seco" filename="folio-timbres-16x9.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- #planes-mensuales ----------
function PlanesMensuales() {
  return (
    <section id="planes-mensuales" className="section-planes">
      <div className="container">
        <div className="planes-header">
          <p className="eyebrow eyebrow-green">PLANES MENSUALES · SIN PERMANENCIA</p>
          <h2>Un precio claro. Todo lo que incluye, al lado.</h2>
          <p className="section-bajada">Sin letra chica. Si creces, cambias de tramo. Migración incluida.</p>
        </div>

        <div className="carta">
          <div className="carta-row">
            <div className="carta-nombre">
              <span className="carta-title">Emprendedor · hasta 10 docs/mes</span>
              <span className="tag tag-desde">DESDE</span>
              <p className="carta-incluye">F29 + libros electrónicos · Inicio actividades · Soporte WhatsApp</p>
              <p className="carta-nota">Ideal boleta honorarios / sin trabajadores</p>
            </div>
            <div className="carta-precio">
              <span className="precio">$49.900<span className="precio-suf">/mes</span></span>
              <span className="iva">+IVA</span>
            </div>
            <div className="carta-cta">
              <a href="#agenda-diagnostico" className="link-cta">Este me sirve →</a>
            </div>
          </div>

          <div className="carta-row carta-destacada">
            <div className="carta-nombre">
              <span className="carta-title">Pyme · hasta 50 docs + 3 trabajadores</span>
              <span className="tag tag-elegido">MÁS ELEGIDO</span>
              <p className="carta-incluye">Todo Emprendedor + Remuneraciones (3) + Previred + F50 + Balance 8 columnas anual</p>
              <p className="carta-nota">Hasta $60MM ventas anuales aprox.</p>
            </div>
            <div className="carta-precio">
              <span className="precio">$89.900<span className="precio-suf">/mes</span></span>
              <span className="iva">+IVA</span>
            </div>
            <div className="carta-cta">
              <a href="#agenda-diagnostico" className="btn-small">Agenda diagnóstico →</a>
            </div>
          </div>

          <div className="carta-row">
            <div className="carta-nombre">
              <span className="carta-title">Pyme Plus · hasta 120 docs + 10 trabajadores</span>
              <p className="carta-incluye">Todo Pyme + LRE + Contratos/finiquitos + DJ 1948/1947 + Renta Operación</p>
              <p className="carta-nota">Hasta 75.000 UF, Pro Pyme General</p>
            </div>
            <div className="carta-precio">
              <span className="precio">$149.900<span className="precio-suf">/mes</span></span>
              <span className="iva">+IVA</span>
            </div>
            <div className="carta-cta">
              <a href="#agenda-diagnostico" className="link-cta">Cotizar →</a>
            </div>
          </div>

          <div className="carta-row">
            <div className="carta-nombre">
              <span className="carta-title">A medida · 14 A General / +10 trabajadores / auditoría</span>
              <p className="carta-incluye">Contabilidad completa + informes gerenciales + fiscalización SII incluida</p>
              <p className="carta-nota">Valor referencial; se confirma tras diagnóstico</p>
            </div>
            <div className="carta-precio">
              <span className="precio"><span style={{ fontSize: 16, fontWeight: 600 }}>desde</span> $219.900<span className="precio-suf">/mes</span></span>
              <span className="iva">+IVA</span>
            </div>
            <div className="carta-cta">
              <a href="#agenda-diagnostico" className="link-cta">Pedir propuesta →</a>
            </div>
          </div>

          <div className="carta-pie">
            <span>Valores referenciales; se confirma tras diagnóstico y revisión de F29/libros.</span>
            <span>Factura exenta o afecta según régimen.</span>
          </div>
        </div>

        <p className="planes-nota">No cobramos por cada trámite. Todo lo listado está incluido en tu tramo. Si te excedes un mes, avisas y ajustamos al tramo siguiente sin multa.</p>

        <div className="planes-stats">
          <div className="stat">
            <span className="stat-num">239 pymes</span>
            <span className="stat-label">al día con SII</span>
          </div>
          <div className="stat">
            <span className="stat-num">&lt;24h</span>
            <span className="stat-label">respuesta promedio hábil</span>
          </div>
          <div className="stat">
            <span className="stat-num">98,2%</span>
            <span className="stat-label">F29 declarados sin atraso (últimos 12 meses)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- #como-trabajamos ----------
function ComoTrabajamos() {
  const [missing, setMissing] = useState(false);
  return (
    <section id="como-trabajamos-contador-claro" className="section-proceso">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow eyebrow-oxide">CÓMO TRABAJAMOS</p>
          <h2>De cajón desordenado a carpeta al día. En 4 pasos.</h2>
        </div>
        <div className="pasos-grid">
          <div className="paso">
            <div className="paso-num"><span className="num-big">01</span><span className="num-small">01</span></div>
            <h3>Diagnóstico (20 min)</h3>
            <p>Revisamos RUT, F29 último, régimen y Previred. Te decimos tramo y qué falta. Incluye Checklist SII PDF.</p>
          </div>
          <div className="paso">
            <div className="paso-num"><span className="num-big">02</span><span className="num-small">02</span></div>
            <h3>Migración</h3>
            <p>Traemos libros, F29 y claves. Sin costo. Quedas operativo en 48h hábiles.</p>
          </div>
          <div className="paso">
            <div className="paso-num"><span className="num-big">03</span><span className="num-small">03</span></div>
            <h3>Operación mensual</h3>
            <p>Nos envías docs por WhatsApp/Drive hasta día 5. Declaramos F29/F50 y Previred. Te llega comprobante.</p>
          </div>
          <div className="paso">
            <div className="paso-num"><span className="num-big">04</span><span className="num-small">04</span></div>
            <h3>Cierre anual</h3>
            <p>Balance 8 columnas, F22 y DJ. Renta Operación revisada línea por línea.</p>
          </div>
        </div>
        <div className="proceso-media">
          {!missing ? (
            <img src="/media/folio-proceso-16x9.png" alt="Expediente FOLIO" loading="lazy" onError={() => { setMissing(true); console.warn('media pendiente: folio-proceso-16x9.png'); }} />
          ) : (
            <div className="media-falta" data-falta="folio-proceso-16x9.png">media pendiente: folio-proceso-16x9.png</div>
          )}
          <p className="media-caption">Expediente FOLIO — cada mes, una pestaña.</p>
        </div>
      </div>
    </section>
  );
}

// ---------- #faq-sii ----------
function FaqSII() {
  const faqs = [
    { q: '¿Cambian de régimen si me conviene?', a: 'Sí. Evaluamos 14 D3 vs D8 y tramitamos el cambio en SII sin costo si contratas plan anual.' },
    { q: '¿Qué pasa si me atraso con el F29?', a: 'Te avisamos 5 días antes. Si igual te atrasas, declaramos fuera de plazo y regularizamos multa/interés con comprobante.' },
    { q: '¿Incluye Previred y LRE?', a: 'Desde Pyme sí (hasta 3 trabajadores). Pyme Plus hasta 10. Más, tramo a medida.' },
    { q: '¿Debo ir al SII?', a: 'No. Con tu clave tributaria y mandato, hacemos todo online. Solo firmas mandatos digitales.' },
    { q: '¿Cómo les envío los documentos?', a: 'WhatsApp, Drive o mail. Fotos legibles hasta día 5. Nosotros digitamos y cuadramos.' },
    { q: '¿Puedo hablar con mi contador?', a: 'Sí. WhatsApp con respuesta <24h hábiles y reunión mensual si la necesitas. Sin call center.' },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq-sii" className="section-faq">
      <div className="container">
        <div className="faq-header">
          <p className="eyebrow eyebrow-green">FAQ SII</p>
          <h2>Dudas comunes, respuestas sin humo.</h2>
        </div>
        <div className="faq-layout">
          <div className="faq-accordion">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{f.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                {open === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
          <div className="faq-callout">
            <h3>¿Vienes de otro contador?</h3>
            <p>Trae tu último F29 y libro. Migración en 48h.</p>
            <a href="/media/checklist-sii.pdf" className="btn-callout" onClick={(e) => { e.preventDefault(); console.log('Descarga checklist SII'); window.open('/media/checklist-sii.pdf','_blank'); }}>Descarga checklist SII (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- #agenda-diagnostico ----------
function AgendaDiagnostico() {
  const [form, setForm] = useState({
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    regimen: '',
    trabajadores: '',
    docs: '',
    mensaje: '',
    acepto: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [oficinaMissing, setOficinaMissing] = useState(false);
  const [fallbackUsed, setFallbackUsed] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('folio_form');
      if (saved) {
        const p = JSON.parse(saved);
        setForm((f) => ({ ...f, nombre: p.nombre || '', email: p.email || '', telefono: p.telefono || '' }));
      }
    } catch {}
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = 'Ingresa tu nombre';
    if (!form.rut.trim() || !validateRut(form.rut)) e.rut = 'RUT inválido (ej: 76.123.456-7)';
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email.trim())) e.email = 'Email inválido';
    const telClean = form.telefono.replace(/\s/g, '');
    const telRe = /^(\+56)?9\d{8}$/;
    // allow +56 9 xxxxxxxx with spaces
    const telDigits = form.telefono.replace(/[^0-9]/g, '');
    // expect 9 + 8 digits after, optionally 56 prefix
    if (!telRe.test(telClean) && !(telDigits.length === 9 && telDigits.startsWith('9')) && !(telDigits.length === 11 && telDigits.startsWith('569'))) {
      e.telefono = 'Teléfono inválido (+56 9 8 dígitos)';
    }
    if (!form.regimen) e.regimen = 'Selecciona una opción';
    if (!form.trabajadores) e.trabajadores = 'Selecciona una opción';
    if (!form.docs) e.docs = 'Selecciona una opción';
    if (!form.acepto) e.acepto = 'Debes aceptar para continuar';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem('folio_form', JSON.stringify({ nombre: form.nombre, email: form.email, telefono: form.telefono }));
      } catch {}
    }, 900);
  };

  const waMessage = `Hola FOLIO, quiero mi diagnóstico contable. Mi RUT es ${form.rut || '___'}`;
  const waUrl = `https://wa.me/56984051234?text=${encodeURIComponent(waMessage)}`;

  const handleOficinaError = () => {
    if (!fallbackUsed) {
      // try fallback to regimen image
      setFallbackUsed(true);
      console.warn('media pendiente: folio-oficina-4x3.png — usando fallback folio-regimen-4x3.png');
    } else {
      setOficinaMissing(true);
    }
  };

  return (
    <section id="agenda-diagnostico" className="section-agenda">
      <div className="container">
        <div className="agenda-grid">
          <div className="agenda-form-box">
            <h2>Agenda tu diagnóstico contable (20 min)</h2>
            <p className="agenda-bajada">Revisamos tu RUT, F29 y régimen. Te decimos tramo exacto y si conviene cambiar.</p>

            {success ? (
              <div className="form-success">
                ¡Listo! Te hablamos en &lt;24h hábiles por WhatsApp. Revisa tu mail.
                <div style={{ marginTop: 12 }}>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Escríbenos por WhatsApp</a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <label>
                    <span>Nombre y apellido*</span>
                    <input value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre" />
                    {errors.nombre && <span className="field-error">{errors.nombre}</span>}
                  </label>
                  <label>
                    <span>RUT empresa*</span>
                    <input value={form.rut} onChange={(e) => setForm({ ...form, rut: formatRut(e.target.value) })} placeholder="76.123.456-7" />
                    {errors.rut && <span className="field-error">{errors.rut}</span>}
                  </label>
                  <label>
                    <span>Email*</span>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@mail.cl" />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </label>
                  <label>
                    <span>Teléfono WhatsApp*</span>
                    <input type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} placeholder="+56 9 ..." />
                    {errors.telefono && <span className="field-error">{errors.telefono}</span>}
                  </label>
                  <label>
                    <span>Régimen actual</span>
                    <select value={form.regimen} onChange={(e) => setForm({ ...form, regimen: e.target.value })}>
                      <option value="">Selecciona</option>
                      <option>No sé</option>
                      <option>14 D3 General</option>
                      <option>14 D8 Transparente</option>
                      <option>14 A General</option>
                      <option>No tengo empresa aún</option>
                    </select>
                    {errors.regimen && <span className="field-error">{errors.regimen}</span>}
                  </label>
                  <label>
                    <span>Nº trabajadores</span>
                    <select value={form.trabajadores} onChange={(e) => setForm({ ...form, trabajadores: e.target.value })}>
                      <option value="">Selecciona</option>
                      <option>0</option>
                      <option>1-3</option>
                      <option>4-10</option>
                      <option>11-30</option>
                      <option>30+</option>
                    </select>
                    {errors.trabajadores && <span className="field-error">{errors.trabajadores}</span>}
                  </label>
                  <label>
                    <span>Docs/mes aprox</span>
                    <select value={form.docs} onChange={(e) => setForm({ ...form, docs: e.target.value })}>
                      <option value="">Selecciona</option>
                      <option>&lt;10</option>
                      <option>10-50</option>
                      <option>50-120</option>
                      <option>120+</option>
                    </select>
                    {errors.docs && <span className="field-error">{errors.docs}</span>}
                  </label>
                  <label className="full">
                    <span>Mensaje</span>
                    <textarea value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} placeholder="Cuéntanos en una línea qué necesitas ordenar" rows={3} />
                  </label>
                </div>
                <label className="checkbox">
                  <input type="checkbox" checked={form.acepto} onChange={(e) => setForm({ ...form, acepto: e.target.checked })} />
                  <span>Acepto ser contactado por FOLIO según Ley 19.628</span>
                </label>
                {errors.acepto && <span className="field-error" style={{ display: 'block', marginBottom: 8 }}>{errors.acepto}</span>}

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? 'Enviando…' : 'Agenda diagnóstico contable (20 min)'}
                </button>

                <p className="form-fallback">
                  ¿Prefieres WhatsApp directo? → <a href="https://wa.me/56984051234" target="_blank" rel="noopener noreferrer">+56 9 8405 1234</a> · <a href="mailto:hola@folio.cl">hola@folio.cl</a>
                </p>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="wa-extra">Escríbenos por WhatsApp</a>
              </form>
            )}
          </div>

          <div className="agenda-resumen">
            <div className="resumen-sticky">
              <h3>¿QUÉ PASA DESPUÉS?</h3>
              <ul>
                <li>· Te confirmamos hora por WhatsApp</li>
                <li>· Diagnóstico 20 min (Meet o presencial Las Condes)</li>
                <li>· Propuesta con tramo y checklist</li>
                <li>· Si aceptas, migración en 48h</li>
              </ul>
              <p className="resumen-stats">239 pymes al día · 98,2% F29 sin atraso</p>
              <div className="resumen-mapa">
                Atención RM presencial & remoto todo Chile · Lun-Vie 9:00-18:30
              </div>
              <div className="resumen-media">
                {!oficinaMissing ? (
                  <img
                    src={fallbackUsed ? '/media/folio-regimen-4x3.png' : '/media/folio-oficina-4x3.png'}
                    alt="FOLIO — Las Condes"
                    loading="lazy"
                    onError={handleOficinaError}
                  />
                ) : (
                  <div className="media-falta" data-falta="folio-oficina-4x3.png">media pendiente: folio-oficina-4x3.png</div>
                )}
                <p className="media-caption" style={{ color: '#8AA0B5' }}>FOLIO — Las Condes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">FOLIO</span>
            <span className="logo-sub">ESTUDIO CONTABLE</span>
            <p className="footer-rut">RUT 76.123.456-7 · Las Condes, Santiago</p>
          </div>
          <div className="footer-links">
            <a href="#calendario-sii">Calendario</a>
            <a href="#regimen-tributario">Régimen</a>
            <a href="#planes-mensuales">Planes</a>
            <a href="#faq-sii">FAQ</a>
          </div>
          <div className="footer-contact">
            <p>+56 9 8405 1234 · hola@folio.cl · Lun-Vie 9:00-18:30</p>
          </div>
          <div className="footer-news">
            <form onSubmit={(e) => e.preventDefault()} className="news-form">
              <input placeholder="Tu mail" aria-label="Tu mail" />
              <button type="submit" aria-label="Suscribir">→</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 FOLIO Estudio Contable. Hecho en Chile.</span>
          <span>Valores referenciales; se confirma tras diagnóstico. No somos SII.</span>
        </div>
      </div>
    </footer>
  );
}

function StickyMobile() {
  const [visible, setVisible] = useState(false);
  const [hiddenByAgenda, setHiddenByAgenda] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
      const el = document.getElementById('agenda-diagnostico');
      if (el) {
        const rect = el.getBoundingClientRect();
        // hide when agenda is in viewport (top within window)
        setHiddenByAgenda(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible || hiddenByAgenda) return null;

  return (
    <div className="sticky-bar">
      <a href="tel:+56984051234" className="sticky-btn">Llamar</a>
      <a href="https://wa.me/56984051234" target="_blank" rel="noopener noreferrer" className="sticky-btn sticky-wa">WhatsApp</a>
    </div>
  );
}

export function App() {
  const _ = useRef(null);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CalendarioSII />
        <RegimenTributario />
        <Remuneraciones />
        <PlanesMensuales />
        <ComoTrabajamos />
        <FaqSII />
        <AgendaDiagnostico />
      </main>
      <Footer />
      <StickyMobile />
    </>
  );
}
