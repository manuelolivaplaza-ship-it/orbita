import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Cinco médicos veterinarios en Farol, Ñuñoa. Cirugía, interna, felinos, imágenes y anestesia. Guardia presencial.",
};

export default function EquipoPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="05"
        kicker="Equipo"
        title="Cinco médicos que se pasan la ficha."
        lede="No una ruleta de turnos. Cirugía, interna, felinos, imágenes y anestesia. Los de noche se hablan con los de día."
      />

      <ul className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((v) => (
          <li key={v.slug}>
            <Link href={`/equipo/${v.slug}`} className="group block">
              <div className="img-zoom relative aspect-[3/4]">
                <Image
                  src={v.image}
                  alt={`Retrato de ${v.name}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 kicker">{v.role}</p>
              <h2 className="mt-2 font-display text-3xl leading-tight group-hover:text-lantern">
                {v.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{v.focus.join(" · ")}</p>
              {v.night ? (
                <p className="mt-2 font-mono text-[0.68rem] tracking-[0.16em] text-lantern uppercase">
                  Guardia
                </p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
