"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ChapterHead({
  kicker,
  title,
  id,
}: {
  kicker: string;
  title: string;
  id?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <header className="chapter-head">
      <p className="kicker">{kicker}</p>
      <h2 className="chapter-title" id={id}>
        {title}
      </h2>
      <motion.span
        className="title-rule"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.24, ease }}
      />
    </header>
  );
}
