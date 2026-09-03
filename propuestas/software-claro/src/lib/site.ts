export const site = {
  name: "Alba",
  legal: "Alba Estudio SpA",
  descriptor: "Estudio de software",
  tagline: "El software debería sentirse obvio.",
  description:
    "Estudio de producto e ingeniería en Santiago. Diseñamos y construimos sistemas que una empresa entiende desde el primer día.",
  url: "https://alba.cl",
  locale: "es_CL",
  email: "hola@alba.cl",
  phone: "+56 2 2658 4410",
  phoneHref: "tel:+56226584410",
  whatsapp: "+56 9 7658 4410",
  whatsappHref:
    "https://wa.me/56976584410?text=Hola%20Alba%2C%20quiero%20conversar%20un%20proyecto.",
  address: {
    street: "José Victorino Lastarria 123, piso 3",
    city: "Santiago",
    commune: "Santiago Centro",
    country: "Chile",
    maps: "https://maps.google.com/?q=Barrio+Lastarria+Santiago",
  },
  hours: "Lunes a jueves, 9:30 a 18:30 · Viernes, 9:30 a 14:00",
  founded: 2016,
  social: {
    linkedin: "https://www.linkedin.com/company/estudio-alba",
    instagram: "https://www.instagram.com/estudioalba",
  },
} as const;

export const nav = [
  { href: "/trabajo", label: "Trabajo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/estudio", label: "Estudio" },
] as const;

export const clients = [
  "Nativa",
  "Puerto Lumen",
  "Clínica Alto",
  "Cultiva",
  "Andina Energía",
  "Fondo del Sur",
  "Viña Ladera",
  "Editorial Páramo",
  "Transandino",
  "Caja Nívea",
] as const;

export const services = [
  {
    slug: "producto",
    index: "01",
    title: "Producto digital",
    lede: "De la conversación al software que se usa.",
    body: "Diseñamos e ingenieramos productos con una tesis clara: qué problema resuelven, para quién, y qué se puede posponer. Lanzamos en cortes semanales, no en grandes revelaciones.",
    includes: [
      "Descubrimiento y tesis de producto",
      "Arquitectura de información e interfaz",
      "Ingeniería de punta a punta",
      "Puesta en marcha y medición",
    ],
  },
  {
    slug: "plataformas",
    index: "02",
    title: "Plataformas internas",
    lede: "El software que opera la empresa cuando nadie mira.",
    body: "Torres de control, fichas, backoffice, operaciones. El trabajo sucio y decisivo. Lo hacemos tan claro que un turno de noche lo entiende sin un manual de 80 páginas.",
    includes: [
      "Mapeo de operación real",
      "Modelos de datos que coinciden con el oficio",
      "Interfaces para uso intensivo",
      "Integraciones con lo que ya existe",
    ],
  },
  {
    slug: "sistemas",
    index: "03",
    title: "Sistemas de diseño",
    lede: "Una sola manera de hablar, en toda la empresa.",
    body: "No un kit de botones. Un lenguaje: tono, ritmo, componentes, reglas. Para que el siguiente producto no empiece de cero y el anterior no se vea abandonado.",
    includes: [
      "Principios y tokens",
      "Librería de componentes",
      "Documentación que se consulta",
      "Acompañamiento al equipo interno",
    ],
  },
  {
    slug: "ingenieria",
    index: "04",
    title: "Ingeniería y datos",
    lede: "Cimientos que no se notan — hasta que faltan.",
    body: "Arquitectura, nubes, integraciones, calidad, observabilidad. Escribimos software que otro equipo puede heredar sin traducir nuestro dialecto.",
    includes: [
      "Arquitectura y decisiones explícitas",
      "APIs y eventos",
      "Calidad, pruebas y despliegue",
      "Datos para decidir, no para decorar",
    ],
  },
] as const;

export const method = [
  {
    index: "01",
    title: "Mirar",
    body: "Dos semanas dentro de la operación. Turnos, planillas, excepciones, el café de las 11. El software se diseña desde ahí, no desde un workshop de post-its.",
  },
  {
    index: "02",
    title: "Nombrar",
    body: "El problema en una frase. El usuario en una persona real. El corte que se puede lanzar en ochenta días. Si no cabe en una hoja, todavía no está claro.",
  },
  {
    index: "03",
    title: "Construir",
    body: "Diseño e ingeniería en la misma mesa. Cada semana, algo que se puede pulsar. Las decisiones quedan escritas. Lo que no entra, se deja fuera con nombre y apellido.",
  },
  {
    index: "04",
    title: "Dejar",
    body: "Documentación viva, métricas, un equipo que puede seguir. No desaparecemos el viernes del go-live. Acompañamos hasta que el software es de ustedes.",
  },
] as const;

export const stats = [
  { value: "2016", label: "Santiago, desde entonces" },
  { value: "40", label: "Productos en producción" },
  { value: "8", label: "Personas en el estudio" },
  { value: "1", label: "Oficio: claridad" },
] as const;
