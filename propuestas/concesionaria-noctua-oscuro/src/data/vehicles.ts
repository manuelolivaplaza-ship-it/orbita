export type Temperament = "corte" | "estela" | "territorio";
export type Powertrain = "atmosferico" | "turbo" | "hibrido" | "electrico";
export type Status = "disponible" | "reservada" | "proxima";

export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  priceCLP: number;
  status: Status;
  temperament: Temperament;
  powertrain: Powertrain;
  featured?: boolean;
  km: number;
  color: string;
  power: string;
  acceleration: string;
  drivetrain: string;
  excerpt: string;
  story: string;
  image: string;
  gallery: string[];
  specs: { label: string; value: string }[];
  included: string[];
};

export const temperamentLabel: Record<Temperament, string> = {
  corte: "Corte",
  estela: "Estela",
  territorio: "Territorio",
};

export const powertrainLabel: Record<Powertrain, string> = {
  atmosferico: "Atmosférico",
  turbo: "Turbo",
  hibrido: "Híbrido",
  electrico: "Eléctrico",
};

export const statusLabel: Record<Status, string> = {
  disponible: "Disponible",
  reservada: "Reservada",
  proxima: "Próxima",
};

export const vehicles: Vehicle[] = [
  {
    slug: "porsche-911-gt3-touring",
    brand: "Porsche",
    model: "911 GT3 Touring",
    year: 2024,
    priceCLP: 189_900_000,
    status: "disponible",
    temperament: "corte",
    powertrain: "atmosferico",
    featured: true,
    km: 3_200,
    color: "Negro medianoche",
    power: "375 kW",
    acceleration: "3,4 s",
    drivetrain: "RWD",
    excerpt: "Sin alerón. Sin teatro. El 4.0, a las veintidós.",
    story:
      "El Touring no lleva alerón porque no lo necesita. De noche, en la cuesta de Manquehue, el bóxer atmosférico basta: nueve mil vueltas y un cambio manual que todavía pide la mano. Un dueño, 3.200 kilómetros, libros Porsche Chile al día. Es la pieza que más veces hemos sacado después de las veintidós, cuando el valle ya no tiene ruido que competir.",
    image: "/images/gt3.jpg",
    gallery: ["/images/gt3.jpg", "/images/headlight.jpg", "/images/wheel.jpg", "/images/cabin.jpg"],
    specs: [
      { label: "Motor", value: "4.0 bóxer 6 atmosférico" },
      { label: "Potencia", value: "375 kW / 510 hp" },
      { label: "0–100 km/h", value: "3,4 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Cambio", value: "Manual 6" },
      { label: "Plazas", value: "2" },
      { label: "Kilometraje", value: "3.200 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Historial Porsche Chile",
      "Permiso de circulación 2026",
      "Revisión técnica vigente",
    ],
  },
  {
    slug: "aston-martin-db12",
    brand: "Aston Martin",
    model: "DB12",
    year: 2024,
    priceCLP: 174_900_000,
    status: "disponible",
    temperament: "corte",
    powertrain: "turbo",
    featured: true,
    km: 5_840,
    color: "Verde ónix",
    power: "500 kW",
    acceleration: "3,6 s",
    drivetrain: "RWD",
    excerpt: "Santiago–Zapallar, sin alzar la voz.",
    story:
      "Verde ónix, como el valle cuando ya no queda sol. El DB12 es el gran turismo de la casa: cuero, V8 y una distancia entre ejes que convierte la Ruta 68 en un pasillo. Cinco mil ochocientos kilómetros, un dueño, historial Aston Martin Santiago. Lo mostramos de noche porque de día el verde se vuelve un anuncio. De noche, es una decisión.",
    image: "/images/db12.jpg",
    gallery: ["/images/db12.jpg", "/images/cabin.jpg", "/images/lounge.jpg"],
    specs: [
      { label: "Motor", value: "4.0 V8 biturbo" },
      { label: "Potencia", value: "500 kW / 680 hp" },
      { label: "0–100 km/h", value: "3,6 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Cambio", value: "Automático 8" },
      { label: "Plazas", value: "2+2" },
      { label: "Kilometraje", value: "5.840 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Neumáticos nuevos",
      "Entrega en casa o en NOCTUA",
    ],
  },
  {
    slug: "mercedes-amg-gt-63-s-e",
    brand: "Mercedes-AMG",
    model: "GT 63 S E Performance",
    year: 2023,
    priceCLP: 159_900_000,
    status: "disponible",
    temperament: "estela",
    powertrain: "hibrido",
    km: 11_400,
    color: "Negro obsidiana",
    power: "620 kW",
    acceleration: "2,9 s",
    drivetrain: "AWD",
    excerpt: "Cuatro puertas. Ochocientos caballos. Lluvia.",
    story:
      "Lo usamos cuando la Costanera Norte se vacía. Un cuatro puertas que parece un corte, con el V8 y el eje eléctrico empujando al mismo tiempo. Once mil kilómetros, un ejecutivo de Las Condes que lo dejó porque se fue a Londres. La ficha es violenta. El gesto, de noche, es preciso: faros, asfalto mojado, y un silencio híbrido hasta que pides el aliento.",
    image: "/images/amg.jpg",
    gallery: ["/images/amg.jpg", "/images/headlight.jpg", "/images/santiago.jpg"],
    specs: [
      { label: "Motor", value: "4.0 V8 + eléctrico" },
      { label: "Potencia combinada", value: "620 kW / 843 hp" },
      { label: "0–100 km/h", value: "2,9 s" },
      { label: "Tracción", value: "Integral" },
      { label: "Autonomía eléctrica", value: "12 km" },
      { label: "Plazas", value: "4" },
      { label: "Kilometraje", value: "11.400 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Historial Mercedes-Benz Chile",
      "Permiso de circulación 2026",
      "Cargador de muro 11 kW",
    ],
  },
  {
    slug: "bmw-m5-competition",
    brand: "BMW",
    model: "M5 Competition",
    year: 2025,
    priceCLP: 134_900_000,
    status: "disponible",
    temperament: "estela",
    powertrain: "hibrido",
    km: 2_140,
    color: "Zafiro negro",
    power: "535 kW",
    acceleration: "3,5 s",
    drivetrain: "AWD",
    excerpt: "La oficina se cierra a las veintiuna. El M5, no.",
    story:
      "Seminueva, 2.140 kilómetros, un solo dueño que pidió discreción y un auto que llegara a Zapallar en silencio y saliera de Vitacura como un M. El G90 es el sedán más extraño de la casa: híbrido, pesado, brutalmente preciso cuando la noche limpia la avenida. Zafiro negro, sin filetes. Entra porque todavía se puede conducir un M5 sin que nadie lo celebre.",
    image: "/images/m5.jpg",
    gallery: ["/images/m5.jpg", "/images/cabin.jpg", "/images/wheel.jpg"],
    specs: [
      { label: "Motor", value: "4.4 V8 + eléctrico" },
      { label: "Potencia combinada", value: "535 kW / 727 hp" },
      { label: "0–100 km/h", value: "3,5 s" },
      { label: "Tracción", value: "M xDrive" },
      { label: "Cambio", value: "M Steptronic 8" },
      { label: "Plazas", value: "5" },
      { label: "Kilometraje", value: "2.140 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "BMW Service Inclusive",
      "Permiso de circulación 2026",
      "Neumáticos en 90%",
    ],
  },
  {
    slug: "audi-rs6-avant-performance",
    brand: "Audi",
    model: "RS6 Avant Performance",
    year: 2024,
    priceCLP: 119_900_000,
    status: "disponible",
    temperament: "estela",
    powertrain: "turbo",
    featured: true,
    km: 9_870,
    color: "Gris daytona",
    power: "463 kW",
    acceleration: "3,4 s",
    drivetrain: "AWD",
    excerpt: "El familiar que no pide disculpas.",
    story:
      "El RS6 es el secreto a voces de Santiago: cinco plazas, maletero de verdad y un V8 que hace el colegio y Farellones con la misma cara. Gris daytona, un dueño, 9.870 km. Lo mostramos de noche porque de día parece un station. A las veintitrés, en la Costanera, deja de parecerlo. Quattro, Performance, y la pieza que más padres precisos nos piden sin decir la palabra padre.",
    image: "/images/rs6.jpg",
    gallery: ["/images/rs6.jpg", "/images/santiago.jpg", "/images/wheel.jpg"],
    specs: [
      { label: "Motor", value: "4.0 V8 TFSI" },
      { label: "Potencia", value: "463 kW / 630 hp" },
      { label: "0–100 km/h", value: "3,4 s" },
      { label: "Tracción", value: "Quattro" },
      { label: "Cambio", value: "Tiptronic 8" },
      { label: "Plazas", value: "5" },
      { label: "Kilometraje", value: "9.870 km" },
      { label: "Maletero", value: "565 – 1.680 L" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Historial Audi Chile",
      "Set de invierno opcional",
    ],
  },
  {
    slug: "audi-rs-etron-gt",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2025,
    priceCLP: 128_900_000,
    status: "proxima",
    temperament: "estela",
    powertrain: "electrico",
    km: 0,
    color: "Gris mythology",
    power: "440 kW",
    acceleration: "3,3 s",
    drivetrain: "AWD",
    excerpt: "Llega en octubre. Ya tiene hora.",
    story:
      "Una llegada de octubre: RS e-tron GT, gris mythology, cero kilómetros. El gran turismo eléctrico de Ingolstadt, bajo, ancho, con una firma lumínica que en NOCTUA se lee como un instrumento. Se reserva ahora, con pie y fecha de entrega. Lo vamos a mostrar de noche, con la ciudad detrás del vidrio, porque el silencio de este auto no se entiende a las once de la mañana.",
    image: "/images/etron.jpg",
    gallery: ["/images/etron.jpg", "/images/showroom.jpg", "/images/headlight.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "472 km" },
      { label: "Potencia", value: "440 kW / 598 hp" },
      { label: "0–100 km/h", value: "3,3 s" },
      { label: "Tracción", value: "Quattro" },
      { label: "Batería", value: "93,4 kWh" },
      { label: "Plazas", value: "4" },
      { label: "Llegada", value: "Octubre 2026" },
      { label: "Carga DC", value: "hasta 270 kW" },
    ],
    included: [
      "Reserva con pie",
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Cargador de muro 11 kW",
    ],
  },
  {
    slug: "range-rover-autobiography",
    brand: "Land Rover",
    model: "Range Rover Autobiography",
    year: 2024,
    priceCLP: 139_900_000,
    status: "disponible",
    temperament: "territorio",
    powertrain: "turbo",
    km: 7_220,
    color: "Negro santorini",
    power: "390 kW",
    acceleration: "4,6 s",
    drivetrain: "AWD",
    excerpt: "La casa, elevada sobre las luces.",
    story:
      "Negro santorini, techo flotante, 7.220 km. El Autobiography es la pieza de territorio: Vitacura a Farellones sin cambiar de auto, y un interior que de noche se parece más a un living que a una cabina. Un dueño, servicio Land Rover al día. Lo estacionamos frente al pabellón porque, visto desde la Costanera, parece una sala que aprendió a moverse.",
    image: "/images/range.jpg",
    gallery: ["/images/range.jpg", "/images/facade.jpg", "/images/santiago.jpg"],
    specs: [
      { label: "Motor", value: "4.4 V8" },
      { label: "Potencia", value: "390 kW / 530 hp" },
      { label: "0–100 km/h", value: "4,6 s" },
      { label: "Tracción", value: "Integral" },
      { label: "Plazas", value: "5" },
      { label: "Altura libre", value: "219 – 294 mm" },
      { label: "Kilometraje", value: "7.220 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Barra de techo original",
      "Entrega en casa o en NOCTUA",
    ],
  },
  {
    slug: "alpine-a110-s",
    brand: "Alpine",
    model: "A110 S",
    year: 2024,
    priceCLP: 64_900_000,
    status: "reservada",
    temperament: "corte",
    powertrain: "turbo",
    km: 1_840,
    color: "Azul abismo",
    power: "221 kW",
    acceleration: "4,2 s",
    drivetrain: "RWD",
    excerpt: "Ya tiene dueño. Queda la espera.",
    story:
      "Mil ciento diez kilos, un turbo preciso y la carretera de Farellones como instrumento. Esta A110 S en azul abismo está reservada. Si el gesto te interesa —un auto pequeño que no necesita anunciarse—, te dejamos en lista. Las Alpine no se quedan mucho en el piso: de noche, en la curva, pesan menos que la duda.",
    image: "/images/alpine.jpg",
    gallery: ["/images/alpine.jpg", "/images/wheel.jpg", "/images/santiago.jpg"],
    specs: [
      { label: "Motor", value: "1.8 turbo 4" },
      { label: "Potencia", value: "221 kW / 300 hp" },
      { label: "0–100 km/h", value: "4,2 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Peso", value: "1.114 kg" },
      { label: "Plazas", value: "2" },
      { label: "Kilometraje", value: "1.840 km" },
      { label: "Estado", value: "Reservada" },
    ],
    included: [
      "Lista de espera",
      "Aviso al liberarse",
      "Otras unidades en camino",
      "Visita a la casa igualmente bienvenida",
    ],
  },
  {
    slug: "lexus-lc-500",
    brand: "Lexus",
    model: "LC 500",
    year: 2023,
    priceCLP: 79_900_000,
    status: "disponible",
    temperament: "corte",
    powertrain: "atmosferico",
    km: 14_600,
    color: "Negro grafito",
    power: "351 kW",
    acceleration: "4,7 s",
    drivetrain: "RWD",
    excerpt: "Un V8 que todavía respira. Un bulevar que todavía existe.",
    story:
      "El LC 500 es el noctámbulo de la casa: V8 atmosférico, capó largo, un interior color hueso que se enciende bajo el farol. Catorce mil kilómetros, un dueño de Providencia que lo usaba los jueves. No es el más rápido del piso. Es el que mejor entiende las diez de la noche en Isidora vacía, cuando Santiago por fin se parece a una ciudad que se puede recorrer.",
    image: "/images/lc500.jpg",
    gallery: ["/images/lc500.jpg", "/images/lounge.jpg", "/images/cabin.jpg"],
    specs: [
      { label: "Motor", value: "5.0 V8 atmosférico" },
      { label: "Potencia", value: "351 kW / 471 hp" },
      { label: "0–100 km/h", value: "4,7 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Cambio", value: "Automático 10" },
      { label: "Plazas", value: "4" },
      { label: "Kilometraje", value: "14.600 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Historial Lexus Chile",
      "Revisión técnica vigente",
    ],
  },
];

export function getVehicleOptions() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
    label: `${vehicle.brand} ${vehicle.model}`,
  }));
}

export function getVehicle(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getFeatured() {
  return vehicles.filter((vehicle) => vehicle.featured);
}

export function getRelated(slug: string, limit = 3) {
  const current = getVehicle(slug);
  if (!current) return vehicles.slice(0, limit);
  return vehicles
    .filter((vehicle) => vehicle.slug !== slug)
    .sort((a, b) => {
      const aScore = a.temperament === current.temperament ? 1 : 0;
      const bScore = b.temperament === current.temperament ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}
