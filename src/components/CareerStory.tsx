import React, { useState } from 'react';
import { CAREER_CHAPTERS } from '../data/portfolioData';
import { Language } from '../types';
import { Compass, ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, Building, Calendar, MapPin, Briefcase } from 'lucide-react';
import { CareerVisualEvidence } from './CareerVisualEvidence';
import { VerifiedRoleCard } from './VerifiedRoleCard';

interface CareerStoryProps {
  lang: Language;
  onNavigateNext?: () => void;
  onSelectCase?: (caseId: string) => void;
}

export const CareerStory: React.FC<CareerStoryProps> = ({
  lang,
  onNavigateNext,
  onSelectCase,
}) => {
  // Default to Chapter 06 (latest/current stage, FPT University)
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  // Sub-navigation for Chapter 03 (Vua Nệm -> CMC -> F88)
  const [activeSubCompany, setActiveSubCompany] = useState<'vuanem' | 'cmc' | 'f88'>('vuanem');

  const activeChapter = CAREER_CHAPTERS[activeChapterIndex];
  const isChapter03 = activeChapter.number === '03' || activeChapter.id === 'ch-04';

  const handleNextChapter = () => {
    if (activeChapterIndex < CAREER_CHAPTERS.length - 1) {
      setActiveChapterIndex(activeChapterIndex + 1);
    }
  };

  const handlePrevChapter = () => {
    if (activeChapterIndex > 0) {
      setActiveChapterIndex(activeChapterIndex - 1);
    }
  };

  // Filter roles for Chapter 03 sub-navigation if applicable
  const displayedRoles = isChapter03 && activeChapter.roles
    ? activeChapter.roles.filter((r) => {
        const co = (r.company || '').toLowerCase();
        if (activeSubCompany === 'vuanem') return co.includes('vua nệm') || co.includes('vuanem');
        if (activeSubCompany === 'cmc') return co.includes('cmc');
        if (activeSubCompany === 'f88') return co.includes('f88');
        return true;
      })
    : activeChapter.roles || [];

  return (
    <section
      id="career"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8FAFC] border-b border-slate-200/70 relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? '02 — Hành trình & Kinh nghiệm' : '02 — Career & Experience'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Hành trình Sự nghiệp:<br />
                    <span className="text-[#0068FF]">Gắn kết Con người với Mục tiêu &amp; Ý nghĩa Tổ chức.</span>
                  </>
                ) : (
                  <>
                    Career &amp; Experience:<br />
                    <span className="text-[#0068FF]">Connecting People with Purpose.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Mô hình xem tập trung theo từng chương: Chọn cột mốc để khám phá câu chuyện năng lực, phạm vi đảm nhiệm và bằng chứng thực tế.'
                : 'Focused chapter model: Select any milestone to inspect verified ownership, capability progression, and real ceremony artifacts.'}
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PROGRESSIVE CHAPTER SELECTOR (06 -> 01: Present to Past) */}
        {/* ============================================================== */}
        <div className="mb-10 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {lang === 'vi' ? 'Chọn cột mốc sự nghiệp (Hiện tại → Quá khứ)' : 'Select Milestone (Present → Past)'}
            </span>
            <span className="text-xs font-mono font-semibold text-[#0068FF]">
              {activeChapter.number} / 06
            </span>
          </div>

          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {CAREER_CHAPTERS.map((chapter, idx) => {
              const isActive = idx === activeChapterIndex;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`relative p-2.5 sm:p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0068FF] text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="font-mono font-bold text-sm sm:text-base">
                      {chapter.number}
                    </span>
                    {chapter.isCurrent && (
                      <span className={`px-1.5 py-0.2 text-[9px] font-bold rounded-full uppercase ${
                        isActive ? 'bg-white text-[#0068FF]' : 'bg-emerald-500 text-white'
                      }`}>
                        Now
                      </span>
                    )}
                  </div>
                  <span className={`text-[10px] font-mono mt-1 hidden sm:block truncate max-w-full ${
                    isActive ? 'text-white/90' : 'text-slate-400'
                  }`}>
                    {chapter.period.split('—')[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* ACTIVE FOCUSED CHAPTER CONTENT (Only One Chapter at a time!) */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-10 md:p-12 transition-all duration-300">
          
          {/* Chapter Top Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0068FF] font-mono font-bold text-base flex items-center justify-center border border-blue-100">
                {activeChapter.number}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono text-[#0068FF] uppercase tracking-wider">
                    {activeChapter.period}
                  </span>
                  {activeChapter.isCurrent && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                      {lang === 'vi' ? 'Vị trí Hiện tại' : 'Current Role'}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {activeChapter.title[lang]}
                </h3>
              </div>
            </div>

            {/* Quick stats or jump button if has related case */}
            {activeChapter.relatedCaseId && onSelectCase && (
              <button
                onClick={() => onSelectCase(activeChapter.relatedCaseId!)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-[#0068FF] text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>{lang === 'vi' ? 'Xem Case Study Điểm nhấn' : 'View Flagship Case'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Special Sub-navigation for Chapter 03 (Vua Nệm -> CMC -> F88) */}
          {isChapter03 && (
            <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                {lang === 'vi' ? 'Giai đoạn phát triển nội tại (Thứ tự: Gần nhất → Cũ hơn)' : 'Multi-stage Progression (Nearest → Oldest):'}
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'vuanem', name: 'Vua Nệm', period: '2022 — 2023', roleVi: 'Internal Communication Specialist', roleEn: 'Internal Communication Specialist' },
                  { id: 'cmc', name: 'CMC Global', period: '2021 — 2022', roleVi: 'Corporate Culture Executive', roleEn: 'Corporate Culture Executive' },
                  { id: 'f88', name: 'F88', period: '2020 — 2021', roleVi: 'Internal Engagement Executive', roleEn: 'Internal Engagement Executive' },
                ].map((co) => {
                  const isSubActive = activeSubCompany === co.id;
                  return (
                    <button
                      key={co.id}
                      onClick={() => setActiveSubCompany(co.id as any)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSubActive
                          ? 'bg-[#0068FF] text-white shadow-xs'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      <span>{co.name}</span>
                      <span className="opacity-75 font-mono ml-1.5 font-normal">({co.period})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chapter Narrative & Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            
            {/* Left: Role, Scope & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Narrative Story Box */}
              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {lang === 'vi' ? 'Bối cảnh & Dấu ấn vai trò' : 'Role Context & Evolution'}
                </span>
                <p>{activeChapter.story[lang]}</p>
              </div>

              {/* Core Scope / Responsibilities */}
              {activeChapter.scope && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#0068FF]" />
                    <span>{lang === 'vi' ? 'Phạm vi Đảm nhiệm Cốt lõi' : 'Core Scope of Ownership'}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeChapter.scope[lang].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 shadow-2xs"
                      >
                        <span className="text-[#0068FF] font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Deliverables / Highlights */}
              {activeChapter.highlights && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'vi' ? 'Kết quả & Dấu ấn Thực tế' : 'Key Milestones & Deliverables'}</span>
                  </h4>
                  <div className="space-y-2">
                    {activeChapter.highlights[lang].map((hl, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right: Verified Role Badge & Real Evidence Photo */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Verified Role Card Component */}
              {displayedRoles.length > 0 && (
                <div className="space-y-4">
                  {displayedRoles.map((r, idx) => (
                    <VerifiedRoleCard
                      key={idx}
                      role={r}
                      lang={lang}
                      onSelectCase={onSelectCase}
                    />
                  ))}
                </div>
              )}

              {/* Real Ceremony Visual Evidence if available */}
              {activeChapter.evidence && (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <CareerVisualEvidence
                    evidence={activeChapter.evidence}
                    lang={lang}
                  />
                </div>
              )}

            </div>

          </div>

          {/* Chapter Bottom Navigation: Previous / Next Chapter Controls */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevChapter}
                disabled={activeChapterIndex === 0}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeChapterIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 cursor-pointer shadow-2xs'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Cột mốc mới hơn (← Newer)' : '← Newer Chapter'}</span>
              </button>

              <button
                onClick={handleNextChapter}
                disabled={activeChapterIndex === CAREER_CHAPTERS.length - 1}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeChapterIndex === CAREER_CHAPTERS.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 cursor-pointer shadow-2xs'
                }`}
              >
                <span>{lang === 'vi' ? 'Cột mốc trước đó (Older →)' : 'Older Chapter →'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Guided Journey Next Section CTA */}
            {onNavigateNext && (
              <button
                onClick={onNavigateNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                <span>{lang === 'vi' ? 'TIẾP THEO: TRIẾT LÝ NGHỀ NGHIỆP' : 'NEXT: PROFESSIONAL PHILOSOPHY'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
