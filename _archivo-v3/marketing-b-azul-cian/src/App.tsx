import { useEffect, useRef, useState } from 'react';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const media = (archivo: string) => `${import.meta.env.BASE_URL}media/${archivo}`;

function movimientoReducido() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function useRevelar<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (movimientoReducido()) {
      el.classList.add('visible');
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('visible');
            io.disconnect();
          }
        });
      },
      { threshold: 0.14 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function useAlEntrar<T extends HTMLElement>(umbral: number, accion: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (movimientoReducido()) {
      accion();
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            accion();
            io.disconnect();
          }
        });
      },
      { threshold: umbral },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [accion, umbral]);
  return ref;
}

function Progreso() {
  const barra = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const actualizar = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barra.current) barra.current.style.transform = `scaleX(${p})`;
    };
    actualizar();
    window.addEventListener('scroll', actualizar, { passive: true });
    window.addEventListener('resize', actualizar);
    return () => {
      window.removeEventListener('scroll', actualizar);
      window.removeEventListener('resize', actualizar);
    };
  }, []);
  return (
    <div className="progreso" aria-hidden="true">
      <div className="progreso-barra" ref={barra} />
    </div>
  );
}

const ENLACES_NAV: Array<[string, string]> = [
  ['Servicios', '#servicios'],
  ['Cifras', '#cifras'],
  ['Precios', '#precios'],
  ['Método', '#metodo'],
  ['Preguntas', '#faq'],
];

function Navegacion() {
  const [oculto, setOculto] = useState(false);
  const [compacta, setCompacta] = useState(false);
  useEffect(() => {
    let ultimoY = window.scrollY;
    const alScrollear = () => {
      const y = window.scrollY;
      setCompacta(y > 24);
      const delta = y - ultimoY;
      if (Math.abs(delta) > 6) {
        setOculto(delta > 0 && y > 320);
        ultimoY = y;
      }
    };
    window.addEventListener('scroll', alScrollear, { passive: true });
    return () => window.removeEventListener('scroll', alScrollear);
  }, []);
  return (
    <header
      className={`nav${compacta ? ' compacta' : ''}${oculto ? ' oculta' : ''}`}
    >
      <div className="nav-int contenedor">
        <a className="marca" href="#inicio" aria-label="PULSO, volver al inicio">
          <span className="marca-cuadro" aria-hidden="true" />
          PULSO
        </a>
        <nav className="nav-enlaces" aria-label="Secciones de la propuesta">
          {ENLACES_NAV.map(([texto, href]) => (
            <a key={href} className="link-sub" href={href}>
              {texto}
            </a>
          ))}
        </nav>
        <a className="btn btn-nav" href="#reserva">
          Solicitar
        </a>
      </div>
    </header>
  );
}

function CtaMovil() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const actualizar = () =>
      setVisible(window.scrollY > window.innerHeight * 0.8);
    actualizar();
    window.addEventListener('scroll', actualizar, { passive: true });
    return () => window.removeEventListener('scroll', actualizar);
  }, []);
  return (
    <div
      className={`cta-movil${visible ? ' visible' : ''}`}
      aria-hidden={!visible}
    >
      <a href="#reserva" tabIndex={visible ? 0 : -1}>
        Solicitar propuesta
      </a>
    </div>
  );
}

const LINEAS_H1 = ['Presencia digital', 'con respaldo', 'de datos.'];

function Inicio() {
  const [montado, setMontado] = useState(false);
  useEffect(() => {
    if (movimientoReducido()) {
      setMontado(true);
      return;
    }
    const raf = requestAnimationFrame(() => setMontado(true));
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <>
      <section id="inicio" className="hero" aria-label="Presentación">
        <div className="contenedor hero-grid">
          <div className={`hero-texto${montado ? ' montado' : ''}`}>
            <p className="kicker">Agencia de marketing · Las Condes</p>
            <h1 className="hero-h1">
              {LINEAS_H1.map((linea, i) => (
                <span className="h1-linea" key={linea}>
                  <span
                    style={{
                      transitionDelay: `${i * 0.12}s`,
                      transitionTimingFunction: EASE,
                    }}
                  >
                    {linea}
                  </span>
                </span>
              ))}
            </h1>
            <p className="hero-sub">
              Pauta, contenido y analítica bajo un solo plan mensual.
              <br />
              Reportes claros y un ejecutivo que responde por su nombre.
            </p>
            <div className="hero-acciones">
              <a className="btn btn-solido" href="#reserva">
                Solicitar propuesta
              </a>
              <a className="link-sub link-fuerte" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
          <figure className="hero-media">
            <img
              src={media('hero.jpg')}
              alt="Oficina abierta en penumbra azulada y sin personas, con ventanal hacia una ciudad fuera de foco"
              width={1600}
              height={900}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>
      <div className="hero-banda">
        <p className="contenedor banda-int">
          <span>Planes mensuales con ejecutivo dedicado</span>
          <span className="banda-sep" aria-hidden="true">
            ·
          </span>
          <span>Reporte con números auditables</span>
        </p>
      </div>
    </>
  );
}

const SERVICIOS = [
  {
    num: '01',
    titulo: 'Estrategia y posicionamiento',
    desc: 'Territorio de marca, promesa y mensajes que sostienen toda la pauta posterior.',
    duracion: '4–6 semanas',
    precio: 'desde $180.000',
  },
  {
    num: '02',
    titulo: 'Pauta digital y paid media',
    desc: 'Google Ads, Meta y LinkedIn con presupuestos defendibles y optimización semanal.',
    duracion: 'gestión continua',
    precio: 'desde $350.000/mes',
  },
  {
    num: '03',
    titulo: 'Contenido y producción audiovisual',
    desc: 'Pieza central de marca y cortes verticales para redes, filmados en estudio propio.',
    duracion: '2–4 semanas por campaña',
    precio: 'desde $420.000',
  },
  {
    num: '04',
    titulo: 'SEO técnico',
    desc: 'Arquitectura, rendimiento y datos estructurados: lo que vuelve encontrable tu sitio.',
    duracion: 'auditoría en 2–3 semanas',
    precio: 'desde $260.000',
  },
  {
    num: '05',
    titulo: 'Redes sociales',
    desc: 'Calendario editorial, comunidad y manejo de crisis con tono de marca consistente.',
    duracion: 'calendario mensual',
    precio: 'incluido en el plan integral',
  },
  {
    num: '06',
    titulo: 'Analítica y dashboards',
    desc: 'Tablero vivo con números auditables: cada peso con su origen y su retorno.',
    duracion: 'montaje en 2 semanas',
    precio: 'desde $120.000',
  },
];

function Servicios() {
  const ref = useRevelar<HTMLDivElement>();
  const refLista = useRevelar<HTMLUListElement>();
  const refBanda = useRevelar<HTMLElement>();
  const [abierto, setAbierto] = useState<number | null>(null);
  const puedeHover =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  return (
    <section id="servicios" className="seccion">
      <div className="contenedor">
        <div className="revelar" data-revelar ref={ref}>
          <p className="kicker">Servicios</p>
          <h2 className="titulo">Seis frentes, un solo ejecutivo a cargo.</h2>
        </div>
        <ul className="lista-servicios revelar" data-revelar ref={refLista}>
          {SERVICIOS.map((s, i) => (
            <li
              key={s.num}
              className={`servicio${abierto === i ? ' abierto' : ''}`}
            >
              <button
                type="button"
                className="srv-btn"
                aria-expanded={abierto === i}
                onMouseEnter={() => puedeHover && setAbierto(i)}
                onFocus={() => puedeHover && setAbierto(i)}
                onMouseLeave={() => puedeHover && setAbierto(null)}
                onBlur={() => puedeHover && setAbierto(null)}
                onClick={() => setAbierto((a) => (a === i ? null : i))}
              >
                <span className="srv-num tabular">{s.num}</span>
                <span className="srv-titulo">{s.titulo}</span>
                <span className="srv-cruz" aria-hidden="true" />
              </button>
              <div className="srv-extra">
                <div className="srv-extra-int">
                  <p className="srv-desc">{s.desc}</p>
                  <p className="srv-meta">
                    <span>{s.duracion}</span>
                    <span className="srv-precio tabular">{s.precio}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <figure className="banda-estudio revelar" data-revelar ref={refBanda}>
          <img
            src={media('estudio.jpg')}
            alt="Ciclorama gris-azul del estudio propio de producción, iluminado en frío, con dos luces montadas en pértiga a los costados"
            width={1024}
            height={576}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="banda-estudio-caption">
            <span>Estudio propio de producción · Las Condes</span>
            <span className="tabular">Ciclorama 6×4 m · luces en pértiga</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

type Cifra = {
  valor: number;
  prefijo?: string;
  sufijo?: string;
  etiqueta: string;
};

const CIFRAS: Cifra[] = [
  { valor: 10, prefijo: '+', etiqueta: 'años operando' },
  { valor: 120, prefijo: '+', etiqueta: 'cuentas atendidas' },
  { valor: 91, sufijo: '%', etiqueta: 'retención anual' },
  { valor: 1, etiqueta: 'ejecutivo senior por cuenta' },
];

function Contador({ valor, prefijo = '', sufijo = '' }: Omit<Cifra, 'etiqueta'>) {
  const [n, setN] = useState(movimientoReducido() ? valor : 0);
  const animar = useRef(() => {
    const t0 = performance.now();
    const paso = (t: number) => {
      const p = Math.min(1, (t - t0) / 1200);
      const suavizado = 1 - Math.pow(1 - p, 3);
      setN(Math.round(suavizado * valor));
      if (p < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  }).current;
  const ref = useAlEntrar<HTMLSpanElement>(0.5, animar);
  return (
    <span ref={ref} className="cifra-num tabular">
      {prefijo}
      {n.toLocaleString('es-CL')}
      {sufijo}
    </span>
  );
}

function Cifras() {
  const ref = useRevelar<HTMLDivElement>();
  return (
    <section id="cifras" className="seccion cifras">
      <div className="contenedor">
        <div className="revelar" data-revelar ref={ref}>
          <p className="kicker">La evidencia primero</p>
          <h2 className="titulo">
            Números que sostienen la promesa, sin casos inflados.
          </h2>
          <dl className="grid-cifras">
            {CIFRAS.map((c) => (
              <div className="cifra" key={c.etiqueta}>
                <dt className="cifra-etq">{c.etiqueta}</dt>
                <dd className="cifra-val">
                  <Contador valor={c.valor} prefijo={c.prefijo} sufijo={c.sufijo} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Interludio() {
  return (
    <div className="interludio" aria-hidden="true">
      <img src={media('detalle.jpg')} alt="" loading="lazy" decoding="async" />
    </div>
  );
}

const PRECIOS = [
  {
    servicio: 'Diagnóstico estratégico',
    alcance: 'Objetivos escritos y alcance acotado',
    plazo: '4–6 semanas',
    precio: '$180.000',
  },
  {
    servicio: 'Plan mensual integral',
    alcance: 'Pauta, contenido y analítica bajo un mismo ejecutivo',
    plazo: 'mes a mes tras mínimo inicial',
    precio: '$890.000/mes',
  },
  {
    servicio: 'Gestión de pauta digital',
    alcance: 'Google Ads, Meta Ads y LinkedIn Ads',
    plazo: 'gestión continua',
    precio: '$350.000/mes',
  },
  {
    servicio: 'Producción audiovisual',
    alcance: 'Pieza central más cortes verticales para redes',
    plazo: 'por proyecto',
    precio: '$420.000',
  },
  {
    servicio: 'Auditoría SEO técnica',
    alcance: 'Rastreo completo y backlog priorizado',
    plazo: '2–3 semanas',
    precio: '$260.000',
  },
  {
    servicio: 'Reporte personalizado',
    alcance: 'Tablero a medida y capacitación al equipo',
    plazo: 'montaje en 2 semanas',
    precio: '$120.000',
  },
];

function Precios() {
  const ref = useRevelar<HTMLDivElement>();
  return (
    <section id="precios" className="seccion precios">
      <div className="contenedor">
        <div className="revelar" data-revelar ref={ref}>
          <p className="kicker">Precios</p>
          <h2 className="titulo">Precios claros, sin sorpresas.</h2>
          <div className="tabla-envoltorio">
            <table className="tabla-precios">
              <caption className="sr-only">
                Valores de referencia desde, en pesos chilenos
              </caption>
              <thead>
                <tr>
                  <th scope="col">Servicio</th>
                  <th scope="col">Alcance</th>
                  <th scope="col">Plazo</th>
                  <th scope="col" className="col-precio">
                    Desde (CLP)
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS.map((f) => (
                  <tr key={f.servicio}>
                    <th scope="row">{f.servicio}</th>
                    <td>{f.alcance}</td>
                    <td>{f.plazo}</td>
                    <td className="col-precio tabular">{f.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="nota-precios">
            El valor final se confirma tras el diagnóstico. Nunca partimos sin
            objetivos escritos y aprobados.
          </p>
        </div>
      </div>
    </section>
  );
}

const METODO = [
  {
    num: '01',
    titulo: 'Diagnóstico',
    texto:
      'Auditamos presencia actual, datos históricos y competencia. Termina con hallazgos priorizados, no con un PDF decorativo.',
  },
  {
    num: '02',
    titulo: 'Plan y KPIs por escrito',
    texto:
      'Objetivos medibles, presupuesto por canal y calendario. Nada arranca sin tu aprobación por escrito.',
  },
  {
    num: '03',
    titulo: 'Ejecución y reporte mensual',
    texto:
      'Un ejecutivo senior pone su nombre a tu cuenta: tablero vivo y reunión mensual con números auditables.',
  },
];

function Metodo() {
  const ref = useRevelar<HTMLDivElement>();
  return (
    <section id="metodo" className="seccion metodo">
      <div className="contenedor">
        <div className="revelar" data-revelar ref={ref}>
          <p className="kicker">Método</p>
          <h2 className="titulo">Tres pasos, todos con papeles.</h2>
          <ol className="grid-metodo">
            {METODO.map((p) => (
              <li key={p.num}>
                <span className="metodo-num tabular" aria-hidden="true">
                  {p.num}
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const VOCES = [
  {
    cita:
      'Pasamos de publicar por intuición a decidir con números. El reporte mensual lo entiende todo el directorio.',
    autor: 'Marcela, gerenta de marketing · industria servicios',
  },
  {
    cita:
      'El ejecutivo responde el mismo día y llega a las reuniones con datos, no con promesas.',
    autor: 'Rodrigo, gerente comercial · retail especializado',
  },
  {
    cita:
      'Ordenaron pauta, contenido y analítica en un solo plan. Por primera vez sabemos qué devuelve cada peso invertido.',
    autor: 'Camila, directora de operaciones · salud preventiva',
  },
];

function Voces() {
  const ref = useRevelar<HTMLDivElement>();
  const [indice, setIndice] = useState(0);
  const [pausada, setPausada] = useState(false);
  useEffect(() => {
    if (pausada || movimientoReducido()) return;
    const id = window.setInterval(
      () => setIndice((i) => (i + 1) % VOCES.length),
      7000,
    );
    return () => window.clearInterval(id);
  }, [pausada]);
  return (
    <section
      id="voces"
      className="seccion voces"
      onMouseEnter={() => setPausada(true)}
      onMouseLeave={() => setPausada(false)}
      onFocusCapture={() => setPausada(true)}
      onBlurCapture={() => setPausada(false)}
    >
      <div className="contenedor">
        <div className="revelar" data-revelar ref={ref}>
          <p className="kicker">Voces</p>
          <blockquote className="voz" key={indice}>
            <p className="voz-cita">{VOCES[indice].cita}</p>
            <footer className="voz-autor">— {VOCES[indice].autor}</footer>
          </blockquote>
          <div className="voz-controles">
            {VOCES.map((v, i) => (
              <button
                key={v.autor}
                type="button"
                className={`voz-punto tabular${i === indice ? ' activo' : ''}`}
                aria-label={`Mostrar testimonio ${i + 1}`}
                aria-pressed={i === indice}
                onClick={() => setIndice(i)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
            <button
              type="button"
              className="voz-pausa"
              onClick={() => setPausada((p) => !p)}
            >
              {pausada ? 'Reanudar rotación' : 'Detener rotación'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  [
    '¿Hay contrato de permanencia?',
    'Los planes integrales piden un mínimo inicial de tres meses: es el tiempo honesto para que el diagnóstico madure y los KPIs muestren tendencia. Después sigues mes a mes y puedes terminar avisando con treinta días.',
  ],
  [
    '¿Cuánto cuesta la propuesta?',
    'El diagnóstico parte en $180.000 y se descuenta del primer mes si contratas el plan. El valor final se confirma por escrito tras esa etapa; nunca partimos sin objetivos aprobados.',
  ],
  [
    '¿Quién trabaja mi cuenta?',
    'Un ejecutivo senior con nombre, correo y teléfono directo. No te derivamos a un buzón genérico ni rotamos equipos sin avisarte antes.',
  ],
  [
    '¿Cada cuánto reportan?',
    'Tablero disponible siempre, reporte escrito cada mes y una reunión de cuarenta y cinco minutos para leerlo contigo, línea por línea.',
  ],
  [
    '¿Qué pasa si los números no mejoran?',
    'Lo conversamos con los datos sobre la mesa: ajustamos objetivos, canales o presupuesto. Si tras dos ciclos no hay avance, te recomendamos reducir la inversión nosotros mismos.',
  ],
  [
    '¿Qué formas de pago aceptan?',
    'Transferencia y tarjeta, con facturación electrónica. Los planes mensuales se cobran dentro de los primeros cinco días hábiles de cada mes.',
  ],
];

function Pregunta({
  pregunta,
  respuesta,
}: {
  pregunta: string;
  respuesta: string;
}) {
  const [abierta, setAbierta] = useState(false);
  return (
    <li className={`pregunta${abierta ? ' abierta' : ''}`}>
      <button
        type="button"
        className="pregunta-btn"
        aria-expanded={abierta}
        onClick={() => setAbierta((a) => !a)}
      >
        <span>{pregunta}</span>
        <span className="srv-cruz" aria-hidden="true" />
      </button>
      <div className="srv-extra">
        <div className="srv-extra-int">
          <p className="respuesta">{respuesta}</p>
        </div>
      </div>
    </li>
  );
}

function Faq() {
  const ref = useRevelar<HTMLDivElement>();
  return (
    <section id="faq" className="seccion faq">
      <div className="contenedor">
        <div className="revelar" data-revelar ref={ref}>
          <p className="kicker">Preguntas frecuentes</p>
          <h2 className="titulo">Lo que nos preguntan antes de firmar.</h2>
          <ul className="lista-faq">
            {FAQS.map(([pregunta, respuesta]) => (
              <Pregunta key={pregunta} pregunta={pregunta} respuesta={respuesta} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Reserva() {
  return (
    <section id="reserva" className="reserva">
      <div className="contenedor reserva-grid">
        <div className="reserva-texto revelar" data-revelar>
          <p className="kicker">Reserva tu diagnóstico</p>
          <h2 className="titulo">Empecemos por los números.</h2>
          <a className="telefono tabular" href="tel:+56228403344">
            +56 2 2840 3344
          </a>
          <div className="reserva-acciones">
            <a
              className="btn btn-solido"
              href="mailto:hola@pulso.cl?subject=Solicitud%20de%20propuesta"
            >
              Solicitar propuesta
            </a>
          </div>
          <dl className="reserva-datos">
            <div>
              <dt>Correo</dt>
              <dd>
                <a className="link-sub" href="mailto:hola@pulso.cl">
                  hola@pulso.cl
                </a>
              </dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>Lun–Vie 9:00–18:30</dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>Las Condes, Santiago</dd>
            </div>
          </dl>
          <p className="micro-linea">Respondemos personalmente. Sin call centers.</p>
        </div>
        <figure className="reserva-media revelar" data-revelar>
          <img
            src={media('consola.jpg')}
            alt="Audífonos profesionales sobre una consola grafito iluminada con luz cian lateral"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor pie-int">
        <p>
          © {new Date().getFullYear()} PULSO SpA · Las Condes, Santiago ·
          Facturación electrónica SII · Boleta y contrato por escrito
        </p>
        <p className="pie-secundario">
          Propuesta Órbita · Rediseño demostrativo para agencias de marketing
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <>
      <a className="salto" href="#servicios">
        Saltar al contenido
      </a>
      <Progreso />
      <Navegacion />
      <main>
        <Inicio />
        <Servicios />
        <Cifras />
        <Interludio />
        <Precios />
        <Metodo />
        <Voces />
        <Faq />
        <Reserva />
      </main>
      <Pie />
      <CtaMovil />
    </>
  );
}

