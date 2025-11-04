"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Clock, Move } from 'lucide-react';

export function TimeTracker() {
  const [seconds, setSeconds] = useState(0);
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

  const getClientCoordinates = (e: MouseEvent | TouchEvent) => {
    if ('touches' in e) {
      return {
        clientX: e.touches[0]?.clientX ?? 0,
        clientY: e.touches[0]?.clientY ?? 0,
      };
    }
    return {
      clientX: e.clientX,
      clientY: e.clientY,
    };
  };

  const handleStart = (clientX: number, clientY: number) => {
    if (trackerRef.current) {
      const rect = trackerRef.current.getBoundingClientRect();
      setDragOffset({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    if (touch) {
      handleStart(touch.clientX, touch.clientY);
    }
  };

  const constrainPosition = (x: number, y: number) => {
    if (!trackerRef.current) return { x, y };

    const rect = trackerRef.current.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;

    return {
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY)),
    };
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) {
        const { clientX, clientY } = getClientCoordinates(e);
        const newPosition = constrainPosition(
          clientX - dragOffset.x,
          clientY - dragOffset.y
        );
        setPosition(newPosition);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
      document.addEventListener('touchcancel', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
      document.removeEventListener('touchcancel', handleEnd);
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
        touchAction: 'none',
      }}
    >
      <div className={`bg-card border border-border rounded-2xl shadow-lg backdrop-blur-sm ${
        isDragging ? 'shadow-2xl scale-105' : ''
      } transition-all duration-200`}>
        <div className="flex items-center gap-3 px-6 py-4">
          <div
            className="flex items-center gap-3 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
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
        </div>
      </div>
    </div>
  );
}

