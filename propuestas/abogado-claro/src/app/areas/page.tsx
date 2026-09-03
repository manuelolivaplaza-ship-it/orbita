import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { practices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Áreas de práctica",
  description:
    "Corporativo y M&A, contencioso y arbitraje, laboral, familia y sucesiones, inmobiliario y urbanismo, compliance y penal económico.",
};

export default function AreasPage() {
  return (
    <>
      <PageIntro overline="Áreas" title="Seis oficios. Ningún menú.">
        <p>
          No cubrimos el derecho entero. Cubrimos lo que sabemos hacer con la
          atención que el asunto pide. El resto, se lo decimos.
        </p>
      </PageIntro>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {practices.map((item, index) => (
              <Reveal key={item.slug} delay={(index % 2) * 0.08}>
                <Link href={`/areas/${item.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[16/10] bg-paper-2">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="font-display text-bronze mt-6 text-lg">
                    {item.number}
                  </p>
                  <h2 className="font-display mt-2 text-3xl tracking-tight md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {item.lead}
                  </p>
                  <p className="mt-5 text-[12px] tracking-[0.2em] uppercase transition-colors group-hover:text-bronze">
                    Ver práctica →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
