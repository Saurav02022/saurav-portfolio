"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Clock, Activity, Code2, TrendingUp } from 'lucide-react';
import type { WakaTimeStats } from '@/lib/wakatime-api';

// Constants for configuration
const TOP_LANGUAGES_LIMIT = 5;
const TOP_EDITORS_LIMIT = 3;
const TIME_RANGE = 'last_7_days' as const;

// Type alias for the data we work with
type WakaTimeData = WakaTimeStats['data'];

export function CodingTime() {
  const [stats, setStats] = useState<WakaTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWakaTimeStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/wakatime/stats?range=${TIME_RANGE}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data) {
        setStats(data.data);
      } else {
        const errorMessage = data.error || 'Invalid response format from server';
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.error('Error fetching WakaTime stats:', err);
      
      let errorMessage = 'Unable to load WakaTime stats';
      if (err instanceof Error) {
        if (err.message.includes('HTTP error')) {
          errorMessage = 'Failed to connect to server. Please try again later.';
        } else if (err.message.includes('fetch')) {
          errorMessage = 'Network error. Please check your connection.';
        } else {
          errorMessage = `Failed to load stats: ${err.message}`;
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWakaTimeStats();
  }, [fetchWakaTimeStats]);

  const topLanguages = useMemo((): Array<{ name: string; percent: number; text: string }> => {
    if (!stats || !stats.languages) return [];
    return stats.languages.slice(0, TOP_LANGUAGES_LIMIT).map((lang) => ({
      name: lang.name,
      percent: lang.percent,
      text: lang.text,
    }));
  }, [stats]);

  const topEditors = useMemo((): Array<{ name: string; percent: number; text: string }> => {
    if (!stats || !stats.editors) return [];
    return stats.editors.slice(0, TOP_EDITORS_LIMIT).map((editor) => ({
      name: editor.name,
      percent: editor.percent,
      text: editor.text,
    }));
  }, [stats]);

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

            {/* Languages & Editors Skeleton */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((j) => (
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

            {/* Languages & Editors */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {/* Top Languages */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Top Languages</CardTitle>
                  <CardDescription>Most used programming languages in the last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topLanguages.length > 0 ? (
                      topLanguages.map((lang) => (
                        <div key={lang.name} className="space-y-2">
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
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        No language data available
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Top Editors */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Development Tools</CardTitle>
                  <CardDescription>Most used code editors and IDEs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topEditors.length > 0 ? (
                      topEditors.map((editor) => (
                        <div key={editor.name} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{editor.name}</span>
                            <span className="text-muted-foreground">{editor.text}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${editor.percent}%` }}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        No editor data available
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

