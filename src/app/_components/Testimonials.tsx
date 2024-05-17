import testimonialsData from "../_assets/data/testimonialsData";
import SectionBadge from "./SectionBadge";
import TestimonialCard from "./TestimonialCard";
import TestimonialsSlider from "./TestimonialsSlider";

export default function Testimonials() {
  return (
    <section
      className="px-page-margin-x py-section-pad-y max-w-[1650px] mx-auto"
      aria-labelledby="testimonials-section-title"
    >
      <div className="flex flex-col items-center gap-y-6 mb-2 max-w-[650px] mx-auto">
        <div className="flex flex-col items-center gap-y-2.5">
          <SectionBadge text="Testimonials" />
          <h2
            className="text-section-title-font font-bold capitalize text-center"
            id="testimonials-section-title"
          >
            Early Access Reviews
          </h2>
        </div>
      </div>
      {/* Here comes the slider */}
      <TestimonialsSlider>
        {testimonialsData.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </TestimonialsSlider>
    </section>
  );
}
