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
    slug: "esencial",
    nombre: "Chequeo esencial",
    tagline: "Lo que todo cuerpo adulto debería saber de sí, una vez al año.",
    precio: 49900,
    plazo: "24 horas",
    ayuno: "8 horas",
    para: "Adultos desde los 30 años, sin síntomas, que quieren un retrato claro.",
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
    slug: "completo",
    nombre: "Chequeo completo",
    tagline: "Más capas: hígado, riñón, hierro, vitamina D e inflamación.",
    precio: 89900,
    plazo: "48 horas",
    ayuno: "8–12 horas",
    para: "Quienes hace más de un año no se miran por dentro, o tienen antecedentes familiares.",
    incluye: [
      "Todo el Chequeo esencial",
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
    nombre: "Chequeo mujer",
    tagline: "Hierro, tiroides, ciclo y la vitamina que el invierno chileno esconde.",
    precio: 119900,
    plazo: "48 horas",
    ayuno: "8 horas",
    para: "Mujeres de 25 a 55 años. Se adapta si estás en anticonceptivos o cerca de la perimenopausia.",
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
    nombre: "Chequeo hombre",
    tagline: "Metabolismo, corazón y, cuando corresponde, próstata.",
    precio: 109900,
    plazo: "48 horas",
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
  {
    slug: "metabolico",
    nombre: "Chequeo metabólico",
    tagline: "Glicemia, insulina, lípidos y el hilo fino de la prediabetes.",
    precio: 79900,
    plazo: "24 horas",
    ayuno: "12 horas",
    para: "Antecedentes de diabetes, ovario poliquístico, sobrepeso o glicemias que “andan altas”.",
    incluye: [
      "Glicemia en ayunas",
      "Insulina y HOMA",
      "HbA1c",
      "Perfil lipídico",
      "Ácido úrico",
      "Perfil hepático",
    ],
  },
  {
    slug: "deportivo",
    nombre: "Chequeo deportivo",
    tagline: "Sangre, hierro, tiroides y recuperación: para quien entrena de verdad.",
    precio: 99900,
    plazo: "48 horas",
    ayuno: "8 horas",
    para: "Corredores, ciclistas, trekking andino y quienes entrenan más de cuatro veces a la semana.",
    incluye: [
      "Hemograma y ferritina",
      "Perfil hepático",
      "TSH",
      "Vitamina D",
      "Vitamina B12",
      "Creatinina",
    ],
  },
];
