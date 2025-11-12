import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';
import { formatDateShort, calculateDuration } from '@/lib/date-utils';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building high-performance applications with measurable impact
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experience.map((exp) => (
            <Card 
              key={exp.id} 
              className="hover:shadow-lg transition-shadow border-l-4 border-l-primary/40 overflow-hidden"
            >
              <CardHeader className="space-y-4 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold tracking-tight">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {!exp.endDate && (
                    <Badge variant="default" className="self-start whitespace-nowrap">
                      Current Role
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>
                      {formatDateShort(exp.startDate)} - {exp.endDate ? formatDateShort(exp.endDate) : 'Present'}
                      <span className="mx-2">•</span>
                      <span className="font-medium">{calculateDuration(exp.startDate, exp.endDate)}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>

              <Separator />

              <CardContent className="pt-6 space-y-6">
                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                        <span className="text-sm leading-relaxed">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="px-3 py-1 text-xs font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

