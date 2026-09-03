export const site = {
  name: "Obsidiana",
  legalName: "Obsidiana Odontología SpA",
  tagline: "Odontología de especialista",
  city: "Santiago",
  neighborhood: "Vitacura",
  address: "Av. Alonso de Córdova 5870, of. 304",
  postal: "7630000",
  fullAddress: "Av. Alonso de Córdova 5870, of. 304, Vitacura, Santiago",
  phone: "+56 9 8123 4567",
  phoneHref: "tel:+56981234567",
  phoneIntl: "+56 9 8123 4567",
  whatsapp: "https://wa.me/56981234567",
  email: "hola@obsidiana.cl",
  maps: "https://maps.google.com/?q=Av.+Alonso+de+Cordova+5870,+Vitacura",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Alonso+de+Cordova+5870,+Vitacura,+Santiago&output=embed",
  instagram: "https://instagram.com/obsidiana.cl",
  url: "https://obsidiana.cl",
  hours: [
    { day: "Lunes a viernes", time: "9:00 – 19:30" },
    { day: "Sábado", time: "10:00 – 14:00" },
    { day: "Domingo", time: "Cerrado · urgencias para pacientes en tratamiento" },
  ],
  years: "12",
  patients: "7.200",
  recommend: "97%",
  specialists: "3",
} as const;

export const nav = [
  { href: "/clinica", label: "La clínica" },
  { href: "/tratamientos", label: "Arancel" },
  { href: "/especialistas", label: "Especialistas" },
  { href: "/primera-evaluacion", label: "Primera evaluación" },
] as const;

export const protocol = [
  {
    k: "01",
    title: "El día 1",
    text: "45 minutos. Scanner, radiografía, diagnóstico en palabras simples y presupuesto por escrito. Sales entendiendo, no asintiendo.",
  },
  {
    k: "02",
    title: "Previsión",
    text: "Fonasa, isapre con reembolso o particular. Boleta siempre. El plan se firma antes de tocar un diente.",
  },
  {
    k: "03",
    title: "Vitacura",
    text: "Alonso de Córdova 5870. Lun–vie 9:00–19:30 · sáb 10:00–14:00. Hora agendada o urgencia el mismo día.",
  },
] as const;

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  lead: string;
  price: string;
  priceValue: string;
  duration: string;
  includes: string;
  image: string;
  featured?: boolean;
  body: string[];
  list: string[];
  faqs: { q: string; a: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "evaluacion",
    name: "Evaluación con radiografía",
    short: "El punto de partida. Scanner, diagnóstico y cifra cerrada.",
    headline: "Primero el diagnóstico. Después, el plan.",
    lead: "Cuarenta y cinco minutos con el especialista que te va a tratar. Scanner intraoral, radiografía, explicación en palabras simples y un presupuesto por escrito. Si el plan cambia después, te avisamos antes de partir.",
    price: "Evaluación $32.900",
    priceValue: "$32.900",
    duration: "45 min",
    includes: "Scanner, radiografía, plan por escrito",
    image: "/images/scanner.jpg",
    featured: true,
    body: [
      "No cotizamos un implante por WhatsApp. En Obsidiana la primera hora es clínica: vemos, medimos, fotografiamos y recién ahí hablamos de plata.",
      "El valor se descuenta del tratamiento si sigues. Si no sigues, te quedas con el informe. Nadie te apura en recepción.",
    ],
    list: [
      "Scanner intraoral 3D",
      "Radiografía digital",
      "Diagnóstico explicado",
      "Presupuesto por etapas",
    ],
    faqs: [
      {
        q: "¿Se descuenta si parto el tratamiento?",
        a: "Sí. Los $32.900 se abonan al plan que firmes. Si decides no seguir, el informe es tuyo.",
      },
      {
        q: "¿Tengo que recostarme sí o sí?",
        a: "Si hay ansiedad, la primera parte puede ser solo conversación y scanner. El sillón espera.",
      },
    ],
  },
  {
    slug: "higiene",
    name: "Limpieza y profilaxis",
    short: "Mantenimiento de verdad, no un barniz de cinco minutos.",
    headline: "La visita que evita las demás.",
    lead: "Ultrasonido, air-flow y revisión con cámara. Un protocolo según tu riesgo, no según el calendario de la clínica.",
    price: "Desde $42.900",
    priceValue: "$42.900",
    duration: "50 min",
    includes: "Ultrasonido, air-flow, revisión",
    image: "/images/bandeja.jpg",
    body: [
      "No es un lavado de auto. Es diagnóstico: caries incipiente, apretamiento, recesión, una restauración que envejece. Sales sabiendo qué hay y cuándo volver.",
      "Usamos air-flow de eritritol. Duele menos, limpia más y respeta esmalte e implantes.",
    ],
    list: [
      "Exploración y fotos",
      "Higiene + air-flow",
      "Fluoración si procede",
      "Próxima hora según riesgo",
    ],
    faqs: [
      {
        q: "¿Cada cuánto?",
        a: "Tres, cuatro o seis meses según periodonto y caries. Te lo decimos con datos, no con una frase comercial.",
      },
    ],
  },
  {
    slug: "restauracion",
    name: "Restauración en resina",
    short: "Reconstruir el diente, no tapar el hueco.",
    headline: "Resina que se comporta como esmalte.",
    lead: "Aislamiento, adhesión y anatomía. Una obturación bien hecha no se ve ni se siente al morder.",
    price: "Desde $64.900",
    priceValue: "$64.900",
    duration: "40–70 min",
    includes: "Aislamiento, adhesión, anatomía",
    image: "/images/ceramica.jpg",
    body: [
      "Una resina de diez minutos vuelve. Trabajamos con aislamiento absoluto cuando el caso lo pide, capas y punto de contacto real — no un bloque de plástico.",
      "Si la caries es profunda, lo decimos antes de partir: pulpa, corona o simplemente resina. Sin sorpresa a mitad de box.",
    ],
    list: [
      "Diagnóstico con foto",
      "Aislamiento cuando corresponde",
      "Resina estratificada",
      "Ajuste oclusal",
    ],
    faqs: [
      {
        q: "¿Cuánto dura?",
        a: "Con higiene y sin apretar de noche, varios años. Si roncas o bruxas, hablamos de férula. No prometemos eternidad.",
      },
    ],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia microscópica",
    short: "Un conducto bien tratado es un diente que se queda.",
    headline: "Microscopio. Conducto a conducto. Sin adivinar.",
    lead: "Endodoncia con microscopio operatorio. Localizamos conductos, medimos y sellamos. El mismo especialista de la evaluación a la obturación.",
    price: "1 conducto desde $135.000",
    priceValue: "$135.000",
    duration: "1–2 sesiones",
    includes: "Microscopio, radiografía de control",
    image: "/images/lampara.jpg",
    body: [
      "Un molar no es un diente de anuncio. Tiene anatomía. El microscopio no es un lujo: es cómo se ve lo que el ojo desnudo se salta.",
      "Si el diente no se puede salvar, te lo decimos en la evaluación. Preferimos extraer con criterio que endodonciar por inercia.",
    ],
    list: [
      "Microscopio operatorio",
      "Localización de conductos",
      "Obturación tridimensional",
      "Control radiográfico",
    ],
    faqs: [
      {
        q: "¿Duele?",
        a: "Con anestesia local, no. La molestia de los días siguientes se cubre con analgésico habitual. Si hay infección aguda, a veces hay que abrir y volver.",
      },
      {
        q: "¿Siempre hay que coronar después?",
        a: "En posteriores, casi siempre. El diente tratado se deshidrata. Te lo incluimos en el plan, no como un extra de último minuto.",
      },
    ],
  },
  {
    slug: "extraccion",
    name: "Extracción simple",
    short: "Cuando el diente no se queda. Con plan de lo que viene después.",
    headline: "Sacar el diente es la mitad. La otra es qué ocupa ese espacio.",
    lead: "Extracción atraumática cuando se puede. Si hay implante o prótesis en el horizonte, se piensa ese día — no tres meses después.",
    price: "Desde $52.900",
    priceValue: "$52.900",
    duration: "30–50 min",
    includes: "Cirugía, indicaciones, control",
    image: "/images/bandeja.jpg",
    body: [
      "Una extracción no es un trámite. Preservamos hueso si hay implante a la vista. Si es un cordal, evaluamos riesgo nervioso con radiografía antes, no en el box.",
      "Te vas con indicaciones por escrito y un teléfono. El control está incluido.",
    ],
    list: [
      "Radiografía previa",
      "Extracción atraumática",
      "Sutura si procede",
      "Control de cicatrización",
    ],
    faqs: [
      {
        q: "¿Cordales incluidos?",
        a: "Las simples, sí. Las incluidas o con riesgo de nervio se cotizan aparte, con tomografía si hace falta. No hay letra chica el día de la cirugía.",
      },
    ],
  },
  {
    slug: "blanqueamiento",
    name: "Blanqueamiento",
    short: "Color con criterio. Nunca un blanco de anuncio.",
    headline: "Aclarar, no disfrazar.",
    lead: "Protocolo en clínica o férulas, según esmalte y sensibilidad. El tono lo eliges tú frente a un espejo, no frente a un catálogo.",
    price: "Desde $94.900",
    priceValue: "$94.900",
    duration: "1 sesión o 10–14 días",
    includes: "Registro de color, protocolo, control",
    image: "/images/ceramica.jpg",
    body: [
      "El blanco extremo envejece la cara. Buscamos el tono que ya te pertenecía a los veinte, no el de un filtro.",
      "Si hay sensibilidad, bajamos concentración o pasamos a férulas. Si hay caries o recesión, se tratan antes. Blanquear sobre un problema es maquillaje.",
    ],
    list: [
      "Registro de color",
      "Limpieza previa si hace falta",
      "Gel en clínica o férulas",
      "Control a los 15 días",
    ],
    faqs: [
      {
        q: "¿Las coronas cambian de color?",
        a: "No. Solo el diente natural. Si tienes restauraciones anteriores, te lo mostramos antes para que no haya decepción.",
      },
    ],
  },
  {
    slug: "implantes",
    name: "Implante",
    short: "Cirugía precisa. Corona que parece tuya. El mismo cirujano de punta a punta.",
    headline: "Un diente que vuelve a ser parte de la cara.",
    lead: "Planificación con scanner y radiografía. Cirugía guiada cuando aporta. Corona sobre pilar personalizado. Plazos y cifra por escrito, por etapas.",
    price: "Desde $420.000",
    priceValue: "$420.000",
    duration: "Según hueso y carga",
    includes: "Planificación, cirugía, seguimiento",
    image: "/images/sillon.jpg",
    body: [
      "El implante es la raíz. Lo que se ve —la corona— es donde se gana o se pierde la naturalidad. Por eso no separamos cirugía y prótesis: el mismo equipo piensa el emergente, el color y la mordida.",
      "Si hace falta injerto, lo decimos en la evaluación, con cifra. Si se puede carga inmediata, también. Nunca un WhatsApp con un precio suelto.",
    ],
    list: [
      "Estudio y planificación",
      "Cirugía en box privado",
      "Seguimiento de osteointegración",
      "Corona sobre pilar personalizado",
    ],
    faqs: [
      {
        q: "¿Duele?",
        a: "Anestesia local. La molestia posterior suele ser de 48 horas. Si hay ansiedad, hablamos de sedación consciente.",
      },
      {
        q: "¿Puedo pagar en cuotas?",
        a: "Sí. Hasta 12 cuotas. El plan de pagos se firma con el plan de tratamiento, no con un comercial de pasillo.",
      },
    ],
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia con alineadores",
    short: "Alinear con control de la mordida, no solo de Instagram.",
    headline: "Ordenar lo que ya está, sin teatro.",
    lead: "Alineadores con control clínico cada 6–8 semanas. Estudio de oclusión, no un kit por correo. Retención al alta: sin ella, el diente vuelve.",
    price: "Desde $48.000 / mes",
    priceValue: "$48.000/mes",
    duration: "6–18 meses",
    includes: "Estudio, férulas, controles, retención",
    image: "/images/scanner.jpg",
    body: [
      "Enderezar dientes sin mirar la mordida es decorar una casa con la estructura torcida. El estudio incluye articulación, hábitos y encía. Los alineadores son la herramienta, no el plan.",
      "Comes lo que quieras. Vienes a control, no a que te aprieten un alambre. Al final, retención. Se lo decimos a todo el mundo.",
    ],
    list: [
      "Estudio y scanner",
      "Simulación de movimiento",
      "Revisiones clínicas",
      "Retención al alta",
    ],
    faqs: [
      {
        q: "¿Es Invisalign?",
        a: "Trabajamos con sistemas de alineadores de grado clínico. Te diremos cuál encaja en tu caso, no cuál tiene más avisos.",
      },
      {
        q: "¿Sirve en adultos?",
        a: "Sí. La mayoría de nuestros pacientes de ortodoncia tiene más de treinta. El hueso adulto se mueve; tarda un poco más y pide constancia.",
      },
    ],
  },
  {
    slug: "estetica",
    name: "Estética adhesiva",
    short: "Carillas y recubrimientos mínimos. Lo contrario de un diente de anuncio.",
    headline: "Porcelana que no se señala.",
    lead: "Carillas ultrafinas o recubrimientos adhesivos. Color, translucidez y borde incisal como un diente vivo. Si se puede no tallar, no se talla.",
    price: "Consulta de diseño $32.900",
    priceValue: "Desde consulta",
    duration: "2–3 visitas",
    includes: "Diseño, mock-up, prueba en boca",
    image: "/images/ceramica.jpg",
    body: [
      "Hay clínicas que copian una sonrisa de catálogo. Aquí partimos de tu cara, tu habla y tu mordida. Ves el mock-up. Si no te reconoces, no seguimos.",
      "El laboratorio no es un almacén. Es un ceramista con nombre y una prueba en boca. Ajustamos forma y textura contigo sentado, no sobre una foto.",
    ],
    list: [
      "Diseño digital y fotográfico",
      "Mock-up en boca",
      "Preparación mínima o nula",
      "Cementado bajo aislamiento",
    ],
    faqs: [
      {
        q: "¿El diseño obliga a hacer carillas?",
        a: "No. A veces basta un blanqueamiento, un recorte de encía o alineadores. El diseño sirve para decidir, no para vender más.",
      },
    ],
  },
  {
    slug: "urgencias",
    name: "Urgencia",
    short: "Dolor, un diente roto, una corona que se cayó. Hoy.",
    headline: "Cuando no puede esperar a la agenda.",
    lead: "Hueco de urgencia cada mañana. Si duele, llama. Preferimos verte a que te automediques tres días.",
    price: "Urgencia $52.900",
    priceValue: "$52.900",
    duration: "El mismo día si hay cupo",
    includes: "Alivio, radiografía, plan de continuidad",
    image: "/images/sillon.jpg",
    body: [
      "El dolor no entiende de listas de espera. Reservamos un cupo diario para fracturas, infecciones, coronas despegadas y traumatismos.",
      "Si eres paciente de Obsidiana, el teléfono de urgencia está en tu alta. Si no lo eres, llama igual.",
    ],
    list: [
      "Atención el mismo día",
      "Alivio del dolor",
      "Radiografía si procede",
      "Plan de continuidad",
    ],
    faqs: [
      {
        q: "¿Los fines de semana?",
        a: "Sábado en la mañana. Domingo y festivos: teléfono de guardia para pacientes en tratamiento activo.",
      },
    ],
  },
];

export const tariff = treatments.filter((t) =>
  [
    "evaluacion",
    "higiene",
    "restauracion",
    "endodoncia",
    "extraccion",
    "blanqueamiento",
    "implantes",
    "ortodoncia",
  ].includes(t.slug)
);

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export const specialties = [
  {
    n: "01",
    name: "Endodoncia microscópica",
    text: "Conductos que el ojo desnudo se salta. Microscopio, medición y sello. El diente se queda cuando se puede quedar.",
    href: "/tratamientos/endodoncia",
  },
  {
    n: "02",
    name: "Implantología",
    text: "Planificación, cirugía y corona en el mismo equipo. Plazos honestos. Cifra por etapas. Sin cotización suelta.",
    href: "/tratamientos/implantes",
  },
  {
    n: "03",
    name: "Ortodoncia con alineadores",
    text: "Movimiento con control de mordida. Controles en Vitacura, no un kit por correo. Retención al alta.",
    href: "/tratamientos/ortodoncia",
  },
  {
    n: "04",
    name: "Estética adhesiva",
    text: "Carillas y recubrimientos mínimos. Ves el mock-up. Si no te reconoces, no seguimos.",
    href: "/tratamientos/estetica",
  },
] as const;

export const evaluationSteps = [
  {
    n: "01",
    title: "Te recibimos. Punto.",
    text: "Agua, luz baja, un sillón de espera que no es de feria. Nadie pregunta en voz alta por qué tardaste años.",
  },
  {
    n: "02",
    title: "Conversación, no interrogatorio",
    text: "Qué te preocupa. Qué quieres. Qué no. El especialista que te va a tratar es quien escucha.",
  },
  {
    n: "03",
    title: "Scanner y radiografía",
    text: "Sin silicona. Un minuto en boca. Ves tus dientes en pantalla. La radiografía es digital y se queda en tu ficha.",
  },
  {
    n: "04",
    title: "Plan, plazos y cifra",
    text: "Por escrito. Con alternativas. Con cuotas si las quieres. Sin sorpresa en caja. Firmas antes de partir.",
  },
] as const;

export const coverage = [
  {
    name: "Fonasa",
    kicker: "Bono y copago",
    text: "Atendemos Fonasa. Algunas prestaciones con bono; el copago te lo decimos antes, en pesos, no en porcentajes opacos.",
  },
  {
    name: "Isapre",
    kicker: "Reembolso y convenio",
    text: "Boleta reembolsable siempre. Convenios con las principales isapres. Te armamos el paquete de reembolso para que no persigas papeles.",
  },
  {
    name: "Particular",
    kicker: "Cifra cerrada",
    text: "Transferencia, tarjeta o hasta 12 cuotas. El valor final se confirma tras diagnóstico. Si el plan cambia, te avisamos antes.",
  },
] as const;

export const team = [
  {
    slug: "magdalena-vial",
    name: "Dra. Magdalena Vial",
    role: "Directora médica · estética adhesiva y rehabilitación",
    creds: "Universidad de Chile · rehabilitación oral",
    bio: "Dirige Obsidiana como se dirige un taller: cada caso tiene autor. Catorce años diseñando sonrisas que no se parecen entre sí. Si el mock-up no te representa, para.",
  },
  {
    slug: "vicente-ossandon",
    name: "Dr. Vicente Ossandón",
    role: "Implantología y cirugía oral",
    creds: "Universidad de los Andes · cirugía guiada",
    bio: "Cirugía precisa, injertos cuando hacen falta, carga inmediata cuando el hueso lo permite. Habla claro de plazos y de lo que no se puede improvisar.",
  },
  {
    slug: "antonia-belmar",
    name: "Dra. Antonia Belmar",
    role: "Endodoncia microscópica y ortodoncia",
    creds: "Especialista · microscopio y alineadores",
    bio: "Conducto a conducto, y alineadores con control de oclusión. Desconfía de los tratamientos que solo se ven de frente. El perfil también cuenta.",
  },
] as const;

export const cases = [
  {
    id: "07",
    title: "Rehabilitación sobre implantes",
    meta: "5 meses · 4 implantes · prótesis atornillada",
    text: "Pérdida posterior. Plan de cinco meses por escrito: injerto, osteointegración, prótesis. El mismo cirujano de la evaluación a la corona. Cifra por etapas, sin extras de último minuto.",
  },
  {
    id: "12",
    title: "Endodoncia de molar y corona",
    meta: "3 semanas · 1 molar · corona sobre diente tratado",
    text: "Dolor nocturno. Microscopio, tres conductos, corona adhesiva. El paciente llegó por urgencia y se quedó por el plan. Control a los seis meses: el diente sigue.",
  },
  {
    id: "19",
    title: "Alineadores y seis carillas",
    meta: "11 meses · ortodoncia + estética",
    text: "Primero la mordida, después la porcelana. Once meses de alineadores, mock-up, seis carillas de preparación mínima. El blanco se eligió de pie, frente al espejo, no en una tablet.",
  },
] as const;

export const faqs = [
  {
    q: "¿Trabajan con Fonasa e isapre?",
    a: "Sí. Fonasa con bono en algunas prestaciones. Isapre con boleta reembolsable y convenios. Particular con cifra cerrada. Te explicamos el camino de pago en la evaluación, antes de partir.",
  },
  {
    q: "¿El valor de la evaluación se descuenta?",
    a: "Sí. Los $32.900 se abonan al tratamiento que firmes. Si decides no seguir, el informe y las imágenes son tuyos.",
  },
  {
    q: "¿Duele?",
    a: "La mayor parte se cubre con anestesia local. Si hay ansiedad, paramos. Si hace falta sedación consciente, se agenda. Nadie te sujeta el brazo.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Hasta 12 cuotas. El plan de pagos se firma con el plan de tratamiento. Sin comercial de pasillo ni letra chica en otro mostrador.",
  },
  {
    q: "¿Atienden urgencias?",
    a: "Hueco cada mañana. Si duele, llama al +56 9 8123 4567. No uses el formulario. Pacientes en tratamiento activo tienen teléfono de guardia el domingo.",
  },
  {
    q: "¿Me va a tratar siempre la misma persona?",
    a: "Sí. Somos tres especialistas y no rotamos tu caso. Quien te evalúa es quien te opera, te endodoncia o te cementa.",
  },
] as const;

export const honestLine =
  "Si el plan cambia después de la evaluación, te avisamos antes de partir. Nunca iniciamos sin tu aprobación por escrito.";
