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
                    Triết Lý Nghề Nghiệp:<br />
                    <span className="text-[#0068FF]">Từ Thấu Cảm Con Người đến Chuyển Hóa Tổ Chức.</span>
                  </>
                ) : (
                  <>
                    Professional Philosophy:<br />
                    <span className="text-[#0068FF]">From Human Empathy to Organizational Transformation.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Tư duy cốt lõi định hình mọi chiến dịch: Không biến văn hóa thành khẩu hiệu bề nổi, mà kiến tạo trải nghiệm thực chất nơi con người tìm thấy ý nghĩa và sự gắn kết.'
                : 'Core principles shaping every initiative: Culture is never superficial slogans, but experiential architectures where people discover purpose and genuine belonging.'}
            </p>
          </div>
        </div>

        {/* 1. The Core Belief Chain (Chuỗi Chuyển Hóa Giá Trị) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <HeartHandshake className="w-4 h-4 text-[#0068FF]" />
            <span className="text-xs font-bold font-mono text-[#0068FF] uppercase tracking-wider">
              {lang === 'vi' ? 'Chuỗi giá trị chuyển hóa (Core Belief Chain)' : 'Core Belief Chain'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
            {PHILOSOPHY_CHAIN.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-slate-400 block mb-1">
                    STEP 0{idx + 1}
                  </span>
                  <div className="text-xs font-medium text-slate-500 mb-1">
                    {item.from ? item.from[lang] : ''}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[#0068FF] font-semibold text-xs sm:text-sm">
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.to ? item.to[lang] : ''}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. The Experience Lens (3 Câu Hỏi Thấu Cảm) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Eye className="w-4 h-4 text-[#0068FF]" />
            <span className="text-xs font-bold font-mono text-[#0068FF] uppercase tracking-wider">
              {lang === 'vi' ? 'Lăng kính Trải nghiệm (The Experience Lens)' : 'The Experience Lens'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PHILOSOPHY_QUESTIONS.map((q, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#0068FF]/40 transition-colors"
              >
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] font-mono text-xs font-bold inline-block mb-3">
                  {q.tag ? q.tag[lang] : ''}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3">
                  “{q.question ? q.question[lang] : ''}”
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {q.elaboration ? q.elaboration[lang] : ''}
                </p>
              </div>
            ))}
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
                {pillar.title ? pillar.title[lang] : ''}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description ? pillar.description[lang] : ''}
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
