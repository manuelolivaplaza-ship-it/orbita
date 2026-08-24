// NORTE ESTUDIO — Arquitectura · todo el contenido del sitio vive acá.
// "operacion" agrupa el estado: venta = obra construida, arriendo = en obra.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Obra construida" : "En obra");

export interface Propiedad {
  id: string;
  ref: string;
  titulo: string;
  operacion: Operacion;
  tipo: string;
  comuna: string;
  precioUF: number;
  gastosComunes: number;
  dormitorios: number;
  banos: number;
  m2: number;
  terrenoM2?: number;
  estacionamientos: number;
  anio: number;
  descripcion: string;
  fotos: string[];
  destacada?: boolean;
  coord: [number, number];
}

const media = (n: string) => `${import.meta.env.BASE_URL}media/${n}`;

export const marca = {
  nombre: "NORTE",
  sufijo: "Estudio",
  kicker: "Arquitectura · Santiago · desde 2018",
  claim: ["Buen proyecto,", "obra corta,", "casa tranquila."],
  sub: "Obra nueva, ampliaciones y remodelaciones con un sistema propio: módulos prefabricados de madera que se montan en semanas y terminaciones resueltas en obra. El proyecto se ve completo antes de partir.",
  ctaPrimario: { texto: "Ver proyectos", a: "/proyectos" },
  ctaSecundario: { texto: "Consultar por un proyecto", a: "/servicios" },
  telefono: "+56 9 4444 8811",
  telefonoHref: "tel:+56944448811",
  correo: "hola@norteestudio.cl",
  direccion: "Los Militares 5620, of. 1003 · Las Condes, Santiago",
  horario: "Lunes a viernes 9:00–18:00 · visitas a obra los jueves",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del estudio.",
};

export const etiquetas = {
  catalogo: "Proyectos",
  catalogoUno: "Proyecto",
  captacion: "Servicios",
  nosotros: "El estudio",
  fichaPlural: "proyectos",
};

export const rutas = {
  inicio: "/",
  catalogo: "/proyectos",
  ficha: "/proyecto",
  captacion: "/servicios",
  nosotros: "/estudio",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Proyectos", a: "/proyectos" },
  { texto: "Servicios", a: "/servicios" },
  { texto: "Estudio", a: "/estudio" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Obras entregadas", v: "31" },
  { k: "Montaje promedio", v: "9 semanas" },
  { k: "Primera visita", v: "sin costo" },
];

export const comunas = [
  "Las Condes",
  "Lo Barnechea",
  "La Reina",
  "Ñuñoa",
  "Providencia",
  "Melipilla",
  "Casablanca",
  "Zapallar",
];

export const propiedades: Propiedad[] = [
  {
    id: "casa-modelo-las-condes",
    ref: "NE·14",
    titulo: "Casa Modelo A — Las Condes",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Las Condes",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 145,
    terrenoM2: 250,
    estacionamientos: 2,
    anio: 2023,
    descripcion:
      "La casa de entrada al sistema NORTE: 145 m² en dos niveles de madera CLT, montados en siete semanas. Cocina-comedor al norte, living doble altura y escritorio en el entrepiso. Precio cerrado antes de partir.",
    fotos: [media("hero.jpg"), media("detail.jpg"), media("model.jpg"), media("site.jpg")],
    destacada: true,
    coord: [-33.412, -70.562],
  },
  {
    id: "casa-sitio-melipilla",
    ref: "NE·21",
    titulo: "Casa Sitio Largo — Melipilla",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Melipilla",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 190,
    terrenoM2: 5000,
    estacionamientos: 4,
    anio: 2024,
    descripcion:
      "Vivienda agrícola de un nivel extendida en línea: cada dormitorio con su ventana propia al campo, galpón adherido de 80 m² y pérgola de pino tratado que sombrea toda la fachada norte.",
    fotos: [media("site.jpg"), media("hero.jpg"), media("model.jpg")],
    destacada: true,
    coord: [-33.688, -71.216],
  },
  {
    id: "ampliacion-modelo-nunoa",
    ref: "NE·18",
    titulo: "Ampliación Segundo Nivel — Ñuñoa",
    operacion: "venta",
    tipo: "Ampliación",
    comuna: "Ñuñoa",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 85,
    estacionamientos: 1,
    anio: 2023,
    descripcion:
      "Segundo nivel prefabricado sobre casa de los 90: la familia se muda por nueve semanas y vuelve a una suite, un baño nuevo y una terraza de 18 m². Estructura independiente que no toca la existente.",
    fotos: [media("model.jpg"), media("detail.jpg"), media("hero.jpg")],
    destacada: true,
    coord: [-33.463, -70.611],
  },
  {
    id: "casa-detalle-zapallar",
    ref: "NE·23",
    titulo: "Casa Detalle — Zapallar",
    operacion: "arriendo",
    tipo: "Obra nueva",
    comuna: "Zapallar",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 3,
    m2: 165,
    terrenoM2: 800,
    estacionamientos: 2,
    anio: 2025,
    descripcion:
      "Casa de veraneo con sistema mixto: módulo húmedo prefabricado (cocina y baños llega terminado de fábrica) y envolvente de madera en obra. En montaje, entrega enero 2026.",
    fotos: [media("detail.jpg"), media("site.jpg")],
    coord: [-32.553, -71.462],
  },
  {
    id: "estudio-modelo-providencia",
    ref: "NE·16",
    titulo: "Estudio Anexo — Providencia",
    operacion: "venta",
    tipo: "Ampliación",
    comuna: "Providencia",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 1,
    m2: 38,
    estacionamientos: 0,
    anio: 2022,
    descripcion:
      "Anexo de 38 m² para trabajar desde casa: módulo CLT con baño completo, instalado en el patio en diez días sin obrador. Calefacción eléctrica de panel y aislación para los cuatro sistemas del año.",
    fotos: [media("model.jpg"), media("hero.jpg")],
    coord: [-33.437, -70.621],
  },
  {
    id: "casa-hermano-barnechea",
    ref: "NE·20",
    titulo: "Casa Hermana — Lo Barnechea",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Lo Barnechea",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 175,
    terrenoM2: 320,
    estacionamientos: 2,
    anio: 2024,
    descripcion:
      "Dos casas gemelas en sitio panión: cada una con su patio y su entrada, pero una sola construcción en partida. La shared wall es hidrófoba doble: no se escucha ni el lavavajillas del vecino, que es el hermano.",
    fotos: [media("hero.jpg"), media("site.jpg"), media("detail.jpg")],
    coord: [-33.356, -70.518],
  },
  {
    id: "sede-detalle-casablanca",
    ref: "NE·24",
    titulo: "Sede Viñedo — Casablanca",
    operacion: "arriendo",
    tipo: "Equipamiento",
    comuna: "Casablanca",
    precioUF: 2026,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 4,
    m2: 420,
    estacionamientos: 20,
    anio: 2026,
    descripcion:
      "Sede de recepción de viñedo: pabellón de madera con catas al sur y terraza techada hacia las parras. Sistema de tres módulos ampliables a cinco si el turismo crece. En fábrica.",
    fotos: [media("detail.jpg"), media("model.jpg"), media("site.jpg")],
    coord: [-33.321, -71.412],
  },
  {
    id: "remodela-hero-reina",
    ref: "NE·17",
    titulo: "Remodelación Heroica — La Reina",
    operacion: "venta",
    tipo: "Remodelación",
    comuna: "La Reina",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 120,
    estacionamientos: 2,
    anio: 2022,
    descripcion:
      "Casa de 1975 que se salvó de la demolición: se reforzó, se abrió la cocina y se cambió todo menos la estructura. El presupuesto quedó 30% bajo una obra nueva equivalente.",
    fotos: [media("hero.jpg"), media("detail.jpg")],
    coord: [-33.447, -70.55],
  },
];

export const cifras = [
  { valor: 7, sufijo: "", etiqueta: "Años de estudio", detalle: "Fundado en 2018 por dos socios" },
  { valor: 31, sufijo: "", etiqueta: "Obras entregadas", detalle: "Casas, anexos y equipamiento" },
  { valor: 9, sufijo: " sem", etiqueta: "Montaje promedio", detalle: "Desde la llegada de los módulos a obra" },
  { valor: 18, sufijo: "%", etiqueta: "Bajo obra tradicional", detalle: "Ahorro promedio del sistema en costos" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Casas NORTE",
    texto: "Obra nueva de 120 a 200 m² con sistema prefabricado de madera: precio cerrado y fecha de entrega firmada.",
    pie: "7 a 12 semanas de montaje",
  },
  {
    n: "02",
    titulo: "Anexos y ampliaciones",
    texto: "Módulos de 20 a 60 m² que se instalan en el patio sin obrador: oficinas, suites y arriendos.",
    pie: "Instalado en 10 días",
  },
  {
    n: "03",
    titulo: "Remodelaciones",
    texto: "Recuperación de casas existentes con refuerzo, redistribución y presupuesto comparado contra obra nueva.",
    pie: "Con presupuesto cerrado",
  },
  {
    n: "04",
    titulo: "Equipamiento pequeño",
    texto: "Sedes, refugios y comercio en sistema modular ampliable: se crece agregando módulos, no demoliendo.",
    pie: "Ampliable por diseño",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Sitio y presupuesto",
    texto: "Visita sin costo, medición del sitio y una propuesta con precio cerrado por m². Sabe cuánto cuesta antes de enamorarse.",
  },
  {
    n: "02",
    titulo: "Diseño en el sistema",
    texto: "La casa se diseña dentro del sistema: módulos de 3,6 m, ventanas estándar y baños de catálogo. Menos sorpresas, más velocidad.",
  },
  {
    n: "03",
    titulo: "Fábrica y permisos",
    texto: "Mientras la fábrica corta los módulos, gestionamos el permiso y preparamos las fundaciones. Dos pistas en paralelo.",
  },
  {
    n: "04",
    titulo: "Montaje y entrega",
    texto: "Los módulos llegan en camión y se montan en semanas. Entrega con planos, manual de mantención y garantía de cinco años.",
  },
];

export const equipo = [
  { iniciales: "PA", nombre: "Pedro Aguirre", cargo: "Arquitecto PUC · Socio fundador", detalle: "Diseño y sistema constructivo." },
  { iniciales: "TF", nombre: "Tomás Fuenzalida", cargo: "Arquitecto UDP · Socio", detalle: "Obra, permisos y montajes." },
  { iniciales: "SN", nombre: "Sofía Núñez", cargo: "Arquitecta · Proyectos", detalle: "Remodelaciones y equipamiento." },
  { iniciales: "BR", nombre: "Bruno Rojas", cargo: "Constructor · Fábrica", detalle: "Control de calidad de los módulos." },
];

export const testimonios = [
  {
    texto: "Nos mostraron el precio cerrado y la fecha de entrega en la segunda reunión. Cumplieron ambas.",
    autor: "Familia Undurraga",
    detalle: "Mandantes · Casa Modelo A",
  },
  {
    texto: "Se fueron nueve semanas y volvieron a una casa con segundo piso nuevo. Sin mudanza definitiva.",
    autor: "P. y C. Larraín",
    detalle: "Mandantes · Ampliación Ñuñoa",
  },
  {
    texto: "El anexo del patio se pagó solo: lo arrendamos como oficina y cubre el crédito.",
    autor: "M. Sepúlveda",
    detalle: "Mandante · Estudio Anexo",
  },
];

export const faq = [
  {
    p: "¿Una casa prefabricada vale menos?",
    r: "Vale lo mismo que una de obra tradicional con el mismo estándar, pero cuesta en promedio 18% menos y se entrega en meses, no en años. La tasación no distingue el sistema constructivo.",
  },
  {
    p: "¿Puedo personalizar la casa?",
    r: "Sí: dentro del sistema. Cambian distribución, ventanas, terminaciones y tamaños de módulo. Lo que no cambia es la lógica constructiva, que es la que da el precio y el plazo.",
  },
  {
    p: "¿Qué pasa con los permisos?",
    r: "Los gestionamos completos. Obra nueva demora entre 4 y 8 meses según comuna; los anexos bajo 60 m² suelen ir por obra menor, más rápido.",
  },
  {
    p: "¿La madera resiste el clima de Santiago?",
    r: "Con el tratamiento correcto, sí: madera CLT europea o nacional con protección contra humedad e incendio según norma. Nuestras primeras casas cumplen siete inviernos sin deformaciones.",
  },
  {
    p: "¿Dan garantía?",
    r: "Cinco años de estructura y dos en terminaciones, más el manual de mantención de cada material. La fábrica agrega su propia garantía de módulos.",
  },
];

export const valoresGestion = {
  intro: "Precios que se pueden planificar.",
  sub: "El sistema permite cerrar precios por m² antes de diseñar. Cada propuesta incluye el desglose y las alternativas de ahorro.",
  filas: [
    { tipo: "Casa NORTE (obra nueva)", detalle: "120–200 m², sistema prefabricado", venta: "32–40 UF/m²", arriendo: "precio cerrado" },
    { tipo: "Anexo modular", detalle: "20–60 m² con baño incluido", venta: "38–46 UF/m²", arriendo: "instalación en 10 días" },
    { tipo: "Remodelación integral", detalle: "Refuerzo + redistribución", venta: "18–26 UF/m²", arriendo: "según estado de partida" },
    { tipo: "Honorarios de proyecto", detalle: "Diseño, permisos y dirección", venta: "8–11% de la obra", arriendo: "incluye gestión completa" },
  ],
};

// Paleta del hero 3D — día claro, torres blancas, acento petróleo.
export const tema3d = {
  noche: false,
  fondo: "#f5f6f4",
  niebla: "#f5f6f4",
  torre: "#ffffff",
  torreTecho: "#e3e6e4",
  ventanas: "#9fb8ba",
  ventanasAlt: "#c2d2d3",
  acento: "#175a5e",
  suelo: "#e8ebe8",
  estrellas: "#5a6560",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Sistema NORTE: precio primero, casa después.",
  sub: "Cuéntenos su sitio y qué quiere construir. Le devolvemos un rango de precio cerrado la misma semana y una visita de medición sin costo.",
  beneficios: [
    { titulo: "Precio cerrado al inicio", texto: "El sistema permite cotizar por m² antes de diseñar. El presupuesto no se descubre en obra." },
    { titulo: "Montaje en semanas", texto: "Nueve semanas promedio desde que llegan los módulos. Con fecha firmada." },
    { titulo: "Ampliable por diseño", texto: "Las casas NORTE crecen agregando módulos: el anexo de dentro de cinco años ya está pensado." },
    { titulo: "Garantía real", texto: "Cinco años de estructura y manual de mantención de cada material." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "Dos socios y una fábrica.",
  parrafo1:
    "NORTE nació en 2018 con una sospecha: la casa promedio se demora y se pasa de presupuesto porque se diseña fuera del sistema que la va a construir. Al revés es mejor: primero el sistema, después la casa.",
  parrafo2:
    "Diseñamos dentro de un catálogo de módulos de madera que una fábrica aliada corta con control numérico. Eso fija precios, acorta plazos y libera el tiempo del estudio para lo que importa: cómo se vive la casa.",
  valores: [
    { titulo: "Sistema antes que ego", texto: "Diseñamos dentro del sistema constructivo. La casa es mejor cuando el sistema es honesto." },
    { titulo: "Precio en la segunda reunión", texto: "El rango llega temprano y cerrado. Nadie diseña sobre una esperanza." },
    { titulo: "Ampliable siempre", texto: "Toda casa NORTE puede crecer por diseño: módulos que se suman sin cirugía." },
  ],
};
