export const site = {
  name: "ETER",
  legalName: "ETER Neumáticos SpA",
  rut: "77.841.339-K",
  tagline: "Cuatro círculos de aire.",
  description:
    "Casa de neumáticos en La Reina, Santiago. Confirmamos medida, compuesto y stock. Montaje y balanceo el mismo día. El único punto de contacto entre tu auto y Chile.",
  url: "https://eter.cl",
  email: "huella@eter.cl",
  phone: "+56 2 2278 4410",
  phoneHref: "tel:+56222784410",
  whatsapp: "+56 9 4418 2703",
  whatsappHref:
    "https://wa.me/56944182703?text=Hola%20ETER%2C%20quiero%20cotizar%20una%20medida.",
  instagram: "https://instagram.com/eter.huella",
  instagramHandle: "@eter.huella",
  address: {
    line1: "Av. Larraín 5860",
    commune: "La Reina",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Av.+Larrain+5860+La+Reina+Santiago",
  },
  metro: "Plaza Egaña · 12 min a pie",
  parking: "Estacionamiento de faena · 6 cupos",
  hoursShort: "Lun–Vie 8:30–19:00 · Sáb 9:00–14:00",
  hours: [
    { days: "Lunes a viernes", time: "8:30 – 19:00" },
    { days: "Sábado", time: "9:00 – 14:00" },
    { days: "Domingo", time: "Cerrado · urgencia por WhatsApp" },
  ],
  founded: 2014,
} as const;

export const navLinks = [
  { href: "/medida", label: "Medida" },
  { href: "/compuestos", label: "Compuestos" },
  { href: "/montaje", label: "Montaje" },
  { href: "/casa", label: "La casa" },
] as const;
