export type Practice = {
  slug: string;
  room: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  lawyerSlug: string;
  body: string;
  work: string[];
  when: string[];
};

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
    slug: "laboral",
    room: "01",
    title: "Laboral",
    short: "Despido, fuero, finiquito, DT.",
    lead: "El Código del Trabajo no se improvisa. Ni el comparendo de la Inspección.",
    image: "/images/pasillo.jpg",
    lawyerSlug: "amanda-reyes",
    body: "Defendemos a trabajadores y asesoramos a pymes que quieren hacer las cosas bien. Despido injustificado, tutela de derechos fundamentales, fuero maternal o sindical, cotizaciones y finiquitos. Si lo citaron a la Dirección del Trabajo esta semana, esa es la primera conversación.",
    work: [
      "Despido injustificado y recargos del art. 168",
      "Tutela de derechos fundamentales",
      "Fuero maternal, paternal y sindical",
      "Finiquito, cotizaciones y comparendo ante la DT",
      "Reglamentos internos y auditoría laboral para pymes",
    ],
    when: [
      "Lo despidieron y el finiquito no cierra",
      "Citación a comparendo en la Inspección",
      "Fuero o licencia que la empresa no respeta",
    ],
  },
  {
    slug: "familia",
    room: "02",
    title: "Familia",
    short: "Divorcio, alimentos, cuidado personal.",
    lead: "Asuntos de casa. Se hablan en voz baja y se escriben con precisión.",
    image: "/images/patio.jpg",
    lawyerSlug: "isidora-munoz",
    body: "Divorcio de mutuo acuerdo o contencioso, pensión de alimentos, cuidado personal y relación directa y regular. En Chile la mediación familiar previa es obligatoria en varios de estos asuntos: la agendamos, la preparamos y no la tratamos como un trámite. Compensación económica cuando corresponde. Sin promesas de resultado.",
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
    slug: "civil",
    room: "03",
    title: "Civil y contratos",
    short: "Papel que se entiende. Y que se puede exigir.",
    lead: "Un contrato que no se puede leer en voz alta no sirve el día que falla.",
    image: "/images/mesa.jpg",
    lawyerSlug: "mateo-vidal",
    body: "Redactamos, revisamos y litigamos contratos. Incumplimientos, cobranzas, arrendamiento y responsabilidad civil. Preferimos un acuerdo bien escrito a un juicio largo; cuando el juicio es el camino, lo decimos con plazos reales y un honorario por etapa.",
    work: [
      "Redacción y revisión de contratos",
      "Incumplimiento e indemnización de perjuicios",
      "Cobranza prejudicial y juicio ejecutivo",
      "Arrendamiento urbano (Ley 18.101)",
      "Responsabilidad civil extracontractual",
    ],
    when: [
      "Le deben y el pagaré o el contrato está firme",
      "Hay que firmar un contrato que no entiende",
      "Un arriendo se puso difícil",
    ],
  },
  {
    slug: "inmobiliario",
    room: "04",
    title: "Inmobiliario",
    short: "Títulos, Conservador, copropiedad.",
    lead: "La casa se compra en el Conservador, no en el living.",
    image: "/images/fachada.jpg",
    lawyerSlug: "mateo-vidal",
    body: "Estudio de títulos, promesas y compraventas, hipoteca, copropiedad inmobiliaria y regularizaciones. Leemos la inscripción antes de que ponga un peso. Si hay un gravamen, una servidumbre o una copropiedad mal llevada, se lo decimos a tiempo.",
    work: [
      "Estudio de títulos y compraventa",
      "Promesas, hipotecas y alzamientos",
      "Copropiedad inmobiliaria (Ley 21.442)",
      "Regularización de propiedad (D.L. 2.695)",
      "Posesión efectiva y partición de inmuebles",
    ],
    when: [
      "Va a comprar o vender una casa o un departamento",
      "El comité de copropiedad no funciona",
      "Hay que sanear un título o una herencia",
    ],
  },
  {
    slug: "empresa",
    room: "05",
    title: "Empresa",
    short: "SPA, SII, contratos de la pyme.",
    lead: "La pyme no necesita un directorio de veinte. Necesita un abogado que conteste.",
    image: "/images/lucernario.jpg",
    lawyerSlug: "francisca-lagos",
    body: "Constitución de SPA, EIRL y sociedades de responsabilidad limitada. Contratos con clientes y proveedores, inicio de actividades, términos de giro y un honorario mensual para la empresa que ya no quiere resolverlo por WhatsApp a las once de la noche. Tributario de trinchera, no de holding.",
    work: [
      "Constitución de SPA, EIRL y Limitada",
      "Pactos de socios y gobierno de pyme",
      "Contratos comerciales y de prestación de servicios",
      "SII: inicio de actividades y término de giro",
      "Honorario mensual de empresa",
    ],
    when: [
      "Va a constituir una sociedad",
      "Hay un conflicto entre socios",
      "Quiere un abogado de cabecera, no un incendio",
    ],
  },
];

export const lawyers: Lawyer[] = [
  {
    slug: "amanda-reyes",
    name: "Amanda Reyes",
    role: "Socia",
    practice: "Laboral",
    practiceSlug: "laboral",
    image: "/images/amanda.jpg",
    email: "amanda@atrio.cl",
    bio: [
      "Amanda fundó ATRIO en 2015, en esta casa, después de seis años en litigación laboral. Sigue tomando ella los comparendos que importan. No delega la primera hora.",
      "Cree que un finiquito mal explicado es el origen de la mitad de los juicios. Por eso la primera conversación es larga y el honorario, por escrito, sale al día siguiente.",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, Universidad de Chile",
      "Magíster en Derecho del Trabajo, Universidad Diego Portales",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "mateo-vidal",
    name: "Mateo Vidal",
    role: "Socio",
    practice: "Inmobiliario y civil",
    practiceSlug: "inmobiliario",
    image: "/images/mateo.jpg",
    email: "mateo@atrio.cl",
    bio: [
      "Mateo lee inscripciones del Conservador como otros leen el diario. Llegó a ATRIO en 2017, cuando la casa todavía olía a pintura, y armó la práctica inmobiliaria y civil.",
      "Antes de firmar una promesa, pide el certificado de hipotecas y gravámenes. Siempre. Aunque el corredor diga que no hay nada.",
    ],
    education: [
      "Licenciado en Derecho, Pontificia Universidad Católica de Chile",
      "Diplomado en Derecho Inmobiliario, Universidad de los Andes",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español"],
  },
  {
    slug: "isidora-munoz",
    name: "Isidora Muñoz",
    role: "Socia",
    practice: "Familia",
    practiceSlug: "familia",
    image: "/images/isidora.jpg",
    email: "isidora@atrio.cl",
    bio: [
      "Isidora lleva familia desde que salió de la UDP. Mediación, alimentos, cuidado personal. En el patio se han firmado más acuerdos de los que caben en un anuario.",
      "No usa la palabra tuición. En Chile se llama cuidado personal, y el lenguaje importa cuando hay niños de por medio.",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, Universidad Diego Portales",
      "Diplomado en Derecho de Familia, Universidad de Chile",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español", "Francés"],
  },
  {
    slug: "francisca-lagos",
    name: "Francisca Lagos",
    role: "Asociada",
    practice: "Empresa",
    practiceSlug: "empresa",
    image: "/images/francisca.jpg",
    email: "francisca@atrio.cl",
    bio: [
      "Francisca arma sociedades y desarma contratos mal escritos. Llegó en 2021, después de un paso por el área legal de una scale-up que no tenía área legal.",
      "Traduce el SII al idioma de quien está constituyendo su primera SPA. El honorario mensual de empresa es, en gran parte, su oficio.",
    ],
    education: [
      "Licenciada en Derecho, Universidad Adolfo Ibáñez",
      "Magíster en Derecho de la Empresa, UAI",
    ],
    admissions: ["Corte Suprema de Chile"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "benjamin-soto",
    name: "Benjamín Soto",
    role: "Asociado",
    practice: "Laboral y civil",
    practiceSlug: "laboral",
    image: "/images/benjamin.jpg",
    email: "benjamin@atrio.cl",
    bio: [
      "Benjamín escribe los escritos que Amanda revisa con lápiz rojo. Litiga laboral y cobra lo que hay que cobrar. Entró a ATRIO en 2023.",
      "Es el que contesta el WhatsApp de urgencia cuando hay un comparendo mañana a las 9:00.",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas, Universidad de Chile",
    ],
    admissions: ["Corte Suprema de Chile"],
    languages: ["Español"],
  },
];

export const matters: Matter[] = [
  {
    slug: "finiquito-nunoa",
    year: "2025",
    area: "Laboral",
    title: "Despido verbal en una pyme de Ñuñoa",
    metric: "18,4",
    metricLabel: "millones de pesos",
    summary:
      "Trabajadora despedida de palabra, sin carta ni cotizaciones al día. Demanda por despido injustificado y nulidad. Acuerdo en audiencia única.",
    result: "Pago de indemnizaciones y recargo, cotizaciones enteradas.",
    comuna: "Ñuñoa",
  },
  {
    slug: "alimentos-providencia",
    year: "2025",
    area: "Familia",
    title: "Pensión de alimentos impaga, tres años",
    metric: "7",
    metricLabel: "semanas a mediación homologada",
    summary:
      "Tres años sin pensión. Mediación previa, acuerdo de monto, retención de remuneración y un plan de deuda. Sin juicio contencioso.",
    result: "Pensión vigente y retención decretada.",
    comuna: "Providencia",
  },
  {
    slug: "titulos-macul",
    year: "2024",
    area: "Inmobiliario",
    title: "Compraventa con tres gravámenes escondidos",
    metric: "3",
    metricLabel: "gravámenes encontrados a tiempo",
    summary:
      "Estudio de títulos de una casa en Macul. Hipoteca no alzada, una prohibición y una servidumbre de paso que el corredor no mencionó. Se negoció el precio y se alzó antes de la escritura.",
    result: "Escritura limpia. El cliente no compró un juicio.",
    comuna: "Macul",
  },
  {
    slug: "spa-barrio-italia",
    year: "2025",
    area: "Empresa",
    title: "Constitución y pacto de una SPA de diseño",
    metric: "11",
    metricLabel: "días a inicio de actividades",
    summary:
      "Dos socias, un taller en Barrio Italia, ningún papel. SPA, pacto de retiro, reglamento interno corto y SII. Sin modelo bajado de internet.",
    result: "Sociedad inscrita, inicio de actividades y cuenta corriente.",
    comuna: "Ñuñoa",
  },
  {
    slug: "arriendo-la-reina",
    year: "2024",
    area: "Civil",
    title: "Restitución de casa y cobro de rentas",
    metric: "9",
    metricLabel: "meses de renta recuperados",
    summary:
      "Arrendatario que dejó de pagar y no entregaba. Juicio de arrendamiento, lanzamiento y cobro. El contrato, por una vez, estaba bien hecho.",
    result: "Restitución material y sentencia de cobro.",
    comuna: "La Reina",
  },
  {
    slug: "divorcio-mutuo",
    year: "2025",
    area: "Familia",
    title: "Divorcio de mutuo acuerdo, sociedad conyugal incluida",
    metric: "14",
    metricLabel: "semanas a sentencia",
    summary:
      "Matrimonio de dieciocho años, una casa, dos hijos mayores. Acuerdo completo, compensación económica pactada y sentencia sin audiencia de prueba.",
    result: "Divorcio y liquidación en un mismo acuerdo.",
    comuna: "Santiago",
  },
];

export const fees = [
  {
    servicio: "Primera hora (45 min)",
    precio: "$42.000",
    nota: "Se descuenta del honorario si tomamos el asunto. Diagnóstico verbal el mismo día.",
  },
  {
    servicio: "Minuta de viabilidad",
    precio: "desde 3 UF",
    nota: "Por escrito, en 48 horas hábiles. Estrategia, plazos y honorario cerrado.",
  },
  {
    servicio: "Divorcio de mutuo acuerdo",
    precio: "desde 12 UF",
    nota: "Incluye acuerdo, mediación cuando corresponde y tramitación.",
  },
  {
    servicio: "Pensión de alimentos",
    precio: "desde 8 UF",
    nota: "Demanda o mediación, más retención si procede.",
  },
  {
    servicio: "Despido injustificado",
    precio: "desde 15 UF",
    nota: "Por etapas. A veces un porcentaje del recargo, pactado antes.",
  },
  {
    servicio: "Estudio de títulos",
    precio: "desde 8 UF",
    nota: "Informe escrito. No es una carpeta: es un sí, un no o un condicionado.",
  },
  {
    servicio: "Constitución de SPA",
    precio: "desde 6 UF",
    nota: "Estatutos, inscripción e inicio de actividades. Sin pacto de socios, 6 UF. Con pacto, se cotiza.",
  },
  {
    servicio: "Honorario mensual empresa",
    precio: "desde 8 UF/mes",
    nota: "Contratos, consultas y un abogado que contesta. IVA adicional.",
  },
] as const;

export const steps = [
  {
    room: "01",
    title: "Escribe o llama",
    body: "WhatsApp, correo o el formulario. Le respondemos dentro de 24 horas hábiles. Si el asunto no es nuestro, se lo decimos ahí, y a quién conviene llamar.",
  },
  {
    room: "02",
    title: "La primera hora",
    body: "45 minutos en el patio —o por videollamada, si está fuera de Santiago—. Traiga cédula, contratos, cartas, finiquitos, lo que tenga. No hace falta un expediente armado.",
  },
  {
    room: "03",
    title: "Minuta y honorario",
    body: "En 24 a 48 horas: si hay caso, qué haríamos, cuánto demora y cuánto cuesta. Honorario por escrito, en UF, más IVA. Sin letra chica.",
  },
  {
    room: "04",
    title: "El mismo abogado",
    body: "Quien lo recibió, lo lleva. Actualización cada quince días. WhatsApp directo del abogado, no de una secretaría que no leyó el expediente.",
  },
] as const;

export const principles = [
  {
    room: "I",
    title: "A plena luz",
    text: "Le explicamos el asunto como si estuviéramos sentados en el patio. Si no se puede decir en voz alta, no va en el escrito.",
  },
  {
    room: "II",
    title: "Pocos cupos",
    text: "Cinco abogados. Un número de asuntos que cabe en la mesa. Si el mes está lleno, se lo decimos. No acumulamos expedientes para parecer grandes.",
  },
  {
    room: "III",
    title: "Por escrito",
    text: "Diagnóstico, estrategia y honorario salen en papel. El IVA va aparte. Lo que no está escrito, no está pactado.",
  },
] as const;

export const stats = [
  { value: "2015", label: "La casa abre" },
  { value: "5", label: "Abogados" },
  { value: "24h", label: "Respuesta hábil" },
  { value: "UF", label: "Honorario cerrado" },
] as const;

export function getPractice(slug: string) {
  return practices.find((item) => item.slug === slug);
}

export function getLawyer(slug: string) {
  return lawyers.find((item) => item.slug === slug);
}

export function getMatter(slug: string) {
  return matters.find((item) => item.slug === slug);
}
