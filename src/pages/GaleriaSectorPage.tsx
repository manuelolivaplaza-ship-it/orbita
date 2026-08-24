import { useMemo, useState } from 'react';
import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom';
import { ArrowRight, Check, Copy } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../data/sectores';
import { PropuestaCard } from '../components/galeria/PropuestaCard';
import { PageMeta } from '../components/PageMeta';
import type { LayoutOutletContext } from '../layouts/MainLayout';

/**
 * Página de sector de la galería: enlace pensado para enviar a un cliente de
 * ese rubro (p. ej. orbita.studio/galeria/arquitectura).
 */
export default function GaleriaSectorPage() {
  const { sector: sectorSlug } = useParams<{ sector: string }>();
  const { onOpenQuoteModal } = useOutletContext<LayoutOutletContext>();
  const [copied, setCopied] = useState(false);

  const sector = sectorSlug ? getSector(sectorSlug) : undefined;
  const entries = useMemo(
    () => (sector ? catalogo.filter((e) => e.sector === sector.slug) : []),
    [sector],
  );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* portapapeles no disponible */
    }
  };

  if (!sector) return <Navigate to="/galeria" replace />;

  const Icon = sector.icon;

  return (
    <>
      <PageMeta
        title={`${sector.label} | Galería de propuestas Órbita`}
        description={`${sector.heroTitle}. ${sector.description}`}
      />

      <section className="relative z-10 px-6 pt-28 sm:pt-32 pb-12">
        <div className="max-w-[88rem] mx-auto">
          <Link
            to="/galeria"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#0B0B12] transition-colors mb-8"
          >
            ← Toda la galería
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200/80 bg-white shadow-sm"
                  style={{ color: sector.accent }}
                >
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest">
                  Galería · {sector.label}
                </p>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B0B12] leading-[0.95] mb-5"
                style={{ letterSpacing: '-0.045em' }}
              >
                {sector.heroTitle}
              </h1>
              <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
                {sector.description}{' '}
                {entries.length > 0 && (
                  <>
                    Recorre las {entries.length}{' '}
                    {entries.length === 1 ? 'propuesta' : 'propuestas'} en vivo y dinos cuál se
                    parece a lo que buscas.
                  </>
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200/90 px-5 py-2.5 rounded-full hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                {copied ? 'Enlace copiado' : 'Copiar enlace'}
              </button>
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 bg-[#0B0B12] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
              >
                Quiero una así
                <ArrowRight className="w-4 h-4 text-zinc-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20 sm:pb-24">
        <div className="max-w-[88rem] mx-auto">
          {entries.length > 0 ? (
            <div key={sector.slug} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {entries.map((entry, i) => (
                <PropuestaCard
                  key={entry.slug}
                  {...entry}
                  index={i}
                  variantProp={i === 0 && entries.length > 1 ? 'wide' : 'default'}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-zinc-200/80 bg-white px-8 py-16 text-center">
              <h2 className="text-2xl font-medium tracking-tight text-[#0B0B12] mb-2">
                Todavía no hay propuestas de {sector.label.toLowerCase()}.
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

      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-[88rem] mx-auto">
          <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-5">
            Explora otros sectores
          </p>
          <div className="flex flex-wrap gap-2.5">
            {SECTORES.filter((s) => s.slug !== sector.slug).map((s) => (
              <Link
                key={s.slug}
                to={`/galeria/${s.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200/90 px-4 py-2 rounded-full hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                <s.icon className="w-4 h-4" style={{ color: s.accent }} />
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
