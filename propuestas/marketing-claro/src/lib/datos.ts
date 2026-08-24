// Estudio Norte — Marketing con criterio · contenido del sitio.
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
  nombre: "Estudio",
  sufijo: "Norte",
  kicker: "Marketing digital · Santiago de Chile",
  claim: ["Marketing con", "criterio,", "no ruido."],
  sub: "Estrategia, marca y campañas para pymes que necesitan vender, no impresionar a la competencia. Propuesta en 72 horas, reporte mensual en lenguaje humano y números que se pueden auditar.",
  ctaPrimario: { texto: "Ver casos", a: "/casos" },
  ctaSecundario: { texto: "Cotizar proyecto", a: "/servicios" },
  telefono: "+56 2 2840 5566",
  telefonoHref: "tel:+56228405566",
  correo: "hola@estudionorte.cl",
  direccion: "Nueva de Lyon 080, of. 402 · Providencia, Santiago",
  horario: "Lunes a viernes 9:30–18:30",
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
  { k: "Propuesta", v: "en 72 horas" },
  { k: "Reporte", v: "mensual, legible" },
  { k: "Primera reunión", v: "sin costo" },
];

export const comunas = ["Santiago", "Providencia", "Las Condes", "Ñuñoa", "Valparaíso", "Todo Chile"];

export const cita = {
  texto:
    "Nos mostraron el embudo completo con números reales y qué parte del gasto no estaba funcionando. Nadie nos lo había mostrado así.",
  autor: "Cecilia Bravo · dueña de tienda de niños",
};

export const propiedades: Propiedad[] = [
  {
    id: "panaderia-local",
    ref: "EN·01",
    titulo: "Panadería con 40 años: del Pozo al mapa",
    operacion: "venta",
    tipo: "Marca + Local",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 10,
    descripcion:
      "Cuarta generación de una panadería de barrio con cero presencia digital. Identidad renovada sin perder el oficio, Google Maps trabajando y campañas geo. Resultado: +38% ventas de fin de semana en seis meses.",
    fotos: [media("mesa.png"), media("papel.png"), media("formas.png"), media("corredor.png")],
    destacada: true,
    coord: [-33.45, -70.65],
  },
  {
    id: "saas-b2b",
    ref: "EN·02",
    titulo: "SaaS B2B: leads que el vendedor agradeciera",
    operacion: "venta",
    tipo: "Demanda",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 16,
    descripcion:
      "Software logístico con ventas por relaciones y un sitio que no decía nada. Reposicionamiento, caso de uso claro por perfil y campaña de búsqueda. Resultado: de 9 a 34 reuniones calificadas al mes.",
    fotos: [media("corredor.png"), media("mesa.png"), media("papel.png")],
    destacada: true,
    coord: [-33.428, -70.612],
  },
  {
    id: "clinica-dental-mkt",
    ref: "EN·03",
    titulo: "Clínica dental: agenda llena sin depender del cupo",
    operacion: "venta",
    tipo: "Campañas",
    comuna: "Ñuñoa",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 12,
    descripcion:
      "Clínica con agenda irregular y dependencia de un solo canal. Lading por tratamiento, reseñas trabajando y pauta segmentada por comuna. Resultado: costo por primera consulta a la mitad en 90 días.",
    fotos: [media("formas.png"), media("corredor.png"), media("mesa.png")],
    destacada: true,
    coord: [-33.463, -70.611],
  },
  {
    id: "vinedo-directo",
    ref: "EN·04",
    titulo: "Viñedo familiar: venta directa al Enoturista",
    operacion: "venta",
    tipo: "Ecommerce",
    comuna: "Valparaíso",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 20,
    descripcion:
      "Viñedo que vendía todo a distribuidores y quería su club de vinos. Tienda con suscripciones, contenido de viñedo y correo que se lee. Resultado: 18% de la venta anual ahora es directa.",
    fotos: [media("papel.png"), media("formas.png")],
    coord: [-33.045, -71.62],
  },
  {
    id: "inmobiliaria-contenido",
    ref: "EN·05",
    titulo: "Inmobiliaria boutique: el contenido vende casas",
    operacion: "venta",
    tipo: "Contenido",
    comuna: "Las Condes",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2022,
    estacionamientos: 0,
    anio: 14,
    descripcion:
      "Corredora premium con fotos de celular y sin contenido. Sistema de fotografía editorial, fichas que se leen y guías de barrio. Resultado: tiempo de venta promedio de 120 a 74 días.",
    fotos: [media("corredor.png"), media("papel.png")],
    coord: [-33.411, -70.561],
  },
  {
    id: "app-fintech-lanzamiento",
    ref: "EN·06",
    titulo: "App fintech: lanzamiento sin presupuesto de startup",
    operacion: "arriendo",
    tipo: "Lanzamiento",
    comuna: "Santiago",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2025,
    estacionamientos: 0,
    anio: 18,
    descripcion:
      "Lanzamiento de una app de ahorro con presupuesto de pyme: posicionamiento de nicho, embajadores reales y una lista de espera que se nutrió sola. En desarrollo: fase de activación.",
    fotos: [media("formas.png"), media("mesa.png")],
    coord: [-33.44, -70.654],
  },
];

export const cifras = [
  { valor: 9, sufijo: "", etiqueta: "Años de agencia", detalle: "Desde 2016 en Providencia" },
  { valor: 120, sufijo: "+", etiqueta: "Proyectos", detalle: "Pymes y scale-ups" },
  { valor: 72, sufijo: " h", etiqueta: "Para la propuesta", detalle: "Post reunión inicial" },
  { valor: 100, sufijo: "%", etiqueta: "Reportes legibles", detalle: "Sin siglas sin explicar" },
];

export const cartera = [
  { n: "01", titulo: "Estrategia y marca", texto: "Posicionamiento, identidad y mensaje para pymes que necesitan diferenciarse de verdad.", pie: "Desde UF 45" },
  { n: "02", titulo: "Demanda y campañas", texto: "Google, Meta y LinkedIn con embudo medido y costo por resultado visible.", pie: "Fee + inversión" },
  { n: "03", titulo: "Contenido y SEO", texto: "Guías, fichas y correos que se leen y posicionan por lo que la gente busca.", pie: "Planes mensuales" },
  { n: "04", titulo: "Ecommerce", texto: "Tiendas y suscripciones con la métrica que importa: venta directa.", pie: "Desde UF 60" },
];

export const metodo = [
  { n: "01", titulo: "Reunión sin costo", texto: "Una hora con los números actuales a la vista. Salimos con el problema definido o con la honestidad de que no podemos ayudar." },
  { n: "02", titulo: "Propuesta en 72 horas", texto: "Alcance, plazos, inversión y resultado esperado por escrito. Con lo que no haremos también." },
  { n: "03", titulo: "Ejecución con reporte mensual", texto: "Un informe que se entiende sin diccionario: qué se hizo, qué funcionó y qué se cambia." },
  { n: "04", titulo: "Números auditables", texto: "Dashboard con fuentes abiertas: usted puede verificar lo mismo que nosotros. La confianza no se pide, se muestra." },
];

export const equipo = [
  { iniciales: "CV", nombre: "Cristián Valenzuela", cargo: "Director de estrategia · Fundador", detalle: "Ex gerente de marketing de retail. 15 años." },
  { iniciales: "PM", nombre: "Paula Matus", cargo: "Directora creativa", detalle: "Marca e identidad para pymes." },
  { iniciales: "FA", nombre: "Felipe Aros", cargo: "Performance", detalle: "Campañas y embudos medidos." },
  { iniciales: "DR", nombre: "Daniela Reyes", cargo: "Contenido y SEO", detalle: "Guías, fichas y correos que se leen." },
];

export const testimonios = [
  { texto: "El reporte mensual se lo pasé a mi contador y lo entendió. Ese fue el momento en que les renové.", autor: "R. Fuentealba", detalle: "Cliente · Campañas" },
  { texto: "Nos dijeron que la mitad del gasto en pauta estaba mal y tenían razón. Ahora cuesta la mitad y vende más.", autor: "Distribuidora Andina", detalle: "Cliente · Demanda" },
  { texto: "La propuesta decía lo que NO iban a hacer. Con eso firmé.", autor: "M. Bravo", detalle: "Cliente · Marca" },
];

export const faq = [
  { p: "¿Cuánto cuesta trabajar con ustedes?", r: "Los planes parten en UF 25 mensuales y los proyectos en UF 45. La propuesta de 72 horas trae el número exacto para su caso, con desglose." },
  { p: "¿Trabajan con pymes recién partiendo?", r: "Sí, y con honestidad: si el problema no es marketing, se lo decimos en la primera reunión. Gratis." },
  { p: "¿Quién maneja las campañas?", r: "Nosotros, con acceso compartido y dashboard abierto: la cuenta publicitaria es suya y usted puede ver todo lo mismo que nosotros." },
  { p: "¿Cuánto demora ver resultados?", r: "Campañas: primeras señales en 30 días, resultado estable en 90. Marca y contenido: horizonte de 6 meses. Lo decimos con números antes de partir." },
  { p: "¿Qué pasa si no funciona?", r: "El reporte mensual existe para eso: si algo no funciona, se corta en el primer ciclo y el presupuesto se reasigna. Sin inertia de gasto." },
];

export const valoresGestion = {
  intro: "Presupuestos que se entienden.",
  sub: "Cada propuesta desglosa fee, inversión publicitaria y resultado esperado. Lo que no podemos prometer, lo decimos.",
  filas: [
    { tipo: "Plan mensual", detalle: "Estrategia + ejecución + reporte", venta: "Desde UF 25/mes", arriendo: "sin permanencia" },
    { tipo: "Proyecto de marca", detalle: "Identidad y lanzamiento", venta: "UF 45–90", arriendo: "6–10 semanas" },
    { tipo: "Ecommerce", detalle: "Tienda + suscripciones + pauta", venta: "UF 60–120", arriendo: "por proyecto" },
    { tipo: "Fees de campaña", detalle: "10–15% de la inversión", arriendo: "con mínimo mensual", venta: "según pauta" },
  ],
};

// Paleta del hero 3D — día, acento coral editorial.
export const tema3d = {
  noche: false,
  fondo: "#f7f5f1",
  niebla: "#f7f5f1",
  torre: "#ffffff",
  torreTecho: "#e5e1d8",
  ventanas: "#c4987f",
  ventanasAlt: "#dcc0ab",
  acento: "#c25e3a",
  suelo: "#edeae3",
  estrellas: "#8a857b",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Primero el problema. Después el presupuesto.",
  sub: "Reunión inicial sin costo con sus números sobre la mesa. En 72 horas recibe propuesta con alcance, inversión y lo que no haremos.",
  beneficios: [
    { titulo: "Propuesta en 72 horas", texto: "Por escrito, con desglose y sin jerga. Incluye lo que no vamos a hacer." },
    { titulo: "Reporte mensual legible", texto: "Qué se hizo, qué funcionó y qué se cambia. Entendible sin diccionario." },
    { titulo: "Números auditables", texto: "Dashboard con cuentas suyas: usted verifica lo mismo que nosotros." },
    { titulo: "Sin permanencia", texto: "Los planes se renuevan por resultados, no por contrato." },
  ],
};

export const textoNosotros = {
  kicker: "La agencia",
  titulo: "Chicos a propósito, honestos por convicción.",
  parrafo1:
    "Estudio Norte existe desde 2016 con una regla incómoda para el rubro: decir lo que no se puede lograr. Preferimos perder un proyecto por honestidad que mantenerlo con humo.",
  parrafo2:
    "Somos cuatro personas que atienden máximo doce clientes simultáneos. Esa escasez deliberada nos permite conocer el negocio de cada cliente — y cobrar por resultados que se pueden auditar, no por actividad que se puede simular.",
  valores: [
    { titulo: "El informe se entiende", texto: "Reportes en lenguaje humano. Si su contador no lo entiende, mal informe." },
    { titulo: "Pocas cuentas, bien llevadas", texto: "Doce clientes máximo. La escasez es parte del servicio." },
    { titulo: "Honestidad primero", texto: "Si el problema no es marketing, se lo decimos en la reunión gratis." },
  ],
};
