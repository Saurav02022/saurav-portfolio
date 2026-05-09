export interface PersonalInfo {
  name: string;
  title: string;
  /** One or two factual lines under the title — aligned with site metadata / bio. */
  introLine: string;
  /** Quiet hero strip — technologies from hands-on production work. */
  heroCoreStack: string[];
  /** One- or two-line bridge under Experience — not a repeat of the full bio. */
  experienceIntro: string;
  /**
   * Preferred: first day of professional work on your CV (YYYY-MM-DD). Midnight local time is used as the anchor.
   */
  careerStartDate?: string;
  /**
   * Fallback when only month+year is on the CV (YYYY-MM). Treated as the 1st of that month.
   * Ignored if `careerStartDate` is set. If both omitted, earliest `experience.startDate` + day 1 is used.
   */
  careerStartMonth?: string;
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

export interface Achievement {
  text: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
  achievements: Achievement[];
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
  /** Primary language (same as first entry of `languages` when GitHub returned bytes breakdown). */
  language: string;
  /** Languages from GitHub `repos/.../languages`, by share of codebase (largest first). */
  languages: string[];
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

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
  public_reactions_count: number;
  comments_count: number;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}


export interface CalendlyConfig {
  enabled: boolean;
  url: string;
  meetingTypes: {
    name: string;
    duration: string;
    url: string;
  }[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLink[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  calendly?: CalendlyConfig;
  devToUsername?: string;
}
