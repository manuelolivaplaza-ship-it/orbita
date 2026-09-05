export const categories = [
  { id: "mesa", label: "Mesa", note: "Gres y vidrio" },
  { id: "textil", label: "Textil", note: "Lino y lana" },
  { id: "madera", label: "Madera", note: "Raulí y lingue" },
  { id: "despensa", label: "Despensa", note: "Aceite y cera" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Swatch = { id: string; name: string; hex: string };
export type Size = { id: string; name: string; price?: number };

export type Product = {
  slug: string;
  name: string;
  kicker: string;
  category: CategoryId;
  price: number;
  image: string;
  images: string[];
  excerpt: string;
  story: string;
  material: string;
  origin: string;
  oficio: string;
  measures: string;
  care: string;
  weight: string;
  sku: string;
  stock: number;
  leadDays: number;
  featured?: boolean;
  colors?: Swatch[];
  sizes?: Size[];
};

export const products: Product[] = [
  {
    slug: "manta-aysen",
    name: "Manta Aysén",
    kicker: "Lana merino",
    category: "textil",
    price: 129_000,
    image: "/images/manta.jpg",
    images: ["/images/manta.jpg", "/images/lino.jpg", "/images/interior.jpg"],
    excerpt:
      "Cuatro capas de merino peinado en Coyhaique. Pesa lo justo para una siesta de invierno y no pica.",
    story:
      "La tejen en un taller de Coyhaique con lana de rebaño local. El punto es denso, sin pretender cachemira. Sirve de pie de cama o de manta de once cuando la casa todavía está fría.",
    material: "100% lana merino · 480 g/m²",
    origin: "Tejida en Coyhaique, Aysén",
    oficio: "Telar y peinado a mano",
    measures: "140 × 200 cm",
    care: "Lavar a mano con agua fría. Tender plana. No centrifugar.",
    weight: "1,3 kg",
    sku: "BA-TX-01",
    stock: 6,
    leadDays: 2,
    featured: true,
    colors: [
      { id: "avena", name: "Avena", hex: "#d9cbb8" },
      { id: "piedra", name: "Piedra", hex: "#9aa09a" },
    ],
  },
  {
    slug: "mantel-maule",
    name: "Mantel Maule",
    kicker: "Lino lavado",
    category: "textil",
    price: 89_000,
    image: "/images/mantel.jpg",
    images: ["/images/mantel.jpg", "/images/lino.jpg", "/images/hero.jpg"],
    excerpt:
      "Lino de Maule lavado hasta que cae. Las arrugas son parte del oficio, no un defecto.",
    story:
      "El lino se hiló cerca de Cauquenes y se confeccionó en Santiago con orilla francesa. No se plancha para una foto: se pone en la mesa y se usa. Con los lavados se pone más claro.",
    material: "Lino europeo cultivado en Maule · 185 g/m²",
    origin: "Confeccionado en Santiago",
    oficio: "Costura francesa, orilla viva",
    measures: "Según talla",
    care: "Lavadora 30 °C. Tender al aire. Plancha si quieres; no es obligatorio.",
    weight: "0,8–1,2 kg",
    sku: "BA-TX-02",
    stock: 11,
    leadDays: 1,
    featured: true,
    colors: [
      { id: "hueso", name: "Hueso", hex: "#efe6d6" },
      { id: "arcilla", name: "Arcilla", hex: "#c4a07a" },
    ],
    sizes: [
      { id: "160", name: "160 × 250 cm", price: 79_000 },
      { id: "180", name: "180 × 280 cm", price: 89_000 },
      { id: "350", name: "180 × 350 cm", price: 109_000 },
    ],
  },
  {
    slug: "servilletas-once",
    name: "Servilletas Once",
    kicker: "Set de 4",
    category: "textil",
    price: 24_900,
    image: "/images/servilletas.jpg",
    images: ["/images/servilletas.jpg", "/images/lino.jpg", "/images/once.jpg"],
    excerpt:
      "Cuatro servilletas de lino para el pan, el té y lo que se cae. El set que abre la mesa.",
    story:
      "El mismo lino del mantel, cortado a 42 cm. Van a la lavadora con el resto de la casa. El dobladillo es angosto a propósito: que no estorbe al doblar.",
    material: "Lino lavado · 185 g/m²",
    origin: "Confeccionado en Santiago",
    oficio: "Dobladillo a 6 mm",
    measures: "42 × 42 cm c/u",
    care: "Lavadora 30 °C. Se ablandan con cada once.",
    weight: "280 g el set",
    sku: "BA-TX-03",
    stock: 18,
    leadDays: 1,
    colors: [
      { id: "hueso", name: "Hueso", hex: "#efe6d6" },
      { id: "salvia", name: "Salvia", hex: "#b7bba8" },
    ],
  },
  {
    slug: "bowl-pomaire",
    name: "Bowl Pomaire",
    kicker: "Gres mate",
    category: "mesa",
    price: 16_900,
    image: "/images/bowl.jpg",
    images: ["/images/bowl.jpg", "/images/taller.jpg", "/images/once.jpg"],
    excerpt:
      "Greda de la misma loma. El esmalte no brilla: toma la luz y la suelta.",
    story:
      "Lo tornean en Pomaire con greda local y lo cuecen a gres. El pie queda crudo a propósito, para que no resbale en el mantel. Cabe un caldo o una once de yogurt y miel.",
    material: "Gres esmaltado mate",
    origin: "Torneado en Pomaire",
    oficio: "Torno de pie, horno a 1240 °C",
    measures: "Ø 14 cm · alto 7 cm",
    care: "Lavavajilla y horno. No microondas si está muy frío.",
    weight: "420 g",
    sku: "BA-MS-04",
    stock: 22,
    leadDays: 1,
    featured: true,
  },
  {
    slug: "fuente-litoral",
    name: "Fuente Litoral",
    kicker: "Gres oval",
    category: "mesa",
    price: 34_900,
    image: "/images/fuente.jpg",
    images: ["/images/fuente.jpg", "/images/taller.jpg", "/images/hero.jpg"],
    excerpt:
      "Una ovalada de 32 cm. Entra un pescado, una ensalada o el pan del domingo.",
    story:
      "Misma greda que el bowl, estirada a oval. El borde es grueso para tomarla con las dos manos al salir del horno. El esmalte interior es un poco más claro que el cuerpo.",
    material: "Gres esmaltado mate",
    origin: "Torneado en Pomaire",
    oficio: "Placa y torno",
    measures: "32 × 22 cm · alto 5 cm",
    care: "Horno hasta 220 °C. Lavavajilla.",
    weight: "1,1 kg",
    sku: "BA-MS-05",
    stock: 9,
    leadDays: 2,
  },
  {
    slug: "jarron-niebla",
    name: "Jarrón Niebla",
    kicker: "Engobe de ceniza",
    category: "mesa",
    price: 42_000,
    image: "/images/jarron.jpg",
    images: ["/images/jarron.jpg", "/images/taller.jpg", "/images/estante.jpg"],
    excerpt:
      "Cilindro de 28 cm. El engobe se hace con ceniza de lenga. Un ramo, o nada.",
    story:
      "Pieza de un taller en Valdivia. El gris no es pintura: es ceniza de lenga mezclada al engobe. Cada hornada cambia un grado. Si no hay flores, igual sostiene la mesa.",
    material: "Gres engobado",
    origin: "Valdivia, Los Ríos",
    oficio: "Torno y engobe de ceniza",
    measures: "Alto 28 cm · Ø 11 cm",
    care: "Agua quieta. No lavavajilla: el engobe es mate y poroso.",
    weight: "1,4 kg",
    sku: "BA-MS-06",
    stock: 4,
    leadDays: 3,
  },
  {
    slug: "copas-reloncavi",
    name: "Copas Reloncaví",
    kicker: "Vidrio soplado · par",
    category: "mesa",
    price: 29_900,
    image: "/images/copas.jpg",
    images: ["/images/copas.jpg", "/images/once.jpg", "/images/estante.jpg"],
    excerpt:
      "Dos vasos soplados. El borde no es perfecto. El agua se ve más clara.",
    story:
      "Las soplan en Puerto Varas con vidrio reciclado de taller. Cada par sale distinto de alto por milímetros. Sirven para agua, vino o un pisco con hielo. Se venden de a dos.",
    material: "Vidrio soplado reciclado",
    origin: "Puerto Varas, Los Lagos",
    oficio: "Soplete y molde libre",
    measures: "Alto 12 cm · Ø 7 cm · 280 ml",
    care: "Lavavajilla, canasta superior. No choque térmico.",
    weight: "180 g c/u",
    sku: "BA-MS-07",
    stock: 14,
    leadDays: 2,
    featured: true,
  },
  {
    slug: "jarra-soplada",
    name: "Jarra Soplada",
    kicker: "Vidrio · 1,2 L",
    category: "mesa",
    price: 36_000,
    image: "/images/jarra.jpg",
    images: ["/images/jarra.jpg", "/images/estante.jpg", "/images/once.jpg"],
    excerpt:
      "Una jarra de 1,2 litros con asa irregular. El agua de la once, o un vino blanco.",
    story:
      "Misma hornada que las copas Reloncaví. El asa se pega a mano y por eso nunca queda simétrica. Cabe en la heladera de una casa chica.",
    material: "Vidrio soplado reciclado",
    origin: "Puerto Varas, Los Lagos",
    oficio: "Soplete, asa al calor",
    measures: "Alto 24 cm · 1,2 L",
    care: "Lavavajilla, canasta superior. No congelar.",
    weight: "720 g",
    sku: "BA-MS-08",
    stock: 7,
    leadDays: 2,
  },
  {
    slug: "taza-gres",
    name: "Taza Gres",
    kicker: "Una taza",
    category: "mesa",
    price: 12_900,
    image: "/images/taza.jpg",
    images: ["/images/taza.jpg", "/images/taller.jpg", "/images/once.jpg"],
    excerpt:
      "La taza de todos los días. Asa ancha, pie crudo, 280 ml de té o café.",
    story:
      "Sale del mismo torno que el bowl. El interior es un esmalte un punto más claro para ver el color del té. La asa cabe dos dedos sin quemarse.",
    material: "Gres esmaltado mate",
    origin: "Torneado en Pomaire",
    oficio: "Torno de pie",
    measures: "Alto 9 cm · 280 ml",
    care: "Lavavajilla y microondas.",
    weight: "310 g",
    sku: "BA-MS-09",
    stock: 26,
    leadDays: 1,
  },
  {
    slug: "tabla-rauli",
    name: "Tabla Raulí",
    kicker: "Madera nativa",
    category: "madera",
    price: 38_000,
    image: "/images/tabla.jpg",
    images: ["/images/tabla.jpg", "/images/hero.jpg", "/images/once.jpg"],
    excerpt:
      "Raulí de derribo autorizado. Aceite de linaza. El pan, el queso, el cuchillo.",
    story:
      "La cortan en un taller de Valdivia con madera de derribo, no de bosque vivo. El canto vivo se deja. Se aceita tres veces antes de salir. Con los años se oscurece y eso es el uso, no el daño.",
    material: "Raulí · aceite de linaza",
    origin: "Carpintería en Valdivia",
    oficio: "Sierra y aceite a mano",
    measures: "42 × 22 × 2,4 cm",
    care: "Lavar a mano. Aceitar cuando se vea seca. No remojar.",
    weight: "1,05 kg",
    sku: "BA-MD-10",
    stock: 8,
    leadDays: 2,
    featured: true,
  },
  {
    slug: "cucharas-lingue",
    name: "Cucharas Lingue",
    kicker: "Set de 3",
    category: "madera",
    price: 22_900,
    image: "/images/cucharas.jpg",
    images: ["/images/cucharas.jpg", "/images/tabla.jpg", "/images/once.jpg"],
    excerpt:
      "Tres cucharas de lingue, largos distintos. Servir, revolver, probar.",
    story:
      "Talladas en Puerto Montt con lingue de poda. No son un juego de diseño: son tres largos que se usan. La más corta cabe en el bowl; la larga, en la fuente.",
    material: "Lingue · cera de abeja",
    origin: "Talladas en Puerto Montt",
    oficio: "Talla y cera",
    measures: "18 / 24 / 30 cm",
    care: "Lavar a mano. Encerar dos veces al año.",
    weight: "180 g el set",
    sku: "BA-MD-11",
    stock: 12,
    leadDays: 1,
  },
  {
    slug: "cojin-costa",
    name: "Cojín Costa",
    kicker: "Lino · funda",
    category: "textil",
    price: 32_000,
    image: "/images/cojin.jpg",
    images: ["/images/cojin.jpg", "/images/lino.jpg", "/images/interior.jpg"],
    excerpt:
      "Funda de lino con cierre escondido. El relleno se vende aparte, o usas el que ya tienes.",
    story:
      "El mismo lino del mantel, cortado a funda. Cierre en la espalda, no a la vista. Pensado para un banco de once o el respaldo de una silla que ya no tiene tapiz.",
    material: "Lino lavado · 185 g/m²",
    origin: "Confeccionado en Santiago",
    oficio: "Funda con cierre oculto",
    measures: "Según talla",
    care: "Sacar la funda. Lavadora 30 °C.",
    weight: "220 g la funda",
    sku: "BA-TX-12",
    stock: 10,
    leadDays: 1,
    colors: [
      { id: "hueso", name: "Hueso", hex: "#efe6d6" },
      { id: "salvia", name: "Salvia", hex: "#b7bba8" },
    ],
    sizes: [
      { id: "45", name: "45 × 45 cm", price: 32_000 },
      { id: "50", name: "50 × 70 cm", price: 38_000 },
    ],
  },
  {
    slug: "aceite-limari",
    name: "Aceite Limarí",
    kicker: "500 ml · cosecha",
    category: "despensa",
    price: 14_900,
    image: "/images/aceite.jpg",
    images: ["/images/aceite.jpg", "/images/once.jpg", "/images/estante.jpg"],
    excerpt:
      "Arbequina de Ovalle, prensada en frío. Amargo corto, picante limpio. Para el pan.",
    story:
      "Una cosecha de un huerto en el valle del Limarí. Se prensa a las 12 horas de la palma. El vidrio oscuro no es estética: es para que no se oxide en la despensa. Va a la mesa con el pan y la sal.",
    material: "Aceite de oliva extra virgen · arbequina",
    origin: "Ovalle, valle del Limarí",
    oficio: "Prensa en frío, cosecha 2026",
    measures: "500 ml",
    care: "Sombra, tapado. Consumir en 8 meses una vez abierto.",
    weight: "720 g la botella",
    sku: "BA-DS-13",
    stock: 40,
    leadDays: 1,
  },
  {
    slug: "vela-quillay",
    name: "Vela Quillay",
    kicker: "Cera de abeja",
    category: "despensa",
    price: 18_900,
    image: "/images/vela.jpg",
    images: ["/images/vela.jpg", "/images/once.jpg", "/images/hero.jpg"],
    excerpt:
      "Cera de abeja del Maule y un hilo de algodón. Huele a miel cuando prende, no a perfume.",
    story:
      "Moldeada en un taller de Talca con cera de apicultores del secano. El nombre es el árbol: el quillay, que las abejas visitan. Arde unas 32 horas. No se perfuma.",
    material: "Cera de abeja · mecha de algodón",
    origin: "Talca, Maule",
    oficio: "Molde a temperatura baja",
    measures: "Alto 9 cm · Ø 7 cm · 32 h",
    care: "Cortar mecha a 5 mm. No dejar sola.",
    weight: "280 g",
    sku: "BA-DS-14",
    stock: 16,
    leadDays: 1,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export function getByCategory(id: CategoryId | "todas") {
  if (id === "todas") return products;
  return products.filter((p) => p.category === id);
}

export function getRelated(slug: string, n = 3) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, n);
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const same = Number(b.category === current.category) - Number(a.category === current.category);
      return same;
    })
    .slice(0, n);
}

export function searchProducts(q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return products.filter((p) =>
    [p.name, p.kicker, p.origin, p.material, p.category, p.excerpt].some((s) =>
      s.toLowerCase().includes(needle),
    ),
  );
}

export function categoryLabel(id: CategoryId) {
  return categories.find((c) => c.id === id)?.label ?? id;
}
