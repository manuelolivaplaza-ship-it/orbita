export const site = {
  name: 'Reclu',
  tagline: 'Sitios web que venden',
  city: 'Santiago, CL',
  /** Host canónico: apex redirige 308 → www. */
  origin: 'https://www.reclu.cl',
  email: 'hola@reclu.cl',
  supportEmail: 'soporte@reclu.cl',
  /** Número internacional sin + ni espacios. Sobreescribible con VITE_WHATSAPP. */
  whatsapp: (import.meta.env.VITE_WHATSAPP as string | undefined)?.replace(/\D/g, '') || '56935409699',
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || '',
} as const;

export function siteUrl(path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${site.origin}${p === '/' ? '/' : p}`;
}

export function whatsappUrl(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** +56 9 3540 9699 — mismo número de WhatsApp, formateado para Chile. */
export function formatWhatsAppDisplay(digits = site.whatsapp): string {
  const d = digits.replace(/\D/g, '');
  if (d.startsWith('56') && d.length >= 11) {
    return `+56 ${d.slice(2, 3)} ${d.slice(3, 7)} ${d.slice(7, 11)}`;
  }
  if (d.startsWith('9') && d.length === 9) {
    return `+56 ${d.slice(0, 1)} ${d.slice(1, 5)} ${d.slice(5)}`;
  }
  return `+${d}`;
}

export const sitePhoneDisplay = formatWhatsAppDisplay();
export const siteTelHref = `tel:+${site.whatsapp}`;
