export const site = {
  name: "Estuario",
  legalName: "Estuario Clínica Veterinaria SpA",
  tagline: "Hospital veterinario. Orilla del Calle-Calle.",
  description:
    "Hospital veterinario en Isla Teja, Valdivia. UCI las 24 horas, pabellón propio, laboratorio, medicina felina y exóticos. Consultas con hora. Estacionamiento cubierto.",
  city: "Valdivia",
  neighborhood: "Isla Teja",
  region: "Los Ríos",
  address: "Los Robles 1240",
  postal: "5090000 Valdivia",
  fullAddress: "Los Robles 1240, Isla Teja, Valdivia, Región de Los Ríos",
  phone: "63 221 8440",
  phoneHref: "tel:+56632218440",
  phoneIntl: "+56 63 221 8440",
  whatsapp: "https://wa.me/56976183340",
  whatsappDisplay: "+56 9 7618 3340",
  email: "hola@estuario.cl",
  maps: "https://maps.google.com/?q=Isla+Teja+Valdivia+Chile",
  mapsEmbed:
    "https://www.google.com/maps?q=Isla+Teja,+Valdivia,+Chile&output=embed",
  instagram: "https://instagram.com/estuariovet",
  url: "https://estuario.cl",
  rut: "76.441.208-K",
  founded: 2015,
  rating: "4,9",
  reviews: "194",
  years: "11",
  geo: { lat: -39.8142, lng: -73.2528 },
  hours: [
    { day: "Lunes a viernes", time: "9:00 – 20:00 · consultas" },
    { day: "Sábado", time: "9:00 – 14:00 · consultas" },
    { day: "Domingo y festivos", time: "UCI y urgencias 24 h" },
    { day: "Hospitalización", time: "Las 24 horas, los 365 días" },
  ],
} as const;

export const nav = [
  { href: "/clinica", label: "La clínica" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Equipo" },
  { href: "/urgencias", label: "Urgencias 24 h" },
  { href: "/hospitalizacion", label: "Internación" },
] as const;

export const stats = [
  { value: "24 h", label: "UCI y urgencias, todos los días" },
  { value: "4,9", label: "en Google · 194 reseñas" },
  { value: "11", label: "años en Isla Teja" },
  { value: "2", label: "salas de espera: perro y gato" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  lead: string;
  price: string;
  duration: string;
  species: string;
  image: string;
  body: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "preventiva",
    name: "Medicina preventiva",
    short: "Vacunas, desparasitación, microchip. El año que no se nota.",
    headline: "El año que se cuida antes",
    lead: "Calendario de vacunas según especie y edad, no según el afiche de la recepción. Sales con un plan escrito y la próxima hora agendada.",
    price: "Consulta preventiva $32.000 · vacunas según ficha",
    duration: "30–40 min",
    species: "Perro · gato · exótico",
    image: "/images/consultorio.jpg",
    body: [
      "En el sur un invierno mal vacunado se paga en julio. Trabajamos calendarios reales: séxtuple y antirrábica en perros, triple felina y leucemia cuando corresponde, y un recordatorio que no es un mensaje masivo.",
      "La primera hora incluye examen clínico, peso, condición corporal y la conversación que suele faltar: alimentación, paseo bajo lluvia, pulgas que vuelven en octubre. El microchip se implanta el mismo día si lo pides.",
    ],
    includes: [
      "Examen clínico completo",
      "Calendario de vacunas a medida",
      "Desparasitación interna y externa",
      "Microchip y certificado si procede",
    ],
    faqs: [
      {
        q: "¿Tienen las vacunas de siempre?",
        a: "Sí. Séxtuple, antirrábica, kennel cough, triple felina, leucemia felina. Te decimos cuáles hacen falta en Valdivia, no un paquete de catálogo.",
      },
      {
        q: "¿El microchip es obligatorio?",
        a: "En varias comunas ya se pide para el registro municipal. Lo implantamos, lo registramos y te dejamos el certificado. Cinco minutos.",
      },
    ],
  },
  {
    slug: "medicina-interna",
    name: "Medicina interna",
    short: "Cuando no es “un virus”. Diagnóstico con laboratorio propio.",
    headline: "Mirar adentro, no adivinar",
    lead: "Vómito que no cesa, baja de peso, sed extraña, un gato que dejó de subirse al mueble. Primero se mide. Después se nombra.",
    price: "Consulta $38.000 · exámenes aparte",
    duration: "40–60 min",
    species: "Perro · gato",
    image: "/images/lab.jpg",
    body: [
      "El laboratorio está en el mismo edificio. Hemograma, bioquímica, orina y frotis no viajan a Santiago a esperar un correo. Emilia dirige interna: si hay que internar, el pasillo hasta la UCI mide doce metros, no una ciudad.",
      "No recetamos “un antibiótico por si acaso”. Recetamos cuando el dato lo pide. El tutor se lleva un informe, no un papelito con una letra imposible.",
    ],
    includes: [
      "Consulta extendida",
      "Laboratorio in situ",
      "Plan diagnóstico por escrito",
      "Seguimiento por WhatsApp de la clínica",
    ],
    faqs: [
      {
        q: "¿Los exámenes salen el mismo día?",
        a: "Hemograma, bioquímica y orina, en horas. Cultivos y biopsias tienen otro plazo y te lo decimos antes de pinchar.",
      },
    ],
  },
  {
    slug: "cirugia",
    name: "Cirugía",
    short: "Pabellón propio. Anestesia monitorizada. Despertar en casa, o aquí.",
    headline: "Un pabellón, no un pasillo con luz",
    lead: "Esterilizaciones, tejidos blandos, traumatología. Ignacio opera con anestesista en sala y un protocolo de despertar que no se improvisa a las siete de la tarde.",
    price: "Esterilización desde $95.000 · otras cirugías con presupuesto",
    duration: "Según procedimiento",
    species: "Perro · gato · exótico",
    image: "/images/pabellon.jpg",
    body: [
      "El pabellón mira un patio de helechos, no un estacionamiento. Eso no es poesía: es menos estrés al inducir. Monitorización continua, fluidoterapia, analgesia multimodal. Si el animal tiene que quedarse, la UCI está al lado.",
      "Esterilización de gata, $95.000. Perra, según peso, desde $145.000. Criptorquidia, piometra, masas, osteosíntesis: presupuesto cerrado antes de inducir, no después.",
    ],
    includes: [
      "Evaluación preanestésica y exámenes",
      "Anestesia inhalatoria monitorizada",
      "Analgesia y alta con instrucciones",
      "Control de herida sin costo a los 10 días",
    ],
    faqs: [
      {
        q: "¿Se van el mismo día?",
        a: "Esterilizaciones sanas, sí, cuando el despertar es limpio. Si hay que internar, te llamamos. Nadie se va “porque se hace así”.",
      },
      {
        q: "¿Puedo pagar en cuotas?",
        a: "Hasta 6 cuotas en cirugías programadas. Las urgencias quirúrgicas se resuelven primero; el plan de pago, después.",
      },
    ],
  },
  {
    slug: "diagnostico",
    name: "Imagen y laboratorio",
    short: "Ecografía, rayos digitales, laboratorio. El dato, no la sospecha.",
    headline: "Ver lo que el pecho no cuenta",
    lead: "Benjamín lee ecografías y placas el mismo día. Si hay que derivar un TAC, te decimos a dónde y por qué, no te mandamos a dar vueltas.",
    price: "Ecografía desde $48.000 · radiografía desde $36.000",
    duration: "20–45 min",
    species: "Perro · gato · exótico",
    image: "/images/lab.jpg",
    body: [
      "Un animal que no habla necesita imagen. Ecografía abdominal, cardiológica de screening, radiografía digital. Las placas las ves con nosotros, no te las mandamos por un PDF borroso a las once de la noche.",
      "El laboratorio procesa hemograma, bioquímica, electrolitos, orina y citología. Cultivo y biopsia salen con plazo escrito.",
    ],
    includes: [
      "Ecografía con informe",
      "Radiografía digital",
      "Hemograma y bioquímica in situ",
      "Entrega de imágenes al tutor",
    ],
    faqs: [
      {
        q: "¿Hay que sedar para la eco?",
        a: "Casi nunca. Si el animal no se deja, sedación suave y te quedas al lado. No “lo llevamos y te llamamos”.",
      },
    ],
  },
  {
    slug: "felinos",
    name: "Medicina felina",
    short: "Consultorio silencioso. Sin ladridos. El gato no es un perro chico.",
    headline: "Un cuarto que no huele a perro",
    lead: "Sala de espera propia, consultorio propio, feromonas, tiempo extra. Paz atiende gatos como se atiende a quien eligió no ser social.",
    price: "Consulta felina $36.000",
    duration: "40 min",
    species: "Gato",
    image: "/images/gato.jpg",
    body: [
      "Un gato que entra por un pasillo de perros ya llegó taquicárdico. Por eso la espera felina es otra puerta, otro olor, otra luz. Transportín sobre la mesa, no en el suelo. Nadie “lo saca a la fuerza”.",
      "Medicina felina de verdad: enfermedad renal, hipertensión, diabetes, asma, conducta. Y la vacuna que corresponde, no la del afiche canino.",
    ],
    includes: [
      "Sala de espera exclusiva",
      "Consulta de 40 minutos",
      "Manejo de bajo estrés",
      "Plan renal / senior si procede",
    ],
    faqs: [
      {
        q: "¿Mi gato odia el transportín?",
        a: "Casi todos. Te mandamos un protocolo el día anterior: feromona, tapar el canil, no ayuno si no hay sedación. Llegar y que alguien abra la puerta sin fiesta.",
      },
    ],
  },
  {
    slug: "exoticos",
    name: "Exóticos y silvestres",
    short: "Conejos, aves, hurones, reptiles. El sur también cabe en una jaula.",
    headline: "No eres un caso raro. Eres un paciente.",
    lead: "Paz y Emilia atienden lagomorfos, psitácidas y reptiles de compañía. Si llega un animal silvestre herido, lo estabilizamos y coordinamos con rehabilitación.",
    price: "Consulta exóticos $42.000",
    duration: "40–50 min",
    species: "Conejo · ave · hurón · reptil",
    image: "/images/exotico.jpg",
    body: [
      "Un conejo no se trata “como un gato chico”. Íleo, dientes, dieta. Un loro no se desparasita con lo de la perra. Tenemos protocolo, no buena voluntad.",
      "Fauna silvestre: estabilización de urgencia y derivación. No coleccionamos ejemplares. Cumplimos la ley y el sentido común.",
    ],
    includes: [
      "Consulta de especie",
      "Manejo y contención adecuados",
      "Dieta y hábitat por escrito",
      "Cirugía de tejidos blandos si procede",
    ],
    faqs: [
      {
        q: "¿Atienden caballos o rumiantes?",
        a: "No. Somos hospital de animales de compañía y exóticos menores. Para equinos y predio te derivamos a colegas de campo en Los Ríos.",
      },
    ],
  },
  {
    slug: "odontologia",
    name: "Odontología",
    short: "Limpieza bajo anestesia. Extracciones con criterio. El aliento no es “de viejo”.",
    headline: "La boca también es un órgano",
    lead: "Sarro, gingivitis, dientes retenidos. Se limpia con anestesia y radiografía dental, no con un raspado consciente que el animal no olvida.",
    price: "Limpieza desde $145.000 · según boca",
    duration: "Media jornada",
    species: "Perro · gato",
    image: "/images/pabellon.jpg",
    body: [
      "Un “baño de dientes” despierto es teatro y es cruel. Aquí se induce, se radiografía, se limpia bajo la encía y se extrae lo que no tiene hueso. El tutor ve las placas.",
      "El aliento que “siempre tuvo” suele ser enfermedad periodontal. Tratarla alarga años. Lo decimos sin dramatizar y sin vender un paquete de huesos de goma.",
    ],
    includes: [
      "Evaluación preanestésica",
      "Radiografía dental",
      "Limpieza supra y subgingival",
      "Extracciones si el hueso no sostiene",
    ],
    faqs: [
      {
        q: "¿Duele después?",
        a: "Sale con analgesia. Dieta blanda unos días. Si extraemos, te enseñamos cómo dar el antiinflamatorio. No “un poquito de pollo y listo”.",
      },
    ],
  },
  {
    slug: "hospitalizacion",
    name: "Hospitalización y UCI",
    short: "Boxes individuales. Visitas. Un tutor puede quedarse cuando hace falta.",
    headline: "Quedarse a dormir, de verdad",
    lead: "Seis boxes, dos de cuidados intensivos, oxígeno, bombas de infusión, alguien despierto a las cuatro de la mañana. No un canil en un pasillo.",
    price: "Día de internación desde $62.000 · UCI según cuadro",
    duration: "Las 24 horas",
    species: "Perro · gato · exótico",
    image: "/images/uci.jpg",
    body: [
      "Internar no es “dejarlo un rato”. Es fluidos, dolor, temperatura, un parte a las 9 y otro a las 18. Antonia dirige la UCI de noche. Si el cuadro se tuerce a las 3:10, hay alguien que no está durmiendo en la casa de al lado.",
      "Las visitas son a las 12:00 y a las 18:30. Si un tutor necesita quedarse —un gato que no come si no está ella, un perro viejo—, se arma una silla. No es un hotel. Es un hospital que entiende el vínculo.",
    ],
    includes: [
      "Box individual, perro y gato separados",
      "Partes clínicos dos veces al día",
      "Visitas en horario",
      "UCI con monitoreo continuo",
    ],
    faqs: [
      {
        q: "¿Puedo llamar a cualquier hora?",
        a: "Sí, al teléfono de UCI. De noche preferimos que llames si no duermes; te vamos a decir la verdad, no “está bien” por costumbre.",
      },
    ],
  },
  {
    slug: "urgencias",
    name: "Urgencias 24 horas",
    short: "Atropello, convulsión, distensión, parto. Ahora. No mañana a las nueve.",
    headline: "El río no espera. Tampoco un pulso.",
    lead: "Puerta de urgencias todo el año. Si puedes avisar, avisa. Si no, ven. Estabilizamos primero, hablamos de plata después.",
    price: "Derecho de urgencia $48.000 · se informa el plan antes de tratar lo no vital",
    duration: "Inmediato",
    species: "Perro · gato · exótico",
    image: "/images/noche.jpg",
    body: [
      "Valdivia está lejos de Santiago. Un atropello a las 23:40 no puede ser una conversación con un contestador. La puerta de Los Robles 1240 se abre. Hay un veterinario de guardia, no un alumno solo.",
      "El derecho de urgencia cubre la evaluación y la estabilización inicial. Cirugía, hospitalización y exámenes se cotizan en cuanto el animal respira. Nadie firma un pagaré en el pasillo mientras se sangra.",
    ],
    includes: [
      "Atención inmediata 24/7",
      "Estabilización y analgesia",
      "Imagen y laboratorio de guardia",
      "Pabellón de urgencia",
    ],
    faqs: [
      {
        q: "¿Tengo que ser paciente de Estuario?",
        a: "No. La urgencia no pide ficha antigua. Si puedes traer el carnet de vacunas, mejor. Si no, ven igual.",
      },
      {
        q: "¿Qué es urgencia de verdad?",
        a: "No se para, no orina, abdomen duro, convulsiona, respira mal, sangra, atropello, parto que no avanza, intoxicación. Si dudas, llama: 63 221 8440. Te decimos si vienes ahora o mañana a las nueve.",
      },
    ],
  },
];

export const team = [
  {
    slug: "emilia-cardenas",
    name: "Dra. Emilia Cárdenas",
    role: "Directora médica · medicina interna",
    image: "/images/emilia.jpg",
    creds: "MV Universidad Austral de Chile · internista",
    bio: "Criada entre Niebla y Valdivia. Catorce años leyendo cuadros que no caben en una receta. Dirige Estuario como se dirige un hospital chico: cada ficha tiene nombre de animal y de tutor.",
  },
  {
    slug: "ignacio-alarcon",
    name: "Dr. Ignacio Alarcón",
    role: "Cirugía y traumatología",
    image: "/images/ignacio.jpg",
    creds: "MV UACh · diplomado en cirugía U. de Chile",
    bio: "Pabellón, osteosíntesis, tejidos blandos. Habla de riesgos antes de inducir y de cicatrices después. Si una cirugía puede esperar al lunes, lo dice.",
  },
  {
    slug: "antonia-riquelme",
    name: "Dra. Antonia Riquelme",
    role: "Urgencias y UCI",
    image: "/images/antonia.jpg",
    creds: "MV UACh · emergencias y cuidados intensivos",
    bio: "La voz de las 3:10. Estabiliza, ordena, llama al tutor sin maquillar el parte. Dice que el sur enseña a no dejar nada para mañana.",
  },
  {
    slug: "paz-montecinos",
    name: "Dra. Paz Montecinos",
    role: "Medicina felina y exóticos",
    image: "/images/paz.jpg",
    creds: "MV U. de Chile · medicine felina ISFM",
    bio: "Gatos, conejos, aves. Convenció al equipo de separar las esperas. Un consultorio silencioso no es un lujo: es clínica.",
  },
  {
    slug: "benjamin-oyarzun",
    name: "Dr. Benjamín Oyarzún",
    role: "Imagenología y laboratorio",
    image: "/images/benjamin.jpg",
    creds: "MV U. Mayor · diplomado en ultrasonido",
    bio: "Lee ecografías como se lee un río: con paciencia y sin inventar islas. Si la placa no da, lo dice. Si da, te la muestra.",
  },
] as const;

export const visitSteps = [
  {
    n: "01",
    title: "Llegas. Aunque llueva.",
    text: "Estacionamiento cubierto, dos pasos a recepción. Si vienes de urgencia, hay una puerta distinta, a la izquierda.",
  },
  {
    n: "02",
    title: "El nombre del animal, primero",
    text: "Camila pregunta cómo se llama, no el RUT. Ficha, peso, y a la sala que corresponde: perro o gato.",
  },
  {
    n: "03",
    title: "Treinta minutos reales",
    text: "No es un pasillo con cronómetro. Se ausculta, se palpa, se conversa. El tutor se queda adentro.",
  },
  {
    n: "04",
    title: "El dato, si hace falta",
    text: "Laboratorio e imagen en el mismo edificio. Ves lo que vemos. Nadie se lleva al animal “un ratito” sin decir a dónde.",
  },
  {
    n: "05",
    title: "Plan y cifra, en pesos",
    text: "Por escrito. Con alternativas. Boleta. Si hay que internar, visitas a las 12 y a las 18:30.",
  },
] as const;

export const testimonials = [
  {
    name: "Francisca M.",
    pet: "tutora de Copihue, border collie",
    text: "Copihue se comió un maíz entero un domingo a las once. En el hospital de turno de siempre no había ecógrafo. En Estuario había Antonia, una bomba de infusión y un parte a la una de la mañana. Amaneció.",
  },
  {
    name: "Rodrigo A.",
    pet: "tutor de Menta, gata europea",
    text: "Llevaba a Menta a clínicas donde ladraba todo el pasillo. Acá hay otra puerta para gatos. Paz la atendió sin sacarla del transportín hasta que ella quiso. Eso, para un gato, es medicina.",
  },
  {
    name: "Isidora V.",
    pet: "tutora de Pancho, conejo cabeza de león",
    text: "Nadie en Valdivia me había hablado de íleo con esa claridad. Dieta, heno, control al día siguiente. Pancho hoy está gordo y aburrido, que es lo que un conejo debe estar.",
  },
] as const;

export const faqs = [
  {
    q: "¿Es urgencia o puede esperar a mañana?",
    a: "Si no se para, no orina, el abdomen está duro, convulsiona, respira mal, sangra, lo atropellaron, el parto no avanza o comió algo tóxico: ahora. Si dudas, llama al 63 221 8440. Preferimos un teléfono de más que un animal de menos.",
  },
  {
    q: "¿Cuánto cuesta empezar?",
    a: "Consulta general $35.000. Felina $36.000. Exóticos $42.000. Urgencia $48.000. Preventiva $32.000. Los exámenes y cirugías se cotizan antes, por escrito, en pesos.",
  },
  {
    q: "¿Aceptan seguro de mascotas?",
    a: "Emitimos boleta y ficha clínica para que tu seguro reembolse según póliza. No trabajamos con bonos FONASA ni Isapre: no aplican a veterinaria.",
  },
  {
    q: "¿Puedo quedarme en la consulta?",
    a: "Sí. Es la regla, no el favor. En pabellón hay un protocolo de despedida; no “lo dejai y te llamamos”.",
  },
  {
    q: "¿Qué hago con la lluvia?",
    a: "Ven igual. Estacionamiento cubierto, toallas en recepción, y un patio de arrayanes si hay que esperar que escampe el animal, no tú.",
  },
  {
    q: "¿Atienden de noche aunque no sea paciente?",
    a: "Sí. La UCI no pide antigüedad. Trae lo que tengas: carnet, receta, una foto del alimento. Si no tienes nada, ven igual.",
  },
];

export const bringList = [
  "Carnet de vacunas, si existe",
  "Alimento de los últimos días o una foto del saco",
  "Lista de fármacos (aunque sea “una pastilla para las pulgas”)",
  "Muestra de orina o deposición si el motivo es digestivo",
  "Transportín para gatos y exóticos — te prestamos uno si llegaste sin",
  "Correa corta. El patio mojado no es un paseo",
];

export const triageRed = [
  "No se para o no responde",
  "Dificultad para respirar",
  "Abdomen distendido y duro",
  "Convulsión o desorientación súbita",
  "No orina, o intenta y no puede",
  "Atropello, caída, pelea grave",
  "Sangrado que no cesa",
  "Parto que no avanza más de 20 minutos",
  "Intoxicación (cebolla, chocolate, raticida, uvas, xylitol)",
];

export const spaces = [
  {
    title: "Recepción y espera canina",
    text: "Madera, pizarra mojada, un sofá teal. Los perros no se cruzan con los gatos.",
    image: "/images/reception.jpg",
  },
  {
    title: "Consultorio",
    text: "Mesa de teak, luz del río, treinta minutos que no se recortan.",
    image: "/images/consultorio.jpg",
  },
  {
    title: "Patio de arrayanes",
    text: "Para esperar que escampe, o que el animal se calme. Cubierto.",
    image: "/images/patio.jpg",
  },
  {
    title: "Pabellón",
    text: "Anestesia inhalatoria, monitoreo, un patio de helechos al otro lado del vidrio.",
    image: "/images/pabellon.jpg",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getTeamMember(slug: string) {
  return team.find((m) => m.slug === slug);
}
