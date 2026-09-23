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
        className="relative w-full bg-[#f8fbff]"
        id="hero"
        style={{
          height: '782px',
          zIndex: 20,
        }}
      >
        <div
          className="relative mx-auto h-full"
          style={{
            width: '1024px',
            height: '100%',
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

          {/* LAYER 2: REAL HERO PORTRAIT (TRANSPARENT PNG)
              - Lower forearm rests firmly on the Stats panel top edge (y: 591px).
              - Bottom edge terminates at y: 593px (2px concealed behind Stats panel at zIndex: 10).
              - Original aspect ratio (853:1024) preserved with object-contain.
              - x: 312px, y: 98px, w: 412px, h: 494px, zIndex: 4.
          */}
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

          {/* LAYER 3: HERO HEADING H1 (DANG VU THUY NGAN)
              Line 1: DANG VU at x: 53, y: 260 (navy, 90px bold, tracking -4px)
              Line 2: THUY at x: 54, y: 342 (blue #0060ff, 92px bold)
              Line 3: NGAN at x: 149, y: 414 (104px bold, shifted right ~95px,
                      intentional overlap over the portrait blazer at zIndex: 5)
          */}
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

          {/* LAYER 4: CORE AREAS & DASH
              x: 741, y: 280, w: 270
          */}
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

          {/* LAYER 10: STATS OVERLAP PANEL
              Clean visual closing baseline of the Hero view.
              x: 31, y: 591, w: 962, h: 191, radius: 20px
          */}
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
            {/* Cell 1: 7+ (Năm kinh nghiệm / Years of Experience) */}
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
      </section>

      {/* ========================================================
          SECTION 2: NARRATIVE & ID CARD
          Owns its own positioning context.
          The lanyard straps extend upward behind the Stats Bar,
          creating the physical illusion of hanging from the white panel.
          ======================================================== */}
      <section
        className="relative w-full bg-[#f8fbff]"
        id="philosophy"
        style={{
          minHeight: '658px',
          zIndex: 10,
        }}
      >
        <div
          className="relative mx-auto h-full"
          style={{
            width: '1024px',
            minHeight: '658px',
          }}
        >
          {/* Soft ellipse glow behind ID Card */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '520px',
              top: '60px',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(ellipse at center, rgba(190, 226, 255, 0.6) 0%, rgba(220, 240, 255, 0.3) 50%, rgba(248, 251, 255, 0) 75%)',
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
              className="text-[16px] text-[#516992] leading-[23.5px] mt-[36px] max-w-[425px] font-normal"
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

          {/* Right Column: Lanyard Assembly & Suspended ID Card
              Structurally anchored to Section 2 (top: 0px, left: 600px).
              Strap begins at the top boundary of Section 2, cleanly contained.
          */}
          <div
            className="absolute"
            style={{
              left: '600px',
              top: '0px',
              zIndex: 15,
            }}
          >
            <LanyardAssembly />
          </div>
        </div>
      </section>
    </>
  );
};
