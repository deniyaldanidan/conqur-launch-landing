import Picture1 from "@/app/_assets/picture1.svg";
import Picture2 from "@/app/_assets/picture2.svg";
import Image from "next/image";
import CTAForm from "./CTAForm";

export default function Hero() {
  // console.log(Picture2);

  return (
    <section
      className="max-w-[1650px] mx-auto flex justify-between items-center px-page-margin-x py-section-pad-y laptop-md:flex-col laptop-md:gap-y-12"
      aria-labelledby="hero-section-title"
      aria-describedby="hero-section-description"
    >
      <div className="max-w-[625px] flex flex-col gap-y-8 laptop:max-w-[500px] laptop-md:max-w-[850px] laptop-md:mx-auto">
        <div className="flex flex-col gap-y-3 laptop-md:items-center tablet:items-start">
          <h2
            className="text-hero-title-font font-bold laptop-md:text-center tablet:text-left"
            id="hero-section-title"
          >
            Revolutionize Your Freelance Workflow with Conqur
          </h2>
          <h3
            className="text-hero-subtitle-font font-semibold laptop-md:text-center laptop-md:max-w-[90%] tablet:text-left tablet-sm:max-w-none"
            id="hero-section-description"
          >
            Discover the ultimate project management solution for freelancers.
            Track time efficiently, manage projects effortlessly, and boost
            productivity. Join our waitlist today and be the first to experience
            Conqur!
          </h3>
        </div>
        <div className="laptop-md:w-[600px] laptop-md:mx-auto tablet:w-full">
          <CTAForm />
        </div>
      </div>
      <div className="h-[472px] laptop-md:translate-x-[25%] tablet-sm:translate-x-0 tablet-sm:h-[620px] mobile-lg:h-fit">
        <div className={`relative`}>
          <Image
            src={Picture1}
            alt="Hero Image showcasing time tracking features"
            title="Hero Image showcasing time tracking features"
            priority
            className={`relative w-[${Picture1.width}px] h-[${Picture1.height}px] mobile-lg:h-auto mobile-lg:w-full `}
            unoptimized
          />
          <Image
            src={Picture2}
            alt="Hero Image showcasing reports & insights features"
            title="Hero Image showcasing reports & insights features"
            priority
            className={`w-[${Picture2.width}px] h-[${Picture2.height}px] absolute -left-1/2 top-[40%] laptop:-left-1/3 laptop-md:-left-1/2 tablet-sm:left-0 tablet-sm:top-3/4 mobile-lg:relative mobile-lg:top-0 mobile-lg:mt-6 mobile-lg:h-auto mobile-lg:w-full `}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

// start from mobile-lg
