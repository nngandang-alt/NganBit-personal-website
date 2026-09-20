import React from 'react';
import { METHODOLOGY_STEPS, PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import { Sparkles, ArrowRight, Bot, Cpu, CheckCircle } from 'lucide-react';

interface ApproachProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const Approach: React.FC<ApproachProps> = ({ lang, onNavigateNext }) => {
  return (
    <section
      id="approach"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8FAFC] border-b border-slate-200/70 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? '07 — Phương pháp Làm việc' : '07 — How I Work'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
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
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {lang === 'vi'
              ? 'Một quy trình khép kín, mạch lạc được thiết kế nhằm đảm bảo mọi sáng kiến văn hóa và truyền thông đều xuất phát từ sự thật con người và mang lại giá trị đo lường được cho tổ chức.'
              : 'A continuous, evidence-anchored methodology ensuring every culture and communication initiative originates from human truth and yields measurable organizational outcomes.'}
          </p>
        </div>

        {/* Connected 7-Step Linear Architecture */}
        <div className="relative mb-16">
          {/* Vertical Connecting line on left for mobile/tablet */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0068FF] via-blue-300 to-slate-200 lg:hidden" />

          <div className="flex flex-col gap-4 sm:gap-6">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col lg:flex-row lg:items-center justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0068FF]/40 shadow-xs hover:shadow-md transition-all duration-200 pl-14 lg:pl-8 group"
              >
                {/* Step badge marker */}
                <div className="absolute left-3 lg:static lg:mr-6 w-8 h-8 rounded-full bg-blue-50 group-hover:bg-[#0068FF] text-[#0068FF] group-hover:text-white font-mono font-bold text-xs flex items-center justify-center transition-colors shrink-0">
                  {step.number}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6 items-center">
                  
                  {/* Step Name (3 cols) */}
                  <div className="lg:col-span-3">
                    <span className="text-xs font-mono uppercase text-[#0068FF] block mb-0.5">
                      Stage {step.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors">
                      {step.name[lang]}
                    </h3>
                  </div>

                  {/* Headline & Details (6 cols) */}
                  <div className="lg:col-span-6">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                      {step.headline[lang]}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.details[lang]}
                    </p>
                  </div>

                  {/* Deliverable Pill (3 cols) */}
                  <div className="lg:col-span-3 lg:text-right mt-2 lg:mt-0">
                    {step.deliverable && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 font-medium">
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

        {/* ============================================================== */}
        {/* AI INTEGRATION SPOTLIGHT: HUMAN INSIGHT FIRST. AI AMPLIFIED. */}
        {/* ============================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B192C] to-[#0048B3] text-white relative overflow-hidden shadow-xl">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-200 self-start">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>{PERSONAL_INFO.aiPhilosophy[lang]}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                {lang === 'vi'
                  ? 'AI là trợ lực đắc lực — Trái tim luôn thuộc về sự thấu cảm con người.'
                  : 'AI as a Capability Multiplier — Grounded in Human Empathy.'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {lang === 'vi'
                  ? 'Tôi ứng dụng AI như một đòn bẩy năng suất: tổng hợp nghiên cứu nhanh chóng, phân tích cụm cảm nhận nhân viên từ khảo sát, cá nhân hóa nội dung truyền thông cho từng đối tượng, và giải phóng thời gian cho những tương tác người-với-người có chiều sâu.'
                  : 'I leverage AI not as an identity, but as a practical capability amplifier: accelerating research synthesis, clustering qualitative employee sentiment, localizing content variants, and freeing cognitive bandwidth for high-trust human connections.'}
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <span className="font-bold text-white block mb-1">
                  {lang === 'vi' ? 'Phân tích & Thấu hiểu' : 'Research Synthesis'}
                </span>
                <span className="text-[11px] text-blue-200">
                  {lang === 'vi' ? 'Tổng hợp xu hướng & cụm cảm nhận' : 'Sentiment clustering & themes'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <span className="font-bold text-white block mb-1">
                  {lang === 'vi' ? 'Đa dạng hóa Nội dung' : 'Content Multiplier'}
                </span>
                <span className="text-[11px] text-blue-200">
                  {lang === 'vi' ? 'Phác thảo theo từng đối tượng' : 'Persona-tailored drafting'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <span className="font-bold text-white block mb-1">
                  {lang === 'vi' ? 'Kể chuyện Trực quan' : 'Visual Storytelling'}
                </span>
                <span className="text-[11px] text-blue-200">
                  {lang === 'vi' ? 'Cấu trúc bài thuyết trình & framework' : 'Presentation structure & layouts'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <span className="font-bold text-white block mb-1">
                  {lang === 'vi' ? 'Tối ưu Vận hành' : 'Workflow Agility'}
                </span>
                <span className="text-[11px] text-blue-200">
                  {lang === 'vi' ? 'Tự động hóa tác vụ lặp lại' : 'Repetitive task automation'}
                </span>
              </div>
            </div>

          </div>

        </div>


        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="mt-12 pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: HỌC VẤN & PHÁT TRIỂN' : 'NEXT: EDUCATION & CONTINUOUS LEARNING'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
