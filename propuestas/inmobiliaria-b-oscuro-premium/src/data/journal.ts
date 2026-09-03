export type Article = {
  slug: string
  title: string
  kicker: string
  date: string
  read: string
  image: string
  excerpt: string
  body: string[]
};

export const articles: Article[] = [
  {
    slug: "orientacion-norte",
    title: "La orientación norte, el privilegio que no se negocia",
    kicker: "Santiago",
    date: "2026-03-12",
    read: "6 min",
    image: "/images/interior-living.jpg",
    excerpt:
      "En el hemisferio sur el sol entra por el norte. Parece obvio. En el mercado de Santiago, cada año lo es menos.",
    body: [
      "Hay un dato que en Chile debería enseñarse antes que el precio por metro: el sol entra por el norte. Una casa orientada al sur, por más mármol que tenga, vive de lumínica prestada. Una casa al norte, incluso modesta, se calienta sola en invierno y se ilumina hasta las siete de la tarde en verano.",
      "En Lo Barnechea y Vitacura hemos visto fichas que ocultan la orientación en la tercera página, después de la lista de equipamiento. Es un truco antiguo. El comprador que llega a Obsidiana ya no lo acepta: la orientación es el primer filtro, no el último.",
      "Una regla de trabajo: si el living principal no tiene norte, la casa no entra a la colección. Hay excepciones —un acantilado en Zapallar, un pabellón al volcán— pero son excepciones con nombre y apellido, no descuidos.",
      "El metro cuadrado se puede ampliar. El sol de la tarde, no.",
    ],
  },
  {
    slug: "zapallar-se-espera",
    title: "Zapallar no se compra: se espera",
    kicker: "Costa Central",
    date: "2025-11-04",
    read: "5 min",
    image: "/images/barrio-zapallar.jpg",
    excerpt:
      "El inventario bueno de Zapallar no está en los portales. Está en conversaciones de años, y en herencias que todavía no se resuelven.",
    body: [
      "Cada verano alguien pregunta si hay algo en Zapallar. La respuesta honesta es casi siempre no. No porque no existan casas: porque las que importan no se publican, y las que se publican rara vez importan.",
      "El pueblo cabe en una herradura. El suelo es finito. Las familias que lo habitan desde los años cuarenta no venden por un peak de UF. Venden cuando un hermano se va a vivir a Londres, cuando una sucesión se ordena, cuando alguien decide que la casa pide otro ritmo.",
      "Nuestra labor ahí no es cazar avisos. Es estar cuando esa conversación ocurre, y tener al otro lado a alguien que entiende que Zapallar no es un activo: es una forma de pasar febrero —y, si se tiene juicio, también agosto.",
    ],
  },
  {
    slug: "la-uf-el-silencio",
    title: "La UF, el silencio y el tiempo",
    kicker: "Oficio",
    date: "2025-08-21",
    read: "7 min",
    image: "/images/obsidiana-still.jpg",
    excerpt:
      "Una residencia de autor no se tasa como un departamento en Ñuñoa. El mercado lo sabe; algunos portales, no.",
    body: [
      "La Unidad de Fomento es la lengua franca del ladrillo chileno. Sirve. También aplana. Dos casas de UF 40.000 pueden no tener nada que ver: una mira un muro, la otra mira los Andes. El número es idéntico. El umbral, no.",
      "En Obsidiana no negociamos el precio en el primer correo. Primero se visita. Se entra a la hora en que la casa se explica —casi siempre el atardecer—. Recién entonces la UF deja de ser un cartel y vuelve a ser una cifra que se puede discutir.",
      "Hay compradores que quieren cerrar en una semana. Hay casas que no se merecen esa prisa. El silencio entre una visita y una oferta no es indecisión: es el único lujo que todavía no se puede express.",
    ],
  },
  {
    slug: "casas-de-lago",
    title: "Casas de lago: lo que el volcán enseña",
    kicker: "Los Lagos",
    date: "2025-05-16",
    read: "5 min",
    image: "/images/barrio-puerto-varas.jpg",
    excerpt:
      "Puerto Varas se llenó de lodges. El Llanquihue, no. Todavía hay orillas que merecen un pabellón y no un condominio.",
    body: [
      "El sur de Chile produce dos tipos de casa: las que se fotografían para un brochure de turismo, y las que se habitan cuando llueve dieciocho días seguidos. Solo las segundas nos interesan.",
      "Un pabellón de verdad en el Llanquihue tiene zócalo de piedra, madera que aguanta, calefacción que no depende de un generator de jardín, y una relación con el agua que no es un deck de despedida. El Osorno no es un fondo de Zoom.",
      "Si el predio se puede lotear en doce, ya no es un predio. Es un proyecto. Y los proyectos, con respeto, tienen otras inmobiliarias.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatArticleDate(iso: string) {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}
