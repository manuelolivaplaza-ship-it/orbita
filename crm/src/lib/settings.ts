import { BRAND } from "./constants";
import { getServiceClient } from "./supabase";
import type { AppSettings } from "./types";

const FALLBACK: AppSettings = {
  id: 1,
  daily_new_cap: Number(process.env.CRM_DAILY_NEW_CAP || 50),
  timezone: BRAND.timezone,
  bot_key_override: null,
  owner_default: BRAND.owner,
  updated_at: new Date().toISOString(),
};

export async function getSettings(): Promise<AppSettings> {
  const db = getServiceClient();
  const { data, error } = await db
    .from("app_settings")
    .select("*")
    .eq("id", 1)
    .maybeSingle();
  if (error || !data) return FALLBACK;
  return data as AppSettings;
}

export async function saveSettings(
  patch: Partial<Pick<AppSettings, "daily_new_cap" | "bot_key_override" | "owner_default">>,
): Promise<AppSettings> {
  const db = getServiceClient();
  const { data, error } = await db
    .from("app_settings")
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq("id", 1)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return data as AppSettings;
}

export async function resolveBotKey(): Promise<string> {
  const settings = await getSettings();
  return (
    settings.bot_key_override?.trim() ||
    process.env.CRM_BOT_KEY?.trim() ||
    ""
  );
}

export function maskKey(key: string): string {
  if (!key) return "no configurada";
  if (key.length <= 6) return "••••";
  return `${key.slice(0, 3)}••••${key.slice(-4)}`;
}
