// NOCTUA — Medicina estética · contenido del sitio.
// "operacion": venta = primera consulta, arriendo = plan de sesiones.
// m2 = valor desde (miles CLP) · anio = duración en minutos.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Primera consulta" : "Plan de sesiones");
export const linea = (p: { m2: number }) => `Desde $${p.m2}.000`;

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
  nombre: "NOCTUA",
  sufijo: "Medicina Estética",
  kicker: "Medicina estética · Las Condes · Santiago",
  claim: ["Estética seria,", "de noche", "y de día."],
  sub: "Medicina estética con médicos con especialidad, protocolos escritos y resultados que no se notan: se ven bien, no operados. Consulta de 45 minutos antes de cualquier inyección.",
  ctaPrimario: { texto: "Ver tratamientos", a: "/tratamientos" },
  ctaSecundario: { texto: "Agendar consulta", a: "/agendar" },
  telefono: "+56 9 6618 0202",
  telefonoHref: "tel:+56966180202",
  correo: "consulta@noctua.cl",
  direccion: "Av. El Bosque Norte 0430, of. 1102 · Las Condes",
  horario: "Lunes a viernes 10:00–20:00 · sábados 10:00–14:00",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del centro.",
};

export const etiquetas = {
  catalogo: "Tratamientos",
  catalogoUno: "Tratamiento",
  captacion: "Agendar",
  nosotros: "El centro",
  fichaPlural: "tratamientos",
};

export const rutas = {
  inicio: "/",
  catalogo: "/tratamientos",
  ficha: "/tratamiento",
  captacion: "/agendar",
  nosotros: "/centro",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Tratamientos", a: "/tratamientos" },
  { texto: "Agendar", a: "/agendar" },
  { texto: "El centro", a: "/centro" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Médicos", v: "con especialidad" },
  { k: "Consulta previa", v: "45 minutos" },
  { k: "Protocolo", v: "por escrito" },
];

export const comunas = ["Las Condes", "Vitacura", "Providencia", "Lo Barnechea", "Ñuñoa", "Santiago"];

export const cita = {
  texto:
    "Me dijeron que no necesitaba la mitad de lo que pedí. Esa honestidad me quedó más linda que cualquier relleno.",
  autor: "A. Sophía · paciente desde 2023",
};

export const propiedades: Propiedad[] = [
  {
    id: "consulta-facial",
    ref: "NO·01",
    titulo: "Consulta de medicina facial",
    operacion: "venta",
    tipo: "Consulta",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 45,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "45 minutos con médica estética: análisis facial, historia clínica completa y un plan por etapas si es que hace falta. A veces la mejor indicación es no hacer nada, y eso también va por escrito.",
    fotos: [media("hero.jpg"), media("corridor.jpg"), media("object.jpg"), media("texture.jpg")],
    destacada: true,
    coord: [-33.411, -70.567],
  },
  {
    id: "toxina-botulinica",
    ref: "NO·02",
    titulo: "Toxina botulínica",
    operacion: "arriendo",
    tipo: "Facial",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 180,
    estacionamientos: 0,
    anio: 30,
    descripcion:
      "Dosificación conservadora y personalizada: el objetivo es verse descansado, no congelado. Control de resultado a los 15 días incluido y registro fotográfico antes y después.",
    fotos: [media("object.jpg"), media("hero.jpg"), media("texture.jpg")],
    destacada: true,
    coord: [-33.411, -70.566],
  },
  {
    id: "rellenos-acido",
    ref: "NO·03",
    titulo: "Rellenos de ácido hialurónico",
    operacion: "arriendo",
    tipo: "Facial",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 320,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Relleno con cánula y técnica conservadora: labios, mandíbula y ojeras con resultado natural y reversible. Solo productos con registro sanitario y número de lote entregado al paciente.",
    fotos: [media("corridor.jpg"), media("object.jpg")],
    destacada: true,
    coord: [-33.412, -70.567],
  },
  {
    id: "skinboosters",
    ref: "NO·04",
    titulo: "Skinboosters e hidratación inyectable",
    operacion: "arriendo",
    tipo: "Facial",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 260,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Hialurónico bio-remodalizador en microdepósitos: hidratación profunda y calidad de piel en rostro, cuello y manos. Protocolo de 2 a 3 sesiones espaciadas por mes.",
    fotos: [media("texture.jpg"), media("hero.jpg")],
    coord: [-33.41, -70.566],
  },
  {
    id: "laser-facial",
    ref: "NO·05",
    titulo: "Láser facial y vascular",
    operacion: "arriendo",
    tipo: "Láser",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 190,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Fotorejuvenecimiento, manchas y rojeces con láser de última generación y test de piel antes de cada sesión. Protocolo escrito de cuidados y bloqueador incluido.",
    fotos: [media("hero.jpg"), media("texture.jpg")],
    coord: [-33.411, -70.568],
  },
  {
    id: "peeling",
    ref: "NO·06",
    titulo: "Peelings médicos",
    operacion: "arriendo",
    tipo: "Facial",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 120,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Peelings químicos graduados por tipo de piel: acné, poros y textura. Sesiones de 40 minutos con preparación previa de 15 días indicada por escrito.",
    fotos: [media("object.jpg"), media("corridor.jpg")],
    coord: [-33.412, -70.568],
  },
];

export const cifras = [
  { valor: 8, sufijo: "", etiqueta: "Años de centro", detalle: "Fundado en 2017" },
  { valor: 6200, sufijo: "+", etiqueta: "Tratamientos realizados", detalle: "Con registro fotográfico" },
  { valor: 100, sufijo: "%", etiqueta: "Productos trazables", detalle: "Lote entregado al paciente" },
  { valor: 45, sufijo: " min", etiqueta: "Consulta antes de inyectar", detalle: "Siempre" },
];

export const cartera = [
  { n: "01", titulo: "Facial inyectable", texto: "Toxina y rellenos con dosificación conservadora y control a los 15 días.", pie: "Desde $180.000" },
  { n: "02", titulo: "Calidad de piel", texto: "Skinboosters, peelings y láser con protocolo escrito por tipo de piel.", pie: "Desde $120.000" },
  { n: "03", titulo: "Corporal", texto: "Enzimas lipolíticas y tratamientos corporales con evaluación médica previa.", pie: "Plan por sesiones" },
  { n: "04", titulo: "Prevención", texto: "Planes anuales de mantenimiento estético con calendario y presupuesto cerrado.", pie: "Programa NOCTUA" },
];

export const metodo = [
  { n: "01", titulo: "Consulta de 45 minutos", texto: "Análisis facial con luz rasante, historia clínica y expectativas conversadas. Sin agujas ese día." },
  { n: "02", titulo: "Plan conservador", texto: "Dosificaciones menores a las que pide el entusiasmo. Se puede repetir; deshacer un exceso es más difícil." },
  { n: "03", titulo: "Trazabilidad total", texto: "Producto, lote y número de registro entregados por escrito. Lo que entra a su cara está documentado." },
  { n: "04", titulo: "Control de resultado", texto: "Revisión a los 15 días con fotos comparativas. El tratamiento termina cuando se ve bien, no cuando se acaba el producto." },
];

export const equipo = [
  { iniciales: "CP", nombre: "Carolina Prado", cargo: "Médica estética · Directora", detalle: "Diplomada en medicina estética, 8 años de práctica." },
  { iniciales: "RM", nombre: "Rodrigo Mena", cargo: "Médico · Láser", detalle: "Dermatología y láser facial." },
  { iniciales: "FB", nombre: "Fernanda Barros", cargo: "Enfermera esteticista", detalle: "Peelings, limpieza y acompañamiento de protocolos." },
  { iniciales: "LV", nombre: "Laura Vicuña", cargo: "Coordinación de pacientes", detalle: "Agenda, seguimiento de controles y registros." },
];

export const testimonios = [
  { texto: "Me dijeron que con la mitad del relleno alcanzaba. Tres meses después tengo el resultado que quería.", autor: "R. Fuenzalida", detalle: "Paciente · Rellenos" },
  { texto: "El control de los 15 días con fotos antes/después lo cambia todo. Nadie me había mostrado mi propia evolución.", autor: "C. Aldunate", detalle: "Paciente · Toxina" },
  { texto: "Los números de lote por escrito me dieron una confianza que en ningún otro lado tuve.", autor: "A. Pizarro", detalle: "Paciente · Skinboosters" },
];

export const faq = [
  { p: "¿Voy a verme operada?", r: "No. Nuestra dosificación es deliberadamente conservadora: el objetivo es que digan 'qué bien te ves', no 'qué te hiciste'." },
  { p: "¿Qué productos usan?", r: "Solo productos con registro sanitario (ISP o equivalente europeo). Cada paciente recibe el nombre del producto y el lote por escrito." },
  { p: "¿Duele?", r: "Usamos cremas anestésicas y técnicas con cánula que reducen la incomodidad. La mayoría de los pacientes se devuelve trabajando el mismo día." },
  { p: "¿Cuánto duran los resultados?", r: "Toxina: 4 a 6 meses. Rellenos: 9 a 18 meses según zona. Se lo decimos por escrito en el plan, con fechas orientativas de retoma." },
  { p: "¿Puedo venir solo a consultar?", r: "Sí, y la consulta es el único tratamiento que se agenda sin compromiso. Si la indicación es no hacer nada, se lo diremos." },
];

export const valoresGestion = {
  intro: "Valores dichos con la cara descubierta.",
  sub: "Cada tratamiento se cota por sesión o por plan escrito. Los productos y sus lotes van documentados.",
  filas: [
    { tipo: "Consulta facial", detalle: "45 minutos con plan", venta: "$45.000", arriendo: "se descuenta" },
    { tipo: "Toxina botulínica", detalle: "Zona completa con control", venta: "$180.000", arriendo: "por zona" },
    { tipo: "Relleno hialurónico", detalle: "Con cánula, producto trazable", venta: "$320.000", arriendo: "por zona" },
    { tipo: "Láser facial", detalle: "Sesión con test de piel", venta: "$190.000", arriendo: "paquetes de 3" },
  ],
};

// Paleta del hero 3D — noche, torres carbón, ventanas champán.
export const tema3d = {
  noche: true,
  fondo: "#121110",
  niebla: "#121110",
  torre: "#1c1a17",
  torreTecho: "#121110",
  ventanas: "#d9bc7f",
  ventanasAlt: "#eedcab",
  acento: "#c8a96a",
  suelo: "#0d0c0a",
  estrellas: "#9b948b",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Primero una conversación. Después, si corresponde, una aguja.",
  sub: "Agende su consulta de 45 minutos: análisis facial, expectativas reales y un plan conservador por escrito. Sin tratamientos el mismo día de la primera visita.",
  beneficios: [
    { titulo: "Consulta sin compromiso", texto: "45 minutos. Si la indicación es no hacer nada, se lo decimos y listo." },
    { titulo: "Dosificación conservadora", texto: "Preferimos repetir a pasarnos. El exceso no se puede deshacer tan fácil." },
    { titulo: "Todo trazable", texto: "Producto, lote y registro por escrito en cada tratamiento." },
    { titulo: "Control incluido", texto: "Revisión a los 15 días con fotos comparativas." },
  ],
};

export const textoNosotros = {
  kicker: "El centro",
  titulo: "La estética que se nota menos.",
  parrafo1:
    "NOCTUA abrió en 2017 con una posición incómoda para el mercado: decir no. No a dosis exageradas, no a productos sin trazabilidad, no a tratar sin consultar.",
  parrafo2:
    "Somos un centro médico, no un spa: médicas con especialidad, historia clínica real y protocolos escritos. El resultado estético es mejor cuando hay medicina detrás, y nuestros pacientes —que prefieren que nadie sepa— lo saben.",
  valores: [
    { titulo: "Menos es más", texto: "Dosificaciones conservadoras y planes por etapas. Repetir es fácil; corregir un exceso no." },
    { titulo: "Medicina primero", texto: "Historia clínica, contraindicaciones y seguimiento. Estética con protocolo." },
    { titulo: "Trazabilidad", texto: "Producto y lote por escrito, siempre. Lo que entra a su cara está documentado." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "fullbleed", foto: "hero.jpg", marco: false, caption: "" };
