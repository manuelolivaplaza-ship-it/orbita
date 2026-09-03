import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, steps } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "El cauce",
  description:
    "CAUCE trabaja en Providencia, orilla del Mapocho. Una mesa frente al río, cinco abogados. El cauce es el método.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro
        kicker="El cauce"
        title="La orilla donde se sondea el asunto."
        lead="Av. Santa María 2120, Providencia. Un piso de vidrio y hormigón, a dos cuadras del Mapocho. No es una torre. Es el oficio."
      />

      <section className="pb-16 lg:pb-24">
        <div className="shell grid gap-3 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de hormigón y vidrio de CAUCE en Av. Santa María, Providencia"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="grid gap-3 lg:col-span-5">
            <Reveal delay={0.08} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[314px]">
              <Image
                src="/images/hero.jpg"
                alt="Sala de reuniones con el Mapocho y la cordillera al fondo"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.14} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[314px]">
              <Image
                src="/images/pasillo.jpg"
                alt="Pasillo de vidrio con una línea de luz cian en el piso"
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
            <p className="kicker">La orilla</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              Abrimos en 2016. El río no se fue. El método, tampoco.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-[17px] leading-[1.8] text-muted">
              <p>
                Catalina Herrera arrendó este piso cuando todavía olía a
                pintura. Lo primero que pidió fue una mesa frente a la
                ventana: el Mapocho a la vista, la cordillera al fondo. Ahí se
                reciben los sondajes.
              </p>
              <p>
                Tomás, Valentina, Ignacio y Antonia se fueron sumando. Cinco
                sillas. Si hay un sexto expediente que no cabe, no entra. El
                cupo no es marketing. Es cómo se lee un caso hasta el final.
              </p>
              <p>
                El nombre no es un adorno. Un asunto tiene un cauce — un
                procedimiento, un plazo, un foro — o no lo tiene. Si no lo
                tiene, se lo decimos en la primera hora. No empujamos el agua
                cuesta arriba.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-px bg-line lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              key={item.roman}
              delay={index * 0.08}
              className="bg-paper px-8 py-10 lg:px-10 lg:py-12"
            >
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-cyan-deep">
                {item.roman}
              </p>
              <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Cómo se entra</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,3.6vw,3rem)] font-semibold tracking-tight">
              Cuatro pasos. El mismo abogado.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <Reveal
                key={item.depth}
                delay={index * 0.06}
                className="bg-paper px-6 py-8"
              >
                <p className="font-display nums text-3xl font-semibold text-cyan-deep">
                  {item.depth}
                </p>
                <h3 className="font-display mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="kicker">Llegar</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight">
              {site.address.line}
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
              {site.address.city}. {site.metro}. {site.hours}. El sondaje se
              hace en la sala que mira al río, o por videollamada si está
              fuera de Santiago.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.address.maps}
                className="inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold hover:border-cyan-deep hover:text-cyan-deep"
              >
                Ver mapa
              </a>
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center bg-navy px-6 text-[0.9rem] font-semibold text-paper hover:bg-ink"
              >
                Pedir sondaje
              </Link>
            </div>
          </div>
          <Reveal className="relative aspect-[16/10] lg:col-span-6">
            <Image
              src="/images/rio.jpg"
              alt="El Mapocho desde la ventana de CAUCE"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
