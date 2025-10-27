"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '@/lib/types';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/github/projects');
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const gradients = [
    'from-purple-500 via-blue-500 to-cyan-500',
    'from-green-400 via-teal-500 to-green-600',
    'from-purple-600 via-pink-500 to-blue-500',
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Latest Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My most recent work - showcasing the latest 3 repositories with recent commits
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 flex-1" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto px-4">
              {projects.slice(0, 3).map((project) => (
                <Card key={project.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="line-clamp-1">{project.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{project.stargazers_count}</span>
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.language && (
                        <Badge variant="secondary">{project.language}</Badge>
                      )}
                      {project.topics.slice(0, 2).map((topic, idx) => (
                        <Badge key={idx} variant="outline">{topic}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="gap-2 mt-auto">
                    {project.homepage && (
                      <Button
                        onClick={() => window.open(project.homepage, '_blank')}
                        size="sm"
                        className="flex-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      onClick={() => window.open(project.html_url, '_blank')}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => window.open('https://github.com/Saurav02022?tab=repositories', '_blank')}
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

