export type Practice = {
  slug: string;
  number: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  lawyerSlug: string;
  body: string;
  work: string[];
  matters: string[];
};

export type Lawyer = {
  slug: string;
  name: string;
  role: string;
  practice: string;
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
};

export type Article = {
  slug: string;
  date: string;
  dateLabel: string;
  title: string;
  dek: string;
  area: string;
  read: string;
  body: string[];
};

export const practices: Practice[] = [
  {
    slug: "corporativo",
    number: "01",
    title: "Corporativo y M&A",
    short: "Sociedades, fusiones y gobierno.",
    lead: "Operaciones que tienen que cerrar. Y estructuras que tienen que durar.",
    image: "/images/salon.jpg",
    lawyerSlug: "clara-montes",
    body: "Asesoramos a empresas familiares, fondos y grupos locales en el diseño de su arquitectura societaria y en las operaciones que la modifican. No producimos carpetas. Producimos decisiones que se pueden firmar.",
    work: [
      "Fusiones, adquisiciones y desinversiones",
      "Gobierno de sociedades y acuerdos de accionistas",
      "Due diligence legal y de compliance",
      "Reorganizaciones, spin-offs y joint ventures",
      "Contratos comerciales de alta complejidad",
    ],
    matters: [
      "Compraventa de paquete de control en agroindustria",
      "Acuerdo de accionistas para un grupo de tercera generación",
      "Joint venture con un socio estratégico europeo",
    ],
  },
  {
    slug: "contencioso",
    number: "02",
    title: "Contencioso y arbitraje",
    short: "Litigio cuando hace falta. Salida cuando conviene.",
    lead: "Litigamos cuando el expediente es el camino. Y salimos cuando no lo es.",
    image: "/images/stairs.jpg",
    lawyerSlug: "tomas-rivas",
    body: "El fuero no es un escenario. Es una herramienta. Medimos cada asunto por su costo real —tiempo, exposición, precedente— y diseñamos la estrategia antes de la primera presentación. Si el mejor resultado está fuera del expediente, lo decimos.",
    work: [
      "Litigio comercial y civil complejo",
      "Arbitraje doméstico e internacional",
      "Medidas cautelares y ejecuciones",
      "Disputas entre socios y conflictos de gobierno",
      "Recursos ante cámaras y Corte Suprema",
    ],
    matters: [
      "Arbitraje por incumplimiento de un SPA de USD 40 M",
      "Defensa de un directorio en acción de responsabilidad",
      "Ejecución de un laudo extranjero en Argentina",
    ],
  },
  {
    slug: "laboral",
    number: "03",
    title: "Laboral",
    short: "Gente, convenios, conflictos.",
    lead: "La relación de trabajo es el mayor pasivo contingente de una empresa. Lo tratamos como tal.",
    image: "/images/desk.jpg",
    lawyerSlug: "nicolas-saavedra",
    body: "Trabajamos con directorios y áreas de personas en el diseño de esquemas de contratación, en conflictos individuales y colectivos, y en reestructuraciones que tienen que sostenerse. El objetivo no es ganar el juicio. Es no necesitarlo.",
    work: [
      "Reestructuraciones y programas de egreso",
      "Negociación colectiva y conflictos gremiales",
      "Alta dirección, equity y no competencia",
      "Auditorías de cumplimiento laboral",
      "Litigio individual y colectivo",
    ],
    matters: [
      "Reconversión de una planta de 2.400 personas",
      "Diseño de un plan de equity para una scale-up",
      "Cierre de un conflicto gremial sin paro",
    ],
  },
  {
    slug: "familia",
    number: "04",
    title: "Familia y sucesiones",
    short: "Patrimonios, herencias, acuerdos.",
    lead: "Asuntos de familia que no se resuelven con un formulario. Se resuelven con criterio y discreción.",
    image: "/images/library.jpg",
    lawyerSlug: "ines-ferrer",
    body: "Acompañamos a familias en la organización de su patrimonio, en sucesiones locales e internacionales, y en conflictos que no pueden filtrarse. La confidencialidad no es un valor agregado. Es la condición de trabajo.",
    work: [
      "Planificación sucesoria y protocolos de familia",
      "Sucesiones locales y con elemento extranjero",
      "Divorcios de alta complejidad patrimonial",
      "Fideicomisos, donaciones y usufructos",
      "Mediación y acuerdos homologados",
    ],
    matters: [
      "Sucesión con bienes en tres jurisdicciones",
      "Protocolo de familia para un grupo industrial",
      "Acuerdo patrimonial homologado en 90 días",
    ],
  },
  {
    slug: "inmobiliario",
    number: "05",
    title: "Inmobiliario y urbanismo",
    short: "Tierra, obra, título.",
    lead: "Del título al último metro cubierto. Sin sorpresas en el medio.",
    image: "/images/facade.jpg",
    lawyerSlug: "lucia-benavidez",
    body: "Asesoramos a desarrolladores, family offices e inversores en la adquisición, el desarrollo y la disposición de activos. Urbanismo, fideicomisos, consorcios y conflictos de obra: el expediente inmobiliario es un oficio, no un anexo.",
    work: [
      "Compraventa y due diligence de inmuebles",
      "Fideicomisos al costo y desarrollos",
      "Urbanismo, habilitación y normativa porteña",
      "Consorcios, PH y conflictos de vecinos",
      "Financiamiento y garantías reales",
    ],
    matters: [
      "Habilitación de un desarrollo en Puerto Madero",
      "Due diligence de un portfolio de 18 activos",
      "Reestructuración de un fideicomiso en mora",
    ],
  },
  {
    slug: "compliance",
    number: "06",
    title: "Compliance y penal económico",
    short: "Investigar, prevenir, defender.",
    lead: "Cuando el riesgo es penal, la primera hora cuenta más que el resto del expediente.",
    image: "/images/desk.jpg",
    lawyerSlug: "elena-alba",
    body: "Diseñamos programas de integridad que se usan, no que se archivan. Investigamos internamente. Y defendemos a personas y compañías ante la UIF, la CNV, la AFIP y el fuero penal económico. La prevención y la defensa son la misma práctica, vista desde dos momentos.",
    work: [
      "Programas de integridad y canales de denuncia",
      "Investigaciones internas",
      "Defensa penal económica y tributaria",
      "Prevención de lavado y relación con la UIF",
      "CNV, mercado de capitales y sanktions",
    ],
    matters: [
      "Investigación interna en un grupo cotizado",
      "Archivo de una investigación de la CNV",
      "Implementación de un programa Ley 27.401",
    ],
  },
];

export const lawyers: Lawyer[] = [
  {
    slug: "elena-alba",
    name: "Elena Alba",
    role: "Socia fundadora",
    practice: "Corporativo · Compliance",
    image: "/images/elena.jpg",
    email: "ealba@alba.ar",
    bio: [
      "Fundó el estudio en 1998, después de seis años en un estudio internacional y un paso por el directorio jurídico de un banco. Concibe el derecho de empresas como un oficio de precisión: menos asuntos, más tiempo de pensamiento, ninguna frase de más.",
      "Hoy conduce el gobierno del estudio y la práctica de compliance. Sienta a la mesa cuando el asunto toca al directorio, a un regulador o a la continuidad de una familia empresaria.",
    ],
    education: [
      "Abogada, Universidad de Buenos Aires",
      "LL.M., Columbia Law School",
    ],
    admissions: ["CPACF", "New York State Bar"],
    languages: ["Español", "Inglés", "Francés"],
  },
  {
    slug: "tomas-rivas",
    name: "Tomás Rivas",
    role: "Socio",
    practice: "Contencioso y arbitraje",
    image: "/images/tomas.jpg",
    email: "trivas@alba.ar",
    bio: [
      "Litiga desde 2004. Pasó por el fuero comercial, por cámaras y por dos arbitrajes CCI. Desconfía de la teatralidad. Confía en el expediente bien armado y en la llamada que evita el expediente.",
      "Dirige la práctica contenciosa. Toma personalmente las medidas cautelares, los conflictos entre socios y todo lo que no admite una segunda chance procesal.",
    ],
    education: [
      "Abogado, Universidad de Buenos Aires",
      "Posgrado en Arbitraje, Universidad Austral",
    ],
    admissions: ["CPACF"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "clara-montes",
    name: "Clara Montes",
    role: "Socia",
    practice: "Corporativo y M&A",
    image: "/images/clara.jpg",
    email: "cmontes@alba.ar",
    bio: [
      "Llegó al estudio en 2012, después de cuatro años en el equipo de M&A de un magic circle en Madrid. Cierra operaciones. Y, lo que es más difícil, las deja en un estado en el que se pueden vivir después del closing.",
      "Lidera corporativo. Es la socia que las empresas familiares llaman cuando hay que decirle a un hermano que el acuerdo de accionistas no es un papel.",
    ],
    education: [
      "Abogada, Universidad Torcuato Di Tella",
      "Máster en Derecho de la Empresa, IE Law School",
    ],
    admissions: ["CPACF", "Ilustre Colegio de Madrid (ejercicio suspendido)"],
    languages: ["Español", "Inglés", "Italiano"],
  },
  {
    slug: "nicolas-saavedra",
    name: "Nicolás Saavedra",
    role: "Socio",
    practice: "Laboral",
    image: "/images/nicolas.jpg",
    email: "nsaavedra@alba.ar",
    bio: [
      "Hizo el fuero laboral desde adentro: fue prosecretario antes de pasar a la matrícula. Esa memoria del expediente se nota. Negocia como quien ya vio el final de la causa.",
      "Conduce laboral. Interviene en reestructuraciones, alta dirección y conflictos gremiales. Si un plan de egreso no se puede explicar en una asamblea, no sale del estudio.",
    ],
    education: [
      "Abogado, Universidad de Buenos Aires",
      "Especialista en Derecho del Trabajo, UBA",
    ],
    admissions: ["CPACF"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "ines-ferrer",
    name: "Inés Ferrer",
    role: "Socia",
    practice: "Familia y sucesiones",
    image: "/images/ines.jpg",
    email: "iferrer@alba.ar",
    bio: [
      "Trabaja con familias desde 2008. Mediadora. Habla poco en las reuniones y escribe de un modo que las partes pueden firmar sin sentir que perdieron.",
      "Dirige familia y sucesiones. Toma las herencias con elemento extranjero, los protocolos de familia y los divorcios en los que el patrimonio es el verdadero litigio.",
    ],
    education: [
      "Abogada, Universidad de Buenos Aires",
      "Mediadora, Ministerio de Justicia de la Nación",
      "Posgrado en Derecho de Familia Patrimonial, UCA",
    ],
    admissions: ["CPACF"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "lucia-benavidez",
    name: "Lucía Benavídez",
    role: "Asociada senior",
    practice: "Inmobiliario y urbanismo",
    image: "/images/lucia.jpg",
    email: "lbenavidez@alba.ar",
    bio: [
      "Se incorporó en 2019. Antes pasó por el equipo de real estate de un estudio de la City y por la dirección de obra de un desarrollador. Lee un plano con la misma atención con la que lee un reglamento de PH.",
      "Lleva inmobiliario junto a Elena. Due diligence de portfolios, fideicomisos al costo y todo lo que el urbanismo porteño convierte en un asunto de meses.",
    ],
    education: [
      "Abogada, Universidad Austral",
      "Posgrado en Derecho Urbanístico, UBA",
    ],
    admissions: ["CPACF"],
    languages: ["Español", "Inglés"],
  },
];

export const matters: Matter[] = [
  {
    slug: "agro-control",
    year: "2025",
    area: "Corporativo y M&A",
    title: "Paquete de control en un grupo agroindustrial",
    metric: "11",
    metricLabel: "semanas al closing",
    summary:
      "Compraventa del 62 % de un grupo con operaciones en tres provincias. Due diligence, acuerdo de accionistas con la familia vendedora y financiamiento de la operación en paralelo.",
    result:
      "Closing en once semanas. Sin condiciones suspensivas abiertas. El vendedor permanece en el directorio con derechos de minoría tasados.",
  },
  {
    slug: "planta",
    year: "2024",
    area: "Laboral",
    title: "Reconversión de una planta de 2.400 personas",
    metric: "0",
    metricLabel: "días de paro",
    summary:
      "Programa de egreso voluntario, reconversión de oficios y negociación con dos gremios. El directorio necesitaba una salida que no rompiera la licencia social de la planta.",
    result:
      "Acuerdo colectivo homologado. 0 días de paro. El 81 % de las bajas se resolvió por egreso voluntario.",
  },
  {
    slug: "sucesion-tres",
    year: "2024",
    area: "Familia y sucesiones",
    title: "Sucesión con bienes en tres jurisdicciones",
    metric: "3",
    metricLabel: "jurisdicciones, un criterio",
    summary:
      "Patrimonio familiar con inmuebles en CABA, una sociedad en Uruguay y cuentas en Suiza. Herederos en desacuerdo sobre el inventario y sobre quién administraba.",
    result:
      "Inventario único, administrador único y un protocolo para la generación siguiente. Sin juicio de colación.",
  },
  {
    slug: "cnv",
    year: "2023",
    area: "Compliance",
    title: "Investigación de la CNV sobre hechos de mercado",
    metric: "0",
    metricLabel: "sanción",
    summary:
      "Una emisora recibió un requerimiento de la CNV por operaciones de un director. Armamos la investigación interna en 72 horas y el descargo con la evidencia, no con la narrativa.",
    result:
      "Archivo. El directorio adoptó un protocolo de information barriers que hoy está en el código de integridad.",
  },
  {
    slug: "madero",
    year: "2025",
    area: "Inmobiliario",
    title: "Habilitación de un desarrollo en Puerto Madero",
    metric: "14",
    metricLabel: "meses, de plano a escritura",
    summary:
      "Un fideicomiso al costo con observaciones de urbanismo, un consorcio linderista y un banco que no desembolsaba. Tres frentes, un calendario.",
    result:
      "Habilitación obtenida. Demanda de vecinos desistida. El banco desembolsó contra un dictamen nuestro.",
  },
  {
    slug: "spa-arbitraje",
    year: "2023",
    area: "Contencioso",
    title: "Arbitraje por un SPA de USD 40 millones",
    metric: "40",
    metricLabel: "M USD en disputa",
    summary:
      "El comprador reclamó ajuste de precio y declaración falsa sobre un pasivo laboral. El vendedor, nuestro cliente, sostenía que el pasivo estaba disclosed.",
    result:
      "Laudo que rechaza el dolo y reduce el ajuste al 7 % del reclamo original. Costas compartidas.",
  },
];

export const articles: Article[] = [
  {
    slug: "directorio-que-no-delibero",
    date: "2026-08-12",
    dateLabel: "12 de agosto de 2026",
    title: "El directorio que no deliberó",
    dek: "Actas perfectas, decisiones nulas. Lo que la jurisprudencia reciente le está diciendo a los directorios que firman sin reunirse.",
    area: "Corporativo",
    read: "8 min",
    body: [
      "Hay actas impecables. Convocatoria, quórum, orden del día, firmas. Y sin embargo el directorio no deliberó. Firmó. La distinción, que durante años se trató como un prurito académico, está volviendo al fuero comercial con consecuencias concretas: nulidad de la decisión, responsabilidad de quienes firmaron y, en más de un caso, inoponibilidad frente a terceros de buena fe que, de pronto, dejan de serlo.",
      "La Ley General de Sociedades no exige un ritual. Exige una deliberación. Eso significa debate, disenso posible, y un presidente que no llega a la reunión con el texto ya cerrado. Las reuniones por escrito existen, y son válidas cuando el estatuto las prevé y cuando todos los directores participan. Lo que no existe es el acta que se circula el viernes a las 19 y se devuelve firmada el lunes, con un ‘ok’ en el asunto del correo.",
      "En ALBA estamos viendo, en due diligence y en conflictos entre socios, un patrón: directorios de empresas familiares que funcionan como una extensión de la mesa del domingo. Funciona mientras hay paz. El día que un hermano se siente, el acta se convierte en la prueba de que no hubo gobierno.",
      "Tres prácticas que sostenemos con nuestros clientes. Primera: el orden del día se circula con los papeles, no con un resumen. Segunda: el disenso se asienta. Un director que vota en contra y no lo deja por escrito no votó en contra. Tercera: las reuniones unánimes por escrito se reservan para lo rutinario. Lo que cambia el rumbo de la sociedad se discute con las cámaras apagadas, y se escribe después.",
      "El gobierno de una sociedad no es un costo de cumplimiento. Es el único seguro que un directorio puede contratar consigo mismo.",
    ],
  },
  {
    slug: "no-competencia",
    date: "2026-06-03",
    dateLabel: "3 de junio de 2026",
    title: "No competencia: lo que sigue vigente",
    dek: "Después de la reforma, mucha cláusula de no competencia nació muerta. Otras, bien escritas, valen más que nunca.",
    area: "Laboral",
    read: "6 min",
    body: [
      "La cláusula de no competencia post contractual es, en Argentina, un objeto jurídico frágil. Lo era antes de la reforma. Lo sigue siendo. Lo que cambió no es la fragilidad: es la cantidad de empresas que la copiaron de un template extranjero y ahora necesitan saber si tienen un derecho o un adorno.",
      "El criterio que sostenemos —y que el fuero laboral, con matices, viene confirmando— es simple. La no competencia es válida cuando es onerosa, limitada en el tiempo, limitada en el territorio y limitada en el objeto. Si falta una, cae. Si las cuatro están, y la contraprestación no es simbólica, se puede pedir su cumplimiento.",
      "Onerosa no quiere decir ‘un sueldo’. Quiere decir una suma que haga razonable el sacrificio de no trabajar en el único mercado que esa persona conoce. Limitada en el tiempo: doce meses es defendible; treinta y seis, casi nunca. Territorio: el mercado real, no ‘toda la República y países limítrofes’. Objeto: la actividad concreta, no ‘cualquier negocio del grupo’.",
      "Hay otra vía, a menudo más limpia: la confidencialidad bien escrita y el pacto de no captación de clientes y equipos. No impiden trabajar. Impiden llevarse lo que no es de uno. Los jueces las miran con menos recelo, y el cliente suele necesitar eso, no un cinturón de castidad laboral.",
      "Si su cláusula tiene más de tres años, conviene leerla otra vez. No para asustarse. Para saber, con precisión, qué se puede pedir el día que alguien se va.",
    ],
  },
  {
    slug: "sucesion-en-vida",
    date: "2026-03-18",
    dateLabel: "18 de marzo de 2026",
    title: "La sucesión que empieza en vida",
    dek: "Donar, reservar usufructo, escribir un protocolo. Tres instrumentos que evitan el juicio de sucesorios más caro: el de los hermanos que ya no se hablan.",
    area: "Familia",
    read: "7 min",
    body: [
      "La sucesión argentina está diseñada para un país que ya no existe: un causante, un inmueble, cuatro hijos en la misma ciudad. El inventario de una familia empresaria de Recoleta, hoy, incluye una sociedad, un departamento en Punta del Este, un fideicomiso mal armado y un hijo que vive en Madrid y no piensa volver a firmar ante un escribano porteño.",
      "Esperar el fallecimiento para ordenar eso no es prudencia. Es una apuesta. La legítima existe y hay que respetarla. Eso no impide donar en vida con reserva de usufructo, constituir un fideicomiso de administración, o escribir un protocolo de familia que diga —con nombres y con mayorías— quién gobierna la sociedad el día que el fundador no esté.",
      "La donación con usufructo es el instrumento más usado y el más mal usado. Bien hecha, permite al donante vivir del bien y sacar del acervo sucesorio un activo que, de otro modo, va a trabar la hijuela durante años. Mal hecha —sin computar la mejora, sin notificar a los legitimarios, sin pensar el impuesto— es un juicio de colación con otro nombre.",
      "El protocolo de familia no es un documento afectivo. Es un acuerdo de accionistas disfrazado de carta. Si no se puede ejecutar, no sirve. En el estudio los redactamos como lo que son: contratos. Con put options, con reglas de valuación, con un mecanismo de salida para el hermano que no quiere seguir.",
      "La conversación más difícil es la que se tiene en vida, con café. La más cara es la que se tiene después, con un expediente. Elegir no es una cuestión de sensibilidad. Es una cuestión de costo.",
    ],
  },
];

export const principles = [
  {
    number: "01",
    title: "Pocos asuntos",
    text: "No tomamos lo que no podemos pensar. El cupo no es un gesto: es el método. Cada expediente tiene un socio que lo leyó entero.",
  },
  {
    number: "02",
    title: "Decirlo pronto",
    text: "Si el asunto no es nuestro, se lo decimos en la primera reunión. Si el mejor camino es transar, también. El tiempo del cliente no es un insumo.",
  },
  {
    number: "03",
    title: "Escribir claro",
    text: "Un contrato que no se entiende no protege. Un dictamen que no se puede leer en voz alta no sirve para decidir. La claridad es una forma de rigor.",
  },
];

export const stats = [
  { value: "1998", label: "Año de fundación" },
  { value: "8", label: "Abogados" },
  { value: "1", label: "Sede, Recoleta" },
  { value: "27", label: "Años de oficio" },
];

export function getPractice(slug: string) {
  return practices.find((item) => item.slug === slug);
}

export function getLawyer(slug: string) {
  return lawyers.find((item) => item.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}

export function getMatter(slug: string) {
  return matters.find((item) => item.slug === slug);
}
