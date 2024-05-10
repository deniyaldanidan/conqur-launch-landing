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
    <div className="embla__slide relative flex flex-col gap-y-4 py-8 px-6 rounded-2xl shadow-lg bg-high-sec-bg">
      <p className="text-base">{t.testimonial}</p>
      <div className="flex flex-col gap-y-0.5">
        <h4 className="text-base font-bold">{t.name}</h4>
        <h5 className="text-base font-semibold">{t.work_title}</h5>
      </div>
      <div className="text-lg absolute top-0 left-6 flex w-fit h-fit p-2.5 bg-accent rounded-full -translate-y-1/2">
        <QuoteIcon />
      </div>
    </div>
  );
}
