import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, AlertCircle, Clock, Calendar, CheckCircle2, XCircle } from 'lucide-react';
import { LeadStatus } from '../../data/crmMockData';

interface StatusDropdownProps {
  status: LeadStatus;
  onChange: (newStatus: LeadStatus) => void;
  size?: 'sm' | 'md';
}

const STATUS_ITEMS: {
  id: LeadStatus;
  label: string;
  dotColor: string;
  pillBg: string;
  pillText: string;
  pillBorder: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'nuevo',
    label: 'Nuevo',
    dotColor: 'bg-blue-500',
    pillBg: 'bg-blue-50/80',
    pillText: 'text-blue-700',
    pillBorder: 'border-blue-200',
    icon: AlertCircle,
  },
  {
    id: 'contactado',
    label: 'En Contacto',
    dotColor: 'bg-amber-500',
    pillBg: 'bg-amber-50/80',
    pillText: 'text-amber-700',
    pillBorder: 'border-amber-200',
    icon: Clock,
  },
  {
    id: 'agendado',
    label: 'Cita Agendada',
    dotColor: 'bg-purple-500',
    pillBg: 'bg-purple-50/80',
    pillText: 'text-purple-700',
    pillBorder: 'border-purple-200',
    icon: Calendar,
  },
  {
    id: 'ganado',
    label: 'Cerrado / Ganado',
    dotColor: 'bg-emerald-500',
    pillBg: 'bg-emerald-50/80',
    pillText: 'text-emerald-700',
    pillBorder: 'border-emerald-200',
    icon: CheckCircle2,
  },
  {
    id: 'descartado',
    label: 'Descartado',
    dotColor: 'bg-zinc-400',
    pillBg: 'bg-zinc-100',
    pillText: 'text-zinc-600',
    pillBorder: 'border-zinc-200',
    icon: XCircle,
  },
];

export const StatusDropdown: React.FC<StatusDropdownProps> = ({ status, onChange, size = 'sm' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = STATUS_ITEMS.find((s) => s.id === status) || STATUS_ITEMS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelect = (e: React.MouseEvent, newStatus: LeadStatus) => {
    e.stopPropagation();
    onChange(newStatus);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Status Pill Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen)}
        }
        className={`group inline-flex items-center gap-1.5 rounded-full border font-semibold transition-all cursor-pointer shadow-2xs hover:shadow-xs ${
          current.pillBg
        } ${current.pillText} ${current.pillBorder} ${
          size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3.5 py-1.5 text-xs'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${current.dotColor} ${
            status === 'nuevo' ? 'animate-pulse' : ''
          }`}
        />
        <span>{current.label}</span>
        <ChevronDown
          className={`h-3 w-3 text-zinc-400 group-hover:text-zinc-700 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Micro-menu */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 z-40 w-44 rounded-xl border border-zinc-200/90 bg-white/95 backdrop-blur-md p-1.5 shadow-xl shadow-zinc-950/10 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Cambiar fase
          </div>
          <div className="space-y-0.5">
            {STATUS_ITEMS.map((item) => {
              const isSelected = item.id === status;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleSelect(e, item.id)}
                  className={`w-full flex items-center justify-between rounded-lg px-2 py-1.5 text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-zinc-900 text-white font-medium'
                      : 'text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-950'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${item.dotColor}`} />
                    <span>{item.label}</span>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 text-amber-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
