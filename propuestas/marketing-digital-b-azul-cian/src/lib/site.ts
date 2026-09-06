export const site = {
  name: "MAREA",
  legalName: "Marea Agencia SpA",
  tagline: "La pauta tiene marea.",
  description:
    "Agencia de marketing digital en Valparaíso. Leemos la demanda antes de gastar. Pauta sin markup, piezas que se entienden a una mano, sitios donde el clic paga. Lectura en 24 horas hábiles.",
  url: "https://marea.cl",
  rut: "77.619.408-5",
  founded: 2020,
  people: 5,
  accounts: 9,
  email: "hola@marea.cl",
  phone: "+56 9 8142 7703",
  phoneHref: "tel:+56981427703",
  whatsapp:
    "https://wa.me/56981427703?text=Hola%2C%20quiero%20pedir%20una%20lectura%20en%20MAREA.",
  address: {
    line: "Cochrane 412, piso 3",
    city: "Valparaíso",
    region: "Región de Valparaíso",
    country: "Chile",
    postal: "2340000",
    maps: "https://maps.google.com/?q=Cochrane+412+Valparaiso",
  },
  barrio: "Barrio Puerto",
  metro: "Trolley Plaza Sotomayor · 3 min a pie",
  hours: "Lunes a viernes, 9:30 a 18:30",
  hoursShort: "Lun–Vie 9:30–18:30",
  instagram: "https://instagram.com/marea.agencia",
  linkedin: "https://www.linkedin.com/company/marea-agencia",
  lecturaPrice: "$92.000",
  retainerFrom: "36 UF",
} as const;

export const nav = [
  { href: "/tabla", label: "Tabla" },
  { href: "/canales", label: "Canales" },
  { href: "/cuentas", label: "Cuentas" },
  { href: "/estudio", label: "Estudio" },
] as const;
