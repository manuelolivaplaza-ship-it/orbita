export const site = {
  name: "Meridiano",
  legal: "Meridiano Estudio SpA",
  rut: "76.548.221-4",
  descriptor: "Taller de software",
  tagline: "Software con norte.",
  description:
    "Taller de producto e ingeniería en Providencia. Diseñamos y construimos los sistemas que ordenan una operación real. Primero el eje. Después el resto.",
  url: "https://meridiano.cl",
  locale: "es_CL",
  email: "hola@meridiano.cl",
  phone: "+56 2 2847 3310",
  phoneHref: "tel:+56228473310",
  whatsapp: "+56 9 7847 3310",
  whatsappHref:
    "https://wa.me/56978473310?text=Hola%20Meridiano%2C%20quiero%20pedir%20un%20levantamiento.",
  address: {
    street: "Av. Providencia 1936, piso 7",
    city: "Santiago",
    commune: "Providencia",
    country: "Chile",
    maps: "https://maps.google.com/?q=Avenida+Providencia+1936+Santiago",
  },
  coords: {
    lat: -33.4247,
    lon: -70.6108,
    label: "33°25′29″ S · 70°36′39″ O",
    short: "33.42°S  70.61°O",
  },
  hours: "Lunes a jueves, 9:30 a 18:30 · Viernes, 9:30 a 14:30",
  founded: 2018,
  people: 11,
  social: {
    linkedin: "https://www.linkedin.com/company/meridiano-estudio",
  },
} as const;

export const nav = [
  { href: "/obra", label: "Obra", sheet: "01" },
  { href: "/oficio", label: "Oficio", sheet: "02" },
  { href: "/taller", label: "Taller", sheet: "03" },
] as const;

export const sheets: Record<string, string> = {
  "/": "00",
  "/obra": "01",
  "/oficio": "02",
  "/taller": "03",
  "/contacto": "04",
  "/privacidad": "05",
};

export const clients = [
  { name: "Hidrocuenca", lat: "33.5°S" },
  { name: "Salmones Puelche", lat: "41.3°S" },
  { name: "Ruta del Maipo", lat: "33.6°S" },
  { name: "Forestal Luma", lat: "37.8°S" },
  { name: "Mutual Austral", lat: "33.4°S" },
  { name: "Cooperativa Pehuén", lat: "38.7°S" },
  { name: "Energía Pampa", lat: "24.3°S" },
  { name: "Caja Cordillera", lat: "33.4°S" },
  { name: "Terminal Andes", lat: "32.8°S" },
  { name: "Editorial Trama", lat: "33.4°S" },
] as const;

export const services = [
  {
    slug: "operacion",
    index: "01",
    title: "Sistemas de operación",
    lede: "El software que mueve la faena cuando nadie presenta un slide.",
    body: "Torres de control, redes, turnos, patio, packing, peaje, planta. Modelamos la operación con sus excepciones — no con el proceso que cabe en una pizarra — y la dejamos corriendo en el turno de las tres.",
    includes: [
      "Levantamiento en terreno, no en sala",
      "Modelo de datos que coincide con el oficio",
      "Interfaces para uso intensivo",
      "Integración con lo que ya existe y no se va a ir",
    ],
  },
  {
    slug: "producto",
    index: "02",
    title: "Producto hacia afuera",
    lede: "La cara que ve el cliente, el socio, el inspector.",
    body: "Portales, apps y escritorios para quien está del otro lado del mostrador. Una tesis clara: qué problema, para quién, qué se puede posponer. Lanzamos en cortes, no en grandes revelaciones.",
    includes: [
      "Tesis de producto en una hoja",
      "Arquitectura de información",
      "Ingeniería de punta a punta",
      "Puesta en marcha y medición",
    ],
  },
  {
    slug: "eje",
    index: "03",
    title: "Integración y datos",
    lede: "El eje que sostiene el resto. Sin él, cada pantalla inventa su verdad.",
    body: "APIs, eventos, padrones, una fuente que el lunes a las 7.40 todavía es cierta. Menos tableros de teatro. Más un número que el turno y la gerencia pueden leer igual.",
    includes: [
      "Arquitectura y decisiones escritas",
      "Eventos y contratos entre sistemas",
      "Calidad, pruebas, despliegue",
      "Datos para decidir, no para decorar",
    ],
  },
  {
    slug: "compania",
    index: "04",
    title: "Compañía",
    lede: "No desaparecemos el viernes del go-live.",
    body: "Un equipo chico, embebido, que sigue el sistema hasta que es de ustedes. Bitácora, traspaso, y la disciplina de no inventar un módulo para cada ansiedad.",
    includes: [
      "Squad a la medida del encargo",
      "Documentación que se consulta",
      "Acompañamiento al equipo interno",
      "Evolución por cortes, con norte",
    ],
  },
] as const;

export const method = [
  {
    index: "01",
    title: "Estación",
    time: "2 semanas",
    body: "Nos sentamos en la operación. Turno, planilla, radio, el café de las once. El software se diseña desde ahí, no desde un workshop de post-its.",
  },
  {
    index: "02",
    title: "Norte",
    time: "1 hoja",
    body: "El problema en una frase. El usuario en una persona real. El corte que se puede levantar en ochenta días. Si no cabe en una lámina, todavía no está claro.",
  },
  {
    index: "03",
    title: "Trazado",
    time: "semanas",
    body: "Diseño e ingeniería en la misma mesa. Cada semana, algo que se puede pulsar. Las decisiones quedan en bitácora. Lo que no entra, se deja fuera con nombre.",
  },
  {
    index: "04",
    title: "Entrega",
    time: "hasta que es de ustedes",
    body: "Documentación viva, métricas, un equipo que puede seguir. Acompañamos el primer invierno del sistema. Después, el norte es de la empresa.",
  },
] as const;

export const principles = [
  {
    title: "Primero el eje",
    body: "Antes de la interfaz, el modelo. Antes del modelo, la operación. Si el norte no está escrito, construimos teatro.",
  },
  {
    title: "El turno es el juez",
    body: "Si no se entiende a las tres de la mañana, no está listo. El usuario no es un persona en Figma: es quien opera.",
  },
  {
    title: "Una fuente de verdad",
    body: "Cada número vive en un solo lugar. El resto lee. El correo deja de ser el sistema de registro.",
  },
  {
    title: "Cortes, no revelaciones",
    body: "Algo que se puede pulsar cada semana. Lo que no entra en el corte tiene nombre, no se esconde en un backlog eterno.",
  },
] as const;

export const stats = [
  { value: "2018", label: "Providencia, desde entonces" },
  { value: "28", label: "Sistemas en operación" },
  { value: "11", label: "Personas en el taller" },
  { value: "1", label: "Oficio: orientar" },
] as const;
