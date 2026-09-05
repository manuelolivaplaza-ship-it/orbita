export type Person = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  photoAlt: string;
  short: string;
  bio: string[];
  focus: string[];
};

export const team: Person[] = [
  {
    slug: "amparo-vidal",
    name: "Amparo Vidal",
    role: "Socia · Dirección de diseño",
    photo: "/images/amparo.jpg",
    photoAlt: "Retrato de Amparo Vidal, socia de Nítida, con luz de ventana.",
    short: "Fundó el estudio. Dirige identidad y la mesa.",
    bio: [
      "Amparo fundó Nítida en 2017, después de seis años en agencias donde el diseño era un apéndice del pitch. Se cansó de marcas que se celebraban en una sala y se deshacían en un sitio.",
      "Dirige el estudio y los encargos de identidad. Cree que una marca que necesita un PDF de ochenta páginas para explicarse todavía no es una marca. Vive en Ñuñoa, a cuatro cuadras de la mesa.",
    ],
    focus: ["Identidad", "Dirección", "Criterio"],
  },
  {
    slug: "benjamin-soto",
    name: "Benjamín Soto",
    role: "Diseño de producto",
    photo: "/images/benjamin.jpg",
    photoAlt: "Retrato de Benjamín Soto, diseñador de producto en Nítida.",
    short: "Viene de un banco. Sabe lo que es un formulario de cuarenta campos.",
    bio: [
      "Benjamín diseñó producto en un banco antes de sentarse en esta mesa. Sabe lo que es un formulario de cuarenta campos, un lunes a las nueve, con un cliente esperando.",
      "En Nítida diseña el software que se usa cuando nadie mira. Fichas, torres, flujos. Prefiere lo obvio a lo ingenioso, y lo escribe.",
    ],
    focus: ["Producto", "Flujos", "Prototipo"],
  },
  {
    slug: "isidora-munoz",
    name: "Isidora Muñoz",
    role: "Identidad y tipo",
    photo: "/images/isidora.jpg",
    photoAlt: "Retrato de Isidora Muñoz, tipógrafa de Nítida.",
    short: "Tipógrafa. El espacio entre letras le importa como el patio de una casa.",
    bio: [
      "Isidora es tipógrafa. El espacio entre letras le importa tanto como el patio de una casa. Antes trabajó en un sello editorial; de ahí viene la manía de que el texto se lea, no de que se vea “de diseño”.",
      "En el estudio cuida identidad, tipo y el ritmo de las piezas. Si una marca no se sostiene en blanco y negro, no está lista.",
    ],
    focus: ["Tipo", "Identidad", "Piezas"],
  },
  {
    slug: "mateo-herrera",
    name: "Mateo Herrera",
    role: "Sitios",
    photo: "/images/mateo.jpg",
    photoAlt: "Retrato de Mateo Herrera, diseñador de sitios en Nítida.",
    short: "Diseño e implementación. El sitio sale de esta mesa, no de un handoff.",
    bio: [
      "Mateo diseña e implementa. El sitio sale de esta mesa, no de un “handoff” a una fábrica de plantillas. Next.js, tipografía, velocidad, formularios que llegan.",
      "Se obsesiona con el primer pantallazo y con el último campo del formulario. Si una persona de cincuenta y dos años no entiende, volvemos a componer.",
    ],
    focus: ["Sitios", "Next.js", "Copy"],
  },
  {
    slug: "trinidad-lagos",
    name: "Trinidad Lagos",
    role: "Estrategia",
    photo: "/images/trinidad.jpg",
    photoAlt: "Retrato de Trinidad Lagos, estratega de Nítida.",
    short: "Pregunta para qué, hasta que hay una frase.",
    bio: [
      "Trinidad pregunta para qué hasta que hay una frase. Viene del periodismo y de marcas que hablaban mucho y decían poco.",
      "En Nítida ordena el encargo: quién decide, qué se puede cortar, cómo se va a defender el trabajo frente a un directorio. Si no cabe en un ascensor, todavía no.",
    ],
    focus: ["Estrategia", "Tono", "Brief"],
  },
  {
    slug: "tomas-alarcon",
    name: "Tomás Alarcón",
    role: "Motion y sistemas",
    photo: "/images/tomas.jpg",
    photoAlt: "Retrato de Tomás Alarcón, motion y sistemas en Nítida.",
    short: "El ritmo. Lo que se mueve — y lo que no.",
    bio: [
      "Tomás cuida el ritmo: lo que se mueve y lo que no. Motion, componentes, el sistema que un equipo hereda. Vino de producto en una fintech y se trajo la disciplina de nombrar las cosas.",
      "Si una animación no ayuda a leer, la apaga. El sistema, para él, es un lenguaje — no un kit de botones con sombra.",
    ],
    focus: ["Sistemas", "Motion", "Tokens"],
  },
];

export function getPerson(slug: string) {
  return team.find((person) => person.slug === slug);
}
