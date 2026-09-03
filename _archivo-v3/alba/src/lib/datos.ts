// Alba — Urgencia dental con hora el mismo día · contenido del sitio.
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
  nombre: "Alba",
  sufijo: "Urgencia Dental",
  kicker: "Urgencias dentales · Santiago · lunes a domingo",
  claim: ["Dolor de muelas:", "hora hoy,", "no la próxima semana."],
  sub: "Clínica dental de urgencia con hora el mismo día: diagnóstico inmediato, alivio del dolor en la primera sesión y un plan escrito para lo que sigue. Abierto los siete días.",
  ctaPrimario: { texto: "Ver tratamientos", a: "/tratamientos" },
  ctaSecundario: { texto: "Pedir hora urgente", a: "/agendar" },
  telefono: "+56 9 6000 2525",
  telefonoHref: "tel:+56960002525",
  correo: "urgencias@albadental.cl",
  direccion: "Av. Vicuña Mackenna 4820, of. 12 · San Joaquín, Santiago",
  horario: "Lunes a domingo 9:00–21:00 · sin cita para dolor agudo",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la clínica.",
};

export const etiquetas = {
  catalogo: "Tratamientos",
  catalogoUno: "Tratamiento",
  captacion: "Agendar",
  nosotros: "La clínica",
  fichaPlural: "tratamientos",
};

export const rutas = {
  inicio: "/",
  catalogo: "/tratamientos",
  ficha: "/tratamiento",
  captacion: "/agendar",
  nosotros: "/clinica",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Tratamientos", a: "/tratamientos" },
  { texto: "Agendar", a: "/agendar" },
  { texto: "La clínica", a: "/clinica" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Hora el mismo día", v: "promesa central" },
  { k: "Abierto", v: "lunes a domingo" },
  { k: "Dolor agudo", v: "prioridad 3 horas" },
];

export const comunas = ["San Joaquín", "Macul", "Ñuñoa", "La Florida", "San Miguel", "Providencia"];

export const cita = {
  texto:
    "Llamé a las 8 de la mañana con la cara hinchada y a las 11 ya estaba saliendo sin dolor. No lo podía creer.",
  autor: "C. Muñoz · paciente urgencia",
};

export const propiedades: Propiedad[] = [
  {
    id: "urgencia-dolor",
    ref: "AL·01",
    titulo: "Urgencia por dolor agudo",
    operacion: "venta",
    tipo: "Urgencia",
    comuna: "San Joaquín",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 35,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Dolor de muela, infección o inflamación: atención con prioridad dentro de las primeras 3 horas de su llamado. Radiografía, anestesia reforzada y alivio del dolor en la primera sesión, siempre.",
    fotos: [media("corridor.jpg"), media("desk.jpg"), media("facade.jpg")],
    destacada: true,
    coord: [-33.5, -70.626],
  },
  {
    id: "evaluacion",
    ref: "AL·02",
    titulo: "Evaluación y diagnóstico",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "San Joaquín",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 30,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Revisión completa con radiografía panorámica y diagnóstico en pantalla. Sale con su plan de tratamiento por escrito y presupuesto el mismo día.",
    fotos: [media("desk.jpg"), media("object.jpg"), media("corridor.jpg")],
    destacada: true,
    coord: [-33.5, -70.627],
  },
  {
    id: "extraccion-cordales",
    ref: "AL·03",
    titulo: "Extracción de cordales",
    operacion: "arriendo",
    tipo: "Cirugía",
    comuna: "San Joaquín",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 180,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Cordales retenidas o semi-retenidas con cirujano en el equipo. Cirugía ambulatoria con sedación opcional y control al día siguiente incluido.",
    fotos: [media("object.jpg"), media("corridor.jpg")],
    destacada: true,
    coord: [-33.501, -70.625],
  },
  {
    id: "endodoncia-urgente",
    ref: "AL·04",
    titulo: "Endodoncia de urgencia",
    operacion: "arriendo",
    tipo: "Restauradora",
    comuna: "San Joaquín",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 220,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Tratamiento de conducto que salva la muela: la mayoría en una sola sesión de 90 minutos. Indicado cuando el dolor ya no responde a analgésicos.",
    fotos: [media("desk.jpg"), media("facade.jpg")],
    coord: [-33.5, -70.626],
  },
  {
    id: "reconstruccion",
    ref: "AL·05",
    titulo: "Reconstrucción y resinas",
    operacion: "venta",
    tipo: "Restauradora",
    comuna: "San Joaquín",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 65,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Piezas fracturadas por trauma o caries profunda, reconstruidas en la misma sesión de urgencia cuando es posible. Resinas de nanohíbrido con ajuste de mordida incluido.",
    fotos: [media("facade.jpg"), media("object.jpg")],
    coord: [-33.499, -70.628],
  },
  {
    id: "seguimiento",
    ref: "AL·06",
    titulo: "Control post-urgencia",
    operacion: "venta",
    tipo: "Prevención",
    comuna: "San Joaquín",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 0,
    estacionamientos: 0,
    anio: 20,
    descripcion:
      "Control gratuito a las 48 horas de cualquier urgencia atendida con nosotros: evolución, retiro de puntos si aplica y plan de continuidad. Incluido en cada urgencia.",
    fotos: [media("corridor.jpg"), media("desk.jpg")],
    coord: [-33.5, -70.626],
  },
];

export const cifras = [
  { valor: 12000, sufijo: "+", etiqueta: "Urgencias resueltas", detalle: "Desde 2015" },
  { valor: 3, sufijo: " h", etiqueta: "Atención máximo", detalle: "Desde el llamado, dolor agudo" },
  { valor: 7, sufijo: "", etiqueta: "Días a la semana", detalle: "Incluidos domingos" },
  { valor: 92, sufijo: "%", etiqueta: "Dolor resuelto en 1ª sesión", detalle: "Registro propio 2024" },
];

export const cartera = [
  { n: "01", titulo: "Urgencias", texto: "Dolor, traumatismos e infecciones con prioridad real, no de fichero.", pie: "Mismo día" },
  { n: "02", titulo: "Diagnóstico", texto: "Radiografía y plan escrito antes de cualquier tratamiento.", pie: "$30.000" },
  { n: "03", titulo: "Cirugía", texto: "Cordales y extracciones con cirujano del equipo y control incluido.", pie: "Sedación opcional" },
  { n: "04", titulo: "Continuidad", texto: "Control a las 48 horas gratis y derivación documentada si su caso sigue afuera.", pie: "Incluido" },
];

export const metodo = [
  { n: "01", titulo: "Llama o escribe", texto: "Contestamos en minutos, lunes a domingo. Le damos hora dentro de las próximas 3 horas si hay dolor." },
  { n: "02", titulo: "Diagnóstico inmediato", texto: "Radiografía y revisión al llegar. Le explicamos en pantalla qué tiene y qué opciones existen." },
  { n: "03", titulo: "Alivio primero", texto: "La primera sesión se enfoca en quitar el dolor. Lo demás queda planificado y presupuestado." },
  { n: "04", titulo: "Plan y control", texto: "Sale con plan escrito y control a las 48 horas incluido. Si su caso sigue afuera, va con derivación." },
];

export const equipo = [
  { iniciales: "MB", nombre: "Marcela Bravo", cargo: "Odontóloga · Urgencias", detalle: "10 años de urgencia dental. Coordina los turnos." },
  { iniciales: "RG", nombre: "Rodrigo Gómez", cargo: "Cirujano maxilofacial", detalle: "Cordales y cirugía ambulatoria con sedación." },
  { iniciales: "CV", nombre: "Camila Vera", cargo: "Odontóloga general", detalle: "Diagnóstico y reconstrucciones en sesión." },
  { iniciales: "TS", nombre: "Tamara Soto", cargo: "Coordinación de pacientes", detalle: "Contesta el teléfono y la agenda. Rapidísima." },
];

export const testimonios = [
  { texto: "Domingo de dolor, lunes a las 9 en la silla y a las 10 sin dolor. Cumplieron lo que dice el sitio.", autor: "P. Álvarez", detalle: "Paciente · Urgencia" },
  { texto: "Me sacaron la cordal con sedación y al día siguiente me controlaron gratis. Cero trauma.", autor: "F. Donoso", detalle: "Paciente · Cirugía" },
  { texto: "La primera clínica que me dio hora el mismo día de verdad. Y con plan escrito.", autor: "R. Salas", detalle: "Paciente · Diagnóstico" },
];

export const faq = [
  { p: "¿Atienden de verdad los domingos?", r: "Sí, de 9:00 a 15:00 con odontólogo y cirujano de turno. El dolor no conoce de calendario." },
  { p: "¿Cuánto demora la atención?", r: "Dolor agudo: dentro de las 3 horas de su llamado. Consultas generales: el mismo día o el siguiente, según agenda." },
  { p: "¿Cuánto cuesta una urgencia?", r: "La evaluación de urgencia parte en $35.000 e incluye radiografía. El tratamiento va presupuestado antes de empezar." },
  { p: "¿Aceptan Fonasa o isapre?", r: "Trabajamos con bonificación de isapres principales y arancel particular con cobertura de reembolso Fonasa." },
  { p: "¿Y si mi caso no lo tratan ustedes?", r: "Le estabilizamos, aliviamos el dolor y entregamos derivación documentada al especialista. El control de 48 horas igual es nuestro." },
];

export const valoresGestion = {
  intro: "Precios de urgencia, dichos antes.",
  sub: "Cada urgencia se evalúa y presupuesta antes de tratar. El alivio del dolor nunca se condiciona al pago del tratamiento completo.",
  filas: [
    { tipo: "Evaluación de urgencia", detalle: "Con radiografía incluida", venta: "$35.000", arriendo: "mismo día" },
    { tipo: "Endodoncia", detalle: "Una sesión en la mayoría", venta: "$220.000", arriendo: "por muela" },
    { tipo: "Extracción de cordal", detalle: "Con control al día siguiente", venta: "$180.000", arriendo: "sedación aparte" },
    { tipo: "Control post-urgencia", detalle: "48 horas después", venta: "Incluido", arriendo: "siempre" },
  ],
};

// Paleta del hero 3D — día clínico frío, acento azul.
export const tema3d = {
  noche: false,
  fondo: "#f8fafc",
  niebla: "#f8fafc",
  torre: "#ffffff",
  torreTecho: "#e2e8f0",
  ventanas: "#9db9d4",
  ventanasAlt: "#c6d6e6",
  acento: "#0369a1",
  suelo: "#edf1f5",
  estrellas: "#64748b",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Dolor hoy, hora hoy.",
  sub: "Llame o escriba y le damos hora dentro de las próximas 3 horas si hay dolor. Lunes a domingo, con plan escrito antes de cualquier tratamiento.",
  beneficios: [
    { titulo: "Atención en 3 horas", texto: "Dolor agudo = prioridad real. Promesa de la casa." },
    { titulo: "Alivio en la 1ª sesión", texto: "El 92% de las urgencias termina sin dolor el primer día." },
    { titulo: "Control a las 48 h", texto: "Gratuito, incluido en cada urgencia atendida." },
    { titulo: "Siete días", texto: "Lunes a domingo. El domingo también duele." },
  ],
};

export const textoNosotros = {
  kicker: "La clínica",
  titulo: "Nacimos de una mala experiencia.",
  parrafo1:
    "Alba nació en 2015 porque a su fundadora le dieron hora para un viernes con la cara hinchada un lunes. Hoy la clínica existe para que eso no le pase a nadie: hora el mismo día, prioridad para el dolor y planes escritos.",
  parrafo2:
    "Funcionamos con turnos extendidos, un equipo estable de urgencia y una regla simple: primero el alivio, después el plan, siempre por escrito y presupuestado antes de empezar.",
  valores: [
    { titulo: "El dolor es prioridad", texto: "No hay agenda que valga más que un paciente con dolor agudo." },
    { titulo: "Escrito siempre", texto: "Plan y presupuesto impresos antes de tocar una muela." },
    { titulo: "Continuidad", texto: "Control de 48 horas y derivación documentada cuando el caso sigue afuera." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "corridor.jpg", marco: false, caption: "Atención de urgencia" };
