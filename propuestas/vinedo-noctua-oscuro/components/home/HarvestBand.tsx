import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Frio",
    text: "La uva entra a 8 °C. Sin calor de día, sin prisa de azúcar.",
  },
  {
    n: "02",
    title: "Mano",
    text: "Vendimia a cajón de doce kilos. Una parcela, una noche.",
  },
  {
    n: "03",
    title: "Sombra",
    text: "Fermenta con levadura nativa, en concreto o foudre. Nada que disimule el granito.",
  },
];

export function HarvestBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh]">
        <Image
          src="/images/harvest.jpg"
          alt="Vendimia nocturna en las laderas del Elqui"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <div className="relative z-10 flex min-h-[70vh] items-end px-6 py-16 md:px-12 lg:px-16">
          <Reveal className="max-w-xl">
            <p className="kicker">Método</p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
              Cosecha de medianoche
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-parchment">
              Linterna cálida, cajas de doce kilos, silencio. Trabajamos cuando
              el valle duerme para que la uva no se rompa ni se caliente. Es
              más lento. Es más preciso.
            </p>
            <Link href="/metodo" className="btn-ghost mt-8">
              El protocolo
            </Link>
          </Reveal>
        </div>
      </div>
      <div className="grid border-t border-bone/10 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.n}
            className="border-b border-bone/10 px-6 py-10 md:border-b-0 md:border-r md:last:border-r-0 md:px-10"
          >
            <p className="font-mono text-[10px] tracking-kicker text-brass">
              {step.n}
            </p>
            <h3 className="mt-3 font-display text-3xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-parchment">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
