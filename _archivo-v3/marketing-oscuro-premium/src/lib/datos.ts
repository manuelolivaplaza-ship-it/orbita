// FOCO — Agencia de marketing · contenido del sitio.
// "operacion": venta = caso publicado, arriendo = en desarrollo.
// m2 = año del caso · anio = semanas de proyecto.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Caso publicado" : "En desarrollo");
export const linea = (p: { m2: number }) => `Año ${p.m2}`;

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
  nombre: "FOCO",
  sufijo: "Agencia",
  kicker: "Marketing y comunicaciones · Santiago de Chile",
  claim: ["Una marca.", "Un foco.", "Todo el ruido afuera."],
  sub: "Agencia boutique de marca y campañas para empresas que ya venden y quieren vender mejor: posicionamiento quirúrgico, dirección creativa premium y pauta que se mide como un negocio, no como un like.",
  ctaPrimario: { texto: "Ver casos", a: "/casos" },
  ctaSecundario: { texto: "Cotizar proyecto", a: "/servicios" },
  telefono: "+56 2 2799 4411",
  telefonoHref: "tel:+56227994411",
  correo: "foco@focoagencia.cl",
  direccion: "Bellas Artes 350, of. 901 · Santiago Centro",
  horario: "Lunes a viernes 9:30–19:00",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la agencia.",
};

export const etiquetas = {
  catalogo: "Casos",
  catalogoUno: "Caso",
  captacion: "Servicios",
  nosotros: "La agencia",
  fichaPlural: "casos",
};

export const rutas = {
  inicio: "/",
  catalogo: "/casos",
  ficha: "/caso",
  captacion: "/servicios",
  nosotros: "/agencia",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Casos", a: "/casos" },
  { texto: "Servicios", a: "/servicios" },
  { texto: "La agencia", a: "/agencia" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Dirección creativa", v: "premium" },
  { k: "Casos con resultado", v: "medido en negocio" },
  { k: "Clientes simultáneos", v: "8 máximo" },
];

export const comunas = ["Santiago", "Las Condes", "Vitacura", "Providencia", "Viña del Mar", "Todo Chile"];

export const cita = {
  texto:
    "Nos hicieron tirar dos campañas que nos encantaban porque no vendían. Esa capacidad de matar lo propio vale cada peso.",
  autor: "Gerardo Vicuña · gerente general, retail deportivo",
};

export const propiedades: Propiedad[] = [
  {
    id: "retail-deportivo",
    ref: "FO·01",
    titulo: "Retail deportivo: la campaña que el CFO aprobó",
    operacion: "venta",
    tipo: "Campaña integral",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 14,
    descripcion:
      "Marca deportiva con Awareness alto y conversión plana. Reposicionamiento en un solo beneficio, campaña cine+digital con métrica de venta. Resultado: +21% en ticket promedio de temporada.",
    fotos: [media("proyector.png"), media("film.png"), media("focos.png"), media("lente.png")],
    destacada: true,
    coord: [-33.44, -70.653],
  },
  {
    id: "banco-digital",
    ref: "FO·02",
    titulo: "Banco digital: hacer querido lo regulado",
    operacion: "venta",
    tipo: "Marca",
    comuna: "Las Condes",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 20,
    descripcion:
      "Fintech con licencia bancaria y una marca que asustaba. Sistema verbal y visual completo, tono humano en canales regulados. Resultado: NPS de 12 a 41 en diez meses.",
    fotos: [media("lente.png"), media("focos.png"), media("proyector.png")],
    destacada: true,
    coord: [-33.411, -70.561],
  },
  {
    id: "inmobiliario-lujo",
    ref: "FO·03",
    titulo: "Inmobiliaria premium: menos proyectos, mejores ventas",
    operacion: "venta",
    tipo: "Contenido + Demanda",
    comuna: "Vitacura",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 16,
    descripcion:
      "Corredora de propiedades de lujo con el marketing de una corredora común. Dirección de arte editorial, fotografía nocturna y pauta segmentada por patrimonio. Resultado: 3 de sus 4 edificios vendidos en fase preventa.",
    fotos: [media("focos.png"), media("film.png"), media("proyector.png")],
    destacada: true,
    coord: [-33.393, -70.598],
  },
  {
    id: "teatro-temporada",
    ref: "FO·04",
    titulo: "Teatro municipal: llenar butacas jóvenes",
    operacion: "venta",
    tipo: "Campaña",
    comuna: "Santiago",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 10,
    descripcion:
      "Temporada de teatro con público envejecido. Campaña de reapertura con creadores reales, precio joven y serie documental. Resultado: 62% de butacas vendidas a menores de 35 en la temporada.",
    fotos: [media("film.png"), media("lente.png")],
    coord: [-33.44, -70.65],
  },
  {
    id: "aerolinea-relanzamiento",
    ref: "FO·05",
    titulo: "Aerolínea regional: el relanzamiento post pandemia",
    operacion: "arriendo",
    tipo: "Relanzamiento",
    comuna: "Santiago",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2025,
    estacionamientos: 0,
    anio: 24,
    descripcion:
      "Aerolínea regional que vuelva a volar con marca nueva y mercado cambiado. Estrategia de relanzamiento completa, desde cabina hasta campaña. En desarrollo: estreno marzo 2026.",
    fotos: [media("proyector.png"), media("focos.png")],
    coord: [-33.393, -70.588],
  },
  {
    id: "universidad-posgrado",
    ref: "FO·06",
    titulo: "Universidad: posgrados que se defienden solos",
    operacion: "venta",
    tipo: "Demanda",
    comuna: "Providencia",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2022,
    estacionamientos: 0,
    anio: 12,
    descripcion:
      "Posgrados con matrícula dependiente de caras conocidas. Embudo por programa, testimonios con evidencia y pauta de búsqueda larga. Resultado: costo por matrícula 40% bajo el promedio del sector.",
    fotos: [media("lente.png"), media("film.png")],
    coord: [-33.428, -70.612],
  },
];

export const cifras = [
  { valor: 11, sufijo: "", etiqueta: "Años de agencia", detalle: "Desde 2014" },
  { valor: 87, sufijo: "+", etiqueta: "Campañas lanzadas", detalle: "Con medición de negocio" },
  { valor: 8, sufijo: "", etiqueta: "Clientes simultáneos", detalle: "Tope deliberado" },
  { valor: 21, sufijo: "%", etiqueta: "Alza ticket promedio", detalle: "Caso retail 2024" },
];

export const cartera = [
  { n: "01", titulo: "Marca y posicionamiento", texto: "Estrategia, identidad y sistema verbal para empresas que ya venden.", pie: "Desde UF 90" },
  { n: "02", titulo: "Campañas integrales", texto: "Dirección creativa premium con métrica de negocio, no de alcance.", pie: "Fee + producción" },
  { n: "03", titulo: "Demanda y performance", texto: "Pauta medida como negocio: costo por resultado, no por clic.", pie: "Fee + inversión" },
  { n: "04", titulo: "Contenido editorial", texto: "Series, documentales y fotografía que sostienen la marca en el tiempo.", pie: "Por producción" },
];

export const metodo = [
  { n: "01", titulo: "Inmersión", texto: "Dos semanas dentro del negocio: ventas, márgenes y conversaciones reales con clientes. La campaña se escribe después." },
  { n: "02", titulo: "Un foco", texto: "Una promesa, un público, una métrica. Si el comité quiere cinco focos, nuestro trabajo es defender uno." },
  { n: "03", titulo: "Producción premium", texto: "Dirección de arte, cine y fotografía con estándar de marca grande y presupuesto declarado." },
  { n: "04", titulo: "Medición de negocio", texto: "La campaña se reporta contra venta, NPS o matrícula. Los likes van en el anexo, si van." },
];

export const equipo = [
  { iniciales: "GS", nombre: "Gabriela Serra", cargo: "Directora general · Fundadora", detalle: "Ex directora creativa de agencia multinacional." },
  { iniciales: "MI", nombre: "Matías Irarrázabal", cargo: "Director creativo", detalle: "Cine y dirección de arte de campañas." },
  { iniciales: "FO", nombre: "Francisca Ovalle", cargo: "Estratega", detalle: "Posicionamiento y research de mercado." },
  { iniciales: "RC", nombre: "Rodrigo Cohen", cargo: "Performance", detalle: "Pauta medida como negocio." },
];

export const testimonios = [
  { texto: "La presentación al directorio tuvo una lámina: el foco. Fue la primera vez que un directorio aprobó algo en primera.", autor: "M. Echeverría", detalle: "Cliente · Marca" },
  { texto: "Miden como nosotros: en venta. Nadie más nos habló de ticket promedio en la primera reunión.", autor: "Retail deportivo", detalle: "Cliente · Campaña" },
  { texto: "Su capacidad de decir 'esta campaña no va' nos ahorró el 40% del presupuesto anual.", autor: "Teatro Municipal", detalle: "Cliente · Temporada" },
];

export const faq = [
  { p: "¿Por qué máximo 8 clientes?", r: "Porque la inmersión de dos semanas y la medición de negocio exigen dedicación real. El noveno cliente baja la calidad de los otros ocho." },
  { p: "¿Cuánto cuesta una campaña?", r: "Las campañas integrales parten en UF 120 entre fee y producción, más inversión en medios. Todo desglosado en la propuesta." },
  { p: "¿Trabajan con emprendimientos?", r: "Con los que ya venden y tienen estructura para ejecutar. Para marcas que recién parten recomendamos agencias más chicas — con nombres incluidos." },
  { p: "¿Cómo miden el éxito?", r: "Con la métrica que usted reporta al directorio: venta, NPS, matrícula, ocupación. Los indicadores de campaña van como medio, no como fin." },
  { p: "¿Puedo contratar solo la estrategia?", r: "Sí: la fase de inmersión y posicionamiento se contrata por separado. La ejecución puede continuar con su equipo." },
];

export const valoresGestion = {
  intro: "Números premium, dichos claros.",
  sub: "Fee, producción e inversión separados desde la propuesta. El presupuesto de la campaña nunca se mezcla con el de la agencia.",
  filas: [
    { tipo: "Estrategia e inmersión", detalle: "4 semanas con research", venta: "UF 45–70", arriendo: "por fase" },
    { tipo: "Marca completa", detalle: "Identidad + sistema verbal", venta: "UF 90–160", arriendo: "8–14 semanas" },
    { tipo: "Campaña integral", detalle: "Fee + producción", venta: "UF 120+", arriendo: "según formatos" },
    { tipo: "Retainer de demanda", detalle: "Performance medido en negocio", venta: "UF 35/mes", arriendo: "+ inversión" },
  ],
};

// Paleta del hero 3D — noche set, ventanas de estudio.
export const tema3d = {
  noche: true,
  fondo: "#0f0e0c",
  niebla: "#0f0e0c",
  torre: "#1b1916",
  torreTecho: "#0f0e0c",
  ventanas: "#d8b46a",
  ventanasAlt: "#efd7a0",
  acento: "#c9a35f",
  suelo: "#0a0908",
  estrellas: "#a09a8e",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Una inmersión, un foco, una métrica.",
  sub: "Postule su marca a un ciclo de trabajo: dos semanas de inmersión, una propuesta con presupuesto separado y una métrica que su directorio entiende.",
  beneficios: [
    { titulo: "Máximo 8 clientes", texto: "La escasez es parte del servicio. Su marca tiene equipo dedicado." },
    { titulo: "Presupuestos separados", texto: "Fee, producción e inversión, siempre desglosados. Nada mezclado." },
    { titulo: "Medición de negocio", texto: "Venta, NPS, matrícula: la métrica que usted reporta arriba." },
    { titulo: "Capacidad de matar", texto: "Si la campaña no funciona, la cortamos nosotros primero." },
  ],
};

export const textoNosotros = {
  kicker: "La agencia",
  titulo: "La agencia que defiende un solo foco.",
  parrafo1:
    "FOCO existe desde 2014 con una disciplina rara en el rubro: una promesa, un público, una métrica por campaña. Cuando el comité pide cinco focos, nuestro trabajo es defender uno.",
  parrafo2:
    "Somos un equipo senior que vino de agencias grandes para trabajar con pocas marcas y medir como negocio. El lujo de nuestra agencia no son las oficinas: es poder decir que una campaña no va.",
  valores: [
    { titulo: "Un foco por marca", texto: "Posicionamiento quirúrgico. La dispersión es la forma más cara de no decidir." },
    { titulo: "Producción premium", texto: "Cine y fotografía con estándar de marca grande, presupuesto declarado." },
    { titulo: "Medir como negocio", texto: "Los likes van en el anexo. Arriba va lo que el directorio mira." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "fullbleed", foto: "proyector.png", marco: false, caption: "" };
