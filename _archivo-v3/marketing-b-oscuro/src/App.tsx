import { useEffect, useRef, useState } from 'react';

const media = (archivo: string) =>
  `${import.meta.env.BASE_URL}media/${archivo}`;

const FONO = '+56 2 2965 4821';
const FONO_LINK = 'tel:+56229654821';
const EMAIL = 'hola@brujula.cl';

type Servicio = {
  n: string;
  titulo: string;
  detalle: string;
  duracion: string;
  precio: string;
};

const SERVICIOS: Servicio[] = [
  {
    n: '01',
    titulo: 'Estrategia digital',
    detalle:
      'Objetivo, embudo, canales y KPIs definidos por escrito antes de mover un peso.',
    duracion: '4–6 semanas',
    precio: 'desde $680.000',
  },
  {
    n: '02',
    titulo: 'Pauta y paid media',
    detalle:
      'Google Ads, Meta Ads y LinkedIn Ads con presupuesto abierto y optimización semanal.',
    duracion: 'Gestión continua',
    precio: 'desde $350.000 / mes',
  },
  {
    n: '03',
    titulo: 'Contenido y producción',
    detalle:
      'Foto, video y copy pensados para vender, no para llenar el feed.',
    duracion: 'Ciclos de 2–4 semanas',
    precio: 'desde $420.000',
  },
  {
    n: '04',
    titulo: 'SEO técnico',
    detalle:
      'Arquitectura, velocidad y contenido que los buscadores entienden y premian.',
    duracion: '3–5 semanas',
    precio: 'desde $520.000',
  },
  {
    n: '05',
    titulo: 'Email y CRM',
    detalle:
      'Automatizaciones que nutren leads nuevos y recuperan clientes dormidos.',
    duracion: '2–3 semanas por flujo',
    precio: 'desde $310.000',
  },
  {
    n: '06',
    titulo: 'Analítica y dashboards',
    detalle:
      'Un solo tablero con las métricas que mueven el negocio, actualizado en vivo.',
    duracion: '1–2 semanas',
    precio: 'desde $280.000',
  },
];

const PRECIOS = [
  {
    servicio: 'Diagnóstico inicial',
    incluye: 'Auditoría de cuentas activas e informe escrito con objetivos y KPIs',
    valor: '$180.000',
    unidad: '',
  },
  {
    servicio: 'Plan mensual integral',
    incluye: 'Estrategia, contenido y reportabilidad mensual en un solo equipo',
    valor: '$890.000',
    unidad: '/ mes',
  },
  {
    servicio: 'Gestión de pauta',
    incluye: 'Google Ads, Meta Ads y LinkedIn Ads; el presupuesto va directo a las plataformas',
    valor: '$350.000',
    unidad: '/ mes',
  },
  {
    servicio: 'Producción de contenido',
    incluye: 'Fotografía, video y copy por ciclo editorial',
    valor: '$420.000',
    unidad: '',
  },
  {
    servicio: 'Auditoría SEO técnico',
    incluye: 'Sitio completo, rendimiento web y plan de acción priorizado',
    valor: '$260.000',
    unidad: '',
  },
];

const METODO = [
  {
    n: '01',
    titulo: 'Diagnóstico',
    texto:
      'Auditamos cuentas, canales y datos actuales. Sin humo: una radiografía honesta de dónde estás parado hoy.',
  },
  {
    n: '02',
    titulo: 'Plan y KPIs por escrito',
    texto:
      'Objetivos, presupuesto y métricas aprobados antes de ejecutar. Todos saben qué se espera y cuándo.',
  },
  {
    n: '03',
    titulo: 'Ejecución y reporte mensual',
    texto:
      'Campañas al aire y un informe claro cada mes: qué funcionó, qué no y qué viene después.',
  },
];

const FAQS = [
  {
    q: '¿Trabajan con contratos a plazo fijo?',
    a: 'Partimos con un compromiso mínimo de 3 meses: es el tiempo honesto para implementar y medir con seriedad. Después de ese ciclo, la relación continúa mes a mes. Nadie queda atrapado en un contrato eterno ni multas de salida escondidas en la letra chica.',
  },
  {
    q: '¿Cuánto cuesta el diagnóstico?',
    a: 'Desde $180.000. Incluye auditoría de tus cuentas activas, análisis de competencia y un informe escrito con objetivos y KPIs propuestos. Si contratas el plan mensual, el diagnóstico se descuenta íntegro del primer mes.',
  },
  {
    q: '¿Quién ejecuta las campañas?',
    a: 'El mismo equipo senior que hace el diagnóstico. Sin subcontratación, sin pasantes aprendiendo con tu presupuesto y sin capas de intermediación: un responsable con nombre, correo y teléfono directo desde el día uno.',
  },
  {
    q: '¿Reportan con qué frecuencia?',
    a: 'Un reporte escrito cada mes, con gasto, resultados y desviaciones explicadas en lenguaje plano. Además, un dashboard en línea disponible siempre y una reunión mensual de 45 minutos para decidir el ciclo siguiente.',
  },
  {
    q: '¿Qué pasa si los números no mejoran?',
    a: 'Te lo decimos nosotros antes que tú. Cada desviación llega con análisis de causa y plan de corrección sin costo adicional. Y si tras dos ciclos la tendencia no cambia, te recomendaremos pausar la inversión: preferimos perder una cuenta que quemar tu presupuesto.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Transferencia bancaria y tarjetas de crédito o débito, con factura o boleta electrónica. El presupuesto de medios se paga directo a las plataformas con tus propios medios: nunca pasa por nuestras manos.',
  },
];

function Contador({
  valor,
  prefijo = '',
  sufijo = '',
}: {
  valor: number;
  prefijo?: string;
  sufijo?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [texto, setTexto] = useState(`${prefijo}0${sufijo}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const formato = new Intl.NumberFormat('es-CL');
    const escribir = (v: number) => setTexto(`${prefijo}${formato.format(v)}${sufijo}`);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      escribir(valor);
      return;
    }
    let animacion = 0;
    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const inicio = performance.now();
        const paso = (ahora: number) => {
          const t = Math.min(1, (ahora - inicio) / 1200);
          const suavizado = 1 - Math.pow(1 - t, 3);
          escribir(Math.round(valor * suavizado));
          if (t < 1) animacion = requestAnimationFrame(paso);
        };
        animacion = requestAnimationFrame(paso);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(animacion);
    };
  }, [valor, prefijo, sufijo]);

  return (
    <span className="cifra-num" ref={ref}>
      {texto}
    </span>
  );
}

export function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const progresoRef = useRef<HTMLDivElement | null>(null);
  const [navOculta, setNavOculta] = useState(false);
  const [navCompacta, setNavCompacta] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [servicioAbierto, setServicioAbierto] = useState<number | null>(null);
  const [faqAbierta, setFaqAbierta] = useState<number | null>(0);

  useEffect(() => {
    const id = window.setTimeout(() => {
      heroRef.current?.classList.add('presentacion');
    }, 90);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const elementos = Array.from(document.querySelectorAll('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elementos.forEach((el) => el.classList.add('en-vista'));
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('en-vista');
            io.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -48px 0px' }
    );
    elementos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let ultimaY = window.scrollY;
    const alScroll = () => {
      const y = window.scrollY;
      setNavCompacta(y > 24);
      if (y > ultimaY + 8 && y > 180) setNavOculta(true);
      else if (y < ultimaY - 8 || y <= 180) setNavOculta(false);
      ultimaY = y;
    };
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  useEffect(() => {
    const actualizar = () => {
      const doc = document.documentElement;
      const maximo = doc.scrollHeight - window.innerHeight;
      const p = maximo > 0 ? Math.min(1, window.scrollY / maximo) : 0;
      if (progresoRef.current) progresoRef.current.style.transform = `scaleX(${p})`;
    };
    actualizar();
    window.addEventListener('scroll', actualizar, { passive: true });
    window.addEventListener('resize', actualizar);
    return () => {
      window.removeEventListener('scroll', actualizar);
      window.removeEventListener('resize', actualizar);
    };
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entrada]) => setCtaVisible(!entrada.isIntersecting),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const punteroFino = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!punteroFino || movimientoReducido) return;
    document.documentElement.classList.add('cursor-activo');
    const punto = document.createElement('div');
    punto.className = 'cursor-punto';
    document.body.appendChild(punto);
    let destinoX = -100;
    let destinoY = -100;
    let x = -100;
    let y = -100;
    let grande = false;
    let raf = 0;
    const alMover = (e: MouseEvent) => {
      destinoX = e.clientX;
      destinoY = e.clientY;
    };
    const alPasar = (e: MouseEvent) => {
      const objetivo = e.target as HTMLElement | null;
      grande = Boolean(objetivo?.closest('a, button'));
    };
    const animar = () => {
      x += (destinoX - x) * 0.16;
      y += (destinoY - y) * 0.16;
      punto.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${
        grande ? 3 : 1
      })`;
      raf = requestAnimationFrame(animar);
    };
    window.addEventListener('mousemove', alMover, { passive: true });
    window.addEventListener('mouseover', alPasar, { passive: true });
    raf = requestAnimationFrame(animar);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', alMover);
      window.removeEventListener('mouseover', alPasar);
      punto.remove();
      document.documentElement.classList.remove('cursor-activo');
    };
  }, []);

  return (
    <>
      <div className="progreso" ref={progresoRef} aria-hidden="true" />

      <header
        className={`navegacion${navOculta ? ' oculta' : ''}${navCompacta ? ' compacta' : ''}`}
      >
        <div className="nav-inner contenedor">
          <a className="nav-marca" href="#inicio">
            BRÚJULA<span>Agencia de Marketing</span>
          </a>
          <nav className="nav-links" aria-label="Secciones de la propuesta">
            <a href="#filosofia">Filosofía</a>
            <a href="#servicios">Servicios</a>
            <a href="#precios">Precios</a>
            <a href="#metodo">Método</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-acciones">
            <a className="nav-fono" href={FONO_LINK}>
              {FONO}
            </a>
            <a className="btn-ambar btn-nav" href="#reserva">
              Agendar
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero" ref={heroRef}>
          <div className="hero-inner contenedor">
            <div className="hero-texto">
              <p className="kicker hero-kicker">Agencia de Marketing · Providencia</p>
              <h1 className="hero-h1">
                <span className="linea">
                  <span className="linea-int">Menos ruido,</span>
                </span>
                <span className="linea">
                  <span className="linea-int">más clientes.</span>
                </span>
              </h1>
              <p className="hero-sub">
                Estrategia, contenido y pauta con reportabilidad mensual real.
                Presupuesto de medios transparente desde el primer día.
              </p>
              <div className="hero-acciones">
                <a className="btn-ambar" href="#reserva">
                  Agendar diagnóstico
                </a>
                <a className="link-linea" href="#servicios">
                  Ver servicios
                </a>
              </div>
              <p className="hero-contacto">
                <a href={FONO_LINK}>{FONO}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <span>Providencia, Santiago</span>
              </p>
            </div>
            <figure className="hero-media">
              <img
                src={media('hero.jpg')}
                alt="Sala de reuniones vacía al crepúsculo: mesa larga oscura bajo una luz cálida rasante"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section id="filosofia" className="seccion">
          <div className="contenedor filosofia-grid">
            <div className="filosofia-titulo">
              <p className="kicker">Filosofía</p>
              <h2 className="titulo-seccion">Estrategia que se puede auditar.</h2>
            </div>
            <div className="filosofia-cuerpo" data-reveal>
              <p className="lead">
                Cada campaña tiene objetivo, presupuesto y métrica declarados por
                escrito. Si el número no mejora, te lo decimos nosotros antes que tú.
              </p>
              <p className="texto-gris">
                Trabajamos con pocas cuentas a la vez, con criterio antes que
                volumen. No vendemos impresiones: construimos canales que el
                negocio puede revisar, cuestionar y corregir cada mes.
              </p>
              <p className="filosofia-nota">
                No publicamos testimonios ni capturas de resultados ajenos. La
                discreción es parte del servicio: nuestros clientes hablan de
                nosotros en privado, no en landing pages.
              </p>
            </div>
            <figure className="filosofia-imagen" data-reveal>
              <div className="marco-ventana">
                <img
                  src={media('oficina.jpg')}
                  alt="Pasillo de oficina nocturno y simétrico, iluminado por focos cálidos empotrados"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
        </section>

        <section id="cifras" className="seccion cifras">
          <div className="contenedor">
            <div className="cabecera-seccion" data-reveal>
              <p className="kicker">Cifras</p>
              <h2 className="titulo-seccion">La evidencia, no la promesa.</h2>
            </div>
            <div className="cifras-grid">
              <div className="cifra" data-reveal style={{ transitionDelay: '0ms' }}>
                <Contador valor={11} prefijo="+" />
                <p className="cifra-label">Años operando</p>
              </div>
              <div className="cifra" data-reveal style={{ transitionDelay: '80ms' }}>
                <Contador valor={140} prefijo="+" />
                <p className="cifra-label">Cuentas atendidas</p>
              </div>
              <div className="cifra" data-reveal style={{ transitionDelay: '160ms' }}>
                <Contador valor={92} sufijo="%" />
                <p className="cifra-label">Retención anual de clientes</p>
              </div>
              <div className="cifra" data-reveal style={{ transitionDelay: '240ms' }}>
                <Contador valor={3} />
                <p className="cifra-label">Industrias dominadas</p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="seccion">
          <div className="contenedor">
            <div className="cabecera-seccion" data-reveal>
              <p className="kicker">Servicios</p>
              <h2 className="titulo-seccion">
                Seis disciplinas, un solo responsable.
              </h2>
            </div>
            <ul className="lista-servicios">
              {SERVICIOS.map((servicio, i) => (
                <li
                  key={servicio.n}
                  className={`servicio${servicioAbierto === i ? ' abierta' : ''}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 55}ms` }}
                >
                  <div className="servicio-flip">
                    <button
                      type="button"
                      className="servicio-frente"
                      aria-expanded={servicioAbierto === i}
                      onClick={() =>
                        setServicioAbierto(servicioAbierto === i ? null : i)
                      }
                    >
                      <span className="servicio-num">{servicio.n}</span>
                      <span className="servicio-titulo">{servicio.titulo}</span>
                      <span className="servicio-hint" aria-hidden="true">
                        +
                      </span>
                    </button>
                    <div className="servicio-dorso">
                      <p className="servicio-detalle">{servicio.detalle}</p>
                      <span className="servicio-duracion">{servicio.duracion}</span>
                      <span className="servicio-precio">{servicio.precio}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="precios" className="seccion">
          <div className="contenedor">
            <div className="cabecera-seccion" data-reveal>
              <p className="kicker">Inversión</p>
              <h2 className="titulo-seccion">Precios claros, sin sorpresas.</h2>
            </div>
            <table className="precios-tabla" data-reveal>
              <thead>
                <tr>
                  <th scope="col">Servicio</th>
                  <th scope="col">Incluye</th>
                  <th scope="col" style={{ textAlign: 'right' }}>
                    Desde
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS.map((fila) => (
                  <tr key={fila.servicio}>
                    <td className="precio-servicio">{fila.servicio}</td>
                    <td className="precio-incluye">{fila.incluye}</td>
                    <td className="precio-valor">
                      {fila.valor}
                      {fila.unidad ? <small>{fila.unidad.replace('/', 'por')}</small> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="nota-precio" data-reveal>
              El valor final se confirma tras el diagnóstico. Nunca partimos sin
              objetivos escritos y aprobados.
            </p>
          </div>
        </section>

        <section id="metodo" className="seccion">
          <div className="contenedor">
            <div className="cabecera-seccion" data-reveal>
              <p className="kicker">Método</p>
              <h2 className="titulo-seccion">Tres pasos, cero improvisación.</h2>
            </div>
            <ol className="metodo-grid">
              {METODO.map((paso) => (
                <li className="metodo-paso" key={paso.n} data-reveal>
                  <span className="metodo-num" aria-hidden="true">
                    {paso.n}
                  </span>
                  <h3 className="metodo-titulo">{paso.titulo}</h3>
                  <p className="metodo-texto">{paso.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="galeria" className="seccion">
          <div className="contenedor">
            <div className="cabecera-seccion" data-reveal>
              <p className="kicker">Piezas</p>
              <h2 className="titulo-seccion">El detalle como estándar.</h2>
            </div>
            <div className="galeria-grid">
              <figure className="marco cortina galeria-a" data-reveal>
                <div className="marco-ventana">
                  <img
                    src={media('tablero.jpg')}
                    alt="Bodegón en claroscuro con cuaderno, regla y compás antiguo sobre piedra oscura"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  Obra 01 — Claroscuro: cuaderno, regla y compás sobre piedra. Luz rasante cálida.
                </figcaption>
              </figure>
              <figure className="marco cortina kb galeria-b" data-reveal>
                <div className="marco-ventana">
                  <img
                    src={media('texture.jpg')}
                    alt="Macro de papel negro texturado con luz rasante cálida"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  Obra 02 — Macro de papel negro. Grano fino bajo luz cálida.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="faq" className="seccion">
          <div className="contenedor">
            <div className="cabecera-seccion" data-reveal>
              <p className="kicker">Preguntas</p>
              <h2 className="titulo-seccion">Lo que preguntan antes de firmar.</h2>
            </div>
            <div className="faq-lista" data-reveal>
              {FAQS.map((item, i) => (
                <div
                  key={item.q}
                  className={`faq-item${faqAbierta === i ? ' abierta' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-pregunta"
                    aria-expanded={faqAbierta === i}
                    onClick={() => setFaqAbierta(faqAbierta === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-signo" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="faq-respuesta">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reserva" className="seccion reserva">
          <div className="contenedor" data-reveal>
            <p className="kicker">Reserva</p>
            <h2 className="reserva-titulo">Hablemos de tus números.</h2>
            <a className="reserva-fono" href={FONO_LINK}>
              {FONO}
            </a>
            <div className="reserva-accion">
              <a className="btn-ambar" href={`mailto:${EMAIL}?subject=Diagnóstico BRÚJULA`}>
                Agendar diagnóstico
              </a>
            </div>
            <dl className="reserva-datos">
              <div className="reserva-dato">
                <dt>Horario</dt>
                <dd>Lun–Vie · 09:00–18:30</dd>
              </div>
              <div className="reserva-dato">
                <dt>Dirección</dt>
                <dd>Providencia, Santiago</dd>
              </div>
              <div className="reserva-dato">
                <dt>Correo</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
            </dl>
            <p className="reserva-micro">
              Respondemos personalmente. Sin call centers.
            </p>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor pie-inner">
          <p className="pie-marca">BRÚJULA — Agencia de Marketing</p>
          <p className="pie-legal">
            Providencia, Santiago · Chile · © 2026 · Propuesta preparada por Órbita
          </p>
        </div>
      </footer>

      <div className={`cta-movil${ctaVisible ? ' visible' : ''}`} inert={!ctaVisible}>
        <a className="btn-ambar" href="#reserva">
          Agendar diagnóstico
        </a>
      </div>
    </>
  );
}
