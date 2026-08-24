// Veterinaria (b-teal) — Bienestar veterinario preventivo · contenido del sitio.
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
  nombre: "Aurea",
  sufijo: "Veterinaria",
  kicker: "Medicina veterinaria preventiva · Ñuñoa · Santiago",
  claim: ["Que no se", "enferme es", "el mejor tratamiento."],
  sub: "Clínica veterinaria enfocada en prevenir: check-ups anuales con panel de laboratorio, planes de alimentación y detección temprana. La medicina que evita la urgencia del domingo.",
  ctaPrimario: { texto: "Ver servicios", a: "/servicios" },
  ctaSecundario: { texto: "Agendar check-up", a: "/agendar" },
  telefono: "+56 2 2947 3311",
  telefonoHref: "tel:+56229473311",
  correo: "consultas@aureavet.cl",
  direccion: "Av. Irarrázaval 3200 · Ñuñoa, Santiago",
  horario: "Lunes a sábado 9:00–19:00",
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
  { k: "Check-up anual", v: "con panel completo" },
  { k: "Planes senior", v: "cada 6 meses" },
  { k: "Detección temprana", v: "antes de síntomas" },
];

export const comunas = ["Ñuñoa", "Macul", "La Florida", "Providencia", "San Joaquín", "Peñalolén"];

export const cita = {
  texto:
    "El panel del check-up encontró un problema renal antes de que mi perro se sintiera mal. Se controla con dieta y está perfecto.",
  autor: "Familia Barrenechea · pacientes preventivos",
};

export const propiedades: Propiedad[] = [
  {
    id: "checkup-anual",
    ref: "AU·01",
    titulo: "Check-up anual preventivo",
    operacion: "arriendo",
    tipo: "Prevención",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 95,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Examen físico completo, panel de laboratorio (hemograma, bioquímica y orina) y evaluación nutricional. Sale con el informe de salud de su mascota y el plan del año.",
    fotos: [media("consulta.jpg"), media("detalle.jpg"), media("farmacia.jpg"), media("recepcion.jpg")],
    destacada: true,
    coord: [-33.462, -70.613],
  },
  {
    id: "consulta-medicina",
    ref: "AU·02",
    titulo: "Consulta de medicina",
    operacion: "venta",
    tipo: "Consulta",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 28,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Consulta con tiempo: examen, diagnóstico diferencial y plan explicado con opciones. La segunda opinión dentro de 15 días no se cobra si el caso sigue abierto.",
    fotos: [media("consulta.jpg"), media("recepcion.jpg"), media("detalle.jpg")],
    destacada: true,
    coord: [-33.462, -70.612],
  },
  {
    id: "plan-senior",
    ref: "AU·03",
    titulo: "Plan senior (7+ años)",
    operacion: "arriendo",
    tipo: "Prevención",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 75,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Sobre los 7 años, la prevención se acelera: control cada 6 meses con panel dirigido, presión arterial y peso. Detectar a tiempo es tratar mejor.",
    fotos: [media("detalle.jpg"), media("farmacia.jpg")],
    destacada: true,
    coord: [-33.463, -70.614],
  },
  {
    id: "nutricion",
    ref: "AU·04",
    titulo: "Nutrición y peso",
    operacion: "arriendo",
    tipo: "Prevención",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 35,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Plan alimentario según edad, raza y condición corporal, con control de peso mensual. El sobrepeso acorta la vida: la dieta correcta la alarga.",
    fotos: [media("farmacia.jpg"), media("consulta.jpg")],
    coord: [-33.461, -70.613],
  },
  {
    id: "dental",
    ref: "AU·05",
    titulo: "Salud dental",
    operacion: "arriendo",
    tipo: "Cirugía",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 140,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Limpieza ultrasónica bajo anestesia monitoreada con radiografía dental incluida. El sarro no es cosmético: es una infección crónica con fecha de vencimiento renal.",
    fotos: [media("recepcion.jpg"), media("detalle.jpg")],
    coord: [-33.462, -70.614],
  },
  {
    id: "urgencias",
    ref: "AU·06",
    titulo: "Urgencias y cáncer de urgencia",
    operacion: "venta",
    tipo: "Urgencia",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 38,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Atención prioritaria con estabilización y derivación documentada si el caso lo requiere. Los pacientes con plan preventivo tienen prioridad de agenda.",
    fotos: [media("consulta.jpg"), media("farmacia.jpg")],
    coord: [-33.462, -70.611],
  },
];

export const cifras = [
  { valor: 10, sufijo: "", etiqueta: "Años de clínica", detalle: "Fundada en 2015" },
  { valor: 3800, sufijo: "+", etiqueta: "Check-ups realizados", detalle: "Con panel de laboratorio" },
  { valor: 41, sufijo: "%", etiqueta: "Enfermedades detectadas a tiempo", detalle: "Sin síntomas aún, en chequeo" },
  { valor: 5, sufijo: "", etiqueta: "Profesionales", detalle: "Medicina, nutrición y cirugía" },
];

export const cartera = [
  { n: "01", titulo: "Check-up preventivo", texto: "Examen, panel completo y plan del año en una visita.", pie: "Desde $95.000" },
  { n: "02", titulo: "Planes senior", texto: "Cada 6 meses a partir de los 7 años, con panel dirigido.", pie: "Desde $75.000" },
  { n: "03", titulo: "Nutrición y peso", texto: "Plan alimentario con control mensual de peso.", pie: "Desde $35.000" },
  { n: "04", titulo: "Consulta y urgencias", texto: "Consulta con segunda opinión incluida y urgencias prioritarias.", pie: "Desde $28.000" },
];

export const metodo = [
  { n: "01", titulo: "Línea base", texto: "El primer check-up establece la línea base de su mascota: todo cambio futuro se lee contra ella." },
  { n: "02", titulo: "Plan según edad", texto: "Cachorro, adulto o senior: la frecuencia y el panel se ajustan a la etapa, no al catálogo." },
  { n: "03", titulo: "Detección temprana", texto: "El 41% de las enfermedades que tratamos se encontró en chequeo, antes del primer síntoma." },
  { n: "04", titulo: "Plan escrito y calendarizado", texto: "Cada control con fecha y contenido. La prevención solo funciona si llega a tiempo." },
];

export const equipo = [
  { iniciales: "MA", nombre: "Magdalena Arriagada", cargo: "Médica veterinaria · Directora", detalle: "Medicina preventiva, 10 años." },
  { iniciales: "TB", nombre: "Tomás Bianchi", cargo: "Médico veterinario", detalle: "Medicina interna y diagnóstico." },
  { iniciales: "SN", nombre: "Sofía Necochea", cargo: "Nutricionista veterinaria", detalle: "Planes alimentarios y obesidad." },
  { iniciales: "JL", nombre: "Javier Larrain", cargo: "Cirujano veterinario", detalle: "Anestesia monitoreada y dental." },
];

export const testimonios = [
  { texto: "El plan senior encontró hipotiroidismo antes del primer síntoma. Tratamiento simple, vida normal.", autor: "C. Vergara", detalle: "Cliente · Senior" },
  { texto: "Bajaron 2 kilos a mi gato con el plan nutricional. Su diabetes se controló sin insulina.", autor: "P. Mardones", detalle: "Cliente · Nutrición" },
  { texto: "La línea base del primer check-up hizo visible lo que después cambió. Nada de adivinar.", autor: "Familia Astete", detalle: "Clientes · Preventivo" },
];

export const faq = [
  { p: "¿Por qué un check-up si está sano?", r: "Porque la línea base solo se puede tomar estando sano: recién ahí los cambios se leen a tiempo. El 41% de las enfermedades que tratamos se encontró así." },
  { p: "¿Qué incluye el panel de laboratorio?", r: "Hemograma, perfil bioquímico renal y hepático, y examen de orina. Los resultados se explican en la misma visita." },
  { p: "¿Cuánto cuesta mantener un plan preventivo?", r: "Un check-up anual desde $95.000, o planes senior cada 6 meses desde $75.000. Menos que una urgencia de fin de semana." },
  { p: "¿Atienden urgencias igual?", r: "Sí, con prioridad para pacientes del programa. La prevención reduce las urgencias, no las elimina." },
  { p: "¿Sirve para mascotas mayores con diagnóstico?", r: "Más aún: el plan se ajusta a su condición con panel dirigido y controles más frecuentes. Prevenir también es frenar la progresión." },
];

export const valoresGestion = {
  intro: "La prevención se puede presupuestar.",
  sub: "Los planes preventivos tienen precio fijo y contenido definido. La urgencia del domingo, no.",
  filas: [
    { tipo: "Check-up anual", detalle: "Examen + panel + plan", venta: "$95.000", arriendo: "por paciente" },
    { tipo: "Plan senior", detalle: "Cada 6 meses, panel dirigido", venta: "$75.000", arriendo: "por control" },
    { tipo: "Consulta de medicina", detalle: "Con 2ª opinión a 15 días", venta: "$28.000", arriendo: "si el caso sigue" },
    { tipo: "Limpieza dental", detalle: "Con radiografía incluida", venta: "$140.000", arriendo: "anestesia monitoreada" },
  ],
};

// Paleta del hero 3D — día teal clínico.
export const tema3d = {
  noche: false,
  fondo: "#fbfdfc",
  niebla: "#fbfdfc",
  torre: "#ffffff",
  torreTecho: "#e0e9e5",
  ventanas: "#9cc7bf",
  ventanasAlt: "#c8ded8",
  acento: "#1f8a7d",
  suelo: "#eef4f1",
  estrellas: "#57706a",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Un chequeo hoy, menos urgencias mañana.",
  sub: "Agende el primer check-up: establecemos la línea base de su mascota y armamos el plan preventivo del año con presupuesto fijo.",
  beneficios: [
    { titulo: "Línea base medible", texto: "El primer check-up permite leer todo cambio futuro contra datos, no contra memoria." },
    { titulo: "Planes por edad", texto: "Cachorro, adulto o senior: frecuencia y panel ajustados a la etapa." },
    { titulo: "Segunda opinión incluida", texto: "Si el caso sigue abierto a 15 días, la revisión no se cobra." },
    { titulo: "Prioridad de agenda", texto: "Los pacientes del programa pasan primero en urgencias." },
  ],
};

export const textoNosotros = {
  kicker: "La clínica",
  titulo: "Veterinaria que trabaja antes del síntoma.",
  parrafo1:
    "Aurea nació en 2015 con una convicción incómoda: la mayoría de las urgencias veterinarias se podía haber visto venir. Convertimos esa convicción en check-ups con laboratorio y planes por edad.",
  parrafo2:
    "Trabajamos con línea base, panel completo y calendario escrito. No somos la clínica de las mil vacunas ni la de las promociones eternas: somos la que le avisa antes de que duela.",
  valores: [
    { titulo: "Línea base, no adivinación", texto: "Todo cambio se lee contra datos del propio paciente." },
    { titulo: "Edad correcta, control correcto", texto: "La frecuencia del control la pone la edad, no el catálogo." },
    { titulo: "Presupuesto preventivo", texto: "Planes de precio fijo: la prevención se puede planificar, la urgencia no." },
  ],
};
