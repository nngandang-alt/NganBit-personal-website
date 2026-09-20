import React, { useState } from 'react';
import { EDUCATION_LEARNING_DATA } from '../data/portfolioData';
import { Language } from '../types';
import { GraduationCap, Award, BookOpen, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface CredentialsProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const Credentials: React.FC<CredentialsProps> = ({ lang, onNavigateNext }) => {
  const [activeTab, setActiveTab] = useState<'formal' | 'interdisciplinary' | 'certifications'>('formal');

  const activeCategory = EDUCATION_LEARNING_DATA.find((c) => c.id === activeTab) || EDUCATION_LEARNING_DATA[0];

  return (
    <section
      id="education"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Học Vấn & Phát Triển Liên Tục' : 'Education & Continuous Learning'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Nền Tảng Tri Thức:<br />
                    <span className="text-[#0068FF]">Học Vấn Chính Quy, Liên Ngành &amp; Chứng Chỉ Chuyên Môn.</span>
                  </>
                ) : (
                  <>
                    Knowledge Foundation:<br />
                    <span className="text-[#0068FF]">Formal Education, Applied Disciplines &amp; Certifications.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Cấu trúc 3 trụ cột tri thức vững chắc: từ bằng cấp đại học chính quy, nghiên cứu tâm lý học hành vi đến cập nhật liên tục các năng lực AI hiện đại.'
                : 'A tripartite knowledge foundation: formal business degree, behavioral science exploration, and ongoing AI & culture certifications.'}
            </p>
          </div>
        </div>

        {/* Interactive 3-Pillar Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8 p-1.5 rounded-2xl bg-slate-50 border border-slate-200/80">
          {[
            { id: 'formal', label: { vi: 'Học vấn Chính quy', en: 'Formal Education' }, icon: GraduationCap },
            { id: 'interdisciplinary', label: { vi: 'Học tập Liên ngành', en: 'Interdisciplinary Learning' }, icon: BookOpen },
            { id: 'certifications', label: { vi: 'Chứng chỉ Chuyên môn', en: 'Professional Certifications' }, icon: Award },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0068FF] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{tab.label[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Focused Panel */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-10 mb-12">
          <div className="mb-6 pb-4 border-b border-slate-200/80">
            <h3 className="text-xl font-bold text-slate-900">
              {activeCategory.title[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {activeCategory.description[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                        {item.badge[lang]}
                      </span>
                    )}
                    {item.period && (
                      <span className="text-xs text-slate-400 font-mono">{item.period}</span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {item.title[lang]}
                  </h4>

                  {item.institution && (
                    <p className="text-xs font-semibold text-[#0068FF] mb-3">
                      {item.institution[lang]}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description[lang]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: KẾT NỐI & ĐỐI THOẠI (CONNECT)' : 'NEXT: CONNECT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
