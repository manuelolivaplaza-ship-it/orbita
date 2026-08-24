// Tienda textil (ecommerce-claro) — Marca de ropa de lino · contenido del sitio.
// "operacion": venta = colección publicada, arriendo = en desarrollo.
// m2 = año de la colección · anio = piezas por colección.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Colección disponible" : "En desarrollo");
export const linea = (p: { m2: number }) => `Colección ${p.m2}`;

export interface Propiedad {
  id: string;
  ref: string;
  titulo: string;
  operacion: Operacion;
  tipo: string;
  comuna: string;
  precioUF: number;
  gastosComunes: number;
  dormitorios: number;
  banos: number;
  m2: number;
  terrenoM2?: number;
  estacionamientos: number;
  anio: number;
  descripcion: string;
  fotos: string[];
  destacada?: boolean;
  coord: [number, number];
}

const media = (n: string) => `${import.meta.env.BASE_URL}media/${n}`;

export const marca = {
  nombre: "Lino",
  sufijo: "Textil",
  kicker: "Ropa de lino hecha en Chile · envíos a todo el país",
  claim: ["Pocas prendas.", "Bien hechas.", "Para años."],
  sub: "Marca chilena de ropa de lino con producción limitada y precios sin intermediarios: cortamos lo que vendemos. Colecciones de pocas piezas, talleres locales y una política de devolución que no da miedo.",
  ctaPrimario: { texto: "Ver colección", a: "/coleccion" },
  ctaSecundario: { texto: "Guía de tallas", a: "/servicios" },
  telefono: "+56 9 8877 2233",
  telefonoHref: "tel:+56988772233",
  correo: "hola@linotextil.cl",
  direccion: "Taller y showroom: Bellavista 0450 · Santiago",
  horario: "Showroom con cita · tienda online siempre abierta",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la marca.",
};

export const etiquetas = {
  catalogo: "Colecciones",
  catalogoUno: "Pieza",
  captacion: "Guía de compra",
  nosotros: "La marca",
  fichaPlural: "piezas",
};

export const rutas = {
  inicio: "/",
  catalogo: "/coleccion",
  ficha: "/pieza",
  captacion: "/guia",
  nosotros: "/marca",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Colección", a: "/coleccion" },
  { texto: "Guía de compra", a: "/guia" },
  { texto: "La marca", a: "/marca" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Lino europeo", v: "prelavado" },
  { k: "Producción", v: "limitada, local" },
  { k: "Devolución", v: "30 días sin preguntas" },
];

export const comunas = ["Santiago", "Valparaíso", "Viña del Mar", "Concepción", "La Serena", "Todo Chile"];

export const cita = {
  texto:
    "Compré la camisa blanca hace tres veranos. Sigue siendo mi camisa favorita y ya le compré dos iguales.",
  autor: "Josefa Unda · clienta desde 2023",
};

export const propiedades: Propiedad[] = [
  {
    id: "camisa-clasica",
    ref: "LT·01",
    titulo: "Camisa clásica de lino",
    operacion: "venta",
    tipo: "Camisas",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 6,
    descripcion:
      "La prenda que fundó la marca: lino europeo prelavado, costura francesa y botones de madreperla. Se arruga como corresponde y mejora con cada lavada. Seis colores permanentes.",
    fotos: [media("producto-textil.png"), media("lino-detalle.png"), media("tienda-interior.png")],
    destacada: true,
    coord: [-33.435, -70.621],
  },
  {
    id: "pantalon-lino",
    ref: "LT·02",
    titulo: "Pantalón recto de verano",
    operacion: "venta",
    tipo: "Pantalones",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 5,
    descripcion:
      "Tiro medio, pierna recta y bolsillos profundos de verdad. El pantalón que va de la playa a la cena sin pasar por casa a cambiarse.",
    fotos: [media("lino-detalle.png"), media("producto-textil.png"), media("tienda-interior.png")],
    destacada: true,
    coord: [-33.435, -70.622],
  },
  {
    id: "vestido-camisero",
    ref: "LT·03",
    titulo: "Vestido camisero largo",
    operacion: "venta",
    tipo: "Vestidos",
    comuna: "Santiago",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 4,
    descripcion:
      "El vestido que resuelve el verano: silueta camisera, bolsillos laterales y un botón decorativo que es funcional. Talla única real hasta M o S según color.",
    fotos: [media("tienda-interior.png"), media("producto-textil.png"), media("lino-detalle.png")],
    destacada: true,
    coord: [-33.434, -70.621],
  },
  {
    id: "overshirt",
    ref: "LT·04",
    titulo: "Overshirt de entretiempo",
    operacion: "venta",
    tipo: "Chaquetas",
    comuna: "Valparaíso",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 5,
    descripcion:
      "Camisa-chaqueta de lino pesado para la tarde que refresca: dos bolsillos al pecho, botones de corozo y corte unisex. La prenda más robada entre parejas.",
    fotos: [media("producto-textil.png"), media("tienda-interior.png")],
    coord: [-33.046, -71.62],
  },
  {
    id: "conjunto-sabana",
    ref: "LT·05",
    titulo: "Conjunto de sábana",
    operacion: "arriendo",
    tipo: "Conjuntos",
    comuna: "Santiago",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2025,
    estacionamientos: 0,
    anio: 6,
    descripcion:
      "Camisa amplia y pantalón elástico del mismo lino: el conjunto de viaje que se ve arreglado después de ocho horas de avión. En desarrollo para primavera 2026.",
    fotos: [media("lino-detalle.png"), media("tienda-interior.png")],
    coord: [-33.435, -70.62],
  },
  {
    id: "accesorios-lino",
    ref: "LT·06",
    titulo: "Accesorios: bandanas y totebags",
    operacion: "venta",
    tipo: "Accesorios",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 3,
    descripcion:
      "Retazos nobles de la producción: bandanas de lino y totebags reforzados. Nada se bota; lo que sobra se transforma.",
    fotos: [media("tienda-interior.png"), media("lino-detalle.png")],
    coord: [-33.435, -70.623],
  },
];

export const cifras = [
  { valor: 8, sufijo: "", etiqueta: "Años de marca", detalle: "Fundada en 2017" },
  { valor: 14000, sufijo: "+", etiqueta: "Prendas enviadas", detalle: "A todo Chile" },
  { valor: 92, sufijo: "%", etiqueta: "Recompra", detalle: "Clientes que vuelven por otra pieza" },
  { valor: 30, sufijo: " días", etiqueta: "Devolución", detalle: "Sin preguntas incómodas" },
];

export const cartera = [
  { n: "01", titulo: "Colección permanente", texto: "Las piezas que nunca faltan: camisas, pantalones y vestidos en seis colores.", pie: "Desde $39.000" },
  { n: "02", titulo: "Cápsulas de temporada", texto: "Dos cápsulas al año con piezas limitadas numeradas.", pie: "Ediciones limitadas" },
  { n: "03", titulo: "Hecho a medida", texto: "Tu medida exacta en las piezas permanentes, entregado en tres semanas.", pie: "Desde $69.000" },
  { n: "04", titulo: "Showroom con cita", texto: "Prueba y compra en Bellavista, con café y sin presión de vendedor.", pie: "Martes a viernes" },
];

export const metodo = [
  { n: "01", titulo: "Lino europeo prelavado", texto: "Compra directa a molinos europeos y prelavado antes de cortar: la prenda no te encoge en la primera lavada." },
  { n: "02", titulo: "Cortamos lo que vendemos", texto: "Producción por tandas pequeñas según demanda real. Sin liquidaciones porque no hay sobreproducción." },
  { n: "03", titulo: "Talleres locales pagados justos", texto: "Corte y confección en talleres de Santiago con tarifa pública. Saber quién hizo tu ropa importa." },
  { n: "04", titulo: "Devolución sin drama", texto: "30 días, etiqueta de despacho incluida y reembolso real. Si no te queda, vuelve sin interrogatorio." },
];

export const equipo = [
  { iniciales: "MT", nombre: "Magdalena Torres", cargo: "Diseñadora · Fundadora", detalle: "Diseñadora textil PUC, ex indumentaria de teatro." },
  { iniciales: "CB", nombre: "Constanza Bravo", cargo: "Producción", detalle: "Coordina los talleres y los plazos reales." },
  { iniciales: "AV", nombre: "Antonia Vergara", cargo: "Tienda y atención", detalle: "Contesta el WhatsApp de tallas personalmente." },
  { iniciales: "RL", nombre: "Rodrigo Lillo", cargo: "Logística", detalle: "Que el paquete llegue cuando dijimos." },
];

export const testimonios = [
  { texto: "Pedí dos tallas para decidir y devolví una sin pagar nada extra. Así se compra ropa online.", autor: "J. Unda", detalle: "Clienta · Camisa clásica" },
  { texto: "El overshirt me acompañó todo el otoño, la playa y tres reuniones. Vale cada peso.", autor: "F. Aravena", detalle: "Cliente · Overshirt" },
  { texto: "Me hice un pantalón a medida para mi altura imposible. Tres semanas y perfecto.", autor: "N. Cárdenas", detalle: "Cliente · A medida" },
];

export const faq = [
  { p: "¿El lino se arruga mucho?", r: "Se arruga como el lino debe: con elegancia. Es parte del material, no un defecto. Si buscas planchado eterno, el poliéster está en otra tienda." },
  { p: "¿Cómo sé mi talla?", r: "Cada pieza tiene su tabla de medidas reales (no de catálogo) y Antonia contesta el WhatsApp con recomendación personal. Devolución de 30 días si nos equivocamos." },
  { p: "¿Hacen envíos a regiones?", r: "Todo Chile en 2 a 5 días hábiles. Envío gratis sobre $60.000 y devolución con etiqueta incluida." },
  { p: "¿Por qué algunas piezas se agotan?", r: "Porque producimos por tandas chicas según demanda real. Las piezas permanentes se repone cada 4 a 6 semanas; las cápsulas no se repiten." },
  { p: "¿Visito el showroom?", r: "Con cita, martes a viernes en Bellavista. Pruebas sin presión, café decente y la fábrica visible detrás." },
];

export const valoresGestion = {
  intro: "Precios sin intermediarios, dichos claros.",
  sub: "Del molino europeo a tu clóset sin cadena de distribuidores. Cada precio incluye tela, taller local y margen justo.",
  filas: [
    { tipo: "Camisas", detalle: "Seis colores permanentes", venta: "$39.000–49.000", arriendo: "tallas XS–XXL" },
    { tipo: "Pantalones y vestidos", detalle: "Colección permanente", venta: "$45.000–59.000", arriendo: "por pieza" },
    { tipo: "Hecho a medida", detalle: "Tu medida, tres semanas", venta: "desde $69.000", arriendo: "piezas permanentes" },
    { tipo: "Envío y devolución", detalle: "Sobre $60.000", venta: "Gratis", arriendo: "30 días sin preguntas" },
  ],
};

// Paleta del hero 3D — día natural, acento verde oliva.
export const tema3d = {
  noche: false,
  fondo: "#faf9f6",
  niebla: "#faf9f6",
  torre: "#ffffff",
  torreTecho: "#e8e6df",
  ventanas: "#adb894",
  ventanasAlt: "#d1d7c2",
  acento: "#4a5a3e",
  suelo: "#f0eee7",
  estrellas: "#7c7f70",
};

export const textoVender = {
  kicker: "Guía de compra",
  titulo: "Comprar ropa online sin miedo.",
  sub: "Medidas reales por pieza, recomendación personal por WhatsApp y 30 días de devolución con etiqueta incluida. Si no te queda, vuelve sin interrogatorio.",
  beneficios: [
    { titulo: "Medidas reales", texto: "Tabla por pieza con centímetros de verdad, no tallas de catálogo." },
    { titulo: "Consejo personal", texto: "Antonia contesta tu duda de talla por WhatsApp, con su nombre." },
    { titulo: "Devolución fácil", texto: "30 días, etiqueta de despacho incluida, reembolso real." },
    { titulo: "Producción local", texto: "Talleres de Santiago con tarifa pública. Sabes quién hizo tu ropa." },
  ],
};

export const textoNosotros = {
  kicker: "La marca",
  titulo: "Pocas prendas, bien hechas, para años.",
  parrafo1:
    "Lino Textil partió en 2017 con seis camisas y una regla: cortar solo lo que se vende. Ocho años después seguimos sin liquidaciones, porque no hay sobreproducción de qué arrepentirse.",
  parrafo2:
    "Compramos lino europeo directo, cosimos en talleres de Santiago con tarifas públicas y respondemos cada mensaje de talla con nombre propio. La moda lenta no es un eslogan: es una cadena de decisiones aburridas tomadas bien.",
  valores: [
    { titulo: "Producir lo necesario", texto: "Tandas pequeñas según demanda. Sin liquidaciones porque no hay exceso." },
    { titulo: "Materiales que duran", texto: "Lino europeo prelavado y costuras que sobreviven al verano completo." },
    { titulo: "Cadena transparente", texto: "Molinos, talleres y tarifas visibles. Saber quién hizo tu ropa importa." },
  ],
};
