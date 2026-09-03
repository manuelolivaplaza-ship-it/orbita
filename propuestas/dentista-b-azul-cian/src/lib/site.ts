export const site = {
  name: "Cian",
  legalName: "Cian Odontología SpA",
  tagline: "Ver para decidir",
  city: "Santiago",
  neighborhood: "Vitacura",
  address: "Av. Nueva Costanera 3900",
  postal: "7630000",
  fullAddress: "Av. Nueva Costanera 3900, Vitacura, Santiago",
  comuna: "Vitacura",
  region: "Región Metropolitana",
  phone: "2 2898 4100",
  phoneHref: "tel:+56228984100",
  phoneIntl: "+56 2 2898 4100",
  mobile: "9 4271 8804",
  mobileHref: "tel:+56942718804",
  whatsapp: "https://wa.me/56942718804?text=Hola%20Cian%2C%20quiero%20agendar%20una%20hora",
  email: "hola@cian.cl",
  maps: "https://maps.google.com/?q=Av.+Nueva+Costanera+3900,+Vitacura,+Santiago",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Nueva+Costanera+3900,+Vitacura,+Santiago,+Chile&output=embed",
  instagram: "https://instagram.com/cian.clinica",
  rut: "76.841.203-5",
  url: "https://cian.cl",
  hours: [
    { day: "Lunes a jueves", time: "8:30 – 19:30" },
    { day: "Viernes", time: "8:30 – 17:00" },
    { day: "Sábados alternos", time: "9:00 – 13:00" },
    { day: "Domingo", time: "Cerrado · urgencia para pacientes Cian" },
  ],
  rating: "4,9",
  reviews: "386",
  years: "9",
  patients: "5.200",
} as const;

export const nav = [
  { href: "/clinica", label: "La clínica" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/equipo", label: "Equipo" },
  { href: "/casos", label: "Casos" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/primera-visita", label: "Primera visita" },
] as const;

export const stats = [
  { value: "4,9", label: "en Google · 386 reseñas" },
  { value: "9", label: "años en Vitacura" },
  { value: "5.200", label: "pacientes con ficha" },
  { value: "0", label: "moldes de silicona. Solo escáner" },
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
    slug: "diagnostico-3d",
    name: "Diagnóstico 3D",
    short: "Escáner, fotos y un plan en pesos. El mismo día.",
    headline: "Primero se ve. Después se decide.",
    lead: "Primera consulta con escáner intraoral, cámara y, si hace falta, radiografía digital. Sales con un diagnóstico en pantalla y un presupuesto escrito. No con una duda.",
    price: "$49.000 · se descuenta si sigues",
    duration: "60–75 min",
    image: "/images/scanner.jpg",
    body: [
      "La mayoría de las clínicas te examina y te habla. En Cian te mostramos: tus dientes en 3D, las zonas que sangran, la corona que ya no sella. Magdalena o Ignacio traducen. Tú miras lo mismo que miramos.",
      "El presupuesto llega el mismo día, en pesos chilenos, con alternativas. Si algo puede esperar, lo decimos. Si duele, se trata primero. La cifra de la carilla no aparece antes que el diagnóstico de la encía.",
    ],
    includes: [
      "Escáner intraoral 3D",
      "Fotografías de protocolo",
      "Radiografía digital si procede",
      "Plan escrito con honorarios",
    ],
    faqs: [
      {
        q: "¿El valor se descuenta?",
        a: "Sí, si tomas un tratamiento en los 90 días siguientes. Si no, pagaste un diagnóstico de verdad, no una cotización por WhatsApp.",
      },
      {
        q: "¿Hay que llegar en ayunas o con receta?",
        a: "No. Come normal. Trae exámenes previos si los tienes y el nombre de tu isapre, por si quieres reembolso.",
      },
    ],
  },
  {
    slug: "diseno-de-sonrisa",
    name: "Diseño de sonrisa",
    short: "Proporción y luz. Nunca un molde de catálogo.",
    headline: "Una sonrisa que ya te quedaba.",
    lead: "Estudiamos cara, habla y mordida antes de tocar un diente. Ves el resultado en pantalla. Si no te reconoces, no seguimos.",
    price: "$120.000 consulta de diseño · descontable",
    duration: "75–90 min",
    image: "/images/smile.jpg",
    body: [
      "Hay clínicas que venden un blanco de anuncio. Nosotros partimos de tu tercio medio, de cómo se mueve el labio cuando hablas, del carácter que no quieres perder.",
      "El mock-up digital —y si procede, en boca— es para decidir con criterio. A veces basta un blanqueamiento y un recorte de encía. A veces hacen falta carillas. El diseño sirve para no operar de más.",
    ],
    includes: [
      "Estudio facial y fotográfico",
      "Escáner y mock-up digital",
      "Prueba en boca si corresponde",
      "Plan por etapas, con cifra",
    ],
    faqs: [
      {
        q: "¿El diseño obliga a hacer carillas?",
        a: "No. El diseño es un mapa. El tratamiento es lo mínimo que te deja reconocible y sano.",
      },
      {
        q: "¿Puedo ver el resultado antes?",
        a: "Sí. Es el punto de esta consulta. Sales con una propuesta visual y un presupuesto, no con una promesa.",
      },
    ],
  },
  {
    slug: "carillas",
    name: "Carillas de porcelana",
    short: "Láminas mínimas, hechas a mano. Lo contrario de un diente de comercial.",
    headline: "Porcelana que no se señala.",
    lead: "Carillas ultrafinas estratificadas por ceramista. Color, translucidez y borde incisal como un diente vivo. Si se puede no tallar, no se talla.",
    price: "Desde $290.000 / pieza",
    duration: "2–3 visitas",
    image: "/images/veneer.jpg",
    body: [
      "Una carilla bien hecha no se apunta con el dedo. Se nota en cómo cae la luz a las cinco de la tarde, en Vitacura o en la costa. Trabajamos con feldespato o disilicato según el caso, siempre lo más conservador.",
      "El laboratorio no es un almacén. Es un ceramista con nombre y una prueba en boca. Ajustamos textura y borde contigo sentado, no sobre una foto de Instagram.",
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
        a: "Si se hacen bien, no. Evitamos el blanco opaco, los bordes gruesos y la simetría de teclado. Una sonrisa natural tiene irregularidades mínimas a propósito.",
      },
      {
        q: "¿Cuánto duran?",
        a: "Con higiene, férula si aprietas, y controles, diez a quince años es un horizonte realista. No prometemos eternidad.",
      },
    ],
  },
  {
    slug: "implantes",
    name: "Implantes",
    short: "Cirugía precisa, corona que parece tuya. Sin teatro de quirófano.",
    headline: "Un diente que vuelve a ser parte de la cara.",
    lead: "Planificación con CBCT, cirugía guiada cuando aporta, y una corona que no se distingue. Recuperar un diente no debería sentirse como una obra.",
    price: "Desde $890.000 el implante · corona aparte",
    duration: "Según hueso y carga",
    image: "/images/suite.jpg",
    body: [
      "El implante es la raíz. Lo que se ve —la corona— es donde se gana o se pierde la naturalidad. Por eso no separamos cirugía y estética: el mismo equipo piensa el emergente gingival, el color y la oclusión.",
      "Usamos tomografía de haz cónico para no improvisar en hueso. Si hace falta injerto, lo decimos antes, con cifra. Si se puede carga inmediata, también. Tomás opera; Magdalena define lo que se ve.",
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
        a: "Se hace con anestesia local. La molestia posterior suele ser de 48 horas y se cubre con analgésico habitual. Si hay ansiedad, hablamos de sedación consciente.",
      },
      {
        q: "¿Se puede pagar en cuotas?",
        a: "Sí. Hasta 12 cuotas sin interés con tarjetas seleccionadas, o 24 con el operador que uses. El plan de pagos se firma con el plan clínico, no en otro escritorio.",
      },
    ],
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia invisible",
    short: "Alinear sin aparato que se vea. Con control de la mordida, no solo de la selfie.",
    headline: "Ordenar lo que ya está, sin teatro.",
    lead: "Alineadores con control clínico cada 6–8 semanas. No es un kit por correo. Es ortodoncia con diagnóstico de oclusión.",
    price: "Desde $2.190.000",
    duration: "6–18 meses según caso",
    image: "/images/aligners.jpg",
    body: [
      "Enderezar dientes sin mirar la mordida es pintar una casa con la estructura torcida. Javiera estudia articulación, hábitos y encía. Los alineadores son la herramienta, no el plan.",
      "Comes lo que quieras. Los sacas para eso. Vienes a control, no a que te aprieten un alambre. Al final, retención. Sin retención, el diente vuelve. Se lo decimos a todo el mundo, también a los de treinta y tantos que ‘solo quieren el frente’.",
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
        a: "Trabajamos con sistemas de alineadores de grado clínico. Te diremos cuál encaja en tu caso, no cuál tiene más avisos en la micro.",
      },
      {
        q: "¿Sirve en adultos?",
        a: "Sí. La mayoría de nuestros pacientes de ortodoncia tiene más de treinta años. El hueso adulto se mueve; tarda un poco más y pide constancia.",
      },
    ],
  },
  {
    slug: "blanqueamiento",
    name: "Blanqueamiento",
    short: "Un tono que se sostiene. No un flash de una noche.",
    headline: "Claridad, no un blanco de estudio.",
    lead: "Protocolo en clínica más férulas para casa, según el esmalte que tengas. El objetivo es un diente vivo más claro, no una tecla de piano.",
    price: "$190.000 el protocolo completo",
    duration: "1 sesión en clínica + 7–10 días en casa",
    image: "/images/smile.jpg",
    body: [
      "El blanqueamiento no es un filtro. Si hay caries, filtraciones o recesión, se tratan antes. Si no, el gel solo acentúa el problema.",
      "Combinamos una sesión con lámpara de espectro controlado y gel para casa. Te mostramos la guía de color al empezar y al terminar. Si el esmalte no responde como esperamos, no insistimos con más producto: cambiamos el plan.",
    ],
    includes: [
      "Registro de color",
      "Sesión en clínica",
      "Férulas y gel para casa",
      "Control a los 15 días",
    ],
    faqs: [
      {
        q: "¿Sensible después?",
        a: "A veces, 24 a 48 horas. Usamos desensibilizante y te indicamos pasta. Si tienes recesión, lo hablamos antes: no todo el mundo es candidato el mismo día.",
      },
      {
        q: "¿Cuánto dura?",
        a: "Con higiene y sin fumar, uno a tres años de estabilidad razonable. El café y el merlot de los viernes existen. Por eso el mantenimiento es parte del plan.",
      },
    ],
  },
  {
    slug: "encias",
    name: "Encías e higiene",
    short: "La base. Sin encía sana no hay estética que dure.",
    headline: "Cuidar lo que sostiene la sonrisa.",
    lead: "Periodoncia sin dramatizar y sin dejarlo estar. Sangrado, retracción, mal aliento persistente: se mide y se trata con un protocolo claro.",
    price: "Higiene $59.000 · estudio periodontal $89.000",
    duration: "50–80 min según fase",
    image: "/images/reception.jpg",
    body: [
      "Una carilla sobre una encía enferma es un vestido sobre una herida. Si hace falta, paramos la estética y tratamos periodonto primero.",
      "La higiene no es un lavado de auto. Es diagnóstico: caries incipiente, apretamiento, recesión, restauración que envejece. Usamos air-flow de eritritol. Duele menos, limpia más y respeta implantes.",
    ],
    includes: [
      "Periodontograma si procede",
      "Higiene con ultrasonido y air-flow",
      "Tratamiento de encías",
      "Plan de recitaciones según riesgo",
    ],
    faqs: [
      {
        q: "¿Si me sangra al cepillar es normal?",
        a: "No. Es inflamación. Cuanto antes se mida, más dientes conservas y más predecible será cualquier tratamiento estético.",
      },
      {
        q: "¿Cada cuánto la higiene?",
        a: "Tres, cuatro o seis meses según tu riesgo, no según el calendario de la clínica. Te lo decimos con datos.",
      },
    ],
  },
  {
    slug: "urgencias",
    name: "Urgencias",
    short: "Dolor, un diente roto, una corona que se cayó. Hoy.",
    headline: "Cuando no puede esperar a la agenda.",
    lead: "Hueco de urgencia cada mañana. Pacientes Cian, teléfono de guardia. Si no eres paciente, te vemos igual si hay dolor.",
    price: "$75.000 · se descuenta si hay tratamiento",
    duration: "El mismo día siempre que sea posible",
    image: "/images/suite.jpg",
    body: [
      "El dolor no entiende de listas de espera ni de la Costanera a las 18:00. Reservamos un hueco diario para fracturas, infecciones, coronas despegadas y traumatismos.",
      "Si eres paciente Cian, el teléfono de urgencias está en tu alta. Si no lo eres, escribe por WhatsApp igual. Preferimos verte a que te automediques tres días.",
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
        a: "Sábados alternos en la mañana. Domingo y festivos: teléfono de guardia para pacientes en tratamiento activo.",
      },
      {
        q: "¿Llego sin hora?",
        a: "Llama o escribe antes. El hueco existe; el sillón no se improvisa. Si es trauma o hinchazón, te priorizamos.",
      },
    ],
  },
];

export const team = [
  {
    name: "Dra. Magdalena Reyes",
    role: "Directora clínica · rehabilitación y estética",
    image: "/images/magdalena.jpg",
    bio: "Cirujano dentista Universidad de Chile. Dirige Cian como se dirige un diagnóstico: con la pantalla encendida y la cifra a la vista. Dieciséis años diseñando sonrisas que no se parecen entre sí.",
    creds: "U. de Chile · Magíster en rehabilitación · Digital Smile Design",
  },
  {
    name: "Dr. Tomás Valdivia",
    role: "Implantología y cirugía oral",
    image: "/images/tomas.jpg",
    bio: "Cirugía guiada, injertos y carga inmediata cuando el hueso lo permite. Habla claro de plazos y de lo que no se puede improvisar. Operar bien es también saber cuándo no operar.",
    creds: "U. de los Andes · Magíster en implantología",
  },
  {
    name: "Dra. Javiera Muñoz",
    role: "Ortodoncia y oclusión",
    image: "/images/javiera.jpg",
    bio: "Alinea dientes y mordidas. Desconfía de los tratamientos que solo se ven de frente. La cara de perfil, en Chile, también cuenta —sobre todo con el sol de la tarde.",
    creds: "U. de Chile · Especialista en ortodoncia · alineadores",
  },
  {
    name: "Dr. Ignacio Parra",
    role: "Odontología general y pacientes con ansiedad",
    image: "/images/ignacio.jpg",
    bio: "La puerta de entrada. Revisiones, caries, y el tiempo extra que hace falta cuando alguien entra con el pulso alto. Nadie pregunta en voz alta por qué tardaste ocho años.",
    creds: "U. de Valparaíso · conservadora · sedación consciente",
  },
] as const;

export const cases = [
  {
    id: "florencia",
    name: "Florencia S.",
    age: "39 años",
    treatment: "Diseño de sonrisa · blanqueamiento y 8 carillas",
    before: "/images/florencia-before.jpg",
    after: "/images/florencia-after.jpg",
    quote:
      "No quería una sonrisa de anuncio. Quería verme descansada en las reuniones. Tardamos más en decidir el color que en cementar.",
  },
  {
    id: "andres",
    name: "Andrés M.",
    age: "51 años",
    treatment: "Implante unitario y corona",
    before: "/images/andres-before.jpg",
    after: "/images/andres-after.jpg",
    quote:
      "Tres clínicas me cotizaron por WhatsApp. Acá me hicieron un CBCT, me dijeron que no hacía falta injerto y me ahorré un millón de teatro.",
  },
] as const;

export const visitSteps = [
  {
    n: "01",
    title: "Llegas. Punto.",
    text: "Estacionamiento en el edificio, agua, luz de la cordillera. Nadie te pregunta en voz alta por qué tardaste años.",
  },
  {
    n: "02",
    title: "Conversación, no interrogatorio",
    text: "Qué te preocupa. Qué quieres. Qué no. Magdalena o Ignacio escuchan antes de recostar el sillón.",
  },
  {
    n: "03",
    title: "Escáner 3D. Sin silicona",
    text: "Un minuto en boca. Ves tus dientes en pantalla. Si hay radiografía, es digital y se queda en tu ficha.",
  },
  {
    n: "04",
    title: "Diagnóstico compartido",
    text: "Miras lo que miramos. Te traducimos. Sales entendiendo, no asintiendo.",
  },
  {
    n: "05",
    title: "Plan, plazos y pesos",
    text: "Por escrito. Con alternativas. Con cuotas si las quieres. Con código de prestación para tu isapre. Sin sorpresa en caja.",
  },
] as const;

export const tech = [
  {
    n: "01",
    title: "Escáner intraoral",
    text: "Nube de puntos en vez de pasta. Ves el modelo en el acto. Sirve para diagnóstico, carillas, implantes y alineadores.",
  },
  {
    n: "02",
    title: "CBCT de haz cónico",
    text: "El hueso no se adivina. La tomografía decide si hay implante, injerto o una conversación más honesta.",
  },
  {
    n: "03",
    title: "Diseño digital de sonrisa",
    text: "Cara, dientes y habla en el mismo archivo. El mock-up es una decisión, no un adorno.",
  },
  {
    n: "04",
    title: "Cirugía guiada",
    text: "Cuando aporta, la férula de guía coloca el implante donde el diseño lo pidió. Menos improvisación, menos hinchazón.",
  },
] as const;

export const isapres = [
  "Banmédica",
  "Colmena",
  "Consalud",
  "Cruz Blanca",
  "Esencial",
  "Nueva Masvida",
  "Vida Tres",
  "Fonasa (particular)",
] as const;

export const testimonials = [
  {
    name: "Laura G.",
    text: "El espacio no parece una clínica de pasillo y, aun así, todo es preciso. Me trataron el miedo con la misma seriedad que el esmalte.",
    meta: "Paciente de higiene y carillas · Las Condes",
  },
  {
    name: "Javier M.",
    text: "Me explicaron el reembolso de la isapre sin un comercial de por medio. Boleta el mismo día, código de prestación, listo.",
    meta: "Implante unitario · Providencia",
  },
  {
    name: "Sofía P.",
    text: "Ortodoncia a los 38. Javiera me habló de la mordida, no del filtro. El resultado se ve en las fotos y se nota al comer un completo.",
    meta: "Alineadores · Ñuñoa",
  },
] as const;

export const faqs = [
  {
    q: "¿Duele?",
    a: "La mayor parte de lo que hacemos se cubre con anestesia local. Si hay ansiedad, paramos. Si hace falta sedación consciente, se agenda. Nadie te sujeta el brazo.",
  },
  {
    q: "¿Cuánto cuesta empezar?",
    a: "Diagnóstico 3D: $49.000, descontable si sigues. Higiene: $59.000. Urgencia: $75.000. Los tratamientos mayores tienen rango publicado en cada ficha y cifra cerrada antes de empezar.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Hasta 12 cuotas sin interés con tarjetas seleccionadas, o 24 con el operador. Transferencia y Webpay el mismo día. El plan de pagos se firma con el plan clínico.",
  },
  {
    q: "¿Trabajan con isapre o Fonasa?",
    a: "Atendemos de forma particular. Emitimos boleta o factura electrónica con el código de prestación para que tu isapre te reembolse según plan. Fonasa: igual te emitimos boleta.",
  },
  {
    q: "¿Dónde se estaciona?",
    a: "En el edificio, con 90 minutos de cortesía para consultas y el día completo si hay sillón. Uber y Cabify dejan en la entrada de Nueva Costanera.",
  },
  {
    q: "¿Qué pasa si llevo años sin ir al dentista?",
    a: "Es más habitual de lo que crees. Pide primera visita y dilo al agendar. Te damos más tiempo y menos sillón, al principio.",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
