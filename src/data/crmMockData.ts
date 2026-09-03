export type LeadStatus = 'nuevo' | 'contactado' | 'agendado' | 'ganado' | 'descartado';

export interface LeadNote {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface Lead {
  id: string;
  companySlug: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  valueClp: number;
  valueUf: number;
  channel: 'Google Ads' | 'Búsqueda Orgánica' | 'Instagram' | 'Referido' | 'Directo';
  status: LeadStatus;
  createdAt: string;
  city: string;
  notes: LeadNote[];
}

export interface ChartDataPoint {
  date: string;
  label: string;
  visits: number;
  unique: number;
  whatsappClicks: number;
  conversions: number;
  mobile: number;
  desktop: number;
}

export interface AudienceMetric {
  name: string;
  percentage: number;
  count: number;
  color: string;
}

export interface CompanyMetrics {
  slug: string;
  companyName: string;
  sector: string;
  activeNow: number;
  totalVisits30d: number;
  visitsDeltaPercent: number;
  uniqueVisitors30d: number;
  conversionRate: number;
  conversionDeltaPercent: number;
  leadsCount: number;
  pipelineValueClp: number;
  avgTimeOnSite: string;
  loadSpeedSeconds: number;
  chartData7d: ChartDataPoint[];
  chartData30d: ChartDataPoint[];
  devices: AudienceMetric[];
  channels: AudienceMetric[];
  topPages: { path: string; title: string; views: number; conversionRate: number }[];
  locations: { city: string; visits: number; percentage: number }[];
}

// 7 días de datos para gráficos de alta resolución
const DATES_7D: ChartDataPoint[] = [
  { date: '2026-08-27', label: 'Jue 27', visits: 412, unique: 340, whatsappClicks: 28, conversions: 19, mobile: 310, desktop: 102 },
  { date: '2026-08-28', label: 'Vie 28', visits: 520, unique: 440, whatsappClicks: 42, conversions: 27, mobile: 395, desktop: 125 },
  { date: '2026-08-29', label: 'Sáb 29', visits: 380, unique: 310, whatsappClicks: 31, conversions: 18, mobile: 315, desktop: 65 },
  { date: '2026-08-30', label: 'Dom 30', visits: 295, unique: 250, whatsappClicks: 19, conversions: 12, mobile: 250, desktop: 45 },
  { date: '2026-08-31', label: 'Lun 31', visits: 610, unique: 520, whatsappClicks: 56, conversions: 38, mobile: 450, desktop: 160 },
  { date: '2026-09-01', label: 'Mar 01', visits: 685, unique: 580, whatsappClicks: 64, conversions: 44, mobile: 510, desktop: 175 },
  { date: '2026-09-02', label: 'Hoy (Mié)', visits: 740, unique: 630, whatsappClicks: 71, conversions: 49, mobile: 560, desktop: 180 },
];

// 30 días de datos agregados
const DATES_30D: ChartDataPoint[] = Array.from({ length: 30 }, (_, i) => {
  const day = i + 4;
  const isWeekend = i % 7 === 2 || i % 7 === 3;
  const base = isWeekend ? 320 : 540;
  const variance = Math.floor(Math.sin(i * 0.8) * 80 + Math.random() * 40);
  const visits = base + variance;
  const unique = Math.floor(visits * 0.84);
  const whatsappClicks = Math.floor(visits * 0.09);
  const conversions = Math.floor(whatsappClicks * 0.65);
  const mobile = Math.floor(visits * 0.75);
  const desktop = visits - mobile;

  return {
    date: `2026-08-${day < 10 ? `0${day}` : day}`,
    label: `Día ${i + 1}`,
    visits,
    unique,
    whatsappClicks,
    conversions,
    mobile,
    desktop,
  };
});

export const SECTOR_LEADS_MOCK: Record<string, Omit<Lead, 'id' | 'companySlug' | 'createdAt'>[]> = {
  dental: [
    {
      name: 'Camila Valenzuela',
      email: 'c.valenzuela@empresa.cl',
      phone: '+56 9 8452 1190',
      service: 'Carillas de Cerámica (4 piezas)',
      valueClp: 1850000,
      valueUf: 48.5,
      channel: 'Google Ads',
      status: 'nuevo',
      city: 'Vitacura, Santiago',
      notes: [{ id: 'n1', author: 'Sistema', text: 'Lead capturado desde botón de evaluación 3D', createdAt: 'Hace 14 min' }],
    },
    {
      name: 'Matías Larraín',
      email: 'matias.larrain@holding.cl',
      phone: '+56 9 9234 8812',
      service: 'Implante Straumann + Corona Zirconio',
      valueClp: 1420000,
      valueUf: 37.2,
      channel: 'Búsqueda Orgánica',
      status: 'agendado',
      city: 'Las Condes, Santiago',
      notes: [
        { id: 'n2', author: 'Recepción', text: 'Cita agendada para el viernes 11:30 con Dr. Rivera', createdAt: 'Ayer' },
        { id: 'n3', author: 'WhatsApp Bot', text: 'Confirmó asistencia con token SMS', createdAt: 'Hoy 09:15' },
      ],
    },
    {
      name: 'Florencia Montes',
      email: 'florencia.montes@estudio.cl',
      phone: '+56 9 7712 4001',
      service: 'Ortodoncia Invisible Invisalign',
      valueClp: 2900000,
      valueUf: 76.0,
      channel: 'Instagram',
      status: 'contactado',
      city: 'Lo Barnechea, Santiago',
      notes: [{ id: 'n4', author: 'Dra. Silva', text: 'Se envió presupuesto detallado por WhatsApp', createdAt: 'Hace 3 horas' }],
    },
    {
      name: 'Ignacio Cousiño',
      email: 'icousino@banco.cl',
      phone: '+56 9 6554 9920',
      service: 'Rehabilitación Oral Completa',
      valueClp: 4600000,
      valueUf: 120.5,
      channel: 'Referido',
      status: 'ganado',
      city: 'Providencia, Santiago',
      notes: [{ id: 'n5', author: 'Administración', text: 'Abono 50% recibido. Inicio tratamiento lunes', createdAt: '28 ago' }],
    },
    {
      name: 'Andrea Donoso',
      email: 'andrea.donoso@gmail.com',
      phone: '+56 9 5410 7733',
      service: 'Blanqueamiento Dental Philips Zoom',
      valueClp: 380000,
      valueUf: 9.9,
      channel: 'Google Ads',
      status: 'descartado',
      city: 'Ñuñoa, Santiago',
      notes: [{ id: 'n6', author: 'Recepción', text: 'Buscaba convenio Fonasa directo. No califica', createdAt: '25 ago' }],
    },
  ],
  legal: [
    {
      name: 'Gonzalo Errázuriz',
      email: 'gonzalo@constructora-andes.cl',
      phone: '+56 9 9112 3445',
      service: 'Litigio Civil & Arbitraje de Construcción',
      valueClp: 6500000,
      valueUf: 170.0,
      channel: 'Google Ads',
      status: 'nuevo',
      city: 'Las Condes, Santiago',
      notes: [{ id: 'n7', author: 'Sistema', text: 'Consulta urgente por demanda de subcontratista', createdAt: 'Hace 22 min' }],
    },
    {
      name: 'Beatriz Ovalle',
      email: 'bovalle@inversiones.cl',
      phone: '+56 9 8223 5566',
      service: 'Reestructuración Societaria & Pacto de Accionistas',
      valueClp: 4200000,
      valueUf: 110.0,
      channel: 'Referido',
      status: 'agendado',
      city: 'Vitacura, Santiago',
      notes: [{ id: 'n8', author: 'Socio', text: 'Reunión en sala Lastarria confirmada para el jueves 16:00', createdAt: 'Ayer' }],
    },
    {
      name: 'Rodrigo Vicuña',
      email: 'rodrigo.vicuna@agrofrut.cl',
      phone: '+56 9 7334 6677',
      service: 'Defensa Tributaria SII & Reclamación',
      valueClp: 5800000,
      valueUf: 152.0,
      channel: 'Búsqueda Orgánica',
      status: 'contactado',
      city: 'Santiago Centro',
      notes: [{ id: 'n9', author: 'Secretaría', text: 'Se le solicitaron carpetas tributarias de los últimos 3 años', createdAt: 'Hace 5 horas' }],
    },
    {
      name: 'Carmen Gloria Vial',
      email: 'cgvial@holding.cl',
      phone: '+56 9 6445 7788',
      service: 'Juicio Particional de Herencia Familiar',
      valueClp: 8900000,
      valueUf: 233.0,
      channel: 'Directo',
      status: 'ganado',
      city: 'Providencia, Santiago',
      notes: [{ id: 'n10', author: 'Socio Principal', text: 'Mandato judicial firmado en Notaría Providencia', createdAt: '26 ago' }],
    },
  ],
  inmobiliaria: [
    {
      name: 'Felipe Correa Matte',
      email: 'fcorrea@capital.cl',
      phone: '+56 9 8812 9901',
      service: 'Residencia en El Golf (Venta)',
      valueClp: 18500000,
      valueUf: 485.0,
      channel: 'Google Ads',
      status: 'nuevo',
      city: 'Las Condes, Santiago',
      notes: [{ id: 'n11', author: 'Sistema', text: 'Solicitó dossier confidencial de propiedad ref. #742', createdAt: 'Hace 8 min' }],
    },
    {
      name: 'María José Irarrázaval',
      email: 'mj.irarrazaval@gmail.com',
      phone: '+56 9 9334 1122',
      service: 'Casa Parque Bicentenario (Visita privada)',
      valueClp: 24000000,
      valueUf: 630.0,
      channel: 'Instagram',
      status: 'agendado',
      city: 'Vitacura, Santiago',
      notes: [{ id: 'n12', author: 'Broker', text: 'Visita coordinada con dueño para el sábado 11:30', createdAt: 'Ayer' }],
    },
    {
      name: 'Sebastián Undurraga',
      email: 'sundurraga@vinedo.cl',
      phone: '+56 9 7223 4455',
      service: 'Parcela Lago Llanquihue (Orilla)',
      valueClp: 9800000,
      valueUf: 256.0,
      channel: 'Búsqueda Orgánica',
      status: 'contactado',
      city: 'Puerto Varas / Santiago',
      notes: [{ id: 'n13', author: 'Broker Sur', text: 'Se enviaron planos topográficos y derechos de agua', createdAt: 'Hace 1 día' }],
    },
  ],
  veterinaria: [
    {
      name: 'Paula Del Río',
      email: 'paula.delrio@gmail.com',
      phone: '+56 9 8123 7744',
      service: 'Cirugía Traumatológica & Pabellón (Canino 8 años)',
      valueClp: 780000,
      valueUf: 20.4,
      channel: 'Búsqueda Orgánica',
      status: 'agendado',
      city: 'Ñuñoa, Santiago',
      notes: [{ id: 'n14', author: 'Dr. Lagos', text: 'Ingreso a pabellón viernes 08:30 con ayuno de 12 horas', createdAt: 'Hoy' }],
    },
    {
      name: 'Nicolás Edwards',
      email: 'nicolas.edwards@gmail.com',
      phone: '+56 9 9455 2233',
      service: 'Urgencia 24h & UCI Felina',
      valueClp: 450000,
      valueUf: 11.8,
      channel: 'Google Ads',
      status: 'ganado',
      city: 'Providencia, Santiago',
      notes: [{ id: 'n15', author: 'Guardia Noche', text: 'Paciente estable en oxigenoterapia. Familia informada', createdAt: 'Anoche' }],
    },
  ],
  software: [
    {
      name: 'Tomás Zañartu',
      email: 'tzanartu@fintech-latam.io',
      phone: '+56 9 8765 4321',
      service: 'Desarrollo MVP Web & App Móvil React Native',
      valueClp: 14500000,
      valueUf: 380.0,
      channel: 'Referido',
      status: 'nuevo',
      city: 'Las Condes, Santiago',
      notes: [{ id: 'n16', author: 'Sistema', text: 'Brief técnico recibido con especificaciones de arquitectura', createdAt: 'Hace 45 min' }],
    },
    {
      name: 'Consuelo Barrientos',
      email: 'consuelo@logistica-chile.cl',
      phone: '+56 9 7112 8899',
      service: 'Sistema de Trazabilidad B2B & API Integrations',
      valueClp: 9800000,
      valueUf: 256.0,
      channel: 'Google Ads',
      status: 'contactado',
      city: 'Pudahuel / Santiago',
      notes: [{ id: 'n17', author: 'Tech Lead', text: 'Videollamada de descubrimiento agendada para el lunes', createdAt: 'Ayer' }],
    },
  ],
};

export function getCompanyMetrics(slug: string, brandName: string, sector: string): CompanyMetrics {
  const isDark = slug.includes('oscuro');
  const baseMultiplier = isDark ? 1.35 : 1.0;

  return {
    slug,
    companyName: brandName,
    sector,
    activeNow: Math.floor(8 + Math.random() * 12),
    totalVisits30d: Math.floor(14280 * baseMultiplier),
    visitsDeltaPercent: 14.8,
    uniqueVisitors30d: Math.floor(11840 * baseMultiplier),
    conversionRate: 4.9,
    conversionDeltaPercent: 1.2,
    leadsCount: Math.floor(580 * baseMultiplier * 0.1),
    pipelineValueClp: Math.floor(34200000 * baseMultiplier),
    avgTimeOnSite: '2m 44s',
    loadSpeedSeconds: 0.38,
    chartData7d: DATES_7D.map((d) => ({
      ...d,
      visits: Math.floor(d.visits * baseMultiplier),
      unique: Math.floor(d.unique * baseMultiplier),
      whatsappClicks: Math.floor(d.whatsappClicks * baseMultiplier),
      conversions: Math.floor(d.conversions * baseMultiplier),
    })),
    chartData30d: DATES_30D.map((d) => ({
      ...d,
      visits: Math.floor(d.visits * baseMultiplier),
      unique: Math.floor(d.unique * baseMultiplier),
    })),
    devices: [
      { name: 'Móvil (iOS & Android)', percentage: 76, count: Math.floor(10852 * baseMultiplier), color: '#09090B' },
      { name: 'Computador (Escritorio)', percentage: 21, count: Math.floor(2998 * baseMultiplier), color: '#71717A' },
      { name: 'Tablet', percentage: 3, count: Math.floor(430 * baseMultiplier), color: '#D4D4D8' },
    ],
    channels: [
      { name: 'Búsqueda Google (SEO)', percentage: 46, count: Math.floor(6568 * baseMultiplier), color: '#09090B' },
      { name: 'Google Ads (Campañas)', percentage: 31, count: Math.floor(4426 * baseMultiplier), color: '#52525B' },
      { name: 'Instagram & Redes', percentage: 15, count: Math.floor(2142 * baseMultiplier), color: '#A1A1AA' },
      { name: 'Tráfico Directo / QR', percentage: 8, count: Math.floor(1144 * baseMultiplier), color: '#E4E4E7' },
    ],
    topPages: [
      { path: '/', title: 'Página de Inicio (Hero & Presentación)', views: Math.floor(7840 * baseMultiplier), conversionRate: 5.2 },
      { path: '/contacto', title: 'Agendamiento & Formulario', views: Math.floor(2910 * baseMultiplier), conversionRate: 14.8 },
      { path: '/tratamientos', title: 'Catálogo de Servicios & Valores', views: Math.floor(2420 * baseMultiplier), conversionRate: 7.1 },
      { path: '/equipo', title: 'Especialistas & Trayectoria', views: Math.floor(1110 * baseMultiplier), conversionRate: 4.0 },
    ],
    locations: [
      { city: 'Santiago (Vitacura / Las Condes)', visits: Math.floor(5840 * baseMultiplier), percentage: 41 },
      { city: 'Santiago (Providencia / Ñuñoa)', visits: Math.floor(3980 * baseMultiplier), percentage: 28 },
      { city: 'Santiago (Lo Barnechea)', visits: Math.floor(2420 * baseMultiplier), percentage: 17 },
      { city: 'Viña del Mar / Valparaíso', visits: Math.floor(1140 * baseMultiplier), percentage: 8 },
      { city: 'Otras regiones', visits: Math.floor(900 * baseMultiplier), percentage: 6 },
    ],
  };
}

export function getInitialLeadsForCompany(slug: string, sector: string): Lead[] {
  const templates = SECTOR_LEADS_MOCK[sector] || SECTOR_LEADS_MOCK.dental;
  return templates.map((t, idx) => ({
    ...t,
    id: `lead-${slug}-${idx + 1}`,
    companySlug: slug,
    createdAt: new Date(Date.now() - (idx * 36 + 12) * 60 * 1000).toISOString(),
  }));
}
