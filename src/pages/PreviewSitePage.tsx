import { useEffect } from 'react';
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getPreview } from '../previews/registry';
import { usePreviewFonts } from '../previews/usePreviewFonts';
import { PageMeta } from '../components/PageMeta';

export default function PreviewSitePage() {
  const { slug } = useParams<{ slug: string }>();
  const [params] = useSearchParams();
  const embed = params.get('embed') === '1';
  const preview = getPreview(slug);
  usePreviewFonts();

  useEffect(() => {
    document.documentElement.classList.add('preview-scroll');
    return () => document.documentElement.classList.remove('preview-scroll');
  }, []);

  if (!preview) {
    return <Navigate to="/creaciones" replace />;
  }

  const { Component } = preview;

  if (embed) {
    const card = params.get('card') === '1';
    return (
      <div className={card ? 'preview-card-shot' : undefined}>
        <PageMeta title={`${preview.name} · Preview Órbita`} description={`Web de ejemplo: ${preview.name}.`} />
        <Component />
      </div>
    );
  }

  return (
    <>
      <PageMeta title={`${preview.name} · Preview Órbita`} description={`Recorre la web de ejemplo de ${preview.name}.`} />
      <div className="sticky top-0 z-[70] h-12 bg-[#0B0B12] text-white flex items-center px-3 sm:px-5 gap-3">
        <Link
          to={`/creaciones/${preview.caseSlug}`}
          className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Volver al caso</span>
        </Link>
        <span className="h-4 w-px bg-white/15" />
        <span className="text-xs font-medium truncate">
          Preview · {preview.name}
          <span className="hidden sm:inline text-white/45 font-normal"> · web de ejemplo hecha por Órbita</span>
        </span>
        <Link
          to={`/?cotizar=1&plan=Estación`}
          className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium bg-white text-[#0B0B12] px-3 py-1.5 rounded-full hover:bg-zinc-200 shrink-0"
        >
          Quiero un sitio así
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <Component />
    </>
  );
}
