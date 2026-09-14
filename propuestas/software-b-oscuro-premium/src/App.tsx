import { useEffect, useRef, useState, type ReactNode } from 'react';

const media = (n: string) => `${import.meta.env.BASE_URL}media/${n}`;

const TEL = '+56 2 2965 4821';
const TEL_HREF = 'tel:+56229654821';
const EMAIL = 'hola@umbral.dev';

/* ============================ hooks ============================ */

function useScrollState() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, y / max) : 0);
        setHidden(y > 140 && y > last);
        setCompact(y > 40);
        setPastHero(y > window.innerHeight * 0.85);
        last = y;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { progress, hidden, compact, pastHero };
}

function useRevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============================ cursor ============================ */

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced || !ref.current) return;

    const el = ref.current;
    document.documentElement.classList.add('has-cursor');
    let tx = -100;
    let ty = -100;
    let x = -100;
    let y = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add('cursor--on');
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest('a, button, [role="button"]');
      el.classList.toggle('cursor--link', Boolean(interactive));
    };
    const onLeave = () => el.classList.remove('cursor--on');
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    el.style.transform = 'translate(-100px, -100px)';
    document.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden="true" />;
}

/* ============================ count-up ============================ */

function CountUp({ value, duration = 1200 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ============================ nav ============================ */

function Nav({ hidden, compact }: { hidden: boolean; compact: boolean }) {
  return (
    <header className={`nav${hidden ? ' nav--hidden' : ''}${compact ? ' nav--compact' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#inicio" aria-label="UMBRAL — volver al inicio">
          <span className="brand-name">UMBRAL</span>
          <span className="brand-tag">Fábrica de software</span>
        </a>
        <nav className="nav-links" aria-label="Secciones">
          <a className="nav-link" href="#filosofia">Filosofía</a>
          <a className="nav-link" href="#servicios">Servicios</a>
          <a className="nav-link" href="#precios">Precios</a>
          <a className="nav-link" href="#metodo">Método</a>
          <a className="nav-link" href="#faq">Preguntas</a>
        </nav>
        <div className="nav-right">
          <a className="nav-tel" href={TEL_HREF} title="Hablamos hoy, respondemos nosotros">
            {TEL}
          </a>
          <a className="btn" href="#reserva">Agendar</a>
        </div>
      </div>
    </header>
  );
}

/* ============================ hero ============================ */

function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Inicio">
      <div className="hero-media">
        <img
          src={media('hero.jpg')}
          alt="Sala de reuniones crepuscular y vacía: mesa larga de madera oscura con una lámpara colgante que deja luz cálida sobre un cuaderno abierto"
          fetchPriority="high"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap hero-content">
        <p className="hero-kicker">Fábrica de software · Santiago de Chile</p>
        <h1>
          <span className="h1-mask">
            <span>Ingeniería seria,</span>
          </span>
          <span className="h1-mask">
            <span>plazos que se cumplen.</span>
          </span>
        </h1>
        <p className="hero-sub">
          Diseñamos, construimos y operamos el software de tu empresa con equipo propio en
          Santiago. Alcance firmado, avance visible cada semana.
        </p>
        <div className="hero-cta">
          <a className="btn" href="#reserva">Agendar conversación</a>
          <a className="btn btn--ghost" href="#metodo">Ver cómo trabajamos</a>
        </div>
        <p className="hero-support">
          Hablamos hoy, respondemos nosotros · <a href={TEL_HREF}>{TEL}</a>
        </p>
      </div>
    </section>
  );
}

/* ============================ filosofía ============================ */

function Filosofia() {
  return (
    <section className="sec" id="filosofia" aria-label="Filosofía">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Filosofía</p>
        </div>
        <div className="filosofia-grid">
          <h2 className="filosofia-statement" data-reveal="fade">
            El software falla por promesas grandes y <em>procesos chicos.</em>
          </h2>
          <div className="filosofia-copy" data-reveal="fade" style={{ transitionDelay: '0.12s' }}>
            <p>
              Alcance escrito antes de empezar. Demo funcionando cada viernes. Un ingeniero
              senior responde tu WhatsApp, no un ticket perdido.
            </p>
            <p>
              Trabajamos con alcance firmado y avance observable: cada semana ves el sistema
              corriendo, no un correo con excusas. Si algo se complica, lo sabrás de nosotros
              antes de que lo notes tú.
            </p>
            <p className="filosofia-discrecion">
              No publicamos testimonios ni logos de clientes. La discreción de quienes nos
              contratan es parte del servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ cifras ============================ */

function Cifras() {
  return (
    <section className="cifras" id="cifras" aria-label="Cifras">
      <div className="wrap cifras-grid">
        <div className="cifra" data-reveal="fade">
          <p className="cifra-num">
            <span className="cifra-fix">+</span>
            <CountUp value={14} />
          </p>
          <p className="cifra-label">Años construyendo</p>
        </div>
        <div className="cifra" data-reveal="fade" style={{ transitionDelay: '0.08s' }}>
          <p className="cifra-num">
            <span className="cifra-fix">+</span>
            <CountUp value={87} />
          </p>
          <p className="cifra-label">Sistemas en producción</p>
        </div>
        <div className="cifra" data-reveal="fade" style={{ transitionDelay: '0.16s' }}>
          <p className="cifra-num">
            <CountUp value={96} />
            <span className="cifra-fix">%</span>
          </p>
          <p className="cifra-label">Proyectos entregados en plazo</p>
        </div>
        <div className="cifra" data-reveal="fade" style={{ transitionDelay: '0.24s' }}>
          <p className="cifra-num">
            <CountUp value={1} />
          </p>
          <p className="cifra-label">Senior asignado por cuenta</p>
        </div>
      </div>
    </section>
  );
}

/* ============================ servicios ============================ */

const SERVICIOS = [
  {
    num: '01',
    titulo: 'Sistemas de gestión a medida',
    desc: 'ERP livianos, CRMs y sistemas operativos construidos exactamente sobre tu proceso, no al revés.',
    duracion: '3 a 6 meses',
    modalidad: 'Llave en mano, equipo propio',
  },
  {
    num: '02',
    titulo: 'Integraciones y APIs',
    desc: 'Conectamos tus sistemas, bancos y proveedores para que los datos fluyan solos, sin planillas.',
    duracion: '4 a 8 semanas',
    modalidad: 'Por proyecto o fee mensual',
  },
  {
    num: '03',
    titulo: 'Migración de legacy',
    desc: 'Modernizamos sistemas antiguos por etapas, sin apagar la operación ni apostar todo a un fin de semana.',
    duracion: '2 a 5 meses',
    modalidad: 'Por etapas, con marcha atrás',
  },
  {
    num: '04',
    titulo: 'Datos y tableros',
    desc: 'Tableros de control sobre tus datos reales: una sola versión de la verdad para decidir.',
    duracion: '3 a 8 semanas',
    modalidad: 'Levantamiento + entrega iterativa',
  },
  {
    num: '05',
    titulo: 'Soporte y evolución',
    desc: 'Mantención correctiva y evolutiva con SLA firmado. Tu sistema mejora cada mes, no se pudre.',
    duracion: 'Continuo',
    modalidad: 'SLA firmado, senior asignado',
  },
  {
    num: '06',
    titulo: 'Auditoría técnica',
    desc: 'Revisión independiente de código, seguridad y deuda técnica, con hallazgos priorizados por impacto.',
    duracion: '2 a 3 semanas',
    modalidad: 'Informe accionable y priorizado',
  },
];

function Servicios() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec" id="servicios" aria-label="Servicios">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Servicios</p>
          <h2 className="h2">Seis formas de hacernos cargo.</h2>
          <p className="lead">
            Cada línea es un compromiso con duración y modalidad definidas antes de firmar.
          </p>
        </div>
        <div className="srv-list" data-reveal="fade">
          {SERVICIOS.map((s, i) => (
            <article
              className="srv"
              key={s.num}
              data-open={open === i ? 'true' : 'false'}
            >
              <button
                className="srv-head"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`srv-panel-${s.num}`}
              >
                <span className="srv-num">{s.num}</span>
                <span className="srv-title">{s.titulo}</span>
                <span className="srv-icon" aria-hidden="true">+</span>
              </button>
              <div className="srv-panel" id={`srv-panel-${s.num}`}>
                <div className="srv-panel-in">
                  <div className="srv-panel-card">
                    <div className="srv-field srv-panel-desc">
                      <p className="srv-field-label">Qué incluye</p>
                      <p className="srv-field-value">{s.desc}</p>
                    </div>
                    <div className="srv-field">
                      <p className="srv-field-label">Duración típica</p>
                      <p className="srv-field-value srv-field-value--mono">{s.duracion}</p>
                    </div>
                    <div className="srv-field">
                      <p className="srv-field-label">Modalidad de entrega</p>
                      <p className="srv-field-value srv-field-value--mono">{s.modalidad}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ precios ============================ */

const PRECIOS = [
  {
    nombre: 'Auditoría técnica',
    desc: 'Riesgos, deuda técnica y hoja de ruta priorizada de tu sistema actual.',
    desde: 60,
    uf: 'UF',
  },
  {
    nombre: 'Módulo a medida',
    desc: 'Un problema acotado, resuelto y en producción en semanas.',
    desde: 180,
    uf: 'UF',
  },
  {
    nombre: 'Producto completo',
    desc: 'Diseño, construcción y puesta en producción de tu sistema, con demo cada viernes.',
    desde: 480,
    uf: 'UF',
  },
  {
    nombre: 'Equipo dedicado mensual',
    desc: 'Una célula propia trabajando solo para ti, con senior a la cabeza.',
    desde: 320,
    uf: 'UF/mes',
  },
];

function Precios() {
  return (
    <section className="sec precios" id="precios" aria-label="Precios">
      <div className="precios-bg" aria-hidden="true">
        <img src={media('texture.jpg')} alt="" loading="lazy" />
      </div>
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Precios</p>
          <h2 className="h2">Precios claros, sin letra chica.</h2>
          <p className="lead">
            Rangos de referencia en UF. El número final se firma contigo, no contra ti.
          </p>
        </div>
        <div className="precio-tabla" data-reveal="fade">
          {PRECIOS.map((p) => (
            <div className="precio-row" key={p.nombre}>
              <h3 className="precio-nombre">{p.nombre}</h3>
              <p className="precio-desc">{p.desc}</p>
              <p className="precio-valor">
                <span className="precio-desde">Desde</span>
                <span className="precio-num">{p.desde}</span>
                <span className="precio-uf">{p.uf}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="precio-nota" data-reveal="fade">
          El presupuesto final se firma después del levantamiento. Nunca partimos un proyecto
          sin alcance acordado por escrito.
        </p>
      </div>
    </section>
  );
}

/* ============================ método ============================ */

const METODO = [
  {
    num: '01',
    titulo: 'Levantamiento y alcance firmado',
    desc: 'Entrevistas con tu equipo, alcance documentado y presupuesto cerrado. Si el alcance no está claro, no partimos.',
  },
  {
    num: '02',
    titulo: 'Construcción con demo semanal',
    desc: 'Cada viernes ves el avance funcionando, no un reporte de horas. Los cambios se priorizan con datos, no con opiniones.',
  },
  {
    num: '03',
    titulo: 'Operación y evolución',
    desc: 'Puesta en producción, monitoreo y un senior asignado. El sistema evoluciona con tu negocio y no se abandona al entregar.',
  },
];

function Metodo() {
  return (
    <section className="sec" id="metodo" aria-label="Método">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Método</p>
          <h2 className="h2">Tres pasos, cero sorpresas.</h2>
        </div>
        <div className="metodo-grid">
          {METODO.map((m, i) => (
            <div
              className="metodo-paso"
              key={m.num}
              data-reveal="fade"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="metodo-num">{m.num}</p>
              <h3 className="metodo-titulo">{m.titulo}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ galería ============================ */

function Galeria() {
  return (
    <section className="sec sec--superficie" id="galeria" aria-label="Galería">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Galería</p>
          <h2 className="h2">Antes del código, hay criterio.</h2>
        </div>
        <div className="galeria-grid">
          <figure className="obra obra--teclas" data-reveal="curtain">
            <div className="obra-frame">
              <img
                src={media('teclas.jpg')}
                alt="Bodegón en claroscuro de un teclado mecánico retroiluminado con luz cálida tenue sobre un escritorio oscuro"
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>Hardware propio — infraestructura que operamos</span>
              <span className="obra-index">01</span>
            </figcaption>
          </figure>
          <figure className="obra obra--planos" data-reveal="curtain">
            <div className="obra-frame">
              <img
                src={media('planos.jpg')}
                alt="Planos técnicos impresos en blanco sobre papel con luz lateral dramática, junto a una regla de escalimetro y un lápiz"
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>Planos antes de código — cada sistema parte en papel</span>
              <span className="obra-index">02</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ============================ faq ============================ */

const FAQ = [
  {
    q: '¿Cuánto cuesta un sistema a medida?',
    a: 'Depende del alcance, no de una tabla mágica. Como referencia: una auditoría parte en 60 UF, un módulo a medida en 180 UF y un producto completo en 480 UF. El presupuesto final se firma después del levantamiento, con alcance escrito. Sin sorpresas después.',
  },
  {
    q: '¿Cuánto demora un proyecto típico?',
    a: 'Una auditoría toma 2 a 3 semanas; un módulo, 6 a 10 semanas; un producto completo, entre 4 y 7 meses. Desde la segunda semana ves una demo funcionando cada viernes, así que nunca estás a ciegas.',
  },
  {
    q: '¿Qué pasa si el proyecto se desvía?',
    a: 'El alcance firmado manda. Si aparece un cambio nuevo, se evalúa y se documenta en un anexo corto con costo y plazo antes de ejecutarlo. Nunca absorbemos cambios en silencio ni te los cobramos después.',
  },
  {
    q: '¿Quién es dueño del código?',
    a: 'Tú, desde el primer día. El repositorio está a tu nombre, la documentación se entrega al día y puedes operar el sistema con cualquier equipo. Si algún día nos vas, no te quedas amarrado.',
  },
  {
    q: '¿Trabajan con equipos internos o solo tercerizan todo?',
    a: 'Somos equipo propio en Santiago: un ingeniero senior asignado a tu cuenta más dos a cuatro ingenieros según el tamaño del proyecto. Cuando ya tienes equipo interno, nos integramos a él. No subcontratamos en secreto.',
  },
  {
    q: '¿Cómo funciona el soporte después de la entrega?',
    a: 'Con SLA firmado: respuesta el mismo día hábil, un senior directo por WhatsApp y un ciclo mensual de evolución planificada. Tu sistema sigue mejorando después de la entrega, no queda huérfano.',
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec" id="faq" aria-label="Preguntas frecuentes">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Preguntas</p>
          <h2 className="h2">Lo que siempre preguntan antes de firmar.</h2>
        </div>
        <div className="faq-list" data-reveal="fade">
          {FAQ.map((f, i) => (
            <div className="faq-item" key={f.q} data-open={open === i ? 'true' : 'false'}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-panel" id={`faq-panel-${i}`}>
                <div className="faq-panel-in">
                  <p className="faq-a">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ reserva + footer ============================ */

function Reserva() {
  return (
    <section className="sec sec--superficie" id="reserva" aria-label="Reserva">
      <div className="wrap">
        <div className="reserva-inner">
          <div data-reveal="fade">
            <p className="kicker">Reserva</p>
            <h2 className="h2">Hablemos de tu sistema esta semana.</h2>
            <p>
              <a className="reserva-tel" href={TEL_HREF}>{TEL}</a>
            </p>
            <p>
              <a className="btn" href={TEL_HREF}>Agendar conversación</a>
            </p>
            <p className="reserva-micro">Te responde un ingeniero, no un formulario perdido.</p>
          </div>
          <dl className="reserva-datos" data-reveal="fade" style={{ transitionDelay: '0.1s' }}>
            <div>
              <dt>Correo</dt>
              <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>Lun–Vie 9:00–19:00</dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>Providencia, Santiago de Chile</dd>
            </div>
          </dl>
        </div>
        <footer className="footer">
          <span>UMBRAL — Fábrica de Software</span>
          <span>Providencia, Santiago · Chile</span>
          <span>© {new Date().getFullYear()} UMBRAL SpA · Hecho en Chile</span>
        </footer>
      </div>
    </section>
  );
}

/* ============================ sticky CTA ============================ */

function StickyCta({ show }: { show: boolean }) {
  return (
    <div className={`sticky-cta${show ? ' sticky-cta--show' : ''}`}>
      <div className="sticky-cta-inner">
        <p className="sticky-cta-label">
          Hablamos hoy,
          <br />
          respondemos nosotros
        </p>
        <a className="btn" href={TEL_HREF}>Agendar conversación</a>
      </div>
    </div>
  );
}

/* ============================ app ============================ */

export function App() {
  const { progress, hidden, compact, pastHero } = useScrollState();
  useRevealObserver();

  return (
    <>
      <div className="progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
      <Cursor />
      <Nav hidden={hidden} compact={compact} />
      <main>
        <Hero />
        <Filosofia />
        <Cifras />
        <Servicios />
        <Precios />
        <Metodo />
        <Galeria />
        <Faq />
        <Reserva />
      </main>
      <StickyCta show={pastHero} />
    </>
  );
}
