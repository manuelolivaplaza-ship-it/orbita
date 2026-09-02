import { useEffect, useState } from "react";

const NAV = [
  { label: "Especialidades", href: "#especialidades-agenda" },
  { label: "Cómo te atendemos", href: "#ruta-atencion" },
  { label: "Convenios", href: "#convenios-prevision" },
  { label: "Exámenes", href: "#examenes-en-sede" },
  { label: "Sucursales", href: "#sucursales-horario" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-left">
            <a href="#inicio" className="header-logo">ETER</a>
            <span className="header-desc">Centro Médico · Providencia / Las Condes</span>
          </div>
          <nav className="header-nav" aria-label="Principal">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="header-right">
            <a href="tel:+56227584100" className="header-phone" aria-label="Teléfono 56 2 2758 4100">
              <span className="dot" aria-hidden="true" />
              <span>+56 2 2758 4100</span>
            </a>
            <a href="#reserva-hora" className="btn-cta">Pedir hora</a>
            <button
              className="hamburger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Móvil">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <a href="tel:+56227584100" className="drawer-phone">
          <span className="dot" aria-hidden="true" />
          +56 2 2758 4100
        </a>
        <a href="#reserva-hora" className="btn-cta" style={{ marginTop: 16 }} onClick={() => setOpen(false)}>Pedir hora</a>
      </div>
    </>
  );
}

function HeroMedia() {
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const [hasImg16, setHasImg16] = useState<boolean | null>(null);
  const [hasImg9, setHasImg9] = useState<boolean | null>(null);

  useEffect(() => {
    const check = async (url: string) => {
      try {
        const r = await fetch(url, { method: "HEAD" });
        return r.ok;
      } catch { return false; }
    };
    check("media/eter-hero-16x9.png").then(setHasImg16);
    check("media/eter-hero-9x16.png").then(setHasImg9);
    check("media/eter-hero-loop.mp4").then(setHasVideo);

    const timer = setTimeout(async () => {
      const missing: string[] = [];
      const ok16 = await check("media/eter-hero-16x9.png");
      const ok9 = await check("media/eter-hero-9x16.png");
      const okVid = await check("media/eter-hero-loop.mp4");
      if (!ok16) missing.push("eter-hero-16x9.png");
      if (!ok9) missing.push("eter-hero-9x16.png");
      if (missing.length) console.warn("[ETER] Media faltante:", missing.join(", "));
      else console.log("[ETER] Media hero OK");
      if (!okVid) console.log("[ETER] eter-hero-loop.mp4 no disponible — se usa imagen");
      else console.log("[ETER] eter-hero-loop.mp4 disponible — usando video");
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const showVideo = hasVideo === true;
  const showImg16 = hasImg16 !== false;
  const showImg9 = hasImg9 !== false;

  return (
    <>
      <div className="hero-media-desktop">
        {hasImg16 === false && !showVideo ? (
          <div className="media-falta" data-falta="eter-hero-16x9.png">Falta eter-hero-16x9.png</div>
        ) : showVideo ? (
          <div className="hero-img-wrap">
            <video autoPlay muted loop playsInline poster="media/eter-hero-16x9.png" style={{ objectFit: "cover" }}>
              <source src="media/eter-hero-loop.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="hero-img-wrap">
            {showImg16 ? (
              <img
                src="media/eter-hero-16x9.png"
                alt="Recepción vacía ETER a luz norte con atril y ficha"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const p = (e.currentTarget as HTMLImageElement).parentElement;
                  if (p && !p.querySelector(".media-falta")) {
                    const d = document.createElement("div");
                    d.className = "media-falta";
                    d.setAttribute("data-falta", "eter-hero-16x9.png");
                    d.textContent = "Falta eter-hero-16x9.png";
                    p.appendChild(d);
                  }
                  setHasImg16(false);
                }}
              />
            ) : null}
          </div>
        )}
      </div>
      <div className="hero-media-mobile">
        {hasImg9 === false ? (
          <div className="media-falta mobile" data-falta="eter-hero-9x16.png">Falta eter-hero-9x16.png</div>
        ) : (
          <div className="hero-img-wrap">
            {showImg9 ? (
              <img
                src="media/eter-hero-9x16.png"
                alt="Pasillo ETER vertical con atril y ficha"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const p = (e.currentTarget as HTMLImageElement).parentElement;
                  if (p && !p.querySelector(".media-falta")) {
                    const d = document.createElement("div");
                    d.className = "media-falta mobile";
                    d.setAttribute("data-falta", "eter-hero-9x16.png");
                    d.textContent = "Falta eter-hero-9x16.png";
                    p.appendChild(d);
                  }
                  setHasImg9(false);
                }}
              />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="kicker">AGENDA ABIERTA · ESTA SEMANA</p>
            <h1>Tu hora, clara. Tu atención, a tiempo. ETER.</h1>
            <p className="hero-sub">
              Medicina general y especialidades sin vueltas. Ves la especialidad, ves el valor desde y pides hora en dos clics. Boleta reembolsable y convenios claros antes de agendar.
            </p>
            <ul className="hero-bullets" aria-label="Protocolo">
              <li>Respuesta en el día · Confirmación por WhatsApp</li>
              <li>Mismo box, mismo trato — seguimiento a tu ritmo</li>
              <li>Precios desde visibles, sin letra chica</li>
            </ul>
            <div className="hero-ctas">
              <a href="#reserva-hora" className="btn-primary">Pedir hora — WhatsApp</a>
              <a href="#especialidades-agenda" className="btn-secondary">Ver valores y convenios</a>
            </div>
            <p className="banda-honesta">Fonasa · Isapres con bono y reembolso · Particular con boleta · Valores referenciales; se confirma tras admisión.</p>
          </div>
          <div className="hero-media">
            <HeroMedia />
          </div>
        </div>
      </div>
      <div className="proof-band" aria-label="Prueba social">
        <div className="container">
          <div className="proof-grid">
            <div className="proof-item">+12 años en Providencia</div>
            <div className="proof-item">14 especialidades</div>
            <div className="proof-item">Horario Lun–Vie 08:00–20:00 Sáb 09:00–14:00</div>
            <div className="proof-item">Primeras horas 08:10</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Helper: Media with fallback ----------
function MediaImg({ src, alt, ratio, className, dataFalta }: { src: string; alt: string; ratio: string; className?: string; dataFalta: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="media-falta" data-falta={dataFalta} style={{ aspectRatio: ratio } as React.CSSProperties}>
        Falta {dataFalta}
      </div>
    );
  }
  return (
    <div className={className} style={{ border: "1px solid var(--linea)", overflow: "hidden", background: "var(--bg-soft)", aspectRatio: ratio } as React.CSSProperties}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

// ---------- #especialidades-agenda ----------
type EspRow = {
  nombre: string;
  detalle: string;
  duracion: string;
  precio: string;
  cats: string[];
};

const ESPECIALIDADES: EspRow[] = [
  { nombre: "Medicina General", detalle: "Control adulto, derivación y órdenes", duracion: "20 min", precio: "$29.900", cats: ["Adulto"] },
  { nombre: "Pediatría", detalle: "Control sano y morbilidad, con receta y carnet", duracion: "25 min", precio: "$34.900", cats: ["Infantil"] },
  { nombre: "Ginecología", detalle: "Control, PAP, ecografía derivada si aplica", duracion: "25 min", precio: "$39.900", cats: ["Adulto", "Procedimiento en box"] },
  { nombre: "Traumatología", detalle: "Evaluación osteomuscular, órtesis y kine derivada", duracion: "20 min", precio: "$39.900", cats: ["Adulto"] },
  { nombre: "Otorrino", detalle: "Lavado, audiometría derivada, nasofibroscopía según box", duracion: "20 min", precio: "$39.900", cats: ["Adulto", "Procedimiento en box"] },
  { nombre: "Dermatología", detalle: "Evaluación lesión/manchas, receta y biopsia derivada", duracion: "20 min", precio: "$44.900", cats: ["Adulto", "Procedimiento en box"] },
  { nombre: "Cardiología", detalle: "ECG en sede, control HTA y prevención", duracion: "30 min", precio: "$49.900", cats: ["Adulto", "Procedimiento en box"] },
  { nombre: "Psicología adulto", detalle: "Sesión 45 min, presencial y teleconsulta", duracion: "45 min", precio: "$32.000", cats: ["Adulto"] },
];

const CHIPS = ["Todas", "Adulto", "Infantil", "Procedimiento en box"] as const;

function EspecialidadesAgenda() {
  const [filtro, setFiltro] = useState<(typeof CHIPS)[number]>("Todas");
  const filtered = filtro === "Todas" ? ESPECIALIDADES : ESPECIALIDADES.filter((r) => r.cats.includes(filtro));

  const handlePedir = (nombre: string) => {
    try {
      localStorage.setItem("eter-reserva-especialidad", nombre);
      localStorage.setItem("eter-especialidad", nombre);
    } catch {}
    // also set hash param for fallback
    window.location.hash = `reserva-hora?especialidad=${encodeURIComponent(nombre)}`;
  };

  return (
    <section id="especialidades-agenda" className="section">
      <div className="container">
        <h2 className="section-title">Especialidades y agenda</h2>
        <p className="section-bajada">Elige la prestación. Ves duración, qué incluye y desde cuánto, y pides hora sin pasar por 3 páginas.</p>

        <div className="chips" role="tablist" aria-label="Filtrar especialidades">
          {CHIPS.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filtro === c}
              className={`chip ${filtro === c ? "chip-active" : ""}`}
              onClick={() => setFiltro(c)}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>

        <div className="carta-lista" role="list">
          {filtered.map((row) => (
            <div key={row.nombre} className="carta-fila" role="listitem">
              <div className="fila-main">
                <div className="fila-nombre">{row.nombre}</div>
                <div className="fila-detalle">{row.detalle}</div>
                <div className="fila-micro">Incluye box + orden si aplica · No incluye examen fuera de sede · Reagendamiento sin costo con 12h de anticipación.</div>
              </div>
              <div className="fila-duracion">{row.duracion}</div>
              <div className="fila-precio">
                <span className="desde">desde</span>
                <span className="precio">{row.precio}</span>
              </div>
              <div className="fila-cta">
                <a href="#reserva-hora" className="btn-fila" onClick={() => handlePedir(row.nombre)}>Pedir hora</a>
              </div>
            </div>
          ))}
        </div>

        <p className="nota-honesta">Valores referenciales; el valor final se confirma en admisión según previsión y prestaciones asociadas. Si el plan cambia, te avisamos antes de partir.</p>
      </div>
    </section>
  );
}

// ---------- #ruta-atencion ----------
function RutaAtencion() {
  return (
    <section id="ruta-atencion" className="section bg-soft">
      <div className="container">
        <h2 className="section-title">Cómo te atendemos</h2>
        <div className="grid12" style={{ alignItems: "start" }}>
          <div style={{ gridColumn: "span 8" }}>
            <div className="ruta-grid">
              <div className="ruta-paso">
                <div className="ruta-filete" />
                <div className="ruta-num">1</div>
                <h3 className="ruta-titulo">Pides hora</h3>
                <p className="ruta-cuerpo">Eliges especialidad, ves el valor desde y confirmas por WhatsApp con hora exacta. Sin call center.</p>
              </div>
              <div className="ruta-paso">
                <div className="ruta-filete" />
                <div className="ruta-num">2</div>
                <h3 className="ruta-titulo">Te atiende tu profesional</h3>
                <p className="ruta-cuerpo">Llegas 10 min antes, admisión con tu previsión y te atiendes en box. Órdenes y receta claras, impresas y al correo.</p>
              </div>
              <div className="ruta-paso">
                <div className="ruta-filete" />
                <div className="ruta-num">3</div>
                <h3 className="ruta-titulo">Sigues tu plan</h3>
                <p className="ruta-cuerpo">Si necesitas exámenes o control, los agendamos ahí mismo. Reagendas sin costo avisando con 12h.</p>
              </div>
            </div>
          </div>
          <div className="ruta-media-col">
            <MediaImg
              src="media/eter-ruta-4x3.png"
              alt="Pasillo de boxes vacío con puertas entreabiertas y luz contenida"
              ratio="4/3"
              dataFalta="eter-ruta-4x3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- #convenios-prevision ----------
function ConveniosPrevision() {
  return (
    <section id="convenios-prevision" className="section">
      <div className="container">
        <h2 className="section-title">Convenios y forma de pago</h2>
        <p className="section-bajada">Antes de pedir hora, sabes cómo pagas. Sin sorpresas en caja.</p>

        <div className="grid12" style={{ alignItems: "start" }}>
          <div className="convenios-main">
            {/* Desktop table */}
            <div className="tabla-convenios" role="table" aria-label="Convenios y forma de pago">
              <div className="tabla-header" role="row">
                <div role="columnheader">Fonasa</div>
                <div role="columnheader">Isapre</div>
                <div role="columnheader">Particular</div>
              </div>
              <div className="tabla-row" role="row">
                <div role="cell">Bono en sede con huella y ClaveÚnica cuando aplica. Tramos B-C-D. Si tu prestación no va por bono, boleta reembolsable.</div>
                <div role="cell">Bono electrónico y reembolso según plan. Emitimos boleta y te enviamos PDF al correo. No trabajamos con seguros complementarios en caja.</div>
                <div role="cell">Pago con débito, crédito y transferencia. Boleta inmediata. Factura a empresa con orden de compra previa.</div>
              </div>
            </div>

            {/* Mobile accordion */}
            <div className="acordeon-convenios">
              <details>
                <summary>Fonasa</summary>
                <p>Bono en sede con huella y ClaveÚnica cuando aplica. Tramos B-C-D. Si tu prestación no va por bono, boleta reembolsable.</p>
              </details>
              <details>
                <summary>Isapre</summary>
                <p>Bono electrónico y reembolso según plan. Emitimos boleta y te enviamos PDF al correo. No trabajamos con seguros complementarios en caja.</p>
              </details>
              <details>
                <summary>Particular</summary>
                <p>Pago con débito, crédito y transferencia. Boleta inmediata. Factura a empresa con orden de compra previa.</p>
              </details>
            </div>

            <ul className="lista-convenios">
              <li><span className="punto" aria-hidden="true" />Convenio marco Fonasa</li>
              <li><span className="punto" aria-hidden="true" />Bono electrónico Isapres abiertas</li>
              <li><span className="punto" aria-hidden="true" />Derivación con orden vigente</li>
            </ul>
            <p className="nota-honesta">¿Tienes otra previsión? Escríbenos por WhatsApp y te confirmamos en el día.</p>
          </div>

          <div className="convenios-media">
            <MediaImg
              src="media/eter-convenios-1x1.png"
              alt="Bodegón de ficha de papel con timbre y tarjeta de bono sobre mesa de madera"
              ratio="1/1"
              dataFalta="eter-convenios-1x1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- #examenes-en-sede ----------
const EXAMENES = [
  { nombre: "ECG reposo", detalle: "mismo día, sin ayuno", precio: "desde $18.000", plazo: "informe en 24h" },
  { nombre: "Espirometría", detalle: "con hora, sin crisis aguda", precio: "desde $32.000", plazo: "48h" },
  { nombre: "Audiometría", detalle: "con indicación ORL", precio: "desde $28.000", plazo: "48h" },
  { nombre: "PAP y toma de muestra", detalle: "con hora gine", precio: "desde $16.000", plazo: "5–7 días (lab externo)" },
  { nombre: "Curaciones y procedimientos menores en box", detalle: "según evaluación", precio: "desde $22.000", plazo: "" },
];

function ExamenesEnSede() {
  return (
    <section id="examenes-en-sede" className="section bg-soft">
      <div className="container">
        <h2 className="section-title">Exámenes en sede</h2>
        <div className="grid12" style={{ alignItems: "start" }}>
          <div className="examenes-lista-col">
            <ul className="examenes-lista" aria-label="Exámenes en sede">
              {EXAMENES.map((ex) => (
                <li key={ex.nombre} className="examen-fila">
                  <div className="examen-nombre">{ex.nombre} — {ex.detalle}</div>
                  <div className="examen-precio">{ex.precio}{ex.plazo ? ` — ${ex.plazo}` : ""}</div>
                </li>
              ))}
            </ul>
            <div className="bloque-derivacion">
              Laboratorio, imágenes y kine: te derivamos con orden impresa y contacto directo. No cobramos el examen que no hacemos en sede.
            </div>
            <p className="nota-honesta" style={{ marginTop: 10 }}>Plazos referenciales; se confirman al agendar según demanda.</p>
          </div>
          <div className="examenes-media-col">
            <MediaImg
              src="media/eter-examenes-3x4.png"
              alt="Box de procedimiento vacío con camilla y bandeja de instrumental"
              ratio="3/4"
              dataFalta="eter-examenes-3x4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- #sucursales-horario ----------
function SucursalesHorario() {
  return (
    <>
      <section id="sucursales-horario" className="section">
        <div className="container">
          <h2 className="section-title">Sucursales y horarios</h2>
          <div className="grid12" style={{ alignItems: "stretch" }}>
            <div className="sede-card">
              <h3 className="sede-nombre">Providencia — Av. Providencia 1208, piso 3</h3>
              <p className="sede-detalle">Medicina general y 14 especialidades · Acceso Metro Los Leones · Estacionamiento pagado a 1 cuadra</p>
              <p className="sede-horario">Lun–Vie 08:00–20:00 · Sáb 09:00–14:00 · Primera hora 08:10 · Última 19:40</p>
              <p className="sede-tel">2 2758 4100</p>
              <a href="#reserva-hora" className="btn-fila" style={{ marginTop: 14 }} onClick={() => { try{localStorage.setItem("eter-reserva-sede","Providencia")}catch{} }}>Pedir hora Providencia</a>
            </div>
            <div className="sede-card">
              <h3 className="sede-nombre">Las Condes — Rosario Norte 532, of. 41</h3>
              <p className="sede-detalle">Medicina general, pediatría, gine, trauma, cardio · A 2 cuadras de Manquehue</p>
              <p className="sede-horario">Lun–Vie 08:30–19:30 · Sáb 09:00–13:00</p>
              <p className="sede-tel">2 2758 4101</p>
              <a href="#reserva-hora" className="btn-fila" style={{ marginTop: 14 }} onClick={() => { try{localStorage.setItem("eter-reserva-sede","Las Condes")}catch{} }}>Pedir hora Las Condes</a>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <MediaImg
              src="media/eter-sucursales-16x9.png"
              alt="Plano de barrio abstracto estilo papel con pins Providencia y Las Condes"
              ratio="16/9"
              dataFalta="eter-sucursales-16x9.png"
            />
          </div>

          <p className="nota-honesta" style={{ marginTop: 14 }}>Acceso sin peldaños en ambas sedes. Aviso: llega 10 min antes con tu cédula y orden si vienes derivado.</p>
        </div>
      </section>

      {/* Respiro interior 16:9 a ancho completo antes de reserva */}
      <div className="respiro-interior">
        <div className="container">
          <MediaImg
            src="media/eter-interior-16x9.png"
            alt="Hall de espera vacío con sillas en hilera y luz de tarde"
            ratio="16/9"
            dataFalta="eter-interior-16x9.png"
          />
        </div>
      </div>
    </>
  );
}

// ---------- #reserva-hora ----------
function isValidCLPhone(v: string): boolean {
  const cleaned = v.replace(/\s/g, "").replace(/-/g, "");
  // accept +56912345678, 56912345678, 912345678, +56 9 12345678
  const digits = cleaned.replace(/\D/g, "");
  // Chilean mobile: 569 + 8 digits => 11 digits starting 569
  if (digits.length === 11 && digits.startsWith("569")) return true;
  if (digits.length === 12 && digits.startsWith("569")) return true; // with extra?
  if (digits.length === 9 && digits.startsWith("9")) return true;
  if (digits.length === 8) return true; // fallback minimal
  // regex with +56
  return /^\+?56\s?9\s?\d{4}\s?\d{4}$/.test(v.trim()) || /^\+?569\d{8}$/.test(cleaned);
}

function ReservaHora() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [prevision, setPrevision] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [sede, setSede] = useState("Indiferente");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // prefill from localStorage or hash param
    try {
      const savedEsp = localStorage.getItem("eter-reserva-especialidad") || localStorage.getItem("eter-especialidad") || "";
      const savedSede = localStorage.getItem("eter-reserva-sede") || "";
      if (savedEsp && ESPECIALIDADES.some((e) => e.nombre === savedEsp)) setEspecialidad(savedEsp);
      if (savedSede) setSede(savedSede);
      // hash param ?especialidad=
      const hash = window.location.hash;
      const q = hash.includes("?") ? hash.split("?")[1] : "";
      if (q) {
        const params = new URLSearchParams(q);
        const hEsp = params.get("especialidad");
        if (hEsp && ESPECIALIDADES.some((e) => e.nombre === hEsp)) setEspecialidad(hEsp);
        const hSede = params.get("sede");
        if (hSede) setSede(hSede);
      }
    } catch {}
    // also read saved reserva if exists
    try {
      const raw = localStorage.getItem("eter-reserva");
      if (raw) {
        const j = JSON.parse(raw);
        if (j.nombre) setNombre(j.nombre);
        if (j.tel) setTel(j.tel);
        if (j.prevision) setPrevision(j.prevision);
        if (j.especialidad) setEspecialidad(j.especialidad);
        if (j.sede) setSede(j.sede);
      }
    } catch {}
  }, []);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!nombre.trim() || nombre.trim().length < 3) e.nombre = "Ingresa tu nombre y apellido.";
    if (!tel.trim()) e.tel = "Ingresa tu teléfono.";
    else if (!isValidCLPhone(tel)) e.tel = "Formato inválido. Ej: +56 9 1234 5678";
    if (!prevision) e.prevision = "Selecciona tu previsión.";
    if (!especialidad) e.especialidad = "Selecciona una especialidad.";
    if (!acepta) e.acepta = "Debes aceptar para que te contactemos.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const payload = { nombre: nombre.trim(), tel: tel.trim(), prevision, especialidad, sede, mensaje: mensaje.trim() };
      try {
        localStorage.setItem("eter-reserva", JSON.stringify(payload));
      } catch {}
      const text = `Hola ETER, quiero pedir hora. Nombre: ${payload.nombre}, Tel: ${payload.tel}, Previsión: ${payload.prevision}, Especialidad: ${payload.especialidad}, Sede: ${payload.sede}${payload.mensaje ? `, Mensaje: ${payload.mensaje}` : ""}`;
      const waUrl = `https://wa.me/56227584100?text=${encodeURIComponent(text)}`;
      // Try wa.me; fallback to mailto after 400ms if popup blocked
      const win = window.open(waUrl, "_blank");
      if (!win) {
        const mail = `mailto:hola@eter-centromedico.cl?subject=${encodeURIComponent(`Reserva hora - ${payload.especialidad}`)}&body=${encodeURIComponent(text)}`;
        window.location.href = mail;
      }
    }, 700);
  };

  return (
    <section id="reserva-hora" className="section bg-soft">
      <div className="container">
        <h2 className="section-title" style={{ fontSize: "26px" }}>Reserva tu hora</h2>
        <p className="section-bajada">Cuéntanos qué necesitas y te confirmamos por WhatsApp con hora exacta. Sin formularios eternos.</p>

        <div className="grid12" style={{ alignItems: "start" }}>
          <div className="reserva-form-col">
            {success && (
              <div className="success-box" role="status" aria-live="polite">
                Listo. Te escribimos por WhatsApp en horario hábil con tu hora. Si es fuera de horario, confirmamos a primera hora del día siguiente.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate aria-label="Formulario reserva">
              <div className="field">
                <label htmlFor="res-nombre">Nombre y apellido</label>
                <input id="res-nombre" type="text" required autoComplete="name" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: María González" />
                {errors.nombre && <span className="field-error">{errors.nombre}</span>}
              </div>

              <div className="field">
                <label htmlFor="res-tel">Teléfono WhatsApp</label>
                <input id="res-tel" type="tel" required autoComplete="tel" placeholder="+56 9 1234 5678" value={tel} onChange={(e) => setTel(e.target.value)} />
                {errors.tel && <span className="field-error">{errors.tel}</span>}
              </div>

              <div className="field">
                <label htmlFor="res-prevision">Previsión</label>
                <select id="res-prevision" required value={prevision} onChange={(e) => setPrevision(e.target.value)}>
                  <option value="">Selecciona</option>
                  <option value="Fonasa">Fonasa</option>
                  <option value="Isapre">Isapre</option>
                  <option value="Particular">Particular</option>
                </select>
                {errors.prevision && <span className="field-error">{errors.prevision}</span>}
              </div>

              <div className="field">
                <label htmlFor="res-esp">Especialidad</label>
                <select id="res-esp" required value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
                  <option value="">Selecciona</option>
                  {ESPECIALIDADES.map((e) => (
                    <option key={e.nombre} value={e.nombre}>{e.nombre}</option>
                  ))}
                </select>
                {errors.especialidad && <span className="field-error">{errors.especialidad}</span>}
              </div>

              <div className="field">
                <label htmlFor="res-sede">Sede preferida</label>
                <select id="res-sede" value={sede} onChange={(e) => setSede(e.target.value)}>
                  <option value="Providencia">Providencia</option>
                  <option value="Las Condes">Las Condes</option>
                  <option value="Indiferente">Indiferente</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="res-msg">Mensaje breve</label>
                <textarea id="res-msg" rows={3} placeholder="Ej: control gine con PAP, vengo con orden de mi médico" value={mensaje} onChange={(e) => setMensaje(e.target.value)} style={{ height: 80, resize: "vertical" }} />
              </div>

              <div className="field field-check">
                <label className="check-label">
                  <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} required />
                  <span>Acepto que me contacten por WhatsApp para confirmar la hora. No spam.</span>
                </label>
                {errors.acepta && <span className="field-error">{errors.acepta}</span>}
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Enviando…" : "Enviar y pedir hora por WhatsApp"}
              </button>

              <p className="privacidad">Guardamos solo lo necesario para agendar. No compartimos tu dato. Puedes pedir que lo borremos.</p>
            </form>
          </div>

          <div className="reserva-lateral">
            <div className="lateral-box">
              <p className="lateral-kicker">¿Prefieres hablar?</p>
              <a href="tel:+56227584100" className="lateral-tel">+56 2 2758 4100</a>
              <a href="mailto:hola@eter-centromedico.cl" className="lateral-email">hola@eter-centromedico.cl</a>
              <p className="lateral-horario">Lun–Vie 08:00–20:00 · Sáb 09:00–14:00</p>
              <p className="lateral-respuesta">Respuesta hábil: Lun–Vie 08:00–19:00 · Sáb 09:00–13:00</p>
            </div>
            <div style={{ marginTop: 16 }}>
              <MediaImg
                src="media/eter-reserva-1x1.png"
                alt="Detalle de atril con ficha y lapicera"
                ratio="1/1"
                dataFalta="eter-reserva-1x1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid12">
          <div className="footer-col footer-eter">
            <div className="footer-logo">ETER</div>
            <p className="footer-desc">CENTRO MÉDICO · PROVIDENCIA / LAS CONDES</p>
            <p className="footer-legal">Centro médico — atención ambulatoria sin hospitalización</p>
            <p className="footer-rut">RUT 76.123.456-7</p>
          </div>
          <div className="footer-col footer-nav-sec">
            <nav aria-label="Secundaria">
              <a href="#especialidades-agenda">Especialidades</a>
              <a href="#convenios-prevision">Convenios</a>
              <a href="#examenes-en-sede">Exámenes</a>
              <a href="#sucursales-horario">Sucursales</a>
              <a href="#reserva-hora">Reserva</a>
            </nav>
          </div>
          <div className="footer-col footer-legal-col">
            <p>Valores referenciales · No es servicio de urgencia · Ante emergencia llama al 131</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyMobile() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky-mobile ${visible ? "visible" : ""}`} aria-hidden={!visible}>
      <a href="tel:+56227584100" className="sticky-phone">+56 2 2758 4100</a>
      <a href="#reserva-hora" className="sticky-cta">Pedir hora</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <a href="#inicio" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main-content">
        <Hero />
        <EspecialidadesAgenda />
        <RutaAtencion />
        <ConveniosPrevision />
        <ExamenesEnSede />
        <SucursalesHorario />
        <ReservaHora />
      </main>
      <Footer />
      <StickyMobile />
      {/* hidden OG image for metadata; not rendered visually */}
      <img src="media/eter-og-16x9.png" alt="" aria-hidden="true" style={{ display: "none" }} />
    </>
  );
}
