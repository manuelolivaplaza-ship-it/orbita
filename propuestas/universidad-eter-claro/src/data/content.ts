export const promises = [
  "Sede única",
  "Ocho carreras",
  "Taller de doce",
  "Arancel publicado",
] as const;

export const stats = [
  { value: 847, suffix: " m", label: "Sobre el nivel del mar", format: undefined as "es" | undefined },
  { value: 1240, suffix: "", label: "Estudiantes de pregrado", format: "es" as const },
  { value: 8, suffix: "", label: "Carreras, no más", pad: 2 },
  { value: 12, suffix: "", label: "Estudiantes por taller", pad: 2 },
] as const;

export const principles = [
  {
    n: "01",
    title: "Una sede.",
    text: "No hay filial en otra comuna ni un edificio de aulas en un mall. El Arrayán es el instituto. Si no cabe aquí, no se abre.",
  },
  {
    n: "02",
    title: "El taller es la unidad.",
    text: "Doce personas. Un docente titular. Un semestre. No hay cátedra de doscientos ni ayudante que recita una guía. Si el grupo crece, se abre otro taller — no se hincha este.",
  },
  {
    n: "03",
    title: "La altura no es brochure.",
    text: "A 847 metros cambia la luz, el silencio y la hora de leer. El campus está en la precordillera porque el estudio pide aire, no porque quede bien en la foto.",
  },
  {
    n: "04",
    title: "Lo que no se puede decir, no se enseña.",
    text: "Planes, aranceles, cupos y ponderaciones están a la vista. Si una carrera no tiene campo, no la abrimos para llenar una sala.",
  },
] as const;

export const schools = [
  {
    slug: "tierra",
    title: "Tierra y Atmósfera",
    text: "Clima, territorio y paisaje. El Andes no es fondo: es materia de estudio.",
  },
  {
    slug: "forma",
    title: "Forma y Cálculo",
    text: "Arquitectura, diseño y computación. La forma se piensa con las manos y con el número.",
  },
  {
    slug: "palabra",
    title: "Palabra y Ciudad",
    text: "Literatura, edición y gobierno. La ciudad se lee antes de administrarse.",
  },
] as const;

export const careers = [
  {
    slug: "arquitectura",
    n: "01",
    school: "Forma y Cálculo",
    title: "Arquitectura",
    degree: "Arquitecto/a",
    years: 6,
    jornada: "Diurna",
    cupos: 36,
    arancel: 6480000,
    image: "/images/taller.jpg",
    alt: "Taller de arquitectura: maquetas blancas, papel de croquis y luz norte sobre mesas de raulí",
    lead: "Seis años de taller. El edificio se piensa desde el patio, no desde el render.",
    body: "En ETER la arquitectura no se enseña como un catálogo de estilos. Se enseña como una conversación con el sitio: la pendiente, el viento, el agua de riego, la sombra de un quillay a las cuatro de la tarde. El primer año no hay software. Hay lápiz, maqueta y un predio que se camina.",
    forWhom:
      "Quien quiere construir con rigor y no con moda. Quien acepta que el taller dura hasta tarde y que una maqueta se desarma si la idea no carga.",
    plan: [
      { year: "1–2", items: "Sitio, dibujo, estructura, historia de la forma en Chile y el Pacífico." },
      { year: "3–4", items: "Taller de vivienda, de campus, de paisaje. Hormigón, madera, agua." },
      { year: "5–6", items: "Título: un predio real, un encargo escrito, una defensa pública." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "25%" },
      { label: "Comp. Matemática 1", value: "25%" },
      { label: "Historia y Cs. Sociales", value: "10%" },
    ],
    faculty: "camila-rojas",
    portfolio: true,
    outcomes: [
      "Oficina propia o asociada",
      "Obra pública y paisaje",
      "Docencia e investigación de forma",
    ],
  },
  {
    slug: "paisaje",
    n: "02",
    school: "Tierra y Atmósfera",
    title: "Arquitectura del Paisaje",
    degree: "Arquitecto/a del Paisaje",
    years: 5,
    jornada: "Diurna",
    cupos: 24,
    arancel: 5920000,
    image: "/images/patio.jpg",
    alt: "Claustro del campus: un arrayán en un estanque raso, columnata de hormigón claro",
    lead: "El paisaje no es jardín. Es territorio, agua, sombra y tiempo.",
    body: "Chile se enseña mal si se enseña como postal. Aquí el paisaje es la acequia, el talud, el incendio, la quebrada que se seca en marzo. Cinco años para leer un predio y devolverle un orden que no lo humille.",
    forWhom:
      "Quien viene de la biología, de la arquitectura o de la tierra, y no quiere elegir entre ellas.",
    plan: [
      { year: "1–2", items: "Botánica de Chile central, hidrología, dibujo de sitio, suelos." },
      { year: "3–4", items: "Taller de quebrada, de campus, de borde urbano. Restauración." },
      { year: "5", items: "Título sobre un predio de la precordillera o del valle." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "20%" },
      { label: "Comp. Matemática 1", value: "20%" },
      { label: "Ciencias", value: "20%" },
    ],
    faculty: "elisa-montes",
    portfolio: true,
    outcomes: [
      "Parques y bordes urbanos",
      "Restauración de quebradas",
      "Consultoría de territorio",
    ],
  },
  {
    slug: "diseno",
    n: "03",
    school: "Forma y Cálculo",
    title: "Diseño",
    degree: "Diseñador/a",
    years: 4,
    jornada: "Diurna",
    cupos: 28,
    arancel: 5740000,
    image: "/images/taller.jpg",
    alt: "Mesas de taller con rollos de papel y maquetas de patio, luz de ventana",
    lead: "Objetos, signos y sistemas. Nada de ‘creatividad’ como adjetivo vacío.",
    body: "El diseño en ETER parte del uso y del material. Tipografía, objeto, interfaz y espacio se enseñan en el mismo taller: si no se puede hacer a mano, no se digitaliza. El portafolio de egreso es una pieza, no un PDF de mockups.",
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
    faculty: "camila-rojas",
    portfolio: true,
    outcomes: [
      "Estudios de diseño",
      "Edición y tipografía",
      "Producto e interfaz",
    ],
  },
  {
    slug: "clima",
    n: "04",
    school: "Tierra y Atmósfera",
    title: "Ingeniería en Ciencias del Clima",
    degree: "Ingeniero/a en Ciencias del Clima",
    years: 5,
    jornada: "Diurna",
    cupos: 32,
    arancel: 6150000,
    image: "/images/laboratorio.jpg",
    alt: "Laboratorio de atmósfera con instrumentos de vidrio y ventana abierta a los Andes",
    lead: "Medir, modelar y escribir el aire de Chile. No hay ‘conciencia ambiental’ sin número.",
    body: "La precordillera es un instrumento. Cinco años de física, cálculo, observación y campo. El laboratorio mira al macizo porque el dato se toma aquí, no se descarga de un paper extranjero y se traduce.",
    forWhom:
      "Quien quiere ciencia dura con sitio. Quien no busca un slogan verde sino una estación, una serie y un modelo que se defienda.",
    plan: [
      { year: "1–2", items: "Cálculo, física, química de la atmósfera, programación científica." },
      { year: "3–4", items: "Observación, modelos, hidrología andina, campo en El Arrayán." },
      { year: "5", items: "Memoria: una serie propia, un modelo, una defensa." },
    ],
    weights: [
      { label: "NEM", value: "15%" },
      { label: "Ranking", value: "15%" },
      { label: "Comp. Lectora", value: "15%" },
      { label: "Comp. Matemática 1", value: "30%" },
      { label: "Ciencias", value: "25%" },
    ],
    faculty: "pedro-alarcon",
    portfolio: false,
    outcomes: [
      "Servicios climáticos",
      "Investigación y estaciones",
      "Política pública con dato",
    ],
  },
  {
    slug: "territorio",
    n: "05",
    school: "Tierra y Atmósfera",
    title: "Geografía y Territorio",
    degree: "Geógrafo/a",
    years: 4,
    jornada: "Diurna",
    cupos: 28,
    arancel: 5210000,
    image: "/images/cielo.jpg",
    alt: "Cordillera de los Andes al amanecer, vista desde un pretil de hormigón en El Arrayán",
    lead: "Leer el mapa como se lee un texto: con paciencia y sin adorno.",
    body: "Chile se administra mal cuando se administra desde el escritorio de Santiago centro. Aquí el territorio se camina: quebrada, loteo, riego, incendio, borde. SIG, cartografía y escritura de informe son el mismo oficio.",
    forWhom:
      "Quien quiere el dato espacial y la frase precisa. Quien no confunde geografía con turismo.",
    plan: [
      { year: "1–2", items: "Cartografía, física de la tierra, SIG, escritura de informe." },
      { year: "3", items: "Taller de cuenca, de ciudad, de riesgo. Campo." },
      { year: "4", items: "Memoria sobre un territorio nominado, no genérico." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "25%" },
      { label: "Comp. Matemática 1", value: "15%" },
      { label: "Historia y Cs. Sociales", value: "20%" },
    ],
    faculty: "elisa-montes",
    portfolio: false,
    outcomes: [
      "Planificación territorial",
      "Riesgo y cuenca",
      "Cartografía e informe público",
    ],
  },
  {
    slug: "computacion",
    n: "06",
    school: "Forma y Cálculo",
    title: "Ingeniería Civil en Computación",
    degree: "Ingeniero/a Civil en Computación",
    years: 6,
    jornada: "Diurna",
    cupos: 40,
    arancel: 6280000,
    image: "/images/computacion.jpg",
    alt: "Sala de computación vacía, pantallas apagadas y ventana a la precordillera",
    lead: "Algoritmo, sistema y ética del dato. El laboratorio tiene vista al macizo a propósito.",
    body: "No formamos ‘el talento del futuro’. Formamos gente que escribe código que se puede leer, sistemas que se pueden auditar y modelos que declaran su sesgo. Seis años, matemática seria, talleres de doce. El último año es un sistema en producción, no un demo.",
    forWhom:
      "Quien quiere rigor, no bootcamp. Quien acepta que el primer año es matemática y que el software se defiende como se defiende un teorema.",
    plan: [
      { year: "1–2", items: "Cálculo, álgebra, estructuras de datos, sistemas." },
      { year: "3–4", items: "Redes, compiladores, aprendizaje de máquinas, taller de producto." },
      { year: "5–6", items: "Título: un sistema en uso, con bitácora y defensa." },
    ],
    weights: [
      { label: "NEM", value: "15%" },
      { label: "Ranking", value: "15%" },
      { label: "Comp. Lectora", value: "15%" },
      { label: "Comp. Matemática 1", value: "35%" },
      { label: "Ciencias", value: "20%" },
    ],
    faculty: "ignacio-beltran",
    portfolio: false,
    outcomes: [
      "Sistemas e infraestructura",
      "Investigación aplicada",
      "Producto con responsabilidad de dato",
    ],
  },
  {
    slug: "letras",
    n: "07",
    school: "Palabra y Ciudad",
    title: "Literatura y Edición",
    degree: "Licenciado/a en Literatura y Edición",
    years: 4,
    jornada: "Diurna",
    cupos: 24,
    arancel: 4890000,
    image: "/images/biblioteca.jpg",
    alt: "Sala de lectura de la biblioteca, mesas de roble claro y ventanal alto hacia la montaña",
    lead: "Leer en serio. Editar en serio. El libro como oficio, no como contenido.",
    body: "Cuatro años de lectura, filología, traducción y taller de edición. La biblioteca de ETER no es un living: es una sala de trabajo con luz norte. Se egresa con un libro hecho — no con un ensayo sobre ‘el futuro de la lectura’.",
    forWhom:
      "Quien lee más de lo que publica. Quien quiere el oficio del original, de la prueba y de la caja.",
    plan: [
      { year: "1–2", items: "Literatura chilena y del Pacífico, latín o griego, teoría, escritura." },
      { year: "3", items: "Taller de edición, traducción, archivo. Encargo con un sello." },
      { year: "4", items: "Título: un libro editado de punta a punta." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "40%" },
      { label: "Comp. Matemática 1", value: "10%" },
      { label: "Historia y Cs. Sociales", value: "10%" },
    ],
    faculty: "soledad-munoz",
    portfolio: false,
    outcomes: [
      "Editoriales y archivos",
      "Traducción",
      "Docencia e investigación literaria",
    ],
  },
  {
    slug: "gobierno",
    n: "08",
    school: "Palabra y Ciudad",
    title: "Ciencias Políticas y Gobierno",
    degree: "Cientista Político/a",
    years: 4,
    jornada: "Diurna",
    cupos: 28,
    arancel: 5460000,
    image: "/images/aula.jpg",
    alt: "Sala de seminario con mesa ovalada de madera y ventanal al macizo andino",
    lead: "Gobernar es una forma de mirar. Se enseña en seminario, no en auditorio.",
    body: "Instituciones chilenas, territorio, hacienda y escritura pública. El seminario es de doce: se habla y se escribe, no se toma apunte de una diapositiva. El egreso es un informe que un municipio o un ministerio podría usar — no un paper que nadie lee.",
    forWhom:
      "Quien quiere el Estado por dentro, no el comentario de Twitter. Quien acepta leer ley y presupuesto.",
    plan: [
      { year: "1–2", items: "Historia institucional de Chile, teoría, economía, escritura pública." },
      { year: "3", items: "Seminario de hacienda, de ciudad, de territorio. Pasantía." },
      { year: "4", items: "Memoria: un problema nominado, un informe, una defensa." },
    ],
    weights: [
      { label: "NEM", value: "20%" },
      { label: "Ranking", value: "20%" },
      { label: "Comp. Lectora", value: "30%" },
      { label: "Comp. Matemática 1", value: "15%" },
      { label: "Historia y Cs. Sociales", value: "15%" },
    ],
    faculty: "magdalena-vidal",
    portfolio: false,
    outcomes: [
      "Estado y municipios",
      "Think tanks y archivo",
      "Asesoría territorial",
    ],
  },
] as const;

export const faculty = [
  {
    slug: "magdalena-vidal",
    name: "Magdalena Vidal",
    role: "Rectora",
    school: "Palabra y Ciudad",
    focus: "Instituciones y escritura pública",
    credential: "Cientista política · Universidad de Chile",
    extra: "Doctora en gobierno, LSE. Rectora desde 2019.",
    line: "Una universidad pequeña se sostiene en lo que se niega a abrir.",
    image: "/images/magdalena.jpg",
    alt: "Magdalena Vidal, rectora de ETER, contra un muro de hormigón claro",
  },
  {
    slug: "elisa-montes",
    name: "Elisa Montes",
    role: "Decana",
    school: "Tierra y Atmósfera",
    focus: "Territorio y paisaje",
    credential: "Geógrafa · Universidad de Chile",
    extra: "Doctora en paisaje, UPC. Campo en la precordillera desde 2011.",
    line: "El Andes no es fondo. Es el primer dato.",
    image: "/images/elisa.jpg",
    alt: "Elisa Montes, decana de Tierra y Atmósfera, luz norte sobre hormigón",
  },
  {
    slug: "camila-rojas",
    name: "Camila Rojas",
    role: "Decana",
    school: "Forma y Cálculo",
    focus: "Taller de arquitectura",
    credential: "Arquitecta · PUC",
    extra: "Magíster en paisaje, Harvard GSD. Titular del Taller Patio.",
    line: "Si la maqueta no carga, el render no va a salvarla.",
    image: "/images/camila.jpg",
    alt: "Camila Rojas, decana de Forma y Cálculo, junto a una ventana",
  },
  {
    slug: "ignacio-beltran",
    name: "Ignacio Beltrán",
    role: "Profesor titular",
    school: "Forma y Cálculo",
    focus: "Sistemas y dato",
    credential: "Ingeniero civil en computación · Universidad de Chile",
    extra: "Doctor en sistemas, ETH Zürich. Titular de Computación.",
    line: "El código que no se puede leer no se puede enseñar.",
    image: "/images/ignacio.jpg",
    alt: "Ignacio Beltrán, profesor titular de computación, luz de ventana",
  },
  {
    slug: "soledad-munoz",
    name: "Soledad Muñoz",
    role: "Profesora titular",
    school: "Palabra y Ciudad",
    focus: "Edición y archivo",
    credential: "Licenciada en letras · Universidad de Chile",
    extra: "Editora. Dirige el Taller de Edición y el sello ETER.",
    line: "Un libro es un oficio. No un contenido.",
    image: "/images/soledad.jpg",
    alt: "Soledad Muñoz, profesora titular de literatura y edición",
  },
  {
    slug: "pedro-alarcon",
    name: "Pedro Alarcón",
    role: "Profesor titular",
    school: "Tierra y Atmósfera",
    focus: "Atmósfera andina",
    credential: "Físico · Universidad de Santiago",
    extra: "Doctor en ciencias de la atmósfera, CU Boulder. Estación El Arrayán.",
    line: "La serie se toma aquí. No se descarga.",
    image: "/images/pedro.jpg",
    alt: "Pedro Alarcón, profesor titular de ciencias del clima",
  },
] as const;

export const rooms = [
  {
    slug: "claustro",
    title: "El claustro",
    text: "Un estanque raso, un árbol, una columnata. El campus se ordena alrededor de este cuadrado.",
    image: "/images/patio.jpg",
    alt: "Claustro con arrayán y estanque, sombras largas de la columnata",
  },
  {
    slug: "biblioteca",
    title: "Biblioteca",
    text: "Sala de lectura con ventanal alto al macizo. No hay living. Hay mesas, sillas de lino y silencio de verdad.",
    image: "/images/biblioteca.jpg",
    alt: "Biblioteca de ETER, mesas alineadas y montaña al fondo",
  },
  {
    slug: "talleres",
    title: "Talleres",
    text: "Arquitectura y diseño comparten naves de luz norte. Maqueta, papel, el olor a madera.",
    image: "/images/taller.jpg",
    alt: "Taller de maquetas con luz de ventana",
  },
  {
    slug: "seminario",
    title: "Seminario",
    text: "Mesa ovalada para doce. El ventanal no es un lujo: es la prueba de que se puede pensar mirando lejos.",
    image: "/images/aula.jpg",
    alt: "Sala de seminario con vista a los Andes",
  },
  {
    slug: "atmosfera",
    title: "Laboratorio de atmósfera",
    text: "Instrumentos, series, el macizo al otro lado del vidrio. La estación está en el predio.",
    image: "/images/laboratorio.jpg",
    alt: "Laboratorio de clima con vista a la precordillera",
  },
  {
    slug: "residencia",
    title: "Residencia",
    text: "Cuarenta y ocho camas para quien viene de fuera de Santiago. Comedor común, vista al cordón.",
    image: "/images/residencia.jpg",
    alt: "Estar de la residencia estudiantil, lino y montaña",
  },
] as const;

export const research = [
  {
    n: "01",
    title: "Laboratorio de Atmósfera Andina",
    lead: "Series propias. Modelos que se defienden. La estación está a 200 metros del claustro.",
    text: "Dirige Pedro Alarcón. Observación de temperatura, radiación y partículas en El Arrayán. Convenios con DMC y con universidades del Pacífico. No publicamos lo que no medimos.",
  },
  {
    n: "02",
    title: "Cátedra de Territorio",
    lead: "Quebradas, loteos, riego. El mapa como argumento.",
    text: "Dirige Elisa Montes. Informes para municipios de la precordillera. El taller de Geografía trabaja sobre predios nominados, no sobre ‘casos’.",
  },
  {
    n: "03",
    title: "Taller de Edición",
    lead: "Un sello propio. Libros que se imprimen, no que se cuelgan.",
    text: "Dirige Soledad Muñoz. El sello ETER publica tres títulos al año: archivo chileno, traducción, ensayo de territorio. Los estudiantes de Letras egresan con uno hecho.",
  },
  {
    n: "04",
    title: "Observatorio de Ciudad",
    lead: "Hacienda municipal, borde urbano, escritura pública.",
    text: "Dirige Magdalena Vidal. Seminarios con municipios. El producto es un informe que se puede leer en voz alta en un concejo.",
  },
] as const;

export const masters = [
  {
    title: "Magíster en Atmósfera y Ciudad",
    years: "2 años",
    text: "Para ingenieros, geógrafos y arquitectos. Serie, modelo y política del aire.",
  },
  {
    title: "Magíster en Edición",
    years: "1,5 años",
    text: "Oficio del original, de la prueba y de la caja. Cupo de diez.",
  },
  {
    title: "Magíster en Territorio",
    years: "2 años",
    text: "Cuenca, riesgo y escritura de informe. Campo en la precordillera.",
  },
] as const;

export const calendar = [
  { when: "6 oct – 18 dic 2026", what: "Postulación Admisión 2027" },
  { when: "5 – 23 ene 2027", what: "Entrevistas y revisión de portafolio" },
  { when: "30 ene 2027", what: "Carta de admisión" },
  { when: "2 – 13 feb 2027", what: "Matrícula" },
  { when: "9 mar 2027", what: "Inicio de clases" },
] as const;

export const becas = [
  {
    title: "Beca Altura",
    text: "50% del arancel anual. Mérito académico y necesidad socioeconómica. Cubre al 18% de la matrícula. Se postula con la admisión.",
  },
  {
    title: "Beca Territorio",
    text: "100% del arancel. Doce cupos para estudiantes de Lo Barnechea, Colina, Pirque, San José de Maipo y comunas de la precordillera. Residencia incluida si corresponde.",
  },
  {
    title: "Cupo de equidad",
    text: "15% de los cupos de cada carrera. Ponderación propia, entrevista, y acompañamiento el primer año. No es un anexo: es el mismo taller.",
  },
] as const;

export const matricula = 320000;

export const faqs = [
  {
    q: "¿ETER es universidad o instituto?",
    a: "Instituto universitario de sede única. Ocho carreras de pregrado y tres magíster. No abrimos una novena para parecer más grandes. El título profesional lo otorga la Fundación Instituto ETER.",
  },
  {
    q: "¿Cómo se entra? ¿Hay que dar la PAES?",
    a: "Sí. Admisión 2027 usa PAES 2026, NEM y ranking. Arquitectura, paisaje y diseño piden además un portafolio de diez láminas. Todas las carreras incluyen una entrevista de 25 minutos en el campus. Las ponderaciones están publicadas en cada carrera.",
  },
  {
    q: "¿Cuánto cuesta? ¿Hay gratuidad o CAE?",
    a: "El arancel anual va de $4.890.000 (Letras) a $6.480.000 (Arquitectura). Matrícula $320.000. Publicamos la cifra, no un ‘desde’. Informamos las vías de financiamiento vigentes en Chile; no prometemos beneficios que no administramos. La Beca Altura y la Beca Territorio sí son nuestras.",
  },
  {
    q: "¿Hay residencia?",
    a: "Cuarenta y ocho camas en el predio, con prioridad para quien viene de fuera de la Región Metropolitana y para la Beca Territorio. El cupo se asigna con la matrícula, no se vende por separado como un hotel.",
  },
  {
    q: "¿Es jornada diurna? ¿Hay vespertino?",
    a: "Todas las carreras son diurnas, en El Arrayán. No hay vespertino ni online. El taller pide presencia. Si el oficio no cabe en esa forma, no es este instituto.",
  },
  {
    q: "¿Puedo visitar el campus?",
    a: "Sí. Sábados de marzo a enero, 9:00 a 13:00, con inscripción previa. El recorrido dura una hora: claustro, biblioteca, un taller, el seminario. Lo guía un estudiante, no un vendedor.",
  },
] as const;

export function getCareer(slug: string) {
  return careers.find((item) => item.slug === slug);
}

export function getFaculty(slug: string) {
  return faculty.find((item) => item.slug === slug);
}
