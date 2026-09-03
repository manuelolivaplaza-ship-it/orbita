export type Lot = {
  frente: number;
  fondo: number;
  builtW: number;
  builtD: number;
  builtX: number;
  builtY: number;
  north: "top" | "right" | "left";
};

export type Solar = {
  slug: string;
  lamina: string;
  title: string;
  comuna: string;
  barrio: string;
  type: string;
  uf: number;
  m2util: number;
  m2terreno: number;
  frente: number;
  fondo: number;
  patio: number;
  orientacion: string;
  dormitorios: number;
  banos: number;
  estacionamientos: number;
  year: number;
  dfl2: boolean;
  status: "disponible" | "reservado";
  image: string;
  gallery: string[];
  lot: Lot;
  lead: string;
  body: string;
  facts: string[];
  barrioSlug: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  beat: string;
  image: string;
  email: string;
  phone: string;
  bio: string[];
};

export type Barrio = {
  slug: string;
  lamina: string;
  name: string;
  kicker: string;
  lead: string;
  image: string;
  body: string[];
  notes: { title: string; text: string }[];
};

export const solares: Solar[] = [
  {
    slug: "simon-bolivar",
    lamina: "01",
    title: "Casa Simón Bolívar",
    comuna: "Ñuñoa",
    barrio: "Plaza Ñuñoa",
    type: "Casa en sitio",
    uf: 8900,
    m2util: 128,
    m2terreno: 275,
    frente: 8.6,
    fondo: 32,
    patio: 78,
    orientacion: "Norponiente",
    dormitorios: 3,
    banos: 2,
    estacionamientos: 1,
    year: 1948,
    dfl2: true,
    status: "disponible",
    image: "/images/nunoa.jpg",
    gallery: ["/images/nunoa.jpg", "/images/patio.jpg", "/images/tejas.jpg"],
    lot: {
      frente: 86,
      fondo: 320,
      builtW: 62,
      builtD: 148,
      builtX: 18,
      builtY: 52,
      north: "top",
    },
    lead: "Ocho sesenta de frente, treinta y dos de fondo, patio con limonero. La casa se puede tocar. El solar, no.",
    body: "Una casa de 1948 en una cuadra que todavía no se comió el edificio. El pasillo lateral llega a un patio de 78 m² con un limonero plantado al centro: esa es la pieza que no aparece en el portal. El living da al norponiente; en invierno entra sol de tarde. DFL2. Contribuciones al día. El vecino oriente es una casa de un piso; el poniente, también. Lo leímos en el plan regulador antes de fotografiar.",
    facts: [
      "Rol SII vigente, sin avalúo fiscal desfasado de más de un período",
      "Sin hipotecas ni prohibiciones al 28 de agosto de 2026",
      "Antejardín de 4,2 m según plano de la DOM de Ñuñoa",
      "Constructibilidad residual: un segundo piso de 42 m², no un edificio",
    ],
    barrioSlug: "nunoa",
  },
  {
    slug: "jose-domingo-canas",
    lamina: "02",
    title: "Casa José Domingo Cañas",
    comuna: "Ñuñoa",
    barrio: "Irarrázaval alto",
    type: "Casa en sitio",
    uf: 7450,
    m2util: 112,
    m2terreno: 228,
    frente: 8.5,
    fondo: 26.8,
    patio: 54,
    orientacion: "Norte",
    dormitorios: 3,
    banos: 1,
    estacionamientos: 1,
    year: 1954,
    dfl2: true,
    status: "disponible",
    image: "/images/canas.jpg",
    gallery: ["/images/canas.jpg", "/images/alero.jpg", "/images/mesa.jpg"],
    lot: {
      frente: 85,
      fondo: 268,
      builtW: 64,
      builtD: 132,
      builtX: 16,
      builtY: 48,
      north: "top",
    },
    lead: "Norte verdadero. Patio chico, pero el alero no le come el sol a las 13:00. Eso se comprueba parado, no en el render.",
    body: "Sitio de 8,5 × 26,8, el más chileno de los solares. La casa pide obra: cocina hacia el patio, baño segundo, techo. El precio es de solar con techo, no de casa terminada. A cuatro cuadras de Irarrázaval. El plan regulador permite densificar en la manzana; el lote de al lado sigue siendo casa. Se lo mostramos en la CIP, no en un discurso.",
    facts: [
      "Orientación norte medida con brújula, no con el relato del mandante",
      "Altura permitida en la zona: 12,5 m. El vecino sur todavía no pide permiso",
      "Instalación eléctrica original; hay que rehacerla antes de escriturar con crédito",
      "Pieza de servicio reconvertida: consta en el plano, no se esconde",
    ],
    barrioSlug: "nunoa",
  },
  {
    slug: "larrain",
    lamina: "03",
    title: "Casa Larraín interior",
    comuna: "La Reina",
    barrio: "Larraín oriente",
    type: "Casa en sitio",
    uf: 14200,
    m2util: 186,
    m2terreno: 532,
    frente: 14,
    fondo: 38,
    patio: 210,
    orientacion: "Nororiente",
    dormitorios: 4,
    banos: 3,
    estacionamientos: 2,
    year: 1967,
    dfl2: false,
    status: "disponible",
    image: "/images/lareina.jpg",
    gallery: ["/images/lareina.jpg", "/images/jardin.jpg", "/images/patio.jpg"],
    lot: {
      frente: 140,
      fondo: 380,
      builtW: 92,
      builtD: 128,
      builtX: 24,
      builtY: 70,
      north: "top",
    },
    lead: "Catorce de frente. Quincho, palto, cordillera al fondo cuando no hay smog. La Reina todavía guarda solares de esta medida.",
    body: "Casa de 1967, un piso, jardín de verdad. El palto da sombra a las 13:00 sobre el quincho: eso es un dato, no un adorno. La Reina restringe la densificación con más rigor que Ñuñoa; el solar de 532 m² no se convierte en un bloque de 18 departamentos el año que viene. A diez minutos de la mesa de SOLAR. Colegios a cuadras, no a comunas.",
    facts: [
      "Ocupación de suelo actual: 28%. El PRC permite más; no es obligación usarlo",
      "Pozo de aguas lluvias y riego por goteo al palto",
      "Estudio de títulos limpio, incluyendo la ampliación de 1989",
      "Contribuciones trimestre al día. Sin deudas de aseo",
    ],
    barrioSlug: "la-reina",
  },
  {
    slug: "consistorial",
    lamina: "04",
    title: "Casa Consistorial",
    comuna: "Peñalolén",
    barrio: "Peñalolén alto",
    type: "Casa en sitio",
    uf: 11800,
    m2util: 164,
    m2terreno: 672,
    frente: 16,
    fondo: 42,
    patio: 290,
    orientacion: "Norte",
    dormitorios: 4,
    banos: 2,
    estacionamientos: 2,
    year: 1982,
    dfl2: false,
    status: "disponible",
    image: "/images/penalolen.jpg",
    gallery: [
      "/images/penalolen.jpg",
      "/images/jardin.jpg",
      "/images/tejas.jpg",
    ],
    lot: {
      frente: 160,
      fondo: 420,
      builtW: 96,
      builtD: 118,
      builtX: 32,
      builtY: 64,
      north: "top",
    },
    lead: "Dieciséis de frente contra la cordillera. El terreno es el argumento. La casa, el recinto que lo ocupa.",
    body: "Peñalolén alto, donde el sitio todavía se mide en cientos de metros y no en el antejardín. Casa de los ochenta, sólida, sin pretensión. El viento de la tarde baja de la precordillera: hay que estar a las 13:00 para sentirlo, y a las 18:00 para saber si molesta. Parque Peñalolén a doce minutos. El mandante vende porque se va al sur, no porque el solar esté enfermo.",
    facts: [
      "Pendiente suave hacia el norte: el patio no se encharca",
      "Cierre perimetral original, medianeros sin litigios inscritos",
      "Agua potable y alcantarillado municipales. No es parcela de agrado",
      "La DOM no registra permisos de edificación en los dos lotes colindantes",
    ],
    barrioSlug: "penalolen",
  },
  {
    slug: "quilin",
    lamina: "05",
    title: "Casa Quilín",
    comuna: "Macul",
    barrio: "Quilín",
    type: "Casa en sitio",
    uf: 5900,
    m2util: 98,
    m2terreno: 200,
    frente: 8,
    fondo: 25,
    patio: 46,
    orientacion: "Nororiente",
    dormitorios: 3,
    banos: 1,
    estacionamientos: 1,
    year: 1958,
    dfl2: true,
    status: "reservado",
    image: "/images/macul.jpg",
    gallery: ["/images/macul.jpg", "/images/alero.jpg", "/images/cuadra.jpg"],
    lot: {
      frente: 80,
      fondo: 250,
      builtW: 58,
      builtD: 126,
      builtX: 16,
      builtY: 44,
      north: "top",
    },
    lead: "El solar chileno de manual: 8 × 25. Precio de Macul, no de vitrina. Reservado el 1 de septiembre.",
    body: "Tres dormitorios, un baño, patio de 46 m². La casa pide cariño y un segundo baño. El precio es el del sitio en una comuna que todavía no se habla en la misma frase que Vitacura. A pasos de Quilín. Campus San Joaquín cerca, no encima. Quien reserva ahora, escribe en octubre.",
    facts: [
      "Sitio 8 × 25 inscrito. Medición en terreno calza con el Conservador",
      "DFL2. Beneficio de contribuciones vigente",
      "El pasillo lateral tiene 1,4 m: cabe un auto chico, no una camioneta",
      "Reservado con arras. No se muestra hasta que se caiga o se escriture",
    ],
    barrioSlug: "macul",
  },
  {
    slug: "el-quisco",
    lamina: "06",
    title: "Casa El Quisco",
    comuna: "El Quisco",
    barrio: "El Quisco norte",
    type: "Casa de veraneo",
    uf: 6400,
    m2util: 86,
    m2terreno: 360,
    frente: 12,
    fondo: 30,
    patio: 140,
    orientacion: "Poniente",
    dormitorios: 3,
    banos: 2,
    estacionamientos: 2,
    year: 1974,
    dfl2: true,
    status: "disponible",
    image: "/images/quisco.jpg",
    gallery: ["/images/quisco.jpg", "/images/tejas.jpg", "/images/jardin.jpg"],
    lot: {
      frente: 120,
      fondo: 300,
      builtW: 78,
      builtD: 92,
      builtX: 22,
      builtY: 48,
      north: "right",
    },
    lead: "No es Zapallar. Es El Quisco: arena, alero y un mar que se oye. Fuera de radio, con las mismas reglas.",
    body: "Casa de veraneo de 1974, madera y estuco, a seis cuadras de la playa. El poniente es el mar: el sol de tarde entra entero, y eso en enero es un dato que hay que vivir, no leer. No tramitamos arriendos de temporada. Si se compra para vivir febrero y arrendar el resto, se lo decimos: no somos esa mesa.",
    facts: [
      "Fuera de radio Santiago. La visita se coordina un sábado al mediodía",
      "Bien inscrito en el Conservador de San Antonio",
      "Sin vista despejada permanente: hay casas al frente. Lo fotografíamos al mediodía para que se note",
      "Agua potable rural regularizada. No es un sitio a regularizar",
    ],
    barrioSlug: "fuera",
  },
  {
    slug: "pirque",
    lamina: "07",
    title: "Parcela Pirque",
    comuna: "Pirque",
    barrio: "El Principal",
    type: "Parcela",
    uf: 16200,
    m2util: 142,
    m2terreno: 5000,
    frente: 42,
    fondo: 119,
    patio: 4200,
    orientacion: "Norte",
    dormitorios: 3,
    banos: 2,
    estacionamientos: 3,
    year: 1996,
    dfl2: false,
    status: "disponible",
    image: "/images/pirque.jpg",
    gallery: ["/images/pirque.jpg", "/images/jardin.jpg", "/images/mesa.jpg"],
    lot: {
      frente: 42,
      fondo: 119,
      builtW: 16,
      builtD: 22,
      builtX: 8,
      builtY: 18,
      north: "top",
    },
    lead: "Cinco mil metros. Casa chica, tierra grande. El Maipo se oye. No es un condominio de parcelas.",
    body: "Parcela de agrado en El Principal, con casa de un piso y álamos al deslinde. Cinco mil metros no se improvisan en una ficha de portal: hay que caminarlos. Pozo, riego, cierre. La casa es de 1996 y está al servicio del sitio, no al revés. A 45 minutos de la mesa, si no hay taco en Las Vizcachas.",
    facts: [
      "Rol agrícola con recepción municipal de la vivienda",
      "Derechos de agua inscritos, caudal menor. No se vende un río",
      "Camino de acceso consolidado, no servidumbre de hecho",
      "No aceptamos ofertas que ignoren el costo de mantener 5.000 m²",
    ],
    barrioSlug: "fuera",
  },
];

export const team: Person[] = [
  {
    slug: "emilia-lagos",
    name: "Emilia Lagos",
    role: "Socia",
    beat: "Ñuñoa y La Reina",
    image: "/images/emilia.jpg",
    email: "emilia@solar.cl",
    phone: "+56 9 7841 2291",
    bio: [
      "Abrió SOLAR en 2016, en esta misma casa de Larraín, después de siete años tasando para un banco. Se cansó de leer metros cuadrados construidos y no el solar que los sostiene.",
      "Camina la cuadra antes que el living. Si el plan regulador le come el patio al vecino, lo dice en la primera hora, no en la promesa.",
    ],
  },
  {
    slug: "martin-ossandon",
    name: "Martín Ossandón",
    role: "Solares y obra",
    beat: "Peñalolén, Macul y Pirque",
    image: "/images/martin.jpg",
    email: "martin@solar.cl",
    phone: "+56 9 7841 2292",
    bio: [
      "Arquitecto de la U. de Chile. Mide el frente con huincha, no con la ficha. Lee permisos de edificación, constructibilidad y la sombra que tira un volumen de tres pisos a las 13:00 del 21 de junio.",
      "Si la casa pide obra, arma el orden: techo, instalaciones, segundo baño. No vendemos un render de lo que podría ser.",
    ],
  },
  {
    slug: "sofia-huneeus",
    name: "Sofía Huneeus",
    role: "Barrios",
    beat: "Colegios, plazas, cuadra",
    image: "/images/sofia.jpg",
    email: "sofia@solar.cl",
    phone: "+56 9 7841 2293",
    bio: [
      "Antes hizo planificación urbana en un municipio del oriente. Sabe qué se vota en el plan regulador y qué se conversa en la feria de Ñuñoa los domingos.",
      "La ficha de un solar incluye la cuadra: el plátano de la vereda, el paradero, el colegio municipal y el particular a diez minutos. Sin eso, el precio en UF no significa nada.",
    ],
  },
  {
    slug: "joaquin-palma",
    name: "Joaquín Palma",
    role: "Títulos",
    beat: "Conservador, promesa, SII",
    image: "/images/joaquin.jpg",
    email: "joaquin@solar.cl",
    phone: "+56 9 7841 2294",
    bio: [
      "Abogado. Estudio de títulos, promesas, hipotecas y el papelerío que hace que una visita se convierta en escritura. El Conservador no perdona el entusiasmo.",
      "Si hay una servidumbre, un D.L. 2.695 a medio camino o una herencia sin partición, se entera usted el martes, no el día de la firma.",
    ],
  },
];

export const barrios: Barrio[] = [
  {
    slug: "nunoa",
    lamina: "NÑ",
    name: "Ñuñoa",
    kicker: "La cuadra que se densifica",
    lead: "Casas de 8 × 25 que todavía no se comió el edificio. El trabajo es leer cuál manzana aguanta y cuál no.",
    image: "/images/cuadra.jpg",
    body: [
      "Ñuñoa se vende como barrio y se construye como ciudad. Plaza, Irarrázaval, jacarandás, colegios — y un plan regulador que permite, en más de una zona, que el solar de al lado se vuelva cinco pisos.",
      "No venimos a extrañar la Ñuñoa de 1970. Venimos a decir, con la CIP en la mesa, si el patio que usted se enamora va a tener sol en 2029. Hay cuadras que se sostienen. Hay cuadras que no.",
      "Los solares que tomamos aquí son casas en sitio con medianeros que todavía son casas, o con una restricción que lo hace improbable. Si el negocio es el edificio, hay otras mesas.",
    ],
    notes: [
      {
        title: "La medida",
        text: "El solar Ñuñoa clásico es 8,5 × 30. Menos de 8 de frente se siente. Más de 10 ya es otra comuna.",
      },
      {
        title: "El colegio",
        text: "Municipales buenos y particulares a cuadras, no a autopistas. Sofía arma la ficha con eso, no con un ranking.",
      },
      {
        title: "El riesgo",
        text: "Densificación. Lo primero que abrimos no es el living: es el plano regulador de la manzana.",
      },
    ],
  },
  {
    slug: "la-reina",
    lamina: "LR",
    name: "La Reina",
    kicker: "El solar que todavía mide",
    lead: "Frentes anchos, jardín de verdad, cordillera cuando el aire limpia. La mesa está aquí porque el barrio todavía cabe en un plano.",
    image: "/images/lareina.jpg",
    body: [
      "La Reina no es el oriente de vitrina. Es una comuna de casas con jardín, calles con plátanos y una municipalidad que no regala la altura. Por eso estamos en Larraín 6412 y no en una torre de El Golf.",
      "Los solares que aparecen en esta mesa tienen 12 metros de frente o más, o un patio que justifica el precio en UF. Si es un 8 × 25, casi siempre es Ñuñoa o Macul.",
      "Villa La Reina, Larraín oriente, Los Presidentes, Carlos Silva Vildósola. Caminamos esas calles todas las semanas. El resto del mapa, con menos oficio.",
    ],
    notes: [
      {
        title: "La medida",
        text: "Catorce de frente cambia la casa. El auto no se pelea con el limonero.",
      },
      {
        title: "La altura",
        text: "El PRC es más conservador que el de Ñuñoa. Eso no es eterno. Se verifica cada mandato.",
      },
      {
        title: "La mesa",
        text: "Av. Larraín 6412. Si viene a encargar, hay té y un plano sobre la mesa. No hay recepción de mármol.",
      },
    ],
  },
  {
    slug: "penalolen",
    lamina: "PN",
    name: "Peñalolén",
    kicker: "Tierra, pendiente, cordillera",
    lead: "Sitios grandes contra la precordillera. El argumento es el terreno. La casa, lo que lo ocupa.",
    image: "/images/penalolen.jpg",
    body: [
      "Peñalolén alto todavía ofrece solares que en Ñuñoa son historia. Dieciséis de frente, cuarenta de fondo, un viento que baja de la cordillera a media tarde.",
      "No es un barrio solo. Son varios, y se notan: Consistorial no es Lo Hermida, y el Parque no es un adorno de ficha. Caminamos el desnivel. Si el patio se encharca en junio, se entera en la visita de mediodía — si es que llovió — o en el relato del vecino.",
      "Tomamos pocas. Cuando entra una, es porque el sitio justifica el traslado desde Larraín.",
    ],
    notes: [
      {
        title: "La pendiente",
        text: "Norte abajo es un regalo. Sur abajo, un problema de agua y de sol. Se mide.",
      },
      {
        title: "El parque",
        text: "Parque Peñalolén no reemplaza un patio. Lo complementa, si queda a una caminata.",
      },
      {
        title: "El traslado",
        text: "Desde La Reina, 20 minutos sin taco. Con taco, es otra conversación. La tenemos.",
      },
    ],
  },
  {
    slug: "macul",
    lamina: "MC",
    name: "Macul",
    kicker: "El precio todavía es de casa",
    lead: "Sitios 8 × 25, cuadras de ladrillo y estuco, campus cerca. El UF rinde. El oficio es el mismo.",
    image: "/images/macul.jpg",
    body: [
      "Macul no aparece en las listas del oriente y por eso todavía se puede comprar una casa en sitio sin vender otra. Quilín, Las Encinas, los bordes del campus: solares modestos, con patio, con pasillo.",
      "El riesgo aquí no es tanto el edificio de lujo como el deterioro de la cuadra o un permiso industrial mal leído. Lo revisamos. Si el solar es bueno y el precio es honesto, entra a la mesa.",
      "No es un barrio de vitrina. Es un barrio de oficio. Nos basta.",
    ],
    notes: [
      {
        title: "La medida",
        text: "Ocho por veinticinco. El solar chileno. Cabe un limonero, no un quincho de revista.",
      },
      {
        title: "El UF",
        text: "El rango de esta mesa en Macul anda entre 5.000 y 8.000 UF. Sobre eso, casi siempre hay otra comuna.",
      },
      {
        title: "El campus",
        text: "San Joaquín cerca es un plus. Encima, un problema de estacionamiento. Depende la cuadra.",
      },
    ],
  },
];

export const principles = [
  {
    folio: "01",
    title: "El solar no se remodela.",
    text: "La casa se agranda, se tira, se vuelve a levantar. El frente, el fondo y el vecino de tres pisos, no. Por eso medimos el sitio antes que el living.",
  },
  {
    folio: "02",
    title: "El plano se abre primero.",
    text: "CIP, plan regulador, constructibilidad, sombra del volumen permitido. Si el patio se va a oscurecer, se lo decimos en la primera hora.",
  },
  {
    folio: "03",
    title: "La visita es al mediodía.",
    text: "Entre 11:30 y 14:30. El sol de las siete de la tarde es un filtro. El de las doce, un instrumento. No fotografiamos atardeceres.",
  },
  {
    folio: "04",
    title: "UF, por escrito.",
    text: "Precio, honorario y lo que no está incluido. El 2% más IVA, a cargo de quien encarga. Lo que no está en la hoja, no está pactado.",
  },
] as const;

export const steps = [
  {
    folio: "01",
    title: "Encargo",
    body: "Cincuenta minutos en Larraín 6412. Presupuesto en UF, comunas, frente mínimo, patio, colegio. Lo que no cabe, se descarta esa tarde. Sin honorario.",
  },
  {
    folio: "02",
    title: "Lectura",
    body: "Martín abre el plano. Sofía, la cuadra. Joaquín, el Conservador. No le mandamos treinta links. Le traemos dos o tres solares que aguantan esa lectura.",
  },
  {
    folio: "03",
    title: "Visita",
    body: "11:30 a 14:30. Se camina el deslinde, se mira el alero del vecino, se para uno en el patio. Si no puede a esa hora, esperamos. No mentimos la casa con otra luz.",
  },
  {
    folio: "04",
    title: "Escritura",
    body: "Promesa, estudio de títulos, banco, Conservador, contribuciones. Acompañamos hasta la inscripción. No desaparecemos cuando se paga la reserva.",
  },
] as const;

export const honorarios = [
  {
    title: "Compra",
    value: "2% + IVA",
    note: "Sobre el precio de escritura, a cargo de quien nos encarga. El brief de cincuenta minutos no tiene honorario.",
  },
  {
    title: "Venta",
    value: "2% + IVA",
    note: "Mandato exclusivo. Producción fotográfica al mediodía y medición del solar incluidas. Sin exclusividad, no tomamos.",
  },
  {
    title: "Fuera de radio",
    value: "A pacto",
    note: "El Quisco, Pirque y lo que no sea Ñuñoa, La Reina, Peñalolén o Macul. Si no es nuestro, se lo decimos.",
  },
] as const;

export const faqs = [
  {
    q: "¿Por qué no publican la calle?",
    a: "Porque el mandante vive ahí. Publicamos comuna, barrio, frente, fondo y orientación. La dirección se entrega al calificar el encargo o al agendar la visita. No es misterio: es respeto.",
  },
  {
    q: "¿Por qué visitar al mediodía?",
    a: "Porque a las 18:30 toda casa parece amable. A las 13:00 se ve si el edificio de atrás se come el patio, si el alero deja pasar el norte, si el quincho queda en sombra. El sol es el perito que no cobra.",
  },
  {
    q: "¿Trabajan departamentos?",
    a: "Casi nunca. Si el departamento tiene una terraza que se comporta como patio y un edificio que no le tapa el norte, lo miramos. Oficinas, locales y arriendos de temporada, no.",
  },
  {
    q: "¿Cobran la primera reunión?",
    a: "No. Cincuenta minutos en la casa de Larraín, sin honorario. Si tomamos el mandato, el 2% más IVA sobre el precio de escritura. En venta, el mismo porcentaje, con mandato exclusivo.",
  },
  {
    q: "¿Tasan?",
    a: "Hacemos una lectura de mercado en UF por metro de terreno y por comparable de la cuadra. La tasación del banco es otra cosa, y la hace el banco. No las mezclamos.",
  },
  {
    q: "¿Aceptan casas para vender?",
    a: "Sí, con mandato exclusivo, títulos limpios y un solar que podamos defender. Fotografiamos al mediodía. Si la casa pide atardecer para verse, quizá no es para esta mesa.",
  },
] as const;

export const noHacemos = [
  "Departamentos sin terraza real",
  "Oficinas, locales, bodegas",
  "Arriendos de temporada",
  "Proyectos en verde como vitrina",
  "Mandatos sin exclusividad",
  "Fotos de atardecer con lámparas",
] as const;

export function getSolar(slug: string) {
  return solares.find((item) => item.slug === slug);
}

export function getPerson(slug: string) {
  return team.find((item) => item.slug === slug);
}

export function getBarrio(slug: string) {
  return barrios.find((item) => item.slug === slug);
}
