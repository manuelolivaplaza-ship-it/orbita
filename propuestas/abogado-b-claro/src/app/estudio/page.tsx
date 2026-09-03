import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, steps } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "El patio",
  description:
    "ATRIO trabaja en una casa de Barrio Italia, Ñuñoa. Un lucernario, una mesa, cinco abogados. El patio es el método.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro
        kicker="El patio"
        title="La casa donde se trabaja a plena luz."
        lead="Av. Italia 142, Ñuñoa. Una casa de dos pisos, un patio con limonero y un lucernario que corta el centro. No es un piso en una torre. Es el oficio."
      />

      <section className="pb-16 lg:pb-24">
        <div className="shell grid gap-3 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada verde de la casa en Av. Italia 142, Barrio Italia"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="grid gap-3 lg:col-span-5">
            <Reveal delay={0.08} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[314px]">
              <Image
                src="/images/patio.jpg"
                alt="Patio interior con limonero y baldosas de greda"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.14} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[314px]">
              <Image
                src="/images/pasillo.jpg"
                alt="Pasillo de listones de madera y helecho, luz de mañana"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">La casa</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-tight">
              Abrimos en 2015. El olor a pintura se fue. El lucernario, no.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-[17px] leading-[1.8] text-muted">
              <p>
                Amanda Reyes compró esta casa cuando todavía era un local de
                tapicería. El patio estaba tapiado. Lo primero que hizo fue
                abrir el lucernario: una rendija de cielo sobre baldosas de
                greda. Ahí se reciben las primeras horas.
              </p>
              <p>
                Mateo, Isidora, Francisca y Benjamín se fueron sumando. Cinco
                sillas alrededor de una mesa de roble. Si hay un sexto
                expediente que no cabe, no entra. El cupo no es marketing. Es
                cómo se lee un caso hasta el final.
              </p>
              <p>
                Estamos a siete minutos a pie del metro Irarrázaval. Hay
                estacionamiento en la cuadra, si hay suerte. De octubre a abril,
                si no llueve, las reuniones de la mañana se hacen en el patio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-luz-2 py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Método</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-tight">
              Tres reglas de la casa.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line lg:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal
                key={item.room}
                delay={index * 0.08}
                className="bg-luz-2 px-8 py-10 lg:bg-luz lg:px-10 lg:py-12"
              >
                <p className="font-display text-barro text-sm font-semibold tracking-[0.18em]">
                  {item.room}
                </p>
                <h3 className="font-display mt-5 text-3xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Cómo se entra</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
              Cuatro pasos. Ninguno es un embudo.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              Si el asunto no es nuestro —penal de urgencia, tributario de
              holding, un juicio en regiones que no cubrimos— se lo decimos en
              el primer correo.
            </p>
          </Reveal>
          <ol className="lg:col-span-8">
            {steps.map((item, index) => (
              <Reveal
                key={item.room}
                delay={index * 0.05}
                className="grid gap-3 border-t border-line py-7 sm:grid-cols-12"
              >
                <p className="font-display nums text-barro sm:col-span-2 text-2xl font-bold">
                  {item.room}
                </p>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/5] lg:col-span-5 lg:aspect-[3/4]">
            <Image
              src="/images/lucernario.jpg"
              alt="El lucernario visto desde abajo, listones de madera y cielo"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="kicker">Visita</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
              {site.address.line}
              <br />
              {site.address.city}
            </h2>
            <ul className="mt-6 space-y-2 text-[16px] text-muted">
              <li>{site.metro}</li>
              <li>{site.hours}</li>
              <li>{site.patioHours}</li>
              <li>RUT {site.rut}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.address.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold hover:border-barro hover:text-barro"
              >
                Cómo llegar
              </a>
              <Link
                href="/contacto"
                className="font-display inline-flex h-12 items-center bg-barro px-6 text-[0.9rem] font-semibold text-luz hover:bg-barro-deep"
              >
                Pedir una hora
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
