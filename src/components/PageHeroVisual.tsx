import React from 'react';

export type PageHeroVisualVariant =
  | 'career'
  | 'philosophy'
  | 'work'
  | 'recognition'
  | 'education';

interface PageHeroVisualProps {
  variant: PageHeroVisualVariant;
  className?: string;
}

export const PageHeroVisual: React.FC<PageHeroVisualProps> = ({
  variant,
  className = '',
}) => {
  return (
    <div
      className={`relative shrink-0 flex items-center justify-center w-[280px] sm:w-[320px] lg:w-[340px] h-[180px] sm:h-[200px] lg:h-[220px] select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Shared Atmospheric Blue Glow Backdrop (exact Homepage blue recipe) */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.55) 0%, rgba(220, 240, 255, 0.28) 48%, rgba(248, 251, 255, 0) 72%)',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* ============================================================== */}
      {/* 1. CAREER & EXPERIENCE: JOURNEY / PROGRESSION / DIRECTION       */}
      {/* ============================================================== */}
      {variant === 'career' && (
        <svg
          viewBox="0 0 340 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 text-[#0060FF]"
        >
          {/* Origin start node */}
          <circle cx="95" cy="158" r="4.5" fill="#0060FF" />

          {/* Flowing journey trajectory (curved upward-right S-path) */}
          <path
            d="M 95 158 C 122 158, 146 150, 164 126 C 182 102, 166 82, 178 64 C 187 50, 198 48, 212 48"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 4-point directional sparkle / star at journey destination */}
          <path
            d="M 226 14 Q 224 38, 246 48 Q 224 58, 226 82 Q 228 58, 206 48 Q 228 38, 226 14 Z"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}

      {/* ============================================================== */}
      {/* 2. PHILOSOPHY & APPROACH: CONNECTION / CHAIN / TRANSFORMATION   */}
      {/* ============================================================== */}
      {variant === 'philosophy' && (
        <svg
          viewBox="0 0 340 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 text-[#0060FF]"
        >
          {/* Circle 1 (Lower Left) */}
          <circle
            cx="105"
            cy="130"
            r="36"
            stroke="#0060FF"
            strokeWidth="1.4"
            fill="none"
          />

          {/* Circle 2 (Middle) */}
          <circle
            cx="160"
            cy="106"
            r="46"
            stroke="#0060FF"
            strokeWidth="1.4"
            fill="none"
          />

          {/* Circle 3 (Upper Right) */}
          <circle
            cx="224"
            cy="76"
            r="56"
            stroke="#0060FF"
            strokeWidth="1.4"
            fill="none"
          />

          {/* 4 Connection Nodes at overlap points */}
          <circle cx="72" cy="116" r="3.2" fill="#0060FF" />
          <circle cx="147" cy="138" r="3.2" fill="#0060FF" />
          <circle cx="168" cy="61" r="3.2" fill="#0060FF" />
          <circle cx="218" cy="118" r="3.2" fill="#0060FF" />
        </svg>
      )}

      {/* ============================================================== */}
      {/* 3. WORK & IMPACT: ACTION -> RIPPLE -> IMPACT                   */}
      {/* ============================================================== */}
      {variant === 'work' && (
        <svg
          viewBox="0 0 340 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 text-[#0060FF]"
        >
          {/* Concentric perspective ripples */}
          <ellipse
            cx="170"
            cy="130"
            rx="34"
            ry="14"
            stroke="#0060FF"
            strokeWidth="1.3"
            fill="none"
          />
          <ellipse
            cx="170"
            cy="130"
            rx="64"
            ry="26"
            stroke="#0060FF"
            strokeWidth="1.3"
            fill="none"
          />
          <ellipse
            cx="170"
            cy="130"
            rx="96"
            ry="39"
            stroke="#0060FF"
            strokeWidth="1.3"
            fill="none"
          />
          <ellipse
            cx="170"
            cy="130"
            rx="128"
            ry="52"
            stroke="#0060FF"
            strokeWidth="1.3"
            fill="none"
          />

          {/* Vertical descending impact line */}
          <line
            x1="170"
            y1="25"
            x2="170"
            y2="130"
            stroke="#0060FF"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Central impact node */}
          <circle cx="170" cy="130" r="4" fill="#0060FF" />

          {/* Subtle touchpoint nodes along ripple rings */}
          <circle cx="138" cy="142" r="2.5" fill="#0060FF" />
          <circle cx="230" cy="118" r="2.5" fill="#0060FF" />
          <circle cx="204" cy="170" r="2.5" fill="#0060FF" />
        </svg>
      )}

      {/* ============================================================== */}
      {/* 4. RECOGNITION: RECOGNITION / AWARD / ACKNOWLEDGEMENT           */}
      {/* ============================================================== */}
      {variant === 'recognition' && (
        <svg
          viewBox="0 0 340 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 text-[#0060FF]"
        >
          {/* Circular Medal Head */}
          <circle
            cx="170"
            cy="82"
            r="38"
            stroke="#0060FF"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Two Ribbon Tails hanging below */}
          <path
            d="M 152 114 L 140 166 L 154 154 L 165 166 L 165 119"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 175 119 L 175 166 L 186 154 L 200 166 L 188 114"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* 4 Delicate Accent Rays radiating from medal */}
          <line
            x1="120"
            y1="56"
            x2="106"
            y2="46"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="118"
            y1="106"
            x2="105"
            y2="116"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="220"
            y1="56"
            x2="234"
            y2="46"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="222"
            y1="106"
            x2="235"
            y2="116"
            stroke="#0060FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* ============================================================== */}
      {/* 5. EDUCATION & DEVELOPMENT: LEARNING / GROWTH / DEVELOPMENT    */}
      {/* ============================================================== */}
      {variant === 'education' && (
        <svg
          viewBox="0 0 340 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 text-[#0060FF]"
        >
          {/* Gentle curved ground baseline */}
          <path
            d="M 75 180 C 115 164, 145 158, 168 158 C 192 158, 222 165, 258 148"
            stroke="#0060FF"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Origin seed / growth point */}
          <circle cx="168" cy="158" r="4.2" fill="#0060FF" />

          {/* Growing stem */}
          <path
            d="M 168 158 C 168 128, 166 102, 166 76"
            stroke="#0060FF"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left complementary leaf */}
          <path
            d="M 167 124 C 145 122, 122 108, 130 85 C 146 80, 162 88, 166 98"
            stroke="#0060FF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Right dominant leaf */}
          <path
            d="M 167 140 C 175 110, 206 90, 207 40 C 185 45, 168 62, 166 76"
            stroke="#0060FF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
};
