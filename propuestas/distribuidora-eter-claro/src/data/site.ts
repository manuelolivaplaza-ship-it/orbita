export const site = {
  name: "ETER",
  legalName: "ETER SpA",
  rut: "76.821.440-9",
  tagline: "Tres estados. Una sola red.",
  description:
    "Distribuidora de insumos para cocina profesional en Pudahuel. Seco, líquido y frío en una sola guía de despacho. Región Metropolitana, Valparaíso y O’Higgins.",
  url: "https://eter.cl",
  email: "comercial@eter.cl",
  emailDespacho: "despacho@eter.cl",
  phone: "+56 2 2589 4400",
  phoneHref: "tel:+56225894400",
  whatsapp: "+56 9 7862 1140",
  whatsappHref:
    "https://wa.me/56978621140?text=Hola%20ETER%2C%20quiero%20abrir%20cuenta%20comercial.",
  instagram: "https://instagram.com/eter.distribuidora",
  instagramHandle: "@eter.distribuidora",
  address: {
    line1: "Av. Américo Vespucio 1501, Parque ENEA",
    commune: "Pudahuel",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Americo+Vespucio+1501+Pudahuel",
  },
  hours: [
    { days: "Lunes a viernes", time: "06:30 – 17:30" },
    { days: "Sábado", time: "07:00 – 12:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  pedidoMinimoNeto: 180_000,
  cortePedido: "14:00",
  plazoRM: "24 h",
  plazoRegiones: "48 h",
  factura: "30 días, con evaluación comercial",
} as const;

export const navLinks = [
  { href: "/lineas", label: "Líneas" },
  { href: "/red", label: "Red" },
  { href: "/nosotros", label: "Nosotros" },
] as const;
