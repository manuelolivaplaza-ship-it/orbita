import { site, siteUrl } from '../data/site';
import type { FaqItem } from '../types';

/** Organización del estudio. URL canónica del home; no repetir en cada ruta. */
export function professionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: siteUrl('/'),
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

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: siteUrl('/'),
    inLanguage: 'es-CL',
    publisher: { '@type': 'Organization', name: site.name, url: siteUrl('/') },
  };
}

export function webPageJsonLd(opts: {
  title: string;
  description?: string;
  url: string;
  type?: 'WebPage' | 'ContactPage' | 'CollectionPage' | 'AboutPage';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    name: opts.title,
    description: opts.description,
    url: opts.url,
    isPartOf: { '@type': 'WebSite', name: site.name, url: siteUrl('/') },
    inLanguage: 'es-CL',
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
