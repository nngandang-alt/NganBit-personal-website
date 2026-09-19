import React, { useState } from 'react';
import { CAREER_CHAPTERS } from '../data/portfolioData';
import { Language } from '../types';
import { Compass, ArrowRight, Lightbulb, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CareerStoryProps {
  lang: Language;
}

export const CareerStory: React.FC<CareerStoryProps> = ({ lang }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeChapter = CAREER_CHAPTERS[activeChapterIndex];

  return (
    <section
      id="story"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8FAFC] border-b border-slate-200/70 relative overflow-hidden"
    >
      {/* Background Tech Network Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#0068FF_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Lớp 1: Câu chuyện nghề nghiệp' : 'Layer 1: Career Story'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {lang === 'vi' ? (
              <>
                Hành trình tiến hóa nghề nghiệp:<br />
                <span className="text-[#0068FF]">Từ Truyền thông đến Tư duy Hệ thống &amp; Dẫn dắt.</span>
              </>
            ) : (
              <>
                Professional Evolution:<br />
                <span className="text-[#0068FF]">From Communication to Systems &amp; Leadership.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed mt-1">
            {lang === 'vi'
              ? 'Không kể sự nghiệp bằng danh sách công ty rời rạc. Đây là hành trình của những bước chuyển hóa: cách tôi học hỏi, mở rộng bộ công cụ và phát triển năng lực qua 5 chương then chốt.'
              : 'Beyond a conventional list of job titles, this is a continuous professional progression: how curiosity, systems thinking, and leadership expanded across five key chapters.'}
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP CONNECTED JOURNEY TIMELINE (Horizontal flow) */}
        {/* ============================================================== */}
        <div className="hidden lg:block mb-10">
          <div className="relative">
            {/* The Continuous Connecting Blue Line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-200 z-0">
              <div
                className="h-full bg-gradient-to-r from-[#0068FF] to-[#0084FF] transition-all duration-500"
                style={{
                  width: `${(activeChapterIndex / (CAREER_CHAPTERS.length - 1)) * 100}%`,
                }}
              />
            </div>

            {/* Step Nodes */}
            <div className="relative z-10 grid grid-cols-5 gap-3">
              {CAREER_CHAPTERS.map((chapter, idx) => {
                const isActive = idx === activeChapterIndex;
                const isPassed = idx < activeChapterIndex;

                return (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapterIndex(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                  >
                    {/* Node circle */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0068FF] text-white ring-4 ring-[#0068FF]/20 shadow-md scale-110'
                          : isPassed
                          ? 'bg-blue-50 text-[#0068FF] border-2 border-[#0068FF]'
                          : 'bg-white text-slate-400 border-2 border-slate-200 group-hover:border-slate-400'
                      }`}
                    >
                      {chapter.number}
                    </div>

                    {/* Node label */}
                    <div className="mt-3 px-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                        {chapter.period}
                      </span>
                      <span
                        className={`text-xs font-semibold leading-tight line-clamp-2 mt-0.5 transition-colors ${
                          isActive ? 'text-[#0068FF] font-bold' : 'text-slate-700 group-hover:text-slate-900'
                        }`}
                      >
                        {chapter.title[lang]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE CONNECTED JOURNEY TIMELINE (Horizontal Pill Scroll) */}
        {/* ============================================================== */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {CAREER_CHAPTERS.map((chapter, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <button
                key={chapter.id}
                onClick={() => setActiveChapterIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0068FF] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>Ch. {chapter.number}</span>
                <span className="text-[11px] opacity-90 truncate max-w-[120px]">
                  {chapter.title[lang]}
                </span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* ACTIVE CHAPTER DETAIL CARD (Connected Deep-Dive View) */}
        {/* ============================================================== */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-xl shadow-slate-100 relative transition-all duration-300">
          
          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#0068FF]/10 text-[#0068FF] font-mono font-bold text-xs">
                Chapter {activeChapter.number}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {activeChapter.period}
              </span>
            </div>

            {activeChapter.contextHighlight && (
              <span className="text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                {activeChapter.contextHighlight[lang]}
              </span>
            )}
          </div>

          {/* Main Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6 sm:mt-8 items-start">
            
            {/* Left Column (8 cols): Title & Story Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  {activeChapter.title[lang]}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#0068FF] mt-1.5">
                  {activeChapter.tagline[lang]}
                </p>
              </div>

              <div className="text-base sm:text-[1.05rem] text-slate-700 leading-relaxed space-y-4">
                <p>{activeChapter.story[lang]}</p>
              </div>

              {/* Core Evolution Shift Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F6FF]/60 border border-[#0068FF]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
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
            </div>

            {/* Right Column (4 cols): Key Realization & Toolkit */}
            <div className="lg:col-span-4 flex flex-col gap-5 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
              
              {/* Key Realization Callout */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0068FF] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-[#0068FF]" />
                  <span>{lang === 'vi' ? 'Nhận thức cốt lõi' : 'Key Realization'}</span>
                </div>
                <blockquote className="text-sm text-slate-800 italic leading-relaxed pl-3 border-l-2 border-[#0068FF]">
                  “{activeChapter.keyRealization[lang]}”
                </blockquote>
              </div>

              {/* Toolkit tags */}
              <div className="pt-4 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2.5">
                  {lang === 'vi' ? 'Bộ công cụ rèn luyện' : 'Acquired Toolkit'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeChapter.toolkit.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chapter navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 text-xs">
                <button
                  disabled={activeChapterIndex === 0}
                  onClick={() => setActiveChapterIndex(Math.max(0, activeChapterIndex - 1))}
                  className="text-slate-500 hover:text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed font-medium cursor-pointer"
                >
                  ← {lang === 'vi' ? 'Chương trước' : 'Previous'}
                </button>
                <span className="text-slate-400 font-mono text-[11px]">
                  {activeChapterIndex + 1} / {CAREER_CHAPTERS.length}
                </span>
                <button
                  disabled={activeChapterIndex === CAREER_CHAPTERS.length - 1}
                  onClick={() => setActiveChapterIndex(Math.min(CAREER_CHAPTERS.length - 1, activeChapterIndex + 1))}
                  className="text-[#0068FF] hover:text-[#0052CC] disabled:opacity-40 disabled:cursor-not-allowed font-semibold cursor-pointer"
                >
                  {lang === 'vi' ? 'Chương kế tiếp' : 'Next Chapter'} →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
