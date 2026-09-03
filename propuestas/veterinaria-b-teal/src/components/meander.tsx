import { cn } from "@/lib/utils";

export function Meander({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 24"
      className={cn("text-moss/70", className)}
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M0 12 C80 12 100 4 180 4 C260 4 280 20 360 20 C440 20 460 6 540 6 C620 6 640 18 720 18 C800 18 820 5 900 5 C980 5 1000 16 1080 16 C1140 16 1160 12 1200 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
