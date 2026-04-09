import React from "react";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import FooterTenScetion from "~/components/Section/Common/FooterTen/FooterTenScetion";
import HeaderEight from "~/components/Section/Common/Header/HeaderEight";
import AccordionSection from "~/components/Section/Home-10/AccordionSection";
import ChooseSection from "~/components/Section/Home-10/ChooseSection";
import HeroSection from "~/components/Section/Home-10/HeroSection";
import ItSolutionSection from "~/components/Section/Home-10/ItSolutionSection";
import LetsBuildSection from "~/components/Section/Home-10/LetsBuildSection";
import ServiceSliderSection from "~/components/Section/Home-10/ServiceSliderSection";

export default function Home() {
  return (
    <div>
      <HeaderEight />
      <HeroSection />
      <ChooseSection />
      <ItSolutionSection />
      <ServiceSliderSection />
      <LetsBuildSection />
      <CtaSection />
      <AccordionSection />
      <FooterTenScetion />
    </div>
  );
}
