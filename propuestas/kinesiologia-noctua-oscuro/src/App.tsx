import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#" className="brand" aria-label="NOCTUA inicio">
            <span className="brand-mark">NOCTUA</span>
            <span className="brand-tag">KINESIOLOGÍA · Providencia</span>
          </a>

          <nav className="nav-desktop" aria-label="Principal">
            <a href="#evaluacion-funcional">Evaluación</a>
            <a href="#plan-semanas">Plan semanas</a>
            <a href="#areas-kinesiologia">Áreas</a>
            <a href="#prevision">Previsión</a>
            <a href="#sede-box">Sede</a>
          </nav>

          <div className="header-right">
            <a className="header-phone" href="tel:+56228407730">
              +56 2 2840 7730
            </a>
            <a className="header-cta" href="#reserva">
              Reservar evaluación
            </a>
            <button
              className="hamburger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="drawer-noctua"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="drawer-noctua" className={`drawer ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Menú">
        <div className="wrap drawer-inner">
          <nav className="drawer-nav" aria-label="Móvil">
            <a href="#evaluacion-funcional" onClick={() => setOpen(false)}>
              Evaluación
            </a>
            <a href="#plan-semanas" onClick={() => setOpen(false)}>
              Plan semanas
            </a>
            <a href="#areas-kinesiologia" onClick={() => setOpen(false)}>
              Áreas
            </a>
            <a href="#prevision" onClick={() => setOpen(false)}>
              Previsión
            </a>
            <a href="#sede-box" onClick={() => setOpen(false)}>
              Sede
            </a>
          </nav>
          <a className="drawer-phone" href="tel:+56228407730">
            +56 2 2840 7730
          </a>
          <a className="drawer-cta" href="#reserva" onClick={() => setOpen(false)}>
            Reservar evaluación — $29.900
          </a>
        </div>
      </div>
    </>
  );
}

function HeroMediaWithDetection() {
  const [phase, setPhase] = useState<"video" | "image" | "fallback16">("video");

  useEffect(() => {
    let cancelled = false;
    fetch("media/noctua-hero-loop.mp4", { method: "HEAD" })
      .then((r) => {
        if (!cancelled && !r.ok) setPhase("image");
      })
      .catch(() => {
        if (!cancelled) setPhase("image");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (phase === "video") {
    return (
      <div className="hero-media-inner">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="media/noctua-hero-16x9.png"
          onError={() => setPhase("image")}
        >
          <source src="media/noctua-hero-loop.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  if (phase === "image") {
    return (
      <div className="hero-media-inner">
        <picture>
          <source media="(max-width: 900px)" srcSet="media/noctua-hero-9x16.png" />
          <img
            src="media/noctua-hero-16x9.png"
            alt="Box nocturno vacío a las 22:00 — camilla grafito mate bajo filamento ámbar con banda elástica tensada"
            loading="eager"
            decoding="async"
            onError={() => setPhase("fallback16")}
          />
        </picture>
      </div>
    );
  }

  return <div className="media-falta" data-falta="noctua-hero-16x9.png">Falta media: noctua-hero-16x9.png</div>;
}

function Hero() {
  return (
    <section id="evaluacion-funcional" className="hero" aria-label="Evaluación funcional">
      <div className="hero-copy">
        <p className="kicker">EVALUACIÓN FUNCIONAL — HOY MISMO</p>
        <h1 className="h1">
          <span className="h1-line">Vuelve a moverte bien.</span>
          <span className="h1-line h1-accent">Sin rodeos.</span>
        </h1>
        <p className="sub">
          En NOCTUA mides dolor, rango y fuerza el día 1. Sales con plan por semanas, valores claros y fecha de alta estimada. Box nocturno,
          agenda hasta las 21:30.
        </p>
        <ul className="bullets" aria-label="Beneficios">
          <li>45 min · sin bata · ropa cómoda</li>
          <li>Informe para tu médico en 24 h</li>
          <li>Boleta reembolsable Isapre</li>
        </ul>
        <div className="badges" aria-label="Precios">
          <span className="badge">Desde $29.900 evaluación</span>
          <span className="badge">Sesión desde $28.500</span>
        </div>
        <div className="ctas">
          <a className="btn-primary" href="#reserva">
            Reservar evaluación — $29.900
          </a>
          <a className="btn-secondary" href="#plan-semanas">
            Ver plan por semanas ↓
          </a>
        </div>
        <p className="micro">Valores referenciales; se confirma tras evaluación. Fonasa / Isapre / Particular.</p>
      </div>
      <div className="hero-media" aria-label="Imagen hero box nocturno">
        <HeroMediaWithDetection />
        <noscript>
          <div className="media-falta" data-falta="noctua-hero-16x9.png">
            Falta media: noctua-hero-16x9.png
          </div>
        </noscript>
      </div>
    </section>
  );
}

/* Generic media tile with fallback */
function MediaTile({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [err, setErr] = useState(false);
  if (err) return <div className="media-falta" data-falta={src.split("/").pop()}>Falta media: {src.split("/").pop()}</div>;
  return <img src={src} alt={alt} className={className} style={style} loading="lazy" decoding="async" onError={() => setErr(true)} />;
}

/* #plan-semanas */
function PlanSemanas() {
  return (
    <section id="plan-semanas" className="section plan-semanas" aria-label="Plan por semanas">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">PROTOCOLO CLARO</p>
          <h2 className="h2">Tu recuperación, semana a semana.</h2>
          <p className="section-sub">Nada de &lsquo;ven y vemos&rsquo;. Cada fase tiene objetivo, frecuencia y criterio de avance.</p>
        </div>

        <div className="plan-layout">
          <div className="plan-media">
            <MediaTile src="media/noctua-tile-02-3x4.png" alt="Detalle cajón pliométrico negro mate y rodillo de espuma en box nocturno" className="plan-media-img" />
          </div>

          <div className="plan-track-wrap">
            <div className="plan-track" role="list">
              <article className="plan-panel" role="listitem">
                <h3 className="plan-panel-title">Semana 1–2 · Bajar dolor y recuperar rango</h3>
                <ul className="plan-panel-list">
                  <li>Evaluación funcional completa (dolor EVA, goniometría, fuerza)</li>
                  <li>2–3 sesiones/semana · 45 min</li>
                  <li>Tarea en casa: movilidad 8 min/día</li>
                </ul>
                <p className="plan-criterio">
                  <span className="plan-criterio-label">Criterio de avance:</span> Dolor &lt;3/10 y flexión +15°
                </p>
                <a className="plan-link" href="#reserva?fase=1" onClick={(e) => { const u = new URL(window.location.href); u.searchParams.set("fase","1"); window.history.replaceState({}, "", u.toString()); }}>
                  Reservar desde esta fase →
                </a>
              </article>

              <article className="plan-panel" role="listitem">
                <h3 className="plan-panel-title">Semana 3–6 · Fuerza y control</h3>
                <ul className="plan-panel-list">
                  <li>Progresión con bandas/pesas, control motor</li>
                  <li>2 sesiones/semana + pauta diaria</li>
                  <li>Re-test de fuerza semana 4</li>
                </ul>
                <p className="plan-criterio">
                  <span className="plan-criterio-label">Criterio de avance:</span> Fuerza 80% lado sano
                </p>
                <a className="plan-link" href="#reserva?fase=2" onClick={(e) => { const u = new URL(window.location.href); u.searchParams.set("fase","2"); window.history.replaceState({}, "", u.toString()); }}>
                  Reservar desde esta fase →
                </a>
              </article>

              <article className="plan-panel" role="listitem">
                <h3 className="plan-panel-title">Semana 7–8 · Alta y prevención</h3>
                <ul className="plan-panel-list">
                  <li>Retorno a trote/carga/escritorio según caso</li>
                  <li>1 sesión/semana + plan de mantención</li>
                  <li>Informe de alta para médico</li>
                </ul>
                <p className="plan-criterio">
                  <span className="plan-criterio-label">Criterio de avance:</span> Test funcional superado
                </p>
                <a className="plan-link" href="#reserva?fase=3" onClick={(e) => { const u = new URL(window.location.href); u.searchParams.set("fase","3"); window.history.replaceState({}, "", u.toString()); }}>
                  Reservar desde esta fase →
                </a>
              </article>
            </div>

            <div className="plan-metrics" aria-label="Métricas">
              45 min por sesión · Box 1:1 · Reevaluación cada 4 sesiones · Agenda lun–vie 08:00–21:30, sáb 09:00–13:00
            </div>
            <div className="plan-price" aria-label="Precio sesión">
              Sesión kinesiología 45 min desde $28.500 · Pack 10 desde $265.000
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* #areas-kinesiologia */
function AreasKinesiologia() {
  return (
    <section id="areas-kinesiologia" className="section areas-kinesiologia" aria-label="Áreas kinesiología">
      <div className="wrap areas-grid">
        <div className="areas-sticky">
          <p className="areas-label">ÁREAS</p>
          <h2 className="h2 areas-h2">Lo que tratamos. Sin humo.</h2>
          <div className="areas-media">
            <MediaTile src="media/noctua-tile-01-1x1.png" alt="Bodegón de bandas elásticas, pesa rusa y timer sobre caucho negro" className="areas-media-img" />
          </div>
        </div>

        <div className="areas-list-wrap">
          <ul className="areas-list" role="list">
            <li className="area-row" role="listitem">
              <div className="area-main">
                <span className="area-name">Traumatología y deporte</span>
                <span className="area-desc">esguince, ligamento, tendón, post-quirúrgico</span>
              </div>
              <div className="area-meta">
                <span className="area-price">desde $28.500/sesión</span>
                <span className="area-tag">Alta en 6–8 sem promedio</span>
              </div>
            </li>
            <li className="area-row" role="listitem">
              <div className="area-main">
                <span className="area-name">Columna y dolor persistente</span>
                <span className="area-desc">lumbago, cervical, ciática</span>
              </div>
              <div className="area-meta">
                <span className="area-price">desde $28.500/sesión</span>
                <span className="area-tag">Plan 8–12 sesiones</span>
              </div>
            </li>
            <li className="area-row" role="listitem">
              <div className="area-main">
                <span className="area-name">Neuro-rehabilitación</span>
                <span className="area-desc">ACV, equilibrio, marcha</span>
              </div>
              <div className="area-meta">
                <span className="area-price">desde $32.000/sesión</span>
                <span className="area-tag">Sesión 60 min</span>
              </div>
            </li>
            <li className="area-row" role="listitem">
              <div className="area-main">
                <span className="area-name">Respiratoria adulto</span>
                <span className="area-desc">post-cuadro, higiene bronquial</span>
              </div>
              <div className="area-meta">
                <span className="area-price">desde $32.000/sesión</span>
                <span className="area-tag">Domicilio RM</span>
              </div>
            </li>
            <li className="area-row" role="listitem">
              <div className="area-main">
                <span className="area-name">Prevención y retorno</span>
                <span className="area-desc">running, fuerza, escritorio</span>
              </div>
              <div className="area-meta">
                <span className="area-price">desde $28.500/sesión</span>
                <span className="area-tag">Evaluación + pauta</span>
              </div>
            </li>
          </ul>
          <p className="areas-note">Si no ves tu caso, escríbenos. Te decimos en 2 horas si es kinesiología o derivación.</p>
        </div>
      </div>
    </section>
  );
}

/* #prevision */
function Prevision() {
  return (
    <section id="prevision" className="section prevision" aria-label="Precios y previsión">
      <div className="wrap">
        <div className="prevision-head">
          <h2 className="h2">Precios a la vista. Sin sorpresas.</h2>
          <p className="section-sub">Pagas por sesión o pack. Boleta para reembolso Isapre. Fonasa según tramo (consultar).</p>
        </div>

        <div className="prevision-layout">
          <div className="prevision-table-wrap">
            <div className="prevision-table-head">
              <div className="prevision-icon">
                <MediaTile src="media/noctua-tile-03-1x1.png" alt="Goniómetro metálico y cinta métrica" className="prevision-icon-img" />
              </div>
              <span className="prevision-table-title">Arancel referencial</span>
            </div>
            <table className="prevision-table" aria-label="Tabla de aranceles">
              <thead>
                <tr>
                  <th>Prestación</th>
                  <th>Duración</th>
                  <th>Desde CLP</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Evaluación funcional</td>
                  <td>45 min</td>
                  <td>$29.900</td>
                  <td>Incluye informe</td>
                </tr>
                <tr>
                  <td>Sesión kinesiología</td>
                  <td>45 min</td>
                  <td>$28.500</td>
                  <td>Box 1:1</td>
                </tr>
                <tr>
                  <td>Sesión neuro / respiratoria</td>
                  <td>60 min</td>
                  <td>$32.000</td>
                  <td>Evaluación distinta</td>
                </tr>
                <tr>
                  <td>Pack 10 sesiones</td>
                  <td>45 min c/u</td>
                  <td>$265.000</td>
                  <td>$26.500 c/u, vence 90 días</td>
                </tr>
                <tr>
                  <td>Kinesiología a domicilio RM</td>
                  <td>50 min</td>
                  <td>$42.000</td>
                  <td>Radio Providencia 8km, +$5.000 fuera</td>
                </tr>
              </tbody>
            </table>
            <p className="prevision-nota">Valores referenciales; se confirma tras evaluación. No incluye insumo ortopédico si se indica. Pack no reembolsable parcial.</p>
          </div>

          <aside className="prevision-card" aria-label="Previsión">
            <h3 className="prevision-card-title">¿Fonasa / Isapre?</h3>
            <ul className="prevision-card-list">
              <li>Fonasa: bono nivel 3 según tramo · te orientamos</li>
              <li>Isapre: boleta reembolsable 40–70% según plan</li>
              <li>Particular: Webpay / transferencia / 3 cuotas sin interés en pack</li>
            </ul>
            <a className="prevision-cta" href="https://wa.me/56900000000?text=Hola%20NOCTUA%2C%20quiero%20consultar%20mi%20cobertura%20Fonasa%2FIsapre" target="_blank" rel="noopener noreferrer">
              Consultar mi cobertura por WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* #sede-box */
function SedeBox() {
  return (
    <section id="sede-box" className="section sede-box" aria-label="Sede box nocturno">
      <div className="wrap sede-layout">
        <div className="sede-copy">
          <p className="kicker">SEDE PROVIDENCIA — BOX NOCTURNO</p>
          <h2 className="h2">Un box que no parece clínica.</h2>
          <p className="sede-text">
            Luz cálida, piso de caucho, camilla grafito y riel visto. Nada de pasillo blanco con parlantes. Entrada directa, sin espera en sala
            llena. Agenda extendida para quien trabaja hasta tarde.
          </p>
          <ul className="sede-datos" aria-label="Datos sede">
            <li>Av. Providencia 1xxx, a 3 min Metro Los Leones</li>
            <li>Lun–vie 08:00–21:30 · Sáb 09:00–13:00</li>
            <li>Estacionamiento bici/auto cercano</li>
          </ul>
          <div className="sede-thumbs">
            <MediaTile src="media/noctua-tile-04-4x3.png" alt="Pasillo de acceso nocturno al box, puerta grafito entreabierta" className="sede-thumb" />
          </div>
          <p className="sede-micro">Box 1:1, sin box compartido. 4,9/5 en 87 atenciones registradas (últimos 6 meses, sin nombres ni fotos).</p>
        </div>
        <div className="sede-media" aria-label="Interior box nocturno">
          <MediaTile src="media/noctua-interior-16x9.png" alt="Interior 16:9 del box completo vacío, camilla grafito, riel de techo visto, pared con repisa de bandas, filamento ámbar" className="sede-media-img" />
        </div>
      </div>
    </section>
  );
}

/* #reserva */
function Reserva() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [motivo, setMotivo] = useState("");
  const [previsionVal, setPrevisionVal] = useState("");
  const [fase, setFase] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // hydrate from query ?fase=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const f = params.get("fase");
    if (f) {
      const map: Record<string, string> = { "1": "Semana 1–2", "2": "Semana 3–6", "3": "Alta", "Evaluación": "Evaluación", "Semana 1–2": "Semana 1–2", "Semana 3–6": "Semana 3–6", "Alta": "Alta" };
      if (map[f]) setFase(map[f]);
    }
    // also listen to hash change with query-like
    const hash = window.location.hash;
    if (hash.includes("fase=")) {
      try {
        const q = new URLSearchParams(hash.split("?")[1] || "");
        const hf = q.get("fase");
        if (hf) {
          const map2: Record<string, string> = { "1": "Semana 1–2", "2": "Semana 3–6", "3": "Alta" };
          if (map2[hf]) setFase(map2[hf]);
        }
      } catch {}
    }
  }, []);

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!nombre.trim() || nombre.trim().length < 2) e.nombre = "Ingresa tu nombre (mín. 2 caracteres)";
    if (!whatsapp.trim()) e.whatsapp = "Ingresa tu WhatsApp";
    else if (!/^\+56[.\s]?9[.\s]?[0-9]{4}[.\s]?[0-9]{4}$/.test(whatsapp.trim())) e.whatsapp = "Formato: +56 9 1234 5678";
    if (!motivo) e.motivo = "Selecciona un motivo";
    if (!previsionVal) e.prevision = "Selecciona previsión";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      const payload = { nombre: nombre.trim(), whatsapp: whatsapp.trim(), motivo, prevision: previsionVal, fase: fase || "Evaluación", mensaje: mensaje.trim(), fecha: new Date().toISOString() };
      try {
        localStorage.setItem("noctua_reserva", JSON.stringify(payload));
      } catch {}
      const text = `Hola NOCTUA, quiero reservar evaluación. Nombre: ${payload.nombre}, WhatsApp: ${payload.whatsapp}, Motivo: ${payload.motivo}, Previsión: ${payload.prevision}, Fase: ${payload.fase}, Mensaje: ${payload.mensaje || "—"}`;
      const url = `https://wa.me/56900000000?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
      setLoading(false);
      setSuccess(true);
    }, 700);
  }

  return (
    <section id="reserva" className="section reserva" aria-label="Reserva evaluación">
      <div className="wrap reserva-layout">
        <div className="reserva-form-wrap">
          <h2 className="h2">Reserva tu evaluación.</h2>
          <p className="section-sub">Hoy mismo si hay cupo. Te confirmamos por WhatsApp en 30 min hábil.</p>

          <form className="reserva-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="r-nombre">Nombre *</label>
              <input id="r-nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" autoComplete="name" />
              {errors.nombre && <span className="form-error">{errors.nombre}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="r-wa">WhatsApp *</label>
              <input id="r-wa" name="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+56 9 1234 5678" inputMode="tel" autoComplete="tel" />
              {errors.whatsapp && <span className="form-error">{errors.whatsapp}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="r-motivo">Motivo *</label>
              <select id="r-motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)}>
                <option value="">Selecciona</option>
                <option value="Dolor agudo">Dolor agudo</option>
                <option value="Post-quirúrgico">Post-quirúrgico</option>
                <option value="Columna">Columna</option>
                <option value="Deporte">Deporte</option>
                <option value="Neuro">Neuro</option>
                <option value="Respiratorio">Respiratorio</option>
                <option value="Prevención">Prevención</option>
              </select>
              {errors.motivo && <span className="form-error">{errors.motivo}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="r-prevision">Previsión *</label>
              <select id="r-prevision" value={previsionVal} onChange={(e) => setPrevisionVal(e.target.value)}>
                <option value="">Selecciona</option>
                <option value="Fonasa">Fonasa</option>
                <option value="Isapre">Isapre</option>
                <option value="Particular">Particular</option>
                <option value="No sé">No sé</option>
              </select>
              {errors.prevision && <span className="form-error">{errors.prevision}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="r-fase">Fase</label>
              <select id="r-fase" value={fase} onChange={(e) => setFase(e.target.value)}>
                <option value="">Evaluación</option>
                <option value="Semana 1–2">Semana 1–2</option>
                <option value="Semana 3–6">Semana 3–6</option>
                <option value="Alta">Alta</option>
              </select>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="r-mensaje">Mensaje</label>
              <textarea id="r-mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Hace cuánto duele, qué te limita hoy" rows={3} />
            </div>

            <button className="btn-submit" type="submit" disabled={loading} aria-live="polite">
              {loading ? <span className="spinner" aria-label="Cargando" /> : null}
              <span>{loading ? "Enviando..." : "Reservar por WhatsApp — $29.900 evaluación"}</span>
            </button>

            {success && <p className="form-success" role="status">¡Listo! Te hablamos en 30 min. Quedó guardado en este dispositivo.</p>}

            <p className="form-fallback">
              o escríbenos a <a href="mailto:hola@noctua.cl">hola@noctua.cl</a>
            </p>
          </form>
        </div>

        <div className="reserva-proof">
          <div className="proof-media">
            <MediaTile src="media/noctua-proof-16x9.png" alt="Detalle equipamiento calibrado: bandas, pesa, cronómetro y ficha anclada" className="proof-img" />
          </div>
          <p className="proof-caption">Equipo calibrado, sin operador en foto. Sesión 1:1.</p>
          <p className="trust-row">RUT 76.xxx.xxx-x · Registro MINSAL al día · Boleta electrónica · Protocolos 2024</p>
        </div>
      </div>
    </section>
  );
}

function StickyBar() {
  return (
    <div className="sticky-bar" aria-label="Barra reservar móvil">
      <a className="sticky-phone" href="tel:+56228407730">+56 2 2840 7730</a>
      <a className="sticky-cta" href="#reserva">Reservar evaluación — $29.900</a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer" aria-label="Pie de página">
      <div className="wrap footer-grid">
        <div className="footer-left">
          <span className="footer-brand">NOCTUA</span>
          <span className="footer-sub">Kinesiología — Providencia</span>
          <span className="footer-copy">© 2026 NOCTUA. No reemplazamos indicación médica.</span>
        </div>
        <nav className="footer-center" aria-label="Legal">
          <a href="#">Privacidad</a>
          <span className="footer-dot">·</span>
          <a href="#">Términos</a>
          <span className="footer-dot">·</span>
          <a href="#prevision">Previsión</a>
        </nav>
        <div className="footer-right">
          <a href="tel:+56228407730">+56 2 2840 7730</a>
          <a href="mailto:hola@noctua.cl">hola@noctua.cl</a>
          <a href="https://wa.me/56900000000?text=Hola%20NOCTUA" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PlanSemanas />
        <AreasKinesiologia />
        <Prevision />
        <SedeBox />
        <Reserva />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
