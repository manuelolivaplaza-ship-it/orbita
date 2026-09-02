import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const BASE = import.meta.env.BASE_URL;

function Falta({ file, ratio }: { file: string; ratio: string }) {
  return (
    <div className="sd-falta" data-falta={file} style={{ aspectRatio: ratio }}>
      falta: {file}
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [tile01Error, setTile01Error] = useState(false);
  const [tile02Error, setTile02Error] = useState(false);
  const [tile03Error, setTile03Error] = useState(false);
  const [tile04Error, setTile04Error] = useState(false);
  const [interiorError, setInteriorError] = useState(false);
  const [proofError, setProofError] = useState(false);

  const [accOpen, setAccOpen] = useState<number | null>(null);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("Evaluación general");
  const [detalle, setDetalle] = useState("");
  const [whatsappOk, setWhatsappOk] = useState(true);
  const [errors, setErrors] = useState<{ nombre?: string; telefono?: string; email?: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [stickyVisible, setStickyVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgError) console.warn("falta: serena-dental-hero-16x9.png");
  }, [imgError]);
  useEffect(() => {
    if (interiorError) console.warn("falta: serena-dental-interior-16x9.png");
    if (tile01Error) console.warn("falta: serena-dental-tile-01-1x1.png");
    if (tile02Error) console.warn("falta: serena-dental-tile-02-3x4.png");
    if (tile03Error) console.warn("falta: serena-dental-tile-03-1x1.png");
    if (tile04Error) console.warn("falta: serena-dental-tile-04-3x4.png");
    if (proofError) console.warn("falta: serena-dental-proof-16x9.png");
  }, [interiorError, tile01Error, tile02Error, tile03Error, tile04Error, proofError]);

  useEffect(() => {
    const og = `${BASE}media/serena-dental-og-16x9.png`;
    let el = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", "og:image");
      document.head.appendChild(el);
    }
    el.setAttribute("content", new URL(og, window.location.href).href);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { rootMargin: "0px", threshold: 0 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.paddingBottom = stickyVisible ? "72px" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [stickyVisible]);

  const hero16 = `${BASE}media/serena-dental-hero-16x9.png`;
  const hero9 = `${BASE}media/serena-dental-hero-9x16.png`;
  const heroVideo = `${BASE}media/serena-dental-hero-loop.mp4`;
  const interior = `${BASE}media/serena-dental-interior-16x9.png`;
  const tile01 = `${BASE}media/serena-dental-tile-01-1x1.png`;
  const tile02 = `${BASE}media/serena-dental-tile-02-3x4.png`;
  const tile03 = `${BASE}media/serena-dental-tile-03-1x1.png`;
  const tile04 = `${BASE}media/serena-dental-tile-04-3x4.png`;
  const proof = `${BASE}media/serena-dental-proof-16x9.png`;

  const validate = () => {
    const e: typeof errors = {};
    if (nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres).";
    const telClean = telefono.replace(/\s/g, "");
    const telOk = /^(\+?56)?\s*9\d{8}$/.test(telClean);
    if (!telOk) e.telefono = "Ingresa un teléfono válido +56 9 1234 5678.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Revisa el email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const payload = { nombre, telefono, email, motivo, detalle, whatsappOk, fecha: new Date().toISOString() };
      try {
        localStorage.setItem("serena-agenda", JSON.stringify(payload));
      } catch {}
      const msg = `Hola SERENA DENTAL quiero agendar evaluación mi nombre es ${nombre} (${telefono}) motivo: ${motivo} ${detalle ? "- " + detalle : ""}`;
      const wa = `https://wa.me/56987654321?text=${encodeURIComponent(msg)}`;
      window.open(wa, "_blank");
    }, 800);
  };

  return (
    <>
      <header className="sd-top">
        <div className="sd-top__inner">
          <a href="#portada-dentista-b-claro" className="sd-brand" aria-label="SERENA DENTAL inicio">
            SERENA DENTAL
          </a>

          <nav className="sd-nav" aria-label="Navegación principal">
            <a href="#primera-evaluacion-dentista-b-claro">Evaluación</a>
            <a href="#especialidades-reales-dentista-b-claro">Especialidades</a>
            <a href="#tratamientos-arancel-dentista-b-claro">Tratamientos</a>
            <a href="#isapre-reembolso-dentista-b-claro">Isapre</a>
          </nav>

          <div className="sd-top__actions">
            <a href="tel:+56987654321" className="sd-tel" aria-label="Llamar +56 9 8765 4321">
              +56 9 8765 4321
            </a>

            <a href="tel:+56987654321" className="sd-iconbtn" aria-label="Llamar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <a href="#agenda-serena" className="sd-cta">
              Agendar evaluación
            </a>

            <button
              className="sd-burger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`sd-drawer ${menuOpen ? "open" : ""}`}>
          <nav aria-label="Navegación móvil">
            <a href="#primera-evaluacion-dentista-b-claro" onClick={() => setMenuOpen(false)}>Evaluación</a>
            <a href="#especialidades-reales-dentista-b-claro" onClick={() => setMenuOpen(false)}>Especialidades</a>
            <a href="#tratamientos-arancel-dentista-b-claro" onClick={() => setMenuOpen(false)}>Tratamientos</a>
            <a href="#isapre-reembolso-dentista-b-claro" onClick={() => setMenuOpen(false)}>Isapre</a>
            <a href="tel:+56987654321" onClick={() => setMenuOpen(false)}>+56 9 8765 4321</a>
          </nav>
        </div>
      </header>

      <div ref={sentinelRef} aria-hidden="true" style={{ position: "absolute", top: "40vh", height: 1, width: 1 }} />

      <main>
        {/* HERO — flujo editorial, flex asimétrico */}
        <section id="portada-dentista-b-claro" className="sd-portada">
          <motion.div
            className="sd-portada__copy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="sd-eyebrow">CLÍNICA DENTAL · ÑUÑOA</p>
            <h1 className="sd-h1">Odontología seria, sin sustos ni letra chica.</h1>
            <p className="sd-lead">
              Diagnóstico explicado, presupuesto por escrito y tratamiento a tu ritmo. El mismo dentista te acompaña de principio a fin.
            </p>
            <div className="sd-portada__ctas">
              <a href="#agenda-serena" className="sd-btn sd-btn--primary">Agendar evaluación</a>
              <a href="#tratamientos-arancel-dentista-b-claro" className="sd-btn sd-btn--ghost">Ver valores</a>
            </div>
            <div className="sd-banda" aria-label="Información de atención">
              <span className="sd-banda__item">Atención con hora o por urgencia</span>
              <span className="sd-banda__dot" aria-hidden="true" />
              <span className="sd-banda__item">Convenios con las principales isapres</span>
              <span className="sd-banda__dot" aria-hidden="true" />
              <span className="sd-banda__item">Boleta reembolsable</span>
            </div>
            <p className="sd-micro">
              Si el plan cambia después de la evaluación, te avisamos antes de partir. Nunca iniciamos sin tu aprobación por escrito.
            </p>
          </motion.div>

          <motion.div
            className="sd-portada__visual"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: "easeOut", delay: 0.12 }}
          >
            {!imgError ? (
              <div className="sd-frame">
                <div className="sd-frame__inner">
                  {!videoError ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={hero16}
                      className="sd-media--desktop"
                      onError={() => setVideoError(true)}
                      aria-label="Box dental Serena Dental"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    >
                      <source src={heroVideo} type="video/mp4" />
                    </video>
                  ) : null}
                  <img
                    src={hero16}
                    alt="Box 2 de Serena Dental, luz norte en Ñuñoa, sillón dental en tercio derecho con espacio negativo a la izquierda"
                    className="sd-media--desktop"
                    loading="eager"
                    decoding="async"
                    onError={() => setImgError(true)}
                    style={videoError ? undefined : { display: "none" }}
                  />
                  <img
                    src={hero9}
                    alt="Box 2 de Serena Dental, luz norte en Ñuñoa, vista vertical"
                    className="sd-media--mobile"
                    loading="eager"
                    decoding="async"
                    onError={() => setImgError(true)}
                  />
                </div>
              </div>
            ) : (
              <Falta file="serena-dental-hero-16x9.png" ratio="16/9" />
            )}
            <p className="sd-frame__cap">Box 2 · luz norte · Ñuñoa</p>
          </motion.div>
        </section>

        {/* #primera-evaluacion — ahora 2ª: protocolo antes del precio */}
        <section id="primera-evaluacion-dentista-b-claro" className="sd-section sd-section--alt">
          <div className="sd-eval">
            <div className="sd-eval__visual">
              <div className="sd-eval__shot">
                {!interiorError ? (
                  <img
                    src={interior}
                    alt="Box dental ordenado con sillón vacío e instrumental en bandeja auxiliar, luz norte difusa, Ñuñoa"
                    loading="lazy"
                    decoding="async"
                    onError={() => setInteriorError(true)}
                  />
                ) : !tile01Error ? (
                  <img
                    src={tile01}
                    alt="Bandeja con instrumental esterilizado sobre lino blanco"
                    loading="lazy"
                    decoding="async"
                    onError={() => setTile01Error(true)}
                  />
                ) : (
                  <Falta file="serena-dental-interior-16x9.png" ratio="4/3" />
                )}
              </div>
            </div>

            <div className="sd-eval__body">
              <p className="sd-kicker">PRIMERA VISITA</p>
              <h2 className="sd-h2">La evaluación de 45 minutos que te deja todo claro</h2>
              <p className="sd-intro">No es una limpieza express. Es una cita para entender tu boca, sin apuro y sin venderte lo que no necesitas.</p>

              <div className="sd-steps">
                <div className="sd-step">
                  <span className="sd-step__num">01</span>
                  <div>
                    <h3 className="sd-step__title">01 · Scanner y radiografía</h3>
                    <p className="sd-step__text">Fotos intraorales y radiografía digital en el mismo box. Ves lo que vemos.</p>
                  </div>
                </div>
                <div className="sd-step">
                  <span className="sd-step__num">02</span>
                  <div>
                    <h3 className="sd-step__title">02 · Diagnóstico en palabras simples</h3>
                    <p className="sd-step__text">Te mostramos en pantalla qué pasa, qué es urgente y qué puede esperar. Preguntas todas.</p>
                  </div>
                </div>
                <div className="sd-step">
                  <span className="sd-step__num">03</span>
                  <div>
                    <h3 className="sd-step__title">03 · Presupuesto por escrito y plan a tu ritmo</h3>
                    <p className="sd-step__text">Te llevas hoja con valores por pieza, alternativas y facilidades Isapre/Fonasa. Decides en casa.</p>
                  </div>
                </div>
              </div>

              <ul className="sd-checks" aria-label="Qué te llevas">
                <li><i aria-hidden="true">✓</i> Informe impreso</li>
                <li><i aria-hidden="true">✓</i> Presupuesto firmado</li>
                <li><i aria-hidden="true">✓</i> Indicaciones post-evaluación</li>
                <li><i aria-hidden="true">✓</i> WhatsApp directo con tu dentista</li>
              </ul>

              <p className="sd-price-tag">Evaluación completa $29.900 — se abona al tratamiento si sigues con nosotros.</p>
            </div>
          </div>
        </section>

        {/* #especialidades-reales — ahora 3ª con prueba social ARRIBA y masonry asimétrico */}
        <section id="especialidades-reales-dentista-b-claro" className="sd-section">
          <div className="sd-catalog__head">
            <p className="sd-kicker">LO QUE HACEMOS BIEN</p>
            <h2 className="sd-h2">Cuatro especialidades, siempre los mismos dentistas</h2>
            <div className="sd-trust" aria-label="Prueba social">
              <b>+15 años en Ñuñoa</b> <span className="sd-trust__dot" aria-hidden="true" /> <span>+9.500 pacientes</span> <span className="sd-trust__dot" aria-hidden="true" /> <span>96% nos recomienda</span> <span className="sd-trust__dot" aria-hidden="true" /> <span>3 dentistas, siempre los mismos</span>
            </div>
          </div>

          <div className="sd-masonry">
            <article className="sd-card sd-card--wide">
              <div className="sd-card__media">
                {!tile01Error ? (
                  <img src={tile01} alt="Bandeja con instrumental esterilizado alineado sobre lino blanco, luz rasante" loading="lazy" decoding="async" onError={() => setTile01Error(true)} />
                ) : (
                  <Falta file="serena-dental-tile-01-1x1.png" ratio="1/1" />
                )}
              </div>
              <div className="sd-card__body">
                <p className="sd-card__num">01</p>
                <h3 className="sd-card__title">Endodoncia microscópica</h3>
                <p className="sd-card__text">Un conducto, un diente a la vez. Con microscopio y control radiográfico. Sin apuro.</p>
                <p className="sd-card__meta">Desde $129.000 · 90 min</p>
              </div>
            </article>

            <article className="sd-card sd-card--narrow">
              <div className="sd-card__media">
                {!tile02Error ? (
                  <img src={tile02} alt="Detalle de lámpara operatoria, brazo articulado metálico" loading="lazy" decoding="async" onError={() => setTile02Error(true)} />
                ) : (
                  <Falta file="serena-dental-tile-02-3x4.png" ratio="3/4" />
                )}
              </div>
              <div className="sd-card__body">
                <p className="sd-card__num">02</p>
                <h3 className="sd-card__title">Implantología</h3>
                <p className="sd-card__text">Tornillo + corona en 2 fases, con planificación digital y controles incluidos.</p>
                <p className="sd-card__meta">Desde $390.000 · plan 2 fases</p>
              </div>
            </article>

            <article className="sd-card sd-card--narrow">
              <div className="sd-card__media">
                {!tile03Error ? (
                  <img src={tile03} alt="Recepción luminosa vacía con mostrador madera pálida y piedra clara" loading="lazy" decoding="async" onError={() => setTile03Error(true)} />
                ) : (
                  <Falta file="serena-dental-tile-03-1x1.png" ratio="1/1" />
                )}
              </div>
              <div className="sd-card__body">
                <p className="sd-card__num">03</p>
                <h3 className="sd-card__title">Ortodoncia alineadores</h3>
                <p className="sd-card__text">Alineadores transparentes, controles mensuales, el mismo ortodoncista siempre.</p>
                <p className="sd-card__meta">Desde $45.000/mes</p>
              </div>
            </article>

            <article className="sd-card sd-card--wide">
              <div className="sd-card__media">
                {!tile04Error ? (
                  <img src={tile04} alt="Macro de superficie cerámica blanca, textura y poro visible" loading="lazy" decoding="async" onError={() => setTile04Error(true)} />
                ) : (
                  <Falta file="serena-dental-tile-04-3x4.png" ratio="3/4" />
                )}
              </div>
              <div className="sd-card__body">
                <p className="sd-card__num">04</p>
                <h3 className="sd-card__title">Estética adhesiva</h3>
                <p className="sd-card__text">Carillas y restauraciones que parecen tuyas, no postizas. Menos es más.</p>
                <p className="sd-card__meta">Desde $59.900</p>
              </div>
            </article>
          </div>
        </section>

        {/* #isapre-reembolso — ahora 4ª, antes del arancel */}
        <section id="isapre-reembolso-dentista-b-claro" className="sd-section sd-section--alt">
          <div className="sd-pay-head">
            <p className="sd-kicker">CÓMO PAGAS</p>
            <h2 className="sd-h2">Fonasa, Isapre o particular. Sin letra chica.</h2>
            <p className="sd-intro">Trabajamos con boleta reembolsable. Te explicamos antes cuánto cubre tu plan y cuánto pagas tú.</p>
          </div>

          <div className="sd-pay-grid" role="table" aria-label="Comparativa previsión">
            <div className="sd-pay-col" role="column">
              <div className="sd-pay-col__head sd-pay-col__head--label">—</div>
              <div className="sd-pay-col__cell sd-pay-col__cell--label">Cómo funciona</div>
              <div className="sd-pay-col__cell sd-pay-col__cell--label">Qué traes</div>
              <div className="sd-pay-col__cell sd-pay-col__cell--label">Reembolso</div>
              <div className="sd-pay-col__cell sd-pay-col__cell--label">Facilidades</div>
            </div>
            <div className="sd-pay-col" role="column">
              <div className="sd-pay-col__head">FONASA</div>
              <div className="sd-pay-col__cell">Bono nivel 3 en sucursal o web</div>
              <div className="sd-pay-col__cell">Carnet + bono</div>
              <div className="sd-pay-col__cell">Directo en Fonasa</div>
              <div className="sd-pay-col__cell">3 cuotas sin interés</div>
            </div>
            <div className="sd-pay-col" role="column">
              <div className="sd-pay-col__head">ISAPRE (todas)</div>
              <div className="sd-pay-col__cell">Pagas y reembolsas con boleta</div>
              <div className="sd-pay-col__cell">Credencial + plan</div>
              <div className="sd-pay-col__cell">50–80% según plan*</div>
              <div className="sd-pay-col__cell">6 cuotas sin interés</div>
            </div>
            <div className="sd-pay-col" role="column">
              <div className="sd-pay-col__head">PARTICULAR</div>
              <div className="sd-pay-col__cell">Pago directo con facilidades</div>
              <div className="sd-pay-col__cell">Carnet</div>
              <div className="sd-pay-col__cell">—</div>
              <div className="sd-pay-col__cell">Hasta 12 cuotas</div>
            </div>
          </div>
          <p className="sd-pay-note">* El porcentaje depende de tu plan Isapre. Lo verificamos en la evaluación y te damos el cálculo por escrito.</p>

          <div className="sd-acc">
            {[
              { q: "¿Atienden Fonasa?", a: "Sí, nivel 3. Compras el bono antes y te atendemos sin copago adicional en prestaciones bonificables." },
              { q: "¿Qué Isapres tienen convenio?", a: "Todas con reembolso. No hay 'convenio cerrado' que te amarre: emitimos boleta y reembolsas donde te convenga." },
              { q: "¿Puedo pagar en cuotas?", a: "Sí, con tarjeta hasta 12 cuotas. Sin interés hasta 6 con Isapre/Fonasa. Te damos el total por escrito." },
            ].map((item, i) => (
              <div key={i} className={`sd-acc__item ${accOpen === i ? "open" : ""}`}>
                <button type="button" className="sd-acc__btn" aria-expanded={accOpen === i} onClick={() => setAccOpen(accOpen === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="sd-acc__icon" aria-hidden="true">{accOpen === i ? "−" : "+"}</span>
                </button>
                <div className="sd-acc__panel" hidden={accOpen !== i}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* #tratamientos-arancel — ahora 5ª, corazón conversión después de confianza */}
        <section id="tratamientos-arancel-dentista-b-claro" className="sd-section">
          <div className="sd-wrap" style={{ marginBottom: 28 }}>
            <p className="sd-kicker">ARANCEL TRANSPARENTE</p>
            <h2 className="sd-h2">Valores claros, presupuesto por escrito</h2>
            <p className="sd-intro">Cada fila es el precio desde. El valor final se confirma tras diagnóstico en box, nunca por WhatsApp.</p>
          </div>

          <div className="sd-ficha-wrap">
            <div className="sd-ficha">
              <div className="sd-ficha__head">
                <span>Prestación</span>
                <span>Desde CLP</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Evaluación con radiografía</span>
                  <span className="sd-fila__note">45 min · incluye scanner + diagnóstico explicado</span>
                </div>
                <span className="sd-fila__price">$29.900</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Limpieza y profilaxis</span>
                  <span className="sd-fila__note">40 min · higiene + pulido + flúor</span>
                </div>
                <span className="sd-fila__price"><em>desde</em> $39.900</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Restauración resina (tapadura)</span>
                  <span className="sd-fila__note">45 min · resina fotocurable, pulido final</span>
                </div>
                <span className="sd-fila__price"><em>desde</em> $59.900</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Endodoncia 1 conducto</span>
                  <span className="sd-fila__note">90 min · microscopio + control radiográfico</span>
                </div>
                <span className="sd-fila__price"><em>desde</em> $129.000</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Extracción simple</span>
                  <span className="sd-fila__note">30 min · anestesia + control 7 días</span>
                </div>
                <span className="sd-fila__price"><em>desde</em> $49.900</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Blanqueamiento</span>
                  <span className="sd-fila__note">60 min · peróxido + protector gingival</span>
                </div>
                <span className="sd-fila__price"><em>desde</em> $89.900</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Implante (tornillo + corona)</span>
                  <span className="sd-fila__note">plan en 2 fases · incluye controles</span>
                </div>
                <span className="sd-fila__price"><em>desde</em> $390.000</span>
              </div>
              <div className="sd-fila">
                <div className="sd-fila__left">
                  <span className="sd-fila__name">Ortodoncia alineadores</span>
                  <span className="sd-fila__note">12–18 meses · controles mensuales</span>
                </div>
                <span className="sd-fila__price"><em>desde</em> $45.000/mes</span>
              </div>
              <p className="sd-ficha__foot">Valores referenciales; el valor final se confirma tras diagnóstico. Sin sorpresas. Fonasa e Isapre con boleta reembolsable.</p>
            </div>

            <aside className="sd-aside" aria-label="Atención de urgencia">
              <h3 className="sd-aside__title">¿Dolor ahora?</h3>
              <p className="sd-aside__text">Atención de urgencia el mismo día según disponibilidad. Llámanos y te decimos hora real.</p>
              <a href="tel:+56987654321" className="sd-aside__tel">+56 9 8765 4321</a>
              <a href="#agenda-serena" className="sd-btn sd-btn--primary" style={{ width: "100%", textAlign: "center" }}>Agendar evaluación</a>
              <p className="sd-aside__note">Boleta reembolsable · Isapre y Fonasa</p>
            </aside>
          </div>
        </section>

        {/* #agenda-serena */}
        <section id="agenda-serena" className="sd-section sd-section--alt">
          <div className="sd-book">
            <div className="sd-book__formcol">
              <p className="sd-kicker">AGENDA</p>
              <h2 className="sd-h2">Agenda tu evaluación. Te responden hoy.</h2>
              <p className="sd-intro">Elige día y te confirmamos por WhatsApp en el día. Si es urgencia, llama directo.</p>

              <form onSubmit={handleSubmit} noValidate style={{ marginTop: 22 }}>
                <div className="sd-field">
                  <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} aria-label="Nombre" required />
                  {errors.nombre && <span className="sd-err">{errors.nombre}</span>}
                </div>
                <div className="sd-field">
                  <input type="tel" placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} aria-label="Teléfono" required />
                  {errors.telefono && <span className="sd-err">{errors.telefono}</span>}
                </div>
                <div className="sd-field">
                  <input type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
                  {errors.email && <span className="sd-err">{errors.email}</span>}
                </div>
                <div className="sd-field">
                  <select value={motivo} onChange={(e) => setMotivo(e.target.value)} aria-label="Motivo">
                    <option>Evaluación general</option>
                    <option>Dolor/urgencia</option>
                    <option>Limpieza</option>
                    <option>Ortodoncia</option>
                    <option>Implante</option>
                    <option>Estética</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="sd-field">
                  <textarea placeholder="Cuéntanos en una línea" value={detalle} onChange={(e) => setDetalle(e.target.value)} rows={3} aria-label="Detalle" />
                </div>
                <label className="sd-check">
                  <input type="checkbox" checked={whatsappOk} onChange={(e) => setWhatsappOk(e.target.checked)} />
                  <span>Acepto que me contacten por WhatsApp</span>
                </label>

                <button type="submit" className="sd-btn sd-btn--primary sd-book__submit" disabled={loading}>
                  {loading ? "Enviando…" : "Agendar evaluación"}
                </button>

                {success && (
                  <p className="sd-success" role="status">
                    <i aria-hidden="true">✓</i> Te escribimos hoy · revisa tu WhatsApp
                  </p>
                )}
              </form>
            </div>

            <div className="sd-book__infocol">
              <a href="tel:+56987654321" className="sd-book__tel">+56 9 8765 4321</a>
              <a href="mailto:hola@serenadental.cl" className="sd-book__mail">hola@serenadental.cl</a>
              <p className="sd-book__addr">Av. Irarrázaval 2401, Ñuñoa, Santiago</p>
              <p className="sd-book__hours">Lun–Vie 9:00–19:30 · Sáb 10:00–14:00</p>
              <div className="sd-mapline">
                <span className="sd-mapline__dot" aria-hidden="true" />
                <span>Metro Chile-España · 3 min a pie</span>
              </div>
              <div className="sd-proof">
                {!proofError ? (
                  <img
                    src={proof}
                    alt="Interior premium de clínica vacía, pasillo con madera clara y piedra, prueba de espacio real"
                    loading="lazy"
                    decoding="async"
                    onError={() => setProofError(true)}
                  />
                ) : (
                  <Falta file="serena-dental-proof-16x9.png" ratio="16/9" />
                )}
              </div>
            </div>
          </div>

          <footer className="sd-foot">
            <p>SERENA DENTAL SpA · Av. Irarrázaval 2401, Ñuñoa · hola@serenadental.cl · +56 9 8765 4321</p>
            <p>© 2026 SERENA DENTAL. Todos los derechos reservados. Valores referenciales.</p>
          </footer>
        </section>
      </main>

      <div className={`sd-sticky ${stickyVisible ? "visible" : ""}`} aria-hidden={!stickyVisible}>
        <a href="#agenda-serena" className="sd-btn sd-btn--primary sd-sticky__btn">
          Agendar evaluación
        </a>
      </div>
    </>
  );
}
