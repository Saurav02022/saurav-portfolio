"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Activity, Code2 } from 'lucide-react';

export function CodingTime() {
  // Demo data - replace with real data from WakaTime or GitHub
  const stats = {
    totalTime: '5h 7m',
    sessions: 3,
    lastActivity: '1:02:19 AM',
    status: 'Active'
  };

  return (
    <section id="coding-activity" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Coding Activity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Real-time insights into my development workflow
          </p>
          <p className="text-sm text-muted-foreground">
            Note: Currently showing demo data. Will be integrated with WakaTime or GitHub activity tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-3xl">{stats.totalTime}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-2">
              <CardDescription>Total Time Today</CardDescription>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-3xl">{stats.sessions}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-2">
              <CardDescription>Active Sessions</CardDescription>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <Activity className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="flex justify-center mb-2">
                <Badge variant="secondary">{stats.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-center pt-2">
              <CardDescription>Last Activity: {stats.lastActivity}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

