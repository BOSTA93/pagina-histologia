import React from 'react';
import { BenefitItem } from '../data/pageContent';
import { Check, ArrowRight } from 'lucide-react';

interface IdealForSectionProps {
  title: string;
  items: BenefitItem[];
  onCtaClick?: () => void;
}

export const IdealForSection: React.FC<IdealForSectionProps> = ({ title, items, onCtaClick }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f9ff] border-y border-sky-100/70">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2937] leading-tight">
          {title}
        </h2>
      </div>

      {/* 2 cards per row, all elements centered inside each card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl bg-white border border-sky-100 shadow-[var(--shadow-soft)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Centered Check Icon */}
            <span className="flex size-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-xs mx-auto">
              <Check className="size-4 stroke-[3.5]" />
            </span>

            {/* Centered Title */}
            <h3 className="font-bold text-lg text-[#0f2937] mt-4 text-center">
              {item.title}
            </h3>

            {/* Centered Description */}
            <p className="text-sm text-slate-500 mt-2 text-center leading-relaxed max-w-sm mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Centered CTA button below cards */}
      {onCtaClick && (
        <div className="pt-10 flex justify-center text-center">
          <button
            onClick={onCtaClick}
            type="button"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 hover:brightness-105 active:scale-98 text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer animate-cta-pulse text-center"
          >
            <span>Quero acessar agora</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      )}
    </section>
  );
};
