import { DataStrip } from "@/components/home/DataStrip";
import { FeaturedWines } from "@/components/home/FeaturedWines";
import { HarvestBand } from "@/components/home/HarvestBand";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { ParcelsBand } from "@/components/home/ParcelsBand";
import { VisitCta } from "@/components/home/VisitCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataStrip />
      <Manifesto />
      <FeaturedWines />
      <HarvestBand />
      <ParcelsBand />
      <VisitCta />
    </>
  );
}
