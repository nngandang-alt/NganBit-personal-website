import React, { useState, useEffect } from 'react';
import { PortfolioImage, Language } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface CaseStudyCoverProps {
  image?: PortfolioImage | null;
  projectId?: string;
  lang: Language;
  className?: string;
}

export const CaseStudyCover: React.FC<CaseStudyCoverProps> = ({
  image,
  projectId,
  lang,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isTop100 = projectId === 'case-top100-awards';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!image?.src) {
    return (
      <ImagePlaceholder
        image={image}
        category={image?.category || 'case-cover'}
        recommendedRatio={image?.recommendedRatio || '16:9'}
        hint={image?.placeholderHint}
        lang={lang}
        className={className}
      />
    );
  }

  return (
    <figure
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-950 transition-opacity duration-1000 ease-out select-none ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className="relative overflow-hidden w-full aspect-video max-h-[460px] bg-slate-900">
        <img
          src={image.src}
          alt={image.alt?.[lang] || 'Case study cover visual'}
          className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none ${
            isLoaded ? 'scale-100' : 'scale-[1.035]'
          }`}
          loading="eager"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none"
          aria-hidden="true"
        />

        {isTop100 && (
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1200 ease-out motion-reduce:hidden ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <div
              className="absolute top-0 right-1/4 w-3/5 h-3/4 rounded-full opacity-30 mix-blend-screen pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.4) 0%, rgba(245, 158, 11, 0.15) 45%, transparent 70%)',
              }}
            />
            <div className="hidden sm:block absolute top-[28%] right-[32%] w-1.5 h-1.5 rounded-full bg-amber-200/90 shadow-[0_0_8px_2px_rgba(251,191,36,0.6)] animate-pulse" />
            <div className="hidden sm:block absolute top-[22%] right-[42%] w-1 h-1 rounded-full bg-yellow-100/80 shadow-[0_0_6px_1px_rgba(253,224,71,0.5)]" />
            <div className="hidden sm:block absolute top-[35%] right-[22%] w-1 h-1 rounded-full bg-amber-300/80 shadow-[0_0_6px_1px_rgba(245,158,11,0.5)]" />
          </div>
        )}
      </div>

      {image.caption?.[lang] && (
        <figcaption className="p-3 sm:py-3 sm:px-6 text-center italic text-xs text-slate-500 bg-slate-50/90 border-t border-slate-100 leading-relaxed">
          {image.caption[lang]}
        </figcaption>
      )}
    </figure>
  );
};
