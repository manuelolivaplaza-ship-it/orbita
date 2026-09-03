import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { practices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Salas",
  description:
    "Laboral, familia, civil, inmobiliario y empresa. Cinco oficios en una casa de Barrio Italia, Ñuñoa.",
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        kicker="Salas"
        title="Cinco oficios. El plano de la casa."
        lead="No cubrimos todo el derecho. Cubrimos lo que sabemos llevar hasta el final. Si su asunto está en otra sala, se lo decimos."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell">
          <ul className="divide-y divide-line border-y border-line">
            {practices.map((item, index) => (
              <li key={item.slug}>
                <Reveal delay={index * 0.04}>
                  <Link
                    href={`/areas/${item.slug}`}
                    className="group grid items-center gap-6 py-8 lg:grid-cols-12 lg:py-10"
                  >
                    <span className="font-display text-sage lg:col-span-1 text-sm font-semibold tracking-[0.16em]">
                      {item.room}
                    </span>
                    <span className="relative hidden aspect-[4/3] overflow-hidden lg:col-span-3 lg:block">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </span>
                    <span className="lg:col-span-4">
                      <span className="font-display block text-3xl font-bold tracking-tight lg:text-4xl">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-[15px] text-muted">
                        {item.short}
                      </span>
                    </span>
                    <span className="hidden text-[15px] leading-relaxed text-muted lg:col-span-3 lg:block">
                      {item.lead}
                    </span>
                    <span className="hidden justify-end text-barro transition-transform duration-500 group-hover:translate-x-1 lg:col-span-1 lg:flex">
                      →
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
