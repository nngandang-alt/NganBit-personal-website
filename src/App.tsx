import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ImpactStats } from './components/ImpactStats';
import { Approach } from './components/Approach';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConnectModal } from './components/ConnectModal';
import { ProjectModal } from './components/ProjectModal';
import { InsightModal } from './components/InsightModal';
import { InsightItem, ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [connectOpen, setConnectOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<InsightItem | null>(null);

  // Scroll spy to update active section in floating navigation
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'expertise', 'experience', 'projects', 'insights', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
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

  return (
    <div className="min-h-screen bg-[#ECECEA] text-[#111111] p-3 sm:p-5 md:p-8 lg:p-10 xl:p-12 transition-colors duration-300">
      {/* 
        The entire website sits inside a large centered container with:
        - white/light neutral outer background
        - generous margins around the website
        - large rounded corners
        - subtle shadow
        - premium card-like appearance
      */}
      <div className="w-full max-w-[1560px] mx-auto bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] shadow-2xl shadow-black/10 border border-black/5 overflow-hidden flex flex-col relative">
        
        {/* Floating Transparent Navigation */}
        <Navbar
          activeSection={activeSection}
          onOpenConnect={() => setConnectOpen(true)}
        />

        {/* 1. Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onAboutClick={() => scrollToSection('about')}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Expertise Section ("What I Do") */}
        <Expertise />

        {/* 4. Experience Section */}
        <Experience />

        {/* 5. Selected Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Impact / Numbers Section */}
        <ImpactStats />

        {/* 7. My Approach (7-step horizontal timeline) */}
        <Approach />

        {/* 8. Insights Section (3 Editorial magazine cards) */}
        <Insights onSelectInsight={(insight) => setSelectedInsight(insight)} />

        {/* 9. Contact Section */}
        <Contact onOpenConnect={() => setConnectOpen(true)} />

        {/* 10. Footer */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <ConnectModal
        isOpen={connectOpen}
        onClose={() => setConnectOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConnect={() => {
          setSelectedProject(null);
          setConnectOpen(true);
        }}
      />

      <InsightModal
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
        onConnect={() => {
          setSelectedInsight(null);
          setConnectOpen(true);
        }}
      />
    </div>
  );
}
