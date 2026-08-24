// Arrieta & Cía. Abogados — todo el contenido del sitio vive acá.
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
  nombre: "Arrieta",
  sufijo: "& Cía. Abogados",
  kicker: "Estudio jurídico · Santiago de Chile · desde 1996",
  claim: ["Derecho explicado,", "casos resueltos,", "cuenta clara."],
  sub: "Asesoría legal para empresas y familias con una norma interna: cada cliente entiende su caso, cada honorario va por escrito y cada avance se informa. Ejercicio profesional con estándar de servicio.",
  ctaPrimario: { texto: "Ver áreas de práctica", a: "/areas" },
  ctaSecundario: { texto: "Solicitar consulta", a: "/servicios" },
  telefono: "+56 2 2756 0022",
  telefonoHref: "tel:+56227560022",
  correo: "contacto@arrietacia.cl",
  direccion: "Av. Apoquindo 3600, of. 501 · Las Condes, Santiago",
  horario: "Lunes a viernes 9:00–18:30",
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
  { k: "Años de ejercicio", v: "28" },
  { k: "Clientes activos", v: "310" },
  { k: "Primera consulta", v: "sin costo" },
];

export const comunas = ["Las Condes", "Providencia", "Vitacura", "Santiago", "Ñuñoa", "La Reina"];

export const cita = {
  texto:
    "La cuenta venía mes a mes, con horas y gestiones detalladas. Primera vez que un estudio jurídico me pareció serio como un banco.",
  autor: "Inversiones La Rosilla · cliente permanente",
};

export const propiedades: Propiedad[] = [
  {
    id: "corporativo",
    ref: "AC·01",
    titulo: "Corporativo y contratos",
    operacion: "venta",
    tipo: "Corporativo",
    comuna: "Las Condes",
    precioUF: 1996,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 0,
    m2: 520,
    estacionamientos: 0,
    anio: 1996,
    descripcion:
      "Constitución y gobernanza de empresas, contratos comerciales y proveedores, y cumplimiento normativo. La asesoría que evita el juicio antes de que exista.",
    fotos: [media("biblioteca.png"), media("escritorio.png"), media("expediente.png")],
    destacada: true,
    coord: [-33.411, -70.561],
  },
  {
    id: "inmobiliario",
    ref: "AC·02",
    titulo: "Inmobiliario y construcciones",
    operacion: "arriendo",
    tipo: "Inmobiliario",
    comuna: "Las Condes",
    precioUF: 2000,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 310,
    estacionamientos: 0,
    anio: 2000,
    descripcion:
      "Compraventas y due diligence para inversionistas, contratos de promesa y obra, copropiedades y permisos. Compra segura de propiedades nuevas y usadas.",
    fotos: [media("escritorio.png"), media("biblioteca.png")],
    destacada: true,
    coord: [-33.41, -70.56],
  },
  {
    id: "laboral",
    ref: "AC·03",
    titulo: "Laboral integral",
    operacion: "venta",
    tipo: "Laboral",
    comuna: "Providencia",
    precioUF: 2002,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 0,
    m2: 410,
    estacionamientos: 0,
    anio: 2002,
    descripcion:
      "Asesoría para empresas: contratos, reglamentos, finiquitos y defensa en inspectoría. Para trabajadores: despidos injustificados y tutelas.",
    fotos: [media("expediente.png"), media("escritorio.png")],
    destacada: true,
    coord: [-33.428, -70.612],
  },
  {
    id: "familia-patrimonial",
    ref: "AC·04",
    titulo: "Familia y patrimonio",
    operacion: "venta",
    tipo: "Familia",
    comuna: "Vitacura",
    precioUF: 2005,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 220,
    estacionamientos: 0,
    anio: 2005,
    descripcion:
      "Separaciones con acuerdo, cuidados personales, alimentos y planificación sucesoria. Testamentos y sociedades de familia para proteger el patrimonio de la próxima generación.",
    fotos: [media("biblioteca.png"), media("expediente.png")],
    coord: [-33.393, -70.598],
  },
  {
    id: "tributario",
    ref: "AC·05",
    titulo: "Tributario y previsional",
    operacion: "arriendo",
    tipo: "Tributario",
    comuna: "Santiago",
    precioUF: 2010,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 160,
    estacionamientos: 0,
    anio: 2010,
    descripcion:
      "Reclamaciones ante el SII, fiscalizaciones, devoluciones y regularizaciones. Defensa en juicios tributarios y penas pecuniarias.",
    fotos: [media("escritorio.png"), media("biblioteca.png")],
    coord: [-33.437, -70.65],
  },
  {
    id: "internacional",
    ref: "AC·06",
    titulo: "Inversiones extranjeras",
    operacion: "arriendo",
    tipo: "Corporativo",
    comuna: "Santiago",
    precioUF: 2016,
    gastosComunes: 0,
    dormitorios: 1,
    banos: 0,
    m2: 90,
    estacionamientos: 0,
    anio: 2016,
    descripcion:
      "Ingreso de capitales, constitución de vehículos de inversión y visas de inversores. El punto de partida legal en Chile para empresas y personas del exterior.",
    fotos: [media("expediente.png")],
    coord: [-33.438, -70.652],
  },
];

export const cifras = [
  { valor: 28, sufijo: "", etiqueta: "Años de ejercicio", detalle: "Fundado en 1996" },
  { valor: 310, sufijo: "", etiqueta: "Clientes activos", detalle: "Empresas y familias" },
  { valor: 1710, sufijo: "+", etiqueta: "Casos gestionados", detalle: "Asesoría y contencioso" },
  { valor: 6, sufijo: "", etiqueta: "Áreas", detalle: "Coordinadas entre sí" },
];

export const cartera = [
  { n: "01", titulo: "Retainer mensual", texto: "Abogado asignado, consultas y contratos ilimitados con cuenta mensual detallada.", pie: "Desde UF 6/mes" },
  { n: "02", titulo: "Proyectos", texto: "Compras, constituciones y reestructuraciones cotizadas por hito.", pie: "Honorario por proyecto" },
  { n: "03", titulo: "Litigio", texto: "Juicios civiles, laborales y tributarios con informe mensual de avance.", pie: "Por etapa" },
  { n: "04", titulo: "Consultorías", texto: "Charlas y capacitaciones para jefaturas y equipos de cumplimiento.", pie: "Desde UF 4" },
];

export const metodo = [
  { n: "01", titulo: "Consulta inicial sin costo", texto: "Escuchamos el asunto y enviamos un correo con alcance, plazo y honorario. Si no procede, se lo decimos ahí." },
  { n: "02", titulo: "Plan de trabajo", texto: "Para cada caso: hitos, responsables y costos. Usted aprueba el plan antes de que parta el trabajo." },
  { n: "03", titulo: "Ejecución informada", texto: "Cuenta mensual con horas y gestiones. Cada correo nuestro responde 'qué hice, qué sigue, qué falta de su parte'." },
  { n: "04", titulo: "Cierre documentado", texto: "Todo caso termina con un informe de cierre y la carpeta digital completa entregada al cliente." },
];

export const equipo = [
  { iniciales: "JA", nombre: "Jorge Arrieta", cargo: "Socio fundador · Corporativo", detalle: "28 años. Magíster en derecho económico." },
  { iniciales: "CB", nombre: "Claudia Bermúdez", cargo: "Socia · Laboral", detalle: "Ex relatora de la Corte de Apelaciones." },
  { iniciales: "RT", nombre: "Rodrigo Tapia", cargo: "Socio · Tributario", detalle: "Ex abogado del SII. Fiscalizaciones y reclamos." },
  { iniciales: "MV", nombre: "Marcela Vivanco", cargo: "Asociada · Familia", detalle: "Planificación sucesoria y acuerdos." },
];

export const testimonios = [
  { texto: "El plan de trabajo antes de partir nos permitió decidir con datos. Y la cuenta mensual, dormir tranquilos.", autor: "Comercial del Pacífico", detalle: "Cliente · Retainer" },
  { texto: "La due diligence encontró dos hipotecas no alzadas. Nos ahorró un juicio antes de comprar.", autor: "R. y P. Ovalle", detalle: "Clientes · Inmobiliario" },
  { texto: "Regularizaron nuestra situación previsional en cuatro meses, sin multas.", autor: "Transportes Cuesta", detalle: "Cliente · Tributario" },
];

export const faq = [
  { p: "¿Cómo funciona el retainer mensual?", r: "Un abogado asignado, consultas y revisión de contratos ilimitadas, con cuenta mensual de horas. Se ajusta el valor según el volumen real de cada mes." },
  { p: "¿Atienden personas naturales?", r: "Sí, especialmente en inmobiliario, familia y tributario, con honorarios por gestión." },
  { p: "¿Atienden clientes del extranjero?", r: "Sí: inversionistas y empresas que entran a Chile, con coordinación de visas, capitales y sociedades. Trabajamos en español e inglés." },
  { p: "¿Qué pasa si mi caso es de otra área?", r: "Las seis áreas están coordinadas dentro del estudio. Su abogado responsable coordina con el especialista; usted mantiene un solo interlocutor." },
  { p: "¿Cómo entregan los documentos?", r: "Todo caso cierra con carpeta digital completa e informe de cierre. El historial queda disponible para siempre." },
];

export const valoresGestion = {
  intro: "Cuenta clara desde el primer día.",
  sub: "Cada propuesta incluye plan de trabajo con hitos y costos. La cuenta mensual detalla horas y gestiones.",
  filas: [
    { tipo: "Primera consulta", detalle: "Con alcance y honorario por escrito", venta: "Sin costo", arriendo: "30 minutos" },
    { tipo: "Gestiones", detalle: "Contratos, constituciones, compraventas", venta: "UF 3–10", arriendo: "precio fijo" },
    { tipo: "Litigio", detalle: "Primera instancia", venta: "UF 15–50", arriendo: "por etapa" },
    { tipo: "Retainer", detalle: "Abogado asignado mensual", venta: "UF 6–15/mes", arriendo: "cuenta detallada" },
  ],
};

// Paleta del hero 3D — día claro, torres blancas, acento azul profundo.
export const tema3d = {
  noche: false,
  fondo: "#f6f4ef",
  niebla: "#f6f4ef",
  torre: "#ffffff",
  torreTecho: "#e3e5e2",
  ventanas: "#9fb3c6",
  ventanasAlt: "#c6d2dd",
  acento: "#0d2b45",
  suelo: "#eaece8",
  estrellas: "#45525e",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Un plan antes que una sorpresa.",
  sub: "Primera consulta sin costo: escuchamos su asunto y enviamos alcance, plazo y honorario por escrito. Si no procede, se lo decimos ahí mismo.",
  beneficios: [
    { titulo: "Plan de trabajo escrito", texto: "Hitos, responsables y costos aprobados por usted antes de partir." },
    { titulo: "Cuenta mensual detallada", texto: "Horas y gestiones mes a mes. La cuenta nunca es una sorpresa." },
    { titulo: "Un interlocutor", texto: "Un abogado responsable coordina las áreas que su caso necesite." },
    { titulo: "Cierre documentado", texto: "Carpeta digital completa e informe de cierre en cada caso." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "Un estudio que rinde cuentas.",
  parrafo1:
    "Arrieta & Cía. se fundó en 1996 con una idea importada de la banca: en un servicio profesional, la cuenta también es parte del servicio. Desde entonces, cada cliente recibe plan, cuenta y cierre.",
  parrafo2:
    "Seis áreas coordinadas, cuatro abogados responsables y un estándar único: el cliente debe poder explicar su propio caso. Si no puede, el servicio no está terminado.",
  valores: [
    { titulo: "El cliente entiende su caso", texto: "Explicaciones sin jerga. Si el cliente no lo puede repetir, no quedó claro." },
    { titulo: "Cuenta como servicio", texto: "Horas y gestiones detalladas todos los meses." },
    { titulo: "Áreas coordinadas", texto: "Un interlocutor, toda la especialización del estudio." },
  ],
};
