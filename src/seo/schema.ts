import { site, siteUrl } from '../data/site';
import type { FaqItem } from '../types';

export function professionalServiceJsonLd(pageUrl = siteUrl('/')) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: pageUrl,
    image: siteUrl('/og-image.jpg'),
    description:
      'Estudio web en Santiago de Chile. Sitios claros y rápidos en 7–14 días, con WhatsApp para que te escriban.',
    areaServed: 'CL',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressCountry: 'CL',
    },
    email: site.email,
    telephone: '+56935409699',
    priceRange: '$420.000–$1.490.000 CLP',
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function offerCatalogJsonLd(
  offers: { name: string; price: number; description: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Planes web Reclu',
    url: siteUrl('/precios'),
    itemListElement: offers.map((offer, i) => ({
      '@type': 'Offer',
      position: i + 1,
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: 'CLP',
      url: siteUrl('/precios'),
      availability: 'https://schema.org/InStock',
    })),
  };
}
