export const site = {
  name: "CAUCE",
  legalName: "CAUCE Estudio Jurídico SpA",
  tagline: "El asunto tiene un cauce.",
  description:
    "Estudio jurídico en Providencia, orilla del Mapocho. Laboral, familia, consumidor, civil e inmobiliario, empresa. Cinco abogados. Honorario en UF, por escrito, antes de firmar. Respuesta en 24 horas hábiles.",
  url: "https://cauce.cl",
  rut: "76.812.449-3",
  founded: 2016,
  years: 10,
  lawyers: 5,
  email: "hola@cauce.cl",
  phone: "+56 9 8451 3302",
  phoneHref: "tel:+56984513302",
  whatsapp:
    "https://wa.me/56984513302?text=Hola%2C%20quiero%20pedir%20un%20sondaje%20en%20CAUCE.",
  address: {
    line: "Av. Santa María 2120",
    city: "Providencia, Santiago",
    country: "Chile",
    maps: "https://maps.google.com/?q=Avenida+Santa+Maria+2120+Providencia+Santiago",
  },
  metro: "Salvador · 6 min a pie",
  hours: "Lunes a viernes, 9:00 a 18:00",
  hoursShort: "Lun–Vie 9:00–18:00",
  instagram: "https://instagram.com/estudiocauce",
  linkedin: "https://www.linkedin.com/company/cauce-estudio",
  colegio: "Colegio de Abogados de Chile",
} as const;

export const nav = [
  { href: "/estudio", label: "El cauce" },
  { href: "/areas", label: "Afluentes" },
  { href: "/equipo", label: "Mesa" },
  { href: "/asuntos", label: "Asuntos" },
] as const;
