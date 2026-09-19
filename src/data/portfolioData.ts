import {
  ApproachStep,
  ExperienceItem,
  ExpertiseItem,
  InsightItem,
  NavItem,
  ProjectItem,
  StatItem,
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'ĐẶNG VŨ THÙY NGÂN',
  shortName: 'Thùy Ngân',
  monogram: 'N.',
  title: 'Internal Communication & Corporate Culture Specialist',
  positioning: 'Driving Engagement — Building Culture — Leveraging AI for Impact',
  heroHeadline: ['Building culture', 'that people feel.'],
  heroSupporting: 'Connecting people, culture & organizational goals.',
  bioSummary:
    'I’m Thùy Ngân — an Internal Communication & Corporate Culture professional turning strategy into stories, experiences and meaningful employee connections.',
  email: 'n.ngandang@gmail.com',
  linkedin: 'https://linkedin.com/in/thuyngandang',
  location: 'Ho Chi Minh City, Vietnam',
  yearsExperience: '6+',
  availabilityStatus: 'Open for Culture & Internal Comm Leadership & Advisory',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'insights', label: 'Insights', href: '#insights' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const ABOUT_DATA = {
  sectionLabel: '01 — About',
  statement:
    'Communication is not just about delivering messages. It’s about creating connection.',
  leadParagraph:
    'In organizations, authentic culture is not what leadership writes on a boardroom wall—it is what employees experience every morning, how leaders communicate in moments of change, and whether people feel seen, trusted, and inspired by a collective mission.',
  detailParagraph:
    'With more than six years leading internal communication, employer branding, and organizational culture initiatives across high-growth environments, I bridge the gap between executive strategy and employee reality. My approach integrates empathetic storytelling, human-centered event design, structured change management frameworks, and modern AI-driven communication workflows to build workplaces where people genuinely belong and thrive.',
  keyPillars: [
    {
      title: 'Empathy-First Storytelling',
      desc: 'Translating complex corporate goals into human narratives that resonate with frontline and executive teams alike.',
    },
    {
      title: 'Actionable Culture Architecture',
      desc: 'Grounding core values in concrete daily rituals, recognition frameworks, and leadership accountability.',
    },
    {
      title: 'AI & Data-Informed Impact',
      desc: 'Harnessing generative AI tools and sentiment analytics to personalize comms and measure pulse engagement.',
    },
  ],
};

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Internal Communication',
    description:
      'Designing cohesive omnichannel communication architectures (intranet, newsletters, Slack/Teams, town halls) that keep every employee aligned and informed.',
    tags: ['Omnichannel Strategy', 'Executive Messaging', 'Crisis Comms'],
  },
  {
    number: '02',
    title: 'Corporate Culture',
    description:
      'Defining, codifying, and revitalizing organizational core values into daily workplace rituals, leadership behaviors, and cultural touchpoints.',
    tags: ['Values Activation', 'Culture Audits', 'Ritual Design'],
  },
  {
    number: '03',
    title: 'Employee Engagement',
    description:
      'Building continuous feedback loops, listening tours, and pulse surveys that convert employee sentiment into targeted organizational action.',
    tags: ['Pulse Surveys', 'Engagement Campaigns', 'Recognition Systems'],
  },
  {
    number: '04',
    title: 'Employer Branding',
    description:
      'Shaping the employee value proposition (EVP) from the inside out, amplifying authentic employee voices for talent attraction and retention.',
    tags: ['EVP Development', 'Advocacy Programs', 'Talent Storytelling'],
  },
  {
    number: '05',
    title: 'Change Communication',
    description:
      'Guiding organizations through mergers, leadership transitions, organizational restructuring, and digital transformations with psychological safety.',
    tags: ['Change Enablement', 'ADKAR Framework', 'Transition Playbooks'],
  },
  {
    number: '06',
    title: 'Culture Transformation',
    description:
      'Leading systemic shifts toward transparency, psychological safety, cross-functional collaboration, and continuous learning mindsets.',
    tags: ['Culture Roadmap', 'Leadership Alignment', 'Behavioral Nudges'],
  },
  {
    number: '07',
    title: 'Employee Experience',
    description:
      'Mapping and optimizing pivotal employee journey moments—from seamless pre-boarding to career milestone celebrations and graceful alumni offboarding.',
    tags: ['Journey Mapping', 'Moments That Matter', 'Onboarding Design'],
  },
  {
    number: '08',
    title: 'Internal Events',
    description:
      'Producing high-impact all-hands townhalls, culture festivals, annual summits, and leadership retreats that energize teams and celebrate milestones.',
    tags: ['Townhall Modernization', 'Annual Summits', 'Interactive Formats'],
  },
  {
    number: '09',
    title: 'Learning & Development',
    description:
      'Co-creating culture-driven capability programs, peer-to-peer knowledge sharing forums, and leadership communication workshops.',
    tags: ['Culture Academies', 'Peer Learning', 'Manager Enablement'],
  },
  {
    number: '10',
    title: 'AI for Internal Communication',
    description:
      'Deploying generative AI workflows for rapid multi-tier content drafting, localization, employee sentiment clustering, and interactive comms assistants.',
    tags: ['Workflow Automation', 'Sentiment Clustering', 'AI Guidelines'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Forward Tech & Retail Group',
    role: 'Head of Internal Communication & Culture Transformation',
    period: '2023 — Present',
    location: 'Ho Chi Minh City',
    summary:
      'Overseeing internal communication strategy and cultural alignment for over 2,500 employees across corporate headquarters and regional operations.',
    scope: [
      'Orchestrated multi-channel employee communications spanning 4 subsidiary business units.',
      'Designed and executed executive communication playbooks for the CEO and leadership committee.',
      'Piloted the enterprise internal AI comms assistant to speed up multi-language internal updates.',
    ],
    achievements: [
      'Lifted internal communication satisfaction rate from 71% to 94% within 14 months.',
      'Pioneered interactive bi-monthly Town Halls with live anonymous Q&A, averaging 88% real-time attendance.',
      'Built a peer-to-peer recognition system resulting in 3,200+ monthly kudos across cross-functional units.',
    ],
  },
  {
    id: 'exp-2',
    company: 'Fintech Solutions APAC',
    role: 'Lead — Corporate Culture & Employee Engagement',
    period: '2021 — 2023',
    location: 'Ho Chi Minh City / Hybrid',
    summary:
      'Spearheaded corporate culture revitalization, values integration, and hybrid employee engagement during a period of rapid 120% headcount expansion.',
    scope: [
      'Redefined 5 core company values into tangible behavior rubrics integrated into quarterly reviews.',
      'Formulated the hybrid workplace culture charter and asynchronous communication standards.',
      'Authored the flagship internal magazine and bi-weekly strategic digest for engineering and business teams.',
    ],
    achievements: [
      'Maintained a voluntary turnover rate 40% below tech industry average during rapid growth.',
      'Organized the annual APAC Hybrid Culture Festival connecting 1,200+ employees across 5 countries.',
      'Won the Internal Campaign of the Year award in regional HR Excellence recognition.',
    ],
  },
  {
    id: 'exp-3',
    company: 'Omnichannel Commerce Corporation',
    role: 'Senior Internal Communications Specialist',
    period: '2019 — 2021',
    location: 'Ho Chi Minh City',
    summary:
      'Led frontline-to-HQ communications, crisis communication during COVID-19 contingencies, and employee advocacy programs.',
    scope: [
      'Established 24/7 crisis communication protocols ensuring 100% staff safety compliance.',
      'Redesigned the new hire onboarding experience, reducing time-to-culture-readiness by 35%.',
      'Developed internal brand ambassador networks across 80+ retail distribution branches.',
    ],
    achievements: [
      'Authored over 450+ high-engagement internal stories highlighting unsung frontline heroes.',
      'Surpassed internal newsletter open rates to a sustained 82% benchmark (industry avg: 45%).',
      'Coordinated company-wide digital transformation change communications across legacy teams.',
    ],
  },
  {
    id: 'exp-4',
    company: 'Global Brand & Communications Agency',
    role: 'Corporate Communications & Culture Consultant',
    period: '2018 — 2019',
    location: 'Vietnam',
    summary:
      'Advised multinational clients on employer branding narratives, internal brand launches, and executive visibility campaigns.',
    scope: [
      'Conducted organizational culture discovery audits and focus groups for Fortune 500 branch clients.',
      'Crafted employer brand identity guidelines and employee video portrait series.',
    ],
    achievements: [
      'Delivered 12 comprehensive internal culture audits with 95% stakeholder alignment score.',
      'Created content strategy for high-profile talent recruitment and corporate responsibility reports.',
    ],
  },
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Values in Action: 360° Culture Transformation',
    category: 'Culture Transformation',
    year: '2024',
    subtitle: 'From Abstract Words to Daily Workplace Habits',
    description:
      'A comprehensive overhaul turning corporate values from poster slogans into daily observable behaviors, manager feedback toolkits, and recognition rituals across 2,500+ employees.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    accentTag: 'Company-wide Impact',
    challenge:
      'Following rapid expansion, internal survey data revealed that 64% of employees could not articulate company values, and cross-departmental silos were stifling collaboration.',
    solution:
      'Conducted 30+ empathy focus groups, codified values into observable daily habits, launched a peer recognition currency, and empowered 120 people managers with weekly micro-actions.',
    impactMetrics: [
      '92% values comprehension achieved across all business units',
      '38% reduction in cross-departmental escalations',
      '+24pt increase in company eNPS in 9 months',
    ],
    scopeDeliverables: [
      'Culture Codebook & Interactive Digital Playbook',
      'Manager Toolkit: Micro-Habits for 1-on-1s',
      'Peer-to-Peer Recognition Platform Integration',
    ],
  },
  {
    id: 'proj-2',
    title: 'Pulse & Connect: Re-architecting All-Hands',
    category: 'Internal Events & Townhalls',
    year: '2024',
    subtitle: 'Transforming Broadcast Meetings into Two-Way Community Dialogues',
    description:
      'Redesigned the quarterly corporate townhall from a monotonous one-way slide readout into an interactive, high-energy hybrid gathering featuring unscripted executive Q&A.',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    accentTag: 'Hybrid Engagement',
    challenge:
      'Townhall attendance had dropped to 42%, with survey feedback describing the events as "dry, repetitive, and disconnected from real employee concerns."',
    solution:
      'Introduced dynamic 45-minute live formats, interactive live voting, unscripted "Ask the Leadership Anything" segments, and employee spotlight stories produced in documentary style.',
    impactMetrics: [
      '89% sustained live attendance across global and regional teams',
      '96% positive feedback rating on transparency and relevance',
      'Over 200+ real-time anonymous questions answered directly by C-suite',
    ],
    scopeDeliverables: [
      'Hybrid Production Staging & Rundown Architecture',
      'Live Sentiment & Anonymous Question Moderation',
      'Post-Townhall Key Takeaways In 90 Seconds Video Digest',
    ],
  },
  {
    id: 'proj-3',
    title: 'AI Communicator: Content Multiplier & Sentiment Engine',
    category: 'AI × Internal Communication',
    year: '2023 — 2024',
    subtitle: 'Leveraging Generative Workflows for Personalized Internal Messaging',
    description:
      'Pioneered internal communication AI workflows to draft customized updates for diverse team personas, summarize employee feedback themes, and automate crisis communication alerts.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    accentTag: 'Innovation & Productivity',
    challenge:
      'The internal comms team was overwhelmed with manual message variations across technical, frontline, and corporate audiences, slowing down critical operational updates.',
    solution:
      'Architected prompt libraries tailored to brand voice guidelines, created automated sentiment clustering from pulse surveys, and implemented multi-lingual localization workflows.',
    impactMetrics: [
      '60% reduction in campaign turnaround time',
      '100% compliance with corporate tone of voice and sensitivity standards',
      'Personalized tone variants delivered for engineering, sales, and retail teams',
    ],
    scopeDeliverables: [
      'Enterprise Generative Internal Comms Prompt System',
      'Employee Sentiment Clustering Dashboard',
      'Responsible AI Communication Guidelines & Training',
    ],
  },
  {
    id: 'proj-4',
    title: 'The First 90 Days: Humanized Onboarding Journey',
    category: 'Employee Experience & Employer Branding',
    year: '2023',
    subtitle: 'From Paperwork to Cultural Immersion',
    description:
      'Reimagined the new hire journey into a warm, inspiring 90-day experience blending culture buddy systems, founder video welcomes, and experiential milestones.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    accentTag: 'Retention & EVP',
    challenge:
      'Early 90-day turnover hovered at 14%, with newcomers reporting feeling overwhelmed by fragmented tools and lacking cultural clarity.',
    solution:
      'Designed a phased roadmap: Day 1 (Belonging), Day 30 (Clarity), Day 60 (Connection), Day 90 (Impact). Paired every newcomer with a cross-functional Culture Buddy.',
    impactMetrics: [
      'Early turnover dropped by 55% in the first cohort year',
      '98% of new hires rated their onboarding experience 5/5 stars',
      'Time-to-productivity accelerated by 2.5 weeks',
    ],
    scopeDeliverables: [
      'Welcome Kit & Interactive Culture Passport',
      'Manager Onboarding Playbook & Checklists',
      'Automated Day-to-Day Journey Emails & Check-ins',
    ],
  },
];

export const IMPACT_STATS: StatItem[] = [
  {
    value: '6+',
    label: 'Years in Internal Communication & Culture',
    description: 'Transforming organizational narratives and employee morale.',
  },
  {
    value: '90%+',
    label: 'Employee Engagement / Culture Understanding',
    description: 'Consistent benchmark achieved across all led programs.',
  },
  {
    value: '100+',
    label: 'Internal Programs & Experiences',
    description: 'Executed across townhalls, campaigns, and summits.',
  },
  {
    value: 'Multiple',
    label: 'Industries & Organizations',
    description: 'Impact spanning Fintech, Omnichannel Retail, and Tech.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    name: 'Listen',
    headline: 'Hearing the Unspoken',
    details:
      'Conducting empathy interviews, listening tours, and pulse audits to uncover genuine employee sentiment before drafting a single word.',
  },
  {
    number: '02',
    name: 'Understand',
    headline: 'Diagnosing Context',
    details:
      'Mapping business priorities against employee realities, identifying communication bottlenecks and cultural disconnects.',
  },
  {
    number: '03',
    name: 'Strategize',
    headline: 'Designing the Narrative',
    details:
      'Formulating the narrative architecture, communication cadences, executive talking points, and tailored channel strategies.',
  },
  {
    number: '04',
    name: 'Create',
    headline: 'Crafting the Content',
    details:
      'Producing human-centric stories, high-impact visuals, and actionable leader toolkits that resonate emotionally and intellectually.',
  },
  {
    number: '05',
    name: 'Engage',
    headline: 'Activating Experience',
    details:
      'Launching multi-touchpoint campaigns, townhalls, and experiential rituals that encourage two-way dialogue rather than top-down lectures.',
  },
  {
    number: '06',
    name: 'Measure',
    headline: 'Tracking Sentiment & Reach',
    details:
      'Evaluating real-time engagement data, open rates, townhall sentiment scores, and behavioral indicators against strategic goals.',
  },
  {
    number: '07',
    name: 'Improve',
    headline: 'Iterating for Longevity',
    details:
      'Embedding feedback into continuous communication loops, refining frameworks so organizational culture sustains itself organically.',
  },
];

export const INSIGHT_ITEMS: InsightItem[] = [
  {
    id: 'insight-1',
    title: 'The Quiet Crisis of Employee Disconnect: Why Messaging Isn’t Culture',
    category: 'Corporate Culture',
    readTime: '5 min read',
    date: 'Autumn 2024',
    summary:
      'Too many leaders confuse sending company-wide emails with building culture. Why true cultural resonance happens in the micro-moments between meetings.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    content: [
      'In an era dominated by instant messaging and hybrid schedules, organizations produce more words than ever—yet employees frequently report feeling less connected to organizational purpose.',
      'The mistake lies in treating communication as an broadcast pipeline rather than a social fabric. When leaders merely broadcast announcements, employees receive information; when leaders invite co-creation, vulnerability, and feedback, employees feel ownership.',
      'To bridge this gap, organizations must transition from informational updates to experiential touchpoints. Culture lives in how mistakes are handled, how praise is shared publicly, and how decisions are contextualized for those doing the work.',
    ],
  },
  {
    id: 'insight-2',
    title: 'AI as a Culture Amplifier: Practical Workflows for Modern Communicators',
    category: 'AI in Communication',
    readTime: '6 min read',
    date: 'Winter 2024',
    summary:
      'How internal communicators can leverage generative AI not to replace empathy, but to eliminate administrative drag and personalize messages at scale.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    content: [
      'The rapid emergence of generative AI provoked valid anxiety: will automated communication strip the human heart out of workplace dialogue? The answer depends entirely on how communicators wield the tool.',
      'When used strategically, AI becomes a force multiplier for empathy. Instead of spending 12 hours formatting weekly newsletters and manually segmenting distribution lists, communicators can use custom AI assistants to test tone variations for different employee cohorts.',
      'Furthermore, natural language processing enables real-time thematic clustering of anonymous town hall questions—allowing executives to address the root causes of employee anxiety rather than cherry-picking easy questions.',
    ],
  },
  {
    id: 'insight-3',
    title: 'Designing Town Halls Employees Actually Look Forward To',
    category: 'Employee Engagement',
    readTime: '4 min read',
    date: 'Late 2024',
    summary:
      'Step-by-step principles for transforming formal quarterly broadcasts into authentic, dynamic, and community-driven hybrid experiences.',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',
    content: [
      'The death of an all-hands meeting is death by 60 slides. When an executive stands at a podium and reads bullet points that could have been summarized in a two-minute memo, attendance drops and resentment rises.',
      'A memorable town hall follows the dramatic arc of a conversation: 20% high-level vision and celebrating human impact, 30% addressing tough organizational challenges with transparent vulnerability, and 50% open dialogue.',
      'By introducing real-time anonymous upvoting, informal employee spotlight interviews, and actionable takeaways delivered within minutes of the wrap, townhalls shift from mandatory chores to anticipated milestones.',
    ],
  },
];
