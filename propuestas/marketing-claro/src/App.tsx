import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_IMG = "/media/criterio-hero-16x9.png";

function useMediaExists(src: string) {
  return src;
}

function MediaImg({
  src,
  alt,
  filename,
  aspect,
  style,
  className,
}: {
  src: string;
  alt: string;
  filename: string;
  aspect: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (failed) console.warn(`MEDIA FALTA: ${filename}`);
  }, [failed, filename]);
  if (failed) {
    return (
      <div
        className="media-falta"
        data-falta={filename}
        style={{
          aspectRatio: aspect,
          background: "#EFE9DE",
          border: "1px solid var(--linea)",
          display: "grid",
          placeItems: "center",
          color: "var(--gris)",
          fontSize: "12px",
          ...style,
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
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}

export function App() {
  useEffect(() => {
    const extra = ["criterio-hero-9x16.png", "criterio-tile-02-1x1.png", "criterio-og-16x9.png"];
    extra.forEach((f) => {
      fetch(`/media/${f}`, { method: "HEAD" })
        .then((r) => {
          if (!r.ok) console.warn(`MEDIA FALTA: ${f}`);
        })
        .catch(() => console.warn(`MEDIA FALTA: ${f}`));
    });
  }, []);
  return (
    <>
      {/* ===== HEADER MANCHETA ===== */}
      <header>
        <div className="mancheta">
          <div className="mancheta__inner">
            <span className="mancheta__left">CRITERIO — SANTIAGO · DESDE 2016</span>
            <span className="mancheta__center">EDICIÓN 2026 — PERFORMANCE Y MARCA</span>
            <span className="mancheta__right">
              <a href="tel:+56984012258">+56 9 8401 2258</a>
            </span>
          </div>
        </div>
        <nav className="site-nav" aria-label="Principal">
          <div className="site-nav__inner">
            <a href="#capacidad">Capacidad</a>
            <a href="#casos-reales">Casos</a>
            <a href="#forma-trabajo">Forma</a>
            <a href="#retainer-desde">Retainer</a>
            <a href="#brief-criterio">Brief</a>
          </div>
        </nav>
      </header>

      {/* ===== HERO #portada ===== */}
      <section id="portada" className="portada" aria-labelledby="h1-portada">
        <div className="portada__left">
          <p className="kicker">AGENCIA DE MARKETING · SANTIAGO — PROVIDENCIA</p>

          <h1 id="h1-portada" className="h1-kinetic">
            <motion.span
              className="h1-kinetic__line"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            >
              <span className="h1-kinetic__line-inner">Estrategia que se ve.</span>
            </motion.span>
            <motion.span
              className="h1-kinetic__line"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.09 }}
            >
              <span className="h1-kinetic__line-inner">Campañas que se miden</span>
            </motion.span>
            <motion.span
              className="h1-kinetic__line"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
              <span className="h1-kinetic__line-inner">
                y se{" "}
                <motion.span
                  className="h1-underline h1-underline--animated"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  cobran
                  <motion.span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      width: "100%",
                      height: 3,
                      background: "var(--accent)",
                      transformOrigin: "left",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.span>{" "}
                hoy.
              </span>
            </motion.span>
          </h1>

          <p className="subhead">
            No vendemos humo. Diagnosticamos en 48 horas, armamos tu plan en 2 semanas y operamos con métricas semanales. Si no hay fit, te lo decimos.
          </p>

          <div className="ctas">
            <a href="#brief-criterio" className="cta-prim">
              Pedir diagnóstico en 48h
            </a>
            <a href="#casos-reales" className="cta-sec">
              Ver casos y métricas <span className="cta-sec__arrow">→</span>
            </a>
          </div>

          <div className="banda">Diagnóstico 48h · Plan en 2 semanas · Retainer desde $590.000 · Sin amarres anuales</div>
        </div>

        <div className="portada__right">
          <div className="portada__media-wrap">
            <HeroMedia />
            <div className="caption">
              Pruebas de imprenta CRITERIO · Pliegos con guías de corte y afiches plegados · Mesa de corrector, Providencia
            </div>
          </div>

          <nav className="portada__indice" aria-label="Índice">
            <a href="#capacidad">01 CAPACIDAD — pág 02</a>
            <a href="#casos-reales">02 CASOS — pág 03</a>
            <a href="#forma-trabajo">03 FORMA DE TRABAJO — pág 04</a>
            <a href="#retainer-desde">04 RETAINER — pág 05</a>
          </nav>
        </div>
      </section>

      {/* ===== #sello-criterio ===== */}
      <section id="sello-criterio" className="sello" aria-label="Sello CRITERIO">
        <div className="sello__grid">
          <motion.div
            className="sello__item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="sello__num">9 años</p>
            <p className="sello__sub">Desde 2016, Providencia</p>
          </motion.div>
          <motion.div
            className="sello__item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="sello__num">+147 marcas</p>
            <p className="sello__sub">B2B y consumo, RM y regiones</p>
          </motion.div>
          <motion.div
            className="sello__item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <p className="sello__num">≤48h</p>
            <p className="sello__sub">Diagnóstico inicial sin costo</p>
          </motion.div>
          <motion.div
            className="sello__item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <p className="sello__num">100% con métrica</p>
            <p className="sello__sub">Sin caso sin número</p>
          </motion.div>
        </div>
        <div className="sello__nota">Cifras de gestión interna CRITERIO 2016–2026. No incluye clientes con NDA sin métrica autorizada.</div>
      </section>

      {/* ===== #capacidad ===== */}
      <section id="capacidad" className="capacidad" aria-labelledby="h2-capacidad">
        <div className="capacidad__header">
          <p className="cap-kicker">QUÉ HACEMOS — Y QUÉ NO</p>
          <h2 id="h2-capacidad" className="cap-h2">Capacidad real, no menú infinito.</h2>
          <p className="cap-sub">Operamos 4 frentes. Si necesitas otro, derivamos a partner — no improvisamos.</p>
        </div>
        <div className="capacidad__grid">
          <div className="cap-lista">
            <motion.div
              className="cap-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: 0 }}
            >
              <div className="cap-row__left">
                <p className="cap-row__title">01 PERFORMANCE</p>
                <p className="cap-row__desc">Google Ads + Meta Ads + medición. CPA y ROAS semanales.</p>
              </div>
              <span className="cap-row__tag">DESDE $590.000/mes</span>
            </motion.div>
            <motion.div
              className="cap-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: 0.07 }}
            >
              <div className="cap-row__left">
                <p className="cap-row__title">02 MARCA Y CONTENIDO</p>
                <p className="cap-row__desc">Sistema visual, web y contenidos. No solo post bonitos.</p>
              </div>
            </motion.div>
            <motion.div
              className="cap-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: 0.14 }}
            >
              <div className="cap-row__left">
                <p className="cap-row__title">03 CRM &amp; AUTOMATIZACIÓN</p>
                <p className="cap-row__desc">HubSpot / RD Station. Flujos que nutren, no spam.</p>
              </div>
            </motion.div>
            <motion.div
              className="cap-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: 0.21 }}
            >
              <div className="cap-row__left">
                <p className="cap-row__title">04 SEO &amp; CONTENIDOS LARGOS</p>
                <p className="cap-row__desc">Pilares y clusters. Tráfico que queda.</p>
              </div>
            </motion.div>
            <div className="cap-no">NO HACEMOS: vía pública, influencers masivos, desarrollo de app nativa. Te decimos al tiro.</div>
          </div>
          <div className="cap-right">
            <div className="cap-card">
              <MediaImg
                src="/media/criterio-tile-01-1x1.png"
                alt="Pruebas CMYK y regla tipográfica"
                filename="criterio-tile-01-1x1.png"
                aspect="1/1"
                className="cap-card__img"
                style={{ aspectRatio: "1/1" } as React.CSSProperties}
              />
              <div className="cap-card__body">
                <p className="cap-card__label">CÓMO SE VE UN MES</p>
                <ul className="cap-card__list">
                  <li>· Reporte semanal + dashboard</li>
                  <li>· 2 sprints creativos</li>
                  <li>· Reunión quincenal con métrica</li>
                </ul>
                <a href="#forma-trabajo" className="cap-card__link">
                  Ver forma de trabajo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== #casos-reales ===== */}
      <section id="casos-reales" className="casos" aria-labelledby="h2-casos">
        <div className="casos__header">
          <p className="casos-kicker">CASOS CON NÚMERO</p>
          <h2 id="h2-casos" className="casos-h2">Casos que se pueden contar.</h2>
          <p className="casos-sub">Métrica verificable + contexto. Sin logos de clientes reales en demo — usamos rubro y canal.</p>
        </div>
        <div className="casos__grid">
          <motion.article
            className="caso-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0 }}
          >
            <p className="caso-tag">E-COMMERCE · PERFORMANCE</p>
            <h3 className="caso-card__h3">−38% CPA en 90 días</h3>
            <p className="caso-card__desc">De $8.400 a $5.200 por compra. Presupuesto $3,2MM/mes. Meta + Google Shopping.</p>
            <div className="caso-card__foot">Rubro consumo · 6 meses</div>
          </motion.article>
          <motion.article
            className="caso-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0.08 }}
          >
            <p className="caso-tag">B2B · CRM</p>
            <h3 className="caso-card__h3">+2,4× leads calificados</h3>
            <p className="caso-card__desc">De 18 a 43 MQL/mes. Flujo HubSpot + Ads. Sin aumentar presupuesto.</p>
            <div className="caso-card__foot">Rubro B2B · 5 meses</div>
          </motion.article>
          <motion.article
            className="caso-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0.16 }}
          >
            <p className="caso-tag">SERVICIOS · SEO</p>
            <h3 className="caso-card__h3">+86% tráfico orgánico</h3>
            <p className="caso-card__desc">De 4.200 a 7.800 visitas/mes en 5 meses. 12 pilares de contenido.</p>
            <div className="caso-card__foot">Rubro servicios · 5 meses</div>
          </motion.article>
        </div>
        <div className="casos__proof">
          <MediaImg
            src="/media/criterio-proof-16x9.png"
            alt="Grid de piezas impresas CRITERIO"
            filename="criterio-proof-16x9.png"
            aspect="16/9"
            className="casos__proof-img"
          />
          <div className="casos__proof-caption">
            <span>Archivo CRITERIO · Grids de piezas sin marcas · Luz pareja</span>
          </div>
          <p className="casos__nota">Casos demo basados en rangos reales CRITERIO. Métricas auditables en reunión.</p>
        </div>
      </section>

      {/* ===== #forma-trabajo ===== */}
      <section id="forma-trabajo" className="forma" aria-labelledby="h2-forma">
        <div className="forma__header">
          <p className="forma-kicker">FORMA DE TRABAJO</p>
          <h2 id="h2-forma" className="forma-h2">De brief a campaña en 14 días.</h2>
          <p className="forma-sub">Sin vueltas. 4 hitos con entregable y fecha.</p>
        </div>
        <div className="forma__layout">
          <div>
            <div className="forma__timeline-wrap">
              <motion.div
                className="forma__linea"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
              />
              <div className="forma__nodos" aria-hidden>
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="forma__nodo"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.6 + i * 0.08 }}
                  />
                ))}
              </div>
              <div className="forma__fichas">
                <motion.div
                  className="forma__ficha"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: 0.1 }}
                >
                  <p className="forma__paso">01 DIAGNÓSTICO 48H</p>
                  <p className="forma__titulo">Auditoría exprés</p>
                  <p className="forma__desc">Revisamos Ads, Analytics y web. Te decimos si hay fit y cuánto escalar.</p>
                  <p className="forma__entrega">Entregable: PDF 4 págs + Loom 6 min</p>
                </motion.div>
                <motion.div
                  className="forma__ficha"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: 0.18 }}
                >
                  <p className="forma__paso">02 PLAN 2 SEMANAS</p>
                  <p className="forma__titulo">Estrategia y piezas</p>
                  <p className="forma__desc">Canales, presupuesto, calendario y 6 piezas iniciales.</p>
                  <p className="forma__entrega">Entregable: plan + calendario</p>
                </motion.div>
                <motion.div
                  className="forma__ficha"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: 0.26 }}
                >
                  <p className="forma__paso">03 LANZAMIENTO</p>
                  <p className="forma__titulo">Semana 3 al aire</p>
                  <p className="forma__desc">Campañas + tracking + dashboard.</p>
                  <p className="forma__entrega">Entregable: campañas activas</p>
                </motion.div>
                <motion.div
                  className="forma__ficha"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: 0.34 }}
                >
                  <p className="forma__paso">04 OPERACIÓN</p>
                  <p className="forma__titulo">Sprints quincenales</p>
                  <p className="forma__desc">Optimización, reporte semanal y reunión quincenal.</p>
                  <p className="forma__entrega">Entregable: reporte semanal</p>
                </motion.div>
              </div>
            </div>
            <div className="forma__honesto">Si en diagnóstico vemos que no hay escala, te lo decimos y no seguimos. No cobramos el plan si no hay fit.</div>
          </div>
          <MediaImg
            src="/media/criterio-tile-03-3x4.png"
            alt="Guías de corte y marcas de registro"
            filename="criterio-tile-03-3x4.png"
            aspect="3/4"
            className="forma__side-img"
          />
        </div>
      </section>

      {/* ===== #retainer-desde ===== */}
      <section id="retainer-desde" className="retainer" aria-labelledby="h2-retainer">
        <div className="retainer__header">
          <p className="retainer-kicker">VALORES REFERENCIALES — SIN AMARRES ANUALES</p>
          <h2 id="h2-retainer" className="retainer-h2">Retainer mensual, claro y sin sorpresas.</h2>
          <p className="retainer-sub">Mensual, con IVA. Sin contrato anual. Ajuste trimestral según alcance. El valor final se confirma tras diagnóstico.</p>
        </div>
        <div className="retainer__grid">
          <motion.div
            className="retainer__col"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0 }}
          >
            <p className="retainer__label">PARA EMPEZAR</p>
            <p style={{ fontFamily: '"Instrument Sans",sans-serif', fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)", margin: "0 0 6px", fontWeight: 600 }}>ESENCIAL</p>
            <p className="retainer__precio">desde $590.000/mes</p>
            <p className="retainer__desc">1 canal (Meta o Google) + medición + reporte semanal. 4 piezas/mes.</p>
            <ul className="retainer__list">
              <li>· Setup y tracking</li>
              <li>· 1 campaña activa</li>
              <li>· Dashboard</li>
              <li>· Reunión quincenal</li>
            </ul>
            <a href="#brief-criterio" className="retainer__cta">
              Pedir diagnóstico →
            </a>
          </motion.div>
          <motion.div
            className="retainer__col retainer__col--destacada"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0.09 }}
          >
            <p className="retainer__label">
              PARA CRECER <span className="retainer__badge">MÁS PEDIDO</span>
            </p>
            <p style={{ fontFamily: '"Instrument Sans",sans-serif', fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)", margin: "0 0 6px", fontWeight: 600 }}>CRECIMIENTO</p>
            <p className="retainer__precio">desde $1.190.000/mes</p>
            <p className="retainer__desc">2 canales + CRM básico + 8 piezas/mes. 2 campañas + remarketing.</p>
            <ul className="retainer__list">
              <li>· Performance + contenido</li>
              <li>· Flujo HubSpot/RD</li>
              <li>· Test A/B mensual</li>
              <li>· Reporte semanal + dashboard</li>
            </ul>
            <a href="#brief-criterio" className="retainer__cta">
              Pedir diagnóstico →
            </a>
          </motion.div>
          <motion.div
            className="retainer__col"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0.18 }}
          >
            <p className="retainer__label">OPERACIÓN COMPLETA</p>
            <p style={{ fontFamily: '"Instrument Sans",sans-serif', fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)", margin: "0 0 6px", fontWeight: 600 }}>FULL FUNNEL</p>
            <p className="retainer__precio">desde $2.490.000/mes</p>
            <p className="retainer__desc">3 canales + CRM + SEO pilar. Operación completa.</p>
            <ul className="retainer__list">
              <li>· Funnel completo</li>
              <li>· SEO + contenido</li>
              <li>· Reporte ejecutivo</li>
              <li>· Squad quincenal</li>
            </ul>
            <a href="#brief-criterio" className="retainer__cta">
              Pedir diagnóstico →
            </a>
          </motion.div>
        </div>
        <div className="retainer__comparativa">
          <span>Horas equipo/mes: 22h · 48h · 92h</span>
          <span>Sprints creativos: 1 · 2 · 4</span>
          <span>Presupuesto Ads sugerido: $1–3MM · $3–8MM · $8–20MM</span>
        </div>
        <p className="retainer__nota">Valores referenciales; se confirma tras diagnóstico de canales y piezas. Con IVA. Medios (budget Ads) no incluidos. Factura mensual.</p>
      </section>

      {/* ===== #preguntas-brief ===== */}
      <section id="preguntas-brief" className="faq" aria-labelledby="h2-faq">
        <div className="faq__left">
          <p className="faq-kicker">PREGUNTAS FRECUENTES</p>
          <h2 id="h2-faq" className="faq-h2">Antes de pedir el diagnóstico.</h2>
        </div>
        <div className="faq__right">
          <details className="faq-item">
            <summary>
              ¿Piden contrato anual?
              <svg className="faq-chevron" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </summary>
            <div className="faq-answer">No. Mensual con aviso 30 días. Si no hay fit en diagnóstico, no seguimos y no cobramos plan.</div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Qué necesitan para el diagnóstico de 48h?
              <svg className="faq-chevron" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </summary>
            <div className="faq-answer">Acceso lectura a Ads y Analytics + web + ticket promedio y margen. Firmamos NDA si lo pides.</div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Hacen solo redes o solo Google?
              <svg className="faq-chevron" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </summary>
            <div className="faq-answer">Hacemos 1 canal bien si ese es tu cuello de botella. No te vendemos 4 si necesitas 1.</div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Cuánto tarda ver resultados?
              <svg className="faq-chevron" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </summary>
            <div className="faq-answer">Performance: 3–6 semanas para estabilizar CPA. SEO: 3–5 meses. Te damos rangos, no promesas.</div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Trabajan con mi equipo interno?
              <svg className="faq-chevron" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </summary>
            <div className="faq-answer">Sí. Operamos como squad externo: Slack compartido, sprints quincenales y dashboard.</div>
          </details>
        </div>
      </section>

      {/* ===== #brief-criterio ===== */}
      <section id="brief-criterio" className="brief" aria-labelledby="h2-brief">
        <div className="brief__grid">
          <div className="brief__left">
            <p className="brief-kicker">BRIEF — 3 MINUTOS</p>
            <h2 id="h2-brief" className="brief-h2">Pidamos el diagnóstico. 48 horas y sabes si escalamos.</h2>
            <p className="brief-sub">Responde este brief corto. Te devolvemos auditoría en 48h hábiles con Loom + PDF.</p>
            <div className="brief__datos">
              <a href="tel:+56984012258" className="brief__tel">
                +56 9 8401 2258
              </a>
              <a href="mailto:hola@criterio.cl" className="brief__email">
                hola@criterio.cl
              </a>
              <span className="brief__dir">Providencia 1208, piso 8 — Santiago</span>
              <span className="brief__horario">Lun–Vie 09:00–18:30</span>
              <p className="brief__nota-horario">Respuesta en horario hábil. Si escribes viernes tarde, va el lunes.</p>
            </div>
          </div>
          <div className="brief__right">
            <BriefForm />
            <MediaImg
              src="/media/criterio-interior-16x9.png"
              alt="Interior taller de imprenta CRITERIO"
              filename="criterio-interior-16x9.png"
              aspect="16/9"
              className="brief__proof-img"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <span>CRITERIO SpA · RUT 76.123.456-7 · Providencia 1208, piso 8 — Santiago · hola@criterio.cl · +56 9 8401 2258</span>
          <span className="footer__links">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </span>
        </div>
      </footer>

      <StickyBar />
    </>
  );
}

function HeroMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={useMediaExists(HERO_IMG)}
        alt="Pruebas de imprenta CRITERIO"
        className="media-img"
        onError={(e) => {
          console.warn("MEDIA FALTA: criterio-hero-16x9.png");
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = document.createElement("div");
          fallback.className = "media-falta";
          fallback.setAttribute("data-falta", "criterio-hero-16x9.png");
          fallback.textContent = "Falta: criterio-hero-16x9.png";
          fallback.style.cssText =
            "aspect-ratio:4/3;background:#EFE9DE;border:1px solid var(--linea);display:grid;place-items:center;color:var(--gris);font-size:12px";
          target.parentElement?.insertBefore(fallback, target);
        }}
      />
      <noscript>
        <div className="media-falta" data-falta="criterio-hero-16x9.png">
          Falta: criterio-hero-16x9.png
        </div>
      </noscript>
    </motion.div>
  );
}

function BriefForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    sitio: "",
    resolver: "",
    presupuesto: "",
    mensaje: "",
    acepto: false,
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("criterio-brief-v5");
      if (raw) {
        const data = JSON.parse(raw);
        setValues((v) => ({ ...v, ...data }));
      }
    } catch {
      // ignore
    }
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.nombre.trim()) e.nombre = "Requerido.";
    if (!values.empresa.trim()) e.empresa = "Requerido.";
    if (!values.email.trim()) e.email = "Requerido.";
    else if (!values.email.includes("@") || !values.email.includes(".")) e.email = "Email debe contener @ y punto.";
    if (!values.resolver) e.resolver = "Elige una opción.";
    if (!values.mensaje.trim()) e.mensaje = "Cuéntanos en 1 línea.";
    if (!values.acepto) e.acepto = "Debes aceptar el contacto.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      try {
        localStorage.setItem("criterio-brief-v5", JSON.stringify(values));
      } catch {
        // ignore
      }
      setLoading(false);
      setSuccess(true);
    }, 900);
  };

  const set = (k: string, v: string | boolean) => setValues((prev) => ({ ...prev, [k]: v }));

  if (success) {
    return (
      <div className="brief__card">
        <div className="form-success">
          <p style={{ margin: 0, fontWeight: 600 }}>Listo. Te escribimos en 48h hábiles.</p>
          <p style={{ margin: "8px 0 0" }}>
            <a href="https://wa.me/56984012258?text=Hola%20CRITERIO%2C%20envi%C3%A9%20mi%20brief" target="_blank" rel="noreferrer">
              Abrir WhatsApp →
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="brief__card">
      <form className="brief__form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label className="form-label" htmlFor="criterio-nombre">
            Nombre y apellido *
          </label>
          <input
            id="criterio-nombre"
            className={`form-input ${errors.nombre ? "form-input--error" : ""}`}
            placeholder="Ej: Camila Soto"
            value={values.nombre}
            onChange={(e) => set("nombre", e.target.value)}
          />
          {errors.nombre && <span className="form-error">{errors.nombre}</span>}
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="criterio-empresa">
            Empresa *
          </label>
          <input
            id="criterio-empresa"
            className={`form-input ${errors.empresa ? "form-input--error" : ""}`}
            placeholder="Ej: CRITERIO SpA"
            value={values.empresa}
            onChange={(e) => set("empresa", e.target.value)}
          />
          {errors.empresa && <span className="form-error">{errors.empresa}</span>}
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="criterio-email">
            Email corporativo *
          </label>
          <input
            id="criterio-email"
            type="email"
            className={`form-input ${errors.email ? "form-input--error" : ""}`}
            placeholder="camila@empresa.cl"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        <div className="form-row--2">
          <div className="form-row">
            <label className="form-label" htmlFor="criterio-tel">
              Teléfono
            </label>
            <input id="criterio-tel" className="form-input" placeholder="+56 9 ..." value={values.telefono} onChange={(e) => set("telefono", e.target.value)} />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="criterio-sitio">
              Sitio web
            </label>
            <input id="criterio-sitio" className="form-input" placeholder="https://..." value={values.sitio} onChange={(e) => set("sitio", e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="criterio-resolver">
            ¿Qué quieres resolver? *
          </label>
          <select
            id="criterio-resolver"
            className={`form-select ${errors.resolver ? "form-input--error" : ""}`}
            value={values.resolver}
            onChange={(e) => set("resolver", e.target.value)}
          >
            <option value="">— Elige —</option>
            <option>Más leads calificados</option>
            <option>Bajar CPA</option>
            <option>Marca y contenido</option>
            <option>CRM y automatización</option>
            <option>SEO</option>
          </select>
          {errors.resolver && <span className="form-error">{errors.resolver}</span>}
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="criterio-presupuesto">
            Presupuesto mensual Ads (referencial)
          </label>
          <select id="criterio-presupuesto" className="form-select" value={values.presupuesto} onChange={(e) => set("presupuesto", e.target.value)}>
            <option value="">— Elige —</option>
            <option>$1–3MM</option>
            <option>$3–8MM</option>
            <option>$8–15MM</option>
            <option>+$15MM</option>
          </select>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="criterio-mensaje">
            Cuéntanos en 1 línea
          </label>
          <textarea
            id="criterio-mensaje"
            className={`form-textarea ${errors.mensaje ? "form-input--error" : ""}`}
            rows={3}
            placeholder="Ej: Vendemos SaaS B2B, ticket $2MM, hoy solo Meta..."
            value={values.mensaje}
            onChange={(e) => set("mensaje", e.target.value)}
          />
          {errors.mensaje && <span className="form-error">{errors.mensaje}</span>}
        </div>
        <label className="form-checkbox">
          <input type="checkbox" checked={values.acepto} onChange={(e) => set("acepto", e.target.checked)} />
          <span>Acepto que CRITERIO me contacte por este brief (Ley 19.628). No spam.</span>
        </label>
        {errors.acepto && <span className="form-error">{errors.acepto}</span>}
        <button type="submit" className="form-submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar brief — diagnóstico en 48h"}
        </button>
        <p className="form-micro">Al enviar aceptas contacto por email/teléfono. Guardamos en localStorage para no pedir dos veces.</p>
      </form>
    </div>
  );
}

function StickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky-cta ${visible ? "sticky-cta--visible" : ""}`} role="complementary" aria-label="Contacto rápido">
      <a href="tel:+56984012258" className="sticky-cta__tel">
        +56 9 8401 2258
      </a>
      <a href="#brief-criterio" className="sticky-cta__btn">
        Pedir diagnóstico
      </a>
    </div>
  );
}
