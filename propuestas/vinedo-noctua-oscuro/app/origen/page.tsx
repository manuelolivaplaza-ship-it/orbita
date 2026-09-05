import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { ParcelMap } from "@/components/ParcelMap";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Origen",
  description:
    "Noctua nace en Paihuano, Valle del Elqui: granito, caliza y uno de los cielos más oscuros de Chile.",
};

export default function OrigenPage() {
  return (
    <>
      <PageIntro
        kicker="Origen"
        title="Un valle estrecho, un cielo ancho."
        lede="Elqui, en quechua, quiere decir valle angosto. El nuestro sube desde Vicuña hacia Alcohuaz, donde el aire adelgaza y las noches pesan."
      />

      <section className="px-6 md:px-12 lg:px-16">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/valley.jpg"
            alt="Atardecer sobre el Valle del Elqui"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="grid gap-12 px-6 py-20 md:px-12 lg:grid-cols-12 lg:px-16 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="kicker">El lugar</p>
          <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
            30°13′ sur, al borde del desierto.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="text-[15px] leading-[1.85] text-parchment">
            El Valle del Elqui es la denominación de origen más septentrional
            de Chile. Menos de setenta milímetros de lluvia, riego de deshielo
            andino, días de radiación intensa y noches que bajan veinte grados.
            Esa amplitud —no el slogan de la altura— es lo que guarda la acidez.
          </p>
          <p className="mt-5 text-[15px] leading-[1.85] text-parchment">
            Plantamos en 2014, en laderas de granito entre Paihuano y Alcohuaz.
            Al lado, los observatorios. Compartimos el mismo instrumento: la
            oscuridad. {site.address}.
          </p>
        </Reveal>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[520px]">
          <Image
            src="/images/enologa.jpg"
            alt="Isidora Rivas, enóloga de Noctua, con un racimo de Syrah"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-night px-6 py-16 md:px-14">
          <p className="kicker">Enóloga</p>
          <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
            Isidora Rivas
          </h2>
          <p className="mt-6 text-[15px] leading-[1.85] text-parchment">
            Nació en Vicuña. Estudió enología en Santiago y volvió al
            valle porque el Syrah de altura le pareció más honesto que cualquier
            cabernet de revista. Dirige la vendimia noche a noche, parcela a
            parcela. No le interesa el puntaje: le interesa la hora en que se
            cortó el racimo.
          </p>
          <p className="mt-5 font-display text-2xl italic text-parchment">
            «Si la uva está caliente, el vino ya mintió.»
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <figure className="relative min-h-[380px]">
          <Image
            src="/images/soil.jpg"
            alt="Suelo de granito descompuesto en el viñedo"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </figure>
        <figure className="relative min-h-[380px]">
          <Image
            src="/images/grapes.jpg"
            alt="Racimo de Syrah con pruina, de noche"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </figure>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
        <p className="kicker">Suelo</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-light md:text-5xl">
          Granito molido por el hielo. Caliza donde corre el río.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-parchment">
          Umbra y Strix son ladera: granito, cuarzo, poca tierra, raíces que
          buscan. Alba es fondo de valle: aluvión, canto rodado, un poco de
          caliza. Nyctea mira al oriente, con mica que brilla cuando hay luna.
          No corregimos acidez. No chaptalizamos. El año se nota.
        </p>
        <div className="mt-16">
          <ParcelMap />
        </div>
      </section>

      <section className="relative min-h-[60vh]">
        <Image
          src="/images/observatory.jpg"
          alt="Observatorio en la cordillera, visto desde el viñedo"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex min-h-[60vh] items-end px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="kicker">Cielo</p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
              Vecinos de los telescopios.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-parchment">
              El Elqui es una de las reservas de cielo oscuro del mundo. No
              es un adorno de marca: es la razón por la que vendimiamos de
              noche y por la que las visitas empiezan a las 21:00.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
