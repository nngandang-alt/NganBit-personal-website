import React, { useState } from 'react';
import { CASE_STUDIES, SELECTED_WORK_DATA } from '../data/portfolioData';
import { CaseStudy, Language, SelectedWorkItem } from '../types';
import { PageHeroVisual } from './PageHeroVisual';
import { CaseStudyCover } from './CaseStudyCover';
import { ProjectModal } from './ProjectModal';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  Sparkles,
  FolderKanban,
  Briefcase,
  Layers,
} from 'lucide-react';

interface WorkAndImpactProps {
  lang: Language;
  onNavigateNext?: () => void;
  activeCaseId?: string | null;
}

export const WorkAndImpact: React.FC<WorkAndImpactProps> = ({
  lang,
  onNavigateNext,
  activeCaseId,
}) => {
  // If activeCaseId is passed via deep link hash (#work/case-top100-awards or #cases/case-top100-awards), initialize modal
  const initialModalCase = activeCaseId
    ? CASE_STUDIES.find((c) => c.id === activeCaseId) || null
    : null;

  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(initialModalCase);
  const [selectedProjectModal, setSelectedProjectModal] = useState<SelectedWorkItem | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'case-studies' | 'projects'>('all');

  const handleOpenCase = (cs: CaseStudy) => {
    setSelectedCaseModal(cs);
    window.history.replaceState(null, '', `#work/${cs.id}`);
  };

  const handleCloseCase = () => {
    setSelectedCaseModal(null);
    window.history.replaceState(null, '', '#work');
  };

  const showCases = filterType === 'all' || filterType === 'case-studies';
  const showProjects = filterType === 'all' || filterType === 'projects';

  return (
    <section
      id="work"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f8fbff] border-b border-slate-200/70 relative overflow-hidden"
    >
      {/* ============================================================== */}
      {/* PAGE-LEVEL ATMOSPHERIC LIGHTING SYSTEM                         */}
      {/* Exact color recipe from Homepage Hero (Hero.tsx lines 40-64)   */}
      {/* ============================================================== */}
      {/* PRIMARY GLOW: Opening / Hero (Asymmetric top-right) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-50px',
          top: '-30px',
          width: '560px',
          height: '420px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.50) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* SECONDARY GLOW: Portfolio / Selected Work Transition Area (Mid-left) */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-70px',
          top: '720px',
          width: '460px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.30) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* AMBIENT GLOW: Lower Whitespace Depth (Lower-right) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-80px',
          bottom: '80px',
          width: '450px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.22) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4">
          {/* Left: Eyebrow + Headline + Supporting Paragraph */}
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[#0060FF] uppercase font-mono">
                {lang === 'vi' ? 'Dự án & Dấu ấn' : 'Work & Impact'}
              </span>
              <div className="h-px w-12 bg-[#0060FF]/30" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {lang === 'vi' ? (
                <>
                  Dự án &amp; Dấu ấn:<br />
                  <span className="text-[#0060FF]">Giải quyết Bài toán Tổ chức &amp; Thực thi Đa chiều</span>
                </>
              ) : (
                <>
                  Work &amp; Impact:<br />
                  <span className="text-[#0060FF]">Solving Organizational Challenges &amp; Driving Execution</span>
                </>
              )}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              {lang === 'vi'
                ? 'Tuyển tập các công trình thực tiễn kết hợp giữa các nghiên cứu điển hình chuyên sâu và các sáng kiến thực thi đa dạng: từ hệ thống văn hóa, thiết kế vinh danh, trại công nghệ đến ấn phẩm và nội dung truyền thông.'
                : 'A unified body of work combining in-depth organizational case studies and versatile operational initiatives, from culture systems, recognition design, and tech camp activations to multimedia storytelling and publications.'}
            </p>
          </div>

          {/* Right: Semantic Line-art Element embedded in atmospheric glow */}
          <PageHeroVisual variant="work" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-[#0068FF] text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {lang === 'vi' ? 'Tất cả (11)' : 'All Work & Impact (11)'}
          </button>
          <button
            onClick={() => setFilterType('case-studies')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterType === 'case-studies'
                ? 'bg-[#0068FF] text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>{lang === 'vi' ? 'Case Studies (6)' : 'Flagship Case Studies (6)'}</span>
          </button>
          <button
            onClick={() => setFilterType('projects')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterType === 'projects'
                ? 'bg-[#0068FF] text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>{lang === 'vi' ? 'Dự án Thực thi (5)' : 'Selected Projects (5)'}</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* GROUP 1: FLAGSHIP CASE STUDIES */}
        {/* ============================================================== */}
        {showCases && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-[11px] font-bold font-mono uppercase tracking-wider">
                  CASE STUDIES
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {lang === 'vi' ? '• 6 nghiên cứu chiến lược giải quyết bài toán lớn' : '• 6 strategic organizational problem-solving studies'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {CASE_STUDIES.map((cs) => {
                const impactHighlights = Array.isArray(cs.impact)
                  ? cs.impact.slice(0, 2)
                  : ((cs.impact as any)[lang] || []).slice(0, 2);

                return (
                  <div
                    key={cs.id}
                    onClick={() => handleOpenCase(cs)}
                    className="group cursor-pointer bg-white hover:bg-blue-50/20 rounded-3xl p-6 border border-slate-200/90 hover:border-[#0068FF]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

                      {/* Meta Bar: Badge, Organization */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-[10px] font-bold font-mono uppercase tracking-wider">
                            CASE STUDY
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold font-mono">
                            {cs.organization}
                          </span>
                        </div>
                        {cs.accentBadge && (
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                            {cs.accentBadge[lang]}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-snug tracking-tight mb-2">
                        {cs.title[lang]}
                      </h3>

                      {/* Subtitle / Context */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                        {cs.subtitle[lang]}
                      </p>

                      {/* Impact Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                        {impactHighlights.map((hl: string, hIdx: number) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0068FF] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0068FF]">
                      <span>{lang === 'vi' ? 'Khám phá Case Study' : 'Explore Case Study'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* GROUP 2: SELECTED PROJECTS & INITIATIVES */}
        {/* ============================================================== */}
        {showProjects && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold font-mono uppercase tracking-wider">
                  PROJECTS
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {lang === 'vi' ? '• 5 dự án thực thi đa dạng: ấn phẩm, video, quan hệ đối tác & CSR' : '• 5 versatile delivery initiatives: publications, media, partnerships & CSR'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {SELECTED_WORK_DATA.map((item) => {
                const highlights = item.highlights ? ((item.highlights as any)[lang] || []) : [];
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProjectModal(item)}
                    className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold font-mono uppercase tracking-wider">
                            PROJECT
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold font-mono">
                            {item.category[lang]}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {item.context[lang]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-snug tracking-tight mb-2.5">
                        {item.title[lang]}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {item.description[lang]}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        {highlights.slice(0, 2).map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span className="leading-snug line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-700 group-hover:text-[#0068FF] transition-colors">
                      <span>{lang === 'vi' ? 'Xem chi tiết Dự án' : 'View Project Details'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: HỌC VẤN & PHÁT TRIỂN (EDUCATION & DEVELOPMENT)' : 'NEXT: EDUCATION & DEVELOPMENT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        caseStudy={selectedCaseModal}
        lang={lang}
        onClose={handleCloseCase}
      />

      {/* Selected Project Detail Modal */}
      {selectedProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedProjectModal(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold font-mono uppercase tracking-wider">
                PROJECT
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                {selectedProjectModal.category[lang]}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {selectedProjectModal.context[lang]}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
              {selectedProjectModal.title[lang]}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedProjectModal.description[lang]}
            </p>

            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                {lang === 'vi' ? 'Các mốc kết quả thực tiễn:' : 'Delivered Outcomes:'}
              </span>
              {((selectedProjectModal.highlights as any)[lang] || []).map((hl: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                {lang === 'vi' ? 'Đóng' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
