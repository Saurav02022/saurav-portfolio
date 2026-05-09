"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';

export function Footer() {
  const { personal, social } = portfolioData;
  const githubUrl =
    social.find((s) => s.name === "GitHub")?.url ??
    "https://github.com/saurav02022";
  const linkedInUrl =
    social.find((s) => s.name === "LinkedIn")?.url ??
    "https://www.linkedin.com/in/saurav02022/";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personal.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${personal.email}`} aria-label={`Email ${personal.name}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
            <a
              href={`mailto:${personal.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {personal.email}
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Open resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

