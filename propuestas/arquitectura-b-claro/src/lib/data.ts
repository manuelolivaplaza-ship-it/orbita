export type Category =
  | "Residencial"
  | "Productivo"
  | "Cultural"
  | "Educativo"
  | "Estudio";

export type Status = "Construido" | "En obra" | "Proyecto";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  location: string;
  comuna: string;
  year: number;
  category: Category;
  area: string;
  cota: string;
  status: Status;
  client: string;
  featured: boolean;
  cover: string;
  images: ProjectImage[];
  excerpt: string;
  lead: string;
  body: string[];
  facts: { label: string; value: string }[];
};

export const categories: Array<"Todas" | Category> = [
  "Todas",
  "Residencial",
  "Productivo",
  "Cultural",
  "Educativo",
  "Estudio",
];

export const projects: Project[] = [
  {
    slug: "casa-lo-curro",
    code: "C-24-03",
    title: "Casa Lo Curro",
    location: "Lo Curro, Vitacura",
    comuna: "Vitacura",
    year: 2024,
    category: "Residencial",
    area: "420 m²",
    cota: "+842.60",
    status: "Construido",
    client: "Privado",
    featured: true,
    cover: "/images/casa-lo-curro.jpg",
    images: [
      {
        src: "/images/casa-lo-curro.jpg",
        alt: "Casa Lo Curro escalonada sobre el talud, con los Andes al fondo",
        caption:
          "Tres plataformas. El volumen no se posa: se corta en el cerro.",
        wide: true,
      },
      {
        src: "/images/casa-lo-curro-int.jpg",
        alt: "Estar de doble altura con luz norte y la cordillera al fondo",
        caption:
          "El estar mira al norte. La cordillera no es un fondo: es la medida.",
      },
      {
        src: "/images/materia.jpg",
        alt: "Encuentro de cobre, yeso y hormigón tabla",
        caption: "Cobre, cal y hormigón tabla. El encuentro es el detalle.",
      },
    ],
    excerpt:
      "Tres plataformas cortadas en el talud de Lo Curro. El norte es el valle; el sur, el cerro.",
    lead: "En Lo Curro el predio no es un plano. Es un talud de treinta y dos grados, un viento que baja de la cordillera y una vista que no se merece un ventanal gratuito.",
    body: [
      "El encargo pedía una casa para vivir el año entero: estar, cocina, tres dormitorios, un estudio. El predio pedía otra cosa. Si se rellenaba, se perdía el cerro. Si se copiaba la pendiente con una rampa de hormigón, se copiaba un gesto. El corte —tres plataformas de 3,20 m— es la respuesta que el talud ya tenía.",
      "La primera cota es el acceso, al sur, contra el cerro: sombra, cochera, servicios. La segunda es el estar, abierto al norte, con un alero de 2,40 m que corta el sol de verano y deja pasar el de invierno. La tercera es el dormitorio principal, un metro más abajo, para que la cama mire los Andes sin que la terraza del estar la pise.",
      "Estructura de hormigón armado según NCh433. Muros de cal. Cubierta con flashing de cobre de 0,6 mm —el mismo que se oxida a la vista en tres inviernos. No hay revestimiento que finja otra materia.",
      "La casa se entregó en abril de 2024. Volvimos en noviembre a regular los quiebres de las carpinterías: el talud se mueve un poco el primer año. Eso también es el oficio.",
    ],
    facts: [
      { label: "Lámina", value: "C-24-03" },
      { label: "Comuna", value: "Vitacura" },
      { label: "Año", value: "2024" },
      { label: "Superficie", value: "420 m²" },
      { label: "Cota acceso", value: "+842.60" },
      { label: "Pendiente", value: "32 %" },
      { label: "Estructura", value: "Hormigón NCh433" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "casa-matanzas",
    code: "C-23-11",
    title: "Casa Matanzas",
    location: "Matanzas, Navidad",
    comuna: "Navidad",
    year: 2023,
    category: "Residencial",
    area: "280 m²",
    cota: "+38.20",
    status: "Construido",
    client: "Privado",
    featured: true,
    cover: "/images/casa-matanzas.jpg",
    images: [
      {
        src: "/images/casa-matanzas.jpg",
        alt: "Casa baja de yeso y madera sobre un farallón en Matanzas",
        caption:
          "El Pacífico está al oeste. El alero es de 2,80 m: el poniente no se negocia.",
        wide: true,
      },
      {
        src: "/images/casa-matanzas-int.jpg",
        alt: "Interior de la casa mirando el horizonte del Pacífico",
        caption: "El estar mira el mar. El patio mira el norte.",
      },
      {
        src: "/images/luz-norte.jpg",
        alt: "Muro de yeso cruzado por una franja de luz norte",
        caption: "Una raja alta al norte. El resto del muro se queda en calma.",
      },
    ],
    excerpt:
      "Una casa baja sobre el farallón. El mar al poniente, el patio al norte, el viento al sur.",
    lead: "En Matanzas el océano está al oeste y el viento sur no pregunta. Quien abre el estar al poniente sin alero, a las cuatro de la tarde no habita: se esconde.",
    body: [
      "La casa da la espalda al sur —viento, lluvia corta, cero sol— y se abre en dos direcciones que no se pelean: el mar al poniente, con un alero de 2,80 m y una carpintería de palillería; el patio al norte, sin alero, para que el invierno entre hasta el fondo del estar.",
      "El predio es un farallón de 38 metros sobre el Pacífico. No hay relleno. Un muro de contención de hormigón tabla toma la cota y el volumen se sienta encima, bajo, para no competir con el horizonte. Desde la ruta se ve apenas un techo de cobre.",
      "Madera de pino radiata impregnada, yeso de cal, cobre en cubierta y en los bajantes. Los oficios vinieron de Litueche y de Santa Cruz. El detalle de la ventana oeste se resolvió en obra, con el carpintero, midiendo el sol de marzo a las 16:30.",
    ],
    facts: [
      { label: "Lámina", value: "C-23-11" },
      { label: "Comuna", value: "Navidad" },
      { label: "Año", value: "2023" },
      { label: "Superficie", value: "280 m²" },
      { label: "Cota", value: "+38.20" },
      { label: "Alero poniente", value: "2,80 m" },
      { label: "Materia", value: "Cal, pino, cobre" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "bodega-isla-de-maipo",
    code: "C-24-07",
    title: "Bodega Isla de Maipo",
    location: "Isla de Maipo",
    comuna: "Isla de Maipo",
    year: 2024,
    category: "Productivo",
    area: "1.840 m²",
    cota: "+341.00",
    status: "Construido",
    client: "Viña de familia",
    featured: true,
    cover: "/images/bodega-maipo.jpg",
    images: [
      {
        src: "/images/bodega-maipo.jpg",
        alt: "Nave de hormigón entre hileras de viñedo en Isla de Maipo",
        caption:
          "La nave es paralela a las hileras. El viñedo no se corta: se continúa.",
        wide: true,
      },
      {
        src: "/images/bodega-maipo-int.jpg",
        alt: "Sala de barricas con lucernario norte",
        caption:
          "El lucernario norte lava el piso. La barrica no necesita teatro.",
      },
      {
        src: "/images/modelo.jpg",
        alt: "Maqueta de cartón de la bodega sobre el talud",
        caption: "La maqueta de sitio se hizo antes que la planta.",
      },
    ],
    excerpt:
      "Una nave larga enterrada en el talud del viñedo. Masa térmica, lucernario norte, cero gesto.",
    lead: "Una bodega no es un pabellón de visitas. Es un instrumento de temperatura. El talud del Maipo ya era el muro norte que el vino necesitaba.",
    body: [
      "El predio es una viña de cabernet en Isla de Maipo, con un desnivel de cuatro metros entre la calle y el fondo. Enterramos la nave en ese desnivel: el muro norte es tierra, el sur es hormigón tabla con una franja de lucernario. La temperatura de las barricas se sostiene sin máquina la mayor parte del año.",
      "El programa es claro: recepción de uva al este, fermentación, naves de guarda, un espacio mínimo para quien visita. No hay sala de catas con vista panorámica. Hay una mesa bajo el lucernario y un corte que se entiende.",
      "Estructura de pórticos de hormigón. Cubierta invertida con aislamiento y cobre. El permiso de edificación se tramitó en la DOM de Isla de Maipo en siete meses —el corte ayudó: el volumen no asoma más de 4,20 m sobre la cota de la calle.",
    ],
    facts: [
      { label: "Lámina", value: "C-24-07" },
      { label: "Comuna", value: "Isla de Maipo" },
      { label: "Año", value: "2024" },
      { label: "Superficie", value: "1.840 m²" },
      { label: "Cota calle", value: "+341.00" },
      { label: "Desnivel", value: "4,00 m" },
      { label: "Uso", value: "Bodega y guarda" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "casa-patio-nunoa",
    code: "C-22-04",
    title: "Casa Patio Ñuñoa",
    location: "Ñuñoa",
    comuna: "Ñuñoa",
    year: 2022,
    category: "Residencial",
    area: "210 m²",
    cota: "+572.10",
    status: "Construido",
    client: "Privado",
    featured: false,
    cover: "/images/casa-patio.jpg",
    images: [
      {
        src: "/images/casa-patio.jpg",
        alt: "Casa de un piso alrededor de un patio norte con limonero",
        caption: "Se conservó el jardín de frente. El patio nuevo mira al norte.",
        wide: true,
      },
      {
        src: "/images/casa-patio-int.jpg",
        alt: "Corredor de yeso abriéndose al patio con limonero",
        caption: "El corredor es el estar de verano. El limonero ya estaba.",
      },
    ],
    excerpt:
      "Se derribó el chalet de los cincuenta. Se guardó el jardín de frente y se organizó la casa alrededor de un patio norte.",
    lead: "En Ñuñoa el predio mide doce por treinta y dos. El chalet de 1954 daba la espalda al norte. La casa nueva da la cara.",
    body: [
      "El encargo era una casa para una familia de cuatro, con un presupuesto en UF que no admitía gestos. El chalet existente tenía el estar al sur y un patio de servicio al norte. Invertimos el corte: el frente a la calle se queda bajo, con el jardín original; el patio nuevo —con el limonero que ya estaba— concentra el programa.",
      "Ladrillo de la demolición reutilizado en el muro de medianero. Yeso de cal. Piso de greda. Una sola agua hacia el patio, para que el agua de invierno riegue el limonero antes de irse al punto de infiltración.",
      "Permiso de edificación en la DOM de Ñuñoa. Recepción final en 2023. La casa se habita con las ventanas del patio abiertas de octubre a abril.",
    ],
    facts: [
      { label: "Lámina", value: "C-22-04" },
      { label: "Comuna", value: "Ñuñoa" },
      { label: "Año", value: "2022" },
      { label: "Superficie", value: "210 m²" },
      { label: "Predio", value: "12 × 32 m" },
      { label: "Patio norte", value: "48 m²" },
      { label: "Materia", value: "Ladrillo, cal, greda" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "pabellon-san-cristobal",
    code: "C-21-02",
    title: "Pabellón San Cristóbal",
    location: "Pedro de Valdivia Norte",
    comuna: "Providencia",
    year: 2021,
    category: "Cultural",
    area: "180 m²",
    cota: "+628.40",
    status: "Construido",
    client: "Fundación",
    featured: false,
    cover: "/images/pabellon.jpg",
    images: [
      {
        src: "/images/pabellon.jpg",
        alt: "Pabellón de cobre y yeso en una terraza del cerro San Cristóbal",
        caption: "Cobre de cubierta. El cerro ya era la gradería.",
        wide: true,
      },
      {
        src: "/images/luz-norte.jpg",
        alt: "Interior del pabellón con una raja de luz",
        caption: "Una sola raja. El resto es muro y eco.",
      },
    ],
    excerpt:
      "Un pabellón de 180 m² en una terraza del cerro. Cobre, yeso, y el San Cristóbal como gradería.",
    lead: "La fundación pedía un espacio para dos conferencias al mes y una mesa el resto del tiempo. El cerro pedía no ser tallado de más.",
    body: [
      "El pabellón se sienta en una terraza ya existente, sin nuevo muro de contención. La cubierta de cobre se pliega una vez, para sacar el agua hacia el norte y dejar una raja de luz sobre la mesa. Los muros son de cal sobre albañilería reforzada.",
      "Desde adentro se ve un trozo de ciudad y un trozo de cerro. No se ve todo: ver todo es no ver. El aforo es de cuarenta personas. El resto del mes, el espacio es una sala de trabajo con la puerta abierta al talud.",
    ],
    facts: [
      { label: "Lámina", value: "C-21-02" },
      { label: "Comuna", value: "Providencia" },
      { label: "Año", value: "2021" },
      { label: "Superficie", value: "180 m²" },
      { label: "Cota", value: "+628.40" },
      { label: "Aforo", value: "40" },
      { label: "Cubierta", value: "Cobre 0,6 mm" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "escuela-precordillera",
    code: "C-23-06",
    title: "Escuela Precordillera",
    location: "Pirque",
    comuna: "Pirque",
    year: 2023,
    category: "Educativo",
    area: "2.400 m²",
    cota: "+703.00",
    status: "Construido",
    client: "Fundación educacional",
    featured: false,
    cover: "/images/escuela.jpg",
    images: [
      {
        src: "/images/escuela.jpg",
        alt: "Pabellones de ladrillo y yeso alrededor de patios en Pirque",
        caption: "Aulas al norte. Recreo a la sombra. El cerro al fondo.",
        wide: true,
      },
      {
        src: "/images/casa-patio-int.jpg",
        alt: "Corredor hacia un patio de la escuela",
        caption: "El corredor es el clima del recreo. El patio, el del aula.",
      },
    ],
    excerpt:
      "Rehabilitación y ampliación de una escuela en Pirque. Se guardaron los pabellones; se corrigió el norte.",
    lead: "La escuela ya estaba. Los pabellones daban al poniente y el recreo se asaba a las dos. El encargo no era un edificio nuevo: era un corte que devolviera la sombra y el norte.",
    body: [
      "Se conservaron los pabellones de ladrillo y se les sumó un alero calculado para el 21 de diciembre a las 14:00 en latitud 33,6° S. Las aulas que miraban al poniente se giraron, en el corte, hacia el norte. El recreo queda a la sombra del pabellón. Los niños no están en las fotos: están en esa sombra.",
      "Albañilería reforzada sobre lo existente, cadenas de hormigón, NCh433. El permiso se tramitó con la SEREMI de Educación y la DOM de Pirque. La obra duró catorce meses, en vacaciones de invierno y de verano. El oficio de la albañilería vino de Buin.",
    ],
    facts: [
      { label: "Lámina", value: "C-23-06" },
      { label: "Comuna", value: "Pirque" },
      { label: "Año", value: "2023" },
      { label: "Superficie", value: "2.400 m²" },
      { label: "Aulas", value: "18" },
      { label: "Alero norte", value: "1,90 m" },
      { label: "Norma", value: "NCh433 + OGUC" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "refugio-conguillio",
    code: "C-22-09",
    title: "Refugio Conguillío",
    location: "Parque Nacional Conguillío",
    comuna: "Melipeuco",
    year: 2022,
    category: "Residencial",
    area: "92 m²",
    cota: "+1.120.00",
    status: "Construido",
    client: "Privado",
    featured: false,
    cover: "/images/refugio.jpg",
    images: [
      {
        src: "/images/refugio.jpg",
        alt: "Refugio de piedra volcánica y madera entre araucarias",
        caption: "Piedra del lugar. La araucaria no se toca.",
        wide: true,
      },
      {
        src: "/images/materia.jpg",
        alt: "Detalle de cobre y piedra",
        caption: "El cobre trabaja a mil cien metros. La piedra, siempre.",
      },
    ],
    excerpt:
      "Noventa y dos metros entre araucarias. Piedra volcánica, lenga y un vano que mira el Llaima.",
    lead: "El encargo era un refugio para cuatro fines de semana al año. El parque pedía no dejar huella de más. Noventa y dos metros es el tamaño de esa conversación.",
    body: [
      "Se levantó sobre pilotes para no cortar raíces. La piedra es volcánica, del mismo predio, asentada con mortero de cal. La cubierta es de lenga y cobre. Un solo vano grande mira el Llaima; el resto son rasgaduras para no competir con el bosque.",
      "No hay red. Fotovoltaica, leña, un pozo. La CONAF revisó el emplazamiento. La obra se hizo en tres ventanas de verano, con oficios de Melipeuco y de Temuco.",
    ],
    facts: [
      { label: "Lámina", value: "C-22-09" },
      { label: "Comuna", value: "Melipeuco" },
      { label: "Año", value: "2022" },
      { label: "Superficie", value: "92 m²" },
      { label: "Cota", value: "+1.120" },
      { label: "Sistema", value: "Pilotes, fuera de red" },
      { label: "Materia", value: "Piedra, lenga, cobre" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "taller-cota",
    code: "C-18-01",
    title: "Taller COTA",
    location: "Pedro de Valdivia Norte",
    comuna: "Providencia",
    year: 2018,
    category: "Estudio",
    area: "320 m²",
    cota: "+612.40",
    status: "Construido",
    client: "COTA",
    featured: false,
    cover: "/images/taller.jpg",
    images: [
      {
        src: "/images/taller.jpg",
        alt: "Interior del taller COTA con maquetas sobre mesas de roble",
        caption: "Mesas de roble. Maquetas de sitio. El norte entra a las 11:00.",
        wide: true,
      },
      {
        src: "/images/mesa.jpg",
        alt: "Mesa de dibujo con reglas y un corte",
        caption: "El corte se dibuja a mano antes que el render.",
      },
      {
        src: "/images/modelo.jpg",
        alt: "Maqueta de cartón de una casa en talud",
        caption: "Si la maqueta no se entiende, el edificio tampoco.",
      },
    ],
    excerpt:
      "Una casa en el talud de San Cristóbal convertida en taller. Aquí se toman las cotas.",
    lead: "En 2018 compramos una casa de los setenta en El Cerro. El estar daba al sur. Lo primero que hicimos fue abrir el norte.",
    body: [
      "El taller es el primer proyecto que nos hicimos a nosotros. Se derribó un muro, se abrió una raja de 8,40 m al norte, y las mesas de roble se alinearon con esa luz. Las maquetas se fotografían siempre a las 11:00, cuando el sol no miente.",
      "Abajo, archivo y muestras de materia. Arriba, las seis mesas. El patio de atrás es el talud del cerro, con un arrayán que no se toca. Quien viene a encargar un predio se sienta en esa mesa, con el corte delante, no con un flythrough.",
    ],
    facts: [
      { label: "Lámina", value: "C-18-01" },
      { label: "Comuna", value: "Providencia" },
      { label: "Año", value: "2018" },
      { label: "Superficie", value: "320 m²" },
      { label: "Cota", value: "+612.40" },
      { label: "Mesas", value: "6" },
      { label: "Uso", value: "Taller y archivo" },
      { label: "Estado", value: "Construido" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeatured() {
  return projects.filter((project) => project.featured);
}

export function getRelated(slug: string, count = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, count);
  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => {
      const same = Number(b.category === current.category) - Number(a.category === current.category);
      return same || b.year - a.year;
    })
    .slice(0, count);
}

export const principles = [
  {
    cota: "+12.40",
    title: "Talud",
    text: "El predio chileno rara vez es un plano. Antes del programa, la pendiente, el muro de contención que no se quiere hacer, y la cota donde se puede sentar un piso.",
  },
  {
    cota: "+9.20",
    title: "Norte",
    text: "En el hemisferio sur el sol entra por el norte. Un estar al sur es un estar a oscuras. Un patio al norte es un instrumento. Lo medimos a las 11:30, no en el render.",
  },
  {
    cota: "+6.00",
    title: "Corte",
    text: "La planta miente. El corte dice si hay alero, si la luz entra, si el talud se respeta. Dibujamos el corte antes que la fachada. Si el corte no se sostiene, no hay proyecto.",
  },
  {
    cota: "+3.20",
    title: "Sismo",
    text: "La estructura no se disfraza. NCh433, muros que se leen, cadenas que se entienden. Un edificio que esconde cómo se tiene en pie es un edificio que no confiamos.",
  },
  {
    cota: "±0.00",
    title: "Oficio",
    text: "El detalle se resuelve con quien lo va a ejecutar. Muestras reales, cobre que se oxida, cal que se mancha. La pátina no se pide al catálogo.",
  },
];

export const steps = [
  {
    cota: "01",
    title: "Predio",
    text: "Vamos al terreno. Pendiente, árboles, medianeros, el norte real —no el de la planimetría. Si hace falta, nos quedamos a ver el sol de las 16:00.",
  },
  {
    cota: "02",
    title: "Corte",
    text: "Anteproyecto en cortes y maqueta de sitio. Pocas plantas. Presentamos dos o tres caminos. El encargo se decide con nosotros, no después de un render.",
  },
  {
    cota: "03",
    title: "Permiso",
    text: "Proyecto de arquitectura, cálculo y especialidades. Tramitación en la DOM. OGUC, NCh433, informe de suelo. El permiso no es un trámite aparte: es el proyecto.",
  },
  {
    cota: "04",
    title: "Obra",
    text: "Dirección de obra presente. Semanal al principio, más seguido cuando se vierte. La obra cambia el proyecto: un oficio, una cota que no estaba. Ajustamos. No improvisamos.",
  },
  {
    cota: "05",
    title: "Recepción",
    text: "Recepción final municipal, manual de materia, una visita a los seis meses. Una casa se termina cuando se habita un invierno y un verano.",
  },
];

export const team = [
  {
    slug: "magdalena-rojas",
    name: "Magdalena Rojas",
    role: "Socia",
    focus: "Corte y talud",
    since: 2014,
    image: "/images/magdalena.jpg",
    bio: "Arquitecta FAU Chile. Fundó COTA en 2014, después de seis años en obras de cerro. Dirige los encargos de talud y el criterio de corte del estudio.",
  },
  {
    slug: "vicente-palma",
    name: "Vicente Palma",
    role: "Socio",
    focus: "Estructura y obra",
    since: 2014,
    image: "/images/vicente.jpg",
    bio: "Arquitecto PUC. Socio desde el primer predio. Se queda en la obra cuando se vierte. El sismo, el cobre y los oficios pasan por su mesa.",
  },
  {
    slug: "amparo-vidal",
    name: "Amparo Vidal",
    role: "Directora de proyecto",
    focus: "Residencial",
    since: 2017,
    image: "/images/amparo.jpg",
    bio: "Arquitecta UDP. Lleva las casas: programa, DOM, la conversación larga con quien va a habitar. Ñuñoa, Vitacura, la costa.",
  },
  {
    slug: "leon-sepulveda",
    name: "León Sepúlveda",
    role: "Arquitecto",
    focus: "Obra y oficios",
    since: 2019,
    image: "/images/leon.jpg",
    bio: "Arquitecto U. de Chile. Está en la obra los jueves. Resuelve el encuentro con el carpintero y el albañil, no en el detalle de AutoCAD.",
  },
  {
    slug: "isidora-valdes",
    name: "Isidora Valdés",
    role: "Arquitecta",
    focus: "Luz y patio",
    since: 2021,
    image: "/images/isidora.jpg",
    bio: "Arquitecta PUC. Estudia la luz norte de cada predio: aleros, rasgaduras, el patio como instrumento. Maquetas de sol a las 11:00.",
  },
  {
    slug: "tomas-echeverria",
    name: "Tomás Echeverría",
    role: "Materia",
    focus: "Cobre, cal, madera",
    since: 2018,
    image: "/images/tomas.jpg",
    bio: "Interiorista y oficios. Elige muestras, sigue al cobre que se oxida, escribe el manual de materia que se entrega con la llave.",
  },
];

export const awards = [
  {
    year: "2025",
    title: "Premio Obra del Año AOA — residencial",
    project: "Casa Lo Curro",
  },
  {
    year: "2024",
    title: "Bienal de Arquitectura de Chile, selección",
    project: "Bodega Isla de Maipo",
  },
  {
    year: "2024",
    title: "ArchDaily Building of the Year, shortlist",
    project: "Casa Matanzas",
  },
  {
    year: "2023",
    title: "Premio Ciudad y Arquitectura, mención",
    project: "Escuela Precordillera",
  },
  {
    year: "2022",
    title: "Bienal de Arquitectura de Chile, mención",
    project: "Casa Patio Ñuñoa",
  },
  {
    year: "2021",
    title: "Premio Cobre — Arquitectura",
    project: "Pabellón San Cristóbal",
  },
];

export const press = [
  "AOA",
  "ARQ UC",
  "Plataforma Arquitectura",
  "ArchDaily",
  "CA",
  "The Architectural Review",
  "Divisare",
];

export const faqs = [
  {
    q: "¿Toman encargos fuera de Santiago?",
    a: "Sí. Hemos construido en Navidad, Pirque, Isla de Maipo y la Araucanía. El criterio es el mismo: ir al predio, tomar la cota, no proyectar de oídas. Si el predio queda a más de tres horas, el honorario de visita se pacta antes.",
  },
  {
    q: "¿Cuánto tarda un anteproyecto?",
    a: "Entre seis y diez semanas, según el talud y el programa. Incluye dos o tres cortes, maqueta de sitio y una reunión larga. No entregamos un único camino.",
  },
  {
    q: "¿Hacen el permiso de edificación?",
    a: "Sí. Arquitectura, coordinación de cálculo y especialidades, ingreso a la DOM. El permiso es parte del proyecto, no un extra que aparece al final.",
  },
  {
    q: "¿Trabajan con presupuesto en UF?",
    a: "Sí. El honorario y el costo de obra se hablan en UF desde el primer corte. Si el encargo no cabe en el número, se lo decimos en esa reunión —no después de dibujar.",
  },
  {
    q: "¿Qué no hacen?",
    a: "No hacemos flythroughs como argumento. No disfrazamos la estructura. No tomamos un encargo para dejarlo en manos de un junior. Si el predio pide un shopping o un volumen que no se sostiene en corte, no somos el estudio.",
  },
];

export const comunas = [
  "Providencia",
  "Vitacura",
  "Lo Barnechea",
  "Ñuñoa",
  "La Reina",
  "Pirque",
  "Isla de Maipo",
  "Navidad / costa",
  "Otra / fuera de la RM",
];
