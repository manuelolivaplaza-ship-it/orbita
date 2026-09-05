export type FamilyId =
  | "fierro"
  | "pernos"
  | "maderas"
  | "cemento"
  | "planchas"
  | "herramientas";

export type Unit = "tira" | "ciento" | "plancha" | "saco" | "m3" | "unidad" | "par";

export type Sku = {
  code: string;
  name: string;
  measure: string;
  norma: string;
  unit: Unit;
  unitLabel: string;
  priceIva: number;
  stock: "patio" | "48 h" | "a pedido";
  family: FamilyId;
  featured?: boolean;
  corte?: boolean;
  note?: string;
};

export type Family = {
  id: FamilyId;
  n: string;
  name: string;
  kicker: string;
  measure: string;
  lead: string;
  body: string;
  fromIva: number;
  image: string;
  alt: string;
  corte: boolean;
};

export const families: Family[] = [
  {
    id: "fierro",
    n: "01",
    name: "Fierro y perfiles",
    kicker: "Tira de 6 m",
    measure: "Ø 8–25 mm · 40×40 a costanera",
    lead: "A-63, liso y estructural. El patio se lee de norte a sur: estriado, cuadrado, costanera.",
    body: "Cortamos y doblamos en el mismo recinto. La tira sale a 6.000 mm; si la obra pide 3.150, se corta acá, no en la losa. Stock rotulado por diámetro y espesor.",
    fromIva: 2490,
    image: "/images/fierro.jpg",
    alt: "Perfiles cuadrados y fierro de construcción apilados con los extremos alineados, luz de norte en patio",
    corte: true,
  },
  {
    id: "pernos",
    n: "02",
    name: "Pernos y fijaciones",
    kicker: "Ciento y unidad",
    measure: "Ø 6–16 mm · hex, tarugo, anclaje",
    lead: "Lo que une el fierro a la losa. Hexagonal, carrocería, tarugo nylon, químico.",
    body: "Cajones rotulados, no a granel a ciegas. Se vende por ciento o por unidad cuando la OC lo pide. Grado 8.8 en hex estructural.",
    fromIva: 4200,
    image: "/images/pernos.jpg",
    alt: "Pernos, golillas y tuercas dispuestos en grilla sobre cartón técnico pálido",
    corte: false,
  },
  {
    id: "maderas",
    n: "03",
    name: "Maderas y tableros",
    kicker: "Plancha 1,22 × 2,44",
    measure: "Terciado, OSB, volcanita",
    lead: "Tablero que se puede leer de canto. Terciado, OSB, yeso-cartón. Sin canto abierto al sol.",
    body: "Se retira de canto, con fleje. No despachamos plancha suelta en pickup abierto si llueve. Corte de tablero a medida, con 24 h de aviso.",
    fromIva: 5590,
    image: "/images/madera.jpg",
    alt: "Pila de terciado pálido alineada al milímetro, viruta fina en el piso de hormigón",
    corte: true,
  },
  {
    id: "cemento",
    n: "04",
    name: "Cemento y áridos",
    kicker: "Saco y metro cúbico",
    measure: "25 kg · arena · grava 3/4″",
    lead: "Saco especial, arena gruesa, grava. Lo que no se puede dejar a la intemperie.",
    body: "Cemento bajo techo, rotación FIFO. Áridos por m³, con despacho en tolva o a granel según comuna. No vendemos saco abierto.",
    fromIva: 5490,
    image: "/images/cemento.jpg",
    alt: "Muro de sacos de cemento grises apilados bajo un ventanal alto, polvo en suspensión",
    corte: false,
  },
  {
    id: "planchas",
    n: "05",
    name: "Planchas y zinc",
    kicker: "Plancha y metro",
    measure: "0,35 a 1,5 mm · ondulada y lisa",
    lead: "Zinc, negra, galvanizada. El canto se alinea; el espesor se declara.",
    body: "Ondulada para cubierta, lisa para taller. Corte de plancha con 24 h. No prometemos color de post-pintado: el patio vende el material, no la fachada.",
    fromIva: 18900,
    image: "/images/zinc.jpg",
    alt: "Planchas de zinc ondulado y lisas apiladas, luz rasantando las ondas",
    corte: true,
  },
  {
    id: "herramientas",
    n: "06",
    name: "Herramientas y EPP",
    kicker: "Unidad y par",
    measure: "Esmeril, disco, guante, casco",
    lead: "Lo que está en el mesón, no en la vitrina. Herramienta de obra y protección.",
    body: "Esmeril, disco de corte, vaqueta, casco. Sin marcas inventadas ni ‘línea premium’. Si no está en patio, se dice.",
    fromIva: 1890,
    image: "/images/herramientas.jpg",
    alt: "Esmeril, prensas y escuadra alineados sobre un mesón de madera pálida",
    corte: false,
  },
];

export const skus: Sku[] = [
  {
    code: "ET-F08",
    name: "Fierro A-63",
    measure: "Ø 8 mm × 6 m",
    norma: "NCh 204 / A-63",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 2490,
    stock: "patio",
    family: "fierro",
    featured: true,
    corte: true,
  },
  {
    code: "ET-F10",
    name: "Fierro A-63",
    measure: "Ø 10 mm × 6 m",
    norma: "NCh 204 / A-63",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 3590,
    stock: "patio",
    family: "fierro",
    featured: true,
    corte: true,
  },
  {
    code: "ET-F12",
    name: "Fierro A-63",
    measure: "Ø 12 mm × 6 m",
    norma: "NCh 204 / A-63",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 5190,
    stock: "patio",
    family: "fierro",
    corte: true,
  },
  {
    code: "ET-P40",
    name: "Perfil cuadrado",
    measure: "40 × 40 × 2 mm × 6 m",
    norma: "SAE 1020",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 14900,
    stock: "patio",
    family: "fierro",
    featured: true,
    corte: true,
    note: "Corte y doblado en patio.",
  },
  {
    code: "ET-C80",
    name: "Costanera",
    measure: "80 × 40 × 15 × 3 mm × 6 m",
    norma: "galvanizado",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 26900,
    stock: "patio",
    family: "fierro",
    corte: true,
  },
  {
    code: "ET-L08",
    name: "Fierro liso redondo",
    measure: "Ø 8 mm × 6 m",
    norma: "SAE 1020",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 4270,
    stock: "patio",
    family: "fierro",
    corte: true,
  },
  {
    code: "ET-H840",
    name: "Perno hexagonal",
    measure: "Ø 8 × 40 mm",
    norma: "grado 8.8",
    unit: "ciento",
    unitLabel: "/ ciento",
    priceIva: 12800,
    stock: "patio",
    family: "pernos",
    featured: true,
  },
  {
    code: "ET-H1040",
    name: "Perno hexagonal",
    measure: "Ø 10 × 40 mm",
    norma: "grado 8.8",
    unit: "ciento",
    unitLabel: "/ ciento",
    priceIva: 16400,
    stock: "patio",
    family: "pernos",
  },
  {
    code: "ET-T08",
    name: "Tarugo nylon",
    measure: "Ø 8 mm",
    norma: "con tornillo",
    unit: "ciento",
    unitLabel: "/ ciento",
    priceIva: 4200,
    stock: "patio",
    family: "pernos",
  },
  {
    code: "ET-A08",
    name: "Anclaje químico",
    measure: "cartucho 300 ml",
    norma: "epoxy",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 18900,
    stock: "patio",
    family: "pernos",
  },
  {
    code: "ET-T15",
    name: "Terciado",
    measure: "15 mm · 1,22 × 2,44 m",
    norma: "interior",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 24900,
    stock: "patio",
    family: "maderas",
    featured: true,
    corte: true,
  },
  {
    code: "ET-O18",
    name: "OSB",
    measure: "18 mm · 1,22 × 2,44 m",
    norma: "structural",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 39900,
    stock: "patio",
    family: "maderas",
    corte: true,
  },
  {
    code: "ET-V10",
    name: "Volcanita",
    measure: "10 mm · 1,20 × 2,40 m",
    norma: "STD",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 5590,
    stock: "patio",
    family: "maderas",
    corte: true,
  },
  {
    code: "ET-C25",
    name: "Cemento especial",
    measure: "saco 25 kg",
    norma: "NCh 148",
    unit: "saco",
    unitLabel: "/ saco",
    priceIva: 5490,
    stock: "patio",
    family: "cemento",
    featured: true,
  },
  {
    code: "ET-AR",
    name: "Arena gruesa",
    measure: "metro cúbico",
    norma: "lavada",
    unit: "m3",
    unitLabel: "/ m³",
    priceIva: 42000,
    stock: "48 h",
    family: "cemento",
    note: "Despacho en tolva, según comuna.",
  },
  {
    code: "ET-GR",
    name: "Grava 3/4″",
    measure: "metro cúbico",
    norma: "árido",
    unit: "m3",
    unitLabel: "/ m³",
    priceIva: 42000,
    stock: "48 h",
    family: "cemento",
  },
  {
    code: "ET-Z35",
    name: "Zinc ondulado",
    measure: "0,35 mm · 1,00 × 2,00 m",
    norma: "galvanizado",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 18900,
    stock: "patio",
    family: "planchas",
    featured: true,
    corte: true,
  },
  {
    code: "ET-PN15",
    name: "Plancha negra",
    measure: "1,5 mm · 1,00 × 2,00 m",
    norma: "laminado frío",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 49790,
    stock: "patio",
    family: "planchas",
    corte: true,
  },
  {
    code: "ET-GAL",
    name: "Galvanizada lisa",
    measure: "0,85 mm · 1,20 × 2,40 m",
    norma: "Z275",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 38400,
    stock: "patio",
    family: "planchas",
    corte: true,
  },
  {
    code: "ET-E45",
    name: "Esmeril angular",
    measure: "4½″ · 850 W",
    norma: "220 V",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 54900,
    stock: "patio",
    family: "herramientas",
  },
  {
    code: "ET-D45",
    name: "Disco de corte",
    measure: "4½″",
    norma: "acero",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 1890,
    stock: "patio",
    family: "herramientas",
    featured: true,
  },
  {
    code: "ET-GV",
    name: "Guante vaqueta",
    measure: "par, talla L",
    norma: "cuero",
    unit: "par",
    unitLabel: "/ par",
    priceIva: 4490,
    stock: "patio",
    family: "herramientas",
  },
  {
    code: "ET-CV",
    name: "Casco ventilado",
    measure: "ajuste ratchet",
    norma: "NCh 461",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 7900,
    stock: "patio",
    family: "herramientas",
  },
];

export const giros = [
  "Constructora",
  "Maestranza",
  "Maestro mayor",
  "Instalador",
  "Obra particular",
  "Otro",
] as const;

export const faqs = [
  {
    q: "¿Cómo cotizo?",
    a: "Por el formulario, por WhatsApp o al mesón. Manda familia, medida y cantidad. Si es fierro, el largo de corte. Respondemos en horario de patio, no a las once de la noche.",
  },
  {
    q: "¿Despacho a obra o retiro en local?",
    a: "Retiro en 10 de Julio o en Puente Alto, con OC o boleta. Despacho RM en 24 h si la lista entra antes de las 14:00. El flete se cotiza por comuna y tonelaje; no hay tarifa única escondida.",
  },
  {
    q: "¿Cortan y doblan fierro a medida?",
    a: "Sí. Corte incluido en tiras de hasta 6 m. Corte extra: $900. Doblado: $1.200 por curva. Listas de corte antes de las 14:00 salen al día siguiente. No cortamos sin medida escrita.",
  },
  {
    q: "¿Venden por mayor y por menor?",
    a: "Las dos. El mesón atiende al maestro con tres tiras y a la constructora con la guía. Pedido mínimo de despacho: $80.000 con IVA. Retiro en local, desde una unidad.",
  },
  {
    q: "¿Boleta, factura y crédito?",
    a: "Boleta y factura electrónica. Crédito a 30 días con evaluación: RUT, giro en SII y primeras guías. No se abre cuenta el mismo día si el SII no cuadra.",
  },
  {
    q: "¿Cambios por falla o medida errónea?",
    a: "Material con falla de fábrica se cambia con la guía. Si la medida la mandó la obra y salió mal, el corte ya está hecho: se cobra. Trae RUT y OC al mesón.",
  },
];

export function familyById(id: string) {
  return families.find((item) => item.id === id);
}

export function skusByFamily(id: FamilyId) {
  return skus.filter((item) => item.family === id);
}

export function featuredSkus() {
  return skus.filter((item) => item.featured);
}

export function familyFromPrice(id: FamilyId) {
  const prices = skusByFamily(id).map((item) => item.priceIva);
  return Math.min(...prices);
}
