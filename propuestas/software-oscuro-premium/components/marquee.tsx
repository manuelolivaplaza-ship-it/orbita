import { marquee } from "@/lib/data";

export function Marquee() {
  const items = [...marquee, ...marquee];

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line py-5"
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-display text-sm font-semibold tracking-[0.22em] text-stone uppercase md:text-base"
          >
            <span>{item}</span>
            <span className="inline-block h-[5px] w-[5px] rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}
