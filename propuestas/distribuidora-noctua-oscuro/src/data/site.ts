export const site = {
  name: "NOCTUA",
  legalName: "NOCTUA SpA",
  rut: "77.904.331-2",
  tagline: "Se llega de noche.",
  description:
    "Distribuidora nocturna de insumos para cocina profesional en Quilicura. Una ronda entre las 21:00 y las 05:30: seca, positiva y negativa, en una sola guía.",
  url: "https://noctua.cl",
  email: "comercial@noctua.cl",
  emailRonda: "ronda@noctua.cl",
  phone: "+56 2 2760 3310",
  phoneHref: "tel:+56227603310",
  whatsapp: "+56 9 7640 3310",
  whatsappHref:
    "https://wa.me/56976403310?text=Hola%20NOCTUA%2C%20quiero%20abrir%20cuenta%20comercial.",
  instagram: "https://instagram.com/noctua.ronda",
  instagramHandle: "@noctua.ronda",
  coords: { lat: "33°21′S", lng: "70°44′W" },
  address: {
    line1: "Camino Lo Echevers 1551",
    commune: "Quilicura",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Camino+Lo+Echevers+1551+Quilicura",
  },
  hours: [
    { days: "Lunes a sábado", time: "20:00 – 06:00" },
    { days: "Domingo", time: "Silencio" },
    { days: "Corte de pedido", time: "19:00 · misma noche" },
  ],
  pedidoMinimoNeto: 220_000,
  cortePedido: "19:00",
  plazoRM: "misma noche",
  plazoRegiones: "48 h",
  factura: "30 días, con evaluación comercial",
} as const;

export const navLinks = [
  { href: "/carta", label: "Carta" },
  { href: "/ronda", label: "Ronda" },
  { href: "/casa", label: "La casa" },
] as const;
