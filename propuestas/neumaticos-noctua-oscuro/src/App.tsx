import { useEffect, useState } from "react";

const HERO_16 = "/media/noctua-hero-16x9.png";
const HERO_9 = "/media/noctua-hero-9x16.png";
const HERO_VIDEO = "/media/noctua-hero-loop.mp4";

function useMediaExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setExists(r.ok);
      })
      .catch(() => {
        if (!cancelled) setExists(false);
      });
    return () => {
      cancelled = true;
    };
  }, [src]);
  return exists;
}

type Ficha = {
  id: number;
  medida: string;
  aro: string;
  marca: string;
  modelo: string;
  volt: string;
  precio: number;
  precioTxt: string;
  stockLabel: string;
  stockOk: boolean;
  tile: string;
  aspect: string;
};

const FICHAS: Ficha[] = [
  { id: 1, medida: "195/65 R15", aro: "15", marca: "Hankook", modelo: "Kinergy", volt: "91H", precio: 69990, precioTxt: "$69.990", stockLabel: "En stock", stockOk: true, tile: "noctua-tile-01.png", aspect: "1 / 1" },
  { id: 2, medida: "205/55 R16", aro: "16", marca: "Michelin", modelo: "Primacy 4", volt: "91V", precio: 89990, precioTxt: "$89.990", stockLabel: "En stock", stockOk: true, tile: "noctua-tile-02.png", aspect: "1 / 1" },
  { id: 3, medida: "225/45 R17", aro: "17", marca: "Continental", modelo: "PremiumContact", volt: "94W", precio: 119990, precioTxt: "$119.990", stockLabel: "Quedan 3", stockOk: false, tile: "noctua-tile-03.png", aspect: "1 / 1" },
  { id: 4, medida: "235/45 R18", aro: "18", marca: "Bridgestone", modelo: "Turanza", volt: "98Y", precio: 139990, precioTxt: "$139.990", stockLabel: "Quedan 2", stockOk: false, tile: "noctua-tile-04.png", aspect: "3 / 4" },
  { id: 5, medida: "265/65 R17", aro: "17", marca: "Goodyear", modelo: "Wrangler AT", volt: "112T", precio: 149990, precioTxt: "$149.990", stockLabel: "En stock", stockOk: true, tile: "noctua-tile-02.png", aspect: "1 / 1" },
  { id: 6, medida: "185/65 R15", aro: "15", marca: "Bridgestone", modelo: "Ecopia", volt: "88H", precio: 64990, precioTxt: "$64.990", stockLabel: "En stock", stockOk: true, tile: "noctua-tile-01.png", aspect: "1 / 1" },
];

export function App() {
  const hero16Exists = useMediaExists(HERO_16);
  const heroVideoExists = useMediaExists(HERO_VIDEO);

  const [aroFiltro, setAroFiltro] = useState<string>("todos");
  const [marcaFiltro, setMarcaFiltro] = useState<string>("todas");
  const [animKey, setAnimKey] = useState(0);

  // form state
  const [ancho, setAncho] = useState("");
  const [perfil, setPerfil] = useState("");
  const [aro, setAroForm] = useState("");
  const [marcaPref, setMarcaPref] = useState("todas");
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [sucursal, setSucursal] = useState("La Reina");
  const [fecha, setFecha] = useState("hoy");
  const [comentario, setComentario] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (hero16Exists === false) {
      console.warn("[NOCTUA] Falta media: noctua-hero-16x9.png — usando fallback media-falta");
    }
    if (hero16Exists === true) {
      console.log("[NOCTUA] Hero 16:9 encontrado");
    }
  }, [hero16Exists]);

  // cargar última medida
  useEffect(() => {
    try {
      const v = localStorage.getItem("noctua_ultima_medida");
      if (v) {
        const parts = v.split(" ");
        // formato "205/55 R16" o "205 55 R16"
        if (parts.length === 2) {
          const [wP, a] = parts;
          const [w, p] = wP.split("/");
          if (w) setAncho(w);
          if (p) setPerfil(p);
          if (a) setAroForm(a);
        } else if (parts.length === 3) {
          setAncho(parts[0] || "");
          setPerfil(parts[1] || "");
          setAroForm(parts[2] || "");
        }
      }
    } catch {}
    // check hash scroll buscador
    const params = new URLSearchParams(window.location.search);
    const q = params.get("medida");
    if (q) {
      const parts = q.split(" ");
      if (parts.length === 2) {
        const [wP, a] = parts;
        const [w, p] = wP.split("/");
        if (w) setAncho(w);
        if (p) setPerfil(p);
        if (a) setAroForm(a);
      }
    }
  }, []);

  const handleBuscar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const aw = String(fd.get("ancho") || "").trim();
    const pf = String(fd.get("perfil") || "").trim();
    const ar = String(fd.get("aro") || "").trim();
    if (aw && pf && ar) {
      const rawAro = ar.toUpperCase().startsWith("R") ? ar.toUpperCase() : `R${ar}`;
      const medida = `${aw}/${pf} ${rawAro}`;
      try {
        localStorage.setItem("noctua_ultima_medida", medida);
      } catch {}
      setAncho(aw);
      setPerfil(pf);
      setAroForm(rawAro);
      window.location.hash = "catalogo-stock";
      document.getElementById("catalogo-stock")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fichasFiltradas = FICHAS.filter((f) => {
    if (aroFiltro !== "todos" && f.aro !== aroFiltro) return false;
    if (marcaFiltro !== "todas" && f.marca !== marcaFiltro) return false;
    return true;
  });

  const filtrarAro = (aroVal: string) => {
    setAroFiltro(aroVal);
    setAnimKey((k) => k + 1);
  };
  const filtrarMarca = (m: string) => {
    setMarcaFiltro(m);
    setAnimKey((k) => k + 1);
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    const w = Number(ancho);
    const p = Number(perfil);
    const aroNumStr = aro.replace(/[^0-9]/g, "");
    const aroNum = Number(aroNumStr);
    if (!ancho || !perfil || !aro) {
      errs.medida = "Completa ancho, perfil y aro. Ej: 205/55 R16";
    } else if (!(w >= 145 && w <= 335) || !(p >= 25 && p <= 85) || !(aroNum >= 13 && aroNum <= 22)) {
      errs.medida = "Medida inválida. Ancho 145–335, perfil 25–85, aro R13–R22";
    } else if (!String(ancho).match(/^\d+$/) || !String(perfil).match(/^\d+$/)) {
      errs.medida = "Ancho y perfil deben ser números";
    }
    const telDigits = tel.replace(/\D/g, "");
    // validación 9 dígitos (569 + 8) o 9 dígitos sin 56
    let digits9 = telDigits;
    if (digits9.startsWith("56")) digits9 = digits9.slice(2);
    if (digits9.startsWith("9")) {
      if (digits9.length !== 9) errs.tel = "Tel debe tener 9 dígitos. Ej: +56 9 1234 5678";
    } else {
      if (telDigits.length < 8) errs.tel = "Tel debe tener 9 dígitos. Ej: +56 9 1234 5678";
      else if (digits9.length !== 9 && digits9.length !== 8) errs.tel = "Tel debe tener 9 dígitos. Ej: +56 9 1234 5678";
    }
    if (nombre.trim().length < 2) errs.nombre = "Nombre mínimo 2 caracteres";
    // sucursal y fecha tienen default

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitCotiza = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (!validateForm()) return;
    setLoading(true);
    const rawAro = aro.toUpperCase().startsWith("R") ? aro.toUpperCase() : `R${aro}`;
    const medida = `${ancho}/${perfil} ${rawAro}`;
    try {
      localStorage.setItem("noctua_ultima_medida", medida);
    } catch {}
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const fechaTxt = fecha === "hoy" ? "hoy" : "mañana";
      const msg = `Hola NOCTUA, cotizo ${medida} para ${sucursal} ${fechaTxt}`;
      const encoded = encodeURIComponent(msg);
      const wa = `https://wa.me/56912345678?text=${encoded}`;
      window.open(wa, "_blank");
    }, 800);
  };

  return (
    <>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <a className="header-left" href="#" aria-label="NOCTUA inicio">
            <span className="logo-mark">NOCTUA</span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span className="logo-sub">NEUMÁTICOS · SERVITECA</span>
            </span>
          </a>

          <nav className="header-nav" aria-label="Principal">
            <a href="#catalogo-stock">Medidas</a>
            <a href="#servicios-piso">Servicios</a>
            <a href="#promo-4x3">Promo</a>
            <a href="#sucursal-hoy">Sucursal</a>
          </nav>

          <div className="header-right">
            <a className="header-tel" href="tel:+56212345678">
              +56 2 1234 5678
            </a>
            <a className="btn-cotizar" href="#reserva-cotizacion">
              Cotizar
            </a>
            <button className="btn-hamburger" aria-label="Menú" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="busca-medida" className="hero" aria-label="Busca tu medida">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">SERVITECA NOCTURNA · SANTIAGO</p>
              <h1 className="hero-h1">Tu medida exacta, montada hoy.</h1>
              <p className="hero-bajada">
                Stock real por medida. Precio claro instalado. Agendas hoy hasta las 20:00 — La Reina y La Florida.
              </p>

              <form className="buscador" onSubmit={handleBuscar} aria-label="Buscador de medida">
                <div className="buscador-fields">
                  <input name="ancho" aria-label="Ancho" placeholder="205" inputMode="numeric" pattern="[0-9]*" defaultValue={ancho} />
                  <input name="perfil" aria-label="Perfil" placeholder="55" inputMode="numeric" pattern="[0-9]*" defaultValue={perfil} />
                  <input name="aro" aria-label="Aro" placeholder="R16" defaultValue={aro} />
                </div>
                <button className="btn-buscar" type="submit">
                  Buscar
                </button>
              </form>
              <p className="buscador-micro">Escribe tu medida del flanco. Ej: 205/55 R16</p>

              <div className="hero-ctas">
                <a className="btn-primary" href="#reserva-cotizacion">
                  Cotizar mi medida por WhatsApp
                </a>
                <a className="btn-ghost" href="#catalogo-stock">
                  Ver stock real →
                </a>
              </div>

              <p className="hero-nota">Valores referenciales instalados. Se confirma stock y DOT al cotizar.</p>

              <div className="hero-pill" aria-label="Agenda hoy">
                <span className="hero-pill-dot" aria-hidden="true" />
                <span className="hero-pill-text">Agenda hoy hasta 20:00</span>
              </div>
            </div>

            <div className="hero-media" aria-hidden="false">
              {hero16Exists === false ? (
                <div
                  className="media-falta"
                  data-falta="noctua-hero-16x9.png"
                  style={{
                    background: "#11161B",
                    border: "1px dashed rgba(237,232,224,0.2)",
                    display: "grid",
                    placeItems: "center",
                    color: "rgba(237,232,224,0.5)",
                    padding: "40px",
                  }}
                >
                  Falta: noctua-hero-16x9.png
                </div>
              ) : (
                <>
                  <picture style={{ width: "100%", height: "100%", display: "block" }}>
                    <source media="(max-width: 768px)" srcSet={HERO_9} />
                    <img src={HERO_16} alt="" role="presentation" loading="eager" decoding="async" />
                  </picture>
                  {heroVideoExists ? (
                    <video autoPlay muted loop playsInline poster={HERO_16} aria-hidden="true">
                      <source src={HERO_VIDEO} type="video/mp4" />
                    </video>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </section>

        {/* #catalogo-stock */}
        <section id="catalogo-stock" className="section-catalogo">
          <div className="shell">
            <p className="kicker">STOCK REAL</p>
            <h2 className="h2-catalogo">Medidas que salen hoy</h2>
            <p className="bajada-catalogo">Precios instalados con montaje y balanceo incluidos. Alineación aparte.</p>

            <div className="filtros-row">
              <div className="filtros-chips" role="group" aria-label="Filtrar por aro">
                {["todos", "14", "15", "16", "17", "18"].map((a) => (
                  <button
                    key={a}
                    type="button"
                    className={"chip" + (aroFiltro === a ? " chip--active" : "")}
                    onClick={() => filtrarAro(a)}
                    aria-pressed={aroFiltro === a}
                  >
                    {a === "todos" ? "Todos" : `Aro ${a}`}
                  </button>
                ))}
              </div>
              <label className="select-marca-wrap">
                <span className="sr-only">Filtrar por marca</span>
                <select value={marcaFiltro} onChange={(e) => filtrarMarca(e.target.value)} aria-label="Marca">
                  <option value="todas">Marca: todas</option>
                  <option value="Michelin">Michelin</option>
                  <option value="Bridgestone">Bridgestone</option>
                  <option value="Continental">Continental</option>
                  <option value="Hankook">Hankook</option>
                  <option value="Goodyear">Goodyear</option>
                </select>
              </label>
            </div>

            <div key={animKey} className="catalogo-grilla">
              {fichasFiltradas.length === 0 ? (
                <p className="catalogo-vacio">Sin resultados para ese filtro. Prueba otro aro o marca.</p>
              ) : (
                fichasFiltradas.map((f) => (
                  <article key={f.id} className="ficha">
                    <div className="ficha-top">
                      <span className="ficha-medida">{f.medida}</span>
                      <span className={"pill-stock " + (f.stockOk ? "pill-stock--ok" : "pill-stock--low")}>{f.stockLabel}</span>
                    </div>
                    <div className="ficha-media" style={{ aspectRatio: f.aspect }}>
                      <div className="media-falta" data-falta={f.tile}>
                        Falta: {f.tile}
                      </div>
                    </div>
                    <p className="ficha-marca">
                      {f.marca} {f.modelo} — {f.volt}
                    </p>
                    <p className="ficha-precio">
                      desde {f.precioTxt} <span className="ficha-precio-note">instalado (montaje+balanceo)</span>
                    </p>
                    <a className="ficha-cta" href="#reserva-cotizacion">
                      Cotizar esta medida →
                    </a>
                  </article>
                ))
              )}
            </div>

            <p className="catalogo-nota">
              Montaje + balanceo incluidos. Válvula nueva incluida. Alineación $24.990 aparte. Valores referenciales; se confirma
              DOT y stock al cotizar (boleta/factura).
            </p>
          </div>
        </section>

        {/* #servicios-piso */}
        <section id="servicios-piso" className="section-servicios">
          <div className="shell">
            <div className="servicios-grid">
              <div className="servicios-left">
                <h2 className="h2-servicios">Servicios en piso</h2>
                <p className="bajada-servicios">Todo en 45 minutos. Sin sorpresas en caja.</p>

                <div className="servicios-lista">
                  <div className="servicio-fila">
                    <div className="servicio-info">
                      <h3 className="servicio-nombre">Alineación computarizada</h3>
                      <p className="servicio-desc">Corrección 4 ruedas, informe impreso</p>
                    </div>
                    <div className="servicio-meta">
                      <span className="servicio-precio">$24.990</span>
                      <span className="servicio-tiempo">30 min</span>
                    </div>
                    <a className="servicio-cta" href="#reserva-cotizacion">
                      Agendar →
                    </a>
                  </div>

                  <div className="servicio-fila">
                    <div className="servicio-info">
                      <h3 className="servicio-nombre">Balanceo + montaje</h3>
                      <p className="servicio-desc">Incluido si compras neumáticos NOCTUA</p>
                    </div>
                    <div className="servicio-meta">
                      <span className="servicio-precio">$12.990 c/u</span>
                      <span className="servicio-tiempo servicio-tiempo--ok">Incluido</span>
                    </div>
                    <a className="servicio-cta" href="#reserva-cotizacion">
                      Agendar →
                    </a>
                  </div>

                  <div className="servicio-fila">
                    <div className="servicio-info">
                      <h3 className="servicio-nombre">Vulcanización y reparación</h3>
                      <p className="servicio-desc">Parche interior, sellado</p>
                    </div>
                    <div className="servicio-meta">
                      <span className="servicio-precio">$14.990</span>
                      <span className="servicio-tiempo">desde</span>
                    </div>
                    <a className="servicio-cta" href="#reserva-cotizacion">
                      Agendar →
                    </a>
                  </div>

                  <div className="servicio-fila">
                    <div className="servicio-info">
                      <h3 className="servicio-nombre">Cambio de aceite + filtro</h3>
                      <p className="servicio-desc">5W30 sintético, 4L + filtro</p>
                    </div>
                    <div className="servicio-meta">
                      <span className="servicio-precio">$39.990</span>
                      <span className="servicio-tiempo">desde</span>
                    </div>
                    <a className="servicio-cta" href="#reserva-cotizacion">
                      Agendar →
                    </a>
                  </div>
                </div>
              </div>

              <div className="servicios-right">
                <div className="servicios-media-wrap">
                  <div className="media-falta" data-falta="noctua-interior-16x9.png">
                    Falta: noctua-interior-16x9.png
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #promo-4x3 */}
        <section id="promo-4x3" className="section-promo">
          <div className="shell">
            <div className="promo-grid">
              <div className="promo-box">
                <div className="promo-head">
                  <h2 className="h2-promo">Promo 4×3 en aro 15 y 16</h2>
                  <span className="badge-stock">Stock limitado</span>
                </div>
                <p className="promo-bajada">
                  Paga 3, lleva 4 en medidas seleccionadas 185/65 R15 y 205/55 R16. Montaje incluido. Hasta agotar stock (18
                  unidades).
                </p>
                <p className="promo-medidas-label">Medidas incluidas:</p>
                <p className="promo-medidas">185/65 R15 Hankook · 195/65 R15 Hankook · 205/55 R16 Michelin/Hankook</p>
                <div className="promo-precio-row">
                  <p className="promo-precio">4 neumáticos 205/55 R16 desde $269.970</p>
                  <p className="promo-tachado">4× $89.990 = $359.960</p>
                  <p className="promo-ahorro">
                    Ahorras <strong>$89.990</strong>
                  </p>
                </div>
                <a className="btn-primary promo-cta" href="#reserva-cotizacion">
                  Cotizar promo 4×3
                </a>
                <p className="promo-nota">No acumulable. DOT 2024/2025. Instalación en La Reina/La Florida.</p>
              </div>
              <div className="promo-media">
                <div className="media-falta" data-falta="noctua-proof-16x9.png">
                  Falta: noctua-proof-16x9.png
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #sucursal-hoy */}
        <section id="sucursal-hoy" className="section-sucursal">
          <div className="shell">
            <h2 className="h2-sucursal">Retira e instala hoy</h2>
            <div className="sucursal-grilla">
              <article className="sucursal-card">
                <h3 className="sucursal-nombre">La Reina</h3>
                <p className="sucursal-dir">Av. Príncipe de Gales 9140, La Reina</p>
                <p className="sucursal-horario">Lun–Sáb 9:00–20:00 · Dom 10:00–14:00</p>
                <a className="sucursal-tel" href="tel:+56212345678">
                  +56 2 1234 5678
                </a>
                <div className="sucursal-pills">
                  <span className="pill-agenda">
                    <span className="pill-dot" aria-hidden="true" /> Agenda hoy hasta 20:00
                  </span>
                  <span className="sucursal-dist">A 12 min de Tobalaba</span>
                </div>
              </article>
              <article className="sucursal-card">
                <h3 className="sucursal-nombre">La Florida</h3>
                <p className="sucursal-dir">Av. La Florida 9680, La Florida</p>
                <p className="sucursal-horario">Lun–Sáb 9:00–20:00 · Dom 10:00–14:00</p>
                <a className="sucursal-tel" href="tel:+56212345678">
                  +56 2 1234 5678
                </a>
                <div className="sucursal-pills">
                  <span className="pill-agenda">
                    <span className="pill-dot" aria-hidden="true" /> Agenda hoy hasta 19:30
                  </span>
                </div>
              </article>
            </div>

            <div className="mapa-abstracto" aria-label="Mapa 2 sucursales RM">
              <div className="mapa-grid-lines" aria-hidden="true" />
              <div className="mapa-pin mapa-pin--reina">
                <span className="mapa-pin-dot" /> La Reina
              </div>
              <div className="mapa-pin mapa-pin--florida">
                <span className="mapa-pin-dot" /> La Florida
              </div>
              <p className="mapa-label">Mapa: 2 sucursales · RM</p>
            </div>

            <p className="sucursal-micro">Llegas, montamos en 45 min. Café y wifi. Factura en el momento.</p>
          </div>
        </section>

        {/* #reserva-cotizacion */}
        <section id="reserva-cotizacion" className="section-reserva">
          <div className="shell">
            <div className="reserva-grid">
              <div className="reserva-left">
                <h2 className="h2-reserva">Cotiza tu medida en 2 minutos</h2>
                <p className="bajada-reserva">
                  Te respondemos por WhatsApp con precio instalado y horas disponibles hoy. Sin spam.
                </p>
                <ul className="reserva-bullets">
                  <li>
                    <span className="check">✓</span> Stock confirmado
                  </li>
                  <li>
                    <span className="check">✓</span> DOT vigente informado
                  </li>
                  <li>
                    <span className="check">✓</span> Hora agendada hoy
                  </li>
                </ul>
                <p className="reserva-desde">Desde 2018 en Santiago · 18 unidades promo 4×3</p>
              </div>

              <div className="reserva-card">
                {success && (
                  <div className="form-success" role="status">
                    ¡Cotización enviada! Te escribimos en 15 min por WhatsApp. Revisa tu teléfono.
                  </div>
                )}
                <form onSubmit={handleSubmitCotiza} noValidate>
                  <div className="form-row form-row--medida">
                    <label>
                      <span>Ancho</span>
                      <input value={ancho} onChange={(e) => setAncho(e.target.value)} placeholder="205" inputMode="numeric" required />
                    </label>
                    <label>
                      <span>Perfil</span>
                      <input value={perfil} onChange={(e) => setPerfil(e.target.value)} placeholder="55" inputMode="numeric" required />
                    </label>
                    <label>
                      <span>Aro</span>
                      <input value={aro} onChange={(e) => setAroForm(e.target.value)} placeholder="R16" required />
                    </label>
                  </div>
                  {errors.medida && <p className="form-error">{errors.medida}</p>}

                  <label className="form-field">
                    <span>Marca preferida</span>
                    <select value={marcaPref} onChange={(e) => setMarcaPref(e.target.value)}>
                      <option value="todas">Cualquiera</option>
                      <option value="Michelin">Michelin</option>
                      <option value="Bridgestone">Bridgestone</option>
                      <option value="Continental">Continental</option>
                      <option value="Hankook">Hankook</option>
                      <option value="Goodyear">Goodyear</option>
                    </select>
                  </label>

                  <label className="form-field">
                    <span>Nombre</span>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" required />
                  </label>
                  {errors.nombre && <p className="form-error">{errors.nombre}</p>}

                  <label className="form-field">
                    <span>WhatsApp</span>
                    <input value={tel} onChange={(e) => setTel(e.target.value)} placeholder="+56 9 1234 5678" inputMode="tel" required />
                  </label>
                  {errors.tel && <p className="form-error">{errors.tel}</p>}

                  <div className="form-row form-row--2">
                    <label className="form-field">
                      <span>Sucursal</span>
                      <select value={sucursal} onChange={(e) => setSucursal(e.target.value)}>
                        <option value="La Reina">La Reina</option>
                        <option value="La Florida">La Florida</option>
                      </select>
                    </label>
                    <label className="form-field">
                      <span>Fecha deseada</span>
                      <select value={fecha} onChange={(e) => setFecha(e.target.value)}>
                        <option value="hoy">Hoy</option>
                        <option value="mañana">Mañana</option>
                      </select>
                    </label>
                  </div>

                  <label className="form-field">
                    <span>Comentario (opcional)</span>
                    <textarea
                      value={comentario}
                      onChange={(e) => setComentario(e.target.value)}
                      placeholder="Ej: ¿tienen DOT 2025? ¿instalan hoy a las 18:00?"
                      rows={3}
                    />
                  </label>

                  <button className="btn-submit" type="submit" disabled={loading}>
                    {loading ? "Enviando…" : "Enviar a WhatsApp"}
                  </button>

                  <p className="form-nota">Al enviar aceptas contacto por WhatsApp. No compartimos tu número.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="footer-inner footer-inner--full">
          <p className="footer-copy">© 2026 NOCTUA Neumáticos · Serviteca Santiago</p>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#catalogo-stock">Medidas</a>
            <a href="#servicios-piso">Servicios</a>
            <a href="#promo-4x3">Promo</a>
            <a href="#sucursal-hoy">Sucursales</a>
          </nav>
          <div className="footer-right">
            <a href="tel:+56212345678" className="footer-tel">
              +56 2 1234 5678
            </a>
            <span className="footer-dir">Av. Príncipe de Gales 9140</span>
          </div>
        </div>
      </footer>

      <div className="mobile-sticky-bar" role="complementary" aria-label="Cotizar barra móvil">
        <a href="tel:+56212345678" className="mobile-sticky-tel">
          +56 2 1234 5678
        </a>
        <a href="#reserva-cotizacion" className="mobile-sticky-cta">
          Cotizar mi medida
        </a>
      </div>
    </>
  );
}
