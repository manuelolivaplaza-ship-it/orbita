export const site = {
  name: "NORTE",
  legalName: "NORTE Agencia SpA",
  tagline: "Claridad, no brillo.",
  description:
    "Agencia de marketing digital en Providencia, Santiago. Estrategia, pauta, relato y sitios para marcas que ya facturan. Luz de norte: se ve lo que hay. Lectura en 24 horas hábiles.",
  url: "https://norte.cl",
  rut: "77.831.204-2",
  founded: 2019,
  years: 7,
  people: 5,
  email: "hola@norte.cl",
  phone: "+56 9 8762 1140",
  phoneHref: "tel:+56987621140",
  whatsapp:
    "https://wa.me/56987621140?text=Hola%2C%20quiero%20pedir%20una%20lectura%20en%20NORTE.",
  address: {
    line: "Santa Beatriz 184",
    city: "Providencia, Santiago",
    country: "Chile",
    maps: "https://maps.google.com/?q=Santa+Beatriz+184+Providencia+Santiago",
  },
  metro: "Manuel Montt · 6 min a pie",
  hours: "Lunes a viernes, 9:30 a 18:30",
  hoursShort: "Lun–Vie 9:30–18:30",
  lightHours: "Luz pareja 10:00–15:00",
  instagram: "https://instagram.com/norteagencia",
  linkedin: "https://www.linkedin.com/company/norte-agencia",
} as const;

export const nav = [
  { href: "/obra", label: "Obra" },
  { href: "/practica", label: "Práctica" },
  { href: "/casa", label: "Casa" },
  { href: "/mesa", label: "Mesa" },
] as const;
