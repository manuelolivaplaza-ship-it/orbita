export const site = {
  name: "Olivo",
  legalName: "Olivo Corredora de Propiedades SpA",
  tagline: "Encuentra tu próxima casa.",
  description:
    "Corredora boutique en el oriente de Santiago. Comprar, vender o arrendar en Las Condes, Vitacura, Providencia, Ñuñoa, La Reina y Lo Barnechea — con criterio, visitas filtradas y respuesta el mismo día.",
  phoneDisplay: "+56 9 8765 4321",
  phoneHref: "tel:+56987654321",
  whatsapp: "56987654321",
  email: "hola@olivo.cl",
  address: "Av. Alonso de Córdova 3100, of. 501",
  comuna: "Las Condes, Santiago",
  hours: "Lun a vie 9:00–19:00 · Sáb 10:00–14:00",
  instagram: "https://instagram.com/olivo.propiedades",
  maps: "https://maps.google.com/?q=Alonso+de+Cordova+3100+Las+Condes",
} as const;

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/propiedades", label: "Propiedades" },
  { href: "/vender", label: "Vender" },
  { href: "/barrios", label: "Comunas" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const comunas = [
  "Las Condes",
  "Vitacura",
  "Providencia",
  "Ñuñoa",
  "La Reina",
  "Lo Barnechea",
] as const;

export type Comuna = (typeof comunas)[number];
