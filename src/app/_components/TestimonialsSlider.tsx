"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{children}</div>
    </div>
  );
}
