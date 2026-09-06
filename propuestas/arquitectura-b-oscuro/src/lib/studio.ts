export const studio = {
  name: "UMBRAL",
  legal: "Umbral Arquitectos SpA",
  tagline: "La obra habla. El resto calla.",
  sentence:
    "Estudio de arquitectura para proyectos residenciales y de obra nueva de alto estándar. Diseño, permisería y construcción administrada por el mismo equipo.",
  city: "Las Condes, Santiago",
  founded: 2004,
  years: 22,
  works: 85,
  permits: 98,
  people: 9,
  address: "Isidora Goyenechea 3470, of. 52",
  neighborhood: "El Golf, Las Condes",
  region: "Región Metropolitana",
  country: "Chile",
  phone: "+56 9 8765 4321",
  phoneHref: "tel:+56987654321",
  whatsapp: "https://wa.me/56987654321",
  email: "hola@umbral.cl",
  instagram: "https://instagram.com/umbral.arq",
  hours: "Lunes a viernes, 10:00 a 19:00",
  rut: "76.441.208-3",
  url: "https://umbral.cl",
  description:
    "Estudio de arquitectura en Las Condes, Santiago. Casas y obra nueva de alto estándar: diseño, permisería y administración de obra, con un arquitecto a cargo de punta a punta.",
} as const;

export const nav = [
  { href: "/obras", label: "Obras" },
  { href: "/estudio", label: "Estudio" },
  { href: "/oficio", label: "Oficio" },
  { href: "/encargo", label: "Encargo" },
] as const;

export const stats = [
  { key: "obras", label: "Obras", value: 85, prefix: "+", suffix: "" },
  { key: "anos", label: "Años de estudio", value: 22, prefix: "", suffix: "" },
  {
    key: "permisos",
    label: "Permisos aprobados",
    value: 98,
    prefix: "",
    suffix: "%",
  },
  {
    key: "cargo",
    label: "Arquitecto a cargo",
    value: 1,
    prefix: "",
    suffix: ", siempre",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Anteproyecto",
    deliverable:
      "Plantas, cortes, volumetría y una maqueta. Tres opciones de implantación. Un presupuesto de honorarios cerrado para las etapas siguientes.",
    duration: "8–12 semanas",
  },
  {
    number: "02",
    title: "Proyecto con permisería",
    deliverable:
      "Expediente completo para la DOM: arquitectura, cálculo, instalaciones, informe de suelos. Lo presentamos y lo seguimos hasta el permiso de edificación.",
    duration: "4–8 meses, según comuna",
  },
  {
    number: "03",
    title: "Detalle constructivo",
    deliverable:
      "Especificaciones, encuentros, muestras de materia. Lo que se dibuja es lo que se construye. Sin “se resuelve en obra”.",
    duration: "en paralelo al permiso",
  },
  {
    number: "04",
    title: "Administración de obra",
    deliverable:
      "Licitación, contrato, estado de pago, visitas semanales. El arquitecto que firmó el plano es el que está en la faena.",
    duration: "14–24 meses de obra",
  },
] as const;

export const process = [
  {
    number: "01",
    title: "Conversación",
    text: "Una hora en el estudio o en el predio. Programa, presupuesto en UF, cómo se vive. Si no calza, lo decimos altiro.",
    duration: "1–2 semanas",
  },
  {
    number: "02",
    title: "Levantamiento",
    text: "Topografía, asoleamiento, vientos, vecinos, árboles. Nos quedamos a ver cómo corre el sol. El predio manda.",
    duration: "2–3 semanas",
  },
  {
    number: "03",
    title: "Anteproyecto",
    text: "Cortes antes que plantas. Maqueta blanca. Dos o tres caminos, no un único render. Se decide con calma.",
    duration: "8–12 semanas",
  },
  {
    number: "04",
    title: "Permisos",
    text: "Expediente DOM, cálculo sísmico, instalaciones. El permiso no es un trámite ajeno: es parte del proyecto.",
    duration: "4–8 meses",
  },
  {
    number: "05",
    title: "Obra",
    text: "Dirección presente. El suelo, un oficio, una luz que no se había visto: ajustamos. No improvisamos.",
    duration: "14–24 meses",
  },
] as const;

export const fees = [
  {
    name: "Anteproyecto",
    from: "0,55 UF/m²",
    includes:
      "Levantamiento, implantación, plantas y cortes, maqueta, presupuesto de las etapas siguientes.",
  },
  {
    name: "Proyecto completo",
    from: "1,45 UF/m²",
    includes:
      "Arquitectura, especialidades, expediente DOM y seguimiento hasta el permiso de edificación.",
  },
  {
    name: "Administración de obra",
    from: "6% de la obra",
    includes:
      "Licitación, contrato, estados de pago, visitas semanales y cierre de obra.",
  },
] as const;

export const faqs = [
  {
    q: "¿Cuánto demora el permiso de edificación?",
    a: "En Las Condes, Vitacura y Lo Barnechea, entre cuatro y ocho meses si el expediente entra completo. En comunas de la costa y el sur varía. Lo tramitamos nosotros: no lo dejamos en un gestor suelto.",
  },
  {
    q: "¿Qué incluye el anteproyecto?",
    a: "Levantamiento del predio, dos o tres opciones de implantación, plantas, cortes, una maqueta y un presupuesto cerrado para las etapas que siguen. No es un sketch. Es la base del contrato.",
  },
  {
    q: "¿Manejan la construcción o solo el diseño?",
    a: "Las dos cosas, si el encargo lo pide. Diseñamos, tramitamos el permiso y administramos la obra. No tenemos constructora propia: licitamos y dirigimos. El que firma el plano es el que visita la faena.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Por hitos, nunca todo adelantado. Anteproyecto al encargo. Proyecto de arquitectura en tres estados. Permiso al ingreso del expediente. Administración de obra mes a mes, contra estado de pago. El contrato se firma antes de dibujar.",
  },
  {
    q: "¿Diseñan fuera de Santiago?",
    a: "Sí. Tenemos obras en Zapallar, Maitencillo, Pucón, Puerto Varas y Farellones. Si el predio queda lejos, la primera conversación puede ser en terreno. El arquitecto a cargo viaja; no delegamos el encargo a un junior.",
  },
] as const;

export const team = [
  { name: "Elena Muñoz", role: "Socia", focus: "Arquitectura" },
  { name: "Matías Vergara", role: "Socio", focus: "Estructura y obra" },
  { name: "Trinidad Ossandón", role: "Directora de proyecto", focus: "Residencial" },
  { name: "Joaquín Salas", role: "Arquitecto", focus: "Permisos y DOM" },
  { name: "Pilar Cárdenas", role: "Arquitecta", focus: "Detalle y materia" },
  { name: "Diego Núñez", role: "Arquitecto", focus: "Obra" },
] as const;

export const materials = [
  {
    title: "Hormigón tabla",
    text: "Encofrado con madera. La veta queda impresa. El sol de Chile la pule con los años.",
  },
  {
    title: "Cobre",
    text: "El material del país. Se oxida, se pone verde, se queda. Cubiertas, encuentros, agua.",
  },
  {
    title: "Madera nativa",
    text: "Lenga, raulí, pino oregón. Quemada o a la intemperie. Nunca barniz de catálogo.",
  },
  {
    title: "Piedra y tierra",
    text: "Mampostería de 60 cm donde el clima lo pide. Tapia en el valle. Masa, silencio, temperatura.",
  },
] as const;
