import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-border/80 bg-background/92 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-[1180px] gap-2">
        <Button asChild variant="outline" className="h-12 flex-1 rounded-full">
          <a href={site.phoneHref}>
            <Phone className="size-4" />
            Urgencia
          </a>
        </Button>
        <Button asChild className="h-12 flex-1 rounded-full">
          <Link href="/primera-hora">Agendar hora</Link>
        </Button>
      </div>
    </div>
  );
}
