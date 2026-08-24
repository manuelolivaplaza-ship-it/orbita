// Vértice Sistemas — Fábrica de software premium · contenido del sitio.
// "operacion": venta = caso publicado, arriendo = en desarrollo.
// m2 = año del caso · anio = semanas de proyecto.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Caso publicado" : "En desarrollo");
export const linea = (p: { m2: number }) => `Año ${p.m2}`;

export interface Propiedad {
  id: string;
  ref: string;
  titulo: string;
  operacion: Operacion;
  tipo: string;
  comuna: string;
  precioUF: number;
  gastosComunes: number;
  dormitorios: number;
  banos: number;
  m2: number;
  terrenoM2?: number;
  estacionamientos: number;
  anio: number;
  descripcion: string;
  fotos: string[];
  destacada?: boolean;
  coord: [number, number];
}

const media = (n: string) => `${import.meta.env.BASE_URL}media/${n}`;

export const marca = {
  nombre: "Vértice",
  sufijo: "Sistemas",
  kicker: "Ingeniería de software premium · Santiago de Chile",
  claim: ["El software que", "sostiene el negocio", "cuando todo escala."],
  sub: "Fábrica de software para sistemas críticos: plataformas financieras, alta concurrencia y cumplimiento normativo. Arquitectura documentada, SLA real y un equipo que responde a las 3 AM si hace falta.",
  ctaPrimario: { texto: "Ver casos", a: "/casos" },
  ctaSecundario: { texto: "Cotizar proyecto", a: "/servicios" },
  telefono: "+56 2 2756 8899",
  telefonoHref: "tel:+56227568899",
  correo: "ingenieria@verticesistemas.cl",
  direccion: "Isidora Goyenechea 3100, piso 12 · Las Condes",
  horario: "Lunes a viernes 9:00–19:00 · guardia 24/7 para clientes SLA",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la empresa.",
};

export const etiquetas = {
  catalogo: "Casos",
  catalogoUno: "Caso",
  captacion: "Servicios",
  nosotros: "La empresa",
  fichaPlural: "casos",
};

export const rutas = {
  inicio: "/",
  catalogo: "/casos",
  ficha: "/caso",
  captacion: "/servicios",
  nosotros: "/empresa",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Casos", a: "/casos" },
  { texto: "Servicios", a: "/servicios" },
  { texto: "La empresa", a: "/empresa" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "SLA", v: "24/7 real" },
  { k: "Uptime 2024", v: "99,98%" },
  { k: "Normativa", v: "cumplimiento integrado" },
];

export const comunas = ["Las Condes", "Vitacura", "Santiago", "Providencia", "Remoto", "Todo Chile"];

export const cita = {
  texto:
    "El 18 de septiembre a las 2 AM se cayó el proveedor de pagos. Vértice respondió antes que nuestro propio equipo. Ese día entendimos qué estábamos pagando.",
  autor: "Claudia Barros · CTO, plataforma de retail",
};

export const propiedades: Propiedad[] = [
  {
    id: "pasarela-pagos",
    ref: "VS·01",
    titulo: "Pasarela de pagos: 40.000 transacciones por hora",
    operacion: "venta",
    tipo: "Fintech crítico",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 36,
    descripcion:
      "Pasarela con picos de CyberDay que caía con cada campaña. Reingeniería completa: arquitectura reactiva, colas y observabilidad total. Resultado: 40 mil transacciones/hora con 99,98% de uptime anual.",
    fotos: [media("monolito.png"), media("cubos.png"), media("laminas.png"), media("oficina.png")],
    destacada: true,
    coord: [-33.416, -70.555],
  },
  {
    id: "core-asegurador",
    ref: "VS·02",
    titulo: "Core de seguros con cumplimiento auditable",
    operacion: "venta",
    tipo: "Sistema crítico",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 52,
    descripcion:
      "Emisión de pólizas sobre un mainframe de los 90. Core nuevo con trazabilidad normativa completa y migración por cohortes sin corte de servicio. Resultado: emisión en 40 segundos, auditoría en un clic.",
    fotos: [media("cubos.png"), media("oficina.png"), media("monolito.png")],
    destacada: true,
    coord: [-33.44, -70.653],
  },
  {
    id: "bolsa-nacional",
    ref: "VS·03",
    titulo: "Plataforma de corretaje con latencia de bolsa",
    operacion: "venta",
    tipo: "Fintech crítico",
    comuna: "Vitacura",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Corretora con órdenes que se perdían en horario de apertura. Motor de órdenes con colas persistentes y backpressure real. Resultado: cero órdenes perdidas en 18 meses de operación.",
    fotos: [media("laminas.png"), media("monolito.png"), media("cubos.png")],
    destacada: true,
    coord: [-33.393, -70.598],
  },
  {
    id: "salud-interoperabilidad",
    ref: "VS·04",
    titulo: "Interoperabilidad de red de clínicas",
    operacion: "venta",
    tipo: "Integración",
    comuna: "Santiago",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 30,
    descripcion:
      "Seis clínicas, seis sistemas, una historia clínica por sitio. Plataforma HL7/FHIR con expediente unificado y consentimiento del paciente. Resultado: la interlección médica bajó de horas a segundos.",
    fotos: [media("oficina.png"), media("laminas.png")],
    coord: [-33.43, -70.65],
  },
  {
    id: "open-banking",
    ref: "VS·05",
    titulo: "APIs Open Banking para banco mediano",
    operacion: "arriendo",
    tipo: "Fintech crítico",
    comuna: "Santiago",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2025,
    estacionamientos: 0,
    anio: 44,
    descripcion:
      "Exposición de APIs bancarias bajo la nueva normativa con seguridad, versionamiento y developer portal. En desarrollo: certificación regulatoria y go-live por fases.",
    fotos: [media("monolito.png"), media("oficina.png")],
    coord: [-33.437, -70.65],
  },
];

export const cifras = [
  { valor: 14, sufijo: "", etiqueta: "Años de ingeniería", detalle: "Sistemas críticos desde 2011" },
  { valor: 99.98, sufijo: "%", etiqueta: "Uptime 2024", detalle: "Promedio de plataformas en SLA" },
  { valor: 40, sufijo: " mil/h", etiqueta: "Transacciones sostenidas", detalle: "Pico de pasarela de pagos" },
  { valor: 24, sufijo: "/7", etiqueta: "Guardia real", detalle: "Para clientes con SLA" },
];

export const cartera = [
  { n: "01", titulo: "Fintech crítico", texto: "Pasarelas, cores y motores donde cada caída es dinero y confianza.", pie: "Desde UF 200" },
  { n: "02", titulo: "Sistemas regulados", texto: "Cumplimiento auditable construido dentro del sistema, no encima.", pie: "Desde UF 180" },
  { n: "03", titulo: "Plataformas de alta concurrencia", texto: "Arquitectura reactiva para picos que antes tumaban todo.", pie: "Desde UF 150" },
  { n: "04", titulo: "SLA y operación 24/7", texto: "Guardia real, monitoreo y respuesta con acuerdos que se cumplen.", pie: "Planes anuales" },
];

export const metodo = [
  { n: "01", titulo: "Arquitectura primero", texto: "Antes de una línea de código: documento de arquitectura con decisiones y sus costos, revisado con su equipo técnico." },
  { n: "02", titulo: "Entregas quincenales auditables", texto: "Ambiente de staging desde la semana dos y métricas de calidad en cada entrega: cobertura, latencia y deuda técnica visible." },
  { n: "03", titulo: "Documentación viva", texto: "La arquitectura se actualiza con el código. Cuando alguien pregunta en dos años, la respuesta existe." },
  { n: "04", titulo: "SLA con dientes", texto: "Guardia 24/7, tiempos de respuesta escritos y postmortems públicos para el cliente. El 99,98% no es un slogan: es un promedio." },
];

export const equipo = [
  { iniciales: "RF", nombre: "Rodrigo Fuentealba", cargo: "Arquitecto de software · Fundador", detalle: "14 años de sistemas financieros críticos." },
  { iniciales: "MC", nombre: "Macarena Cotapos", cargo: "Tech lead", detalle: "Arquitectura reactiva y observabilidad." },
  { iniciales: "DG", nombre: "Diego Green", cargo: "Site reliability engineer", detalle: "SLA, monitoreo y guardias." },
  { iniciales: "PA", nombre: "Paula Aguirre", cargo: "Ingeniera de calidad", detalle: "Pruebas de carga y caos." },
];

export const testimonios = [
  { texto: "El CyberDay pasó sin un incidente. El año anterior habíamos caído tres veces.", autor: "Retail nacional", detalle: "Cliente · Pasarela" },
  { texto: "La auditoría de la CMF se resolvió con un clic y un documento de arquitectura. Antes eran dos semanas de papeles.", autor: "CEO aseguradora", detalle: "Cliente · Core" },
  { texto: "Responden a las 3 AM. Esa frase resume por qué renovamos cada año.", autor: "C. Barros", detalle: "Cliente · SLA" },
];

export const faq = [
  { p: "¿Cuánto cuesta un sistema crítico?", r: "Los proyectos parten en UF 150 con arquitectura incluida. Sabemos que no somos la opción barata: somos la que responde a las 3 AM." },
  { p: "¿Qué incluye el SLA?", r: "Guardia 24/7 con tiempos de respuesta escritos, monitoreo proactivo y postmortem documentado de cada incidente. El 99,98% de 2024 es el promedio medible." },
  { p: "¿Trabajan con nuestro equipo interno?", r: "Sí: co-desarrollo con revisión cruzada y traspaso de conocimiento programado. El objetivo es que su equipo pueda operar el sistema sin nosotros." },
  { p: "¿Migran sistemas antiguos sin cortar el servicio?", r: "Es nuestra especialidad: migraciones por cohortes con paralelismo y rollback en cada fase. El core asegurador se migró sin un día de corte." },
  { p: "¿Qué pasa con la documentación?", r: "Viva y en el repositorio: se actualiza con el código. La arquitectura de su sistema se puede leer dentro de cinco años." },
];

export const valoresGestion = {
  intro: "Ingeniería premium, números frontales.",
  sub: "Cada proyecto incluye arquitectura documentada y ambiente de staging. El SLA se firma con términos medibles.",
  filas: [
    { tipo: "Arquitectura y discovery", detalle: "Documento de decisiones", venta: "UF 15–25", arriendo: "se descuenta" },
    { tipo: "Sistema crítico", detalle: "Desarrollo completo + staging", venta: "UF 150–400", arriendo: "por proyecto" },
    { tipo: "SLA 24/7", detalle: "Guardia + monitoreo + postmortem", venta: "UF 25/mes", arriendo: "acuerdo medible" },
    { tipo: "Auditoría técnica", detalle: "De sistemas existentes", venta: "UF 10–18", arriendo: "con informe" },
  ],
};

// Paleta del hero 3D — noche tecnológica, ventanas frías.
export const tema3d = {
  noche: true,
  fondo: "#0e1013",
  niebla: "#0e1013",
  torre: "#191d24",
  torreTecho: "#0e1013",
  ventanas: "#7fb0d9",
  ventanasAlt: "#b7d3e8",
  acento: "#4f8fc4",
  suelo: "#0a0c0e",
  estrellas: "#8f9aa8",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Cuando el sistema no se puede caer, hay que construirlo bien.",
  sub: "Postule su proyecto: arquitectura documentada primero, entregas quincenales auditables y un SLA que se cumple con promedios medibles.",
  beneficios: [
    { titulo: "Arquitectura primero", texto: "Documento de decisiones con costos, revisado con su equipo antes de programar." },
    { titulo: "SLA con dientes", texto: "Guardia 24/7 real y postmortems documentados. 99,98% medido, no prometido." },
    { titulo: "Sin corte de servicio", texto: "Migraciones por cohortes con rollback en cada fase." },
    { titulo: "Documentación viva", texto: "La arquitectura se actualiza con el código. Se puede leer en cinco años." },
  ],
};

export const textoNosotros = {
  kicker: "La empresa",
  titulo: "Ingeniería para sistemas que no se pueden caer.",
  parrafo1:
    "Vértice nació en 2011 construyendo lo que otros no querían tocar: sistemas donde cada caída es dinero perdido o confianza rota. Catorce años después, seguimos eligiendo esos proyectos.",
  parrafo2:
    "Somos ingenieros senior con disciplina de industria crítica: arquitectura documentada, métricas visibles y guardia real. El 99,98% de uptime de 2024 no es marketing: es el promedio de nuestras plataformas bajo SLA.",
  valores: [
    { titulo: "Medible o no existe", texto: "Uptime, latencia y cobertura: números auditables en cada informe." },
    { titulo: "Disciplina crítica", texto: "Arquitectura primero, postmortems siempre, atajos nunca." },
    { titulo: "Responder de verdad", texto: "Guardia 24/7 para clientes SLA. A las 3 AM también." },
  ],
};
