import React from 'react';
import { Language } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  activeSection?: string;
  onSelectView?: (viewId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onSelectView,
}) => {
  // Exactly 5 main navigation items (Work & Impact consolidated)
  const navItems = [
    {
      id: 'career',
      label: {
        vi: 'Hành trình & Kinh nghiệm',
        en: 'Career & Experience',
      },
    },
    {
      id: 'philosophy',
      label: {
        vi: 'Triết lý & Phương pháp',
        en: 'Philosophy & Approach',
      },
    },
    {
      id: 'work',
      label: {
        vi: 'Dự án & Dấu ấn',
        en: 'Work & Impact',
      },
    },
    {
      id: 'education',
      label: {
        vi: 'Học vấn & Phát triển',
        en: 'Education & Development',
      },
    },
    {
      id: 'recognition',
      label: {
        vi: 'Ghi nhận',
        en: 'Recognition',
      },
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (onSelectView) {
      onSelectView(targetId);
    } else {
      window.location.hash = `#${targetId}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      {/* 
        Wide Desktop Container:
        max-w-[1440px] with responsive side padding.
      */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-5 sm:pt-6">
        <div
          className="pointer-events-auto flex items-center justify-between px-5 sm:px-7 bg-white/92 backdrop-blur-md border border-[#dce6f4] rounded-[30px] shadow-[0_8px_30px_rgba(0,96,255,0.06)] text-slate-800 transition-all duration-300"
          style={{ height: '58px' }}
        >
          {/* Left: Logo tròn NĐ (36x36) + Wordmark NGÂN ĐẶNG */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-[10px] group cursor-pointer shrink-0"
            id="nav-logo"
          >
            <div className="w-[36px] h-[36px] rounded-full bg-[#0060ff] text-white flex items-center justify-center font-extrabold text-[13px] shadow-sm tracking-tight">
              NĐ
            </div>
            <span className="font-extrabold text-[12.5px] tracking-[0.04em] text-[#05051f] uppercase">
              NGÂN ĐẶNG
            </span>
          </a>

          {/* Center: 6 Menu items with slightly increased font size and balanced spacing */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-8 text-[12.5px] lg:text-[13px] font-medium text-[#516992] tracking-tight">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="hover:text-[#0060ff] transition-colors cursor-pointer py-1 whitespace-nowrap"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          {/* Right: Language switch pill (68x33) + Large CTA button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language switch */}
            <div
              className="flex items-center p-[2px] rounded-full bg-[#edf4ff] border border-blue-100"
              style={{ width: '68px', height: '33px' }}
            >
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`w-[29px] h-[29px] rounded-full flex items-center justify-center text-[11px] font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#0060ff] text-white shadow-xs'
                    : 'text-[#0060ff] hover:text-[#004dc9]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('vi')}
                className={`w-[29px] h-[29px] rounded-full flex items-center justify-center text-[11px] font-bold transition-all cursor-pointer ${
                  lang === 'vi'
                    ? 'bg-[#0060ff] text-white shadow-xs'
                    : 'text-[#0060ff] hover:text-[#004dc9]'
                }`}
              >
                VI
              </button>
            </div>

            {/* Large CTA Button: Kết nối / Connect */}
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, 'connect')}
              className="inline-flex items-center justify-center gap-1.5 px-4 h-[35px] rounded-full bg-[#0060ff] text-white text-[12px] font-medium shadow-xs hover:bg-[#0050df] transition-all cursor-pointer shrink-0"
            >
              <span>{lang === 'vi' ? 'Kết nối' : 'Connect'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
