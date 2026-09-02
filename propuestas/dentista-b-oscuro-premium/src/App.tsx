import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 840 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="obs-bar" role="banner">
      <div className="obs-shell obs-bar__row">
        <a href="#portada-dentista-b-oscuro-premium" className="obs-bar__brand" aria-label="OBSIDIANA — inicio">
          OBSIDIANA
        </a>
        <nav className="obs-bar__nav" aria-label="Principal">
          <a href="#primera-evaluacion-dentista-b-oscuro-premium">Evaluación</a>
          <a href="#tratamientos-arancel-dentista-b-oscuro-premium">Tratamientos</a>
          <a href="#especialidades-reales-dentista-b-oscuro-premium">Especialidades</a>
          <a href="#isapre-reembolso-dentista-b-oscuro-premium">Isapre</a>
        </nav>
        <div className="obs-bar__actions">
          <a href="tel:+56981234567" className="obs-bar__phone tabular">
            +56 9 8123 4567
          </a>
          <a href="tel:+56981234567" className="obs-bar__icon" aria-label="Llamar +56 9 8123 4567">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.4 2.39.82 3.53a2 2 0 0 1-.57 2.11L8.09 10.64a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.57c1.14.42 2.32.7 3.53.82A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a href="#agenda-obsidiana" className="obs-btn obs-btn--solid obs-bar__cta">
            Agendar evaluación
          </a>
          <button
            className="obs-bar__burger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="drawer-obsidiana"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="obs-bar__burgerLines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
      <div id="drawer-obsidiana" className={`obs-drawer ${open ? "is-open" : ""}`}>
        <nav className="obs-drawer__nav" aria-label="Menú móvil">
          <a href="#primera-evaluacion-dentista-b-oscuro-premium" onClick={() => setOpen(false)}>Evaluación</a>
          <a href="#tratamientos-arancel-dentista-b-oscuro-premium" onClick={() => setOpen(false)}>Tratamientos</a>
          <a href="#especialidades-reales-dentista-b-oscuro-premium" onClick={() => setOpen(false)}>Especialidades</a>
          <a href="#isapre-reembolso-dentista-b-oscuro-premium" onClick={() => setOpen(false)}>Isapre</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [hasDesktop, setHasDesktop] = useState<boolean | null>(null);
  const [hasMobile, setHasMobile] = useState<boolean | null>(null);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const check = async (path: string) => {
      try {
        const res = await fetch(base + path, { method: "HEAD" });
        return res.ok;
      } catch {
        return false;
      }
    };
    (async () => {
      const d = await check("media/obsidiana-hero-16x9.png");
      const m = await check("media/obsidiana-hero-9x16.png");
      const v = await check("media/obsidiana-hero-loop.mp4");
      setHasDesktop(d);
      setHasMobile(m);
      setHasVideo(v);
      if (!d) console.warn("[OBSIDIANA] falta: obsidiana-hero-16x9.png");
      if (!m) console.warn("[OBSIDIANA] falta: obsidiana-hero-9x16.png (mobile)");
      if (!v) console.info("[OBSIDIANA] sin video loop (opcional): obsidiana-hero-loop.mp4");
    })();
  }, []);

  const base = import.meta.env.BASE_URL;
  const withBase = (p: string) => (base.endsWith("/") ? base + p : base + "/" + p);

  return (
    <section id="portada-dentista-b-oscuro-premium" className="obs-hero" aria-labelledby="hero-h1-dentista-b-oscuro-premium">
      <div className="obs-shell obs-hero__frame">
        <div className="obs-hero__copy">
          <p className="obs-kicker">Clínica odontológica · Vitacura</p>
          <h1 id="hero-h1-dentista-b-oscuro-premium" className="obs-hero__title">
            Odontología de especialista, sin apuro ni sorpresas.
          </h1>
          <p className="obs-hero__lead">
            Diagnóstico con scanner, plan fotografiado y presupuesto por escrito. El mismo especialista te acompaña de principio a fin.
          </p>

          <div className="obs-hero__actions">
            <a href="#agenda-obsidiana" className="obs-btn obs-btn--solid">
              Agendar evaluación
            </a>
            <a href="#tratamientos-arancel-dentista-b-oscuro-premium" className="obs-btn obs-btn--line">
              Ver valores
            </a>
          </div>

          <div className="obs-band" aria-label="Condiciones de atención">
            <span>Atención con hora o por urgencia</span>
            <span className="obs-band__dot" aria-hidden="true" />
            <span>Convenios con las principales isapres</span>
            <span className="obs-band__dot" aria-hidden="true" />
            <span>Boleta reembolsable</span>
          </div>

          <p className="obs-hero__note">
            Si el plan cambia después de la evaluación, te avisamos antes de partir. Nunca iniciamos sin tu aprobación por escrito.
          </p>
          <p className="obs-hero__sig">3 especialistas, siempre los mismos — no rotamos tu caso.</p>
        </div>

        <div className="obs-hero__visual">
          <div className="obs-clip obs-clip--desktop">
            {hasVideo ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={withBase("media/obsidiana-hero-16x9.png")}
                style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", border: "1px solid var(--obs-line)" } as React.CSSProperties}
                onError={() => {
                  console.warn("[OBSIDIANA] video no cargó, fallback a imagen");
                  setHasVideo(false);
                }}
              >
                <source src={withBase("media/obsidiana-hero-loop.mp4")} type="video/mp4" />
              </video>
            ) : hasDesktop === false ? (
              <div className="obs-missing" data-falta="obsidiana-hero-16x9.png">
                falta: obsidiana-hero-16x9.png
              </div>
            ) : (
              <img
                src={withBase("media/obsidiana-hero-16x9.png")}
                alt="Box 2 · luz perimetral · Vitacura — sillón odontológico OBSIDIANA"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const parent = t.parentElement;
                  if (parent && !parent.querySelector("[data-falta]")) {
                    const d = document.createElement("div");
                    d.className = "obs-missing";
                    d.setAttribute("data-falta", "obsidiana-hero-16x9.png");
                    d.textContent = "falta: obsidiana-hero-16x9.png";
                    (d as HTMLElement).style.cssText = "aspect-ratio:16/9;background:#1B1917;border:1px dashed #2E2A28;display:grid;place-items:center;color:#9A9590;font:500 0.85rem Outfit";
                    parent.appendChild(d);
                    console.warn("[OBSIDIANA] falta: obsidiana-hero-16x9.png");
                  }
                }}
              />
            )}
          </div>

          <div className="obs-clip obs-clip--mobile">
            {hasMobile === false ? (
              hasDesktop === false ? (
                <div className="obs-missing" data-falta="obsidiana-hero-16x9.png" style={{ aspectRatio: "9 / 16" } as React.CSSProperties}>
                  falta: obsidiana-hero-16x9.png
                </div>
              ) : (
                <img
                  src={withBase("media/obsidiana-hero-16x9.png")}
                  alt="Box 2 · luz perimetral · Vitacura"
                  loading="eager"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const parent = t.parentElement;
                    if (parent && !parent.querySelector("[data-falta]")) {
                      const d = document.createElement("div");
                      d.className = "obs-missing";
                      d.setAttribute("data-falta", "obsidiana-hero-16x9.png");
                      d.textContent = "falta: obsidiana-hero-16x9.png";
                      parent.appendChild(d);
                    }
                  }}
                />
              )
            ) : (
              <img
                src={withBase("media/obsidiana-hero-9x16.png")}
                alt="Box 2 · luz perimetral · Vitacura — vista móvil"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const parent = t.parentElement;
                  if (parent && !parent.querySelector("[data-falta]")) {
                    const d = document.createElement("div");
                    d.className = "obs-missing";
                    d.setAttribute("data-falta", "obsidiana-hero-9x16.png");
                    (d as HTMLElement).style.cssText = "aspect-ratio:9/16;background:#1B1917;border:1px dashed #2E2A28;display:grid;place-items:center;color:#9A9590;font:500 0.85rem Outfit";
                    d.textContent = "falta: obsidiana-hero-9x16.png";
                    parent.appendChild(d);
                    console.warn("[OBSIDIANA] falta: obsidiana-hero-9x16.png");
                  }
                }}
              />
            )}
          </div>

          <p className="obs-hero__cap">Box 2 · luz perimetral · Vitacura</p>
        </div>
      </div>
    </section>
  );
}

function SectionEvaluacion() {
  const base = import.meta.env.BASE_URL;
  const withBase = (p: string) => (base.endsWith("/") ? base + p : base + "/" + p);
  return (
    <section id="primera-evaluacion-dentista-b-oscuro-premium" className="obs-eval" aria-labelledby="eval-h2">
      <div className="obs-shell obs-eval__shell">
        <div className="obs-eval__text">
          <p className="obs-kicker obs-kicker--bone">Primera visita</p>
          <h2 id="eval-h2" className="obs-h2 obs-h2--bone">La evaluación de 45 minutos que te deja todo claro</h2>
          <p className="obs-intro obs-intro--bone">No es una limpieza express. Es una cita para entender tu boca, sin apuro y sin venderte lo que no necesitas.</p>

          <div className="obs-steps">
            <div className="obs-step">
              <h3 className="obs-step__head"><span className="obs-step__n">01</span> · Scanner y radiografía</h3>
              <p className="obs-step__p">Fotos intraorales y radiografía digital en el mismo box. Ves lo que vemos, en pantalla grande.</p>
            </div>
            <div className="obs-step">
              <h3 className="obs-step__head"><span className="obs-step__n">02</span> · Diagnóstico en palabras simples</h3>
              <p className="obs-step__p">Te mostramos qué pasa, qué es urgente y qué puede esperar. Preguntas todo, sin apuro.</p>
            </div>
            <div className="obs-step">
              <h3 className="obs-step__head"><span className="obs-step__n">03</span> · Presupuesto por escrito y plan a tu ritmo</h3>
              <p className="obs-step__p">Te llevas hoja con valores por pieza, alternativas y facilidades Isapre/Fonasa. Decides en casa, no en el sillón.</p>
            </div>
          </div>

          <ul className="obs-checks" aria-label="Entrega de la evaluación">
            <li><span className="obs-check__mark" aria-hidden="true">✓</span> Informe impreso</li>
            <li><span className="obs-check__mark" aria-hidden="true">✓</span> Presupuesto firmado</li>
            <li><span className="obs-check__mark" aria-hidden="true">✓</span> Fotos de tu caso</li>
            <li><span className="obs-check__mark" aria-hidden="true">✓</span> WhatsApp directo con tu especialista</li>
          </ul>

          <div className="obs-eval__tag">Evaluación completa $32.900 — se abona al tratamiento si sigues con nosotros.</div>
        </div>

        <div className="obs-eval__figure">
          <img
            src={withBase("media/obsidiana-interior-16x9.png")}
            alt="Box dental nocturno ordenado con sillón vacío e instrumental — evaluación 45 minutos en Vitacura"
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: "4 / 3", objectFit: "cover" } as React.CSSProperties}
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const parent = t.parentElement;
              if (parent && !parent.querySelector("[data-falta]")) {
                const d = document.createElement("div");
                d.className = "obs-missing obs-missing--bone";
                d.setAttribute("data-falta", "obsidiana-interior-16x9.png");
                (d as HTMLElement).style.cssText = "aspect-ratio:4/3;background:#F0EBE3;border:1px dashed #D6D0C8;display:grid;place-items:center;color:#7A7570;font:500 0.85rem Outfit";
                d.textContent = "falta: obsidiana-interior-16x9.png";
                parent.appendChild(d);
                console.warn("[OBSIDIANA] falta: obsidiana-interior-16x9.png");
              }
            }}
          />
          <p className="obs-eval__cap">Evaluación · 45 min · Vitacura</p>
        </div>
      </div>
    </section>
  );
}

function SectionTratamientos() {
  return (
    <section id="tratamientos-arancel-dentista-b-oscuro-premium" className="obs-tariff" aria-labelledby="trat-h2">
      <div className="obs-shell">
        <div className="obs-blockHead">
          <p className="obs-kicker">Arancel transparente</p>
          <h2 id="trat-h2" className="obs-h2">Valores claros, presupuesto por escrito</h2>
          <p className="obs-intro">Cada fila es el precio desde. El valor final se confirma tras diagnóstico con scanner, nunca por WhatsApp.</p>
        </div>

        <div className="obs-tariff__cols">
          <div className="obs-tariff__list">
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Evaluación con scanner + radiografía</span>
                <span className="obs-row__note">45 min · incluye scanner intraoral + diagnóstico fotografiado</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__amount">$32.900</span>
              </div>
            </div>
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Limpieza y profilaxis</span>
                <span className="obs-row__note">40 min · higiene + pulido + flúor + fotos</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__from">desde</span> <span className="obs-row__amount">$42.900</span>
              </div>
            </div>
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Restauración resina (tapadura)</span>
                <span className="obs-row__note">45 min · resina fotocurable, pulido final</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__from">desde</span> <span className="obs-row__amount">$64.900</span>
              </div>
            </div>
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Endodoncia 1 conducto</span>
                <span className="obs-row__note">90 min · microscopio + control radiográfico</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__from">desde</span> <span className="obs-row__amount">$135.000</span>
              </div>
            </div>
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Extracción simple</span>
                <span className="obs-row__note">30 min · anestesia + control 7 días</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__from">desde</span> <span className="obs-row__amount">$52.900</span>
              </div>
            </div>
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Blanqueamiento</span>
                <span className="obs-row__note">60 min · peróxido + protector gingival</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__from">desde</span> <span className="obs-row__amount">$94.900</span>
              </div>
            </div>
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Implante (tornillo + corona)</span>
                <span className="obs-row__note">plan en 2 fases · incluye controles y provisorio</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__from">desde</span> <span className="obs-row__amount">$420.000</span>
              </div>
            </div>
            <div className="obs-row" role="row">
              <div className="obs-row__main">
                <span className="obs-row__name">Ortodoncia alineadores</span>
                <span className="obs-row__note">12–18 meses · controles mensuales especialista</span>
              </div>
              <div className="obs-row__price tabular">
                <span className="obs-row__from">desde</span> <span className="obs-row__amount">$48.000/mes</span>
              </div>
            </div>

            <p className="obs-tariff__foot">Valores referenciales; el valor final se confirma tras diagnóstico. Sin sorpresas. Fonasa e Isapre con boleta reembolsable.</p>
          </div>

          <aside className="obs-tariff__aside" aria-label="Atención de urgencia">
            <div className="obs-note">
              <h3 className="obs-note__title">¿Dolor ahora?</h3>
              <p className="obs-note__copy">Atención de urgencia el mismo día según disponibilidad. Llámanos y te decimos hora real.</p>
              <a href="tel:+56981234567" className="obs-note__phone tabular">+56 9 8123 4567</a>
              <a href="#agenda-obsidiana" className="obs-btn obs-btn--solid obs-note__cta">Agendar evaluación</a>
              <p className="obs-note__small">Boleta reembolsable · Isapre y Fonasa</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SectionIsapre() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="isapre-reembolso-dentista-b-oscuro-premium" className="obs-pay" aria-labelledby="isapre-h2">
      <div className="obs-shell">
        <div className="obs-blockHead">
          <p className="obs-kicker">Cómo pagas</p>
          <h2 id="isapre-h2" className="obs-h2">Fonasa, Isapre o particular. Sin letra chica.</h2>
          <p className="obs-intro">Trabajamos con boleta reembolsable. Te explicamos antes cuánto cubre tu plan y cuánto pagas tú.</p>
        </div>

        <div className="obs-pay__grid">
          <article className="obs-pay__card">
            <h3 className="obs-pay__cardHead">Fonasa</h3>
            <dl className="obs-pay__dl">
              <div><dt>Cómo funciona</dt><dd>Bono nivel 3 en sucursal o web</dd></div>
              <div><dt>Qué traes</dt><dd>Carnet + bono</dd></div>
              <div><dt>Reembolso</dt><dd>Directo en Fonasa</dd></div>
              <div><dt>Facilidades</dt><dd>3 cuotas sin interés</dd></div>
            </dl>
          </article>
          <article className="obs-pay__card obs-pay__card--accent">
            <h3 className="obs-pay__cardHead">Isapre (todas)</h3>
            <dl className="obs-pay__dl">
              <div><dt>Cómo funciona</dt><dd>Pagas y reembolsas con boleta</dd></div>
              <div><dt>Qué traes</dt><dd>Credencial + plan</dd></div>
              <div><dt>Reembolso</dt><dd>50–80% según plan*</dd></div>
              <div><dt>Facilidades</dt><dd>6 cuotas sin interés</dd></div>
            </dl>
          </article>
          <article className="obs-pay__card">
            <h3 className="obs-pay__cardHead">Particular</h3>
            <dl className="obs-pay__dl">
              <div><dt>Cómo funciona</dt><dd>Pago directo con facilidades</dd></div>
              <div><dt>Qué traes</dt><dd>Carnet</dd></div>
              <div><dt>Reembolso</dt><dd>—</dd></div>
              <div><dt>Facilidades</dt><dd>Hasta 12 cuotas</dd></div>
            </dl>
          </article>
        </div>
        <p className="obs-pay__note">* El porcentaje depende de tu plan Isapre. Lo verificamos en la evaluación y te damos el cálculo por escrito.</p>

        <div className="obs-acc" aria-label="Preguntas sobre previsión">
          <div className="obs-acc__item">
            <button className="obs-acc__trigger" aria-expanded={open === 0} onClick={() => setOpen(open === 0 ? null : 0)}>
              <span>¿Atienden Fonasa?</span>
              <span className={`obs-acc__chev ${open === 0 ? "is-open" : ""}`} aria-hidden="true">⌃</span>
            </button>
            <div className={`obs-acc__panel ${open === 0 ? "is-open" : ""}`}>
              <p>Sí, nivel 3. Compras el bono antes y te atendemos sin copago adicional en prestaciones bonificables.</p>
            </div>
          </div>
          <div className="obs-acc__item">
            <button className="obs-acc__trigger" aria-expanded={open === 1} onClick={() => setOpen(open === 1 ? null : 1)}>
              <span>¿Qué Isapres tienen convenio?</span>
              <span className={`obs-acc__chev ${open === 1 ? "is-open" : ""}`} aria-hidden="true">⌃</span>
            </button>
            <div className={`obs-acc__panel ${open === 1 ? "is-open" : ""}`}>
              <p>Todas con reembolso. No hay 'convenio cerrado' que te amarre: emitimos boleta y reembolsas donde te convenga.</p>
            </div>
          </div>
          <div className="obs-acc__item">
            <button className="obs-acc__trigger" aria-expanded={open === 2} onClick={() => setOpen(open === 2 ? null : 2)}>
              <span>¿Puedo pagar en cuotas?</span>
              <span className={`obs-acc__chev ${open === 2 ? "is-open" : ""}`} aria-hidden="true">⌃</span>
            </button>
            <div className={`obs-acc__panel ${open === 2 ? "is-open" : ""}`}>
              <p>Sí, con tarjeta hasta 12 cuotas. Sin interés hasta 6 con Isapre/Fonasa. Te damos el total por escrito.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEspecialidades() {
  const base = import.meta.env.BASE_URL;
  const withBase = (p: string) => (base.endsWith("/") ? base + p : base + "/" + p);
  const tiles = [
    {
      file: "obsidiana-tile-01-1x1.png",
      num: "01",
      title: "Endodoncia microscópica",
      text: "Un conducto, un diente a la vez. Con microscopio y control radiográfico. Sin apuro.",
      meta: "Desde $135.000 · 90 min",
      alt: "Bodegón chiaroscuro de bandeja con instrumental esterilizado sobre piedra oscura",
    },
    {
      file: "obsidiana-tile-02-3x4.png",
      num: "02",
      title: "Implantología",
      text: "Tornillo + corona en 2 fases, con planificación digital y provisorio incluido.",
      meta: "Desde $420.000 · plan 2 fases",
      alt: "Detalle de lámpara operatoria dental, brazo articulado metálico oscuro",
    },
    {
      file: "obsidiana-tile-03-1x1.png",
      num: "03",
      title: "Ortodoncia alineadores",
      text: "Alineadores transparentes, controles mensuales, el mismo ortodoncista siempre.",
      meta: "Desde $48.000/mes",
      alt: "Recepción nocturna vacía con mostrador de madera oscura y luz lineal cálida",
    },
    {
      file: "obsidiana-tile-04-3x4.png",
      num: "04",
      title: "Estética adhesiva",
      text: "Carillas y restauraciones que parecen tuyas, no postizas. Menos es más.",
      meta: "Desde $64.900",
      alt: "Macro de superficie cerámica porcelana dental con luz rasante nocturna",
    },
  ];
  return (
    <section id="especialidades-reales-dentista-b-oscuro-premium" className="obs-works" aria-labelledby="esp-h2">
      <div className="obs-shell">
        <div className="obs-blockHead obs-blockHead--bone">
          <p className="obs-kicker obs-kicker--bone">Lo que hacemos bien</p>
          <h2 id="esp-h2" className="obs-h2 obs-h2--bone">Cuatro especialidades, siempre los mismos especialistas</h2>
          <p className="obs-intro obs-intro--bone">No rotamos tu caso. Cada plan lo sigue quien lo diagnosticó.</p>
        </div>

        <div className="obs-mosaic">
          {tiles.map((t) => (
            <article key={t.file} className="obs-mosaic__card">
              <div className="obs-mosaic__media">
                <img
                  src={withBase(`media/${t.file}`)}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" } as React.CSSProperties}
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent && !parent.querySelector("[data-falta]")) {
                      const d = document.createElement("div");
                      d.className = "obs-missing obs-missing--bone";
                      d.setAttribute("data-falta", t.file);
                      (d as HTMLElement).style.cssText = `aspect-ratio:4/3;background:#F0EBE3;border:1px dashed #D6D0C8;display:grid;place-items:center;color:#7A7570;font:500 0.85rem Outfit`;
                      d.textContent = `falta: ${t.file}`;
                      parent.appendChild(d);
                      console.warn(`[OBSIDIANA] falta: ${t.file}`);
                    }
                  }}
                />
              </div>
              <div className="obs-mosaic__body">
                <p className="obs-mosaic__num tabular">{t.num}</p>
                <h3 className="obs-mosaic__title">{t.title}</h3>
                <p className="obs-mosaic__text">{t.text}</p>
                <p className="obs-mosaic__meta tabular">{t.meta}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="obs-works__trust tabular">+12 años en Vitacura · +7.200 pacientes · 97% nos recomienda · 3 especialistas, siempre los mismos</p>
      </div>
    </section>
  );
}

function SectionAgenda() {
  const base = import.meta.env.BASE_URL;
  const withBase = (p: string) => (base.endsWith("/") ? base + p : base + "/" + p);
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [detalle, setDetalle] = useState("");
  const [whatsapp, setWhatsapp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim() || nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres).";
    const telNorm = tel.trim();
    const telRe = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    const telCompact = telNorm.replace(/[-\s]/g, "");
    const validTel = telRe.test(telNorm) || /^\+569\d{8}$/.test(telCompact);
    if (!telNorm) e.tel = "Ingresa tu teléfono.";
    else if (!validTel) e.tel = "Formato: +56 9 1234 5678";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Email no válido.";
    if (!motivo) e.motivo = "Selecciona un motivo.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      const payload = { nombre: nombre.trim(), tel: tel.trim(), email: email.trim(), motivo, detalle: detalle.trim(), whatsapp, date: new Date().toISOString() };
      try {
        localStorage.setItem("obsidiana-lead", JSON.stringify(payload));
      } catch {}
      setLoading(false);
      setSuccess(true);
      const msg = `Hola OBSIDIANA, quiero agendar evaluación. Soy ${payload.nombre}, motivo: ${payload.motivo}.`;
      const waUrl = `https://wa.me/56981234567?text=${encodeURIComponent(msg)}`;
      const mailUrl = `mailto:hola@obsidiana.cl?subject=${encodeURIComponent("Agendar evaluación - " + payload.nombre)}&body=${encodeURIComponent(msg + (payload.detalle ? "\nDetalle: " + payload.detalle : "") + "\nTel: " + payload.tel + (payload.email ? "\nEmail: " + payload.email : ""))}`;
      if (whatsapp) {
        window.open(waUrl, "_blank");
      } else {
        window.location.href = mailUrl;
      }
      console.info("[OBSIDIANA] lead guardado", payload);
    }, 700);
  };

  return (
    <section id="agenda-obsidiana" className="obs-book" aria-labelledby="agenda-h2">
      <div className="obs-shell obs-book__shell">
        <div className="obs-book__col">
          <p className="obs-kicker">Agenda</p>
          <h2 id="agenda-h2" className="obs-h2">Agenda tu evaluación. Te responden hoy.</h2>
          <p className="obs-intro">Elige día y te confirmamos por WhatsApp en el día. Si es urgencia, llama directo.</p>

          <form className="obs-form" onSubmit={handleSubmit} noValidate>
            <div className="obs-field">
              <label htmlFor="f-nombre-dentista-b-oscuro-premium">Nombre</label>
              <input id="f-nombre-dentista-b-oscuro-premium" type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required aria-invalid={!!errors.nombre} />
              {errors.nombre && <span className="obs-field__err">{errors.nombre}</span>}
            </div>

            <div className="obs-field">
              <label htmlFor="f-tel-dentista-b-oscuro-premium">Teléfono</label>
              <input id="f-tel-dentista-b-oscuro-premium" type="tel" placeholder="+56 9 1234 5678" value={tel} onChange={(e) => setTel(e.target.value)} required aria-invalid={!!errors.tel} className="tabular" />
              {errors.tel && <span className="obs-field__err">{errors.tel}</span>}
            </div>

            <div className="obs-field">
              <label htmlFor="f-email-dentista-b-oscuro-premium">Email</label>
              <input id="f-email-dentista-b-oscuro-premium" type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} />
              {errors.email && <span className="obs-field__err">{errors.email}</span>}
            </div>

            <div className="obs-field">
              <label htmlFor="f-motivo-dentista-b-oscuro-premium">Motivo</label>
              <select id="f-motivo-dentista-b-oscuro-premium" value={motivo} onChange={(e) => setMotivo(e.target.value)} required aria-invalid={!!errors.motivo}>
                <option value="">Selecciona motivo</option>
                <option value="Evaluación general">Evaluación general</option>
                <option value="Dolor/urgencia">Dolor/urgencia</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Ortodoncia">Ortodoncia</option>
                <option value="Implante">Implante</option>
                <option value="Estética">Estética</option>
                <option value="Otro">Otro</option>
              </select>
              {errors.motivo && <span className="obs-field__err">{errors.motivo}</span>}
            </div>

            <div className="obs-field obs-field--wide">
              <label htmlFor="f-detalle-dentista-b-oscuro-premium">Cuéntanos</label>
              <textarea id="f-detalle-dentista-b-oscuro-premium" placeholder="Cuéntanos en una línea" rows={3} value={detalle} onChange={(e) => setDetalle(e.target.value)} />
            </div>

            <label className="obs-check">
              <input type="checkbox" checked={whatsapp} onChange={(e) => setWhatsapp(e.target.checked)} />
              <span>Acepto que me contacten por WhatsApp</span>
            </label>

            <button type="submit" className="obs-btn obs-btn--solid obs-form__submit" disabled={loading}>
              {loading ? "Enviando…" : "Agendar evaluación"}
            </button>

            {success && (
              <div className="obs-form__ok" role="status" aria-live="polite">
                <span className="obs-form__okMark" aria-hidden="true">✓</span> Te escribimos hoy · revisa tu WhatsApp
              </div>
            )}
          </form>
        </div>

        <div className="obs-book__side">
          <a href="tel:+56981234567" className="obs-book__phone tabular">+56 9 8123 4567</a>
          <a href="mailto:hola@obsidiana.cl" className="obs-book__mail">hola@obsidiana.cl</a>
          <p className="obs-book__addr">Av. Vitacura 3568, Vitacura, Santiago</p>
          <p className="obs-book__hours"><span>Lun–Vie 9:00–19:30</span> <span className="obs-dot" aria-hidden="true" /> <span>Sáb 10:00–14:00</span></p>

          <div className="obs-book__rail" aria-label="Ubicación">
            <span className="obs-book__railDot" aria-hidden="true" />
            <span className="obs-book__railLine" aria-hidden="true" />
            <span className="obs-book__railLabel">Metro Manquehue · 4 min a pie</span>
          </div>

          <div className="obs-book__shot">
            <img
              src={withBase("media/obsidiana-proof-16x9.png")}
              alt="Interior premium nocturno de clínica vacía — pasillo con madera oscura y luz lineal cálida"
              loading="lazy"
              decoding="async"
              style={{ aspectRatio: "16 / 9", objectFit: "cover" } as React.CSSProperties}
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                const parent = img.parentElement;
                if (parent && !parent.querySelector("[data-falta]")) {
                  const d = document.createElement("div");
                  d.className = "obs-missing";
                  d.setAttribute("data-falta", "obsidiana-proof-16x9.png");
                  (d as HTMLElement).style.cssText = "aspect-ratio:16/9;background:#1B1917;border:1px dashed #2E2A28;display:grid;place-items:center;color:#9A9590;font:500 0.85rem Outfit";
                  d.textContent = "falta: obsidiana-proof-16x9.png";
                  parent.appendChild(d);
                  console.warn("[OBSIDIANA] falta: obsidiana-proof-16x9.png");
                }
              }}
            />
          </div>

          <p className="obs-book__trust">Boleta reembolsable · Fonasa nivel 3 · Isapre todas</p>
        </div>
      </div>

      <footer className="obs-foot">
        <div className="obs-shell">
          <p className="obs-foot__line">OBSIDIANA SpA · Av. Vitacura 3568, Vitacura · hola@obsidiana.cl · +56 9 8123 4567</p>
          <p className="obs-foot__copy">© 2026 OBSIDIANA. Todos los derechos reservados. Valores referenciales.</p>
        </div>
      </footer>
    </section>
  );
}

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.4 - window.innerHeight * 0.4;
      if (window.scrollY > window.innerHeight * 0.4 || window.scrollY > threshold) setVisible(window.scrollY > window.innerHeight * 0.6);
      else setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (visible) document.body.style.paddingBottom = "72px";
    else document.body.style.paddingBottom = "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [visible]);
  if (!visible) return null;
  return (
    <div className="obs-sticky" role="complementary" aria-label="Agendar evaluación">
      <a href="#agenda-obsidiana" className="obs-btn obs-btn--solid obs-sticky__btn">Agendar evaluación</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionEvaluacion />
        <SectionTratamientos />
        <SectionEspecialidades />
        <SectionIsapre />
        <SectionAgenda />
      </main>
      <StickyMobileCTA />
    </>
  );
}
