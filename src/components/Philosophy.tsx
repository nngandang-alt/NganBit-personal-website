import React from 'react';
import {
  PHILOSOPHY_CHAIN,
  PHILOSOPHY_QUESTIONS,
  PHILOSOPHY_PILLARS,
} from '../data/portfolioData';
import { Language } from '../types';
import { ArrowRight, HeartHandshake, Eye, Sparkles, ShieldCheck, ArrowUpRight, Compass } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        
        {/* ============================================================== */}
        {/* A. PHILOSOPHY HERO */}
        {/* ============================================================== */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
              {lang === 'vi' ? '03 — Triết lý Nghề nghiệp' : '03 — Professional Philosophy'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Văn hóa không bắt đầu từ quy định.<br />
                    <span className="text-[#0068FF]">Văn hóa bắt đầu từ một chuỗi chuyển hóa.</span>
                  </>
                ) : (
                  <>
                    Culture doesn't start with rules.<br />
                    <span className="text-[#0068FF]">Culture begins with a chain of transformation.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Một tổ chức không thể ép buộc con người phải gắn kết. Sự đồng lòng và bản sắc chỉ hình thành khi mỗi điểm chạm truyền thông nuôi dưỡng sự thấu cảm, tạo dựng niềm tin và chuyển hóa tự nhiên thành hành động.'
                : 'Engagement cannot be mandated. Organizational identity flourishes only when communication touchpoints nurture empathy, build psychological trust, and organically transform conviction into everyday action.'}
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* B. CORE BELIEF / TRANSFORMATION CHAIN (01 -> 07 Horizontal Journey) */}
        {/* ============================================================== */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm relative overflow-hidden">
          {/* Subtle background tech line */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/70">
            <div className="flex items-center gap-2.5">
              <HeartHandshake className="w-5 h-5 text-[#0068FF]" />
              <div>
                <span className="text-xs font-bold font-mono text-[#0068FF] uppercase tracking-wider block">
                  {lang === 'vi' ? 'Xương sống Triết lý · Chuỗi Chuyển Hóa Giá Trị' : 'Core Belief · Transformation Chain'}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {lang === 'vi' ? 'Tiến trình chuyển hóa hữu cơ từ Thông điệp ban đầu đến Bản sắc Tổ chức' : 'Organic progression from initial message to living institutional culture'}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400 hidden sm:inline-block">
              01 → 07
            </span>
          </div>

          {/* DESKTOP: SINGLE-ROW CONTINUOUS HORIZONTAL JOURNEY */}
          <div className="hidden lg:grid grid-cols-7 gap-3 relative">
            {PHILOSOPHY_CHAIN.map((item, idx) => {
              const isLast = idx === PHILOSOPHY_CHAIN.length - 1;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between relative group ${
                    isLast
                      ? 'bg-gradient-to-b from-blue-50/80 to-white border-[#0068FF]/40 shadow-xs'
                      : 'bg-white border-slate-200/80 shadow-2xs hover:border-[#0068FF]/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className={`font-mono text-xs font-bold ${isLast ? 'text-[#0068FF]' : 'text-slate-400'}`}>
                        {item.step}
                      </span>
                      {!isLast && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0068FF] group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                    <h4 className={`text-sm font-bold mb-2 ${isLast ? 'text-[#0068FF]' : 'text-slate-900'}`}>
                      {item.from[lang]}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                    {item.to[lang]}
                  </p>
                </div>
              );
            })}
          </div>

          {/* TABLET / MOBILE: RESPONSIVE HORIZONTAL SWIPE TRACK */}
          <div className="lg:hidden flex items-stretch gap-3 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
            {PHILOSOPHY_CHAIN.map((item, idx) => {
              const isLast = idx === PHILOSOPHY_CHAIN.length - 1;
              return (
                <div
                  key={idx}
                  className={`p-4.5 rounded-2xl border shrink-0 w-[240px] sm:w-[260px] snap-center flex flex-col justify-between ${
                    isLast
                      ? 'bg-gradient-to-b from-blue-50/80 to-white border-[#0068FF]/40'
                      : 'bg-white border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-bold ${isLast ? 'text-[#0068FF]' : 'text-slate-400'}`}>
                        STEP {item.step}
                      </span>
                      {!isLast && <ArrowRight className="w-3.5 h-3.5 text-slate-300" />}
                    </div>
                    <h4 className={`text-base font-bold mb-2 ${isLast ? 'text-[#0068FF]' : 'text-slate-900'}`}>
                      {item.from[lang]}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                    {item.to[lang]}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden text-center mt-2">
            <span className="text-[10px] text-slate-400 font-mono">← Vuốt ngang để khám phá hành trình 01 → 07 →</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* C. EXPERIENCE & EMOTION LENS (3 Human-Centric Evaluative Questions) */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[#0068FF] mb-1">
                <Eye className="w-4 h-4 text-[#0068FF]" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">
                  {lang === 'vi' ? 'Lăng Kính Trải Nghiệm (Experience & Emotion Lens)' : 'Experience & Emotion Lens'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {lang === 'vi' ? 'Không chỉ đo lường "Đã hoàn thành việc gì?"' : 'Beyond asking "What got delivered?"'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              {lang === 'vi'
                ? 'Đây là lăng kính tôi dùng để kiểm chứng chất lượng và chiều sâu cảm xúc của mọi điểm chạm văn hóa:'
                : 'The evaluative lens guiding every cultural touchpoint toward genuine human resonance:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PHILOSOPHY_QUESTIONS.map((q, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#0068FF]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] font-mono text-xs font-bold inline-block mb-4">
                    {q.tag ? q.tag[lang] : `QUESTION 0${idx + 1}`}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 italic">
                    “{q.question ? q.question[lang] : ''}”
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 mt-2">
                  {q.elaboration ? q.elaboration[lang] : ''}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* D. PROFESSIONAL PRINCIPLES (3 Core Principles) */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#0068FF]">
            <Compass className="w-4 h-4 text-[#0068FF]" />
            <span className="text-xs font-bold font-mono uppercase tracking-wider">
              {lang === 'vi' ? 'Nguyên Tắc Nghề Nghiệp (Professional Principles)' : 'Professional Principles'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-2xl bg-blue-50 text-[#0068FF] font-mono font-bold text-xs flex items-center justify-center mb-5 border border-blue-100">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3">
                    {pillar.title ? pillar.title[lang] : ''}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description ? pillar.description[lang] : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* E. NARRATIVE BRIDGE TO EVIDENCE / CASE STUDIES */}
        {/* ============================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-semibold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Từ Triết lý đến Minh chứng Thực tiễn' : 'From Philosophy to Practical Evidence'}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">
              {lang === 'vi'
                ? 'Triết lý chỉ có giá trị khi được kiểm chứng bằng kết quả và trải nghiệm con người.'
                : 'Philosophy holds true value only when validated by outcomes and human experiences.'}
            </h4>
            <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
              {lang === 'vi'
                ? 'Khám phá 6 Case Study điển hình thể hiện năng lực giải quyết bài toán tổ chức: từ thiết kế trải nghiệm vinh danh quy mô lớn, kiến trúc giữ chân nhân sự, đến kích hoạt văn hóa và chuẩn hóa hành vi.'
                : 'Explore 6 flagship case studies demonstrating organizational problem-solving: from large-scale recognition design, retention architecture, to culture activation and behavioral standards.'}
            </p>
          </div>

          {onNavigateNext && (
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0068FF] hover:bg-[#0055D4] text-white text-xs font-semibold shadow-md transition-all shrink-0 cursor-pointer"
            >
              <span>{lang === 'vi' ? 'KHÁM PHÁ CÁC CASE STUDY TIÊU BIỂU' : 'EXPLORE FLAGSHIP CASE STUDIES'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
