export const stats = [
  { value: 50, prefix: "", suffix: "", label: "Minutos. Ni 45 recortados." },
  { value: 48, prefix: "", suffix: " h", label: "Para la primera hora, o te lo decimos" },
  { value: 6, prefix: "", suffix: "", label: "Terapeutas, sin rotación", pad: 2 },
  { value: 8, prefix: "", suffix: "", label: "Años de la misma casa" },
] as const;

export const promises = [
  "Cincuenta minutos reales",
  "La misma persona de principio a fin",
  "Emparejamos, no asignamos hueco",
  "Boleta reembolsable",
] as const;

export const areas = [
  {
    slug: "ansiedad",
    n: "01",
    title: "Ansiedad y pánico",
    forWhom:
      "El pecho que no abre, la lista que no termina, el ataque que llega en la micro.",
    duration: "50 min",
    priceFrom: 42_000,
    image: "/images/dialogo.jpg",
    alt: "Dos sillones de lino frente a frente, mesa de roble y eucalipto",
    lead: "No es falta de voluntad. Es un sistema de alarma que se quedó encendido.",
    body: "Trabajamos el cuerpo y el pensamiento juntos: lo que pasa en el pecho, lo que la cabeza anticipa, lo que se evita. No hay frases de calma genéricas. Hay un mapa de tus alarmas y un plan para apagarlas sin apagarte.",
    includes: [
      "Evaluación del patrón de alarma",
      "Herramientas para el momento del ataque",
      "Trabajo entre sesiones, no tarea escolar",
      "Derivación a psiquiatría si el cuerpo lo pide",
    ],
  },
  {
    slug: "animo",
    n: "02",
    title: "Ánimo y depresión",
    forWhom:
      "El día que se hace largo. La cama que no suelta. Lo que se llama flojera y no lo es.",
    duration: "50 min",
    priceFrom: 42_000,
    image: "/images/luz.jpg",
    alt: "Luz norte atravesando cortinas de lino sobre el piso de roble",
    lead: "No te vamos a pedir que te levantes con una frase. Vamos a nombrar lo que pesa.",
    body: "Depresión, distimia, el bajón que ya no es coyuntural. Coordinamos con psiquiatría cuando hay indicación de fármaco — no como atajo, como parte del mismo plan. El alta no es ‘ya sonreíste’.",
    includes: [
      "Lectura clínica, no coaching",
      "Ritmo de sesiones según energía real",
      "Trabajo con sueño, apetito y aislamiento",
      "Psiquiatría en la misma casa, si hace falta",
    ],
  },
  {
    slug: "duelo",
    n: "03",
    title: "Duelo y pérdida",
    forWhom:
      "Una muerte, una separación, un cuerpo que cambió, un país que se fue.",
    duration: "50 min",
    priceFrom: 42_000,
    image: "/images/window.jpg",
    alt: "Ventana alta con eucalipto en taza de cerámica y cortina de lino",
    lead: "El duelo no se cierra. Se aprende a habitar con lo que falta.",
    body: "Pérdidas que el entorno ya no nombra. Duelos no autorizados, abortos, migraciones, el padre que se fue sin irse. Aquí hay tiempo. No hay etapas de afiche.",
    includes: [
      "Espacio para lo que no se dice afuera",
      "Rituales posibles, no recetas",
      "Trabajo con el cuerpo del duelo",
      "Acompañamiento el tiempo que tome",
    ],
  },
  {
    slug: "trauma",
    n: "04",
    title: "Trauma",
    forWhom:
      "Lo que el cuerpo recuerda aunque la cabeza ya no quiera.",
    duration: "50 min",
    priceFrom: 48_000,
    image: "/images/still.jpg",
    alt: "Cuaderno abierto, lápiz y taza de té sobre mesa de roble",
    lead: "No se trata de revivir. Se trata de que el presente deje de ser el pasado.",
    body: "Trauma simple y complejo. EMDR cuando corresponde, trabajo somático cuando el relato no alcanza. Nunca se fuerza una escena. Si el caso necesita otro nivel de cuidado, lo decimos en la primera hora.",
    includes: [
      "Evaluación de seguridad antes de intervenir",
      "EMDR y abordaje somático, según caso",
      "Ritmo del paciente, no del protocolo",
      "Red de derivación si hace falta internación",
    ],
  },
  {
    slug: "pareja",
    n: "05",
    title: "Pareja y vínculo",
    forWhom:
      "Dos que ya no se escuchan. O uno que quiere y otro que duda.",
    duration: "60 min",
    priceFrom: 58_000,
    image: "/images/dialogo.jpg",
    alt: "Sala de diálogo con dos sillones de lino y mesa baja de roble",
    lead: "No venimos a decidir si se quedan. Venimos a que se oigan sin lastimarse.",
    body: "Terapia de pareja y de vínculo. Sesenta minutos. La misma terapeuta. Si hay violencia, se nombra y se detiene el formato de pareja: no se ‘trabaja el conflicto’ encima de un golpe.",
    includes: [
      "Sesión de 60 minutos",
      "Marco claro de respeto en la sala",
      "Trabajo con el patrón, no con el último pelea",
      "Individuales puntuales si el caso lo pide",
    ],
  },
  {
    slug: "infanto",
    n: "06",
    title: "Infanto-juvenil",
    forWhom:
      "Niños y adolescentes. Y los padres que ya no saben cómo entrar.",
    duration: "50 min",
    priceFrom: 45_000,
    image: "/images/patio.jpg",
    alt: "Patio interior con un árbol, banco de madera y muro pálido",
    lead: "El niño no es el problema. Es el que está avisando.",
    body: "Juego, palabra, colegio, casa. Trabajamos con la familia sin convertir la sesión en un tribunal. Adolescentes: un espacio que no es de los padres y no es de Instagram. Si hay riesgo, se actúa — no se espera el lunes.",
    includes: [
      "Primera hora con los cuidadores",
      "Sesiones con el niño o adolescente",
      "Devolución clara a la familia",
      "Coordinación con colegio, si ustedes lo piden",
    ],
  },
  {
    slug: "sueno",
    n: "07",
    title: "Sueño y agotamiento",
    forWhom:
      "Las tres de la mañana. El café que ya no hace nada. El burnout que se disfraza de productividad.",
    duration: "50 min",
    priceFrom: 42_000,
    image: "/images/luz.jpg",
    alt: "Cortinas de lino y motas de polvo en un rayo de luz norte",
    lead: "Dormir no es un premio. Es la base. Si no está, el resto se desarma.",
    body: "Insomnio, hipersomnia, el agotamiento de quien rinde y se apaga. Higiene de sueño sin moralina. Si hay indicación farmacológica, la psiquiatra de la casa entra al plan.",
    includes: [
      "Mapa de sueño de quince días",
      "Trabajo con rumiación nocturna",
      "Límites laborales nombrados, no sermoneados",
      "Psiquiatría si el insomnio ya es clínico",
    ],
  },
  {
    slug: "psiquiatria",
    n: "08",
    title: "Psiquiatría",
    forWhom:
      "Cuando el fármaco cabe — y cuando hay que decir que no cabe.",
    duration: "45–50 min",
    priceFrom: 58_000,
    image: "/images/mesa.jpg",
    alt: "Cuenco de cerámica y una hoja de eucalipto sobre mesa de roble",
    lead: "Recetar es fácil. Indicar con criterio, y acompañar, es el oficio.",
    body: "Primera evaluación psiquiátrica y controles. Trabaja en la misma casa que el equipo de psicología: no hay dos fichas, no hay dos versiones. Si el fármaco no suma, se baja. Si suma, se explica en cristiano.",
    includes: [
      "Primera evaluación de 50 minutos",
      "Controles de 45 minutos",
      "Coordinación con tu terapeuta ETER",
      "Informe para ISAPRE, si lo pides",
    ],
  },
] as const;

export const prices = [
  {
    name: "Primera hora psicológica",
    detail: "50 min · emparejamiento e hipótesis",
    amount: 48_000,
  },
  {
    name: "Sesión individual",
    detail: "50 min · mismo terapeuta",
    amount: 42_000,
  },
  {
    name: "Sesión infanto-juvenil",
    detail: "50 min · con devolución a la familia",
    amount: 45_000,
  },
  {
    name: "Sesión de pareja",
    detail: "60 min",
    amount: 58_000,
  },
  {
    name: "Psiquiatría · primera",
    detail: "50 min · evaluación",
    amount: 72_000,
  },
  {
    name: "Psiquiatría · control",
    detail: "45 min",
    amount: 58_000,
  },
  {
    name: "Pack 4 sesiones",
    detail: "Tras la primera hora · mismo terapeuta",
    amount: 160_000,
  },
] as const;

export const method = [
  {
    n: "01",
    title: "Escribes",
    text: "Un formulario corto. No una ficha de urgencia. Dices qué pesa, cuándo puedes, si prefieres presencial u online. Nadie te llama para venderte un pack.",
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

export const team = [
  {
    slug: "isidora-valdes",
    name: "Isidora Valdés",
    credential: "Psiquiatra · Universidad de Chile",
    extra: "Directora clínica · adulto",
    focus: "Psiquiatría",
    areas: ["psiquiatria", "animo", "ansiedad"],
    line: "Recetar es fácil. Indicar con criterio es el oficio.",
    image: "/images/isidora.jpg",
    bio: "Dirige la casa. Ve adultos. Coordina cada caso que cruza fármaco y palabra para que no haya dos versiones de la misma persona. Formada en la Universidad de Chile, con rotación en hospital público y consulta privada desde 2014.",
  },
  {
    slug: "mateo-rivas",
    name: "Mateo Rivas",
    credential: "Psicólogo clínico · UDP",
    extra: "Ansiedad, pánico, agotamiento",
    focus: "Ansiedad",
    areas: ["ansiedad", "sueno"],
    line: "El pecho que no abre no se arregla con una app.",
    image: "/images/mateo.jpg",
    bio: "Trabaja con ansiedad, pánico y el agotamiento de quien rinde. Terapia cognitivo-conductual y trabajo con el cuerpo de la alarma. Atiende presencial y online. Universidad Diego Portales, magíster en psicología clínica.",
  },
  {
    slug: "amanda-sepulveda",
    name: "Amanda Sepúlveda",
    credential: "Psicóloga clínica · Universidad de Chile",
    extra: "Duelo, trauma, EMDR",
    focus: "Trauma",
    areas: ["duelo", "trauma"],
    line: "El duelo no se cierra. Se aprende a habitar.",
    image: "/images/amanda.jpg",
    bio: "Duelo y trauma. EMDR certificado. No fuerza escenas. El ritmo lo pone quien llega, no el protocolo. Universidad de Chile. Trabaja con adultos y con duelos que el entorno ya no nombra.",
  },
  {
    slug: "emilia-nunez",
    name: "Emilia Núñez",
    credential: "Psicóloga clínica · Pontificia Universidad Católica",
    extra: "Ánimo, depresión, sueño",
    focus: "Ánimo",
    areas: ["animo", "sueno"],
    line: "No te vamos a pedir que te levantes con una frase.",
    image: "/images/emilia.jpg",
    bio: "Ánimo, depresión y el insomnio que las acompaña. Trabaja en tándem con la psiquiatra de la casa cuando hay indicación de fármaco. PUC. Consulta lenta, precisa, sin coaching.",
  },
  {
    slug: "benjamin-soto",
    name: "Benjamín Soto",
    credential: "Psicólogo clínico · Universidad de Chile",
    extra: "Infanto-juvenil",
    focus: "Infanto-juvenil",
    areas: ["infanto"],
    line: "El niño no es el problema. Es el que está avisando.",
    image: "/images/benjamin.jpg",
    bio: "Niños y adolescentes. Juego, palabra, colegio, casa. Primera hora con los cuidadores; después, un espacio que no es tribunal. Si hay riesgo, actúa el mismo día. Universidad de Chile, formación infanto-juvenil.",
  },
  {
    slug: "francisca-lagos",
    name: "Francisca Lagos",
    credential: "Psicóloga clínica · Universidad de los Andes",
    extra: "Pareja, familia, vínculo",
    focus: "Pareja",
    areas: ["pareja"],
    line: "No venimos a decidir si se quedan. Venimos a que se oigan.",
    image: "/images/francisca.jpg",
    bio: "Pareja y familia. Sesenta minutos. Si hay violencia, se nombra y se detiene el formato. Universidad de los Andes, formación sistémica. Atiende también a quienes llegan solos a hablar de un vínculo que no cierra.",
  },
] as const;

export const faqs = [
  {
    q: "¿Cuánto cuesta la primera hora?",
    a: "La primera hora psicológica dura 50 minutos y vale $48.000. Incluye emparejamiento, hipótesis y un ritmo tentativo. El valor de las sesiones siguientes se confirma ese día. Psiquiatría primera: $72.000. Teléfono: +56 2 2840 4470.",
  },
  {
    q: "¿Atienden ISAPRE y FONASA?",
    a: "Emitimos boleta reembolsable el mismo día. Particular e ISAPRE (Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres y otras). FONASA: te orientamos con el código; el porcentaje lo define tu plan, no lo prometemos. El reembolso lo gestiona tu ISAPRE, no nosotros.",
  },
  {
    q: "¿Presencial u online?",
    a: "Las dos. La casa está en Antonio Varas 2650, Providencia, a seis minutos de Metro Los Leones. Online por videollamada, mismo valor, mismo terapeuta. La primera hora preferimos presencial cuando se puede: el cuerpo habla distinto en la sala.",
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
    a: "Esta casa no es urgencia ni hospital. Si hay riesgo vital, llama a Salud Responde 600 360 7777 o al *4141 (prevención del suicidio). Si estás en ETER y aparece un riesgo, actuamos el mismo día: la ficha no espera al lunes.",
  },
  {
    q: "¿Cómo cancelo o cambio una hora?",
    a: "Por WhatsApp o al +56 2 2840 4470, con 24 horas de anticipación. Menos que eso, se cobra la sesión: el cupo es de una persona. Responde el equipo, no un call center. Si no contestamos, devolvemos el llamado el mismo día hábil.",
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
    alt: "Sala ETER: sillón de lino, eucalipto y ventana hacia la cordillera",
    caption: "Sala norte — un sillón, la cordillera",
  },
  {
    src: "/images/dialogo.jpg",
    alt: "Dos sillones de lino frente a frente y mesa de roble",
    caption: "Sala de diálogo — cincuenta minutos",
  },
  {
    src: "/images/espera.jpg",
    alt: "Sala de espera con banco de roble y luz de ventana",
    caption: "Espera — sin revistas de 2014",
  },
  {
    src: "/images/corridor.jpg",
    alt: "Pasillo luminoso con textil de lino enmarcado",
    caption: "Pasillo — luz, no letreros",
  },
  {
    src: "/images/patio.jpg",
    alt: "Patio interior con un árbol y un banco",
    caption: "Patio — un árbol, un banco",
  },
  {
    src: "/images/fachada.jpg",
    alt: "Casa de dos pisos en una calle arbolada de Providencia",
    caption: "Antonio Varas 2650, Providencia",
  },
] as const;
