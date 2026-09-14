// Cordillera Software — Casa de software · contenido del sitio.
// "operacion": venta = caso publicado, arriendo = en desarrollo.
// m2 = año del caso · anio = semanas de proyecto.

export type Operacion = "venta" | "arriendo";

export const op = (o: Operacion) => (o === "venta" ? "Caso publicado" : "En desarrollo");
export const linea = (p: { m2: number }) => `Año ${p.m2}`;

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
  nombre: "Cordillera",
  sufijo: "Software",
  kicker: "Desarrollo de software a medida · Santiago de Chile",
  claim: ["Software a medida", "que la gente", "usa de verdad."],
  sub: "Casa de software que construye sistemas a medida con código mantenible y entregas cada dos semanas: usted ve el avance funcionando, no una barra de progreso. Equipos senior, proyectos acotados.",
  ctaPrimario: { texto: "Ver casos", a: "/casos" },
  ctaSecundario: { texto: "Cotizar proyecto", a: "/servicios" },
  telefono: "+56 2 2770 3344",
  telefonoHref: "tel:+56227703344",
  correo: "proyectos@cordillera.software",
  direccion: "Av. Providencia 2145, of. 603 · Santiago",
  horario: "Lunes a viernes 9:00–18:30",
  pie: "Propuesta de rediseño preparada por Órbita. Sitio demostrativo: textos, cifras y datos de contacto son de ejemplo y serán reemplazados por los de la empresa.",
};

export const etiquetas = {
  catalogo: "Casos",
  catalogoUno: "Caso",
  captacion: "Servicios",
  nosotros: "La empresa",
  fichaPlural: "casos",
};

export const rutas = {
  inicio: "/",
  catalogo: "/casos",
  ficha: "/caso",
  captacion: "/servicios",
  nosotros: "/empresa",
  contacto: "/contacto",
};

export const nav = [
  { texto: "Casos", a: "/casos" },
  { texto: "Servicios", a: "/servicios" },
  { texto: "La empresa", a: "/empresa" },
  { texto: "Contacto", a: "/contacto" },
];

export const heroHud = [
  { k: "Entregas", v: "cada 2 semanas" },
  { k: "Equipo", v: "senior, sin rotación" },
  { k: "Código", v: "suyo, documentado" },
];

export const comunas = ["Santiago", "Providencia", "Las Condes", "Ñuñoa", "Valdivia", "Remoto"];

export const cita = {
  texto:
    "Cada demo quincenal se podía tocar. Ni un PowerPoint: el sistema corriendo desde la semana dos.",
  autor: "Andrés Riera · gerente de operaciones, minera de servicio",
};

export const propiedades: Propiedad[] = [
  {
    id: "sistema-turnos",
    ref: "CS·01",
    titulo: "Sistema de turnos para 3.000 operarios",
    operacion: "venta",
    tipo: "Sistema a medida",
    comuna: "Santiago",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 28,
    descripcion:
      "Planificación de turnos mineros que antes vivía en 14 planillas de Excel. Sistema web con reglas de descanso, integración con reloj biométrico y app de cambio de turno. Resultado: 11 horas de planificación semanales a 40 minutos.",
    fotos: [media("bloques.png"), media("capas.png"), media("pasillo.png")],
    destacada: true,
    coord: [-33.44, -70.653],
  },
  {
    id: "portal-autogestion",
    ref: "CS·02",
    titulo: "Portal de autogestión para isapre regional",
    operacion: "venta",
    tipo: "Web",
    comuna: "Providencia",
    precioUF: 2024,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2024,
    estacionamientos: 0,
    anio: 22,
    descripcion:
      "Los afiliados llamaban por todo. Portal con bonificaciones, reembolsos y horas médicas en línea, integrado al core asegurador. Resultado: 31% de las llamadas migradas a autogestión en el primer trimestre.",
    fotos: [media("capas.png"), media("pasillo.png"), media("bloques.png")],
    destacada: true,
    coord: [-33.428, -70.612],
  },
  {
    id: "logistica-ultima-milla",
    ref: "CS·03",
    titulo: "Logística de última milla con prueba de foto",
    operacion: "venta",
    tipo: "Sistema a medida",
    comuna: "Ñuñoa",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 24,
    descripcion:
      "Distribuidora con repartos a papel. Sistema de ruteo, app de reparto con foto de entrega y seguimiento para el cliente final. Resultado: reclamos de 'no llegó' reducidos 74%.",
    fotos: [media("pasillo.png"), media("bloques.png")],
    destacada: true,
    coord: [-33.463, -70.611],
  },
  {
    id: "integracion-erp",
    ref: "CS·04",
    titulo: "Integración de ERP con 5 sistemas satélites",
    operacion: "venta",
    tipo: "Integración",
    comuna: "Las Condes",
    precioUF: 2023,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2023,
    estacionamientos: 0,
    anio: 16,
    descripcion:
      "Cada área tenía su sistema y nadie tenía la verdad. Bus de integración con el ERP como única fuente, reportes que se arman solos. Resultado: cierre contable de 9 días a 2.",
    fotos: [media("capas.png"), media("bloques.png")],
    coord: [-33.411, -70.561],
  },
  {
    id: "app-field-service",
    ref: "CS·05",
    titulo: "App de terreno para técnicos de campo",
    operacion: "arriendo",
    tipo: "Mobile",
    comuna: "Santiago",
    precioUF: 2025,
    gastosComunes: 0,
    dormitorios: 0,
    banos: 0,
    m2: 2025,
    estacionamientos: 0,
    anio: 20,
    descripcion:
      "Técnicos con órdenes impresas y signal perdido. App offline-first con orden de trabajo, firma digital y stock del furgón. En desarrollo: piloto con 40 técnicos en marzo.",
    fotos: [media("pasillo.png"), media("capas.png")],
    coord: [-33.44, -70.65],
  },
];

export const cifras = [
  { valor: 12, sufijo: "", etiqueta: "Años construyendo", detalle: "Desde 2013" },
  { valor: 74, sufijo: "+", etiqueta: "Sistemas entregados", detalle: "En producción y mantenidos" },
  { valor: 2, sufijo: " sem", etiqueta: "Entre entregas", detalle: "Demo funcionando, siempre" },
  { valor: 100, sufijo: "%", etiqueta: "Código entregado", detalle: "Con documentación y repositorio suyo" },
];

export const cartera = [
  { n: "01", titulo: "Sistemas a medida", texto: "El software que su operación necesita y el mercado no vende: turnos, logística, terreno.", pie: "Desde UF 60" },
  { n: "02", titulo: "Webs y portales", texto: "Autogestión, extranet y plataformas con integración al core de su empresa.", pie: "Desde UF 45" },
  { n: "03", titulo: "Integraciones", texto: "Que el ERP hable con todo y el reporte se arme solo.", pie: "Desde UF 25" },
  { n: "04", titulo: "Evolutivo y mantención", texto: "Sistemas vivos: horas mensuales de mejora sobre lo construido.", pie: "Planes desde 20 h/mes" },
];

export const metodo = [
  { n: "01", titulo: "Descubrimiento de 2 semanas", texto: "Procesos actuales observados en terreno — no en un cuestionario. Sale el alcance escrito con lo que no haremos también." },
  { n: "02", titulo: "Entregas cada 2 semanas", texto: "Demo funcionando desde la semana dos: usted toca el avance, redirige a tiempo y sin costo de discusión." },
  { n: "03", titulo: "Equipo senior sin rotación", texto: "Las mismas personas del primer día al último. El conocimiento del proyecto no se pierde en una rotación." },
  { n: "04", titulo: "Entrega real", texto: "Código suyo en su repositorio, documentación escrita y capacitación grabada. Sin rehenes." },
];

export const equipo = [
  { iniciales: "PC", nombre: "Pablo Contreras", cargo: "Ingeniero civil informático · Fundador", detalle: "12 años de sistemas a medida para minería y salud." },
  { iniciales: "MA", nombre: "Marcela Aburto", cargo: "Tech lead", detalle: "Arquitectura y equipos de desarrollo." },
  { iniciales: "JF", nombre: "Joaquín Farias", cargo: "Fullstack senior", detalle: "Webs y portales de autogestión." },
  { iniciales: "SO", nombre: "Sofía Ossa", cargo: "QA y análisis", detalle: "La que rompe el sistema antes que sus usuarios." },
];

export const testimonios = [
  { texto: "La demo quincenal terminó con la eterna discusión de 'no es lo que pedí'. Se toca, se corrige, se avanza.", autor: "A. Riera", detalle: "Cliente · Turnos" },
  { texto: "El cierre contable pasó de una semana a dos días. El bus de integración se pagó solo.", autor: "Grupo Alimentos", detalle: "Cliente · Integración" },
  { texto: "Se acabó el código rehén: repositorio nuestro y documentación real. Pocas empresas lo hacen.", autor: "M. Herreros", detalle: "Cliente · Portal" },
];

export const faq = [
  { p: "¿Cuánto cuesta un sistema a medida?", r: "Los proyectos parten en UF 60 con alcance cerrado tras el descubrimiento. Le entregamos fijo el precio del descubrimiento (2 semanas) y un rango realista del total antes de partir." },
  { p: "¿Qué pasa si ya tengo un sistema a medias?", r: "Hacemos una auditoría de código de una semana: se lo dejamos terminado o le decimos con evidencia que mejor partir de cero. Ambas respuestas valen su costo." },
  { p: "¿El código es mío?", r: "Suyo, en su repositorio, con documentación y capacitación grabada. Si mañana cambia de empresa, el sistema sigue suyo." },
  { p: "¿Dan mantención?", r: "Sí, planes desde 20 horas mensuales con los mismos desarrolladores que construyeron su sistema. El conocimiento no se pierde." },
  { p: "¿Trabajan remoto?", r: "El equipo es mixto con presencialidad en Santiago. Los descubrimientos son en terreno siempre: los procesos no viven en videollamadas." },
];

export const valoresGestion = {
  intro: "Precios que se pueden auditar.",
  sub: "El descubrimiento se cota fijo y el proyecto con rango realista. Las horas de evolutivo se reportan con detalle de tarea.",
  filas: [
    { tipo: "Descubrimiento", detalle: "2 semanas con alcance escrito", venta: "UF 8–12", arriendo: "se descuenta" },
    { tipo: "Sistema a medida", detalle: "Proyecto completo con entregas", venta: "UF 60–250", arriendo: "por proyecto" },
    { tipo: "Portal web", detalle: "Autogestión + integración", venta: "UF 45–90", arriendo: "por proyecto" },
    { tipo: "Mantención evolutiva", detalle: "Horas mensuales con detalle", venta: "desde 20 h/mes", arriendo: "equipo original" },
  ],
};

// Paleta del hero 3D — día tecnológico, acento azul.
export const tema3d = {
  noche: false,
  fondo: "#fafaf9",
  niebla: "#fafaf9",
  torre: "#ffffff",
  torreTecho: "#e3e5ea",
  ventanas: "#9db1d9",
  ventanasAlt: "#c6d2e8",
  acento: "#1d4ed8",
  suelo: "#eeeef2",
  estrellas: "#64748b",
};

export const textoVender = {
  kicker: "Servicios",
  titulo: "Primero dos semanas de la verdad. Después el sistema.",
  sub: "Postule su proyecto: descubrimiento en terreno, alcance por escrito con lo que no haremos, y entregas que se tocan cada dos semanas.",
  beneficios: [
    { titulo: "Demo desde la semana 2", texto: "El avance se toca, no se presenta. Las correcciones se hacen a tiempo." },
    { titulo: "Equipo sin rotación", texto: "Las mismas personas de principio a fin. El conocimiento no se pierde." },
    { titulo: "Código suyo", texto: "Repositorio propio, documentación y capacitación. Sin rehenes." },
    { titulo: "Alcance honesto", texto: "Lo que no haremos va escrito en la propuesta. Sorpresas no." },
  ],
};

export const textoNosotros = {
  kicker: "La empresa",
  titulo: "Construido para durar, no para facturar horas.",
  parrafo1:
    "Cordillera Software nació en 2013 hartos de dos vicios del rubro: proyectos eternos y código rehén. Nuestro modelo — entregas quincenales y código del cliente — ataca los dos.",
  parrafo2:
    "Somos un equipo senior chico que toma pocos proyectos por año y los termina. El 80% de nuestros ingresos viene de sistemas que siguen vivos en producción con mantención: esa es la métrica que nos importa.",
  valores: [
    { titulo: "Entregar temprano", texto: "Demo quincenal siempre. El software que no se toca no existe." },
    { titulo: "Código sin rehenes", texto: "Repositorio del cliente, documentación y capacitación. Cambiar de empresa no cambia su sistema." },
    { titulo: "Pocos proyectos", texto: "Los necesarios para mantener el equipo sin rotación. La continuidad es parte de la calidad." },
  ],
};

// Hero de portada — patrón original del sitio (split | fullbleed | tipografico).
export const hero = { tipo: "split", foto: "pasillo.png", marco: false, caption: "" };
