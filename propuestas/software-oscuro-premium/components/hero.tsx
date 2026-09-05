"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const lines = [
  { text: "Tallamos", className: "text-ivory" },
  { text: "software", className: "text-ivory" },
  { text: "que aguanta", className: "text-ivory" },
  { text: "presión.", className: "font-serif italic text-gold" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const skip =
      reduce ||
      document.documentElement.dataset.intro === "done" ||
      sessionStorage.getItem("obsidiana-intro");
    const t = window.setTimeout(() => setReady(true), skip ? 0 : 2100);
    return () => window.clearTimeout(t);
  }, [reduce]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-24"
    >
      <p className="vertical-rail pointer-events-none absolute top-1/2 left-4 hidden -translate-y-1/2 font-mono text-[10px] text-mute uppercase md:left-6 lg:block">
        {site.coords} · Lastarria
      </p>

      <div className="mx-auto grid w-full max-w-[1600px] flex-1 items-end gap-10 px-5 pb-8 md:grid-cols-12 md:px-10 md:pb-10">
        <motion.div style={{ opacity }} className="md:col-span-7 lg:col-span-7">
          <p className="mb-8 font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
            Estudio de software · Santiago
          </p>
          <h1 className="font-display text-[clamp(3.1rem,8.4vw,8.4rem)] leading-[0.88] font-semibold tracking-[-0.035em]">
            {lines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  className={`block ${line.className}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : { y: "110%" }}
                  transition={{ duration: 1, delay: 0.08 + i * 0.09, ease }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-8 max-w-md text-[15px] text-stone md:text-base"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: 0.55, duration: 0.8, ease }}
          >
            Sistemas a medida para empresas que operan con poco margen de error.
            Viñas, faenas, cultura, crédito. Chile, de verdad.
          </motion.p>
        </motion.div>

        <div className="relative md:col-span-5 lg:col-span-5">
          <motion.div style={{ y }} className="relative">
            <div className="float-slow relative aspect-[4/5] overflow-hidden md:aspect-[4/4.6]">
              <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-gold/35 ring-inset" />
              <Image
                src="/images/hero-obsidian.jpg"
                alt="Fragmento de obsidiana, vidrio volcánico negro con una vena dorada."
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
              Vidrio volcánico · presión · filo
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between px-5 pb-6 md:px-10">
        <p className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
          Desde {site.founded} · {site.people} personas · 4 encargos por trimestre
        </p>
        <div className="hidden items-start gap-3 md:flex">
          <span className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
            Bajar
          </span>
          <span className="scroll-stem block h-12 w-px bg-gold" />
        </div>
      </div>
    </section>
  );
}
