export type Obra = {
  slug: string;
  code: string;
  name: string;
  sector: string;
  year: string;
  location: string;
  altura: string;
  cover: string;
  coverAlt: string;
  atmosphere: string;
  atmosphereAlt: string;
  headline: string;
  lede: string;
  challenge: string;
  approach: string[];
  outcome: string;
  reading: { value: string; label: string }[];
  quote: { text: string; author: string; role: string };
  stack: string[];
};

export const obras: Obra[] = [
  {
    slug: "molo-sur",
    code: "SX-24-01",
    name: "Molo Sur",
    sector: "Puerto",
    year: "2024",
    location: "San Antonio",
    altura: "33.6°S",
    cover: "/images/molo.jpg",
    coverAlt:
      "Patio de un terminal portuario al anochecer: asfalto mojado, grúas en silueta, sin gente.",
    atmosphere: "/images/bahia.jpg",
    atmosphereAlt:
      "Bahía de Valparaíso de noche, vista desde una ventana alta, el agua como seda.",
    headline: "El patio, en una sola mira.",
    lede: "Gates, stack, camiones y el turno de noche dejaron de vivir en cuatro radios y una pizarra. Una figura del patio que el gate y la gerencia leen igual.",
    challenge:
      "Molo Sur mueve contenedores en San Antonio con un patio que no perdona el error de un slot. El stack vivía en un TOS que nadie quería abrir, los camiones en un grupo de WhatsApp, los gates en una planilla del turno, los reclamos del transportista en el correo de una jefa. Cada mañana la verdad se armaba a mano. Un camión mal llamado y un slot ocupado dos veces se enteraban por el chofer, no por el sistema.",
    approach: [
      "Hicimos estación en el gate y en el patio, de día y en el turno de las 22. Anotamos el lenguaje real: slot, stack, gate in, gate out, llamado, pesaje, folio. El software se diseña con esas palabras.",
      "Una figura de patio: stack, gates, flota y excepciones en el mismo pulso. Lo crítico es grande. Lo dudoso, marcado. Lo histórico, consultable.",
      "El llamado del camión sale con un cupo real, no con un formulario que dice que sí a todo. El gate y el transportista ven el mismo número.",
      "Cada decisión queda con autor y hora. Cuando cambia el turno, el patio no se reinicia.",
    ],
    outcome:
      "El grupo de WhatsApp se quedó para el asado de fin de año. El turno opera con la misma figura que la gerencia. El chofer, por fin, no es el canal de alerta.",
    reading: [
      { value: "−31%", label: "tiempo de gate in" },
      { value: "5 → 1", label: "fuentes de verdad del patio" },
      { value: "9 min", label: "para abrir una excepción" },
    ],
    quote: {
      text: "Si el sistema no se entiende a las tres, con un camión en el gate y otro en el stack, no sirve. Este se entiende.",
      author: "Claudia Oyarzún",
      role: "Jefa de patio, Molo Sur",
    },
    stack: ["React", "Go", "Postgres", "Eventos", "TOS / EDI"],
  },
  {
    slug: "naviera-chacao",
    code: "SX-23-04",
    name: "Naviera Chacao",
    sector: "Flota",
    year: "2023",
    location: "Canal de Chacao",
    altura: "41.8°S",
    cover: "/images/chacao.jpg",
    coverAlt:
      "Rampa de ferry vacía al anochecer, el canal oscuro y los cerros en silueta.",
    atmosphere: "/images/mira.jpg",
    atmosphereAlt:
      "Sextante de laca negra sobre paño oscuro, el arco de marfil bajo una lámpara.",
    headline: "La caleta, el camión y el parte, en un solo rumbo.",
    lede: "Zarpe, carga, clima y boletería dejaron de ser tres cuadernos y un VHF. Un sistema que el pontón lee con mala señal — y Pargua también.",
    challenge:
      "Chacao cruza camiones y buses entre Pargua y Chacao con una flota que el clima manda. El zarpe vivía en un cuaderno del capitán, la carga en una planilla de la caleta, la boletería en un sistema que se caía con el viento, el parte de mar en un VHF que a veces no llega. Cuando un camión de salmón perdía el cruce, la planta se enteraba por el chofer, no por el dato.",
    approach: [
      "El cruce es la unidad. Desde la reserva hasta el desembarque, un identificador que no se pierde entre caleta, puente de mando y boletería.",
      "El pontón carga con señal intermitente: primero el hecho, después la sincronización. El software no le pide wifi al canal.",
      "El clima entra como dato, no como rumor. Si el zarpe se suspende, la caleta y el transportista lo ven a la misma hora.",
      "La boletería es un flujo corto, para quien cruza todas las semanas y para quien cruza una vez al año.",
    ],
    outcome:
      "El parte de mar dejó de ser un relato. Un camión sabe si cruza antes de bajar a Pargua. El VHF se quedó para lo que el VHF sabe hacer.",
    reading: [
      { value: "14", label: "cruces diarios, un rastro" },
      { value: "−22 min", label: "espera media en caleta" },
      { value: "1", label: "fuente para el zarpe" },
    ],
    quote: {
      text: "El canal no espera a que el sistema se ponga de acuerdo. Este ya viene de acuerdo.",
      author: "Héctor Marileo",
      role: "Jefe de caleta, Pargua",
    },
    stack: ["React", "Rust", "SQLite embarcado", "Postgres", "Radio / NMEA"],
  },
  {
    slug: "frio-talcahuano",
    code: "SX-24-03",
    name: "Frío Talcahuano",
    sector: "Frío",
    year: "2024",
    location: "Talcahuano",
    altura: "36.7°S",
    cover: "/images/frio.jpg",
    coverAlt:
      "Pasillo de cámara de frío vacío, escarcha en el metal y una sola lámpara.",
    atmosphere: "/images/taller.jpg",
    atmosphereAlt:
      "Mesa del taller en Valparaíso de noche, papel en blanco y la bahía atrás.",
    headline: "El lote, de la cámara al camión, sin tres Excel en el medio.",
    lede: "Temperatura, merma, despacho y Sernapesca en un rastro que el tunelero lee con guantes — y el inspector también.",
    challenge:
      "Frío Talcahuano guarda merluza, jurel y salmones de terceros en doce cámaras. El lote vivía en una planilla de la tunelera, la temperatura en un SCADA que nadie miraba, el despacho en el correo del jefe de patio, la merma en un cuaderno. Cuando un inspector pedía origen, se armaba una carpeta. Cuando una cámara se iba de rango, se enteraban por el olor, no por el dato.",
    approach: [
      "El lote es la unidad. Desde el ingreso hasta el despacho, un identificador que no se pierde entre cámara, túnel y andén.",
      "La temperatura deja de ser un gráfico bonito: es una alarma que el turno entiende, con umbral escrito y autor.",
      "El despacho sale con un cupo real de frío y de andén. El camión no espera a que alguien «revise si hay».",
      "Sernapesca lee el mismo rastro que el tunelero, con otra cara. No se arma una carpeta el día antes.",
    ],
    outcome:
      "La carpeta del inspector se imprimió por última vez el día del go-live, de recuerdo. El turno entra y sale sobre el mismo rastro. La cámara avisa antes que el olor.",
    reading: [
      { value: "12", label: "cámaras en un rastro" },
      { value: "−44%", label: "tiempo de armado de lote" },
      { value: "0", label: "carpetas para el inspector" },
    ],
    quote: {
      text: "El frío no perdona el Excel. Este sistema tampoco le pide al Excel que perdone.",
      author: "Yasna Parra",
      role: "Jefa de cámaras, Frío Talcahuano",
    },
    stack: ["React", "Go", "Postgres", "OPC / SCADA", "Sernapesca"],
  },
  {
    slug: "bodega-casablanca",
    code: "SX-25-02",
    name: "Bodega Casablanca",
    sector: "Viña",
    year: "2025",
    location: "Valle de Casablanca",
    altura: "33.3°S",
    cover: "/images/taller.jpg",
    coverAlt:
      "Mesa de trabajo nocturna: papel en blanco, regla de acero, ventana al puerto.",
    atmosphere: "/images/bahia.jpg",
    atmosphereAlt:
      "Bahía de Valparaíso de noche desde una ventana alta.",
    headline: "De la vendimia al contenedor, un solo lote.",
    lede: "Guarda, análisis, packing y despacho atados a un identificador que el maestro de cava ve con las manos mojadas.",
    challenge:
      "Una viña de Casablanca —en el camino entre el taller y Santiago— exporta a nueve países. La operación vivía en tres planillas, un ERP que nadie quería abrir y un grupo llamado «embarquesss». Cada lote, de la uva al contenedor, era una cadena de copiar y pegar. Un error de etiqueta en Rotterdam se rastreaba tres días.",
    approach: [
      "Mapeamos el lote como unidad de verdad. Vendimia, guarda, análisis, certificación, packing y despacho quedan atados al mismo identificador.",
      "El maestro de cava ve el estado en una pantalla que cabe en el celular con las manos mojadas. Comercio exterior ve el mismo dato, con otra cara.",
      "Integramos el laboratorio, el SAG y el forwarder sin pedirle a nadie que se cambie de sistema de un día para otro.",
      "El corte semanal es un hecho del lote, no un ritual de fin de mes.",
    ],
    outcome:
      "Cuando un importador en Países Bajos pregunta por un lote, la respuesta está. El WhatsApp de embarques se silenció solo. Casablanca queda a cuarenta minutos del taller: la mira se tomó en la bodega, no en una sala de Santiago.",
    reading: [
      { value: "9", label: "países de destino" },
      { value: "−37%", label: "tiempo de cierre de lote" },
      { value: "40 min", label: "taller–bodega" },
    ],
    quote: {
      text: "Están en Valparaíso. Vinieron a la vendimia, no a una reunión. Se nota.",
      author: "Amanda Ovalle",
      role: "Gerenta de operaciones, Bodega Casablanca",
    },
    stack: ["React", "Python", "Postgres", "SAG / laboratorio", "Forwarder"],
  },
];

export function obraBySlug(slug: string) {
  return obras.find((obra) => obra.slug === slug);
}
