export const site = {
  name: "COTA",
  legalName: "COTA Arquitectura SpA",
  tagline: "El corte es el proyecto.",
  sentence: "En Chile el sol entra por el norte. Lo demás es sombra, alero y talud.",
  description:
    "Estudio de arquitectura en Pedro de Valdivia Norte, Providencia. Casas en talud, patios que miran al norte y estructura que se lee. El corte es el proyecto.",
  url: "https://cota.cl",
  rut: "76.591.308-K",
  founded: 2014,
  years: 12,
  people: 6,
  works: 38,
  email: "estudio@cota.cl",
  phone: "+56 2 2321 4480",
  phoneHref: "tel:+56223214480",
  mobile: "+56 9 7762 1840",
  mobileHref: "tel:+56977621840",
  whatsapp:
    "https://wa.me/56977621840?text=Hola%2C%20quiero%20encargar%20un%20predio%20en%20COTA.",
  instagram: "https://instagram.com/cota.arquitectura",
  address: {
    line: "El Cerro 2140",
    city: "Pedro de Valdivia Norte, Providencia",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=El+Cerro+2140+Providencia+Santiago",
  },
  metro: "Los Leones · 14 min a pie",
  hours: "Lunes a viernes, 9:30 a 18:30",
  hoursShort: "Lun–Vie 9:30–18:30",
  lat: -33.4192,
  lng: -70.6158,
  coords: "33°25′09″ S · 70°36′57″ W",
  cota: "+612.40",
  colegio: "Colegio de Arquitectos de Chile",
  aoa: "AOA Nº 2.184",
} as const;

export const nav = [
  { href: "/obras", label: "Obras" },
  { href: "/estudio", label: "Estudio" },
  { href: "/oficio", label: "Oficio" },
] as const;

export const stats = [
  { value: "2014", label: "Primera cota" },
  { value: "38", label: "Obras" },
  { value: "N", label: "Orientación" },
  { value: "NCh433", label: "Sismo de trabajo" },
] as const;
