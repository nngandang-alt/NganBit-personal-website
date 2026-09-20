import React from 'react';
import {
  PHILOSOPHY_CHAIN,
  PHILOSOPHY_QUESTIONS,
  PHILOSOPHY_PILLARS,
} from '../data/portfolioData';
import { Language } from '../types';
import { ArrowRight, HeartHandshake, Eye, Activity } from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ lang, onNavigateNext }) => {
  return (
    <section
      id="philosophy"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70 relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? '03 — Triết lý Nghề nghiệp' : '03 — Professional Philosophy'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Triết Lý Làm Nghề:<br />
                    <span className="text-[#0068FF]">Từ Thấu Hiểu Con Người đến Chuyển Hóa Tổ Chức.</span>
                  </>
                ) : (
                  <>
                    Professional Philosophy:<br />
                    <span className="text-[#0068FF]">From Human Insight to Cultural Alignment.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Truyền thông nội bộ không đơn thuần là phát đi thông điệp. Đó là quá trình gieo nhận thức, nuôi dưỡng niềm tin và kiến tạo những hành vi văn hóa tự nguyện.'
                : 'Internal communication is never just message transmission. It is an intentional progression from shared understanding to intrinsic cultural action.'}
            </p>
          </div>
        </div>

        {/* 1. Belief Chain: 7-step progression */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {lang === 'vi' ? 'Chuỗi chuyển hóa giá trị (Belief Chain)' : 'The Belief Chain (Value Progression)'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
            {PHILOSOPHY_CHAIN.map((step, idx) => (
              <div
                key={step.step}
                className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  idx === PHILOSOPHY_CHAIN.length - 1
                    ? 'bg-blue-50/80 border-[#0068FF]/30 text-[#0068FF]'
                    : 'bg-[#F8FAFC] border-slate-200/80 text-slate-700 hover:bg-white hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#0068FF]">
                      0{step.step}
                    </span>
                    {idx < PHILOSOPHY_CHAIN.length - 1 && (
                      <span className="text-slate-300 text-xs hidden lg:inline">→</span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">
                    {step.title[lang]}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  {step.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Experience & Emotion Lens (Inside Philosophy) */}
        <div className="mb-14 sm:mb-20 p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0068FF] block mb-2">
              {lang === 'vi' ? 'Lăng kính Trải nghiệm & Cảm xúc (Experience & Emotion Lens)' : 'The Experience & Emotion Lens'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {lang === 'vi'
                ? 'Mỗi chiến dịch hay sự kiện văn hóa đều được soi chiếu qua 3 câu hỏi cốt tử:'
                : 'Every campaign or ceremonial initiative is tested through 3 defining questions:'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PHILOSOPHY_QUESTIONS.map((q, idx) => {
              const icons = [HeartHandshake, Eye, Activity];
              const IconComponent = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068FF] flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#0068FF] uppercase tracking-wider block mb-1">
                      {q.tag[lang]}
                    </span>
                    <h4 className="font-bold text-base text-slate-900 leading-snug mb-2">
                      “{q.question[lang]}”
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 pt-3 border-t border-slate-100">
                    {q.elaboration[lang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Three Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-mono font-bold text-xs flex items-center justify-center mb-4">
                0{idx + 1}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2">
                {pillar.title[lang]}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: CASE STUDIES TIÊU BIỂU' : 'NEXT: SELECTED CASE STUDIES'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
