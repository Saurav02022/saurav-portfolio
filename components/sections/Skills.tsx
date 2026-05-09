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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tools I have used recently in production-facing work — not a full catalogue of everything I could learn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {categories.map(([categoryName, technologies]) => (
            <Card key={categoryName} className="flex flex-col h-full border-muted transition-colors duration-200 hover:border-primary/20">
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
                        className="flex items-center gap-1.5 px-3 py-1.5 transition-colors duration-200 hover:bg-muted/90"
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

