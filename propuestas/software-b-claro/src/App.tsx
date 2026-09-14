import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Figura, MapaLinea } from './media';
import {
  hayHover,
  useCountUp,
  useInView,
  useNavScroll,
  useReducedMotion,
  useSeccionActiva,
} from './hooks';

const TELEFONO = '+56 2 2965 4821';
const TELEFONO_ENLACE = 'tel:+56229654821';
const CORREO = 'hola@baliza.cl';
const CORREO_DEMO = 'mailto:hola@baliza.cl?subject=Agendar%20demo%20%E2%80%94%20BALIZA';

const LINEAS_H1 = ['Software de gestión que', 'tu pyme entiende', 'desde el primer día.'];

const SECCIONES_NAV = [
  { id: 'modulos', texto: 'Módulos' },
  { id: 'precios', texto: 'Precios' },
  { id: 'metodo', texto: 'Método' },
  { id: 'faq', texto: 'Preguntas' },
];
const IDS_SPY = ['inicio', ...SECCIONES_NAV.map((s) => s.id), 'reserva'];

const MODULOS = [
  {
    titulo: 'Facturación electrónica SII',
    resuelve:
      'Emite boletas, facturas y notas de crédito firmadas ante el SII, con libros de compra y venta al día sin plugins ni trámites manuales.',
    rubro: 'Ideal para: comercio B2B y venta al público',
  },
  {
    titulo: 'Inventario y bodega',
    resuelve:
      'Costeo real por producto, códigos de barra y aviso de quiebre de stock antes de que el cliente pida lo que no hay.',
    rubro: 'Ideal para: retail y distribuidoras',
  },
  {
    titulo: 'Ventas y CRM',
    resuelve:
      'Cotizaciones que se convierten en factura con un clic y seguimiento de cada oportunidad sin planillas paralelas.',
    rubro: 'Ideal para: equipos comerciales pequeños',
  },
  {
    titulo: 'Reportes y tableros',
    resuelve:
      'Ventas, margen y cartera vencida en una sola página, exportable a Excel cuando la contabilidad lo pide.',
    rubro: 'Ideal para: gerencia y administración',
  },
  {
    titulo: 'Integración con bancos',
    resuelve:
      'Conciliación automática contra la cartola: sabes qué factura quedó pagada sin descargar cartolas a mano.',
    rubro: 'Ideal para: quien cierra caja todos los días',
  },
  {
    titulo: 'App móvil para terreno',
    resuelve:
      'Vendedores y técnicos consultan stock, dejan pedidos y cobran en terreno, aunque no haya señal.',
    rubro: 'Ideal para: servicios y trabajo en campo',
  },
];

const CIFRAS = [
  { destino: 14, prefijo: '+', etiqueta: 'años operando en Chile' },
  { destino: 230, prefijo: '+', etiqueta: 'pymes activas en el sistema' },
  { destino: 98, sufijo: '%', etiqueta: 'renueva cada año' },
  { destino: 1, etiqueta: 'ingeniero asignado por cliente' },
];

const PLANES = [
  {
    nombre: 'Esencial',
    usuarios: '1 a 3 usuarios',
    incluye: 'Facturación electrónica SII, inventario básico, reportes de venta y respaldo diario automático.',
    valor: '1,8 UF',
  },
  {
    nombre: 'Equipo',
    usuarios: 'Hasta 10 usuarios',
    incluye: 'Todo Esencial más CRM de ventas, integración bancaria, app móvil y tableros de margen.',
    valor: '3,6 UF',
  },
  {
    nombre: 'Empresa',
    usuarios: 'Usuarios ilimitados',
    incluye: 'Todo Equipo más multi-bodega, permisos por rol, reportes a medida y revisión trimestral de procesos.',
    valor: '6,9 UF',
  },
  {
    nombre: 'Implementación inicial',
    usuarios: 'Pago único',
    incluye: 'Levantamiento de procesos, migración de datos desde tu sistema anterior o Excel, y capacitación en tu oficina.',
    valor: 'desde 12 UF',
  },
];

const PASOS = [
  {
    numero: '01',
    titulo: 'Levantamiento de procesos',
    plazo: '1 semana',
    detalle:
      'Entrevistamos a tu equipo, mapeamos el flujo real —no el del manual— y lo dejamos firmado contigo antes de configurar nada.',
  },
  {
    numero: '02',
    titulo: 'Migración y capacitación',
    plazo: 'Semanas 2 a 4',
    detalle:
      'Traemos tus datos desde Excel o el sistema anterior, los cuadramos con reportes de conciliación y capacitamos con tus casos reales.',
  },
  {
    numero: '03',
    titulo: 'Acompañamiento continuo',
    plazo: 'Siempre',
    detalle:
      'El ingeniero que te implementó sigue siendo tu contacto. Sin tickets ni colas: si algo urge, responde quien conoce tu operación.',
  },
];

const VOCES = [
  {
    cita: 'Antes cerrábamos el mes con tres planillas distintas y rezando. Ahora el cierre es un botón y el inventario cuadra.',
    autor: '— Marcela, gerente de operations · distribuidora en Quilicura',
  },
  {
    cita: 'Me respondieron el teléfono un sábado a las 19:40. Ese día entendí por qué había cambiado de sistema.',
    autor: '— Rodrigo, dueño · empresa de seguridad en Viña del Mar',
  },
  {
    cita: 'La migración tomó nueve días hábiles. Nos dijeron cuánto iba a demorar y demoró exactamente eso.',
    autor: '— Carolina, jefa de administración · clínica dental en Ñuñoa',
  },
];

const PREGUNTAS = [
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'Entre 3 y 6 semanas según los módulos que actives. El levantamiento toma una semana y nunca dejamos un proyecto más de 90 días sin entrar en producción: si algo se atasca, te lo decimos y re-planificamos con vos.',
  },
  {
    q: '¿Migran mis datos de Excel o del sistema anterior?',
    a: 'Sí, nosotros hacemos la migración completa: productos, clientes, saldos y documentos abiertos. Entregamos reportes de cuadratura para validar juntos que todo llegó antes de cortar el sistema viejo.',
  },
  {
    q: '¿Qué pasa si necesito un cambio al sistema?',
    a: 'Los ajustes de configuración (formatos, permisos, flujos) van incluidos en el plan mensual. Si necesitas un desarrollo a medida, lo estimamos por escrito antes de partir y tú decides si sale ahora o más adelante.',
  },
  {
    q: '¿Cómo se paga, contrato o mes a mes?',
    a: 'Mes a mes, con factura electrónica. Después de la implementación no hay permanencia mínima ni multa de salida: nos quedas porque el sistema sirve, no por el contrato.',
  },
  {
    q: '¿Los datos son míos y puedo exportarlos?',
    a: 'Son tuyos y punto. Puedes exportar todo —productos, movimientos, documentos— en formatos abiertos cuando quieras, sin pedir permiso ni pagar extras. En BALIZA no existen los rehenes de datos.',
  },
  {
    q: '¿Qué soporte incluye el plan?',
    a: 'Soporte por teléfono y correo con ingenieros de BALIZA, no con bots ni chatbots. Respuesta el mismo día hábil y soporte prioritario hasta las 20:00 para clientes con plan Equipo o superior.',
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
  const clases = [
    'nav',
    oculto ? 'nav--oculto' : '',
    compacto ? 'nav--compacto' : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <nav className={clases} aria-label="Principal">
      <div className="contenedor nav-fila">
        <a className="logo" href="#inicio" aria-label="BALIZA, ir al inicio">
          <span className="logo-marca" aria-hidden="true" />
          BALIZA
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
          <div className="nav-soporte">
            <a className="nav-telefono" href={TELEFONO_ENLACE}>
              {TELEFONO}
            </a>
            <span className="nav-soporte-linea">¿Ayuda? Habla con un ingeniero, no con un bot</span>
          </div>
          <a className="btn-acento btn-acento--chico" href="#reserva">
            Agendar demo
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ referenciaHero }: { referenciaHero: React.RefObject<HTMLElement | null> }) {
  return (
    <section id="inicio" className="hero" ref={referenciaHero}>
      <div className="contenedor hero-grid">
        <div className="hero-copy">
          <p className="kicker">Software de gestión · Santiago</p>
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
            Facturación, inventario y reportes en un solo sistema, implementado por personas que responden el
            teléfono. Sin licencias eternas ni letra chica.
          </p>
          <div className="hero-acciones">
            <a className="btn-solido" href="#reserva">
              Agendar demo
            </a>
            <a className="link-sub" href="#precios">
              Ver precios
            </a>
          </div>
        </div>
        <div className="hero-media">
          <Figura
            src="/media/oficina.jpg"
            alt="Oficina de desarrollo de BALIZA: sala luminosa y despejada, con mesas de madera clara, monitores apagados y luz natural del norte."
            proporcion="16 / 9"
            prioridad
            caption="Oficina de desarrollo BALIZA · Providencia. Mesas despejadas; los monitores se apagan a las 18:30."
            className="figura--hero"
          />
        </div>
      </div>
      <div className="hero-banda">
        <div className="contenedor hero-banda-fila">
          <span>Implementación guiada incluida</span>
          <span className="hero-banda-sep" aria-hidden="true">
            ·
          </span>
          <span>Datos migrados por nuestro equipo</span>
        </div>
      </div>
    </section>
  );
}

function ItemModulo({ titulo, resuelve, rubro, indice }: { titulo: string; resuelve: string; rubro: string; indice: number }) {
  const [fijado, setFijado] = useState(indice === 0);
  const [sobrevuelo, setSobrevuelo] = useState(false);
  const abierto = fijado || sobrevuelo;
  return (
    <li className={`modulo${abierto ? ' modulo--abierto' : ''}`}>
      <button
        type="button"
        className="modulo-cabecera"
        id={`modulo-cabecera-${indice}`}
        aria-expanded={abierto}
        aria-controls={`modulo-panel-${indice}`}
        onClick={() => setFijado((v) => !v)}
        onMouseEnter={() => {
          if (hayHover()) setSobrevuelo(true);
        }}
        onMouseLeave={() => setSobrevuelo(false)}
        onFocus={() => setFijado(true)}
      >
        <span className="modulo-numero">{String(indice + 1).padStart(2, '0')}</span>
        <span className="modulo-titulo">{titulo}</span>
        <span className="modulo-signo" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="modulo-panel"
        id={`modulo-panel-${indice}`}
        role="region"
        aria-labelledby={`modulo-cabecera-${indice}`}
      >
        <div className="modulo-panel-inner">
          <p className="modulo-resuelve">{resuelve}</p>
          <p className="modulo-rubro">{rubro}</p>
        </div>
      </div>
    </li>
  );
}

function Modulos() {
  return (
    <section id="modulos" className="seccion">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Módulos"
          titulo="Seis módulos. Un solo sistema."
          intro="Cada módulo resuelve un proceso concreto de tu pyme. Actívalos por etapas: primero lo urgente, después lo conveniente."
        />
        <div className="modulos-grid">
          <aside className="modulos-lateral">
            <Figura
              src="/media/wireframe.jpg"
              alt="Wireframes dibujados a lápiz sobre papel milimetrado, con regla y lápiz apoyados encima."
              proporcion="4 / 5"
              caption="Cada pantalla nace en papel milimetrado antes de tocar código."
            />
          </aside>
          <ul className="modulos-lista">
            {MODULOS.map((m, i) => (
              <ItemModulo key={m.titulo} titulo={m.titulo} resuelve={m.resuelve} rubro={m.rubro} indice={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Dato({ dato, activo }: { dato: (typeof CIFRAS)[number]; activo: boolean }) {
  const valor = useCountUp(dato.destino, activo);
  return (
    <div className="cifra">
      <span className="cifra-numero">
        {dato.prefijo ?? ''}
        {valor}
        {dato.sufijo ?? ''}
      </span>
      <span className="cifra-etiqueta">{dato.etiqueta}</span>
    </div>
  );
}

function Cifras() {
  const { ref, visible } = useInView<HTMLDivElement>(0.35);
  return (
    <section id="cifras" className="cifras" aria-label="Cifras de BALIZA">
      <div className="contenedor cifras-fila" ref={ref}>
        {CIFRAS.map((c) => (
          <Dato key={c.etiqueta} dato={c} activo={visible} />
        ))}
      </div>
    </section>
  );
}

function PlanFila({ plan, indice }: { plan: (typeof PLANES)[number]; indice: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.16);
  const reducido = useReducedMotion();
  const mostrado = visible || reducido;
  return (
    <div
      ref={ref}
      role="row"
      className={mostrado ? 'plan-fila reveal reveal--visible' : 'plan-fila reveal'}
      style={reducido ? undefined : ({ transitionDelay: `${indice * 60}ms` } as CSSProperties)}
    >
      <div role="cell" className="plan-nombre">
        <h3>{plan.nombre}</h3>
        <span className="plan-usuarios">{plan.usuarios}</span>
      </div>
      <div role="cell" className="plan-incluye">
        {plan.incluye}
      </div>
      <div role="cell" className="plan-valor">
        {plan.valor}
        {plan.nombre !== 'Implementación inicial' ? <span className="plan-periodo">/mes</span> : null}
      </div>
    </div>
  );
}

function Precios() {
  return (
    <section id="precios" className="seccion">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Precios"
          titulo="Precios claros, sin letra chica."
          intro="Plan mensual por empresa, facturado en pesos al valor UF del día. Actualizaciones y soporte telefónico incluidos siempre."
        />
        <div className="tabla-planes" role="table" aria-label="Planes y valores mensuales">
          {PLANES.map((p, i) => (
            <PlanFila key={p.nombre} plan={p} indice={i} />
          ))}
        </div>
        <Revelar>
          <p className="precios-nota">
            El valor final se confirma después de levantar tus procesos. Si no te sirve, te lo decimos antes de
            cobrarte.
          </p>
          <p className="precios-micro">Sin permanencia. Sin costo de salida. Tus datos se exportan cuando quieras.</p>
        </Revelar>
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
      <span className="paso-plazo">{paso.plazo}</span>
      <p className="paso-detalle">{paso.detalle}</p>
    </li>
  );
}

function Metodo() {
  return (
    <section id="metodo" className="seccion seccion--alterna">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Método"
          titulo="Implementamos sin detener tu operación."
          intro="El mismo método para las 230 pymes que operan hoy: corto, verificado y con responsables con nombre y apellido."
        />
        <ol className="pasos">
          {PASOS.map((paso, i) => (
            <PasoItem key={paso.numero} paso={paso} indice={i} />
          ))}
        </ol>
        <Revelar>
          <Figura
            src="/media/rack.jpg"
            alt="Rack de servidores en una sala limpia, fotografiado de lado, con LEDs de estado tenues."
            proporcion="16 / 9"
            caption="Los datos de nuestros clientes viven en servidores en Santiago, con respaldo diario y copia fuera de sitio."
            className="figura--ancho"
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
    }, 7000);
    return () => window.clearInterval(temporizador);
  }, [reducido, pausa]);
  return (
    <section id="voces" className="seccion" aria-label="Testimonios de clientes">
      <div className="contenedor voces-contenedor">
        <EncabezadoSeccion kicker="Voces" titulo="Lo que dicen quienes ya operan con BALIZA." />
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
            <span className="voces-estado" aria-hidden="true">
              {pausa || reducido ? '·' : ''}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [abierta, setAbierta] = useState<number | null>(null);
  return (
    <section id="faq" className="seccion seccion--alterna">
      <div className="contenedor faq-grid">
        <div className="faq-columna">
          <EncabezadoSeccion
            kicker="Preguntas frecuentes"
            titulo="Las seis que siempre nos hacen."
            intro="Respondidas como se las contestaría un ingeniero al teléfono: sin vueltas."
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
                  <div
                    className="acordeon-panel"
                    id={`respuesta-${i}`}
                    role="region"
                    aria-labelledby={`pregunta-${i}`}
                  >
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
            src="/media/teclado.jpg"
            alt="Macro de teclas mecánicas de teclado con luz rasante suave."
            proporcion="1 / 1"
            caption="Atajos de teclado de verdad y soporte de ingenieros, no de bots."
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
            <p className="kicker">Reserva</p>
            <h2 className="reserva-titulo">Una demo de 30 minutos, sin compromiso.</h2>
            <p className="reserva-intro">
              Trae un reporte que hoy te tenga sufriendo y salimos con una respuesta concreta, no con un folleto.
            </p>
            <a className="telefono-gigante" href={TELEFONO_ENLACE}>
              {TELEFONO}
            </a>
            <div className="reserva-acciones">
              <a className="btn-acento" href={CORREO_DEMO}>
                Agendar demo
              </a>
              <a className="link-sub" href={`mailto:${CORREO}`}>
                {CORREO}
              </a>
            </div>
          </Revelar>
          <Revelar delay={120}>
            <dl className="reserva-datos">
              <div>
                <dt>Horario comercial</dt>
                <dd>Lun–Vie 9:00–18:30</dd>
              </div>
              <div>
                <dt>Soporte prioritario</dt>
                <dd>Hasta las 20:00</dd>
              </div>
              <div>
                <dt>Dirección</dt>
                <dd>Providencia, Santiago</dd>
              </div>
            </dl>
            <p className="reserva-soporte">¿Ayuda? Habla con un ingeniero, no con un bot.</p>
          </Revelar>
        </div>
        <aside className="reserva-lateral">
          <Revelar delay={150}>
            <div className="mapa-marco">
              <MapaLinea />
            </div>
            <p className="mapa-caption">Metro Los Leones, línea 1 · estacionamiento para visitas en la of. 42.</p>
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
            <span className="logo-marca" aria-hidden="true" />BALIZA
          </p>
          <p>BALIZA SpA · RUT 77.845.210-3</p>
          <p>Av. Providencia 1208, of. 42, Providencia, Santiago</p>
        </div>
        <nav className="pie-nav" aria-label="Mapa del sitio">
          <a href="#modulos">Módulos</a>
          <a href="#precios">Precios</a>
          <a href="#metodo">Método</a>
          <a href="#faq">Preguntas</a>
          <a href="#reserva">Reserva</a>
        </nav>
        <div className="pie-contacto">
          <a href={TELEFONO_ENLACE}>{TELEFONO}</a>
          <a href={`mailto:${CORREO}`}>{CORREO}</a>
          <p>¿Ayuda? Habla con un ingeniero, no con un bot.</p>
        </div>
      </div>
      <div className="contenedor pie-legal">
        <p>
          © {anio} BALIZA SpA. Todos los derechos reservados.
        </p>
        <p>Documentación tributaria electrónica conforme a la normativa del SII.</p>
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
      <a href="#reserva" className="btn-acento btn-acento--chico cta-fija-demo" tabIndex={visible ? 0 : -1}>
        Agendar demo
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
        <Modulos />
        <Cifras />
        <Precios />
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
