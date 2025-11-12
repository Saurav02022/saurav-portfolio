import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TECH_STACK_BY_CATEGORY } from '@/lib/tech-stack';
import { Sparkles } from 'lucide-react';

export function Skills() {
  // Convert the tech stack object to an array of categories
  const categories = Object.entries(TECH_STACK_BY_CATEGORY);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications with AI-powered productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {categories.map(([categoryName, technologies]) => (
            <Card key={categoryName} className="flex flex-col h-full hover:shadow-lg transition-shadow border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{categoryName}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <Badge 
                        key={tech.name} 
                        variant="secondary"
                        className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <IconComponent className="h-4 w-4" />
                        <span className="text-xs">{tech.name}</span>
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

