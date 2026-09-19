import React from 'react';
import {
  PHILOSOPHY_CHAIN,
  PHILOSOPHY_QUESTIONS,
  PHILOSOPHY_PILLARS,
  PERSONAL_INFO,
} from '../data/portfolioData';
import { Language } from '../types';
import { Sparkles, ArrowRight, HeartHandshake, Eye, Activity } from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  return (
    <section
      id="philosophy"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
            {lang === 'vi' ? 'Triết lý nghề nghiệp' : 'Professional Philosophy'}
          </span>
          <div className="h-px w-12 bg-[#0068FF]/30" />
        </div>

        {/* ============================================================== */}
        {/* PART 1: THE CORE BELIEF CHAIN */}
        {/* COMMUNICATION → UNDERSTANDING → TRUST → CONNECTION → ALIGNMENT → ACTION → CULTURE */}
        {/* ============================================================== */}
        <div className="mb-16 sm:mb-24">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              {lang === 'vi' ? (
                <>
                  Văn hóa không bắt đầu từ quy định.<br />
                  <span className="text-[#0068FF]">Văn hóa bắt đầu từ một chuỗi chuyển hóa.</span>
                </>
              ) : (
                <>
                  Culture doesn’t begin with rules.<br />
                  <span className="text-[#0068FF]">It begins with a human chain of transformation.</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {lang === 'vi'
                ? 'Một niềm tin nghề nghiệp xuyên suốt: Khi truyền thông đủ chân thành và rõ ràng, sự thấu hiểu nảy sinh; từ thấu hiểu tạo ra niềm tin; niềm tin gắn kết con người cùng hướng về mục tiêu chung và chuyển hóa thành thói quen văn hóa sống động.'
                : 'My core operational conviction: Authentic communication cultivates understanding; understanding fosters trust; trust builds deep connection; connection aligns people to strategic action; and repeatable action becomes organizational culture.'}
            </p>
          </div>

          {/* Connected Pathway Diagram (Horizontal on desktop, flex on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-2.5">
            {PHILOSOPHY_CHAIN.map((item, idx) => (
              <div
                key={idx}
                className="relative p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0068FF]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#0068FF] bg-blue-50 px-2 py-0.5 rounded-md">
                    {item.step}
                  </span>
                  {idx < PHILOSOPHY_CHAIN.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-300 group-hover:text-[#0068FF] transition-colors" />
                  )}
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors">
                    {item.name[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 2: THE 3 CORE QUESTIONS (EXPERIENCE & EMOTION LENS) */}
        {/* ============================================================== */}
        <div className="mb-16 sm:mb-20 p-8 sm:p-12 md:p-14 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#F5F8FF] via-white to-slate-50 border border-[#0068FF]/20 relative overflow-hidden">
          
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-xs font-bold text-[#0068FF] uppercase tracking-wider block mb-2">
              {lang === 'vi' ? 'Lăng kính Trải nghiệm & Cảm xúc' : 'The Experience & Emotion Lens'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === 'vi'
                ? 'Không chỉ quan tâm “Chúng ta đã hoàn thành việc gì?”'
                : 'Looking beyond “What did we deliver?”'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              {lang === 'vi'
                ? 'Trong vai trò kiến tạo trải nghiệm và gắn kết, tôi luôn đặt 3 câu hỏi cốt tử sau mỗi sáng kiến:'
                : 'In cultural architecture and experience design, I consistently anchor every initiative around three essential inquiries:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PHILOSOPHY_QUESTIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0068FF] flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.q[lang]}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  {item.detail[lang]}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ============================================================== */}
        {/* PART 3: THREE OPERATING PILLARS */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/70 hover:border-slate-300 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0068FF] flex items-center justify-center mb-4 shadow-2xs">
                {idx === 0 ? <HeartHandshake className="w-5 h-5" /> : idx === 1 ? <Eye className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {pillar.title[lang]}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc[lang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
