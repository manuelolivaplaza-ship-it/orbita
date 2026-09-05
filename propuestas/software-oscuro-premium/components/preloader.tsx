"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";

const letters = "OBSIDIANA".split("");

export function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const skip =
      reduce ||
      document.documentElement.dataset.intro === "done" ||
      sessionStorage.getItem("obsidiana-intro");

    if (skip) {
      const t = window.setTimeout(() => setShow(false), 0);
      return () => window.clearTimeout(t);
    }

    document.documentElement.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("obsidiana-intro", "1");
      document.documentElement.dataset.intro = "done";
      document.documentElement.style.overflow = "";
    }, 2400);

    return () => {
      window.clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <Mark className="mb-8 h-10 w-8 text-gold" />
          <p
            className="font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold tracking-[0.22em] text-ivory"
            aria-label="OBSIDIANA"
          >
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {l}
              </motion.span>
            ))}
          </p>
          <motion.p
            className="mt-5 font-mono text-[10px] tracking-[0.32em] text-mute uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            Santiago · Chile
          </motion.p>
          <motion.div
            className="absolute bottom-[18%] left-[12%] right-[12%] h-px origin-left bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
