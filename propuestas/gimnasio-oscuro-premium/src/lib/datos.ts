// FORJA — Centro de entrenamiento · contenido del sitio.
// "operacion": venta = clase abierta, arriendo = plan mensual.
// m2 = valor desde (miles CLP) · anio = duración en minutos.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Clase suelta" : "Plan mensual");
export const linea = (p: { m2: number }) => `Desde $${p.m2}.000`;

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
  nombre: "FORJA",
  sufijo: "Centro de Entrenamiento",
  kicker: "Fuerza y acondicionamiento · Quilicura · Santiago",
  claim: ["El cuerpo se", "forja. No se", "descarga."],
  sub: "Centro de entrenamiento de fuerza con coach en cada serie: programas escritos, cargas controladas y progresión medida. Sin espejos para posar: barras, plataformas y un plan que se cumple.",
  ctaPrimario: { texto: "Ver entrenamientos", a: "/clases" },
  ctaSecundario: { texto: "Clase de prueba", a: "/prueba" },
  telefono: "+56 9 4455 7788",
  telefonoHref: "tel:+56944557788",
  correo: "entrena@forja.cl",
  direccion: "Los Alisos 5800 · Quilicura, Santiago",
  horario: "Lunes a sábado 6:00–22:00 · horario continuado",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del centro.",
};

export const etiquetas = {
  catalogo: "Clases",
  catalogoUno: "Clase",
  captacion: "Prueba",
  nosotros: "El centro",
  fichaPlural: "clases",
};

export const rutas = {
  inicio: "/",
  catalogo: "/clases",
  ficha: "/clase",
  captacion: "/prueba",
  nosotros: "/centro",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Entrenamientos", a: "/entrenamientos" },
  { texto: "Prueba", a: "/prueba" },
  { texto: "El centro", a: "/centro" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Coach por serie", v: "siempre" },
  { k: "Programa escrito", v: "y medido" },
  { k: "Prueba con evaluación", v: "$15.000" },
];

export const comunas = ["Quilicura", "Renca", "Conchalí", "Huechuraba", "Colina", "Lampa"];

export const cita = {
  texto:
    "Dos años cargando sin saber y en tres semanas de FORJA aprendí más que en todo ese tiempo. Y mi espalda lo notó primero.",
  autor: "M. Bustos · alumno fuerza 2",
};

export const propiedades: Propiedad[] = [
  {
    id: "fuerza-inicial",
    ref: "FJ·01",
    titulo: "Fuerza inicial",
    operacion: "arriendo",
    tipo: "Fuerza",
    comuna: "Quilicura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 62,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Sentadilla, peso muerto y press aprendidos desde cero con barra liviana y coach al lado. Doce semanas para llegar al primer programa con técnica de verdad.",
    fotos: [media("barra.png"), media("pesas.png"), media("plataforma.png"), media("sala.png")],
    destacada: true,
    coord: [-33.362, -70.732],
  },
  {
    id: "fuerza-avanzada",
    ref: "FJ·02",
    titulo: "Fuerza avanzada",
    operacion: "arriendo",
    tipo: "Fuerza",
    comuna: "Quilicura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 72,
    estacionamientos: 0,
    anio: 75,
    descripcion:
      "Programas por ciclos con cargas periodizadas y control de RPE. Para quienes ya levantan y quieren números que suban sin lesiones que bajen.",
    fotos: [media("pesas.png"), media("barra.png"), media("plataforma.png")],
    destacada: true,
    coord: [-33.363, -70.731],
  },
  {
    id: "funcional",
    ref: "FJ·03",
    titulo: "Acondicionamiento funcional",
    operacion: "arriendo",
    tipo: "Funcional",
    comuna: "Quilicura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 58,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "Circuitos con kettlebells, trx y esquemas de tiempo. Grupos de 14 con coach corrigiendo, no contando. Condición física para la vida, no para el espejo.",
    fotos: [media("sala.png"), media("pesas.png"), media("plataforma.png")],
    destacada: true,
    coord: [-33.361, -70.733],
  },
  {
    id: "hiit",
    ref: "FJ·04",
    titulo: "HIIT de fuerza",
    operacion: "arriendo",
    tipo: "Funcional",
    comuna: "Quilicura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 55,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Intervalos de alta intensidad con base de fuerza: 45 minutos que queman la semana entera. Máximo 14, con escalas para cada nivel.",
    fotos: [media("plataforma.png"), media("sala.png")],
    coord: [-33.362, -70.733],
  },
  {
    id: "powerlifting",
    ref: "FJ·05",
    titulo: "Powerlifting",
    operacion: "arriendo",
    tipo: "Fuerza",
    comuna: "Quilicura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 85,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Grupo reducido con plataforma, discos calibrados y coach de competencia. Programas hacia meet o hacia el récord personal, con técnico de intentos incluido.",
    fotos: [media("barra.png"), media("sala.png")],
    coord: [-33.363, -70.732],
  },
  {
    id: "movilidad",
    ref: "FJ·06",
    titulo: "Movilidad y recuperación",
    operacion: "venta",
    tipo: "Movilidad",
    comuna: "Quilicura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 25,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "La clase que evita la lesión: caderas, hombros y tobillos trabajados con criterio de gimnasia y de kinesiología. Obligatoria para los que solo cargan.",
    fotos: [media("sala.png"), media("plataforma.png")],
    coord: [-33.361, -70.732],
  },
];

export const cifras = [
  { valor: 6, sufijo: "", etiqueta: "Años de centro", detalle: "Desde 2019 en Quilicura" },
  { valor: 1200, sufijo: "+", etiqueta: "Alumnos entrenados", detalle: "Con programa escrito" },
  { valor: 14, sufijo: "", etiqueta: "Máximo por grupo", detalle: "Con coach corrigiendo" },
  { valor: 12, sufijo: " sem", etiqueta: "Ciclos de programa", detalle: "Medidos y revisados" },
];

export const cartera = [
  { n: "01", titulo: "Plan mensual", texto: "Todos los entrenamientos y horarios, con programa escrito y control de cargas.", pie: "Desde $62.000/mes" },
  { n: "02", titulo: "Plan 3 veces", texto: "12 sesiones al mes para la semana que tiene semana.", pie: "$58.000/mes" },
  { n: "03", titulo: "Clase suelta", texto: "Con cupo reservado y coach asignado. Sin matrícula.", pie: "$15.000" },
  { n: "04", titulo: "Planes empresa", texto: "Turnos de mornings y tarifas por equipo. Para empresas de Quilicura norte.", pie: "Desde 5 personas" },
];

export const metodo = [
  { n: "01", titulo: "Evaluación de partida", texto: "Movilidad, fuerza base y historial de lesiones en 45 minutos. De ahí sale tu punto de partida real." },
  { n: "02", titulo: "Programa escrito", texto: "Doce semanas por ciclos: ejercicios, cargas y progresión. En papel y en la app, no de memoria." },
  { n: "03", titulo: "Coach en cada serie", texto: "Grupos de 14 con corrección nominal. La técnica se forja serie a serie, no con un circuito en YouTube." },
  { n: "04", titulo: "Medición de ciclo", texto: "Al cierre de cada ciclo se miden marcas y se reescribe el programa. Lo que sube, se documenta." },
];

export const equipo = [
  { iniciales: "DM", nombre: "Diego Muñoz", cargo: "Coach de fuerza · Fundador", detalle: "Powerlifter competitivo y formador de coaches." },
  { iniciales: "VA", nombre: "Valentina Arce", cargo: "Coach de funcional", detalle: "Acondicionamiento y HIIT con criterio postural." },
  { iniciales: "RG", nombre: "Rodrigo Gajardo", cargo: "Coach de powerlifting", detalle: "Preparación para meet y técnica de intentos." },
  { iniciales: "CM", nombre: "Carolina Mena", cargo: "Kinesióloga · Movilidad", detalle: "Prevención de lesión y vuelta al entrenamiento." },
];

export const testimonios = [
  { texto: "Mi sentadilla subió 30 kilos en un ciclo y sin dolor de rodilla. El programa escrito lo cambia todo.", autor: "F. Osorio", detalle: "Alumno · Fuerza avanzada" },
  { texto: "Vine a bajar de peso y me quedé por la técnica. El coach corrige de verdad.", autor: "P. Contreras", detalle: "Alumna · Funcional" },
  { texto: "La clase de movilidad me salvó la espalda de oficina. Debería ser obligatoria.", autor: "J. Farias", detalle: "Alumno · Movilidad" },
];

export const faq = [
  { p: "¿Puedo si nunca he levantado?", r: "Para eso existe fuerza inicial: barra liviana, coach al lado y doce semanas de técnica antes de cargar en serio." },
  { p: "¿Qué incluye la evaluación?", r: "Movilidad, fuerza base e historial de lesiones en 45 minutos. Sale de ahí tu programa del primer ciclo. Cuesta $15.000 y se descuenta del plan." },
  { p: "¿Son grupos grandes?", r: "No: máximo 14 con coach corrigiendo, y powerlifting en grupo reducido. Si se llena un horario, se abre otro." },
  { p: "¿Qué pasa si me lesiono afuera?", r: "La kinesióloga del equipo evalúa y adapta el programa: se entrena lo que se puede entrenar. El plan no se pierde." },
  { p: "¿Hay horarios temprano?", r: "Desde las 6:00 con coach. Los turnos de mornings tienen los grupos más fieles del centro." },
];

export const valoresGestion = {
  intro: "Planes escritos, precios frontales.",
  sub: "Sin matrículas ni contratos eternos: los planes se pausan por lesión o viaje sin costo.",
  filas: [
    { tipo: "Evaluación de partida", detalle: "45 minutos con programa", venta: "$15.000", arriendo: "se descuenta" },
    { tipo: "Clase suelta", detalle: "Con cupo y coach", venta: "$15.000", arriendo: "reserva app" },
    { tipo: "Plan 3 veces por semana", detalle: "12 sesiones al mes", venta: "$58.000/mes", arriendo: "pausable" },
    { tipo: "Plan libre", detalle: "Todos los horarios y formatos", venta: "$62.000/mes", arriendo: "programa incluido" },
  ],
};

// Paleta del hero 3D — noche, torres acero, ventanas ámbar.
export const tema3d = {
  noche: true,
  fondo: "#101113",
  niebla: "#101113",
  torre: "#1b1d21",
  torreTecho: "#101113",
  ventanas: "#d9a75f",
  ventanasAlt: "#f0cd92",
  acento: "#c98a3d",
  suelo: "#0b0c0e",
  estrellas: "#8b8f96",
};

export const textoVender = {
  kicker: "Prueba",
  titulo: "Ven a levantar con un plan, no con ansiedad.",
  sub: "Reserva tu evaluación de partida: 45 minutos que definen tu programa de doce semanas. Coach incluido desde la primera serie.",
  beneficios: [
    { titulo: "Evaluación real", texto: "Movilidad, fuerza base e historial. El programa sale de ahí, no de un template." },
    { titulo: "Coach en cada serie", texto: "Grupos de 14 máximo. La técnica se corrige serie a serie." },
    { titulo: "Programa medido", texto: "Ciclos de 12 semanas con marcas documentadas. Lo que sube, se ve." },
    { titulo: "Lesión no es baja", texto: "Kinesióloga en el equipo: se adapta el programa y se sigue entrenando." },
  ],
};

export const textoNosotros = {
  kicker: "El centro",
  titulo: "Un gimnasio con forma de taller.",
  parrafo1:
    "FORJA abre a las 6 de la mañana en Quilicura con un propósito: que levantar pesos sea un oficio que se aprende, no un video que se imita. Por eso cada serie tiene coach y cada ciclo, programa.",
  parrafo2:
    "El centro tiene barras, plataformas y discos calibrados. También una regla: nadie carga técnica que no tiene. Los números suben cuando la técnica sostiene — y eso se puede documentar en cada ciclo.",
  valores: [
    { titulo: "Técnica antes que kilos", texto: "Nadie carga lo que su técnica no sostiene. El programa respeta esa regla." },
    { titulo: "Todo por escrito", texto: "Programas, cargas y marcas. El progreso que no se mide, no existe." },
    { titulo: "Coach siempre", texto: "Grupos chicos con corrección nominal. Nunca un circuito a solas con un parlante." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "fullbleed", foto: "barra.png", marco: false, caption: "" };
