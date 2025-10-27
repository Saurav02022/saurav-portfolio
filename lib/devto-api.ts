import { BlogPost } from './types';

const DEV_TO_API_BASE = 'https://dev.to/api';

/**
 * Fetch articles from Dev.to for a specific user
 * @param username - Dev.to username
 * @param perPage - Number of articles to fetch (default: 6)
 * @returns Promise with array of blog posts
 */
export async function fetchDevToArticles(
  username: string,
  perPage: number = 6
): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${DEV_TO_API_BASE}/articles?username=${username}&per_page=${perPage}`,
      {
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Dev.to API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Dev.to articles:', error);
    return [];
  }
}

/**
 * Fetch a single article from Dev.to
 * @param articleId - Dev.to article ID
 * @returns Promise with blog post details
 */
export async function fetchDevToArticle(articleId: number): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${DEV_TO_API_BASE}/articles/${articleId}`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      throw new Error(`Dev.to API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Dev.to article:', error);
    return null;
  }
}

/**
 * Format date for display
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Get reading time text
 * @param minutes - Reading time in minutes
 * @returns Formatted reading time string
 */
export function getReadingTime(minutes: number): string {
  if (minutes < 1) return 'Less than a minute';
  if (minutes === 1) return '1 minute read';
  return `${minutes} min read`;
}

