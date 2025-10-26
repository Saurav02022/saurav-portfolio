export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  resumeUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | 'Languages';
  proficiency: number; // 1-100
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  stargazers_count: number;
  topics: string[];
  pushed_at: string;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  pushed_at: string;
  created_at: string;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export interface CodingTimeStats {
  totalHours: number;
  todayHours: number;
  weekHours: number;
  monthHours: number;
  languages: {
    name: string;
    hours: number;
    percentage: number;
  }[];
  projects: {
    name: string;
    hours: number;
  }[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLink[];
  experience: Experience[];
  skills: Skill[];
  education: Education[];
  projects: Project[];
  codingStats: CodingTimeStats;
}
