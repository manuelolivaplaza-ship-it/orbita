import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const cb = (e: MediaQueryListEvent) => setReduced(e.matches);
    m.addEventListener("change", cb);
    return () => m.removeEventListener("change", cb);
  }, []);
  return reduced;
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock scroll when drawer open (mobile only)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="header" role="banner">
        <div className="header__inner">
          <a href="#senal" className="logo" aria-label="FOCO, ir a señal">
            FOCO
          </a>

          <nav className="nav" aria-label="Navegación principal">
            <a className="nav__link" href="#senal">
              Señal
            </a>
            <a className="nav__link" href="#traccion">
              Tracción
            </a>
            <a className="nav__link" href="#pruebas">
              Pruebas
            </a>
            <a className="nav__link" href="#planes">
              Planes
            </a>
            <a className="nav__link" href="#sala">
              Sala
            </a>
            <a className="nav__link" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="header__right">
            <a className="tel" href="tel:+56982304177">
              +56 9 8230 4177
            </a>
            <a className="cta-header" href="#brief">
              Pide auditoría
            </a>
          </div>

          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="drawer-foco"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="drawer-foco"
        className={`drawer ${open ? "drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer__backdrop" onClick={close} />
        <div className="drawer__panel" role="dialog" aria-modal="true" aria-label="Menú">
          <nav className="drawer__nav" aria-label="Navegación móvil">
            <a className="drawer__link" href="#senal" onClick={close}>
              Señal
            </a>
            <a className="drawer__link" href="#traccion" onClick={close}>
              Tracción
            </a>
            <a className="drawer__link" href="#pruebas" onClick={close}>
              Pruebas
            </a>
            <a className="drawer__link" href="#planes" onClick={close}>
              Planes
            </a>
            <a className="drawer__link" href="#sala" onClick={close}>
              Sala
            </a>
            <a className="drawer__link" href="#faq" onClick={close}>
              FAQ
            </a>
          </nav>
          <a className="drawer__cta" href="#brief" onClick={close}>
            Pide auditoría
          </a>
        </div>
      </div>
    </>
  );
}

function Hero() {
  const reduced = usePrefersReducedMotion();
  const [imgErrorDesktop, setImgErrorDesktop] = useState(false);
  const [imgErrorMobile, setImgErrorMobile] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const missingDesktop = imgErrorDesktop;
  const missingMobile = imgErrorMobile;

  useEffect(() => {
    // report missing media in console as spec requires
    if (missingDesktop) {
      console.warn("[FOCO] falta: foco-hero-16x9.png");
    }
    if (missingMobile) {
      console.warn("[FOCO] falta: foco-hero-9x16.png");
    }
  }, [missingDesktop, missingMobile]);

  useEffect(() => {
    // check video existence via HEAD fetch
    let cancelled = false;
    fetch("/media/foco-hero-loop.mp4", { method: "HEAD" })
      .then((r) => {
        if (!cancelled && r.ok) setHasVideo(true);
      })
      .catch(() => {
        if (!cancelled) setHasVideo(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // H1 lines for clip-reveal
  const h1Lines = ["Tracción medible, sin humo.", "FOCO prende sólo lo que vende de verdad."];

  return (
    <section id="senal" className="hero" aria-label="Señal">
      <div className="hero__grid">
        {/* Media: background */}
        <div className="hero__media" aria-hidden="true">
          {hasVideo && !videoError && (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/media/foco-hero-16x9.png"
              onError={() => setVideoError(true)}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            >
              <source src="/media/foco-hero-loop.mp4" type="video/mp4" />
            </video>
          )}

          {/* Desktop img */}
          {!missingDesktop ? (
            <img
              className="hero__img-desktop"
              src="/media/foco-hero-16x9.png"
              alt="Sala de señales FOCO, panel analógico nocturno"
              onError={() => setImgErrorDesktop(true)}
            />
          ) : (
            <div
              className="media-falta"
              data-falta="foco-hero-16x9.png"
              style={{
                gridColumn: "6/13",
                background: "var(--panel)",
                aspectRatio: "16/9",
                display: "grid",
                placeItems: "center",
                color: "var(--muted)",
                fontSize: "12px",
                border: "1px solid var(--linea)",
              }}
            >
              falta: foco-hero-16x9.png
            </div>
          )}

          {/* Mobile img - same container but toggled via CSS; we duplicate for fallback logic */}
          {!missingMobile ? (
            <img
              className="hero__img-mobile"
              src="/media/foco-hero-9x16.png"
              alt="Sala de señales FOCO, panel analógico nocturno"
              onError={() => setImgErrorMobile(true)}
            />
          ) : (
            <div
              className="media-falta hero__img-mobile"
              data-falta="foco-hero-9x16.png"
              style={{
                background: "var(--panel)",
                aspectRatio: "9/16",
                display: "grid",
                placeItems: "center",
                color: "var(--muted)",
                fontSize: "12px",
                border: "1px solid var(--linea)",
              }}
            >
              falta: foco-hero-9x16.png
            </div>
          )}
        </div>

        {/* Content overlay */}
        <div className="hero__content">
          <p className="hero__kicker">AGENCIA DE PERFORMANCE · SANTIAGO — DESDE 2018</p>

          <h1 className="hero__h1">
            {h1Lines.map((line, i) =>
              reduced ? (
                <span key={i} className="hero__h1-line">
                  <span className="hero__h1-inner">{line}</span>
                </span>
              ) : (
                <span key={i} className="hero__h1-line">
                  <motion.span
                    className="hero__h1-inner"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.42,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              )
            )}
          </h1>

          <p className="hero__subhead">
            Pauta que se paga sola. Contenido que convierte. Web que cierra. Si no se puede medir, no lo
            hacemos.
          </p>

          <ul className="hero__bullets" aria-label="Señales de tracción">
            {[
              "CPL y ROAS en tu panel cada lunes",
              "Pausa lo que no vende en 48h",
              "Contrato mensual, sin amarras",
            ].map((text, idx) =>
              reduced ? (
                <li key={text} className="hero__bullet">
                  <span className="hero__dot" aria-hidden="true" />
                  {text}
                </li>
              ) : (
                <motion.li
                  key={text}
                  className="hero__bullet"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.42,
                    delay: 0.32 + idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="hero__dot" aria-hidden="true" />
                  {text}
                </motion.li>
              )
            )}
          </ul>

          <div className="hero__ctas">
            <a className="cta-primary" href="#brief">
              Pide auditoría de pauta — $0
            </a>
            <a
              className="cta-secondary"
              href="https://wa.me/56982304177"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <p className="hero__micro">Respuesta en 24h hábiles · No pedimos tu clave de Ads para auditar</p>
        </div>
      </div>

      <span className="hero__caption">Sala de señales FOCO · 23:14 · CPL $2.340 · ROAS 4,1</span>
    </section>
  );
}

// ────────────────────────────────
// BUILD-02 — secciones adicionales
// ────────────────────────────────

function MediaFallback({ filename, aspect }: { filename: string; aspect: string }) {
  return (
    <div className="media-falta" data-falta={filename} style={{ aspectRatio: aspect }}>
      falta: {filename}
    </div>
  );
}

function Traccion() {
  const reduced = usePrefersReducedMotion();
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);

  return (
    <section id="traccion" className="section section--traccion">
      <div className="section__inner">
        {/* Intro */}
        <div className="traccion__intro">
          <p className="kicker">TRACCIÓN · NO POSTEO BONITO</p>
          <h2 className="h2">Tres palancas. Una sola meta: que entre plata.</h2>
        </div>

        {/* Grilla pilares */}
        <div className="traccion__grid">
          {/* Pilar 01 */}
          <article className="pilar">
            <div className="pilar__num" aria-hidden="true">01</div>
            <div className="pilar__filete" aria-hidden="true">
              {reduced ? (
                <span className="pilar__filete-inner" style={{ width: "24px" }} />
              ) : (
                <motion.span
                  className="pilar__filete-inner"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </div>
            <div className="pilar__media-wrap" style={{ aspectRatio: "1 / 1" }}>
              {!err1 ? (
                <img
                  src="/media/foco-tile-01-1x1.png"
                  alt="Detalle de fader analógico con LED lime"
                  loading="lazy"
                  onError={() => setErr1(true)}
                />
              ) : (
                <MediaFallback filename="foco-tile-01-1x1.png" aspect="1 / 1" />
              )}
            </div>
            <h3 className="pilar__title">Pauta que se paga sola</h3>
            <p className="pilar__desc">
              Meta + Google con estructura que resiste escala. Testeamos 3 ángulos por semana, pausamos lo que
              no vende.
            </p>
            <ul className="pilar__bullets">
              <li>Estructura ABO/CBO según ticket</li>
              <li>Creativo nuevo cada lunes</li>
              <li>Reporte lunes 9:00 con CPL y ROAS</li>
            </ul>
          </article>

          {/* Pilar 02 */}
          <article className="pilar">
            <div className="pilar__num" aria-hidden="true">02</div>
            <div className="pilar__filete" aria-hidden="true">
              {reduced ? (
                <span className="pilar__filete-inner" style={{ width: "24px" }} />
              ) : (
                <motion.span
                  className="pilar__filete-inner"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
                />
              )}
            </div>
            <div className="pilar__media-wrap" style={{ aspectRatio: "3 / 4" }}>
              {!err2 ? (
                <img
                  src="/media/foco-tile-02-3x4.png"
                  alt="Mesa de edición con grilla de thumbnails"
                  loading="lazy"
                  onError={() => setErr2(true)}
                />
              ) : (
                <MediaFallback filename="foco-tile-02-3x4.png" aspect="3 / 4" />
              )}
            </div>
            <h3 className="pilar__title">Contenido que convierte</h3>
            <p className="pilar__desc">12 piezas al mes pensadas para clic, no para like. Guion + edición + subtítulo.</p>
            <ul className="pilar__bullets">
              <li>Hooks de 3s validados</li>
              <li>UGC y founder-led</li>
              <li>Biblioteca de anuncios que ya vendió</li>
            </ul>
          </article>

          {/* Pilar 03 */}
          <article className="pilar">
            <div className="pilar__num" aria-hidden="true">03</div>
            <div className="pilar__filete" aria-hidden="true">
              {reduced ? (
                <span className="pilar__filete-inner" style={{ width: "24px" }} />
              ) : (
                <motion.span
                  className="pilar__filete-inner"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
                />
              )}
            </div>
            <div className="pilar__media-wrap" style={{ aspectRatio: "1 / 1" }}>
              {!err3 ? (
                <img
                  src="/media/foco-tile-03-1x1.png"
                  alt="Laptop cerrada negra con sticker lime"
                  loading="lazy"
                  onError={() => setErr3(true)}
                />
              ) : (
                <MediaFallback filename="foco-tile-03-1x1.png" aspect="1 / 1" />
              )}
            </div>
            <h3 className="pilar__title">Web que cierra</h3>
            <p className="pilar__desc">Landing que carga en 1,4s y cierra sin fricción. Sin humo, con prueba.</p>
            <ul className="pilar__bullets">
              <li>LCP &lt;1,8s, formulario en 1 tap</li>
              <li>Calendario + WhatsApp + pago</li>
              <li>Pixel y server-side bien instalado</li>
            </ul>
          </article>
        </div>

        {/* Barra live */}
        <div className="live-bar" role="status" aria-label="Indicador live">
          <span className="live-dot" aria-hidden="true" />
          <span>● LIVE · Inversión activa $3.420.000 · CPL promedio $2.870 · ROAS 3,8</span>
        </div>
      </div>
    </section>
  );
}

function Pruebas() {
  const casos = [
    {
      title: "Clínica — Las Condes",
      metrica: "CPL $2.340 → $1.820 en 41 días",
      detalle: "Inversión $1.860.000/mes · 83 leads calificados · ROAS 4,1",
      nota: "Lead calificado = agenda tomada, no formulario vacío.",
      file: "foco-proof-16x9.png",
      alt: "Muro de monitores con reflejo lime",
    },
    {
      title: "Inmobiliaria — La Florida",
      metrica: "CPL $8.900 → $5.420 · 37 reservas en 60 días",
      detalle: "Ticket $1,8MM · Inversión $3,2MM/mes · Cierre 18%",
      nota: null,
      file: "foco-tile-04-4x3.png",
      alt: "Ticket impreso con números CPL y sello lime",
    },
    {
      title: "E-commerce — Maipú",
      metrica: "ROAS 1,8 → 3,4 en 52 días",
      detalle: "AOV $42.000 · Inversión $2,4MM/mes · 312 pedidos",
      nota: null,
      file: "foco-proof-16x9.png",
      alt: "Muro de monitores con reflejo lime",
    },
    {
      title: "Servicios B2B — Providencia",
      metrica: "Reuniones $18.500 CPL · 22 demos/mes",
      detalle: "Ciclo 14 días · Inversión $1,5MM/mes",
      nota: null,
      file: "foco-tile-04-4x3.png",
      alt: "Ticket impreso con números CPL y sello lime",
    },
  ];

  return (
    <section id="pruebas" className="section section--pruebas">
      <div className="section__inner">
        <div className="pruebas__head">
          <p className="kicker">PRUEBAS · NÚMEROS, NO ADJETIVOS</p>
          <h2 className="h2">Si no baja el CPL, no hay caso.</h2>
        </div>

        <div className="pruebas__grid">
          {casos.map((c) => (
            <CasoCard key={c.title} caso={c} />
          ))}
        </div>

        <p className="pruebas__legal">
          Resultados referenciales de cuentas reales. No prometemos el mismo CPL sin auditar tu ticket y tu cierre.
        </p>
      </div>
    </section>
  );
}

function CasoCard({ caso }: { caso: { title: string; metrica: string; detalle: string; nota: string | null; file: string; alt: string } }) {
  const [err, setErr] = useState(false);
  return (
    <article className="caso">
      <div className="caso__media" style={{ aspectRatio: "4 / 3" }}>
        {!err ? (
          <img src={`/media/${caso.file}`} alt={caso.alt} loading="lazy" onError={() => setErr(true)} />
        ) : (
          <MediaFallback filename={caso.file} aspect="4 / 3" />
        )}
      </div>
      <div className="caso__body">
        <h3 className="caso__title">{caso.title}</h3>
        <p className="caso__metrica">{caso.metrica}</p>
        <p className="caso__detalle">{caso.detalle}</p>
        {caso.nota && <p className="caso__nota">{caso.nota}</p>}
      </div>
    </article>
  );
}

function Planes() {
  return (
    <section id="planes" className="section section--planes">
      <div className="section__inner">
        <div className="planes__head">
          <p className="kicker">PLANES · SIN LETRA CHICA</p>
          <h2 className="h2">Paga por tracción, no por humo.</h2>
        </div>

        <div className="planes__grid">
          {/* PAUTA PERFORMANCE */}
          <article className="plan">
            <p className="plan__etiqueta">PAUTA PERFORMANCE</p>
            <p className="plan__precio">
              <span className="plan__desde">desde</span>
              $550.000 / mes
            </p>
            <p className="plan__sub">sin inversión en medios incluida</p>
            <ul className="plan__bullets">
              <li>Meta + Google (1 cuenta)</li>
              <li>Hasta 8 creativos/mes</li>
              <li>Estructura ABO/CBO + test semanal</li>
              <li>Reporte lunes con CPL/ROAS</li>
              <li>Pausa/escala en 48h</li>
            </ul>
            <a className="plan__cta" href="#brief">
              Pide auditoría de pauta
            </a>
            <p className="plan__nota">Contrato mensual. Inversión recomendada desde $800.000/mes.</p>
          </article>

          {/* PACK TRACCIÓN — RECOMENDADO */}
          <article className="plan plan--featured">
            <p className="plan__etiqueta">PACK TRACCIÓN — RECOMENDADO</p>
            <p className="plan__precio">
              <span className="plan__desde">desde</span>
              $890.000 / mes
            </p>
            <p className="plan__sub">Ahorra $210.000 vs separado</p>
            <ul className="plan__bullets">
              <li>Todo Pauta + 12 piezas UGC/founder-led</li>
              <li>Landing de campaña incluida</li>
              <li>Calendario + WhatsApp + tracking</li>
              <li>2 reuniones/mes</li>
            </ul>
            <a className="plan__cta plan__cta--accent" href="#brief">
              Quiero el Pack Tracción
            </a>
            <p className="plan__nota">Ahorra $210.000 vs separado.</p>
          </article>

          {/* CONTENIDO + WEB */}
          <article className="plan">
            <p className="plan__etiqueta">CONTENIDO + WEB</p>
            <p className="plan__precio plan__precio--small">Contenido desde $690.000 / mes · Web desde $1.450.000 (único pago)</p>
            <ul className="plan__bullets">
              <li>12 piezas con guion y subtítulo</li>
              <li>Web LCP &lt;1,8s</li>
              <li>Pixel + server-side + GA4</li>
            </ul>
            <a className="plan__cta" href="#brief">
              Cotizar contenido o web
            </a>
          </article>
        </div>

        <div className="planes__auditoria">
          Auditoría de pauta + roadmap 30 días — $390.000 (pago único, se descuenta si activas plan). Valores
          referenciales; se confirma tras diagnóstico. Inversión en medios no incluida. Boleta o factura.
        </div>

        <p className="planes__micro">Si tu ticket es &lt; $25.000, te diremos que no conviene pauta y te propondremos orgánico.</p>
      </div>
    </section>
  );
}

function Sala() {
  const [err, setErr] = useState(false);
  return (
    <section id="sala" className="section section--sala">
      <div className="section__inner sala__inner">
        <div className="sala__left">
          <p className="kicker">SALA · CÓMO TRABAJAMOS</p>
          <h2 className="h2">War-room semanal. Sin comités.</h2>
          <ol className="sala__steps">
            <li className="sala__step">
              <span className="sala__step-num">01</span>
              <div>
                <p className="sala__step-title">AUDITORÍA (semana 0)</p>
                <p className="sala__step-desc">Revisamos cuenta, pixel, cierre y ticket. Si no hay encaje, te decimos no.</p>
              </div>
            </li>
            <li className="sala__step">
              <span className="sala__step-num">02</span>
              <div>
                <p className="sala__step-title">HIPÓTESIS (semana 1)</p>
                <p className="sala__step-desc">3 ángulos, 2 ofertas, 1 landing. Todo medible.</p>
              </div>
            </li>
            <li className="sala__step">
              <span className="sala__step-num">03</span>
              <div>
                <p className="sala__step-title">TRACCIÓN (semana 2-4)</p>
                <p className="sala__step-desc">Escalamos lo que baja CPL, pausamos lo que no. Reporte lunes 9:00.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="sala__right">
          <div className="sala__media" style={{ aspectRatio: "16 / 9" }}>
            {!err ? (
              <img
                src="/media/foco-interior-16x9.png"
                alt="Sala FOCO vacía, mesa negra larga y pizarra"
                loading="lazy"
                onError={() => setErr(true)}
              />
            ) : (
              <MediaFallback filename="foco-interior-16x9.png" aspect="16 / 9" />
            )}
          </div>
          <p className="sala__caption">Sala FOCO · Providencia · Mesa de edición, no sala de reuniones</p>
          <div className="sala__bitacora">
            Semana 03 · CPL $2.410 ↓12% · Anuncio ganador: ‘antes/después sin filtro’ · Acción: subir presupuesto 22%
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: "¿Piden contrato anual?", a: "No. Mensual, con 7 días de aviso. Si no tracciona, paras." },
    {
      q: "¿Incluyen la inversión en medios?",
      a: "No. La pagas directo a Meta/Google. Nosotros cobramos gestión. Te recomendamos desde $800.000/mes.",
    },
    { q: "¿Cuándo veo el primer CPL real?", a: "Entre día 4 y 10, según ticket y cierre. Reporte formal lunes 9:00." },
    {
      q: "¿Hacen contenido o solo pauta?",
      a: "Ambos. 12 piezas UGC/founder-led al mes si tomas Pack. Si tienes equipo interno, lo dirigimos.",
    },
    { q: "¿Qué pasa si mi ticket es bajo?", a: "Si tu ticket < $25.000, te diremos que priorices orgánico o ticket mayor." },
    { q: "¿Puedo hablar con un cliente actual?", a: "Sí. Te conectamos con 1 cuenta activa (con permiso) para que preguntes cierre y trato." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="section section--faq">
      <div className="section__inner faq__inner">
        <div className="faq__left">
          <h2 className="h2">Dudas de pauta, sin humo.</h2>
        </div>
        <div className="faq__right" role="list">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq__item ${isOpen ? "faq__item--open" : ""}`} role="listitem">
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  type="button"
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={`faq-a-${idx}`}
                  className="faq__a-wrap"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <p className="faq__a">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type FormState = {
  nombre: string;
  empresa: string;
  whatsapp: string;
  ticket: string;
  pauta: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function Brief() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    empresa: "",
    whatsapp: "",
    ticket: "",
    pauta: "No",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const lsKey = "foco-brief-draft";

  // load draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(lsKey);
      if (raw) {
        const parsed = JSON.parse(raw) as FormState;
        setForm((prev) => ({ ...prev, ...parsed }));
      }
    } catch {}
  }, []);

  // save draft
  useEffect(() => {
    try {
      localStorage.setItem(lsKey, JSON.stringify(form));
    } catch {}
  }, [form]);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!form.empresa.trim()) e.empresa = "Ingresa tu empresa.";
    if (!form.whatsapp.trim()) {
      e.whatsapp = "Ingresa tu WhatsApp.";
    } else {
      const cleaned = form.whatsapp.replace(/[\s\-\(\)]/g, "");
      // acepta +569..., 569..., 9xxxxxxxx
      if (!/^(?:\+?56)?9\d{8}$/.test(cleaned)) {
        e.whatsapp = "Formato: +56 9 1234 5678 o 9 1234 5678.";
      }
    }
    if (!form.ticket.trim()) {
      e.ticket = "Ingresa tu ticket promedio.";
    } else {
      const num = form.ticket.replace(/[\.\,\s\$]/g, "");
      if (!/^\d+$/.test(num) || Number(num) <= 0) {
        e.ticket = "Debe ser un número en CLP.";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.removeItem(lsKey);
      } catch {}
      setForm({ nombre: "", empresa: "", whatsapp: "", ticket: "", pauta: "No", mensaje: "" });
    }, 900);
  };

  const update = (k: keyof FormState, v: string) => {
    setForm((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
    if (success) setSuccess(false);
  };

  return (
    <section id="brief" className="section section--brief">
      <div className="section__inner brief__inner">
        <div className="brief__left">
          <h2 className="h2">¿Listo para medir de verdad?</h2>
          <p className="brief__bajada">
            Cuéntanos ticket, cierre y pauta actual. Te decimos en 24h si hay tracción y cuánto CPL esperar.
          </p>
          <div className="brief__datos">
            <p>Providencia, Santiago · +56 9 8230 4177 · hola@foco.cl · Lun–Vie 9:00–18:30</p>
            <p>
              Metro Los Leones · 4 cuadras —{" "}
              <a href="https://maps.google.com/?q=Metro+Los+Leones+Santiago" target="_blank" rel="noopener noreferrer" className="brief__maps">
                Ver en Maps
              </a>
            </p>
          </div>
        </div>

        <div className="brief__right">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form__grid">
              <label className="form__field">
                <span className="form__label">Nombre*</span>
                <input
                  className={`form__input ${errors.nombre ? "form__input--error" : ""}`}
                  type="text"
                  value={form.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  autoComplete="name"
                />
                {errors.nombre && <span className="form__error">{errors.nombre}</span>}
              </label>

              <label className="form__field">
                <span className="form__label">Empresa*</span>
                <input
                  className={`form__input ${errors.empresa ? "form__input--error" : ""}`}
                  type="text"
                  value={form.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  autoComplete="organization"
                />
                {errors.empresa && <span className="form__error">{errors.empresa}</span>}
              </label>

              <label className="form__field">
                <span className="form__label">WhatsApp*</span>
                <input
                  className={`form__input ${errors.whatsapp ? "form__input--error" : ""}`}
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="+56 9 1234 5678"
                  autoComplete="tel"
                />
                {errors.whatsapp && <span className="form__error">{errors.whatsapp}</span>}
              </label>

              <label className="form__field">
                <span className="form__label">Ticket promedio (CLP)*</span>
                <input
                  className={`form__input ${errors.ticket ? "form__input--error" : ""}`}
                  type="text"
                  inputMode="numeric"
                  value={form.ticket}
                  onChange={(e) => update("ticket", e.target.value)}
                  placeholder="38000"
                />
                {errors.ticket && <span className="form__error">{errors.ticket}</span>}
              </label>

              <label className="form__field form__field--full">
                <span className="form__label">¿Haces pauta hoy?</span>
                <select
                  className="form__input form__select"
                  value={form.pauta}
                  onChange={(e) => update("pauta", e.target.value)}
                >
                  <option value="No">No</option>
                  <option value="Meta">Meta</option>
                  <option value="Google">Google</option>
                  <option value="Ambas">Ambas</option>
                </select>
              </label>

              <label className="form__field form__field--full">
                <span className="form__label">Mensaje</span>
                <textarea
                  className="form__input form__textarea"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => update("mensaje", e.target.value)}
                  placeholder="Ej: vendemos boxes por $38.000, cerramos 22% por WhatsApp, invertimos $600k en Meta sin CPL claro"
                />
              </label>
            </div>

            <button type="submit" className="form__submit" disabled={loading}>
              {loading ? "Enviando…" : "Enviar brief → te respondemos en 24h"}
            </button>

            {success && <p className="form__success">Brief recibido. Te escribimos hoy.</p>}

            <p className="form__micro">Al enviar aceptas que te contactemos por WhatsApp o mail. No spam.</p>

            <a
              className="form__wa"
              href="https://wa.me/56982304177?text=Hola%20FOCO,%20quiero%20auditor%C3%ADa%20de%20pauta"
              target="_blank"
              rel="noopener noreferrer"
            >
              O escríbenos directo por WhatsApp →
            </a>
          </form>
        </div>
      </div>

      {/* Footer legal */}
      <div className="section__inner">
        <footer className="footer-legal">
          <span>FOCO SpA · RUT 77.xxx.xxx-8 · Santiago, Chile · 2026 · Boleta/factura</span>
          <span>Privacidad: no usamos tu pauta como caso sin permiso.</span>
        </footer>
      </div>
    </section>
  );
}

function StickyBar() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const hero = document.getElementById("senal");
        const h = hero ? hero.getBoundingClientRect().height : window.innerHeight * 0.72;
        setVisible(window.scrollY > h - 80);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <div className="sticky-bar" role="complementary" aria-label="Acciones rápidas">
      <a className="sticky-bar__link" href="tel:+56982304177">
        Llamar
      </a>
      <a className="sticky-bar__link sticky-bar__link--accent" href="https://wa.me/56982304177" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Traccion />
        <Pruebas />
        <Planes />
        <Sala />
        <Faq />
        <Brief />
      </main>
      <StickyBar />
    </>
  );
}
