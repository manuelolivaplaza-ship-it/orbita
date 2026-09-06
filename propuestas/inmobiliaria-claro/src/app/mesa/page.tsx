import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mesa",
  description:
    "Amalia Riesco, Joaquín Matte, Laura Silva y Diego Urrejola. La mesa de HELIO en Providencia.",
};

export default function MesaPage() {
  return (
    <>
      <PageIntro
        kicker="La casa"
        title="Cuatro personas. Una brújula."
        lead={`${site.address.line}, ${site.address.city}. Local de primer piso, ventana al norte. ${site.hours}.`}
      />

      <section className="pb-10">
        <div className="shell">
          <div className="relative aspect-[16/8] min-h-[260px] overflow-hidden bg-luz-2">
            <Image
              src="/images/oficina.jpg"
              alt="La mesa de HELIO, con planos y sol de mañana"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 sm:grid-cols-2">
          {team.map((person) => (
            <Reveal key={person.slug}>
              <Link href={`/mesa/${person.slug}`} className="group grid gap-6 sm:grid-cols-5">
                <div className="img-zoom relative aspect-[3/4] bg-luz-2 sm:col-span-2">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="30vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-end sm:col-span-3 sm:pb-2">
                  <p className="kicker">{person.role}</p>
                  <h2 className="font-display mt-2 text-3xl font-medium tracking-tight group-hover:text-sol">
                    {person.name}
                  </h2>
                  <p className="mt-2 text-[15px] text-muted">{person.beat}</p>
                  <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-muted">
                    {person.bio[0]}
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
