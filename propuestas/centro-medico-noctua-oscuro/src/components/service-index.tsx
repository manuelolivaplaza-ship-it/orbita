import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { specialties } from "@/data/content";
import { formatCLP } from "@/lib/format";

export function ServiceIndex() {
  return (
    <div className="border-t border-line">
      {specialties.map((service, index) => (
        <Reveal key={service.slug} delay={index * 40}>
          <Link
            href={`/especialidades/${service.slug}`}
            className="group grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-end md:gap-6 md:py-10"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber md:col-span-1">
              {service.n}
            </p>
            <div className="md:col-span-4">
              <h3 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {service.title}
              </h3>
              <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
                {service.room} · {service.duration}
              </p>
            </div>
            <p className="max-w-[42ch] text-sm leading-relaxed text-paper-dim md:col-span-5">
              {service.lead}
            </p>
            <p className="flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted md:col-span-2 md:justify-end">
              <span className="nums">desde {formatCLP(service.priceFrom)}</span>
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
