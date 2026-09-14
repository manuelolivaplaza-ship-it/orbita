// VALPARAÍSO ASESORES LEGALES — todo el contenido del sitio vive acá.
// "operacion": venta = atención permanente, arriendo = por proyecto.
// m2 = casos gestionados · dormitorios = abogados del área.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Atención permanente" : "Por proyecto");
export const linea = (p: { m2: number }) => `${p.m2}+ casos`;

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
  nombre: "VALPARAÍSO",
  sufijo: "Asesores Legales",
  kicker: "Asesoría legal y notarial · Valparaíso — Viña del Mar · desde 2001",
  claim: ["Asesoría legal", "con vista", "al largo plazo."],
  sub: "Estudio jurídico y de gestión notarial de la Quinta Región: contratos, sociedades, propiedades y sucesiones con honorarios fijos y plazos que se cumplen. Atención presencial y remota en todo Chile.",
  ctaPrimario: { texto: "Ver áreas de práctica", a: "/areas" },
  ctaSecundario: { texto: "Solicitar consulta", a: "/servicios" },
  telefono: "+56 32 225 8840",
  telefonoHref: "tel:+56322258840",
  correo: "asesorias@valparaisolegal.cl",
  direccion: "Calle Prat 855, of. 604 · Valparaíso",
  horario: "Lunes a viernes 9:00–18:00 · sábados con cita",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del estudio.",
};

export const etiquetas = {
  catalogo: "Áreas",
  catalogoUno: "Área",
  captacion: "Servicios",
  nosotros: "El estudio",
  fichaPlural: "áreas",
};

export const rutas = {
  inicio: "/",
  catalogo: "/areas",
  ficha: "/area",
  captacion: "/servicios",
  nosotros: "/estudio",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Áreas", a: "/areas" },
  { texto: "Servicios", a: "/servicios" },
  { texto: "Estudio", a: "/estudio" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Años en la región", v: "23" },
  { k: "Honorario fijo", v: "por escrito" },
  { k: "Primera consulta", v: "sin costo" },
];

export const comunas = ["Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "Santiago"];

export const cita = {
  texto:
    "Vendimos un sitio en Concón con tres herederos en distintas ciudades. Todo por video y poderes, saldado en dos meses.",
  autor: "Hermanas Cárdenas · cliente sucesiones",
};

export const propiedades: Propiedad[] = [
  {
    id: "sucesiones",
    ref: "VP·01",
    titulo: "Sucesiones y herencias",
    operacion: "venta",
    tipo: "Familia",
    comuna: "Valparaíso",
    precioUF: 2001,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 680,
    estacionamientos: 0,
    anio: 2001,
    descripcion:
      "Posesiones efectivas online completas —Registro Civil, SII y Conservador— incluida la partición de inmuebles. Herederos en distintas ciudades: poderes y firmas remotas coordinadas por nosotros.",
    fotos: [media("pluma.png"), media("sala.png"), media("pasillo.png"), media("textura.png")],
    destacada: true,
    coord: [-33.046, -71.62],
  },
  {
    id: "inmobiliario-region",
    ref: "VP·02",
    titulo: "Inmobiliario en la región",
    operacion: "venta",
    tipo: "Inmobiliario",
    comuna: "Viña del Mar",
    precioUF: 2003,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 520,
    estacionamientos: 0,
    anio: 2003,
    descripcion:
      "Compraventas de casas, departamentos y sitios con estudio de títulos incluido. Revisión de copropiedades, proyectos nuevos y contratos de promesa para inversionistas de la región y Santiago.",
    fotos: [media("sala.png"), media("pasillo.png"), media("pluma.png")],
    destacada: true,
    coord: [-33.024, -71.551],
  },
  {
    id: "notarial",
    ref: "VP·03",
    titulo: "Gestión notarial y poderes",
    operacion: "venta",
    tipo: "Notarial",
    comuna: "Valparaíso",
    precioUF: 2005,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 840,
    estacionamientos: 0,
    anio: 2005,
    descripcion:
      "Poderes para trámites en Chile y el extranjero, firmas con hora agendada, y gestiones completas en notarías, conservador y registro civil. Para quienes no pueden viajar: coordinación total remota.",
    fotos: [media("pasillo.png"), media("pluma.png")],
    destacada: true,
    coord: [-33.045, -71.621],
  },
  {
    id: "turismo-propiedades",
    ref: "VP·04",
    titulo: "Turismo y propiedades costeras",
    operacion: "arriendo",
    tipo: "Inmobiliario",
    comuna: "Concón",
    precioUF: 2012,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 130,
    estacionamientos: 0,
    anio: 2012,
    descripcion:
      "Asesoría para compra y arriendo de propiedades turísticas: concesiones costeras, servidumbres, y contratos de temporada que protegen al dueño entre arriendo y arriendo.",
    fotos: [media("textura.png"), media("sala.png")],
    coord: [-32.927, -71.523],
  },
  {
    id: "pymes-region",
    ref: "VP·05",
    titulo: "Pymes de la región",
    operacion: "arriendo",
    tipo: "Corporativo",
    comuna: "Quilpué",
    precioUF: 2015,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 210,
    estacionamientos: 0,
    anio: 2015,
    descripcion:
      "Constitución de empresas, contratos laborales y comerciales, y cobranzas para el comercio y la industria de la región. Plan mensual para el negocio que no necesita un abogado en planta.",
    fotos: [media("pluma.png"), media("textura.png")],
    coord: [-33.047, -71.443],
  },
  {
    id: "arriendos",
    ref: "VP·06",
    titulo: "Arriendos administrados",
    operacion: "venta",
    tipo: "Civil",
    comuna: "Viña del Mar",
    precioUF: 2008,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 350,
    estacionamientos: 0,
    anio: 2008,
    descripcion:
      "Contratos de arriendo con garantías reales, depósitos en custodia y desalojos cuando fallan. Para dueños que viven lejos de la propiedad: administración legal completa del arriendo.",
    fotos: [media("sala.png")],
    coord: [-33.022, -71.548],
  },
];

export const cifras = [
  { valor: 23, sufijo: "", etiqueta: "Años en la región", detalle: "Fundado en 2001" },
  { valor: 2730, sufijo: "+", etiqueta: "Gestiones completadas", detalle: "Legales y notariales" },
  { valor: 96, sufijo: "%", etiqueta: "Dentro del plazo", detalle: "Gestiones en el tiempo prometido" },
  { valor: 6, sufijo: "", etiqueta: "Comunas", detalle: "De Valparaíso a Santiago" },
];

export const cartera = [
  { n: "01", titulo: "Gestiones fijas", texto: "Poderes, posesiones efectivas y compraventas con honorario fijo y plazo escrito.", pie: "Desde UF 3" },
  { n: "02", titulo: "Plan pyme", texto: "Abogado asignado para el negocio: contratos, laboral y cobranzas.", pie: "Desde $150.000/mes" },
  { n: "03", titulo: "Remoto completo", texto: "Herederos y clientes fuera de la región atendidos por video y poderes.", pie: "En todo Chile" },
  { n: "04", titulo: "Litigio regional", texto: "Juicios civiles y de familia ante los tribunales de Valparaíso y Viña.", pie: "Por etapa" },
];

export const metodo = [
  { n: "01", titulo: "Consulta sin costo", texto: "Presencial en Prat o por video. Sale con el trámite explicado, el honorario fijo y el plazo real." },
  { n: "02", titulo: "Honorario fijo y plazo", texto: "Cada gestión se cota cerrada y con fecha de término. El 96% se cumple dentro del plazo prometido." },
  { n: "03", titulo: "Gestión coordinada", texto: "Notarías, conservador y registros los gestionamos nosotros. Usted firma y nada más." },
  { n: "04", titulo: "Entrega documentada", texto: "Carpeta digital completa con inscripción, certificados y siguiente paso anotado." },
];

export const equipo = [
  { iniciales: "EV", nombre: "Elena Valdés", cargo: "Directora · Sucesiones", detalle: "23 años de práctica sucesoria en la región." },
  { iniciales: "CM", nombre: "Cristián Molina", cargo: "Abogado · Inmobiliario", detalle: "Estudio de títulos y proyectos costeros." },
  { iniciales: "PR", nombre: "Paula Reyes", cargo: "Abogada · Notarial", detalle: "Poderes y gestiones internacionales." },
  { iniciales: "DS", nombre: "Diego San Martín", cargo: "Abogado · Pymes", detalle: "Contratos, laboral y cobranzas." },
];

export const testimonios = [
  { texto: "La posesión efectiva con casa en Reñaca y herederos en tres países. Todo remotamente.", autor: "Sucesión Bustos", detalle: "Cliente · Sucesiones" },
  { texto: "Compramos nuestro departamento en Viña desde Santiago. El estudio de títulos evitó una hipoteca vieja.", autor: "Familia Rosas", detalle: "Clientes · Inmobiliario" },
  { texto: "El plan pyme nos ordenó contratos y finiquitos en dos meses. La cobranza incluida ya se pagó sola.", autor: "Distribuidora del Puerto", detalle: "Cliente · Pymes" },
];

export const faq = [
  { p: "¿Puedo hacer todo sin viajar a Valparaíso?", r: "Sí. La mayoría de las gestiones se resuelven con video, poderes electrónicos y coordinación con notarías. Viajar solo si quiere conocer el mar." },
  { p: "¿Cuánto demora una posesión efectiva?", r: "Entre 4 y 8 meses incluyendo SII, inscripción y partición si hay inmuebles. Le entregamos plazo por escrito al inicio." },
  { p: "¿Cobran honorario por hora?", r: "Las gestiones van con honorario fijo. Solo el litigio se cota por etapa. Nada de horas sorpresa." },
  { p: "¿Atienden clientes de Santiago?", r: "Sí, especialmente sucesiones y propiedades en la región. La coordinación es remota y las firmas, con hora." },
  { p: "¿Qué pasa si el trámite se atrasa?", r: "Le avisamos antes del vencimiento del plazo con la causa del atraso y la nueva fecha. El 96% de las gestiones se entrega en plazo." },
];

export const valoresGestion = {
  intro: "Honorario fijo, plazo escrito.",
  sub: "Cada gestión se cota cerrada y con fecha de término. Si nos atrasamos por causa nuestra, el seguimiento no se cobra.",
  filas: [
    { tipo: "Primera consulta", detalle: "Presencial o video", venta: "Sin costo", arriendo: "20 minutos" },
    { tipo: "Posesión efectiva completa", detalle: "Incluida la partición simple", venta: "UF 6–14", arriendo: "plazo 4–8 meses" },
    { tipo: "Compraventa con estudio", detalle: "Títulos, contrato e inscripción", venta: "UF 4–8", arriendo: "precio fijo" },
    { tipo: "Plan pyme", detalle: "Abogado asignado mensual", venta: "$150.000/mes", arriendo: "incluye cobranzas" },
  ],
};

// Paleta del hero 3D — noche azulada, torres grafito, ventanas doradas.
export const tema3d = {
  noche: true,
  fondo: "#101418",
  niebla: "#101418",
  torre: "#1a2026",
  torreTecho: "#101418",
  ventanas: "#dcc084",
  ventanasAlt: "#f0dcae",
  acento: "#b9975b",
  suelo: "#0b0e11",
  estrellas: "#8f9aa4",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "El trámite explicado, el precio cerrado.",
  sub: "Cuéntenos su gestión: herencias, compraventas, poderes o su empresa. Le respondemos con honorario fijo y plazo por escrito.",
  beneficios: [
    { titulo: "Honorario fijo", texto: "Cada gestión cotizada cerrada. Ni horas ni sorpresas." },
    { titulo: "Plazo por escrito", texto: "Fecha de término comprometida al inicio. El 96% se cumple." },
    { titulo: "Todo remoto si prefiere", texto: "Video, poderes electrónicos y coordinación con notarías." },
    { titulo: "Región y país", texto: "Valparaíso, Viña y Santiago, con herederos donde sea." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "La región, bien asesorada.",
  parrafo1:
    "Valparaíso Asesores Legales nació en 2001 frente al mar, con los trámites a la vista: herencias con herederos lejos, propiedades de veraneo y pymes que crecieron con la región.",
  parrafo2:
    "Hemos digitalizado el estudio sin perder el trato: honorarios fijos por escrito, plazos comprometidos y una coordinación notarial que evita las filas. La asesoría de ciudad grande con los modos del puerto.",
  valores: [
    { titulo: "Precio cerrado", texto: "Toda gestión se cota fija, con plazo. Simple de entender y de presupuestar." },
    { titulo: "Sin filas", texto: "Las gestiones notariales las coordinamos nosotros. Usted firma y sigue." },
    { titulo: "Cerca, aunque lejos", texto: "Clientes de todo Chile atendidos por video y poderes." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "fullbleed", foto: "pasillo.png", marco: false, caption: "" };
