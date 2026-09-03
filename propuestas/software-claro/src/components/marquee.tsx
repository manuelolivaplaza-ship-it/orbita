import { clients } from "@/lib/site";

export function ClientMarquee() {
  const loop = [...clients, ...clients];

  return (
    <section aria-label="Empresas con las que hemos trabajado" className="relative z-10 py-10">
      <div className="overflow-hidden border-y border-line">
        <div className="marquee-track py-5">
          {loop.map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="flex items-center px-7 text-[0.95rem] tracking-[0.18em] text-muted uppercase"
            >
              <span className="mr-7 inline-block h-1 w-1 rounded-full bg-copper/70" />
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
