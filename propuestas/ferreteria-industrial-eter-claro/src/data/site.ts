export const site = {
  name: "ETER",
  legalName: "ETER SpA",
  rut: "76.441.228-1",
  tagline: "El peso, en claro.",
  description:
    "Ferretería industrial en 10 de Julio, Santiago. Fierro, pernos, maderas, zinc y herramientas. Corte y doblado a medida, stock rotulado, despacho a obra en la RM.",
  url: "https://eter.cl",
  email: "ventas@eter.cl",
  emailCorte: "corte@eter.cl",
  phone: "+56 2 2840 3315",
  phoneHref: "tel:+56228403315",
  whatsapp: "+56 9 7641 2280",
  whatsappHref:
    "https://wa.me/56976412280?text=Hola%20ETER%2C%20quiero%20cotizar%20una%20lista%20de%20obra.",
  instagram: "https://instagram.com/eter.patio",
  instagramHandle: "@eter.patio",
  address: {
    line1: "10 de Julio 1840",
    commune: "Santiago",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=10+de+Julio+1840+Santiago",
  },
  pickup: {
    line1: "Av. Concha y Toro 3850",
    commune: "Puente Alto",
    note: "Retiro en mesón, con OC o boleta.",
    maps: "https://maps.google.com/?q=Av+Concha+y+Toro+3850+Puente+Alto",
  },
  hours: [
    { days: "Lunes a viernes", time: "07:30 – 18:00" },
    { days: "Sábado", time: "08:00 – 13:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  patioM2: 1840,
  skuCount: 4200,
  corteHora: "14:00",
  plazoRM: "24 h",
  pedidoMinimoIva: 80_000,
  corteIncluidoHasta: "6 m",
  corteExtra: 900,
  dobladoCurva: 1_200,
  factura: "30 días, con evaluación comercial",
} as const;

export const navLinks = [
  { href: "/familias", label: "Familias" },
  { href: "/corte", label: "Corte" },
  { href: "/patio", label: "Patio" },
] as const;
