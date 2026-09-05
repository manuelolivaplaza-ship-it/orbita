export type Chequeo = {
  slug: string;
  nombre: string;
  tagline: string;
  precio: number;
  plazo: string;
  ayuno: string;
  para: string;
  incluye: string[];
  destacado?: boolean;
};

export const chequeos: Chequeo[] = [
  {
    slug: "amanecer",
    nombre: "Chequeo Amanecer",
    tagline: "Lo que todo cuerpo adulto debería saber de sí, una vez al año.",
    precio: 52900,
    plazo: "Informe al amanecer",
    ayuno: "8–12 horas",
    para: "Adultos desde los 30, sin síntomas, que quieren un retrato claro.",
    incluye: [
      "Hemograma completo",
      "Glicemia en ayunas",
      "Perfil lipídico",
      "TSH",
      "Orina completa",
    ],
    destacado: true,
  },
  {
    slug: "ocaso",
    nombre: "Chequeo Ocaso",
    tagline: "Sales del trabajo. Te tomamos a las 19:00. El informe está mañana a las 06:12.",
    precio: 58900,
    plazo: "Informe al amanecer",
    ayuno: "8 horas — cenas a las 11:00, te tomamos a las 19:00",
    para: "Quienes no pueden venir de mañana. El turno de ocaso existe para eso.",
    incluye: [
      "Todo el Chequeo Amanecer",
      "PCR ultrasensible",
    ],
    destacado: true,
  },
  {
    slug: "constelacion",
    nombre: "Chequeo Constelación",
    tagline: "Más capas: hígado, riñón, hierro, vitamina D e inflamación.",
    precio: 98900,
    plazo: "Hasta 24 h",
    ayuno: "8–12 horas",
    para: "Quienes hace más de un año no se miran por dentro, o tienen antecedentes.",
    incluye: [
      "Todo el Chequeo Amanecer",
      "Perfil hepático",
      "Perfil renal",
      "Ferritina",
      "Vitamina D",
      "PCR ultrasensible",
    ],
    destacado: true,
  },
  {
    slug: "mujer",
    nombre: "Chequeo Mujer",
    tagline: "Hierro, tiroides, ciclo y la vitamina que el invierno chileno esconde.",
    precio: 124900,
    plazo: "Hasta 24 h",
    ayuno: "8 horas",
    para: "Mujeres de 25 a 55. Se adapta si estás en anticonceptivos o cerca de la perimenopausia.",
    incluye: [
      "Hemograma y ferritina",
      "Perfil lipídico",
      "Perfil tiroideo",
      "Vitamina D y B12",
      "Glicemia",
      "Orina completa",
    ],
  },
  {
    slug: "hombre",
    nombre: "Chequeo Hombre",
    tagline: "Metabolismo, corazón y, cuando corresponde, próstata.",
    precio: 114900,
    plazo: "Hasta 24 h",
    ayuno: "12 horas",
    para: "Hombres desde los 35. El PSA se incluye desde los 50, o antes si hay historia familiar.",
    incluye: [
      "Hemograma",
      "Perfil lipídico y glicemia",
      "Perfil hepático y renal",
      "TSH",
      "Vitamina D",
      "PSA total (según edad)",
    ],
  },
];
