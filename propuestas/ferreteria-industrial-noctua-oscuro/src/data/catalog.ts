export type FamilyId =
  | "fierro"
  | "pernos"
  | "planchas"
  | "soldadura"
  | "maderas"
  | "herramientas";

export type Unit = "tira" | "ciento" | "plancha" | "unidad" | "par" | "kg";

export type Sku = {
  code: string;
  name: string;
  measure: string;
  norma: string;
  unit: Unit;
  unitLabel: string;
  priceIva: number;
  stock: "nave" | "48 h" | "a pedido";
  family: FamilyId;
  featured?: boolean;
  corte?: boolean;
  note?: string;
};

export type Family = {
  id: FamilyId;
  bay: string;
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
    bay: "Norte",
    name: "Fierro y perfiles",
    kicker: "Tira de 6.000 mm",
    measure: "Ø 8–25 mm · 40×40 a costanera",
    lead: "A-63, liso y estructural. La nave se lee de norte a sur: estriado, cuadrado, costanera.",
    body: "Cortamos y doblamos en el mismo recinto, de noche. La tira sale a 6.000 mm; si la obra pide 3.150, se anida acá. Stock rotulado por diámetro y espesor.",
    fromIva: 2590,
    image: "/images/fierro.jpg",
    alt: "Cabezas de fierro de construcción alineadas, cascarilla y óxido, luz de bahía al fondo",
    corte: true,
  },
  {
    id: "pernos",
    bay: "Poniente",
    name: "Pernos y anclajes",
    kicker: "Ciento y unidad",
    measure: "Ø 6–16 mm · hex, tarugo, químico",
    lead: "Lo que une el fierro a la losa cuando la planta no puede esperar el día.",
    body: "Cajones rotulados, no a granel a ciegas. Se vende por ciento o por unidad si la OC lo pide. Grado 8.8 en hex estructural.",
    fromIva: 4490,
    image: "/images/pernos.jpg",
    alt: "Pernos hexagonales y golillas en un cajón de acero, luz de sodio en el canto",
    corte: false,
  },
  {
    id: "planchas",
    bay: "Oriente",
    name: "Planchas y zinc",
    kicker: "Plancha y metro",
    measure: "0,35 a 1,5 mm · ondulada y lisa",
    lead: "Zinc, negra, galvanizada. El canto se alinea; el espesor se declara.",
    body: "Ondulada para cubierta, lisa para taller. Corte de plancha con aviso antes de las 22:00. El patio vende el material, no el color de fachada.",
    fromIva: 19800,
    image: "/images/nave.jpg",
    alt: "Pilas de perfiles y planchas en la nave de noche, pasillo húmedo al centro",
    corte: true,
  },
  {
    id: "soldadura",
    bay: "Centro",
    name: "Soldadura",
    kicker: "Electrodo y alambre",
    measure: "6013 · 7018 · MIG 0,8",
    lead: "Lo que pide una parada de planta a las once de la noche.",
    body: "Electrodo 6013 y 7018, alambre MIG, disco de desbaste. Sin teatro de marcas: si no está en nave, se dice.",
    fromIva: 8900,
    image: "/images/corte.jpg",
    alt: "Cara de corte fresca de un perfil cuadrado, viruta sobre hormigón húmedo",
    corte: false,
  },
  {
    id: "maderas",
    bay: "Sur",
    name: "Maderas y tableros",
    kicker: "Plancha 1,22 × 2,44",
    measure: "Terciado, OSB, volcanita",
    lead: "Tablero de canto, para moldaje de vaciado nocturno.",
    body: "Se retira de canto, con fleje. No despachamos plancha suelta en pickup abierto si llueve. Corte de tablero a medida, con 24 h de aviso.",
    fromIva: 5790,
    image: "/images/madera.jpg",
    alt: "Cantos de terciado y OSB apilados en la nave, luz de bahía rasante",
    corte: true,
  },
  {
    id: "herramientas",
    bay: "Mesón",
    name: "Herramientas y EPP",
    kicker: "Unidad y par",
    measure: "Esmeril, disco, guante, casco",
    lead: "Lo que está en el mesón, no en la vitrina. Obra y protección de turno.",
    body: "Esmeril, disco de corte, vaqueta, casco. Si no está en patio, se dice. Linterna de casco para el turno.",
    fromIva: 1990,
    image: "/images/pernos.jpg",
    alt: "Cajón de fijaciones y herramientas de mesón bajo luz de sodio",
    corte: false,
  },
];

export const skus: Sku[] = [
  {
    code: "NT-F08",
    name: "Fierro A-63",
    measure: "Ø 8 mm × 6.000 mm",
    norma: "NCh 204 / A-63",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 2590,
    stock: "nave",
    family: "fierro",
    featured: true,
    corte: true,
  },
  {
    code: "NT-F10",
    name: "Fierro A-63",
    measure: "Ø 10 mm × 6.000 mm",
    norma: "NCh 204 / A-63",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 3790,
    stock: "nave",
    family: "fierro",
    featured: true,
    corte: true,
  },
  {
    code: "NT-F12",
    name: "Fierro A-63",
    measure: "Ø 12 mm × 6.000 mm",
    norma: "NCh 204 / A-63",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 5490,
    stock: "nave",
    family: "fierro",
    corte: true,
  },
  {
    code: "NT-P40",
    name: "Perfil cuadrado",
    measure: "40 × 40 × 2 mm × 6.000 mm",
    norma: "SAE 1020",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 15800,
    stock: "nave",
    family: "fierro",
    featured: true,
    corte: true,
    note: "Corte y doblado en nave.",
  },
  {
    code: "NT-C80",
    name: "Costanera",
    measure: "80 × 40 × 15 × 3 mm × 6.000 mm",
    norma: "galvanizado",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 27900,
    stock: "nave",
    family: "fierro",
    corte: true,
  },
  {
    code: "NT-L08",
    name: "Fierro liso redondo",
    measure: "Ø 8 mm × 6.000 mm",
    norma: "SAE 1020",
    unit: "tira",
    unitLabel: "/ tira",
    priceIva: 4490,
    stock: "nave",
    family: "fierro",
    corte: true,
  },
  {
    code: "NT-H840",
    name: "Perno hexagonal",
    measure: "Ø 8 × 40 mm",
    norma: "grado 8.8",
    unit: "ciento",
    unitLabel: "/ ciento",
    priceIva: 13400,
    stock: "nave",
    family: "pernos",
    featured: true,
  },
  {
    code: "NT-H1040",
    name: "Perno hexagonal",
    measure: "Ø 10 × 40 mm",
    norma: "grado 8.8",
    unit: "ciento",
    unitLabel: "/ ciento",
    priceIva: 17200,
    stock: "nave",
    family: "pernos",
  },
  {
    code: "NT-T08",
    name: "Tarugo nylon",
    measure: "Ø 8 mm",
    norma: "con tornillo",
    unit: "ciento",
    unitLabel: "/ ciento",
    priceIva: 4490,
    stock: "nave",
    family: "pernos",
  },
  {
    code: "NT-A08",
    name: "Anclaje químico",
    measure: "cartucho 300 ml",
    norma: "epoxy",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 19800,
    stock: "nave",
    family: "pernos",
  },
  {
    code: "NT-Z35",
    name: "Zinc ondulado",
    measure: "0,35 mm · 1,00 × 2,00 m",
    norma: "galvanizado",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 19800,
    stock: "nave",
    family: "planchas",
    featured: true,
    corte: true,
  },
  {
    code: "NT-PN15",
    name: "Plancha negra",
    measure: "1,5 mm · 1,00 × 2,00 m",
    norma: "laminado frío",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 51200,
    stock: "nave",
    family: "planchas",
    corte: true,
  },
  {
    code: "NT-GAL",
    name: "Galvanizada lisa",
    measure: "0,85 mm · 1,20 × 2,40 m",
    norma: "Z275",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 39800,
    stock: "nave",
    family: "planchas",
    corte: true,
  },
  {
    code: "NT-E13",
    name: "Electrodo 6013",
    measure: "Ø 3,2 mm · 1 kg",
    norma: "AWS A5.1",
    unit: "kg",
    unitLabel: "/ kg",
    priceIva: 8900,
    stock: "nave",
    family: "soldadura",
    featured: true,
  },
  {
    code: "NT-E18",
    name: "Electrodo 7018",
    measure: "Ø 3,2 mm · 1 kg",
    norma: "AWS A5.1",
    unit: "kg",
    unitLabel: "/ kg",
    priceIva: 12400,
    stock: "nave",
    family: "soldadura",
  },
  {
    code: "NT-MIG",
    name: "Alambre MIG",
    measure: "Ø 0,8 mm · 5 kg",
    norma: "ER70S-6",
    unit: "unidad",
    unitLabel: "/ carrete",
    priceIva: 24900,
    stock: "nave",
    family: "soldadura",
  },
  {
    code: "NT-T15",
    name: "Terciado",
    measure: "15 mm · 1,22 × 2,44 m",
    norma: "interior",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 25900,
    stock: "nave",
    family: "maderas",
    featured: true,
    corte: true,
  },
  {
    code: "NT-O18",
    name: "OSB",
    measure: "18 mm · 1,22 × 2,44 m",
    norma: "structural",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 41200,
    stock: "nave",
    family: "maderas",
    corte: true,
  },
  {
    code: "NT-V10",
    name: "Volcanita",
    measure: "10 mm · 1,20 × 2,40 m",
    norma: "STD",
    unit: "plancha",
    unitLabel: "/ plancha",
    priceIva: 5790,
    stock: "nave",
    family: "maderas",
    corte: true,
  },
  {
    code: "NT-E45",
    name: "Esmeril angular",
    measure: "4½″ · 850 W",
    norma: "220 V",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 56900,
    stock: "nave",
    family: "herramientas",
  },
  {
    code: "NT-D45",
    name: "Disco de corte",
    measure: "4½″",
    norma: "acero",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 1990,
    stock: "nave",
    family: "herramientas",
    featured: true,
  },
  {
    code: "NT-GV",
    name: "Guante vaqueta",
    measure: "par, talla L",
    norma: "cuero",
    unit: "par",
    unitLabel: "/ par",
    priceIva: 4690,
    stock: "nave",
    family: "herramientas",
  },
  {
    code: "NT-CV",
    name: "Casco ventilado",
    measure: "ajuste ratchet",
    norma: "NCh 461",
    unit: "unidad",
    unitLabel: "/ un.",
    priceIva: 8200,
    stock: "nave",
    family: "herramientas",
  },
];

export const giros = [
  "Constructora",
  "Maestranza",
  "Mantención industrial",
  "Parada de planta",
  "Contratista",
  "Maestro mayor",
  "Obra particular",
] as const;

export const mesón = [
  {
    q: "¿Hasta qué hora entra la lista de corte?",
    a: "Hasta las 22:00. Si entra antes, sale a las 05:00 con la guía. Después de las 22:00 queda para el turno siguiente. No cortamos de oído ni por WhatsApp de madrugada sin medida escrita.",
  },
  {
    q: "¿Despacho a obra o retiro en nave?",
    a: "Retiro en Lo Echevers, Quilicura, con OC o boleta. Despacho RM de madrugada si la lista entra antes de las 22:00. El flete se cotiza por comuna y tonelaje; no hay tarifa única escondida.",
  },
  {
    q: "¿Boleta, factura y crédito?",
    a: "Boleta y factura electrónica. Crédito a 30 días con evaluación: RUT, giro en SII y primeras guías. De noche no se abre cuenta si el SII no cuadra.",
  },
  {
    q: "¿Si la medida de la obra sale mal?",
    a: "Material con falla de fábrica se cambia con la guía. Si la medida la mandó la obra y ya está el corte, se cobra. Trae RUT y OC al mesón.",
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
