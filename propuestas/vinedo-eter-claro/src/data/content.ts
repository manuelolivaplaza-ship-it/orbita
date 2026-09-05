export type WineColor = "blanco" | "tinto" | "espumante";

export type Wine = {
  slug: string;
  name: string;
  vintage: number;
  varietal: string;
  color: WineColor;
  price: number;
  format: string;
  cuartel: string;
  alcohol: string;
  production: string;
  guarda: string;
  temp: string;
  image: string;
  alt: string;
  lead: string;
  note: string;
  soil: string;
  pairing: string;
  stock: "en cava" | "últimas cajas";
};

export const wines: Wine[] = [
  {
    slug: "niebla",
    name: "Niebla",
    vintage: 2024,
    varietal: "Sauvignon Blanc",
    color: "blanco",
    price: 16900,
    format: "750 ml",
    cuartel: "Cuartel 3 · Lo Ovalle",
    alcohol: "12,4%",
    production: "4.200 botellas",
    guarda: "Acero · 6 meses sobre lías finas",
    temp: "8–10 °C",
    image: "/images/blanco.jpg",
    alt: "Botella de Niebla, Sauvignon Blanc, copa con vino pálido sobre lino",
    lead: "El vino que es ETER. Nace cuando la niebla todavía cubre el cuartel 3.",
    note: "Ruda chilena, lima de pica, piedra mojada. Acidez tensa, final salino. No busca fruta tropical: busca aire.",
    soil: "Granito descompuesto, 248 m s.n.m.",
    pairing: "Ostiones al vapor, ceviche de reineta, queso de cabra de Casablanca.",
    stock: "en cava",
  },
  {
    slug: "alba",
    name: "Alba",
    vintage: 2023,
    varietal: "Chardonnay",
    color: "blanco",
    price: 24900,
    format: "750 ml",
    cuartel: "Cuartel 7 · ladera este",
    alcohol: "13,1%",
    production: "2.800 botellas",
    guarda: "8 meses en fudre de 2.000 L",
    temp: "10–12 °C",
    image: "/images/blanco.jpg",
    alt: "Botella de Alba, Chardonnay, copa con vino dorado pálido sobre lino",
    lead: "Chardonnay de ladera este. El sol llega tarde; el vino no tiene prisa.",
    note: "Manzana verde, avellana, sal. El fudre no maquilla: ordena. Boca ancha y seca.",
    soil: "Franco-arenoso con caliche, exposición este.",
    pairing: "Erizos, risotto de setas, ave asada con limón.",
    stock: "en cava",
  },
  {
    slug: "quinta",
    name: "Quinta",
    vintage: 2024,
    varietal: "Ensamblaje blanco",
    color: "blanco",
    price: 34900,
    format: "750 ml",
    cuartel: "Cuarteles 3, 7 y 9",
    alcohol: "12,6%",
    production: "1.400 botellas",
    guarda: "Acero · sin madera",
    temp: "8–10 °C",
    image: "/images/blanco.jpg",
    alt: "Botella de Quinta, ensamblaje blanco, copa pálida sobre lino",
    lead: "Tres cepas, un aire. El ensamblaje que nombra al éter.",
    note: "Sauvignon Blanc 50%, Chardonnay 30%, Riesling 20%. Cítrico, flor blanca, grafito. El Riesling pone el hueso.",
    soil: "Tres cuarteles, una niebla.",
    pairing: "Ceviche de locos, cocina nikkei, almendras tostadas.",
    stock: "últimas cajas",
  },
  {
    slug: "bruma",
    name: "Bruma",
    vintage: 2023,
    varietal: "Pinot Noir",
    color: "tinto",
    price: 29900,
    format: "750 ml",
    cuartel: "Cuartel 11 · exposición sur",
    alcohol: "12,8%",
    production: "2.100 botellas",
    guarda: "11 meses en roble usado",
    temp: "14–16 °C",
    image: "/images/tinto.jpg",
    alt: "Botella de Bruma, Pinot Noir, copa de rubí pálido sobre lino",
    lead: "Pinot transparente. Si no ves a través de la copa, no es este vino.",
    note: "Guinda ácida, tierra húmeda, pétalo. Tanino fino, acidez viva. Un tinto que se sirve fresco.",
    soil: "Arcilla ligera sobre granito, 262 m.",
    pairing: "Salmón a la parrilla, pato, champiñones al ajillo.",
    stock: "en cava",
  },
  {
    slug: "viento",
    name: "Viento",
    vintage: 2022,
    varietal: "Syrah",
    color: "tinto",
    price: 27900,
    format: "750 ml",
    cuartel: "Cuartel 14 · loma oeste",
    alcohol: "13,4%",
    production: "1.900 botellas",
    guarda: "14 meses · 20% fudre nuevo",
    temp: "16–18 °C",
    image: "/images/tinto.jpg",
    alt: "Botella de Viento, Syrah, copa de vino tinto sobre lino",
    lead: "Syrah de la loma oeste, donde el Pacífico se siente en la tarde.",
    note: "Pimienta blanca, oliva, mora. No es un syrah de calor: es un syrah de viento.",
    soil: "Loma ventosa, suelo pobre, 271 m.",
    pairing: "Cordero al palo, lentejas, queso maduro.",
    stock: "en cava",
  },
  {
    slug: "camanchaca",
    name: "Camanchaca",
    vintage: 2022,
    varietal: "Espumante brut nature",
    color: "espumante",
    price: 32900,
    format: "750 ml",
    cuartel: "Cuarteles 7 y 11",
    alcohol: "12,2%",
    production: "1.800 botellas",
    guarda: "Método tradicional · 24 meses en lías",
    temp: "6–8 °C",
    image: "/images/espumante.jpg",
    alt: "Botella de Camanchaca, espumante brut nature, copa flauta sobre lino",
    lead: "Método tradicional, 24 meses en lías. La niebla en burbuja.",
    note: "Chardonnay 70%, Pinot Noir 30%. Manzana asada, pan, sal. Cero gramos de azúcar. Brut nature de verdad.",
    soil: "Mismas laderas, segunda fermentación en botella.",
    pairing: "Ostras, fried chicken, el aperitivo sin pretexto.",
    stock: "en cava",
  },
];

export type Visit = {
  slug: string;
  n: string;
  name: string;
  duration: string;
  price: number;
  cupo: number;
  lead: string;
  includes: string[];
  not: string[];
  schedule: string;
};

export const visits: Visit[] = [
  {
    slug: "cata-niebla",
    n: "01",
    name: "Cata Niebla",
    duration: "75 min",
    price: 22900,
    cupo: 10,
    lead: "Cuatro copas. El orden es el de la niebla: de más aire a más tierra.",
    includes: [
      "Niebla, Alba, Bruma y Viento",
      "Guía enológica",
      "Agua y pan de masa madre",
    ],
    not: ["Comida", "Recorrido de cuarteles"],
    schedule: "Mié–Dom · 11:00, 13:00 y 16:00",
  },
  {
    slug: "cuarteles",
    n: "02",
    name: "Recorrido de cuarteles",
    duration: "2 h",
    price: 36900,
    cupo: 8,
    lead: "Caminamos las hileras. Después, seis vinos en la sala de cata.",
    includes: [
      "Caminata guiada por tres cuarteles",
      "Los seis vinos de la casa",
      "Tabla de quesos de Casablanca",
    ],
    not: ["Almuerzo", "Traslado desde Santiago"],
    schedule: "Jue–Sáb · 10:30 y 15:00",
  },
  {
    slug: "mesa",
    n: "03",
    name: "Mesa en el viñedo",
    duration: "2 h 15 min",
    price: 49900,
    cupo: 8,
    lead: "Cuatro vinos y una tabla de Lo Ovalle. Se come mirando las parras.",
    includes: [
      "Niebla, Alba, Bruma, Camanchaca",
      "Tabla fría de productoras locales",
      "Agua, café y pan",
    ],
    not: ["Menú caliente", "Bebidas extra"],
    schedule: "Vie–Dom · 12:30",
  },
  {
    slug: "cava-privada",
    n: "04",
    name: "Cava privada",
    duration: "2 h",
    price: 92000,
    cupo: 8,
    lead: "El grupo completo, no por persona. Horario a convenir. La cava es de ustedes.",
    includes: [
      "Hasta 8 personas",
      "Seis vinos y tabla",
      "Anfitrión exclusivo",
    ],
    not: ["Traslado", "Menú caliente"],
    schedule: "Mié–Dom · horario a convenir",
  },
];

export const stats = [
  { value: "248", unit: "m s.n.m.", label: "Altitud del cuartel 3" },
  { value: "42", unit: "ha", label: "Plantadas en Lo Ovalle" },
  { value: "18.000", unit: "botellas", label: "Cosecha 2024, toda la casa" },
  { value: "12", unit: "personas", label: "Cupo máximo de cualquier cata" },
] as const;

export const facts = [
  {
    n: "01",
    title: "La niebla es el clima",
    body: "En Casablanca la camanchaca entra de madrugada y se queda hasta el mediodía. Baja la temperatura, alarga la madurez, guarda la acidez. No es un paisaje: es el método.",
  },
  {
    n: "02",
    title: "Suelo pobre, vino tenso",
    body: "Granito descompuesto, arena, caliche. Las parras buscan profundo. Rendimientos bajos a propósito: 6.000 kilos por hectárea, no más.",
  },
  {
    n: "03",
    title: "Poco, y a la vista",
    body: "Dieciocho mil botellas al año. Si una cosecha no está, no está. El stock de la tienda es el de la cava: lo que ves se puede llevar hoy.",
  },
] as const;

export const shippingNotes = [
  {
    title: "Retiro en viña",
    body: "Sin costo. Mié–Dom 10:00–18:00. Te avisamos cuando la caja está lista.",
  },
  {
    title: "Región Metropolitana",
    body: "Desde $4.990 · 24 a 48 h hábiles. Gratis sobre $80.000.",
  },
  {
    title: "Regiones",
    body: "Desde $7.990 · 48 a 72 h hábiles. Caja isotérmica en verano.",
  },
] as const;

export const faqs = [
  {
    q: "¿Cómo reservo y hasta cuándo puedo cancelar?",
    a: "En esta página o por WhatsApp. Cupo actualizado cada mañana. Cancelación o cambio hasta 24 h antes, sin costo. Si el horario se llena después de tu reserva, te reubicamos en dos horas hábiles.",
  },
  {
    q: "¿Qué incluye cada visita y cuánto dura de verdad?",
    a: "Lo que dice la ficha: minutos, copas, cupo. La Cata Niebla son 75 minutos, no 40 con foto. El recorrido de cuarteles son dos horas con calzado cerrado: el suelo es de verdad.",
  },
  {
    q: "¿Puedo comprar vino sin hacer la visita?",
    a: "Sí. Tienda en el fundo y despacho a todo Chile. El precio de la web es el de la viña, no hay lista paralela. Boleta o factura al momento.",
  },
  {
    q: "¿Qué pasa si llueve o hay mucho viento?",
    a: "La cata se hace igual: la sala está techada. El recorrido de cuarteles se acorta a un cuartel y se alarga en cava. No suspendemos: avisamos el cambio el mismo día.",
  },
  {
    q: "¿Cómo llego desde Santiago y hay estacionamiento?",
    a: "Ruta 68, km 68, Lo Ovalle, Casablanca. Unos 55 minutos sin taco. 32 cupos de estacionamiento en el fundo. Coordinamos transfer para grupos de 6 o más, con cargo aparte.",
  },
  {
    q: "¿Van niños? ¿Hay que pagar por ellos?",
    a: "Niños sí, en Cata Niebla y Mesa. No pagan si no degustan. El recorrido de cuarteles es desde 12 años: hay zanjas y alambre.",
  },
] as const;

export const slots = ["11:00", "12:30", "13:00", "15:00", "16:00"] as const;

export function wineBySlug(slug: string) {
  return wines.find((wine) => wine.slug === slug);
}

export function visitBySlug(slug: string) {
  return visits.find((visit) => visit.slug === slug);
}
