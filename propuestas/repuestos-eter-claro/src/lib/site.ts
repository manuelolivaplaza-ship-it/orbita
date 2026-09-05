export const site = {
  name: "ETER",
  legalName: "ETER Repuestos SpA",
  tagline: "La pieza que falta.",
  description:
    "Sala de piezas en Independencia, Santiago. Cruzamos patente, marca y motor. Stock en ficha, despacho hoy en la RM o retiro en el mostrador.",
  url: "https://eter.cl",
  rut: "77.412.608-2",
  founded: 2021,
  email: "mostrador@eter.cl",
  phone: "+56 9 8762 4410",
  phoneHref: "tel:+56987624410",
  whatsapp:
    "https://wa.me/56987624410?text=Hola%2C%20quiero%20cruzar%20una%20pieza%20en%20ETER.",
  address: {
    line: "Av. Independencia 3142",
    city: "Independencia, Santiago",
    country: "Chile",
    maps: "https://maps.google.com/?q=Avenida+Independencia+3142+Independencia+Santiago",
  },
  metro: "Hospitales · 6 min a pie",
  hours: "Lunes a viernes 8:30–18:30 · Sábado 9:00–14:00",
  hoursShort: "Lun–Vie 8:30–18:30 · Sáb 9:00–14:00",
  instagram: "https://instagram.com/eter.repuestos",
} as const;

export const nav = [
  { href: "/familias", label: "Familias" },
  { href: "/despacho", label: "Despacho" },
  { href: "/mostrador", label: "Mostrador" },
] as const;
