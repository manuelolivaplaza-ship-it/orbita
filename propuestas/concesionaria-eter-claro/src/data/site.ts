export const site = {
  name: "ETER",
  legalName: "ETER SpA",
  rut: "77.458.221-3",
  tagline: "El aire, hecho forma.",
  description:
    "Casa de automóviles en Lo Barnechea, Santiago. Una colección curada de presencias eléctricas, híbridas y un clásico: sin patio, sin prisa.",
  url: "https://eter.cl",
  email: "hola@eter.cl",
  phone: "+56 2 3224 1900",
  phoneHref: "tel:+56232241900",
  whatsapp: "+56 9 4278 3310",
  whatsappHref:
    "https://wa.me/56942783310?text=Hola%20ETER%2C%20quiero%20agendar%20una%20visita%20a%20la%20casa.",
  instagram: "https://instagram.com/eter.casa",
  instagramHandle: "@eter.casa",
  address: {
    line1: "Camino San Francisco de Asís 180",
    commune: "Lo Barnechea",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Camino+San+Francisco+de+Asis+180+Lo+Barnechea",
  },
  hours: [
    { days: "Martes a viernes", time: "11:00 – 19:00" },
    { days: "Sábado", time: "11:00 – 17:00" },
    { days: "Domingo", time: "Con cita" },
    { days: "Lunes", time: "Cerrado" },
  ],
  ufRateCLP: 39_850,
} as const;

export const navLinks = [
  { href: "/coleccion", label: "Colección" },
  { href: "/la-casa", label: "La casa" },
  { href: "/visita", label: "Visita" },
] as const;
