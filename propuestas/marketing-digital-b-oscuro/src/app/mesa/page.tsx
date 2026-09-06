import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { mesa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mesa",
  description:
    "Cinco personas. Elisa, Martín, Trinidad, Héctor y Amanda. Las que caben en la mesa de SEÑAL.",
};

export default function MesaPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="05"
        kicker="Quién firma"
        title="Las que caben en la mesa."
        lede="Cinco. Quien toma la lectura sigue en la cuenta. No hay un socio de vitrina y un equipo que ejecuta en otra comuna."
      />

      <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
        {mesa.map((p) => (
          <li key={p.slug} className="bg-void">
            <Link href={`/mesa/${p.slug}`} className="group block">
              <div className="img-zoom relative aspect-[3/4]">
                <Image
                  src={p.image}
                  alt={`Retrato de ${p.name}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <p className="font-display text-[1.45rem] leading-none tracking-tight group-hover:text-carrier">
                  {p.name}
                </p>
                <p className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted">
                  {p.role} · {p.band}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="tx-frame img-zoom relative mt-16 aspect-[16/8]">
        <Image
          src="/images/mesa.jpg"
          alt="La mesa de trabajo de SEÑAL de noche, lámpara de tungsteno y LED lima"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
