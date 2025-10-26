"use client";

import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiMongodb, SiGit, SiGithub, SiVercel,
  SiRedux, SiFirebase, SiJest, SiCypress, SiExpress
} from 'react-icons/si';
import { ChevronDown, Code2 } from 'lucide-react';

export function Skills() {
  const { skills } = portfolioData;

  // Group skills by category
  const categories = [
    { name: 'Languages & Frameworks', key: ['Languages', 'Frontend'] },
    { name: 'State Management & Data', key: ['Frontend'] },
    { name: 'Testing & Quality', key: ['Tools'] },
    { name: 'UI & Styling', key: ['Frontend'] },
    { name: 'Backend & APIs', key: ['Backend'] },
    { name: 'DevOps & Tools', key: ['DevOps', 'Tools'] },
  ];

  const getSkillIcon = (iconName: string) => {
    const iconClass = "h-5 w-5";
    switch (iconName) {
      case 'javascript': return <SiJavascript className={iconClass} />;
      case 'typescript': return <SiTypescript className={iconClass} />;
      case 'react': return <SiReact className={iconClass} />;
      case 'nextjs': return <SiNextdotjs className={iconClass} />;
      case 'nodejs': return <SiNodedotjs className={iconClass} />;
      case 'tailwind': return <SiTailwindcss className={iconClass} />;
      case 'mongodb': return <SiMongodb className={iconClass} />;
      case 'git': return <SiGit className={iconClass} />;
      case 'github': return <SiGithub className={iconClass} />;
      case 'vercel': return <SiVercel className={iconClass} />;
      case 'redux': return <SiRedux className={iconClass} />;
      case 'firebase': return <SiFirebase className={iconClass} />;
      case 'jest': return <SiJest className={iconClass} />;
      case 'cypress': return <SiCypress className={iconClass} />;
      case 'express': return <SiExpress className={iconClass} />;
      default: return <Code2 className={iconClass} />;
    }
  };

  const getCategorySkills = (categoryName: string) => {
    switch (categoryName) {
      case 'Languages & Frameworks':
        return skills.filter(s => 
          ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native', 'HTML5', 'CSS3'].includes(s.name)
        );
      case 'State Management & Data':
        return skills.filter(s => 
          ['Redux Toolkit', 'Context API', 'TanStack Query', 'React Query'].includes(s.name)
        );
      case 'Testing & Quality':
        return skills.filter(s => 
          ['Jest', 'React Testing Library', 'Cypress'].includes(s.name)
        );
      case 'UI & Styling':
        return skills.filter(s => 
          ['Tailwind CSS', 'Chakra UI', 'Shadcn UI', 'Responsive Design'].includes(s.name)
        );
      case 'Backend & APIs':
        return skills.filter(s => 
          ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Firebase', 'Supabase'].includes(s.name)
        );
      case 'DevOps & Tools':
        return skills.filter(s => 
          ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Netlify', 'JIRA'].includes(s.name)
        );
      default:
        return [];
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ChevronDown className="h-6 w-6 rotate-180" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {categories.map((category) => {
            const categorySkills = getCategorySkills(category.name);
            if (categorySkills.length === 0) return null;

            return (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {getSkillIcon(skill.icon || '')}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

