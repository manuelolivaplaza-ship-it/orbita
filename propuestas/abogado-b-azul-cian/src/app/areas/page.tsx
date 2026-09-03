import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { practices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Afluentes",
  description:
    "Laboral, familia, consumidor, civil e inmobiliario, empresa. Cinco oficios. Un cauce. Estudio jurídico en Providencia.",
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        kicker="Afluentes"
        title="Cinco oficios. Un cauce."
        lead="No cubrimos todo el derecho. Cubrimos lo que sabemos llevar hasta el final. Si el asunto no es nuestro, se lo decimos — y a quién conviene llamar."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell space-y-3">
          {practices.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.04}>
              <Link
                href={`/areas/${item.slug}`}
                className="group grid overflow-hidden border border-line transition-colors hover:border-cyan lg:grid-cols-12"
              >
                <div className="relative aspect-[16/10] lg:col-span-5 lg:aspect-auto">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 lg:col-span-7 lg:px-12 lg:py-14">
                  <p className="nums text-[12px] font-semibold tracking-[0.18em] text-navy">
                    Prof. {item.depth}
                  </p>
                  <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-tight group-hover:text-cyan-deep">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
                    {item.lead}
                  </p>
                  <p className="mt-6 text-[13px] font-semibold">Entrar →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
