import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ExternalLink,
  Download,
  Zap,
  TrendingUp,
  Inbox,
  Kanban,
  Settings,
  ChevronDown,
  Circle,
} from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { CompanySelectorDropdown } from './CompanySelectorDropdown';

export type CrmTab = 'analytics' | 'leads' | 'kanban' | 'settings';

interface CrmHeaderProps {
  currentSlug: string;
  activeTab: CrmTab;
  onTabChange: (tab: CrmTab) => void;
  activeNow: number;
  leadsCount: number;
  onSimulateLead: () => void;
  onExportCsv: () => void;
  onSelectCompany?: (slug: string) => void;
}

export const CrmHeader: React.FC<CrmHeaderProps> = ({
  currentSlug,
  activeTab,
  onTabChange,
  activeNow,
  leadsCount,
  onSimulateLead,
  onExportCsv,
  onSelectCompany,
}) => {
  const navigate = useNavigate();
  const currentProposal = catalogo.find((p) => p.slug === currentSlug) || catalogo[0];

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      {/* Upper bar: Brand, Company selector, Live pulse, Actions */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Link
            to="/"
            className="font-mono text-xs font-semibold tracking-widest text-zinc-900 uppercase transition-opacity hover:opacity-75 shrink-0"
          >
            ÓRBITA
          </Link>
          <span className="text-zinc-300">/</span>

          {/* Bespoke Company switcher dropdown */}
          <CompanySelectorDropdown currentSlug={currentSlug} onSelect={onSelectCompany} />

          {/* Live visitors badge (Vercel pulse style) */}
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
            <Circle className="h-1.5 w-1.5 fill-emerald-500 text-emerald-500 animate-pulse" />
            <span className="font-mono tabular-nums">{activeNow}</span> en vivo
          </div>
        </div>

        {/* Right action buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={onSimulateLead}
            className="group inline-flex items-center gap-1 sm:gap-1.5 rounded-lg border border-zinc-900 bg-zinc-900 px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs font-medium text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-[0.98]"
            title="Simula la entrada de un nuevo prospecto con notificación en tiempo real"
          >
            <Zap className="h-3.5 w-3.5 text-amber-400 transition-transform group-hover:scale-110" />
            <span>Simular Lead</span>
          </button>

          <button
            type="button"
            onClick={onExportCsv}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-xs transition-colors hover:bg-zinc-50"
            title="Exportar base de prospectos a CSV / Excel"
          >
            <Download className="h-3.5 w-3.5 text-zinc-500" />
            <span>CSV</span>
          </button>

          <Link
            to={`/propuesta/${currentSlug}`}
            target="_blank"
            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs font-medium text-zinc-700 shadow-xs transition-colors hover:bg-zinc-50"
            title="Abrir la página web en una pestaña nueva"
          >
            <span className="hidden sm:inline">Ver Sitio</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
          </Link>
        </div>
      </div>

      {/* Lower tab navigation (Vercel hairline tabs with native horizontal scroll on mobile) */}
      <div className="mx-auto flex max-w-7xl space-x-1 px-3 sm:px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[
          { id: 'analytics' as CrmTab, label: 'Analítica & Vistas', icon: TrendingUp },
          { id: 'leads' as CrmTab, label: 'Bandeja de Leads', icon: Inbox, count: leadsCount },
          { id: 'kanban' as CrmTab, label: 'Pipeline Kanban', icon: Kanban },
          { id: 'settings' as CrmTab, label: 'WhatsApp & Alertas', icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center gap-2 py-3 px-3.5 text-xs font-medium transition-colors shrink-0 whitespace-nowrap ${
                isActive
                  ? 'text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`} />
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] tabular-nums ${
                    isActive
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-600'
                  }`}
                >
                  {tab.count}
                </span>
              )}
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-950" />
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
};
