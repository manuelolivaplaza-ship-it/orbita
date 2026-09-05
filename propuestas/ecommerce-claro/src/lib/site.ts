export const site = {
  name: "Bazar Austral",
  short: "Austral",
  legalName: "Bazar Austral SpA",
  rut: "77.612.408-5",
  tagline: "Lo que dura sobre la mesa.",
  description:
    "Casa de objetos en Lastarria, Santiago. Lino, gres, madera y despensa reunidos para la mesa chilena. Despacho a todo Chile. Precio con IVA.",
  url: "https://bazaraustral.cl",
  email: "hola@bazaraustral.cl",
  emailHref: "mailto:hola@bazaraustral.cl",
  phone: "+56 2 3218 4410",
  phoneHref: "tel:+56232184410",
  whatsapp: "+56 9 6612 7740",
  whatsappHref:
    "https://wa.me/56966127740?text=Hola%20Bazar%20Austral%2C%20quiero%20consultar%20por%20una%20pieza.",
  instagram: "https://instagram.com/bazaraustral",
  instagramHandle: "@bazaraustral",
  address: {
    line: "José Victorino Lastarria 84, local 2",
    commune: "Santiago",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Jose+Victorino+Lastarria+84+Santiago",
  },
  hours: [
    { days: "Martes a viernes", time: "11:00 – 19:00" },
    { days: "Sábado", time: "11:00 – 17:00" },
    { days: "Domingo y lunes", time: "Cerrado" },
  ],
  hoursShort: "Mar–vie 11–19 · sáb 11–17",
  freeShippingFrom: 59_990,
  founded: 2019,
} as const;

export const nav = [
  { href: "/coleccion", label: "Colección" },
  { href: "/la-casa", label: "La casa" },
  { href: "/envios", label: "Despacho" },
  { href: "/contacto", label: "Escribir" },
] as const;
