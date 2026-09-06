import type { Metadata } from "next";
import Image from "next/image";
import { site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "Traza es un estudio de siete personas en Ñuñoa. Software de operación, con traza, desde 2019.",
};

export default function EstudioPage() {
  return (
    <>
      <section className="shell pb-10 pt-12 md:pb-14 md:pt-20">
        <h1 className="display max-w-[14ch] text-[clamp(2.8rem,7vw,5.6rem)]">
          Siete personas. Una mesa en Ñuñoa.
        </h1>
        <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.7] text-muted">
          Fundado en {site.founded}. No somos una fábrica de features ni una
          consultora que rota el equipo a los tres meses. El oficio es uno:
          dejar la operación trazada.
        </p>
      </section>

      <section className="shell grid gap-8 pb-16 md:grid-cols-12">
        <figure className="md:col-span-7">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/ventana.jpg"
              alt="Ventana del estudio hacia los techos de Ñuñoa: tendedero, un árbol y luz de mañana."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 55vw, 100vw"
              priority
            />
          </div>
          <figcaption className="caption mt-3">
            Vista sur · {site.coords.label}
          </figcaption>
        </figure>
        <div className="flex flex-col justify-end md:col-span-5">
          <p className="text-[1.08rem] leading-[1.75] text-muted">
            La oficina mira tendederos y un árbol. El trabajo de verdad está en
            el gate, en la mesa de reembolso, en el pit. Las primeras dos
            semanas de un encargo son en terreno. Después, esta mesa.
          </p>
          <address className="mt-10 not-italic">
            <p className="caption">Orilla</p>
            <p className="mt-2">
              {site.address.street}
              <br />
              {site.address.commune}, {site.address.city}
            </p>
            <p className="mt-4 text-sm text-muted">{site.hours}</p>
          </address>
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Quiénes somos</h2>
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          Sin retratos de stock. Los nombres, el rol, y lo que cada uno no
          negocia.
        </p>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {team.map((person) => (
            <li
              key={person.name}
              className="grid gap-3 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <p className="font-display text-2xl tracking-[-0.03em]">
                  {person.name}
                </p>
                <p className="caption mt-1">{person.role}</p>
              </div>
              <p className="text-[1.02rem] leading-relaxed text-muted md:col-span-7">
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
