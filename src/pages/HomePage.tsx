import { lazy, Suspense } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CasosReales } from '../components/home/CasosReales';
import { LazyOnView } from '../components/LazyOnView';
import { PageMeta } from '../components/PageMeta';
import { HOME_FAQS } from '../data/faq';
import { siteUrl } from '../data/site';
import { faqPageJsonLd, professionalServiceJsonLd } from '../seo/schema';
import type { LayoutOutletContext } from '../layouts/MainLayout';

const GaleriaTeaser = lazy(() =>
  import('../components/home/GaleriaTeaser').then((m) => ({ default: m.GaleriaTeaser })),
);
const CrmShowcase = lazy(() =>
  import('../components/home/CrmShowcase').then((m) => ({ default: m.CrmShowcase })),
);
const ShowcasePanel = lazy(() =>
  import('../components/ShowcasePanel').then((m) => ({ default: m.ShowcasePanel })),
);
const Precios = lazy(() =>
  import('../components/Precios').then((m) => ({ default: m.Precios })),
);
const FaqAccordion = lazy(() =>
  import('../components/FaqAccordion').then((m) => ({ default: m.FaqAccordion })),
);
const Contacto = lazy(() =>
  import('../components/Contacto').then((m) => ({ default: m.Contacto })),
);

export default function HomePage() {
  const { onOpenQuoteModal, onOpenSchedule, selectedPlan } = useOutletContext<LayoutOutletContext>();

  return (
    <>
      <PageMeta
        title="Reclu | Sitios web en 7–14 días + WhatsApp"
        description="Rediseñamos tu web en 7–14 días: clara, rápida y con WhatsApp para que te escriban. Demos de rubro en vivo. Santiago, Chile."
        image={siteUrl('/og-image.jpg')}
        jsonLd={[professionalServiceJsonLd(siteUrl('/')), faqPageJsonLd(HOME_FAQS)]}
      />
      <Hero onOpenQuoteModal={onOpenQuoteModal} onOpenSchedule={onOpenSchedule} />
      <LazyOnView minHeight={720}>
        <Suspense fallback={null}>
          <GaleriaTeaser />
        </Suspense>
      </LazyOnView>
      <CasosReales />
      <LazyOnView minHeight={900}>
        <Suspense fallback={null}>
          <CrmShowcase />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={640}>
        <Suspense fallback={null}>
          <ShowcasePanel onOpenQuoteModal={onOpenQuoteModal} />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={720}>
        <Suspense fallback={null}>
          <Precios onOpenQuoteModal={onOpenQuoteModal} />
        </Suspense>
      </LazyOnView>
      <Suspense fallback={null}>
        <FaqAccordion />
      </Suspense>
      <Suspense fallback={null}>
        <Contacto preselectedPlan={selectedPlan} onOpenSchedule={onOpenSchedule} />
      </Suspense>
    </>
  );
}
