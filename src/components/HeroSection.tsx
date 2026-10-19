import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  highlightWord: string;
  description: string;
  ctaText: string;
  mockupImage: string;
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightWord,
  description,
  mockupImage,
  onCtaClick,
}) => {
  const checklistItems = [
    'Mais de 200 mapas visuais de Histologia',
    'Conteúdo organizado em 16 módulos',
    'Micrografias e estruturas destacadas',
    'Comparações entre tecidos e órgãos',
    'Revisões “Não confunda”',
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden text-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/15 blur-[100px] pointer-events-none rounded-full" />

      {/* 1. Main Title */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f2937] tracking-tight leading-[1.18]">
          {title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 underline decoration-sky-400 decoration-wavy decoration-2">
            {highlightWord}
          </span>
        </h1>
      </div>

      {/* 2. Mockup Showcase - placed strictly BETWEEN Title and Description */}
      <div className="mt-6 mb-6 relative flex justify-center items-center">
        <div className="relative group max-w-2xl w-full px-2">
          <img
            src={mockupImage}
            alt="Mockup do material"
            width={900}
            height={600}
            className="w-full h-auto object-contain drop-shadow-2xl animate-mockup transition-transform duration-300 group-hover:scale-[1.02]"
            loading="eager"
          />
        </div>
      </div>

      {/* 3. Description - placed below mockup */}
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* 4. Exactly Image 4: Checklist, Button, and Delivery Channels */}
      <div className="max-w-xl mx-auto text-left space-y-7">
        {/* Checklist with circular green checks */}
        <div className="space-y-3.5 sm:space-y-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white mt-0.5 shadow-xs">
                <Check className="size-3.5 stroke-[3.5]" />
              </span>
              <span className="text-sm sm:text-base font-bold text-[#0f2937] leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={onCtaClick}
            type="button"
            className="w-full py-4 sm:py-4.5 px-8 rounded-full text-white font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-lg hover:shadow-xl bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer animate-cta-pulse"
          >
            <span>QUERO ACESSAR AGORA</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Delivery reassurance - exactly matching Image 3 */}
        <div className="text-center pt-1 space-y-2">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Você recebe tudo na hora, direto no seu
          </p>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            {/* WhatsApp Icon + Text */}
            <span className="inline-flex items-center gap-1.5 font-bold text-[#0f2937]">
              <svg className="w-5 h-5 shrink-0 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.582 1.83.89 2.806.89 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.767-5.768zm3.385 8.163c-.145.411-.744.757-1.026.786-.279.03-.642.143-2.072-.455-1.724-.72-2.833-2.477-2.919-2.592-.086-.115-.698-.929-.698-1.773 0-.844.442-1.258.599-1.431.157-.172.344-.216.458-.216.115 0 .229.001.329.006.105.005.247-.04.386.294.145.348.498 1.216.541 1.304.043.088.072.19.014.305-.058.115-.086.187-.172.287-.086.1-.182.224-.26.3-.086.084-.176.176-.076.348.1.172.443.731.951 1.184.654.583 1.206.764 1.378.85.172.086.273.072.373-.043.1-.115.429-.501.544-.673.115-.172.229-.143.386-.086.157.057.994.469 1.166.555.172.086.287.129.329.201.043.072.043.416-.102.827zM12 2C6.477 2 2 6.477 2 12c0 1.819.488 3.526 1.339 5.002L2 22l5.127-1.314A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              <span>WhatsApp</span>
            </span>

            <span className="text-slate-600 font-normal">e no seu</span>

            {/* Gmail Icon + Text */}
            <span className="inline-flex items-center gap-1.5 font-bold text-[#0f2937]">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22 6.5l-10 7.5L2 6.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5z"/>
                <path fill="#34A853" d="M22 6.5V6c0-1.1-.9-2-2-2h-3l-5 4-5-4H4c-1.1 0-2 .9-2 2v.5l10 7.5 10-7.5z"/>
                <path fill="#EA4335" d="M2 6l10 7.5L22 6"/>
                <path fill="#FBBC05" d="M2 6v2l10 7.5L22 8V6z" opacity="0.3"/>
              </svg>
              <span>e-mail</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
