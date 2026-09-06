export const site = {
  name: "Sextante",
  legal: "Sextante SpA",
  rut: "77.604.218-5",
  descriptor: "Estudio de software",
  tagline: "Primero la mira.",
  description:
    "Estudio de software en el plan de Valparaíso. Tomamos altura de la operación — puerto, flota, planta — y recién entonces construimos el sistema. Si no se puede mirar, no se puede zarpar.",
  url: "https://sextante.cl",
  locale: "es_CL",
  email: "hola@sextante.cl",
  phone: "+56 9 7618 4402",
  phoneHref: "tel:+56976184402",
  whatsapp: "+56 9 7618 4402",
  whatsappHref:
    "https://wa.me/56976184402?text=Hola%20Sextante%2C%20quiero%20pedir%20una%20mira.",
  address: {
    street: "Blanco 1199, of. 4",
    city: "Valparaíso",
    commune: "Valparaíso",
    country: "Chile",
    maps: "https://maps.google.com/?q=Blanco+1199+Valparaiso",
  },
  coords: {
    lat: -33.0389,
    lon: -71.6281,
    label: "33°02′20″ S · 71°37′41″ O",
    short: "33.04°S  71.63°O",
  },
  metro: "Metro Puerto · 4 min a pie",
  hours: "Lunes a jueves, 9:30 a 18:30 · Viernes, 9:30 a 15:00",
  hoursShort: "Lun–Jue 9:30–18:30 · Vie 9:30–15:00",
  note: "El tren Santiago–Valparaíso, 1 h 20. Los viernes el taller cierra cuando parte el de las 16:10.",
  founded: 2017,
  people: 8,
  social: {
    linkedin: "https://www.linkedin.com/company/sextante-cl",
  },
} as const;

export const nav = [
  { href: "/obra", label: "Obra" },
  { href: "/oficio", label: "Oficio" },
  { href: "/taller", label: "Taller" },
] as const;

export const services = [
  {
    slug: "operacion",
    title: "Sistemas de operación",
    lede: "El software que mueve el muelle, la cámara, la flota — cuando el turno no presenta un slide.",
    body: "Torres de control, patios, packing, despacho, frío, pontón. Modelamos la operación con sus excepciones y la dejamos corriendo en el turno de las tres. Si hay que explicarlo con el radio en la mano, todavía no está listo.",
    includes: [
      "Estación en terreno, no en sala de directorio",
      "Modelo con las palabras del oficio",
      "Interfaces para uso intensivo y mala señal",
      "Integración con lo que ya existe y no se va a ir",
    ],
  },
  {
    slug: "producto",
    title: "Producto hacia afuera",
    lede: "La cara que ve el cliente, el inspector, el socio del otro lado del mostrador.",
    body: "Portales, apps y escritorios con una sola tesis: qué problema, para quién, qué se puede posponer. Lanzamos en cortes. La revelación grande es un lujo que la operación no se puede permitir.",
    includes: [
      "Tesis de producto en una hoja",
      "Arquitectura de información",
      "Ingeniería de punta a punta",
      "Puesta en marcha y medición",
    ],
  },
  {
    slug: "horizonte",
    title: "Integración y datos",
    lede: "El horizonte contra el que se toma altura. Sin él, cada pantalla inventa su verdad.",
    body: "APIs, eventos, padrones, una fuente que el lunes a las 7.40 todavía es cierta. Menos tableros de teatro. Más un número que el turno y la gerencia leen igual.",
    includes: [
      "Arquitectura y decisiones escritas",
      "Contratos entre sistemas",
      "Calidad, pruebas, despliegue",
      "Datos para decidir, no para decorar",
    ],
  },
  {
    slug: "compania",
    title: "Compañía",
    lede: "No desaparecemos el viernes del go-live.",
    body: "Un equipo chico, embebido, que sigue el sistema hasta que es de ustedes. Bitácora, traspaso, y la disciplina de no inventar un módulo para cada ansiedad.",
    includes: [
      "Squad a la medida del encargo",
      "Documentación que se consulta",
      "Acompañamiento al equipo interno",
      "Evolución por cortes, con rumbo",
    ],
  },
] as const;

export const encargo = [
  {
    name: "Mira",
    time: "2 semanas",
    price: 90,
    unit: "desde",
    body: "Nos sentamos en la operación. Radio, planilla, el café de las once. Salimos con una lectura: el sistema dibujado, la tesis en una hoja, lo que no entra y por qué.",
  },
  {
    name: "Sistema",
    time: "4–7 meses",
    price: 480,
    unit: "desde",
    body: "Diseño e ingeniería del sistema de operación. Primer corte en producción, con gente real y datos reales. Lo que no entra al corte tiene nombre.",
  },
  {
    name: "Producto",
    time: "3–6 meses",
    price: 320,
    unit: "desde",
    body: "La cara hacia afuera. Arquitectura, interfaz, lanzamiento. Un corte que se puede pulsar, no un deck que se puede aplaudir.",
  },
  {
    name: "Compañía",
    time: "mes a mes",
    price: 48,
    unit: "UF / mes, desde",
    body: "Equipo chico que se queda. Bitácora, evolución, el primer invierno del sistema. Hasta que el rumbo es de ustedes.",
  },
] as const;

export const principles = [
  {
    title: "Primero la mira",
    body: "Antes del código, una lectura de la operación. Si el horizonte no está claro, cualquier sistema es teatro.",
  },
  {
    title: "El turno es el juez",
    body: "Si no se entiende a las tres de la mañana, con mala señal y un radio en la otra mano, no está listo.",
  },
  {
    title: "Una fuente de verdad",
    body: "Cada número vive en un solo lugar. El resto lee. El correo deja de ser el sistema de registro.",
  },
  {
    title: "Cortes, no revelaciones",
    body: "Algo que se puede pulsar cada semana. Lo que no entra tiene nombre. No se esconde en un backlog eterno.",
  },
] as const;

export const questions = [
  {
    q: "¿Hacen páginas web?",
    a: "Cuando la web es la cara de un sistema que vamos a construir. No armamos landings ni rediseños de vitrina. Si lo que necesitan es una cara y nada detrás, hay gente mejor que nosotros para eso — y se lo decimos.",
  },
  {
    q: "¿Trabajan con el equipo interno?",
    a: "Sí. Preferimos eso. La mira se toma con quien ya opera, no contra esa persona. El sistema queda en sus manos; nosotros nos quedamos cerca, sin crear una dependencia teatral.",
  },
  {
    q: "¿Cuánto se demora una mira?",
    a: "Dos semanas. Una en terreno, una para escribir. Si en ese plazo no cabe una tesis en una hoja, el encargo todavía no está listo para construirse — y eso también es un resultado.",
  },
  {
    q: "¿Facturan en UF?",
    a: "Sí. Honorario en UF, por escrito, antes de firmar. La mira tiene un precio cerrado. El sistema, un rango y un primer corte. No empezamos a construir sobre una cifra que se mueve.",
  },
] as const;

export const budgets = [
  { id: "mira", label: "Solo la mira (desde 90 UF)" },
  { id: "a", label: "90 — 400 UF" },
  { id: "b", label: "400 — 1.200 UF" },
  { id: "c", label: "1.200 — 3.000 UF" },
  { id: "d", label: "Más de 3.000 UF" },
  { id: "e", label: "Todavía no lo sé" },
] as const;
