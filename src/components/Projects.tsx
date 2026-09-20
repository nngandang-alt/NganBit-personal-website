import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, Language } from '../types';
import { CaseStudyCover } from './CaseStudyCover';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Award,
  Film,
  Lightbulb,
  Compass,
  Users,
  Layers,
  CheckCircle2,
  FolderKanban,
} from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  onNavigateNext?: () => void;
  activeCaseId?: string | null;
}

export const Projects: React.FC<ProjectsProps> = ({
  lang,
  onNavigateNext,
  activeCaseId,
}) => {
  // Default to first case study or activeCaseId
  const defaultIdx = activeCaseId
    ? Math.max(0, CASE_STUDIES.findIndex((c) => c.id === activeCaseId))
    : 0;

  const [selectedCaseIndex, setSelectedCaseIndex] = useState(defaultIdx);
  const activeCase = CASE_STUDIES[selectedCaseIndex] || CASE_STUDIES[0];

  const handlePrevCase = () => {
    if (selectedCaseIndex > 0) setSelectedCaseIndex(selectedCaseIndex - 1);
  };

  const handleNextCase = () => {
    if (selectedCaseIndex < CASE_STUDIES.length - 1) setSelectedCaseIndex(selectedCaseIndex + 1);
  };

  // Safe impact extractor
  const getImpactList = (caseStudy: CaseStudy): string[] => {
    if (!caseStudy || !caseStudy.impact) return [];
    if (Array.isArray(caseStudy.impact)) return caseStudy.impact;
    return (caseStudy.impact as any)[lang] || (caseStudy.impact as any).vi || [];
  };

  const impactList = getImpactList(activeCase);

  return (
    <section
      id="cases"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? '04 — Case Studies Tiêu Biểu' : '04 — Selected Case Studies'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Nghiên Cứu Điển Hình:<br />
                    <span className="text-[#0068FF]">Giải quyết Bài toán Tổ chức &amp; Thiết kế Trải nghiệm.</span>
                  </>
                ) : (
                  <>
                    Selected Case Studies:<br />
                    <span className="text-[#0068FF]">Solving Organizational Challenges with Impact.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Khám phá chi tiết từng case study chuyên sâu: từ bối cảnh, thách thức, giải pháp công nghệ AI đến kết quả định lượng được kiểm chứng.'
                : 'Deep-dive into verified flagship initiatives: from institutional context and challenges to AI operational workflows and measured impact.'}
            </p>
          </div>
        </div>

        {/* Case Study Selector Tabs (Progressive Disclosure) */}
        <div className="mb-8 flex flex-wrap gap-2.5 p-2 rounded-2xl bg-slate-50 border border-slate-200/80">
          {CASE_STUDIES.map((cs, idx) => {
            const isActive = idx === selectedCaseIndex;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseIndex(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0068FF] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <FolderKanban className="w-3.5 h-3.5" />
                <span>{cs.title[lang]}</span>
                <span className="opacity-75 font-mono">({cs.year})</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE CASE STUDY FULL DEEP DIVE CONTAINER */}
        <div className="bg-[#F8FAFC] rounded-3xl sm:rounded-[36px] border border-slate-200/90 shadow-lg shadow-slate-200/30 p-6 sm:p-10 md:p-12 space-y-10">
          
          {/* Header of Active Case */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-xs font-bold font-mono">
                {activeCase.organization}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {activeCase.category[lang]}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {activeCase.year}</span>
              {activeCase.accentBadge && (
                <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700 text-[10px] font-bold">
                  {activeCase.accentBadge[lang]}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              {activeCase.title[lang]}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#0068FF] font-medium leading-relaxed">
              {activeCase.subtitle[lang]}
            </p>
          </div>

          {/* Reusable Cover Visual if present */}
          {activeCase.coverImage && (
            <div className="overflow-hidden rounded-2xl shadow-xs border border-slate-200">
              <CaseStudyCover
                image={activeCase.coverImage}
                projectId={activeCase.id}
                lang={lang}
              />
            </div>
          )}

          {/* Context, Challenge & Insight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                {lang === 'vi' ? 'Bối cảnh khởi phát (Context)' : 'Context'}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeCase.context[lang]}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1.5">
                {lang === 'vi' ? 'Thách thức đặt ra (Challenge)' : 'Challenge'}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeCase.challenge[lang]}
              </p>
            </div>
          </div>

          {/* Insight Callout */}
          {activeCase.insight && (
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-[#0068FF]/20 flex items-start gap-4">
              <Lightbulb className="w-5 h-5 text-[#0068FF] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068FF] block mb-1">
                  {lang === 'vi' ? 'Góc nhìn & Thấu cảm (Insight)' : 'Key Insight'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal italic">
                  “{activeCase.insight[lang]}”
                </p>
              </div>
            </div>
          )}

          {/* My Role & Stakeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                <Compass className="w-4 h-4 text-[#0068FF]" />
                <span>{lang === 'vi' ? 'Vai trò đảm nhiệm (My Role)' : 'My Ownership & Role'}</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {activeCase.myRole[lang]}
              </p>
            </div>

            {activeCase.stakeholders && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                  <Users className="w-4 h-4 text-[#0068FF]" />
                  <span>{lang === 'vi' ? 'Các bên liên quan (Stakeholders)' : 'Key Stakeholders'}</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeCase.stakeholders[lang]}
                </p>
              </div>
            )}
          </div>

          {/* Approach & Framework */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0068FF]" />
              <span>{lang === 'vi' ? 'Cách tiếp cận & Mô hình (Approach & Framework)' : 'Approach & Framework'}</span>
            </h4>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
              {activeCase.approachItems && activeCase.approachItems.length > 0 ? (
                <div className="space-y-3">
                  {activeCase.approachItems.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-semibold text-slate-900 text-xs sm:text-sm flex items-start gap-2">
                        <span className="text-[#0068FF]">•</span>
                        <span>{item.title[lang]}</span>
                      </div>
                      {item.desc && (
                        <p className="text-xs text-slate-600 pl-4 leading-relaxed">
                          {item.desc[lang]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>{activeCase.approach[lang]}</p>
              )}
              {activeCase.systemFramework && (
                <div className="pt-3 border-t border-slate-200 font-medium text-slate-800">
                  <span className="text-[#0068FF] font-semibold">Framework: </span>
                  {activeCase.systemFramework[lang]}
                </div>
              )}
            </div>
          </div>

          {/* AI Feature & Operational Optimization (Fully Safe Guarded) */}
          {activeCase.aiFeature && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-slate-50 border border-indigo-200/70 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>{lang === 'vi' ? 'Ứng dụng AI & Tối ưu Vận hành' : 'AI-enabled Operations & Experience Augmentation'}</span>
                </span>
                <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                  {activeCase.aiFeature.title[lang]}
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  {activeCase.aiFeature.desc ? activeCase.aiFeature.desc[lang] : (activeCase.aiFeature.description ? (activeCase.aiFeature.description as any)[lang] : '')}
                </p>
              </div>

              {/* Capabilities */}
              {activeCase.aiFeature.capabilities && activeCase.aiFeature.capabilities[lang] && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCase.aiFeature.capabilities[lang].map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 p-2.5 rounded-xl border border-indigo-100 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Dual Layers */}
              {activeCase.aiFeature.layers && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-indigo-100/70">
                  {activeCase.aiFeature.layers.participantExperience && (
                    <div className="bg-white/70 p-3 rounded-xl border border-indigo-100">
                      <span className="font-semibold text-indigo-950 block mb-1">
                        {lang === 'vi' ? 'Trải nghiệm người tham dự:' : 'Participant Experience:'}
                      </span>
                      <span className="text-slate-600 leading-relaxed">
                        {activeCase.aiFeature.layers.participantExperience[lang]}
                      </span>
                    </div>
                  )}
                  {activeCase.aiFeature.layers.operationalEfficiency && (
                    <div className="bg-white/70 p-3 rounded-xl border border-indigo-100">
                      <span className="font-semibold text-indigo-950 block mb-1">
                        {lang === 'vi' ? 'Hiệu quả vận hành:' : 'Operational Efficiency:'}
                      </span>
                      <span className="text-slate-600 leading-relaxed">
                        {activeCase.aiFeature.layers.operationalEfficiency[lang]}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* AI Evidence Photo */}
              {activeCase.aiFeature.image && (
                <figure className="mt-4 overflow-hidden rounded-2xl border border-indigo-200/80 bg-slate-900 shadow-xs flex flex-col">
                  <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-slate-950">
                    <img
                      src={activeCase.aiFeature.image}
                      alt={activeCase.aiFeature.title[lang]}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  {activeCase.aiFeature.caption && (
                    <figcaption className="p-3 text-center italic text-xs text-slate-500 bg-slate-50/90 border-t border-slate-100 leading-relaxed">
                      {activeCase.aiFeature.caption[lang]}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          )}

          {/* Quantitative Stats Grid if present */}
          {activeCase.quantitativeStats && activeCase.quantitativeStats.length > 0 && (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                {lang === 'vi' ? 'Chỉ số đo lường hiệu quả (Metrics & Evidence)' : 'Key Metrics & Measured Impact'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.quantitativeStats.map((stat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="font-mono font-bold text-2xl sm:text-3xl text-[#0068FF] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      {stat.label[lang]}
                    </div>
                    {stat.subtext && (
                      <div className="text-[11px] text-slate-500 font-medium mb-2">
                        {stat.subtext[lang]}
                      </div>
                    )}
                    {stat.notes && (
                      <div className="text-[11px] text-slate-600 border-t border-slate-100 pt-2 leading-relaxed">
                        {stat.notes[lang]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Measured Impact & Outcomes */}
          {impactList.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'vi' ? 'Kết quả & Tác động Được Đo lường' : 'Measured Impact & Outcomes'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {impactList.map((imp: string, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-800 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Visual Gallery Evidence if present */}
          {activeCase.visualEvidence && activeCase.visualEvidence.length > 0 && (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                {lang === 'vi' ? 'Hình ảnh Minh chứng Thực tế' : 'Ceremony & Event Evidence Gallery'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.visualEvidence.map((img: any, idx: number) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xs flex flex-col justify-between">
                    <img
                      src={img.src}
                      alt={img.alt ? img.alt[lang] : 'Event evidence'}
                      className="w-full h-48 sm:h-52 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {img.caption && (
                      <p className="p-3 text-[11px] text-slate-600 leading-snug border-t border-slate-100 bg-slate-50/60">
                        {img.caption[lang]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video Evidence if present */}
          {activeCase.videoEvidence && (
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-[#0068FF]">
                <Film className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'vi' ? 'Video Tài liệu Minh chứng' : 'Documentary Video Evidence'}
                </span>
              </div>
              <h5 className="font-bold text-sm text-slate-900">
                {activeCase.videoEvidence.title[lang]}
              </h5>
              <p className="text-xs text-slate-600">
                {activeCase.videoEvidence.caption[lang]}
              </p>
              <div className="rounded-xl overflow-hidden bg-black max-w-2xl">
                <video
                  controls
                  poster={activeCase.videoEvidence.poster}
                  className="w-full h-auto max-h-[360px]"
                >
                  <source src={activeCase.videoEvidence.url} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            </div>
          )}

          {/* Qualitative Evidence if present */}
          {activeCase.qualitativeEvidence && (
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0068FF]">
                {activeCase.qualitativeEvidence.badge[lang]}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 italic">
                “{activeCase.qualitativeEvidence.caption[lang]}”
              </p>
              {activeCase.qualitativeEvidence.image && (
                <div className="max-w-md rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src={activeCase.qualitativeEvidence.image}
                    alt={activeCase.qualitativeEvidence.caption[lang]}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          )}

          {/* Key Learning & Reflection */}
          {activeCase.learning && (
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">
                {lang === 'vi' ? 'Bài học đúc kết (Key Takeaway):' : 'Key Takeaway:'}
              </span>
              <p>{activeCase.learning[lang]}</p>
            </div>
          )}

          {/* Navigation Controls: Previous / All Cases / Next Case */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevCase}
                disabled={selectedCaseIndex === 0}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCaseIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 cursor-pointer shadow-2xs'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Case trước' : '← Previous Case'}</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('cases');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 cursor-pointer shadow-2xs"
              >
                <FolderKanban className="w-3.5 h-3.5 text-[#0068FF]" />
                <span>{lang === 'vi' ? 'Tất cả Case Studies' : 'All Case Studies'}</span>
              </button>

              <button
                onClick={handleNextCase}
                disabled={selectedCaseIndex === CASE_STUDIES.length - 1}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCaseIndex === CASE_STUDIES.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 cursor-pointer shadow-2xs'
                }`}
              >
                <span>{lang === 'vi' ? 'Case tiếp theo' : 'Next Case →'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Guided Journey Next Section CTA */}
            {onNavigateNext && (
              <button
                onClick={onNavigateNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                <span>{lang === 'vi' ? 'TIẾP THEO: DỰ ÁN & SẢN PHẨM THỰC THI' : 'NEXT: SELECTED WORK'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
