import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Send,
  Plus,
  Clock,
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
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-zinc-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 p-5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                Ficha del Prospecto
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Top Identity card */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-zinc-950">{lead.name}</h3>
                <StatusDropdown
                  status={lead.status}
                  onChange={(newSt) => onUpdateStatus(lead.id, newSt)}
                  size="md"
                />
              </div>
              <p className="mt-1 text-xs text-zinc-500">{lead.service}</p>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chatear WhatsApp</span>
              </button>
              <a
                href={`tel:${lead.phone}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-800 shadow-xs hover:bg-zinc-50 transition-colors"
              >
                <Phone className="h-4 w-4 text-zinc-500" />
                <span>Llamar</span>
              </a>
            </div>

            {/* Contact Details List */}
            <div className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Email</span>
                </span>
                <span className="font-mono text-zinc-900 font-medium">{lead.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Teléfono</span>
                </span>
                <span className="font-mono text-zinc-900 font-medium">{lead.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Ubicación</span>
                </span>
                <span className="text-zinc-900 font-medium">{lead.city}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Capturado</span>
                </span>
                <span className="text-zinc-900 font-medium">
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
                <span className="font-bold text-zinc-950 text-sm">{formatClp(lead.valueClp)}</span>
              </div>
            </div>

            {/* Notes & Activity Timeline */}
            <div>
              <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3">
                Historial y Notas de Seguimiento
              </h4>

              {/* Form to add note */}
              <form onSubmit={handleAddNote} className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Añadir una nota interna..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!newNote.trim()}
                  className="rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white hover:bg-zinc-800 disabled:opacity-50 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>

              {/* Timeline list */}
              <div className="space-y-3">
                {lead.notes.map((note) => (
                  <div key={note.id} className="relative pl-5 border-l-2 border-zinc-200 pb-2 text-xs">
                    <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-zinc-400" />
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-0.5">
                      <span className="font-semibold text-zinc-700">{note.author}</span>
                      <span>{note.createdAt}</span>
                    </div>
                    <p className="text-zinc-600 leading-relaxed">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with safety note */}
          <div className="border-t border-zinc-100 p-4 text-[11px] text-zinc-400 flex items-center gap-2 bg-zinc-50/50">
            <ShieldCheck className="h-4 w-4 text-zinc-500" />
            <span>Los datos se sincronizan con Supabase y tu base de datos privada.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
