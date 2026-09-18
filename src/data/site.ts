/**
 * Single source of truth for every piece of copy on the site.
 * Content is transcribed from Shailesh_Patil_CV_10Yrs.pdf — edit here, not in components.
 */

export const profile = {
  name: 'Shailesh Shivaji Patil',
  shortName: 'Shailesh Patil',
  initials: 'SP',
  role: 'Full Stack Developer',
  location: 'Pune, India',
  tagline: 'I build and scale multi-tenant SaaS platforms — from Laravel API architecture to Next.js frontends.',
  summary:
    'Passionate software developer with 10 years of experience building and scaling robust web applications. Proven expertise in modern Full-Stack development, transitioning from legacy MVC architectures to modern, multi-tenant SaaS platforms using Next.js and Laravel. Adept at full-lifecycle development, from backend API architecture and database design to frontend state management, while working seamlessly within modern cloud and containerized environments.',
  email: 'shaileshs_patil@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/shailesh-patil72',
  linkedinLabel: 'linkedin.com/in/shailesh-patil72',
  github: 'https://github.com/ShaileshP27',
  githubLabel: 'github.com/ShaileshP27',
  availability: 'Open to full-stack roles',
} as const;

export const stats = [
  { value: '10', suffix: '+', label: 'Years building for the web' },
  { value: '2', suffix: '', label: 'Product companies' },
  { value: '6', suffix: '+', label: 'Platforms shipped' },
  { value: '3', suffix: '', label: 'PHP frameworks in production' },
] as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
] as const;

export type SkillGroup = {
  title: string;
  icon: 'server' | 'layout' | 'cloud' | 'tools';
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    blurb: 'API architecture, data modelling and the layers that keep them honest.',
    items: ['PHP (OOP)', 'Laravel', 'CodeIgniter', 'Phalcon', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    blurb: 'Typed, state-managed interfaces built to survive real product churn.',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'jQuery',
      'Zustand',
      'React Query',
      'Tailwind CSS',
      'Bootstrap',
      'CSS',
      'HTML',
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'cloud',
    blurb: 'Containerised delivery and automated pipelines, worked alongside infra teams.',
    items: ['AWS EC2', 'AWS Route53', 'Docker', 'Nginx', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Tools & Integrations',
    icon: 'tools',
    blurb: 'The third-party surface area that turns an app into a product.',
    items: ['Git', 'JIRA', 'Elasticsearch', 'Gemini AI', 'Stripe Checkout', 'GTM', 'Matomo Analytics'],
  },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  current: boolean;
  points: string[];
  project?: {
    name: string;
    details: { label: string; text: string }[];
  };
  stack: string[];
};

export const experience: Role[] = [
  {
    company: 'JBK Technologies Pvt Ltd.',
    title: 'Full Stack Developer',
    location: 'Pune',
    period: '09/2020 — Present',
    current: true,
    points: [
      'Drive functional requirement implementation, product bug fixing, and continuous enhancements for a service-based organization.',
      'Maintain rigorous code quality and deliverable timelines across multiple client projects.',
    ],
    project: {
      name: 'Key Project — Project Management SaaS',
      details: [
        {
          label: 'Overview',
          text: 'Engineered a multi-tenant SaaS project and ticket management application serving different industries.',
        },
        {
          label: 'Backend & Billing',
          text: 'Architected a layered Laravel REST API featuring subdomain multi-tenancy, module-based ACL, and integrated Stripe for tiered subscription management.',
        },
        {
          label: 'Frontend',
          text: 'Built a Next.js TypeScript monorepo (admin, tenant, and marketing apps) utilizing Zustand, React Query, and strict Zod validation.',
        },
        {
          label: 'Deployment',
          text: 'Developed and optimized applications to run in containerized Docker environments, collaborating with infrastructure teams for AWS EC2 deployment and GitHub Actions CI/CD pipelines.',
        },
      ],
    },
    stack: ['Phalcon', 'Laravel', 'Next.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'Stripe', 'Docker', 'AWS EC2'],
  },
  {
    company: 'Welkin IT Services Pvt Ltd.',
    title: 'Associate Web Developer',
    location: 'Pune',
    period: '10/2016 — 09/2020',
    current: false,
    points: [
      'Developed and maintained security-domain product applications, handling requirement analysis and technical design document creation.',
      'Executed functional requirement implementation, continuous code maintenance, and product enhancements.',
    ],
    stack: ['PHP OOP', 'CodeIgniter', 'MySQL', 'jQuery', 'Bootstrap'],
  },
];

export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Project Management SaaS',
    summary:
      'Multi-tenant project and ticket management platform built for use across different industries, with subdomain-isolated tenants and tiered subscription billing.',
    highlights: [
      'Layered Laravel REST API with subdomain multi-tenancy',
      'Module-based ACL for granular permission control',
      'Stripe Checkout for tiered subscription management',
      'Next.js TypeScript monorepo — admin, tenant and marketing apps',
      'Zustand + React Query state layer with strict Zod validation',
      'Dockerised delivery to AWS EC2 via GitHub Actions',
    ],
    tags: ['Laravel', 'Next.js', 'TypeScript', 'Stripe', 'Docker', 'AWS'],
    featured: true,
  },
  {
    name: 'Online Auction Platform',
    summary:
      'Online auction site supporting multiple auction houses, with bidding flows and per-house catalogue management.',
    highlights: ['Multi-auction-house architecture', 'Live bidding and lot management', 'Custom admin tooling'],
    tags: ['PHP', 'Phalcon', 'jQuery', 'Bootstrap', 'HTML'],
  },
  {
    name: 'E-Commerce Shopping Site',
    summary:
      'Storefront backed by a custom-built CMS, giving non-technical staff full control of catalogue and content.',
    highlights: ['Custom CMS for content and catalogue', 'React-driven storefront components', 'Order management flows'],
    tags: ['PHP', 'Phalcon', 'React', 'jQuery', 'Bootstrap'],
  },
  {
    name: 'School Administration Platform',
    summary:
      'Administration platform for schools with integrated e-learning capabilities for students and staff.',
    highlights: ['E-learning module', 'Student and staff administration', 'Role-separated dashboards'],
    tags: ['PHP', 'CodeIgniter', 'jQuery', 'Bootstrap', 'HTML'],
  },
  {
    name: 'Channel Partner Portal',
    summary: 'Web portal that lets channel partners manage product sales end to end.',
    highlights: ['Partner-facing sales management', 'Product and inventory views', 'Reporting for channel performance'],
    tags: ['PHP', 'CodeIgniter', 'jQuery', 'Bootstrap', 'HTML'],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: 'Master of Computer Application (Management)',
    institution: 'Savitribai Phule Pune University',
    period: '08/2013 — 04/2016',
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Shivaji University',
    period: '06/2010 — 04/2013',
  },
  {
    degree: 'HSC',
    institution: 'Maharashtra State Board',
    period: '04/2009 — 02/2010',
  },
  {
    degree: 'SSC',
    institution: 'Maharashtra State Board',
    period: '04/2005 — 03/2006',
  },
];

export const passions = [
  { label: 'Trekking & Volunteering', icon: 'mountain' },
  { label: 'Photography & Cinematography', icon: 'camera' },
  { label: 'Guitar & Keyboard', icon: 'music' },
] as const;
