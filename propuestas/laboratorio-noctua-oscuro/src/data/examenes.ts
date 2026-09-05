export const categorias = [
  "Hematología",
  "Bioquímica",
  "Hormonas",
  "Vitaminas",
  "Orina",
  "Infecciosos",
  "Preventivo",
] as const;

export type Categoria = (typeof categorias)[number];

export type Examen = {
  slug: string;
  codigo: string;
  nombre: string;
  categoria: Categoria;
  precio: number;
  plazo: string;
  muestra: string;
  ayuno: string;
  destacado?: boolean;
  resumen: string;
  paraQue: string;
  preparacion: string[];
  notas?: string;
};

export const examenes: Examen[] = [
  {
    slug: "hemograma-completo",
    codigo: "NOC-HEM-01",
    nombre: "Hemograma completo",
    categoria: "Hematología",
    precio: 9900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    destacado: true,
    resumen:
      "El retrato celular de tu sangre. Glóbulos, plaquetas, recuento. Lo primero que se nombra cuando el cuerpo no aclara.",
    paraQue:
      "Anemias, infecciones, inflamación y el estado de la médula. Es el examen de entrada de casi cualquier chequeo.",
    preparacion: [
      "No requiere ayuno.",
      "Informa anticoagulantes o una infección reciente.",
      "La toma dura menos de cinco minutos.",
    ],
  },
  {
    slug: "vhs",
    codigo: "NOC-HEM-02",
    nombre: "VHS",
    categoria: "Hematología",
    precio: 5500,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "Una medida clásica de inflamación, útil cuando el cuerpo avisa sin decir dónde.",
    paraQue:
      "La velocidad de sedimentación orienta sobre procesos inflamatorios o infecciosos que se alargan.",
    preparacion: ["No requiere ayuno ni preparación especial."],
  },
  {
    slug: "grupo-sanguineo-rh",
    codigo: "NOC-HEM-03",
    nombre: "Grupo sanguíneo y Rh",
    categoria: "Hematología",
    precio: 8500,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "Tu tipo de sangre, determinado una vez y para siempre.",
    paraQue:
      "Embarazo, cirugías, donación. Cualquier momento en que la compatibilidad no admite duda.",
    preparacion: ["No requiere ayuno."],
  },
  {
    slug: "hba1c",
    codigo: "NOC-HEM-04",
    nombre: "Hemoglobina glicosilada (HbA1c)",
    categoria: "Hematología",
    precio: 14900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    destacado: true,
    resumen:
      "El promedio de tu glicemia de los últimos tres meses, sin el nerviosismo de un ayuno.",
    paraQue:
      "Diagnóstico y seguimiento de diabetes o prediabetes. A diferencia de la glicemia, no se altera por lo que cenaste.",
    preparacion: [
      "No requiere ayuno.",
      "Si vives con diabetes, tráenos el rango que te indicó tu médico.",
    ],
  },
  {
    slug: "glicemia",
    codigo: "NOC-BIO-01",
    nombre: "Glicemia en ayunas",
    categoria: "Bioquímica",
    precio: 4900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "8 horas",
    resumen: "El azúcar en sangre, medido en el silencio de la mañana —o después del trabajo, con ayuno de 8 horas.",
    paraQue:
      "Punto de partida para evaluar metabolismo de la glucosa, prediabetes y diabetes.",
    preparacion: [
      "Ayuno de 8 horas. Agua está permitida.",
      "Evita café, jugos y ejercicio intenso antes de la toma.",
      "Si tomas metformina u otro hipoglicemiante, consulta a tu médico si debes omitir la dosis.",
    ],
  },
  {
    slug: "perfil-lipidico",
    codigo: "NOC-BIO-02",
    nombre: "Perfil lipídico",
    categoria: "Bioquímica",
    precio: 16900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "12 horas",
    destacado: true,
    resumen:
      "Colesterol total, HDL, LDL y triglicéridos: el mapa de tus grasas circulantes.",
    paraQue:
      "Riesgo cardiovascular. En Chile, es uno de los exámenes que más cambia una conversación con el internista.",
    preparacion: [
      "Ayuno de 12 horas. Solo agua.",
      "La noche anterior, cena liviana. Evita alcohol 24 horas.",
      "Mantén tu medicación habitual, salvo indicación médica.",
    ],
  },
  {
    slug: "perfil-bioquimico",
    codigo: "NOC-BIO-03",
    nombre: "Perfil bioquímico",
    categoria: "Bioquímica",
    precio: 24900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "8 horas",
    destacado: true,
    resumen:
      "Una lectura amplia del metabolismo: hígado, riñón, proteínas y electrolitos.",
    paraQue:
      "Chequeo general, controles de tratamiento y una fotografía del estado interno cuando los síntomas no apuntan a un solo órgano.",
    preparacion: [
      "Ayuno de 8 horas.",
      "Informa diuréticos, estatinas o antiinflamatorios.",
    ],
  },
  {
    slug: "perfil-hepatico",
    codigo: "NOC-BIO-04",
    nombre: "Perfil hepático",
    categoria: "Bioquímica",
    precio: 18900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "8 horas",
    resumen: "Las enzimas que el hígado suelta cuando algo no cierra.",
    paraQue:
      "Evaluación de hígado, seguimiento de medicamentos y estudio de fatiga o ictericia.",
    preparacion: [
      "Ayuno de 8 horas.",
      "Evita alcohol 48 horas.",
      "Informa estatinas, anticonvulsivantes o paracetamol habitual.",
    ],
  },
  {
    slug: "perfil-renal",
    codigo: "NOC-BIO-05",
    nombre: "Perfil renal",
    categoria: "Bioquímica",
    precio: 15900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "8 horas",
    resumen: "Creatinina, urea y electrolitos: lo que el riñón no dice en voz alta.",
    paraQue:
      "Función renal, hipertensión, diabetes y control de medicamentos que pasan por el riñón.",
    preparacion: [
      "Ayuno de 8 horas.",
      "Hidrátate con agua. Evita ejercicio intenso el día anterior.",
    ],
  },
  {
    slug: "pcr-ultrasensible",
    codigo: "NOC-BIO-06",
    nombre: "PCR ultrasensible",
    categoria: "Bioquímica",
    precio: 12900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "Inflamación de baja intensidad, la que no da fiebre y sí da riesgo.",
    paraQue:
      "Riesgo cardiovascular residual y seguimiento de procesos inflamatorios sutiles.",
    preparacion: [
      "No requiere ayuno.",
      "Si tienes una infección aguda, dínoslo: el número se mueve.",
    ],
  },
  {
    slug: "tsh",
    codigo: "NOC-HOR-01",
    nombre: "TSH",
    categoria: "Hormonas",
    precio: 13900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    destacado: true,
    resumen:
      "La hormona que le ordena a la tiroides. Un número que explica fatiga, frío, peso y ánimo con más frecuencia de la que se admite.",
    paraQue:
      "Tamizaje de hipo e hipertiroidismo. Primer paso antes de un perfil tiroideo completo.",
    preparacion: [
      "No requiere ayuno.",
      "Tómalo a la misma hora si es un control. La TSH tiene ritmo circadiano.",
      "Informa levotiroxina: la tomas después de la muestra, no antes.",
    ],
  },
  {
    slug: "perfil-tiroideo",
    codigo: "NOC-HOR-02",
    nombre: "Perfil tiroideo",
    categoria: "Hormonas",
    precio: 32900,
    plazo: "Hasta 24 h",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "TSH, T4 libre y T3: el diálogo completo de la glándula.",
    paraQue:
      "Cuando la TSH no basta, o hay síntomas que piden más capas: cabello, ciclo, palpitaciones, frío.",
    preparacion: [
      "No requiere ayuno.",
      "Si tomas levotiroxina, ven en ayunas de pastilla: la dosis es después de la toma.",
    ],
  },
  {
    slug: "testosterona-total",
    codigo: "NOC-HOR-03",
    nombre: "Testosterona total",
    categoria: "Hormonas",
    precio: 21900,
    plazo: "Hasta 24 h",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "La hormona que más se malinterpreta. Se mide; no se adivina.",
    paraQue:
      "Fatiga, baja de masa, disfunción, seguimiento de terapia. En mujeres, también cuando el ciclo o el vello lo piden.",
    preparacion: [
      "Mejor en la mañana: el pico es temprano.",
      "No requiere ayuno.",
    ],
    notas: "En el turno de ocaso el valor puede ser más bajo. Lo anotamos.",
  },
  {
    slug: "bhcg",
    codigo: "NOC-HOR-04",
    nombre: "β-hCG cuantitativa",
    categoria: "Hormonas",
    precio: 14900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "La hormona del embarazo, leída en sangre, con número.",
    paraQue:
      "Confirmación precoz, seguimiento de cifras, descarte cuando un test de orina no cierra.",
    preparacion: ["No requiere ayuno. Se puede tomar a cualquier hora."],
  },
  {
    slug: "vitamina-d",
    codigo: "NOC-VIT-01",
    nombre: "Vitamina D (25-OH)",
    categoria: "Vitaminas",
    precio: 28900,
    plazo: "Hasta 24 h",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    destacado: true,
    resumen:
      "La vitamina que Santiago esconde entre el smog, el invierno y las oficinas. Casi nunca está donde debería.",
    paraQue:
      "Huesos, ánimo, inmunidad. En Chile, un déficit frecuente que un internista quiere ver por escrito.",
    preparacion: ["No requiere ayuno.", "Informa si ya suplementas: el número cambia."],
  },
  {
    slug: "vitamina-b12",
    codigo: "NOC-VIT-02",
    nombre: "Vitamina B12",
    categoria: "Vitaminas",
    precio: 18900,
    plazo: "Hasta 24 h",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "La vitamina de la médula y del nervio. Baja en vegetarianos, en metformina, en años.",
    paraQue:
      "Anemia, hormigueos, fatiga, seguimiento de dieta restrictiva o de metformina crónica.",
    preparacion: ["No requiere ayuno."],
  },
  {
    slug: "ferritina",
    codigo: "NOC-VIT-03",
    nombre: "Ferritina",
    categoria: "Vitaminas",
    precio: 15900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "El depósito de hierro. El número que explica el cansancio cuando el hemograma aún se ve bien.",
    paraQue:
      "Anemia ferropénica, fatiga en mujeres en edad fértil, control de suplementación.",
    preparacion: [
      "No requiere ayuno.",
      "Evita tomarte el hierro la mañana de la muestra.",
    ],
  },
  {
    slug: "orina-completa",
    codigo: "NOC-ORI-01",
    nombre: "Orina completa",
    categoria: "Orina",
    precio: 6900,
    plazo: "Informe al amanecer",
    muestra: "Orina",
    ayuno: "No requiere",
    resumen: "El primer chorro de la mañana cuenta más de lo que se cree.",
    paraQue:
      "Infección, sangre oculta, proteínas, densidad. El examen más antiguo y todavía el más útil.",
    preparacion: [
      "Primera orina de la mañana, si puedes.",
      "Higiene genital previa. Frasco estéril: te lo damos.",
    ],
  },
  {
    slug: "urocultivo",
    codigo: "NOC-ORI-02",
    nombre: "Urocultivo",
    categoria: "Orina",
    precio: 18900,
    plazo: "48–72 h",
    muestra: "Orina",
    ayuno: "No requiere",
    resumen: "No basta con ver: hay que cultivar. El germen y su sensibilidad.",
    paraQue:
      "Infección urinaria, recaídas, embarazo. El antibiograma llega cuando el cultivo habla.",
    preparacion: [
      "Chorro medio, frasco estéril.",
      "Si ya empezaste antibiótico, dínoslo: el cultivo se apaga.",
    ],
  },
  {
    slug: "vih-4ta",
    codigo: "NOC-INF-01",
    nombre: "VIH 4ª generación",
    categoria: "Infecciosos",
    precio: 18900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "Antígeno y anticuerpo. Confidencial. Sin cola y sin comentario de más.",
    paraQue:
      "Tamizaje, control de pareja, tranquilidad con un número, no con un rumor.",
    preparacion: [
      "No requiere ayuno.",
      "El informe llega a tu correo, cifrado. Nadie más lo abre.",
    ],
    notas: "Si el resultado pide confirmación, te llamamos nosotras. No un bot.",
  },
  {
    slug: "vdrl",
    codigo: "NOC-INF-02",
    nombre: "VDRL",
    categoria: "Infecciosos",
    precio: 8900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "Sífilis, leída con el examen que todavía se pide en prenatal y en control.",
    paraQue: "Prenatal, tamizaje, seguimiento de tratamiento.",
    preparacion: ["No requiere ayuno."],
  },
  {
    slug: "hepatitis-b-c",
    codigo: "NOC-INF-03",
    nombre: "Hepatitis B y C (HBsAg + anti-HCV)",
    categoria: "Infecciosos",
    precio: 24900,
    plazo: "Hasta 24 h",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "Dos virus que el hígado aguanta en silencio. Se buscan; no se esperan.",
    paraQue:
      "Chequeo, exposición de riesgo, control preoperatorio, estudio de transaminasas altas.",
    preparacion: ["No requiere ayuno."],
  },
  {
    slug: "psa-total",
    codigo: "NOC-PRE-01",
    nombre: "PSA total",
    categoria: "Preventivo",
    precio: 16900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "No requiere",
    resumen: "El antígeno que el internista pide desde los 50 —o antes, si hay historia.",
    paraQue:
      "Tamizaje de próstata. Un número, no un veredicto. Se lee con tacto rectal y con contexto.",
    preparacion: [
      "No requiere ayuno.",
      "Evita bicicleta, eyaculación y tacto rectal 48 horas antes.",
    ],
  },
  {
    slug: "perfil-acido-urico",
    codigo: "NOC-PRE-02",
    nombre: "Ácido úrico",
    categoria: "Preventivo",
    precio: 5900,
    plazo: "Informe al amanecer",
    muestra: "Sangre venosa",
    ayuno: "8 horas",
    resumen: "El cristal que duele en el dedo gordo y se fabrica en silencio.",
    paraQue: "Gota, síndrome metabólico, control de dieta y de diuréticos.",
    preparacion: ["Ayuno de 8 horas.", "Evita alcohol y comidas muy proteicas la noche anterior."],
  },
];

export function examenBySlug(slug: string) {
  return examenes.find((item) => item.slug === slug);
}

export function examenesByCategoria(categoria: Categoria) {
  return examenes.filter((item) => item.categoria === categoria);
}
