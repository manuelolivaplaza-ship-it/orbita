export const site = {
  name: "Vigilia",
  legalName: "Vigilia Estudio Jurídico SpA",
  tagline: "El escrito se termina de noche.",
  description:
    "Estudio jurídico en Lastarria, Santiago Centro. Civil, laboral, familia, recursos constitucionales y administrativo. Cuatro abogados. Honorario en UF, por escrito, antes de firmar. A ocho minutos del Palacio de los Tribunales.",
  url: "https://vigilia.cl",
  rut: "77.412.890-3",
  founded: 2016,
  years: 10,
  lawyers: 4,
  email: "hola@vigilia.cl",
  phone: "+56 9 8841 2270",
  phoneHref: "tel:+56988412270",
  whatsapp:
    "https://wa.me/56988412270?text=Hola%2C%20quiero%20pedir%20la%20primera%20hora%20en%20Vigilia.",
  address: {
    line: "José Victorino Lastarria 70, of. 3",
    city: "Santiago Centro",
    region: "Región Metropolitana",
    country: "Chile",
    postal: "8320126",
    maps: "https://maps.google.com/?q=Jose+Victorino+Lastarria+70+Santiago",
  },
  metro: "Bellas Artes · 4 min a pie",
  tribunales: "Palacio de los Tribunales · 8 min a pie",
  hours: "Lunes a viernes, 9:00 a 20:00",
  hoursShort: "Lun–Vie 9:00–20:00",
  lastHour: "20:00",
  instagram: "https://instagram.com/estudio.vigilia",
  linkedin: "https://www.linkedin.com/company/vigilia-estudio",
  colegio: "Colegio de Abogados de Chile",
} as const;

export const nav = [
  { href: "/estudio", label: "El estudio" },
  { href: "/materias", label: "Materias" },
  { href: "/equipo", label: "Mesa" },
  { href: "/honorarios", label: "Honorarios" },
] as const;

export type Practice = {
  slug: string;
  folio: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  lawyerSlug: string;
  body: string[];
  work: string[];
  when: string[];
};

export const practices: Practice[] = [
  {
    slug: "civil",
    folio: "01",
    title: "Civil y contratos",
    short: "Incumplimiento, cobro, juicio ordinario.",
    lead: "Un contrato se lee dos veces: el día que se firma y el día que falla.",
    image: "/images/escrito.jpg",
    lawyerSlug: "emilia-contreras",
    body: [
      "Redactamos, revisamos y litigamos. Incumplimiento, indemnización de perjuicios, juicio ordinario y ejecutivo. Preferimos un acuerdo que se pueda exigir a un juicio que se alarga; cuando el juicio es el camino, lo decimos con etapas y un honorario en UF.",
      "No firmamos modelos bajados de internet. El papel tiene que sobrevivir al día en que las partes ya no se hablan.",
    ],
    work: [
      "Redacción y revisión de contratos",
      "Incumplimiento e indemnización de perjuicios",
      "Juicio ordinario y ejecutivo",
      "Arrendamiento urbano (Ley 18.101)",
      "Responsabilidad civil extracontractual",
    ],
    when: [
      "Le deben y el título está firme",
      "Hay que firmar un contrato que no entiende",
      "Un arriendo se puso difícil",
    ],
  },
  {
    slug: "laboral",
    folio: "02",
    title: "Laboral",
    short: "Despido, tutela, comparendo en la DT.",
    lead: "El Código del Trabajo no se improvisa. Tampoco el comparendo de la Inspección.",
    image: "/images/mesa.jpg",
    lawyerSlug: "tomas-herrera",
    body: [
      "Defendemos a trabajadores y asesoramos a pymes que quieren hacer las cosas bien. Despido injustificado, tutela de derechos fundamentales, fuero maternal o sindical, cotizaciones y finiquitos.",
      "Si lo citaron a la Dirección del Trabajo esta semana, esa es la primera conversación. Tomás lleva el comparendo. No lo delega.",
    ],
    work: [
      "Despido injustificado y recargos del art. 168",
      "Tutela de derechos fundamentales",
      "Fuero maternal, paternal y sindical",
      "Finiquito, cotizaciones y comparendo ante la DT",
      "Reglamento interno y auditoría laboral para pymes",
    ],
    when: [
      "Lo despidieron y el finiquito no cierra",
      "Citación a comparendo en la Inspección",
      "Fuero o licencia que la empresa no respeta",
    ],
  },
  {
    slug: "familia",
    folio: "03",
    title: "Familia",
    short: "Divorcio, alimentos, cuidado personal.",
    lead: "Asuntos de casa. Se hablan en voz baja y se escriben con precisión.",
    image: "/images/lampara.jpg",
    lawyerSlug: "catalina-rios",
    body: [
      "Divorcio de mutuo acuerdo o contencioso, pensión de alimentos, cuidado personal y relación directa y regular. En Chile la mediación familiar previa es obligatoria en varios de estos asuntos: la agendamos, la preparamos y no la tratamos como un trámite.",
      "No usamos la palabra tuición. Se llama cuidado personal, y el lenguaje importa cuando hay niños de por medio. Compensación económica cuando corresponde. Sin promesas de resultado.",
    ],
    work: [
      "Divorcio de mutuo acuerdo y contencioso",
      "Pensión de alimentos y retención de remuneración",
      "Cuidado personal y relación directa y regular",
      "Mediación familiar previa obligatoria",
      "Compensación económica y liquidación de sociedad conyugal",
    ],
    when: [
      "Quiere divorciarse con o sin acuerdo",
      "La pensión no se paga o no alcanza",
      "Hay que regular cuidado personal o visitas",
    ],
  },
  {
    slug: "recursos",
    folio: "04",
    title: "Recursos",
    short: "Protección, amparo, casación.",
    lead: "Cuando el acto ya se dictó, queda el recurso. Y el plazo corre.",
    image: "/images/escalera.jpg",
    lawyerSlug: "emilia-contreras",
    body: [
      "Recurso de protección, amparo, casación en la forma y en el fondo. Acción de inaplicabilidad cuando el caso lo pide. No es un estudio de opiniones: es un estudio de plazos y de escrito.",
      "Si le notificaron una resolución y no sabe si cabe recurso, la primera hora sirve para eso. A veces la respuesta es no. También se la damos por escrito.",
    ],
    work: [
      "Recurso de protección (art. 20 CPR)",
      "Recurso de amparo",
      "Casación en la forma y en el fondo",
      "Nulidad procesal y recursos ordinarios",
      "Acción de inaplicabilidad ante el Tribunal Constitucional",
    ],
    when: [
      "Le notificaron una resolución y el plazo corre",
      "Un acto de autoridad le afecta un derecho",
      "Perdió en primera instancia y hay que mirar el recurso",
    ],
  },
  {
    slug: "administrativo",
    folio: "05",
    title: "Administrativo",
    short: "El Estado también se demanda.",
    lead: "Un acto administrativo se lee dos veces. La segunda, en Contraloría.",
    image: "/images/pasillo.jpg",
    lawyerSlug: "ignacio-paredes",
    body: [
      "Procedimientos administrativos, silencio, invalidación, reclamos ante Contraloría y litigación contencioso-administrativa. Permisos, sanciones, municipalidades y servicios públicos.",
      "Ignacio lee el acto dos veces. El Estado también se demanda, y el plazo de la Ley 19.880 no espera a que alguien conteste el correo.",
    ],
    work: [
      "Impugnación de actos administrativos",
      "Silencio administrativo e invalidación",
      "Reclamos ante Contraloría General de la República",
      "Sanciones, permisos y municipalidades",
      "Litigación ante tribunales de lo contencioso-administrativo",
    ],
    when: [
      "Un permiso no sale y el silencio ya corrió",
      "Una sanción o un acto municipal no cierra",
      "Hay que presentar un reclamo en Contraloría",
    ],
  },
];

export type Lawyer = {
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

export const lawyers: Lawyer[] = [
  {
    slug: "emilia-contreras",
    name: "Emilia Contreras",
    role: "Socia",
    practice: "Civil y recursos",
    practiceSlug: "civil",
    image: "/images/emilia.jpg",
    email: "emilia@vigilia.cl",
    bio: [
      "Emilia fundó Vigilia en 2016, en este piso, porque no quería un estudio donde el socio no firma. Sigue tomando ella los recursos que importan. Se queda cuando el escrito no está.",
      "Litiga civil y constitucional. Cree que un plazo mal contado es el origen de la mitad de los desastres, y que la primera hora tiene que doler un poco: si no hay caso, se lo dice esa tarde.",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, Universidad de Chile",
      "Magíster en Derecho Procesal, Universidad Diego Portales",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "tomas-herrera",
    name: "Tomás Herrera",
    role: "Socio",
    practice: "Laboral",
    practiceSlug: "laboral",
    image: "/images/tomas.jpg",
    email: "tomas@vigilia.cl",
    bio: [
      "Tomás lleva el comparendo. No lo delega. Dice que la Dirección del Trabajo se gana de pie, no por correo. Llegó a Vigilia en 2018 y armó la práctica laboral.",
      "Antes de demandar, pide el finiquito, las liquidaciones y el contrato. Siempre. Aunque le digan que no hay nada escrito.",
    ],
    education: [
      "Licenciado en Derecho, Pontificia Universidad Católica de Chile",
      "Magíster en Derecho del Trabajo, Universidad Diego Portales",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español"],
  },
  {
    slug: "catalina-rios",
    name: "Catalina Ríos",
    role: "Asociada",
    practice: "Familia",
    practiceSlug: "familia",
    image: "/images/catalina.jpg",
    email: "catalina@vigilia.cl",
    bio: [
      "Catalina lleva familia desde que salió de la UDP. Mediación, alimentos, cuidado personal. En esta mesa se han firmado más acuerdos de los que caben en un anuario.",
      "No usa la palabra tuición. En Chile se llama cuidado personal. La mediación previa la prepara como si fuera la audiencia.",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, Universidad Diego Portales",
      "Diplomado en Derecho de Familia, Universidad de Chile",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español", "Francés"],
  },
  {
    slug: "ignacio-paredes",
    name: "Ignacio Paredes",
    role: "Asociado",
    practice: "Administrativo",
    practiceSlug: "administrativo",
    image: "/images/ignacio.jpg",
    email: "ignacio@vigilia.cl",
    bio: [
      "Ignacio lee el acto administrativo dos veces. Contraloría, silencio, invalidación. El Estado también se demanda. Entró a Vigilia en 2022.",
      "Es el que marca el plazo en el calendario y no lo suelta. Si un permiso no sale, primero cuenta los días.",
    ],
    education: [
      "Licenciado en Derecho, Universidad Adolfo Ibáñez",
      "Diplomado en Derecho Administrativo, Universidad de Chile",
    ],
    admissions: ["Corte Suprema de Chile"],
    languages: ["Español", "Inglés"],
  },
];

export const matters = [
  {
    slug: "proteccion-isapre",
    year: "2025",
    area: "Recursos",
    title: "Cobertura denegada, recurso de protección",
    metric: "11",
    metricLabel: "días a fallo de la Corte",
    summary:
      "Isapre rechazó una cobertura. Recurso de protección, orden de no innovar y sentencia. El plazo se contó el mismo día de la notificación.",
    result: "Acogido. Cobertura ordenada.",
    comuna: "Santiago",
  },
  {
    slug: "despido-recoleta",
    year: "2025",
    area: "Laboral",
    title: "Despido verbal en una pyme de Recoleta",
    metric: "21,6",
    metricLabel: "millones de pesos",
    summary:
      "Trabajador despedido de palabra, sin carta ni cotizaciones al día. Demanda por despido injustificado y nulidad. Acuerdo en audiencia única.",
    result: "Pago de indemnizaciones, recargo y cotizaciones.",
    comuna: "Recoleta",
  },
  {
    slug: "divorcio-lastarria",
    year: "2025",
    area: "Familia",
    title: "Divorcio de mutuo acuerdo, sociedad conyugal incluida",
    metric: "16",
    metricLabel: "semanas a sentencia",
    summary:
      "Matrimonio de quince años, un departamento, un hijo mayor. Acuerdo completo, compensación económica pactada y sentencia sin audiencia de prueba.",
    result: "Divorcio y liquidación en un mismo acuerdo.",
    comuna: "Santiago",
  },
  {
    slug: "silencio-municipal",
    year: "2024",
    area: "Administrativo",
    title: "Permiso municipal y silencio de la Ley 19.880",
    metric: "47",
    metricLabel: "días de silencio contados",
    summary:
      "Una dirección de obras no contestó. Se contó el plazo, se tuvo por rechazado y se impugnó. El acto no se espera: se cuenta.",
    result: "Reclamo presentado en tiempo. Permiso regularizado.",
    comuna: "Providencia",
  },
  {
    slug: "contrato-providencia",
    year: "2024",
    area: "Civil",
    title: "Incumplimiento de un contrato de prestación",
    metric: "9",
    metricLabel: "meses a transacción",
    summary:
      "Una pyme de Providencia con un contrato bien hecho y un cliente que dejó de pagar. Demanda, medida prejudicial y transacción antes de prueba.",
    result: "Pago del saldo y costas.",
    comuna: "Providencia",
  },
  {
    slug: "tutela-fuero",
    year: "2025",
    area: "Laboral",
    title: "Tutela y fuero maternal ignorado",
    metric: "6",
    metricLabel: "semanas a reincorporación",
    summary:
      "Despido durante fuero. Tutela de derechos fundamentales, reincorporación y recargo. El comparendo se preparó la noche anterior.",
    result: "Reincorporación y pago de remuneraciones.",
    comuna: "Independencia",
  },
] as const;

export const fees = [
  {
    servicio: "Primera hora (50 min)",
    precio: "$52.000",
    nota: "Se descuenta del honorario si tomamos el asunto. Diagnóstico verbal el mismo día.",
  },
  {
    servicio: "Minuta de viabilidad",
    precio: "desde 4 UF",
    nota: "Por escrito, en 48 horas hábiles. Estrategia, plazos y honorario cerrado.",
  },
  {
    servicio: "Comparendo ante la DT",
    precio: "desde 6 UF",
    nota: "Preparación y comparecencia. El mismo abogado que lo recibió.",
  },
  {
    servicio: "Divorcio de mutuo acuerdo",
    precio: "desde 14 UF",
    nota: "Incluye acuerdo, mediación cuando corresponde y tramitación.",
  },
  {
    servicio: "Pensión de alimentos",
    precio: "desde 9 UF",
    nota: "Demanda o mediación, más retención si procede.",
  },
  {
    servicio: "Despido injustificado",
    precio: "desde 16 UF",
    nota: "Por etapas. A veces un porcentaje del recargo, pactado antes.",
  },
  {
    servicio: "Recurso de protección",
    precio: "desde 18 UF",
    nota: "Escrito, orden de no innovar si cabe, y seguimiento hasta fallo.",
  },
  {
    servicio: "Juicio civil ordinario",
    precio: "desde 22 UF",
    nota: "Demanda, prueba y sentencia. Honorario por etapa, en UF.",
  },
] as const;

export const steps = [
  {
    folio: "01",
    title: "Escribe o llama",
    body: "WhatsApp, correo o el formulario. Le respondemos dentro de 24 horas hábiles. Si el asunto no es nuestro —penal, por ejemplo— se lo decimos ahí, y a quién conviene llamar.",
  },
  {
    folio: "02",
    title: "La primera hora",
    body: "Cincuenta minutos en Lastarria, o por videollamada si está fuera de Santiago. Traiga cédula, contratos, cartas, finiquitos, resoluciones. No hace falta un expediente armado.",
  },
  {
    folio: "03",
    title: "Minuta y honorario",
    body: "En 24 a 48 horas: si hay caso, qué haríamos, cuánto demora y cuánto cuesta. Honorario por escrito, en UF, más IVA. Sin letra chica.",
  },
  {
    folio: "04",
    title: "El mismo abogado",
    body: "Quien lo recibió, lo lleva. Actualización cada quince días. WhatsApp directo del abogado, no de una secretaría que no leyó el expediente. El escrito, a veces, se termina a las 23:00.",
  },
] as const;

export const principles = [
  {
    folio: "I",
    title: "Una causa, un abogado",
    text: "Quien toma la primera hora firma el escrito. No hay un socio de vitrina y un asociado que litiga.",
  },
  {
    folio: "II",
    title: "Las que caben en la mesa",
    text: "Cuatro abogados. Un número de asuntos que se pueden leer. Si el mes está lleno, se lo decimos. No acumulamos expedientes para parecer grandes.",
  },
  {
    folio: "III",
    title: "Por escrito, en UF",
    text: "Diagnóstico, estrategia y honorario salen en papel. El IVA va aparte. Lo que no está escrito, no está pactado.",
  },
  {
    folio: "IV",
    title: "La noche es para el escrito",
    text: "La última hora con cliente es a las 20:00. Después, la lámpara. No prometemos el fallo. Prometemos el escrito.",
  },
] as const;

export const stats = [
  { value: "2016", label: "El piso abre" },
  { value: "4", label: "Abogados" },
  { value: "8 min", label: "A Tribunales" },
  { value: "20:00", label: "Última hora" },
] as const;

export const faqs = [
  {
    q: "¿Prometen ganar el juicio?",
    a: "No. El Colegio de Abogados lo prohíbe y la práctica lo desmiente. Le decimos si hay caso, qué haríamos, cuánto demora y cuánto cuesta. El fallo lo dicta el tribunal.",
  },
  {
    q: "¿Los honorarios son en UF más IVA?",
    a: "Sí. La minuta sale en UF, el IVA va aparte, y se cobra por etapa. La primera hora se descuenta si tomamos el asunto.",
  },
  {
    q: "¿Toman defensa penal?",
    a: "No. Si el asunto es penal, se lo decimos en la primera respuesta y le indicamos a quién conviene llamar. No improvisamos materias.",
  },
  {
    q: "¿Atienden por videollamada?",
    a: "Sí, si está fuera de Santiago o no puede llegar a Lastarria. La primera hora sigue siendo de 50 minutos, con los papeles a la vista.",
  },
  {
    q: "¿Qué traigo a la primera hora?",
    a: "Cédula, y lo que tenga: contrato, finiquito, carta de despido, resolución, liquidaciones, correos. Si no tiene nada armado, igual venga. Armamos el relato juntos.",
  },
  {
    q: "¿Cuánto demoran en responder?",
    a: "24 horas hábiles. Si hay un plazo de días —protección, comparendo, notificación— escríbalo en el mensaje o llame.",
  },
] as const;

export const materiaOptions = [
  "Civil y contratos",
  "Laboral",
  "Familia",
  "Recursos",
  "Administrativo",
  "No lo tengo claro",
] as const;

export function getPractice(slug: string) {
  return practices.find((item) => item.slug === slug);
}

export function getLawyer(slug: string) {
  return lawyers.find((item) => item.slug === slug);
}


