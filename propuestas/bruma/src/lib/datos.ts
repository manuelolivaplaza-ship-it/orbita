// Bruma — Clínica dental familiar y odontopediatría · contenido del sitio.
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
  nombre: "Bruma",
  sufijo: "Dental Familiar",
  kicker: "Clínica dental familiar y odontopediatría · La Florida",
  claim: ["La clínica dental", "a la que los", "niños vuelven."],
  sub: "Odontología para toda la familia con odontopediatra dedicada: primeras visitas de juego, tratamientos sin trauma y planes familiares con descuento. La boca de la casa, en un solo lugar.",
  ctaPrimario: { texto: "Ver tratamientos", a: "/tratamientos" },
  ctaSecundario: { texto: "Agendar para la familia", a: "/agendar" },
  telefono: "+56 2 2285 7744",
  telefonoHref: "tel:+56222857744",
  correo: "familia@brumadental.cl",
  direccion: "Av. Vicuña Mackenna 8100, local 4 · La Florida, Santiago",
  horario: "Lunes a sábado 9:00–19:30 · sábados 9:00–14:00",
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
  { k: "Odontopediatría", v: "dedicada" },
  { k: "Plan familiar", v: "hasta 25% dto." },
  { k: "Primera visita niños", v: "de juego" },
];

export const comunas = ["La Florida", "Puente Alto", "San Ramón", "La Granja", "Macul", "Ñuñoa"];

export const cita = {
  texto:
    "Mi hijo de cinco años le dice 'la doctora de los premios' al dentista. Yo no puedo creer que exista esa frase.",
  autor: "Familia Vergara · pacientes desde 2022",
};

export const propiedades: Propiedad[] = [
  {
    id: "primera-visita-ninos",
    ref: "BR·01",
    titulo: "Primera visita del niño",
    operacion: "venta",
    tipo: "Niños",
    comuna: "La Florida",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 25,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Cita de juego: el niño recorre la clínica, toca los instrumentos, sube a la silla solo y se va con un premio. Sin instrumental en la boca la primera vez, salvo que él lo pida.",
    fotos: [media("basin.jpg"), media("bench.jpg"), media("room.jpg"), media("still.jpg")],
    destacada: true,
    coord: [-33.564, -70.591],
  },
  {
    id: "sellado-fluor",
    ref: "BR·02",
    titulo: "Sellado de molares y flúor",
    operacion: "venta",
    tipo: "Niños",
    comuna: "La Florida",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 40,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "La prevención que evita el empaste del futuro: sellado de fosas y fisuras más aplicación de flúor barniz, con indicaciones escritas para la casa.",
    fotos: [media("room.jpg"), media("still.jpg"), media("basin.jpg")],
    destacada: true,
    coord: [-33.565, -70.59],
  },
  {
    id: "ortodoncia-infantil",
    ref: "BR·03",
    titulo: "Ortodoncia infantil",
    operacion: "arriendo",
    tipo: "Ortodoncia",
    comuna: "La Florida",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 950,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Intercepción temprana de maloclusiones entre los 6 y 12 años: expansores y aparatos removibles con colores elegidos por el paciente. Revisión mensual y control con el dentista general.",
    fotos: [media("still.jpg"), media("bench.jpg")],
    destacada: true,
    coord: [-33.564, -70.592],
  },
  {
    id: "limpieza-familiar",
    ref: "BR·04",
    titulo: "Limpieza familiar anual",
    operacion: "venta",
    tipo: "Prevención",
    comuna: "La Florida",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 50,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "Profilaxis completa para cada integrante de la familia, agendada el mismo día para no viajar tres veces. Con calendario preventivo por edad para toda la casa.",
    fotos: [media("bench.jpg"), media("basin.jpg"), media("room.jpg")],
    coord: [-33.563, -70.591],
  },
  {
    id: "urgencias-ninos",
    ref: "BR·05",
    titulo: "Urgencias y traumatismos",
    operacion: "venta",
    tipo: "Urgencia",
    comuna: "La Florida",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 35,
    estacionamientos: 0,
    anio: 40,
    descripcion:
      "Golpes de bicicleta, caídas de monkey bar y muelas que estallan un domingo: atención prioritaria para niños con manejo de ansiedad incluido (y para los papás).",
    fotos: [media("room.jpg"), media("still.jpg")],
    coord: [-33.566, -70.589],
  },
  {
    id: "adultos-bruma",
    ref: "BR·06",
    titulo: "Odontología de adultos",
    operacion: "venta",
    tipo: "General",
    comuna: "La Florida",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 45,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Resinas, endodoncias y prótesis para los papás y abuelos, en la misma clínica y la misma historia clínica familiar. El plan del adulto se coordina con las horas de los niños.",
    fotos: [media("basin.jpg"), media("bench.jpg")],
    coord: [-33.564, -70.591],
  },
];

export const cifras = [
  { valor: 11, sufijo: "", etiqueta: "Años en La Florida", detalle: "La misma esquina desde 2014" },
  { valor: 4800, sufijo: "+", etiqueta: "Niños atendidos", detalle: "Muchos ya traen a sus hijos" },
  { valor: 87, sufijo: "%", etiqueta: "Niños sin llanto", detalle: "Primera visita de juego, registro 2024" },
  { valor: 25, sufijo: "%", etiqueta: "Descuento familiar", detalle: "Desde el tercer integrante" },
];

export const cartera = [
  { n: "01", titulo: "Odontopediatría", texto: "Primera visita de juego, sellados y ortodoncia interceptiva con especialista dedicada.", pie: "Desde $25.000" },
  { n: "02", titulo: "General familiar", texto: "Limpiezas, resinas y prevención con calendario para toda la casa.", pie: "Plan familiar" },
  { n: "03", titulo: "Urgencias infantiles", texto: "Traumatismos y dolor con prioridad para niños, sábados incluidos.", pie: "Mismo día" },
  { n: "04", titulo: "Adultos y abuelos", texto: "La boca de toda la familia en una historia clínica única.", pie: "Horas coordinadas" },
];

export const metodo = [
  { n: "01", titulo: "Primera visita de juego", texto: "El niño conoce la clínica sin tratamiento: toca, pregunta y confía. La segunda cita es otra película." },
  { n: "02", titulo: "Plan familiar escrito", texto: "Un plan por integrante con prioridades y valores. El descuento familiar se aplica desde el tercero." },
  { n: "03", titulo: "Horas coordinadas", texto: "Papás y niños en paralelo o seguidos: una sola ida a la clínica por mes." },
  { n: "04", titulo: "Prevención calendarizada", texto: "Cada familia sale con su calendario anual: quién, cuándo y qué. Menos urgencias, más juego." },
];

export const equipo = [
  { iniciales: "FO", nombre: "Fernanda Ortiz", cargo: "Odontopediatra · Directora", detalle: "Especialista en manejo de ansiedad infantil." },
  { iniciales: "MR", nombre: "Mauricio Riquelme", cargo: "Ortodoncista", detalle: "Interceptiva y brackets para adolescentes." },
  { iniciales: "CA", nombre: "Carola Aguirre", cargo: "Odontóloga general", detalle: "Adultos de la familia y prevención." },
  { iniciales: "LP", nombre: "Luisa Peña", cargo: "Coordinadora familiar", detalle: "Agenda las horas de toda la casa juntas." },
];

export const testimonios = [
  { texto: "Tres hijos, una sola ida por mes. El descuento familiar se nota y el calendario funciona.", autor: "Familia Cárcamo", detalle: "Pacientes · Plan familiar" },
  { texto: "Mi hija se rompió un diente en el colegio y la atendieron en una hora. Y le explicaron a ella primero.", autor: "P. Mora", detalle: "Paciente · Urgencia" },
  { texto: "Yo que le tenía pavor al dentista terminé haciéndome las muelas acá por acompañar a los niños.", autor: "J. Espinoza", detalle: "Paciente · Adultos" },
];

export const faq = [
  { p: "¿A qué edad va la primera visita?", r: "Idealmente al año, y sin apuro: la primera cita es de juego y diagnóstico. Lo importante es que la primera memoria del dentista sea buena." },
  { p: "¿Qué es la primera visita de juego?", r: "Una cita sin instrumental en la boca: recorrido, preguntas y un premio. El 87% de los niños atendidos así no llora en su segunda visita." },
  { p: "¿Cómo funciona el descuento familiar?", r: "Tercer integrante en adelante: 15% a 25% según tratamiento, aplicado automáticamente en el plan familiar." },
  { p: "¿Atienden urgencias de niños los fines de semana?", r: "Sábados de 9:00 a 14:00 con prioridad infantil. Los traumatismos dentales son urgencia real y se tratan en las primeras horas." },
  { p: "¿Puedo agendar horas de adultos y niños juntas?", r: "Sí, es nuestra especialidad logística: horas en paralelo o seguidas para que la familia vaya una vez, no cuatro." },
];

export const valoresGestion = {
  intro: "Precios de familia, no de sorpresa.",
  sub: "Plan familiar por escrito con valores por integrante y descuentos aplicados desde el tercero.",
  filas: [
    { tipo: "Primera visita del niño", detalle: "Cita de juego con premio", venta: "$25.000", arriendo: "se descuenta" },
    { tipo: "Sellado + flúor", detalle: "Por pieza, con indicaciones", venta: "$40.000", arriendo: "por sesión" },
    { tipo: "Ortodoncia infantil", detalle: "Plan interceptivo completo", venta: "$950.000", arriendo: "cuotas" },
    { tipo: "Limpieza familiar", detalle: "Cada integrante, mismo día", venta: "$50.000", arriendo: "3° integrante con dto." },
  ],
};

// Paleta del hero 3D — día suave, acento verde azulado.
export const tema3d = {
  noche: false,
  fondo: "#f6f8f8",
  niebla: "#f6f8f8",
  torre: "#ffffff",
  torreTecho: "#e3e8e8",
  ventanas: "#9cc0bd",
  ventanasAlt: "#c8dbd9",
  acento: "#2f6f6a",
  suelo: "#ecf0f0",
  estrellas: "#5c7370",
};

export const textoVender = {
  kicker: "Agendar",
  titulo: "La familia entera, en una sola ida.",
  sub: "Agende horas coordinadas para niños y adultos: la clínica que se organiza alrededor de la familia, no al revés.",
  beneficios: [
    { titulo: "Primera visita de juego", texto: "El niño conoce la clínica antes del tratamiento. El 87% no llora en la segunda." },
    { titulo: "Horas coordinadas", texto: "Niños y adultos en paralelo o seguidos. Una ida por mes, no cuatro." },
    { titulo: "Descuento familiar", texto: "Desde el tercer integrante: 15% a 25% según tratamiento." },
    { titulo: "Odontopediatra dedicada", texto: "Especialista en niños con manejo de ansiedad, no un dentista general con paciencia." },
  ],
};

export const textoNosotros = {
  kicker: "La clínica",
  titulo: "La clínica que los niños eligen volver a visitar.",
  parrafo1:
    "Bruma existe desde 2014 con una obsesión: que la primera memoria dental de un niño sea buena. Todo lo demás — Sellados, ortodoncia, horas coordinadas — se construye sobre eso.",
  parrafo2:
    "Tenemos odontopediatra dedicada, un sistema de horas familiares y una sala de espera que no da miedo. Los niños de nuestros primeros pacientes ya traen a sus hijos: ese es el indicador que nos importa.",
  valores: [
    { titulo: "Primero el niño", texto: "Cada decisión se toma mirando la experiencia del paciente más chico." },
    { titulo: "Familia completa", texto: "Una historia clínica por casa, con horas que se coordinan solas." },
    { titulo: "Sin miedo heredado", texto: "Los papás con miedo al dentista se lo pasan a los hijos. Acá se corta la cadena." },
  ],
};
