"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const letters = "OBSIDIANA".split("");

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("obsidiana-intro");
    if (seen) {
      setShow(false);
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("obsidiana-intro", "1");
      document.body.style.overflow = "";
    }, 2600);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex overflow-hidden">
              {letters.map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  className="font-serif text-[12vw] leading-none font-medium tracking-[0.12em] text-ivory sm:text-[4.6rem]"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12 + i * 0.045,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="h-px w-40 origin-center bg-copper"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.p
              className="font-mono text-[0.58rem] tracking-[0.42em] text-muted uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Vitacura · Chile
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
