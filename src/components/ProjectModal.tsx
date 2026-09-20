import React, { useEffect } from 'react';
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
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

        {/* Modal Header */}
        <div className="mb-8 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-xs font-bold font-mono">
              {caseStudy.organization}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {caseStudy.category[lang]}
            </span>
            <span className="text-xs text-slate-400 font-mono">• {caseStudy.year}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {caseStudy.title[lang]}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
            {caseStudy.subtitle[lang]}
          </p>
        </div>

        {/* Reusable Cover Visual with Entrance Motion & Project Accent */}
        <div className="mb-10 overflow-hidden rounded-2xl">
          <CaseStudyCover
            image={caseStudy.coverImage}
            projectId={caseStudy.id}
            lang={lang}
          />
        </div>

        {/* Deep Dive Case Content Sections */}
        <div className="flex flex-col gap-8">
          
          {/* 1. Context & Challenge (Equal 2-column layout) */}
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

          {/* 2. Insight (if present) */}
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

          {/* 3. My Role & Stakeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                <Compass className="w-4 h-4 text-[#0068FF]" />
                <span>{lang === 'vi' ? 'Vai trò đảm nhiệm (My Role)' : 'My Ownership & Role'}</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {caseStudy.myRole[lang]}
              </p>
            </div>

            {caseStudy.stakeholders && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
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

          {/* 4. Approach & Framework */}
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

          {/* 4b. AI Feature & Operational Optimization (if present) */}
          {caseStudy.aiFeature ? (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-slate-50 border border-indigo-200/70 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>{lang === 'vi' ? 'Ứng dụng AI & Tối ưu Vận hành' : 'AI-enabled Operations & Experience Augmentation'}</span>
                </span>
                <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                  {caseStudy.aiFeature.title[lang]}
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  {caseStudy.aiFeature.desc[lang]}
                </p>
              </div>

              {/* Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {caseStudy.aiFeature.capabilities[lang].map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 p-2.5 rounded-xl border border-indigo-100 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Dual Layers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-indigo-100/70">
                <div className="bg-white/70 p-3 rounded-xl border border-indigo-100">
                  <span className="font-semibold text-indigo-950 block mb-1">
                    {lang === 'vi' ? 'Trải nghiệm người tham dự:' : 'Participant Experience:'}
                  </span>
                  <span className="text-slate-600 leading-relaxed">
                    {caseStudy.aiFeature.layers.participantExperience[lang]}
                  </span>
                </div>
                <div className="bg-white/70 p-3 rounded-xl border border-indigo-100">
                  <span className="font-semibold text-indigo-950 block mb-1">
                    {lang === 'vi' ? 'Hiệu quả vận hành:' : 'Operational Efficiency:'}
                  </span>
                  <span className="text-slate-600 leading-relaxed">
                    {caseStudy.aiFeature.layers.operationalEfficiency[lang]}
                  </span>
                </div>
              </div>

              {/* AI Evidence Photo */}
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
                  <figcaption className="p-3 text-center italic text-xs text-slate-500 bg-slate-50/90 border-t border-slate-100 leading-relaxed">
                    {caseStudy.aiFeature.caption[lang]}
                  </figcaption>
                </figure>
              )}
            </div>
          ) : caseStudy.aiApplication ? (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-slate-50 border border-indigo-200/70 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>{lang === 'vi' ? 'Ứng dụng AI & Tối ưu Vận hành' : 'AI-enabled Operations & Experience Augmentation'}</span>
              </span>
              <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                {caseStudy.aiApplication[lang]}
              </div>
            </div>
          ) : null}

          {/* Quantitative Stats (if present) */}
          {caseStudy.quantitativeStats && caseStudy.quantitativeStats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.quantitativeStats.map((stat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0068FF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {stat.label[lang]}
                  </div>
                  {stat.notes && (
                    <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {stat.notes[lang]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Qualitative Evidence (if present) */}
          {caseStudy.qualitativeEvidence && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {caseStudy.qualitativeEvidence.badge[lang]}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                <img
                  src={caseStudy.qualitativeEvidence.image}
                  alt={caseStudy.qualitativeEvidence.alt[lang]}
                  className="w-full max-h-[420px] object-contain bg-slate-50 mx-auto"
                  loading="lazy"
                />
                <figcaption className="p-3 text-center italic text-xs text-slate-500 bg-slate-50/90 border-t border-slate-100 leading-relaxed">
                  {caseStudy.qualitativeEvidence.caption[lang]}
                </figcaption>
              </figure>
            </div>
          )}

          {/* 5. Measurement & Impact */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F0F6FF]/70 border border-[#0068FF]/25 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0068FF] flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Kết quả & Tác động thực tế (Impact)' : 'Verified Impact & Outcomes'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.impact[lang].map((imp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-[#0068FF]/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Evidence Showcase (if present) */}
          {caseStudy.visualEvidence && caseStudy.visualEvidence.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {lang === 'vi' ? 'Hình ảnh thực tế chương trình & Kỷ vật vinh danh' : 'Real Ceremony Visuals & Recognition Artifacts'}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.visualEvidence.map((img, idx) => (
                  <figure
                    key={idx}
                    className="group rounded-2xl overflow-hidden border border-slate-200/90 bg-white hover:border-[#0068FF]/50 transition-all duration-300 shadow-xs flex flex-col"
                  >
                    <div className="relative overflow-hidden bg-slate-100 aspect-[16/10] sm:aspect-[4/3]">
                      <img
                        src={img.src || ''}
                        alt={img.alt[lang]}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="p-3 text-center italic text-xs text-slate-500 leading-relaxed bg-slate-50/80 border-t border-slate-100">
                        {img.caption[lang]}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Video Evidence (if present) */}
          {caseStudy.videoEvidence && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#0068FF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {caseStudy.videoEvidence.title[lang]}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-black shadow-md">
                <video
                  src={caseStudy.videoEvidence.url}
                  poster={caseStudy.videoEvidence.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full aspect-video object-contain bg-black"
                >
                  <source src={caseStudy.videoEvidence.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {caseStudy.videoEvidence.caption && (
                <p className="text-center italic text-xs text-slate-500 px-2 pt-1 leading-relaxed">
                  {caseStudy.videoEvidence.caption[lang]}
                </p>
              )}
            </div>
          )}

          {/* 6. Key Learning (if present) */}
          {caseStudy.learning && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
              <span className="font-semibold text-slate-900 block mb-1">
                {lang === 'vi' ? 'Bài học rút ra (Key Takeaway):' : 'Key Learning:'}
              </span>
              <p className="italic text-slate-600">“{caseStudy.learning[lang]}”</p>
            </div>
          )}

        </div>

        {/* Modal Bottom Close & Connect CTA */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {lang === 'vi' ? 'Đóng cửa sổ' : 'Close'}
          </button>

          <a
            href="#connect"
            onClick={() => {
              onClose();
              if (onConnectClick) onConnectClick();
            }}
            className="px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
          >
            {lang === 'vi' ? 'Trao đổi thêm về Case này' : 'Discuss This Case'}
          </a>
        </div>

      </div>
    </div>
  );
};
