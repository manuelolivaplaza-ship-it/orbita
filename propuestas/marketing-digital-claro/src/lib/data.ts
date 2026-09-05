export const stats = [
  { value: "48 UF", label: "Retainer desde" },
  { value: "8 años", label: "En Lastarria" },
  { value: "24 h", label: "Respuesta al brief" },
  { value: "5", label: "Personas, no un piso" },
] as const;

export const marquee = [
  "Marca",
  "Pauta",
  "Contenido",
  "Performance",
  "Sitios",
  "Medición",
  "Growth",
  "Directorio",
] as const;

export const clients = [
  "Cuesta Blanca",
  "Nublo",
  "Ruta Austral",
  "Casa Lino",
  "Caleta Verde",
  "Alto Loa",
  "Bruma Skin",
  "Puelche",
] as const;

export const principles = [
  {
    title: "Se entiende en un ascensor.",
    body: "Si la gerenta comercial no puede repetir la idea en camino a una reunión, no es estrategia: es un PDF. Escribimos para personas que firman presupuestos, no para el festival de Cannes.",
  },
  {
    title: "La pauta no es el oficio.",
    body: "Meta y Google son cañerías. Lo que circula por ellas —oferta, pieza, landing, medición— es el trabajo. Por eso no vendemos “más plata en ads”. Vendemos un sistema.",
  },
  {
    title: "Chile no es un targeting.",
    body: "Hablamos de UF, de IVA, de regiones, de feriados largos y de que en febrero el país se apaga. El marketing que se traduce desde Miami se nota. Y se paga igual.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    days: "7–10 días",
    body: "Revisamos marca, pauta, sitio, números y competencia. Sales con un documento que se puede poner delante del directorio: qué está fallando, qué no, y cuánto costaría arreglarlo.",
  },
  {
    n: "02",
    title: "Hipótesis",
    days: "Semanas 2–3",
    body: "Una idea central, tres apuestas, un sistema de contenidos y un plan de medios. Nada entra a producción sin esa frase que después se puede medir.",
  },
  {
    n: "03",
    title: "Señal",
    days: "Continuo",
    body: "Piezas, landings, pauta, community. Ritmo de publicación que un negocio real puede sostener — no un calendario de agencia que se cae a la tercera semana.",
  },
  {
    n: "04",
    title: "Luz",
    days: "Cada 14 días",
    body: "Un tablero. Una llamada. Qué movimos, qué no, qué apagamos. Si un canal no paga, se corta. Sin teatro de dashboards.",
  },
] as const;

export const fees = [
  {
    name: "Diagnóstico",
    price: "12 UF",
    note: "Se descuenta del primer mes si hay retainer.",
    items: [
      "Auditoría de marca, pauta y sitio",
      "Entrevista con quien decide",
      "Documento de 8–12 páginas",
      "Reunión de devolución (60 min)",
    ],
  },
  {
    name: "Retainer",
    price: "desde 48 UF/mes",
    note: "El tramo se define en el brief. Mínimo tres meses.",
    items: [
      "Estrategia y cuenta",
      "Pauta Meta / Google / TikTok",
      "Contenido mensual acordado",
      "Tablero y llamada cada 14 días",
    ],
  },
  {
    name: "Proyecto",
    price: "desde 70 UF",
    note: "Marca, sitio o campaña. Alcance cerrado, por escrito.",
    items: [
      "Brief y cronograma",
      "Dos rondas de ida y vuelta",
      "Entrega en archivos y Figma",
      "Capacitación de una hora",
    ],
  },
] as const;

export const services = [
  {
    slug: "marca",
    kicker: "01",
    title: "Estrategia y marca",
    short: "La frase, el sistema, el tono. Antes de gastar plata en pauta.",
    lead: "Una marca que no se puede explicar en una mesa de directorio no se va a entender en un reel de quince segundos. Partimos por ahí.",
    image: "/images/pines.jpg",
    deliverables: [
      "Posicionamiento y territorio",
      "Arquitectura de oferta",
      "Tono, verbal y sistema visual",
      "Guía corta — no un brandbook de 80 páginas que nadie abre",
    ],
    body: "Trabajamos con empresas que ya tienen logo, clientes y una historia a medias. No inventamos universos: ordenamos lo que ya existe hasta que se puede repetir. El resultado es una frase, un sistema de piezas y un criterio para decir que no.",
  },
  {
    slug: "pauta",
    kicker: "02",
    title: "Pauta digital",
    short: "Meta, Google y TikTok con una hipótesis, no con un moodboard.",
    lead: "La pauta es el lugar donde se quema la plata más rápido. Por eso no la encendemos hasta tener oferta, landing y una forma de saber si sirvió.",
    image: "/images/nublo.jpg",
    deliverables: [
      "Estructura de campañas y presupuestos",
      "Pruebas de oferta y audiencia",
      "Optimización semanal",
      "Corte explícito de lo que no paga",
    ],
    body: "Compramos medios como quien compra inventario: con precio, con stock, con merma. Reportamos en pesos chilenos, en CAC, en margen — no en vanity. Si el ticket no da para el canal, lo decimos en la primera reunión.",
  },
  {
    slug: "contenido",
    kicker: "03",
    title: "Contenido",
    short: "Piezas que se pueden sostener un martes de julio, no solo en el lanzamiento.",
    lead: "El contenido que se ve bien en un pitch y desaparece a la tercera semana no es contenido: es una campaña disfrazada. Diseñamos un ritmo que el negocio aguanta.",
    image: "/images/taller.jpg",
    deliverables: [
      "Línea editorial y calendarios reales",
      "Piezas para pauta y orgánicas",
      "Guiones, fotografía y edición",
      "Community con criterio, no con community manager fantasma",
    ],
    body: "Grabamos en Chile, con luz de Chile y con gente que podría ser tu clienta. Nada de stock de aeropuerto. El tono es el de la marca, no el de la tendencia de la semana.",
  },
  {
    slug: "performance",
    kicker: "04",
    title: "Performance y growth",
    short: "Embudo, prueba, corte. El número que le importa a quien paga.",
    lead: "Growth, acá, no es un cargo de moda. Es la disciplina de hacer una pregunta, gastar poco en responderla, y no enamorarse del anuncio que “se ve lindo”.",
    image: "/images/brief.jpg",
    deliverables: [
      "Mapa de embudo y fugas",
      "Tests de oferta, precio y landing",
      "Atribución honesta — con sus límites",
      "Recomendación de apagar, no solo de subir",
    ],
    body: "Si el CAC no cabe en el margen, no hay creativo que lo salve. Por eso miramos precio, ticket, ciclo de venta y postventa antes de pedir más presupuesto. El growth de verdad a veces es cobrar mejor, no pautar más.",
  },
  {
    slug: "sitios",
    kicker: "05",
    title: "Sitios y landings",
    short: "Páginas que cargan, se leen y convierten. Sin teatro de agencia.",
    lead: "Un sitio no es un brochure con scroll. Es la única pieza que controlas del todo: mensaje, prueba, formulario, velocidad. Lo tratamos como tal.",
    image: "/images/estudio.jpg",
    deliverables: [
      "Arquitectura y copy",
      "Diseño y desarrollo (Next.js)",
      "Landings por campaña",
      "Medición de eventos, no solo de visitas",
    ],
    body: "Construimos en Next.js, rápido, claro, en español de Chile. Formularios que llegan. WhatsApp a un toque. Textos que una persona de 52 años entiende sin pedir ayuda. Eso, para nosotros, es un sitio contemporáneo.",
  },
  {
    slug: "medicion",
    kicker: "06",
    title: "Medición",
    short: "Un tablero que se puede abrir en el celular camino a la oficina.",
    lead: "Si el reporte necesita una reunión para explicarse, el reporte falló. Diseñamos tableros cortos, con las tres cifras que importan este trimestre.",
    image: "/images/haz.jpg",
    deliverables: [
      "Eventos, UTMs y convenciones",
      "Tablero quincenal",
      "Lectura con contexto de negocio",
      "Archivo histórico, no un PDF que se pierde",
    ],
    body: "Medimos para decidir. No para decorar un Slack. Cada cifra tiene un dueño, una fecha y una acción. Lo que no se puede actuar, no se reporta.",
  },
] as const;

export const team = [
  {
    slug: "isidora-valdes",
    name: "Isidora Valdés",
    role: "Socia · Estrategia",
    image: "/images/isidora.jpg",
    bio: "Once años pensando marcas para directorios que no tienen paciencia. Antes lideró planificación en dos agencias de Providencia. En FARO escribe el documento que se puede defender sin PowerPoint.",
    focus: "Posicionamiento, oferta, relato de directorio.",
  },
  {
    slug: "mateo-rojas",
    name: "Mateo Rojas",
    role: "Socio · Dirección creativa",
    image: "/images/mateo.jpg",
    bio: "Diseñador que se cansó del mockup perfecto y del copy que no se puede decir en voz alta. Dirige la señal: cómo se ve, cómo suena, qué se corta. Premios le importan menos que un anuncio que una tía de Temuco entiende.",
    focus: "Sistema visual, campañas, tono.",
  },
  {
    slug: "amparo-diaz",
    name: "Amparo Díaz",
    role: "Head of performance",
    image: "/images/amparo.jpg",
    bio: "Ingeniera comercial a la que le gusta apagar campañas. Armó mesas de pauta para retail y fintech. En FARO es quien pregunta el margen antes de pedir más presupuesto.",
    focus: "Pauta, CAC, tests, corte.",
  },
  {
    slug: "benjamin-soto",
    name: "Benjamín Soto",
    role: "Contenido y social",
    image: "/images/benjamin.jpg",
    bio: "Guiona, graba y edita con una obsesión: que se pueda publicar un martes cualquiera. Trabajó en productoras y en marcas de consumo. Acá cuida el ritmo para que el calendario no sea un deseo.",
    focus: "Piezas, community, producción.",
  },
  {
    slug: "trinidad-lagos",
    name: "Trinidad Lagos",
    role: "Cuentas y producción",
    image: "/images/trinidad.jpg",
    bio: "La persona que hace que las fechas existan. Traduce al cliente, al estudio y a los proveedores. Si un brief llega a producción sin una frase medible, lo devuelve.",
    focus: "Cuenta, cronograma, proveedores.",
  },
] as const;

export const works = [
  {
    slug: "cuesta-blanca",
    client: "Viña Cuesta Blanca",
    sector: "Vino · Colchagua",
    year: "2024–25",
    title: "Del brochure al descorche digital",
    excerpt:
      "Una viña con 40 años de oficio y un ecommerce que parecía un folleto de feria. Ordenamos marca, sitio y pauta hasta que el vino se empezó a vender sin pasar siempre por el distributor.",
    cover: "/images/vinedo.jpg",
    gallery: ["/images/vinedo.jpg", "/images/vino.jpg"],
    featured: true,
    services: ["Marca", "Sitio", "Pauta", "Contenido"],
    stats: [
      { value: "+184%", label: "Ventas online, 9 meses" },
      { value: "−31%", label: "CAC" },
      { value: "42%", label: "Mix DTC" },
    ],
    quote: {
      text: "Por primera vez el directorio entendió qué estábamos pagando. Y por qué valía la pena.",
      author: "Camila Herrera",
      role: "Gerenta comercial, Viña Cuesta Blanca",
    },
    challenge:
      "Cuesta Blanca vendía bien en retail y mal en su propia web. El sitio era un catálogo con fotos de atardecer. La pauta, cuando existía, mandaba a una home que no convertía. El equipo interno estaba cansado de “hacer más Instagram”.",
    approach:
      "Reescribimos la oferta alrededor de dos líneas —reserva y parcela— y no de doce cepas. Nuevo sitio, checkout en pesos, envíos a regiones, contenidos de vendimia sin pose. Pauta de Meta y Google con landings por línea, no por “brand awareness”.",
    result:
      "En nueve meses el canal digital pasó de adorno a 42% del mix. El CAC bajó un tercio porque dejamos de pautar la cepa que no tenía margen. El equipo interno ahora publica con un ritmo de dos piezas a la semana, no con un calendario de agencia imposible.",
  },
  {
    slug: "nublo",
    client: "Nublo",
    sector: "Fintech · Santiago",
    year: "2025",
    title: "Una billetera que se explica en la feria",
    excerpt:
      "Lanzamiento de una cuenta digital para independientes. La categoría hablaba en jerga. Nublo tenía que hablarle a alguien que emite boleta y cobra por transferencia.",
    cover: "/images/nublo.jpg",
    gallery: ["/images/nublo.jpg", "/images/santiago.jpg"],
    featured: true,
    services: ["Marca", "Pauta", "Performance", "Sitios"],
    stats: [
      { value: "128 mil", label: "Descargas, primer trimestre" },
      { value: "−18%", label: "CAC vs. meta" },
      { value: "4,7", label: "Nota en tiendas" },
    ],
    quote: {
      text: "Dejaron de hablarnos en CTR y nos hablaron en caja. Eso, para un fintech chico, es oxígeno.",
      author: "Nicolás Paredes",
      role: "CEO, Nublo",
    },
    challenge:
      "El producto era sólido. El relato, no. Competían con bancos y con apps que gastan lo que Nublo facturaba en un año. Necesitaban una frase, un embudo y la disciplina de no pelear el awareness de los grandes.",
    approach:
      "La idea: “La cuenta de los que cobran a fin de mes.” Campaña de lanzamiento en Metro, Meta y YouTube con independientes reales — no actores de Providencia. Landing de una pantalla. Referral con plata, no con puntos. Cortes semanales de audiencias que no convertían a depósito.",
    result:
      "128 mil descargas en el primer trimestre, CAC 18% bajo la meta del directorio, y una nota de 4,7 que no se compró con pauta de reviews. El canal de referidos superó a TikTok a la sexta semana: lo dejamos ganar.",
  },
  {
    slug: "ruta-austral",
    client: "Ruta Austral",
    sector: "Turismo · Aysén",
    year: "2023–24",
    title: "Llenar la temporada sin vender el paisaje",
    excerpt:
      "Un lodge y expediciones en la Carretera Austral con occupancy de temporada baja. Había fotos lindas. Faltaba un sistema para que alguien reservara en mayo.",
    cover: "/images/austral.jpg",
    gallery: ["/images/austral.jpg", "/images/faro.jpg"],
    featured: true,
    services: ["Contenido", "Pauta", "Sitios"],
    stats: [
      { value: "41→78%", label: "Occupancy de temporada" },
      { value: "+2,4×", label: "Reservas directas" },
      { value: "62%", label: "Desde regiones y extranjero" },
    ],
    quote: {
      text: "Nosotros sabíamos mirar el río. Ellos supieron quién tenía que verlo, y cuándo.",
      author: "Paula Méndez",
      role: "Socia, Ruta Austral",
    },
    challenge:
      "Dependían de OTAs y de un Instagram hermoso que no convertía. El huésped chileno llegaba tarde, el extranjero no encontraba cómo pagar, y el equipo en Coyhaique no podía producir contenido todas las semanas.",
    approach:
      "Sitio con fechas, programas y pago en UF y dólares. Un motor de contenido: cuatro viajes al año de producción, no un community diario. Pauta en momentos de planificación (invierno para verano) y partnership con medios de viaje. WhatsApp como canal de reserva, no como afterthought.",
    result:
      "Occupancy de temporada de 41% a 78% en un ciclo. Reservas directas 2,4 veces. El 62% llegó de regiones y del extranjero con un relato que no prometía “el fin del mundo” — prometía un itinerario, una cama y un guía con nombre.",
  },
  {
    slug: "casa-lino",
    client: "Casa Lino",
    sector: "Hogar · Santiago",
    year: "2024",
    title: "El lino dejó de ser un post",
    excerpt:
      "Tres tiendas y un e-commerce que competían entre sí. Unificamos marca, lookbook y pauta hasta que el ticket subió y las tiendas dejaron de pelearse el stock.",
    cover: "/images/lino.jpg",
    gallery: ["/images/lino.jpg", "/images/haz.jpg"],
    featured: false,
    services: ["Marca", "Contenido", "Pauta"],
    stats: [
      { value: "+2,1×", label: "Ticket promedio" },
      { value: "3", label: "Tiendas, un relato" },
      { value: "−24%", label: "Devoluciones" },
    ],
    quote: {
      text: "Por fin el Instagram y la tienda de Vitacura parecen la misma casa.",
      author: "Josefina Ruiz",
      role: "Fundadora, Casa Lino",
    },
    challenge:
      "Cada tienda hablaba distinto. El e-commerce descontaba lo que la tienda intentaba vender a precio lleno. El contenido era lifestyle genérico: sábanas en una cama que no era de nadie.",
    approach:
      "Una marca, tres puertas. Lookbooks con luz de Santiago y piezas que se pueden tocar. Pauta hacia el sitio con precio honesto. Contenido de oficio —tejido, géneros, cuidado— en vez de “mood”. Entrenamos a vendedoras con el mismo tono del feed.",
    result:
      "Ticket 2,1 veces. Devoluciones abajo porque el producto se entendió antes de comprarse. Las tres tiendas dejaron de pelear el stock: el relato era uno y el inventario, también.",
  },
  {
    slug: "caleta-verde",
    client: "Caleta Verde",
    sector: "Gastronomía · Valparaíso y Santiago",
    year: "2025",
    title: "Cuatro mesas, una caleta",
    excerpt:
      "Un grupo de restaurantes con cocina seria y marcas que no se hablaban. Unificamos la señal, el funnel de reservas y la pauta local.",
    cover: "/images/caleta.jpg",
    gallery: ["/images/caleta.jpg", "/images/lastarria.jpg"],
    featured: false,
    services: ["Marca", "Pauta", "Sitios", "Medición"],
    stats: [
      { value: "+36%", label: "Reservas" },
      { value: "4,7", label: "Promedio de reseñas" },
      { value: "−22%", label: "No-show" },
    ],
    quote: {
      text: "La pauta dejó de mandar gente a un Instagram y empezó a mandarla a una mesa.",
      author: "Andrés Vidal",
      role: "Socio, Caleta Verde",
    },
    challenge:
      "Cuatro locales, cuatro tonos, cuatro formas de reservar. Google los confundía. La pauta de “sabores del mar” mandaba a un perfil que no tenía horario ni carta.",
    approach:
      "Una marca paraguas, cuatro fichas locales impecables. Sitio con reservas, carta y alérgenos. Pauta de Google Maps y Meta por comuna, no por “foodie”. Recordatorio de WhatsApp 24 horas antes — el no-show era un agujero más grande que el CAC.",
    result:
      "Reservas +36%, no-show −22%, reseñas 4,7. El grupo por fin se puede explicar: mar, fuego, mesa. El resto es operación, y la operación se volvió medible.",
  },
] as const;

export const voices = [
  {
    text: "Por primera vez el directorio entendió qué estábamos pagando. Y por qué valía la pena.",
    author: "Camila Herrera",
    role: "Gerenta comercial, Viña Cuesta Blanca",
  },
  {
    text: "Dejaron de hablarnos en CTR y nos hablaron en caja. Eso, para un fintech chico, es oxígeno.",
    author: "Nicolás Paredes",
    role: "CEO, Nublo",
  },
  {
    text: "Nosotros sabíamos mirar el río. Ellos supieron quién tenía que verlo, y cuándo.",
    author: "Paula Méndez",
    role: "Socia, Ruta Austral",
  },
] as const;
