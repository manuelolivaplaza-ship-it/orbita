export const site = {
  name: "ETER",
  legalName: "ETER Salud Mental SpA",
  rut: "77.918.330-K",
  tagline: "Un lugar para lo que no se ve.",
  description:
    "Centro de salud mental en Providencia. Psicología clínica y psiquiatría. Cincuenta minutos, la misma persona, sin prisa de pasillo.",
  url: "https://etersaludmental.cl",
  email: "hola@etersaludmental.cl",
  phone: "+56 2 2840 4470",
  phoneHref: "tel:+56228404470",
  mobile: "+56 9 7612 8804",
  mobileHref: "tel:+56976128804",
  whatsapp: "+56 9 7612 8804",
  whatsappHref:
    "https://wa.me/56976128804?text=Hola%20ETER%2C%20quiero%20pedir%20una%20primera%20hora.",
  instagram: "https://instagram.com/eter.saludmental",
  instagramHandle: "@eter.saludmental",
  address: {
    line1: "Antonio Varas 2650",
    commune: "Providencia",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Antonio+Varas+2650+Providencia+Santiago",
  },
  metro: "Los Leones · 6 min a pie",
  parking: "Estacionamiento en el predio · 4 cupos",
  hoursShort: "Lun–Vie 8:30–20:30 · Sáb 9:00–14:00",
  hours: [
    { days: "Lunes a viernes", time: "8:30 – 20:30" },
    { days: "Sábado", time: "9:00 – 14:00" },
    { days: "Domingo y festivos", time: "Cerrado" },
  ],
  founded: 2018,
  crisis: {
    label: "Si ahora es demasiado",
    line: "Salud Responde 600 360 7777 · *4141 prevención del suicidio",
    phone: "600 360 7777",
    phoneHref: "tel:6003607777",
    alt: "*4141",
    altHref: "tel:*4141",
  },
} as const;

export const navLinks = [
  { href: "/enfoque", label: "Enfoque" },
  { href: "/areas", label: "Áreas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/espacio", label: "Espacio" },
] as const;
