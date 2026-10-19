import React from 'react';
import { BonusItem } from '../data/pageContent';
import { Gift } from 'lucide-react';

interface BonusesSectionProps {
  preTitle: string;
  title: string;
  badge: string;
  items: BonusItem[];
  onCtaClick?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({
  preTitle,
  title,
  badge,
  items,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f9ff] border-y border-sky-100/70 text-center">
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase">
          {preTitle}
        </p>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0f2937] tracking-tight mt-1">
          {title}
        </h2>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073b5c] text-white font-extrabold text-xs tracking-wider shadow-sm">
          <Gift className="w-4 h-4 text-amber-400" />
          <span>{badge.replace('🎁 ', '')}</span>
        </div>
      </div>

      <div className="max-w-xl mx-auto space-y-10">
        {items.map((bonus) => (
          <div
            key={bonus.id}
            className="relative bg-white rounded-3xl border-2 border-dashed border-sky-400 p-6 sm:p-8 text-center shadow-sm"
          >
            {/* Top Centered Pill Badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#073b5c] text-sky-300 font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow">
              BÔNUS #{bonus.number}
            </span>

            {/* 3D Mockup Cover */}
            <div className="max-w-[240px] sm:max-w-[270px] mx-auto my-3">
              <img
                src={bonus.image}
                alt={bonus.title}
                className="w-full h-auto object-contain drop-shadow-md mx-auto"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h3 className="font-extrabold text-lg sm:text-xl text-[#0f2937] leading-snug">
              {bonus.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed max-w-md mx-auto">
              {bonus.description}
            </p>

            {/* Value / Grátis Pill */}
            <div className="mt-5">
              <span className="inline-block bg-[#e0f2fe] text-sky-800 text-xs font-bold px-4 py-1.5 rounded-full border border-sky-200">
                Valor: <span className="line-through text-slate-400">{bonus.value}</span> <strong className="text-sky-700 ml-1">GRÁTIS</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
