import React from 'react';
import { PortraitSlot } from './PortraitSlot';

interface LanyardAssemblyProps {
  className?: string;
}

export const LanyardAssembly: React.FC<LanyardAssemblyProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: '360px', height: '600px' }}>
      {/* 
        NATURAL HANGING LANYARD ASSEMBLY (SECTION 2 CONTEXT):
        1. Two blue fabric straps (18px wide) enter naturally from the top boundary of Section 2 (y: 0).
        2. Converge smoothly into a fabric loop wrapping around the top of the metal ring (cy: 117).
        3. Metal ring sits in front of the rear fabric loop.
        4. Front fold curves forward through the ring opening with a stitched clamp band.
        5. Metal clip hooks directly into the card's top slot (cy: 135.4).
        6. ID Card hangs suspended below from y: 123px to y: 559px.
        
        Zero leakage into Hero / Section 1!
      */}
      <svg
        className="absolute pointer-events-none overflow-visible z-20"
        style={{ left: '0px', top: '-60px', width: '360px', height: '220px' }}
        viewBox="0 -60 360 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lanyardStrapLeft" x1="98" y1="-60" x2="171" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0047b8" />
            <stop offset="50%" stopColor="#005cdf" />
            <stop offset="100%" stopColor="#003e9f" />
          </linearGradient>
          
          <linearGradient id="lanyardStrapRight" x1="243" y1="-60" x2="171" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0060ff" />
            <stop offset="45%" stopColor="#0054db" />
            <stop offset="85%" stopColor="#0044b3" />
            <stop offset="100%" stopColor="#003185" />
          </linearGradient>

          <linearGradient id="fabricLoopGrad" x1="162" y1="94" x2="180" y2="116" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0044b5" />
            <stop offset="50%" stopColor="#0052cf" />
            <stop offset="100%" stopColor="#002d82" />
          </linearGradient>
          
          <linearGradient id="metalRingGrad" x1="162" y1="108" x2="181" y2="126" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="35%" stopColor="#f8fafc" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          
          <linearGradient id="metalClipGrad" x1="166" y1="123" x2="178" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="30%" stopColor="#f8fafc" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <filter id="suspensionShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#002166" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* ========================================================
            LAYER 1: REAR STRAPS & REAR FABRIC LOOP
            Left & Right 18px fabric ribbons emerge from behind the Stats Bar (y: -60)
            and pass BEHIND the metal ring
            ======================================================== */}
        {/* Left Ribbon Strap: 18px wide, natural V slope extending behind Stats Bar */}
        <path
          d="M 98 -60 L 123 -60 L 142 0 L 173 98 Q 171.4 102 167 100 L 124 0 Z"
          fill="url(#lanyardStrapLeft)"
        />

        {/* Right Ribbon Strap: 18px wide, natural V slope extending behind Stats Bar */}
        <path
          d="M 243 -60 L 219 -60 L 200 0 L 170 98 Q 171.4 102 176 100 L 218 0 Z"
          fill="url(#lanyardStrapRight)"
          filter="url(#suspensionShadow)"
        />

        {/* Smooth fabric convergence & Rear Loop:
            Passes behind the top portion of the metal ring */}
        <path
          d="M 163 96 
             C 163 96, 162.4 104, 162.4 111 
             C 162.4 114.5, 180.4 114.5, 180.4 111 
             C 180.4 104, 180 96, 180 96 
             Z"
          fill="url(#fabricLoopGrad)"
        />

        {/* ========================================================
            LAYER 2: METAL RING (IN FRONT OF REAR FABRIC LOOP)
            Centered at (171.4, 117) — EXACT SAME PROPORTIONS
            ======================================================== */}
        <ellipse
          cx="171.4"
          cy="117"
          rx="9"
          ry="8.5"
          stroke="url(#metalRingGrad)"
          strokeWidth="2.4"
          fill="none"
        />

        {/* ========================================================
            LAYER 3: FRONT FABRIC FOLD & STITCHED CLAMP
            Fabric loops forward through the ring opening
            ======================================================== */}
        {/* Folded loop tongue coming forward through the ring opening */}
        <path
          d="M 164.5 109 
             C 164.5 114, 178.3 114, 178.3 109 
             L 177.5 105 
             L 165.3 105 
             Z"
          fill="#003599"
        />
        {/* Stitched fabric clamp band securing the loop */}
        <rect
          x="162.4"
          y="101"
          width="18"
          height="4"
          rx="1"
          fill="#002466"
        />
        {/* Subtle stitch detail line */}
        <line
          x1="164.4"
          y1="103"
          x2="178.4"
          y2="103"
          stroke="#4d8aff"
          strokeWidth="0.7"
          strokeDasharray="1.5 1"
        />

        {/* ========================================================
            LAYER 4: METAL CLIP HARDWARE
            Exact same mechanical attachment through card slot
            ======================================================== */}
        {/* Swivel Collar on ring */}
        <rect
          x="167.4"
          y="123"
          width="8"
          height="5"
          rx="1.5"
          fill="url(#metalClipGrad)"
          stroke="#475569"
          strokeWidth="0.6"
        />

        {/* Metal Clip Neck */}
        <path
          d="M 168 128 L 174.8 128 L 173.8 132 L 169 132 Z"
          fill="url(#metalClipGrad)"
          stroke="#475569"
          strokeWidth="0.6"
        />

        {/* Metal Hook / Clasp through slot (center at x: 171.4, y: 135.4) */}
        <g transform="rotate(7.5 171.4 135.4)">
          <path
            d="M 169.5 130 C 169.5 133 167.5 135.5 167.5 137 C 167.5 139 170.5 139.5 172.5 139 C 174.5 138.5 175 136.5 175 134.5 L 173 130"
            stroke="url(#metalClipGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Horizontal clip retaining bar resting across the top rim of the slot */}
          <rect
            x="164"
            y="132.5"
            width="14.8"
            height="4"
            rx="1.5"
            fill="url(#metalRingGrad)"
            stroke="#475569"
            strokeWidth="0.6"
          />
        </g>
      </svg>

      {/* 
        ID CARD COMPONENT:
        Dimensions: 306px x 436px (UNTOUCHED & PRESERVED).
        Position: top: 123px, left: 20px (anchored to Section 2).
        Rotated +7.5 deg clockwise with transform origin at top center (50% 0%).
      */}
      <div
        className="absolute bg-white text-slate-900 select-none z-10 transition-transform duration-300"
        style={{
          width: '306px',
          height: '436px',
          left: '20px',
          top: '123px',
          borderRadius: '22px',
          transform: 'rotate(7.5deg)',
          transformOrigin: '50% 0%',
          boxShadow: '0 20px 48px rgba(56, 105, 178, 0.16), 0 4px 12px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(226, 232, 240, 0.85)',
        }}
      >
        {/* Top Hardware Slot (centered, radius 3.5) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[9px] w-[28px] h-[7px] rounded-full bg-[#cbd8eb] border border-[#94b1dd] shadow-inner"
          aria-hidden="true"
        />

        {/* Corner plus marks */}
        <span className="absolute top-[13px] left-[15px] text-[12px] font-bold text-slate-300 leading-none" aria-hidden="true">+</span>
        <span className="absolute top-[13px] right-[15px] text-[12px] font-bold text-slate-300 leading-none" aria-hidden="true">+</span>

        {/* Card Header Name: DANG VU / THUY NGAN */}
        <div className="pt-[18px] pb-[6px] text-center flex flex-col items-center">
          <span className="text-[16px] font-extrabold tracking-tight text-[#05051f] leading-[18px] uppercase">
            DANG VU
          </span>
          <span className="text-[16px] font-extrabold tracking-tight text-[#0060ff] leading-[18px] uppercase">
            THUY NGAN
          </span>
        </div>

        {/* Large Dominant Portrait Well: 278px x 236px */}
        <div className="mx-auto w-[278px] h-[236px] rounded-[10px] overflow-hidden border border-blue-100/60 shadow-inner">
          <PortraitSlot variant="id-card" mode="photo" src="/id-card-portrait.jpg" objectPosition="center 25%" />
        </div>

        {/* 
          EXPERTISE CHIPS — EXACTLY 2 x 2 LAYOUT:
          [ Internal Communication ] [ Corporate Culture ]
          [ Employee Engagement   ] [ Employee Experience ]
        */}
        <div className="mt-[10px] px-[14px] grid grid-cols-2 gap-x-2 gap-y-1.5">
          <div className="w-full py-[4px] px-1 text-center rounded-full bg-[#edf4ff] text-[#0060ff] text-[9.5px] font-semibold tracking-tight border border-blue-100/70 truncate">
            Internal Communication
          </div>
          <div className="w-full py-[4px] px-1 text-center rounded-full bg-[#edf4ff] text-[#0060ff] text-[9.5px] font-semibold tracking-tight border border-blue-100/70 truncate">
            Corporate Culture
          </div>
          <div className="w-full py-[4px] px-1 text-center rounded-full bg-[#edf4ff] text-[#0060ff] text-[9.5px] font-semibold tracking-tight border border-blue-100/70 truncate">
            Employee Engagement
          </div>
          <div className="w-full py-[4px] px-1 text-center rounded-full bg-[#edf4ff] text-[#0060ff] text-[9.5px] font-semibold tracking-tight border border-blue-100/70 truncate">
            Employee Experience
          </div>
        </div>

        {/* Card Footer: Motto + Barcode */}
        <div className="px-[14px] mt-[9px] pb-[10px] flex items-center justify-between">
          <div className="flex items-center gap-1 text-[7.5px] font-extrabold tracking-[0.06em] text-[#05051f]">
            <span className="text-[9px] leading-none">✦</span>
            <span>PEOPLE · GROWTH · MEANINGFUL IMPACT</span>
          </div>

          <svg
            className="w-[44px] h-[20px] text-[#05051f]"
            viewBox="0 0 56 30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="0" y="0" width="2" height="30" />
            <rect x="4" y="0" width="1.5" height="30" />
            <rect x="7" y="0" width="3" height="30" />
            <rect x="12" y="0" width="1" height="30" />
            <rect x="15" y="0" width="2.5" height="30" />
            <rect x="20" y="0" width="1.5" height="30" />
            <rect x="23" y="0" width="3.5" height="30" />
            <rect x="29" y="0" width="1" height="30" />
            <rect x="32" y="0" width="2" height="30" />
            <rect x="36" y="0" width="1.5" height="30" />
            <rect x="39" y="0" width="3" height="30" />
            <rect x="44" y="0" width="1" height="30" />
            <rect x="47" y="0" width="2.5" height="30" />
            <rect x="52" y="0" width="3" height="30" />
          </svg>
        </div>
      </div>
    </div>
  );
};
