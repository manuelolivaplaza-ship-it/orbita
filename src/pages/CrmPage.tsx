import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Zap, Sparkles, Calendar, RefreshCw } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { PageMeta } from '../components/PageMeta';
import { useCrmStore } from '../lib/crmStore';
import { CrmHeader, CrmTab } from '../components/crm/CrmHeader';
import { CrmMetricsGrid } from '../components/crm/CrmMetricsGrid';
import { CrmAnalyticsChart } from '../components/crm/CrmAnalyticsChart';
import { CrmAudienceBreakdown } from '../components/crm/CrmAudienceBreakdown';
import { CrmLeadsTable } from '../components/crm/CrmLeadsTable';
import { CrmKanbanBoard } from '../components/crm/CrmKanbanBoard';
import { CrmLeadDrawer } from '../components/crm/CrmLeadDrawer';
import { CrmNotificationConfig } from '../components/crm/CrmNotificationConfig';
import { Lead } from '../data/crmMockData';

export default function CrmPage() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<CrmTab>('analytics');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLead(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Find active proposal or fallback to first
  const currentProposal = useMemo(() => {
    if (slug) {
      const found = catalogo.find((p) => p.slug === slug);
      if (found) return found;
    }
    return catalogo.find((p) => p.slug === 'dentista-b-oscuro-premium') || catalogo[0];
  }, [slug]);

  const {
    leads,
    metrics,
    settings,
    recentEvent,
    updateLeadStatus,
    addLeadNote,
    simulateNewLead,
    saveSettings,
    exportToCsv,
  } = useCrmStore(currentProposal.slug, currentProposal.brand, currentProposal.sector);

  return (
    <div className="min-h-svh bg-[#FAFAF9] text-zinc-950 font-sans antialiased selection:bg-zinc-900 selection:text-white pb-20">
      <PageMeta
        title={`Panel CRM & Analítica · ${currentProposal.brand}`}
        description="Panel de control en tiempo real, gestión de prospectos y métricas de rendimiento web."
      />

      {/* Vercel-Style Top Navigation */}
      <CrmHeader
        currentSlug={currentProposal.slug}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeNow={metrics.activeNow}
        leadsCount={leads.length}
        onSimulateLead={simulateNewLead}
        onExportCsv={exportToCsv}
      />

      {/* Live Event Notification Banner (Simulated Lead Pulse) */}
      {recentEvent && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-white shadow-2xl animate-bounce">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-zinc-950">
            <Zap className="h-4 w-4" />
          </div>
          <div className="text-xs">
            <div className="font-semibold text-amber-300">{recentEvent.message}</div>
            <div className="text-zinc-300">
              <span className="font-bold text-white">{recentEvent.leadName}</span> acaba de solicitar atención.
            </div>
          </div>
        </div>
      )}

      {/* Main Content Body */}
      <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 space-y-6">
        {/* Welcome subheader with date range and status */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200/60 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                Panel de {currentProposal.brand}
              </h1>
              <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-600 uppercase">
                {currentProposal.sector}
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5">
              {currentProposal.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs font-mono text-zinc-600 shadow-2xs">
              <Calendar className="h-3.5 w-3.5 text-zinc-400" />
              <span>27 Ago – 02 Sep 2026</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-[11px] font-mono text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Sincronizado</span>
            </div>
          </div>
        </div>

        {/* Tab 1: Analytics & Views */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 animate-fade-in">
            <CrmMetricsGrid metrics={metrics} />
            <CrmAnalyticsChart data7d={metrics.chartData7d} data30d={metrics.chartData30d} />
            <CrmAudienceBreakdown
              devices={metrics.devices}
              channels={metrics.channels}
              topPages={metrics.topPages}
              locations={metrics.locations}
            />
          </div>
        )}

        {/* Tab 2: Leads Table View */}
        {activeTab === 'leads' && (
          <div className="animate-fade-in">
            <CrmLeadsTable
              leads={leads}
              companyName={currentProposal.brand}
              onSelectLead={setSelectedLead}
              onUpdateStatus={updateLeadStatus}
            />
          </div>
        )}

        {/* Tab 3: Kanban Pipeline View */}
        {activeTab === 'kanban' && (
          <div className="animate-fade-in">
            <CrmKanbanBoard
              leads={leads}
              companyName={currentProposal.brand}
              onSelectLead={setSelectedLead}
              onUpdateStatus={updateLeadStatus}
            />
          </div>
        )}

        {/* Tab 4: Settings & Automations */}
        {activeTab === 'settings' && (
          <div className="animate-fade-in pt-2">
            <CrmNotificationConfig
              settings={settings}
              companyName={currentProposal.brand}
              onSave={saveSettings}
            />
          </div>
        )}
      </main>

      {/* Slide-over Drawer for Lead Details */}
      <CrmLeadDrawer
        lead={selectedLead}
        companyName={currentProposal.brand}
        onClose={() => setSelectedLead(null)}
        onUpdateStatus={updateLeadStatus}
        onAddNote={addLeadNote}
      />
    </div>
  );
}
