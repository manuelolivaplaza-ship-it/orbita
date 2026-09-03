export const site = {
  name: "SOLAR",
  legalName: "Solar Corredora de Propiedades SpA",
  tagline: "Antes que la casa, el solar.",
  description:
    "Corredora de casas en sitio en Ñuñoa, La Reina, Peñalolén y Macul. Medimos frente, fondo y patio. Las visitas son entre 11:30 y 14:30, cuando el sol no miente. Valores en UF.",
  url: "https://solar.cl",
  rut: "76.551.229-8",
  founded: 2016,
  years: 10,
  email: "mesa@solar.cl",
  phone: "+56 2 2374 8810",
  phoneHref: "tel:+56223748810",
  mobile: "+56 9 7841 2290",
  mobileHref: "tel:+56978412290",
  whatsapp:
    "https://wa.me/56978412290?text=Hola%2C%20quiero%20encargar%20un%20solar%20en%20SOLAR.",
  instagram: "https://instagram.com/solar.corredora",
  address: {
    line: "Av. Larraín 6412",
    city: "La Reina, Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Avenida+Larrain+6412+La+Reina+Santiago",
  },
  metro: "Plaza Egaña · 12 min en bus",
  hours: "Lunes a viernes, 9:30 a 18:30",
  hoursShort: "Lun–Vie 9:30–18:30",
  visitHours: "Visitas a solares: 11:30 a 14:30",
  coproch: "COPROCH Nº 4.118",
  lat: -33.4478,
  lng: -70.5364,
  coords: "33°26′52″ S · 70°32′11″ W",
} as const;

export const nav = [
  { href: "/solares", label: "Solares" },
  { href: "/oficio", label: "Oficio" },
  { href: "/barrios", label: "Barrios" },
  { href: "/mesa", label: "Mesa" },
] as const;

export const stats = [
  { value: "2016", label: "Casa abierta" },
  { value: "4", label: "Comunas de radio" },
  { value: "UF", label: "Unidad de valor" },
  { value: "11:30", label: "Primera visita" },
] as const;
