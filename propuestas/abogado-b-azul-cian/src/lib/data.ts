export type Practice = {
  slug: string;
  depth: string;
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
    depth: "01.4",
    title: "Laboral",
    short: "Despido, fuero, finiquito, DT.",
    lead: "El Código del Trabajo tiene un cauce. El comparendo de la Inspección, también.",
    image: "/images/pasillo.jpg",
    lawyerSlug: "catalina-herrera",
    body: "Defendemos a trabajadores y asesoramos a pymes que quieren hacer las cosas bien. Despido injustificado, tutela de derechos fundamentales, fuero maternal o sindical, cotizaciones y finiquitos. Si lo citaron a la Dirección del Trabajo esta semana, esa es la primera conversación. El recargo del artículo 168 no se improvisa: se calcula, se explica y se pide.",
    work: [
      "Despido injustificado y recargos del art. 168 del Código del Trabajo",
      "Tutela de derechos fundamentales",
      "Fuero maternal, paternal y sindical",
      "Finiquito, cotizaciones y comparendo ante la Dirección del Trabajo",
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
    depth: "02.8",
    title: "Familia",
    short: "Divorcio, alimentos, cuidado personal.",
    lead: "Asuntos de casa. Se hablan en voz baja y se escriben con el nombre correcto de cada instituto.",
    image: "/images/ventana.jpg",
    lawyerSlug: "ignacio-parra",
    body: "Divorcio de mutuo acuerdo o contencioso, pensión de alimentos, cuidado personal y relación directa y regular. En Chile la mediación familiar previa es obligatoria en varios de estos asuntos: la agendamos, la preparamos y no la tratamos como un trámite. Compensación económica cuando corresponde. No usamos la palabra tuición: se llama cuidado personal, y el lenguaje importa cuando hay niños de por medio.",
    work: [
      "Divorcio de mutuo acuerdo y contencioso",
      "Pensión de alimentos y retención de remuneración",
      "Cuidado personal y relación directa y regular",
      "Mediación familiar previa obligatoria (Ley 19.968)",
      "Compensación económica y liquidación de sociedad conyugal",
    ],
    when: [
      "Quiere divorciarse con o sin acuerdo",
      "La pensión no se paga o no alcanza",
      "Hay que regular cuidado personal o visitas",
    ],
  },
  {
    slug: "consumidor",
    depth: "03.2",
    title: "Consumidor",
    short: "SERNAC, garantías, contratos de adhesión.",
    lead: "La letra chica también tiene un cauce. A veces es el SERNAC. A veces, el juez de policía local.",
    image: "/images/papel.jpg",
    lawyerSlug: "valentina-riquelme",
    body: "Reclamos ante el SERNAC, juicios de interés general, garantías, cláusulas abusivas y contratos de adhesión. Bancos, isapres, retail, aerolíneas, inmobiliarias. La Ley 19.496 no es un folleto: es un procedimiento, con plazos y con un honorario que se pacta antes. Si el caso no cabe, se lo decimos. Si cabe, no lo diluimos en un mail de reclamo que nadie lee.",
    work: [
      "Reclamos ante el SERNAC y mediación",
      "Juicio de interés general y denuncias infraccionales",
      "Garantías legales y cláusulas abusivas",
      "Isapres, bancos, retail y transporte aéreo",
      "Contratos de adhesión y términos que no se pueden leer",
    ],
    when: [
      "Un banco, isapre o tienda no responde",
      "Compró algo que no es lo que prometieron",
      "Hay una cláusula que nadie le explicó",
    ],
  },
  {
    slug: "civil",
    depth: "04.6",
    title: "Civil e inmobiliario",
    short: "Contratos, títulos, Conservador.",
    lead: "La casa se compra en el Conservador, no en el living. El contrato, el día que falla.",
    image: "/images/mesa.jpg",
    lawyerSlug: "tomas-alarcon",
    body: "Redactamos, revisamos y litigamos contratos. Estudio de títulos, promesas y compraventas, hipoteca, copropiedad inmobiliaria y regularizaciones. Incumplimientos, cobranzas, arrendamiento urbano. Leemos la inscripción antes de que ponga un peso. Si hay un gravamen, una servidumbre o una copropiedad mal llevada, se lo decimos a tiempo.",
    work: [
      "Redacción y revisión de contratos",
      "Estudio de títulos, promesas, hipotecas y alzamientos",
      "Copropiedad inmobiliaria (Ley 21.442)",
      "Arrendamiento urbano (Ley 18.101) y cobro de rentas",
      "Regularización de propiedad (D.L. 2.695) y posesión efectiva",
    ],
    when: [
      "Va a comprar o vender una casa o un departamento",
      "Le deben y el pagaré o el contrato está firme",
      "El comité de copropiedad no funciona",
    ],
  },
  {
    slug: "empresa",
    depth: "05.1",
    title: "Empresa",
    short: "SPA, SII, contratos de la pyme.",
    lead: "La pyme no necesita un directorio de veinte. Necesita un abogado que conteste.",
    image: "/images/fachada.jpg",
    lawyerSlug: "antonia-espinoza",
    body: "Constitución de SPA, EIRL y sociedades de responsabilidad limitada. Contratos con clientes y proveedores, inicio de actividades, términos de giro y un honorario mensual para la empresa que ya no quiere resolverlo por WhatsApp a las once de la noche. Tributario de trinchera, no de holding. El pacto de socios se escribe antes del conflicto, no después.",
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
    slug: "catalina-herrera",
    name: "Catalina Herrera",
    role: "Socia",
    practice: "Laboral",
    practiceSlug: "laboral",
    image: "/images/catalina.jpg",
    email: "catalina@cauce.cl",
    bio: [
      "Catalina fundó CAUCE en 2016, en esta orilla, después de siete años en litigación laboral. Sigue tomando ella los comparendos que importan. No delega el sondaje.",
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
    slug: "tomas-alarcon",
    name: "Tomás Alarcón",
    role: "Socio",
    practice: "Civil e inmobiliario",
    practiceSlug: "civil",
    image: "/images/tomas.jpg",
    email: "tomas@cauce.cl",
    bio: [
      "Tomás lee inscripciones del Conservador como otros leen el diario. Llegó a CAUCE en 2018 y armó la práctica civil e inmobiliaria con una regla: nada se firma sin el certificado de hipotecas y gravámenes.",
      "Antes de una promesa, pide el estudio. Siempre. Aunque el corredor diga que no hay nada. El cauce de una compraventa está en el folio, no en la visita.",
    ],
    education: [
      "Licenciado en Derecho, Pontificia Universidad Católica de Chile",
      "Diplomado en Derecho Inmobiliario, Universidad de los Andes",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español"],
  },
  {
    slug: "valentina-riquelme",
    name: "Valentina Riquelme",
    role: "Socia",
    practice: "Consumidor",
    practiceSlug: "consumidor",
    image: "/images/valentina.jpg",
    email: "valentina@cauce.cl",
    bio: [
      "Valentina armó el afluente de consumidor cuando nadie en el barrio lo tomaba en serio. SERNAC, isapres, bancos, cláusulas que nadie leyó. Llegó en 2019, después de un paso por el área de protección al consumidor de un estudio grande que no devolvía el teléfono.",
      "Traduce la Ley 19.496 al idioma de quien tiene un reclamo y no un departamento legal. El juicio de interés general, cuando cabe, no se pide de oído.",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, Universidad de Chile",
      "Magíster en Derecho, mención Derecho Privado, Universidad de Chile",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "ignacio-parra",
    name: "Ignacio Parra",
    role: "Asociado",
    practice: "Familia",
    practiceSlug: "familia",
    image: "/images/ignacio.jpg",
    email: "ignacio@cauce.cl",
    bio: [
      "Ignacio lleva familia desde que salió de la UDP. Mediación, alimentos, cuidado personal. En esta mesa se han firmado más acuerdos de los que caben en un anuario.",
      "No usa la palabra tuición. En Chile se llama cuidado personal, y lo dice cada vez que un cliente llega con un modelo bajado de internet.",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas, Universidad Diego Portales",
      "Diplomado en Derecho de Familia, Universidad de Chile",
    ],
    admissions: ["Corte Suprema de Chile", "Colegio de Abogados de Chile"],
    languages: ["Español"],
  },
  {
    slug: "antonia-espinoza",
    name: "Antonia Espinoza",
    role: "Asociada",
    practice: "Empresa",
    practiceSlug: "empresa",
    image: "/images/antonia.jpg",
    email: "antonia@cauce.cl",
    bio: [
      "Antonia arma sociedades y desarma contratos mal escritos. Llegó en 2022, después de un paso por el área legal de una scale-up que no tenía área legal.",
      "Traduce el SII al idioma de quien está constituyendo su primera SPA. El honorario mensual de empresa es, en gran parte, su oficio.",
    ],
    education: [
      "Licenciada en Derecho, Universidad Adolfo Ibáñez",
      "Magíster en Derecho de la Empresa, UAI",
    ],
    admissions: ["Corte Suprema de Chile"],
    languages: ["Español", "Inglés"],
  },
];

export const matters: Matter[] = [
  {
    slug: "finiquito-providencia",
    year: "2025",
    area: "Laboral",
    title: "Despido verbal en una pyme de Providencia",
    metric: "21,6",
    metricLabel: "millones de pesos",
    summary:
      "Trabajadora despedida de palabra, sin carta ni cotizaciones al día. Demanda por despido injustificado y nulidad. Acuerdo en audiencia única.",
    result: "Pago de indemnizaciones y recargo, cotizaciones enteradas.",
    comuna: "Providencia",
  },
  {
    slug: "alimentos-nunoa",
    year: "2025",
    area: "Familia",
    title: "Pensión de alimentos impaga, tres años",
    metric: "6",
    metricLabel: "semanas a mediación homologada",
    summary:
      "Tres años sin pensión. Mediación previa, acuerdo de monto, retención de remuneración y un plan de deuda. Sin juicio contencioso.",
    result: "Pensión vigente y retención decretada.",
    comuna: "Ñuñoa",
  },
  {
    slug: "sernac-isapre",
    year: "2025",
    area: "Consumidor",
    title: "Isapre que no devolvió un exceso de cotización",
    metric: "14",
    metricLabel: "meses de exceso recuperados",
    summary:
      "Reclamo ante el SERNAC, mediación y, cuando no hubo oferta seria, denuncia infraccional. El contrato de salud no es un folleto.",
    result: "Devolución más reajuste e intereses.",
    comuna: "Las Condes",
  },
  {
    slug: "titulos-vitacura",
    year: "2024",
    area: "Civil e inmobiliario",
    title: "Compraventa con tres gravámenes escondidos",
    metric: "3",
    metricLabel: "gravámenes encontrados a tiempo",
    summary:
      "Estudio de títulos de un departamento en Vitacura. Hipoteca no alzada, una prohibición y una servidumbre que el corredor no mencionó. Se negoció el precio y se alzó antes de la escritura.",
    result: "Escritura limpia. El cliente no compró un juicio.",
    comuna: "Vitacura",
  },
  {
    slug: "spa-bellavista",
    year: "2025",
    area: "Empresa",
    title: "Constitución y pacto de una SPA de diseño",
    metric: "9",
    metricLabel: "días a inicio de actividades",
    summary:
      "Dos socias, un taller en Bellavista, ningún papel. SPA, pacto de retiro, reglamento interno corto y SII. Sin modelo bajado de internet.",
    result: "Sociedad inscrita, inicio de actividades y cuenta corriente.",
    comuna: "Providencia",
  },
  {
    slug: "arriendo-recoleta",
    year: "2024",
    area: "Civil e inmobiliario",
    title: "Restitución de local y cobro de rentas",
    metric: "11",
    metricLabel: "meses de renta recuperados",
    summary:
      "Arrendatario que dejó de pagar y no entregaba. Juicio de arrendamiento, lanzamiento y cobro. El contrato, por una vez, estaba bien hecho.",
    result: "Restitución material y sentencia de cobro.",
    comuna: "Recoleta",
  },
];

export const fees = [
  {
    servicio: "Sondaje (45 min)",
    precio: "$48.000",
    nota: "Se descuenta del honorario si tomamos el asunto. Diagnóstico verbal el mismo día.",
  },
  {
    servicio: "Minuta de cauce",
    precio: "desde 3,5 UF",
    nota: "Por escrito, en 48 horas hábiles. Estrategia, plazos y honorario cerrado.",
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
    servicio: "Reclamo SERNAC / consumidor",
    precio: "desde 8 UF",
    nota: "Reclamo, mediación y, si cabe, denuncia infraccional.",
  },
  {
    servicio: "Estudio de títulos",
    precio: "desde 9 UF",
    nota: "Informe escrito. No es una carpeta: es un sí, un no o un condicionado.",
  },
  {
    servicio: "Constitución de SPA",
    precio: "desde 7 UF",
    nota: "Estatutos, inscripción e inicio de actividades. Sin pacto de socios, 7 UF. Con pacto, se cotiza.",
  },
  {
    servicio: "Honorario mensual empresa",
    precio: "desde 9 UF/mes",
    nota: "Contratos, consultas y un abogado que contesta. IVA adicional.",
  },
] as const;

export const steps = [
  {
    depth: "01",
    title: "Escribe o llama",
    body: "WhatsApp, correo o el formulario. Le respondemos dentro de 24 horas hábiles. Si el asunto no es nuestro, se lo decimos ahí, y a quién conviene llamar.",
  },
  {
    depth: "02",
    title: "El sondaje",
    body: "45 minutos frente al río —o por videollamada, si está fuera de Santiago—. Traiga cédula, contratos, cartas, finiquitos, lo que tenga. No hace falta un expediente armado.",
  },
  {
    depth: "03",
    title: "Minuta de cauce",
    body: "En 24 a 48 horas: si hay caso, qué haríamos, cuánto demora y cuánto cuesta. Honorario por escrito, en UF, más IVA. Sin letra chica.",
  },
  {
    depth: "04",
    title: "El mismo abogado",
    body: "Quien lo recibió, lo lleva. Actualización cada quince días. WhatsApp directo del abogado, no de una secretaría que no leyó el expediente.",
  },
] as const;

export const principles = [
  {
    roman: "I",
    title: "El cauce primero",
    text: "Un asunto tiene un procedimiento, un plazo y un foro — o no los tiene. Si no los tiene, se lo decimos en la primera hora. No empujamos el agua cuesta arriba.",
  },
  {
    roman: "II",
    title: "Pocos cupos",
    text: "Cinco abogados. Un número de asuntos que cabe en la mesa. Si el mes está lleno, se lo decimos. No acumulamos expedientes para parecer grandes.",
  },
  {
    roman: "III",
    title: "Por escrito",
    text: "Diagnóstico, estrategia y honorario salen en papel. El IVA va aparte. Lo que no está escrito, no está pactado.",
  },
] as const;

export const stats = [
  { value: "2016", label: "La orilla abre" },
  { value: "5", label: "Abogados" },
  { value: "24h", label: "Respuesta hábil" },
  { value: "UF", label: "Honorario cerrado" },
] as const;

export const marquee = [
  "Comparendo DT",
  "Conservador",
  "SERNAC",
  "Fuero maternal",
  "Cuidado personal",
  "Art. 168",
  "Mediación 19.968",
  "SPA",
  "Ley 21.442",
  "Honorario en UF",
  "Providencia",
  "Mapocho",
] as const;

export const faqs = [
  {
    q: "¿La primera hora se cobra?",
    a: "Sí. El sondaje cuesta $48.000 y dura 45 minutos. Si tomamos el asunto, se descuenta del honorario. Si no hay cauce, se lo decimos ahí y no hay segunda cuenta.",
  },
  {
    q: "¿Prometen un resultado?",
    a: "No. Un resultado no se promete. Un camino, un plazo realista y un honorario por escrito, sí. El resto es el tribunal, la contraparte y los hechos.",
  },
  {
    q: "¿Atienden urgencias el fin de semana?",
    a: "Laboral y familia, si hay un plazo que vence el lunes: escríbanos por WhatsApp. No somos un estudio penal de turno 24/7. Si el asunto es penal, se lo decimos y le damos un nombre.",
  },
  {
    q: "¿Puedo ir por videollamada?",
    a: "Sí, si está fuera de Santiago o si el sondaje lo permite. Los comparendos, las mediaciones y las firmas, en persona cuando la ley lo pide.",
  },
  {
    q: "¿El honorario incluye IVA?",
    a: "No. Los honorarios se pactan en UF, más IVA. Lo escribimos en la minuta, no en un pie de página.",
  },
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
