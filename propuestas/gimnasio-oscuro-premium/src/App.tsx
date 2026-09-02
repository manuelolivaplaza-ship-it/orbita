import { useEffect, useRef, useState } from "react";

const WA_BASE = "https://wa.me/56944338821";
const WA_HREF = `${WA_BASE}?text=Hola%20FORJA%2C%20quiero%20la%20semana%20de%20prueba%20Full%20($14.900).`;
const WA_PASE = `${WA_BASE}?text=Hola%20FORJA%2C%20quiero%20el%20pase%20diario%20($7.000).`;
const TEL_DISPLAY = "+56 9 4433 8821";
const LS_KEY = "forja_reserva_2026";

function mediaExistsNote(filename: string) {
  console.warn(`[FORJA] Falta: ${filename} — deja placeholder media-falta`);
}

function MediaFalta({ filename, ratio }: { filename: string; ratio?: string }) {
  useEffect(() => {
    mediaExistsNote(filename);
  }, [filename]);
  return (
    <div className="media-falta" data-falta={filename} style={{ aspectRatio: ratio || "16 / 9" }}>
      <span>Falta: {filename}</span>
    </div>
  );
}

function MediaImg({
  src,
  alt,
  ratio,
  onMissing,
  filename,
}: {
  src: string;
  alt: string;
  ratio?: string;
  onMissing?: () => void;
  filename: string;
}) {
  const [missing, setMissing] = useState(false);
  if (missing) return <MediaFalta filename={filename} ratio={ratio} />;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={ratio ? { aspectRatio: ratio } : undefined}
      onError={() => {
        setMissing(true);
        onMissing?.();
        mediaExistsNote(filename);
      }}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-logo">
            <a href="#forja" aria-label="FORJA inicio">FORJA</a>
          </div>
          <nav className="header-nav" aria-label="Navegación principal">
            <a href="#planes-horario">Planes</a>
            <a href="#salas">Salas</a>
            <a href="#clase-del-dia">Clases</a>
            <a href="#pase-diario">Pase</a>
            <a href="#horario-acceso">Horario</a>
          </nav>
          <div className="header-right">
            <div className="header-tel">
              <a href="tel:+56944338821">{TEL_DISPLAY}</a>
              <span>WhatsApp directo</span>
            </div>
            <a className="btn-header-cta" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              Reserva prueba
            </a>
            <button className="header-hamburger" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navegación móvil">
          <a href="#planes-horario" onClick={() => setOpen(false)}>Planes</a>
          <a href="#salas" onClick={() => setOpen(false)}>Salas</a>
          <a href="#clase-del-dia" onClick={() => setOpen(false)}>Clases</a>
          <a href="#pase-diario" onClick={() => setOpen(false)}>Pase</a>
          <a href="#horario-acceso" onClick={() => setOpen(false)}>Horario</a>
        </nav>
        <div className="mobile-tel">
          <a href="tel:+56944338821">{TEL_DISPLAY}</a>
          <span>WhatsApp directo · Respuesta en horario de sala</span>
        </div>
        <a className="mobile-cta" href={WA_HREF} target="_blank" rel="noopener noreferrer">
          Reserva tu semana de prueba — WhatsApp
        </a>
      </div>
    </>
  );
}

function Hero() {
  const [hasHero, setHasHero] = useState<boolean | null>(null);
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function check() {
      try {
        const res = await fetch("/media/forja-hero-16x9.png", { method: "HEAD" });
        if (cancelled) return;
        setHasHero(res.ok);
        if (!res.ok) mediaExistsNote("forja-hero-16x9.png");
      } catch {
        if (!cancelled) setHasHero(false);
      }
      try {
        const rv = await fetch("/media/forja-hero-loop.mp4", { method: "HEAD" });
        if (!cancelled) setHasVideo(rv.ok);
      } catch {
        if (!cancelled) setHasVideo(false);
      }
    }
    check();
    return () => { cancelled = true; };
  }, []);

  const showPlaceholder = hasHero === false;

  return (
    <section id="forja" className="hero" aria-label="Forja hero">
      {showPlaceholder ? (
        <div className="media-falta" data-falta="forja-hero-16x9.png" style={{ background: "#141A22", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--muted)", minHeight: "520px" }}>
          Falta: forja-hero-16x9.png
        </div>
      ) : hasVideo ? (
        <video className="hero-media" autoPlay muted loop playsInline poster="/media/forja-hero-16x9.png" onError={() => setHasVideo(false)}>
          <source src="/media/forja-hero-loop.mp4" type="video/mp4" />
        </video>
      ) : (
        <picture>
          <source media="(max-width: 900px)" srcSet="/media/forja-hero-9x16.png" />
          <img
            className="hero-media"
            src="/media/forja-hero-16x9.png"
            alt="Sala de pesas vacía estilo forja industrial con jaulas alineadas sobre piso de goma negra"
            loading="eager"
            decoding="async"
            onError={() => setHasHero(false)}
          />
        </picture>
      )}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker">GIMNASIO DE FORJA — ÑUÑOA — DESDE 2018</div>
          <h1 className="hero-h1">
            Templa tu cuerpo.<br />Hierro, fuego y repetición.<br /><span className="accent">Sin humo.</span>
          </h1>
          <p className="hero-lead">
            Pesas libres, jaulas y piso de goma negro. No hay zumba con luces. Hay series, descanso y progresión. Entrena temprano o tarde, con plan claro y precio a la vista.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href={WA_HREF} target="_blank" rel="noopener noreferrer">Reserva tu semana de prueba — WhatsApp</a>
            <a className="btn-secondary" href="#planes-horario">Ver planes desde $39.900</a>
          </div>
          <div className="hero-micro">Respuesta por WhatsApp en horario de sala. Sin matrícula escondida.</div>
          <div className="hero-proof">390 socios activos <span className="dot">·</span> 7:00–22:00 <span className="dot">·</span> acceso con torniquete</div>
        </div>
        <div className="hero-glass" aria-label="Aforo ahora">
          <div className="hero-glass-label">Aforo ahora</div>
          <div className="hero-glass-value">Sala pesas · 18 personas — tranquilo para entrenar</div>
          <div className="hero-glass-bar" aria-hidden="true">
            <span className="filled" /><span className="filled" /><span />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanesHorario() {
  return (
    <section id="planes-horario" className="section-planes">
      <div className="container">
        <div className="section-head">
          <div className="kicker">PLANES — HORARIO — SIN LETRA CHICA <span className="kicker-line" /></div>
          <h2>Elige tu turno. Paga solo ese turno.</h2>
          <p className="bajada">Todos con acceso a pesas, jaulas y cardio. Clases incluidas en Full. Sin matrícula si pagas trimestral. Valores referenciales; se confirma tras visita.</p>
        </div>
        <div className="planes-grid">
          {/* Card 1 */}
          <div className="plan-card">
            <div className="plan-label">MAÑANA 06:00–13:00</div>
            <div className="plan-name">FORJA MAÑANA</div>
            <div className="plan-price">$39.900 / mes</div>
            <div className="plan-sub">pago mensual con tarjeta o transferencia</div>
            <ul className="plan-bullets">
              <li>— Acceso pesas + cardio 06:00–13:00</li>
              <li>— Evaluación inicial incluida</li>
              <li>— Sin tope de visitas en tu franja</li>
            </ul>
            <a className="plan-cta" href={`${WA_BASE}?text=Hola%20FORJA%2C%20quiero%20el%20plan%20FORJA%20MA%C3%91ANA%20($39.900).`} target="_blank" rel="noopener noreferrer">Elegir Mañana — WhatsApp</a>
            <div className="plan-note">Trimestral: $34.900/mes (ahorro $15.000)</div>
          </div>
          {/* Card 2 destacada */}
          <div className="plan-card featured">
            <div className="plan-label">FULL 06:00–22:00 + CLASES</div>
            <div className="plan-name">FORJA FULL</div>
            <div className="plan-price">$54.900 / mes</div>
            <div className="plan-sub accent">el más elegido — 62% de los socios</div>
            <ul className="plan-bullets dark">
              <li>— Horario completo + todas las clases</li>
              <li>— 1 acompañante gratis el primer sábado del mes</li>
              <li>— Casillero propio (según disponibilidad)</li>
            </ul>
            <a className="plan-cta primary" href={`${WA_BASE}?text=Hola%20FORJA%2C%20quiero%20el%20plan%20FORJA%20FULL%20($54.900).`} target="_blank" rel="noopener noreferrer">Elegir Full — WhatsApp</a>
            <div className="plan-note">Trimestral: $49.900/mes</div>
          </div>
          {/* Card 3 */}
          <div className="plan-card">
            <div className="plan-label">DÚO — ENTRENA DE A DOS</div>
            <div className="plan-name">FORJA DÚO</div>
            <div className="plan-price small">$89.900 / mes</div>
            <div className="plan-sub">$44.950 c/u — se cobra a una persona</div>
            <ul className="plan-bullets">
              <li>— Ambos en misma franja Full</li>
              <li>— Evaluación inicial para los dos</li>
              <li>— Congela 1 mes al año sin costo</li>
            </ul>
            <a className="plan-cta" href={`${WA_BASE}?text=Hola%20FORJA%2C%20quiero%20el%20plan%20FORJA%20D%C3%9AO%20($89.900).`} target="_blank" rel="noopener noreferrer">Elegir Dúo — WhatsApp</a>
            <div className="plan-note">Ideal para entrenar con pareja o amigo</div>
          </div>
        </div>
        <div className="planes-table-wrap">
          <table className="planes-table">
            <thead>
              <tr>
                <th></th>
                <th>MAÑANA</th>
                <th>FULL</th>
                <th>DÚO</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Matrícula</td><td colSpan={3}>$12.000 (gratis en trimestral)</td></tr>
              <tr><td>Horario</td><td>06:00–13:00</td><td>06:00–22:00</td><td>Full ambos</td></tr>
              <tr><td>Clases incluidas</td><td>—</td><td>Sí</td><td>Sí</td></tr>
              <tr><td>Acompañante</td><td>—</td><td>1 sábado/mes gratis</td><td>Incluido (2 personas)</td></tr>
              <tr><td>Casillero</td><td>Diario</td><td>Propio s/disp.</td><td>Propio s/disp.</td></tr>
              <tr><td>Congelar</td><td>—</td><td>1 mes/año</td><td>1 mes/año</td></tr>
              <tr className="nota-row"><td colSpan={4}>Valores referenciales; se confirma tras visita. No incluye evaluación kinésica si la necesitas ($18.000).</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Salas() {
  return (
    <section id="salas" className="section-salas">
      <div className="container">
        <div className="section-head narrow">
          <div className="kicker">SALAS — 420 M² — PISO DE GOMA NEGRO</div>
          <h2>Hierro a la vista. Nada de alfombra.</h2>
          <p className="bajada">Jaulas, discos calibrados, mancuernas hexagonales hasta 50 kg, cardio al fondo. Iluminación dirigida, no fluorescente parejo.</p>
        </div>
        <div className="salas-grid">
          {/* Sala 1 col 1-6 4:3 */}
          <div className="sala-tile col-6 ratio-4x3">
            <div className="sala-media">
              <MediaImg src="/media/forja-tile-01-4x3.png" alt="Sala de pesas libres con jaulas" ratio="4 / 3" filename="forja-tile-01-4x3.png" />
            </div>
            <div className="sala-overlay">
              <div className="sala-label">SALA 01 — PESAS LIBRES — 180 M²</div>
              <div className="sala-title">Jaulas, bancos y discos — sin máquinas que hacen el trabajo por ti</div>
              <div className="sala-specs">6 jaulas · 1.200 kg en discos · barra olímpica 20 kg</div>
            </div>
          </div>
          {/* Sala 2 col 7-12 4:3 */}
          <div className="sala-tile col-6 ratio-4x3">
            <div className="sala-media">
              <MediaImg src="/media/forja-tile-02-4x3.png" alt="Sala de cardio con trotadoras" ratio="4 / 3" filename="forja-tile-02-4x3.png" />
            </div>
            <div className="sala-overlay">
              <div className="sala-label">SALA 02 — CARDIO — 90 M²</div>
              <div className="sala-title">Cardio al fondo, sin espejos enfrente</div>
              <div className="sala-specs">12 máquinas · vista a patio interior · ventilación cruzada</div>
            </div>
          </div>
          {/* Sala 3 col 1-4 1:1 */}
          <div className="sala-tile col-4 ratio-1x1">
            <div className="sala-media">
              <MediaImg src="/media/forja-tile-03-1x1.png" alt="Sala funcional con cajones y kettlebells" ratio="1 / 1" filename="forja-tile-03-1x1.png" />
            </div>
            <div className="sala-overlay">
              <div className="sala-label">SALA 03 — FUNCIONAL — 70 M²</div>
              <div className="sala-title">Funcional y movilidad — cajones y kettlebells</div>
              <div className="sala-specs">Suelo amortiguado · 8 estaciones</div>
            </div>
          </div>
          {/* Sala 4 col 5-8 1:1 */}
          <div className="sala-tile col-4 ratio-1x1">
            <div className="sala-media">
              <MediaImg src="/media/forja-tile-04-1x1.png" alt="Vestuario con taquillas de acero" ratio="1 / 1" filename="forja-tile-04-1x1.png" />
            </div>
            <div className="sala-overlay">
              <div className="sala-label">VESTUARIO — DUCHAS — TAQUILLAS</div>
              <div className="sala-title">Acero, hormigón y agua caliente. Sin toalla perdida.</div>
              <div className="sala-specs">Casilleros con llave · duchas 4 · secador</div>
            </div>
          </div>
          {/* Sala 5 col 9-12 1:1 interior */}
          <div className="sala-tile col-4 ratio-1x1">
            <div className="sala-media">
              <MediaImg src="/media/forja-interior-16x9.png" alt="Acceso torniquete y recepción" ratio="1 / 1" filename="forja-interior-16x9.png" />
            </div>
            <div className="sala-overlay">
              <div className="sala-label">ACCESO — TORNIQUETE + RECEPCIÓN</div>
              <div className="sala-title">Entras, marcas y entrenas. Sin vueltas.</div>
              <div className="sala-specs">Control por QR · recepción hasta 22:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Clase = { hora: string; nombre: string; coach: string; estado?: "AHORA" | "PROXIMA" };
const SCHEDULE: Record<string, Clase[]> = {
  LUN: [{ hora: "07:00", nombre: "FUERZA — TREN SUPERIOR", coach: "Equipo Forja", estado: "AHORA" }, { hora: "18:30", nombre: "ACONDICIONAMIENTO", coach: "Equipo Forja", estado: "PROXIMA" }, { hora: "20:00", nombre: "FUERZA — FULL BODY", coach: "Equipo Forja" }],
  MAR: [{ hora: "07:00", nombre: "ACONDICIONAMIENTO", coach: "Equipo Forja" }, { hora: "18:30", nombre: "ACONDICIONAMIENTO", coach: "Equipo Forja" }],
  MIE: [{ hora: "07:00", nombre: "FUERZA — TREN INFERIOR", coach: "Equipo Forja" }, { hora: "18:30", nombre: "FUERZA — TREN SUPERIOR", coach: "Equipo Forja" }],
  JUE: [{ hora: "07:00", nombre: "ACONDICIONAMIENTO", coach: "Equipo Forja" }, { hora: "19:00", nombre: "ACONDICIONAMIENTO", coach: "Equipo Forja" }],
  VIE: [{ hora: "07:00", nombre: "FUERZA — FULL BODY", coach: "Equipo Forja" }, { hora: "18:30", nombre: "FUERZA — TREN INFERIOR", coach: "Equipo Forja" }],
  SAB: [{ hora: "10:00", nombre: "MOVILIDAD", coach: "Equipo Forja" }, { hora: "11:00", nombre: "ACONDICIONAMIENTO", coach: "Equipo Forja" }],
  DOM: [],
};

function ClaseDelDia() {
  const [openDay, setOpenDay] = useState<string>("LUN");
  return (
    <section id="clase-del-dia" className="section-clases">
      <div className="container">
        <div className="clases-head">
          <div>
            <div className="kicker">CLASES — GRILLA SEMANAL — INCLUIDAS EN FULL</div>
            <h2>No es coreografía. Es fuerza y acondicionamiento.</h2>
          </div>
          <div className="clases-meta">
            <span>Semana del 1 sep</span>
            <span className="clases-note">Cupo 14 por clase — reserva por WhatsApp</span>
          </div>
        </div>
        {/* Desktop grilla 7 col */}
        <div className="clases-grid">
          {Object.entries(SCHEDULE).map(([day, clases]) => (
            <div key={day} className="clases-col">
              <div className="clases-col-head">{day}</div>
              <div className="clases-cells">
                {clases.length === 0 ? (
                  <div className="clase-cell empty">—</div>
                ) : (
                  clases.map((c, i) => (
                    <div key={i} className="clase-cell">
                      <div className="clase-hora">{c.hora}</div>
                      <div className="clase-nombre">{c.nombre}</div>
                      <div className="clase-coach">{c.coach}</div>
                      {c.estado === "AHORA" && <span className="pill pill-ahora">AHORA</span>}
                      {c.estado === "PROXIMA" && <span className="pill pill-proxima">PRÓXIMA 18:30</span>}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Mobile acordeon */}
        <div className="clases-acordeon">
          {Object.entries(SCHEDULE).map(([day, clases]) => (
            <div key={day} className={`acordeon-item ${openDay === day ? "open" : ""}`}>
              <button className="acordeon-head" onClick={() => setOpenDay(day)}>
                <span>{day}</span>
                <span className="acordeon-count">{clases.length === 0 ? "—" : `${clases.length} clases`}</span>
              </button>
              {openDay === day && (
                <div className="acordeon-body">
                  {clases.length === 0 ? (
                    <div className="clase-cell empty">— Sin clases</div>
                  ) : (
                    clases.map((c, i) => (
                      <div key={i} className="clase-cell">
                        <div className="clase-hora">{c.hora}</div>
                        <div className="clase-nombre">{c.nombre}</div>
                        <div className="clase-coach">{c.coach}</div>
                        {c.estado === "AHORA" && <span className="pill pill-ahora">AHORA</span>}
                        {c.estado === "PROXIMA" && <span className="pill pill-proxima">PRÓXIMA 18:30</span>}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="clases-leyenda">Fuerza (lunes/miércoles/viernes) · Acondicionamiento (martes/jueves) · Movilidad (sábado 10:00)</div>
      </div>
    </section>
  );
}

function PaseDiario() {
  return (
    <section id="pase-diario" className="section-pase">
      <div className="container pase-grid">
        <div className="pase-copy">
          <div className="kicker accent">PASE DIARIO — PRUEBA LA FORJA</div>
          <h2>Un día entero. Sin vendedor encima.</h2>
          <ul className="pase-bullets">
            <li>— Pase diario $7.000 (06:00–22:00)</li>
            <li>— Pack 10 sesiones $59.000 (vence en 45 días)</li>
            <li>— Semana de prueba Full $14.900 (una vez, con evaluación)</li>
            <li>— Si te quedas, se descuenta del primer mes</li>
          </ul>
          <p className="pase-nota">Valores referenciales; se confirma tras visita.</p>
        </div>
        <div className="pase-card">
          <div className="pase-card-title">¿Qué incluye el pase?</div>
          <ul className="pase-card-list">
            <li>Jaulas, pesas y cardio</li>
            <li>1 clase si hay cupo</li>
            <li>Casillero y ducha</li>
          </ul>
          <a className="btn-primary full" href={WA_PASE} target="_blank" rel="noopener noreferrer">Pedir pase por WhatsApp — $7.000</a>
          <div className="pase-micro">Te mandamos QR y pagas en recepción</div>
        </div>
      </div>
    </section>
  );
}

function HorarioAcceso() {
  return (
    <section id="horario-acceso" className="section-horario">
      <div className="container horario-grid">
        <div className="horario-col">
          <div className="kicker">HORARIO — LUN A DOM</div>
          <ul className="horario-list">
            <li><span className="dot" /> Lunes a viernes 06:00–22:00</li>
            <li><span className="dot" /> Sábado 07:00–20:00</li>
            <li><span className="dot" /> Domingo 08:00–18:00</li>
            <li><span className="dot" /> Feriados 08:00–16:00</li>
          </ul>
          <p className="horario-nota">Último ingreso 60 min antes del cierre</p>
        </div>
        <div className="horario-col">
          <div className="kicker">ACCESO — TORNIQUETE QR</div>
          <p className="horario-text">Av. Irarrázaval 2850, Ñuñoa — a 3 cuadras de Metro Monseñor Eyzaguirre. Bicicletero interior, sin estacionamiento propio. Auto: pagas parquímetro.</p>
          <a className="link-accent" href="https://maps.google.com/?q=Av.+Irarrázaval+2850,+Ñuñoa" target="_blank" rel="noopener noreferrer">Ver en mapa</a>
        </div>
        <div className="horario-col">
          <div className="card-stats">
            <div className="stats-kicker">FORJA en números</div>
            <div className="stats-grid">
              <div className="stat"><span className="stat-val">390</span><span className="stat-label">socios activos</span><span className="stat-sub">capacidad 520</span></div>
              <div className="stat"><span className="stat-val">7 años</span><span className="stat-label">desde 2018</span></div>
              <div className="stat full"><span className="stat-val small">4,6/5 · 112 reseñas Google</span></div>
            </div>
            <div className="stats-nota">Reseñas verificables en Google — no usamos fotos de stock con caras</div>
          </div>
          <div className="proof-media">
            <MediaImg src="/media/forja-proof-16x9.png" alt="Detalle de discos olímpicos apilados" ratio="16 / 9" filename="forja-proof-16x9.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReservaForja() {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", email: "", franja: "Full", objetivo: "Fuerza", fecha: "", mensaje: "", acepta: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (form.nombre.trim().length < 2) e.nombre = "Ingresa al menos 2 caracteres.";
    const waClean = form.whatsapp.replace(/\s/g, "");
    if (!/^\+?56?9\d{8}$/.test(waClean) && !/^9\d{8}$/.test(waClean) && !/^\+569\d{8}$/.test(waClean)) {
      // accept +56 9 12345678 or 9 8 digits
      const digits = waClean.replace(/\D/g, "");
      if (!(digits.length === 11 && digits.startsWith("569")) && !(digits.length === 9 && digits.startsWith("9")) && !(digits.length === 8)) {
        e.whatsapp = "Formato: +56 9 12345678";
      } else if (digits.length === 8) {
        // 8 digits without prefix — still need 9 prefix? require 8 after 9
      }
    }
    // stricter: must be +56 9 + 8 digits
    const normalized = form.whatsapp.replace(/\D/g, "");
    let validWA = false;
    if (normalized.length === 11 && normalized.startsWith("569")) validWA = /^569\d{8}$/.test(normalized);
    else if (normalized.length === 9 && normalized.startsWith("9")) validWA = /^9\d{8}$/.test(normalized);
    else if (normalized.length === 8) validWA = /^\d{8}$/.test(normalized); // allow 8 digits, we prefix
    if (!validWA) e.whatsapp = "Formato: +56 9 12345678 (8 dígitos después del 9)";

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email no válido.";
    if (form.fecha) {
      const today = new Date(); today.setHours(0,0,0,0);
      const picked = new Date(form.fecha + "T00:00:00");
      if (picked < today) e.fecha = "La fecha no puede ser pasada.";
    }
    if (!form.acepta) e.acepta = "Debes aceptar para coordinar por WhatsApp.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);
    if (!validate()) return;
    setLoading(true);
    try {
      const payload = { ...form, createdAt: new Date().toISOString() };
      localStorage.setItem(LS_KEY, JSON.stringify(payload));
    } catch {
      // ignore
    }
    setTimeout(() => {
      setLoading(false);
      // simulate 90% success
      const ok = Math.random() > 0.05;
      if (ok) {
        setSuccess(true);
        const waText = `Hola FORJA, quiero la semana de prueba ${form.franja} ($14.900). Soy ${form.nombre}, mi WhatsApp es ${form.whatsapp}. Disponibilidad: ${form.fecha || "a coordinar"}.`;
        const href = `${WA_BASE}?text=${encodeURIComponent(waText)}`;
        window.open(href, "_blank");
      } else {
        setErrorMsg("No se pudo enviar. Prueba por WhatsApp directo.");
      }
    }, 700);
  }

  return (
    <section id="reserva-forja" className="section-reserva">
      <div className="container reserva-grid">
        <div className="reserva-copy">
          <div className="kicker accent">RESERVA — WHATSAPP DIRECTO</div>
          <h2>Agenda tu semana de prueba. Sin contrato.</h2>
          <p className="bajada">Elige tu franja, deja tu número y te confirmamos cupo en el día. Si prefieres, escribe directo.</p>
          <div className="reserva-tel">{TEL_DISPLAY}</div>
          <a className="btn-primary" href={WA_HREF} target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a>
          <div className="reserva-micro">Respuesta lun–vie 06:00–22:00, sáb/dom hasta 18:00</div>
        </div>
        <div className="reserva-form-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="field col-span-2">
                <label htmlFor="forja-nombre">Nombre*</label>
                <input id="forja-nombre" value={form.nombre} onChange={(ev) => setForm({ ...form, nombre: ev.target.value })} placeholder="Tu nombre" />
                {errors.nombre && <span className="field-error">{errors.nombre}</span>}
              </div>
              <div className="field">
                <label htmlFor="forja-wa">WhatsApp* (+56 9)</label>
                <input id="forja-wa" value={form.whatsapp} onChange={(ev) => setForm({ ...form, whatsapp: ev.target.value })} placeholder="+56 9 1234 5678" inputMode="tel" />
                {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
              </div>
              <div className="field">
                <label htmlFor="forja-email">Email (opcional)</label>
                <input id="forja-email" type="email" value={form.email} onChange={(ev) => setForm({ ...form, email: ev.target.value })} placeholder="tu@email.cl" />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="forja-franja">Franja interés</label>
                <select id="forja-franja" value={form.franja} onChange={(ev) => setForm({ ...form, franja: ev.target.value })}>
                  <option>Mañana</option><option>Full</option><option>Dúo</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="forja-objetivo">Objetivo</label>
                <select id="forja-objetivo" value={form.objetivo} onChange={(ev) => setForm({ ...form, objetivo: ev.target.value })}>
                  <option>Fuerza</option><option>Bajar % grasa</option><option>Volver a entrenar</option><option>Preparación</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="forja-fecha">Disponibilidad</label>
                <input id="forja-fecha" type="date" value={form.fecha} onChange={(ev) => setForm({ ...form, fecha: ev.target.value })} />
                {errors.fecha && <span className="field-error">{errors.fecha}</span>}
              </div>
              <div className="field col-span-2">
                <label htmlFor="forja-mensaje">Mensaje</label>
                <textarea id="forja-mensaje" rows={3} value={form.mensaje} onChange={(ev) => setForm({ ...form, mensaje: ev.target.value })} placeholder="¿Algo que debamos saber? Lesión, experiencia" />
              </div>
              <div className="field col-span-2 checkbox-row">
                <label className="checkbox-label">
                  <input type="checkbox" checked={form.acepta} onChange={(ev) => setForm({ ...form, acepta: ev.target.checked })} />
                  <span>Acepto que me contacten por WhatsApp para coordinar la prueba — <a href="#" onClick={(ev) => ev.preventDefault()}>privacidad</a></span>
                </label>
                {errors.acepta && <span className="field-error">{errors.acepta}</span>}
              </div>
              <div className="field col-span-2">
                <button className="btn-submit" type="submit" disabled={loading}>
                  {loading ? <><span className="spinner" /> Enviando…</> : "Reservar semana $14.900 — Enviar"}
                </button>
              </div>
            </div>
            {success && <div className="form-success">Listo. Te escribimos hoy al WhatsApp que dejaste. Si no ves mensaje, revisa spam o escribe al +56 9 4433 8821.</div>}
            {errorMsg && <div className="form-error-box">{errorMsg}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">FORJA</div>
          <div className="footer-sub">GIMNASIO DE FORJA — ÑUÑOA</div>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#planes-horario">Planes</a>
          <a href="#salas">Salas</a>
          <a href="#clase-del-dia">Clases</a>
          <a href="#pase-diario">Pase</a>
        </nav>
        <div className="footer-meta">
          <div>© 2026 FORJA · Irarrázaval 2850, Ñuñoa · +56 9 4433 8821 · Valores referenciales</div>
          <div className="footer-orbita">Hecho por Órbita</div>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    // IntersectionObserver fallback
    if ("IntersectionObserver" in window && sentinelRef.current) {
      const el = document.getElementById("forja");
      if (el) {
        const obs = new IntersectionObserver(([entry]) => {
          setVisible(!entry.isIntersecting);
        }, { threshold: 0 });
        obs.observe(el);
        return () => obs.disconnect();
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return <div ref={sentinelRef} aria-hidden="true" style={{ position: "absolute", top: 400 }} />;
  return (
    <div className="mobile-sticky-bar">
      <a className="sticky-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a className="sticky-reserva" href="#reserva-forja">Reservar $14.900</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PlanesHorario />
        <Salas />
        <ClaseDelDia />
        <PaseDiario />
        <HorarioAcceso />
        <ReservaForja />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
