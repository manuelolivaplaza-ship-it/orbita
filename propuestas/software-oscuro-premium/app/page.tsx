import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Marquee } from "@/components/marquee";
import { Process } from "@/components/process";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <Manifesto />
      <Services />
      <Process />
    </>
  );
}
