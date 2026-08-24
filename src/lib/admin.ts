import { clip, FIELD_MAX } from './formLimits';
import { getSupabase } from './supabase';

export type LeadRow = {
  id: string;
  created_at: string;
  source: 'contacto' | 'cotizacion' | 'newsletter' | 'reunion';
  nombre: string | null;
  email: string;
  telefono: string | null;
  mensaje: string | null;
  plan: string | null;
  extras: string | null;
  total: string | null;
  empresa: string | null;
  rubro: string | null;
  plazo: string | null;
  objetivo: string | null;
  fecha: string | null;
};

export type ProposalRow = {
  id: string;
  created_at: string;
  slug: string;
  title: string | null;
  client: string | null;
  notes: string | null;
  status: 'draft' | 'sent' | 'won' | 'lost';
};

export type FolderProposal = {
  slug: string;
  title: string;
  client: string;
  kind: 'app' | 'static';
};

export async function listLeads(): Promise<LeadRow[]> {
  const { data, error } = await getSupabase()
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as LeadRow[];
}

export async function listProposalRows(): Promise<ProposalRow[]> {
  const { data, error } = await getSupabase()
    .from('proposals')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as ProposalRow[];
}

export async function upsertProposal(input: {
  slug: string;
  title?: string;
  client?: string;
  notes?: string;
  status?: ProposalRow['status'];
}): Promise<void> {
  const { error } = await getSupabase().from('proposals').upsert(
    {
      slug: clip(input.slug, FIELD_MAX.slug),
      title: clip(input.title, FIELD_MAX.title) || null,
      client: clip(input.client, FIELD_MAX.client) || null,
      notes: clip(input.notes, FIELD_MAX.notes) || null,
      status: input.status ?? 'draft',
    },
    { onConflict: 'slug' },
  );
  if (error) throw error;
}

/** Las carpetas no se listan en un JSON público. El admin ve lo cargado en `proposals`. */
export async function fetchFolderProposals(): Promise<FolderProposal[]> {
  return [];
}

export async function isAdminUser(): Promise<boolean> {
  const { data, error } = await getSupabase().rpc('is_admin');
  if (error) return false;
  return Boolean(data);
}
