export const stats = [
  { value: 15, prefix: "", suffix: ":00", label: "Apertura, lun a vie" },
  { value: 21, prefix: "", suffix: ":30", label: "Último cupo" },
  { value: 75, prefix: "", suffix: " min", label: "La primera lectura" },
  { value: 4, prefix: "", suffix: "", label: "Kinesiólogos, sin rotación", pad: 2 },
] as const;

export const promises = [
  "Último cupo 21:30",
  "Lectura de 75 minutos",
  "Plan por escrito",
  "Boleta reembolsable",
] as const;

export const services = [
  {
    slug: "lectura",
    n: "01",
    title: "Lectura",
    region: "Cuerpo entero",
    forWhom:
      "La primera hora. Quien llega con un dolor que ya tiene nombre —o con uno que todavía no.",
    duration: "75 min",
    priceFrom: 48_000,
    image: "/images/spine.jpg",
    alt: "Columna anatómica bajo un foco ámbar, fotografiada como pieza de museo",
    lead: "Setenta y cinco minutos. Sin electro pegado por costumbre. Sin pack. Una hipótesis que se escribe.",
    body: "De día el cuerpo se defiende: compensa, apura, miente. De noche, si alguien sabe mirar, se lee. Historia, test, palpación, movimiento. Salimos con un mapa: dónde nace, qué lo sostiene y cuántas sesiones hacen falta — no las que conviene vender.",
    includes: [
      "Setenta y cinco minutos con el mismo kinesiólogo",
      "Mapa del movimiento y del dolor, por escrito",
      "Alta estimada y frecuencia, ese mismo día",
      "Orientación de reembolso ISAPRE / FONASA",
    ],
  },
  {
    slug: "columna",
    n: "02",
    title: "Columna",
    region: "Cervical · dorsal · lumbar",
    forWhom:
      "El cuello que no gira, la lumbar que avisa al sentarse, la cefalea que llega a las seis.",
    duration: "50–60 min",
    priceFrom: 39_000,
    image: "/images/hero.jpg",
    alt: "Box NOCTUA de noche: camilla de lino oscuro, lámpara ámbar y Santiago al fondo",
    lead: "La espalda casi nunca duele donde nace. Lo primero es dejar de tratar el aviso.",
    body: "Cervical, dorsal, lumbar. Hernia, esguince, post operatorio, el disco que ya tiene apellido. Trabajamos con las manos y con un plan de carga, no con diez minutos de calor. Si el caso es quirúrgico o de urgencia, se dice en la lectura — no se retiene.",
    includes: [
      "Evaluación de movimiento y de compensación",
      "Terapia manual cuando corresponde",
      "Ejercicio dosificado, no receta genérica",
      "Criterio de alta desde la primera sesión",
    ],
  },
  {
    slug: "hombro",
    n: "03",
    title: "Hombro",
    region: "Hombro · codo · muñeca",
    forWhom:
      "El hombro que avisaba y se llamaba tensión. El codo del que entrena. La mano que ya no cierra.",
    duration: "50–60 min",
    priceFrom: 39_000,
    image: "/images/hands.jpg",
    alt: "Manos de kinesiólogo leyendo un hombro bajo luz ámbar",
    lead: "El hombro es el más mentiroso del cuerpo. Donde duele no es, casi nunca, donde empieza.",
    body: "Manguito, inestabilidad, post operatorio, tendón, codo y muñeca. Palpación precisa, no protocolos de pasillo. Coordinamos con el médico tratante cuando hay uno. Si hace falta imagen, te orientamos — no te pedimos veinte sesiones para ‘ver cómo va’.",
    includes: [
      "Lectura de cadena: cuello, escápula, hombro",
      "Terapia manual y ejercicio de control",
      "Progresión de carga por escrito",
      "Alta cuando el brazo vuelve a confiar",
    ],
  },
  {
    slug: "carga",
    n: "04",
    title: "Carga",
    region: "Cadera · rodilla · tobillo",
    forWhom:
      "La rodilla que no carga, la cadera que traba al subir, el tobillo que ya no cree en el piso.",
    duration: "50–60 min",
    priceFrom: 39_000,
    image: "/images/box.jpg",
    alt: "Camilla de lino oscuro con toalla y banda, luz ámbar rasante",
    lead: "Volver a cargar el peso no es ‘ya no duele’. Es confiar otra vez en el piso.",
    body: "Cadera, rodilla, tobillo. Post operatorio de ligamento o de menisco. Tendón que lleva meses. La lectura mira la cadena completa: si la rodilla avisa, a veces habla la cadera. El alta se estima. No se improvisa.",
    includes: [
      "Test de carga, control y confianza",
      "Terapia manual cuando suma",
      "Progresión de retorno, por escrito",
      "Coordinación con DT o preparador, si lo pides",
    ],
  },
  {
    slug: "persistente",
    n: "05",
    title: "Persistente",
    region: "Dolor que no se va",
    forWhom:
      "Quien ya hizo ‘el tratamiento’. Quien tiene examen limpio y cuerpo que no cree.",
    duration: "60 min",
    priceFrom: 44_000,
    image: "/images/window.jpg",
    alt: "Camilla en silueta frente al Mapocho y los Andes, de noche",
    lead: "Cuando el calendario ya no sirve, hay que leer otra cosa: el sistema, no el punto.",
    body: "Dolor de meses o de años. El cuerpo que aprendió a defenderse y no sabe soltar. Sesenta minutos. Educación, exposición gradual, manos cuando corresponden. No prometemos milagros. Prometemos no alargar un plan por inercia.",
    includes: [
      "Sesión de 60 minutos reales",
      "Mapa de umbral y de evitación",
      "Plan de exposición, no de reposo eterno",
      "Re-evaluación cada cuatro sesiones",
    ],
  },
  {
    slug: "atleta",
    n: "06",
    title: "Atleta",
    region: "Después del entrenamiento",
    forWhom:
      "Quien entrena de día y no puede perder la tarde en una sala de espera. El retorno, no el gimnasio por cumplir.",
    duration: "50–60 min",
    priceFrom: 44_000,
    image: "/images/figure.jpg",
    alt: "Paciente de espaldas en el box, mirando Santiago de noche",
    lead: "El cupo de las 21:00 existe porque el cuerpo del que entrena no cierra a las seis.",
    body: "Readaptación después de lesión. Criterios de retorno al deporte, no calendarios mágicos. Trabajamos cuando el entrenamiento del día ya ocurrió: esa es la hora en que el tejido habla. Si el caso es quirúrgico, te derivamos.",
    includes: [
      "Test de retorno: fuerza, control, confianza",
      "Cupos de 19:00, 20:00 y 21:00",
      "Progresión por etapas, por escrito",
      "Informe para el médico o el DT, si lo pides",
    ],
  },
] as const;

export const method = [
  {
    n: "01",
    title: "Silencio",
    text: "Se apaga el día. Diez minutos para que el cuerpo deje de representar. No partimos con el electro. Partimos con la pregunta.",
  },
  {
    n: "02",
    title: "Ver",
    text: "Movimiento, palpación, test. El dolor casi nunca está donde duele. Lo que se ve de noche no se discute: se nombra.",
  },
  {
    n: "03",
    title: "Nombrar",
    text: "Una hipótesis. Un mapa. Frecuencia, qué se hace en box y qué en casa, alta estimada. Por escrito. Ese día.",
  },
  {
    n: "04",
    title: "Devolver",
    text: "El mismo kinesiólogo. Si el cuerpo no responde, se cambia el plan — no se alarga el calendario por inercia.",
  },
] as const;

export const team = [
  {
    slug: "catalina-rojas",
    name: "Catalina Rojas",
    credential: "Kinesióloga · Universidad de Chile",
    extra: "Diplomado en terapia manual orofacial y columna",
    focus: "Lectura · Columna",
    line: "La espalda casi nunca duele donde nace.",
    image: "/images/spine.jpg",
  },
  {
    slug: "benjamin-ortiz",
    name: "Benjamín Ortiz",
    credential: "Kinesiólogo · Pontificia Universidad Católica",
    extra: "Miembro superior y post operatorio de hombro",
    focus: "Hombro",
    line: "El hombro es el más mentiroso del cuerpo.",
    image: "/images/hands.jpg",
  },
  {
    slug: "amanda-silva",
    name: "Amanda Silva",
    credential: "Kinesióloga · UDP",
    extra: "Dolor persistente y neurociencia del dolor",
    focus: "Persistente",
    line: "Cuando el calendario ya no sirve, se lee otra cosa.",
    image: "/images/window.jpg",
  },
  {
    slug: "ignacio-pena",
    name: "Ignacio Peña",
    credential: "Kinesiólogo · Universidad de los Andes",
    extra: "Readaptación deportiva y retorno al campo",
    focus: "Atleta · Carga",
    line: "Volver a jugar no es ‘ya no duele’.",
    image: "/images/figure.jpg",
  },
] as const;

export const prices = [
  {
    name: "Lectura inicial",
    detail: "75 min · mapa por escrito",
    amount: 48_000,
  },
  {
    name: "Sesión columna, hombro o carga",
    detail: "50–60 min · box",
    amount: 39_000,
  },
  {
    name: "Sesión persistente o atleta",
    detail: "60 min · box",
    amount: 44_000,
  },
  {
    name: "Pack 5 sesiones",
    detail: "Tras la lectura · mismo kinesiólogo",
    amount: 185_000,
  },
  {
    name: "Pack 10 sesiones",
    detail: "Tras la lectura · mismo kinesiólogo",
    amount: 350_000,
  },
] as const;

export const faqs = [
  {
    q: "¿Por qué abren a las 15:00?",
    a: "Porque el cuerpo de quien trabaja o entrena no cabe en un horario de oficina. NOCTUA está pensado para después del sol: último cupo 21:30, lunes a viernes. El sábado es 10:00 a 14:00, para quien necesita otra ventana.",
  },
  {
    q: "¿Cuánto cuesta la primera lectura?",
    a: "Setenta y cinco minutos, $48.000. Incluye hipótesis, mapa por escrito, alta estimada e información de reembolso. El valor de las sesiones siguientes se confirma ese día, no antes. Teléfono: +56 2 3288 1944.",
  },
  {
    q: "¿Atienden ISAPRE y FONASA?",
    a: "Emitimos boleta reembolsable el mismo día. Particular, ISAPRE (Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres y otras) y FONASA. El porcentaje lo define tu plan: te orientamos con el código y el tope, no prometemos un número que no controlamos.",
  },
  {
    q: "¿Cada cuánto son las sesiones?",
    a: "Lo decide la lectura, no un pack. En muchos casos, una o dos veces por semana. Si hace falta más, se dice. Si hace falta menos, también. No partimos sin que apruebes el plan.",
  },
  {
    q: "¿Qué llevo a la lectura?",
    a: "Orden médica si hay, exámenes e informes, ropa oscura cómoda, y lo que te duele dicho en tu idioma. Si tomas anticoagulantes o hay una cirugía reciente, avísanos al agendar. No hace falta ayuno.",
  },
  {
    q: "¿Cómo cancelo o reprogramo?",
    a: "Por WhatsApp o al +56 2 3288 1944, con 24 horas de anticipación. Menos que eso, se cobra la sesión: el cupo es de una persona, no de una lista. Responden kinesiólogos, no un call center.",
  },
] as const;

export const convenios = [
  "Boleta reembolsable el mismo día",
  "ISAPRE",
  "FONASA",
  "Particular",
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

export const slots = [
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "21:30",
] as const;

export const joints = [
  { id: "craneo", label: "Cráneo", x: 100, y: 32, href: "/oficio/persistente" },
  { id: "cervical", label: "Cervical", x: 100, y: 62, href: "/oficio/columna" },
  { id: "hombro-i", label: "Hombro", x: 66, y: 92, href: "/oficio/hombro" },
  { id: "hombro-d", label: "Hombro", x: 134, y: 92, href: "/oficio/hombro" },
  { id: "esternon", label: "Tórax", x: 100, y: 118, href: "/oficio/columna" },
  { id: "codo-i", label: "Codo", x: 48, y: 154, href: "/oficio/hombro" },
  { id: "codo-d", label: "Codo", x: 152, y: 154, href: "/oficio/hombro" },
  { id: "lumbar", label: "Lumbar", x: 100, y: 172, href: "/oficio/columna" },
  { id: "muneca-i", label: "Muñeca", x: 38, y: 206, href: "/oficio/hombro" },
  { id: "muneca-d", label: "Muñeca", x: 162, y: 206, href: "/oficio/hombro" },
  { id: "cadera-i", label: "Cadera", x: 84, y: 214, href: "/oficio/carga" },
  { id: "cadera-d", label: "Cadera", x: 116, y: 214, href: "/oficio/carga" },
  { id: "rodilla-i", label: "Rodilla", x: 86, y: 304, href: "/oficio/carga" },
  { id: "rodilla-d", label: "Rodilla", x: 114, y: 304, href: "/oficio/carga" },
  { id: "tobillo-i", label: "Tobillo", x: 84, y: 396, href: "/oficio/atleta" },
  { id: "tobillo-d", label: "Tobillo", x: 116, y: 396, href: "/oficio/atleta" },
] as const;

export const boneLines: Array<[string, string]> = [
  ["craneo", "cervical"],
  ["cervical", "esternon"],
  ["cervical", "hombro-i"],
  ["cervical", "hombro-d"],
  ["hombro-i", "codo-i"],
  ["hombro-d", "codo-d"],
  ["codo-i", "muneca-i"],
  ["codo-d", "muneca-d"],
  ["esternon", "lumbar"],
  ["lumbar", "cadera-i"],
  ["lumbar", "cadera-d"],
  ["cadera-i", "cadera-d"],
  ["cadera-i", "rodilla-i"],
  ["cadera-d", "rodilla-d"],
  ["rodilla-i", "tobillo-i"],
  ["rodilla-d", "tobillo-d"],
];
