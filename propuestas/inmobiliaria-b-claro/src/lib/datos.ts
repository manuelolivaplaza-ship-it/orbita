// Alameda Propiedades SpA — todo el contenido del sitio vive acá.

export type Operacion = "venta" | "arriendo";

export interface Propiedad {
  id: string;
  ref: string;
  titulo: string;
  operacion: Operacion;
  tipo: string;
  comuna: string;
  precioUF: number; // venta: precio en UF · arriendo: mensual en UF
  gastosComunes: number; // CLP
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
  nombre: "Alameda",
  sufijo: "Propiedades SpA",
  kicker: "Corredora de propiedades · Santiago",
  claim: ["Comprar bien", "es un oficio."],
  sub: "Venta, arriendo y administración de propiedades en Santiago con una sola promesa: cero sorpresas. Ficha completa antes de la visita, tasación escrita y un ejecutivo que responde con su nombre.",
  ctaPrimario: { texto: "Ver propiedades", a: "/propiedades" },
  ctaSecundario: { texto: "Tasación gratis", a: "/vender" },
  telefono: "+56 2 2840 1175",
  telefonoHref: "tel:+56228401175",
  correo: "hola@alamedapropiedades.cl",
  direccion: "Av. Providencia 1208, of. 42 · Providencia, Santiago",
  horario: "Lunes a viernes 9:00–19:00 · sábados con cita",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la corredora.",
};

export const etiquetas = {
  catalogo: "Propiedades",
  catalogoUno: "Propiedad",
  captacion: "Vender su propiedad",
  nosotros: "Nosotros",
  fichaPlural: "propiedades",
};

export const rutas = {
  inicio: "/",
  catalogo: "/propiedades",
  ficha: "/propiedad",
  captacion: "/vender",
  nosotros: "/nosotros",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Propiedades", a: "/propiedades" },
  { texto: "Vender", a: "/vender" },
  { texto: "Nosotros", a: "/nosotros" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Propiedades", v: "34 en cartera" },
  { k: "Respuesta", v: "mismo día hábil" },
  { k: "Tasación", v: "gratis y escrita" },
];

export const comunas = [
  "Providencia",
  "Ñuñoa",
  "La Reina",
  "Las Condes",
  "Santiago Centro",
  "Macul",
  "San Miguel",
  "Estación Central",
];

export const propiedades: Propiedad[] = [
  {
    id: "depto-manuel-montt",
    ref: "AP·0841",
    titulo: "Departamento en Manuel Montt",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Providencia",
    precioUF: 7400,
    gastosComunes: 145000,
    dormitorios: 2,
    banos: 2,
    m2: 62,
    estacionamientos: 1,
    anio: 2011,
    descripcion:
      "A una cuadra del metro, orientación atardecer. Cocina abierta renovada, logia con lavadora y living con ventanal de corredera. Bodega y estacionamiento en primer subterráneo.",
    fotos: [media("living.png"), media("cocina.png"), media("casa.png")],
    destacada: true,
    coord: [-33.437, -70.621],
  },
  {
    id: "casa-macul-patio",
    ref: "AP·0866",
    titulo: "Casa con patio grande en Macul",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Macul",
    precioUF: 9200,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 118,
    terrenoM2: 220,
    estacionamientos: 2,
    anio: 2008,
    descripcion:
      "Casa de un piso y medio con patio de 90 m² y parrilla. Cocina con comedor de diario, calefacción a leña en el living y dormitorios con closet a medida.",
    fotos: [media("casa.png"), media("living.png"), media("cocina.png")],
    destacada: true,
    coord: [-33.484, -70.598],
  },
  {
    id: "depto-estacion-central",
    ref: "AP·0902",
    titulo: "Departamento nuevo en Estación Central",
    operacion: "arriendo",
    tipo: "Departamento",
    comuna: "Estación Central",
    precioUF: 17,
    gastosComunes: 110000,
    dormitorios: 2,
    banos: 1,
    m2: 52,
    estacionamientos: 0,
    anio: 2023,
    descripcion:
      "Entrega con cocina equipada y closets. A seis cuadras de la Alameda y el metro Universidad de Santiago. Bicicletero y sala de estudio en el piso común.",
    fotos: [media("cocina.png"), media("living.png")],
    destacada: true,
    coord: [-33.449, -70.674],
  },
  {
    id: "depto-nunoa-los-presidentes",
    ref: "AP·0877",
    titulo: "Departamento en barrio Los Presidentes",
    operacion: "arriendo",
    tipo: "Departamento",
    comuna: "Ñuñoa",
    precioUF: 23,
    gastosComunes: 160000,
    dormitorios: 3,
    banos: 2,
    m2: 82,
    estacionamientos: 1,
    anio: 2016,
    descripcion:
      "Barrio tranquilo a cuatro cuadras del Parque Araucano del sur... y del café. Living comedor amplio, terraza francesa y suite principal con walking chico.",
    fotos: [media("living.png"), media("cocina.png"), media("edificio.png")],
    coord: [-33.463, -70.611],
  },
  {
    id: "oficina-san-miguel",
    ref: "AP·0915",
    titulo: "Oficina en San Miguel, línea metro",
    operacion: "arriendo",
    tipo: "Oficina",
    comuna: "San Miguel",
    precioUF: 14,
    gastosComunes: 330000,
    dormitorios: 0,
    banos: 1,
    m2: 68,
    estacionamientos: 2,
    anio: 2014,
    descripcion:
      "Oficina en segundo piso sobre Av. Gran Avenida. Recepción, sala principal cerrada y kitchenette. Ideal mandantes y consultas con flujo de público.",
    fotos: [media("edificio.png"), media("living.png")],
    coord: [-33.5, -70.662],
  },
  {
    id: "casa-reina-adobe",
    ref: "AP·0830",
    titulo: "Casa de adobe restaurada, La Reina",
    operacion: "venta",
    tipo: "Casa",
    comuna: "La Reina",
    precioUF: 14900,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 210,
    terrenoM2: 480,
    estacionamientos: 2,
    anio: 1962,
    descripcion:
      "Adobo de los 60 reforzado y restaurado en 2019. Techos altos, galería vidriada hacia el jardín y cocina nueva en el volumen antiguo. Un estudio de los de antes.",
    fotos: [media("casa.png"), media("cocina.png"), media("living.png")],
    coord: [-33.447, -70.55],
  },
  {
    id: "depto-centro-torre",
    ref: "AP·0928",
    titulo: "Departamento con terraza en el Centro",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Santiago Centro",
    precioUF: 6100,
    gastosComunes: 135000,
    dormitorios: 2,
    banos: 2,
    m2: 68,
    estacionamientos: 1,
    anio: 2018,
    descripcion:
      "Torre nueva con terraza común de 200 m² con quincho. Departamento en piso 11 con vista sur a la cordillera, cocina equipada y pisos de porcelanato continuo.",
    fotos: [media("edificio.png"), media("living.png")],
    coord: [-33.447, -70.649],
  },
  {
    id: "casa-las-condes-pareo",
    ref: "AP·0795",
    titulo: "Casa en pareo con jardín, Las Condes",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Las Condes",
    precioUF: 16800,
    gastosComunes: 95000,
    dormitorios: 4,
    banos: 3,
    m2: 205,
    terrenoM2: 260,
    estacionamientos: 2,
    anio: 2005,
    descripcion:
      "Condominio de seis unidades con piscina y conserje. Casa de dos pisos, dormitorio principal en suite, escritorio y patio con riego. A pasos del colegio y el metro.",
    fotos: [media("casa.png"), media("living.png")],
    coord: [-33.412, -70.562],
  },
];

export const cifras = [
  { valor: 12, sufijo: "", etiqueta: "Años operando", detalle: "SpA constituida en 2014" },
  { valor: 520, sufijo: "+", etiqueta: "Operaciones", detalle: "Ventas, arriendos y tasaciones" },
  { valor: 34, sufijo: "", etiqueta: "Propiedades en cartera", detalle: "Todas con ficha completa" },
  { valor: 8, sufijo: "", etiqueta: "Comunas", detalle: "Del Centro a la zona oriente" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Venta",
    texto: "Casas y departamentos con tasación escrita, fotografía profesional y campaña en portales incluida.",
    pie: "Comisión 1,8% + IVA",
  },
  {
    n: "02",
    titulo: "Arriendo",
    texto: "Selección de arrendatarios con documentación completa y seguro de impago opcional.",
    pie: "1 mensualidad + IVA",
  },
  {
    n: "03",
    titulo: "Administración",
    texto: "Cobro con depósito automático, mantenciones coordinadas y visita anual a cada unidad.",
    pie: "Desde $40.000/mes",
  },
  {
    n: "04",
    titulo: "Tasaciones",
    texto: "Informes comerciales para ventas, créditos, herencias y divisiones. Entrega en 48 horas.",
    pie: "Gratis para mandatos",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "La ficha primero",
    texto: "Antes de publicar: plano, rol de avalúo, gastos comunes y contribuciones. La visita se decide con datos.",
  },
  {
    n: "02",
    titulo: "Fotografía profesional",
    texto: "Sesión diurna y nocturna incluida en el mandato de venta. Sin fotos de celular torcidas.",
  },
  {
    n: "03",
    titulo: "Un ejecutivo por propiedad",
    texto: "El mismo nombre y teléfono desde la tasación hasta la firma. No un call center.",
  },
  {
    n: "04",
    titulo: "Cierre acompañado",
    texto: "Oferta, escritura y entrega coordinadas con abogado y banco. Le acompañamos a la firma.",
  },
];

export const equipo = [
  { iniciales: "VR", nombre: "Verónica Rojas", cargo: "Gerente y corredora", detalle: "12 años de corretaje en Santiago centro y oriente." },
  { iniciales: "FM", nombre: "Felipe Mardones", cargo: "Ejecutivo de arriendos", detalle: "Selección de arrendatarios y renovaciones." },
  { iniciales: "CL", nombre: "Carla Loyola", cargo: "Administración", detalle: "Cobranzas y mantenciones de la cartera." },
  { iniciales: "MT", nombre: "Matías Tapia", cargo: "Tasaciones", detalle: "Constructor. Informes en UF y comparables." },
];

export const testimonios = [
  {
    texto: "Publicaron la casa un martes y el sábado teníamos tres visitas agendadas con la ficha ya leída.",
    autor: "R. Salinas",
    detalle: "Vendedor · Macul",
  },
  {
    texto: "Nunca me pasó que el ejecutivo supiera todo del departamento. Ese fue el diferencial.",
    autor: "J. Contreras",
    detalle: "Arrendatario · Ñuñoa",
  },
  {
    texto: "Tasaron en 48 horas y el informe servía para el banco tal cual. Cero ida y vuelta.",
    autor: "M. y P. Fuenzalida",
    detalle: "Vendedores · La Reina",
  },
];

export const faq = [
  {
    p: "¿Qué incluye la tasación gratis?",
    r: "Visita de medición, comparables de la zona y un informe en UF por escrito, válido 60 días. Gratis con mandato o como primera gestión de venta.",
  },
  {
    p: "¿Puedo arrendar sin aval?",
    r: "Sí, con seguro de impago en reemplazo del aval. El seguro lo cotiza la corredora y el arrendatario lo contrata antes de la entrega.",
  },
  {
    p: "¿Qué pasa si el arrendatario deja de pagar?",
    r: "La administración inicia el descuento voluntario o el juicio según el caso, con cláusula de garantía. Con seguro de impago, la aseguradora cubre hasta 12 meses.",
  },
  {
    p: "¿Publican en portales?",
    r: "Sí: los principales portales nacionales más nuestra base de compradores y arrendatarios calificados.",
  },
  {
    p: "¿Firman mandato exclusivo?",
    r: "Ofrecemos mandato simple y exclusivo. El exclusivo incluye campaña ampliada y reporte quincenal; el simple, publicación estándar.",
  },
];

export const valoresGestion = {
  intro: "Precios que se sostienen solos.",
  sub: "Comisiones sobre el precio en UF, dichas antes del mandato y firmadas por escrito. Sin letras chicas ni cargos por visita.",
  filas: [
    { tipo: "Venta de casas y departamentos", detalle: "Toda comunas de cobertura", venta: "1,8% + IVA", arriendo: "—" },
    { tipo: "Arriendo", detalle: "Con seguro de impago opcional", venta: "—", arriendo: "1 mensualidad + IVA" },
    { tipo: "Administración de arriendo", detalle: "Cobro, mantención y visitas", venta: "—", arriendo: "desde $40.000/mes" },
    { tipo: "Tasación comercial", detalle: "Informe en UF en 48 horas", venta: "$120.000", arriendo: "gratis con mandato" },
  ],
};

// Paleta del hero 3D — día claro para el tema papel.
export const tema3d = {
  noche: false,
  fondo: "#f5f3ee",
  niebla: "#f5f3ee",
  torre: "#ffffff",
  torreTecho: "#e5e2da",
  ventanas: "#a8bcae",
  ventanasAlt: "#c4cfc7",
  acento: "#1f4038",
  suelo: "#e9e7e0",
  estrellas: "#6a675d",
};

export const textoVender = {
  kicker: "Tasación gratis",
  titulo: "Sepa cuánto vale. Por escrito.",
  sub: "Medimos su propiedad, revisamos el rol de avalúo y comparamos ventas reales de su comuna. Informe en UF en 48 horas, gratis y sin compromiso.",
  beneficios: [
    { titulo: "Informe en 48 horas", texto: "Valor en UF con comparables reales, no un rango genérico de portal." },
    { titulo: "Fotografía profesional", texto: "Sesión diurna y nocturna incluida con el mandato de venta." },
    { titulo: "Campaña real", texto: "Portales principales más nuestra base de compradores calificados." },
    { titulo: "Ejecutivo con nombre", texto: "Una persona responsable de su propiedad, no un anónimo." },
  ],
};

export const textoNosotros = {
  kicker: "Nosotros",
  titulo: "Una corredora que contesta.",
  parrafo1:
    "Alameda Propiedades nació en 2014 con una irritación puntual: en este rubro nadie contestaba. Hoy contestamos el mismo día hábil y con la ficha lista antes de que pregunte.",
  parrafo2:
    "Somos cuatro personas y una promesa operativa: cero sorpresas. Cada propiedad se publica con todos sus datos, cada mandato tiene un responsable con nombre y cada cierre se acompaña hasta la entrega.",
  valores: [
    { titulo: "Cero sorpresas", texto: "Todo dato de la propiedad, publicado antes de la primera visita." },
    { titulo: "Contestamos", texto: "Mismo día hábil, con respuestas concretas." },
    { titulo: "Precio con datos", texto: "Tasación escrita con comparables. Sin redondeos al alto." },
  ],
};
