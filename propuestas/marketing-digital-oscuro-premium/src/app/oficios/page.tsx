import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { oficios } from "@/lib/site";

export const metadata: Metadata = {
  title: "Oficios",
  description:
    "Marca, performance, contenido, producto, SEO y retención. Seis oficios, un solo sistema. Estudio de marketing digital en Santiago.",
};

export default function OficiosPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="02"
        kicker="Oficios"
        title="Seis cortes. Un solo sistema."
        lede="No los vendemos por separado si el caso pide el conjunto. Si pide uno, se lo decimos. El retainer cubre el criterio. La pauta, la paga usted."
      />
      <ol className="mt-4">
        {oficios.map((o, i) => (
          <li key={o.slug}>
            <Reveal delay={i * 0.04}>
              <Link
                href={`/oficios/${o.slug}`}
                className="group grid gap-4 border-b border-line py-10 sm:grid-cols-12 sm:items-baseline"
              >
                <span className="kicker tabular sm:col-span-2">{o.folio}</span>
                <span className="sm:col-span-4">
                  <span className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-tight transition-colors group-hover:text-ember">
                    {o.title}
                  </span>
                  <span className="mt-2 block text-paper-dim">{o.short}</span>
                </span>
                <span className="max-w-[42ch] text-paper-dim sm:col-span-6">
                  {o.lead}
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
