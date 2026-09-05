export type Specialty = {
  slug: string;
  n: string;
  room: string;
  title: string;
  forWhom: string;
  duration: string;
  priceFrom: number;
  image: string;
  alt: string;
  lead: string;
  body: string;
  includes: string[];
  when: string[];
  doctorSlug: string;
};

export type Person = {
  slug: string;
  name: string;
  credential: string;
  extra: string;
  focus: string;
  line: string;
  specialtySlug: string;
  image: string;
};

export const stats = [
  { value: 12, prefix: "+", suffix: "", label: "Años de la misma casa" },
  { value: 18000, prefix: "+", suffix: "", label: "Pacientes al año", format: "es" as const },
  { value: 92, prefix: "", suffix: "%", label: "Horas asignadas en 48 h o menos" },
  { value: 8, prefix: "", suffix: "", label: "Especialidades, un laboratorio", pad: 2 },
] as const;

export const promises = [
  "Bono electrónico",
  "Resultado en portal",
  "48 h o te avisamos",
  "FONASA · ISAPRE · Particular",
] as const;

export const specialties: Specialty[] = [
  {
    slug: "medicina-interna",
    n: "01",
    room: "Sala 01",
    title: "Medicina interna",
    forWhom:
      "Quien trae tres recetas de tres médicos que no se hablan. El chequeo que no es un paquete de mall. El síntoma que no cierra en una especialidad.",
    duration: "40 min",
    priceFrom: 42_000,
    image: "/images/consulta.jpg",
    alt: "Sala de consulta ETER: camilla de lino, mesa de roble y fonendo sobre papel, luz norte",
    lead: "El mapa entero, no un órgano suelto. Cuarenta minutos para ordenar lo que otras consultas fragmentaron.",
    body: "La medicina interna es el oficio de mirar junto lo que suele verse por separado: la presión, el azúcar, el sueño, el ánimo, los remedios del velador. Amanda dirige la casa desde esa sala. Si el caso pide cardiología, ginecología o un examen, la derivación ocurre el mismo día, con nombre y con hora — no con un papel y un «pida usted».",
    includes: [
      "Chequeo anual con plan escrito",
      "Hipertensión, dislipidemia y riesgo cardiovascular",
      "Síntomas que no cierran en una especialidad",
      "Polifarmacia y revisión de recetas",
      "Coordinación de exámenes y derivaciones en esta casa",
    ],
    when: [
      "Hace más de un año que nadie lo mira entero",
      "Trae tres recetas que no se hablan",
      "Quiere un chequeo que no sea un paquete",
    ],
    doctorSlug: "amanda-reyes",
  },
  {
    slug: "pediatria",
    n: "02",
    room: "Sala 02",
    title: "Pediatría",
    forWhom:
      "El control que no se apura. La fiebre del fin de semana. El niño que «siempre está resfriado» y nadie se sentó a mirar el año.",
    duration: "30–40 min",
    priceFrom: 42_000,
    image: "/images/ventana.jpg",
    alt: "Ventana alta de la casa ETER, eucalipto en la alféizar y piso de roble",
    lead: "Ignacio reserva el tiempo del examen y el de la conversación con quien trae al niño. No son lo mismo.",
    body: "Control sano, lactancia, asma, alergia, el oído que se reitera. La sala 02 da al patio: hay luz, no hay televisor. Si hace falta otorrino o dermatología, están al otro lado del pasillo. No somos urgencia pediátrica: un pecho que silba de noche se atiende en un servicio de urgencia, y se lo decimos sin vueltas.",
    includes: [
      "Control sano y calendario de vacunas",
      "Infecciones reiteradas, asma y alergia",
      "Lactancia y alimentación del primer año",
      "Derivación interna el mismo día, si cabe",
      "Telemedicina de control cuando el caso lo permite",
    ],
    when: [
      "El control se fue aplazando y el niño creció",
      "Hay fiebre, oído o pecho que se reitera",
      "Quiere un pediatra que no mire el reloj a los doce minutos",
    ],
    doctorSlug: "ignacio-palma",
  },
  {
    slug: "ginecologia",
    n: "03",
    room: "Sala 03",
    title: "Ginecología",
    forWhom:
      "El PAP pendiente. El ciclo que cambió. La menopausia de la que nadie habla con tiempo. El miedo al tacto.",
    duration: "40 min",
    priceFrom: 52_000,
    image: "/images/espera.jpg",
    alt: "Pabellón de espera ETER: sillas de lino, ventanal y la cordillera al fondo",
    lead: "Catalina reserva el tiempo del examen y el de lo que lo rodea. El PAP cabe. La conversación también.",
    body: "Hay consultas de ginecología que duran lo que dura un PAP. En esta sala el examen cabe, y cabe lo que lo rodea: el ciclo, el deseo, la anticoncepción, el sangrado, la menopausia. Ecografía ginecológica en casa cuando corresponde. Si hay que derivar a oncología o a medicina reproductiva, se hace con nombre, no con un listado.",
    includes: [
      "Control ginecológico, PAP y VPH",
      "Anticoncepción y consejería",
      "Sangrado, miomas y endometriosis",
      "Climaterio y menopausia",
      "Ecografía ginecológica en esta casa",
    ],
    when: [
      "Lleva años sin un control y no quiere que la apuren",
      "Hay dolor, sangrado o un PAP pendiente",
      "Quiere hablar de menopausia con alguien que escuche",
    ],
    doctorSlug: "catalina-vidal",
  },
  {
    slug: "traumatologia",
    n: "04",
    room: "Sala 04",
    title: "Traumatología",
    forWhom:
      "La rodilla que avisa al bajar. El hombro del escritorio. El esguince que «ya debería haber pasado». El post operatorio que pide seguimiento, no una receta suelta.",
    duration: "30 min",
    priceFrom: 58_000,
    image: "/images/mesa.jpg",
    alt: "Mesa de roble con cuaderno de lino, un vaso de agua y un fonendo, luz de ventana",
    lead: "Tomás nombra lo que duele. Si es quirúrgico, se dice. Si es kinésico, se deriva — no se retiene.",
    body: "Hombro, rodilla, columna, cadera, tobillo. Fractura que ya se operó y nadie vio el mes siguiente. Infiltraciones cuando corresponden, en esta casa. La radiografía se lee con usted, no se manda por correo como un adjunto. No somos trauma de urgencia: un hueso que se ve o un pecho que aprieta se atienden en un servicio de urgencia.",
    includes: [
      "Evaluación de hombro, rodilla, columna y cadera",
      "Seguimiento post operatorio",
      "Infiltraciones y procedimientos menores",
      "Lectura de imágenes en la misma hora",
      "Derivación a kinesiología con nombre, no con un papel",
    ],
    when: [
      "Duele al moverse y el antiinflamatorio ya no basta",
      "Hay un post operatorio sin control claro",
      "Le dijeron «es desgaste» y quiere un mapa",
    ],
    doctorSlug: "tomas-alarcon",
  },
  {
    slug: "dermatologia",
    n: "05",
    room: "Sala 05",
    title: "Dermatología",
    forWhom:
      "El lunar que cambió. El acné que no es de adolescente. La mancha que el verano dejó. El cuero cabelludo que pica hace meses.",
    duration: "30 min",
    priceFrom: 54_000,
    image: "/images/detail.jpg",
    alt: "Lino pálido de camilla con luz rasante",
    lead: "Valentina mira con luz y con tiempo. Si hay que biopsia, se coordina. Si hay que esperar, también.",
    body: "Piel, uñas, cuero cabelludo. Control de lunares con dermatoscopio en la misma sala. Acné adulto, rosácea, psoriasis, el eccema del niño que ya vio pediatría. No somos clínica estética de paquetes: si un procedimiento es cosmético y no cabe aquí, se dice. El cáncer de piel no se consulta por foto de WhatsApp.",
    includes: [
      "Control de lunares y dermatoscopía",
      "Acné, rosácea y psoriasis",
      "Eccema y dermatitis de contacto",
      "Biopsia coordinada, informe de vuelta a esta sala",
      "Procedimientos menores en esta casa",
    ],
    when: [
      "Un lunar cambió de forma o de color",
      "El acné o la mancha ya no se arreglan en la farmacia",
      "Quiere un control anual de piel, no una crema suelta",
    ],
    doctorSlug: "valentina-riquelme",
  },
  {
    slug: "otorrino",
    n: "06",
    room: "Sala 06",
    title: "Otorrino",
    forWhom:
      "El oído que no destapa. La rinitis de todo el año. La voz que se queda. El niño que «no oye cuando le conviene» y conviene revisar.",
    duration: "30 min",
    priceFrom: 54_000,
    image: "/images/still.jpg",
    alt: "Bodegón clínico: cuaderno, lápiz, taza de cerámica y un ramito de eucalipto",
    lead: "Benjamín mira oído, nariz y garganta con el tiempo de una conversación, no de un trámite.",
    body: "Otitis reiterada, tapón, rinitis, sinusitis, apnea que alguien mencionó y nadie estudió. Audiometría cuando corresponde, en esta casa. Las amígdalas se operan en otro recinto; el criterio, aquí. Si el caso es quirúrgico, se deriva con nombre. Si es alérgico, se habla con pediatría o con interna — la ficha es una.",
    includes: [
      "Otitis, tapón y estudio de hipoacusia",
      "Rinitis, sinusitis y desviación que sí molesta",
      "Audiometría en esta casa",
      "Voz, amígdalas y adenoides — criterio, no inercia",
      "Coordinación con pediatría cuando el paciente es niño",
    ],
    when: [
      "El oído no destapa o la rinitis manda el año",
      "Hay un niño que no oye bien en la sala",
      "Le hablaron de apnea y quiere un mapa, no un aparato de entrada",
    ],
    doctorSlug: "benjamin-soto",
  },
  {
    slug: "cardiologia",
    n: "07",
    room: "Sala 07",
    title: "Cardiología",
    forWhom:
      "La presión que no baja. Las palpitaciones del escritorio. El control después del infarto. El certificado que pidió otra cirugía.",
    duration: "40 min",
    priceFrom: 62_000,
    image: "/images/patio.jpg",
    alt: "Patio interior de la casa ETER: un olivo visto desde la ventana, cortina de lino",
    lead: "Antonia no consulta el pecho por WhatsApp. La primera hora incluye ECG en la misma sala.",
    body: "Prevención, arritmia, insuficiencia, el control después del infarto. Hablamos de riesgo con cifras y con hábitos: el cerro, el estrés de la Costanera, el vino de los viernes. Si hace falta eco, Holter o MAPA, se agenda en esta casa. Un pecho que aprieta ahora se atiende en urgencia — no en esta sala, y se lo decimos en la web y en el teléfono.",
    includes: [
      "Prevención cardiovascular y control de factores",
      "ECG en la misma hora",
      "Ecocardiograma, Holter y MAPA en esta casa",
      "Seguimiento post infarto o angioplastia",
      "Evaluación preoperatoria cardiológica",
    ],
    when: [
      "Le dijeron que el corazón está bien y no le mostraron nada",
      "Hay palpitaciones, disnea o presión que no baja",
      "Le pidieron un certificado para una cirugía",
    ],
    doctorSlug: "antonia-espinoza",
  },
  {
    slug: "procedimientos",
    n: "08",
    room: "Sala 08",
    title: "Procedimientos",
    forWhom:
      "El ECG que no quiere viajar a otro edificio. La eco abdominal. La curación. La infiltración que ya indicó el traumatólogo de esta casa.",
    duration: "15–30 min",
    priceFrom: 22_000,
    image: "/images/lab.jpg",
    alt: "Laboratorio ETER: mesa blanca, gradilla de vidrio y microscopio junto a la ventana",
    lead: "Mateo hace lo que otras clínicas mandan a un sótano de otro recinto. El informe vuelve a la sala que lo pidió.",
    body: "ECG de doce derivaciones, ecografía abdominal y ginecológica, curaciones, infiltraciones, retiro de puntos. No es un pabellón: es la sala 08, con luz norte. El resultado no viaja una semana. Si el procedimiento pide pabellón o anestesista, se deriva — no se improvisa.",
    includes: [
      "ECG 12 derivaciones, informe el mismo día",
      "Ecografía abdominal y ginecológica",
      "Curaciones y retiro de puntos",
      "Infiltraciones indicadas por el equipo",
      "Informe de vuelta a la especialidad que lo pidió",
    ],
    when: [
      "Le pidieron un ECG o una eco y no quiere otro recinto",
      "Hay una curación o un punto que retirar",
      "El traumatólogo de esta casa indicó una infiltración",
    ],
    doctorSlug: "mateo-lagos",
  },
];

export const team: Person[] = [
  {
    slug: "amanda-reyes",
    name: "Amanda Reyes",
    credential: "Médica cirujana · Universidad de Chile",
    extra: "Internista · registro Superintendencia de Salud",
    focus: "Medicina interna",
    line: "El mapa entero, no un órgano suelto.",
    specialtySlug: "medicina-interna",
    image: "/images/consulta.jpg",
  },
  {
    slug: "ignacio-palma",
    name: "Ignacio Palma",
    credential: "Médico cirujano · Pontificia Universidad Católica",
    extra: "Pediatra · neonatología clínica",
    focus: "Pediatría",
    line: "El control que no se apura.",
    specialtySlug: "pediatria",
    image: "/images/ventana.jpg",
  },
  {
    slug: "catalina-vidal",
    name: "Catalina Vidal",
    credential: "Médica cirujana · Universidad de Chile",
    extra: "Ginecóloga obstetra",
    focus: "Ginecología",
    line: "El examen cabe. La conversación también.",
    specialtySlug: "ginecologia",
    image: "/images/espera.jpg",
  },
  {
    slug: "tomas-alarcon",
    name: "Tomás Alarcón",
    credential: "Médico cirujano · Universidad Diego Portales",
    extra: "Traumatólogo · hombro y rodilla",
    focus: "Traumatología",
    line: "Si es quirúrgico, se dice. Si no, también.",
    specialtySlug: "traumatologia",
    image: "/images/mesa.jpg",
  },
  {
    slug: "valentina-riquelme",
    name: "Valentina Riquelme",
    credential: "Médica cirujana · Universidad de los Andes",
    extra: "Dermatóloga · dermatoscopía",
    focus: "Dermatología",
    line: "La piel se mira con luz y con tiempo.",
    specialtySlug: "dermatologia",
    image: "/images/detail.jpg",
  },
  {
    slug: "benjamin-soto",
    name: "Benjamín Soto",
    credential: "Médico cirujano · Universidad de Chile",
    extra: "Otorrinolaringólogo",
    focus: "Otorrino",
    line: "Oído, nariz y garganta — sin trámite.",
    specialtySlug: "otorrino",
    image: "/images/still.jpg",
  },
  {
    slug: "antonia-espinoza",
    name: "Antonia Espinoza",
    credential: "Médica cirujana · Pontificia Universidad Católica",
    extra: "Cardióloga · prevención y arritmia",
    focus: "Cardiología",
    line: "El pecho, con tiempo. Y con números.",
    specialtySlug: "cardiologia",
    image: "/images/patio.jpg",
  },
  {
    slug: "mateo-lagos",
    name: "Mateo Lagos",
    credential: "Médico cirujano · Universidad Mayor",
    extra: "Ecografista · procedimientos ambulatorios",
    focus: "Procedimientos",
    line: "El examen no viaja a otro edificio.",
    specialtySlug: "procedimientos",
    image: "/images/lab.jpg",
  },
];

export const prices = [
  {
    name: "Consulta medicina interna",
    detail: "40 min · sala 01",
    amount: 42_000,
    note: "Particular · bono electrónico",
  },
  {
    name: "Consulta pediatría",
    detail: "30–40 min · sala 02",
    amount: 42_000,
    note: "Particular · bono electrónico",
  },
  {
    name: "Consulta especialidad",
    detail: "30–40 min · gine · trauma · derma · ORL · cardio",
    amount: 52_000,
    note: "Desde · según especialidad",
  },
  {
    name: "Control",
    detail: "20–30 min · misma especialidad",
    amount: 38_000,
    note: "Particular",
  },
  {
    name: "ECG 12 derivaciones",
    detail: "Informe el mismo día",
    amount: 22_000,
    note: "Sala 08",
  },
  {
    name: "Ecografía abdominal",
    detail: "Con informe de vuelta a la sala",
    amount: 48_000,
    note: "Sala 08",
  },
  {
    name: "Curación / procedimiento menor",
    detail: "Según indicación del equipo",
    amount: 24_000,
    note: "Desde",
  },
] as const;

export const method = [
  {
    n: "01",
    title: "Agenda",
    text: "Web, teléfono o WhatsApp. Bono electrónico antes de llegar — no hay fila de caja. Si no hay cupo en 48 horas, te lo decimos altiro. No te dejamos en espera eterna.",
  },
  {
    n: "02",
    title: "Atención",
    text: "Treinta a cuarenta minutos reales. Traiga cédula, orden si hay, exámenes previos. El médico que figura es el que atiende. Si un doctor no asiste, se reprograma el mismo día, no se improvisa un reemplazo.",
  },
  {
    n: "03",
    title: "Resultado",
    text: "Laboratorio propio: el informe entra al portal el mismo día. Receta, indicación y derivación, si cabe, quedan en la ficha. No hay que volver presencial a retirar un sobre.",
  },
] as const;

export const faqs = [
  {
    q: "¿Cómo reservo hora y con bono electrónico?",
    a: "Por esta web, al +56 2 2840 3315 o por WhatsApp. Confirmamos cupo y emitimos bono electrónico antes de que llegue — FONASA, ISAPRE o particular. No hay que hacer fila en caja. Si no hay hora en 48 horas, se lo decimos en ese mismo contacto.",
  },
  {
    q: "¿Qué previsión aceptan y cómo es el reembolso?",
    a: "FONASA A–D, ISAPRE (Banmédica, Colmena, Consalud, Cruz Blanca, Esencial, Nueva Masvida, Vida Tres y otras) y particular. El valor publicado es «desde», en pesos, para particular. El copago FONASA/ISAPRE se informa al agendar, con código y tope — no prometemos un número que no controlamos. Boleta electrónica el mismo día.",
  },
  {
    q: "¿Qué llevo a la primera consulta?",
    a: "Cédula. Orden médica si hay. Exámenes e informes previos, aunque estén en el celular. Lista de remedios que toma, dichos en su idioma. No hace falta ayuno salvo que el laboratorio se lo pida al agendar. Ropa cómoda si es traumatología o un ECG.",
  },
  {
    q: "¿Cómo veo mis exámenes y resultados?",
    a: "El laboratorio de esta casa carga el informe al portal el mismo día. Le avisamos por correo o WhatsApp. Los exámenes que se derivan a otro recinto vuelven a la sala que los pidió: se leen con usted, no se mandan como un adjunto suelto.",
  },
  {
    q: "¿Atienden presencial y por telemedicina?",
    a: "La consulta de esta casa es presencial: hay que auscultar, hay que mirar la piel, hay que hacer un ECG. La telemedicina es para controles ya abiertos — receta, ajuste, resultado — con la misma ficha. No atendemos diagnósticos nuevos por WhatsApp.",
  },
  {
    q: "¿Cómo anulo o reprogramo? ¿Y si el médico no asiste?",
    a: "Con 24 horas de anticipación, por WhatsApp o al +56 2 2840 3315. Menos que eso, se cobra la hora: el cupo es de una persona, no de una lista. Si el médico no asiste, reprogramamos el mismo día o devolvemos. Responden administrativos de esta casa, no un call center. Si no contestamos, devolvemos el llamado el mismo día.",
  },
] as const;

export const convenios = [
  "Bono electrónico antes de llegar",
  "FONASA A–D",
  "ISAPRE",
  "Particular",
  "Seguros complementarios, cuando el plan lo permite",
] as const;

export const previsiones = [
  "Particular",
  "FONASA",
  "Banmédica",
  "Colmena",
  "Consalud",
  "Cruz Blanca",
  "Esencial",
  "Nueva Masvida",
  "Vida Tres",
  "Otra",
] as const;

export const labTests = [
  { name: "Hemograma y VHS", time: "Mismo día", amount: 14_000 },
  { name: "Perfil bioquímico", time: "Mismo día", amount: 22_000 },
  { name: "Perfil lipídico", time: "Mismo día", amount: 16_000 },
  { name: "HbA1c", time: "Mismo día", amount: 18_000 },
  { name: "TSH y T4 libre", time: "Mismo día", amount: 24_000 },
  { name: "Orina completa", time: "Mismo día", amount: 8_000 },
  { name: "PCR", time: "Mismo día", amount: 12_000 },
  { name: "Vitamina D", time: "24–48 h", amount: 28_000 },
] as const;
