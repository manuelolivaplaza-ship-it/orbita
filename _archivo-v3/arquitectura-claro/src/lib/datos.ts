// Estudio Meridiano — Arquitectura · todo el contenido del sitio vive acá.
// En esta variante, "operacion" agrupa el estado: venta = obra construida,
// arriendo = en obra (ver helper `op`).

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Obra construida" : "En obra");

export interface Propiedad {
  id: string;
  ref: string;
  titulo: string;
  operacion: Operacion; // estado de la obra
  tipo: string; // tipología
  comuna: string;
  precioUF: number; // en arquitectura: año de proyecto (para ordenar)
  gastosComunes: number; // no usado
  dormitorios: number; // programa: recintos principales
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
  sufijo: "Meridiano",
  kicker: "Arquitectura · Santiago de Chile · desde 2009",
  claim: ["Arquitectura con", "método, obra", "con calma."],
  sub: "Obra nueva, remodelaciones y dirección de obra. Proyectos medidos, presupuestos abiertos y un arquitecto responsable de la primera idea a la entrega. Menos drama, más planos.",
  ctaPrimario: { texto: "Ver proyectos", a: "/proyectos" },
  ctaSecundario: { texto: "Consultar por un proyecto", a: "/servicios" },
  telefono: "+56 2 2345 6789",
  telefonoHref: "tel:+56223456789",
  correo: "proyectos@estudiomeridiano.cl",
  direccion: "Av. Italia 850, of. 201 · Providencia, Santiago",
  horario: "Lunes a viernes 9:30–18:30 · visitas a obra los viernes",
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
  { k: "Obras entregadas", v: "63" },
  { k: "En obra hoy", v: "4 proyectos" },
  { k: "Respuesta", v: "mismo día hábil" },
];

export const comunas = [
  "Providencia",
  "Ñuñoa",
  "La Reina",
  "Las Condes",
  "Vitacura",
  "Santiago Centro",
  "Valparaíso",
  "Los Vilos",
];

export const propiedades: Propiedad[] = [
  {
    id: "casa-esquina-vitacura",
    ref: "EM·31",
    titulo: "Casa Esquina — Vitacura",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Vitacura",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 310,
    terrenoM2: 520,
    estacionamientos: 2,
    anio: 2023,
    descripcion:
      "Volumen de esquina resuelto en dos piezas: un cuerpo bajo público de hormigón a la calle y un segundo nivel de madera que gira hacia el jardín. Estructura mixta, doble altura en el living y luz cenital en la escalera.",
    fotos: [media("esquina.png"), media("sala.png"), media("muro.png"), media("mesa.png")],
    destacada: true,
    coord: [-33.393, -70.598],
  },
  {
    id: "oficina-muro-nunoa",
    ref: "EM·38",
    titulo: "Oficina Muro — Ñuñoa",
    operacion: "venta",
    tipo: "Interior",
    comuna: "Ñuñoa",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 6,
    banos: 2,
    m2: 240,
    estacionamientos: 0,
    anio: 2024,
    descripcion:
      "Rehabilitación de una bodega de los 60 como estudio propio: muro de adobe recuperado como pieza central, lucarnas nuevas sobre la estructura existente y mobiliario a medida en madera de pino insigne.",
    fotos: [media("muro.png"), media("mesa.png"), media("sala.png")],
    destacada: true,
    coord: [-33.463, -70.611],
  },
  {
    id: "casa-mesa-los-vilos",
    ref: "EM·29",
    titulo: "Casa Mesa — Los Vilos",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Los Vilos",
    precioUF: 2022,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 185,
    terrenoM2: 2400,
    estacionamientos: 3,
    anio: 2022,
    descripcion:
      "Casa de veraneo en meseta costera: patio central techado como corazón, dormitorios en tres alas independientes y terraza orientada al atardecer. Muros de tierra comprimida y cubierta de zinc alum.",
    fotos: [media("mesa.png"), media("esquina.png"), media("sala.png")],
    destacada: true,
    coord: [-32.143, -71.509],
  },
  {
    id: "pabellon-sala-republica",
    ref: "EM·41",
    titulo: "Pabellón Sala — República",
    operacion: "arriendo",
    tipo: "Equipamiento",
    comuna: "Santiago Centro",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 4,
    m2: 620,
    estacionamientos: 0,
    anio: 2025,
    descripcion:
      "Pabellón universitario de dos niveles en barrio República: salas flexibles separadas por celosías de madera, circulación exterior como galería y fachada filter que tamiza la calle. En obra, entrega marzo 2026.",
    fotos: [media("sala.png"), media("muro.png")],
    coord: [-33.448, -70.666],
  },
  {
    id: "remodela-esquina-providencia",
    ref: "EM·27",
    titulo: "Remodelación Esquina — Providencia",
    operacion: "venta",
    tipo: "Remodelación",
    comuna: "Providencia",
    precioUF: 2021,
    gastosComunes: 0,
    dormitorios: 3,
    banos: 2,
    m2: 140,
    estacionamientos: 1,
    anio: 2021,
    descripcion:
      "Departamento de 1962 intervenido con cirugía fina: se abrió la cocina al living conservando la carpintería original, se cambiaron los pisos por tablón de roble y cada baño se resolvió en un solo material.",
    fotos: [media("esquina.png"), media("mesa.png")],
    coord: [-33.437, -70.621],
  },
  {
    id: "casa-muro-las-condes",
    ref: "EM·35",
    titulo: "Casa Muro — Las Condes",
    operacion: "venta",
    tipo: "Obra nueva",
    comuna: "Las Condes",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 5,
    banos: 4,
    m2: 380,
    terrenoM2: 480,
    estacionamientos: 4,
    anio: 2023,
    descripcion:
      "Un muro de 18 metros ordena la casa: de un lado el acceso y los servicios, del otro los dormitorios y el living con doble orientación. Hormigón visto, alerce y patio de piedra con especies nativas.",
    fotos: [media("muro.png"), media("sala.png"), media("esquina.png")],
    coord: [-33.412, -70.562],
  },
  {
    id: "interior-mesa-valpo",
    ref: "EM·26",
    titulo: "Interior Mesa — Valparaíso",
    operacion: "venta",
    tipo: "Interior",
    comuna: "Valparaíso",
    precioUF: 2021,
    gastosComunes: 0,
    dormitorios: 2,
    banos: 2,
    m2: 96,
    estacionamientos: 0,
    anio: 2021,
    descripcion:
      "Casa de cerro recuperada como refugio: cocina-isla que mira la bahía, dormitorio en entrepiso de madera y cada mueble resuelto en obra. Refuerzo estructural sísmico completo invisible.",
    fotos: [media("mesa.png"), media("sala.png")],
    coord: [-33.045, -71.62],
  },
  {
    id: "ampliacion-sala-reina",
    ref: "EM·40",
    titulo: "Ampliación Sala — La Reina",
    operacion: "arriendo",
    tipo: "Ampliación",
    comuna: "La Reina",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 4,
    banos: 3,
    m2: 210,
    terrenoM2: 300,
    estacionamientos: 2,
    anio: 2025,
    descripcion:
      "Segundo nivel sobre casa existente sin mudar a la familia: estructura metálica independiente prefabricada, montada en tres semanas, con suite, escritorio y terraza sobre el jardín. En obra.",
    fotos: [media("sala.png"), media("esquina.png"), media("mesa.png")],
    coord: [-33.447, -70.55],
  },
];

export const cifras = [
  { valor: 16, sufijo: "", etiqueta: "Años de estudio", detalle: "Desde 2009 en Providencia" },
  { valor: 63, sufijo: "", etiqueta: "Obras entregadas", detalle: "Obra nueva, remodelación e interior" },
  { valor: 41, sufijo: " mil", etiqueta: "M² proyectados", detalle: "Suma de todas las obras del estudio" },
  { valor: 9, sufijo: "", etiqueta: "Premios y menciones", detalle: "Incluidos dos regionales" },
];

export const cartera = [
  {
    n: "01",
    titulo: "Obra nueva",
    texto: "Casas y edificios pequeños proyectados de punta a punta: anteproyecto, permisos, ingeniería y dirección de obra.",
    pie: "Desde 120 m² · 12 a 18 meses",
  },
  {
    n: "02",
    titulo: "Remodelación y ampliación",
    texto: "Intervenciones sobre lo construido: refuerzos, redistribuciones y ampliaciones livianas sin mudarse de casa.",
    pie: "Desde 3 meses de obra",
  },
  {
    n: "03",
    titulo: "Interiores y equipamiento",
    texto: "Diseño interior, mobiliario a medida y equipamiento para viviendas, oficinas y comercio.",
    pie: "Entrega con planos de taller",
  },
  {
    n: "04",
    titulo: "Dirección de obra",
    texto: "Representación del mandante: control de presupuesto, plazos y calidad, con informe semanal.",
    pie: "También para proyectos de terceros",
  },
];

export const metodo = [
  {
    n: "01",
    titulo: "Medición y encargo",
    texto: "Visita al terreno o la propiedad existente, levantamiento a mano y una conversación larga sobre cómo vive usted. Sale un encargo escrito de una página.",
  },
  {
    n: "02",
    titulo: "Anteproyecto y presupuesto",
    texto: "Dos o tres alternativas de distribución con presupuesto estimado por partida. Se decide con números, no con renders emocionales.",
  },
  {
    n: "03",
    titulo: "Proyecto y permisos",
    texto: "Ingeniería, especialidades y gestión del permiso municipal. Usted revisa una maqueta y los planos que se van a construir.",
  },
  {
    n: "04",
    titulo: "Obra y entrega",
    texto: "Dirección con informe y fotos semanales, libro de obras y entrega con planos finales más manual de mantención.",
  },
];

export const equipo = [
  { iniciales: "CM", nombre: "Catalina Miranda", cargo: "Arquitecta UCV · Socia fundadora", detalle: "Obra nueva y dirección de obra. 16 años de ejercicio." },
  { iniciales: "RB", nombre: "Rodrigo Barros", cargo: "Arquitecto UDP · Socio", detalle: "Remodelaciones y estructuras sobre lo existente." },
  { iniciales: "FA", nombre: " Francisca Arce", cargo: "Arquitecta e interiorista", detalle: "Interiores, mobiliario y equipamiento." },
  { iniciales: "JM", nombre: "Jorge Muñoz", cargo: "Constructor · Coordinador de obra", detalle: "Presupuestos y control de faenas." },
];

export const testimonios = [
  {
    texto: "Nos mostraron el presupuesto por partida antes del anteproyecto. Sabíamos cuánto costaba la casa antes de enamorarnos de la casa.",
    autor: "Familia Echeverría",
    detalle: "Mandantes · Casa Los Vilos",
  },
  {
    texto: "Ampliaron la casa por arriba con la familia viviendo adentro. Tres semanas de polvo y cero improvisación.",
    autor: "C. y A. Vicuña",
    detalle: "Mandantes · Ampliación La Reina",
  },
  {
    texto: "El informe semanal con fotos cambió nuestra relación con la obra. Nunca más un arquitecto que desaparece.",
    autor: "Inversiones Cerro Alegre",
    detalle: "Mandantes · Interior Valparaíso",
  },
];

export const faq = [
  {
    p: "¿Cuánto cuesta proyectar una casa?",
    r: "El proyecto completo —anteproyecto, ingeniería, permisos y planos— se cobra entre el 6% y el 9% del presupuesto de obra según complejidad. El porcentaje exacto va firmado en la propuesta.",
  },
  {
    p: "¿Hacen solo permisos o trámites?",
    r: "Sí: regularizaciones, permisos de obra menor y modificaciones. Se cotizan por caso después de revisar los antecedentes.",
  },
  {
    p: "¿Puedo contratarlos solo para dirigir una obra ajena?",
    r: "Sí. La dirección de obra se contrata independiente del proyecto, con informe semanal, libro de obras y control de presupuesto.",
  },
  {
    p: "¿Cuánto demora el permiso municipal?",
    r: "Obra nueva en Santiago: entre 4 y 8 meses desde el ingreso, según comuna. Obra menor: 4 a 10 semanas.",
  },
  {
    p: "¿Trabajan fuera de Santiago?",
    r: "Sí: Casa Mesa está en Los Vilos y el interior en Valparaíso. La dirección de obra a distancia se combina con visitas quincenales.",
  },
];

export const valoresGestion = {
  intro: "Honorarios dichos antes de empezar.",
  sub: "Cada servicio se cota por escrito y por partida. El porcentaje o monto no cambia sin su aprobación.",
  filas: [
    { tipo: "Anteproyecto", detalle: "2–3 alternativas + presupuesto estimado", venta: "UF 25–60", arriendo: "se descuenta del proyecto" },
    { tipo: "Proyecto completo", detalle: "Ingeniería, especialidades y permiso", venta: "6–9% de la obra", arriendo: "—" },
    { tipo: "Dirección de obra", detalle: "Informe semanal y control", venta: "4–6% de la obra", arriendo: "por mes en obras menores" },
    { tipo: "Diseño interior", detalle: "Mobiliario y equipamiento", venta: "UF 40–120", arriendo: "con planos de taller" },
  ],
};

// Paleta del hero 3D — día claro, torres blancas, acento terracota.
export const tema3d = {
  noche: false,
  fondo: "#f7f5f1",
  niebla: "#f7f5f1",
  torre: "#ffffff",
  torreTecho: "#e7e3dc",
  ventanas: "#c4a79a",
  ventanasAlt: "#d5bfb3",
  acento: "#b4452e",
  suelo: "#ece8e1",
  estrellas: "#565149",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Del encargo a la entrega, con números.",
  sub: "Cuéntenos qué quiere construir o cambiar. Respondemos el mismo día hábil con una primera orientación y una visita de medición sin costo.",
  beneficios: [
    { titulo: "Presupuesto antes del render", texto: "Cada alternativa viene con su costo estimado por partida. Nadie se enamora de lo que no puede pagar." },
    { titulo: "Un arquitecto responsable", texto: "El mismo profesional del primer día a la entrega, con su teléfono directo." },
    { titulo: "Informe semanal de obra", texto: "Fotos, avance y gastos de la semana, todos los viernes en su correo." },
    { titulo: "Entrega documentada", texto: "Planos como se construyó, más manual de mantención de cada material." },
  ],
};

export const textoNosotros = {
  kicker: "El estudio",
  titulo: "Un estudio que se organiza para no improvisar.",
  parrafo1:
    "Estudio Meridiano existe desde 2009 en un segundo piso de Av. Italia. Somos cuatro personas y una convicción: la calma en la obra se gana con método en el proyecto.",
  parrafo2:
    "Proyectamos pocas obras al año para poder dirigirlas todas. El presupuesto se abre por partida desde el anteproyecto, el libro de obras vive en la nube y el informe semanal con fotos es intransable. Esa disciplina es el diseño invisible del estudio.",
  valores: [
    { titulo: "Método antes que inspiración", texto: "La buena idea se somete a presupuesto, plano y plazo." },
    { titulo: "Pocas obras, todas dirigidas", texto: "No tomamos proyectos que no podemos acompañar en terreno." },
    { titulo: "Documentación completa", texto: "Todo queda escrito: encargo, partidas, libro de obras y entrega." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "esquina.png", marco: false, caption: "Obra del estudio" };
