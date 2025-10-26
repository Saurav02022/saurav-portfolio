"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const { personal } = portfolioData;
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://github.com/Saurav02022', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/saurav-kumar-9b5b3b1b0/', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.location.href = `mailto:${personal.email}`}
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>

          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {personal.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

