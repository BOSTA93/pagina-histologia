import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PainCalloutSectionProps {
  question: string;
  urgencyText: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const PainCalloutSection: React.FC<PainCalloutSectionProps> = ({
  question,
  urgencyText,
  onCtaClick,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#073b5c] text-white text-center relative overflow-hidden">
      {/* Subtle angled background texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {question}
        </h2>

        <p className="text-[#38bdf8] font-bold text-base sm:text-lg tracking-wide">
          {urgencyText}
        </p>

        <div className="pt-2">
          <button
            onClick={onCtaClick}
            type="button"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-white text-[#0f2937] hover:bg-slate-100 font-extrabold text-base sm:text-lg shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer"
          >
            <span>Quero acessar agora</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
