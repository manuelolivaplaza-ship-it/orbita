/**
 * CATALOGO DE PRODUCTOS - MINIMAYORISTA
 * 
 * 📝 NOTA IMPORTANTE PARA EL ADMINISTRADOR:
 * Este archivo es el ÚNICO lugar centralizado para editar, agregar o modificar
 * los productos, precios, categorías y ofertas de MiniMayorista.
 * 
 * - Si `precio` es 0, el sitio mostrará "Consultar precio por WhatsApp".
 * - Si `destacado` es true, el producto aparecerá en la sección principal de Ofertas / Destacados.
 * - `badge` puede ser "-15%", "Oferta Mayorista", "Más Vendido", "Nuevo", etc.
 */

export interface Producto {
  id: string;
  nombre: string;
  categoria: CategoriaTipo;
  precio: number; // En pesos chilenos (CLP). 0 = Consultar precio
  precioAnterior?: number; // Para mostrar descuento
  unidad: string; // ej: "1 kg", "Bolsa 3L", "Pack 6u", "Unidad"
  imagen: string;
  badge?: string;
  destacado?: boolean;
  stock?: boolean;
  descripcion?: string;
}

export type CategoriaTipo =
  | "Congelados"
  | "Pollo"
  | "Vacuno"
  | "Pescados"
  | "Mariscos"
  | "Frutas"
  | "Verduras"
  | "Cerdo"
  | "Bebidas"
  | "Lácteos"
  | "Abarrotes"
  | "Panadería"
  | "Queso"
  | "Dulces"
  | "Snacks"
  | "Vegano"
  | "Higiene"
  | "Aseo"
  | "Ofertas";

export interface CategoriaInfo {
  id: CategoriaTipo;
  nombre: string;
  descripcion: string;
  icono: string; // SVG identifier or path
}

export const CATEGORIAS: CategoriaInfo[] = [
  { id: "Ofertas", nombre: "Ofertas del Mes", descripcion: "Precios especiales por compra al por mayor", icono: "tag" },
  { id: "Pollo", nombre: "Pollo Fresco y Congelado", descripcion: "Filetitos, pechugas y trutros al costo", icono: "drumstick" },
  { id: "Vacuno", nombre: "Carnes de Vacuno", descripcion: "Lomo vetado, lomo liso, carne molida y más", icono: "beef" },
  { id: "Cerdo", nombre: "Cortes de Cerdo", descripcion: "Costillar, chuletas y pulpa de cerdo", icono: "pig" },
  { id: "Congelados", nombre: "Congelados", descripcion: "Verduras, papas prefritas, hamburguesas", icono: "snowflake" },
  { id: "Pescados", nombre: "Pescados", descripcion: "Reineta, salmón, merluza fileteada", icono: "fish" },
  { id: "Mariscos", nombre: "Mariscos", descripcion: "Surtido de mariscos, choritos, machas", icono: "shell" },
  { id: "Frutas", nombre: "Frutas Frescas", descripcion: "Paltas hass, manzanas, plátanos, cítricos", icono: "apple" },
  { id: "Verduras", nombre: "Verduras Seleccionadas", descripcion: "Papas, cebollas, tomates, lechugas", icono: "carrot" },
  { id: "Abarrotes", nombre: "Abarrotes y Despensa", descripcion: "Arroz, fideos, aceites, conservas y salsas", icono: "box" },
  { id: "Lácteos", nombre: "Lácteos y Huevos", descripcion: "Leche, yogures, crema, huevos frescos", icono: "milk" },
  { id: "Queso", nombre: "Quesos y Fiambrería", descripcion: "Queso Gouda, mantecoso, jamón y cecinas", icono: "cheese" },
  { id: "Bebidas", nombre: "Bebidas y Jugos", descripcion: "Gaseosas, aguas, jugos naturales y energizantes", icono: "cup" },
  { id: "Panadería", nombre: "Panadería", descripcion: "Pan molde, hallullas, marraquetas, tortillas", icono: "bread" },
  { id: "Snacks", nombre: "Snacks y Frutos Secos", descripcion: "Papas fritas, maní, frutos secos al por mayor", icono: "cookie" },
  { id: "Dulces", nombre: "Dulces y Chocolates", descripcion: "Chocolates, galletas y golosinas", icono: "candy" },
  { id: "Vegano", nombre: "Productos Veganos", descripcion: "Hamburguesas vegetales, leches de almendra", icono: "leaf" },
  { id: "Higiene", nombre: "Higiene Personal", descripcion: "Jabones, champú, desodorantes, pasta dental", icono: "sparkles" },
  { id: "Aseo", nombre: "Aseo y Limpieza", descripcion: "Detergentes, cloros, lavaloza y suavizantes", icono: "droplets" },
];

export const PRODUCTOS: Producto[] = [
  {
    id: "prod-1",
    nombre: "Filetitos de Pollo Congelados (Bolsa 1 kg)",
    categoria: "Pollo",
    precio: 4990,
    precioAnterior: 5990,
    unidad: "Bolsa 1 kg",
    imagen: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80",
    badge: "-17% OFERTA",
    destacado: true,
    stock: true,
    descripcion: "Filetitos de pechuga de pollo deshuesados, congelados individualmente IQF. Ideal para colaciones y casino."
  },
  {
    id: "prod-2",
    nombre: "Lomo Vetado de Vacuno Importado",
    categoria: "Vacuno",
    precio: 9990,
    precioAnterior: 11990,
    unidad: "1 kg",
    imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80",
    badge: "MÁS VENDIDO",
    destacado: true,
    stock: true,
    descripcion: "Corte premium jugoso con marmoleado ideal para parrilla o plancha."
  },
  {
    id: "prod-3",
    nombre: "Aceite Vegetal Maravilla 1 Litro",
    categoria: "Abarrotes",
    precio: 1890,
    precioAnterior: 2290,
    unidad: "Unidad 1L",
    imagen: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    badge: "PRECIO COSTO",
    destacado: true,
    stock: true,
    descripcion: "Aceite 100% puro de maravilla, ideal para todo tipo de preparaciones de cocina."
  },
  {
    id: "prod-4",
    nombre: "Queso Gouda Laminado Colun / Soprole",
    categoria: "Queso",
    precio: 3490,
    precioAnterior: 4190,
    unidad: "Envase 500g",
    imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80",
    badge: "OFERTA",
    destacado: true,
    stock: true,
    descripcion: "Queso mantecoso laminado de primera calidad, envasado al vacío."
  },
  {
    id: "prod-5",
    nombre: "Detergente Líquido Multiuso 3 Litros",
    categoria: "Aseo",
    precio: 3990,
    precioAnterior: 5290,
    unidad: "Bidón 3L",
    imagen: "https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?auto=format&fit=crop&w=600&q=80",
    badge: "-25% AHORRO",
    destacado: true,
    stock: true,
    descripcion: "Fórmula concentrada para ropa blanca y de color. Alto rendimiento para el hogar o negocio."
  },
  {
    id: "prod-6",
    nombre: "Arroz Grado 1 Largo Ancho (Bolsa 1 kg)",
    categoria: "Abarrotes",
    precio: 1190,
    precioAnterior: 1490,
    unidad: "Bolsa 1 kg",
    imagen: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    badge: "BÁSICO MAYORISTA",
    destacado: true,
    stock: true,
    descripcion: "Arroz de grano entero, selección especial de cocción uniforme."
  },
  {
    id: "prod-7",
    nombre: "Palta Hass Chilena Primera Selección",
    categoria: "Frutas",
    precio: 3890,
    precioAnterior: 4590,
    unidad: "1 kg",
    imagen: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    badge: "FRESCO DIRECTO",
    destacado: true,
    stock: true,
    descripcion: "Palta hass cremosa, maduración perfecta para consumo inmediato o semanal."
  },
  {
    id: "prod-8",
    nombre: "Filete de Salmón Chileno Congelado",
    categoria: "Pescados",
    precio: 8990,
    precioAnterior: 10990,
    unidad: "500g",
    imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    badge: "CALIDAD PREMIUM",
    destacado: true,
    stock: true,
    descripcion: "Porción de salmón del sur de Chile con piel, empacada al vacío."
  },
  {
    id: "prod-9",
    nombre: "Papas Prefritas Corte Tradicional",
    categoria: "Congelados",
    precio: 2990,
    precioAnterior: 3690,
    unidad: "Bolsa 2.5 kg",
    imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    badge: "FORMATO FAMILIAR",
    destacado: true,
    stock: true,
    descripcion: "Papas bastón congeladas de cocción rápida en freidora o horno."
  },
  {
    id: "prod-10",
    nombre: "Bebida Gaseosa Sabor Original 3 Litros",
    categoria: "Bebidas",
    precio: 2290,
    precioAnterior: 2690,
    unidad: "Botella 3L",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    badge: "OFERTA",
    destacado: true,
    stock: true,
    descripcion: "Formato familiar retornable o desechable para compartir."
  },
  {
    id: "prod-11",
    nombre: "Leche Entera Larga Vida 1L (Pack 12u)",
    categoria: "Lácteos",
    precio: 1090,
    precioAnterior: 1290,
    unidad: "Tetra 1L",
    imagen: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    badge: "PACK MAYORISTA",
    destacado: true,
    stock: true,
    descripcion: "Leche fluida 100% natural, fortificada con calcio y vitaminas A y D."
  },
  {
    id: "prod-12",
    nombre: "Hamburguesas Veganas de NotCo / Plant-Based",
    categoria: "Vegano",
    precio: 3490,
    precioAnterior: 4290,
    unidad: "Pack 4u",
    imagen: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80",
    badge: "PLANT-BASED",
    destacado: true,
    stock: true,
    descripcion: "Sabor y textura idéntica a la carne tradicional, elaborada con proteínas vegetales."
  },
  {
    id: "prod-13",
    nombre: "Costillar de Cerdo Aliñado Premium",
    categoria: "Cerdo",
    precio: 6990,
    precioAnterior: 7990,
    unidad: "1 kg",
    imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    badge: "PARRILLERO",
    destacado: false,
    stock: true,
    descripcion: "Costillar tierno aliñado listo para el horno o parrilla."
  },
  {
    id: "prod-14",
    nombre: "Choritos en Su Jugo y Surtido de Mariscos",
    categoria: "Mariscos",
    precio: 2490,
    precioAnterior: 2990,
    unidad: "Bolsa 500g",
    imagen: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=600&q=80",
    badge: "SURTIDO",
    destacado: false,
    stock: true,
    descripcion: "Mariscos limpios y cocidos IQF congelados para mariscales y paila marina."
  },
  {
    id: "prod-15",
    nombre: "Tomate Larga Vida Chileno",
    categoria: "Verduras",
    precio: 1290,
    precioAnterior: 1590,
    unidad: "1 kg",
    imagen: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    badge: "FRESCO",
    destacado: false,
    stock: true,
    descripcion: "Tomates limpios, firmes y seleccionados a mano diariamente."
  },
  {
    id: "prod-16",
    nombre: "Pan Molde Blanco Familiar 500g",
    categoria: "Panadería",
    precio: 1690,
    precioAnterior: 1990,
    unidad: "Bolsa 500g",
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    badge: "DIARIO",
    destacado: false,
    stock: true,
    descripcion: "Pan esponjoso, ideal para desayunos y sándwiches."
  },
  {
    id: "prod-17",
    nombre: "Papas Fritas Saladas Formato Mayorista",
    categoria: "Snacks",
    precio: 1990,
    precioAnterior: 2390,
    unidad: "Bolsa 250g",
    imagen: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    badge: "CRUJIENTE",
    destacado: false,
    stock: true,
    descripcion: "Papas crocantes saladas en su punto ideal."
  },
  {
    id: "prod-18",
    nombre: "Chocolates y Galletas Variadas Pack Cumpleaños",
    categoria: "Dulces",
    precio: 3290,
    precioAnterior: 3990,
    unidad: "Pack 12u",
    imagen: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80",
    badge: "PACK",
    destacado: false,
    stock: true,
    descripcion: "Surtido de dulces tradicionales chilenos para colación y eventos."
  },
  {
    id: "prod-19",
    nombre: "Jabón Líquido Antibacterial con Dosificador",
    categoria: "Higiene",
    precio: 1490,
    precioAnterior: 1890,
    unidad: "Frasco 500ml",
    imagen: "https://images.unsplash.com/photo-1607006482172-3ba512143160?auto=format&fit=crop&w=600&q=80",
    badge: "CUIDADO",
    destacado: false,
    stock: true,
    descripcion: "Protección efectiva y humectación suave para las manos."
  },
  {
    id: "prod-20",
    nombre: "Carne Picada Especial Vacuno (Consulta Mayorista)",
    categoria: "Vacuno",
    precio: 0, // 0 indica "Ver precio en WhatsApp" según especificación
    unidad: "Consultar por kg",
    imagen: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80",
    badge: "PRECIO MAYORISTA",
    destacado: false,
    stock: true,
    descripcion: "Formato especial por volumen para emprendimientos de gastronomía y banquetería."
  }
];

export const SUCURSALES = [
  {
    id: "suc-1",
    comuna: "La Florida",
    nombre: "Sucursal Del Prado",
    direccion: "Del Prado # 1864, La Florida",
    horarioSemana: "L-V 10:00 - 21:00",
    horarioSabado: "Sáb 10:00 - 18:00",
    horarioDomingo: "Cerrado",
    telefono: "+56 9 2038 7991",
    mapsUrl: "https://maps.google.com/?q=Del+Prado+1864+La+Florida+Santiago",
    destacada: true
  },
  {
    id: "suc-2",
    comuna: "Peñalolén",
    nombre: "Sucursal Rotonda Quilín",
    direccion: "La Senda del Viñatero # 3467, Peñalolén (Rotonda Quilín)",
    horarioSemana: "L-V 10:00 - 21:00",
    horarioSabado: "Sáb 10:00 - 18:00",
    horarioDomingo: "Cerrado",
    telefono: "+56 9 2038 7991",
    mapsUrl: "https://maps.google.com/?q=La+Senda+del+Viñatero+3467+Peñalolén+Santiago",
    destacada: true
  },
  {
    id: "suc-3",
    comuna: "Puente Alto",
    nombre: "Sucursal Las Nieves",
    direccion: "Las Nieves Oriente # 4173, Puente Alto",
    horarioSemana: "L-V 10:00 - 21:00",
    horarioSabado: "Sáb 10:00 - 18:00",
    horarioDomingo: "Cerrado",
    telefono: "+56 9 2038 7991",
    mapsUrl: "https://maps.google.com/?q=Las+Nieves+Oriente+4173+Puente+Alto+Santiago",
    destacada: true
  },
  {
    id: "suc-4",
    comuna: "La Granja",
    nombre: "Sucursal Quebrada de Tana",
    direccion: "Quebrada de Tana # 0695, La Granja",
    horarioSemana: "L-V 10:00 - 21:00",
    horarioSabado: "Sáb 10:00 - 18:00",
    horarioDomingo: "Cerrado",
    telefono: "+56 9 2038 7991",
    mapsUrl: "https://maps.google.com/?q=Quebrada+de+Tana+0695+La+Granja+Santiago",
    destacada: true
  },
  {
    id: "suc-5",
    comuna: "La Florida",
    nombre: "Sucursal Trinidad Oriente",
    direccion: "Av. Trinidad Oriente # 825, La Florida",
    horarioSemana: "L-V 10:00 - 21:00",
    horarioSabado: "Sáb 10:00 - 18:00",
    horarioDomingo: "Dom 10:00 - 19:00",
    telefono: "+56 9 2038 7991",
    mapsUrl: "https://maps.google.com/?q=Av+Trinidad+Oriente+825+La+Florida+Santiago",
    destacada: true
  },
  {
    id: "suc-6",
    comuna: "Padre Hurtado",
    nombre: "Sucursal El Trébol",
    direccion: "El Trébol 1263, Padre Hurtado",
    horarioSemana: "L-V 10:00 - 21:00",
    horarioSabado: "Sáb 10:00 - 18:00",
    horarioDomingo: "Cerrado",
    telefono: "+56 9 2038 7991",
    mapsUrl: "https://maps.google.com/?q=El+Trébol+1263+Padre+Hurtado+Santiago",
    destacada: true
  }
];

export const COMUNAS_DESPACHO = [
  "La Florida",
  "Puente Alto",
  "Peñalolén",
  "La Granja",
  "Padre Hurtado",
  "Macul",
  "San Joaquín",
  "La Cisterna",
  "San Ramón",
  "El Bosque",
  "Maipú",
  "Santiago Centro",
  "Providencia",
  "Ñuñoa",
  "Otras comunas de Santiago"
];

export const TESTIMONIOS_EJEMPLO = [
  {
    id: "t-1",
    nombre: "Camila Sepúlveda",
    comuna: "La Florida",
    comentario: "Compré los filetitos de pollo y la abarrotería para el mes. Llegó al día siguiente sin problemas y el ahorro respecto al supermercado tradicional fue enorme.",
    calificacion: 5,
    fecha: "Hace 3 días",
    origen: "Opinión en Google Maps"
  },
  {
    id: "t-2",
    nombre: "Roberto Araya (Emprendimiento Sanguchería)",
    comuna: "Puente Alto",
    comentario: "Surtimos carne y queso para nuestro local en la sucursal de Las Nieves y también pedimos despacho cuando estamos full. Precios súper convenientes y excelente atención.",
    calificacion: 5,
    fecha: "Hace 1 semana",
    origen: "Opinión en Google Maps"
  },
  {
    id: "t-3",
    nombre: "María Teresa Morales",
    comuna: "Peñalolén",
    comentario: "Excelente servicio. Pedí por el sitio web de manera muy fácil, me confirmaron el pedido rápidamente y los productos congelados llegaron bien refrigerados.",
    calificacion: 5,
    fecha: "Hace 2 semanas",
    origen: "Opinión en Google Maps"
  }
];

export const FAQS = [
  {
    pregunta: "¿Cómo hago mi pedido en el sitio web?",
    respuesta: "Navega por nuestro catálogo, agrega los productos que necesitas a tu carrito y presiona 'Finalizar compra'. Rellena tus datos de despacho (nombre, dirección, comuna y teléfono) y confirma tu pedido. No necesitas ingresar tarjetas ni descargar ninguna aplicación."
  },
  {
    pregunta: "¿Cuánto tarda el despacho a domicilio?",
    respuesta: "Realizamos despachos en Santiago dentro de 24 a 48 horas hábiles tras la recepción y confirmación telefónica de tu pedido. Te notificamos vía WhatsApp o llamada cuando la camioneta esté en camino."
  },
  {
    pregunta: "¿Qué zonas y comunas cubren?",
    respuesta: "Cubrimos principalmente La Florida, Puente Alto, Peñalolén, La Granja, Padre Hurtado, Macul, San Joaquín, Ñuñoa, Maipú, Santiago Centro y comunas aledañas de la Región Metropolitana."
  },
  {
    pregunta: "¿Cómo pago mi pedido?",
    respuesta: "Puedes pagar de forma cómoda y segura al momento de recibir tu pedido mediante transferencia bancaria rápida o efectivo. Un ejecutivo te contactará para coordinar el método de pago exacto antes de la salida del flete."
  },
  {
    pregunta: "¿Hay un monto mínimo de pedido para despacho?",
    respuesta: "El pedido mínimo para despacho a domicilio es de $15.000 CLP. Para compras menores puedes retirar directamente en cualquiera de nuestras 6 sucursales físicas sin costo adicional."
  },
  {
    pregunta: "¿Los precios son los mismos que en las sucursales físicas?",
    respuesta: "Sí, mantenemos exactamente los mismos precios al costo y ofertas mayoristas tanto en nuestro sitio web como en nuestras 6 salas de venta físicas."
  }
];

/**
 * Formateador de moneda en pesos chilenos (CLP)
 */
export function formatCLP(monto: number): string {
  if (monto === 0) return "Consultar por WhatsApp";
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(monto);
}
