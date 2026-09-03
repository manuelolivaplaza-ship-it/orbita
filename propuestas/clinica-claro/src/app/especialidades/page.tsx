import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HousePlan } from "@/components/house-plan";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { doctors, specialties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Salas",
  description:
    "Ocho especialidades en una casa de Providencia: medicina interna, cardiología, endocrinología, gastro, neurología, ginecología, dermatología y salud mental.",
};

export default function EspecialidadesPage() {
  return (
    <>
      <PageIntro
        kicker="Las salas"
        title="Ocho puertas. Un pasillo corto a propósito."
        lead="Cada especialidad tiene una sala, un médico y un arancel a la vista. Si hay que derivar, se camina. No se reenvía a otro recinto con un papel."
      />

      <section className="pb-16">
        <div className="shell">
          <Reveal className="border border-line bg-papel p-4 sm:p-8">
            <HousePlan />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell space-y-20">
          {specialties.map((item, index) => {
            const doctor = doctors.find((doc) => doc.slug === item.doctorSlug);
            const reverse = index % 2 === 1;
            return (
              <Reveal key={item.slug}>
                <article className="grid items-center gap-10 lg:grid-cols-12">
                  <div
                    className={`relative aspect-[4/3] lg:col-span-6 ${
                      reverse ? "lg:col-start-7 lg:row-start-1" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`lg:col-span-5 ${
                      reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"
                    }`}
                  >
                    <p className="kicker">
                      Sala {item.room} · {item.duration} · {item.firstVisit}
                    </p>
                    <h2 className="font-display mt-3 text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[0.98] tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-[17px] leading-relaxed text-muted">{item.lead}</p>
                    {doctor ? (
                      <p className="mt-4 text-[15px] text-ink/80">
                        {doctor.name} · {doctor.role}
                      </p>
                    ) : null}
                    <Link
                      href={`/especialidades/${item.slug}`}
                      className="font-sans mt-6 inline-flex text-[0.88rem] font-semibold tracking-wide text-sol"
                    >
                      Ver la sala →
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
