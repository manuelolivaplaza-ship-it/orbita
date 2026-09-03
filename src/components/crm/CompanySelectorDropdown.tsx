import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search, Check, Building2, Sparkles } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';

interface CompanySelectorDropdownProps {
  currentSlug: string;
  onSelect?: (slug: string) => void;
}

const SECTOR_LABELS: Record<string, string> = {
  legal: 'Legal & Abogados',
  dental: 'Clínicas Dentales',
  inmobiliaria: 'Inmobiliaria & Propiedades',
  veterinaria: 'Veterinaria & Hospitales',
  marketing: 'Marketing & Agencia',
  software: 'Software & Ingeniería',
  diseno: 'Diseño Digital',
  ecommerce: 'E-commerce & Tienda',
  arquitectura: 'Arquitectura & Obras',
  gimnasio: 'Bienestar & Club',
  contador: 'Contabilidad & Tributario',
  clinica: 'Centro Médico',
  concesionaria: 'Concesionaria Automotriz',
};

export const CompanySelectorDropdown: React.FC<CompanySelectorDropdownProps> = ({
  currentSlug,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const currentProposal = catalogo.find((p) => p.slug === currentSlug) || catalogo[0];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Group proposals by sector
  const groupedProposals = useMemo(() => {
    const q = search.toLowerCase();
    const filtered = catalogo.filter(
      (p) =>
        p.brand.toLowerCase().includes(q) ||
        p.sector.toLowerCase().includes(q) ||
        (SECTOR_LABELS[p.sector] && SECTOR_LABELS[p.sector].toLowerCase().includes(q)) ||
        (p.description ? p.description.toLowerCase().includes(q) : false),
    );

    const groups: Record<string, typeof catalogo> = {};
    for (const item of filtered) {
      if (!groups[item.sector]) groups[item.sector] = [];
      groups[item.sector].push(item);
    }
    return groups;
  }, [search]);

  const handleSelect = (slug: string) => {
    setIsOpen(false);
    setSearch('');
    if (onSelect) {
      onSelect(slug);
    } else {
      navigate(`/crm/${slug}`);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 rounded-lg border py-1.5 pr-2.5 pl-3 text-xs font-medium transition-all shadow-xs ${
          isOpen
            ? 'border-zinc-950 bg-white ring-2 ring-zinc-950/10'
            : 'border-zinc-200 bg-zinc-50/80 hover:bg-zinc-100/80 hover:border-zinc-300 text-zinc-900'
        }`}
      >
        <Building2 className="h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
        <span className="font-semibold text-zinc-950 tracking-tight">{currentProposal.brand}</span>
        <span className="hidden sm:inline-block rounded bg-zinc-200/70 px-1.5 py-0.2 font-mono text-[10px] text-zinc-600 uppercase">
          {currentProposal.sector}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-zinc-900' : 'group-hover:text-zinc-600'
          }`}
        />
      </button>

      {/* Floating Popover Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 z-50 w-80 sm:w-96 rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-xl p-2 shadow-2xl shadow-zinc-950/15 animate-in fade-in zoom-in-95 duration-150">
          {/* Search Input */}
          <div className="relative mb-2">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar por marca o sector..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/80 py-2 pl-9 pr-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* List of Companies Grouped */}
          <div className="max-h-80 overflow-y-auto space-y-3 pr-1 divide-y divide-zinc-100/80">
            {Object.keys(groupedProposals).length === 0 ? (
              <div className="py-8 text-center text-xs text-zinc-400">
                No se encontraron empresas con &quot;{search}&quot;
              </div>
            ) : (
              Object.entries(groupedProposals).map(([sectorKey, items]) => (
                <div key={sectorKey} className="pt-2 first:pt-0">
                  <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400">
                    <span>{SECTOR_LABELS[sectorKey] || sectorKey}</span>
                    <span>{items.length}</span>
                  </div>
                  <div className="space-y-0.5 mt-0.5">
                    {items.map((prop) => {
                      const isSelected = prop.slug === currentSlug;
                      return (
                        <button
                          key={prop.slug}
                          type="button"
                          onClick={() => handleSelect(prop.slug)}
                          className={`w-full flex items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs transition-all ${
                            isSelected
                              ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                              : 'text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-950'
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold tracking-tight truncate">{prop.brand}</span>
                              <span
                                className={`rounded px-1.5 py-0.2 text-[9px] font-mono uppercase ${
                                  isSelected
                                    ? 'bg-zinc-800 text-zinc-300'
                                    : 'bg-zinc-100 text-zinc-500'
                                }`}
                              >
                                {prop.variant || 'claro'}
                              </span>
                            </div>
                            <p
                              className={`text-[11px] truncate mt-0.5 ${
                                isSelected ? 'text-zinc-400' : 'text-zinc-500'
                              }`}
                            >
                              {prop.description}
                            </p>
                          </div>
                          {isSelected && <Check className="h-4 w-4 shrink-0 text-amber-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="mt-2 border-t border-zinc-100 pt-2 px-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-zinc-500" />
              <span>{catalogo.length} propuestas listas</span>
            </span>
            <span>Esc para cerrar</span>
          </div>
        </div>
      )}
    </div>
  );
};
