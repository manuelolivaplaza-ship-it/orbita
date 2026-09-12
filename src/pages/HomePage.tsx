import { lazy, Suspense } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { LazyOnView } from '../components/LazyOnView';
import { PageMeta } from '../components/PageMeta';
import { HOME_FAQS } from '../data/faq';
import { faqPageJsonLd, professionalServiceJsonLd, webSiteJsonLd } from '../seo/schema';
import type { LayoutOutletContext } from '../layouts/MainLayout';

const CasosReales = lazy(() =>
  import('../components/home/CasosReales').then((m) => ({ default: m.CasosReales })),
);
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
        jsonLd={[professionalServiceJsonLd(), faqPageJsonLd(HOME_FAQS), webSiteJsonLd()]}
      />
      <Hero onOpenQuoteModal={onOpenQuoteModal} onOpenSchedule={onOpenSchedule} />
      <LazyOnView minHeight={720} rootMargin="0px">
        <Suspense fallback={null}>
          <GaleriaTeaser />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={420} rootMargin="0px">
        <Suspense fallback={null}>
          <CasosReales />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={900} rootMargin="0px">
        <Suspense fallback={null}>
          <CrmShowcase />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={640} rootMargin="0px">
        <Suspense fallback={null}>
          <ShowcasePanel onOpenQuoteModal={onOpenQuoteModal} />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={720} rootMargin="0px">
        <Suspense fallback={null}>
          <Precios onOpenQuoteModal={onOpenQuoteModal} />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={480} rootMargin="0px">
        <Suspense fallback={null}>
          <FaqAccordion />
        </Suspense>
      </LazyOnView>
      <LazyOnView minHeight={640} rootMargin="0px">
        <Suspense fallback={null}>
          <Contacto preselectedPlan={selectedPlan} onOpenSchedule={onOpenSchedule} />
        </Suspense>
      </LazyOnView>
    </>
  );
}
