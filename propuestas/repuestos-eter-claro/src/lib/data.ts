export type Stock = "mostrador" | "24h" | "consultar";

export type Family = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  lead: string;
  image: string;
  imageAlt: string;
};

export type Piece = {
  slug: string;
  sku: string;
  name: string;
  family: string;
  priceFrom: number;
  unit: string;
  lead: string;
  fits: string;
  image: string;
  imageAlt: string;
  stock: Stock;
  oem: string;
};

export const families: Family[] = [
  {
    slug: "frenos",
    index: "01",
    name: "Frenos",
    kicker: "Detenerse es oficio",
    lead: "Pastillas, discos, líquido. El cruce es por eje, no por ojo.",
    image: "/images/pastillas.jpg",
    imageAlt:
      "Par de pastillas de freno de pie sobre un charco quieto, un destello en el chaflán",
  },
  {
    slug: "motor",
    index: "02",
    name: "Motor",
    kicker: "Lo que enciende",
    lead: "Bujías, distribución, bomba de agua. La ficha lleva cilindrada.",
    image: "/images/bujias.jpg",
    imageAlt: "Cuatro bujías en fila sobre agua quieta, en una nave con niebla",
  },
  {
    slug: "filtros",
    index: "03",
    name: "Filtros",
    kicker: "Aceite, aire, cabina",
    lead: "El mantenimiento que se hace altiro. Referencia cruzada con OEM.",
    image: "/images/filtro.jpg",
    imageAlt: "Filtro de aceite de aluminio cepillado de pie en un charco",
  },
  {
    slug: "suspension",
    index: "04",
    name: "Suspensión",
    kicker: "Lo que apoya",
    lead: "Amortiguadores, rótulas, terminales. Par, no unidad suelta.",
    image: "/images/amortiguador.jpg",
    imageAlt: "Amortiguador de vástago cromado de pie en agua, un rayo de luz",
  },
  {
    slug: "electrico",
    index: "05",
    name: "Eléctrico",
    kicker: "12 volts, sin adivinar",
    lead: "Baterías, alternadores, arranque. Amperaje según ficha, no según oferta.",
    image: "/images/bateria.jpg",
    imageAlt: "Batería de 12 volts mate sobre un charco, bornes al sol rasante",
  },
  {
    slug: "refrigeracion",
    index: "06",
    name: "Refrigeración",
    kicker: "El motor a temperatura",
    lead: "Bombas, termostatos, radiadores. Si hierve en el taco, partimos por aquí.",
    image: "/images/bomba.jpg",
    imageAlt:
      "Bomba de agua de aluminio con el impulsor a la vista, sobre agua quieta",
  },
];

export const pieces: Piece[] = [
  {
    slug: "pastillas-delanteras",
    sku: "FR-218",
    name: "Pastillas delanteras",
    family: "frenos",
    priceFrom: 28900,
    unit: "el juego",
    lead: "Cerámica, bajo polvo. Se cruzan por eje y diámetro de disco, no por «parecido».",
    fits: "Toyota Yaris, Hyundai Accent, Kia Rio, Chevrolet Sail — 2015 a 2024",
    image: "/images/pastillas.jpg",
    imageAlt: "Par de pastillas de freno de pie sobre un charco quieto",
    stock: "mostrador",
    oem: "04465-0D100",
  },
  {
    slug: "disco-ventilado",
    sku: "FR-440",
    name: "Disco ventilado",
    family: "frenos",
    priceFrom: 42900,
    unit: "la unidad",
    lead: "Fundición gris, perforado. Se vende en par si el desgaste del otro pasa de 0,8 mm.",
    fits: "Mazda 3, Toyota Corolla, Hyundai Tucson — 2014 a 2023",
    image: "/images/hero.jpg",
    imageAlt: "Disco de freno ventilado de pie en un charco, nave con niebla",
    stock: "mostrador",
    oem: "43512-02140",
  },
  {
    slug: "pastillas-traseras",
    sku: "FR-274",
    name: "Pastillas traseras",
    family: "frenos",
    priceFrom: 24900,
    unit: "el juego",
    lead: "Semi-metálicas. En autos con freno de mano en el caliper, el kit incluye los accesorios.",
    fits: "Nissan Versa, Suzuki Swift, VW Polo — 2016 a 2025",
    image: "/images/pastillas.jpg",
    imageAlt: "Pastillas de freno sobre agua quieta",
    stock: "24h",
    oem: "D1060-3TA0A",
  },
  {
    slug: "liquido-dot4",
    sku: "FR-090",
    name: "Líquido DOT 4",
    family: "frenos",
    priceFrom: 7900,
    unit: "el litro",
    lead: "Punto de ebullición seco 230 °C. Si el pedal se pone esponjoso en bajada, cambia el fluido.",
    fits: "Uso general bencina y diésel. No mezclar con DOT 5 silicona.",
    image: "/images/pastillas.jpg",
    imageAlt: "Pastillas de freno, familia de fluidos y fricción",
    stock: "mostrador",
    oem: "DOT4-1L",
  },
  {
    slug: "bujias-iridio",
    sku: "MO-104",
    name: "Bujías iridio",
    family: "motor",
    priceFrom: 32900,
    unit: "el juego de 4",
    lead: "Electrodo fino. Intervalo 80.000 km si el motor no come aceite.",
    fits: "Toyota 1NZ / 2ZR, Hyundai Kappa, Suzuki K14B",
    image: "/images/bujias.jpg",
    imageAlt: "Cuatro bujías en fila sobre un charco",
    stock: "mostrador",
    oem: "SK16PR-A11",
  },
  {
    slug: "kit-distribucion",
    sku: "MO-331",
    name: "Kit de distribución",
    family: "motor",
    priceFrom: 89000,
    unit: "el kit",
    lead: "Correa, tensor, bomba de agua cuando el diseño la lleva detrás. No se vende la correa sola.",
    fits: "Peugeot 1.6, Chevrolet 1.4, VW EA111 — confirmar motor",
    image: "/images/bomba.jpg",
    imageAlt: "Bomba de agua de aluminio, pieza del kit de distribución",
    stock: "consultar",
    oem: "K015611XS",
  },
  {
    slug: "bomba-agua",
    sku: "MO-188",
    name: "Bomba de agua",
    family: "motor",
    priceFrom: 38500,
    unit: "la unidad",
    lead: "Carcasa de aluminio, impulsor de metal. Si gotea por el orificio de alivio, no se repara.",
    fits: "Toyota Hilux 2.4, Mitsubishi L200, Ford Ranger",
    image: "/images/bomba.jpg",
    imageAlt: "Bomba de agua con el impulsor a la vista",
    stock: "24h",
    oem: "16100-0C100",
  },
  {
    slug: "filtro-aceite",
    sku: "FI-012",
    name: "Filtro de aceite",
    family: "filtros",
    priceFrom: 4900,
    unit: "la unidad",
    lead: "Roscado, válvula antirretorno. Se cambia con el aceite, no «cuando se acuerde».",
    fits: "Toyota, Hyundai, Kia, Suzuki — cruce por rosca y junta",
    image: "/images/filtro.jpg",
    imageAlt: "Filtro de aceite de aluminio cepillado de pie en agua",
    stock: "mostrador",
    oem: "90915-YZZD2",
  },
  {
    slug: "filtro-aire",
    sku: "FI-044",
    name: "Filtro de aire",
    family: "filtros",
    priceFrom: 8900,
    unit: "la unidad",
    lead: "Panel de celulosa. En Santiago, cada 10.000 km si el auto vive en avenida.",
    fits: "Hyundai Tucson, Kia Sportage, Chevrolet Tracker",
    image: "/images/filtro.jpg",
    imageAlt: "Filtro de aceite, familia de filtración",
    stock: "mostrador",
    oem: "28113-F2000",
  },
  {
    slug: "filtro-cabina",
    sku: "FI-071",
    name: "Filtro de cabina",
    family: "filtros",
    priceFrom: 9900,
    unit: "la unidad",
    lead: "Carbón activado. El olor a humedad en el aire acondicionado casi siempre es este filtro.",
    fits: "Mazda CX-5, Toyota RAV4, Honda CR-V, Nissan Qashqai",
    image: "/images/filtro.jpg",
    imageAlt: "Filtro cilíndrico sobre agua, familia de cabina y motor",
    stock: "mostrador",
    oem: "87139-0R090",
  },
  {
    slug: "filtro-combustible",
    sku: "FI-090",
    name: "Filtro de combustible",
    family: "filtros",
    priceFrom: 12900,
    unit: "la unidad",
    lead: "En diésel no se improvisan. Si el auto patea en frío, partimos por aquí.",
    fits: "Toyota Hilux, Mitsubishi L200, VW Amarok, Ford Ranger",
    image: "/images/filtro.jpg",
    imageAlt: "Filtro de aceite cepillado, familia de combustible",
    stock: "24h",
    oem: "23390-0L040",
  },
  {
    slug: "amortiguador-delantero",
    sku: "SU-150",
    name: "Amortiguador delantero",
    family: "suspension",
    priceFrom: 54900,
    unit: "la unidad · se vende en par",
    lead: "Presurizado. El vástago con óleo es recambio, no limpieza. Se cambia el par.",
    fits: "Suzuki Swift, Kia Morning, Hyundai Grand i10, Chevrolet Spark",
    image: "/images/amortiguador.jpg",
    imageAlt: "Amortiguador de vástago cromado de pie en un charco",
    stock: "mostrador",
    oem: "48510-52R10",
  },
  {
    slug: "rotula-inferior",
    sku: "SU-206",
    name: "Rótula inferior",
    family: "suspension",
    priceFrom: 18900,
    unit: "la unidad",
    lead: "Si hay holgura en el cajón, no se suelda. Preguntamos lado y si lleva prensa o tornillo.",
    fits: "Toyota Hilux, Mitsubishi L200, Ford Ranger",
    image: "/images/rodamiento.jpg",
    imageAlt: "Rodamiento de acero y latón, familia de apoyo",
    stock: "24h",
    oem: "43330-09590",
  },
  {
    slug: "terminal-direccion",
    sku: "SU-218",
    name: "Terminal de dirección",
    family: "suspension",
    priceFrom: 14900,
    unit: "la unidad",
    lead: "Tras el cambio, alineación. El mostrador no alinea: te dejamos el par listo para el taller.",
    fits: "Hyundai Accent, Kia Rio, Chevrolet Sail, Nissan Versa",
    image: "/images/rodamiento.jpg",
    imageAlt: "Rodamiento de precisión, familia de dirección",
    stock: "mostrador",
    oem: "56820-1R000",
  },
  {
    slug: "rodamiento-rueda",
    sku: "SU-340",
    name: "Rodamiento de rueda",
    family: "suspension",
    priceFrom: 42900,
    unit: "la unidad",
    lead: "Si zumba desde 60 km/h y calla al cambiar de pista, es este. Preguntamos ABS sí o no.",
    fits: "Mazda 3, Toyota Corolla, VW Polo, Peugeot 208",
    image: "/images/rodamiento.jpg",
    imageAlt: "Rodamiento de acero con jaula color latón, de pie en agua",
    stock: "mostrador",
    oem: "42450-0D090",
  },
  {
    slug: "bateria-60ah",
    sku: "EL-060",
    name: "Batería 12 V 60 Ah",
    family: "electrico",
    priceFrom: 89900,
    unit: "la unidad · con salva",
    lead: "Bornes estándar. Mides el consumo del auto, no adivinamos amperaje por el tamaño de la caja.",
    fits: "Sedanes y citycars bencina. Confirmar CCA y bandeja.",
    image: "/images/bateria.jpg",
    imageAlt: "Batería de 12 volts mate sobre un charco en la nave",
    stock: "mostrador",
    oem: "80D26L",
  },
  {
    slug: "alternador",
    sku: "EL-140",
    name: "Alternador",
    family: "electrico",
    priceFrom: 149000,
    unit: "la unidad",
    lead: "Remanufacturado con garantía de 6 meses. Si la luz de batería parpadea en ralentí, partimos por aquí.",
    fits: "Hyundai Tucson, Kia Sportage, Toyota RAV4",
    image: "/images/bateria.jpg",
    imageAlt: "Batería, familia eléctrica",
    stock: "consultar",
    oem: "37300-2B000",
  },
  {
    slug: "motor-arranque",
    sku: "EL-155",
    name: "Motor de arranque",
    family: "electrico",
    priceFrom: 129000,
    unit: "la unidad",
    lead: "Si da un golpe y no gira, no es la batería. Pedimos número de dientes y si es reducida.",
    fits: "Chevrolet Sail, Suzuki Swift, Nissan Versa",
    image: "/images/bateria.jpg",
    imageAlt: "Batería de 12 volts, familia de arranque",
    stock: "24h",
    oem: "28100-1R000",
  },
  {
    slug: "termostato",
    sku: "RE-022",
    name: "Termostato",
    family: "refrigeracion",
    priceFrom: 12900,
    unit: "la unidad",
    lead: "Apertura 82 °C o 88 °C según motor. Si el auto no toma temperatura, no es el sensor primero.",
    fits: "Toyota 1NZ / 2ZR, Hyundai Gamma, Suzuki M15A",
    image: "/images/bomba.jpg",
    imageAlt: "Bomba de agua, familia de refrigeración",
    stock: "mostrador",
    oem: "90916-03100",
  },
  {
    slug: "radiador",
    sku: "RE-310",
    name: "Radiador",
    family: "refrigeracion",
    priceFrom: 119000,
    unit: "la unidad",
    lead: "Aluminio, tanques plásticos. Pedimos si lleva sensor y si el electro va delante o detrás.",
    fits: "Kia Morning, Hyundai Grand i10, Chevrolet Spark, Suzuki Alto",
    image: "/images/bomba.jpg",
    imageAlt: "Bomba de agua de aluminio, familia de radiador",
    stock: "consultar",
    oem: "25310-1R000",
  },
];

export const featuredSlug = "disco-ventilado";

export const vehicles: Record<string, string[]> = {
  Toyota: ["Yaris", "Corolla", "RAV4", "Hilux", "Raize"],
  Hyundai: ["Accent", "Tucson", "Grand i10", "Creta", "Santa Fe"],
  Chevrolet: ["Sail", "Spark", "Tracker", "Colorado"],
  Kia: ["Morning", "Rio", "Sportage", "Soluto"],
  Nissan: ["Versa", "Qashqai", "NP300", "Kicks"],
  Suzuki: ["Swift", "Baleno", "Vitara", "Jimny", "Alto"],
  Mazda: ["3", "CX-5", "CX-30"],
  Peugeot: ["208", "2008", "301"],
  Volkswagen: ["Gol", "Polo", "T-Cross", "Amarok"],
  Ford: ["Ranger", "Territory"],
  Mitsubishi: ["L200", "Outlander", "ASX"],
  Honda: ["Civic", "CR-V", "HR-V"],
  MG: ["ZS", "3", "5"],
};

export const years = Array.from({ length: 16 }, (_, i) => 2026 - i);

export const cruce = [
  {
    index: "01",
    title: "La ficha",
    body: "Patente, o marca, modelo, año y motor. Sin eso, no cotizamos. El parecido engaña.",
  },
  {
    index: "02",
    title: "El cruce",
    body: "OEM y equivalentes. Si hay dos calidades, te las ponemos en la mesa con precio.",
  },
  {
    index: "03",
    title: "La pieza",
    body: "Retiro en Independencia o despacho hoy en la RM si cruzas antes de las 13:00.",
  },
];

export const facts = [
  { value: "14.200", label: "referencias en ficha" },
  { value: "Hoy", label: "despacho en la RM" },
  { value: "6 min", label: "desde metro Hospitales" },
  { value: "IVA", label: "incluido en el desde" },
];

export const comunasHoy = [
  "Independencia",
  "Recoleta",
  "Huechuraba",
  "Conchalí",
  "Quilicura",
  "Santiago",
  "Providencia",
  "Ñuñoa",
  "Las Condes",
  "Vitacura",
  "Lo Barnechea",
  "Renca",
  "Quinta Normal",
  "Estación Central",
  "Maipú",
  "Pudahuel",
  "La Florida",
  "Macul",
  "Peñalolén",
  "La Reina",
  "San Miguel",
  "La Cisterna",
  "San Bernardo",
  "Puente Alto",
  "Cerrillos",
  "Lo Prado",
  "Cerro Navia",
];

export const stockLabel: Record<Stock, string> = {
  mostrador: "En mostrador",
  "24h": "Llega en 24 h",
  consultar: "Se confirma",
};

export function familyBySlug(slug: string) {
  return families.find((item) => item.slug === slug);
}

export function pieceBySlug(slug: string) {
  return pieces.find((item) => item.slug === slug);
}

export function piecesByFamily(slug: string) {
  return pieces.filter((item) => item.family === slug);
}

export function featuredPiece() {
  return pieceBySlug(featuredSlug)!;
}
