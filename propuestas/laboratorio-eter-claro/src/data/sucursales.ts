export type Sucursal = {
  slug: string;
  nombre: string;
  comuna: string;
  direccion: string;
  referencia: string;
  metro?: string;
  estacionamiento: string;
  horarios: { dias: string; horas: string }[];
  telefono: string;
  imagen: string;
  imagenAlt: string;
};

export const sucursales: Sucursal[] = [
  {
    slug: "providencia",
    nombre: "Providencia",
    comuna: "Providencia",
    direccion: "Av. Providencia 2148, local 12",
    referencia: "Entre Manuel Montt y Pedro de Valdivia, primer piso hacia el interior del patio.",
    metro: "Los Leones",
    estacionamiento: "Convenio en el edificio, 45 minutos de cortesía.",
    horarios: [
      { dias: "Lunes a viernes", horas: "7:00 – 19:00" },
      { dias: "Sábado", horas: "8:00 – 13:00" },
    ],
    telefono: "+56 2 2945 1812",
    imagen: "/images/sucursal-providencia.jpg",
    imagenAlt: "Fachada de piedra clara y jacarandás en flor en Providencia.",
  },
  {
    slug: "las-condes",
    nombre: "Las Condes",
    comuna: "Las Condes",
    direccion: "Av. Apoquindo 4501, piso 2",
    referencia: "A pasos de Escuela Militar, acceso por el patio interior de travertino.",
    metro: "Escuela Militar",
    estacionamiento: "Subterráneo del edificio, 1 hora de cortesía.",
    horarios: [
      { dias: "Lunes a viernes", horas: "7:00 – 19:00" },
      { dias: "Sábado", horas: "8:00 – 13:00" },
    ],
    telefono: "+56 2 2945 1845",
    imagen: "/images/sucursal-lascondes.jpg",
    imagenAlt: "Pabellón de travertino con un árbol nativo en el patio de Las Condes.",
  },
  {
    slug: "nunoa",
    nombre: "Ñuñoa",
    comuna: "Ñuñoa",
    direccion: "Av. Irarrázaval 3050, local 4",
    referencia: "Frente a Plaza Ñuñoa, sala de espera con luz de oriente.",
    metro: "Ñuñoa",
    estacionamiento: "Calle y estacionamiento de visita en el interior.",
    horarios: [
      { dias: "Lunes a viernes", horas: "7:00 – 18:00" },
      { dias: "Sábado", horas: "8:00 – 13:00" },
    ],
    telefono: "+56 2 2945 1860",
    imagen: "/images/waiting.jpg",
    imagenAlt: "Sala de espera de madera clara, lino y un olivo en Ñuñoa.",
  },
  {
    slug: "vitacura",
    nombre: "Vitacura",
    comuna: "Vitacura",
    direccion: "Av. Alonso de Córdova 2780, local 8",
    referencia: "En el tramo más quieto de Alonso de Córdova, con vista a la cordillera en los días claros.",
    estacionamiento: "Valet y subterráneo, 1 hora de cortesía.",
    horarios: [
      { dias: "Lunes a viernes", horas: "7:30 – 18:30" },
      { dias: "Sábado", horas: "8:30 – 13:00" },
    ],
    telefono: "+56 2 2945 1872",
    imagen: "/images/hero-lab.jpg",
    imagenAlt: "Laboratorio luminoso con mesones de piedra y la cordillera al fondo.",
  },
];
