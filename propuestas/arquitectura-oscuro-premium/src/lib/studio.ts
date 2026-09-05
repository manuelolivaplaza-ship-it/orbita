export const studio = {
  name: "ORILLA",
  legal: "Orilla Arquitectos SpA",
  tagline: "Arquitectura en el borde.",
  sentence: "Chile es un corte. Lo habitamos.",
  city: "Santiago",
  founded: 2013,
  people: 14,
  works: 38,
  latitudes: "22°–41° S",
  address: "José Victorino Lastarria 70, of. 4",
  neighborhood: "Lastarria, Santiago",
  region: "Región Metropolitana",
  country: "Chile",
  coords: "33°26′16″ S · 70°38′26″ W",
  lat: -33.4378,
  lng: -70.6406,
  phone: "+56 2 2633 1840",
  phoneHref: "tel:+56226331840",
  mobile: "+56 9 9348 2210",
  mobileHref: "tel:+56993482210",
  whatsapp: "https://wa.me/56993482210",
  email: "estudio@orilla.cl",
  instagram: "https://instagram.com/orilla.arq",
  hours: "Lunes a viernes, 9:30 a 18:30",
  rut: "76.518.442-K",
  url: "https://orilla.cl",
  description:
    "Estudio de arquitectura en Lastarria, Santiago. Casas, bodegas, pabellones y escuelas en el borde entre la cordillera y el Pacífico.",
  about: [
    "ORILLA es un estudio de arquitectura con sede en Lastarria, Santiago. Diseñamos casas, bodegas, pabellones y escuelas que pertenecen a su clima, a su cota y a quien los habita.",
    "Chile es un corte: cuatro mil kilómetros entre el desierto y el hielo, noventa entre la cordillera y el mar. El trabajo consiste en leer ese borde —el predio, el viento, el sismo, la luz del poniente— y construir a partir de él. No partimos de un estilo. Partimos de un terreno.",
    "El estudio se fundó en 2013. Hoy somos catorce personas —arquitectas, arquitectos, un estructuralista y un equipo de obra— trabajando entre Lastarria y los predios donde se construye cada encargo. Tomamos pocos. Preferimos estar.",
  ],
} as const;

export const nav = [
  { href: "/obras", label: "Obras" },
  { href: "/estudio", label: "Estudio" },
  { href: "/enfoque", label: "Enfoque" },
  { href: "/contacto", label: "Encargo" },
] as const;

export const stats = [
  { label: "Fundación", value: "2013" },
  { label: "Obras", value: "38" },
  { label: "Personas", value: "14" },
  { label: "Latitudes", value: "22°–41° S" },
] as const;

export const principles = [
  {
    number: "01",
    title: "Borde",
    text: "El predio es un corte, no un fondo. Topografía, viento, vecinos, la cota del agua. Un edificio que no lee el borde es un objeto. Nosotros no hacemos objetos.",
  },
  {
    number: "02",
    title: "Materia",
    text: "Hormigón tabla, cobre, tierra, madera nativa, piedra. Materiales que se ven, se tocan y envejecen a la intemperie chilena. La pátina no es un defecto: es el tiempo haciéndose visible.",
  },
  {
    number: "03",
    title: "Sismo",
    text: "La norma no es un recargo al final del plano. Es el sistema. El corte, el nudo, el encuentro entre materia y estructura se resuelven juntos. El sismo es parte del programa.",
  },
] as const;

export const process = [
  {
    number: "01",
    title: "Terreno",
    text: "Una conversación larga con quien va a habitar. Programa, ritmos, presupuesto en UF. Después, el predio: pendientes, vientos, árboles, la luz del poniente. Si hace falta, nos quedamos un día a ver cómo corre el sol.",
  },
  {
    number: "02",
    title: "Corte",
    text: "Anteproyecto en cortes y maquetas. Pocas plantas, muchos cortes. El edificio se decide en sección: cómo toca el suelo, cómo recibe la luz, cómo se comporta en sismo. Presentamos opciones, no un único camino.",
  },
  {
    number: "03",
    title: "Materia",
    text: "Elegimos el sistema constructivo y los oficios. Muestras reales, no renders de catálogo. El detalle se resuelve con quien lo va a ejecutar. El cobre, el hormigón, la madera: se tocan antes de dibujarse.",
  },
  {
    number: "04",
    title: "Permiso",
    text: "Antecedentes para la DOM, informe de suelos, cálculo sísmico, tramitación. El permiso de edificación no es un trámite ajeno: es parte del proyecto. Lo llevamos nosotros.",
  },
  {
    number: "05",
    title: "Obra",
    text: "Dirección de obra presente. La obra cambia el proyecto: el suelo, un oficio, una luz que no se había visto. Ajustamos. No improvisamos. Un encargo típico dura entre catorce y treinta meses.",
  },
  {
    number: "06",
    title: "Habitar",
    text: "Entregamos y volvemos. Una casa se termina cuando se vive. Medimos, corregimos y dejamos un manual de materia para que el edificio envejezca bien bajo el sol y el sismo chilenos.",
  },
] as const;

export const team = [
  { name: "Clara Valdés", role: "Socia fundadora", focus: "Arquitectura" },
  { name: "Ignacio Peña", role: "Socio", focus: "Estructura y sismo" },
  { name: "Emilia Rivas", role: "Directora de proyecto", focus: "Residencial" },
  { name: "Tomás Undurraga", role: "Arquitecto", focus: "Territorio" },
  { name: "Antonia Silva", role: "Arquitecta", focus: "Paisaje" },
  { name: "Nicolás Bravo", role: "Arquitecto", focus: "Obra" },
  { name: "Javiera Contreras", role: "Interior y materia", focus: "Oficios" },
  { name: "Pedro Lagos", role: "Coordinación", focus: "Permisos y DOM" },
] as const;

export const awards = [
  {
    year: "2025",
    title: "Bienal de Arquitectura de Chile — Obra construida",
    project: "Casa Ladera",
  },
  {
    year: "2024",
    title: "Premio Obra del Año, AOA",
    project: "Bodega Apalta",
  },
  {
    year: "2024",
    title: "ArchDaily Building of the Year, shortlist",
    project: "Pabellón Mapocho",
  },
  {
    year: "2023",
    title: "Bienal de Venecia — colaboración pabellón Chile",
    project: "Estudio",
  },
  {
    year: "2023",
    title: "Premio Iberoamericano — Reuso",
    project: "Casa Quebrada",
  },
  {
    year: "2022",
    title: "ARQ UC — Obra joven",
    project: "Escuela Calama",
  },
] as const;

export const press = [
  "CA",
  "AOA",
  "ARQ UC",
  "Plataforma Arquitectura",
  "ArchDaily",
  "Divisare",
  "The Architectural Review",
  "Wallpaper*",
] as const;

export const materials = [
  {
    title: "Hormigón tabla",
    text: "Encofrado con madera. La veta queda impresa. El sol de Chile la pule con los años.",
  },
  {
    title: "Cobre",
    text: "El material del país. Se oxida, se pone verde, se queda. Chimeneas, encuentros, cubiertas.",
  },
  {
    title: "Tierra cruda",
    text: "Tapia y adobe donde el clima lo permite. Masa, temperatura, silencio.",
  },
  {
    title: "Madera nativa",
    text: "Raulí, lenga, pino oregón. Quemada o a la intemperie. Nunca barnizada de catálogo.",
  },
] as const;
