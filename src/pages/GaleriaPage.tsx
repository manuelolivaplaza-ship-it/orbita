import { useMemo, useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../data/sectores';
import { PropuestaCard } from '../components/galeria/PropuestaCard';
import { PageMeta } from '../components/PageMeta';

export default function GaleriaPage() {
  const [params, setParams] = useSearchParams();
  const selectedSector = params.get('sector') ?? 'todas';
  const selectedStyle = params.get('estilo') ?? 'todos';
  const [query, setQuery] = useState(params.get('q') ?? '');

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

  return (
    <>
      <PageMeta
        title="Propuestas | Reclu"
        description="Explora propuestas web listas por sector en Reclu. Sitios en vivo para recorrer y elegir."
      />

      {/* 1. BARRA SUPERIOR COMPACTA */}
      <section className="relative z-10 px-4 sm:px-6 pt-24 sm:pt-28 pb-4">
        <div className="max-w-[88rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0B12]">
                Propuestas
              </h1>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-200/80 text-zinc-700">
                {filtered.length} {filtered.length === 1 ? 'sitio' : 'sitios'}
              </span>
            </div>

            {/* Búsqueda y Selector de estilo */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  placeholder="Buscar por rubro o nombre..."
                  className="w-full bg-white border border-zinc-200/90 rounded-full pl-9 pr-8 py-1.5 text-xs sm:text-sm text-[#0B0B12] placeholder-zinc-400 focus:outline-none focus:border-zinc-500 shadow-2xs transition-all"
                />
                {query && (
                  <button
                    onClick={() => handleQueryChange('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Selector de estilo */}
              <div className="inline-flex items-center p-1 rounded-full bg-zinc-100/90 border border-zinc-200/70 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => updateParam('estilo', 'todos')}
                  className={`px-3 py-1 rounded-full transition-all ${
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
                  className={`px-3 py-1 rounded-full transition-all ${
                    selectedStyle === 'claro'
                      ? 'bg-white text-[#0B0B12] shadow-2xs font-semibold'
                      : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  Claro
                </button>
                <button
                  type="button"
                  onClick={() => updateParam('estilo', 'oscuro')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    selectedStyle === 'oscuro'
                      ? 'bg-white text-[#0B0B12] shadow-2xs font-semibold'
                      : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  Oscuro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPCIONES / FILTROS DE SECTOR (STICKY) */}
      <section className="relative z-20 px-4 sm:px-6 sticky top-[4.25rem] sm:top-20 py-2">
        <div className="max-w-[88rem] mx-auto">
          <div className="glass-light rounded-2xl sm:rounded-full p-1.5 shadow-[0_8px_30px_-12px_rgba(15,15,40,0.18)] overflow-x-auto no-scrollbar flex items-center gap-1.5">
            <FilterChip
              active={selectedSector === 'todas'}
              onClick={() => updateParam('sector', 'todas')}
            >
              Todas · {catalogo.length}
            </FilterChip>
            {conocidos.map((s) => (
              <FilterChip
                key={s.slug}
                active={selectedSector === s.slug}
                onClick={() => updateParam('sector', s.slug)}
              >
                {s.label} · {counts.get(s.slug)}
              </FilterChip>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GRID DE PROPUESTAS */}
      <section className="relative z-10 px-4 sm:px-6 pt-6 pb-28">
        <div className="max-w-[88rem] mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filtered.map((entry, i) => (
                <PropuestaCard
                  key={entry.slug}
                  {...entry}
                  index={i}
                  variantProp="default"
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-zinc-200/80 bg-white px-8 py-16 text-center max-w-md mx-auto my-8">
              <p className="text-base font-semibold text-[#0B0B12] mb-1">
                No se encontraron propuestas
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 mb-5">
                Prueba ajustando los filtros o el término de búsqueda.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 bg-[#0B0B12] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
              >
                Restablecer opciones
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
      className={`text-xs sm:text-[13px] font-medium px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors duration-200 ${
        active
          ? 'bg-[#0B0B12] text-white shadow-2xs'
          : 'text-zinc-600 hover:text-[#0B0B12] hover:bg-white/60'
      }`}
    >
      {children}
    </button>
  );
}
