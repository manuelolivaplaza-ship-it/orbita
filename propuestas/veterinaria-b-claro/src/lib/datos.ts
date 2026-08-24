// Veterinaria (b-claro) — Clínica veterinaria de barrio · contenido del sitio.
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
  nombre: "Vet",
  sufijo: "Norte",
  kicker: "Clínica veterinaria · La Cisterna · Santiago",
  claim: ["Su veterinario", "de confianza,", "a una cuadra."],
  sub: "Clínica veterinaria de barrio con historia clínica digital, vacunación al día y urgencias el mismo día. El mismo veterinario de siempre, con la tecnología que no siempre hay en el barrio.",
  ctaPrimario: { texto: "Ver servicios", a: "/tratamientos" },
  ctaSecundario: { texto: "Agendar consulta", a: "/agendar" },
  telefono: "+56 2 2541 7788",
  telefonoHref: "tel:+56225417788",
  correo: "clinica@vetnorte.cl",
  direccion: "Gran Avenida 6540 · La Cisterna, Santiago",
  horario: "Lunes a sábado 9:00–20:00 · urgencias por llamado",
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
  { k: "Historia clínica", v: "digital y tuya" },
  { k: "Urgencias", v: "el mismo día" },
  { k: "Vacunas al día", v: "con recordatorio" },
];

export const comunas = ["La Cisterna", "San Ramón", "El Bosque", "San Miguel", "La Granja", "Lo Espejo"];

export const cita = {
  texto:
    "Mi perro tiene 11 años y toda su vida en una misma ficha. El veterinario nuevo entendió todo en dos minutos.",
  autor: "J. Herrera · cliente de toda la vida",
};

export const propiedades: Propiedad[] = [
  {
    id: "consulta-veterinaria",
    ref: "VN·01",
    titulo: "Consulta veterinaria",
    operacion: "venta",
    tipo: "Consulta",
    comuna: "La Cisterna",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 22,
    estacionamientos: 0,
    anio: 30,
    descripcion:
      "Examen completo con tiempo para preguntar. La historia clínica queda digital y te enviamos el resumen por correo con las indicaciones escritas.",
    fotos: [media("sala.jpg"), media("detalle.jpg"), media("quirofano.jpg"), media("farmacia.jpg")],
    destacada: true,
    coord: [-33.534, -70.668],
  },
  {
    id: "vacunacion",
    ref: "VN·02",
    titulo: "Vacunas y desparasitación",
    operacion: "venta",
    tipo: "Prevención",
    comuna: "La Cisterna",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 18,
    estacionamientos: 0,
    anio: 20,
    descripcion:
      "Calendario completo de vacunas con recordatorio automático por WhatsApp antes de cada fecha. Cachorros, adultos y seniors, con pasaporte al día.",
    fotos: [media("detalle.jpg"), media("farmacia.jpg"), media("sala.jpg")],
    destacada: true,
    coord: [-33.535, -70.667],
  },
  {
    id: "cirugia",
    ref: "VN·03",
    titulo: "Cirugía y esterilización",
    operacion: "arriendo",
    tipo: "Cirugía",
    comuna: "La Cisterna",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 120,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Quirófano propio con monitoreo anestésico: esterilizaciones, extracción de tumores y cirugías dentales. Presupuesto cerrado que incluye el control post-operatorio.",
    fotos: [media("quirofano.jpg"), media("sala.jpg")],
    destacada: true,
    coord: [-33.533, -70.669],
  },
  {
    id: "laboratorio",
    ref: "VN·04",
    titulo: "Laboratorio y diagnósticos",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "La Cisterna",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 25,
    estacionamientos: 0,
    anio: 30,
    descripcion:
      "Exámenes de sangre, orina y perfiles de órgano con resultados el mismo día en los paneles frecuentes. Radiografías digitales explicadas en pantalla.",
    fotos: [media("farmacia.jpg"), media("detalle.jpg")],
    coord: [-33.534, -70.668],
  },
  {
    id: "urgencias",
    ref: "VN·05",
    titulo: "Urgencias del mismo día",
    operacion: "venta",
    tipo: "Urgencia",
    comuna: "La Cisterna",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 30,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Vómitos, cojeras, heridas y ojos: atención prioritaria con llamada previa. Si el caso requiere hospitalización, coordinamos el traslado documentado.",
    fotos: [media("sala.jpg"), media("quirofano.jpg")],
    coord: [-33.536, -70.668],
  },
  {
    id: "peluqueria",
    ref: "VN·06",
    titulo: "Peluquería y dental",
    operacion: "venta",
    tipo: "Estética",
    comuna: "La Cisterna",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 20,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Baño y corte con manejo de estrés (y de gatos). Limpieza dental ultrasónica con anestesia monitoreada cuando el sarro ya no se quita con cepillo.",
    fotos: [media("detalle.jpg"), media("sala.jpg")],
    coord: [-33.534, -70.667],
  },
];

export const cifras = [
  { valor: 19, sufijo: "", etiqueta: "Años en el barrio", detalle: "Misma esquina desde 2006" },
  { valor: 8400, sufijo: "+", etiqueta: "Pacientes fichados", detalle: "Perros, gatos y algunos exóticos" },
  { valor: 92, sufijo: "%", etiqueta: "Urgencias vistas el mismo día", detalle: "Llamando antes de las 18:00" },
  { valor: 6, sufijo: "", etiqueta: "Profesionales", detalle: "Veterinarios y técnicos" },
];

export const cartera = [
  { n: "01", titulo: "Consulta y prevención", texto: "Historia clínica digital, vacunas con recordatorio y chequeos seniors.", pie: "Desde $22.000" },
  { n: "02", titulo: "Cirugía", texto: "Quirófano propio con monitoreo y presupuesto cerrado con control incluido.", pie: "Desde $120.000" },
  { n: "03", titulo: "Diagnóstico", texto: "Laboratorio con resultados el mismo día y radiografía digital.", pie: "Desde $25.000" },
  { n: "04", titulo: "Urgencias", texto: "Prioridad real con llamada previa, lunes a sábado.", pie: "Mismo día" },
];

export const metodo = [
  { n: "01", titulo: "Hora con llamado", texto: "Llama o escribe por WhatsApp: te decimos cuándo venir y te esperamos con la ficha lista." },
  { n: "02", titulo: "Examen explicado", texto: "El examen se hace frente a ti y se explica en pantalla. Ninguna decisión sin tu ok." },
  { n: "03", titulo: "Presupuesto cerrado", texto: "Antes de cualquier procedimiento: qué incluye, qué no y el valor total. Sin sorpresas." },
  { n: "04", titulo: "Resumen por correo", texto: "Cada visita termina con indicaciones escritas y la ficha actualizada. Tu mascota, documentada." },
];

export const equipo = [
  { iniciales: "RC", nombre: "Rodrigo Cárdenas", cargo: "Médico veterinario · Director", detalle: "19 años de práctica clínica en pequeñas especies." },
  { iniciales: "FM", nombre: " Francisca Maldonado", cargo: "Médica veterinaria", detalle: "Medicina interna y geriatría felina." },
  { iniciales: "DS", nombre: "Diego Salinas", cargo: "Médico veterinario · Cirugía", detalle: "Quirófano y anestesia monitoreada." },
  { iniciales: "AP", nombre: "Andrea Pérez", cargo: "Técnico veterinario", detalle: "Laboratorio, peluquería y manejo de estrés." },
];

export const testimonios = [
  { texto: "Me mandan el resumen de cada visita por correo con las indicaciones. Ninguna veterinaria lo hacía.", autor: "M. Tapia", detalle: "Cliente · Consultas" },
  { texto: "La esterilización salió en el presupuesto exacto que dijeron, control incluido.", autor: "Familia Rojas", detalle: "Clientes · Cirugía" },
  { texto: "Mi gato anciano tiene su plan senior con recordatorios. Yo solo aparezco.", autor: "C. Fuentes", detalle: "Cliente · Prevención" },
];

export const faq = [
  { p: "¿Atienden urgencias sin hora?", r: "Con llamada previa, sí: la mayoría se atiende el mismo día hasta las 20:00. La llamada nos permite prepararnos y priorizar." },
  { p: "¿Cuánto cuesta una consulta?", r: "$22.000 e incluye el examen completo y el resumen digital. Las vacunas y exámenes se presupuestan aparte, por escrito." },
  { p: "¿Atienden solo perros y gatos?", r: "Principalmente. También conejos, hámsters y aves: llama antes para confirmar que el profesional de turno atienda exóticos." },
  { p: "¿Tienen hospitalización?", r: "Tenemos boxes de observación para el día. Hospitalizaciones largas se coordinan con centros asociados y traslado documentado." },
  { p: "¿Puedo llevar la ficha de otra veterinaria?", r: "Sí, y la digitalizamos gratis en la primera visita: historia, vacunas y exámenes quedan en tu expediente." },
];

export const valoresGestion = {
  intro: "Precios de barrio, claros de verdad.",
  sub: "Cada servicio tiene valor publicado y los procedimientos se presupuestan cerrados antes de partir.",
  filas: [
    { tipo: "Consulta veterinaria", detalle: "Con resumen digital", venta: "$22.000", arriendo: "por paciente" },
    { tipo: "Vacuna + aplicación", detalle: "Con recordatorio automático", venta: "$18.000", arriendo: "según calendario" },
    { tipo: "Esterilización", detalle: "Con control post-operatorio", venta: "$120.000", arriendo: "presupuesto cerrado" },
    { tipo: "Perfil de laboratorio", detalle: "Resultados el mismo día", venta: "$25.000", arriendo: "por panel" },
  ],
};

// Paleta del hero 3D — día, acento verde clínico.
export const tema3d = {
  noche: false,
  fondo: "#fafaf7",
  niebla: "#fafaf7",
  torre: "#ffffff",
  torreTecho: "#e5e7e2",
  ventanas: "#a3c4ad",
  ventanasAlt: "#cadbd0",
  acento: "#2e7d5b",
  suelo: "#eef0ea",
  estrellas: "#6f7a72",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Llama, te decimos cuándo venir.",
  sub: "Agenda tu consulta o urgencia por WhatsApp o teléfono: te esperamos con la ficha lista y el examen se hace frente a ti.",
  beneficios: [
    { titulo: "Urgencias el mismo día", texto: "Con llamada previa, el 92% se atiende antes de las 20:00." },
    { titulo: "Resumen por correo", texto: "Cada visita con indicaciones escritas y ficha digitalizada." },
    { titulo: "Presupuestos cerrados", texto: "Antes de cualquier procedimiento, con control incluido." },
    { titulo: "Recordatorios de vacuna", texto: "WhatsApp antes de cada fecha. Tú solo aparezcas." },
  ],
};

export const textoNosotros = {
  kicker: "La clínica",
  titulo: "La veterinaria del barrio, completa.",
  parrafo1:
    "Vet Norte funciona desde 2006 en la misma esquina de Gran Avenida. Hemos visto crecer a perros que hoy son seniors y a familias que hoy traen a sus segundas mascotas.",
  parrafo2:
    "En 2021 nos digitalizamos: ficha electrónica, resumen por correo y recordatorios automáticos. La calidez del barrio con la organización que el barrio merecía.",
  valores: [
    { titulo: "Decisiones con el dueño", texto: "El examen se hace frente a ti. Ninguna decisión sin tu ok." },
    { titulo: "Ficha de por vida", texto: "Historia clínica digital que se puede llevar a cualquier veterinario." },
    { titulo: "Barrio, con estándar", texto: "Precios de barrio con laboratorio y quirófano propios." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "sala.jpg", marco: false, caption: "" };
