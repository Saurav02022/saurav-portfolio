"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Video, ExternalLink, CheckCircle2, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Contact() {
  const { personal, calendly } = portfolioData;

  const meetingType = calendly?.meetingTypes?.[0] || {
    name: 'Quick Chat',
    duration: '30 min',
    url: calendly?.url
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Schedule a Meeting
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s discuss your project, explore collaboration opportunities, or just have a chat about tech
          </p>
        </div>

        {/* Meeting Card */}
        {calendly && calendly.enabled ? (
          <div className="max-w-2xl mx-auto px-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Video className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{meetingType.name}</CardTitle>
                <CardDescription className="text-lg">{meetingType.duration}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground">
                  Book a time that works best for you. You&apos;ll receive a confirmation email with meeting details and a calendar invite.
                </p>

                {/* Features */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <h3 className="font-semibold text-center mb-4">What to Expect</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Virtual meeting via Google Meet or Zoom</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Instant calendar invite and confirmation email</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Perfect for project discussions, collaborations, or tech chats</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Easy to reschedule using the link in your confirmation email</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => window.open(meetingType.url, '_blank')}
                  size="lg"
                  className="w-full"
                >
                  <ExternalLink className="h-5 w-5" />
                  Book a Time Slot
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto px-4 text-center">
            <Card>
              <CardContent className="py-12">
                <p className="text-muted-foreground mb-4">
                  Scheduling is not currently available.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Alternative Contact */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Prefer email instead?
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {personal.email}
          </a>
        </div>
      </div>
    </section>
  );
}

