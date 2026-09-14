const BASE = import.meta.env.BASE_URL;

export const media = (nombre: string): string => `${BASE}media/${nombre}`;

/** Formatea montos en CLP con números tabulares (es un rubro de precios). */
export function clp(valor: number): string {
  return `$${valor.toLocaleString('es-CL')}`;
}

export const NAV = [
  { href: '#coleccion', label: 'Colección' },
  { href: '#precios', label: 'Precios' },
  { href: '#cifras', label: 'Cifras' },
  { href: '#metodo', label: 'Cómo comprar' },
  { href: '#faq', label: 'Preguntas' },
];

/* ── Colección demo (12 productos ficticios, sin marcas reales) ── */
export interface Producto {
  nombre: string;
  linea: string;
  material: string;
  precio: number;
  origen: string;
}

export const PRODUCTOS: Producto[] = [
  { nombre: 'Manta Alameda', linea: 'Textiles', material: 'Lino lavado · 220 g/m²', precio: 39990, origen: 'Tejida en Chimbarongo' },
  { nombre: 'Plaid Cordillera', linea: 'Textiles', material: 'Algodón orgánico · trama doble', precio: 34990, origen: 'Hilado en Ovalle' },
  { nombre: 'Set 4 servilletas', linea: 'Textiles', material: 'Lino natural · costura francesa', precio: 18990, origen: 'Confeccionado en Santiago' },
  { nombre: 'Bowl Maule', linea: 'Cerámica', material: 'Gres esmaltado mate · 14 cm', precio: 12990, origen: 'Torneado en Pomaire' },
  { nombre: 'Fuente Litoral', linea: 'Cerámica', material: 'Gres crudo · 28 cm', precio: 24990, origen: 'Torneado en Pomaire' },
  { nombre: 'Jarrón Niebla', linea: 'Cerámica', material: 'Cerámica engobada · 22 cm', precio: 21990, origen: 'Pieza única, Talca' },
  { nombre: 'Tabla Quinchamalí', linea: 'Madera', material: 'Roble pellín · aceitado', precio: 27990, origen: 'Carpintería de Quinchamalí' },
  { nombre: 'Tabla de servir Colchagua', linea: 'Madera', material: 'Ciprés de las Guaitecas', precio: 19990, origen: 'Aprovechamiento de madera caída' },
  { nombre: 'Porta utensilios Ranco', linea: 'Madera', material: 'Raulí · junta viva', precio: 14990, origen: 'Hecho en Valdivia' },
  { nombre: 'Set 2 cojines Costa', linea: 'Textiles', material: 'Lino y algodón · relleno incluido', precio: 29990, origen: 'Confeccionado en Santiago' },
  { nombre: 'Piso a piso Nube', linea: 'Textiles', material: 'Algodón peinado · 170 × 240 cm', precio: 45990, origen: 'Tejido en Concepción' },
  { nombre: 'Panera Sur', linea: 'Madera', material: 'Lingue · acabado cera', precio: 17990, origen: 'Hecho en Puerto Montt' },
];
