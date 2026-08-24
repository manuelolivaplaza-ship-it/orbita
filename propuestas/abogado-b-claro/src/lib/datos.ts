// Bravo & Soto Abogados — todo el contenido del sitio vive acá.
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
  nombre: "Bravo",
  sufijo: "& Soto Abogados",
  kicker: "Abogados de proximidad · Ñuñoa — Santiago · desde 2003",
  claim: ["El abogado del", "barrio, con el", "nivel del centro."],
  sub: "Estudio jurídico de barrio con estándar de centro: consultas que se responden el mismo día, honorarios dichos por escrito y explicaciones en español, no en latín.",
  ctaPrimario: { texto: "Ver áreas de práctica", a: "/areas" },
  ctaSecundario: { texto: "Solicitar consulta", a: "/servicios" },
  telefono: "+56 2 2777 4590",
  telefonoHref: "tel:+56227774590",
  correo: "hola@bravosoto.cl",
  direccion: "Av. Irarrázaval 4210, of. 203 · Ñuñoa, Santiago",
  horario: "Lunes a viernes 9:30–18:30 · sábados con cita",
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
  { k: "Años en Ñuñoa", v: "21" },
  { k: "Consulta respondida", v: "el mismo día" },
  { k: "Primera consulta", v: "$25.000" },
];

export const comunas = ["Ñuñoa", "Macul", "La Florida", "Providencia", "San Joaquín", "Santiago"];

export const cita = {
  texto:
    "Vivo a cuatro cuadras del estudio y igual me atendieron por video un domingo. El asunto quedó resuelto el martes.",
  autor: "M. Reyes · clienta de arriendos, 2024",
};

export const propiedades: Propiedad[] = [
  {
    id: "arriendos-inmobiliario",
    ref: "BS·01",
    titulo: "Arriendos y propiedad",
    operacion: "venta",
    tipo: "Inmobiliario",
    comuna: "Ñuñoa",
    precioUF: 2003,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 520,
    estacionamientos: 0,
    anio: 2003,
    descripcion:
      "Contratos de arriendo para dueños y arrendatarios, depósitos, desalojos y multas. Revisión de compraventas antes de firmar y posesiones efectivas a precio fijo.",
    fotos: [media("biblioteca.png"), media("escritorio.png"), media("expediente.png")],
    destacada: true,
    coord: [-33.462, -70.613],
  },
  {
    id: "laboral-personas",
    ref: "BS·02",
    titulo: "Laboral para trabajadores",
    operacion: "venta",
    tipo: "Laboral",
    comuna: "Ñuñoa",
    precioUF: 2006,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 460,
    estacionamientos: 0,
    anio: 2006,
    descripcion:
      "Finiquitos mal pagados, autodespidos, horas extras y acosos laborales. Primera consulta $25.000 que se descuenta del honorario si seguimos.",
    fotos: [media("escritorio.png"), media("expediente.png"), media("biblioteca.png")],
    destacada: true,
    coord: [-33.463, -70.611],
  },
  {
    id: "familia",
    ref: "BS·03",
    titulo: "Familia",
    operacion: "venta",
    tipo: "Familia",
    comuna: "Ñuñoa",
    precioUF: 2008,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 380,
    estacionamientos: 0,
    anio: 2008,
    descripcion:
      "Divorcios de acuerdo y litigiosos, alimentos, cuidado personal y régimen comunicacional. Sucesiones y testamentos para que la familia no termine discutiendo.",
    fotos: [media("expediente.png"), media("biblioteca.png")],
    destacada: true,
    coord: [-33.461, -70.61],
  },
  {
    id: "consumidor",
    ref: "BS·04",
    titulo: "Defensa del consumidor",
    operacion: "venta",
    tipo: "Civil",
    comuna: "Macul",
    precioUF: 2011,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 240,
    estacionamientos: 0,
    anio: 2011,
    descripcion:
      "Cobros indebidos, seguros que no pagan, automóviles fallados y remates engañosos. Reclamos en SERNAC y demandas en Juzgado de Policía Local y JDC.",
    fotos: [media("escritorio.png"), media("biblioteca.png")],
    coord: [-33.484, -70.598],
  },
  {
    id: "pymes",
    ref: "BS·05",
    titulo: "Pymes y emprendedores",
    operacion: "arriendo",
    tipo: "Corporativo",
    comuna: "La Florida",
    precioUF: 2015,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 150,
    estacionamientos: 0,
    anio: 2015,
    descripcion:
      "Constitución de SPA y EIRL, contratos con proveedores y trabajadores, y cobranzas. El paquete jurídico del negocio chico que quiere hacer las cosas bien.",
    fotos: [media("biblioteca.png"), media("escritorio.png")],
    coord: [-33.514, -70.593],
  },
  {
    id: "notarial",
    ref: "BS·06",
    titulo: "Gestiones y poderes",
    operacion: "arriendo",
    tipo: "Civil",
    comuna: "Providencia",
    precioUF: 2018,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 190,
    estacionamientos: 0,
    anio: 2018,
    descripcion:
      "Poderes para el extranjero, firmas ante notario con hora agendada, verificaciones de títulos y gestiones en registro civil y conservador.",
    fotos: [media("expediente.png")],
    coord: [-33.437, -70.621],
  },
];

export const cifras = [
  { valor: 21, sufijo: "", etiqueta: "Años en el barrio", detalle: "Misma esquina desde 2003" },
  { valor: 1900, sufijo: "+", etiqueta: "Casos resueltos", detalle: "La mayoría sin juicio" },
  { valor: 24, sufijo: " h", etiqueta: "Respuesta máxima", detalle: "Hábiles, a más tardar" },
  { valor: 6, sufijo: "", etiqueta: "Áreas", detalle: "Con abogado responsable" },
];

export const cartera = [
  { n: "01", titulo: "Consultas", texto: "Consulta exprés de 30 minutos con respuesta práctica el mismo día.", pie: "$25.000 · se descuentan" },
  { n: "02", titulo: "Gestiones", texto: "Contratos, poderes y posesiones efectivas a precio fijo y con plazo.", pie: "Desde UF 2" },
  { n: "03", titulo: "Juicios", texto: "Laboral, familia, arriendos y consumidor con informe de avance mensual.", pie: "Honorario por etapa" },
  { n: "04", titulo: "Pymes", texto: "Plan mensual para negocios del barrio: contratos y consultas ilimitadas.", pie: "Desde $120.000/mes" },
];

export const metodo = [
  { n: "01", titulo: "Consulta exprés", texto: "30 minutos, presencial o video. Sale con una respuesta práctica, no con 'hay que estudiarlo'." },
  { n: "02", titulo: "Precio por escrito", texto: "Honorario fijo para gestiones y por etapa para juicios. Siempre por correo antes de partir." },
  { n: "03", titulo: "Abogado que contesta", texto: "El mismo abogado de la consulta lleva su caso y responde en 24 horas hábiles." },
  { n: "04", titulo: "Avance cada mes", texto: "Correo mensual con estado y próximos pasos. Y si no pasa nada, también se lo decimos." },
];

export const equipo = [
  { iniciales: "PB", nombre: "Patricio Bravo", cargo: "Socio · Arriendos y propiedad", detalle: "21 años en el mismo local de Irarrázaval." },
  { iniciales: "MS", nombre: "Marcela Soto", cargo: "Socia · Familia y laboral", detalle: "Ex defensora laboral pública." },
  { iniciales: "FG", nombre: "Felipe Gajardo", cargo: "Asociado · Consumidor", detalle: "Demandas JDC y SERNAC." },
  { iniciales: "AN", nombre: "Antonia Núñez", cargo: "Asociada · Pymes", detalle: "Constitución y contratos." },
];

export const testimonios = [
  { texto: "Me revisaron el contrato de arriendo en una tarde. El depósito quedó protegido por escrito.", autor: "C. Fuentes", detalle: "Cliente · Arriendos" },
  { texto: "El finiquito mal pagado quedó regularizado en dos meses, sin irme a audiencia.", autor: "R. Órdenes", detalle: "Cliente · Laboral" },
  { texto: "Constituyeron mi SPA en una semana y con honorario fijo. Cero sorpresas.", autor: "Panadería Santa Emilia", detalle: "Cliente · Pymes" },
];

export const faq = [
  { p: "¿Cuánto cuesta la primera consulta?", r: "$25.000 por 30 minutos, presencial o por video. Si contrata una gestión o juicio, se descuenta completa del honorario." },
  { p: "¿Atienden por video?", r: "Sí, y también los sábados con cita. El 60% de nuestras consultas ya es remota." },
  { p: "¿Hacen trabajos de urgencia?", r: "Desalojos, medidas precautorias y detenciones se atienden el mismo día, incluyendo fin de semana si es necesario." },
  { p: "¿Puedo pagar en cuotas?", r: "Las gestiones se pagan 50% al inicio y 50% al término. Los juicios, por etapa. Aceptamos transferencia y tarjetas." },
  { p: "¿Atienden fuera de Ñuñoa?", r: "Toda la Región Metropolitana. Los juicios se siguen digitalmente desde cualquier comuna." },
];

export const valoresGestion = {
  intro: "Precios de barrio, trabajo de centro.",
  sub: "Todo honorario va por escrito antes de partir. Gestiones a precio fijo, juicios por etapa.",
  filas: [
    { tipo: "Consulta exprés", detalle: "30 minutos con respuesta", venta: "$25.000", arriendo: "se descuenta" },
    { tipo: "Contratos y gestiones", detalle: "Arriendos, poderes, compraventas", venta: "UF 2–6", arriendo: "precio fijo" },
    { tipo: "Juicios", detalle: "Laboral, familia, arriendo, consumidor", venta: "UF 8–25", arriendo: "por etapa" },
    { tipo: "Plan pyme", detalle: "Consultas y contratos ilimitados", venta: "$120.000/mes", arriendo: "para negocios locales" },
  ],
};

// Paleta del hero 3D — día claro, torres blancas, acento azul.
export const tema3d = {
  noche: false,
  fondo: "#f5f4f0",
  niebla: "#f5f4f0",
  torre: "#ffffff",
  torreTecho: "#e2e4e0",
  ventanas: "#9fb0c4",
  ventanasAlt: "#c3ceda",
  acento: "#20395b",
  suelo: "#e9e9e4",
  estrellas: "#8b867b",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Una respuesta práctica, hoy.",
  sub: "Cuéntenos su caso en una consulta exprés de 30 minutos. Sale con una respuesta y un precio por escrito.",
  beneficios: [
    { titulo: "Respuesta el mismo día", texto: "Consultas de 30 minutos con solución práctica, no con 'lo estudiamos'." },
    { titulo: "Precio por escrito", texto: "Fijo para gestiones, por etapa para juicios. Siempre antes de partir." },
    { titulo: "Abogado que contesta", texto: "El mismo abogado de la consulta lleva su caso. Respuesta en 24 h hábiles." },
    { titulo: "Cerca de su casa", texto: "Presencial en Ñuñoa, por video en todo Chile, sábados con cita." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "El abogado que contesta.",
  parrafo1:
    "Bravo & Soto existe desde 2003 en la misma esquina de Irarrázaval. Nacimos con una irritación de barrio: que el abogado no contestara. Hoy contestamos en 24 horas hábiles, con presupuesto incluido.",
  parrafo2:
    "Somos un estudio chico a propósito: dos socios y dos asociados que prefieren los casos del barrio bien llevados. El 80% de lo que nos llega se resuelve sin juicio, y eso también es un estándar profesional.",
  valores: [
    { titulo: "Contestamos", texto: "24 horas hábiles, máximo. Con respuesta, no con excusas." },
    { titulo: "En español", texto: "Las explicaciones van sin latinismos ni letra chica." },
    { titulo: "De barrio, completos", texto: "Casos del barrio con el mismo estándar del centro." },
  ],
};
