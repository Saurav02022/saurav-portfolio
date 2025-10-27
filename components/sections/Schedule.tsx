"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Video } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Schedule() {
  const calendlyConfig = portfolioData.calendly;

  if (!calendlyConfig || !calendlyConfig.enabled) {
    return null; // Don't render if Calendly is not configured
  }

  const meetingType = calendlyConfig.meetingTypes?.[0] || {
    name: 'Quick Chat',
    duration: '30 min',
    url: calendlyConfig.url
  };

  return (
    <section id="schedule" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Schedule a Meeting
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project, explore collaboration opportunities, or just have a chat about tech
          </p>
        </div>

        {/* Meeting Card */}
        <div className="max-w-2xl mx-auto px-4">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Video className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">{meetingType.name}</CardTitle>
              <CardDescription className="text-lg">{meetingType.duration}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Book a time that works best for you. You'll receive a confirmation email with meeting details and a calendar invite.
              </p>
              
              <Button
                onClick={() => window.open(meetingType.url, '_blank')}
                size="lg"
                className="w-full max-w-md"
              >
                <ExternalLink className="h-5 w-5" />
                Schedule on Calendly
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto mt-12 px-4">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-center">What to Expect</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>You'll receive a confirmation email with meeting details and a calendar invite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>The meeting will be conducted via Google Meet or Zoom (link provided in confirmation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Feel free to reschedule if needed - just use the link in your confirmation email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>I typically respond within 24 hours if you have any questions before our meeting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Prefer email instead?
          </p>
          <Button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
          >
            Send me a message
          </Button>
        </div>
      </div>
    </section>
  );
}

