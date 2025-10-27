"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Education() {
  const { education } = portfolioData;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and professional training
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {education.map((edu) => (
            <Card key={edu.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>
                      <GraduationCap className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="line-clamp-1">{edu.institution}</CardTitle>
                    <CardDescription>
                      <MapPin className="h-3 w-3 inline" /> {edu.location}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 grow">
                <div>
                  <div className="font-medium line-clamp-1">{edu.degree}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">{edu.field}</div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>

                {edu.description && (
                  <p className="text-sm text-muted-foreground line-clamp-3">{edu.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

