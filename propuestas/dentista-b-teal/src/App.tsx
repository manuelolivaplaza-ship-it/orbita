import { useEffect, useRef, useState, type CSSProperties } from "react";

const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;
const FONO = "+56 9 8765 4321";
const FONO_HREF = "tel:+56987654321";

/* ---------------------------------- datos --------------------------------- */

const TRATAMIENTOS = [
  { n: "01", nombre: "Evaluación y diagnóstico", duracion: "30 min", desde: 25000 },
  { n: "02", nombre: "Limpieza y profilaxis", duracion: "45 min", desde: 35000 },
  { n: "03", nombre: "Restauraciones en resina", duracion: "60 min", desde: 45000 },
  { n: "04", nombre: "Odontopediatría", duracion: "40 min", desde: 30000 },
  { n: "05", nombre: "Endodoncia", duracion: "90 min", desde: 320000 },
  { n: "06", nombre: "Ortodoncia y alineadores", duracion: "45 min", desde: 780000 },
];

const VALORES = [
  { nombre: "Evaluación y diagnóstico", detalle: "Con plan y presupuesto por escrito", desde: 25000 },
  { nombre: "Limpieza y profilaxis", detalle: "Con pulido y aplicación de flúor", desde: 35000 },
  { nombre: "Restauración en resina", detalle: "Por pieza, color natural", desde: 45000 },
  { nombre: "Urgencia y control del dolor", detalle: "El mismo día, dentro de horario", desde: 30000 },
  { nombre: "Endodoncia (un conducto)", detalle: "Con control incluido", desde: 320000 },
  { nombre: "Blanquimiento", detalle: "En consulta, dos sesiones", desde: 220000 },
];

const PASOS = [
  {
    n: "01",
    titulo: "Agendas tu hora",
    texto:
      "En línea o por teléfono, con horas reales dentro del día. Confirmamos por llamada o WhatsApp, sin esperas ciegas.",
  },
  {
    n: "02",
    titulo: "Diagnóstico explicado en simple",
    texto:
      "Evaluación completa y presupuesto por escrito. Te contamos qué es urgente, qué puede esperar y cuánto cuesta, en palabras claras.",
  },
  {
    n: "03",
    titulo: "Tratamiento y control",
    texto:
      "Partimos solo con tu aprobación. Los mismos dentistas te acompañan del inicio al control final.",
  },
];

const VOCES = [
  {
    cita:
      "Me explicaron el presupuesto antes de empezar y no cambió ni un peso. Ahora viene toda la familia.",
    autor: "Javiera, paciente desde 2020 · La Florida",
  },
  {
    cita:
      "Llegué con un dolor terrible un viernes en la tarde. Me recibieron igual, y salí caminando sin dolor.",
    autor: "Cecilia, paciente desde 2019 · San Joaquín",
  },
  {
    cita:
      "Son los mismos tres dentistas desde que llego. Mis hijos los reciben por su nombre y sin miedo.",
    autor: "Rodrigo, paciente desde 2021 · La Florida",
  },
];

const FAQ = [
  {
    q: "¿Atienden urgencias el mismo día?",
    a: "Sí. Todos los días reservamos horas para urgencias dentro del horario de atención. Llámanos al " +
      FONO +
      " y te damos la primera hora disponible. La urgencia parte con evaluación y control del dolor (desde $30.000).",
  },
  {
    q: "¿Cuánto cuesta la evaluación?",
    a: "Desde $25.000. Incluye diagnóstico completo, radiografía si corresponde y presupuesto por escrito. Si partes un tratamiento dentro de la misma semana, el valor de la evaluación se descuenta.",
  },
  {
    q: "¿Atienden niños?",
    a: "Sí. Odontopediatría desde los 3 años, con primeras consultas pensadas para que la experiencia sea tranquila: sin apuro, sin lenguaje técnico y con los padres presentes en el box.",
  },
  {
    q: "¿Trabajan con isapres o bonos?",
    a: "Emitimos boleta y factura electrónica (SII) para que reembolses con tu isapre o uses bono Fonasa en modalidad de libre elección. Te ayudamos a armar los formularios antes de partir.",
  },
  {
    q: "¿El presupuesto puede cambiar?",
    a: "Solo si el diagnóstico lo amerita, y siempre se confirma antes de continuar. Nunca partimos ni extendemos un tratamiento sin tu aprobación explícita.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Débito, crédito y transferencia. En tratamientos sobre $100.000 puedes pagar en hasta 3 cuotas sin interés, con factura electrónica si necesitas reembolso.",
  },
];

const clp = (n: number) => "$" + n.toLocaleString("es-CL");

/* ---------------------------------- hooks --------------------------------- */

function useRevealOnce() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCountUp(target: number, activo: boolean, duracion = 1200) {
  const [valor, setValor] = useState(0);
  useEffect(() => {
    if (!activo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValor(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duracion, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValor(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [activo, target, duracion]);
  return valor;
}

/* ----------------------------------- nav ---------------------------------- */

function Nav() {
  const [oculto, setOculto] = useState(false);
  const [compacto, setCompacto] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const ultimo = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompacto(y > 8);
      setOculto(y > 140 && y > ultimo.current);
      ultimo.current = y;
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      setProgreso(alto > 0 ? Math.min(y / alto, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progreso" aria-hidden="true">
        <span style={{ transform: `scaleX(${progreso})` }} />
      </div>
      <header className={`nav${oculto ? " nav-oculto" : ""}${compacto ? " nav-compacto" : ""}`}>
        <div className="wrap nav-fila">
          <a className="nav-marca" href="#inicio">
            LAGO AZUL <span>DENTAL</span>
          </a>
          <nav className="nav-links" aria-label="Secciones">
            <a href="#tratamientos">Tratamientos</a>
            <a href="#valores">Valores</a>
            <a href="#metodo">Método</a>
            <a href="#faq">Preguntas</a>
          </nav>
          <div className="nav-acciones">
            <a className="nav-urgencia" href={FONO_HREF}>
              ¿Dolor ahora? Llámanos <strong>{FONO}</strong>
            </a>
            <a className="btn btn-nav" href="#reserva">
              Agendar
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  const [montado, setMontado] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setMontado(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-texto">
          <p className={`kicker${montado ? " in" : ""}`}>Clínica dental · La Florida</p>
          <h1 className={`h1${montado ? " in" : ""}`}>
            <span className="h1-linea">
              <span className="h1-inner" style={{ "--i": 0 } as CSSProperties}>
                Odontología fresca
              </span>
            </span>
            <span className="h1-linea">
              <span className="h1-inner" style={{ "--i": 1 } as CSSProperties}>
                para toda la familia.
              </span>
            </span>
          </h1>
          <p className={`subhead${montado ? " in" : ""}`}>
            Consulta, limpieza y tratamientos con dentistas titulados.
            <br />
            Valores claros desde la primera visita y horas sin esperas.
          </p>
          <div className={`hero-ctas${montado ? " in" : ""}`}>
            <a className="btn" href="#reserva">
              Agendar hora
            </a>
            <a className="link-subrayado" href="#tratamientos">
              Ver tratamientos
            </a>
          </div>
        </div>
        <figure className={`hero-figura${montado ? " in" : ""}`}>
          <img
            src={media("recepcion.jpg")}
            alt="Recepción de la clínica: mostrador blanco, pared verde-agua pálida y luz natural entrando por la izquierda"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <figcaption>Recepción · mostrador blanco, pared verde-agua y luz lateral</figcaption>
        </figure>
      </div>
      <div className="wrap">
        <p className={`hero-banda rv`}>
          <span>Horas puntuales sin esperas</span>
          <span className="hero-banda-sep" aria-hidden="true">
            ·
          </span>
          <span>
            Urgencias dentales durante horario ·{" "}
            <a className="link-subrayado link-fuerte" href={FONO_HREF}>
              {FONO}
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ tratamientos ------------------------------ */

function Tratamientos() {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <section id="tratamientos" className="sec">
      <div className="wrap">
        <header className="sec-cab rv">
          <p className="kicker">Tratamientos</p>
          <h2>Un índice claro, sin letra chica.</h2>
        </header>
        <ul className="indice rv">
          {TRATAMIENTOS.map((t, i) => {
            const open = abierto === i;
            return (
              <li key={t.n} className={`indice-fila${open ? " abierta" : ""}`}>
                <button
                  type="button"
                  className="indice-btn"
                  aria-expanded={open}
                  onClick={() => setAbierto(open ? null : i)}
                >
                  <span className="indice-num">{t.n}</span>
                  <span className="indice-nombre">{t.nombre}</span>
                  <span className="indice-flecha" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="indice-extra">
                  <div className="indice-extra-inner">
                    <dl className="indice-datos">
                      <div>
                        <dt>Duración típica</dt>
                        <dd>{t.duracion}</dd>
                      </div>
                      <div>
                        <dt>Valor desde</dt>
                        <dd className="num">{clp(t.desde)}</dd>
                      </div>
                    </dl>
                    <p className="indice-agendar">
                      <a className="link-subrayado" href="#reserva">
                        Agendar esta consulta
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="nota rv">
          Todos los tratamientos parten con evaluación y presupuesto por escrito. El valor final se
          confirma antes de comenzar.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------- cifras --------------------------------- */

function Cifra({
  target,
  prefijo,
  sufijo,
  etiqueta,
  activo,
}: {
  target: number;
  prefijo?: string;
  sufijo?: string;
  etiqueta: string;
  activo: boolean;
}) {
  const v = useCountUp(target, activo);
  return (
    <div className="cifra">
      <p className="cifra-num num">
        {prefijo}
        {v.toLocaleString("es-CL")}
        {sufijo}
      </p>
      <p className="cifra-etiqueta">{etiqueta}</p>
    </div>
  );
}

function Cifras() {
  const ref = useRef<HTMLDivElement>(null);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActivo(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="cifras" className="sec sec-filete">
      <div className="wrap cifras-grid">
        <div ref={ref} className="cifras-stats rv">
          <Cifra target={11} prefijo="+" etiqueta="años en la comuna" activo={activo} />
          <Cifra target={8000} prefijo="+" etiqueta="pacientes atendidos" activo={activo} />
          <Cifra target={96} sufijo="%" etiqueta="recomienda la clínica" activo={activo} />
          <Cifra target={3} etiqueta="dentistas titulados, siempre los mismos" activo={activo} />
        </div>
        <figure className="cifras-figura rv">
          <img
            src={media("detalle.jpg")}
            alt="Macro de una superficie cerámica verde-agua bajo luz suave"
            width={1400}
            height={1400}
            loading="lazy"
          />
          <figcaption>Superficies lisas, fáciles de limpiar: higiene que se ve</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* --------------------------------- valores -------------------------------- */

function Valores() {
  return (
    <section id="valores" className="sec sec-filete">
      <div className="wrap valores-grid">
        <div className="valores-tabla-wrap rv">
          <header className="sec-cab">
            <p className="kicker">Valores claros</p>
            <h2>Valores claros desde la primera visita.</h2>
          </header>
          <table className="tabla">
            <caption className="sr-only">
              Valores de referencia por tratamiento, en pesos chilenos
            </caption>
            <thead>
              <tr>
                <th scope="col">Tratamiento</th>
                <th scope="col">Detalle</th>
                <th scope="col" className="td-der">
                  Desde
                </th>
              </tr>
            </thead>
            <tbody>
              {VALORES.map((v) => (
                <tr key={v.nombre}>
                  <th scope="row">{v.nombre}</th>
                  <td>{v.detalle}</td>
                  <td className="td-der num">{clp(v.desde)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="nota nota-honesta">
            El valor final se confirma después del diagnóstico. Nunca partimos un tratamiento sin tu
            aprobación.
          </p>
        </div>
        <figure className="valores-figura rv">
          <img
            src={media("instrumental.jpg")}
            alt="Frascos de algodón y instrumental dental alineados sobre una bandeja blanca"
            width={1200}
            height={1500}
            loading="lazy"
          />
          <figcaption>Instrumental esterilizado y preparado por consulta</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* --------------------------------- método --------------------------------- */

function Metodo() {
  return (
    <section id="metodo" className="sec sec-filete">
      <div className="wrap">
        <figure className="metodo-figura rv">
          <img
            src={media("box.jpg")}
            alt="Box dental ordenado con sillón vacío y luz natural lateral"
            width={1920}
            height={1080}
            loading="lazy"
          />
          <figcaption>Box de atención · un paciente a la vez, sin apuro</figcaption>
        </figure>
        <header className="sec-cab rv">
          <p className="kicker">Cómo funciona</p>
          <h2>Tres pasos, cero sorpresas.</h2>
        </header>
        <ol className="pasos rv">
          {PASOS.map((p) => (
            <li key={p.n} className="paso">
              <p className="paso-num num" aria-hidden="true">
                {p.n}
              </p>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------- voces --------------------------------- */

function Voces() {
  const [idx, setIdx] = useState(0);
  const [pausa, setPausa] = useState(false);

  useEffect(() => {
    if (pausa) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIdx((i) => (i + 1) % VOCES.length), 6000);
    return () => window.clearInterval(id);
  }, [pausa]);

  return (
    <section
      id="voces"
      className="sec sec-filete"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocusCapture={() => setPausa(true)}
      onBlurCapture={() => setPausa(false)}
    >
      <div className="wrap voces-wrap rv">
        <p className="kicker">Lo que dicen los pacientes</p>
        <div className="voces-escenario" aria-live="polite">
          {VOCES.map((v, i) => (
            <blockquote key={i} className={`voz${i === idx ? " voz-activa" : ""}`} aria-hidden={i !== idx}>
              <p className="voz-cita">“{v.cita}”</p>
              <footer className="voz-autor">— {v.autor}</footer>
            </blockquote>
          ))}
        </div>
        <div className="voces-puntos" role="tablist" aria-label="Testimonios">
          {VOCES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`Testimonio ${i + 1} de ${VOCES.length}`}
              className={`punto${i === idx ? " punto-activo" : ""}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- faq ---------------------------------- */

function Faq() {
  const [abierto, setAbierto] = useState<number | null>(0);
  return (
    <section id="faq" className="sec sec-filete">
      <div className="wrap faq-wrap">
        <header className="sec-cab rv">
          <p className="kicker">Preguntas frecuentes</p>
          <h2>Lo que todos preguntan antes de la primera hora.</h2>
        </header>
        <div className="faq-lista rv">
          {FAQ.map((f, i) => {
            const open = abierto === i;
            return (
              <div key={i} className={`faq${open ? " abierta" : ""}`}>
                <button type="button" className="faq-btn" aria-expanded={open} onClick={() => setAbierto(open ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icono" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-resp">
                  <div className="faq-resp-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- reserva -------------------------------- */

function Reserva() {
  return (
    <section id="reserva" className="sec sec-filete reserva">
      <div className="wrap reserva-grid">
        <div className="reserva-texto rv">
          <p className="kicker">Reserva tu hora</p>
          <h2>¿Agendamos tu hora?</h2>
          <a className="reserva-fono num" href={FONO_HREF}>
            {FONO}
          </a>
          <div className="reserva-ctas">
            <a className="btn" href={FONO_HREF}>
              Agendar hora
            </a>
            <a className="link-subrayado" href="mailto:hola@lagoazuldental.cl">
              hola@lagoazuldental.cl
            </a>
          </div>
          <dl className="reserva-datos">
            <div>
              <dt>Horario</dt>
              <dd className="num">Lun–Sáb 9:30–20:00</dd>
            </div>
            <div>
              <dt>Urgencias</dt>
              <dd>
                Durante horario, <a className="link-subrayado" href={FONO_HREF}>llámanos</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="reserva-mapa rv" aria-hidden="true">
          <svg viewBox="0 0 520 220" role="img" aria-label="">
            <line x1="10" y1="150" x2="510" y2="150" className="mapa-linea" />
            <line x1="150" y1="150" x2="150" y2="60" className="mapa-linea" />
            <line x1="380" y1="150" x2="380" y2="60" className="mapa-linea" />
            <circle cx="150" cy="150" r="7" className="mapa-punto mapa-punto-teal" />
            <text x="150" y="184" className="mapa-texto" textAnchor="middle">
              Metro
            </text>
            <circle cx="380" cy="150" r="7" className="mapa-punto" />
            <text x="380" y="184" className="mapa-texto mapa-texto-fuerte" textAnchor="middle">
              Lago Azul
            </text>
            <text x="265" y="46" className="mapa-texto" textAnchor="middle">
              Av. Vicuña Mackenna
            </text>
          </svg>
          <p className="reserva-direccion">
            Av. Vicuña Mackenna 7110, La Florida — a 4 min caminando del metro, con estacionamiento
            para pacientes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- footer -------------------------------- */

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-fila">
        <p className="footer-marca">
          LAGO AZUL <span>DENTAL</span>
        </p>
        <p className="footer-legal">
          LAGO AZUL DENTAL SpA · Av. Vicuña Mackenna 7110, La Florida, Santiago · hola@lagoazuldental.cl
        </p>
        <p className="footer-legal">© 2026 · Valores referenciales sujetos a diagnóstico · Facturación electrónica SII</p>
      </div>
    </footer>
  );
}

/* ------------------------------- sticky CTA ------------------------------- */

function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const reserva = document.getElementById("reserva");
    if (!hero || !reserva) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target.id === "inicio") setVisible(!e.isIntersecting && window.scrollY > 200);
          else if (e.target.id === "reserva" && e.isIntersecting) setVisible(false);
        });
      },
      { threshold: 0.05 },
    );
    obs.observe(hero);
    obs.observe(reserva);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${visible ? " visible" : ""}`} aria-hidden={!visible}>
      <a className="sticky-tel" href={FONO_HREF} tabIndex={visible ? 0 : -1}>
        ¿Dolor ahora? <span>Llámanos</span>
      </a>
      <a className="btn btn-sticky" href="#reserva" tabIndex={visible ? 0 : -1}>
        Agendar hora
      </a>
    </div>
  );
}

/* ----------------------------------- app ---------------------------------- */

export function App() {
  useRevealOnce();
  return (
    <>
      <a className="saltar" href="#inicio">
        Saltar al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <Tratamientos />
        <Cifras />
        <Valores />
        <Metodo />
        <Voces />
        <Faq />
        <Reserva />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
