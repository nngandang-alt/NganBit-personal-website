import React from 'react';
import { EXPERIENCE_ROLES } from '../data/portfolioData';
import { Language } from '../types';
import { Briefcase, Building2, MapPin, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ExperienceProps {
  lang: Language;
  onSelectCase?: (caseId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ lang, onSelectCase }) => {
  return (
    <section
      id="experience"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8FAFC] border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Lớp 2: Kinh nghiệm & Trách nhiệm thực tế' : 'Layer 2: Experience & Verified Scope'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {lang === 'vi' ? (
              <>
                Kinh nghiệm thực tiễn:<br />
                <span className="text-[#0068FF]">Phạm vi trách nhiệm &amp; Dấu ấn triển khai.</span>
              </>
            ) : (
              <>
                Professional Experience:<br />
                <span className="text-[#0068FF]">Authentic Scope, Ownership &amp; Impact.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {lang === 'vi'
              ? 'Tôn trọng sự thật khách quan về chức danh chính thức (Official Titles) và bối cảnh tổ chức. Năng lực được chứng minh qua phạm vi quản trị thực tế (Scope), mức độ phức tạp của các bên liên quan và kết quả tạo ra.'
              : 'Preserving factual integrity regarding official titles and organizational context. Demonstrating capability through authentic ownership, leadership scope, and tangible contributions.'}
          </p>
        </div>

        {/* Roles Grid / Timeline Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {EXPERIENCE_ROLES.map((role) => {
            const isFlagship = role.tier === 'flagship';
            const isHigh = role.tier === 'high';
            const isCompact = role.tier === 'compact';

            return (
              <div
                key={role.id}
                className={`bg-white rounded-3xl transition-all duration-300 relative overflow-hidden ${
                  isFlagship
                    ? 'p-7 sm:p-11 border-2 border-[#0068FF]/30 shadow-lg shadow-blue-50/50 ring-1 ring-[#0068FF]/20'
                    : isHigh
                    ? 'p-6 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-md'
                    : 'p-5 sm:p-7 border border-slate-200/70 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Header: Title, Company, Period */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-xs font-semibold border border-[#0068FF]/20">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{lang === 'vi' ? 'Chức danh chính thức' : 'Official Title'}</span>
                      </span>
                      {isFlagship && (
                        <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{lang === 'vi' ? 'Hiện tại • Dẫn dắt quy mô lớn' : 'Present • Leading at Scale'}</span>
                        </span>
                      )}
                      {role.workType && (
                        <span className="text-xs text-slate-500 font-medium px-2 py-0.5 rounded bg-slate-100">
                          {role.workType}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-bold text-slate-900 tracking-tight ${
                        isFlagship ? 'text-2xl sm:text-3xl md:text-4xl' : isHigh ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl md:text-2xl'
                      }`}
                    >
                      {role.officialTitle[lang]}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-slate-600 font-medium">
                      <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                        <Building2 className="w-4 h-4 text-[#0068FF]" />
                        <span>{role.company}</span>
                      </span>
                      <span>•</span>
                      <span className="font-mono text-slate-500">{role.period}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{role.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Related Case Study link if available */}
                  {role.relatedCaseId && (
                    <button
                      onClick={() => onSelectCase && onSelectCase(role.relatedCaseId!)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F0F6FF] hover:bg-[#0068FF] text-[#0068FF] hover:text-white text-xs font-semibold transition-all cursor-pointer shrink-0 self-start border border-[#0068FF]/20"
                    >
                      <span>{lang === 'vi' ? 'Xem Case Study liên quan' : 'View Related Case'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Scope Distinction Callout for FPTU (Student Experience != Employee Experience) */}
                {role.scopeDistinction && (
                  <div className="my-4 p-3.5 sm:p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 leading-relaxed font-normal flex items-start gap-2.5">
                    <span className="text-amber-600 font-bold shrink-0 mt-0.5">ℹ</span>
                    <div>
                      <span className="font-semibold text-amber-950">
                        {lang === 'vi' ? 'Phân định phạm vi: ' : 'Scope Distinction: '}
                      </span>
                      <span>{role.scopeDistinction[lang]}</span>
                    </div>
                  </div>
                )}

                {/* Context Note if title differs from scope */}
                {role.actualScopeNote && (
                  <div className="my-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    <span className="font-semibold text-slate-900">
                      {lang === 'vi' ? 'Bối cảnh vai trò: ' : 'Role Context: '}
                    </span>
                    {role.actualScopeNote[lang]}
                  </div>
                )}

                {/* Main Content Grid: Scope & Impact */}
                <div className={`grid grid-cols-1 ${isCompact ? 'lg:grid-cols-12 gap-6 mt-4' : 'lg:grid-cols-12 gap-8 mt-6'}`}>
                  
                  {/* Left (7 cols for flagship/high, 7 or 12 for compact): Mandate & Scope */}
                  <div className={`${isCompact ? 'lg:col-span-7' : 'lg:col-span-7'} flex flex-col gap-2.5`}>
                    <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                      {lang === 'vi' ? 'Phạm vi nhiệm vụ & Quyền hạn (Scope & Mandate)' : 'Mandate & Scope of Ownership'}
                    </h4>
                    <ul className="space-y-2">
                      {role.mandateScope[lang].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0068FF] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Leadership scope badge if verified */}
                    {role.leadershipScope && (
                      <div className="mt-2 p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-800">
                        <span className="font-semibold text-[#0068FF]">
                          {lang === 'vi' ? 'Quy mô lãnh đạo / Dẫn dắt: ' : 'Leadership Scope: '}
                        </span>
                        {role.leadershipScope[lang]}
                      </div>
                    )}
                  </div>

                  {/* Right (5 cols): Selected Impact */}
                  <div className={`${isCompact ? 'lg:col-span-5' : 'lg:col-span-5'} flex flex-col gap-2.5 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-slate-200/70`}>
                    <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'vi' ? 'Dấu ấn thực tiễn (Selected Impact)' : 'Selected Practical Impact'}</span>
                    </h4>
                    <ul className="space-y-2">
                      {role.selectedImpact[lang].map((impact, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">✓</span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
