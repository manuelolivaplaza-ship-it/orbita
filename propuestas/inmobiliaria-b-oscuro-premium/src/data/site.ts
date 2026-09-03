export const site = {
  name: "Obsidiana",
  legal: "Obsidiana SpA",
  tagline: "Residencias de autor.",
  claim: "No vendemos metros. Custodiamos umbrales.",
  description:
    "Atelier inmobiliario de residencias de autor en Santiago, la Costa Central y los Lagos del Sur. Visitas privadas, por invitación y con cita.",
  founded: 2014,
  email: "atelier@obsidiana.cl",
  phone: "+56 2 2658 4410",
  mobile: "+56 9 9188 2304",
  address: {
    street: "Av. Alonso de Córdova 5870, of. 1201",
    comuna: "Vitacura",
    city: "Santiago",
    country: "Chile",
  },
  hours: "Martes a viernes, 10:00–18:00. Sábados solo con cita.",
  instagram: "https://instagram.com/obsidiana.atelier",
  rut: "76.441.208-5",
};

export const nav = [
  { href: "/propiedades", label: "Colección" },
  { href: "/barrios", label: "Territorios" },
  { href: "/estudio", label: "El estudio" },
  { href: "/diario", label: "Diario" },
] as const;

export const territories = [
  { id: "santiago", label: "Santiago", note: "Ladera y valle" },
  { id: "costa", label: "Costa Central", note: "Zapallar · Cachagua" },
  { id: "lagos", label: "Lagos del Sur", note: "Llanquihue · Puelo" },
  { id: "valle", label: "Valle del vino", note: "Casablanca" },
] as const;

export type TerritoryId = (typeof territories)[number]["id"];
