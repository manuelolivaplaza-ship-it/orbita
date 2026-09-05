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
  star: { x: number; y: number };
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
  { value: 16, prefix: "", suffix: ":00", label: "Apertura, lun a vie" },
  { value: 22, prefix: "", suffix: ":00", label: "Último cupo" },
  { value: 40, prefix: "", suffix: " min", label: "La primera consulta" },
  { value: 8, prefix: "", suffix: "", label: "Especialidades, una casa", pad: 2 },
] as const;

export const promises = [
  "Último cupo 22:00",
  "Bono electrónico",
  "Informe esa noche",
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
    priceFrom: 48_000,
    image: "/images/consulta.jpg",
    alt: "Sala de consulta NOCTUA: camilla de lino oscuro, fonendo y lámpara ámbar",
    lead: "El mapa entero, no un órgano suelto. Cuarenta minutos para ordenar lo que el día fragmentó.",
    body: "De día el internista es una hora que no existe: se pide para agosto. Aquí la consulta cabe después del trabajo. Elisa mira junto lo que suele verse por separado — la presión, el azúcar, el sueño, el ánimo, los remedios del velador. Si el caso pide cardiología, imagen o un examen, la derivación ocurre esa misma noche, con nombre y con hora.",
    includes: [
      "Chequeo anual con plan escrito esa noche",
      "Hipertensión, dislipidemia y riesgo cardiovascular",
      "Síntomas que no cierran en una especialidad",
      "Polifarmacia y revisión de recetas",
      "Coordinación de exámenes en esta casa",
    ],
    when: [
      "Hace más de un año que nadie lo mira entero",
      "Trae tres recetas que no se hablan",
      "Quiere un chequeo que no sea un paquete",
    ],
    doctorSlug: "elisa-moreno",
    star: { x: 86, y: 118 },
  },
  {
    slug: "medicina-del-sueno",
    n: "02",
    room: "Sala de sueño",
    title: "Medicina del sueño",
    forWhom:
      "Quien se acuesta y no apaga. El que ronca y nadie midió. La somnolencia que el café ya no cubre. El insomnio que ya tiene apellido y no tiene plan.",
    duration: "50 min · estudio 8 h",
    priceFrom: 58_000,
    image: "/images/sueno.jpg",
    alt: "Habitación de estudio de sueño NOCTUA: cama de lino, lámpara baja y los Andes al fondo",
    lead: "La noche no se consulta de día. Vicente lee lo que el cuerpo hace cuando nadie lo mira.",
    body: "Insomnio, apnea, piernas inquietas, el turno que desordenó el reloj. La primera hora es una conversación de cincuenta minutos: historia, escalas, hipótesis. Si hace falta polisomnografía, se duerme aquí — no en un sótano de otro recinto. El informe vuelve a esta sala. No vendemos un aparato de entrada. Nombramos primero.",
    includes: [
      "Consulta de sueño de 50 minutos",
      "Polisomnografía en esta casa, una noche",
      "Titulación de CPAP cuando corresponde",
      "Insomnio con plan, no con un sobre de pastillas",
      "Informe para el internista o el cardiólogo de esta casa",
    ],
    when: [
      "Se acuesta y el día no se apaga",
      "Le dijeron que ronca y nadie midió",
      "El café ya no cubre la somnolencia",
    ],
    doctorSlug: "vicente-araya",
    star: { x: 160, y: 52 },
  },
  {
    slug: "cardiologia",
    n: "03",
    room: "Sala 03",
    title: "Cardiología",
    forWhom:
      "Las palpitaciones que llegan a las once. La presión que no baja. El control después del infarto. El certificado que pidió otra cirugía.",
    duration: "40 min",
    priceFrom: 64_000,
    image: "/images/still.jpg",
    alt: "Tira de electrocardiograma bajo luz ámbar sobre piedra oscura",
    lead: "Francisca no consulta el pecho por WhatsApp. La primera hora incluye ECG en la misma sala.",
    body: "El corazón también tiene una noche: arritmias que de día no aparecen, la presión que sube cuando Santiago duerme. Prevención, insuficiencia, el control después del infarto. Si hace falta eco, Holter o MAPA, se agenda en esta casa. Un pecho que aprieta ahora se atiende en urgencia — no en esta sala, y se lo decimos en la web y en el teléfono.",
    includes: [
      "Prevención cardiovascular y control de factores",
      "ECG de doce derivaciones en la misma hora",
      "Ecocardiograma, Holter y MAPA en esta casa",
      "Seguimiento post infarto o angioplastia",
      "Evaluación preoperatoria cardiológica",
    ],
    when: [
      "Hay palpitaciones, disnea o presión que no baja",
      "Le dijeron que el corazón está bien y no le mostraron nada",
      "Le pidieron un certificado para una cirugía",
    ],
    doctorSlug: "francisca-leon",
    star: { x: 234, y: 118 },
  },
  {
    slug: "neurologia",
    n: "04",
    room: "Sala 04",
    title: "Neurología",
    forWhom:
      "La cefalea que llega a las seis. El temblor que alguien llamó estrés. El mareo que no es del oído. La duda que un scanner no cerró.",
    duration: "40 min",
    priceFrom: 62_000,
    image: "/images/ventana.jpg",
    alt: "Ventana de NOCTUA hacia Santiago y los Andes, de noche",
    lead: "Martín nombra la señal. Si es imagen, se hace aquí. Si es urgencia, se dice.",
    body: "Migraña, cefalea tensional, el aura que asusta. Epilepsia que ya tiene nombre y pide seguimiento de noche. El temblor, la neuropatía, el mareo que no cierra en otorrino. La resonancia, cuando corresponde, se coordina en esta casa — no con un papel y un «pida usted». Un déficit brusco, una cara que cae, un lenguaje que se pierde: eso es SAMU 131.",
    includes: [
      "Migraña y cefalea con plan, no con un AINE suelto",
      "Epilepsia y seguimiento de tratamiento",
      "Temblor, neuropatía y mareo de origen central",
      "Lectura de imágenes con usted, no por correo",
      "Derivación a sueño cuando el síntoma duerme mal",
    ],
    when: [
      "La cefalea ya no responde a lo de siempre",
      "Hay un temblor, un mareo o una duda de imagen",
      "Quiere un neurólogo que no mire el reloj a los doce minutos",
    ],
    doctorSlug: "martin-urrutia",
    star: { x: 160, y: 148 },
  },
  {
    slug: "salud-mental",
    n: "05",
    room: "Sala 05",
    title: "Salud mental",
    forWhom:
      "La cabeza que no apaga a las once. La ansiedad que el día disfraza. El ánimo que bajó y nadie le puso tiempo. El insomnio que ya no es solo sueño.",
    duration: "50 min",
    priceFrom: 52_000,
    image: "/images/espera.jpg",
    alt: "Pabellón de espera NOCTUA: sillas de lino oscuro, lámpara ámbar y jardín de noche",
    lead: "Isidora reserva cincuenta minutos. No es un recetario. Tampoco es urgencia psiquiátrica.",
    body: "La noche destapa lo que el escritorio sostiene: ansiedad, insomnio, el ánimo que se fue apagando. Primera hora de cincuenta minutos, el mismo médico de principio a fin. Coordinamos con sueño y con interna cuando el caso lo pide — la ficha es una. Un riesgo suicida, una crisis psicótica, un menor en descompensación: eso no se atiende aquí. Se deriva, y se llama al 131 si hace falta.",
    includes: [
      "Consulta de 50 minutos, sin recorte",
      "Insomnio, ansiedad y ánimo — mapa, no etiqueta suelta",
      "Ajuste de tratamiento con seguimiento",
      "Coordinación con medicina del sueño",
      "Informe para el internista de esta casa, si lo pide",
    ],
    when: [
      "La cabeza no apaga cuando el día termina",
      "El ánimo cambió y quiere tiempo, no una receta de pasillo",
      "El insomnio ya no se arregla con higiene de sueño",
    ],
    doctorSlug: "isidora-paredes",
    star: { x: 78, y: 212 },
  },
  {
    slug: "ginecologia",
    n: "06",
    room: "Sala 06",
    title: "Ginecología",
    forWhom:
      "El PAP pendiente. El ciclo que cambió. La menopausia de la que nadie habla con tiempo. El control que no cabe a las ocho de la mañana.",
    duration: "40 min",
    priceFrom: 54_000,
    image: "/images/mesa.jpg",
    alt: "Mesa de consulta: cuaderno de lino, pluma y vaso de agua bajo lámpara ámbar",
    lead: "Camila reserva el tiempo del examen y el de lo que lo rodea. El PAP cabe. La conversación también.",
    body: "Hay consultas de ginecología que duran lo que dura un PAP. En esta sala el examen cabe, y cabe lo que lo rodea: el ciclo, el deseo, la anticoncepción, el sangrado, la menopausia. Ecografía ginecológica en casa cuando corresponde. Abrimos a las 16:00 porque esa hora también es de quien trabaja. Si hay que derivar a oncología o a medicina reproductiva, se hace con nombre.",
    includes: [
      "Control ginecológico, PAP y VPH",
      "Anticoncepción y consejería",
      "Sangrado, miomas y endometriosis",
      "Climaterio y menopausia",
      "Ecografía ginecológica en esta casa",
    ],
    when: [
      "Lleva años sin un control y no puede pedir la mañana",
      "Hay dolor, sangrado o un PAP pendiente",
      "Quiere hablar de menopausia con alguien que escuche",
    ],
    doctorSlug: "camila-fuentes",
    star: { x: 242, y: 212 },
  },
  {
    slug: "imagenologia",
    n: "07",
    room: "Sala de imagen",
    title: "Imagenología",
    forWhom:
      "La eco que no quiere viajar a otro edificio. La resonancia que de día tiene lista de espera. El informe que debe volver a la sala que lo pidió.",
    duration: "15–45 min",
    priceFrom: 48_000,
    image: "/images/imagen.jpg",
    alt: "Sala de resonancia NOCTUA de noche, luces ámbar y una rendija de luna",
    lead: "Andrés opera cuando la ciudad baja el ruido. La máquina oye mejor. El informe vuelve esa noche.",
    body: "Ecografía, radiografía, resonancia. No es un sótano de otro recinto: es esta casa, después de las 16:00, cuando el pasillo está en silencio. El informe no viaja una semana. Vuelve al médico que lo pidió. Si el estudio pide contraste o un pabellón que no cabe aquí, se deriva — no se improvisa.",
    includes: [
      "Ecografía abdominal, tiroidea y ginecológica",
      "Radiografía digital, informe el mismo día",
      "Resonancia coordinada en horario nocturno",
      "Lectura con el médico tratante de esta casa",
      "Portal de resultados al despertar, o antes",
    ],
    when: [
      "Le pidieron una eco y no quiere otro edificio",
      "La lista de espera de día no le cabe",
      "Quiere que el informe vuelva a quien lo pidió",
    ],
    doctorSlug: "andres-valdivia",
    star: { x: 118, y: 268 },
  },
  {
    slug: "laboratorio",
    n: "08",
    room: "Laboratorio",
    title: "Laboratorio",
    forWhom:
      "El perfil que no quiere otra fila a las siete de la mañana. El control de la tiroides. El resultado que el internista de esta casa va a leer.",
    duration: "10–20 min",
    priceFrom: 14_000,
    image: "/images/lab.jpg",
    alt: "Laboratorio NOCTUA: microscopio, gradilla de vidrio y lámpara ámbar",
    lead: "Paula extrae de noche y el sábado de ayuno. El número vuelve a la ficha, no a un PDF suelto.",
    body: "Hemograma, perfil, HbA1c, tiroides, vitamina D. Toma de muestra de lunes a viernes desde las 16:00 — con indicación de ayuno vespertino cuando corresponde — y el sábado de 09:00 a 11:30 para quien necesita la ventana clásica. El resultado entra al portal y a la sala que lo pidió. No somos un laboratorio de mall: si el examen no se procesa aquí, se dice.",
    includes: [
      "Toma de muestra lun–vie desde 16:00",
      "Ayuno de sábado 09:00 a 11:30",
      "Hemograma, perfil, HbA1c, tiroides",
      "Resultado en portal, la mayoría el mismo día",
      "La cifra entra a la ficha de esta casa",
    ],
    when: [
      "Le pidieron un perfil y no puede madrugar",
      "Quiere que el internista lea el número, no un PDF",
      "Necesita un control de tiroides o de azúcar",
    ],
    doctorSlug: "paula-henriquez",
    star: { x: 202, y: 268 },
  },
];

export const method = [
  {
    n: "01",
    title: "Llegar",
    text: "La casa abre a las 16:00. Se espera sin televisor. Piedra, un banco, el tiempo de quitarse el abrigo. El cupo es de una persona, no de una lista.",
  },
  {
    n: "02",
    title: "Escuchar",
    text: "Cuarenta minutos. Cincuenta en sueño y en salud mental. No partimos con la receta. Partimos con la pregunta. De día el síntoma se disfraza. De noche, se nombra.",
  },
  {
    n: "03",
    title: "Ver",
    text: "ECG, eco, laboratorio, resonancia: en esta casa, esa misma noche cuando cabe. El informe no viaja una semana. Vuelve a la sala que lo pidió.",
  },
  {
    n: "04",
    title: "Nombrar",
    text: "Una hipótesis. Un plan. Qué se hace aquí y qué no. Por escrito. Esa noche. Si el caso es de urgencia, se dice — no se retiene.",
  },
] as const;

export const team: Person[] = [
  {
    slug: "elisa-moreno",
    name: "Elisa Moreno",
    credential: "Internista · Universidad de Chile",
    extra: "Directora médica. Medicina interna y polifarmacia",
    focus: "Medicina interna",
    line: "El mapa entero, no un órgano suelto.",
    specialtySlug: "medicina-interna",
    image: "/images/consulta.jpg",
  },
  {
    slug: "vicente-araya",
    name: "Vicente Araya",
    credential: "Broncopulmonar · Pontificia Universidad Católica",
    extra: "Medicina del sueño y polisomnografía",
    focus: "Sueño",
    line: "La noche no se consulta de día.",
    specialtySlug: "medicina-del-sueno",
    image: "/images/sueno.jpg",
  },
  {
    slug: "francisca-leon",
    name: "Francisca León",
    credential: "Cardióloga · Universidad de Chile",
    extra: "Arritmia, prevención y estudio no invasivo",
    focus: "Cardiología",
    line: "El corazón también tiene una noche.",
    specialtySlug: "cardiologia",
    image: "/images/still.jpg",
  },
  {
    slug: "martin-urrutia",
    name: "Martín Urrutia",
    credential: "Neurólogo · Universidad de los Andes",
    extra: "Cefalea, epilepsia y neurofisiología",
    focus: "Neurología",
    line: "La señal se lee. No se adivina.",
    specialtySlug: "neurologia",
    image: "/images/ventana.jpg",
  },
  {
    slug: "isidora-paredes",
    name: "Isidora Paredes",
    credential: "Psiquiatra · Universidad de Chile",
    extra: "Insomnio, ansiedad y ánimo del adulto",
    focus: "Salud mental",
    line: "Lo que no duerme también se nombra.",
    specialtySlug: "salud-mental",
    image: "/images/espera.jpg",
  },
  {
    slug: "camila-fuentes",
    name: "Camila Fuentes",
    credential: "Ginecóloga · Universidad de Chile",
    extra: "Climaterio, ciclo y ecografía ginecológica",
    focus: "Ginecología",
    line: "El examen cabe. La conversación también.",
    specialtySlug: "ginecologia",
    image: "/images/mesa.jpg",
  },
  {
    slug: "andres-valdivia",
    name: "Andrés Valdivia",
    credential: "Radiólogo · Pontificia Universidad Católica",
    extra: "Ecografía, resonancia y lectura conjunta",
    focus: "Imagen",
    line: "La máquina oye mejor cuando la ciudad calla.",
    specialtySlug: "imagenologia",
    image: "/images/imagen.jpg",
  },
  {
    slug: "paula-henriquez",
    name: "Paula Henríquez",
    credential: "Química farmacéutica · Universidad de Chile",
    extra: "Laboratorio clínico y portal de resultados",
    focus: "Laboratorio",
    line: "La cifra vuelve a la ficha, no a un PDF suelto.",
    specialtySlug: "laboratorio",
    image: "/images/lab.jpg",
  },
];

export const prices = [
  {
    name: "Medicina interna",
    detail: "40 min · plan escrito esa noche",
    amount: 48_000,
  },
  {
    name: "Medicina del sueño",
    detail: "50 min · consulta",
    amount: 58_000,
  },
  {
    name: "Polisomnografía",
    detail: "Una noche en esta casa",
    amount: 320_000,
  },
  {
    name: "Cardiología",
    detail: "40 min · ECG incluido",
    amount: 64_000,
  },
  {
    name: "Neurología",
    detail: "40 min",
    amount: 62_000,
  },
  {
    name: "Salud mental",
    detail: "50 min",
    amount: 52_000,
  },
  {
    name: "Ginecología",
    detail: "40 min",
    amount: 54_000,
  },
  {
    name: "Ecografía",
    detail: "Informe el mismo día",
    amount: 48_000,
  },
  {
    name: "ECG 12 derivaciones",
    detail: "Informe en la misma hora",
    amount: 22_000,
  },
] as const;

export const labPrices = [
  { name: "Hemograma y VHS", time: "Mismo día", amount: 14_000 },
  { name: "Perfil bioquímico", time: "Mismo día", amount: 22_000 },
  { name: "Perfil lipídico", time: "Mismo día", amount: 16_000 },
  { name: "HbA1c", time: "Mismo día", amount: 18_000 },
  { name: "TSH y T4 libre", time: "Mismo día", amount: 24_000 },
  { name: "Orina completa", time: "Mismo día", amount: 8_000 },
  { name: "PCR", time: "Mismo día", amount: 12_000 },
  { name: "Vitamina D", time: "24–48 h", amount: 28_000 },
] as const;

export const faqs = [
  {
    q: "¿Por qué abren a las 16:00?",
    a: "Porque la consulta de quien trabaja no cabe a las ocho de la mañana. NOCTUA está pensado para después del sol: último cupo 22:00, lunes a viernes. El sábado es 09:00 a 14:00 — ayuno de laboratorio hasta las 11:30, consultas hasta las 14:00.",
  },
  {
    q: "¿Son un servicio de urgencia?",
    a: "No. Somos un centro médico de precisión con horario nocturno. Atendemos consulta, laboratorio e imagen. Un pecho que aprieta, una cara que cae, una disnea grave o un trauma se atienden en un servicio de urgencia. SAMU 131. En /urgencia está el mapa de qué sí y qué no.",
  },
  {
    q: "¿Atienden ISAPRE y FONASA?",
    a: "Bono electrónico. Boleta reembolsable el mismo día. Particular, ISAPRE (Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres y otras) y FONASA. El porcentaje lo define tu plan: te orientamos con el código y el tope, no prometemos un número que no controlamos.",
  },
  {
    q: "¿El laboratorio pide ayuno de madrugada?",
    a: "El sábado, sí: 09:00 a 11:30. De lunes a viernes tomamos muestra desde las 16:00, con indicación de ayuno vespertino cuando el examen lo permite. Si el análisis exige la ventana clásica de la mañana, lo decimos al agendar — no te hacemos venir de noche para un número que no sirve.",
  },
  {
    q: "¿Cuánto cuesta la primera consulta?",
    a: "Medicina interna, $48.000 · 40 minutos. Sueño, $58.000 · 50 minutos. Cardiología, $64.000, con ECG en la misma hora. Los valores son referenciales «desde» y se confirman al agendar. Teléfono: +56 2 3288 4050.",
  },
  {
    q: "¿Cómo cancelo o reprogramo?",
    a: "Por WhatsApp o al +56 2 3288 4050, con 24 horas de anticipación. Menos que eso, se cobra la hora: el cupo es de una persona, no de una lista. Responden de la casa, no un call center.",
  },
] as const;

export const convenios = [
  "Bono electrónico",
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
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
] as const;

export const yesNight = [
  {
    title: "Consulta que cabe después del trabajo",
    text: "Interna, sueño, cardio, neuro, gine, salud mental. El cupo de las 22:00 existe porque el día no te soltó.",
  },
  {
    title: "Fiebre, dolor, el síntoma que ya conoces",
    text: "Una faringitis a las nueve. Un esguince que no es fractura. La migraña de siempre. Se evalúa. Se nombra. Se trata.",
  },
  {
    title: "Examen e informe en esta casa",
    text: "Laboratorio, ECG, eco, resonancia. El número vuelve a la ficha. No a otro edificio la semana siguiente.",
  },
  {
    title: "El insomnio, el ronquido, lo que no apaga",
    text: "Eso es el oficio de esta casa. Se duerme aquí si hace falta. No se manda un aparato de entrada.",
  },
] as const;

export const noNight = [
  {
    title: "Pecho que aprieta ahora",
    text: "Dolor torácico, disnea grave, sudoración fría. Servicio de urgencia. SAMU 131.",
  },
  {
    title: "Cara, habla, fuerza que se caen",
    text: "Un lado que no responde, un lenguaje que se pierde, un mareo con déficit. Eso no espera un cupo. 131.",
  },
  {
    title: "Trauma, sangrado, el hueso que se ve",
    text: "No somos pabellón ni trauma. Una caída grave, un corte que no cierra, se atiende en urgencia.",
  },
  {
    title: "Crisis psiquiátrica o riesgo suicida",
    text: "Se deriva. Se llama al 131 si hace falta. Esta sala no es una unidad de agudos.",
  },
] as const;

export const rooms = [
  { slug: "medicina-interna", x: 28, y: 40, w: 92, h: 70, label: "01 Interna" },
  { slug: "cardiologia", x: 128, y: 40, w: 92, h: 70, label: "03 Cardio" },
  { slug: "neurologia", x: 228, y: 40, w: 92, h: 70, label: "04 Neuro" },
  { slug: "ginecologia", x: 328, y: 40, w: 92, h: 70, label: "06 Gine" },
  { slug: "salud-mental", x: 28, y: 122, w: 92, h: 70, label: "05 Mental" },
  { slug: "laboratorio", x: 128, y: 122, w: 92, h: 70, label: "08 Lab" },
  { slug: "imagenologia", x: 228, y: 122, w: 92, h: 70, label: "07 Imagen" },
  { slug: "medicina-del-sueno", x: 328, y: 122, w: 92, h: 70, label: "02 Sueño" },
] as const;

export const constellationLinks: Array<[string, string]> = [
  ["medicina-del-sueno", "medicina-interna"],
  ["medicina-del-sueno", "cardiologia"],
  ["medicina-interna", "neurologia"],
  ["cardiologia", "neurologia"],
  ["medicina-interna", "salud-mental"],
  ["cardiologia", "ginecologia"],
  ["salud-mental", "imagenologia"],
  ["ginecologia", "laboratorio"],
  ["imagenologia", "laboratorio"],
  ["neurologia", "imagenologia"],
  ["neurologia", "laboratorio"],
];
