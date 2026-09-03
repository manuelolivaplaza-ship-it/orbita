import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "cifras", label: "Cifras" },
  { id: "precios", label: "Precios" },
  { id: "faq", label: "FAQ" },
  { id: "reserva", label: "Reserva" },
];

const CIFRAS = [
  { v: 12, suffix: " años", label: "instalando en Santiago, sin humo ni letra chica" },
  { v: 48000, suffix: "", label: "neumáticos instalados y balanceados" },
  { v: 98, suffix: "%", label: "medidas con stock real en bodega RM" },
  { v: 2400, suffix: "", label: "clientes flota y particulares confían" },
];

const CATALOGO = [
  { n: "01", title: "Auto / SUV", meta: "13\"–19\" · 820 códigos", price: "desde $89.900", medida: "195/65R15 · instalado", desc: "City, sedán y SUV urbano. Medidas 175/65R14 a 225/60R17." },
  { n: "02", title: "Camioneta 4×4", meta: "16\"–20\" · 340 códigos", price: "desde $139.900", medida: "265/65R17 · instalado", desc: "Pick-up y todoterreno. AT y HT para asfalto ripiado y carretera." },
  { n: "03", title: "Moto y scooter", meta: "10\"–21\" · 260 códigos", price: "desde $69.900", medida: "120/70R17 · instalado", desc: "Street, scooter y trail. Compuesto para asfalto chileno." },
  { n: "04", title: "Camión liviano", meta: "15\"–17\" · 180 códigos", price: "desde $149.900", medida: "195R15C · instalado", desc: "Furgón y ¾. Carga C con índice reforzado." },
  { n: "05", title: "Llantas y accesorios", meta: "13\"–20\" · 420 códigos", price: "desde $89.900", medida: "llanta 16\" · con válvula y balanceo", desc: "Aleación y acero. Pernos, válvulas y tapas a medida." },
  { n: "06", title: "Servicios", meta: "45 min con hora", price: "desde $25.900", medida: "alineación 3D correctiva", desc: "Alineación 3D, balanceo computarizado, vulcanización y frenos." },
];

const SERVICIOS = [
  { n: "01", title: "Instalación con hora", desc: "45 min cronometrados: montaje, balanceo computarizado, válvula nueva y apriete con torquímetro. Entras con hora exacta, sin fila." },
  { n: "02", title: "Alineación 3D + balanceo", desc: "Banco 3D Hunter con informe impreso. Si tu dirección tira o el volante vibra, lo corregimos en el mismo lugar." },
  { n: "03", title: "Vulcanización y despacho", desc: "Reparación con parche vulcanizado o despacho RM 24–48h a domicilio/ taller amigo. Si no reparamos, no cobramos." },
];

const PRECIOS = [
  { medida: "195/65R15", uso: "City / sedán", modelo: "Aro 15 — ej. 195/65R15 91H", incl: "montaje + balanceo + válvula", price: 89900 },
  { medida: "205/55R16", uso: "Sedán / SUV compacto", modelo: "Aro 16 — ej. 205/55R16 91V", incl: "montaje + balanceo + válvula + revisión alineación", price: 109900 },
  { medida: "225/60R17", uso: "SUV", modelo: "SUV — ej. 225/60R17 99H", incl: "montaje + balanceo + válvula + revisión alineación", price: 139900 },
  { medida: "265/65R17", uso: "Camioneta 4×4", modelo: "Camioneta — ej. 265/65R17 112T AT", incl: "montaje + balanceo + válvula", price: 169900 },
  { medida: "120/70R17", uso: "Moto", modelo: "Moto — ej. 120/70R17 58W", incl: "montaje + balanceo (moto)", price: 69900 },
];

const FAQS = [
  { q: "¿El precio incluye instalación, balanceo y válvula?", a: "Sí. Publicado siempre IVA incluido e instalado: montaje, balanceo computarizado, válvula nueva y revisión de alineación. Si tu auto necesita alineación 3D correctiva, son $25.900 adicionales — te lo decimos antes de pagar, nunca después. Sin letra chica." },
  { q: "¿Cómo busco por medida y qué hago si no sé la mía?", a: "Busca por medida (ej. 205/55R16) arriba o por patente/año/marca en el formulario. Si no la sabes, escríbenos por WhatsApp con foto del flanco del neumático — te respondemos en menos de 30 min hábiles con la medida exacta y stock." },
  { q: "¿Tienen stock real de mi medida y marca?", a: "Stock en línea actualizado cada mañana. Si la medida quedó sin stock después de tu pedido, te llamamos en 2 horas — no te hacemos venir por nada. Publicamos stock real de bodega RM, no disponibilidad de importador." },
  { q: "¿Cuánto demora el montaje y si necesito alineación?", a: "Montaje 45 min con hora agendada (sin fila). Alineación 3D correctiva +30 min e incluye informe. Agenda tu ventana exacta Lu–Sá — si llegas a la hora, entras a la hora." },
  { q: "¿Hacen despacho a domicilio o solo instalación en taller?", a: "Ambas. Instalación con hora en Santiago (Ñuñoa) y despacho RM 24–48h a domicilio o taller amigo. Fuera de RM coordinamos despacho con tarifa por neumático. Todo con guía y boleta/factura SII." },
  { q: "¿Qué garantía tiene el neumático y qué pasa si vibra después?", a: "Garantía de fábrica contra defecto + balanceo y montaje garantizados 30 días. Si vibra después, vuelves y rebalanceamos sin costo — revisamos aro, balanceo y apriete con torquímetro. Responden técnicos, no bots. +56 9 6585 5290." },
];

function useCountUp(active: boolean, target: number) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(target); return; }
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return val;
}

export function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openCat, setOpenCat] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cifrasIn, setCifrasIn] = useState(false);
  const [galIn, setGalIn] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const [busquedaOk, setBusquedaOk] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
      setHideNav(y > lastY.current && y > 120);
      lastY.current = y;
      setShowSticky(y > window.innerHeight * 0.65);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const c = document.getElementById("cifras");
    const g = document.getElementById("galeria");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target.id === "cifras" && e.isIntersecting) setCifrasIn(true);
        if (e.target.id === "galeria" && e.isIntersecting) setGalIn(true);
      }
    }, { threshold: 0.22 });
    if (c) io.observe(c);
    if (g) io.observe(g);
    return () => io.disconnect();
  }, []);

  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />

      <nav className={`nav ${scrolled ? "compact" : ""} ${hideNav ? "hidden" : ""}`} aria-label="Principal">
        <div className="nav-inner">
          <a href="#inicio" className="brand" aria-label="NEUMA — inicio">NEUMA<span>NEUMÁTICOS Y SERVITECA</span></a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`}>{l.label}</a>
            ))}
            <a href="#precios" className="btn-tinta">Buscar por medida</a>
          </div>
          <button className="hamburger" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir menú" aria-expanded={mobileNav}>☰</button>
        </div>
        {mobileNav && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--papel)", borderBottom: "1px solid var(--linea)", padding: "14px 18px", display: "grid", gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setMobileNav(false)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gris)" }}>{l.label}</a>
            ))}
            <a href="#precios" onClick={() => setMobileNav(false)} className="btn-tinta" style={{ justifyContent: "center" }}>Buscar por medida</a>
          </div>
        )}
      </nav>

      <section id="inicio">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="kicker">Serviteca · Santiago · Instalación con hora agendada</div>
            <h1 className={`hero-h1 ${heroReady ? "ready" : ""}`}>
              <span className="line" style={{ transitionDelay: "0s" }}><span style={{ transitionDelay: "0.05s" }}>El neumático</span></span>
              <span className="line" style={{ transitionDelay: "0.12s" }}><span style={{ transitionDelay: "0.17s" }}>exacto. Instalado</span></span>
              <span className="line" style={{ transitionDelay: "0.24s" }}><span style={{ transitionDelay: "0.29s" }}>y alineado, sin vueltas.</span></span>
            </h1>
            <p className="hero-sub">Busca por medida (205/55R16, 195/65R15…) o por auto, ve precio INSTALADO con IVA, stock real en bodega RM y agenda tu montaje en 30 segundos. Alineación 3D, balanceo y vulcanización en el mismo lugar.</p>
            <div className="hero-ctas">
              <a href="#precios" className="btn-tinta">Buscar por medida →</a>
              <a href="https://wa.me/56965855290" target="_blank" rel="noreferrer" className="btn-ghost">Cotizar por WhatsApp</a>
            </div>
            {/* Buscador por medida */}
            <form
              className="buscador"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget as HTMLFormElement);
                const ancho = (fd.get("ancho") as string) || "";
                const alto = (fd.get("alto") as string) || "";
                const aro = (fd.get("aro") as string) || "";
                const marca = (fd.get("marca") as string) || "";
                if (!ancho || !alto || !aro) { setBusquedaOk("Completa ancho, alto y aro para buscar."); return; }
                const q = `${ancho}/${alto}R${aro}${marca ? " · " + marca : ""}`;
                setBusquedaOk(`Buscando ${q} · te llevamos a precios instalados.`);
                setTimeout(() => document.getElementById("precios")?.scrollIntoView({ behavior: "smooth" }), 400);
              }}
            >
              <div className="buscador-head">
                <span>Buscador por medida</span>
                <span className="mono-sub">Precio instalado · IVA incl.</span>
              </div>
              <div className="buscador-grid">
                <label>Ancho
                  <select name="ancho" defaultValue="" className="field" aria-label="Ancho">
                    <option value="" disabled>205</option>
                    <option>175</option><option>185</option><option>195</option><option>205</option><option>215</option><option>225</option><option>235</option><option>265</option>
                  </select>
                </label>
                <label>Alto
                  <select name="alto" defaultValue="" className="field" aria-label="Alto">
                    <option value="" disabled>55</option>
                    <option>45</option><option>50</option><option>55</option><option>60</option><option>65</option><option>70</option>
                  </select>
                </label>
                <label>Aro
                  <select name="aro" defaultValue="" className="field" aria-label="Aro">
                    <option value="" disabled>16</option>
                    <option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
                  </select>
                </label>
                <label>Marca (opcional)
                  <select name="marca" defaultValue="" className="field" aria-label="Marca">
                    <option value="">Todas</option>
                    <option>Michelin</option><option>Bridgestone</option><option>Continental</option><option>Pirelli</option><option>Hankook</option><option>Dunlop</option>
                  </select>
                </label>
              </div>
              <div className="buscador-foot">
                <button type="submit" className="btn-tinta" style={{ width: "100%", justifyContent: "center" }}>Ver precio instalado</button>
                <p className="buscador-hint">¿No sabes la medida? Mira el flanco del neumático o envíanos la patente por WhatsApp.</p>
                {busquedaOk && <div style={{ fontSize: 11, color: "var(--rojo)", border: "1px solid var(--rojo)", padding: "8px 10px", background: "#fff" }}>{busquedaOk}</div>}
              </div>
            </form>
            <div className="hero-badges">
              <span>Precio instalado</span>
              <span>Stock real</span>
              <span>Instalación con hora</span>
              <span>Alineación 3D</span>
            </div>
            <p style={{ marginTop: 10, color: "var(--gris)", fontSize: 11, lineHeight: 1.6 }}>Stock en línea actualizado cada mañana. Si la medida quedó sin stock después de tu pedido, te llamamos en 2 horas — no te hacemos venir por nada.</p>
          </div>
          <div className="hero-right">
            <img src="media/taller.jpg" alt="Interior de serviteca vacía con elevador vacío, piso epoxi gris claro y estanterías de neumáticos alineados por medida, luz mañana" loading="eager" />
            <div className="hero-caption">
              <span>NEUMA — montaje con hora, sin fila · alineación 3D incluida</span>
              <span className="dots" aria-hidden><i></i><i></i><i></i></span>
            </div>
          </div>
        </div>
        <div className="hero-band">Precio instalado · Stock actualizado hoy · Alineación 3D revisión incluida · Balanceo y válvula</div>
      </section>

      <section id="cifras" className="section-pad">
        <div className="wrap">
          <div className="kicker">Evidencia, no promesas</div>
          <h2 className="h2" style={{ maxWidth: 620 }}>Números que se sienten al manejar.</h2>
          <div className="cifras-grid" style={{ marginTop: 26 }}>
            {CIFRAS.map((c, i) => {
              const v = useCountUp(cifrasIn, c.v);
              const display = c.v >= 1000 ? v.toLocaleString("es-CL") : String(v);
              return (
                <div key={i} className="cifra">
                  <div className="cifra-num">{c.v >= 48000 ? `+${display}` : c.suffix === "%" ? `${v}${c.suffix}` : `+${display}${c.suffix}`}</div>
                  <div className="cifra-label">{c.label}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 14, color: "var(--gris)", fontSize: 11, letterSpacing: "0.02em" }}>Sin “desde” engañoso. El precio que ves es instalado. Revisión de alineación incluida.</p>
        </div>
      </section>

      <section id="catalogo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Índice</div>
          <h2 className="h2">Tu medida, sin adivinar.</h2>
          <p className="lead">Seis familias. Toca cada una para ver medida ejemplo y precio instalado IVA incluido.</p>
          <div className="catalogo-list" style={{ marginTop: 24 }}>
            {CATALOGO.map((it, idx) => {
              const open = openCat === idx;
              return (
                <div key={it.n} className="catalogo-row" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenCat(open ? null : idx)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenCat(open ? null : idx); } }}>
                  <div className="catalogo-num">{it.n}</div>
                  <div>
                    <div className="catalogo-title">{it.title}</div>
                    <div className="sku" style={{ marginTop: 4 }}>{it.desc}</div>
                  </div>
                  <div className="catalogo-meta">{it.meta}</div>
                  <div style={{ color: "var(--rojo)", fontSize: 18, textAlign: "right" }}>{open ? "—" : "+"}</div>
                  {open && (
                    <div className="catalogo-panel">
                      <div><div className="sku">{it.medida} · <span className="price">{it.price} instalado IVA incl.</span></div><div className="sku" style={{ marginTop: 4 }}>{it.desc}</div></div>
                      <a href="#precios" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 10 }} onClick={(e) => e.stopPropagation()}>Ver precios</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="servicios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Servicios</div>
          <h2 className="h2">Todo en el mismo lugar.</h2>
          <p className="lead">No te mandamos a otro taller. Aquí montamos, balanceamos, alineamos y reparamos.</p>
          <div className="servicios-grid">
            {SERVICIOS.map((s) => (
              <div key={s.n} className="serv-col">
                <div className="serv-num">{s.n}</div>
                <div className="serv-title">{s.title}</div>
                <div className="serv-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 22, border: "1px solid var(--linea)", background: "#fff", padding: "10px 14px", display: "flex", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
            <span>Horario montaje Lu–Sá con hora exacta · sin fila</span><span>Ñuñoa · RM</span>
          </div>
        </div>
      </section>

      <section id="precios" className="section-pad">
        <div className="wrap">
          <div className="kicker">Precios instalados, sin letra chica</div>
          <h2 className="h2">Lo que ves, pagas. Instalado.</h2>
          <p className="lead">Valores IVA incluido. Instalado = montaje + balanceo + válvula nueva + revisión alineación.</p>
          <div style={{ marginTop: 24, overflowX: "auto" }}>
            <table className="tabla">
              <thead>
                <tr><th>Medida</th><th>Modelo</th><th>Instalación incluida</th><th style={{ textAlign: "right" }}>Precio instalado</th><th></th></tr>
              </thead>
              <tbody>
                {PRECIOS.map((r) => (
                  <tr key={r.medida}>
                    <td className="mono" style={{ fontWeight: 600, letterSpacing: "0.04em" }}>{r.medida}</td>
                    <td style={{ fontWeight: 500 }}>{r.modelo}<div className="sku" style={{ fontSize: 11 }}>{r.uso}</div></td>
                    <td className="sku" style={{ maxWidth: 220 }}>{r.incl}</td>
                    <td className="num">${r.price.toLocaleString("es-CL")}</td>
                    <td style={{ textAlign: "right" }}><a href="#reserva" className="btn-tinta" style={{ padding: "7px 12px", fontSize: 10 }}>Agendar</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="nota-grid">
            <div className="nota">
              Instalado = montaje + balanceo + válvula nueva + revisión alineación. <strong>Alineación 3D correctiva $25.900</strong> si aplica. Precios actualizados cada martes. El total se confirma antes de pagar, nunca después. Comunas despacho: Santiago, Ñuñoa, La Reina, Providencia, Las Condes — ventana montaje 9:00–18:30, sáb 9:00–14:00.
            </div>
            <div className="nota-side">
              <div className="side-title">Ventana de montaje</div>
              <div className="side-line">Lu–Vi 9:00–18:30</div>
              <div className="side-line">Sá 9:00–14:00</div>
              <div className="side-line">Dom cerrado</div>
              <div style={{ marginTop: 10, fontSize: 11, color: "var(--gris)", lineHeight: 1.5 }}>Montaje con hora exacta. Si llegas a la hora, entras a la hora.</div>
            </div>
          </div>
          <div className="dolores">
            <div className="dolor"><span className="dolor-q">“Cotizas por WhatsApp y te responden ‘¿qué medida busca?’ aunque ya la diste.”</span><span className="dolor-a">Aquí el buscador filtra por medida exacta y stock real — sin repreguntar.</span></div>
            <div className="dolor"><span className="dolor-q">“El precio es sin IVA, sin instalación y sin balanceo — te enteras en caja.”</span><span className="dolor-a">Precio publicado siempre instalado e IVA incluido.</span></div>
            <div className="dolor"><span className="dolor-q">“Te dicen ‘hay stock’ y cuando llegas, la medida no está.”</span><span className="dolor-a">Si no hay, lo ves antes de pagar. Y te llamamos en 2 horas.</span></div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-pad">
        <div className="wrap">
          <div className="kicker">Método</div>
          <h2 className="h2">En 30 segundos, con hora.</h2>
          <div className="metodo-grid" style={{ marginTop: 24 }}>
            <div className="metodo-col">
              <div className="metodo-num">01</div>
              <div className="metodo-title">Eliges medida</div>
              <div className="metodo-desc">Por medida (205/55R16) o por patente/año/marca. Si dudas, envía foto del flanco y te la identificamos.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">02</div>
              <div className="metodo-title">Ves precio instalado y stock</div>
              <div className="metodo-desc">Precio IVA incl. con instalación detallada. Stock real de bodega RM actualizado hoy — sin sorpresas en caja.</div>
            </div>
            <div className="metodo-col">
              <div className="metodo-num">03</div>
              <div className="metodo-title">Agendas montaje</div>
              <div className="metodo-desc">Eliges ventana exacta Lu–Sá, pagas y llegas sin fila. Montaje 45 min + alineación 3D si aplica.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-pad">
        <div className="wrap">
          <div className="kicker">Taller</div>
          <h2 className="h2">Orden que se ve. Neumático que calza.</h2>
          <div className="gal-grid" style={{ marginTop: 24 }}>
            <div className={`gal-card ken reveal ${galIn ? "in" : ""}`} style={{ height: 520 }}>
              <img src="media/still.jpg" alt="Neumático 205/55R16 de perfil sobre papel kraft claro con etiqueta de medida y lápiz técnico, luz natural" loading="lazy" />
              <div className="gal-caption"><span>Bodegón 01 · 205/55R16 sobre papel kraft · luz norte</span><span>4:5</span></div>
            </div>
            <div className={`gal-card reveal ${galIn ? "in" : ""}`} style={{ height: 520, transitionDelay: "0.12s" }}>
              <img src="media/detail.jpg" alt="Macro de banda de rodado y detalle de llanta con luz rasante suave" loading="lazy" />
              <div className="gal-caption"><span>Detalle 02 · banda de rodado · compuesto para asfalto chileno</span><span>1:1</span></div>
            </div>
          </div>
          <div style={{ marginTop: 12, width: "100%", height: 280, border: "1px solid var(--linea)", overflow: "hidden", background: "#fff" }}>
            <img src="media/pasillo.jpg" alt="Pasillo de bodega de neumáticos luminoso vacío con sombra suave" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .95 }} />
          </div>
          <div style={{ border: "1px solid var(--linea)", borderTop: "none", background: "var(--papel-2)", padding: "8px 12px", display: "flex", justifyContent: "space-between", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
            <span>Pasillo 03 · bodega luminosa ·stock por medida · sombra suave</span><span>16:9</span>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad">
        <div className="wrap">
          <div className="kicker">Preguntas honestas</div>
          <h2 className="h2">Sin letra chica.</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={`faq-item ${open ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}>
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden>{open ? "×" : "+"}</span>
                  </button>
                  <div className="faq-a"><div className="faq-a-inner"><p>{f.a}</p></div></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reserva" className="section-pad">
        <div className="wrap">
          <div className="kicker">Agendar montaje</div>
          <div className="reserva-box" style={{ marginTop: 18 }}>
            <div className="reserva-left">
              <h2 className="h2" style={{ fontSize: "2rem" }}>Agenda tu montaje.<br />Entra, instalamos y sigues.</h2>
              <div className="tel">+56 9 6585 5290</div>
              <div style={{ color: "var(--gris)", fontSize: 13, lineHeight: 1.6 }}>hola@neuma.cl<br />Santiago — instalación en taller + despacho RM 24–48h<br />Lun–Vie 9:00–18:30 · Sáb 9:00–14:00 · Montajes con hora agendada (sin fila)</div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="tel:+56965855290" className="btn-tinta">Llamar taller</a>
                <a href="https://wa.me/56965855290" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
              </div>
              <p style={{ marginTop: 12, fontSize: 11, color: "var(--gris)", lineHeight: 1.6 }}>Responden técnicos, no bots. Si no contestamos, devolvemos el llamado en 2 horas hábiles.</p>
            </div>
            <div className="reserva-right">
              {!formOk ? (
                <form onSubmit={(e) => { e.preventDefault(); setFormOk(true); }} style={{ display: "grid", gap: 10 }}>
                  <input className="field" placeholder="Nombre / empresa" required aria-label="Nombre" />
                  <input className="field" placeholder="WhatsApp" required aria-label="WhatsApp" />
                  <input className="field" placeholder="Medida o patente (ej. 205/55R16)" required aria-label="Medida" />
                  <select className="field" aria-label="Servicio" defaultValue="">
                    <option value="" disabled>Servicio</option>
                    <option>Instalación con hora</option>
                    <option>Alineación 3D + balanceo</option>
                    <option>Vulcanización</option>
                    <option>Despacho RM</option>
                  </select>
                  <button type="submit" className="btn-tinta" style={{ justifyContent: "center" }}>Solicitar hora</button>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--gris)", lineHeight: 1.5 }}>Hora exacta Lu–Sá. Precio instalado confirmado antes de pagar.</p>
                </form>
              ) : (
                <div style={{ border: "1px solid var(--rojo)", background: "var(--papel)", padding: 18 }}>
                  <div style={{ fontWeight: 600, color: "var(--tinta)" }}>Solicitud recibida — NEUMA</div>
                  <p style={{ color: "var(--gris)", lineHeight: 1.6, fontSize: 13, margin: "8px 0 0" }}>Te contacta taller en 30 min hábil para confirmar medida, stock y ventana de montaje. Si no hay stock, te avisamos antes de cobrar.</p>
                  <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => setFormOk(false)}>Enviar otra</button>
                </div>
              )}
              <div style={{ borderTop: "1px solid var(--linea)", paddingTop: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gris)" }}>
                Instalación con hora · Alineación 3D · Balanceo computarizado
              </div>
            </div>
          </div>
          <footer className="footer" style={{ marginTop: 28 }}>
            <span>© {new Date().getFullYear()} NEUMA SpA · Neumáticos y Serviteca · Santiago, Chile · SII · Boleta y factura</span>
            <span>Hecho con medida exacta · Contraste AA · radios 0</span>
          </footer>
        </div>
      </section>

      <div className={`sticky-cta ${showSticky ? "show" : ""}`} role="complementary" aria-label="Acción rápida">
        <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tinta)" }}>¿Tu medida?</span>
        <a href="#precios" className="btn-tinta" style={{ padding: "8px 14px", fontSize: 11 }}>Cotizar</a>
      </div>
    </>
  );
}
