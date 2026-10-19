import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface GuaranteeSectionProps {
  days?: number;
  title?: string;
  description?: string;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  days = 7,
  title = 'Garantia de 7 dias',
  description = 'Você pode acessar o material e avaliar se ele atende às suas necessidades. Caso não seja o que esperava, solicite o reembolso dentro do prazo informado na plataforma.',
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-xl rounded-3xl bg-white px-8 py-10 text-center shadow-[var(--shadow-card)] border border-emerald-100">
        {/* Seal */}
        <div className="mx-auto size-24 rounded-full bg-emerald-50 border-4 border-emerald-500/20 flex flex-col items-center justify-center text-emerald-600 mb-6 shadow-xs">
          <ShieldCheck className="size-10 stroke-[2]" />
          <span className="text-[10px] font-black uppercase tracking-wider">{days} Dias</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2937] uppercase">
          {title}
        </h2>

        {/* Description from user copy */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};
