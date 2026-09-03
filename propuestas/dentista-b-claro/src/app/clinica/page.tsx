import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "La clínica",
  description:
    "Alba es un atelier dental en el barrio de Salamanca: caliza, lino, suites privadas y tecnología que no se exhibe.",
};

const tech = [
  {
    title: "Escáner intraoral 3D",
    text: "Adiós a la silicona. Un minuto, un modelo digital, cero náuseas.",
  },
  {
    title: "CBCT de haz cónico",
    text: "Hueso, senos y nervio a la vista antes de decidir un implante.",
  },
  {
    title: "Digital Smile Design",
    text: "La sonrisa se dibuja sobre tu cara, no sobre un diente suelto.",
  },
  {
    title: "Air-flow y microscopio",
    text: "Higiene que respeta el esmalte. Endodoncia cuando hace falta ver.",
  },
];

export default function ClinicaPage() {
  return (
    <>
      <PageHero
        eyebrow="La clínica"
        title="Un sitio al que se viene sin encogerse."
        lead="Jorge Juan, 42. Un piso con luz de mañana, no un local de pasillo. Cuatro suites. Un olivo. Cero posters de dientes."
      />
      <Container className="pb-24">
        <div className="grid gap-4 md:grid-cols-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] md:col-span-4 md:aspect-auto md:min-h-[420px]">
            <Image
              src="/images/reception.jpg"
              alt="Recepción de Alba"
              fill
              className="object-cover"
              sizes="70vw"
              priority
            />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.6rem] md:col-span-2">
            <Image
              src="/images/corridor.jpg"
              alt="Pasillo con banco de roble"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.6rem] md:col-span-2">
            <Image
              src="/images/craft.jpg"
              alt="Porcelana en las manos del ceramista"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.6rem] md:col-span-4">
            <Image
              src="/images/suite.jpg"
              alt="Suite de tratamiento"
              fill
              className="object-cover"
              sizes="70vw"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Por qué el espacio importa
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              El miedo al dentista no empieza en el sillón. Empieza en el
              umbral: el olor, el fluorescent, la televisión con un concurso.
              Aquí huele a madera y a limpio. La luz es de ventana. El tiempo
              entre pacientes no se recorta para meter uno más.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cada suite es privada. Hay manta, auriculares y permiso para
              parar. Si vienes con alguien, hay sitio. Si vienes sola, nadie te
              deja en un pasillo.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {tech.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[1.8rem] bg-secondary px-8 py-12 sm:px-12">
          <h2 className="font-display text-3xl tracking-tight">
            Cómo llegar
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Calle Jorge Juan 42, 28001 Madrid. Metro Serrano o Retiro. Hay
            aparcamiento en el edificio y en el parking de Goya. Si vienes en
            coche, avísanos: te indicamos el acceso más corto.
          </p>
          <Button asChild className="mt-8 h-12 rounded-full px-6">
            <Link href="/contacto">Ver mapa y horario</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
