import React from 'react';
import { MapItem } from '../data/pageContent';
import { ZoomIn } from 'lucide-react';

interface MapCarouselProps {
  title: string;
  subtitle: string;
  items: MapItem[];
  onSelectMap: (item: MapItem) => void;
}

export const MapCarousel: React.FC<MapCarouselProps> = ({
  title,
  subtitle,
  items,
  onSelectMap,
}) => {
  // Duplicate items for continuous seamless loop
  const duplicatedItems = items.length <= 4
    ? [...items, ...items, ...items, ...items]
    : [...items, ...items];

  return (
    <section className="py-16 bg-[#f0f9ff] border-y border-sky-100/80 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2937] leading-tight">
          {title}
          <br />
          <span className="text-sky-600 font-extrabold">{subtitle}</span>
        </h2>
      </div>

      {/* Infinite Marquee Track */}
      <div className="marquee-container py-2">
        <div className="marquee-track flex gap-6 px-3">
          {duplicatedItems.map((map, idx) => (
            <div
              key={`${map.id}-${idx}`}
              onClick={() => onSelectMap(map)}
              className="group relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[565/800] shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-white"
            >
              <img
                src={map.thumb}
                alt={map.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                loading="lazy"
              />
              {/* Sleek hover overlay */}
              <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2.5 text-white font-semibold text-sm backdrop-blur-[2px] p-5 text-center">
                <span className="flex size-11 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg">
                  <ZoomIn className="w-5 h-5" />
                </span>
                <span className="font-extrabold text-base sm:text-lg drop-shadow-md leading-tight text-white">
                  {map.title}
                </span>
                {map.subtitle && (
                  <span className="text-xs text-sky-200/90 leading-snug max-w-[220px]">
                    {map.subtitle}
                  </span>
                )}
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-sky-300">
                  Clique para ampliar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
