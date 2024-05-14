import Link from "next/link";
import SectionBadge from "@/app/_components/SectionBadge";
import FeatureCard from "@/app/_components/FeatureCard";
import featureCardData from "@/app/_assets/data/featureCardData";

export default function Features() {
  return (
    <section className="px-page-margin-x py-section-pad-y max-w-[1650px] mx-auto">
      <div className="flex flex-col items-center gap-y-6 mb-11 max-w-[650px] mx-auto">
        <div className="flex flex-col items-center gap-y-2.5">
          <SectionBadge text="FEATURES" />
          <h2 className="text-section-title-font font-bold capitalize text-center">
            Productivity Amplified: Conqur&apos;s Offerings
          </h2>
          <h3 className="text-section-subtitle-font font-semibold text-center">
            Effortless task management, seamless collaboration, and insightful
            analytics for freelance success
          </h3>
        </div>
        <Link href="#join-waitlist" className="my-cta-btn">
          Join Waitlist
        </Link>
      </div>
      {/* Features Card comes here */}
      <div className="grid grid-cols-3 gap-x-9 gap-y-10 justify-center laptop:grid-cols-2 laptop-sm:gap-8 tablet:grid-cols-1">
        {featureCardData.map((f) => (
          <FeatureCard
            cardTitle={f.title}
            cardContent={f.content}
            key={f.title}
          >
            {f.icon}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}
