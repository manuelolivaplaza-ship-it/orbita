import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Check, ChevronDown, Compass, Orbit, Satellite, Sparkles, Smartphone } from 'lucide-react';
import { BASE_PRICES, formatCLP, planKeyFromName } from '../data/pricing';

export type ContactPlanValue = 'Sonda' | 'Estación' | 'Constelación' | 'Aplicación' | 'Personalizado';

type PlanOption = {
  value: ContactPlanValue;
  name: string;
  hint: string;
  price: string;
  popular?: boolean;
  Icon: typeof Orbit;
};

export const CONTACT_PLAN_OPTIONS: PlanOption[] = [
  {
    value: 'Sonda',
    name: 'Plan Sonda',
    hint: 'Landing o campaña puntual',
    price: `desde ${formatCLP(BASE_PRICES.Sonda)} · 12,5 UF`,
    Icon: Satellite,
  },
  {
    value: 'Estación',
    name: 'Plan Estación',
    hint: 'Landing premium o sitio 5–8 bloques',
    price: `desde ${formatCLP(BASE_PRICES.Estación)} · 25,0 UF`,
    popular: true,
    Icon: Orbit,
  },
  {
    value: 'Constelación',
    name: 'Plan Constelación',
    hint: 'Multi-sección, rediseño o pack creativo',
    price: `desde ${formatCLP(BASE_PRICES.Constelación)} · 42,5 UF`,
    Icon: Sparkles,
  },
  {
    value: 'Aplicación',
    name: 'Plan Aplicación (Web App / PWA)',
    hint: 'Plataforma con login, base de datos y pagos',
    price: `desde ${formatCLP(BASE_PRICES.Aplicación)} · 48,0 UF`,
    Icon: Smartphone,
  },
  {
    value: 'Personalizado',
    name: 'Proyecto a medida',
    hint: 'Si aún no estás seguro o es algo fuera de catálogo',
    price: 'A cotizar',
    Icon: Compass,
  },
];

export function normalizeContactPlan(name?: string): ContactPlanValue {
  if (!name) return 'Estación';
  if (/aplicaci|pwa|app|software/i.test(name)) return 'Aplicación';
  if (/medida|custom|personalizado/i.test(name)) return 'Personalizado';
  const key = planKeyFromName(name);
  return key as ContactPlanValue;
}

function optionByValue(value: string): PlanOption {
  const key = normalizeContactPlan(value);
  return CONTACT_PLAN_OPTIONS.find((o) => o.value === key) ?? CONTACT_PLAN_OPTIONS[1];
}

interface PlanSelectProps {
  id?: string;
  value: string;
  onChange: (value: ContactPlanValue) => void;
}

export function PlanSelect({ id, value, onChange }: PlanSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [open, setOpen] = useState(false);

  const selected = optionByValue(value);
  const selectedIndex = CONTACT_PLAN_OPTIONS.findIndex((o) => o.value === selected.value);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    const frame = window.requestAnimationFrame(() => {
      optionRefs.current[selectedIndex]?.focus();
    });

    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
      window.cancelAnimationFrame(frame);
    };
  }, [open, selectedIndex]);

  const selectPlan = (next: ContactPlanValue) => {
    onChange(next);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const focusOption = (index: number) => {
    const next = (index + CONTACT_PLAN_OPTIONS.length) % CONTACT_PLAN_OPTIONS.length;
    optionRefs.current[next]?.focus();
  };

  const onTriggerKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(true);
    }
  };

  const onOptionKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusOption(index + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusOption(index - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusOption(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusOption(CONTACT_PLAN_OPTIONS.length - 1);
    } else if (event.key === 'Tab') {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={onTriggerKey}
        className={`w-full text-left px-3 py-2.5 rounded-xl border bg-white transition-all flex items-center gap-3 outline-none ${
          open
            ? 'border-[#0B0B12] ring-2 ring-[#0B0B12]/12'
            : 'border-zinc-200 hover:border-zinc-300 focus-visible:ring-2 focus-visible:ring-[#6B7280]/30 focus-visible:border-[#6B7280]'
        }`}
      >
        <span className="w-10 h-10 rounded-xl bg-[#0B0B12] text-white flex items-center justify-center shrink-0">
          <selected.Icon className="w-4 h-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#0B0B12] tracking-tight truncate">
              {selected.name}
            </span>
            {selected.popular && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] bg-zinc-100 border border-zinc-200 rounded-full px-1.5 py-0.5 shrink-0">
                Popular
              </span>
            )}
          </span>
          <span className="block text-[11px] text-zinc-500 truncate">{selected.hint}</span>
        </span>
        <span className="hidden sm:block text-xs font-medium text-zinc-600 shrink-0 tabular-nums">
          {selected.price}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Plan de preferencia"
          aria-activedescendant={`${listId}-${selected.value}`}
          className="absolute z-30 left-0 right-0 mt-2 p-1.5 rounded-2xl border border-zinc-200/90 bg-white shadow-[0_18px_50px_-18px_rgba(15,15,40,0.28)] animate-plan-menu"
        >
          {CONTACT_PLAN_OPTIONS.map((option, index) => {
            const isSelected = option.value === selected.value;
            const Icon = option.Icon;
            return (
              <li key={option.value} role="none">
                <button
                  ref={(node) => {
                    optionRefs.current[index] = node;
                  }}
                  type="button"
                  role="option"
                  id={`${listId}-${option.value}`}
                  aria-selected={isSelected}
                  onClick={() => selectPlan(option.value)}
                  onKeyDown={(event) => onOptionKey(event, index)}
                  className={`w-full text-left rounded-xl px-2.5 py-2.5 flex items-start gap-3 transition-colors outline-none ${
                    isSelected
                      ? 'bg-[#0B0B12] text-white'
                      : 'text-[#0B0B12] hover:bg-zinc-50 focus-visible:bg-zinc-50'
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-zinc-100 text-[#0B0B12]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium tracking-tight">{option.name}</span>
                      {option.popular && (
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider rounded-full px-1.5 py-0.5 ${
                            isSelected
                              ? 'bg-white/12 text-white/80'
                              : 'bg-zinc-100 text-[#6B7280] border border-zinc-200'
                          }`}
                        >
                          Popular
                        </span>
                      )}
                    </span>
                    <span
                      className={`block text-[11px] mt-0.5 leading-snug ${
                        isSelected ? 'text-white/65' : 'text-zinc-500'
                      }`}
                    >
                      {option.hint}
                    </span>
                    <span
                      className={`block text-xs font-medium mt-1 tabular-nums ${
                        isSelected ? 'text-white/90' : 'text-zinc-700'
                      }`}
                    >
                      {option.price}
                    </span>
                  </span>
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-2 ${
                      isSelected ? 'border-white/30 bg-white text-[#0B0B12]' : 'border-zinc-300'
                    }`}
                    aria-hidden
                  >
                    {isSelected && <Check className="w-3 h-3" strokeWidth={2.5} />}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
