import type { Comuna } from "./site";

export type Operation = "venta" | "arriendo";
export type PropertyType = "casa" | "departamento";

export type Property = {
  slug: string;
  title: string;
  headline: string;
  operation: Operation;
  type: PropertyType;
  comuna: Comuna;
  sector: string;
  priceUF: number;
  area: number;
  terrain?: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  year: number;
  featured?: boolean;
  badge?: string;
  description: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  agent: "elena" | "tomas" | "amanda";
};

export const properties: Property[] = [
  {
    slug: "casa-santa-maria-vitacura",
    title: "Casa en Santa María de Manquehue",
    headline: "Jardín, silencio y la cordillera al fondo.",
    operation: "venta",
    type: "casa",
    comuna: "Vitacura",
    sector: "Santa María de Manquehue",
    priceUF: 18900,
    area: 280,
    terrain: 620,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    year: 2018,
    featured: true,
    badge: "Exclusiva",
    description:
      "Casa contemporánea en uno de los sectores más pedidos de Vitacura. Orientación norte, jardín plano con olivos y piscina, living-comedor que se abre al patio. Pensada para vivir, no para impresionar en fotos: buena luz, buena cocina, recintos que se usan.",
    highlights: [
      "Piscina y quincho cerrado",
      "Suite principal en primer piso",
      "Cocina integrada con isla",
      "Pieza de servicio con baño",
    ],
    amenities: ["Piscina", "Quincho", "Jardín", "Bodega", "Calefacción", "Logia"],
    images: [
      "/images/casa-vitacura.jpg",
      "/images/kitchen.jpg",
      "/images/living.jpg",
      "/images/bedroom.jpg",
      "/images/bathroom.jpg",
    ],
    agent: "elena",
  },
  {
    slug: "penthouse-el-golf",
    title: "Penthouse en El Golf",
    headline: "Terraza propia, skyline y el cerro al atardecer.",
    operation: "venta",
    type: "departamento",
    comuna: "Las Condes",
    sector: "El Golf",
    priceUF: 14200,
    area: 165,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    year: 2016,
    featured: true,
    badge: "Destacada",
    description:
      "Último piso con terraza perimetral en El Golf. Living de doble orientación, cocina cerrada con logia, tres suites. El edificio es silencioso, con conserjería 24 horas. A dos cuadras de Isidora Goyenechea.",
    highlights: [
      "Terraza de 48 m²",
      "Vista despejada a la cordillera",
      "Dos estacionamientos juntos",
      "Gastos comunes contenidos para el sector",
    ],
    amenities: [
      "Terraza",
      "Conserjería 24h",
      "Gimnasio",
      "Bodega",
      "Aire acondicionado",
    ],
    images: [
      "/images/penthouse-terrace.jpg",
      "/images/penthouse-living.jpg",
      "/images/bathroom.jpg",
      "/images/living.jpg",
    ],
    agent: "tomas",
  },
  {
    slug: "casa-la-dehesa",
    title: "Casa en La Dehesa",
    headline: "Terreno, luz y la cordillera pegada.",
    operation: "venta",
    type: "casa",
    comuna: "Lo Barnechea",
    sector: "La Dehesa",
    priceUF: 26800,
    area: 420,
    terrain: 1400,
    bedrooms: 5,
    bathrooms: 5,
    parking: 4,
    year: 2014,
    featured: true,
    description:
      "Casa de volumen simple, piedra y estuco, en un terreno que se usa: césped, árboles nativos, espacio para recibir. Cinco dormitorios, estar de niños, escritorio. El tipo de casa que en La Dehesa se pide y casi no aparece.",
    highlights: [
      "Terreno plano de 1.400 m²",
      "Estar de niños independiente",
      "Quincho con parrilla y horno",
      "Portón eléctrico y alarma",
    ],
    amenities: ["Piscina", "Quincho", "Jardín", "Bodega", "Alarma", "Calefacción"],
    images: [
      "/images/casa-dehesa.jpg",
      "/images/kitchen.jpg",
      "/images/bedroom.jpg",
      "/images/living.jpg",
    ],
    agent: "elena",
  },
  {
    slug: "depto-los-leones",
    title: "Departamento en Los Leones",
    headline: "Providencia caminable, con árboles en la vereda.",
    operation: "venta",
    type: "departamento",
    comuna: "Providencia",
    sector: "Los Leones",
    priceUF: 6200,
    area: 98,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    year: 2012,
    featured: true,
    description:
      "Piso 7, living-comedor con balcón a la calle arbolada, cocina independiente, dos dormitorios en suite. Ideal para quien quiere Metro, cafés y no quiere un edificio de 30 pisos. Edificio de escala humana, bien llevado.",
    highlights: [
      "A 4 minutos del Metro Los Leones",
      "Balcón usable, no ornamental",
      "Estacionamiento y bodega",
      "Edificio sin comercio en el primer piso",
    ],
    amenities: ["Balcón", "Bodega", "Conserjería", "Estacionamiento"],
    images: [
      "/images/providencia.jpg",
      "/images/depto-interior.jpg",
      "/images/bedroom.jpg",
      "/images/kitchen.jpg",
    ],
    agent: "amanda",
  },
  {
    slug: "casa-plaza-nunoa",
    title: "Casa remodelada cerca de Plaza Ñuñoa",
    headline: "Barrio, jardín chico y una casa que ya está lista.",
    operation: "venta",
    type: "casa",
    comuna: "Ñuñoa",
    sector: "Plaza Ñuñoa",
    priceUF: 9800,
    area: 190,
    terrain: 310,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    year: 1948,
    badge: "Remodelada",
    description:
      "Casa de los años 40, remodelada con respeto: se conservó el volumen, se actualizó todo lo que importa —instalaciones, cocina, baños, aislación. Patio con olivo, pieza de visitas en el segundo piso. A diez cuadras de la plaza, en calle quieta.",
    highlights: [
      "Remodelación integral 2023",
      "Patio con olivo y parrilla",
      "Cuatro dormitorios reales",
      "Caminable a Plaza Ñuñoa",
    ],
    amenities: ["Jardín", "Quincho", "Bodega", "Calefacción"],
    images: [
      "/images/casa-nunoa.jpg",
      "/images/kitchen.jpg",
      "/images/bedroom.jpg",
      "/images/living.jpg",
    ],
    agent: "amanda",
  },
  {
    slug: "depto-escuela-militar",
    title: "Departamento en Escuela Militar",
    headline: "Dos dormitorios, buena luz, para vivir o invertir.",
    operation: "venta",
    type: "departamento",
    comuna: "Las Condes",
    sector: "Escuela Militar",
    priceUF: 4850,
    area: 72,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    year: 2019,
    description:
      "Departamento de 72 m² en edificio de 2019, orientación oriente, living con logia cerrada. Dos baños, kitchenette bien resuelta. Arriendo fácil si se compra para renta; también funciona como primer departamento en Las Condes.",
    highlights: [
      "Edificio 2019, bien mantenido",
      "Rentabilidad de arriendo sólida",
      "Metro Escuela Militar a 6 minutos",
      "Gimnasio y quincho en el edificio",
    ],
    amenities: ["Gimnasio", "Quincho", "Conserjería 24h", "Bodega"],
    images: [
      "/images/depto-escuela-militar.jpg",
      "/images/depto-interior.jpg",
      "/images/bedroom.jpg",
      "/images/bathroom.jpg",
    ],
    agent: "tomas",
  },
  {
    slug: "casa-la-reina",
    title: "Casa familiar en La Reina",
    headline: "Patio grande, colegios cerca, sin el precio de Vitacura.",
    operation: "venta",
    type: "casa",
    comuna: "La Reina",
    sector: "Carlos Ossandón",
    priceUF: 12400,
    area: 240,
    terrain: 780,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    year: 2008,
    description:
      "Casa de dos pisos con patio que se usa: césped, árboles frutales, espacio para una piscina si se quiere. La Reina sigue siendo la comuna donde las familias se quedan. Colegios, feria, cerro, y un metro cuadrado que todavía tiene sentido.",
    highlights: [
      "Terreno de 780 m²",
      "Living-comedor separado de cocina",
      "Dormitorio de visitas en primer piso",
      "Colegios a menos de 10 minutos",
    ],
    amenities: ["Jardín", "Bodega", "Logia", "Calefacción"],
    images: [
      "/images/casa-la-reina.jpg",
      "/images/kitchen.jpg",
      "/images/living.jpg",
      "/images/bedroom.jpg",
    ],
    agent: "elena",
  },
  {
    slug: "depto-nueva-costanera",
    title: "Departamento en Nueva Costanera",
    headline: "Vitacura baja, tres dormitorios, edificio sereno.",
    operation: "venta",
    type: "departamento",
    comuna: "Vitacura",
    sector: "Nueva Costanera",
    priceUF: 11200,
    area: 128,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    year: 2015,
    description:
      "Piso 5, 128 m² útiles, living amplio y tres dormitorios bien dimensionados. El edificio no grita lujo: está bien construido, bien administrado y queda a pasos de restaurantes y del Parque Bicentenario. Dos estacionamientos en el mismo piso de subterráneo.",
    highlights: [
      "128 m² reales, no de brochure",
      "Cercanía a Parque Bicentenario",
      "Dos estacionamientos",
      "Edificio de baja densidad",
    ],
    amenities: ["Conserjería 24h", "Gimnasio", "Bodega", "Terraza interior"],
    images: [
      "/images/depto-costanera.jpg",
      "/images/penthouse-living.jpg",
      "/images/bathroom.jpg",
      "/images/bedroom.jpg",
    ],
    agent: "tomas",
  },
  {
    slug: "casa-pedro-de-valdivia-norte",
    title: "Casa en Pedro de Valdivia Norte",
    headline: "Providencia de casas, no de torres.",
    operation: "venta",
    type: "casa",
    comuna: "Providencia",
    sector: "Pedro de Valdivia Norte",
    priceUF: 21400,
    area: 310,
    terrain: 540,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    year: 2005,
    badge: "Exclusiva",
    description:
      "Una de las pocas casas que quedan en Pedro de Valdivia Norte con jardín de verdad. Living de techo alto, cocina hacia el patio, suite principal con walking closet. El cerro San Cristóbal está a la vuelta. Para quien quiere ciudad y silencio en la misma cuadra.",
    highlights: [
      "Barrio de casas, no de edificios",
      "Jardín privado con riego",
      "Escritorio independiente",
      "A pasos del Parque Metropolitano",
    ],
    amenities: ["Jardín", "Quincho", "Bodega", "Alarma", "Calefacción"],
    images: [
      "/images/pedro-valdivia.jpg",
      "/images/kitchen.jpg",
      "/images/living.jpg",
      "/images/bedroom.jpg",
    ],
    agent: "elena",
  },
  {
    slug: "depto-irarrazaval-arriendo",
    title: "Departamento 1D en Irarrázaval",
    headline: "Un dormitorio luminoso, para alguien que camina la comuna.",
    operation: "arriendo",
    type: "departamento",
    comuna: "Ñuñoa",
    sector: "Irarrázaval",
    priceUF: 18,
    area: 55,
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    year: 2021,
    description:
      "55 m², living con balcón, cocina integrada, dormitorio con closet. Edificio nuevo, gastos comunes razonables, sin mascotas de raza grande. Disponible de inmediato. Requisitos: aval o seguro de arriendo, y renta acreditada.",
    highlights: [
      "Disponible inmediata",
      "Edificio 2021",
      "Metro Irarrázaval a 8 minutos",
      "Gastos comunes incluidos en la visita",
    ],
    amenities: ["Balcón", "Conserjería", "Bicicletero", "Lavandería"],
    images: [
      "/images/depto-interior.jpg",
      "/images/barrio-nunoa.jpg",
      "/images/bedroom.jpg",
    ],
    agent: "amanda",
  },
  {
    slug: "depto-manquehue-arriendo",
    title: "Departamento 2D en Manquehue",
    headline: "Las Condes, dos dormitorios, para llegar y vivir.",
    operation: "arriendo",
    type: "departamento",
    comuna: "Las Condes",
    sector: "Manquehue",
    priceUF: 38,
    area: 85,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    year: 2017,
    description:
      "Departamento amoblado a medias (living y dormitorio principal), 85 m², segundo baño completo. Estacionamiento incluido. Se arrienda a persona natural, no a empresas. Contrato anual, garantía de un mes.",
    highlights: [
      "Estacionamiento incluido",
      "Semi amoblado",
      "Dos baños",
      "Conserjería 24 horas",
    ],
    amenities: ["Conserjería 24h", "Gimnasio", "Bodega", "Piscina edificio"],
    images: [
      "/images/depto-escuela-militar.jpg",
      "/images/penthouse-living.jpg",
      "/images/bedroom.jpg",
      "/images/bathroom.jpg",
    ],
    agent: "amanda",
  },
  {
    slug: "casa-vitacura-arriendo",
    title: "Casa en arriendo, Vitacura",
    headline: "Cuatro dormitorios, jardín y piscina. Para una familia.",
    operation: "arriendo",
    type: "casa",
    comuna: "Vitacura",
    sector: "Santa María",
    priceUF: 78,
    area: 220,
    terrain: 500,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    year: 2011,
    description:
      "Casa de 220 m² en terreno de 500, piscina, quincho, cuatro dormitorios. Se arrienda sin muebles, con línea blanca. Familia o diplomáticos. Contrato de 12 meses, garantía equivalente a un mes de arriendo.",
    highlights: [
      "Piscina y jardín mantenido",
      "Línea blanca incluida",
      "Pieza de servicio",
      "Colegios del sector a minutos",
    ],
    amenities: ["Piscina", "Quincho", "Jardín", "Calefacción", "Alarma"],
    images: [
      "/images/casa-vitacura.jpg",
      "/images/kitchen.jpg",
      "/images/living.jpg",
      "/images/bedroom.jpg",
    ],
    agent: "elena",
  },
];

export const agents = {
  elena: {
    name: "Elena Vidal",
    role: "Directora y corredora",
    photo: "/images/team-elena.jpg",
    bio: "Once años vendiendo y captando en el oriente de Santiago. Antes, arquitectura. Por eso mira las casas como se habitan, no como se fotografían.",
    phone: "+56 9 8765 4321",
  },
  tomas: {
    name: "Tomás Herrera",
    role: "Ventas e inversión",
    photo: "/images/team-tomas.jpg",
    bio: "Departamentos en Las Condes y Vitacura, y clientes que compran para renta. Habla en números: UF/m², vacancia, gastos comunes.",
    phone: "+56 9 8765 4322",
  },
  amanda: {
    name: "Amanda Rojas",
    role: "Arriendos y Ñuñoa–Providencia",
    photo: "/images/team-amanda.jpg",
    bio: "Filtra inquilinos, arma contratos que no duelen y conoce cada cuadra entre Irarrázaval y Los Leones.",
    phone: "+56 9 8765 4323",
  },
} as const;

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function featuredProperties() {
  return properties.filter((p) => p.featured);
}

export function similarProperties(property: Property, limit = 3) {
  return properties
    .filter(
      (p) =>
        p.slug !== property.slug &&
        (p.comuna === property.comuna || p.operation === property.operation),
    )
    .slice(0, limit);
}

export type PropertyFilters = {
  operation?: string;
  type?: string;
  comuna?: string;
  bedrooms?: string;
};

export function filterProperties(filters: PropertyFilters) {
  return properties.filter((p) => {
    if (filters.operation && filters.operation !== "todas" && p.operation !== filters.operation) {
      return false;
    }
    if (filters.type && filters.type !== "todos" && p.type !== filters.type) {
      return false;
    }
    if (filters.comuna && filters.comuna !== "todas" && p.comuna !== filters.comuna) {
      return false;
    }
    if (filters.bedrooms && filters.bedrooms !== "todos") {
      const min = Number(filters.bedrooms);
      if (p.bedrooms < min) return false;
    }
    return true;
  });
}

export const neighborhoods = [
  {
    slug: "las-condes",
    name: "Las Condes",
    image: "/images/barrio-las-condes.jpg",
    priceM2: 86,
    rentM2: 17500,
    pitch:
      "El pulso del oriente. Oficinas, Metro, colegios y edificios que van de lo razonable a El Golf. Compramos y vendemos aquí todos los meses.",
    for: "Familias que quieren servicios a la mano, e inversionistas de departamentos.",
  },
  {
    slug: "vitacura",
    name: "Vitacura",
    image: "/images/depto-costanera.jpg",
    priceM2: 92,
    rentM2: 17800,
    pitch:
      "Casas con jardín, departamentos serenos y el Parque Bicentenario. El metro cuadrado más caro de Santiago — y el más estable.",
    for: "Quien ya sabe que quiere quedarse, no especular.",
  },
  {
    slug: "providencia",
    name: "Providencia",
    image: "/images/providencia.jpg",
    priceM2: 84,
    rentM2: 15500,
    pitch:
      "Árboles, veredas y una vida que no depende del auto. Pedro de Valdivia Norte es otra comuna dentro de la comuna.",
    for: "Profesionales, parejas y quienes venden para achicarse sin irse al sur.",
  },
  {
    slug: "nunoa",
    name: "Ñuñoa",
    image: "/images/barrio-nunoa.jpg",
    priceM2: 79,
    rentM2: 12700,
    pitch:
      "La comuna que más se pide cuando el presupuesto no llega a Vitacura y no se quiere perder barrio. Plaza, feria, Metro, casas antiguas y edificios nuevos.",
    for: "Primera vivienda, arriendo de calidad, e inversión con demanda real.",
  },
  {
    slug: "la-reina",
    name: "La Reina",
    image: "/images/casa-la-reina.jpg",
    priceM2: 82,
    rentM2: 13200,
    pitch:
      "Familias, patios, cerro. Menos vitrina, más vida. El precio todavía premia a quien busca casa y no torre.",
    for: "Quien viene de departamento y necesita jardín sin subir a Lo Barnechea.",
  },
  {
    slug: "lo-barnechea",
    name: "Lo Barnechea",
    image: "/images/casa-dehesa.jpg",
    priceM2: 94,
    rentM2: 17800,
    pitch:
      "La Dehesa, Los Trapenses, la cordillera encima. Casas, terrenos, y un ritmo distinto al del llano.",
    for: "Familias que priorizan espacio, colegios del sector y silencio.",
  },
] as const;
