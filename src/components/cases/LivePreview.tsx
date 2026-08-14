import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Maximize2, Monitor, Smartphone } from 'lucide-react';
import type { CaseStudy } from '../../data/cases';
import { getPreviewPath } from '../../data/cases';

type Viewport = 'desktop' | 'mobile';

export function LivePreview({ caseStudy }: { caseStudy: CaseStudy }) {
  const [viewport, setViewport] = useState<Viewport>(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
      ? 'mobile'
      : 'desktop',
  );
  const embedSrc = getPreviewPath(caseStudy, true);
  const fullSrc = getPreviewPath(caseStudy, false);
  const url = `preview.orbita.studio/${caseStudy.previewSlug}`;

  if (!embedSrc || !fullSrc) return null;

  const mobile = viewport === 'mobile';

  return (
    <section className="relative z-10 bg-[#F7F8FC] px-4 sm:px-6 pb-20">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7280] mb-1">
              Preview en vivo
            </p>
            <h2
              className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0B0B12]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Recorre el sitio como un visitante.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-full border border-zinc-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setViewport('desktop')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                  !mobile ? 'bg-[#0B0B12] text-white' : 'text-zinc-600'
                }`}
                aria-pressed={!mobile}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setViewport('mobile')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                  mobile ? 'bg-[#0B0B12] text-white' : 'text-zinc-600'
                }`}
                aria-pressed={mobile}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>
            <Link
              to={fullSrc}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0B0B12] border border-zinc-200 bg-white px-3 py-2 rounded-full hover:border-zinc-400"
            >
              <span className="hidden sm:inline">Pantalla completa</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {mobile ? (
          <div className="flex justify-center">
            <div className="w-full max-w-[390px] bg-[#1A1A1E] rounded-[2.15rem] p-[10px] shadow-[0_24px_60px_-20px_rgba(15,15,40,0.45)]">
              <div className="bg-white rounded-[1.65rem] overflow-hidden flex flex-col aspect-[390/760]">
                <div className="shrink-0 bg-[#F2F2F7] px-3.5 pt-2 pb-1.5">
                  <div className="flex items-center justify-between text-[10px] font-semibold text-[#0B0B12] tabular-nums px-1 mb-1.5">
                    <span>9:41</span>
                    <span className="inline-block w-3.5 h-2 rounded-[1px] border border-[#0B0B12]/70 relative">
                      <span className="absolute inset-[1.5px] right-[3px] bg-[#0B0B12]/70 rounded-[0.5px]" />
                    </span>
                  </div>
                  <div className="h-7 rounded-full bg-white border border-black/5 flex items-center justify-center gap-1.5 px-3">
                    <Lock className="w-3 h-3 text-zinc-400 shrink-0" />
                    <span className="text-[11px] text-zinc-600 truncate font-medium">{url}</span>
                  </div>
                </div>
                <iframe
                  title={`Preview de ${caseStudy.name}`}
                  src={embedSrc}
                  className="w-full flex-1 border-0 bg-white min-h-0"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-zinc-200/90 bg-zinc-200 shadow-sm">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-200 bg-zinc-50">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              <div className="ml-2 flex-1 h-6 rounded-md bg-white border border-zinc-200/90 px-3 flex items-center max-w-md">
                <span className="text-[11px] text-zinc-500 truncate font-medium">{url}</span>
              </div>
            </div>
            <div className="bg-white w-full h-[72vh] min-h-[560px]">
              <iframe
                title={`Preview de ${caseStudy.name}`}
                src={embedSrc}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
