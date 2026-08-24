// CUMBRES Propiedades — todo el contenido del sitio vive acá.

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
  nombre: "CUMBRES",
  sufijo: "Propiedades",
  kicker: "Corretaje y administración · Las Condes — Lo Barnechea — Vitacura",
  claim: ["Propiedades que se", "muestran de noche", "y se firman con claridad."],
  sub: "Corretaje de casas, departamentos y oficinas en el nororiente de Santiago, con cartera acotada y un responsable por mandato. Tasación escrita en UF, fotografía nocturna incluida y reportes quincenales.",
  ctaPrimario: { texto: "Ver propiedades", a: "/propiedades" },
  ctaSecundario: { texto: "Solicitar tasación", a: "/vender" },
  telefono: "+56 9 8765 4321",
  telefonoHref: "tel:+56987654321",
  correo: "tasaciones@cumbrespropiedades.cl",
  direccion: "Camino El Alba 1234, of. 42 · Las Condes, Santiago",
  horario: "Lunes a viernes 9:30–18:30 · sábados con cita",
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
  { k: "Cartera activa", v: "29 propiedades" },
  { k: "Promedio de venta", v: "86 días" },
  { k: "Tasación", v: "48 h · sin costo" },
];

export const comunas = [
  "Las Condes",
  "Lo Barnechea",
  "Vitacura",
  "La Dehesa",
  "Providencia",
  "La Reina",
  "Peñalolén",
  "Santiago Oriente",
];

export const propiedades: Propiedad[] = [
  {
    id: "casa-fachada-norte",
    ref: "CU·1147",
    titulo: "Casa de autor con fachada norte",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Lo Barnechea",
    precioUF: 21900,
    gastosComunes: 0,
    dormitorios: 5,
    banos: 4,
    m2: 352,
    terrenoM2: 610,
    estacionamientos: 4,
    anio: 2018,
    descripcion:
      "Volumen de hormigón y madera con doble orientación. Living de 62 m² con estufa a leña, cocina abierta con isla de piedra y dormitorio principal en el tercer nivel con vista a la cordillera. Jardín con riego automático y quincho cerrado.",
    fotos: [media("fachada.png"), media("living.png"), media("cocina.png"), media("terraza.png")],
    destacada: true,
    coord: [-33.356, -70.518],
  },
  {
    id: "depto-piso-alto-manquehue",
    ref: "CU·1203",
    titulo: "Piso alto a una cuadra del Manquehue",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Las Condes",
    precioUF: 12400,
    gastosComunes: 310000,
    dormitorios: 3,
    banos: 2,
    m2: 108,
    estacionamientos: 2,
    anio: 2015,
    descripcion:
      "Living comedor con ventanal de corredera hacia terraza de 9 m². Cocina renovada en 2023 con equipos empotrados. Dormitorio principal en suite. Edificio con piscina, gimnasio y bicicletero.",
    fotos: [media("living.png"), media("terraza.png"), media("cocina.png")],
    destacada: true,
    coord: [-33.412, -70.562],
  },
  {
    id: "depto-terraza-la-dehesa",
    ref: "CU·0982",
    titulo: "Departamento con terraza en La Dehesa",
    operacion: "arriendo",
    tipo: "Departamento",
    comuna: "Lo Barnechea",
    precioUF: 32,
    gastosComunes: 240000,
    dormitorios: 3,
    banos: 3,
    m2: 124,
    estacionamientos: 2,
    anio: 2012,
    descripcion:
      "Orientación oriente con amanecer sobre el cordón. Terraza de 22 m² amoblada, living con estufa de doble cara y cocina con comedor de diario. Bodega y dos estacionamientos de visita.",
    fotos: [media("terraza.png"), media("living.png"), media("cocina.png")],
    destacada: true,
    coord: [-33.346, -70.577],
  },
  {
    id: "casa-cocina-isla",
    ref: "CU·1168",
    titulo: "Casa remodelada, cocina de isla",
    operacion: "venta",
    tipo: "Casa",
    comuna: "La Reina",
    precioUF: 15600,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 240,
    terrenoM2: 360,
    estacionamientos: 2,
    anio: 2006,
    descripcion:
      "Remodelación integral de 2022: cocina con isla de piedra y electrodomésticos nuevos, baños con grifería de línea, calefacción por piso radiante. Patio trasero con parrilla y citófono nuevo.",
    fotos: [media("cocina.png"), media("living.png"), media("fachada.png")],
    coord: [-33.447, -70.55],
  },
  {
    id: "depto-providencia-norte",
    ref: "CU·1225",
    titulo: "Departamento orientación norte, Providencia",
    operacion: "venta",
    tipo: "Departamento",
    comuna: "Providencia",
    precioUF: 9700,
    gastosComunes: 185000,
    dormitorios: 2,
    banos: 2,
    m2: 72,
    estacionamientos: 1,
    anio: 2013,
    descripcion:
      "Planta eficiente a tres cuadras del metro Los Leones. Living con ventanales de piso a techo, cocina equipada y logia cubierta. Bodega en subterráneo incluida.",
    fotos: [media("living.png"), media("cocina.png")],
    coord: [-33.419, -70.606],
  },
  {
    id: "oficina-mq-sur",
    ref: "CU·1190",
    titulo: "Oficina en Manquehue Sur",
    operacion: "arriendo",
    tipo: "Oficina",
    comuna: "Las Condes",
    precioUF: 26,
    gastosComunes: 640000,
    dormitorios: 0,
    banos: 2,
    m2: 120,
    estacionamientos: 3,
    anio: 2010,
    descripcion:
      "Planta de 120 m² con recepción, tres salas cerradas y sala de reuniones con vidrio. Instalación eléctrica y de datos certificada. Edificio con respaldo eléctrico.",
    fotos: [media("terraza.png"), media("living.png")],
    coord: [-33.417, -70.567],
  },
  {
    id: "casa-penalolen",
    ref: "CU·1212",
    titulo: "Casa nueva en Peñalolén alto",
    operacion: "venta",
    tipo: "Casa",
    comuna: "Peñalolén",
    precioUF: 7800,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 118,
    terrenoM2: 160,
    estacionamientos: 2,
    anio: 2024,
    descripcion:
      "Proyecto de dos pisos con terminaciones de primera: porcelanato en áreas comunes, cocina equipada, clapboard exterior y terraza en el segundo nivel con vista a la cordillera.",
    fotos: [media("fachada.png"), media("cocina.png")],
    coord: [-33.499, -70.53],
  },
  {
    id: "depto-vitacura-bosque",
    ref: "CU·1180",
    titulo: "Departamento frente al bosque, Vitacura",
    operacion: "arriendo",
    tipo: "Departamento",
    comuna: "Vitacura",
    precioUF: 38,
    gastosComunes: 290000,
    dormitorios: 3,
    banos: 3,
    m2: 138,
    estacionamientos: 2,
    anio: 2009,
    descripcion:
      "Frente a área verde con ningún vecino por construir. Living de 40 m², suite con walking y segundo baño completo. Conserjería 24 h y piscina para los meses de verano.",
    fotos: [media("living.png"), media("terraza.png"), media("cocina.png")],
    coord: [-33.393, -70.598],
  },
];

export const cifras = [
  { valor: 14, sufijo: "", etiqueta: "Años de corretaje", detalle: "Operando desde 2011 en Santiago Oriente" },
  { valor: 410, sufijo: "+", etiqueta: "Mandatos cerrados", detalle: "Ventas, arriendos y administración" },
  { valor: 86, sufijo: " días", etiqueta: "Promedio de venta", detalle: "Mediana de cartera propia, 2023–2025" },
  { valor: 6, sufijo: "", etiqueta: "Comunas de foco", detalle: "De Providencia a Peñalolén alto" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Casas y pareo",
    texto: "Casas aisladas y en pareo en Las Condes, Lo Barnechea y La Reina. Fotografía nocturna y plano acotado en cada ficha.",
    pie: "Venta · campaña de 90 días renovable",
  },
  {
    n: "02",
    titulo: "Departamentos",
    texto: "Pisos medios y altos en la franja Manquehue — El Golf y Vitacura. Dossier con gastos comunes reales antes de la primera visita.",
    pie: "Venta y arriendo · 60 a 90 días",
  },
  {
    n: "03",
    titulo: "Oficinas y consultas",
    texto: "Plantas libres y consultas para profesionales, con estudio de uso de suelo incluido en la gestión.",
    pie: "Arriendo en UF/m² · contratos flexibles",
  },
  {
    n: "04",
    titulo: "Administración",
    texto: "Arriendos administrados de punta a punta: selección de arrendatario, cobro con depósito automático y visita anual.",
    pie: "Desde $42.000 mensuales por unidad",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Visita y tasación escrita",
    texto: "Vamos a la propiedad, medimos, revisamos el rol de avalúo y entregamos tasación en UF por escrito dentro de 48 horas. Sin costo ni compromiso.",
  },
  {
    n: "02",
    titulo: "Ficha y fotografía nocturna",
    texto: "Las casas se muestran de noche: fachada e interiores iluminados, plano acotado y ficha con gastos comunes y contribuciones.",
  },
  {
    n: "03",
    titulo: "Campaña con reportes",
    texto: "Publicación en portales y difusión directa. Reporte quincenal con visitas, comentarios y ajustes recomendados.",
  },
  {
    n: "04",
    titulo: "Cierre acompañado",
    texto: "Oferta revisada, coordinación con abogado redactor y banco, y acompañamiento hasta la firma. Promedio de cierre: 30 a 45 días.",
  },
];

export const equipo = [
  { iniciales: "FD", nombre: "Francisca Dubó", cargo: "Corredora de propiedades · Fundadora", detalle: "14 años de corretaje en Santiago Oriente." },
  { iniciales: "SA", nombre: "Sebastián Aliaga", cargo: "Corredor de propiedades", detalle: "Departamentos y oficinas en la franja Manquehue." },
  { iniciales: "MC", nombre: "Macarena Cárdenas", cargo: "Administración de arriendos", detalle: "Cobranza, visitas anuales y renovaciones." },
  { iniciales: "RV", nombre: "Rodrigo Vera", cargo: "Tasaciones", detalle: "Constructor civil. Comparables y precios en UF." },
];

export const testimonios = [
  {
    texto: "La casa se mostró de noche, como la habíamos soñado. Recibimos tres ofertas en el primer mes.",
    autor: "Familia Larraín",
    detalle: "Vendedores · Lo Barnechea",
  },
  {
    texto: "Llegamos a la primera visita con la ficha completa: gastos comunes, contribuciones y plano. Decidimos ese mismo día.",
    autor: "C. y F. Valdivieso",
    detalle: "Compradores · Las Condes",
  },
  {
    texto: "Administraron nuestro departamento arrendado cuatro años sin un solo día vacío.",
    autor: "M. Ibáñez",
    detalle: "Mandante · Administración",
  },
];

export const faq = [
  {
    p: "¿Por qué muestran las casas de noche?",
    r: "Porque la mayoría de las compradores visita después del trabajo y porque la casa iluminada muestra su mejor cara: fachada, ventanas, jardín. La visita diurna se agenda cuando el comprador ya está interesado, con la ficha completa revisada.",
  },
  {
    p: "¿Qué incluye la tasación sin costo?",
    r: "Visita de medición, revisión del rol de avalúo, comparables de los últimos 12 meses en la zona y un informe en UF por escrito. Válida 60 días.",
  },
  {
    p: "¿Cómo eligen arrendatarios?",
    r: "Documentación completa (identidad, renta y cotizaciones), informe comercial y aval o seguro de impago. El mandante aprueba antes de firmar.",
  },
  {
    p: "¿Qué pasa si la propiedad no se vende en 90 días?",
    r: "Nos sentamos con el reporte de campañas y visitas en la mano: ajustamos precio, mejoramos la ficha o cerramos el mandato sin costo.",
  },
  {
    p: "¿Puedo vender con arriendo vigente?",
    r: "Sí, con cláusula de respeto de arriendo o aviso anticipado según contrato. Lo revisamos con el abogado antes de publicar.",
  },
];

export const valoresGestion = {
  intro: "Valores dichos antes del mandato.",
  sub: "Comisiones sobre precio de venta en UF y arriendos por contrato. La cifra exacta va firmada en el mandato — no cambia después.",
  filas: [
    { tipo: "Casa", detalle: "Las Condes, Lo Barnechea, La Reina, Peñalolén", venta: "1,9% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Departamento", detalle: "Santiago Oriente · pisos medios y altos", venta: "1,8% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Oficina", detalle: "Plantas libres y consultas", venta: "2,0% + IVA", arriendo: "1 mensualidad + IVA" },
    { tipo: "Administración de arriendo", detalle: "Selección, cobro y visitas anuales", venta: "—", arriendo: "desde $42.000/mes" },
  ],
};

// Paleta del hero 3D — noche cálida para el tema oscuro de CUMBRES.
export const tema3d = {
  noche: true,
  fondo: "#100e0b",
  niebla: "#100e0b",
  torre: "#1b1712",
  torreTecho: "#100e0b",
  ventanas: "#e2b26a",
  ventanasAlt: "#f2d5a2",
  acento: "#c9a86b",
  suelo: "#0c0a08",
  estrellas: "#b3a48c",
};

export const textoVender = {
  kicker: "Tasación sin costo",
  titulo: "Su propiedad, medida y tasada por escrito.",
  sub: "Agendamos una visita, medimos la propiedad y entregamos la tasación en UF dentro de 48 horas. Sin compromiso de mandato.",
  beneficios: [
    { titulo: "Informe en UF por escrito", texto: "Comparables reales de su zona y su tipología, no un estimador genérico." },
    { titulo: "Fotografía nocturna incluida", texto: "La casa se muestra de noche, como se vive. Sesión completa sin costo con mandato." },
    { titulo: "Reportes quincenales", texto: "Visitas, comentarios y ajustes recomendados, en su correo cada 15 días." },
    { titulo: "Un responsable por mandato", texto: "La misma persona desde la tasación hasta la firma." },
  ],
};

export const textoNosotros = {
  kicker: "La corredora",
  titulo: "Cartera chica, gestión densa.",
  parrafo1:
    "CUMBRES nació en 2011 como una corredora de barrio para Las Condes y Lo Barnechea. Crecimos despacio y a propósito: hoy gestionamos una cartera que cabe en una hoja, con un responsable por mandato.",
  parrafo2:
    "Preferimos mostrar menos propiedades y mostrarlas bien: ficha completa, fotografía nocturna y visitas con cita. Los reportes quincenales y los cierres acompañados completan un trabajo que se puede auditar.",
  valores: [
    { titulo: "Mostrar de noche", texto: "La casa iluminada cuenta la historia completa. La foto diurna la tomamos igual, pero no es la que vende." },
    { titulo: "Ficha antes que visita", texto: "Todo dato publicado antes de la primera visita: gastos comunes, contribuciones y plano." },
    { titulo: "Pocos mandatos", texto: "Cartera limitada para que cada propiedad reciba campaña real." },
  ],
};
