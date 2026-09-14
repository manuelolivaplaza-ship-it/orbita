import { AppShell } from "@/components/app-shell";
import { getHoyQueue } from "@/lib/db";
import { isConfigured } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let overdue = 0;
  let inbound = 0;
  if (isConfigured()) {
    try {
      const q = await getHoyQueue();
      overdue = q.followups.length;
      inbound = q.inbound.length;
    } catch {
      overdue = 0;
      inbound = 0;
    }
  }
  return (
    <AppShell overdue={overdue} inbound={inbound}>
      {children}
    </AppShell>
  );
}
