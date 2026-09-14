// Estudio de diseño (diseno-claro) — Branding y diseño editorial · contenido del sitio.
// "operacion": venta = proyecto publicado, arriendo = en desarrollo.
// m2 = año del caso · anio = semanas de proyecto.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Proyecto publicado" : "En desarrollo");
export const linea = (p: { m2: number }) => `Año ${p.m2}`;

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
  nombre: "Estudio",
  sufijo: "Trazado",
  kicker: "Branding y diseño editorial · Santiago de Chile",
  claim: ["Marcas que se", "leen, se usan", "y duran."],
  sub: "Estudio de branding y diseño editorial para empresas con algo que decir: identidad completa, sistemas que la gente sabe usar y piezas impresas que dan gusto tener en la mano. Proyectos acotados, dirección senior.",
  ctaPrimario: { texto: "Ver proyectos", a: "/casos" },
  ctaSecundario: { texto: "Cotizar proyecto", a: "/servicios" },
  telefono: "+56 9 7712 4466",
  telefonoHref: "tel:+56977124466",
  correo: "hola@estudiotrazado.cl",
  direccion: "Compañía de Jesús 2850 · Santiago Centro",
  horario: "Lunes a viernes 10:00–19:00",
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
  { texto: "El estudio", a: "/estudio" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Dirección", v: "siempre senior" },
  { k: "Proyectos por año", v: "12 máximo" },
  { k: "Manuales", v: "que se usan" },
];

export const comunas = ["Santiago", "Providencia", "Valparaíso", "Ñuñoa", "Las Condes", "Todo Chile"];

export const cita = {
  texto:
    "El manual de marca lo usa el impresor del barrio sin preguntarnos nada. Esa era exactamente la prueba que le pusimos al estudio.",
  autor: "Ignacia Fuentes · gerente, tostadora de origen",
};

export const propiedades: Propiedad[] = [
  {
    id: "tostadora-origen",
    ref: "TR·01",
    titulo: "Tostadora de café de especialidad",
    operacion: "venta",
    tipo: "Branding + Empaque",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 8,
    descripcion:
      "Café excelente en bolsa genérica. Identidad tipográfica de oficio, sistema de empaque por origen y manual que el impresor local entiende. Resultado: las bolsas ahora son la razón por la que compran.",
    fotos: [media("papel-macro.png"), media("posters-prensa.png"), media("mesa-trabajo.png"), media("biblioteca-estudio.png")],
    destacada: true,
    coord: [-33.44, -70.653],
  },
  {
    id: "editorial-universidad",
    ref: "TR·02",
    titulo: "Colección editorial universitaria",
    operacion: "venta",
    tipo: "Editorial",
    comuna: "Providencia",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 16,
    descripcion:
      "Veinte años de publicaciones académicas sin sistema. Retícula editorial completa, jerarquías legibles y plantillas que la facultad mantiene sola desde 2023.",
    fotos: [media("biblioteca-estudio.png"), media("papel-macro.png"), media("posters-prensa.png")],
    destacada: true,
    coord: [-33.428, -70.612],
  },
  {
    id: "restaurante-marca",
    ref: "TR·03",
    titulo: "Restaurante de autor: carta, menú y señalética",
    operacion: "venta",
    tipo: "Branding",
    comuna: "Ñuñoa",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 6,
    descripcion:
      "Cocina de autor servida en servilletas de otro restaurante. Marca completa —carta que se lee a la luz de vela incluida— y papelería que los clientes se llevan.",
    fotos: [media("mesa-trabajo.png"), media("papel-macro.png")],
    destacada: true,
    coord: [-33.463, -70.611],
  },
  {
    id: "fundacion-reportes",
    ref: "TR·04",
    titulo: "Fundación educacional: reportes que se donan",
    operacion: "venta",
    tipo: "Editorial",
    comuna: "Valparaíso",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2022,
    estacionamientos: 0,
    anio: 12,
    descripcion:
      "Informe anual que nadie leía convertido en pieza de campaña: datos como narrativa, infografía propia e impresión que da gusto apoyar. Resultado: +52% en donaciones del ciclo.",
    fotos: [media("posters-prensa.png"), media("biblioteca-estudio.png")],
    coord: [-33.046, -71.62],
  },
  {
    id: "vinicola-sistema",
    ref: "TR·05",
    titulo: "Viña boutique: sistema de etiquetas por cosecha",
    operacion: "arriendo",
    tipo: "Empaque",
    comuna: "Santiago",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2025,
    estacionamientos: 0,
    anio: 10,
    descripcion:
      "Sistema de etiquetas donde cada cosecha hereda el sistema y aporta su variación: el coleccionista reconoce la línea y espera la siguiente. En desarrollo: cosecha 2026.",
    fotos: [media("papel-macro.png"), media("mesa-trabajo.png")],
    coord: [-33.41, -70.65],
  },
];

export const cifras = [
  { valor: 13, sufijo: "", etiqueta: "Años de estudio", detalle: "Desde 2012 en Santiago Centro" },
  { valor: 96, sufijo: "+", etiqueta: "Marcas trabajadas", detalle: "De cafés a universidades" },
  { valor: 12, sufijo: "", etiqueta: "Proyectos por año", detalle: "Tope para mantener dirección senior" },
  { valor: 100, sufijo: "%", etiqueta: "Manuales entregados", detalle: "Que alguien realmente usa" },
];

export const cartera = [
  { n: "01", titulo: "Identidad y branding", texto: "Marca completa con manual que la gente usa: del logo a la firma de correo.", pie: "Desde UF 55" },
  { n: "02", titulo: "Diseño editorial", texto: "Retículas, colecciones y reportes que se leen — y se mantienen solos.", pie: "Desde UF 35" },
  { n: "03", titulo: "Empaque", texto: "Sistemas de etiquetas y envases que convierten la estantería en escaparate.", pie: "Desde UF 40" },
  { n: "04", titulo: "Dirección de arte", texto: "Fotografía y estilo visual para campañas con voz propia.", pie: "Por producción" },
];

export const metodo = [
  { n: "01", titulo: "Diagnóstico con preguntas incómodas", texto: "Antes de dibujar: qué dice su marca hoy, qué quiere decir y quién decide. Las respuestas definen el proyecto." },
  { n: "02", titulo: "Dos caminos, no treinta opciones", texto: "Presentamos dos direcciones argumentadas. Elegir es parte del trabajo; abrumar no." },
  { n: "03", titulo: "Sistemas, no logos", texto: "Lo entregable es un sistema que funciona en bolsa, pantalla y pared — con manual que el impresor del barrio entiende." },
  { n: "04", titulo: "Acompañamiento de estreno", texto: "Estamos en la primera aplicación real: imprenta, web o vidriera. El estreno es parte del proyecto." },
];

export const equipo = [
  { iniciales: "AM", nombre: "Alonso Muñoz", cargo: "Director de diseño · Fundador", detalle: "13 años. Ex director de arte editorial." },
  { iniciales: "TB", nombre: "Trinidad Barros", cargo: "Diseñadora editorial", detalle: "Retículas, libros y reportes." },
  { iniciales: "NV", nombre: "Nicolás Vergara", cargo: "Diseñador de marca", detalle: "Identidades y sistemas de empaque." },
  { iniciales: "RS", nombre: "Rocío Sanhueza", cargo: "Productora", detalle: "Imprentas, papeles y plazos reales." },
];

export const testimonios = [
  { texto: "Nos entregaron dos caminos bien pensados en vez de veinte opciones mediocres. Elegimos en una reunión.", autor: "I. Fuentes", detalle: "Cliente · Branding" },
  { texto: "La facultad sigue usando las plantillas tres años después, sin llamarnos. Ese era el objetivo.", autor: "Editorial UPLA", detalle: "Cliente · Editorial" },
  { texto: "Los reportes de la fundación pasaron de papel de trámite a pieza de campaña. Las donaciones lo dijeron.", autor: "Fundación Aprender", detalle: "Cliente · Editorial" },
];

export const faq = [
  { p: "¿Cuánto cuesta una identidad completa?", r: "Parten en UF 55 con diagnóstico, dos direcciones y manual usable. Cada propuesta desglosa qué incluye y qué queda para otra etapa." },
  { p: "¿Por qué máximo 12 proyectos al año?", r: "Porque cada proyecto tiene dirección senior de principio a fin. Más proyectos significaría delegar en juniors lo que usted está pagando por senior." },
  { p: "¿Entregan el archivo fuente?", r: "Sí, todo: fuentes licenciadas, archivos editables y manual. Su marca no puede vivir presa de nuestro correo." },
  { p: "¿Hacen solo el logo?", r: "No trabajamos por logo: la marca es sistema. Pero si necesita solo una revisión puntual, lo cotizamos honestamente o recomendamos a alguien más chico." },
  { p: "¿Cómo es el proceso?", r: "Diagnóstico, dos caminos, desarrollo del elegido con dos rondas de ajuste, y acompañamiento de estreno en la primera aplicación real." },
];

export const valoresGestion = {
  intro: "Honorarios de estudio, dichos al frente.",
  sub: "Cada proyecto se cotiza cerrado por fase. Lo que no está en la propuesta, no se factura después.",
  filas: [
    { tipo: "Diagnóstico de marca", detalle: "Con informe y recomendación", venta: "UF 8–12", arriendo: "se descuenta" },
    { tipo: "Identidad completa", detalle: "Dos caminos + manual usable", venta: "UF 55–95", arriendo: "por proyecto" },
    { tipo: "Proyecto editorial", detalle: "Sistema + plantillas mantenibles", venta: "UF 35–70", arriendo: "según colección" },
    { tipo: "Empaque", detalle: "Sistema por línea de productos", venta: "UF 40–80", arriendo: "con pruebas de imprenta" },
  ],
};

// Paleta del hero 3D — día cálido de taller, acento terracota.
export const tema3d = {
  noche: false,
  fondo: "#f7f6f2",
  niebla: "#f7f6f2",
  torre: "#ffffff",
  torreTecho: "#e7e4dc",
  ventanas: "#cf9a86",
  ventanasAlt: "#e3c2b3",
  acento: "#b5432a",
  suelo: "#eeece5",
  estrellas: "#847f74",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Una marca que su impresor entiende.",
  sub: "Cuéntenos su proyecto: diagnóstico honesto, dos direcciones argumentadas y un sistema entregado con manual que alguien va a usar de verdad.",
  beneficios: [
    { titulo: "Dos caminos, no treinta", texto: "Direcciones argumentadas para decidir bien. Aburrir no es dar opciones." },
    { titulo: "Sistemas, no logos", texto: "La marca funciona en bolsa, pantalla y pared — y viene con manual." },
    { titulo: "Archivos entregados", texto: "Fuentes, editables y licencias. Su marca nunca vive presa de un correo." },
    { titulo: "Estreno acompañado", texto: "Estamos en la primera aplicación real: imprenta, web o vidriera." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "Doce proyectos al año, todos con dirección senior.",
  parrafo1:
    "Trazado existe desde 2012 con una medida poco popular: doce proyectos por año. Es lo que permite que el mismo director que presenta la propuesta revise la prueba de imprenta.",
  parrafo2:
    "Somos cuatro personas obsesionadas con que las marcas se usen, no solo se presenten. Nuestra prueba de fuego no es el aplauso de la junta: es que el impresor del barrio entienda el manual sin llamar.",
  valores: [
    { titulo: "Usable gana", texto: "Un manual que nadie abre es un PDF caro. Diseñamos para el uso real." },
    { titulo: "Dirección senior siempre", texto: "Doce proyectos al año para no delegar lo que se paga por senior." },
    { titulo: "Todo se entrega", texto: "Fuentes, archivos y licencias. La marca es del cliente, no del estudio." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "papel-macro.png", marco: false, caption: "" };
