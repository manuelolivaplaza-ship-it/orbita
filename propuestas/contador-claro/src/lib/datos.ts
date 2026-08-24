// Estudio Balance — Contabilidad · contenido del sitio.
// "operacion": venta = caso publicado, arriendo = en desarrollo.
// m2 = año del caso (referencial) · anio = semanas de implementación.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Cliente desde" : "En traspaso");
export const linea = (p: { m2: number }) => `Desde ${p.m2}`;

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
  sufijo: "Balance",
  kicker: "Contabilidad y asesoría tributaria · Santiago",
  claim: ["Contabilidad al", "día, negocio", "en calma."],
  sub: "Estudio contable con cierre mensual a los 10 días, declaraciones sin sustos y un contador que contesta el teléfono. Traspaso completo desde su contador anterior en tres semanas, sin multas sorpresa.",
  ctaPrimario: { texto: "Ver servicios", a: "/casos" },
  ctaSecundario: { texto: "Traspasar mi contabilidad", a: "/servicios" },
  telefono: "+56 2 2860 4455",
  telefonoHref: "tel:+56228604455",
  correo: "hola@estudiobalance.cl",
  direccion: "Huérfanos 1147, of. 812 · Santiago Centro",
  horario: "Lunes a viernes 9:00–18:30",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del estudio.",
};

export const etiquetas = {
  catalogo: "Servicios",
  catalogoUno: "Servicio",
  captacion: "Servicios",
  nosotros: "El estudio",
  fichaPlural: "servicios",
};

export const rutas = {
  inicio: "/",
  catalogo: "/servicios",
  ficha: "/servicio",
  captacion: "/servicios",
  nosotros: "/estudio",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Servicios", a: "/servicios" },
  { texto: "El estudio", a: "/estudio" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Cierre mensual", v: "al día 10" },
  { k: "Traspaso", v: "en 3 semanas" },
  { k: "Declaraciones", v: "sin sustos" },
];

export const comunas = ["Santiago", "Providencia", "Las Condes", "Ñuñoa", "Maipú", "Todo Chile"];

export const cita = {
  texto:
    "Cambiar de contador me daba más miedo que la propia fiscalización. En tres semanas estaba todo traspasado, al día y sin multas.",
  autor: "Verónica Salgado · dueña de empresa de aseo",
};

export const propiedades: Propiedad[] = [
  {
    id: "contabilidad-mensual",
    ref: "EB·01",
    titulo: "Contabilidad mensual completa",
    operacion: "arriendo",
    tipo: "Contabilidad",
    comuna: "Santiago",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 3,
    descripcion:
      "Registro, conciliación y cierre mensual entregado al día 10 con informe legible: qué ganó, qué debe y qué vigilar. Su balance siempre listo para el banco o el inversionista.",
    fotos: [media("grilla.png"), media("archivo.png"), media("escritorio.png"), media("sala-reuniones.png")],
    destacada: true,
    coord: [-33.444, -70.654],
  },
  {
    id: "traspaso-contable",
    ref: "EB·02",
    titulo: "Traspaso desde otro contador",
    operacion: "venta",
    tipo: "Traspaso",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 3,
    descripcion:
      "Auditoría inicial gratuita: encontramos lo pendiente antes de firmar. Regularización planificada y traspaso completo en tres semanas, con las multas negociadas antes de que lleguen.",
    fotos: [media("archivo.png"), media("escritorio.png"), media("grilla.png")],
    destacada: true,
    coord: [-33.443, -70.655],
  },
  {
    id: "tributario-planificacion",
    ref: "EB·03",
    titulo: "Planificación tributaria anual",
    operacion: "arriendo",
    tipo: "Tributario",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 4,
    descripcion:
      "Revisión anual del régimen tributario de su empresa: semestre, prórroga o renta presunta. Cada decisión explicada con su ahorro real — y sus riesgos reales.",
    fotos: [media("escritorio.png"), media("sala-reuniones.png"), media("grilla.png")],
    destacada: true,
    coord: [-33.428, -70.612],
  },
  {
    id: "remuneraciones",
    ref: "EB·04",
    titulo: "Remuneraciones y personal",
    operacion: "arriendo",
    tipo: "Remuneraciones",
    comuna: "Ñuñoa",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2022,
    estacionamientos: 0,
    anio: 2,
    descripcion:
      "Liquidaciones, libros de remuneraciones y finiquitos bien hechos: lo que evita juicios laborales carísimos. Con aviso previo de cada carga antes de que aparezca.",
    fotos: [media("grilla.png"), media("escritorio.png")],
    coord: [-33.463, -70.611],
  },
  {
    id: "auditoria-interna",
    ref: "EB·05",
    titulo: "Auditoría interna para créditos e inversionistas",
    operacion: "venta",
    tipo: "Auditoría",
    comuna: "Maipú",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2022,
    estacionamientos: 0,
    anio: 5,
    descripcion:
      "Estados financieros revisados con informe de auditoría interna para banco, fondo o comprador. Lo que su contraparte va a preguntar, respondido antes de que pregunte.",
    fotos: [media("sala-reuniones.png"), media("archivo.png")],
    coord: [-33.509, -70.742],
  },
  {
    id: "constitucion-empresas",
    ref: "EB·06",
    titulo: "Constitución y puesta en marcha",
    operacion: "venta",
    tipo: "Corporativo",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 2,
    descripcion:
      "Su empresa constituida con régimen tributario elegido correctamente desde el día uno — la decisión más barata que se toma al partir y la más cara de deshacer después.",
    fotos: [media("escritorio.png"), media("sala-reuniones.png")],
    coord: [-33.43, -70.62],
  },
];

export const cifras = [
  { valor: 17, sufijo: "", etiqueta: "Años de estudio", detalle: "Fundado en 2008" },
  { valor: 210, sufijo: "+", etiqueta: "Empresas activas", detalle: "Pymes y profesionales" },
  { valor: 10, sufijo: "", etiqueta: "Días para el cierre", detalle: "Cada mes, sin excepción" },
  { valor: 96, sufijo: "%", etiqueta: "Traspasos sin multa", detalle: "Últimos tres años" },
];

export const cartera = [
  { n: "01", titulo: "Contabilidad mensual", texto: "Cierre al día 10 con informe legible: qué ganó, qué debe, qué vigilar.", pie: "Desde $120.000/mes" },
  { n: "02", titulo: "Tributario", texto: "Régimen correcto, declaración sin sustos y planificación anual explicada.", pie: "Desde $180.000/año" },
  { n: "03", titulo: "Remuneraciones", texto: "Liquidaciones y finiquitos que evitan juicios, con avisos previos.", pie: "Desde $15.000/trabajador" },
  { n: "04", titulo: "Traspasos", texto: "Auditoría inicial gratis y regularización planificada en 3 semanas.", pie: "96% sin multa" },
];

export const metodo = [
  { n: "01", titulo: "Auditoría inicial gratuita", texto: "Antes de firmar: qué está al día, qué no y cuánto costaría regularizar. Sin compromiso." },
  { n: "02", titulo: "Traspaso en 3 semanas", texto: "Papeles, claves y sistemas migrados por nosotros. Usted firma; el resto es nuestro problema." },
  { n: "03", titulo: "Cierre mensual al día 10", texto: "Balance e informe legible cada mes. Su contador está al teléfono, no desaparecido." },
  { n: "04", titulo: "Avisos antes de los plazos", texto: "Nada llega con fecha de ayer: cada impuesto y obligación se avisa con margen real para decidir." },
];

export const equipo = [
  { iniciales: "RB", nombre: "Roberto Bravo", cargo: "Contador auditor · Socio fundador", detalle: "17 años. Ex SII en fiscalización." },
  { iniciales: "CM", nombre: "Carolina Mendoza", cargo: "Contadora · Tributario", detalle: "Planificación y regímenes empresariales." },
  { iniciales: "PL", nombre: "Pedro Lagos", cargo: "Contador · Remuneraciones", detalle: "Lo laboral contable que evita juicios." },
  { iniciales: "IT", nombre: "Irene Torres", cargo: "Jefa de operaciones", detalle: "Los cierres salen el día 10 porque ella existe." },
];

export const testimonios = [
  { texto: "Diez años con el mismo estudio y nunca un recargo por atraso. Eso dice todo.", autor: "Constructora Los Aromos", detalle: "Cliente desde 2015" },
  { texto: "La auditoría inicial encontró tres F29 mal declarados por mi contador anterior. Los arreglaron sin multa.", autor: "V. Salgado", detalle: "Cliente · Traspaso" },
  { texto: "El crédito del banco se aprobó con el balance del día 10. La rapidez fue parte del argumento.", autor: "Distribuidora Ruta 5", detalle: "Cliente · Contabilidad" },
];

export const faq = [
  { p: "¿Cuánto cuesta cambiar de contador?", r: "La auditoría inicial es gratis. Si hay pendientes, se presupuestan aparte; si no, el traspaso sale dentro de la primera mensualidad. El 96% de nuestros traspasos termina sin multa nueva." },
  { p: "¿Qué incluye la mensualidad?", r: "Registro, conciliación, F29, cierre al día 10 e informe legible. Remuneraciones y tributario anual se cotizan aparte para que pague solo lo que usa." },
  { p: "¿Atienden empresas en régimen Pro Pyme?", r: "Sí, es nuestro cliente típico: ventas entre UF 1.500 y 75.000. También profesionales con boletas y empresas en régimen general." },
  { p: "¿Qué pasa si tengo años atrasados?", r: "Se presupuestan aparte con plan de regularización y negociación de multas. Lo importante: se entera del costo exacto antes de firmar, no después." },
  { p: "¿Cómo me comunico con mi contador?", r: "Por WhatsApp directo con el contador asignado, que contesta. Y si quiere hablar de su balance, hay reunión mensual incluida." },
];

export const valoresGestion = {
  intro: "Honorarios fijos, sin horas misteriosas.",
  sub: "Cada servicio tiene precio fijo mensual o anual. Las regularizaciones se cotizan cerradas después de la auditoría inicial gratuita.",
  filas: [
    { tipo: "Auditoría inicial", detalle: "Estado real de su contabilidad", venta: "Gratis", arriendo: "sin compromiso" },
    { tipo: "Contabilidad mensual", detalle: "Cierre al día 10 + informe", venta: "$120.000/mes", arriendo: "desde" },
    { tipo: "Remuneraciones", detalle: "Por trabajador activo", venta: "$15.000/mes", arriendo: "por persona" },
    { tipo: "Planificación tributaria", detalle: "Anual con régimen revisado", venta: "$180.000/año", arriendo: "ahorro explicado" },
  ],
};

// Paleta del hero 3D — día sobrio, acento azul profundo.
export const tema3d = {
  noche: false,
  fondo: "#fbfbf9",
  niebla: "#fbfbf9",
  torre: "#ffffff",
  torreTecho: "#e5e5e1",
  ventanas: "#93a9c4",
  ventanasAlt: "#c2cfdf",
  acento: "#1e5799",
  suelo: "#eff0ed",
  estrellas: "#5c6470",
};

export const textoVender = {
  kicker: "Traspasar mi contabilidad",
  titulo: "Cambie de contador sin miedo ni multas.",
  sub: "Auditoría inicial gratuita: le decimos qué tiene pendiente antes de firmar. Traspaso completo en tres semanas y cierre al día 10 desde el primer mes.",
  beneficios: [
    { titulo: "Auditoría inicial gratis", texto: "Estado real de su contabilidad, pendientes incluidos, antes de comprometerse." },
    { titulo: "Traspaso en 3 semanas", texto: "Nosotros migramos papeles, claves y sistemas. Usted solo firma." },
    { titulo: "Cierre al día 10", texto: "Cada mes, con informe legible y contador que contesta el WhatsApp." },
    { titulo: "Sin multas sorpresa", texto: "El 96% de los traspasos termina limpio. Las excepciones se negocian antes." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "El contador que contesta el teléfono.",
  parrafo1:
    "Estudio Balance existe desde 2008 con una tesis simple: la mayoría de los problemas tributarios de una pyme no son de conocimiento sino de comunicación. Un contador que avisa a tiempo vale más que uno brillante desaparecido.",
  parrafo2:
    "Somos cuatro contadores con cierres al día 10, avisos con anticipación y una auditoría inicial que prefiere contarle los problemas antes de cobrarle la solución. Por eso el 96% de los traspasos termina sin multa.",
  valores: [
    { titulo: "Avisamos antes", texto: "Cada plazo con margen real. Las sorpresas tributarias son decisiones mal tomadas con prisa." },
    { titulo: "Informes legibles", texto: "Si usted no entiende su propio balance, no servirá ni para pedir un crédito." },
    { titulo: "Problemas primero", texto: "La auditoría inicial cuenta lo que está mal antes de cobrar por arreglarlo." },
  ],
};
