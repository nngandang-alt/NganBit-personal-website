import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-3 md:top-6 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
      <div
        className={`w-full mx-auto flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-black/5 px-4 sm:px-6 py-2.5 rounded-full text-slate-800'
            : 'bg-black/40 backdrop-blur-md border border-white/15 px-3 sm:px-5 py-2 rounded-full text-white'
        }`}
      >
        {/* Brand: Monogram & Identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          id="nav-logo"
        >
          <div
            className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs tracking-wider transition-all duration-200 ${
              isScrolled
                ? 'bg-[#0068FF] text-white shadow-xs group-hover:bg-[#0052CC]'
                : 'bg-white text-[#0068FF] shadow-xs group-hover:scale-105'
            }`}
          >
            {PERSONAL_INFO.monogram}
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-bold text-sm tracking-tight transition-colors ${
                isScrolled ? 'text-slate-900 group-hover:text-[#0068FF]' : 'text-white'
              }`}
            >
              {PERSONAL_INFO.identity}
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Bar */}
        <nav
          className={`hidden lg:flex items-center gap-0.5 px-1.5 py-1 rounded-full text-xs font-medium transition-colors ${
            isScrolled
              ? 'bg-slate-100/80 border border-slate-200/60'
              : 'bg-white/10 border border-white/10'
          }`}
          id="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? isScrolled
                      ? 'bg-white text-[#0068FF] font-semibold shadow-xs'
                      : 'bg-white/20 text-white font-semibold'
                    : isScrolled
                    ? 'text-slate-600 hover:text-[#0068FF] hover:bg-white/50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label[lang]}
              </a>
            );
          })}
        </nav>

        {/* Right: Language Switcher & Connect CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Functional VI | EN Switcher */}
          <div
            className={`flex items-center rounded-full p-0.5 text-xs font-semibold transition-colors ${
              isScrolled
                ? 'bg-slate-100 border border-slate-200/80 text-slate-700'
                : 'bg-white/15 border border-white/20 text-white'
            }`}
            role="group"
            aria-label="Language selector"
          >
            <button
              onClick={() => onToggleLang('vi')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'vi'
                  ? 'bg-[#0068FF] text-white shadow-xs'
                  : 'hover:opacity-80'
              }`}
              title="Tiếng Việt"
              aria-pressed={lang === 'vi'}
            >
              VI
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#0068FF] text-white shadow-xs'
                  : 'hover:opacity-80'
              }`}
              title="English"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          {/* Quick Connect link */}
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, '#connect')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#0068FF] hover:bg-[#0052CC] active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm shadow-blue-500/20 transition-all duration-200 cursor-pointer"
            id="nav-connect-btn"
          >
            <span>{lang === 'vi' ? 'Kết nối' : 'Connect'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              isScrolled
                ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
            }`}
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-2xl text-slate-800 animate-in fade-in slide-in-from-top-3 duration-200">
          {/* Top Lang row inside mobile menu */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#0068FF]" />
              <span>{lang === 'vi' ? 'Ngôn ngữ' : 'Language'}</span>
            </span>
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-full text-xs font-semibold">
              <button
                onClick={() => onToggleLang('vi')}
                className={`px-3 py-1 rounded-full ${
                  lang === 'vi' ? 'bg-[#0068FF] text-white' : 'text-slate-600'
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => onToggleLang('en')}
                className={`px-3 py-1 rounded-full ${
                  lang === 'en' ? 'bg-[#0068FF] text-white' : 'text-slate-600'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0068FF]/10 text-[#0068FF] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label[lang]}
                </a>
              );
            })}
          </div>

          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, '#connect')}
            className="w-full bg-[#0068FF] hover:bg-[#0052CC] text-white py-2.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <span>{lang === 'vi' ? 'Bắt đầu kết nối' : 'Start a Conversation'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
