// Veterinaria (b-oscuro) — Hospital veterinario 24 horas · contenido del sitio.
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
  nombre: "VEGA",
  sufijo: "Hospital Veterinario",
  kicker: "Hospital veterinario 24 horas · Las Condes · Santiago",
  claim: ["Las 3 de la", "madrugada también", "somos veterinarios."],
  sub: "Hospital veterinario con guardia real las 24 horas: intensivistas, imágenes y laboratorio de madrugada. Cuando la urgencia no espera, tampoco nosotros.",
  ctaPrimario: { texto: "Ver servicios", a: "/servicios" },
  ctaSecundario: { texto: "Llamar ahora", a: "/agendar" },
  telefono: "+56 2 2756 0911",
  telefonoHref: "tel:+56227560911",
  correo: "urgencias@vegavet.cl",
  direccion: "Av. Américo Vespucio 5700 · Las Condes, Santiago",
  horario: "24 horas · los 365 días",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del hospital.",
};

export const etiquetas = {
  catalogo: "Servicios",
  catalogoUno: "Servicio",
  captacion: "Agendar",
  nosotros: "El hospital",
  fichaPlural: "servicios",
};

export const rutas = {
  inicio: "/",
  catalogo: "/servicios",
  ficha: "/servicio",
  captacion: "/agendar",
  nosotros: "/hospital",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Servicios", a: "/servicios" },
  { texto: "Agendar", a: "/agendar" },
  { texto: "El hospital", a: "/hospital" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Guardia", v: "24 horas real" },
  { k: "Imágenes", v: "de madrugada" },
  { k: "UCI", v: "con monitoreo" },
];

export const comunas = ["Las Condes", "Lo Barnechea", "Vitacura", "La Reina", "Ñuñoa", "Providencia"];

export const cita = {
  texto:
    "Llegamos a las 4 de la mañana con el perro envenenado y había un intensivista despierto. Le salvaron la vida.",
  autor: "Familia Sepúlveda · urgencia, 2024",
};

export const propiedades: Propiedad[] = [
  {
    id: "urgencia-24h",
    ref: "VG·01",
    titulo: "Urgencias 24 horas",
    operacion: "venta",
    tipo: "Urgencia",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 55,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Guardia veterinaria real de madrugada: intensivista, enfermería y laboratorio operativo. Estabilización inmediata y comunicación con tu veterinario de cabecera a primera hora.",
    fotos: [media("hero.jpg"), media("corridor.jpg"), media("object.jpg"), media("texture.jpg")],
    destacada: true,
    coord: [-33.399, -70.546],
  },
  {
    id: "uci",
    ref: "VG·02",
    titulo: "UCI y hospitalización",
    operacion: "arriendo",
    tipo: "Hospitalización",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 95,
    estacionamientos: 0,
    anio: 1440,
    descripcion:
      "Unidad de cuidados con monitoreo continuo, oxígeno y fluidoterapia. Visita diaria en horario amplio y reporte con fotos a las familias dos veces al día.",
    fotos: [media("object.jpg"), media("corridor.jpg"), media("hero.jpg")],
    destacada: true,
    coord: [-33.399, -70.545],
  },
  {
    id: "imagenes",
    ref: "VG·03",
    titulo: "Imágenes y diagnóstico",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 45,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Radiografía, ecografía y tomografía con informe el mismo día —también de madrugada. El diagnóstico que define el tratamiento, a la velocidad que la urgencia exige.",
    fotos: [media("corridor.jpg"), media("object.jpg")],
    destacada: true,
    coord: [-33.398, -70.546],
  },
  {
    id: "cirugia-especialidad",
    ref: "VG·04",
    titulo: "Cirugía de especialidad",
    operacion: "arriendo",
    tipo: "Cirugía",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 350,
    estacionamientos: 0,
    anio: 180,
    descripcion:
      "Cirugía ortopédica, torácica y oncológica con anestesia monitoreada y recuperación en UCI. Segunda opinión quirúrgica con el estudio de imágenes en pantalla.",
    fotos: [media("texture.jpg"), media("hero.jpg")],
    coord: [-33.4, -70.545],
  },
  {
    id: "laboratorio",
    ref: "VG·05",
    titulo: "Laboratorio de urgencia",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 32,
    estacionamientos: 0,
    anio: 30,
    descripcion:
      "Hemograma, gases, coagulación y perfil de tóxicos con resultado en 30 minutos, a cualquier hora. La velocidad del laboratorio decide muchos tratamientos.",
    fotos: [media("object.jpg"), media("texture.jpg")],
    coord: [-33.399, -70.547],
  },
  {
    id: "consulta-especialista",
    ref: "VG·06",
    titulo: "Consulta con especialistas",
    operacion: "venta",
    tipo: "Consulta",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 42,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Cardiología, neurología, oncología y medicina interna. Informe escrito al veterinario de cabecera: el especialista complementa, no reemplaza.",
    fotos: [media("hero.jpg"), media("corridor.jpg")],
    coord: [-33.398, -70.546],
  },
];

export const cifras = [
  { valor: 24, sufijo: " h", etiqueta: "Guardia real", detalle: "Los 365 días del año" },
  { valor: 14000, sufijo: "+", etiqueta: "Urgencias atendidas", detalle: "Desde 2012" },
  { valor: 30, sufijo: " min", etiqueta: "Resultado de laboratorio", detalle: "También a las 4 AM" },
  { valor: 12, sufijo: "", etiqueta: "Especialidades", detalle: "Incluida medicina intensiva" },
];

export const cartera = [
  { n: "01", titulo: "Urgencias 24 h", texto: "Intensivista, enfermería y laboratorio operativo de madrugada.", pie: "Desde $55.000" },
  { n: "02", titulo: "UCI", texto: "Monitoreo continuo con reporte con fotos dos veces al día.", pie: "Desde $95.000/día" },
  { n: "03", titulo: "Diagnóstico", texto: "Imágenes y laboratorio con resultado el mismo día, a cualquier hora.", pie: "Desde $32.000" },
  { n: "04", titulo: "Especialidades", texto: "Cardiología, neurología y cirugía con informe al veterinario de cabecera.", pie: "Desde $42.000" },
];

export const metodo = [
  { n: "01", titulo: "Llamado primero", texto: "Todo empieza con un llamado: estabilización telefónica mientras vienen y guardia avisada de su llegada." },
  { n: "02", titulo: "Triage de ingreso", texto: "Clasificación inmediata al llegar: los críticos pasan primero, siempre. A las 3 AM igual que a las 3 PM." },
  { n: "03", titulo: "Diagnóstico a velocidad", texto: "Laboratorio en 30 minutos e imágenes el mismo día. En urgencia, la velocidad del diagnóstico define el tratamiento." },
  { n: "04", titulo: "Informe a tu veterinario", texto: "Cada alta incluye el informe completo para el veterinario de cabecera. El equipo de tu mascota, completo." },
];

export const equipo = [
  { iniciales: "PF", nombre: "Paula Fuentes", cargo: "Intensivista · Directora médica", detalle: "Medicina de urgencia y cuidado crítico." },
  { iniciales: "MG", nombre: "Marcelo Guzmán", cargo: "Cirujano de especialidad", detalle: "Ortopedia y cirugía oncológica." },
  { iniciales: "CR", nombre: "Catalina Ríos", cargo: "Radióloga veterinaria", detalle: "Imágenes e informe el mismo día." },
  { iniciales: "SD", nombre: "Sebastián Díaz", cargo: "Urgenciólogo · Guardia", detalle: "Coordina el triage las 24 horas." },
];

export const testimonios = [
  { texto: "Llamé a las 2 AM y me dijeron qué hacer mientras llegábamos. Ese llamado salvó a mi gato.", autor: "R. Oyarzún", detalle: "Cliente · Urgencia" },
  { texto: "Con fotos dos veces al día, la hospitalización de mi perro fue menos angustiante.", autor: "Familia Soto", detalle: "Clientes · UCI" },
  { texto: "Mi veterinaria recibió el informe completo a las 8 AM. Trabajaron en equipo, no en competencia.", autor: "C. Montes", detalle: "Cliente · Especialidad" },
];

export const faq = [
  { p: "¿La guardia de madrugada es real?", r: "Real y completa: intensivista, enfermería y laboratorio operativo. La madrugada es la mitad de la urgencia veterinaria y la atendemos como tal." },
  { p: "¿Cuánto cuesta una urgencia de madrugada?", r: "La consulta de urgencia parte en $55.000 a cualquier hora. Los procedimientos se presupuestan antes, con excepción de la estabilización inicial." },
  { p: "¿Puedo visitar a mi mascota hospitalizada?", r: "Sí, en horario amplio dos veces al día, y recibes reporte con fotos. La familia acelera la recuperación." },
  { p: "¿Reemplazan a mi veterinario?", r: "No: lo complementamos. Cada alta lleva informe completo a tu veterinario de cabecera, y el seguimiento vuelve a sus manos." },
  { p: "¿Atienden animales exóticos?", r: "Conejos, aves y reptiles en urgencia y medicina interna con especialistas. Llama antes si es un caso poco común." },
];

export const valoresGestion = {
  intro: "La urgencia no avisa. Los precios, sí.",
  sub: "Valores de urgencia publicados y presupuestos antes de cada procedimiento. La estabilización inicial no se condiciona al pago.",
  filas: [
    { tipo: "Consulta de urgencia", detalle: "A cualquier hora", venta: "$55.000", arriendo: "24/7" },
    { tipo: "UCI por día", detalle: "Monitoreo y reporte con fotos", venta: "$95.000", arriendo: "por día" },
    { tipo: "Laboratorio de urgencia", detalle: "Resultado en 30 min", venta: "$32.000", arriendo: "por panel" },
    { tipo: "Consulta especialista", detalle: "Con informe al veterinario", venta: "$42.000", arriendo: "por consulta" },
  ],
};

// Paleta del hero 3D — noche violeta, ventanas cálidas.
export const tema3d = {
  noche: true,
  fondo: "#0f1119",
  niebla: "#0f1119",
  torre: "#1a1e2c",
  torreTecho: "#0f1119",
  ventanas: "#cbbde0",
  ventanasAlt: "#e6ddf0",
  acento: "#8b7bd8",
  suelo: "#0b0d14",
  estrellas: "#8f93a8",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Guarde este número ahora.",
  sub: "Las urgencias no se agendan, pero saber a quién llamar sí ayuda: guardia real 24 horas con estabilización telefónica mientras usted llega.",
  beneficios: [
    { titulo: "Guardia 24 h real", texto: "Intensivista y laboratorio operativo también a las 4 AM." },
    { titulo: "Estabilización por teléfono", texto: "Le indicamos qué hacer mientras llega. Ese llamado salva vidas." },
    { titulo: "Presupuesto antes", texto: "Excepto la estabilización inicial: todo se presupuesta antes de hacerse." },
    { titulo: "Informe a su veterinario", texto: "Cada alta incluye el informe completo para su veterinario de cabecera." },
  ],
};

export const textoNosotros = {
  kicker: "El hospital",
  titulo: "El hospital que no duerme.",
  parrafo1:
    "VEGA abrió en 2012 con una frustración puntual: las urgencias veterinarias de madrugada se atendían con timbres de guardia y telefonillos. Hoy somos guardia real las 24 horas.",
  parrafo2:
    "Somos un hospital de tercer nivel: UCI, imágenes, laboratorio express y doce especialidades. Pero nuestra métrica favorita es otra: que cada alta lleve informe al veterinario de cabecera, porque el equipo completo de una mascota incluye a quien la conoce de siempre.",
  valores: [
    { titulo: "La madrugada existe", texto: "Guardia completa 24/7. La urgencia no mira el reloj; nosotros tampoco." },
    { titulo: "Equipos, no competencias", texto: "Informe completo al veterinario de cabecera en cada alta." },
    { titulo: "Velocidad con criterio", texto: "Laboratorio en 30 minutos e imágenes el mismo día, siempre explicadas." },
  ],
};
