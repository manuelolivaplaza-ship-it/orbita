// Pausa — Consulta dental de adultos, agenda limitada · contenido del sitio.
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
  nombre: "Pausa",
  sufijo: "Consulta Dental",
  kicker: "Consulta dental de adultos · agenda limitada · Santiago",
  claim: ["Doce pacientes", "al día. Ni", "uno más."],
  sub: "Consulta dental para adultos con agenda deliberadamente limitada: una hora por paciente, sin sala de espera y sin dentista corriendo entre sillas. Odontología a la velocidad correcta.",
  ctaPrimario: { texto: "Ver tratamientos", a: "/tratamientos" },
  ctaSecundario: { texto: "Solicitar hora", a: "/agendar" },
  telefono: "+56 9 5598 2244",
  telefonoHref: "tel:+56955982244",
  correo: "consulta@pausadental.cl",
  direccion: "Los Conquistadores 1750, of. 502 · Providencia",
  horario: "Lunes a jueves 10:00–18:00 · solo con hora",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la clínica.",
};

export const etiquetas = {
  catalogo: "Tratamientos",
  catalogoUno: "Tratamiento",
  captacion: "Agendar",
  nosotros: "La consulta",
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
  { texto: "La consulta", a: "/clinica" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Pacientes por día", v: "12 máximo" },
  { k: "Duración de hora", v: "60 minutos" },
  { k: "Lista de espera", v: "1 semana" },
];

export const comunas = ["Providencia", "Ñuñoa", "Santiago", "Las Condes", "La Reina", "Vitacura"];

export const cita = {
  texto:
    "Es la primera vez que un dentista me atendió una hora completa y no miró el reloj. Se nota la diferencia de agenda.",
  autor: "M. Steinberg · paciente desde 2023",
};

export const propiedades: Propiedad[] = [
  {
    id: "consulta-adultos",
    ref: "PA·01",
    titulo: "Consulta integral de adultos",
    operacion: "venta",
    tipo: "General",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 55,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Una hora completa: revisión, diagnóstico conversado y plan por escrito. Sin silla de espera y sin sensación de cadena de montaje.",
    fotos: [media("room.jpg"), media("still.jpg"), media("basin.jpg"), media("bench.jpg")],
    destacada: true,
    coord: [-33.433, -70.619],
  },
  {
    id: "mantenimiento-encias",
    ref: "PA·02",
    titulo: "Mantenimiento de encías",
    operacion: "arriendo",
    tipo: "Prevención",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 75,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Programa periodontal de mantención para encías que ya dieron problemas: limpieza profunda calendarizada cada tres o cuatro meses, según su boca.",
    fotos: [media("still.jpg"), media("room.jpg"), media("bench.jpg")],
    destacada: true,
    coord: [-33.433, -70.618],
  },
  {
    id: "bruxismo",
    ref: "PA·03",
    titulo: "Bruxismo y placas de descarga",
    operacion: "arriendo",
    tipo: "Prevención",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 190,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Diagnóstico de desgaste por apretamiento y placa de descarga a medida, con control de ajuste incluido. La placa se entrega en dos semanas y se revisa cada año.",
    fotos: [media("basin.jpg"), media("still.jpg")],
    destacada: true,
    coord: [-33.434, -70.62],
  },
  {
    id: "rehabilitacion",
    ref: "PA·04",
    titulo: "Rehabilitación calmada",
    operacion: "arriendo",
    tipo: "Restauradora",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 540,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Bocas con mucha historia: coronas, puentes y prótesis planificadas por etapas de verdad, para que financiar y aguantar sea posible. Sesiones largas, pocas veces.",
    fotos: [media("bench.jpg"), media("room.jpg"), media("still.jpg")],
    coord: [-33.433, -70.619],
  },
  {
    id: "endodoncia",
    ref: "PA·05",
    titulo: "Endodoncia sin apuro",
    operacion: "arriendo",
    tipo: "Restauradora",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 240,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Tratamiento de conductos con la hora que necesita, no la que la agenda permite. Magnificación y una sesión larga en vez de tres cortas.",
    fotos: [media("room.jpg"), media("basin.jpg")],
    coord: [-33.432, -70.619],
  },
  {
    id: "segunda-visita",
    ref: "PA·06",
    titulo: "Control y conversación",
    operacion: "venta",
    tipo: "Prevención",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 0,
    estacionamientos: 0,
    anio: 30,
    descripcion:
      "Media hora para revisar evolución, ajustar placas y conversar el próximo paso. Incluida en cada plan de tratamiento de Pausa.",
    fotos: [media("still.jpg"), media("bench.jpg")],
    coord: [-33.433, -70.62],
  },
];

export const cifras = [
  { valor: 12, sufijo: "", etiqueta: "Pacientes por día", detalle: "Tope deliberado de la agenda" },
  { valor: 60, sufijo: " min", etiqueta: "Por consulta", detalle: "Una hora completa, real" },
  { valor: 18, sufijo: " años", etiqueta: "De práctica", detalle: "Solo odontología de adultos" },
  { valor: 1, sufijo: " sem", etiqueta: "Lista de espera", detalle: "Promedio para primera hora" },
];

export const cartera = [
  { n: "01", titulo: "Consulta integral", texto: "Una hora de diagnóstico conversado con plan escrito.", pie: "$55.000" },
  { n: "02", titulo: "Encías y prevención", texto: "Mantenimiento periodontal calendarizado para bocas con historia.", pie: "Cada 3–4 meses" },
  { n: "03", titulo: "Bruxismo", texto: "Placas de descarga a medida con control anual de ajuste.", pie: "$190.000" },
  { n: "04", titulo: "Rehabilitación", texto: "Coronas y prótesis por etapas financiadas sin apurar la boca.", pie: "Plan por escrito" },
];

export const metodo = [
  { n: "01", titulo: "Agenda limitada", texto: "Doce pacientes al día, máximo. La agenda se protege para que cada hora sea de verdad." },
  { n: "02", titulo: "Una hora por persona", texto: "La consulta dura 60 minutos: alcanzó para revisar, conversar y planificar sin reloj." },
  { n: "03", titulo: "Plan por etapas", texto: "Los tratamientos grandes se dividen en etapas financiables y espaciadas según su boca, no según la caja." },
  { n: "04", titulo: "Control incluido", texto: "Cada plan trae su control de evolución. Las cosas bien hechas se revisan." },
];

export const equipo = [
  { iniciales: "IS", nombre: "Isabel Serrano", cargo: "Odontóloga · Fundadora", detalle: "18 años de práctica. Solo adultos." },
  { iniciales: "TM", nombre: "Tomás Moraga", cargo: "Endodoncista invitado", detalle: "Conductos complejos con magnificación." },
  { iniciales: "RA", nombre: "Rosana Alegre", cargo: "Higiene y prevención", detalle: "Mantenciones periodontales." },
  { iniciales: "NV", nombre: "Natalia Vicuña", cargo: "Coordinación", detalle: "Cuida que la agenda siga siendo de 12." },
];

export const testimonios = [
  { texto: "Vengo cada cuatro meses desde hace dos años y nunca esperé más de dos minutos.", autor: "P. Undurraga", detalle: "Paciente · Encías" },
  { texto: "Me planificaron la rehabilitación en etapas de seis meses. Pude pagarla sin perder la boca.", autor: "C. Rosenfeld", detalle: "Paciente · Rehabilitación" },
  { texto: "La placa de bruxismo me quitó los dolores de cabeza de años. Y el control anual existe.", autor: "M. Errázuriz", detalle: "Paciente · Bruxismo" },
];

export const faq = [
  { p: "¿Por qué agenda limitada?", r: "Porque una hora por paciente exige tope. Doce pacientes al día es el número donde la calidad no cae. Cuando la lista de espera crece, sube la lista, no el ritmo." },
  { p: "¿Cuánto demora una hora?", r: "De verdad 60 minutos: revisión, conversación y plan. Sin procedimientos exprés apilados." },
  { p: "¿Atienden niños?", r: "No. Solo adultos, y es una decisión deliberada: la práctica y la clínica están diseñadas para bocas con historia." },
  { p: "¿Qué pasa si necesito algo urgente siendo paciente?", r: "Cada día tiene una hora de reserva para urgencias de pacientes en plan. Ese es otro beneficio de la agenda limitada." },
  { p: "¿Financian tratamientos grandes?", r: "Los dividimos en etapas espaciadas para que el flujo de pago acompañe el tratamiento. Sin crédito, sin intereses ocultos." },
];

export const valoresGestion = {
  intro: "Pocos tratamientos, bien cobrados.",
  sub: "La agenda limitada permite valores simples y planes por etapas. Lo que se cota es lo que se cobra.",
  filas: [
    { tipo: "Consulta integral", detalle: "60 minutos con plan escrito", venta: "$55.000", arriendo: "una hora real" },
    { tipo: "Mantención de encías", detalle: "Limpieza periodontal", venta: "$75.000", arriendo: "cada 3–4 meses" },
    { tipo: "Placa de descarga", detalle: "A medida con control anual", venta: "$190.000", arriendo: "ajustes incluidos" },
    { tipo: "Rehabilitación", detalle: "Por etapas según plan", venta: "plan escrito", arriendo: "financiamiento propio" },
  ],
};

// Paleta del hero 3D — día cálido tranquilo, acento salvia.
export const tema3d = {
  noche: false,
  fondo: "#f7f5f1",
  niebla: "#f7f5f1",
  torre: "#ffffff",
  torreTecho: "#e6e2d8",
  ventanas: "#a3b3a5",
  ventanasAlt: "#c9d3c9",
  acento: "#6b7f6e",
  suelo: "#edeae2",
  estrellas: "#6d6a5f",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Una hora que es de verdad una hora.",
  sub: "Solicite su hora: agenda limitada a 12 pacientes diarios para que cada visita se tome el tiempo que su boca necesita.",
  beneficios: [
    { titulo: "60 minutos reales", texto: "La consulta dura una hora completa. Sin cadena de montaje." },
    { titulo: "Sin sala de espera", texto: "La agenda se respeta hacia ambos lados: cero minutos de espera." },
    { titulo: "Planes por etapas", texto: "Los tratamientos grandes se dividen para que el pago acompañe." },
    { titulo: "Hora de urgencia diaria", texto: "Reservada para pacientes en plan. Otro beneficio de la agenda chica." },
  ],
};

export const textoNosotros = {
  kicker: "La consulta",
  titulo: "La clínica que dijo 'no más'.",
  parrafo1:
    "Pausa nació en 2020, en plena pandemia, cuando su fundadora cerró su agenda de 30 pacientes diarios y abrió una de 12. La calidad no cae por hacer más: cae por apurar.",
  parrafo2:
    "Hoy la consulta funciona con una regla inviolable: una hora por persona. Los pacientes notan la diferencia en la primera visita, y las bocas con historia —las nuestras— la notan más.",
  valores: [
    { titulo: "Menos pacientes, mejor atendidos", texto: "Doce al día. El número donde la calidad se sostiene." },
    { titulo: "Adultos solamente", texto: "Práctica y sala diseñadas para bocas con historia." },
    { titulo: "Pausa, no prisa", texto: "Los tratamientos siguen el ritmo de la boca y del bolsillo." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "tipografico", foto: "", marco: false, caption: "" };
