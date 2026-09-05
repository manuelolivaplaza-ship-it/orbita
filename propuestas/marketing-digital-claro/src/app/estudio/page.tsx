import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SunArc } from "@/components/sun-arc";
import { principles, team } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "FARO es un estudio de cinco personas en Lastarria, Santiago. Marketing digital con criterio, desde 2018.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro
        kicker="Estudio"
        title="Una mesa, un faro, Lastarria."
        lead="Fundamos FARO en 2018 porque estábamos cansados de agencias que venden magia y entregan un community. Somos cinco. Si tu cuenta entra, la toca alguien de esta página."
      />

      <section className="pb-16">
        <div className="shell grid gap-4 lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:col-span-8 lg:aspect-auto lg:min-h-[520px]">
            <Image
              src="/images/mesa.jpg"
              alt="Reunión de trabajo en el estudio, Lastarria"
              fill
              sizes="70vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative min-h-[280px] lg:col-span-4">
            <Image
              src="/images/lastarria.jpg"
              alt="Calle Lastarria a primera hora"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-luz-2 py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Por qué FARO</p>
            <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[0.95] tracking-tight">
              Un faro no compite con la tormenta. Hace visible la costa.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted">
              Trabajamos con empresas que ya tienen producto, clientes y una
              herida concreta: la marca no se entiende, la pauta quema plata, el
              sitio no convierte. No buscamos startups de garage ni cuentas de
              awareness infinito.
            </p>
          </Reveal>
          <div className="grid gap-8 lg:col-span-6 lg:col-start-7">
            {principles.map((item) => (
              <Reveal key={item.title}>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="kicker">La mesa</p>
            <h2 className="font-display mt-3 max-w-[14ch] text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[0.95] tracking-tight">
              Cinco oficios, una conversación.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => (
              <Reveal key={person.slug} delay={index * 0.05}>
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display mt-4 text-2xl font-medium tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-1 text-[13px] tracking-[0.12em] text-cobre uppercase">
                  {person.role}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {person.bio}
                </p>
                <p className="mt-3 text-[13px] text-ink/80">{person.focus}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="flex flex-col justify-between border border-line bg-sol p-8 sm:aspect-[3/4]">
              <div>
                <p className="kicker !text-ink">Únete</p>
                <h3 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight">
                  No estamos contratando. Estamos mirando.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed">
                  Si escribes bien, mides con honestidad y te carga el teatro de
                  agencia, manda un correo. No hay formulario.
                </p>
              </div>
              <a
                href={`mailto:${site.email}?subject=Mesa%20FARO`}
                className="mt-8 inline-flex text-[0.92rem] font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                {site.email}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SunArc />
            <p className="mt-8 text-[16px] leading-relaxed text-muted">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
              <br />
              {site.hours}
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex h-12 items-center bg-sol px-6 text-[0.92rem] font-semibold text-ink hover:bg-sol-deep"
            >
              Visitar o escribir
            </Link>
          </Reveal>
          <div className="relative aspect-[16/10] lg:col-span-6 lg:col-start-7">
            <Image
              src="/images/santiago.jpg"
              alt="Santiago y la cordillera a primera luz"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
