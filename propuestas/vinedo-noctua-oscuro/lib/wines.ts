export type WineColor = "tinto" | "blanco";

export type Moon = {
  name: string;
  illumination: number;
  waxing: boolean;
};

export type Wine = {
  slug: string;
  name: string;
  line: string;
  varietal: string;
  vintage: number;
  color: WineColor;
  price: number;
  volume: string;
  image: string;
  parcel: string;
  altitude: number;
  soil: string;
  harvestDate: string;
  harvestStart: string;
  harvestEnd: string;
  grapeTemp: string;
  moon: Moon;
  alcohol: number;
  production: number;
  yield: string;
  aging: string;
  serving: string;
  stock: number;
  featured?: boolean;
  excerpt: string;
  notes: string;
  pairing: string;
  logId: string;
};

export const wines: Wine[] = [
  {
    slug: "umbra",
    name: "Umbra",
    line: "Parcela",
    varietal: "Syrah",
    vintage: 2022,
    color: "tinto",
    price: 42000,
    volume: "750 ml",
    image: "/images/umbra.jpg",
    parcel: "Umbra",
    altitude: 1810,
    soil: "Granito descompuesto",
    harvestDate: "12.03.2022",
    harvestStart: "02:14",
    harvestEnd: "04:51",
    grapeTemp: "8,4 °C",
    moon: { name: "Menguante", illumination: 0.38, waxing: false },
    alcohol: 13.8,
    production: 1840,
    yield: "26 hl/ha",
    aging: "18 meses en foudre de 2.500 L",
    serving: "16 °C",
    stock: 96,
    featured: true,
    logId: "22-U",
    excerpt:
      "Pimienta negra, aceituna y una acidez que corta el silencio del valle.",
    notes:
      "Syrah de granito a 1.810 metros. Nariz de pimienta negra, aceituna de mesa y grafito húmedo. En boca es vertical: tanino fino, fruta oscura no dulce, un final de hierba de cordillera. La parcela Umbra madura despacio; este vino no pide calor, pide tiempo.",
    pairing:
      "Cordero al palo, setas asadas, charqui de guanaco, quesos de cabra curados del Limarí.",
  },
  {
    slug: "strix",
    name: "Strix",
    line: "Parcela",
    varietal: "Syrah",
    vintage: 2023,
    color: "tinto",
    price: 28000,
    volume: "750 ml",
    image: "/images/strix.jpg",
    parcel: "Strix",
    altitude: 1720,
    soil: "Granito y gravas",
    harvestDate: "18.03.2023",
    harvestStart: "01:40",
    harvestEnd: "05:05",
    grapeTemp: "9,1 °C",
    moon: { name: "Creciente", illumination: 0.22, waxing: true },
    alcohol: 13.4,
    production: 3120,
    yield: "32 hl/ha",
    aging: "10 meses en foudre y cubas de concreto",
    serving: "15 °C",
    stock: 214,
    featured: true,
    logId: "23-S",
    excerpt:
      "El Syrah que abrimos cuando alguien llega al viñedo después de las diez.",
    notes:
      "Parcela poniente, racimos más expuestos, piel más gruesa. Fruta negra, pimienta blanca, un dejo de olivo. Es el vino más inmediato de Noctua: preciso, no simple. Un treinta por ciento de racimo entero le da tensión sin disfrazar la cepa.",
    pairing:
      "Empanadas de horno, asado de tira, lentejas con merquén, pasta con salsa de nuez.",
  },
  {
    slug: "alba",
    name: "Alba",
    line: "Parcela",
    varietal: "Pedro Ximénez",
    vintage: 2023,
    color: "blanco",
    price: 24000,
    volume: "750 ml",
    image: "/images/alba.jpg",
    parcel: "Alba",
    altitude: 1480,
    soil: "Aluvión y caliza",
    harvestDate: "04.03.2023",
    harvestStart: "03:10",
    harvestEnd: "05:20",
    grapeTemp: "7,6 °C",
    moon: { name: "Nueva", illumination: 0.06, waxing: true },
    alcohol: 12.8,
    production: 2400,
    yield: "38 hl/ha",
    aging: "8 meses sobre lías en huevo de concreto",
    serving: "9 °C",
    stock: 180,
    featured: true,
    logId: "23-A",
    excerpt:
      "Un blanco de altura: salino, de hierba seca y cáscara de limón.",
    notes:
      "Pedro Ximénez cosechado a las 03:10, cuando el valle todavía no tiene color. Fermenta con levaduras nativas, cría sobre lías finas. No es un blanco de aperitivo liviano: tiene sal, hueso y un amargo limpio que pide comida. El Elqui lo usó un siglo para pisco; aquí se queda en vino.",
    pairing:
      "Ostiones a la parmesana, ceviche de locos, cabra fresca, alcachofas al vapor.",
  },
  {
    slug: "lunula",
    name: "Lúnula",
    line: "Parcela",
    varietal: "Moscatel de Alejandría",
    vintage: 2024,
    color: "blanco",
    price: 22000,
    volume: "750 ml",
    image: "/images/lunula.jpg",
    parcel: "Alba",
    altitude: 1480,
    soil: "Aluvión y canto rodado",
    harvestDate: "22.02.2024",
    harvestStart: "00:50",
    harvestEnd: "03:40",
    grapeTemp: "8,0 °C",
    moon: { name: "Creciente", illumination: 0.41, waxing: true },
    alcohol: 12.6,
    production: 1980,
    yield: "34 hl/ha",
    aging: "Maceración de una noche; 6 meses en acero",
    serving: "8 °C",
    stock: 156,
    logId: "24-L",
    excerpt:
      "Azahar, dátil fresco y un final amargo como la almendra.",
    notes:
      "Moscatel de Alejandría, la cepa que el valle conoce de memoria. Fermenta seca, con pieles una sola noche: alcanza el perfume sin caer en el dulce. Azahar, membrillo, un dejo de salvia. Se bebe frío, despacio, mirando el cielo que todavía no amanece.",
    pairing:
      "Quesos de cabra jóvenes, pastel de choclo (sin azúcar), postres de almendras, comida peruana de ají amarillo.",
  },
  {
    slug: "meridiana",
    name: "Meridiana",
    line: "Ensamblaje",
    varietal: "Syrah · Garnacha",
    vintage: 2021,
    color: "tinto",
    price: 48000,
    volume: "750 ml",
    image: "/images/meridiana.jpg",
    parcel: "Umbra / Nyctea",
    altitude: 1725,
    soil: "Granito, mica y cuarzo",
    harvestDate: "09.03.2021",
    harvestStart: "02:00",
    harvestEnd: "05:10",
    grapeTemp: "8,2 °C",
    moon: { name: "Gibosa menguante", illumination: 0.64, waxing: false },
    alcohol: 13.6,
    production: 1260,
    yield: "24 hl/ha",
    aging: "22 meses en foudre; 12 meses en botella",
    serving: "16 °C",
    stock: 64,
    featured: true,
    logId: "21-M",
    excerpt:
      "La línea que marca el norte del valle. Tres años de guarda.",
    notes:
      "Setenta por ciento Syrah de Umbra, treinta de Garnacha de Nyctea. Las dos parcelas se miran sobre el mismo meridiano. Cereza negra, tomillo, una nota de ladrillo frío. El tanino ya se asentó: es un vino de mesa larga, de silencio entre copas.",
    pairing:
      "Plateada al horno, risotto de hongos, cabrito, un plato de cecina y aceitunas.",
  },
  {
    slug: "noctua",
    name: "Noctua",
    line: "Gran guarda",
    varietal: "Syrah",
    vintage: 2020,
    color: "tinto",
    price: 72000,
    volume: "750 ml",
    image: "/images/reserva.jpg",
    parcel: "Umbra",
    altitude: 1810,
    soil: "Granito descompuesto",
    harvestDate: "04.03.2020",
    harvestStart: "01:55",
    harvestEnd: "04:20",
    grapeTemp: "7,8 °C",
    moon: { name: "Menguante", illumination: 0.31, waxing: false },
    alcohol: 13.9,
    production: 1200,
    yield: "18 hl/ha",
    aging: "24 meses en foudre de 2.500 L; 24 meses en botella",
    serving: "17 °C",
    stock: 14,
    logId: "20-N",
    excerpt:
      "Mil doscientas botellas. El vino que da nombre al viñedo.",
    notes:
      "Selección de tres hileras de Umbra, año seco, uva a 7,8 °C. Grafito, aceituna negra, violeta seca, una mineralidad que parece polvo de estrella —y no es metáfora: es granito molido por el hielo. No hay otra añada igual. Cada botella lleva número de registro.",
    pairing:
      "Un cordero, una fogata, poco más. O solo, a 17 grados, después de medianoche.",
  },
];

export function getWine(slug: string) {
  return wines.find((wine) => wine.slug === slug);
}

export function relatedWines(slug: string, count = 3) {
  const current = getWine(slug);
  if (!current) return wines.slice(0, count);
  const same = wines.filter(
    (wine) => wine.slug !== slug && wine.color === current.color,
  );
  const rest = wines.filter(
    (wine) => wine.slug !== slug && wine.color !== current.color,
  );
  return [...same, ...rest].slice(0, count);
}
