import React, { useState } from 'react';
import { Language } from '../types';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  activeSection?: string;
  onSelectView?: (viewId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  activeSection,
  onSelectView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12 pt-3 sm:pt-5">
        <div
          className="pointer-events-auto flex items-center justify-between px-3.5 sm:px-5 lg:px-6 bg-white/92 backdrop-blur-md border border-[#dce6f4] rounded-[30px] shadow-[0_8px_30px_rgba(0,96,255,0.06)] text-slate-800 transition-all duration-300"
          style={{ height: '56px' }}
        >
          {/* Left: Logo tròn NĐ (34x34) + Wordmark NGÂN ĐẶNG */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
            id="nav-logo"
            aria-label="Dang Vu Thuy Ngan Home"
          >
            <div className="w-[34px] h-[34px] rounded-full bg-[#0060ff] text-white flex items-center justify-center font-extrabold text-[12.5px] shadow-sm tracking-tight shrink-0">
              NĐ
            </div>
            <span className="font-extrabold text-[11.5px] sm:text-[12.5px] tracking-[0.04em] text-[#05051f] uppercase whitespace-nowrap">
              NGÂN ĐẶNG
            </span>
          </a>

          {/* Center: 5 Menu items on desktop (≥ 1024px) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-7 text-[12px] xl:text-[13px] font-medium text-[#516992] tracking-tight">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`transition-colors cursor-pointer py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#0060ff] font-semibold'
                      : 'hover:text-[#0060ff]'
                  }`}
                >
                  {item.label[lang]}
                </a>
              );
            })}
          </nav>

          {/* Right: Language switch pill + CTA / Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Language switch */}
            <div
              className="flex items-center p-[2px] rounded-full bg-[#edf4ff] border border-blue-100 shrink-0"
              style={{ width: '64px', height: '31px' }}
            >
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`w-[27px] h-[27px] rounded-full flex items-center justify-center text-[10.5px] font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#0060ff] text-white shadow-xs'
                    : 'text-[#0060ff] hover:text-[#004dc9]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('vi')}
                className={`w-[27px] h-[27px] rounded-full flex items-center justify-center text-[10.5px] font-bold transition-all cursor-pointer ${
                  lang === 'vi'
                    ? 'bg-[#0060ff] text-white shadow-xs'
                    : 'text-[#0060ff] hover:text-[#004dc9]'
                }`}
                aria-label="Chuyển sang Tiếng Việt"
              >
                VI
              </button>
            </div>

            {/* Desktop CTA Button: Kết nối / Connect (≥ 1024px) */}
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, 'connect')}
              className="hidden lg:inline-flex items-center justify-center gap-1.5 px-3.5 h-[33px] rounded-full bg-[#0060ff] text-white text-[11.5px] xl:text-[12px] font-medium shadow-xs hover:bg-[#0050df] transition-all cursor-pointer shrink-0"
            >
              <span>{lang === 'vi' ? 'Kết nối' : 'Connect'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile / Tablet Navigation Trigger Button (< 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-[33px] h-[33px] rounded-full bg-[#edf4ff] text-[#0060ff] border border-blue-100 hover:bg-blue-100/70 transition-all cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 p-3 bg-white/96 backdrop-blur-xl border border-[#dce6f4] rounded-[22px] shadow-[0_16px_40px_rgba(0,96,255,0.12)] animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#edf4ff] text-[#0060ff] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0060ff]'
                    }`}
                  >
                    <span>{item.label[lang]}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0060ff]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 mt-2 border-t border-slate-100">
              <a
                href="#connect"
                onClick={(e) => handleNavClick(e, 'connect')}
                className="flex items-center justify-center gap-1.5 w-full h-[40px] rounded-xl bg-[#0060ff] text-white text-[13px] font-semibold shadow-xs hover:bg-[#0050df] transition-all cursor-pointer"
              >
                <span>{lang === 'vi' ? 'Kết nối' : 'Connect'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
