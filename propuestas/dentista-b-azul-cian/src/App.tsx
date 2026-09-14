import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode, RefObject } from 'react';
import { Figura, MapaLinea } from './media';
import {
  hayHover,
  useCountUp,
  useInView,
  useNavScroll,
  useReducedMotion,
  useSeccionActiva,
} from './hooks';

const TELEFONO = '+56 9 8765 4321';
const TELEFONO_ENLACE = 'tel:+56987654321';
const TEXTO_URGENCIA = '¿Urgencia dental? Llámanos';
const CORREO = 'contacto@azura.cl';
const CORREO_RESERVA = `mailto:${CORREO}?subject=Reservar%20hora%20%E2%80%94%20AZURA%20Centro%20Dental`;
const HORARIO = 'Lun–Vie 9:00–20:00 · Sáb 9:30–14:00';
const DIRECCION = 'Camilo Henríquez 3829, Puente Alto, Santiago';
const media = (nombre: string) => `${import.meta.env.BASE_URL}media/${nombre}`;

const LINEAS_H1 = ['Tu hora a la', 'hora, tu tratamiento', 'por escrito.'];

const SECCIONES_NAV = [
  { id: 'especialidades', texto: 'Especialidades' },
  { id: 'valores', texto: 'Valores' },
  { id: 'metodo', texto: 'Método' },
  { id: 'faq', texto: 'Preguntas' },
];
const IDS_SPY = ['inicio', ...SECCIONES_NAV.map((s) => s.id), 'cifras', 'voces', 'reserva'];

const ESPECIALIDADES = [
  {
    titulo: 'Diagnóstico digital',
    duracion: '45 min',
    desde: 'desde $35.000',
    detalle:
      'Examen completo con radiografía panorámica digital e intraoral. Sales de la primera hora sabiendo exactamente qué tienes y qué conviene tratar primero.',
  },
  {
    titulo: 'Rehabilitación y estética',
    duracion: 'según plan',
    desde: 'desde $180.000',
    detalle:
      'Resinas, coronas y carillas coordinadas entre el dentista restaurador y el laboratorio. El plan completo se cotiza por escrito antes de partir.',
  },
  {
    titulo: 'Endodoncia',
    duracion: '90 min',
    desde: 'desde $320.000',
    detalle:
      'Tratamiento de conducto con control radiográfico en cada etapa y anestesia eficaz. La mayoría de los casos se resuelve en una sola sesión.',
  },
  {
    titulo: 'Odontopediatría',
    duracion: '40 min',
    desde: 'desde $30.000',
    detalle:
      'Atención de niños y niñas sin apuro: la primera visita es para conocer el box, al equipo y perder el miedo antes de sentarse en el sillón.',
  },
  {
    titulo: 'Periodoncia',
    duracion: '60 min',
    desde: 'desde $60.000',
    detalle:
      'Tratamiento de encías con raspado ultrasónico y control periódico. Incluye instrucción de cepillado adaptada a tu caso, no un folleto genérico.',
  },
  {
    titulo: 'Ortodoncia y alineadores',
    duracion: 'evaluación 45 min',
    desde: 'desde $1.600.000',
    detalle:
      'Brackets o alineadores con plan de movimiento digital y valor total pactado desde el día uno, en cuotas sin interés.',
  },
];

const CIFRAS = [
  { destino: 13, prefijo: '+', etiqueta: 'años en la comuna' },
  { destino: 11000, prefijo: '+', etiqueta: 'atenciones realizadas', miles: true },
  { destino: 95, sufijo: '%', etiqueta: 'de horas puntuales' },
  { destino: 5, etiqueta: 'especialistas titulados' },
] as const;

const VALORES = [
  { nombre: 'Evaluación + radiografía panorámica', detalle: 'Diagnóstico completo explicado en la misma hora', desde: '$35.000' },
  { nombre: 'Limpieza completa', detalle: 'Destaraje ultrasónico y pulido con profilaxis', desde: '$45.000' },
  { nombre: 'Resina', detalle: 'Por pieza, color a tono, en una sesión', desde: '$55.000' },
  { nombre: 'Endodoncia', detalle: 'Un conducto, con controles radiográficos incluidos', desde: '$320.000' },
  { nombre: 'Extracción', detalle: 'Simple, con anestesia e indicaciones por escrito', desde: '$80.000' },
  { nombre: 'Blanqueamiento', detalle: 'En clínica, dos sesiones de 30 minutos', desde: '$250.000' },
];

const PASOS = [
  {
    numero: '01',
    titulo: 'Hora y evaluación',
    detalle:
      'Reservas hora por teléfono o correo y llegas a hora garantizada: examen completo y radiografía panorámica en la misma visita. Sin listas de espera ni sobreturnos.',
  },
  {
    numero: '02',
    titulo: 'Presupuesto por escrito',
    detalle:
      'Después del diagnóstico recibes el presupuesto impreso o por correo, con etapas, plazos y valores. Nada arranca sin tu aprobación firmada.',
  },
  {
    numero: '03',
    titulo: 'Tratamiento coordinado entre especialistas',
    detalle:
      'Si tu caso necesita más de una especialidad, los profesionales coordinan entre sí: tú haces una sola visita, con un solo presupuesto y un solo responsable de tu ficha.',
  },
];

const VOCES = [
  {
    cita:
      'Me atendieron las cuatro piezas el mismo día que pregunté, con el presupuesto por escrito antes de empezar. En mi trabajo anterior esperaba tres semanas por una hora.',
    autor: '— Patricia, paciente desde 2021 · Puente Alto',
  },
  {
    cita:
      'Mi hija tenía pánico al dentista. En la primera cita solo le mostraron el box y le contaron lo que iban a hacer. Hoy entra sola y sonriendo.',
    autor: '— Rodrigo, paciente desde 2020 · Puente Alto',
  },
  {
    cita:
      'Tenía convenio con la isapre y no sabía cómo usarlo. Acá me explicaron qué cubría y qué pagaba de mi bolsillo, todo antes de partir el tratamiento.',
    autor: '— Cecilia, paciente desde 2023 · San José de Maipo',
  },
];

const PREGUNTAS = [
  {
    q: '¿Atienden urgencias el mismo día?',
    a: `Sí. Todos los días hábiles reservamos cupos de urgencia dentro del horario de atención. Si tienes dolor ahora, llama al ${TELEFONO} y te damos la primera hora disponible, normalmente dentro del mismo día.`,
  },
  {
    q: '¿Cuánto cuesta la primera evaluación?',
    a: 'Desde $35.000 e incluye examen completo, radiografía panorámica digital y el diagnóstico explicado en la misma hora. Ese valor se descuenta del tratamiento si lo inicias dentro de los siguientes 30 días.',
  },
  {
    q: '¿Trabajan con isapres?',
    a: 'Sí, tenemos convenios con isapres y emitimos boleta para reembolso en todas las atenciones. En la primera hora te decimos exactamente qué cubre tu plan y qué pagarías de tu bolsillo, antes de partir nada.',
  },
  {
    q: '¿Los niños son atendidos igual?',
    a: 'Los niños tienen su propia especialidad: odontopediatría. La primera visita es de familiarización, sin procedimientos invasivos, y los tratamientos se explican a ellos y a sus madres o padres antes de cada etapa.',
  },
  {
    q: '¿Cuántas visitas necesita mi tratamiento?',
    a: 'Depende del diagnóstico, pero el presupuesto por escrito indica cuántas visitas incluye cada etapa. No agregamos visitas nuevas sin avisarte y recotizar antes de continuar.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Débito, crédito, transferencia y pago en cuotas sin interés para tratamientos sobre $150.000. El plan de cuotas queda por escrito junto con el presupuesto, sin letra chica.',
  },
];

function Revelar({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.16);
  const reducido = useReducedMotion();
  const mostrado = visible || reducido;
  return (
    <div
      ref={ref}
      className={`reveal${mostrado ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={reducido ? undefined : ({ transitionDelay: `${delay}ms` } as CSSProperties)}
    >
      {children}
    </div>
  );
}

function BarraProgreso() {
  const barra = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      if (barra.current) barra.current.style.transform = `scaleX(${p})`;
    };
    const alDesplazar = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };
    window.addEventListener('scroll', alDesplazar, { passive: true });
    window.addEventListener('resize', alDesplazar);
    medir();
    return () => {
      window.removeEventListener('scroll', alDesplazar);
      window.removeEventListener('resize', alDesplazar);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="progreso" aria-hidden="true">
      <div className="progreso-barra" ref={barra} />
    </div>
  );
}

function EncabezadoSeccion({ kicker, titulo, intro }: { kicker: string; titulo: string; intro?: string }) {
  return (
    <header className="seccion-encabezado">
      <Revelar>
        <p className="kicker">{kicker}</p>
        <h2 className="seccion-titulo">{titulo}</h2>
        {intro ? <p className="seccion-intro">{intro}</p> : null}
      </Revelar>
    </header>
  );
}

function Navegacion() {
  const { oculto, compacto } = useNavScroll();
  const activa = useSeccionActiva(IDS_SPY);
  const clases = ['nav', oculto ? 'nav--oculto' : '', compacto ? 'nav--compacto' : ''].filter(Boolean).join(' ');
  return (
    <nav className={clases} aria-label="Principal">
      <div className="contenedor nav-fila">
        <a className="logo" href="#inicio" aria-label="AZURA — Centro Dental, ir al inicio">
          <span className="logo-marca" aria-hidden="true" />
          AZURA
        </a>
        <ul className="nav-enlaces">
          {SECCIONES_NAV.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={activa === s.id ? 'nav-enlace nav-enlace--activa' : 'nav-enlace'}
                aria-current={activa === s.id ? 'true' : undefined}
              >
                {s.texto}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-derecha">
          <div className="nav-urgencia">
            <a className="nav-telefono" href={TELEFONO_ENLACE}>
              {TELEFONO}
            </a>
            <span className="nav-urgencia-linea">{TEXTO_URGENCIA}</span>
          </div>
          <a className="btn-solido btn-solido--chico" href="#reserva">
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ referenciaHero }: { referenciaHero: RefObject<HTMLElement | null> }) {
  return (
    <section id="inicio" className="hero" ref={referenciaHero}>
      <div className="contenedor hero-grid">
        <div className="hero-copy">
          <p className="kicker">Centro Dental · Puente Alto</p>
          <h1 className="hero-titulo">
            {LINEAS_H1.map((linea, i) => (
              <span className="hero-linea" key={linea}>
                <span className="hero-linea-inner" style={{ '--i': i } as CSSProperties}>
                  {linea}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-sub">
            Centro dental con especialidades coordinadas: una sola visita, un solo presupuesto. Convenios con isapres
            y pago en cuotas sin interés.
          </p>
          <div className="hero-acciones">
            <a className="btn-solido" href="#reserva">
              Reservar hora
            </a>
            <a className="link-sub" href="#valores">
              Ver valores
            </a>
          </div>
        </div>
        <div className="hero-media">
          <Figura
            src={media("recepcion.jpg")}
            alt="Recepción luminosa y vacía, con mostrador blanco, pared azul pálido y luz natural entrando por ventanas amplias."
            proporcion="16 / 9"
            prioridad
            caption="Recepción un martes a las 10:40, entre hora y hora. Mostrador blanco, pared azul pálido y nadie esperando de pie."
            className="figura--hero"
          />
        </div>
      </div>
      <div className="hero-banda">
        <div className="contenedor hero-banda-fila">
          <span>Especialidades coordinadas en un solo lugar</span>
          <span className="hero-banda-sep" aria-hidden="true">
            ·
          </span>
          <span>Urgencias dentales durante horario</span>
        </div>
      </div>
    </section>
  );
}

function ItemEspecialidad({
  titulo,
  detalle,
  duracion,
  desde,
  indice,
}: {
  titulo: string;
  detalle: string;
  duracion: string;
  desde: string;
  indice: number;
}) {
  const [fijado, setFijado] = useState(indice === 0);
  const [sobrevuelo, setSobrevuelo] = useState(false);
  const abierto = fijado || sobrevuelo;
  return (
    <li className={`especialidad${abierto ? ' especialidad--abierta' : ''}`}>
      <button
        type="button"
        className="especialidad-cabecera"
        id={`especialidad-cabecera-${indice}`}
        aria-expanded={abierto}
        aria-controls={`especialidad-panel-${indice}`}
        onClick={() => setFijado((v) => !v)}
        onMouseEnter={() => {
          if (hayHover()) setSobrevuelo(true);
        }}
        onMouseLeave={() => setSobrevuelo(false)}
        onFocus={() => setFijado(true)}
      >
        <span className="especialidad-numero">{String(indice + 1).padStart(2, '0')}</span>
        <span className="especialidad-titulo">{titulo}</span>
        <span className="especialidad-signo" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="especialidad-panel"
        id={`especialidad-panel-${indice}`}
        role="region"
        aria-labelledby={`especialidad-cabecera-${indice}`}
      >
        <div className="especialidad-panel-inner">
          <p className="especialidad-detalle">{detalle}</p>
          <p className="especialidad-datos">
            <span>{duracion}</span>
            <span className="especialidad-desde">{desde}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

function Especialidades() {
  return (
    <section id="especialidades" className="seccion">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Especialidades"
          titulo="Seis especialidades bajo un mismo presupuesto."
          intro="Lo que tratamos todos los días, con su duración típica y su valor de partida. Pasa el cursor o toca cada línea para ver el detalle."
        />
        <ul className="especialidades-lista">
          {ESPECIALIDADES.map((e, i) => (
            <ItemEspecialidad
              key={e.titulo}
              titulo={e.titulo}
              detalle={e.detalle}
              duracion={e.duracion}
              desde={e.desde}
              indice={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Dato({ dato, activo }: { dato: (typeof CIFRAS)[number]; activo: boolean }) {
  const bruto = useCountUp(dato.destino, activo);
  const valor = 'miles' in dato && dato.miles ? bruto.toLocaleString('es-CL') : String(bruto);
  return (
    <div className="cifra">
      <span className="cifra-numero">
        {'prefijo' in dato ? dato.prefijo : ''}
        {valor}
        {'sufijo' in dato ? dato.sufijo : ''}
      </span>
      <span className="cifra-etiqueta">{dato.etiqueta}</span>
    </div>
  );
}

function Cifras() {
  const { ref, visible } = useInView<HTMLDivElement>(0.35);
  return (
    <section id="cifras" className="cifras" aria-label="Cifras de AZURA — Centro Dental">
      <div className="contenedor cifras-fila" ref={ref}>
        {CIFRAS.map((c) => (
          <Dato key={c.etiqueta} dato={c} activo={visible} />
        ))}
      </div>
    </section>
  );
}

function ValorFila({ fila, indice }: { fila: (typeof VALORES)[number]; indice: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.16);
  const reducido = useReducedMotion();
  const mostrado = visible || reducido;
  return (
    <div
      ref={ref}
      role="row"
      className={mostrado ? 'valor-fila reveal reveal--visible' : 'valor-fila reveal'}
      style={reducido ? undefined : ({ transitionDelay: `${indice * 60}ms` } as CSSProperties)}
    >
      <div role="cell" className="valor-nombre">
        <h3>{fila.nombre}</h3>
        <span className="valor-detalle">{fila.detalle}</span>
      </div>
      <div role="cell" className="valor-precio">
        <span className="valor-desde">desde</span>
        <span className="valor-monto">{fila.desde}</span>
      </div>
    </div>
  );
}

function Valores() {
  return (
    <section id="valores" className="seccion seccion--alterna">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Valores"
          titulo="Valores claros, presupuesto en el día."
          intro="Partimos siempre de un valor desde. El final se confirma después del diagnóstico, nunca en la silla con la boca abierta."
        />
        <div className="valores-grid">
          <div className="tabla-valores" role="table" aria-label="Valores desde por tratamiento">
            {VALORES.map((v, i) => (
              <ValorFila key={v.nombre} fila={v} indice={i} />
            ))}
            <Revelar>
              <p className="precios-nota">
                El presupuesto se entrega por escrito después del diagnóstico. Nunca partimos un tratamiento sin tu
                aprobación.
              </p>
              <p className="precios-micro">
                Valores en pesos chilenos, vigentes para 2026. Boleta o factura, según prefieras.
              </p>
            </Revelar>
          </div>
          <aside className="valores-lateral">
            <Revelar delay={120}>
              <Figura
                src={media("instrumental.jpg")}
                alt="Bodegón de instrumental dental esterilizado en pouches azules, alineado sobre una bandeja blanca."
                proporcion="4 / 5"
                caption="Instrumental esterilizado en pouches sellados, ordenado antes de cada hora. Lo que toca tu boca sale de un envoltorio cerrado frente a ti."
              />
            </Revelar>
          </aside>
        </div>
      </div>
    </section>
  );
}

function PasoItem({ paso, indice }: { paso: (typeof PASOS)[number]; indice: number }) {
  const { ref, visible } = useInView<HTMLLIElement>(0.16);
  const reducido = useReducedMotion();
  const mostrado = visible || reducido;
  return (
    <li
      ref={ref}
      className={mostrado ? 'paso reveal reveal--visible' : 'paso reveal'}
      style={reducido ? undefined : ({ transitionDelay: `${indice * 90}ms` } as CSSProperties)}
    >
      <span className="paso-numero" aria-hidden="true">
        {paso.numero}
      </span>
      <h3 className="paso-titulo">{paso.titulo}</h3>
      <p className="paso-detalle">{paso.detalle}</p>
    </li>
  );
}

function Metodo() {
  return (
    <section id="metodo" className="seccion">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Método"
          titulo="Primero entender, después tratar."
          intro="Tres pasos, siempre iguales, con un solo responsable de tu ficha de principio a fin."
        />
        <ol className="pasos">
          {PASOS.map((paso, i) => (
            <PasoItem key={paso.numero} paso={paso} indice={i} />
          ))}
        </ol>
        <Revelar delay={120}>
          <Figura
            src={media("box.jpg")}
            alt="Box dental con sillón vacío, luz natural y monitor de radiografía apagado sobre el mesón."
            proporcion="16 / 9"
            caption="Box 2 un martes a las 10:40, entre hora y hora. Sillón desinfectado, monitor apagado y la siguiente hora citada a punto."
          />
        </Revelar>
      </div>
    </section>
  );
}

function Voces() {
  const reducido = useReducedMotion();
  const [indice, setIndice] = useState(0);
  const [pausa, setPausa] = useState(false);
  useEffect(() => {
    if (reducido || pausa) return;
    const temporizador = window.setInterval(() => {
      setIndice((i) => (i + 1) % VOCES.length);
    }, 8000);
    return () => window.clearInterval(temporizador);
  }, [reducido, pausa]);
  return (
    <section id="voces" className="seccion seccion--alterna" aria-label="Testimonios de pacientes">
      <div className="contenedor voces-contenedor">
        <EncabezadoSeccion kicker="Voces" titulo="Lo que cuentan los pacientes." />
        <div
          className="voces-carrusel"
          onMouseEnter={() => setPausa(true)}
          onMouseLeave={() => setPausa(false)}
          onFocusCapture={() => setPausa(true)}
          onBlurCapture={() => setPausa(false)}
        >
          <div className="voces-pila">
            {VOCES.map((v, i) => (
              <blockquote key={v.autor} className={i === indice ? 'voz voz--activa' : 'voz'} aria-hidden={i !== indice}>
                <p className="voz-cita">“{v.cita}”</p>
                <footer className="voz-autor">{v.autor}</footer>
              </blockquote>
            ))}
          </div>
          <div className="voces-controles" role="group" aria-label="Elegir testimonio">
            {VOCES.map((v, i) => (
              <button
                key={v.autor}
                type="button"
                className={i === indice ? 'voz-punto voz-punto--activa' : 'voz-punto'}
                aria-label={`Mostrar testimonio ${i + 1} de ${VOCES.length}`}
                aria-pressed={i === indice}
                onClick={() => setIndice(i)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [abierta, setAbierta] = useState<number | null>(null);
  return (
    <section id="faq" className="seccion">
      <div className="contenedor faq-grid">
        <div className="faq-columna">
          <EncabezadoSeccion
            kicker="Preguntas frecuentes"
            titulo="Las seis que siempre nos hacen."
            intro="Respondidas como te las contestaría tu dentista en la hora: sin vueltas."
          />
          <ul className="faq-lista">
            {PREGUNTAS.map((item, i) => {
              const abiertaActual = abierta === i;
              return (
                <li key={item.q} className={`acordeon${abiertaActual ? ' acordeon--abierto' : ''}`}>
                  <button
                    type="button"
                    className="acordeon-cabecera"
                    id={`pregunta-${i}`}
                    aria-expanded={abiertaActual}
                    aria-controls={`respuesta-${i}`}
                    onClick={() => setAbierta(abiertaActual ? null : i)}
                  >
                    <span className="acordeon-pregunta">{item.q}</span>
                    <span className="acordeon-signo" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="acordeon-panel" id={`respuesta-${i}`} role="region" aria-labelledby={`pregunta-${i}`}>
                    <div className="acordeon-panel-inner">
                      <p className="acordeon-respuesta">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <aside className="faq-lateral">
          <Figura
            src={media("detalle.jpg")}
            alt="Macro de una superficie de vidrio esmerilado con reflejo azul suave cruzando la textura."
            proporcion="1 / 1"
            caption="Vidrio esmerilado del mesón de recepción bajo luz rasante. Así de nítida debería ser toda respuesta que pagas: sin opacidad ni letra chica."
          />
        </aside>
      </div>
    </section>
  );
}

function Reserva() {
  return (
    <section id="reserva" className="seccion reserva">
      <div className="contenedor reserva-grid">
        <div className="reserva-copy">
          <Revelar>
            <p className="kicker">Reserva tu hora</p>
            <h2 className="reserva-titulo">Parte por saber qué tienes.</h2>
            <p className="reserva-intro">
              Una hora, una radiografía y un presupuesto por escrito. Si hay dolor hoy, llama: los cupos de urgencia
              existen para eso.
            </p>
            <a className="telefono-gigante" href={TELEFONO_ENLACE}>
              {TELEFONO}
            </a>
            <p className="reserva-telefono-nota">{TEXTO_URGENCIA}: contesta el equipo de guardia.</p>
            <div className="reserva-acciones">
              <a className="btn-solido" href={CORREO_RESERVA}>
                Reservar hora
              </a>
              <a className="link-sub" href={`mailto:${CORREO}`}>
                {CORREO}
              </a>
            </div>
          </Revelar>
          <Revelar delay={120}>
            <dl className="reserva-datos">
              <div>
                <dt>Horario</dt>
                <dd>{HORARIO}</dd>
              </div>
              <div>
                <dt>Urgencias</dt>
                <dd>Cupos diarios durante horario de atención</dd>
              </div>
              <div>
                <dt>Dirección</dt>
                <dd>{DIRECCION}</dd>
              </div>
            </dl>
          </Revelar>
        </div>
        <aside className="reserva-lateral">
          <Revelar delay={150}>
            <div className="mapa-marco">
              <MapaLinea />
            </div>
            <p className="mapa-caption">A cinco cuadras de Metro Plaza de Puente Alto · líneas 01 y 07 frente al local.</p>
          </Revelar>
        </aside>
      </div>
    </section>
  );
}

function Pie() {
  const anio = new Date().getFullYear();
  return (
    <footer className="pie">
      <div className="contenedor pie-grid">
        <div className="pie-marca">
          <p className="logo">
            <span className="logo-marca" aria-hidden="true" />
            AZURA
          </p>
          <p>AZURA SpA · RUT 77.842.310-6</p>
          <p>{DIRECCION}</p>
        </div>
        <nav className="pie-nav" aria-label="Mapa del sitio">
          <a href="#especialidades">Especialidades</a>
          <a href="#valores">Valores</a>
          <a href="#metodo">Método</a>
          <a href="#faq">Preguntas</a>
          <a href="#reserva">Reservar</a>
        </nav>
        <div className="pie-contacto">
          <a href={TELEFONO_ENLACE}>{TELEFONO}</a>
          <a href={`mailto:${CORREO}`}>{CORREO}</a>
          <p>{TEXTO_URGENCIA} · {HORARIO}</p>
        </div>
      </div>
      <div className="contenedor pie-legal">
        <p>© {anio} AZURA SpA. Todos los derechos reservados.</p>
        <p>Documentación tributaria electrónica conforme a la normativa del SII de Chile.</p>
      </div>
    </footer>
  );
}

function CtaFija({ visible }: { visible: boolean }) {
  return (
    <div className={visible ? 'cta-fija cta-fija--visible' : 'cta-fija'} aria-hidden={!visible}>
      <a href={TELEFONO_ENLACE} className="cta-fija-llamar" tabIndex={visible ? 0 : -1}>
        Llamar
      </a>
      <a href="#reserva" className="btn-solido btn-solido--chico cta-fija-demo" tabIndex={visible ? 0 : -1}>
        Reservar hora
      </a>
    </div>
  );
}

export function App() {
  const referenciaHero = useRef<HTMLElement>(null);
  const [trasHero, setTrasHero] = useState(false);

  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const hero = referenciaHero.current;
      if (!hero) return;
      setTrasHero(hero.getBoundingClientRect().bottom <= 88);
    };
    const alDesplazar = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };
    window.addEventListener('scroll', alDesplazar, { passive: true });
    window.addEventListener('resize', alDesplazar);
    medir();
    return () => {
      window.removeEventListener('scroll', alDesplazar);
      window.removeEventListener('resize', alDesplazar);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <a className="salto" href="#contenido">
        Saltar al contenido
      </a>
      <BarraProgreso />
      <Navegacion />
      <main id="contenido">
        <Hero referenciaHero={referenciaHero} />
        <Especialidades />
        <Cifras />
        <Valores />
        <Metodo />
        <Voces />
        <Faq />
        <Reserva />
      </main>
      <Pie />
      <CtaFija visible={trasHero} />
    </>
  );
}
