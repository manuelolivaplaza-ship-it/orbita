import { useState, useEffect, useCallback } from 'react';
import { Lead, LeadStatus, getInitialLeadsForCompany, getCompanyMetrics, CompanyMetrics } from '../data/crmMockData';

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
  webhookUrl: 'https://api.orbita.cl/v1/leads/webhook',
  webhookEnabled: false,
  notifyOnEveryLead: true,
  soundEnabled: true,
};

const STORAGE_LEADS_PREFIX = 'orbita_crm_leads_';
const STORAGE_SETTINGS_KEY = 'orbita_crm_settings';

export function useCrmStore(slug: string, brandName: string, sector: string) {
  const storageKey = `${STORAGE_LEADS_PREFIX}${slug}`;

  // 1. Leads State
  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
    } catch {}
    return getInitialLeadsForCompany(slug, sector);
  });

  // 2. Metrics State
  const [metrics, setMetrics] = useState<CompanyMetrics>(() => {
    return getCompanyMetrics(slug, brandName, sector);
  });

  // 3. Settings State
  const [settings, setSettings] = useState<NotificationSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SETTINGS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_SETTINGS;
  });

  // 4. Notification Banner State (for live simulated events)
  const [recentEvent, setRecentEvent] = useState<{ message: string; leadName: string } | null>(null);

  // Sync leads with slug change
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setLeads(JSON.parse(saved));
      } else {
        const initial = getInitialLeadsForCompany(slug, sector);
        setLeads(initial);
        localStorage.setItem(storageKey, JSON.stringify(initial));
      }
    } catch {
      setLeads(getInitialLeadsForCompany(slug, sector));
    }
    setMetrics(getCompanyMetrics(slug, brandName, sector));
  }, [slug, brandName, sector, storageKey]);

  // Persist leads
  const saveLeads = useCallback(
    (newLeads: Lead[]) => {
      setLeads(newLeads);
      try {
        localStorage.setItem(storageKey, JSON.stringify(newLeads));
      } catch {}
    },
    [storageKey],
  );

  // Update Status
  const updateLeadStatus = useCallback(
    (leadId: string, status: LeadStatus) => {
      saveLeads(
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
            notes: [
              {
                id: `note-${Date.now()}`,
                author: 'Usuario CRM',
                text: statusText,
                createdAt: 'Recién',
              },
              ...lead.notes,
            ],
          };
        }),
      );
    },
    [leads, saveLeads],
  );

  // Add Note
  const addLeadNote = useCallback(
    (leadId: string, text: string, author = 'Ejecutivo') => {
      saveLeads(
        leads.map((lead) => {
          if (lead.id !== leadId) return lead;
          return {
            ...lead,
            notes: [
              {
                id: `note-${Date.now()}`,
                author,
                text,
                createdAt: 'Recién',
              },
              ...lead.notes,
            ],
          };
        }),
      );
    },
    [leads, saveLeads],
  );

  // Simulate incoming live lead (Demo effect)
  const simulateNewLead = useCallback(() => {
    const randomFirst = ['Alejandro', 'Valentina', 'Joaquín', 'Constanza', 'Sebastián', 'Isidora', 'Cristóbal', 'Daniela'];
    const randomLast = ['Vial', 'Matte', 'Larraín', 'Errázuriz', 'García-Huidobro', 'Silva', 'Cousiño', 'Undurraga'];
    const randomChannel: Lead['channel'][] = ['Google Ads', 'Instagram', 'Búsqueda Orgánica', 'Referido'];
    
    const fn = randomFirst[Math.floor(Math.random() * randomFirst.length)];
    const ln = randomLast[Math.floor(Math.random() * randomLast.length)];
    const fullName = `${fn} ${ln}`;
    const email = `${fn.toLowerCase()}.${ln.toLowerCase()}@contacto.cl`;
    const phone = `+56 9 ${Math.floor(6000 + Math.random() * 3999)} ${Math.floor(1000 + Math.random() * 8999)}`;
    const channel = randomChannel[Math.floor(Math.random() * randomChannel.length)];

    const newLead: Lead = {
      id: `lead-live-${Date.now()}`,
      companySlug: slug,
      name: fullName,
      email,
      phone,
      service: `Consulta prioritaria ${sector.toUpperCase()}`,
      valueClp: Math.floor(1200000 + Math.random() * 3500000),
      valueUf: Math.floor(35 + Math.random() * 90),
      channel,
      status: 'nuevo',
      city: 'Vitacura / Las Condes, Santiago',
      createdAt: new Date().toISOString(),
      notes: [
        {
          id: `note-${Date.now()}`,
          author: 'Sistema Órbita',
          text: `Prospecto capturado en tiempo real desde ${channel}`,
          createdAt: 'Recién',
        },
      ],
    };

    saveLeads([newLead, ...leads]);

    // Update metrics live
    setMetrics((prev) => ({
      ...prev,
      activeNow: prev.activeNow + 1,
      totalVisits30d: prev.totalVisits30d + 1,
      leadsCount: prev.leadsCount + 1,
      pipelineValueClp: prev.pipelineValueClp + newLead.valueClp,
    }));

    setRecentEvent({
      message: '¡Nuevo prospecto en tiempo real!',
      leadName: fullName,
    });

    setTimeout(() => {
      setRecentEvent(null);
    }, 5000);
  }, [leads, saveLeads, slug, sector]);

  // Save Settings
  const saveSettings = useCallback((newSettings: NotificationSettings) => {
    setSettings(newSettings);
    try {
      localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(newSettings));
    } catch {}
  }, []);

  // Export to CSV
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

  return {
    leads,
    metrics,
    settings,
    recentEvent,
    updateLeadStatus,
    addLeadNote,
    simulateNewLead,
    saveSettings,
    exportToCsv,
  };
}

export function formatClp(val: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(val);
}
