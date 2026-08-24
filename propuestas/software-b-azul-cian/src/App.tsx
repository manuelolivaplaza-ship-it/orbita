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

const TELEFONO = '+56 2 2965 4821';
const TELEFONO_ENLACE = 'tel:+56229654821';
const CORREO = 'contacto@altiva.cl';
const CORREO_EVALUACION = 'mailto:contacto@altiva.cl?subject=Solicitar%20evaluaci%C3%B3n%20%E2%80%94%20ALTIVA';
const media = (nombre: string) => `${import.meta.env.BASE_URL}media/${nombre}`;

const LINEAS_H1 = ['La tecnología', 'de tu empresa,', 'sin sobresaltos.'];

const SECCIONES_NAV = [
  { id: 'servicios', texto: 'Servicios' },
  { id: 'planes', texto: 'Planes' },
  { id: 'metodo', texto: 'Método' },
  { id: 'faq', texto: 'Preguntas' },
];
const IDS_SPY = ['inicio', ...SECCIONES_NAV.map((s) => s.id), 'reserva'];

const SERVICIOS = [
  {
    titulo: 'Soporte HelpDesk',
    incluye:
      'Mesa de ayuda por teléfono, correo y WhatsApp, con tickets numerados y cierre documentado. Técnicos que conocen tu parque de equipos, no lecturas de guion.',
    tamano: 'Empresas de 10 a 50 personas con servidor o red propia',
  },
  {
    titulo: 'Redes y conectividad',
    incluye:
      'Switching administrable, Wi-Fi con cobertura medida en planta, VPN entre sucursales y teletrabajo, y cableado etiquetado que el próximo técnico sí va a entender.',
    tamano: 'Oficinas desde 15 personas o con más de una sede',
  },
  {
    titulo: 'Ciberseguridad básica empresarial',
    incluye:
      'Firewall administrado, filtro antiphishing en el correo, doble factor en accesos críticos y un protocolo de incidentes de una página, no un manual de 80.',
    tamano: 'Pymes que manejan facturación y datos de clientes',
  },
  {
    titulo: 'Respaldo y continuidad',
    incluye:
      'Copias diarias locales y fuera de sitio, con prueba de restauración mensual documentada y firmada. El respaldo que nunca se probó no existe.',
    tamano: 'Empresas que no pueden detenerse ni un día',
  },
  {
    titulo: 'Microsoft 365 / Google Workspace',
    incluye:
      'Licencias, migración de correo sin perder historial, políticas de acceso y una capacitación corta para que el equipo use la herramienta de verdad.',
    tamano: 'Equipos de 5 a 100 usuarios migrando desde correos gratuitos',
  },
  {
    titulo: 'Equipos y arriendo de hardware',
    incluye:
      'PCs, notebooks y arriendo con reemplazo ante falla, inventario con número de serie y vida útil proyectada por escrito para tu próxima renovación.',
    tamano: 'Empresas con personal en terreno o que proyectan CAPEX',
  },
];

const CIFRAS = [
  { destino: 16, prefijo: '+', etiqueta: 'años operando en Chile' },
  { destino: 140, prefijo: '+', etiqueta: 'empresas atendidas' },
  { destino: 97, sufijo: '%', etiqueta: 'de tickets resueltos el mismo día' },
  { destino: 2, prefijo: '< ', sufijo: ' hrs', etiqueta: 'de respuesta, garantizada por SLA' },
];

const PLANES = [
  {
    nombre: 'Esencial',
    usuarios: 'Hasta 15 usuarios',
    incluye:
      '20 horas de soporte al mes, respuesta en menos de 2 hrs hábiles, monitoreo de servidores, respaldo diario verificado y 1 visita preventiva mensual.',
    valor: '4,5 UF',
  },
  {
    nombre: 'Corporativo',
    usuarios: 'Hasta 50 usuarios',
    incluye:
      '45 horas de soporte al mes, respuesta prioritaria en menos de 1 hr hábil, administración de red y firewall, ciberseguridad básica y 2 visitas preventivas al mes.',
    valor: '9,8 UF',
  },
  {
    nombre: 'A medida',
    usuarios: 'Multi-sede o reguladas',
    incluye:
      'Diseñamos horas, SLA y visitas sobre tu inventario real. La propuesta completa llega por escrito en menos de 5 días hábiles.',
    valor: 'según diagnóstico',
  },
];

const PASOS = [
  {
    numero: '01',
    titulo: 'Diagnóstico gratuito',
    plazo: 'Semana 1',
    detalle:
      'Visita a tu oficina e inventario completo de equipos, red y licencias. Sales con un informe de riesgos priorizados, sin costo ni compromiso.',
  },
  {
    numero: '02',
    titulo: 'Plan y prioridades por escrito',
    plazo: 'Semana 2',
    detalle:
      'Propuesta con alcance, horas, SLA y valor mensual. Lo urgente primero, lo demás calendarizado. Nada se cobra antes de que lo apruebes por correo.',
  },
  {
    numero: '03',
    titulo: 'Operación con reporte mensual',
    plazo: 'Siempre',
    detalle:
      'Soporte, monitoreo y visitas según tu plan. Cada mes: reporte de tickets, tiempos de respuesta y estado de respaldos. Si falla el SLA, ese mes se descuenta.',
  },
];

const VOCES = [
  {
    cita:
      'Llevábamos años con un proveedor que respondía «mañana». ALTIVA respondió en 40 minutos un viernes a las 17:00 y dejó el sistema funcionando el mismo día.',
    autor: '— Rodrigo, jefe de administración · importadora en Estación Central',
  },
  {
    cita:
      'Inventariaron la red completa antes de cobrarnos un peso. Cuando el diagnóstico es de verdad, el plan que viene después se entiende solo.',
    autor: '— Claudia, gerenta general · clínica dental en Providencia',
  },
  {
    cita:
      'Se cayó un switch un sábado en la mañana y la guardia técnica lo reemplazó antes de que abriera el local. Perdimos cero ventas.',
    autor: '— Patricio, dueño · cadena de minimercados en Maipú',
  },
];

const PREGUNTAS = [
  {
    q: '¿Cuánto demoran en responder un problema?',
    a: 'Los tickets entran por teléfono, correo o WhatsApp y quedan numerados. El compromiso escrito es respuesta en menos de 2 horas hábiles; el promedio real del último semestre fue 47 minutos. Con plan Corporativo, la respuesta baja a menos de 1 hora.',
  },
  {
    q: '¿Trabajan con contrato o mes a mes?',
    a: 'Mes a mes, con contrato de prestación de servicios y SLA firmado. Sin permanencia obligatoria: si no cumplimos el SLA, ese mes se descuenta del valor. Para salir pedimos 30 días de aviso y te entregamos toda la documentación de tu operación.',
  },
  {
    q: '¿Atienden en terreno o remoto?',
    a: 'Ambos. Cerca del 70% de los casos se resuelve en remoto en menos de una hora. Si el problema requiere presencia, un técnico llega a tu oficina dentro de las 4 horas hábiles siguientes en toda Santiago urbana. Las visitas preventivas son presenciales y agendadas con anticipación.',
  },
  {
    q: '¿Qué cubre la ciberseguridad básica?',
    a: 'Firewall administrado, filtro antiphishing y antimalware en el correo, bloqueo de sitios riesgosos, doble factor en accesos críticos y un protocolo de incidentes de una página. No vendemos humo: si tu operación exige monitoreo 24/7, te lo decimos antes y te ayudamos a contratarlo.',
  },
  {
    q: '¿Pueden tomar el soporte de otro proveedor a medias?',
    a: 'Sí, aunque preferimos no hacerlo: los soportes a medias terminan con dos proveedores culpándose cuando algo falla. Si es la única salida, lo hacemos con un inventario firmado por ambas partes, accesos documentados y un plazo de traspaso definido por escrito.',
  },
  {
    q: '¿Qué pasa con nuestros datos si nos cambiamos?',
    a: 'Son tuyos. Al término del servicio entregamos inventarios, claves de administración, respaldos completos y las configuraciones de tus equipos, en formatos que cualquier otro proveedor puede leer. Sin costos de salida ni datos de rehén.',
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
        <a className="logo" href="#inicio" aria-label="ALTIVA, ir al inicio">
          <span className="logo-marca" aria-hidden="true" />
          ALTIVA
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
            <span className="nav-soporte-linea">¿Problema ahora? Llámanos</span>
          </div>
          <a className="btn-solido btn-solido--chico" href="#reserva">
            Evaluación
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
          <p className="kicker">Tecnología corporativa · Santiago</p>
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
            Soporte informático, redes y sistemas para pymes que no pueden detenerse. Respuesta en menos de 2
            horas hábiles, compromiso por escrito.
          </p>
          <div className="hero-acciones">
            <a className="btn-solido" href="#reserva">
              Solicitar evaluación
            </a>
            <a className="link-sub" href="#planes">
              Ver planes
            </a>
          </div>
        </div>
        <div className="hero-media">
          <Figura
            src={media("lobby.jpg")}
            alt="Hall corporativo vacío de vidrio y acero con luz diurna fría y líneas verticales."
            proporcion="16 / 9"
            prioridad
            caption="Hall de un cliente en Las Condes, un martes a las 8:29. A las 8:31 ya estamos adentro: el acceso se coordina una vez y queda documentado."
            className="figura--hero"
          />
        </div>
      </div>
      <div className="hero-banda">
        <div className="contenedor hero-banda-fila">
          <span>SLA por escrito</span>
          <span className="hero-banda-sep" aria-hidden="true">
            ·
          </span>
          <span>Técnicos certificados</span>
          <span className="hero-banda-sep" aria-hidden="true">
            ·
          </span>
          <span>Respuesta &lt; 2 hrs hábiles</span>
        </div>
      </div>
    </section>
  );
}

function ItemServicio({
  titulo,
  incluye,
  tamano,
  indice,
}: {
  titulo: string;
  incluye: string;
  tamano: string;
  indice: number;
}) {
  const [fijado, setFijado] = useState(indice === 0);
  const [sobrevuelo, setSobrevuelo] = useState(false);
  const abierto = fijado || sobrevuelo;
  return (
    <li className={`servicio${abierto ? ' servicio--abierto' : ''}`}>
      <button
        type="button"
        className="servicio-cabecera"
        id={`servicio-cabecera-${indice}`}
        aria-expanded={abierto}
        aria-controls={`servicio-panel-${indice}`}
        onClick={() => setFijado((v) => !v)}
        onMouseEnter={() => {
          if (hayHover()) setSobrevuelo(true);
        }}
        onMouseLeave={() => setSobrevuelo(false)}
        onFocus={() => setFijado(true)}
      >
        <span className="servicio-numero">{String(indice + 1).padStart(2, '0')}</span>
        <span className="servicio-titulo">{titulo}</span>
        <span className="servicio-signo" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="servicio-panel"
        id={`servicio-panel-${indice}`}
        role="region"
        aria-labelledby={`servicio-cabecera-${indice}`}
      >
        <div className="servicio-panel-inner">
          <p className="servicio-incluye">{incluye}</p>
          <p className="servicio-tamano">{tamano}</p>
        </div>
      </div>
    </li>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="seccion">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Servicios"
          titulo="Seis frentes, un solo responsable."
          intro="Lo que contratas es una operación que no se cae. Cada servicio tiene alcance definido, horas claras y un SLA firmado: pasa el cursor o toca cada línea para ver qué incluye."
        />
        <div className="servicios-grid">
          <aside className="servicios-lateral">
            <Figura
              src={media("patch.jpg")}
              alt="Sala de comunicaciones con racks ordenados y cables de red azules peinados en fila."
              proporcion="16 / 9"
              caption="Patch panel etiquetado en un cliente de la comuna de Las Condes. Así se ve un rack nuestro el día de la entrega — y así tiene que seguir viéndose."
            />
          </aside>
          <ul className="servicios-lista">
            {SERVICIOS.map((s, i) => (
              <ItemServicio key={s.titulo} titulo={s.titulo} incluye={s.incluye} tamano={s.tamano} indice={i} />
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
    <section id="cifras" className="cifras" aria-label="Cifras de ALTIVA">
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
        <span className="plan-periodo">/mes</span>
      </div>
    </div>
  );
}

function Planes() {
  return (
    <section id="planes" className="seccion seccion--alterna">
      <div className="contenedor">
        <EncabezadoSeccion
          kicker="Planes"
          titulo="Planes claros, compromiso por escrito."
          intro="Plan mensual por empresa, facturado en pesos al valor UF del día. El SLA va firmado en el contrato, no en un brochure."
        />
        <div className="planes-grid">
          <div className="tabla-planes" role="table" aria-label="Planes y valores mensuales">
            {PLANES.map((p, i) => (
              <PlanFila key={p.nombre} plan={p} indice={i} />
            ))}
            <Revelar>
              <p className="precios-nota">
                Sin permanencia obligatoria. Si no cumplimos el SLA, ese mes se descuenta.
              </p>
              <p className="precios-micro">
                Valores en UF, facturados en pesos. El diagnóstico inicial es gratuito y sin compromiso.
              </p>
            </Revelar>
          </div>
          <aside className="planes-lateral">
            <Revelar delay={120}>
              <Figura
                src={media("planos.jpg")}
                alt="Diagrama de topología de red impreso en una hoja blanca sobre una mesa, junto a una regla metálica."
                proporcion="4 / 5"
                caption="Topología de red de un cliente, impresa y firmada. Ese plano es tuyo: se entrega con el diagnóstico y se actualiza cada vez que cambia algo."
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
      <span className="paso-plazo">{paso.plazo}</span>
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
          titulo="Primero entender, después cobrar."
          intro="Tres pasos, siempre iguales. Los mismos que seguimos hace 16 años con más de 140 empresas."
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
    <section id="voces" className="seccion seccion--alterna" aria-label="Testimonios de clientes">
      <div className="contenedor voces-contenedor">
        <EncabezadoSeccion kicker="Voces" titulo="Lo que dicen las empresas atendidas." />
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
            intro="Respondidas como te las contestaría un técnico al teléfono: sin vueltas."
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
            src={media("vidrio.jpg")}
            alt="Macro de una vitrina de vidrio esmerilado con un reflejo azul suave de luz diurna."
            proporcion="1 / 1"
            caption="Vitrina de nuestra sala de atención en Las Condes. Si tu problema es ahora, no necesitas hora: llámanos y te respondemos."
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
            <p className="kicker">Evaluación gratuita</p>
            <h2 className="reserva-titulo">
              Hablemos de tu operación.
            </h2>
            <p className="reserva-intro">
              Vamos a tu oficina, inventariamos tu parque y te entregamos un plan por escrito. Si no te sirve, te
              lo decimos ahí mismo.
            </p>
            <a className="telefono-gigante" href={TELEFONO_ENLACE}>
              {TELEFONO}
            </a>
            <div className="reserva-acciones">
              <a className="btn-solido" href={CORREO_EVALUACION}>
                Solicitar evaluación
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
                <dd>Lun–Vie 8:30–18:30</dd>
              </div>
              <div>
                <dt>Guardia técnica</dt>
                <dd>Sábados</dd>
              </div>
              <div>
                <dt>Dirección</dt>
                <dd>Las Condes, Santiago</dd>
              </div>
            </dl>
            <p className="reserva-soporte">¿Problema ahora? Llámanos: contesta un técnico, no un contestador.</p>
          </Revelar>
        </div>
        <aside className="reserva-lateral">
          <Revelar delay={150}>
            <div className="mapa-marco">
              <MapaLinea />
            </div>
            <p className="mapa-caption">Metro Manquehue, línea 1 · estacionamiento para visitas en el subsuelo.</p>
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
            ALTIVA
          </p>
          <p>ALTIVA SpA · RUT 77.412.630-8</p>
          <p>Av. Apoquindo 4700, of. 21, Las Condes, Santiago</p>
        </div>
        <nav className="pie-nav" aria-label="Mapa del sitio">
          <a href="#servicios">Servicios</a>
          <a href="#planes">Planes</a>
          <a href="#metodo">Método</a>
          <a href="#faq">Preguntas</a>
          <a href="#reserva">Evaluación</a>
        </nav>
        <div className="pie-contacto">
          <a href={TELEFONO_ENLACE}>{TELEFONO}</a>
          <a href={`mailto:${CORREO}`}>{CORREO}</a>
          <p>¿Problema ahora? Llámanos: Lun–Vie 8:30–18:30 · guardia técnica sábados.</p>
        </div>
      </div>
      <div className="contenedor pie-legal">
        <p>© {anio} ALTIVA SpA. Todos los derechos reservados.</p>
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
        Solicitar evaluación
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
        <Servicios />
        <Cifras />
        <Planes />
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
