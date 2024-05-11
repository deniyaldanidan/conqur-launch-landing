import Picture1 from "@/app/_assets/picture1.svg";
import Picture2 from "@/app/_assets/picture2.svg";
import Image from "next/image";
import CTAForm from "./CTAForm";

export default function Hero() {
  return (
    <section className="flex justify-between items-center px-page-margin-x py-section-pad-y">
      <div className="max-w-[625px] flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-hero-title-font font-bold">
            Revolutionize Your Freelance Workflow with Conqur
          </h1>
          <h3 className="text-hero-subtitle-font font-semibold">
            Discover the ultimate project management solution designed for
            freelancers. Track your time efficiently, manage projects
            effortlessly, and unlock productivity like never before. Join our
            waitlist today and be the first to experience Conqur!
          </h3>
        </div>
        <CTAForm />
      </div>
      <div className="h-[472px]">
        <div className={`relative`}>
          <Image
            src={Picture1}
            alt="Image 1"
            priority
            className={`relative w-[${Picture1.width}px] h-[${Picture1.height}px]`}
            unoptimized
          />
          <Image
            src={Picture2}
            alt="Image 2"
            priority
            className={`w-[${Picture2.width}px] h-[${Picture2.height}px] absolute -left-1/2 top-[40%]`}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
