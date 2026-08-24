// UMBRAL — Arquitectura · variante B · todo el contenido vive acá.
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
  nombre: "UMBRAL",
  sufijo: "Arquitectura",
  kicker: "Arquitectura de precisión · Santiago · desde 2012",
  claim: ["Lo simple es", "lo difícil.", "Lo hacemos simple."],
  sub: "Obra nueva y remodelaciones premium con una obsesión: eliminar todo lo que sobra. Presupuesto abierto por partida, modelo 3D compartido con el mandante y una obra que se documenta semana a semana.",
  ctaPrimario: { texto: "Ver proyectos", a: "/proyectos" },
  ctaSecundario: { texto: "Consultar por un proyecto", a: "/servicios" },
  telefono: "+56 9 5555 1212",
  telefonoHref: "tel:+56955551212",
  correo: "estudio@umbral.arquitectura.cl",
  direccion: "Merced 840, of. 55 · Santiago Centro",
  horario: "Lunes a viernes 10:00–19:00 · viernes de obra",
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
  { k: "Obras entregadas", v: "47" },
  { k: "Desviación de presupuesto", v: "< 3%" },
  { k: "Primera reunión", v: "sin costo" },
];

export const comunas = [
  "Vitacura",
  "Las Condes",
  "Lo Barnechea",
  "Providencia",
  "Santiago Centro",
  "Zapallar",
  "Farellones",
  "Puerto Varas",
];

export const propiedades: Propiedad[] = [
  {
    id: "casa-hero-vitacura",
    ref: "UM·30",
    titulo: "Casa Una — Vitacura",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Vitacura",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 4,
    m2: 360,
    terrenoM2: 640,
    estacionamientos: 3,
    anio: 2023,
    descripcion:
      "Una sola operación ordena la casa: un muro de 14 metros que corre de norte a sur separando lo público de lo privado. Del lado del jardín, vidrio de piso a techo; del lado de la calle, ciego. Caldera de pellet y aguas lluvias recuperadas para riego.",
    fotos: [media("hero.jpg"), media("gallery.jpg"), media("detail.jpg"), media("model.jpg")],
    destacada: true,
    coord: [-33.393, -70.598],
  },
  {
    id: "loft-detail-las-condes",
    ref: "UM·32",
    titulo: "Loft Detalle — Las Condes",
    operacion: "venta",
    tipo: "Interior",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 2,
    m2: 120,
    estacionamientos: 2,
    anio: 2024,
    descripcion:
      "Departamento de tres dormitorios convertido en loft de un ambiente: solo la suite se cierra. Biblioteca metálica de siete metros, cocina en isla y un baño de hormigón pulido con tina esculpida en obra.",
    fotos: [media("detail.jpg"), media("gallery.jpg"), media("hero.jpg")],
    destacada: true,
    coord: [-33.412, -70.562],
  },
  {
    id: "casa-galeria-sur",
    ref: "UM·28",
    titulo: "Casa Galería — Puerto Varas",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Puerto Varas",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 3,
    m2: 280,
    terrenoM2: 1800,
    estacionamientos: 3,
    anio: 2022,
    descripcion:
      "Galería cubierta de 18 metros organiza la casa hacia el volcán: los ambientes se abren a ella y ella se abre al paisaje. Madera de ulmo en tres tonos, estufa a leña de alto rendimiento y ventanas con marco mínimo.",
    fotos: [media("gallery.jpg"), media("hero.jpg"), media("model.jpg")],
    destacada: true,
    coord: [-41.317, -72.983],
  },
  {
    id: "maqueta-condominio",
    ref: "UM·35",
    titulo: "Condominio Tres — Lo Barnechea",
    operacion: "arriendo",
    tipo: "Edificio",
    comuna: "Lo Barnechea",
    precioUF: 2026,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 9,
    m2: 4200,
    estacionamientos: 24,
    anio: 2026,
    descripcion:
      "Tres casas en condominio que comparten un patio de quincho y bodega técnica: cada unidad es distinta —el sistema lo permite— pero las tres hablan el mismo idioma de ladrillo y vidrio. En permisos.",
    fotos: [media("model.jpg"), media("hero.jpg")],
    coord: [-33.356, -70.518],
  },
  {
    id: "remodela-modelo-providencia",
    ref: "UM·27",
    titulo: "Remodelación Modelo — Providencia",
    operacion: "venta",
    tipo: "Remodelación",
    comuna: "Providencia",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 140,
    estacionamientos: 1,
    anio: 2022,
    descripcion:
      "Casa pareada de 1978 que ganó el cielo: se abrió el techo sobre el living para una lucarna de 4 metros y la luz pasó de dos horas a todo el día. El resto fue sustracción: se sacaron muros, puertas y un falso cielo.",
    fotos: [media("model.jpg"), media("detail.jpg")],
    coord: [-33.437, -70.621],
  },
  {
    id: "oficina-gallery-centro",
    ref: "UM·33",
    titulo: "Oficina Galería — Santiago Centro",
    operacion: "venta",
    tipo: "Interior",
    comuna: "Santiago Centro",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 5,
    banos: 2,
    m2: 260,
    estacionamientos: 0,
    anio: 2023,
    descripcion:
      "Antigua galería de arte convertida en oficina de diseño: los muros blancos se conservaron como pizarra de trabajo, la bodega se volvió sala de reuniones y el lucernario original ilumina todo sin una lámpara encendida de día.",
    fotos: [media("gallery.jpg"), media("detail.jpg")],
    coord: [-33.436, -70.649],
  },
  {
    id: "refugio-detail-farellones",
    ref: "UM·34",
    titulo: "Refugio Cota 2.400 — Farellones",
    operacion: "arriendo",
    tipo: "Refugio",
    comuna: "Farellones",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 5,
    banos: 3,
    m2: 220,
    terrenoM2: 3000,
    estacionamientos: 5,
    anio: 2025,
    descripcion:
      "Refugio de nieve para doce personas: camarotes de diseño, secado técnico en cada dormitorio y un living con hogar de 2 metros que funciona de comedor, sala y recepción de esquís. En montaje, entrega invierno 2026.",
    fotos: [media("detail.jpg"), media("hero.jpg"), media("gallery.jpg")],
    coord: [-33.363, -70.284],
  },
  {
    id: "casa-modelo-zapallar",
    ref: "UM·29",
    titulo: "Casa Modelo — Zapallar",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Zapallar",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 4,
    m2: 310,
    terrenoM2: 1100,
    estacionamientos: 2,
    anio: 2023,
    descripcion:
      "La casa se reduce a dos piezas cruzadas: una horizontal para el verano —comedor, terraza, cocina— y una vertical para dormir, en cuatro niveles que bajan al mar. Concreto con árido local y envejecido a la intemperie.",
    fotos: [media("model.jpg"), media("gallery.jpg"), media("detail.jpg")],
    coord: [-32.553, -71.462],
  },
];

export const cifras = [
  { valor: 13, sufijo: "", etiqueta: "Años de estudio", detalle: "Socios en ejercicio desde 2012" },
  { valor: 47, sufijo: "", etiqueta: "Obras entregadas", detalle: "Premium y equipamiento" },
  { valor: 3, sufijo: "%", etiqueta: "Desviación máxima", detalle: "Entre presupuesto y obra final" },
  { valor: 11, sufijo: "", etiqueta: "Premios y publicaciones", detalle: "Nacionales e internacionales" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Obra nueva premium",
    texto: "Casas y refugios con modelo 3D compartido, presupuesto abierto por partida y dirección de un socio.",
    pie: "Desde 250 m²",
  },
  {
    n: "02",
    titulo: "Interiores y conversiones",
    texto: "Lofts, oficinas y cambios de uso con la misma regla: sustraer antes que agregar.",
    pie: "Con mobiliario a medida",
  },
  {
    n: "03",
    titulo: "Remodelaciones estructurales",
    texto: "Refuerzos, lucarnas y aperturas que exigen ingeniería fina sobre lo construido.",
    pie: "Con cálculo propio",
  },
  {
    n: "04",
    titulo: "Peritajes y arbitrajes",
    texto: "Informes técnicos de patologías y fiscalización de obras para mandantes y tribunales.",
    pie: "Con firma de arquitecto competente",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Encargo en una página",
    texto: "La primera reunión termina en un documento de una página: qué se construye, cuánto puede costar y cuánto demora. Si no le sirve, no seguimos.",
  },
  {
    n: "02",
    titulo: "Modelo compartido",
    texto: "Trabajamos en un modelo 3D que usted ve desde su casa: cada alternativa, cada material y cada costo aparece ahí antes de decidir.",
  },
  {
    n: "03",
    titulo: "Presupuesto por partida",
    texto: "El presupuesto se abre por partida y se congela antes del permiso. La desviación histórica del estudio es menor al 3%.",
  },
  {
    n: "04",
    titulo: "Obra con bitácora abierta",
    texto: "Bitácora fotográfica semanal, libro de obras digital y recepción por items. Cuando la casa se entrega, usted ya la conoce pieza por pieza.",
  },
];

export const equipo = [
  { iniciales: "DU", nombre: "Domitila Undurraga", cargo: "Arquitecta PUC · Socia fundadora", detalle: "Obra nueva y dirección de obra." },
  { iniciales: "AV", nombre: "Alfonso Vergara", cargo: "Arquitecto UChile · Socio", detalle: "Estructuras y remodelaciones." },
  { iniciales: "MS", nombre: "Martín Soto", cargo: "Arquitecto · BIM", detalle: "Modelo 3D, presupuestos y partidas." },
  { iniciales: "PL", nombre: "Paz Larraín", cargo: "Constructor · Faenas", detalle: "Bitácoras, recepciones y garantías." },
];

export const testimonios = [
  {
    texto: "El modelo 3D compartido nos evitó la discusión de siempre: vimos el costo de cada cambio antes de pedirlo.",
    autor: "Familia Izquierdo",
    detalle: "Mandantes · Casa Una",
  },
  {
    texto: "Presupuestaron, construyeron y entregaron con menos del 2% de desviación. En este rubro eso es ciencia ficción.",
    autor: "Inversiones Andes Sur",
    detalle: "Mandantes · Condominio Tres",
  },
  {
    texto: "Sacaron tres muros y una escalera. La casa quedó el doble de grande sin un metro nuevo.",
    autor: "M. y R. Valdés",
    detalle: "Mandantes · Remodelación Modelo",
  },
];

export const faq = [
  {
    p: "¿Cómo logran menos del 3% de desviación?",
    r: "Congelando el presupuesto por partida antes del permiso y trabajando con el modelo 3D como único documento de verdad. Los cambios se cotizan en el modelo, no en obra.",
  },
  {
    p: "¿Qué es el modelo 3D compartido?",
    r: "Un enlace web donde ve el proyecto en 3D con las alternativas, materiales y costos actualizados. Es el mismo archivo con el que trabajamos, no un resumen bonito.",
  },
  {
    p: "¿Cuánto demora una casa completa?",
    r: "Entre 16 y 22 meses desde el encargo a la entrega, incluyendo permisos (4 a 8 meses) y obra (9 a 14 meses).",
  },
  {
    p: "¿Hacen obras chicas?",
    r: "Las remodelaciones e interiores parten en 60 m². Las casas de obra nueva, en 250 m².",
  },
  {
    p: "¿Qué incluye la recepción final?",
    r: "Planos como se construyó, manual de mantención, garantías por escrito y una puesta en marcha de todos los sistemas de la casa.",
  },
];

export const valoresGestion = {
  intro: "Honorarios y números, a la vista.",
  sub: "Toda propuesta incluye desglose por etapa y el cálculo del ahorro de cada alternativa. El monto no cambia sin su firma.",
  filas: [
    { tipo: "Encargo y factibilidad", detalle: "Documento de una página con rango", venta: "UF 15–30", arriendo: "se imputa al proyecto" },
    { tipo: "Anteproyecto + modelo 3D", detalle: "Dos alternativas con costos", venta: "UF 60–130", arriendo: "se imputa al proyecto" },
    { tipo: "Proyecto completo", detalle: "Especialidades, permiso, licitación", venta: "7–10% de la obra", arriendo: "—" },
    { tipo: "Dirección de obra", detalle: "Socio + bitácora semanal", venta: "6–8% de la obra", arriendo: "por mes en obras menores" },
  ],
};

// Paleta del hero 3D — noche fría, torres grafito, ventanas salvia cálida.
export const tema3d = {
  noche: true,
  fondo: "#0c0e0d",
  niebla: "#0c0e0d",
  torre: "#171b19",
  torreTecho: "#0c0e0d",
  ventanas: "#cfd8b8",
  ventanasAlt: "#e6ecd2",
  acento: "#9fb08e",
  suelo: "#090b0a",
  estrellas: "#93a18f",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Presupuesto congelado antes del permiso.",
  sub: "Cuéntenos el encargo. Le devolvemos un documento de una página con alcance, plazo y rango de costos, y coordinamos una reunión sin costo.",
  beneficios: [
    { titulo: "Desviación bajo el 3%", texto: "Presupuesto por partida congelado antes del permiso y modelo 3D como única verdad." },
    { titulo: "Modelo compartido", texto: "Vea el proyecto y el costo de cada cambio desde su casa, antes de decidir." },
    { titulo: "Un socio por proyecto", texto: "El mismo socio del estudio dirige cada obra, sin excepción." },
    { titulo: "Recepción itemizada", texto: "La entrega incluye planos, manual, garantías y puesta en marcha de todos los sistemas." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "La disciplina es el lujo.",
  parrafo1:
    "UMBRAL es un estudio de cuatro socios que cree que el lujo real de una casa no está en la lista de materiales sino en que se entregue el día prometido, con el presupuesto prometido.",
  parrafo2:
    "Por eso invertimos en método: modelo 3D compartido con el mandante, presupuesto por partida congelado y bitácora fotográfica semanal. La precisión no es un estilo; es una forma de respeto por quien paga la obra.",
  valores: [
    { titulo: "Sustraer antes que agregar", texto: "La mejor solución suele ser la que elimina un problema en vez de taparlo." },
    { titulo: "Una sola verdad", texto: "El modelo 3D es el único documento de referencia. Todos miran lo mismo." },
    { titulo: "Precisión como respeto", texto: "Plazos y presupuestos se prometen poco y se cumplen mucho." },
  ],
};
