import Image from "next/image";
import Link from "next/link";
import { lines } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La marca",
  description:
    "NOCTUA: del latín, búho. Neumáticos calibrados para ver de noche y frenar a tiempo en Chile.",
};

export default function NoctuaPage() {
  return (
    <div className="pt-[4.25rem]">
      <header className="pad py-16 lg:py-24">
        <p className="kicker">Marca</p>
        <h1 className="display mt-4 text-6xl sm:text-[8rem]">NOCTUA</h1>
        <p className="serif mt-6 max-w-2xl text-3xl leading-snug">
          Del latín: búho. El animal que ve cuando el resto adivina.
        </p>
      </header>

      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[60vh]">
          <Image
            src="/images/owl-eye.jpg"
            alt="Iris ámbar de un búho"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center pad py-16">
          <div className="max-w-md">
            <p className="kicker">01 — Nombre</p>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-mute">
              No es un búho de dibujo. Es una disciplina: ver el asfalto cuando
              baja el contraste, cuando llueve, cuando el faro contrario ciega.
              El neumático es el único contacto. Si ese contacto es vago, el
              resto del auto es literatura.
            </p>
          </div>
        </div>
      </div>

      <section className="pad grid gap-12 border-y border-line py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">02 — Chile</p>
          <h2 className="display mt-4 text-4xl">Un laboratorio vertical.</h2>
        </div>
        <div className="max-w-xl space-y-6 text-[1.05rem] leading-relaxed text-mute lg:col-span-7">
          <p>
            Pocos países piden tanto a una goma en un mismo fin de semana.
            Viernes en Santiago. Sábado en Farellones. Domingo de vuelta por
            una Ruta 5 a 32 grados. El catálogo europeo no está pensado para
            eso. El chino, menos.
          </p>
          <p>
            NOCTUA arma seis compuestos —Vía, Nox, Cumbre, Atacama, Carga,
            Velox— y los monta en Huechuraba, de día o de noche. No fabricamos
            en seis continentes. Elegimos, medimos y dejamos el auto redondo.
          </p>
          <p>
            El índice nocturno es nuestro. Cruza agarre en mojado, ruido y cómo
            se lee el dibujo bajo faros. No reemplaza la etiqueta. Le habla a
            quien conduce después de las diez.
          </p>
        </div>
      </section>

      <section className="pad py-20">
        <p className="kicker">03 — Líneas</p>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {lines.map((l, i) => (
            <li key={l.id}>
              <Link
                href={`/catalogo?linea=${l.id}`}
                className="group grid gap-3 py-8 md:grid-cols-12 md:items-center"
              >
                <span className="hud md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-4xl md:col-span-3 group-hover:text-amber-2">
                  {l.latin}
                </span>
                <span className="serif text-xl md:col-span-5">{l.pitch}</span>
                <span className="text-sm text-mute md:col-span-3 md:text-right">
                  {l.where}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative min-h-[60vh] overflow-hidden">
        <Image
          src="/images/atacama.jpg"
          alt="Vía nocturna en el desierto de Atacama bajo la Vía Láctea"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30" />
        <div className="relative pad flex min-h-[60vh] items-end py-16">
          <p className="serif max-w-xl text-3xl">
            El asfalto, de noche, es otro material.
          </p>
        </div>
      </section>
    </div>
  );
}
