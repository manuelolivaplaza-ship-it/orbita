import type { TerritoryId } from "./site";

export type PropertyType = "casa" | "departamento" | "parcela" | "refugio";
export type PropertyStatus = "disponible" | "reservada" | "entregada";

export type Property = {
  slug: string
  name: string
  kicker: string
  comuna: string
  region: string
  territory: TerritoryId
  type: PropertyType
  status: PropertyStatus
  uf: number
  m2: number
  terreno?: number
  dormitorios: number
  banos: number
  estacionamientos: number
  orientacion: string
  year: number
  architect: string
  images: string[]
  excerpt: string
  story: string[]
  features: string[]
  featured?: boolean
};

export const typeLabels: Record<PropertyType, string> = {
  casa: "Casa",
  departamento: "Departamento",
  parcela: "Parcela",
  refugio: "Refugio",
};

export const statusLabels: Record<PropertyStatus, string> = {
  disponible: "Disponible",
  reservada: "Reservada",
  entregada: "Entregada",
};

export const properties: Property[] = [
  {
    slug: "casa-ladera",
    name: "Casa Ladera",
    kicker: "Lo Barnechea · Cota alta",
    comuna: "Lo Barnechea",
    region: "Región Metropolitana",
    territory: "santiago",
    type: "casa",
    status: "disponible",
    uf: 62400,
    m2: 680,
    terreno: 2140,
    dormitorios: 5,
    banos: 6,
    estacionamientos: 4,
    orientacion: "Norte–oriente",
    year: 2022,
    architect: "Taller Cóndor",
    images: [
      "/images/casa-ladera.jpg",
      "/images/interior-living.jpg",
      "/images/interior-cocina.jpg",
      "/images/quincho.jpg",
      "/images/interior-biblioteca.jpg",
    ],
    excerpt:
      "Hormigón visto, madera quemada y un vidrio que no se disculpa. La casa no mira el valle: lo sostiene.",
    story: [
      "En la cota donde Santiago se vuelve un tapiz de luces, Casa Ladera ocupa un predio de bosque esclerófilo que se conservó casi intacto. El volumen se pliega en tres plataformas de hormigón y madera carbonizada; el vidrio, de piso a cielo, no decora: recorta la cordillera.",
      "El programa es explícito y generoso: cinco dormitorios, un living de doble altura orientado al norte, cocina que se abre al quincho, piscina de borde infinito y una biblioteca que da al valle. La orientación no es un dato: es el privilegio que sostiene el resto.",
      "Se muestra solo con cita, al atardecer. Es la hora en que la casa explica por qué existe.",
    ],
    features: [
      "Piscina de borde infinito",
      "Quincho cerrado con parrilla a leña",
      "Calefacción radiante",
      "Domótica KNX",
      "Bodega climatizada",
      "Suite principal con vestidor y terraza",
      "Jardín de especies nativas",
      "Portón y acceso independientes",
    ],
    featured: true,
  },
  {
    slug: "pabellon-del-lago",
    name: "Pabellón del Lago",
    kicker: "Puerto Varas · Llanquihue",
    comuna: "Puerto Varas",
    region: "Los Lagos",
    territory: "lagos",
    type: "casa",
    status: "disponible",
    uf: 24800,
    m2: 420,
    terreno: 3800,
    dormitorios: 4,
    banos: 4,
    estacionamientos: 3,
    orientacion: "Norte, al volcán",
    year: 2021,
    architect: "Estudio Bruma Sur",
    images: [
      "/images/pabellon-lago.jpg",
      "/images/interior-dormitorio.jpg",
      "/images/barrio-puerto-varas.jpg",
      "/images/interior-living.jpg",
    ],
    excerpt:
      "Un pabellón de madera oscura sobre el Llanquihue. El Osorno entra por los ventanales como si fuera un mueble más.",
    story: [
      "No es una casa de vacaciones disfrazada de arquitectura. Es un pabellón de madera teñida, asentado sobre un zócalo de piedra, a pocos metros del agua. La niebla de la mañana no se pelea: se invita.",
      "Cuatro dormitorios, un estar continuo hacia el lago y una cocina que entiende el clima del sur. El predio conserva arrayanes y un acceso privado a la orilla. En invierno, el silencio es el lujo más caro de Chile.",
    ],
    features: [
      "Orilla privada del lago",
      "Estufa de leña central",
      "Madera nativa estructural",
      "Calefacción por losa radiante",
      "Muelle menor",
      "Casa de huéspedes independiente",
    ],
    featured: true,
  },
  {
    slug: "casa-bruma",
    name: "Casa Bruma",
    kicker: "Zapallar · Acantilado",
    comuna: "Zapallar",
    region: "Valparaíso",
    territory: "costa",
    type: "casa",
    status: "reservada",
    uf: 48900,
    m2: 310,
    terreno: 1260,
    dormitorios: 4,
    banos: 4,
    estacionamientos: 2,
    orientacion: "Poniente, al Pacífico",
    year: 2020,
    architect: "Atelier Costa",
    images: [
      "/images/casa-bruma.jpg",
      "/images/interior-comedor.jpg",
      "/images/interior-bano.jpg",
      "/images/barrio-zapallar.jpg",
    ],
    excerpt:
      "Piedra pálida y bronce sobre el acantilado. Zapallar no se compra: se espera. Esta casa, por ahora, espera a alguien.",
    story: [
      "Casa Bruma se aferra al acantilado con una terraza en voladizo que no pide permiso al Pacífico. El programa es contenido —trescientos diez metros— porque en Zapallar el metro no vale: vale el aire, la curva de la bahía y el hecho de no tener vecinos a la vista.",
      "Reservada. Quienes ya la visitaron entienden por qué no se publica en portales. Si hay una segunda ronda, se avisa en privado.",
    ],
    features: [
      "Terraza en voladizo sobre el mar",
      "Piscina de agua salada",
      "Carpintería de bronce",
      "Suite con tina frente al acantilado",
      "Acceso peatonal a caleta",
      "Cisterna y autonomía hídrica",
    ],
    featured: true,
  },
  {
    slug: "atico-cordova",
    name: "Ático Córdova",
    kicker: "Las Condes · Alonso de Córdova",
    comuna: "Las Condes",
    region: "Región Metropolitana",
    territory: "santiago",
    type: "departamento",
    status: "disponible",
    uf: 28600,
    m2: 245,
    dormitorios: 3,
    banos: 3,
    estacionamientos: 3,
    orientacion: "Norte–oriente",
    year: 2019,
    architect: "Oficina Palacio",
    images: [
      "/images/atico-cordova.jpg",
      "/images/barrio-vitacura.jpg",
      "/images/interior-cocina.jpg",
      "/images/interior-biblioteca.jpg",
    ],
    excerpt:
      "Un piso alto sobre Alonso de Córdova. Terraza de mármol oscuro, un olivo y la cordillera como tapiz de fondo.",
    story: [
      "El ático no es un departamento con terraza: es una casa suspendida sobre el eje más discreto de Santiago. Doscientos cuarenta y cinco metros interiores, terraza perimetral, tres dormitorios y una cocina que se abre al estar sin perder compostura.",
      "Gastos comunes contenidos para el estándar del edificio. El olivo de la terraza no se muda: es parte de la escritura.",
    ],
    features: [
      "Terraza perimetral",
      "Tres estacionamientos y bodega",
      "Logia cerrada",
      "Piso de mármol y roble",
      "Concierge 24 h",
      "Bodega de vinos",
    ],
  },
  {
    slug: "hacienda-niebla",
    name: "Hacienda Niebla",
    kicker: "Casablanca · Viñedo",
    comuna: "Casablanca",
    region: "Valparaíso",
    territory: "valle",
    type: "parcela",
    status: "disponible",
    uf: 19400,
    m2: 380,
    terreno: 42000,
    dormitorios: 4,
    banos: 4,
    estacionamientos: 4,
    orientacion: "Norte, al cordón",
    year: 2018,
    architect: "Taller Tierra",
    images: [
      "/images/hacienda-niebla.jpg",
      "/images/bodega.jpg",
      "/images/interior-comedor.jpg",
      "/images/quincho.jpg",
    ],
    excerpt:
      "Cuatro hectáreas de viña, una casa de tapial y una bodega que huele a roble. El valle, de mañana, entra con niebla.",
    story: [
      "Hacienda Niebla no es un predio con una casa: es una pequeña operación vitivinícola con residencia. Tapial, madera oscura y una galería larga que mira las hileras. La bodega —con mesa de piedra y barricas— se ofrece como sala de estar alternativa.",
      "A cuarenta y cinco minutos de Santiago, con viento costero y noches frías. Ideal para quien quiere un segundo ritmo, no un segundo decorado.",
    ],
    features: [
      "4,2 ha con viña en producción",
      "Bodega y sala de cata",
      "Casa de tapial y madera",
      "Pozo y derechos de agua",
      "Casa de cuidador",
      "Acceso controlado al valle",
    ],
  },
  {
    slug: "residencia-cumbre",
    name: "Residencia Cumbre",
    kicker: "Vitacura · Jardín amurallado",
    comuna: "Vitacura",
    region: "Región Metropolitana",
    territory: "santiago",
    type: "casa",
    status: "disponible",
    uf: 54200,
    m2: 510,
    terreno: 980,
    dormitorios: 5,
    banos: 5,
    estacionamientos: 4,
    orientacion: "Norte",
    year: 2016,
    architect: "Cruz & Vial",
    images: [
      "/images/residencia-cumbre.jpg",
      "/images/interior-biblioteca.jpg",
      "/images/interior-living.jpg",
      "/images/interior-cocina.jpg",
    ],
    excerpt:
      "Ladrillo oscuro, bronce y un jardín que no se ve desde la calle. Vitacura en su versión más callada.",
    story: [
      "Cumbre es una casa de muro. Desde la calle, casi nada. Dentro, un jardín con espejo de agua, cinco dormitorios y una biblioteca que parece haber estado siempre. El ladrillo oscuro y el bronce envejecido no persiguen tendencia: persiguen duración.",
      "A pasos de Alonso de Córdova, con el privilegio —cada vez más raro— de no oír la avenida.",
    ],
    features: [
      "Jardín amurallado",
      "Espejo de agua",
      "Biblioteca de doble altura",
      "Suite en pabellón independiente",
      "Calefacción central",
      "Pieza de servicio y logia",
    ],
  },
  {
    slug: "casa-del-faro",
    name: "Casa del Faro",
    kicker: "Cachagua · Duna",
    comuna: "Zapallar",
    region: "Valparaíso",
    territory: "costa",
    type: "casa",
    status: "disponible",
    uf: 31500,
    m2: 280,
    terreno: 890,
    dormitorios: 3,
    banos: 3,
    estacionamientos: 2,
    orientacion: "Poniente",
    year: 2017,
    architect: "Taller Sal",
    images: [
      "/images/casa-faro.jpg",
      "/images/interior-comedor.jpg",
      "/images/barrio-zapallar.jpg",
      "/images/interior-dormitorio.jpg",
    ],
    excerpt:
      "Madera plateada por el salitre, una terraza ancha y el Pacífico a un declive de duna. Cachagua, sin estridencia.",
    story: [
      "Casa del Faro es la versión contenida de la costa: tres dormitorios, doscientos ochenta metros, y una terraza que entiende el viento. La madera vertical, ya plateada, no se va a pintar. Esa es la instrucción.",
      "Cachagua tiene otra temperatura que Zapallar: más arena, menos protocolo, el mismo privilegio de no estar en Reñaca.",
    ],
    features: [
      "Terraza al Pacífico",
      "Madera de ciprés tratado",
      "Ducha exterior",
      "Chimenea de leña",
      "Acceso a playa por sendero",
      "Estacionamiento cubierto",
    ],
  },
  {
    slug: "loft-matta",
    name: "Loft Matta",
    kicker: "Lastarria · Bellas Artes",
    comuna: "Santiago",
    region: "Región Metropolitana",
    territory: "santiago",
    type: "departamento",
    status: "disponible",
    uf: 11800,
    m2: 165,
    dormitorios: 2,
    banos: 2,
    estacionamientos: 1,
    orientacion: "Poniente",
    year: 1928,
    architect: "Rehabilitación 2023 · Oficina Umbral",
    images: [
      "/images/loft-matta.jpg",
      "/images/interior-biblioteca.jpg",
      "/images/interior-cocina.jpg",
    ],
    excerpt:
      "Un piso alto de 1928 rehabilitado. Cielos altos, yeso oscuro y la calle de adoquín como paisaje nocturno.",
    story: [
      "Lastarria no es un barrio de casas nuevas. Loft Matta conserva la altura original, el yeso, la ventana a la calle, y añade una cocina contemporánea que no discute con el edificio. Ciento sesenta y cinco metros, dos dormitorios, un estacionamiento en el mismo predio —rareza en el barrio.",
      "Para quien quiere Santiago a pie: museos, librerías, el Parque Forestal, y la posibilidad de no usar el auto de lunes a jueves.",
    ],
    features: [
      "Cielos de 3,6 m",
      "Edificio de 1928 rehabilitado",
      "Estacionamiento en el predio",
      "Calefacción individual",
      "Bodega",
      "A pasos del Parque Forestal",
    ],
  },
  {
    slug: "refugio-puelo",
    name: "Refugio Puelo",
    kicker: "Cochamó · Bosque",
    comuna: "Cochamó",
    region: "Los Lagos",
    territory: "lagos",
    type: "refugio",
    status: "disponible",
    uf: 8600,
    m2: 190,
    terreno: 12000,
    dormitorios: 3,
    banos: 2,
    estacionamientos: 2,
    orientacion: "Norte, al cerro",
    year: 2023,
    architect: "Taller Alerce",
    images: [
      "/images/refugio-puelo.jpg",
      "/images/interior-dormitorio.jpg",
      "/images/interior-living.jpg",
    ],
    excerpt:
      "Ciento noventa metros de madera carbonizada entre alerces. Un estero, niebla, y ninguna concesión al ruido.",
    story: [
      "Puelo no es un destino: es una decisión. El refugio se esconde entre alerce y lenga, con un estero a un costado y un programa mínimo que alcanza. Tres dormitorios, estufa, vidrio hacia el bosque. Doce mil metros de predio que no se van a lotear.",
      "Para quien ya tiene la casa de Santiago y quiere un silencio que no se puede comprar en la ciudad.",
    ],
    features: [
      "1,2 ha de bosque nativo",
      "Estufa de alto rendimiento",
      "Off-grid parcial (solar + pozo)",
      "Madera carbonizada",
      "Acceso por camino privado",
      "Sin vecinos a la vista",
    ],
  },
  {
    slug: "villa-arrayan",
    name: "Villa Arrayán",
    kicker: "La Dehesa · Entregada",
    comuna: "Lo Barnechea",
    region: "Región Metropolitana",
    territory: "santiago",
    type: "casa",
    status: "entregada",
    uf: 58000,
    m2: 740,
    terreno: 2600,
    dormitorios: 6,
    banos: 7,
    estacionamientos: 5,
    orientacion: "Norte",
    year: 2021,
    architect: "Taller Cóndor",
    images: [
      "/images/villa-arrayan.jpg",
      "/images/quincho.jpg",
      "/images/interior-living.jpg",
      "/images/interior-cocina.jpg",
    ],
    excerpt:
      "Seiscientos metros de piedra y cedro, piscina hacia los Andes. Entregada en 2025 a una familia que no aparece en esta página.",
    story: [
      "Villa Arrayán se muestra como archivo, no como oferta. Fue parte de la colección y se entregó. La publicamos porque el criterio no se oculta cuando una casa encuentra dueño: se celebra en silencio.",
    ],
    features: [
      "Piscina hacia la cordillera",
      "Seis dormitorios",
      "Quincho y pabellón de visitas",
      "Cancha de pádel",
      "Casa de servicio",
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getAvailable() {
  return properties.filter((p) => p.status !== "entregada");
}

export function getFeatured() {
  return properties.filter((p) => p.featured);
}

export function getRelated(slug: string, n = 3) {
  const current = getProperty(slug);
  if (!current) return properties.slice(0, n);
  return properties
    .filter((p) => p.slug !== slug && p.status !== "entregada")
    .sort((a, b) => {
      const score = (p: Property) =>
        (p.territory === current.territory ? 2 : 0) +
        (p.type === current.type ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, n);
}
