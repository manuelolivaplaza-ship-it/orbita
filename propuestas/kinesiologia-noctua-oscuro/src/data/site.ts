export const site = {
  name: "NOCTUA",
  legalName: "NOCTUA SpA",
  rut: "77.612.452-4",
  tagline: "Se lee de noche.",
  description:
    "Centro de kinesiología de precisión en Vitacura. Abrimos cuando Santiago baja la voz: evaluación, columna, hombro, dolor persistente y retorno al deporte. Último cupo 21:30.",
  url: "https://noctuakine.cl",
  email: "hora@noctuakine.cl",
  phone: "+56 2 3288 1944",
  phoneHref: "tel:+56232881944",
  whatsapp: "+56 9 5188 2444",
  whatsappHref:
    "https://wa.me/56951882444?text=Hola%20NOCTUA%2C%20quiero%20pedir%20una%20hora.",
  instagram: "https://instagram.com/noctua.kine",
  instagramHandle: "@noctua.kine",
  coords: { lat: "33°24′S", lng: "70°36′W" },
  address: {
    line1: "Av. Santa María 7120",
    commune: "Vitacura",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Av.+Santa+Maria+7120+Vitacura",
  },
  metro: "Alcántara · 11 min a pie",
  parking: "Dos cupos en el predio · aviso al agendar",
  hoursShort: "Lun–Vie 15:00–22:30 · Sáb 10:00–14:00",
  hours: [
    { days: "Lunes a viernes", time: "15:00 – 22:30" },
    { days: "Sábado", time: "10:00 – 14:00" },
    { days: "Domingo y festivos", time: "Cerrado" },
  ],
  lastSlot: "21:30",
  founded: 2019,
} as const;

export const navLinks = [
  { href: "/oficio", label: "Oficio" },
  { href: "/metodo", label: "Método" },
  { href: "/espacio", label: "Espacio" },
  { href: "/equipo", label: "Equipo" },
] as const;
