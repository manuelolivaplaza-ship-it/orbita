export type Stock = "bahia" | "24h" | "cruce";

export type FamilyId =
  | "frenos"
  | "motor"
  | "filtros"
  | "suspension"
  | "electrico"
  | "optica"
  | "refrigeracion"
  | "transmision";

export type Family = {
  id: FamilyId;
  index: string;
  bay: string;
  name: string;
  kicker: string;
  lead: string;
  image: string;
  alt: string;
  fromIva: number;
};

export type Piece = {
  slug: string;
  sku: string;
  name: string;
  family: FamilyId;
  priceIva: number;
  unit: string;
  lead: string;
  fits: string;
  image: string;
  alt: string;
  stock: Stock;
  oem: string;
  spec: string;
  torque?: string;
};

export type Vehicle = {
  id: string;
  plates: string[];
  marca: string;
  modelo: string;
  year: number;
  motor: string;
  combustible: "Bencina" | "Diésel";
  segmento: string;
  pieces: string[];
};

export const families: Family[] = [
  {
    id: "frenos",
    index: "01",
    bay: "Bahía A",
    name: "Frenos",
    kicker: "Detenerse es oficio",
    lead: "Pastillas, discos, líquido. El cruce es por eje y diámetro, no por ojo.",
    image: "/images/disco.jpg",
    alt: "Disco de freno ventilado de pie, iluminado como una luna sobre acero negro",
    fromIva: 7_900,
  },
  {
    id: "motor",
    index: "02",
    bay: "Bahía B",
    name: "Motor",
    kicker: "Lo que enciende",
    lead: "Bujías, distribución, bomba. La ficha lleva cilindrada y código de motor.",
    image: "/images/bujias.jpg",
    alt: "Cuatro bujías de iridio en fila sobre acero negro",
    fromIva: 32_900,
  },
  {
    id: "filtros",
    index: "03",
    bay: "Bahía C",
    name: "Filtros",
    kicker: "Aceite, aire, cabina, diésel",
    lead: "El mantenimiento que se hace altiro. Referencia cruzada con OEM.",
    image: "/images/filtro.jpg",
    alt: "Filtro de aceite de pie sobre hormigón oscuro, luz de sodio al costado",
    fromIva: 4_900,
  },
  {
    id: "suspension",
    index: "04",
    bay: "Bahía D",
    name: "Suspensión",
    kicker: "Lo que apoya",
    lead: "Amortiguadores, rótulas, terminales. Par, no unidad suelta.",
    image: "/images/amortiguador.jpg",
    alt: "Amortiguador de vástago cromado de pie, un hilo de luz ámbar en el vástago",
    fromIva: 18_900,
  },
  {
    id: "electrico",
    index: "05",
    bay: "Bahía E",
    name: "Eléctrico",
    kicker: "12 volts, sin adivinar",
    lead: "Baterías, alternadores. Amperaje según ficha, no según oferta.",
    image: "/images/bateria.jpg",
    alt: "Batería de 12 volts sobre un pallet de acero, bornes con un destello",
    fromIva: 89_900,
  },
  {
    id: "optica",
    index: "06",
    bay: "Bahía F",
    name: "Óptica",
    kicker: "Ver de noche",
    lead: "Ópticas, ampolletas, neblineros. El lado se nombra: derecho o izquierdo.",
    image: "/images/optica.jpg",
    alt: "Óptica LED sobre acero negro, el vidrio toma la lámpara de sodio",
    fromIva: 4_500,
  },
  {
    id: "refrigeracion",
    index: "07",
    bay: "Bahía G",
    name: "Refrigeración",
    kicker: "El motor a temperatura",
    lead: "Bombas, termostatos, radiadores. Si hierve en el taco, partimos por aquí.",
    image: "/images/bomba.jpg",
    alt: "Bomba de agua de aluminio con el impulsor a la vista",
    fromIva: 14_900,
  },
  {
    id: "transmision",
    index: "08",
    bay: "Bahía H",
    name: "Transmisión",
    kicker: "Lo que empuja",
    lead: "Kits de embrague, volantes, retenes. No se vende el disco solo.",
    image: "/images/embrague.jpg",
    alt: "Disco de embrague sobre acero negro, el estriado toma un anillo de luz",
    fromIva: 189_000,
  },
];

export const pieces: Piece[] = [
  {
    slug: "pastillas-delanteras",
    sku: "NX-FR-218",
    name: "Pastillas delanteras",
    family: "frenos",
    priceIva: 34_900,
    unit: "el juego",
    lead: "Cerámica, bajo polvo. Se cruzan por eje y diámetro de disco, no por «parecido».",
    fits: "Toyota Yaris, Hyundai Accent, Kia Rio, Chevrolet Sail — 2015 a 2024",
    image: "/images/pastillas.jpg",
    alt: "Par de pastillas de freno de pie sobre acero negro",
    stock: "bahia",
    oem: "04465-0D100",
    spec: "Espesor 17,2 mm · chaflán 45°",
    torque: "Caliper 32 N·m",
  },
  {
    slug: "disco-ventilado",
    sku: "NX-FR-440",
    name: "Disco ventilado",
    family: "frenos",
    priceIva: 48_900,
    unit: "la unidad · se vende en par",
    lead: "Fundición gris, ventilado. Si el otro pasa de 0,8 mm de diferencia, salen los dos.",
    fits: "Toyota Hilux 2.4 / 2.8, Mazda 3, Hyundai Tucson — 2014 a 2024",
    image: "/images/disco.jpg",
    alt: "Disco de freno ventilado de pie, como una luna sobre el vacío",
    stock: "bahia",
    oem: "43512-0K090",
    spec: "Ø 319 mm · espesor 28 mm · mín. 26 mm",
    torque: "Prisioneros 103 N·m",
  },
  {
    slug: "pastillas-traseras",
    sku: "NX-FR-274",
    name: "Pastillas traseras",
    family: "frenos",
    priceIva: 28_900,
    unit: "el juego",
    lead: "Semi-metálicas. En autos con freno de mano en el caliper, el kit lleva accesorios.",
    fits: "Nissan Versa, Suzuki Swift, VW Polo — 2016 a 2025",
    image: "/images/pastillas.jpg",
    alt: "Pastillas de freno sobre acero negro",
    stock: "24h",
    oem: "D1060-3TA0A",
    spec: "Espesor 15,8 mm",
    torque: "Caliper 28 N·m",
  },
  {
    slug: "liquido-dot4",
    sku: "NX-FR-090",
    name: "Líquido DOT 4",
    family: "frenos",
    priceIva: 7_900,
    unit: "el litro",
    lead: "Punto de ebullición seco 230 °C. Si el pedal se pone esponjoso en bajada, cambia el fluido.",
    fits: "Uso general bencina y diésel. No mezclar con DOT 5 silicona.",
    image: "/images/disco.jpg",
    alt: "Disco de freno, familia de fluidos y fricción",
    stock: "bahia",
    oem: "DOT4-1L",
    spec: "Seco 230 °C · húmedo 155 °C",
  },
  {
    slug: "bujias-iridio",
    sku: "NX-MO-104",
    name: "Bujías iridio",
    family: "motor",
    priceIva: 38_900,
    unit: "el juego de 4",
    lead: "Electrodo fino. Intervalo 80.000 km si el motor no come aceite.",
    fits: "Toyota 1NZ / 2ZR, Hyundai Kappa, Suzuki K14B",
    image: "/images/bujias.jpg",
    alt: "Cuatro bujías de iridio en fila",
    stock: "bahia",
    oem: "SK16PR-A11",
    spec: "Gap 1,1 mm · rosca 14 mm",
    torque: "18 N·m en frío",
  },
  {
    slug: "kit-distribucion",
    sku: "NX-MO-331",
    name: "Kit de distribución",
    family: "motor",
    priceIva: 124_000,
    unit: "el kit",
    lead: "Correa, tensor y bomba cuando el diseño la lleva detrás. No se vende la correa sola.",
    fits: "Peugeot 1.6, Chevrolet 1.4, VW EA111 — confirmar motor",
    image: "/images/bomba.jpg",
    alt: "Bomba de agua de aluminio, pieza del kit de distribución",
    stock: "cruce",
    oem: "K015611XS",
    spec: "Intervalo 80.000 km o 5 años",
    torque: "Tensor según ficha de motor",
  },
  {
    slug: "bomba-agua",
    sku: "NX-MO-188",
    name: "Bomba de agua",
    family: "motor",
    priceIva: 42_900,
    unit: "la unidad",
    lead: "Carcasa de aluminio, impulsor de metal. Si gotea por el orificio de alivio, no se repara.",
    fits: "Toyota Hilux 2.4 / 2.8, Mitsubishi L200, Ford Ranger",
    image: "/images/bomba.jpg",
    alt: "Bomba de agua con el impulsor a la vista",
    stock: "24h",
    oem: "16100-0C100",
    spec: "Impulsor metálico · junta incluida",
  },
  {
    slug: "filtro-aceite",
    sku: "NX-FI-012",
    name: "Filtro de aceite",
    family: "filtros",
    priceIva: 5_900,
    unit: "la unidad",
    lead: "Roscado, válvula antirretorno. Se cambia con el aceite, no «cuando se acuerde».",
    fits: "Toyota, Hyundai, Kia, Suzuki — cruce por rosca y junta",
    image: "/images/filtro.jpg",
    alt: "Filtro de aceite de pie sobre hormigón oscuro",
    stock: "bahia",
    oem: "90915-YZZD2",
    spec: "Rosca M20×1,5 · junta Ø 65 mm",
    torque: "A mano + ¾ de vuelta",
  },
  {
    slug: "filtro-aire",
    sku: "NX-FI-044",
    name: "Filtro de aire",
    family: "filtros",
    priceIva: 9_900,
    unit: "la unidad",
    lead: "Panel de celulosa. En Santiago, cada 10.000 km si el auto vive en avenida.",
    fits: "Hyundai Tucson, Kia Sportage, Chevrolet Tracker",
    image: "/images/filtro.jpg",
    alt: "Filtro cilíndrico, familia de filtración",
    stock: "bahia",
    oem: "28113-F2000",
    spec: "Panel 247 × 178 × 28 mm",
  },
  {
    slug: "filtro-cabina",
    sku: "NX-FI-071",
    name: "Filtro de cabina",
    family: "filtros",
    priceIva: 11_900,
    unit: "la unidad",
    lead: "Carbón activado. El olor a humedad en el aire acondicionado casi siempre es este filtro.",
    fits: "Mazda CX-5, Toyota RAV4, Honda CR-V, Nissan Qashqai",
    image: "/images/filtro.jpg",
    alt: "Filtro de cabina, familia de filtración",
    stock: "bahia",
    oem: "87139-0R090",
    spec: "Carbón activado · 215 × 163 mm",
  },
  {
    slug: "filtro-combustible",
    sku: "NX-FI-090",
    name: "Filtro de combustible",
    family: "filtros",
    priceIva: 18_900,
    unit: "la unidad",
    lead: "En diésel no se improvisan. Si el auto patea en frío, partimos por aquí.",
    fits: "Toyota Hilux, Mitsubishi L200, VW Amarok, Ford Ranger",
    image: "/images/filtro.jpg",
    alt: "Filtro de aceite cepillado, familia de combustible",
    stock: "bahia",
    oem: "23390-0L040",
    spec: "Diésel · 10 µm · con sensor de agua",
  },
  {
    slug: "amortiguador-delantero",
    sku: "NX-SU-150",
    name: "Amortiguador delantero",
    family: "suspension",
    priceIva: 64_900,
    unit: "la unidad · se vende en par",
    lead: "Presurizado. El vástago con óleo es recambio, no limpieza. Se cambia el par.",
    fits: "Suzuki Swift, Kia Morning, Hyundai Grand i10, Chevrolet Spark",
    image: "/images/amortiguador.jpg",
    alt: "Amortiguador de vástago cromado de pie",
    stock: "24h",
    oem: "48510-52R00",
    spec: "Presión 18 bar · recorrido 142 mm",
    torque: "Tuerca de copela 54 N·m",
  },
  {
    slug: "rotula",
    sku: "NX-SU-220",
    name: "Rótula inferior",
    family: "suspension",
    priceIva: 18_900,
    unit: "la unidad",
    lead: "Si hay holgura al palancar la rueda, no se rellena con grasa. Se cambia.",
    fits: "Toyota Hilux, Mitsubishi L200 — 2005 a 2015",
    image: "/images/amortiguador.jpg",
    alt: "Amortiguador, familia de suspensión",
    stock: "bahia",
    oem: "43330-39555",
    spec: "Ø perno 18 mm · con clip",
    torque: "Perno 80 N·m",
  },
  {
    slug: "terminal-direccion",
    sku: "NX-SU-188",
    name: "Terminal de dirección",
    family: "suspension",
    priceIva: 16_900,
    unit: "la unidad",
    lead: "Después del cambio, alineación. Sin eso, come la cubierta de adentro.",
    fits: "Hyundai Accent, Kia Rio, Chevrolet Sail — 2011 a 2020",
    image: "/images/amortiguador.jpg",
    alt: "Familia de suspensión y dirección",
    stock: "24h",
    oem: "56820-1R000",
    spec: "Rosca M14 × 1,5 · lado derecho/izquierdo",
    torque: "Contratuerca 45 N·m",
  },
  {
    slug: "bateria-70ah",
    sku: "NX-EL-070",
    name: "Batería 70 Ah",
    family: "electrico",
    priceIva: 89_900,
    unit: "la unidad · con canje",
    lead: "CCA 640 A. El canje de la usada entra en el precio. Sin canje, se suma el depósito.",
    fits: "Sedán y SUV bencina 1.6 a 2.0 · confirmar caja y polaridad",
    image: "/images/bateria.jpg",
    alt: "Batería de 12 volts sobre pallet de acero",
    stock: "bahia",
    oem: "70Ah-DIN",
    spec: "12 V · 70 Ah · CCA 640 A · DIN",
    torque: "Bornes 6 N·m",
  },
  {
    slug: "alternador",
    sku: "NX-EL-140",
    name: "Alternador 90 A",
    family: "electrico",
    priceIva: 145_000,
    unit: "la unidad · con núcleo",
    lead: "Si la luz de batería se enciende al ralenti, medimos voltaje antes de vender.",
    fits: "Hyundai / Kia 1.6 Gamma, Chevrolet 1.8 — confirmar enchufe",
    image: "/images/bateria.jpg",
    alt: "Batería, familia eléctrica",
    stock: "cruce",
    oem: "37300-2B000",
    spec: "90 A · 12 V · polea 6PK",
  },
  {
    slug: "optica-led-derecha",
    sku: "NX-OP-210",
    name: "Óptica LED derecha",
    family: "optica",
    priceIva: 189_000,
    unit: "la unidad",
    lead: "Lado copiloto. Homologada. El izquierdo se pide aparte: no hay «el par a ojo».",
    fits: "Hyundai Tucson 2016–2020 · confirmar faro full LED",
    image: "/images/optica.jpg",
    alt: "Óptica LED sobre acero negro",
    stock: "cruce",
    oem: "92102-D3000",
    spec: "LED · con módulo · lado derecho",
    torque: "Tornillos de copa 5 N·m",
  },
  {
    slug: "ampolleta-h7",
    sku: "NX-OP-007",
    name: "Ampolleta H7",
    family: "optica",
    priceIva: 4_500,
    unit: "la unidad",
    lead: "55 W. Se cambia de a par: la que queda siempre es la que falla en la carretera.",
    fits: "Uso general H7 · no LED plug-and-play",
    image: "/images/optica.jpg",
    alt: "Óptica, familia de iluminación",
    stock: "bahia",
    oem: "H7-55W",
    spec: "12 V · 55 W · 1.350 lm",
  },
  {
    slug: "termostato",
    sku: "NX-RE-055",
    name: "Termostato 82 °C",
    family: "refrigeracion",
    priceIva: 14_900,
    unit: "la unidad",
    lead: "Si el motor tarda en tomar temperatura o hierve sin motivo, se cambia. No se «limpia».",
    fits: "Toyota 1NZ / 2ZR, Hyundai Gamma — confirmar °C de apertura",
    image: "/images/bomba.jpg",
    alt: "Bomba de agua, familia de refrigeración",
    stock: "bahia",
    oem: "90916-03129",
    spec: "Apertura 82 °C · con junta",
  },
  {
    slug: "radiador",
    sku: "NX-RE-310",
    name: "Radiador de aluminio",
    family: "refrigeracion",
    priceIva: 98_000,
    unit: "la unidad",
    lead: "Núcleo de aluminio, tanques plásticos. Si el original es de cobre, se avisa antes.",
    fits: "Chevrolet Sail, Suzuki Swift, Kia Morning — 2013 a 2022",
    image: "/images/bomba.jpg",
    alt: "Familia de refrigeración",
    stock: "24h",
    oem: "21410-1R000",
    spec: "Aluminio · 16 mm · con tapón",
  },
  {
    slug: "kit-embrague",
    sku: "NX-TR-190",
    name: "Kit de embrague",
    family: "transmision",
    priceIva: 189_000,
    unit: "el kit",
    lead: "Disco, plato y collera. No se vende el disco solo. El volante se rectifica aparte.",
    fits: "Toyota Hilux 2.4 / 2.8, Mitsubishi L200 2.4 — 2015 a 2024",
    image: "/images/embrague.jpg",
    alt: "Disco de embrague sobre acero negro",
    stock: "cruce",
    oem: "31250-0K090",
    spec: "Ø 250 mm · 24 estrías",
    torque: "Prisioneros en estrella 19 N·m",
  },
];

export const fleet: Vehicle[] = [
  {
    id: "hilux-22",
    plates: ["RKJD27", "RKJD28"],
    marca: "Toyota",
    modelo: "Hilux",
    year: 2022,
    motor: "2.8 GD · 1GD-FTV",
    combustible: "Diésel",
    segmento: "Flota / faena",
    pieces: [
      "disco-ventilado",
      "pastillas-delanteras",
      "filtro-combustible",
      "filtro-aceite",
      "bomba-agua",
      "kit-embrague",
      "rotula",
    ],
  },
  {
    id: "tucson-20",
    plates: ["BCDF18"],
    marca: "Hyundai",
    modelo: "Tucson",
    year: 2020,
    motor: "2.0 Nu",
    combustible: "Bencina",
    segmento: "SUV familiar",
    pieces: [
      "disco-ventilado",
      "filtro-aire",
      "filtro-cabina",
      "optica-led-derecha",
      "bateria-70ah",
      "ampolleta-h7",
    ],
  },
  {
    id: "morning-19",
    plates: ["LPRT45"],
    marca: "Kia",
    modelo: "Morning",
    year: 2019,
    motor: "1.0 Kappa",
    combustible: "Bencina",
    segmento: "Urbano",
    pieces: [
      "amortiguador-delantero",
      "bujias-iridio",
      "filtro-aceite",
      "bateria-70ah",
      "radiador",
      "ampolleta-h7",
    ],
  },
  {
    id: "sail-14",
    plates: ["GG1234"],
    marca: "Chevrolet",
    modelo: "Sail",
    year: 2014,
    motor: "1.4 L",
    combustible: "Bencina",
    segmento: "Sedán de trabajo",
    pieces: [
      "pastillas-delanteras",
      "terminal-direccion",
      "radiador",
      "filtro-aceite",
      "kit-distribucion",
      "bujias-iridio",
    ],
  },
  {
    id: "swift-18",
    plates: ["HJKL33"],
    marca: "Suzuki",
    modelo: "Swift",
    year: 2018,
    motor: "1.4 K14B",
    combustible: "Bencina",
    segmento: "Urbano",
    pieces: [
      "amortiguador-delantero",
      "pastillas-traseras",
      "bujias-iridio",
      "filtro-aceite",
      "radiador",
      "termostato",
    ],
  },
  {
    id: "mazda3-17",
    plates: ["STVW08"],
    marca: "Mazda",
    modelo: "3",
    year: 2017,
    motor: "2.0 Skyactiv-G",
    combustible: "Bencina",
    segmento: "Sedán",
    pieces: [
      "disco-ventilado",
      "filtro-cabina",
      "bateria-70ah",
      "filtro-aceite",
      "ampolleta-h7",
    ],
  },
  {
    id: "np300-21",
    plates: ["CRSL52"],
    marca: "Nissan",
    modelo: "NP300",
    year: 2021,
    motor: "2.3 dCi",
    combustible: "Diésel",
    segmento: "Flota",
    pieces: [
      "filtro-combustible",
      "filtro-aceite",
      "disco-ventilado",
      "kit-embrague",
      "rotula",
    ],
  },
  {
    id: "l200-19",
    plates: ["FGHJ91"],
    marca: "Mitsubishi",
    modelo: "L200",
    year: 2019,
    motor: "2.4 Di-D",
    combustible: "Diésel",
    segmento: "Faena",
    pieces: [
      "bomba-agua",
      "filtro-combustible",
      "kit-embrague",
      "disco-ventilado",
      "rotula",
      "filtro-aceite",
    ],
  },
  {
    id: "yaris-23",
    plates: ["BBCD12"],
    marca: "Toyota",
    modelo: "Yaris",
    year: 2023,
    motor: "1.5 2NR-FE",
    combustible: "Bencina",
    segmento: "Urbano",
    pieces: [
      "pastillas-delanteras",
      "bujias-iridio",
      "filtro-aceite",
      "filtro-cabina",
      "termostato",
      "ampolleta-h7",
    ],
  },
  {
    id: "tracker-21",
    plates: ["JKLP64"],
    marca: "Chevrolet",
    modelo: "Tracker",
    year: 2021,
    motor: "1.2 Turbo",
    combustible: "Bencina",
    segmento: "SUV compacto",
    pieces: [
      "filtro-aire",
      "pastillas-delanteras",
      "bateria-70ah",
      "filtro-aceite",
      "ampolleta-h7",
    ],
  },
];

export const vehicles: Record<string, string[]> = {
  Toyota: ["Hilux", "Yaris", "RAV4", "Corolla"],
  Hyundai: ["Tucson", "Accent", "Grand i10"],
  Kia: ["Morning", "Rio", "Sportage"],
  Chevrolet: ["Sail", "Tracker", "Spark"],
  Suzuki: ["Swift", "Baleno"],
  Mazda: ["3", "CX-5"],
  Nissan: ["NP300", "Versa", "Qashqai"],
  Mitsubishi: ["L200"],
};

export const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
];

export const giros = [
  "Taller mecánico",
  "Flota de empresa",
  "Faena / minería",
  "Concesionario",
  "Taxi / Uber / cabify",
  "Particular",
  "Municipalidad",
] as const;

export const comunas = [
  "Quilicura",
  "Pudahuel",
  "Renca",
  "Conchalí",
  "Huechuraba",
  "Independencia",
  "Recoleta",
  "Santiago",
  "Maipú",
  "Cerrillos",
  "Estación Central",
  "San Bernardo",
  "Colina",
  "Lampa",
  "Las Condes",
  "Providencia",
  "Ñuñoa",
  "Puente Alto",
  "Otra comuna RM",
] as const;

export type BahiaJob = {
  plate: string;
  vehicle: string;
  piece: string;
  dest: string;
  hora: string;
};

export const bahiaTonight: BahiaJob[] = [
  {
    plate: "RKJD 27",
    vehicle: "Hilux 2.8",
    piece: "Disco + pastillas",
    dest: "Taller Donoso · Recoleta",
    hora: "05:30",
  },
  {
    plate: "LPRT 45",
    vehicle: "Morning 1.0",
    piece: "Batería 70 Ah",
    dest: "Flota Amarilla · Maipú",
    hora: "05:45",
  },
  {
    plate: "FGHJ 91",
    vehicle: "L200 2.4",
    piece: "Kit embrague",
    dest: "Faena Los Bronces",
    hora: "05:30",
  },
  {
    plate: "BCDF 18",
    vehicle: "Tucson 2.0",
    piece: "Óptica derecha",
    dest: "Retiro en mesón",
    hora: "06:10",
  },
  {
    plate: "CRSL 52",
    vehicle: "NP300 2.3",
    piece: "Filtro combustible",
    dest: "Taller Norte · Conchalí",
    hora: "05:50",
  },
  {
    plate: "HJKL 33",
    vehicle: "Swift 1.4",
    piece: "Par amortiguadores",
    dest: "Despacho Ñuñoa",
    hora: "06:20",
  },
];

export function familyById(id: string) {
  return families.find((item) => item.id === id);
}

export function pieceBySlug(slug: string) {
  return pieces.find((item) => item.slug === slug);
}

export function piecesByFamily(id: FamilyId) {
  return pieces.filter((item) => item.family === id);
}

export function featuredPieces() {
  return pieces.filter((item) =>
    [
      "disco-ventilado",
      "bujias-iridio",
      "filtro-aceite",
      "amortiguador-delantero",
      "bateria-70ah",
      "kit-embrague",
    ].includes(item.slug),
  );
}

export function vehicleByPlate(plate: string) {
  const clean = plate.replace(/[\s.\-]/g, "").toUpperCase();
  return fleet.find((item) => item.plates.includes(clean));
}

export function piecesForVehicle(vehicle: Vehicle) {
  return vehicle.pieces
    .map((slug) => pieceBySlug(slug))
    .filter((item): item is Piece => Boolean(item));
}

export function relatedPieces(piece: Piece, limit = 3) {
  return pieces
    .filter((item) => item.family === piece.family && item.slug !== piece.slug)
    .slice(0, limit);
}

export const stockLabel: Record<Stock, string> = {
  bahia: "En bahía esta noche",
  "24h": "Llega en 24 h",
  cruce: "Se cruza al cotizar",
};
