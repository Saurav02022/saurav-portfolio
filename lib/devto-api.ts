import { BlogPost } from './types';
import { API_BASE_URLS, CACHE_TIMES } from './constants';
import { formatDateLong, getReadingTime as getReadingTimeUtil } from './date-utils';

const DEV_TO_API_BASE = API_BASE_URLS.DEVTO;

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
        next: { revalidate: CACHE_TIMES.DEVTO_ARTICLES } // Revalidate every hour
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
        next: { revalidate: CACHE_TIMES.DEVTO_ARTICLES }
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

// Export date utilities for backwards compatibility
export { formatDateLong as formatBlogDate };
export { getReadingTimeUtil as getReadingTime };

