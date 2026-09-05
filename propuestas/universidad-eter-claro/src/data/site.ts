export const site = {
  name: "ETER",
  legalName: "Fundación Instituto ETER",
  rut: "65.184.902-K",
  tagline: "A esta altura.",
  description:
    "Instituto universitario de sede única en El Arrayán, Lo Barnechea. Ocho carreras de pregrado, mil doscientos cuarenta estudiantes, 847 metros sobre el nivel del mar.",
  url: "https://eter.cl",
  email: "admision@eter.cl",
  phone: "+56 2 2576 4410",
  phoneHref: "tel:+56225764410",
  whatsapp: "+56 9 8871 2204",
  whatsappHref:
    "https://wa.me/56988712204?text=Hola%20ETER%2C%20quiero%20informaci%C3%B3n%20de%20admisi%C3%B3n%202027.",
  instagram: "https://instagram.com/eter.instituto",
  instagramHandle: "@eter.instituto",
  address: {
    line1: "Camino El Arrayán 3940",
    commune: "Lo Barnechea",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Camino+El+Arrayan+3940+Lo+Barnechea+Santiago",
  },
  access: "12 min desde La Dehesa · buses 405 / 406",
  parking: "Estacionamiento en el predio · 48 cupos",
  hoursShort: "Lun–Vie 8:30–18:30",
  hours: [
    { days: "Lunes a viernes", time: "8:30 – 18:30" },
    { days: "Sábado", time: "Admisión 9:00 – 13:00 (marzo a enero)" },
    { days: "Domingo y festivos", time: "Campus cerrado al público" },
  ],
  founded: 2014,
  altitude: 847,
  admissionYear: 2027,
} as const;

export const navLinks = [
  { href: "/instituto", label: "Instituto" },
  { href: "/campus", label: "Campus" },
  { href: "/carreras", label: "Carreras" },
  { href: "/admision", label: "Admisión" },
  { href: "/cuerpo", label: "Cuerpo" },
] as const;
