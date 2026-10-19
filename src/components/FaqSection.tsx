import React, { useState } from 'react';
import { FaqItem } from '../data/pageContent';
import { Plus, Minus } from 'lucide-react';

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ title, items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2937]">
          {title}
        </h2>
      </div>

      <div className="space-y-3.5">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl transition-all duration-200 border border-slate-200/90 bg-white shadow-xs overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-[#0f2937] text-sm sm:text-base leading-snug">
                  {item.question}
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen
                      ? 'bg-sky-100 text-sky-800'
                      : 'bg-sky-50 text-sky-700'
                  }`}
                >
                  {isOpen ? (
                    <Minus className="size-4 stroke-[2.5]" />
                  ) : (
                    <Plus className="size-4 stroke-[2.5]" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-100">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
