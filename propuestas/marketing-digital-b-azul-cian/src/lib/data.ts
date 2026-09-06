export type Channel = {
  slug: string;
  station: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  personSlug: string;
  body: string[];
  work: string[];
  when: string[];
  not: string[];
  price: string;
  priceNote: string;
};

export const channels: Channel[] = [
  {
    slug: "lectura",
    station: "01",
    title: "Lectura",
    short: "Se mira la cuenta. No la presentación.",
    lead: "Cuarenta y cinco minutos. Sale una minuta: qué cortar, qué subir, si hay trabajo.",
    image: "/images/mesa.jpg",
    personSlug: "amelia-riquelme",
    body: [
      "Antes de pauta, pieza o sitio, leemos. Business Manager, Search, el sitio, el WhatsApp, lo que el cliente cree que vende y lo que realmente entra. La lectura sale por escrito: coeficiente de la cuenta, canales que sostienen, canales que se apagan.",
      "No es un taller de post-its. Es una hora con números y con quien va a firmar el retainer. Si no hay caso, se lo decimos esa tarde — y a quién conviene escribir.",
    ],
    work: [
      "Auditoría de pauta (Meta, Google, LinkedIn)",
      "Lectura de sitio y de conversión",
      "Mapa de canales y de ruido",
      "Minuta en 48 horas hábiles",
      "Honorario del mes, en UF, si hay trabajo",
    ],
    when: [
      "Lleva meses de pauta y no puede decir el CAC en una frase",
      "El sitio no convierte y el equipo discute opiniones",
      "Quiere un retainer y necesita un número serio",
    ],
    not: [
      "No hacemos auditorías de 80 páginas que nadie lee",
      "No cobramos la lectura si, en 48 horas, no hay minuta",
    ],
    price: "$92.000",
    priceNote:
      "45 minutos, presencial en Valparaíso o videollamada. Se descuenta del primer mes si cerramos.",
  },
  {
    slug: "pauta",
    station: "02",
    title: "Pauta",
    short: "Media que se paga. Sin el 15% encima.",
    lead: "La pauta la paga el cliente. Nosotros cobramos el oficio, no un markup para parecer agencia.",
    image: "/images/oleaje.jpg",
    personSlug: "cristobal-nunez",
    body: [
      "Cristóbal arma, cubica y corta. Meta, Google, LinkedIn cuando el B2B lo pide. El presupuesto de media es suyo: se factura directo a la plataforma. MAREA cobra el oficio, no un porcentaje escondido.",
      "Reportamos semanal, no con un PDF de 40 slides. Una hoja: gasto, CAC o ROAS, qué se cortó, qué se subió. Si una campaña no sostiene dos semanas, se apaga. La marea no se discute: se lee.",
    ],
    work: [
      "Estructura de campañas y de audiencias",
      "Meta Ads, Google Ads, LinkedIn Ads",
      "Píxel, CAPI y medición de verdad",
      "Corte semanal: qué vive, qué muere",
      "Cero markup de media",
    ],
    when: [
      "Está gastando y no puede decir el CAC en una frase",
      "Le armaron 40 conjuntos y ninguno tiene volumen",
      "Quiere que la factura de Meta le llegue a él",
    ],
    not: [
      "No tomamos pauta sin acceso al Business Manager del cliente",
      "No sostenemos campañas que no se pueden medir",
    ],
    price: "desde 16 UF / mes",
    priceNote:
      "Oficio, no media. El presupuesto de pauta lo pone el cliente, directo a la plataforma.",
  },
  {
    slug: "pieza",
    station: "03",
    title: "Pieza",
    short: "Lo que se publica. Se lee en el celular.",
    lead: "Una pieza que no se entiende a una mano, en la micro, no es una pieza.",
    image: "/images/cerro.jpg",
    personSlug: "sofia-alarcon",
    body: [
      "Sofía escribe y corta. Anuncios, landing copy, secuencias de WhatsApp, el mail que sí se abre. El criterio es chileno: usted, concreto, sin ‘soluciones integrales’.",
      "No hacemos el pack de doce posts. Hacemos las piezas que la pauta necesita y las que la marca puede sostener. Si el mes pide seis, son seis.",
    ],
    work: [
      "Copy de pauta y de landing",
      "Piezas para Meta y YouTube",
      "Secuencias de WhatsApp Business",
      "Guion corto y dirección de foto",
      "Edición al tono de la cuenta, no al de la agencia",
    ],
    when: [
      "La pauta está bien armada y el anuncio no se entiende",
      "El sitio habla en corporativo y el cliente habla en calle",
      "Necesita piezas, no un community manager a 8 UF",
    ],
    not: [
      "No hacemos TikTok de baile ni ‘contenido de tendencia’",
      "No firmamos packs mensuales de cantidad",
    ],
    price: "desde 14 UF / mes",
    priceNote: "Volumen según la cuenta. Se acuerda en la minuta, no en un catálogo.",
  },
  {
    slug: "sitio",
    station: "04",
    title: "Sitio",
    short: "Donde aterriza la pauta.",
    lead: "El sitio no es un brochure. Es el lugar donde el clic tiene que pagar.",
    image: "/images/hero.jpg",
    personSlug: "ignacio-pena",
    body: [
      "Ignacio arma sitios y landings que cargan rápido, se leen y se pueden medir. Preferimos Next. Si el WordPress del cliente convierte, no lo quemamos por moda.",
      "Una landing no es un home con menos páginas. Es una tesis: una oferta, una prueba, un formulario que alguien va a contestar. En 4G, en un cerro, con el pulgar.",
    ],
    work: [
      "Sitios y landings en Next",
      "Formularios, WhatsApp y eventos",
      "SEO técnico de base",
      "Mantenimiento de lo que ya convierte",
      "No reconstruimos por aburrimiento",
    ],
    when: [
      "La pauta manda tráfico a una home que no cierra",
      "El sitio pesa 8 MB y en 4G se va el lead",
      "Hay que lanzar una oferta en diez días, no en un trimestre",
    ],
    not: [
      "No hacemos tiendas de 400 SKU ni apps nativas",
      "No cobramos ‘presencia digital’ por un OnePager de plantilla",
    ],
    price: "desde 28 UF",
    priceNote: "Landing o sitio chico. Valores referenciales; se confirma tras la lectura.",
  },
  {
    slug: "medicion",
    station: "05",
    title: "Medición",
    short: "Si no se puede leer, no se prende.",
    lead: "Píxel, CAPI, un CRM mínimo. Sin teatro de dashboards.",
    image: "/images/puerto.jpg",
    personSlug: "laura-venegas",
    body: [
      "Laura arma la medición para que el corte semanal no sea una opinión. Eventos que existen, WhatsApp que se puede atribuir, un tablero que cabe en una hoja.",
      "Si la cuenta no deja instalar CAPI o no hay nadie que conteste el formulario, no hay pauta. La marea se lee con instrumentos, no con fe.",
    ],
    work: [
      "Píxel, CAPI, Google Ads tag",
      "Eventos de conversión reales",
      "CRM mínimo o planilla que alguien usa",
      "Tablero de una hoja, cada lunes",
      "Atribución de WhatsApp, no de vanidad",
    ],
    when: [
      "Hay pauta y nadie puede decir qué anunció el lead",
      "El Analytics está, y no se abre desde marzo",
      "El comercial filtra turismo de un formulario eterno",
    ],
    not: [
      "No vendemos ‘data lakes’ ni looker de 40 pantallas",
      "No prendemos pauta sin un evento que se pueda defender",
    ],
    price: "desde 12 UF / mes",
    priceNote: "Piso de tres meses. Se puede ir dentro del retainer.",
  },
];

export type Person = {
  slug: string;
  name: string;
  role: string;
  station: string;
  stationSlug: string;
  email: string;
  initials: string;
  bio: string[];
  education: string[];
  signs: string[];
};

export const mesa: Person[] = [
  {
    slug: "amelia-riquelme",
    name: "Amelia Riquelme",
    role: "Socia",
    station: "Lectura",
    stationSlug: "lectura",
    email: "amelia@marea.cl",
    initials: "AR",
    bio: [
      "Amelia fundó MAREA en 2020, en este piso, después de cinco años en una agencia de Providencia donde las cuentas se acumulaban y nadie miraba el Business Manager el viernes. Nueve cuentas. Si el mes está lleno, se lo dice.",
      "Lleva la lectura. Cree que una minuta de dos páginas vale más que un deck de cuarenta, y que el retainer se firma cuando hay un número, no una vibra.",
    ],
    education: [
      "Periodismo, Universidad de Valparaíso",
      "Magíster en Comunicación Estratégica, Pontificia Universidad Católica de Valparaíso",
    ],
    signs: ["Lectura", "Minuta", "Corte"],
  },
  {
    slug: "cristobal-nunez",
    name: "Cristóbal Núñez",
    role: "Pauta",
    station: "Pauta",
    stationSlug: "pauta",
    email: "cristobal@marea.cl",
    initials: "CN",
    bio: [
      "Cristóbal cobra el oficio, no un porcentaje de la pauta. Entró como socio en 2021. Antes compraba media en Santiago y se hartó de explicar el markup a gerentes que no lo habían pedido.",
      "Google y Meta certificados. El corte semanal lo hace él. Si una campaña no sostiene, la apaga. No la ‘optimiza’ hasta fin de mes para que el reporte se vea lleno.",
    ],
    education: [
      "Ingeniería Comercial, Universidad Técnica Federico Santa María",
      "Certificación Google Ads y Meta Blueprint",
    ],
    signs: ["Pauta", "CAC", "Corte semanal"],
  },
  {
    slug: "sofia-alarcon",
    name: "Sofía Alarcón",
    role: "Pieza",
    station: "Pieza",
    stationSlug: "pieza",
    email: "sofia@marea.cl",
    initials: "SA",
    bio: [
      "Sofía escribe como se habla en Chile. Llegó en 2022. Antes editaba en un medio de Valparaíso y se cansó de ver anuncios que nadie leería ni en el propio diario.",
      "Una pieza que no se entiende a una mano, en el trolley, no sale. El pack de doce posts no se lo pidan.",
    ],
    education: [
      "Periodismo, Universidad de Playa Ancha",
      "Diplomado en Escritura, Universidad de Chile",
    ],
    signs: ["Copy", "Pieza", "Tono"],
  },
  {
    slug: "ignacio-pena",
    name: "Ignacio Peña",
    role: "Sitio",
    station: "Sitio",
    stationSlug: "sitio",
    email: "ignacio@marea.cl",
    initials: "IP",
    bio: [
      "Ignacio arma el lugar donde la pauta aterriza. Entró en 2021. Diseñador, y el que mira el Lighthouse antes de mirar el moodboard.",
      "Si el WordPress convierte, no lo cambia por capricho. Si hay que hacer un sitio nuevo, es Next, es liviano, y el formulario lo contesta alguien de esta mesa.",
    ],
    education: [
      "Diseño, Pontificia Universidad Católica de Valparaíso",
      "Especialización en producto digital, independiente",
    ],
    signs: ["Sitio", "Landing", "Medición"],
  },
  {
    slug: "laura-venegas",
    name: "Laura Venegas",
    role: "Medición",
    station: "Medición",
    stationSlug: "medicion",
    email: "laura@marea.cl",
    initials: "LV",
    bio: [
      "Laura lleva los instrumentos: píxel, CAPI, el tablero de una hoja. Entró en 2023. Si el evento no existe, la pauta no se prende.",
      "Tres meses de piso. Si le piden un dashboard para impresionar al directorio, recomienda una imprenta.",
    ],
    education: [
      "Ingeniería Civil Industrial, Universidad de Valparaíso",
      "Especialización en analítica, formación continua",
    ],
    signs: ["CAPI", "Eventos", "Tablero"],
  },
];

export type Account = {
  slug: string;
  tx: string;
  title: string;
  client: string;
  place: string;
  year: string;
  months: string;
  channel: string;
  channelSlug: string;
  metric: string;
  metricLabel: string;
  image: string;
  summary: string;
  body: string[];
  work: string[];
};

export const accounts: Account[] = [
  {
    slug: "caleta-hornos",
    tx: "TX-01",
    title: "De la caleta al refrigerador, sin mayorista",
    client: "Caleta Hornos",
    place: "La Higuera, Coquimbo",
    year: "2025",
    months: "10 meses",
    channel: "Pauta + sitio",
    channelSlug: "pauta",
    metric: "3,4",
    metricLabel: "ROAS en search, trimestre 3",
    image: "/images/oleaje.jpg",
    summary:
      "Una caleta que vendía a intermediario abrió canal directo. Sitio corto, search de ‘ostión Chile’ y un WhatsApp de despacho que sí contestaba.",
    body: [
      "Vendían ostión y loco a un mayorista de Santiago. El margen se lo comía la cadena. Armamos un sitio con pocas SKU, bien fotografiadas, y pauta de search en consultas con intención de compra, no de turismo.",
      "La pauta la pagó el cliente, directo. En el trimestre 3 el ROAS de search se sostuvo en 3,4. No hubo community: hubo fichas, un WhatsApp de despacho frío y un mail de recompra a los 21 días.",
    ],
    work: ["Sitio D2C", "Google Ads", "Fichas", "WhatsApp de despacho"],
  },
  {
    slug: "astillero-bio",
    tx: "TX-02",
    title: "Leads B2B sin foto de casco de banco",
    client: "Astillero Bío",
    place: "Talcahuano",
    year: "2025",
    months: "8 meses",
    channel: "Pauta",
    channelSlug: "pauta",
    metric: "−31%",
    metricLabel: "CAC calificado, mes 6 vs mes 1",
    image: "/images/puerto.jpg",
    summary:
      "Reparación naval. LinkedIn y search. Cero fotos de stock. El lead calificado bajó de costo en seis meses.",
    body: [
      "El sitio anterior tenía un formulario que nadie de procurement iba a llenar, y anuncios con casco de banco de imágenes. Cortamos el creativo.",
      "LinkedIn a cargos reales, search a consultas de especialidad, y un formulario de tres campos que llega a un comercial, no a un buzón. CAC calificado −31% al mes 6.",
    ],
    work: ["LinkedIn Ads", "Search B2B", "Formulario corto", "CRM mínimo"],
  },
  {
    slug: "vina-lo-ovalle",
    tx: "TX-03",
    title: "Temporada, no ‘siempre on’",
    client: "Viña Lo Ovalle",
    place: "Casablanca",
    year: "2024–25",
    months: "2 temporadas",
    channel: "Pauta",
    channelSlug: "pauta",
    metric: "91%",
    metricLabel: "ocupación de enoturismo, temporada alta",
    image: "/images/cerro.jpg",
    summary:
      "Enoturismo. Pauta estacional. Se apaga en junio. Se enciende en septiembre. Ocupación de temporada 91%.",
    body: [
      "Lo Ovalle no necesita anuncios en julio. Armamos dos ventanas: septiembre–abril para visitas, y una corta de invierno para el wine club. El resto del año, silencio.",
      "Ocupación de temporada alta 91% en el segundo año. El siempre-on le costaba más de lo que traía.",
    ],
    work: ["Pauta estacional", "Landing de visita", "Corte de invierno", "WhatsApp de cupos"],
  },
  {
    slug: "despacho-sur",
    tx: "TX-04",
    title: "El lead que sí tiene contenedor",
    client: "Despacho Sur",
    place: "San Antonio",
    year: "2025",
    months: "9 meses",
    channel: "Sitio + pauta",
    channelSlug: "sitio",
    metric: "−48%",
    metricLabel: "costo por lead calificado",
    image: "/images/hero.jpg",
    summary:
      "Logística. La landing preguntaba TEU y ruta, no ‘cuéntanos tu desafío’. El comercial dejó de filtrar mudanzas.",
    body: [
      "Llegaban leads de gente que quería enviar una mudanza. La landing nueva pide tipo de carga, TEU aproximado y puerto. El que no puede responder, no entra.",
      "Costo por lead calificado −48%. El sitio anterior se quedó como archivo. La pauta apunta a una sola URL.",
    ],
    work: ["Landing", "Search", "Campos de calificación", "WhatsApp de operaciones"],
  },
  {
    slug: "taller-recreo",
    tx: "TX-05",
    title: "Un SKU, no toda la góndola",
    client: "Taller Recreo",
    place: "Viña del Mar",
    year: "2024",
    months: "6 meses",
    channel: "Pieza + pauta",
    channelSlug: "pieza",
    metric: "+38%",
    metricLabel: "pedidos del SKU piloto",
    image: "/images/mesa.jpg",
    summary:
      "Mueble a medida. En vez de ‘presencia de marca’, una mesa, una foto, un plazo. El resto del taller no se tocó hasta tener esa prueba.",
    body: [
      "El taller quería ‘estar en digital’. Elegimos una mesa, tres fotos de verdad y un plazo de entrega que se podía cumplir un martes. Pauta de intención, no un film de viruta.",
      "Pedidos del SKU piloto +38% en el semestre. El resto del catálogo no se anunció hasta tener esa prueba.",
    ],
    work: ["Pieza de producto", "Pauta de intención", "Un SKU", "WhatsApp de taller"],
  },
  {
    slug: "editorial-cardumen",
    tx: "TX-06",
    title: "Suscripción que no se fuga en el número tres",
    client: "Editorial Cardumen",
    place: "Valparaíso",
    year: "2024–25",
    months: "14 meses",
    channel: "Medición + pieza",
    channelSlug: "medicion",
    metric: "79%",
    metricLabel: "retención a mes 6",
    image: "/images/boya.jpg",
    summary:
      "Una editora independiente. El problema no era el anuncio: era que el suscriptor se iba al tercer número. Eco, no más pauta.",
    body: [
      "Cardumen vendía bien el primer mes y perdía al tercero. Bajamos pauta de adquisición y armamos el eco: mail del número, recordatorio, un PDF de muestra, WhatsApp de despacho que no era un bot.",
      "Retención a mes 6: 79%. La pauta volvió, más cara, cuando el agujero ya no estaba.",
    ],
    work: ["Retención", "Mail", "WhatsApp de despacho", "Pauta de reactivación"],
  },
];

export const fees = [
  {
    servicio: "Lectura (45 min)",
    precio: "$92.000",
    nota: "Se descuenta del primer mes si cerramos. Minuta en 48 horas hábiles.",
  },
  {
    servicio: "Retainer (cuenta)",
    precio: "desde 36 UF + IVA / mes",
    nota: "Pauta, pieza y mesa. Nueve cuentas. Cupo, no catálogo.",
  },
  {
    servicio: "Pauta (oficio)",
    precio: "desde 16 UF / mes",
    nota: "Sin markup de media. El cliente paga la plataforma.",
  },
  {
    servicio: "Pieza",
    precio: "desde 14 UF / mes",
    nota: "Volumen según la cuenta. Sin pack de doce posts.",
  },
  {
    servicio: "Sitio / landing",
    precio: "desde 28 UF",
    nota: "Proyecto. Valores referenciales; se confirma tras la lectura.",
  },
  {
    servicio: "Medición",
    precio: "desde 12 UF / mes",
    nota: "Piso de tres meses. Píxel, CAPI, tablero de una hoja.",
  },
] as const;

export const principles = [
  {
    folio: "I",
    title: "Se lee antes de gastar.",
    text: "La tabla primero. Si la cuenta no tiene coeficiente, no hay pauta. Una minuta de dos páginas vale más que un deck de cuarenta.",
  },
  {
    folio: "II",
    title: "La pauta la paga usted.",
    text: "Cero markup de media. Factura de Meta, Google o LinkedIn a su nombre. Cobramos el oficio, en UF.",
  },
  {
    folio: "III",
    title: "Si no sostiene, se apaga.",
    text: "Una campaña que no sostiene dos semanas no se ‘optimiza’ hasta el reporte. Se corta. Nueve cuentas, no un roster para el pitch.",
  },
] as const;

export const questions = [
  {
    q: "¿Hacen community management?",
    a: "No el pack de doce posts ni el community a 8 UF. Pieza sí: lo que la pauta y la marca necesitan. Si lo que busca es alguien que suba todos los días, hay otras mesas.",
  },
  {
    q: "¿La pauta va con recargo de agencia?",
    a: "No. Cero markup. El presupuesto de media lo pone usted, directo a Meta, Google o LinkedIn. MAREA cobra el oficio, en UF.",
  },
  {
    q: "¿Cuántas cuentas toman?",
    a: "Nueve. Si el mes está lleno, se lo decimos en la primera respuesta. No acumulamos para parecer una agencia de Providencia.",
  },
  {
    q: "¿Trabajan fuera de Valparaíso?",
    a: "Sí. Coquimbo, Talcahuano, Casablanca, San Antonio, Viña. La lectura puede ser por videollamada. El criterio no cambia. Santiago, también — el trolley no es un requisito.",
  },
  {
    q: "¿Los valores son en UF más IVA?",
    a: "El retainer y los proyectos, sí. La lectura es $92.000 y se descuenta si cerramos. Valores referenciales; se confirman en la minuta.",
  },
  {
    q: "¿Hacen TikTok y ‘tendencias’?",
    a: "No. Tampoco reputación falsa, ni pauta sin medición, ni sitios de plantilla vendidos como ‘presencia’. Si el canal no se puede leer, no se prende.",
  },
] as const;

export const channelOptions = [
  "Lectura / no lo tengo claro",
  "Pauta",
  "Pieza",
  "Sitio",
  "Medición",
] as const;

export const hoursOfWork = [
  {
    time: "09:30",
    title: "Lectura",
    body: "Se abre el Business Manager, el Analytics, el sitio. No hace falta un deck. Hace falta la cuenta.",
  },
  {
    time: "12:00",
    title: "Corte",
    body: "Qué vive, qué muere. Si una campaña no sostuvo la mañana, no se ‘optimiza’ hasta el viernes.",
  },
  {
    time: "16:00",
    title: "Pieza",
    body: "Lo que se publica esta semana. Se lee en el celular, a una mano, en el trolley.",
  },
  {
    time: "18:00",
    title: "Bitácora",
    body: "Una hoja. Gasto, CAC o ROAS, qué se cortó. Quien tomó la lectura sigue en la mesa.",
  },
] as const;

export function getChannel(slug: string) {
  return channels.find((item) => item.slug === slug);
}

export function getPerson(slug: string) {
  return mesa.find((item) => item.slug === slug);
}

export function getAccount(slug: string) {
  return accounts.find((item) => item.slug === slug);
}
