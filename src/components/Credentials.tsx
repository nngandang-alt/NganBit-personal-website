import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Language } from '../types';
import { GraduationCap, Award, CheckCircle2, ShieldAlert } from 'lucide-react';

interface CredentialsProps {
  lang: Language;
}

export const Credentials: React.FC<CredentialsProps> = ({ lang }) => {
  return (
    <section
      id="credentials"
      className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Học vấn & Chứng chỉ' : 'Education & Credentials'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === 'vi' ? 'Nền tảng học thuật & Năng lực tuyển chọn' : 'Academic Foundation & Selected Credentials'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            {lang === 'vi'
              ? 'Học vấn chính quy làm nền tảng tư duy và các chứng chỉ chuyên môn được chọn lọc xoay quanh các năng lực cốt lõi.'
              : 'Formal academic grounding complemented by curated specialized credentials across leadership, culture, and AI.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Education Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0068FF] uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Học vấn chính quy' : 'Formal Education'}</span>
            </div>

            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#0068FF] bg-blue-50 px-2.5 py-0.5 rounded">
                  {edu.degree[lang]} • {edu.period}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-1">
                  {edu.field[lang]}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {edu.institution[lang]}
                </p>
                {edu.note && (
                  <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-200/60">
                    {edu.note[lang]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Curated Certifications via LinkedIn (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#0068FF]" />
                <span>{lang === 'vi' ? 'Chứng chỉ chuyên môn (LinkedIn Source of Truth)' : 'Verified Professional Certifications'}</span>
              </div>
              <span className="text-[11px] text-[#0068FF] font-mono font-semibold">
                LinkedIn Verified
              </span>
            </div>

            {/* LinkedIn Verification Card */}
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                    Official Profile
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    linkedin.com/in/thuyngandang
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {lang === 'vi'
                    ? 'Hồ sơ Chứng chỉ Chuyên môn Trực tuyến'
                    : 'Verified Licenses & Certifications on LinkedIn'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-lg">
                  {lang === 'vi'
                    ? 'Nhằm bảo đảm tính xác thực (Factual Integrity) và cập nhật liên tục, toàn bộ chứng chỉ chuyên môn (AI, Leadership, Internal Comms, People & Culture) được đối chiếu trực tiếp từ hồ sơ LinkedIn chính thức.'
                    : 'To ensure strict factual integrity without outdated or unverified claims, all professional certifications across AI, Leadership, and Culture are anchored directly to the official LinkedIn profile.'}
                </p>
              </div>

              <a
                href="https://linkedin.com/in/thuyngandang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer shrink-0 self-start sm:self-center"
              >
                <span>{lang === 'vi' ? 'Xem trên LinkedIn' : 'View on LinkedIn'}</span>
                <span className="text-sm">↗</span>
              </a>
            </div>

            {/* Core Competency Clusters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
              {[
                { name: 'AI & Productivity', icon: '✦' },
                { name: 'People & Leadership', icon: '◈' },
                { name: 'Culture & Comms', icon: '◉' },
                { name: 'Experience Systems', icon: '▲' },
              ].map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/80 border border-slate-200/60 text-center">
                  <span className="text-slate-400 text-xs block mb-0.5">{c.icon}</span>
                  <span className="text-[11px] font-semibold text-slate-700 block leading-tight">{c.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
              {lang === 'vi'
                ? '* Nguồn dữ liệu kiểm chứng duy nhất theo quy định: LinkedIn Profile. Không sử dụng danh sách cũ hoặc chứng chỉ chưa được xác thực.'
                : '* Single source of truth: LinkedIn Profile. Outdated CV lists and unverified credentials are systematically excluded.'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
