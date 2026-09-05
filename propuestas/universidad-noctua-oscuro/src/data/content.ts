export const promises = [
  "Jornada nocturna",
  "Ocho carreras",
  "Seminario de doce",
  "Arancel publicado",
] as const;

export const stats = [
  { display: "17:30", label: "Apertura académica" },
  { value: 640, suffix: "", label: "Estudiantes de pregrado", format: "es" as const },
  { value: 8, suffix: "", label: "Carreras, no más", pad: 2 },
  { value: 12, suffix: "", label: "Estudiantes por seminario", pad: 2 },
] as const;

export const principles = [
  {
    n: "01",
    title: "La noche no es un resto.",
    text: "No somos el vespertino de otra universidad. El recinto abre a las 17:30 porque el objeto de estudio —el cielo, el sueño, la ciudad encendida— ocurre entonces. Si el oficio no cabe en esa hora, no se abre.",
  },
  {
    n: "02",
    title: "El seminario es la unidad.",
    text: "Doce personas. Un titular. Un semestre. No hay cátedra de doscientos ni ayudante que recita una guía. Si el grupo crece, se abre otro seminario — no se hincha este.",
  },
  {
    n: "03",
    title: "Una sede, una terraza, una estación.",
    text: "Recoleta es el instituto. El cerro se sube. Atacama se visita. No hay filial en un mall ni un edificio de aulas en otra comuna. Si no cabe aquí, no se abre.",
  },
  {
    n: "04",
    title: "Lo que no se puede decir, no se enseña.",
    text: "Planes, aranceles, cupos y ponderaciones están a la vista. Si una carrera no tiene campo, no la abrimos para llenar una sala.",
  },
] as const;

export const protocol = [
  {
    n: "01",
    title: "Llegar",
    text: "Santa Filomena se enciende a las 17:30. El portero no es un vendedor. Te deja el recinto y el silencio.",
  },
  {
    n: "02",
    title: "Observar",
    text: "Terraza, laboratorio, archivo o cúpula. El dato se toma aquí. No se descarga y se traduce.",
  },
  {
    n: "03",
    title: "Sentarse",
    text: "Doce sillas. Un titular. Se habla y se escribe. El ventanal mira a Santiago porque el seminario pide distancia.",
  },
  {
    n: "04",
    title: "Salir",
    text: "A la una. La ciudad ya durmió a medias. Lo que se aprendió cabe en el camino a Baquedano.",
  },
] as const;

export const schools = [
  {
    slug: "cielo",
    title: "Cielo y Medida",
    text: "Astronomía, dato y cine. La luz se mide cuando el resto de la ciudad la apaga.",
  },
  {
    slug: "cuerpo",
    title: "Cuerpo y Tiempo",
    text: "Neurociencias del sueño. El reloj biológico no es una metáfora: es un instrumento.",
  },
  {
    slug: "ciudad",
    title: "Ciudad y Signo",
    text: "Urbanismo, diseño, archivo y gobierno. Santiago de noche es otra comuna.",
  },
] as const;

export const careers = [
  {
    slug: "astronomia",
    n: "01",
    school: "Cielo y Medida",
    title: "Astronomía",
    degree: "Licenciado/a en Astronomía",
    years: 5,
    jornada: "Nocturna",
    cupos: 24,
    arancel: 5_980_000,
    image: "/images/observatorio.jpg",
    alt: "Cúpula del observatorio bajo la Vía Láctea, en una ladera del norte de Chile",
    lead: "Cinco años para medir el cielo del sur. El dato se toma de noche. El paper, de día.",
    body: "Chile tiene el cielo más limpio del planeta y lo enseña, a menudo, como postal. En NOCTUA la astronomía es oficio: óptica, reducción, serie, escritura. El primer año no hay software de catálogo. Hay cúpula, bitácora y un cerro que se sube. La estación de Atacama es una residencia, no un viaje de turismo.",
    forWhom:
      "Quien quiere el instrumento, no el afiche de la NASA. Quien acepta el frío, la hora y que una noche nublada también se anota.",
    plan: [
      { year: "1–2", items: "Física, cálculo, óptica, programación científica, bitácora del cerro." },
      { year: "3–4", items: "Astrofísica, reducción, series, estación Atacama, seminario de doce." },
      { year: "5", items: "Memoria: una serie propia, un modelo, una defensa pública." },
    ],
    weights: [
      { label: "NEM", value: "15%" },
      { label: "Ranking", value: "15%" },
      { label: "Comp. Lectora", value: "15%" },
      { label: "Comp. Matemática 1", value: "35%" },
      { label: "Ciencias", value: "20%" },
    ],
    faculty: "tomas-henriquez",
    portfolio: false,
    vigilia: true,
    outcomes: [
      "Observatorios y estaciones",
      "Investigación y reducción",
      "Instrumentación y dato",
    ],
  },
  {
    slug: "datos",
    n: "02",
    school: "Cielo y Medida",
    title: "Ingeniería en Datos y Observación",
    degree: "Ingeniero/a en Datos y Observación",
    years: 6,
    jornada: "Nocturna",
    cupos: 36,
    arancel: 6_320_000,
    image: "/images/pasillo.jpg",
    alt: "Pasillo de hormigón del campus de noche, una lámpara ámbar al fondo",
    lead: "Sistemas que se pueden auditar. Modelos que declaran su sesgo. El laboratorio abre cuando la ciudad genera su ruido.",
    body: "No formamos ‘el talento del futuro’. Formamos gente que escribe código que se puede leer y series que se pueden defender. Seis años, matemática seria, talleres de doce. El último año es un sistema en producción — un observatorio, un hospital, un municipio — no un demo.",
    forWhom:
      "Quien quiere rigor, no bootcamp. Quien acepta que el primer año es matemática y que el software se defiende como se defiende un teorema.",
    plan: [
      { year: "1–2", items: "Cálculo, álgebra, estructuras de datos, sistemas, ética del dato." },
      { year: "3–4", items: "Series, redes, aprendizaje de máquinas, taller de observación." },
      { year: "5–6", items: "Título: un sistema en uso, con bitácora y defensa." },
    ],
    weights: [
      { label: "NEM", value: "15%" },
      { label: "Ranking", value: "15%" },
      { label: "Comp. Lectora", value: "15%" },
      { label: "Comp. Matemática 1", value: "35%" },
      { label: "Ciencias", value: "20%" },
    ],
    faculty: "tomas-henriquez",
    portfolio: false,
    vigilia: false,
    outcomes: [
      "Infraestructura y series",
      "Investigación aplicada",
      "Producto con responsabilidad de dato",
    ],
  },
  {
    slug: "cine",
    n: "03",
    school: "Cielo y Medida",
    title: "Cine",
    degree: "Licenciado/a en Cine",
    years: 4,
    jornada: "Nocturna",
    cupos: 24,
    arancel: 5_120_000,
    image: "/images/cine.jpg",
    alt: "Sala oscura del instituto: butacas vacías y un haz de proyector",
    lead: "La luz se enseña cuando falta. Cuatro años de toma, montaje y una pieza que se proyecta.",
    body: "El cine en NOCTUA no es un moodboard ni una industria de pitch. Se enseña la noche como material: exposición, silencio, el grano, la ciudad encendida. El primer año se filma en película y se revela. El egreso es una pieza de veintidós minutos, proyectada en la sala oscura, no un link.",
    forWhom:
      "Quien quiere el oficio de la toma, no el de la red. Quien acepta que una noche de rodaje no se recupera con un filtro.",
    plan: [
      { year: "1–2", items: "Fotografía, sonido, montaje, historia del cine chileno y del Pacífico." },
      { year: "3", items: "Taller de noche urbana, documental, ficción breve. Encargo." },
      { year: "4", items: "Título: una pieza proyectada, con ficha y defensa." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "35%" },
      { label: "Comp. Matemática 1", value: "10%" },
      { label: "Historia y Cs. Sociales", value: "15%" },
    ],
    faculty: "francisca-valdivia",
    portfolio: true,
    vigilia: true,
    outcomes: [
      "Dirección y fotografía",
      "Montaje y archivo audiovisual",
      "Documental de ciudad",
    ],
  },
  {
    slug: "sueno",
    n: "04",
    school: "Cuerpo y Tiempo",
    title: "Neurociencias del Sueño",
    degree: "Licenciado/a en Neurociencias del Sueño",
    years: 5,
    jornada: "Nocturna",
    cupos: 28,
    arancel: 6_210_000,
    image: "/images/laboratorio.jpg",
    alt: "Laboratorio de sueño: cama detrás del vidrio, amplificadores y una lámpara ámbar",
    lead: "El reloj biológico se mide. No se opina. Cinco años de laboratorio, clínica y escritura.",
    body: "Chile duerme mal y lo estudia poco. Aquí el sueño es materia: EEG, cronobiología, turno, altura, la noche laboral. El laboratorio está en el predio y abre cuando el sujeto duerme. El seminario es de doce. No hay ‘wellness’: hay serie, protocolo y un informe que un hospital puede usar.",
    forWhom:
      "Quien viene de la biología, de la medicina o de la ingeniería, y no quiere elegir entre ellas. Quien acepta las vigilias del laboratorio.",
    plan: [
      { year: "1–2", items: "Fisiología, estadística, neuroanatomía, protocolo de laboratorio." },
      { year: "3–4", items: "Polisomnografía, cronobiología, clínica del sueño, seminario." },
      { year: "5", items: "Memoria: una serie propia, un protocolo, una defensa." },
    ],
    weights: [
      { label: "NEM", value: "15%" },
      { label: "Ranking", value: "15%" },
      { label: "Comp. Lectora", value: "20%" },
      { label: "Comp. Matemática 1", value: "25%" },
      { label: "Ciencias", value: "25%" },
    ],
    faculty: "isidora-paredes",
    portfolio: false,
    vigilia: true,
    outcomes: [
      "Laboratorios de sueño",
      "Clínica e investigación",
      "Política de turnos y salud",
    ],
  },
  {
    slug: "urbanismo",
    n: "05",
    school: "Ciudad y Signo",
    title: "Urbanismo",
    degree: "Urbanista",
    years: 5,
    jornada: "Nocturna",
    cupos: 28,
    arancel: 5_740_000,
    image: "/images/terraza.jpg",
    alt: "Terraza húmeda del campus con un farol ámbar y Santiago encendido al fondo",
    lead: "La ciudad de día es un plano. De noche es un organismo. Se enseña mirándola encendida.",
    body: "Santiago se planifica a las once de la mañana y se vive a las once de la noche. Aquí el urbanismo parte de esa hora: el turno, el comercio 24h, el borde, la luz, el silencio desigual. Cinco años de dibujo, dato, derecho urbano y terraza. El título es un informe que un municipio puede leer en un concejo.",
    forWhom:
      "Quien quiere el plano y la frase precisa. Quien no confunde ciudad con skyline ni noche con ‘seguridad’.",
    plan: [
      { year: "1–2", items: "Dibujo, historia urbana de Chile, SIG, escritura de informe." },
      { year: "3–4", items: "Taller de borde, de turno, de luz. Derecho y hacienda municipal." },
      { year: "5", items: "Memoria sobre una comuna nominada, no genérica." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "25%" },
      { label: "Comp. Matemática 1", value: "15%" },
      { label: "Historia y Cs. Sociales", value: "20%" },
    ],
    faculty: "vicente-palma",
    portfolio: true,
    vigilia: false,
    outcomes: [
      "Municipios y MINVU",
      "Consultoría de borde",
      "Investigación de ciudad",
    ],
  },
  {
    slug: "diseno",
    n: "06",
    school: "Ciudad y Signo",
    title: "Diseño",
    degree: "Diseñador/a",
    years: 4,
    jornada: "Nocturna",
    cupos: 28,
    arancel: 5_480_000,
    image: "/images/taller.jpg",
    alt: "Taller de maquetas bajo una lámpara ámbar: papel, lápiz y un edificio de cartón",
    lead: "Objetos, signos y sistemas. Nada de creatividad como adjetivo vacío.",
    body: "El diseño en NOCTUA parte del uso y de la luz. Tipografía, objeto, interfaz y espacio se enseñan en el mismo taller: si no se puede hacer a mano, no se digitaliza. El portafolio de egreso es una pieza, no un PDF de mockups. El taller abre de noche porque la concentración pide esa hora.",
    forWhom:
      "Quien quiere oficio, no moodboard. Quien acepta que el primer año se dibuja y se recorta antes de abrir un software.",
    plan: [
      { year: "1–2", items: "Dibujo, tipografía, material, color, historia de la forma." },
      { year: "3", items: "Taller de objeto, de edición, de interfaz. Encargo real." },
      { year: "4", items: "Título: una pieza producida, no ilustrada." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "30%" },
      { label: "Comp. Matemática 1", value: "20%" },
      { label: "Historia y Cs. Sociales", value: "10%" },
    ],
    faculty: "francisca-valdivia",
    portfolio: true,
    vigilia: false,
    outcomes: [
      "Estudios de diseño",
      "Edición y tipografía",
      "Producto e interfaz",
    ],
  },
  {
    slug: "letras",
    n: "07",
    school: "Ciudad y Signo",
    title: "Literatura y Archivo",
    degree: "Licenciado/a en Literatura y Archivo",
    years: 4,
    jornada: "Nocturna",
    cupos: 24,
    arancel: 4_760_000,
    image: "/images/biblioteca.jpg",
    alt: "Sala de lectura nocturna: mesas de roble, lámparas de bronce y ventanales al cielo oscuro",
    lead: "Leer en serio. Archivar en serio. El documento como oficio, no como contenido.",
    body: "Cuatro años de lectura, filología, paleografía y taller de archivo. La biblioteca de NOCTUA no es un living: es una sala de trabajo que cierra a las dos. Se egresa con un inventario hecho y un libro editado — no con un ensayo sobre ‘el futuro de la lectura’.",
    forWhom:
      "Quien lee más de lo que publica. Quien quiere el oficio del original, de la caja y de la ficha.",
    plan: [
      { year: "1–2", items: "Literatura chilena y del Pacífico, latín o griego, teoría, escritura." },
      { year: "3", items: "Taller de archivo, edición, traducción. Encargo con un fondo." },
      { year: "4", items: "Título: un inventario y un libro, de punta a punta." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "40%" },
      { label: "Comp. Matemática 1", value: "10%" },
      { label: "Historia y Cs. Sociales", value: "10%" },
    ],
    faculty: "amanda-soto",
    portfolio: false,
    vigilia: false,
    outcomes: [
      "Archivos y bibliotecas",
      "Edición y traducción",
      "Docencia e investigación literaria",
    ],
  },
  {
    slug: "gobierno",
    n: "08",
    school: "Ciudad y Signo",
    title: "Gobierno de la Ciudad",
    degree: "Cientista Político/a",
    years: 4,
    jornada: "Nocturna",
    cupos: 28,
    arancel: 5_310_000,
    image: "/images/seminario.jpg",
    alt: "Mesa ovalada de seminario con Santiago encendido detrás del ventanal",
    lead: "Gobernar es una forma de mirar. Se enseña en seminario, no en auditorio.",
    body: "Instituciones chilenas, hacienda, turno y escritura pública. El seminario es de doce: se habla y se escribe, no se toma apunte de una diapositiva. El egreso es un informe que un municipio podría usar a las once de la noche — no un paper que nadie lee.",
    forWhom:
      "Quien quiere el Estado por dentro, no el comentario. Quien acepta leer ley, presupuesto y parte policial.",
    plan: [
      { year: "1–2", items: "Historia institucional de Chile, teoría, economía, escritura pública." },
      { year: "3", items: "Seminario de hacienda, de turno, de ciudad. Pasantía municipal." },
      { year: "4", items: "Memoria: un problema nominado, un informe, una defensa." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "30%" },
      { label: "Comp. Matemática 1", value: "15%" },
      { label: "Historia y Cs. Sociales", value: "15%" },
    ],
    faculty: "vicente-palma",
    portfolio: false,
    vigilia: false,
    outcomes: [
      "Municipios y ministerios",
      "Think tanks y archivo",
      "Asesoría de ciudad",
    ],
  },
] as const;

export const faculty = [
  {
    slug: "antonia-reyes",
    name: "Antonia Reyes",
    role: "Rectora",
    school: "Cielo y Medida",
    focus: "Institución y cielo del sur",
    credential: "Astrónoma · Universidad de Chile",
    extra: "Doctora en astrofísica, Leiden. Rectora desde 2020. Antes, ESO Paranal.",
    line: "Una universidad pequeña se sostiene en la hora que elige.",
    image: "/images/antonia.jpg",
    alt: "Antonia Reyes, rectora de NOCTUA, retrato de estudio con luz ámbar",
  },
  {
    slug: "tomas-henriquez",
    name: "Tomás Henríquez",
    role: "Decano",
    school: "Cielo y Medida",
    focus: "Observación y series",
    credential: "Astrónomo · Universidad de Chile",
    extra: "Doctor en astrofísica, Cambridge. Titular de Astronomía y de Datos.",
    line: "La noche nublada también se anota. El dato no se inventa.",
    image: "/images/tomas.jpg",
    alt: "Tomás Henríquez, decano de Cielo y Medida, en su estudio",
  },
  {
    slug: "isidora-paredes",
    name: "Isidora Paredes",
    role: "Decana",
    school: "Cuerpo y Tiempo",
    focus: "Sueño y ritmo",
    credential: "Médica · Universidad de Chile",
    extra: "Doctora en neurociencias, U. de Chile. Dirige el Laboratorio de Sueño.",
    line: "El reloj se mide. No se opina.",
    image: "/images/isidora.jpg",
    alt: "Isidora Paredes, decana de Cuerpo y Tiempo, en el laboratorio de sueño",
  },
  {
    slug: "vicente-palma",
    name: "Vicente Palma",
    role: "Decano",
    school: "Ciudad y Signo",
    focus: "Urbanismo y gobierno",
    credential: "Arquitecto · Universidad de Chile",
    extra: "Magíster en urbanismo, PUC. Titular de Urbanismo y de Gobierno.",
    line: "Santiago de noche es otra comuna. Hay que nombrarla.",
    image: "/images/vicente.jpg",
    alt: "Vicente Palma, decano de Ciudad y Signo, retrato de estudio",
  },
  {
    slug: "francisca-valdivia",
    name: "Francisca Valdivia",
    role: "Profesora titular",
    school: "Ciudad y Signo",
    focus: "Diseño y cine",
    credential: "Diseñadora · PUC",
    extra: "Magíster en cine, Le Fresnoy. Titular de Diseño y del Taller de Cine.",
    line: "Si no se puede hacer a mano, no se digitaliza.",
    image: "/images/francisca.jpg",
    alt: "Francisca Valdivia, profesora titular de diseño y cine",
  },
  {
    slug: "amanda-soto",
    name: "Amanda Soto",
    role: "Profesora titular",
    school: "Ciudad y Signo",
    focus: "Edición y archivo",
    credential: "Licenciada en letras · Universidad de Chile",
    extra: "Editora. Dirige el Archivo de la Noche y el sello NOCTUA.",
    line: "Un documento es un oficio. No un contenido.",
    image: "/images/amanda.jpg",
    alt: "Amanda Soto, profesora titular de literatura y archivo",
  },
] as const;

export const rooms = [
  {
    slug: "terraza",
    title: "La terraza",
    text: "Un farol, el pretil, Santiago encendido. El recinto se ordena hacia esa vista. Se sube cada noche.",
    image: "/images/terraza.jpg",
    alt: "Terraza del campus con farol ámbar, piso húmedo y la ciudad al fondo",
  },
  {
    slug: "biblioteca",
    title: "Biblioteca",
    text: "Sala de lectura hasta las 02:00. Mesas, lámparas, silencio de verdad. No hay living.",
    image: "/images/biblioteca.jpg",
    alt: "Biblioteca nocturna de NOCTUA, mesas largas y lámparas de bronce",
  },
  {
    slug: "seminario",
    title: "Seminario",
    text: "Mesa ovalada para doce. El ventanal no es un lujo: es la prueba de que se puede pensar mirando lejos.",
    image: "/images/seminario.jpg",
    alt: "Sala de seminario con mesa ovalada y Santiago de noche",
  },
  {
    slug: "observatorio",
    title: "Observatorio",
    text: "Cúpula en el cerro y estación en Atacama. El cielo del sur se enseña subiendo, no proyectando.",
    image: "/images/observatorio.jpg",
    alt: "Cúpula bajo la Vía Láctea en el norte de Chile",
  },
  {
    slug: "sueno",
    title: "Laboratorio de sueño",
    text: "Cama, vidrio, amplificadores. El sujeto duerme. El dato se toma al otro lado.",
    image: "/images/laboratorio.jpg",
    alt: "Laboratorio de sueño con cama detrás del vidrio",
  },
  {
    slug: "oscura",
    title: "Sala oscura",
    text: "Cuarenta butacas. Un haz. Aquí se defiende el cine: proyectado, no colgado.",
    image: "/images/cine.jpg",
    alt: "Sala oscura con haz de proyector y butacas vacías",
  },
] as const;

export const research = [
  {
    n: "01",
    title: "Observatorio del Cerro",
    lead: "Series propias. Reducción que se defiende. La cúpula está a doce minutos a pie.",
    text: "Dirige Tomás Henríquez. Fotometría y espectroscopía desde Recoleta y desde la estación de Atacama — una residencia de tres semanas por semestre, no un tour. Convenios con ESO y con universidades del Pacífico. No publicamos lo que no medimos.",
  },
  {
    n: "02",
    title: "Laboratorio de Sueño y Ritmo",
    lead: "Protocolo, serie, clínica. El laboratorio abre cuando el sujeto duerme.",
    text: "Dirige Isidora Paredes. Polisomnografía, cronobiología de turno y altura. Informes para hospitales y para la Dirección del Trabajo. El producto es un protocolo que se puede repetir, no un consejo de higiene del sueño.",
  },
  {
    n: "03",
    title: "Cátedra de Ciudad Nocturna",
    lead: "Turno, borde, luz. El mapa como argumento de las 18:00 a las 06:00.",
    text: "Dirige Vicente Palma. Informes para municipios del valle. El taller de Urbanismo trabaja sobre comunas nominadas — Recoleta, Independencia, Estación Central — no sobre ‘casos’.",
  },
  {
    n: "04",
    title: "Archivo de la Noche Chilena",
    lead: "Documentos, prensa, radio, parte. Lo que ocurre cuando el resto duerme.",
    text: "Dirige Amanda Soto. El sello NOCTUA publica tres títulos al año: archivo, traducción, ensayo de ciudad. Los estudiantes de Letras egresan con un inventario hecho.",
  },
] as const;

export const masters = [
  {
    title: "Magíster en Astronomía Observacional",
    years: "2 años",
    text: "Para físicos y astrónomos. Serie, reducción y escritura. Residencia en Atacama.",
  },
  {
    title: "Magíster en Sueño y Ritmo",
    years: "2 años",
    text: "Para médicos, biólogos e ingenieros. Protocolo de laboratorio y clínica. Cupo de diez.",
  },
  {
    title: "Magíster en Ciudad Nocturna",
    years: "1,5 años",
    text: "Turno, borde y escritura de informe. Campo en comunas del valle.",
  },
] as const;

export const calendar = [
  { when: "6 oct – 18 dic 2026", what: "Postulación Admisión 2027" },
  { when: "12 – 30 ene 2027", what: "Entrevistas, portafolio y vigilia" },
  { when: "6 feb 2027", what: "Carta de admisión" },
  { when: "8 – 19 feb 2027", what: "Matrícula" },
  { when: "8 mar 2027", what: "Inicio de clases · 17:30" },
] as const;

export const becas = [
  {
    title: "Beca Vigilia",
    text: "50% del arancel anual. Mérito académico y necesidad socioeconómica. Cubre al 16% de la matrícula. Se postula con la admisión.",
  },
  {
    title: "Beca Recoleta",
    text: "100% del arancel. Diez cupos para estudiantes de Recoleta, Independencia, Santiago Centro, Quinta Normal y Estación Central. El predio está acá: el cupo también.",
  },
  {
    title: "Cupo de equidad",
    text: "15% de los cupos de cada carrera. Ponderación propia, entrevista, y acompañamiento el primer año. No es un anexo: es el mismo seminario.",
  },
] as const;

export const matricula = 340_000;

export const faqs = [
  {
    q: "¿NOCTUA es universidad o instituto?",
    a: "Instituto universitario de sede única. Ocho carreras de pregrado y tres magíster. No abrimos una novena para parecer más grandes. El título profesional lo otorga la Fundación Instituto NOCTUA.",
  },
  {
    q: "¿Es vespertino? ¿Hay jornada diurna u online?",
    a: "No es vespertino. Es jornada nocturna: clases de 17:30 a 01:00, lunes a viernes. No hay diurno, no hay online, no hay ‘flexible’. El oficio pide esa hora. Si no cabe en ella, no es este instituto.",
  },
  {
    q: "¿Cómo se entra? ¿Hay que dar la PAES?",
    a: "Sí. Admisión 2027 usa PAES 2026, NEM y ranking. Cine, diseño y urbanismo piden además un portafolio de diez láminas. Astronomía, cine y neurociencias incluyen una vigilia de observación en el campus. Todas las carreras tienen entrevista de 25 minutos. Las ponderaciones están publicadas en cada carrera.",
  },
  {
    q: "¿Qué es la vigilia?",
    a: "Una noche en el recinto, de 20:00 a 00:30, antes de la carta de admisión. Se observa, se anota, se habla. No es un test psicológico ni un reality. Es la prueba de que la hora te sirve. Astronomía, cine y neurociencias la piden; el resto, no.",
  },
  {
    q: "¿Cuánto cuesta? ¿Hay gratuidad o CAE?",
    a: "El arancel anual va de $4.760.000 (Letras) a $6.320.000 (Datos). Matrícula $340.000. Publicamos la cifra, no un ‘desde’. Informamos las vías de financiamiento vigentes en Chile; no prometemos beneficios que no administramos. La Beca Vigilia y la Beca Recoleta sí son nuestras.",
  },
  {
    q: "¿Puedo visitar el campus?",
    a: "Sí. Sábados de marzo a enero, 10:00 a 14:00, con inscripción previa. El recorrido dura una hora: terraza, biblioteca, un seminario, el laboratorio o la sala oscura. Lo guía un estudiante, no un vendedor. De noche, solo con postulación en curso.",
  },
] as const;

export function getCareer(slug: string) {
  return careers.find((item) => item.slug === slug);
}

export function getFaculty(slug: string) {
  return faculty.find((item) => item.slug === slug);
}
