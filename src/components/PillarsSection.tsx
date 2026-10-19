import React from 'react';
import { Copy, ListTree, Image as ImageIcon, Folder, ArrowRight } from 'lucide-react';

interface PillarsSectionProps {
  onCtaClick: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onCtaClick }) => {
  const pillars = [
    {
      id: 'p1',
      title: 'Micrografias com pontos de identificação',
      description:
        'As estruturas mais importantes são destacadas diretamente na imagem para facilitar o reconhecimento',
      icon: <ImageIcon className="size-5 stroke-[2.2]" />,
    },
    {
      id: 'p2',
      title: 'Comparações objetivas',
      description:
        'Diferencie estruturas parecidas por critérios visuais, como camadas, matriz, formato celular e localização',
      icon: <ListTree className="size-5 stroke-[2.2]" />,
    },
    {
      id: 'p3',
      title: 'Organização por módulos',
      description:
        'O conteúdo segue uma sequência progressiva: fundamentos, tecidos, órgãos e revisões cumulativas para prova.',
      icon: <Folder className="size-5 stroke-[2.2]" />,
    },
    {
      id: 'p4',
      title: 'Leitura visual rápida',
      description:
        'Cada mapa apresenta uma ideia central, poucos conceitos-chave e uma sequência simples de revisão',
      icon: <Copy className="size-5 stroke-[2.2]" />,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2937] leading-tight">
          Os Mapas Visuais de Histologia possuem:
        </h2>
      </div>

      {/* 2 Cards per row with all elements strictly centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="rounded-2xl bg-white p-7 text-center shadow-[var(--shadow-card)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            {/* Centered Circular Icon Container */}
            <span className="flex size-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-xs mx-auto">
              {pillar.icon}
            </span>

            {/* Centered Card Title */}
            <h3 className="mt-5 font-bold text-lg text-[#0f2937] group-hover:text-sky-700 transition-colors text-center">
              {pillar.title}
            </h3>

            {/* Centered Description */}
            <p className="mt-3 text-sm text-slate-500 leading-relaxed text-center max-w-xs mx-auto">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Sub-heading and CTA Button */}
      <div className="mt-12 text-center space-y-5">
        <p className="text-lg sm:text-xl font-bold text-[#0f2937] max-w-2xl mx-auto">
          Material de consulta rápida para estudar Histologia com mais clareza e menos releitura passiva
        </p>

        <div className="flex justify-center">
          <button
            onClick={onCtaClick}
            type="button"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-7 sm:px-9 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 hover:brightness-105 active:scale-98 transition-all cursor-pointer animate-cta-pulse"
          >
            <span>Eu quero os +200 Mapas Visuais</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
