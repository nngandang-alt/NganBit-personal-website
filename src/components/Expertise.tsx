import React, { useState } from 'react';
import { EXPERTISE_CATEGORIES } from '../data/portfolioData';
import { Language } from '../types';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface ExpertiseProps {
  lang: Language;
}

export const Expertise: React.FC<ExpertiseProps> = ({ lang }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="expertise"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8FAFC] border-b border-slate-200/70 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Lĩnh vực Chuyên môn' : 'Core Expertise'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Năng lực Cốt lõi:<br />
                    <span className="text-[#0068FF]">Chuyên môn hóa từ Chiến lược đến Thực thi.</span>
                  </>
                ) : (
                  <>
                    What I Do:<br />
                    <span className="text-[#0068FF]">From High-level Strategy to Human Execution.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Thiết kế hệ thống và trải nghiệm gắn kết đa tầng — chuyển hóa giá trị tổ chức thành hành vi văn hóa tự nhiên của đội ngũ.'
                : 'Designing multi-layered communication architectures and experiential systems that turn institutional strategy into natural everyday culture.'}
            </p>
          </div>
        </div>

        {/* Creative Agency Style Minimal Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {EXPERTISE_CATEGORIES.map((item, idx) => {
            const isHovered = activeCard === item.id;
            const isAI = item.id === 'exp-10';

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between select-none ${
                  isAI
                    ? 'bg-gradient-to-br from-indigo-950 via-slate-950 to-[#070B14] text-white border-indigo-700/60 shadow-lg col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1'
                    : isHovered
                    ? 'bg-white border-[#0068FF]/50 shadow-xl shadow-slate-200/60 -translate-y-1'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Top Row: Oversized Number & Category Pill */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <span
                    className={`font-mono text-3xl sm:text-4xl font-bold tracking-tighter transition-colors ${
                      isAI
                        ? 'text-indigo-400'
                        : isHovered
                        ? 'text-[#0068FF]'
                        : 'text-slate-300'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                      isAI
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0068FF] transition-colors'
                    }`}
                  >
                    {item.category[lang]}
                  </span>
                </div>

                {/* Center: Title & Description */}
                <div className="flex-1 mb-6">
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight mb-2.5 flex items-center justify-between ${
                      isAI ? 'text-white' : 'text-slate-900 group-hover:text-[#0068FF] transition-colors'
                    }`}
                  >
                    <span>{item.title[lang]}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isHovered ? 'translate-x-0.5 -translate-y-0.5 text-[#0068FF]' : 'opacity-0 text-slate-400'
                      } ${isAI ? 'text-indigo-400 opacity-100' : ''}`}
                    />
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isAI ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.description[lang]}
                  </p>
                </div>

                {/* Bottom: Key Deliverables */}
                <div
                  className={`pt-4 border-t space-y-1.5 ${
                    isAI ? 'border-indigo-900/60' : 'border-slate-100'
                  }`}
                >
                  {item.keyDeliverables[lang].map((deliverable, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-xs"
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isAI ? 'text-indigo-400' : 'text-[#0068FF]'
                        }`}
                      />
                      <span
                        className={`${
                          isAI ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
