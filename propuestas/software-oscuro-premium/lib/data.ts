export const site = {
  name: "OBSIDIANA",
  legal: "Obsidiana SpA",
  tagline: "Tallamos software que aguanta presión.",
  description:
    "Estudio de software en Santiago. Diseñamos y construimos sistemas a medida para empresas que no pueden permitirse improvisar.",
  email: "hola@obsidiana.cl",
  phone: "+56 9 4271 8830",
  phoneHref: "tel:+56942718830",
  whatsapp: "https://wa.me/56942718830",
  instagram: "https://instagram.com/obsidiana.cl",
  address: "José Victorino Lastarria 70, of. 4",
  comuna: "Santiago, Chile",
  coords: "33°26′13″ S · 70°38′22″ O",
  coordsShort: "33.4°S  70.6°O",
  hours: "Lunes a viernes, 9.30 a 18.30",
  founded: 2018,
  people: 14,
} as const;

export const nav = [
  { href: "/trabajo", label: "Trabajo" },
  { href: "/estudio", label: "Estudio" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const marquee = [
  "Producto digital",
  "Sistemas internos",
  "Identidad",
  "Data",
  "Integraciones",
  "Operaciones",
  "Plataformas",
  "Archivos",
  "Fintech",
  "Industria",
];

export const services = [
  {
    id: "producto",
    index: "01",
    title: "Producto",
    lead: "Aplicaciones que la gente usa todos los días — no una vez, en el onboarding.",
    body: "Diseño, ingeniería y el criterio de saber qué no construir. Portales, apps y plataformas con una sola promesa: que el trabajo cotidiano se sienta más liviano a la tercera hora, no a la tercera semana.",
  },
  {
    id: "sistemas",
    index: "02",
    title: "Sistemas",
    lead: "El software que no se ve. Donde una planilla ya no da y un SaaS genérico se queda corto.",
    body: "Operaciones, backoffice, turnos, lotes, cobranzas, faenas. Modelamos la operación real — con sus excepciones, no con el proceso que cabe en un slide — y la dejamos corriendo en producción.",
  },
  {
    id: "identidad",
    index: "03",
    title: "Identidad",
    lead: "La cara digital de la empresa, con el mismo estándar que exigimos al código.",
    body: "Sitios, portales y lenguajes visuales. Oscuro o claro, pero nunca genérico. Si el producto es preciso, la superficie también tiene que serlo.",
  },
  {
    id: "data",
    index: "04",
    title: "Data",
    lead: "Números que llegan a tiempo. Decisiones que no dependen de un Excel llamado final_v8.",
    body: "Tableros, pipelines y reglas que alguien del negocio puede leer. Menos teatro de indicadores, más una fuente de verdad que resiste el lunes a las 7.40.",
  },
] as const;

export const process = [
  {
    index: "01",
    title: "Escuchar",
    time: "2–3 semanas",
    body: "Inmersión en la operación real. Entrevistas, sombras, planillas, el WhatsApp del turno de noche. Sin workshops de post-it. Salimos con un mapa y una tesis.",
  },
  {
    index: "02",
    title: "Tallar",
    time: "6–14 semanas",
    body: "Diseño e ingeniería en paralelo. Prototipos que se pueden romper. Semanas con algo que se puede tocar, no decks que se pueden aplaudir.",
  },
  {
    index: "03",
    title: "Templar",
    time: "2–4 semanas",
    body: "Producción, carga real, gente real. Afilamos el filo donde duele: los bordes, las excepciones, el viernes a las 18.10.",
  },
  {
    index: "04",
    title: "Entregar",
    time: "Continuo",
    body: "El sistema queda en sus manos. Documentado, medido, con un canal directo. Nos quedamos cerca, sin crear una dependencia teatral.",
  },
] as const;

export const principles = [
  {
    title: "Menos superficie, más densidad.",
    body: "Cada pantalla tiene que justificar su existencia. Preferimos un flujo corto y duro antes que un producto que parece completo y no se usa.",
  },
  {
    title: "El usuario real manda.",
    body: "No el stakeholder más ruidoso. Nos sentamos al lado de quien opera a las 6.00. Si esa persona no puede, el sistema no sirve.",
  },
  {
    title: "Si no entra en producción, no existe.",
    body: "El prototipo es un medio. El código en producción, con datos de verdad, es el único entregable que nos interesa firmar.",
  },
  {
    title: "Chile no es un mercado de paso.",
    body: "Es el terreno. UF, faena, cosecha, pyme, SII, el lunes feriado. Diseñamos para esta operación, no para una plantilla de Silicon Valley.",
  },
] as const;

export const disciplines = [
  "Dirección de producto",
  "Diseño de interfaz",
  "Diseño de sistemas",
  "Ingeniería frontend",
  "Ingeniería backend",
  "Datos e integraciones",
  "Operación y entrega",
];

export const budgets = [
  { id: "a", label: "Menos de 400 UF" },
  { id: "b", label: "400 — 1.200 UF" },
  { id: "c", label: "1.200 — 3.000 UF" },
  { id: "d", label: "Más de 3.000 UF" },
  { id: "e", label: "Aún no lo sé" },
] as const;

export type Project = {
  slug: string;
  name: string;
  client: string;
  year: string;
  location: string;
  category: string;
  services: string[];
  excerpt: string;
  image: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "vina-ladera",
    name: "Viña Ladera",
    client: "Viña Ladera",
    year: "2024",
    location: "Colchagua",
    category: "Operaciones",
    services: ["Plataforma", "Integraciones", "Data"],
    excerpt:
      "De la cosecha al contenedor: una sola verdad operativa para una viña que exporta a catorce países.",
    image: "/images/work-ladera.jpg",
    challenge:
      "Ladera es una viña familiar de Colchagua que exporta a catorce países. La operación vivía en tres planillas, un ERP que nadie quería abrir y un grupo de WhatsApp llamado “embarquesss”. Cada lote —desde la uva hasta el contenedor— era una cadena de copiar y pegar. Un error de etiqueta en Busan se rastreaba tres días.",
    approach:
      "Mapeamos el lote como unidad de verdad. Cosecha, guarda, análisis, certificación, packing y despacho quedan atados a un mismo identificador. El maestro de cava ve el estado en una pantalla que cabe en el celular con las manos mojadas. Comercio exterior ve el mismo dato, con otra cara. Integramos el laboratorio, el SAG y el forwarder sin pedirle a nadie que “se cambie de sistema” de un día para otro.",
    result:
      "El cierre de un lote pasó de un ritual de fin de mes a una consecuencia del trabajo diario. Cuando un importador en Corea pregunta por un lote, la respuesta está. El WhatsApp de embarques se silenció solo.",
    metrics: [
      { value: "14", label: "países de destino" },
      { value: "−40%", label: "tiempo de cierre de lote" },
      { value: "1", label: "fuente de verdad" },
    ],
  },
  {
    slug: "cobre-sur",
    name: "Cobre Sur",
    client: "Cobre Sur",
    year: "2023",
    location: "Antofagasta",
    category: "Industria",
    services: ["Sistemas", "Data", "Campo"],
    excerpt:
      "Un tablero de faena para un contratista minero que no puede esperar al reporte del día siguiente.",
    image: "/images/work-cobre.jpg",
    challenge:
      "Seiscientas personas, tres sitios, turnos que no coinciden con Santiago. Los números de producción llegaban al día siguiente. Los incidentes, en un PDF. El cambio de turno era un cuaderno. La gerencia tomaba decisiones con datos que ya habían envejecido en el desierto.",
    approach:
      "Construimos la capa operativa: pizarra de turno en vivo, captura de incidentes en tablet rugerizada, estado de equipos y un corte ejecutivo que no es un cementerio de gráficos. Diseñado para el sol de las 14.00 y para el pinchazo de un dedo con guante. El backend aguanta cuando la red de faena se cae y sincroniza cuando vuelve.",
    result:
      "El turno entra y sale sobre el mismo tablero. Un incidente deja de ser un relato y pasa a ser un registro con hora, lugar y foto. La gerencia mira el mismo sistema que el supervisor, no un PowerPoint del viernes.",
    metrics: [
      { value: "3", label: "sitios en paralelo" },
      { value: "600", label: "personas en faena" },
      { value: "12 min", label: "para reportar un incidente" },
    ],
  },
  {
    slug: "fundacion-relato",
    name: "Fundación Relato",
    client: "Fundación Relato",
    year: "2024",
    location: "Santiago",
    category: "Cultura",
    services: ["Archivo", "Identidad", "Ticketing"],
    excerpt:
      "Un archivo de cuarenta mil piezas y una sala de teatro, por fin con la misma dignidad que la obra.",
    image: "/images/work-relato.jpg",
    challenge:
      "La fundación guarda un siglo de teatro chileno: libretos, afiches, correspondencia, audio. El público no encontraba nada. La boletería era un formulario. El archivo, un disco duro con nombres de archivo que solo entendía una persona. Cada estreno era un milagro administrativo.",
    approach:
      "Catalogamos con quien ya catalogaba —no contra esa persona—. El archivo público se busca como se busca en una biblioteca, no como se busca en un CMS. El sitio se siente sala, no landing. La boletería es un flujo de cuatro pasos, con abonos y escuelas. Oscuro, amplio, silencioso: el mismo criterio que la programación.",
    result:
      "Investigadores, escuelas y el público de las 19.30 usan la misma casa digital. El archivo dejó de ser un rumor interno. La boletería deja de ser el cuello de botella del estreno.",
    metrics: [
      { value: "40 mil", label: "piezas en catálogo" },
      { value: "4", label: "pasos para una entrada" },
      { value: "1", label: "casa digital" },
    ],
  },
  {
    slug: "ruca",
    name: "Ruca",
    client: "Ruca",
    year: "2025",
    location: "Santiago",
    category: "Fintech",
    services: ["Producto", "Motor de reglas", "Portal"],
    excerpt:
      "Crédito para pymes con un motor de decisión que el equipo de riesgo puede editar un jueves, sin llamar a ingeniería.",
    image: "/images/work-ruca.jpg",
    challenge:
      "Ruca presta a pymes que los bancos encuentran “poco limpias”: ferias, talleres, distribuidores. La evaluación tardaba once días. Cada excepción era un hilo de correos. El riesgo vivía en la cabeza de tres personas y en una hoja que se rompía si dos la abrían a la vez.",
    approach:
      "Armamos el portal del postulante, el mesón de evaluación y un motor de reglas que el equipo de riesgo edita. No un “modelo mágico”: una secuencia explícita, con la excepción como ciudadano de primera. Integración a burós, al SII y a la cartola, con una interfaz que no asusta a quien pide diez millones para reponer stock.",
    result:
      "La decisión mediana bajó a 36 horas. El jueves ya no hay un cuello de botella llamado “el modelo”. El fundador puede explicar, en una reunión con un regulador, por qué se dijo que sí o que no.",
    metrics: [
      { value: "36 h", label: "decisión mediana" },
      { value: "−11 d", label: "versus el proceso anterior" },
      { value: "0", label: "modelos de caja negra" },
    ],
  },
  {
    slug: "mercado-bruma",
    name: "Mercado Bruma",
    client: "Mercado Bruma",
    year: "2023",
    location: "Los Lagos",
    category: "Comercio",
    services: ["Marketplace", "Logística", "Identidad"],
    excerpt:
      "Un mercado para productores del sur que no querían parecer una feria digital de descuentos.",
    image: "/images/work-bruma.jpg",
    challenge:
      "Quesos, ahumados, berries, vinos de parcela. Productores que venden bien en persona y mal en internet. El canal que habían probado les cobraba comisión de mall y les diseñaba la ficha como si vendieran cables USB. La logística al resto de Chile era un folklore de encomiendas.",
    approach:
      "Un mercado propio: catálogo con oficio, pedidos, pagos, y una logística que habla el idioma de la encomienda sin disfrazarse de Amazon. Cada productor tiene su vitrina. El comprador de Providencia entiende de dónde sale lo que pide. Visualmente, mesa oscura y producto al frente —nada de banners.",
    result:
      "Los productores dejan de pelear con un marketplace que no fue hecho para ellos. Bruma vende con el tono de la mesa, no con el tono del mall. El sur llega a Santiago sin perder el nombre de quien lo hizo.",
    metrics: [
      { value: "48", label: "productores activos" },
      { value: "2.4×", label: "ticket promedio vs. feria digital" },
      { value: "12", label: "regiones de despacho" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return projects[0];
  return projects[(i + 1) % projects.length];
}
