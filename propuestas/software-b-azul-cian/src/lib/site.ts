export const site = {
  name: "Traza",
  legal: "Traza Estudio SpA",
  rut: "76.912.448-9",
  descriptor: "Estudio de software",
  tagline: "Una traza para toda la operación.",
  description:
    "Estudio de software en Ñuñoa. Diseñamos y construimos sistemas que un turno puede seguir de punta a punta. Si no se puede trazar, no está hecho.",
  url: "https://traza.cl",
  locale: "es_CL",
  email: "hola@traza.cl",
  phone: "+56 2 2394 8810",
  phoneHref: "tel:+56223948810",
  whatsapp: "+56 9 7394 8810",
  whatsappHref:
    "https://wa.me/56973948810?text=Hola%20Traza%2C%20quiero%20pedir%20un%20levantamiento.",
  address: {
    street: "Av. Irarrázaval 3470, oficina 402",
    city: "Santiago",
    commune: "Ñuñoa",
    country: "Chile",
    maps: "https://maps.google.com/?q=Avenida+Irarrazaval+3470+Nunoa",
  },
  coords: {
    lat: -33.4564,
    lon: -70.5988,
    label: "33°27′23″ S · 70°35′56″ O",
  },
  hours: "Lunes a jueves, 9:30 a 18:30 · Viernes, 9:30 a 14:30",
  founded: 2019,
  people: 7,
  social: {
    linkedin: "https://www.linkedin.com/company/traza-estudio",
  },
} as const;

export const nav = [
  { href: "/trabajo", label: "Trabajo" },
  { href: "/oficio", label: "Oficio" },
  { href: "/estudio", label: "Estudio" },
] as const;

export const services = [
  {
    slug: "operacion",
    title: "Sistemas de operación",
    lede: "El software que mueve el turno cuando nadie presenta un slide.",
    body: "Gates, patios, faenas, mutuales, plantas. Modelamos la operación con sus excepciones — no con el proceso que cabe en una pizarra — y dejamos cada hecho con autor, hora Santiago y un identificador que no se pierde entre sistemas.",
    includes: [
      "Levantamiento en terreno, no en sala",
      "Modelo de datos que coincide con el oficio",
      "Interfaces para uso intensivo",
      "Cada evento, trazable",
    ],
  },
  {
    slug: "producto",
    title: "Producto hacia afuera",
    lede: "La cara que ve el cliente, el inspector, el chofer.",
    body: "Portales y escritorios con una tesis clara: qué problema, para quién, qué se puede posponer. Lanzamos en cortes. Lo que entra se puede seguir. Lo que no entra tiene nombre, no se esconde en un backlog.",
    includes: [
      "Tesis de producto en una hoja",
      "Arquitectura de información",
      "Ingeniería de punta a punta",
      "Puesta en marcha y medición",
    ],
  },
  {
    slug: "traza",
    title: "Integración y observabilidad",
    lede: "Una fuente de verdad. El resto lee.",
    body: "APIs, eventos, contratos. Una traza que el lunes a las 7.40 todavía es cierta. Menos tableros de teatro. Más un número que el turno y la gerencia pueden leer igual — y un rastro cuando no cuadra.",
    includes: [
      "Contratos entre sistemas, escritos",
      "Trazas, no capturas de pantalla",
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
      "Evolución por cortes, con traza",
    ],
  },
] as const;

export const fees = [
  {
    name: "Levantamiento",
    time: "2 semanas",
    price: 4_200_000,
    note: "Estación en la operación, traza del sistema actual, corte propuesto por escrito. Si no hay cauce, se lo decimos en esa hoja.",
  },
  {
    name: "Primer corte",
    time: "unas 12 semanas",
    price: 28_000_000,
    note: "Diseño e ingeniería de un flujo trazable, en producción. El alcance cabe en una lámina. Lo que no entra, queda nombrado.",
  },
  {
    name: "Compañía",
    time: "mes",
    price: 14_800_000,
    note: "Squad embebido. Bitácora semanal. Evolución del sistema que ya corre. Cupo limitado.",
  },
] as const;

export const team = [
  {
    name: "Antonia Vidal",
    role: "Dirección",
    bio: "Antes armó producto en dos operaciones que crecieron más rápido que su software. Fundó Traza para que el rastro se escriba antes que la interfaz.",
  },
  {
    name: "Benjamín Rojas",
    role: "Ingeniería",
    bio: "Borra más de lo que escribe. Cree que una arquitectura es clara cuando se puede contar en el almuerzo, sin pizarra.",
  },
  {
    name: "Florencia Ampuero",
    role: "Producto",
    bio: "Traduce faenas enmarañadas a un flujo que cabe en una pantalla. Viene de mutuales y no se asusta con un Excel de cuarenta pestañas.",
  },
  {
    name: "Ignacio Tapia",
    role: "Observabilidad",
    bio: "Si un evento no tiene autor y hora, no ocurrió. Integra lo que ya existe y se niega a un microservicio por ansiedad.",
  },
  {
    name: "Magdalena Rivas",
    role: "Diseño",
    bio: "Hace que diez sistemas hablen con la misma voz. Tipografía, ritmo, componentes — y la pelea educada contra el “después lo vemos”.",
  },
  {
    name: "Tomás Venegas",
    role: "Ingeniería",
    bio: "Sistemas que aguantan el turno de noche y la señal intermitente. La disciplina de que el gate no dependa del wifi de la gerencia.",
  },
] as const;

export const questions = [
  {
    q: "¿Venden un producto de estantería?",
    a: "No. Entramos a una operación, encontramos el flujo que de verdad mueve el turno y levantamos el software que lo deja trazado. Si lo que necesitan es un ERP de catálogo, se lo decimos en el levantamiento — y a quién conviene llamar.",
  },
  {
    q: "¿Con qué stack trabajan?",
    a: "El que la operación puede heredar. Hoy suele ser TypeScript, Go, Postgres, eventos. No es religión: es lo que otro equipo puede leer el invierno siguiente.",
  },
  {
    q: "¿Y si ya hay un ERP?",
    a: "Casi siempre lo hay. No lo reemplazamos por deporte. Trazamos alrededor: el gate, el patio, el reembolso, la orden. El ERP sigue siendo el ERP. Deja de ser el único lugar donde se inventa la verdad.",
  },
  {
    q: "¿Cuánto se demora un primer corte?",
    a: "El levantamiento son dos semanas. Un primer corte, unas doce. Si el alcance no cabe en esa ventana, no es un corte: es un programa, y se nombra como tal.",
  },
  {
    q: "¿Trabajan remoto?",
    a: "La mesa está en Ñuñoa. El trabajo, en la operación. Las primeras dos semanas son en terreno. Después, una mezcla que el turno pueda sostener.",
  },
] as const;
