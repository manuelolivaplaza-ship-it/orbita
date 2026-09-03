import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Sparkles,
  Calendar,
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  BarChart3,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { useCrmStore } from '../../lib/crmStore';
import { CrmHeader, CrmTab } from '../crm/CrmHeader';
import { CrmMetricsGrid } from '../crm/CrmMetricsGrid';
import { CrmAnalyticsChart } from '../crm/CrmAnalyticsChart';
import { CrmAudienceBreakdown } from '../crm/CrmAudienceBreakdown';
import { CrmLeadsTable } from '../crm/CrmLeadsTable';
import { CrmKanbanBoard } from '../crm/CrmKanbanBoard';
import { CrmLeadDrawer } from '../crm/CrmLeadDrawer';
import { CrmNotificationConfig } from '../crm/CrmNotificationConfig';
import { Lead } from '../../data/crmMockData';

export const CrmShowcase: React.FC = () => {
  const [currentSlug, setCurrentSlug] = useState('dentista-b-oscuro-premium');
  const [activeTab, setActiveTab] = useState<CrmTab>('analytics');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedLead(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentProposal = useMemo(() => {
    const found = catalogo.find((p) => p.slug === currentSlug);
    return found || catalogo[0];
  }, [currentSlug]);

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
    <section id="crm-showcase" className="relative z-10 bg-[#F7F8FC] px-4 py-20 sm:px-6 sm:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[46rem] w-[64rem] rounded-full opacity-35 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[88rem]">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 sm:mb-14 items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-700 shadow-2xs mb-4">
              <Sparkles className="h-3.5 w-3.5 text-zinc-900" />
              <span>Ecosistema de Control · Incluido en tu web</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B0B12] leading-[1.04]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Tu web no es un folleto.
              <br />
              Viene con panel de control.
            </h2>
          </div>

          <div>
            <p className="text-base sm:text-xl text-zinc-600 leading-snug font-normal mb-5 max-w-md">
              Cada propuesta incluye su propio CRM privado: monitorea visitantes en vivo, gestiona prospectos en pipeline y dispara mensajes de WhatsApp en 1 clic — sin software adicional ni suscripciones mensuales.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={`/crm/${currentProposal.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B0B12] text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <span>Abrir CRM a pantalla completa</span>
                <Maximize2 className="w-4 h-4 text-zinc-300" />
              </Link>
              <button
                type="button"
                onClick={simulateNewLead}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors shadow-2xs"
              >
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Simular Lead Entrante</span>
              </button>
            </div>
          </div>
        </div>

        {/* Native CRM Application Surface (Clean and Direct, no fake browser) */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-[#FAFAF9] shadow-[0_28px_80px_-24px_rgba(15,23,42,0.12)] overflow-hidden">
          {/* CRM Container Workspace */}
          <div className="relative max-h-[840px] overflow-y-auto overflow-x-hidden pb-12">
            {/* Real CrmHeader Component */}
            <CrmHeader
              currentSlug={currentProposal.slug}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              activeNow={metrics.activeNow}
              leadsCount={leads.length}
              onSimulateLead={simulateNewLead}
              onExportCsv={exportToCsv}
              onSelectCompany={(slug) => setCurrentSlug(slug)}
            />

            {/* Live Notification Banner */}
            {recentEvent && (
              <div className="mx-4 mt-4 sm:mx-6 flex items-center gap-3 rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-white shadow-xl animate-fade-in">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-zinc-950 shrink-0">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-amber-300">{recentEvent.message}</div>
                  <div className="text-zinc-300">
                    <span className="font-bold text-white">{recentEvent.leadName}</span> acaba de solicitar atención desde la web.
                  </div>
                </div>
              </div>
            )}

            {/* Main CRM Body */}
            <div className="mx-auto max-w-7xl px-3 pt-5 sm:px-6 space-y-6">
              {/* Subheader: Company title, sector pill, and date range */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200/60 pb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-lg font-bold tracking-tight text-zinc-950 sm:text-2xl">
                      Panel de {currentProposal.brand}
                    </h1>
                    <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-600 uppercase">
                      {currentProposal.sector}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                    {currentProposal.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
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

              {/* Tab 1: Analytics View (Exact components: Grid + Chart + Audience) */}
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

              {/* Tab 4: Settings & Automations View */}
              {activeTab === 'settings' && (
                <div className="animate-fade-in pt-2">
                  <CrmNotificationConfig
                    settings={settings}
                    companyName={currentProposal.brand}
                    onSave={saveSettings}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Lead Details Slide-over Drawer */}
          <CrmLeadDrawer
            lead={selectedLead}
            companyName={currentProposal.brand}
            onClose={() => setSelectedLead(null)}
            onUpdateStatus={updateLeadStatus}
            onAddNote={addLeadNote}
          />
        </div>

        {/* 3 Value Pillars Below the Mockup */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#0B0B12] mb-2">
              Disparo directo a WhatsApp
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Cero formularios perdidos en spam. Cuando un cliente cotiza, recibes la alerta en tu teléfono y le respondes en menos de 2 minutos con un mensaje pre-configurado.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#0B0B12] mb-2">
              Sin suscripciones mensuales
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              A diferencia de HubSpot o Salesforce ($50 a $150 USD/mes), este panel corre en la misma arquitectura de tu web. Es 100% tuyo para siempre sin cuotas ocultas.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#0B0B12] mb-2">
              Analítica transparente estilo Vercel
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Sabes exactamente de dónde llegan tus prospectos (Google, Instagram, Ads), qué servicios consultan más y la velocidad real de carga en dispositivos móviles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
