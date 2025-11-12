/**
 * Centralized date formatting utilities
 * Provides consistent date formatting across the application
 */

/**
 * Format date in short format (e.g., "Jan 2024")
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 * @example
 * formatDateShort("2024-01-15") // "Jan 2024"
 */
export function formatDateShort(dateString: string | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
}

/**
 * Format date in long format (e.g., "January 15, 2024")
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 * @example
 * formatDateLong("2024-01-15") // "January 15, 2024"
 */
export function formatDateLong(dateString: string | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format date in full format (e.g., "Jan 15, 2024")
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 * @example
 * formatDateFull("2024-01-15") // "Jan 15, 2024"
 */
export function formatDateFull(dateString: string | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Calculate duration between two dates
 * @param startDate - Start date string
 * @param endDate - End date string or null for current date
 * @returns Human-readable duration string
 * @example
 * calculateDuration("2023-01-01", "2024-06-01") // "1 year 5 months"
 */
export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  if (years === 0 && months === 0) {
    return 'Less than a month';
  }
  
  const yearText = years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '';
  const monthText = months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : '';
  
  return [yearText, monthText].filter(Boolean).join(' ');
}

/**
 * Get reading time text for blog articles
 * @param minutes - Reading time in minutes
 * @returns Formatted reading time string
 * @example
 * getReadingTime(5) // "5 min read"
 */
export function getReadingTime(minutes: number): string {
  if (minutes < 1) return 'Less than a minute';
  if (minutes === 1) return '1 minute read';
  return `${minutes} min read`;
}

