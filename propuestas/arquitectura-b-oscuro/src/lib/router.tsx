import { createContext, useContext, useEffect, useState, type ReactNode, type MouseEvent } from "react";

function rutaActual(): string {
  const h = window.location.hash.replace(/^#/, "");
  return h === "" ? "/" : h;
}

const Ctx = createContext<string>("/");

export function Router({ children }: { children: ReactNode }) {
  const [ruta, setRuta] = useState(rutaActual);

  useEffect(() => {
    const onHash = () => setRuta(rutaActual());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ruta]);

  return <Ctx.Provider value={ruta}>{children}</Ctx.Provider>;
}

export const useRuta = () => useContext(Ctx);

export function Enlace({
  a,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  a: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
}) {
  return (
    <a href={"#" + a} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
