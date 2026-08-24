// Estudio Ferrada & Cía. — Abogados · todo el contenido del sitio vive acá.
// "operacion" agrupa la modalidad: venta = atención permanente, arriendo = por proyecto.
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
  nombre: "Estudio",
  sufijo: "Ferrada & Cía.",
  kicker: "Abogados · Santiago de Chile · desde 1989",
  claim: ["El derecho se", "estudia. Su caso,", "se conoce."],
  sub: "Estudio jurídico de tamaño humano: abogados que atienden su caso de principio a fin, honorarios dichos antes de empezar y un informe de avance cada mes. Sin letra chica ni secretarias de por medio.",
  ctaPrimario: { texto: "Ver áreas de práctica", a: "/areas" },
  ctaSecundario: { texto: "Solicitar consulta", a: "/servicios" },
  telefono: "+56 2 2689 4510",
  telefonoHref: "tel:+56226894510",
  correo: "consultas@ferradacia.cl",
  direccion: "Monjitas 580, of. 402 · Santiago Centro",
  horario: "Lunes a viernes 9:00–18:00 · urgencias penales 24 h",
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
  { k: "Años de ejercicio", v: "35" },
  { k: "Casos gestionados", v: "2.100+" },
  { k: "Primera consulta", v: "sin costo" },
];

export const comunas = [
  "Santiago",
  "Providencia",
  "Las Condes",
  "Vitacura",
  "Ñuñoa",
  "Valparaíso",
];

export const cita = {
  texto:
    "Me explicaron en media hora lo que otro estudio no supo decirme en tres reuniones. Y el honorario iba escrito antes de partir.",
  autor: "M. Rivas · cliente laboral, 2024",
};

export const propiedades: Propiedad[] = [
  {
    id: "civil-contractual",
    ref: "EF·01",
    titulo: "Civil y contractual",
    operacion: "venta",
    tipo: "Civil",
    comuna: "Santiago",
    precioUF: 1989,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 0,
    m2: 620,
    estacionamientos: 0,
    anio: 1989,
    descripcion:
      "Redacción y negociación de contratos: compraventa, arriendo, prestación de servicios, mutuos y garantías. Revisamos lo que va a firmar y defendemos lo que ya firmó. Demandas de cumplimiento y terminaciones de contrato cuando la otra parte no cumple.",
    fotos: [media("biblioteca.png"), media("escritorio.png"), media("expediente.png")],
    destacada: true,
    coord: [-33.437, -70.65],
  },
  {
    id: "laboral",
    ref: "EF·02",
    titulo: "Laboral, para trabajadores y empresas",
    operacion: "venta",
    tipo: "Laboral",
    comuna: "Santiago",
    precioUF: 1995,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 480,
    estacionamientos: 0,
    anio: 1995,
    descripcion:
      "Autodespidos, tutelas laborales, despidos injustificados y negociación de finiquitos para trabajadores. Para empresas: auditorías de contratos y reglamentos, y defensa en inspectoría y tribunales. Los dos lados del mostrador, conocidos desde 1995.",
    fotos: [media("escritorio.png"), media("expediente.png"), media("biblioteca.png")],
    destacada: true,
    coord: [-33.44, -70.652],
  },
  {
    id: "familia",
    ref: "EF·03",
    titulo: "Familia y sucesiones",
    operacion: "venta",
    tipo: "Familia",
    comuna: "Providencia",
    precioUF: 1998,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 390,
    estacionamientos: 0,
    anio: 1998,
    descripcion:
      "Divorcios con y sin acuerdo, cuidado personal, alimentos y régimen de comunicación con los hijos. Sucesiones completas: posesión efectiva, partición y liquidación. Trabajamos para que el acuerdo llegue firmado y no sentenciado.",
    fotos: [media("expediente.png"), media("biblioteca.png")],
    destacada: true,
    coord: [-33.437, -70.621],
  },
  {
    id: "corporativo",
    ref: "EF·04",
    titulo: "Corporativo y societario",
    operacion: "arriendo",
    tipo: "Corporativo",
    comuna: "Las Condes",
    precioUF: 2005,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 210,
    estacionamientos: 0,
    anio: 2005,
    descripcion:
      "Constitución de empresas, pactos de socios, aumentos de capital y transformaciones. Redacción de estatutos que evitan el juicio del futuro. Retribución de directores, family office y governance para empresas familiares.",
    fotos: [media("biblioteca.png"), media("escritorio.png")],
    coord: [-33.411, -70.561],
  },
  {
    id: "inmobiliario",
    ref: "EF·05",
    titulo: "Inmobiliario y urbanismo",
    operacion: "arriendo",
    tipo: "Inmobiliario",
    comuna: "Santiago",
    precioUF: 2002,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 175,
    estacionamientos: 0,
    anio: 2002,
    descripcion:
      "Due diligence inmobiliario, compraventas de propiedades y proyectos, estudios de títulos, permisos de obra y permisos de sectorización. Defensa en juicios de nulidad de permisos y reclamaciones ante SISS y SEREMI.",
    fotos: [media("escritorio.png"), media("biblioteca.png")],
    coord: [-33.43, -70.654],
  },
  {
    id: "penal-economico",
    ref: "EF·06",
    titulo: "Defensa penal económica",
    operacion: "arriendo",
    tipo: "Penal",
    comuna: "Santiago",
    precioUF: 2008,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 120,
    estacionamientos: 0,
    anio: 2008,
    descripcion:
      "Defensa de gerentes y empresas en delitos económicos: estafas, infracciones tributarias, delitos de mercado y responsabilidad ambiental. Urgencias con detención: atención 24 horas los 365 días. Querellas para víctimas de fraude.",
    fotos: [media("expediente.png"), media("escritorio.png")],
    coord: [-33.436, -70.649],
  },
  {
    id: "herencias",
    ref: "EF·07",
    titulo: "Herencias y testamentos",
    operacion: "venta",
    tipo: "Familia",
    comuna: "Ñuñoa",
    precioUF: 1998,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 230,
    estacionamientos: 0,
    anio: 1998,
    descripcion:
      "Testamentos con reparto claro para evitar el conflicto de la próxima generación. Posesiones efectivas gestionadas completas en el Registro Civil y SII, incluida la partición cuando hay inmuebles de por medio.",
    fotos: [media("biblioteca.png")],
    coord: [-33.463, -70.611],
  },
  {
    id: "mediacion",
    ref: "EF·08",
    titulo: "Mediación y arbitraje",
    operacion: "arriendo",
    tipo: "Civil",
    comuna: "Providencia",
    precioUF: 2012,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 95,
    estacionamientos: 0,
    anio: 2012,
    descripcion:
      "Mediación registrada para conflictos familiares, vecinales y comerciales: una solución en semanas, no en años. Arbitraje para empresas que prefieren un árbitro que entiende el rubro antes que un juzgado con causa al día 400.",
    fotos: [media("escritorio.png")],
    coord: [-33.428, -70.612],
  },
];

export const cifras = [
  { valor: 35, sufijo: "", etiqueta: "Años de ejercicio", detalle: "Fundado en 1989" },
  { valor: 2100, sufijo: "+", etiqueta: "Casos gestionados", detalle: "Contenciosos y asesoría" },
  { valor: 78, sufijo: "%", etiqueta: "Resuelto sin juicio", detalle: "Acuerdos y mediaciones" },
  { valor: 6, sufijo: "", etiqueta: "Áreas de práctica", detalle: "Todas con abogado responsable" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Asesoría permanente",
    texto: "Abogado asignado, consultas ilimitadas y revisión de contratos para empresas y familias.",
    pie: "Desde UF 4 mensuales",
  },
  {
    n: "02",
    titulo: "Litigio",
    texto: "Juicios civiles, laborales, de familia y penales económicos con informe mensual de avance.",
    pie: "Honorario por etapa",
  },
  {
    n: "03",
    titulo: "Preventivo",
    texto: "Auditoría de contratos, estatutos y cumplimientos para que el juicio nunca ocurra.",
    pie: "Informe + plan de acción",
  },
  {
    n: "04",
    titulo: "Mediación",
    texto: "Solución de conflictos en semanas con mediador registrado del propio estudio.",
    pie: "Sesiones de 90 minutos",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Primera consulta sin costo",
    texto: "Media hora presencial o por video. Sale con una opinión escrita: si tiene caso, qué demora y cuánto cuesta.",
  },
  {
    n: "02",
    titulo: "Honorario por escrito",
    texto: "Antes de empezar: monto, etapas y gastos. Si el caso cambia, el honorario se conversa antes de seguir, no después.",
  },
  {
    n: "03",
    titulo: "Abogado responsable",
    texto: "El mismo abogado de la primera reunión lleva su caso. Secretarias para agendar, no para explicar.",
  },
  {
    n: "04",
    titulo: "Informe mensual",
    texto: "El primer viernes de cada mes: estado, próximos pasos y gastos del período. Sin llamar a preguntar.",
  },
];

export const equipo = [
  { iniciales: "RF", nombre: "Rodrigo Ferrada", cargo: "Socio fundador · Civil y corporativo", detalle: "35 años de ejercicio. Magíster U. de Chile." },
  { iniciales: "CA", nombre: "Carolina Aros", cargo: "Socia · Laboral", detalle: "Ex fiscalizadora del trabajo. 18 años en tribunales." },
  { iniciales: "DM", nombre: "Diego Miranda", cargo: "Socio · Familia y sucesiones", detalle: "Mediador familiar registrado. 14 años de práctica." },
  { iniciales: "SP", nombre: "Sofía Palma", cargo: "Asociada · Penal económico", detalle: "Defensa de gerentes y empresas. Urgencias 24 h." },
];

export const testimonios = [
  {
    texto: "El informe mensual del primer viernes cambió mi relación con el abogado. Siempre supe dónde estaba mi caso.",
    autor: "J. Carrasco",
    detalle: "Cliente · Laboral",
  },
  {
    texto: "Renegociaron mi contrato en tres días y el honorario costó menos que el error que evitaban.",
    autor: "Constructora Ámbar",
    detalle: "Cliente · Corporativo",
  },
  {
    texto: "La posesión efectiva completa en cuatro meses, con la partición de dos casas incluida.",
    autor: "Hermanos Vega",
    detalle: "Clientes · Sucesiones",
  },
];

export const faq = [
  {
    p: "¿Cuánto cuesta la primera consulta?",
    r: "Nada: media hora presencial o por video, con opinión escrita al término. Si el caso no procede, se lo decimos en esa misma reunión.",
  },
  {
    p: "¿Cómo se calculan los honorarios?",
    r: "Por etapa para juicios (demanda, prueba, sentencia) y monto fijo para gestiones. Todo por escrito antes de empezar, con los gastos aproximados de cada trámite.",
  },
  {
    p: "¿Atienden urgencias?",
    r: "Las detenciones penales, las 24 horas. Las medidas precautorias laborales, el mismo día. El resto, dentro de 48 horas hábiles.",
  },
  {
    p: "¿Trabajan con empresas?",
    r: "Sí: asesoría permanente mensual con abogado asignado, revisión de contratos y defensa en inspectoría y tribunales.",
  },
  {
    p: "¿Puedo cambiar de abogado con ustedes a mitad de caso?",
    r: "Sí. Revisamos el expediente, le decimos en qué está y cuánto cuesta continuar. El traspaso se hace con el expediente completo y sin cobrarle dos veces lo mismo.",
  },
];

export const valoresGestion = {
  intro: "Honorarios dichos antes de empezar.",
  sub: "Todo honorario va por escrito con sus etapas y gastos. Si el caso cambia de curso, se conversa antes de seguir.",
  filas: [
    { tipo: "Primera consulta", detalle: "Media hora con opinión escrita", venta: "Sin costo", arriendo: "presencial o video" },
    { tipo: "Gestión puntual", detalle: "Contratos, finiquitos, posesiones efectivas", venta: "UF 3–12", arriendo: "según complejidad" },
    { tipo: "Litigio completo", detalle: "Primera instancia, todas las audiencias", venta: "UF 15–60", arriendo: "por etapa" },
    { tipo: "Asesoría permanente", detalle: "Abogado asignado y contratos ilimitados", venta: "UF 4–10/mes", arriendo: "para empresas y familias" },
  ],
};

// Paleta del hero 3D — día cálido, torres crema, acento burdeo.
export const tema3d = {
  noche: false,
  fondo: "#f5f2ec",
  niebla: "#f5f2ec",
  torre: "#ffffff",
  torreTecho: "#e6e0d4",
  ventanas: "#a9907f",
  ventanasAlt: "#c9b6a6",
  acento: "#5e1f22",
  suelo: "#eae4d8",
  estrellas: "#8a857b",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Una opinión honesta antes que un juicio caro.",
  sub: "Cuéntenos su caso en la primera consulta sin costo. Sale con una opinión escrita: si procede, cuánto demora y cuánto cuesta.",
  beneficios: [
    { titulo: "Primera consulta sin costo", texto: "Media hora con un abogado del área, presencial o por video, con opinión escrita." },
    { titulo: "Honorario por escrito", texto: "Monto, etapas y gastos antes de partir. Sin sorpresas a mitad de camino." },
    { titulo: "Informe mensual fijo", texto: "Estado, próximos pasos y gastos el primer viernes de cada mes." },
    { titulo: "El mismo abogado siempre", texto: "Su caso lo lleva quien lo recibió, de la consulta a la sentencia." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "Un estudio a la antigua, con métodos nuevos.",
  parrafo1:
    "Ferrada & Cía. existe desde 1989 en el mismo edificio de Monjitas. Creemos en las cosas a la antigua: el abogado que conoce su caso, el honorario conversado, la palabra cumplida. Y en las nuevas: expediente digital, informe mensual y consultas por video.",
  parrafo2:
    "Somos cuatro abogados y un equipo de apoyo que prefiere los casos bien llevados a los muchos llevados. El 78% de nuestros asuntos se resuelve sin juicio — esa estadística es nuestro mejor argumento de venta y nuestra forma de trabajar.",
  valores: [
    { titulo: "Primero la verdad", texto: "Si el caso no procede, se lo decimos en la primera consulta. Gratis." },
    { titulo: "Todo por escrito", texto: "Honorarios, informes y acuerdos. Lo que no está escrito, no está dicho." },
    { titulo: "Pocos casos, bien llevados", texto: "Preferimos rechazar un caso que llevarlo mal." },
  ],
};
