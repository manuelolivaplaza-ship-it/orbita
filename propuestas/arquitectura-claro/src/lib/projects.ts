export type ProjectCategory =
  | "Residencial"
  | "Hospitalidad"
  | "Cultural"
  | "Productivo"
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
  country: string;
  year: number;
  category: ProjectCategory;
  area: string;
  status: "Construido" | "En obra" | "Proyecto";
  client: string;
  featured: boolean;
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
  "Hospitalidad",
  "Cultural",
  "Productivo",
  "Educativo",
];

export const projects: Project[] = [
  {
    slug: "casa-atuel",
    code: "VTA-24-03",
    title: "Casa Atuel",
    location: "Valle de Uco, Mendoza",
    country: "Argentina",
    year: 2024,
    category: "Residencial",
    area: "580 m²",
    status: "Construido",
    client: "Privado",
    featured: true,
    cover: "/images/casa-atuel.jpg",
    images: [
      {
        src: "/images/casa-atuel.jpg",
        alt: "Casa Atuel al atardecer, con los Andes al fondo",
        caption: "El volumen de hormigón se eleva sobre el viñedo para mirar la cordillera.",
        wide: true,
      },
      {
        src: "/images/casa-atuel-interior.jpg",
        alt: "Estar de doble altura con chimenea de piedra",
        caption: "El estar se orienta al oeste: la luz de la tarde entra baja y larga.",
      },
      {
        src: "/images/materia.jpg",
        alt: "Encuentro entre hormigón visto y piedra local",
        caption: "Hormigón tabla y piedra del lugar. La veta se lee en el encuentro.",
      },
    ],
    excerpt:
      "Una casa lineal de hormigón y piedra, elevada sobre el viñedo para mirar los Andes.",
    lead: "En el Valle de Uco la luz es dura, el viento es constante y la cordillera no es un fondo: es la medida de todo. Casa Atuel se posa sobre el suelo sin taparlo.",
    body: [
      "El encargo pedía una casa para habitar todo el año, con un programa claro: estar, cocina, cuatro dormitorios y un estudio. El terreno —una parcela de viñedo al pie de la cordillera— pedía otra cosa: no competir con el paisaje, no cortar las hileras, no tapar el horizonte.",
      "Resolvimos un volumen horizontal de hormigón visto, elevado sobre pilas de piedra local. Debajo queda sombra, aire y el paso de las filas. Arriba, una secuencia de recintos que se abren al oeste y se cierran al sur, donde el viento es más seco.",
      "La chimenea de piedra atraviesa el techo como una pieza geológica. El hormigón se encofró con tablas: la veta de la madera queda impresa en el muro. Con el tiempo, el sol de Mendoza va a pulir esa superficie. Eso también es el proyecto.",
    ],
    facts: [
      { label: "Superficie", value: "580 m²" },
      { label: "Terreno", value: "1,8 ha" },
      { label: "Estructura", value: "Hormigón armado" },
      { label: "Terminaciones", value: "Hormigón tabla, piedra, nogal" },
      { label: "Paisaje", value: "Viñedo existente" },
      { label: "Fotografía", value: "Estudio VETA" },
    ],
  },
  {
    slug: "casa-caleta",
    code: "VTA-23-11",
    title: "Casa Caleta",
    location: "José Ignacio, Maldonado",
    country: "Uruguay",
    year: 2023,
    category: "Residencial",
    area: "420 m²",
    status: "Construido",
    client: "Privado",
    featured: true,
    cover: "/images/casa-caleta-exterior.jpg",
    images: [
      {
        src: "/images/casa-caleta-exterior.jpg",
        alt: "Casa de tapia entre dunas, abierta al Atlántico",
        caption: "La casa se recuesta en las dunas y se abre al océano por un patio.",
        wide: true,
      },
      {
        src: "/images/casa-caleta.jpg",
        alt: "Patio de tierra cruda enmarcado hacia el mar",
        caption: "El patio es el umbral: tierra, madera, viento y horizonte.",
      },
      {
        src: "/images/casa-caleta-interior.jpg",
        alt: "Dormitorio con muros de tapia y vista al mar",
        caption: "Los muros de tapia regulan temperatura y absorben el sonido del mar.",
      },
    ],
    excerpt:
      "Tierra cruda, madera y un patio que recorta el Atlántico en José Ignacio.",
    lead: "Casa Caleta no mira el mar de frente. Lo enmarca. Entre las dunas, un patio de tapia convierte el horizonte en una habitación.",
    body: [
      "José Ignacio pide menos de lo que suele darse. Pedimos un volumen bajo, de tierra compactada, que no compita con el cielo ni con la línea del océano. La casa se organiza alrededor de un patio de gravilla y pastos, abierto a barlovento.",
      "La tapia se ejecutó con tierra del predio. La madera es de demolición, recuperada y dejada a la intemperie para que el salitre la termine. No hay pintura. Hay espesor, sombra y un umbral que enseña a entrar despacio.",
      "Dormitorios al este, estar al oeste, techos bajos hacia las dunas y una única abertura grande hacia el agua. El proyecto es, sobre todo, una calibración de viento y luz.",
    ],
    facts: [
      { label: "Superficie", value: "420 m²" },
      { label: "Sistema", value: "Tapia y madera" },
      { label: "Orientación", value: "Patio a este-sureste" },
      { label: "Clima", value: "Atlántico, viento dominante" },
      { label: "Obra", value: "24 meses" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "bodega-altura",
    code: "VTA-22-08",
    title: "Bodega Altura",
    location: "Tunuyán, Mendoza",
    country: "Argentina",
    year: 2022,
    category: "Productivo",
    area: "2.400 m²",
    status: "Construido",
    client: "Bodega Altura",
    featured: true,
    cover: "/images/bodega-altura.jpg",
    images: [
      {
        src: "/images/bodega-altura.jpg",
        alt: "Bodega empotrada en la ladera con bóvedas de hormigón",
        caption: "Las bóvedas se incrustan en la ladera; arriba, una terraza que mira la cordillera.",
        wide: true,
      },
      {
        src: "/images/bodega-altura-interior.jpg",
        alt: "Sala de cata con barricas y vista a los viñedos",
        caption: "La sala de cata alinea la mesa, las barricas y el viñedo en un solo eje.",
      },
    ],
    excerpt:
      "Una bodega enterrada en la ladera: bóvedas de hormigón, sombra y una terraza hacia los Andes.",
    lead: "El vino pide oscuridad, masa y temperatura estable. El visitante pide horizonte. Bodega Altura resuelve las dos cosas en un solo corte de terreno.",
    body: [
      "La planta de vinificación se entierra en la ladera norte. Seis bóvedas de hormigón reciben la uva, fermentan y guardan. La tierra es el aislante. El hormigón es la cueva.",
      "Sobre ese corte, un volumen en voladizo concentra la cata, las oficinas y una terraza que se asoma al valle. Quien trabaja abajo no ve el paisaje; quien llega a probarlo, lo tiene entero.",
      "El recorrido es una sección: se baja a la sombra y se sale a la luz. Esa es la arquitectura de una bodega, no un edificio con tanques adentro.",
    ],
    facts: [
      { label: "Superficie", value: "2.400 m²" },
      { label: "Capacidad", value: "280.000 L" },
      { label: "Cota", value: "1.280 m s. n. m." },
      { label: "Estructura", value: "Hormigón in situ" },
      { label: "Paisaje", value: "Viñedo Malbec existente" },
      { label: "Año", value: "2022" },
    ],
  },
  {
    slug: "pabellon-del-este",
    code: "VTA-21-04",
    title: "Pabellón del Este",
    location: "Punta del Este, Maldonado",
    country: "Uruguay",
    year: 2021,
    category: "Cultural",
    area: "890 m²",
    status: "Construido",
    client: "Fundación del Este",
    featured: true,
    cover: "/images/pabellon-este.jpg",
    images: [
      {
        src: "/images/pabellon-este.jpg",
        alt: "Pabellón de hormigón y vidrio sobre un plinto de piedra en el mar",
        caption: "Un techo de hormigón, un plinto de piedra, el Atlántico como sala.",
        wide: true,
      },
      {
        src: "/images/pabellon-este-noche.jpg",
        alt: "El pabellón iluminado al anochecer sobre la costa",
        caption: "De noche el pabellón es un faro bajo: luz cálida sobre el agua.",
      },
      {
        src: "/images/pabellon-este-interior.jpg",
        alt: "Sala de exposiciones con el océano al fondo",
        caption: "La sala es neutra. El mar hace de segunda obra.",
      },
    ],
    excerpt:
      "Un pabellón de arte sobre la costa: techo de hormigón, vidrio y un plinto de piedra.",
    lead: "Un espacio para el arte no debería competir con las obras. En Punta del Este, tampoco debería competir con el mar. El pabellón es un techo, un piso y el clima en el medio.",
    body: [
      "La Fundación pedía una sala de exposiciones temporales, un foyer y un pequeño auditorio. El predio es una lengua de roca sobre el Atlántico. Propusimos un plinto de piedra que continúa el cantil, y un techo de hormigón que vuela sobre el agua.",
      "Entre ambos, vidrio. La sala se vacía de ornamentación. Las obras se cuelgan sobre un fondo blanco; el horizonte entra por el costado. Cuando no hay exposición, el edificio sigue siendo una pieza: un umbral entre ciudad y océano.",
      "La estructura se calculó para viento extremo y salitre. El hormigón es denso, el vidrio es de control solar, el bronce de los encuentros se va a patinar. El edificio está pensado para envejecer a la vista.",
    ],
    facts: [
      { label: "Superficie", value: "890 m²" },
      { label: "Programa", value: "Sala, foyer, auditorio" },
      { label: "Estructura", value: "Losas de hormigón" },
      { label: "Cerramiento", value: "Vidrio estructural" },
      { label: "Base", value: "Piedra granítica" },
      { label: "Año", value: "2021" },
    ],
  },
  {
    slug: "casa-patio-norte",
    code: "VTA-25-01",
    title: "Casa Patio Norte",
    location: "Palermo, Buenos Aires",
    country: "Argentina",
    year: 2025,
    category: "Residencial",
    area: "310 m²",
    status: "Construido",
    client: "Privado",
    featured: false,
    cover: "/images/casa-patio.jpg",
    images: [
      {
        src: "/images/casa-patio.jpg",
        alt: "Patio central con pileta y ladrillo visto",
        caption: "El patio reúne agua, árboles y la escalera de acero.",
        wide: true,
      },
      {
        src: "/images/casa-patio-interior.jpg",
        alt: "Estar con vista al patio y muros de ladrillo",
        caption: "Adentro, el ladrillo se lee continuo. El patio es la lámpara del día.",
      },
    ],
    excerpt:
      "Una casa urbana de ladrillo alrededor de un patio con agua, en Palermo.",
    lead: "En la ciudad compacta, la calidad de una casa se mide por su patio. Casa Patio Norte es un recinto de ladrillo, luz y un espejo de agua.",
    body: [
      "El lote entre medianeras pedía privacidad sin renunciar a cielo. Vaciamos el centro. Alrededor, una casa de ladrillo hecho a mano y hormigón visto se organiza en dos plantas: estar y cocina abajo, dormitorios arriba.",
      "El patio no es resto: es el recinto principal. Tres árboles, un banco de hormigón, una pileta baja. La escalera de acero cruza una medianera y deja el aire libre. La sombra de la tarde recorre el ladrillo como un reloj.",
      "Hacia la calle, casi nada. Un portón, un umbral, un cambio de luz. La casa se revela de adentro hacia afuera, como las casas chorizo de las que este proyecto es, en el fondo, un pariente.",
    ],
    facts: [
      { label: "Superficie", value: "310 m²" },
      { label: "Lote", value: "8,66 × 32 m" },
      { label: "Material", value: "Ladrillo, hormigón, acero" },
      { label: "Patio", value: "72 m²" },
      { label: "Árboles", value: "Jacarandá y cítricos" },
      { label: "Año", value: "2025" },
    ],
  },
  {
    slug: "hotel-bruma",
    code: "VTA-24-09",
    title: "Hotel Bruma",
    location: "Colonia del Sacramento",
    country: "Uruguay",
    year: 2024,
    category: "Hospitalidad",
    area: "1.200 m²",
    status: "Construido",
    client: "Bruma Hospitality",
    featured: false,
    cover: "/images/hotel-bruma.jpg",
    images: [
      {
        src: "/images/hotel-bruma.jpg",
        alt: "Fachada colonial restaurada con inserción contemporánea de vidrio",
        caption: "Se conserva el muro. Lo nuevo es un recinto de vidrio y madera.",
        wide: true,
      },
      {
        src: "/images/hotel-bruma-interior.jpg",
        alt: "Habitación con muros de cal y patio de cítricos",
        caption: "Las habitaciones miran al patio. La cal absorbe la luz de la tarde.",
      },
    ],
    excerpt:
      "Reuso de una casa colonial: se conserva el muro, se inserta un recinto contemporáneo.",
    lead: "En el casco histórico de Colonia, la mejor decisión suele ser no completar. Hotel Bruma deja visible la herida del tiempo y coloca lo nuevo con silencio.",
    body: [
      "El edificio original era una casa de piedra y cal, con una crujía derrumbada hacia el patio. En lugar de reconstruir el volumen perdido, insertamos un pabellón de acero, vidrio y madera que no toca el muro antiguo: lo mira.",
      "Doce habitaciones, un estar, un desayunador. Las piezas nuevas son precisas; las viejas, se consolidan y se dejan. La pátina, las postigos verdes, el adoquín de la calle: eso ya era arquitectura. Nosotros agregamos sombra, confort y un umbral.",
      "El hotel se recorre como una casa. No hay lobby corporativo. Hay un patio, un cítrico, y una escalera de madera que sube con la luz de la tarde.",
    ],
    facts: [
      { label: "Superficie", value: "1.200 m²" },
      { label: "Habitaciones", value: "12" },
      { label: "Intervención", value: "Reuso y obra nueva" },
      { label: "Material nuevo", value: "Acero, vidrio, roble" },
      { label: "Patrimonio", value: "Casco histórico UNESCO" },
      { label: "Año", value: "2024" },
    ],
  },
  {
    slug: "refugio-lanin",
    code: "VTA-23-02",
    title: "Refugio Lanín",
    location: "San Martín de los Andes, Neuquén",
    country: "Argentina",
    year: 2023,
    category: "Residencial",
    area: "165 m²",
    status: "Construido",
    client: "Privado",
    featured: false,
    cover: "/images/refugio-lanin.jpg",
    images: [
      {
        src: "/images/refugio-lanin.jpg",
        alt: "Cabaña de madera oscura frente al volcán y el lago",
        caption: "Un recinto de madera y piedra volcánica, frente al Lanín.",
        wide: true,
      },
      {
        src: "/images/refugio-lanin-interior.jpg",
        alt: "Interior de madera con hogar de piedra y vista al lago",
        caption: "Adentro, un solo recinto: fuego, madera y la ventana al lago.",
      },
    ],
    excerpt:
      "Una cabaña mínima de madera y piedra volcánica, frente al Lanín.",
    lead: "El refugio no es una casa de fin de semana disfrazada. Es un recinto para el frío, la niebla y una ventana al volcán.",
    body: [
      "El predio mira el lago y, detrás, el Lanín. Pedimos un volumen compacto: cubiertas de chapa a dos aguas, muros de madera quemada, zócalo de piedra volcánica. Nada que no pueda mantenerse en invierno.",
      "El interior es un solo espacio con entrepiso. El hogar de piedra es el centro. La ventana larga no se abre al paisaje como postal: lo recorta, lo acerca, lo deja quieto.",
      "Araucarias, niebla, agua. El edificio es pequeño a propósito. En la montaña, lo justo es más generoso que lo grande.",
    ],
    facts: [
      { label: "Superficie", value: "165 m²" },
      { label: "Estructura", value: "Madera laminada" },
      { label: "Cerramiento", value: "Tabla carbonizada" },
      { label: "Base", value: "Piedra volcánica" },
      { label: "Clima", value: "Andino, nieve" },
      { label: "Año", value: "2023" },
    ],
  },
  {
    slug: "escuela-litoral",
    code: "VTA-22-12",
    title: "Escuela Litoral",
    location: "Rosario, Santa Fe",
    country: "Argentina",
    year: 2022,
    category: "Educativo",
    area: "3.600 m²",
    status: "Construido",
    client: "Gobierno de Santa Fe",
    featured: false,
    cover: "/images/escuela-litoral.jpg",
    images: [
      {
        src: "/images/escuela-litoral.jpg",
        alt: "Escuela de ladrillo con patios y el río Paraná al fondo",
        caption: "Patios, celosías de ladrillo y el Paraná como horizonte.",
        wide: true,
      },
      {
        src: "/images/escuela-litoral-interior.jpg",
        alt: "Claustro de ladrillo perforado con sombra geométrica",
        caption: "La celosía dibuja la sombra. El claustro es el aula del clima.",
      },
    ],
    excerpt:
      "Una escuela de ladrillo junto al Paraná: patios, sombra y aulas que respiran.",
    lead: "Una escuela pública no es un diagrama de aulas. Es un clima. En Rosario, eso significa sombra, ladrillo, patio y el río cerca.",
    body: [
      "El predio mira el Paraná. Organizamos el programa en crujías de ladrillo alrededor de tres patios de distinto tamaño: el de llegada, el de juego, el de los más chicos. Las aulas se abren a galerías cubiertas. El sol de la siesta no entra de frente.",
      "La celosía de ladrillo perforado es la fachada y el sistema de sombra. El hormigón aparece solo donde hace falta: losas, dinteles, bancos. El resto es muro, patio y árbol.",
      "Queríamos un edificio que un niño pueda entender: dónde está el cielo, dónde está el río, por dónde se entra. La claridad no es un estilo. Es una forma de respeto.",
    ],
    facts: [
      { label: "Superficie", value: "3.600 m²" },
      { label: "Alumnos", value: "480" },
      { label: "Aulas", value: "18" },
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
