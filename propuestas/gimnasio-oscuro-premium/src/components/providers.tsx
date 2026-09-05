"use client";

import { Cursor } from "@/components/cursor";
import { Grain } from "@/components/grain";
import { Preloader } from "@/components/preloader";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Grain />
      <Cursor />
      <Preloader />
      <ScrollProgress />
      {children}
    </SmoothScroll>
  );
}
