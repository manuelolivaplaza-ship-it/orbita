export const site = {
  name: "FARO",
  legalName: "FARO Agencia SpA",
  tagline: "Señales claras.",
  description:
    "Agencia de marketing digital en Lastarria, Santiago. Estrategia, pauta, contenido y sitios para marcas chilenas que ya facturan y no quieren parecer un template. Brief en 24 horas hábiles.",
  url: "https://faro.cl",
  rut: "77.412.890-5",
  founded: 2018,
  years: 8,
  people: 5,
  email: "hola@faro.cl",
  phone: "+56 9 8451 3302",
  phoneHref: "tel:+56984513302",
  whatsapp:
    "https://wa.me/56984513302?text=Hola%2C%20quiero%20pedir%20un%20brief%20en%20FARO.",
  address: {
    line: "José Victorino Lastarria 70, of. 4",
    city: "Santiago Centro, Santiago",
    country: "Chile",
    maps: "https://maps.google.com/?q=Jose+Victorino+Lastarria+70+Santiago",
  },
  metro: "Universidad Católica · 4 min a pie",
  hours: "Lunes a viernes, 9:00 a 18:30",
  hoursShort: "Lun–Vie 9:00–18:30",
  instagram: "https://instagram.com/faroagencia",
  linkedin: "https://www.linkedin.com/company/faro-agencia",
} as const;

export const nav = [
  { href: "/trabajo", label: "Trabajo" },
  { href: "/oficio", label: "Oficio" },
  { href: "/estudio", label: "Estudio" },
] as const;
