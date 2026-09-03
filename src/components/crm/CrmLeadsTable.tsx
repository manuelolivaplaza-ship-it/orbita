import React, { useState, useMemo } from 'react';
import {
  Search,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { Lead, LeadStatus } from '../../data/crmMockData';
import { formatClp } from '../../lib/crmStore';
import { StatusDropdown } from './StatusDropdown';

interface CrmLeadsTableProps {
  leads: Lead[];
  companyName: string;
  onSelectLead: (lead: Lead) => void;
  onUpdateStatus: (leadId: string, status: LeadStatus) => void;
}

const STATUS_CONFIG: Record<
  LeadStatus,
  { label: string; bg: string; text: string; border: string; icon: React.ComponentType<{ className?: string }> }
> = {
  nuevo: {
    label: 'Nuevo',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    icon: AlertCircle,
  },
  contactado: {
    label: 'En Contacto',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    icon: Clock,
  },
  agendado: {
    label: 'Cita Agendada',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    icon: Clock,
  },
  ganado: {
    label: 'Cerrado / Ganado',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    icon: CheckCircle2,
  },
  descartado: {
    label: 'Descartado',
    bg: 'bg-zinc-100',
    text: 'text-zinc-600',
    border: 'border-zinc-200',
    icon: XCircle,
  },
};

export const CrmLeadsTable: React.FC<CrmLeadsTableProps> = ({
  leads,
  companyName,
  onSelectLead,
  onUpdateStatus,
}) => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'todos'>('todos');

  // Filtered and searched leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus = filterStatus === 'todos' || lead.status === filterStatus;
      const q = search.toLowerCase();
      const matchesSearch =
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.service.toLowerCase().includes(q) ||
        lead.phone.includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [leads, filterStatus, search]);

  const openWhatsApp = (e: React.MouseEvent, lead: Lead) => {
    e.stopPropagation();
    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hola ${lead.name}, te escribo desde ${companyName} respecto a tu consulta en nuestro sitio web por "${lead.service}". ¿Tienes disponibilidad para coordinar?`,
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="rounded-xl border border-zinc-200/80 bg-white shadow-xs overflow-hidden">
      {/* Top Filter and Search Bar */}
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 bg-zinc-50/50">
        <div className="relative flex-1 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Buscar por nombre, correo, teléfono..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white py-1.5 pl-9 pr-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
          />
        </div>

        {/* Status filter tabs */}
        <div className="flex flex-wrap items-center gap-1 text-xs">
          <button
            type="button"
            onClick={() => setFilterStatus('todos')}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              filterStatus === 'todos' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:bg-zinc-100'
            }`}
          >
            Todos ({leads.length})
          </button>
          {(['nuevo', 'contactado', 'agendado', 'ganado'] as LeadStatus[]).map((st) => {
            const count = leads.filter((l) => l.status === st).length;
            return (
              <button
                key={st}
                type="button"
                onClick={() => setFilterStatus(st)}
                className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
                  filterStatus === st ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:bg-zinc-100'
                }`}
              >
                {STATUS_CONFIG[st].label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Leads Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 pl-5 pr-4">Prospecto</th>
              <th className="py-3 px-4">Servicio Solicitado</th>
              <th className="py-3 px-4">Valor Estimado</th>
              <th className="py-3 px-4">Canal</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 pr-5 text-right">Contacto Rápido</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-zinc-400 text-xs">
                  No se encontraron prospectos con los filtros actuales.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => {
                const statusCfg = STATUS_CONFIG[lead.status];
                const StatusIcon = statusCfg.icon;
                const initials = lead.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('');

                return (
                  <tr
                    key={lead.id}
                    onClick={() => onSelectLead(lead)}
                    className="group cursor-pointer hover:bg-zinc-50/80 transition-colors"
                  >
                    {/* 1. Name & Email */}
                    <td className="py-3 pl-5 pr-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 font-mono text-xs font-semibold text-zinc-700">
                          {initials}
                        </div>
                        <div>
                          <div className="font-semibold text-zinc-900 flex items-center gap-1.5">
                            <span>{lead.name}</span>
                            {lead.status === 'nuevo' && (
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                            )}
                          </div>
                          <div className="text-[11px] text-zinc-400 font-mono">{lead.email}</div>
                        </div>
                      </div>
                    </td>

                    {/* 2. Service & City */}
                    <td className="py-3 px-4">
                      <div className="font-medium text-zinc-800 truncate max-w-xs">{lead.service}</div>
                      <div className="text-[11px] text-zinc-400">{lead.city}</div>
                    </td>

                    {/* 3. Value */}
                    <td className="py-3 px-4 whitespace-nowrap font-mono">
                      <div className="font-semibold text-zinc-900">{formatClp(lead.valueClp)}</div>
                      <div className="text-[10px] text-zinc-400">~{lead.valueUf} UF</div>
                    </td>

                    {/* 4. Acquisition Channel */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="inline-flex rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                        {lead.channel}
                      </span>
                    </td>

                    {/* 5. Status Pill & Dropdown */}
                    <td className="py-3 px-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <StatusDropdown
                        status={lead.status}
                        onChange={(newStatus) => onUpdateStatus(lead.id, newStatus)}
                      />
                    </td>

                    {/* 6. WhatsApp 1-Click Action */}
                    <td className="py-3 pr-5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={(e) => openWhatsApp(e, lead)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                          title="Abrir chat directo de WhatsApp con mensaje listo"
                        >
                          <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                          <span>WhatsApp</span>
                        </button>
                        <ChevronRight className="h-4 w-4 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-600" />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
