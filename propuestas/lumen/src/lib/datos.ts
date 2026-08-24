// Lumen — Diagnóstico dental con escáner en la primera visita · contenido del sitio.
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
  nombre: "Lumen",
  sufijo: "Dental Digital",
  kicker: "Odontología digital · Providencia · Santiago",
  claim: ["Su boca en", "3D, antes de", "decidir nada."],
  sub: "Clínica dental digital: escáner intraoral en la primera visita, plan de tratamiento en pantalla y resultado final simulado antes de empezar. Tecnología que sirve para decidir mejor, no para cobrar más.",
  ctaPrimario: { texto: "Ver tratamientos", a: "/tratamientos" },
  ctaSecundario: { texto: "Agendar escáner", a: "/agendar" },
  telefono: "+56 2 2346 9090",
  telefonoHref: "tel:+56223469090",
  correo: "hola@lumendental.cl",
  direccion: "Av. Nueva Providencia 1580, of. 803 · Providencia",
  horario: "Lunes a viernes 9:00–19:00 · sábados 9:00–13:00",
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
  { k: "Escáner 3D", v: "en la 1ª visita" },
  { k: "Simulación", v: "del resultado final" },
  { k: "Sin moldes", v: "nunca más" },
];

export const comunas = ["Providencia", "Ñuñoa", "Santiago", "Las Condes", "La Reina", "Vitacura"];

export const cita = {
  texto:
    "Vi mi boca en 3D girando en una pantalla y entendí en cinco minutos lo que tres dentistas me habían explicado mal en diez años.",
  autor: "P. Larraín · paciente ortodoncia",
};

export const propiedades: Propiedad[] = [
  {
    id: "escaner-3d",
    ref: "LU·01",
    titulo: "Escáner intraoral 3D",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 45,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Escaneo completo de su boca en 4 minutos, sin moldes ni arcadas incómodas. El modelo 3D queda en su expediente para siempre: cualquier dentista del mundo puede continuarlo.",
    fotos: [media("object.jpg"), media("room.jpg"), media("facade.jpg")],
    destacada: true,
    coord: [-33.428, -70.612],
  },
  {
    id: "simulacion-sonrisa",
    ref: "LU·02",
    titulo: "Simulación de sonrisa",
    operacion: "venta",
    tipo: "Estética",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 60,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "Fotografía y escáner combinados para mostrarle su sonrisa final antes de empezar carillas o alineadores. Usted aprueba la versión que quiere, no una descripción verbal.",
    fotos: [media("facade.jpg"), media("object.jpg"), media("room.jpg")],
    destacada: true,
    coord: [-33.428, -70.613],
  },
  {
    id: "alineadores-monitor",
    ref: "LU·03",
    titulo: "Alineadores con monitoreo remoto",
    operacion: "arriendo",
    tipo: "Ortodoncia",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 1650,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Ortodoncia invisible con control semanal por foto desde su celular y revisión presencial cada seis semanas. El plan 3D completo se ve el primer día, con fecha de término estimada.",
    fotos: [media("room.jpg"), media("object.jpg")],
    destacada: true,
    coord: [-33.429, -70.611],
  },
  {
    id: "implantes-guiados",
    ref: "LU·04",
    titulo: "Implantes con cirugía guiada",
    operacion: "arriendo",
    tipo: "Implantes",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 980,
    estacionamientos: 0,
    anio: 90,
    descripcion:
      "La cirugía se planifica sobre su modelo 3D y se ejecuta con guía impresa: milimétrica, con menos inflamación y recuperación en días. Corona definitiva entregada con el mismo archivo digital.",
    fotos: [media("object.jpg"), media("facade.jpg")],
    coord: [-33.428, -70.614],
  },
  {
    id: "radiografia-digital",
    ref: "LU·05",
    titulo: "Radiología digital de baja dosis",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 22,
    estacionamientos: 0,
    anio: 15,
    descripcion:
      "Radiografías periapicales y panorámica digital con hasta 80% menos radiación que los sistemas antiguos. Imagen en pantalla al instante, explicada en el momento.",
    fotos: [media("facade.jpg"), media("room.jpg")],
    coord: [-33.427, -70.612],
  },
  {
    id: "segunda-opinion",
    ref: "LU·06",
    titulo: "Segunda opinión digital",
    operacion: "venta",
    tipo: "Diagnóstico",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 40,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Traiga su plan de tratamiento de otra clínica: lo revisamos con su escáner y radiografías y le entregamos un segundo informe escrito. Ideal antes de tratamientos grandes.",
    fotos: [media("room.jpg"), media("facade.jpg")],
    coord: [-33.428, -70.612],
  },
];

export const cifras = [
  { valor: 9, sufijo: "", etiqueta: "Años digital", detalle: "Clínica 100% digital desde el día uno" },
  { valor: 4300, sufijo: "+", etiqueta: "Escaneos 3D", detalle: "Todos guardados en expediente propio" },
  { valor: 4, sufijo: " min", etiqueta: "Toma el escáner", detalle: "Completo, sin moldes" },
  { valor: 80, sufijo: "%", etiqueta: "Menos radiación", detalle: " versus sistemas de placa" },
];

export const cartera = [
  { n: "01", titulo: "Diagnóstico digital", texto: "Escáner 3D y radiología de baja dosis con explicación en pantalla.", pie: "Desde $45.000" },
  { n: "02", titulo: "Estética con simulación", texto: "Vea su sonrisa final antes de empezar carillas o alineadores.", pie: "Aprobación visual" },
  { n: "03", titulo: "Implantes guiados", texto: "Cirugía planificada en 3D y ejecutada con guía impresa.", pie: "Milimétrica" },
  { n: "04", titulo: "Segunda opinión", texto: "Su plan de otra clínica revisado con tecnología propia.", pie: "Informe escrito" },
];

export const metodo = [
  { n: "01", titulo: "Escáner en la primera visita", texto: "4 minutos sin moldes. Su boca en 3D en pantalla, girando y explicada pieza por pieza." },
  { n: "02", titulo: "Plan sobre el modelo real", texto: "El plan se arma sobre su escaneo, no sobre una radiografía plana. Las prioridades se marcan en el propio 3D." },
  { n: "03", titulo: "Resultado simulado", texto: "En estética y ortodoncia, usted ve el final antes de aprobar. Se decide con los ojos, no con fe." },
  { n: "04", titulo: "Expediente digital abierto", texto: "Su archivo 3D es suyo: se lo entregamos en formato estándar para cualquier clínica del mundo." },
];

export const equipo = [
  { iniciales: "DV", nombre: "Daniela Valdés", cargo: "Odontóloga · Directora clínica", detalle: "9 años de odontología digital y escaneo." },
  { iniciales: "MS", nombre: "Matías Sepúlveda", cargo: "Implantólogo", detalle: "Cirugía guiada por computador." },
  { iniciales: "BR", nombre: "Bárbara Ruiz", cargo: "Ortodoncista", detalle: "Alineadores con monitoreo remoto." },
  { iniciales: "JC", nombre: "Jorge Cifuentes", cargo: "Tecnólogo dental", detalle: "Escaneo, diseño e impresión de guías." },
];

export const testimonios = [
  { texto: "La simulación de sonrisa me evitó unas carillas que no eran para mí. Vi el resultado y dije no a tiempo.", autor: "C. Ibáñez", detalle: "Paciente · Estética" },
  { texto: "El implante se planificó en pantalla con la guía 3D. Operado un jueves, trabajando el lunes.", autor: "R. Vergara", detalle: "Paciente · Implantes" },
  { texto: "Me cambié de ciudad y mi expediente 3D viajó conmigo en un correo. Eso no tiene precio.", autor: "A. Muñoz", detalle: "Paciente · Expediente" },
];

export const faq = [
  { p: "¿El escáner duele o molesta?", r: "No: es una cámara que pasa sobre los dientes. Nada de moldes con pasta viscosa. Cuatro minutos y listo." },
  { p: "¿La tecnología encarece el tratamiento?", r: "Al contrario: un buen escaneo evita repetir moldes, radiografías y pruebas. El escáner cuesta lo que dos moldes mal tomados." },
  { p: "¿Puedo llevar mi escaneo a otra clínica?", r: "Sí. Su expediente digital es suyo y se lo entregamos en formato estándar (STL) cuando lo pida." },
  { p: "¿Qué es la segunda opinión digital?", r: "Revisamos el plan de otra clínica usando su escáner y radiografías nuestras, y le entregamos un informe escrito comparativo." },
  { p: "¿Sirve para niños?", r: "Desde los 6 años. El escáner es ideal para niños: sin moldes, sin miedo, y el monitoreo de crecimiento queda registrado en 3D." },
];

export const valoresGestion = {
  intro: "Tecnología que abarata, no que encarece.",
  sub: "El diagnóstico digital evita repetir moldes y pruebas. Cada valor incluye el uso de la tecnología necesaria.",
  filas: [
    { tipo: "Escáner intraoral 3D", detalle: "Con expediente digital incluido", venta: "$45.000", arriendo: "se descuenta" },
    { tipo: "Simulación de sonrisa", detalle: "Fotografía + escáner", venta: "$60.000", arriendo: "se descuenta" },
    { tipo: "Implante guiado + corona", detalle: "Guía impresa incluida", venta: "$980.000", arriendo: "cuotas" },
    { tipo: "Alineadores completos", detalle: "Con monitoreo remoto", venta: "$1.650.000", arriendo: "24 cuotas" },
  ],
};

// Paleta del hero 3D — día tecnológico, acento índigo.
export const tema3d = {
  noche: false,
  fondo: "#fafafa",
  niebla: "#fafafa",
  torre: "#ffffff",
  torreTecho: "#e4e4ec",
  ventanas: "#9da7d6",
  ventanasAlt: "#c7cde8",
  acento: "#4338ca",
  suelo: "#eeeef4",
  estrellas: "#64748b",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "Vea su boca antes de decidir.",
  sub: "Agende su primera visita con escáner 3D: diagnóstico en pantalla, plan sobre su modelo real y simulación del resultado cuando aplique.",
  beneficios: [
    { titulo: "Escáner en la 1ª visita", texto: "4 minutos sin moldes. Su boca en 3D explicada pieza por pieza." },
    { titulo: "Resultado simulado", texto: "En estética y ortodoncia, el resultado final se ve antes de aprobar." },
    { titulo: "Expediente abierto", texto: "Su archivo 3D es suyo, entregado en formato estándar." },
    { titulo: "Menos radiación", texto: "Radiología digital con hasta 80% menos dosis." },
  ],
};

export const textoNosotros = {
  kicker: "La clínica",
  titulo: "Digital desde el día uno.",
  parrafo1:
    "Lumen abrió en 2017 como la primera clínica dental completamente digital de Providencia: sin moldes, sin placas de radiología, sin planes basados en aproximaciones.",
  parrafo2:
    "La tecnología no es el lujo del consultorio: es la herramienta que permite explicar mejor, repetir menos y respetar el bolsillo del paciente. Cada tratamiento se planifica sobre el modelo 3D real de su boca, y ese archivo siempre es suyo.",
  valores: [
    { titulo: "Ver para decidir", texto: "Ningún tratamiento grande parte sin que el paciente haya visto el resultado." },
    { titulo: "El archivo es del paciente", texto: "Expediente digital entregado en formato estándar, siempre." },
    { titulo: "Tecnología que ahorra", texto: "Menos moldes y repeticiones = menos costo y menos sillas." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "object.jpg", marco: false, caption: "" };
