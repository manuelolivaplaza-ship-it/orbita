export type Region = {
  id: string;
  name: string;
  shipping: number;
  lead: number;
};

export const regions: Region[] = [
  { id: "xv", name: "Arica y Parinacota", shipping: 6_990, lead: 5 },
  { id: "i", name: "Tarapacá", shipping: 6_990, lead: 5 },
  { id: "ii", name: "Antofagasta", shipping: 6_990, lead: 5 },
  { id: "iii", name: "Atacama", shipping: 6_990, lead: 4 },
  { id: "iv", name: "Coquimbo", shipping: 5_990, lead: 3 },
  { id: "v", name: "Valparaíso", shipping: 4_990, lead: 2 },
  { id: "rm", name: "Metropolitana", shipping: 3_990, lead: 1 },
  { id: "vi", name: "O'Higgins", shipping: 4_990, lead: 2 },
  { id: "vii", name: "Maule", shipping: 5_990, lead: 3 },
  { id: "xvi", name: "Ñuble", shipping: 5_990, lead: 3 },
  { id: "viii", name: "Biobío", shipping: 5_990, lead: 3 },
  { id: "ix", name: "La Araucanía", shipping: 6_990, lead: 4 },
  { id: "xiv", name: "Los Ríos", shipping: 6_990, lead: 4 },
  { id: "x", name: "Los Lagos", shipping: 6_990, lead: 4 },
  { id: "xi", name: "Aysén", shipping: 12_990, lead: 7 },
  { id: "xii", name: "Magallanes", shipping: 12_990, lead: 8 },
];

export const pickup = {
  id: "retiro",
  name: "Retiro en Lastarria",
  shipping: 0,
  lead: 0,
} as const;

export function getRegion(id: string) {
  return regions.find((r) => r.id === id) ?? regions.find((r) => r.id === "rm")!;
}

export function shippingFor(subtotal: number, regionId: string, freeFrom: number) {
  if (regionId === pickup.id) return 0;
  const region = getRegion(regionId);
  if (region.id === "xi" || region.id === "xii") return region.shipping;
  if (subtotal >= freeFrom) return 0;
  return region.shipping;
}
