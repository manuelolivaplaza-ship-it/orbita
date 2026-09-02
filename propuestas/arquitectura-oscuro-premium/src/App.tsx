import { useEffect, useRef, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 24);
      if (y > 120) {
        if (y > lastY.current + 4) setHidden(true);
        else if (y < lastY.current - 4) setHidden(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={[
          "header",
          hidden && !open ? "header--hidden" : "",
          compact ? "header--compact" : "",
        ].filter(Boolean).join(" ")}
        role="banner"
      >
        <div className="header__inner">
          <a href="#umbral-arquitectura-oscuro-premium" className="header__brand" aria-label="UMBRAL — inicio">
            <span className="header__logo">UMBRAL</span>
            <span className="header__dot" aria-hidden="true" />
          </a>

          <nav className="header__nav" aria-label="Principal">
            <a href="#obras-arquitectura-oscuro-premium">Obras</a>
            <a href="#atelier">Atelier</a>
            <a href="#honorarios-arquitectura-oscuro-premium">Honorarios</a>
            <a href="#dudas-arquitectura-oscuro-premium">Dudas</a>
          </nav>

          <div className="header__right">
            <a href="tel:+56987654321" className="header__tel">+56 9 8765 4321</a>
            <a href="#conversar-arquitectura-oscuro-premium" className="header__cta">Conversar</a>
          </div>

          <button
            className="header__burger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span className="header__burger-lines" aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={open ? "mobile-menu mobile-menu--open" : "mobile-menu"}
        aria-hidden={!open}
        inert={!open ? true as unknown as boolean : undefined}
      >
        <nav className="mobile-menu__nav" aria-label="Móvil">
          <a href="#obras-arquitectura-oscuro-premium" onClick={close}>Obras</a>
          <a href="#atelier" onClick={close}>Atelier</a>
          <a href="#honorarios-arquitectura-oscuro-premium" onClick={close}>Honorarios</a>
          <a href="#dudas-arquitectura-oscuro-premium" onClick={close}>Dudas</a>
        </nav>
        <div className="mobile-menu__footer">
          <a href="tel:+56987654321" className="mobile-menu__tel">+56 9 8765 4321</a>
          <a href="#conversar-arquitectura-oscuro-premium" className="mobile-menu__cta" onClick={close}>Conversar</a>
        </div>
      </div>
    </>
  );
}

function HeroMedia() {
  const [err16x9, setErr16x9] = useState(false);
  const [err9x16, setErr9x16] = useState(false);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const alt = "Casa de hormigón y roble al anochecer con luz interior cálida — UMBRAL";

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}media/umbral-hero-loop.mp4`, { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, []);

  useEffect(() => {
    if (err16x9) console.warn("Falta media: umbral-hero-16x9.png");
    if (err9x16) console.warn("Falta media: umbral-hero-9x16.png");
  }, [err16x9, err9x16]);

  if (hasVideo === true && !err16x9) {
    return (
      <div className="hero__media-wrap hero__media-wrap--16x9">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={`${import.meta.env.BASE_URL}media/umbral-hero-16x9.png`}
          aria-label={alt}
        >
          <source src={`${import.meta.env.BASE_URL}media/umbral-hero-loop.mp4`} type="video/mp4" />
        </video>
      </div>
    );
  }

  const media16 = `${import.meta.env.BASE_URL}media/umbral-hero-16x9.png`;
  const media9 = `${import.meta.env.BASE_URL}media/umbral-hero-9x16.png`;

  return (
    <div className="hero__media-wrap hero__media-wrap--16x9">
      {err16x9 && err9x16 ? (
        <div className="media-falta" data-falta="umbral-hero-16x9.png">
          Falta media: umbral-hero-16x9.png
        </div>
      ) : (
        <>
          {!err16x9 ? (
            <img
              className="hero__img hero__img--desktop"
              src={media16}
              alt={alt}
              loading="eager"
              decoding="async"
              onError={() => setErr16x9(true)}
              style={{ display: err9x16 ? "block" : undefined }}
            />
          ) : null}
          {!err9x16 ? (
            <img
              className="hero__img hero__img--mobile"
              src={media9}
              alt={alt}
              loading="eager"
              decoding="async"
              onError={() => setErr9x16(true)}
            />
          ) : null}
        </>
      )}
      <style>{`
        .hero__img--mobile{display:none}
        @media(max-width:900px){
          .hero__img--desktop{display:none !important}
          .hero__img--mobile{display:block !important}
        }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <section id="umbral-arquitectura-oscuro-premium" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">ESTUDIO DE ARQUITECTURA · LAS CONDES — DESDE 2002</p>
          <h1 id="hero-title-arquitectura-oscuro-premium" className="hero__title">
            <span className="hero__title-line"><span>La obra habla.</span></span>
            <span className="hero__title-line"><span>El resto calla.</span></span>
          </h1>
          <p className="hero__sub">
            Estudio para casas y obra nueva de alto estándar. Diseño, permisería y construcción administrada por el mismo arquitecto, de principio a fin.
          </p>
          <div className="hero__ctas">
            <a href="#conversar-arquitectura-oscuro-premium" className="btn-primary">Conversar sobre tu proyecto</a>
            <a href="#obras-arquitectura-oscuro-premium" className="btn-ghost">Ver obras</a>
          </div>
        </div>

        <div className="hero__media" aria-label="Casa Quebrada — Lo Barnechea">
          <HeroMedia />
          <p className="hero__caption">Casa Quebrada — Lo Barnechea · 247 m² · 2024 · Hormigón y roble</p>
        </div>
      </div>
    </section>
  );
}

/* ================= #obras ================= */
type Obra = {
  n: string;
  nombre: string;
  comuna: string;
  tipologia: string;
  m2: string;
  ano: string;
  materiales: string;
  estado: string;
};

const OBRAS: Obra[] = [
  { n: "01", nombre: "Casa Quebrada", comuna: "Lo Barnechea", tipologia: "Casa en ladera", m2: "247 m²", ano: "2024", materiales: "Hormigón visto + roble", estado: "Entregada" },
  { n: "02", nombre: "Casa Patagua", comuna: "Chicureo", tipologia: "Casa patio", m2: "312 m²", ano: "2023", materiales: "Ladrillo y madera", estado: "Entregada" },
  { n: "03", nombre: "Casa Brisa", comuna: "Cachagua", tipologia: "Segunda vivienda", m2: "189 m²", ano: "2023", materiales: "Madera y piedra", estado: "Entregada" },
  { n: "04", nombre: "Casa Taller", comuna: "Pirque", tipologia: "Casa-taller", m2: "265 m²", ano: "2022", materiales: "Acero y hormigón", estado: "Entregada" },
  { n: "05", nombre: "Casa Lucerna", comuna: "Las Condes", tipologia: "Remodelación profunda", m2: "178 m²", ano: "2022", materiales: "Hormigón y vidrio", estado: "Entregada" },
  { n: "06", nombre: "Pabellón Arrayán", comuna: "Colchagua", tipologia: "Pabellón", m2: "84 m²", ano: "2021", materiales: "Madera laminada", estado: "Entregada" },
  { n: "07", nombre: "Casa Niebla", comuna: "Puerto Varas", tipologia: "Casa lago", m2: "298 m²", ano: "2021", materiales: "Tejuela y acero", estado: "Entregada" },
  { n: "08", nombre: "Casa Cumbre", comuna: "La Reina", tipologia: "Ampliación", m2: "132 m²", ano: "2020", materiales: "Ladrillo y hormigón", estado: "Entregada" },
];

function Obras() {
  const [open, setOpen] = useState<string | null>(null);
  const [errObra, setErrObra] = useState(false);

  return (
    <section id="obras-arquitectura-oscuro-premium" className="section section--obras" aria-labelledby="obras-title">
      <div className="container">
        <header className="section-head">
          <p className="kicker">OBRAS 2018—2024</p>
          <h2 id="obras-title" className="h2">Casas que pertenecen al lugar.</h2>
          <p className="section-head__micro">Ocho casas recientes. Toca cada una para ver ficha técnica.</p>
        </header>

        <div className="obras__list" role="list">
          {OBRAS.map((o) => {
            const isOpen = open === o.n;
            return (
              <div
                key={o.n}
                role="listitem"
                className={isOpen ? "obra-row obra-row--open" : "obra-row"}
              >
                <button
                  type="button"
                  className="obra-row__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`obra-panel-${o.n}`}
                  onClick={() => setOpen(isOpen ? null : o.n)}
                >
                  <span className="obra-row__num">{o.n}</span>
                  <span className="obra-row__name">{o.nombre}</span>
                  <span className="obra-row__meta">{o.comuna} · {o.tipologia}</span>
                  <span className="obra-row__arrow" aria-hidden="true">→</span>
                </button>
                <div
                  id={`obra-panel-${o.n}`}
                  className="obra-row__panel"
                  hidden={!isOpen}
                >
                  <div className="obra-row__ficha">
                    <div className="obra-row__ficha-text">
                      <dl>
                        <div><dt>Superficie</dt><dd>{o.m2}</dd></div>
                        <div><dt>Año</dt><dd>{o.ano}</dd></div>
                        <div><dt>Tipología</dt><dd>{o.tipologia}</dd></div>
                        <div><dt>Materiales</dt><dd>{o.materiales}</dd></div>
                        <div><dt>Estado</dt><dd>{o.estado}</dd></div>
                      </dl>
                      <p className="obra-row__ficha-nombre">{o.nombre} · {o.comuna} — {o.tipologia} · {o.m2} · {o.ano} — {o.materiales}</p>
                    </div>
                    <div className="obra-row__preview">
                      {errObra ? (
                        <div className="media-falta media-falta--obra" data-falta="umbral-obra-4x3.png">Falta media: umbral-obra-4x3.png</div>
                      ) : (
                        <img
                          src={`${import.meta.env.BASE_URL}media/umbral-obra-4x3.png`}
                          alt={`Interior ${o.nombre} — ${o.materiales}`}
                          loading="lazy"
                          decoding="async"
                          onError={() => setErrObra(true)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="obras__social">85 obras entregadas · 22 años · 98% permisos aprobados sin reparos · 1 arquitecto a cargo siempre</p>
      </div>
    </section>
  );
}

/* ================= #materia ================= */
function Materia() {
  const [errMateria, setErrMateria] = useState(false);
  const [errMaqueta, setErrMaqueta] = useState(false);

  return (
    <section id="materia" className="section section--materia" aria-labelledby="materia-title">
      <div className="container">
        <div className="materia__grid">
          <div className="materia__mosaico">
            <div className="materia__main">
              {errMateria ? (
                <div className="media-falta" data-falta="umbral-materia-3x4.png" style={{ aspectRatio: "3/4" }}>Falta media: umbral-materia-3x4.png</div>
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}media/umbral-materia-3x4.png`}
                  alt="Detalle hormigón visto con junta 10mm y veta de roble — UMBRAL"
                  loading="lazy"
                  decoding="async"
                  onError={() => setErrMateria(true)}
                />
              )}
              <p className="materia__caption">Junta 10mm — encofrado pino, luz rasante</p>
            </div>
            <div className="materia__sec">
              {errMaqueta ? (
                <div className="media-falta" data-falta="umbral-maqueta-1x1.png" style={{ aspectRatio: "1/1" }}>Falta media: umbral-maqueta-1x1.png</div>
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}media/umbral-maqueta-1x1.png`}
                  alt="Maqueta blanca 1:100 sobre mesa negra mate — UMBRAL"
                  loading="lazy"
                  decoding="async"
                  onError={() => setErrMaqueta(true)}
                />
              )}
            </div>
          </div>

          <div className="materia__text">
            <p className="kicker">MATERIA Y LUZ</p>
            <h2 id="materia-title" className="h2">El material decide la atmósfera.</h2>
            <p className="body">Trabajamos con hormigón visto, roble, piedra y acero negro. Cada junta, cada veta y cada sombra está dibujada 1:1 antes de obra. La luz no se renderiza: se construye.</p>
            <ul className="materia__bullets">
              <li>· Hormigón con encofrado pino 10cm</li>
              <li>· Roble americano aceitado</li>
              <li>· Piedra laja de la zona</li>
              <li>· Acero negro mate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= #atelier ================= */
function Atelier() {
  const [errTaller, setErrTaller] = useState(false);
  return (
    <section id="atelier" className="section section--atelier" aria-labelledby="atelier-title">
      <div className="container">
        <div className="atelier__grid">
          <div className="atelier__text">
            <p className="kicker">ATELIER</p>
            <h2 id="atelier-title" className="h2">Un equipo chico, una obra a la vez.</h2>
            <p className="body">UMBRAL lo dirige Patricio Arrieta, arquitecto PUC 2001, con dos arquitectos y una constructora de confianza. No somos oficina de 20: tomamos 6 proyectos al año y los dibujamos completos.</p>
            <p className="body">Del croquis al detalle 1:1, de la DOM a la obra. El mismo arquitecto te contesta el teléfono y va a la obra cada semana.</p>
            <p className="atelier__sub">Cómo trabajamos</p>
            <p className="atelier__list">Levantamiento con dron y escáner · Maqueta 1:100 y 1:50 · Libro de obra fotografiado</p>
          </div>
          <div className="atelier__media">
            <div className="atelier__frame">
              {errTaller ? (
                <div className="media-falta" data-falta="umbral-taller-16x9.png" style={{ aspectRatio: "16/9" }}>Falta media: umbral-taller-16x9.png</div>
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}media/umbral-taller-16x9.png`}
                  alt="Taller nocturno: mesa negra con maqueta blanca iluminada por lámpara articulada — UMBRAL"
                  loading="lazy"
                  decoding="async"
                  onError={() => setErrTaller(true)}
                />
              )}
            </div>
            <p className="caption">Maqueta 1:100 bajo luz cenital — mesa de trabajo UMBRAL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= #encargo ================= */
function Encargo() {
  const items = [
    { n: "01", t: "Anteproyecto", d: "Volumetría, plantas, cortes y renders interiores de estudio. Libro 20 páginas. 3–4 semanas. Entregable PDF + maqueta 1:100." },
    { n: "02", t: "Proyecto y permisería", d: "Planos municipales, EETT, gestión DOM hasta permiso. Incluye revisor independiente. 8–12 semanas según comuna." },
    { n: "03", t: "Detalle constructivo", d: "Planos 1:20, 1:10 y 1:1 de muebles, escalera y encuentros. Listado de materiales y cubicación. 4 semanas." },
    { n: "04", t: "Administración de obra", d: "Visita semanal, libro de obra, control de cubicación y estados de pago. Honorario mensual. Obra con constructor externo o asociado." },
  ];
  return (
    <section id="encargo" className="section section--encargo" aria-labelledby="encargo-title">
      <div className="container">
        <h2 id="encargo-title" className="sr-only">Qué recibes</h2>
        <div className="encargo__grid">
          {items.map((it) => (
            <div key={it.n} className="encargo__card">
              <span className="encargo__num">{it.n}</span>
              <h3 className="encargo__title">{it.t}</h3>
              <p className="encargo__desc">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= #travesia ================= */
function Travesia() {
  const etapas = [
    { n: "01", t: "Conversación", d: "Visita al terreno, programa y presupuesto estimado. 1 semana. Entregas croquis mano." },
    { n: "02", t: "Levantamiento", d: "Topografía, fotogrametría dron, estudio título. 1–2 semanas." },
    { n: "03", t: "Anteproyecto", d: "Ida y vuelta con maqueta. 3–4 semanas. 2 revisiones incluidas." },
    { n: "04", t: "Permisos", d: "Ingreso DOM, observaciones y aprobación. 8–12 semanas (depende de la DOM)." },
    { n: "05", t: "Obra", d: "Administración semanal hasta entrega. 8–14 meses según m²." },
  ];
  return (
    <section id="travesia" className="section section--travesia" aria-labelledby="travesia-title">
      <div className="container">
        <h2 id="travesia-title" className="sr-only">Travesía</h2>
        <div className="travesia__grid">
          {etapas.map((e) => (
            <div key={e.n} className="travesia__col">
              <span className="travesia__num">{e.n}</span>
              <h3 className="travesia__title">{e.t}</h3>
              <p className="travesia__desc">{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= #honorarios ================= */
function Honorarios() {
  return (
    <section id="honorarios-arquitectura-oscuro-premium" className="section section--honorarios" aria-labelledby="honorarios-title">
      <div className="container">
        <header className="section-head">
          <p className="kicker">HONORARIOS</p>
          <h2 id="honorarios-title-arquitectura-oscuro-premium" className="h2">Presupuesto cerrado antes de partir.</h2>
          <p className="honorarios__nota">Valores referenciales; se confirman tras visita a terreno. Nunca partimos sin presupuesto firmado.</p>
        </header>

        <div className="honorarios__table" role="table" aria-label="Honorarios">
          <div className="honorarios__row honorarios__row--head" role="row">
            <div role="columnheader">Anteproyecto</div>
            <div role="columnheader">Proyecto completo + permiso</div>
            <div role="columnheader">Administración de obra</div>
          </div>
          <div className="honorarios__row" role="row">
            <div role="cell" className="honorarios__cell">
              <span className="honorarios__price">desde $1.890.000 <i>(50 UF)</i></span>
              <span className="honorarios__desc">Casa hasta 200 m². Incluye 2 revisiones y maqueta.</span>
            </div>
            <div role="cell" className="honorarios__cell">
              <span className="honorarios__price">desde $5.670.000 <i>(150 UF)</i></span>
              <span className="honorarios__desc">Hasta 300 m². Incluye EETT, cubicación y tramitación DOM. Revisor no incluido.</span>
            </div>
            <div role="cell" className="honorarios__cell">
              <span className="honorarios__price">8% del costo de obra + IVA</span>
              <span className="honorarios__desc">Visita semanal, libro de obra, control de estados de pago. Mín. $890.000/mes.</span>
            </div>
          </div>
          <div className="honorarios__extra" role="row">
            <span>Obra gruesa referencia: desde 32 UF/m² (hormigón + envolvente). Terminaciones según especificación.</span>
          </div>
        </div>

        <div className="honorarios__cta-wrap">
          <a href="#conversar-arquitectura-oscuro-premium" className="btn-primary">Pedir presupuesto con visita</a>
        </div>
        <p className="honorarios__legal">UF del día. No incluye topografía ni mecánica de suelos. Permiso DOM sujeto a plazo municipal.</p>
      </div>
    </section>
  );
}

/* ================= #dudas ================= */
function Dudas() {
  const faqs = [
    { q: "¿Cuánto demora el permiso?", a: "Entre 8 y 12 semanas desde el ingreso. Las Condes y Vitacura son más rápidas; comunas con plano regulador antiguo demoran más. Te damos calendario con holgura." },
    { q: "¿Qué incluye el anteproyecto?", a: "Plantas, cortes, elevaciones, renders interiores de estudio y maqueta 1:100. No incluye cálculo ni especialidades." },
    { q: "¿Construyen ustedes o solo diseñan?", a: "Diseñamos y administramos. La construcción la hace tu constructor o uno de confianza nuestro, con contrato suma alzada y libro de obra." },
    { q: "¿Cómo se paga?", a: "30% al encargo, 40% al anteproyecto aprobado, 30% al ingreso DOM. Administración mensual. Factura exenta." },
    { q: "¿Diseñan fuera de Santiago?", a: "Sí. Base Santiago, obra en Chile central y sur. Visitas quincenales fuera de RM con viático." },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="dudas-arquitectura-oscuro-premium" className="section section--dudas" aria-labelledby="dudas-title">
      <div className="container">
        <h2 id="dudas-title" className="h2" style={{ marginBottom: 32 }}>Preguntas frecuentes</h2>
        <div className="dudas__list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={isOpen ? "duda duda--open" : "duda"}>
                <button
                  type="button"
                  className="duda__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`duda-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="duda__icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  id={`duda-panel-${i}`}
                  className="duda__panel"
                  hidden={!isOpen}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= #conversar + form ================= */
function Conversar() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comuna, setComuna] = useState("");
  const [m2, setM2] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const last = localStorage.getItem("umbral_last_submit");
    if (last) {
      const diff = Date.now() - Number(last);
      if (diff < 5 * 60 * 1000) setBlocked(true);
    }
  }, []);

  const phoneValid = (v: string) => {
    // +56 9 xxxx xxxx — accept digits with spaces, 9 digits after prefix
    const digits = v.replace(/\D/g, "");
    // Should be 11 digits starting 569
    if (digits.startsWith("569") && digits.length === 11) return true;
    if (digits.length === 9 && digits.startsWith("9")) return true;
    if (digits.length === 8) return true; // fallback minimal
    return false;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!nombre.trim()) { setError("Ingresa tu nombre."); return; }
    if (!phoneValid(telefono)) { setError("Revisa tu teléfono."); return; }
    if (blocked) { setError("Ya enviaste hace poco. Intenta en unos minutos."); return; }

    setLoading(true);
    // simulate 800ms
    setTimeout(() => {
      localStorage.setItem("umbral_last_submit", String(Date.now()));
      localStorage.setItem("umbral_last_data", JSON.stringify({ nombre, telefono, comuna, m2, mensaje }));
      setLoading(false);
      setSuccess(true);
      setBlocked(true);
    }, 800);
  };

  return (
    <section id="conversar-arquitectura-oscuro-premium" className="section section--conversar" aria-labelledby="conversar-title">
      <div className="container">
        <div className="conversar__grid">
          <div className="conversar__left">
            <p className="kicker">CONVERSAR</p>
            <h2 id="conversar-title" className="h2">Cuéntanos del terreno.</h2>
            <p className="body" style={{ color: "var(--muted)" }}>15 minutos por teléfono. Sin ejecutivo: responde el arquitecto.</p>

            {!success ? (
              <form className="conversar__form" onSubmit={onSubmit} noValidate>
                <label className="field">
                  <span>Nombre *</span>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </label>

                <label className="field">
                  <span>Teléfono *</span>
                  <input
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+56 9 8765 4321"
                    pattern=".*"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </label>

                <label className="field">
                  <span>Comuna / Terreno</span>
                  <select value={comuna} onChange={(e) => setComuna(e.target.value)}>
                    <option value="">Selecciona</option>
                    <option>Las Condes</option>
                    <option>Vitacura</option>
                    <option>Lo Barnechea</option>
                    <option>Chicureo</option>
                    <option>Otra</option>
                  </select>
                </label>

                <label className="field">
                  <span>m² estimados</span>
                  <input
                    type="number"
                    min={20}
                    max={2000}
                    value={m2}
                    onChange={(e) => setM2(e.target.value)}
                    placeholder="Ej: 220"
                    inputMode="numeric"
                  />
                </label>

                <label className="field field--full">
                  <span>Mensaje</span>
                  <textarea
                    rows={3}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Cuéntanos del terreno, programa o plazo"
                  />
                </label>

                {error ? <p className="form__error" role="alert">{error}</p> : null}

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Enviando…" : "Solicitar conversación"}
                </button>

                <p className="form__legal">Al enviar aceptas que te contactemos para coordinar la visita. No spam.</p>
              </form>
            ) : (
              <div className="form__success" role="status">
                <p>Gracias. Te contacta el arquitecto en 24h hábiles. Te dejamos WhatsApp directo.</p>
                <a
                  href="https://wa.me/56987654321?text=Hola%20UMBRAL%2C%20quiero%20conversar%20sobre%20mi%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Abrir WhatsApp +56 9 8765 4321
                </a>
              </div>
            )}
          </div>

          <div className="conversar__right">
            <a href="tel:+56987654321" className="conversar__tel">+56 9 8765 4321</a>
            <a href="mailto:hola@umbral.cl" className="conversar__mail">hola@umbral.cl</a>
            <p className="conversar__addr">Av. Apoquindo 3.600, Las Condes · Lun–Vie 10:00–19:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <span>© 2026 UMBRAL · Arquitectura · Las Condes, Chile</span>
        <span className="footer__links"><a href="#" aria-label="Instagram">Instagram</a> · <a href="#">Privacidad</a></span>
      </div>
    </footer>
  );
}

function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("umbral-arquitectura-oscuro-premium");
      const h = hero ? hero.getBoundingClientRect().bottom : 600;
      setVisible(h < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <div className="sticky-cta" role="region" aria-label="Acción rápida">
      <a href="tel:+56987654321" className="sticky-cta__tel">+56 9 8765 4321</a>
      <a href="#conversar-arquitectura-oscuro-premium" className="sticky-cta__btn">Conversar</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Obras />
        <Materia />
        <Atelier />
        <Encargo />
        <Travesia />
        <Honorarios />
        <Dudas />
        <Conversar />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
