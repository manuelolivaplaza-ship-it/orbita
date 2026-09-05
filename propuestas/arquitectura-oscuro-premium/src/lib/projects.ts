export type ProjectCategory =
  | "Residencial"
  | "Productivo"
  | "Cultural"
  | "Educativo";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  location: string;
  comuna: string;
  region: string;
  year: number;
  category: ProjectCategory;
  area: string;
  status: "Construido" | "En obra" | "Proyecto";
  client: string;
  featured: boolean;
  lat: number;
  lng: number;
  coords: string;
  cover: string;
  images: ProjectImage[];
  excerpt: string;
  lead: string;
  body: string[];
  facts: { label: string; value: string }[];
};

export const categories: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Residencial",
  "Productivo",
  "Cultural",
  "Educativo",
];

export const projects: Project[] = [
  {
    slug: "casa-ladera",
    code: "ORL-24-07",
    title: "Casa Ladera",
    location: "Lo Barnechea, Santiago",
    comuna: "Lo Barnechea",
    region: "Región Metropolitana",
    year: 2024,
    category: "Residencial",
    area: "420 m²",
    status: "Construido",
    client: "Privado",
    featured: true,
    lat: -33.351,
    lng: -70.508,
    coords: "33°21′ S · 70°30′ W",
    cover: "/images/casa-ladera.jpg",
    images: [
      {
        src: "/images/casa-ladera.jpg",
        alt: "Casa de hormigón en voladizo sobre la precordillera de Santiago al anochecer",
        caption:
          "El volumen se despega de la ladera. Abajo, el valle. Arriba, el cobre de la chimenea.",
        wide: true,
      },
      {
        src: "/images/casa-ladera-int.jpg",
        alt: "Estar con mesa de madera y el valle de Santiago iluminado",
        caption:
          "El estar mira al poniente. La luz de la tarde entra baja; de noche, la ciudad hace de lámpara.",
      },
      {
        src: "/images/materia.jpg",
        alt: "Encuentro entre hormigón tabla y cobre oxidado",
        caption:
          "Hormigón tabla y cobre. El encuentro es el detalle: una sombra, dos materias, el tiempo.",
      },
    ],
    excerpt:
      "Un volumen de hormigón y cobre en voladizo sobre la precordillera de Santiago.",
    lead: "En Lo Barnechea la ladera es seca, el poniente es duro y el valle no es un fondo: es la medida de todo. Casa Ladera se despega del suelo para no taparlo.",
    body: [
      "El encargo pedía una casa para habitar todo el año, con un programa claro: estar, cocina, tres dormitorios y un estudio. El predio —una ladera de 28 grados sobre el valle de Santiago— pedía otra cosa: no competir con la cordillera, no cortar la pendiente, no tapar el horizonte.",
      "Resolvimos un volumen horizontal de hormigón visto, en voladizo sobre dos pilas. Debajo queda la ladera, el aire y el paso del agua cuando llueve. Arriba, una secuencia de recintos que se abren al poniente y se cierran al sur, donde el viento de la cordillera es más seco.",
      "La chimenea de cobre atraviesa el techo como una pieza geológica. El hormigón se encofró con tablas: la veta de la madera queda impresa en el muro. Con los años, el sol de Santiago va a pulir esa superficie y el cobre va a ponerse verde. Eso también es el proyecto.",
    ],
    facts: [
      { label: "Superficie", value: "420 m²" },
      { label: "Terreno", value: "1.840 m²" },
      { label: "Pendiente", value: "28°" },
      { label: "Estructura", value: "Hormigón armado" },
      { label: "Terminaciones", value: "Hormigón tabla, cobre, raulí" },
      { label: "Cota", value: "1.120 m s. n. m." },
    ],
  },
  {
    slug: "casa-matanzas",
    code: "ORL-23-11",
    title: "Casa Matanzas",
    location: "Matanzas, Navidad",
    comuna: "Navidad",
    region: "Región de O'Higgins",
    year: 2023,
    category: "Residencial",
    area: "186 m²",
    status: "Construido",
    client: "Privado",
    featured: true,
    lat: -33.961,
    lng: -71.871,
    coords: "33°58′ S · 71°52′ W",
    cover: "/images/casa-matanzas.jpg",
    images: [
      {
        src: "/images/casa-matanzas.jpg",
        alt: "Casa de pino oscuro con alero largo sobre un acantilado en Matanzas",
        caption:
          "Un alero largo, pino quemado, el Pacífico. La casa se recuesta en el acantilado.",
        wide: true,
      },
      {
        src: "/images/casa-matanzas-int.jpg",
        alt: "Interior de madera mirando el océano al anochecer",
        caption:
          "Adentro, un solo recinto hacia el mar. El alero corta el poniente y deja la línea del horizonte.",
      },
    ],
    excerpt:
      "Pino quemado, un alero largo y el Pacífico recortado en Matanzas.",
    lead: "Casa Matanzas no mira el mar de frente. Lo enmarca. Sobre el acantilado, un alero convierte el horizonte en una habitación.",
    body: [
      "Matanzas pide menos de lo que suele darse. Pedimos un volumen bajo, de pino oregón carbonizado, que no compita con el cielo ni con la línea del océano. La casa se organiza en un solo recinto hacia barlovento, con dormitorios al este, donde el viento es más seco.",
      "El alero es el sistema: sombra, lluvia, salitre. La madera se dejó a la intemperie para que el Pacífico la termine. No hay pintura. Hay espesor, viento y un umbral que enseña a entrar despacio.",
      "El programa es mínimo a propósito. En la costa, lo justo es más generoso que lo grande. La casa cabe en un fin de semana y en un invierno entero.",
    ],
    facts: [
      { label: "Superficie", value: "186 m²" },
      { label: "Sistema", value: "Madera laminada" },
      { label: "Cerramiento", value: "Pino carbonizado" },
      { label: "Clima", value: "Costero, viento dominante" },
      { label: "Obra", value: "18 meses" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "bodega-apalta",
    code: "ORL-22-08",
    title: "Bodega Apalta",
    location: "Apalta, Santa Cruz",
    comuna: "Santa Cruz",
    region: "Región de O'Higgins",
    year: 2022,
    category: "Productivo",
    area: "2.180 m²",
    status: "Construido",
    client: "Viña Apalta",
    featured: true,
    lat: -34.604,
    lng: -71.268,
    coords: "34°36′ S · 71°16′ W",
    cover: "/images/bodega-apalta.jpg",
    images: [
      {
        src: "/images/bodega-apalta.jpg",
        alt: "Bodega de hormigón empotrada en la ladera de un viñedo en Apalta",
        caption:
          "Las bóvedas se incrustan en la ladera. El cobre del umbral mira las hileras.",
        wide: true,
      },
      {
        src: "/images/bodega-apalta-int.jpg",
        alt: "Sala de barricas con bóvedas de hormigón y una hendidura de luz",
        caption:
          "Abajo, la cueva: tierra, hormigón, temperatura estable. La luz es un corte, no una ventana.",
      },
    ],
    excerpt:
      "Una bodega enterrada en la ladera de Apalta: bóvedas, tierra y un umbral de cobre.",
    lead: "El vino pide oscuridad, masa y temperatura estable. El visitante pide horizonte. Bodega Apalta resuelve las dos cosas en un solo corte de terreno.",
    body: [
      "La planta de vinificación se entierra en la ladera norte del valle. Seis bóvedas de hormigón reciben la uva, fermentan y guardan. La tierra es el aislante. El hormigón es la cueva. El cobre del umbral es la única señal hacia el viñedo.",
      "Sobre ese corte, una terraza concentra la cata y una vista larga a las hileras. Quien trabaja abajo no ve el paisaje; quien llega a probarlo, lo tiene entero.",
      "El recorrido es una sección: se baja a la sombra y se sale a la luz. Esa es la arquitectura de una bodega, no un edificio con tanques adentro.",
    ],
    facts: [
      { label: "Superficie", value: "2.180 m²" },
      { label: "Capacidad", value: "240.000 L" },
      { label: "Cota", value: "280 m s. n. m." },
      { label: "Estructura", value: "Hormigón in situ" },
      { label: "Paisaje", value: "Viñedo Carmenere existente" },
      { label: "Año", value: "2022" },
    ],
  },
  {
    slug: "pabellon-mapocho",
    code: "ORL-21-04",
    title: "Pabellón Mapocho",
    location: "Parque Forestal, Santiago",
    comuna: "Santiago",
    region: "Región Metropolitana",
    year: 2021,
    category: "Cultural",
    area: "740 m²",
    status: "Construido",
    client: "Fundación Mapocho",
    featured: true,
    lat: -33.436,
    lng: -70.641,
    coords: "33°26′ S · 70°38′ W",
    cover: "/images/pabellon-mapocho.jpg",
    images: [
      {
        src: "/images/pabellon-mapocho.jpg",
        alt: "Pabellón de cobre y vidrio sobre el río Mapocho de noche",
        caption:
          "Un techo de cobre, un plinto de piedra, el Mapocho como sala.",
        wide: true,
      },
      {
        src: "/images/pabellon-mapocho-int.jpg",
        alt: "Sala de exposiciones con el skyline de Santiago al fondo",
        caption:
          "La sala es neutra. El río y la ciudad hacen de segunda obra.",
      },
    ],
    excerpt:
      "Un pabellón de arte sobre el Mapocho: techo de cobre, vidrio y un plinto de piedra.",
    lead: "Un espacio para el arte no debería competir con las obras. En el Forestal, tampoco debería competir con el río. El pabellón es un techo, un piso y el clima en el medio.",
    body: [
      "La Fundación pedía una sala de exposiciones temporales, un foyer y un pequeño auditorio. El predio es una lengua de piedra sobre el Mapocho, a la vista de la cordillera. Propusimos un plinto que continúa el borde del río, y un techo de cobre que vuela sobre el agua.",
      "Entre ambos, vidrio. La sala se vacía de ornamentación. Las obras se cuelgan sobre un fondo claro; el horizonte de Santiago entra por el costado. Cuando no hay exposición, el edificio sigue siendo una pieza: un umbral entre ciudad y cauce.",
      "La estructura se calculó para sismo y para la crecida. El cobre se va a patinar. El edificio está pensado para envejecer a la vista, junto al río.",
    ],
    facts: [
      { label: "Superficie", value: "740 m²" },
      { label: "Programa", value: "Sala, foyer, auditorio" },
      { label: "Estructura", value: "Acero y losa de hormigón" },
      { label: "Cubierta", value: "Cobre" },
      { label: "Base", value: "Piedra del río" },
      { label: "Año", value: "2021" },
    ],
  },
  {
    slug: "casa-quebrada",
    code: "ORL-25-01",
    title: "Casa Quebrada",
    location: "Cerro Alegre, Valparaíso",
    comuna: "Valparaíso",
    region: "Región de Valparaíso",
    year: 2025,
    category: "Residencial",
    area: "164 m²",
    status: "Construido",
    client: "Privado",
    featured: false,
    lat: -33.043,
    lng: -71.628,
    coords: "33°02′ S · 71°38′ W",
    cover: "/images/casa-quebrada.jpg",
    images: [
      {
        src: "/images/casa-quebrada.jpg",
        alt: "Casa contemporánea de madera y hormigón inserta en un cerro de Valparaíso",
        caption:
          "Un lote estrecho entre casas de color. Lo nuevo no imita: se inserta.",
        wide: true,
      },
      {
        src: "/images/casa-quebrada-int.jpg",
        alt: "Interior alto de madera oscura con vista a la bahía",
        caption:
          "La casa se recorre en vertical. Cada piso es una cota distinta del cerro y del puerto.",
      },
    ],
    excerpt:
      "Una casa estrecha de madera y hormigón inserta en un cerro de Valparaíso.",
    lead: "En Valparaíso la calidad de una casa se mide por cómo toca el cerro. Casa Quebrada es un recinto vertical: cuatro cotas, una ventana al puerto.",
    body: [
      "El lote entre medianeras pedía privacidad sin renunciar a la bahía. Subimos. Una casa de hormigón y madera oscura se organiza en cuatro niveles: acceso, estar, dormitorios, terraza. Cada piso es un descanso en la pendiente.",
      "Hacia la calle, casi nada. Un portón, un umbral, un cambio de luz. La casa se revela de adentro hacia afuera, como las casas del cerro de las que este proyecto es, en el fondo, un pariente.",
      "El sismo y la humedad del puerto dictaron los nudos. La madera se ventiló. El hormigón se dejó visto. El color lo ponen los vecinos: nosotros pusimos sombra y un corte hacia el mar.",
    ],
    facts: [
      { label: "Superficie", value: "164 m²" },
      { label: "Lote", value: "6,2 × 18 m" },
      { label: "Material", value: "Hormigón, pino, acero" },
      { label: "Niveles", value: "4" },
      { label: "Pendiente", value: "Cerro Alegre" },
      { label: "Año", value: "2025" },
    ],
  },
  {
    slug: "refugio-petrohue",
    code: "ORL-23-02",
    title: "Refugio Petrohué",
    location: "Petrohué, Puerto Varas",
    comuna: "Puerto Varas",
    region: "Región de Los Lagos",
    year: 2023,
    category: "Residencial",
    area: "92 m²",
    status: "Construido",
    client: "Privado",
    featured: false,
    lat: -41.138,
    lng: -72.401,
    coords: "41°08′ S · 72°24′ W",
    cover: "/images/refugio-petrohue.jpg",
    images: [
      {
        src: "/images/refugio-petrohue.jpg",
        alt: "Cabaña de madera oscura y piedra volcánica frente al volcán Osorno",
        caption:
          "Un recinto de madera quemada y piedra, frente al Osorno.",
        wide: true,
      },
      {
        src: "/images/refugio-petrohue-int.jpg",
        alt: "Interior de madera con hogar de piedra y el volcán encuadrado en la ventana",
        caption:
          "Adentro, un solo recinto: fuego, lenga y la ventana al volcán.",
      },
    ],
    excerpt:
      "Una cabaña mínima de madera quemada y piedra volcánica, frente al Osorno.",
    lead: "El refugio no es una casa de fin de semana disfrazada. Es un recinto para el frío, la niebla y una ventana al volcán.",
    body: [
      "El predio mira el lago y, detrás, el Osorno. Pedimos un volumen compacto: cubierta de zinc a dos aguas, muros de madera quemada, zócalo de piedra volcánica. Nada que no pueda mantenerse en invierno.",
      "El interior es un solo espacio con entrepiso. El hogar de piedra es el centro. La ventana larga no se abre al paisaje como postal: lo recorta, lo acerca, lo deja quieto.",
      "Araucarias, niebla, agua. El edificio es pequeño a propósito. En el sur, lo justo es más generoso que lo grande.",
    ],
    facts: [
      { label: "Superficie", value: "92 m²" },
      { label: "Estructura", value: "Madera laminada" },
      { label: "Cerramiento", value: "Lenga carbonizada" },
      { label: "Base", value: "Piedra volcánica" },
      { label: "Clima", value: "Lacustre, nieve" },
      { label: "Año", value: "2023" },
    ],
  },
  {
    slug: "casa-tunquen",
    code: "ORL-24-03",
    title: "Casa Tunquén",
    location: "Tunquén, Algarrobo",
    comuna: "Algarrobo",
    region: "Región de Valparaíso",
    year: 2024,
    category: "Residencial",
    area: "248 m²",
    status: "Construido",
    client: "Privado",
    featured: false,
    lat: -33.278,
    lng: -71.648,
    coords: "33°17′ S · 71°39′ W",
    cover: "/images/casa-tunquen.jpg",
    images: [
      {
        src: "/images/casa-tunquen.jpg",
        alt: "Patio de tierra cruda con un árbol y niebla costera en Tunquén",
        caption:
          "El patio es el recinto principal. La camanchaca hace de techo.",
        wide: true,
      },
      {
        src: "/images/casa-tunquen-int.jpg",
        alt: "Interior de tapia mirando el patio con el árbol",
        caption:
          "Los muros de tapia regulan temperatura y absorben el sonido del mar.",
      },
    ],
    excerpt:
      "Tierra cruda, un patio y la camanchaca de Tunquén convertida en recinto.",
    lead: "En Tunquén la niebla es un material. Casa Tunquén es un patio de tapia que convierte la camanchaca en una habitación.",
    body: [
      "El predio mira el Pacífico a través de un matorral costero. En lugar de abrir la casa al horizonte, la cerramos alrededor de un patio: un olivo, piedra, tierra compactada. El mar se revela al fondo, cuando la niebla lo permite.",
      "La tapia se ejecutó con tierra del predio. El hormigón aparece solo donde hace falta: dinteles, bancos, el umbral. El resto es muro, patio y silencio.",
      "Dormitorios al este, estar al patio, techos bajos hacia las dunas. El proyecto es, sobre todo, una calibración de viento, niebla y sombra.",
    ],
    facts: [
      { label: "Superficie", value: "248 m²" },
      { label: "Sistema", value: "Tapia y hormigón" },
      { label: "Patio", value: "64 m²" },
      { label: "Clima", value: "Camanchaca costera" },
      { label: "Obra", value: "22 meses" },
      { label: "Año", value: "2024" },
    ],
  },
  {
    slug: "escuela-calama",
    code: "ORL-22-12",
    title: "Escuela Calama",
    location: "Calama",
    comuna: "Calama",
    region: "Región de Antofagasta",
    year: 2022,
    category: "Educativo",
    area: "3.240 m²",
    status: "Construido",
    client: "MINEDUC / Municipio de Calama",
    featured: false,
    lat: -22.456,
    lng: -68.924,
    coords: "22°27′ S · 68°55′ W",
    cover: "/images/escuela-calama.jpg",
    images: [
      {
        src: "/images/escuela-calama.jpg",
        alt: "Escuela de ladrillo perforado con patios en el desierto de Calama",
        caption:
          "Patios, celosías de ladrillo y el desierto como horizonte.",
        wide: true,
      },
      {
        src: "/images/escuela-calama-int.jpg",
        alt: "Galería de ladrillo perforado con sombra geométrica",
        caption:
          "La celosía dibuja la sombra. El claustro es el aula del clima.",
      },
    ],
    excerpt:
      "Una escuela de ladrillo en el desierto: patios, sombra y aulas que respiran.",
    lead: "Una escuela pública no es un diagrama de aulas. Es un clima. En Calama, eso significa sombra, ladrillo, patio y el sol más duro de Chile.",
    body: [
      "El predio mira el desierto. Organizamos el programa en crujías de ladrillo alrededor de tres patios de distinto tamaño: el de llegada, el de juego, el de los más chicos. Las aulas se abren a galerías cubiertas. El sol de la siesta no entra de frente.",
      "La celosía de ladrillo perforado es la fachada y el sistema de sombra. El hormigón aparece solo donde hace falta: losas, dinteles, bancos. El resto es muro, patio y un árbol que todavía está creciendo.",
      "Queríamos un edificio que un niño pueda entender: dónde está el cielo, dónde está la sombra, por dónde se entra. La claridad no es un estilo. Es una forma de respeto.",
    ],
    facts: [
      { label: "Superficie", value: "3.240 m²" },
      { label: "Alumnos", value: "420" },
      { label: "Aulas", value: "16" },
      { label: "Material", value: "Ladrillo, hormigón" },
      { label: "Patios", value: "3" },
      { label: "Año", value: "2022" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelated(slug: string, limit = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);
  const same = projects.filter(
    (project) => project.slug !== slug && project.category === current.category,
  );
  const rest = projects.filter(
    (project) => project.slug !== slug && project.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
}

export function getFeatured() {
  return projects.filter((project) => project.featured);
}
