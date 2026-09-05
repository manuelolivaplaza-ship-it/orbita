export const site = {
  name: "Obsidiana",
  tagline: "Club de entrenamiento privado",
  city: "Vitacura, Santiago",
  address: "Av. Alonso de Córdova 3102",
  comuna: "Vitacura",
  region: "Región Metropolitana",
  country: "Chile",
  phoneDisplay: "+56 9 8765 4321",
  phoneTel: "+56987654321",
  email: "reservas@obsidiana.cl",
  instagram: "https://instagram.com/obsidiana.club",
  instagramHandle: "@obsidiana.club",
  whatsapp:
    "https://wa.me/56987654321?text=Hola%20Obsidiana%2C%20quiero%20reservar%20una%20visita.",
  maps: "https://maps.google.com/?q=Av.+Alonso+de+C%C3%B3rdova+3102,+Vitacura",
  hours: [
    { days: "Lunes a viernes", time: "05:30 — 22:00" },
    { days: "Sábado", time: "07:00 — 18:00" },
    { days: "Domingo", time: "08:00 — 14:00" },
  ],
  members: 180,
  available: 11,
  area: "1.200",
  coaches: 12,
  founded: 2024,
} as const;

export const nav = [
  { href: "/el-club", label: "El club" },
  { href: "/entrenamiento", label: "Entrenamiento" },
  { href: "/espacio", label: "El espacio" },
  { href: "/coaches", label: "Coaches" },
  { href: "/membresia", label: "Membresía" },
] as const;

export const disciplines = [
  {
    n: "01",
    slug: "fuerza",
    title: "Fuerza",
    kicker: "Piso",
    image: "/images/strength.jpg",
    summary:
      "Barras, pesas rusas y racks. El trabajo lento, pesado y preciso que construye un cuerpo que dura.",
    body: "Programación de fuerza lineal y ondulada, levantamiento olímpico accesible y trabajo unilateral. Sin máquinas de aislamiento como centro del método: el piso es el laboratorio.",
  },
  {
    n: "02",
    slug: "condicion",
    title: "Condición",
    kicker: "Performance",
    image: "/images/lift.jpg",
    summary:
      "Capacidad de trabajo con pulso. Intervalos, densidades y umbrales medidos — nunca el caos por el caos.",
    body: "Condición entendida como economía: moverse más tiempo, con más calidad, recuperando antes. Cada bloque tiene un propósito fisiológico, no un playlist.",
  },
  {
    n: "03",
    slug: "movilidad",
    title: "Movilidad",
    kicker: "Studio",
    image: "/images/mobility.jpg",
    summary:
      "Rango, control y respiración. El cuerpo que se abre es el que después puede cargar.",
    body: "Sesiones de 50 minutos en el studio: movilidad articular, control motor y trabajo de suelo. Es entrenamiento, no relleno entre series.",
  },
  {
    n: "04",
    slug: "recuperacion",
    title: "Recuperación",
    kicker: "Termal",
    image: "/images/recovery.jpg",
    summary:
      "Sauna de cedro, inmersión fría y silencio. El contraste térmico como práctica, no como accesorio.",
    body: "Protocolos de calor y frío, luz baja, toallas negras, cero conversación forzada. La recuperación es parte del programa, no un premio al final.",
  },
] as const;

export const spaces = [
  {
    title: "Piso de fuerza",
    meta: "420 m²",
    image: "/images/hero.jpg",
    text: "Piedra volcánica, racks negros y una fila de ventanas al cordón de los Andes. El corazón del recinto. Sin televisiones. Sin música a todo volumen.",
  },
  {
    title: "Studio",
    meta: "110 m²",
    image: "/images/mobility.jpg",
    text: "Suelo de roble ahumado, luz cobre y un ficus. Movilidad, suelo y respiración. Doce colchonetas. Nunca más de diez personas.",
  },
  {
    title: "Suite térmica",
    meta: "Calor / frío",
    image: "/images/recovery.jpg",
    text: "Sauna de cedro a 85 °C, inmersión a 8 °C, duchas de cobre. Un ritual de doce minutos que cierra el entrenamiento.",
  },
  {
    title: "Vestidores",
    meta: "Roble y piedra",
    image: "/images/lockers.jpg",
    text: "Lockers de roble ahumado, banca de piedra, toallas negras. Un espejo. Lo justo.",
  },
  {
    title: "Recepción",
    meta: "Umbral",
    image: "/images/reception.jpg",
    text: "Un mostrador de piedra, un florero de cobre, una puerta. El recinto empieza antes de cambiarse.",
  },
] as const;

export const coaches = [
  {
    slug: "camila-reyes",
    name: "Camila Reyes",
    role: "Head coach · Fuerza",
    image: "/images/coach-camila.jpg",
    years: "14 años",
    origin: "Providencia",
    quote: "El ego se queda en la calle. Acá entra el cuerpo, y el cuerpo no miente.",
    bio: "Camila dirige el piso de fuerza y la programación del club. Formada en ciencias del deporte en la Universidad de Chile, pasó una década en high performance antes de abrir el recinto. Cree en pocas alzadas, bien hechas, durante muchos años.",
  },
  {
    slug: "matias-contreras",
    name: "Matías Contreras",
    role: "Fuerza y acondicionamiento",
    image: "/images/coach-matias.jpg",
    years: "11 años",
    origin: "Ñuñoa",
    quote: "La constancia no es un carácter. Es un sistema. Nosotros lo diseñamos.",
    bio: "Matías trabaja con socios que vienen de escritorios largos y agendas imposibles. Su método es quirúrgico: menos volumen, más intención, recuperación sagrada. Ex atleta de rugby, hoy entrena gente que no puede lesionarse.",
  },
  {
    slug: "elena-vargas",
    name: "Elena Vargas",
    role: "Movilidad y recuperación",
    image: "/images/coach-elena.jpg",
    years: "16 años",
    origin: "Valparaíso",
    quote: "Nadie se rompe por entrenar fuerte. Se rompe por no saber soltar.",
    bio: "Elena viene de la danza contemporánea y de la fisioterapia. En Obsidiana diseña el studio y los protocolos térmicos. Trabaja el rango como si fuera fuerza: con respeto, con tiempo, sin teatro.",
  },
  {
    slug: "diego-salinas",
    name: "Diego Salinas",
    role: "Performance",
    image: "/images/coach-diego.jpg",
    years: "9 años",
    origin: "La Reina",
    quote: "Sudar no es el objetivo. El objetivo es volver mañana.",
    bio: "Diego conduce los bloques de condición. Mide, ajusta, no grita. Trabajó con selecciones juveniles y se cansó del ruido. En el club traduce fisiología a sesiones que caben en una vida real de Santiago.",
  },
] as const;

export const plans = [
  {
    id: "studio",
    name: "Studio",
    price: "9,8",
    unit: "UF / mes",
    blurb: "Para quien busca un recinto serio, sin el ruido de un gimnasio abierto.",
    features: [
      "Acceso al piso de fuerza y al studio",
      "Programación mensual",
      "Inducción de 60 minutos",
      "Casillero del día",
      "Toallas y amenities",
    ],
    cta: "Solicitar Studio",
    featured: false,
  },
  {
    id: "club",
    name: "Club",
    price: "14,5",
    unit: "UF / mes",
    blurb: "El recinto completo. Fuerza, studio, suite térmica y cuatro sesiones guiadas.",
    features: [
      "Todo lo de Studio",
      "Suite térmica ilimitada",
      "4 sesiones privadas al mes",
      "Evaluación trimestral",
      "Locker nominado",
      "Invitado 2 veces al mes",
    ],
    cta: "Solicitar Club",
    featured: true,
  },
  {
    id: "reservado",
    name: "Reservado",
    price: "22",
    unit: "UF / mes",
    blurb: "Doce sesiones, horarios preferentes y un coach de cabecera.",
    features: [
      "Todo lo de Club",
      "12 sesiones privadas al mes",
      "Coach de cabecera",
      "Horario preferente 05:30–08:00",
      "Programa de viaje",
      "Acceso a la lista de espera de talleres",
    ],
    cta: "Solicitar Reservado",
    featured: false,
  },
] as const;

export const faqs = [
  {
    q: "¿Hacen clase de prueba?",
    a: "No en el sentido masivo. La primera visita es individual, de 40 minutos, con un coach. Recorres el recinto, conversamos de tu entrenamiento y, si hay cupo, se abre la postulación.",
  },
  {
    q: "¿Por qué los precios están en UF?",
    a: "Porque el club se piensa a largo plazo. La UF evita reajustes bruscos y mantiene la membresía alineada con el costo real de operar un recinto de este estándar en Santiago.",
  },
  {
    q: "¿Hay contrato de permanencia?",
    a: "Sí. Seis meses, con mes de aviso. No hay letras chicas ni cobros de salida disfrazados. La constancia es parte del método: un mes no alcanza.",
  },
  {
    q: "¿Puedo ir cuando quiera?",
    a: "Dentro del horario del club, sí. El piso de fuerza es de acceso libre para socios. El studio y las sesiones privadas se reservan en la app, con 12 horas de anticipación.",
  },
  {
    q: "¿Aceptan todos los postulantes?",
    a: "No. Hay 180 cupos y una lista. Buscamos personas que quieran entrenar en silencio, con método, durante años. Si buscas un recinto social o un estudio de clases colectivas, hay mejores opciones en la comuna.",
  },
  {
    q: "¿Hay estacionamiento?",
    a: "Sí. Subterráneo para socios, con 42 cupos. También llegas fácil por Alonso de Córdova; el metro Escuela Militar queda a doce minutos a pie.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Entré porque estaba cansada de gimnasios donde nadie te mira y la música no te deja pensar. Acá me enseñaron a cargar. Tres años después, es el único lugar de Santiago donde me quedo en silencio a propósito.",
    name: "Francisca Aldunate",
    role: "Abogada · Las Condes",
  },
  {
    quote:
      "Viajo mucho. Lo que más valoro no es el cobre ni la sauna: es que el programa me espera. Llego un martes a las seis de la mañana y alguien ya sabe qué hice el mes anterior.",
    name: "Nicolás Berger",
    role: "Emprendedor · Vitacura",
  },
  {
    quote:
      "Opero. No puedo lesionarme por un ego de sentadilla. Elena y Matías construyeron un entrenamiento que me deja más capaz, no más rota. Eso, en mi oficio, no tiene precio.",
    name: "María José Urrutia",
    role: "Cirujana · Providencia",
  },
] as const;

export const ritual = [
  { time: "05:30", title: "Apertura", text: "Piso de fuerza en silencio. Luz baja. Café de grano en recepción." },
  { time: "07:00", title: "Studio I", text: "Primera sesión de movilidad. Diez personas. Cincuenta minutos." },
  { time: "12:30", title: "Contraste", text: "Sauna e inmersión. El recinto se vacía un poco. Se oye el agua." },
  { time: "18:00", title: "Performance", text: "Bloque de condición. Pulso medido. Cero espectáculo." },
  { time: "21:30", title: "Cierre", text: "Últimas alzadas. Toallas limpias. La puerta de cobre se apaga a las 22:00." },
] as const;

export const principles = [
  {
    n: "01",
    title: "Silencio",
    text: "Sin pantallas, sin DJs, sin gritos de coach. El ruido más alto es una barra que toca el piso.",
  },
  {
    n: "02",
    title: "Precisión",
    text: "Pocas cosas, bien hechas. Programación con nombre y apellido, no un circuito fotocopiado.",
  },
  {
    n: "03",
    title: "Permanencia",
    text: "Entrenamos para una década, no para el verano. El cupo es limitado para que eso sea posible.",
  },
] as const;

export const comunas = [
  "Vitacura",
  "Las Condes",
  "Lo Barnechea",
  "Providencia",
  "La Reina",
  "Ñuñoa",
  "Santiago",
  "Otra comuna",
] as const;
