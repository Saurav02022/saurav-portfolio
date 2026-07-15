import type { ReactNode } from 'react';

export interface NavItem {
  num: string;
  label: string;
  id: string;
}

export interface ExperienceRole {
  dates: string;
  role: string;
  company: string;
  meta: string;
  bullets: ReactNode[];
  tags: string[];
}

export interface CaseBlock {
  label: string;
  text: ReactNode;
}

export interface CaseStudy {
  index: string;
  title: string;
  summary: string;
  blocks: CaseBlock[];
  tags: string[];
  repoUrl: string;
}

export interface DetailLink {
  label: string;
  url: string;
}

export interface EducationEntry {
  value: string;
  sub: string;
}
