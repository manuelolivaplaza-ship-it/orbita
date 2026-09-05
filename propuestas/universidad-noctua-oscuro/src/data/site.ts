export const site = {
  name: "NOCTUA",
  legalName: "Fundación Instituto NOCTUA",
  rut: "65.208.771-3",
  tagline: "Se estudia de noche.",
  description:
    "Instituto universitario nocturno en Recoleta, Santiago. Ocho carreras de pregrado, seiscientos cuarenta estudiantes, seminario de doce. El recinto abre al crepúsculo.",
  url: "https://noctua.cl",
  email: "admision@noctua.cl",
  phone: "+56 2 2638 1900",
  phoneHref: "tel:+56226381900",
  whatsapp: "+56 9 7641 8830",
  whatsappHref:
    "https://wa.me/56976418830?text=Hola%20NOCTUA%2C%20quiero%20informaci%C3%B3n%20de%20admisi%C3%B3n%202027.",
  instagram: "https://instagram.com/noctua.instituto",
  instagramHandle: "@noctua.instituto",
  coords: { lat: "33°25′S", lng: "70°38′W" },
  geo: { lat: -33.419, lng: -70.641 },
  address: {
    line1: "Santa Filomena 184",
    commune: "Recoleta",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Santa+Filomena+184+Recoleta+Santiago",
  },
  access: "Metro Baquedano · 9 min a pie · funicular a 4 min",
  parking: "Estacionamiento en el predio · 22 cupos, con reserva",
  hoursShort: "Lun–Vie 17:30–01:00",
  hours: [
    { days: "Lunes a viernes", time: "17:30 – 01:00" },
    { days: "Sábado", time: "Admisión y visita 10:00 – 14:00" },
    { days: "Domingo y festivos", time: "Cerrado al público" },
  ],
  founded: 2016,
  students: 640,
  seminarSize: 12,
  admissionYear: 2027,
  classStart: "17:30",
  classEnd: "01:00",
} as const;

export const navLinks = [
  { href: "/instituto", label: "Instituto" },
  { href: "/campus", label: "Campus" },
  { href: "/carreras", label: "Carreras" },
  { href: "/admision", label: "Admisión" },
  { href: "/cuerpo", label: "Cuerpo" },
] as const;
