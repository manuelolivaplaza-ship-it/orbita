import { notFound } from "next/navigation";
import { LeadFicha } from "@/components/lead-ficha";
import { SetupHint } from "@/components/setup-hint";
import { getEvents, getLead } from "@/lib/db";
import { isConfigured } from "@/lib/supabase";

export default async function LeadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!isConfigured()) {
    return <SetupHint error="Faltan keys de Supabase" />;
  }
  const { id } = await params;
  try {
    const lead = await getLead(id);
    if (!lead) notFound();
    const events = await getEvents(id);
    return <LeadFicha lead={lead} events={events} />;
  } catch (e) {
    return <SetupHint error={e instanceof Error ? e.message : "Error"} />;
  }
}
