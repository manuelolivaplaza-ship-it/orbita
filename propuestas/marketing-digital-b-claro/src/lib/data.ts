export const stats = [
  { value: "52 UF", label: "Retainer desde" },
  { value: "7 años", label: "En Providencia" },
  { value: "24 h", label: "Respuesta a la lectura" },
  { value: "5", label: "Personas en la mesa" },
] as const;

export const clients = [
  "Hotel Salinas",
  "Editorial Quilla",
  "Taller Roble",
  "Ciclo Andes",
  "Vivero Peñalolén",
  "Estudio Ladera",
  "Óptica Nieve",
  "Fábrica Colina",
] as const;

export const principles = [
  {
    title: "La luz pareja no perdona.",
    body: "El atardecer de stock esconde el producto, el precio y el margen. Nosotros trabajamos con luz de norte: se ve lo que hay. Si la oferta no se sostiene a las once de la mañana, no se sostiene en un directorio.",
  },
  {
    title: "Chile no es un targeting.",
    body: "Hablamos de UF, de IVA, de boleta, de que en febrero el país se apaga y de que un CAC en pesos no es un CAC en dólares. El marketing traducido desde Miami se nota. Y se paga igual.",
  },
  {
    title: "Apagar también es oficio.",
    body: "Si un canal no cabe en el margen, se corta. Sin teatro de dashboards, sin “darle una semana más”. La cuenta que no se puede defender en diez minutos no es una cuenta: es un PDF.",
  },
] as const;

export const hours = [
  {
    n: "09:30",
    title: "Lectura",
    days: "7–10 días",
    body: "Revisamos marca, pauta, sitio, números y competencia. Sales con un documento que se puede poner delante de quien firma: qué está fallando, qué no, y cuánto costaría nivelarlo.",
  },
  {
    n: "12:00",
    title: "Frase",
    days: "Semanas 2–3",
    body: "Una idea que se puede repetir en un ascensor. Tres apuestas. Un sistema de piezas. Nada entra a producción sin esa frase — y sin una forma de saber, después, si sirvió.",
  },
  {
    n: "15:00",
    title: "Sistema",
    days: "Continuo",
    body: "Piezas, landings, pauta, community. Un ritmo que un negocio real aguanta un martes de julio, no un calendario de agencia que se cae a la tercera semana.",
  },
  {
    n: "18:00",
    title: "Cuenta",
    days: "Cada 14 días",
    body: "Un tablero. Una llamada. Qué movimos, qué no, qué apagamos. Si un canal no paga, se corta. Sin vanity, sin reunión para explicar el reporte.",
  },
] as const;

export const fees = [
  {
    name: "Lectura",
    price: "14 UF",
    note: "Se descuenta del primer mes si hay retainer.",
    items: [
      "Auditoría de marca, pauta y sitio",
      "Entrevista con quien decide",
      "Documento de 8–12 páginas",
      "Devolución de 60 minutos",
    ],
  },
  {
    name: "Retainer",
    price: "desde 52 UF/mes",
    note: "El tramo se define en la lectura. Mínimo tres meses.",
    items: [
      "Estrategia y cuenta",
      "Pauta Meta / Google / TikTok",
      "Piezas mensuales acordadas",
      "Tablero y llamada cada 14 días",
    ],
  },
  {
    name: "Encargo",
    price: "desde 80 UF",
    note: "Marca, sitio o campaña. Alcance cerrado, por escrito.",
    items: [
      "Brief y cronograma",
      "Dos rondas de ida y vuelta",
      "Entrega en archivos y Figma",
      "Capacitación de una hora",
    ],
  },
] as const;

export const practices = [
  {
    slug: "lectura",
    kicker: "09:30",
    title: "Lectura",
    short: "Un diagnóstico que se puede poner delante de quien firma.",
    lead: "Antes de gastar plata en pauta, miramos. Marca, oferta, sitio, números, competencia. Sales sabiendo qué está desnivelado — y qué no vale la pena tocar.",
    image: "/images/mesa.jpg",
    deliverables: [
      "Auditoría de marca, pauta y sitio",
      "Entrevista con quien decide",
      "Documento de 8–12 páginas",
      "Devolución de 60 minutos",
    ],
    body: "La mayoría de las agencias parte produciendo. Nosotros partimos leyendo. Si el ticket no da para el canal, se dice en la primera reunión, no a los tres meses. El documento cabe en una carpeta; no necesita un keynote.",
  },
  {
    slug: "territorio",
    kicker: "10:00",
    title: "Territorio",
    short: "La frase, el sistema, el tono. Antes de encender la pauta.",
    lead: "Una marca que no se puede explicar en una mesa de directorio no se va a entender en un reel de quince segundos. Ordenamos lo que ya existe hasta que se puede repetir.",
    image: "/images/yeso.jpg",
    deliverables: [
      "Posicionamiento y territorio",
      "Arquitectura de oferta",
      "Tono verbal y sistema visual",
      "Guía corta — no un brandbook de 80 páginas",
    ],
    body: "Trabajamos con empresas que ya tienen logo, clientes y una historia a medias. No inventamos universos: nivelamos. El resultado es una frase, un criterio para decir que no, y un sistema de piezas que un equipo interno puede sostener.",
  },
  {
    slug: "inversion",
    kicker: "11:00",
    title: "Inversión",
    short: "Meta, Google y TikTok con una hipótesis, no con un moodboard.",
    lead: "La pauta es el lugar donde se quema la plata más rápido. No la encendemos hasta tener oferta, landing y una forma de saber si sirvió.",
    image: "/images/ventana.jpg",
    deliverables: [
      "Estructura de campañas y presupuestos",
      "Pruebas de oferta y audiencia",
      "Optimización semanal",
      "Corte explícito de lo que no paga",
    ],
    body: "Compramos medios como quien compra inventario: con precio, con merma, con fecha de vencimiento. Reportamos en pesos chilenos, en CAC, en margen. Si el canal no cabe, se apaga. Sin romance.",
  },
  {
    slug: "piezas",
    kicker: "12:00",
    title: "Piezas",
    short: "Relato que se puede publicar un martes de julio.",
    lead: "El contenido que se ve bien en un pitch y desaparece a la tercera semana no es contenido: es una campaña disfrazada. Diseñamos un ritmo que el negocio aguanta.",
    image: "/images/casa.jpg",
    deliverables: [
      "Línea editorial y calendarios reales",
      "Piezas para pauta y orgánicas",
      "Guiones, fotografía y edición",
      "Community con criterio, no con un perfil fantasma",
    ],
    body: "Grabamos en Chile, con luz de Chile y con gente que podría ser tu clienta. Nada de stock de aeropuerto. El tono es el de la marca, no el de la tendencia de la semana. Si no se puede sostener, no se promete.",
  },
  {
    slug: "canal",
    kicker: "15:00",
    title: "Canal",
    short: "Sitios y landings que cargan, se leen y convierten.",
    lead: "Un sitio no es un brochure con scroll. Es la única pieza que controlas del todo: mensaje, prueba, formulario, velocidad. Lo tratamos como tal.",
    image: "/images/pozo.jpg",
    deliverables: [
      "Arquitectura y copy",
      "Diseño y desarrollo en Next.js",
      "Landings por campaña",
      "Eventos medibles, no solo visitas",
    ],
    body: "Construimos en Next.js, rápido, claro, en español de Chile. Formularios que llegan. WhatsApp a un toque. Textos que una persona de 52 años entiende sin pedir ayuda. Eso, para nosotros, es un sitio contemporáneo.",
  },
  {
    slug: "cuenta",
    kicker: "18:00",
    title: "Cuenta",
    short: "Un tablero que se abre en el celular, camino a la oficina.",
    lead: "Si el reporte necesita una reunión para explicarse, el reporte falló. Tres cifras que importan este trimestre. Dueño, fecha, acción.",
    image: "/images/patio.jpg",
    deliverables: [
      "Eventos, UTMs y convenciones",
      "Tablero quincenal",
      "Lectura con contexto de negocio",
      "Archivo histórico, no un PDF que se pierde",
    ],
    body: "Medimos para decidir. No para decorar un Slack. Cada cifra tiene un dueño y una acción. Lo que no se puede actuar, no se reporta. La llamada de los viernes no es un teatro: es una cuenta.",
  },
] as const;

export const team = [
  {
    slug: "florencia-vidal",
    name: "Florencia Vidal",
    role: "Socia · Estrategia",
    image: "/images/florencia.jpg",
    bio: "Doce años escribiendo documentos que un directorio puede defender sin diapositivas. Antes lideró planificación en dos agencias de Providencia. En NORTE hace la lectura y la frase.",
    focus: "Posicionamiento, oferta, relato de directorio.",
    hours: "09:30–14:00",
  },
  {
    slug: "joaquin-palacios",
    name: "Joaquín Palacios",
    role: "Socio · Dirección",
    image: "/images/joaquin.jpg",
    bio: "Diseñador que se cansó del mockup perfecto y del copy que no se puede decir en voz alta. Dirige cómo se ve, cómo suena y qué se corta. Un anuncio que una tía de Temuco entiende le importa más que un lápiz.",
    focus: "Sistema visual, campañas, tono.",
    hours: "10:00–18:00",
  },
  {
    slug: "renata-munoz",
    name: "Renata Muñoz",
    role: "Inversión y performance",
    image: "/images/renata.jpg",
    bio: "Ingeniera comercial a la que le gusta apagar campañas. Armó mesas de pauta para retail y educación. En NORTE pregunta el margen antes de pedir más presupuesto.",
    focus: "Pauta, CAC, tests, corte.",
    hours: "09:30–18:30",
  },
  {
    slug: "nicolas-vera",
    name: "Nicolás Vera",
    role: "Piezas y relato",
    image: "/images/nicolas.jpg",
    bio: "Guiona, graba y edita con una obsesión: que se pueda publicar un martes cualquiera. Trabajó en productoras y en marcas de oficio. Acá cuida el ritmo para que el calendario no sea un deseo.",
    focus: "Piezas, community, producción.",
    hours: "10:00–18:30",
  },
  {
    slug: "paz-undurraga",
    name: "Paz Undurraga",
    role: "Cuentas y producción",
    image: "/images/paz.jpg",
    bio: "La persona que hace que las fechas existan. Traduce al cliente, al estudio y a los proveedores. Si un brief llega a producción sin una frase medible, lo devuelve.",
    focus: "Cuenta, cronograma, proveedores.",
    hours: "09:30–18:30",
  },
] as const;

export const works = [
  {
    slug: "salinas",
    client: "Hotel Salinas",
    sector: "Hospitalidad · San Pedro de Atacama",
    year: "2024–25",
    title: "Llenar la temporada alta sin vender el desierto",
    excerpt:
      "Un hotel de sal y tierra cruda con occupancy de temporada baja y un Instagram hermoso que no convertía. Ordenamos oferta, sitio y pauta hasta que la reserva dejó de pasar por la OTA.",
    cover: "/images/salinas.jpg",
    gallery: ["/images/salinas.jpg", "/images/yeso.jpg"],
    featured: true,
    services: ["Territorio", "Canal", "Inversión", "Piezas"],
    stats: [
      { value: "44→81%", label: "Occupancy de temporada" },
      { value: "+2,1×", label: "Reservas directas" },
      { value: "58%", label: "Desde regiones y extranjero" },
    ],
    quote: {
      text: "Por primera vez el desierto se vendió con fechas y un precio, no con un filtro.",
      author: "Elisa Montt",
      role: "Socia, Hotel Salinas",
    },
    challenge:
      "Dependían de OTAs y de fotos de cielo estrellado que no convertían. El huésped chileno llegaba tarde, el extranjero no encontraba cómo pagar en pesos, y el equipo en San Pedro no podía producir contenido todas las semanas.",
    approach:
      "Sitio con fechas, programas y pago en UF y dólares. Un motor de contenido: tres viajes al año de producción, no un community diario. Pauta en los meses en que se planifica el viaje — invierno para primavera — y WhatsApp como canal de reserva, no como afterthought.",
    result:
      "Occupancy de temporada de 44% a 81% en un ciclo. Reservas directas 2,1 veces. El 58% llegó de regiones y del extranjero con un relato que no prometía “el fin del mundo”: prometía una cama, un itinerario y un anfitrión con nombre.",
  },
  {
    slug: "quilla",
    client: "Editorial Quilla",
    sector: "Editorial · Ñuñoa",
    year: "2025",
    title: "Una editorial que se explica en la feria, no en un catálogo",
    excerpt:
      "Quilla publicaba bien y vendía mal fuera de librería. Armamos un canal directo, una pauta de lanzamiento y un ritmo de piezas que un sello de cinco personas puede sostener.",
    cover: "/images/quilla.jpg",
    gallery: ["/images/quilla.jpg", "/images/mesa.jpg"],
    featured: true,
    services: ["Territorio", "Piezas", "Canal", "Inversión"],
    stats: [
      { value: "+3,4×", label: "Venta directa, 8 meses" },
      { value: "12", label: "Lanzamientos con landings" },
      { value: "−22%", label: "Devolución de librería" },
    ],
    quote: {
      text: "Dejamos de hablarle al gremio y le hablamos a quien lee en la micro. Se notó en caja.",
      author: "Daniela Quiroga",
      role: "Editora, Quilla",
    },
    challenge:
      "El catálogo era sólido. El relato, no. Competían con sellos grandes en el mismo feed, con la misma estética de “libro sobre mesa de mármol”. El sitio era un PDF con scroll. Los lanzamientos se enteraban después.",
    approach:
      "Una frase: “Libros que se leen de verdad.” Sitio con ficha, preventa y retiro en Ñuñoa. Landings por título, no una home de catálogo. Pauta corta en la semana del lanzamiento, community con autoras reales, y un newsletter que no pide perdón por ser largo.",
    result:
      "La venta directa se multiplicó 3,4 veces en ocho meses. Doce títulos con landing propia. La devolución de librería bajó porque dejamos de empujar el título que no tenía lector. El equipo interno ahora publica dos piezas a la semana, no un calendario de agencia.",
  },
  {
    slug: "roble",
    client: "Taller Roble",
    sector: "Oficio · Ñuñoa",
    year: "2024",
    title: "La silla dejó de ser un post",
    excerpt:
      "Un taller de sillas de fresno con lista de espera y un e-commerce que parecía un catálogo de feria. Unificamos marca, lookbook y pauta hasta que el ticket subió y la lista se ordenó.",
    cover: "/images/roble.jpg",
    gallery: ["/images/roble.jpg", "/images/casa.jpg"],
    featured: true,
    services: ["Territorio", "Canal", "Piezas"],
    stats: [
      { value: "+1,8×", label: "Ticket promedio" },
      { value: "11 sem.", label: "Lista de espera, visible" },
      { value: "−18%", label: "Consultas que no compran" },
    ],
    quote: {
      text: "Por fin el Instagram y el taller de Ñuñoa parecen la misma casa.",
      author: "Martín Robles",
      role: "Ebanista, Taller Roble",
    },
    challenge:
      "Cada silla se veía distinta en el feed. El e-commerce descontaba lo que el taller intentaba vender a precio lleno. El contenido era “behind the scenes” genérico: viruta, nada de plazos, nada de precio.",
    approach:
      "Un lookbook con plazos reales y un precio en UF. Sitio con encargo, no con carrito de stock infinito. Piezas que muestran el fresno y el tiempo, no el lifestyle. Pauta solo a quien ya preguntó — retargeting de oficio, no de awareness.",
    result:
      "El ticket subió 1,8 veces porque dejamos de esconder el precio. La lista de espera se publicó: once semanas, en la ficha. Las consultas que no compraban bajaron. El taller dejó de pelearse el feed con descuentos.",
  },
  {
    slug: "ciclo",
    client: "Ciclo Andes",
    sector: "Movilidad · Santiago",
    year: "2025",
    title: "Una bicicleta que se explica en el ascensor del edificio",
    excerpt:
      "Marca de bicicletas urbanas para quien ya no quiere auto en Providencia. Había producto. Faltaba una frase, un embudo y la disciplina de no pelear el awareness de las marcas globales.",
    cover: "/images/ciclo.jpg",
    gallery: ["/images/ciclo.jpg", "/images/ventana.jpg"],
    featured: false,
    services: ["Territorio", "Inversión", "Canal"],
    stats: [
      { value: "2.400", label: "Unidades, primer año" },
      { value: "−16%", label: "CAC vs. meta" },
      { value: "4,8", label: "Nota en tienda" },
    ],
    quote: {
      text: "Dejaron de hablarnos en CTR y nos hablaron en cuadras. Eso, para una marca chica, es oxígeno.",
      author: "Sofía Andrade",
      role: "Fundadora, Ciclo Andes",
    },
    challenge:
      "El producto era sólido. El relato, no. Competían con marcas que gastan lo que Ciclo facturaba en un año. Necesitaban una frase, un embudo y no pelear el awareness de los grandes.",
    approach:
      "La idea: “La bici de las doce cuadras.” Campaña en Metro, Meta y la ciclovía de Providencia con vecinas reales. Landing de una pantalla. Prueba en tienda con hora, no con stock infinito. Cortes semanales de audiencias que no reservaban.",
    result:
      "2.400 unidades en el primer año, CAC 16% bajo la meta del directorio, nota 4,8 que no se compró con pauta de reviews. El referido de edificio superó a TikTok a la octava semana: lo dejamos ganar.",
  },
  {
    slug: "vivero",
    client: "Vivero Peñalolén",
    sector: "Vivero · Peñalolén",
    year: "2023–24",
    title: "El vivero dejó de parecer un supermercado de plantas",
    excerpt:
      "Tres hectáreas, un público que pregunta por WhatsApp y un sitio que era un PDF. Ordenamos catálogo, horarios y pauta local hasta que la visita al vivero se agendó sola.",
    cover: "/images/vivero.jpg",
    gallery: ["/images/vivero.jpg", "/images/patio.jpg"],
    featured: false,
    services: ["Canal", "Piezas", "Inversión"],
    stats: [
      { value: "+64%", label: "Visitas con hora" },
      { value: "3×", label: "Pedidos a regiones" },
      { value: "−29%", label: "Consultas repetidas" },
    ],
    quote: {
      text: "La gente llegó sabiendo qué planta quería. Nosotros dejamos de repetir el mismo audio.",
      author: "Héctor Saavedra",
      role: "Dueño, Vivero Peñalolén",
    },
    challenge:
      "El catálogo vivía en la cabeza de tres personas. El WhatsApp era un cuello de botella. La pauta, cuando existía, mandaba a una home que no decía ni el horario ni si había estacionamiento.",
    approach:
      "Sitio con fichas de especie, stock honesto y hora de visita. Piezas de temporada — no de “lifestyle jardinero”. Pauta local en Peñalolén, La Reina y Ñuñoa, con landings por familia de planta. WhatsApp como cierre, no como catálogo.",
    result:
      "Las visitas con hora subieron 64%. Los pedidos a regiones se triplicaron con un despacho que por fin se explicaba. Las consultas repetidas bajaron: el sitio contestó lo que el audio no daba abasto.",
  },
  {
    slug: "ladera",
    client: "Estudio Ladera",
    sector: "Arquitectura · Vitacura",
    year: "2024–25",
    title: "Un estudio que se deja ver sin parecer un render",
    excerpt:
      "Ocho arquitectos, obra en ladera y un Instagram de renders que no traía encargos. Construimos un canal de obra real, un sitio lento y una pauta B2B que no grita.",
    cover: "/images/ladera.jpg",
    gallery: ["/images/ladera.jpg", "/images/pozo.jpg"],
    featured: false,
    services: ["Territorio", "Canal", "Piezas"],
    stats: [
      { value: "9", label: "Encargos nuevos, 10 meses" },
      { value: "2,6×", label: "Tiempo en el sitio" },
      { value: "0", label: "Renders de stock" },
    ],
    quote: {
      text: "Por fin nos buscan por la obra, no por el filtro del render.",
      author: "Amanda Lira",
      role: "Socia, Estudio Ladera",
    },
    challenge:
      "El feed era un catálogo de atardeceres sobre volúmenes blancos. Los encargos llegaban por boca a boca y se caían cuando el cliente no entendía plazos ni honorarios. El sitio era Behance con dominio propio.",
    approach:
      "Territorio: “Casas que se habitan de norte.” Sitio con ficha de obra, honorarios de entrada y un plano, no un hero de drone. Piezas de faena y de luz, no de sunset. Pauta LinkedIn y búsqueda de “arquitecto Vitacura”, con una landing que habla de plazos.",
    result:
      "Nueve encargos nuevos en diez meses, todos con una llamada previa que ya venía informada. El tiempo en el sitio se multiplicó porque por fin había qué leer. Cero renders de stock. El estudio volvió a parecer un oficio.",
  },
] as const;

export const voices = [
  {
    text: "Por primera vez el desierto se vendió con fechas y un precio, no con un filtro.",
    author: "Elisa Montt",
    role: "Socia, Hotel Salinas",
  },
  {
    text: "Dejamos de hablarle al gremio y le hablamos a quien lee en la micro. Se notó en caja.",
    author: "Daniela Quiroga",
    role: "Editora, Quilla",
  },
  {
    text: "Dejaron de hablarnos en CTR y nos hablaron en cuadras. Eso, para una marca chica, es oxígeno.",
    author: "Sofía Andrade",
    role: "Fundadora, Ciclo Andes",
  },
] as const;

export function getPractice(slug: string) {
  return practices.find((item) => item.slug === slug);
}

export function getWork(slug: string) {
  return works.find((item) => item.slug === slug);
}

export function getPerson(slug: string) {
  return team.find((item) => item.slug === slug);
}
