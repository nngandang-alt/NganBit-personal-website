export type Language = 'vi' | 'en';

export interface NavItem {
  id: string;
  label: { vi: string; en: string };
  href: string;
}

export interface PortfolioImage {
  src: string | null;
  alt: { vi: string; en: string };
  caption?: { vi: string; en: string };
  category: 'portrait' | 'case-cover' | 'event' | 'material' | 'framework' | 'report';
  recommendedRatio: '4:5' | '16:9' | '4:3' | 'original';
  placeholderHint: { vi: string; en: string };
}

export interface CareerChapter {
  id: string;
  number: string;
  period: string;
  title: { vi: string; en: string };
  tagline: { vi: string; en: string };
  story: { vi: string; en: string };
  coreShift: {
    from: { vi: string; en: string };
    to: { vi: string; en: string };
  };
  keyRealization: { vi: string; en: string };
  toolkit: string[];
  contextHighlight?: { vi: string; en: string };
}

export interface ExperienceRole {
  id: string;
  officialTitle: { vi: string; en: string };
  company: string;
  period: string;
  location: string;
  workType?: string;
  mandateScope: { vi: string[]; en: string[] };
  actualScopeNote?: { vi: string; en: string };
  leadershipScope?: { vi: string; en: string };
  selectedImpact: { vi: string[]; en: string[] };
  relatedCaseId?: string;
}

export interface CaseStudy {
  id: string;
  title: { vi: string; en: string };
  subtitle: { vi: string; en: string };
  organization: string;
  year: string;
  category: { vi: string; en: string };
  coverImage: PortfolioImage;
  accentBadge: { vi: string; en: string };
  
  // Flexible evidence-based structure
  context: { vi: string; en: string };
  challenge: { vi: string; en: string };
  insight?: { vi: string; en: string };
  myRole: { vi: string; en: string };
  stakeholders?: { vi: string; en: string };
  approach: { vi: string; en: string };
  systemFramework?: { vi: string; en: string };
  execution?: { vi: string[]; en: string[] };
  measurement?: { vi: string[]; en: string[] };
  impact: { vi: string[]; en: string[] };
  learning?: { vi: string; en: string };
  visualEvidence?: PortfolioImage[];
}

export interface PhilosophyPillar {
  title: { vi: string; en: string };
  desc: { vi: string; en: string };
}

export interface MethodologyStep {
  number: string;
  name: { vi: string; en: string };
  headline: { vi: string; en: string };
  details: { vi: string; en: string };
  deliverable?: { vi: string; en: string };
}

export interface VerifiedStat {
  value: string;
  label: { vi: string; en: string };
  context: { vi: string; en: string };
}

export interface EducationItem {
  degree: { vi: string; en: string };
  field: { vi: string; en: string };
  institution: { vi: string; en: string };
  period: string;
  note?: { vi: string; en: string };
}

export interface CertificationItem {
  title: { vi: string; en: string };
  issuer: string;
  year?: string;
  domain: 'AI' | 'Leadership' | 'Culture & Comms' | 'People & Experience';
  status: 'verified' | 'pending-confirmation';
}
