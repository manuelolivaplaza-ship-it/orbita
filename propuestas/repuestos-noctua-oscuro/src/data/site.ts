export const site = {
  name: "NOCTUA",
  legalName: "NOCTUA Repuestos SpA",
  rut: "77.641.209-0",
  tagline: "La pieza se cruza de noche.",
  description:
    "Bodega de cruce nocturno en Quilicura. Patente, OEM y motor. Lista hasta las 23:30. En bahía a las 05:30.",
  url: "https://noctua.cl",
  email: "cruce@noctua.cl",
  phone: "+56 2 2588 2740",
  phoneHref: "tel:+56225882740",
  whatsapp: "+56 9 6412 0904",
  whatsappHref:
    "https://wa.me/56964120904?text=Hola%20NOCTUA%2C%20quiero%20cruzar%20una%20pieza.",
  instagram: "https://instagram.com/noctua.cruce",
  instagramHandle: "@noctua.cruce",
  address: {
    line1: "Av. Pdte. Eduardo Frei Montalva 10120",
    commune: "Quilicura",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Av.+Pdte.+Eduardo+Frei+Montalva+10120+Quilicura",
  },
  coords: {
    lat: "33°21′S",
    lng: "70°44′W",
  },
  hours: [
    { days: "Lunes a viernes", time: "18:00 – 06:00" },
    { days: "Sábado", time: "18:00 – 02:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  cruceHora: "23:30",
  bahiaHora: "05:30",
  despachoDesde: "06:00",
  despachoHasta: "08:30",
  pedidoMinimoIva: 45_000,
  factura: "30 días, con evaluación comercial",
} as const;

export const navLinks = [
  { href: "/cruce", label: "Cruce" },
  { href: "/familias", label: "Familias" },
  { href: "/turno", label: "Turno" },
] as const;
