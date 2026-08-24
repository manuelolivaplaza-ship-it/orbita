import { site, whatsappUrl } from '../data/site';
import { clip, FIELD_MAX, isHoneyFilled } from './formLimits';
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
  honey?: string;
};

const COOLDOWN_MS = 8000;
const COOLDOWN_KEY = 'orbita.lead.sent';

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

function publicLeadError(message: string | undefined): Error {
  const known = [
    'Origen inválido',
    'Email inválido',
    'Nombre inválido',
    'El mensaje es demasiado largo',
    'El formulario está ocupado. Probá de nuevo en un momento',
    'Demasiados envíos. Probá de nuevo en unos minutos',
  ];
  if (message && known.includes(message)) return new Error(message);
  return new Error('No se pudo enviar. Probá de nuevo en un momento.');
}

function clipped(data: LeadPayload): LeadPayload {
  return {
    source: data.source,
    nombre: clip(data.nombre, FIELD_MAX.nombre),
    email: clip(data.email, FIELD_MAX.email).toLowerCase(),
    telefono: clip(data.telefono, FIELD_MAX.telefono),
    mensaje: clip(data.mensaje, FIELD_MAX.mensaje),
    plan: clip(data.plan, FIELD_MAX.plan),
    extras: clip(data.extras, FIELD_MAX.extras),
    total: clip(data.total, FIELD_MAX.total),
    empresa: clip(data.empresa, FIELD_MAX.empresa),
    rubro: clip(data.rubro, FIELD_MAX.rubro),
    plazo: clip(data.plazo, FIELD_MAX.plazo),
    objetivo: clip(data.objetivo, FIELD_MAX.objetivo),
    fecha: clip(data.fecha, FIELD_MAX.fecha),
  };
}

export async function submitLead(
  data: LeadPayload,
): Promise<{ via: 'supabase' | 'endpoint' | 'whatsapp' | 'mailto' }> {
  if (isHoneyFilled(data.honey)) {
    await new Promise((r) => setTimeout(r, 400));
    return { via: 'supabase' };
  }

  if (typeof sessionStorage !== 'undefined') {
    const last = Number(sessionStorage.getItem(COOLDOWN_KEY) || 0);
    if (Date.now() - last < COOLDOWN_MS) {
      throw new Error('Esperá unos segundos antes de enviar de nuevo.');
    }
  }

  const payload = clipped(data);

  if (isSupabaseConfigured()) {
    const { error } = await getSupabase().rpc('submit_lead', {
      p_source: payload.source,
      p_nombre: payload.nombre || '',
      p_email: payload.email,
      p_telefono: payload.telefono || '',
      p_mensaje: payload.mensaje || '',
      p_plan: payload.plan || '',
      p_extras: payload.extras || '',
      p_total: payload.total || '',
      p_empresa: payload.empresa || '',
      p_rubro: payload.rubro || '',
      p_plazo: payload.plazo || '',
      p_objetivo: payload.objetivo || '',
      p_fecha: payload.fecha || '',
    });
    if (error) throw publicLeadError(error.message);
    sessionStorage.setItem(COOLDOWN_KEY, String(Date.now()));
    return { via: 'supabase' };
  }

  if (site.formEndpoint) {
    const res = await fetch(site.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('No se pudo enviar el formulario');
    sessionStorage.setItem(COOLDOWN_KEY, String(Date.now()));
    return { via: 'endpoint' };
  }

  if (site.whatsapp) {
    window.open(whatsappUrl(leadSummary(payload)), '_blank', 'noopener,noreferrer');
    return { via: 'whatsapp' };
  }

  const subject = encodeURIComponent(
    payload.source === 'newsletter'
      ? 'Newsletter Órbita'
      : payload.source === 'reunion'
        ? `Reunión Órbita — ${payload.fecha || 'nueva'}`
        : `Cotización Órbita — ${payload.plan || 'nuevo proyecto'}`,
  );
  const body = encodeURIComponent(leadSummary(payload));
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  return { via: 'mailto' };
}
