import React from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, Language } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ArrowUpRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, onSelectCase }) => {
  return (
    <section
      id="cases"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Lớp 3: Bằng chứng thực tế' : 'Layer 3: Evidence & Flagship Case Studies'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {lang === 'vi' ? (
              <>
                Các Case Study Tiêu Biểu:<br />
                <span className="text-[#0068FF]">Giải quyết bài toán tổ chức &amp; Thiết kế trải nghiệm.</span>
              </>
            ) : (
              <>
                Flagship Case Studies:<br />
                <span className="text-[#0068FF]">Solving Organizational Challenges with Impact.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {lang === 'vi'
              ? 'Tập hợp 4 case study phản ánh năng lực giải quyết vấn đề đa chiều: từ thiết kế trải nghiệm nhập vai quy mô lớn, chuẩn hóa hành vi tổ chức, đến duy trì gắn kết trong mô hình làm việc phân tán.'
              : 'Curated flagship case studies demonstrating multidimensional problem-solving: from large-scale experiential immersion and systemic behavioral codification, to distributed culture engagement.'}
          </p>
        </div>

        {/* Case Studies Grid (2x2 Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.id}
              onClick={() => onSelectCase(c)}
              className="group cursor-pointer bg-[#F8FAFC] hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#0068FF]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Cover Placeholder / Image */}
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <ImagePlaceholder
                    image={c.coverImage}
                    category={c.coverImage.category}
                    recommendedRatio={c.coverImage.recommendedRatio}
                    hint={c.coverImage.placeholderHint}
                    lang={lang}
                    className="w-full transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Tags & Meta row */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-xs font-bold font-mono">
                    {c.organization}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {c.accentBadge[lang]}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-tight mb-2">
                  {c.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {c.subtitle[lang]}
                </p>

                {/* Key Impact preview */}
                <div className="pt-4 border-t border-slate-200/70 space-y-1.5">
                  {c.impact[lang].slice(0, 2).map((imp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Deep-dive Link */}
              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-[#0068FF]">
                <span>{lang === 'vi' ? 'Xem chi tiết Case Study' : 'Read Full Case Study'}</span>
                <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-[#0068FF] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
