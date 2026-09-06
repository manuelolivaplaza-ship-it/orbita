import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  Package,
  CalendarDays,
  ShoppingBag,
  Users,
  Settings,
  Menu,
  X,
  Circle,
  Download,
  Zap,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import { CompanySelectorDropdown } from './CompanySelectorDropdown';
import type { CatalogProfile } from '../../data/crmCatalog';

export type CrmSection = 'overview' | 'leads' | 'catalog' | 'agenda' | 'orders' | 'team' | 'settings';

const NAV: { id: CrmSection; label?: string; icon: LucideIcon }[] = [
  { id: 'overview', label: 'Resumen', icon: LayoutDashboard },
  { id: 'leads', label: 'Prospectos', icon: Inbox },
  { id: 'catalog', icon: Package },
  { id: 'agenda', label: 'Agenda', icon: CalendarDays },
  { id: 'orders', label: 'Pedidos', icon: ShoppingBag },
  { id: 'team', label: 'Equipo', icon: Users },
  { id: 'settings', label: 'Ajustes', icon: Settings },
];

interface CrmShellProps {
  currentSlug: string;
  brand: string;
  sector: string;
  profile: CatalogProfile;
  section: CrmSection;
  onSection: (s: CrmSection) => void;
  counts: Partial<Record<CrmSection, number>>;
  activeNow: number;
  sidebarOpen: boolean;
  onSidebar: (open: boolean) => void;
  compact?: boolean;
  onSelectCompany?: (slug: string) => void;
  onSimulateLead: () => void;
  onExportCsv: () => void;
  children: React.ReactNode;
}

export function CrmShell({
  currentSlug,
  brand,
  sector,
  profile,
  section,
  onSection,
  counts,
  activeNow,
  sidebarOpen,
  onSidebar,
  compact,
  onSelectCompany,
  onSimulateLead,
  onExportCsv,
  children,
}: CrmShellProps) {
  const nav = NAV.map((item) => ({
    ...item,
    label: item.id === 'catalog' ? profile.navLabel : item.label || item.id,
  }));

  const NavList = (
    <nav className="flex-1 space-y-0.5 px-2 py-3">
      {nav.map((item) => {
        const Icon = item.icon;
        const active = section === item.id;
        const count = counts[item.id];
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              onSection(item.id);
              onSidebar(false);
            }}
            className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors ${
              active
                ? 'bg-zinc-950 font-semibold text-white'
                : 'font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'
            }`}
          >
            <Icon className={`h-4 w-4 ${active ? 'text-white' : 'text-zinc-400'}`} />
            <span className="flex-1 text-left truncate">{item.label}</span>
            {typeof count === 'number' && (
              <span
                className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] tabular-nums ${
                  active ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-500'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className={`relative flex bg-[#F4F4F5] text-zinc-950 ${compact ? 'h-full' : 'h-svh'} overflow-hidden`}>
      {sidebarOpen && (
        <button
          type="button"
          className="absolute inset-0 z-40 bg-zinc-950/40 lg:hidden"
          aria-label="Cerrar menú"
          onClick={() => onSidebar(false)}
        />
      )}

      <aside
        className={`absolute inset-y-0 left-0 z-50 flex w-[240px] flex-col border-r border-zinc-200 bg-white transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center justify-between gap-2 border-b border-zinc-100 px-3">
          <Link to="/" className="font-mono text-[11px] font-semibold tracking-[0.18em] text-zinc-950">
            RECLU
          </Link>
          <button type="button" className="rounded-md p-1 text-zinc-400 lg:hidden" onClick={() => onSidebar(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="border-b border-zinc-100 px-3 py-3">
          <p className="mb-2 px-0.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400">Empresa</p>
          <CompanySelectorDropdown currentSlug={currentSlug} onSelect={onSelectCompany} />
        </div>
        {NavList}
        <div className="border-t border-zinc-100 px-3 py-3 text-[11px] text-zinc-400">
          <div className="truncate font-medium text-zinc-700">{brand}</div>
          <div className="mt-0.5 font-mono uppercase tracking-wider">{sector}</div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-zinc-200/80 bg-white/90 px-3 backdrop-blur-md sm:px-5">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-200 p-1.5 text-zinc-600 lg:hidden"
              onClick={() => onSidebar(true)}
              aria-label="Abrir menú"
            >
              <Menu className="h-4 w-4" />
            </button>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight">{nav.find((n) => n.id === section)?.label}</div>
              <div className="hidden text-[11px] text-zinc-500 sm:block">Panel de {brand}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 sm:inline-flex">
              <Circle className="h-1.5 w-1.5 fill-emerald-500 text-emerald-500 animate-pulse" />
              <span className="font-mono tabular-nums">{activeNow}</span> en vivo
            </div>
            <button
              type="button"
              onClick={onSimulateLead}
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-900 bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-zinc-800"
            >
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden sm:inline">Simular lead</span>
            </button>
            <button
              type="button"
              onClick={onExportCsv}
              className="hidden items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5 text-zinc-400" />
              CSV
            </button>
            <Link
              to={`/propuesta/${currentSlug}`}
              target="_blank"
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              <span className="hidden sm:inline">Ver sitio</span>
              <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
            </Link>
          </div>
        </header>
        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
