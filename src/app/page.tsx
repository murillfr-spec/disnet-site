import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { ServicesScrollList } from "@/components/services-scroll-list";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesScrollList />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
