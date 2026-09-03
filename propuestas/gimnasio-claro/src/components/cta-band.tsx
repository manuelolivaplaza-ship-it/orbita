import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export function CtaBand({
  title = "Ven a ver la luz con tus ojos.",
  text = "Una visita de 40 minutos: recorremos las salas, tomamos un café y armamos tu primera semana. Sin matrícula, sin presión.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-cream">
      <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-copper-soft">
            Lo Barnechea
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-cream/70">
            {text}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/visita" variant="cream">
            Reservar visita
          </ButtonLink>
          <ButtonLink
            href="https://wa.me/56942187703"
            variant="ghost"
            external
            className="border-cream/25 text-cream hover:border-cream hover:text-cream"
          >
            WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
