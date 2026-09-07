export type CatalogKind = 'servicio' | 'producto' | 'propiedad' | 'vehiculo' | 'carta' | 'programa';

export type ProductStatus = 'publicado' | 'borrador' | 'oculto' | 'agotado';
export type AppointmentStatus = 'pendiente' | 'confirmada' | 'completada' | 'cancelada' | 'no-show';
export type OrderStatus = 'nuevo' | 'pagado' | 'preparando' | 'enviado' | 'entregado' | 'cancelado';

export interface CatalogProfile {
  kind: CatalogKind;
  navLabel: string;
  itemLabel: string;
  itemPlural: string;
  priceLabel: string;
  hasStock: boolean;
  hasSku: boolean;
  hasDuration: boolean;
  stockLabel: string;
  categories: string[];
  webPath: string;
}

export interface CatalogItem {
  id: string;
  companySlug: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  priceClp: number;
  priceUf: number;
  compareAtClp?: number;
  stock: number | null;
  unit: string;
  durationMin?: number;
  featured: boolean;
  published: boolean;
  status: ProductStatus;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  companySlug: string;
  clientName: string;
  clientPhone: string;
  service: string;
  professional: string;
  startsAt: string;
  durationMin: number;
  status: AppointmentStatus;
  notes: string;
  valueClp: number;
}

export interface OrderLine {
  name: string;
  qty: number;
  priceClp: number;
}

export interface Order {
  id: string;
  number: string;
  companySlug: string;
  customerName: string;
  customerPhone: string;
  items: OrderLine[];
  totalClp: number;
  status: OrderStatus;
  channel: 'Web' | 'WhatsApp' | 'Mostrador';
  createdAt: string;
  city: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  specialty: string;
  active: boolean;
}

export interface SiteHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface SiteContent {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: SiteHours[];
  homepageHeadline: string;
  showPrices: boolean;
  showBooking: boolean;
  showCatalog: boolean;
}

const UF = 39_600;

const DEFAULT_HOURS: SiteHours[] = [
  { day: 'Lunes', open: '09:00', close: '19:00', closed: false },
  { day: 'Martes', open: '09:00', close: '19:00', closed: false },
  { day: 'Miércoles', open: '09:00', close: '19:00', closed: false },
  { day: 'Jueves', open: '09:00', close: '19:00', closed: false },
  { day: 'Viernes', open: '09:00', close: '18:00', closed: false },
  { day: 'Sábado', open: '10:00', close: '14:00', closed: false },
  { day: 'Domingo', open: '00:00', close: '00:00', closed: true },
];

const SERVICE: CatalogProfile = {
  kind: 'servicio',
  navLabel: 'Servicios',
  itemLabel: 'Servicio',
  itemPlural: 'Servicios',
  priceLabel: 'Honorarios',
  hasStock: false,
  hasSku: true,
  hasDuration: true,
  stockLabel: 'Cupos',
  categories: ['Consulta', 'Tratamiento', 'Pack', 'Urgencia'],
  webPath: '/servicios',
};

const PRODUCT: CatalogProfile = {
  kind: 'producto',
  navLabel: 'Catálogo',
  itemLabel: 'Producto',
  itemPlural: 'Productos',
  priceLabel: 'Precio',
  hasStock: true,
  hasSku: true,
  hasDuration: false,
  stockLabel: 'Stock',
  categories: ['Destacados', 'Línea general', 'Oferta'],
  webPath: '/catalogo',
};

const PROFILES: Record<string, CatalogProfile> = {
  dental: {
    ...SERVICE,
    navLabel: 'Tratamientos',
    itemLabel: 'Tratamiento',
    itemPlural: 'Tratamientos',
    priceLabel: 'Valor',
    categories: ['Estética', 'Implantes', 'Ortodoncia', 'Rehabilitación', 'Preventivo'],
    webPath: '/tratamientos',
  },
  legal: {
    ...SERVICE,
    navLabel: 'Prácticas',
    itemLabel: 'Práctica',
    itemPlural: 'Prácticas',
    categories: ['Civil', 'Tributario', 'Societario', 'Laboral', 'Penal'],
    webPath: '/practicas',
  },
  inmobiliaria: {
    kind: 'propiedad',
    navLabel: 'Propiedades',
    itemLabel: 'Propiedad',
    itemPlural: 'Propiedades',
    priceLabel: 'Valor',
    hasStock: true,
    hasSku: true,
    hasDuration: false,
    stockLabel: 'Unidades',
    categories: ['Venta', 'Arriendo', 'Exclusiva', 'Inversión'],
    webPath: '/propiedades',
  },
  veterinaria: {
    ...SERVICE,
    navLabel: 'Servicios',
    itemLabel: 'Servicio',
    itemPlural: 'Servicios',
    priceLabel: 'Valor',
    categories: ['Consulta', 'Cirugía', 'Urgencia', 'Hospitalización', 'Peluquería'],
    webPath: '/servicios',
  },
  marketing: { ...SERVICE, categories: ['Performance', 'Brand', 'Contenido', 'SEO', 'Retainer'] },
  software: { ...SERVICE, categories: ['Producto', 'Integración', 'Soporte', 'Discovery'], webPath: '/soluciones' },
  diseno: { ...SERVICE, categories: ['Identidad', 'Digital', 'Editorial', 'Dirección de arte'] },
  ecommerce: { ...PRODUCT, categories: ['Novedades', 'Best sellers', 'Oferta', 'Packs'], webPath: '/tienda' },
  arquitectura: { ...SERVICE, categories: ['Vivienda', 'Comercial', 'Interiorismo', 'Obra'] },
  bienestar: {
    ...SERVICE,
    navLabel: 'Planes',
    itemLabel: 'Plan',
    itemPlural: 'Planes',
    categories: ['Clases', 'Personal', 'Membresía', 'Wellness'],
    webPath: '/planes',
  },
  contabilidad: { ...SERVICE, categories: ['Contable', 'Tributario', 'Laboral', 'Sociedades'] },
  'centro-medico': {
    ...SERVICE,
    navLabel: 'Prestaciones',
    itemLabel: 'Prestación',
    itemPlural: 'Prestaciones',
    categories: ['Consulta', 'Examen', 'Procedimiento', 'Control'],
    webPath: '/especialidades',
  },
  'salud-mental': { ...SERVICE, categories: ['Psicología', 'Psiquiatría', 'Terapia', 'Evaluación'], webPath: '/terapias' },
  kinesiologia: { ...SERVICE, categories: ['Deportiva', 'Traumatológica', 'Piso pélvico', 'Neurológica'] },
  laboratorio: {
    ...SERVICE,
    navLabel: 'Exámenes',
    itemLabel: 'Examen',
    itemPlural: 'Exámenes',
    hasDuration: false,
    categories: ['Sangre', 'Imagen', 'PCR', 'Perfil'],
    webPath: '/examenes',
  },
  concesionaria: {
    kind: 'vehiculo',
    navLabel: 'Stock',
    itemLabel: 'Vehículo',
    itemPlural: 'Vehículos',
    priceLabel: 'Precio',
    hasStock: true,
    hasSku: true,
    hasDuration: false,
    stockLabel: 'Unidades',
    categories: ['SUV', 'Sedán', 'Pickup', 'Premium', 'Seminuevo'],
    webPath: '/autos',
  },
  estetica: {
    ...SERVICE,
    navLabel: 'Tratamientos',
    itemLabel: 'Tratamiento',
    itemPlural: 'Tratamientos',
    categories: ['Facial', 'Corporal', 'Láser', 'Inyectable'],
    webPath: '/tratamientos',
  },
  gastronomia: {
    kind: 'carta',
    navLabel: 'Carta',
    itemLabel: 'Ítem',
    itemPlural: 'Ítems de carta',
    priceLabel: 'Precio',
    hasStock: true,
    hasSku: false,
    hasDuration: false,
    stockLabel: 'Disponibles',
    categories: ['Panadería', 'Pastelería', 'Café', 'Brunch', 'Temporada'],
    webPath: '/carta',
  },
  neumaticos: { ...PRODUCT, categories: ['Auto', 'Camioneta', 'Aro', 'Servicio taller'], webPath: '/medidas' },
  repuestos: { ...PRODUCT, categories: ['Motor', 'Frenos', 'Suspensión', 'Eléctrico'], webPath: '/repuestos' },
  ferreteria: { ...PRODUCT, categories: ['Herramientas', 'Fijación', 'Seguridad', 'Eléctrico', 'Soldadura'], webPath: '/catalogo' },
  'ferreteria-industrial': { ...PRODUCT, categories: ['Herramientas', 'Fijación', 'Seguridad', 'Eléctrico', 'Soldadura'], webPath: '/catalogo' },
  distribuidora: { ...PRODUCT, categories: ['Abarrotes', 'Congelados', 'Horeca', 'Bebidas'], webPath: '/lineas' },
  mayorista: { ...PRODUCT, categories: ['Abarrotes', 'Limpieza', 'Pack', 'Oferta'], webPath: '/surtido' },
  universidad: {
    kind: 'programa',
    navLabel: 'Programas',
    itemLabel: 'Programa',
    itemPlural: 'Programas',
    priceLabel: 'Arancel',
    hasStock: false,
    hasSku: true,
    hasDuration: false,
    stockLabel: 'Vacantes',
    categories: ['Pregrado', 'Magíster', 'Diplomado', 'Educación continua'],
    webPath: '/admision',
  },
  vinedo: {
    kind: 'producto',
    navLabel: 'Cava',
    itemLabel: 'Etiqueta',
    itemPlural: 'Etiquetas',
    priceLabel: 'Precio',
    hasStock: true,
    hasSku: true,
    hasDuration: false,
    stockLabel: 'Botellas',
    categories: ['Tinto', 'Blanco', 'Espumante', 'Reserva', 'Icono'],
    webPath: '/vinos',
  },
};

export function getCatalogProfile(sector: string): CatalogProfile {
  return PROFILES[sector] || (isProductSector(sector) ? PRODUCT : SERVICE);
}

export function isProductSector(sector: string): boolean {
  return ['ferreteria', 'neumaticos', 'repuestos', 'distribuidora', 'mayorista', 'ecommerce', 'concesionaria', 'vinedo', 'gastronomia'].includes(sector);
}

export function isAppointmentSector(sector: string): boolean {
  return ['dental', 'veterinaria', 'centro-medico', 'salud-mental', 'kinesiologia', 'estetica', 'laboratorio', 'bienestar', 'legal'].includes(sector);
}

type SeedItem = Omit<CatalogItem, 'id' | 'companySlug' | 'updatedAt' | 'priceUf'>;

const SEEDS: Record<string, SeedItem[]> = {
  dental: [
    { name: 'Evaluación + escáner intraoral 3D', sku: 'DEN-EVA', category: 'Preventivo', description: 'Diagnóstico inicial con escáner. Se publica como gancho de conversión en el hero.', priceClp: 0, stock: null, unit: 'sesión', durationMin: 40, featured: true, published: true, status: 'publicado' },
    { name: 'Limpieza periodontal', sku: 'DEN-LIMP', category: 'Preventivo', description: 'Profilaxis completa con aire y ultrasonido.', priceClp: 89_000, stock: null, unit: 'sesión', durationMin: 50, featured: false, published: true, status: 'publicado' },
    { name: 'Blanqueamiento Philips Zoom', sku: 'DEN-ZOOM', category: 'Estética', description: 'Sesión en box con cubeta y control de sensibilidad.', priceClp: 380_000, compareAtClp: 450_000, stock: null, unit: 'sesión', durationMin: 90, featured: true, published: true, status: 'publicado' },
    { name: 'Carilla de cerámica (pieza)', sku: 'DEN-CAR', category: 'Estética', description: 'Carilla feldespática o disilicato. Precio por pieza.', priceClp: 462_000, stock: null, unit: 'pieza', durationMin: 120, featured: true, published: true, status: 'publicado' },
    { name: 'Implante Straumann + corona zirconio', sku: 'DEN-IMP', category: 'Implantes', description: 'Incluye planificación digital y corona atornillada.', priceClp: 1_420_000, stock: null, unit: 'tratamiento', durationMin: 180, featured: true, published: true, status: 'publicado' },
    { name: 'Ortodoncia invisible Invisalign', sku: 'DEN-INV', category: 'Ortodoncia', description: 'Pack completo de alineadores con controles mensuales.', priceClp: 2_900_000, stock: null, unit: 'tratamiento', durationMin: 40, featured: false, published: true, status: 'publicado' },
    { name: 'Endodoncia molar', sku: 'DEN-ENDO', category: 'Rehabilitación', description: 'Tratamiento de conducto con localizador apical.', priceClp: 245_000, stock: null, unit: 'pieza', durationMin: 90, featured: false, published: true, status: 'publicado' },
    { name: 'Rehabilitación oral completa', sku: 'DEN-REH', category: 'Rehabilitación', description: 'Plan multidisciplinario. Visible solo con ficha.', priceClp: 4_600_000, stock: null, unit: 'tratamiento', featured: false, published: false, status: 'borrador' },
  ],
  legal: [
    { name: 'Consulta de diagnóstico', sku: 'LEG-CON', category: 'Civil', description: 'Primera reunión de 45 min para calificar el caso.', priceClp: 180_000, stock: null, unit: 'sesión', durationMin: 45, featured: true, published: true, status: 'publicado' },
    { name: 'Litigio civil y arbitraje', sku: 'LEG-CIV', category: 'Civil', description: 'Patrocinio en juicio o CAM Santiago.', priceClp: 6_500_000, stock: null, unit: 'honorario', featured: true, published: true, status: 'publicado' },
    { name: 'Reestructuración societaria', sku: 'LEG-SOC', category: 'Societario', description: 'Pacto de accionistas, fusión o spin-off.', priceClp: 4_200_000, stock: null, unit: 'honorario', featured: false, published: true, status: 'publicado' },
    { name: 'Defensa tributaria SII', sku: 'LEG-TRIB', category: 'Tributario', description: 'Reclamación administrativa y judicial.', priceClp: 5_800_000, stock: null, unit: 'honorario', featured: true, published: true, status: 'publicado' },
    { name: 'Due diligence laboral', sku: 'LEG-LAB', category: 'Laboral', description: 'Auditoría de contratos y finiquitos.', priceClp: 2_400_000, stock: null, unit: 'honorario', featured: false, published: true, status: 'publicado' },
    { name: 'Retainer mensual estudio', sku: 'LEG-RET', category: 'Societario', description: 'Bolsa de horas para directorio y contratos.', priceClp: 980_000, stock: null, unit: 'mes', featured: false, published: false, status: 'borrador' },
  ],
  inmobiliaria: [
    { name: 'Residencia El Golf 4D 3B', sku: 'INM-742', category: 'Venta', description: 'Dossier confidencial. 182 m² + 2 estacionamientos.', priceClp: 732_600_000, stock: 1, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Casa Parque Bicentenario', sku: 'INM-118', category: 'Exclusiva', description: 'Visita privada. Jardín oriente y piscina.', priceClp: 980_000_000, stock: 1, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Parcela orilla Lago Llanquihue', sku: 'INM-905', category: 'Venta', description: '5.400 m² con derechos de agua inscritos.', priceClp: 388_000_000, stock: 1, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'Oficina El Golf 68 m²', sku: 'INM-330', category: 'Arriendo', description: 'Piso 14, vista cordillera. UF 28 / mes.', priceClp: 1_108_800, stock: 1, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'Departamento Ñuñoa 2D (preventa)', sku: 'INM-221', category: 'Inversión', description: 'Entrega 2027. No mostrar precio en home.', priceClp: 166_320_000, stock: 6, unit: 'unidad', featured: false, published: false, status: 'borrador' },
  ],
  veterinaria: [
    { name: 'Consulta general', sku: 'VET-CON', category: 'Consulta', description: 'Examen clínico + receta digital.', priceClp: 32_000, stock: null, unit: 'sesión', durationMin: 30, featured: true, published: true, status: 'publicado' },
    { name: 'Urgencia 24h / UCI', sku: 'VET-UCI', category: 'Urgencia', description: 'Ingreso a box de críticos con monitoreo.', priceClp: 450_000, stock: null, unit: 'ingreso', durationMin: 120, featured: true, published: true, status: 'publicado' },
    { name: 'Cirugía traumatológica', sku: 'VET-CIR', category: 'Cirugía', description: 'Pabellón + hospitalización 24h.', priceClp: 780_000, stock: null, unit: 'cirugía', durationMin: 180, featured: true, published: true, status: 'publicado' },
    { name: 'Esterilización canina', sku: 'VET-EST', category: 'Cirugía', description: 'Incluye prequirúrgico y collar.', priceClp: 89_000, stock: null, unit: 'cirugía', durationMin: 60, featured: false, published: true, status: 'publicado' },
    { name: 'Peluquería raza mediana', sku: 'VET-PEL', category: 'Peluquería', description: 'Baño medicado, corte y uñas.', priceClp: 28_000, stock: null, unit: 'sesión', durationMin: 75, featured: false, published: true, status: 'publicado' },
    { name: 'Plan cachorro 4 controles', sku: 'VET-PAC', category: 'Consulta', description: 'Vacunas + desparasitación. Pack anual.', priceClp: 149_000, stock: 12, unit: 'pack', featured: false, published: false, status: 'borrador' },
  ],
  ferreteria: [
    { name: 'Taladro Bosch GSB 13 RE', sku: 'BOS-13RE', category: 'Herramientas', description: 'Percutor 600W. Garantía 12 meses.', priceClp: 89_990, compareAtClp: 109_990, stock: 24, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Disco de corte 4.5" (pack 10)', sku: 'DIS-45-10', category: 'Soldadura', description: 'Inox y metal. Caja de 10 unidades.', priceClp: 12_490, stock: 180, unit: 'pack', featured: false, published: true, status: 'publicado' },
    { name: 'Soldadora inverter 200A', sku: 'SOL-200', category: 'Soldadura', description: 'MMA TIG lift. Incluye máscara.', priceClp: 189_000, stock: 7, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Casco de seguridad clase C', sku: 'SEG-CAS', category: 'Seguridad', description: 'Certificación NCh. Stock crítico.', priceClp: 12_990, stock: 3, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'Juego brocas SDS-Plus 8 pzas', sku: 'BRO-SDS8', category: 'Herramientas', description: 'Hormigón y ladrillo. 6 a 12 mm.', priceClp: 24_900, stock: 41, unit: 'set', featured: false, published: true, status: 'publicado' },
    { name: 'Interruptor diferencial 2x40A', sku: 'ELE-DIF', category: 'Eléctrico', description: '30mA. Marca Schneider equivalente.', priceClp: 18_490, stock: 0, unit: 'unidad', featured: false, published: true, status: 'agotado' },
    { name: 'Anclaje químico 300 ml', sku: 'FIJ-QUI', category: 'Fijación', description: 'Epóxico para hormigón fisurado.', priceClp: 15_990, stock: 56, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'Escalera telescópica 3.8 m', sku: 'HER-ESC', category: 'Herramientas', description: 'Aluminio. Uso profesional.', priceClp: 129_000, stock: 5, unit: 'unidad', featured: true, published: false, status: 'borrador' },
  ],
  concesionaria: [
    { name: 'Toyota RAV4 2022 Limited 4x4', sku: 'AUT-RAV22', category: 'SUV', description: '45.200 km. Único dueño. Full.', priceClp: 22_900_000, stock: 1, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Mazda CX-5 2021 GT', sku: 'AUT-CX521', category: 'SUV', description: 'Techo, cuero, 38.000 km.', priceClp: 18_400_000, stock: 1, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Hyundai Tucson 2023 Premium', sku: 'AUT-TUC23', category: 'SUV', description: 'Garantía de fábrica vigente.', priceClp: 21_200_000, stock: 2, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'Chevrolet Silverado LTZ 2020', sku: 'AUT-SIL20', category: 'Pickup', description: '4x4 diésel. Listo para faena.', priceClp: 27_800_000, stock: 1, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'BMW 320i 2019 Sport', sku: 'AUT-32019', category: 'Premium', description: 'En peritaje. No publicar aún.', priceClp: 16_900_000, stock: 1, unit: 'unidad', featured: false, published: false, status: 'borrador' },
  ],
  gastronomia: [
    { name: 'Masa madre de 48 horas', sku: 'GAS-MM', category: 'Panadería', description: 'Hogaza de 800 g. Sale a las 10:00.', priceClp: 4_900, stock: 28, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Croissant de mantequilla', sku: 'GAS-CRO', category: 'Pastelería', description: 'Laminado francés. Horneado continuo.', priceClp: 2_200, stock: 60, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Flat white', sku: 'GAS-FF', category: 'Café', description: 'Espresso + textura. Grano de temporada.', priceClp: 3_800, stock: null, unit: 'taza', featured: false, published: true, status: 'publicado' },
    { name: 'Brunch del sábado', sku: 'GAS-BRU', category: 'Brunch', description: 'Huevos, pan, café y jugo. Reserva.', priceClp: 14_900, stock: 18, unit: 'cubierto', durationMin: 90, featured: true, published: true, status: 'publicado' },
    { name: 'Torta milhojas (porción)', sku: 'GAS-MIL', category: 'Pastelería', description: 'Manjar casero. Fines de semana.', priceClp: 5_400, stock: 12, unit: 'porción', featured: false, published: true, status: 'publicado' },
    { name: 'Pan de nuez (lote prueba)', sku: 'GAS-NUE', category: 'Temporada', description: 'Todavía no sale a carta.', priceClp: 5_200, stock: 0, unit: 'unidad', featured: false, published: false, status: 'borrador' },
  ],
  vinedo: [
    { name: 'Reserva Cabernet Sauvignon 2021', sku: 'VIN-CS21', category: 'Tinto', description: '12 meses en barrica francesa. 14.2°.', priceClp: 18_900, stock: 240, unit: 'botella', featured: true, published: true, status: 'publicado' },
    { name: 'Sauvignon Blanc Valle de Casablanca', sku: 'VIN-SB24', category: 'Blanco', description: 'Cosecha 2024. Notas cítricas.', priceClp: 12_500, stock: 180, unit: 'botella', featured: true, published: true, status: 'publicado' },
    { name: 'Espumante extra brut', sku: 'VIN-ESP', category: 'Espumante', description: 'Método tradicional. 24 meses en rima.', priceClp: 22_000, stock: 64, unit: 'botella', featured: false, published: true, status: 'publicado' },
    { name: 'Icono Carmenère 2018', sku: 'VIN-ICO', category: 'Icono', description: 'Producción limitada 1.200 botellas.', priceClp: 48_000, stock: 18, unit: 'botella', featured: true, published: true, status: 'publicado' },
    { name: 'Tour + degustación 4 copas', sku: 'VIN-TOUR', category: 'Reserva', description: 'Visita a cava. Sábados 12:00.', priceClp: 35_000, stock: 12, unit: 'persona', durationMin: 90, featured: false, published: true, status: 'publicado' },
  ],
  software: [
    { name: 'Discovery técnico (2 semanas)', sku: 'SW-DIS', category: 'Discovery', description: 'Arquitectura, alcance y estimación.', priceClp: 1_890_000, stock: null, unit: 'sprint', durationMin: 0, featured: true, published: true, status: 'publicado' },
    { name: 'MVP web + app', sku: 'SW-MVP', category: 'Producto', description: 'React Native + API. 10 semanas.', priceClp: 14_500_000, stock: null, unit: 'proyecto', featured: true, published: true, status: 'publicado' },
    { name: 'Integración API / ERP', sku: 'SW-API', category: 'Integración', description: 'Conectores a BSALE, Softland o custom.', priceClp: 3_200_000, stock: null, unit: 'proyecto', featured: false, published: true, status: 'publicado' },
    { name: 'Soporte retainer 20h', sku: 'SW-RET', category: 'Soporte', description: 'Bolsa mensual de evolución.', priceClp: 980_000, stock: null, unit: 'mes', featured: false, published: true, status: 'publicado' },
  ],
  'centro-medico': [
    { name: 'Consulta medicina general', sku: 'CM-GEN', category: 'Consulta', description: '30 min con receta electrónica.', priceClp: 28_000, stock: null, unit: 'sesión', durationMin: 30, featured: true, published: true, status: 'publicado' },
    { name: 'Consulta especialidad', sku: 'CM-ESP', category: 'Consulta', description: 'Cardiología, dermato, gastro.', priceClp: 45_000, stock: null, unit: 'sesión', durationMin: 40, featured: true, published: true, status: 'publicado' },
    { name: 'Perfil bioquímico 21', sku: 'CM-PB21', category: 'Examen', description: 'Toma de muestra en el centro.', priceClp: 22_900, stock: null, unit: 'examen', featured: false, published: true, status: 'publicado' },
    { name: 'Ecografía abdominal', sku: 'CM-ECO', category: 'Examen', description: 'Informe el mismo día.', priceClp: 38_000, stock: null, unit: 'examen', durationMin: 25, featured: false, published: true, status: 'publicado' },
  ],
};

const GENERIC_SERVICE: SeedItem[] = [
  { name: 'Consulta inicial', sku: 'SRV-01', category: 'Consulta', description: 'Primera evaluación. Visible en el hero.', priceClp: 49_000, stock: null, unit: 'sesión', durationMin: 45, featured: true, published: true, status: 'publicado' },
  { name: 'Servicio estándar', sku: 'SRV-02', category: 'Tratamiento', description: 'Prestación más pedida del mes.', priceClp: 129_000, stock: null, unit: 'sesión', durationMin: 60, featured: true, published: true, status: 'publicado' },
  { name: 'Pack premium', sku: 'SRV-03', category: 'Pack', description: 'Tres sesiones + seguimiento.', priceClp: 349_000, stock: 8, unit: 'pack', featured: false, published: true, status: 'publicado' },
  { name: 'Urgencia / prioridad', sku: 'SRV-04', category: 'Urgencia', description: 'Atención el mismo día.', priceClp: 89_000, stock: null, unit: 'sesión', durationMin: 30, featured: false, published: true, status: 'publicado' },
  { name: 'Borrador de temporada', sku: 'SRV-05', category: 'Pack', description: 'Aún no se publica en la web.', priceClp: 199_000, stock: null, unit: 'sesión', featured: false, published: false, status: 'borrador' },
];

const GENERIC_PRODUCT: SeedItem[] = [
  { name: 'Ítem destacado', sku: 'PRD-01', category: 'Destacados', description: 'Sale en la grilla del home.', priceClp: 24_990, stock: 42, unit: 'unidad', featured: true, published: true, status: 'publicado' },
  { name: 'Línea general A', sku: 'PRD-02', category: 'Línea general', description: 'Rotación alta. Reposición semanal.', priceClp: 8_490, stock: 120, unit: 'unidad', featured: false, published: true, status: 'publicado' },
  { name: 'Línea general B', sku: 'PRD-03', category: 'Línea general', description: 'Caja de 12. Precio neto.', priceClp: 15_900, stock: 18, unit: 'caja', featured: false, published: true, status: 'publicado' },
  { name: 'Oferta de la semana', sku: 'PRD-04', category: 'Oferta', description: 'Stock crítico. Alerta en panel.', priceClp: 6_990, compareAtClp: 9_990, stock: 4, unit: 'unidad', featured: true, published: true, status: 'publicado' },
  { name: 'Ítem agotado', sku: 'PRD-05', category: 'Línea general', description: 'Ocultar precio, dejar aviso de reposición.', priceClp: 11_500, stock: 0, unit: 'unidad', featured: false, published: true, status: 'agotado' },
  { name: 'Novedad en borrador', sku: 'PRD-06', category: 'Destacados', description: 'Foto pendiente. No publicar.', priceClp: 32_000, stock: 10, unit: 'unidad', featured: false, published: false, status: 'borrador' },
];

function toItem(slug: string, seed: SeedItem, idx: number): CatalogItem {
  return {
    ...seed,
    id: `p-${slug}-${idx + 1}`,
    companySlug: slug,
    priceUf: Number((seed.priceClp / UF).toFixed(1)),
    updatedAt: new Date(Date.now() - idx * 36e5).toISOString(),
  };
}

const SEEDS_BY_SLUG: Record<string, SeedItem[]> = {
  olivo: [
    { name: 'Casa Santa María de Manquehue 4D 4B', sku: 'OLI-VIT', category: 'Exclusiva', description: 'Vitacura. 280 m² + jardín con olivos y piscina. UF 18.900.', priceClp: 748_440_000, stock: 1, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Penthouse El Golf 3D 3B', sku: 'OLI-GOLF', category: 'Venta', description: 'Las Condes. 165 m² + terraza 48 m². UF 14.200.', priceClp: 562_320_000, stock: 1, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Casa La Dehesa 5D 5B', sku: 'OLI-DEH', category: 'Venta', description: 'Lo Barnechea. 420 m² en 1.400 m² de terreno. UF 26.800.', priceClp: 1_061_280_000, stock: 1, unit: 'unidad', featured: true, published: true, status: 'publicado' },
    { name: 'Departamento Los Leones 2D 2B', sku: 'OLI-LEO', category: 'Venta', description: 'Providencia. 98 m², Metro a 4 minutos. UF 6.200.', priceClp: 245_520_000, stock: 1, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'Casa en arriendo, Vitacura', sku: 'OLI-ARR', category: 'Arriendo', description: '220 m², piscina y jardín. UF 78 / mes.', priceClp: 3_088_800, stock: 1, unit: 'unidad', featured: false, published: true, status: 'publicado' },
    { name: 'Departamento Escuela Militar 2D (renta)', sku: 'OLI-ESC', category: 'Inversión', description: '72 m², edificio 2019. Publicar cuando cierre la captura.', priceClp: 192_060_000, stock: 1, unit: 'unidad', featured: false, published: false, status: 'borrador' },
  ],
};

export function getInitialProducts(slug: string, sector: string): CatalogItem[] {
  const seeds =
    SEEDS_BY_SLUG[slug] || SEEDS[sector] || (isProductSector(sector) ? GENERIC_PRODUCT : GENERIC_SERVICE);
  return seeds.map((s, i) => toItem(slug, s, i));
}

const TEAM_BY_SECTOR: Record<string, Omit<TeamMember, 'id'>[]> = {
  dental: [
    { name: 'Dra. Emilia Rivera', role: 'Directora clínica', email: 'erivera@clinica.cl', phone: '+56 9 8452 1101', specialty: 'Rehabilitación', active: true },
    { name: 'Dr. Tomás Silva', role: 'Implantólogo', email: 'tsilva@clinica.cl', phone: '+56 9 8452 1102', specialty: 'Implantes', active: true },
    { name: 'Florencia Soto', role: 'Coordinadora de pacientes', email: 'recepcion@clinica.cl', phone: '+56 9 8452 1100', specialty: 'Agenda', active: true },
  ],
  legal: [
    { name: 'Gonzalo Vial', role: 'Socio principal', email: 'gvial@estudio.cl', phone: '+56 9 9112 3401', specialty: 'Civil', active: true },
    { name: 'Beatriz Ovalle', role: 'Socia tributaria', email: 'bovalle@estudio.cl', phone: '+56 9 9112 3402', specialty: 'SII', active: true },
    { name: 'Camila Núñez', role: 'Secretaría de socios', email: 'agenda@estudio.cl', phone: '+56 9 9112 3400', specialty: 'Agenda', active: true },
  ],
  ferreteria: [
    { name: 'Héctor Palma', role: 'Jefe de local', email: 'hpalma@ferre.cl', phone: '+56 9 6611 2201', specialty: 'Mostrador', active: true },
    { name: 'Patricia Rivas', role: 'Cotizaciones B2B', email: 'cotiza@ferre.cl', phone: '+56 9 6611 2202', specialty: 'Mayorista', active: true },
    { name: 'Luis Cáceres', role: 'Bodega', email: 'bodega@ferre.cl', phone: '+56 9 6611 2203', specialty: 'Stock', active: true },
  ],
};

const GENERIC_TEAM: Omit<TeamMember, 'id'>[] = [
  { name: 'Andrea Muñoz', role: 'Administración', email: 'admin@negocio.cl', phone: '+56 9 7000 1101', specialty: 'Operación', active: true },
  { name: 'Diego Fuentes', role: 'Ventas', email: 'ventas@negocio.cl', phone: '+56 9 7000 1102', specialty: 'Comercial', active: true },
  { name: 'Sofía Herrera', role: 'Atención', email: 'hola@negocio.cl', phone: '+56 9 7000 1100', specialty: 'Recepción', active: true },
];

const TEAM_BY_SLUG: Record<string, Omit<TeamMember, 'id'>[]> = {
  olivo: [
    { name: 'Elena Vidal', role: 'Directora y corredora', email: 'elena@olivo.cl', phone: '+56 9 8765 4321', specialty: 'Captación oriente', active: true },
    { name: 'Tomás Herrera', role: 'Ventas e inversión', email: 'tomas@olivo.cl', phone: '+56 9 8765 4322', specialty: 'Las Condes / Vitacura', active: true },
    { name: 'Amanda Rojas', role: 'Arriendos', email: 'amanda@olivo.cl', phone: '+56 9 8765 4323', specialty: 'Ñuñoa–Providencia', active: true },
  ],
};

export function getInitialTeam(slug: string, sector: string): TeamMember[] {
  const rows = TEAM_BY_SLUG[slug] || TEAM_BY_SECTOR[sector] || GENERIC_TEAM;
  return rows.map((m, i) => ({ ...m, id: `tm-${slug}-${i + 1}` }));
}

const SITE_BY_SLUG: Record<string, Omit<SiteContent, 'hours'>> = {
  olivo: {
    phone: '+56 9 8765 4321',
    whatsapp: '+56 9 8765 4321',
    email: 'hola@olivo.cl',
    address: 'Av. Alonso de Córdova 3100, of. 501, Las Condes',
    homepageHeadline: 'Olivo: encuentra tu próxima casa en el oriente de Santiago.',
    showPrices: true,
    showBooking: true,
    showCatalog: true,
  },
};

export function getInitialSite(brand: string, sector: string, slug?: string): SiteContent {
  if (slug && SITE_BY_SLUG[slug]) {
    return { ...SITE_BY_SLUG[slug], hours: DEFAULT_HOURS.map((h) => ({ ...h })) };
  }
  const mail = brand.toLowerCase().replace(/[^a-z0-9]+/g, '') || 'contacto';
  return {
    phone: '+56 2 2333 4400',
    whatsapp: '+56 9 8452 1190',
    email: `hola@${mail}.cl`,
    address: 'Av. Apoquindo 4775, Las Condes, Santiago',
    hours: DEFAULT_HOURS.map((h) => ({ ...h })),
    homepageHeadline: `${brand}: ${getCatalogProfile(sector).itemPlural.toLowerCase()} con hora y respuesta el mismo día.`,
    showPrices: true,
    showBooking: true,
    showCatalog: true,
  };
}

export function getInitialAppointments(slug: string, sector: string, products: CatalogItem[], team: TeamMember[]): Appointment[] {
  const services = products.filter((p) => p.published).slice(0, 4);
  const pros = team.filter((t) => t.active);
  const names = ['Camila Valenzuela', 'Matías Larraín', 'Paula Del Río', 'Ignacio Cousiño', 'Florencia Montes'];
  const phones = ['+56 9 8452 1190', '+56 9 9234 8812', '+56 9 8123 7744', '+56 9 6554 9920', '+56 9 7712 4001'];
  const statuses: AppointmentStatus[] = ['confirmada', 'pendiente', 'confirmada', 'completada', 'pendiente'];
  const now = new Date();
  now.setHours(9, 0, 0, 0);

  return names.map((name, i) => {
    const start = new Date(now);
    start.setDate(now.getDate() + (i < 2 ? 0 : i === 2 ? 1 : 2));
    start.setHours(9 + i, i % 2 === 0 ? 0 : 30, 0, 0);
    const svc = services[i % Math.max(services.length, 1)];
    const pro = pros[i % Math.max(pros.length, 1)];
    return {
      id: `ap-${slug}-${i + 1}`,
      companySlug: slug,
      clientName: name,
      clientPhone: phones[i],
      service: svc?.name || 'Consulta',
      professional: pro?.name || 'Equipo',
      startsAt: start.toISOString(),
      durationMin: svc?.durationMin || 45,
      status: statuses[i],
      notes: i === 1 ? 'Confirmar ayuno / documentación' : '',
      valueClp: svc?.priceClp || 0,
    };
  });
}

export function getInitialOrders(slug: string, products: CatalogItem[]): Order[] {
  const published = products.filter((p) => p.published && p.priceClp > 0);
  const customers = [
    { name: 'Constructora Andes', phone: '+56 9 9112 3445', city: 'Las Condes', channel: 'WhatsApp' as const },
    { name: 'Ferretería El Roble', phone: '+56 9 7334 6677', city: 'Pudahuel', channel: 'Web' as const },
    { name: 'Nicolás Edwards', phone: '+56 9 9455 2233', city: 'Providencia', channel: 'Mostrador' as const },
    { name: 'Café Bruma', phone: '+56 9 8123 7744', city: 'Ñuñoa', channel: 'Web' as const },
  ];
  const statuses: OrderStatus[] = ['nuevo', 'pagado', 'preparando', 'enviado'];

  return customers.map((c, i) => {
    const a = published[i % Math.max(published.length, 1)];
    const b = published[(i + 1) % Math.max(published.length, 1)];
    const items: OrderLine[] = a
      ? [
          { name: a.name, qty: 1 + (i % 3), priceClp: a.priceClp },
          ...(b && b.id !== a.id ? [{ name: b.name, qty: 1, priceClp: b.priceClp }] : []),
        ]
      : [{ name: 'Pedido mixto', qty: 1, priceClp: 89_000 }];
    const totalClp = items.reduce((sum, line) => sum + line.qty * line.priceClp, 0);
    return {
      id: `or-${slug}-${i + 1}`,
      number: `PED-${10024 + i}`,
      companySlug: slug,
      customerName: c.name,
      customerPhone: c.phone,
      items,
      totalClp,
      status: statuses[i],
      channel: c.channel,
      createdAt: new Date(Date.now() - (i * 14 + 3) * 36e5).toISOString(),
      city: c.city,
    };
  });
}

export function clpToUf(clp: number): number {
  return Number((clp / UF).toFixed(1));
}
