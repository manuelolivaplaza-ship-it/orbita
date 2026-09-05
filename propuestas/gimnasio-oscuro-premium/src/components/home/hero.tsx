"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { site } from "@/lib/site";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("obsidiana-intro");
    if (seen) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 2500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Piso de fuerza de Obsidiana con vista a la cordillera de los Andes"
        fill
        priority
        className="object-cover kenburns"
        sizes="100vw"
        quality={88}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-bg/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,6,0.45)_100%)]" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pt-28 pb-10 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <motion.p
              className="font-mono text-[0.62rem] tracking-[0.4em] text-copper uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.8 }}
            >
              {site.city} · Club privado
            </motion.p>
            <h1 className="mt-5 font-serif text-[14vw] leading-[0.86] font-medium tracking-tight md:text-[8.4rem]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={ready ? { y: "0%" } : { y: "110%" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  El silencio
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block italic text-ivory-soft"
                  initial={{ y: "110%" }}
                  animate={ready ? { y: "0%" } : { y: "110%" }}
                  transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  es el primer
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={ready ? { y: "0%" } : { y: "110%" }}
                  transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  ejercicio.
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            className="max-w-sm pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.28, duration: 0.9 }}
          >
            <p className="text-[1.05rem] leading-relaxed text-ivory-soft">
              Ciento ochenta socios. Cero pantallas. Un recinto de piedra
              volcánica y cobre en Vitacura.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/visita">Reservar visita</Button>
              <Button href="/el-club" variant="outline">
                El club
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-6 border-t border-ivory/15 pt-6 sm:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {[
            { k: `${site.members}`, v: "Socios" },
            { k: `${site.area}`, v: "m²" },
            { k: "05:30", v: "Apertura" },
            { k: `${site.available}`, v: "Cupos" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-serif text-4xl tracking-tight md:text-5xl">
                {s.k}
              </p>
              <p className="mt-1 font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
                {s.v}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-8 hidden -translate-y-1/2 lg:flex">
        <span className="font-mono text-[0.58rem] tracking-[0.5em] text-ivory/50 uppercase [writing-mode:vertical-rl]">
          33°23′S · Los Andes
        </span>
      </div>
    </section>
  );
}
