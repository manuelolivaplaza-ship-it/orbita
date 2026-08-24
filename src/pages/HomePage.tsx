import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { GaleriaTeaser } from '../components/home/GaleriaTeaser';
import { WhatWeBuild } from '../components/home/WhatWeBuild';
import { SistemaOrbita } from '../components/SistemaOrbita';
import { MetodoTimeline } from '../components/MetodoTimeline';
import { ShowcasePanel } from '../components/ShowcasePanel';
import { Precios } from '../components/Precios';
import { FaqAccordion } from '../components/FaqAccordion';
import { Contacto } from '../components/Contacto';
import { PageMeta } from '../components/PageMeta';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function HomePage() {
  const { onOpenQuoteModal, onOpenSchedule, selectedPlan } = useOutletContext<LayoutOutletContext>();

  return (
    <>
      <PageMeta
        title="Órbita | Sitios web que venden"
        description="Estudio web orbital. Diseñamos landings y sitios de alto impacto: claros, rápidos y obsesionados con que te escriban."
        image="https://orbita.studio/og-image.jpg"
      />
      <Hero onOpenQuoteModal={onOpenQuoteModal} onOpenSchedule={onOpenSchedule} />
      <TrustStrip />
      <GaleriaTeaser />
      <FeaturedWork />
      <WhatWeBuild />
      <SistemaOrbita onOpenQuoteModal={onOpenQuoteModal} />
      <MetodoTimeline />
      <ShowcasePanel onOpenQuoteModal={onOpenQuoteModal} />
      <Precios onOpenQuoteModal={onOpenQuoteModal} />
      <FaqAccordion />
      <Contacto preselectedPlan={selectedPlan} onOpenSchedule={onOpenSchedule} />
    </>
  );
}
