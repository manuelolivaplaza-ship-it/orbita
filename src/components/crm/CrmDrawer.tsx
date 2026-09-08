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
      <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px]" onClick={onClose} />
      <div
        className={`absolute inset-x-0 bottom-0 top-10 flex w-full sm:inset-y-0 sm:left-auto sm:right-0 sm:top-0 ${
          wide ? 'sm:max-w-lg' : 'sm:max-w-md'
        }`}
      >
        <aside className="flex h-full w-full flex-col rounded-t-2xl bg-white shadow-2xl sm:rounded-none">
          <header className="flex items-start justify-between gap-4 border-b border-zinc-100 px-4 py-4 sm:px-5">
            <div className="min-w-0">
              <h2 className="text-base font-semibold tracking-tight text-zinc-950">{title}</h2>
              {subtitle && <p className="mt-0.5 text-xs text-zinc-500">{subtitle}</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </header>
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5">
            {children}
          </div>
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
  'w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-400';
