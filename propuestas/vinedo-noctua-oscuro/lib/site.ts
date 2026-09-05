export const site = {
  name: "NOCTUA",
  legal: "Noctua SpA",
  tagline: "Cosechamos cuando el valle duerme.",
  place: "Valle del Elqui, Chile",
  region: "Paihuano, Región de Coquimbo",
  coords: {
    lat: "30°13′12″ S",
    lon: "70°29′40″ W",
    altitude: 1720,
  },
  founded: 2014,
  hectares: 9.4,
  address: "Camino a Alcohuaz s/n, Paihuano, Región de Coquimbo",
  email: "hola@noctua.cl",
  pedidos: "pedidos@noctua.cl",
  phoneDisplay: "+56 9 8765 4321",
  whatsapp: "56987654321",
  hours: "Visitas con reserva · jueves a domingo · 21:00–00:30",
  shippingFreeFrom: 80000,
  shippingRm: 4990,
  shippingRegions: 7990,
};

export const nav = [
  { href: "/vinos", label: "Vinos" },
  { href: "/origen", label: "Origen" },
  { href: "/metodo", label: "Método" },
  { href: "/visitas", label: "Visitas" },
  { href: "/circulo", label: "Círculo" },
] as const;

export const facts = [
  { label: "Latitud", value: "30°13′ S" },
  { label: "Altitud", value: "1.390–1.810 m" },
  { label: "Lluvia", value: "42 mm / año" },
  { label: "Amplitud", value: "ΔT 21 °C" },
  { label: "Cosecha", value: "00:00–05:00" },
  { label: "Superficie", value: "9,4 ha" },
];
