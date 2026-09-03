import { cn } from "@/lib/utils";

export function TitleBlock({
  plate,
  place,
  scale = "1:1",
  extra,
  className,
}: {
  plate: string;
  place: string;
  scale?: string;
  extra?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono grid grid-cols-2 gap-x-6 gap-y-1 border border-line bg-papel-2/60 px-4 py-3 text-[10px] tracking-[0.16em] text-muted uppercase sm:grid-cols-4",
        className
      )}
    >
      <span>Lámina {plate}</span>
      <span>{place}</span>
      <span>Escala {scale}</span>
      <span>{extra ?? "Orientación N"}</span>
    </div>
  );
}
