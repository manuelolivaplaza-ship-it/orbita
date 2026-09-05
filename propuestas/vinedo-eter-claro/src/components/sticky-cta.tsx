"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function StickyCta() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const hide =
    pathname.startsWith("/visitas") ||
    pathname.startsWith("/seleccion") ||
    pathname.startsWith("/contacto");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-linea bg-papel/95 p-3 backdrop-blur lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-500`}
    >
      <Link href="/visitas" className="btn btn-ink w-full">
        Reservar visita
      </Link>
    </div>
  );
}
