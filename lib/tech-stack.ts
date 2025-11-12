import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiSupabase,
  SiJest,
  SiCypress,
  SiOpenai,
  SiReplit,
  SiJira
} from 'react-icons/si';
import { Sparkles, Terminal, Compass } from 'lucide-react';

/**
 * Tech Stack Item Type Definition
 */
export interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'AI Tools';
}

/**
 * PRIMARY TECH STACK - Market-Driven Priority Order
 * Based on 2025-2026 job market demand and industry projections
 * 
 * Priority Rationale (2025-2026 Market Research):
 * 1. TypeScript - Now THE industry standard (80%+ of projects), not optional
 * 2. React - Still #1 frontend framework (98.9% web dominance)
 * 3. Next.js - Leading React meta-framework, fastest growth
 * 4. JavaScript - Foundation (but TypeScript is now primary)
 * 5. AI-Powered Development - CRITICAL expected skill (not just differentiator)
 * 6. Backend/Full-Stack - Node.js essential for modern full-stack
 * 7. Modern UI - Tailwind CSS industry standard
 * 8. Cloud/DevOps - Git, GitHub, Vercel mandatory
 * 9. Databases - MongoDB for modern apps
 * 10. State Management - Redux for complex apps
 * 
 * Key 2025-2026 Changes:
 * - TypeScript moved to #1 (industry shift complete)
 * - AI tools elevated to top priority (now expected, not optional)
 * - Cloud/DevOps emphasis increased
 */
export const PRIMARY_TECH_STACK: TechStackItem[] = [
  // Priority 1-3: Modern Frontend Stack (MUST-HAVE 2025-2026)
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  
  // Priority 4: Foundation Language
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  
  // Priority 5-7: AI-Powered Development (CRITICAL 2025-2026)
  { name: 'ChatGPT', icon: SiOpenai, category: 'AI Tools' },
  { name: 'Cursor AI', icon: Terminal, category: 'AI Tools' },
  { name: 'Claude AI', icon: Sparkles, category: 'AI Tools' },
  
  // Priority 8: Backend Full-Stack
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  
  // Priority 9: Modern UI Framework
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  
  // Priority 10-12: DevOps Essentials
  { name: 'Git', icon: SiGit, category: 'DevOps' },
  { name: 'GitHub', icon: SiGithub, category: 'DevOps' },
  { name: 'Vercel', icon: SiVercel, category: 'DevOps' },
  
  // Priority 13: Database
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  
  // Priority 14-15: Additional Tools
  { name: 'Redux', icon: SiRedux, category: 'Frontend' },
  { name: 'Perplexity', icon: Compass, category: 'AI Tools' },
  { name: 'Replit', icon: SiReplit, category: 'AI Tools' },
];

/**
 * EXTENDED TECH STACK - All Technologies by Category
 * Used in Skills section for comprehensive display
 */
export const TECH_STACK_BY_CATEGORY = {
  'Languages & Frameworks': [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
  ],
  
  'State Management & Data Fetching': [
    { name: 'Redux Toolkit', icon: SiRedux },
    { name: 'Context API', icon: SiReact },
    { name: 'TanStack Query', icon: SiReact },
  ],
  
  'UI & Styling': [
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Shadcn UI', icon: SiReact },
    { name: 'Chakra UI', icon: SiReact },
  ],
  
  'Backend & APIs': [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
  ],
  
  'Database & Services': [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Supabase', icon: SiSupabase },
  ],
  
  'Testing & Quality': [
    { name: 'Jest', icon: SiJest },
    { name: 'Cypress', icon: SiCypress },
  ],
  
  'DevOps & Deployment': [
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Netlify', icon: SiNetlify },
  ],
  
  'AI-Powered Development': [
    { name: 'Cursor AI', icon: Terminal },
    { name: 'ChatGPT Pro', icon: SiOpenai },
    { name: 'Claude AI', icon: Sparkles },
    { name: 'Perplexity', icon: Compass },
    { name: 'Replit', icon: SiReplit },
  ],
  
  'Project Management': [
    { name: 'JIRA', icon: SiJira },
  ],
} as const;

/**
 * Helper function to get icon component by name
 * Useful for backwards compatibility with portfolio-data.ts
 */
export const getIconByName = (iconName: string): React.ComponentType<{ className?: string }> => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    react: SiReact,
    nextjs: SiNextdotjs,
    typescript: SiTypescript,
    javascript: SiJavascript,
    html: SiHtml5,
    css: SiCss3,
    nodejs: SiNodedotjs,
    express: SiExpress,
    mongodb: SiMongodb,
    tailwind: SiTailwindcss,
    redux: SiRedux,
    git: SiGit,
    github: SiGithub,
    vercel: SiVercel,
    netlify: SiNetlify,
    firebase: SiFirebase,
    supabase: SiSupabase,
    jest: SiJest,
    cypress: SiCypress,
    openai: SiOpenai,
    anthropic: Sparkles,
    cursor: Terminal,
    perplexity: Compass,
    replit: SiReplit,
    jira: SiJira,
  };
  
  return iconMap[iconName] || SiReact;
};

