import type { Metadata } from "next";
import Link from "next/link";
import { Crop } from "@/components/crop";
import { NorthMeter } from "@/components/north-meter";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { hours } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Casa",
  description:
    "NORTE trabaja en una casa de Providencia, con ventanas al norte. Cinco personas. Luz pareja de 10:00 a 15:00.",
};

export default function CasaPage() {
  return (
    <>
      <PageIntro
        kicker="Casa"
        title="Una casa con ventanas al norte."
        lead="Santa Beatriz 184, Providencia. Segundo piso. Cinco personas. La luz entra pareja de diez a tres: es la hora en que se mira el trabajo de verdad."
      />

      <section className="pb-16">
        <div className="shell">
          <Crop
            src="/images/ventana.jpg"
            alt="Muro de ventanas al norte en el estudio: yeso blanco, acero y árboles de Providencia"
            className="aspect-[16/9]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[17px] leading-[1.8] text-muted">
              No somos un piso de open space con una planta de plástico. Somos
              una casa. La mesa es larga porque el trabajo se discute en voz
              alta, con papeles, no con un mural de Slack. Si vienes a una
              lectura, te sentamos frente a la ventana. Se ve lo que hay.
            </p>
            <p className="mt-6 text-[17px] leading-[1.8] text-muted">
              Providencia, a seis minutos de Manuel Montt. El patio tiene un
              olivo y poco más. El overcast de Santiago, que otras agencias
              retocan, acá es el material.
            </p>
            <div className="mt-10">
              <NorthMeter />
            </div>
            <p className="mt-8 text-[15px] leading-relaxed">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
              <br />
              {site.hours}
            </p>
            <p className="mt-6">
              <a
                href={site.address.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.78rem] font-semibold tracking-[0.14em] text-norte uppercase link-line"
              >
                Cómo llegar
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <Crop
              src="/images/casa.jpg"
              alt="Mesa larga de fresno bajo las ventanas del estudio, con papeles y un vaso de agua"
              className="aspect-[4/3]"
              sizes="40vw"
            />
            <Crop
              src="/images/patio.jpg"
              alt="Patio blanco de la casa, un olivo y una ventana abierta al estudio"
              className="mt-6 aspect-[16/10]"
              sizes="40vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-linea bg-nieve-2 py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="kicker">Cómo se trabaja</p>
            <h2 className="font-display mt-3 max-w-[14ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.95] tracking-tight">
              El día, partido en horas de luz.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 lg:grid-cols-2">
            {hours.map((item) => (
              <li key={item.n} className="border-t border-linea pt-6">
                <p className="font-display nums text-[1.6rem] text-norte">{item.n}</p>
                <h3 className="font-display mt-3 text-[1.8rem] leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/contacto"
            className="mt-14 inline-flex h-12 items-center bg-norte px-6 text-[0.82rem] font-semibold tracking-[0.12em] text-nieve uppercase hover:bg-norte-deep"
          >
            Pedir una lectura
          </Link>
        </div>
      </section>
    </>
  );
}
