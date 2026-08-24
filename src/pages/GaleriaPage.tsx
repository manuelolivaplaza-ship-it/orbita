import { useMemo, type ReactNode } from 'react';
import { Link, useOutletContext, useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../data/sectores';
import { PropuestaCard } from '../components/galeria/PropuestaCard';
import { PageMeta } from '../components/PageMeta';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function GaleriaPage() {
  const { onOpenQuoteModal } = useOutletContext<LayoutOutletContext>();
  const [params, setParams] = useSearchParams();
  const selected = params.get('sector') ?? 'todas';

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const entry of catalogo) map.set(entry.sector, (map.get(entry.sector) ?? 0) + 1);
    return map;
  }, []);

  const conocidos = useMemo(() => SECTORES.filter((s) => (counts.get(s.slug) ?? 0) > 0), [counts]);
  const extras = useMemo(
    () => catalogo.filter((e) => !getSector(e.sector)),
    [],
  );

  const setSector = (slug: string) => {
    const next = new URLSearchParams();
    if (slug !== 'todas') next.set('sector', slug);
    setParams(next, { replace: true });
  };

  const filtered = selected === 'todas' ? null : catalogo.filter((e) => e.sector === selected);
  const selectedInfo = selected === 'todas' ? null : getSector(selected);

  return (
    <>
      <PageMeta
        title="Galería de propuestas | Órbita"
        description="Explora propuestas web listas por sector: dental, legal, arquitectura, inmobiliaria y más. Recorre cada sitio en vivo y elige una dirección de diseño."
      />

      <section className="relative z-10 px-6 pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-[88rem] mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-4">
              Galería de propuestas
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0B0B12] leading-[0.95] mb-6"
              style={{ letterSpacing: '-0.045em' }}
            >
              Diseños listos para tu sector.
            </h1>
            <p className="text-zinc-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
              {catalogo.length} propuestas que puedes recorrer ahora mismo, en vivo. Elige un rubro,
              entra a un sitio y navega como lo haría tu cliente: la que te guste, la adaptamos a tu
              marca.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros por sector */}
      <section className="relative z-20 px-6">
        <div className="max-w-[88rem] mx-auto sticky top-20 sm:top-24 z-30 -mx-2 px-2 py-2">
          <div className="glass-light rounded-full inline-flex flex-wrap items-center gap-1.5 px-2.5 py-2 shadow-[0_10px_35px_-15px_rgba(15,15,40,0.25)] max-w-full">
            <FilterChip active={selected === 'todas'} onClick={() => setSector('todas')}>
              Todas · {catalogo.length}
            </FilterChip>
            {conocidos.map((s) => (
              <FilterChip key={s.slug} active={selected === s.slug} onClick={() => setSector(s.slug)}>
                {s.label} · {counts.get(s.slug)}
              </FilterChip>
            ))}
          </div>
        </div>
      </section>

      {filtered ? (
        <section className="relative z-10 px-6 pt-10 pb-24 sm:pb-28">
          <div className="max-w-[88rem] mx-auto">
            {filtered.length > 0 ? (
              <div key={selected} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {filtered.map((entry, i) => (
                  <PropuestaCard key={entry.slug} {...entry} index={i} variantProp={i === 0 ? 'wide' : 'default'} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-zinc-200/80 bg-white px-8 py-16 text-center">
                <h2 className="text-2xl font-medium tracking-tight text-[#0B0B12] mb-2">
                  Todavía no hay propuestas de {selectedInfo?.label ?? 'este sector'}.
                </h2>
                <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6">
                  Podemos preparar una dirección de diseño a medida para tu rubro.
                </p>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center gap-2 bg-[#0B0B12] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors"
                >
                  Pedir propuesta
                  <ArrowRight className="w-4 h-4 text-zinc-300" />
                </button>
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="relative z-10 px-6 pt-12 pb-24 sm:pb-28">
          <div className="max-w-[88rem] mx-auto space-y-16 sm:space-y-20">
            {conocidos.map((sector) => {
              const entries = catalogo.filter((e) => e.sector === sector.slug);
              const Icon = sector.icon;
              return (
                <div key={sector.slug}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-zinc-200/80 bg-white shadow-sm"
                        style={{ color: sector.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-medium tracking-tight text-[#0B0B12]">
                          {sector.label}
                        </h2>
                        <p className="text-sm text-zinc-500">
                          {entries.length} {entries.length === 1 ? 'propuesta' : 'propuestas'}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/galeria/${sector.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280] transition-colors"
                    >
                      Ver sector
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {entries.map((entry, i) => (
                      <PropuestaCard
                        key={entry.slug}
                        {...entry}
                        index={i}
                        variantProp={i === 0 && entries.length > 1 ? 'wide' : 'default'}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {extras.length > 0 && (
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-zinc-200/80 bg-white shadow-sm text-zinc-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight text-[#0B0B12]">Otras</h2>
                    <p className="text-sm text-zinc-500">
                      {extras.length} {extras.length === 1 ? 'propuesta' : 'propuestas'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  {extras.map((entry, i) => (
                    <PropuestaCard key={entry.slug} {...entry} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-[88rem] mx-auto">
          <div className="rounded-3xl bg-[#0B0B12] text-white px-8 sm:px-12 py-14 sm:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#6B7280]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-[#A1A1AA]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight mb-3"
                style={{ letterSpacing: '-0.03em' }}
              >
                ¿Tu rubro no está en la lista?
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Estas propuestas son puntos de partida. Diseñamos una dirección propia para tu
                marca: cuéntanos qué haces y te enviamos una propuesta a medida.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal()}
              className="relative z-10 inline-flex items-center gap-3 bg-white text-[#0B0B12] text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-zinc-100 transition-colors shrink-0"
            >
              <span>Pedir propuesta a medida</span>
              <span className="rounded-full bg-[#0B0B12] p-2">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>
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
      className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 ${
        active
          ? 'bg-[#0B0B12] text-white'
          : 'text-zinc-600 hover:text-[#0B0B12] hover:bg-white/60'
      }`}
    >
      {children}
    </button>
  );
}
