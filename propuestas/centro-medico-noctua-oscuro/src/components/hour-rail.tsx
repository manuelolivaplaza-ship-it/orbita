import { cn } from "@/lib/cn";

const marks = [
  { slot: "16:00", label: "Apertura" },
  { slot: "18:30", label: "Crepúsculo" },
  { slot: "21:00", label: "Noche" },
  { slot: "22:00", label: "Último cupo" },
] as const;

export function HourRail() {
  return (
    <ol className="relative border-l border-line pl-8">
      {marks.map((mark, index) => {
        const last = mark.slot === "22:00";
        return (
          <li
            key={mark.slot}
            className={cn("relative", index !== marks.length - 1 && "pb-8")}
          >
            <span
              className={cn(
                "absolute -left-[calc(2rem+3.5px)] mt-[1.35rem] h-[7px] w-[7px] rounded-full",
                last ? "bg-amber" : "bg-paper/55",
              )}
            />
            <p
              className={cn(
                "font-display text-4xl font-semibold tracking-tight nums md:text-5xl",
                last ? "text-amber" : "text-paper",
              )}
            >
              {mark.slot}
            </p>
            <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
              {mark.label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
