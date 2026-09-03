"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reserva = document.getElementById("reserva");
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      const rect = reserva?.getBoundingClientRect();
      const inReserva = rect ? rect.top < window.innerHeight * 0.7 : false;
      const show = past && !inReserva;
      setOn(show);
      document.body.classList.toggle("has-sticky", show);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.classList.remove("has-sticky");
    };
  }, []);

  return (
    <a
      className={`sticky-cta${on ? " is-on" : ""}`}
      href="#reserva"
      aria-hidden={!on}
      tabIndex={on ? 0 : -1}
    >
      Agendar reunión
    </a>
  );
}
