import React from 'react';
import { CareerVisualEvidenceData, Language } from '../types';

interface CareerVisualEvidenceProps {
  evidence: CareerVisualEvidenceData;
  lang: Language;
}

export const CareerVisualEvidence: React.FC<CareerVisualEvidenceProps> = ({ evidence, lang }) => {
  return (
    <div className="w-full mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-100">
      {/* 1. Chapter Identifier / Micro-label (Above image, understated, technical typography) */}
      <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#0068FF] uppercase">
          CAREER EVIDENCE · {evidence.number}
        </span>
        <div className="h-px w-10 sm:w-16 bg-[#0068FF]/30" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#0068FF]" />
      </div>

      {/* 2. Visual Frame Container */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(0,104,255,0.05)] bg-slate-900 group">
        {/* Subtle technical graphic signature: clean 1-detail top accent line */}
        <div className="absolute top-0 left-6 sm:left-8 w-12 sm:w-16 h-[2px] bg-[#0068FF] z-10" />

        {/* Responsive Image Box (16:6.5 on Desktop, 16:7.5 on Tablet, 4:3 on Mobile) */}
        <div
          className={`w-full overflow-hidden ${
            evidence.aspectRatioClass || 'aspect-[4/3] sm:aspect-[16/7.5] md:aspect-[16/7] lg:aspect-[16/6.5]'
          }`}
        >
          <img
            src={evidence.src}
            alt={evidence.alt[lang]}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            style={{
              objectPosition: evidence.objectPosition || 'center 50%',
            }}
            loading="lazy"
          />
        </div>

        {/* Subtle inner highlight & ultra-soft 4% blue harmonizer tint (never obscure the authentic photo) */}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0068FF]/[0.03] pointer-events-none" />
      </div>

      {/* 3. Caption directly below the frame (not an overlay, subtle gray with blue dot) */}
      <div className="mt-3 sm:mt-3.5 flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0068FF] shrink-0 mt-1.5" />
        <p className="m-0 text-slate-600">
          {evidence.caption[lang]}
        </p>
      </div>
    </div>
  );
};
