import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, stats } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "ALBA es un estudio jurídico boutique en Recoleta. Ocho abogados, una sede, un método: pocos asuntos, pensados hasta el final.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro overline="El estudio" title="Un oficio, no una firma.">
        <p>
          Nacimos en {site.founded} en un piso de Recoleta. Seguimos ahí. El
          tamaño no cambió porque el método no lo permite: cada asunto tiene un
          socio que lo leyó entero.
        </p>
      </PageIntro>

      <section className="pb-20 lg:pb-28">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden bg-paper-2 lg:aspect-[21/9]">
              <Image
                src="/images/salon.jpg"
                alt="Salón de trabajo del estudio, mesa larga y ventanales a la calle"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="overline-label">Cómo trabajamos</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] tracking-tight">
                El cupo es el método.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-6 text-[17px] leading-[1.8] text-muted-foreground lg:col-span-6 lg:col-start-7">
              <p>
                Un estudio grande puede cubrir un asunto con un equipo de doce
                personas. Nosotros no. Y no queremos. La calidad de un
                dictamen, de un contrato o de una demanda se degrada en cuanto
                el socio deja de leer. Por eso el cupo.
              </p>
              <p>
                Tomamos lo que sabemos hacer. Corporativo, contencioso,
                laboral, familia, inmobiliario y compliance. Si el cliente
                necesita otra cosa, lo decimos en la primera reunión — y
                llamamos a quien sí la hace.
              </p>
              <p>
                Facturamos por el trabajo, no por el teatro. La primera
                conversación no se cobra. Las que siguen, sí: con un presupuesto
                escrito, un responsable y una fecha.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-line py-12 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="stat-number text-4xl lg:text-5xl">{item.value}</p>
                <p className="mt-2 text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-2 py-24 lg:py-32">
        <Container>
          <Reveal>
            <p className="overline-label">Principios</p>
            <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] tracking-tight">
              Tres reglas que no negociamos con el expediente.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <p className="font-display text-bronze text-2xl">{item.number}</p>
                <h3 className="font-display mt-5 text-3xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
                <Image
                  src="/images/library.jpg"
                  alt="Biblioteca del estudio, estanterías de roble claro y un sillón"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="overline-label">Sede</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] tracking-tight">
                Av. Alvear 1867, piso 3.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-muted-foreground">
                Un palacio de Recoleta, reconvertido. Recibimos con hora. El
                archivo está en papel y en disco; las reuniones, en una sola
                mesa. No hay recepción de hotel. Hay una puerta, una campanilla
                y alguien que ya leyó su asunto.
              </p>
              <p className="mt-4 text-[17px] leading-[1.8] text-muted-foreground">
                {site.hours}. Fuera de ese horario, el teléfono deriva a quien
                está de guardia si el asunto no admite espera.
              </p>
              <div className="mt-10">
                <ArrowLink href="/contacto">Cómo llegar</ArrowLink>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <div className="relative aspect-[16/7] overflow-hidden bg-paper-2">
              <Image
                src="/images/desk.jpg"
                alt="Mesa de trabajo: papeles, pluma y un peso de bronce"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
