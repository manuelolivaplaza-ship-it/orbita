import { useRef, useState } from 'react';
import { useScrollState, useRevealObserver, useCursor, useCountUp } from './hooks';
import { media, MediaImg } from './media';

const TEL = '+56 9 8765 4321';
const TEL_HREF = 'tel:+56987654321';
const EMAIL = 'hola@obsidianadental.cl';

const fmtCL = new Intl.NumberFormat('es-CL');

/* ============================ cursor ============================ */

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useCursor(ref);
  return <div ref={ref} className="cursor" aria-hidden="true" />;
}

/* ============================ count-up cifra ============================ */

function Cifra({
  fix,
  value,
  suffix,
  label,
  delay,
}: {
  fix?: string;
  value: number;
  suffix?: string;
  label: string;
  delay?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const display = useCountUp(ref, value);

  return (
    <div className="cifra" data-reveal="fade" style={delay ? { transitionDelay: delay } : undefined}>
      <p className="cifra-num">
        {fix && <span className="cifra-fix">{fix}</span>}
        <span ref={ref}>{fmtCL.format(display)}</span>
        {suffix && <span className="cifra-fix">{suffix}</span>}
      </p>
      <p className="cifra-label">{label}</p>
    </div>
  );
}

/* ============================ nav ============================ */

function Nav({ hidden, compact }: { hidden: boolean; compact: boolean }) {
  return (
    <header className={`nav${hidden ? ' nav--hidden' : ''}${compact ? ' nav--compact' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#inicio" aria-label="OBSIDIANA DENTAL — volver al inicio">
          <span className="brand-name">OBSIDIANA</span>
          <span className="brand-tag">Clínica de Especialidad</span>
        </a>
        <nav className="nav-links" aria-label="Secciones">
          <a className="nav-link" href="#filosofia">Filosofía</a>
          <a className="nav-link" href="#especialidades">Especialidades</a>
          <a className="nav-link" href="#precios">Valores</a>
          <a className="nav-link" href="#metodo">Método</a>
          <a className="nav-link" href="#faq">Preguntas</a>
        </nav>
        <div className="nav-right">
          <a className="nav-tel" href={TEL_HREF} title="Urgencias dentales, respondemos personalmente">
            Urgencias · {TEL}
          </a>
          <a className="btn" href="#reserva">Reservar</a>
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
        <MediaImg
          name="hero.jpg"
          alt="Box dental crepuscular y vacío: sillón como pieza escultórica bajo luz puntual cálida"
          fetchPriority="high"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="grano grano--hero" aria-hidden="true" />
      <div className="wrap hero-content">
        <p className="hero-kicker">Clínica dental de especialidad · Las Condes</p>
        <h1>
          <span className="h1-mask">
            <span>La calma también es</span>
          </span>
          <span className="h1-mask">
            <span>parte del tratamiento.</span>
          </span>
        </h1>
        <p className="hero-sub">
          Implantología, estética y rehabilitación con protocolo de especialidad. Diagnóstico
          digital y presupuesto por escrito antes de tocar un solo diente.
        </p>
        <div className="hero-cta">
          <a className="btn" href="#reserva">Reservar evaluación</a>
          <a className="btn btn--ghost" href="#especialidades">Ver especialidades</a>
        </div>
        <p className="hero-support">
          Urgencias dentales · <a href={TEL_HREF}>{TEL}</a>
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
            Un plan claro antes que una silla de dentista.
          </h2>
          <div className="filosofia-copy" data-reveal="fade" style={{ transitionDelay: '0.12s' }}>
            <p>
              Radiografía panorámica digital el primer día. Presupuesto por escrito. El mismo
              especialista desde la evaluación hasta el control final.
            </p>
            <p>
              Saber qué va a pasar, cuánto va a costar y quién va a tratarlo reduce la mitad
              de la ansiedad de ir al dentista. Por eso el diagnóstico y el plan vienen antes
              que cualquier procedimiento, firmados y explicados paso a paso.
            </p>
            <p className="filosofia-discrecion">
              No publicamos testimonios ni sonrisas de pacientes. La discreción de quienes nos
              eligen es parte del protocolo.
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
        <Cifra fix="+" value={16} label="Años de especialidad" />
        <Cifra fix="+" value={6500} label="Implantes colocados" delay="0.08s" />
        <Cifra value={98} suffix="%" label="Continúa sus controles" delay="0.16s" />
        <Cifra value={2} label="Especialistas titulados, siempre los mismos" delay="0.24s" />
      </div>
    </section>
  );
}

/* ============================ especialidades ============================ */

const ESPECIALIDADES = [
  {
    num: '01',
    titulo: 'Implantología',
    desc: 'Reemplazo de piezas perdidas con implantes de titanio y corona definitiva, planificados sobre radiografía y escaneo digital.',
    duracion: '3 a 6 meses por etapa',
    desde: '$890.000',
  },
  {
    num: '02',
    titulo: 'Estética dental',
    desc: 'Carillas y restauraciones en porcelana y composite, diseñadas sobre tu propio patrón dental, nunca en serie.',
    duracion: '2 a 4 sesiones',
    desde: '$320.000',
  },
  {
    num: '03',
    titulo: 'Rehabilitación oral',
    desc: 'Recuperación de la función masticatoria completa cuando faltan varias piezas o existe desgaste severo, por etapas definidas.',
    duracion: 'Plan por etapas, 2 a 6 meses',
    desde: '$1.450.000',
  },
  {
    num: '04',
    titulo: 'Endodoncia microscópica',
    desc: 'Tratamiento de conducto bajo microscopio quirúrgico: más precisión, menos reintervenciones, diente conservado.',
    duracion: '1 a 3 sesiones',
    desde: '$380.000',
  },
  {
    num: '05',
    titulo: 'Periodoncia',
    desc: 'Control y tratamiento de encías para detener la pérdida de soporte antes de que comprometa las piezas y los implantes.',
    duracion: 'Mantenimiento trimestral',
    desde: '$190.000',
  },
  {
    num: '06',
    titulo: 'Ortodoncia invisible',
    desc: 'Alineadores transparentes con plan digital: ves el resultado simulado y el calendario completo antes de partir.',
    duracion: '12 a 24 meses',
    desde: '$2.990.000',
  },
];

function Especialidades() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec" id="especialidades" aria-label="Especialidades">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Especialidades</p>
          <h2 className="h2">Seis especialidades, dos especialistas.</h2>
          <p className="lead">
            Cada tratamiento lo realiza quien lo diagnostica, dentro de su área titulada.
          </p>
        </div>
        <div className="esp-list" data-reveal="fade">
          {ESPECIALIDADES.map((e, i) => (
            <article
              className="esp"
              key={e.num}
              data-open={open === i ? 'true' : 'false'}
            >
              <button
                className="esp-head"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`esp-panel-${e.num}`}
              >
                <span className="esp-num">{e.num}</span>
                <span className="esp-title">{e.titulo}</span>
                <span className="esp-icon" aria-hidden="true">+</span>
              </button>
              <div className="esp-panel" id={`esp-panel-${e.num}`}>
                <div className="esp-panel-in">
                  <div className="esp-panel-card">
                    <div className="esp-field esp-panel-desc">
                      <p className="esp-field-label">En qué consiste</p>
                      <p className="esp-field-value">{e.desc}</p>
                    </div>
                    <div className="esp-field">
                      <p className="esp-field-label">Duración típica</p>
                      <p className="esp-field-value esp-field-value--mono">{e.duracion}</p>
                    </div>
                    <div className="esp-field">
                      <p className="esp-field-label">Valor desde</p>
                      <p className="esp-field-value esp-field-value--mono">{e.desde}</p>
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
    nombre: 'Evaluación inicial + radiografía panorámica',
    desc: 'Diagnóstico digital completo y presupuesto por escrito el mismo día.',
    desde: '$45.000',
  },
  {
    nombre: 'Endodoncia microscópica',
    desc: 'Conducto bajo microscopio, con control de resultado a los seis meses.',
    desde: '$380.000',
  },
  {
    nombre: 'Corona de zirconio',
    desc: 'Fresada digital sobre implante o pieza natural, color calibrado.',
    desde: '$420.000',
  },
  {
    nombre: 'Implante unitario',
    desc: 'Colocación de implante de titanio con cirugía guiada por computadora.',
    desde: '$890.000',
  },
  {
    nombre: 'Ortodoncia invisible (plan completo)',
    desc: 'Alineadores y todos los controles incluidos hasta la contención final.',
    desde: '$2.990.000',
  },
];

function Precios() {
  return (
    <section className="sec precios" id="precios" aria-label="Precios">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Precios</p>
          <h2 className="h2">Valores claros, sin sorpresas.</h2>
          <p className="lead">
            Rangos de referencia reales en pesos chilenos. El número definitivo sale del
            diagnóstico, no de la caja registradora.
          </p>
        </div>
        <div className="precio-tabla" data-reveal="fade">
          {PRECIOS.map((p) => (
            <div className="precio-row" key={p.nombre}>
              <h3 className="precio-nombre">{p.nombre}</h3>
              <p className="precio-desc">{p.desc}</p>
              <p className="precio-valor">
                <span className="precio-desde">Desde</span>
                <span className="precio-num precio-num--clp">{p.desde}</span>
                <span className="precio-clp">CLP</span>
              </p>
            </div>
          ))}
        </div>
        <p className="precio-nota" data-reveal="fade">
          El valor final se confirma en la evaluación con radiografía. Nunca partimos un
          tratamiento sin tu aprobación por escrito.
        </p>
      </div>
    </section>
  );
}

/* ============================ método ============================ */

const METODO = [
  {
    num: '01',
    titulo: 'Evaluación y diagnóstico digital',
    desc: 'Radiografía panorámica y escaneo el primer día. Sales con el diagnóstico claro y por escrito, no con una lista de dudas.',
  },
  {
    num: '02',
    titulo: 'Plan explicado paso a paso',
    desc: 'Cada fase, su duración y su valor, documentados. Apruebas el plan antes de que se toque un solo diente.',
  },
  {
    num: '03',
    titulo: 'Tratamiento y control',
    desc: 'El mismo especialista que evaluó opera y controla. El alta se firma juntos, cuando el resultado está estable.',
  },
];

function Metodo() {
  return (
    <section className="sec metodo" id="metodo" aria-label="Método">
      <div className="metodo-bg" aria-hidden="true">
        <MediaImg
          name="corridor.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="metodo-scrim" aria-hidden="true" />
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Método</p>
          <h2 className="h2">Tres pasos entre tú y el sillón.</h2>
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
          <h2 className="h2">La clínica, con foco.</h2>
        </div>
        <div className="galeria-grid">
          <figure className="obra obra--kb" data-reveal="curtain">
            <div className="obra-frame">
              <MediaImg
                name="object.jpg"
                alt="Bodegón chiaroscuro de instrumental dental de titanio sobre piedra oscura"
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>Instrumental de precisión — bodegón sobre piedra oscura</span>
              <span className="obra-index">01</span>
            </figcaption>
          </figure>
          <figure className="obra" data-reveal="curtain">
            <div className="obra-frame">
              <MediaImg
                name="texture.jpg"
                alt="Macro de tela quirúrgica celeste pálido con luz rasante"
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>Protocolo de especialidad — tela quirúrgica con luz rasante</span>
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
    q: '¿Cuánto cuesta la evaluación inicial?',
    a: 'La evaluación cuesta $45.000 e incluye radiografía panorámica digital y presupuesto por escrito el mismo día. Si partes un tratamiento con nosotros, ese valor se descuenta del plan completo.',
  },
  {
    q: '¿Colocar un implante duele?',
    a: 'La cirugía se realiza con anestesia local y durante el procedimiento no hay dolor. Al día siguiente existen molestias manejables con analgésicos comunes; la mayoría de nuestros pacientes retoma su rutina en 24 a 48 horas.',
  },
  {
    q: '¿Cuánto demora un implante de principio a fin?',
    a: 'Entre 3 y 6 meses según tu integración ósea: cirugía de colocación, período de osteointegración y corona definitiva. El calendario exacto te lo entregamos por escrito antes de empezar.',
  },
  {
    q: '¿Quién realiza el procedimiento?',
    a: 'Siempre uno de los dos especialistas titulados de la clínica. El mismo profesional que evalúa es el que opera y el que hace los controles. No derivamos a profesionales rotativos ni subcontratamos.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Transferencia, débito y tarjetas de crédito. En tratamientos de mayor monto organizamos cuotas coordinadas directamente con la clínica, siempre por escrito y sin cargos ocultos.',
  },
  {
    q: '¿Cómo es el post-operatorio?',
    a: 'Control incluido a los siete días y línea directa con tu especialista por WhatsApp durante toda la recuperación. Fuera de horario, urgencias responde al mismo teléfono de siempre.',
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec" id="faq" aria-label="Preguntas frecuentes">
      <div className="wrap">
        <div className="sec-head" data-reveal="fade">
          <p className="kicker">Preguntas</p>
          <h2 className="h2">Lo que preguntan antes de reservar.</h2>
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
            <h2 className="h2">Tu evaluación, esta semana.</h2>
            <p>
              <a className="reserva-tel" href={TEL_HREF}>{TEL}</a>
            </p>
            <p>
              <a className="btn" href={TEL_HREF}>Reservar evaluación</a>
            </p>
            <p className="reserva-micro">Respondemos personalmente. Sin call centers.</p>
          </div>
          <dl className="reserva-datos" data-reveal="fade" style={{ transitionDelay: '0.1s' }}>
            <div>
              <dt>Correo</dt>
              <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>Lun–Vie 9:00–19:30 · Sáb con hora</dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>Las Condes, Santiago</dd>
            </div>
          </dl>
        </div>
        <footer className="footer">
          <span>OBSIDIANA DENTAL — Clínica de Especialidad</span>
          <span>Las Condes, Santiago · Chile</span>
          <span>© {new Date().getFullYear()} OBSIDIANA DENTAL</span>
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
          Urgencias dentales,
          <br />
          respondemos personalmente
        </p>
        <a className="btn" href={TEL_HREF}>Llamar ahora</a>
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
      <div className="grano" aria-hidden="true" />
      <Nav hidden={hidden} compact={compact} />
      <main>
        <Hero />
        <Filosofia />
        <Cifras />
        <Especialidades />
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
