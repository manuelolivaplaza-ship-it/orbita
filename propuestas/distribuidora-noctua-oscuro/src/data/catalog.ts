export type VentanaId = "cierre" | "oscuro" | "umbral";

export type Producto = {
  sku: string;
  name: string;
  producer: string;
  origin: string;
  format: string;
  priceNeto: number;
  ventana: VentanaId;
  note?: string;
  featured?: boolean;
};

export type Ventana = {
  id: VentanaId;
  name: string;
  window: string;
  startMin: number;
  endMin: number;
  kicker: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
  camera: string;
  readout: number;
};

export const ventanas: Ventana[] = [
  {
    id: "cierre",
    name: "Cierre",
    window: "21:00 – 00:30",
    startMin: 21 * 60,
    endMin: 24 * 60 + 30,
    kicker: "Cuando se apaga el salón",
    title: "Barra, seco, aceite, vino.",
    lead: "Lo que viaja sin frío y llega cuando el último cubierto ya se cobró. Ambiente a 18 °C. El local todavía huele a servicio; la guía entra por la puerta de atrás.",
    image: "/images/cierre.jpg",
    alt: "Paso de cocina profesional vacío después del servicio, una lámpara ámbar, platos apilados y una botella de vino",
    camera: "Ronda 1 · ambiente 18 °C",
    readout: 18.4,
  },
  {
    id: "oscuro",
    name: "Oscuro",
    window: "00:30 – 03:30",
    startMin: 24 * 60 + 30,
    endMin: 24 * 60 + 3 * 60 + 30,
    kicker: "Cuando la cámara está sola",
    title: "Mar, carne, lácteo, IQF.",
    lead: "Lo que no puede subir ni un grado. Túnel a −18 °C, caja positiva a 3 °C, sonda por guía. Si se desvía dos grados, la guía no se cierra. El walk-in se llena en silencio.",
    image: "/images/oscuro.jpg",
    alt: "Cámara de frío con salmón entero sobre hielo en bandeja de acero, luz azul y escarcha en las paredes",
    camera: "Ronda 2 · túnel −18 °C",
    readout: -18.1,
  },
  {
    id: "umbral",
    name: "Umbral",
    window: "03:30 – 05:30",
    startMin: 24 * 60 + 3 * 60 + 30,
    endMin: 24 * 60 + 6 * 60,
    kicker: "Cuando llega el primero",
    title: "Harina, fruta, huevo, hierba.",
    lead: "Lo que la brigada toca al entrar. Pastelería, mise, limón, pan par-bake. A las 05:30 la última entrega ya está firmada. El primero en llegar no espera al día.",
    image: "/images/umbral.jpg",
    alt: "Mesa de pastelería a las cuatro de la mañana, una nube de harina bajo una lámpara, sacos de lino y pala de madera",
    camera: "Ronda 3 · positivo +3 °C",
    readout: 3.2,
  },
];

export const productos: Producto[] = [
  {
    sku: "NC-2044",
    name: "Aceite de oliva extra virgen",
    producer: "Olivos del Huasco",
    origin: "Valle del Huasco",
    format: "bidón 5 L",
    priceNeto: 52_900,
    ventana: "cierre",
    featured: true,
    note: "Arbequina. Acidez 0,2 %. Terminación y ensalada.",
  },
  {
    sku: "NC-1108",
    name: "Café grano lavado",
    producer: "Finca Curacautín",
    origin: "Araucanía",
    format: "caja 1 kg",
    priceNeto: 19_400,
    ventana: "cierre",
    featured: true,
    note: "Tueste medio. Barra y hotel.",
  },
  {
    sku: "NC-2401",
    name: "Vino tinto reserva",
    producer: "Viña del Alto",
    origin: "Colchagua",
    format: "caja 6 × 750 ml",
    priceNeto: 38_400,
    ventana: "cierre",
    featured: true,
    note: "Carmenère. Carta corta, copa y maridaje.",
  },
  {
    sku: "NC-1081",
    name: "Sal marina de Cáhuil",
    producer: "Cooperativa Cáhuil",
    origin: "Pichilemu",
    format: "caja 1 kg",
    priceNeto: 6_200,
    ventana: "cierre",
  },
  {
    sku: "NC-2040",
    name: "Aceite de maravilla alto oleico",
    producer: "Valle Central",
    origin: "O’Higgins",
    format: "bidón 20 L",
    priceNeto: 28_600,
    ventana: "cierre",
  },
  {
    sku: "NC-1120",
    name: "Cacao 70 %",
    producer: "Masa Oscura",
    origin: "envasado RM",
    format: "caja 2,5 kg",
    priceNeto: 24_900,
    ventana: "cierre",
  },
  {
    sku: "NC-2088",
    name: "Miel de ulmo",
    producer: "Mieles de Contulmo",
    origin: "Contulmo",
    format: "balde 3 kg",
    priceNeto: 22_400,
    ventana: "cierre",
  },
  {
    sku: "NC-3012",
    name: "Salmón Atlántico porción",
    producer: "Frío Austral",
    origin: "Puerto Montt",
    format: "caja 20 × 150 g",
    priceNeto: 48_900,
    ventana: "oscuro",
    featured: true,
    note: "Piel on. IQF. Plancha y horno.",
  },
  {
    sku: "NC-3020",
    name: "Merluza filete IQF",
    producer: "Frío Austral",
    origin: "Talcahuano",
    format: "caja 5 kg",
    priceNeto: 18_400,
    ventana: "oscuro",
    featured: true,
  },
  {
    sku: "NC-3408",
    name: "Lomo vetado",
    producer: "Carnes del Maipo",
    origin: "Buin",
    format: "caja 4 kg",
    priceNeto: 42_600,
    ventana: "oscuro",
    featured: true,
    note: "Maduración 21 días. Corte porción.",
  },
  {
    sku: "NC-3033",
    name: "Camarón 16/20",
    producer: "Mar de Iquique",
    origin: "Iquique",
    format: "caja 2 kg",
    priceNeto: 29_800,
    ventana: "oscuro",
  },
  {
    sku: "NC-3201",
    name: "Mantequilla",
    producer: "Lácteos del Bío-Bío",
    origin: "Los Ángeles",
    format: "caja 10 × 1 kg",
    priceNeto: 86_000,
    ventana: "oscuro",
  },
  {
    sku: "NC-2201",
    name: "Leche entera",
    producer: "Lácteos del Bío-Bío",
    origin: "Los Ángeles",
    format: "pack 12 × 1 L",
    priceNeto: 14_800,
    ventana: "oscuro",
  },
  {
    sku: "NC-3218",
    name: "Pulpa de palta Hass",
    producer: "Quillota Verde",
    origin: "Quillota",
    format: "caja 6 × 1 kg",
    priceNeto: 22_200,
    ventana: "oscuro",
  },
  {
    sku: "NC-1042",
    name: "Harina de fuerza",
    producer: "Molino del Maipo",
    origin: "Buin",
    format: "saco 25 kg",
    priceNeto: 21_800,
    ventana: "umbral",
    featured: true,
    note: "W 320–340. Masa madre y hojaldre.",
  },
  {
    sku: "NC-1504",
    name: "Huevos de campo",
    producer: "Huerta de Melipilla",
    origin: "Melipilla",
    format: "pack 180 u",
    priceNeto: 28_900,
    ventana: "umbral",
    featured: true,
  },
  {
    sku: "NC-1601",
    name: "Limón de Pica",
    producer: "Citrus del Norte",
    origin: "Pica",
    format: "caja 10 kg",
    priceNeto: 9_800,
    ventana: "umbral",
    featured: true,
  },
  {
    sku: "NC-3104",
    name: "Frambuesas IQF",
    producer: "Berries del Maule",
    origin: "Linares",
    format: "caja 2,5 kg",
    priceNeto: 12_600,
    ventana: "umbral",
  },
  {
    sku: "NC-3305",
    name: "Masas de hojaldre",
    producer: "Hojaldre Sur",
    origin: "RM",
    format: "caja 50 u",
    priceNeto: 9_400,
    ventana: "umbral",
  },
  {
    sku: "NC-1620",
    name: "Hierbas de corte",
    producer: "Huerta de Pirque",
    origin: "Pirque",
    format: "caja 1 kg",
    priceNeto: 7_200,
    ventana: "umbral",
  },
  {
    sku: "NC-1712",
    name: "Pan par-bake",
    producer: "Horno de Ñuñoa",
    origin: "Ñuñoa",
    format: "caja 20 u",
    priceNeto: 8_400,
    ventana: "umbral",
  },
];

export const ronda = [
  { hora: "21:00", minutos: 21 * 60, lugar: "Puerta del CD, Quilicura", ventana: "cierre" as const },
  { hora: "21:40", minutos: 21 * 60 + 40, lugar: "Huechuraba · Vitacura" },
  { hora: "22:20", minutos: 22 * 60 + 20, lugar: "Las Condes · Providencia" },
  { hora: "23:10", minutos: 23 * 60 + 10, lugar: "Ñuñoa · Santiago" },
  { hora: "00:00", minutos: 24 * 60, lugar: "Cierre de primera ronda" },
  { hora: "00:40", minutos: 24 * 60 + 40, lugar: "Segunda salida · frío", ventana: "oscuro" as const },
  { hora: "01:30", minutos: 24 * 60 + 90, lugar: "Maipú · Cerrillos" },
  { hora: "02:20", minutos: 24 * 60 + 140, lugar: "Estación Central · Independencia" },
  { hora: "03:30", minutos: 24 * 60 + 210, lugar: "Tercera salida · umbral", ventana: "umbral" as const },
  { hora: "04:20", minutos: 24 * 60 + 260, lugar: "La Reina · Peñalolén" },
  { hora: "05:10", minutos: 24 * 60 + 310, lugar: "La Florida · Puente Alto" },
  { hora: "05:50", minutos: 24 * 60 + 350, lugar: "Última entrega del tramo" },
];

export const cobertura = [
  {
    zona: "Región Metropolitana",
    plazo: "Misma noche",
    nota: "Pedido antes de las 19:00. Ronda propia, una parada por local.",
  },
  {
    zona: "Valparaíso · Viña · Quillota",
    plazo: "48 h",
    nota: "Martes y jueves de noche. Camión refrigerado.",
  },
  {
    zona: "Rancagua · San Fernando",
    plazo: "48 h",
    nota: "Miércoles de noche. Consolidado en el CD.",
  },
];

export const camaras = [
  { id: "ambiente", name: "Ambiente", readout: 18.4, unit: "C" as const },
  { id: "positivo", name: "Positivo", readout: 3.1, unit: "C" as const },
  { id: "tunel", name: "Túnel", readout: -18.2, unit: "C" as const },
];

export const giros = [
  "Restaurant / fuente de soda",
  "Hotel / alojamiento",
  "Café / pastelería",
  "Bar / coctelería",
  "Catering / eventos",
  "Casino / institucional",
  "Otro",
] as const;

export function getVentana(id: string) {
  return ventanas.find((item) => item.id === id);
}

export function productosDe(id: VentanaId) {
  return productos.filter((item) => item.ventana === id);
}

export function featured() {
  return productos.filter((item) => item.featured);
}
