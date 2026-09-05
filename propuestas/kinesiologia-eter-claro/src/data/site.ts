export const site = {
  name: "ETER",
  legalName: "ETER SpA",
  rut: "77.612.408-7",
  tagline: "Volver a moverte sin miedo.",
  description:
    "Centro de kinesiología en Las Condes. Evaluación en 48 horas, plan por escrito, el mismo kinesiólogo de principio a fin. Box y domicilio en Santiago.",
  url: "https://eterkine.cl",
  email: "hola@eterkine.cl",
  phone: "+56 2 2840 3315",
  phoneHref: "tel:+56228403315",
  mobile: "+56 9 7612 4408",
  mobileHref: "tel:+56976124408",
  whatsapp: "+56 9 7612 4408",
  whatsappHref:
    "https://wa.me/56976124408?text=Hola%20ETER%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20kin%C3%A9sica.",
  instagram: "https://instagram.com/eter.kine",
  instagramHandle: "@eter.kine",
  address: {
    line1: "San Damián 1280",
    commune: "Las Condes",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=San+Damian+1280+Las+Condes+Santiago",
  },
  metro: "Manquehue · 9 min a pie",
  parking: "Estacionamiento en el predio · 3 cupos",
  hoursShort: "Lun–Vie 8:00–20:00 · Sáb 9:00–14:00",
  hours: [
    { days: "Lunes a viernes", time: "8:00 – 20:00" },
    { days: "Sábado", time: "9:00 – 14:00" },
    { days: "Domingo y festivos", time: "Cerrado" },
  ],
  founded: 2017,
} as const;

export const navLinks = [
  { href: "/oficio", label: "Oficio" },
  { href: "/espacio", label: "Espacio" },
  { href: "/equipo", label: "Equipo" },
  { href: "/valores", label: "Valores" },
] as const;
