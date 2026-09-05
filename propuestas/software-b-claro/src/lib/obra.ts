export type Obra = {
  slug: string;
  code: string;
  name: string;
  sector: string;
  year: string;
  location: string;
  lat: string;
  cover: string;
  coverAlt: string;
  atmosphere: string;
  atmosphereAlt: string;
  headline: string;
  lede: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
  quote: { text: string; author: string; role: string };
  stack: string[];
};

export const obras: Obra[] = [
  {
    slug: "hidrocuenca",
    code: "MER-24-01",
    name: "Hidrocuenca",
    sector: "Agua potable",
    year: "2024",
    location: "Cuenca del Maipo",
    lat: "33.5°S",
    cover: "/images/hidrocuenca.jpg",
    coverAlt:
      "Sala de operaciones de una planta de agua, ventanales a las piletas y luz de mediodía.",
    atmosphere: "/images/ventana.jpg",
    atmosphereAlt: "Luz norte recortada sobre un muro de yeso, jacarandás afuera.",
    headline: "La red, en una sola figura.",
    lede: "Plantas, cortes, camiones y reclamos dejaron de vivir en cuatro planillas y un grupo de WhatsApp. Una torre de control que el turno de noche lee sin traducir.",
    challenge:
      "Hidrocuenca opera agua potable para una cuenca que no perdona el error. La presión vivía en un SCADA que nadie miraba, los cortes en una planilla del turno, los camiones aljibe en un grupo, los reclamos en un CRM que se caía los viernes. Cada mañana la gerencia armaba la verdad a mano. Un corte en Puente Alto y un camión mal despachado se enteraban por el vecino, no por el sistema.",
    approach: [
      "Hicimos estación en planta y en terreno. Anotamos el lenguaje real: sector, válvula, corte programado, corte súbito, aljibe, reclamo, presión. El software se diseña con esas palabras, no con las de un ERP genérico.",
      "Una figura de red: sectores, plantas, flota y reclamos en el mismo pulso. Lo crítico es grande. Lo histórico, consultable. Lo dudoso, marcado.",
      "Los camiones aljibe salen con un cupo real, no con un formulario que dice que sí a todo. El despachador y el chofer ven el mismo número.",
      "Cada decisión queda con autor y hora. Cuando cambia el turno, la red no se reinicia.",
    ],
    outcome:
      "El grupo de WhatsApp se quedó para el asado de fin de año. El turno opera con la misma figura que la gerencia. El vecino, por fin, no es el canal de alerta.",
    metrics: [
      { value: "−38%", label: "tiempo de despacho de aljibe" },
      { value: "4 → 1", label: "fuentes de verdad del turno" },
      { value: "11 min", label: "para abrir un corte en figura" },
    ],
    quote: {
      text: "Si el sistema no se entiende a las tres, con un corte en dos comunas, no sirve. Este se entiende.",
      author: "Patricia Venegas",
      role: "Jefa de turno, Hidrocuenca",
    },
    stack: ["React", "Go", "Postgres", "Eventos", "SCADA / OPC"],
  },
  {
    slug: "puelche",
    code: "MER-23-04",
    name: "Salmones Puelche",
    sector: "Acuicultura",
    year: "2023",
    location: "Seno de Reloncaví",
    lat: "41.3°S",
    cover: "/images/puelche.jpg",
    coverAlt:
      "Balsas jaula en un seno del sur de Chile, agua verdeplata y laderas boscosas.",
    atmosphere: "/images/terraza.jpg",
    atmosphereAlt: "Terraza del taller en Providencia, cordillera al fondo.",
    headline: "Del pontón al packing, sin tres Excel en el medio.",
    lede: "Alimentación, mortalidad, cosecha y planta en un rastro que Sernapesca puede leer — y el pontón también, con mala señal.",
    challenge:
      "Puelche cría en el seno y procesa en tierra. El lote vivía en una planilla del pontón, la mortalidad en un cuaderno, la cosecha en un correo, el packing en otro sistema. Cuando un inspector pedía origen, se armaba una carpeta. Cuando un centro se atrasaba, la planta se enteraba por el barco, no por el dato.",
    approach: [
      "El centro es la unidad. Desde la siembra hasta el bin, un identificador que no se pierde entre pontón, barco y planta.",
      "El pontón carga con señal intermitente: primero el hecho, después la sincronización. El software no le pide wifi al mar.",
      "Alimentación, mortalidad y tratamientos se registran en el lenguaje del centro, no en el de un ERP de oficina.",
      "Packing list y declaración se emiten desde el mismo hecho. Menos carpetas. Menos reescritura.",
    ],
    outcome:
      "La trazabilidad dejó de ser una faena de viernes. Es el rastro natural de un trabajo que ya se hacía — ahora, visible.",
    metrics: [
      { value: "3 clics", label: "de centro a declaración" },
      { value: "−54%", label: "tiempo armando un packing" },
      { value: "9", label: "centros en una sola figura" },
    ],
    quote: {
      text: "En el pontón no hay tiempo para un sistema inteligente. Tiene que ser obvio con los dedos fríos. Este lo es.",
      author: "Héctor Nahuelquín",
      role: "Jefe de centro, Salmones Puelche",
    },
    stack: ["Next.js", "Postgres", "Sincronización offline", "Sernapesca", "EDI"],
  },
  {
    slug: "ruta-maipo",
    code: "MER-24-03",
    name: "Ruta del Maipo",
    sector: "Concesión vial",
    year: "2024",
    location: "Cajón del Maipo",
    lat: "33.6°S",
    cover: "/images/ruta.jpg",
    coverAlt:
      "Ruta de hormigón en el Cajón del Maipo al mediodía, guardarraíl y cordillera seca.",
    atmosphere: "/images/calle.jpg",
    atmosphereAlt: "Vereda de Providencia con plátanos y jacarandás al mediodía.",
    headline: "El kilómetro, el incidente, el invierno: una sola carta.",
    lede: "Peaje, conservación y centro de control alineados. Para que un derrumbe a las 4.10 no viva en tres radios distintas.",
    challenge:
      "La concesión corre una ruta de montaña: invierno, piedra, turistas los domingo, camiones de áridos. El peaje tenía su sistema. Conservación, otro. El centro de control, un mural y un Excel. Un incidente en el km 34 se enteraba por radio, se anotaba dos veces y la gerencia lo veía al día siguiente, peinado.",
    approach: [
      "El kilómetro es el eje. Incidente, faena, peaje y clima se clavan en el mismo trazado, no en módulos que no se hablan.",
      "El centro de control ve la ruta como una carta, no como una lista. Lo abierto es grande. Lo cerrado, archivo.",
      "Conservación carga faena desde terreno, con foto y punto. El mural de imanes se quedó de recuerdo.",
      "Cada evento tiene autor, hora y cierre. El parte de invierno se arma solo — y se puede auditar.",
    ],
    outcome:
      "El turno de control y el de conservación leen la misma ruta. El parte a la inspectora fiscal dejó de ser una noche de recorte.",
    metrics: [
      { value: "−22 min", label: "para abrir un incidente en carta" },
      { value: "1", label: "figura para control y conservación" },
      { value: "100%", label: "partes de invierno con trazabilidad" },
    ],
    quote: {
      text: "La montaña no espera a que el Excel abra. Ahora el kilómetro está en la pantalla antes que en la radio.",
      author: "Marisol Cádiz",
      role: "Jefa de centro de control, Ruta del Maipo",
    },
    stack: ["React", "Mapa", "Postgres", "Radio / CAD", "Partes"],
  },
  {
    slug: "luma",
    code: "MER-25-02",
    name: "Forestal Luma",
    sector: "Forestal",
    year: "2025",
    location: "Cordillera de Nahuelbuta",
    lat: "37.8°S",
    cover: "/images/luma.jpg",
    coverAlt:
      "Bosque de lenga y coigüe en el sur de Chile, un aserradero pálido a lo lejos.",
    atmosphere: "/images/mesa.jpg",
    atmosphereAlt: "Mesa de roble claro con planos, regla de acero y luz de mediodía.",
    headline: "Del rodal al camión, con el mismo número.",
    lede: "Cosecha, cancha, aserradero y despacho para un predio que ya no cabe en la planilla del capataz — y no debería.",
    challenge:
      "Luma mueve madera en Nahuelbuta. El rodal vivía en una planilla del fundo, la cancha en otra, el aserradero en un sistema viejo, los camiones en un grupo. CONAF pedía origen y se armaba una carpeta. Un camión sin guía y un lote mal cubicado se convertían en un día perdido — y en una gerencia que se enteraba por el cliente.",
    approach: [
      "El lote es la unidad. Desde el rodal hasta el despacho, un identificador que no se pierde entre fundo, cancha y planta.",
      "El capataz carga desde terreno, con los dedos grandes y la señal que hay. La gerencia ve lo que se cosechó, no lo que se estimó el lunes.",
      "Guías y cubicación salen del mismo hecho. Menos reescritura. Menos carpetas para CONAF.",
      "Una vista para el dueño que no es un tablero de startup: hectáreas, calidad, destino, camiones. En castellano. Con los números de la faena.",
    ],
    outcome:
      "La guía dejó de ser una faena de oficina. Es el rastro de un camión que ya iba a salir — ahora, con el número correcto.",
    metrics: [
      { value: "−61%", label: "tiempo armando una guía" },
      { value: "7", label: "predios en una sola figura" },
      { value: "2 clics", label: "de rodal a despacho" },
    ],
    quote: {
      text: "En cosecha no hay tiempo para un sistema que se explica. Tiene que coincidir con lo que ya hacemos. Este coincide.",
      author: "Juan Pablo Rain",
      role: "Gerente de operaciones, Forestal Luma",
    },
    stack: ["Next.js", "Postgres", "Código de lote", "CONAF", "Guías"],
  },
];

export function getObra(slug: string) {
  return obras.find((obra) => obra.slug === slug);
}

export function getAdjacent(slug: string) {
  const index = obras.findIndex((obra) => obra.slug === slug);
  return {
    prev: obras[(index - 1 + obras.length) % obras.length],
    next: obras[(index + 1) % obras.length],
  };
}
