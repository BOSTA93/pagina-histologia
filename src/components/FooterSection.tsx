import React from 'react';

interface FooterSectionProps {
  copyright: string;
  disclaimer1: string;
  disclaimer2: string;
  disclaimer3: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  copyright,
  disclaimer1,
  disclaimer2,
  disclaimer3,
}) => {
  return (
    <footer className="px-6 py-14 text-center text-slate-300 bg-[#071f30] border-t border-sky-950">
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="font-bold text-white text-sm sm:text-base">{copyright}</p>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
          <p>{disclaimer1}</p>
          <p>{disclaimer2}</p>
          <p className="text-[11px] text-slate-400/90 leading-relaxed">{disclaimer3}</p>
        </div>
      </div>
    </footer>
  );
};
