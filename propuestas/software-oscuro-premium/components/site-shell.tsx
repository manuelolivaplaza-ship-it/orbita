import type { ReactNode } from "react";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import { Nav } from "@/components/nav";
import { Preloader } from "@/components/preloader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Grain />
      <Cursor />
      <Preloader />
      <Nav />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}
