import React from 'react';
import { VERIFIED_STATS } from '../data/portfolioData';
import { Language } from '../types';
import { ShieldCheck } from 'lucide-react';

interface ImpactStatsProps {
  lang: Language;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ lang }) => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Sub-header badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0068FF]" />
            <span>{lang === 'vi' ? 'Chỉ số được xác thực (Verified Metrics with Context)' : 'Verified Metrics with Context'}</span>
          </span>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VERIFIED_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0068FF]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#0068FF] tracking-tight font-mono block mb-2">
                  {stat.value}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-2">
                  {stat.label[lang]}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-200/60 mt-2">
                {stat.context[lang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
