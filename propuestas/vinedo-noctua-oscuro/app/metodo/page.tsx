import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Método",
  description:
    "Protocolo de cosecha nocturna de Noctua: uva fría, levadura nativa, foudre y concreto.",
};

const protocol = [
  {
    n: "01",
    title: "La hora",
    text: "No hay vendimia diurna. El corte empieza después de medianoche y termina antes del alba. La uva entra a la bodega entre 7 y 9 °C. Cada caja pesa doce kilos, no más.",
  },
  {
    n: "02",
    title: "La parcela",
    text: "Una noche, una parcela. No mezclamos laderas en el mismo cajón. El registro anota hora de inicio, hora de término, temperatura de pulpa y fase lunar. No es mística: es trazabilidad.",
  },
  {
    n: "03",
    title: "La fermentación",
    text: "Levadura nativa. Tintos con una fracción de racimo entero. Huevos de concreto para los blancos; foudres de 2.500 litros para el Syrah. Sin chips, sin viruta, sin maquillaje.",
  },
  {
    n: "04",
    title: "La guarda",
    text: "El tiempo que pida el vino, no el calendario comercial. Meridiana espera tres años. Noctua, cuatro. No filtramos. Clarificamos solo si el vino lo pide, y casi nunca lo pide.",
  },
  {
    n: "05",
    title: "La botella",
    text: "Cera, no cápsula de plástico. Etiqueta de papel sin barniz. Un búho pequeño. El resto del dato —añada, parcela, hora— va en el registro, no en un párrafo de marketing.",
  },
];

export default function MetodoPage() {
  return (
    <>
      <PageIntro
        kicker="Método"
        title="Un protocolo, no un relato."
        lede="Cinco reglas. Las escribimos en 2015 y no las hemos aflojado. La noche no es una estética: es temperatura."
      />

      <section className="px-6 md:px-12 lg:px-16">
        <div className="relative aspect-[16/8] overflow-hidden">
          <Image
            src="/images/harvest.jpg"
            alt="Equipo de vendimia trabajando de noche"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <ol>
          {protocol.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.04}>
              <li className="grid gap-4 border-t border-bone/10 py-10 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-sm tracking-kicker text-brass md:col-span-2">
                  {step.n}
                </p>
                <h2 className="font-display text-3xl font-light md:col-span-3 md:text-4xl">
                  {step.title}
                </h2>
                <p className="text-[15px] leading-[1.85] text-parchment md:col-span-7">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[480px]">
          <Image
            src="/images/cellar.jpg"
            alt="Bodega de Noctua: foudres y huevos de concreto"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative min-h-[480px]">
          <Image
            src="/images/crate.jpg"
            alt="Uvas recién cosechadas en cajón de madera"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Bodega</p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
              Gravedad, piedra, foudre.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[15px] leading-[1.85] text-parchment">
              La bodega está medio piso bajo la cota de Umbra. La uva baja,
              no se bombea. Dos huevos de concreto para Alba y Lúnula; cuatro
              foudres austriacos para el Syrah. Luz de una sola lámpara. El
              resto es sombra, que es otra forma de precisión.
            </p>
            <p className="mt-5 text-[15px] leading-[1.85] text-parchment">
              No usamos electricidad en la pisa. En años chicos, el pie basta.
              En años más generosos, hay despalilladora, y se nota —un poco—
              en el vino. Preferimos los años chicos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
