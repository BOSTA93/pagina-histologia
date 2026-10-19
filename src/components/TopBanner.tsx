import React from 'react';

interface TopBannerProps {
  text: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({ text }) => {
  // Format today's date in pt-BR: DD/MM/YYYY
  const today = new Date().toLocaleDateString('pt-BR');
  const formattedText = text.replace('{today}', today);

  return (
    <div className="relative w-full bg-[#dc2626] text-white py-2 px-3 text-center font-bold tracking-tight shadow-xs overflow-hidden">
      <div className="flex items-center justify-center gap-1.5 whitespace-nowrap text-[11px] sm:text-xs md:text-sm max-w-full">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span className="truncate">{formattedText}</span>
      </div>
    </div>
  );
};
