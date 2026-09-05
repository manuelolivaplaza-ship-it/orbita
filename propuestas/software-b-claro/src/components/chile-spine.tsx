import { site } from "@/lib/site";

/** Silueta de Chile como eje vertical. No es un mapa de navegación. */
export function ChileMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 220"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M16.2 4.2c2.4 1.8 4.2 5.2 3.6 9.2 1.6 4.4-0.4 8.6 1.1 13.2 1.4 4.6-0.8 8.8 0.6 13.6 1.2 4.2-1.6 8.4-0.2 12.8 1.4 4.6-1 9.2 0.4 13.8 1.1 4-1.8 8.2-0.6 12.4 1.4 5-1.2 9.8 0.2 14.8 1 4.2-2 8.4-0.8 12.6 1.6 5.2-1.4 10.2 0 15.4 1.1 4.4-2.2 8.8-1 13.4 1.4 5.2-1.8 10-0.6 15.2 1 4-2.4 8.2-1.4 12.4 1.2 5.6-2.2 10.8-1.2 16.4 0.8 4.2-2.6 8-2 12.4 0.8 4.8-2.4 9.2-1.8 14 0.6 3.6-2.8 7-3.4 10.8l1.6 2.2 4.2-4.4c0.8-3.4 2.2-6.6 1.4-10.2 1.8-5.2 0.2-10.4 1.6-15.6 1.2-4.6-0.6-9.2 0.8-13.8 1.4-5.2-0.8-10.4 0.6-15.6 1-4.2-1.6-8.4-0.2-12.6 1.6-5.4-0.6-10.6 0.8-16 1.1-4.6-1.4-9.2 0-13.8 1.2-4.4-1.8-8.6-0.4-13 1.6-5.2-0.8-10.4 0.6-15.6 1-4-1.6-8.2-0.2-12.2 1.5-4.8-0.8-9.6 0.6-14.4 1.1-4.2-1.4-8.4 0-12.6 1.4-4.6-0.6-9.2 0.8-13.8 0.9-3.8-1.2-7.6 0.2-11.4 1-3.4-0.6-6.8 0.4-10.2C20.4 7.2 18.2 4.8 16.2 4.2Z" />
      <ellipse cx="10.5" cy="142" rx="3.1" ry="5.4" />
    </svg>
  );
}

export function Spine() {
  return (
    <aside className="spine" aria-hidden>
      <ChileMark className="spine-chile" />
      <div className="spine-line" />
      <p className="spine-legend hidden md:block">
        {site.coords.short} · N
      </p>
    </aside>
  );
}
