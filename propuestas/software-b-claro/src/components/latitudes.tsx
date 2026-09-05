import { clients } from "@/lib/site";

export function Latitudes() {
  const row = [...clients, ...clients];

  return (
    <section
      aria-label="Operaciones a lo largo de Chile"
      className="overflow-hidden border-y border-line py-4"
    >
      <div className="lat-track">
        {row.map((client, index) => (
          <p
            key={`${client.name}-${index}`}
            className="flex items-center gap-4 px-6 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-muted"
          >
            <span className="text-norte">{client.lat}</span>
            <span className="text-ink">{client.name}</span>
            <span aria-hidden className="text-line">
              /
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}
