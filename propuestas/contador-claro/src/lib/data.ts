export type Practice = {
  slug: string;
  room: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  personSlug: string;
  body: string;
  work: string[];
  when: string[];
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  practice: string;
  practiceSlug: string;
  image: string;
  email: string;
  bio: string[];
  education: string[];
  admissions: string[];
  languages: string[];
};

export type Matter = {
  slug: string;
  year: string;
  area: string;
  title: string;
  metric: string;
  metricLabel: string;
  summary: string;
  result: string;
  comuna: string;
};

export const practices: Practice[] = [
  {
    slug: "mensual",
    room: "01",
    title: "Contabilidad mensual",
    short: "Libros, conciliación, cierre.",
    lead: "Cada mes, una libreta que se puede leer. No un PDF a las once de la noche.",
    image: "/images/mesa.jpg",
    personSlug: "amparo-soto",
    body: "Llevamos la contabilidad de pymes que ya no quieren “el Excel del contador anterior”. Registro de compras y ventas, conciliación bancaria, existencias cuando corresponde, y un cierre que se entiende antes del F29. Le mostramos dónde está la plata, no un balance de 40 páginas para archivar.",
    work: [
      "Registro de compras, ventas y honorarios",
      "Conciliación bancaria y de tarjetas",
      "Libros contables y estados mensuales",
      "Control de existencias e inventario",
      "Cierre listo para el F29, no al revés",
    ],
    when: [
      "Lleva todo en una carpeta de WhatsApp",
      "El contador anterior desapareció en marzo",
      "Quiere ver números el día 8, no el 22",
    ],
  },
  {
    slug: "impuestos",
    room: "02",
    title: "Impuestos",
    short: "F29, F22, PPM, DJ.",
    lead: "El SII no premia el misterio. Tampoco nosotros.",
    image: "/images/papel.jpg",
    personSlug: "elena-vidal",
    body: "F29 todos los meses, Operación Renta, declaraciones juradas, PPM y lo que aparezca en la carpeta tributaria. Si hay una fiscalización, la preparamos con papeles, no con adjetivos. Rectificatorias cuando hay que rectificar; no las escondemos bajo un “después lo vemos”.",
    work: [
      "F29 mensual: IVA, retenciones y PPM",
      "F22 y acompañamiento en Operación Renta",
      "Declaraciones juradas 1879, 1887 y las que correspondan",
      "Revisión de carpeta tributaria y observaciones SII",
      "Fiscalizaciones, tasaciones y rectificatorias",
    ],
    when: [
      "Se acerca el día 12 y no hay F29",
      "Llegó un requerimiento del SII",
      "La renta del año pasado quedó a medias",
    ],
  },
  {
    slug: "remuneraciones",
    room: "03",
    title: "Remuneraciones",
    short: "Liquidaciones, Previred, DT.",
    lead: "La semana corrida no es un detalle. Es la plata de alguien.",
    image: "/images/pasillo.jpg",
    personSlug: "joaquin-reyes",
    body: "Liquidaciones que cierran, Previred en plazo, contratos y anexos que la Dirección del Trabajo puede leer sin sonrojo. Gratificación, horas extra, feriado proporcional, finiquito. Si hay un comparendo, preparamos la carpeta. Si la pyme crece de 3 a 18 personas, el sistema crece con ella — no al revés.",
    work: [
      "Liquidaciones de sueldo y libro de remuneraciones",
      "Previred, AFP, salud y seguro de cesantía",
      "Contratos, anexos y reglamento interno",
      "Finiquitos, feriado y comparendos ante la DT",
      "Auditoría de cotizaciones impagas",
    ],
    when: [
      "Hay gente a honorarios que es trabajador",
      "Previred se paga “cuando se puede”",
      "Un finiquito no cierra y hay citación",
    ],
  },
  {
    slug: "independientes",
    room: "04",
    title: "Independientes",
    short: "Boletas, 2ª categoría, PPM.",
    lead: "Boletear no es lo mismo que tener las cifras claras.",
    image: "/images/ventana.jpg",
    personSlug: "amparo-soto",
    body: "Profesionales, consultores, diseñadores, médicos, arquitectos. Boletas de honorarios electrónicas, retención, PPM, y la conversación de una vez: ¿sociedad o persona natural? ¿Honorarios o sueldo? Le decimos el número, no el eslogan. Si conviene una SpA, se lo decimos. Si no, también.",
    work: [
      "Boletas de honorarios electrónicas y retención",
      "PPM y F29 de segunda categoría",
      "F22 de persona natural",
      "Inicio de actividades y cambio de giro",
      "Honorarios versus sueldo: la cuenta real",
    ],
    when: [
      "Empezó a boletear y no sabe cuánto guardar",
      "Le dijeron que “se constituya una SpA” sin números",
      "Mezcla la cuenta personal con la del oficio",
    ],
  },
  {
    slug: "sociedades",
    room: "05",
    title: "Sociedades",
    short: "SpA, Ltda, EIRL, RES.",
    lead: "Una sociedad se constituye en el Registro, no en un PDF de internet.",
    image: "/images/fachada.jpg",
    personSlug: "nicolas-palma",
    body: "Constitución de SpA, limitada y EIRL en el Registro de Empresas y Sociedades. Inicio de actividades, clave tributaria, facturación electrónica, patente municipal. Pactos de socios que se pueden leer en voz alta. Término de giro cuando hay que cerrar — bien cerrado, no abandonado en el SII.",
    work: [
      "Constitución de SpA, Ltda y EIRL",
      "Inicio de actividades y clave tributaria",
      "Factura electrónica y timbraje SII",
      "Pactos de socios y modificaciones de estatutos",
      "Término de giro y cierre de patente",
    ],
    when: [
      "Va a emprender con un socio y no hay pacto",
      "La EIRL se quedó chica",
      "Quiere cerrar un giro que sigue vivo en el SII",
    ],
  },
  {
    slug: "planificacion",
    room: "06",
    title: "Planificación",
    short: "Régimen, reorganización, due diligence.",
    lead: "El régimen tributario no se elige por costumbre. Se elige con números.",
    image: "/images/terraza.jpg",
    personSlug: "elena-vidal",
    body: "Pro Pyme, 14 A, 14 D, cambio de régimen, reorganizaciones y la pregunta que nadie hace a tiempo: ¿esta estructura aguanta el próximo año? Due diligence contable cuando hay una venta o un socio nuevo. No vendemos “optimización”. Mostramos el efecto en caja, en F22 y en el socio que pone la cara.",
    work: [
      "Diagnóstico y cambio de régimen tributario",
      "Reorganización de sociedades y giros",
      "Due diligence contable y tributario",
      "Estructura para inversión o venta",
      "Acompañamiento en fiscalizaciones complejas",
    ],
    when: [
      "Creció y el régimen Pro Pyme ya no calza",
      "Entra o sale un socio",
      "Hay una venta y hay que abrir los libros",
    ],
  },
];

export const people: Person[] = [
  {
    slug: "elena-vidal",
    name: "Elena Vidal",
    role: "Socia fundadora",
    practice: "Impuestos",
    practiceSlug: "impuestos",
    image: "/images/elena.jpg",
    email: "elena@claroestudio.cl",
    bio: [
      "Abrió CLARO en 2014, en un escritorio de Manuel Montt, porque estaba cansada de mandar balances que el cliente no podía leer. El piso de Santa Magdalena, la terraza y el cerro vinieron después. El método, no.",
      "Lleva las carteras que tocan el SII de verdad: F22, fiscalizaciones, cambios de régimen. Si un número no se puede explicar con la luz de la mañana, lo vuelve a trabajar.",
    ],
    education: [
      "Contadora Auditora, Universidad de Chile",
      "Magíster en Tributación, Universidad Diego Portales",
    ],
    admissions: [
      "Colegio de Contadores de Chile",
      "Inscrita ante el SII como contadora auditora",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "joaquin-reyes",
    name: "Joaquín Reyes",
    role: "Socio",
    practice: "Remuneraciones",
    practiceSlug: "remuneraciones",
    image: "/images/joaquin.jpg",
    email: "joaquin@claroestudio.cl",
    bio: [
      "Entró en 2017 porque Elena necesitaba a alguien que leyera una liquidación hasta el último peso de gratificación. Sigue siendo ese alguien.",
      "Remuneraciones, Previred, Dirección del Trabajo. Cuando una pyme pasa de tres a dieciocho personas, el problema no es el software: es el Código del Trabajo aplicado con pulso. Ahí está Joaquín.",
    ],
    education: [
      "Contador Público y Auditor, Universidad de Santiago",
      "Diplomado en Derecho Laboral para empresas, PUC",
    ],
    admissions: [
      "Colegio de Contadores de Chile",
    ],
    languages: ["Español"],
  },
  {
    slug: "amparo-soto",
    name: "Amparo Soto",
    role: "Contadora",
    practice: "Mensual e independientes",
    practiceSlug: "mensual",
    image: "/images/amparo.jpg",
    email: "amparo@claroestudio.cl",
    bio: [
      "Llegó en 2021. Es quien no deja un F29 para el día 19. Las pymes y los independientes que quieren números el día 8, no un misterio el día 22, caen en su libreta.",
      "Habla claro, cobra claro, y avisa si el mes viene apretado. Prefiere una conversación incómoda un martes que una multa un viernes.",
    ],
    education: [
      "Contadora Auditora, Universidad Alberto Hurtado",
      "Diplomado en IFRS para pymes, UAH",
    ],
    admissions: ["Colegio de Contadores de Chile"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "nicolas-palma",
    name: "Nicolás Palma",
    role: "Contador",
    practice: "Sociedades",
    practiceSlug: "sociedades",
    image: "/images/nicolas.jpg",
    email: "nicolas@claroestudio.cl",
    bio: [
      "Se sumó en 2023. Constituciones, el Registro de Empresas y Sociedades, inicio de actividades, término de giro. El que hace una SpA sin que el cliente tenga que aprenderse el Diario Oficial.",
      "Le importa el pacto de socios tanto como el RUT. Si dos fundadores no se han dicho qué pasa si uno se quiere ir, esa es la primera conversación.",
    ],
    education: [
      "Contador Auditor, Universidad de Chile",
      "Diplomado en Derecho de sociedades, UDP",
    ],
    admissions: ["Colegio de Contadores de Chile"],
    languages: ["Español", "Inglés"],
  },
];

export const matters: Matter[] = [
  {
    slug: "f29-atrasado",
    year: "2025",
    area: "Impuestos",
    title: "Ocho F29 sin presentar. El giro, todavía abierto.",
    metric: "8",
    metricLabel: "meses regularizados",
    summary:
      "Una pyme de Ñuñoa llegó con el IVA del año a medias y miedo a un término de giro de oficio. Ordenamos compras, presentamos, pactamos y el SII no cerró nada.",
    result:
      "Ocho F29 presentados, intereses y multas dimensionados por escrito, giro vigente.",
    comuna: "Ñuñoa",
  },
  {
    slug: "spa-fundadores",
    year: "2026",
    area: "Sociedades",
    title: "Dos socios, un pacto, una SpA que se puede leer.",
    metric: "11",
    metricLabel: "días hábiles",
    summary:
      "Dos fundadoras de un estudio de diseño. Constitución en el RES, inicio de actividades, factura electrónica y un pacto que dice qué pasa si una se quiere ir.",
    result: "SpA inscrita, clave tributaria, facturación al día 11.",
    comuna: "Providencia",
  },
  {
    slug: "honorarios-sueldo",
    year: "2025",
    area: "Independientes",
    title: "La pregunta que nadie hace: ¿boleta o sueldo?",
    metric: "1,4",
    metricLabel: "UF menos al mes",
    summary:
      "Un arquitecto boleteaba a su propia EIRL. Hicimos las dos cuentas — cotizaciones, retención, F22 — y el sueldo era más barato. Cambió. El ego, no.",
    result: "Cambio a sueldo con liquidación y Previred en plazo.",
    comuna: "Las Condes",
  },
  {
    slug: "restaurant-dotacion",
    year: "2024",
    area: "Remuneraciones",
    title: "Catorce liquidaciones que por fin cierran.",
    metric: "14",
    metricLabel: "trabajadores",
    summary:
      "Un restaurant en Bellavista mezclaba propinas, honorarios y sueldos. Armamos libro, contratos y Previred. La DT no volvió a citarlos ese año.",
    result: "Dotación regularizada, finiquitos tipo, cotizaciones al día.",
    comuna: "Santiago",
  },
];

export const stats = [
  { value: "12", label: "Años de oficio" },
  { value: "4", label: "Contadores" },
  { value: "24 h", label: "Respuesta hábil" },
  { value: "0", label: "Letra chica" },
];

export const principles = [
  {
    room: "01",
    title: "Si no se entiende, no está listo.",
    text: "Un balance que hay que traducir no es un balance. Lo reescribimos hasta que se puede decir en la terraza.",
  },
  {
    room: "02",
    title: "Los plazos no se improvisan.",
    text: "El F29 es el día 12. O el 20, si factura en el SII. Lo tenemos en la pared. Y en esta web.",
  },
  {
    room: "03",
    title: "El cupo es el oficio.",
    text: "No tomamos cien carteras. Si el mes está lleno, se lo decimos. Preferimos un no a un F29 a las 23:50.",
  },
];

export const steps = [
  {
    room: "01",
    title: "Escribe",
    body: "Un correo, un WhatsApp o el formulario. Giro, RUT si lo tiene, y de qué se trata. Nada de ensayos.",
  },
  {
    room: "02",
    title: "Primera hora",
    body: "Cuarenta y cinco minutos en la mesa o por videollamada. $38.000, que se descuentan si nos quedamos.",
  },
  {
    room: "03",
    title: "La libreta",
    body: "Si hay encaje, le proponemos un honorario en UF, por escrito, y una libreta mensual que se puede leer.",
  },
  {
    room: "04",
    title: "Cada mes",
    body: "Cierre, F29, remuneraciones si hay. Un mensaje el día 8. No un misterio el día 22.",
  },
];

export const fees = [
  {
    servicio: "Primera hora",
    precio: "$38.000",
    nota: "45 minutos. Se descuenta del primer mes si tomamos la cartera.",
  },
  {
    servicio: "Independiente",
    precio: "desde 1,8 UF / mes",
    nota: "Boletas, F29 de 2ª categoría y un cierre que se entiende.",
  },
  {
    servicio: "Pyme · hasta 20 documentos",
    precio: "desde 4 UF / mes",
    nota: "Contabilidad, F29 y un estado mensual. Sin remuneraciones.",
  },
  {
    servicio: "Pyme · 20 a 80 documentos",
    precio: "desde 6,5 UF / mes",
    nota: "El tramo de la mayoría. Se cotiza con una muestra del mes.",
  },
  {
    servicio: "Remuneraciones",
    precio: "0,35 UF / trabajador",
    nota: "Piso 1,2 UF. Liquidaciones, Previred y libro.",
  },
  {
    servicio: "F22 · Operación Renta",
    precio: "desde 3 UF",
    nota: "Clientes de la casa: se descuenta del mes de abril.",
  },
  {
    servicio: "Constitución de SpA",
    precio: "7 UF",
    nota: "RES, estatutos, inicio de actividades. Patente, aparte.",
  },
  {
    servicio: "Término de giro",
    precio: "4 UF",
    nota: "Cierre con el SII. No abandonar el RUT a su suerte.",
  },
];

export const paths = [
  {
    title: "Independiente",
    text: "Boletea, guarda “por si acaso” y no sabe si le conviene una sociedad.",
    href: "/servicios/independientes",
  },
  {
    title: "Pyme",
    text: "Ya hay factura, hay un banco y hay un F29 que llega siempre apurado.",
    href: "/servicios/mensual",
  },
  {
    title: "Con socios",
    text: "Hay que constituir, modificar o separar. El pacto importa tanto como el RUT.",
    href: "/servicios/sociedades",
  },
  {
    title: "Con gente a cargo",
    text: "Liquidaciones, Previred, un finiquito que no cierra. Eso es Joaquín.",
    href: "/servicios/remuneraciones",
  },
];

export function getPractice(slug: string) {
  return practices.find((item) => item.slug === slug);
}

export function getPerson(slug: string) {
  return people.find((item) => item.slug === slug);
}
