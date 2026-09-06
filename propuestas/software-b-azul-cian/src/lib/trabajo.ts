import { traces, type TraceKey } from "@/lib/traces";

export type Trabajo = {
  slug: string;
  code: string;
  name: string;
  sector: string;
  year: string;
  location: string;
  cover: string;
  coverAlt: string;
  caption: string;
  headline: string;
  lede: string;
  challenge: string;
  approach: string[];
  outcome: string;
  quote: { text: string; author: string; role: string };
  stack: string[];
  trace: TraceKey;
};

export const trabajos: Trabajo[] = [
  {
    slug: "puerto-san-vicente",
    code: "TRZ-24-02",
    name: "Puerto San Vicente",
    sector: "Puerto",
    year: "2024",
    location: "San Vicente, Talcahuano",
    cover: "/images/puerto.jpg",
    coverAlt:
      "Pórtico de ingreso vacío en un puerto del Pacífico, barrera levantada y contenedores al fondo.",
    caption: "Pórtico 2 · San Vicente · 36°44′S",
    headline: "Cada camión, una traza.",
    lede: "Del OCR del gate al stack del patio, un identificador. El chofer, el TOS y el turno leen el mismo hecho.",
    challenge:
      "San Vicente mueve camiones de madrugada. La patente vivía en una cámara, el slot en una planilla del patio, el contenedor en el TOS, el aviso en un grupo. Un desvío se enteraba por radio. Un reclamo, tres días después. Nadie podía seguir un camión sin armar una carpeta.",
    approach: [
      "Hicimos estación en el gate y en el patio. El lenguaje real: pórtico, patente, slot, stack, peso, cabina. El software se diseña con esas palabras.",
      "Una traza por camión. OCR, habilitación, slot, báscula, TOS, aviso, firma. Si un span falla, se ve. No se traduce en un correo.",
      "El tablet de cabina muestra C-14, no un PDF. El sol de frente no es un edge case: es el turno de las ocho.",
      "Cada evento queda con autor y hora Santiago. Cuando cambia el turno, el patio no se reinicia.",
    ],
    outcome:
      "El grupo de WhatsApp se quedó para el asado. El despachador y el chofer ven el mismo número. Un inspector sigue un camión sin pedir una carpeta.",
    quote: {
      text: "Si el sistema no se entiende con el sol de frente y un camión esperando, no sirve. Este se entiende.",
      author: "Patricia Venegas",
      role: "Jefa de patio, Puerto San Vicente",
    },
    stack: ["TypeScript", "Go", "Postgres", "Eventos", "TOS"],
    trace: "puerto",
  },
  {
    slug: "mutual-del-sur",
    code: "TRZ-23-06",
    name: "Mutual del Sur",
    sector: "Seguros",
    year: "2023",
    location: "Concepción",
    cover: "/images/mutual.jpg",
    coverAlt:
      "Sala de espera vacía de una mutual: sillas de madera, vidrio esmerilado y luz fría de mañana.",
    caption: "Mesa de reembolso · Concepción · 36°49′S",
    headline: "El reembolso, de la mesa al banco.",
    lede: "Una prestación deja de ser una carpeta. Folio, tope, liquidación y abono en una sola traza que el afiliado puede leer.",
    challenge:
      "La boleta llegaba a una mesa, la cobertura vivía en un core, tesorería armaba un Excel los jueves, el afiliado llamaba para saber si “ya estaba en proceso”. Un tope se aplicaba sin que nadie pudiera señalar en qué línea. Un inspector pedía origen y se armaba una caja.",
    approach: [
      "La prestación es la unidad. Desde el ingreso hasta el abono, un folio que no se pierde entre mesa, clínica, caja y banco.",
      "El tope no se esconde: se muestra en la misma línea, con el saldo. Un warn en la traza, no un silencio.",
      "Tesorería deja de reescribir el monto. La liquidación es un span, no una planilla.",
      "El aviso al afiliado lleva folio, monto y fecha. Sin eufemismos.",
    ],
    outcome:
      "Los llamados de “¿ya está?” bajaron porque la traza es pública para el afiliado. Un fiscalizador sigue un folio sin caja de archivos.",
    quote: {
      text: "Antes el tope era una conversación incómoda. Ahora está en la línea, y la gente lo entiende.",
      author: "Rosa Cárdenas",
      role: "Jefa de prestaciones, Mutual del Sur",
    },
    stack: ["TypeScript", "Postgres", "Eventos", "Core legado"],
    trace: "mutual",
  },
  {
    slug: "cobre-loa",
    code: "TRZ-24-01",
    name: "Cobre Loa",
    sector: "Minería",
    year: "2024",
    location: "Calama",
    cover: "/images/faena.jpg",
    coverAlt:
      "Corredor industrial vacío con baranda amarilla y una ventana al acopio y la correa transportadora.",
    caption: "Turno B · faena El Toro · 22°27′S",
    headline: "La orden no se pierde en el pit.",
    lede: "De la pala a la tolva, un identificador que aguanta el polvo y la señal intermitente. El relevo no pregunta por radio qué quedó pendiente.",
    challenge:
      "Cobre Loa despacha palas en el pit y recibe en planta. La OT vivía en un radio, el acuse en un cuaderno, la muestra en una planilla del laboratorio, el acopio en otro sistema. Cuando un turno se atrasaba, la planta se enteraba por el camión, no por el dato.",
    approach: [
      "La OT es la unidad. Desde el despacho hasta el cierre de bitácora, un id que no se rebautiza entre pit, planta y laboratorio.",
      "El pontón digital —aquí, la cabina— carga con señal intermitente: primero el hecho, después la sincronización.",
      "La muestra de ley viaja con la misma OT. El laboratorio no abre otra planilla.",
      "El cierre de turno es un span, no una conversación en el casino.",
    ],
    outcome:
      "El relevo abre la bitácora y ve OT-774 cerrada, con spans. La radio se quedó para lo que la radio sabe hacer: el imprevisto.",
    quote: {
      text: "Si no se entiende a las tres, con viento y una pala detenida, no está listo. Este se entiende.",
      author: "Héctor Mamani",
      role: "Supervisor de turno B, Cobre Loa",
    },
    stack: ["Go", "Postgres", "Eventos", "Radio / borde"],
    trace: "faena",
  },
];

export function getTrabajo(slug: string) {
  return trabajos.find((item) => item.slug === slug);
}

export function getAdjacent(slug: string) {
  const index = trabajos.findIndex((item) => item.slug === slug);
  return {
    prev: index > 0 ? trabajos[index - 1] : trabajos[trabajos.length - 1],
    next: index < trabajos.length - 1 ? trabajos[index + 1] : trabajos[0],
  };
}
