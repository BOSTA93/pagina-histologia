import React from 'react';
import { PricingPlan } from '../data/pageContent';
import { Check, ArrowRight, ChevronDown, ShieldCheck, Award, Download, Zap } from 'lucide-react';

interface PricingSectionProps {
  urgencyBanner: string;
  title: string;
  basicPlan: PricingPlan;
  completePlan: PricingPlan;
  paymentMethodsImage: string;
  onSelectPlan?: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  urgencyBanner,
  title,
  basicPlan,
  completePlan,
  onSelectPlan,
}) => {
  const today = new Date().toLocaleDateString('pt-BR');
  const formattedUrgency = urgencyBanner.replace('{today}', today);

  const handlePlanClick = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan.id);
    }
  };

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center scroll-mt-10 relative">
      <div id="oferta" className="absolute -top-10 left-0" />
      {/* Top Urgency Header */}
      <div className="mb-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#073b5c] text-sky-300 font-extrabold text-xs tracking-wide">
          <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{formattedUrgency.replace('⚡ ', '')}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2937]">
          {title}
        </h2>
      </div>

      <div className="max-w-xl mx-auto space-y-8">
        {/* 1. PACOTE BÁSICO CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm text-center">
          <h3 className="text-xl sm:text-2xl font-black text-[#0f2937]">
            {basicPlan.name}
          </h3>

          {/* Mockup */}
          <div className="max-w-[200px] mx-auto my-4">
            <img
              src="/histologia/mockup_principal.png"
              alt="Pacote Básico"
              className="w-full h-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            VOCÊ RECEBE:
          </p>

          {/* Checklist */}
          <div className="space-y-3 text-left max-w-md mx-auto mb-6">
            {basicPlan.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white mt-0.5 shadow-xs">
                  <Check className="size-3.5 stroke-[3.5]" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#0f2937]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="pt-2 pb-5 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              De <span className="line-through text-red-500 font-bold">{basicPlan.originalPrice}</span> por:
            </p>
            <p className="text-4xl sm:text-5xl font-black text-sky-600 tracking-tight my-1">
              {basicPlan.currentPrice}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {basicPlan.installmentText}
            </p>
            <div className="mt-3">
              <span className="inline-block bg-[#e0f2fe] text-sky-800 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                {basicPlan.savingsText}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={() => handlePlanClick(basicPlan)}
            className="w-full py-4 px-6 rounded-full border-2 border-slate-700 bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
          >
            <span>{basicPlan.ctaText}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Trust badges */}
          <div className="mt-4 pt-3 flex items-center justify-center gap-4 text-[10px] text-slate-500 border-t border-slate-50">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Compra Segura</span>
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-slate-400" />
              <span>Garantia 7 Dias</span>
            </span>
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>Acesso Imediato</span>
            </span>
          </div>
        </div>

        {/* 2. CALLOUT BETWEEN PLANS */}
        <div className="bg-[#073b5c] text-white py-3 px-6 rounded-full inline-flex flex-col items-center justify-center gap-1 shadow-md">
          <span className="text-xs sm:text-sm font-bold">
            92% das pessoas aproveitam a oferta completa
          </span>
          <ChevronDown className="w-4 h-4 text-sky-400 animate-bounce" />
        </div>

        {/* 3. PACOTE COMPLETO CARD (HIGHLIGHTED) */}
        <div className="relative bg-white rounded-3xl border-2 border-sky-500 p-6 sm:p-8 shadow-xl text-center">
          {/* Top Pill Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-500 text-white font-black text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
            ⚡ MAIS VENDIDO
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#0f2937] mt-2">
            {completePlan.name}
          </h3>

          {/* 3x mais conteúdos banner */}
          <div className="mt-3 inline-block bg-[#0284c7] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xs">
            ⚡ 3x mais conteúdos
          </div>

          {/* Full Mockup */}
          <div className="max-w-[240px] mx-auto my-4">
            <img
              src="/histologia/mockup_principal.png"
              alt="Pacote Completo"
              className="w-full h-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>

          {/* Checklist */}
          <div className="space-y-3 text-left max-w-md mx-auto mb-6">
            {completePlan.items.map((item, idx) => {
              const isBonus = item.includes('Bônus');
              return (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3.5]" />
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-semibold leading-snug ${
                      isBonus ? 'text-sky-800 font-bold' : 'text-[#0f2937]'
                    }`}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Price */}
          <div className="pt-2 pb-5 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              De <span className="line-through text-red-500 font-bold">{completePlan.originalPrice}</span> por:
            </p>
            <p className="text-4xl sm:text-5xl font-black text-sky-600 tracking-tight my-1">
              {completePlan.currentPrice}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {completePlan.installmentText}
            </p>
            <div className="mt-3">
              <span className="inline-block bg-[#e0f2fe] text-sky-800 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                {completePlan.savingsText}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={() => handlePlanClick(completePlan)}
            className="w-full py-4.5 px-6 rounded-full bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 hover:brightness-105 active:scale-98 text-white font-extrabold text-base uppercase tracking-wider shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all animate-cta-pulse"
          >
            <span>{completePlan.ctaText}</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Trust badges */}
          <div className="mt-4 pt-3 flex items-center justify-center gap-4 text-[10px] text-slate-500 border-t border-slate-50">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Compra Segura</span>
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-slate-400" />
              <span>Garantia 7 Dias</span>
            </span>
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>Acesso Imediato</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
