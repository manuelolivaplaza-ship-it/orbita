import { useState, useEffect, useCallback, useMemo } from 'react';
import { Lead, LeadStatus, getInitialLeadsForCompany, getCompanyMetrics, CompanyMetrics } from '../data/crmMockData';
import {
  Appointment,
  AppointmentStatus,
  CatalogItem,
  CatalogProfile,
  Order,
  OrderStatus,
  ProductStatus,
  SiteContent,
  TeamMember,
  clpToUf,
  getCatalogProfile,
  getInitialAppointments,
  getInitialOrders,
  getInitialProducts,
  getInitialSite,
  getInitialTeam,
} from '../data/crmCatalog';

export interface NotificationSettings {
  whatsappNumber: string;
  whatsappEnabled: boolean;
  webhookUrl: string;
  webhookEnabled: boolean;
  notifyOnEveryLead: boolean;
  soundEnabled: boolean;
}

const DEFAULT_SETTINGS: NotificationSettings = {
  whatsappNumber: '+56 9 8452 1190',
  whatsappEnabled: true,
  webhookUrl: 'https://api.reclu.cl/v1/leads/webhook',
  webhookEnabled: false,
  notifyOnEveryLead: true,
  soundEnabled: true,
};

const PREFIX = {
  leads: 'orbita_crm_leads_',
  products: 'orbita_crm_products_',
  appointments: 'orbita_crm_appointments_',
  orders: 'orbita_crm_orders_',
  team: 'orbita_crm_team_',
  site: 'orbita_crm_site_',
};
const STORAGE_SETTINGS_KEY = 'orbita_crm_settings';

function loadJson<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved) as T;
  } catch {}
  return fallback;
}

function saveJson<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function nid(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

export function useCrmStore(slug: string, brandName: string, sector: string) {
  const profile = useMemo(() => getCatalogProfile(sector), [sector]);

  const [leads, setLeads] = useState<Lead[]>(() => loadJson(`${PREFIX.leads}${slug}`, getInitialLeadsForCompany(slug, sector)));
  const [products, setProducts] = useState<CatalogItem[]>(() => loadJson(`${PREFIX.products}${slug}`, getInitialProducts(slug, sector)));
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const items = loadJson(`${PREFIX.products}${slug}`, getInitialProducts(slug, sector));
    const team = loadJson(`${PREFIX.team}${slug}`, getInitialTeam(slug, sector));
    return loadJson(`${PREFIX.appointments}${slug}`, getInitialAppointments(slug, sector, items, team));
  });
  const [orders, setOrders] = useState<Order[]>(() => {
    const items = loadJson(`${PREFIX.products}${slug}`, getInitialProducts(slug, sector));
    return loadJson(`${PREFIX.orders}${slug}`, getInitialOrders(slug, items));
  });
  const [team, setTeam] = useState<TeamMember[]>(() => loadJson(`${PREFIX.team}${slug}`, getInitialTeam(slug, sector)));
  const [site, setSite] = useState<SiteContent>(() => loadJson(`${PREFIX.site}${slug}`, getInitialSite(brandName, sector, slug)));
  const [metrics, setMetrics] = useState<CompanyMetrics>(() => getCompanyMetrics(slug, brandName, sector));
  const [settings, setSettings] = useState<NotificationSettings>(() => loadJson(STORAGE_SETTINGS_KEY, DEFAULT_SETTINGS));
  const [recentEvent, setRecentEvent] = useState<{ message: string; leadName: string } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const flash = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2800);
  }, []);

  useEffect(() => {
    const prods = loadJson(`${PREFIX.products}${slug}`, getInitialProducts(slug, sector));
    const members = loadJson(`${PREFIX.team}${slug}`, getInitialTeam(slug, sector));
    const loadedLeads = loadJson(`${PREFIX.leads}${slug}`, getInitialLeadsForCompany(slug, sector));
    if (!localStorage.getItem(`${PREFIX.leads}${slug}`)) saveJson(`${PREFIX.leads}${slug}`, loadedLeads);
    if (!localStorage.getItem(`${PREFIX.products}${slug}`)) saveJson(`${PREFIX.products}${slug}`, prods);
    setLeads(loadedLeads);
    setProducts(prods);
    setTeam(members);
    setAppointments(loadJson(`${PREFIX.appointments}${slug}`, getInitialAppointments(slug, sector, prods, members)));
    setOrders(loadJson(`${PREFIX.orders}${slug}`, getInitialOrders(slug, prods)));
    setSite(loadJson(`${PREFIX.site}${slug}`, getInitialSite(brandName, sector, slug)));
    setMetrics(getCompanyMetrics(slug, brandName, sector));
  }, [slug, brandName, sector]);

  const persistLeads = useCallback(
    (next: Lead[]) => {
      setLeads(next);
      saveJson(`${PREFIX.leads}${slug}`, next);
    },
    [slug],
  );
  const persistProducts = useCallback(
    (next: CatalogItem[]) => {
      setProducts(next);
      saveJson(`${PREFIX.products}${slug}`, next);
    },
    [slug],
  );
  const persistAppointments = useCallback(
    (next: Appointment[]) => {
      setAppointments(next);
      saveJson(`${PREFIX.appointments}${slug}`, next);
    },
    [slug],
  );
  const persistOrders = useCallback(
    (next: Order[]) => {
      setOrders(next);
      saveJson(`${PREFIX.orders}${slug}`, next);
    },
    [slug],
  );
  const persistTeam = useCallback(
    (next: TeamMember[]) => {
      setTeam(next);
      saveJson(`${PREFIX.team}${slug}`, next);
    },
    [slug],
  );

  const updateLeadStatus = useCallback(
    (leadId: string, status: LeadStatus) => {
      persistLeads(
        leads.map((lead) => {
          if (lead.id !== leadId) return lead;
          const statusText =
            status === 'contactado'
              ? 'Estado cambiado a Contactado'
              : status === 'agendado'
                ? 'Cita agendada confirmada'
                : status === 'ganado'
                  ? 'Tratamiento / Servicio cerrado exitosamente'
                  : status === 'descartado'
                    ? 'Lead marcado como descartado'
                    : 'Marcado como nuevo';
          return {
            ...lead,
            status,
            notes: [{ id: nid('note'), author: 'Usuario CRM', text: statusText, createdAt: 'Recién' }, ...lead.notes],
          };
        }),
      );
    },
    [leads, persistLeads],
  );

  const addLeadNote = useCallback(
    (leadId: string, text: string, author = 'Ejecutivo') => {
      persistLeads(
        leads.map((lead) =>
          lead.id !== leadId
            ? lead
            : {
                ...lead,
                notes: [{ id: nid('note'), author, text, createdAt: 'Recién' }, ...lead.notes],
              },
        ),
      );
    },
    [leads, persistLeads],
  );

  const createLead = useCallback(
    (input: Pick<Lead, 'name' | 'email' | 'phone' | 'service' | 'valueClp' | 'channel' | 'city'>) => {
      const newLead: Lead = {
        id: nid('lead'),
        companySlug: slug,
        name: input.name,
        email: input.email,
        phone: input.phone,
        service: input.service,
        valueClp: input.valueClp,
        valueUf: clpToUf(input.valueClp),
        channel: input.channel,
        status: 'nuevo',
        city: input.city,
        createdAt: new Date().toISOString(),
        notes: [{ id: nid('note'), author: 'Panel', text: 'Prospecto creado desde el panel', createdAt: 'Recién' }],
      };
      persistLeads([newLead, ...leads]);
      flash('Prospecto creado');
    },
    [leads, persistLeads, slug, flash],
  );

  const simulateNewLead = useCallback(() => {
    const randomFirst = ['Alejandro', 'Valentina', 'Joaquín', 'Constanza', 'Sebastián', 'Isidora', 'Cristóbal', 'Daniela'];
    const randomLast = ['Vial', 'Matte', 'Larraín', 'Errázuriz', 'García-Huidobro', 'Silva', 'Cousiño', 'Undurraga'];
    const randomChannel: Lead['channel'][] = ['Google Ads', 'Instagram', 'Búsqueda Orgánica', 'Referido'];
    const fn = randomFirst[Math.floor(Math.random() * randomFirst.length)];
    const ln = randomLast[Math.floor(Math.random() * randomLast.length)];
    const featured = products.find((p) => p.published && p.featured) || products[0];
    const fullName = `${fn} ${ln}`;
    const newLead: Lead = {
      id: `lead-live-${Date.now()}`,
      companySlug: slug,
      name: fullName,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@contacto.cl`,
      phone: `+56 9 ${Math.floor(6000 + Math.random() * 3999)} ${Math.floor(1000 + Math.random() * 8999)}`,
      service: featured?.name || `Consulta ${sector}`,
      valueClp: featured?.priceClp || Math.floor(1_200_000 + Math.random() * 3_500_000),
      valueUf: featured ? featured.priceUf : Math.floor(35 + Math.random() * 90),
      channel: randomChannel[Math.floor(Math.random() * randomChannel.length)],
      status: 'nuevo',
      city: 'Vitacura / Las Condes, Santiago',
      createdAt: new Date().toISOString(),
      notes: [
        {
          id: `note-${Date.now()}`,
          author: 'Sistema Reclu',
          text: `Solicitó ${featured?.name || 'atención'} desde la web`,
          createdAt: 'Recién',
        },
      ],
    };
    persistLeads([newLead, ...leads]);
    setMetrics((prev) => ({
      ...prev,
      activeNow: prev.activeNow + 1,
      totalVisits30d: prev.totalVisits30d + 1,
      leadsCount: prev.leadsCount + 1,
      pipelineValueClp: prev.pipelineValueClp + newLead.valueClp,
    }));
    setRecentEvent({ message: '¡Nuevo prospecto en tiempo real!', leadName: fullName });
    window.setTimeout(() => setRecentEvent(null), 5000);
  }, [leads, persistLeads, slug, sector, products]);

  const saveProduct = useCallback(
    (item: Partial<CatalogItem> & { name: string }) => {
      const now = new Date().toISOString();
      if (item.id) {
        persistProducts(
          products.map((p) =>
            p.id === item.id
              ? {
                  ...p,
                  ...item,
                  priceUf: clpToUf(item.priceClp ?? p.priceClp),
                  status: item.status ?? p.status,
                  updatedAt: now,
                }
              : p,
          ),
        );
        flash(`${profile.itemLabel} actualizado`);
        return;
      }
      const created: CatalogItem = {
        id: nid('p'),
        companySlug: slug,
        name: item.name,
        sku: item.sku || `${profile.itemLabel.slice(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 899)}`,
        category: item.category || profile.categories[0],
        description: item.description || '',
        priceClp: item.priceClp || 0,
        priceUf: clpToUf(item.priceClp || 0),
        compareAtClp: item.compareAtClp,
        stock: profile.hasStock ? (item.stock ?? 0) : null,
        unit: item.unit || (profile.hasStock ? 'unidad' : 'sesión'),
        durationMin: item.durationMin,
        featured: Boolean(item.featured),
        published: item.published ?? true,
        status: item.status || (item.published === false ? 'borrador' : 'publicado'),
        updatedAt: now,
      };
      persistProducts([created, ...products]);
      flash(`${profile.itemLabel} creado · ${created.published ? `visible en ${profile.webPath}` : 'borrador'}`);
    },
    [products, persistProducts, slug, profile, flash],
  );

  const toggleProductPublished = useCallback(
    (id: string) => {
      persistProducts(
        products.map((p) => {
          if (p.id !== id) return p;
          const published = !p.published;
          return {
            ...p,
            published,
            status: published ? (p.stock === 0 ? 'agotado' : 'publicado') : 'oculto',
            updatedAt: new Date().toISOString(),
          };
        }),
      );
    },
    [products, persistProducts],
  );

  const toggleProductFeatured = useCallback(
    (id: string) => {
      persistProducts(
        products.map((p) => (p.id === id ? { ...p, featured: !p.featured, updatedAt: new Date().toISOString() } : p)),
      );
    },
    [products, persistProducts],
  );

  const adjustStock = useCallback(
    (id: string, delta: number) => {
      persistProducts(
        products.map((p) => {
          if (p.id !== id || p.stock === null) return p;
          const stock = Math.max(0, p.stock + delta);
          return {
            ...p,
            stock,
            status: stock === 0 && p.published ? 'agotado' : p.status === 'agotado' && stock > 0 ? 'publicado' : p.status,
            updatedAt: new Date().toISOString(),
          };
        }),
      );
    },
    [products, persistProducts],
  );

  const deleteProduct = useCallback(
    (id: string) => {
      persistProducts(products.filter((p) => p.id !== id));
      flash(`${profile.itemLabel} eliminado`);
    },
    [products, persistProducts, profile, flash],
  );

  const duplicateProduct = useCallback(
    (id: string) => {
      const src = products.find((p) => p.id === id);
      if (!src) return;
      const copy: CatalogItem = {
        ...src,
        id: nid('p'),
        name: `${src.name} (copia)`,
        sku: `${src.sku}-C`,
        published: false,
        featured: false,
        status: 'borrador',
        updatedAt: new Date().toISOString(),
      };
      persistProducts([copy, ...products]);
      flash('Copia creada como borrador');
    },
    [products, persistProducts, flash],
  );

  const saveAppointment = useCallback(
    (item: Partial<Appointment> & { clientName: string; service: string; startsAt: string }) => {
      if (item.id) {
        persistAppointments(appointments.map((a) => (a.id === item.id ? { ...a, ...item } : a)));
        flash('Cita actualizada');
        return;
      }
      persistAppointments([
        {
          id: nid('ap'),
          companySlug: slug,
          clientName: item.clientName,
          clientPhone: item.clientPhone || '',
          service: item.service,
          professional: item.professional || team[0]?.name || 'Equipo',
          startsAt: item.startsAt,
          durationMin: item.durationMin || 45,
          status: item.status || 'pendiente',
          notes: item.notes || '',
          valueClp: item.valueClp || 0,
        },
        ...appointments,
      ]);
      flash('Cita creada');
    },
    [appointments, persistAppointments, slug, team, flash],
  );

  const updateAppointmentStatus = useCallback(
    (id: string, status: AppointmentStatus) => {
      persistAppointments(appointments.map((a) => (a.id === id ? { ...a, status } : a)));
    },
    [appointments, persistAppointments],
  );

  const updateOrderStatus = useCallback(
    (id: string, status: OrderStatus) => {
      persistOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
    },
    [orders, persistOrders],
  );

  const saveTeamMember = useCallback(
    (item: Partial<TeamMember> & { name: string; role: string }) => {
      if (item.id) {
        persistTeam(team.map((t) => (t.id === item.id ? { ...t, ...item } : t)));
        flash('Integrante actualizado');
        return;
      }
      persistTeam([
        {
          id: nid('tm'),
          name: item.name,
          role: item.role,
          email: item.email || '',
          phone: item.phone || '',
          specialty: item.specialty || '',
          active: item.active ?? true,
        },
        ...team,
      ]);
      flash('Integrante agregado');
    },
    [team, persistTeam, flash],
  );

  const saveSite = useCallback(
    (next: SiteContent) => {
      setSite(next);
      saveJson(`${PREFIX.site}${slug}`, next);
      flash('Sitio actualizado · se refleja en la web');
    },
    [slug, flash],
  );

  const saveSettings = useCallback((newSettings: NotificationSettings) => {
    setSettings(newSettings);
    saveJson(STORAGE_SETTINGS_KEY, newSettings);
  }, []);

  const exportToCsv = useCallback(() => {
    const headers = ['ID', 'Nombre', 'Email', 'Telefono', 'Servicio', 'Valor CLP', 'Valor UF', 'Canal', 'Estado', 'Fecha', 'Ciudad'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      l.email,
      `"${l.phone}"`,
      `"${l.service}"`,
      l.valueClp,
      l.valueUf,
      `"${l.channel}"`,
      l.status,
      l.createdAt,
      `"${l.city}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_${slug}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [leads, slug]);

  const exportCatalogCsv = useCallback(() => {
    const headers = ['SKU', 'Nombre', 'Categoria', 'Precio CLP', 'UF', 'Stock', 'Estado', 'Web', 'Destacado'];
    const rows = products.map((p) => [
      p.sku,
      `"${p.name}"`,
      `"${p.category}"`,
      p.priceClp,
      p.priceUf,
      p.stock ?? '',
      p.status,
      p.published ? 'si' : 'no',
      p.featured ? 'si' : 'no',
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `catalogo_${slug}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [products, slug]);

  return {
    profile,
    leads,
    products,
    appointments,
    orders,
    team,
    site,
    metrics,
    settings,
    recentEvent,
    toast,
    updateLeadStatus,
    addLeadNote,
    createLead,
    simulateNewLead,
    saveProduct,
    toggleProductPublished,
    toggleProductFeatured,
    adjustStock,
    deleteProduct,
    duplicateProduct,
    saveAppointment,
    updateAppointmentStatus,
    updateOrderStatus,
    saveTeamMember,
    saveSite,
    saveSettings,
    exportToCsv,
    exportCatalogCsv,
  };
}

export type CrmStore = ReturnType<typeof useCrmStore>;

export function formatClp(val: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(val);
}

export function formatWhen(iso: string): string {
  return new Date(iso).toLocaleString('es-CL', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

export function formatDay(iso: string): string {
  return new Date(iso).toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' });
}

export type { CatalogProfile, ProductStatus };
