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
  SiSupabase,
  SiCypress,
  SiOpenai,
  SiGooglecloud,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiJira,
  SiNetlify,
  SiFirebase,
} from 'react-icons/si';
import {
  Sparkles,
  Store,
  TestTube2,
  Database,
  Network,
  Bot,
  MousePointer2,
} from 'lucide-react';

/**
 * Tech Stack Item Type Definition
 */
export interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'AI Tools';
}

/**
 * Primary stack shown in the hero marquee (resume-aligned ordering)
 */
export const PRIMARY_TECH_STACK: TechStackItem[] = [
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'React Native', icon: SiReact, category: 'Frontend' },
  { name: 'Python', icon: SiPython, category: 'Backend' },
  { name: 'FastAPI', icon: SiFastapi, category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Docker', icon: SiDocker, category: 'DevOps' },
  { name: 'Git', icon: SiGit, category: 'DevOps' },
  { name: 'GitHub', icon: SiGithub, category: 'DevOps' },
  { name: 'Vercel', icon: SiVercel, category: 'DevOps' },
];

/**
 * Full stack by category — canonical source for the Skills section (single list; edit here only).
 */
export const TECH_STACK_BY_CATEGORY = {
  'Languages': [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
  ],

  'Frontend': [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React Native', icon: SiReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Redux', icon: SiRedux },
    { name: 'Zustand', icon: Store },
  ],

  'Backend & APIs': [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'REST API Design', icon: Network },
  ],

  'Database & Storage': [
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'IndexedDB', icon: Database },
  ],

  'AI & LLMs': [
    { name: 'Structured LLM outputs', icon: Sparkles },
    { name: 'LLM API integration', icon: Bot },
    { name: 'Cursor AI', icon: MousePointer2 },
    { name: 'ChatGPT', icon: SiOpenai },
  ],

  'DevOps & Cloud': [
    { name: 'Docker', icon: SiDocker },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Google Cloud Run', icon: SiGooglecloud },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
  ],

  'Testing': [
    { name: 'Playwright', icon: TestTube2 },
    { name: 'Cypress', icon: SiCypress },
  ],
} as const;

export const getIconByName = (
  iconName: string,
): React.ComponentType<{ className?: string }> => {
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
    jest: SiCypress,
    cypress: SiCypress,
    openai: SiOpenai,
    anthropic: Sparkles,
    cursor: MousePointer2,
    perplexity: Sparkles,
    replit: SiOpenai,
    jira: SiJira,
    zustand: Store,
    sentry: SiCypress,
    hotjar: SiCypress,
    gcp: SiGooglecloud,
    api: Network,
    indexeddb: Database,
    python: SiPython,
    fastapi: SiFastapi,
    postgresql: SiPostgresql,
    docker: SiDocker,
    githubactions: SiGithubactions,
    playwright: TestTube2,
    testing: TestTube2,
  };

  return iconMap[iconName] || SiReact;
};
