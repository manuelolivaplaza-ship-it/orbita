"use server";

import { randomBytes } from "crypto";
import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth";
import { saveSettings } from "@/lib/settings";

export async function saveSettingsAction(formData: FormData) {
  await requireSession();
  const cap = Number(formData.get("daily_new_cap") ?? 50);
  const owner = String(formData.get("owner_default") ?? "Manuel").trim();
  await saveSettings({
    daily_new_cap: Number.isFinite(cap) ? Math.max(1, Math.min(500, cap)) : 50,
    owner_default: owner || "Manuel",
  });
  revalidatePath("/settings");
  revalidatePath("/hoy");
}

export async function rotateBotKeyAction() {
  await requireSession();
  const key = `sk_live_${randomBytes(24).toString("hex")}`;
  await saveSettings({ bot_key_override: key });
  revalidatePath("/settings");
  return key;
}
