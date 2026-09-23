import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CareerStory } from './components/CareerStory';
import { Philosophy } from './components/Philosophy';
import { WorkAndImpact } from './components/WorkAndImpact';
import { Recognition } from './components/Recognition';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { CaseStudy, Language } from './types';

type MajorView = 'hero' | 'career' | 'philosophy' | 'work' | 'recognition' | 'education' | 'connect';

export function App() {
  const [lang, setLang] = useState<Language>('en');

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

  const parseHash = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash || hash === 'hero') {
      setActiveView('hero');
      return;
    }

    const parts = hash.split('/');
    const view = parts[0] as MajorView;

    if (view === 'story' || (view as string) === 'experience') {
      setActiveView('career');
      return;
    }
    if ((view as string) === 'methodology' || (view as string) === 'approach') {
      setActiveView('philosophy');
      return;
    }
    if ((view as string) === 'credentials') {
      setActiveView('education');
      return;
    }
    if ((view as string) === 'cases' || (view as string) === 'case-studies' || (view as string) === 'projects' || (view as string) === 'work-impact') {
      setActiveView('work');
      if (parts[1]) {
        setActiveCaseId(parts[1]);
      }
      return;
    }
    if ((view as string) === 'contact') {
      setActiveView('connect');
      return;
    }

    if (['hero', 'career', 'philosophy', 'work', 'recognition', 'education', 'connect'].includes(view)) {
      setActiveView(view);
      if (view === 'work' && parts[1]) {
        setActiveCaseId(parts[1]);
      }
    } else {
      setActiveView('hero');
    }
  };

  useEffect(() => {
    parseHash();
    const onHashChange = () => {
      parseHash();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (view: MajorView | string, subId?: string) => {
    let target = view as MajorView;
    if (view === 'story' || view === 'experience') target = 'career';
    if (view === 'approach' || view === 'methodology') target = 'philosophy';
    if (view === 'cases' || view === 'case-studies' || view === 'projects' || view === 'work-impact') target = 'work';
    if (view === 'credentials') target = 'education';
    if (view === 'contact') target = 'connect';

    const hash = subId ? `#${target}/${subId}` : `#${target}`;
    window.history.replaceState(null, '', hash);
    setActiveView(target);
    if (subId) setActiveCaseId(subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans antialiased text-[#05051f] selection:bg-[#0060ff] selection:text-white">
      {/* 1. Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        activeSection={activeView}
        onSelectView={(v) => navigateTo(v)}
      />

      {/* 2. Main View */}
      <main className="w-full">
        {activeView === 'hero' && (
          <Hero
            lang={lang}
            onExplore={() => navigateTo('career')}
            onViewCaseStudies={() => navigateTo('work')}
          />
        )}

        {activeView === 'career' && (
          <div className="pt-24 max-w-6xl mx-auto px-4">
            <CareerStory
              lang={lang}
              onNavigateNext={() => navigateTo('philosophy')}
              onSelectCase={(caseId) => navigateTo('work', caseId)}
            />
          </div>
        )}

        {activeView === 'philosophy' && (
          <div className="pt-24 max-w-6xl mx-auto px-4">
            <Philosophy
              lang={lang}
              onNavigateNext={() => navigateTo('work')}
            />
          </div>
        )}

        {activeView === 'work' && (
          <div className="pt-24 max-w-6xl mx-auto px-4">
            <WorkAndImpact
              lang={lang}
              activeCaseId={activeCaseId}
              onNavigateNext={() => navigateTo('recognition')}
            />
          </div>
        )}

        {activeView === 'recognition' && (
          <div className="pt-24 max-w-6xl mx-auto px-4">
            <Recognition
              lang={lang}
              onNavigateNext={() => navigateTo('education')}
            />
          </div>
        )}

        {activeView === 'education' && (
          <div className="pt-24 max-w-6xl mx-auto px-4">
            <Credentials
              lang={lang}
              onNavigateNext={() => navigateTo('connect')}
            />
          </div>
        )}

        {activeView === 'connect' && (
          <div className="pt-24 max-w-6xl mx-auto px-4">
            <Contact lang={lang} />
          </div>
        )}
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* Case Study Modal */}
      <ProjectModal
        caseStudy={selectedCaseModal}
        lang={lang}
        onClose={() => setSelectedCaseModal(null)}
        onConnectClick={() => navigateTo('connect')}
      />
    </div>
  );
}

export default App;
