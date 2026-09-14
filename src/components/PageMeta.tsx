import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site, siteUrl } from '../data/site';

interface PageMetaProps {
  title: string;
  description?: string;
  /** URL absoluta de la imagen para og:image / twitter:image */
  image?: string;
}

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

export function PageMeta({ title, description, image }: PageMetaProps) {
  const { pathname } = useLocation();
  const url = siteUrl(pathname);
  const ogImage = image || `${site.origin}/og-image.jpg`;

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
  }, [title, description, ogImage, url]);

  return null;
}
