import QuoteIcon from "../_assets/QuoteIcon";

type props = {
  t: {
    id: number;
    testimonial: string;
    name: string;
    work_title: string;
  };
};

export default function TestimonialCard({ t }: props) {
  return (
    <section
      className="embla__slide relative flex flex-col gap-y-4 py-8 px-6 rounded-2xl shadow-lg bg-high-sec-bg"
      aria-label={`Testimonial ${t.id}`}
    >
      <p className="text-base" aria-label="early user's testimonial">
        {t.testimonial}
      </p>
      <div className="flex flex-col gap-y-0.5">
        <p className="text-base font-bold" aria-label="early user's name">
          {t.name}
        </p>
        <p
          className="text-base font-semibold"
          aria-label="early user's work title"
        >
          {t.work_title}
        </p>
      </div>
      <div className="text-lg absolute top-0 left-6 flex w-fit h-fit p-2.5 bg-accent rounded-full -translate-y-1/2">
        <QuoteIcon aria-hidden />
      </div>
    </section>
  );
}
