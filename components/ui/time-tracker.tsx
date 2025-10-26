"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Clock, X, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TimeTracker() {
  const [seconds, setSeconds] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const trackerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (trackerRef.current) {
      const rect = trackerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return {
      hours: hours > 0 ? `${hours}h` : '',
      minutes: `${minutes}m`,
      seconds: `${secs}s`,
    };
  };

  if (!isVisible) return null;

  const time = formatTime(seconds);

  const style = position.x === 0 && position.y === 0
    ? { bottom: '24px', right: '24px' }
    : { left: `${position.x}px`, top: `${position.y}px` };

  return (
    <div
      ref={trackerRef}
      className={`fixed z-50 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
        isDragging ? 'cursor-grabbing' : ''
      }`}
      style={{
        ...style,
        transition: isDragging ? 'none' : 'all 0.2s ease-out',
        userSelect: 'none',
      }}
    >
      <div className={`bg-card border border-border rounded-2xl shadow-lg backdrop-blur-sm ${
        isDragging ? 'shadow-2xl scale-105' : ''
      } transition-all duration-200`}>
        <div className="flex items-center gap-4 px-6 py-4">
          <div
            className="flex items-center gap-3 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
          >
            <div className="p-2 rounded-full bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                Time on site
                <Move className="h-3 w-3 opacity-50" />
              </p>
              <div className="flex items-center gap-1 text-2xl font-bold tabular-nums">
                {time.hours && <span>{time.hours}</span>}
                <span>{time.minutes}</span>
                <span>{time.seconds}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

