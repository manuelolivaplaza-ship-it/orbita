import { useEffect, useState } from "react";

const HERO_DESKTOP = "/media/albor-hero-16x9.png";
const HERO_MOBILE = "/media/albor-hero-9x16.png";
const HERO_VIDEO = "/media/albor-hero-loop.mp4";

function useMediaExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    const img = new Image();
    img.onload = () => setExists(true);
    img.onerror = () => setExists(false);
    img.src = src;
  }, [src]);
  return exists;
}

function MediaImg({
  src,
  alt,
  ratio,
  caption,
  filename,
}: {
  src: string;
  alt: string;
  ratio: string;
  caption?: string;
  filename: string;
}) {
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (err) console.warn(`Falta ${filename}`);
  }, [err, filename]);
  if (err) {
    return (
      <div className="media-falta" data-falta={filename} style={{ aspectRatio: ratio }}>
        Falta {filename}
      </div>
    );
  }
  return (
    <>
      <div style={{ aspectRatio: ratio, overflow: "hidden", border: "1px solid var(--linea)", background: "#F2EEE6" }}>
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loading="lazy"
          onError={() => setErr(true)}
        />
      </div>
      {caption ? <p className="media-caption">{caption}</p> : null}
    </>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const desktopExists = useMediaExists(HERO_DESKTOP);
  const mobileExists = useMediaExists(HERO_MOBILE);

  useEffect(() => {
    if (desktopExists === false) console.warn("Falta albor-hero-16x9.png");
    if (mobileExists === false) console.warn("Falta albor-hero-9x16.png");
  }, [desktopExists, mobileExists]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#portada-clinica-claro" className="site-header__logo">
            <span>A</span>LBOR
          </a>
          <nav className="site-header__nav" aria-label="Navegación principal">
            <a href="#areas-clinicas">Áreas</a>
            <a href="#prevision-convenios">Previsión</a>
            <a href="#ruta-atencion-clinica-claro">Ruta</a>
            <a href="#indicaciones">Indicaciones</a>
          </nav>
          <a href="tel:+56229563400" className="site-header__tel tabular">
            +56 2 2956 3400
          </a>
          <a href="#agendar-hora" className="site-header__cta">
            Pedir hora
          </a>
          <a
            href="tel:+56229563400"
            className="site-header__tel-icon"
            aria-label="Llamar"
            style={{ gridColumn: "11 / span 1", justifySelf: "end" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.27.39 2.5.8 3.68a2 2 0 0 1-.57 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.57c1.18.41 2.41.68 3.68.8A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            className="site-header__burger"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span style={menuOpen ? { transform: "translateY(7px) rotate(45deg)" } : undefined} />
            <span style={menuOpen ? { opacity: 0 } : undefined} />
            <span style={menuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : undefined} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-drawer" aria-label="Navegación móvil">
          <a href="#areas-clinicas" onClick={() => setMenuOpen(false)}>Áreas</a>
          <a href="#prevision-convenios" onClick={() => setMenuOpen(false)}>Previsión</a>
          <a href="#ruta-atencion-clinica-claro" onClick={() => setMenuOpen(false)}>Ruta</a>
          <a href="#indicaciones" onClick={() => setMenuOpen(false)}>Indicaciones</a>
          <a href="tel:+56229563400" onClick={() => setMenuOpen(false)} style={{ color: "var(--accent)", fontWeight: 700 }} className="tabular">+56 2 2956 3400</a>
        </nav>
      )}

      <section id="portada-clinica-claro" className="hero">
        <nav className="hero__index" aria-label="Índice">
          <a href="#areas-clinicas"><span className="hero__index-num">01</span> ÁREAS</a>
          <a href="#prevision-convenios"><span className="hero__index-num">02</span> PREVISIÓN</a>
          <a href="#ruta-atencion-clinica-claro"><span className="hero__index-num">03</span> RUTA</a>
          <a href="#indicaciones"><span className="hero__index-num">04</span> INDICACIONES</a>
        </nav>

        <div className="hero__main">
          <p className="hero__kicker">Clínica Albor · Providencia — Desde 2012</p>
          <h1 className="hero__h1">Consulta, exámenes y control en un mismo lugar con hora disponible hoy.</h1>
          <p className="hero__sub">Médicos de área, no rotativos. Agenda en línea con hora real y indicaciones impresas. Si necesitas examen, lo tomas aquí mismo sin derivación externa.</p>
          <div className="hero__ctas">
            <a href="#agendar-hora" className="btn-primary">Pedir hora hoy</a>
            <a href="#areas-clinicas" className="btn-ghost">Ver áreas y aranceles</a>
          </div>
          <div className="hero__banda">
            <span className="hero__banda-item"><span className="hero__dot" /> Hoy quedan 6 horas</span>
            <span className="hero__banda-item"><span className="hero__dot" /> Fonasa e Isapre con bono</span>
            <span className="hero__banda-item"><span className="hero__dot" /> Exámenes en sede</span>
          </div>
          <p className="hero__micro">Primera consulta con tiempo: 20 min para contarte el diagnóstico en palabras simples. Sin bono sorpresa en caja.</p>
        </div>

        <div className="hero__media">
          {desktopExists === false ? (
            <div className="media-falta" data-falta="albor-hero-16x9.png">Falta albor-hero-16x9.png</div>
          ) : (
            <div className="hero__media-frame">
              {desktopExists ? (
                <>
                  <picture>
                    {mobileExists ? <source srcSet={HERO_MOBILE} media="(max-width: 520px)" /> : null}
                    <img src={HERO_DESKTOP} alt="Fichero clínico ALBOR sobre acero cepillado" loading="eager" />
                  </picture>
                  <VideoLayer src={HERO_VIDEO} poster={HERO_DESKTOP} />
                </>
              ) : null}
              <div className="hero__pestana">ALBOR · FICHA</div>
            </div>
          )}
          <p className="hero__caption">Fichero 04/2026 · Box 3 — luz norte 10:40 <span className="hero__caption-accent">· Área clínica · acero cepillado</span></p>
          {desktopExists === false && <div className="hero__pestana" style={{ top: 0, right: 0, position: "absolute" }}>ALBOR · FICHA</div>}
        </div>
      </section>

      <AreasClinicas />
      <PrevisionConvenios />
      <RutaAtencion />
      <Indicaciones />
      <AgendarHora />
      <Footer />
    </>
  );
}

function VideoLayer({ src, poster }: { src: string; poster: string }) {
  const [hasVideo, setHasVideo] = useState(false);
  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, [src]);
  if (!hasVideo) return null;
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

// ── #areas-clinicas ─────────────────────────────────────────────
const AREAS = [
  {
    idx: "01",
    estado: "HORA HOY",
    estadoOk: true,
    titulo: "Medicina general",
    medico: "Dra. M. Valdés · Lun–Vie",
    prestaciones: [
      { label: "Consulta general", price: "$35.000" },
      { label: "Control", price: "$25.000" },
      { label: "ECG reposo", price: "$18.000" },
    ],
    desde: "$35.000",
    examenLine: "Exámenes en sede: Sí · sin derivación",
  },
  {
    idx: "02",
    estado: "HORA HOY",
    estadoOk: true,
    titulo: "Dermatología",
    medico: "Dr. F. Reyes · Lun–Jue",
    prestaciones: [
      { label: "Consulta derma", price: "$48.000" },
      { label: "Dermatoscopía", price: "$35.000" },
      { label: "Crioterapia", price: "$42.000" },
    ],
    desde: "$48.000",
    examenLine: "Exámenes en sede: Sí · dermatoscopía",
  },
  {
    idx: "03",
    estado: "HORA HOY",
    estadoOk: true,
    titulo: "Oftalmología",
    medico: "Dra. C. Muñoz · Mar–Vie",
    prestaciones: [
      { label: "Consulta oftalmo", price: "$45.000" },
      { label: "Fondo de ojo", price: "$22.000" },
      { label: "OCT", price: "$38.000" },
    ],
    desde: "$45.000",
    examenLine: "Exámenes en sede: Sí · fondo de ojo / OCT",
  },
  {
    idx: "04",
    estado: "HORA HOY",
    estadoOk: true,
    titulo: "Traumatología",
    medico: "Dr. A. Soto · Lun–Mié–Vie",
    prestaciones: [
      { label: "Consulta trauma", price: "$46.000" },
      { label: "Infiltración", price: "$55.000" },
      { label: "Yesoterapia", price: "$28.000" },
    ],
    desde: "$46.000",
    examenLine: "Exámenes en sede: Solo consulta",
  },
  {
    idx: "05",
    estado: "HORA HOY",
    estadoOk: true,
    titulo: "Ginecología",
    medico: "Dra. P. León · Lun–Sáb",
    prestaciones: [
      { label: "Consulta gine", price: "$45.000" },
      { label: "PAP", price: "$12.000" },
      { label: "Eco gine", price: "$42.000" },
    ],
    desde: "$45.000",
    examenLine: "Exámenes en sede: Sí · PAP / eco",
  },
  {
    idx: "06",
    estado: "HORA HOY",
    estadoOk: true,
    titulo: "Kinesiología",
    medico: "Klgo. J. Rojas · Lun–Vie",
    prestaciones: [
      { label: "Sesión kine", price: "$28.000" },
      { label: "Evaluación kinésica", price: "$32.000" },
      { label: "Onda choque", price: "$35.000" },
    ],
    desde: "$28.000",
    examenLine: "Exámenes en sede: Solo consulta",
  },
];

function AreasClinicas() {
  return (
    <section id="areas-clinicas" className="section">
      <div className="section__inner">
        <div className="section-header">
          <p className="kicker kicker--accent">CUERPO CLÍNICO · 6 ÁREAS</p>
          <h2 className="h2">Especialidad con nombre y horario, no staff genérico</h2>
          <p className="section-intro">Cada área con médico a cargo, días de atención y arancel desde sin letra chica. Sin rotativos: ves al mismo profesional en control.</p>
        </div>
        <div className="areas-grid">
          <div className="areas-fichas">
            <div className="fichas-grid">
              {AREAS.map((a) => (
                <article key={a.idx} className="ficha">
                  <div className="ficha__top">
                    <span className="ficha__idx">{a.idx}</span>
                    <span className={`ficha__estado ${a.estadoOk ? "ficha__estado--ok" : "ficha__estado--no"}`}>
                      <span className={`ficha__dot ${a.estadoOk ? "" : "ficha__dot--grey"}`} /> {a.estado}
                    </span>
                  </div>
                  <h3 className="ficha__titulo">{a.titulo}</h3>
                  <p className="ficha__medico">{a.medico}</p>
                  <ul className="ficha__prestaciones">
                    {a.prestaciones.map((p) => (
                      <li key={p.label} className="ficha__prest">
                        <span className="ficha__prest-label">{p.label}</span>
                        <span className="ficha__prest-price">
                          <span className="ficha__desde">desde</span> <span className="tabular">{p.price}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="ficha__examen">{a.examenLine}</p>
                  <a href="#agendar-hora" className="ficha__cta">Pedir hora →</a>
                </article>
              ))}
            </div>
            <p className="nota-precios">Valores en CLP referenciales; el valor final se confirma en agenda según previsión. Fonasa e Isapre con bono en caja. Sin recargo por hora.</p>
          </div>
          <aside className="areas-aside">
            <div className="aside-card">
              <h3 className="aside-titulo">¿No sabes qué área?</h3>
              <p className="aside-text">Medicina general te orienta en 20 min y te deriva con hora tomada si necesitas especialidad. Sin pasar por call center.</p>
              <ul className="aside-checks">
                <li><span className="check-dash">—</span> Derivación interna con hora</li>
                <li><span className="check-dash">—</span> Examen el mismo día</li>
                <li><span className="check-dash">—</span> Indicaciones impresas</li>
              </ul>
              <a href="tel:+56229563400" className="aside-tel tabular">+56 2 2956 3400</a>
              <p className="aside-tel-sub">WhatsApp con hora real</p>
              <div style={{ marginTop: 14 }}>
                <MediaImg src="/media/albor-tile-01-1x1.png" alt="Box 2 acero y papel" ratio="1 / 1" filename="albor-tile-01-1x1.png" caption="Box 2 · acero y papel — luz norte" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ── #prevision-convenios ────────────────────────────────────────
function PrevisionConvenios() {
  return (
    <section id="prevision-convenios" className="section section--alt">
      <div className="section__inner">
        <div className="section-header">
          <p className="kicker kicker--amber">PREVISIÓN · SIN LETRA CHICA</p>
          <h2 className="h2">Fonasa, Isapre y particular con el mismo trato</h2>
          <p className="section-intro">Pagas con bono en caja. Si tu Isapre es con reembolso, te damos boleta timbrada y te explicamos el trámite en 1 minuto.</p>
        </div>
        <div className="prevision-grid">
          <div className="prevision-media">
            <MediaImg src="/media/albor-interior-16x9.png" alt="Recepción señalética" ratio="16 / 9" filename="albor-interior-16x9.png" caption="Recepción · señalética 1px — Providencia" />
            <div className="prevision-thumbs">
              <div style={{ flex: 1 }}>
                <MediaImg src="/media/albor-tile-02-1x1.png" alt="Recepción vacía" ratio="1 / 1" filename="albor-tile-02-1x1.png" caption="F° 04/2026" />
              </div>
              <div style={{ flex: 1 }}>
                <MediaImg src="/media/albor-tile-03-1x1.png" alt="Tarjetas y boleta" ratio="1 / 1" filename="albor-tile-03-1x1.png" caption="F° 04/2026" />
              </div>
            </div>
          </div>
          <div className="prevision-tabla-wrap">
            <div className="tabla-prevision">
              <div className="tabla-head">
                <span>Previsión</span>
                <span>Cómo pagas</span>
                <span>Qué recibes</span>
              </div>
              <div className="tabla-row">
                <span className="tabular" style={{ fontWeight: 600 }}>Fonasa</span>
                <span>Bono Fonasa en caja (huella o web) · tramo según tu letra</span>
                <span>Atención sin copago extra · sin recargo por hora</span>
              </div>
              <div className="tabla-row">
                <span style={{ fontWeight: 600 }}>Isapre con bono</span>
                <span>Bono Isapre en caja con huella</span>
                <span>Copago según tu plan · te indicamos el monto antes</span>
              </div>
              <div className="tabla-row">
                <span style={{ fontWeight: 600 }}>Isapre con reembolso / sin convenio</span>
                <span>Pagas particular y pides reembolso</span>
                <span>Boleta timbrada + informe si tu Isapre lo pide</span>
              </div>
              <div className="tabla-row">
                <span style={{ fontWeight: 600 }}>Particular</span>
                <span>Pago directo en caja o link</span>
                <span>Boleta y comprobante para seguro complementario</span>
              </div>
            </div>
            <div className="banda-arancel">
              <p className="banda-arancel__main tabular">Consulta general desde $35.000 · Especialidad desde $45.000 · Kine desde $28.000 · Exámenes desde $12.000</p>
              <p className="banda-arancel__nota">Valores referenciales; se confirma al agendar según previsión. Sin sorpresas en caja.</p>
            </div>
            <ul className="aside-checks" style={{ marginTop: 14 }}>
              <li><span className="check-dash">—</span> Bono en caja · sin pre-pago web obligatorio</li>
              <li><span className="check-dash">—</span> Boleta reembolsable</li>
              <li><span className="check-dash">—</span> Sin cobro por reagendar con 4h de anticipación</li>
            </ul>
            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <a href="#agendar-hora" className="btn-primary">Pedir hora con previsión</a>
              <a href="#indicaciones" className="btn-ghost">Ver indicaciones →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #ruta-atencion ──────────────────────────────────────────────
function RutaAtencion() {
  return (
    <section id="ruta-atencion-clinica-claro" className="section">
      <div className="section__inner">
        <div className="section-header" style={{ maxWidth: "52ch" }}>
          <p className="kicker kicker--accent">RUTA · QUÉ PASA EL DÍA 1</p>
          <h2 className="h2">Llegas, te atienden y sales con indicaciones escritas</h2>
          <p className="section-intro">Sin vueltas: si necesitas examen, lo tomas aquí. Si necesitas control, queda agendado antes de salir.</p>
        </div>
        <div className="timeline">
          <div className="timeline__step">
            <span className="timeline__num">01</span>
            <div className="timeline__line" />
            <h3 className="timeline__title">Consulta (20 min)</h3>
            <p className="timeline__text">Te escuchan sin apuro, revisan lo previo y te explican el diagnóstico en palabras simples. Definición de conducta y si requiere examen.</p>
            <p className="timeline__entrega">Quedas con papel de indicaciones</p>
            <p className="timeline__tiempo tabular">20 min</p>
          </div>
          <div className="timeline__step">
            <span className="timeline__num">02</span>
            <div className="timeline__line" />
            <h3 className="timeline__title">Examen en sede (si aplica)</h3>
            <p className="timeline__text">ECG, eco, laboratorio y toma de muestra en el mismo piso. Sin derivación externa, sin volver otro día. Resultado se carga a tu ficha.</p>
            <p className="timeline__entrega">Orden + toma inmediata</p>
            <p className="timeline__tiempo tabular">Resultado 24–48h según examen</p>
          </div>
          <div className="timeline__step">
            <span className="timeline__num">03</span>
            <div className="timeline__line" />
            <h3 className="timeline__title">Procedimiento / control</h3>
            <p className="timeline__text">Curación, infiltración, PAP, crioterapia u otro menor en box habilitado. Control agendado antes de salir con fecha y hora impresa.</p>
            <p className="timeline__entrega">Tarjeta de control + indicaciones en casa</p>
            <p className="timeline__tiempo tabular">Control 7–14 días</p>
          </div>
        </div>
        <div className="pildoras">
          <span className="pildora"><span className="pildora__dot" /> Sin derivación externa</span>
          <span className="pildora"><span className="pildora__dot" /> Indicaciones impresas</span>
          <span className="pildora"><span className="pildora__dot" /> Control con hora tomada</span>
        </div>
        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 24 }}>
          <div style={{ gridColumn: "1 / span 5" }} className="ruta-proof">
            <MediaImg src="/media/albor-proof-16x9.png" alt="Tarjeta de indicaciones" ratio="16 / 9" filename="albor-proof-16x9.png" caption="Tarjeta de indicaciones · tipografía tabular — impresas al salir" />
          </div>
          <div style={{ gridColumn: "6 / span 7", display: "flex", alignItems: "center" }} className="ruta-cita-wrap">
            <p className="ruta-cita">Si el examen no está disponible el mismo día, te avisamos antes de la consulta y te damos la hora más próxima sin hacerte esperar en sala.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #indicaciones ───────────────────────────────────────────────
const IND_ROWS = [
  {
    title: "Consulta general / especialidad — Sin ayuno",
    price: "desde $35.000",
    body: "Trae carnet, bonos vigentes y lista de medicamentos. Si vienes por control, trae indicaciones anteriores.",
  },
  {
    title: "ECG reposo — Sin ayuno · 10 min",
    price: "desde $18.000",
    body: "Sin crema en pecho, ropa cómoda. Resultado en el momento.",
  },
  {
    title: "Ecografía abdominal — Ayuno 8h · 20 min",
    price: "desde $45.000",
    body: "Ayuno sólido y líquido 8h. Trae examen previo si tienes. Vejiga no necesita estar llena.",
  },
  {
    title: "Laboratorio / perfil bioquímico — Ayuno 8h",
    price: "desde $18.500",
    body: "Ayuno 8h, sin alcohol 24h. Toma en sede 08:00–10:30. Resultado 24h en ficha.",
  },
  {
    title: "PAP / gine — Sin ayuno · evita regla",
    price: "desde $12.000",
    body: "Sin regla, sin óvulos 48h. Trae PAP previo si tienes (<1 año).",
  },
];

function Indicaciones() {
  const [open, setOpen] = useState(0);
  return (
    <section id="indicaciones" className="section section--alt">
      <div className="section__inner">
        <div className="section-header" style={{ maxWidth: "60ch" }}>
          <p className="kicker kicker--amber">INDICACIONES · LLEGA PREPARADO</p>
          <h2 className="h2">Ayuno, papeles y qué traer según tu prestación</h2>
          <p className="section-intro">Si vienes con ayuno cuando no hace falta, pierdes la mañana. Revisa abajo y llega justo.</p>
        </div>
        <div className="indicaciones-grid">
          <div className="acordeon">
            {IND_ROWS.map((row, i) => (
              <div key={row.title} className="acordeon__row">
                <button
                  className="acordeon__head"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="acordeon__title">{row.title}</span>
                  <span className="acordeon__price tabular">{row.price}</span>
                  <span className={`acordeon__chevron ${open === i ? "acordeon__chevron--open" : ""}`} aria-hidden="true" />
                </button>
                {open === i && (
                  <div className="acordeon__body">
                    <p>— {row.body}</p>
                  </div>
                )}
              </div>
            ))}
            <p className="nota-honesta">Si tienes duda de ayuno, agenda igual y te escribimos por WhatsApp con la indicación exacta. No te hacemos ayunar por si acaso.</p>
          </div>
          <aside className="indicaciones-aside">
            <div className="aside-card">
              <h3 className="aside-titulo">Antes de venir</h3>
              <p className="aside-text">Llega 10 min antes con carnet. Si es niño/a, trae carnet de control sano. Estacionamiento subterráneo 1h liberada con bono.</p>
              <ul className="aside-checks">
                <li><span className="check-dash">—</span> Carnet + bono</li>
                <li><span className="check-dash">—</span> Lista de medicamentos</li>
                <li><span className="check-dash">—</span> Exámenes previos (&lt;6 meses)</li>
              </ul>
              <a href="tel:+56229563400" className="aside-tel tabular" style={{ fontSize: "1.05rem" }}>+56 2 2956 3400</a>
              <div style={{ marginTop: 14 }}>
                <MediaImg src="/media/albor-tile-04-3x4.png" alt="Señalética clínica" ratio="3 / 4" filename="albor-tile-04-3x4.png" caption="Señalética clínica · filete 1px — sin saturación" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ── #agendar-hora ───────────────────────────────────────────────
function AgendarHora() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [prevision, setPrevision] = useState("");
  const [examen, setExamen] = useState("No");
  const [fecha, setFecha] = useState("Hoy");
  const [hora, setHora] = useState("Mañana 08:30–13:00");
  const [mensaje, setMensaje] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Nombre mínimo 2 caracteres";
    const telClean = tel.replace(/\s/g, "");
    const re1 = /^\+56\s?9\d{8}$/;
    const re2 = /^\+569\d{8}$/;
    const re3 = /^9\d{8}$/;
    const re4 = /^\+569\d{8}$/;
    // normalized check
    const ok = re1.test(tel) || re2.test(telClean) || re3.test(telClean) || re4.test(telClean) || /^9\d{8}$/.test(telClean);
    // also allow +56 9XXXXXXXX with space
    const normalized = tel.replace(/\s+/g, "");
    const telOk = /^(\+56)?9\d{8}$/.test(normalized);
    if (!telOk && !ok) e.tel = "Formato: +56 9 12345678 o 912345678";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email inválido";
    if (!area) e.area = "Elige un área";
    if (!consent) e.consent = "Debes aceptar el contacto por WhatsApp";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const key = `albor_hora_${Date.now()}`;
      localStorage.setItem(key, JSON.stringify({ nombre, tel, email, area, prevision, examen, fecha, hora, mensaje, at: new Date().toISOString() }));
      const text = `Hola ALBOR, quiero hora ${area} el ${fecha} ${hora}. Soy ${nombre}, previsión ${prevision || "por confirmar"}.`;
      const url = `https://wa.me/56229563400?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    }, 800);
  }

  return (
    <section id="agendar-hora" className="section">
      <div className="section__inner">
        <div className="section-header">
          <p className="kicker kicker--accent">AGENDA · HOY O MAÑANA</p>
          <h2 className="h2">Elige hora y te confirmamos por WhatsApp en minutos</h2>
          <p className="section-intro">Lunes a viernes 08:30–19:30 · Sábado 09:00–14:00. Si la hora ya se tomó, te ofrecemos la siguiente libre sin hacerte esperar en sala.</p>
        </div>
        <div className="agendar-grid">
          <div className="agendar-info">
            <a href="tel:+56229563400" className="agendar-tel tabular">+56 2 2956 3400</a>
            <p className="agendar-tel-sub">WhatsApp directo con recepción, no call center.</p>
            <p className="agendar-horarios"><span className="agendar-dot" /> Hoy quedan 6 horas: 10:30 · 11:20 · 15:00 · 16:10 · 17:00 · 18:30 · exámenes hasta 11:00</p>
            <div className="agendar-prueba">
              <p className="agendar-prueba-title">Últimas 4 atenciones (ficha, sin nombres)</p>
              <ul className="agendar-prueba-list">
                <li>Medicina general · bono Fonasa · indicaciones impresas</li>
                <li>Derma · dermatoscopía en sede</li>
                <li>Oftalmo · OCT mismo día</li>
                <li>Kine · evaluación +1ª sesión</li>
              </ul>
            </div>
            <p className="agendar-compromiso">Si llegas y la espera supera 15 min, te avisamos por WhatsApp y reagendas sin perder el bono.</p>
            <p className="agendar-sede">Sede Providencia: Av. Providencia 1208, piso 4 · Metro Los Leones · Estacionamiento 1h liberada</p>
          </div>
          <form className="agendar-form" onSubmit={handleSubmit} noValidate>
            {success ? (
              <div className="form-success">
                <p className="form-success__title">¡Hora solicitada!</p>
                <p className="form-success__text">Te llega WhatsApp con hora confirmada y indicaciones de ayuno si aplica. Si no hay hora hoy, te proponemos mañana antes de las 10:00.</p>
                <div className="form-success__line" />
              </div>
            ) : null}
            <div className="form-grid">
              <div className="form-field">
                <label>Nombre *</label>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
                {errors.nombre ? <span className="form-err">{errors.nombre}</span> : null}
              </div>
              <div className="form-field">
                <label>Tel / WhatsApp *</label>
                <input value={tel} onChange={(e) => setTel(e.target.value)} placeholder="+56 9 1234 5678" inputMode="tel" />
                {errors.tel ? <span className="form-err">{errors.tel}</span> : null}
              </div>
              <div className="form-field">
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.cl" type="email" />
                {errors.email ? <span className="form-err">{errors.email}</span> : null}
              </div>
              <div className="form-field">
                <label>Área que necesitas *</label>
                <select value={area} onChange={(e) => setArea(e.target.value)}>
                  <option value="">Selecciona área</option>
                  <option>Medicina general (me orienta)</option>
                  <option>Medicina general</option>
                  <option>Dermatología</option>
                  <option>Oftalmología</option>
                  <option>Traumatología</option>
                  <option>Ginecología</option>
                  <option>Kinesiología</option>
                </select>
                {errors.area ? <span className="form-err">{errors.area}</span> : null}
              </div>
              <div className="form-field">
                <label>¿Previsión?</label>
                <select value={prevision} onChange={(e) => setPrevision(e.target.value)}>
                  <option value="">Selecciona previsión</option>
                  <option>Fonasa</option>
                  <option>Isapre con bono</option>
                  <option>Isapre reembolso</option>
                  <option>Particular</option>
                </select>
              </div>
              <div className="form-field">
                <label>¿Examen?</label>
                <select value={examen} onChange={(e) => setExamen(e.target.value)}>
                  <option>No</option>
                  <option>Sí — especificar en mensaje</option>
                  <option>ECG</option>
                  <option>Ecografía</option>
                  <option>Laboratorio</option>
                  <option>PAP</option>
                </select>
              </div>
              <div className="form-field">
                <label>Fecha preferida</label>
                <select value={fecha} onChange={(e) => setFecha(e.target.value)}>
                  <option>Hoy</option>
                  <option>Mañana</option>
                  <option>Esta semana</option>
                </select>
              </div>
              <div className="form-field">
                <label>Hora</label>
                <select value={hora} onChange={(e) => setHora(e.target.value)}>
                  <option>Mañana 08:30–13:00</option>
                  <option>Tarde 15:00–19:30</option>
                </select>
              </div>
              <div className="form-field form-field--full">
                <label>Mensaje</label>
                <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Ej: quiero hora derma para lunar, ¿necesito ayuno? Tengo Isapre Banmédica." rows={3} />
              </div>
            </div>
            <label className="form-check">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>Acepto que me contacten por WhatsApp para confirmar la hora. No spam, solo esta agenda.</span>
            </label>
            {errors.consent ? <span className="form-err" style={{ marginTop: 4, display: "block" }}>{errors.consent}</span> : null}
            <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 16 }} disabled={loading}>
              {loading ? <><span className="spinner" /> Enviando…</> : "Pedir hora por WhatsApp"}
            </button>
            <a href="tel:+56229563400" className="btn-ghost" style={{ width: "100%", marginTop: 10, textAlign: "center" }}>Llamar ahora</a>
            {success ? <p className="micro-exito">Te llega WhatsApp con hora confirmada y indicaciones de ayuno si aplica. Si no hay hora hoy, te proponemos mañana antes de las 10:00.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__left">
          <p className="site-footer__brand">ALBOR · Clínica Providencia · Av. Providencia 1208, piso 4</p>
          <p className="site-footer__horario">Horario 08:30–19:30 Lun–Vie · 09:00–14:00 Sáb</p>
        </div>
        <div className="site-footer__right">
          <nav className="site-footer__links">
            <a href="#areas-clinicas">Áreas</a>
            <span className="footer-sep">·</span>
            <a href="#prevision-convenios">Previsión</a>
            <span className="footer-sep">·</span>
            <a href="#indicaciones">Indicaciones</a>
            <span className="footer-sep">·</span>
            <a href="#agendar-hora">Agendar</a>
          </nav>
          <p className="site-footer__copy">© 2026 ALBOR</p>
        </div>
      </div>
    </footer>
  );
}
