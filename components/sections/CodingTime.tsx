"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Clock, Activity, Code2, TrendingUp } from 'lucide-react';

interface WakaTimeData {
  total_seconds: number;
  daily_average: number;
  human_readable_total: string;
  human_readable_daily_average: string;
  languages: Array<{
    name: string;
    percent: number;
    text: string;
  }>;
  projects: Array<{
    name: string;
    percent: number;
    text: string;
  }>;
}

export function CodingTime() {
  const [stats, setStats] = useState<WakaTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWakaTimeStats();
  }, []);

  const fetchWakaTimeStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/wakatime/stats?range=last_7_days');
      const data = await response.json();
      
      if (data.success && data.data) {
        setStats(data.data);
      } else {
        setError('Unable to load WakaTime stats');
      }
    } catch (err) {
      console.error('Error fetching WakaTime stats:', err);
      setError('Unable to load WakaTime stats');
    } finally {
      setLoading(false);
    }
  };

  const getTopLanguages = () => {
    if (!stats || !stats.languages) return [];
    return stats.languages.slice(0, 5);
  };

  const getTopProjects = () => {
    if (!stats || !stats.projects) return [];
    return stats.projects.slice(0, 4);
  };

  return (
    <section id="coding-activity" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Coding Activity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights into my development workflow powered by WakaTime
          </p>
        </div>

        {error && (
          <div className="text-center mb-8">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={fetchWakaTimeStats} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        {loading ? (
          <div className="space-y-8">
            {/* Stats Cards Skeleton */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col h-full">
                  <CardHeader className="text-center pb-2">
                    <Skeleton className="h-12 w-12 mx-auto mb-4 rounded-full" />
                    <Skeleton className="h-8 w-24 mx-auto" />
                  </CardHeader>
                  <CardContent className="text-center pt-2">
                    <Skeleton className="h-4 w-32 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Languages & Projects Skeleton */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3].map((j) => (
                        <Skeleton key={j} className="h-4 w-full" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : stats ? (
          <div className="space-y-12">
            {/* Main Stats Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-3xl">
                    {stats.human_readable_daily_average || '0 secs'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-2">
                  <CardDescription>Daily Average (Last 7 Days)</CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Activity className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-3xl">
                    {stats.human_readable_total || '0 secs'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-2">
                  <CardDescription>Total Time (Last 7 Days)</CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-3xl">{stats.languages?.length || 0}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-2">
                  <CardDescription>Languages Used</CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Languages & Projects */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {/* Top Languages */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Top Languages</CardTitle>
                  <CardDescription>Most used programming languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {getTopLanguages().map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{lang.name}</span>
                          <span className="text-muted-foreground">{lang.text}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${lang.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Projects */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Top Projects</CardTitle>
                  <CardDescription>Most active projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {getTopProjects().length > 0 ? (
                      getTopProjects().map((project, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium truncate">{project.name}</span>
                            <span className="text-muted-foreground">{project.text}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${project.percent}%` }}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        No project data available
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WakaTime Badge */}
            <div className="text-center">
              <Badge variant="outline" className="text-xs">
                Powered by WakaTime
              </Badge>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No coding activity data available
            </p>
            <Button onClick={fetchWakaTimeStats} variant="outline">
              Retry
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

