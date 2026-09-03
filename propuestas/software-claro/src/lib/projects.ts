export type Project = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  location: string;
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

export const projects: Project[] = [
  {
    slug: "nativa",
    name: "Nativa",
    sector: "Banca privada",
    year: "2024",
    location: "Santiago",
    cover: "/images/nativa.jpg",
    coverAlt:
      "Salón de banca privada en Santiago, mármol claro, cortinas de lino y luz de mañana.",
    atmosphere: "/images/table.jpg",
    atmosphereAlt: "Mesa de roble con cuaderno, café y un peso de cobre.",
    headline: "Un solo escritorio para quien asesora patrimonio.",
    lede: "Nativa tenía siete herramientas y una operación que vivía en el correo. Construimos el sistema donde el asesor ve al cliente entero — y deja de traducir entre pantallas.",
    challenge:
      "Cada asesor de Nativa empezaba el día en el core bancario, saltaba a una planilla de mandatos, después a un CRM, después al correo del compliance. El cliente, en la sala, esperaba. El conocimiento de la relación vivía en la cabeza de cuatro personas. Cuando una de ellas salía de vacaciones, la mesa se quedaba ciega.",
    approach: [
      "Nos sentamos dos semanas con la mesa de asesoría, no con el comité de transformación. Anotamos cada excepción: el cliente que llama el domingo, el mandato que no cabe en el producto, el reporte que se arma a mano el jueves.",
      "Diseñamos un escritorio único: persona, familia, mandatos, liquidez, compliance y bitácora. Lo que era urgente quedó a un gesto; lo que era ruido, dos clics más lejos.",
      "Integramos el core y el custodio sin pretender reemplazarlos. Alba no pelea con el sistema de registro: lo hace legible.",
      "Entrenamos a la mesa con sus propios casos. El primer mes, el software se usó en paralelo. El segundo, el correo interno de “¿dónde está esto?” bajó a casi nada.",
    ],
    outcome:
      "La asesoría volvió a ser una conversación. El software dejó de pedirle al cliente que esperara a que el computador pensara.",
    metrics: [
      { value: "−62%", label: "tiempo en tareas operativas" },
      { value: "7 → 1", label: "herramientas de uso diario" },
      { value: "74", label: "NPS interno a los 90 días" },
    ],
    quote: {
      text: "Por primera vez el sistema sabe lo mismo que sé yo de la familia. Eso no es un dashboard. Es respeto por el oficio.",
      author: "Elena Covarrubias",
      role: "Socia, Nativa",
    },
    stack: ["Next.js", "Node", "PostgreSQL", "Eventos", "SSO"],
  },
  {
    slug: "puerto-lumen",
    name: "Puerto Lumen",
    sector: "Logística portuaria",
    year: "2023",
    location: "San Antonio",
    cover: "/images/puerto.jpg",
    coverAlt:
      "Puerto del Pacífico al amanecer, grúas y un buque entre la niebla.",
    atmosphere: "/images/andes.jpg",
    atmosphereAlt: "Amanecer sobre la cordillera visto desde una ventana.",
    headline: "La bahía, en una pantalla que un turno entiende.",
    lede: "Una torre de control para naves, sitio, camiones y patio. Hecha para las tres de la mañana, no para la presentación del directorio.",
    challenge:
      "Puerto Lumen opera 24 horas. El plan de sitio vivía en un pizarrón, el patio en una planilla y los camiones en un grupo de WhatsApp. Cada turno reescribía la verdad. Un buque con ventana estrecha, un camión fuera de cita y un stacking mal leído se convertían en horas muertas — y en un gerencia que se enteraba al día siguiente.",
    approach: [
      "Trabajamos de noche. El software de un puerto no se diseña a las 11 de la mañana. Mapeamos el lenguaje real: sitio, window, stacking, gate, nulo, sobreestadía.",
      "Una vista de bahía: naves, ventanas, patio y gate en el mismo pulso. Lo crítico es grande. Lo histórico, consultable. Lo dudoso, marcado.",
      "Citas de camiones con cupos reales, no con un formulario que dice que sí a todo. El transportista ve el mismo número que el gate.",
      "Cada decisión queda con autor y hora. Cuando el turno cambia, la bahía no se reinicia.",
    ],
    outcome:
      "El pizarrón se quedó como reliquia. El turno de noche opera con la misma figura que el de día. La gerencia, por fin, mira el mismo puerto.",
    metrics: [
      { value: "+18%", label: "uso de sitio de atraque" },
      { value: "−41%", label: "camiones sin cita en gate" },
      { value: "24/7", label: "una sola fuente de verdad" },
    ],
    quote: {
      text: "Si el sistema no se entiende a las tres de la mañana, no sirve. Este se entiende.",
      author: "Héctor Alarcón",
      role: "Jefe de torre, Puerto Lumen",
    },
    stack: ["React", "Go", "Postgres", "WebSockets", "Radio / TOS"],
  },
  {
    slug: "clinica-alto",
    name: "Clínica Alto",
    sector: "Salud",
    year: "2024",
    location: "Las Condes",
    cover: "/images/clinica.jpg",
    coverAlt:
      "Pasillo luminoso de una clínica contemporánea, banco de madera y cortinas blancas.",
    atmosphere: "/images/caustics.jpg",
    atmosphereAlt: "Luz de mañana refractada sobre un muro de yeso.",
    headline: "La ficha que el médico abre sin pedir perdón.",
    lede: "Agenda, ficha, pabellón y caja en un ritmo que respeta al paciente y al que atiende. Menos pantallas. Más clínica.",
    challenge:
      "Clínica Alto creció de un pabellón a una red. El software no. La ficha era un documento que se imprimía. La agenda, un módulo distinto. El pabellón, un cuaderno. Admisión pedía los mismos datos tres veces. El médico llegaba tarde a la consulta porque el computador todavía cargaba. El paciente lo notaba. Siempre lo nota.",
    approach: [
      "Diseñamos para el minuto clínico, no para el expediente perfecto. Lo que se necesita ahora está arriba. El resto, cerca, no encima.",
      "Una ficha longitudinal, con el lenguaje de la clínica chilena: hipótesis, indicación, pabellón, epicrisis. Sin calcos de un EMR extranjero.",
      "Admisión deja de ser un formulario y se vuelve una conversación guiada. Once minutos menos no son un KPI: son un paciente que se sienta más temprano.",
      "Roles claros. La auxiliar no ve lo mismo que el cirujano. El auditor tampoco. El permiso no es un afterthought.",
    ],
    outcome:
      "La consulta volvió a ser de dos personas. El computador, una tercera que no interrumpe.",
    metrics: [
      { value: "−11 min", label: "por admisión de paciente" },
      { value: "3 → 1", label: "sistemas en el box" },
      { value: "96%", label: "adopción médica al segundo mes" },
    ],
    quote: {
      text: "Por fin un sistema que no me hace sentir que atiendo al computador.",
      author: "Dra. Paula Henríquez",
      role: "Directora médica, Clínica Alto",
    },
    stack: ["Next.js", "HL7 / FHIR", "Postgres", "Auditoría", "Cifrado"],
  },
  {
    slug: "cultiva",
    name: "Cultiva",
    sector: "Agronegocio",
    year: "2025",
    location: "Valle de Colchagua",
    cover: "/images/cultiva.jpg",
    coverAlt:
      "Campos ordenados al atardecer en el valle central de Chile, cordillera al fondo.",
    atmosphere: "/images/copper.jpg",
    atmosphereAlt: "Medallón de cobre con un sol grabado, sobre papel hecho a mano.",
    headline: "Del surco al puerto, sin tres planillas en el medio.",
    lede: "Trazabilidad, packing, fitosanitario y contratos de exportación para un campo que ya no cabe en Excel — y no debería.",
    challenge:
      "Cultiva exporta fruta a tres continentes. El lote vivía en una planilla del fundo, el packing en otra, el certificado en un PDF, el contrato en el correo de alguien que estaba en un avión. Cuando un inspector pedía origen, se armaba una carpeta. Cuando un contenedor se atrasaba, el campo se enteraba por el importador.",
    approach: [
      "El lote es la unidad. Desde el cuartel hasta el contenedor, un identificador que no se pierde en la traducción entre fundo, packing y comercial.",
      "El packing ve lo que el campo ya cosechó, no lo que alguien estimó el lunes. El comercial ve lo que realmente salió, no lo que se prometió en una reunión.",
      "Fitosanitario y packing list se emiten desde el mismo hecho, no se reescriben. Menos errores. Menos carpetas.",
      "Una vista para el dueño del campo que no es un tablero de startup: hectáreas, calidad, destino, precio. En castellano. Con los números que importan en cosecha.",
    ],
    outcome:
      "La trazabilidad dejó de ser una faena de viernes. Es el rastro natural de un trabajo que ya se hacía — ahora, visible.",
    metrics: [
      { value: "4 clics", label: "de cuartel a certificado" },
      { value: "−70%", label: "tiempo armando un packing list" },
      { value: "12", label: "fundos en una sola figura" },
    ],
    quote: {
      text: "En cosecha no hay tiempo para un sistema inteligente. Tiene que ser obvio. Este lo es.",
      author: "María Jesús Correa",
      role: "Gerenta de operaciones, Cultiva",
    },
    stack: ["Next.js", "Postgres", "Código de lote", "EDI", "Reportes SAG"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacent(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
