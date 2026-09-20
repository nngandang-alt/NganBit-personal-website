import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerStory } from './components/CareerStory';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { SelectedWork } from './components/SelectedWork';
import { Recognition } from './components/Recognition';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CaseStudy, Language } from './types';
import { RefreshCw } from 'lucide-react';

type MajorView =
  | 'hero'
  | 'career'
  | 'philosophy'
  | 'cases'
  | 'work'
  | 'recognition'
  | 'education'
  | 'connect';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackView: () => void;
  lang: Language;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class SafeViewBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('View Render Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full py-24 px-6 text-center bg-white rounded-3xl my-8 border border-red-100 shadow-sm">
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              {this.props.lang === 'vi' ? 'Đã xảy ra sự cố khi tải phần này' : 'Unable to render this section'}
            </h3>
            <p className="text-xs text-slate-500">
              {this.state.error?.message || 'Unexpected rendering state'}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                this.props.fallbackView();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0068FF] text-white text-xs font-semibold cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{this.props.lang === 'vi' ? 'Quay lại Trang chủ' : 'Return to Overview'}</span>
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

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

        // Map legacy or alias hashes to active views
    if (view === 'story') {
      setActiveView('career');
      return;
    }
    if (view === 'methodology' || view === 'approach') {
      setActiveView('philosophy');
      window.location.hash = '#philosophy';
      return;
    }
    if (view === 'credentials') {
      setActiveView('education');
      return;
    }

    if (
      ['hero', 'career', 'philosophy', 'cases', 'work', 'recognition', 'education', 'connect'].includes(view)
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
  const navigateTo = (view: MajorView | 'approach' | 'methodology', subId?: string) => {
    if ((view as string) === 'approach' || (view as string) === 'methodology') {
      view = 'philosophy';
    }
    const hash = subId ? `#${view}/${subId}` : `#${view}`;
    window.location.hash = hash;
    setActiveView(view);
    if (subId) setActiveCaseId(subId);
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
        <main className="w-full pt-16 sm:pt-20 md:pt-22 transition-opacity duration-300">
          <SafeViewBoundary fallbackView={() => navigateTo('hero')} lang={lang}>
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
                onNavigateNext={() => navigateTo('education')}
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
          </SafeViewBoundary>
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
