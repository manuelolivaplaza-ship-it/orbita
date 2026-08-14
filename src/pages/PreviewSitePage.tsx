import { useEffect } from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { getPreview } from '../previews/registry';
import { usePreviewFonts } from '../previews/usePreviewFonts';
import { PageMeta } from '../components/PageMeta';
import { PreviewReturnPopup } from '../components/cases/PreviewReturnPopup';

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
      <Component />
      <PreviewReturnPopup name={preview.name} caseSlug={preview.caseSlug} />
    </>
  );
}
