import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site, spaces, visitSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "La clínica",
  description:
    "Hospital veterinario en Isla Teja, Valdivia. Madera, vidrio, UCI y un patio de arrayanes. Cómo llegar, cómo se espera, cómo se opera.",
};

export default function ClinicaPage() {
  return (
    <>
      <PageIntro
        kicker="La clínica"
        title="Un hospital que mira el río."
        italic="Y no cierra."
        lead="Once años en Isla Teja. El edificio es de coihue, vidrio y hormigón. Adentro: pabellón, laboratorio, seis boxes, dos de UCI. Afuera: arrayanes, helechos y el Calle-Calle."
        image="/images/facade.jpg"
        alt="Fachada de Estuario sobre el Calle-Calle, al amanecer"
      />

      <section className="mt-16 sm:mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="kicker">Por qué aquí</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Valdivia no es un barrio de Santiago
                <span className="italic text-moss"> con más lluvia.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Derivar un TAC o una UCI a las 23:40 no es una opción cuando
                el puente está mojado y el animal no espera. Emilia armó
                Estuario para que el sur no tenga que pedir permiso. El
                equipo se formó, en su mayoría, en la Universidad Austral:
                conocen el clima, las leptospiras de invierno y el tutor que
                llega con barro en las botas.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                El edificio está a diez minutos de Parque Saval, con
                estacionamiento cubierto. Colectivos a Isla Teja. Si vienes
                de Osorno, La Unión o Niebla: hay hueco de urgencia, no una
                lista de espera de capital.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/reception.jpg"
                  alt="Recepción de Estuario con sofás teal y vidrios empañados de lluvia"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-24 sm:mt-32">
        <Container>
          <Reveal>
            <p className="kicker">El espacio</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Dos esperas. Un pabellón. Un patio.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {spaces.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-24 sm:mt-32">
        <Container>
          <Reveal>
            <p className="kicker">La visita</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Cómo se entra.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {visitSteps.map((step) => (
              <li key={step.n}>
                <p className="font-display text-2xl text-moss">{step.n}</p>
                <h3 className="mt-3 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="mt-24 mb-8 sm:mt-32">
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="kicker">Cómo llegar</p>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                {site.address}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {site.neighborhood}, {site.city}. Frente al río, a un costado
                del recinto universitario. Estacionamiento cubierto para ocho
                autos.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {site.phoneIntl}
                <br />
                {site.email}
              </p>
              <Button asChild className="mt-6 h-11 rounded-full px-6">
                <Link href="/contacto">Ver mapa y horario</Link>
              </Button>
            </div>
            <div className="relative min-h-[16rem] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/rio.jpg"
                alt="El río Calle-Calle al amanecer, con niebla"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
