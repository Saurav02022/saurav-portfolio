"use client";

import React from 'react';
import { PRIMARY_TECH_STACK } from '@/lib/tech-stack';

/**
 * TechStackGrid component displays tech stack icons in a clean, static grid
 * Simple, non-scrolling display following KISS principle
 */
export function TechStackGrid(): React.ReactElement {
  return (
    <div className="mt-12 w-full" aria-label="Tech stack showcase">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
        {PRIMARY_TECH_STACK.map((tech, index) => {
          const IconComponent = tech.icon;
          
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              aria-label={tech.name}
              title={tech.name}
            >
              <IconComponent 
                className="h-8 w-8 sm:h-10 sm:w-10 text-foreground" 
                aria-hidden="true"
              />
              <span className="text-[10px] sm:text-xs font-medium text-muted-foreground text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

