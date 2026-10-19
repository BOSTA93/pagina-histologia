import React from 'react';
import { Check, Zap } from 'lucide-react';

interface EverythingIncludedProps {
  title: string;
  badge: string;
  description: string;
  mockupImage: string;
  bullets: string[];
}

export const EverythingIncludedSection: React.FC<EverythingIncludedProps> = ({
  title,
  mockupImage,
  description,
  bullets,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center bg-white">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2937]">
        {title}
      </h2>

      {/* Mockup Image */}
      <div className="mt-8 mb-4 max-w-sm mx-auto">
        <img
          src={mockupImage}
          alt="Atlas Visual +200 Mapas Visuais de Histologia"
          className="w-full h-auto object-contain drop-shadow-xl hover:scale-102 transition-transform duration-300 mx-auto"
          loading="lazy"
        />
      </div>

      {/* Sky Blue Pill Badge */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-600 text-white font-black text-xs uppercase tracking-wider shadow-sm mb-6">
        <Zap className="w-3.5 h-3.5 fill-current" />
        <span>ACESSO IMEDIATO</span>
      </div>

      {/* Text */}
      <div className="max-w-xl mx-auto space-y-2 mb-8">
        <h3 className="font-extrabold text-xl text-[#0f2937]">
          Tudo foi organizado para ser simples e fácil de usar.
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Checklist matching screenshot */}
      <div className="max-w-xl mx-auto text-left space-y-3.5">
        {bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white mt-0.5 shadow-xs">
              <Check className="size-3.5 stroke-[3.5]" />
            </span>
            <span className="text-sm font-semibold text-[#0f2937] leading-snug">
              {bullet}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
