import React from 'react';
import {
  PHILOSOPHY_CHAIN,
  PHILOSOPHY_QUESTIONS,
  PHILOSOPHY_PILLARS,
  METHODOLOGY_STEPS,
} from '../data/portfolioData';
import { Language } from '../types';
import {
  ArrowRight,
  HeartHandshake,
  Eye,
  Sparkles,
  ShieldCheck,
  Compass,
  Layers,
  CheckCircle,
  Cpu,
  BarChart3,
  FileText,
  Palette,
  Workflow,
} from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ lang, onNavigateNext }) => {
  return (
    <section
      id="philosophy"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70 relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        
        {/* ============================================================== */}
        {/* PHÂN TẦNG 01: HERO & CORE BELIEF (TRANSFORMATION CHAIN)       */}
        {/* ============================================================== */}
        <div className="space-y-10">
          {/* Header Tag & Statement */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
                {lang === 'vi' ? '02 — Triết lý Nghề nghiệp & Phương pháp' : '02 — Professional Operating System'}
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

          {/* 01 -> 07 Value Transformation Chain Box */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/70">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-[#0068FF]" />
                <div>
                  <span className="text-xs font-bold font-mono text-[#0068FF] uppercase tracking-wider block">
                    {lang === 'vi' ? 'Xương sống Triết lý · Chuỗi Chuyển Hóa Giá Trị' : 'Core Belief · Transformation Chain'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {lang === 'vi'
                      ? 'Tiến trình chuyển hóa hữu cơ từ Thông điệp ban đầu đến Bản sắc Tổ chức'
                      : 'Organic progression from initial message to living institutional culture'}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400 hidden sm:inline-block">
                01 → 07
              </span>
            </div>

            {/* Desktop: 7 horizontal columns */}
            <div className="hidden lg:grid grid-cols-7 gap-3 relative">
              {PHILOSOPHY_CHAIN.map((item, idx) => {
                const isLast = idx === PHILOSOPHY_CHAIN.length - 1;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between relative group ${
                      isLast
                        ? 'bg-gradient-to-b from-blue-50/90 to-white border-[#0068FF]/50 shadow-xs'
                        : 'bg-white border-slate-200/80 shadow-2xs hover:border-[#0068FF]/40'
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

            {/* Mobile/Tablet: Horizontal swipe track */}
            <div className="lg:hidden flex items-stretch gap-3 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
              {PHILOSOPHY_CHAIN.map((item, idx) => {
                const isLast = idx === PHILOSOPHY_CHAIN.length - 1;
                return (
                  <div
                    key={idx}
                    className={`p-4.5 rounded-2xl border shrink-0 w-[240px] sm:w-[260px] snap-center flex flex-col justify-between ${
                      isLast
                        ? 'bg-gradient-to-b from-blue-50/90 to-white border-[#0068FF]/50'
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
              <span className="text-[10px] text-slate-400 font-mono">← Vuốt ngang để xem hành trình 01 → 07 →</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PHÂN TẦNG 02: LĂNG KÍNH TRẢI NGHIỆM & CẢM XÚC (3 QUESTIONS)   */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[#0068FF] mb-1">
                <Eye className="w-4 h-4 text-[#0068FF]" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">
                  {lang === 'vi' ? 'Lăng Kính Trải Nghiệm & Cảm Xúc' : 'Experience & Emotion Lens'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {lang === 'vi' ? 'Không chỉ đo lường "Đã hoàn thành việc gì?"' : 'Beyond asking "What got delivered?"'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              {lang === 'vi'
                ? 'Trong vai trò kiến tạo trải nghiệm và gắn kết, tôi luôn đặt 3 câu hỏi cốt tử sau mỗi sáng kiến:'
                : 'In shaping employee experience and belonging, I anchor every initiative in 3 critical evaluative questions:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PHILOSOPHY_QUESTIONS.map((q, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#0068FF]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] font-mono text-xs font-bold inline-block mb-4 border border-blue-100/80">
                    {q.tag ? q.tag[lang] : `CÂU HỎI 0${idx + 1}`}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 italic">
                    {q.question ? q.question[lang] : (q.q ? q.q[lang] : '')}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 mt-2">
                  {q.elaboration ? q.elaboration[lang] : (q.detail ? q.detail[lang] : '')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PHÂN TẦNG 03: NGUYÊN TẮC NGHỀ NGHIỆP (3 PRINCIPLES)          */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#0068FF]">
            <Compass className="w-4 h-4 text-[#0068FF]" />
            <span className="text-xs font-bold font-mono uppercase tracking-wider">
              {lang === 'vi' ? 'Nguyên Tắc Nghề Nghiệp' : 'Professional Principles'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const iconMap: Record<number, React.ReactNode> = {
                0: <HeartHandshake className="w-4 h-4 text-[#0068FF]" />,
                1: <ShieldCheck className="w-4 h-4 text-[#0068FF]" />,
                2: <Sparkles className="w-4 h-4 text-[#0068FF]" />,
              };
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0068FF]/30 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-9 h-9 rounded-2xl bg-blue-50 text-[#0068FF] font-mono font-bold text-xs flex items-center justify-center border border-blue-100">
                        0{idx + 1}
                      </div>
                      {iconMap[idx]}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3">
                      {pillar.title ? pillar.title[lang] : ''}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description
                        ? pillar.description[lang]
                        : (pillar.desc ? pillar.desc[lang] : '')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PHÂN TẦNG 04: TỪ NGUYÊN TẮC ĐẾN THỰC HÀNH (7-STAGE METHODOLOGY)*/}
        {/* ============================================================== */}
        <div id="methodology" className="space-y-8 pt-4 scroll-mt-24">
          
          {/* Transition Subheading & Intro */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 text-[#0068FF]" />
              <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
                {lang === 'vi' ? 'Từ Nguyên tắc đến Thực hành · Phương pháp 7 Bước' : 'From Principles to Practice · 7-Stage Methodology'}
              </span>
              <div className="h-px w-12 bg-[#0068FF]/30" />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {lang === 'vi' ? (
                <>
                  Quy trình 7 Bước Liên hoàn:<br />
                  <span className="text-[#0068FF]">Từ Thấu hiểu Bối cảnh đến Chuyển hóa Bền vững.</span>
                </>
              ) : (
                <>
                  Connected 7-Step Operating Flow:<br />
                  <span className="text-[#0068FF]">From Deep Diagnosis to Enduring Transformation.</span>
                </>
              )}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {lang === 'vi'
                ? 'Một quy trình khép kín, mạch lạc được thiết kế nhằm đảm bảo mọi sáng kiến văn hóa và truyền thông đều xuất phát từ sự thật con người và mang lại giá trị đo lường được cho tổ chức.'
                : 'A continuous, evidence-anchored methodology ensuring every culture and communication initiative originates from human truth and yields measurable organizational outcomes.'}
            </p>
          </div>

          {/* 7 Linear Stages */}
          <div className="relative">
            {/* Vertical connector line on mobile/tablet */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0068FF] via-blue-300 to-slate-200 lg:hidden" />

            <div className="flex flex-col gap-3.5 sm:gap-4">
              {METHODOLOGY_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col lg:flex-row lg:items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-[#0068FF]/40 shadow-2xs hover:shadow-sm transition-all duration-200 pl-14 lg:pl-6 group"
                >
                  {/* Step badge marker */}
                  <div className="absolute left-3 lg:static lg:mr-5 w-8 h-8 rounded-full bg-blue-50 group-hover:bg-[#0068FF] text-[#0068FF] group-hover:text-white font-mono font-bold text-xs flex items-center justify-center transition-colors shrink-0">
                    {step.number}
                  </div>

                  {/* Content Grid */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6 items-center">
                    
                    {/* Stage Name (3 cols) */}
                    <div className="lg:col-span-3">
                      <span className="text-[11px] font-mono uppercase text-[#0068FF] font-semibold block">
                        Stage {step.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors">
                        {step.name[lang]}
                      </h4>
                    </div>

                    {/* Headline & Details (6 cols) */}
                    <div className="lg:col-span-6">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-0.5">
                        {step.headline[lang]}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.details[lang]}
                      </p>
                    </div>

                    {/* Deliverable Pill (3 cols) */}
                    <div className="lg:col-span-3 lg:text-right mt-1.5 lg:mt-0">
                      {step.deliverable && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-mono text-slate-700 font-medium shadow-2xs">
                          <CheckCircle className="w-3 h-3 text-[#0068FF]" />
                          <span>{step.deliverable[lang]}</span>
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* PHÂN TẦNG 05: AI TRONG THỰC HÀNH (ENABLING CAPABILITY LAYER)   */}
        {/* ============================================================== */}
        <div id="ai-practice" className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-lg space-y-6 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-mono font-semibold text-blue-300 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Năng lực Bổ trợ Thực tiễn' : 'Enabling Practical Capability'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {lang === 'vi' ? 'AI trong Thực hành (AI in Practice)' : 'AI in Practice: Practical Multiplication'}
              </h3>
            </div>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              {lang === 'vi'
                ? 'AI không phải là định vị nghề nghiệp, mà là trợ lực đắc lực giúp tối ưu quy trình phân tích và mở rộng năng suất — giải phóng thời gian cho những kết nối con người có chiều sâu.'
                : 'AI is not a professional persona, but an operational force multiplier: synthesizing qualitative sentiment and scaling output to preserve focus on deep human empathy.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                {lang === 'vi' ? 'Phân tích & Thấu hiểu' : 'Research Synthesis'}
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {lang === 'vi'
                  ? 'Tổng hợp xu hướng, phân cụm cảm nhận định tính từ khảo sát nhân viên.'
                  : 'Synthesizing qualitative employee sentiment and clustering feedback themes.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                {lang === 'vi' ? 'Đa dạng hóa Nội dung' : 'Content Multiplier'}
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {lang === 'vi'
                  ? 'Phác thảo các biến thể thông điệp phù hợp với từng phân khúc nhân sự.'
                  : 'Drafting multi-tier message variants tailored across diverse workforce cohorts.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                <Palette className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                {lang === 'vi' ? 'Kể chuyện Trực quan' : 'Visual Storytelling'}
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {lang === 'vi'
                  ? 'Cấu trúc bài thuyết trình, khung sơ đồ hóa và bảng biểu trực quan.'
                  : 'Structuring executive briefings, diagramming frameworks, and visual narratives.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                <Workflow className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                {lang === 'vi' ? 'Tối ưu Vận hành' : 'Workflow Agility'}
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {lang === 'vi'
                  ? 'Tự động hóa tác vụ lặp lại, theo dõi tiến độ và tối ưu nhịp xuất bản.'
                  : 'Automating repetitive administrative workflows and editorial cadence tracking.'}
              </p>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* PHÂN TẦNG 06: TRANSITION DUY NHẤT SANG CASE STUDIES           */}
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
