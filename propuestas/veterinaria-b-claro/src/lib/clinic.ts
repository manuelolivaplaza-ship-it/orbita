export const clinic = {
  name: "Alba",
  legalName: "Alba Clínica Veterinaria",
  tagline: "Medicina de precisión. Cariño de casa.",
  lede: "Una clínica de alta complejidad en Palermo, pensada para que el animal y quien lo acompaña se sientan en un consultorio — no en una sala de espera ruidosa.",
  phoneDisplay: "11 4800 2140",
  phoneTel: "+541148002140",
  whatsapp: "5491148002140",
  email: "hola@alba.vet",
  instagram: "albaveterinaria",
  address: "Gorriti 4872",
  neighborhood: "Palermo",
  city: "Ciudad de Buenos Aires",
  mapsQuery: "Gorriti 4872, Palermo, Buenos Aires",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gorriti+4872+Palermo+Buenos+Aires",
  founded: 2014,
} as const;

export const nav = [
  { href: "/la-clinica", label: "La clínica" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Equipo" },
  { href: "/urgencias", label: "Urgencias" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const hours = [
  { label: "Lunes a viernes", value: "8:30 – 20:00", days: [1, 2, 3, 4, 5], open: "08:30", close: "20:00" },
  { label: "Sábados", value: "9:00 – 14:00", days: [6], open: "09:00", close: "14:00" },
  { label: "Domingos", value: "Cerrado · urgencias 24 h", days: [0], open: null, close: null },
] as const;

export const species = [
  { name: "Perros", note: "Todas las razas y tamaños" },
  { name: "Gatos", note: "Consultorio felino silencioso" },
  { name: "Conejos", note: "Medicina de lagomorfos" },
  { name: "Hurones", note: "Exóticos de compañía" },
  { name: "Aves", note: "Psitácidas y aves de jaula" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  duration: string;
  image: string;
  imageAlt: string;
  summary: string;
  body: string[];
  includes: string[];
  forWho: string;
};

export const services: Service[] = [
  {
    slug: "consulta",
    name: "Consulta clínica",
    short: "Tiempo real, no diez minutos de reloj.",
    duration: "40 min",
    image: "/images/exam-room.jpg",
    imageAlt: "Consultorio de Alba, con mesa de roble y luz de tarde",
    summary:
      "Examen físico completo, conversación sin apuro y un plan escrito. La consulta es el centro de la clínica: acá se decide bien.",
    body: [
      "Reservamos cuarenta minutos porque un animal no se deja leer en diez. Revisamos mucosas, auscultación, abdomen, piel, oídos, boca y locomoción. Preguntamos por casa, comida, sueño y lo que cambió.",
      "Al final se lleva un resumen claro: qué vimos, qué descartamos, qué sigue. Si hace falta laboratorio o imagen, se lo proponemos con el porqué — nunca como un combo automático.",
    ],
    includes: [
      "Examen físico sistemático",
      "Historia clínica digital",
      "Plan escrito para llevar",
      "Tiempo para preguntas",
    ],
    forWho: "Controles, síntomas nuevos, segunda opinión o la primera visita a Alba.",
  },
  {
    slug: "prevencion",
    name: "Prevención y vacunas",
    short: "El calendario que corresponde a este animal, no a un afiche.",
    duration: "30 min",
    image: "/images/dog-sleep.jpg",
    imageAlt: "Perro descansando en internación, cubierto con lino",
    summary:
      "Vacunas, desparasitación, control de peso y un calendario anual pensado para la edad, el barrio y el estilo de vida.",
    body: [
      "No vacunamos de más ni de menos. Armamos el plan según edad, especie, si sale a la plaza, si convive con otros animales y si viaja.",
      "La visita preventiva es también el momento de mirar dientes, peso y comportamiento — las cosas que, si se ven a tiempo, no se vuelven urgencia.",
    ],
    includes: [
      "Vacunación según plan individual",
      "Antiparasitarios internos y externos",
      "Control de peso y condición corporal",
      "Recordatorio anual por WhatsApp",
    ],
    forWho: "Cachorros, adultos sanos y animales mayores que necesitan un ritmo distinto.",
  },
  {
    slug: "cirugia",
    name: "Cirugía",
    short: "Quirofano propio, anestesia monitoreada, internación en la casa.",
    duration: "Según caso",
    image: "/images/lab.jpg",
    imageAlt: "Laboratorio de la clínica, microscopio de bronce sobre mármol",
    summary:
      "Cirugías de tejidos blandos, esterilización y procedimientos programados. Un anestesista en cada inducción. Un lugar para despertar sin prisa.",
    body: [
      "Operamos acá. No derivamos para lo que sabemos hacer bien: esterilizaciones, masas, gastrointestinal, vejiga, hernias, heridas complejas.",
      "Antes de dormir a un animal hay laboratorio, consentimiento informado y un plan de dolor. Durante, monitoreo continuo. Después, internación con alguien de guardia — no una jaula a oscuras.",
    ],
    includes: [
      "Evaluación prequirúrgica y laboratorio",
      "Anestesia inhalatoria monitoreada",
      "Analgesia multimodal",
      "Internación hasta el alta",
    ],
    forWho: "Cirugías programadas y casos que llegan de urgencia y se pueden resolver acá.",
  },
  {
    slug: "diagnostico",
    name: "Diagnóstico por imágenes",
    short: "Ver adentro, con calma, sin mandar a otro edificio.",
    duration: "30–50 min",
    image: "/images/lab.jpg",
    imageAlt: "Mesada de laboratorio con frascos de vidrio y microscopio",
    summary:
      "Radiografía digital y ecografía en el mismo consultorio. Menos traslado, menos estrés, más contexto clínico.",
    body: [
      "Tener la imagen en el mismo lugar donde está el clínico cambia el diagnóstico: no es un PDF suelto, es una conversación entre quienes conocen al animal.",
      "Ecografía abdominal, cardíaca y de tejidos blandos. Radiografía de tórax, abdomen y aparato locomotor. Informes el mismo día.",
    ],
    includes: [
      "Radiografía digital",
      "Ecografía abdominal y cardíaca",
      "Informe el mismo día",
      "Discusión del caso con el clínico de cabecera",
    ],
    forWho: "Cojeras, vómitos, soplos, controles oncológicos, prequirúrgicos.",
  },
  {
    slug: "laboratorio",
    name: "Laboratorio propio",
    short: "Sangre, orina y citología sin esperar al correo.",
    duration: "Mismo día",
    image: "/images/lab.jpg",
    imageAlt: "Laboratorio de Alba con microscopio y reactivos",
    summary:
      "Hematología, bioquímica, orina y citología en casa. Los resultados urgentes no viajan por moto.",
    body: [
      "En una urgencia, esperar un laboratorio externo es perder horas. Por eso tenemos equipo propio para lo que no puede esperar: hematocrito, glucosa, función renal y hepática, orina.",
      "Lo que requiere un especialista — histopatología, cultivos, paneles complejos — sale con un laboratorio de referencia, con el seguimiento de siempre.",
    ],
    includes: [
      "Hematología y bioquímica",
      "Orina completa",
      "Citología de piel y masas",
      "Resultados el mismo día en urgencias",
    ],
    forWho: "Chequeos prequirúrgicos, controles de enfermos crónicos y guardia.",
  },
  {
    slug: "odontologia",
    name: "Odontología",
    short: "La boca se trata dormido, bien, o no se trata.",
    duration: "2–3 h",
    image: "/images/rabbit.jpg",
    imageAlt: "Manos de veterinaria examinando con cuidado a un conejo",
    summary:
      "Limpieza, radiografías dentales y extracciones bajo anestesia. Nada de “limpieza consciente”: duele y no sirve.",
    body: [
      "El sarro que se ve es la parte chica. Lo que enferma está bajo la encía. Por eso limpiamos con ultrasonido, sondamos, radiografiamos y extraemos lo que no tiene hueso que lo sostenga.",
      "El animal se va con un plan de casa: cepillado, dieta, controles. El aliento que vuelve a los tres meses no es “normal de perro”: es enfermedad.",
    ],
    includes: [
      "Anestesia y monitoreo",
      "Limpieza y pulido",
      "Radiografías intraorales",
      "Extracciones cuando hace falta",
    ],
    forWho: "Halitosis, sarro, dificultad para comer, gatos con gingivitis, conejos con maloclusión.",
  },
  {
    slug: "internacion",
    name: "Internación",
    short: "Camas, no jaulas. Alguien despierto a las tres de la mañana.",
    duration: "Según evolución",
    image: "/images/dog-sleep.jpg",
    imageAlt: "Perro dormido sobre ropa de lino en internación",
    summary:
      "Fluidos, dolor, alimentación y compañía. La internación de Alba está pensada para que un animal enfermo descanse de verdad.",
    body: [
      "Internamos cuando el tratamiento en casa no alcanza: deshidratación, postoperatorio, crisis de gatos diabéticos, pancreatitis, politraumatismos.",
      "Hay guardia presencial las 24 horas. Se informa a la familia dos veces al día, o cuando algo cambia. Las visitas se coordinan: no es un hotel, es un hospital chico.",
    ],
    includes: [
      "Guardia médica 24 h",
      "Fluidoterapia y analgesia",
      "Alimentación asistida si hace falta",
      "Parte diario a la familia",
    ],
    forWho: "Postoperatorios, urgencias que no se resuelven en una consulta, crónicos descompensados.",
  },
  {
    slug: "urgencias",
    name: "Urgencias 24 h",
    short: "La puerta de verde se abre de noche. Llame antes de salir.",
    duration: "Inmediato",
    image: "/images/night.jpg",
    imageAlt: "Fachada de Alba de noche, con farol de bronce y puerta verde",
    summary:
      "Guardia las veinticuatro horas. El protocolo es simple: llame, cuente qué pasa, le decimos si hay que venir ahora.",
    body: [
      "Una urgencia de verdad no espera al lunes. Intoxicaciones, atropellos, distocias, disnea, convulsiones, distensión abdominal, trauma: venimos.",
      "Llame al 11 4800 2140 antes de salir. Así preparamos mesa, oxígeno o quirofano, y le decimos qué hacer en el camino. Si no es urgente, se lo decimos también — y le damos un turno.",
    ],
    includes: [
      "Triaje telefónico inmediato",
      "Estabilización y diagnóstico de guardia",
      "Cirugía de urgencia cuando corresponde",
      "Internación de la noche",
    ],
    forWho: "Cualquier animal que no puede esperar a la consulta del día.",
  },
  {
    slug: "felinos",
    name: "Medicina felina",
    short: "Un consultorio que no huele a perro.",
    duration: "40 min",
    image: "/images/cat-exam.jpg",
    imageAlt: "Gato atigrado siendo auscultado en la mesa de consulta",
    summary:
      "Horarios y sala separados para gatos. Menos estrés, mejores exámenes, dueños que vuelven.",
    body: [
      "Los gatos mienten con el cuerpo: se enferman en silencio. Por eso el consultorio felino no comparte olores ni ladridos, y la visita dura lo que el gato necesita, no lo que el reloj impone.",
      "Trabajamos con feromonas, toallas propias, y un manejo de bajo estrés. Si hay que sedar, se habla. Si hay que internar, hay una sala sin perros.",
    ],
    includes: [
      "Turnos en franja felina",
      "Manejo de bajo estrés",
      "Chequeos de enfermedad renal y tiroides",
      "Orientación de conducta y arenero",
    ],
    forWho: "Gatos de departamento, seniors, y cualquier felino que odia “el veterinario”.",
  },
  {
    slug: "exoticos",
    name: "Exóticos y aves",
    short: "Conejos, hurones y psitácidas no son perros chicos.",
    duration: "40 min",
    image: "/images/rabbit.jpg",
    imageAlt: "Examen delicado de un conejo blanco sobre lino",
    summary:
      "Medicina específica para lagomorfos, mustélidos y aves de compañía. Dieta, dientes, y las cosas que un clínico general suele pasar por alto.",
    body: [
      "Un conejo con menos apetito es una urgencia. Un loro que arranca plumas está diciendo algo. Acá no improvisamos protocolos de perro sobre un metabolismo distinto.",
      "Revisamos dentición, buche, piel, peso al gramo. Hablamos de jaula, heno, calcio, vuelo y compañía. Si hay que operar, el anestesista sabe el riesgo de cada especie.",
    ],
    includes: [
      "Consulta específica por especie",
      "Odontología de conejo",
      "Orientación de hábitat y dieta",
      "Cirugía de tejidos blandos en exóticos",
    ],
    forWho: "Conejos, hurones, cobayos y aves de compañía.",
  },
  {
    slug: "nutricion",
    name: "Nutrición clínica",
    short: "Comer bien es un tratamiento, no un consejo de pasillo.",
    duration: "40 min",
    image: "/images/rabbit.jpg",
    imageAlt: "Manos sosteniendo con cuidado a un conejo durante la consulta",
    summary:
      "Planes para obesidad, riñón, estómago sensible y animales que “no comen nada”. Con números, no con marcas de moda.",
    body: [
      "Calculamos requerimiento, revisamos lo que come de verdad — incluyendo las galletitas de la suegra — y armamos un plan que se pueda cumplir en una casa real.",
      "Si hace falta dieta casera, se escribe con receta. Si hace falta comercial, se elige por indicación, no por el envase del pet shop.",
    ],
    includes: [
      "Evaluación de condición corporal",
      "Plan escrito de ración",
      "Seguimiento a 30 y 90 días",
      "Ajuste en enfermedad renal, hepática o GI",
    ],
    forWho: "Sobrepeso, picky eaters, enfermos crónicos, cachorros de razas grandes.",
  },
  {
    slug: "cardiologia",
    name: "Cardiología",
    short: "Un soplo no se “mira un tiempo”. Se mide.",
    duration: "50 min",
    image: "/images/cat-exam.jpg",
    imageAlt: "Auscultación de un gato en el consultorio",
    summary:
      "Ecocardiograma, electrocardiograma y un plan de vida para corazones que ya no son jóvenes — o que nunca lo fueron.",
    body: [
      "Un soplo en un cachorro no es lo mismo que en un schnauzer de doce años. Clasificamos, medimos, y solo medicamos cuando hay que medicar.",
      "Los controles son periódicos y humanos: le explicamos qué significa cada número y qué signos, en casa, merecen un llamado a las dos de la mañana.",
    ],
    includes: [
      "Auscultación y estadificación",
      "Ecocardiograma",
      "Electrocardiograma",
      "Plan de medicación y seguimiento",
    ],
    forWho: "Soplos, tos, desmayos, razas predispuestas, prequirúrgicos de riesgo.",
  },
];

export const team = [
  {
    slug: "emilia-rivas",
    name: "Dra. Emilia Rivas",
    role: "Directora médica · Cirugía",
    image: "/images/team-emilia.jpg",
    imageAlt: "Retrato de la Dra. Emilia Rivas en el consultorio",
    focus: ["Cirugía de tejidos blandos", "Oncología quirúrgica", "Dirección clínica"],
    bio: "Fundó Alba en 2014, después de diez años en hospitales de alta complejidad. Cree que una clínica chica puede operar como un hospital si el criterio es bueno y el tiempo no se vende de a diez minutos. Opera, dirige y todavía hace consulta los martes.",
  },
  {
    slug: "tomas-herrera",
    name: "Dr. Tomás Herrera",
    role: "Clínica general · Medicina felina",
    image: "/images/team-tomas.jpg",
    imageAlt: "Retrato del Dr. Tomás Herrera junto a la ventana del consultorio",
    focus: ["Medicina interna", "Felinos", "Geriatría"],
    bio: "Se formó en medicina interna y se quedó con los gatos: dice que son el examen más honesto, porque no fingen bienestar. Atiende la franja felina de las mañanas y los casos crónicos que necesitan un mismo médico a lo largo de los años.",
  },
  {
    slug: "ines-palacio",
    name: "Dra. Inés Palacio",
    role: "Imágenes · Cardiología",
    image: "/images/team-ines.jpg",
    imageAlt: "Retrato de la Dra. Inés Palacio con estetoscopio",
    focus: ["Ecografía", "Radiología", "Cardiología"],
    bio: "Hace el puente entre lo que se ve y lo que se decide. Informa las imágenes el mismo día, en la misma sala, con el clínico al lado. Dice que un informe que llega a la semana es un diagnóstico que llegó tarde.",
  },
  {
    slug: "sofia-mandel",
    name: "Dra. Sofía Mandel",
    role: "Anestesia · Internación",
    image: "/images/team-sofia.jpg",
    imageAlt: "Retrato de la Dra. Sofía Mandel en la clínica",
    focus: ["Anestesiología", "Cuidados intensivos", "Dolor"],
    bio: "Está en cada inducción y en cada noche rara. Armó el protocolo de dolor de Alba y la guardia de internación. Si un animal se queda a dormir, hay un médico despierto — no un teléfono de guardia pasiva.",
  },
] as const;

export const visits = [
  {
    n: "01",
    title: "Escribe o llame",
    text: "Pida turno por la web, WhatsApp o teléfono. Si es urgente, dígalo: el triaje no es un formulario.",
  },
  {
    n: "02",
    title: "Llegue cinco minutos antes",
    text: "Hay agua, una banca de roble y silencio. Traiga comida de casa si el animal come algo particular, y estudios viejos si los tiene.",
  },
  {
    n: "03",
    title: "La consulta dura lo que tiene que durar",
    text: "Cuarenta minutos de base. El médico se presenta, examina, explica. Usted pregunta. Nadie lo apura con la puerta entreabierta.",
  },
  {
    n: "04",
    title: "Se va con un plan",
    text: "Un escrito claro, honorarios dichos antes de cualquier procedimiento, y un WhatsApp de la clínica si surge una duda a la noche.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Llevé a Otto con un soplo que “había que mirar”. En una hora había eco, un número y un plan. Nadie me vendió un miedo.",
    name: "Clara M.",
    detail: "Otto, golden · 7 años",
  },
  {
    quote:
      "Mita odia los veterinarios. En Alba hay un horario solo para gatos y una toalla que no huele a perro. Volvió a casa y comió. Eso, para un gato, es un milagro clínico.",
    name: "Julián P.",
    detail: "Mita, europea · 11 años",
  },
  {
    quote:
      "Operaron a Lima un sábado a la noche, después de un atropello. Me llamaron tres veces. A la mañana estaba sentada. No es marketing: es gente despierta.",
    name: "Sofía R.",
    detail: "Lima, mestiza · 4 años",
  },
  {
    quote:
      "Nuestro conejo dejó de comer un domingo. Les escribí por WhatsApp y nos dijeron que fuéramos ya. Esa frase, en un conejo, vale un animal.",
    name: "Andrés y Vale",
    detail: "Pan, conejo cabeza de león · 3 años",
  },
] as const;

export const faqs = [
  {
    q: "¿Cómo pido un turno?",
    a: "Por esta web, por WhatsApp al 11 4800 2140 o por teléfono. Le confirmamos horario. Si el caso no puede esperar, dígalo: hay triaje de guardia las 24 horas.",
  },
  {
    q: "¿Atienden urgencias de noche?",
    a: "Sí. La clínica tiene guardia presencial las veinticuatro horas. Llame antes de salir: preparamos la mesa y le decimos qué hacer en el camino.",
  },
  {
    q: "¿Qué animales atienden?",
    a: "Perros, gatos, conejos, hurones y aves de compañía. Si su animal es de otra especie, consulte: a veces derivamos a un colega, y se lo decimos con nombre y teléfono.",
  },
  {
    q: "¿Cuánto dura la consulta?",
    a: "Cuarenta minutos de base. Los controles de prevención, treinta. Cardiología e imágenes, hasta cincuenta. No recortamos el tiempo para “entrar uno más”.",
  },
  {
    q: "¿Puedo ir sin turno?",
    a: "En el horario de consultorio, solo si hay un hueco. En guardia, sí: las urgencias no piden hora. Siempre es mejor llamar.",
  },
  {
    q: "¿Cómo son los honorarios?",
    a: "La consulta tiene un arancel fijo, que le decimos al pedir el turno. Estudios, cirugías e internación se presupuestan antes de hacerlos. No hay sorpresas en la caja.",
  },
  {
    q: "¿Qué llevo a la primera visita?",
    a: "Al animal, su comida habitual si puede necesitar quedarse, estudios anteriores y una lista de lo que come — incluyendo premios. Si es gato, el transportín más grande que tenga.",
  },
  {
    q: "¿Hay estacionamiento?",
    a: "Calle con estacionamiento medido en Gorriti. A tres cuadras, playa paga. Si viene en taxi o remis, la puerta verde está en la esquina.",
  },
] as const;

export const values = [
  {
    title: "Tiempo",
    text: "Una consulta de diez minutos es una consulta a medias. El reloj no manda: manda el animal que tiene adelante.",
  },
  {
    title: "Claridad",
    text: "Le decimos lo que sabemos, lo que no, y cuánto cuesta. El miedo no es un método clínico.",
  },
  {
    title: "Presencia",
    text: "Guardia de verdad. Internación con alguien despierto. Un teléfono que atiende a las tres de la mañana.",
  },
  {
    title: "Criterio",
    text: "Pedimos el estudio que cambia una decisión. No el que adorna una carpeta.",
  },
] as const;

export const stats = [
  { value: "2014", label: "El año en que abrimos la puerta verde" },
  { value: "40 min", label: "Duración de una consulta clínica" },
  { value: "24 h", label: "Guardia presencial, todos los días" },
  { value: "4", label: "Médicos, un mismo criterio" },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function whatsappUrl(message?: string) {
  const text = message ?? "Hola, quiero pedir un turno en Alba.";
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
}
