import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { formatCLP, pad } from "@/lib/format";
import { categories, getFeatured, products } from "@/lib/products";
import { site } from "@/lib/site";

const rites = [
  {
    n: "01",
    title: "Mirar",
    text: "La colección cabe en una mesa. Sin banners, sin cuenta regresiva. Si una pieza te detiene, es esa.",
  },
  {
    n: "02",
    title: "Elegir",
    text: "El precio que ves es el que pagas: IVA incluido. Color y medida, si hay. Al carrito, o WhatsApp si dudas.",
  },
  {
    n: "03",
    title: "Llegar",
    text: "Chilexpress o Starken a tu comuna. Retiro en Lastarria de martes a sábado, desde las once.",
  },
];

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="relative h-[46vh] lg:hidden">
          <Image
            src="/images/hero-m.jpg"
            alt="Mesa puesta para las once, con lino, gres y pan, a la luz de la mañana"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12">
          <div className="flex flex-col justify-end py-12 lg:col-span-5 lg:justify-center lg:py-0 lg:pr-10">
            <p className="kicker">Casa de objetos · Lastarria</p>
            <h1 className="font-display mt-5 text-[clamp(3.1rem,8.2vw,7.2rem)] leading-[0.88] tracking-tight">
              Lo que dura
              <br />
              sobre la{" "}
              <em className="text-bronce italic">mesa.</em>
            </h1>
            <p className="mt-7 max-w-[34ch] text-[17px] leading-relaxed text-tinta-suave">
              Catorce piezas. Lino, gres, madera y despensa. La casa abre a las
              once. El precio incluye IVA.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/coleccion" className="btn btn-ink">
                Ver la colección
                <Arrow />
              </Link>
              <Link href="/la-casa" className="btn btn-ghost">
                La casa
              </Link>
            </div>
            <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris lg:hidden">
              {site.address.line} · {site.hoursShort}
            </p>
          </div>

          <div className="relative hidden min-h-[100svh] lg:col-span-7 lg:block">
            <Image
              src="/images/hero.jpg"
              alt="Mesa puesta para las once, con lino, gres y pan, a la luz de la mañana"
              fill
              priority
              sizes="58vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="border-y border-linea bg-papel-2">
        <p className="shell font-mono py-4 text-[0.68rem] uppercase tracking-[0.32em] text-gris">
          Lino · Gres · Raulí · Lana · Vidrio · Cera · Aceite
        </p>
      </div>

      <section className="shell grid items-start gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Manifiesto</p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[0.98] tracking-tight">
            No es un bazar de todo. Es un bazar de lo que dura.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-16" delay={80}>
          <p className="text-[17px] leading-[1.75] text-tinta-suave">
            Reunimos piezas para la mesa chilena: el mantel que se arruga, el
            bowl de Pomaire, la tabla de raulí, el aceite del Limarí. Cada una
            tiene origen, oficio y un precio que no cambia en el carrito.
          </p>
          <p className="mt-4 text-[17px] leading-[1.75] text-tinta-suave">
            Abrimos a las once, como la once. Si el mes está corto, se nota en
            el stock. No fabricamos urgencia.
          </p>
          <Link
            href="/la-casa"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Conocer la casa
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-linea">
        <div className="shell grid grid-cols-2 md:grid-cols-4">
          {[
            { k: pad(products.length), v: "Piezas en casa" },
            { k: "11:00", v: "Abre la puerta" },
            { k: formatCLP(site.freeShippingFrom), v: "Despacho sin costo" },
            { k: "10", v: "Días para devolver" },
          ].map((item, i) => (
            <Reveal
              key={item.v}
              delay={i * 80}
              className="border-linea px-0 py-10 [&:nth-child(odd)]:pr-6 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:px-8 lg:[&:not(:last-child)]:px-10 first:pl-0"
            >
              <p className="font-display nums text-4xl tracking-tight md:text-5xl">
                {item.k}
              </p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                {item.v}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">En la mesa</p>
            <h2 className="font-display mt-4 text-5xl tracking-tight md:text-6xl">
              Cinco presencias
            </h2>
          </div>
          <Link
            href="/coleccion"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            La colección completa
            <Arrow />
          </Link>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {featured.map((product, index) => (
            <Reveal
              key={product.slug}
              delay={index * 80}
              className={index === 0 ? "md:col-span-2" : undefined}
            >
              <ProductCard
                product={product}
                large={index === 0}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-tinta text-papel">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[420px] md:col-span-7 md:min-h-[720px]">
            <Image
              src="/images/once.jpg"
              alt="Once puesta: taza de gres, servilleta de lino y cuchara de madera"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-bronce">
                Las once
              </p>
              <h2 className="font-display mt-5 text-5xl font-light leading-[1.05] tracking-tight">
                El rito que ordena la casa.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-papel/70">
                Pan, té, un mantel que ya tiene arrugas. Todo lo que vendemos
                cabe en esa hora. Si no se usa a las once, no entra al bazar.
              </p>
              <Link href="/coleccion" className="btn btn-line mt-10 w-fit">
                Armar la mesa
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <Reveal>
          <p className="kicker">Líneas</p>
          <h2 className="font-display mt-4 text-5xl tracking-tight md:text-6xl">
            Cuatro cajones.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px bg-linea sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 70} className="bg-papel p-8">
              <Link href={`/coleccion?linea=${cat.id}`} className="group block">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-bronce">
                  {pad(i + 1)}
                </p>
                <h3 className="font-display mt-6 text-3xl tracking-tight">
                  {cat.label}
                </h3>
                <p className="mt-2 text-sm text-tinta-suave">{cat.note}</p>
                <span className="link-line mt-8 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.24em]">
                  Ver
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-linea bg-papel-2">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Cómo comprar</p>
            <h2 className="font-display mt-4 text-4xl tracking-tight md:text-5xl">
              Tres pasos, sin letra chica.
            </h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {rites.map((r, i) => (
              <Reveal key={r.n} delay={i * 80}>
                <p className="font-mono text-[0.62rem] tracking-[0.24em] text-bronce">
                  {r.n}
                </p>
                <h3 className="font-display mt-4 text-2xl tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-tinta-suave">
                  {r.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid items-center gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="relative aspect-[4/5] lg:col-span-5">
          <Image
            src="/images/interior.jpg"
            alt="Interior de Bazar Austral: estantes de lino, gres y vidrio a la luz norte"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
          <p className="kicker">Lastarria 84</p>
          <h2 className="font-display mt-4 text-5xl tracking-tight">
            Una sala, una mesa, luz de patio.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-tinta-suave">
            {site.address.line}. Se visita sin cita en horario de casa. Si
            quieres llevarte una pieza el mismo día, escríbenos por WhatsApp
            para apartarla.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn btn-ink">
              Escribir
            </Link>
            <a
              href={site.whatsappHref}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

