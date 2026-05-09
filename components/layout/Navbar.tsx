"use client";

import React, { useState, useEffect, startTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Moon, Sun, Menu, X, Check, FileText } from 'lucide-react';
import { useTheme } from 'next-themes';
import { portfolioData } from '@/lib/portfolio-data';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mounted gate for next-themes — avoids icon mismatch during SSR hydration
  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 20);
      }, 10); // Debounce by 10ms
    };
    
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const githubUrl =
    portfolioData.social.find((s) => s.name === 'GitHub')?.url ??
    'https://github.com/saurav02022';

  const handleOpenResume = () => {
    window.open(portfolioData.personal.resumeUrl, '_blank');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Scroll to top"
            >
              SK
            </a>

            <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  suppressHydrationWarning
                  type="button"
                  aria-label="Choose colour theme"
                  aria-expanded={themeMenuOpen}
                >
                  {!mounted ? (
                    <Sun className="h-5 w-5" />
                  ) : theme === 'dark' ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </Button>

                {themeMenuOpen && mounted && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setThemeMenuOpen(false)}
                    />
                    
                    <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 py-2">
                      <button
                        type="button"
                        onClick={() => {
                          setTheme('light');
                          setThemeMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-accent transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <Sun className="h-4 w-4" />
                          <span>Light</span>
                        </div>
                        {theme === 'light' && <Check className="h-4 w-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setTheme('dark');
                          setThemeMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-accent transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <Moon className="h-4 w-4" />
                          <span>Dark</span>
                        </div>
                        {theme === 'dark' && <Check className="h-4 w-4" />}
                      </button>
                    </div>
                  </>
                )}
              </div>

              <Button
                type="button"
                onClick={handleOpenResume}
                size="sm"
                className="hidden md:flex"
              >
                <FileText className="h-4 w-4" />
                Open resume
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button
              type="button"
              onClick={() => {
                handleOpenResume();
                setMobileMenuOpen(false);
              }}
              size="lg"
            >
              <FileText className="h-5 w-5" />
              Open resume
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

