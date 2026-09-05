export const stats = [
  { value: 9, prefix: "+", suffix: "", label: "Años del mismo equipo" },
  { value: 4800, prefix: "+", suffix: "", label: "Pacientes al año", format: "es" },
  { value: 81, prefix: "", suffix: "%", label: "Alta en 8 sesiones o menos" },
  { value: 6, prefix: "", suffix: "", label: "Kinesiólogos, sin rotación", pad: 2 },
] as const;

export const promises = [
  "Evaluación en 48 horas",
  "Plan por escrito",
  "Alta estimada informada",
  "Boleta reembolsable",
] as const;

export const services = [
  {
    slug: "traumatologica",
    n: "01",
    title: "Traumatológica",
    forWhom:
      "Hombro que avisa, rodilla que no carga, columna que se queda. Post operatorio, esguince, tendón.",
    duration: "50–60 min",
    priceFrom: 36_000,
    image: "/images/box.jpg",
    alt: "Box de kinesiología con camilla de lino y ventanal hacia el jardín",
    lead: "El cuerpo no se arregla con un video de YouTube. Se evalúa, se nombra y se trata con las manos y con un plan.",
    body: "Hombro, rodilla, columna, cadera, tobillo. Post operatorio de hombro o de rodilla. Tendinopatías que llevan meses. El primer día no hay electro pegado por costumbre: hay test, palpación y una hipótesis que se escribe.",
    includes: [
      "Evaluación de movimiento y dolor",
      "Terapia manual cuando corresponde",
      "Ejercicio dosificado, no receta genérica",
      "Criterio de alta desde la primera sesión",
    ],
  },
  {
    slug: "deportiva",
    n: "02",
    title: "Deportiva",
    forWhom:
      "Quien vuelve al campo, a la pista o a la montaña. No al gimnasio por cumplir.",
    duration: "50–60 min",
    priceFrom: 36_000,
    image: "/images/camilla.jpg",
    alt: "Camilla de lino con banda elástica sage enrollada, luz de ventana",
    lead: "Volver a jugar no es ‘ya no duele’. Es correr, cortar, saltar y confiar otra vez.",
    body: "Readaptación después de lesión. Criterios de retorno al deporte, no calendarios mágicos. Trabajamos con el médico tratante cuando hay uno. Si el caso es quirúrgico, te derivamos — no te retenemos para completar un pack.",
    includes: [
      "Test de retorno (fuerza, control, confianza)",
      "Progresión por etapas, por escrito",
      "Coordinación con DT o preparador, si lo pides",
      "Domicilio o box, según la fase",
    ],
  },
  {
    slug: "neurologica",
    n: "03",
    title: "Neurológica",
    forWhom:
      "ACV, Parkinson, esclerosis, lesión medular, el cuerpo que hay que volver a enseñar.",
    duration: "60 min",
    priceFrom: 39_000,
    image: "/images/corridor.jpg",
    alt: "Pasillo luminoso de la casa, con una franja de sol sobre el roble",
    lead: "Aquí el tiempo no se recorta. Sesenta minutos. El mismo kinesiólogo. Sin prisa de pasillo.",
    body: "Neurorehabilitación en box o a domicilio. Transferencias, marcha, equilibrio, fatiga. La familia entra cuando suma; no se queda de ornamento. Si el caso necesita otro nivel de complejidad, lo decimos en la evaluación.",
    includes: [
      "Sesión de 60 minutos reales",
      "Objetivos funcionales, no ‘movilizar’",
      "Educación a quien cuida",
      "Domicilio en las comunas de cobertura",
    ],
  },
  {
    slug: "respiratoria",
    n: "04",
    title: "Respiratoria",
    forWhom:
      "Post operatorio torácico, EPOC, asma mal controlada, secreciones, el pecho que no abre.",
    duration: "45–60 min",
    priceFrom: 39_000,
    image: "/images/reception.jpg",
    alt: "Entrada luminosa de la casa, banco de roble y puerta de vidrio",
    lead: "Respirar es el oficio más antiguo. Lo tratamos con el mismo rigor que una rodilla.",
    body: "Kinesiología respiratoria en box o a domicilio. Higiene bronquial, reexpansión, ejercicio. No somos urgencia ni UCI: si el caso es agudo hospitalario, te orientamos a donde corresponde.",
    includes: [
      "Evaluación de patrón y secreciones",
      "Técnicas manuales e instrumentales según caso",
      "Plan de ejercicios en casa",
      "Domicilio cuando el traslado cansa de más",
    ],
  },
  {
    slug: "domicilio",
    n: "05",
    title: "A domicilio",
    forWhom:
      "Quien no puede —o no debe— salir. Post operatorio, neurológico, respiratorio, adulto mayor.",
    duration: "60 min",
    priceFrom: 52_000,
    image: "/images/patio.jpg",
    alt: "Jardín visto desde el interior, cortina de lino y luz suave",
    lead: "La casa del paciente es el box. Llegamos con el material, el tiempo y el mismo kinesiólogo.",
    body: "Cobertura en Las Condes, Vitacura, Providencia, Ñuñoa, La Reina y Santiago Centro. Ventana horaria acordada. Si el edificio no tiene estacionamiento, lo resolvemos antes, no en la puerta.",
    includes: [
      "Sesión de 60 minutos en tu casa",
      "Material de trabajo incluido",
      "Mismo kinesiólogo de principio a fin",
      "Informe para el médico, si lo pides",
    ],
  },
  {
    slug: "evaluacion",
    n: "06",
    title: "Evaluación y plan",
    forWhom:
      "La primera hora. Sin ella no hay pack, no hay ‘veinte sesiones’ y no hay promesa.",
    duration: "50 min",
    priceFrom: 42_000,
    image: "/images/still.jpg",
    alt: "Cuaderno abierto con pauta, lápiz y banda elástica sobre mesa de roble",
    lead: "Te ofrecieron veinte sesiones por adelantado sin evaluarte. Aquí no.",
    body: "Cincuenta minutos. Historia, test, hipótesis, plan por escrito: frecuencia, alta estimada, qué se hace en box y qué se hace en casa. El valor de las sesiones siguientes se confirma ese día, no antes. Si el caso no es kinésico, te derivamos.",
    includes: [
      "50 minutos con un kinesiólogo del equipo",
      "Plan escrito (sesiones, alta estimada)",
      "Información de reembolso ISAPRE/FONASA",
      "Nada se cobra por adelantado sin plan aprobado",
    ],
  },
] as const;

export const prices = [
  {
    name: "Evaluación kinésica",
    detail: "50 min · plan por escrito",
    amount: 42_000,
  },
  {
    name: "Sesión traumatológica o deportiva",
    detail: "50–60 min · box",
    amount: 36_000,
  },
  {
    name: "Sesión neurológica o respiratoria",
    detail: "60 min · box",
    amount: 39_000,
  },
  {
    name: "Sesión a domicilio RM",
    detail: "60 min · comunas de cobertura",
    amount: 52_000,
  },
  {
    name: "Pack 5 sesiones",
    detail: "Tras evaluación · mismo kinesiólogo",
    amount: 170_000,
  },
  {
    name: "Pack 10 sesiones",
    detail: "Tras evaluación · mismo kinesiólogo",
    amount: 320_000,
  },
] as const;

export const comunas = [
  "Las Condes",
  "Vitacura",
  "Providencia",
  "Ñuñoa",
  "La Reina",
  "Santiago Centro",
] as const;

export const method = [
  {
    n: "01",
    title: "Evaluación",
    text: "Cincuenta minutos. Trae orden médica si hay, exámenes, y lo que te duele dicho en tu idioma. Salimos con una hipótesis, no con un pack.",
  },
  {
    n: "02",
    title: "Plan por escrito",
    text: "Frecuencia, qué se hace en box y qué en casa, alta estimada. El valor se confirma ese día. No partimos sin que lo apruebes.",
  },
  {
    n: "03",
    title: "Sesiones y re-evaluación",
    text: "El mismo kinesiólogo. Si el cuerpo no responde como esperábamos, se cambia el plan — no se alarga el calendario por inercia.",
  },
] as const;

export const team = [
  {
    slug: "antonia-vidal",
    name: "Antonia Vidal",
    credential: "Kinesióloga · Universidad de Chile",
    extra: "Diplomado en terapia manual",
    focus: "Traumatológica",
    line: "El hombro que avisaba y se llamaba tensión.",
    image: "/images/box.jpg",
  },
  {
    slug: "mateo-lagos",
    name: "Mateo Lagos",
    credential: "Kinesiólogo · UDP",
    extra: "Magíster en deporte, Universidad de los Andes",
    focus: "Deportiva",
    line: "Volver al campo. No al gimnasio por cumplir.",
    image: "/images/camilla.jpg",
  },
  {
    slug: "elena-munoz",
    name: "Elena Muñoz",
    credential: "Kinesióloga · Universidad de Chile",
    extra: "Diplomado en neurorehabilitación",
    focus: "Neurológica",
    line: "El cuerpo que hay que volver a enseñar.",
    image: "/images/corridor.jpg",
  },
  {
    slug: "tomas-herrera",
    name: "Tomás Herrera",
    credential: "Kinesiólogo · Universidad Mayor",
    extra: "Kinesiología respiratoria y domicilio",
    focus: "Respiratoria · Domicilio",
    line: "La casa del paciente es el box.",
    image: "/images/patio.jpg",
  },
  {
    slug: "isidora-palma",
    name: "Isidora Palma",
    credential: "Kinesióloga · Pontificia Universidad Católica",
    extra: "Postoperatorio de hombro y rodilla",
    focus: "Traumatológica",
    line: "El alta se estima. No se improvisa.",
    image: "/images/still.jpg",
  },
  {
    slug: "nicolas-araya",
    name: "Nicolás Araya",
    credential: "Kinesiólogo · UNAB",
    extra: "Readaptación deportiva",
    focus: "Deportiva",
    line: "Criterios de retorno, no calendarios mágicos.",
    image: "/images/detail.jpg",
  },
] as const;

export const faqs = [
  {
    q: "¿Cuánto cuesta la primera evaluación?",
    a: "La evaluación kinésica dura 50 minutos y vale $42.000. Incluye hipótesis, plan por escrito y la información de reembolso. El valor de las sesiones siguientes se confirma ese día, no antes. Teléfono: +56 2 2840 3315.",
  },
  {
    q: "¿Atienden ISAPRE y FONASA? ¿Cómo es el reembolso?",
    a: "Emitimos boleta reembolsable el mismo día. Particular, ISAPRE (Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres y otras) y FONASA. El porcentaje lo define tu plan: te orientamos con el código y el tope, no prometemos un número que no controlamos.",
  },
  {
    q: "¿Box o domicilio, qué me conviene?",
    a: "El box en San Damián 1280, Las Condes, tiene luz norte y 60 minutos reales. El domicilio (desde $52.000) es para quien no puede o no debe trasladarse: post operatorio, neurológico, respiratorio, adulto mayor. Cobertura: Las Condes, Vitacura, Providencia, Ñuñoa, La Reina y Santiago Centro.",
  },
  {
    q: "¿Cada cuánto son las sesiones y cuánto dura el tratamiento?",
    a: "Lo decide la evaluación, no un pack. En muchos casos, una o dos veces por semana. El 81% de quienes terminan el plan de alta lo hacen en ocho sesiones o menos. Si hace falta más, se dice. Si hace falta menos, también.",
  },
  {
    q: "¿Qué llevo a la evaluación?",
    a: "Orden médica si hay, exámenes e informes, ropa cómoda, y lo que te duele dicho en tu idioma. Si tomas anticoagulantes o hay una cirugía reciente, avísanos al agendar. No hace falta ayuno ni preparación especial.",
  },
  {
    q: "¿Cómo cancelo o reprogramo?",
    a: "Por WhatsApp o al +56 2 2840 3315, con 24 horas de anticipación. Menos que eso, se cobra la sesión: el cupo es de una persona, no de una lista. Responden kinesiólogos, no un call center. Si no contestamos, devolvemos el llamado el mismo día hábil.",
  },
] as const;

export const convenios = [
  "Boleta reembolsable el mismo día",
  "ISAPRE",
  "FONASA",
  "Particular",
  "Convenio directo, cuando aplica",
] as const;

export const previsiones = [
  "Particular",
  "Banmédica",
  "Colmena",
  "Consalud",
  "Cruz Blanca",
  "Esencial",
  "Nueva Masvida",
  "Vida Tres",
  "FONASA",
  "Otra",
] as const;
