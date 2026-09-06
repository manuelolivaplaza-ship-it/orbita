import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/frame";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { channels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Canales",
  description:
    "Lectura, pauta, pieza, sitio y medición. Cinco estaciones. Cero markup de media.",
};

export default function CanalesPage() {
  return (
    <>
      <PageIntro
        mark="Canales"
        title="Cinco estaciones, no un menú."
        lead="No vendemos packs. Se lee la cuenta, se elige el canal que sostiene, se apaga el resto. Honorario en UF, por escrito."
      />

      <section className="pb-12">
        <div className="shell">
          <Frame
            src="/images/oleaje.jpg"
            alt="Oleaje del Pacífico visto desde un acantilado chileno, líneas de espuma"
            caption="Se lee el mar. Después se rema."
            ratio="aspect-[16/9]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell">
          <ul>
            {channels.map((item, i) => (
              <li key={item.slug}>
                <Reveal delay={0.04 * i}>
                  <Link
                    href={`/canales/${item.slug}`}
                    className="group grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:items-baseline"
                  >
                    <span className="font-mono nums text-[13px] text-cyan-deep lg:col-span-1">
                      {item.station}
                    </span>
                    <span className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-none tracking-tight group-hover:text-blue lg:col-span-3">
                      {item.title}
                    </span>
                    <span className="max-w-[42ch] text-[16px] leading-relaxed text-muted lg:col-span-5">
                      {item.lead}
                    </span>
                    <span className="font-mono nums text-[15px] lg:col-span-3 lg:text-right">
                      {item.price}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
