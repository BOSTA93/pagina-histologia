import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  title: string;
  ctaText: string;
  onCtaClick: () => void;
}

const testimonialImages = [
  {
    src: '/__l5e/assets-v1/6f515bfe-d45c-41e5-b859-167f0056163e/g5UVONG-916.webp',
    alt: 'Depoimento de cliente 1',
  },
  {
    src: '/__l5e/assets-v1/543b23b6-a73b-4c83-8c10-8e058efc4f38/rreZPtV-916.webp',
    alt: 'Depoimento de cliente 2',
  },
  {
    src: '/__l5e/assets-v1/1b2dc4db-7ba5-46d0-8681-edd8b9d54636/ykG2WoW-916.webp',
    alt: 'Depoimento de cliente 3',
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  ctaText,
  onCtaClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic carousel rotation
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f9ff] border-y border-sky-100/70 text-center">
      {/* Title */}
      <div className="max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2937] leading-tight">
          {title}
        </h2>
      </div>

      {/* Automatic Carousel with Real Testimonial Images */}
      <div
        className="mx-auto max-w-[280px] sm:max-w-[320px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] border border-slate-200/80">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialImages.map((item, idx) => (
              <div key={idx} className="w-full shrink-0 bg-white">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={450}
                  height={800}
                  className="h-auto w-full shrink-0 object-contain block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="flex size-10 items-center justify-center rounded-full bg-white text-[#0f2937] shadow-[var(--shadow-soft)] hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-pointer border border-slate-100"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {testimonialImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Depoimento ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'h-2 w-7 bg-[#0f2937]'
                    : 'size-2 bg-[#0f2937]/25 hover:bg-[#0f2937]/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="flex size-10 items-center justify-center rounded-full bg-white text-[#0f2937] shadow-[var(--shadow-soft)] hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-pointer border border-slate-100"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Centered CTA button below */}
      <div className="mt-10 text-center">
        <button
          onClick={onCtaClick}
          type="button"
          className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 hover:brightness-105 active:scale-98 text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer animate-cta-pulse uppercase tracking-wide"
        >
          <span>{ctaText || 'Quero meu acesso agora'}</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};
