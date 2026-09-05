export const site = {
  name: "NOCTUA",
  legalName: "NOCTUA SpA",
  rut: "77.612.448-K",
  tagline: "Se reconoce de noche.",
  description:
    "Casa nocturna de automóviles en Vitacura, Santiago. Una colección curada que se visita después del crepúsculo: precisión, silencio y pocas piezas.",
  url: "https://noctua.cl",
  email: "hola@noctua.cl",
  phone: "+56 2 3288 1900",
  phoneHref: "tel:+56232881900",
  whatsapp: "+56 9 5188 2400",
  whatsappHref:
    "https://wa.me/56951882400?text=Hola%20NOCTUA%2C%20quiero%20agendar%20una%20visita%20nocturna.",
  instagram: "https://instagram.com/noctua.casa",
  instagramHandle: "@noctua.casa",
  coords: { lat: "33°23′S", lng: "70°34′W" },
  address: {
    line1: "Av. Nueva Costanera 4220",
    commune: "Vitacura",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Av.+Nueva+Costanera+4220+Vitacura",
  },
  hours: [
    { days: "Martes a sábado", time: "18:00 – 00:00" },
    { days: "Domingo y lunes", time: "Cerrado" },
    { days: "Diurno", time: "Solo reserva extraordinaria" },
  ],
  ufRateCLP: 39_850,
} as const;

export const navLinks = [
  { href: "/coleccion", label: "Colección" },
  { href: "/la-casa", label: "La casa" },
  { href: "/visita", label: "Visita" },
] as const;
