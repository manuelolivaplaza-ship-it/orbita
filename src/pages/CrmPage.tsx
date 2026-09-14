import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import catalogo from 'virtual:propuestas-catalogo';
import { PageMeta } from '../components/PageMeta';
import { CrmWorkspace } from '../components/crm/CrmWorkspace';

export default function CrmPage() {
  const { slug } = useParams<{ slug: string }>();

  const current = useMemo(() => {
    if (slug) {
      const found = catalogo.find((p) => p.slug === slug);
      if (found) return found;
    }
    return catalogo.find((p) => p.slug === 'dentista-b-oscuro-premium') || catalogo[0];
  }, [slug]);

  return (
    <>
      <PageMeta
        title={`Panel · ${current.brand}`}
        description="Administra catálogo, prospectos, agenda y el sitio desde un solo panel."
      />
      <CrmWorkspace
        key={current.slug}
        slug={current.slug}
        brand={current.brand}
        sector={current.sector}
        description={current.description}
      />
    </>
  );
}
