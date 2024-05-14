import faqsData from "../_assets/data/faqsData";
import FaqCard from "./FaqCard";

export default function FAQSection() {
  return (
    <section className="px-page-margin-x py-section-pad-y max-w-[1650px] mx-auto">
      <h2 className="text-section-title-font font-bold capitalize text-left mb-11">
        FAQ&apos;s
      </h2>
      {/* Here comes the faqs */}
      <div className="flex flex-col gap-y-10">
        {faqsData.map((f) => (
          <FaqCard key={f.id} f={f} />
        ))}
      </div>
    </section>
  );
}
