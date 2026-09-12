import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site, siteUrl } from '../data/site';
import { professionalServiceJsonLd } from '../seo/schema';

interface PageMetaProps {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: object | object[] | null;
}

const JSONLD_ID = 'jsonld-primary';

function setMeta(selector: string, attr: string, value: string, create = true) {
  let el = document.querySelector(selector);
  if (!el && create) {
    el = document.createElement('meta');
    const match = selector.match(/\[(\w+)=["']([^"']+)["']\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el?.setAttribute(attr, value);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

function setRobots(content: string | null) {
  let el = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setJsonLd(data: object | object[] | null) {
  const existing = document.getElementById(JSONLD_ID);
  if (!data) {
    existing?.remove();
    return;
  }
  const payload = Array.isArray(data)
    ? {
        '@context': 'https://schema.org',
        '@graph': data.map((item) => {
          const rest = { ...(item as Record<string, unknown>) };
          delete rest['@context'];
          return rest;
        }),
      }
    : data;
  let el = existing as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = JSONLD_ID;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload);
}

export function PageMeta({ title, description, image, noIndex, jsonLd }: PageMetaProps) {
  const { pathname } = useLocation();
  const url = siteUrl(pathname);
  const ogImage = image || `${site.origin}/og-image.jpg`;
  const jsonLdKey = jsonLd === undefined ? '__default' : jsonLd === null ? '__none' : JSON.stringify(jsonLd);

  useEffect(() => {
    document.title = title;
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:url"]', 'content', url);
    setCanonical(url);
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:title"]', 'content', title);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }
    setMeta('meta[property="og:site_name"]', 'content', site.name);
    setMeta('meta[property="og:locale"]', 'content', 'es_CL');
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:image:alt"]', 'content', title);
    setMeta('meta[property="og:image:type"]', 'content', 'image/jpeg');
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]', 'content', '630');
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:image"]', 'content', ogImage);
    setRobots(noIndex ? 'noindex, nofollow' : null);
    if (noIndex || jsonLdKey === '__none') {
      setJsonLd(null);
    } else if (jsonLdKey === '__default') {
      setJsonLd(professionalServiceJsonLd(url));
    } else {
      setJsonLd(JSON.parse(jsonLdKey) as object | object[]);
    }
  }, [title, description, ogImage, url, noIndex, jsonLdKey]);

  return null;
}
