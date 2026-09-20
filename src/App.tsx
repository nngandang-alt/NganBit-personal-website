import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerStory } from './components/CareerStory';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { SelectedWork } from './components/SelectedWork';
import { Recognition } from './components/Recognition';
import { Approach } from './components/Approach';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CaseStudy, Language } from './types';
import { CASE_STUDIES } from './data/portfolioData';

type MajorView =
  | 'hero'
  | 'career'
  | 'philosophy'
  | 'cases'
  | 'work'
  | 'recognition'
  | 'approach'
  | 'education'
  | 'connect';

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

  // Active Focused View state based on URL hash
  const [activeView, setActiveView] = useState<MajorView>('hero');
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(null);

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch {
      // ignore
    }
  };

  // Parse current hash into view state
  const parseHash = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash || hash === 'hero') {
      setActiveView('hero');
      return;
    }

    const parts = hash.split('/');
    const view = parts[0] as MajorView;

    // Map legacy or alias hashes
    if (view === 'story') {
      setActiveView('career');
      return;
    }
    if (view === 'methodology') {
      setActiveView('approach');
      return;
    }
    if (view === 'credentials') {
      setActiveView('education');
      return;
    }

    if (
      ['hero', 'career', 'philosophy', 'cases', 'work', 'recognition', 'approach', 'education', 'connect'].includes(view)
    ) {
      setActiveView(view);
      if (view === 'cases' && parts[1]) {
        setActiveCaseId(parts[1]);
      }
    } else {
      setActiveView('hero');
    }
  };

  // Listen to hash change for browser Back / Forward support
  useEffect(() => {
    parseHash();
    const onHashChange = () => {
      parseHash();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // View navigation helper
  const navigateTo = (view: MajorView, subId?: string) => {
    const hash = subId ? `#${view}/${subId}` : `#${view}`;
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 p-2 sm:p-4 md:p-6 lg:p-8 transition-colors duration-300">
      {/* Centered Large Editorial Container */}
      <div className="w-full max-w-[1560px] mx-auto bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] shadow-2xl shadow-slate-300/40 border border-slate-200/80 overflow-hidden flex flex-col relative">
        
        {/* Floating Top Navigation (View Selector) */}
        <Navbar
          lang={lang}
          onToggleLang={handleToggleLang}
          activeSection={activeView}
          onSelectView={(v) => navigateTo(v as MajorView)}
        />

        {/* FOCUSED VIEW ARCHITECTURE (Progressive Disclosure) */}
        <main className="w-full transition-opacity duration-300">
          {activeView === 'hero' && (
            <Hero
              lang={lang}
              onExploreStory={() => navigateTo('career')}
              onExploreCases={() => navigateTo('cases')}
            />
          )}

          {activeView === 'career' && (
            <CareerStory
              lang={lang}
              onNavigateNext={() => navigateTo('philosophy')}
              onSelectCase={(caseId) => navigateTo('cases', caseId)}
            />
          )}

          {activeView === 'philosophy' && (
            <Philosophy
              lang={lang}
              onNavigateNext={() => navigateTo('cases')}
            />
          )}

          {activeView === 'cases' && (
            <Projects
              lang={lang}
              activeCaseId={activeCaseId}
              onNavigateNext={() => navigateTo('work')}
            />
          )}

          {activeView === 'work' && (
            <SelectedWork
              lang={lang}
              onNavigateNext={() => navigateTo('recognition')}
            />
          )}

          {activeView === 'recognition' && (
            <Recognition
              lang={lang}
              onNavigateNext={() => navigateTo('approach')}
            />
          )}

          {activeView === 'approach' && (
            <Approach
              lang={lang}
              onNavigateNext={() => navigateTo('education')}
            />
          )}

          {activeView === 'education' && (
            <Credentials
              lang={lang}
              onNavigateNext={() => navigateTo('connect')}
            />
          )}

          {activeView === 'connect' && (
            <Contact lang={lang} />
          )}
        </main>

        {/* Minimal Footer */}
        <Footer lang={lang} />

      </div>

      {/* Case Study In-Depth Modal if triggered */}
      <ProjectModal
        caseStudy={selectedCaseModal}
        lang={lang}
        onClose={() => setSelectedCaseModal(null)}
        onConnectClick={() => navigateTo('connect')}
      />
    </div>
  );
}
