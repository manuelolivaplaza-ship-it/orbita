import { site, whatsappUrl } from '../data/site';
import { getSupabase, isSupabaseConfigured } from './supabase';

export type LeadPayload = {
  source: 'contacto' | 'cotizacion' | 'newsletter' | 'reunion';
  nombre?: string;
  email: string;
  telefono?: string;
  mensaje?: string;
  plan?: string;
  extras?: string;
  total?: string;
  empresa?: string;
  rubro?: string;
  plazo?: string;
  objetivo?: string;
  fecha?: string;
};

function linesFrom(data: LeadPayload): string {
  const rows: [string, string | undefined][] = [
    ['Origen', data.source],
    ['Nombre', data.nombre],
    ['Email', data.email],
    ['Tel', data.telefono],
    ['Empresa', data.empresa],
    ['Rubro', data.rubro],
    ['Plan', data.plan],
    ['Estimación', data.total],
    ['Extras', data.extras],
    ['Plazo', data.plazo],
    ['Objetivo', data.objetivo],
    ['Fecha', data.fecha],
    ['Detalle', data.mensaje],
  ];
  return rows
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
}

export function leadSummary(data: LeadPayload): string {
  const header =
    data.source === 'newsletter'
      ? 'Hola Órbita — quiero novedades.'
      : data.source === 'reunion'
        ? 'Hola Órbita — quiero agendar una reunión.'
        : 'Hola Órbita — quiero cotizar.';
  return `${header}\n\n${linesFrom(data)}`;
}

export async function submitLead(
  data: LeadPayload,
): Promise<{ via: 'supabase' | 'endpoint' | 'whatsapp' | 'mailto' }> {
  if (isSupabaseConfigured()) {
    const { error } = await getSupabase().from('leads').insert({
      source: data.source,
      nombre: data.nombre || null,
      email: data.email,
      telefono: data.telefono || null,
      mensaje: data.mensaje || null,
      plan: data.plan || null,
      extras: data.extras || null,
      total: data.total || null,
      empresa: data.empresa || null,
      rubro: data.rubro || null,
      plazo: data.plazo || null,
      objetivo: data.objetivo || null,
      fecha: data.fecha || null,
    });
    if (error) throw new Error(error.message || 'No se pudo guardar el mensaje');
    return { via: 'supabase' };
  }

  if (site.formEndpoint) {
    const res = await fetch(site.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('No se pudo enviar el formulario');
    return { via: 'endpoint' };
  }

  if (site.whatsapp) {
    window.open(whatsappUrl(leadSummary(data)), '_blank', 'noopener,noreferrer');
    return { via: 'whatsapp' };
  }

  const subject = encodeURIComponent(
    data.source === 'newsletter'
      ? 'Newsletter Órbita'
      : data.source === 'reunion'
        ? `Reunión Órbita — ${data.fecha || 'nueva'}`
        : `Cotización Órbita — ${data.plan || 'nuevo proyecto'}`,
  );
  const body = encodeURIComponent(leadSummary(data));
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  return { via: 'mailto' };
}
