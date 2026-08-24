// Clínica Lircay — Medicina familiar · contenido del sitio.
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
  nombre: "Clínica",
  sufijo: "Lircay",
  kicker: "Medicina familiar · Talca · desde 1998",
  claim: ["Su médico de", "familia, con", "laboratorio propio."],
  sub: "Clínica de medicina familiar con laboratorio y toma de muestras en el mismo lugar: consultas que no terminan en 'vuelva con el resultado', sino con el diagnóstico resuelto en el día.",
  ctaPrimario: { texto: "Ver servicios", a: "/tratamientos" },
  ctaSecundario: { texto: "Agendar consulta", a: "/agendar" },
  telefono: "+56 71 222 8890",
  telefonoHref: "tel:+56712228890",
  correo: "consultas@clinicalircay.cl",
  direccion: "Av. Lircay 1550 · Talca",
  horario: "Lunes a viernes 8:30–20:00 · sábados 9:00–13:00",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la clínica.",
};

export const etiquetas = {
  catalogo: "Servicios",
  catalogoUno: "Servicio",
  captacion: "Agendar",
  nosotros: "La clínica",
  fichaPlural: "servicios",
};

export const rutas = {
  inicio: "/",
  catalogo: "/servicios",
  ficha: "/servicio",
  captacion: "/agendar",
  nosotros: "/clinica",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Servicios", a: "/servicios" },
  { texto: "Agendar", a: "/agendar" },
  { texto: "La clínica", a: "/clinica" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Laboratorio", v: "propio, el mismo día" },
  { k: "Horario continuado", v: "hasta las 20:00" },
  { k: "Consulta", v: "el mismo día" },
];

export const comunas = ["Talca", "Maule", "San Javier", "Parral", "Curicó", "Linares"];

export const cita = {
  texto:
    "Entré con exámenes vencidos y salí con la consulta, la muestra y el resultado en el mismo día. En provincia eso no pasaba.",
  autor: "R. Cáceres · paciente desde 2021",
};

export const propiedades: Propiedad[] = [
  {
    id: "medicina-familiar",
    ref: "CL·01",
    titulo: "Consulta de medicina familiar",
    operacion: "venta",
    tipo: "Consulta",
    comuna: "Talca",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 28,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Consulta integral con médico de familia: escucha larga, examen completo y receta solo si hace falta. Su médico lleva su historia de años, no de síntomas sueltos.",
    fotos: [media("hall.png"), media("pasillo.png"), media("laboratorio.png")],
    destacada: true,
    coord: [-35.426, -71.655],
  },
  {
    id: "laboratorio",
    ref: "CL·02",
    titulo: "Laboratorio y toma de muestras",
    operacion: "venta",
    tipo: "Laboratorio",
    comuna: "Talca",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 12,
    estacionamientos: 0,
    anio: 15,
    descripcion:
      "Toma de muestras sin hora y resultados el mismo día para los exámenes de uso frecuente. Sin vueltas: la muestra sale del consultorio directo al laboratorio del piso de abajo.",
    fotos: [media("laboratorio.png"), media("hall.png")],
    destacada: true,
    coord: [-35.426, -71.656],
  },
  {
    id: "pediatria",
    ref: "CL·03",
    titulo: "Pediatría con horario continuado",
    operacion: "venta",
    tipo: "Consulta",
    comuna: "Talca",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 30,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Control de niño sano y consultas de morbilidad hasta las 20:00, para que el permiso laboral alcance. Agenda preferente para lactantes los primeros 15 días de vida.",
    fotos: [media("pasillo.png"), media("laboratorio.png"), media("hall.png")],
    destacada: true,
    coord: [-35.425, -71.655],
  },
  {
    id: "chequeo",
    ref: "CL·04",
    titulo: "Chequeo preventivo anual",
    operacion: "arriendo",
    tipo: "Prevención",
    comuna: "Talca",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 145,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Consulta, examen físico completo, panel de laboratorio y electrocardiograma en una mañana. Sale con su informe de salud anual y las prioridades escritas del próximo año.",
    fotos: [media("hall.png"), media("laboratorio.png")],
    coord: [-35.426, -71.654],
  },
  {
    id: "kinesiologia",
    ref: "CL·05",
    titulo: "Kinesiología y rehabilitación",
    operacion: "arriendo",
    tipo: "Rehabilitación",
    comuna: "Talca",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 25,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Lumbalgias, rehabilitación post-quirúrgica y kinesiología respiratoria con plan de sesiones escrito y alta por objetivos, no por número de sesiones.",
    fotos: [media("pasillo.png"), media("hall.png")],
    coord: [-35.427, -71.655],
  },
  {
    id: "salud-mujer",
    ref: "CL·06",
    titulo: "Salud de la mujer",
    operacion: "venta",
    tipo: "Consulta",
    comuna: "Talca",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 32,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Consulta ginecológica, papanicolaou y seguimiento de salud hormonal con médica de familia y derivación documentada cuando el caso requiere especialista.",
    fotos: [media("laboratorio.png"), media("pasillo.png")],
    coord: [-35.425, -71.656],
  },
];

export const cifras = [
  { valor: 26, sufijo: "", etiqueta: "Años en Talca", detalle: "Atendiendo familias del Maule" },
  { valor: 31000, sufijo: "+", etiqueta: "Consultas realizadas", detalle: "Medicina de familia" },
  { valor: 80, sufijo: "%", etiqueta: "Resuelto en el día", detalle: "Consulta + examen + resultado" },
  { valor: 9, sufijo: "", etiqueta: "Profesionales", detalle: "Médicos, kinesiólogos y laboratorio" },
];

export const cartera = [
  { n: "01", titulo: "Medicina familiar", texto: "Consulta integral con médicos que conocen su historia, no su síntoma.", pie: "Desde $28.000" },
  { n: "02", titulo: "Laboratorio propio", texto: "Muestras sin hora y resultados el mismo día para exámenes frecuentes.", pie: "Desde $12.000" },
  { n: "03", titulo: "Pediatría", texto: "Control sano y morbilidad hasta las 20:00 para que el permiso alcance.", pie: "Desde $30.000" },
  { n: "04", titulo: "Prevención anual", texto: "Chequeo completo en una mañana con informe y prioridades del año.", pie: "$145.000" },
];

export const metodo = [
  { n: "01", titulo: "Hora el mismo día", texto: "Llame antes de las 15:00 y consigue hora el mismo día para consultas de morbilidad." },
  { n: "02", titulo: "Consulta larga", texto: "45 minutos de verdad: escucha, examen y preguntas respondidas sin apuro de caja." },
  { n: "03", titulo: "Exámenes en el día", texto: "La muestra sale del consultorio al laboratorio propio. Resultados el mismo día en la mayoría." },
  { n: "04", titulo: "Seguimiento escrito", texto: "Sale con indicaciones impresas y el plan del próximo año cuando corresponde." },
];

export const equipo = [
  { iniciales: "MA", nombre: "María Angélica Reyes", cargo: "Médica de familia · Directora", detalle: "26 años de medicina familiar en el Maule." },
  { iniciales: "JB", nombre: "Jorge Bustamante", cargo: "Médico de familia", detalle: "Cronicidad y chequeos preventivos." },
  { iniciales: "CS", nombre: "Carolina Sandoval", cargo: "Pediatra", detalle: "Control sano y morbilidad con agenda preferente." },
  { iniciales: "DL", nombre: "Daniela Lillo", cargo: "Kinesióloga", detalle: "Rehabilitación y alta por objetivos." },
];

export const testimonios = [
  { texto: "Veintiséis años yendo al mismo médico. Esa continuidad no tiene precio, menos en provincia.", autor: "E. Fuentes", detalle: "Paciente · Familiar" },
  { texto: "El chequeo anual en una mañana: entré 9 y salí 12 con todo listo y explicado.", autor: "P. Aravena", detalle: "Paciente · Prevención" },
  { texto: "Mi hija fue atendida a las 19:30 sin urgencia. El horario continuado es real.", autor: "Familia Cerda", detalle: "Pacientes · Pediatría" },
];

export const faq = [
  { p: "¿Atienden con Fonasa?", r: "Sí, Fonasa A a D con modalidad de libre elección, e isapres con reembolso. El valor particular está publicado en cada servicio." },
  { p: "¿Hay que ir con hora al laboratorio?", r: "Las tomas de muestra de ayuno se atienden por orden de llegada entre 8:00 y 10:30. El resto, con hora." },
  { p: "¿Cuánto demoran los exámenes?", r: "Los perfiles frecuentes se entregan el mismo día antes de las 19:00. Los especiales, entre 48 y 72 horas." },
  { p: "¿Atienden urgencias?", r: "Urgencias de baja complejidad durante horario de atención. Algo más grave: derivación documentada al servicio público más cercano." },
  { p: "¿Dan horas para el mismo día?", r: "Para consultas de morbilidad, sí, llamando antes de las 15:00. Los controles programados se agendan con anticipación normal." },
];

export const valoresGestion = {
  intro: "Valores publicados, sin letra chica.",
  sub: "Cada servicio tiene su valor público. Lo que se cota es lo que se cobra, y el presupuesto se entrega antes de atender.",
  filas: [
    { tipo: "Consulta medicina familiar", detalle: "45 minutos", venta: "$28.000", arriendo: "Fonasa con BLEP" },
    { tipo: "Consulta pediátrica", detalle: "40 minutos", venta: "$30.000", arriendo: "agenda preferente lactantes" },
    { tipo: "Chequeo preventivo", detalle: "Consulta + laboratorio + ECG", venta: "$145.000", arriendo: "en una mañana" },
    { tipo: "Kinesiología", detalle: "Sesión con plan de alta", venta: "$25.000", arriendo: "por sesión" },
  ],
};

// Paleta del hero 3D — día clínico, acento teal.
export const tema3d = {
  noche: false,
  fondo: "#fbfbf9",
  niebla: "#fbfbf9",
  torre: "#ffffff",
  torreTecho: "#e4e7e4",
  ventanas: "#9fc3bd",
  ventanasAlt: "#c9ded9",
  acento: "#0f766e",
  suelo: "#eff0ec",
  estrellas: "#5f6f6c",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Hora hoy, resuelto hoy.",
  sub: "Agende su consulta: la mayoría de los casos se resuelve el mismo día con laboratorio propio y horario continuado hasta las 20:00.",
  beneficios: [
    { titulo: "Resuelto en el día", texto: "Consulta, muestra y resultado en una sola visita en el 80% de los casos." },
    { titulo: "Horario que alcanza", texto: "Hasta las 20:00 entre semana y sábados por la mañana." },
    { titulo: "Médico que le conoce", texto: "Su historia clínica de años, no un diagnóstico por síntoma suelto." },
    { titulo: "Valores publicados", texto: "Cada servicio con su valor a la vista, antes de atender." },
  ],
};

export const textoNosotros = {
  kicker: "La clínica",
  titulo: "Medicina de provincia con estándar de capital.",
  parrafo1:
    "Clínica Lircay abrió en 1998 para resolver en Talca lo que antes exigía viajar a Santiago: consultas largas, laboratorio propio y resultados el mismo día.",
  parrafo2:
    "Somos un equipo de nueve profesionales con horario continuado, historia clínica unificada y una regla de la casa: nadie sale sin entender qué tiene y qué sigue. La salud de una región se gana con continuidad.",
  valores: [
    { titulo: "Continuidad", texto: "El mismo médico por años. La historia clínica importa más que cualquier examen aislado." },
    { titulo: "Resuelto en el día", texto: "Laboratorio propio y horario continuado para no volver tres veces." },
    { titulo: "Región primero", texto: "La salud del Maule no debería exigir un viaje a Santiago." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "hall.png", marco: false, caption: "" };
