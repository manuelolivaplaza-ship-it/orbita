import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { comunasDomicilio } from "@/data/sucursales";

export const metadata: Metadata = {
  title: "Domicilio",
  description:
    "Toma a domicilio NOCTUA en doce comunas de Santiago. Ignacio llega entre las 06:30 y las 10:30.",
};

export default function DomicilioPage() {
  return (
    <>
      <PageIntro
        kicker="Domicilio"
        title="El ayuno se respeta en tu mesa."
        lead="Lun a sáb, 06:30 a 10:30. Un maletín de cuero, una vena, la primera luz. El vial viaja a Vitacura y entra al turno de la noche."
      />
      <section className="shell grid items-center gap-12 pb-20 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <div className="frame aspect-[3/2]">
            <Image
              src="/images/dawn.jpg"
              alt="Maletín de toma a domicilio sobre una mesa, al amanecer en Santiago"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={100}>
          <p className="text-lg leading-relaxed text-paper-dim">
            Ignacio no toca timbre a las 5:50. Coordina la noche anterior. Si
            hay un perro, un niño, un ayuno frágil, se dice. El precio del
            domicilio se suma al examen: $18.900 en el radio oriente, $24.900
            en el centro.
          </p>
          <Link href="/hora" className="btn btn-amber mt-8">
            Agendar domicilio
            <Arrow />
          </Link>
        </Reveal>
      </section>
      <section className="shell pb-28 md:pb-36">
        <Reveal>
          <p className="kicker">Comunas</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
            Dónde llegamos.
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {comunasDomicilio.map((comuna, index) => (
            <Reveal
              as="li"
              key={comuna}
              delay={index * 30}
              className="bg-void px-5 py-6 font-display text-xl"
            >
              {comuna}
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
