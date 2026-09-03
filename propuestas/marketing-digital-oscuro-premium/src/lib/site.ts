export const site = {
  name: "Obsidiana",
  legalName: "Obsidiana SpA",
  tagline: "Cortamos el ruido.",
  description:
    "Estudio de marketing digital en Barrio Italia, Santiago. Marca, performance y producto como un solo sistema. Ocho cuentas al año. Retainer en UF, por escrito.",
  url: "https://obsidiana.cl",
  rut: "77.208.441-6",
  founded: 2019,
  email: "mesa@obsidiana.cl",
  phone: "+56 9 7614 2280",
  phoneHref: "tel:+56976142280",
  whatsapp:
    "https://wa.me/56976142280?text=Hola%2C%20quiero%20pedir%20un%20diagn%C3%B3stico%20en%20Obsidiana.",
  address: {
    line: "Condell 1448, piso 2",
    city: "Ñuñoa, Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    postal: "7500000",
    maps: "https://maps.google.com/?q=Condell+1448+Nunoa+Santiago",
  },
  metro: "Salvador · 8 min a pie",
  barrio: "Barrio Italia",
  hours: "Lunes a viernes, 9:00 a 19:00",
  hoursShort: "Lun–Vie 9:00–19:00",
  lastHour: "19:00",
  instagram: "https://instagram.com/obsidiana.cl",
  linkedin: "https://www.linkedin.com/company/obsidiana",
  coords: "33°26′38″ S · 70°37′12″ W",
  cuentas: 8,
  ufMin: 48,
} as const;

export const nav = [
  { href: "/trabajo", label: "Trabajo" },
  { href: "/oficios", label: "Oficios" },
  { href: "/estudio", label: "Estudio" },
  { href: "/metodo", label: "Método" },
] as const;

export const stats = [
  { value: "2019", label: "La mesa abre" },
  { value: "8", label: "Cuentas al año" },
  { value: "48 UF", label: "Retainer desde" },
  { value: "19:00", label: "La mesa cierra" },
] as const;

export const clients = [
  "Alza",
  "Casa Lira",
  "Andino",
  "Nortevolt",
  "Oficio",
  "Clínica Austral",
  "Ruta Patagonia",
  "Panal",
  "Edificio Sur",
  "Huma",
] as const;

export type Oficio = {
  slug: string;
  folio: string;
  title: string;
  short: string;
  lead: string;
  body: string[];
  work: string[];
  when: string[];
  not: string[];
};

export const oficios: Oficio[] = [
  {
    slug: "marca",
    folio: "01",
    title: "Marca",
    short: "Posicionamiento, verbal, sistema.",
    lead: "Si se ve como todos, no se ve. La marca es el corte que viene antes de la pauta.",
    body: [
      "No partimos por el logo. Partimos por lo que la marca tiene que dejar de ser. Posicionamiento, territorio verbal, sistema visual y el criterio con el que se van a rechazar el 80% de las piezas.",
      "En Chile hay más marcas con manual que con decisión. El manual se queda en Drive. La decisión se usa el martes, cuando hay que bajar un aviso a las 18:00.",
    ],
    work: [
      "Diagnóstico de marca y territorio",
      "Plataforma verbal y naming cuando hace falta",
      "Sistema visual: tipografía, color, ritmo",
      "Guía de criterio — qué se publica y qué no",
      "Aplicación a producto, pauta y local",
    ],
    when: [
      "La marca se ve igual que las tres de al lado",
      "El equipo interno no sabe qué rechazar",
      "Hay que salir a Latam y el relato no aguanta",
    ],
    not: [
      "Un rebranding para 'modernizar' sin cambiar la oferta",
      "Un logo por concurso",
    ],
  },
  {
    slug: "performance",
    folio: "02",
    title: "Performance",
    short: "Pauta, oferta, el número que importa.",
    lead: "El medio es barato. El criterio, no. Compramos el corte, no el clic.",
    body: [
      "Meta, Google, programmatic cuando cabe. El gasto lo paga usted, directo a la plataforma. Nosotros armamos la oferta, el recorte de audiencia, la lectura semanal y la decisión de apagar.",
      "No reportamos alcance. Reportamos CAC, payback y qué se cortó. Si la pauta no da, se lo decimos en la semana tres, no en el Q3.",
    ],
    work: [
      "Arquitectura de campañas Meta y Google",
      "Oferta, landing y medición (GA4, CAPI, server-side)",
      "Lectura semanal: qué se apaga, qué se dobla",
      "Creative testing con criterio de marca",
      "Pauta mínima: $8.000.000 al mes, IVA aparte",
    ],
    when: [
      "Ya está pautando y el CAC no cierra",
      "La agencia anterior reportaba impresiones",
      "Hay que salir de un canal único",
    ],
    not: [
      "Pautas de $500.000 'para probar'",
      "Garantías de ROAS",
    ],
  },
  {
    slug: "contenido",
    folio: "03",
    title: "Contenido",
    short: "Sistema, no un post del viernes.",
    lead: "El contenido que funciona es el que se puede repetir. El resto es un moodboard.",
    body: [
      "Diseñamos un sistema: territorios, formatos, cadencia, y quién firma. Film, still, social, newsletter. Lo que se publica tiene que poder vivir en pauta y en el local.",
      "No hacemos community management por hora. Si la cuenta necesita respuesta en DMs, se arma un protocolo. Si necesita 30 piezas al mes sin criterio, no somos nosotros.",
    ],
    work: [
      "Territorios de contenido y cadencia",
      "Dirección de still y film",
      "Sistema always-on para social",
      "Newsletter y editorial de marca",
      "Guion y producción en Santiago o en terreno",
    ],
    when: [
      "Hay un feed y no hay un sistema",
      "El contenido no se puede pautar",
      "La marca habla distinto en cada canal",
    ],
    not: [
      "Un calendario de 90 posts genéricos",
      "Reels de tendencia sin relación con la oferta",
    ],
  },
  {
    slug: "producto",
    folio: "04",
    title: "Producto",
    short: "Sitios, landings, el lugar donde se cierra.",
    lead: "La pauta sin un lugar que cierre es un grifo abierto. El producto es parte del corte.",
    body: [
      "Sitios, landings, flujos de alta, CRO. No hacemos 40 páginas de 'nosotros'. Hacemos el mínimo que convierte y el máximo que la marca puede sostener.",
      "Next, headless, Shopify, lo que el caso pida. Medición desde el primer commit. Si el sitio actual es el cuello de botella, se lo decimos antes de tocar la pauta.",
    ],
    work: [
      "Sitios de marca y de conversión",
      "Landings de oferta y experimentación",
      "CRO: hipótesis, test, corte",
      "Integración con CRM, e-commerce y ads",
      "Desde 90 UF, por escrito, con etapas",
    ],
    when: [
      "La pauta llega a un sitio que no cierra",
      "Hay que lanzar una oferta en 30 días",
      "El e-commerce se ve como el de 2018",
    ],
    not: [
      "Un sitio 'para tener presencia'",
      "Rediseños estéticos sin medición",
    ],
  },
  {
    slug: "seo",
    folio: "05",
    title: "SEO",
    short: "Editorial que se indexa. Técnica que se aguanta.",
    lead: "El primer lugar no se compra con un paquete. Se escribe, se mide y se espera.",
    body: [
      "Arquitectura, contenidos que una persona leería, y la técnica para que Google no los tire. En Chile el SEO se vende como magia. Nosotros lo vendemos como editorial más 14 meses.",
      "No prometemos el primer lugar en 30 días. Si el negocio necesita demanda esta semana, eso es pauta. El SEO es el activo que queda cuando la pauta se apaga.",
    ],
    work: [
      "Arquitectura y cluster editorial",
      "Contenidos de demanda real, no de keyword stuffing",
      "Técnica: Core Web Vitals, indexación, schema",
      "SEO local para redes con sucursal",
      "Informe trimestral: qué se indexó, qué se cortó",
    ],
    when: [
      "Hay pauta y cero activo orgánico",
      "El blog lo escribe un intern sin brief",
      "La ficha de Google no se toca desde 2022",
    ],
    not: [
      "Paquetes de 10 artículos al mes sin arquitectura",
      "Promesas de primer lugar",
    ],
  },
  {
    slug: "retencion",
    folio: "06",
    title: "Retención",
    short: "CRM, lifecycle, el segundo peso.",
    lead: "Conseguir el cliente es la mitad. La otra mitad es no tener que volver a pagarlo.",
    body: [
      "Flujos de onboarding, email, WhatsApp Business, recompra, winback. El CAC solo se entiende si hay un LTV. En pymes chilenas el agujero suele estar después de la primera compra, no en el aviso.",
      "No instalamos un CRM para tener un CRM. Instalamos los tres flujos que mueven plata y el resto se queda fuera hasta que se justifique.",
    ],
    work: [
      "Mapa de lifecycle y eventos",
      "Flujos de onboarding y activación",
      "Email y WhatsApp con criterio de marca",
      "Winback y recompra",
      "Integración con el stack que ya tiene",
    ],
    when: [
      "El CAC sube y no hay segundo pedido",
      "Hay una base y no se toca",
      "WhatsApp es un chat, no un sistema",
    ],
    not: [
      "Un CRM 'para ordenar'",
      "Flujos de 40 emails que nadie pidió",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  folio: string;
  client: string;
  sector: string;
  year: string;
  title: string;
  lead: string;
  cover: string;
  gallery: string[];
  oficios: string[];
  metric: string;
  metricLabel: string;
  metrics: { value: string; label: string }[];
  body: string[];
  corte: string[];
  result: string;
  featured: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "alza",
    folio: "01",
    client: "Alza",
    sector: "Fintech",
    year: "2025",
    title: "El CAC no era un canal. Era la oferta.",
    lead: "Una wallet chilena compraba a todo el mundo. Cortamos el 40% de la pauta, reescribimos la oferta y el payback bajó a 2,8 meses.",
    cover: "/images/alza.jpg",
    gallery: ["/images/alza.jpg", "/images/mesa.jpg"],
    oficios: ["performance", "producto", "marca"],
    metric: "−38%",
    metricLabel: "CAC en 90 días",
    metrics: [
      { value: "−38%", label: "CAC" },
      { value: "2,8", label: "meses de payback" },
      { value: "40%", label: "pauta cortada" },
      { value: "Santiago + Valpo", label: "foco geográfico" },
    ],
    body: [
      "Alza llegaba a la mesa con un CAC de $18.400 y un tablero de 70 campañas. La agencia anterior optimizaba el medio. El problema estaba en la oferta: 'tu plata, más fácil' no recorta a nadie.",
      "Reescribimos el territorio alrededor de un uso concreto —la vuelta, el almuerzo, el cargo que sí o sí sale el 5— y apagamos todo lo que no hablaba con gente que ya mueve plata en la calle. Landings propias, CAPI bien puesto, y una lectura los martes a las 10:00.",
      "A los 90 días el CAC estaba en $11.400. El 40% del gasto se había cortado. El payback, en 2,8 meses. La pauta sigue siendo de Alza, en su Business Manager. Nosotros firmamos el criterio.",
    ],
    corte: [
      "Campañas de awareness 'para la marca'",
      "Lookalikes de compradores de 2019",
      "La oferta genérica de 'control de tu plata'",
      "Landings con nueve beneficios y ningún uso",
    ],
    result: "CAC −38%. Payback 2,8 meses. Pauta propia, criterio nuestro.",
    featured: true,
  },
  {
    slug: "casa-lira",
    folio: "02",
    client: "Casa Lira",
    sector: "Vino · Colchagua",
    year: "2024",
    title: "La viña no necesitaba más feria. Necesitaba demanda propia.",
    lead: "Lolol, trece hectáreas, 8% de venta directa. Marca, tienda y un relato de cosecha nocturna. Catorce meses después, la directa era el 19%.",
    cover: "/images/lira.jpg",
    gallery: ["/images/lira.jpg", "/images/lira-2.jpg"],
    oficios: ["marca", "producto", "contenido"],
    metric: "+140%",
    metricLabel: "venta directa",
    metrics: [
      { value: "+140%", label: "venta directa" },
      { value: "8 → 19%", label: "mix DTC" },
      { value: "14", label: "meses de trabajo" },
      { value: "EE.UU.", label: "landing de export" },
    ],
    body: [
      "Casa Lira vendía bien a través de distribuidores y mal a quien quería la botella en su casa. El sitio era un PDF con carrito. La marca hablaba de terroir como las otras cuarenta del valle.",
      "Cortamos el lenguaje de catálogo. El relato pasó a la cosecha de madrugada, al viento de Lolol, a una sola cepa por vez. Tienda nueva, envíos a todo Chile, contenido filmado en dos noches de vendimia. Una landing en inglés para un importador de California que ya había pedido muestra.",
      "En catorce meses la venta directa subió 140% y pasó del 8% al 19% del mix. El importador cerró el primer contenedor. El distribuidor local sigue. La diferencia es que ya no es el único camino.",
    ],
    corte: [
      "El sitio-catálogo de 40 SKU",
      "Fotos de copa al atardecer, genéricas",
      "Promos de 3x2 que erosionaban el reserva",
      "Hablar de 'terroir' sin nombrar Lolol",
    ],
    result: "Directa +140%. Mix DTC 19%. Primer contenedor a California.",
    featured: true,
  },
  {
    slug: "andino",
    folio: "03",
    client: "Andino",
    sector: "Retail outdoor",
    year: "2025",
    title: "Once tiendas. Un sistema. Cero 'look del día'.",
    lead: "Andino vendía parkas. El contenido vendía salidas. El sell-through de la línea de invierno subió 62%.",
    cover: "/images/andino.jpg",
    gallery: ["/images/andino.jpg", "/images/andino-2.jpg"],
    oficios: ["contenido", "performance", "marca"],
    metric: "+62%",
    metricLabel: "sell-through invierno",
    metrics: [
      { value: "+62%", label: "sell-through" },
      { value: "4,8 M", label: "views orgánicos" },
      { value: "11", label: "tiendas" },
      { value: "12", label: "semanas de sistema" },
    ],
    body: [
      "Andino tiene once tiendas entre Santiago, Temuco y Punta Arenas. El feed era producto sobre fondo blanco y un Reels de tendencia el viernes. El inventario de invierno se quedaba hasta agosto.",
      "Armamos un sistema de 'salidas': un territorio, un formato, una cadencia. Still de material y cerro. Film de gente que sí sale, no de modelos en estudio. La pauta solo levantó las piezas que ya funcionaban orgánicas. Nada se publicó si no se podía pautar.",
      "En doce semanas, 4,8 millones de views orgánicos y el sell-through de la línea de invierno +62% contra el año anterior. El community lo sigue llevando el equipo interno. El criterio, nosotros.",
    ],
    corte: [
      "Producto sobre fondo blanco como contenido",
      "Reels de audio de moda",
      "Pauta de catálogo completo",
      "Un tono distinto por tienda",
    ],
    result: "Sell-through +62%. 4,8 M orgánicos. Sistema, no un calendario.",
    featured: true,
  },
  {
    slug: "nortevolt",
    folio: "04",
    client: "Nortevolt",
    sector: "Energía · B2B",
    year: "2024",
    title: "La minería no compra por un lead magnet.",
    lead: "Eficiencia energética para faenas en el norte. De 9 a 37 SQLs al mes, con un ciclo de 90 días y cero e-book.",
    cover: "/images/nortevolt.jpg",
    gallery: ["/images/nortevolt.jpg", "/images/estudio.jpg"],
    oficios: ["performance", "producto", "seo"],
    metric: "37",
    metricLabel: "SQLs / mes",
    metrics: [
      { value: "9 → 37", label: "SQLs / mes" },
      { value: "90", label: "días de ciclo" },
      { value: "−", label: "e-books" },
      { value: "Antofagasta", label: "territorio" },
    ],
    body: [
      "Nortevolt vende eficiencia a faenas. El sitio anterior pedía un mail a cambio de un PDF de 24 páginas. Los gerentes de mantenimiento no bajan PDFs. Piden un número y una visita.",
      "Cortamos el magnet. El sitio pasó a tres casos técnicos, un número de WhatsApp de un ingeniero, y un formulario de 4 campos. LinkedIn solo a cargos de faena y de energía. SEO sobre problemas reales —factor de potencia, peak, contrato de suministro— no sobre 'soluciones innovadoras'.",
      "En seis meses los SQLs calificados pasaron de 9 a 37 al mes. El ciclo sigue en 90 días: es minería. Lo que cambió es que el pipeline ya no depende de una feria en Antofagasta.",
    ],
    corte: [
      "El e-book de 24 páginas",
      "LinkedIn a 'tomadores de decisión' genéricos",
      "La palabra innovación en el H1",
      "Formularios de nueve campos",
    ],
    result: "9 → 37 SQLs/mes. Ciclo intacto. Cero magnets.",
    featured: true,
  },
  {
    slug: "oficio",
    folio: "05",
    client: "Oficio",
    sector: "Alimentos",
    year: "2025",
    title: "Seis locales. Una sola voz a las 6:00.",
    lead: "Panadería de barrio que ya no era de barrio. Local SEO, contenido de obrador y pauta de un kilómetro a la redonda.",
    cover: "/images/oficio.jpg",
    gallery: ["/images/oficio.jpg", "/images/italia.jpg"],
    oficios: ["seo", "contenido", "performance"],
    metric: "+44%",
    metricLabel: "ticket de local nuevo",
    metrics: [
      { value: "+44%", label: "ticket local 6" },
      { value: "6", label: "locales" },
      { value: "1 km", label: "radio de pauta" },
      { value: "6:00", label: "primera pieza del día" },
    ],
    body: [
      "Oficio abrió el sexto local en Ñuñoa con la receta intacta y la demanda en cero. El Instagram era de la socia, a deshora. Google los confundía con una panadería de Ñuñoa que ya no existe.",
      "Fichas, contenido de obrador a las 6:00, pauta de un kilómetro. En cuatro meses el local nuevo facturaba 44% sobre el plan. El community lo lleva el turno de la mañana. El criterio, una página.",
    ],
    corte: [
      "El Instagram personal de la socia como canal",
      "Pauta metropolitana para un local de barrio",
      "Fotos de producto de stock",
    ],
    result: "Local 6: +44% sobre plan. SEO local ordenado.",
    featured: false,
  },
  {
    slug: "clinica-austral",
    folio: "06",
    client: "Clínica Austral",
    sector: "Salud",
    year: "2024",
    title: "Reputación es un sistema, no un community.",
    lead: "Clínica privada en Valdivia. Reseñas, pauta de prestaciones y un sitio que no asusta a las 23:00.",
    cover: "/images/austral.jpg",
    gallery: ["/images/austral.jpg", "/images/estudio.jpg"],
    oficios: ["marca", "performance", "producto"],
    metric: "4,8",
    metricLabel: "en Google, 14 meses",
    metrics: [
      { value: "4,8", label: "Google" },
      { value: "+71%", label: "agendamientos web" },
      { value: "14", label: "meses" },
      { value: "Valdivia", label: "territorio" },
    ],
    body: [
      "La clínica tenía un sitio de 2016 y reseñas sin protocolo. La pauta mandaba a un formulario que nadie contestaba el fin de semana. Cortamos el tono corporativo, armamos respuesta en 12 horas y una agenda real.",
      "Catorce meses: 4,8 en Google, agendamientos web +71%. El community no existe. Existe un protocolo y una persona en recepción que lo usa.",
    ],
    corte: [
      "El tono de holding de salud",
      "Pauta de 'excelencia médica' sin prestación",
      "Formulario sin dueño el sábado",
    ],
    result: "4,8 en Google. Agendamientos web +71%.",
    featured: false,
  },
];

export type Person = {
  slug: string;
  name: string;
  role: string;
  oficio: string;
  oficioSlug: string;
  image: string;
  email: string;
  bio: string[];
  before: string[];
};

export const team: Person[] = [
  {
    slug: "amparo-vidal",
    name: "Amparo Vidal",
    role: "Socia · estrategia",
    oficio: "Marca y corte",
    oficioSlug: "marca",
    image: "/images/amparo.jpg",
    email: "amparo@obsidiana.cl",
    bio: [
      "Amparo fundó Obsidiana en 2019, en este piso, porque no quería otra agencia que vendiera horas de community. Sigue tomando ella los diagnósticos que importan. Si la cuenta no cabe, se lo dice esa tarde.",
      "Antes armó marcas adentro de un holding. Dice que el 70% del presupuesto se va en lo que nadie se atrevió a apagar. El corte, lo firma.",
    ],
    before: [
      "Licenciada en Comunicación, Universidad de Chile",
      "Diez años en un holding de consumo masivo",
    ],
  },
  {
    slug: "benjamin-soto",
    name: "Benjamín Soto",
    role: "Socio · performance",
    oficio: "Pauta y número",
    oficioSlug: "performance",
    image: "/images/benjamin.jpg",
    email: "benjamin@obsidiana.cl",
    bio: [
      "Benjamín lee el Business Manager como otros leen un contrato. Llegó en 2020 y armó la práctica de performance. El gasto es del cliente. El criterio, de la mesa.",
      "No reporta alcance. Reporta qué se apagó. Si el CAC no cierra en la semana tres, lo dice en la semana tres.",
    ],
    before: [
      "Ingeniero comercial, Pontificia Universidad Católica de Chile",
      "Siete años en una red de medios, Latam",
    ],
  },
  {
    slug: "isidora-hahn",
    name: "Isidora Hahn",
    role: "Directora de marca",
    oficio: "Verbal y sistema",
    oficioSlug: "marca",
    image: "/images/isidora.jpg",
    email: "isidora@obsidiana.cl",
    bio: [
      "Isidora escribe el territorio y elige qué se rechaza. Entró en 2021. Cree que una marca sin criterio es un moodboard con RUT.",
      "Dirige still y film. Si una pieza no se puede pautar, no se publica.",
    ],
    before: [
      "Diseño, Pontificia Universidad Católica de Chile",
      "Dirección de arte en dos estudios de Santiago",
    ],
  },
  {
    slug: "matias-lagos",
    name: "Matías Lagos",
    role: "Contenido",
    oficio: "Sistema always-on",
    oficioSlug: "contenido",
    image: "/images/matias.jpg",
    email: "matias@obsidiana.cl",
    bio: [
      "Matías arma el sistema, no el post del viernes. Film, still, cadencia. Entró en 2022. Dice que el contenido que no se puede repetir no es un sistema.",
      "Produce en Santiago y en terreno. La primera pieza del día, a veces, a las 6:00.",
    ],
    before: [
      "Periodismo, Universidad Diego Portales",
      "Mesa de contenidos en un medio y en una marca de retail",
    ],
  },
  {
    slug: "paula-riquelme",
    name: "Paula Riquelme",
    role: "Producto digital",
    oficio: "Sitio y cierre",
    oficioSlug: "producto",
    image: "/images/paula.jpg",
    email: "paula@obsidiana.cl",
    bio: [
      "Paula construye el lugar donde se cierra. Sitios, landings, medición desde el primer commit. Entró en 2023.",
      "Si el sitio es el cuello de botella, se lo dice antes de que Benjamín toque la pauta.",
    ],
    before: [
      "Ingeniería civil, Universidad de Chile",
      "Producto en un e-commerce y en una fintech",
    ],
  },
];

export const principles = [
  {
    folio: "I",
    title: "Ocho cuentas.",
    text: "Las que caben en la mesa. Si el año está lleno, se lo decimos. No acumulamos logos para parecer grandes.",
  },
  {
    folio: "II",
    title: "El gasto es suyo.",
    text: "La pauta se paga directo a Meta y a Google, en su Business Manager. Nosotros no marcamos media. Firmamos el criterio.",
  },
  {
    folio: "III",
    title: "Por escrito, en UF.",
    text: "Retainer, etapas y fuera de alcance salen en papel. IVA aparte. Lo que no está escrito, no está pactado.",
  },
  {
    folio: "IV",
    title: "El corte se firma.",
    text: "Cada semana hay algo que se apaga. Si nadie corta, no hay estudio. Hay un proveedor de avisos.",
  },
] as const;

export const steps = [
  {
    folio: "01",
    title: "Diagnóstico",
    body: "Cuarenta minutos en Barrio Italia o por videollamada. Traiga pauta, CAC, sitio y lo que no funciona. Dos diagnósticos por semana. Si no hay caso, se lo decimos esa tarde.",
  },
  {
    folio: "02",
    title: "El corte",
    body: "En cinco días hábiles: qué se apaga, qué se dobla, y un honorario en UF. Una página. Sin deck de 80 láminas.",
  },
  {
    folio: "03",
    title: "El sistema",
    body: "Marca, pauta y producto como un solo ritmo. Un socio a cargo. Lectura semanal, los martes. WhatsApp de la mesa, no de una cuenta de community.",
  },
  {
    folio: "04",
    title: "La lectura",
    body: "Cada martes: números, piezas, la decisión de apagar. El retainer cubre el criterio. La pauta, la paga usted. Si en 90 días no hay caso, se sale.",
  },
] as const;

export const refusals = [
  {
    title: "Cuentas que buscan 'presencia'.",
    text: "Presencia no es un objetivo. Si no hay un número que mover —CAC, sell-through, agenda, SQL— no hay corte.",
  },
  {
    title: "Pautas para probar.",
    text: "Mínimo $8.000.000 al mes en plataforma, IVA aparte. Por debajo de eso el ruido gana. Se lo decimos antes de firmar.",
  },
  {
    title: "Community por hora.",
    text: "No vendemos horas de respuesta en DMs. Armamos un protocolo. Si necesita un community, se lo decimos a quién contratar.",
  },
  {
    title: "Garantías de primer lugar.",
    text: "Ni en Google ni en el ROAS. El Colegio no nos rige, la práctica sí. Prometemos el criterio y el escrito. El mercado, no.",
  },
  {
    title: "Decks de 80 láminas.",
    text: "El corte cabe en una página. Si necesita un teatro de onboarding, hay otras agencias.",
  },
  {
    title: "Marcas que no se pueden leer.",
    text: "Ocho al año. Si ya están las ocho, la respuesta es no, con el nombre de a quién sí conviene llamar.",
  },
] as const;

export const fees = [
  {
    servicio: "Diagnóstico (40 min)",
    precio: "Sin costo",
    nota: "Dos por semana. Si no hay caso, se lo decimos esa tarde. No se descuenta de nada: no hay nada que vender todavía.",
  },
  {
    servicio: "Retainer mensual",
    precio: "desde 48 UF",
    nota: "Marca, pauta y producto como un sistema. Lectura los martes. IVA aparte. Mínimo tres meses.",
  },
  {
    servicio: "Pauta (plataforma)",
    precio: "la paga usted",
    nota: "Directo a Meta y Google, en su Business Manager. Mínimo $8.000.000 al mes. No marcamos media.",
  },
  {
    servicio: "Sitio o landing",
    precio: "desde 90 UF",
    nota: "Por etapas, por escrito. Medición desde el primer commit. No es un sitio 'de presencia'.",
  },
  {
    servicio: "Sprint de contenido",
    precio: "desde 28 UF",
    nota: "Territorio, piezas, cadencia de 12 semanas. Si no se puede pautar, no se publica.",
  },
  {
    servicio: "El corte (una página)",
    precio: "6 UF",
    nota: "Si el diagnóstico pide profundidad y aún no hay retainer. Qué se apaga, qué se dobla, en cinco días hábiles.",
  },
] as const;

export const faqs = [
  {
    q: "¿Garantizan un ROAS?",
    a: "No. Nadie que haya pautado en serio lo hace. Le decimos si hay caso, qué cortaríamos, y un número de partida. El mercado no se firma.",
  },
  {
    q: "¿La pauta va incluida en el retainer?",
    a: "No. El retainer es el criterio. El gasto de media lo paga usted, directo a la plataforma, en su cuenta. No marcamos porcentaje sobre pauta.",
  },
  {
    q: "¿Toman pymes que recién empiezan?",
    a: "Solo si ya hay oferta, un canal y un número que mover. Si está armando la marca desde cero y no hay pauta, el diagnóstico sirve para decirle qué no hacer. El retainer, no.",
  },
  {
    q: "¿Trabajan fuera de Santiago?",
    a: "Sí. El piso está en Barrio Italia. Las cuentas están donde estén: Valdivia, Antofagasta, Lolol, Punta Arenas. El diagnóstico puede ser por videollamada.",
  },
  {
    q: "¿Cuánto demoran en responder?",
    a: "24 horas hábiles. El diagnóstico, si hay cupo, en los próximos diez días. Dos por semana. Si el mes está lleno, se lo decimos.",
  },
  {
    q: "¿Con quién hablo después de firmar?",
    a: "Con un socio. Amparo o Benjamín. WhatsApp de la mesa, no de una ejecutiva que no leyó el número.",
  },
] as const;

export const oficioOptions = [
  "Marca",
  "Performance",
  "Contenido",
  "Producto",
  "SEO",
  "Retención",
  "No lo tengo claro",
] as const;

export const spendOptions = [
  "Aún no pautamos",
  "Menos de $8 millones / mes",
  "$8 a $20 millones / mes",
  "$20 a $50 millones / mes",
  "Más de $50 millones / mes",
] as const;

export function getOficio(slug: string) {
  return oficios.find((item) => item.slug === slug);
}

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getPerson(slug: string) {
  return team.find((item) => item.slug === slug);
}

export function casesByOficio(slug: string) {
  return cases.filter((item) => item.oficios.includes(slug));
}
