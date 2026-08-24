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
const CORREO = 'hola@serenadental.cl';
const CORREO_AGENDA = `mailto:${CORREO}?subject=Agendar%20evaluaci%C3%B3n%20%E2%80%94%20SERENA%20DENTAL`;
const media = (nombre: string) => `${import.meta.env.BASE_URL}media/${nombre}`;

const LINEAS_H1 = ['Odontología', 'seria, sin sustos', 'ni letra chica.'];

const SECCIONES_NAV = [
  { id: 'tratamientos', texto: 'Tratamientos' },
  { id: 'valores', texto: 'Valores' },
  { id: 'metodo', texto: 'Método' },
  { id: 'faq', texto: 'Preguntas' },
];
const IDS_SPY = ['inicio', ...SECCIONES_NAV.map((s) => s.id), 'reserva'];

const TRATAMIENTOS = [
  {
    titulo: 'Evaluación y diagnóstico digital',
    duracion: '30 min',
    desde: 'desde $35.000',
    detalle: 'Examen completo, radiografía panorámica digital y diagnóstico explicado en la misma hora.',
  },
  {
    titulo: 'Limpieza y profilaxis',
    duracion: '45 min',
    desde: 'desde $45.000',
    detalle: 'Destaraje ultrasónico y pulido, con instrucción de cepillado adaptada a tu caso.',
  },
  {
    titulo: 'Restauraciones estéticas',
    duracion: '60 min',
    desde: 'desde $55.000',
    detalle: 'Resinas del color de tu diente, en una sola sesión. Sin metal ni empates visibles.',
  },
  {
    titulo: 'Endodoncia',
    duracion: '90 min',
    desde: 'desde $320.000',
    detalle: 'Tratamiento de conducto con anestesia eficaz y control radiográfico en cada etapa.',
  },
  {
    titulo: 'Cirugía y extracciones',
    duracion: '60 min',
    desde: 'desde $80.000',
    detalle: 'Extracciones simples y complejas, con indicaciones de cuidado por escrito.',
  },
  {
    titulo: 'Ortodoncia y alineadores',
    duracion: '45 min',
    desde: 'desde $1.900.000',
    detalle: 'Brackets o alineadores con plan de movimiento y valor total pactado desde el día uno.',
  },
];

const CIFRAS = [
  { destino: 15, prefijo: '+', etiqueta: 'años atendiendo en Ñuñoa' },
  { destino: 9500, prefijo: '+', etiqueta: 'pacientes tratados', miles: true },
  { destino: 96, sufijo: '%', etiqueta: 'recomienda la clínica' },
  { destino: 3, etiqueta: 'dentistas titulados, siempre los mismos' },
] as const;

const VALORES = [
  { nombre: 'Evaluación con radiografía', detalle: 'Diagnóstico completo explicado en la misma hora', desde: '$35.000' },
  { nombre: 'Limpieza y profilaxis', detalle: 'Destaraje ultrasónico y pulido', desde: '$45.000' },
  { nombre: 'Restauración en resina', detalle: 'Por pieza, color a tono, en una sesión', desde: '$55.000' },
  { nombre: 'Endodoncia, un conducto', detalle: 'Con controles radiográficos incluidos', desde: '$320.000' },
  { nombre: 'Extracción simple', detalle: 'Con anestesia e indicaciones escritas', desde: '$80.000' },
  { nombre: 'Blanqueamiento', detalle: 'En clínica, dos sesiones de 30 min', desde: '$290.000' },
];

const PASOS = [
  {
    numero: '01',
    titulo: 'Evaluación y radiografía',
    detalle:
      'Una hora sin apuro: examen completo, radiografía digital y todas tus preguntas respondidas. Sale un diagnóstico claro, no una lista de tareas imposible de pagar.',
  },
  {
    numero: '02',
    titulo: 'Diagnóstico explicado en palabras simples',
    detalle:
      'Te mostramos qué hay, qué urge y qué puede esperar. Sin términos técnicos para confundir y sin tratar lo que no necesita tratamiento.',
  },
  {
    numero: '03',
    titulo: 'Plan de tratamiento y seguimiento',
    detalle:
      'Presupuesto por escrito con etapas, plazos y valores. El mismo dentista te acompaña de principio a fin y controla tu evolución.',
  },
];

const VOCES = [
  {
    cita:
      'Me cotizaron una muela abajo del $200.000 en otro lado y aquí me explicaron que solo necesitaba una restauración. Pagué $55.000 y listo.',
    autor: '— Claudia, paciente desde 2019 · Ñuñoa',
  },
  {
    cita:
      'Llegué con un dolor imposible un viernes a las 18:00 y me atendieron esa misma tarde. Al día siguiente ya estaba comiendo normal.',
    autor: '— Marcelo, paciente desde 2022 · La Reina',
  },
  {
    cita:
      'El presupuesto llegó por correo, por escrito, con cada etapa y su valor. No me pidieron firmar nada antes de entenderlo.',
    autor: '— Javiera, paciente desde 2021 · Providencia',
  },
];

const PREGUNTAS = [
  {
    q: '¿Atienden urgencias dentales el mismo día?',
    a: 'Sí. Reservamos cupos de urgencia todos los días hábiles. Si tienes dolor ahora, llama al +56 9 8765 4321 y te damos la primera hora disponible, generalmente dentro del mismo día. Los sábados atendemos urgencias hasta las 14:00.',
  },
  {
    q: '¿Cuánto cuesta la evaluación?',
    a: 'Desde $35.000 e incluye examen completo, radiografía panorámica digital y el diagnóstico explicado en la misma hora. Ese valor se descuenta del tratamiento si lo partes dentro de las siguientes 4 semanas.',
  },
  {
    q: '¿Trabajan con isapres o convenios?',
    a: 'Tenemos convenios con las principales isapres y emitimos boleta para tu reembolso. En la primera hora te decimos exactamente qué cubre tu plan y qué pagarías de tu bolsillo, antes de partir nada.',
  },
  {
    q: '¿El presupuesto puede cambiar?',
    a: 'Solo si el diagnóstico lo justifica y siempre antes de continuar. Si al abrir una pieza aparece algo distinto, nos detenemos, te explicamos y re-cotizamos. Nada se cobra sin tu aprobación por escrito.',
  },
  {
    q: '¿Usan anestesia siempre?',
    a: 'En todos los procedimientos que puedan doler, sí, y esperamos que haga efecto completo antes de partir. Si en algún momento sientes algo, levantas la mano y nos detenemos. El dolor no es parte del tratamiento.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Débito, crédito, transferencia y pago en cuotas sin interés para tratamientos sobre $150.000. El plan de pago queda por escrito junto con el presupuesto, sin letra chica.',
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
        <a className="logo" href="#inicio" aria-label="SERENA DENTAL, ir al inicio">
          <span className="logo-marca" aria-hidden="true" />
          SERENA DENTAL
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
            <span className="nav-urgencia-linea">¿Dolor ahora? Llámanos</span>
          </div>
          <a className="btn-solido btn-solido--chico" href="#reserva">
            Agendar
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
          <p className="kicker">Clínica dental · Ñuñoa</p>
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
            Diagnóstico explicado, presupuesto por escrito y tratamiento a tu ritmo. El mismo dentista te acompaña
            de principio a fin.
          </p>
          <div className="hero-acciones">
            <a className="btn-solido" href="#reserva">
              Agendar evaluación
            </a>
            <a className="link-sub" href="#valores">
              Ver valores
            </a>
          </div>
        </div>
        <div className="hero-media">
          <Figura
            src={media("sala.jpg")}
            alt="Sala de espera luminosa y vacía, con sillones claros, piso de madera pálida y luz natural entrando por ventanas amplias."
            proporcion="16 / 9"
            prioridad
            caption="Sala de espera un martes a las 10:40. Sin televisor en el muro ni música de ascensor: luz norte, madera pálida y silencio."
            className="figura--hero"
          />
        </div>
      </div>
      <div className="hero-banda">
        <div className="contenedor hero-banda-fila">
          <span>Atención con hora o por urgencia</span>
          <span className="hero-banda-sep" aria-hidden="true">
            ·
          </span>
          <span>Convenios con las principales isapres</span>
        </div>
      </div>
    </section>
  );
}

function ItemTratamiento({
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
    <li className={`tratamiento${abierto ? ' tratamiento--abierto' : ''}`}>
      <button
        type="button"
        className="tratamiento-cabecera"
        id={`tratamiento-cabecera-${indice}`}
        aria-expanded={abierto}
        aria-controls={`tratamiento-panel-${indice}`}
        onClick={() => setFijado((v) => !v)}
        onMouseEnter={() => {
          if (hayHover()) setSobrevuelo(true);
        }}
        onMouseLeave={() => setSobrevuelo(false)}
        onFocus={() => setFijado(true)}
      >
        <span className="tratamiento-numero">{String(indice + 1).padStart(2, '0')}</span>
        <span className="tratamiento-titulo">{titulo}</span>
        <span className="tratamiento-signo" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="tratamiento-panel"
        id={`tratamiento-panel-${indice}`}
        role="region"
        aria-labelledby={`tratamiento-cabecera-${indice}`}
      >
        <div className="tratamiento-panel-inner">
          <p className="tratamiento-detalle">{detalle}</p>
          <p className="tratamiento-datos">
            <span>{duracion}</span>
            <span className="tratamiento-desde">{desde}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

function Tratamientos() {
  return (
    <section id="tratamientos" className="seccion">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Tratamientos"
          titulo="Seis tratamientos, valores desde claros."
          intro="Lo que más se hace en esta clínica, con su duración típica y su valor de partida. Pasa el cursor o toca cada línea para ver el detalle."
        />
        <ul className="tratamientos-lista">
          {TRATAMIENTOS.map((t, i) => (
            <ItemTratamiento
              key={t.titulo}
              titulo={t.titulo}
              detalle={t.detalle}
              duracion={t.duracion}
              desde={t.desde}
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
    <section id="cifras" className="cifras" aria-label="Cifras de SERENA DENTAL">
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
          titulo="Valores claros, presupuesto por escrito."
          intro="Partimos siempre de un valor desde. El final se confirma después del diagnóstico, no en la silla con la boca abierta."
        />
        <div className="valores-grid">
          <div className="tabla-valores" role="table" aria-label="Valores desde por tratamiento">
            {VALORES.map((v, i) => (
              <ValorFila key={v.nombre} fila={v} indice={i} />
            ))}
            <Revelar>
              <p className="precios-nota">
                El valor final se confirma después del diagnóstico. Nunca partimos un tratamiento sin tu aprobación
                por escrito.
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
                alt="Bodegón de espejos dentales y sondas de acero alineadas sobre una tela blanca plisada."
                proporcion="4 / 5"
                caption="Instrumental de la bandeja de diagnóstico, esterilizado y ordenado antes de cada hora. Lo que toca tu boca sale de una envoltura sellada."
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
          intro="Tres pasos, siempre iguales, con el mismo dentista de principio a fin."
        />
        <ol className="pasos">
          {PASOS.map((paso, i) => (
            <PasoItem key={paso.numero} paso={paso} indice={i} />
          ))}
        </ol>
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
    }, 7000);
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
            alt="Macro de una superficie de cerámica blanca curva, con luz rasante revelando su textura suave."
            proporcion="1 / 1"
            caption="Porcelana de una corona bajo luz rasante. Así se ve un trabajo bien terminado: la curva exacta donde el cepillo llega sin esfuerzo."
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
            <p className="kicker">Agenda tu evaluación</p>
            <h2 className="reserva-titulo">Parte por saber qué tienes.</h2>
            <p className="reserva-intro">
              Una hora, una radiografía y un diagnóstico explicado. Si hay dolor hoy, llámanos: los cupos de
              urgencia existen para eso.
            </p>
            <a className="telefono-gigante" href={TELEFONO_ENLACE}>
              {TELEFONO}
            </a>
            <p className="reserva-telefono-nota">¿Dolor ahora? Llámanos: contesta un dentista de guardia.</p>
            <div className="reserva-acciones">
              <a className="btn-solido" href={CORREO_AGENDA}>
                Agendar evaluación
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
                <dd>Lun–Vie 9:00–19:30 · Sáb 10:00–14:00</dd>
              </div>
              <div>
                <dt>Urgencias</dt>
                <dd>Cupos diarios, también sábados</dd>
              </div>
              <div>
                <dt>Dirección</dt>
                <dd>Av. Irarrázaval 3450, of. 12, Ñuñoa</dd>
              </div>
            </dl>
          </Revelar>
        </div>
        <aside className="reserva-lateral">
          <Revelar delay={150}>
            <div className="mapa-marco">
              <MapaLinea />
            </div>
            <p className="mapa-caption">Metro Ñuñoa, línea 6 · a dos cuadras de Plaza Ñuñoa.</p>
          </Revelar>
        </aside>
      </div>
    </section>
  );
}

function DivisorDiente() {
  return (
    <div className="divisor-diente" aria-hidden="true">
      <svg viewBox="0 0 48 56" width="34" height="40" fill="none">
        <path
          d="M24 8 C 18 3, 8 4, 6 14 C 4.5 22, 9 28, 11 34 C 13 40, 13 50, 16 51 C 19 52, 19 44, 21 38 C 22 34.5, 26 34.5, 27 38 C 29 44, 29 52, 32 51 C 35 50, 35 40, 37 34 C 39 28, 43.5 22, 42 14 C 40 4, 30 3, 24 8 Z"
          stroke="var(--gris)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Pie() {
  const anio = new Date().getFullYear();
  return (
    <footer className="pie">
      <DivisorDiente />
      <div className="contenedor pie-grid">
        <div className="pie-marca">
          <p className="logo">
            <span className="logo-marca" aria-hidden="true" />
            SERENA DENTAL
          </p>
          <p>SERENA DENTAL SpA · RUT 77.615.204-3</p>
          <p>Av. Irarrázaval 3450, of. 12, Ñuñoa, Santiago</p>
        </div>
        <nav className="pie-nav" aria-label="Mapa del sitio">
          <a href="#tratamientos">Tratamientos</a>
          <a href="#valores">Valores</a>
          <a href="#metodo">Método</a>
          <a href="#faq">Preguntas</a>
          <a href="#reserva">Agendar</a>
        </nav>
        <div className="pie-contacto">
          <a href={TELEFONO_ENLACE}>{TELEFONO}</a>
          <a href={`mailto:${CORREO}`}>{CORREO}</a>
          <p>¿Dolor ahora? Llámanos · Lun–Vie 9:00–19:30 · Sáb 10:00–14:00</p>
        </div>
      </div>
      <div className="contenedor pie-legal">
        <p>© {anio} SERENA DENTAL SpA. Todos los derechos reservados.</p>
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
        Agendar evaluación
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
        <Tratamientos />
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
