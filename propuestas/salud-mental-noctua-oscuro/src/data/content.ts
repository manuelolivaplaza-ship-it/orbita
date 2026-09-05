export type Area = {
  slug: string;
  n: string;
  title: string;
  thought: string;
  forWhom: string;
  duration: string;
  priceFrom: number;
  image: string;
  alt: string;
  lead: string;
  body: string;
  includes: string[];
  star: { x: number; y: number };
};

export type Person = {
  slug: string;
  name: string;
  credential: string;
  extra: string;
  focus: string;
  areas: readonly string[];
  line: string;
  image: string;
  bio: string;
};

export const stats = [
  { value: 16, prefix: "", suffix: ":00", label: "Apertura, lun a vie" },
  { value: 22, prefix: "", suffix: ":00", label: "Último cupo" },
  { value: 50, prefix: "", suffix: "", label: "Minutos. Ni 45 recortados." },
  { value: 6, prefix: "", suffix: "", label: "Personas, sin rotación", pad: 2 },
] as const;

export const promises = [
  "Último cupo 22:00",
  "Cincuenta minutos reales",
  "La misma persona de principio a fin",
  "Boleta reembolsable",
] as const;

export const areas: Area[] = [
  {
    slug: "ansiedad",
    n: "01",
    title: "Ansiedad y pánico",
    thought: "El pecho no abre.",
    forWhom:
      "El pecho que no abre, la lista que no termina, el ataque que llega en la micro o a las tres de la mañana.",
    duration: "50 min",
    priceFrom: 48_000,
    image: "/images/lamp.jpg",
    alt: "Lámpara ámbar encendida sobre mesa de roble en una sala oscura",
    lead: "No es falta de voluntad. Es un sistema de alarma que se quedó encendido.",
    body: "De día el pánico se disfraza de productividad. De noche, si alguien sabe mirar, se nombra. Trabajamos el cuerpo y el pensamiento juntos: lo que pasa en el pecho, lo que la cabeza anticipa, lo que se evita. No hay frases de calma genéricas. Hay un mapa de tus alarmas y un plan para apagarlas sin apagarte.",
    includes: [
      "Evaluación del patrón de alarma",
      "Herramientas para el momento del ataque",
      "Trabajo entre sesiones, no tarea escolar",
      "Derivación a psiquiatría si el cuerpo lo pide",
    ],
    star: { x: 112, y: 96 },
  },
  {
    slug: "animo",
    n: "02",
    title: "Ánimo y depresión",
    thought: "El día no arranca.",
    forWhom:
      "El día que se hace largo. La cama que no suelta. Lo que se llama flojera y no lo es.",
    duration: "50 min",
    priceFrom: 48_000,
    image: "/images/ventana.jpg",
    alt: "Ventana alta hacia Santiago de noche, cortina oscura y un filo de luz ámbar",
    lead: "No te vamos a pedir que te levantes con una frase. Vamos a nombrar lo que pesa.",
    body: "Depresión, distimia, el bajón que ya no es coyuntural. Coordinamos con psiquiatría cuando hay indicación de fármaco — no como atajo, como parte del mismo plan. El alta no es ‘ya sonreíste’. El ritmo de las sesiones se acomoda a la energía real, no a un calendario de pack.",
    includes: [
      "Lectura clínica, no coaching",
      "Ritmo de sesiones según energía real",
      "Trabajo con sueño, apetito y aislamiento",
      "Psiquiatría en la misma casa, si hace falta",
    ],
    star: { x: 208, y: 96 },
  },
  {
    slug: "duelo",
    n: "03",
    title: "Duelo y pérdida",
    thought: "Lo que falta no se va.",
    forWhom:
      "Una muerte, una separación, un cuerpo que cambió, un país que se fue.",
    duration: "50 min",
    priceFrom: 48_000,
    image: "/images/object.jpg",
    alt: "Cuaderno oscuro, lápiz y frasco ámbar bajo una sola luz",
    lead: "El duelo no se cierra. Se aprende a habitar con lo que falta.",
    body: "Pérdidas que el entorno ya no nombra. Duelos no autorizados, abortos, migraciones, el padre que se fue sin irse. Aquí hay tiempo. No hay etapas de afiche. La noche, a menudo, es cuando el muerto vuelve a la casa: esa hora también se trabaja.",
    includes: [
      "Espacio para lo que no se dice afuera",
      "Rituales posibles, no recetas",
      "Trabajo con el cuerpo del duelo",
      "Acompañamiento el tiempo que tome",
    ],
    star: { x: 160, y: 138 },
  },
  {
    slug: "trauma",
    n: "04",
    title: "Trauma",
    thought: "El cuerpo recuerda.",
    forWhom:
      "Lo que el cuerpo recuerda aunque la cabeza ya no quiera.",
    duration: "50 min",
    priceFrom: 54_000,
    image: "/images/still.jpg",
    alt: "Cuaderno abierto y lápiz de grafito sobre piedra oscura",
    lead: "No se trata de revivir. Se trata de que el presente deje de ser el pasado.",
    body: "Trauma simple y complejo. EMDR cuando corresponde, trabajo somático cuando el relato no alcanza. Nunca se fuerza una escena. Si el caso necesita otro nivel de cuidado, lo decimos en la primera hora. El cupo de las 22:00 existe también para esto: hay recuerdos que solo aparecen cuando la ciudad se apaga.",
    includes: [
      "Evaluación de seguridad antes de intervenir",
      "EMDR y abordaje somático, según caso",
      "Ritmo del paciente, no del protocolo",
      "Red de derivación si hace falta internación",
    ],
    star: { x: 160, y: 48 },
  },
  {
    slug: "pareja",
    n: "05",
    title: "Pareja y vínculo",
    thought: "Ya no se oyen.",
    forWhom:
      "Dos que ya no se escuchan. O uno que quiere y otro que duda.",
    duration: "60 min",
    priceFrom: 64_000,
    image: "/images/dialogo.jpg",
    alt: "Dos sillones de lino marfil frente a frente en una sala nocturna",
    lead: "No venimos a decidir si se quedan. Venimos a que se oigan sin lastimarse.",
    body: "Terapia de pareja y de vínculo. Sesenta minutos. La misma terapeuta. Si hay violencia, se nombra y se detiene el formato de pareja: no se ‘trabaja el conflicto’ encima de un golpe. Los cupos de pareja son de 18:00 a 22:00: después del trabajo, no en vez del trabajo.",
    includes: [
      "Sesión de 60 minutos",
      "Marco claro de respeto en la sala",
      "Trabajo con el patrón, no con la última pelea",
      "Individuales puntuales si el caso lo pide",
    ],
    star: { x: 128, y: 208 },
  },
  {
    slug: "infanto",
    n: "06",
    title: "Infanto-juvenil",
    thought: "El niño avisa.",
    forWhom:
      "Niños y adolescentes. Y los padres que ya no saben cómo entrar.",
    duration: "50 min",
    priceFrom: 50_000,
    image: "/images/jardin.jpg",
    alt: "Jardín nocturno visto desde el interior, a través del vidrio",
    lead: "El niño no es el problema. Es el que está avisando.",
    body: "Juego, palabra, colegio, casa. Trabajamos con la familia sin convertir la sesión en un tribunal. Adolescentes: un espacio que no es de los padres y no es de Instagram. Los cupos infanto son de 16:00 a 19:00 y el sábado. Si hay riesgo, se actúa — no se espera el lunes.",
    includes: [
      "Primera hora con los cuidadores",
      "Sesiones con el niño o adolescente",
      "Devolución clara a la familia",
      "Coordinación con colegio, si ustedes lo piden",
    ],
    star: { x: 192, y: 208 },
  },
  {
    slug: "sueno",
    n: "07",
    title: "Sueño y rumiación",
    thought: "Las tres de la mañana.",
    forWhom:
      "Las tres de la mañana. El café que ya no hace nada. El burnout que se disfraza de productividad.",
    duration: "50 min",
    priceFrom: 48_000,
    image: "/images/hero.jpg",
    alt: "Sala de consulta nocturna: un sillón de lino, una lámpara, Santiago al otro lado",
    lead: "Dormir no es un premio. Es la base. Si no está, el resto se desarma.",
    body: "Insomnio, hipersomnia, la rumiación que no apaga. Higiene de sueño sin moralina. El pensamiento de las tres no se trata de día: se nombra a la hora en que ocurre, o se mapea para que deje de mandar. Si hay indicación farmacológica, la psiquiatra de la casa entra al plan.",
    includes: [
      "Mapa de sueño de quince días",
      "Trabajo con rumiación nocturna",
      "Límites laborales nombrados, no sermoneados",
      "Psiquiatría si el insomnio ya es clínico",
    ],
    star: { x: 52, y: 164 },
  },
  {
    slug: "psiquiatria",
    n: "08",
    title: "Psiquiatría",
    thought: "Cuando el fármaco cabe.",
    forWhom:
      "Cuando el fármaco cabe — y cuando hay que decir que no cabe.",
    duration: "45–50 min",
    priceFrom: 64_000,
    image: "/images/mesa.jpg",
    alt: "Taza de té y una hoja sobre mesa de roble oscuro",
    lead: "Recetar es fácil. Indicar con criterio, y acompañar, es el oficio.",
    body: "Primera evaluación psiquiátrica y controles. Trabaja en la misma casa que el equipo de psicología: no hay dos fichas, no hay dos versiones. Si el fármaco no suma, se baja. Si suma, se explica en cristiano. Los controles caben después de las 18:00.",
    includes: [
      "Primera evaluación de 50 minutos",
      "Controles de 45 minutos",
      "Coordinación con tu terapeuta NOCTUA",
      "Informe para ISAPRE, si lo pides",
    ],
    star: { x: 268, y: 164 },
  },
];

export const constellationLinks: Array<[string, string]> = [
  ["trauma", "ansiedad"],
  ["trauma", "animo"],
  ["ansiedad", "duelo"],
  ["animo", "duelo"],
  ["duelo", "pareja"],
  ["duelo", "infanto"],
  ["pareja", "infanto"],
  ["sueno", "ansiedad"],
  ["sueno", "pareja"],
  ["psiquiatria", "animo"],
  ["psiquiatria", "infanto"],
];

export const prices = [
  {
    name: "Primera hora psicológica",
    detail: "50 min · emparejamiento e hipótesis",
    amount: 54_000,
  },
  {
    name: "Sesión individual",
    detail: "50 min · mismo terapeuta",
    amount: 48_000,
  },
  {
    name: "Sesión infanto-juvenil",
    detail: "50 min · 16:00 a 19:00 o sábado",
    amount: 50_000,
  },
  {
    name: "Sesión de pareja",
    detail: "60 min",
    amount: 64_000,
  },
  {
    name: "Psiquiatría · primera",
    detail: "50 min · evaluación",
    amount: 78_000,
  },
  {
    name: "Psiquiatría · control",
    detail: "45 min",
    amount: 64_000,
  },
  {
    name: "Pack 4 sesiones",
    detail: "Tras la primera hora · mismo terapeuta",
    amount: 184_000,
  },
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

export const method = [
  {
    n: "01",
    title: "Escribes",
    text: "Un formulario corto. No una ficha de urgencia. Dices qué pesa, cuándo puedes — de día no, de noche sí —, si prefieres presencial u online. Nadie te llama para venderte un pack.",
  },
  {
    n: "02",
    title: "Emparejamos",
    text: "Leemos. No te asignamos al que tenga hueco. Te proponemos una persona — y te decimos por qué. Si no calza, se cambia. Sin costo y sin drama.",
  },
  {
    n: "03",
    title: "La primera hora",
    text: "Cincuenta minutos. Historia, cuerpo, sueño, red. Sales con una hipótesis y un ritmo. No con un diagnóstico de pasillo ni con veinte sesiones por adelantado.",
  },
  {
    n: "04",
    title: "El trabajo",
    text: "La misma persona. Revisión cada cierto tramo. Si no está resultando, se nombra. Si hace falta psiquiatría, está en la casa. Si hace falta derivar, se deriva.",
  },
] as const;

export const team: Person[] = [
  {
    slug: "catalina-errazuriz",
    name: "Catalina Errázuriz",
    credential: "Psiquiatra · Universidad de Chile",
    extra: "Directora clínica · adulto",
    focus: "Psiquiatría",
    areas: ["psiquiatria", "animo", "ansiedad"],
    line: "Recetar es fácil. Indicar con criterio es el oficio.",
    image: "/images/catalina.jpg",
    bio: "Dirige la casa. Ve adultos. Coordina cada caso que cruza fármaco y palabra para que no haya dos versiones de la misma persona. Formada en la Universidad de Chile, con rotación en hospital público y consulta privada desde 2012. Atiende de 17:00 a 22:00.",
  },
  {
    slug: "tomas-vidal",
    name: "Tomás Vidal",
    credential: "Psicólogo clínico · UDP",
    extra: "Ansiedad, pánico, agotamiento",
    focus: "Ansiedad",
    areas: ["ansiedad", "sueno"],
    line: "El pecho que no abre no se arregla con una app.",
    image: "/images/tomas.jpg",
    bio: "Trabaja con ansiedad, pánico y el agotamiento de quien rinde. Terapia cognitivo-conductual y trabajo con el cuerpo de la alarma. Atiende presencial y online, de 16:00 a 22:00. Universidad Diego Portales, magíster en psicología clínica.",
  },
  {
    slug: "magdalena-rojas",
    name: "Magdalena Rojas",
    credential: "Psicóloga clínica · Universidad de Chile",
    extra: "Duelo, trauma, EMDR",
    focus: "Trauma",
    areas: ["duelo", "trauma"],
    line: "El duelo no se cierra. Se aprende a habitar.",
    image: "/images/magdalena.jpg",
    bio: "Duelo y trauma. EMDR certificado. No fuerza escenas. El ritmo lo pone quien llega, no el protocolo. Universidad de Chile. Trabaja con adultos y con duelos que el entorno ya no nombra. Cupos hasta las 21:00.",
  },
  {
    slug: "ignacio-pena",
    name: "Ignacio Peña",
    credential: "Psicólogo clínico · Pontificia Universidad Católica",
    extra: "Ánimo, depresión, sueño",
    focus: "Ánimo",
    areas: ["animo", "sueno"],
    line: "No te vamos a pedir que te levantes con una frase.",
    image: "/images/ignacio.jpg",
    bio: "Ánimo, depresión y el insomnio que las acompaña. Trabaja en tándem con la psiquiatra de la casa cuando hay indicación de fármaco. PUC. Consulta lenta, precisa, sin coaching. Último cupo 22:00.",
  },
  {
    slug: "antonia-silva",
    name: "Antonia Silva",
    credential: "Psicóloga clínica · Universidad de Chile",
    extra: "Infanto-juvenil",
    focus: "Infanto-juvenil",
    areas: ["infanto"],
    line: "El niño no es el problema. Es el que está avisando.",
    image: "/images/antonia.jpg",
    bio: "Niños y adolescentes. Juego, palabra, colegio, casa. Primera hora con los cuidadores; después, un espacio que no es tribunal. Cupos de 16:00 a 19:00 y sábados. Si hay riesgo, actúa el mismo día. Universidad de Chile, formación infanto-juvenil.",
  },
  {
    slug: "josefina-araya",
    name: "Josefina Araya",
    credential: "Psicóloga clínica · Universidad de los Andes",
    extra: "Pareja, familia, vínculo",
    focus: "Pareja",
    areas: ["pareja"],
    line: "No venimos a decidir si se quedan. Venimos a que se oigan.",
    image: "/images/josefina.jpg",
    bio: "Pareja y familia. Sesenta minutos. Si hay violencia, se nombra y se detiene el formato. Universidad de los Andes, formación sistémica. Atiende también a quienes llegan solos a hablar de un vínculo que no cierra. Cupos de 18:00 a 22:00.",
  },
];

export const faqs = [
  {
    q: "¿Por qué abren de noche?",
    a: "Porque el pensamiento no cierra a las 18. Quien trabaja no puede perder la mañana en una sala de espera. Quien rumia a las tres necesita un cupo que exista después de las 20:00. Lun a vie, 16:00 a 23:00. Último cupo 22:00. Sábado, 10:00 a 14:00.",
  },
  {
    q: "¿Cuánto cuesta la primera hora?",
    a: "La primera hora psicológica dura 50 minutos y vale $54.000. Incluye emparejamiento, hipótesis y un ritmo tentativo. El valor de las sesiones siguientes se confirma ese día. Psiquiatría primera: $78.000. Teléfono: +56 2 3288 4770.",
  },
  {
    q: "¿Atienden ISAPRE y FONASA?",
    a: "Emitimos boleta reembolsable el mismo día. Particular e ISAPRE (Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres y otras). FONASA: te orientamos con el código; el porcentaje lo define tu plan, no lo prometemos. El reembolso lo gestiona tu ISAPRE, no nosotros.",
  },
  {
    q: "¿Presencial u online?",
    a: "Las dos. La casa está en Los Militares 4770, Las Condes, a ocho minutos de Metro Escuela Militar. Online por videollamada, mismo valor, mismo terapeuta. La primera hora preferimos presencial cuando se puede: el cuerpo habla distinto en la sala.",
  },
  {
    q: "¿Me asignan al que tenga hora?",
    a: "No. Leemos lo que escribes y te proponemos una persona — y te decimos por qué. Si no calza en las primeras dos sesiones, se cambia de terapeuta sin costo de emparejamiento. El hueco no manda.",
  },
  {
    q: "¿Cuánto dura un tratamiento?",
    a: "Lo decide el trabajo, no un pack. Algunos procesos cierran en meses; otros se quedan. Cada cierto tramo revisamos: qué cambió, qué no, si sigue teniendo sentido. No hay veinte sesiones por adelantado.",
  },
  {
    q: "¿Qué pasa si ahora es una crisis?",
    a: "Esta casa no es urgencia ni hospital. Si hay riesgo vital, llama a Salud Responde 600 360 7777 o al *4141 (prevención del suicidio). Si estás en NOCTUA y aparece un riesgo, actuamos el mismo día: la ficha no espera al lunes.",
  },
  {
    q: "¿Cómo cancelo o cambio una hora?",
    a: "Por WhatsApp o al +56 2 3288 4770, con 24 horas de anticipación. Menos que eso, se cobra la sesión: el cupo es de una persona. Responde el equipo, no un call center. Si no contestamos, devolvemos el llamado el mismo día hábil.",
  },
  {
    q: "¿La ficha es confidencial?",
    a: "Sí. Secreto profesional. No se informa a empleadores, parejas ni colegios sin tu consentimiento, salvo las excepciones legales (riesgo vital, orden judicial). La ficha se conserva según la normativa sanitaria chilena.",
  },
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

export const rooms = [
  {
    src: "/images/hero.jpg",
    alt: "Sala NOCTUA de noche: un sillón de lino, una lámpara, Santiago al otro lado",
    caption: "Sala — un sillón, la ciudad",
  },
  {
    src: "/images/dialogo.jpg",
    alt: "Dos sillones de lino frente a frente en penumbra ámbar",
    caption: "Diálogo — cincuenta minutos",
  },
  {
    src: "/images/espera.jpg",
    alt: "Sala de espera nocturna con lámpara y jardín al otro lado del vidrio",
    caption: "Espera — sin revistas de 2014",
  },
  {
    src: "/images/corridor.jpg",
    alt: "Pasillo de piedra volcánica con apliques ámbar",
    caption: "Pasillo — piedra, no letreros",
  },
  {
    src: "/images/jardin.jpg",
    alt: "Jardín nocturno visto desde el interior",
    caption: "Jardín — el vidrio, el follaje",
  },
  {
    src: "/images/fachada.jpg",
    alt: "Fachada de piedra volcánica al anochecer, una ventana ámbar",
    caption: "Los Militares 4770, Las Condes",
  },
] as const;

export const nightProtocol = [
  {
    n: "01",
    title: "Si es ahora y hay riesgo",
    text: "Esta casa no es urgencia. Salud Responde 600 360 7777. Prevención del suicidio: *4141. Servicio de urgencia más cercano. SAMU 131.",
  },
  {
    n: "02",
    title: "Si es las tres y no hay riesgo",
    text: "La rumiación no se discute a las tres. Se anota una línea — no diez — y se deja para la sesión. La lámpara baja. El teléfono fuera de la cama. Mañana escribimos.",
  },
  {
    n: "03",
    title: "Si es de día y no cabe un cupo diurno",
    text: "Ese es el oficio de esta casa. El último cupo es a las 22:00. Pedimos la primera hora. Emparejamos. No asignamos el hueco más cercano.",
  },
  {
    n: "04",
    title: "Si ya estás en NOCTUA",
    text: "WhatsApp de la casa. Responde alguien del equipo, no un bot. Si aparece un riesgo, actuamos el mismo día. La ficha no espera al lunes.",
  },
] as const;
