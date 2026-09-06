export const site = {
  name: "SEÑAL",
  legalName: "Señal Estudio SpA",
  tagline: "Si no llega, no es marketing.",
  description:
    "Estudio de marketing digital en Barrio Yungay, Santiago. Pauta, pieza y sitios para diez cuentas. Sin markup de media. Lectura en 45 minutos.",
  url: "https://senal.cl",
  rut: "77.841.203-9",
  founded: 2018,
  accounts: 10,
  email: "hola@senal.cl",
  phone: "+56 9 7614 3382",
  phoneHref: "tel:+56976143382",
  whatsapp:
    "https://wa.me/56976143382?text=Hola%2C%20quiero%20pedir%20una%20lectura%20en%20SE%C3%91AL.",
  address: {
    line: "Maturana 612",
    city: "Barrio Yungay, Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    postal: "8350295",
    maps: "https://maps.google.com/?q=Maturana+612+Santiago",
  },
  metro: "Quinta Normal · 7 min a pie",
  hours: "Lunes a viernes, 9:30 a 19:00",
  hoursShort: "Lun–Vie 9:30–19:00",
  lastHour: "19:00",
  instagram: "https://instagram.com/senal.estudio",
  linkedin: "https://www.linkedin.com/company/senal-estudio",
  lecturaPrice: "$84.000",
  retainerFrom: "42 UF",
} as const;

export const nav = [
  { href: "/aire", label: "El aire" },
  { href: "/bandas", label: "Bandas" },
  { href: "/estudio", label: "El estudio" },
  { href: "/mesa", label: "Mesa" },
] as const;

export type Band = {
  slug: string;
  freq: string;
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

export const bands: Band[] = [
  {
    slug: "lectura",
    freq: "87.9",
    title: "Lectura",
    short: "Diagnóstico. Qué está en el aire y qué es ruido.",
    lead: "Cuarenta y cinco minutos. Se mira la cuenta, no la presentación.",
    image: "/images/papel.jpg",
    personSlug: "elisa-contreras",
    body: [
      "Antes de pauta, pieza o sitio, leemos. Business Manager, Search, el sitio, el WhatsApp, lo que el cliente cree que vende y lo que realmente entra. La lectura sale por escrito: qué cortar, qué subir, y si vale la pena trabajar juntos.",
      "No es un taller de post-its. Es una hora con números y con el criterio de quien va a firmar el retainer. Si no hay caso, se lo decimos esa tarde.",
    ],
    work: [
      "Auditoría de pauta (Meta, Google, LinkedIn)",
      "Lectura de sitio y de conversión",
      "Mapa de canales y de ruido",
      "Minuta en 48 horas hábiles",
      "Honorario del mes, en UF, si hay trabajo",
    ],
    when: [
      "Lleva meses de pauta y no sabe qué está comprando",
      "El sitio no convierte y el equipo discute opiniones",
      "Quiere un retainer y necesita un número serio",
    ],
    not: [
      "No hacemos auditorías de 80 páginas que nadie lee",
      "No cobramos la lectura si, en 48 horas, no hay minuta",
    ],
    price: "$84.000",
    priceNote:
      "45 minutos, presencial o videollamada. Se descuenta del primer mes si cerramos.",
  },
  {
    slug: "pauta",
    freq: "91.3",
    title: "Pauta",
    short: "Media que se paga. Sin el 15% encima.",
    lead: "La pauta la paga el cliente. Nosotros no le ponemos un markup para parecer agencia.",
    image: "/images/sala.jpg",
    personSlug: "martin-ossandon",
    body: [
      "Martín arma, cubica y corta. Meta, Google, LinkedIn cuando el B2B lo pide. El presupuesto de media es suyo: se factura directo a la plataforma. SEÑAL cobra el oficio, no un porcentaje escondido.",
      "Reportamos semanal, no con un PDF de 40 slides. Una hoja: gasto, CAC o ROAS, qué se cortó, qué se subió. Si una campaña no sostiene dos semanas, se apaga.",
    ],
    work: [
      "Estructura de campañas y de audiencias",
      "Meta Ads, Google Ads, LinkedIn Ads",
      "Píxel, CAPI y medición de verdad",
      "Corte semanal: qué vive, qué muere",
      "Sin markup de media",
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
    price: "desde 18 UF / mes",
    priceNote:
      "Oficio, no media. El presupuesto de pauta lo pone el cliente, directo a la plataforma.",
  },
  {
    slug: "pieza",
    freq: "94.7",
    title: "Pieza",
    short: "Lo que se publica. Se lee en el celular.",
    lead: "Una pieza que no se entiende a una mano, en la micro, no es una pieza.",
    image: "/images/mesa.jpg",
    personSlug: "trinidad-caceres",
    body: [
      "Trinidad escribe y corta. Anuncios, landing copy, secuencias de WhatsApp, el mail que sí se abre. El criterio es chileno: usted, concreto, sin ‘soluciones integrales’.",
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
    price: "desde 16 UF / mes",
    priceNote: "Volumen según la cuenta. Se acuerda en la minuta, no en un catálogo.",
  },
  {
    slug: "sitio",
    freq: "98.1",
    title: "Sitio",
    short: "Donde aterriza la pauta.",
    lead: "El sitio no es un brochure. Es el lugar donde el clic tiene que pagar.",
    image: "/images/casona.jpg",
    personSlug: "hector-palma",
    body: [
      "Héctor arma sitios y landings que cargan rápido, se leen y se pueden medir. Preferimos Next. Si el WordPress del cliente convierte, no lo quemamos por moda.",
      "Una landing no es un home con menos páginas. Es una tesis: una oferta, una prueba, un formulario que alguien va a contestar.",
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
    price: "desde 32 UF",
    priceNote: "Landing o sitio chico. Valores referenciales; se confirma tras la lectura.",
  },
  {
    slug: "marca",
    freq: "102.5",
    title: "Marca",
    short: "El nombre, el tono, el sistema. No el logo por el logo.",
    lead: "Marca es lo que queda cuando se apaga la pauta.",
    image: "/images/patio.jpg",
    personSlug: "elisa-contreras",
    body: [
      "Sistema, no moodboard. Nombre si hace falta, tono, paleta corta, cómo se habla en un anuncio y en un mail de cobranza. El trabajo dura si el equipo del cliente lo puede usar un martes a las 18:00, sin llamarnos.",
      "No ‘rebrandings’ de seis meses. Un sistema que se puede aplicar en el sitio, en la pauta y en el WhatsApp de ventas.",
    ],
    work: [
      "Posicionamiento y tono",
      "Sistema visual corto",
      "Lineamientos de pieza",
      "Nombrar cuando el nombre no trabaja",
      "Aplicación en sitio y pauta",
    ],
    when: [
      "La empresa creció y el tono se quedó en 2016",
      "Cada proveedor inventa una marca distinta",
      "Van a pauta y no hay un criterio que sobreviva dos semanas",
    ],
    not: [
      "No hacemos identity de 80 páginas para el cajón",
      "No vendemos merchandising ni ‘activaciones de marca’",
    ],
    price: "desde 55 UF",
    priceNote: "Proyecto cerrado, no retainer. Plazo típico: 6 a 10 semanas.",
  },
  {
    slug: "eco",
    freq: "107.1",
    title: "Eco",
    short: "SEO, retención, lo que sigue sonando.",
    lead: "El SEO no es un truco. Es un archivo que se mantiene.",
    image: "/images/mast.jpg",
    personSlug: "amanda-fuenzalida",
    body: [
      "Amanda trabaja el eco: búsqueda, contenidos que se quedan, el mail que vuelve, el WhatsApp que no se abandona. Seis meses mínimo. Si alguien promete primera página en treinta días, no somos nosotros.",
      "Retención es menos glamuroso que el anuncio nuevo. También es más barato que volver a comprar al mismo cliente.",
    ],
    work: [
      "SEO técnico y editorial",
      "Arquitectura de contenidos",
      "Flujos de retención (mail, WhatsApp)",
      "Medición de cohortes, no de vanidad",
      "Seis meses de piso",
    ],
    when: [
      "Toda la demanda entra por pauta y el CAC sube cada trimestre",
      "El blog existe y no rankea ni se lee",
      "Compra clientes que no vuelven",
    ],
    not: [
      "No vendemos backlinks ni ‘paquetes SEO’",
      "No tomamos eco por menos de seis meses",
    ],
    price: "desde 28 UF / mes",
    priceNote: "Piso de seis meses. Valores referenciales; se confirma tras la lectura.",
  },
];

export type Person = {
  slug: string;
  name: string;
  role: string;
  band: string;
  bandSlug: string;
  image: string;
  email: string;
  bio: string[];
  education: string[];
  signs: string[];
};

export const mesa: Person[] = [
  {
    slug: "elisa-contreras",
    name: "Elisa Contreras",
    role: "Socia",
    band: "Lectura y marca",
    bandSlug: "lectura",
    image: "/images/elisa.jpg",
    email: "elisa@senal.cl",
    bio: [
      "Elisa fundó SEÑAL en 2018, en este piso, después de seis años en una agencia de Providencia donde las cuentas se acumulaban y nadie leía el Business Manager el viernes. Diez cuentas. Si el mes está lleno, se lo dice.",
      "Lleva la lectura y la marca. Cree que una minuta de dos páginas vale más que un deck de cuarenta, y que el retainer se firma cuando hay un número, no una vibra.",
    ],
    education: [
      "Periodismo, Universidad de Chile",
      "Magíster en Comunicación Estratégica, Universidad Diego Portales",
    ],
    signs: ["Lectura", "Marca", "Minuta"],
  },
  {
    slug: "martin-ossandon",
    name: "Martín Ossandón",
    role: "Socio",
    band: "Pauta",
    bandSlug: "pauta",
    image: "/images/martin.jpg",
    email: "martin@senal.cl",
    bio: [
      "Martín cobra el oficio, no un porcentaje de la pauta. Entró como socio en 2019. Antes compraba media en una cuenta grande y se hartó de explicar el markup a gerentes que no lo habían pedido.",
      "Google y Meta certificados. El corte semanal lo hace él. Si una campaña no sostiene, la apaga. No la ‘optimiza’ hasta fin de mes para que el reporte se vea lleno.",
    ],
    education: [
      "Ingeniería Comercial, Universidad Adolfo Ibáñez",
      "Certificación Google Ads y Meta Blueprint",
    ],
    signs: ["Pauta", "CAC", "Corte semanal"],
  },
  {
    slug: "trinidad-caceres",
    name: "Trinidad Cáceres",
    role: "Pieza",
    band: "Pieza",
    bandSlug: "pieza",
    image: "/images/trinidad.jpg",
    email: "trinidad@senal.cl",
    bio: [
      "Trinidad escribe como se habla en Chile. Llegó en 2021. Antes editaba en un medio y se cansó de ver anuncios que nadie leería ni en el propio diario.",
      "Una pieza que no se entiende a una mano, en la micro, no sale. El pack de doce posts no se lo pidan.",
    ],
    education: [
      "Periodismo, Universidad Diego Portales",
      "Diplomado en Escritura, Universidad de Chile",
    ],
    signs: ["Copy", "Pieza", "Tono"],
  },
  {
    slug: "hector-palma",
    name: "Héctor Palma",
    role: "Sitio",
    band: "Sitio",
    bandSlug: "sitio",
    image: "/images/hector.jpg",
    email: "hector@senal.cl",
    bio: [
      "Héctor arma el lugar donde la pauta aterriza. Entró en 2020. Diseñador, y el que mira el Lighthouse antes de mirar el moodboard.",
      "Si el WordPress convierte, no lo cambia por capricho. Si hay que hacer un sitio nuevo, es Next, es liviano, y el formulario lo contesta alguien de esta mesa.",
    ],
    education: [
      "Diseño, Universidad Diego Portales",
      "Especialización en producto digital, Independiente",
    ],
    signs: ["Sitio", "Landing", "Medición"],
  },
  {
    slug: "amanda-fuenzalida",
    name: "Amanda Fuenzalida",
    role: "Eco",
    band: "Eco",
    bandSlug: "eco",
    image: "/images/amanda.jpg",
    email: "amanda@senal.cl",
    bio: [
      "Amanda lleva el eco: lo que sigue sonando cuando se baja la pauta. Entró en 2022. SEO, contenidos que se quedan, retención.",
      "Seis meses de piso. Si le piden primera página en treinta días, recomienda a otra persona. El archivo se mantiene, no se ‘hackea’.",
    ],
    education: [
      "Ingeniería Civil Industrial, Universidad de Chile",
      "Especialización SEO, formación continua",
    ],
    signs: ["SEO", "Retención", "Archivo"],
  },
];

export type Transmission = {
  slug: string;
  tx: string;
  title: string;
  client: string;
  place: string;
  year: string;
  months: string;
  band: string;
  bandSlug: string;
  metric: string;
  metricLabel: string;
  image: string;
  summary: string;
  body: string[];
  work: string[];
};

export const transmissions: Transmission[] = [
  {
    slug: "textil-tome",
    tx: "TX-01",
    title: "De mayorista a venta directa",
    client: "Textil Tomé",
    place: "Tomé, Biobío",
    year: "2025",
    months: "11 meses",
    band: "Pauta + sitio",
    bandSlug: "pauta",
    metric: "3,8",
    metricLabel: "ROAS en search, trimestre 3",
    image: "/images/tome.jpg",
    summary:
      "Una textil de Tomé que vendía a mayoristas abrió canal D2C. Sitio, search y un catálogo que se podía comprar a las 23:00.",
    body: [
      "Vendían lana y tela a talleres. El margen se lo comía la cadena. Armamos un sitio con pocas SKU, bien fotografiadas, y pauta de search en ‘lana merino Chile’, ‘tela Tomé’ y variantes de intención.",
      "La pauta la pagó el cliente, directo. En el trimestre 3 el ROAS de search se sostuvo en 3,8. El community no existía: existían fichas, un WhatsApp de despacho y un mail de recompra a los 40 días.",
    ],
    work: ["Sitio D2C", "Google Ads", "Fichas", "WhatsApp de despacho"],
  },
  {
    slug: "sierra-blanca",
    tx: "TX-02",
    title: "Leads B2B sin casco de stock",
    client: "Sierra Blanca",
    place: "Antofagasta",
    year: "2025",
    months: "8 meses",
    band: "Pauta",
    bandSlug: "pauta",
    metric: "−34%",
    metricLabel: "CAC calificado, mes 6 vs mes 1",
    image: "/images/sierra.jpg",
    summary:
      "Servicios a faena. LinkedIn y search. Cero fotos de trabajadores sonriendo. El lead calificado bajó de costo en seis meses.",
    body: [
      "Sierra Blanca vende servicios a minería. El sitio anterior tenía un formulario que nadie de procurement iba a llenar, y anuncios con casco de banco de imágenes.",
      "Cortamos el creativo. LinkedIn a cargos reales, search a consultas de especialidad, y un formulario de tres campos que llega a un comercial, no a un buzón. CAC calificado −34% al mes 6.",
    ],
    work: ["LinkedIn Ads", "Search B2B", "Formulario corto", "CRM mínimo"],
  },
  {
    slug: "molino-san-carlos",
    tx: "TX-03",
    title: "Un SKU, no toda la góndola",
    client: "Molino San Carlos",
    place: "Talca, Maule",
    year: "2024",
    months: "6 meses",
    band: "Pieza + pauta",
    bandSlug: "pieza",
    metric: "+41%",
    metricLabel: "sell-out del SKU piloto",
    image: "/images/molino.jpg",
    summary:
      "Harinas. En vez de ‘presencia de marca’, una harina, un retailer, retail media y pieza de receta que sí se cocina.",
    body: [
      "El molino quería ‘estar en digital’. Elegimos un SKU, un retailer y tres recetas que una casa en Chile sí hace un domingo. Retail media más pauta de receta, no un film de trigales.",
      "Sell-out del SKU piloto +41% en el semestre. El resto del surtido no se tocó hasta tener esa prueba.",
    ],
    work: ["Retail media", "Pieza de receta", "Un SKU", "Medición en góndola"],
  },
  {
    slug: "puerto-seco",
    tx: "TX-04",
    title: "El lead que sí tiene contenedor",
    client: "Puerto Seco",
    place: "San Antonio",
    year: "2025",
    months: "9 meses",
    band: "Pauta + sitio",
    bandSlug: "sitio",
    metric: "−52%",
    metricLabel: "costo por lead calificado",
    image: "/images/puerto.jpg",
    summary:
      "Logística. La landing preguntaba TEU y ruta, no ‘cuéntanos tu desafío’. El comercial dejó de filtrar turismo.",
    body: [
      "Llegaban leads de gente que quería enviar una mudanza. La landing nueva pide tipo de carga, TEU aproximado y puerto. El que no puede responder, no entra.",
      "Costo por lead calificado −52%. El sitio anterior se quedó como archivo. La pauta apunta a una sola URL.",
    ],
    work: ["Landing", "Search", "Campos de calificación", "WhatsApp de operaciones"],
  },
  {
    slug: "editora-trama",
    tx: "TX-05",
    title: "Suscripción que no se fuga en M3",
    client: "Editora Trama",
    place: "Santiago",
    year: "2024–25",
    months: "14 meses",
    band: "Eco",
    bandSlug: "eco",
    metric: "81%",
    metricLabel: "retención a mes 6",
    image: "/images/trama.jpg",
    summary:
      "Una editora independiente. El problema no era el anuncio: era que el suscriptor se iba al tercer número. Eco, no más pauta.",
    body: [
      "Trama vendía bien el primer mes y perdía al tercero. Bajamos pauta de adquisición y armamos el eco: mail del número, recordatorio, un PDF de muestra, WhatsApp de despacho que no era un bot.",
      "Retención a mes 6: 81%. La pauta volvió, más cara, cuando el agujero ya no estaba.",
    ],
    work: ["Retención", "Mail", "WhatsApp de despacho", "Pauta de reactivación"],
  },
  {
    slug: "deriva",
    tx: "TX-06",
    title: "Temporada, no ‘siempre on’",
    client: "Deriva",
    place: "Pichilemu",
    year: "2024–25",
    months: "2 temporadas",
    band: "Pauta",
    bandSlug: "pauta",
    metric: "94%",
    metricLabel: "ocupación de temporada alta",
    image: "/images/deriva.jpg",
    summary:
      "Escuela de surf. Pauta estacional. Se apaga en junio. Se enciende en octubre. Ocupación de temporada 94%.",
    body: [
      "Deriva no necesita anuncios en julio. Armamos dos ventanas: octubre–marzo para cursos, y una corta de invierno para talleres de fin de semana. El resto del año, silencio.",
      "Ocupación de temporada alta 94% en el segundo año. El siempre-on le costaba más de lo que traía.",
    ],
    work: ["Pauta estacional", "Landing de curso", "Corte de invierno", "WhatsApp de cupos"],
  },
];

export const fees = [
  {
    servicio: "Lectura (45 min)",
    precio: "$84.000",
    nota: "Se descuenta del primer mes si cerramos. Minuta en 48 horas hábiles.",
  },
  {
    servicio: "Retainer (cuenta)",
    precio: "desde 42 UF + IVA / mes",
    nota: "Pauta, pieza y mesa. Diez cuentas. Cupo, no catálogo.",
  },
  {
    servicio: "Pauta (oficio)",
    precio: "desde 18 UF / mes",
    nota: "Sin markup de media. El cliente paga la plataforma.",
  },
  {
    servicio: "Pieza",
    precio: "desde 16 UF / mes",
    nota: "Volumen según la cuenta. Sin pack de doce posts.",
  },
  {
    servicio: "Sitio / landing",
    precio: "desde 32 UF",
    nota: "Proyecto. Valores referenciales; se confirma tras la lectura.",
  },
  {
    servicio: "Marca (sistema)",
    precio: "desde 55 UF",
    nota: "6 a 10 semanas. No es un logo suelto.",
  },
  {
    servicio: "Eco (SEO + retención)",
    precio: "desde 28 UF / mes",
    nota: "Piso de seis meses.",
  },
] as const;

export const steps = [
  {
    folio: "01",
    title: "Pide la lectura",
    body: "Formulario, WhatsApp o el teléfono. Respondemos en 24 horas hábiles. Si el trabajo no es nuestro —community barato, pauta sin medición— se lo decimos ahí.",
  },
  {
    folio: "02",
    title: "45 minutos",
    body: "En Yungay o por videollamada. Traiga acceso al Business Manager, al Analytics, al sitio. No hace falta un deck. Hace falta la cuenta.",
  },
  {
    folio: "03",
    title: "Minuta y UF",
    body: "En 48 horas: qué cortar, qué subir, si hay trabajo, y el honorario en UF + IVA. La pauta, si hay, la paga usted en la plataforma.",
  },
  {
    folio: "04",
    title: "El aire",
    body: "Corte semanal. Una hoja, no un teatro. Quien tomó la lectura sigue en la mesa. Si el mes está lleno, no acumulamos cuentas para parecer grandes.",
  },
] as const;

export const principles = [
  {
    folio: "I",
    title: "Diez cuentas",
    text: "No más. Si el mes está lleno, se lo decimos. Una mesa de cinco no sostiene un roster de treinta.",
  },
  {
    folio: "II",
    title: "La pauta la paga usted",
    text: "Cero markup de media. Factura de Meta, Google o LinkedIn a su nombre. Cobramos el oficio.",
  },
  {
    folio: "III",
    title: "Por escrito, en UF",
    text: "Minuta, retainer y alcance salen en papel. El IVA va aparte. Lo que no está escrito, no está pactado.",
  },
  {
    folio: "IV",
    title: "Si no llega, se apaga",
    text: "Una campaña que no sostiene dos semanas no se ‘optimiza’ hasta el reporte. Se corta.",
  },
] as const;

export const stats = [
  { value: "2018", label: "El piso abre" },
  { value: "10", label: "Cuentas, no más" },
  { value: "0%", label: "Markup de pauta" },
  { value: "42 UF", label: "Retainer desde" },
] as const;

export const faqs = [
  {
    q: "¿Hacen community management?",
    a: "No el pack de doce posts ni el community a 8 UF. Pieza sí: lo que la pauta y la marca necesitan. Si lo que busca es alguien que suba todos los días, hay otras mesas.",
  },
  {
    q: "¿La pauta va con recargo de agencia?",
    a: "No. Cero markup. El presupuesto de media lo pone usted, directo a Meta, Google o LinkedIn. SEÑAL cobra el oficio, en UF.",
  },
  {
    q: "¿Cuántas cuentas toman?",
    a: "Diez. Si el mes está lleno, se lo decimos en la primera respuesta. No acumulamos para parecer una agencia de Providencia.",
  },
  {
    q: "¿Trabajan fuera de Santiago?",
    a: "Sí. Tomé, Antofagasta, Talca, San Antonio, Pichilemu. La lectura puede ser por videollamada. El criterio no cambia.",
  },
  {
    q: "¿Los valores son en UF más IVA?",
    a: "El retainer y los proyectos, sí. La lectura es $84.000 y se descuenta si cerramos. Valores referenciales; se confirman en la minuta.",
  },
  {
    q: "¿Hacen TikTok y ‘tendencias’?",
    a: "No. Tampoco reputación falsa, ni pauta sin medición, ni sitios de plantilla vendidos como ‘presencia’. Si el canal no se puede leer, no se prende.",
  },
] as const;

export const bandOptions = [
  "Lectura / no lo tengo claro",
  "Pauta",
  "Pieza",
  "Sitio",
  "Marca",
  "Eco",
] as const;

export const noise = [
  {
    title: "Packs de posts",
    text: "Doce piezas que no van a ninguna campaña. No.",
  },
  {
    title: "Markup de media",
    text: "El 15% encima de la pauta. No.",
  },
  {
    title: "Pauta sin medición",
    text: "Si no hay píxel, CAPI o un CRM mínimo, no se prende.",
  },
  {
    title: "Más de diez cuentas",
    text: "La mesa no se diluye para llenar un pitch.",
  },
] as const;

export function getBand(slug: string) {
  return bands.find((item) => item.slug === slug);
}

export function getPerson(slug: string) {
  return mesa.find((item) => item.slug === slug);
}

export function getTransmission(slug: string) {
  return transmissions.find((item) => item.slug === slug);
}


