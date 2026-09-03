export const site = {
  name: "CLARO",
  legalName: "Claro Corredores de Propiedades SpA",
  tagline: "Primero, la luz.",
  description:
    "Inmobiliaria boutique en Providencia. Publicamos pocas casas: las que tienen norte, silencio y una hora del día en la que uno se queda parado en el living. Venta y arriendo en Santiago, la costa y el sur.",
  url: "https://claro.cl",
  rut: "77.412.890-5",
  founded: 2014,
  years: 12,
  email: "hola@claro.cl",
  phone: "+56 9 8472 3310",
  phoneHref: "tel:+56984723310",
  whatsapp:
    "https://wa.me/56984723310?text=Hola%2C%20quiero%20visitar%20una%20casa%20con%20CLARO.",
  address: {
    line: "Holanda 1427",
    city: "Providencia, Santiago",
    country: "Chile",
    maps: "https://maps.google.com/?q=Holanda+1427+Providencia+Santiago",
  },
  metro: "Inés de Suárez · 5 min a pie",
  hours: "Lunes a viernes, 9:30 a 18:30. Sábados, con cita.",
  hoursShort: "Lun–Vie 9:30–18:30",
  instagram: "https://instagram.com/claro.casas",
  linkedin: "https://www.linkedin.com/company/claro-casas",
  commission: "2% + IVA",
} as const;

export const nav = [
  { href: "/propiedades", label: "Casas" },
  { href: "/barrios", label: "Barrios" },
  { href: "/vender", label: "Vender" },
  { href: "/estudio", label: "Estudio" },
] as const;
