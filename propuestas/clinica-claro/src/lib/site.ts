export const site = {
  name: "CLARO",
  legalName: "Clínica Claro SpA",
  tagline: "Cuarenta y cinco minutos. A la luz del día.",
  description:
    "Clínica médica en una casa de Los Conquistadores, Providencia. Ocho especialistas. Consultas de 45 minutos. Laboratorio propio. Honorarios por escrito. Respuesta el mismo día hábil.",
  url: "https://claro.cl",
  rut: "76.412.890-3",
  founded: 2018,
  years: 8,
  doctors: 8,
  minutes: 45,
  email: "hola@claro.cl",
  phone: "+56 2 2334 7180",
  phoneHref: "tel:+56223347180",
  mobile: "+56 9 7841 2260",
  mobileHref: "tel:+56978412260",
  whatsapp:
    "https://wa.me/56978412260?text=Hola%2C%20quiero%20pedir%20una%20hora%20en%20CLARO.",
  address: {
    line: "Los Conquistadores 2170",
    city: "Providencia, Santiago",
    comuna: "Providencia",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Los+Conquistadores+2170+Providencia+Santiago",
    mapsEmbed:
      "https://www.google.com/maps?q=Los+Conquistadores+2170,+Providencia,+Santiago,+Chile&output=embed",
  },
  metro: "Pedro de Valdivia · 11 min a pie",
  parking: "Estacionamiento en el predio · 4 cupos",
  hours: "Lunes a jueves 8:00–19:00 · Viernes 8:00–17:30 · Sábado 9:00–13:00",
  hoursShort: "Lun–Jue 8:00–19:00",
  instagram: "https://instagram.com/clinicaclaro",
  colegio: "Colegio Médico de Chile",
  superintendencia: "Prestador inscrito en la Superintendencia de Salud",
} as const;

export const nav = [
  { href: "/clinica", label: "La casa" },
  { href: "/especialidades", label: "Salas" },
  { href: "/equipo", label: "Médicos" },
  { href: "/primera-consulta", label: "Primera hora" },
  { href: "/laboratorio", label: "Laboratorio" },
] as const;

export const hours = [
  { day: "Lunes a jueves", time: "8:00 – 19:00" },
  { day: "Viernes", time: "8:00 – 17:30" },
  { day: "Sábado", time: "9:00 – 13:00 · controles y laboratorio" },
  { day: "Domingo y festivos", time: "Cerrado · no somos urgencia" },
] as const;
