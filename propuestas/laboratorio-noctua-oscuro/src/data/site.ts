export const site = {
  name: "NOCTUA",
  legalName: "NOCTUA Laboratorio Clínico SpA",
  rut: "77.841.263-2",
  tagline: "Mientras duermes, leemos.",
  description:
    "Laboratorio clínico de turno nocturno en Vitacura. Toma al amanecer y al ocaso. El análisis corre de noche. El informe llega con la primera luz.",
  url: "https://noctualab.cl",
  email: "hora@noctualab.cl",
  informeEmail: "informe@noctualab.cl",
  phone: "+56 2 3218 4400",
  phoneHref: "tel:+56232184400",
  whatsapp: "+56 9 4418 2200",
  whatsappHref:
    "https://wa.me/56944182200?text=Hola%20NOCTUA%2C%20quiero%20pedir%20una%20hora%20de%20toma.",
  instagram: "https://instagram.com/noctua.lab",
  instagramHandle: "@noctua.lab",
  coords: { lat: "33°24′S", lng: "70°35′W" },
  address: {
    line1: "Av. Alonso de Córdova 2820",
    commune: "Vitacura",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Av.+Alonso+de+Cordova+2820+Vitacura",
  },
  metro: "Manquehue · 9 min a pie",
  parking: "Estacionamiento cubierto en el predio",
  hoursShort: "Toma 06:30–12:00 y 16:00–21:00 · Informe al amanecer",
  hours: [
    { days: "Lunes a viernes", time: "Toma 06:30–12:00 y 16:00–21:00" },
    { days: "Sábado", time: "Toma 07:00–12:00" },
    { days: "Procesamiento", time: "Todas las noches 18:00–07:00" },
    { days: "Domingo y festivos", time: "Sin toma · el turno sigue" },
  ],
  lastDraw: "21:00",
  informeHour: "06:12",
  founded: 2018,
  accreditation: "NCh-ISO 15189 · ISP",
} as const;

export const navLinks = [
  { href: "/examenes", label: "Exámenes" },
  { href: "/turno", label: "Turno" },
  { href: "/espacio", label: "Espacio" },
  { href: "/equipo", label: "Equipo" },
  { href: "/resultados", label: "Informe" },
] as const;

export const footerLinks = [
  { href: "/chequeos", label: "Chequeos" },
  { href: "/domicilio", label: "Domicilio" },
  { href: "/sucursales", label: "Sucursales" },
  { href: "/preparacion", label: "Preparación" },
  { href: "/hora", label: "Pedir hora" },
] as const;
