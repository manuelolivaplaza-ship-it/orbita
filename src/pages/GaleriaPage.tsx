import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  X,
  ChevronDown,
  LayoutGrid,
  Sun,
  Moon,
  Check,
  RotateCcw,
} from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../data/sectores';
import { PropuestaCard } from '../components/galeria/PropuestaCard';
import { PageMeta } from '../components/PageMeta';
import { siteUrl } from '../data/site';
import { webPageJsonLd } from '../seo/schema';

const POPULAR_SLUGS = [
  'legal',
  'dental',
  'arquitectura',
  'inmobiliaria',
  'marketing',
  'software',
  'veterinaria',
];

export default function GaleriaPage() {
  const [params, setParams] = useSearchParams();
  const selectedSector = params.get('sector') ?? 'todas';
  const selectedStyle = params.get('estilo') ?? 'todos';
  const [query, setQuery] = useState(params.get('q') ?? '');

  const [sectorMenuOpen, setSectorMenuOpen] = useState(false);
  const [sectorFilterQuery, setSectorFilterQuery] = useState('');
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectorMenuOpen || !triggerRef.current) return;
    const place = () => {
      const r = triggerRef.current!.getBoundingClientRect();
      const width = 320;
      const left = Math.min(Math.max(12, r.left), window.innerWidth - width - 12);
      setMenuPos({ top: r.bottom + 8, left });
    };
    place();
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
    };
  }, [sectorMenuOpen]);

  useEffect(() => {
    if (!sectorMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setSectorMenuOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSectorMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [sectorMenuOpen]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const entry of catalogo) {
      map.set(entry.sector, (map.get(entry.sector) ?? 0) + 1);
    }
    return map;
  }, []);

  const conocidos = useMemo(() => SECTORES.filter((s) => (counts.get(s.slug) ?? 0) > 0), [counts]);

  const updateParam = (key: string, val: string) => {
    const next = new URLSearchParams(params);
    if (!val || val === 'todas' || val === 'todos') {
      next.delete(key);
    } else {
      next.set(key, val);
    }
    setParams(next, { replace: true });
  };

  const handleQueryChange = (q: string) => {
    setQuery(q);
    const next = new URLSearchParams(params);
    if (q.trim()) next.set('q', q.trim());
    else next.delete('q');
    setParams(next, { replace: true });
  };

  const clearAllFilters = () => {
    setQuery('');
    setParams(new URLSearchParams(), { replace: true });
  };

  const filtered = useMemo(() => {
    const qLower = query.trim().toLowerCase();
    return catalogo.filter((entry) => {
      if (selectedSector !== 'todas' && entry.sector !== selectedSector) return false;
      if (selectedStyle === 'claro' && !entry.variant.includes('claro')) return false;
      if (selectedStyle === 'oscuro' && !entry.variant.includes('oscuro')) return false;
      if (qLower) {
        const sectorObj = getSector(entry.sector);
        const matchBrand = entry.brand.toLowerCase().includes(qLower);
        const matchTitle = entry.title.toLowerCase().includes(qLower);
        const matchSector = (sectorObj?.label ?? entry.sector).toLowerCase().includes(qLower);
        const matchDesc = (entry.description ?? '').toLowerCase().includes(qLower);
        if (!matchBrand && !matchTitle && !matchSector && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedSector, selectedStyle, query]);

  const activeSectorObj = selectedSector === 'todas' ? null : getSector(selectedSector);
  const ActiveSectorIcon = activeSectorObj?.icon ?? LayoutGrid;
  const activeSectorLabel = activeSectorObj?.label ?? 'Todos los rubros';
  const hasActiveFilters = selectedSector !== 'todas' || selectedStyle !== 'todos' || Boolean(query.trim());

  // Rubros en el menú modal filtrados por búsqueda
  const menuSectores = useMemo(() => {
    if (!sectorFilterQuery.trim()) return conocidos;
    const q = sectorFilterQuery.trim().toLowerCase();
    return conocidos.filter((s) => s.label.toLowerCase().includes(q));
  }, [conocidos, sectorFilterQuery]);

  return (
    <>
      <PageMeta
        title="Galería de demos | Reclu"
        description="Demos y propuestas de rubro para recorrer en vivo. No son sitios de clientes — esos están en Creaciones."
        jsonLd={webPageJsonLd({
          title: 'Galería de demos | Reclu',
          description:
            'Demos y propuestas de rubro para recorrer en vivo. No son sitios de clientes — esos están en Creaciones.',
          url: siteUrl('/galeria'),
          type: 'CollectionPage',
        })}
      />

      <div className="relative z-30 px-4 pt-24 sm:px-6 sm:pt-28">
        <h1 className="sr-only">Galería de propuestas</h1>
        <div className="max-w-[88rem] mx-auto">
          <div className="relative z-40 overflow-visible bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-[0_12px_40px_-15px_rgba(15,15,40,0.12)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
            
            {/* LADO IZQUIERDO: SELECTOR DE RUBROS & ACCESOS DIRECTOS */}
            <div className="flex items-center gap-2 flex-1 min-w-0 py-0.5">
              
              {/* Botón Dropdown de Rubro — el menú se porta al body para no recortarse */}
              <div className="relative shrink-0">
                <button
                  ref={triggerRef}
                  type="button"
                  aria-expanded={sectorMenuOpen}
                  aria-haspopup="listbox"
                  onClick={() => setSectorMenuOpen((open) => !open)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                    selectedSector !== 'todas'
                      ? 'bg-[#0B0B12] text-white border-[#0B0B12] shadow-xs'
                      : 'bg-zinc-100 hover:bg-zinc-200/80 text-[#0B0B12] border-zinc-200/70'
                  }`}
                >
                  <ActiveSectorIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate max-w-[130px] sm:max-w-[160px]">{activeSectorLabel}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      selectedSector !== 'todas' ? 'bg-white/20 text-white' : 'bg-white text-zinc-700'
                    }`}
                  >
                    {selectedSector === 'todas' ? catalogo.length : counts.get(selectedSector) ?? 0}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      sectorMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {sectorMenuOpen &&
                  createPortal(
                    <div
                      ref={menuRef}
                      role="listbox"
                      style={{ top: menuPos.top, left: menuPos.left }}
                      className="fixed z-[200] w-72 sm:w-80 bg-white border border-zinc-200 rounded-2xl shadow-[0_20px_50px_-15px_rgba(15,15,40,0.22)] p-2"
                    >
                      <div className="p-1.5 mb-1.5 border-b border-zinc-100">
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={sectorFilterQuery}
                            onChange={(e) => setSectorFilterQuery(e.target.value)}
                            placeholder="Buscar rubro..."
                            className="w-full pl-8 pr-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200/80 rounded-xl text-[#0B0B12] placeholder-zinc-500 focus:outline-none focus:bg-white focus:border-zinc-400 transition-colors"
                            autoFocus
                          />
                        </div>
                      </div>

                      <div className="max-h-72 overflow-y-auto space-y-0.5 pr-1 text-xs">
                        <button
                          type="button"
                          onClick={() => {
                            updateParam('sector', 'todas');
                            setSectorMenuOpen(false);
                            setSectorFilterQuery('');
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors text-left ${
                            selectedSector === 'todas'
                              ? 'bg-[#0B0B12] text-white font-semibold'
                              : 'hover:bg-zinc-100 text-[#0B0B12]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <LayoutGrid className="w-3.5 h-3.5" />
                            <span>Todos los rubros</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                                selectedSector === 'todas' ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                              }`}
                            >
                              {catalogo.length}
                            </span>
                            {selectedSector === 'todas' && <Check className="w-3.5 h-3.5 text-white" />}
                          </div>
                        </button>

                        {menuSectores.map((s) => {
                          const Icon = s.icon;
                          const isSelected = selectedSector === s.slug;
                          const count = counts.get(s.slug) ?? 0;
                          return (
                            <button
                              key={s.slug}
                              type="button"
                              onClick={() => {
                                updateParam('sector', s.slug);
                                setSectorMenuOpen(false);
                                setSectorFilterQuery('');
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors text-left ${
                                isSelected
                                  ? 'bg-[#0B0B12] text-white font-semibold'
                                  : 'hover:bg-zinc-100 text-[#0B0B12]'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <Icon className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">{s.label}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                                    isSelected ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                                  }`}
                                >
                                  {count}
                                </span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>,
                    document.body,
                  )}
              </div>

              {/* Pastillas de acceso rápido a rubros principales (Desktop) */}
              <div className="hidden lg:flex items-center gap-1 min-w-0 overflow-x-auto no-scrollbar">
                <FilterChip
                  active={selectedSector === 'todas'}
                  onClick={() => updateParam('sector', 'todas')}
                >
                  Todas
                </FilterChip>
                {POPULAR_SLUGS.map((slug) => {
                  const s = getSector(slug);
                  if (!s) return null;
                  const isSelected = selectedSector === s.slug;
                  return (
                    <FilterChip
                      key={s.slug}
                      active={isSelected}
                      onClick={() => updateParam('sector', s.slug)}
                    >
                      {s.label}
                    </FilterChip>
                  );
                })}

                {/* Si se seleccionó un rubro que no está en la lista rápida, mostrarlo aquí con botón para quitar */}
                {selectedSector !== 'todas' && !POPULAR_SLUGS.includes(selectedSector) && (
                  <button
                    type="button"
                    onClick={() => updateParam('sector', 'todas')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0B0B12] text-white shadow-2xs"
                  >
                    <span>{activeSectorLabel}</span>
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* LADO DERECHO: SELECTOR DE ESTILO & BUSCADOR */}
            <div className="flex w-full min-w-0 items-center gap-2 md:w-auto md:shrink-0">
              
              {/* Selector de estilo segmentado */}
              <div className="inline-flex items-center p-1 rounded-full bg-zinc-100/90 border border-zinc-200/70 text-xs font-medium shrink-0">
                <button
                  type="button"
                  onClick={() => updateParam('estilo', 'todos')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all text-xs ${
                    selectedStyle === 'todos'
                      ? 'bg-white text-[#0B0B12] shadow-2xs font-semibold'
                      : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  Todos
                </button>
                <button
                  type="button"
                  onClick={() => updateParam('estilo', 'claro')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all text-xs flex items-center gap-1 ${
                    selectedStyle === 'claro'
                      ? 'bg-white text-[#0B0B12] shadow-2xs font-semibold'
                      : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  <span>Claro</span>
                </button>
                <button
                  type="button"
                  onClick={() => updateParam('estilo', 'oscuro')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all text-xs flex items-center gap-1 ${
                    selectedStyle === 'oscuro'
                      ? 'bg-white text-[#0B0B12] shadow-2xs font-semibold'
                      : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  <Moon className="w-3 h-3" />
                  <span>Oscuro</span>
                </button>
              </div>

              {/* Buscador reactivo */}
              <div className="relative min-w-0 flex-1 sm:w-56 sm:flex-none">
                <label htmlFor="galeria-buscar" className="sr-only">
                  Buscar propuestas
                </label>
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="galeria-buscar"
                  type="text"
                  value={query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full rounded-full border border-transparent bg-zinc-100/90 py-2 pl-8 pr-7 text-sm text-[#0B0B12] placeholder-zinc-500 shadow-2xs transition-all hover:bg-zinc-100 focus:border-zinc-300 focus:bg-white focus:outline-none sm:py-1 sm:text-sm"
                />
                {query && (
                  <button
                    onClick={() => handleQueryChange('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Botón rápido para restablecer todos los filtros */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  title="Restablecer filtros"
                  className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-[#0B0B12] transition-colors shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CUADRÍCULA DE PROPUESTAS (3 COLUMNAS) */}
      <section className="relative z-10 px-4 sm:px-6 pt-6 pb-28">
        <div className="max-w-[88rem] mx-auto">
          <p className="mb-6 text-sm text-zinc-500">
            Demos de rubro para elegir dirección de diseño. No son clientes — los casos reales
            están en{' '}
            <Link to="/creaciones" className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:text-[#0B0B12]">
              Creaciones
            </Link>
            .
          </p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((entry, i) => (
                <PropuestaCard
                  key={entry.slug}
                  {...entry}
                  index={i}
                  variantProp="default"
                  eager={i === 0}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-zinc-200/80 bg-white px-8 py-16 text-center max-w-md mx-auto my-12 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-500 flex items-center justify-center mx-auto mb-4">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-base font-semibold text-[#0B0B12] mb-1">
                No se encontraron propuestas
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 mb-6">
                No hay resultados para los filtros o el término de búsqueda actual.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 bg-[#0B0B12] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer opciones</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
        active
          ? 'bg-[#0B0B12] text-white shadow-2xs font-semibold'
          : 'text-zinc-600 hover:text-[#0B0B12] hover:bg-zinc-100'
      }`}
    >
      {children}
    </button>
  );
}
