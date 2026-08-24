// ÉTER — Estética integral · contenido del sitio.
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
  nombre: "ÉTER",
  sufijo: "Estética Integral",
  kicker: "Estética integral · Vitacura · Santiago",
  claim: ["Tratarse bien", "es un hábito,", "no un evento."],
  sub: "Centro de estética integral con protocolos personalizados: facial, corporal y bienestar en planes mensuales que se adaptan a tu piel y a tu agenda. Sin paquetes genéricos ni promesas de catálogo.",
  ctaPrimario: { texto: "Ver tratamientos", a: "/tratamientos" },
  ctaSecundario: { texto: "Agendar evaluación", a: "/agendar" },
  telefono: "+56 2 2313 4567",
  telefonoHref: "tel:+56223134567",
  correo: "hola@eterestetica.cl",
  direccion: "Nueva Costanera 3925 · Vitacura, Santiago",
  horario: "Lunes a sábado 9:30–20:00",
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
  { k: "Plan mensual", v: "personalizado" },
  { k: "Evaluación de piel", v: "con cámara" },
  { k: "Primera sesión", v: "con 20% dto." },
];

export const comunas = ["Vitacura", "Las Condes", "Providencia", "Lo Barnechea", "Ñuñoa", "Santiago"];

export const cita = {
  texto:
    "Mi plan mensual se ajusta solo: en invierno hidratación, en verano manchas. Nunca me vendieron lo mismo dos veces.",
  autor: "C. Undurraga · clienta del plan mensual",
};

export const propiedades: Propiedad[] = [
  {
    id: "evaluacion-piel",
    ref: "ET·01",
    titulo: "Evaluación de piel con cámara",
    operacion: "venta",
    tipo: "Facial",
    comuna: "Vitacura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 35,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Análisis con cámara de piel: manchas, poros, líneas y hydrated real, medidos —no opinados—. De ahí sale su plan escrito y el presupuesto del año.",
    fotos: [media("detail.jpg"), media("room.jpg"), media("still.jpg"), media("tools.jpg")],
    destacada: true,
    coord: [-33.402, -70.605],
  },
  {
    id: "facial-profunda",
    ref: "ET·02",
    titulo: "Limpieza facial profunda",
    operacion: "venta",
    tipo: "Facial",
    comuna: "Vitacura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 58,
    estacionamientos: 0,
    anio: 75,
    descripcion:
      "Limpieza con extracción, vaporización y mascarilla según su tipo de piel del mes. La sesión termina con la rutina de casa corregida, no vendida.",
    fotos: [media("room.jpg"), media("still.jpg"), media("detail.jpg")],
    destacada: true,
    coord: [-33.402, -70.606],
  },
  {
    id: "plan-mensual",
    ref: "ET·03",
    titulo: "Plan mensual ÉTER",
    operacion: "arriendo",
    tipo: "Plan",
    comuna: "Vitacura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 89,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Una sesión al mes diseñada en base a tu evaluación: alterna limpieza, hidratación profunda y activos según estación. Precio fijo mensual y prioridad de agenda.",
    fotos: [media("still.jpg"), media("tools.jpg"), media("room.jpg")],
    destacada: true,
    coord: [-33.401, -70.605],
  },
  {
    id: "corporal",
    ref: "ET·04",
    titulo: "Tratamientos corporales",
    operacion: "arriendo",
    tipo: "Corporal",
    comuna: "Vitacura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 65,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Drenaje linfático, firma corporal y radiofrecuencia en sesiones de 60 minutos, con plan escrito y medición de circunferencia cada cuatro sesiones.",
    fotos: [media("tools.jpg"), media("detail.jpg")],
    coord: [-33.403, -70.607],
  },
  {
    id: "depilacion",
    ref: "ET·05",
    titulo: "Fotodepilación con test previo",
    operacion: "arriendo",
    tipo: "Depilación",
    comuna: "Vitacura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 45,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Sesión con test de piel y vello incluido en la primera visita. Precio por zona, publicado, y plan de sesiones con fecha de término estimada.",
    fotos: [media("detail.jpg"), media("room.jpg")],
    coord: [-33.402, -70.604],
  },
  {
    id: "belleza-manos",
    ref: "ET·06",
    titulo: "Manos, pies y detalles",
    operacion: "venta",
    tipo: "Belleza",
    comuna: "Vitacura",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 32,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Manicuria rusa, pedicuria spa y diseño de cejas con técnicas actuales. Los detalles que se notan en una videollamada y en una mano extendida.",
    fotos: [media("still.jpg"), media("tools.jpg")],
    coord: [-33.401, -70.606],
  },
];

export const cifras = [
  { valor: 7, sufijo: "", etiqueta: "Años de centro", detalle: "En Nueva Costanera desde 2018" },
  { valor: 2600, sufijo: "+", etiqueta: "Planes mensuales activos", detalle: "Clientas recurrentes" },
  { valor: 340, sufijo: "", etiqueta: "Evaluaciones de piel", detalle: "Con cámara, el último año" },
  { valor: 92, sufijo: "%", etiqueta: "Vuelve al mes siguiente", detalle: "La métrica que nos importa" },
];

export const cartera = [
  { n: "01", titulo: "Facial", texto: "Limpiezas, hidratación profunda y activos según la estación y tu piel medida.", pie: "Desde $58.000" },
  { n: "02", titulo: "Corporal", texto: "Drenaje, firma y radiofrecuencia con medición de avance cada cuatro sesiones.", pie: "Desde $65.000" },
  { n: "03", titulo: "Depilación", texto: "Fotodepilación con test previo y precio por zona publicado.", pie: "Desde $45.000" },
  { n: "04", titulo: "Planes mensuales", texto: "Una sesión al mes, personalizada y con prioridad de agenda.", pie: "$89.000/mes" },
];

export const metodo = [
  { n: "01", titulo: "Evaluación con cámara", texto: "Tu piel medida, no opinada: manchas, poros e hidratación con números. De ahí sale el plan." },
  { n: "02", titulo: "Plan por estación", texto: "La piel cambia con el año: el plan mensual se ajusta en invierno y verano sin que lo pidas." },
  { n: "03", titulo: "Sesión con rutina corregida", texto: "Cada sesión termina revisando tu rutina de casa. Corregir vale más que vender cremas." },
  { n: "04", titulo: "Medición de avance", texto: "En corporal, circunferencia cada cuatro sesiones. En facial, reevaluación semestral con cámara." },
];

export const equipo = [
  { iniciales: "VA", nombre: "Valentina Ariztía", cargo: "Esteticista integral · Fundadora", detalle: "Especialista en planes faciales personalizados." },
  { iniciales: "MS", nombre: "Marcela San Martín", cargo: "Esteticista corporal", detalle: "Drenaje linfático y protocolos corporales." },
  { iniciales: "CR", nombre: "Camila Ríos", cargo: "Depilación avanzada", detalle: "Fotodepilación con test de piel." },
  { iniciales: "FG", nombre: "Fernanda Gómez", cargo: "Manos, pies y cejas", detalle: "Manicuria rusa y diseño." },
];

export const testimonios = [
  { texto: "La evaluación con cámara me mostró las manchas antes de verlas al espejo. El plan las frenó.", autor: "P. Larraín", detalle: "Clienta · Facial" },
  { texto: "El plan mensual me ordenó la piel y el presupuesto. Sin paquetes eternos que uno no usa.", autor: "A. Barros", detalle: "Clienta · Plan" },
  { texto: "Medir circunferencias cada cuatro sesiones debería ser obligatorio en todas partes. Acá lo hacen.", autor: "C. Prieto", detalle: "Clienta · Corporal" },
];

export const faq = [
  { p: "¿Qué es la evaluación con cámara?", r: "Un análisis que mide manchas, poros, líneas e hidratación con números y fotos. El plan se arma sobre eso, no sobre una opinión." },
  { p: "¿Cómo funciona el plan mensual?", r: "$89.000 mensuales por una sesión diseñada según tu evaluación y la estación del año. Prioridad de agenda y reevaluación semestral incluida." },
  { p: "¿Venden cremas?", r: "Vendemos las que tu rutina necesita, cuando la necesita. Cada sesión revisa tu rutina de casa y corregimos antes de agregar." },
  { p: "¿Los resultados son inmediatos?", r: "La limpieza facial se nota ese día. Los planes de manchas y corporales se miden a las cuatro y ocho sesiones. Prometemos plazos medibles." },
  { p: "¿Puedo congelar el plan mensual?", r: "Sí, hasta dos meses al año sin costo. La piel descansa, la agenda no se pierde." },
];

export const valoresGestion = {
  intro: "Precios publicados, planes honestos.",
  sub: "Cada tratamiento con su valor publicado y los planes mensuales con precio fijo. Sin paquetes que no terminas usando.",
  filas: [
    { tipo: "Evaluación de piel", detalle: "Con cámara y plan escrito", venta: "$35.000", arriendo: "se descuenta" },
    { tipo: "Limpieza facial profunda", detalle: "75 minutos con rutina corregida", venta: "$58.000", arriendo: "por sesión" },
    { tipo: "Plan mensual", detalle: "Sesión personalizada al mes", venta: "$89.000/mes", arriendo: "se puede congelar" },
    { tipo: "Corporal", detalle: "60 minutos con medición", venta: "$65.000", arriendo: "plan de 8" },
  ],
};

// Paleta del hero 3D — día cálido, acento rosa empolvado.
export const tema3d = {
  noche: false,
  fondo: "#f7f4ef",
  niebla: "#f7f4ef",
  torre: "#ffffff",
  torreTecho: "#e9e1da",
  ventanas: "#c39d94",
  ventanasAlt: "#dcc3bb",
  acento: "#b0756b",
  suelo: "#efe9e3",
  estrellas: "#8a7d76",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Tu piel, medida. Tu plan, escrito.",
  sub: "Agenda tu evaluación con cámara: 40 minutos que ordenan el año entero de tratamientos, con presupuesto claro y sin paquetes genéricos.",
  beneficios: [
    { titulo: "Evaluación con cámara", texto: "Manchas, poros e hidratación medidos con números, no con opiniones." },
    { titulo: "Plan por estación", texto: "El plan mensual se ajusta solo al invierno y al verano." },
    { titulo: "Rutina corregida", texto: "Cada sesión revisa tu casa: corregir antes de vender." },
    { titulo: "Primera sesión 20% off", texto: "Para partir el plan con lo que tu piel necesita ese mes." },
  ],
};

export const textoNosotros = {
  kicker: "El centro",
  titulo: "Estética de hábito, no de evento.",
  parrafo1:
    "ÉTER existe desde 2018 con una convicción: la piel mejora con constancia medible, no con sesiones heroicas de fin de año. Por eso todo parte con una evaluación y sigue con planes mensuales.",
  parrafo2:
    "Somos un centro de estética integral con estándar clínico de registro: cada clienta tiene su expediente con fotos y mediciones, y cada plan se revisa semestralmente. Tratarse bien es un hábito; nuestro trabajo es volverlo fácil.",
  valores: [
    { titulo: "Medir antes de tratar", texto: "Cámara, números y fotos. El plan se arma sobre datos de tu piel." },
    { titulo: "Constancia sobre intensidad", texto: "Sesiones mensuales ajustadas valen más que una marathon de tratamientos." },
    { titulo: "Sin paquetes eternos", texto: "Planes que se pueden congelar, pausar y cerrar. La lealtad se gana, no se ata." },
  ],
};
