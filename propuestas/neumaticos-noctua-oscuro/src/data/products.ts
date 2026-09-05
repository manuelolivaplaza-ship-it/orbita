export type LineId = "via" | "nox" | "cumbre" | "atacama" | "carga" | "velox";
export type VehicleKind = "turismo" | "suv" | "camioneta" | "sport";
export type Season = "verano" | "lluvia" | "nieve" | "todo";
export type Stock = "taller" | "48h" | "pedido";
export type Grade = "A" | "B" | "C";

export type Size = {
  width: number;
  profile: number;
  rim: number;
  price: number;
  stock: Stock;
  load: string;
  speed: string;
};

export type Product = {
  slug: string;
  name: string;
  line: LineId;
  tagline: string;
  lede: string;
  body: string;
  image: string;
  atmosphere: string;
  vehicle: VehicleKind;
  season: Season;
  wet: Grade;
  fuel: Grade;
  noise: number;
  night: number;
  featured?: boolean;
  sizes: Size[];
};

export const lines: {
  id: LineId;
  latin: string;
  name: string;
  pitch: string;
  where: string;
  image: string;
  tire: string;
}[] = [
  {
    id: "via",
    latin: "VIA",
    name: "Vía",
    pitch: "Silencio para la ciudad que no duerme.",
    where: "Santiago, Valparaíso, Concepción",
    image: "/images/via-santiago.jpg",
    tire: "/images/tire-via.jpg",
  },
  {
    id: "nox",
    latin: "NOX",
    name: "Nox",
    pitch: "Cuando el asfalto se vuelve espejo.",
    where: "Ruta 68, costa, sur austral",
    image: "/images/nix-costa.jpg",
    tire: "/images/tire-nox.jpg",
  },
  {
    id: "cumbre",
    latin: "CUMBRE",
    name: "Cumbre",
    pitch: "Hielo negro. Farellones. Luna llena.",
    where: "Cordillera, centros de ski, Ñuble",
    image: "/images/cumbre.jpg",
    tire: "/images/tire-cumbre.jpg",
  },
  {
    id: "atacama",
    latin: "ATACAMA",
    name: "Atacama",
    pitch: "Calor de 40°, UV y salitre.",
    where: "Norte grande, Ruta 5, desierto",
    image: "/images/atacama.jpg",
    tire: "/images/tire-atacama.jpg",
  },
  {
    id: "carga",
    latin: "CARGA",
    name: "Carga",
    pitch: "Camioneta cargada. Kilómetro largo.",
    where: "Hilux, Ranger, L200, Amarok",
    image: "/images/carga-pickup.jpg",
    tire: "/images/tire-carga.jpg",
  },
  {
    id: "velox",
    latin: "VELOX",
    name: "Velox",
    pitch: "Seco, preciso, sin teatro.",
    where: "Deportivo, compacto, montaña de día",
    image: "/images/tread.jpg",
    tire: "/images/tire-via.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "via-55",
    name: "Vía 55",
    line: "via",
    tagline: "El compuesto de todos los días.",
    lede: "Bajo ruido, desgaste parejo, dirección limpia en Costanera y en el barrio.",
    body: "El Vía 55 está pensado para el auto que vive en la ciudad y sale el fin de semana. Compuesto de sílice de baja histéresis: rueda más silenciosa, menos calor en el taco de las 18:00. El dibujo simétrico se permuta sin drama y aguanta el pavimento parcheado de Santiago sin ponerse nervioso.",
    image: "/images/tire-via.jpg",
    atmosphere: "/images/via-santiago.jpg",
    vehicle: "turismo",
    season: "verano",
    wet: "B",
    fuel: "A",
    noise: 69,
    night: 86,
    featured: true,
    sizes: [
      { width: 185, profile: 65, rim: 15, price: 89900, stock: "taller", load: "88", speed: "H" },
      { width: 195, profile: 65, rim: 15, price: 96900, stock: "taller", load: "91", speed: "H" },
      { width: 205, profile: 55, rim: 16, price: 119900, stock: "taller", load: "91", speed: "V" },
      { width: 205, profile: 60, rim: 16, price: 124900, stock: "48h", load: "92", speed: "V" },
      { width: 215, profile: 55, rim: 17, price: 149900, stock: "taller", load: "94", speed: "V" },
    ],
  },
  {
    slug: "via-cross",
    name: "Vía Cross",
    line: "via",
    tagline: "SUV de ciudad, sin ruido de camioneta.",
    lede: "Para RAV4, Tucson y CX-5 que pasan más tiempo en Vitacura que en ripio.",
    body: "Perfil un poco más alto, flanco reforzado para el peso del crossover, y un dibujo que no canta en el asfalto. El Vía Cross es el neumático que el SUV chileno realmente usa: colegio, Costanera, un viaje a Zapallar. No pretende ser de desierto.",
    image: "/images/tire-via.jpg",
    atmosphere: "/images/via-santiago.jpg",
    vehicle: "suv",
    season: "todo",
    wet: "B",
    fuel: "B",
    noise: 70,
    night: 84,
    sizes: [
      { width: 225, profile: 65, rim: 17, price: 179900, stock: "taller", load: "102", speed: "H" },
      { width: 235, profile: 55, rim: 18, price: 209900, stock: "taller", load: "100", speed: "V" },
      { width: 235, profile: 60, rim: 18, price: 219900, stock: "48h", load: "103", speed: "V" },
    ],
  },
  {
    slug: "nox-aqua",
    name: "Nox Aqua",
    line: "nox",
    tagline: "Canales que tragan el agua, no el auto.",
    lede: "Hidroplaneo medido. Ruta 68 de noche, con lluvia, sin sorpresa.",
    body: "Cuatro canales longitudinales profundos y láminas laterales que evacúan 22 litros por segundo a 80 km/h en la medida 205/55 R16. El Nox Aqua está calibrado para el invierno del centro y la llovizna eterna de la costa. El compuesto permanece blando a 7 °C. No es un neumático de nieve: es un neumático de agua.",
    image: "/images/tire-nox.jpg",
    atmosphere: "/images/nix-costa.jpg",
    vehicle: "turismo",
    season: "lluvia",
    wet: "A",
    fuel: "B",
    noise: 70,
    night: 94,
    featured: true,
    sizes: [
      { width: 185, profile: 65, rim: 15, price: 109900, stock: "taller", load: "88", speed: "H" },
      { width: 205, profile: 55, rim: 16, price: 139900, stock: "taller", load: "91", speed: "V" },
      { width: 215, profile: 55, rim: 17, price: 169900, stock: "taller", load: "94", speed: "V" },
      { width: 225, profile: 45, rim: 17, price: 189900, stock: "48h", load: "91", speed: "W" },
    ],
  },
  {
    slug: "nox-costa",
    name: "Nox Costa",
    line: "nox",
    tagline: "Salitre, niebla y curva junto al mar.",
    lede: "Compuesto que no se pone vidrioso con el aire de Viña y Con-Con.",
    body: "El Nox Costa nace de una observación simple: en Valparaíso el asfalto nunca está del todo seco. Añadimos un polímero resistente al salitre y un hombro más agresivo para las curvas de la costanera. Silencioso a 90, firme cuando el camión de al lado tira agua.",
    image: "/images/tire-nox.jpg",
    atmosphere: "/images/nix-costa.jpg",
    vehicle: "suv",
    season: "lluvia",
    wet: "A",
    fuel: "B",
    noise: 71,
    night: 92,
    sizes: [
      { width: 215, profile: 60, rim: 17, price: 174900, stock: "taller", load: "96", speed: "H" },
      { width: 225, profile: 55, rim: 18, price: 199900, stock: "48h", load: "98", speed: "V" },
    ],
  },
  {
    slug: "cumbre-ms",
    name: "Cumbre M+S",
    line: "cumbre",
    tagline: "Barro, nieve, ripio de altura.",
    lede: "El que pones en mayo y te olvidas hasta octubre.",
    body: "Láminas 3D en cada taco, flanco que no se corta en el ripio de Farellones, y un compuesto que no se pone piedra a −4 °C. El Cumbre M+S está homologado nieve (3PMSF). No es para la playa en enero. Es para la cordillera cuando el resto improvisó con un all-season de supermercado.",
    image: "/images/tire-cumbre.jpg",
    atmosphere: "/images/cumbre.jpg",
    vehicle: "suv",
    season: "nieve",
    wet: "B",
    fuel: "C",
    noise: 72,
    night: 90,
    featured: true,
    sizes: [
      { width: 215, profile: 65, rim: 16, price: 159900, stock: "taller", load: "98", speed: "T" },
      { width: 225, profile: 65, rim: 17, price: 189900, stock: "taller", load: "102", speed: "H" },
      { width: 235, profile: 55, rim: 18, price: 229900, stock: "48h", load: "100", speed: "H" },
    ],
  },
  {
    slug: "cumbre-ice",
    name: "Cumbre Ice",
    line: "cumbre",
    tagline: "Hielo negro. El que no se ve.",
    lede: "Micro-láminas para el tramo de Valle Nevado donde el sol no llega.",
    body: "Un compuesto más blando que el M+S y un dibujo más denso. El Cumbre Ice no lleva clavos: es un invernal alpino para quien sube de madrugada. En Santiago, en agosto, también frena mejor. En enero, se guarda.",
    image: "/images/tire-cumbre.jpg",
    atmosphere: "/images/cumbre.jpg",
    vehicle: "turismo",
    season: "nieve",
    wet: "B",
    fuel: "C",
    noise: 73,
    night: 91,
    sizes: [
      { width: 205, profile: 55, rim: 16, price: 169900, stock: "pedido", load: "91", speed: "H" },
      { width: 225, profile: 45, rim: 17, price: 219900, stock: "pedido", load: "91", speed: "V" },
    ],
  },
  {
    slug: "atacama-ht",
    name: "Atacama HT",
    line: "atacama",
    tagline: "El asfalto caliente es otro material.",
    lede: "UV, 40 grados, salar. El compuesto no se abre.",
    body: "En el norte el problema no es el agua: es el horno. El Atacama HT usa un polímero de alta temperatura y un antioxidante extra contra el UV. Dibujo cerrado para el kilometraje de Ruta 5. Pensado para el tramo La Serena–Calama: menos resistencia a la rodadura, menos desgaste en el hombro, menos sorpresa a las 15:00.",
    image: "/images/tire-atacama.jpg",
    atmosphere: "/images/atacama.jpg",
    vehicle: "suv",
    season: "verano",
    wet: "C",
    fuel: "A",
    noise: 68,
    night: 82,
    featured: true,
    sizes: [
      { width: 215, profile: 65, rim: 16, price: 149900, stock: "taller", load: "98", speed: "H" },
      { width: 235, profile: 60, rim: 17, price: 189900, stock: "taller", load: "102", speed: "H" },
      { width: 265, profile: 65, rim: 17, price: 239900, stock: "48h", load: "112", speed: "T" },
    ],
  },
  {
    slug: "carga-at",
    name: "Carga AT",
    line: "carga",
    tagline: "Ripio, carga, y la vuelta de noche.",
    lede: "El neumático de la Hilux que trabaja de verdad.",
    body: "Tacos grandes, puentes de refuerzo, flanco que aguanta el roce del matorral. El Carga AT no es un mud-terrain de revista: es un all-terrain que también rueda en autopista sin volverse insoportable. Índice de carga alto. Pensado para Ranger, L200, Hilux y Amarok con palé atrás.",
    image: "/images/tire-carga.jpg",
    atmosphere: "/images/carga-pickup.jpg",
    vehicle: "camioneta",
    season: "todo",
    wet: "B",
    fuel: "C",
    noise: 74,
    night: 83,
    featured: true,
    sizes: [
      { width: 265, profile: 70, rim: 16, price: 199900, stock: "taller", load: "112", speed: "T" },
      { width: 265, profile: 65, rim: 17, price: 219900, stock: "taller", load: "112", speed: "T" },
      { width: 255, profile: 70, rim: 16, price: 189900, stock: "48h", load: "111", speed: "T" },
      { width: 275, profile: 65, rim: 18, price: 269900, stock: "pedido", load: "116", speed: "T" },
    ],
  },
  {
    slug: "carga-ht",
    name: "Carga HT",
    line: "carga",
    tagline: "Camioneta de carretera, no de vitrina.",
    lede: "Más silencio que el AT, más hombro que un turismo.",
    body: "Para quien usa la camioneta como auto: colegio, carretera, un poco de tierra. Dibujo más cerrado, menor ruido, mismo flanco reforzado. El Carga HT es el que pone quien ya no quiere un AT que zumba a 120.",
    image: "/images/tire-carga.jpg",
    atmosphere: "/images/carga-pickup.jpg",
    vehicle: "camioneta",
    season: "verano",
    wet: "B",
    fuel: "B",
    noise: 71,
    night: 81,
    sizes: [
      { width: 265, profile: 65, rim: 17, price: 209900, stock: "taller", load: "112", speed: "H" },
      { width: 255, profile: 60, rim: 18, price: 229900, stock: "48h", load: "112", speed: "V" },
    ],
  },
  {
    slug: "velox-rs",
    name: "Velox RS",
    line: "velox",
    tagline: "Un contacto nítido. Nada más.",
    lede: "Compuesto blando, hombro rígido, ruido contenido.",
    body: "El Velox RS no simula un slick. Es un semi-slick legal, con dibujo suficiente para un chaparrón y bastante seco para un puerto de montaña un domingo. Índice W y Y. Si tu auto es un 320, un Golf GTI o un Civic Si, este es el que deja de hacer flotar la dirección.",
    image: "/images/tire-via.jpg",
    atmosphere: "/images/tread.jpg",
    vehicle: "sport",
    season: "verano",
    wet: "B",
    fuel: "C",
    noise: 71,
    night: 88,
    featured: true,
    sizes: [
      { width: 205, profile: 45, rim: 17, price: 189900, stock: "taller", load: "88", speed: "W" },
      { width: 225, profile: 45, rim: 17, price: 219900, stock: "taller", load: "91", speed: "Y" },
      { width: 225, profile: 40, rim: 18, price: 249900, stock: "48h", load: "92", speed: "Y" },
      { width: 245, profile: 40, rim: 18, price: 279900, stock: "pedido", load: "97", speed: "Y" },
    ],
  },
];

export const stockLabel: Record<Stock, string> = {
  taller: "En Huechuraba",
  "48h": "Llega en 48 h",
  pedido: "Bajo pedido · 7 días",
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getLine(id: LineId) {
  return lines.find((l) => l.id === id);
}

export function priceFrom(product: Product) {
  return Math.min(...product.sizes.map((s) => s.price));
}

export function sizeKey(s: Pick<Size, "width" | "profile" | "rim">) {
  return `${s.width}-${s.profile}-${s.rim}`;
}

export function parseSize(key: string) {
  const [width, profile, rim] = key.split("-").map(Number);
  return { width, profile, rim };
}

export const widths = [185, 195, 205, 215, 225, 235, 245, 255, 265, 275];
export const profiles = [40, 45, 50, 55, 60, 65, 70];
export const rims = [15, 16, 17, 18, 19, 20];
