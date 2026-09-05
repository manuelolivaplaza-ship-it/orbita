export const site = {
  name: "NOCTUA",
  tagline: "Agarre cuando el resto no ve.",
  description:
    "Atelier de neumáticos en Huechuraba. Compuestos calibrados para el asfalto chileno: ciudad, lluvia, cordillera, desierto y camioneta.",
  url: "https://noctua.cl",
  phone: "+56 2 2945 2100",
  phoneHref: "tel:+56229452100",
  whatsapp: "+56 9 8765 4321",
  email: "cita@noctua.cl",
  address: "Av. Américo Vespucio 1847, Huechuraba",
  comuna: "Huechuraba, Región Metropolitana",
  hours: [
    { label: "Lunes a viernes", value: "08:30 — 19:30" },
    { label: "Sábado", value: "09:00 — 14:00" },
    { label: "Cita nocturna", value: "Jue–sáb 21:00 — 01:00" },
  ],
  mapQuery: "Americo Vespucio 1847 Huechuraba",
};

export const nav = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/medida", label: "Medida" },
  { href: "/taller", label: "Taller" },
  { href: "/noctua", label: "NOCTUA" },
];

export const services = [
  {
    id: "montaje",
    name: "Montaje y balanceo",
    price: 12900,
    unit: "por rueda",
    text: "Desmontaje, talco, válvula nueva, balanceo computerizado. El contacto queda redondo.",
  },
  {
    id: "alineacion",
    name: "Alineación 3D",
    price: 29900,
    unit: "por eje",
    text: "Cámaras sobre el tren delantero y trasero. El auto deja de comer goma por un lado.",
  },
  {
    id: "permutado",
    name: "Permutado",
    price: 8900,
    unit: "juego",
    text: "Rotación según el dibujo. Estira la vida útil sin inventar milagros.",
  },
  {
    id: "nitrogeno",
    name: "Nitrógeno",
    price: 4900,
    unit: "por rueda",
    text: "Presión más estable entre Santiago y el norte. Menos merma con el calor.",
  },
  {
    id: "tpms",
    name: "Revisión TPMS",
    price: 0,
    unit: "con cita",
    text: "Sensores, válvulas y presión. Si viene con la cita, no se cobra.",
  },
  {
    id: "nocturna",
    name: "Cita nocturna",
    price: 0,
    unit: "sin recargo",
    text: "Jueves a sábado, 21:00 a 01:00. El taller vacío. El trabajo, sin apuro.",
  },
];
