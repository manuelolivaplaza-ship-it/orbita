import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { practices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oficios",
  description:
    "Contabilidad mensual, impuestos, remuneraciones, independientes, sociedades y planificación tributaria. Seis oficios. Una mesa en Providencia.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageIntro
        kicker="Oficios"
        title="Seis libretas. El resto no entra."
        lead="No somos un holding de veinte áreas. Llevamos lo que sabemos mirar cada mes: la pyme, el independiente, la sociedad y la gente a cargo."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-10">
          {practices.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.04}>
              <Link
                href={`/servicios/${item.slug}`}
                className="group grid items-stretch gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[280px]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center lg:col-span-7">
                  <p className="text-[12px] font-semibold tracking-[0.18em] text-cobre">
                    {item.room}
                  </p>
                  <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight group-hover:text-cobre">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
                    {item.lead}
                  </p>
                  <p className="mt-6 text-[0.9rem] font-semibold tracking-wide">
                    Entrar →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
