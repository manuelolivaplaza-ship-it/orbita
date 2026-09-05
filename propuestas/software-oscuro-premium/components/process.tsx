import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <SectionHead
          kicker="Método"
          title="Escuchar. Tallar. Templar. Entregar."
          aside="Un encargo no es un sprint eterno. Tiene filo, tiene borde, tiene entrega."
        />
        <ol className="mt-16 grid gap-px bg-line md:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07} className="bg-void p-8 md:p-10">
              <p className="font-mono text-[11px] tracking-[0.22em] text-gold">
                {step.index}
              </p>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
                {step.time}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-stone">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
