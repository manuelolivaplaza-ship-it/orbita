import { useEffect, useState, useRef } from "react";

const HERO_DESKTOP = "/media/alba-hero-16x9.png";
const HERO_MOBILE = "/media/alba-hero-9x16.png";
const HERO_VIDEO = "/media/alba-hero-loop.mp4";

function useCompact() {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return compact;
}

function useMediaExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => { if (!cancelled) setExists(true); };
    img.onerror = () => { if (!cancelled) { setExists(false); console.warn(`Falta media — no usar stock: ${src.split("/").pop()}`); } };
    img.src = src;
    return () => { cancelled = true; };
  }, [src]);
  return exists;
}

function useVideoExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((r) => { if (!cancelled) setExists(r.ok); })
      .catch(() => { if (!cancelled) setExists(false); });
    return () => { cancelled = true; };
  }, [src]);
  return exists;
}

function MediaImg({
  src,
  alt,
  aspect,
  objectPosition,
  fallbackAspect,
}: {
  src: string;
  alt: string;
  aspect: string;
  objectPosition?: string;
  fallbackAspect?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="media-falta" data-falta={src.split("/").pop()} style={fallbackAspect ? { aspectRatio: fallbackAspect } : { aspectRatio: aspect }}>
        Falta media — no usar stock
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: aspect, objectPosition }}
      onError={() => {
        setFailed(true);
        console.warn(`Falta media — no usar stock: ${src.split("/").pop()}`);
      }}
    />
  );
}

function HeroMedia() {
  const dExists = useMediaExists(HERO_DESKTOP);
  const mExists = useMediaExists(HERO_MOBILE);
  const vExists = useVideoExists(HERO_VIDEO);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = vExists === true && !videoFailed;
  const [imgFallback, setImgFallback] = useState(false);

  useEffect(() => {
    if (dExists === false) console.warn("Falta media — no usar stock: alba-hero-16x9.png");
    if (mExists === false) console.warn("Falta media — no usar stock: alba-hero-9x16.png");
  }, [dExists, mExists]);

  const desktopMissing = dExists === false;
  const mobileMissing = mExists === false;

  if (desktopMissing) {
    return (
      <div className="hero__media-wrap">
        <div className="media-falta" data-falta="alba-hero-16x9.png">
          Falta media — no usar stock
        </div>
        {mobileMissing && (
          <div className="media-falta media-falta--9x16" data-falta="alba-hero-9x16.png" style={{ marginTop: 12 }}>
            Falta media — no usar stock
          </div>
        )}
        <p className="caption">Pabellón Reformer · luz mañana 08:30 · Ñuñoa</p>
      </div>
    );
  }

  return (
    <div className="hero__media-wrap">
      <div className="hero__media">
        {showVideo && (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_DESKTOP}
            onError={() => setVideoFailed(true)}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}

        <picture style={showVideo ? { opacity: 0 } : undefined}>
          <source srcSet={HERO_MOBILE} media="(max-width: 768px)" />
          <img
            src={HERO_DESKTOP}
            alt="Pabellón ALBA vacío con cinco reformers de lenga alineados bajo lucernario, luz mañana rasante"
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => {
              if (!imgFallback) {
                setImgFallback(true);
                console.warn("Falta media — no usar stock: alba-hero-16x9.png");
              }
            }}
          />
        </picture>
        {imgFallback && (
          <div className="media-falta" data-falta="alba-hero-16x9.png" style={{ position: "absolute", inset: 0 }}>
            Falta media — no usar stock
          </div>
        )}

        {mobileMissing && (
          <span data-falta="alba-hero-9x16.png" style={{ display: "none" }} aria-hidden="true">
            Falta media — no usar stock: alba-hero-9x16.png
          </span>
        )}
      </div>

      <p className="caption">Pabellón Reformer · luz mañana 08:30 · Ñuñoa</p>
    </div>
  );
}

/* === Sticky CTA móvil === */
function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("portada-pabellon");
    if (!hero) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // visible cuando hero ya no es visible >60% (40% scroll)
        const ratio = e.intersectionRatio;
        setVisible(ratio < 0.6);
      },
      { threshold: [0, 0.6, 1] }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (visible) document.body.classList.add("has-sticky-cta");
    else document.body.classList.remove("has-sticky-cta");
    return () => document.body.classList.remove("has-sticky-cta");
  }, [visible]);
  if (!visible) return null;
  return (
    <div className="sticky-cta" role="region" aria-label="Reservar">
      <a href="#visita-alba" className="btn-primary sticky-cta__btn">Reservar clase de prueba — $15.000</a>
    </div>
  );
}

/* === Form Visita === */
function FormVisita() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [horario, setHorario] = useState("");
  const [detalle, setDetalle] = useState("");
  const [whatsapp, setWhatsapp] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre.";
    const telRegex = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
    if (!telefono.trim()) e.telefono = "Ingresa tu teléfono.";
    else if (!telRegex.test(telefono.trim())) e.telefono = "Usa formato +56 9 1234 5678.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Revisa tu email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      try {
        localStorage.setItem("alba_visita", JSON.stringify({ nombre, telefono, email, experiencia, horario, detalle, whatsapp, ts: Date.now() }));
      } catch { /* ignore */ }
      const msg = `Hola ALBA, quiero reservar clase de prueba ${encodeURIComponent(nombre)} - Tel ${encodeURIComponent(telefono)}`;
      // intentar WhatsApp, fallback mailto si bloqueado
      const wa = `https://wa.me/56981234567?text=Hola%20ALBA%2C%20quiero%20reservar%20clase%20de%20prueba%20${encodeURIComponent(nombre)}%20${msg}`;
      // open wa
      try {
        window.open(wa, "_blank");
      } catch {
        window.location.href = `mailto:hola@alba.cl?subject=Reserva%20clase%20de%20prueba&body=${msg}`;
      }
    }, 800);
  };

  if (success) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__check" aria-hidden="true">✓</span>
        <p>Te escribimos hoy · revisa tu WhatsApp</p>
      </div>
    );
  }

  return (
    <form id="alba-visita-form" noValidate onSubmit={onSubmit} className="form-visita">
      <div className="field">
        <label htmlFor="alba-nombre">Nombre *</label>
        <input id="alba-nombre" name="alba-nombre" type="text" required placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        {errors.nombre && <span className="field-error">{errors.nombre}</span>}
      </div>
      <div className="field">
        <label htmlFor="alba-telefono">Teléfono *</label>
        <input id="alba-telefono" name="alba-telefono" type="tel" required placeholder="+56 9 1234 5678" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        {errors.telefono && <span className="field-error">{errors.telefono}</span>}
      </div>
      <div className="field">
        <label htmlFor="alba-email">Email</label>
        <input id="alba-email" name="alba-email" type="email" placeholder="hola@email.cl" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="alba-experiencia">Experiencia</label>
        <select id="alba-experiencia" name="alba-experiencia" value={experiencia} onChange={(e) => setExperiencia(e.target.value)}>
          <option value="">Selecciona</option>
          <option>Primera vez</option>
          <option>Ya hice Pilates</option>
          <option>Derivación kine/médica</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="alba-horario">Horario preferido</label>
        <select id="alba-horario" name="alba-horario" value={horario} onChange={(e) => setHorario(e.target.value)}>
          <option value="">Selecciona</option>
          <option>Mañana (07–14)</option>
          <option>Tarde (14–21)</option>
          <option>Fin de semana</option>
          <option>Indiferente</option>
        </select>
      </div>
      <div className="field field--full">
        <label htmlFor="alba-detalle">Detalle</label>
        <textarea id="alba-detalle" name="alba-detalle" placeholder="Lesión o preferencia (opcional, 1 línea)" rows={3} value={detalle} onChange={(e) => setDetalle(e.target.value)} />
      </div>
      <label className="checkbox">
        <input type="checkbox" checked={whatsapp} onChange={(e) => setWhatsapp(e.target.checked)} />
        <span>Acepto que me contacten por WhatsApp</span>
      </label>
      <button type="submit" className="btn-primary form-submit" disabled={loading}>
        {loading ? "Enviando…" : "Reservar clase de prueba — $15.000"}
      </button>
    </form>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const compact = useCompact();
  const visitaImgRef = useRef<HTMLImageElement>(null);

  return (
    <>
      <header className={`header ${compact ? "header--compact" : ""}`}>
        <div className="header__inner">
          <a href="#portada-pabellon" className="logo-wrap" aria-label="ALBA Inicio">
            <span className="logo">ALBA</span>
            <span className="wordmark">PILATES STUDIO · ÑUÑOA</span>
          </a>

          <nav className="nav" aria-label="Principal">
            <a href="#salas">Salas</a>
            <a href="#grilla-semanal">Horarios</a>
            <a href="#planes-horario">Planes</a>
            <a href="#pase-diario">Pase</a>
          </nav>

          <a href="tel:+56981234567" className="tel">+56 9 8123 4567</a>
          <a href="tel:+56981234567" className="tel-icon" aria-label="Llamar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.27.39 2.5.8 3.68a2 2 0 0 1-.57 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.57c1.18.41 2.41.68 3.68.8A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          <a href="#visita-alba" className="cta">Reservar clase de prueba</a>
          <a href="#visita-alba" className="cta cta--short">Reservar</a>

          <button
            className="hamburger"
            aria-label="Menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span style={menuOpen ? { transform: "translateY(6px) rotate(45deg)" } : undefined} />
            <span style={menuOpen ? { opacity: 0 } : undefined} />
            <span style={menuOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined} />
          </button>
        </div>
        <div className={`drawer ${menuOpen ? "drawer--open" : ""}`}>
          <nav aria-label="Menú móvil">
            <a href="#salas" onClick={() => setMenuOpen(false)}>Salas</a>
            <a href="#grilla-semanal" onClick={() => setMenuOpen(false)}>Horarios</a>
            <a href="#planes-horario" onClick={() => setMenuOpen(false)}>Planes</a>
            <a href="#pase-diario" onClick={() => setMenuOpen(false)}>Pase</a>
            <a href="tel:+56981234567" onClick={() => setMenuOpen(false)} style={{ color: "var(--accent)", fontWeight: 700 }}>+56 9 8123 4567</a>
            <a href="#visita-alba" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ marginTop: 8, textAlign: "center" }}>Reservar clase de prueba</a>
          </nav>
        </div>
      </header>

      <section id="portada-pabellon" className="hero">
        <div className="hero__inner">
          <div className="hero__left">
            <p className="kicker">PILATES REFORMER · ÑUÑOA · DESDE 2019</p>
            <h1 className="hero__h1">Pilates con luz, profesores que miran y planes que calzan.</h1>
            <p className="sub">Reformers alineados, grupos de 6, corrección en cada repetición. Sin música a todo volumen. Pagas por clases reales al mes, no por promesas.</p>
            <div className="hero__ctas">
              <a href="#visita-alba" className="btn-primary">Reservar clase de prueba — $15.000</a>
              <a href="#grilla-semanal" className="btn-ghost">Ver horarios</a>
            </div>
            <ul className="banda">
              <li>Grupos máx. 6</li>
              <li>Profesores certificados</li>
              <li>Boleta reembolsable</li>
            </ul>
            <p className="micro">La clase de prueba se abona a tu primer plan si te quedas. Si no, te vas con tu evaluación postural por escrito.</p>
          </div>
          <div className="hero__right">
            <HeroMedia />
          </div>
        </div>
      </section>

      {/* ========== #salas ========== */}
      <section id="salas" className="section salas">
        <div className="section__inner">
          <div className="section__header">
            <p className="kicker" style={{ color: "var(--accent)" }}>EL PABELLÓN</p>
            <h2>Cuatro salas. Una sola forma de enseñar.</h2>
            <p className="section__intro">Madera de lenga, luz natural y reformers que no se amontonan. Cada sala tiene su uso y su aforo a la vista. El precio “desde” está en la ficha, no escondido.</p>
          </div>
          <div className="salas__grid">
            <article className="sala">
              <div className="sala__media" style={{ aspectRatio: "1 / 1" }}>
                <MediaImg src="/media/alba-tile-01-1x1.png" alt="Reformer de lenga y ecocuero crema, carril y muelles visibles" aspect="1 / 1" />
              </div>
              <h3>Reformer — 5 camillas</h3>
              <p className="sala__desc">Fila perfecta bajo lucernario. Corrección individual en grupos de 5.</p>
              <p className="meta"><span>Cap. 5 · 55 min</span><span className="precio">desde $135.000/mes (8 clases)</span></p>
            </article>
            <article className="sala">
              <div className="sala__media" style={{ aspectRatio: "3 / 4" }}>
                <MediaImg src="/media/alba-tile-02-3x4.png" alt="Tres mats gris piedra enrollados contra muro lino, aro y banda ordenados" aspect="3 / 4" />
              </div>
              <h3>Mat — 6 mats</h3>
              <p className="sala__desc">Suelo de lenga encerada, props a la vista. Respiración y control.</p>
              <p className="meta"><span>Cap. 6 · 55 min</span><span className="precio">desde $112.000/mes (8 clases mañana)</span></p>
            </article>
            <article className="sala">
              <div className="sala__media" style={{ aspectRatio: "1 / 1" }}>
                <MediaImg src="/media/alba-tile-03-1x1.png" alt="Barra corrida de lenga con espejo sin marco" aspect="1 / 1" />
              </div>
              <h3>Barre — 8 cupos</h3>
              <p className="sala__desc">Barra corrida, espejo sin marco, luz lateral. Pierna y postura.</p>
              <p className="meta"><span>Cap. 8 · 50 min</span><span className="precio">incluida en planes Full</span></p>
            </article>
            <article className="sala">
              <div className="sala__media" style={{ aspectRatio: "4 / 3" }}>
                <MediaImg src="/media/alba-interior-16x9.png" alt="Sala funcional suave vacía con rack de pesas livianas" aspect="4 / 3" objectPosition="center" />
              </div>
              <h3>Funcional suave — 6 cupos</h3>
              <p className="sala__desc">Peso libre liviano, sin gritos. Para días sin reformer.</p>
              <p className="meta"><span>Cap. 6 · 45 min</span><span className="precio">pase diario $12.900</span></p>
            </article>
          </div>
          <p className="salas__nota">Aforo real, no ‘hasta’. Si dice 5, son 5 reformers. Sin lista de espera fantasma.</p>
          <p className="salas__prueba">+6 años en Ñuñoa · 4 salas · 11 profesores · 6 alumnos máx.</p>
        </div>
      </section>

      {/* ========== #grilla-semanal ========== */}
      <section id="grilla-semanal" className="section grilla-seccion">
        <div className="section__inner">
          <div className="section__header">
            <p className="kicker" style={{ color: "var(--accent)" }}>HORARIOS REALES</p>
            <h2>La semana a la vista. Elige y reserva.</h2>
            <p className="section__intro">Grilla de lunes a sábado, 07:00 a 21:00. Cada celda muestra cupos reales. ‘Ahora’ y ‘Próxima’ se actualizan sin recargar.</p>
          </div>
          <div className="grilla__layout">
            <div className="grilla__main">
              {/* Desktop tabla */}
              <div className="grilla__table-wrap" role="region" aria-label="Grilla horaria">
                <table className="grilla">
                  <thead>
                    <tr>
                      <th scope="col" className="grilla__th--hora"></th>
                      <th scope="col">LUN</th>
                      <th scope="col">MAR</th>
                      <th scope="col">MIÉ</th>
                      <th scope="col">JUE</th>
                      <th scope="col">VIE</th>
                      <th scope="col">SÁB</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">07:00</th>
                      <td><span className="celda">Mat · Vale · 3/6</span></td>
                      <td><span className="celda">Reformer · Mati · 4/5</span></td>
                      <td><span className="celda">Mat · Vale · 2/6</span></td>
                      <td><span className="celda">Barre · Sofi · 5/8</span></td>
                      <td><span className="celda">Reformer · Mati · 2/5</span></td>
                      <td><span className="celda celda--vacia">—</span></td>
                    </tr>
                    <tr>
                      <th scope="row">08:30</th>
                      <td><span className="celda celda--completo">Reformer · Mati · 5/5 <span className="celda__estado">Completo <span className="dot"></span></span></span></td>
                      <td><span className="celda">Mat · Vale · 4/6</span></td>
                      <td><span className="celda">Reformer · Javi · 5/5 <span className="celda__estado">Completo <span className="dot"></span></span></span></td>
                      <td><span className="celda">Mat · Vale · 5/6</span></td>
                      <td><span className="celda">Barre · Sofi · 7/8</span></td>
                      <td><span className="celda">Mat · Vale · 4/6</span></td>
                    </tr>
                    <tr>
                      <th scope="row">10:00</th>
                      <td><span className="celda">Barre · Sofi · 6/8</span></td>
                      <td><span className="celda">Reformer · Mati · 3/5</span></td>
                      <td><span className="celda">Funcional suave · Cami · 5/6</span></td>
                      <td><span className="celda">Reformer · Mati · 4/5</span></td>
                      <td><span className="celda">Mat · Vale · 3/6</span></td>
                      <td><span className="celda">Reformer · Javi · 4/5</span></td>
                    </tr>
                    <tr>
                      <th scope="row">12:00</th>
                      <td><span className="celda">Funcional suave · Cami · 4/6</span></td>
                      <td><span className="celda">Barre · Sofi · 6/8</span></td>
                      <td><span className="celda">Mat · Vale · 3/6</span></td>
                      <td><span className="celda">Funcional suave · Cami · 3/6</span></td>
                      <td><span className="celda">Reformer · Javi · 5/5 <span className="celda__estado">Completo <span className="dot"></span></span></span></td>
                      <td><span className="celda">Barre · Sofi · 6/8</span></td>
                    </tr>
                    <tr>
                      <th scope="row">14:00</th>
                      <td><span className="celda celda--vacia">—</span></td>
                      <td><span className="celda">Funcional suave · Cami · 2/6</span></td>
                      <td><span className="celda celda--vacia">—</span></td>
                      <td><span className="celda">Mat · Vale · 2/6</span></td>
                      <td><span className="celda">Funcional suave · Cami · 3/6</span></td>
                      <td><span className="celda celda--vacia">—</span></td>
                    </tr>
                    <tr>
                      <th scope="row">17:30</th>
                      <td><span className="celda celda--ahora"><span className="label-ahora">AHORA</span> Reformer · Javi · 5/5</span></td>
                      <td><span className="celda">Reformer · Mati · 4/5</span></td>
                      <td><span className="celda">Barre · Sofi · 6/8</span></td>
                      <td><span className="celda">Reformer · Javi · 5/5 <span className="celda__estado">Completo <span className="dot"></span></span></span></td>
                      <td><span className="celda">Mat · Vale · 2/6</span></td>
                      <td><span className="celda celda--vacia">—</span></td>
                    </tr>
                    <tr>
                      <th scope="row">19:00</th>
                      <td><span className="celda celda--proxima"><span className="label-proxima">PRÓXIMA</span> Reformer · Mati · 3/5</span></td>
                      <td><span className="celda">Mat · Vale · 5/6</span></td>
                      <td><span className="celda">Reformer · Mati · 4/5</span></td>
                      <td><span className="celda">Mat · Vale · 2/6</span></td>
                      <td><span className="celda">Barre · Sofi · 5/8</span></td>
                      <td><span className="celda celda--vacia">—</span></td>
                    </tr>
                    <tr>
                      <th scope="row">20:30</th>
                      <td><span className="celda">Mat · Vale · 3/6</span></td>
                      <td><span className="celda">Funcional suave · Cami · 4/6</span></td>
                      <td><span className="celda">Reformer · Mati · 3/5</span></td>
                      <td><span className="celda">Barre · Sofi · 4/8</span></td>
                      <td><span className="celda">Reformer · Mati · 5/5</span></td>
                      <td><span className="celda celda--vacia">—</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Mobile acordeón */}
              <div className="grilla__accordion">
                {[
                  { dia: "LUNES", rows: ["07:00 · Mat · Vale · 3/6", "08:30 · Reformer · Mati · 5/5 Completo", "10:00 · Barre · Sofi · 6/8", "17:30 · Reformer · Javi · 5/5 — AHORA", "19:00 · Reformer · Mati · 3/5 — PRÓXIMA", "20:30 · Mat · Vale · 3/6"] },
                  { dia: "MARTES", rows: ["07:00 · Reformer · Mati · 4/5", "08:30 · Mat · Vale · 4/6", "10:00 · Reformer · Mati · 3/5", "17:30 · Reformer · Mati · 4/5", "19:00 · Mat · Vale · 5/6"] },
                  { dia: "MIÉRCOLES", rows: ["08:30 · Reformer · Javi · 5/5 Completo", "10:00 · Funcional suave · Cami · 5/6", "12:00 · Mat · Vale · 3/6", "19:00 · Reformer · Mati · 4/5"] },
                  { dia: "JUEVES", rows: ["08:30 · Mat · Vale · 5/6", "12:00 · Funcional suave · Cami · 3/6", "17:30 · Reformer · Javi · 5/5 Completo", "19:00 · Mat · Vale · 2/6"] },
                  { dia: "VIERNES", rows: ["08:30 · Barre · Sofi · 7/8", "12:00 · Reformer · Javi · 5/5 Completo", "19:00 · Barre · Sofi · 5/8", "20:30 · Reformer · Mati · 5/5"] },
                  { dia: "SÁBADO", rows: ["08:30 · Mat · Vale · 4/6", "10:00 · Reformer · Javi · 4/5", "12:00 · Barre · Sofi · 6/8"] },
                ].map((d) => (
                  <details key={d.dia} className="grilla-acc">
                    <summary>{d.dia}</summary>
                    <div className="grilla-acc__body">
                      {d.rows.map((r) => (
                        <div key={r} className={`grilla-acc__cell ${r.includes("Completo") ? "grilla-acc__cell--completo" : ""} ${r.includes("AHORA") ? "grilla-acc__cell--ahora" : ""} ${r.includes("PRÓXIMA") ? "grilla-acc__cell--proxima" : ""}`}>
                          {r.includes("Completo") ? <span className="dot" style={{ marginRight: 6 }}></span> : null}
                          {r.includes("AHORA") ? <span className="label-ahora" style={{ marginRight: 6 }}>AHORA</span> : null}
                          {r.includes("PRÓXIMA") ? <span className="label-proxima" style={{ marginRight: 6 }}>PRÓXIMA</span> : null}
                          {r}
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
            <aside className="grilla__aside">
              <div className="card-aside">
                <h3>¿Primera vez?</h3>
                <p>Prueba una clase suelta o la evaluación con clase. Te recomendamos 2x semana para notar cambio en un mes.</p>
                <a href="#visita-alba" className="btn-primary" style={{ width: "100%", marginTop: 14 }}>Reservar clase de prueba $15.000</a>
                <p className="card-aside__nota">Cupos en vivo al 14:30. Si ves ‘Completo’, te avisamos por WhatsApp si se libera.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========== #planes-horario ========== */}
      <section id="planes-horario" className="section planes">
        <div className="section__inner">
          <div className="section__header">
            <p className="kicker" style={{ color: "var(--accent)" }}>PLANES MENSUALES</p>
            <h2>Pagas por clases, no por promesas</h2>
            <p className="section__intro">Planes por clases al mes, no ‘free/pro/enterprise’. El valor ‘desde’ es el Mañana; Full suma tardes. Sin matrícula si te inscribes en la visita.</p>
          </div>
          <div className="planes__layout">
            <div className="planes__main">
              <table className="arancel" aria-label="Planes mensuales">
                <thead className="sr-only">
                  <tr><th>Plan</th><th>Precio</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="arancel__info">
                      <span className="arancel__nombre">Mañana 8</span>
                      <span className="arancel__detalle">8 clases · Lun–Sáb hasta 14:00</span>
                      <span className="arancel__hover">8 créditos · vence en 30 días · 1 recuperación</span>
                    </td>
                    <td className="arancel__precio"><span className="desde">desde</span> $112.000<span className="arancel__mes">/mes</span></td>
                  </tr>
                  <tr className="arancel__destacada">
                    <td className="arancel__info">
                      <span className="arancel__nombre">Full 8 <span className="tag">MÁS ELEGIDO</span></span>
                      <span className="arancel__detalle">8 clases · Lun–Sáb todo horario</span>
                      <span className="arancel__hover">el más elegido · 8 créditos · 2 recuperaciones</span>
                    </td>
                    <td className="arancel__precio"><span className="desde">desde</span> $135.000<span className="arancel__mes">/mes</span></td>
                  </tr>
                  <tr>
                    <td className="arancel__info">
                      <span className="arancel__nombre">Full 12</span>
                      <span className="arancel__detalle">12 clases · Lun–Sáb todo horario</span>
                      <span className="arancel__hover">12 créditos · 3 recuperaciones · incluye Barre</span>
                    </td>
                    <td className="arancel__precio">$178.000<span className="arancel__mes">/mes</span></td>
                  </tr>
                  <tr>
                    <td className="arancel__info">
                      <span className="arancel__nombre">Ilimitado</span>
                      <span className="arancel__detalle">Ilimitado* · Lun–Sáb todo horario</span>
                      <span className="arancel__hover">*máx 1 clase/día · tope 26/mes · sin compartir</span>
                    </td>
                    <td className="arancel__precio">$215.000<span className="arancel__mes">/mes</span></td>
                  </tr>
                  <tr>
                    <td className="arancel__info">
                      <span className="arancel__nombre">Clase suelta</span>
                      <span className="arancel__detalle">1 clase · según cupo</span>
                      <span className="arancel__hover">1 crédito 15 días · Mat/Barre/Funcional</span>
                    </td>
                    <td className="arancel__precio">$18.500</td>
                  </tr>
                  <tr>
                    <td className="arancel__info">
                      <span className="arancel__nombre">Evaluación + clase</span>
                      <span className="arancel__detalle">1 eval + 1 clase · agendada</span>
                      <span className="arancel__hover">60 min · postura + reformer guiado</span>
                    </td>
                    <td className="arancel__precio">$24.900</td>
                  </tr>
                  <tr>
                    <td className="arancel__info">
                      <span className="arancel__nombre">Clase de prueba</span>
                      <span className="arancel__detalle">1 clase · agendada</span>
                      <span className="arancel__hover">se abona al plan si te quedas</span>
                    </td>
                    <td className="arancel__precio">$15.000</td>
                  </tr>
                </tbody>
              </table>
              <p className="arancel__nota">Valores referenciales; se confirman al agendar. *Ilimitado con tope 26 clases/mes. Sin matrícula si te inscribes en la visita ($35.000 si vuelves después). Factura y boleta reembolsable.</p>
            </div>
            <aside className="planes__aside">
              <div className="card-aside">
                <h3>¿Cuántas veces ir?</h3>
                <p>2× semana (8/mes) alcanza para avanzar. 3× (12/mes) se nota en postura en 4–6 semanas. Ilimitado solo si vienes 4×+.</p>
                <div className="comparativa">8 clases → $16.875 c/u · 12 clases → $14.833 c/u</div>
                <a href="#visita-alba" className="btn-primary" style={{ width: "100%", marginTop: 14 }}>Reservar clase de prueba</a>
                <a href="tel:+56981234567" className="planes__tel">+56 9 8123 4567</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========== #pase-diario ========== */}
      <section id="pase-diario" className="section pase">
        <div className="section__inner pase__inner">
          <div className="pase__left">
            <div className="pase__media" style={{ aspectRatio: "16 / 9" }}>
              <MediaImg src="/media/alba-proof-16x9.png" alt="Pabellón en perspectiva con fila de reformers, luz mañana" aspect="16 / 9" />
            </div>
            <p className="caption" style={{ textAlign: "left" }}>Pabellón · ducha y lockers · Ñuñoa</p>
          </div>
          <div className="pase__right">
            <p className="kicker" style={{ color: "var(--accent)" }}>SIN PLAN</p>
            <h2>Pase diario y evaluación</h2>
            <p className="section__intro" style={{ marginBottom: 22 }}>Si vienes de paso o quieres probar sin mensualidad. Sin venderte el año por adelantado.</p>

            <div className="pase__bloque">
              <h3>Pase diario libre</h3>
              <p>Acceso al pabellón + 1 clase colectiva según grilla (Mat/Barre/Funcional). Sin reformer en pase diario.</p>
              <p className="pase__precio">$12.900 <span>día</span> <em>· 07:00–21:00</em></p>
              <ul className="checks">
                <li>1 clase incluida</li>
                <li>Ducha y lockers</li>
                <li>Sin matrícula</li>
              </ul>
            </div>

            <div className="pase__bloque" style={{ marginTop: 28 }}>
              <h3>Evaluación postural + clase Reformer</h3>
              <p>60 min con profesor: postura, rango y primera clase guiada 1:1 en reformer. Te llevas hoja por escrito.</p>
              <p className="pase__precio">$24.900 <span className="tag tag--light">se abona a plan</span></p>
            </div>

            <p className="pase__micro">Sin letra chica: si no hay reformer libre, no se vende el pase como ‘reformer’. Se dice antes.</p>

            <div className="pase__textura">
              <MediaImg src="/media/alba-tile-04-3x4.png" alt="Veta de lenga cepillada" aspect="3 / 4" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== #visita-alba ========== */}
      <section id="visita-alba" className="section visita">
        <div className="section__inner">
          <div className="visita__layout">
            <div className="visita__left">
              <p className="kicker" style={{ color: "var(--accent)" }}>VISITA</p>
              <h2>Agenda tu prueba. Te responden hoy.</h2>
              <p className="section__intro" style={{ marginBottom: 22 }}>Elige día y te confirmamos por WhatsApp en el día. Si es para hoy, llama directo.</p>
              <FormVisita />
            </div>
            <div className="visita__right">
              <a href="tel:+56981234567" className="visita__tel">+56 9 8123 4567</a>
              <a href="mailto:hola@alba.cl" className="visita__mail">hola@alba.cl</a>
              <p className="visita__dir">Av. Irarrázaval 2423, Ñuñoa, Santiago</p>
              <p className="visita__horario"><span>Lun–Vie 07:00–21:00</span><span className="dot"></span><span>Sáb 08:00–14:00</span><span className="dot"></span><span>Dom cerrado</span></p>
              <div className="visita__mapline"><span className="dot"></span> Metro Chile-España · 4 min a pie · Bicicletero interior</div>
              <p className="visita__prueba">+6 años · 11 profesores certificados · grupos máx. 6 · boleta reembolsable Isapre</p>
              <div className="visita__mini" style={{ aspectRatio: "16 / 9", marginTop: 18, overflow: "hidden", border: "1px solid var(--linea)" }}>
                <MediaImg src="/media/alba-interior-16x9.png" alt="Pabellón ALBA ordenado, sala funcional vacía, prueba de espacio real" aspect="16 / 9" />
              </div>
            </div>
          </div>
          <footer className="footer">
            <p className="footer__left">ALBA PILATES STUDIO SpA · Av. Irarrázaval 2423, Ñuñoa · hola@alba.cl · +56 9 8123 4567</p>
            <p className="footer__right">© 2026 ALBA. Valores referenciales.</p>
          </footer>
        </div>
      </section>

      <StickyCta />
    </>
  );
}
