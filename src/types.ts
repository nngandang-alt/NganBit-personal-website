export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  scope: string[];
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  subtitle: string;
  description: string;
  image: string;
  accentTag: string;
  challenge?: string;
  solution?: string;
  impactMetrics?: string[];
  scopeDeliverables?: string[];
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  name: string;
  headline: string;
  details: string;
}

export interface InsightItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string[];
}
