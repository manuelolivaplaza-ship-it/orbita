import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type FormEvent,
} from "react";
import { Enlace } from "../lib/router";

// — Reveal al entrar en pantalla —
export function Revelar({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const estilo = delay ? ({ "--delay": `${delay}ms` } as CSSProperties) : undefined;
  return (
    // @ts-expect-error tag dinámica tipada por unión literal
    <Tag ref={ref} className={`revelar ${className}`} style={estilo}>
      {children}
    </Tag>
  );
}

// — Contador animado al entrar en pantalla —
export function Contador({ valor, sufijo = "" }: { valor: number; sufijo?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((e) => e.isIntersecting)) return;
        io.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setN(valor);
          return;
        }
        const t0 = performance.now();
        const dur = 1600;
        const paso = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(valor * eased));
          if (p < 1) raf = requestAnimationFrame(paso);
        };
        raf = requestAnimationFrame(paso);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [valor]);
  return (
    <span ref={ref} className="numero">
      {n.toLocaleString("es-CL")}
      {sufijo}
    </span>
  );
}

// — Tarjeta con tilt 3D al cursor —
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const alMover = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)`;
  };
  const alSalir = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={alMover} onMouseLeave={alSalir}>
      {children}
    </div>
  );
}

// — Marquesina de comunas —
export function Marquesina({ items }: { items: string[] }) {
  const fila = [...items, ...items];
  return (
    <div className="marquesina" aria-hidden="true">
      <div className="marquesina-pista">
        {fila.map((c, i) => (
          <span key={i} className="marquesina-item">
            {c} <i>—</i>
          </span>
        ))}
      </div>
    </div>
  );
}

// — Lightbox de galería —
export function Galeria({ fotos, alt }: { fotos: string[]; alt: string }) {
  const [activa, setActiva] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") setActiva((a) => (a + 1) % fotos.length);
      if (e.key === "ArrowLeft") setActiva((a) => (a - 1 + fotos.length) % fotos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom, fotos.length]);

  return (
    <figure className="galeria">
      <button
        type="button"
        className="galeria-principal"
        onClick={() => setZoom(true)}
        aria-label="Ampliar foto"
      >
        <img src={fotos[activa]} alt={alt} />
        <span className="galeria-lupa" aria-hidden="true">
          Ampliar
        </span>
      </button>
      {fotos.length > 1 && (
        <div className="galeria-minis" role="tablist" aria-label="Fotos de la propiedad">
          {fotos.map((f, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activa}
              className={"mini" + (i === activa ? " activa" : "")}
              onClick={() => setActiva(i)}
            >
              <img src={f} alt={`${alt} — foto ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}
      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada">
          <button type="button" className="lb-cerrar" onClick={() => setZoom(false)} aria-label="Cerrar">
            Cerrar ×
          </button>
          {fotos.length > 1 && (
            <>
              <button
                type="button"
                className="lb-flecha lb-ant"
                onClick={() => setActiva((a) => (a - 1 + fotos.length) % fotos.length)}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                type="button"
                className="lb-flecha lb-sig"
                onClick={() => setActiva((a) => (a + 1) % fotos.length)}
                aria-label="Foto siguiente"
              >
                ›
              </button>
            </>
          )}
          <img src={fotos[activa]} alt={alt} />
        </div>
      )}
    </figure>
  );
}

// — Formulario con estado de éxito —
type Campo = {
  nombre: string;
  etiqueta: string;
  tipo?: "text" | "email" | "tel" | "textarea" | "select";
  opciones?: string[];
  requerido?: boolean;
  placeholder?: string;
};

export function Formulario({
  campos,
  asunto,
  nota,
}: {
  campos: Campo[];
  asunto: string;
  nota?: string;
}) {
  const [estado, setEstado] = useState<"editando" | "enviado">("editando");
  const [falta, setFalta] = useState<string | null>(null);

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    for (const c of campos) {
      if (c.requerido && !String(datos.get(c.nombre) || "").trim()) {
        setFalta(c.nombre);
        return;
      }
    }
    setFalta(null);
    setEstado("enviado");
  };

  if (estado === "enviado") {
    return (
      <div className="form-exito" role="status">
        <p className="form-exito-titulo">Solicitud recibida</p>
        <p>
          Le contactamos dentro del próximo horario hábil. Si prefiere adelantar el paso,
          escríbanos directo con el asunto “{asunto}”.
        </p>
        <button type="button" className="btn btn-sec" onClick={() => setEstado("editando")}>
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={enviar} noValidate>
      {campos.map((c) => (
        <label key={c.nombre} className={"campo" + (falta === c.nombre ? " falta" : "")}>
          <span className="campo-etiqueta">{c.etiqueta}</span>
          {c.tipo === "textarea" ? (
            <textarea name={c.nombre} rows={4} placeholder={c.placeholder} />
          ) : c.tipo === "select" ? (
            <select name={c.nombre} defaultValue="">
              <option value="" disabled>
                Seleccione…
              </option>
              {c.opciones?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input name={c.nombre} type={c.tipo ?? "text"} placeholder={c.placeholder} />
          )}
          {falta === c.nombre && <em>Este dato nos permite responderle.</em>}
        </label>
      ))}
      <div className="form-pie">
        <button type="submit" className="btn btn-prim">
          Enviar solicitud
        </button>
        {nota && <p className="form-nota">{nota}</p>}
      </div>
    </form>
  );
}

// — Plano SVG generado a partir de la ficha —
export function Plano({ dormitorios, banos, m2 }: { dormitorios: number; banos: number; m2: number }) {
  const d = Math.max(1, Math.min(dormitorios, 5));
  const habW = 64;
  const lado = Math.round(Math.sqrt(m2) * 4.4);
  const ancho = Math.max(360, lado + d * habW);
  const alto = 300;
  const rooms: { x: number; y: number; w: number; h: number; t: string }[] = [];
  // living + cocina al poniente
  rooms.push({ x: 16, y: 16, w: ancho * 0.52 - 24, h: alto * 0.62 - 20, t: "Living · comedor" });
  rooms.push({ x: 16, y: alto * 0.62, w: ancho * 0.52 - 24, h: alto * 0.38 - 16, t: "Cocina" });
  // dormitorios al oriente
  const colX = ancho * 0.52;
  const colW = (ancho - colX - 16) / 2;
  for (let i = 0; i < d; i++) {
    const cx = colX + (i % 2) * colW;
    const cy = 16 + Math.floor(i / 2) * (alto / Math.ceil(d / 2) / 1);
    const rh = alto / Math.ceil(d / 2) - 12;
    rooms.push({ x: cx, y: cy + 8, w: colW - 6, h: rh, t: i === 0 ? "Dorm. principal" : `Dorm. ${i + 1}` });
  }
  return (
    <svg className="plano" viewBox={`0 0 ${ancho} ${alto}`} role="img" aria-label={`Pla no esquemático de ${m2} m² con ${dormitorios} dormitorios`}>
      <rect x="4" y="4" width={ancho - 8} height={alto - 8} className="plano-borde" />
      {rooms.map((r, i) => (
        <g key={i}>
          <rect x={r.x} y={r.y} width={r.w} height={r.h} className="plano-room" />
          <text x={r.x + r.w / 2} y={r.y + r.h / 2 + 3} className="plano-texto">
            {r.t}
          </text>
        </g>
      ))}
      <text x={ancho / 2} y={alto - 1} className="plano-nota">
        Esquema referencial · {m2} m² útiles · {dormitorios} dorm · {banos} baños
      </text>
    </svg>
  );
}

// — Enlace estilizado como botón —
export function Btn({
  a,
  children,
  variante = "prim",
}: {
  a: string;
  children: ReactNode;
  variante?: "prim" | "sec";
}) {
  return (
    <Enlace a={a} className={"btn " + (variante === "prim" ? "btn-prim" : "btn-sec")}>
      {children}
    </Enlace>
  );
}

// — Chips de especificaciones —
export function Chips({ items }: { items: { k: string; v: string }[] }) {
  return (
    <ul className="chips">
      {items.map((c) => (
        <li key={c.k}>
          <span>{c.k}</span>
          <strong>{c.v}</strong>
        </li>
      ))}
    </ul>
  );
}

// — Hero de portada con el patrón original del sitio —
import { marca, hero, heroHud, comunas as comunasHero } from "../lib/datos";

export function HeroPrincipal() {
  const figRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (hero.tipo !== "split") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = figRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        el.style.transform = "translateY(" + (y * 0.05).toFixed(1) + "px)";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const url = `${import.meta.env.BASE_URL}media/${hero.foto}`;
  const contenido = (
    <>
      <p className="kicker hb-in">{marca.kicker}</p>
      <h1 className="hb-titulo">
        {marca.claim.map((l, i) => (
          <span className="hero-linea" style={{ animationDelay: i * 0.12 + "s" }} key={i}>{l}</span>
        ))}
      </h1>
      <p className="hero-sub hb-in">{marca.sub}</p>
      <div className="hero-ctas hb-in">
        <Btn a={marca.ctaPrimario.a}>{marca.ctaPrimario.texto}</Btn>
        <Btn a={marca.ctaSecundario.a} variante="sec">{marca.ctaSecundario.texto}</Btn>
      </div>
      <ul className="hero-hud hb-in">
        {heroHud.map((h) => (
          <li key={h.k}><span>{h.k}</span><strong>{h.v}</strong></li>
        ))}
      </ul>
    </>
  );

  if (hero.tipo === "fullbleed") {
    return (
      <section className="hero-fb" id="inicio">
        <div className="hero-fb-media"><img src={url} alt="" fetchPriority="high" /></div>
        <div className="hero-contenido" style={{ width: "100%", maxWidth: "var(--ancho)", margin: "0 auto" }}>
          {contenido}
          <p className="hero-hint" aria-hidden="true">Desliza</p>
        </div>
      </section>
    );
  }
  if (hero.tipo === "tipografico") {
    return (
      <section className="hero-typo" id="inicio">
        <div className="hero-typo-cont">{contenido}</div>
        <div className="hero-typo-banda">
          <span>{comunasHero.slice(0, 4).join(" · ")}</span>
          <span>{marca.telefono}</span>
        </div>
      </section>
    );
  }
  return (
    <section className="hero-sp" id="inicio">
      <div className="hero-sp-texto">{contenido}</div>
      <figure className={"hero-sp-figure" + (hero.marco ? " con-marco" : "")} ref={figRef}>
        <div className="hero-sp-imgwrap"><img src={url} alt={marca.nombre + " " + marca.sufijo} /></div>
        {hero.caption ? <figcaption>{hero.caption}</figcaption> : null}
      </figure>
    </section>
  );
}
