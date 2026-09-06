import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { barrios, properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Barrios",
  description:
    "Pedro de Valdivia Norte, Inés de Suárez, Barrio Italia, Ñuñoa y El Golf. El radio de HELIO.",
};

export default function BarriosPage() {
  return (
    <>
      <PageIntro
        kicker="Radio"
        title="Cinco barrios donde el norte todavía se puede comprar."
        lead="No cubrimos Santiago. Cubrimos las cuadras donde una planta clara todavía es un dato, no una excepción."
      />
      <section className="pb-24">
        <div className="shell space-y-16">
          {barrios.map((item) => {
            const count = properties.filter((p) => p.barrioSlug === item.slug).length;
            return (
              <Reveal key={item.slug}>
                <Link
                  href={`/barrios/${item.slug}`}
                  className="group grid gap-8 border-t border-line pt-10 lg:grid-cols-12"
                >
                  <div className="img-zoom relative aspect-[16/10] bg-luz-2 lg:col-span-6">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-end lg:col-span-6 lg:pb-2">
                    <p className="kicker">
                      {item.n} · {item.comuna}
                    </p>
                    <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight group-hover:text-sol">
                      {item.name}
                    </h2>
                    <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-muted">
                      {item.lead}
                    </p>
                    <p className="font-mono mt-6 text-[12px] tracking-[0.14em] text-norte uppercase">
                      {count} {count === 1 ? "planta" : "plantas"} en lista
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
