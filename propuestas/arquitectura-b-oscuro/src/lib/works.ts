export type Work = {
  slug: string;
  code: string;
  title: string;
  commune: string;
  region: string;
  year: number;
  area: number;
  type: "Casa" | "Taller" | "Pabellón";
  materials: string[];
  status: "Habitada" | "En obra" | "Permiso";
  cover: string;
  interior?: string;
  caption: string;
  lead: string;
  body: string[];
};

export const works: Work[] = [
  {
    slug: "casa-lo-curro",
    code: "U-01",
    title: "Casa Lo Curro",
    commune: "Vitacura",
    region: "Metropolitana",
    year: 2024,
    area: 428,
    type: "Casa",
    materials: ["Hormigón tabla", "Lenga", "Vidrio"],
    status: "Habitada",
    cover: "/images/locurro.jpg",
    interior: "/images/locurro-int.jpg",
    caption: "Casa Lo Curro, 2024 · Vitacura · 428 m² · hormigón tabla y lenga",
    lead: "La pendiente de Lo Curro no se nivela: se habita.",
    body: [
      "Tres terrazas de hormigón tabla bajan hacia el valle. Cada una es un recinto distinto —estar, cocina, dormitorios— y las tres miran el mismo poniente. La lenga cubre el interior; el hormigón toma el sol y envejece a la vista.",
      "El predio cae dieciocho metros. En vez de un muro de contención disfrazado, el edificio es el muro: los cortes de hormigón retienen, habitan y recogen el agua. El sismo se resuelve en los nudos, no en un recargo al final del plano.",
      "Se visitó el terreno cuatro tardes seguidas antes de dibujar. El resto del proyecto cabe en esa observación.",
    ],
  },
  {
    slug: "casa-zapallar",
    code: "U-02",
    title: "Casa Zapallar",
    commune: "Zapallar",
    region: "Valparaíso",
    year: 2023,
    area: 386,
    type: "Casa",
    materials: ["Piedra local", "Pino oregón", "Cobre"],
    status: "Habitada",
    cover: "/images/zapallar.jpg",
    interior: "/images/zapallar-int.jpg",
    caption: "Casa Zapallar, 2023 · Zapallar · 386 m² · piedra, pino y cobre",
    lead: "Muros de sesenta centímetros. El Pacífico entra por huecos, no por paños.",
    body: [
      "La casa se apoya en un acantilado bajo de Zapallar. La piedra es de la misma quebrada. El cobre de la cubierta ya empezó a ponerse verde; eso era el proyecto.",
      "Los vanos son profundos para que el viento salino no entre de frente. El pino oregón, a la intemperie, se pone gris y no se barniza. Adentro, la masa de la piedra mantiene la temperatura cuando el norte pega.",
      "Un encargo de verano que se habita todo el año. Eso cambió el corte: menos terraza, más espesor.",
    ],
  },
  {
    slug: "casa-pucon",
    code: "U-03",
    title: "Casa Pucón",
    commune: "Pucón",
    region: "Araucanía",
    year: 2025,
    area: 274,
    type: "Casa",
    materials: ["Madera quemada", "Vidrio", "Piedra"],
    status: "En obra",
    cover: "/images/pucon.jpg",
    caption: "Casa Pucón, 2025 · Pucón · 274 m² · madera quemada y vidrio",
    lead: "Un volumen horizontal frente al lago. El volcán se queda al fondo, sin marco.",
    body: [
      "La casa es una línea. No compite con el Villarrica: se agacha. La madera se quemó con shou sugi ban adaptado a lenga local, para que la lluvia del sur la deje quieta.",
      "El estar es un solo recinto con el lago a la altura de la mesa. Los dormitorios dan al bosque, no a la vista. Esa decisión se discutió tres veces y se mantuvo.",
      "Obra en curso. El barro del invierno atrasó dos meses la fundación. Ajustamos el programa de faena; no el corte.",
    ],
  },
  {
    slug: "casa-farellones",
    code: "U-04",
    title: "Casa Farellones",
    commune: "Lo Barnechea",
    region: "Metropolitana",
    year: 2022,
    area: 198,
    type: "Casa",
    materials: ["Hormigón", "Acero"],
    status: "Habitada",
    cover: "/images/farellones.jpg",
    caption: "Casa Farellones, 2022 · Lo Barnechea · 198 m² · hormigón y acero",
    lead: "Un refugio de nieve que no pretende ser cabaña.",
    body: [
      "Ciento noventa y ocho metros. Hormigón contra la ladera, un solo vano al valle, una chimenea de acero que también es estructura. En invierno la nieve se queda en la cubierta a propósito: aísla.",
      "No hay alero pintoresco. Hay un corte preciso y un encuentro entre hormigón y acero resuelto con el calderero antes de dibujarlo. El sismo de montaña no perdona el detalle.",
      "Se usa de viernes a domingo. El resto de la semana está vacía y tiene que envejecer bien vacía.",
    ],
  },
  {
    slug: "taller-recoleta",
    code: "U-05",
    title: "Taller Recoleta",
    commune: "Recoleta",
    region: "Metropolitana",
    year: 2024,
    area: 162,
    type: "Taller",
    materials: ["Ladrillo", "Acero"],
    status: "Habitada",
    cover: "/images/recoleta.jpg",
    caption: "Taller Recoleta, 2024 · Recoleta · 162 m² · ladrillo y acero",
    lead: "Un galpón de manzana que volvió a ser taller, sin fingir lo industrial.",
    body: [
      "El ladrillo era de la fábrica que ocupó el predio en los cincuenta. Lo reusamos. El acero nuevo se ve nuevo: no hay pátina falsa.",
      "Un solo recinto de trabajo, un entrepiso de habitar, un patio al fondo con un jacarandá que no se tocó. El permiso de cambio de destino tardó más que la obra.",
      "Encargo chico, disciplina grande. Sirve para recordar que no todo es ladera y mar.",
    ],
  },
  {
    slug: "casa-maitencillo",
    code: "U-06",
    title: "Casa Maitencillo",
    commune: "Puchuncaví",
    region: "Valparaíso",
    year: 2023,
    area: 341,
    type: "Casa",
    materials: ["Hormigón", "Cobre"],
    status: "Habitada",
    cover: "/images/maitencillo.jpg",
    caption: "Casa Maitencillo, 2023 · Puchuncaví · 341 m² · hormigón y cobre",
    lead: "Duna, horizonte, un largo vano. El cobre ya está opaco.",
    body: [
      "La casa se entierra medio nivel en la duna para no romper el perfil del cerro. El cobre de la fachada se eligió mate, no de catálogo brillante. El salitre hace el resto.",
      "El estar mira el Pacífico; los recintos de noche miran la duna. Un patio de viento al centro corta la casa en dos y deja pasar el norte sin calentar de más.",
      "La DOM de Puchuncaví pidió un informe de dunas. Lo hicimos con el mismo estructuralista del cálculo. Un solo expediente.",
    ],
  },
  {
    slug: "casa-puerto-varas",
    code: "U-07",
    title: "Casa Puerto Varas",
    commune: "Puerto Varas",
    region: "Los Lagos",
    year: 2021,
    area: 256,
    type: "Casa",
    materials: ["Madera nativa", "Piedra"],
    status: "Habitada",
    cover: "/images/puertovaras.jpg",
    caption:
      "Casa Puerto Varas, 2021 · Puerto Varas · 256 m² · madera nativa y piedra",
    lead: "Entre robles viejos, sobre el Llanquihue. El volcán se ve cuando quiere.",
    body: [
      "No se cortó ningún roble. La casa entra entre ellos y se apoya en piedra. La madera —lenga adentro, coigüe afuera— se dejó a la lluvia. En cinco años se puso la plata que buscábamos.",
      "El sur enseña a no abrir todo. Vanos precisos, aleros reales, un estar que se calienta con masa y leña, no con un paño de vidrio de revista.",
      "Primera obra del estudio fuera de la Región Metropolitana. El método no cambió: predio, corte, materia, permiso, faena.",
    ],
  },
  {
    slug: "pabellon-chicureo",
    code: "U-08",
    title: "Pabellón Chicureo",
    commune: "Colina",
    region: "Metropolitana",
    year: 2025,
    area: 118,
    type: "Pabellón",
    materials: ["Tierra cruda", "Madera"],
    status: "Permiso",
    cover: "/images/chicureo.jpg",
    caption: "Pabellón Chicureo, 2025 · Colina · 118 m² · tierra y madera",
    lead: "Un techo largo, un patio, un quillay. Nada más.",
    body: [
      "Encargo mínimo: un pabellón para estar, comer y guardar. Tapia del mismo predio, madera a la vista, un patio con un quillay joven. El resto es campo seco.",
      "Sirve de prototipo de tierra para encargos mayores. El permiso va en curso: la DOM de Colina pidió un ensayo de muros. Lo tenemos.",
      "Cuando una obra no necesita explicarse, el estudio ha hecho su parte.",
    ],
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getRelated(slug: string, count = 3) {
  const current = getWork(slug);
  if (!current) return works.slice(0, count);
  return works.filter((work) => work.slug !== slug).slice(0, count);
}

export function facts(work: Work) {
  return [
    { label: "Comuna", value: work.commune },
    { label: "Región", value: work.region },
    { label: "Año", value: String(work.year) },
    { label: "Superficie", value: `${work.area} m²` },
    { label: "Tipología", value: work.type },
    { label: "Materia", value: work.materials.join(" · ") },
    { label: "Estado", value: work.status },
  ];
}
