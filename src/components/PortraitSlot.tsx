import React from 'react';

export type PortraitSlotVariant = 'hero' | 'id-card';
export type PortraitSlotMode = 'placeholder' | 'photo';

export interface PortraitSlotProps {
  variant: PortraitSlotVariant;
  mode?: PortraitSlotMode;
  src?: string;
  srcSet?: string;
  alt?: string;
  objectPosition?: string;
  className?: string;
}

export const PortraitSlot: React.FC<PortraitSlotProps> = ({
  variant,
  mode = 'placeholder',
  src = '/hero-portrait.png',
  srcSet,
  alt = 'Dang Vu Thuy Ngan',
  objectPosition = 'center bottom',
  className = '',
}) => {
  if (variant === 'hero') {
    return (
      <div
        className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
        data-slot="hero-portrait"
      >
        {mode === 'photo' && src ? (
          <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            style={{ objectPosition }}
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              viewBox="0 0 506 496"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroSilhouetteGrad" x1="253" y1="0" x2="253" y2="496" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#9cbce8" stopOpacity="0.85" />
                  <stop offset="45%" stopColor="#b4cef0" stopOpacity="0.75" />
                  <stop offset="85%" stopColor="#cfe1f8" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#e2eeff" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              <ellipse cx="272" cy="42" rx="46" ry="40" fill="url(#heroSilhouetteGrad)" />
              <path
                d="M216 112 C210 65 330 60 334 112 C338 152 332 192 298 218 C280 230 252 230 236 218 C212 192 216 152 216 112 Z"
                fill="url(#heroSilhouetteGrad)"
              />
              <path
                d="M204 102 C188 124 192 166 214 192 C208 202 196 200 190 190 C180 168 180 132 204 102 Z"
                fill="url(#heroSilhouetteGrad)"
              />
              <ellipse cx="198" cy="182" rx="24" ry="26" stroke="url(#heroSilhouetteGrad)" strokeWidth="3.2" fill="none" opacity="0.85" />
              <ellipse cx="338" cy="186" rx="16" ry="18" stroke="url(#heroSilhouetteGrad)" strokeWidth="2.5" fill="none" opacity="0.6" />
              <path
                d="M244 212 L244 274 C244 280 290 280 290 274 L290 212 Z"
                fill="url(#heroSilhouetteGrad)"
              />
              <path
                d="M244 270 C198 286 108 328 26 380 C8 392 0 422 0 452 L0 496 L506 496 L506 452 C506 422 498 392 480 380 C398 328 308 286 262 270 Z"
                fill="url(#heroSilhouetteGrad)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-[76px] pointer-events-none select-none text-center">
              <span className="text-[14px] font-semibold tracking-[0.08em] text-[#5477aa] leading-[20px]">
                HERO PORTRAIT
              </span>
              <span className="text-[14px] font-semibold tracking-[0.08em] text-[#5477aa] leading-[20px]">
                PLACEHOLDER
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ID Card Variant (Kept as placeholder for now, untouched)
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      data-slot="id-card-portrait"
    >
      {mode === 'photo' && src ? (
        <img
          src={src}
          srcSet={srcSet}
          alt={alt}
          style={{ objectPosition }}
          className="w-full h-full object-cover pointer-events-none rounded-[10px]"
        />
      ) : (
        <div className="relative w-full h-full flex items-center justify-center bg-[#edf4ff] rounded-[10px] overflow-hidden">
          <svg
            viewBox="0 0 282 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="idSilhouetteGrad" x1="141" y1="0" x2="141" y2="230" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9cbce8" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#b9d2f2" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#c8dcf6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <ellipse cx="146" cy="36" rx="22" ry="20" fill="url(#idSilhouetteGrad)" />
            <path
              d="M120 72 C116 48 174 45 178 72 C180 92 178 112 162 124 C154 130 142 130 134 124 C120 112 122 92 120 72 Z"
              fill="url(#idSilhouetteGrad)"
            />
            <ellipse cx="114" cy="108" rx="11" ry="12" stroke="url(#idSilhouetteGrad)" strokeWidth="1.8" fill="none" opacity="0.8" />
            <path d="M136 122 L136 150 C136 153 156 153 156 150 L156 122 Z" fill="url(#idSilhouetteGrad)" />
            <path
              d="M136 148 C112 158 60 182 15 210 C5 216 0 224 0 230 L282 230 C282 224 277 216 267 210 C222 182 170 158 146 148 Z"
              fill="url(#idSilhouetteGrad)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-[26px] pointer-events-none select-none text-center">
            <span className="text-[12px] font-semibold tracking-wider text-[#5477aa] leading-[17px]">
              ID CARD
            </span>
            <span className="text-[12px] font-semibold tracking-wider text-[#5477aa] leading-[17px]">
              PORTRAIT PLACEHOLDER
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
