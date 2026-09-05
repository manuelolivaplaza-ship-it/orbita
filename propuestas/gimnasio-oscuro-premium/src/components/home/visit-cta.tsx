import Image from "next/image";
import { Button } from "@/components/button";
import { site } from "@/lib/site";

export function VisitCta() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <Image
        src="/images/exterior.jpg"
        alt="Fachada nocturna de Obsidiana en Vitacura, con la cordillera al fondo"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/30" />
      <div className="relative z-10 flex min-h-[80vh] flex-col justify-end px-5 py-24 md:px-8 lg:px-12">
        <p className="font-mono text-[0.62rem] tracking-[0.36em] text-copper uppercase">
          07 — La visita
        </p>
        <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.92] tracking-tight md:text-7xl">
          La primera visita
          <span className="italic text-ivory-soft"> no es una clase de prueba.</span>
        </h2>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-ivory-soft">
          Cuarenta minutos, un coach, el recinto vacío de discurso. Si hay
          cupo —hoy quedan {site.available}— se abre la postulación.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/visita">Reservar visita</Button>
          <Button href={site.whatsapp} variant="outline" external>
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
