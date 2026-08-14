import type { ComponentType } from 'react';
import { ClinicaAurora } from './clinica-aurora/ClinicaAurora';
import { Solsticio } from './solsticio/Solsticio';
import { ValeAsociados } from './vale/ValeAsociados';
import { CasaBruma } from './casa-bruma/CasaBruma';

export type PreviewEntry = {
  slug: string;
  name: string;
  caseSlug: string;
  Component: ComponentType;
};

export const previewRegistry: Record<string, PreviewEntry> = {
  'clinica-aurora': {
    slug: 'clinica-aurora',
    name: 'Clínica Aurora',
    caseSlug: 'clinica-aurora',
    Component: ClinicaAurora,
  },
  solsticio: {
    slug: 'solsticio',
    name: 'Solsticio',
    caseSlug: 'solsticio',
    Component: Solsticio,
  },
  'vale-asociados': {
    slug: 'vale-asociados',
    name: 'Vale & Asociados',
    caseSlug: 'vale-asociados',
    Component: ValeAsociados,
  },
  'casa-bruma': {
    slug: 'casa-bruma',
    name: 'Casa Bruma',
    caseSlug: 'casa-bruma',
    Component: CasaBruma,
  },
};

export function getPreview(slug?: string): PreviewEntry | undefined {
  if (!slug) return undefined;
  return previewRegistry[slug];
}
