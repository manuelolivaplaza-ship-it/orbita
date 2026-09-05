export type EstadoId = "seco" | "liquido" | "frio";

export type Producto = {
  sku: string;
  name: string;
  producer: string;
  origin: string;
  format: string;
  priceNeto: number;
  estado: EstadoId;
  note?: string;
  featured?: boolean;
};

export type Estado = {
  id: EstadoId;
  name: string;
  temp: string;
  readout: number;
  unit: "C";
  kicker: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
  camera: string;
};

export const estados: Estado[] = [
  {
    id: "seco",
    name: "Seco",
    temp: "18–22 °C",
    readout: 19.4,
    unit: "C",
    kicker: "Ambiente controlado",
    title: "Harinas, granos, café, sales.",
    lead: "Lo que viaja sin frío y no perdona humedad. Bodega norte del CD, 19 °C estables, aire filtrado. Sacos, cajas y bidones que llegan a pastelería y a la estación caliente sin sorpresas.",
    image: "/images/seco.jpg",
    alt: "Saco de lino con harina de fuerza y una nube de polvo en suspensión, sobre mesa de piedra",
    camera: "Bodega seca · 19 °C",
  },
  {
    id: "liquido",
    name: "Líquido",
    temp: "+2 a +4 °C",
    readout: 3.6,
    unit: "C",
    kicker: "Cámara positiva",
    title: "Aceites, lácteos, fondos, mieles.",
    lead: "Todo lo que es materia y aún escurre. Cámara positiva a 3 °C. El aceite de oliva no se pone turbio, la mantequilla no se oxida, el fondo no fermenta en el camino.",
    image: "/images/liquido.jpg",
    alt: "Botella de vidrio con aceite de oliva y una gota sobre piedra caliza, luz de norte",
    camera: "Cámara +3 °C",
  },
  {
    id: "frio",
    name: "Frío",
    temp: "−18 °C",
    readout: -18.1,
    unit: "C",
    kicker: "Cadena negativa",
    title: "Mar, fruta IQF, pastelería.",
    lead: "Lo que no puede subir ni un grado. Túnel a −18 °C, camión propio, registro por guía. Si la sonda se desvía dos grados, la guía no sale.",
    image: "/images/frio.jpg",
    alt: "Salmón entero sobre hielo en bandeja gastronorm, sobre mesa de acero en cámara fría",
    camera: "Túnel −18 °C",
  },
];

export const productos: Producto[] = [
  {
    sku: "ET-1042",
    name: "Harina de fuerza",
    producer: "Molino del Maipo",
    origin: "Buin",
    format: "saco 25 kg",
    priceNeto: 21_800,
    estado: "seco",
    featured: true,
    note: "W 320–340. Pan de masa madre y hojaldre.",
  },
  {
    sku: "ET-1040",
    name: "Harina 000",
    producer: "Molino del Maipo",
    origin: "Buin",
    format: "saco 25 kg",
    priceNeto: 18_400,
    estado: "seco",
  },
  {
    sku: "ET-1108",
    name: "Café grano lavado",
    producer: "Finca Curacautín",
    origin: "Araucanía",
    format: "caja 1 kg",
    priceNeto: 19_400,
    estado: "seco",
    featured: true,
    note: "Tueste medio. Barra y hotel.",
  },
  {
    sku: "ET-1081",
    name: "Sal marina de Cáhuil",
    producer: "Cooperativa Cáhuil",
    origin: "Pichilemu",
    format: "caja 1 kg",
    priceNeto: 6_200,
    estado: "seco",
    featured: true,
  },
  {
    sku: "ET-1120",
    name: "Cacao 100 %",
    producer: "Masa Oscura",
    origin: "importado / envasado en RM",
    format: "caja 2,5 kg",
    priceNeto: 24_900,
    estado: "seco",
  },
  {
    sku: "ET-1162",
    name: "Quinoa real",
    producer: "Altiplano Sur",
    origin: "Colchane",
    format: "saco 5 kg",
    priceNeto: 16_800,
    estado: "seco",
  },
  {
    sku: "ET-1070",
    name: "Azúcar flor",
    producer: "Iansa Chef",
    origin: "Chile",
    format: "saco 10 kg",
    priceNeto: 12_400,
    estado: "seco",
  },
  {
    sku: "ET-2044",
    name: "Aceite de oliva extra virgen",
    producer: "Olivos del Huasco",
    origin: "Valle del Huasco",
    format: "bidón 5 L",
    priceNeto: 52_900,
    estado: "liquido",
    featured: true,
    note: "Arbequina. Acidez 0,2 %. Ensaladas y terminación.",
  },
  {
    sku: "ET-2040",
    name: "Aceite de maravilla alto oleico",
    producer: "Valle Central",
    origin: "O’Higgins",
    format: "bidón 20 L",
    priceNeto: 28_600,
    estado: "liquido",
    featured: true,
  },
  {
    sku: "ET-2088",
    name: "Miel de ulmo",
    producer: "Mieles de Contulmo",
    origin: "Contulmo",
    format: "balde 3 kg",
    priceNeto: 22_400,
    estado: "liquido",
    featured: true,
  },
  {
    sku: "ET-2061",
    name: "Vinagre de manzana",
    producer: "Huerta del Maule",
    origin: "Maule",
    format: "bidón 3 L",
    priceNeto: 9_800,
    estado: "liquido",
  },
  {
    sku: "ET-2110",
    name: "Fondo de ternera",
    producer: "Cocina Madre",
    origin: "RM",
    format: "bolsa 2 L",
    priceNeto: 11_200,
    estado: "liquido",
    note: "Sin sal añadida. Reducción 12 h.",
  },
  {
    sku: "ET-2201",
    name: "Leche entera",
    producer: "Lácteos del Bío-Bío",
    origin: "Los Ángeles",
    format: "pack 12 × 1 L",
    priceNeto: 14_800,
    estado: "liquido",
  },
  {
    sku: "ET-2220",
    name: "Jugo de naranja NFC",
    producer: "Citrus del Norte",
    origin: "Ovalle",
    format: "bidón 5 L",
    priceNeto: 13_500,
    estado: "liquido",
  },
  {
    sku: "ET-3012",
    name: "Salmón Atlántico porción",
    producer: "Frío Austral",
    origin: "Puerto Montt",
    format: "caja 20 × 150 g",
    priceNeto: 48_900,
    estado: "frio",
    featured: true,
    note: "Piel on. IQF. Para plancha y horno.",
  },
  {
    sku: "ET-3020",
    name: "Merluza filete IQF",
    producer: "Frío Austral",
    origin: "Talcahuano",
    format: "caja 5 kg",
    priceNeto: 18_400,
    estado: "frio",
    featured: true,
  },
  {
    sku: "ET-3033",
    name: "Camarón 16/20",
    producer: "Mar de Iquique",
    origin: "Iquique",
    format: "caja 2 kg",
    priceNeto: 29_800,
    estado: "frio",
    featured: true,
  },
  {
    sku: "ET-3104",
    name: "Frambuesas IQF",
    producer: "Berries del Maule",
    origin: "Linares",
    format: "caja 2,5 kg",
    priceNeto: 12_600,
    estado: "frio",
  },
  {
    sku: "ET-3201",
    name: "Mantequilla",
    producer: "Lácteos del Bío-Bío",
    origin: "Los Ángeles",
    format: "caja 10 × 1 kg",
    priceNeto: 86_000,
    estado: "frio",
  },
  {
    sku: "ET-3218",
    name: "Pulpa de palta Hass",
    producer: "Quillota Verde",
    origin: "Quillota",
    format: "caja 6 × 1 kg",
    priceNeto: 22_200,
    estado: "frio",
  },
  {
    sku: "ET-3305",
    name: "Masas de empanada",
    producer: "Hojaldre Sur",
    origin: "RM",
    format: "caja 50 u",
    priceNeto: 9_400,
    estado: "frio",
  },
];

export const rondaAm = [
  { hora: "04:30", lugar: "Puerta del CD, Pudahuel" },
  { hora: "05:40", lugar: "Maipú · Cerrillos" },
  { hora: "06:20", lugar: "Estación Central · Santiago" },
  { hora: "06:55", lugar: "Providencia · Ñuñoa" },
  { hora: "07:25", lugar: "Las Condes · Vitacura" },
  { hora: "08:00", lugar: "La Reina · Peñalolén" },
  { hora: "08:40", lugar: "La Florida · Puente Alto" },
];

export const rondaPm = [
  { hora: "13:30", lugar: "Corte de pedido para mañana" },
  { hora: "14:00", lugar: "Segunda salida · oriente RM" },
  { hora: "16:30", lugar: "Última entrega del día" },
];

export const cobertura = [
  {
    zona: "Región Metropolitana",
    plazo: "24 h",
    nota: "Pedido antes de las 14:00. Ronda propia.",
  },
  {
    zona: "Valparaíso · Viña · Quillota",
    plazo: "48 h",
    nota: "Martes y viernes. Camión refrigerado.",
  },
  {
    zona: "Rancagua · San Fernando",
    plazo: "48 h",
    nota: "Miércoles. Consolidado en el CD.",
  },
];

export const giros = [
  "Restaurant / fuente de soda",
  "Hotel / alojamiento",
  "Café / pastelería",
  "Catering / eventos",
  "Retail gourmet",
  "Casino / institucional",
  "Otro",
] as const;

export function getEstado(id: string) {
  return estados.find((item) => item.id === id);
}

export function productosDe(id: EstadoId) {
  return productos.filter((item) => item.estado === id);
}

export function featured() {
  return productos.filter((item) => item.featured);
}
