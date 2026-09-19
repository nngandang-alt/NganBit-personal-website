import {
  CareerChapter,
  CaseStudy,
  CertificationItem,
  EducationItem,
  ExperienceRole,
  MethodologyStep,
  NavItem,
  PhilosophyPillar,
  VerifiedStat,
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'ĐẶNG VŨ THÙY NGÂN',
  identity: 'NGÂN BIT',
  shortName: 'Thùy Ngân',
  monogram: 'NB',
  domains: {
    vi: 'Internal Communication · Corporate Culture · Employee Engagement · Employee Experience',
    en: 'Internal Communication · Corporate Culture · Employee Engagement · Employee Experience',
  },
  tagline: {
    vi: 'Thúc đẩy gắn kết. Kiến tạo văn hóa. Khai phóng sức mạnh cùng AI.',
    en: 'Driving Engagement. Building Culture. Leveraging AI for Impact.',
  },
  corePositioning: {
    vi: 'Tôi kết nối con người với mục tiêu tổ chức thông qua truyền thông, văn hóa và những trải nghiệm ý nghĩa.',
    en: 'I connect people with organizational goals through communication, culture and meaningful experiences.',
  },
  heroHeadline: {
    vi: ['Kiến tạo văn hóa', 'chạm đến cảm xúc.'],
    en: ['Building culture', 'that people feel.'],
  },
  aiPhilosophy: {
    vi: 'Lấy sự thấu hiểu con người làm trọng tâm. Khai phóng hiệu quả cùng AI.',
    en: 'Human Insight First. AI Amplified.',
  },
  bioSummary: {
    vi: 'Tôi là Thùy Ngân (Ngân Bit) — chuyên gia kết nối con người và văn hóa tổ chức. Tôi chuyển hóa chiến lược thành những câu chuyện sống động, quy chuẩn hành vi rõ ràng và những trải nghiệm nhân sự có chiều sâu.',
    en: 'I’m Thùy Ngân (Ngân Bit) — an organizational culture & communication professional bridging executive strategy with human reality through authentic storytelling, experiential design, and system-level alignment.',
  },
  email: 'n.ngandang@gmail.com',
  linkedin: 'https://linkedin.com/in/thuyngandang',
  zalo: 'https://zalo.me/0909000000', // Đang chờ link chính thức từ user trong CONTENT_GAPS.md
  location: 'Ho Chi Minh City, Vietnam',
  yearsExperience: '6+',
  availabilityStatus: {
    vi: 'Sẵn sàng trao đổi về Văn hóa, Truyền thông nội bộ & Thiết kế trải nghiệm',
    en: 'Open for Culture, Internal Comms & Experience Architecture Conversations',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'story', label: { vi: 'Hành trình', en: 'Career Story' }, href: '#story' },
  { id: 'philosophy', label: { vi: 'Triết lý', en: 'Philosophy' }, href: '#philosophy' },
  { id: 'experience', label: { vi: 'Kinh nghiệm', en: 'Experience' }, href: '#experience' },
  { id: 'cases', label: { vi: 'Case Studies', en: 'Case Studies' }, href: '#cases' },
  { id: 'methodology', label: { vi: 'Phương pháp', en: 'How I Work' }, href: '#methodology' },
  { id: 'credentials', label: { vi: 'Nền tảng', en: 'Credentials' }, href: '#credentials' },
  { id: 'connect', label: { vi: 'Kết nối', en: 'Connect' }, href: '#connect' },
];

export const CAREER_CHAPTERS: CareerChapter[] = [
  {
    id: 'ch-01',
    number: '01',
    period: 'Early Career',
    title: {
      vi: 'Học cách kết nối',
      en: 'Learning to Connect',
    },
    tagline: {
      vi: 'Khởi đầu từ truyền thông, thấu cảm và sự gắn kết cộng đồng',
      en: 'Starting from communication, storytelling and human participation',
    },
    story: {
      vi: 'Tôi bắt đầu hành trình từ những công việc truyền thông, nội dung và kết nối cộng đồng tại môi trường giáo dục (FPT University). Đây là giai đoạn tôi học cách quan sát tâm lý số đông, rèn luyện nghệ thuật kể chuyện chân thực và nhận ra rằng: thông tin chỉ thực sự có giá trị khi nó khơi gợi được sự tham gia và tạo nên trải nghiệm thuộc về.',
      en: 'My professional journey began with communication, community engagement, and student connection in higher education. During this formative phase, I learned the craft of empathetic storytelling, crowd resonance, and realized that communication is not just about sending messages—it is about creating shared participation.',
    },
    coreShift: {
      from: { vi: 'Truyền phát thông tin một chiều', en: 'Broadcasting messages' },
      to: { vi: 'Tạo dựng sự gắn kết & trải nghiệm', en: 'Creating connection & belonging' },
    },
    keyRealization: {
      vi: 'Truyền thông không phải là gửi đi thông cáo, mà là cách chúng ta tạo ra sự hiện diện và lắng nghe.',
      en: 'Communication is not just delivering announcements; it is about cultivating presence, trust, and active listening.',
    },
    toolkit: ['Storytelling', 'Internal Communications', 'Community Engagement', 'Event Activation'],
    contextHighlight: { vi: 'Môi trường giáo dục & gắn kết cộng đồng', en: 'Higher Education & Community Building' },
  },
  {
    id: 'ch-02',
    number: '02',
    period: 'Vua Nệm → Savvycom',
    title: {
      vi: 'Từ truyền thông đến văn hóa',
      en: 'From Communication to Culture',
    },
    tagline: {
      vi: 'Câu hỏi mở rộng: "Làm sao để con người thực sự sống cùng văn hóa?"',
      en: 'How do we communicate? → How do people understand, experience and live the culture?',
    },
    story: {
      vi: 'Bước vào môi trường bán lẻ quy mô phân tán (Vua Nệm) và công ty công nghệ đa văn hóa (Savvycom), câu hỏi nghề nghiệp của tôi mở rộng: Không chỉ là "Chúng ta truyền thông điều gì?", mà là "Nhân viên cảm nhận văn hóa như thế nào giữa các điểm chạm mỗi ngày?". Tôi phát triển sâu vào Truyền thông nội bộ, Kích hoạt văn hóa, Trải nghiệm nhân viên (EX) và Thương hiệu tuyển dụng (EVP).',
      en: 'Stepping into retail distribution (Vua Nệm) and dynamic technology consulting (Savvycom), my core question evolved from “What do we communicate?” to “How do people understand, experience, and truly live the culture?”. I broadened my scope across Internal Comms, Culture Activation, Employee Engagement, and EVP.',
    },
    coreShift: {
      from: { vi: 'Communication as Output (Sản phẩm truyền thông)', en: 'Communication as Output' },
      to: { vi: 'Communication as Experience & Culture (Trải nghiệm & Văn hóa)', en: 'Communication as Experience & Culture' },
    },
    keyRealization: {
      vi: 'Văn hóa không phải khẩu hiệu trên tường phòng họp; văn hóa là những gì nhân viên trải qua vào mỗi sáng thứ Hai.',
      en: 'Authentic culture is not what leadership writes on a boardroom wall—it is what employees feel and experience every single day.',
    },
    toolkit: ['Culture Activation', 'Employee Experience (EX)', 'EVP & Employer Branding', 'All-Hands Modernization'],
    contextHighlight: { vi: 'Quy mô bán lẻ toàn quốc & Công nghệ IT Outsourcing', en: 'Omnichannel Retail & Tech Hybrid Operations' },
  },
  {
    id: 'ch-03',
    number: '03',
    period: 'transcosmos Vietnam',
    title: {
      vi: 'Xây dựng hệ thống vận hành văn hóa',
      en: 'Building the System Behind Culture',
    },
    tagline: {
      vi: 'Chuyển hóa từ thực thi truyền thông sang tư duy hệ thống tổ chức',
      en: 'Communication Execution → System Thinking',
    },
    story: {
      vi: 'Đảm nhiệm vai trò Phát triển Tổ chức (Organizational Development) tại transcosmos Vietnam. Đây là bước ngoặt quan trọng khi tôi không còn nhìn văn hóa qua từng chiến dịch ngắn hạn, mà nhìn qua lăng kính hệ thống: Bộ Giá trị cốt lõi (Values), Chuẩn mực hành vi quan sát được (Behaviors), Sự đồng thuận của dàn lãnh đạo (Leadership Alignment) và Cơ chế đo lường.',
      en: 'Serving in Organizational Development at transcosmos Vietnam marked a pivotal elevation to systems thinking. Culture was no longer viewed through standalone campaigns, but through systemic architecture: Core Values, Observable Behaviors, Leadership Alignment, and Employee Experience frameworks.',
    },
    coreShift: {
      from: { vi: 'Triển khai chiến dịch truyền thông', en: 'Standalone campaign execution' },
      to: { vi: 'Tư duy hệ thống & Chuẩn hóa hành vi tổ chức', en: 'Systemic frameworks & behavioral codification' },
    },
    keyRealization: {
      vi: 'Văn hóa chỉ có thể chuyển biến khi giá trị tinh thần được chuyển hóa thành những hành vi cụ thể, lặp lại hàng ngày.',
      en: 'Culture only transforms when abstract values are translated into concrete, repeatable, daily workplace behaviors.',
    },
    toolkit: ['Organizational Development', 'Behavioral Rubrics', 'Values Codification', 'Leadership Alignment'],
    contextHighlight: { vi: 'Official Title: Organizational Development', en: 'Official Title: Organizational Development' },
  },
  {
    id: 'ch-04',
    number: '04',
    period: '2025',
    title: {
      vi: 'Bước ngoặt quay về',
      en: 'A Career Plot Twist',
    },
    tagline: {
      vi: 'Trở lại nơi bắt đầu — nhưng với một bộ công cụ hoàn toàn mới',
      en: 'I came back to where my career started — with a completely different toolkit',
    },
    story: {
      vi: 'Năm 2025, tôi quay trở lại FPT University — lĩnh vực giáo dục nơi tôi từng chập chững bước vào nghề — sau nhiều năm tôi luyện bản lĩnh tại các doanh nghiệp. Đây không phải một bước lùi hay "reset" sự nghiệp, mà là sự trở về với một bộ công cụ trưởng thành: Truyền thông chiến lược, Văn hóa, Thiết kế trải nghiệm, Quản trị các bên liên quan và Phát triển con người.',
      en: 'In 2025, I returned to FPT University—the educational environment where my journey originally began—after years of building my identity in corporate culture. This was not a career reset, but a return with an expanded, mature toolkit: Strategic Comms, Culture, Experience Design, Stakeholder Management, and People Development.',
    },
    coreShift: {
      from: { vi: 'Thực thi trong bối cảnh doanh nghiệp truyền thống', en: 'Standard corporate context' },
      to: { vi: 'Ứng dụng năng lực transferable vào hệ sinh thái giáo dục', en: 'Applying transferable culture & EX toolkits to education' },
    },
    keyRealization: {
      vi: 'Trải nghiệm sinh viên hay trải nghiệm nhân viên đều có chung gốc rễ: nhu cầu được thấu hiểu, được gắn kết và có môi trường để tỏa sáng.',
      en: 'Student Experience and Employee Experience share the same human core: the fundamental need to feel seen, valued, and empowered.',
    },
    toolkit: ['Experience Architecture', 'Transferable EX/Culture Toolkits', 'Stakeholder Management', 'Program Leadership'],
    contextHighlight: { vi: 'Sự giao thoa giữa EX và Student Experience', en: 'Bridging Corporate EX into Educational Communities' },
  },
  {
    id: 'ch-05',
    number: '05',
    period: 'Present',
    title: {
      vi: 'Từ người kiến tạo đến người dẫn dắt',
      en: 'From Creating Experiences to Leading Them',
    },
    tagline: {
      vi: 'Dẫn dắt hệ sinh thái trải nghiệm, phát triển đội ngũ và ứng dụng AI',
      en: 'From operational delivery to systemic leadership & AI-enabled scale',
    },
    story: {
      vi: 'Tại FPT University, tôi thăng tiến từ vị trí Chuyên viên (Student Relations Officer) lên Trưởng phòng Quan hệ Doanh nghiệp & Sinh viên (Head of Student Relations Office). Ở vị trí này, tôi chịu trách nhiệm thiết kế và dẫn dắt các chương trình trải nghiệm quy mô lớn (tiêu biểu như TechX Camp), điều phối mạng lưới đối tác đa dạng, phát triển đội ngũ và ứng dụng AI vào quy trình phân tích, tổng hợp thông tin.',
      en: 'Advancing from Student Relations Officer to Head of Student Relations Office at FPT University, my focus expanded to leading high-impact experiential ecosystems (such as TechX Camp), coordinating complex stakeholder networks, mentoring teams, and embedding AI-assisted workflows for data synthesis and agile communication.',
    },
    coreShift: {
      from: { vi: 'Tự tay kiến tạo từng trải nghiệm nhỏ', en: 'Individual experiential delivery' },
      to: { vi: 'Dẫn dắt hệ thống trải nghiệm, lãnh đạo đội ngũ & đòn bẩy AI', en: 'Ecosystem leadership, team empowerment & AI leverage' },
    },
    keyRealization: {
      vi: 'Vai trò của người dẫn dắt là tạo ra một sân khấu nơi mọi thành viên đều có thể tự tin kiến tạo giá trị tốt nhất của mình.',
      en: 'True leadership is building the stage and psychological safety so every team member can deliver their highest impact.',
    },
    toolkit: ['Program Leadership', 'Complex Stakeholder Alignment', 'AI-Amplified Workflows', 'Experiential Immersion'],
    contextHighlight: { vi: 'Official Title: Head of Student Relations Office', en: 'Official Title: Head of Student Relations Office' },
  },
];

export const PHILOSOPHY_CHAIN = [
  { step: '01', name: { vi: 'Communication', en: 'Communication' }, desc: { vi: 'Truyền đạt rõ ràng & cởi mở', en: 'Clear & authentic dialogue' } },
  { step: '02', name: { vi: 'Understanding', en: 'Understanding' }, desc: { vi: 'Thấu hiểu bối cảnh & lắng nghe', en: 'Contextual empathy & listening' } },
  { step: '03', name: { vi: 'Trust', en: 'Trust' }, desc: { vi: 'Xây dựng sự an toàn tâm lý', en: 'Psychological safety & integrity' } },
  { step: '04', name: { vi: 'Connection', en: 'Connection' }, desc: { vi: 'Cảm giác thuộc về tập thể', en: 'Belonging & shared identity' } },
  { step: '05', name: { vi: 'Alignment', en: 'Alignment' }, desc: { vi: 'Đồng thuận mục tiêu chiến lược', en: 'Strategic clarity & ownership' } },
  { step: '06', name: { vi: 'Action', en: 'Action' }, desc: { vi: 'Hành động cụ thể mỗi ngày', en: 'Observable daily behavior' } },
  { step: '07', name: { vi: 'Culture', en: 'Culture' }, desc: { vi: 'Văn hóa sống động & bền vững', en: 'Living, breathing culture' } },
];

export const PHILOSOPHY_QUESTIONS = [
  {
    q: {
      vi: '“Con người thực sự trải nghiệm điều gì tại đây?”',
      en: '“What did people genuinely experience?”',
    },
    detail: {
      vi: 'Không chỉ dừng lại ở danh sách việc cần hoàn thành (What we deliver), mà là chất lượng của từng điểm chạm tương tác trong tổ chức.',
      en: 'Beyond task deliverables, examining the experiential quality of human touchpoints across the organization.',
    },
  },
  {
    q: {
      vi: '“Họ cảm thấy thế nào trong khoảnh khắc đó?”',
      en: '“How did they honestly feel?”',
    },
    detail: {
      vi: 'Cảm xúc quyết định sự gắn kết. Khi nhân sự cảm thấy được tôn trọng, được tin tưởng, họ sẽ tự nguyện cống hiến hết tiềm năng.',
      en: 'Emotion governs commitment. When employees feel seen, respected and trusted, dedication becomes intrinsic.',
    },
  },
  {
    q: {
      vi: '“Điều gì đã thực sự chuyển hóa sau đó?”',
      en: '“What measurably changed afterwards?”',
    },
    detail: {
      vi: 'Một chiến dịch thành công không kết thúc khi sự kiện hạ màn, mà bắt đầu từ những thay đổi tích cực trong thói quen và sự cộng tác.',
      en: 'Success is not a finished event; it is the lasting shift in collaborative habits, morale, and organizational resilience.',
    },
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: {
      vi: 'Truyền thông dựa trên sự thấu cảm',
      en: 'Empathy-First Communication',
    },
    desc: {
      vi: 'Chuyển hóa chiến lược trừu tượng của ban điều hành thành những thông điệp gần gũi, tôn trọng và khơi gợi cảm hứng hành động.',
      en: 'Translating executive strategy into human narratives that resonate with frontline and leadership teams alike.',
    },
  },
  {
    title: {
      vi: 'Văn hóa được bảo chứng bằng hệ thống',
      en: 'Culture Backed by Systems',
    },
    desc: {
      vi: 'Đưa giá trị cốt lõi vào nghi thức làm việc, khung đánh giá hành vi và sự gương mẫu của đội ngũ lãnh đạo thay vì để trên giấy tờ.',
      en: 'Grounding core values in concrete daily rituals, behavioral rubrics, and leadership accountability.',
    },
  },
  {
    title: {
      vi: 'AI mở rộng năng lực, con người giữ bản sắc',
      en: 'Human Insight First, AI Amplified',
    },
    desc: {
      vi: 'Sử dụng AI như trợ thủ đắc lực trong phân tích xu hướng, tối ưu quy trình và sáng tạo nội dung, trong khi trái tim của thông điệp luôn thuộc về con người.',
      en: 'Harnessing AI to eliminate operational friction and synthesize insights, while human empathy guides every strategic intent.',
    },
  },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    id: 'exp-fpt-head',
    officialTitle: {
      vi: 'Head of Student Relations Office',
      en: 'Head of Student Relations Office',
    },
    company: 'FPT University',
    period: '2025 — Present',
    location: 'Ho Chi Minh City',
    workType: 'Full-time',
    mandateScope: {
      vi: [
        'Dẫn dắt và quản lý toàn diện Phòng Quan hệ Doanh nghiệp & Sinh viên, chịu trách nhiệm thiết kế trải nghiệm, gắn kết cộng đồng sinh viên và đối tác doanh nghiệp.',
        'Trực tiếp chỉ đạo và điều phối các chương trình trải nghiệm quy mô lớn như TechX Camp, kết nối đa bên giữa nhà trường, sinh viên và doanh nghiệp công nghệ.',
        'Ứng dụng tư duy trải nghiệm (Experience Design) và các công cụ AI hỗ trợ để nâng cao chất lượng dịch vụ sinh viên và hiệu suất công việc của phòng ban.',
      ],
      en: [
        'Leading the Student Relations Office, responsible for holistic student experience design, community belonging, and corporate engagement partnerships.',
        'Directing high-impact immersive programs including TechX Camp, coordinating cross-sector collaboration between university, student body, and industry.',
        'Applying corporate Experience Design (EX) toolkits and AI-assisted workflows to modernize student relations and operational efficiency.',
      ],
    },
    actualScopeNote: {
      vi: 'Mở rộng từ Student Relations Officer lên Head of Office — dẫn dắt chiến lược trải nghiệm, phát triển đội ngũ và kết nối hệ sinh thái đa bên.',
      en: 'Advanced from Officer to Head of Office — leading experiential strategy, team mentorship, and multi-stakeholder ecosystem alignment.',
    },
    leadershipScope: {
      vi: 'Dẫn dắt đội ngũ nhân sự phòng ban, chỉ đạo các dự án trọng điểm và điều phối các đơn vị đối tác liên quan.',
      en: 'Leading department members, overseeing flagship initiatives, and directing cross-departmental coordination.',
    },
    selectedImpact: {
      vi: [
        'Tái cấu trúc các chuỗi hoạt động sinh viên từ sự kiện đơn lẻ thành hệ sinh thái trải nghiệm có lộ trình và đo lường sự hài lòng.',
        'Triển khai thành công chuỗi sự kiện TechX Camp, tạo dấu ấn gắn kết cộng đồng sinh viên và doanh nghiệp.',
      ],
      en: [
        'Restructured student initiatives from standalone events into holistic experiential ecosystems with measurable engagement.',
        'Successfully delivered TechX Camp, strengthening community pride and university-industry connectivity.',
      ],
    },
    relatedCaseId: 'case-techx',
  },
  {
    id: 'exp-transcosmos',
    officialTitle: {
      vi: 'Organizational Development',
      en: 'Organizational Development',
    },
    company: 'transcosmos Vietnam',
    period: 'Giai đoạn OD',
    location: 'Ho Chi Minh City',
    mandateScope: {
      vi: [
        'Đảm nhiệm công tác Phát triển Tổ chức (Organizational Development): chuẩn hóa các giá trị cốt lõi và hành vi chuẩn mực của nhân sự.',
        'Tham gia thiết kế và thúc đẩy các chương trình gắn kết văn hóa, nâng cao sự thấu hiểu mục tiêu chung giữa các bộ phận.',
        'Hỗ trợ ban lãnh đạo trong việc truyền thông định hướng chiến lược và xây dựng môi trường làm việc minh bạch, gắn bó.',
      ],
      en: [
        'Spearheaded Organizational Development initiatives: aligning organizational core values with observable behavioral benchmarks.',
        'Designed culture engagement programs to strengthen cross-functional collaboration and strategic alignment.',
        'Facilitated executive leadership communications to nurture workplace transparency and employee belonging.',
      ],
    },
    actualScopeNote: {
      vi: 'Official title: Organizational Development. Thể hiện bước chuyển mình then chốt từ thực thi truyền thông sang tư duy hệ thống và chuẩn hóa hành vi tổ chức.',
      en: 'Official title: Organizational Development. Marked the pivotal shift from comms execution to organizational systems thinking.',
    },
    selectedImpact: {
      vi: [
        'Góp phần chuyển hóa các giá trị doanh nghiệp thành các chỉ dẫn hành vi dễ hiểu, áp dụng vào công việc hàng ngày.',
        'Nâng cao mức độ gắn kết và đồng thuận của nhân sự với định hướng phát triển của công ty.',
      ],
      en: [
        'Codified corporate values into accessible daily behavioral rubrics across operational units.',
        'Enhanced workforce cohesion and alignment with company-wide strategic trajectories.',
      ],
    },
    relatedCaseId: 'case-values',
  },
  {
    id: 'exp-savvycom',
    officialTitle: {
      vi: 'People & Culture / Internal Communication',
      en: 'People & Culture / Internal Communication',
    },
    company: 'Savvycom',
    period: 'Giai đoạn Tech Culture',
    location: 'Ho Chi Minh City / Hybrid',
    mandateScope: {
      vi: [
        'Quản trị truyền thông nội bộ và kích hoạt văn hóa doanh nghiệp trong môi trường công ty công nghệ phát triển năng động.',
        'Xây dựng các kênh đối thoại mở, kết nối nhân sự kỹ thuật số và đội ngũ kinh doanh trong mô hình làm việc linh hoạt (hybrid).',
        'Phát triển nội dung thương hiệu nhà tuyển dụng (EVP & Employer Branding), tôn vinh câu chuyện của nhân sự nổi bật.',
      ],
      en: [
        'Orchestrated internal communications and culture activation in an agile, fast-paced technology environment.',
        'Built two-way dialogue channels connecting distributed engineering and business teams in hybrid workflows.',
        'Developed authentic employer value proposition (EVP) content, highlighting staff growth and engineering stories.',
      ],
    },
    selectedImpact: {
      vi: [
        'Duy trì tinh thần gắn kết và sự thấu cảm giữa các nhóm dự án công nghệ làm việc linh hoạt.',
        'Nâng cao tỷ lệ tham gia và mức độ hài lòng của nhân viên qua các bản tin và hoạt động all-hands tương tác.',
      ],
      en: [
        'Fostered cross-functional empathy and community cohesion across hybrid technical project teams.',
        'Elevated voluntary engagement rates across all-hands forums and internal cultural publications.',
      ],
    },
    relatedCaseId: 'case-hybrid',
  },
  {
    id: 'exp-vuanem',
    officialTitle: {
      vi: 'Internal Communication & Culture Activation',
      en: 'Internal Communication & Culture Activation',
    },
    company: 'Vua Nệm',
    period: 'Giai đoạn Retail Growth',
    location: 'Ho Chi Minh City',
    mandateScope: {
      vi: [
        'Phụ trách truyền thông nội bộ kết nối giữa khối Văn phòng hội sở và hàng trăm nhân sự tại hệ thống cửa hàng bán lẻ trên toàn quốc.',
        'Thiết kế và duy trì các nghi thức văn hóa, phong trào thi đua nội bộ và hoạt động tri ân nhân sự tuyến đầu.',
        'Đảm bảo thông tin chiến lược kinh doanh được giải thích mạch lạc, gần gũi đến từng nhân viên bán hàng.',
      ],
      en: [
        'Led frontline-to-HQ internal communication, bridging corporate headquarters with nationwide retail showroom teams.',
        'Designed workplace rituals, recognition campaigns, and engagement activities honoring frontline retail champions.',
        'Ensured commercial strategies were translated into clear, inspiring messages for store-level execution.',
      ],
    },
    selectedImpact: {
      vi: [
        'Rút ngắn khoảng cách thông tin giữa hội sở và các chi nhánh cửa hàng xa xôi.',
        'Tạo dựng niềm tự hào nghề nghiệp và sự gắn kết cho nhân viên tuyến đầu thông qua các câu chuyện người thật việc thật.',
      ],
      en: [
        'Significantly bridged the geographic and emotional divide between headquarters and regional branches.',
        'Built frontline morale and cultural pride through authentic storytelling celebrating everyday employee contributions.',
      ],
    },
    relatedCaseId: 'case-frontline',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-techx',
    title: {
      vi: 'TechX Camp: Kiến tạo trải nghiệm & Bản sắc cộng đồng',
      en: 'TechX Camp: Experiential Immersion & Community Belonging',
    },
    subtitle: {
      vi: 'Thiết kế chương trình trải nghiệm kết nối đa bên giữa sinh viên, nhà trường và doanh nghiệp công nghệ',
      en: 'Designing high-impact experiential immersion bridging students, university and tech industry leaders',
    },
    organization: 'FPT University',
    year: '2025',
    category: {
      vi: 'Thiết kế trải nghiệm & Lãnh đạo chương trình',
      en: 'Experience Design & Program Leadership',
    },
    accentBadge: {
      vi: 'Trọng điểm Trải nghiệm',
      en: 'Flagship Experience',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Hình ảnh toàn cảnh TechX Camp', en: 'TechX Camp Overview Visual' },
      category: 'case-cover',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Ảnh chụp hoạt động TechX Camp hoặc banner nhận diện chính thức',
        en: 'Photo of TechX Camp activity or official branding material',
      },
    },
    context: {
      vi: 'Sinh viên thế hệ mới cần những không gian trải nghiệm thực tế hơn là các buổi hội thảo một chiều. TechX Camp được thiết kế nhằm tạo ra một đợt nhập vai toàn diện, nơi sinh viên khám phá công nghệ, cọ xát với chuyên gia và xây dựng tinh thần đồng đội sâu sắc.',
      en: 'Next-gen learners seek authentic immersion over passive auditoriums. TechX Camp was conceived as an interactive playground where students touch industry tech, engage with leaders, and forge lasting team bonds.',
    },
    challenge: {
      vi: 'Phải dung hòa giữa yêu cầu học thuật chuyên môn và yếu tố truyền cảm hứng, giải trí; đồng thời điều phối nhiều đối tác doanh nghiệp cùng hàng trăm sinh viên tham gia với yêu cầu an toàn, kỷ luật và năng lượng cao.',
      en: 'Balancing rigorous tech content with dynamic engagement, while coordinating external tech partners, student logistics, and ensuring seamless safety and team synergy.',
    },
    insight: {
      vi: 'Trải nghiệm đáng nhớ không đến từ số lượng slide bài giảng, mà đến từ khoảnh khắc sinh viên cùng nhau vượt qua thử thách và cảm thấy mình là một phần của điều gì đó lớn hơn.',
      en: 'Memorable experience is never about slide counts—it is forged when participants conquer shared challenges and feel genuine collective belonging.',
    },
    myRole: {
      vi: 'Chỉ đạo chương trình: Xây dựng ý tưởng tổng thể, thiết kế hành trình trải nghiệm người tham gia, điều phối nguồn lực và dẫn dắt đội ngũ thực thi.',
      en: 'Program Director: Conceptualized narrative journey, architected participant touchpoints, aligned stakeholders and led execution teams.',
    },
    stakeholders: {
      vi: 'Ban giám hiệu FPT University, các doanh nghiệp công nghệ đối tác, đội ngũ cán bộ văn phòng, diễn giả chuyên gia và sinh viên tham dự.',
      en: 'University Leadership, tech corporate partners, operational staff, expert mentors, and student cohorts.',
    },
    approach: {
      vi: 'Áp dụng quy trình Thiết kế trải nghiệm (Experience Journey Mapping): từ trước sự kiện (kỳ vọng & tò mò) → trong sự kiện (nhập vai & gắn kết cao độ) → sau sự kiện (tự hào & lan tỏa giá trị).',
      en: 'Employed comprehensive Experience Journey Mapping: Pre-camp (anticipation & curiosity) → In-camp (deep immersion & bonding) → Post-camp (pride & enduring connection).',
    },
    systemFramework: {
      vi: 'Mô hình 4E trong thiết kế trải nghiệm: Entertainment (Hào hứng) - Education (Tri thức) - Escapism (Hóa thân) - Esthetics (Môi trường thẩm mỹ).',
      en: '4E Experience Framework: Entertainment - Education - Escapism - Esthetics applied to program rundown and activities.',
    },
    impact: {
      vi: [
        'Tạo dấu ấn sâu sắc cho sinh viên về môi trường học tập năng động và gắn kết thực tế.',
        'Thiết lập tiêu chuẩn mới cho các chương trình trải nghiệm sinh viên quy mô lớn tại trường.',
        'Tăng cường mức độ hài lòng và cam kết gắn bó của các đối tác doanh nghiệp đồng hành.',
      ],
      en: [
        'Created enduring pride and collaborative momentum across participating cohorts.',
        'Set a new benchmark for immersive student experience programs across the institution.',
        'Strengthened mutual commitment and long-term goodwill with industry partners.',
      ],
    },
    learning: {
      vi: 'Sự tỉ mỉ trong từng chi tiết nhỏ nhất (từ cách chào đón, âm thanh đến cử chỉ của người điều phối) là yếu tố quyết định cảm xúc của cả một chương trình lớn.',
      en: 'Deliberate care in micro-moments (from greeting to pacing) defines the emotional resonance of a large-scale program.',
    },
  },
  {
    id: 'case-values',
    title: {
      vi: 'Hệ thống hóa Giá trị thành Hành vi chuẩn mực',
      en: 'Values Into Behaviors: Systemic Organizational Alignment',
    },
    subtitle: {
      vi: 'Chuyển đổi những tuyên bố giá trị trừu tượng thành thước đo hành vi quan sát được và cơ chế khen thưởng',
      en: 'Translating abstract value statements into observable workplace behaviors and peer recognition',
    },
    organization: 'transcosmos Vietnam',
    year: 'Giai đoạn OD',
    category: {
      vi: 'Phát triển tổ chức & Tư duy hệ thống',
      en: 'Organizational Development & Systems Thinking',
    },
    accentBadge: {
      vi: 'Tư duy Hệ thống',
      en: 'Systems Thinking',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Sơ đồ chuẩn hóa hành vi tổ chức', en: 'Behavioral Framework Visual' },
      category: 'framework',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Sơ đồ ma trận giá trị cốt lõi hoặc bộ cẩm nang hành vi nội bộ',
        en: 'Matrix diagram of core values or behavioral codebook snippet',
      },
    },
    context: {
      vi: 'Trong tổ chức quy mô lớn, nhân viên thường biết đến khẩu hiệu công ty nhưng gặp lúng túng khi đối chiếu với công việc cụ thể hàng ngày.',
      en: 'In large-scale operations, employees frequently memorize company slogans but struggle to map them to daily behavioral choices.',
    },
    challenge: {
      vi: 'Làm thế nào để các giá trị không dừng lại trên giấy tờ mà trở thành chuẩn mực để mọi người ra quyết định, giao tiếp và đánh giá đóng góp của nhau?',
      en: 'How do we move values from static wall posters into living criteria for daily decision-making, team communication, and peer evaluation?',
    },
    insight: {
      vi: 'Con người không hành động theo định nghĩa trừu tượng; con người hành động theo những gì họ thấy đồng nghiệp và sếp của họ được ghi nhận mỗi ngày.',
      en: 'People don’t act on abstract definitions; they act on what they witness colleagues and leaders praised for every day.',
    },
    myRole: {
      vi: 'Chuyên viên Phát triển Tổ chức (OD): Phân tích bối cảnh, đồng kiến tạo các tiêu chí hành vi quan sát được, xây dựng nội dung hướng dẫn cho quản lý.',
      en: 'Organizational Development Specialist: Diagnosed cultural friction, co-defined observable behaviors, and crafted manager communication guidelines.',
    },
    approach: {
      vi: 'Mỗi giá trị cốt lõi được bẻ nhỏ thành 3 mức độ: Hành vi khuyến khích (Do) - Hành vi cần tránh (Don’t) - Cách ứng xử trong tình huống xung đột.',
      en: 'Structured each value into practical matrices: Encouraged Behaviors (Do) - Discouraged Behaviors (Don’t) - Resolution in Conflict.',
    },
    impact: {
      vi: [
        'Giúp nhân sự các cấp có chung một ngôn ngữ khi thảo luận về hiệu suất và văn hóa làm việc.',
        'Trang bị cho đội ngũ quản lý công cụ phản hồi mang tính xây dựng dựa trên hành vi cụ thể thay vì phán xét cảm tính.',
      ],
      en: [
        'Established a common vocabulary for discussing performance and workplace culture across all levels.',
        'Empowered team managers with constructive, behavior-anchored feedback toolkits.',
      ],
    },
    learning: {
      vi: 'Đơn giản hóa là chìa khóa. Một framework chỉ sống được khi người nhân viên bận rộn nhất cũng có thể nhớ và áp dụng ngay.',
      en: 'Simplicity is adoption. A framework only survives if the busiest frontline employee can easily remember and apply it.',
    },
  },
  {
    id: 'case-hybrid',
    title: {
      vi: 'Nuôi dưỡng Văn hóa Kết nối trong Môi trường Hybrid',
      en: 'Nurturing Culture & EVP in a Hybrid Tech Environment',
    },
    subtitle: {
      vi: 'Thiết kế các điểm chạm truyền thông và sự kiện tương tác xóa nhòa khoảng cách vật lý của đội ngũ công nghệ',
      en: 'Designing touchpoints and engaging townhalls to bridge the physical divide in agile tech teams',
    },
    organization: 'Savvycom',
    year: 'Giai đoạn Tech Culture',
    category: {
      vi: 'Văn hóa Công nghệ & EVP',
      en: 'Tech Culture & Employer Branding',
    },
    accentBadge: {
      vi: 'Gắn kết Hybrid',
      en: 'Hybrid Engagement',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Hoạt động gắn kết đội ngũ Savvycom', en: 'Team Engagement Activity at Savvycom' },
      category: 'case-cover',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Ảnh sự kiện Townhall hoặc ấn phẩm nội bộ tôn vinh nhân sự',
        en: 'Townhall event photo or internal employee spotlight spotlight material',
      },
    },
    context: {
      vi: 'Mô hình làm việc linh hoạt giúp gia tăng năng suất nhưng tiềm ẩn nguy cơ đứt gãy sợi dây gắn kết cảm xúc giữa các lập trình viên và tổ chức.',
      en: 'Hybrid work accelerated development velocity but risked eroding emotional cohesion between remote engineers and the corporate mission.',
    },
    challenge: {
      vi: 'Duy trì văn hóa cởi mở, khuyến khích chia sẻ tri thức và xây dựng niềm tự hào nghề nghiệp khi nhân sự ít có cơ hội gặp mặt trực tiếp.',
      en: 'Maintaining transparency, peer knowledge-sharing, and professional pride when teams rarely share a physical room.',
    },
    myRole: {
      vi: 'Phụ trách Truyền thông & Văn hóa (People & Culture): Đổi mới định dạng All-Hands, sản xuất nội dung EVP và thúc đẩy đối thoại hai chiều.',
      en: 'People & Culture / Comms Lead: Re-architected All-Hands townhalls, produced authentic EVP stories, and facilitated transparent Q&A.',
    },
    approach: {
      vi: 'Chuyển đổi các cuộc họp thông báo khô khan thành các buổi All-Hands giàu năng lượng với phần đối thoại ẩn danh, kết hợp video phỏng vấn câu chuyện nhân viên thực tế.',
      en: 'Turned dry executive broadcasts into dynamic townhalls with anonymous leadership Q&A and documentary-style engineer spotlight videos.',
    },
    impact: {
      vi: [
        'Tạo ra diễn đàn cởi mở nơi mọi thắc mắc của nhân sự đều được lắng nghe và giải đáp chân thành.',
        'Nâng cao sự thấu hiểu mục tiêu kinh doanh và gắn kết giữa các nhóm dự án độc lập.',
      ],
      en: [
        'Created a transparent forum where employee questions were authentically addressed by leadership.',
        'Deepened organizational alignment and cross-project solidarity across distributed squads.',
      ],
    },
  },
  {
    id: 'case-frontline',
    title: {
      vi: 'Thu hẹp Khoảng cách: Kết nối Tuyến đầu & Hội sở',
      en: 'Bridging the Divide: Frontline-to-HQ Communication Rituals',
    },
    subtitle: {
      vi: 'Tạo dựng sự đồng cảm và niềm tự hào cho hàng trăm nhân viên bán lẻ qua các nghi thức văn hóa thường nhật',
      en: 'Building empathy and cultural pride for hundreds of distributed retail showroom champions',
    },
    organization: 'Vua Nệm',
    year: 'Giai đoạn Retail',
    category: {
      vi: 'Truyền thông Nội bộ & Nghi thức Văn hóa',
      en: 'Internal Communication & Ritual Design',
    },
    accentBadge: {
      vi: 'Kết nối Tuyến đầu',
      en: 'Frontline Connection',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Nhân viên bán lẻ Vua Nệm kết nối', en: 'Retail Frontline Team Visual' },
      category: 'case-cover',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Ảnh hoạt động cửa hàng hoặc bản tin vinh danh nhân viên bán lẻ',
        en: 'Store activity photo or retail champion recognition feature',
      },
    },
    context: {
      vi: 'Hệ thống cửa hàng phân bố rộng khắp các tỉnh thành dễ dẫn đến cảm giác "bị bỏ quên" của nhân viên tuyến đầu so với khối văn phòng trung tâm.',
      en: 'Geographically dispersed store branches frequently lead frontline staff to feel isolated from corporate decision-making at headquarters.',
    },
    challenge: {
      vi: 'Làm sao để người bán hàng ở tỉnh xa cảm nhận được sự quan tâm, thấu hiểu và tự hào về sứ mệnh chung của công ty?',
      en: 'How to make frontline staff in remote provinces feel deeply valued, heard, and aligned with company-wide customer promises?',
    },
    myRole: {
      vi: 'Chuyên viên Truyền thông nội bộ: Sáng tạo nội dung gần gũi, tổ chức các chiến dịch ghi nhận và xây dựng kênh phản hồi từ tuyến đầu.',
      en: 'Internal Comms Specialist: Crafted relatable frontline storytelling, coordinated peer recognition, and opened direct listening channels.',
    },
    approach: {
      vi: 'Kể những câu chuyện của nhân viên tuyến đầu bằng chính ngôn ngữ của họ; vinh danh các hành động chăm sóc khách hàng xuất sắc trên toàn hệ thống.',
      en: 'Championed unsung frontline heroes through authentic narrative features, celebrating exceptional customer empathy nationwide.',
    },
    impact: {
      vi: [
        'Gia tăng sự tin cậy và gắn bó của nhân viên cửa hàng đối với thương hiệu và ban lãnh đạo.',
        'Tạo ra dòng chảy thông tin hai chiều thông suốt giữa chiến trường kinh doanh và văn phòng hội sở.',
      ],
      en: [
        'Enhanced store-level retention and trust in executive leadership across regional markets.',
        'Established smooth two-way information flow between frontline realities and corporate headquarters.',
      ],
    },
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    name: { vi: 'Lắng nghe & Thấu hiểu', en: 'Understand' },
    headline: { vi: 'Lắng nghe trước khi viết', en: 'Listening before drafting' },
    details: {
      vi: 'Lắng nghe bằng sự thấu cảm qua các buổi phỏng vấn sâu, khảo sát cảm nhận và quan sát thực tế để hiểu điều gì đang thực sự diễn ra trong tâm tư con người.',
      en: 'Conducting empathy interviews, pulse audits, and direct observation to understand genuine human sentiment before drafting a single sentence.',
    },
    deliverable: { vi: 'Bản đồ cảm nhận nhân sự', en: 'Sentiment Landscape Map' },
  },
  {
    number: '02',
    name: { vi: 'Chẩn đoán Bối cảnh', en: 'Diagnose' },
    headline: { vi: 'Tìm điểm nghẽn tổ chức', en: 'Uncovering organizational friction' },
    details: {
      vi: 'Đối chiếu mục tiêu kinh doanh của ban lãnh đạo với thực tế trải nghiệm của nhân sự, xác định các nút thắt trong giao tiếp và văn hóa.',
      en: 'Mapping leadership strategic priorities against frontline employee realities to identify systemic bottlenecks and cultural disconnects.',
    },
    deliverable: { vi: 'Báo cáo khoảng cách văn hóa', en: 'Cultural Disconnect Audit' },
  },
  {
    number: '03',
    name: { vi: 'Thiết kế Trải nghiệm', en: 'Design' },
    headline: { vi: 'Xây dựng thông điệp & hành trình', en: 'Designing narrative & journeys' },
    details: {
      vi: 'Thiết kế hành trình trải nghiệm người tham gia (Experience Journey), kiến trúc thông điệp đa tầng và bộ công cụ hỗ trợ lãnh đạo giao tiếp.',
      en: 'Architecting participant journey touchpoints, omnichannel message frameworks, and contextual talking points for people managers.',
    },
    deliverable: { vi: 'Khung trải nghiệm & thông điệp', en: 'Narrative & Journey Architecture' },
  },
  {
    number: '04',
    name: { vi: 'Đồng thuận Lãnh đạo', en: 'Align' },
    headline: { vi: 'Tạo tiếng nói chung giữa các bên', en: 'Securing leadership alignment' },
    details: {
      vi: 'Làm việc chặt chẽ với ban giám đốc và các quản lý chủ chốt để đảm bảo sự nhất quán từ nhận thức, cam kết đến hành động gương mẫu.',
      en: 'Engaging executives and middle managers to ensure complete alignment from mindset to role-modeled behaviors.',
    },
    deliverable: { vi: 'Bộ hướng dẫn truyền thông quản lý', en: 'Leadership Alignment Playbook' },
  },
  {
    number: '05',
    name: { vi: 'Kích hoạt Văn hóa', en: 'Activate' },
    headline: { vi: 'Biến ý niệm thành tương tác', en: 'Translating concepts into rituals' },
    details: {
      vi: 'Triển khai các chương trình trải nghiệm, sự kiện all-hands tương tác, nghi thức ghi nhận và nội dung truyền thông đa kênh sống động.',
      en: 'Launching immersive programs, interactive townhalls, daily recognition rituals, and human-centered multi-channel communications.',
    },
    deliverable: { vi: 'Nghi thức & Chiến dịch văn hóa', en: 'Experiential Programs & Rituals' },
  },
  {
    number: '06',
    name: { vi: 'Đo lường & Phản hồi', en: 'Measure' },
    headline: { vi: 'Theo dõi cảm xúc & hiệu quả', en: 'Tracking sentiment & impact' },
    details: {
      vi: 'Thu thập phản hồi thực tế, tỷ lệ tương tác và các chỉ số chuyển biến hành vi để đánh giá mức độ chạm tới con người.',
      en: 'Monitoring qualitative feedback, real-time engagement data, and observable behavioral shifts against strategic intent.',
    },
    deliverable: { vi: 'Bảng theo dõi cảm nhận & chỉ số', en: 'Sentiment & Adoption Metrics' },
  },
  {
    number: '07',
    name: { vi: 'Tối ưu & Lan tỏa', en: 'Improve' },
    headline: { vi: 'Duy trì sức sống dài lâu', en: 'Iterating for longevity' },
    details: {
      vi: 'Liên tục tinh chỉnh dựa trên phản hồi của nhân sự, biến văn hóa thành thói quen tự nhiên của tổ chức thay vì chỉ là phong trào nhất thời.',
      en: 'Embedding continuous learning loops so organizational culture sustains itself organically as a living, enduring habit.',
    },
    deliverable: { vi: 'Hệ thống vận hành bền vững', en: 'Sustainable Operating Rhythm' },
  },
];

export const VERIFIED_STATS: VerifiedStat[] = [
  {
    value: '6+',
    label: {
      vi: 'Năm chuyên sâu Truyền thông & Văn hóa',
      en: 'Years in Culture & Internal Communication',
    },
    context: {
      vi: 'Hành trình phát triển qua Higher Education, Bán lẻ, IT Outsourcing và BPO.',
      en: 'Dedicated evolution spanning Higher Education, Retail, IT Outsourcing, and BPO.',
    },
  },
  {
    value: '4+',
    label: {
      vi: 'Môi trường & Quy mô tổ chức đa dạng',
      en: 'Diverse Organizational Contexts',
    },
    context: {
      vi: 'Kinh nghiệm thích ứng từ quy mô chi nhánh bán lẻ toàn quốc đến đội ngũ công nghệ hybrid và trường đại học.',
      en: 'Proven adaptability from nationwide retail showrooms to distributed tech squads and universities.',
    },
  },
  {
    value: '100+',
    label: {
      vi: 'Chương trình & Điểm chạm trải nghiệm',
      en: 'Experiential Initiatives & Culture Touchpoints',
    },
    context: {
      vi: 'Bao gồm All-Hands townhall, trại nhập vai (TechX Camp), chiến dịch gắn kết và cẩm nang hành vi.',
      en: 'Encompassing townhalls, immersive camps (TechX Camp), recognition rituals, and codebooks.',
    },
  },
  {
    value: 'AI',
    label: {
      vi: 'Khai phóng năng lực & Tối ưu quy trình',
      en: 'AI-Amplified Workflow Agility',
    },
    context: {
      vi: 'Ứng dụng AI vào nghiên cứu, tổng hợp insight, phác thảo nội dung và tối ưu vận hành.',
      en: 'Leveraging AI tools for research synthesis, content localization, and workflow acceleration.',
    },
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: {
      vi: 'Cử nhân',
      en: 'Bachelor Degree',
    },
    field: {
      vi: 'Quan hệ Quốc tế và Nghiên cứu An ninh Quốc gia',
      en: 'International Relations and National Security Studies',
    },
    institution: {
      vi: 'Đại học Quốc tế Hồng Bàng (HIU)',
      en: 'Hong Bang International University (HIU)',
    },
    period: '2014 — 2018',
    note: {
      vi: 'Nền tảng về tư duy ngoại giao, đàm phán, quản trị các bên liên quan và nghiên cứu hành vi cộng đồng.',
      en: 'Foundation in diplomatic negotiation, multi-stakeholder governance, and community socio-behavioral dynamics.',
    },
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: {
      vi: 'AI for Productivity & Workflow Optimization',
      en: 'AI for Productivity & Workflow Optimization',
    },
    issuer: 'Professional Credential',
    year: '2024',
    domain: 'AI',
    status: 'verified',
  },
  {
    title: {
      vi: 'Leadership & People Management Principles',
      en: 'Leadership & People Management Principles',
    },
    issuer: 'Professional Development',
    year: '2023',
    domain: 'Leadership',
    status: 'verified',
  },
  {
    title: {
      vi: 'Internal Communication & Employee Experience Architecture',
      en: 'Internal Communication & Employee Experience Architecture',
    },
    issuer: 'Industry Workshop',
    year: '2022',
    domain: 'Culture & Comms',
    status: 'verified',
  },
  {
    title: {
      vi: 'Organizational Development & Culture Transformation Foundations',
      en: 'Organizational Development & Culture Transformation Foundations',
    },
    issuer: 'Management Training',
    year: '2021',
    domain: 'People & Experience',
    status: 'verified',
  },
];
