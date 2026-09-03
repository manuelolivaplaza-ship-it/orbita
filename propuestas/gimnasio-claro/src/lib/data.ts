export const spaces = [
  {
    slug: "salon",
    name: "Salón",
    kicker: "El corazón del club",
    image: "/images/salon.jpg",
    area: "220 m²",
    summary:
      "Yeso claro, roble y ventanas altas. Aquí empieza el día: movilidad, fuerza libre y el silencio justo antes de la primera clase.",
    details:
      "El salón es la pieza mayor del club. Lo pensamos como una galería que también entrena: pocas máquinas, mucho espacio, cobre a la vista. La luz recorre el piso de roble desde las 5:45 hasta el cierre.",
  },
  {
    slug: "fuerza",
    name: "Fuerza",
    kicker: "Cobre y madera",
    image: "/images/fuerza.jpg",
    area: "90 m²",
    summary:
      "Racks de roble, kettlebells y barras. Un cuarto íntimo para trabajo pesado, con un olivo junto a la ventana.",
    details:
      "Entrenamiento de fuerza con cupos chicos. Cargas progresivas, técnica limpia y un rack por persona. Sin filas, sin música ensordecedora: se oye el hierro y la respiración.",
  },
  {
    slug: "reforma",
    name: "Reforma",
    kicker: "Cuatro reformers",
    image: "/images/reforma.jpg",
    area: "70 m²",
    summary:
      "Sala de pilates reformer con lino, cortinas y cuatro camas de roble. Máximo cuatro personas. Precisión, no espectáculo.",
    details:
      "Las clases de Reforma duran 50 minutos. Emilia y Patricia dirigen el trabajo de centro, movilidad de cadera y fuerza silenciosa. La sala se ventila entre cada bloque.",
  },
  {
    slug: "condicion",
    name: "Condición",
    kicker: "Vista al valle",
    image: "/images/condicion.jpg",
    area: "80 m²",
    summary:
      "Intervalos, saltos y trabajo metabólico frente a los cerros. Cortinas de lino cuando el sol de la tarde pega de lleno.",
    details:
      "Pulso y Cerro se entrenan aquí. El cupo es de diez. El piso está despejado a propósito: se mueve el cuerpo, no el mobiliario.",
  },
  {
    slug: "terraza",
    name: "Terraza",
    kicker: "Aire de Lo Barnechea",
    image: "/images/terraza.jpg",
    area: "140 m²",
    summary:
      "Los Andes al fondo, olivos en maceta y mats de lino. Yoga, movilidad y el running club que baja al Parque La Dehesa.",
    details:
      "Abierta de octubre a abril en horario de mañana y atardecer. En invierno se usa para respirar entre bloques y para el café de las 8.",
  },
  {
    slug: "recuperacion",
    name: "Frío",
    kicker: "Inmersión y quietud",
    image: "/images/recovery.jpg",
    area: "40 m²",
    summary:
      "Tina de cedro, grifería de cobre y toalla de lino. Protocolo de agua fría guiado, no un spa de revista.",
    details:
      "Incluido en Alba Luz y Atelier. Sesiones de 11 minutos, con respiración previa. El agua se mantiene a 8 °C. Hay sauna seca al lado, para el contraste.",
  },
  {
    slug: "lockers",
    name: "Cuerpos",
    kicker: "Antes y después",
    image: "/images/lockers.jpg",
    area: "55 m²",
    summary:
      "Lockers de piedra, banca de roble, espejo de cobre. Toallas de lino incluidas en todas las membresías.",
    details:
      "Duchas con agua del valle, amenidades de oliva y un silencio que se agradece a las 6 de la mañana. No hay televisores.",
  },
  {
    slug: "cafe",
    name: "Café Alba",
    kicker: "Lúcuma, maqui, espresso",
    image: "/images/cafe.jpg",
    area: "28 m²",
    summary:
      "Máquina de cobre, taza de gres y fruta de estación. Un espresso o un jugo de maqui antes de entrenar.",
    details:
      "Tostado de especialidad de la zona, pan de masa madre los sábados, lúcuma cuando hay. El café está incluido en Alba Luz. El resto paga precio de barra.",
  },
] as const;

export const programs = [
  {
    slug: "fuerza",
    name: "Fuerza",
    duration: "55 min",
    cupo: "8",
    image: "/images/fuerza.jpg",
    action: "/images/entrenamiento.jpg",
    lead: "Carga, técnica y paciencia. El trabajo que se queda en el cuerpo.",
    body: "Bloques de sentadilla, peso muerto, press y tirón, con progresión semanal. No es una clase de moda: es un sistema. Camila y Andrés corrigen en voz baja y no dejan pasar una lumbar redonda.",
    forWhom: "Quienes quieren volverse más fuertes sin teatro. Desde quien parte hasta quien ya entrena hace años.",
  },
  {
    slug: "reforma",
    name: "Reforma",
    duration: "50 min",
    cupo: "4",
    image: "/images/reforma.jpg",
    action: "/images/clase-reforma.jpg",
    lead: "Pilates reformer en sala chica. Cuatro camas, una instructora, cero relleno.",
    body: "Centro, cadera, hombros y respiración. Emilia arma las clases con un arco claro: activación, trabajo y cierre. Ideal como complemento de fuerza o como práctica principal.",
    forWhom: "Espaldas ocupadas, postparto, deportistas que necesitan control, y cualquiera que quiera moverse con más precisión.",
  },
  {
    slug: "pulso",
    name: "Pulso",
    duration: "45 min",
    cupo: "10",
    image: "/images/condicion.jpg",
    action: "/images/condicion.jpg",
    lead: "Condición con cabeza. Intervalos, saltos y el corazón trabajando de verdad.",
    body: "Tomas arma bloques de 45 minutos que dejan el cuerpo caliente y la cabeza limpia. Hay opciones de bajo impacto en cada estación. Se sale cansado, no destrozado.",
    forWhom: "Quienes buscan capacidad de trabajo, bajar el estrés de la semana o preparar un cerro el sábado.",
  },
  {
    slug: "tierra",
    name: "Tierra",
    duration: "60 min",
    cupo: "12",
    image: "/images/terraza.jpg",
    action: "/images/terraza.jpg",
    lead: "Movilidad y yoga en la terraza, con los Andes de testigo.",
    body: "Patricia abre y cierra el día con Tierra. Caderas, columna y respiración. En invierno se hace en el salón, con la misma calma.",
    forWhom: "Mañanas lentas, atardeceres y días en que el cuerpo pide amplitud más que carga.",
  },
  {
    slug: "cerro",
    name: "Cerro",
    duration: "70 min",
    cupo: "12",
    image: "/images/exterior.jpg",
    action: "/images/terraza.jpg",
    lead: "Running club. Salimos al Parque La Dehesa y volvemos con las piernas largas.",
    body: "Sábados 8:15. Tres grupos: quien parte, quien sostiene y quien empuja. Tomás marca el ritmo y Patricia espera en el café con agua y sal.",
    forWhom: "Corredores de todos los niveles. Zapatilla de trail o asfalto, da lo mismo: se corre juntos.",
  },
  {
    slug: "frio",
    name: "Frío",
    duration: "25 min",
    cupo: "3",
    image: "/images/recovery.jpg",
    action: "/images/recovery.jpg",
    lead: "Inmersión en agua a 8 °C, respiración y un cierre que ordena el sistema.",
    body: "No es un desafío de redes. Es un protocolo: 4 minutos de respiración, 11 de agua, calor suave. Reservable en bloques de la tarde.",
    forWhom: "Socios Alba Luz y Atelier. Quienes entrenan fuerte y necesitan bajar el volumen del cuerpo.",
  },
] as const;

export const coaches = [
  {
    slug: "patricia-leon",
    name: "Patricia León",
    role: "Directora del club",
    focus: "Tierra · Reforma",
    image: "/images/coach-patricia.jpg",
    quote: "La luz no es decoración. Es parte del entrenamiento.",
    bio: "Fundó ALBA después de veinte años entrenando en salas sin ventanas. Kinesióloga de la Universidad de Chile, se formó en pilates clásico y en movilidad. Dirige el club como se dirige una casa: con ojo, con calma y sin ruido de más.",
  },
  {
    slug: "camila-rojas",
    name: "Camila Rojas",
    role: "Entrenadora principal",
    focus: "Fuerza",
    image: "/images/coach-camila.jpg",
    quote: "La barra no miente. Por eso la cuidamos tanto.",
    bio: "Campeona universitaria de halterofilia y coach de fuerza desde 2016. Trabaja progresiones simples, bien hechas. Si llegas con prisa, te hace bajar el peso. Si llegas con miedo, te enseña a cargar.",
  },
  {
    slug: "andres-silva",
    name: "Andrés Silva",
    role: "Entrenador",
    focus: "Fuerza · movimiento",
    image: "/images/coach-andres.jpg",
    quote: "El cuerpo adulto merece un plan, no un castigo.",
    bio: "Educador físico y papá de dos. Especialista en gente de 35 a 60 que quiere seguir trepando cerros. Su sala es la de las 12:30: seria, precisa, con humor seco.",
  },
  {
    slug: "emilia-vargas",
    name: "Emilia Vargas",
    role: "Instructora",
    focus: "Reforma",
    image: "/images/coach-emilia.jpg",
    quote: "Cuatro reformers. Eso es todo lo que se necesita.",
    bio: "Formada en Buenos Aires y Santiago. Emilia lleva las clases más pedidas del club: Reforma de mediodía y la de las 19:00. Su corrección es táctil, clara y sin teatro.",
  },
  {
    slug: "tomas-nunez",
    name: "Tomás Núñez",
    role: "Entrenador",
    focus: "Pulso · Cerro",
    image: "/images/coach-tomas.jpg",
    quote: "Correr juntos es más fácil. Siempre lo fue.",
    bio: "Corredor de montaña y ex profe de educación física en Ñuñoa. Arma Pulso con estaciones que no humillan y el running del sábado como un rito. Si llueve, se sale igual.",
  },
] as const;

export type DayKey =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

export const days: { key: DayKey; label: string; short: string }[] = [
  { key: "lunes", label: "Lunes", short: "Lun" },
  { key: "martes", label: "Martes", short: "Mar" },
  { key: "miercoles", label: "Miércoles", short: "Mié" },
  { key: "jueves", label: "Jueves", short: "Jue" },
  { key: "viernes", label: "Viernes", short: "Vie" },
  { key: "sabado", label: "Sábado", short: "Sáb" },
  { key: "domingo", label: "Domingo", short: "Dom" },
];

export type ClassSlot = {
  day: DayKey;
  time: string;
  name: string;
  coach: string;
  room: string;
  cupo: number;
};

export const week: ClassSlot[] = [
  { day: "lunes", time: "6:00", name: "Tierra", coach: "Patricia", room: "Salón", cupo: 12 },
  { day: "lunes", time: "7:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "lunes", time: "8:00", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "lunes", time: "12:30", name: "Fuerza", coach: "Andrés", room: "Fuerza", cupo: 8 },
  { day: "lunes", time: "13:30", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "lunes", time: "18:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "lunes", time: "19:00", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "lunes", time: "20:00", name: "Tierra", coach: "Patricia", room: "Salón", cupo: 12 },

  { day: "martes", time: "6:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "martes", time: "7:15", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "martes", time: "8:15", name: "Reforma", coach: "Patricia", room: "Reforma", cupo: 4 },
  { day: "martes", time: "12:30", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "martes", time: "13:30", name: "Fuerza", coach: "Andrés", room: "Fuerza", cupo: 8 },
  { day: "martes", time: "18:00", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "martes", time: "19:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "martes", time: "20:00", name: "Frío", coach: "Andrés", room: "Frío", cupo: 3 },

  { day: "miercoles", time: "6:00", name: "Tierra", coach: "Patricia", room: "Salón", cupo: 12 },
  { day: "miercoles", time: "7:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "miercoles", time: "8:00", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "miercoles", time: "12:30", name: "Fuerza", coach: "Andrés", room: "Fuerza", cupo: 8 },
  { day: "miercoles", time: "13:30", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "miercoles", time: "18:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "miercoles", time: "19:00", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "miercoles", time: "20:00", name: "Tierra", coach: "Patricia", room: "Terraza", cupo: 12 },

  { day: "jueves", time: "6:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "jueves", time: "7:15", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "jueves", time: "8:15", name: "Reforma", coach: "Patricia", room: "Reforma", cupo: 4 },
  { day: "jueves", time: "12:30", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "jueves", time: "13:30", name: "Fuerza", coach: "Andrés", room: "Fuerza", cupo: 8 },
  { day: "jueves", time: "18:00", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "jueves", time: "19:00", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "jueves", time: "20:00", name: "Frío", coach: "Andrés", room: "Frío", cupo: 3 },

  { day: "viernes", time: "6:00", name: "Tierra", coach: "Patricia", room: "Salón", cupo: 12 },
  { day: "viernes", time: "7:00", name: "Fuerza", coach: "Andrés", room: "Fuerza", cupo: 8 },
  { day: "viernes", time: "8:00", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "viernes", time: "12:30", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "viernes", time: "13:30", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "viernes", time: "17:30", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "viernes", time: "18:30", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "viernes", time: "19:30", name: "Tierra", coach: "Patricia", room: "Terraza", cupo: 12 },

  { day: "sabado", time: "8:15", name: "Cerro", coach: "Tomás", room: "Terraza", cupo: 12 },
  { day: "sabado", time: "8:30", name: "Fuerza", coach: "Camila", room: "Fuerza", cupo: 8 },
  { day: "sabado", time: "9:30", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "sabado", time: "10:30", name: "Tierra", coach: "Patricia", room: "Terraza", cupo: 12 },
  { day: "sabado", time: "11:30", name: "Pulso", coach: "Tomás", room: "Condición", cupo: 10 },
  { day: "sabado", time: "16:00", name: "Frío", coach: "Andrés", room: "Frío", cupo: 3 },

  { day: "domingo", time: "9:00", name: "Tierra", coach: "Patricia", room: "Salón", cupo: 12 },
  { day: "domingo", time: "10:15", name: "Reforma", coach: "Emilia", room: "Reforma", cupo: 4 },
  { day: "domingo", time: "11:30", name: "Fuerza", coach: "Andrés", room: "Fuerza", cupo: 8 },
];

export const plans = [
  {
    slug: "dia",
    name: "Pase del día",
    price: 22990,
    period: "el día",
    highlight: false,
    lead: "Para conocer el club con calma.",
    includes: [
      "Acceso a salas y terraza",
      "Una clase del día, sujeta a cupo",
      "Toalla de lino y duchas",
      "Café de barra a precio de socio",
    ],
    note: "Se reserva con 12 horas de anticipación.",
  },
  {
    slug: "alba",
    name: "Alba",
    price: 94990,
    period: "al mes",
    highlight: false,
    lead: "El plan con el que la mayoría se queda.",
    includes: [
      "Acceso abierto al club",
      "8 clases guiadas al mes",
      "Toalla, lockers y duchas",
      "Evaluación inicial de 40 min",
      "Invitado un día al trimestre",
    ],
    note: "Sin matrícula. Mes a mes, o 10% menos al pagar el trimestre.",
  },
  {
    slug: "luz",
    name: "Alba Luz",
    price: 134990,
    period: "al mes",
    highlight: true,
    lead: "Clases sin tope y el cuarto de frío.",
    includes: [
      "Todo lo de Alba",
      "Clases ilimitadas, con reserva",
      "Frío y sauna incluidos",
      "Café Alba de lunes a viernes",
      "2 visitas de invitado al mes",
    ],
    note: "El plan de quienes entrenan cuatro o más días.",
  },
  {
    slug: "atelier",
    name: "Atelier",
    price: 189990,
    period: "al mes",
    highlight: false,
    lead: "Un cupo íntimo y trabajo 1 a 1.",
    includes: [
      "Todo lo de Alba Luz",
      "4 sesiones privadas de 50 min",
      "Plan escrito cada 6 semanas",
      "Horario preferente de Frío",
      "Estacionamiento reservado",
    ],
    note: "Solo 18 cupos en el club. Lista de espera cuando se llena.",
  },
] as const;

export const principles = [
  {
    n: "01",
    title: "Luz de verdad",
    text: "Las salas miran al valle. Entrenamos con el día, no contra él.",
  },
  {
    n: "02",
    title: "Cupos chicos",
    text: "De 4 a 12 personas. Alguien te ve. Alguien te corrige.",
  },
  {
    n: "03",
    title: "Fuerza con oficio",
    text: "Progresión, no improvisación. El ego se queda en el estacionamiento.",
  },
  {
    n: "04",
    title: "Cobre y calma",
    text: "Materiales de Chile, silencio decente y un café que no sabe a máquina.",
  },
] as const;

export const stats = [
  { value: "850", unit: "m²", label: "de club abierto a la luz" },
  { value: "4–12", unit: "", label: "personas por clase" },
  { value: "5:45", unit: "", label: "abre el primer candado" },
  { value: "18", unit: "", label: "cupos Atelier en todo el club" },
] as const;
