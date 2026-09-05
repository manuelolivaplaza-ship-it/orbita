export type Swatch = { name: string; hex: string };

export type Project = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  location: string;
  cover: string;
  coverAlt: string;
  atmosphere: string;
  atmosphereAlt: string;
  headline: string;
  lede: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
  quote: { text: string; author: string; role: string };
  palette: Swatch[];
  type: string;
  grid: string;
  supports: string[];
};

export const projects: Project[] = [
  {
    slug: "loica",
    name: "Loica",
    sector: "Vino · Colchagua",
    year: "2024",
    location: "Santa Cruz",
    cover: "/images/loica.jpg",
    coverAlt:
      "Viñedo en el valle de Colchagua al amanecer, hileras hacia los Andes entre niebla.",
    atmosphere: "/images/loica-2.jpg",
    atmosphereAlt: "Bodega de Loica: barricas y una raja de luz de mañana.",
    headline: "Una viña que se encuentra de espaldas.",
    lede: "Loica tenía un vino serio y una cara de catálogo. Componemos un sistema que se reconoce en la góndola — y un sitio que se lee como una cosecha, no como una “experiencia”.",
    challenge:
      "En Colchagua, el lujo se copia. Serif dorada, foto de la cordillera, la palabra terroir. Loica —una viña chica en Santa Cruz, de un enólogo que vendimía con su hermana— se veía como las otras doce botellas de su mismo precio. El sitio pedía una reserva que nadie hacía. La añada nueva era, cada año, un encargo nuevo a una agencia distinta.",
    approach: [
      "Nombramos lo que ya era: la loica, el pájaro de pecho rojo que cruza el valle. El color sale de ahí, no de un pantone de “premium”. El tipo, de un periódico agrícola, no de una joyería.",
      "La etiqueta se sostiene de espaldas: silueta, rojo, papel. Si hay que leer el nombre para reconocerla, falló. La caja, la ficha y el sitio hablan el mismo idioma.",
      "El sitio es un calendario de cosecha, no un video de drones. Precio en pesos. Dónde se consigue. Quién lo hace. Un formulario que llega al celular de la hermana, no a un CRM de moda.",
      "Dejamos un criterio para la próxima añada: qué se toca, qué no. El estudio no tiene que volver para que salga una etiqueta nueva.",
    ],
    outcome:
      "La botella se encuentra en el pasillo. El sitio se usa. La añada siguiente se diseñó en la viña, con la guía abierta, un martes.",
    metrics: [
      { value: "1", label: "sistema, cuatro soportes" },
      { value: "0", label: "agencias para la añada siguiente" },
      { value: "14", label: "meses en góndola sin retoque" },
    ],
    quote: {
      text: "Por fin el vino se parece a como lo hacemos. No a como se supone que se ve un vino chileno.",
      author: "Rosa Henríquez",
      role: "Enóloga, Loica",
    },
    palette: [
      { name: "Pecho", hex: "#9B1C2C" },
      { name: "Yeso", hex: "#F3EDE3" },
      { name: "Sarmiento", hex: "#6B5A3E" },
      { name: "Tinta", hex: "#1C1412" },
    ],
    type: "Newsreader / Geist",
    grid: "12 columnas · 8 pt",
    supports: ["Sitio", "Etiqueta", "Ficha", "Caja"],
  },
  {
    slug: "matta-980",
    name: "Matta 980",
    sector: "Cultura · Santiago",
    year: "2023",
    location: "Barrio Yungay",
    cover: "/images/matta.jpg",
    coverAlt:
      "Sala de Matta 980: piso de madera, banco y un cuadro abstracto a luz norte.",
    atmosphere: "/images/matta-2.jpg",
    atmosphereAlt: "Butacas de madera en la sala de Matta 980, luz de mañana.",
    headline: "Cuatro programas, un solo calendario.",
    lede: "Una casona en Yungay con cine, música, talleres y archivo que parecían cuatro instituciones. Les dimos un nombre, un tipo y una portada que es el programa de la semana.",
    challenge:
      "Matta 980 es una casona recuperada en Yungay. Cine los jueves, música los sábados, talleres, un archivo que nadie encontraba. Cada programa tenía un logo, un Instagram y un afiche distinto. El vecino no sabía si esa noche había algo. La directora pasaba el lunes armando stories. El edificio, hermoso, se leía como un galpón con Wi-Fi.",
    approach: [
      "Un nombre. Matta 980 — la dirección. Nada de “centro de las artes”. El tipo es uno, con peso para el afiche y para el celular. El color, el ocre del cielo de la casona a las cinco.",
      "La portada del sitio es el calendario. Qué hay hoy, qué hay esta semana, a qué hora, cuánto cuesta. Si no hay nada, se dice. El archivo vive un clic más atrás, no encima.",
      "Wayfinding mínimo: una familia de piezas para puerta, sala y programa. El afiche de la semana se baja en un PDF que una bibliotecaria puede imprimir.",
      "Entrenamos a dos personas del equipo. El calendario se carga en el estudio de ellas, no en el nuestro.",
    ],
    outcome:
      "El barrio sabe qué hay esta noche sin abrir Instagram. La directora dejó de ser community manager. La casona, por fin, se lee como una sola casa.",
    metrics: [
      { value: "4 → 1", label: "programas, una portada" },
      { value: "−60%", label: "consultas de “¿hay algo?”" },
      { value: "1", label: "familia tipográfica" },
    ],
    quote: {
      text: "Antes éramos cuatro casas en una. Ahora el vecino cruza y sabe.",
      author: "Paula Venegas",
      role: "Directora, Matta 980",
    },
    palette: [
      { name: "Ocre", hex: "#C48A3A" },
      { name: "Noche", hex: "#1B1A17" },
      { name: "Muro", hex: "#F2EBE0" },
      { name: "Patio", hex: "#5C6B52" },
    ],
    type: "Instrument Serif / Geist",
    grid: "8 columnas · 4 pt",
    supports: ["Identidad", "Sitio", "Afiche", "Señalética"],
  },
  {
    slug: "atalaya",
    name: "Atalaya",
    sector: "Hotel · Zapallar",
    year: "2025",
    location: "Zapallar",
    cover: "/images/atalaya.jpg",
    coverAlt:
      "Hotel Atalaya: volúmenes blancos sobre un acantilado del Pacífico en Zapallar.",
    atmosphere: "/images/atalaya-2.jpg",
    atmosphereAlt:
      "Habitación de Atalaya, cama de lino y ventana abierta al Pacífico.",
    headline: "Un hotel que se reserva sin pedir permiso.",
    lede: "Once habitaciones sobre el Pacífico y un sitio que parecía un catálogo de “boutique”. Marca, sitio y un camino de reserva con precio en pesos — también en julio.",
    challenge:
      "Atalaya es un lookout: once piezas, un acantilado, el Pacífico de frente. El sitio, no. Driftwood, la palabra escape, “request a quote”. En enero se llenaba por Instagram. En julio, silencio. Las OTAs se llevaban la margen. Nadie publicaba el precio. El huésped de cincuenta años, el que paga, cerraba la pestaña.",
    approach: [
      "La marca es el edificio. Blanco, mar, el pasto seco del litoral. Sin “boutique”. Sin caligrafía. El nombre —Atalaya— ya era el lugar. Lo dejamos trabajar.",
      "El sitio muestra las once habitaciones con la misma dignidad en junio y en enero. Precio en CLP, calendario real, mar en invierno. Fotografía del edificio, no de un modelo con copa.",
      "Reserva directa, clara, con lo que incluye y lo que no. WhatsApp para quien prefiere hablar. Nada de “su consulta ha sido enviada”.",
      "Una guía corta para quien atiende: tono, fotos que sí, fotos que no. El hotel puede publicar un mes sin llamarnos.",
    ],
    outcome:
      "Las reservas directas subieron. Las OTAs dejaron de ser el mostrador. En julio también hay gente mirando el mar — y pagando en pesos.",
    metrics: [
      { value: "+31%", label: "reservas directas" },
      { value: "11", label: "habitaciones, un sitio" },
      { value: "CLP", label: "precio a la vista" },
    ],
    quote: {
      text: "El sitio dejó de pedir disculpas. El hotel, también.",
      author: "Nicolás Urrutia",
      role: "Anfitrión, Atalaya",
    },
    palette: [
      { name: "Yeso", hex: "#F7F4EE" },
      { name: "Pacífico", hex: "#3A6B7C" },
      { name: "Secano", hex: "#C4A36A" },
      { name: "Sombra", hex: "#2A2E2C" },
    ],
    type: "Geist / Instrument Serif",
    grid: "12 columnas · 8 pt",
    supports: ["Marca", "Sitio", "Reserva", "Guía"],
  },
  {
    slug: "pliego",
    name: "Pliego",
    sector: "Editorial · Santiago",
    year: "2024",
    location: "Santiago Centro",
    cover: "/images/pliego.jpg",
    coverAlt:
      "Taller de Editorial Pliego: stacks de papel, prensa y luz de ventana.",
    atmosphere: "/images/pliego-2.jpg",
    atmosphereAlt: "Pliego abierto, hilo de lino y plegadera sobre una mesa de roble.",
    headline: "Cuarenta títulos, un solo formato.",
    lede: "Una editorial independiente cuyos libros parecían cuarenta editoriales. Un sistema de cubiertas, un catálogo que se lee como índice, una tienda que no grita.",
    challenge:
      "Pliego publica ensayo, poesía y un poco de narrativa. Cuarenta títulos, cuarenta diseñadores amigos, cuarenta cubiertas que no se hablan. En la feria, el stand se veía como una mesa de saldos. En el sitio, cada ficha era un invento. La editora —una sola persona, más una prensa en un galpón de San Diego— no podía sostener una “experiencia de marca”. Necesitaba un formato.",
    approach: [
      "Un formato de cubierta: grilla, tipo, una familia de papeles. El título hace el trabajo. El autor, también. El ornamento, no. Cada colección tiene un acento; el cuerpo es el mismo.",
      "El catálogo es la marca. El sitio se lee como un índice: autor, título, colección, precio. Se compra sin una cuenta. Se envía a regiones sin un tutorial.",
      "Fichas técnicas para la imprenta: márgenes, negros, lomo. La próxima novela no necesita un diseñador nuevo. Necesita respetar el pliego.",
      "Una tarde con la editora y el impresor. El sistema cabe en una carpeta, no en un drive de 12 gigas.",
    ],
    outcome:
      "El stand se lee como una editorial. El catálogo, también. Doce meses de títulos nuevos sin rediseñar el oficio.",
    metrics: [
      { value: "40", label: "títulos, un formato" },
      { value: "1", label: "tienda que se lee" },
      { value: "12", label: "meses de catálogo sin retoque" },
    ],
    quote: {
      text: "Por primera vez los libros se reconocen entre ellos. Eso, para una editorial chica, es un milagro cotidiano.",
      author: "Javiera Donoso",
      role: "Editora, Pliego",
    },
    palette: [
      { name: "Tinta", hex: "#161412" },
      { name: "Pliego", hex: "#EFE6D6" },
      { name: "Hilo", hex: "#A33A2C" },
      { name: "Lomo", hex: "#5A4632" },
    ],
    type: "Newsreader / Geist Mono",
    grid: "6 columnas · 12 pt",
    supports: ["Identidad", "Cubiertas", "Catálogo", "Tienda"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacent(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
