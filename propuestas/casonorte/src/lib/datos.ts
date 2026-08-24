// Casa Norte — Clínica dental integral · todo el contenido del sitio vive acá.
// "operacion": venta = primera consulta, arriendo = plan de sesiones.
// m2 = valor desde (miles de CLP) · anio = duración en minutos · dormitorios = 0 (sin plano).

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
  nombre: "Casa",
  sufijo: "Norte",
  kicker: "Clínica dental integral · Santiago de Chile",
  claim: ["Dentista para", "toda la vida,", "toda la familia."],
  sub: "Clínica dental integral en Santiago: diagnóstico con escáner intraoral, plan por escrito antes de empezar y presupuestos que se respetan. Odontología general, implantes y ortodoncia bajo un mismo techo.",
  ctaPrimario: { texto: "Ver tratamientos", a: "/tratamientos" },
  ctaSecundario: { texto: "Agendar evaluación", a: "/servicios" },
  telefono: "+56 2 2755 0123",
  telefonoHref: "tel:+56227550123",
  correo: "hola@casanorte.cl",
  direccion: "Av. Recoleta 1234, of. 201 · Recoleta, Santiago",
  horario: "Lunes a sábado 9:00–20:00 · urgencias el mismo día",
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
  { k: "Urgencias", v: "el mismo día" },
  { k: "Plan y presupuesto", v: "por escrito" },
  { k: "Atención", v: "niños y adultos" },
];

export const comunas = ["Recoleta", "Independencia", "Conchalí", "Huechuraba", "Providencia", "Santiago"];

export const cita = {
  texto:
    "Me mostraron el escáner en pantalla y el presupuesto en papel el mismo día. Por primera vez entendí qué me iban a hacer en la boca.",
  autor: "M. Contreras · paciente implantes, 2024",
};

export const propiedades: Propiedad[] = [
  {
    id: "evaluacion-escaner",
    ref: "CN·01",
    titulo: "Evaluación integral con escáner",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 35,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "El punto de partida de todo: escáner intraoral, radiografía panorámica y diagnóstico en pantalla grande. Sale con su plan de tratamiento impreso, prioridades y presupuesto total — el mismo día.",
    fotos: [media("desk.jpg"), media("room.jpg"), media("facade.jpg"), media("object.jpg")],
    destacada: true,
    coord: [-33.418, -70.645],
  },
  {
    id: "implantes",
    ref: "CN·02",
    titulo: "Implantes dentales guiados",
    operacion: "arriendo",
    tipo: "Implantes",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 850,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Cirugía guiada por computador con cirujano maxilofacial: menos inflamación y menos sesiones. Corona de zirconio incluida, garantía de 10 años y financiación en hasta 12 cuotas sin interés.",
    fotos: [media("object.jpg"), media("desk.jpg"), media("room.jpg")],
    destacada: true,
    coord: [-33.418, -70.645],
  },
  {
    id: "ortodoncia",
    ref: "CN·03",
    titulo: "Ortodoncia con alineadores",
    operacion: "arriendo",
    tipo: "Ortodoncia",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 1450,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Alineadores transparentes con revisión mensual y seguimiento por foto desde su celular. Plan digital 3D antes de empezar: usted ve su sonrisa final el primer día.",
    fotos: [media("room.jpg"), media("object.jpg"), media("desk.jpg")],
    destacada: true,
    coord: [-33.419, -70.646],
  },
  {
    id: "urgencias",
    ref: "CN·04",
    titulo: "Urgencias dentales",
    operacion: "venta",
    tipo: "Urgencia",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 45,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Dolor, traumatismo o infección: atención el mismo día con bloqueo anestésico, radiografía y resolución inmediata o derivación documentada. Sábados incluidos.",
    fotos: [media("facade.jpg"), media("desk.jpg")],
    coord: [-33.417, -70.644],
  },
  {
    id: "odontopediatria",
    ref: "CN·05",
    titulo: "Odontopediatría sin trauma",
    operacion: "venta",
    tipo: "Niños",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 38,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Primera visita de juego: los niños conocen la clínica, tocan los instrumentos y se van con un premio. Sellado de molares y flúor según edad, con indicaciones escritas para los padres.",
    fotos: [media("room.jpg"), media("facade.jpg")],
    coord: [-33.42, -70.647],
  },
  {
    id: "limpieza-prevencion",
    ref: "CN·06",
    titulo: "Limpieza y plan preventivo",
    operacion: "venta",
    tipo: "Prevención",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 55,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "Profilaxis con detartraje ultrasónico, pulido y revisión de encías. Sale con su calendario preventivo: cada cuánto volver y qué vigilar según su boca, no según el promedio.",
    fotos: [media("desk.jpg"), media("object.jpg")],
    coord: [-33.418, -70.645],
  },
  {
    id: "endodoncia",
    ref: "CN·07",
    titulo: "Endodoncia en una sesión",
    operacion: "arriendo",
    tipo: "Restauradora",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 280,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "Tratamiento de conducto con instrumental rotatorio y magnificación: la mayoría se resuelve en una sesión de 90 minutos. Anestesia reforzada para que la sesión sea aburrida, que es lo que se busca.",
    fotos: [media("object.jpg"), media("room.jpg")],
    coord: [-33.418, -70.646],
  },
  {
    id: "protesis",
    ref: "CN·08",
    titulo: "Prótesis y rehabilitación",
    operacion: "arriendo",
    tipo: "Restauradora",
    comuna: "Recoleta",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 620,
    estacionamientos: 0,
    anio: 75,
    descripcion:
      "Coronas, puentes y prótesis sobre implantes con prueba estética antes del cementado: usted aprueba la forma y el color en su boca, no en un catálogo.",
    fotos: [media("facade.jpg"), media("room.jpg")],
    coord: [-33.419, -70.645],
  },
];

export const cifras = [
  { valor: 15, sufijo: "", etiqueta: "Años en Recoleta", detalle: "La misma dirección desde 2009" },
  { valor: 9200, sufijo: "+", etiqueta: "Pacientes atendidos", detalle: "General, implantes y ortodoncia" },
  { valor: 92, sufijo: "%", etiqueta: "Presupuestos respetados", detalle: "Valor final igual al plan escrito" },
  { valor: 6, sufijo: "", etiqueta: "Especialistas", detalle: "Todos con horas en la misma clínica" },
];

export const cartera = [
  { n: "01", titulo: "Odontología general", texto: "Limpiezas, resinas y prevención con calendario escrito por paciente.", pie: "Desde $35.000" },
  { n: "02", titulo: "Implantes y cirugía", texto: "Cirugía guiada por computador con cirujano maxilofacial en el equipo.", pie: "Garantía 10 años" },
  { n: "03", titulo: "Ortodoncia", texto: "Alineadores transparentes con plan 3D que muestra el resultado final el primer día.", pie: "Hasta 24 cuotas" },
  { n: "04", titulo: "Niños y urgencias", texto: "Primera visita de juego y urgencias el mismo día, sábados incluidos.", pie: "Sábado 9–14 h" },
];

export const metodo = [
  { n: "01", titulo: "Evaluación con escáner", texto: "Diagnóstico en pantalla grande y plan impreso el mismo día: prioridades, sesiones y valor total." },
  { n: "02", titulo: "Presupuesto que se respeta", texto: "El 92% de nuestros tratamientos termina con el valor final del plan escrito. Si algo cambia, se conversa antes." },
  { n: "03", titulo: "Mismo equipo siempre", texto: "Su dentista de cabecera coordina con los especialistas de la clínica. No empieza de cero en cada visita." },
  { n: "04", titulo: "Prevención calendarizada", texto: "Cada paciente sale con su calendario: cuándo volver y qué vigilar. El mejor tratamiento es el que no se necesitó." },
];

export const equipo = [
  { iniciales: "CR", nombre: "Carolina Ruiz", cargo: "Odontóloga general · Directora", detalle: "15 años de práctica. Coordina cada plan de tratamiento." },
  { iniciales: "AG", nombre: "Andrés Gutiérrez", cargo: "Cirujano maxilofacial", detalle: "Implantes guiados y cirugía de terceros molares." },
  { iniciales: "PM", nombre: "Paz Morales", cargo: "Ortodoncista", detalle: "Alineadores y ortodoncia infantil." },
  { iniciales: "FS", nombre: "Felipe Soto", cargo: "Endodoncista", detalle: "Tratamientos de conducto en una sesión." },
];

export const testimonios = [
  { texto: "El plan por escrito cambió todo: sabía cuánto, cuándo y qué me tocaba en cada sesión.", autor: "J. Inostroza", detalle: "Paciente · Rehabilitación" },
  { texto: "Mi hija sale pidiendo volver al dentista. No lo comparto del todo, pero es un logro.", autor: "Familia Rojas", detalle: "Pacientes · Odontopediatría" },
  { texto: "Urgencia un domingo de dolor: atendido el lunes a las 9. Roto el mito del dentista.", autor: "M. Fuentes", detalle: "Paciente · Urgencia" },
];

export const faq = [
  { p: "¿Duele?", r: "Usamos anestesia reforzada y técnica mínimamente invasiva. La mayoría de los pacientes describe la sesión como 'aburrida' — que es exactamente el objetivo." },
  { p: "¿Cuánto cuesta una evaluación?", r: "$35.000 e incluye escáner, panorámica y plan impreso. Se descuenta completa de cualquier tratamiento que siga." },
  { p: "¿Tienen convenios?", r: "Sí: Isapres principales, Fonasa con arancel particular y financiación propia en hasta 12 cuotas sin interés." },
  { p: "¿Atienden urgencias?", r: "El mismo día, lunes a sábado. Las urgencias de dolor traumático se atienden con prioridad dentro de las primeras 3 horas de llamado." },
  { p: "¿Atienden niños?", r: "Desde los 2 años, con primera visita de juego y odontopediatra dedicada. La idea que el niño no aprenda a temer la clínica." },
];

export const valoresGestion = {
  intro: "Valores dichos antes de sentarse.",
  sub: "Cada tratamiento se presupuesta por escrito después de la evaluación. El valor final respeta el plan en el 92% de los casos.",
  filas: [
    { tipo: "Evaluación con escáner", detalle: "Panorámica y plan impreso", venta: "$35.000", arriendo: "se descuenta" },
    { tipo: "Limpieza y prevención", detalle: "Detartraje y pulido", venta: "$55.000", arriendo: "por sesión" },
    { tipo: "Implante + corona", detalle: "Cirugía guiada y zirconio", venta: "$850.000", arriendo: "12 cuotas sin interés" },
    { tipo: "Ortodoncia alineadores", detalle: "Plan completo 8–14 meses", venta: "$1.450.000", arriendo: "24 cuotas" },
  ],
};

// Paleta del hero 3D — día clínico, torres blancas, acento petróleo.
export const tema3d = {
  noche: false,
  fondo: "#f8f7f4",
  niebla: "#f8f7f4",
  torre: "#ffffff",
  torreTecho: "#e4e4de",
  ventanas: "#9cb8c4",
  ventanasAlt: "#c5d4da",
  acento: "#155e75",
  suelo: "#ecebe6",
  estrellas: "#57706a",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Primera evaluación sin sorpresas.",
  sub: "Agende su evaluación con escáner: diagnóstico en pantalla, plan impreso y presupuesto el mismo día. Se descuenta de cualquier tratamiento.",
  beneficios: [
    { titulo: "Plan por escrito", texto: "Prioridades, sesiones y valor total antes de empezar. Nada de sorpresas en la silla." },
    { titulo: "Presupuesto que se respeta", texto: "El 92% de los tratamientos cierra con el valor del plan original." },
    { titulo: "Urgencias el mismo día", texto: "Lunes a sábado, con prioridad para dolor agudo." },
    { titulo: "Cuotas sin interés", texto: "Hasta 12 cuotas propias sin tarjeta ni crédito." },
  ],
};

export const textoNosotros = {
  kicker: "La clínica",
  titulo: "Una clínica de barrio con estándar de centro.",
  parrafo1:
    "Casa Norte abrió en Recoleta en 2009 con una convicción: la gente no le teme al dentista, le teme a no saber. Desde entonces, cada tratamiento parte con un plan impreso que el paciente se lleva.",
  parrafo2:
    "Somos seis especialistas bajo un mismo techo y una regla de coordinación: su dentista general conoce su boca completa y dirige a los especialistas como un director técnico, no como un dispatcher de horas.",
  valores: [
    { titulo: "Saber antes", texto: "Diagnóstico en pantalla y plan impreso. El paciente aprueba, no soporta." },
    { titulo: "Una sola historia clínica", texto: "General y especialistas comparten el mismo expediente digital." },
    { titulo: "Prevenir es más barato", texto: "Calendario preventivo por paciente. El mejor tratamiento es el que no se necesitó." },
  ],
};
