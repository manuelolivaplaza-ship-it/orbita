import React, { useEffect, useMemo, useState } from 'react';
import { Zap, Plus, LayoutList, Kanban } from 'lucide-react';
import { useCrmStore } from '../../lib/crmStore';
import type { Lead } from '../../data/crmMockData';
import { CrmShell, type CrmSection } from './CrmShell';
import { CrmOverviewPanel } from './CrmOverviewPanel';
import { CrmProductsPanel } from './CrmProductsPanel';
import { CrmAgendaPanel, CrmOrdersPanel, CrmTeamPanel } from './CrmOpsPanels';
import { CrmSettingsPanel } from './CrmSettingsPanel';
import { CrmLeadsTable } from './CrmLeadsTable';
import { CrmKanbanBoard } from './CrmKanbanBoard';
import { CrmLeadDrawer } from './CrmLeadDrawer';
import { CrmDrawer, Field, fieldClass } from './CrmDrawer';

export function CrmWorkspace({
  slug,
  brand,
  sector,
  description,
  compact,
  onSelectCompany,
  initialSection = 'overview',
}: {
  slug: string;
  brand: string;
  sector: string;
  description?: string;
  compact?: boolean;
  onSelectCompany?: (slug: string) => void;
  initialSection?: CrmSection;
}) {
  const [section, setSection] = useState<CrmSection>(initialSection);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [leadView, setLeadView] = useState<'table' | 'kanban'>('table');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newLeadOpen, setNewLeadOpen] = useState(false);

  const store = useCrmStore(slug, brand, sector);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLead(null);
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const liveSelected = useMemo(
    () => (selectedLead ? store.leads.find((l) => l.id === selectedLead.id) || selectedLead : null),
    [selectedLead, store.leads],
  );

  const todayCount = store.appointments.filter((a) => {
    const d = new Date(a.startsAt);
    const n = new Date();
    return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && a.status !== 'cancelada';
  }).length;

  return (
    <CrmShell
      currentSlug={slug}
      brand={brand}
      sector={sector}
      profile={store.profile}
      section={section}
      onSection={setSection}
      counts={{
        leads: store.leads.filter((l) => l.status === 'nuevo').length,
        catalog: store.products.filter((p) => p.published).length,
        agenda: todayCount,
        orders: store.orders.filter((o) => !['entregado', 'cancelado'].includes(o.status)).length,
      }}
      activeNow={store.metrics.activeNow}
      sidebarOpen={sidebarOpen}
      onSidebar={setSidebarOpen}
      compact={compact}
      onSelectCompany={onSelectCompany}
      onSimulateLead={store.simulateNewLead}
      onExportCsv={section === 'catalog' ? store.exportCatalogCsv : store.exportToCsv}
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl space-y-4 px-3 py-4 sm:space-y-5 sm:px-6 sm:py-5">
        {description && section === 'overview' && (
          <p className="text-xs text-zinc-500">{description}</p>
        )}

        {section === 'overview' && <CrmOverviewPanel store={store} brand={brand} onSection={setSection} />}

        {section === 'leads' && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-0.5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setLeadView('table')}
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 ${leadView === 'table' ? 'bg-zinc-950 text-white' : 'text-zinc-600'}`}
                >
                  <LayoutList className="h-3.5 w-3.5" />
                  Lista
                </button>
                <button
                  type="button"
                  onClick={() => setLeadView('kanban')}
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 ${leadView === 'kanban' ? 'bg-zinc-950 text-white' : 'text-zinc-600'}`}
                >
                  <Kanban className="h-3.5 w-3.5" />
                  Pipeline
                </button>
              </div>
              <button
                type="button"
                onClick={() => setNewLeadOpen(true)}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-zinc-950 px-3 py-2 text-xs font-medium text-white sm:py-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                Nuevo prospecto
              </button>
            </div>
            {leadView === 'table' ? (
              <CrmLeadsTable
                leads={store.leads}
                companyName={brand}
                onSelectLead={setSelectedLead}
                onUpdateStatus={store.updateLeadStatus}
              />
            ) : (
              <CrmKanbanBoard
                leads={store.leads}
                companyName={brand}
                onSelectLead={setSelectedLead}
                onUpdateStatus={store.updateLeadStatus}
              />
            )}
          </div>
        )}

        {section === 'catalog' && (
          <CrmProductsPanel
            profile={store.profile}
            products={store.products}
            onSave={store.saveProduct}
            onTogglePublished={store.toggleProductPublished}
            onToggleFeatured={store.toggleProductFeatured}
            onAdjustStock={store.adjustStock}
            onDelete={store.deleteProduct}
            onDuplicate={store.duplicateProduct}
            onExport={store.exportCatalogCsv}
          />
        )}

        {section === 'agenda' && (
          <CrmAgendaPanel
            appointments={store.appointments}
            services={store.products.filter((p) => p.published).map((p) => p.name)}
            team={store.team.filter((t) => t.active).map((t) => t.name)}
            onSave={store.saveAppointment}
            onStatus={store.updateAppointmentStatus}
          />
        )}

        {section === 'orders' && <CrmOrdersPanel orders={store.orders} onStatus={store.updateOrderStatus} />}

        {section === 'team' && <CrmTeamPanel team={store.team} onSave={store.saveTeamMember} />}

        {section === 'settings' && (
          <CrmSettingsPanel
            settings={store.settings}
            site={store.site}
            companyName={brand}
            profile={store.profile}
            onSaveSettings={store.saveSettings}
            onSaveSite={store.saveSite}
          />
        )}
      </div>

      {store.recentEvent && (
        <div className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom))] left-3 right-3 z-50 flex items-center gap-3 rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-white shadow-2xl sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm lg:bottom-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-zinc-950">
            <Zap className="h-4 w-4" />
          </div>
          <div className="text-xs">
            <div className="font-semibold text-amber-300">{store.recentEvent.message}</div>
            <div className="text-zinc-300">
              <span className="font-bold text-white">{store.recentEvent.leadName}</span> acaba de solicitar atención.
            </div>
          </div>
        </div>
      )}

      {store.toast && (
        <div className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-1/2 z-50 max-w-[calc(100vw-1.5rem)] -translate-x-1/2 rounded-full bg-zinc-950 px-4 py-2 text-xs font-medium text-white shadow-xl lg:bottom-6">
          {store.toast}
        </div>
      )}

      <CrmLeadDrawer
        lead={liveSelected}
        companyName={brand}
        onClose={() => setSelectedLead(null)}
        onUpdateStatus={store.updateLeadStatus}
        onAddNote={store.addLeadNote}
      />

      <NewLeadDrawer
        open={newLeadOpen}
        services={store.products.map((p) => p.name)}
        onClose={() => setNewLeadOpen(false)}
        onCreate={(input) => {
          store.createLead(input);
          setNewLeadOpen(false);
        }}
      />
    </CrmShell>
  );
}

function NewLeadDrawer({
  open,
  services,
  onClose,
  onCreate,
}: {
  open: boolean;
  services: string[];
  onClose: () => void;
  onCreate: (input: Pick<Lead, 'name' | 'email' | 'phone' | 'service' | 'valueClp' | 'channel' | 'city'>) => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(services[0] || '');
  const [valueClp, setValueClp] = useState('');
  const [city, setCity] = useState('Santiago');

  return (
    <CrmDrawer open={open} title="Nuevo prospecto" subtitle="Queda en la bandeja como Nuevo." onClose={onClose}>
      <form
        className="space-y-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          onCreate({
            name,
            email,
            phone,
            service,
            valueClp: Number(valueClp) || 0,
            channel: 'Directo',
            city,
          });
          setName('');
          setEmail('');
          setPhone('');
          setValueClp('');
        }}
      >
        <Field label="Nombre">
          <input className={fieldClass} required value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Email">
          <input className={fieldClass} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="WhatsApp">
          <input className={fieldClass} required value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <Field label="Interés">
          <select className={fieldClass} value={service} onChange={(e) => setService(e.target.value)}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Valor estimado CLP">
            <input className={fieldClass} inputMode="numeric" value={valueClp} onChange={(e) => setValueClp(e.target.value)} />
          </Field>
          <Field label="Comuna">
            <input className={fieldClass} value={city} onChange={(e) => setCity(e.target.value)} />
          </Field>
        </div>
        <button type="submit" className="w-full rounded-xl bg-zinc-950 py-2.5 text-sm font-medium text-white">
          Guardar en bandeja
        </button>
      </form>
    </CrmDrawer>
  );
}
