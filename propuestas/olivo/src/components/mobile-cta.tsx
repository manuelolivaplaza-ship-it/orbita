import Link from "next/link";

import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Button asChild variant="outline" className="h-11">
          <Link href="/vender">Tasar</Link>
        </Button>
        <Button asChild className="h-11">
          <a
            href={waLink("Hola Olivo, quiero hablar con un corredor.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
