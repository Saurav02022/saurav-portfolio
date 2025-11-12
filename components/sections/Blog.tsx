"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink, Heart, MessageCircle, Clock, TrendingUp } from 'lucide-react';
import { BlogPost } from '@/lib/types';
import { formatBlogDate, getReadingTime } from '@/lib/devto-api';
import Image from 'next/image';

interface BlogProps {
  username: string; // Required prop - must be provided from portfolio data
}

export function Blog({ username }: BlogProps) {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/devto/articles?username=${username}&per_page=6`);
      const data = await response.json();
      
      if (data.success) {
        setArticles(data.data);
      } else {
        setError('Failed to load articles');
      }
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and experiences from my development journey
          </p>
        </div>

        {error && (
          <div className="text-center mb-8">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={fetchArticles} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="flex flex-col h-full">
                <CardHeader>
                  <Skeleton className="h-48 w-full mb-4 rounded-lg" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : articles.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-12">
              {articles.map((article) => (
                <Card key={article.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    {article.cover_image && (
                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={article.cover_image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tag_list.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{getReadingTime(article.reading_time_minutes) || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{article.public_reactions_count || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{article.comments_count || 'N/A'}</span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mt-2">
  {article.published_at ? formatBlogDate(article.published_at) : 'Date unavailable'}
</div>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <Button
                      onClick={() => window.open(article.url, '_blank')}
                      className="w-full"
                      variant="outline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => window.open(`https://dev.to/${username}`, '_blank')}
                variant="outline"
                size="lg"
              >
                <ExternalLink className="h-4 w-4" />
                View All Articles on Dev.to
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No articles found. Start writing on Dev.to!
            </p>
            <Button
              onClick={() => window.open('https://dev.to/new', '_blank')}
              variant="outline"
            >
              Write Your First Article
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

