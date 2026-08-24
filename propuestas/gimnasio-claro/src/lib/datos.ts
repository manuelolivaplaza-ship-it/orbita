// Estudio Savia — Pilates, yoga y barre · contenido del sitio.
// "operacion": venta = clase abierta, arriendo = plan mensual.
// m2 = valor desde (miles CLP) · anio = duración en minutos.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Clase suelta" : "Plan mensual");
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
  nombre: "Estudio",
  sufijo: "Savia",
  kicker: "Pilates · yoga · barre · Ñuñoa",
  claim: ["Moverse bien", "toma años.", "Empecemos hoy."],
  sub: "Estudio de pilates reformer, yoga y barre con grupos de máximo 12 personas y profesor que conoce tu nombre y tu espalda. Clase de prueba gratis y plan escrito según tu cuerpo, no según la máquina.",
  ctaPrimario: { texto: "Ver clases", a: "/clases" },
  ctaSecundario: { texto: "Clase de prueba gratis", a: "/prueba" },
  telefono: "+56 9 5580 1122",
  telefonoHref: "tel:+56955801122",
  correo: "hola@estudiosavia.cl",
  direccion: "Av. Irarrázaval 2860, segundo piso · Ñuñoa",
  horario: "Lunes a sábado 7:00–21:00 · horario continuado",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del estudio.",
};

export const etiquetas = {
  catalogo: "Clases",
  catalogoUno: "Clase",
  captacion: "Prueba gratis",
  nosotros: "El estudio",
  fichaPlural: "clases",
};

export const rutas = {
  inicio: "/",
  catalogo: "/clases",
  ficha: "/clase",
  captacion: "/prueba",
  nosotros: "/estudio",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Clases", a: "/clases" },
  { texto: "Prueba gratis", a: "/prueba" },
  { texto: "El estudio", a: "/estudio" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Alumnos por clase", v: "12 máximo" },
  { k: "Grupos nivel", v: "5 niveles" },
  { k: "Prueba", v: "gratis" },
];

export const comunas = ["Ñuñoa", "Providencia", "Macul", "La Florida", "Santiago", "Peñalolén"];

export const cita = {
  texto:
    "Llegué con la espalda de oficina y en tres meses volví a agacharme sin pensarlo. Y conozco a todas las de mi grupo por el nombre.",
  autor: "C. Carvallo · alumna nivel 3",
};

export const propiedades: Propiedad[] = [
  {
    id: "pilates-reformer",
    ref: "SA·01",
    titulo: "Pilates reformer",
    operacion: "arriendo",
    tipo: "Pilates",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 68,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "La joya del estudio: 6 reformers, máximo 6 personas y ejercicios calibrados a tu cuerpo ese día. Cinco niveles, de 'nunca he hecho' a instructora en formación.",
    fotos: [media("props.png"), media("estudio.png"), media("barra.png"), media("yoga.png")],
    destacada: true,
    coord: [-33.462, -70.613],
  },
  {
    id: "pilates-mat",
    ref: "SA·02",
    titulo: "Pilates mat",
    operacion: "arriendo",
    tipo: "Pilates",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 52,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "Colchoneta, círculo mágico y tu propio peso: la base de todo. Grupos de 12 con corrección individual en cada serie. Ideal para empezar.",
    fotos: [media("yoga.png"), media("estudio.png"), media("props.png")],
    destacada: true,
    coord: [-33.463, -70.612],
  },
  {
    id: "yoga-vinyasa",
    ref: "SA·03",
    titulo: "Yoga vinyasa",
    operacion: "arriendo",
    tipo: "Yoga",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 55,
    estacionamientos: 0,
    anio: 60,
    descripcion:
      "Secuencias fluidas con respiración guiada, en grupos de 12. Clases de 7:00 para empezar el día movido y de 20:00 para terminarlo suelto.",
    fotos: [media("yoga.png"), media("barra.png")],
    destacada: true,
    coord: [-33.461, -70.614],
  },
  {
    id: "barre",
    ref: "SA·04",
    titulo: "Barre",
    operacion: "arriendo",
    tipo: "Barre",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 58,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "Ballet, pilates y fuerza en la barra: pulsaciones pequeñas que tiemblan al tercer set (garantizado). El glúteo más honesto de Ñuñoa.",
    fotos: [media("barra.png"), media("estudio.png"), media("props.png")],
    coord: [-33.462, -70.614],
  },
  {
    id: "stretching",
    ref: "SA·05",
    titulo: "Stretching asistido",
    operacion: "venta",
    tipo: "Movilidad",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 30,
    estacionamientos: 0,
    anio: 45,
    descripcion:
      "Sesión de elongación guiada y asistida para quienes llegan tiesos de la semana. 45 minutos que devuelven rango de movimiento real.",
    fotos: [media("estudio.png"), media("yoga.png")],
    coord: [-33.463, -70.613],
  },
  {
    id: "clase-suelta",
    ref: "SA·06",
    titulo: "Clase suelta de cualquier formato",
    operacion: "venta",
    tipo: "Sueltas",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 15,
    estacionamientos: 0,
    anio: 50,
    descripcion:
      "¿Viaje, semana rara o ganas de probar? Clase suelta con reserva de cupo la misma mañana. Sin matrícula ni explicaciones.",
    fotos: [media("props.png"), media("barra.png")],
    coord: [-33.462, -70.613],
  },
];

export const cifras = [
  { valor: 12, sufijo: "", etiqueta: "Alumnos máximo por clase", detalle: "Reformer: 6" },
  { valor: 5, sufijo: "", etiqueta: "Niveles por formato", detalle: "De cero a avanzado" },
  { valor: 34, sufijo: "", etiqueta: "Clases semanales", detalle: "De 7:00 a 21:00" },
  { valor: 78, sufijo: "%", etiqueta: "Renueva cada mes", detalle: "El número que nos importa" },
];

export const cartera = [
  { n: "01", titulo: "Plan mensual", texto: "Clases ilimitadas de todos los formatos y niveles, con reserva de cupo prioritaria.", pie: "Desde $68.000/mes" },
  { n: "02", titulo: "Plan dos veces por semana", texto: "El plan de la gente con vida organizada: 8 clases al mes elegidas con anticipación.", pie: "$52.000/mes" },
  { n: "03", titulo: "Clases sueltas", texto: "Sin matrícula ni compromiso: reserva la misma mañana.", pie: "$15.000" },
  { n: "04", titulo: "Planes duo y empresariales", texto: "Para venir acompañado o con el equipo del trabajo. Descuentos desde dos personas.", pie: "Desde 2 personas" },
];

export const metodo = [
  { n: "01", titulo: "Clase de prueba gratis", texto: "Nos cuentas tu cuerpo y tus semanas, probas la clase que quieras y el profesor te ubica en nivel." },
  { n: "02", titulo: "Plan escrito", texto: "Sale de la prueba un plan mensual escrito: qué clases, qué días y qué esperar en tres meses." },
  { n: "03", titulo: "Grupos chicos de verdad", texto: "12 máximo, 6 en reformer. El profesor corrige por nombre, no por manoteo general." },
  { n: "04", titulo: "Revisión cada 8 semanas", texto: "Cada dos meses revisamos el plan contigo: subir nivel, cambiar formato o frenar una lesión a tiempo." },
];

export const equipo = [
  { iniciales: "JR", nombre: "Javiera Ruiz", cargo: "Profesora de pilates · Fundadora", detalle: "12 años de pilates y un ojo para la espalda de oficina." },
  { iniciales: "MS", nombre: "Mariana Soto", cargo: "Profesora de yoga", detalle: "Vinyasa y restorative, con formación en India." },
  { iniciales: "CG", nombre: "Camila Gajardo", cargo: "Profesora de barre", detalle: "Bailarina profesional que enseña a temblar con criterio." },
  { iniciales: "TA", nombre: "Tomás Aguirre", cargo: "Kinesiólogo asociado", detalle: "Evalúa lesiones y adapta ejercicios con los profesores." },
];

export const testimonios = [
  { texto: "Probé la clase gratis un martes y llevo catorce meses seguidos. Mi espalda y yo estamos de acuerdo.", autor: "P. Herrera", detalle: "Alumna · Reformer nivel 3" },
  { texto: "Seis personas por clase reformer: me corrigen en cada serie. Es otra cosa.", autor: "F. Salas", detalle: "Alumno · Reformer" },
  { texto: "Volví a moverme después de la maternidad con un plan que respetó mi cuerpo. Nada de fit de catálogo.", autor: "C. Undurraga", detalle: "Alumna · Mat y barre" },
];

export const faq = [
  { p: "¿Sirve si nunca hice nada?", r: "Para eso existe el nivel 1 y la clase de prueba gratis: empezás con gente que también empieza, con ejercicios de veraneo y no de circo." },
  { p: "¿Qué es la clase de prueba?", r: "Gratis, con evaluación postural breve y plan escrito al final. Sin compromiso de matrícula ni discurso comercial." },
  { p: "¿Puedo congelar el plan?", r: "Sí, hasta dos meses al año por viaje o lesión, sin costo y sin perder el nivel de tus grupos." },
  { p: "¿Tengo que reservar las clases?", r: "Sí, por la app: el cupo se reserva con 48 horas y se libera con 12 de anticipación. Así los grupos siguen siendo de 12." },
  { p: "¿Qué pasa si me lastimo?", r: "Tenemos kinesiólogo asociado: evalúa, adapta los ejercicios con el profesor y el plan no se pierde. La lesión no es motivo de cancelación." },
];

export const valoresGestion = {
  intro: "Planes simples, precios claros.",
  sub: "Sin matrículas ni penalidades: los planes se congelan, se pausan y se cancelan avisando con 10 días.",
  filas: [
    { tipo: "Clase de prueba", detalle: "Con evaluación y plan escrito", venta: "Gratis", arriendo: "una vez" },
    { tipo: "Clase suelta", detalle: "Cualquier formato con cupo", venta: "$15.000", arriendo: "reserva app" },
    { tipo: "Plan 2 veces por semana", detalle: "8 clases al mes", venta: "$52.000/mes", arriendo: "congelable" },
    { tipo: "Plan ilimitado", detalle: "Todas las clases y niveles", venta: "$68.000/mes", arriendo: "reserva prioritaria" },
  ],
};

// Paleta del hero 3D — día cálido, acento verde savia.
export const tema3d = {
  noche: false,
  fondo: "#f5f3ec",
  niebla: "#f5f3ec",
  torre: "#ffffff",
  torreTecho: "#e6e2d4",
  ventanas: "#a8b894",
  ventanasAlt: "#ccd6bd",
  acento: "#5f7048",
  suelo: "#ebe9df",
  estrellas: "#8a867b",
};

export const textoVender = {
  kicker: "Prueba gratis",
  titulo: "Una clase gratis y un plan con tu nombre.",
  sub: "Reserva tu clase de prueba: evaluación breve, la clase que quieras probar y un plan mensual escrito según tu cuerpo y tu semana.",
  beneficios: [
    { titulo: "Gratis de verdad", texto: "Sin matrícula condicionada ni tarjeta. Probás y te vas con el plan escrito igual." },
    { titulo: "Grupos de 12", texto: "Y de 6 en reformer. Corrección por nombre, no por gritos." },
    { titulo: "Plan revisable", texto: "Cada 8 semanas se revisa contigo: nivel, formato y objetivos." },
    { titulo: "Kinesiólogo asociado", texto: "Lesión o molestia: se adapta el ejercicio, no se cancela el plan." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "Un estudio a escala de persona.",
  parrafo1:
    "Savia abrió en 2018 en un segundo piso de Irarrázaval con seis reformers y una convicción: los grupos chicos cambian todo. Hoy seguimos con 12 por clase porque funciona, no por nostalgia.",
  parrafo2:
    "Cinco profesores, un kinesiólogo asociado y una comunidad que se sabe los nombres. El 78% renueva cada mes: ese es el único número de crecimiento que miramos.",
  valores: [
    { titulo: "Grupos chicos siempre", texto: "12 máximo, 6 en reformer. Si se llena, se abre otra clase, no se aprieta la sala." },
    { titulo: "Cuerpos distintos, planes distintos", texto: "El plan sale de tu prueba, no del catálogo de promociones." },
    { titulo: "Constancia sobre intensidad", texto: "Preferimos que vengas ocho meses seguidos a que hagas un mes heroico." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "estudio.png", marco: false, caption: "" };
