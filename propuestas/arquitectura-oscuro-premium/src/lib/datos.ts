// UMBRAL — Arquitectura · todo el contenido del sitio vive acá.
// "operacion" agrupa el estado: venta = obra construida, arriendo = en obra.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Obra construida" : "En obra");

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
  nombre: "UMBRAL",
  sufijo: "Arquitectura",
  kicker: "Arquitectura premium · Santiago · desde 2012",
  claim: ["Arquitectura que", "sostiene la", "mirada."],
  sub: "Obra nueva y remodelaciones de alto estándar, con materiales que envejecen bien y detalles resueltos en obra. Un socio del estudio acompaña cada proyecto de la primera reunión a la entrega.",
  ctaPrimario: { texto: "Ver proyectos", a: "/proyectos" },
  ctaSecundario: { texto: "Consultar por un proyecto", a: "/servicios" },
  telefono: "+56 9 5555 1212",
  telefonoHref: "tel:+56955551212",
  correo: "estudio@umbral.arquitectura.cl",
  direccion: "Nueva York 84, of. 401 · Santiago Centro",
  horario: "Lunes a viernes 10:00–19:00 · visitas a obra los viernes",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los del estudio.",
};

export const etiquetas = {
  catalogo: "Proyectos",
  catalogoUno: "Proyecto",
  captacion: "Servicios",
  nosotros: "El estudio",
  fichaPlural: "proyectos",
};

export const rutas = {
  inicio: "/",
  catalogo: "/proyectos",
  ficha: "/proyecto",
  captacion: "/servicios",
  nosotros: "/estudio",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Proyectos", a: "/proyectos" },
  { texto: "Servicios", a: "/servicios" },
  { texto: "Estudio", a: "/estudio" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Obras entregadas", v: "47" },
  { k: "En obra hoy", v: "3" },
  { k: "Primera reunión", v: "sin costo" },
];

export const comunas = [
  "Vitacura",
  "Las Condes",
  "Lo Barnechea",
  "La Dehesa",
  "Providencia",
  "Santiago Centro",
  "Zapallar",
  "Farellones",
];

export const propiedades: Propiedad[] = [
  {
    id: "casa-hormigon-dehesa",
    ref: "UM·17",
    titulo: "Casa Hormigón — La Dehesa",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Lo Barnechea",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 5,
    banos: 5,
    m2: 520,
    terrenoM2: 1200,
    estacionamientos: 5,
    anio: 2023,
    descripcion:
      "Tres volúmenes de hormigón a la vista desplazados entre sí para enmarbar la cordillera. Escalera colgante de madera nativa, piscina interior de 12 metros y bodega climatizada. Cada junta del hormigón se coordinó con moldajes a medida.",
    fotos: [media("hormigon.png"), media("escalera.png"), media("pavilon-noche.png"), media("maqueta.png")],
    destacada: true,
    coord: [-33.346, -70.577],
  },
  {
    id: "pabellon-noche-farellones",
    ref: "UM·22",
    titulo: "Pabellón Noche — Farellones",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Farellones",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 3,
    m2: 260,
    terrenoM2: 3600,
    estacionamientos: 4,
    anio: 2024,
    descripcion:
      "Refugio de montaña que se cierra al viento sur y se abre al valle con un ventanal de ocho metros. Acero corten, interior de ciprés preservado y estufa de doble combustión que calienta la casa completa en veinte minutos.",
    fotos: [media("pavilon-noche.png"), media("hormigon.png"), media("escalera.png")],
    destacada: true,
    coord: [-33.363, -70.284],
  },
  {
    id: "escalerA-casa-zapallar",
    ref: "UM·19",
    titulo: "Casa Escalera — Zapallar",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Zapallar",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 4,
    m2: 340,
    terrenoM2: 900,
    estacionamientos: 2,
    anio: 2022,
    descripcion:
      "La casa baja el faldeo en cuatro niveles conectados por una escalera exterior de piedra: cada nivel tiene su terraza hacia el mar. Piedra local,techos de cobre y un patio de servicio que desaparece bajo el jardín.",
    fotos: [media("escalera.png"), media("pavilon-noche.png"), media("hormigon.png")],
    destacada: true,
    coord: [-32.553, -71.462],
  },
  {
    id: "maqueta-torre-centro",
    ref: "UM·24",
    titulo: "Torre Maqueta — Santiago Centro",
    operacion: "arriendo",
    tipo: "Edificio",
    comuna: "Santiago Centro",
    precioUF: 2026,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 8,
    m2: 5400,
    estacionamientos: 30,
    anio: 2026,
    descripcion:
      "Edificio de departamentos de 18 pisos: fachada de pantallas móviles de bronce que cada propietario ajusta a su orientación, lobby de doble altura y planta técnica independiente. En permisos, entrega 2027.",
    fotos: [media("maqueta.png"), media("hormigon.png")],
    coord: [-33.436, -70.649],
  },
  {
    id: "remodela-hormigon-providencia",
    ref: "UM·15",
    titulo: "Remodelación Hormigón — Providencia",
    operacion: "venta",
    tipo: "Remodelación",
    comuna: "Providencia",
    precioUF: 2021,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 3,
    m2: 180,
    estacionamientos: 2,
    anio: 2021,
    descripcion:
      "Penthouse de los 70 convertido: se demolió el segundo baño para ganar un vestidor, la cocina pasó al centro y una nueva terraza volada de acero ganó 24 m² con vista a la torre Entel.",
    fotos: [media("hormigon.png"), media("escalera.png")],
    coord: [-33.428, -70.612],
  },
  {
    id: "interior-pavilon-las-condes",
    ref: "UM·20",
    titulo: "Interior Pabellón — Las Condes",
    operacion: "venta",
    tipo: "Interior",
    comuna: "Las Condes",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 2,
    m2: 210,
    estacionamientos: 0,
    anio: 2023,
    descripcion:
      "Oficinas de un fondo de inversión convertidas en casa: la sala de reuniones es ahora el living con biblioteca de roble de 5 metros, y cada oficina se volvió suite con baño de piedra completa.",
    fotos: [media("pavilon-noche.png"), media("maqueta.png"), media("escalera.png")],
    coord: [-33.412, -70.562],
  },
  {
    id: "casa-maqueta-vitacura",
    ref: "UM·18",
    titulo: "Casa Maqueta — Vitacura",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Vitacura",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 4,
    m2: 390,
    terrenoM2: 700,
    estacionamientos: 4,
    anio: 2022,
    descripcion:
      "La casa se construyó primero como maqueta 1:50 y ahí se resolvió todo: el alero que protege el comedor a las ocho de la tarde, la ventana del baño que se abre al bambú y el muro que esconde la cochera.",
    fotos: [media("maqueta.png"), media("hormigon.png"), media("pavilon-noche.png")],
    coord: [-33.393, -70.598],
  },
  {
    id: "refugio-escalera-farellones",
    ref: "UM·25",
    titulo: "Refugio Escalera — Farellones",
    operacion: "arriendo",
    tipo: "Refugio",
    comuna: "Farellones",
    precioUF: 2026,
    gastosComunes: 0,
    dormitorios: 6,
    banos: 4,
    m2: 310,
    terrenoM2: 2000,
    estacionamientos: 6,
    anio: 2026,
    descripcion:
      "Refugio colectivo para tres familias: dormitorios mínimos y un living de 90 m² con hogar de piedra a doble altura. Estructura prefabricada montada en seis semanas para no tocar la montaña más de lo justo.",
    fotos: [media("escalera.png"), media("pavilon-noche.png")],
    coord: [-33.36, -70.29],
  },
];

export const cifras = [
  { valor: 13, sufijo: "", etiqueta: "Años de estudio", detalle: "Socios en ejercicio desde 2012" },
  { valor: 47, sufijo: "", etiqueta: "Obras entregadas", detalle: "Alto estándar y equipamiento" },
  { valor: 68, sufijo: " mil", etiqueta: "M² construidos", detalle: "Suma de todas las obras" },
  { valor: 11, sufijo: "", etiqueta: "Premios y publicaciones", detalle: "Nacionales e internacionales" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Obra nueva alto estándar",
    texto: "Casas, refugios y edificios pequeños con dirección integral y control de cada detalle constructivo.",
    pie: "Desde 250 m² · 14 a 24 meses",
  },
  {
    n: "02",
    titulo: "Remodelaciones mayores",
    texto: "Conversiones y ampliaciones que exigen ingeniería fina: refuerzos, voladizos y cambios de uso.",
    pie: "Con proyecto estructural propio",
  },
  {
    n: "03",
    titulo: "Dirección de obra premium",
    texto: "Administración de faenas con libro de obras digital, curaduría de acabados y recepción final itemizada.",
    pie: "También para proyectos de terceros",
  },
  {
    n: "04",
    titulo: "Curaduría de materiales",
    texto: "Selección y aprobación de cada material con muestras en obra: piedra, madera, metales y vidrios.",
    pie: "Catálogo entregado al mandante",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Primera reunión",
    texto: "Una hora en la oficina o el terreno, sin costo. Escuchamos el encargo y respondemos con un correo de una página: alcance, plazo estimado y rango de honorarios.",
  },
  {
    n: "02",
    titulo: "Anteproyecto y maqueta",
    texto: "Desarrollamos dos alternativas con maqueta física 1:50. La maqueta decide mejor que el render: luz, sombra y recorrido se entienden con la mano.",
  },
  {
    n: "03",
    titulo: "Proyecto y especialidades",
    texto: "Ingeniería estructural, climatización, domótica y paisaje coordinados en un solo modelo. El presupuesto se abre por partida antes del permiso.",
  },
  {
    n: "04",
    titulo: "Obra y recepción",
    texto: "Un socio dirige la obra con informe semanal y curaduría de acabados. La entrega incluye planos como se construyó, manual de mantención y libro de garantías.",
  },
];

export const equipo = [
  { iniciales: "DU", nombre: "Domitila Undurraga", cargo: "Arquitecta PUC · Socia fundadora", detalle: "Obra nueva y dirección. 13 años de ejercicio profesional." },
  { iniciales: "AV", nombre: "Alfonso Vergara", cargo: "Arquitecto UChile · Socio", detalle: "Estructuras complejas y remodelaciones mayores." },
  { iniciales: "MS", nombre: "Martín Soto", cargo: "Arquitecto · Curaduría", detalle: "Materiales, acabados y recepciones de obra." },
  { iniciales: "PL", nombre: "Paz Larraín", cargo: "Constructor · Administración", detalle: "Faenas, presupuestos y control de plazos." },
];

export const testimonios = [
  {
    texto: "La maqueta nos mostró en una tarde lo que tres meses de renders no lograron. Construimos exactamente lo que vimos.",
    autor: "Familia Prieto",
    detalle: "Mandantes · Casa Maqueta, Vitacura",
  },
  {
    texto: "Cada material llegó a obra aprobado con muestra. La recepción final duró dos horas porque no había sorpresas.",
    autor: "R. Undurraga",
    detalle: "Mandante · Casa Hormigón",
  },
  {
    texto: "Dirigieron la obra de otro estudio con el mismo cuidado que la nuestra. Eso dice todo del gremio que son.",
    autor: "Familia Barros",
    detalle: "Mandantes · Refugio Escalera",
  },
];

export const faq = [
  {
    p: "¿Qué incluye la primera reunión sin costo?",
    r: "Una hora de conversación sobre su encargo y, si hay terreno, una visita. Se va con un correo de una página: alcance posible, plazo estimado y rango de honorarios.",
  },
  {
    p: "¿Por qué trabajan con maqueta física?",
    r: "Porque la maqueta no miente: muestra luz real, proporción y recorridos. Los renders la complementan, pero las decisiones grandes se toman sobre la maqueta.",
  },
  {
    p: "¿Cuánto cuesta una casa de este estándar?",
    r: "El presupuesto de obra de nuestras casas últimamente se mueve entre 58 y 85 UF/m² según materiales y complejidad. Lo cerramos por partida antes del permiso.",
  },
  {
    p: "¿Puedo contratarlos si ya tengo el proyecto?",
    r: "Sí. La dirección de obra premium y la curaduría de materiales se contratan por separado, incluso para proyectos de otros arquitectos.",
  },
  {
    p: "¿Trabajan fuera de Santiago?",
    r: "Sí: Zapallar, Farellones y el sur. Las obras fuera de Santiago incluyen visitas quincenales fijas y una coordinación local permanente.",
  },
];

export const valoresGestion = {
  intro: "Honorarios que se sostienen.",
  sub: "Cada propuesta se cota por escrito con desglose por etapa. El monto no cambia sin su firma.",
  filas: [
    { tipo: "Anteproyecto + maqueta", detalle: "Dos alternativas y presupuesto por partida", venta: "UF 60–140", arriendo: "se imputa al proyecto" },
    { tipo: "Proyecto completo", detalle: "Especialidades, permiso y licitación", venta: "7–10% de la obra", arriendo: "—" },
    { tipo: "Dirección de obra premium", detalle: "Socio responsable + informe semanal", venta: "6–8% de la obra", arriendo: "por mes en obras menores" },
    { tipo: "Curaduría de materiales", detalle: "Catálogo, muestras y recepciones", venta: "UF 40–90", arriendo: "incluida en dirección" },
  ],
};

// Paleta del hero 3D — noche cálida, torres oscuras, ventanas bronce.
export const tema3d = {
  noche: true,
  fondo: "#0e0d0b",
  niebla: "#0e0d0b",
  torre: "#1a1713",
  torreTecho: "#0e0d0b",
  ventanas: "#d9b478",
  ventanasAlt: "#efd8ab",
  acento: "#b99764",
  suelo: "#0b0a08",
  estrellas: "#a89a85",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Arquitectura con el control en la mesa.",
  sub: "Cuéntenos el encargo. Le respondemos el mismo día con una primera orientación y coordinamos una reunión sin costo en la oficina o el terreno.",
  beneficios: [
    { titulo: "Maqueta antes que render", texto: "Las decisiones grandes se toman sobre la maqueta física, con luz real y proporción verdadera." },
    { titulo: "Un socio por proyecto", texto: "El mismo socio del estudio desde la primera reunión hasta la recepción final." },
    { titulo: "Presupuesto por partida", texto: "Cada alternativa del anteproyecto viene con su costo abierto. Se decide con números." },
    { titulo: "Recepción sin sorpresas", texto: "Cada material se aprueba con muestra y la entrega incluye manual y garantías." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "El detalle no se delega.",
  parrafo1:
    "UMBRAL es un estudio de cuatro socios que trabaja pocas obras al año para poder tocarlas todas. La obra premium no se define por el precio del mármol sino por la junta que no se ve.",
  parrafo2:
    "Trabajamos con maquetas físicas, libros de obra digitales y una regla antigua: nada se aprueba sin muestra. Esa disciplina —más que cualquier render— es la que sostiene la mirada sobre una obra terminada.",
  valores: [
    { titulo: "Materiales que envejecen", texto: "Piedra, madera, cobre y hormigón: materiales que mejoran con el uso, no que se gastan." },
    { titulo: "Pocas obras, todas dirigidas", texto: "Un socio del estudio dirige cada faena, sin excepción." },
    { titulo: "Nada sin muestra", texto: "Cada material y cada color se aprueba con muestra física en obra." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "fullbleed", foto: "hormigon.png", marco: false, caption: "" };
