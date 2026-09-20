import React from 'react';
import { VerifiedRoleItem, Language } from '../types';
import { ShieldCheck, Building2, MapPin, CheckCircle2, ArrowUpRight, Users, UserCheck, ArrowRight } from 'lucide-react';

interface VerifiedRoleCardProps {
  role: VerifiedRoleItem;
  lang: Language;
  onSelectCase?: (caseId: string) => void;
  isSubBlock?: boolean;
}

export const VerifiedRoleCard: React.FC<VerifiedRoleCardProps> = ({
  role,
  lang,
  onSelectCase,
  isSubBlock = false,
}) => {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${
        isSubBlock
          ? 'bg-white/90 border-slate-200 p-5 sm:p-6 shadow-xs'
          : 'bg-white border-slate-200/90 p-6 sm:p-8 shadow-xs'
      }`}
    >
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="flex-1">
          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            {role.subNumber && (
              <span className="font-mono text-xs font-bold text-[#0068FF] bg-[#0068FF]/10 px-2.5 py-0.5 rounded-full">
                {role.subNumber}
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-semibold border border-blue-200/80">
              <ShieldCheck className="w-3 h-3" />
              <span>{lang === 'vi' ? 'Chức danh chính thức' : 'Official Title'}</span>
            </span>

            {role.milestoneTag && (
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold uppercase tracking-tight">
                {role.milestoneTag[lang]}
              </span>
            )}

            {role.reportingTo && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[11px] font-medium border border-purple-200/70">
                <UserCheck className="w-3 h-3" />
                <span>
                  {lang === 'vi' ? 'Báo cáo: ' : 'Reports to: '}
                  {role.reportingTo[lang]}
                </span>
              </span>
            )}

            {role.teamSize && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200/70">
                <Users className="w-3 h-3" />
                <span>
                  {lang === 'vi' ? 'Quy mô team: ' : 'Team: '}
                  {role.teamSize}
                </span>
              </span>
            )}
          </div>

          {/* Official Job Title */}
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {role.officialTitle[lang]}
          </h4>

          {/* Company, Period, Location */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <Building2 className="w-3.5 h-3.5 text-[#0068FF]" />
              <span>{role.company}</span>
            </span>
            <span>•</span>
            <span className="font-mono text-slate-500 font-medium">{role.period}</span>
            {role.location && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3 h-3" />
                  <span>{role.location}</span>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Related Case Study Link Button */}
        {role.relatedCaseId && onSelectCase && (
          <button
            onClick={() => onSelectCase(role.relatedCaseId!)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F0F6FF] hover:bg-[#0068FF] text-[#0068FF] hover:text-white text-xs font-semibold transition-all cursor-pointer shrink-0 self-start border border-[#0068FF]/20"
          >
            <span>{lang === 'vi' ? 'Xem Case Study liên quan' : 'View Related Case'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Internal Progression Steps (e.g. Chapter 01 SRO -> PROMOTED -> Head of SRO) */}
      {role.progressionSteps && role.progressionSteps.length > 0 && (
        <div className="my-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-mono uppercase text-[11px] font-bold">
            <span>{lang === 'vi' ? 'Tiến trình thăng tiến:' : 'Career Progression:'}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {role.progressionSteps.map((step, sIdx) => (
              <React.Fragment key={sIdx}>
                <div
                  className={`px-3 py-1.5 rounded-lg border font-medium ${
                    step.isCurrent
                      ? 'bg-blue-50/90 border-[#0068FF]/40 text-[#0068FF] font-bold shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <span>{step.title[lang]}</span>
                  <span className="block text-[10px] font-mono text-slate-500 mt-0.5">{step.period}</span>
                </div>

                {sIdx < role.progressionSteps!.length - 1 && (
                  <div className="flex items-center gap-1 text-[#0068FF] font-mono text-[10px] font-bold uppercase">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Bổ nhiệm' : 'Promoted'}</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Scope Distinction Callout (e.g. SX vs EX, No Corporate Relations) */}
      {role.scopeDistinction && (
        <div className="my-3.5 p-3 sm:p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs sm:text-[13px] text-blue-950 leading-relaxed flex items-start gap-2.5">
          <span className="text-[#0068FF] font-bold shrink-0 mt-0.5">ℹ</span>
          <div>
            <span className="font-bold text-[#0068FF]">
              {lang === 'vi' ? 'Phân định phạm vi: ' : 'Scope Distinction: '}
            </span>
            <span>{role.scopeDistinction[lang]}</span>
          </div>
        </div>
      )}

      {/* Actual Scope Note / Meaning Context */}
      {role.actualScopeNote && (
        <div className="my-3 p-3 sm:p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/70 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          <span className="font-semibold text-slate-900">
            {lang === 'vi' ? 'Bối cảnh vai trò: ' : 'Role Context: '}
          </span>
          <span>{role.actualScopeNote[lang]}</span>
        </div>
      )}

      {/* Main Grid: Scope & Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-start">
        {/* Left (7 cols): Mandate & Scope of Ownership */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            {lang === 'vi' ? 'Phạm vi nhiệm vụ & Trách nhiệm (Scope & Mandate)' : 'Mandate & Scope of Ownership'}
          </h5>
          <ul className="space-y-2.5">
            {role.mandateScope[lang].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0068FF] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Leadership Scope note if present */}
          {role.leadershipScope && (
            <div className="mt-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-800 leading-relaxed">
              <span className="font-semibold text-[#0068FF]">
                {lang === 'vi' ? 'Quy mô lãnh đạo / Dẫn dắt: ' : 'Leadership Scope: '}
              </span>
              <span>{role.leadershipScope[lang]}</span>
            </div>
          )}
        </div>

        {/* Right (5 cols): Selected Practical Impact */}
        <div className="lg:col-span-5 flex flex-col gap-2.5 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'vi' ? 'Dấu ấn thực tiễn (Selected Impact)' : 'Selected Practical Impact'}</span>
          </h5>
          <ul className="space-y-2.5">
            {role.selectedImpact[lang].map((impact, idx) => (
              <li key={idx} className="text-xs sm:text-[13px] text-slate-600 leading-relaxed flex items-start gap-2">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
