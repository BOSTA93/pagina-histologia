import React, { useEffect } from 'react';
import { X, Check, Zap, ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onContinueBasic: () => void;
  mockupImage: string;
  items: string[];
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onContinueBasic,
  mockupImage,
  items,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-sky-500 my-auto p-5 sm:p-7 text-center transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer z-10"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Special Offer Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>OPORTUNIDADE ÚNICA • LEVE O COMPLETO</span>
        </div>

        {/* Headline */}
        <h3 className="text-xl sm:text-2xl font-black text-[#0f2937] leading-tight">
          Espere! Que tal levar o <span className="text-sky-600 underline decoration-sky-400 decoration-wavy decoration-2">PACOTE COMPLETO</span> por apenas{' '}
          <span className="text-emerald-600">R$ 22,90</span>?
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Por apenas <strong>R$ 5,00 a mais</strong>, você desbloqueia todos os 16 módulos, micrografias completas e todos os 4 bônus exclusivos de Histologia!
        </p>

        {/* Mockup Preview */}
        <div className="max-w-[190px] mx-auto my-3">
          <img
            src={mockupImage}
            alt="Pacote Completo de Histologia"
            className="w-full h-auto object-contain drop-shadow-md mx-auto"
          />
        </div>

        {/* Checklist: Everything Included with bonuses */}
        <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-3.5 sm:p-4 text-left max-h-[220px] overflow-y-auto space-y-2 mb-4 scrollbar-thin">
          <p className="text-xs font-extrabold text-sky-950 uppercase tracking-wider mb-2">
            TUDO O QUE VOCÊ VAI RECEBER:
          </p>
          {items.map((item, idx) => {
            const isBonus = item.includes('Bônus');
            return (
              <div key={idx} className="flex items-start gap-2">
                <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white mt-0.5 shadow-xs">
                  <Check className="size-3 stroke-[3.5]" />
                </span>
                <span
                  className={`text-xs leading-snug ${
                    isBonus ? 'text-sky-900 font-bold' : 'text-slate-700 font-medium'
                  }`}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>

        {/* Price & Savings */}
        <div className="mb-4">
          <p className="text-xs text-slate-500">
            De <span className="line-through text-red-500 font-bold">R$ 57,90</span> por apenas:
          </p>
          <p className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight my-0.5">
            R$ 22,90
          </p>
          <span className="inline-block bg-[#e0f2fe] text-sky-800 text-xs font-extrabold px-3 py-1 rounded-full border border-sky-200 mt-1">
            ⚡ Economia total de R$ 35,00
          </span>
        </div>

        {/* Main Upgrade Button */}
        <button
          onClick={onAcceptUpgrade}
          type="button"
          className="w-full py-4 px-6 rounded-full text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer animate-cta-pulse"
        >
          <span>SIM! QUERO O PACOTE COMPLETO POR R$ 22,90</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Decline Link: Continue with basic R$ 17,90 */}
        <div className="mt-3">
          <button
            onClick={onContinueBasic}
            type="button"
            className="text-xs text-slate-500 hover:text-slate-800 hover:underline transition-colors cursor-pointer py-1"
          >
            Não, prefiro continuar com o Pacote Básico por R$ 17,90
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-4 pt-3 flex items-center justify-center gap-4 text-[10px] text-slate-500 border-t border-slate-100">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Compra Segura</span>
          </span>
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-slate-400" />
            <span>Garantia 7 Dias</span>
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-slate-400" />
            <span>Acesso Imediato</span>
          </span>
        </div>
      </div>
    </div>
  );
};
