import type { Metadata } from "next";
import Image from "next/image";
import { ClubForm } from "@/components/ClubForm";
import { PageIntro } from "@/components/PageIntro";
import { clubTiers } from "@/lib/experiences";
import { clp } from "@/lib/format";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Círculo",
  description:
    "Club de asignación trimestral de Noctua. Botellas de guarda y visitas de medianoche.",
};

export default function CirculoPage() {
  return (
    <>
      <PageIntro
        kicker="Círculo"
        title="Un cupo. Cuatro lunas al año."
        lede="No es una suscripción de e-commerce. Es una asignación: lo que el viñedo puede dar, no lo que un algoritmo pide."
      />

      <section className="px-6 md:px-12 lg:px-16">
        <div className="relative aspect-[16/8] overflow-hidden">
          <Image
            src="/images/glass.jpg"
            alt="Copa de tinto bajo la luna, en el viñedo"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="grid gap-6 px-6 py-20 md:grid-cols-3 md:px-12 lg:px-16">
        {clubTiers.map((tier) => (
          <article
            key={tier.id}
            className={cn(
              "flex flex-col border border-bone/10 p-8",
              "featured" in tier && tier.featured && "border-brass/40 bg-night",
            )}
          >
            <p className="kicker">{tier.cadence}</p>
            <h2 className="mt-3 font-display text-4xl">{tier.name}</h2>
            <p className="mt-2 text-sm text-parchment">
              {tier.bottles} botellas
            </p>
            <p className="mt-6 font-display text-3xl text-brass">
              {clp(tier.price)}
            </p>
            <ul className="mt-8 flex-1 space-y-3 text-sm text-parchment">
              {tier.perks.map((perk) => (
                <li key={perk} className="border-t border-bone/10 pt-3">
                  {perk}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="px-6 py-16 md:px-12 lg:px-16">
          <p className="kicker">Condiciones</p>
          <h2 className="mt-4 font-display text-4xl font-light">
            Se puede salir. No se puede acumular.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.85] text-parchment">
            El Círculo se paga trimestre a trimestre. Si un año la cosecha es
            corta, enviamos menos botellas y devolvemos la diferencia. Si no
            estás, avisa antes de la luna nueva: el cupo pasa a la lista de
            espera.
          </p>
          <p className="mt-5 text-[15px] leading-[1.85] text-parchment">
            Despacho incluido a todo Chile. Retiro en viñedo, si prefieres
            venir de noche.
          </p>
        </div>
        <div className="px-6 py-16 md:px-12 lg:px-16">
          <ClubForm />
        </div>
      </section>
    </>
  );
}
