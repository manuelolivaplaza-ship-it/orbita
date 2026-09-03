import type { TerritoryId } from "./site";

export type Neighborhood = {
  slug: string
  name: string
  territory: TerritoryId
  kicker: string
  image: string
  excerpt: string
  body: string[]
  facts: { label: string; value: string }[]
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "lo-barnechea",
    name: "Lo Barnechea",
    territory: "santiago",
    kicker: "La ladera",
    image: "/images/casa-ladera.jpg",
    excerpt:
      "Donde el valle se vuelve cordillera. Casas que no se ven desde la calle y un silencio que Santiago ya no produce abajo.",
    body: [
      "Lo Barnechea —y su continuación en La Dehesa— no es un barrio: es una cota. El lujo aquí no es el mármol de la entrada, es la orientación norte, el predio que conserva el bosque esclerófilo y la distancia, medida en minutos y en metros sobre el nivel del ruido.",
      "Trabajamos pocas casas al año. Las que importan tienen predio, no solo metros construidos. El resto, con respeto, no entra a la colección.",
    ],
    facts: [
      { label: "Cota", value: "800–1.100 m s.n.m." },
      { label: "De Vitacura", value: "12–25 min" },
      { label: "Criterio", value: "Predio, norte, silencio" },
    ],
  },
  {
    slug: "vitacura",
    name: "Vitacura",
    territory: "santiago",
    kicker: "El valle contenido",
    image: "/images/barrio-vitacura.jpg",
    excerpt:
      "Alonso de Córdova, jardines amurallados, el río a un costado. El Santiago que todavía se puede caminar con un saco.",
    body: [
      "Vitacura es el único pedazo de Santiago donde el lujo todavía cabe en una manzana. No todo Vitacura es colección: nos interesan las casas de muro, los áticos altos sobre Córdova, los predios que no dieron el jardín por perdido.",
      "El estudio está aquí —oficina 1201— porque el barrio se entiende mejor a pie que en ficha.",
    ],
    facts: [
      { label: "Eje", value: "Alonso de Córdova" },
      { label: "Tipología", value: "Casa y ático" },
      { label: "Atelier", value: "Of. 1201" },
    ],
  },
  {
    slug: "zapallar",
    name: "Zapallar y Cachagua",
    territory: "costa",
    kicker: "La costa que no se anuncia",
    image: "/images/barrio-zapallar.jpg",
    excerpt:
      "Una herradura de piedra y un pueblo que no necesita temporada alta para existir. Aquí el inventario no se publica: se espera.",
    body: [
      "Zapallar tiene una regla no escrita: las casas buenas no aparecen en portales. Cachagua, un poco más al sur, ofrece duna y otra temperatura social. En ambos, el criterio es el mismo —vista, predio, y el privilegio de no estar en Reñaca.",
      "Una casa en esta costa puede tardar dos años en estar lista para mostrarse. Quien tiene prisa, se equivoca de territorio.",
    ],
    facts: [
      { label: "De Santiago", value: "1 h 40 min" },
      { label: "Temporada", value: "Todo el año, con juicio" },
      { label: "Inventario", value: "Por invitación" },
    ],
  },
  {
    slug: "puerto-varas",
    name: "Puerto Varas",
    territory: "lagos",
    kicker: "El lago y el volcán",
    image: "/images/barrio-puerto-varas.jpg",
    excerpt:
      "Llanquihue, Osorno, madera oscura y una niebla que no se pelea. El sur no es un fin de semana: es un segundo ritmo.",
    body: [
      "Puerto Varas se puso de moda y, como toda moda, produjo casas que no deberían existir. Nosotros buscamos la orilla verdadera, el pabellón que entiende el clima, el predio que no se loteó en doce.",
      "El volcán no es un postcard. Es una presencia. Las casas que lo ignoran, sobran.",
    ],
    facts: [
      { label: "Agua", value: "Lago Llanquihue" },
      { label: "Clima", value: "Frío, húmedo, honesto" },
      { label: "Uso", value: "Residencia y refugio" },
    ],
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    territory: "valle",
    kicker: "Niebla y viña",
    image: "/images/hacienda-niebla.jpg",
    excerpt:
      "A cuarenta y cinco minutos de Santiago, un valle de viento costero, noches frías y casas que todavía tienen predio de verdad.",
    body: [
      "Casablanca no es un barrio de Santiago con palmeras. Es un valle vitivinícola con niebla matinal y un silencio agrícola que Vitacura ya no recuerda. Las parcelas que nos interesan tienen agua, viña o bosque, y una casa que no finge ser un lodge.",
      "Para quien quiere un segundo ritmo sin subirse a un avión.",
    ],
    facts: [
      { label: "De Santiago", value: "45–60 min" },
      { label: "Suelo", value: "Viña, viento, niebla" },
      { label: "Tipología", value: "Hacienda y parcela" },
    ],
  },
];

export function getNeighborhood(slug: string) {
  return neighborhoods.find((n) => n.slug === slug);
}
