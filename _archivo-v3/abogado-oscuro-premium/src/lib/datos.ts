// RIVERA & CÍA. — Abogados · todo el contenido del sitio vive acá.
// "operacion": venta = atención permanente, arriendo = por proyecto.
// m2 = casos gestionados · dormitorios = abogados del área.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Atención permanente" : "Por proyecto");
export const linea = (p: { m2: number }) => `${p.m2}+ casos`;

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
  nombre: "RIVERA",
  sufijo: "& CÍA. Abogados",
  kicker: "Abogados · Santiago · desde 1994",
  claim: ["Pocas causas.", "Bien", "litigadas."],
  sub: "Litigación de alto estándar para empresas y personas: juicios que se preparan desde el primer día como si fueran a sentencia. Honorarios por etapa, informes mensuales y un socio responsable de cada causa.",
  ctaPrimario: { texto: "Ver áreas de práctica", a: "/areas" },
  ctaSecundario: { texto: "Solicitar consulta", a: "/servicios" },
  telefono: "+56 2 2799 3300",
  telefonoHref: "tel:+56227993300",
  correo: "estudio@riveracia.cl",
  direccion: "Isidora Goyenechea 3411, of. 802 · Las Condes, Santiago",
  horario: "Lunes a viernes 9:00–19:00 · urgencias 24 h",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del estudio.",
};

export const etiquetas = {
  catalogo: "Áreas",
  catalogoUno: "Área",
  captacion: "Servicios",
  nosotros: "El estudio",
  fichaPlural: "áreas",
};

export const rutas = {
  inicio: "/",
  catalogo: "/areas",
  ficha: "/area",
  captacion: "/servicios",
  nosotros: "/estudio",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Áreas", a: "/areas" },
  { texto: "Servicios", a: "/servicios" },
  { texto: "Estudio", a: "/estudio" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Años litigando", v: "30" },
  { k: "Sentencias favorables", v: "82%" },
  { k: "Primera consulta", v: "sin costo" },
];

export const comunas = ["Las Condes", "Vitacura", "Providencia", "Santiago", "Ñuñoa", "Viña del Mar"];

export const cita = {
  texto:
    "Prepararon el juicio desde el primer día. Cuando llegamos a la audiencia, la otra parte ya sabía que iba a perder.",
  autor: "M. Vergara · cliente corporativo, 2024",
};

export const propiedades: Propiedad[] = [
  {
    id: "litigio-corporativo",
    ref: "RC·01",
    titulo: "Litigio corporativo",
    operacion: "arriendo",
    tipo: "Corporativo",
    comuna: "Las Condes",
    precioUF: 1994,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 0,
    m2: 340,
    estacionamientos: 0,
    anio: 1994,
    descripcion:
      "Disputas societarias, responsabilidad de directores y juicios por incumplimientos contractuales de alta cuantía. Cada causa se prepara desde el día uno como si fuera a sentencia: peritos, testigos y estrategia de prueba definidas al inicio.",
    fotos: [media("sala.png"), media("pasillo.png"), media("pluma.png"), media("textura.png")],
    destacada: true,
    coord: [-33.416, -70.555],
  },
  {
    id: "arbitraje",
    ref: "RC·02",
    titulo: "Arbitraje nacional e internacional",
    operacion: "arriendo",
    tipo: "Corporativo",
    comuna: "Las Condes",
    precioUF: 2004,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 120,
    estacionamientos: 0,
    anio: 2004,
    descripcion:
      "Representación en arbitrajes de la Cámara de Comercio de Santiago y la ICC. Cláusulas compromisorias redactadas para que el conflicto se resuelto en meses, con árbitros que conocen el rubro.",
    fotos: [media("pasillo.png"), media("sala.png"), media("pluma.png")],
    destacada: true,
    coord: [-33.415, -70.56],
  },
  {
    id: "laboral-empresas",
    ref: "RC·03",
    titulo: "Defensa laboral de empresas",
    operacion: "venta",
    tipo: "Laboral",
    comuna: "Vitacura",
    precioUF: 1998,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 410,
    estacionamientos: 0,
    anio: 1998,
    descripcion:
      "Defensa en tutelas, multas inspectoriles y juicios de despido. Auditoría de cumplimiento previa que reduce el 80% de la exposición laboral antes de que exista demanda. Capacitación a jefaturas incluida.",
    fotos: [media("pluma.png"), media("sala.png")],
    destacada: true,
    coord: [-33.393, -70.598],
  },
  {
    id: "penal-empresarial",
    ref: "RC·04",
    titulo: "Penal empresarial y compliance",
    operacion: "arriendo",
    tipo: "Penal",
    comuna: "Santiago",
    precioUF: 2008,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 95,
    estacionamientos: 0,
    anio: 2008,
    descripcion:
      "Defensa de empresas y directores en delitos económicos y tributarios. Modelos de prevención de delitos (Ley 20.393) certificados y defensa en fiscalías de alta complejidad. Urgencias por detención 24 horas.",
    fotos: [media("textura.png"), media("pasillo.png")],
    coord: [-33.436, -70.649],
  },
  {
    id: "inmobiliario-contencioso",
    ref: "RC·05",
    titulo: "Inmobiliario contencioso",
    operacion: "arriendo",
    tipo: "Inmobiliario",
    comuna: "Santiago",
    precioUF: 2001,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 180,
    estacionamientos: 0,
    anio: 2001,
    descripcion:
      "Juicios de nulidad de permisos, reclamaciones DGA y SEREMI, promesas de compraventa caídas y saneamientos de título. El lado judicial del negocio inmobiliario.",
    fotos: [media("sala.png"), media("textura.png")],
    coord: [-33.43, -70.654],
  },
  {
    id: "energia-mineria",
    ref: "RC·06",
    titulo: "Energía y minería",
    operacion: "arriendo",
    tipo: "Regulatorio",
    comuna: "Santiago",
    precioUF: 2012,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 70,
    estacionamientos: 0,
    anio: 2012,
    descripcion:
      "Judicialización de permisos ambientales,(SEIA), reclamaciones ante organismos reguladores y negociación con comunidades. Litigio técnico con abogados que leen un EIA antes que un escrito.",
    fotos: [media("pasillo.png"), media("pluma.png")],
    coord: [-33.44, -70.65],
  },
  {
    id: "mediacion-ejecutiva",
    ref: "RC·07",
    titulo: "Mediación ejecutiva",
    operacion: "arriendo",
    tipo: "Civil",
    comuna: "Providencia",
    precioUF: 2015,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 140,
    estacionamientos: 0,
    anio: 2015,
    descripcion:
      "Cuando el juicio no conviene pero el acuerdo no llega: mediación dirigida por un socio del estudio, con plazos decretados y soluciones escritas. El 71% de nuestros casos contenciosos termina así.",
    fotos: [media("pluma.png")],
    coord: [-33.428, -70.612],
  },
];

export const cifras = [
  { valor: 30, sufijo: "", etiqueta: "Años litigando", detalle: "Fundado en 1994" },
  { valor: 82, sufijo: "%", etiqueta: "Sentencias favorables", detalle: "Primera y segunda instancia" },
  { valor: 1355, sufijo: "+", etiqueta: "Causas llevadas", detalle: "Contencioso civil y corporativo" },
  { valor: 4, sufijo: "", etiqueta: "Socios litigantes", detalle: "Todos con causa activa" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Litigio de alto estándar",
    texto: "Causas contenciosas preparadas para sentencia desde el primer día, con peritos y estrategia temprana.",
    pie: "Honorario por etapa",
  },
  {
    n: "02",
    titulo: "Arbitraje",
    texto: "Representación en arbitrajes CCS e ICC, y redacción de cláusulas que evitan el juzgado.",
    pie: "Nacional e internacional",
  },
  {
    n: "03",
    titulo: "Defensa laboral empresarial",
    texto: "Auditoría previa, defensa inspectorial y judicial, y capacitación a jefaturas.",
    pie: "Con abogado asignado",
  },
  {
    n: "04",
    titulo: "Compliance penal",
    texto: "Modelos de prevención Ley 20.393 certificados y defensa en fiscalías complejas.",
    pie: "Urgencias 24 horas",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Análisis de viabilidad",
    texto: "Revisión del expediente y opinión escrita: probabilidad real de ganar, costo y duración. Si no conviene litigar, se lo decimos en la primera reunión.",
  },
  {
    n: "02",
    titulo: "Estrategia temprana",
    texto: "Antes de demandar: peritos citados, testigos identificados y teoría del caso definida. El juicio se gana en los primeros treinta días de preparación.",
  },
  {
    n: "03",
    titulo: "Socio responsable",
    texto: "Cada causa tiene un socio que firma y responde. Los escritos los redacta quien va a litigarlos, no un practicante.",
  },
  {
    n: "04",
    titulo: "Informe mensual",
    texto: "Estado de causa, próximos hitos y gastos del período, el primer viernes de cada mes. Sin llamar a preguntar.",
  },
];

export const equipo = [
  { iniciales: "AR", nombre: "Alberto Rivera", cargo: "Socio fundador · Litigio corporativo", detalle: "30 años en tribunales. Arbitro CCS registrado." },
  { iniciales: "LC", nombre: "Lucía Concha", cargo: "Socia · Laboral", detalle: "Ex jefa jurídica de retail nacional." },
  { iniciales: "PM", nombre: "Pedro Mena", cargo: "Socio · Penal empresarial", detalle: "Defensa de directores y compliance." },
  { iniciales: "IV", nombre: "Isabel Valdés", cargo: "Socia · Energía y minería", detalle: "Judicialización ambiental y regulatoria." },
];

export const testimonios = [
  {
    texto: "La estrategia se definió antes de demandar y el juicio duró la mitad de lo previsto. Eso también es ganar.",
    autor: "Minera no metálica del norte",
    detalle: "Cliente · Contencioso",
  },
  {
    texto: "La auditoría laboral encontró exposiciones que ni nosotros conocíamos. Nunca llegaron a ser demanda.",
    autor: "Grupo de farmacias",
    detalle: "Cliente · Laboral",
  },
  {
    texto: "Un arbitraje resuelto en siete meses. Nuestro contrato anterior hubiera tardado cuatro años en juzgado.",
    autor: "Inversiones Cordillera",
    detalle: "Cliente · Arbitraje",
  },
];

export const faq = [
  {
    p: "¿Cobran honorario si perdemos?",
    r: "En causas contenciosas ofrecemos honorario mixto: una parte fija por etapa y una parte de resultado en casos que lo permiten. Se define por escrito en la primera reunión.",
  },
  {
    p: "¿Litigan fuera de Santiago?",
    r: "Sí, en todo el país con corresponsales propios en Arica y Magallanes. Las causas de minería y energía se litigan mayormente en Santiago por radicación.",
  },
  {
    p: "¿Atienden personas naturales?",
    r: "En causas de alta cuantía: conflictos societarios, propiedades y responsabilidades profesionales. Para causas menores preferimos derivar a un estudio adecuado.",
  },
  {
    p: "¿Cuánto demora un juicio civil?",
    r: "Primera instancia en Santiago: 18 a 30 meses. Con nuestra preparación temprana, el 40% de las causas se resuelve antes de la etapa de prueba.",
  },
  {
    p: "¿Qué es el informe mensual?",
    r: "Un correo del socio responsable el primer viernes de cada mes: estado, próximos hitos, plazos y gastos del período. La misma información que tendría si fuera abogado.",
  },
];

export const valoresGestion = {
  intro: "Honorarios de litigio, sin misterio.",
  sub: "Cada causa se cota por etapa y por escrito. Los gastos de peritos y receptores se estiman antes de partir.",
  filas: [
    { tipo: "Primera consulta y análisis", detalle: "Opinión escrita de viabilidad", venta: "Sin costo", arriendo: "por 45 minutos" },
    { tipo: "Gestión contenciosa", detalle: "Primera instancia completa", venta: "UF 20–80", arriendo: "por etapa" },
    { tipo: "Arbitraje", detalle: "Procedimiento completo CCS/ICC", venta: "UF 40–150", arriendo: "según cuantía" },
    { tipo: "Asesoría empresarial", detalle: "Abogado asignado permanente", venta: "UF 8–20/mes", arriendo: "incluye auditoría anual" },
  ],
};

// Paleta del hero 3D — noche, torres grafito, ventanas latón.
export const tema3d = {
  noche: true,
  fondo: "#101013",
  niebla: "#101013",
  torre: "#1a1b1f",
  torreTecho: "#101013",
  ventanas: "#d9b96f",
  ventanasAlt: "#eed9a8",
  acento: "#c9a35f",
  suelo: "#0c0c0e",
  estrellas: "#8f8b82",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Antes de demandar: saber si se gana.",
  sub: "Primera consulta sin costo con análisis de viabilidad escrito. Probabilidad, costo y duración reales de su caso, no un discurso optimista.",
  beneficios: [
    { titulo: "Análisis de viabilidad", texto: "Opinión escrita con probabilidad, costo y duración antes de firmar nada." },
    { titulo: "Estrategia antes que demanda", texto: "Peritos y testigos definidos en los primeros 30 días. El juicio se prepara al inicio." },
    { titulo: "Socio responsable", texto: "Cada causa la firma y la litiga un socio del estudio." },
    { titulo: "Informe mensual", texto: "Estado, hitos y gastos el primer viernes de cada mes." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "Pocas causas. Bien litigadas.",
  parrafo1:
    "RIVERA & CÍA. se fundó en 1994 con una regla que mantiene: no tomamos más causas de las que los socios puedan litigar personalmente. Preferimos un calendario de audiencias lleno que un depósito de expedientes.",
  parrafo2:
    "Cuatro socios litigantes, todos con causa activa, y un equipo que se entrena para sentencia: escritos cortos, prueba ordenada y argumentos que un juez puede seguir sin esfuerzo. Esa disciplina explica el 82% de sentencias favorables.",
  valores: [
    { titulo: "Preparación temprana", texto: "El juicio se gana en los primeros 30 días de estrategia, no en la audiencia." },
    { titulo: "Escritos que se leen", texto: "Cortos, ordenados y con la prueba citada al margen. El juez lo agradece." },
    { titulo: "Honestidad de viabilidad", texto: "Si la causa se pierde, se pierde en la primera consulta. Gratis." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "fullbleed", foto: "sala.png", marco: false, caption: "" };
