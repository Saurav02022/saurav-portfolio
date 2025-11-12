/**
 * Application-wide constants
 * Centralized configuration for cache times, API limits, and reusable values
 */

/**
 * Cache durations in seconds for ISR (Incremental Static Regeneration)
 */
export const CACHE_TIMES = {
  /** GitHub API - 1 hour (3600 seconds) */
  GITHUB_REPOS: 3600,
  /** Dev.to API - 1 hour (3600 seconds) */
  DEVTO_ARTICLES: 3600,
  /** Short cache - 5 minutes (300 seconds) */
  SHORT: 300,
  /** Long cache - 24 hours (86400 seconds) */
  LONG: 86400,
} as const;

/**
 * API request limits to prevent abuse and optimize performance
 */
export const API_LIMITS = {
  /** Maximum number of projects to fetch */
  MAX_PROJECTS: 10,
  /** Maximum number of blog articles to fetch */
  MAX_ARTICLES: 6,
  /** Default number of projects to display */
  DEFAULT_PROJECTS: 3,
  /** Default number of articles to display */
  DEFAULT_ARTICLES: 6,
} as const;

/**
 * Animation and UI timing constants (in milliseconds)
 */
export const TIMING = {
  /** Debounce delay for scroll events */
  SCROLL_DEBOUNCE: 10,
  /** Smooth scroll animation duration */
  SCROLL_DURATION: 500,
  /** Navbar scroll threshold in pixels */
  NAVBAR_SCROLL_THRESHOLD: 20,
} as const;

/**
 * External API base URLs
 */
export const API_BASE_URLS = {
  GITHUB: 'https://api.github.com',
  DEVTO: 'https://dev.to/api',
} as const;

