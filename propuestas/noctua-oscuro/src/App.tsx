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
        console.warn(`[noctua-oscuro] Falta: ${src}`);
      }
    };
    img.src = src;
    return () => { alive = false; };
  }, [src]);
  return ok;
}

function MediaFalta({ filename, ratio }: { filename: string; ratio: string }) {
  return (
    <div className="media-falta" data-falta={filename} style={{ aspectRatio: ratio }}>
      Falta: {filename}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#main" className="skip">Saltar al contenido</a>
      <div className="container header-inner">
        <div className="header-left">
          <a href="#" className="logo" aria-label="NOCTUA inicio">NOCTUA</a>
          <nav className="nav" aria-label="Navegación principal">
            <a href="#manifiesto-noctua">Manifiesto</a>
            <a href="#sistema-noche">Sistema</a>
            <a href="#galeria-noctua">Galería</a>
            <a href="#inversion-noche">Inversión</a>
          </nav>
        </div>
        <div className="header-right">
          <a className="header-tel" href="tel:+56984071234">+56 9 8407 1234</a>
          <a className="btn-ghost" href="#agenda-noche">Agendar</a>
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
        <a href="#manifiesto-noctua" onClick={() => setOpen(false)}>Manifiesto</a>
        <a href="#sistema-noche" onClick={() => setOpen(false)}>Sistema</a>
        <a href="#galeria-noctua" onClick={() => setOpen(false)}>Galería</a>
        <a href="#inversion-noche" onClick={() => setOpen(false)}>Inversión</a>
        <a className="mobile-tel" href="tel:+56984071234">+56 9 8407 1234</a>
        <a className="btn-ghost" href="#agenda-noche" onClick={() => setOpen(false)}>Agendar visita nocturna</a>
      </nav>
    </header>
  );
}

function HeroMedia() {
  const base = import.meta.env.BASE_URL;
  const src16 = `${base}media/noctua-hero-16x9.png`;
  const src9 = `${base}media/noctua-hero-9x16.png`;
  const ok16 = useMediaExists(src16);
  const ok9 = useMediaExists(src9);

  useEffect(() => {
    if (ok16 === false) console.warn("[noctua-oscuro] Falta: noctua-hero-16x9.png");
    if (ok9 === false) console.warn("[noctua-oscuro] Falta: noctua-hero-9x16.png");
  }, [ok16, ok9]);

  if (ok16 === false) {
    return (
      <div className="hero-media">
        <div className="vitrina">
          <div
            className="media-falta"
            data-falta="noctua-hero-16x9.png"
            style={{ aspectRatio: "16/9", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--ink-50)", fontSize: 12 }}
          >
            Falta: noctua-hero-16x9.png
          </div>
        </div>
        <p className="caption">Pieza 60 · NOCTUA oscuro — Sala 60 · 22:14</p>
      </div>
    );
  }

  return (
    <div className="hero-media">
      <div className="vitrina">
        <img
          className="img-16x9"
          src={src16}
          alt="Sala nocturna NOCTUA — farol vidrio acanalado"
          width={1280}
          height={720}
          style={ok16 === null ? { opacity: 0 } : undefined}
        />
        {ok9 !== false ? (
          <img
            className="img-9x16"
            src={src9}
            alt="Sala nocturna NOCTUA — farol vidrio acanalado vertical"
            width={720}
            height={1280}
          />
        ) : (
          <div
            className="media-falta img-9x16"
            data-falta="noctua-hero-9x16.png"
            style={{ aspectRatio: "9/16", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--ink-50)", fontSize: 12 }}
          >
            Falta: noctua-hero-9x16.png
          </div>
        )}
      </div>
      <p className="caption">Pieza 60 · NOCTUA oscuro — Sala 60 · 22:14</p>
    </div>
  );
}

function Manifiesto() {
  const base = import.meta.env.BASE_URL;
  const src = `${base}media/noctua-sala-4x3.png`;
  const ok = useMediaExists(src);
  return (
    <section id="manifiesto-noctua" className="sec-manifiesto">
      <div className="container">
        <p className="mancheta">Manifiesto · La oscuridad es foco, no decoración</p>
        <div className="grid12 manifiesto-grid">
          <div className="manifiesto-left">
            <h2>Menos luz. Más decisión.</h2>
            <p className="bajada">Si tu sitio oscuro es el claro con fondo negro, no es diseño: es inversión de colores. NOCTUA invierte la luz, no la paleta.</p>
          </div>
          <div className="manifiesto-right">
            <p>Órbita diseña en papel primero: gramática, tipografía, paleta y textos literales antes de tocar React. La media viene de Flow, noche cerrada, sin bancos de imágenes.</p>
            <p>NOCTUA demuestra cómo se ve una marca nocturna cuando la luz puntual y el vidrio son del oficio, no del template púrpura.</p>
            <ul className="principios">
              <li>— Acento &lt;5% incluso de noche</li>
              <li>— Radios 0</li>
              <li>— Filetes 1px sobre noche</li>
              <li>— Con #0E1412, nunca #000 puro</li>
              <li>— Vidrio ahumado, no neón</li>
            </ul>
            <div className="sala-wrap">
              {ok === false ? (
                <MediaFalta filename="noctua-sala-4x3.png" ratio="4/3" />
              ) : (
                <img src={src} alt="Sala nocturna — farol 3200K, vidrio acanalado" width={800} height={600} style={ok === null ? { opacity: 0 } : undefined} />
              )}
              <p className="caption">Sala nocturna — farol 3200K, 22:00, sin personas, vidrio acanalado</p>
              <p className="metric-line">66 webs · 4 familias · 3 bots · 0 orbes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sistema() {
  return (
    <section id="sistema-noche" className="sec-sistema">
      <div className="container">
        <h2>Tres bots. Una sola luz encendida.</h2>
        <p className="sub">Lo que diseña uno lo puede construir el siguiente sin inventar. De noche también.</p>
        <div className="kpis">
          <div className="kpi"><span className="kpi-num">66</span><span className="kpi-label">webs en cola</span></div>
          <div className="kpi"><span className="kpi-num">4</span><span className="kpi-label">familias</span></div>
          <div className="kpi"><span className="kpi-num">3</span><span className="kpi-label">bots (arquitecto→visual→builder)</span></div>
          <div className="kpi"><span className="kpi-num">0</span><span className="kpi-label">fotos stock</span></div>
        </div>
        <div className="barra"></div>
        <div className="paneles">
          <div className="panel">
            <p className="panel-kicker">01 · ARQUITECTO</p>
            <h3>Blueprint + Media-plan + Build-01/02</h3>
            <p className="panel-copy">Define archetype H, paleta noche, tipo T7 y textos literales. Entrega 4 archivos listos para Flow y opencode oscuro.</p>
            <p className="panel-meta">4 archivos · ratios Flow 16:9/4:3/1:1/3:4/9:16 · radios 0</p>
          </div>
          <div className="panel">
            <p className="panel-kicker">02 · DIRECTOR VISUAL</p>
            <h3>Prompts Flow noche, 6 elementos por imagen</h3>
            <p className="panel-copy">Golden prompt con lente 35mm f/8, luz puntual 3200K + relleno 5600K, textura acero/vidrio y grading noche. Valida md5.</p>
            <p className="panel-meta">35mm f/8 · 3200K/5600K · acero/vidrio</p>
          </div>
          <div className="panel">
            <p className="panel-kicker">03 · BUILDER</p>
            <h3>React 19 + Vite 6 + CSS puro + motion noche</h3>
            <p className="panel-copy">Duplica _plantilla, tokens :root noche exactos, hero con media real noche. Build 0 errores, sin Tailwind.</p>
            <p className="panel-meta">React 19 + Vite 6 · CSS puro · 0 errores</p>
          </div>
        </div>
      </div>
    </section>
  );
}

type Filtro = "Todas" | "Claro" | "Oscuro" | "Azul-cian" | "Teal" | "Demo" | "Noche";
const filtros: Filtro[] = ["Todas", "Claro", "Oscuro", "Azul-cian", "Teal", "Demo", "Noche"];

type Celda = { id: string; slug: string; label: string; familia: Filtro };
const celdas: Celda[] = [
  { id: "c1", slug: "dentista-b-oscuro-premium", label: "OBSIDIANA", familia: "Oscuro" },
  { id: "c2", slug: "abogado-oscuro-premium", label: "RIVERA", familia: "Oscuro" },
  { id: "c3", slug: "inmobiliaria-oscuro-premium", label: "ALTAMAR", familia: "Oscuro" },
  { id: "c4", slug: "software-oscuro-premium", label: "Vertice", familia: "Oscuro" },
  { id: "c5", slug: "gimnasio-oscuro-premium", label: "FORJA", familia: "Oscuro" },
  { id: "c6", slug: "noctua-oscuro", label: "NOCTUA", familia: "Demo" },
];

function Galeria() {
  const [activo, setActivo] = useState<Filtro>("Todas");
  const base = import.meta.env.BASE_URL;
  const mosaico = `${base}media/noctua-mosaico-1x1.png`;
  const detalle = `${base}media/noctua-detalle-3x4.png`;
  const okM = useMediaExists(mosaico);
  const okD = useMediaExists(detalle);
  const filtradas = activo === "Todas" ? celdas : celdas.filter(c => c.familia === activo || (activo === "Noche" && c.familia === "Oscuro") || (activo === "Demo" && c.id === "c6"));
  // Fallback: Noche shows oscuro + demo, etc.
  const vis = activo === "Todas" ? celdas : (activo === "Noche" ? celdas.filter(c => c.familia === "Oscuro" || c.familia === "Demo") : filtradas);

  return (
    <section id="galeria-noctua" className="sec-galeria">
      <div className="container">
        <div className="galeria-head">
          <h2>La galería, de noche.</h2>
          <div className="filtros" role="tablist" aria-label="Filtros galería">
            {filtros.map(f => (
              <button key={f} role="tab" aria-selected={activo === f} className={activo === f ? "filtro activo" : "filtro"} onClick={() => setActivo(f)}>{f}</button>
            ))}
          </div>
          <p className="contador">66 propuestas · 8 demos · sala 60 · {vis.length} visibles</p>
        </div>
        <div className="grilla">
          {vis.map((c, idx) => {
            const isNoctua = c.slug === "noctua-oscuro";
            const imgSrc = idx % 2 === 0 ? mosaico : detalle;
            const ok = idx % 2 === 0 ? okM : okD;
            const filename = idx % 2 === 0 ? "noctua-mosaico-1x1.png" : "noctua-detalle-3x4.png";
            return (
              <a key={c.id} href={isNoctua ? "#noctua-umbral" : `/${c.slug}`} className={`celda ${isNoctua ? "celda-actual" : ""}`}>
                <div className="celda-thumb">
                  {ok === false ? (
                    <MediaFalta filename={filename} ratio="1/1" />
                  ) : (
                    <img src={imgSrc} alt={`${c.label} — ${c.slug}`} width={400} height={400} loading="lazy" style={ok === null ? { opacity: 0 } : undefined} />
                  )}
                </div>
                <p className="celda-title">{c.slug} — {c.label}{isNoctua ? " · TÚ ESTÁS AQUÍ" : ""}</p>
                <p className="celda-cedula">{c.slug} · T4 · noche</p>
              </a>
            );
          })}
        </div>
        <p className="cola-link"><a href="/COLA-V2.json" target="_blank" rel="noopener">Ver tabla canónica COLA-V2.json →</a></p>
      </div>
    </section>
  );
}

function Capacidades() {
  const base = import.meta.env.BASE_URL;
  const src = `${base}media/noctua-detalle-3x4.png`;
  const ok = useMediaExists(src);
  const filas = [
    "Blueprint noche + textos literales chilenos (sin 'soluciones integrales')",
    "Media Flow noche 16:9/9:16/1:1/3:4 sin stock ni personas ni patentes",
    "React 19 + Vite 6 + CSS puro (sin Tailwind, sin Next.js)",
    "Tokens :root noche exactos + ::selection #E85D3F",
    "Header vidrio con teléfono + CTA persistente móvil noche",
    "Precio 'desde' honesto en #inversion-noche (gramática G6)",
    "Prueba social honesta (métricas reales, sin caras inventadas)",
    "Build verificado: tsc --noEmit + vite build 0 errores",
    "Responsive 360px real (no escalado, hamburger noche)",
    "Accesibilidad AA noche, focus-visible #E85D3F, reduced-motion 0",
    "OG 16:9 noche + poster hero (metadata social oscura)",
    "Entrega 10–14 días hábiles desde media noche · Factura exenta",
  ];
  return (
    <section id="capacidades-noche" className="sec-capacidades">
      <div className="container">
        <h2>Qué te llevas, de noche.</h2>
        <p className="sub">No vendemos templates oscuros. Vendemos una sala nocturna que pasa el test de la lámpara apagada.</p>
        <div className="grid12 cap-grid">
          <ul className="lista-densa" aria-label="Capacidades">
            {filas.map((t, i) => (
              <li key={i}><span className="check" aria-hidden>✓</span><span>{t}</span></li>
            ))}
          </ul>
          <div className="cap-lateral">
            {ok === false ? (
              <MediaFalta filename="noctua-detalle-3x4.png" ratio="3/4" />
            ) : (
              <img src={src} alt="Detalle — vidrio acanalado, 85mm f/8, luz 3200K" width={400} height={533} loading="lazy" style={ok === null ? { opacity: 0 } : undefined} />
            )}
            <p className="caption">Detalle — vidrio acanalado, 85mm f/8, luz 3200K</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  const base = import.meta.env.BASE_URL;
  const src = `${base}media/noctua-proceso-1x1.png`;
  const ok = useMediaExists(src);
  return (
    <section id="proceso-noche" className="sec-proceso">
      <div className="container">
        <h2>Cómo llegamos a tu sala nocturna.</h2>
        <div className="timeline">
          <div className="linea" aria-hidden />
          <div className="hitos">
            <div className="hito">
              <span className="dot" aria-hidden />
              <div className="hito-card">
                <h3>Día 1–2 · Tabla y brief nocturno</h3>
                <p>Revisamos tu rubro real, comuna y ticket. Bloqueamos paleta noche y archetype H que no compita con tu competencia clara. Se decide si necesitas ETER, NOCTUA o ambos.</p>
              </div>
            </div>
            <div className="hito">
              <span className="dot" aria-hidden />
              <div className="hito-card">
                <h3>Día 3–7 · Arquitectura + Flow noche</h3>
                <p>Blueprint y MEDIA-PLAN noche cerrados. Generación Flow 6-elementos por prompt noche (lente, luz 3200K, textura acero/vidrio, grading noche). Validación md5 y dimensiones ±5%.</p>
              </div>
            </div>
            <div className="hito">
              <span className="dot" aria-hidden />
              <div className="hito-card">
                <h3>Día 8–12 · Build noche</h3>
                <p>BUILD-01 (shell+hero noche) y BUILD-02 (app completa) con media real en public/media. Sin stock, sin placeholders púrpura.</p>
              </div>
            </div>
            <div className="hito">
              <span className="dot" aria-hidden />
              <div className="hito-card">
                <h3>Día 13–14 · QA y entrega noche</h3>
                <p>qa-anticlon &lt;35% CSS vs otra propuesta oscura, &lt;25% vs ETER claro. Build 0 errores. Deploy Vercel dual (claro/oscuro) si pack.</p>
              </div>
            </div>
          </div>
          {/* thumb opcional proceso — oculto si falta */}
          {ok !== false && (
            <div className="proceso-thumb" aria-hidden>
              <img src={src} alt="" width={200} height={200} loading="lazy" style={ok === null ? { opacity: 0 } : undefined} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Inversion() {
  const base = import.meta.env.BASE_URL;
  const src = `${base}media/noctua-interior-16x9.png`;
  const ok = useMediaExists(src);
  return (
    <section id="inversion-noche" className="sec-inversion">
      <div className="container">
        <h2>Inversión nocturna.</h2>
        <p className="sub">Valores referenciales CLP; se confirman tras diagnóstico de rubro y alcance. Noche no es 'más caro por ser oscuro'.</p>
        <div className="friso">
          {ok === false ? (
            <MediaFalta filename="noctua-interior-16x9.png" ratio="16/9" />
          ) : (
            <img src={src} alt="Interior nocturno — sala larga con una sola lámpara al fondo" width={1280} height={720} loading="lazy" style={ok === null ? { opacity: 0 } : undefined} />
          )}
        </div>
        <div className="planes">
          <div className="plan">
            <div className="plan-head">
              <h3>SALA NOCTUA — Sitio noche editorial (como este)</h3>
              <span className="tag tag-noche">Noche editorial pura</span>
            </div>
            <p className="precio">desde $1.590.000 CLP + IVA</p>
            <ul className="bullets-plan">
              <li>Blueprint H Night glass</li>
              <li>Hasta 8 secciones oficio noche</li>
              <li>Media Flow 6–8 stills noche</li>
              <li>Build React 19 noche</li>
            </ul>
          </div>
          <div className="plan">
            <div className="plan-head">
              <h3>SALA ETER — Claro premium (gemelo diurno)</h3>
              <span className="tag">Gemelo claro</span>
            </div>
            <p className="precio">desde $1.290.000 CLP + IVA</p>
            <ul className="bullets-plan">
              <li>Archetype I Museo</li>
              <li>Luz norte</li>
              <li>Hasta 8 secciones</li>
              <li>Incluye OG claro</li>
            </ul>
          </div>
          <div className="plan destacado">
            <div className="plan-head">
              <h3>GALERÍA DUAL — Pack ETER + NOCTUA</h3>
              <span className="tag tag-accent">Para test conversión noche/día</span>
            </div>
            <p className="precio">desde $2.350.000 CLP + IVA</p>
            <ul className="bullets-plan">
              <li>Claro + Oscuro A/B test</li>
              <li>Misma marca, dos salas</li>
              <li>Deploy dual con switch</li>
            </ul>
          </div>
        </div>
        <p className="nota-honesta">Valores referenciales; se confirman tras diagnóstico. Hosting Vercel y dominio .cl no incluidos salvo pacto. Factura exenta disponible. Noche y día comparten sistema, no se cobra dos veces el blueprint.</p>
        <a href="#agenda-noche" className="btn-primary">Pedir presupuesto nocturno con diagnóstico →</a>
      </div>
    </section>
  );
}

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  tel: string;
  rubro: string;
  mensaje: string;
  acepto: boolean;
};

function Agenda() {
  const [f, setF] = useState<FormState>(() => {
    try {
      const raw = localStorage.getItem("noctua-oscuro-agenda");
      if (raw) return JSON.parse(raw);
    } catch { /* ignore */ }
    return { nombre: "", empresa: "", email: "", tel: "", rubro: "", mensaje: "", acepto: false };
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const update = (k: keyof FormState, v: string | boolean) => setF(p => ({ ...p, [k]: v }));

  const validate = (): string | null => {
    if (!f.nombre.trim()) return "Revisa email y teléfono (+56 9).";
    if (!f.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return "Revisa email y teléfono (+56 9).";
    const digits = f.tel.replace(/\D/g, "");
    // chileno +56 9 + 8 dígitos => total 11 con 56, o 9 dígitos local
    const local = digits.startsWith("56") ? digits.slice(2) : digits;
    // debe empezar con 9 y tener 8-9 dígitos restantes (9xxxxxxxx)
    if (!/^9\d{7,8}$/.test(local)) return "Revisa email y teléfono (+56 9).";
    if (f.mensaje.trim().length < 10) return "Revisa email y teléfono (+56 9).";
    if (!f.acepto) return "Revisa email y teléfono (+56 9).";
    return null;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrMsg(err);
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrMsg("");
    // simula async breve
    setTimeout(() => {
      try {
        localStorage.setItem("noctua-oscuro-agenda", JSON.stringify(f));
      } catch { /* ignore */ }
      const text = `Hola Órbita, vengo de NOCTUA oscuro, soy ${f.nombre} de ${f.empresa || "—"}, rubro ${f.rubro || "—"}. ${f.mensaje}`;
      const wa = `https://wa.me/56984071234?text=${encodeURIComponent(text)}`;
      const mail = `mailto:hola@orbita.cl?subject=${encodeURIComponent(`NOCTUA oscuro — ${f.nombre} ${f.empresa ? "· " + f.empresa : ""}`)}&body=${encodeURIComponent(text + `\n\nEmail: ${f.email}\nTel: ${f.tel}\nRubro: ${f.rubro}`)}`;
      window.open(wa, "_blank");
      window.location.href = mail;
      setStatus("success");
    }, 400);
  };

  return (
    <section id="agenda-noche" className="sec-agenda">
      <div className="container">
        <div className="grid12 agenda-grid">
          <div className="agenda-copy">
            <h2>Agenda tu visita nocturna.</h2>
            <p className="agenda-p">20 minutos por Meet o en sala nocturna (Providencia). Sin pitch de 90 diapositivas. Con luz puntual, sin neón.</p>
            <p className="datos">
              <a href="https://wa.me/56984071234" target="_blank" rel="noopener">WhatsApp +56 9 8407 1234</a> · <a href="mailto:hola@orbita.cl">hola@orbita.cl</a> · Lun–Vie 9:00–18:30
            </p>
            <p className="horario">Respuesta &lt;2h hábil. Noche también atendemos.</p>
            <p className="micro">Si vienes de ETER claro, menciona 'DUAL' y vemos pack.</p>
          </div>
          <form className={`agenda-form ${status === "loading" ? "loading" : ""}`} onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="nombre">Nombre*</label>
              <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" value={f.nombre} onChange={e => update("nombre", e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="empresa">Empresa / marca</label>
              <input id="empresa" name="empresa" type="text" placeholder="Marca o razón social" value={f.empresa} onChange={e => update("empresa", e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="email">Email*</label>
              <input id="email" name="email" type="email" required placeholder="tu@empresa.cl" value={f.email} onChange={e => update("email", e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="tel">Tel / WhatsApp*</label>
              <input id="tel" name="tel" type="tel" required placeholder="+56 9 ..." value={f.tel} onChange={e => update("tel", e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="rubro">Rubro real*</label>
              <select id="rubro" name="rubro" value={f.rubro} onChange={e => update("rubro", e.target.value)} required>
                <option value="">Selecciona rubro</option>
                <option>Abogado</option>
                <option>Dentista</option>
                <option>Inmobiliaria</option>
                <option>Software</option>
                <option>Marketing</option>
                <option>Concesionaria</option>
                <option>Laboratorio</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="mensaje">Mensaje*</label>
              <textarea id="mensaje" name="mensaje" rows={4} placeholder="Cuéntanos en 2 líneas qué vendes y a quién (sin 'soluciones integrales')" value={f.mensaje} onChange={e => update("mensaje", e.target.value)} required></textarea>
            </div>
            <label className="check-row">
              <input type="checkbox" checked={f.acepto} onChange={e => update("acepto", e.target.checked)} required />
              <span>Acepto que me contacten por WhatsApp/email sobre esta cotización nocturna</span>
            </label>
            <button type="submit" className="btn-primary btn-full" disabled={status === "loading"}>
              {status === "loading" ? "Enviando…" : "Solicitar visita nocturna →"}
            </button>
            {status === "success" && <p className="form-msg success" role="status">¡Listo! Te escribimos en &lt;2h hábil. Revisa WhatsApp (noche también).</p>}
            {status === "error" && <p className="form-msg error" role="alert">{errMsg || "Revisa email y teléfono (+56 9)."}</p>}
          </form>
        </div>
        <p className="tira">66 sitios · 4 familias · 0 fotos stock · Build 0 errores · Noche editorial</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid12 footer-grid">
        <p className="foot-brand">NOCTUA — Demo oscuro Órbita v5 · Providencia, Santiago · Noche editorial</p>
        <nav className="foot-links" aria-label="Links footer">
          <a href="/COLA-V2.json" target="_blank" rel="noopener">COLA-V2.json</a>
          <span aria-hidden>·</span>
          <a href="/propuestas/_plantilla/" target="_blank" rel="noopener">_plantilla</a>
          <span aria-hidden>·</span>
          <a href="/propuestas/eter-claro/" target="_blank" rel="noopener">ETER claro (gemelo)</a>
        </nav>
        <p className="foot-copy">© 2026 Órbita — Hecho en Chile · v5 · +56 9 8407 1234 · hola@orbita.cl</p>
      </div>
    </footer>
  );
}

function StickyMobile() {
  return (
    <div className="sticky-bar" role="complementary" aria-label="Acciones rápidas">
      <a href="tel:+56984071234" className="sticky-tel">+56 9 8407 1234</a>
      <a href="#agenda-noche" className="sticky-cta">Agendar noche</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main id="main">
        <section id="noctua-umbral" className="hero container">
          <div className="grid12">
            <div className="hero-copy">
              <p className="kicker">Órbita v5 · Demo oscuro — NOCTUA</p>
              <h1>La noche también vende. Con menos luz, más foco.</h1>
              <p className="subhead">
                Sala nocturna para marcas que no necesitan gritar. El mismo sistema que ETER claro, invertido: vidrio ahumado, acero pavonado y una sola lámpara encendida.
              </p>
              <ul className="bullets" aria-label="Características">
                <li><span className="bullet-dot" aria-hidden /><span>Sin neón púrpura</span></li>
                <li><span className="bullet-dot" aria-hidden /><span>Sin orbes</span></li>
                <li><span className="bullet-dot" aria-hidden /><span>Con precios en CLP y teléfonos reales</span></li>
              </ul>
              <div className="cta-row">
                <a className="btn-primary" href="#galeria-noctua">Ver sala nocturna</a>
                <a className="btn-secondary" href="#agenda-noche">Agendar visita nocturna →</a>
              </div>
              <p className="micro">Respuesta en &lt;2h hábil · Providencia, Santiago · Noche cerrada, luz puntual</p>
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
      <StickyMobile />
    </>
  );
}
