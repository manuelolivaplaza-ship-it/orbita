import { useEffect, useState, useRef } from "react";

const HERO_16 = "media/noctua-hero-16x9.png";
const HERO_9X16 = "media/noctua-hero-9x16.png";
const HERO_VIDEO = "media/noctua-hero-loop.mp4";

function useBase(path: string) {
  const base = (import.meta.env.BASE_URL as string) || "/";
  const b = base.endsWith("/") ? base : base + "/";
  const p = path.replace(/^\//, "");
  return b + p;
}

function useIsMobile(bp = 640) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp}px)`);
    const onChange = () => setM(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [bp]);
  return m;
}

/* ---------- data ---------- */
type Carrera = {
  num: string;
  nombre: string;
  meta: string;
  precio: string;
  precioRaw: string;
  categoria: string;
  duracion: string;
  jornada: string;
  arancel: string;
  campo: string;
  detalleCampo2: string;
};

const CARRERAS: Carrera[] = [
  { num: "01", nombre: "Derecho · Licenciatura en Ciencias Jurídicas", meta: "Diurno / Vespertino · 10 semestres", precio: "Desde $6.480.000/año", precioRaw: "$6.480.000", categoria: "derecho", duracion: "10 semestres", jornada: "Diurno / Vespertino", arancel: "$6.480.000", campo: "Estudios jurídicos, asesoría corporativa y litigación.", detalleCampo2: "Sector público, estudios privados, tribunales y empresa." },
  { num: "02", nombre: "Psicología · Mención Clínica", meta: "Diurno / Vespertino · 10 semestres", precio: "Desde $5.880.000/año", precioRaw: "$5.880.000", categoria: "salud", duracion: "10 semestres", jornada: "Diurno / Vespertino", arancel: "$5.880.000", campo: "Clínica, organizacional y desarrollo. Centros de salud y RR.HH.", detalleCampo2: "Consultas, hospitales, empresas y programas comunitarios." },
  { num: "03", nombre: "Ingeniería Comercial · Mención Finanzas", meta: "Diurno / Vespertino · 10 semestres", precio: "Desde $6.120.000/año", precioRaw: "$6.120.000", categoria: "ingenieria", duracion: "10 semestres", jornada: "Diurno / Vespertino", arancel: "$6.120.000", campo: "Finanzas, gestión comercial y análisis de negocios.", detalleCampo2: "Banca, retail, consultoría y emprendimiento." },
  { num: "04", nombre: "Ing. Civil Industrial", meta: "Diurno · 11 semestres", precio: "Desde $6.750.000/año", precioRaw: "$6.750.000", categoria: "ingenieria", duracion: "11 semestres", jornada: "Diurno", arancel: "$6.750.000", campo: "Operaciones, logística y optimización de procesos.", detalleCampo2: "Industria, servicios, supply chain y mejora continua." },
  { num: "05", nombre: "Enfermería · Prácticas desde 3er año", meta: "Diurno · 10 semestres", precio: "Desde $6.900.000/año", precioRaw: "$6.900.000", categoria: "salud", duracion: "10 semestres", jornada: "Diurno", arancel: "$6.900.000", campo: "Cuidado clínico, urgencia y salud pública.", detalleCampo2: "Hospitales, clínicas, APS y atención domiciliaria." },
  { num: "06", nombre: "Arquitectura · Taller nocturno", meta: "Diurno / Vespertino · 12 semestres", precio: "Desde $6.240.000/año", precioRaw: "$6.240.000", categoria: "diseno", duracion: "12 semestres", jornada: "Diurno / Vespertino", arancel: "$6.240.000", campo: "Proyecto, obra y planificación urbana.", detalleCampo2: "Oficinas, constructoras, municipios y desarrollo inmobiliario." },
  { num: "07", nombre: "Diseño · Mención Experiencia y producto", meta: "Diurno · 9 semestres", precio: "Desde $5.420.000/año", precioRaw: "$5.420.000", categoria: "diseno", duracion: "9 semestres", jornada: "Diurno", arancel: "$5.420.000", campo: "Producto, experiencia y comunicación visual.", detalleCampo2: "Estudios, startups, retail y industria creativa." },
  { num: "08", nombre: "Trabajo Social · Vespertino advance", meta: "Vespertino · 8 semestres", precio: "Desde $4.890.000/año", precioRaw: "$4.890.000", categoria: "derecho", duracion: "8 semestres", jornada: "Vespertino", arancel: "$4.890.000", campo: "Intervención social, comunidad y políticas públicas.", detalleCampo2: "Municipios, ONG, programas estatales y fundaciones." },
  { num: "09", nombre: "Kinesiología · Laboratorio propio", meta: "Diurno · 10 semestres", precio: "Desde $6.560.000/año", precioRaw: "$6.560.000", categoria: "salud", duracion: "10 semestres", jornada: "Diurno", arancel: "$6.560.000", campo: "Rehabilitación, terapia física y deporte.", detalleCampo2: "Clínicas, centros kinesiológicos, clubes y hospitales." },
  { num: "10", nombre: "Contador Auditor · Vespertino compatible trabajo", meta: "Diurno / Vespertino · 9 semestres", precio: "Desde $4.980.000/año", precioRaw: "$4.980.000", categoria: "ingenieria", duracion: "9 semestres", jornada: "Diurno / Vespertino", arancel: "$4.980.000", campo: "Auditoría, tributaria y control de gestión.", detalleCampo2: "Empresas, estudios contables, auditoras y pymes." },
];

const FILTERS = [
  { key: "todas", label: "Todas" },
  { key: "salud", label: "Salud" },
  { key: "ingenieria", label: "Ingeniería" },
  { key: "derecho", label: "Derecho y humanidades" },
  { key: "diseno", label: "Diseño y arquitectura" },
] as const;

type ArancelRow = { carrera: string; duracion: string; jornada: string; arancel: string; matricula: string; badge?: string; highlight?: boolean };
const ARANCELES: ArancelRow[] = [
  { carrera: "Derecho", duracion: "10 sem", jornada: "Diurno / Vespertino", arancel: "$6.480.000", matricula: "$490.000" },
  { carrera: "Psicología", duracion: "10 sem", jornada: "Diurno / Vespertino", arancel: "$5.880.000", matricula: "$490.000" },
  { carrera: "Ing. Comercial", duracion: "10 sem", jornada: "Diurno / Vespertino", arancel: "$6.120.000", matricula: "$490.000" },
  { carrera: "Ing. Civil Industrial", duracion: "11 sem", jornada: "Diurno", arancel: "$6.750.000", matricula: "$490.000" },
  { carrera: "Enfermería", duracion: "10 sem", jornada: "Diurno", arancel: "$6.900.000", matricula: "$490.000" },
  { carrera: "Arquitectura", duracion: "12 sem", jornada: "Diurno / Vespertino", arancel: "$6.240.000", matricula: "$490.000" },
  { carrera: "Diseño", duracion: "9 sem", jornada: "Diurno", arancel: "$5.420.000", matricula: "$490.000" },
  { carrera: "Trabajo Social Advance", duracion: "8 sem", jornada: "Vespertino", arancel: "$4.890.000", matricula: "$490.000" },
  { carrera: "Contador Auditor", duracion: "9 sem", jornada: "Diurno / Vespertino", arancel: "$4.980.000", matricula: "$490.000", badge: "Vespertino compatible trabajo", highlight: true },
];

const FAQS = [
  { q: "¿Vespertino es el mismo título que diurno?", a: "Sí. Idéntico título y malla. Mismo profesor, misma exigencia, evaluación presencial. La única diferencia es el horario 18:30–22:00 y que vespertino tiene 4 noches. No es online grabado." },
  { q: "¿Puedo convalidar ramos si vengo de otra universidad o IP?", a: "Sí. Sube tu concentración y malla timbrada en el expediente. Respondemos con informe de convalidación en 72h. Máximo 50% de la malla. Sin costo." },
  { q: "¿Cómo pago? ¿CAE y becas?", a: "Matrícula $490.000 + 10 cuotas sin interés. CAE disponible para carreras acreditadas según socioec. Becas internas NOCTUA (Mérito 25%, Vespertino 15%, Advance 20% no acumulables). Te calculamos el neto en la admisión." },
  { q: "¿Dónde es la sede? ¿Hay estacionamiento?", a: "Santiago Centro, 4 cuadras Metro U. de Chile. Sin estacionamiento propio; convenio a 2 cuadras $2.900/día. Bicicletero y custodia sí. Biblioteca open hasta 23:00." },
  { q: "¿Cuándo cierran las postulaciones?", a: "Postulación regular hasta 28 feb 2026. Postulación temprana hasta 15 dic 2025 sin recargo. Clases 09 mar (diurno) y 10 mar (vespertino). Si quedas en lista de espera, avisamos por WhatsApp si se libera cupo." },
];

/* helpers validation */
function cleanRut(rut: string) {
  return rut.replace(/\./g, "").replace(/\s/g, "").toUpperCase();
}
function validarRUT(rut: string): boolean {
  const c = cleanRut(rut);
  if (!c.includes("-")) return false;
  const parts = c.split("-");
  if (parts.length !== 2) return false;
  const body = parts[0];
  const dv = parts[1];
  if (!/^\d+$/.test(body) || body.length < 7 || body.length > 8) return false;
  if (!/^[0-9K]$/.test(dv)) return false;
  let sum = 0;
  let mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  const rest = 11 - (sum % 11);
  let expected = "";
  if (rest === 11) expected = "0";
  else if (rest === 10) expected = "K";
  else expected = String(rest);
  return dv === expected;
}
function validarWhatsapp(v: string): boolean {
  return /^\+56\s?9\s?\d{4}\s?\d{4}$/.test(v.trim());
}
function validarEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hero16Missing, setHero16Missing] = useState(false);
  const [heroM16Missing, setHeroM16Missing] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);
  const [videoExists, setVideoExists] = useState(true);

  const isMobile = useIsMobile(640);

  const hero16 = useBase(HERO_16);
  const hero9x16 = useBase(HERO_9X16);
  const heroVideo = useBase(HERO_VIDEO);

  // tiles / campus
  const tile1 = useBase("media/noctua-tile-01-1x1.png");
  const tile2 = useBase("media/noctua-tile-02-3x4.png");
  const tile3 = useBase("media/noctua-tile-03-1x1.png");
  const interior = useBase("media/noctua-interior-16x9.png");
  const biblioteca = useBase("media/noctua-biblioteca-16x9.png");

  const [tile1Missing, setTile1Missing] = useState(false);
  const [tile2Missing, setTile2Missing] = useState(false);
  const [tile3Missing, setTile3Missing] = useState(false);
  const [interiorMissing, setInteriorMissing] = useState(false);
  const [bibliotecaMissing, setBibliotecaMissing] = useState(false);

  // carreras
  const [activeFilter, setActiveFilter] = useState<string>("todas");
  const [expanded, setExpanded] = useState<string | null>(null);

  // aranceles -> postulación preselect
  const [selectedCarrera, setSelectedCarrera] = useState<string>("");
  const postulacionRef = useRef<HTMLElement>(null);

  // dudas
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // form
  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    whatsapp: "",
    email: "",
    carrera: "",
    jornada: "",
    financia: "",
    titulo: "",
    mensaje: "",
    acepto: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setStickyVisible(window.scrollY > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checks: Array<[string, (v: boolean) => void]> = [
      [hero16, setHero16Missing],
      [hero9x16, setHeroM16Missing],
      [heroVideo, (exists) => { setVideoMissing(!exists); setVideoExists(exists); }],
    ];
    checks.forEach(([url, setter]) => {
      fetch(url, { method: "HEAD" }).then((r) => {
        const ok = r.ok;
        setter(!ok);
        if (!ok) console.warn(`[NOCTUA] media faltante: ${url}`);
      }).catch(() => {
        setter(true);
        console.warn(`[NOCTUA] media faltante: ${url}`);
      });
    });
  }, [hero16, hero9x16, heroVideo]);

  // keep selectedCarrera sync with form.carrera when arancel button clicked
  useEffect(() => {
    if (selectedCarrera) {
      setForm((f) => ({ ...f, carrera: selectedCarrera }));
    }
  }, [selectedCarrera]);

  // scroll to postulacion when selecting carrera from table
  function handleSolicitarDetalle(carreraLabel: string) {
    // map table carrera to select option value
    const map: Record<string, string> = {
      "Derecho": "Derecho",
      "Psicología": "Psicología",
      "Ing. Comercial": "Ing. Comercial",
      "Ing. Civil Industrial": "Ing. Civil Industrial",
      "Enfermería": "Enfermería",
      "Arquitectura": "Arquitectura",
      "Diseño": "Diseño",
      "Trabajo Social Advance": "Trabajo Social Advance",
      "Contador Auditor": "Contador Auditor",
    };
    const val = map[carreraLabel] || carreraLabel;
    setSelectedCarrera(val);
    setTimeout(() => {
      document.getElementById("postulacion")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function handleExpedienteClick(carrera: Carrera) {
    handleSolicitarDetalle(carrera.nombre.includes("Derecho") ? "Derecho" : carrera.nombre.includes("Psicología") ? "Psicología" : carrera.nombre.includes("Ingeniería Comercial") ? "Ing. Comercial" : carrera.nombre.includes("Civil Industrial") ? "Ing. Civil Industrial" : carrera.nombre.includes("Enfermería") ? "Enfermería" : carrera.nombre.includes("Arquitectura") ? "Arquitectura" : carrera.nombre.includes("Diseño") ? "Diseño" : carrera.nombre.includes("Trabajo Social") ? "Trabajo Social Advance" : "Contador Auditor");
  }

  const filteredCarreras = CARRERAS.filter((c) => activeFilter === "todas" || c.categoria === activeFilter);

  // form submit
  function validateForm(): boolean {
    const e: Record<string, string> = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 3) e.nombre = "Ingresa tu nombre completo.";
    if (!validarRUT(form.rut)) e.rut = "RUT inválido. Ej: 12.345.678-5";
    if (!validarWhatsapp(form.whatsapp)) e.whatsapp = "Formato: +56 9 1234 5678";
    if (!validarEmail(form.email)) e.email = "Email inválido.";
    if (!form.carrera) e.carrera = "Selecciona una carrera.";
    if (!form.jornada) e.jornada = "Selecciona jornada.";
    if (!form.acepto) e.acepto = "Debes aceptar el contacto.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) {
      setSuccess(false);
      return;
    }
    setSubmitting(true);
    setSuccess(false);
    // simulate 800ms
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // localStorage
      try {
        localStorage.setItem("postulacion-noctua", JSON.stringify({ ...form, fecha: new Date().toISOString() }));
      } catch {}
      // scroll to success
    }, 800);
  }

  function waLink(): string {
    const carrera = form.carrera || selectedCarrera || "una carrera NOCTUA";
    const nombre = form.nombre ? ` Soy ${form.nombre}.` : "";
    const txt = `Hola NOCTUA, quiero postular a ${carrera}.${nombre} Mi RUT es ${form.rut || ""}.`;
    return `https://wa.me/56984072218?text=${encodeURIComponent(txt)}`;
  }

  const heroMobileSrc = heroM16Missing ? hero16 : hero9x16;
  const activeHeroSrc = isMobile ? heroMobileSrc : hero16;
  const showFalta = isMobile ? (hero16Missing && heroM16Missing) : hero16Missing;

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#expediente" className="header-brand" aria-label="NOCTUA Universidad inicio">
            <span className="brand-logo">NOCTUA</span>
            <span className="brand-sub">UNIVERSIDAD · SANTIAGO — DESDE 2012</span>
          </a>

          <nav className="header-nav" aria-label="Navegación principal">
            <a href="#carreras">Carreras</a>
            <a href="#modalidad">Modalidad</a>
            <a href="#aranceles">Aranceles</a>
            <a href="#admision">Admisión</a>
          </nav>

          <div className="header-actions">
            <a href="tel:+56984072218" className="header-tel tabular">+56 9 8407 2218</a>
            <a href="#postulacion" className="header-cta header-cta-long">Postular ahora</a>
            <a href="#postulacion" className="header-cta header-cta-short">Postular</a>
            <button
              className="header-burger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="burger-lines" aria-hidden="true">
                <span style={menuOpen ? { transform: "rotate(45deg) translate(4px,5px)" } : undefined} />
                <span style={menuOpen ? { opacity: 0 } : undefined} />
                <span style={menuOpen ? { transform: "rotate(-45deg) translate(4px,-5px)" } : undefined} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Menú móvil">
          <a href="#carreras" onClick={() => setMenuOpen(false)}>Carreras</a>
          <a href="#modalidad" onClick={() => setMenuOpen(false)}>Modalidad</a>
          <a href="#aranceles" onClick={() => setMenuOpen(false)}>Aranceles</a>
          <a href="#admision" onClick={() => setMenuOpen(false)}>Admisión</a>
          <div className="mobile-nav-bottom">
            <a href="tel:+56984072218" className="mobile-nav-tel tabular">+56 9 8407 2218</a>
            <a href="#postulacion" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>Postular ahora</a>
          </div>
        </nav>
      )}

      <section id="expediente" className="hero-expediente">
        <div className="hero-grid">
          <div className="hero-dossier">
            <p className="hero-kicker">ADMISIÓN 2026 · EXPEDIENTE ABIERTO</p>
            <h1 className="hero-h1">
              Estudia de noche.
              <br />
              Expediente claro.
            </h1>
            <p className="hero-subhead">
              Universidad NOCTUA — Santiago. Carreras diurnas y vespertinas. Arancel visible antes de postular. Sin letra chica, sin ejecutivo que te persigue.
            </p>

            <ul className="hero-bullets" aria-label="Beneficios clave">
              <li>✓ Arancel desde $4.890.000/año</li>
              <li>✓ Matrícula $490.000</li>
              <li>✓ Respuesta en 48h hábiles</li>
            </ul>

            <div className="hero-ctas">
              <a href="#postulacion" className="btn-primary">Postular ahora</a>
              <a href="#aranceles" className="btn-ghost">Solicitar aranceles</a>
            </div>

            <p className="hero-micro">Valores referenciales 2026. Se confirma al matricular. Acreditación CNA 4 años.</p>

            <div className="hero-banda" aria-label="Validación honesta">
              <span className="hero-banda-item"><span className="hero-banda-dot" aria-hidden="true" />4 años acreditada</span>
              <span className="hero-banda-item"><span className="hero-banda-dot" aria-hidden="true" />11 carreras</span>
              <span className="hero-banda-item"><span className="hero-banda-dot" aria-hidden="true" />Vespertino 18:30—22:00</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-media-wrap">
              {videoExists && !videoMissing && !showFalta ? (
                <video
                  className="hero-media-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={activeHeroSrc}
                  onError={() => {
                    setVideoMissing(true);
                    setVideoExists(false);
                    console.warn(`[NOCTUA] media faltante: ${HERO_VIDEO}`);
                  }}
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
              ) : null}

              {showFalta ? (
                <div className="media-falta" data-falta={isMobile && heroM16Missing ? "noctua-hero-9x16.png" : "noctua-hero-16x9.png"}>
                  media faltante: {isMobile && heroM16Missing ? "noctua-hero-9x16.png" : "noctua-hero-16x9.png"} — agregar archivo a public/media/
                </div>
              ) : (
                <>
                  <img
                    src={activeHeroSrc}
                    alt="Expediente NOCTUA con sello seco en relieve sobre mesa de roble, biblioteca en penumbra atrás"
                    className="hero-media-img"
                    style={videoExists && !videoMissing ? { opacity: 0, pointerEvents: "none" } : undefined}
                    onError={(e) => {
                      const target = e.currentTarget;
                      const isM = target.src.includes("9x16");
                      if (isM) setHeroM16Missing(true);
                      else setHero16Missing(true);
                      console.warn(`[NOCTUA] media faltante: ${target.src}`);
                    }}
                    loading="eager"
                    decoding="async"
                  />
                </>
              )}
            </div>
            <span className="hero-caption">Expediente NOCTUA · sello seco relieve · biblioteca 22:14 · Santiago</span>
          </div>
        </div>
      </section>

      {/* #carreras */}
      <section id="carreras" className="section section-carreras">
        <div className="container">
          <div className="section-header">
            <p className="kicker">CARRERAS 2026 — 11 PROGRAMAS</p>
            <h2 className="h2">Elige por expediente, no por folleto.</h2>
            <p className="bajada">Cada carrera con duración, jornada y arancel a la vista. Toca para ver malla y campo.</p>
          </div>

          <div className="filters" role="tablist" aria-label="Filtrar carreras">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={activeFilter === f.key}
                className={`filter-pill ${activeFilter === f.key ? "is-active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="dossier-list" aria-label="Listado de carreras">
            {filteredCarreras.map((c, idx) => {
              const isOpen = expanded === c.num;
              return (
                <div
                  key={c.num}
                  className={`dossier-row ${isOpen ? "is-open" : ""}`}
                  style={{ animationDelay: `${idx * 40}ms` } as React.CSSProperties}
                  onClick={() => setExpanded(isOpen ? null : c.num)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded(isOpen ? null : c.num); } }}
                  aria-expanded={isOpen}
                >
                  <div className="dossier-grid">
                    <span className="dossier-num tabular">{c.num}</span>
                    <span className="dossier-nombre">{c.nombre}</span>
                    <span className="dossier-meta">{c.meta}</span>
                    <span className="dossier-precio tabular">{c.precio} <span className={`dossier-arrow ${isOpen ? "is-rotated" : ""}`} aria-hidden="true">→</span></span>
                  </div>
                  <div className={`dossier-expand ${isOpen ? "is-visible" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className="dossier-expand-inner">
                      <div className="expand-cols">
                        <div><span className="expand-label">Duración</span><span className="expand-value">{c.duracion}</span></div>
                        <div><span className="expand-label">Jornada</span><span className="expand-value">{c.jornada}</span></div>
                        <div><span className="expand-label">Sede</span><span className="expand-value">Santiago Centro</span></div>
                        <div><span className="expand-label">Arancel anual</span><span className="expand-value tabular accent">{c.arancel}</span></div>
                        <div><span className="expand-label">Matrícula</span><span className="expand-value tabular">$490.000</span></div>
                      </div>
                      <p className="expand-campo">{c.campo}<br />{c.detalleCampo2}</p>
                      <a href="#postulacion" className="expand-cta" onClick={() => handleExpedienteClick(c)}>Ver expediente →</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="prueba-honesta tabular">11 carreras · 4 años acreditada CNA · 3.200 estudiantes · 87% retención primer año (n=2.845, 2024)</p>
        </div>
      </section>

      {/* #modalidad */}
      <section id="modalidad" className="section section-modalidad">
        <div className="container">
          <div className="section-header">
            <p className="kicker kicker-accent2">MODALIDAD — ELIGE TU JORNADA</p>
            <h2 className="h2">Diurno, vespertino o semipresencial. El mismo expediente.</h2>
            <p className="bajada">No es 'flexible' genérico: es horario publicado con sala y profesor a la vista.</p>
          </div>

          <div className="modalidad-grid">
            {/* Diurno */}
            <article className="modalidad-panel">
              <div className="modalidad-media" style={{ aspectRatio: "1 / 1" }}>
                {tile1Missing ? (
                  <div className="media-falta" data-falta="noctua-tile-01-1x1.png">media faltante: noctua-tile-01-1x1.png — agregar archivo a public/media/</div>
                ) : (
                  <img src={tile1} alt="Biblioteca luminosa vacía" loading="lazy" onError={() => { setTile1Missing(true); console.warn("[NOCTUA] media faltante: noctua-tile-01-1x1.png"); }} />
                )}
              </div>
              <div className="modalidad-body">
                <h3 className="modalidad-title">Diurno — 08:30–13:30</h3>
                <p className="modalidad-text">Clases presenciales lunes a viernes. Talleres y laboratorio en sede Santiago Centro.</p>
                <p className="modalidad-meta tabular">Lun–Vie · Sede Santiago Centro · 5 mañanas</p>
                <p className="modalidad-micro">Desde $5.420.000/año según carrera</p>
              </div>
            </article>

            {/* Vespertino */}
            <article className="modalidad-panel">
              <div className="modalidad-media" style={{ aspectRatio: "3 / 4" }}>
                {tile2Missing ? (
                  <div className="media-falta" data-falta="noctua-tile-02-3x4.png">media faltante: noctua-tile-02-3x4.png — agregar archivo a public/media/</div>
                ) : (
                  <img src={tile2} alt="Aula taller nocturno iluminada" loading="lazy" onError={() => { setTile2Missing(true); console.warn("[NOCTUA] media faltante: noctua-tile-02-3x4.png"); }} />
                )}
              </div>
              <div className="modalidad-body">
                <h3 className="modalidad-title">Vespertino — 18:30–22:00</h3>
                <p className="modalidad-text">El mismo profesor diurno, horario compatible con trabajo. 4 noches por semana. No es online: es sala real de noche.</p>
                <p className="modalidad-meta tabular">Lun–Jue 18:30–22:00 · Sede Santiago Centro · 4 noches</p>
                <p className="modalidad-micro">Mismo arancel diurno · Sin recargo vespertino</p>
              </div>
            </article>

            {/* Semipresencial */}
            <article className="modalidad-panel">
              <div className="modalidad-media" style={{ aspectRatio: "1 / 1" }}>
                {tile3Missing ? (
                  <div className="media-falta" data-falta="noctua-tile-03-1x1.png">media faltante: noctua-tile-03-1x1.png — agregar archivo a public/media/</div>
                ) : (
                  <img src={tile3} alt="Macro sello seco NOCTUA relieve" loading="lazy" onError={() => { setTile3Missing(true); console.warn("[NOCTUA] media faltante: noctua-tile-03-1x1.png"); }} />
                )}
              </div>
              <div className="modalidad-body">
                <h3 className="modalidad-title">Semipresencial — 2 presenciales + 1 online</h3>
                <p className="modalidad-text">Para avance y continuidad: 2 noches presenciales + 1 sesión sincrónica. Evaluación siempre presencial.</p>
                <p className="modalidad-meta tabular">Mar–Mié presencial · Jue online sincrónico · Evaluación presencial</p>
                <p className="modalidad-micro">Solo carreras advance</p>
              </div>
            </article>
          </div>

          <p className="modalidad-nota">Vespertino no es grabado. Si dice 18:30, empieza 18:30. Asistencia 75% para examen.</p>
        </div>
      </section>

      {/* #campus */}
      <section id="campus" className="section section-campus">
        <div className="container">
          <div className="campus-grid">
            <div className="campus-text">
              <p className="kicker kicker-accent2">CAMPUS — SANTIAGO CENTRO · 22:14</p>
              <h2 className="h2">Biblioteca open hasta las 23:00. Patio sin ruido.</h2>
              <p className="bajada">No es render: es sede real a 4 cuadras del Metro.</p>
              <div className="campus-metrics">
                <p>Sede Santiago Centro · Metro U. de Chile 4 cuadras · Biblioteca 48 puestos · 12 salas · 3 laboratorios</p>
                <p>Horario: Lun–Vie 07:30–23:00 · Sáb 09:00–18:00 · Biblioteca 08:00–23:00</p>
                <p>Acceso: bicicletero y custodia, sin estacionamiento propio (convenio $2.900/día a 2 cuadras)</p>
              </div>
              <p className="campus-prueba tabular">3.200 estudiantes · 11 carreras · 87% retención primer año · 4 años acreditada CNA (2022–2026)</p>
              <p className="campus-micro">Fotos sede real, sin stock.</p>
            </div>
            <div className="campus-visual">
              <div className="campus-media-wrap">
                {interiorMissing ? (
                  <div className="media-falta" data-falta="noctua-interior-16x9.png">media faltante: noctua-interior-16x9.png — agregar archivo a public/media/</div>
                ) : (
                  <>
                    <img src={interior} alt="Patio interior noche hormigón y madera iluminado rasante" loading="lazy" onError={() => { setInteriorMissing(true); console.warn("[NOCTUA] media faltante: noctua-interior-16x9.png"); }} />
                    <div className="campus-card-overlay">
                      <span className="campus-overlay-title">Patio interior — luz norte noche · Sede Santiago Centro</span>
                      <span className="campus-overlay-micro">Foto sede real, sin personas.</span>
                    </div>
                  </>
                )}
                {/* secundaria biblioteca as small strip if exists */}
                {!bibliotecaMissing && !interiorMissing && (
                  <div className="campus-secondary" aria-hidden={!bibliotecaMissing ? "false" : "true"}>
                    <img src={biblioteca} alt="Biblioteca noche mesas iluminadas" loading="lazy" onError={() => { setBibliotecaMissing(true); console.warn("[NOCTUA] media faltante: noctua-biblioteca-16x9.png"); }} style={bibliotecaMissing ? { display: "none" } : undefined} />
                  </div>
                )}
                {bibliotecaMissing && interiorMissing && (
                  <div className="media-falta" data-falta="noctua-biblioteca-16x9.png" style={{ position: "relative", height: 120 }}>media faltante: noctua-biblioteca-16x9.png</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* #admision */}
      <section id="admision" className="section section-admision">
        <div className="container">
          <div className="section-header">
            <p className="kicker kicker-accent2">ADMISIÓN — EXPEDIENTE EN 4 PASOS</p>
            <h2 className="h2">Postula con lo que tienes. Respuesta en 48h.</h2>
            <p className="bajada">Sin ensayo de 500 palabras ni 'carta de motivación soñada'.</p>
          </div>
          <div className="admision-grid">
            <div className="admision-step">
              <span className="admision-num">01</span>
              <h3 className="admision-title">Expediente</h3>
              <p className="admision-text">Sube tu licencia de enseñanza media + concentración de notas + C.I. (foto). Si eres advance, añade título técnico y CV breve. 10 minutos.</p>
            </div>
            <div className="admision-step">
              <span className="admision-num">02</span>
              <h3 className="admision-title">Entrevista</h3>
              <p className="admision-text">15 minutos online o presencial con coordinador de carrera. No es prueba: es para confirmar jornada y carga. Agendas al postular.</p>
            </div>
            <div className="admision-step">
              <span className="admision-num">03</span>
              <h3 className="admision-title">Respuesta</h3>
              <p className="admision-text">48 horas hábiles por email y WhatsApp. Admitido, lista de espera o derivación a advance. Con arancel y matrícula cerrados.</p>
            </div>
            <div className="admision-step">
              <span className="admision-num">04</span>
              <h3 className="admision-title">Matrícula</h3>
              <p className="admision-text">Matrícula $490.000 online. Firma electrónica y carga de ramos. Clases marzo 2026. Vespertino misma matrícula.</p>
            </div>
          </div>
          <p className="admision-fechas tabular">Postulación temprana: hasta 15 dic 2025 — sin recargo · Postulación regular: 16 dic 2025 – 28 feb 2026 — $490.000 · Inicio: 09 mar 2026 diurno / 10 mar vespertino</p>
        </div>
      </section>

      {/* #aranceles */}
      <section id="aranceles" className="section section-aranceles">
        <div className="container">
          <div className="section-header">
            <p className="kicker">ARANCELES 2026 — VALORES REFERENCIALES</p>
            <h2 className="h2">Arancel a la vista. Antes de postular.</h2>
            <p className="bajada">Mismo valor diurno y vespertino. Matrícula única.</p>
            <p className="aranceles-nota-top">Valores referenciales 2026; se confirman al matricular. Acreditación CNA 4 años. No incluye titulación.</p>
          </div>

          <div className="tabla-wrap">
            <table className="tabla" aria-label="Tabla arancelaria 2026">
              <thead>
                <tr>
                  <th>Carrera</th>
                  <th>Duración</th>
                  <th>Jornada</th>
                  <th>Arancel anual (CLP)</th>
                  <th>Matrícula</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {ARANCELES.map((r) => (
                  <tr key={r.carrera} className={r.highlight ? "is-highlight" : ""}>
                    <td data-label="Carrera"><span className="tabla-carrera">{r.carrera}{r.badge && <span className="tabla-badge">{r.badge}</span>}</span></td>
                    <td data-label="Duración" className="tabular">{r.duracion}</td>
                    <td data-label="Jornada" className="tabular">{r.jornada}</td>
                    <td data-label="Arancel anual" className="tabular tabla-arancel">{r.arancel}</td>
                    <td data-label="Matrícula" className="tabular">{r.matricula}</td>
                    <td data-label="Acción"><button className="btn-ghost tabla-btn" onClick={() => handleSolicitarDetalle(r.carrera)}>Solicitar detalle</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* fichas mobile */}
            <div className="tabla-fichas">
              {ARANCELES.map((r) => (
                <div key={r.carrera + "-fic"} className={`ficha ${r.highlight ? "is-highlight" : ""}`}>
                  <div className="ficha-head">
                    <span className="ficha-carrera">{r.carrera}</span>
                    {r.badge && <span className="tabla-badge">{r.badge}</span>}
                  </div>
                  <div className="ficha-datos">
                    <span><em>Duración</em> {r.duracion}</span>
                    <span><em>Jornada</em> {r.jornada}</span>
                  </div>
                  <span className="ficha-arancel tabular">{r.arancel}</span>
                  <span className="ficha-matricula tabular">Matrícula {r.matricula}</span>
                  <button className="btn-ghost tabla-btn ficha-btn" onClick={() => handleSolicitarDetalle(r.carrera)}>Solicitar detalle</button>
                </div>
              ))}
            </div>
          </div>

          <p className="tabla-legal">Arancel anual en 10 cuotas sin interés con pagaré. Descuento 7% pago contado anual hasta 28 feb 2026. CAE y becas Mineduc aplicables según carrera y socioec. Vigencia 2026.</p>

          <div className="card-becas">
            <p className="card-becas-title">Becas internas NOCTUA</p>
            <p className="card-becas-text">Beca Mérito 25% (NEM 6.0+ / PAES 650+) · Beca Vespertino 15% (trabajadores) · Beca Advance 20% (titulados CFT/IP). No acumulables. Cupos limitados.</p>
            <p className="card-becas-micro">Postula a becas en el mismo expediente. Respuesta junto a admisión.</p>
          </div>

          <div className="aranceles-ctas">
            <a href="#postulacion" className="btn-primary">Postular ahora</a>
            <a href="https://wa.me/56984072218?text=Hola%20NOCTUA%2C%20quiero%20solicitar%20aranceles%202026" target="_blank" rel="noopener noreferrer" className="btn-ghost btn-ghost-accent2">Solicitar aranceles por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* #dudas */}
      <section id="dudas" className="section section-dudas">
        <div className="container">
          <div className="dudas-list" role="list">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? "is-open" : ""}`} role="listitem">
                  <button className="faq-trigger" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : i)}>
                    <span className="faq-q">{f.q}</span>
                    <span className={`faq-icon ${isOpen ? "is-rotated" : ""}`} aria-hidden="true">+</span>
                  </button>
                  <div className={`faq-content ${isOpen ? "is-visible" : ""}`}>
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* #postulacion */}
      <section id="postulacion" className="section section-postulacion" ref={postulacionRef}>
        <div className="container">
          <div className="postulacion-grid">
            <div className="postulacion-left">
              <p className="kicker">POSTULACIÓN — EXPEDIENTE DIGITAL</p>
              <h2 className="h2">Abre tu expediente. Te respondemos en 48h.</h2>
              <p className="bajada">15 minutos. Sin ejecutivo que te llame 8 veces. Responde el coordinador de carrera.</p>
              <a href="tel:+56984072218" className="postulacion-tel tabular">+56 9 8407 2218</a>
              <p className="postulacion-mail">admision@noctua.cl</p>
              <p className="postulacion-dir">Sede Santiago Centro · Metro U. de Chile · Lun–Vie 09:00–19:00 · Sáb 09:00–14:00</p>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="f-nombre">Nombre completo*</label>
                  <input id="f-nombre" type="text" placeholder="Ej: Francisca Rojas" autoComplete="name" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} aria-invalid={!!errors.nombre} />
                  {errors.nombre && <span className="form-error">{errors.nombre}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-rut">RUT*</label>
                  <input id="f-rut" type="text" placeholder="12.345.678-5" value={form.rut} onChange={(e) => setForm({ ...form, rut: e.target.value })} aria-invalid={!!errors.rut} />
                  {errors.rut && <span className="form-error">{errors.rut}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-wa">WhatsApp*</label>
                  <input id="f-wa" type="tel" placeholder="+56 9 1234 5678" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} aria-invalid={!!errors.whatsapp} />
                  {errors.whatsapp && <span className="form-error">{errors.whatsapp}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-email">Email*</label>
                  <input id="f-email" type="email" placeholder="francisca@email.cl" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!errors.email} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-carrera">Carrera de interés*</label>
                  <select id="f-carrera" value={form.carrera} onChange={(e) => setForm({ ...form, carrera: e.target.value })} aria-invalid={!!errors.carrera}>
                    <option value="">Selecciona una carrera</option>
                    <option>Derecho</option>
                    <option>Psicología</option>
                    <option>Ing. Comercial</option>
                    <option>Ing. Civil Industrial</option>
                    <option>Enfermería</option>
                    <option>Arquitectura</option>
                    <option>Diseño</option>
                    <option>Trabajo Social Advance</option>
                    <option>Contador Auditor</option>
                  </select>
                  {errors.carrera && <span className="form-error">{errors.carrera}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-jornada">Jornada*</label>
                  <select id="f-jornada" value={form.jornada} onChange={(e) => setForm({ ...form, jornada: e.target.value })} aria-invalid={!!errors.jornada}>
                    <option value="">Selecciona jornada</option>
                    <option>Diurno</option>
                    <option>Vespertino</option>
                    <option>Semipresencial (solo advance)</option>
                    <option>Aún no lo decido</option>
                  </select>
                  {errors.jornada && <span className="form-error">{errors.jornada}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-financia">¿Cómo financias?</label>
                  <select id="f-financia" value={form.financia} onChange={(e) => setForm({ ...form, financia: e.target.value })}>
                    <option value="">Selecciona</option>
                    <option>Pago contado</option>
                    <option>10 cuotas</option>
                    <option>CAE</option>
                    <option>Beca interna</option>
                    <option>Aún no sé</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="f-titulo">¿Tienes título previo?</label>
                  <select id="f-titulo" value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })}>
                    <option value="">Selecciona</option>
                    <option>No</option>
                    <option>Sí — CFT</option>
                    <option>Sí — IP</option>
                    <option>Sí — Universidad</option>
                  </select>
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="f-mensaje">Mensaje</label>
                  <textarea id="f-mensaje" rows={4} placeholder="Ej: Vengo de IP con título técnico en administración, quiero Contador Auditor vespertino y convalidar ramos." value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
                </div>

                <div className="form-group form-group-full">
                  <label className="checkbox-label">
                    <input type="checkbox" checked={form.acepto} onChange={(e) => setForm({ ...form, acepto: e.target.checked })} />
                    <span>Acepto que NOCTUA me contacte por WhatsApp y email para esta postulación. No spam. Datos según Ley 19.628.</span>
                  </label>
                  {errors.acepto && <span className="form-error">{errors.acepto}</span>}
                </div>

                {!success ? (
                  <>
                    <button type="submit" className="btn-primary form-submit" disabled={submitting}>
                      {submitting ? "Enviando expediente…" : "Postular ahora — enviar expediente"}
                    </button>
                    {submitting && <span className="form-spinner" aria-hidden="true" />}
                    <p className="form-micro">Respuesta en 48h hábiles. Fuera de horario, al día hábil siguiente.</p>
                    {errors.rut && errors.whatsapp && <p className="form-error" style={{ marginTop: 8 }}>Revisa tu RUT y WhatsApp.</p>}
                    {(!errors.rut || !errors.whatsapp) && (errors.rut || errors.whatsapp) && <p className="form-error" style={{ marginTop: 8 }}>Revisa tu RUT y WhatsApp.</p>}
                  </>
                ) : (
                  <div className="form-success">
                    <p className="form-success-title">Expediente enviado. Te contacta el coordinador en 48h hábiles. Te dejamos WhatsApp directo.</p>
                    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">Abrir WhatsApp +56 9 8407 2218</a>
                    <a href={`mailto:admision@noctua.cl?subject=Postulaci%C3%B3n%20${encodeURIComponent(form.carrera)}&body=${encodeURIComponent(`Hola, soy ${form.nombre} RUT ${form.rut} interesado en ${form.carrera} jornada ${form.jornada}. Mensaje: ${form.mensaje}`)}`} className="form-mailto">o enviar por email</a>
                  </div>
                )}

                <a href="tel:+56984072218" className="form-alt-link">¿Prefieres hablar? +56 9 8407 2218</a>
              </form>
            </div>

            <div className="postulacion-right">
              <div className="card-expediente">
                <h3 className="card-title">Qué pasa después</h3>
                <ol className="card-steps">
                  <li><span>01</span> Revisamos tu expediente y jornada</li>
                  <li><span>02</span> Entrevista breve 15 min (online o presencial)</li>
                  <li><span>03</span> Respuesta con arancel y matrícula cerrados</li>
                </ol>
                <div className="card-sep" />
                <p className="card-micro">Horario coordinación: Lun–Vie 09:00–19:00. Fuera de horario, al día hábil siguiente.</p>
              </div>
              <div className="card-confianza">
                <p>Sin título previo puedes postular igual. Convalidación en 72h sin costo.</p>
              </div>
              <p className="card-prueba tabular">3.200 estudiantes · 11 carreras · 87% retención · 4 años acreditada</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <p className="footer-brand">NOCTUA — Universidad · Sede Santiago Centro, Metro U. de Chile.</p>
            <p className="footer-contact">+56 9 8407 2218 · admision@noctua.cl · Lun–Vie 09:00–19:00 · Sáb 09:00–14:00</p>
            <nav className="footer-links" aria-label="Links footer">
              <a href="#carreras">Carreras</a> | <a href="#modalidad">Modalidad</a> | <a href="#aranceles">Aranceles</a> | <a href="#admision">Admisión</a> | <a href="#postulacion">Postulación</a>
            </nav>
            <p className="footer-legal">Valores referenciales 2026 neto, vigencia hasta 28 feb 2026. Fotos sede real, sin personas.</p>
            <p className="footer-copy">© 2026 NOCTUA Universidad SpA · RUT 76.xxx.xxx-x</p>
          </div>
        </div>
      </footer>

      {/* sticky móvil */}
      <div className={`sticky-bar ${stickyVisible ? "is-visible" : ""}`} aria-hidden={!stickyVisible}>
        <a href="tel:+56984072218" className="btn-ghost sticky-ghost">Llamar</a>
        <a href="#postulacion" className="btn-primary sticky-primary">Postular ahora</a>
      </div>
    </>
  );
}
