import React, { useEffect, useState } from 'react';
import { CaseStudy, Language } from '../types';
import { CaseStudyCover } from './CaseStudyCover';
import {
  X,
  CheckCircle2,
  Users,
  Compass,
  Layers,
  Sparkles,
  Award,
  Film,
  Lightbulb,
  Play,
  Maximize2,
} from 'lucide-react';

interface ProjectModalProps {
  caseStudy: CaseStudy | null;
  lang: Language;
  onClose: () => void;
  onConnectClick?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  caseStudy,
  lang,
  onClose,
  onConnectClick,
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [caseStudy]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!caseStudy) return null;

  // Safe impact extractor
  const impactList: string[] = caseStudy.impact
    ? Array.isArray(caseStudy.impact)
      ? caseStudy.impact
      : ((caseStudy.impact as any)[lang] || (caseStudy.impact as any).vi || [])
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl sm:rounded-[36px] shadow-2xl border border-slate-200 p-6 sm:p-10 md:p-12 text-slate-900 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Modal Header */}
        <div className="mb-8 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-xs font-bold font-mono">
              {caseStudy.organization}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {caseStudy.category[lang]}
            </span>
            <span className="text-xs text-slate-400 font-mono">• {caseStudy.year}</span>
            {caseStudy.accentBadge && (
              <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700 text-[10px] font-semibold">
                {caseStudy.accentBadge[lang]}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {caseStudy.title[lang]}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed font-medium">
            {caseStudy.subtitle[lang]}
          </p>
        </div>

        {/* 2. Cover Visual Presentation */}
        {caseStudy.coverImage && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xs">
            <CaseStudyCover
              image={caseStudy.coverImage}
              projectId={caseStudy.id}
              lang={lang}
            />
          </div>
        )}

        {/* Deep Dive Case Content Sections */}
        <div className="flex flex-col gap-10">
          
          {/* 3. Context & Challenge (Equal 2-column layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                {lang === 'vi' ? 'Bối cảnh khởi phát (Context)' : 'Context'}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.context[lang]}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1.5">
                {lang === 'vi' ? 'Thách thức đặt ra (Challenge)' : 'Challenge'}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.challenge[lang]}
              </p>
            </div>
          </div>

          {/* 4. Insight Callout (if present) */}
          {caseStudy.insight && (
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-[#0068FF]/20 flex items-start gap-4">
              <Lightbulb className="w-5 h-5 text-[#0068FF] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068FF] block mb-1">
                  {lang === 'vi' ? 'Góc nhìn & Thấu cảm (Insight)' : 'Key Insight'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal italic">
                  “{caseStudy.insight[lang]}”
                </p>
              </div>
            </div>
          )}

          {/* 5. My Role & Stakeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                <Compass className="w-4 h-4 text-[#0068FF]" />
                <span>{lang === 'vi' ? 'Vai trò đảm nhiệm (My Role)' : 'My Ownership & Role'}</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {caseStudy.myRole[lang]}
              </p>
            </div>

            {caseStudy.stakeholders && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                  <Users className="w-4 h-4 text-[#0068FF]" />
                  <span>{lang === 'vi' ? 'Các bên liên quan (Stakeholders)' : 'Key Stakeholders'}</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {caseStudy.stakeholders[lang]}
                </p>
              </div>
            )}
          </div>

          {/* 6. Approach & Framework */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0068FF]" />
              <span>{lang === 'vi' ? 'Cách tiếp cận & Mô hình (Approach & Framework)' : 'Approach & Framework'}</span>
            </h4>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
              {caseStudy.approachItems && caseStudy.approachItems.length > 0 ? (
                <div className="space-y-3">
                  {caseStudy.approachItems.map((item, idx) => (
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
                <p>{caseStudy.approach[lang]}</p>
              )}
              {caseStudy.systemFramework && (
                <div className="pt-3 border-t border-slate-200 font-medium text-slate-800">
                  <span className="text-[#0068FF] font-semibold">Framework: </span>
                  {caseStudy.systemFramework[lang]}
                </div>
              )}
            </div>
          </div>

          {/* 7. AI & Operational Optimization (Practical Enablement Touchpoint) */}
          {caseStudy.aiFeature && (
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-slate-50 border border-indigo-200/70 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>{lang === 'vi' ? 'Ứng dụng AI & Tối ưu Vận hành' : 'AI-enabled Operations & Experience Touchpoint'}</span>
                </span>
                <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                  {caseStudy.aiFeature.title[lang]}
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  {caseStudy.aiFeature.desc ? caseStudy.aiFeature.desc[lang] : (caseStudy.aiFeature.description ? (caseStudy.aiFeature.description as any)[lang] : '')}
                </p>
              </div>

              {/* Capabilities */}
              {caseStudy.aiFeature.capabilities && caseStudy.aiFeature.capabilities[lang] && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {caseStudy.aiFeature.capabilities[lang].map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 p-2.5 rounded-xl border border-indigo-100 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Dual Layers */}
              {caseStudy.aiFeature.layers && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-indigo-100/70">
                  {caseStudy.aiFeature.layers.participantExperience && (
                    <div className="bg-white/70 p-3 rounded-xl border border-indigo-100">
                      <span className="font-semibold text-indigo-950 block mb-1">
                        {lang === 'vi' ? 'Trải nghiệm người tham dự:' : 'Participant Experience:'}
                      </span>
                      <span className="text-slate-600 leading-relaxed">
                        {caseStudy.aiFeature.layers.participantExperience[lang]}
                      </span>
                    </div>
                  )}
                  {caseStudy.aiFeature.layers.operationalEfficiency && (
                    <div className="bg-white/70 p-3 rounded-xl border border-indigo-100">
                      <span className="font-semibold text-indigo-950 block mb-1">
                        {lang === 'vi' ? 'Hiệu quả vận hành:' : 'Operational Efficiency:'}
                      </span>
                      <span className="text-slate-600 leading-relaxed">
                        {caseStudy.aiFeature.layers.operationalEfficiency[lang]}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* AI Photo Evidence */}
              {caseStudy.aiFeature.image && (
                <figure className="mt-4 overflow-hidden rounded-2xl border border-indigo-200/80 bg-slate-900 shadow-xs flex flex-col">
                  <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-slate-950">
                    <img
                      src={caseStudy.aiFeature.image}
                      alt={caseStudy.aiFeature.title[lang]}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  {caseStudy.aiFeature.caption && (
                    <figcaption className="p-3 text-center italic text-xs text-slate-500 bg-slate-50/90 border-t border-slate-100 leading-relaxed">
                      {caseStudy.aiFeature.caption[lang]}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          )}

          {/* 8. Quantitative Stats & Metrics Grid */}
          {caseStudy.quantitativeStats && caseStudy.quantitativeStats.length > 0 && (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                {lang === 'vi' ? 'Chỉ số đo lường hiệu quả (Metrics & Key Results)' : 'Key Metrics & Measured Impact'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudy.quantitativeStats.map((stat, idx) => (
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

          {/* 9. Measured Outcomes (Impact) */}
          {impactList.length > 0 && (
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
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

          {/* ============================================================== */}
          {/* 10. UNIFIED EVIDENCE GALLERY (Photos, Natural Portrait Video, Artifacts) */}
          {/* ============================================================== */}
          <div className="space-y-6 pt-4 border-t border-slate-200/80">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068FF] block mb-1">
                {lang === 'vi' ? 'Không Gian Bằng Chứng Thực Tế (Unified Evidence Gallery)' : 'Unified Evidence Gallery'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {lang === 'vi' ? 'Hiện vật, Khoảnh khắc Sân khấu & Video Tài liệu' : 'Artifacts, Ceremony Staging & Live Media'}
              </h4>
            </div>

            {/* Vertical Video Presentation (Natural Portrait 9:16 aspect ratio) */}
            {caseStudy.videoEvidence && (
              <div className="p-6 rounded-3xl bg-slate-950 text-white flex flex-col items-center shadow-lg">
                <div className="flex items-center gap-2 text-blue-400 mb-3 text-xs font-mono font-semibold uppercase tracking-wider">
                  <Film className="w-4 h-4" />
                  <span>{caseStudy.videoEvidence.title[lang]}</span>
                </div>

                {/* Portrait Video Box (Max height 460px, aspect-[9/16] or max-w-xs) */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl relative">
                  <video
                    controls
                    poster={caseStudy.videoEvidence.poster}
                    className="w-full h-full object-cover"
                  >
                    <source src={caseStudy.videoEvidence.url} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>

                {/* Secondary subtle italic caption */}
                {caseStudy.videoEvidence.caption && (
                  <p className="mt-3.5 text-center text-xs text-slate-400 max-w-md italic leading-relaxed">
                    {caseStudy.videoEvidence.caption[lang]}
                  </p>
                )}
              </div>
            )}

            {/* Visual Evidence Grid (Photos, artifacts, recognition walls) */}
            {caseStudy.visualEvidence && caseStudy.visualEvidence.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {caseStudy.visualEvidence.map((img: any, idx: number) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xs flex flex-col justify-between">
                    <div className="overflow-hidden bg-slate-100">
                      <img
                        src={img.src}
                        alt={img.alt ? img.alt[lang] : 'Case evidence'}
                        className="w-full h-48 sm:h-52 object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {img.caption && (
                      <div className="p-3 bg-slate-50/80 border-t border-slate-100 text-center">
                        <p className="text-[11px] text-slate-500 italic leading-snug">
                          {img.caption[lang]}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Qualitative Feedback Artifact */}
            {caseStudy.qualitativeEvidence && (
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0068FF]">
                  {caseStudy.qualitativeEvidence.badge[lang]}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 italic">
                  “{caseStudy.qualitativeEvidence.caption[lang]}”
                </p>
                {caseStudy.qualitativeEvidence.image && (
                  <div className="max-w-md rounded-xl overflow-hidden border border-slate-200">
                    <img
                      src={caseStudy.qualitativeEvidence.image}
                      alt={caseStudy.qualitativeEvidence.caption[lang]}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            )}

          </div>

          {/* 11. Reflection / Key Takeaway */}
          {caseStudy.learning && (
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">
                {lang === 'vi' ? 'Bài học đúc kết (Key Takeaway):' : 'Key Takeaway:'}
              </span>
              <p>{caseStudy.learning[lang]}</p>
            </div>
          )}

          {/* Modal Footer Bar */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              {caseStudy.organization} • {caseStudy.year}
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors"
            >
              {lang === 'vi' ? 'Đóng chi tiết' : 'Close Detail'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
