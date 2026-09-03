export const site = {
  name: "ALBA",
  legalName: "ALBA Club de Entrenamiento",
  tagline: "El entrenamiento, a plena luz.",
  description:
    "Club de entrenamiento en Lo Barnechea, Santiago. Fuerza, reforma, condición y recuperación en salas de luz natural.",
  url: "https://alba.club",
  locale: "es_CL",
  address: {
    street: "Av. El Rodeo 12890",
    commune: "Lo Barnechea",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    full: "Av. El Rodeo 12890, Lo Barnechea, Santiago",
  },
  geo: {
    lat: -33.3536,
    lng: -70.5167,
  },
  phone: "+56 9 4218 7703",
  phoneHref: "tel:+56942187703",
  whatsapp: "56942187703",
  whatsappHref: "https://wa.me/56942187703",
  email: "hola@alba.club",
  emailHref: "mailto:hola@alba.club",
  instagram: "https://instagram.com/alba.club",
  instagramHandle: "@alba.club",
  hours: [
    { days: "Lunes a viernes", time: "5:45 – 21:30" },
    { days: "Sábado", time: "8:00 – 18:00" },
    { days: "Domingo", time: "9:00 – 14:00" },
  ],
  hoursShort: "Lun–Vie 5:45–21:30 · Sáb 8:00–18:00 · Dom 9:00–14:00",
} as const;

export const nav = [
  { href: "/espacios", label: "Espacios" },
  { href: "/entrenamiento", label: "Entrenamiento" },
  { href: "/equipo", label: "Equipo" },
  { href: "/clases", label: "Clases" },
  { href: "/membresias", label: "Membresías" },
] as const;
