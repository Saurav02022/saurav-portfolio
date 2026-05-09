"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink, Star, Folder } from "lucide-react";
import { Project } from "@/lib/types";
import { portfolioData } from "@/lib/portfolio-data";
import { API_LIMITS } from "@/lib/constants";

/** Fixed vertical slice for ~2 chip rows; overflow scrolls inside the panel. */
const TECH_STRIP_CLASSES =
  "h-[5rem] rounded-lg border border-border/50 bg-muted/25 p-2.5 dark:bg-muted/15";

const TECH_SCROLL_CLASSES =
  "flex max-h-full flex-wrap content-start gap-1.5 overflow-y-auto overflow-x-hidden overscroll-y-contain [-webkit-overflow-scrolling:touch] pr-0.5 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border/80";

function ProjectRepoCard({ project }: { project: Project }) {
  const langBadges =
    project.languages?.length
      ? project.languages
      : project.language && project.language !== "Unknown"
        ? [project.language]
        : [];
  const langLower = new Set(langBadges.map((l) => l.toLowerCase()));
  const topicBadges = project.topics.filter((t) => !langLower.has(t.toLowerCase()));

  return (
    <article>
      <Card
        className="group flex h-full flex-col gap-0 py-5 transition-[box-shadow,transform] duration-200 focus-within:ring-2 focus-within:ring-ring/50 focus-within:ring-offset-2 focus-within:ring-offset-background hover:-translate-y-0.5 hover:shadow-lg"
      >
        <CardHeader className="block space-y-0 px-6 pb-3 pt-0">
          <div className="flex items-start justify-between gap-3">
            <CardTitle
              className="min-w-0 flex-1 font-semibold leading-snug tracking-tight text-sm sm:text-base md:text-[1.0625rem]"
              title={project.name}
            >
              <span className="block truncate">{project.name}</span>
            </CardTitle>
            {project.stargazers_count > 0 ? (
              <div
                className="flex shrink-0 items-center gap-1 rounded-md border border-border/60 bg-muted/20 px-2 py-0.5 text-xs tabular-nums text-muted-foreground"
                title={`${project.stargazers_count} stars on GitHub`}
              >
                <Star className="h-3.5 w-3.5 fill-amber-400/90 text-amber-400/90" aria-hidden />
                <span>{project.stargazers_count}</span>
              </div>
            ) : null}
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-0 pt-0">
          <div className={TECH_STRIP_CLASSES}>
            <div
              className={TECH_SCROLL_CLASSES}
              role="list"
              aria-label="Languages and topics for this repository"
            >
              {langBadges.map((lang) => (
                <Badge
                  key={lang}
                  variant="secondary"
                  className="shrink-0 border-transparent px-2 py-0.5 text-[11px] font-medium leading-none sm:text-xs"
                  role="listitem"
                >
                  {lang}
                </Badge>
              ))}
              {topicBadges.map((topic) => (
                <Badge
                  key={topic}
                  variant="outline"
                  className="shrink-0 border-border/70 bg-background/50 px-2 py-0.5 text-[11px] font-medium leading-none sm:text-xs"
                  role="listitem"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        {/* Absorbs leftover height so CTAs sit on the same baseline in every card. */}
        <div className="min-h-2 flex-1 basis-0" aria-hidden />

        <CardFooter className="mt-0 flex-none gap-2 px-6 pb-0 pt-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="flex-1 touch-manipulation"
            disabled={!project.homepage}
            title={
              project.homepage
                ? "Open live demo"
                : "No live demo URL is set on this GitHub repository"
            }
            aria-label={
              project.homepage
                ? `Open live demo for ${project.name}`
                : `Live demo not available for ${project.name}`
            }
            onClick={() =>
              project.homepage &&
              window.open(project.homepage, "_blank", "noopener,noreferrer")
            }
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            Live Demo
          </Button>
          <Button
            type="button"
            variant="default"
            size="sm"
            className="flex-1 touch-manipulation"
            aria-label={`Open ${project.name} on GitHub`}
            onClick={() =>
              window.open(project.html_url, "_blank", "noopener,noreferrer")
            }
          >
            <Github className="h-4 w-4 shrink-0" aria-hidden />
            Code
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}

function ProjectCardSkeleton() {
  return (
    <Card className="flex h-full flex-col gap-0 py-5">
      <CardHeader className="block space-y-0 px-6 pb-3 pt-0">
        <Skeleton className="h-5 w-4/5" />
      </CardHeader>
      <CardContent className="px-6 pb-0 pt-0">
        <div className={TECH_STRIP_CLASSES}>
          <div className={`${TECH_SCROLL_CLASSES} pointer-events-none`} aria-hidden>
            <Skeleton className="h-5 w-14 shrink-0" />
            <Skeleton className="h-5 w-20 shrink-0" />
            <Skeleton className="h-5 w-16 shrink-0" />
            <Skeleton className="h-5 w-[4.5rem] shrink-0" />
          </div>
        </div>
      </CardContent>
      <div className="min-h-2 flex-1 basis-0" aria-hidden />
      <CardFooter className="mt-0 gap-2 px-6 pb-0 pt-1">
        <Skeleton className="h-9 flex-1" />
        <Skeleton className="h-9 flex-1" />
      </CardFooter>
    </Card>
  );
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/github/projects");
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const githubProfile = portfolioData.social.find((s) => s.name === "GitHub");
  const githubUrl = githubProfile?.url || "https://github.com/saurav02022";

  return (
    <section id="projects" className="py-24" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center">
            <Folder className="h-6 w-6 text-primary" aria-hidden />
          </div>
          <h2
            id="projects-heading"
            className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Latest Projects
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            My most recent work — the latest {API_LIMITS.DEFAULT_PROJECTS} public repositories by
            recent commits.
          </p>
        </div>

        {loading ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: API_LIMITS.DEFAULT_PROJECTS }, (_, i) => i + 1).map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, API_LIMITS.DEFAULT_PROJECTS).map((project) => (
                <ProjectRepoCard key={project.id} project={project} />
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => window.open(`${githubUrl}?tab=repositories`, "_blank")}
                variant="outline"
                size="lg"
              >
                <ExternalLink className="h-4 w-4" />
                View All Repositories
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
