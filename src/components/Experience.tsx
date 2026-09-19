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
        <div className="flex flex-col gap-8 sm:gap-10">
          {EXPERIENCE_ROLES.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Header: Title, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-xs font-semibold border border-[#0068FF]/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{lang === 'vi' ? 'Chức danh chính thức' : 'Official Title'}</span>
                    </span>
                    {role.workType && (
                      <span className="text-xs text-slate-500 font-medium px-2 py-0.5 rounded bg-slate-100">
                        {role.workType}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
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

              {/* Context Note if title differs from scope */}
              {role.actualScopeNote && (
                <div className="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  <span className="font-semibold text-slate-900">
                    {lang === 'vi' ? 'Ghi chú bối cảnh: ' : 'Scope Context: '}
                  </span>
                  {role.actualScopeNote[lang]}
                </div>
              )}

              {/* Main Content Grid: Scope & Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                
                {/* Left (7 cols): Mandate & Scope */}
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'vi' ? 'Phạm vi nhiệm vụ & Quyền hạn (Scope & Mandate)' : 'Mandate & Scope of Ownership'}
                  </h4>
                  <ul className="space-y-3">
                    {role.mandateScope[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
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
                <div className="lg:col-span-5 flex flex-col gap-3 bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-slate-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'vi' ? 'Dấu ấn thực tiễn (Selected Impact)' : 'Selected Practical Impact'}</span>
                  </h4>
                  <ul className="space-y-2.5">
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
          ))}
        </div>

      </div>
    </section>
  );
};
