import { CoachesPreview } from "@/components/home/coaches-preview";
import { Disciplines } from "@/components/home/disciplines";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { Membership } from "@/components/home/membership";
import { Space } from "@/components/home/space";
import { VisitCta } from "@/components/home/visit-cta";
import { Voices } from "@/components/home/voices";
import { Marquee } from "@/components/marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <Disciplines />
      <Space />
      <CoachesPreview />
      <Membership />
      <Voices />
      <VisitCta />
    </>
  );
}
