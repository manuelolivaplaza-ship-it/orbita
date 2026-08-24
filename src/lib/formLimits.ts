export const FIELD_MAX = {
  nombre: 120,
  email: 254,
  telefono: 40,
  mensaje: 4000,
  plan: 80,
  extras: 500,
  total: 80,
  empresa: 160,
  rubro: 120,
  plazo: 40,
  objetivo: 240,
  fecha: 80,
  tema: 80,
  nota: 2000,
  slug: 80,
  title: 200,
  client: 160,
  notes: 4000,
} as const;

export function clip(value: string | undefined, max: number): string {
  return (value ?? '').trim().slice(0, max);
}

export function isHoneyFilled(value: string | undefined): boolean {
  return Boolean(value && value.trim());
}
