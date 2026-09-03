export type Operation = "venta" | "arriendo";
export type PropertyType = "casa" | "departamento" | "parcela" | "loft";
export type Orientation =
  | "Norte"
  | "Norte-Oriente"
  | "Norte-Poniente"
  | "Oriente"
  | "Poniente";

export type Property = {
  slug: string;
  title: string;
  type: PropertyType;
  operation: Operation;
  comuna: string;
  barrio: string;
  region: string;
  address: string;
  priceUF: number;
  priceNote?: string;
  m2util: number;
  m2total?: number;
  dormitorios: number;
  banos: number;
  estacionamientos: number;
  bodega: boolean;
  orientacion: Orientation;
  horaLuz: string;
  year: number;
  restored?: number;
  gastosComunes?: number;
  featured: boolean;
  image: string;
  gallery: string[];
  excerpt: string;
  story: string;
  features: string[];
  barrioSlug: string;
};

export type Barrio = {
  slug: string;
  name: string;
  comuna: string;
  region: string;
  image: string;
  kicker: string;
  lead: string;
  body: string;
  north: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const properties: Property[] = [
  {
    slug: "casa-cerro-alvarado",
    title: "Casa Cerro Alvarado",
    type: "casa",
    operation: "venta",
    comuna: "Lo Barnechea",
    barrio: "La Dehesa",
    region: "Metropolitana",
    address: "Cerro Alvarado 11890",
    priceUF: 28400,
    m2util: 312,
    m2total: 890,
    dormitorios: 5,
    banos: 4,
    estacionamientos: 3,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "09:20",
    year: 2018,
    featured: true,
    image: "/images/prop-lo-barnechea.jpg",
    gallery: [
      "/images/prop-lo-barnechea.jpg",
      "/images/hero.jpg",
      "/images/luz.jpg",
    ],
    excerpt:
      "Cinco dormitorios mirando la cordillera. El living se enciende a las nueve y veinte.",
    story:
      "La casa se abre al norte y a la cordillera. A las 9:20 el living se pone blanco: no hay lámpara que iguale esa hora. Cinco dormitorios, tres de ellos con vista. El jardín está plantado con especies del valle — no hay pasto inglés que se muera en enero. La piscina está alineada con el cerro. Llegamos un martes de agosto, a esa hora, y nadie habló durante un rato.",
    features: [
      "Piscina alineada con la cordillera",
      "Cocina abierta con isla de piedra",
      "Suite principal con terraza norte",
      "Quincho cerrado",
      "Logia independiente",
      "Calefacción por losa radiante",
      "Portón eléctrico y portería de condominio",
    ],
    barrioSlug: "lo-barnechea",
  },
  {
    slug: "penthouse-santa-maria",
    title: "Penthouse Santa María",
    type: "departamento",
    operation: "venta",
    comuna: "Vitacura",
    barrio: "Santa María de Manquehue",
    region: "Metropolitana",
    address: "Av. Santa María 6900",
    priceUF: 19800,
    m2util: 198,
    m2total: 262,
    dormitorios: 3,
    banos: 3,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte-Oriente",
    horaLuz: "08:40",
    year: 2021,
    gastosComunes: 18,
    featured: true,
    image: "/images/prop-vitacura.jpg",
    gallery: [
      "/images/prop-vitacura.jpg",
      "/images/prop-el-golf.jpg",
      "/images/barrio-vitacura.jpg",
    ],
    excerpt:
      "Terraza de travertino, olivos en maceta y la cordillera a primera hora.",
    story:
      "El departamento ocupa el último piso de un edificio bajo. La terraza — sesenta y cuatro metros — está pensada como living: travertino, olivos, una mesa larga. A las 8:40 el sol entra de norte-oriente y el valle se ve nítido. Tres dormitorios en suite. La cocina no se esconde. Gastos comunes serios, administración seria. No es un edificio de amenities: es un edificio de silencio.",
    features: [
      "Terraza 64 m² con parrilla a gas",
      "Tres suites",
      "Termopanel en todo el perímetro",
      "Bodega 9 m²",
      "Dos estacionamientos contiguos",
      "Bodega de vinos",
    ],
    barrioSlug: "vitacura",
  },
  {
    slug: "casa-patio-los-robles",
    title: "Casa Patio Los Robles",
    type: "casa",
    operation: "venta",
    comuna: "Ñuñoa",
    barrio: "Plaza Ñuñoa",
    region: "Metropolitana",
    address: "Los Robles 148",
    priceUF: 14600,
    m2util: 220,
    m2total: 412,
    dormitorios: 4,
    banos: 3,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "11:10",
    year: 1938,
    restored: 2022,
    featured: true,
    image: "/images/prop-nunoa.jpg",
    gallery: [
      "/images/prop-nunoa.jpg",
      "/images/luz.jpg",
      "/images/barrio-nunoa.jpg",
    ],
    excerpt:
      "Una republicana con patio de cítricos. Restaurada sin borrar la casa.",
    story:
      "La casa es de 1938. El patio — baldosa de greda, naranjos, una fuente baja — es el centro. A las 11:10 el sol llena el cuadrado y huele a azahar en octubre. Se restauró en 2022: instalaciones nuevas, muros de adobe consolidados, ventanas de madera con termopanel. Cuatro dormitorios. La cocina mira al patio. No se tocó la escala original. A dos cuadras de la plaza, sin oírla.",
    features: [
      "Patio central con cítricos",
      "Adobe consolidado",
      "Cocina nueva mirando al patio",
      "Piso de lenga original recuperado",
      "Dos estacionamientos en el fondo",
      "Bodega de jardín",
    ],
    barrioSlug: "nunoa",
  },
  {
    slug: "departamento-lastarria-1927",
    title: "Departamento Lastarria 1927",
    type: "departamento",
    operation: "venta",
    comuna: "Santiago",
    barrio: "Lastarria",
    region: "Metropolitana",
    address: "José Victorino Lastarria 90",
    priceUF: 8900,
    m2util: 112,
    dormitorios: 2,
    banos: 2,
    estacionamientos: 1,
    bodega: false,
    orientacion: "Oriente",
    horaLuz: "16:05",
    year: 1927,
    gastosComunes: 6.4,
    featured: false,
    image: "/images/prop-lastarria.jpg",
    gallery: [
      "/images/prop-lastarria.jpg",
      "/images/barrio-lastarria.jpg",
      "/images/luz.jpg",
    ],
    excerpt:
      "Cielos altos, piso original y la luz de la tarde sobre el barrio.",
    story:
      "Un departamento de 1927 en un edificio que todavía se porta como edificio. Cielos de 3,40. Molduras. El piso de madera se lijó, no se cambió. A las 16:05 el oriente se pone dorado y Lastarria se oye abajo, lejos. Dos dormitorios, uno en suite. La cocina se renovó sin fingir loft. Un estacionamiento en el mismo predio — raro en el barrio, y se nota en el precio.",
    features: [
      "Cielo 3,40 m",
      "Piso de madera original",
      "Estacionamiento en el predio",
      "Edificio con conserje",
      "A pasos del Parque Forestal",
    ],
    barrioSlug: "lastarria",
  },
  {
    slug: "casa-renaca-alta",
    title: "Casa Reñaca Alta",
    type: "casa",
    operation: "venta",
    comuna: "Viña del Mar",
    barrio: "Reñaca",
    region: "Valparaíso",
    address: "Camino Internacional 3120",
    priceUF: 22100,
    m2util: 268,
    m2total: 540,
    dormitorios: 4,
    banos: 4,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte-Poniente",
    horaLuz: "10:00",
    year: 2016,
    featured: true,
    image: "/images/prop-renaca.jpg",
    gallery: [
      "/images/prop-renaca.jpg",
      "/images/barrio-renaca.jpg",
      "/images/luz.jpg",
    ],
    excerpt:
      "Volúmenes blancos, terraza al Pacífico y el viento de las diez.",
    story:
      "La casa está en Reñaca Alta, donde el mar se ve entero. Volúmenes blancos, hormigón visto, madera. El norte-poniente le da sol de mañana en los dormitorios y la tarde en la terraza. A las 10:00 el Pacífico está plano y la cortina de lino se mueve. Cuatro suites. La piscina no compite con el horizonte: se esconde un metro. Pensada para vivir, no solo para enero.",
    features: [
      "Terraza continua al mar",
      "Cuatro suites",
      "Piscina desbordante baja",
      "Cocina de frente al poniente",
      "Dormitorio de visitas independiente",
      "Calefacción y aire por zonas",
    ],
    barrioSlug: "renaca",
  },
  {
    slug: "casa-lago-llanquihue",
    title: "Casa Lago Llanquihue",
    type: "casa",
    operation: "venta",
    comuna: "Puerto Varas",
    barrio: "Orilla del lago",
    region: "Los Lagos",
    address: "Camino Ensenada km 4,2",
    priceUF: 18400,
    m2util: 240,
    m2total: 2100,
    dormitorios: 4,
    banos: 3,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "17:30",
    year: 2019,
    featured: true,
    image: "/images/prop-puerto-varas.jpg",
    gallery: [
      "/images/prop-puerto-varas.jpg",
      "/images/luz.jpg",
      "/images/mesa.jpg",
    ],
    excerpt:
      "Madera nativa, el lago quieto y el Osorno al fondo, a las cinco y media.",
    story:
      "Una casa de madera y vidrio sobre el Llanquihue. El norte mira al volcán. A las 17:30 — en verano, más tarde — el agua se pone de cobre y la casa se apaga sola. Cuatro dormitorios, uno en planta baja. Estufa de combustión lenta y losa radiante. El terreno tiene bosque nativo al fondo y no se tocó. A doce minutos del pueblo. No es una casa de fin de semana disfrazada: está aislada para el invierno.",
    features: [
      "Frente al lago, 2.100 m² de terreno",
      "Madera nativa y termopanel",
      "Losa radiante + combustión lenta",
      "Muelle privado",
      "Bosque nativo al fondo",
      "Pozo y respaldo eléctrico",
    ],
    barrioSlug: "puerto-varas",
  },
  {
    slug: "departamento-el-golf-228",
    title: "Departamento El Golf 228",
    type: "departamento",
    operation: "venta",
    comuna: "Las Condes",
    barrio: "El Golf",
    region: "Metropolitana",
    address: "Isidora Goyenechea 2934",
    priceUF: 12750,
    m2util: 145,
    dormitorios: 3,
    banos: 2,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "09:00",
    year: 2014,
    gastosComunes: 12,
    featured: false,
    image: "/images/prop-el-golf.jpg",
    gallery: [
      "/images/prop-el-golf.jpg",
      "/images/prop-vitacura.jpg",
      "/images/barrio-vitacura.jpg",
    ],
    excerpt:
      "Piso alto, norte verdadero y el damero de El Golf a las nueve.",
    story:
      "El Golf sigue siendo El Golf cuando el departamento tiene norte de verdad. Este lo tiene. A las 9:00 el living entero se ilumina y no hace falta encender nada hasta las cinco. Tres dormitorios, dos baños, cocina integrada con criterio. El edificio es de 2014, bien llevado. Dos estacionamientos juntos. A dos cuadras de Apoquindo, sin oír Apoquindo.",
    features: [
      "Norte despejado, piso 14",
      "Cocina integrada",
      "Dos estacionamientos contiguos",
      "Bodega",
      "Conserjería 24 h",
    ],
    barrioSlug: "vitacura",
  },
  {
    slug: "casa-los-leones-norte",
    title: "Casa Los Leones Norte",
    type: "casa",
    operation: "venta",
    comuna: "Providencia",
    barrio: "Pedro de Valdivia Norte",
    region: "Metropolitana",
    address: "Los Conquistadores 2155",
    priceUF: 16200,
    m2util: 198,
    m2total: 380,
    dormitorios: 4,
    banos: 3,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "10:35",
    year: 1952,
    restored: 2020,
    featured: false,
    image: "/images/prop-providencia.jpg",
    gallery: [
      "/images/prop-providencia.jpg",
      "/images/barrio-providencia.jpg",
      "/images/fachada.jpg",
    ],
    excerpt:
      "Jardín con árboles grandes, hortensias y una casa de los cincuenta bien restaurada.",
    story:
      "Pedro de Valdivia Norte todavía tiene casas con jardín. Esta es de 1952, restaurada en 2020 con respeto: se agrandó la cocina, se tocó lo justo. A las 10:35 el sol entra por el living y llega al fondo del jardín. Cuatro dormitorios. Los árboles son más viejos que la casa y se notan en verano. A una cuadra del río. No es un proyecto: es una casa.",
    features: [
      "Jardín con árboles maduros",
      "Cocina ampliada al norte",
      "Cuatro dormitorios",
      "Dos estacionamientos cubiertos",
      "Cerca del Parque Bicentenario",
    ],
    barrioSlug: "providencia",
  },
  {
    slug: "loft-italia-841",
    title: "Loft Italia 841",
    type: "loft",
    operation: "venta",
    comuna: "Ñuñoa",
    barrio: "Barrio Italia",
    region: "Metropolitana",
    address: "Av. Italia 841",
    priceUF: 6480,
    m2util: 89,
    dormitorios: 1,
    banos: 1,
    estacionamientos: 1,
    bodega: false,
    orientacion: "Poniente",
    horaLuz: "15:45",
    year: 2020,
    gastosComunes: 4.2,
    featured: false,
    image: "/images/prop-italia.jpg",
    gallery: ["/images/prop-italia.jpg", "/images/luz.jpg", "/images/mesa.jpg"],
    excerpt:
      "Un solo recinto, un lucernario y la tarde entera sobre la mesa.",
    story:
      "No es un departamento recortado: es un recinto. Ladrillo pintado, vigas, un lucernario que a las 15:45 deja la mesa de roble en un cuadrado de sol. Un dormitorio en altillo. Cocina seria. Un estacionamiento. Italia abajo, la casa arriba. Para alguien que trabaja en casa y no quiere un living de catálogo.",
    features: [
      "Lucernario",
      "Altillo dormitorio",
      "Cocina profesional compacta",
      "Estacionamiento",
      "Edificio de ocho lofts",
    ],
    barrioSlug: "nunoa",
  },
  {
    slug: "parcela-el-melocoton",
    title: "Parcela El Melocotón",
    type: "parcela",
    operation: "venta",
    comuna: "San José de Maipo",
    barrio: "El Melocotón",
    region: "Metropolitana",
    address: "Camino al Volcán s/n",
    priceUF: 11900,
    m2util: 148,
    m2total: 5000,
    dormitorios: 3,
    banos: 2,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "08:15",
    year: 2015,
    featured: false,
    image: "/images/prop-maipo.jpg",
    gallery: [
      "/images/prop-maipo.jpg",
      "/images/luz.jpg",
      "/images/prop-puerto-varas.jpg",
    ],
    excerpt:
      "Adobe, terraza al valle y la primera luz del Cajón.",
    story:
      "Cinco mil metros en El Melocotón. La casa es de adobe y madera, baja, sin ganas de competir con el cerro. A las 8:15 el valle se enciende y la terraza se usa aunque sea invierno. Tres dormitorios. Pozo propio. El viento de la tarde es parte del trato. A una hora de Santiago, si no hay nieve en el camino. No es un lodge: es una casa de valle.",
    features: [
      "5.000 m² de terreno",
      "Adobe y madera",
      "Pozo propio",
      "Terraza continua al valle",
      "Estufa de combustión lenta",
      "Acceso todo el año, salvo nieve puntual",
    ],
    barrioSlug: "lo-barnechea",
  },
  {
    slug: "casa-chicureo-lomas",
    title: "Casa Chicureo Lomas",
    type: "casa",
    operation: "venta",
    comuna: "Colina",
    barrio: "Chicureo",
    region: "Metropolitana",
    address: "Lomas de Chicureo 2210",
    priceUF: 15800,
    m2util: 260,
    m2total: 1050,
    dormitorios: 4,
    banos: 3,
    estacionamientos: 2,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "08:55",
    year: 2017,
    featured: false,
    image: "/images/prop-chicureo.jpg",
    gallery: [
      "/images/prop-chicureo.jpg",
      "/images/prop-lo-barnechea.jpg",
      "/images/luz.jpg",
    ],
    excerpt:
      "Patio con olivo, muros blancos y el secano de las nueve.",
    story:
      "Chicureo cuando está bien hecho: un patio, un olivo, muros que cortan el viento. La casa mira al norte y a las 8:55 el patio ya está caliente. Cuatro dormitorios. Piscina al costado, no al frente. El condominio es de casas, no de torres. Colegios cerca, el cerro más cerca. Pensada para una familia que no quiere el oriente denso.",
    features: [
      "Patio central con olivo",
      "Piscina lateral",
      "Cuatro dormitorios",
      "Terreno 1.050 m²",
      "Condominio de casas",
      "Colegios a 8 minutos",
    ],
    barrioSlug: "lo-barnechea",
  },
  {
    slug: "departamento-plaza-nunoa",
    title: "Departamento Plaza Ñuñoa",
    type: "departamento",
    operation: "arriendo",
    comuna: "Ñuñoa",
    barrio: "Plaza Ñuñoa",
    region: "Metropolitana",
    address: "Irarrázaval 3470",
    priceUF: 32,
    priceNote: "mensual · 11 meses + mes de garantía",
    m2util: 78,
    dormitorios: 2,
    banos: 2,
    estacionamientos: 1,
    bodega: true,
    orientacion: "Norte",
    horaLuz: "09:50",
    year: 2018,
    gastosComunes: 5.8,
    featured: false,
    image: "/images/prop-nunoa-depto.jpg",
    gallery: [
      "/images/prop-nunoa-depto.jpg",
      "/images/barrio-nunoa.jpg",
      "/images/luz.jpg",
    ],
    excerpt:
      "Dos dormitorios, norte a la plaza y arriendo con dueño que responde.",
    story:
      "Un departamento de 78 m² con norte a la plaza. A las 9:50 el living está claro. Dos dormitorios, dos baños, un estacionamiento, bodega. El edificio es de 2018 y se nota: no hay humedad de pasillo. El arriendo incluye dueño que responde por WhatsApp y un contrato de once meses, renovable. Gastos comunes aparte. No se arrienda amoblado: se arrienda para vivir.",
    features: [
      "Norte a la plaza",
      "Dos baños",
      "Estacionamiento y bodega",
      "Sin amoblar",
      "Contrato 11 meses",
    ],
    barrioSlug: "nunoa",
  },
];

export const barrios: Barrio[] = [
  {
    slug: "vitacura",
    name: "Vitacura",
    comuna: "Vitacura / Las Condes",
    region: "Metropolitana",
    image: "/images/barrio-vitacura.jpg",
    kicker: "El valle, de frente",
    lead: "Calles bajas, árboles altos, la cordillera al fondo de cada persiana norte.",
    body: "Vitacura no es un estilo: es una luz. El aire es más seco, las casas más bajas, el silencio más caro. Trabajamos Santa María, Juan XXIII, el Golf cuando el departamento tiene norte de verdad — no el norte del plano. Aquí se vende despacio y se compra con lupa: gastos comunes, administración, si el edificio mira un cerro o un muro.",
    north: "El norte aquí vale un piso. Lo medimos a las 9.",
  },
  {
    slug: "lo-barnechea",
    name: "Lo Barnechea",
    comuna: "Lo Barnechea / Colina",
    region: "Metropolitana",
    image: "/images/prop-lo-barnechea.jpg",
    kicker: "El cerro, cerca",
    lead: "La Dehesa, Los Trapenses, Chicureo: casas que negocian con el viento y la vista.",
    body: "Lo Barnechea pide otra conversación. Terreno, orientación, agua, condominio. Una casa puede ser hermosa a las 16 y dura a las 8 si el norte está tapado por el vecino de arriba. Caminamos el predio. Miramos el cerro. Preguntamos por el riego. Chicureo entra cuando el patio está bien resuelto — no cuando el master plan se ve bien en el brochure.",
    north: "En ladera, el norte se gana o se pierde con un muro.",
  },
  {
    slug: "providencia",
    name: "Providencia",
    comuna: "Providencia",
    region: "Metropolitana",
    image: "/images/barrio-providencia.jpg",
    kicker: "Árboles de verdad",
    lead: "Pedro de Valdivia Norte, Los Leones, el río. Casas que todavía tienen jardín.",
    body: "Providencia es nuestro barrio. La oficina está en Holanda. Aquí todavía hay casas con árboles más viejos que la escritura, y departamentos en calles que no son avenida. El metro está cerca y no se oye si uno elige bien. Vendemos poco, a gente que quiere caminar. El norte, en una casa de los cincuenta, es un living que no necesita lámpara hasta las cinco.",
    north: "El plátano oriental hace sombra; el norte tiene que ganarle.",
  },
  {
    slug: "nunoa",
    name: "Ñuñoa",
    comuna: "Ñuñoa",
    region: "Metropolitana",
    image: "/images/barrio-nunoa.jpg",
    kicker: "Plaza, patio, jacarandá",
    lead: "La plaza, Italia, los patios republicanos que todavía no se torres.",
    body: "Ñuñoa se densificó. Por eso las casas que quedan importan más. Plaza Ñuñoa, Los Robles, Italia: buscamos patios, adobe, árboles, y departamentos con norte que no den a un living ajeno a tres metros. El barrio tiene comercio de verdad y colegios de verdad. El precio se discute; la luz, no.",
    north: "Un patio norte en Ñuñoa es más raro que un penthouse.",
  },
  {
    slug: "lastarria",
    name: "Lastarria",
    comuna: "Santiago",
    region: "Metropolitana",
    image: "/images/barrio-lastarria.jpg",
    kicker: "Piedra y cielo alto",
    lead: "Edificios de los veinte, Forestal a dos cuadras, la tarde sobre el empedrado.",
    body: "Lastarria no es para todo el mundo y no lo disimulamos. Estacionamiento escaso, fiesta el sábado, luz de oriente que a las cuatro es de postal. Si el edificio está bien llevado y el departamento tiene cielo, vale la pena. Si no, hay otros barrios. Publicamos aquí dos o tres veces al año, no más.",
    north: "Aquí el oriente de la tarde sustituye al norte. Hay que decirlo.",
  },
  {
    slug: "renaca",
    name: "Reñaca",
    comuna: "Viña del Mar",
    region: "Valparaíso",
    image: "/images/barrio-renaca.jpg",
    kicker: "El Pacífico, entero",
    lead: "Reñaca Alta, Cochoa, el viento, las casas que se usan en julio.",
    body: "La costa se vende mal cuando se fotografía solo en enero. Nosotros vamos en agosto. Reñaca Alta tiene vista y viento; Cochoa, otra luz. Preguntamos si la casa se calienta, si el fierro del balcón está bien, si el condominio funciona en invierno. Una casa de mar que no se puede habitar en junio no es una casa.",
    north: "Norte-poniente: sol de mañana en la cama, tarde en la terraza.",
  },
  {
    slug: "puerto-varas",
    name: "Puerto Varas",
    comuna: "Puerto Varas",
    region: "Los Lagos",
    image: "/images/prop-puerto-varas.jpg",
    kicker: "Lago y volcán",
    lead: "Orilla, bosque nativo, casas aisladas para el invierno — no solo para el verano.",
    body: "Puerto Varas se llenó de casas de revista. Las que nos interesan están aisladas de verdad, tienen pozo o red seria, y un norte que mira el lago o el Osorno. El invierno es el test. Si la casa se siente bien un martes de julio a las cinco de la tarde, se puede publicar.",
    north: "El norte aquí es el volcán. El resto es paisaje.",
  },
];

export const team: Person[] = [
  {
    slug: "emilia-claro",
    name: "Emilia Claro",
    role: "Fundadora · corredora",
    image: "/images/team-emilia.jpg",
    bio: "Fundó Claro en 2014, después de diez años vendiendo casas que no habría habitado. Hoy decide qué se publica. Si una casa no tiene norte, no entra. Vive en Providencia, a seis cuadras de la oficina.",
  },
  {
    slug: "tomas-valdes",
    name: "Tomás Valdés",
    role: "Socio · oriente y cerro",
    image: "/images/team-tomas.jpg",
    bio: "Vitacura, Lo Barnechea, Chicureo. Ingeniero comercial reconvertido. Mide la luz con el reloj, no con el plano. Lleva las casas grandes y las conversaciones largas.",
  },
  {
    slug: "isidora-pena",
    name: "Isidora Peña",
    role: "Departamentos y barrios",
    image: "/images/team-isidora.jpg",
    bio: "Ñuñoa, Providencia, Lastarria, El Golf. Arquitecta de formación. Lee un edificio en diez minutos: administración, ruidos, si el norte es norte. Escribe las fichas.",
  },
  {
    slug: "mateo-rojas",
    name: "Mateo Rojas",
    role: "Costa y sur",
    image: "/images/team-mateo.jpg",
    bio: "Reñaca, Puerto Varas, el Cajón. Pasa la mitad del mes fuera de Santiago. Fotografía a la hora que dice la ficha, aunque llueva. No publica una casa de mar fotografiada solo en enero.",
  },
  {
    slug: "antonia-vidal",
    name: "Antonia Vidal",
    role: "Primeras visitas",
    image: "/images/team-antonia.jpg",
    bio: "Recibe en Holanda 1427. Agenda las visitas a la hora de la luz, no a la hora del cliente — y explica por qué. Si escribe, responde el mismo día.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Caminamos a las 9 y a las 17",
    text: "Una casa miente a mediodía. Vamos temprano y al atardecer. Si el norte no es norte, se lo decimos al dueño antes de firmar el mandato.",
  },
  {
    n: "02",
    title: "Publicamos poco",
    text: "No tenemos vitrina infinita. Si la casa no entra, no entra. Preferimos diez mandatos serios a cuarenta avisos apagados.",
  },
  {
    n: "03",
    title: "La foto es a la hora verdadera",
    text: "Cada ficha trae su hora de luz. Fotografiamos entonces. El aviso no es un catálogo de interiores: es la casa a la hora en que se entiende.",
  },
  {
    n: "04",
    title: "Menos visitas, más serias",
    text: "No abrimos la casa un domingo para que pasen treinta personas. Agendamos. Acompañamos. Si alguien no calza, no va.",
  },
];

export const principles = [
  {
    title: "El norte no se negocia",
    text: "En Chile el sol está al norte. Un living al sur es otra casa, otro precio, otra vida. Lo decimos en la primera línea.",
  },
  {
    title: "El silencio es un metro más",
    text: "Medimos distancia a la avenida, al colegio, al mall. Una casa hermosa sobre un eje no es una casa hermosa.",
  },
  {
    title: "Honorarios por escrito",
    text: "2% + IVA en la venta. En el arriendo, un mes + IVA. Antes de firmar el mandato, el número está en el papel.",
  },
  {
    title: "Si no es nuestro, se lo decimos",
    text: "No tomamos lo que no sabemos vender. Hay colegas para eso. Se lo diremos en la primera conversación.",
  },
];

export const stats = [
  { value: "12", label: "años en la misma casa" },
  { value: "40", label: "propiedades al año, no más" },
  { value: "87%", label: "vendidas antes de 90 días" },
  { value: "9:20", label: "la hora que más repetimos" },
];

export const testimonials = [
  {
    quote:
      "Emilia nos dijo que el departamento de Santa María no tenía norte de verdad, aunque el plano lo decía. Fuimos a las 10 de la mañana. Tenía razón. Después encontramos este.",
    name: "Javiera y Andrés M.",
    place: "Vitacura · 2024",
  },
  {
    quote:
      "Vendimos la casa de Ñuñoa en seis semanas. No hicieron open house. Vinieron ocho personas, tres ofertas. La que ganó había ido a las 11, como decía la ficha.",
    name: "Rosa H.",
    place: "Ñuñoa · 2025",
  },
  {
    quote:
      "Mateo fotografió la casa de Reñaca un martes de agosto, con viento. El aviso se veía menos lindo y se vendió más rápido. Nadie llegó a quejarse del viento.",
    name: "Familia Oyarzún",
    place: "Reñaca · 2025",
  },
];

export const faqs = [
  {
    q: "¿Cobran por tasar o por la primera visita?",
    a: "La primera conversación y la visita a la casa — a la hora de la luz — no tienen costo. Si tomamos el mandato, el honorario es 2% + IVA sobre el precio de escritura, pagadero al cierre. En arriendo, un mes de renta + IVA.",
  },
  {
    q: "¿Trabajan con crédito hipotecario?",
    a: "Sí. Coordinamos con el banco del comprador, el estudio de títulos y el conservador. No somos el banco: somos la mesa donde las partes no se pierden.",
  },
  {
    q: "¿Por qué tan pocas propiedades?",
    a: "Porque cada casa se camina dos veces, se fotografía a una hora precisa y se muestra con cita. Eso no escala a doscientas fichas. No queremos que escale.",
  },
  {
    q: "¿Van a Viña y al sur?",
    a: "Reñaca, Puerto Varas y el Cajón del Maipo, cuando la casa se puede habitar de verdad — no solo fotografiar en enero. Mateo lleva esas visitas.",
  },
  {
    q: "¿Qué pasa si mi casa da al sur?",
    a: "Se lo decimos. A veces hay un patio, un segundo piso, un precio que lo hace sentido. A veces conviene otro corredor. No publicamos un sur como si fuera norte.",
  },
];

export const typeLabel: Record<PropertyType, string> = {
  casa: "Casa",
  departamento: "Departamento",
  parcela: "Parcela",
  loft: "Loft",
};

export const operationLabel: Record<Operation, string> = {
  venta: "Venta",
  arriendo: "Arriendo",
};

export function getProperty(slug: string) {
  return properties.find((item) => item.slug === slug);
}

export function getBarrio(slug: string) {
  return barrios.find((item) => item.slug === slug);
}

export function propertiesInBarrio(slug: string) {
  return properties.filter((item) => item.barrioSlug === slug);
}

export function similarProperties(slug: string, limit = 3) {
  const current = getProperty(slug);
  if (!current) return properties.slice(0, limit);
  return properties
    .filter(
      (item) =>
        item.slug !== slug &&
        (item.barrioSlug === current.barrioSlug || item.type === current.type)
    )
    .slice(0, limit);
}

export const comunas = Array.from(
  new Set(properties.map((item) => item.comuna))
).sort((a, b) => a.localeCompare(b, "es"));
