"use client";

import { motion, useReducedMotion } from "motion/react";
import { chapters, site, trustBand } from "@/lib/site";
import { useActiveChapter } from "@/hooks/use-active-chapter";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const active = useActiveChapter();
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay, ease },
        };

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell g12">
          <div className="hero-copy">
            <motion.p className="hero-kicker" {...enter(0)}>
              {site.name} · Las Condes — Estudio Jurídico
            </motion.p>
            <motion.h1 id="hero-title" {...enter(0)}>
              Tranquilidad legal cuando todo está en juego.
            </motion.h1>
            <motion.p className="hero-sub" {...enter(0.08)}>
              Te decimos si tienes caso, cuánto cuesta y qué hacemos mañana a
              primera hora. Sin humo, por escrito.
            </motion.p>
            <motion.div className="hero-ctas" {...enter(0.16)}>
              <a className="btn btn-primary" href="#reserva">
                Agendar reunión
              </a>
              <a className="btn btn-ghost" href="#honorarios">
                Ver honorarios
              </a>
            </motion.div>
            <motion.p className="hero-micro" {...enter(0.2)}>
              <span className="dot" aria-hidden="true" />
              Primera reunión con diagnóstico honesto. Si no tienes caso, te lo
              decimos y no avanzas.
            </motion.p>
          </div>
          <motion.nav
            className="hero-index"
            aria-label="Índice de expediente"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.3, delay: 0.24, ease },
                })}
          >
            {chapters.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`index-row${active === c.id ? " is-active" : ""}`}
              >
                <span className="num nums">{c.num}</span>
                <span className="lab">{c.label}</span>
              </a>
            ))}
          </motion.nav>
        </div>
      </section>
      <div className="trust">
        <p className="shell trust-list nums">
          {trustBand.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
    </>
  );
}
