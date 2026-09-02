import { useEffect, useState } from "react";

function useMediaExists(src: string) {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    let alive = true;
    const img = new Image();
    img.onload = () => { if (alive) setOk(true); };
    img.onerror = () => {
      if (alive) {
        setOk(false);
        console.warn(`[eter-claro] Falta media: ${src}`);
      }
    };
    img.src = src;
    return () => { alive = false; };
  }, [src]);
  return ok;
}

function MediaImg({ filename, alt, aspect, className }: { filename: string; alt: string; aspect: string; className?: string }) {
  const base = import.meta.env.BASE_URL;
  const src = `${base}media/${filename}`;
  const ok = useMediaExists(src);
  useEffect(() => {
    if (ok === false) console.warn(`[eter-claro] Falta: ${filename}`);
  }, [ok, filename]);
  if (ok === false) {
    return (
      <div className={`media-falta ${className ?? ""}`} data-falta={filename} style={{ aspectRatio: aspect.replace(":", "/"), border: "1px dashed var(--line)", display: "grid", placeItems: "center", color: "var(--ink)", opacity: .6, background: "var(--paper)", fontSize: 12, padding: 12, textAlign: "center" }}>
        Falta: {filename}
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} style={{ display: "block", width: "100%", aspectRatio: aspect.replace(":", "/"), objectFit: "cover" }} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#main" className="skip">Saltar al contenido</a>
      <div className="container">
        <div className="header-left">
          <a href="#" className="logo" aria-label="ETER inicio">ETER</a>
          <nav className="nav" aria-label="Navegación principal">
            <a href="#manifiesto-eter">Manifiesto</a>
            <a href="#sistema-orbita">Sistema</a>
            <a href="#galeria-demo">Galería</a>
            <a href="#inversion">Inversión</a>
          </nav>
        </div>
        <div className="header-right">
          <a className="header-tel" href="tel:+56984071234">+56 9 8407 1234</a>
          <a className="btn-ghost" href="#agenda-demo">Agendar</a>
          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Navegación móvil">
        <a href="#manifiesto-eter" onClick={() => setOpen(false)}>Manifiesto</a>
        <a href="#sistema-orbita" onClick={() => setOpen(false)}>Sistema</a>
        <a href="#galeria-demo" onClick={() => setOpen(false)}>Galería</a>
        <a href="#inversion" onClick={() => setOpen(false)}>Inversión</a>
        <a className="mobile-tel" href="tel:+56984071234">+56 9 8407 1234</a>
        <a className="btn-ghost" href="#agenda-demo" onClick={() => setOpen(false)}>Agendar visita a sala</a>
      </nav>
    </header>
  );
}

function HeroMedia() {
  const base = import.meta.env.BASE_URL;
  const src16 = `${base}media/eter-hero-16x9.png`;
  const src9 = `${base}media/eter-hero-9x16.png`;
  const ok16 = useMediaExists(src16);
  const ok9 = useMediaExists(src9);
  useEffect(() => {
    if (ok16 === false) console.warn("[eter-claro] Falta: eter-hero-16x9.png");
    if (ok9 === false) console.warn("[eter-claro] Falta: eter-hero-9x16.png");
  }, [ok16, ok9]);
  const show16 = ok16 !== false;
  const show9 = ok9 !== false;
  return (
    <div className="hero-media">
      <div className="vitrina">
        {ok16 === false ? (
          <div className="media-falta" data-falta="eter-hero-16x9.png" style={{ aspectRatio: "16/9", border: "1px dashed var(--line)", display: "grid", placeItems: "center", color: "var(--ink)", opacity: .6 }}>
            Falta: eter-hero-16x9.png
          </div>
        ) : (
          <>
            {show16 && <img className="img-16x9" src={src16} alt="" width={1280} height={720} />}
            {show9 && <img className="img-9x16" src={src9} alt="" width={720} height={1280} />}
            {ok9 === false && show16 && (
              <div className="media-falta" data-falta="eter-hero-9x16.png" style={{ aspectRatio: "9/16", border: "1px dashed var(--line)", display: "grid", placeItems: "center", color: "var(--ink)", opacity: .6, marginTop: 8 }}>
                Falta: eter-hero-9x16.png
              </div>
            )}
          </>
        )}
        {ok16 !== false && ok9 !== false && ok16 !== null && ok9 !== null ? null : null}
      </div>
      <p className="caption">Pieza 01 · ETER claro — Sala 59 · 12:04</p>
    </div>
  );
}

/* ───── Secciones BUILD-02 ───── */

function Manifiesto() {
  return (
    <section id="manifiesto-eter" className="manifiesto">
      <div className="container">
        <div className="grid12">
          <p className="mancheta">Manifiesto · No hacemos landings genéricas</p>
          <h2>Cada rubro merece su propia sala.</h2>
          <p className="bajada">Un dentista no es un abogado. Una ferretería no es una inmobiliaria. Si tu hero funciona cambiando 4 palabras, está mal diseñado.</p>
          <div className="manifiesto-left">
            <p>Órbita diseña en papel primero: gramática, tipografía, paleta, ids del oficio y textos literales antes de tocar React. La media viene de Flow, no de bancos de imágenes.</p>
            <p>ETER claro demuestra cómo se ve una marca luminosa cuando la luz, la grilla y el copy son del oficio, no del template.</p>
            <ul className="principios" aria-label="Principios">
              <li>— Un acento &lt;5%</li>
              <li>— Radios 0</li>
              <li>— Filetes 1px</li>
              <li>— Con #F6F3EE, nunca #FFF puro</li>
            </ul>
          </div>
          <div className="manifiesto-right">
            <div className="manifiesto-img">
              <MediaImg filename="eter-sala-4x3.png" alt="" aspect="4:3" className="img-cover" />
            </div>
            <p className="manifiesto-caption">Sala vacía — luz norte, 11:20, sin personas</p>
            <div className="metricas">
              <span>66 webs en cola</span>
              <span className="sep" aria-hidden>·</span>
              <span>4 familias</span>
              <span className="sep" aria-hidden>·</span>
              <span>3 bots (arquitecto→visual→builder)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sistema() {
  return (
    <section id="sistema-orbita" className="sistema">
      <div className="container">
        <div className="grid12">
          <h2>De la tabla al sitio sin clonar.</h2>
          <p className="sistema-sub">Tres bots, un contrato: lo que diseña uno lo puede construir el siguiente sin inventar.</p>
        </div>
        <div className="sistema-panels">
          <div className="barra" aria-hidden />
          <article className="panel">
            <p className="panel-kicker">01 · ARQUITECTO</p>
            <h3>Blueprint + Media-plan + Build-01/02</h3>
            <p>Define archetype, paleta, tipo T1–T10 y textos literales. Entrega 4 archivos listos para Flow y opencode.</p>
            <p className="panel-meta">4 archivos · ratio Flow 16:9/4:3/1:1/3:4/9:16</p>
          </article>
          <article className="panel">
            <p className="panel-kicker">02 · DIRECTOR VISUAL</p>
            <h3>Prompts Flow en español, 6 elementos por imagen</h3>
            <p>Golden prompt con lente, luz, textura y grading. Valida md5 y dimensiones ±5%.</p>
          </article>
          <article className="panel">
            <p className="panel-kicker">03 · BUILDER</p>
            <h3>React 19 + Vite 6 + CSS puro + motion</h3>
            <p>Duplica _plantilla, tokens :root exactos, hero con media real. Build 0 errores.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

type GalItem = { slug: string; title: string; cedula: string; variant: string; file: string; aspect: string; here?: boolean };

const GAL_ITEMS: GalItem[] = [
  { slug: "dentista-b-claro", title: "dentista-b-claro — SERENA DENTAL", cedula: "SERENA · T1 · Claro", variant: "Claro", file: "eter-thumb-mosaico-1x1.png", aspect: "1:1" },
  { slug: "abogado-claro", title: "abogado-claro — Estudio", cedula: "Estudio · T1 · Claro", variant: "Claro", file: "eter-thumb-mosaico-1x1.png", aspect: "1:1" },
  { slug: "inmobiliaria-claro", title: "inmobiliaria-claro — Meridiano", cedula: "Meridiano · G6 · Claro", variant: "Claro", file: "eter-thumb-mosaico-1x1.png", aspect: "1:1" },
  { slug: "software-claro", title: "software-claro — Cordillera", cedula: "Cordillera · G2 · Claro", variant: "Claro", file: "eter-thumb-mosaico-1x1.png", aspect: "1:1" },
  { slug: "gimnasio-claro", title: "gimnasio-claro — ALBA", cedula: "ALBA · A · Claro", variant: "Claro", file: "eter-proceso-3x4.png", aspect: "3:4" },
  { slug: "eter-claro", title: "eter-claro — ETER (tú estás aquí)", cedula: "ETER · Demo · Claro", variant: "Demo", file: "eter-proceso-3x4.png", aspect: "3:4", here: true },
];

function Galeria() {
  const [filtro, setFiltro] = useState("Todas");
  const filtros = ["Todas", "Claro", "Oscuro", "Azul-cian", "Teal", "Demo"];
  const filtered = GAL_ITEMS.filter(g => {
    if (filtro === "Todas") return true;
    if (filtro === "Claro") return g.variant === "Claro" || g.slug.includes("claro");
    if (filtro === "Oscuro") return g.variant === "Oscuro" || g.slug.includes("oscuro");
    if (filtro === "Azul-cian") return g.variant === "Azul-cian" || g.slug.includes("azul");
    if (filtro === "Teal") return g.variant === "Teal";
    if (filtro === "Demo") return g.variant === "Demo" || g.slug.includes("eter");
    return true;
  });
  return (
    <section id="galeria-demo" className="galeria">
      <div className="container">
        <div className="grid12 galeria-head">
          <h2>La galería completa.</h2>
          <div className="filtros" role="tablist" aria-label="Filtros galería">
            {filtros.map(f => (
              <button key={f} role="tab" aria-selected={filtro === f} className={`filtro ${filtro === f ? "activo" : ""}`} onClick={() => setFiltro(f)}>{f}</button>
            ))}
          </div>
          <p className="contador">66 propuestas · 8 demos</p>
        </div>
        <div className="galeria-grid">
          {filtered.length === 0 ? (
            <p className="galeria-vacia">Sin piezas en “{filtro}” — prueba “Todas”.</p>
          ) : filtered.map(item => (
            <article key={item.slug} className={`celda ${item.here ? "aqui" : ""}`}>
              <div className="celda-media">
                <MediaImg filename={item.file} alt="" aspect={item.aspect} className="celda-img" />
                <div className="celda-overlay"><span>{item.cedula}</span></div>
              </div>
              <h3 className="celda-title">{item.title}</h3>
              <p className="celda-cedula">{item.cedula}</p>
            </article>
          ))}
        </div>
        <div className="galeria-link">
          <a href="/COLA-V2.json" target="_blank" rel="noopener">Ver tabla canónica COLA-V2.json →</a>
        </div>
      </div>
    </section>
  );
}

function Capacidades() {
  const items = [
    "Blueprint editorial + textos literales chilenos",
    "Media Flow 16:9/9:16/1:1/3:4 sin stock ni personas",
    "React 19 + Vite 6 + CSS puro (sin Tailwind)",
    "Tokens :root exactos + ::selection de marca",
    "Header con teléfono + CTA persistente móvil",
    "Precio 'desde' honesto en sección que dicta gramática",
    "Prueba social honesta (sin caras inventadas)",
    "Build verificado: tsc --noEmit + vite build 0 errores",
    "Responsive 360px real (no escalado)",
    "Accesibilidad AA, focus-visible, reduced-motion",
    "Hosting Vercel + dominio .cl (opcional)",
    "Entrega en 10–14 días hábiles desde media",
  ];
  return (
    <section id="capacidades" className="capacidades">
      <div className="container">
        <div className="grid12">
          <div className="cap-left">
            <h2>Qué te llevas.</h2>
            <p className="cap-intro">No vendemos templates. Vendemos un sitio que pasa el test del acento apagado.</p>
            <ul className="cap-lista" aria-label="Capacidades">
              {items.map(t => (
                <li key={t}><span className="cap-check" aria-hidden>✓</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="cap-right">
            <div className="cap-img">
              <MediaImg filename="eter-detalle-3x4.png" alt="" aspect="3:4" className="img-cover" />
            </div>
            <p className="cap-caption">Detalle — poro del papel, 85mm f/8</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  const hitos = [
    { k: "Día 1–2 · Tabla y brief", p: "Revisamos tu rubro real (no 'demo'), tu comuna y tu ticket. Bloqueamos paleta y archetype que no compita con tu competencia." },
    { k: "Día 3–7 · Arquitectura + Flow", p: "Blueprint y MEDIA-PLAN cerrados. Generación Flow con 6-elementos por prompt. Validación md5." },
    { k: "Día 8–12 · Build", p: "BUILD-01 (shell+hero) y BUILD-02 (app completa) con media real en public/media. Sin stock." },
    { k: "Día 13–14 · QA y entrega", p: "qa-anticlon <35% CSS vs otra propuesta, <25% vs demo. Build 0 errores. Deploy." },
  ];
  return (
    <section id="proceso-entrega" className="proceso">
      <div className="container">
        <h2>Cómo llegamos a tu sala.</h2>
        <div className="timeline">
          <div className="timeline-line" aria-hidden />
          {hitos.map(h => (
            <div key={h.k} className="hito">
              <span className="dot-tl" aria-hidden />
              <div className="hito-card">
                <h3>{h.k}</h3>
                <p>{h.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inversion() {
  return (
    <section id="inversion" className="inversion">
      <div className="friso">
        <MediaImg filename="eter-interior-16x9.png" alt="" aspect="16:9" className="friso-img" />
      </div>
      <div className="container">
        <div className="grid12">
          <h2>Inversión.</h2>
          <p className="inv-sub">Valores referenciales CLP; se confirman tras diagnóstico de rubro y alcance. No hay 'desde USD 9'.</p>
        </div>
        <div className="planes">
          <article className="plan">
            <div className="plan-head">
              <h3>SALA CLARO — Sitio editorial claro (como este)</h3>
              <p className="precio">desde $1.290.000 CLP + IVA</p>
            </div>
            <ul>
              <li>Blueprint G7 · Hasta 8 secciones oficio</li>
              <li>Media Flow 6–8 stills · Build React 19</li>
            </ul>
            <span className="tag">Más pedido en servicios</span>
          </article>
          <article className="plan">
            <div className="plan-head">
              <h3>SALA NOCTUA — Oscuro premium (Night glass)</h3>
              <p className="precio">desde $1.590.000 CLP + IVA</p>
            </div>
            <ul>
              <li>Archetype H · Efectos vidrio sobrio · Hasta 10 secciones</li>
              <li>Incluye OG y poster</li>
            </ul>
          </article>
          <article className="plan">
            <div className="plan-head">
              <h3>GALERÍA COMPLETA — Pack 2 familias</h3>
              <p className="precio">desde $2.350.000 CLP + IVA</p>
            </div>
            <ul>
              <li>Claro + Oscuro A/B test · Misma marca, dos salas</li>
              <li>Deploy dual</li>
            </ul>
            <span className="tag">Para test de conversión</span>
          </article>
        </div>
        <p className="nota">Valores referenciales; se confirman tras diagnóstico. Hosting Vercel y dominio .cl no incluidos salvo pacto. Factura exenta disponible.</p>
        <div className="inv-cta">
          <a className="btn-primary" href="#agenda-demo">Pedir presupuesto con diagnóstico →</a>
        </div>
      </div>
    </section>
  );
}

function Agenda() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [rubro, setRubro] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [estado, setEstado] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("eter-claro-agenda");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.nombre) setNombre(d.nombre);
        if (d.empresa) setEmpresa(d.empresa);
        if (d.email) setEmail(d.email);
        if (d.tel) setTel(d.tel);
        if (d.rubro) setRubro(d.rubro);
        if (d.mensaje) setMensaje(d.mensaje);
      }
    } catch { /* ignore */ }
  }, []);

  const validate = () => {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.trim())) return false;
    if (tel.trim()) {
      const digits = tel.replace(/\D/g, "");
      // +56 9 ... debe tener 11 dígitos total (56 + 9 + 8) o al menos 8 tras prefijo
      // Spec: 8 dígitos tras prefijo +56 9
      let t = tel.trim().replace(/\s+/g, "");
      const withoutPrefix = t.replace(/^\+?56/, "").replace(/^9/, "").replace(/\D/g, "");
      // Simpler: count digits after 569
      const allDigits = tel.replace(/\D/g, "");
      // If starts with 56 -> expect 11 (569 +8), if starts with 9 -> expect 9, else 8
      if (allDigits.startsWith("569")) {
        if (allDigits.length !== 11) return false;
      } else if (allDigits.startsWith("56")) {
        return false;
      } else if (allDigits.length > 0 && allDigits.length < 8) {
        return false;
      } else if (withoutPrefix.length > 0 && withoutPrefix.length !== 8) {
        return false;
      }
      if (allDigits.length > 0) {
        const last8 = allDigits.slice(-8);
        if (last8.length !== 8) return false;
        if (!/^\d{8}$/.test(last8)) return false;
      }
    }
    if (mensaje.length > 500) return false;
    if (!nombre.trim()) return false;
    if (!acepta) return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mensaje.length > 500) {
      setEstado("error");
      setErrMsg("Mensaje máximo 500 caracteres.");
      return;
    }
    if (!validate()) {
      setEstado("error");
      setErrMsg("Revisa email y teléfono.");
      return;
    }
    setEstado("loading");
    setErrMsg("");
    // Simulate async
    setTimeout(() => {
      const data = { nombre, empresa, email, tel, rubro, mensaje, fecha: new Date().toISOString() };
      try { localStorage.setItem("eter-claro-agenda", JSON.stringify(data)); } catch { /* */ }
      setEstado("success");
      const waText = `Hola Órbita — visita sala ETER claro. Soy ${nombre}${empresa ? " de " + empresa : ""} (${email}${tel ? " / " + tel : ""}) Rubro: ${rubro || "—"} Mensaje: ${mensaje || "—"}`;
      const waUrl = `https://wa.me/56984071234?text=${encodeURIComponent(waText)}`;
      const mailSubject = `ETER claro — visita sala — ${nombre}`;
      const mailBody = `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\nTel: ${tel}\nRubro: ${rubro}\nMensaje: ${mensaje}`;
      // open wa + mailto
      window.open(waUrl, "_blank");
      window.location.href = `mailto:hola@orbita.cl?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    }, 700);
  };

  return (
    <section id="agenda-demo" className="agenda">
      <div className="container">
        <div className="grid12">
          <div className="agenda-copy">
            <h2>Agenda tu visita a sala.</h2>
            <p>20 minutos por Meet o en sala blanca (Providencia). Sin pitch de 90 diapositivas.</p>
            <p className="agenda-datos">
              <a href="https://wa.me/56984071234" target="_blank" rel="noopener">WhatsApp +56 9 8407 1234</a> · <a href="mailto:hola@orbita.cl">hola@orbita.cl</a> · Lun–Vie 9:00–18:30
            </p>
            <p className="agenda-horario">Respuesta &lt;2h hábil.</p>
          </div>
          <form className="agenda-form" onSubmit={handleSubmit} noValidate>
            <label>Nombre *<input type="text" required value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Tu nombre" /></label>
            <label>Empresa / marca<input type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} placeholder="Ej. Meridiano" /></label>
            <label>Email *<input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@empresa.cl" /></label>
            <label>Tel / WhatsApp<input type="tel" value={tel} onChange={e => setTel(e.target.value)} placeholder="+56 9 1234 5678" /></label>
            <label>Rubro real
              <select value={rubro} onChange={e => setRubro(e.target.value)}>
                <option value="">Selecciona</option>
                <option>Abogado</option>
                <option>Dentista</option>
                <option>Inmobiliaria</option>
                <option>Software</option>
                <option>Marketing</option>
                <option>Otro</option>
              </select>
            </label>
            <label>Mensaje<textarea rows={4} value={mensaje} onChange={e => setMensaje(e.target.value)} maxLength={500} placeholder="Cuéntanos en 2 líneas qué vendes y a quién" />
              <span className="charcount">{mensaje.length}/500</span>
            </label>
            <label className="check"><input type="checkbox" checked={acepta} onChange={e => setAcepta(e.target.checked)} required /> Acepto que me contacten por WhatsApp/email sobre esta cotización *</label>
            <button type="submit" className="btn-agenda" disabled={estado === "loading"}>{estado === "loading" ? "Enviando…" : "Solicitar visita →"}</button>
            {estado === "success" && <p className="form-success">¡Listo! Te escribimos en &lt;2h hábil. Revisa WhatsApp.</p>}
            {estado === "error" && <p className="form-error">{errMsg || "Revisa email y teléfono."}</p>}
          </form>
        </div>
        <div className="prueba-social">
          66 sitios · 4 familias · 0 fotos de stock · Build 0 errores
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
          <div className="foot-brand">ETER — Demo claro Órbita v5 · Providencia</div>
          <div className="foot-links">
            <a href="/COLA-V2.json" target="_blank" rel="noopener">COLA-V2.json</a>
            <span aria-hidden> · </span>
            <a href="/propuestas/_plantilla" target="_blank" rel="noopener">_plantilla</a>
            <span aria-hidden> · </span>
            <a href="#" aria-label="PROMPT-BOT-ARQUITECTO">PROMPT-BOT-ARQUITECTO</a>
          </div>
          <div className="foot-copy">© 2026 Órbita — Hecho en Chile · v5<br /><a href="tel:+56984071234">+56 9 8407 1234</a> · <a href="mailto:hola@orbita.cl">hola@orbita.cl</a></div>
        </div>
      </div>
    </footer>
  );
}

function Sticky() {
  return (
    <div className="sticky-bar" role="complementary" aria-label="Contacto rápido">
      <a href="tel:+56984071234" className="sticky-tel">+56 9 8407 1234</a>
      <a href="#agenda-demo" className="sticky-cta">Agendar</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main id="main">
        <section id="eter-umbral" className="hero container">
          <div className="grid12">
            <div className="hero-copy">
              <p className="kicker">Órbita v5 · Demo claro — ETER</p>
              <h1>Sesenta y seis sitios. Uno solo importa: el tuyo.</h1>
              <p className="subhead">
                Galería clara para marcas que quieren vender sin gritar. 66 propuestas, 4 familias, 1 sistema: del blueprint a Flow y al build limpio.
              </p>
              <p className="bullets" aria-label="Características">
                <span><span className="dot">·</span> Sin fotos de stock</span>
                <span><span className="dot">·</span> Sin orbes</span>
                <span><span className="dot">·</span> Con precios en CLP y teléfonos reales</span>
              </p>
              <div className="cta-row">
                <a className="btn-primary" href="#galeria-demo">Ver galería</a>
                <a className="btn-secondary" href="#agenda-demo">Agendar visita a sala →</a>
              </div>
              <p className="micro">Respuesta en &lt;2h hábil · Santiago, Chile</p>
            </div>
            <HeroMedia />
          </div>
        </section>
        <Manifiesto />
        <Sistema />
        <Galeria />
        <Capacidades />
        <Proceso />
        <Inversion />
        <Agenda />
      </main>
      <Footer />
      <Sticky />
    </>
  );
}
