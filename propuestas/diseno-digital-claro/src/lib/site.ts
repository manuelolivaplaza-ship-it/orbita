export const site = {
  name: "Nítida",
  legal: "Nítida Estudio SpA",
  descriptor: "Estudio de diseño digital",
  tagline: "Diseño a luz norte.",
  description:
    "Estudio de diseño digital en Ñuñoa, Santiago. Identidad, producto y sitios para marcas chilenas que ya no caben en un template. Conversamos en un día hábil.",
  url: "https://nitida.cl",
  locale: "es_CL",
  rut: "77.638.412-K",
  email: "hola@nitida.cl",
  phone: "+56 9 7618 4402",
  phoneHref: "tel:+56976184402",
  whatsapp: "+56 9 7618 4402",
  whatsappHref:
    "https://wa.me/56976184402?text=Hola%20N%C3%ADtida%2C%20quiero%20conversar%20un%20encargo.",
  address: {
    street: "Avenida Italia 1420, local 2",
    city: "Santiago",
    commune: "Ñuñoa",
    country: "Chile",
    maps: "https://maps.google.com/?q=Avenida+Italia+1420+Nunoa+Santiago",
  },
  metro: "Irarrázaval · 7 min a pie",
  hours: "Lunes a jueves, 9:30 a 18:30 · Viernes, 9:30 a 14:00",
  hoursShort: "Lun–Jue 9:30–18:30 · Vie 9:30–14:00",
  founded: 2017,
  social: {
    instagram: "https://www.instagram.com/nitida.estudio",
    linkedin: "https://www.linkedin.com/company/nitida-estudio",
  },
} as const;

export const nav = [
  { href: "/trabajo", label: "Trabajo" },
  { href: "/oficio", label: "Oficio" },
  { href: "/estudio", label: "Estudio" },
] as const;

export const clients = [
  "Loica",
  "Matta 980",
  "Atalaya",
  "Pliego",
  "Caja del Maipo",
  "Mesa Larga",
  "Cooperativa Quillay",
  "Clínica Bruma",
  "Fondo Cordillera",
  "Puerto Seco",
] as const;

export const marquee = [
  "Identidad",
  "Producto",
  "Sitios",
  "Sistemas",
  "Tipo",
  "Grilla",
  "Luz norte",
  "Ñuñoa",
] as const;

export const stats = [
  { value: "2017", label: "Ñuñoa, desde entonces" },
  { value: "40", label: "Sistemas entregados" },
  { value: "6", label: "Personas en la mesa" },
  { value: "1", label: "Oficio: claridad" },
] as const;

export const principles = [
  {
    title: "Se lee a la primera.",
    body: "Si hay que explicar el diseño, el diseño falló. Preferimos la evidencia a la ocurrencia. Un sitio, una marca, una interfaz: que se entiendan de pie, en un celular, camino al metro.",
  },
  {
    title: "El sistema, no el moodboard.",
    body: "Un tablero de referencias no es un encargo. Entregamos tipo, color, grilla, tono y criterio. Lo que un equipo interno puede usar un martes de julio, no solo el día del lanzamiento.",
  },
  {
    title: "Chile no es un filtro.",
    body: "Hablamos de UF, de IVA, de regiones, de que en febrero el país se apaga. El diseño que se traduce desde Brooklyn se nota. Y se paga igual. Trabajamos con luz, habla y oficio de acá.",
  },
  {
    title: "Lo que no se defiende en una mesa, no se publica.",
    body: "Cada decisión tiene una razón que se puede decir en voz alta. Si la única defensa es “se ve contemporáneo”, volvemos a la mesa.",
  },
] as const;

export const method = [
  {
    index: "01",
    title: "Mirar",
    days: "7–12 días",
    body: "Entramos al lugar. El local, el turno, el catálogo, el Excel que nadie muestra. El diseño se decide ahí, no en un workshop de post-its.",
  },
  {
    index: "02",
    title: "Nombrar",
    days: "Semana 2",
    body: "Una frase. Un usuario con nombre. El corte que se puede entregar. Si no cabe en una hoja, todavía no está claro.",
  },
  {
    index: "03",
    title: "Componer",
    days: "El grueso",
    body: "Tipo, grilla, color, ritmo, prototipo. Cada semana, algo que se puede mirar con alguien de fuera del estudio. Las idas y vueltas son dos, y están escritas.",
  },
  {
    index: "04",
    title: "Dejar",
    days: "El final, y un poco más",
    body: "Archivos, criterio, una guía que se consulta. Nos quedamos hasta que el sistema es de ustedes. No desaparecemos el viernes del go-live.",
  },
] as const;

export const fees = [
  {
    name: "Diagnóstico",
    price: "8 UF",
    note: "Se descuenta del encargo si seguimos.",
    items: [
      "Revisión de marca, sitio y materiales",
      "Una conversación con quien decide",
      "Documento corto: qué está fallando, qué no",
      "Devolución de 45 minutos",
    ],
  },
  {
    name: "Identidad o sitio",
    price: "desde 80 UF",
    note: "Alcance cerrado, por escrito, en UF + IVA.",
    items: [
      "Brief y cronograma",
      "Sistema, no un logo suelto",
      "Dos rondas de ida y vuelta",
      "Entrega en Figma y archivos finales",
    ],
  },
  {
    name: "Producto",
    price: "desde 42 UF/mes",
    note: "Mínimo tres meses. El tramo se define en la mesa.",
    items: [
      "Diseño de producto e interfaz",
      "Sprints semanales con algo que se pulsa",
      "Criterio para el equipo interno",
      "Una llamada, no un teatro de status",
    ],
  },
] as const;
