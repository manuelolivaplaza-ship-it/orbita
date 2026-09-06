import { formatM2, formatUf, ufPerM2 } from "./utils";

export type PropertyType = "departamento" | "casa";
export type Orientacion = "N" | "NE" | "NO" | "cruzada";
export type Status = "disponible" | "reservado";

export type Property = {
  slug: string;
  folio: string;
  name: string;
  type: PropertyType;
  comuna: string;
  barrio: string;
  barrioSlug: string;
  status: Status;
  uf: number;
  m2: number;
  terraza?: number;
  terreno?: number;
  piso?: number;
  pisosEdificio?: number;
  dormitorios: number;
  banos: number;
  estacionamientos: number;
  bodega: boolean;
  orientacion: Orientacion;
  orientacionLabel: string;
  solInvierno: number;
  solVerano: number;
  visitaIdeal: string;
  ano: number;
  gastosComunes: number;
  contribuciones: string;
  dfl2: boolean;
  metro: string;
  cafe: string;
  coords: string;
  cover: string;
  gallery: { src: string; alt: string }[];
  lede: string;
  body: string[];
  porQue: string;
  facts: string[];
  featured?: boolean;
  agente: string;
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
  n: string;
  name: string;
  comuna: string;
  kicker: string;
  lead: string;
  image: string;
  body: string[];
  notes: { title: string; text: string }[];
};

export const typeLabel: Record<PropertyType, string> = {
  departamento: "Departamento",
  casa: "Casa",
};

export const statusLabel: Record<Status, string> = {
  disponible: "En lista",
  reservado: "Reservado",
};

export const orientacionLabel: Record<Orientacion, string> = {
  N: "Norte",
  NE: "Nororiente",
  NO: "Norponiente",
  cruzada: "Luz cruzada",
};

export const properties: Property[] = [
  {
    slug: "conquistadores",
    folio: "H-044",
    name: "Los Conquistadores",
    type: "departamento",
    comuna: "Providencia",
    barrio: "Pedro de Valdivia Norte",
    barrioSlug: "pedro-de-valdivia-norte",
    status: "disponible",
    uf: 16800,
    m2: 156,
    terraza: 28,
    piso: 4,
    pisosEdificio: 6,
    dormitorios: 3,
    banos: 3,
    estacionamientos: 2,
    bodega: true,
    orientacion: "N",
    orientacionLabel: "Norte — parque y cordillera",
    solInvierno: 4.8,
    solVerano: 8.1,
    visitaIdeal: "10:15 a 12:00",
    ano: 2019,
    gastosComunes: 9.4,
    contribuciones: "$428.000 el trimestre",
    dfl2: false,
    metro: "Pedro de Valdivia · 8 min",
    cafe: "Café del Cerro · 4 min",
    coords: "33°25′ S · 70°37′ W",
    cover: "/images/conquistadores.jpg",
    gallery: [
      {
        src: "/images/conquistadores.jpg",
        alt: "Edificio bajo de hormigón visto hacia el parque y la cordillera",
      },
      {
        src: "/images/conquistadores-int.jpg",
        alt: "Estar abierto a la terraza norte, con el parque y los Andes",
      },
      {
        src: "/images/hero.jpg",
        alt: "Luz de mañana sobre el piso de roble y el ventanal",
      },
    ],
    lede: "Ciento cincuenta y seis metros que no le dan la espalda al cerro. El estar corre al norte; la terraza, también. El parque hace de antejardín.",
    body: [
      "Pedro de Valdivia Norte es una comuna dentro de otra: el río abajo, el cerro atrás, la ciudad al otro lado. Este departamento no «tiene vista». Tiene el parque a la altura de la copa de los eucaliptus, y la cordillera cuando el smog se levanta.",
      "Piso 4 de 6. El estar, el comedor y la cocina se leen como una sola pieza de 62 m² con carpintería de roble y un ventanal que no pide cortina blackout. Tres dormitorios en suite. Los dos de atrás miran al edificio; el principal, al norte.",
      "Dos estacionamientos juntos en −1 y bodega. El edificio es bajo a propósito: no hay conserjería de hotel ni pileta que nadie usa. Gastos comunes serios, administración al día.",
    ],
    porQue:
      "La familia se muda a Valdivia. No hay apuro de precio: hay apuro de fecha. Mandato exclusivo hasta noviembre.",
    facts: [
      "Rol de avalúo vigente, sin deuda de contribuciones",
      "Reglamento de copropiedad de 2019, sin juicios en curso",
      "La terraza está en el título, no es un uso precario",
      "Sin letrero en fachada",
    ],
    featured: true,
    agente: "amalia-riesco",
  },
  {
    slug: "suecia",
    folio: "H-041",
    name: "Suecia 7",
    type: "departamento",
    comuna: "Providencia",
    barrio: "Suecia",
    barrioSlug: "ines-de-suarez",
    status: "disponible",
    uf: 12400,
    m2: 118,
    terraza: 8,
    piso: 7,
    pisosEdificio: 9,
    dormitorios: 3,
    banos: 2,
    estacionamientos: 1,
    bodega: true,
    orientacion: "N",
    orientacionLabel: "Norte — cordillera",
    solInvierno: 4.4,
    solVerano: 7.2,
    visitaIdeal: "10:30 a 12:00",
    ano: 2011,
    gastosComunes: 6.8,
    contribuciones: "$312.000 el trimestre",
    dfl2: true,
    metro: "Los Leones · 9 min",
    cafe: "Colmado · 5 min",
    coords: "33°25′ S · 70°36′ W",
    cover: "/images/suecia.jpg",
    gallery: [
      {
        src: "/images/suecia.jpg",
        alt: "Edificio de hormigón en Suecia, jacarandás y la cordillera al fondo",
      },
      {
        src: "/images/suecia-int.jpg",
        alt: "Comedor junto al ventanal norte, con la ciudad y el cerro",
      },
      {
        src: "/images/cocina.jpg",
        alt: "Cocina con sol de mañana sobre el mármol",
      },
    ],
    lede: "Piso 7, ventanal corrido, tres dormitorios. El jacinto de la calle no es un adorno de foto: es noviembre en Providencia.",
    body: [
      "Suecia entre Nueva de Lyon y General Holley. El edificio es de 2011, sin pretensión de torre: nueve pisos, un conserje de día, un patio interior que no se usa y un norte que sí.",
      "Ciento dieciocho metros útiles. El estar-comedor mira al norte y a la cordillera; la cocina se abre a esa misma luz. Tres dormitorios, el tercero sirve de estudio sin mentir. Un baño completo y un baño de visita que alguien llamó «de servicio» en el plano original.",
      "DFL2. Un estacionamiento. La bodega está en −2, no al lado del auto. Gastos comunes de edificio vivo, no de hotel.",
    ],
    porQue:
      "Se vende porque el dueño se va a un cargo en Antofagasta. Disponible para escritura en 45 días.",
    facts: [
      "DFL2 vigente",
      "Sin hipoteca a la fecha de la ficha",
      "El piso 8 no vuela sobre esta planta: el retiro es de 4,2 m",
      "Jacarandás de vereda: la municipalidad no tiene tala programada",
    ],
    featured: true,
    agente: "joaquin-matte",
  },
  {
    slug: "suarez",
    folio: "H-036",
    name: "Plaza Inés de Suárez",
    type: "departamento",
    comuna: "Providencia",
    barrio: "Inés de Suárez",
    barrioSlug: "ines-de-suarez",
    status: "disponible",
    uf: 14900,
    m2: 142,
    terraza: 6,
    piso: 5,
    pisosEdificio: 6,
    dormitorios: 3,
    banos: 2,
    estacionamientos: 2,
    bodega: true,
    orientacion: "N",
    orientacionLabel: "Norte — plaza",
    solInvierno: 4.6,
    solVerano: 7.6,
    visitaIdeal: "10:00 a 11:45",
    ano: 1964,
    gastosComunes: 8.1,
    contribuciones: "$356.000 el trimestre",
    dfl2: false,
    metro: "Manuel Montt · 12 min",
    cafe: "Panadería Castaño de la plaza · 2 min",
    coords: "33°25′ S · 70°37′ W",
    cover: "/images/suarez.jpg",
    gallery: [
      {
        src: "/images/suarez.jpg",
        alt: "Edificio blanco de seis pisos frente a la plaza Inés de Suárez",
      },
      {
        src: "/images/suarez-int.jpg",
        alt: "Living con cortinas de lino y la plaza a través del ventanal",
      },
      {
        src: "/images/oficina.jpg",
        alt: "Luz de ventana sobre una mesa de trabajo",
      },
    ],
    lede: "Ciento cuarenta y dos metros de 1964 que nadie ha «abierto». El norte es la plaza. Los árboles hacen de cortina.",
    body: [
      "Los edificios que miran Inés de Suárez no se publican todos los meses. Este es de 1964, planta generosa, muros que todavía pesan. El living da a la plaza: en la visita de las 10:30 el sol entra hasta el pasillo.",
      "Tres dormitorios de verdad, no de plano de marketing. Cocina cerrada — se puede abrir, el cálculo está hecho, no es un encargo de esta mesa. Dos estacionamientos en el mismo edificio, cosa rara en la cuadra.",
      "El edificio tiene seis pisos y un mayordomo que lleva diecinueve años. Gastos comunes altos para el año de construcción: se nota en el hall y en que el ascensor no es un proyecto.",
    ],
    porQue:
      "Sucesión de tres hermanos. Hay acuerdo. La tasación bancaria ya está; no se pelea el número en la primera visita.",
    facts: [
      "Edificio de 1964, sin daños estructurales declarados en el último informe",
      "La plaza es bien nacional; no hay torre proyectada al frente",
      "Dos estacionamientos inscritos, no «de uso»",
      "Piso 5 de 6: no hay terraza de penthouse ni ruido de roof",
    ],
    featured: true,
    agente: "amalia-riesco",
  },
  {
    slug: "italia",
    folio: "H-038",
    name: "Caupolicán",
    type: "departamento",
    comuna: "Providencia",
    barrio: "Barrio Italia",
    barrioSlug: "barrio-italia",
    status: "disponible",
    uf: 6850,
    m2: 78,
    piso: 3,
    pisosEdificio: 3,
    dormitorios: 2,
    banos: 1,
    estacionamientos: 0,
    bodega: false,
    orientacion: "NE",
    orientacionLabel: "Nororiente",
    solInvierno: 3.6,
    solVerano: 6.4,
    visitaIdeal: "9:45 a 11:30",
    ano: 1934,
    gastosComunes: 1.8,
    contribuciones: "$94.000 el trimestre",
    dfl2: true,
    metro: "Irarrázaval · 11 min",
    cafe: "Café de la casona, Italia 1214 · 3 min",
    coords: "33°26′ S · 70°37′ W",
    cover: "/images/italia.jpg",
    gallery: [
      {
        src: "/images/italia.jpg",
        alt: "Casona de ladrillo en Barrio Italia, con jacarandá en la esquina",
      },
      {
        src: "/images/italia-int.jpg",
        alt: "Pieza de cielos altos, vanos originales y un sillón al sol",
      },
      {
        src: "/images/lastarria-int.jpg",
        alt: "Dormitorio con piso de madera y sol de mañana",
      },
    ],
    lede: "Setenta y ocho metros en una casona de 1934. Los vanos miden lo que tenían que medir. El nororiente entra hasta el mediodía.",
    body: [
      "Barrio Italia todavía es un barrio, no solo una vitrina. Esta planta es el tercer piso de una casona de ladrillo: no hay ascensor, no hay conserje, no hay estacionamiento. Hay 3,40 m de cielo y ventanas que no se fabrican más.",
      "Dos dormitorios. El estar y el dormitorio principal miran al nororiente; la cocina, al patio interior. En invierno el sol llega hasta las 12:10. No es un norte puro: está escrito en la ficha, no en letra chica.",
      "DFL2. Gastos comunes de casa convertida. La copropiedad es de cuatro unidades y se lleva en una libreta, no en una app.",
    ],
    porQue:
      "La dueña se va a vivir al sur. Quiere una venta limpia, no una subasta entre inversionistas de Airbnb.",
    facts: [
      "Sin estacionamiento: la calle tiene permiso de residente",
      "Cielos de 3,40 m, medidos",
      "El patio interior no es de uso exclusivo",
      "No acepta uso comercial ni hospedaje transitorio",
    ],
    featured: true,
    agente: "laura-silva",
  },
  {
    slug: "duble",
    folio: "H-033",
    name: "Casa Dublé Almeyda",
    type: "casa",
    comuna: "Ñuñoa",
    barrio: "Dublé Almeyda",
    barrioSlug: "nunoa",
    status: "disponible",
    uf: 11200,
    m2: 148,
    terreno: 312,
    dormitorios: 3,
    banos: 2,
    estacionamientos: 1,
    bodega: false,
    orientacion: "N",
    orientacionLabel: "Norte — patio",
    solInvierno: 5.1,
    solVerano: 8.4,
    visitaIdeal: "11:00 a 13:00",
    ano: 1946,
    gastosComunes: 0,
    contribuciones: "$186.000 el trimestre",
    dfl2: true,
    metro: "Ñuñoa · 14 min",
    cafe: "Panadería de Dublé con Campo de Deportes · 6 min",
    coords: "33°27′ S · 70°35′ W",
    cover: "/images/duble.jpg",
    gallery: [
      {
        src: "/images/duble.jpg",
        alt: "Casa de un piso en Ñuñoa, teja y un limonero en el antejardín",
      },
      {
        src: "/images/patio.jpg",
        alt: "Patio norte con limonero, baldosa de greda y sol de mediodía",
      },
      {
        src: "/images/cocina.jpg",
        alt: "Cocina con sol sobre el mesón de mármol y un bol de limones",
      },
    ],
    lede: "Trescientos doce metros de sitio, patio al norte, limonero plantado. La casa se puede tocar. El solar, no.",
    body: [
      "Dublé Almeyda entre Campo de Deportes y Grecia. Una casa de 1946 que no ha sido «intervenida» por un arquitecto de revista: se le cambió el mesón, se le respetó el patio. El estar da al norte; el patio también. En invierno, a las 11:30, el limonero tiene sombra corta.",
      "Ciento cuarenta y ocho metros útiles, tres dormitorios, un baño y medio que alguien convirtió en dos. Estacionamiento interior para un auto. El vecino oriente es una casa de un piso; el poniente, también. Lo leímos en el plano antes de fotografiar.",
      "DFL2. Constructibilidad residual: un segundo piso de unos 50 m², no un edificio. Si el encargo es demoler, esta no es la ficha.",
    ],
    porQue:
      "Los dueños se van a un departamento en Ñuñoa plaza. Quieren vecinos, no una inmobiliaria en la puerta.",
    facts: [
      "Frente 9,4 m · fondo 33,2 m, medidos",
      "Patio norte de 86 m²",
      "Sin hipotecas ni prohibiciones al 2 de septiembre de 2026",
      "Plan regulador: zona de vivienda, no de conjuntos",
    ],
    agente: "laura-silva",
  },
  {
    slug: "isidora",
    folio: "H-029",
    name: "Isidora 14",
    type: "departamento",
    comuna: "Las Condes",
    barrio: "El Golf",
    barrioSlug: "el-golf",
    status: "disponible",
    uf: 13800,
    m2: 95,
    terraza: 7,
    piso: 14,
    pisosEdificio: 21,
    dormitorios: 2,
    banos: 2,
    estacionamientos: 2,
    bodega: true,
    orientacion: "N",
    orientacionLabel: "Norte — cordillera",
    solInvierno: 4.9,
    solVerano: 8.0,
    visitaIdeal: "10:00 a 11:30",
    ano: 2016,
    gastosComunes: 11.4,
    contribuciones: "$401.000 el trimestre",
    dfl2: false,
    metro: "El Golf · 6 min",
    cafe: "Café de Isidora con Palacio · 4 min",
    coords: "33°25′ S · 70°35′ W",
    cover: "/images/isidora.jpg",
    gallery: [
      {
        src: "/images/isidora.jpg",
        alt: "Torre de piedra clara en El Golf, con la cordillera al fondo",
      },
      {
        src: "/images/isidora-int.jpg",
        alt: "Estar blanco con ventanal norte y los Andes nevados",
      },
      {
        src: "/images/suecia-int.jpg",
        alt: "Comedor junto al vidrio, luz de mañana",
      },
    ],
    lede: "Noventa y cinco metros en el piso 14. El norte es la cordillera, no el edificio de al lado. El Golf, de este lado de Isidora.",
    body: [
      "Hay departamentos en El Golf que miran a otra torre y se venden como «sector El Golf». Este mira al norte y al macizo. Piso 14 de 21: lo suficientemente alto para que el Plomo entre en el living, no tanto como para vivir en un hall de hotel.",
      "Dos dormitorios en suite, cocina cerrada con pasaplatos, terraza de 7 m² que se usa. Dos estacionamientos juntos en −3. Los gastos comunes son los de un edificio de este tipo: se informan, no se esconden detrás del precio en UF.",
      "No es un penthouse y no se presenta como uno. Es una planta clara, bien resuelta, en una calle que se camina.",
    ],
    porQue:
      "Cambio de comuna, no de país. El dueño compra más cerca del colegio de los niños, en Vitacura.",
    facts: [
      "Vista norte despejada: no hay anteproyecto de torre al frente en DOM",
      "Gastos comunes incluyen agua caliente y calefacción",
      "Bodega de 6 m² en el mismo piso de estacionamientos",
      "Administración Welsch, sin deudas del edificio",
    ],
    agente: "joaquin-matte",
  },
  {
    slug: "lastarria",
    folio: "H-027",
    name: "Lastarria 2",
    type: "departamento",
    comuna: "Santiago",
    barrio: "Lastarria",
    barrioSlug: "lastarria",
    status: "disponible",
    uf: 5420,
    m2: 52,
    piso: 2,
    pisosEdificio: 3,
    dormitorios: 1,
    banos: 1,
    estacionamientos: 0,
    bodega: false,
    orientacion: "NE",
    orientacionLabel: "Nororiente",
    solInvierno: 3.2,
    solVerano: 5.8,
    visitaIdeal: "9:30 a 11:00",
    ano: 1928,
    gastosComunes: 2.1,
    contribuciones: "$71.000 el trimestre",
    dfl2: true,
    metro: "Universidad Católica · 6 min",
    cafe: "Café del Museo · 3 min",
    coords: "33°26′ S · 70°38′ W",
    cover: "/images/lastarria.jpg",
    gallery: [
      {
        src: "/images/lastarria.jpg",
        alt: "Fachada de dos pisos en Lastarria, postigos verdes y puerta de madera",
      },
      {
        src: "/images/lastarria-int.jpg",
        alt: "Pieza de cielos altos con sol de mañana sobre el piso de madera",
      },
      {
        src: "/images/italia-int.jpg",
        alt: "Vanos altos y un sillón al sol",
      },
    ],
    lede: "Cincuenta y dos metros, un dormitorio, cielos que no se vuelven a hacer. El nororiente entra hasta las 11:40. No es un norte puro: lo decimos aquí.",
    body: [
      "Lastarria se vende como postal. Esta planta no es un loft de revista: es un departamento de 1928, un dormitorio, cocina al patio de luz. El vano principal mira al nororiente. En invierno el sol entra hasta las 11:40. Si el encargo es «norte todo el día», esta ficha no calza — y por eso está escrita así.",
      "Piso 2 de 3, sin ascensor. El edificio tiene seis unidades y una copropiedad que se junta de verdad. DFL2. No hay estacionamiento; el barrio se camina o se usa el metro.",
      "Sirve para quien vive en el centro y no quiere un estudio de 28 m² con un ventanal al sur. No sirve para inversionista de fines de semana: el reglamento lo prohíbe y esta mesa tampoco lo presenta para eso.",
    ],
    porQue:
      "El dueño se casa y se muda a Ñuñoa. Quiere una venta a alguien que viva, no a un fondo.",
    facts: [
      "Nororiente, no norte: 3,2 horas de sol en el solsticio de invierno",
      "Sin estacionamiento",
      "Prohibido hospedaje transitorio en el reglamento",
      "El patio de luz no es de uso exclusivo",
    ],
    agente: "diego-urrejola",
  },
  {
    slug: "locontador",
    folio: "H-022",
    name: "Casa Lo Contador",
    type: "casa",
    comuna: "Providencia",
    barrio: "Lo Contador",
    barrioSlug: "pedro-de-valdivia-norte",
    status: "reservado",
    uf: 9850,
    m2: 168,
    terreno: 240,
    dormitorios: 3,
    banos: 2,
    estacionamientos: 1,
    bodega: false,
    orientacion: "N",
    orientacionLabel: "Norte — corredor",
    solInvierno: 4.7,
    solVerano: 7.9,
    visitaIdeal: "11:00 a 12:30",
    ano: 1912,
    gastosComunes: 0,
    contribuciones: "$154.000 el trimestre",
    dfl2: true,
    metro: "Salvador · 18 min · bus 2N en la esquina",
    cafe: "Café de la Escuela de Arquitectura · 7 min",
    coords: "33°25′ S · 70°38′ W",
    cover: "/images/locontador.jpg",
    gallery: [
      {
        src: "/images/locontador.jpg",
        alt: "Casa de adobe y teja en Lo Contador, corredor norte con naranjo",
      },
      {
        src: "/images/patio.jpg",
        alt: "Patio interior con limonero y sol",
      },
      {
        src: "/images/cocina.jpg",
        alt: "Cocina clara con sol de mañana",
      },
    ],
    lede: "Adobe, teja, un corredor que mira al norte. Lo Contador todavía es un pueblo pegado a Providencia. Reservada: queda en la lista para quien pregunte.",
    body: [
      "Una casa de 1912 en la calle que le da el nombre al barrio. El corredor da al norte; el naranjo está plantado donde tiene que estar. Los muros de adobe se leyeron con un calculista antes de publicarla: no es un proyecto de demolición disfrazado de «casona con potencial».",
      "Ciento sesenta y ocho metros, tres dormitorios, un patio que no es residual. El plan regulador de Providencia protege la trama. Quien compre para levantar un edificio de seis pisos va a perder el tiempo — y esta mesa no toma ese encargo.",
      "DFL2. Un auto entra al costado. La Escuela de Arquitectura de la UC queda a siete minutos: el barrio tiene estudiantes, no nightlife de Bellavista.",
    ],
    porQue:
      "Reservada por un encargo en curso. Si se cae, vuelve a lista con aviso a quienes escribieron.",
    facts: [
      "Inmueble de conservación, no monumento",
      "Adobe revisado, informe de 2025 disponible en la visita",
      "Sitio de 240 m², frente 8,1 m",
      "No se presenta a inmobiliarias ni a fondos",
    ],
    agente: "diego-urrejola",
  },
];

export const team: Person[] = [
  {
    slug: "amalia-riesco",
    name: "Amalia Riesco",
    role: "Socia",
    beat: "Criterio y lista",
    image: "/images/amalia.jpg",
    email: "amalia@helio.cl",
    phone: "+56 9 7762 1088",
    bio: [
      "Fundó HELIO en 2018, después de ocho años en una corredora que publicaba de todo. El filtro del norte no es un eslogan: es la forma de no volver a vender un departamento que en junio se enciende a las 17:00.",
      "Toma los encargos de Pedro de Valdivia Norte y de las plantas que no calzan en una ficha corta. Si una propiedad no entra a la lista, la llama ella.",
    ],
  },
  {
    slug: "joaquin-matte",
    name: "Joaquín Matte",
    role: "Corredor",
    beat: "Providencia oriente y Las Condes",
    image: "/images/joaquin.jpg",
    email: "joaquin@helio.cl",
    phone: "+56 9 7614 2203",
    bio: [
      "Suecia, El Golf, Isidora, Nueva Costanera baja. Joaquín lee un edificio por el retiro, no por el hall. Antes de fotografiar, pide el plano de copropiedad y marca el norte en el living.",
      "Trabaja con crédito hipotecario de verdad: no promete un pie que el banco no va a tomar.",
    ],
  },
  {
    slug: "laura-silva",
    name: "Laura Silva",
    role: "Corredora",
    beat: "Ñuñoa y Barrio Italia",
    image: "/images/laura.jpg",
    email: "laura@helio.cl",
    phone: "+56 9 7988 4412",
    bio: [
      "Ñuñoa de casas, Italia de casonas, los bordes donde Providencia todavía no se come la cuadra. Laura mide el patio con huincha, no con el ojo del portal.",
      "Si el encargo es una casa en sitio, la visita es al mediodía. El limonero no miente.",
    ],
  },
  {
    slug: "diego-urrejola",
    name: "Diego Urrejola",
    role: "Luz y plano",
    beat: "Orientación, títulos, DOM",
    image: "/images/diego.jpg",
    email: "diego@helio.cl",
    phone: "+56 9 7540 1190",
    bio: [
      "Arquitecto de formación, corredor por oficio. Diego no vende: comprueba. Cada ficha de HELIO tiene una hora de sol de invierno medida en terreno, no estimada por la app del teléfono.",
      "Lee el plan regulador, el rol, las prohibiciones y el reglamento de copropiedad antes de que la planta llegue a la web.",
    ],
  },
];

export const barrios: Barrio[] = [
  {
    slug: "pedro-de-valdivia-norte",
    n: "01",
    name: "Pedro de Valdivia Norte",
    comuna: "Providencia",
    kicker: "El cerro hace de muralla",
    lead: "El río abajo, el parque al medio, la cordillera cuando se deja. Aquí el norte no es un lujo: es la ladera.",
    image: "/images/conquistadores.jpg",
    body: [
      "Pedro de Valdivia Norte no se parece al resto de Providencia. El tráfico se queda al otro lado del Mapocho. Los edificios son más bajos, los árboles más altos, y el sol de mañana entra sin pedirle permiso a una torre de veinte pisos.",
      "HELIO trabaja Los Conquistadores, El Cerro, Santa María y las calles que suben al Parque Metropolitano. Un departamento aquí se compra por la planta y por lo que no se construye al frente.",
    ],
    notes: [
      {
        title: "Caminar",
        text: "Metro Pedro de Valdivia a 8–14 min, según la cuadra. El cerro se sube; no se usa de postal.",
      },
      {
        title: "La luz",
        text: "La ladera mira al norte y al valle. Un piso bajo con árboles densos puede perder el invierno: lo medimos.",
      },
      {
        title: "El riesgo",
        text: "No todo lo que dice «vista al cerro» recibe sol. Hay plantas que miran al sur del parque y se venden como las otras.",
      },
    ],
  },
  {
    slug: "ines-de-suarez",
    n: "02",
    name: "Inés de Suárez",
    comuna: "Providencia",
    kicker: "La plaza como antejardín",
    lead: "Suecia, El Cerro bajo, la plaza. Edificios de los sesenta y plantas que todavía miden metros de verdad.",
    image: "/images/suarez.jpg",
    body: [
      "La plaza Inés de Suárez organiza el barrio. Los edificios que la miran tienen una condición que no se compra en una torre nueva: el frente no se va a llenar de retail. El norte, aquí, es césped y tipas.",
      "Trabajamos también Suecia y las calles entre Manuel Montt y Pedro de Valdivia, donde el edificio de nueve pisos todavía es un vecino, no un horizonte.",
    ],
    notes: [
      {
        title: "Caminar",
        text: "Los Leones y Manuel Montt. La plaza se usa: perros, feria de domingo, niños a las seis.",
      },
      {
        title: "La luz",
        text: "Un quinto piso al norte de la plaza rinde más que un décimo mirando a otro décimo.",
      },
      {
        title: "El riesgo",
        text: "Gastos comunes de edificios antiguos bien llevados. Preguntamos la deuda, no el «ambiente».",
      },
    ],
  },
  {
    slug: "barrio-italia",
    n: "03",
    name: "Barrio Italia",
    comuna: "Providencia / Ñuñoa",
    kicker: "Casonas, no vitrinas",
    lead: "Caupolicán, Italia, Condell. Vanos altos, copropiedades chicas, un nororiente que hay que ir a ver a las diez.",
    image: "/images/italia.jpg",
    body: [
      "Italia se volvió un destino. HELIO no vende el destino: vende la planta que todavía se vive. Casonas de los treinta partidas en tres o cuatro departamentos, cielos de más de tres metros, un patio que no es de nadie y por eso es de todos.",
      "El filtro es el mismo. Si el vano principal mira al sur, por más ladrillo y más jacarandá, no entra.",
    ],
    notes: [
      {
        title: "Caminar",
        text: "Irarrázaval y Santa Isabel. El barrio se recorre a pie; el auto es un problema, no un dato.",
      },
      {
        title: "La luz",
        text: "Muchas plantas son nororiente, no norte. La ficha lo dice. La visita, a la mañana.",
      },
      {
        title: "El riesgo",
        text: "Airbnb y local comercial. Leemos el reglamento antes de agendar.",
      },
    ],
  },
  {
    slug: "nunoa",
    n: "04",
    name: "Ñuñoa",
    comuna: "Ñuñoa",
    kicker: "El patio es el programa",
    lead: "Dublé, Grecia baja, Plaza Ñuñoa. Casas en sitio donde el norte se mide en el limonero, no en el living.",
    image: "/images/nunoa.jpg",
    body: [
      "Ñuñoa todavía tiene cuadras de un piso. Esa es la condición que buscamos: un solar donde el patio mira al norte y el vecino no es una torre. Dublé Almeyda, Campo de Deportes, las calles entre Irarrázaval y Grecia.",
      "Una casa aquí no se presenta como «terreno». Se presenta como casa. Si el encargo es densificar, hay otras mesas.",
    ],
    notes: [
      {
        title: "Caminar",
        text: "Metro Ñuñoa y Plaza Ñuñoa. La feria de Dublé es un dato, no un souvenir.",
      },
      {
        title: "La luz",
        text: "El patio norte en invierno es la prueba. Visitamos entre 11:00 y 13:00.",
      },
      {
        title: "El riesgo",
        text: "Plan regulador y constructibilidad residual. Lo leemos antes de la foto.",
      },
    ],
  },
  {
    slug: "el-golf",
    n: "05",
    name: "El Golf",
    comuna: "Las Condes",
    kicker: "La cordillera, no el hall",
    lead: "Isidora, El Golf, el borde que todavía mira al macizo. Plantas claras en edificios que no necesitan presentarse.",
    image: "/images/isidora.jpg",
    body: [
      "El Golf se vende solo. Por eso HELIO publica poco. Un departamento entra si el norte está despejado — la cordillera, no la torre de enfrente — y si los gastos comunes se pueden decir en voz alta.",
      "No tomamos penthouses de presentación privada ni mandatos que no se puedan escribir. Isidora se camina. El metro está. El resto es la planta.",
    ],
    notes: [
      {
        title: "Caminar",
        text: "Metro El Golf y Tobalaba. La vereda de Isidora es el barrio.",
      },
      {
        title: "La luz",
        text: "Piso alto no es sinónimo de norte. Hay plantas al poniente que se tuestan a las 16:00.",
      },
      {
        title: "El riesgo",
        text: "Gastos comunes de edificio full service. Van en la ficha, en UF, todos los meses.",
      },
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((item) => item.slug === slug);
}

export function getPerson(slug: string) {
  return team.find((item) => item.slug === slug);
}

export function getBarrio(slug: string) {
  return barrios.find((item) => item.slug === slug);
}

export function similarTo(slug: string, count = 3) {
  const current = getProperty(slug);
  if (!current) return [];
  return properties
    .filter((item) => item.slug !== slug)
    .sort((a, b) => {
      const sameBarrio =
        Number(b.barrioSlug === current.barrioSlug) -
        Number(a.barrioSlug === current.barrioSlug);
      if (sameBarrio) return sameBarrio;
      return Math.abs(a.uf - current.uf) - Math.abs(b.uf - current.uf);
    })
    .slice(0, count);
}

export function specList(p: Property) {
  return [
    { label: "Valor", value: `UF ${formatUf(p.uf)}` },
    { label: "Útiles", value: formatM2(p.m2) },
    { label: "Orientación", value: p.orientacionLabel },
    { label: "Sol en invierno", value: `${p.solInvierno.toString().replace(".", ",")} h` },
    {
      label: p.type === "casa" ? "Terreno" : "Piso",
      value: p.terreno
        ? formatM2(p.terreno)
        : p.piso
          ? `${p.piso} de ${p.pisosEdificio}`
          : "—",
    },
    { label: "Dormitorios", value: String(p.dormitorios) },
    { label: "Baños", value: String(p.banos) },
    {
      label: "Estacionamiento",
      value: p.estacionamientos ? String(p.estacionamientos) : "No",
    },
    {
      label: "Gastos comunes",
      value: p.gastosComunes ? `UF ${p.gastosComunes.toString().replace(".", ",")}` : "No aplica",
    },
    { label: "UF / m²", value: formatUf(ufPerM2(p.uf, p.m2)) },
    { label: "Visita de sol", value: p.visitaIdeal },
    { label: "Año", value: String(p.ano) },
  ];
}

export const comunas = [...new Set(properties.map((p) => p.comuna))];
