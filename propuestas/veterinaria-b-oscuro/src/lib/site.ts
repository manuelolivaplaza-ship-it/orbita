export const site = {
  name: "Farol",
  legalName: "Farol Hospital Veterinario SpA",
  tagline: "La luz que queda prendida.",
  description:
    "Hospital veterinario 24 horas en Ñuñoa, Santiago. Consulta, cirugía, laboratorio, imágenes e internación. Guardia presencial todas las noches. Irarrázaval 2940, a cuatro minutos del metro Ñuñoa.",
  url: "https://farol.cl",
  rut: "76.841.203-5",
  founded: 2018,
  years: 8,
  vets: 5,
  records: "14.200",
  consultMinutes: 40,
  email: "hola@farol.cl",
  phone: "+56 9 7618 4402",
  phoneHref: "tel:+56976184402",
  whatsapp:
    "https://wa.me/56976184402?text=Hola%2C%20escribo%20desde%20la%20web%20de%20Farol.",
  whatsappUrgencia:
    "https://wa.me/56976184402?text=Urgencia%3A%20necesito%20hablar%20con%20la%20guardia%20de%20Farol.",
  address: {
    line: "Av. Irarrázaval 2940",
    city: "Ñuñoa",
    region: "Región Metropolitana",
    country: "Chile",
    postal: "7750000",
    maps: "https://maps.google.com/?q=Av.+Irarrazaval+2940+Nunoa+Santiago",
    mapsEmbed:
      "https://www.google.com/maps?q=Av.+Irarrazaval+2940,+Nunoa,+Santiago&output=embed",
  },
  metro: "Metro Ñuñoa (L3 / L6) · 4 min a pie",
  parking: "Estacionamiento propio detrás, por José Domingo Cañas",
  instagram: "https://instagram.com/farol.vet",
  colegio: "Colegio Médico Veterinario de Chile",
  ley: "Ley 21.020 de tenencia responsable",
  hours: "Abierto las 24 horas, los 365 días",
  hoursShort: "24 h",
  consultHours: "Consulta agendada: 8:00 a 20:00",
  nightHours: "Guardia: 20:00 a 8:00",
} as const;

export const nav = [
  { href: "/hospital", label: "El hospital" },
  { href: "/servicios", label: "Servicios" },
  { href: "/urgencias", label: "Urgencias" },
  { href: "/internacion", label: "Internación" },
  { href: "/equipo", label: "Equipo" },
] as const;

export const stats = [
  { value: "24 h", label: "Guardia presencial, todas las noches" },
  { value: "40 min", label: "Consulta diurna, de verdad" },
  { value: "5", label: "Médicos que se hablan entre turnos" },
  { value: "8 años", label: "En la misma esquina de Irarrázaval" },
] as const;

export const trust = [
  "Colegio Médico Veterinario de Chile",
  "Ley 21.020 · chip y registro",
  "Laboratorio propio",
  "Metro Ñuñoa · L3 / L6",
] as const;

export type Service = {
  slug: string;
  folio: string;
  name: string;
  short: string;
  lead: string;
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: string[];
  includes: string[];
  forWho: string;
  when: string[];
};

export const services: Service[] = [
  {
    slug: "consulta",
    folio: "01",
    name: "Consulta clínica",
    short: "Cuarenta minutos. Un médico. Un plan escrito.",
    lead: "No es un pasillo con bata. Es el momento en que se decide bien.",
    duration: "40 min",
    price: "$34.900",
    image: "/images/consultorio.jpg",
    imageAlt: "Consultorio de Farol de noche, mesa de acero y lámpara cálida",
    featured: true,
    body: [
      "Reservamos cuarenta minutos porque un animal no se deja leer en diez. Historia, examen físico, lo que cambió en casa, lo que come de verdad — incluyendo las galletas de la abuela.",
      "Al final te llevas un escrito: qué vimos, qué descartamos, qué sigue. Si hace falta laboratorio o imagen, se propone con el porqué. Nunca como un combo automático.",
    ],
    includes: [
      "Examen físico sistemático",
      "Ficha clínica digital",
      "Plan escrito para llevar",
      "Tiempo para preguntas",
    ],
    forWho: "Controles, síntomas nuevos, segunda opinión o la primera visita a Farol.",
    when: [
      "Algo cambió y no sabes si es grave",
      "Llegó un cachorro o un gato nuevo a la casa",
      "Quieres un médico de cabecera, no una ruleta",
    ],
  },
  {
    slug: "urgencias",
    folio: "02",
    name: "Urgencias 24 h",
    short: "La puerta no se cierra. Llama antes de salir.",
    lead: "Una urgencia de verdad no espera al lunes. Tampoco a las nueve.",
    duration: "Inmediato",
    price: "Desde $48.900 · noche $64.900",
    image: "/images/fachada.jpg",
    imageAlt: "Entrada de Farol de noche, farol de bronce sobre la puerta",
    featured: true,
    body: [
      "Atropello, disnea, convulsión, abdomen tenso, intoxicación, distocia, un gato que no come: ven. La guardia es presencial, no un teléfono desviado a otra comuna.",
      "Llama o escribe por WhatsApp antes de salir. Así preparamos oxígeno, mesa o quirófano, y te decimos qué hacer en el camino. Si no es urgente, también te lo decimos — y te damos una hora.",
    ],
    includes: [
      "Triaje telefónico inmediato",
      "Estabilización y diagnóstico de guardia",
      "Cirugía de urgencia cuando corresponde",
      "Internación la misma noche",
    ],
    forWho: "Cualquier animal que no puede esperar a la consulta del día.",
    when: [
      "No se para, no respira bien o convulsionó",
      "Un gato dejó de comer o de ir al arenero",
      "Comió algo que no debía, o lo atropellaron",
    ],
  },
  {
    slug: "cirugia",
    folio: "03",
    name: "Cirugía",
    short: "Quirófano propio. Anestesia monitoreada. Despertar sin prisa.",
    lead: "Operamos acá. No derivamos para lo que sabemos hacer bien.",
    duration: "Según caso",
    price: "Presupuesto por escrito",
    image: "/images/quirofano.jpg",
    imageAlt: "Quirófano de Farol, lámpara quirúrgica sobre mesa de acero",
    featured: true,
    body: [
      "Esterilizaciones, masas, gastrointestinal, vejiga, hernias, heridas complejas. Antes de dormir a un animal hay laboratorio, consentimiento y un plan de dolor.",
      "Durante, monitoreo continuo. Después, internación con alguien despierto — no una jaula a oscuras. Te llamamos cuando sale de pabellón y otra vez cuando come.",
    ],
    includes: [
      "Evaluación prequirúrgica y laboratorio",
      "Anestesia inhalatoria monitoreada",
      "Analgesia multimodal",
      "Internación hasta el alta",
    ],
    forWho: "Cirugías programadas y urgencias que se pueden resolver en esta casa.",
    when: [
      "Hay una masa, una hernia o una esterilización pendiente",
      "Llegó de urgencia y hay que operar esta noche",
      "Quieres un anestesista en la inducción, no un protocolo genérico",
    ],
  },
  {
    slug: "internacion",
    folio: "04",
    name: "Internación",
    short: "Alguien despierto a las tres. Un parte a la familia.",
    lead: "La ronda de las 03:00 no es un lema. Es un médico en el pasillo.",
    duration: "Según evolución",
    price: "Desde $89.000 / día",
    image: "/images/internacion.jpg",
    imageAlt: "Sala de internación de Farol, camas y luz baja de noche",
    featured: true,
    body: [
      "Internamos cuando el tratamiento en casa no alcanza: deshidratación, postoperatorio, crisis renal, pancreatitis, politraumatismo. Fluidos, dolor, alimentación, compañía.",
      "Hay guardia médica las 24 horas. Informamos dos veces al día, o cuando algo cambia. Las visitas se coordinan: no es un hotel, es un hospital chico.",
    ],
    includes: [
      "Guardia médica 24 h",
      "Fluidoterapia y analgesia",
      "Alimentación asistida si hace falta",
      "Parte diario a la familia",
    ],
    forWho: "Postoperatorios, urgencias que no cierran en una consulta, crónicos descompensados.",
    when: [
      "En casa ya no come, no toma o no se para",
      "Salió de pabellón y necesita la noche",
      "Un gato diabético o renal se descompensó",
    ],
  },
  {
    slug: "imagenes",
    folio: "05",
    name: "Imágenes",
    short: "Ver adentro, en el mismo edificio, el mismo día.",
    lead: "Un PDF que llega el viernes no es un diagnóstico. Es una espera.",
    duration: "30–50 min",
    price: "Eco $52.900 · Rx $38.900",
    image: "/images/lab.jpg",
    imageAlt: "Mesada de diagnóstico en Farol, microscopio y lámpara ámbar",
    body: [
      "Radiografía digital y ecografía en el mismo hospital. El clínico que conoce al animal mira la imagen con quien la toma. Menos traslado, menos estrés, más contexto.",
      "Eco abdominal, cardíaca y de tejidos blandos. Rx de tórax, abdomen y aparato locomotor. Informe el mismo día.",
    ],
    includes: [
      "Radiografía digital",
      "Ecografía abdominal y cardíaca",
      "Informe el mismo día",
      "Discusión con el médico de cabecera",
    ],
    forWho: "Cojeras, vómitos, soplos, controles oncológicos, prequirúrgicos.",
    when: [
      "Hay un soplo, una tos o un abdomen raro",
      "Hay que operar y hace falta ver adentro",
      "Un cojera no cierra con el examen",
    ],
  },
  {
    slug: "laboratorio",
    folio: "06",
    name: "Laboratorio propio",
    short: "Sangre y orina sin esperar a que llegue una moto.",
    lead: "En una urgencia, el correo del laboratorio es tiempo que el animal no tiene.",
    duration: "Mismo día",
    price: "Según panel",
    image: "/images/lab.jpg",
    imageAlt: "Laboratorio de Farol de noche, microscopio bajo lámpara",
    body: [
      "Hematología, bioquímica, orina y citología acá. Hematocrito, glucosa, función renal y hepática no viajan a otro barrio cuando son de guardia.",
      "Lo que requiere un especialista — histopatología, cultivos, paneles complejos — sale a un laboratorio de referencia, con el seguimiento de siempre.",
    ],
    includes: [
      "Hematología y bioquímica",
      "Orina completa",
      "Citología de piel y masas",
      "Resultados el mismo día en urgencias",
    ],
    forWho: "Chequeos prequirúrgicos, crónicos y guardia.",
    when: [
      "Hay que operar mañana",
      "Un animal llegó descompensado de noche",
      "Un control de riñón o hígado no puede esperar una semana",
    ],
  },
  {
    slug: "felinos",
    folio: "07",
    name: "Medicina felina",
    short: "Un consultorio que no huele a perro.",
    lead: "Los gatos se enferman en silencio. El lugar tiene que callar también.",
    duration: "40 min",
    price: "$36.900",
    image: "/images/gato.jpg",
    imageAlt: "Gato atigrado en la mesa de consulta de Farol",
    featured: true,
    body: [
      "Sala de espera separada, feromonas, toallas propias, manejo de bajo estrés. La franja felina es de mañana; si tu gato solo viaja de noche, también hay hora.",
      "Chequeos de riñón, tiroides y presión. Si hay que sedar, se habla. Si hay que internar, hay una sala sin ladridos.",
    ],
    includes: [
      "Hora en franja felina",
      "Manejo de bajo estrés",
      "Chequeo renal y tiroideo",
      "Orientación de conducta y arenero",
    ],
    forWho: "Gatos de departamento, seniors, y cualquier felino que odia «el veterinario».",
    when: [
      "Hace un año que no lo sacas porque se estresa",
      "Bebe más, adelgazó o dejó el arenero",
      "Quieres un médico que no lo trate como un perro chico",
    ],
  },
  {
    slug: "prevencion",
    folio: "08",
    name: "Prevención y Ley Cholito",
    short: "El calendario de este animal, no el afiche de la pared.",
    lead: "Vacuna, chip y registro. Lo que pide la ley, y lo que pide el cuerpo.",
    duration: "30 min",
    price: "Consulta + plan",
    image: "/images/perro.jpg",
    imageAlt: "Perro mestizo en consulta, manos del médico sobre el pecho",
    body: [
      "Vacunas según edad, especie y si sale a la plaza Ñuñoa o vive en un depto de Irarrázaval. No vacunamos de más ni de menos.",
      "Microchip y orientación para el Registro Nacional de Mascotas (Ley 21.020). Desparasitación, peso, dientes. Lo que, si se ve a tiempo, no se vuelve una noche en urgencias.",
    ],
    includes: [
      "Plan de vacunas individual",
      "Chip y guía de registro",
      "Antiparasitarios internos y externos",
      "Recordatorio por WhatsApp",
    ],
    forWho: "Cachorros, adultos sanos y animales que nunca tuvieron ficha.",
    when: [
      "Llegó un cachorro o adoptaste en la calle",
      "Falta el chip o el registro de la municipalidad",
      "El calendario de vacunas es un misterio",
    ],
  },
  {
    slug: "odontologia",
    folio: "09",
    name: "Odontología",
    short: "La boca se trata dormido, bien, o no se trata.",
    lead: "El sarro que se ve es la parte chica. Lo que enferma está bajo la encía.",
    duration: "2–3 h",
    price: "Desde $165.000",
    image: "/images/consultorio.jpg",
    imageAlt: "Consultorio de Farol preparado para un procedimiento",
    body: [
      "Limpieza con ultrasonido, sondaje, radiografías intraorales y extracciones bajo anestesia. Nada de «limpieza consciente»: duele y no sirve.",
      "El animal se va con un plan de casa. El aliento que vuelve a los tres meses no es «normal de perro»: es enfermedad.",
    ],
    includes: [
      "Anestesia y monitoreo",
      "Limpieza y pulido",
      "Radiografías intraorales",
      "Extracciones cuando hace falta",
    ],
    forWho: "Halitosis, sarro, dificultad para comer, gatos con gingivitis.",
    when: [
      "El aliento cambió y «es de perro»",
      "Dejó de masticar de un lado",
      "Un gato babea o deja la comida dura",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Vet = {
  slug: string;
  name: string;
  short: string;
  role: string;
  image: string;
  focus: string[];
  education: string[];
  bio: string[];
  night?: boolean;
};

export const team: Vet[] = [
  {
    slug: "antonia-valdes",
    name: "Dra. Antonia Valdés",
    short: "Antonia",
    role: "Directora médica · Cirugía",
    image: "/images/antonia.jpg",
    focus: ["Cirugía de tejidos blandos", "Oncología quirúrgica", "Dirección clínica"],
    education: [
      "MV, Universidad de Chile",
      "Diplomado en cirugía de tejidos blandos, U. Católica",
      "Colmevet 14.208",
    ],
    bio: [
      "Fundó Farol en 2018, después de años de guardia en hospitales donde la noche era un pasillo con un interno solo. Quería un hospital chico que operara como uno grande: criterio, laboratorio, quirófano, y alguien despierto a las tres.",
      "Sigue operando los martes y los jueves. Los domingos de noche, a veces, también. Dice que una clínica que cierra a las ocho no conoce a sus pacientes.",
    ],
  },
  {
    slug: "mateo-lagos",
    name: "Dr. Mateo Lagos",
    short: "Mateo",
    role: "Medicina interna · Guardia",
    image: "/images/mateo.jpg",
    focus: ["Medicina interna", "Urgencias", "Geriatría"],
    education: [
      "MV, Universidad de Concepción",
      "Residencia en medicina interna, Hospital Clínico Veterinario U. de Chile",
      "Colmevet 18.441",
    ],
    night: true,
    bio: [
      "Hace la internación y gran parte de las noches. Se quedó con los casos que no cierran en una consulta: pancreatitis, riñón, el perro viejo que «de repente» no se para.",
      "Es quien llama a las 23:40 cuando el número cambió. Prefiere una conversación difícil a un mensaje al día siguiente.",
    ],
  },
  {
    slug: "isidora-munoz",
    name: "Dra. Isidora Muñoz",
    short: "Isidora",
    role: "Medicina felina",
    image: "/images/isidora.jpg",
    focus: ["Medicina felina", "Conducta", "Enfermedad renal"],
    education: [
      "MV, Universidad de Chile",
      "Formación ISFM en manejo de bajo estrés",
      "Colmevet 21.073",
    ],
    bio: [
      "Armó la franja felina porque se cansó de examinar gatos que ya habían perdido la consulta en la sala de espera. Sala propia, olor propio, tiempo propio.",
      "Atiende las mañanas y los controles de seniors. Dice que un gato que come al volver a casa es el único alta que importa.",
    ],
  },
  {
    slug: "nicolas-araya",
    name: "Dr. Nicolás Araya",
    short: "Nicolás",
    role: "Imágenes · Cardiología",
    image: "/images/nicolas.jpg",
    focus: ["Ecografía", "Radiología", "Cardiología"],
    education: [
      "MV, Universidad Austral",
      "Diplomado en diagnóstico por imágenes",
      "Colmevet 17.990",
    ],
    bio: [
      "Hace el puente entre lo que se ve y lo que se decide. Informa el mismo día, en la misma sala, con el clínico al lado.",
      "Un soplo en un cachorro no es lo mismo que en un schnauzer de doce años. Clasifica, mide, y solo medica cuando hay que medicar.",
    ],
  },
  {
    slug: "trinidad-soto",
    name: "Dra. Trinidad Soto",
    short: "Trinidad",
    role: "Anestesia · UCI",
    image: "/images/trinidad.jpg",
    focus: ["Anestesiología", "Cuidados intensivos", "Dolor"],
    education: [
      "MV, Universidad de Chile",
      "Diplomado en anestesiología y analgesia",
      "Colmevet 16.552",
    ],
    night: true,
    bio: [
      "Está en cada inducción y en cada noche rara. Armó el protocolo de dolor de Farol y la pizarra de internación.",
      "Si un animal se queda a dormir, hay un médico despierto. No un teléfono de guardia pasiva en otro barrio.",
    ],
  },
];

export function getVet(slug: string) {
  return team.find((v) => v.slug === slug);
}

export const visits = [
  {
    n: "01",
    title: "Escribe o llama",
    text: "Pide hora por la web o WhatsApp. Si es urgente, dilo en la primera línea: el triaje no es un formulario.",
  },
  {
    n: "02",
    title: "Llega cinco minutos antes",
    text: "Hay agua, una banca y silencio. Trae comida de casa si come algo particular, y exámenes viejos si los tienes.",
  },
  {
    n: "03",
    title: "La consulta dura lo que tiene que durar",
    text: "Cuarenta minutos de base. El médico se presenta, examina, explica. Tú preguntas. Nadie apura con la puerta entreabierta.",
  },
  {
    n: "04",
    title: "Te vas con un plan",
    text: "Un escrito claro, precios dichos antes de cualquier procedimiento, y un WhatsApp de la clínica si surge una duda a la noche.",
  },
] as const;

export const nightDay = [
  {
    k: "Día",
    hours: "8:00 – 20:00",
    title: "Consulta, imágenes, cirugías programadas.",
    text: "La casa se llena de horas agendadas. Gatos en la franja de la mañana. Perros después. Laboratorio corriendo. Quirófano en la tarde.",
  },
  {
    k: "Noche",
    hours: "20:00 – 8:00",
    title: "Guardia, internación, lo que no puede esperar.",
    text: "Menos gente en la vereda, la misma mesa. Un médico en el pasillo. La ronda de las tres. El farol de la puerta sigue prendido.",
  },
] as const;

export const ward = [
  {
    name: "Lola",
    detail: "Mestiza · 8 años",
    note: "Pancreatitis. Fluidos, analgesia, nada por boca hasta el parte de las 08:00.",
  },
  {
    name: "Momo",
    detail: "Europeo · 14 años",
    note: "Crisis renal. UCI felina, sin ladridos. Familia avisada a las 22:10.",
  },
  {
    name: "Tata",
    detail: "Frenchie · 3 años",
    note: "Postoperatorio de vía aérea. Oxígeno, vigilancia de temperatura.",
  },
] as const;

export const tariffs = [
  { item: "Consulta clínica (40 min)", price: "$34.900" },
  { item: "Consulta felina", price: "$36.900" },
  { item: "Urgencia 8:00–20:00", price: "$48.900" },
  { item: "Urgencia 20:00–8:00", price: "$64.900" },
  { item: "Ecografía abdominal", price: "$52.900" },
  { item: "Radiografía (por placa)", price: "$38.900" },
  { item: "Vacuna séxtuple", price: "$24.900" },
  { item: "Triple felina", price: "$22.900" },
  { item: "Microchip + guía de registro", price: "$28.900" },
  { item: "Internación / día, desde", price: "$89.000" },
] as const;

export const testimonials = [
  {
    quote:
      "Llevé a Otto a las 2:40 con un abdomen duro. Me atendieron en el teléfono, me dijeron que saliera ya, y a las 3:10 estaba en mesa. Nadie me vendió un miedo: me dijeron lo que era.",
    name: "Camila R.",
    detail: "Otto, golden · Ñuñoa",
  },
  {
    quote:
      "Mita odia los veterinarios. En Farol hay una sala que no huele a perro y una toalla que es de ella. Volvió a casa y comió. Eso, para un gato, es un milagro clínico.",
    name: "Felipe A.",
    detail: "Mita, europea · 11 años",
  },
  {
    quote:
      "Operaron a Lima un sábado a la noche, después de un atropello en Grecia. Me llamaron tres veces. A la mañana estaba sentada. No es marketing: es gente despierta.",
    name: "Soledad V.",
    detail: "Lima, mestiza · 4 años",
  },
  {
    quote:
      "El chip y el registro de la municipalidad me los resolvieron en la misma consulta del cachorro. Sin filas raras. Sin «vuelva el lunes».",
    name: "Andrés y Vale",
    detail: "Pancho, mestizo · 4 meses",
  },
] as const;

export const faqs = [
  {
    q: "¿Están abiertos ahora?",
    a: "Sí. Farol no cierra. Consulta agendada de 8:00 a 20:00. Guardia las 24 horas. Si dudas, llama: el triaje es parte del trabajo.",
  },
  {
    q: "¿Tengo que pedir hora para una urgencia?",
    a: "No. Llama o escribe por WhatsApp antes de salir. Así sabemos si hay que preparar oxígeno o quirófano, y te decimos si conviene venir ahora o si puede esperar a una hora diurna.",
  },
  {
    q: "¿Atienden gatos y perros?",
    a: "Sí. Perros, gatos y, con hora, conejos. Los gatos tienen sala y franja propias. No somos un pet shop: no vendemos alimento ni correas.",
  },
  {
    q: "¿Cuánto sale la consulta?",
    a: "Consulta diurna $34.900 (40 min). Felina $36.900. Urgencia de día $48.900, de noche $64.900. Cualquier procedimiento se presupuesta por escrito antes de hacerlo.",
  },
  {
    q: "¿Puedo visitar si está internado?",
    a: "Sí, coordinado. No es un hotel: es un hospital. Las visitas se agendan para no cruzar con rondas, curaciones ni el descanso del animal. El parte llega dos veces al día, o cuando algo cambia.",
  },
  {
    q: "¿Hacen chip y registro de la Ley Cholito?",
    a: "Implantamos el microchip y te orientamos para el Registro Nacional de Mascotas (Ley 21.020). El trámite municipal lo hace el tenedor; nosotros dejamos el animal identificado y la papeleta clara.",
  },
  {
    q: "¿Aceptan transferencia y boleta?",
    a: "Efectivo, transferencia y tarjeta. Boleta siempre. No trabajamos con isapre ni Fonasa: la medicina veterinaria en Chile es particular.",
  },
  {
    q: "¿Dónde se estaciona?",
    a: "Estacionamiento propio detrás, por José Domingo Cañas. Metro Ñuñoa (L3 y L6) a cuatro minutos. De noche el farol de la puerta se ve desde la vereda de Irarrázaval.",
  },
] as const;

export const triage = [
  {
    id: "respirar",
    label: "No respira bien, se pone azul o se ahoga",
    level: "ahora" as const,
    detail:
      "Sal ahora. Si puedes, llama en el camino. En Farol preparamos oxígeno. No esperes a que «se le pase».",
  },
  {
    id: "convulsion",
    label: "Convulsionó, no se para, o está inconsciente",
    level: "ahora" as const,
    detail:
      "Urgencia. No pongas nada en la boca. Anota cuánto duró. Ven. Si convulsionó más de una vez, dilo en el teléfono.",
  },
  {
    id: "abdomen",
    label: "Abdomen duro, hinchado, o intenta vomitar sin éxito",
    level: "ahora" as const,
    detail:
      "Sobre todo en perros grandes de pecho profundo: no esperes. Puede ser dilatación-vólvulo. Llama y sal.",
  },
  {
    id: "trauma",
    label: "Atropello, caída, pelea, sangrado que no para",
    level: "ahora" as const,
    detail:
      "Inmoviliza como puedas, no le des de comer ni de tomar. Ven. Avisa para tener mesa.",
  },
  {
    id: "toxico",
    label: "Comió chocolate, uvas, rattan, medicamentos o plantas",
    level: "ahora" as const,
    detail:
      "Trae el envase si lo tienes. No induzcas vómito si no te lo pedimos. El tiempo cuenta más que el remedio de internet.",
  },
  {
    id: "gato",
    label: "Un gato no come, no orina, o se esconde hace más de 24 h",
    level: "ahora" as const,
    detail:
      "En un gato, no comer es una urgencia. No orinar, también. No es un capricho de departamento.",
  },
  {
    id: "vomito",
    label: "Vomitó una o dos veces, pero está activo y toma agua",
    level: "hora" as const,
    detail:
      "Puede esperar a una hora diurna si sigue activo. Si se pone decaído, vomita sangre o no toma: ven ahora.",
  },
  {
    id: "cojera",
    label: "Cojea, pero se apoya y no grita",
    level: "hora" as const,
    detail:
      "Pide hora. Si la pata no se apoya, hay deformidad o un hueso se ve: es urgencia.",
  },
  {
    id: "piel",
    label: "Se rasca, tiene una herida chica o un oído sucio",
    level: "hora" as const,
    detail:
      "Consulta agendada. Si hay fiebre, decaimiento o la herida es profunda, escríbenos y reevaluamos.",
  },
] as const;

export const serviceOptions = [
  "Consulta clínica",
  "Consulta felina",
  "Urgencia (quiero que me llamen)",
  "Control / vacunas / chip",
  "Cirugía (evaluación)",
  "Imágenes",
  "Odontología",
  "Otra cosa",
] as const;

export const speciesOptions = ["Perro", "Gato", "Conejo", "Otro"] as const;

export const principles = [
  {
    k: "01",
    title: "La noche es parte del hospital",
    text: "No es un recargo con la persiana abajo. Es un médico, un laboratorio y un quirófano que no se van a su casa.",
  },
  {
    k: "02",
    title: "El precio se dice antes",
    text: "Consulta con cifra. Procedimiento con presupuesto escrito. Si el plan cambia, se avisa antes de tocar.",
  },
  {
    k: "03",
    title: "Un animal, un criterio",
    text: "Cinco médicos que se pasan la ficha. No una ruleta de turnos donde cada uno empieza de cero.",
  },
] as const;
