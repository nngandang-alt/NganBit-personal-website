import React from 'react';
import { RECOGNITION_DATA } from '../data/portfolioData';
import { Language } from '../types';
import { MessageSquareHeart, Quote, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface RecognitionProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const Recognition: React.FC<RecognitionProps> = ({ lang, onNavigateNext }) => {
  const items = RECOGNITION_DATA || [];

  return (
    <section
      id="recognition"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? '06 — Sự Công Nhận & Tiếng Nói Người Tham Dự' : '06 — Recognition / Voices'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Sự Ghi Nhận:<br />
                    <span className="text-[#0068FF]">Trải Nghiệm Được Cảm Nhận Bởi Con Người.</span>
                  </>
                ) : (
                  <>
                    Recognition &amp; Voices:<br />
                    <span className="text-[#0068FF]">How People Truly Experienced the Work.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Nếu Case Studies là giải pháp kỹ thuật, thì đây là minh chứng cho sự thấu cảm: những phản hồi thực tế từ phụ huynh, sinh viên và đội ngũ đồng hành.'
                : 'While Case Studies show what was built, Voices show how it was felt: authentic qualitative feedback from attendees, families, and team collaborators.'}
            </p>
          </div>
        </div>

        {/* Qualitative Cards Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {items.map((item) => {
              const highlights = item.highlights ? ((item.highlights as any)[lang] || []) : [];
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all ${
                    item.isHighlight
                      ? 'bg-[#F8FAFC] border-blue-200/80 shadow-md shadow-blue-500/5'
                      : 'bg-white border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Meta Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                        {item.category ? item.category[lang] : ''}
                      </span>
                      {item.year && (
                        <span className="text-xs text-slate-400 font-mono">{item.year}</span>
                      )}
                    </div>

                    {/* Source and context */}
                    <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                      {item.source ? item.source[lang] : ''}
                    </h4>
                    {item.context && (
                      <p className="text-[11px] text-slate-500 mb-4">
                        {item.context[lang]}
                      </p>
                    )}

                    {/* Image Evidence if present */}
                    {item.image && (
                      <div className="mb-4 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.source ? item.source[lang] : 'Recognition evidence'}
                          className="w-full h-40 sm:h-44 object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Direct Authentic Quote */}
                    {item.quote && (
                      <div className="relative p-4 rounded-2xl bg-white border border-slate-200/80 mb-4 text-xs text-slate-700 leading-relaxed italic">
                        <Quote className="w-4 h-4 text-[#0068FF]/40 mb-1" />
                        {item.quote[lang]}
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  {highlights.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 space-y-1.5">
                      {highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 mb-12 text-slate-500 text-sm">
            {lang === 'vi' ? 'Đang cập nhật các ghi nhận định tính từ người tham dự.' : 'Qualitative participant voices being curated.'}
          </div>
        )}

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: PHƯƠNG PHÁP LÀM VIỆC (HOW I WORK)' : 'NEXT: HOW I WORK'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
