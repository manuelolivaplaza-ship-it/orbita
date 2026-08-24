// ALTAMAR Propiedades — todo el contenido del sitio vive acá.

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
  nombre: "ALTAMAR",
  sufijo: "Propiedades",
  kicker: "Corretaje de propiedades · Vitacura — Las Condes — Lo Barnechea",
  claim: ["Las casas buenas", "no se anuncian.", "Se presentan."],
  sub: "Venta y arriendo de casas de autor, departamentos en altura y oficinas premium. Tasación sin costo, reportada en UF, y una corredora responsable por cada propiedad desde la primera visita hasta la firma.",
  ctaPrimario: { texto: "Ver propiedades", a: "/propiedades" },
  ctaSecundario: { texto: "Solicitar tasación", a: "/vender" },
  telefono: "+56 9 1234 5678",
  telefonoHref: "tel:+56912345678",
  correo: "tasaciones@altamarpropiedades.cl",
  direccion: "Av. Presidente Kennedy 7600, oficina 1104 · Vitacura, Santiago",
  horario: "Lunes a viernes 9:30–19:00 · visitas también los sábados",
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
  { k: "Cartera activa", v: "38 propiedades" },
  { k: "Zona", v: "Nororiente de Santiago" },
  { k: "Tasación", v: "48 h · sin costo" },
];

export const comunas = [
  "Vitacura",
  "Las Condes",
  "Lo Barnechea",
  "La Dehesa",
  "Providencia",
  "Ñuñoa",
  "Santiago Centro",
  "Zapallar",
];

export const propiedades: Propiedad[] = [
  {
    id: "casa-vitacura-rio",
    ref: "AL·2101",
    titulo: "Casa de autor frente al río",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Vitacura",
    precioUF: 24500,
    gastosComunes: 0,
    dormitorios: 5,
    banos: 4,
    m2: 380,
    terrenoM2: 720,
    estacionamientos: 4,
    anio: 2019,
    descripcion:
      "Casa de tres niveles proyectada por estudio local en sitio panión al sur. Doble altura en el living, cocina con isla de mármol, quincho integrado a la terraza y piscina de borde. Todos los ambientes con orientación norte y control de luz por persianas de madera.",
    fotos: [media("casa.png"), media("living.png"), media("cocina.png"), media("terraza.png")],
    destacada: true,
    coord: [-33.393, -70.598],
  },
  {
    id: "depto-piso21-sanhattan",
    ref: "AL·2147",
    titulo: "Piso 21 con terraza en Sanhattan",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Las Condes",
    precioUF: 15800,
    gastosComunes: 380000,
    dormitorios: 3,
    banos: 3,
    m2: 142,
    estacionamientos: 2,
    anio: 2021,
    descripcion:
      "Departamento en piso alto con vista permanente a la cordillera. Terraza de 18 m² con piso de piedra, living comedor de línea continua, cocina alemana equipada y dormitorio principal en suite con walking. Edificio con conserjería 24 h y piscina.",
    fotos: [media("terraza.png"), media("living.png"), media("cocina.png")],
    destacada: true,
    coord: [-33.411, -70.561],
  },
  {
    id: "casa-trapenses",
    ref: "AL·2088",
    titulo: "Casa Los Trapenses, madera y calma",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Lo Barnechea",
    precioUF: 19700,
    gastosComunes: 120000,
    dormitorios: 4,
    banos: 4,
    m2: 310,
    terrenoM2: 540,
    estacionamientos: 3,
    anio: 2017,
    descripcion:
      "Vivienda de estructura metálica y revestimiento de madera termotratada. Living de doble altura con salamandra, escritorio en el segundo nivel y patio trasero con quillayes nativos. Calefacción por radiadores y agua caliente solar.",
    fotos: [media("casa.png"), media("cocina.png"), media("living.png")],
    destacada: true,
    coord: [-33.356, -70.518],
  },
  {
    id: "oficina-el-golf",
    ref: "AL·2204",
    titulo: "Oficina piso 12 en El Golf",
    operacion: "arriendo",
    tipo: "Oficina",
    comuna: "Las Condes",
    precioUF: 42,
    gastosComunes: 950000,
    dormitorios: 0,
    banos: 2,
    m2: 186,
    estacionamientos: 4,
    anio: 2016,
    descripcion:
      "Planta libre de 186 m² en edificio LEED Gold con doble fachada. Instalación eléctrica y de datos renovada, dos baños y kitchenette. Disponible amoblada para estudio profesional o empresa de servicios.",
    fotos: [media("terraza.png"), media("living.png")],
    coord: [-33.416, -70.555],
  },
  {
    id: "depto-providencia",
    ref: "AL·2210",
    titulo: "Departamento en barrio El Agua",
    operacion: "arriendo",
    tipo: "Departamento",
    comuna: "Providencia",
    precioUF: 28,
    gastosComunes: 210000,
    dormitorios: 2,
    banos: 2,
    m2: 78,
    estacionamientos: 1,
    anio: 2014,
    descripcion:
      "A pasos del metro Manuel Montt, orientación poniente con atardecer sobre la torre Entel. Cocina abierta, logia con lavadora y bodega en primer subterráneo. Edificio con gimnasio y sala multiuso.",
    fotos: [media("living.png"), media("cocina.png")],
    coord: [-33.437, -70.621],
  },
  {
    id: "casa-dehesa",
    ref: "AL·2155",
    titulo: "Casa de adobe recuperada en La Dehesa",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Lo Barnechea",
    precioUF: 17200,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 260,
    terrenoM2: 980,
    estacionamientos: 3,
    anio: 2011,
    descripcion:
      "Rehabilitación de casa de adobe de los años 60 con estructura sísmica nueva. Muros de tapial visto, techos altos y galería de vidrio hacia el jardín. Terreno con árboles adultos y riego automático.",
    fotos: [media("casa.png"), media("terraza.png")],
    coord: [-33.346, -70.577],
  },
  {
    id: "depto-nunoa",
    ref: "AL·2231",
    titulo: "Departamento nuevo en Ñuñoa",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Ñuñoa",
    precioUF: 8900,
    gastosComunes: 165000,
    dormitorios: 2,
    banos: 2,
    m2: 66,
    estacionamientos: 1,
    anio: 2024,
    descripcion:
      "Entrega inmediata en proyecto de 8 pisos con fachada de ladrillo. Living con ventanal de piso a techo, cocina equipada con horno y encimera de inducción, y terraza francesa. A cuatro cuadras del Parque Estrella Sur.",
    fotos: [media("cocina.png"), media("living.png")],
    coord: [-33.463, -70.611],
  },
  {
    id: "oficina-centro",
    ref: "AL·2240",
    titulo: "Oficina en torre de encomienda, Centro",
    operacion: "arriendo",
    tipo: "Oficina",
    comuna: "Santiago Centro",
    precioUF: 18,
    gastosComunes: 420000,
    dormitorios: 0,
    banos: 1,
    m2: 84,
    estacionamientos: 1,
    anio: 2008,
    descripcion:
      "Planta de 84 m² con vista a la Bandeja O'Higgins. Instalación renovada, recepción, dos salas cerradas y cocina. Ideal consultas y mandantes institucionales.",
    fotos: [media("living.png")],
    coord: [-33.444, -70.654],
  },
];

export const cifras = [
  { valor: 18, sufijo: "", etiqueta: "Años operando", detalle: "Desde 2007 en el mercado alto de Santiago" },
  { valor: 640, sufijo: "+", etiqueta: "Propiedades gestionadas", detalle: "Casas, departamentos y oficinas" },
  { valor: 210, sufijo: " mil", etiqueta: "M² gestionados", detalle: "Superficie útil bajo administración" },
  { valor: 7, sufijo: "", etiqueta: "Comunas cubiertas", detalle: "De Vitacura a Zapallar y del centro a La Dehesa" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Casas de autor",
    texto: "Propiedades únicas en Vitacura, Lo Barnechea y La Dehesa. Difusión discreta entre compradores calificados y visitas solo con cita.",
    pie: "Venta · 4 a 9 meses de campaña",
  },
  {
    n: "02",
    titulo: "Departamentos en altura",
    texto: "Pisos altos en la franja El Golf — Manquehue. Fotografía nocturna, planos medidos en terreno y dossier con gastos comunes reales.",
    pie: "Venta y arriendo · campaña 60 a 90 días",
  },
  {
    n: "03",
    titulo: "Oficinas premium",
    texto: "Oficinas en edificios certificados para profesionales y empresas. Estudio de uso de suelo y carta de comunidad incluidos.",
    pie: "Arriendo en UF/m² · contratos a 2 años o más",
  },
  {
    n: "04",
    titulo: "Administración de arriendos",
    texto: "Selección de arrendatarios con documentación completa, cobro mensual con depósito automático y visitas anuales a la propiedad.",
    pie: "Desde $45.000 mensuales por unidad",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Tasación en terreno",
    texto: "Medimos la propiedad, revisamos el rol de avalúo y comparamos ventas reales de los últimos 12 meses en la misma zona. Sale en UF, por escrito, sin costo ni compromiso.",
  },
  {
    n: "02",
    titulo: "Dossier y difusión",
    texto: "Fotografía editorial nocturna, plano acotado y ficha con gastos comunes, contribuciones y bodega/estacionamiento. Publicación en portales más difusión directa entre nuestros compradores.",
  },
  {
    n: "03",
    titulo: "Visitas con corredora responsable",
    texto: "Cada visita la conduce la misma corredora que firmó el mandato. Recibimos reporte posterior con los comentarios reales de quien visitó.",
  },
  {
    n: "04",
    titulo: "Oferta, escritura y cierre",
    texto: "Revisamos la oferta, coordinamos con el abogado redactor y el banco, y acompañamos la firma en el Conservador de Bienes Raíces. Cierre promedio: 30 a 45 días desde la aceptación.",
  },
];

export const equipo = [
  { iniciales: "AC", nombre: "Antonia Cifuentes", cargo: "Corredora de propiedades · Fundadora", detalle: "18 años en corretaje premium. Responsable de las casas de autor." },
  { iniciales: "MR", nombre: "Matías Riesco", cargo: "Corredor de propiedades", detalle: "Especialista en departamentos en altura y oficinas en El Golf." },
  { iniciales: "CP", nombre: "Camila Pinto", cargo: "Administración de arriendos", detalle: "Selección de arrendatarios y cobranza de la cartera administrada." },
  { iniciales: "JG", nombre: "Jorge Gajardo", cargo: "Tasaciones y estudios", detalle: "Ingeniero civil. Tasaciones en UF y comparables de mercado." },
];

export const testimonios = [
  {
    texto: "Vendieron nuestra casa en Los Trapenses en 74 días y sobre la tasación. Nunca sentimos que nos apuraran a bajar el precio.",
    autor: "Familia Undurraga",
    detalle: "Vendedores · Lo Barnechea",
  },
  {
    texto: "La ficha con los gastos comunes reales antes de la primera visita nos ahorró tres meses de visitas inútiles.",
    autor: "R. y P. Sanfuentes",
    detalle: "Compradores · Departamento El Golf",
  },
  {
    texto: "Nos administran nueve arriendos hace cuatro años. Cobran puntual, visitan las propiedades y reportan todo.",
    autor: "Inversiones Santa Elena",
    detalle: "Mandantes · Administración",
  },
];

export const faq = [
  {
    p: "¿Qué documentación piden para arrendar?",
    r: "Para el arrendatario: cédula vigente, últimas 3 liquidaciones o declaración de impuestos, y certificado de cotizaciones. Como aval aceptamos persona natural con renta demostrable o seguro de impago.",
  },
  {
    p: "¿Quién paga gastos comunes y contribuciones?",
    r: "En venta, se prorratean al día de la escritura. En arriendo, los gastos comunes los paga el arrendatario salvo pacto contrario. Cada ficha los anota antes de la primera visita.",
  },
  {
    p: "¿Por qué piden el rol de avalúo si ya tengo tasación?",
    r: "El rol es la base tributaria; nuestra tasación comercial refleja lo que el mercado pagó en los últimos 12 meses. Usamos ambas: el rol para lo legal, la tasación para el precio.",
  },
  {
    p: "¿Cuánto toma un crédito hipotecario desde la oferta?",
    r: "Con pre-aprobación, entre 30 y 45 días hasta la firma. Sin pre-aprobación, cuente con 60. Coordinamos directo con los ejecutivos para que no se estire.",
  },
  {
    p: "¿Qué pasa si no se vende en el plazo del mandato?",
    r: "El mandato dura 90 días y se renueva por escrito. Si la campaña pactada no se cumplió, no cobramos. Nunca bajamos el precio solo para cerrar rápido.",
  },
];

export const valoresGestion = {
  intro: "La comisión, dicha antes del mandato.",
  sub: "Porcentajes sobre precio de venta en UF y comisión de arriendo por contrato. La cifra exacta va firmada en el mandato de corretaje — no cambia sin su autorización expresa.",
  filas: [
    { tipo: "Casa de autor", detalle: "Vitacura, Lo Barnechea, La Dehesa · sobre 300 m² de terreno", venta: "2,0% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Departamento en altura", detalle: "El Golf, Manquehue, Sanhattan · pisos altos con vista", venta: "1,8% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Oficina premium", detalle: "Edificios certificados · contratos desde 2 años", venta: "2,0% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Administración de arriendo", detalle: "Selección, cobro y visitas anuales", venta: "—", arriendo: "desde $45.000/mes" },
  ],
};

// Paleta del hero 3D (torres) — nocturna para el tema oscuro.
export const tema3d = {
  noche: true,
  fondo: "#0d1012",
  niebla: "#0d1012",
  torre: "#161b20",
  torreTecho: "#0d1012",
  ventanas: "#e8b563",
  ventanasAlt: "#f4d9a4",
  acento: "#c9a76a",
  suelo: "#0b0e10",
  estrellas: "#8fa3b8",
};

export const textoVender = {
  kicker: "Tasación sin costo",
  titulo: "Su propiedad vale lo que dice el mercado. Vamos a medirlo.",
  sub: "Agende una visita: medimos la propiedad, revisamos el rol de avalúo y entregamos una tasación en UF por escrito dentro de 48 horas.",
  beneficios: [
    { titulo: "Tasación en UF por escrito", texto: "Comparables reales de los últimos 12 meses en su misma zona, no un cálculo genérico de portal." },
    { titulo: "Dossier editorial incluido", texto: "Fotografía nocturna, plano acotado y ficha con gastos comunes y contribuciones. Sin costo adicional." },
    { titulo: "Campaña con plazos escritos", texto: "Difusión, reportes quincenales y cantidad de visitas pactadas en el mandato. Si no se cumple, no se cobra." },
    { titulo: "Una corredora responsable", texto: "La misma persona desde la primera visita hasta la firma en el Conservador." },
  ],
};

export const textoNosotros = {
  kicker: "La corredora",
  titulo: "Un estudio chico a propósito.",
  parrafo1:
    "ALTAMAR nació en 2007 con una idea simple: pocas propiedades, bien presentadas, con toda la información antes de la primera visita. Hoy somos cuatro personas que gestionamos una cartera acotada en el nororiente de Santiago.",
  parrafo2:
    "No operamos por volumen. Cada mandato lo firma una corredora que responde por él, y cada ficha se arma con los datos que a nosotros nos gustaría ver antes de comprar: rol de avalúo, gastos comunes reales y planos medidos en terreno.",
  valores: [
    { titulo: "Información antes que visitas", texto: "Toda propiedad se publica con sus números completos. Las visitas son para decidir, no para descubrir." },
    { titulo: "Pocas propiedades, bien llevadas", texto: "Cartera acotada para que cada mandato reciba campaña real y reportes quincenales." },
    { titulo: "El precio lo pone el mercado", texto: "Tasamos con ventas reales. Nunca presionamos a bajar solo para cerrar rápido." },
  ],
};
