import { useEffect } from 'react';

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

export function PageMeta({ title, description, image }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[property="og:title"]', 'content', title);
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:title"]', 'content', title);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }
    if (image) {
      setMeta('meta[property="og:image"]', 'content', image);
      setMeta('meta[name="twitter:image"]', 'content', image);
    }
  }, [title, description, image]);

  return null;
}
