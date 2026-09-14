import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { GaleriaTeaser } from '../components/home/GaleriaTeaser';
import { CasosReales } from '../components/home/CasosReales';
import { CrmShowcase } from '../components/home/CrmShowcase';
import { ShowcasePanel } from '../components/ShowcasePanel';
import { Precios } from '../components/Precios';
import { FaqAccordion } from '../components/FaqAccordion';
import { Contacto } from '../components/Contacto';
import { PageMeta } from '../components/PageMeta';
import { siteUrl } from '../data/site';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function HomePage() {
  const { onOpenQuoteModal, onOpenSchedule, selectedPlan } = useOutletContext<LayoutOutletContext>();

  return (
    <>
      <PageMeta
        title="Reclu | Sitios web en 7–14 días + WhatsApp"
        description="Rediseñamos tu web en 7–14 días: clara, rápida y con WhatsApp para que te escriban. Demos de rubro en vivo. Santiago, Chile."
        image={siteUrl('/og-image.jpg')}
      />
      <Hero onOpenQuoteModal={onOpenQuoteModal} onOpenSchedule={onOpenSchedule} />
      <GaleriaTeaser />
      <CasosReales />
      <CrmShowcase />
      <ShowcasePanel onOpenQuoteModal={onOpenQuoteModal} />
      <Precios onOpenQuoteModal={onOpenQuoteModal} />
      <FaqAccordion />
      <Contacto preselectedPlan={selectedPlan} onOpenSchedule={onOpenSchedule} />
    </>
  );
}
