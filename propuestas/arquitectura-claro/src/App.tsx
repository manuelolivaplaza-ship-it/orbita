import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

function Header() {
  const [open, setOpen] = useState(false);

  // close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="header" role="banner">
      <a href="#portada-arquitectura-claro" className="skip-link">
        Saltar al contenido
      </a>
      <div className="header__inner">
        <a href="#portada-arquitectura-claro" className="header__logo" aria-label="Estudio — inicio">
          ESTUDIO
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#indice-obras-arquitectura-claro">Índice</a>
          <a href="#taller-arquitectura-claro">Taller</a>
          <a href="#materia-obra">Materia</a>
          <a href="#honorarios-claros">Honorarios</a>
        </nav>

        {/* hamburger - mobile only via CSS */}
        <button
          className="header__burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span className="header__burger-inner" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <a href="tel:+56987654321" className="header__tel" data-tel="+56 9 8765 4321">
          +56 9 8765 4321
        </a>

        {/* tel icon mobile */}
        <a
          href="tel:+56987654321"
          className="header__tel-icon"
          aria-label="Llamar +56 9 8765 4321"
          data-tel="+56 9 8765 4321"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.3 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12 1.18.4 2.34.82 3.44a2 2 0 0 1-.57 2.06L8 10.48a16 16 0 0 0 5.52 5.52l1.26-1.31a2 2 0 0 1 2.06-.57c1.1.42 2.26.7 3.44.82A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        <a href="#conversar-arquitectura-claro" className="header__cta">
          Cotizar
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav-arquitectura-claro"
            className="mobile-nav open"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <a href="#indice-obras-arquitectura-claro" onClick={() => setOpen(false)}>
              Índice
            </a>
            <a href="#taller-arquitectura-claro" onClick={() => setOpen(false)}>
              Taller
            </a>
            <a href="#materia-obra" onClick={() => setOpen(false)}>
              Materia
            </a>
            <a href="#honorarios-claros" onClick={() => setOpen(false)}>
              Honorarios
            </a>
            <a href="tel:+56987654321" onClick={() => setOpen(false)} data-tel="+56 9 8765 4321">
              +56 9 8765 4321
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroMedia() {
  const [missing, setMissing] = useState<string | null>(null);
  const [missingMobile, setMissingMobile] = useState(false);

  // check existence via fetch HEAD for reporting; fallback to onError
  useEffect(() => {
    let cancelled = false;
    const check = async (path: string) => {
      try {
        const res = await fetch(path, { method: "HEAD" });
        if (!res.ok) return false;
        return true;
      } catch {
        return false;
      }
    };
    (async () => {
      const heroExists = await check("/media/estudio-hero-16x9.png");
      if (!heroExists && !cancelled) setMissing("estudio-hero-16x9.png");
      const heroMExists = await check("/media/estudio-hero-9x16.png");
      if (!heroMExists && !cancelled) setMissingMobile(true);
      // console report per spec
      if (!heroExists) console.warn("[BUILD-01] media faltó: estudio-hero-16x9.png");
      else console.log("[BUILD-01] media ok: estudio-hero-16x9.png");
      if (!heroMExists) console.warn("[BUILD-01] media faltó (mobile): estudio-hero-9x16.png — se usa fallback 16:9");
      else console.log("[BUILD-01] media ok: estudio-hero-9x16.png");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (missing) {
    return (
      <div className="media-falta" data-falta={missing}>
        Falta: {missing}
      </div>
    );
  }

  return (
    <picture>
      {!missingMobile && <source media="(max-width:720px)" srcSet="/media/estudio-hero-9x16.png" />}
      <img
        src="/media/estudio-hero-16x9.png"
        alt="Mesa de dibujo con tablero de roble claro, papel vegetal con trazo a grafito y cotas a lápiz, escalímetro de aluminio y bloque de hormigón — muro encalado con nicho y maqueta blanca, luz norte"
        className="nicho__media"
        loading="eager"
        decoding="async"
        onError={() => setMissing("estudio-hero-16x9.png")}
      />
    </picture>
  );
}

function Hero() {
  // motion variants
  const h1Lines = ["Casas que pertenecen", "al paisaje, con permiso", "y presupuesto por escrito."];

  return (
    <section id="portada-arquitectura-claro" className="portada" aria-labelledby="hero-heading">
      <div className="portada__card">
        {/* left */}
        <div className="portada__left">
          <p className="kicker">TALLER · PUERTO VARAS — ARQUITECTURA RESIDENCIAL Y OBRA NUEVA</p>

          <h1 id="hero-heading" className="h1">
            {h1Lines.map((line, i) => (
              <span key={i} className="h1__line" style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.24,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "block" }}
                  className="reveal"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="subhead"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: 0.32, ease: "easeOut" }}
          >
            Proyectos con levantamiento, anteproyecto y detalle constructivo por el mismo arquitecto. Permisería incluida, honorarios en UF/m² transparentes y obra documentada semana a semana.
          </motion.p>

          <motion.div
            className="ctas"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: 0.4 }}
          >
            <a href="#conversar-arquitectura-claro" className="btn-primary">
              Cotizar tu proyecto con honorarios a la vista
            </a>
            <a href="#indice-obras-arquitectura-claro" className="btn-secondary">
              Ver índice de obras
            </a>
          </motion.div>

          <motion.div
            className="banda"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.26, delay: 0.5 }}
          >
            <span>
              Levantamiento en terreno <i className="dot" aria-hidden="true" />
            </span>
            <span>
              Permiso aprobado o se corrige <i className="dot" aria-hidden="true" />
            </span>
            <span>Obra administrada por el taller</span>
          </motion.div>

          <motion.p
            className="micro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, delay: 0.6 }}
          >
            Si el terreno no da para lo que imaginas, te decimos antes de cobrar el anteproyecto. Nunca partimos sin partida de honorarios firmada.
          </motion.p>
        </div>

        {/* right */}
        <motion.div
          className="portada__right"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, delay: 0.2, ease: "easeOut" }}
        >
          <div className="nicho">
            <HeroMedia />
          </div>
          <p className="caption">
            Mesa de dibujo · tablero roble, papel vegetal y bloque hormigón — luz norte —{" "}
            <strong>Taller Puerto Varas · 2024</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── BUILD-02 SECCIONES ─────────────── */

type Obra = {
  n: string;
  nombre: string;
  meta: string;
  comuna: string;
  estadoLabel: string;
  estadoKey: string;
  m2: string;
  ano: string;
  ficha: string;
};

const OBRAS: Obra[] = [
  { n: "01", nombre: "Casa Rupanco", meta: "Puerto Octay · casa aislada · habitada", comuna: "Puerto Octay", estadoLabel: "habitada", estadoKey: "habitada", m2: "214 m²", ano: "2024", ficha: "madera laminada + hormigón visto (lago) — estructura mixta, envolvente ventilada, fundación hormigón armado" },
  { n: "02", nombre: "Casa Maullín", meta: "Maullín · casa patio — en obra", comuna: "Maullín", estadoLabel: "en obra", estadoKey: "en-obra", m2: "178 m²", ano: "2024", ficha: "estructura madera + piedra laja — entramado plataforma, basamento piedra, cubierta zinc microondulado" },
  { n: "03", nombre: "Casa Frutillar Bajo", meta: "Frutillar · reforma + ampliación — habitada", comuna: "Frutillar", estadoLabel: "habitada", estadoKey: "habitada", m2: "142 m²", ano: "2023", ficha: "roble + acero negro — refuerzo acero, tabiquería roble, puente vidriado" },
  { n: "04", nombre: "Casa Ladera La Vara", meta: "Puerto Montt · obra nueva — permiso aprobado", comuna: "Puerto Montt", estadoLabel: "permiso aprobado", estadoKey: "permiso", m2: "196 m²", ano: "2024", ficha: "hormigón lavado + lenga — muro hormigón visto 15mm cantería, interior lenga cepillada" },
  { n: "05", nombre: "Casa Quincho Quincho", meta: "Llanquihue · quincho/la galería — habitado", comuna: "Llanquihue", estadoLabel: "habitado", estadoKey: "habitada", m2: "68 m²", ano: "2023", ficha: "madera + zinc microondulado — estructura pino laminado, quincho abierto, piso hormigón lavado" },
  { n: "06", nombre: "Casa TecA Pútrin", meta: "Puqueldón (Chiloé) · casa isla — anteproyecto", comuna: "Puqueldón", estadoLabel: "anteproyecto", estadoKey: "anteproyecto", m2: "165 m²", ano: "2024", ficha: "tejuelas + basamento piedra — tejuelas lenga, basamento piedra laja río, elevada por humedad" },
  { n: "07", nombre: "Casa Volcán", meta: "Ensenada · refugio — habitada", comuna: "Ensenada", estadoLabel: "habitada", estadoKey: "habitada", m2: "98 m²", ano: "2022", ficha: "madera + hormigón visto (negro) — hormigón pigmentado, interior pino, ventana corrida volcán" },
  { n: "08", nombre: "Casa Brazo", meta: "Cochamó · casa río — en obra", comuna: "Cochamó", estadoLabel: "en obra", estadoKey: "en-obra", m2: "185 m²", ano: "2024", ficha: "estructura madera + vidrio de piso a cielo — pilares laminados, paño vidriado 4.2m, deck lenga" },
];

function IndiceObras() {
  const [filtro, setFiltro] = useState<string>("todas");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [proofMissing, setProofMissing] = useState(false);
  const proofRef = useRef<HTMLDivElement>(null);

  // count-up for prueba social — once
  const [counts, setCounts] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const hasCounted = useRef(false);
  const pruebaRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = pruebaRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts({ a: 42, b: 12, c: 96, d: 18 });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !hasCounted.current) {
            hasCounted.current = true;
            const start = performance.now();
            const dur = 1200;
            const animate = (now: number) => {
              const t = Math.min((now - start) / dur, 1);
              const ease = 1 - Math.pow(1 - t, 3);
              setCounts({
                a: Math.round(ease * 42),
                b: Math.round(ease * 12),
                c: Math.round(ease * 96),
                d: Math.round(ease * 18),
              });
              if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // report missing media for proof (HEAD check)
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/media/estudio-proof-16x9.png", { method: "HEAD" });
        if (!r.ok) {
          setProofMissing(true);
          console.warn("[BUILD-02] media faltó: estudio-proof-16x9.png");
        } else console.log("[BUILD-02] media ok: estudio-proof-16x9.png");
      } catch {
        setProofMissing(true);
        console.warn("[BUILD-02] media faltó: estudio-proof-16x9.png");
      }
    })();
  }, []);

  const filtros: { label: string; key: string }[] = [
    { label: "Todas", key: "todas" },
    { label: "Habitada", key: "habitada" },
    { label: "En obra", key: "en-obra" },
    { label: "Permiso", key: "permiso" },
    { label: "Anteproyecto", key: "anteproyecto" },
  ];

  const filtered = OBRAS.filter((o) => (filtro === "todas" ? true : o.estadoKey === filtro));

  return (
    <section id="indice-obras-arquitectura-claro" className="sec sec--indice" aria-labelledby="indice-heading">
      <div className="sec__inner">
        <div className="sec__header">
          <p className="kicker kicker--accent2">ÍNDICE 01—08 · OBRA CONSTRUIDA Y EN OBRA</p>
          <h2 id="indice-heading" className="h2">Cada casa con ficha técnica y estado del permiso</h2>
          <p className="sec__intro">No son renders. Son casas con m², año, materiales y comuna. Toca y abre la ficha. Si está en obra, lo decimos.</p>
        </div>

        <p ref={pruebaRef} className="prueba-social" aria-label="Prueba social">
          <span>+{counts.a} casas habitadas</span> <i className="dot" aria-hidden="true" /> <span>{counts.b} en obra</span> <i className="dot" aria-hidden="true" />{" "}
          <span>{counts.c}% permisos aprobados primera vez</span> <i className="dot" aria-hidden="true" /> <span>{counts.d} años taller</span>
        </p>

        <div className="indice__grid">
          <div className="indice__lista" role="list">
            {filtered.map((obra, idx) => {
              const isOpen = expanded === idx;
              const globalIdx = OBRAS.indexOf(obra);
              return (
                <div
                  key={obra.n}
                  role="listitem"
                  className={`obra-row ${isOpen ? "obra-row--open" : ""}`}
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpanded(isOpen ? null : idx);
                    }
                  }}
                  tabIndex={0}
                  aria-expanded={isOpen}
                  style={{ transitionDelay: `${idx * 40}ms` } as React.CSSProperties}
                >
                  <div className="obra-row__main">
                    <span className="obra-row__num">{obra.n}</span>
                    <div className="obra-row__info">
                      <span className="obra-row__nombre">{obra.nombre}</span>
                      <span className="obra-row__meta">{obra.meta}</span>
                    </div>
                    <span className="obra-row__ano">{obra.ano}</span>
                    <span className="obra-row__m2">{obra.m2}</span>
                    <span className="obra-row__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="obra-row__ficha"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="obra-row__ficha-text">{obra.ficha}</p>
                        <p className="obra-row__ficha-caption">Ficha técnica · {obra.m2} · {obra.ano} · {obra.comuna} — estado: {obra.estadoLabel}</p>
                        {/* thumbs placeholders usando tiles 1:1 si no hay thumbs específicas */}
                        <div className="obra-row__thumbs" aria-hidden="true">
                          <span className="thumb thumb--placeholder">1:1</span>
                          <span className="thumb thumb--placeholder">1:1</span>
                          <span className="thumb thumb--placeholder">1:1</span>
                        </div>
                        <p className="obra-row__ficha-note">Usa tile 1:1 compartido — ficha desplegable sin imagen si no hay thumb dedicada. Índice completo {globalIdx + 1}/8.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            {filtered.length === 0 && <p className="obra-row__empty">Sin resultados para este filtro.</p>}
          </div>

          <div className="indice__lateral" ref={proofRef}>
            {proofMissing ? (
              <div className="media-falta" data-falta="estudio-proof-16x9.png" style={{ aspectRatio: "16/9" }}>
                Falta: estudio-proof-16x9.png
              </div>
            ) : (
              <>
                <div className="lateral__media-wrap">
                  <img
                    src="/media/estudio-proof-16x9.png"
                    alt="Casa de madera y hormigón visto 214 m² al borde de lago, fachada con ventana corrida, jardín nativo — luz difusa, documental"
                    className="lateral__media"
                    loading="lazy"
                    decoding="async"
                    onError={() => setProofMissing(true)}
                  />
                </div>
                <p className="caption caption--lateral">Ficha destacada · Casa Rupanco 214 m² — madera + hormigón, permiso DOM Puerto Octay 127/2024</p>
              </>
            )}
            <div className="filtros" role="group" aria-label="Filtrar por estado">
              {filtros.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className={`filtro-btn ${filtro === f.key ? "filtro-btn--active" : ""}`}
                  onClick={() => {
                    setFiltro(f.key);
                    setExpanded(null);
                  }}
                  aria-pressed={filtro === f.key}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <p className="filtros__caption">Filtra por estado — sin reload, despliega 260ms</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Taller() {
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/media/estudio-interior-16x9.png", { method: "HEAD" });
        if (!r.ok) {
          setMissing(true);
          console.warn("[BUILD-02] media faltó: estudio-interior-16x9.png");
        } else console.log("[BUILD-02] media ok: estudio-interior-16x9.png");
      } catch {
        setMissing(true);
        console.warn("[BUILD-02] media faltó: estudio-interior-16x9.png");
      }
    })();
  }, []);
  return (
    <section id="taller-arquitectura-claro" className="sec sec--taller" aria-labelledby="taller-heading">
      <div className="sec__inner taller__grid">
        <div className="taller__media">
          {missing ? (
            <div className="media-falta" data-falta="estudio-interior-16x9.png" style={{ aspectRatio: "16/9" }}>
              Falta: estudio-interior-16x9.png
            </div>
          ) : (
            <img
              src="/media/estudio-interior-16x9.png"
              alt="Interior del taller vacío: mesa de roble con maqueta blanca 1:100 en nicho encalado, rollo de planos y lápiz grafito, luz norte lateral"
              className="taller__img"
              loading="lazy"
              decoding="async"
              onError={() => setMissing(true)}
            />
          )}
          <p className="caption">Interior taller · tablero roble y nicho encalado — luz norte, maqueta 1:100 en hormigón claro</p>
        </div>
        <div className="taller__copy">
          <p className="kicker kicker--accent2">TALLER PEQUEÑO · 2 ARQUITECTOS + 1 DIBUJANTE</p>
          <h2 id="taller-heading" className="h2">Un arquitecto a cargo, de la primera cota a la última tabla.</h2>
          <p className="p">No derivamos. El mismo arquitecto levanta en terreno, dibuja el anteproyecto y va a obra una vez por semana con acta y fotos. Dibujante a cargo de planimetría y el estudio responde el teléfono.</p>
          <p className="p">Trabajamos con constructoras locales con contrato a suma alzada o administración. Si el presupuesto no cierra, el anteproyecto se ajusta sin cobrar de nuevo la etapa.</p>
          <div className="equipo" aria-label="Equipo">
            <div className="equipo__row">
              <span className="equipo__nombre">Javiera Ruiz — Arquitecta UDP, magíster PUC</span>
              <span className="equipo__rol">a cargo de proyecto y obra</span>
            </div>
            <div className="equipo__row">
              <span className="equipo__nombre">Martín Soto — Arquitecto UChile</span>
              <span className="equipo__rol">detalle constructivo y cubicación</span>
            </div>
            <div className="equipo__row">
              <span className="equipo__nombre">Dibujo y permisos</span>
              <span className="equipo__rol">planimetría y tramitación DOM</span>
            </div>
          </div>
          <div className="sello">
            Horario taller Lun–Vie 9:00–18:30 · Responde el arquitecto, no un call center. Visita a terreno en 7–10 días si el acceso está liberado.
          </div>
        </div>
      </div>
    </section>
  );
}

function MateriaObra() {
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const files = ["estudio-tile-01-1x1.png", "estudio-tile-02-3x4.png", "estudio-tile-03-1x1.png"];
    files.forEach(async (f) => {
      try {
        const r = await fetch(`/media/${f}`, { method: "HEAD" });
        if (!r.ok) {
          setMissing((m) => ({ ...m, [f]: true }));
          console.warn(`[BUILD-02] media faltó: ${f}`);
        } else console.log(`[BUILD-02] media ok: ${f}`);
      } catch {
        setMissing((m) => ({ ...m, [f]: true }));
        console.warn(`[BUILD-02] media faltó: ${f}`);
      }
    });
  }, []);
  const tiles = [
    { file: "estudio-tile-01-1x1.png", ratio: "1:1", caption: "Junta hormigón visto — cantería 15 mm, luz rasante", alt: "Macro junta de hormigón visto lavado con cantería 15 mm, luz rasante que marca arista" },
    { file: "estudio-tile-02-3x4.png", ratio: "3:4", caption: "Lenga cepillada — veta pareja, barniz mate incoloro", alt: "Tabla de madera lenga cepillada veta pareja, barniz mate incoloro, canto a la vista" },
    { file: "estudio-tile-03-1x1.png", ratio: "1:1", caption: "Piedra laja río — corte irregular, junta abierta 10 mm", alt: "Manto de piedra laja de río corte irregular junta abierta 10 mm, tono gris cálido" },
  ];
  return (
    <section id="materia-obra" className="sec sec--materia" aria-labelledby="materia-heading">
      <div className="sec__inner">
        <div className="sec__header sec__header--center">
          <p className="kicker kicker--accent">MATERIA · LUZ, MADERA, PIEDRA Y HORMIGÓN</p>
          <h2 id="materia-heading" className="h2 h2--center">El sur se construye con lo que el sur tiene a mano.</h2>
          <p className="sec__intro sec__intro--center">Madera laminada y lenga, hormigón lavado, piedra laja del río, zinc y tejuelas. Nada importado para aparentar: lo que resiste la lluvia y envejece bien.</p>
        </div>
        <div className="materia__grid">
          {tiles.map((t, i) => (
            <div key={t.file} className={`materia__tile materia__tile--${i + 1}`}>
              {missing[t.file] ? (
                <div className="media-falta" data-falta={t.file} style={{ aspectRatio: t.ratio === "3:4" ? "3/4" : "1/1" }}>
                  Falta: {t.file}
                </div>
              ) : (
                <div className="materia__media-wrap" style={{ aspectRatio: t.ratio === "3:4" ? "3/4" : "1/1" } as React.CSSProperties}>
                  <img
                    src={`/media/${t.file}`}
                    alt={t.alt}
                    className="materia__img"
                    loading="lazy"
                    decoding="async"
                    onError={() => setMissing((m) => ({ ...m, [t.file]: true }))}
                  />
                </div>
              )}
              <p className="caption caption--center">{t.caption}</p>
            </div>
          ))}
        </div>
        <div className="materia__nota">Muestras reales en taller: ven a tocar madera, piedra y hormigón antes de elegir terminación. Sin catálogo importado impreso.</div>
      </div>
    </section>
  );
}

function Honorarios() {
  return (
    <section id="honorarios-claros" className="sec sec--honorarios" aria-labelledby="honorarios-heading">
      <div className="sec__inner">
        <div className="sec__header">
          <p className="kicker kicker--accent2">PRESUPUESTO CLARO · HONORARIOS EN UF/M²</p>
          <h2 id="honorarios-heading" className="h2">Sabes cuánto cuesta antes de pagar el anteproyecto.</h2>
          <p className="sec__intro">Honorario por m² diseñado, no por porcentaje escondido de la obra. Permisería incluida. El valor final se confirma tras levantamiento y programa definido. Nunca partimos sin partida firmada.</p>
        </div>
        <div className="honorarios__tabla" role="list">
          <div className="honorarios__col" role="listitem">
            <p className="honorarios__kicker">Anteproyecto</p>
            <p className="honorarios__precio">desde 0,47 UF/m² · $18.400/m²</p>
            <p className="honorarios__eq">Casa 120 m² → $2.208.000</p>
            <p className="honorarios__uf">UF 39.100 al 31/08/2026 — CLP referencial.</p>
            <ul className="honorarios__bullets">
              <li>· Levantamiento + programa + 2 alternativas + maqueta 1:100</li>
              <li>· Entrega lámina A1 + PDF + planimetría base</li>
              <li>· Plazo 3–4 semanas · 2 correcciones incluidas</li>
            </ul>
            <a href="#conversar-arquitectura-claro" className="btn-ghost">
              Cotizar anteproyecto
            </a>
          </div>
          <div className="honorarios__col honorarios__col--destacada" role="listitem">
            <div className="badge-row">
              <p className="honorarios__kicker honorarios__kicker--accent2">Proyecto completo con permisos</p>
              <span className="badge">MÁS PEDIDO</span>
            </div>
            <p className="honorarios__precio">desde 0,82 UF/m² · $32.000/m²</p>
            <p className="honorarios__eq">Casa 120 m² → $3.840.000</p>
            <p className="honorarios__uf">UF 39.100 al 31/08/2026 — CLP referencial.</p>
            <ul className="honorarios__bullets">
              <li>· Todo lo del anteproyecto + detalle constructivo 1:20</li>
              <li>· Especificaciones + cubicación + tramitación DOM (permiso y recepción)</li>
              <li>· Plazo 6–8 semanas · permiso 60–90 días DOM</li>
            </ul>
            <a href="#conversar-arquitectura-claro" className="btn-solid">
              Cotizar proyecto completo
            </a>
          </div>
          <div className="honorarios__col" role="listitem">
            <p className="honorarios__kicker">Administración de obra</p>
            <p className="honorarios__precio honorarios__precio--sm">8% del costo de obra · desde $9.600.000 en casa 120 m² ($80M obra)</p>
            <p className="honorarios__uf">UF 39.100 al 31/08/2026 — CLP referencial.</p>
            <ul className="honorarios__bullets">
              <li>· Visita semanal + acta + fotos + control de cubicación</li>
              <li>· Coordinación constructoras con contrato a suma alzada</li>
              <li>· 6–10 meses según m² — pago mensual</li>
            </ul>
            <a href="#conversar-arquitectura-claro" className="btn-ghost">
              Conversar administración
            </a>
          </div>
        </div>
        <div className="honorarios__banda">
          <span>Permiso DOM incluido</span> <i className="dot" aria-hidden="true" />
          <span>2 correcciones por etapa sin costo</span> <i className="dot" aria-hidden="true" />
          <span>Cubicación con partida por partida</span> <i className="dot" aria-hidden="true" />
          <span>Gastos DOM y revisor no incluidos (~UF 8–15)</span>
        </div>
        <p className="honorarios__nota">Valores referenciales; el honorario final se confirma tras levantamiento y programa. Si el terreno o la norma no da para lo proyectado, se ajusta antes de cobrar la siguiente partida. Sin sorpresas.</p>
      </div>
    </section>
  );
}

function ComoTrabajamos() {
  const etapas = [
    { n: "01", titulo: "Conversación", dur: "7–10 días", desc: "Visita o videollamada + programa + presupuesto por escrito. Si el terreno no da, se dice esa semana." },
    { n: "02", titulo: "Levantamiento", dur: "2–3 días", desc: "Terreno, norma PRC, fotos, cotas y servicios. Entrega base en DWG + PDF." },
    { n: "03", titulo: "Anteproyecto", dur: "3–4 semanas", desc: "2 alternativas, maqueta 1:100, lámina A1. Eliges una y se ajusta." },
    { n: "04", titulo: "Permiso", dur: "6–8 semanas dibujo + 60–90 días DOM", desc: "Planimetría, EETT, tramitación. Nos hacemos cargo hasta recepción." },
    { n: "05", titulo: "Obra", dur: "6–10 meses", desc: "Visita semanal, acta y fotos. El arquitecto en obra, no un mandante fantasma." },
  ];
  return (
    <section id="como-trabajamos-arquitectura-claro" className="sec sec--proceso" aria-labelledby="proceso-heading">
      <div className="sec__inner">
        <div className="sec__header">
          <p className="kicker kicker--accent">PROCESO · 5 ETAPAS CON FECHA Y ENTREGA</p>
          <h2 id="proceso-heading" className="h2">Conversas, ves dibujo, firmamos y se construye.</h2>
        </div>
        <div className="proceso__grid">
          {etapas.map((e) => (
            <div key={e.n} className="proceso__etapa">
              <span className="proceso__num">{e.n}</span>
              <h3 className="proceso__titulo">{e.titulo}</h3>
              <p className="proceso__dur">{e.dur}</p>
              <p className="proceso__desc">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="proceso__banda">¿Cuánto demora todo? Casa 140 m²: 4 meses de proyecto + 3 meses de permiso + 8 meses de obra ≈ 15 meses desde primera conversación.</div>
      </div>
    </section>
  );
}

function Preguntas() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "¿Cuánto demora el permiso de construcción en Puerto Varas/Puerto Montt?",
      a: "Permiso de edificación: dibujo 6–8 semanas + revisión DOM 60–90 días corridos si la carpeta está completa. Si hay observaciones, 15–30 días más. La recepción final es con obra terminada y va aparte.",
    },
    { q: "¿Qué incluye el anteproyecto y qué no?", a: "Incluye levantamiento, dos alternativas, maqueta 1:100 y lámina A1. No incluye cálculo estructural ni especialidades (sanitario/eléctrico): se cotizan aparte UF 0,15–0,25/m² según complejidad." },
    {
      q: "¿Trabajan con su propia constructora o yo elijo?",
      a: "Trabajamos con 3 constructoras locales con contrato a suma alzada auditado por nosotros. Puedes traer la tuya: revisamos presupuesto partida por partida y administramos igual (8% obra).",
    },
    { q: "¿Cómo se paga? ¿Por hitos?", a: "Por hitos firmados: 30% al encargo de anteproyecto, 40% al ingreso del permiso, 30% a la obra. Administración mensual contra acta y avance real. Boleta o factura." },
    { q: "¿Diseñan fuera de Los Lagos?", a: "Sí, hasta Chiloé y Santiago con levantamiento presencial + seguimiento remoto y visita mensual. Fuera de la región se suma viático y 1 semana al plazo." },
  ];
  return (
    <section id="preguntas-arquitectura-claro" className="sec sec--preguntas" aria-labelledby="preguntas-heading">
      <div className="sec__inner preguntas__grid">
        <div className="preguntas__left">
          <p className="kicker kicker--accent2">PREGUNTAS FRECUENTES · SIN LETRA CHICA</p>
          <h2 id="preguntas-heading" className="h2">Respuestas que firmamos en la partida.</h2>
          <p className="p">Si no está acá, lo respondemos por WhatsApp con el arquitecto. Sin guion de ventas.</p>
        </div>
        <div className="preguntas__right" role="list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq ${isOpen ? "faq--open" : ""}`} role="listitem">
                <button type="button" className="faq__q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-a-${i}`}>
                  <span>{f.q}</span>
                  <span className={`faq__icon ${isOpen ? "faq__icon--open" : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div id={`faq-a-${i}`} className="faq__a-wrap" style={{ display: isOpen ? "block" : "none" }}>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="faq__a">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* fallback for reduced-motion / no JS: keep height auto */}
                  {!isOpen ? null : <noscript><p className="faq__a">{f.a}</p></noscript>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Conversar() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [comuna, setComuna] = useState("");
  const [m2, setM2] = useState("");
  const [etapa, setEtapa] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("estudio-conversar");
      if (saved) {
        const d = JSON.parse(saved);
        if (d.nombre) setNombre(d.nombre);
        if (d.tel) setTel(d.tel);
      }
    } catch {}
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim() || nombre.trim().length < 3) e.nombre = "Mínimo 3 caracteres.";
    const telNorm = tel.trim();
    const rePlus = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    const re9 = /^9\d{8}$/;
    const re9spaced = /^9\s?\d{4}\s?\d{4}$/;
    if (!rePlus.test(telNorm) && !re9.test(telNorm.replace(/\s/g, "")) && !re9spaced.test(telNorm)) e.tel = "Formato: +56 9 1234 5678 o 9 1234 5678.";
    if (!comuna) e.comuna = "Selecciona una comuna.";
    if (!m2) e.m2 = "Selecciona un rango.";
    if (!etapa) e.etapa = "Selecciona una etapa.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setStatus("error");
      setErrorMsg("Revisa los campos marcados.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    // simulate async + success
    setTimeout(() => {
      try {
        localStorage.setItem("estudio-conversar", JSON.stringify({ nombre, tel, comuna, m2, etapa }));
      } catch {}
      setStatus("success");
    }, 700);
  };

  return (
    <section id="conversar-arquitectura-claro" className="sec sec--conversar" aria-labelledby="conversar-heading">
      <div className="sec__inner conversar__grid">
        <div className="conversar__left">
          <p className="kicker kicker--accent2">CONVERSACIÓN DE 30 MIN · SIN COMPROMISO</p>
          <h2 id="conversar-heading" className="h2">Cuéntanos el terreno y te decimos qué se puede hacer — y cuánto cuesta.</h2>
          <a href="tel:+56987654321" className="tel-giant" data-tel="+56 9 8765 4321">
            +56 9 8765 4321
          </a>
          <p className="conversar__mail">hola@estudio.cl · Puerto Varas, Los Lagos</p>
          <p className="conversar__horario">Lun–Vie 9:00–18:30 · Visita a terreno en 7–10 días si el acceso está liberado</p>
          <p className="conversar__sellos">
            <span>Responde el arquitecto</span> <i className="dot" aria-hidden="true" /> <span>Presupuesto por escrito</span> <i className="dot" aria-hidden="true" /> <span>Permiso incluido</span>
          </p>
        </div>
        <form className="form" onSubmit={onSubmit} noValidate aria-label="Agenda tu conversación">
          <p className="form__title">Agenda tu conversación</p>

          <label className="form__label" htmlFor="f-nombre">
            Nombre*
          </label>
          <input id="f-nombre-arquitectura-claro" className={`form__input ${errors.nombre ? "form__input--error" : ""}`} type="text" placeholder="Javiera Rojas" value={nombre} onChange={(e) => setNombre(e.target.value)} required autoComplete="name" />
          {errors.nombre && <span className="form__error">{errors.nombre}</span>}

          <label className="form__label" htmlFor="f-tel">
            Teléfono*
          </label>
          <input
            id="f-tel-arquitectura-claro"
            className={`form__input ${errors.tel ? "form__input--error" : ""}`}
            type="tel"
            placeholder="+56 9 1234 5678"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
            autoComplete="tel"
            inputMode="tel"
          />
          {errors.tel && <span className="form__error">{errors.tel}</span>}

          <label className="form__label" htmlFor="f-comuna">
            Comuna del terreno*
          </label>
          <select id="f-comuna-arquitectura-claro" className={`form__input form__select ${errors.comuna ? "form__input--error" : ""}`} value={comuna} onChange={(e) => setComuna(e.target.value)} required>
            <option value="">Selecciona</option>
            <option>Puerto Varas</option>
            <option>Puerto Montt</option>
            <option>Frutillar</option>
            <option>Llanquihue</option>
            <option>Chiloé</option>
            <option>Otra</option>
          </select>
          {errors.comuna && <span className="form__error">{errors.comuna}</span>}

          <label className="form__label" htmlFor="f-m2">
            m² aproximados*
          </label>
          <select id="f-m2" className={`form__input form__select ${errors.m2 ? "form__input--error" : ""}`} value={m2} onChange={(e) => setM2(e.target.value)} required>
            <option value="">Selecciona</option>
            <option>&lt;80</option>
            <option>80–120</option>
            <option>120–180</option>
            <option>180–260</option>
            <option>&gt;260</option>
          </select>
          {errors.m2 && <span className="form__error">{errors.m2}</span>}

          <label className="form__label" htmlFor="f-etapa">
            Etapa*
          </label>
          <select id="f-etapa" className={`form__input form__select ${errors.etapa ? "form__input--error" : ""}`} value={etapa} onChange={(e) => setEtapa(e.target.value)} required>
            <option value="">Selecciona</option>
            <option>Tengo terreno</option>
            <option>Busco terreno</option>
            <option>Casa a reformar</option>
            <option>Solo anteproyecto</option>
          </select>
          {errors.etapa && <span className="form__error">{errors.etapa}</span>}

          <label className="form__label" htmlFor="f-msg">
            Mensaje
          </label>
          <textarea
            id="f-msg-arquitectura-claro"
            className="form__input form__textarea"
            rows={3}
            placeholder="Cuéntanos el terreno, pendiente, norma si la conoces y qué imaginas. Si tienes fotos o plano, lo vemos en la call."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <label className="form__check">
            <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} />
            <span>Acepto que me contacten para coordinar la conversación. No es spam.</span>
          </label>

          <button type="submit" className="btn-primary form__submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando…" : "Solicitar conversación — responde el arquitecto"}
          </button>

          {status === "success" && <p className="form__success" role="status">Listo. Te escribimos hoy antes de las 18:30. Revisa WhatsApp.</p>}
          {status === "error" && <p className="form__error form__error--block" role="alert">{errorMsg}</p>}

          <p className="form__fallback">
            ¿Prefieres escribir directo? <a href="https://wa.me/56987654321" target="_blank" rel="noreferrer">WhatsApp +56 9 8765 4321</a> · <a href="mailto:hola@estudio.cl">hola@estudio.cl</a>
          </p>
          <p className="form__micro">Sin compromiso. Si el terreno no da, te decimos en la primera conversación y no se cobra anteproyecto.</p>
        </form>
      </div>
    </section>
  );
}

function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("portada-arquitectura-claro");
    const conversar = document.getElementById("conversar-arquitectura-claro");
    if (!hero || !conversar) return;
    const ioHero = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // visible when hero NOT intersecting
          setVisible(!e.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    ioHero.observe(hero);
    const ioConv = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setHide(true);
          else setHide(false);
        });
      },
      { threshold: 0.1 }
    );
    ioConv.observe(conversar);
    return () => {
      ioHero.disconnect();
      ioConv.disconnect();
    };
  }, []);
  if (!visible || hide) return null;
  return (
    <div className="sticky-cta" role="region" aria-label="Acción rápida">
      <span className="sticky-cta__text">¿Hablamos del terreno?</span>
      <a href="#conversar-arquitectura-claro" className="sticky-cta__btn">
        Cotizar
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__marca">ESTUDIO — Taller de arquitectura</p>
          <p className="footer__sub">Puerto Varas, Los Lagos · hola@estudio.cl</p>
        </div>
        <nav className="footer__links" aria-label="Enlaces pie">
          <a href="#indice-obras-arquitectura-claro">Índice</a>
          <a href="#honorarios-claros">Honorarios</a>
          <a href="#como-trabajamos-arquitectura-claro">Proceso</a>
        </nav>
        <div className="footer__legal">
          <p>© 2026 Estudio · Honorarios en UF 39.100</p>
          <p>Hecho en Chile — sin plantillas extranjeras</p>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main id="main-content-arquitectura-claro">
        <Hero />
        <IndiceObras />
        <Taller />
        <MateriaObra />
        <Honorarios />
        <ComoTrabajamos />
        <Preguntas />
        <Conversar />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
