"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Code } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';
import { TechNetworkBackground } from '@/components/ui/tech-network-background';

export function Hero() {
  const { personal, social } = portfolioData;

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open(personal.resumeUrl, '_blank');
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'mail': return <Mail className="h-5 w-5" />;
      case 'phone': return <Phone className="h-5 w-5" />;
      case 'code': return <Code className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <TechNetworkBackground />

      <div className="relative z-10 container py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            {personal.name}
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
            {personal.title}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {personal.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button onClick={handleViewProjects} size="lg">
              View Projects
            </Button>
            
            <Button onClick={handleDownloadResume} variant="outline" size="lg">
              Download Resume
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            {social.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => window.open(link.url, '_blank')}
              >
                {getSocialIcon(link.icon)}
              </Button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

