import { useEffect, useRef, useState } from "react";

// ── helpers media ──
function MediaBox({
  src,
  alt,
  fallback,
  style,
  className,
}: {
  src: string;
  alt: string;
  fallback: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [fail, setFail] = useState(false);
  if (fail) {
    return (
      <div
        className="media-falta"
        data-falta={fallback}
        style={
          style
            ? { ...style, display: "grid", placeItems: "center", background: "var(--bg-2)", border: "1px solid var(--linea)", color: "var(--muted)" }
            : undefined
        }
      >
        falta: {fallback}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => {
        setFail(true);
        console.warn(`[abogado-claro] falta: ${fallback}`);
      }}
    />
  );
}

// ── Header (keep exact tokens/structure, add burger toggle) ──
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr" role="banner">
      <div className="hdr-inner">
        <a href="#" className="hdr-logo" aria-label="Estudio — inicio">
          ESTUDIO
        </a>
        <nav className={`hdr-nav ${open ? "hdr-nav--open" : ""}`} aria-label="Navegación principal">
          <a href="#materias-abogado-claro" onClick={() => setOpen(false)}>Materias</a>
          <a href="#como-defendemos-abogado-claro" onClick={() => setOpen(false)}>Cómo defendemos</a>
          <a href="#honorarios-abogado-claro" onClick={() => setOpen(false)}>Honorarios</a>
          <a href="#primera-reunion" onClick={() => setOpen(false)}>Primera reunión</a>
          <a href="#defensa-hoy" onClick={() => setOpen(false)}>Defensa hoy</a>
        </nav>
        <div className="hdr-actions">
          <a href="tel:+56982345678" className="hdr-tel tabular" aria-label="Llamar al +56 9 8234 5678">
            +56 9 8234 5678
          </a>
          <a href="#reserva" className="hdr-cta">
            Agendar reunión
          </a>
        </div>
        <button
          className="hdr-burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div className="hdr-mobile-panel" role="dialog" aria-label="Menú móvil">
          <a href="#materias-abogado-claro" onClick={() => setOpen(false)}>Materias</a>
          <a href="#como-defendemos-abogado-claro" onClick={() => setOpen(false)}>Cómo defendemos</a>
          <a href="#honorarios-abogado-claro" onClick={() => setOpen(false)}>Honorarios</a>
          <a href="#primera-reunion" onClick={() => setOpen(false)}>Primera reunión</a>
          <a href="#defensa-hoy" onClick={() => setOpen(false)}>Defensa hoy</a>
          <a href="#reserva" onClick={() => setOpen(false)}>Agendar reunión</a>
          <a href="tel:+56982345678" className="tabular">+56 9 8234 5678</a>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  const still16 = "/media/estudio-hero-16x9.png";
  const still9 = "/media/estudio-hero-9x16.png";
  const videoSrc = "/media/estudio-hero-loop.mp4";
  const [stillOk, setStillOk] = useState<boolean | null>(null);
  const [videoOk, setVideoOk] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setStillOk(true);
    img.onerror = () => {
      setStillOk(false);
      console.warn("[abogado-claro] falta: estudio-hero-16x9.png — deja hueco reportado");
    };
    img.src = still16;
  }, []);

  useEffect(() => {
    if (stillOk !== true) return;
    fetch(videoSrc, { method: "HEAD" })
      .then((r) => { if (r.ok) setVideoOk(true); })
      .catch(() => {});
  }, [stillOk]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) v.pause();
      else if (videoOk) v.play().catch(() => {});
    };
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, [videoOk]);

  if (stillOk === false) {
    return (
      <div className="media-falta" data-falta="estudio-hero-16x9.png">
        falta: estudio-hero-16x9.png
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <picture>
        <source media="(max-width: 900px)" srcSet={still9} />
        <img
          src={still16}
          alt="Expediente hueso lino con cinta algodón crudo y lápiz grafito sobre mesa roble claro bajo luz norte, sombra 30°, sin personas"
          style={{ width: "100%", height: "420px", objectFit: "cover", border: "1px solid var(--linea)", borderRadius: 0 }}
          onError={() => {
            setStillOk(false);
            console.warn("[abogado-claro] falta: estudio-hero-16x9.png (onError)");
          }}
        />
      </picture>
      {videoOk && stillOk && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={still16}
          className="hero-video"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="hero-badge" aria-label="Consulta inicial 45 mil pesos, presupuesto por escrito">
        Consulta inicial $45.000 · Presupuesto por escrito
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero-abogado-claro" className="hero" aria-labelledby="hero-h1">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-kicker">ESTUDIO · LAS CONDES — ESTUDIO JURÍDICO DESDE 2012</p>
          <h1 id="hero-h1-abogado-claro" className="hero-h1">
            Defensa clara. Presupuesto por escrito. El mismo abogado siempre.
          </h1>
          <p className="hero-sub">
            Te decimos si tienes caso, cuánto cuesta y qué hacemos mañana a primera hora. Materias acotadas, sin prometer resultados.
          </p>
          <div className="hero-ctas">
            <a href="#reserva" className="btn-prim">
              Agendar reunión
            </a>
            <a href="#honorarios-abogado-claro" className="btn-ghost">
              Ver honorarios
            </a>
          </div>
          <div className="hero-micro" role="note" aria-label="Compromiso honesto">
            <span className="hero-micro-dot" aria-hidden="true" />
            <p>Si no tienes caso, te lo decimos en la primera reunión. No iniciamos sin tu aprobación por escrito.</p>
          </div>
        </div>
        <div className="hero-visual" aria-label="Expediente del estudio">
          <HeroVisual />
        </div>
      </div>
      <div className="hero-band-wrap">
        <div className="hero-band" role="note" aria-label="Confianza">
          <strong className="tabular">RUT 76.123.456-7</strong>
          <span className="sep">·</span>
          <strong>+14 años</strong>
          <span className="sep">·</span>
          <strong>Registro Colegio de Abogados</strong>
          <span className="sep">·</span>
          <strong>Respuesta inicial 24h hábiles</strong>
        </div>
      </div>
    </section>
  );
}

// ── #materias ──
function Materias() {
  return (
    <section id="materias-abogado-claro" className="sec-materias" aria-labelledby="materias-h2">
      <div className="shell">
        <div className="sec-header">
          <p className="sec-kicker">01 — MATERIAS ACOTADAS</p>
          <h2 id="materias-h2-abogado-claro" className="sec-h2 sec-h2--underline">
            Materias que sí llevamos. Sin prometer resultados.
          </h2>
          <p className="sec-bajada">Cuatro materias, equipo estable. Si no es nuestra materia, te derivamos con honestidad.</p>
        </div>
        <div className="sec-filete" aria-hidden="true" />
        <div className="materias-grid">
          <article className="materia-card mat-anim-1">
            <h3 className="materia-h3">Familia</h3>
            <p className="materia-sub">Divorcio y pensión</p>
            <ul className="materia-bullets">
              <li>— Divorcio mutuo acuerdo y contencioso</li>
              <li>— Pensión de alimentos, cuidado personal, relación directa y regular</li>
              <li>— Cese de convivencia, compensación económica</li>
            </ul>
            <p className="materia-no">No incluye: divorcios express sin cese acreditado</p>
            <p className="materia-caption">
              Las Condes · Santiago · Presencial y online <span className="materia-arrow" aria-hidden="true">→</span>
            </p>
          </article>
          <article className="materia-card mat-anim-2">
            <h3 className="materia-h3">Laboral</h3>
            <p className="materia-sub">Despido y tutela</p>
            <ul className="materia-bullets">
              <li>— Despido injustificado, autodespido, tutela laboral</li>
              <li>— Accidentes y enfermedades profesionales</li>
              <li>— Negociación colectiva acotada</li>
            </ul>
            <p className="materia-no">No incluye: asesoría sindical permanente sin encargo</p>
            <p className="materia-caption">
              Las Condes · Santiago · Presencial y online <span className="materia-arrow" aria-hidden="true">→</span>
            </p>
          </article>
          {/* viñeta estructural 1:1 */}
          <div className="materia-vineta" aria-label="Viñeta expediente hueso">
            <MediaBox
              src="/media/estudio-tile-01-1x1.png"
              fallback="estudio-tile-01-1x1.png"
              alt="Pliegue de papel hueso con filete bronce y herraje bronce mate, luz rasante esculpiendo fibra, sin personas"
              style={{ width: "220px", height: "220px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
            />
          </div>
          <article className="materia-card mat-anim-3">
            <h3 className="materia-h3">Civil</h3>
            <p className="materia-sub">Herencias y contratos</p>
            <ul className="materia-bullets">
              <li>— Herencias, posesiones efectivas, particiones</li>
              <li>— Contratos civiles, responsabilidad contractual, cobranza</li>
              <li>— Indemnizaciones acotadas</li>
            </ul>
            <p className="materia-no">No incluye: regularización de títulos sin antecedentes completos</p>
            <p className="materia-caption">
              Las Condes · Santiago · Presencial y online <span className="materia-arrow" aria-hidden="true">→</span>
            </p>
          </article>
          <article className="materia-card mat-anim-4">
            <h3 className="materia-h3">Penal</h3>
            <p className="materia-sub">Defensa patrimonio y delitos</p>
            <ul className="materia-bullets">
              <li>— Delitos patrimoniales y económicos, lesiones</li>
              <li>— Defensa en garantía y juicio oral, medidas cautelares</li>
              <li>— Querellas</li>
            </ul>
            <p className="materia-no">No incluye: garantía de resultado ni rebaja asegurada</p>
            <p className="materia-caption">
              Las Condes · Santiago · Presencial y online <span className="materia-arrow" aria-hidden="true">→</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

// ── #como-defendemos ──
function ComoDefendemos() {
  return (
    <section id="como-defendemos-abogado-claro" className="sec-como" aria-labelledby="como-h2">
      <div className="shell">
        <div className="sec-header">
          <p className="sec-kicker sec-kicker--accent2">02 — CÓMO DEFENDEMOS</p>
          <h2 id="como-h2-abogado-claro" className="sec-h2 sec-h2--underline-accent2">
            Viabilidad, estrategia y presupuesto por escrito. Sin letra chica.
          </h2>
          <p className="sec-bajada" style={{ maxWidth: "42ch" }}>
            En 45 minutos sabes si tienes caso, qué sigue y cuánto cuesta cada etapa.
          </p>
        </div>
        <div className="sec-filete" aria-hidden="true" />
        <div className="pasos-grid">
          <article className="paso-card paso-anim-1">
            <h3 className="paso-h3">01 — Reunión 45 min</h3>
            <p className="paso-p">
              Trae: cédula, antecedentes del caso, documentos clave (contrato, demanda, liquidación, certificado matrimonio/cese). Te decimos viabilidad y riesgos en palabras simples.
            </p>
          </article>
          <article className="paso-card paso-anim-2">
            <h3 className="paso-h3">02 — Estrategia y presupuesto</h3>
            <p className="paso-p">
              En 24–48h hábiles: estrategia escrita, etapas, plazos estimados y honorario por etapa en CLP por escrito. Sin honorarios ocultos a convenir.
            </p>
          </article>
          <article className="paso-card paso-anim-3">
            <h3 className="paso-h3">03 — Patrocinio y seguimiento</h3>
            <p className="paso-p">
              El mismo abogado de principio a fin. Seguimiento quincenal + acceso a expediente digital. Si el plan cambia, te avisamos antes de seguir.
            </p>
          </article>
        </div>
        <div className="banda-entrega" role="note" aria-label="Entrega">
          <div className="banda-celda">
            <strong>① Documentos</strong>
            <span>Cédula y antecedentes clave</span>
          </div>
          <div className="banda-celda">
            <strong>② Plazos 24–48h</strong>
            <span>Estrategia y presupuesto por escrito</span>
          </div>
          <div className="banda-celda">
            <strong>③ Expediente digital</strong>
            <span>Seguimiento quincenal</span>
          </div>
        </div>
        <div className="como-media" aria-label="Mesa roble con regla y bloc alineados">
          <MediaBox
            src="/media/estudio-tile-02-4x3.png"
            fallback="estudio-tile-02-4x3.png"
            alt="Mesa roble claro vacía con regla metálica y bloc notas alineados, luz norte 30° esculpiendo veta, sin personas"
            style={{ width: "100%", height: "180px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

// ── #honorarios ──
type HonorarioRow = { label: string; price: string; hover: string };
const HONORARIOS: HonorarioRow[] = [
  { label: "Consulta inicial (45 min)", price: "$45.000", hover: "45 min, viabilidad + ruta + presupuesto por escrito. Se abona al encargo." },
  { label: "Divorcio mutuo acuerdo", price: "desde $390.000", hover: "Incluye cese, demanda conjunta, acuerdo completo. Tasas/receptor no incluidos." },
  { label: "Divorcio contencioso", price: "desde $850.000", hover: "Demanda, contestación, prueba, audiencia. Por etapa." },
  { label: "Pensión de alimentos", price: "desde $320.000", hover: "Demanda o aumento/rebaja, mediación previa incluida." },
  { label: "Juicio laboral", price: "desde $700.000", hover: "Demanda, comparendo, prueba, alegato. Pacto cuota litis disponible." },
  { label: "Herencia / posesión efectiva", price: "desde $520.000", hover: "Inventario, posesión, inscripción. Según herederos/bienes." },
  { label: "Defensa penal", price: "desde $950.000", hover: "Garantía, cautelares, juicio oral. Urgencias según disponibilidad." },
  { label: "Asesoría empresa mensual", price: "desde $280.000/mes", hover: "Contratos, laboral, compliance acotado. Horas incluidas por tramo." },
];

function Honorarios() {
  return (
    <section id="honorarios-abogado-claro" className="sec-honorarios" aria-labelledby="honorarios-h2">
      <div className="shell">
        <div className="sec-header sec-header--center">
          <p className="sec-kicker">03 — HONORARIOS</p>
          <h2 id="honorarios-h2-abogado-claro" className="sec-h2 sec-h2--underline">
            Honorarios por escrito, en etapas.
          </h2>
          <p className="sec-bajada" style={{ maxWidth: "52ch", marginInline: "auto" }}>
            Valores referenciales según complejidad. El valor final se fija por escrito tras la primera reunión. Facilidades de pago en cuotas.
          </p>
        </div>
        <div className="sec-filete sec-filete--center" aria-hidden="true" />
        <div className="hon-grid">
          <div className="hon-tabla-wrap">
            <div className="hon-table" role="table" aria-label="Tabla de honorarios">
              {HONORARIOS.map((row) => (
                <div className="hon-row" role="row" key={row.label}>
                  <div className="hon-row-main" role="cell">
                    <span className="hon-label">{row.label}</span>
                    <span className="hon-revela">{row.hover}</span>
                  </div>
                  <span className="hon-price tabular" role="cell">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="hon-nota" role="note">
              Valores referenciales según complejidad y antecedentes; el honorario final se confirma por escrito tras la primera reunión. Facilidades de pago en cuotas. Tasas judiciales, receptores y peritajes no incluidos salvo indicación expresa. Sin sorpresas.
            </p>
            <div className="hon-banda-pago" role="note" aria-label="Formas de pago">
              <div className="hon-pago-celda">
                <strong>Transferencia / Tarjeta / Cuotas</strong>
              </div>
              <div className="hon-pago-celda">
                <strong>Factura afecta</strong>
              </div>
              <div className="hon-pago-celda">
                <strong>Convenio por escrito</strong>
              </div>
            </div>
          </div>
          <div className="hon-apoyos">
            <MediaBox
              src="/media/estudio-proof-16x9.png"
              fallback="estudio-proof-16x9.png"
              alt="Expediente abierto con minuta tipográfica abstracta desenfocada sobre mesa roble, sello seco abstracto, luz norte difusa, sin personas"
              style={{ width: "100%", height: "220px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
            />
            <div style={{ marginTop: "12px" }}>
              <MediaBox
                src="/media/estudio-interior-16x9.png"
                fallback="estudio-interior-16x9.png"
                alt="Sala reunión estudio vacía roble claro y sillas lino crudo, ventanal grande luz norte difusa, sin personas"
                style={{ width: "100%", height: "160px", objectFit: "cover", border: "1px solid var(--linea)", display: "block", opacity: 0.85 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #primera-reunion ──
function PrimeraReunion() {
  return (
    <section id="primera-reunion" className="sec-primera" aria-labelledby="primera-h2">
      <div className="shell">
        <div className="grid12 primera-grid">
          <div className="primera-text">
            <p className="sec-kicker">PRIMERA REUNIÓN — 45 MIN</p>
            <h2 id="primera-h2" className="sec-h2 sec-h2--underline">
              Sales con ruta y presupuesto en la mano.
            </h2>
            <p className="sec-bajada" style={{ maxWidth: "34ch" }}>
              No es una charla genérica: es viabilidad, riesgos, documentos y honorario cerrado por etapa.
            </p>
            <div className="primera-bullets">
              <div className="primera-bullet primera-anim-1">
                <strong>1. Qué traes</strong>
                <span>Cédula, antecedentes y documentos clave del caso.</span>
              </div>
              <div className="primera-bullet primera-anim-2">
                <strong>2. Qué evaluamos</strong>
                <span>Viabilidad, riesgos y estrategia en palabras simples.</span>
              </div>
              <div className="primera-bullet primera-anim-3">
                <strong>3. Qué te llevas</strong>
                <span>Minuta + presupuesto por escrito por etapa.</span>
              </div>
            </div>
            <p className="primera-horario">Lun–Vie 9:00–18:30 · Sáb 10:00–13:00 (coordinación)</p>
            <p className="primera-accent-line">Materias acotadas · Presupuesto por escrito · El mismo abogado</p>
          </div>
          <div className="primera-media" aria-label="Biblioteca códigos chilenos">
            <MediaBox
              src="/media/estudio-biblioteca-3x4.png"
              fallback="estudio-biblioteca-3x4.png"
              alt="Lomos de códigos chilenos burdeos azul pizarra y hueso en estantería roble claro, luz norte lateral 30°, sin personas"
              style={{ width: "100%", height: "520px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #defensa-hoy ──
function DefensaHoy() {
  return (
    <section id="defensa-hoy" className="sec-defensa" aria-labelledby="defensa-h2">
      <div className="shell">
        <div className="grid12 defensa-grid">
          <div className="defensa-text">
            <p className="sec-kicker sec-kicker--accent2">DEFENSA HOY · PENAL / FAMILIA</p>
            <h2 id="defensa-h2" className="sec-h2">
              ¿Audiencia cerca o medida urgente? Respondemos hoy.
            </h2>
            <p className="sec-bajada" style={{ maxWidth: "42ch" }}>
              Si hay detención, cautelar, VIF o plazo en curso, llámanos. Te decimos qué hacer en los próximos 60 minutos.
            </p>
            <a href="tel:+56982345678" className="defensa-tel tabular" aria-label="Llamar +56 9 8234 5678">
              +56 9 8234 5678
            </a>
            <p className="defensa-caption">Respuesta dentro del horario · Fuera de horario: mensaje + devolución a primera hora</p>
            <div className="defensa-protocolo" role="note" aria-label="Qué decir al llamar">
              <div className="defensa-proto-row defensa-anim-1">
                <span className="defensa-num">1</span>
                <span>Qué pasó y cuándo</span>
              </div>
              <div className="defensa-proto-row defensa-anim-2">
                <span className="defensa-num">2</span>
                <span>Tribunal / RUC / RIT si existe</span>
              </div>
              <div className="defensa-proto-row defensa-anim-3">
                <span className="defensa-num">3</span>
                <span>Qué documento tienes a mano</span>
              </div>
            </div>
            <div className="defensa-ctas">
              <a href="tel:+56982345678" className="btn-defensa-prim">
                Llamar ahora
              </a>
              <a
                href="https://wa.me/56982345678?text=Hola%20Estudio%2C%20quisiera%20agendar%20una%20reuni%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-defensa-ghost"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
          <div className="defensa-media" aria-label="Patio interior oficina jurídica">
            <MediaBox
              src="/media/estudio-fachada-3x4.png"
              fallback="estudio-fachada-3x4.png"
              alt="Patio interior oficina jurídica chilena: muro piedra clara y puerta roble claro entreabierta herraje bronce mate, sin personas"
              style={{ width: "100%", height: "520px", objectFit: "cover", border: "1px solid var(--linea)", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── #reserva ──
function Reserva() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [materia, setMateria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("abogado-claro-reserva");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.nombre) setNombre(d.nombre);
        if (d.telefono) setTelefono(d.telefono);
        if (d.materia) setMateria(d.materia);
      }
    } catch {}
  }, []);

  // persist until success
  useEffect(() => {
    if (status === "success") return;
    try {
      const toSave = { nombre, telefono, materia };
      if (nombre || telefono || materia) {
        localStorage.setItem("abogado-claro-reserva", JSON.stringify(toSave));
      }
    } catch {}
  }, [nombre, telefono, materia, status]);

  const telRegex = /^\+56\s?9\s?\d{8}$/;

  const validate = () => {
    const e: Record<string, string> = {};
    if (nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres).";
    if (!telRegex.test(telefono.trim())) e.telefono = "Formato: +56 9 12345678";
    if (!materia) e.materia = "Elige una materia.";
    if (mensaje.trim().length < 10) e.mensaje = "Cuéntanos en al menos 10 caracteres.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("loading");
    setErrorMsg("");
    // simulate async + mailto fallback
    setTimeout(() => {
      try {
        const subject = encodeURIComponent(`Reserva — ${materia} — ${nombre}`);
        const body = encodeURIComponent(`Nombre: ${nombre}\nTeléfono: ${telefono}\nMateria: ${materia}\nMensaje: ${mensaje}`);
        const mailto = `mailto:contacto@estudio.cl?subject=${subject}&body=${body}`;
        // try to trigger mailto, but don't block success
        const a = document.createElement("a");
        a.href = mailto;
        // we don't actually navigate to keep SPA; just consider success
        setStatus("success");
        try {
          localStorage.removeItem("abogado-claro-reserva");
        } catch {}
        setTimeout(() => {
          setStatus("idle");
          setNombre("");
          setTelefono("");
          setMateria("");
          setMensaje("");
          setErrors({});
        }, 5000);
      } catch (err) {
        setStatus("error");
        setErrorMsg("No se pudo enviar. Escríbenos a contacto@estudio.cl o llama al +56 9 8234 5678.");
        console.error(err);
      }
    }, 900);
  };

  return (
    <section id="reserva" className="sec-reserva" aria-labelledby="reserva-h2">
      <div className="shell">
        <div className="grid12 reserva-grid">
          <div className="reserva-form-col">
            <p className="sec-kicker">AGENDA</p>
            <h2 id="reserva-h2-abogado-claro" className="sec-h2">
              Agendar reunión
            </h2>
            <p className="sec-bajada" style={{ fontSize: "0.92rem" }}>
              Respuesta en 24h hábiles. Si es urgencia, llama.
            </p>

            {status === "success" ? (
              <div className="reserva-success" role="status" aria-live="polite">
                <span className="reserva-success-check" aria-hidden="true">✓</span>
                <div>
                  <strong>¡Solicitud enviada! Te contactamos en 24h hábiles</strong>
                  <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "var(--muted)" }}>
                    También puedes llamar al +56 9 8234 5678.
                  </p>
                </div>
              </div>
            ) : (
              <form className="reserva-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="res-nombre">Nombre*</label>
                  <input
                    id="res-nombre-abogado-claro"
                    type="text"
                    placeholder="Nombre y apellido"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    aria-invalid={!!errors.nombre}
                    aria-describedby={errors.nombre ? "err-nombre" : undefined}
                    autoComplete="name"
                  />
                  {errors.nombre && <span id="err-nombre-abogado-claro" className="form-err">{errors.nombre}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-tel">Teléfono*</label>
                  <input
                    id="res-tel-abogado-claro"
                    type="tel"
                    placeholder="+56 9 — — — —"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    aria-invalid={!!errors.telefono}
                    aria-describedby={errors.telefono ? "err-tel" : undefined}
                    className="tabular"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                  {errors.telefono && <span id="err-tel" className="form-err">{errors.telefono}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-materia">Materia*</label>
                  <select
                    id="res-materia"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                    aria-invalid={!!errors.materia}
                    aria-describedby={errors.materia ? "err-materia" : undefined}
                  >
                    <option value="">Selecciona una materia</option>
                    <option value="Familia — Divorcio/pensión">Familia · Divorcio/pensión</option>
                    <option value="Laboral — Despido/tutela">Laboral · Despido/tutela</option>
                    <option value="Civil — Herencia/contratos">Civil · Herencia/contratos</option>
                    <option value="Penal — Defensa">Penal · Defensa</option>
                    <option value="Empresa — Asesoría mensual">Empresa · Asesoría mensual</option>
                    <option value="Otra">Otra</option>
                  </select>
                  {errors.materia && <span id="err-materia" className="form-err">{errors.materia}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="res-mensaje">Mensaje*</label>
                  <textarea
                    id="res-mensaje-abogado-claro"
                    placeholder="Cuéntanos en 2 líneas qué pasó y qué buscas lograr"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
                    rows={3}
                  />
                  {errors.mensaje && <span id="err-mensaje" className="form-err">{errors.mensaje}</span>}
                </div>

                {status === "error" && (
                  <div className="form-err" role="alert" style={{ marginBottom: "8px" }}>
                    {errorMsg}
                  </div>
                )}

                <button type="submit" className="btn-reserva-submit" disabled={status === "loading"} aria-busy={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <span className="btn-spinner" aria-hidden="true" />
                      Enviando…
                    </>
                  ) : (
                    "Solicitar reserva — respuesta 24h"
                  )}
                </button>
                <p className="reserva-nota">Al enviar aceptas contacto por teléfono/WhatsApp. No guardamos tu RUT.</p>
              </form>
            )}
          </div>
          <div className="reserva-datos-col">
            <div className="datos-card">
              <div className="datos-row">
                <span className="datos-label">Teléfono</span>
                <a href="tel:+56982345678" className="datos-val tabular">
                  +56 9 8234 5678
                </a>
              </div>
              <div className="datos-row">
                <span className="datos-label">Correo</span>
                <a href="mailto:contacto@estudio.cl" className="datos-val">
                  contacto@estudio.cl
                </a>
              </div>
              <div className="datos-row">
                <span className="datos-label">Dirección</span>
                <span className="datos-val">Las Condes, Santiago · Presencial y online</span>
              </div>
              <div className="datos-row">
                <span className="datos-label">Horario</span>
                <span className="datos-val">Lun–Vie 9:00–18:30 · Sáb 10:00–13:00</span>
              </div>
              <div className="datos-row">
                <span className="datos-label">RUT</span>
                <span className="datos-val tabular">76.123.456-7</span>
              </div>
              <div className="datos-row">
                <span className="datos-label">Registro</span>
                <span className="datos-val">Colegio de Abogados</span>
              </div>
              <div className="datos-map" aria-label="Mapa decorativo Las Condes">
                <span>Las Condes — Santiago — Online</span>
                <span className="datos-pin" aria-hidden="true">●</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot" role="contentinfo">
      <div className="shell">
        <div className="grid12 foot-grid">
          <div className="foot-marca">
            <p className="foot-logo">ESTUDIO — Estudio Jurídico</p>
            <p className="foot-claim">Defensa clara, a la altura de tu caso.</p>
            <p className="foot-meta">RUT 76.123.456-7 · Registro Colegio de Abogados</p>
          </div>
          <nav className="foot-nav" aria-label="Footer">
            <a href="#materias-abogado-claro">Materias</a>
            <a href="#como-defendemos-abogado-claro">Cómo defendemos</a>
            <a href="#honorarios-abogado-claro">Honorarios</a>
            <a href="#primera-reunion">Primera reunión</a>
          </nav>
          <div className="foot-juris">
            <p>Las Condes · Santiago · Online todo Chile</p>
            <p className="foot-copy">© 2026 ESTUDIO</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyMobile() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero-abogado-claro");
    if (!hero) return;
    const onScroll = () => {
      const h = hero.offsetHeight;
      setShow(window.scrollY > h * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* sticky tel bar — appears after 60vh */}
      <div className={`sticky-tel ${show ? "sticky-tel--show" : ""}`} role="note" aria-label="Teléfono rápido">
        <a href="tel:+56982345678" className="tabular">+56 9 8234 5678</a>
        <span>Respuesta 24h hábiles</span>
      </div>
      {/* CTA persistente bottom */}
      <div className={`sticky-cta ${show ? "sticky-cta--show" : ""}`} role="note" aria-label="Agendar reunión rápido">
        <a href="#reserva" className="sticky-cta-btn">
          Agendar reunión
        </a>
      </div>
    </>
  );
}

export function App() {
  useEffect(() => {
    const img = new Image();
    img.onerror = () => console.warn("[abogado-claro] falta: estudio-hero-9x16.png (móvil)");
    img.src = "/media/estudio-hero-9x16.png";
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Materias />
        <ComoDefendemos />
        <Honorarios />
        <PrimeraReunion />
        <DefensaHoy />
        <Reserva />
      </main>
      <Footer />
      <StickyMobile />
    </>
  );
}
