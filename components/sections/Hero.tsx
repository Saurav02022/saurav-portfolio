"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Code, Globe, MapPin, Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { buildTenureLabel } from "@/lib/career-tenure";

interface HeroProps {
  careerStartIso: string | null;
}

export function Hero({ careerStartIso }: HeroProps) {
  const { personal, social } = portfolioData;
  /** Only set after mount so SSR and first client paint match (avoids hydration mismatch). */
  const [tenureLabel, setTenureLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!careerStartIso) {
      setTenureLabel(null);
      return;
    }
    const tick = () => {
      setTenureLabel(buildTenureLabel(careerStartIso, new Date()));
    };
    tick();
    const id = window.setInterval(tick, 1_000);
    return () => window.clearInterval(id);
  }, [careerStartIso]);

  const handleSeeWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenResume = () => {
    window.open(personal.resumeUrl, "_blank");
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      case "code":
        return <Code className="h-5 w-5" />;
      case "globe":
        return <Globe className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/40 to-background">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.556_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.556_0_0/0.06)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,oklch(0.985_0_0/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.985_0_0/0.05)_1px,transparent_1px)]"
        aria-hidden
      />
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <div className="container mx-auto px-4 pb-16 pt-24 md:pb-24 md:pt-28">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {personal.name}
            </h1>

          <p className="text-xl font-medium text-muted-foreground md:text-2xl">
            {personal.title}
          </p>

          <p className="text-base leading-relaxed text-muted-foreground md:text-lg max-w-prose mx-auto text-left sm:text-center">
            {personal.introLine}
          </p>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/80 px-2.5 py-1">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                {personal.location}
              </span>
              <span className="rounded-md border border-border bg-card/80 px-2.5 py-1">
                Open to remote roles
              </span>
            </div>
            {tenureLabel ? (
              <div className="w-full max-w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:auto] [scrollbar-width:thin] flex justify-center">
                <span
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-card/80 px-2.5 py-1.5 text-left text-xs leading-snug md:text-sm"
                  aria-live="polite"
                  title={tenureLabel}
                >
                  <Briefcase className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                  <span className="tabular-nums">{tenureLabel}</span>
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <Button onClick={handleSeeWork} size="lg">
              See work
            </Button>

            <Button onClick={handleOpenResume} variant="outline" size="lg">
              Open resume
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {social.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className="transition-colors duration-200"
                asChild
              >
                <a
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-6 border-t border-border/60">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">
              Core stack
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {personal.heroCoreStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground font-mono md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
