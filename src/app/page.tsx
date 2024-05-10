import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import Details from "@/app/_components/Details";
import Testimonials from "@/app/_components/Testimonials";
import CTASection from "@/app/_components/CTASection";
import FAQSection from "@/app/_components/FAQSection";
import PrimaryFooter from "@/app/_components/PrimaryFooter";
import SecondaryFooter from "@/app/_components/SecondaryFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Details />
      <Testimonials />
      <CTASection />
      <FAQSection />
      <PrimaryFooter />
      <SecondaryFooter />
    </main>
  );
}
