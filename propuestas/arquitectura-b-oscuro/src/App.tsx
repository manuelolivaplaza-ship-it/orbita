import { useEffect, useState } from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="header-brand" aria-label="UMBRAL Arquitectura">
          <strong>UMBRAL</strong>
          <span>Arquitectura</span>
        </a>
        <nav className="header-nav" aria-label="Principal">
          <a href="#obras">Obras</a>
          <a href="#expediente">Expediente</a>
          <a href="#tarifas">Tarifas</a>
          <a href="#taller">Taller</a>
        </nav>
        <div className="header-actions">
          <a href="tel:+56987654321" className="header-tel">
            +56 9 8765 4321
          </a>
          <a href="#conversar" className="header-cta">
            Conversar
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroMedia() {
  const [imgOk, setImgOk] = useState(true);
  const [videoExists, setVideoExists] = useState(false);
  const imgSrc = "/media/umbral-hero-16x9.png";
  const videoSrc = "/media/umbral-hero-loop.mp4";

  useEffect(() => {
    fetch(videoSrc, { method: "HEAD" })
      .then((r) => {
        if (r.ok) setVideoExists(true);
      })
      .catch(() => {});
    if (!imgOk) {
      console.warn("[UMBRAL] Falta: umbral-hero-16x9.png en public/media/");
    }
  }, [imgOk]);

  if (!imgOk) {
    return (
      <div
        className="media-falta"
        data-falta="umbral-hero-16x9.png"
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
          border: "1px dashed var(--line)",
          color: "var(--muted)",
          font: "11px Sora, system-ui, sans-serif",
        }}
      >
        Falta: umbral-hero-16x9.png
      </div>
    );
  }

  return (
    <>
      <img
        src={imgSrc}
        alt="Mesa de taller con plano retroiluminado y maqueta blanca, luz cenital"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onError={() => {
          console.warn("[UMBRAL] Falta: umbral-hero-16x9.png en public/media/");
          setImgOk(false);
        }}
      />
      {videoExists && (
        <video autoPlay muted loop playsInline poster={imgSrc} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="umbral" className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">ESTUDIO UMBRAL — LAS CONDES · RM</p>
        <h1 className="hero-title">
          <span className="line">
            <span>La obra guarda silencio</span>
          </span>
          <span className="line">
            <span>hasta que la luz la</span>
          </span>
          <span className="line">
            <span>interroga por dentro</span>
          </span>
        </h1>
        <p className="hero-sub">Estudio para casas y obra nueva de alto estándar. Dibujamos, tramitamos y dirigimos con el mismo equipo. Sin subcontratos invisibles.</p>
        <div className="hero-ctas">
          <a href="#conversar" className="btn-primary">
            Conversar sobre tu proyecto
          </a>
          <a href="#expediente" className="btn-secondary">
            Ver expediente tipo
          </a>
        </div>
        <p className="hero-legal">Primera conversación sin costo · Responde arquitecto titular</p>
        <div className="hero-indicator">
          <span>EXPEDIENTE ↓</span>
        </div>
      </div>
      <div className="hero-media">
        <HeroMedia />
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function MediaThumb({ file, alt, size = 72 }: { file: string; alt: string; size?: number }) {
  const [ok, setOk] = useState(true);
  const src = `/media/${file}`;
  useEffect(() => {
    if (!ok) console.warn(`[UMBRAL] Falta: ${file} en public/media/`);
  }, [ok, file]);
  if (!ok) {
    return (
      <div className="media-falta thumb-falta" data-falta={file} style={{ width: size, height: size, flexShrink: 0 }}>
        Falta: {file}
      </div>
    );
  }
  return <img src={src} alt={alt} width={size} height={size} style={{ width: size, height: size, objectFit: "cover", display: "block", border: "1px solid var(--line)" }} onError={() => setOk(false)} />;
}

function MediaBox({ file, alt, ratio = "16 / 9", caption }: { file: string; alt: string; ratio?: string; caption?: string }) {
  const [ok, setOk] = useState(true);
  const src = `/media/${file}`;
  useEffect(() => {
    if (!ok) console.warn(`[UMBRAL] Falta: ${file} en public/media/`);
  }, [ok, file]);
  return (
    <figure className="media-box" style={{ margin: 0 }}>
      <div className="media-box-inner" style={{ aspectRatio: ratio, overflow: "hidden", border: "1px solid var(--line)", background: "var(--surface)" }}>
        {ok ? (
          <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={() => setOk(false)} />
        ) : (
          <div className="media-falta" data-falta={file}>
            Falta: {file}
          </div>
        )}
      </div>
      {caption && <figcaption className="media-caption">{caption}</figcaption>}
    </figure>
  );
}

/* ---------- #obras ---------- */
type Obra = {
  n: string;
  nombre: string;
  comuna: string;
  meta: string;
  tipo: string;
  ficha: { estructura: string; envolvente: string; ventanas: string };
  thumb: string;
};

const OBRAS: Obra[] = [
  { n: "01", nombre: "CASA QUEBRADA", comuna: "Cachagua", meta: "142 m2 · 2023", tipo: "Hormigón visto + pino Oregón", ficha: { estructura: "Hormigón armado in situ", envolvente: "Pino Oregón + hormigón", ventanas: "Termopanel 4-16-4 low-e" }, thumb: "umbral-tile-01-1x1.png" },
  { n: "02", nombre: "CASA LADERA", comuna: "Zapallar", meta: "198 m2 · 2022", tipo: "Acero + vidrio termopanel", ficha: { estructura: "Acero laminado + fundación hormigón", envolvente: "Acero negro + DVH", ventanas: "Termopanel templado 6-12-6" }, thumb: "umbral-tile-02-1x1.png" },
  { n: "03", nombre: "CASA PATIO", comuna: "Las Condes", meta: "167 m2 · 2024", tipo: "Hormigón + ladrillo hecho a mano", ficha: { estructura: "Hormigón + albañilería armada", envolvente: "Ladrillo hecho a mano + hormigón", ventanas: "Madera + DVH" }, thumb: "umbral-tile-03-1x1.png" },
  // resto rota t1/t2/t3; si falta asset se muestra media-falta con data-falta (ver comentario)
  { n: "04", nombre: "CASA BAJO PARRA", comuna: "Pirque", meta: "210 m2 · 2021", tipo: "Madera laminada + piedra laja", ficha: { estructura: "Madera laminada encolada", envolvente: "Piedra laja + madera", ventanas: "Corredera madera + termopanel" }, thumb: "umbral-tile-01-1x1.png" },
  { n: "05", nombre: "CASA VIENTO", comuna: "Matanzas", meta: "118 m2 · 2023", tipo: "Volúmenes prefabricados + pino", ficha: { estructura: "Bastidor madera + fundación pilotes", envolvente: "Pino Oregón + zinc", ventanas: "Aluminio + DVH" }, thumb: "umbral-tile-02-1x1.png" },
  { n: "06", nombre: "CASA ENTRE ÁRBOLES", comuna: "Chicureo", meta: "185 m2 · 2024", tipo: "Hormigón + acero corten", ficha: { estructura: "Hormigón armado + acero corten", envolvente: "Acero corten + hormigón", ventanas: "Acero + termopanel" }, thumb: "umbral-tile-03-1x1.png" },
  { n: "07", nombre: "CASA TALLER", comuna: "La Reina", meta: "95 m2 · 2022", tipo: "Albañilería armada + madera", ficha: { estructura: "Albañilería armada", envolvente: "Madera + estuco", ventanas: "PVC + DVH" }, thumb: "umbral-tile-01-1x1.png" },
  { n: "08", nombre: "CASA MIRADOR", comuna: "Concón", meta: "176 m2 · 2025", tipo: "Hormigón armado + cristal", ficha: { estructura: "Hormigón armado + losa nervada", envolvente: "Hormigón + cristal templado", ventanas: "Muro cortina termopanel" }, thumb: "umbral-tile-02-1x1.png" },
];

function Obras() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="obras" className="section-obras">
      <div className="section-inner">
        <div className="obras-header">
          <div className="obras-header-left">
            <p className="kicker">OBRAS 2016—2025</p>
            <h2 className="h2">Ocho casas donde la estructura es el acabado.</h2>
          </div>
          <p className="obras-desc">Selección construida. No renders. Fotos a luz natural.</p>
        </div>
        <div className="obras-lista" role="list">
          {OBRAS.map((o) => {
            const isOpen = open === o.n;
            return (
              <div key={o.n} role="listitem" className={`obra-row ${isOpen ? "is-open" : ""}`} onClick={() => setOpen(isOpen ? null : o.n)}>
                <div className="obra-main">
                  <span className="obra-num">{o.n}</span>
                  <div className="obra-nombre">
                    <strong>{o.nombre} — {o.comuna}</strong>
                    <span className="obra-comuna">{o.comuna}</span>
                  </div>
                  <span className="obra-meta">{o.meta}</span>
                  <span className="obra-tipo">{o.tipo}</span>
                  <span className="obra-arrow" aria-hidden="true">→</span>
                  <MediaThumb file={o.thumb} alt={`${o.nombre} — ${o.tipo}`} />
                </div>
                <div className="obra-ficha">
                  <div className="obra-ficha-grid">
                    <div>
                      <span className="ficha-label">Estructura</span>
                      <span className="ficha-value">{o.ficha.estructura}</span>
                    </div>
                    <div>
                      <span className="ficha-label">Envolvente</span>
                      <span className="ficha-value">{o.ficha.envolvente}</span>
                    </div>
                    <div>
                      <span className="ficha-label">Ventanas</span>
                      <span className="ficha-value">{o.ficha.ventanas}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="obras-micro">Todas con permiso municipal aprobado y dirección de obra UMBRAL. Fotos sin retoque de color.</p>
      </div>
    </section>
  );
}

/* ---------- #expediente ---------- */
function Expediente() {
  return (
    <section id="expediente" className="section-expediente">
      <div className="section-inner">
        <h2 className="h2">El expediente que aprueba la DOM sin volver atrás.</h2>
        <p className="section-sub">Dibujo técnico completo, no croquis. Entregamos el paquete que pide la Dirección de Obras y el que necesita tu constructor para no inventar en obra.</p>
        <div className="expediente-grid">
          <article className="exp-card">
            <span className="exp-label">01 — ANTEPROYECTO</span>
            <h3 className="exp-title">Anteproyecto y proyecto municipal</h3>
            <ul className="exp-bullets">
              <li>Plantas, cortes, elevaciones 1:100</li>
              <li>Emplazamiento y cuadro de superficies</li>
              <li>Memoria + EETT preliminar</li>
              <li>Entrega DWG + PDF</li>
            </ul>
            <p className="exp-price">Desde $1.850.000 · 80—120 m2</p>
          </article>
          <article className="exp-card">
            <span className="exp-label">02 — EXPEDIENTE DOM</span>
            <h3 className="exp-title">Permiso de edificación completo</h3>
            <ul className="exp-bullets">
              <li>Planos y formularios MINVU</li>
              <li>Informe y tramitación SEREMI/DOM</li>
              <li>Seguimiento hasta resolución</li>
              <li>Carpeta digital + 2 copias impresas</li>
            </ul>
            <p className="exp-price">Desde $1.290.000 · según comuna</p>
          </article>
          <article className="exp-card">
            <span className="exp-label">03 — REGULARIZACIÓN</span>
            <h3 className="exp-title">Ampliación / ley del mono</h3>
            <ul className="exp-bullets">
              <li>Levantamiento en terreno</li>
              <li>Planos as-built</li>
              <li>Ingreso y subsanaciones DOM</li>
              <li>Certificado de recepción</li>
            </ul>
            <p className="exp-price">Desde $990.000 · hasta 140 m2</p>
          </article>
        </div>
        <div className="exp-nota">Valores referenciales; se confirman tras visita y factibilidad. No incluyen derechos municipales ni revisor independiente.</div>
      </div>
    </section>
  );
}

/* ---------- #direccion ---------- */
function Direccion() {
  return (
    <section id="direccion" className="section-direccion">
      <div className="section-inner direccion-grid">
        <div className="direccion-left">
          <h2 className="h2">En obra no improvisamos.</h2>
          <p className="section-text">Dirigimos con plan semanal, libro de obra y control de EETT. El mismo arquitecto que dibuja, visita la obra. Sin traspaso a terceros.</p>
          <ul className="check-list">
            <li>✓ Visitas semanales con acta</li>
            <li>✓ Cubicación y compra controlada</li>
            <li>✓ Coordinación estructura + especialidades</li>
            <li>✓ Libro de obra digital</li>
          </ul>
          <a href="#conversar" className="text-link">Ver acta tipo →</a>
          <div className="direccion-price">Dirección técnica: 6,5% del costo directo de obra · o $1.480.000/mes (mínimo 4 meses). Incluye 4 visitas/mes + informe.</div>
        </div>
        <div className="direccion-right">
          <MediaBox file="umbral-interior-16x9.png" alt="Interior doble altura con libro de obra" ratio="4 / 3" caption="Libro de obra UMBRAL — semana 14, Casa Quebrada. Foto: 14:30 hrs, luz natural." />
        </div>
      </div>
    </section>
  );
}

/* ---------- #taller ---------- */
function Taller() {
  return (
    <section id="taller" className="section-taller">
      <div className="section-inner taller-grid">
        <div className="taller-left">
          <MediaBox file="umbral-proof-3x4.png" alt="Maqueta 1:50 sobre mesa oscura" ratio="3 / 4" caption="Maqueta 1:50 — Casa Patio. Cartón museum + pino." />
        </div>
        <div className="taller-right">
          <p className="kicker">TALLER</p>
          <h2 className="h2">Un arquitecto a cargo, siempre.</h2>
          <p className="section-text">UMBRAL es taller, no oficina de ventas. Dos arquitectos, un dibujante y una constructora aliada. Tomamos 6 proyectos al año para estar en obra, no solo en el plano.</p>
          <p className="taller-firma">— Martín U. — Arquitecto U. de Chile, 22 años, +85 obras con recepción final</p>
          <ol className="taller-steps">
            <li><strong>01 Conversación</strong> — 1 sem</li>
            <li><strong>02 Levantamiento</strong> — 1 sem</li>
            <li><strong>03 Anteproyecto</strong> — 3 sem</li>
            <li><strong>04 Expediente DOM</strong> — 6—10 sem según comuna</li>
            <li><strong>05 Obra</strong> — 8—14 meses</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- #tarifas ---------- */
function Tarifas() {
  return (
    <section id="tarifas" className="section-tarifas">
      <div className="section-inner">
        <h2 className="h2">Honorarios claros desde el primer día.</h2>
        <p className="section-sub">Tres formatos según tu estado. Todo con hitos y entregables firmados. No partimos sin presupuesto cerrado.</p>
        <div className="tarifas-grid">
          <div className="tarifa-col">
            <p className="tarifa-head">ANTEPROYECTO</p>
            <p className="tarifa-price">Desde $1.850.000 <span>(80—120 m2)</span></p>
            <ul className="tarifa-bullets">
              <li>$18.500/m2 sobre 150 m2</li>
              <li>Incluye anteproyecto + maqueta 1:100</li>
              <li>3 semanas · 2 correcciones</li>
            </ul>
          </div>
          <div className="tarifa-col tarifa-col--featured">
            <span className="tarifa-badge">MÁS PEDIDO</span>
            <p className="tarifa-head">PROYECTO COMPLETO (con permiso)</p>
            <p className="tarifa-price">Desde $3.900.000 <span>(120 m2)</span></p>
            <ul className="tarifa-bullets">
              <li>$32.000—$45.000/m2</li>
              <li>Incluye todo el expediente DOM</li>
              <li>7—11 semanas · tramitación incluida</li>
            </ul>
          </div>
          <div className="tarifa-col">
            <p className="tarifa-head">DIRECCIÓN + ITO</p>
            <p className="tarifa-price">6,5% costo obra <span>o $1.480.000/mes</span></p>
            <ul className="tarifa-bullets">
              <li>Visitas + libro + control EETT</li>
              <li>4—14 meses</li>
              <li>sin materiales ni mano de obra</li>
            </ul>
          </div>
        </div>
        <p className="tarifas-nota">Valores referenciales netos, RM. No incluyen derechos DOM (0,5—1,5% del presupuesto) ni cálculo estructural externo si tu suelo lo exige. Se confirman por escrito tras diagnóstico en terreno ($180.000, se abona al proyecto si avanzas).</p>
        <div className="tarifas-ctas">
          <a href="#conversar" className="btn-primary">Conversar sobre tu proyecto</a>
          <a href="#" className="btn-secondary" onClick={(e) => e.preventDefault()}>Descargar lista de entregables PDF</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- #preguntas ---------- */
function Preguntas() {
  return (
    <section id="preguntas" className="section-preguntas">
      <div className="section-inner section-inner--narrow">
        <h2 className="h2">Preguntas que nos hacen antes de firmar.</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>¿Cuánto demora el permiso en Las Condes / Vitacura / Colina?</summary>
            <p>DOM promedio 6—10 semanas desde ingreso completo. Si tu terreno está en zona de antejardín o con pendiente, sumamos 2—3 semanas por informe. Te entregamos carta Gantt con hitos.</p>
          </details>
          <details className="faq-item">
            <summary>¿Qué incluye exactamente el anteproyecto?</summary>
            <p>Plantas, cortes, elevaciones 1:100, emplazamiento, cuadro de superficies, memoria y EETT preliminar, y una maqueta 1:100. No incluye cálculo ni especialidades; esos se coordinan en proyecto completo.</p>
          </details>
          <details className="faq-item">
            <summary>¿Ustedes construyen o solo dibujan?</summary>
            <p>Hacemos dirección técnica y administramos la obra con tu constructor o con nuestra constructora aliada. No somos constructora con bodega; controlamos cubicación, compras y avance para que no se dispare el costo.</p>
          </details>
          <details className="faq-item">
            <summary>¿Cómo se paga?</summary>
            <p>Por hitos: 30% al encargo, 40% al anteproyecto aprobado, 30% al ingreso DOM. Dirección mensual contra acta. Boleta o factura, todo con contrato.</p>
          </details>
          <details className="faq-item">
            <summary>¿Trabajan fuera de Santiago?</summary>
            <p>RM completa y V región costa (Zapallar a Concón) y sur hasta Matanzas. Fuera de eso, solo si hay levantamiento y visitas quincenales acordadas.</p>
          </details>
        </div>
      </div>
    </section>
  );
}

/* ---------- #conversar ---------- */
function Conversar() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comuna, setComuna] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepto, setAcepto] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    try {
      const n = localStorage.getItem("umbral_nombre");
      const t = localStorage.getItem("umbral_tel");
      if (n) setNombre(n);
      if (t) setTelefono(t);
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!nombre.trim()) { setErrorMsg("Ingresa tu nombre."); setStatus("error"); return; }
    if (!telefono.trim() || !/^\+?56.*|[0-9 +]{8,}$/.test(telefono)) { setErrorMsg("Teléfono inválido. Usa +56 9 8765 4321"); setStatus("error"); return; }
    if (!acepto) { setErrorMsg("Debes aceptar ser contactado."); setStatus("error"); return; }
    setStatus("loading");
    try { localStorage.setItem("umbral_nombre", nombre); localStorage.setItem("umbral_tel", telefono); } catch {}
    const subject = encodeURIComponent(`Consulta UMBRAL — ${nombre} — ${comuna || "sin comuna"} — ${superficie || ""}`);
    const body = encodeURIComponent(`Nombre: ${nombre}\nTel: ${telefono}\nComuna: ${comuna}\nSuperficie: ${superficie}\nMensaje: ${mensaje}`);
    const mailto = `mailto:hola@umbral.cl?subject=${subject}&body=${body}`;
    const waText = encodeURIComponent(`Hola UMBRAL, soy ${nombre} (${telefono}) — ${comuna} ${superficie}. ${mensaje}`);
    const wa = `https://wa.me/56987654321?text=${waText}`;
    setTimeout(() => {
      setStatus("success");
      // abrir mailto y wa como fallback (sin bloquear)
      window.location.href = mailto;
      setTimeout(() => window.open(wa, "_blank"), 600);
    }, 800);
  };

  return (
    <section id="conversar" className="section-conversar">
      <div className="section-inner conversar-grid">
        <div className="conversar-left">
          <h2 className="h2">¿Conversamos en tu terreno?</h2>
          <p className="section-sub">Primera visita técnica en terreno: levantamiento rápido, factibilidad DOM y estimación de costo por m2. Quedas con informe de una página.</p>
          <form className="conversar-form" onSubmit={handleSubmit} noValidate>
            <label className="form-field">
              <span>Nombre *</span>
              <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
            </label>
            <label className="form-field">
              <span>Teléfono</span>
              <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="+56 9 8765 4321" pattern=".*[0-9].*" />
            </label>
            <label className="form-field">
              <span>Comuna</span>
              <select value={comuna} onChange={(e) => setComuna(e.target.value)}>
                <option value="">Selecciona</option>
                <option>Las Condes</option>
                <option>Vitacura</option>
                <option>Lo Barnechea</option>
                <option>Chicureo</option>
                <option>Colina</option>
                <option>Pirque</option>
                <option>Otra</option>
              </select>
            </label>
            <label className="form-field">
              <span>Superficie estimada</span>
              <select value={superficie} onChange={(e) => setSuperficie(e.target.value)}>
                <option value="">Selecciona</option>
                <option>80—120 m2</option>
                <option>120—180 m2</option>
                <option>180+ m2</option>
              </select>
            </label>
            <label className="form-field form-field--full">
              <span>Mensaje</span>
              <textarea rows={3} value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Cuéntanos terreno y programa..." />
            </label>
            <label className="form-check">
              <input type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} />
              <span>Acepto ser contactado por UMBRAL</span>
            </label>
            {status === "error" && <p className="form-msg form-msg--error" role="alert">{errorMsg}</p>}
            {status === "success" && <p className="form-msg form-msg--success">Te contactamos hoy antes de las 19:00.</p>}
            <button type="submit" className="btn-primary form-submit" disabled={status === "loading"}>
              {status === "loading" ? "Enviando…" : "Agendar visita — $180.000 (se abona)"}
            </button>
          </form>
        </div>
        <div className="conversar-right">
          <div className="contact-card">
            <a href="tel:+56987654321" className="contact-phone">+56 9 8765 4321</a>
            <a href="mailto:hola@umbral.cl" className="contact-email">hola@umbral.cl</a>
            <p className="contact-horario">Lun–Vie 10:00–19:00 · Taller en Las Condes</p>
            <div style={{ marginTop: 20 }}>
              <MediaBox file="umbral-og-16x9.png" alt="Taller UMBRAL — mesa de trabajo, luz cenital" ratio="16 / 9" caption="Taller UMBRAL — mesa de trabajo, luz cenital." />
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
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>UMBRAL — Arquitectura</strong>
          <span>© 2025 UMBRAL · Las Condes, Santiago · Valores referenciales · Hecho en Chile</span>
        </div>
        <div className="footer-links">
          <a href="#">Privacidad</a>
          <span>·</span>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  );
}

function StickyMobile() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-mobile" role="region" aria-label="Contacto rápido">
      <a href="tel:+56987654321" className="sticky-tel">+56 9 8765 4321</a>
      <a href="#conversar" className="sticky-cta">Agendar</a>
    </div>
  );
}

export function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Obras />
        <Expediente />
        <Direccion />
        <Taller />
        <Tarifas />
        <Preguntas />
        <Conversar />
      </main>
      <Footer />
      <StickyMobile />
    </>
  );
}
