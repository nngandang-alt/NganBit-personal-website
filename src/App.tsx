import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerStory } from './components/CareerStory';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Approach } from './components/Approach';
import { ImpactStats } from './components/ImpactStats';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CaseStudy, Language } from './types';
import { CASE_STUDIES } from './data/portfolioData';

export default function App() {
  // Persist language preference in localStorage (default: 'vi')
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'en' || saved === 'vi') return saved;
    } catch {
      // ignore
    }
    return 'vi';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch {
      // ignore
    }
  };

  // Scroll spy to update active section in floating navigation
  useEffect(() => {
    const sectionIds = [
      'hero',
      'story',
      'philosophy',
      'experience',
      'cases',
      'methodology',
      'credentials',
      'connect',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 260;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCaseById = (caseId: string) => {
    const found = CASE_STUDIES.find((c) => c.id === caseId);
    if (found) {
      setSelectedCase(found);
    } else {
      scrollToSection('cases');
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 p-2 sm:p-4 md:p-6 lg:p-8 transition-colors duration-300">
      {/* Centered Large Editorial Container */}
      <div className="w-full max-w-[1560px] mx-auto bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] shadow-2xl shadow-slate-300/40 border border-slate-200/80 overflow-hidden flex flex-col relative">
        
        {/* Floating Top Navigation */}
        <Navbar
          lang={lang}
          onToggleLang={handleToggleLang}
          activeSection={activeSection}
        />

        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onExploreStory={() => scrollToSection('story')}
          onExploreCases={() => scrollToSection('cases')}
        />

        {/* 2. Layer 1: Career Story (5 Chapters Connected Journey) */}
        <CareerStory lang={lang} />

        {/* 3. Professional Philosophy (The Belief Chain & Experience Lens) */}
        <Philosophy lang={lang} />

        {/* 4. Layer 2: Experience (Verified Roles, Scopes & Impacts) */}
        <Experience
          lang={lang}
          onSelectCase={handleSelectCaseById}
        />

        {/* 5. Layer 3: Evidence (Flagship Case Studies) */}
        <Projects
          lang={lang}
          onSelectCase={(cs) => setSelectedCase(cs)}
        />

        {/* 6. How I Work (7-Step Continuous Flow & AI Amplifier) */}
        <Approach lang={lang} />

        {/* 7. Impact at a Glance (Verified Metrics with Context) */}
        <ImpactStats lang={lang} />

        {/* 8. Credentials (Education & Curated Certifications) */}
        <Credentials lang={lang} />

        {/* 9. Connect (Direct LinkedIn, Zalo, Email, CV - No Form) */}
        <Contact lang={lang} />

        {/* 10. Footer */}
        <Footer lang={lang} />

      </div>

      {/* Flagship Case Study In-Depth Modal */}
      <ProjectModal
        caseStudy={selectedCase}
        lang={lang}
        onClose={() => setSelectedCase(null)}
        onConnectClick={() => scrollToSection('connect')}
      />
    </div>
  );
}
