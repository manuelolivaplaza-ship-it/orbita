import React, { type ReactNode } from 'react';
import { X } from 'lucide-react';

export function CrmDrawer({
  open,
  title,
  subtitle,
  onClose,
  children,
  wide,
}: {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/30 backdrop-blur-[2px]" onClick={onClose} />
      <div className={`absolute inset-y-0 right-0 flex w-full ${wide ? 'max-w-lg' : 'max-w-md'} pl-8`}>
        <aside className="flex h-full w-full flex-col bg-white shadow-2xl">
          <header className="flex items-start justify-between gap-4 border-b border-zinc-100 px-5 py-4">
            <div className="min-w-0">
              <h2 className="text-base font-semibold tracking-tight text-zinc-950">{title}</h2>
              {subtitle && <p className="mt-0.5 text-xs text-zinc-500">{subtitle}</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </header>
          <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
        </aside>
      </div>
    </div>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">{label}</span>
      {children}
    </label>
  );
}

export const fieldClass =
  'w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400';
