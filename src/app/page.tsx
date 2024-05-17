import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import Details from "@/app/_components/Details";
import Testimonials from "@/app/_components/Testimonials";
import CTASection from "@/app/_components/CTASection";
import FAQSection from "@/app/_components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Details />
      <Testimonials />
      <CTASection />
      <FAQSection />
    </>
  );
}
