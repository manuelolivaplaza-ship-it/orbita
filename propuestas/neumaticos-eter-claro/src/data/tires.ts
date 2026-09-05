export type Terreno = "ciudad" | "ruta" | "cordillera" | "invierno" | "carga";
export type Stock = "hoy" | "48h" | "consultar";

export type Tire = {
  slug: string;
  brand: string;
  model: string;
  width: number;
  aspect: number;
  rim: number;
  load: string;
  noise: string;
  wet: "A" | "B" | "C";
  terreno: Terreno;
  priceCLP: number;
  origin: string;
  stock: Stock;
  image: string;
  excerpt: string;
  note: string;
};

export const WIDTHS = [165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265] as const;
export const ASPECTS = [40, 45, 50, 55, 60, 65, 70] as const;
export const RIMS = [14, 15, 16, 17, 18, 19, 20] as const;

export const DEFAULT_MEDIDA = { width: 205, aspect: 55, rim: 16 } as const;

export const terrenos: Record<
  Terreno,
  {
    slug: Terreno;
    title: string;
    kicker: string;
    lead: string;
    image: string;
    tireImage: string;
  }
> = {
  ciudad: {
    slug: "ciudad",
    title: "Ciudad",
    kicker: "Lluvia, tacos, badenes",
    lead: "Silencio en el asfalto mojado. La huella que no chilla en Irarrázaval a las ocho.",
    image: "/images/ciudad.jpg",
    tireImage: "/images/hero.jpg",
  },
  ruta: {
    slug: "ruta",
    title: "Ruta",
    kicker: "Niebla, sal, kilómetro",
    lead: "De La Reina a la costa sin que el auto se ponga nervioso. Compuesto que aguanta calor y bruma.",
    image: "/images/costa.jpg",
    tireImage: "/images/hero.jpg",
  },
  cordillera: {
    slug: "cordillera",
    title: "Cordillera",
    kicker: "Ripio, cuesta, Cajón",
    lead: "El hombro del neumático cuando el pavimento se acaba. Farellones, el Cajón, el norte chico.",
    image: "/images/cordillera.jpg",
    tireImage: "/images/tire-at.jpg",
  },
  invierno: {
    slug: "invierno",
    title: "Invierno",
    kicker: "Nieve, cadena, temporada",
    lead: "M+S y compuesto de frío para los sábados de Valle Nevado. No es un lujo: es bajar de vuelta.",
    image: "/images/tire-invierno.jpg",
    tireImage: "/images/tire-invierno.jpg",
  },
  carga: {
    slug: "carga",
    title: "Carga",
    kicker: "Furgón, flota, lunes",
    lead: "El neumático que no puede fallar el lunes. Índice de carga leído, no adivinado.",
    image: "/images/pasillo.jpg",
    tireImage: "/images/pasillo.jpg",
  },
};

export const terrenoList = Object.values(terrenos);

export const tires: Tire[] = [
  {
    slug: "michelin-primacy-4-plus-205-55-r16",
    brand: "Michelin",
    model: "Primacy 4+",
    width: 205,
    aspect: 55,
    rim: 16,
    load: "91V",
    noise: "69 dB",
    wet: "A",
    terreno: "ciudad",
    priceCLP: 159_900,
    origin: "Brasil",
    stock: "hoy",
    image: "/images/hero.jpg",
    excerpt: "El compuesto que más pedimos para Santiago. Moja, calla, dura.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "continental-premiumcontact-7-205-55-r16",
    brand: "Continental",
    model: "PremiumContact 7",
    width: 205,
    aspect: 55,
    rim: 16,
    load: "91W",
    noise: "71 dB",
    wet: "A",
    terreno: "ciudad",
    priceCLP: 149_900,
    origin: "Portugal",
    stock: "hoy",
    image: "/images/hero.jpg",
    excerpt: "Frenado en agua como si el pavimento pidiera disculpas.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "bridgestone-turanza-t005-195-55-r16",
    brand: "Bridgestone",
    model: "Turanza T005",
    width: 195,
    aspect: 55,
    rim: 16,
    load: "87V",
    noise: "70 dB",
    wet: "A",
    terreno: "ciudad",
    priceCLP: 129_900,
    origin: "Brasil",
    stock: "hoy",
    image: "/images/hero.jpg",
    excerpt: "Compactos y sedanes chicos. La medida que más se ignora y más se necesita.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "yokohama-bluearth-es32-185-65-r15",
    brand: "Yokohama",
    model: "BluEarth ES32",
    width: 185,
    aspect: 65,
    rim: 15,
    load: "88H",
    noise: "68 dB",
    wet: "B",
    terreno: "ciudad",
    priceCLP: 89_900,
    origin: "Tailandia",
    stock: "hoy",
    image: "/images/hero.jpg",
    excerpt: "El city-car de Ñuñoa. Precio honesto, goma nueva, no remanente.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "hankook-kinergy-eco2-185-65-r15",
    brand: "Hankook",
    model: "Kinergy Eco2",
    width: 185,
    aspect: 65,
    rim: 15,
    load: "88H",
    noise: "69 dB",
    wet: "B",
    terreno: "ciudad",
    priceCLP: 79_900,
    origin: "Corea",
    stock: "hoy",
    image: "/images/hero.jpg",
    excerpt: "Cuando el presupuesto manda y el criterio no se rinde.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "pirelli-cinturato-p7-225-45-r17",
    brand: "Pirelli",
    model: "Cinturato P7",
    width: 225,
    aspect: 45,
    rim: 17,
    load: "94Y",
    noise: "71 dB",
    wet: "A",
    terreno: "ruta",
    priceCLP: 179_900,
    origin: "Rumania",
    stock: "hoy",
    image: "/images/costa.jpg",
    excerpt: "Perfil bajo sin teatro. Ruta 68 y vuelta antes de las siete.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "continental-premiumcontact-7-225-45-r17",
    brand: "Continental",
    model: "PremiumContact 7",
    width: 225,
    aspect: 45,
    rim: 17,
    load: "94W",
    noise: "70 dB",
    wet: "A",
    terreno: "ruta",
    priceCLP: 189_900,
    origin: "Rep. Checa",
    stock: "48h",
    image: "/images/costa.jpg",
    excerpt: "El 17 pulgadas que más se pide para sedanes alemanes.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "michelin-primacy-4-plus-225-50-r17",
    brand: "Michelin",
    model: "Primacy 4+",
    width: 225,
    aspect: 50,
    rim: 17,
    load: "98W",
    noise: "69 dB",
    wet: "A",
    terreno: "ruta",
    priceCLP: 199_900,
    origin: "Alemania",
    stock: "hoy",
    image: "/images/costa.jpg",
    excerpt: "Kilómetro largo, calor de verano, niebla de la costa.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "goodyear-efficientgrip-205-60-r16",
    brand: "Goodyear",
    model: "EfficientGrip Performance 2",
    width: 205,
    aspect: 60,
    rim: 16,
    load: "92V",
    noise: "70 dB",
    wet: "A",
    terreno: "ciudad",
    priceCLP: 139_900,
    origin: "Alemania",
    stock: "hoy",
    image: "/images/hero.jpg",
    excerpt: "El perfil 60 que muchos autos chilenos traen de fábrica y nadie mira.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "hankook-kinergy-4s2-215-55-r17",
    brand: "Hankook",
    model: "Kinergy 4S2",
    width: 215,
    aspect: 55,
    rim: 17,
    load: "98W",
    noise: "72 dB",
    wet: "B",
    terreno: "invierno",
    priceCLP: 144_900,
    origin: "Corea",
    stock: "hoy",
    image: "/images/tire-invierno.jpg",
    excerpt: "Cuatro estaciones para quien sube a la nieve dos veces al año, no veinte.",
    note: "M+S. Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "michelin-crossclimate-2-225-55-r18",
    brand: "Michelin",
    model: "CrossClimate 2",
    width: 225,
    aspect: 55,
    rim: 18,
    load: "102V",
    noise: "71 dB",
    wet: "A",
    terreno: "invierno",
    priceCLP: 239_900,
    origin: "España",
    stock: "hoy",
    image: "/images/tire-invierno.jpg",
    excerpt: "El SUV que va a Farellones los sábados y a la oficina el lunes.",
    note: "3PMSF. Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "continental-wintercontact-225-55-r18",
    brand: "Continental",
    model: "WinterContact TS 870 P",
    width: 225,
    aspect: 55,
    rim: 18,
    load: "102V",
    noise: "72 dB",
    wet: "B",
    terreno: "invierno",
    priceCLP: 219_900,
    origin: "Alemania",
    stock: "consultar",
    image: "/images/tire-invierno.jpg",
    excerpt: "Compuesto de frío verdadero. Temporada, no marketing.",
    note: "Pedido a 48–72 h. Incluye montaje. IVA incluido.",
  },
  {
    slug: "bridgestone-dueler-at-245-70-r16",
    brand: "Bridgestone",
    model: "Dueler A/T 693",
    width: 245,
    aspect: 70,
    rim: 16,
    load: "111S",
    noise: "73 dB",
    wet: "C",
    terreno: "cordillera",
    priceCLP: 179_900,
    origin: "Brasil",
    stock: "hoy",
    image: "/images/tire-at.jpg",
    excerpt: "Pickup y 4x4. Ripio del Cajón sin transformar el auto en tambor.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "goodyear-wrangler-265-65-r17",
    brand: "Goodyear",
    model: "Wrangler Workhorse AT",
    width: 265,
    aspect: 65,
    rim: 17,
    load: "112T",
    noise: "74 dB",
    wet: "C",
    terreno: "cordillera",
    priceCLP: 199_900,
    origin: "EE.UU.",
    stock: "hoy",
    image: "/images/tire-at.jpg",
    excerpt: "Hombro reforzado. El norte chico y la nieve suelta.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "hankook-dynapro-at2-265-65-r17",
    brand: "Hankook",
    model: "Dynapro AT2",
    width: 265,
    aspect: 65,
    rim: 17,
    load: "112T",
    noise: "73 dB",
    wet: "C",
    terreno: "cordillera",
    priceCLP: 169_900,
    origin: "Corea",
    stock: "48h",
    image: "/images/tire-at.jpg",
    excerpt: "All-terrain sin el recargo de la marca de moda.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "continental-vancontact-215-65-r16c",
    brand: "Continental",
    model: "VanContact Ultra",
    width: 215,
    aspect: 65,
    rim: 16,
    load: "109/107T",
    noise: "72 dB",
    wet: "B",
    terreno: "carga",
    priceCLP: 159_900,
    origin: "Eslovaquia",
    stock: "hoy",
    image: "/images/pasillo.jpg",
    excerpt: "Furgón de panadería, flota de tres. El lunes no se negocia.",
    note: "Índice C. Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "michelin-agilis-215-65-r16c",
    brand: "Michelin",
    model: "Agilis 3",
    width: 215,
    aspect: 65,
    rim: 16,
    load: "109/107R",
    noise: "71 dB",
    wet: "A",
    terreno: "carga",
    priceCLP: 189_900,
    origin: "España",
    stock: "hoy",
    image: "/images/pasillo.jpg",
    excerpt: "Carga real, no turismo disfrazado. Kilometraje de oficios.",
    note: "Índice C. Incluye montaje y balanceo. IVA incluido.",
  },
  {
    slug: "bridgestone-alenza-235-55-r18",
    brand: "Bridgestone",
    model: "Alenza 001",
    width: 235,
    aspect: 55,
    rim: 18,
    load: "100V",
    noise: "70 dB",
    wet: "A",
    terreno: "ruta",
    priceCLP: 209_900,
    origin: "Japón",
    stock: "48h",
    image: "/images/costa.jpg",
    excerpt: "SUV de ciudad que de vez en cuando sale a la 5 Sur.",
    note: "Incluye montaje y balanceo. IVA incluido.",
  },
];

export const priceRows = [
  { size: "185/65 R15", from: 79_900, note: "City-car · Yokohama / Hankook" },
  { size: "195/55 R16", from: 129_900, note: "Compacto · Bridgestone" },
  { size: "205/55 R16", from: 149_900, note: "La medida de Chile · Michelin / Continental" },
  { size: "225/45 R17", from: 179_900, note: "Sedán · Pirelli / Continental" },
  { size: "225/55 R18", from: 219_900, note: "SUV invierno · Michelin CrossClimate" },
  { size: "265/65 R17", from: 169_900, note: "4x4 · Hankook / Goodyear" },
] as const;

export function sizeLabel(tire: Pick<Tire, "width" | "aspect" | "rim">) {
  return `${tire.width}/${tire.aspect} R${tire.rim}`;
}

export function getTire(slug: string) {
  return tires.find((tire) => tire.slug === slug);
}

export function matchTires(width: number, aspect: number, rim: number) {
  const exact = tires.filter(
    (tire) => tire.width === width && tire.aspect === aspect && tire.rim === rim,
  );
  if (exact.length) return { exact: true, items: exact };

  const near = tires
    .filter((tire) => tire.rim === rim)
    .map((tire) => ({
      tire,
      score:
        Math.abs(tire.width - width) / 10 + Math.abs(tire.aspect - aspect) / 5,
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 4)
    .map((entry) => entry.tire);

  return { exact: false, items: near };
}

export function tiresByTerreno(slug: Terreno) {
  return tires.filter((tire) => tire.terreno === slug);
}
