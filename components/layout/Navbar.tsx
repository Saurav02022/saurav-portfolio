"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Moon, Sun, Download, Menu, X, Monitor, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { portfolioData } from '@/lib/portfolio-data';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
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
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold hover:text-primary transition-colors"
            >
              SK
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/Saurav02022', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                >
                  {theme === 'dark' ? (
                    <Moon className="h-5 w-5" />
                  ) : theme === 'light' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Monitor className="h-5 w-5" />
                  )}
                </Button>

                {themeMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setThemeMenuOpen(false)}
                    />
                    
                    <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 py-2">
                      <button
                        onClick={() => {
                          setTheme('light');
                          setThemeMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Sun className="h-4 w-4" />
                          <span>Light</span>
                        </div>
                        {theme === 'light' && <Check className="h-4 w-4" />}
                      </button>

                      <button
                        onClick={() => {
                          setTheme('dark');
                          setThemeMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Moon className="h-4 w-4" />
                          <span>Dark</span>
                        </div>
                        {theme === 'dark' && <Check className="h-4 w-4" />}
                      </button>

                      <button
                        onClick={() => {
                          setTheme('system');
                          setThemeMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Monitor className="h-4 w-4" />
                          <span>System</span>
                        </div>
                        {theme === 'system' && <Check className="h-4 w-4" />}
                      </button>
                    </div>
                  </>
                )}
              </div>

              <Button
                onClick={handleDownloadResume}
                size="sm"
                className="hidden md:flex"
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-2xl hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => {
                handleDownloadResume();
                setMobileMenuOpen(false);
              }}
              size="lg"
            >
              <Download className="h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

