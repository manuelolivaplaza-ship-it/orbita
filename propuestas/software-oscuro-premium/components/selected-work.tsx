"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "@/components/section-head";
import { projects } from "@/lib/data";

function Chapter({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : "-8%", reduce ? 0 : "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  return (
    <article ref={ref} className="relative min-h-[88svh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/20" />
      <div className="relative mx-auto flex min-h-[88svh] max-w-[1600px] flex-col justify-end px-5 py-16 md:px-10 md:py-20">
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
          {String(index + 1).padStart(2, "0")} · {project.location} · {project.year}
        </p>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h3 className="font-display text-[clamp(2.4rem,7vw,6.4rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-ivory">
              {project.name}
            </h3>
            <p className="mt-4 max-w-xl text-stone">{project.excerpt}</p>
          </div>
          <Link
            href={`/trabajo/${project.slug}`}
            className="group inline-flex items-center gap-3 border border-gold/40 px-6 py-3 font-mono text-[11px] tracking-[0.22em] text-gold uppercase transition-colors duration-500 hover:bg-gold hover:text-void"
          >
            Ver el caso
            <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section>
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          kicker="Trabajo seleccionado"
          title="Cinco sistemas. Cero plantillas."
          aside="El resto, si te parece, lo conversamos en Lastarria. Tomamos cuatro encargos por trimestre."
        />
      </div>
      <div>
        {projects.map((project, i) => (
          <Chapter key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
