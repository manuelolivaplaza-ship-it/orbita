import { useOutletContext } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { PageMeta } from '../components/PageMeta';
import { siteUrl } from '../data/site';
import { webPageJsonLd } from '../seo/schema';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function ContactoPage() {
  const { onOpenSchedule, selectedPlan } = useOutletContext<LayoutOutletContext>();

  return (
    <>
      <PageMeta
        title="Contacto | Reclu"
        description="Cuéntanos qué vendes. Te respondemos con enfoque y rango de inversión. WhatsApp +56 9 3540 9699. Santiago, Chile."
        jsonLd={webPageJsonLd({
          title: 'Contacto | Reclu',
          description:
            'Cuéntanos qué vendes. Te respondemos con enfoque y rango de inversión. WhatsApp +56 9 3540 9699. Santiago, Chile.',
          url: siteUrl('/contacto'),
          type: 'ContactPage',
        })}
      />
      <div className="pt-12 sm:pt-16">
        <Contacto
          headingAs="h1"
          preselectedPlan={selectedPlan}
          onOpenSchedule={onOpenSchedule}
        />
      </div>
    </>
  );
}
