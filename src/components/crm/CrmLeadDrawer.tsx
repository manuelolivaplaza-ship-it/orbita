import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { Lead, LeadStatus } from '../../data/crmMockData';
import { formatClp } from '../../lib/crmStore';
import { StatusDropdown } from './StatusDropdown';

interface CrmLeadDrawerProps {
  lead: Lead | null;
  companyName: string;
  onClose: () => void;
  onUpdateStatus: (leadId: string, status: LeadStatus) => void;
  onAddNote: (leadId: string, text: string) => void;
}

export const CrmLeadDrawer: React.FC<CrmLeadDrawerProps> = ({
  lead,
  companyName,
  onClose,
  onUpdateStatus,
  onAddNote,
}) => {
  const [newNote, setNewNote] = useState('');

  if (!lead) return null;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    onAddNote(lead.id, newNote.trim());
    setNewNote('');
  };

  const openWhatsApp = () => {
    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hola ${lead.name}, te escribo desde ${companyName} respecto a tu solicitud por "${lead.service}". ¿Cómo estás?`,
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="fixed inset-x-0 bottom-0 top-10 flex sm:inset-y-0 sm:left-auto sm:right-0 sm:top-0 sm:max-w-md">
        <div className="flex h-full w-full flex-col rounded-t-2xl border-l-0 border-zinc-200 bg-white shadow-2xl sm:rounded-none sm:border-l">
          <div className="flex items-center justify-between border-b border-zinc-100 p-4 sm:p-5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              Ficha del Prospecto
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
              aria-label="Cerrar ficha"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto overscroll-contain p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-zinc-950">{lead.name}</h3>
                <p className="mt-1 text-xs text-zinc-500">{lead.service}</p>
              </div>
              <StatusDropdown
                status={lead.status}
                onChange={(newSt) => onUpdateStatus(lead.id, newSt)}
                size="md"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
              <a
                href={`tel:${lead.phone}`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-xs font-semibold text-zinc-800 shadow-xs transition-colors hover:bg-zinc-50"
              >
                <Phone className="h-4 w-4 text-zinc-500" />
                <span>Llamar</span>
              </a>
            </div>

            <div className="space-y-3 rounded-xl border border-zinc-100 bg-zinc-50/70 p-4 text-xs">
              <div className="flex items-start justify-between gap-3">
                <span className="flex shrink-0 items-center gap-2 text-zinc-500">
                  <Mail className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Email</span>
                </span>
                <a href={`mailto:${lead.email}`} className="min-w-0 break-all text-right font-mono font-medium text-zinc-900">
                  {lead.email}
                </a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-zinc-500">
                  <Phone className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Teléfono</span>
                </span>
                <span className="font-mono font-medium text-zinc-900">{lead.phone}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-zinc-500">
                  <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Ubicación</span>
                </span>
                <span className="font-medium text-zinc-900">{lead.city}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-zinc-500">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Capturado</span>
                </span>
                <span className="font-medium text-zinc-900">
                  {new Date(lead.createdAt).toLocaleDateString('es-CL', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-200/60 pt-2 font-mono">
                <span className="text-zinc-500">Valor Estimado</span>
                <span className="text-sm font-bold text-zinc-950">{formatClp(lead.valueClp)}</span>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-900">
                Historial y Notas de Seguimiento
              </h4>

              <form onSubmit={handleAddNote} className="mb-4 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Añadir una nota interna..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!newNote.trim()}
                  className="rounded-lg bg-zinc-900 px-3 py-2.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>

              <div className="space-y-3">
                {lead.notes.map((note) => (
                  <div key={note.id} className="relative border-l-2 border-zinc-200 pb-2 pl-5 text-xs">
                    <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-zinc-400" />
                    <div className="mb-0.5 flex items-center justify-between gap-2 text-[11px] text-zinc-400">
                      <span className="font-semibold text-zinc-700">{note.author}</span>
                      <span className="shrink-0">{note.createdAt}</span>
                    </div>
                    <p className="leading-relaxed text-zinc-600">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-zinc-100 bg-zinc-50/50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-[11px] text-zinc-400">
            <ShieldCheck className="h-4 w-4 shrink-0 text-zinc-500" />
            <span>Los datos se sincronizan con Supabase y tu base de datos privada.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
