import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkIndex } from "@/components/work-index";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Seis cuentas. El número que quedó, no el deck. Fintech, vino, retail, energía, alimentos y salud. Santiago y el resto de Chile.",
};

export default function TrabajoPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="01"
        kicker="Trabajo"
        title="El número que quedó. No el deck."
        lede="Seis cuentas recientes. Fintech, vino, retail, energía, alimentos y salud. Lo que se cortó, y lo que se movió."
      />
      <div className="mt-14">
        <WorkIndex items={cases} />
      </div>
    </div>
  );
}
