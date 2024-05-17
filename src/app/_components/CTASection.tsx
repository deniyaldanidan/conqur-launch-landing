import CTAForm from "./CTAForm";
import SectionBadge from "./SectionBadge";

export default function CTASection() {
  return (
    <section
      className="px-page-margin-x py-section-pad-y bg-high-sec-bg flex flex-col gap-y-11"
      id="join-waitlist"
      aria-labelledby="cta-section-title"
      aria-describedby="cta-section-description"
    >
      <div className="flex flex-col items-center gap-y-2.5 max-w-[700px] mx-auto">
        <SectionBadge text="JOIN NOW" />
        <h2
          className="text-section-title-font font-bold capitalize text-center"
          id="cta-section-title"
        >
          Be the First to Experience Conqur
        </h2>
        <h3
          className="text-section-subtitle-font font-semibold text-center"
          id="cta-section-description"
        >
          Sign up now for exclusive early access, insider updates, and special
          offers on our revolutionary freelance management platform.
        </h3>
      </div>
      <div className="w-full max-w-[600px] mx-auto">
        <CTAForm />
      </div>
    </section>
  );
}
