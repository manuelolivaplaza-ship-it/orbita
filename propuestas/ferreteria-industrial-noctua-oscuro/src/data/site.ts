export const site = {
  name: "NOCTUA",
  legalName: "NOCTUA SpA",
  rut: "76.882.441-K",
  tagline: "El fierro no espera el día.",
  description:
    "Ferretería industrial de turno noche en Quilicura. Fierro, pernos, planchas, soldadura y corte a medida. Lista hasta las 22:00, retiro a las 05:00.",
  url: "https://noctua.cl",
  email: "turno@noctua.cl",
  emailCorte: "corte@noctua.cl",
  phone: "+56 2 2588 1900",
  phoneHref: "tel:+56225881900",
  whatsapp: "+56 9 5881 9004",
  whatsappHref:
    "https://wa.me/56958819004?text=Hola%20NOCTUA%2C%20quiero%20cotizar%20una%20lista%20de%20corte.",
  instagram: "https://instagram.com/noctua.nave",
  instagramHandle: "@noctua.nave",
  address: {
    line1: "Camino Lo Echevers 1550",
    commune: "Quilicura",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Camino+Lo+Echevers+1550+Quilicura",
  },
  hours: [
    { days: "Lunes a viernes", time: "18:00 – 05:30" },
    { days: "Sábado", time: "18:00 – 01:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  patioM2: 2_640,
  tiraMm: 6_000,
  kerfMm: 3,
  corteHora: "22:00",
  salidaHora: "05:00",
  pedidoMinimoIva: 120_000,
  corteIncluidoHasta: "6.000 mm",
  corteExtra: 1_100,
  dobladoCurva: 1_400,
  factura: "30 días, con evaluación comercial",
} as const;

export const navLinks = [
  { href: "/familias", label: "Familias" },
  { href: "/tira", label: "Tira" },
  { href: "/turno", label: "Turno" },
] as const;
