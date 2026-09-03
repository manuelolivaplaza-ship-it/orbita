export const site = {
  name: "RIVERA",
  legalName: "RIVERA — Estudio Jurídico",
  tagline: "Tranquilidad legal cuando todo está en juego.",
  description:
    "Te decimos si tienes caso, cuánto cuesta y qué hacemos mañana a primera hora. Sin humo, por escrito. Penal, familia, civil patrimonial y tributario en Las Condes, Santiago.",
  url: "https://rivera.cl",
  rut: "76.123.456-7",
  years: 18,
  causes: 1600,
  recommend: 91,
  lawyers: 5,
  email: "contacto@rivera.cl",
  phone: "+56 9 8765 1234",
  phoneHref: "tel:+56987651234",
  whatsapp: "https://wa.me/56987651234?text=Hola%2C%20necesito%20hablar%20con%20un%20abogado%20de%20RIVERA.",
  address: "Las Condes, Santiago",
  hours: "Lun–Vie 9:00–18:30",
  urgency: "Urgencias penal/familia 24/7 (respuesta inicial 45 min RM)",
  founded: 2007,
} as const;

export const chapters = [
  { id: "materias", num: "01", label: "Materias" },
  { id: "como-partimos", num: "02", label: "Cómo partimos" },
  { id: "honorarios", num: "03", label: "Honorarios" },
  { id: "urgencia", num: "04", label: "Urgencia" },
] as const;

export const trustBand = [
  `RUT ${site.rut}`,
  `+${site.years} años`,
  "Registro Colegio de Abogados",
  "Respuesta inicial en 24h hábiles",
  "Materias acotadas",
] as const;

export const materias = [
  {
    num: "01",
    kicker: "Penal",
    title: "Defensa penal",
    lead: "Querellas, defensas, medidas cautelares, recursos. Urgencia 24/7.",
    when: [
      "Detención / control de detención hoy",
      "Citación Fiscalía",
      "Querella en contra",
    ],
  },
  {
    num: "02",
    kicker: "Familia",
    title: "Divorcio y cuidado personal",
    lead: "Divorcio mutuo/contencioso, pensión, relación directa y regular. Sin prometer resultados.",
    when: [
      "Divorcio con o sin acuerdo",
      "Pensión de alimentos",
      "Cuidado personal / RDR",
    ],
  },
  {
    num: "03",
    kicker: "Civil",
    title: "Juicios civiles y cobranzas",
    lead: "Contratos, indemnizaciones, herencias, posesiones efectivas. Patrimonio con papel.",
    when: [
      "Herencia / posesión efectiva",
      "Incumplimiento de contrato",
      "Cobranza judicial",
    ],
  },
  {
    num: "04",
    kicker: "Tributario",
    title: "Defensa tributaria y empresa",
    lead: "Fiscalizaciones SII, reclamos, planificación. Honorario mensual empresa.",
    when: [
      "Citación / liquidación SII",
      "Reclamo tributario",
      "Asesoría mensual desde $320.000/mes",
    ],
  },
] as const;

export const pasos = [
  {
    num: "01",
    title: "Primera reunión",
    body: "45 min. Traes: cédula, antecedentes, documentos clave. Te decimos si hay caso, cuánto cuesta y qué plazo es realista. Si no hay caso, no avanzas.",
    entrega: "Diagnóstico verbal + presupuesto por escrito en 24h",
  },
  {
    num: "02",
    title: "Diagnóstico",
    body: "24–48h. Informe de viabilidad, estrategia, etapas y honorario cerrado por etapa. Sin letra chica.",
    entrega: "Minuta escrita + honorario por escrito",
  },
  {
    num: "03",
    title: "Estrategia",
    body: "Escrito, audiencia, seguimiento. El mismo abogado de principio a fin. Actualización quincenal.",
    entrega: "Escrito + agenda + WhatsApp directo",
  },
] as const;

export const honorarios = [
  {
    servicio: "Consulta inicial (45 min)",
    precio: "$45.000",
    nota: "Incluye diagnóstico verbal y presupuesto por escrito",
  },
  {
    servicio: "Asesoría penal / familia (viabilidad)",
    precio: "desde $150.000",
    nota: "Informe + estrategia escrita",
  },
  {
    servicio: "Divorcio de común acuerdo",
    precio: "desde $380.000",
    nota: "Incluye acuerdo completo y tramitación",
  },
  {
    servicio: "Divorcio contencioso",
    precio: "desde $820.000",
    nota: "Etapas: demanda, prueba, sentencia",
  },
  {
    servicio: "Juicio laboral",
    precio: "desde $750.000",
    nota: "Demanda, comparendo, juicio",
  },
  {
    servicio: "Defensa penal",
    precio: "desde $950.000",
    nota: "Querella/defensa, cautelares, juicio",
  },
  {
    servicio: "Juicio civil patrimonial",
    precio: "desde $600.000",
    nota: "Demanda + prueba + sentencia",
  },
  {
    servicio: "Honorario mensual empresa",
    precio: "desde $320.000/mes",
    nota: "Asesoría tributaria/laboral continua",
  },
] as const;

export const materiasOptions = [
  "Penal",
  "Familia",
  "Civil",
  "Tributario",
  "Otro",
] as const;
