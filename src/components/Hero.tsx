import React from 'react';
import { PortraitSlot } from './PortraitSlot';
import { LanyardAssembly } from './LanyardAssembly';
import { Users, Lightbulb, Building2, Zap, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onExplore?: () => void;
  onViewCaseStudies?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExplore,
  onViewCaseStudies,
}) => {
  return (
    <>
      {/* ========================================================
          SECTION 1: HERO VIEW
          Clean visual closing element is the white Stats panel at y: 782px.
          Zero leakage from Section 2; no lanyard in the first view.
          ======================================================== */}
      <section
        className="relative w-full bg-[#f8fbff] overflow-x-clip"
        id="hero"
        style={{
          zIndex: 20,
        }}
      >
        {/* --------------------------------------------------------
            DESKTOP (≥ 1280px / xl): EXACT APPROVED SOURCE OF TRUTH
            UNTOUCHED COORDINATES AND SIZING
            -------------------------------------------------------- */}
        <div
          className="hidden xl:block relative mx-auto"
          style={{
            width: '1024px',
            height: '782px',
          }}
        >
          {/* LAYER 0: BACKGROUND RADIAL GLOWS */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '380px',
              top: '40px',
              width: '600px',
              height: '450px',
              background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.55) 0%, rgba(248, 251, 255, 0) 70%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />
          
          <div
            className="absolute pointer-events-none"
            style={{
              left: '650px',
              top: '200px',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle at center, rgba(185, 225, 255, 0.45) 0%, rgba(248, 251, 255, 0) 65%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* LAYER 1: HERO BLUE CURVE (VERSION D: ORGANIC S-CURVE FRAMING EXPERTISE BLOCK) */}
          <svg
            className="absolute pointer-events-none overflow-visible"
            style={{ left: 0, top: 0, width: '1024px', height: '667px', zIndex: 1 }}
            viewBox="0 0 1024 667"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 1024 115 C 990 200 1010 320 992 420 C 981 480 895 525 815 545"
              stroke="#0060ff"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* LAYER 2: REAL HERO PORTRAIT (TRANSPARENT PNG) */}
          <div
            className="absolute"
            style={{
              left: '312px',
              top: '138px',
              width: '412px',
              height: '494px',
              zIndex: 4,
            }}
          >
            <PortraitSlot
              variant="hero"
              mode="photo"
              src="/hero-portrait.png"
              objectPosition="center bottom"
            />
          </div>

          {/* LAYER 3: HERO HEADING H1 (DANG VU THUY NGAN) */}
          <h1
            className="absolute select-none font-black tracking-[-4px] leading-[0.88]"
            style={{
              left: '53px',
              top: '260px',
              zIndex: 5,
            }}
            aria-label="Dang Vu Thuy Ngan"
          >
            <span
              className="block text-[#05051f]"
              style={{ fontSize: '90px', letterSpacing: '-4px' }}
            >
              DANG VU
            </span>
            
            <span
              className="block text-[#0060ff]"
              style={{ fontSize: '92px', letterSpacing: '-4px', marginTop: '2px' }}
            >
              THUY
            </span>
            
            <span
              className="block bg-gradient-to-b from-[#0060ff] via-[#0060ff]/80 to-[#7db4ff]/35 bg-clip-text text-transparent"
              style={{
                fontSize: '104px',
                letterSpacing: '-4px',
                marginLeft: '95px',
                marginTop: '4px',
              }}
            >
              NGAN
            </span>
          </h1>

          {/* LAYER 4: CORE AREAS & DASH */}
          <div
            className="absolute"
            style={{
              left: '741px',
              top: '280px',
              width: '270px',
              zIndex: 6,
            }}
          >
            <div className="w-[41px] h-[2.5px] bg-[#05051f] mb-[24px]" />

            <div className="font-handwriting flex flex-col space-y-[4px] text-[27px] font-medium text-[#0060ff] leading-[34px] tracking-wide whitespace-nowrap -rotate-[1.5deg] origin-top-left select-none">
              <span>Internal Communication</span>
              <span>Corporate Culture</span>
              <span>Employee Engagement</span>
              <span>Employee Experience</span>
            </div>
          </div>

          {/* LAYER 10: STATS OVERLAP PANEL */}
          <div
            className="absolute bg-white rounded-[20px] border border-slate-100 flex items-center"
            style={{
              left: '31px',
              top: '591px',
              width: '962px',
              height: '191px',
              zIndex: 10,
              boxShadow: '0 12px 36px rgba(0, 96, 255, 0.07), 0 2px 8px rgba(0, 0, 0, 0.03)',
            }}
          >
            {/* Cell 1: 7+ */}
            <div className="flex-1 h-full flex flex-col justify-center px-[38px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#e4efff] flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-[#0060ff]" />
              </div>
              <div className="text-[42px] font-extrabold text-[#05051f] leading-[44px] tracking-tight">
                7+
              </div>
              <div className="text-[14px] text-[#516992] leading-[19px] mt-1 font-medium">
                {lang === 'vi' ? 'Năm kinh nghiệm' : 'Years of Experience'}
              </div>
            </div>

            <div className="w-[1px] h-[120px] bg-slate-200/80" />

            {/* Cell 2: 4 */}
            <div className="flex-1 h-full flex flex-col justify-center px-[38px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#e4efff] flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-[#0060ff]" />
              </div>
              <div className="text-[42px] font-extrabold text-[#05051f] leading-[44px] tracking-tight">
                4
              </div>
              <div className="text-[14px] text-[#516992] leading-[19px] mt-1 font-medium">
                {lang === 'vi' ? (
                  <>Lĩnh vực chuyên môn<br />cốt lõi</>
                ) : (
                  <>Core Areas of<br />Expertise</>
                )}
              </div>
            </div>

            <div className="w-[1px] h-[120px] bg-slate-200/80" />

            {/* Cell 3: 6 */}
            <div className="flex-1 h-full flex flex-col justify-center px-[38px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#e4efff] flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5 text-[#0060ff]" />
              </div>
              <div className="text-[42px] font-extrabold text-[#05051f] leading-[44px] tracking-tight">
                6
              </div>
              <div className="text-[14px] text-[#516992] leading-[19px] mt-1 font-medium">
                {lang === 'vi' ? (
                  <>Môi trường &amp; Quy mô<br />tổ chức thực chiến</>
                ) : (
                  <>Organizational<br />Environments &amp; Scales</>
                )}
              </div>
            </div>

            <div className="w-[1px] h-[120px] bg-slate-200/80" />

            {/* Cell 4: AI */}
            <div className="flex-1 h-full flex flex-col justify-center px-[38px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#e4efff] flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-[#0060ff]" />
              </div>
              <div className="text-[42px] font-extrabold text-[#0060ff] leading-[44px] tracking-tight">
                AI
              </div>
              <div className="text-[14px] text-[#516992] leading-[19px] mt-1 font-medium">
                {lang === 'vi' ? (
                  <>Khai phóng năng lực<br />&amp; Tối ưu quy trình</>
                ) : (
                  <>Amplifying Capabilities<br />&amp; Optimizing Workflows</>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------
            TABLET (768px – 1279px) & MOBILE (< 768px):
            INTELLIGENT RESPONSIVE REFLOW
            -------------------------------------------------------- */}
        <div className="xl:hidden w-full relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-28 md:pt-24 lg:pt-28 pb-8 sm:pb-10 md:pb-0">
          {/* Atmospheric Glow Backdrop */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: '0%',
              top: '5%',
              width: '480px',
              height: '420px',
              background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.55) 0%, rgba(248, 251, 255, 0) 70%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: '5%',
              top: '20%',
              width: '360px',
              height: '360px',
              background: 'radial-gradient(circle at center, rgba(185, 225, 255, 0.45) 0%, rgba(248, 251, 255, 0) 65%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* TABLET VIEW (768px – 1279px): Balanced 2-Column Hero */}
          <div className="hidden md:flex md:items-end md:justify-between relative z-10 gap-6">
            {/* Left: Heading & Professional Domains */}
            <div className="flex-1 pb-12 lg:pb-16">
              <h1 className="select-none font-black tracking-[-3px] leading-[0.9]" aria-label="Dang Vu Thuy Ngan">
                <span className="block text-[#05051f] text-6xl lg:text-7xl">
                  DANG VU
                </span>
                <span className="block text-[#0060ff] text-6xl lg:text-7xl mt-1">
                  THUY
                </span>
                <span className="block bg-gradient-to-b from-[#0060ff] via-[#0060ff]/80 to-[#7db4ff]/35 bg-clip-text text-transparent text-7xl lg:text-8xl mt-2 ml-8 lg:ml-12">
                  NGAN
                </span>
              </h1>

              <div className="mt-8">
                <div className="w-[38px] h-[2.5px] bg-[#05051f] mb-3" />
                <div className="font-handwriting flex flex-col space-y-1 text-[24px] lg:text-[26px] font-medium text-[#0060ff] leading-[32px] tracking-wide whitespace-nowrap -rotate-[1.5deg] origin-top-left select-none">
                  <span>Internal Communication</span>
                  <span>Corporate Culture</span>
                  <span>Employee Engagement</span>
                  <span>Employee Experience</span>
                </div>
              </div>
            </div>

            {/* Right: Portrait & Curve Flourish */}
            <div className="w-[340px] lg:w-[390px] shrink-0 relative z-10">
              <svg
                className="absolute pointer-events-none overflow-visible right-[-20px] top-[-30px] w-[300px] h-[350px]"
                viewBox="0 0 300 350"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 300 30 C 260 80 280 180 250 240 C 230 280 180 300 130 310"
                  stroke="#0060ff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="w-full h-[420px] lg:h-[470px]">
                <PortraitSlot
                  variant="hero"
                  mode="photo"
                  src="/hero-portrait.png"
                  objectPosition="center bottom"
                />
              </div>
            </div>
          </div>

          {/* MOBILE VIEW (< 768px): Deliberate Compact Vertical Flow */}
          <div className="md:hidden flex flex-col relative z-10">
            {/* 1. Name */}
            <h1 className="select-none font-black tracking-[-2px] leading-[0.9] text-left" aria-label="Dang Vu Thuy Ngan">
              <span className="block text-[#05051f] text-[40px] sm:text-[46px]">
                DANG VU
              </span>
              <span className="block text-[#0060ff] text-[40px] sm:text-[46px] mt-0.5">
                THUY
              </span>
              <span className="block bg-gradient-to-b from-[#0060ff] via-[#0060ff]/80 to-[#7db4ff]/35 bg-clip-text text-transparent text-[48px] sm:text-[54px] mt-1 ml-5 sm:ml-7">
                NGAN
              </span>
            </h1>

            {/* 2. Professional Domains with framing flourish, integrated below Name */}
            <div className="relative mt-3.5 mb-2 ml-1 max-w-[270px]">
              <div className="w-[30px] h-[2px] bg-[#05051f] mb-2" />
              <div className="font-handwriting flex flex-col space-y-0.5 text-[20px] sm:text-[22px] font-medium text-[#0060ff] leading-[26px] sm:leading-[28px] tracking-wide whitespace-nowrap -rotate-[1deg] origin-top-left select-none">
                <span>Internal Communication</span>
                <span>Corporate Culture</span>
                <span>Employee Engagement</span>
                <span>Employee Experience</span>
              </div>

              {/* S-curve flourish framing right */}
              <svg
                className="absolute -right-5 -top-2 pointer-events-none overflow-visible w-[50px] h-[115px]"
                viewBox="0 0 60 130"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 55 5 C 40 35 50 75 35 95 C 25 108 10 115 0 118"
                  stroke="#0060ff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* 3. Portrait: positioned directly above Stats Panel so lower blazer/elbow intersects */}
            <div className="relative mx-auto mt-2 w-[270px] sm:w-[310px] h-[330px] sm:h-[370px] z-10">
              <PortraitSlot
                variant="hero"
                mode="photo"
                src="/hero-portrait.png"
                objectPosition="center bottom"
              />
            </div>
          </div>

          {/* 4. STATS PANEL ADAPTATION */}
          {/* Tablet (4 columns) */}
          <div className="hidden md:flex items-center -mt-8 lg:-mt-12 bg-white rounded-[20px] border border-slate-100 py-6 px-4 shadow-[0_12px_36px_rgba(0,96,255,0.07),0_2px_8px_rgba(0,0,0,0.03)] relative z-20">
            {/* Cell 1: 7+ */}
            <div className="flex-1 flex flex-col justify-center px-4 lg:px-6">
              <div className="w-[36px] h-[36px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                <Users className="w-4 h-4 text-[#0060ff]" />
              </div>
              <div className="text-[34px] lg:text-[38px] font-extrabold text-[#05051f] leading-none tracking-tight">
                7+
              </div>
              <div className="text-[12px] lg:text-[13px] text-[#516992] leading-snug mt-1 font-medium">
                {lang === 'vi' ? 'Năm kinh nghiệm' : 'Years of Experience'}
              </div>
            </div>

            <div className="w-[1px] h-[90px] bg-slate-200/80" />

            {/* Cell 2: 4 */}
            <div className="flex-1 flex flex-col justify-center px-4 lg:px-6">
              <div className="w-[36px] h-[36px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                <Lightbulb className="w-4 h-4 text-[#0060ff]" />
              </div>
              <div className="text-[34px] lg:text-[38px] font-extrabold text-[#05051f] leading-none tracking-tight">
                4
              </div>
              <div className="text-[12px] lg:text-[13px] text-[#516992] leading-snug mt-1 font-medium">
                {lang === 'vi' ? (
                  <>Lĩnh vực chuyên môn<br />cốt lõi</>
                ) : (
                  <>Core Areas of<br />Expertise</>
                )}
              </div>
            </div>

            <div className="w-[1px] h-[90px] bg-slate-200/80" />

            {/* Cell 3: 6 */}
            <div className="flex-1 flex flex-col justify-center px-4 lg:px-6">
              <div className="w-[36px] h-[36px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                <Building2 className="w-4 h-4 text-[#0060ff]" />
              </div>
              <div className="text-[34px] lg:text-[38px] font-extrabold text-[#05051f] leading-none tracking-tight">
                6
              </div>
              <div className="text-[12px] lg:text-[13px] text-[#516992] leading-snug mt-1 font-medium">
                {lang === 'vi' ? (
                  <>Môi trường &amp; Quy mô<br />tổ chức thực chiến</>
                ) : (
                  <>Organizational<br />Environments &amp; Scales</>
                )}
              </div>
            </div>

            <div className="w-[1px] h-[90px] bg-slate-200/80" />

            {/* Cell 4: AI */}
            <div className="flex-1 flex flex-col justify-center px-4 lg:px-6">
              <div className="w-[36px] h-[36px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                <Zap className="w-4 h-4 text-[#0060ff]" />
              </div>
              <div className="text-[34px] lg:text-[38px] font-extrabold text-[#0060ff] leading-none tracking-tight">
                AI
              </div>
              <div className="text-[12px] lg:text-[13px] text-[#516992] leading-snug mt-1 font-medium">
                {lang === 'vi' ? (
                  <>Khai phóng năng lực<br />&amp; Tối ưu quy trình</>
                ) : (
                  <>Amplifying Capabilities<br />&amp; Optimizing Workflows</>
                )}
              </div>
            </div>
          </div>

          {/* Mobile (2×2 layout): overlaps lower body/blazer of portrait */}
          <div className="md:hidden -mt-10 sm:-mt-12 bg-white rounded-[20px] border border-slate-100 p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,96,255,0.07),0_2px_8px_rgba(0,0,0,0.03)] relative z-20">
            <div className="grid grid-cols-2 gap-3 divide-x divide-slate-200/80">
              {/* Cell 1: 7+ */}
              <div className="flex flex-col justify-center px-1 sm:px-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                  <Users className="w-4 h-4 text-[#0060ff]" />
                </div>
                <div className="text-[28px] font-extrabold text-[#05051f] leading-none tracking-tight">
                  7+
                </div>
                <div className="text-[11.5px] sm:text-[12px] text-[#516992] leading-snug mt-1 font-medium">
                  {lang === 'vi' ? 'Năm kinh nghiệm' : 'Years of Experience'}
                </div>
              </div>

              {/* Cell 2: 4 */}
              <div className="flex flex-col justify-center pl-3 sm:pl-4">
                <div className="w-[32px] h-[32px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                  <Lightbulb className="w-4 h-4 text-[#0060ff]" />
                </div>
                <div className="text-[28px] font-extrabold text-[#05051f] leading-none tracking-tight">
                  4
                </div>
                <div className="text-[11.5px] sm:text-[12px] text-[#516992] leading-snug mt-1 font-medium">
                  {lang === 'vi' ? 'Lĩnh vực chuyên môn' : 'Core Expertise Areas'}
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-slate-200/80 my-3.5" />

            <div className="grid grid-cols-2 gap-3 divide-x divide-slate-200/80">
              {/* Cell 3: 6 */}
              <div className="flex flex-col justify-center px-1 sm:px-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                  <Building2 className="w-4 h-4 text-[#0060ff]" />
                </div>
                <div className="text-[28px] font-extrabold text-[#05051f] leading-none tracking-tight">
                  6
                </div>
                <div className="text-[11.5px] sm:text-[12px] text-[#516992] leading-snug mt-1 font-medium">
                  {lang === 'vi' ? 'Môi trường thực chiến' : 'Organizational Scales'}
                </div>
              </div>

              {/* Cell 4: AI */}
              <div className="flex flex-col justify-center pl-3 sm:pl-4">
                <div className="w-[32px] h-[32px] rounded-full bg-[#e4efff] flex items-center justify-center mb-2">
                  <Zap className="w-4 h-4 text-[#0060ff]" />
                </div>
                <div className="text-[28px] font-extrabold text-[#0060ff] leading-none tracking-tight">
                  AI
                </div>
                <div className="text-[11.5px] sm:text-[12px] text-[#516992] leading-snug mt-1 font-medium">
                  {lang === 'vi' ? 'Khai phóng năng lực' : 'Amplifying Workflows'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: NARRATIVE & ID CARD
          Owns its own positioning context.
          The lanyard straps extend upward behind the Stats Bar,
          creating the physical illusion of hanging from the white panel.
          ======================================================== */}
      <section
        className="relative w-full bg-[#f8fbff] overflow-x-clip"
        id="philosophy"
        style={{
          zIndex: 10,
        }}
      >
        {/* --------------------------------------------------------
            DESKTOP (≥ 1280px / xl): EXACT APPROVED SOURCE OF TRUTH
            UNTOUCHED COORDINATES AND SIZING
            -------------------------------------------------------- */}
        <div
          className="hidden xl:block relative mx-auto"
          style={{
            width: '1024px',
            minHeight: '658px',
          }}
        >
          {/* Primary Atmospheric Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '460px',
              top: '40px',
              width: '640px',
              height: '580px',
              background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.55) 0%, rgba(248, 251, 255, 0) 72%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Secondary Atmospheric Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '550px',
              top: '120px',
              width: '480px',
              height: '480px',
              background: 'radial-gradient(circle at center, rgba(185, 225, 255, 0.45) 0%, rgba(248, 251, 255, 0) 65%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Soft Center Bleed */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '360px',
              top: '180px',
              width: '420px',
              height: '380px',
              background: 'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.28) 0%, rgba(248, 251, 255, 0) 70%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Left Column: Statement & CTAs */}
          <div
            className="absolute"
            style={{
              left: '73px',
              top: '67px',
              width: '430px',
              zIndex: 5,
            }}
          >
            <h2 className="select-none">
              <span className="block text-[40px] font-black text-[#05051f] leading-[44px] tracking-tight">
                {lang === 'vi' ? 'Kết nối con người' : 'Connecting people'}
              </span>
              <span className="block text-[56px] font-black text-[#0060ff] leading-[54px] tracking-tight mt-1">
                {lang === 'vi' ? (
                  <>
                    Nuôi dưỡng<br />
                    những trải nghiệm<br />
                    có ý nghĩa
                  </>
                ) : (
                  <>
                    Nurturing<br />
                    meaningful<br />
                    experiences
                  </>
                )}
              </span>
              <span className="block text-[40px] font-black text-[#05051f] leading-[43px] tracking-tight mt-2">
                {lang === 'vi' ? (
                  <>
                    Cùng hướng về một<br />
                    mục tiêu
                  </>
                ) : (
                  <>
                    Aligning toward a<br />
                    shared purpose
                  </>
                )}
              </span>
            </h2>

            <p
              className="text-[16px] text-[#516992] leading-[23.5px] mt-[36px] max-w-[425px] font-normal italic"
            >
              {lang === 'vi'
                ? '“Với tôi, truyền thông nội bộ và văn hóa bắt đầu từ cách con người hiểu, cảm nhận và kết nối với nhau. Từ đó tạo nên sự gắn kết, đồng hướng và chuyển hóa sự thấu hiểu chung thành hành động.”'
                : '“To me, internal communication and culture begin with how people understand, feel and connect with one another. This creates connection, alignment and turns shared understanding into action.”'}
            </p>

            <div className="mt-[35px] flex items-center gap-[16px]">
              <a
                href="#career"
                onClick={(e) => {
                  if (onExplore) {
                    e.preventDefault();
                    onExplore();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 h-[51px] px-[28px] rounded-full bg-[#0060ff] text-white text-[14px] font-semibold tracking-wide shadow-md shadow-blue-500/20 hover:bg-[#0050df] transition-all cursor-pointer"
                style={{ minWidth: '220px' }}
              >
                <span>{lang === 'vi' ? 'Khám phá hành trình' : 'Explore Career Story'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cases"
                onClick={(e) => {
                  if (onViewCaseStudies) {
                    e.preventDefault();
                    onViewCaseStudies();
                  }
                }}
                className="inline-flex items-center justify-center h-[51px] px-[24px] rounded-full bg-white text-[#0060ff] border border-[#0060ff] text-[14px] font-semibold tracking-wide hover:bg-blue-50/50 transition-all cursor-pointer"
                style={{ minWidth: '175px' }}
              >
                <span>{lang === 'vi' ? 'Xem các Case Study' : 'View Case Studies'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lanyard Assembly & Suspended ID Card */}
          <div
            className="absolute"
            style={{
              left: '600px',
              top: '0px',
              zIndex: 15,
            }}
          >
            <LanyardAssembly idPrefix="desktop" />
          </div>
        </div>

        {/* --------------------------------------------------------
            TABLET (768px – 1279px) & MOBILE (< 768px):
            INTELLIGENT RESPONSIVE REFLOW
            -------------------------------------------------------- */}
        <div className="xl:hidden w-full relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 pb-16 sm:pb-20">
          <div className="flex flex-col relative z-10">
            {/* 1. Headline */}
            <h2 className="select-none text-left">
              <span className="block text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#05051f] leading-tight tracking-tight">
                {lang === 'vi' ? 'Kết nối con người' : 'Connecting people'}
              </span>
              <span className="block text-[38px] sm:text-[46px] md:text-[52px] font-black text-[#0060ff] leading-[1.05] tracking-tight mt-1">
                {lang === 'vi' ? (
                  <>
                    Nuôi dưỡng<br />
                    những trải nghiệm<br />
                    có ý nghĩa
                  </>
                ) : (
                  <>
                    Nurturing<br />
                    meaningful<br />
                    experiences
                  </>
                )}
              </span>
              <span className="block text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#05051f] leading-tight tracking-tight mt-2">
                {lang === 'vi' ? (
                  <>Cùng hướng về một mục tiêu</>
                ) : (
                  <>Aligning toward a shared purpose</>
                )}
              </span>
            </h2>

            {/* 2. Supporting paragraph */}
            <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#516992] leading-relaxed mt-5 sm:mt-6 max-w-2xl font-normal italic text-left">
              {lang === 'vi'
                ? '“Với tôi, truyền thông nội bộ và văn hóa bắt đầu từ cách con người hiểu, cảm nhận và kết nối với nhau. Từ đó tạo nên sự gắn kết, đồng hướng và chuyển hóa sự thấu hiểu chung thành hành động.”'
                : '“To me, internal communication and culture begin with how people understand, feel and connect with one another. This creates connection, alignment and turns shared understanding into action.”'}
            </p>

            {/* 3. CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#career"
                onClick={(e) => {
                  if (onExplore) {
                    e.preventDefault();
                    onExplore();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full bg-[#0060ff] text-white text-[14px] font-semibold tracking-wide shadow-md shadow-blue-500/20 hover:bg-[#0050df] transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>{lang === 'vi' ? 'Khám phá hành trình' : 'Explore Career Story'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cases"
                onClick={(e) => {
                  if (onViewCaseStudies) {
                    e.preventDefault();
                    onViewCaseStudies();
                  }
                }}
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-white text-[#0060ff] border border-[#0060ff] text-[14px] font-semibold tracking-wide hover:bg-blue-50/50 transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>{lang === 'vi' ? 'Xem các Case Study' : 'View Case Studies'}</span>
              </a>
            </div>

            {/* 4. ID Card visual in its own clean visual zone BELOW the CTA group */}
            <div className="relative mt-20 sm:mt-24 md:mt-28 flex flex-col items-center">

              {/* Atmospheric Glow behind ID card */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: '50%',
                  top: '60px',
                  transform: 'translateX(-50%)',
                  width: '420px',
                  height: '460px',
                  background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.55) 0%, rgba(248, 251, 255, 0) 70%)',
                  zIndex: 0,
                }}
                aria-hidden="true"
              />

              {/* Lanyard assembly container scaled proportionally so it fits completely in 375px+ screens */}
              <div
                className="relative z-10 flex justify-center overflow-visible"
                style={{
                  width: '320px',
                  height: '520px',
                }}
              >
                <div className="origin-top scale-[0.78] sm:scale-[0.88] md:scale-95 transition-transform">
                  <LanyardAssembly idPrefix="responsive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
