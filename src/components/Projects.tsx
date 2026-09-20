import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, Language } from '../types';
import { CaseStudyCover } from './CaseStudyCover';
import { ProjectModal } from './ProjectModal';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Building,
  Calendar,
  Layers,
  FolderKanban,
  CheckCircle2,
} from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  onNavigateNext?: () => void;
  activeCaseId?: string | null;
}

export const Projects: React.FC<ProjectsProps> = ({
  lang,
  onNavigateNext,
  activeCaseId,
}) => {
  // If activeCaseId is passed via deep link hash (#cases/case-top100-awards), initialize modal
  const initialModalCase = activeCaseId
    ? CASE_STUDIES.find((c) => c.id === activeCaseId) || null
    : null;

  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(initialModalCase);

  const handleOpenCase = (cs: CaseStudy) => {
    setSelectedCaseModal(cs);
    // update URL hash without scrolling
    window.history.replaceState(null, '', `#cases/${cs.id}`);
  };

  const handleCloseCase = () => {
    setSelectedCaseModal(null);
    window.history.replaceState(null, '', '#cases');
  };

  return (
    <section
      id="cases"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
              {lang === 'vi' ? 'Case Studies Tiêu Biểu' : 'Flagship Case Studies'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Nghiên Cứu Điển Hình:<br />
                    <span className="text-[#0068FF]">Giải quyết Bài toán Tổ chức &amp; Thiết kế Trải nghiệm.</span>
                  </>
                ) : (
                  <>
                    Flagship Case Studies:<br />
                    <span className="text-[#0068FF]">Solving Organizational Challenges with Impact.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Tuyển tập 6 case study phản ánh năng lực giải quyết bài toán đa chiều: từ thiết kế trải nghiệm vinh danh & ứng dụng AI, trại công nghệ quy mô lớn, kiến trúc giữ chân nhân sự, đến kích hoạt văn hóa bán lẻ.'
                : 'A curated portfolio of 6 flagship case studies demonstrating multidimensional problem solving: large-scale recognition design, AI touchpoints, retention architectures, and frontline culture activation.'}
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* OVERVIEW GRID: 6 MAJOR CASE STUDY CARDS (Interactive Portfolio Model) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDIES.map((cs) => {
            const impactHighlights = Array.isArray(cs.impact)
              ? cs.impact.slice(0, 2)
              : ((cs.impact as any)[lang] || []).slice(0, 2);

            return (
              <div
                key={cs.id}
                onClick={() => handleOpenCase(cs)}
                className="group cursor-pointer bg-[#F8FAFC] hover:bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-[#0068FF]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Standardized Aspect Ratio Cover Visual */}
                  <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-900">
                    <CaseStudyCover
                      image={cs.coverImage}
                      projectId={cs.id}
                      lang={lang}
                    />
                  </div>

                  {/* Meta Bar: Organization & Strategic Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-[11px] font-bold font-mono">
                      {cs.organization}
                    </span>
                    {cs.accentBadge && (
                      <span className="px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700 text-[10px] font-semibold">
                        {cs.accentBadge[lang]}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-snug mb-2 line-clamp-2">
                    {cs.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {cs.subtitle[lang]}
                  </p>

                  {/* Key Signals / Impact Preview */}
                  {impactHighlights.length > 0 && (
                    <div className="pt-3 border-t border-slate-200/70 space-y-1.5 mb-2">
                      {impactHighlights.map((imp: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{imp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Case Study Affordance */}
                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-[#0068FF]">
                  <span>{lang === 'vi' ? 'Khám phá Case Study' : 'Read Full Case Study'}</span>
                  <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#0068FF] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: DỰ ÁN & SẢN PHẨM THỰC THI (SELECTED WORK)' : 'NEXT: SELECTED WORK'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Case Study In-Depth Modal */}
      <ProjectModal
        caseStudy={selectedCaseModal}
        lang={lang}
        onClose={handleCloseCase}
      />
    </section>
  );
};
