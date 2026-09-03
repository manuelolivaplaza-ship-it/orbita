import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "La clínica",
  description:
    "Obsidiana en Vitacura: un box de especialista, luz contenida, tres doctores que no rotan tu caso.",
};

const principles = [
  {
    t: "Un autor por caso",
    d: "Quien te evalúa es quien te trata. No hay un doctor de Instagram y otro de box.",
  },
  {
    t: "Cifra antes de partir",
    d: "Plan por escrito, etapas y valor. Si algo cambia, se firma de nuevo. Nunca un extra en caja.",
  },
  {
    t: "Menos teatro, más oficio",
    d: "No blanqueamos un problema. No coronamos un diente que se puede salvar. El no también es clínico.",
  },
];

export default function ClinicaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Vitacura · Alonso de Córdova"
        title="Un box de especialista, no una cadena con luz fría."
        lead="Doce años en el mismo edificio. Tres especialistas. Luz contenida, orden quirúrgico, calma de galería. El ruido se queda en la calle."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-3 md:grid-cols-12">
            <div className="relative aspect-[4/3] md:col-span-7 md:aspect-[16/10]">
              <Image
                src="/images/recepcion.jpg"
                alt="Recepción nocturna de Obsidiana: mostrador de nogal con filete de luz cálida"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 58vw, 100vw"
                priority
              />
            </div>
            <div className="relative aspect-[3/4] md:col-span-5 md:aspect-auto">
              <Image
                src="/images/espera.jpg"
                alt="Rincón de espera con sillón de cuero y la ciudad de Santiago al fondo"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line py-20 sm:py-28">
        <Container>
          <p className="kicker">Cómo trabajamos</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
            Tres reglas. El resto es oficio.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <article key={p.t}>
                <p className="font-display text-sm text-champagne tabular">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.d}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/sillon.jpg"
                alt="Box operatorio con sillón oscuro y lámpara encendida"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <p className="kicker">El espacio</p>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                Un box. Luz puntual. Cero prisa.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                El box no se comparte. La lámpara se enciende cuando hace falta,
                no para la foto. El instrumental está alineado porque así se
                trabaja, no porque quede bien en Instagram.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {site.fullAddress}. Estacionamiento en el edificio. Metro
                Escuela Militar a doce minutos a pie, o taxi/Uber a la puerta.
              </p>
              <Button
                asChild
                className="mt-8 h-12 rounded-none px-6 text-[0.72rem] tracking-[0.16em] uppercase"
              >
                <Link href="/agenda">Agendar evaluación</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
