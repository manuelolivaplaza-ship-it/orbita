import { facts } from "@/lib/site";

export function DataStrip() {
  return (
    <section className="border-y border-bone/10 bg-night">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-r border-bone/10 px-6 py-8 last:border-b-0 even:border-r-0 md:even:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <p className="kicker">{fact.label}</p>
            <p className="mt-3 font-display text-2xl tracking-wide md:text-3xl">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
