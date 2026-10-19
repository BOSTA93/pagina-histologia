import React from 'react';

interface ProofMarqueeSectionProps {
  images?: string[];
}

export const ProofMarqueeSection: React.FC<ProofMarqueeSectionProps> = ({ images }) => {
  // 4 photos of students and professionals using Histology Visual Maps
  const photoList = images && images.length > 0 ? images : [
    '/histologia/proof1.png',
    '/histologia/proof2.png',
    '/histologia/proof3.png',
    '/histologia/proof4.png',
  ];

  // Repeated for seamless infinite continuous loop
  const loopImages = [...photoList, ...photoList, ...photoList, ...photoList];

  return (
    <section className="py-14 sm:py-18 bg-white overflow-hidden border-b border-slate-100">
      <div className="marquee-container py-2">
        <div className="marquee-track flex gap-6 px-3">
          {loopImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="w-[300px] sm:w-[400px] md:w-[460px] h-[260px] sm:h-[340px] md:h-[390px] shrink-0 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-slate-200/90 bg-slate-50 group hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Estudantes e profissionais utilizando os Mapas Visuais de Histologia ${(index % 4) + 1}`}
                width={480}
                height={480}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
