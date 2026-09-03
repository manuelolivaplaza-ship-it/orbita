export const site = {
  name: "ALBA",
  legalName: "Estudio Alba",
  tagline: "Claridad ante lo complejo.",
  description:
    "Estudio jurídico boutique en Recoleta. Corporativo, contencioso, laboral, familia, inmobiliario y compliance. Pocos asuntos. Pensados hasta el final.",
  url: "https://alba.ar",
  founded: 1998,
  email: "estudio@alba.ar",
  phone: "+54 11 4809 4410",
  phoneHref: "tel:+541148094410",
  whatsapp: "https://wa.me/5491148094410",
  address: {
    line: "Av. Alvear 1867, Piso 3",
    city: "Recoleta, CABA",
    country: "Argentina",
    maps: "https://maps.google.com/?q=Avenida+Alvear+1867+Recoleta+Buenos+Aires",
  },
  hours: "Lunes a viernes, 9:30 a 18:30",
  instagram: "https://instagram.com/estudioalba",
  linkedin: "https://www.linkedin.com/company/estudio-alba",
} as const;

export const nav = [
  { href: "/estudio", label: "El estudio" },
  { href: "/areas", label: "Áreas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/casos", label: "Casos" },
  { href: "/perspectivas", label: "Perspectivas" },
] as const;
