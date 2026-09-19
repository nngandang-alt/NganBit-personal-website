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

          {/* Right: Curated Certifications (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#0068FF]" />
                <span>{lang === 'vi' ? 'Chứng chỉ chuyên môn chọn lọc' : 'Curated Certifications'}</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                {lang === 'vi' ? '4 chứng chỉ trọng tâm' : '4 Core Domains'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/70 hover:border-[#0068FF]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-bold text-slate-600">
                        {cert.domain}
                      </span>
                      {cert.year && (
                        <span className="text-[10px] font-mono text-slate-400">{cert.year}</span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {cert.title[lang]}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-100">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
              {lang === 'vi'
                ? '* Chỉ hiển thị các chứng chỉ liên quan trực tiếp đến định vị nghề nghiệp. Chi tiết chứng chỉ và liên kết kiểm chứng được cập nhật trong CONTENT_GAPS.md.'
                : '* Displaying only credentials directly relevant to core positioning. Additional certificates and verification links are curated in CONTENT_GAPS.md.'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
