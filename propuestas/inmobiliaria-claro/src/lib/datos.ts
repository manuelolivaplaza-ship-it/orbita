// Meridiano Propiedades — todo el contenido del sitio vive acá.

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
  nombre: "Meridiano",
  sufijo: "Propiedades",
  kicker: "Corretaje en Santiago · desde 1998",
  claim: ["La dirección", "exacta."],
  sub: "Corretaje de casas, departamentos y oficinas con una regla simple: toda la información sobre la mesa antes de la primera visita. Tasación escrita, ficha completa y un corredor responsable por propiedad.",
  ctaPrimario: { texto: "Ver propiedades", a: "/propiedades" },
  ctaSecundario: { texto: "Quiero vender", a: "/vender" },
  telefono: "+56 2 2840 1175",
  telefonoHref: "tel:+56228401175",
  correo: "corretaje@meridianopropiedades.cl",
  direccion: "Av. Apoquindo 4700, of. 302 · Las Condes, Santiago",
  horario: "Lunes a viernes 9:00–18:30 · sábados con cita",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la corredora.",
};

export const etiquetas = {
  catalogo: "Propiedades",
  catalogoUno: "Propiedad",
  captacion: "Vender su propiedad",
  nosotros: "La corredora",
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
  { k: "Años en Santiago", v: "27" },
  { k: "Cartera activa", v: "41 propiedades" },
  { k: "Tasación", v: "sin costo" },
];

export const comunas = [
  "Las Condes",
  "Vitacura",
  "Lo Barnechea",
  "Providencia",
  "La Reina",
  "Ñuñoa",
  "Santiago Centro",
  "La Florida",
];

export const propiedades: Propiedad[] = [
  {
    id: "casa-jardin-norte",
    ref: "MP·041",
    titulo: "Casa con jardín norte, Vitacura",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Vitacura",
    precioUF: 18400,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 240,
    terrenoM2: 420,
    estacionamientos: 3,
    anio: 2010,
    descripcion:
      "Casa de dos pisos con todos los ambientes al jardín norte. Living comedor de línea continua, cocina con comedor de diario y patio con quillayes. Calefacción central y doble vidrio en todo el oriente.",
    fotos: [media("casa.png"), media("living.png"), media("cocina.png")],
    destacada: true,
    coord: [-33.393, -70.598],
  },
  {
    id: "depto-edificio-alto",
    ref: "MP·077",
    titulo: "Departamento en piso 14, Las Condes",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Las Condes",
    precioUF: 9600,
    gastosComunes: 195000,
    dormitorios: 3,
    banos: 2,
    m2: 86,
    estacionamientos: 1,
    anio: 2012,
    descripcion:
      "Vista despejada al oriente desde el living y la suite. Cocina equipada con horno y encimera, logia con lavadora-secadora y bodega. Edificio con piscina y sala de reuniones.",
    fotos: [media("living.png"), media("cocina.png"), media("edificio.png")],
    destacada: true,
    coord: [-33.411, -70.561],
  },
  {
    id: "oficina-torre-golf",
    ref: "MP·112",
    titulo: "Oficina en torre El Golf",
    operacion: "arriendo",
    tipo: "Oficina",
    comuna: "Las Condes",
    precioUF: 24,
    gastosComunes: 580000,
    dormitorios: 0,
    banos: 2,
    m2: 110,
    estacionamientos: 3,
    anio: 2009,
    descripcion:
      "Planta media en torre de oficinas con lobby de doble altura. Dos salas cerradas, kitchenette y instalación de datos a cada puesto. Estacionamientos en segundo subterráneo.",
    fotos: [media("edificio.png"), media("living.png")],
    destacada: true,
    coord: [-33.416, -70.555],
  },
  {
    id: "casa-familia-reina",
    ref: "MP·089",
    titulo: "Casa familiar en La Reina",
    operacion: "venta",
    tipo: "Casa",
    comuna: "La Reina",
    precioUF: 13800,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 190,
    terrenoM2: 280,
    estacionamientos: 2,
    anio: 2004,
    descripcion:
      "Casa sólida de un piso ampliado en 2018: dormitorio principal en suite, escritorio y living de invierno con estufa. Jardín maduro con riego y pérgola de algarrobo.",
    fotos: [media("casa.png"), media("cocina.png")],
    coord: [-33.447, -70.55],
  },
  {
    id: "depto-nunoa-joven",
    ref: "MP·118",
    titulo: "Departamento en Ñuñoa, a metro",
    operacion: "arriendo",
    tipo: "Departamento",
    comuna: "Ñuñoa",
    precioUF: 21,
    gastosComunes: 150000,
    dormitorios: 2,
    banos: 1,
    m2: 58,
    estacionamientos: 1,
    anio: 2019,
    descripcion:
      "A 300 m del metro Ñuñoa. Living con ventanal completo, cocina abierta equipada y terraza francesa. Ideal primera vivienda o inversión: arriendos de la zona al 100% del avalúo.",
    fotos: [media("living.png"), media("cocina.png")],
    coord: [-33.463, -70.611],
  },
  {
    id: "depto-centro-historico",
    ref: "MP·126",
    titulo: "Departamento en edificio patrimonial, Centro",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Santiago Centro",
    precioUF: 5200,
    gastosComunes: 120000,
    dormitorios: 2,
    banos: 1,
    m2: 64,
    estacionamientos: 0,
    anio: 1958,
    descripcion:
      "Piso alto en edificio de 1958 con techos de 3,1 m y ventanales originales restaurados. Cocina y baño renovados en 2022. A dos cuadras del Mercado Central.",
    fotos: [media("living.png"), media("edificio.png")],
    coord: [-33.44, -70.652],
  },
  {
    id: "casa-florida-pool",
    ref: "MP·103",
    titulo: "Casa con piscina en La Florida",
    operacion: "venta",
    tipo: "Casa",
    comuna: "La Florida",
    precioUF: 8600,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 130,
    terrenoM2: 200,
    estacionamientos: 2,
    anio: 2016,
    descripcion:
      "Casa aislada en condominio pequeño. Piscina compartida, quincho privado y patio techado. Dormitorio principal con walking closet. A pasos del Parque Vicuña Mackenna.",
    fotos: [media("casa.png"), media("living.png")],
    coord: [-33.514, -70.593],
  },
  {
    id: "oficina-providencia",
    ref: "MP·131",
    titulo: "Oficina en Providencia, línea metro",
    operacion: "arriendo",
    tipo: "Oficina",
    comuna: "Providencia",
    precioUF: 16,
    gastosComunes: 390000,
    dormitorios: 0,
    banos: 1,
    m2: 76,
    estacionamientos: 1,
    anio: 2007,
    descripcion:
      "Consulta u oficina en edificio de uso mixto sobre Av. Providencia. Recepción, dos salas y baño privado. Excelente locomoción y servicios al paso.",
    fotos: [media("edificio.png")],
    coord: [-33.437, -70.621],
  },
];

export const cifras = [
  { valor: 27, sufijo: "", etiqueta: "Años en Santiago", detalle: "Corretaje continuo desde 1998" },
  { valor: 980, sufijo: "+", etiqueta: "Operaciones cerradas", detalle: "Ventas, arriendos y administración" },
  { valor: 41, sufijo: "", etiqueta: "Propiedades en cartera", detalle: "Solo las que podemos atender bien" },
  { valor: 8, sufijo: "", etiqueta: "Comunas", detalle: "Del Centro al sector oriente" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Casas",
    texto: "Casas aisladas y en condominio en Vitacura, La Reina, La Florida. Ficha con plano, rol y gastos antes de la visita.",
    pie: "Venta · mandato de 90 días",
  },
  {
    n: "02",
    titulo: "Departamentos",
    texto: "Desde pisos patrimoniales en el Centro hasta proyectos nuevos en Ñuñoa y Las Condes, con dossier de copropiedad.",
    pie: "Venta y arriendo",
  },
  {
    n: "03",
    titulo: "Oficinas y consultas",
    texto: "Plantas y consultas para profesionales, con estudio de uso de suelo incluido.",
    pie: "Arriendo en UF/m²",
  },
  {
    n: "04",
    titulo: "Administración",
    texto: "Arriendos administrados: selección, cobro y visitas periódicas a cada propiedad.",
    pie: "Desde $40.000 por unidad",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Tasación sin costo",
    texto: "Medición en terreno, rol de avalúo y comparables de la zona. Informe en UF por escrito, sin compromiso.",
  },
  {
    n: "02",
    titulo: "Ficha completa",
    texto: "Fotografía diurna y nocturna, plano acotado y gastos comunes, contribuciones y reglamento antes de publicar.",
  },
  {
    n: "03",
    titulo: "Campaña y visitas",
    texto: "Portales, difusión entre nuestra base y visitas con el mismo corredor del mandato, con cita.",
  },
  {
    n: "04",
    titulo: "Cierre",
    texto: "Oferta revisada, abogado redactor y banco coordinados. Acompañamos hasta la firma.",
  },
];

export const equipo = [
  { iniciales: "HB", nombre: "Hernán Bío Bío", cargo: "Corredor de propiedades · Fundador", detalle: "27 años de corretaje en Santiago." },
  { iniciales: "PT", nombre: "Paula Torres", cargo: "Corredora de propiedades", detalle: "Departamentos y oficinas en la zona oriente." },
  { iniciales: "DG", nombre: "Diego Gajardo", cargo: "Administración de arriendos", detalle: "Cobranza y renovaciones de la cartera." },
  { iniciales: "AN", nombre: "Andrea Nuñez", cargo: "Tasaciones y fichas", detalle: "Arquitecta. Planos y dossiers de cada propiedad." },
];

export const testimonios = [
  {
    texto: "La ficha tenía hasta la fecha del último gasfiter. Vendimos en cinco semanas.",
    autor: "Familia Riesco",
    detalle: "Vendedores · Vitacura",
  },
  {
    texto: "Nos mostraron tres propiedades, no treinta. La tercera fue la nuestra.",
    autor: "J. y M. Fuentes",
    detalle: "Compradores · La Reina",
  },
  {
    texto: "Siete años administrando nuestros arriendos. Cero carpas: todo por correo y a tiempo.",
    autor: "Spa Inversiones Lira",
    detalle: "Mandantes · Administración",
  },
];

export const faq = [
  {
    p: "¿Qué necesito para vender mi propiedad?",
    r: "Copia de la escritura, certificado de dominio vigente, avalúo fiscal y cuentas al día de gastos comunes si corresponde. Nosotros armamos el resto del expediente.",
  },
  {
    p: "¿Cuánto demora la venta?",
    r: "En la zona oriente, entre 60 y 120 días desde la publicación con precio correcto. La tasación escrita evita los 60 días de sobreprecio que cuestan visitas.",
  },
  {
    p: "¿Cómo agendo visitas?",
    r: "Con cita, con el mismo corredor del mandato. Los fines de semana se concentran las visitas a casas; los departamentos, de lunes a viernes.",
  },
  {
    p: "¿Trabajan con créditos subsidiarios?",
    r: "Sí: coordinamos la tasación del banco y la revisión de la propiedad para el subsidio, con ejecutivos de tres bancos.",
  },
  {
    p: "¿Qué comisión cobran?",
    r: "Sobre el precio de venta en UF, por escrito en el mandato antes de publicar. Sin cargos por visitas ni informes.",
  },
];

export const valoresGestion = {
  intro: "Comisiones claras, por escrito.",
  sub: "Sobre el precio de venta en UF o una mensualidad en arriendo. Firmadas en el mandato antes de publicar — no cambian después.",
  filas: [
    { tipo: "Casas", detalle: "Vitacura, La Reina, La Florida y más", venta: "1,8% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Departamentos", detalle: "Centro, Ñuñoa y zona oriente", venta: "1,8% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Oficinas", detalle: "Plantas y consultas", venta: "2,0% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Administración de arriendo", detalle: "Selección, cobro y visitas", venta: "—", arriendo: "desde $40.000/mes" },
  ],
};

// Paleta del hero 3D — día claro para el tema papel.
export const tema3d = {
  noche: false,
  fondo: "#f4f3ef",
  niebla: "#f4f3ef",
  torre: "#ffffff",
  torreTecho: "#e7e4dc",
  ventanas: "#aebfcd",
  ventanasAlt: "#c8d4de",
  acento: "#1f3a5f",
  suelo: "#e9e6df",
  estrellas: "#8a867c",
};

export const textoVender = {
  kicker: "Vender su propiedad",
  titulo: "El precio correcto se escribe. Nosotros lo calculamos.",
  sub: "Tasación en terreno sin costo: medimos, revisamos el rol y comparamos ventas reales de su zona. Informe en UF por escrito en 48 horas.",
  beneficios: [
    { titulo: "Tasación en UF por escrito", texto: "Con comparables de su comuna y su tipología. Válida 60 días." },
    { titulo: "Ficha profesional", texto: "Fotografía diurna y nocturna, plano acotado y dossier de copropiedad." },
    { titulo: "Un corredor responsable", texto: "El mismo desde la tasación hasta la firma, con su teléfono directo." },
    { titulo: "Reportes quincenales", texto: "Visitas, comentarios y ajustes, cada 15 días en su correo." },
  ],
};

export const textoNosotros = {
  kicker: "La corredora",
  titulo: "Veintisiete años diciendo la verdad.",
  parrafo1:
    "Meridiano existe desde 1998, cuando el corretaje en Santiago se hacía con cuaderno y buena memoria. La tecnología cambió; la regla no: toda la información sobre la mesa antes de la primera visita.",
  parrafo2:
    "Somos un equipo pequeño a propósito: atendemos las propiedades que podemos atender bien. Cada ficha se arma como si la fuéramos a comprar nosotros, y cada mandato lo firma un corredor que responde por él.",
  valores: [
    { titulo: "Información primero", texto: "Ficha completa antes de la visita: plano, gastos, contribuciones y reglamento." },
    { titulo: "Cartera atendible", texto: "Menos propiedades, mejor gestionadas. Decimos no cuando hay que decir no." },
    { titulo: "Precio con fundamento", texto: "Tasación escrita con comparables. Ni optimismo ni pesimismo: datos." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "casa.png", marco: false, caption: "" };
