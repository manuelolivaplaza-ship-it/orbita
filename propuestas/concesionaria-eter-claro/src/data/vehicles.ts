export type Powertrain = "electrico" | "hibrido" | "combustion";
export type Status = "disponible" | "reservada" | "proxima";

export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  priceCLP: number;
  status: Status;
  powertrain: Powertrain;
  featured?: boolean;
  km: number;
  color: string;
  power: string;
  acceleration: string;
  rangeKm?: number;
  drivetrain: string;
  excerpt: string;
  story: string;
  image: string;
  gallery: string[];
  specs: { label: string; value: string }[];
  included: string[];
};

export const vehicles: Vehicle[] = [
  {
    slug: "lucid-air-grand-touring",
    brand: "Lucid",
    model: "Air Grand Touring",
    year: 2025,
    priceCLP: 139_900_000,
    status: "disponible",
    powertrain: "electrico",
    featured: true,
    km: 0,
    color: "Plata andina",
    power: "611 kW",
    acceleration: "3,0 s",
    rangeKm: 660,
    drivetrain: "AWD",
    excerpt: "La distancia más larga, en el menor ruido.",
    story:
      "El Air no entra a la casa por su ficha. Entra porque, en la niebla de Lo Barnechea, parece desaparecer. Seiscientos kilómetros de silencio y un interior tallado en luz. Para quien conduce hacia el norte o hacia la cordillera sin querer volver a un motor.",
    image: "/images/hero.jpg",
    gallery: ["/images/hero.jpg", "/images/interior.jpg", "/images/wheel.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "660 km" },
      { label: "Potencia", value: "611 kW / 819 hp" },
      { label: "0–100 km/h", value: "3,0 s" },
      { label: "Tracción", value: "Integral" },
      { label: "Batería", value: "112 kWh" },
      { label: "Plazas", value: "5" },
      { label: "Maletero", value: "627 L" },
      { label: "Carga DC", value: "hasta 300 kW" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Revisión técnica vigente",
      "Entrega en casa o en ETER",
    ],
  },
  {
    slug: "porsche-taycan-4s",
    brand: "Porsche",
    model: "Taycan 4S",
    year: 2024,
    priceCLP: 124_900_000,
    status: "disponible",
    powertrain: "electrico",
    featured: true,
    km: 8_420,
    color: "Blanco perla",
    power: "360 kW",
    acceleration: "3,7 s",
    rangeKm: 512,
    drivetrain: "AWD",
    excerpt: "Eléctrico, pero con pulso.",
    story:
      "Un Taycan 4S de un solo dueño, seminuevo, con el silencio de un EV y el chasis que Porsche no negocia. Blanco perla sobre hormigón claro: la pieza que más veces hemos sacado a la cordillera al amanecer. Quien la prueba, entiende por qué no la mezclamos con el resto del patio ajeno.",
    image: "/images/taycan.jpg",
    gallery: ["/images/taycan.jpg", "/images/interior.jpg", "/images/wheel.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "512 km" },
      { label: "Potencia", value: "360 kW / 490 hp" },
      { label: "0–100 km/h", value: "3,7 s" },
      { label: "Tracción", value: "Integral" },
      { label: "Batería", value: "Performance Battery Plus" },
      { label: "Plazas", value: "4" },
      { label: "Kilometraje", value: "8.420 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Historial Porsche Chile",
      "Permiso de circulación 2026",
      "Neumáticos nuevos",
    ],
  },
  {
    slug: "mercedes-eqs-450",
    brand: "Mercedes-Benz",
    model: "EQS 450+",
    year: 2024,
    priceCLP: 118_500_000,
    status: "disponible",
    powertrain: "electrico",
    km: 12_300,
    color: "Blanco opalino",
    power: "245 kW",
    acceleration: "6,2 s",
    rangeKm: 723,
    drivetrain: "RWD",
    excerpt: "Una sala de estar que se desplaza.",
    story:
      "El EQS es la pieza más serena de la casa. Hyperscreen, suspensión que borra el Mapocho y una autonomía que permite Santiago–Viña ida y vuelta sin mirar el cargador. No es un auto para ser visto: es un auto para no sentir la ciudad.",
    image: "/images/eqs.jpg",
    gallery: ["/images/eqs.jpg", "/images/interior.jpg", "/images/showroom.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "723 km" },
      { label: "Potencia", value: "245 kW / 333 hp" },
      { label: "0–100 km/h", value: "6,2 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Batería", value: "108 kWh" },
      { label: "Plazas", value: "5" },
      { label: "Kilometraje", value: "12.300 km" },
      { label: "Carga DC", value: "hasta 200 kW" },
    ],
    included: [
      "Transferencia incluida",
      "Cargador de muro 11 kW",
      "Permiso de circulación 2026",
      "Servicio Mercedes vigente",
    ],
  },
  {
    slug: "range-rover-sport-p400e",
    brand: "Land Rover",
    model: "Range Rover Sport P400e",
    year: 2025,
    priceCLP: 109_900_000,
    status: "disponible",
    powertrain: "hibrido",
    featured: true,
    km: 3_180,
    color: "Verde niebla",
    power: "338 kW",
    acceleration: "5,5 s",
    rangeKm: 70,
    drivetrain: "AWD",
    excerpt: "La montaña, con la puerta abierta.",
    story:
      "Verde niebla, como el valle a las ocho de la mañana. El Sport P400e entra y sale de lo eléctrico sin anunciar el cambio. Para quien vive entre Vitacura y Farellones, y quiere bajar a la oficina en silencio y subir el sábado con el V6 despierto.",
    image: "/images/range-rover.jpg",
    gallery: [
      "/images/range-rover.jpg",
      "/images/andes.jpg",
      "/images/interior.jpg",
    ],
    specs: [
      { label: "Autonomía eléctrica", value: "70 km" },
      { label: "Potencia combinada", value: "338 kW / 460 hp" },
      { label: "0–100 km/h", value: "5,5 s" },
      { label: "Tracción", value: "Integral" },
      { label: "Motor", value: "3.0 I6 + eléctrico" },
      { label: "Plazas", value: "5" },
      { label: "Kilometraje", value: "3.180 km" },
      { label: "Altura libre", value: "279 mm" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Barra de techo original",
      "Entrega en casa o en ETER",
    ],
  },
  {
    slug: "volvo-ex90-twin",
    brand: "Volvo",
    model: "EX90 Twin Motor",
    year: 2025,
    priceCLP: 94_900_000,
    status: "disponible",
    powertrain: "electrico",
    km: 0,
    color: "Blanco glaciar",
    power: "300 kW",
    acceleration: "5,9 s",
    rangeKm: 585,
    drivetrain: "AWD",
    excerpt: "Siete plazas, una sola calma.",
    story:
      "El EX90 es la pieza familiar de la casa: tres filas, lidar, y esa luz sueca que en Santiago se siente como un respiro. Nueva, sin kilometraje, lista para un colegio en Las Condes y un fin de semana en Pucón sin drama de carga.",
    image: "/images/ex90.jpg",
    gallery: ["/images/ex90.jpg", "/images/interior.jpg", "/images/andes.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "585 km" },
      { label: "Potencia", value: "300 kW / 408 hp" },
      { label: "0–100 km/h", value: "5,9 s" },
      { label: "Tracción", value: "Integral" },
      { label: "Batería", value: "111 kWh" },
      { label: "Plazas", value: "7" },
      { label: "Maletero", value: "310 – 1.915 L" },
      { label: "Seguridad", value: "Lidar + Pilot Assist" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Cargador de muro 11 kW",
      "Garantía de fábrica vigente",
    ],
  },
  {
    slug: "porsche-911-carrera-s",
    brand: "Porsche",
    model: "911 Carrera S",
    year: 2011,
    priceCLP: 89_900_000,
    status: "disponible",
    powertrain: "combustion",
    km: 34_200,
    color: "Blanco carrara",
    power: "283 kW",
    acceleration: "4,6 s",
    drivetrain: "RWD",
    excerpt: "No todo lo eterno es nuevo.",
    story:
      "997.2 Carrera S, un dueño, libros al día, 34.200 kilómetros. La forma que Porsche no ha podido abandonar. Entra a ETER porque una casa de silencio también necesita un pulso: el bóxer a 7.500 vueltas en la cuesta de Lo Barnechea, un sábado sin agenda.",
    image: "/images/911.jpg",
    gallery: ["/images/911.jpg", "/images/wheel.jpg", "/images/reception.jpg"],
    specs: [
      { label: "Motor", value: "3.8 bóxer 6" },
      { label: "Potencia", value: "283 kW / 385 hp" },
      { label: "0–100 km/h", value: "4,6 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Cambio", value: "PDK 7" },
      { label: "Plazas", value: "2+2" },
      { label: "Kilometraje", value: "34.200 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Historial de servicio completo",
      "Permiso de circulación 2026",
      "Revisión técnica vigente",
    ],
  },
  {
    slug: "audi-q8-etron-55",
    brand: "Audi",
    model: "Q8 e-tron 55",
    year: 2025,
    priceCLP: 84_900_000,
    status: "proxima",
    powertrain: "electrico",
    km: 0,
    color: "Plata niebla",
    power: "300 kW",
    acceleration: "5,6 s",
    rangeKm: 582,
    drivetrain: "AWD",
    excerpt: "Llega en octubre. Ya tiene nombre.",
    story:
      "Una llegada de octubre: Q8 e-tron 55, plata niebla, cero kilómetros. El SUV eléctrico más discreto de Ingolstadt, con quattro y una presencia que no necesita anunciarse en Alonso de Córdova. Se puede reservar ahora, con pie y fecha de entrega.",
    image: "/images/q8.jpg",
    gallery: ["/images/q8.jpg", "/images/interior.jpg", "/images/showroom.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "582 km" },
      { label: "Potencia", value: "300 kW / 408 hp" },
      { label: "0–100 km/h", value: "5,6 s" },
      { label: "Tracción", value: "Quattro" },
      { label: "Batería", value: "114 kWh" },
      { label: "Plazas", value: "5" },
      { label: "Llegada", value: "Octubre 2026" },
      { label: "Carga DC", value: "hasta 170 kW" },
    ],
    included: [
      "Reserva con pie",
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "Entrega en casa o en ETER",
    ],
  },
  {
    slug: "bmw-i5-edrive40",
    brand: "BMW",
    model: "i5 eDrive40",
    year: 2025,
    priceCLP: 79_900_000,
    status: "disponible",
    powertrain: "electrico",
    km: 5_610,
    color: "Gris brooklyn",
    power: "250 kW",
    acceleration: "6,0 s",
    rangeKm: 582,
    drivetrain: "RWD",
    excerpt: "La Serie 5, sin escape.",
    story:
      "Seminueva, un ejecutivo de Las Condes, 5.610 km. El i5 es el sedán que usamos cuando hay que cruzar Santiago de un lado a otro y llegar entero. Trasera, precisa, sin el teatro de las parrillas iluminadas de más. Gris brooklyn, como el cielo de junio.",
    image: "/images/i5.jpg",
    gallery: ["/images/i5.jpg", "/images/interior.jpg", "/images/wheel.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "582 km" },
      { label: "Potencia", value: "250 kW / 340 hp" },
      { label: "0–100 km/h", value: "6,0 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Batería", value: "81,2 kWh" },
      { label: "Plazas", value: "5" },
      { label: "Kilometraje", value: "5.610 km" },
      { label: "Dueños", value: "1" },
    ],
    included: [
      "Transferencia incluida",
      "Permiso de circulación 2026",
      "BMW Service Inclusive",
      "Neumáticos en 80%",
    ],
  },
  {
    slug: "polestar-4-long-range",
    brand: "Polestar",
    model: "4 Long Range",
    year: 2025,
    priceCLP: 72_900_000,
    status: "reservada",
    powertrain: "electrico",
    km: 1_240,
    color: "Magnesio",
    power: "200 kW",
    acceleration: "7,1 s",
    rangeKm: 610,
    drivetrain: "RWD",
    excerpt: "Ya tiene dueño. Queda la espera.",
    story:
      "Cupé-SUV sin luneta trasera, cámara de visión posterior, silueta que corta el aire. Esta unidad en magnesio está reservada. Si el gesto te interesa, te dejamos en lista: las Polestar 4 no se quedan mucho tiempo en el piso de la casa.",
    image: "/images/polestar.jpg",
    gallery: ["/images/polestar.jpg", "/images/andes.jpg", "/images/wheel.jpg"],
    specs: [
      { label: "Autonomía WLTP", value: "610 km" },
      { label: "Potencia", value: "200 kW / 272 hp" },
      { label: "0–100 km/h", value: "7,1 s" },
      { label: "Tracción", value: "Trasera" },
      { label: "Batería", value: "100 kWh" },
      { label: "Plazas", value: "5" },
      { label: "Kilometraje", value: "1.240 km" },
      { label: "Estado", value: "Reservada" },
    ],
    included: [
      "Lista de espera",
      "Aviso al liberarse",
      "Otras unidades en camino",
      "Visita a la casa igualmente bienvenida",
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
      const aScore = a.powertrain === current.powertrain ? 1 : 0;
      const bScore = b.powertrain === current.powertrain ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}
