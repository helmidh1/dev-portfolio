export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'AI' | 'Programming' | 'Web & App' | 'Game Dev' | 'Other';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  imagePath: string;
}

export interface Portfolio {
  name: string;
  fullName: string;
  currentRole: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroTitle2: string;
  heroSubtitle: string;
  availabilityText: string;
  email: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  websiteUrl: string;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
}

export const portfolioData: Portfolio = {
  name: 'Helmi Hernandez',
  fullName: 'Helmi D. Hernandez',
  currentRole: 'AI Software Intern & Computer Science Student (USMC Veteran)',
  heroTitle1: 'Crafting digital ',
  heroTitleHighlight: 'experiences',
  heroTitle2: ' through code and design.',
  heroSubtitle:
    'I am an AI Software Intern at ATrack Solutions, Computer Science student at Nova Southeastern University (Expected Graduation: Dec 2027), and a USMC Veteran. My technical journey spans building scalable web and cross-platform applications, engineering autonomous AI workflows, and game development.',
  availabilityText: 'Available for new projects',
  email: 'helmi.d.hernandez@gmail.com',
  location: 'Florida, USA',
  linkedinUrl: 'https://www.linkedin.com/in/helmi-d-hernandez/',
  githubUrl: 'https://github.com/helmidh1',
  websiteUrl: 'https://helmidh.dev',

  experiences: [
    {
      role: 'AI Software Intern',
      company: 'ATrack Solutions',
      duration: 'Aug 2026 – Present',
      description:
        '• Automated branch merging and PR workflows via Claude Code and Bitbucket APIs to resolve conflicts, run automated testing, and validate AI-driven code reviews.\n• Engineered an automated monitoring service evaluating agent operational status at 5-minute intervals, aggregating real-time email alerts for administrative system health.\n• Maintained multi-tenant healthcare software operational reliability, delivering 12 production pull requests in 3 weeks with zero regressions across 2,400 test cases.\n• Fixed a distributed synchronization race condition across pipeline stages with stack-trace logging and regression tests.',
    },
    {
      role: 'Software Intern – Feature Development',
      company: 'Prodia Technologies',
      duration: 'Dec 2025 – May 2026',
      description:
        '• Built and deployed scalable Flutter/Dart web features aligned with production design specifications for a healthcare platform connecting patients and clinicians.\n• Architected NoSQL (Firebase) data models to support evolving product requirements and real-time synchronization.\n• Configured Firebase authentication flows and deployment pipelines, authoring technical documentation for developers.\n• Applied HIPAA-aware data handling practices and secure client-server communication.',
    },
    {
      role: 'Junior Immersive Simulation Technologist',
      company: 'Nova Southeastern University (NSU)',
      duration: 'Jan 2025 – May 2025',
      description:
        '• Spearheaded technical operations for immersive classroom environments, supporting hands-on medical training.\n• Configured, maintained, and optimized virtual reality hardware and software to ensure high-fidelity simulation sessions.\n• Managed software updates and proactive troubleshooting to guarantee zero downtime during training.\n• Implemented robust tracking protocols to manage hardware inventory and equipment readiness.',
    },
    {
      role: 'Data Analyst',
      company: 'Hewlett Packard Enterprise (HPE)',
      duration: 'Apr 2024 – June 2024',
      description:
        '• Automated data validation scripts in Python (Pandas, NumPy), reducing dataset processing time by over 40 minutes.\n• Built repeatable data-cleaning pipelines and analytical visualizations (Matplotlib, Seaborn) to drive business decisions.\n• Enhanced UI workflows and applied data integrity standards for secure data processing.',
    },
    {
      role: 'Jet Engine Mechanic',
      company: 'United States Marine Corps',
      duration: 'Feb 2015 – Feb 2020',
      description:
        '• Conducted critical maintenance, inspections, and complex repairs on F402B jet propulsion systems under demanding operational conditions.\n• Partnered with quality assurance teams during hazmat and emergency response audits, achieving a 99% compliance rating.\n• Awarded the Navy and Marine Corps Achievement Medal for outstanding QA management and technical documentation.',
    },
  ],

  skills: [
    { name: 'Antigravity', icon: 'antigravity', category: 'AI' },
    { name: 'Gemini', icon: 'gemini', category: 'AI' },
    { name: 'Claude Code', icon: 'claudecode', category: 'AI' },

    { name: 'TypeScript', icon: 'typescript', category: 'Programming' },
    { name: 'Python', icon: 'python', category: 'Programming' },
    { name: 'C#', icon: 'csharp', category: 'Programming' },
    { name: 'C++', icon: 'cpp', category: 'Programming' },
    { name: 'Java', icon: 'java', category: 'Programming' },
    { name: 'Dart', icon: 'dart', category: 'Programming' },
    { name: 'Bash', icon: 'bash', category: 'Programming' },

    { name: 'React', icon: 'react', category: 'Web & App' },
    { name: 'Flutter', icon: 'flutter', category: 'Web & App' },
    { name: 'Firebase', icon: 'firebase', category: 'Web & App' },
    { name: 'Google Cloud', icon: 'gcp', category: 'Web & App' },
    { name: 'AWS', icon: 'aws', category: 'Web & App' },
    { name: 'Figma', icon: 'figma', category: 'Web & App' },
    { name: 'HTML5', icon: 'html', category: 'Web & App' },
    { name: 'CSS3', icon: 'css', category: 'Web & App' },

    { name: 'Unity', icon: 'unity', category: 'Game Dev' },
    { name: 'Blender', icon: 'blender', category: 'Game Dev' },

    { name: 'Git', icon: 'git', category: 'Other' },
    { name: 'GitHub', icon: 'github', category: 'Other' },
    { name: 'PostgreSQL', icon: 'postgresql', category: 'Other' },
    { name: 'SQL', icon: 'sql', category: 'Other' },
  ],

  projects: [
    {
      title: 'Multimodal AI Video Notes',
      description:
        'A local-first Manifest V3 Chrome extension built with React, TypeScript, and WXT. Features interactive playhead sync, one-click slide extraction, Gemini multimodal vision OCR, and live caption streaming with delta deduplication.',
      tags: ['TypeScript', 'React', 'Python', 'Git'],
      demoUrl: '',
      codeUrl: 'https://github.com/helmidh1/video_notes_00',
      imagePath: '/assets/projects/flutter_firebase.png',
    },
    {
      title: 'Developer Portfolio',
      description:
        'A fast, responsive developer portfolio built with Astro, Tailwind CSS, and TypeScript. Features sub-100ms load times, dark/light mode theming, and an active section scroll spy.',
      tags: ['TypeScript', 'Flutter', 'Firebase', 'Git'],
      demoUrl: 'https://helmidh.dev/',
      codeUrl: 'https://github.com/helmidh1/dev-portfolio',
      imagePath: '/assets/projects/flutter_firebase.png',
    },
    {
      title: 'Unity Character Controller',
      description:
        'A responsive Unity character controller with state machine architecture. Features fluid movement mechanics including walking, running, sprinting, jumping, and wall traversal.',
      tags: ['C#', 'Unity', 'Git'],
      demoUrl: 'https://alerio.itch.io/custom-controller-1',
      codeUrl: 'https://github.com/helmidh1/mov_proj_1',
      imagePath: '/assets/projects/unity_pic_1.png',
    },
    {
      title: 'Unity Inventory System',
      description:
        'A scalable, data-driven Unity inventory system using Scriptable Objects. Supports serializing, validating, and transferring items across multiple inventories.',
      tags: ['C#', 'Unity', 'Git'],
      demoUrl: 'https://alerio.itch.io/inventory-system-1',
      codeUrl: 'https://github.com/helmidh1/proj_farm',
      imagePath: '/assets/projects/unity_pic_2.png',
    },
  ],
};
