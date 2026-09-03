import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/cta";
import { ProjectTeaser } from "@/components/project-teaser";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Casos de Alba: banca privada, puertos, salud y agronegocio. Software que se usa todos los días.",
};

export default function TrabajoPage() {
  return (
    <>
      <section className="wrap pb-8 pt-12 md:pb-12 md:pt-20">
        <p className="eyebrow">Trabajo</p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(3rem,8vw,6.4rem)]">
          Encargos que se usan, no que se presentan.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          Elegimos pocos. Los llevamos hasta producción. Lo que sigue es una
          muestra de los últimos años — finanzas, puerto, clínica y campo.
        </p>
      </section>

      <section className="wrap pb-6">
        <div className="img-frame relative aspect-[16/8]">
          <Image
            src="/images/andes.jpg"
            alt="Amanecer sobre los Andes desde la ventana del estudio."
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="wrap grid gap-20 py-20 md:py-28">
        {projects.map((project, index) => (
          <ProjectTeaser
            key={project.slug}
            project={project}
            index={index}
            featured={index === 0}
          />
        ))}
      </section>

      <Cta title="El próximo caso puede ser el de ustedes." />
    </>
  );
}
