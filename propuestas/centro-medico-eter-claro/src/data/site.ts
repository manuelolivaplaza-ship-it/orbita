export const site = {
  name: "ETER",
  legalName: "ETER SpA",
  rut: "77.840.215-7",
  tagline: "La hora que sí ocurre.",
  description:
    "Centro médico en Providencia. Ocho especialidades, laboratorio propio y bono electrónico. Pides hoy, te vemos en 48 horas — o te lo decimos altiro.",
  url: "https://etercentromedico.cl",
  email: "hola@etercentromedico.cl",
  phone: "+56 2 2840 3315",
  phoneHref: "tel:+56228403315",
  mobile: "+56 9 7612 4408",
  mobileHref: "tel:+56976124408",
  whatsapp: "+56 9 7612 4408",
  whatsappHref:
    "https://wa.me/56976124408?text=Hola%20ETER%2C%20quiero%20agendar%20una%20hora.",
  instagram: "https://instagram.com/eter.centromedico",
  instagramHandle: "@eter.centromedico",
  address: {
    line1: "Los Leones 1180",
    commune: "Providencia",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Los+Leones+1180+Providencia+Santiago",
  },
  metro: "Los Leones · 4 min a pie",
  parking: "Estacionamiento en el predio · 6 cupos",
  hoursShort: "Lun–Vie 8:00–20:00 · Sáb 8:30–14:00",
  hours: [
    { days: "Lunes a viernes", time: "8:00 – 20:00" },
    { days: "Sábado", time: "8:30 – 14:00" },
    { days: "Domingo y festivos", time: "Cerrado" },
  ],
  founded: 2014,
  openHour: 8,
  closeHour: 20,
  saturdayOpen: 8.5,
  saturdayClose: 14,
} as const;

export const navLinks = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/la-casa", label: "La casa" },
  { href: "/equipo", label: "Equipo" },
  { href: "/laboratorio", label: "Laboratorio" },
] as const;
