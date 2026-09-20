import React, { useState } from 'react';
import {
  OPERATING_SYSTEM_STAGES,
  PHILOSOPHY_QUESTIONS,
  PHILOSOPHY_PILLARS,
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
  ChevronRight,
  ChevronLeft,
  Activity,
  Lightbulb,
  Check,
} from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ lang, onNavigateNext }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'focused' | 'all'>('focused');

  const currentStage = OPERATING_SYSTEM_STAGES[activeStageIndex];

  return (
    <section
      id="philosophy"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70 relative scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
        
        {/* ============================================================== */}
        {/* 01. OPENING PHILOSOPHY & STATEMENT                             */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
              {lang === 'vi' ? '02 — Triết lý Nghề nghiệp & Phương pháp' : '02 — Philosophy & Operating System'}
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
        {/* 02. PROFESSIONAL OPERATING SYSTEM (7 INTEGRATED STAGES)        */}
        {/* WHAT I BELIEVE (TOP) <-> HOW I WORK / PRACTICE (BOTTOM)        */}
        {/* ============================================================== */}
        <div id="operating-system" className="space-y-8 scroll-mt-24">
          
          {/* 7-STAGE HORIZONTAL PROGRESS STEPPER (Always visible as navigator) */}
          <div className="p-2.5 sm:p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-mono font-bold text-[#0068FF] uppercase tracking-wider">
                01 → 07 TRANSFORMATION FLOW
              </span>
              <div className="flex items-center bg-white border border-slate-200/80 p-0.5 rounded-xl text-xs font-medium shadow-2xs">
                <button
                  onClick={() => setViewMode('focused')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'focused'
                      ? 'bg-blue-50 text-[#0068FF] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'vi' ? 'Tập trung từng bước' : 'Focused View'}
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'all'
                      ? 'bg-blue-50 text-[#0068FF] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'vi' ? 'Xem toàn bộ 7 bước' : 'All 7 Stages'}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2">
              {OPERATING_SYSTEM_STAGES.map((st, idx) => {
                const isSelected = activeStageIndex === idx;
                return (
                  <button
                    key={st.id}
                    onClick={() => {
                      setActiveStageIndex(idx);
                      if (viewMode === 'all') {
                        const el = document.getElementById(`stage-${st.id}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className={`p-2.5 sm:p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-white border-[#0068FF] shadow-xs ring-1 ring-[#0068FF]/30'
                        : 'bg-transparent border-transparent hover:bg-white/80 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-blue-50 text-[#0068FF]' : 'text-slate-400 bg-slate-200/60'
                        }`}
                      >
                        STAGE {st.step}
                      </span>
                    </div>
                    <div>
                      <span className={`block text-xs font-bold leading-tight ${isSelected ? 'text-[#0068FF]' : 'text-slate-800'}`}>
                        {st.concept[lang]}
                      </span>
                      <span className="block text-[11px] text-slate-500 truncate mt-0.5 font-medium">
                        {st.practice[lang]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FOCUSED VIEW: DUAL-LAYER SYSTEM UNIT CARD */}
          {viewMode === 'focused' && (
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-8 relative overflow-hidden transition-all duration-300">
              
              {/* Card Header: Stage indicator & Navigation arrows */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0068FF] text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                    {currentStage.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0068FF]">
                        STAGE {currentStage.step}
                      </span>
                      <span className="text-slate-300">/</span>
                      <span className="text-xs font-semibold text-slate-500">
                        07 TRANSFORMATION STAGES
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        {currentStage.concept[lang]}
                      </h4>
                      <span className="text-slate-400 font-normal">→</span>
                      <span className="text-base sm:text-lg font-bold text-[#0068FF]">
                        {currentStage.practice[lang]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : OPERATING_SYSTEM_STAGES.length - 1))}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-[#0068FF] text-slate-700 hover:text-[#0068FF] flex items-center justify-center transition-colors cursor-pointer"
                    title="Giai đoạn trước"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveStageIndex((prev) => (prev < OPERATING_SYSTEM_STAGES.length - 1 ? prev + 1 : 0))}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-[#0068FF] text-slate-700 hover:text-[#0068FF] flex items-center justify-center transition-colors cursor-pointer"
                    title="Giai đoạn tiếp theo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* TẦNG TRÊN: PHILOSOPHY / WHAT I BELIEVE */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-2xs relative">
                <div className="flex items-center gap-2 text-[#0068FF] mb-2 font-mono text-[11px] font-bold uppercase tracking-wider">
                  <Lightbulb className="w-3.5 h-3.5 text-[#0068FF]" />
                  <span>{lang === 'vi' ? 'TẦNG 1: NIỀM TIN CỐT LÕI (WHAT I BELIEVE)' : 'LAYER 1: CORE BELIEF (WHAT I BELIEVE)'}</span>
                </div>
                <blockquote className="text-base sm:text-lg font-bold text-slate-900 italic leading-relaxed">
                  “{currentStage.belief[lang]}”
                </blockquote>
              </div>

              {/* BRIDGE: HOW I MAKE IT HAPPEN IN PRACTICE */}
              <div className="flex items-center justify-center gap-3 my-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0068FF] text-[11px] font-mono font-bold tracking-wider uppercase shadow-2xs">
                  <span>{lang === 'vi' ? '↓ CHUYỂN HÓA SANG THỰC HÀNH (HOW I MAKE IT HAPPEN) ↓' : '↓ OPERATIONAL PRACTICE (HOW I MAKE IT HAPPEN) ↓'}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
              </div>

              {/* TẦNG DƯỚI: HOW I WORK / PRACTICE */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-6">
                
                {/* Practice Headline & Action Flow */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] font-bold uppercase tracking-wider mb-1">
                      <Activity className="w-3.5 h-3.5 text-[#0068FF]" />
                      <span>{lang === 'vi' ? 'TẦNG 2: PHƯƠNG PHÁP THỰC THI (HOW I WORK)' : 'LAYER 2: OPERATIONAL PRACTICE (HOW I WORK)'}</span>
                    </div>
                    <h5 className="text-lg font-bold text-slate-900">
                      {currentStage.practice[lang]}
                    </h5>
                  </div>

                  {/* Action Flow Badges */}
                  {currentStage.actionFlow && currentStage.actionFlow.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {currentStage.actionFlow.map((stepItem, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0068FF] font-mono text-[10px] font-bold">
                            {stepItem}
                          </span>
                          {sIdx < currentStage.actionFlow.length - 1 && (
                            <span className="text-slate-300 text-xs">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {/* Main Action Narrative Description */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {currentStage.action[lang]}
                </p>

                {/* Detailed Action Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {currentStage.actionPoints[lang].map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <Check className="w-4 h-4 text-[#0068FF] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Output & Signal Verification Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[10px] font-mono font-bold text-[#0068FF] uppercase tracking-wider block mb-1">
                      {lang === 'vi' ? 'KẾT QUẢ ĐẦU RA (OUTPUT)' : 'KEY OUTPUT'}
                    </span>
                    <span className="text-xs font-semibold text-slate-900 block">
                      {currentStage.output[lang]}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {lang === 'vi' ? 'TÍN HIỆU KIỂM CHỨNG (SIGNAL)' : 'VERIFICATION SIGNAL'}
                    </span>
                    <span className="text-xs font-medium text-slate-700 block">
                      {currentStage.signal[lang]}
                    </span>
                  </div>
                </div>

              </div>

              {/* Next Stage Navigation Footer */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400 font-mono">
                  {lang === 'vi'
                    ? `Giai đoạn ${currentStage.step} / 07`
                    : `Stage ${currentStage.step} of 07`}
                </span>

                <button
                  onClick={() => {
                    if (activeStageIndex < OPERATING_SYSTEM_STAGES.length - 1) {
                      setActiveStageIndex(activeStageIndex + 1);
                    } else {
                      const lensEl = document.getElementById('checking-lens');
                      if (lensEl) lensEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-900 hover:bg-[#0068FF] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>
                    {activeStageIndex < OPERATING_SYSTEM_STAGES.length - 1
                      ? (lang === 'vi'
                          ? `TIẾP THEO: GIAI ĐOẠN 0${activeStageIndex + 2} (${OPERATING_SYSTEM_STAGES[activeStageIndex + 1].concept[lang]})`
                          : `NEXT: STAGE 0${activeStageIndex + 2} (${OPERATING_SYSTEM_STAGES[activeStageIndex + 1].concept[lang]})`)
                      : (lang === 'vi' ? 'TIẾP THEO: LĂNG KÍNH TRẢI NGHIỆM' : 'NEXT: EXPERIENCE LENS')}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* ALL 7 STAGES OVERVIEW MODE */}
          {viewMode === 'all' && (
            <div className="space-y-6">
              {OPERATING_SYSTEM_STAGES.map((st) => (
                <div
                  key={st.id}
                  id={`stage-${st.id}`}
                  className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-6"
                >
                  {/* Stage Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0068FF] text-white font-mono font-bold text-xs flex items-center justify-center">
                        {st.step}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#0068FF] uppercase tracking-wider block">
                          STAGE {st.step}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900">
                          {st.concept[lang]} <span className="text-slate-400 font-normal">→</span> <span className="text-[#0068FF]">{st.practice[lang]}</span>
                        </h4>
                      </div>
                    </div>

                    {st.actionFlow && (
                      <div className="flex items-center gap-1 text-[10px] font-mono">
                        {st.actionFlow.map((item, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-blue-50 text-[#0068FF] font-bold">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dual Grid: Top Belief & Bottom Practice */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left: What I Believe (5 cols) */}
                    <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-blue-100 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#0068FF] uppercase tracking-wider block mb-2">
                          {lang === 'vi' ? 'TÔI TIN ĐIỀU GÌ (BELIEF)' : 'WHAT I BELIEVE'}
                        </span>
                        <blockquote className="text-sm sm:text-base font-bold text-slate-900 italic leading-relaxed">
                          “{st.belief[lang]}”
                        </blockquote>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                          {lang === 'vi' ? 'Đầu ra kiểm chứng' : 'Deliverable / Output'}
                        </span>
                        <span className="text-xs font-semibold text-slate-800">
                          {st.output[lang]}
                        </span>
                      </div>
                    </div>

                    {/* Right: How I Work (7 cols) */}
                    <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-slate-200/90 space-y-4">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          {lang === 'vi' ? 'CÁCH TÔI THỰC THI (PRACTICE & ACTION)' : 'HOW I MAKE IT HAPPEN'}
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {st.action[lang]}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {st.actionPoints[lang].map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-[#0068FF] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* ============================================================== */}
        {/* 03. EXPERIENCE & EMOTION LENS (CHECKING LENS)                   */}
        {/* ROLE: How I check the human experience                         */}
        {/* ============================================================== */}
        <div id="checking-lens" className="space-y-6 pt-4 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 text-[#0068FF] mb-1">
                <Eye className="w-4 h-4 text-[#0068FF]" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">
                  {lang === 'vi' ? '03 — Lăng Kính Trải Nghiệm & Cảm Xúc (Checking Lens)' : '03 — Experience & Emotion Lens'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
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
        {/* 04. PROFESSIONAL PRINCIPLES (GUIDING PRINCIPLES)               */}
        {/* ROLE: What consistently guides my decisions                    */}
        {/* ============================================================== */}
        <div id="principles" className="space-y-6 pt-4 scroll-mt-24">
          <div className="flex items-center gap-2 text-[#0068FF]">
            <Compass className="w-4 h-4 text-[#0068FF]" />
            <span className="text-xs font-bold font-mono uppercase tracking-wider">
              {lang === 'vi' ? '04 — Nguyên Tắc Nghề Nghiệp (Guiding Principles)' : '04 — Guiding Principles'}
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
        {/* 05. AI IN PRACTICE (ENABLING CAPABILITY LAYER)                 */}
        {/* ROLE: Supporting capability multiplier                         */}
        {/* ============================================================== */}
        <div id="ai-practice" className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-lg space-y-6 relative overflow-hidden scroll-mt-24">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-mono font-semibold text-blue-300 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? '05 — Năng Lực Bổ Trợ Thực Tiễn' : '05 — Enabling Capability'}</span>
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
        {/* 06. EVIDENCE (SINGLE NARRATIVE BRIDGE TO CASE STUDIES)         */}
        {/* ROLE: Demonstrating validated outcomes                         */}
        {/* ============================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-semibold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? '06 — Từ Triết lý đến Minh chứng Thực tiễn' : '06 — From Philosophy to Practical Evidence'}</span>
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
