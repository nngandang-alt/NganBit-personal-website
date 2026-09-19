import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConnect: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
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
    <header
      className={`fixed top-4 md:top-8 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none`}
    >
      <div
        className={`w-full mx-auto flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/85 backdrop-blur-md border border-white/10 shadow-lg px-4 sm:px-6 py-2.5 rounded-full'
            : 'bg-transparent px-2 py-2'
        }`}
      >
        {/* Left: Brand Monogram & Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-full bg-white text-[#111111] font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
            {PERSONAL_INFO.monogram}
          </div>
          <span className="text-white font-medium text-base tracking-tight drop-shadow-sm group-hover:text-blue-200 transition-colors">
            {PERSONAL_INFO.shortName}
          </span>
        </a>

        {/* Center: Desktop Navigation Bar with Translucent Pill */}
        <nav
          className="hidden md:flex items-center gap-1 bg-black/25 backdrop-blur-md border border-white/10 px-2 py-1.5 rounded-full shadow-inner"
          id="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white/25 text-white backdrop-blur-sm shadow-sm font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenConnect}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 text-white text-sm font-medium px-5 py-2 rounded-full shadow-md transition-all duration-200 cursor-pointer"
            id="nav-connect-btn"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-white/30 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-2 bg-[#111111]/95 backdrop-blur-xl border border-white/15 rounded-3xl p-5 shadow-2xl text-white animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1.5 mb-5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/80 hover:bg-white/10 text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConnect();
            }}
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-lg"
            id="mobile-connect-btn"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
