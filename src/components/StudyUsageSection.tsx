import React from 'react';
import { UsageMode } from '../data/pageContent';
import { Smartphone, Laptop, Clock, Printer, Users, Microscope } from 'lucide-react';

interface StudyUsageSectionProps {
  title: string;
  items: UsageMode[];
}

export const StudyUsageSection: React.FC<StudyUsageSectionProps> = ({ title, items }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="size-6 text-emerald-600" />;
      case 'Laptop':
        return <Laptop className="size-6 text-emerald-600" />;
      case 'Clock':
        return <Clock className="size-6 text-emerald-600" />;
      case 'Printer':
        return <Printer className="size-6 text-emerald-600" />;
      case 'Users':
        return <Users className="size-6 text-emerald-600" />;
      case 'Microscope':
      default:
        return <Microscope className="size-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2937] mb-10">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all text-center group"
            >
              <div className="size-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {getIcon(item.iconName)}
              </div>
              <p className="font-bold text-sm sm:text-base text-[#0f2937] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
