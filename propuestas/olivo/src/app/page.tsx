import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { LeadForm } from "@/components/lead-form";
import { PropertyCard } from "@/components/property-card";
import { PropertySearch } from "@/components/property-search";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { featuredProperties, neighborhoods } from "@/lib/properties";
import { site } from "@/lib/site";

const stats = [
  { value: "11 años", label: "en el oriente de Santiago" },
  { value: "UF 48.200", label: "transadas en 2025" },
  { value: "19 días", label: "promedio en vender una exclusiva" },
  { value: "< 8 min", label: "de respuesta en horario hábil" },
];

const steps = [
  {
    n: "01",
    title: "Conversamos",
    text: "Quince minutos. Presupuesto real, comunas, plazos, si hay crédito o pie. Sin presentación de PowerPoint.",
  },
  {
    n: "02",
    title: "Filtramos",
    text: "Te mostramos lo que calza. No te hacemos recorrer doce departamentos para justificar el café.",
  },
  {
    n: "03",
    title: "Cerramos",
    text: "Oferta, estudio de títulos, promesa y escritura. Estamos en la notaría. No desaparecemos después de la visita.",
  },
];

const testimonials = [
  {
    quote:
      "Vendimos la casa en 28 días, con visitas filtradas. Nadie tocó el timbre a deshora. Eso, para una familia con niños, no es un detalle.",
    name: "Francisca M.",
    place: "Las Condes",
  },
  {
    quote:
      "Nos mostraron tres departamentos, no treinta. Elegimos el segundo. Elena nos dijo el defecto de cada uno antes de que lo preguntáramos.",
    name: "Andrés y Pía",
    place: "Ñuñoa",
  },
  {
    quote:
      "La tasación fue honesta. Ni inflada para conquistarnos ni baja para vender rápido. Firmamos la exclusiva esa misma tarde.",
    name: "Rodrigo A.",
    place: "Vitacura",
  },
];

const faqs = [
  {
    q: "¿Cobran por tasación?",
    a: "No. La tasación comercial es sin costo ni compromiso. Si después quieres que vendamos, hablamos de exclusiva y de honorarios — 2% + IVA del valor de venta, a cargo del vendedor, como es habitual en Chile.",
  },
  {
    q: "¿Trabajan solo el oriente de Santiago?",
    a: "Sí. Las Condes, Vitacura, Providencia, Ñuñoa, La Reina y Lo Barnechea. Preferimos pocas comunas bien, a toda la ciudad mal.",
  },
  {
    q: "¿Puedo visitar un departamento este fin de semana?",
    a: "Si está disponible, sí. Escríbenos por WhatsApp con el link de la propiedad y te confirmamos horario. Pedimos cédula en la visita.",
  },
  {
    q: "¿Ayudan con el crédito hipotecario?",
    a: "Te derivamos a ejecutivos que ya conocen nuestros clientes. No somos banco: somos claros con lo que el pie y el dividendo implican antes de enamorarte de una casa.",
  },
];

export default function HomePage() {
  const featured = featuredProperties();

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Casa contemporánea en Santiago, con jardín y cordillera"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#171c19]/45 via-[#171c19]/30 to-[#171c19]/70" />
        <Container className="relative flex min-h-[100svh] flex-col justify-center pt-20 pb-16 md:pt-12 md:pb-24">
          <p className="fade-up text-xs tracking-[0.28em] text-white/75 uppercase">
            Corredora · Oriente de Santiago
          </p>
          <h1 className="fade-up fade-up-delay-1 mt-4 max-w-4xl font-heading text-[2.7rem] leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Encuentra tu próxima casa.
          </h1>
          <p className="fade-up fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Las Condes, Vitacura, Providencia y Ñuñoa. Visitas filtradas,
            precios en UF y respuesta el mismo día.
          </p>
          <div className="fade-up fade-up-delay-3 mt-8 max-w-4xl">
            <PropertySearch />
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-card">
        <Container className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-2xl text-primary md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-[0.22em] text-primary uppercase">
                En vitrina
              </p>
              <h2 className="mt-3 max-w-xl font-heading text-4xl md:text-5xl">
                Propiedades que vale la pena mirar.
              </h2>
            </div>
            <Button asChild variant="outline" className="h-11">
              <Link href="/propiedades">
                Ver todas <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid gap-5 md:grid-cols-2">
          <Link
            href="/propiedades?op=venta"
            className="group relative min-h-[380px] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/living.jpg"
              alt="Interior luminoso para comprar"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#171c19]/80 to-transparent" />
            <div className="absolute right-8 bottom-8 left-8 text-white">
              <p className="text-xs tracking-[0.2em] uppercase">Comprar</p>
              <h3 className="mt-2 font-heading text-4xl">Busco casa o depto</h3>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Filtro por comuna, dormitorios y operación. Visita cuando calce,
                no cuando haya que llenar la agenda.
              </p>
            </div>
          </Link>
          <Link
            href="/vender"
            className="group relative min-h-[380px] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/keys.jpg"
              alt="Llaves de una casa lista para vender"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1f4a3c]/85 to-transparent" />
            <div className="absolute right-8 bottom-8 left-8 text-white">
              <p className="text-xs tracking-[0.2em] uppercase">Vender</p>
              <h3 className="mt-2 font-heading text-4xl">Quiero tasar</h3>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Valoración sin costo. Plan de fotos, difusión y visitas
                filtradas. Honorarios claros desde el día uno.
              </p>
            </div>
          </Link>
        </Container>
      </section>

      <section className="bg-card py-20 md:py-28">
        <Container>
          <p className="text-xs tracking-[0.22em] text-primary uppercase">Cómo trabajamos</p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl md:text-5xl">
            Tres pasos. Ninguno es un embudo disfrazado.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <p className="font-heading text-3xl text-primary">{s.n}</p>
                <h3 className="mt-4 font-heading text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-[0.22em] text-primary uppercase">Comunas</p>
              <h2 className="mt-3 font-heading text-4xl md:text-5xl">
                El oriente, calle por calle.
              </h2>
            </div>
            <Button asChild variant="outline" className="h-11">
              <Link href="/barrios">Ver comunas</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/propiedades?comuna=${encodeURIComponent(n.name)}`}
                className="group relative min-h-[260px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={n.image}
                  alt={n.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#171c19]/75 to-transparent" />
                <div className="absolute right-5 bottom-5 left-5 text-white">
                  <h3 className="font-heading text-3xl">{n.name}</h3>
                  <p className="mt-1 text-sm text-white/80">
                    {n.priceM2} UF/m² venta · {n.rentM2.toLocaleString("es-CL")} CLP/m² arriendo
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Referencias de mercado oriente 2025–2026 (UF House / Colliers). Cada propiedad se tasa por sí misma.
          </p>
        </Container>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <Container>
          <p className="text-xs tracking-[0.22em] text-primary-foreground/70 uppercase">
            Clientes
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl md:text-5xl">
            Lo que queda después de la escritura.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-2xl bg-white/8 p-6 ring-1 ring-white/15"
              >
                <p className="font-heading text-xl leading-snug">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm text-primary-foreground/70">
                  {t.name} · {t.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-start gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.22em] text-primary uppercase">Preguntas</p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl">
              Claro, porque el rubro suele no serlo.
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`f-${i}`}>
                  <AccordionTrigger className="py-5 text-left font-heading text-xl hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border md:p-8">
            <p className="text-xs tracking-[0.22em] text-primary uppercase">Tasación</p>
            <h3 className="mt-2 font-heading text-3xl">¿Estás pensando en vender?</h3>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Sin costo. Sin exclusiva de antemano. Un número defendible y un plan, si quieres seguir.
            </p>
            <LeadForm intent="tasacion" compact />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">
              Si ya sabes lo que buscas, no des más vueltas.
            </h2>
            <p className="mt-2 text-muted-foreground">{site.hours}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6">
              <Link href="/propiedades">Ver propiedades</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6">
              <Link href="/contacto">Hablar con Olivo</Link>
            </Button>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: site.name,
            description: site.description,
            telephone: site.phoneHref.replace("tel:", ""),
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address,
              addressLocality: "Las Condes",
              addressRegion: "Región Metropolitana",
              addressCountry: "CL",
            },
          }),
        }}
      />
    </>
  );
}
