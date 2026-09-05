import { Mark } from "@/components/logo";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <Mark className="h-10 w-10 animate-pulse" />
      <p className="kicker">Orientando…</p>
    </div>
  );
}
