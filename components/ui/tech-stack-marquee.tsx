"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';
import { PRIMARY_TECH_STACK } from '@/lib/tech-stack';

/**
 * TechStackMarquee component displays an infinite scrolling carousel of tech stack icons
 * Uses shared PRIMARY_TECH_STACK constant for consistency across the portfolio
 * Prioritized by market demand and strategic positioning for 2024-2025
 */
export function TechStackMarquee(): React.ReactElement {
  return (
    <div className="mt-12 w-full overflow-hidden" aria-label="Tech stack showcase">
      <Marquee
        gradient={true}
        gradientColor="hsl(var(--background))"
        gradientWidth={50}
        speed={40}
        pauseOnHover={true}
      >
        {PRIMARY_TECH_STACK.map((tech, index) => {
          const IconComponent = tech.icon;
          
          return (
            <div
              key={`${tech.name}-${index}`}
              className="mx-8 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              aria-label={tech.name}
            >
              <IconComponent 
                className="h-10 w-10 text-foreground" 
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
