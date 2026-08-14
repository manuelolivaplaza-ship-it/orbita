export const site = {
  name: 'Órbita',
  tagline: 'Sitios web que venden',
  city: 'Santiago, CL',
  email: 'hola@orbita.studio',
  supportEmail: 'soporte@orbita.studio',
  /** Número internacional sin + ni espacios. Sobreescribible con VITE_WHATSAPP. */
  whatsapp: (import.meta.env.VITE_WHATSAPP as string | undefined)?.replace(/\D/g, '') || '56935409699',
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || '',
} as const;

export function whatsappUrl(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
