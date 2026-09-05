import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { families } from "@/data/catalog";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Familias",
  description:
    "Ocho bahías de bodega: frenos, motor, filtros, suspensión, eléctrico, óptica, refrigeración y transmisión. Precio con IVA.",
};

export default function FamiliasPage() {
  return (
    <div className="pt-[4.5rem]">
      <header className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <Reveal>
          <h1 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,6.2rem)] font-medium leading-[0.88] tracking-wide">
            La bodega se lee de norte a sur.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            Cada familia es una bahía. El precio se lee. El stock se nombra. El
            cruce, si corresponde, se escribe.
          </p>
        </Reveal>
      </header>

      <section className="border-t border-line">
        {families.map((family, index) => (
          <Link
            key={family.id}
            href={`/familias/${family.id}`}
            className="group grid border-b border-line md:grid-cols-12"
          >
            <Reveal
              delay={index * 40}
              className={`flex flex-col justify-between px-5 py-12 md:col-span-6 md:px-10 md:py-16 lg:px-16 ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mute">
                  {family.bay} · {family.kicker}
                </p>
                <h2 className="mt-5 font-display text-4xl font-medium tracking-wide md:text-5xl">
                  {family.name}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-mute md:text-base">
                  {family.lead}
                </p>
                <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sodium">
                  desde {formatCLP(family.fromIva)}
                </p>
              </div>
              <span className="mt-10 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]">
                Entrar a la bahía
                <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Reveal>
            <div
              className={`relative min-h-[22rem] overflow-hidden md:col-span-6 md:min-h-[32rem] ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={family.image}
                alt={family.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
