import { useCallback, useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react';

const media = (nombre: string) => `${import.meta.env.BASE_URL}media/${nombre}`;

const clp = (n: number) => n.toLocaleString('es-CL');

function useMovimientoReducido() {
  const [reducido, setReducido] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const al = () => setReducido(mq.matches);
    mq.addEventListener('change', al);
    return () => mq.removeEventListener('change', al);
  }, []);
  return reducido;
}

type CifraProps = { valor: number; prefijo?: string; sufijo?: string };

function ValorCifra({ valor, prefijo = '', sufijo = '' }: CifraProps) {
  const reducido = useMovimientoReducido();
  const ref = useRef<HTMLSpanElement>(null);
  const [mostrado, setMostrado] = useState(reducido || valor === 0 ? valor : 0);

  useEffect(() => {
    if (valor === 0) return;
    if (reducido) {
      setMostrado(valor);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const inicio = performance.now();
        const dura = 1200;
        const paso = (t: number) => {
          const p = Math.min(1, (t - inicio) / dura);
          const suave = 1 - Math.pow(1 - p, 3);
          setMostrado(Math.round(valor * suave));
          if (p < 1) raf = requestAnimationFrame(paso);
        };
        raf = requestAnimationFrame(paso);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [valor, reducido]);

  return (
    <span ref={ref} className="num-tabular">
      {prefijo}
      {clp(mostrado)}
      {sufijo}
    </span>
  );
}

const SECCIONES_NAV = [
  { id: 'servicios', texto: 'Servicios' },
  { id: 'precios', texto: 'Precios' },
  { id: 'metodo', texto: 'Método' },
  { id: 'voces', texto: 'Voces' },
  { id: 'faq', texto: 'Preguntas' },
];

function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const progresoRef = useRef<HTMLDivElement>(null);
  const [activa, setActiva] = useState('');

  useEffect(() => {
    const nav = navRef.current;
    const barra = progresoRef.current;
    if (!nav || !barra) return;
    let ultimaY = window.scrollY;
    let pendiente = false;

    const actualizar = () => {
      pendiente = false;
      const y = window.scrollY;
      const delta = y - ultimaY;
      nav.classList.toggle('compacta', y > 40);
      nav.classList.toggle('con-filete', y > 8);
      if (y < 88) {
        nav.classList.remove('oculta');
      } else if (delta > 8) {
        nav.classList.add('oculta');
      } else if (delta < -8) {
        nav.classList.remove('oculta');
      }
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.transform = `scaleX(${alto > 0 ? y / alto : 0})`;
      ultimaY = y;
    };

    const alScroll = () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(actualizar);
      }
    };

    window.addEventListener('scroll', alScroll, { passive: true });
    actualizar();

    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) setActiva(e.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const s of SECCIONES_NAV) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => {
      window.removeEventListener('scroll', alScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={progresoRef} className="progreso" aria-hidden="true" />
      <header ref={navRef} className="nav">
        <div className="contenedor nav-inner">
          <a href="#inicio" className="marca">
            CRITERIO<sup>®</sup>
          </a>
          <nav aria-label="Secciones">
            <ul className="nav-links">
              {SECCIONES_NAV.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={activa === s.id ? 'activa' : undefined}>
                    {s.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-derecha">
            <a className="nav-tel num-tabular" href="tel:+56228401122">
              +56 2 2840 1122
            </a>
            <a className="boton" href="#reserva">
              Agendar
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

const SERVICIOS = [
  {
    num: '01',
    nombre: 'Estrategia y posicionamiento',
    hint: 'Punto de partida',
    desc: 'Dónde estás, dónde puedes ganar y qué decir. Un documento de estrategia que tu equipo puede leer en 20 minutos.',
    duracion: 'Proyecto · 4–6 semanas',
    precio: 1400000,
    unidad: '',
  },
  {
    num: '02',
    nombre: 'Pauta digital',
    hint: 'Google · Meta · LinkedIn',
    desc: 'Campañas con objetivos escritos y presupuesto defendible. Tú apruebas la inversión en medios; nosotros respondemos por la gestión.',
    duracion: 'Gestión mensual continua',
    precio: 650000,
    unidad: '/mes',
  },
  {
    num: '03',
    nombre: 'Contenido y copywriting',
    hint: 'Sitio web · campañas',
    desc: 'Textos que explican y venden sin adjetivos vacíos. Calendario editorial acordado y firmado antes de producir.',
    duracion: 'Producción mensual',
    precio: 520000,
    unidad: '/mes',
  },
  {
    num: '04',
    nombre: 'SEO técnico',
    hint: 'Buscadores',
    desc: 'Arquitectura, velocidad e indexación. Primero lo que impide que te encuentren; después, el contenido.',
    duracion: 'Auditoría · 3 semanas',
    precio: 900000,
    unidad: '',
  },
  {
    num: '05',
    nombre: 'Redes sociales',
    hint: 'Presencia y comunidad',
    desc: 'Menos publicaciones, mejores publicaciones. Criterio editorial propio para cada canal, con pauta cuando corresponde.',
    duracion: 'Gestión mensual',
    precio: 450000,
    unidad: '/mes',
  },
  {
    num: '06',
    nombre: 'Analítica y reportes',
    hint: 'Medición honesta',
    desc: 'Tablero único con las métricas que mueven tu negocio y un reporte escrito cada mes, con los números auditables.',
    duracion: 'Instalación + mensual',
    precio: 380000,
    unidad: '/mes',
  },
];

function Servicios() {
  const [abierta, setAbierta] = useState<number | null>(null);

  return (
    <section id="servicios" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion" data-revelar>
          <div>
            <p className="kicker">Servicios</p>
            <h2 className="titulo-seccion">Seis disciplinas, un solo criterio.</h2>
          </div>
          <p className="cabecera-nota">
            Cada línea incluye duración típica y precio de referencia. El detalle fino va por
            escrito tras el diagnóstico.
          </p>
        </div>

        <div data-revelar style={{ '--retraso': '80ms' } as CSSProperties}>
          {SERVICIOS.map((s, i) => (
            <article key={s.num} className={`serv-fila${abierta === i ? ' abierta' : ''}`}>
              <button
                type="button"
                className="serv-cab"
                aria-expanded={abierta === i}
                aria-controls={`serv-detalle-${s.num}`}
                onClick={() => setAbierta(abierta === i ? null : i)}
              >
                <span className="serv-num">{s.num}</span>
                <span className="serv-nombre">{s.nombre}</span>
                <span className="serv-hint">{s.hint}</span>
                <span className="serv-mas" aria-hidden="true" />
              </button>
              <div id={`serv-detalle-${s.num}`} className="serv-detalle" role="region">
                <div className="serv-detalle-inner">
                  <div className="serv-detalle-caja">
                    <p className="serv-desc">{s.desc}</p>
                    <span className="serv-duracion">{s.duracion}</span>
                    <span className="serv-precio num-tabular">
                      <small>Desde</small>${clp(s.precio)}
                      {s.unidad}
                    </span>
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

function Cifras() {
  return (
    <section id="cifras" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion" data-revelar>
          <div>
            <p className="kicker">La agencia en números</p>
            <h2 className="titulo-seccion">Lo que podemos respaldar.</h2>
          </div>
          <p className="cabecera-nota">
            Sin promesas grandes: cuentas atendidas, años operando y clientes que se quedan.
          </p>
        </div>
        <div className="cifras-grid" data-revelar style={{ '--retraso': '80ms' } as CSSProperties}>
          <div className="cifra">
            <p className="valor-cifra">
              <ValorCifra valor={12} prefijo="+" />
            </p>
            <p className="etiqueta-cifra">años operando</p>
          </div>
          <div className="cifra">
            <p className="valor-cifra">
              <ValorCifra valor={160} prefijo="+" />
            </p>
            <p className="etiqueta-cifra">cuentas atendidas</p>
          </div>
          <div className="cifra">
            <p className="valor-cifra">
              <ValorCifra valor={94} sufijo="%" />
            </p>
            <p className="etiqueta-cifra">retención anual de clientes</p>
          </div>
          <div className="cifra">
            <p className="valor-cifra">
              <ValorCifra valor={0} />
            </p>
            <p className="etiqueta-cifra">pasantes en tu cuenta: equipo senior directo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANES = [
  {
    nombre: 'Diagnóstico inicial',
    alcance: '90 minutos + informe escrito con prioridades',
    precio: '$250.000',
    unidad: 'una vez',
  },
  {
    nombre: 'Plan mensual integral',
    alcance: 'Estrategia, contenido, pauta y reporte',
    precio: `Desde $${clp(1800000)}`,
    unidad: '/mes',
  },
  {
    nombre: 'Gestión de pauta',
    alcance: 'Sin incluir inversión en medios',
    precio: `Desde $${clp(650000)}`,
    unidad: '/mes',
  },
  {
    nombre: 'Producción de contenido',
    alcance: 'Calendario editorial y piezas aprobadas',
    precio: `Desde $${clp(520000)}`,
    unidad: '/mes',
  },
  {
    nombre: 'Auditoría SEO técnica',
    alcance: 'Informe priorizado con tu equipo técnico',
    precio: `Desde $${clp(900000)}`,
    unidad: 'proyecto',
  },
  {
    nombre: 'Capacitación al equipo',
    alcance: 'Jornada práctica en tus oficinas',
    precio: `Desde $${clp(320000)}`,
    unidad: '/jornada',
  },
];

function Precios() {
  return (
    <section id="precios" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion" data-revelar>
          <div>
            <p className="kicker">Precios</p>
            <h2 className="titulo-seccion">Precios claros, sin sorpresas.</h2>
          </div>
          <p className="cabecera-nota">
            Valores de referencia en pesos chilenos, IVA aparte. Vigentes para 2026.
          </p>
        </div>

        <table className="tabla-precios" data-revelar style={{ '--retraso': '60ms' } as CSSProperties}>
          <caption>Precios de referencia CRITERIO</caption>
          <thead>
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Incluye</th>
              <th scope="col" className="col-precio">
                Desde
              </th>
            </tr>
          </thead>
          <tbody>
            {PLANES.map((p) => (
              <tr key={p.nombre}>
                <td className="nombre-plan">{p.nombre}</td>
                <td className="alcance-plan">{p.alcance}</td>
                <td className="desde-plan num-tabular">
                  {p.precio}
                  <small>{p.unidad}</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div data-revelar style={{ '--retraso': '120ms' } as CSSProperties}>
          <p className="nota-honesta">
            El valor final se confirma tras el diagnóstico. Nunca partimos una cuenta sin objetivos
            escritos y aprobados.
          </p>
          <p className="nota-honesta-pie">IVA no incluido · Factura electrónica · Sin permanencia.</p>
        </div>
      </div>
    </section>
  );
}

const PASOS = [
  {
    num: '01',
    titulo: 'Diagnóstico',
    texto:
      'Auditamos tus cuentas, datos y contenidos. Una reunión de 90 minutos y un informe con prioridades, sin costo oculto.',
  },
  {
    num: '02',
    titulo: 'Plan y KPIs por escrito',
    texto:
      'Objetivos numéricos, responsables y plazos en un documento de dos páginas. Se firma antes de invertir un peso.',
  },
  {
    num: '03',
    titulo: 'Ejecución y reporte mensual',
    texto:
      'Trabajo según plan y un reporte escrito el día 5 de cada mes, con números auditables contra tus propias fuentes.',
  },
];

const MATERIALES = [
  {
    src: media('muestras.jpg'),
    alt: 'Papelería y documentos de marca alineados sobre una mesa de madera clara, con luz natural lateral.',
    caption: 'Papelería del taller · Providencia',
  },
  {
    src: media('detalle.jpg'),
    alt: 'Primer plano de papel algodón texturado, con luz rasante suave revelando la fibra.',
    caption: 'Papel algodón 300 g · detalle',
  },
  {
    src: media('cuaderno.jpg'),
    alt: 'Cuaderno cerrado, lápiz de grafito y taza de cerámica blanca sobre tela de lino clara.',
    caption: 'Bitácora de diagnóstico · una por cuenta',
  },
];

function Metodo() {
  return (
    <section id="metodo" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion" data-revelar>
          <div>
            <p className="kicker">Método</p>
            <h2 className="titulo-seccion">Tres pasos. Siempre iguales.</h2>
          </div>
          <p className="cabecera-nota">
            El mismo orden para una pyme o para una corporación: cambia la escala, nunca el proceso.
          </p>
        </div>

        <ol className="metodo-grid" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {PASOS.map((paso, i) => (
            <li key={paso.num} className="metodo-paso" data-revelar style={{ '--retraso': `${i * 90}ms` } as CSSProperties}>
              <p className="paso-num" aria-hidden="true">
                {paso.num}
              </p>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </li>
          ))}
        </ol>

        <div className="hero-grid" style={{ marginTop: 'clamp(48px, 6vw, 80px)' }} data-revelar>
          {MATERIALES.map((m, i) => (
            <figure
              key={m.caption}
              style={{
                margin: 0,
                gridColumn: 'span 4',
                ['--retraso' as string]: `${i * 90}ms`,
              }}
            >
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                width={960}
                height={720}
                style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', background: 'var(--papel-2)' }}
              />
              <figcaption
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--gris)',
                }}
              >
                {m.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const VOCES = [
  {
    cita:
      'Por primera vez entiendo qué estamos comprando con la pauta. El reporte llega el día 5 y los números calzan con nuestro ERP.',
    autor: 'Rodrigo',
    cargo: 'gerente comercial · industria retail',
  },
  {
    cita:
      'Nos explicaron el plan completo en dos páginas. Sin humo ni palabras raras. Eso nos hizo confiar y firmar.',
    autor: 'Daniela',
    cargo: 'socia · estudio profesional',
  },
  {
    cita:
      'Bajamos el gasto en publicidad a un tercio y vendimos exactamente lo mismo. Nadie nos había mostrado el porqué con tanta claridad.',
    autor: 'Matías',
    cargo: 'fundador · comercio electrónico de hogar',
  },
];

function Voces() {
  const reducido = useMovimientoReducido();
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (reducido || pausado || hover) return;
    const t = setInterval(() => setIndice((i) => (i + 1) % VOCES.length), 7000);
    return () => clearInterval(t);
  }, [reducido, pausado, hover]);

  const mover = useCallback((delta: number) => {
    setIndice((i) => (i + delta + VOCES.length) % VOCES.length);
  }, []);

  const voz = VOCES[indice];

  return (
    <section id="voces" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion" data-revelar>
          <div>
            <p className="kicker">Voces</p>
            <h2 className="titulo-seccion">Lo que dicen quienes contratan.</h2>
          </div>
        </div>

        <div
          className="voces-escena"
          data-revelar
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <figure className="voz activa" key={indice}>
            <span className="voz-comilla" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p>{voz.cita}</p>
            </blockquote>
            <figcaption>
              <strong>— {voz.autor}</strong>, {voz.cargo}
            </figcaption>
          </figure>
        </div>

        <div className="voces-controles" data-revelar>
          <button type="button" className="voz-flecha" onClick={() => mover(-1)} aria-label="Testimonio anterior">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10.5 2L4.5 8l6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button type="button" className="voz-flecha" onClick={() => mover(1)} aria-label="Testimonio siguiente">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5.5 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <span className="voz-contador">
            {String(indice + 1).padStart(2, '0')} / {String(VOCES.length).padStart(2, '0')}
          </span>
          {!reducido && (
            <button
              type="button"
              className="voz-pausa"
              onClick={() => setPausado((p) => !p)}
              aria-pressed={pausado}
            >
              {pausado ? 'Reproducir' : 'Pausar'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

const PREGUNTAS = [
  {
    q: '¿Hay contrato de permanencia?',
    a: 'No. Los planes son mes a mes y puedes salir con 30 días de aviso. Pedimos tres meses mínimos solo cuando hay producción de contenido o cambios técnicos en marcha, y queda por escrito desde el día uno.',
  },
  {
    q: '¿Cuánto cuesta el diagnóstico?',
    a: '$250.000 fijos, con informe escrito incluido. Si después partes un plan con nosotros, ese valor se descuenta íntegro del primer mes.',
  },
  {
    q: '¿Quién trabaja mi cuenta?',
    a: 'Un estratega senior con nombre, apellido y teléfono directo. La ejecución puede sumar especialistas, pero la persona que firma tu plan responde siempre. No hay pasantes ni equipos rotativos.',
  },
  {
    q: '¿Cada cuánto reportan?',
    a: 'Un reporte escrito el día hábil 5 de cada mes, más una reunión de 45 minutos esa misma semana. Los números vienen trazados contra los KPIs que acordamos por escrito al partir.',
  },
  {
    q: '¿Qué pasa si los números no mejoran?',
    a: 'Lo conversamos con los datos sobre la mesa. Si tras dos ciclos completos no hay avance en los KPIs acordados, te recomendamos cambiar el plan — o cerrarlo — aunque eso signifique menos facturación para nosotros.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Transferencia bancaria, tarjetas de débito y crédito, y factura electrónica ante SII. Los planes mensuales se cobran al inicio de cada ciclo; los proyectos, 50% al partir y 50% contra entrega.',
  },
];

function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section id="faq" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion" data-revelar>
          <div>
            <p className="kicker">Preguntas frecuentes</p>
            <h2 className="titulo-seccion">Las preguntas incómodas, respondidas.</h2>
          </div>
          <p className="cabecera-nota">
            Si tu duda no está aquí, escríbenos: la respuesta entra en el próximo boletín.
          </p>
        </div>

        <div className="faq-lista" data-revelar style={{ '--retraso': '80ms' } as CSSProperties}>
          {PREGUNTAS.map((p, i) => (
            <div key={p.q} className={`faq-item${abierta === i ? ' abierta' : ''}`}>
              <h3 style={{ margin: 0 }}>
                <button
                  type="button"
                  className="faq-pregunta"
                  aria-expanded={abierta === i}
                  aria-controls={`faq-respuesta-${i}`}
                  onClick={() => setAbierta(abierta === i ? null : i)}
                >
                  {p.q}
                  <span className="serv-mas" aria-hidden="true" />
                </button>
              </h3>
              <div id={`faq-respuesta-${i}`} className="faq-respuesta" role="region">
                <div className="faq-respuesta-inner">
                  <p>{p.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reserva({ alReservar }: { alReservar: RefObject<HTMLElement | null> }) {
  return (
    <section id="reserva" className="seccion reserva" ref={alReservar}>
      <div className="contenedor">
        <div className="reserva-grid">
          <div data-revelar>
            <p className="kicker">Reserva</p>
            <h2>Agenda tu diagnóstico de 90 minutos.</h2>
            <div className="reserva-ctas">
              <a className="boton" href="mailto:hola@criterio.cl?subject=Diagn%C3%B3stico%20CRITERIO">
                Agendar diagnóstico
              </a>
              <a className="link-subrayado" href="#precios">
                Ver precios primero
              </a>
            </div>
            <p className="micro-linea">Respondemos personalmente. Sin call centers.</p>
          </div>

          <div data-revelar style={{ '--retraso': '100ms' } as CSSProperties}>
            <div className="contacto-fila">
              <p className="contacto-rotulo">Teléfono</p>
              <a className="telefono-gigante num-tabular" href="tel:+56228401122">
                +56 2 2840 1122
              </a>
            </div>
            <div className="contacto-fila">
              <p className="contacto-rotulo">Correo</p>
              <p className="contacto-valor">
                <a href="mailto:hola@criterio.cl">hola@criterio.cl</a>
              </p>
            </div>
            <div className="contacto-fila">
              <p className="contacto-rotulo">Dirección</p>
              <p className="contacto-valor">Providencia, Santiago de Chile</p>
            </div>
            <div className="contacto-fila">
              <p className="contacto-rotulo">Horario</p>
              <p className="contacto-valor num-tabular">Lun–Vie 9:00–18:30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const anio = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="contenedor footer-inner">
        <p>
          <strong style={{ color: 'var(--tinta)' }}>CRITERIO SpA</strong> · RUT 77.654.210-9
        </p>
        <p>Facturación electrónica ante SII</p>
        <p>
          © {anio} CRITERIO · Propuesta de rediseño · Órbita
        </p>
      </div>
    </footer>
  );
}

function CtaMovil() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const reservaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.getElementById('inicio');
    reservaRef.current = document.getElementById('reserva');
    let pasadoHero = false;
    let enReserva = false;

    const evaluar = () => setVisible(pasadoHero && !enReserva);

    const ioHero = new IntersectionObserver(
      ([e]) => {
        pasadoHero = !e.isIntersecting && e.boundingClientRect.top < 0;
        evaluar();
      },
      { threshold: 0 },
    );
    const ioReserva = new IntersectionObserver(
      ([e]) => {
        enReserva = e.isIntersecting;
        evaluar();
      },
      { threshold: 0.15 },
    );

    if (heroRef.current) ioHero.observe(heroRef.current);
    if (reservaRef.current) ioReserva.observe(reservaRef.current);
    return () => {
      ioHero.disconnect();
      ioReserva.disconnect();
    };
  }, []);

  return (
    <div className={`cta-movil${visible ? ' visible' : ''}`}>
      <a className="boton" href="#reserva">
        Agendar diagnóstico
      </a>
    </div>
  );
}

export function App() {
  const reducido = useMovimientoReducido();

  useEffect(() => {
    const elementos = Array.from(document.querySelectorAll('[data-revelar]'));
    if (reducido) {
      elementos.forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    elementos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [reducido]);

  const refReserva = useRef<HTMLElement>(null);

  return (
    <>
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido">
        <section id="inicio" className="hero" aria-label="Presentación">
          <div className="contenedor">
            <p className="kicker" style={{ marginBottom: 'clamp(18px, 2vw, 28px)' }}>
              Agencia de marketing · Providencia
            </p>
            <h1>
              <span className="h1-linea">
                <span>Marketing con criterio,</span>
              </span>
              <span className="h1-linea">
                <span>
                  no con ruido<span className="h1-punto">.</span>
                </span>
              </span>
            </h1>

            <div className="hero-grid">
              <div className="hero-intro">
                <p className="hero-subhead" data-revelar>
                  Estrategia, contenido y pauta explicados en lenguaje plano. Reporte mensual con
                  los números que sí mueven tu negocio.
                </p>
                <div className="hero-ctas" data-revelar style={{ '--retraso': '90ms' } as CSSProperties}>
                  <a className="boton" href="#reserva">
                    Agendar diagnóstico
                  </a>
                  <a className="link-subrayado" href="#servicios">
                    Ver servicios
                  </a>
                </div>
                <p className="hero-meta" data-revelar style={{ '--retraso': '160ms' } as CSSProperties}>
                  <strong className="num-tabular">+56 2 2840 1122</strong> · Lun–Vie 9:00–18:30
                </p>
              </div>

              <figure className="hero-media" data-revelar style={{ '--retraso': '140ms', margin: 0 } as CSSProperties}>
                <img
                  src={media('recepcion.jpg')}
                  alt="Oficina de CRITERIO en Providencia: sala luminosa y despejada, con mesa de madera clara, sillas simples y pared blanca rota."
                  width={1600}
                  height={900}
                  fetchPriority="high"
                />
                <figcaption>Oficina CRITERIO · mesa norte · luz de 10:30</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="banda" role="note" aria-label="Compromisos de la agencia">
          <div className="contenedor">
            <ul>
              <li>Planes mensuales sin contratos trampa</li>
              <li>Reporte con números auditables</li>
              <li>KPIs firmados antes de partir</li>
            </ul>
          </div>
        </div>

        <Servicios />
        <Cifras />
        <Precios />
        <Metodo />
        <Voces />
        <Faq />
        <Reserva alReservar={refReserva} />
      </main>
      <Footer />
      <CtaMovil />
    </>
  );
}
