"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { studio } from "@/lib/studio";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-void/95 backdrop-blur-md lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <a href={studio.phoneHref} className="text-sm tabular text-paper">
          {studio.phone}
        </a>
        <Link href="/encargo" className="btn shrink-0">
          Conversar
        </Link>
      </div>
    </div>
  );
}
