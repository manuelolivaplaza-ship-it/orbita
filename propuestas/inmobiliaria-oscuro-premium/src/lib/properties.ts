import { formatM2, ufPerM2 } from "./utils";

export type PropertyType = "casa" | "departamento" | "fundo";
export type TerritoryId = "santiago" | "costa" | "lagos" | "valle";
export type ListingStatus = "mesa" | "presentacion";

export type Property = {
  slug: string;
  folio: string;
  name: string;
  type: PropertyType;
  territory: TerritoryId;
  comuna: string;
  barrio: string;
  status: ListingStatus;
  uf: number;
  m2: number;
  terreno?: number;
  dormitorios: number;
  banos: number;
  estacionamientos: number;
  orientacion: string;
  ano: number;
  coords: string;
  cover: string;
  gallery: { src: string; alt: string }[];
  kicker: string;
  lede: string;
  body: string[];
  featured?: boolean;
  agente: "amparo-valdes" | "vicente-rivas" | "magdalena-soto";
};

export const typeLabel: Record<PropertyType, string> = {
  casa: "Casa",
  departamento: "Departamento",
  fundo: "Fundo",
};

export const statusLabel: Record<ListingStatus, string> = {
  mesa: "En mesa",
  presentacion: "Por presentación",
};

export const properties: Property[] = [
  {
    slug: "casa-lo-curro",
    folio: "M-041",
    name: "Casa Lo Curro",
    type: "casa",
    territory: "santiago",
    comuna: "Vitacura",
    barrio: "Lo Curro",
    status: "presentacion",
    uf: 28400,
    m2: 680,
    terreno: 2140,
    dormitorios: 5,
    banos: 5,
    estacionamientos: 4,
    orientacion: "Norte — cordillera",
    ano: 2022,
    coords: "33°22′ S · 70°33′ W",
    cover: "/images/lo-curro.jpg",
    gallery: [
      {
        src: "/images/lo-curro.jpg",
        alt: "Fachada de piedra y madera en Lo Curro, con la cordillera al fondo",
      },
      {
        src: "/images/lo-curro-int.jpg",
        alt: "Estar de doble altura con muro de vidrio hacia los Andes",
      },
      {
        src: "/images/hero.jpg",
        alt: "La casa al anochecer, terraza encendida contra el macizo",
      },
    ],
    kicker: "Vitacura · Lo Curro",
    lede: "Seis mil ochocientos metros de silencio sobre la ciudad. La ladera mira al Plomo; la casa, al norte.",
    body: [
      "La parcela cae hacia el valle. Eso, en Lo Curro, no es un dato: es el encargo. Quien vive aquí no quiere ver techos. Quiere nieve en julio y un viento que no trae avenida.",
      "La reforma de 2022 abre el estar a un muro de vidrio de once metros. Piso de piedra local, carpintería de raulí, cocina que no se esconde. Cinco dormitorios, todos con baño. El quinto, en un pabellón aparte, para quien llega de visita y se queda.",
      "Piscina de borde, quincho cerrado, huerta hacia el cerro. Contribuciones al día. Mandato exclusivo: la calle se entrega en la presentación.",
    ],
    featured: true,
    agente: "amparo-valdes",
  },
  {
    slug: "penthouse-el-golf",
    folio: "M-038",
    name: "Penthouse El Golf",
    type: "departamento",
    territory: "santiago",
    comuna: "Las Condes",
    barrio: "El Golf",
    status: "mesa",
    uf: 22800,
    m2: 312,
    dormitorios: 3,
    banos: 3,
    estacionamientos: 3,
    orientacion: "Norte — cordillera",
    ano: 2018,
    coords: "33°25′ S · 70°35′ W",
    cover: "/images/golf.jpg",
    gallery: [
      {
        src: "/images/golf.jpg",
        alt: "Terraza del penthouse en El Golf, Santiago al anochecer",
      },
      {
        src: "/images/golf-int.jpg",
        alt: "Estar del penthouse con vista a la cordillera",
      },
      {
        src: "/images/barrio-golf.jpg",
        alt: "El Golf al atardecer, torres y Andes al fondo de la calle",
      },
    ],
    kicker: "Las Condes · El Golf",
    lede: "Trescientos doce metros útiles y una terraza que mira el fin de Isidora. El Golf, de verdad: no el borde.",
    body: [
      "Piso 21. El estar corre de norte a oriente y termina en una terraza de 48 m² con fuego lineal. De día, la cordillera. De noche, la ciudad baja hacia el Mapocho y no molesta.",
      "Tres dormitorios en suite y un estudio que cierra. Carpintería a medida, cocina oculta, tres estacionamientos juntos en subterráneo −2. Gastos comunes serios; el edificio, también.",
      "Se entrega con bodega y un mueble que no se discute. Disponible para visita entre semana.",
    ],
    featured: true,
    agente: "amparo-valdes",
  },
  {
    slug: "casa-zapallar",
    folio: "M-027",
    name: "Casa Zapallar",
    type: "casa",
    territory: "costa",
    comuna: "Zapallar",
    barrio: "Ladera norte",
    status: "presentacion",
    uf: 34800,
    m2: 540,
    terreno: 3800,
    dormitorios: 4,
    banos: 4,
    estacionamientos: 3,
    orientacion: "Norte — océano",
    ano: 2016,
    coords: "32°33′ S · 71°27′ W",
    cover: "/images/zapallar.jpg",
    gallery: [
      {
        src: "/images/zapallar.jpg",
        alt: "Casa en la ladera de Zapallar sobre el Pacífico",
      },
      {
        src: "/images/zapallar-int.jpg",
        alt: "Estar hacia el océano, luz de niebla",
      },
      {
        src: "/images/barrio-costa.jpg",
        alt: "Costa de Zapallar, agua oscura y pino",
      },
    ],
    kicker: "Zapallar · ladera norte",
    lede: "No es una casa de enero. Es una casa de agosto, cuando la niebla entra y el pueblo cabe en un bolsillo.",
    body: [
      "Zapallar se divide entre quienes vienen seis semanas y quienes tienen la llave todo el año. Esta casa es lo segundo. Ladera norte, viento que no pega, acceso peatonal a caleta sin cruzar la costanera.",
      "Quinientos cuarenta metros en dos pabellones de madera y estuco. El estar mira el agua; los dormitorios, el pino. Cuatro suites. Un anexo para administración. Terreno de 3.800 m² que no se llena de césped importado: se deja el boldo.",
      "Mandato de familia. Sin letrero, sin portales, sin drones el domingo.",
    ],
    featured: true,
    agente: "vicente-rivas",
  },
  {
    slug: "depto-nueva-costanera",
    folio: "M-052",
    name: "Departamento Nueva Costanera",
    type: "departamento",
    territory: "santiago",
    comuna: "Vitacura",
    barrio: "Nueva Costanera",
    status: "mesa",
    uf: 12400,
    m2: 186,
    dormitorios: 3,
    banos: 3,
    estacionamientos: 2,
    orientacion: "Norte — cerros",
    ano: 2020,
    coords: "33°24′ S · 70°36′ W",
    cover: "/images/costanera.jpg",
    gallery: [
      {
        src: "/images/costanera.jpg",
        alt: "Estar del departamento en Nueva Costanera, Vitacura",
      },
      {
        src: "/images/costanera-vista.jpg",
        alt: "Ventanal hacia los cerros de Santiago al atardecer",
      },
      {
        src: "/images/barrio-vitacura.jpg",
        alt: "Nueva Costanera al anochecer",
      },
    ],
    kicker: "Vitacura · Nueva Costanera",
    lede: "Ciento ochenta y seis metros que caminan a todo. Los cerros al frente; el estudio, a dos cuadras.",
    body: [
      "Piso 14, orientación norte. El estar no tiene columna en el medio — detalle que en Vitacura se paga y no siempre se consigue. Tres dormitorios, el principal con walking closet y luz de mañana.",
      "Edificio de pocos departamentos por piso. Gastos comunes contenidos. Dos estacionamientos y bodega. El hall no pretende ser un hotel.",
      "Para quien trabaja en el oriente y no quiere jardín que no va a regar. Disponible esta semana.",
    ],
    agente: "amparo-valdes",
  },
  {
    slug: "fundo-santa-elena",
    folio: "M-019",
    name: "Fundo Santa Elena",
    type: "fundo",
    territory: "valle",
    comuna: "Santa Cruz",
    barrio: "Colchagua",
    status: "presentacion",
    uf: 42000,
    m2: 420,
    terreno: 140000,
    dormitorios: 5,
    banos: 5,
    estacionamientos: 6,
    orientacion: "Norte — viña",
    ano: 2011,
    coords: "34°38′ S · 71°22′ W",
    cover: "/images/colchagua.jpg",
    gallery: [
      {
        src: "/images/colchagua.jpg",
        alt: "Casa del fundo entre viñedos en el valle de Colchagua",
      },
      {
        src: "/images/colchagua-int.jpg",
        alt: "Interior de la casa patronal, tierra apisonada y vidrio",
      },
      {
        src: "/images/barrio-valle.jpg",
        alt: "Viña al atardecer en Colchagua",
      },
    ],
    kicker: "Colchagua · Santa Cruz",
    lede: "Catorce hectáreas de carmenère y una casa que no imita a Napa. El valle, en serio.",
    body: [
      "El fundo no es un hotel boutique ni una viña de revista. Es un campo que produce, con casa patronal de tierra apisonada y un pabellón de huéspedes que no se ve desde el camino.",
      "Ciento cuarenta mil metros de terreno. Viña en producción, agua inscrita, casa de 420 m² más bodega agrícola. Cinco dormitorios. El quincho cierra el patio de los parrones.",
      "Se presenta a family office o a quien ya tiene campo. No es un primer fundo.",
    ],
    agente: "magdalena-soto",
  },
  {
    slug: "casa-puerto-varas",
    folio: "M-033",
    name: "Casa Puerto Varas",
    type: "casa",
    territory: "lagos",
    comuna: "Puerto Varas",
    barrio: "Orilla lago",
    status: "mesa",
    uf: 21800,
    m2: 380,
    terreno: 2200,
    dormitorios: 4,
    banos: 4,
    estacionamientos: 3,
    orientacion: "Oriente — Osorno",
    ano: 2019,
    coords: "41°19′ S · 72°59′ W",
    cover: "/images/pvaras.jpg",
    gallery: [
      {
        src: "/images/pvaras.jpg",
        alt: "Casa de madera negra frente al lago Llanquihue y el volcán Osorno",
      },
      {
        src: "/images/pvaras-int.jpg",
        alt: "Estar hacia el lago, luz del sur",
      },
      {
        src: "/images/barrio-lagos.jpg",
        alt: "Lago Llanquihue y volcán Osorno",
      },
    ],
    kicker: "Puerto Varas · orilla lago",
    lede: "El Osorno al frente, todos los días. Madera negra, techo que aguanta el agua, un lago que no se negocia.",
    body: [
      "La parcela toca el lago sin servidumbre ajena. Eso, en Puerto Varas, es cada vez más raro. La casa se recuesta al norte del lote para dejar el cono del volcán entero en el estar.",
      "Trescientos ochenta metros, cuatro suites, un estudio que mira el agua. Calefacción por losa. Revestimiento de mañío. El invierno se vive adentro, que es como se vive el sur.",
      "A doce minutos de la plaza. Sin Airbnb en la escritura: el mandante pide uso residencial.",
    ],
    agente: "vicente-rivas",
  },
  {
    slug: "casa-la-dehesa",
    folio: "M-047",
    name: "Casa La Dehesa",
    type: "casa",
    territory: "santiago",
    comuna: "Lo Barnechea",
    barrio: "La Dehesa",
    status: "mesa",
    uf: 14900,
    m2: 410,
    terreno: 1250,
    dormitorios: 4,
    banos: 4,
    estacionamientos: 3,
    orientacion: "Norte — patio",
    ano: 2015,
    coords: "33°21′ S · 70°31′ W",
    cover: "/images/dehesa.jpg",
    gallery: [
      {
        src: "/images/dehesa.jpg",
        alt: "Casa contemporánea en La Dehesa, patio con espejo de agua",
      },
      {
        src: "/images/dehesa-int.jpg",
        alt: "Patio interior y estar hacia el norte",
      },
      {
        src: "/images/lo-curro.jpg",
        alt: "Ladera del oriente de Santiago al atardecer",
      },
    ],
    kicker: "Lo Barnechea · La Dehesa",
    lede: "Cuatro dormitorios, patio norte, colegio a seis minutos. La Dehesa sin el teatro de la Dehesa.",
    body: [
      "Volúmenes blancos y un patio que no se ve desde la calle. El estar abre al norte; los dormitorios, al cerro. Cuatrocientos diez metros que una familia usa de verdad: cocina grande, loggia, pieza de servicio con baño.",
      "Terreno de 1.250 m², piscina, quincho. Estacionamientos cubiertos. Condominio de pocas casas, acceso controlado sin exagerar.",
      "En mesa. Primera visita entre semana, para no mezclar con el tráfico del colegio.",
    ],
    agente: "amparo-valdes",
  },
  {
    slug: "casa-cachagua",
    folio: "M-044",
    name: "Casa Cachagua",
    type: "casa",
    territory: "costa",
    comuna: "Zapallar",
    barrio: "Cachagua",
    status: "mesa",
    uf: 16400,
    m2: 290,
    terreno: 1800,
    dormitorios: 3,
    banos: 3,
    estacionamientos: 2,
    orientacion: "Poniente — mar",
    ano: 2008,
    coords: "32°35′ S · 71°26′ W",
    cover: "/images/cachagua.jpg",
    gallery: [
      {
        src: "/images/cachagua.jpg",
        alt: "Casa de cedro entre pinos en Cachagua, sobre el Pacífico",
      },
      {
        src: "/images/cachagua-int.jpg",
        alt: "Interior hacia el mar, lino y madera",
      },
      {
        src: "/images/zapallar.jpg",
        alt: "Costa de Zapallar y Cachagua",
      },
    ],
    kicker: "Cachagua · entre pinos",
    lede: "Más arena que Zapallar, menos vitrina. Tres dormitorios y un sendero que baja a la playa.",
    body: [
      "Cachagua todavía se camina. Esta casa está a cuatro minutos a pie de la arena, entre pinos que no se tocan. Cedro gris, techos bajos, un estar que se abre al poniente cuando el sol cae sobre el agua.",
      "Doscientos noventa metros. Tres suites. Un loft para huéspedes. El terreno de 1.800 m² se deja con undergrowth nativo; no hay césped de revista.",
      "Bien para quien ya tiene Santiago y quiere la llave de agosto, no solo de año nuevo.",
    ],
    agente: "vicente-rivas",
  },
];

export const territories = [
  {
    slug: "santiago",
    name: "Santiago oriente",
    coords: "33°24′ S",
    kicker: "Vitacura · Las Condes · Lo Barnechea",
    lede: "La ladera, el Golf, la Dehesa. Donde el silencio se mide en metros de retiro y en orientación norte.",
    body: [
      "El oriente no es un solo mercado. Lo Curro no es El Golf, y La Dehesa no es Nueva Costanera. Trabajamos las tres lecturas: la casa de ladera, el departamento que se camina, el condominio que llega al colegio sin cruzar la ciudad.",
      "Lo que repetimos: luz norte, no comprar el ruido de la avenida, leer el plano regulador antes que el living. La plusvalía aquí no es un eslogan; es una pendiente que ya se pagó.",
    ],
    image: "/images/barrio-vitacura.jpg",
    facts: [
      { label: "Comunas", value: "Vitacura, Las Condes, Lo Barnechea" },
      { label: "Luz", value: "Norte — la que importa" },
      { label: "Rango en mesa", value: "UF 12.400 — 28.400" },
    ],
  },
  {
    slug: "costa",
    name: "Costa",
    coords: "32°33′ S",
    kicker: "Zapallar · Cachagua",
    lede: "Agua oscura, pino, niebla de agosto. Casas que se usan, no que se publican en enero.",
    body: [
      "Zapallar y Cachagua no son Reñaca. El agua es más fría, el pueblo más chico, el mandato más discreto. Distinguimos la casa de temporada de la casa de año: la segunda tiene calefacción, despensa y un camino que no se lava en junio.",
      "No tomamos letreros frente al mar. Si el mandante quiere silencio, el silencio empieza en cómo se muestra.",
    ],
    image: "/images/barrio-costa.jpg",
    facts: [
      { label: "Pueblos", value: "Zapallar, Cachagua" },
      { label: "Mar", value: "Pacífico frío, ladera norte" },
      { label: "Rango en mesa", value: "UF 16.400 — 34.800" },
    ],
  },
  {
    slug: "lagos",
    name: "Lagos",
    coords: "41°19′ S",
    kicker: "Puerto Varas · Llanquihue",
    lede: "El volcán al frente. Madera que aguanta el agua. Un lago que no se negocia.",
    body: [
      "Puerto Varas se llenó de casas que parecen de revista y no cierran el invierno. Nosotros presentamos las que sí: losa radiante, parcela con orilla, escritura sin cláusula de arriendo transitorio si el mandante lo pide.",
      "El Osorno no es un fondo de pantalla. Es la prueba de que el lote mira a donde tiene que mirar.",
    ],
    image: "/images/barrio-lagos.jpg",
    facts: [
      { label: "Orilla", value: "Lago Llanquihue" },
      { label: "Invierno", value: "Se vive adentro" },
      { label: "Rango en mesa", value: "UF 21.800" },
    ],
  },
  {
    slug: "valle",
    name: "Valle",
    coords: "34°38′ S",
    kicker: "Colchagua · Santa Cruz",
    lede: "Campo que produce. Casa patronal, agua inscrita, viña que no es escenografía.",
    body: [
      "Colchagua atrae a quien ya tiene ciudad y quiere tierra con rendimiento. No presentamos parcelas de agrado disfrazadas de fundo. Pedimos roles, agua, y una casa que se pueda vivir un lunes de julio.",
      "El mandato típico llega de family office o de una familia que ya conoce el valle. El primero, no.",
    ],
    image: "/images/barrio-valle.jpg",
    facts: [
      { label: "Valle", value: "Colchagua" },
      { label: "Uso", value: "Campo productivo + casa" },
      { label: "Rango en mesa", value: "UF 42.000" },
    ],
  },
] as const;

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getTerritory(slug: string) {
  return territories.find((t) => t.slug === slug);
}

export function propertiesIn(territory: TerritoryId) {
  return properties.filter((p) => p.territory === territory);
}

export function similarTo(slug: string, n = 3) {
  const current = getProperty(slug);
  if (!current) return properties.slice(0, n);
  return properties
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const at = a.territory === current.territory ? 0 : 1;
      const bt = b.territory === current.territory ? 0 : 1;
      if (at !== bt) return at - bt;
      return Math.abs(a.uf - current.uf) - Math.abs(b.uf - current.uf);
    })
    .slice(0, n);
}

export function specList(p: Property) {
  const rows = [
    { label: "Tipo", value: typeLabel[p.type] },
    { label: "Comuna", value: p.comuna },
    { label: "Barrio", value: p.barrio },
    { label: "Útil", value: formatM2(p.m2) },
    {
      label: "Terreno",
      value: p.terreno
        ? p.terreno >= 10000
          ? `${(p.terreno / 10000).toLocaleString("es-CL", { maximumFractionDigits: 1 })} ha`
          : formatM2(p.terreno)
        : "—",
    },
    { label: "Dormitorios", value: String(p.dormitorios) },
    { label: "Baños", value: String(p.banos) },
    { label: "Estacionamientos", value: String(p.estacionamientos) },
    { label: "Orientación", value: p.orientacion },
    { label: "Año", value: String(p.ano) },
    { label: "UF / m² útil", value: `UF ${ufPerM2(p.uf, p.m2).toLocaleString("es-CL")}` },
    { label: "Estado", value: statusLabel[p.status] },
  ];
  return rows;
}
