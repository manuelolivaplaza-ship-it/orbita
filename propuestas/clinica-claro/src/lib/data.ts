export type Specialty = {
  slug: string;
  room: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  doctorSlug: string;
  firstVisit: string;
  control: string;
  duration: string;
  body: string[];
  work: string[];
  when: string[];
};

export type Doctor = {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  specialty: string;
  specialtySlug: string;
  image: string;
  email: string;
  quote: string;
  bio: string[];
  education: string[];
  memberships: string[];
  languages: string[];
};

export const specialties: Specialty[] = [
  {
    slug: "medicina-interna",
    room: "01",
    title: "Medicina interna",
    short: "El mapa entero, no un órgano suelto.",
    lead: "La primera conversación de esta casa. Cuarenta y cinco minutos para ordenar lo que otras consultas fragmentaron.",
    image: "/images/consulta.jpg",
    doctorSlug: "elena-vargas",
    firstVisit: "$68.000",
    control: "$48.000",
    duration: "45 min",
    body: [
      "La medicina interna es el oficio de mirar junto lo que suele verse por separado: la presión, el azúcar, el sueño, el ánimo, los remedios que se acumulan en el velador. En CLARO esa mirada tiene un tiempo fijo. No se improvisa entre una receta y la puerta.",
      "Elena dirige la casa desde esa sala. Si el caso pide cardiología, endocrino o salud mental, la derivación ocurre el mismo día, con nombre y con hora — no con un papel y un «pida usted».",
    ],
    work: [
      "Chequeo anual con plan escrito",
      "Hipertensión, dislipidemia y riesgo cardiovascular",
      "Síntomas que no cierran en una especialidad",
      "Polifarmacia y revisión de recetas",
      "Coordinación de exámenes y derivaciones",
    ],
    when: [
      "Hace más de un año que nadie lo mira entero",
      "Trae tres recetas de tres médicos que no se hablan",
      "Quiere un chequeo que no sea un paquete de mall",
    ],
  },
  {
    slug: "cardiologia",
    room: "02",
    title: "Cardiología",
    short: "El pecho, con tiempo. Y con números.",
    lead: "Prevención, arritmia, insuficiencia, el control después del infarto. La sala 02 da a la cordillera.",
    image: "/images/ventana.jpg",
    doctorSlug: "martin-soto",
    firstVisit: "$82.000",
    control: "$56.000",
    duration: "45 min",
    body: [
      "Martín no consulta el pecho por WhatsApp. La primera hora incluye ECG en la misma sala. Si hace falta eco, Holter o MAPA, se agenda en esta casa, no en un sótano de otro edificio.",
      "Hablamos de riesgo con cifras y con hábitos. El cerro, el estrés de la Costanera, el vino de los viernes: entran en la ficha. Un beta-bloqueador no reemplaza esa conversación.",
    ],
    work: [
      "Prevención cardiovascular y control de factores",
      "Hipertensión, arritmia e insuficiencia",
      "ECG, ecocardiograma, Holter y MAPA en casa",
      "Seguimiento post infarto o angioplastia",
      "Evaluación preoperatoria cardiológica",
    ],
    when: [
      "Le dijeron que «el corazón está bien» y no le mostraron nada",
      "Hay palpitaciones, disnea o presión que no baja",
      "Le pidieron un certificado para una cirugía",
    ],
  },
  {
    slug: "endocrinologia",
    room: "03",
    title: "Endocrinología",
    short: "Diabetes, tiroides, hormonas. Sin apuro.",
    lead: "Una receta de metformina no es un plan. Camila se sienta a explicar el que sí lo es.",
    image: "/images/patio.jpg",
    doctorSlug: "camila-riquelme",
    firstVisit: "$80.000",
    control: "$54.000",
    duration: "45 min",
    body: [
      "La diabetes se trata mal cuando se trata rápido. Acá la primera hora sirve para entender qué come, a qué hora trabaja, si se pincha, si le da miedo la insulina. El laboratorio está al lado: la HbA1c no viaja una semana.",
      "Tiroides, SOP, osteoporosis, obesidad clínica. Si el caso pide nutrición, la coordinamos. Si pide cirugía bariátrica, lo decimos con claridad — y no operamos en esta casa.",
    ],
    work: [
      "Diabetes tipo 1 y 2, prediabetes",
      "Tiroides, nódulos y control de levotiroxina",
      "SOP, menopausia y osteoporosis",
      "Obesidad clínica y preparación bariátrica",
      "Ajuste de insulina y tecnología de monitoreo",
    ],
    when: [
      "Le subieron la metformina y nadie le preguntó qué almuerza",
      "El TSH sale raro y quiere que alguien lo lea con calma",
      "Hay SOP, ciclos irregulares o menopausia difícil",
    ],
  },
  {
    slug: "gastroenterologia",
    room: "04",
    title: "Gastroenterología",
    short: "El abdomen se escucha. Después se mira.",
    lead: "Reflujo, colon, hígado, intolerancias. La endoscopía se deriva; la conversación, no.",
    image: "/images/consulta.jpg",
    doctorSlug: "nicolas-araya",
    firstVisit: "$78.000",
    control: "$52.000",
    duration: "45 min",
    body: [
      "Nicolás parte por lo que come, cómo duerme y qué remedios toma. La endoscopía y la colonoscopía se hacen en un centro con el que trabajamos; el informe vuelve a esta sala y se lee con usted, no se manda por correo como un adjunto.",
      "Hígado graso, colon irritable, enfermedad inflamatoria, Helicobacter. Si hay que operar, se lo decimos. Si hay que esperar, también.",
    ],
    work: [
      "Reflujo, gastritis y Helicobacter pylori",
      "Colon irritable y enfermedad inflamatoria",
      "Hígado graso y control de transaminasas",
      "Derivación de endoscopía y colonoscopía",
      "Intolerancias y estudio de diarrea crónica",
    ],
    when: [
      "El omeprazol lleva dos años y nadie revisó por qué",
      "Hay sangre, baja de peso o un familiar con cáncer de colon",
      "El abdomen «siempre está mal» y quiere un mapa",
    ],
  },
  {
    slug: "neurologia",
    room: "05",
    title: "Neurología",
    short: "Migraña, memoria, temblor. Nombre y tiempo.",
    lead: "El sistema nervioso no se consulta en doce minutos. Antonia no lo intenta.",
    image: "/images/pasillo.jpg",
    doctorSlug: "antonia-palma",
    firstVisit: "$85.000",
    control: "$58.000",
    duration: "45–50 min",
    body: [
      "La migraña bien tratada cambia un mes. El olvido bien preguntado distingue el cansancio de algo que pide estudio. El Parkinson se acompaña, no se despacha con una receta de levodopa y un control a los seis meses.",
      "Si hace falta resonancia o electro, las pedimos con indicación precisa. El informe se sienta otra vez en esta sala.",
    ],
    work: [
      "Migraña y cefalea crónica",
      "Estudio de memoria y deterioro cognitivo",
      "Parkinson, temblor y trastornos del movimiento",
      "Epilepsia y primer síncope neurológico",
      "Neuropatía y dolor neuropático",
    ],
    when: [
      "El dolor de cabeza manda en el mes",
      "Hay olvidos que ya no se ríen en la mesa",
      "Apareció un temblor o un mareo que no cierra",
    ],
  },
  {
    slug: "ginecologia",
    room: "06",
    title: "Ginecología",
    short: "La consulta que no se apura. El PAP, también.",
    lead: "Isidora reserva el tiempo del examen y el de la conversación. No son lo mismo.",
    image: "/images/pabellon.jpg",
    doctorSlug: "isidora-benitez",
    firstVisit: "$76.000",
    control: "$52.000",
    duration: "45 min",
    body: [
      "Hay consultas de ginecología que duran lo que dura un PAP. En esta sala el examen cabe, y cabe lo que lo rodea: el ciclo, el deseo, la anticoncepción, el sangrado, la menopausia, el miedo al tacto.",
      "Ecografía ginecológica en casa cuando corresponde. Si hay que derivar a oncología o a medicina reproductiva, se hace con nombre, no con un listado.",
    ],
    work: [
      "Control ginecológico, PAP y VPH",
      "Anticoncepción y consejería",
      "Sangrado, miomas y endometriosis",
      "Climaterio y menopausia",
      "Ecografía ginecológica y obstétrica precoz",
    ],
    when: [
      "Lleva años sin un control y no quiere que la apuren",
      "Hay dolor, sangrado o un PAP pendiente",
      "Quiere hablar de menopausia con alguien que escuche",
    ],
  },
  {
    slug: "dermatologia",
    room: "07",
    title: "Dermatología",
    short: "La piel como órgano. No como vitrina.",
    lead: "Lunares, acné, psoriasis, el sol de Santiago. La estética, si cabe, viene después del diagnóstico.",
    image: "/images/patio.jpg",
    doctorSlug: "felipe-undurraga",
    firstVisit: "$74.000",
    control: "$50.000",
    duration: "40–45 min",
    body: [
      "Felipe mira lunares con dermatoscopio. El sol de la cuenca de Santiago no es un detalle: es un factor. Si un lunar pide biopsia, se hace el plan esa misma hora.",
      "Acné del adulto, rosácea, psoriasis, dermatitis. Procedimientos menores en casa. No vendemos un láser antes de un diagnóstico.",
    ],
    work: [
      "Control de lunares y dermatoscopía",
      "Cáncer de piel y seguimiento de cicatrices",
      "Acné, rosácea y dermatitis",
      "Psoriasis y enfermedades inflamatorias",
      "Procedimientos menores y crioterapia",
    ],
    when: [
      "Un lunar cambió o nunca se lo han mapeado",
      "El acné adulto no cede con lo de la farmacia",
      "Hay una mancha, un eccema o psoriasis en tratamiento suelto",
    ],
  },
  {
    slug: "salud-mental",
    room: "08",
    title: "Salud mental",
    short: "Cincuenta minutos. La misma casa, otro ritmo.",
    lead: "Psiquiatría clínica, sin diván de catálogo. Amanda trabaja con tiempo y con nombre.",
    image: "/images/pasillo.jpg",
    doctorSlug: "amanda-lagos",
    firstVisit: "$92.000",
    control: "$72.000",
    duration: "50 min",
    body: [
      "La sala 08 no se oye desde el pabellón. Primera hora de cincuenta minutos; los controles, también. Depresión, ansiedad, sueño, el ajuste fino de un antidepresivo que alguien recetó en doce minutos.",
      "Si el caso pide psicoterapia, coordinamos con profesionales de confianza. Si pide hospitalización, lo decimos. No somos un servicio de crisis: el 600 360 7777 (Salud Responde) y el SAMU existen por algo.",
    ],
    work: [
      "Depresión, ansiedad y trastorno adaptativo",
      "Insomnio y ritmo de sueño",
      "Ajuste y deprescripción de psicofármacos",
      "Acompañamiento en duelo y agotamiento",
      "Coordinación con psicoterapia externa",
    ],
    when: [
      "Lleva un antidepresivo y nadie lo ha revisado en un año",
      "El sueño, el ánimo o la angustia ya mandan en la semana",
      "Quiere una primera hora sin prisa y sin teatro",
    ],
  },
];

export const doctors: Doctor[] = [
  {
    slug: "elena-vargas",
    name: "Dra. Elena Vargas Ossandón",
    shortName: "Elena Vargas",
    role: "Directora médica",
    specialty: "Medicina interna",
    specialtySlug: "medicina-interna",
    image: "/images/elena.jpg",
    email: "elena@claro.cl",
    quote:
      "Me fui de una clínica donde la hora duraba doce minutos. No se puede ejercer así y dormir en paz.",
    bio: [
      "Elena fundó CLARO en 2018, en esta casa, después de catorce años en un recinto grande de oriente. El cupo era el negocio. El paciente, una fila. Se trajo la ficha, el estetoscopio y la costumbre de mirar a la cara.",
      "Internista de la Universidad de Chile. Formó a residentes y se cansó de enseñar una medicina que el reloj de la institución no permitía practicar. Hoy dirige la casa: el cupo, las derivaciones, el tono de la recepción.",
      "Atiende lunes, miércoles y viernes. El resto del tiempo está en las otras salas, no en un directorio.",
    ],
    education: [
      "Médica cirujana, Universidad de Chile",
      "Especialista en medicina interna, Hospital Clínico U. de Chile",
      "Diplomado en gestión de clínicas, U. de los Andes",
    ],
    memberships: [
      "Colegio Médico de Chile",
      "Sociedad Médica de Santiago",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "martin-soto",
    name: "Dr. Martín Soto Larraín",
    shortName: "Martín Soto",
    role: "Cardiólogo",
    specialty: "Cardiología",
    specialtySlug: "cardiologia",
    image: "/images/martin.jpg",
    email: "martin@claro.cl",
    quote:
      "El pecho no se consulta por WhatsApp. El ECG se hace acá, el mismo día.",
    bio: [
      "Martín llegó a CLARO el segundo año, cuando Elena decidió que la hipertensión no se derivaba a un mall. Trajo el eco, el Holter y la costumbre de dibujar el corazón en un papel.",
      "Cardiólogo de la Pontificia Universidad Católica. Trabajó en unidad coronaria y eligió la consulta: menos teatro, más seguimiento. La sala 02 da a la cordillera a las ocho de la mañana. Eso no es decoración.",
    ],
    education: [
      "Médico cirujano, Pontificia Universidad Católica de Chile",
      "Especialista en cardiología, PUC",
      "Entrenamiento en ecocardiografía, Hospital Clínico UC",
    ],
    memberships: [
      "Sociedad Chilena de Cardiología",
      "Colegio Médico de Chile",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "camila-riquelme",
    name: "Dra. Camila Riquelme Díaz",
    shortName: "Camila Riquelme",
    role: "Endocrinóloga",
    specialty: "Endocrinología",
    specialtySlug: "endocrinologia",
    image: "/images/camila.jpg",
    email: "camila@claro.cl",
    quote:
      "La insulina se explica. No se receta y se empuja la silla.",
    bio: [
      "Camila atiende diabetes como se atiende un oficio largo: con comida, con horarios, con miedo. El laboratorio al lado le permite ajustar el mismo día, no a las tres semanas.",
      "Endocrinóloga de la Universidad de Chile. Se formó en el San Juan de Dios y no extraña el volumen. Los martes y jueves la sala 03 se llena de tiroides, SOP y gente que llegó cansada de que le hablen en miligramos.",
    ],
    education: [
      "Médica cirujana, Universidad de Chile",
      "Especialista en endocrinología, Hospital San Juan de Dios",
      "Estadía en diabetes tecnológica, Clínica Universidad de Navarra",
    ],
    memberships: [
      "Sociedad Chilena de Endocrinología y Diabetes",
      "Colegio Médico de Chile",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "nicolas-araya",
    name: "Dr. Nicolás Araya Pino",
    shortName: "Nicolás Araya",
    role: "Gastroenterólogo",
    specialty: "Gastroenterología",
    specialtySlug: "gastroenterologia",
    image: "/images/nicolas.jpg",
    email: "nicolas@claro.cl",
    quote:
      "La endoscopía se hace en otro lado. El informe se lee acá, con usted sentado.",
    bio: [
      "Nicolás no endoscopa en esta casa: el pabellón no es un pabellón quirúrgico. Trabaja con un centro de Providencia y se reserva la conversación, que es donde se decide si el tubo hace falta.",
      "Gastroenterólogo de la Universidad de Valparaíso. Volvió a Santiago por la casa, no por el recinto. Los miércoles el patio se llena de gente que lleva dos años de omeprazol.",
    ],
    education: [
      "Médico cirujano, Universidad de Valparaíso",
      "Especialista en gastroenterología, Hospital Carlos Van Buren",
      "Entrenamiento en EII, Hospital Clínic de Barcelona",
    ],
    memberships: [
      "Sociedad Chilena de Gastroenterología",
      "Colegio Médico de Chile",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "antonia-palma",
    name: "Dra. Antonia Palma Echeverría",
    shortName: "Antonia Palma",
    role: "Neuróloga",
    specialty: "Neurología",
    specialtySlug: "neurologia",
    image: "/images/antonia.jpg",
    email: "antonia@claro.cl",
    quote:
      "La migraña bien preguntada ahorra un año de analgésicos.",
    bio: [
      "Antonia llegó cuando la casa entendió que el mareo, el temblor y el olvido no cabían en la interna. La sala 05 es la más quieta del segundo piso.",
      "Neuróloga de la Universidad de los Andes. Se formó en el Sótero del Río. Habla claro de lo que se puede tratar y de lo que se acompaña. No promete devolver la memoria. Promete un mapa.",
    ],
    education: [
      "Médica cirujana, Universidad de los Andes",
      "Especialista en neurología, Hospital Sótero del Río",
      "Fellowship en cefalea, UCSF",
    ],
    memberships: [
      "Sociedad de Neurología, Psiquiatría y Neurocirugía",
      "Colegio Médico de Chile",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "isidora-benitez",
    name: "Dra. Isidora Benítez Cox",
    shortName: "Isidora Benítez",
    role: "Ginecóloga",
    specialty: "Ginecología",
    specialtySlug: "ginecologia",
    image: "/images/isidora.jpg",
    email: "isidora@claro.cl",
    quote:
      "El examen cabe. Y cabe lo que lo rodea. Si no, no es una consulta.",
    bio: [
      "Isidora armó la sala 06 para que el tiempo del PAP no se coma el tiempo de la conversación. Ecógrafo en la misma habitación. Luz de patio, no de quirófano.",
      "Ginecóloga de la Pontificia Universidad Católica. Trabajó en un recinto de alto volumen y se trajo la precisión, no la fila. Atiende climaterio con la misma seriedad que un control de los treinta.",
    ],
    education: [
      "Médica cirujana, Pontificia Universidad Católica de Chile",
      "Especialista en ginecología y obstetricia, PUC",
      "Diplomado en climaterio, Universidad de Chile",
    ],
    memberships: [
      "Sociedad Chilena de Obstetricia y Ginecología",
      "Colegio Médico de Chile",
    ],
    languages: ["Español", "Inglés", "Francés"],
  },
  {
    slug: "felipe-undurraga",
    name: "Dr. Felipe Undurraga Matte",
    shortName: "Felipe Undurraga",
    role: "Dermatólogo",
    specialty: "Dermatología",
    specialtySlug: "dermatologia",
    image: "/images/felipe.jpg",
    email: "felipe@claro.cl",
    quote:
      "El sol de Santiago es un diagnóstico. No un paisaje.",
    bio: [
      "Felipe mapea lunares con dermatoscopio y no vende un láser antes de un nombre. La sala 07 da al patio de olivos: mala idea para un fototipo claro sin bloqueador, buena idea para una consulta.",
      "Dermatólogo de la Universidad de Chile. Se formó en el Salvador. El cáncer de piel lo toma con la calma de quien ha visto demasiado «ya lo vemos en seis meses».",
    ],
    education: [
      "Médico cirujano, Universidad de Chile",
      "Especialista en dermatología, Hospital Salvador",
      "Entrenamiento en dermatoscopía, Hospital Italiano de Buenos Aires",
    ],
    memberships: [
      "Sociedad Chilena de Dermatología",
      "Colegio Médico de Chile",
    ],
    languages: ["Español", "Inglés"],
  },
  {
    slug: "amanda-lagos",
    name: "Dra. Amanda Lagos Huneeus",
    shortName: "Amanda Lagos",
    role: "Psiquiatra",
    specialty: "Salud mental",
    specialtySlug: "salud-mental",
    image: "/images/amanda.jpg",
    email: "amanda@claro.cl",
    quote:
      "Cincuenta minutos. La misma casa, otra acústica.",
    bio: [
      "Amanda pidió que la sala 08 no se oyera desde el pabellón. Se le cumplió. Primera hora de cincuenta minutos, siempre. Los psicofármacos se revisan; no se eternizan.",
      "Psiquiatra de la Universidad de Chile. Trabajó en el Psiquiátrico y en consulta privada. Eligió esta casa porque el paciente de medicina interna a veces es, también, el de ella — y conviene que el pasillo sea corto.",
    ],
    education: [
      "Médica cirujana, Universidad de Chile",
      "Especialista en psiquiatría adultos, Instituto Psiquiátrico Dr. José Horwitz Barak",
      "Formación en psicofarmacología clínica, U. de Chile",
    ],
    memberships: [
      "Sociedad Chilena de Salud Mental",
      "Colegio Médico de Chile",
    ],
    languages: ["Español", "Inglés"],
  },
];

export const stats = [
  { value: "45", label: "minutos la consulta. No doce." },
  { value: "8", label: "especialistas en una casa" },
  { value: "2018", label: "el año en que abrimos la puerta" },
  { value: "4", label: "cupos de estacionamiento, no un mall" },
] as const;

export const principles = [
  {
    n: "01",
    title: "La hora dura lo que dice.",
    text: "Cuarenta y cinco minutos. Cincuenta en salud mental. Si el cupo del día se llena, se lo decimos. No apretamos la agenda para que quepa uno más.",
  },
  {
    n: "02",
    title: "Lo miramos a la cara.",
    text: "La ficha está en la pantalla. Usted, no. El computador no se interpone entre dos sillas.",
  },
  {
    n: "03",
    title: "El plan queda escrito.",
    text: "Indicaciones, exámenes, cifras. Boleta electrónica el mismo día, con código de prestación para su isapre.",
  },
  {
    n: "04",
    title: "Si hay que derivar, hay nombre.",
    text: "No un listado. Un colega, un teléfono, una hora. El pasillo de esta casa es corto a propósito.",
  },
  {
    n: "05",
    title: "No somos urgencia.",
    text: "Dolor de pecho, dificultad para respirar, un ACV: SAMU 131. Acá se consulta con hora. El cupo de la mañana no es un box de urgencia.",
  },
] as const;

export const visitSteps = [
  {
    n: "01",
    title: "Pide la hora.",
    text: "Por la web, por WhatsApp o al 2 2334 7180. Recepción confirma el mismo día hábil. Si el mes está lleno, se lo decimos — no le damos una hora de doce minutos para que quepa.",
  },
  {
    n: "02",
    title: "Llega a una casa.",
    text: "Los Conquistadores 2170. Estacionamiento en el predio. El pabellón de vidrio es la espera: agua, luz, olivos. Nadie le grita un apellido.",
  },
  {
    n: "03",
    title: "Trae lo que tenga.",
    text: "Exámenes viejos, recetas, el sobre de 2019. Aunque esté arrugado. Aunque no se acuerde para qué era. Sirve más que un relato suelto.",
  },
  {
    n: "04",
    title: "Cuarenta y cinco minutos.",
    text: "Conversación, examen físico si cabe, plan. El computador no se interpone. Si hace falta laboratorio, se baja al pabellón el mismo día.",
  },
  {
    n: "05",
    title: "Sale con papel y con cifra.",
    text: "Indicaciones, boleta, código de prestación. El control se agenda antes de cruzar el patio. Si no hace falta volver, también se lo decimos.",
  },
] as const;

export const labTests = [
  {
    name: "Hemograma",
    price: "$18.000",
    time: "el mismo día",
  },
  {
    name: "Perfil bioquímico",
    price: "$36.000",
    time: "el mismo día",
  },
  {
    name: "Perfil lipídico",
    price: "$22.000",
    time: "el mismo día",
  },
  {
    name: "HbA1c",
    price: "$18.000",
    time: "el mismo día",
  },
  {
    name: "TSH / T4 libre",
    price: "$16.000 / $18.000",
    time: "24–48 h",
  },
  {
    name: "ECG de reposo",
    price: "$24.000",
    time: "en la consulta",
  },
  {
    name: "Holter 24 h",
    price: "$89.000",
    time: "informe en 72 h",
  },
  {
    name: "MAPA",
    price: "$79.000",
    time: "informe en 72 h",
  },
  {
    name: "Ecocardiograma",
    price: "$95.000",
    time: "con hora",
  },
  {
    name: "Ecografía abdominal",
    price: "$58.000",
    time: "con hora",
  },
  {
    name: "Ecografía ginecológica",
    price: "$62.000",
    time: "en la consulta",
  },
  {
    name: "Dermatoscopía / mapeo",
    price: "incluida en la hora",
    time: "en la consulta",
  },
] as const;

export const isapres = [
  "Banmédica",
  "Colmena",
  "Consalud",
  "Cruz Blanca",
  "Esencial",
  "Nueva Masvida",
  "Vida Tres",
  "Fonasa (particular)",
] as const;

export const convenios = [
  {
    title: "Particular",
    text: "La vía de esta casa. Paga la consulta, recibe boleta electrónica con código de prestación, presenta el reembolso en su isapre según plan. Fonasa: igual boleta, reembolso según tramo.",
  },
  {
    title: "Isapres",
    text: "No tenemos convenio de bono electrónico en box. Sí tenemos la boleta y el código para que el reembolso no se trabe. Si su plan cubre libre elección, esto es más limpio que un bono mal emitido.",
  },
  {
    title: "Seguros complementarios",
    text: "Emitimos factura o boleta a nombre de quien corresponda. El informe y la orden de exámenes van con el detalle que pide la compañía.",
  },
] as const;

export const testimonials = [
  {
    name: "Pilar A.",
    meta: "Medicina interna · Ñuñoa",
    text: "Llevaba tres años de controles de quince minutos en un recinto de oriente. Acá Elena me sentó, me pidió las recetas y me bajó dos. Salí más liviana. Literal.",
  },
  {
    name: "Rodrigo M.",
    meta: "Cardiología · Las Condes",
    text: "El ECG fue en la misma sala. El Holter, al día siguiente. Martín me dibujó el corazón en un papel. En la otra clínica me habían hablado al monitor.",
  },
  {
    name: "Javiera C.",
    meta: "Ginecología · Providencia",
    text: "Isidora me preguntó qué me daba miedo del examen antes de pedirme que me recostara. Hacía ocho años que nadie me preguntaba eso.",
  },
  {
    name: "Andrés L.",
    meta: "Endocrinología · Vitacura",
    text: "Camila me explicó la insulina con un plato de verdad, no con una pirámide. El laboratorio está al lado. La HbA1c no viajó una semana.",
  },
] as const;

export const faqs = [
  {
    q: "¿Cuánto dura la consulta?",
    a: "Cuarenta y cinco minutos. Cincuenta en salud mental. El control, el mismo tiempo: no se achica porque «ya se conocen». Si el caso pide más, se agenda otra hora, no se corre al que viene.",
  },
  {
    q: "¿Cuánto cuesta la primera hora?",
    a: "Medicina interna $68.000. Especialidades entre $74.000 y $92.000, publicadas en cada sala. El control baja. Laboratorio y exámenes van aparte, con arancel a la vista. Nada se cobra después, en la puerta.",
  },
  {
    q: "¿Trabajan con isapre o Fonasa?",
    a: "Atendemos de forma particular. Boleta electrónica el mismo día, con código de prestación para reembolso. Fonasa: igual boleta, según su tramo. No emitimos bono electrónico en box.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Webpay, transferencia y tarjetas. Hasta 3 cuotas sin interés en consultas. Exámenes de mayor valor, hasta 6. El plan de pago se dice antes, no en caja.",
  },
  {
    q: "¿Hacen telemedicina?",
    a: "El control, sí, cuando el caso lo permite. La primera hora es presencial: hay que auscultar, hay que mirar la piel, hay que estar. Amanda a veces abre una primera hora a distancia si usted vive fuera de Santiago; lo conversamos.",
  },
  {
    q: "¿Qué pasa si llego tarde?",
    a: "Diez minutos de margen. Después, la hora se reagenda: el que viene también pagó cuarenta y cinco minutos. Si el taco de la Costanera es el de siempre, avise por WhatsApp.",
  },
  {
    q: "¿Dónde se estaciona?",
    a: "En el predio, cuatro cupos. Si están ocupados, hay estacionamientos en Pedro de Valdivia Norte a tres cuadras. Uber y Cabify dejan en la puerta.",
  },
  {
    q: "¿Atienden urgencias?",
    a: "No. Dolor de pecho, dificultad para respirar, signos de ACV, una hemorragia: SAMU 131. Si es paciente de CLARO y hay una duda que puede esperar a la mañana, el WhatsApp de recepción se revisa en horario hábil.",
  },
  {
    q: "¿Atención a niños?",
    a: "No. Esta casa es de adultos. Si viene con un hijo, hay una silla en el pabellón; no hay pediatría ni sala de juegos.",
  },
  {
    q: "¿Necesito orden médica para el laboratorio?",
    a: "Si es paciente de CLARO, la orden sale de la consulta. Si viene de otro médico, traiga la orden. No hacemos perfiles «por si acaso» sin indicación.",
  },
];

export const prepare = [
  "Cédula de identidad.",
  "Exámenes anteriores, aunque estén en un sobre de 2019.",
  "Lista de remedios — los de la isapre y los de la farmacia.",
  "Nombre de su previsión y, si quiere reembolso, los datos de la isapre.",
  "Si es ginecología, evite relaciones sexuales y óvulos 48 horas antes del PAP.",
  "Si es laboratorio en ayunas: 8 horas, agua sí, café no.",
  "Llegue diez minutos antes. El pabellón no es una fila: es para sentarse.",
] as const;

export function getSpecialty(slug: string) {
  return specialties.find((item) => item.slug === slug);
}

export function getDoctor(slug: string) {
  return doctors.find((item) => item.slug === slug);
}

export function doctorForSpecialty(slug: string) {
  const spec = getSpecialty(slug);
  if (!spec) return undefined;
  return getDoctor(spec.doctorSlug);
}
