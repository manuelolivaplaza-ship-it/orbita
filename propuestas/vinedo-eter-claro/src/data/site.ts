export const site = {
  name: "ETER",
  legalName: "ETER SpA",
  rut: "77.482.610-5",
  tagline: "Vinos de niebla.",
  description:
    "Viña de niebla en Lo Ovalle, Casablanca. Seis vinos de clima frío, catas con cupo visible y despacho a todo Chile.",
  url: "https://eter.cl",
  email: "hola@eter.cl",
  phone: "+56 32 274 1908",
  phoneHref: "tel:+56322741908",
  whatsapp: "+56 9 7614 2280",
  whatsappHref:
    "https://wa.me/56976142280?text=Hola%20ETER%2C%20quiero%20reservar%20una%20cata.",
  instagram: "https://instagram.com/eter.vina",
  instagramHandle: "@eter.vina",
  address: {
    line1: "Fundo Las Nieblas, Lo Ovalle",
    commune: "Casablanca",
    city: "Casablanca",
    region: "Región de Valparaíso",
    country: "Chile",
    maps: "https://maps.google.com/?q=Lo+Ovalle+Casablanca+Chile",
  },
  access: "Ruta 68 km 68 · 55 min desde Santiago",
  parking: "Estacionamiento en el fundo · 32 cupos",
  hoursShort: "Mié–Dom 10:00–18:00",
  hours: [
    { days: "Miércoles a domingo", time: "10:00 – 18:00" },
    { days: "Lunes y martes", time: "Cerrado al público · despacho opera" },
    { days: "Última cata", time: "16:00" },
  ],
  founded: 2016,
  altitude: 248,
  hectares: 42,
  bottles: 18000,
  shipping: {
    rm: 4990,
    regions: 7990,
    freeFrom: 80000,
    rmWindow: "24–48 h",
    regionsWindow: "48–72 h",
  },
} as const;

export const navLinks = [
  { href: "/vinos", label: "Vinos" },
  { href: "/terroir", label: "Terroir" },
  { href: "/visitas", label: "Visitas" },
  { href: "/contacto", label: "Contacto" },
] as const;
