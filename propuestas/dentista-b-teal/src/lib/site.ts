export const site = {
  name: "Bruma",
  legalName: "Bruma Odontología SpA",
  tagline: "Odontología serena",
  city: "Santiago",
  neighborhood: "Vitacura",
  address: "Av. Bicentenario 4050, piso 2",
  postal: "7630000 Vitacura",
  fullAddress: "Av. Bicentenario 4050, piso 2, Vitacura, Santiago",
  phone: "2 2948 2710",
  phoneHref: "tel:+56229482710",
  phoneIntl: "+56 2 2948 2710",
  whatsapp: "https://wa.me/56978714420",
  whatsappDisplay: "+56 9 7871 4420",
  email: "hola@clinicabruma.cl",
  maps: "https://maps.google.com/?q=Parque+Bicentenario+Vitacura+Santiago",
  mapsEmbed:
    "https://www.google.com/maps?q=Parque+Bicentenario,+Vitacura,+Santiago&output=embed",
  instagram: "https://instagram.com/clinicabruma",
  url: "https://clinicabruma.cl",
  hours: [
    { day: "Lunes a jueves", time: "8:30 – 19:30" },
    { day: "Viernes", time: "8:30 – 18:00" },
    { day: "Sábado", time: "9:00 – 14:00" },
    { day: "Domingo", time: "Cerrado · urgencias para pacientes Bruma" },
  ],
  rating: "4,9",
  reviews: "286",
  years: "9",
  smiles: "4.200",
} as const;

export const nav = [
  { href: "/clinica", label: "La clínica" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/equipo", label: "Equipo" },
  { href: "/casos", label: "Casos" },
  { href: "/tecnologia", label: "Tecnología" },
] as const;

export const stats = [
  { value: "4,9", label: "en Google · 286 reseñas" },
  { value: "9", label: "años en Vitacura" },
  { value: "4.200", label: "sonrisas acompañadas" },
  { value: "0", label: "moldes de alginato. Solo escáner 3D" },
] as const;

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  lead: string;
  price: string;
  duration: string;
  image: string;
  body: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "diseno-de-sonrisa",
    name: "Diseño de sonrisa",
    short: "Proporción, luz y carácter. Primero lo ves. Después decides.",
    headline: "Una sonrisa que ya te pertenecía",
    lead: "Estudiamos tu cara, tu habla y tu mordida antes de tocar un diente. Ves el resultado en 3D. Si no te reconoces, no seguimos.",
    price: "Evaluación de diseño $95.000 · descontable",
    duration: "60–90 min la primera sesión",
    image: "/images/smile.jpg",
    body: [
      "Hay clínicas que copian una sonrisa de catálogo. En Bruma partimos de ti: la curva del labio, cómo se ilumina el tercio medio de la cara, el carácter que quieres conservar.",
      "Con escáner intraoral, fotografías de protocolo y un mock-up digital ves el cambio antes de decidir. Sales con una propuesta visual y un presupuesto cerrado en pesos, no con una duda.",
    ],
    includes: [
      "Escáner intraoral 3D",
      "Estudio facial y fotográfico",
      "Mock-up digital y, si procede, en boca",
      "Plan de tratamiento con honorarios en CLP",
    ],
    faqs: [
      {
        q: "¿El diseño obliga a hacer carillas?",
        a: "No. A veces basta un blanqueamiento, un recorte de encía o alineadores. El diseño sirve para decidir con criterio, no para vender más.",
      },
      {
        q: "¿Puedo ver el resultado antes?",
        a: "Sí. Es la razón de esta hora. Sales con una propuesta visual y un presupuesto, no con una duda.",
      },
    ],
  },
  {
    slug: "carillas",
    name: "Carillas de porcelana",
    short: "Láminas mínimas, hechas a mano. Lo contrario de un diente de anuncio.",
    headline: "Porcelana que no se nota",
    lead: "Carillas ultrafinas, estratificadas por ceramista. Color, translucidez y borde incisal como un diente vivo, no como una tecla de piano.",
    price: "Desde $420.000 / pieza",
    duration: "2–3 visitas",
    image: "/images/craft.jpg",
    body: [
      "Una carilla bien hecha no se señala. Se intuye en cómo cae la luz. Trabajamos con porcelana feldespática o disilicato según el caso, siempre lo más conservador posible: si se puede no tallar, no se talla.",
      "El laboratorio no es un almacén. Es un ceramista con nombre y un protocolo de prueba en boca. Ajustamos forma y textura contigo sentado, no sobre una foto de WhatsApp.",
    ],
    includes: [
      "Encerado y mock-up",
      "Preparación mínima o nula",
      "Prueba de bizcocho",
      "Cementado adhesivo bajo aislamiento",
    ],
    faqs: [
      {
        q: "¿Se ven artificiales?",
        a: "Si se hacen bien, no. Evitamos el blanco opaco, los bordes gruesos y la simetría excesiva. Una sonrisa natural tiene irregularidades mínimas a propósito.",
      },
      {
        q: "¿Cuánto duran?",
        a: "Con higiene, férula si aprietas o roncas, y revisiones, diez a quince años es un horizonte realista. No prometemos eternidad.",
      },
    ],
  },
  {
    slug: "implantes",
    name: "Implantes",
    short: "Cirugía precisa, prótesis que parece tuya. Sin prisas de fábrica.",
    headline: "Un diente que vuelve a ser parte de la cara",
    lead: "Planificación con CBCT 3D, cirugía guiada cuando aporta, y una corona que no se distingue. Recuperar un diente no debería sentirse como una obra.",
    price: "Desde $890.000 el implante · corona aparte",
    duration: "Según hueso y carga",
    image: "/images/suite.jpg",
    body: [
      "El implante es la raíz. Lo que se ve —la corona— es donde se gana o se pierde la naturalidad. Por eso no separamos cirugía y estética: el mismo equipo piensa el emergente gingival, el color y la oclusión.",
      "Usamos tomografía de haz cónico para no improvisar en hueso. Si hace falta injerto, lo decimos antes, con cifra. Si se puede carga inmediata, también.",
    ],
    includes: [
      "CBCT y planificación digital",
      "Cirugía en suite privada",
      "Seguimiento de osteointegración",
      "Corona sobre pilar personalizado",
    ],
    faqs: [
      {
        q: "¿Duele?",
        a: "La colocación se hace con anestesia local. La molestia posterior suele ser de 48 horas y se cubre con analgésico habitual. Si hay ansiedad, hablamos de sedación consciente.",
      },
      {
        q: "¿Puedo pagar en cuotas?",
        a: "Sí. Hasta 12 cuotas. Te lo desglosamos en la primera hora, sin un ejecutivo de financiamiento en el pasillo.",
      },
    ],
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia invisible",
    short: "Alinear sin aparato que se vea. Con control de la mordida, no solo de la selfie.",
    headline: "Ordenar lo que ya está, sin teatro",
    lead: "Alineadores con control clínico cada 6–8 semanas. No es un kit por correo. Es ortodoncia con diagnóstico de oclusión.",
    price: "Desde $2.490.000",
    duration: "6–18 meses según caso",
    image: "/images/aligners.jpg",
    body: [
      "Enderezar dientes sin mirar la mordida es decorar una casa con la estructura torcida. En Bruma el estudio incluye articulación, hábitos y encía. Los alineadores son la herramienta, no el plan.",
      "Llevas férulas casi invisibles. Comes lo que quieras. Vienes a control, no a que te aprieten un alambre. Al final, retención. Sin retención, el diente vuelve. Se lo decimos a todo el mundo.",
    ],
    includes: [
      "Estudio y escáner",
      "Simulación de movimiento",
      "Revisiones clínicas",
      "Retención al alta",
    ],
    faqs: [
      {
        q: "¿Es Invisalign?",
        a: "Trabajamos con sistemas de alineadores de grado clínico. Te diremos cuál encaja en tu caso, no cuál tiene más avisos en Instagram.",
      },
      {
        q: "¿Sirve en adultos?",
        a: "Sí. La mayoría de nuestros pacientes de ortodoncia tienen más de treinta años. El hueso adulto se mueve; tarda un poco más y exige constancia.",
      },
    ],
  },
  {
    slug: "periodoncia",
    name: "Encías",
    short: "La base. Sin encía sana no hay estética que dure.",
    headline: "Cuidar lo que sostiene la sonrisa",
    lead: "Periodoncia sin dramatizar y sin dejarlo estar. Sangrado, retracción, mal aliento persistente: se diagnostica y se trata con un protocolo claro.",
    price: "Estudio periodontal desde $68.000",
    duration: "Según fase",
    image: "/images/suite.jpg",
    body: [
      "Una carilla sobre una encía enferma es un vestido sobre una herida. Por eso, si hace falta, paramos la estética y tratamos periodonto primero.",
      "Raspado, control de biofilm, cirugía plástica gingival cuando hay recesión visible al sonreír. Hablamos claro: esto no se arregla con un enjuague de farmacia.",
    ],
    includes: [
      "Periodontograma",
      "Higiene de mantenimiento",
      "Tratamiento de encías",
      "Cirugía mucogingival si procede",
    ],
    faqs: [
      {
        q: "¿Si me sangra al cepillar es normal?",
        a: "No. Es inflamación. Cuanto antes se mida y se trate, más dientes conservas y más predecible será cualquier tratamiento estético.",
      },
    ],
  },
  {
    slug: "higiene",
    name: "Higiene y revisión",
    short: "Mantenimiento de verdad, no un barniz de cinco minutos.",
    headline: "La visita que evita las demás",
    lead: "Revisión con cámara intraoral, higiene con ultrasonido y air-flow, y un plan de recitaciones según tu riesgo, no según el calendario de la clínica.",
    price: "$79.000 revisión + higiene",
    duration: "50 min",
    image: "/images/reception.jpg",
    body: [
      "No es un lavado de auto. Es diagnóstico: caries incipiente, apretamiento, recesión, restauración que envejece. Sales sabiendo qué hay y cuándo volver.",
      "Usamos air-flow de eritritol, no solo ultrasonido. Duele menos, limpia más y respeta el esmalte y los implantes.",
    ],
    includes: [
      "Exploración y fotos",
      "Higiene + air-flow",
      "Fluoración si procede",
      "Informe breve y próxima hora",
    ],
    faqs: [
      {
        q: "¿Cada cuánto?",
        a: "Tres, cuatro o seis meses según riesgo periodontal y caries. Te lo decimos con datos, no con una frase comercial.",
      },
    ],
  },
  {
    slug: "ansiedad",
    name: "Ansiedad y sedación",
    short: "Si tardaste años en volver, este es el sitio para hacerlo.",
    headline: "Ven. No vamos a premiarte por el miedo.",
    lead: "Protocolo para pacientes que evitan al dentista: tiempo extra, explicación previa, manta, auriculares, y sedación consciente cuando hace falta.",
    price: "Sedación consciente según caso",
    duration: "Se agenda con margen",
    image: "/images/corridor.jpg",
    body: [
      "Nadie pregunta en voz alta por qué tardaste ocho años. La primera hora puede ser solo conversación y un escáner, sin el sillón reclinado si aún no estás listo.",
      "Si el cuerpo no colabora, sedación consciente con un médico. Sigues respirando por ti, a menudo no recuerdas el ruido, y sales caminando.",
    ],
    includes: [
      "Hora extra-larga",
      "Parada a demanda",
      "Sedación consciente opcional",
      "Acompañante bienvenido",
    ],
    faqs: [
      {
        q: "¿Me voy a dormir del todo?",
        a: "La sedación consciente no es anestesia general. Estás relajado, a menudo no recuerdas el procedimiento, y recuperas en la clínica antes de irte.",
      },
    ],
  },
  {
    slug: "urgencias",
    name: "Urgencias",
    short: "Dolor, un diente roto, una corona que se cayó. Hoy.",
    headline: "Cuando no puede esperar a la agenda",
    lead: "Hueco de urgencia cada mañana. Pacientes de Bruma, las 24 horas por teléfono. Si no eres paciente, te vemos igual si hay dolor.",
    price: "Urgencia $85.000 · se descuenta si hay tratamiento",
    duration: "El mismo día siempre que sea posible",
    image: "/images/suite.jpg",
    body: [
      "El dolor no entiende de listas de espera. Reservamos un hueco diario para fracturas, infecciones, coronas despegadas y traumatismos.",
      "Si eres paciente de Bruma, el teléfono de urgencias está en tu alta. Si no lo eres, llama igual. Preferimos verte a que te automediques tres días.",
    ],
    includes: [
      "Atención el mismo día",
      "Alivio del dolor",
      "Radiografía si procede",
      "Plan de continuidad",
    ],
    faqs: [
      {
        q: "¿Los fines de semana?",
        a: "Sábados en horario de mañana. Domingo y festivos: teléfono de guardia para pacientes en tratamiento activo.",
      },
    ],
  },
];

export const team = [
  {
    name: "Dra. Catalina Vial",
    role: "Directora médica · estética y rehabilitación",
    image: "/images/catalina.jpg",
    bio: "Cirujano dentista de la Universidad de Chile. Doce años diseñando sonrisas que no se parecen entre sí. Dirige Bruma como se dirige un taller: cada caso tiene autor.",
    creds: "U. de Chile · Magíster en estética · Digital Smile Design",
  },
  {
    name: "Dr. Matías Echeverría",
    role: "Implantología y cirugía oral",
    image: "/images/matias.jpg",
    bio: "Cirugía guiada, injertos y carga inmediata cuando el hueso lo permite. Habla claro de plazos y de lo que no se puede improvisar.",
    creds: "U. de los Andes · Magíster en implantología",
  },
  {
    name: "Dra. Javiera Núñez",
    role: "Ortodoncia y oclusión",
    image: "/images/javiera.jpg",
    bio: "Alinea dientes y mordidas. Desconfía de los tratamientos que solo se ven de frente. La cara de perfil también cuenta.",
    creds: "UDD · Ortodoncia clínica · alineadores y aparatología",
  },
  {
    name: "Dra. Valentina Ruiz",
    role: "Odontología general y pacientes con ansiedad",
    image: "/images/fernanda.jpg",
    bio: "La puerta de entrada. Revisiones, caries, y el tiempo extra que hace falta cuando alguien entra con el pulso alto.",
    creds: "U. de Valparaíso · Odontología conservadora · sedación consciente",
  },
] as const;

export const cases = [
  {
    id: "isidora",
    name: "Isidora R.",
    age: "41 años",
    treatment: "Diseño de sonrisa · 8 carillas",
    before: "/images/isidora-before.jpg",
    after: "/images/isidora-after.jpg",
    quote:
      "No quería una sonrisa de anuncio. Quería verme descansada. Tardamos más en decidir el color que en cementar.",
  },
  {
    id: "tomas",
    name: "Tomás A.",
    age: "46 años",
    treatment: "Blanqueamiento + alineadores + 4 carillas",
    before: "/images/tomas-before.jpg",
    after: "/images/tomas-after.jpg",
    quote:
      "Llevaba años sonriendo con la boca a medias. Nadie me vendió un paquete. Me explicaron qué era imprescindible y qué era vanidad.",
  },
] as const;

export const visitSteps = [
  {
    n: "01",
    title: "Te recibimos. Punto.",
    text: "Agua, luz sobre la laguna, un sofá que no es de sala de espera. Nadie te pregunta en voz alta por qué tardaste años.",
  },
  {
    n: "02",
    title: "Conversación, no interrogatorio",
    text: "Qué te preocupa. Qué quieres. Qué no. Catalina o Valentina escuchan antes de recostar el sillón.",
  },
  {
    n: "03",
    title: "Escáner 3D. Sin alginato",
    text: "Un minuto en boca. Ves tus dientes en pantalla. Si hay radiografía, es digital y se queda en tu ficha.",
  },
  {
    n: "04",
    title: "Diagnóstico compartido",
    text: "Miras lo que miramos. Te traducimos. Sales entendiendo, no asintiendo.",
  },
  {
    n: "05",
    title: "Plan, plazos y cifra",
    text: "Por escrito. Con alternativas. Con cuotas si las quieres. Sin sorpresa en caja. Boleta para reembolso Isapre.",
  },
] as const;

export const testimonials = [
  {
    name: "Antonia G.",
    text: "El espacio no parece una clínica y, aun así, todo es preciso. Me trataron el miedo con la misma seriedad que el esmalte.",
    meta: "Paciente de higiene y carillas",
  },
  {
    name: "Nicolás M.",
    text: "Tres clínicas me cotizaron implantes por WhatsApp. Aquí me hicieron un CBCT, me dijeron que no hacía falta injerto y me ahorré un millón de teatro.",
    meta: "Implante unitario",
  },
  {
    name: "Francisca P.",
    text: "Ortodoncia a los 38. Javiera me habló de la mordida, no del filtro. El resultado se ve en las fotos y se nota al masticar.",
    meta: "Alineadores",
  },
] as const;

export const faqs = [
  {
    q: "¿Duele?",
    a: "La mayor parte de lo que hacemos se cubre con anestesia local. Si hay ansiedad, paramos. Si hace falta sedación consciente, se agenda. Nadie te sujeta el brazo.",
  },
  {
    q: "¿Cuánto cuesta empezar?",
    a: "Revisión + higiene: $79.000. Evaluación de diseño de sonrisa: $95.000, descontable si sigues. Urgencia: $85.000. Los tratamientos mayores tienen rango publicado en cada ficha y cifra cerrada antes de empezar.",
  },
  {
    q: "¿Aceptan Isapre o FONASA?",
    a: "Trabajamos de forma particular para no recortar el tiempo de sillón. Emitimos boleta y ficha clínica para que tu Isapre te reembolse según póliza. No operamos con bono FONASA.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Hasta 12 cuotas, sin pasar por un comercial de pasillo. El plan de pagos se firma con el plan de tratamiento.",
  },
  {
    q: "¿Son una franquicia o una clínica de volumen?",
    a: "No. Un solo pabellón en Vitacura. Cuatro doctores. Agenda con tiempo. Si un día no hay hueco de calidad, no lo inventamos.",
  },
  {
    q: "¿Qué pasa si llevo años sin ir al dentista?",
    a: "Es más habitual de lo que crees. Pide primera hora y dilo al reservar. Te damos más tiempo y menos sillón, al principio.",
  },
];

export const tech = [
  {
    title: "Escáner intraoral 3D",
    text: "Adiós al alginato. Un minuto en boca, un modelo digital que ves en pantalla y que viaja al laboratorio sin perder un micrón.",
  },
  {
    title: "CBCT de haz cónico",
    text: "Tomografía cuando el hueso o un conducto lo piden. Menos adivinanza, menos sorpresa en cirugía.",
  },
  {
    title: "Microscopio operatorio",
    text: "Endodoncia y estética bajo aumento. Lo que el ojo no alcanza, el microscopio lo deja en evidencia.",
  },
  {
    title: "Laboratorio digital",
    text: "Diseño CAD/CAM y un ceramista con nombre. La corona no sale de una cinta: se prueba en tu boca.",
  },
] as const;

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
