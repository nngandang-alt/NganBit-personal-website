import React, { useState } from 'react';
import { CAREER_CHAPTERS } from '../data/portfolioData';
import { Language } from '../types';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  ArrowUpRight,
  CheckCircle2,
  Building,
  Calendar,
  MapPin,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
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
  const [activeSubCompany, setActiveSubCompany] = useState<'all' | 'vuanem' | 'cmc' | 'f88'>('vuanem');

  const activeChapter = CAREER_CHAPTERS[activeChapterIndex] || CAREER_CHAPTERS[0];
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
  const rawRoles = activeChapter.verifiedRoles || [];
  const displayedRoles = isChapter03
    ? rawRoles.filter((r) => {
        if (activeSubCompany === 'all') return true;
        const co = (r.company || '').toLowerCase();
        if (activeSubCompany === 'vuanem') return co.includes('vua nệm') || co.includes('vuanem') || r.id.includes('vuanem');
        if (activeSubCompany === 'cmc') return co.includes('cmc') || r.id.includes('cmc');
        if (activeSubCompany === 'f88') return co.includes('f88') || r.id.includes('f88');
        return true;
      })
    : rawRoles;

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
                ? 'Mô hình xem tập trung theo từng chương: Chọn một cột mốc để khám phá trọn vẹn câu chuyện năng lực, phạm vi đảm nhiệm và bằng chứng thực tiễn.'
                : 'Focused chapter model: Select any milestone to inspect verified ownership, capability progression, and authentic ceremony artifacts.'}
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
        {/* ACTIVE FOCUSED CHAPTER CONTENT (Full Verified Depth) */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/90 shadow-lg shadow-slate-200/40 p-6 sm:p-10 md:p-12 transition-all duration-300">
          
          {/* Chapter Top Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0068FF] font-mono font-bold text-base flex items-center justify-center border border-blue-100">
                {activeChapter.number}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold font-mono text-[#0068FF] uppercase tracking-wider">
                    {activeChapter.period}
                  </span>
                  {activeChapter.isCurrent && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                      {lang === 'vi' ? 'Vị trí Hiện tại' : 'Current Role'}
                    </span>
                  )}
                  {activeChapter.internalProgression && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[10px] font-bold font-mono border border-blue-200">
                      {activeChapter.internalProgression}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {activeChapter.title[lang]}
                </h3>
              </div>
            </div>

            {/* Quick stats or jump button if has related case */}
            {activeChapter.contextHighlight && (
              <span className="text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                {activeChapter.contextHighlight[lang]}
              </span>
            )}
          </div>

          {/* Special Sub-navigation for Chapter 03 (Vua Nệm | CMC | F88) */}
          {isChapter03 && (
            <div className="mb-8 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {lang === 'vi' ? 'Chọn công ty để xem chi tiết đầy đủ (Gần nhất → Cũ hơn):' : 'Select organization for full verified details (Recent → Past):'}
                </span>
                <span className="text-xs text-[#0068FF] font-medium font-mono">
                  {lang === 'vi' ? '3 cột mốc chuyển dịch văn hóa' : '3 pivotal culture milestones'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: 'vuanem', name: 'Vua Nệm', period: '2022 — 2023', roleTitle: 'Acting Internal Communication Lead (Happy Journey & EVP)' },
                  { id: 'cmc', name: 'CMC Corporation', period: '2021 — 2022', roleTitle: 'Corporate Culture Executive (C7+ Daily Habits)' },
                  { id: 'f88', name: 'F88', period: '2020 — 2021', roleTitle: 'Internal Engagement Executive' },
                  { id: 'all', name: lang === 'vi' ? 'Xem cả 3 giai đoạn' : 'View All 3 Stages', period: '2020 — 2023', roleTitle: 'Full Trajectory' },
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
            
            {/* Left Column (8 cols): Title, Tagline, Story, Core Evolution Shift */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0068FF]">
                  {activeChapter.tagline[lang]}
                </p>
                <div className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
                  <p>{activeChapter.story[lang]}</p>
                </div>
              </div>

              {/* Core Evolution Shift Box */}
              {activeChapter.coreShift && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F6FF]/70 border border-[#0068FF]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 block mb-0.5">
                      {lang === 'vi' ? 'Điểm bắt đầu' : 'Initial Stance'}
                    </span>
                    <span className="font-medium text-slate-700">
                      {activeChapter.coreShift.from[lang]}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center text-[#0068FF] px-2 shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#0068FF] block mb-0.5 font-bold">
                      {lang === 'vi' ? 'Bước chuyển hóa' : 'Transformed Competency'}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {activeChapter.coreShift.to[lang]}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Key Realization & Acquired Toolkit */}
            <div className="lg:col-span-4 flex flex-col gap-5 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
              
              {/* Key Realization Callout */}
              {activeChapter.keyRealization && (
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0068FF] uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-[#0068FF]" />
                    <span>{lang === 'vi' ? 'Nhận thức cốt lõi' : 'Key Realization'}</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-800 italic leading-relaxed pl-3 border-l-2 border-[#0068FF]">
                    “{activeChapter.keyRealization[lang]}”
                  </blockquote>
                </div>
              )}

              {/* Acquired Toolkit tags */}
              {activeChapter.toolkit && activeChapter.toolkit.length > 0 && (
                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2.5">
                    {lang === 'vi' ? 'Bộ công cụ rèn luyện' : 'Acquired Toolkit'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeChapter.toolkit.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* ============================================================== */}
          {/* VERIFIED EXPERIENCE SECTION (Full Cards for Active Roles) */}
          {/* ============================================================== */}
          {displayedRoles.length > 0 && (
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0068FF]">
                  {lang === 'vi' ? 'Trách nhiệm & Dấu ấn thực tế (Verified Scope & Practical Evidence)' : 'Verified Scope & Practical Evidence'}
                </span>
                <div className="h-px w-10 sm:w-16 bg-[#0068FF]/30" />
              </div>

              <div className="flex flex-col gap-6">
                {displayedRoles.map((role) => (
                  <VerifiedRoleCard
                    key={role.id}
                    role={role}
                    lang={lang}
                    onSelectCase={onSelectCase}
                    isSubBlock={displayedRoles.length > 1}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* REAL CEREMONY VISUAL EVIDENCE SECTION */}
          {/* ============================================================== */}
          {activeChapter.visualEvidence && (
            <CareerVisualEvidence evidence={activeChapter.visualEvidence} lang={lang} />
          )}

          {/* Chapter Bottom Navigation: Previous / Next Chapter Controls */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            
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
                <span>{lang === 'vi' ? '← Cột mốc mới hơn' : '← Newer Chapter'}</span>
              </button>

              <div className="px-3 py-1.5 rounded-lg bg-slate-100 font-mono text-xs font-bold text-slate-700">
                {activeChapter.number} / 06
              </div>

              <button
                onClick={handleNextChapter}
                disabled={activeChapterIndex === CAREER_CHAPTERS.length - 1}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeChapterIndex === CAREER_CHAPTERS.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 cursor-pointer shadow-2xs'
                }`}
              >
                <span>{lang === 'vi' ? 'Cột mốc trước đó →' : 'Older Chapter →'}</span>
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
