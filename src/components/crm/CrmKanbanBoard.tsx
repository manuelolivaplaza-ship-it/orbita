import React from 'react';
import { MessageCircle, DollarSign, Clock, CheckCircle, ChevronRight, User } from 'lucide-react';
import { Lead, LeadStatus } from '../../data/crmMockData';
import { formatClp } from '../../lib/crmStore';
import { StatusDropdown } from './StatusDropdown';

interface CrmKanbanBoardProps {
  leads: Lead[];
  companyName: string;
  onSelectLead: (lead: Lead) => void;
  onUpdateStatus: (leadId: string, status: LeadStatus) => void;
}

const COLUMNS: { id: LeadStatus; label: string; headerColor: string; dotColor: string }[] = [
  { id: 'nuevo', label: 'Nuevos Leads', headerColor: 'text-blue-700', dotColor: 'bg-blue-500' },
  { id: 'contactado', label: 'En Contacto', headerColor: 'text-amber-700', dotColor: 'bg-amber-500' },
  { id: 'agendado', label: 'Citas / Reuniones', headerColor: 'text-purple-700', dotColor: 'bg-purple-500' },
  { id: 'ganado', label: 'Cerrados / Ganados', headerColor: 'text-emerald-700', dotColor: 'bg-emerald-500' },
];

export const CrmKanbanBoard: React.FC<CrmKanbanBoardProps> = ({
  leads,
  companyName,
  onSelectLead,
  onUpdateStatus,
}) => {
  const openWhatsApp = (e: React.MouseEvent, lead: Lead) => {
    e.stopPropagation();
    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hola ${lead.name}, te escribo desde ${companyName} respecto a tu consulta por "${lead.service}". ¿Tienes disponibilidad para coordinar?`,
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {COLUMNS.map((col) => {
        const colLeads = leads.filter((l) => l.status === col.id);
        const colTotalClp = colLeads.reduce((acc, curr) => acc + curr.valueClp, 0);

        return (
          <div key={col.id} className="flex flex-col rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3.5">
            {/* Column Header */}
            <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${col.dotColor}`} />
                <span className="text-xs font-semibold text-zinc-900">{col.label}</span>
                <span className="rounded-full bg-zinc-200/70 px-1.5 py-0.2 font-mono text-[10px] text-zinc-600 tabular-nums">
                  {colLeads.length}
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-400">{formatClp(colTotalClp)}</span>
            </div>

            {/* Cards List */}
            <div className="mt-3 space-y-2.5 flex-1 overflow-y-auto max-h-[calc(100vh-320px)] pr-0.5">
              {colLeads.length === 0 ? (
                <div className="rounded-lg border border-dashed border-zinc-200 p-6 text-center text-xs text-zinc-400">
                  Sin prospectos en esta etapa
                </div>
              ) : (
                colLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => onSelectLead(lead)}
                    className="group rounded-lg border border-zinc-200/80 bg-white p-3.5 shadow-2xs hover:shadow-sm hover:border-zinc-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-semibold text-xs text-zinc-950 group-hover:text-zinc-700">
                          {lead.name}
                        </h5>
                        <p className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">{lead.service}</p>
                      </div>
                      <span className="rounded-md bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 shrink-0">
                        {lead.channel}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2 text-[11px]">
                      <span className="font-mono font-semibold text-zinc-900">{formatClp(lead.valueClp)}</span>
                      <button
                        type="button"
                        onClick={(e) => openWhatsApp(e, lead)}
                        className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        <MessageCircle className="h-3 w-3" />
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    {/* Move to next stage quick action */}
                    <div className="mt-2.5 flex items-center justify-between pt-1.5 border-t border-zinc-100" onClick={(e) => e.stopPropagation()}>
                      <span className="text-[10px] text-zinc-400 font-mono">Fase:</span>
                      <StatusDropdown
                        status={lead.status}
                        onChange={(newSt) => onUpdateStatus(lead.id, newSt)}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
