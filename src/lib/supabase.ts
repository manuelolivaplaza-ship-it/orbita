import { createClient, type SupabaseClient } from '@supabase/supabase-js';

function envStr(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

/** Publishable key: va al browser de todas formas. Fallback si Vercel no inyecta VITE_*. */
const url =
  envStr(import.meta.env.VITE_SUPABASE_URL) ||
  envStr(import.meta.env.NEXT_PUBLIC_SUPABASE_URL) ||
  'https://qmhhsrimzwbuwayrbmzv.supabase.co';
const anon =
  envStr(import.meta.env.VITE_SUPABASE_ANON_KEY) ||
  envStr(import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
  'sb_publishable_vDW9gkEKOTraLwjfPTmi4w_WG9rSncP';

export function isSupabaseConfigured(): boolean {
  return Boolean(url && anon);
}

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase no está configurado');
  }
  if (!client) {
    client = createClient(url, anon, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
        flowType: 'pkce',
      },
    });
  }
  return client;
}
