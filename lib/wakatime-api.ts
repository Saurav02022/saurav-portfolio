export interface WakaTimeStats {
  data: {
    total_seconds: number;
    daily_average: number;
    human_readable_total: string;
    human_readable_daily_average: string;
    languages: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
      hours: number;
      minutes: number;
    }>;
    projects: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
      hours: number;
      minutes: number;
    }>;
    editors: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
      hours: number;
      minutes: number;
    }>;
    operating_systems: Array<{
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      text: string;
      hours: number;
      minutes: number;
    }>;
  };
}

/**
 * Fetch WakaTime stats for a given time range
 * @param range - Time range: 'last_7_days', 'last_30_days', 'last_6_months', 'last_year'
 * @returns Promise with WakaTime stats
 */
export async function fetchWakaTimeStats(
  range: 'last_7_days' | 'last_30_days' | 'last_6_months' | 'last_year' = 'last_7_days'
): Promise<WakaTimeStats | null> {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    console.error('WakaTime API key not configured');
    return null;
  }

  try {
    // WakaTime API accepts the key directly without "Bearer" prefix for some endpoints
    // Try with Basic Auth format (base64 encoded)
    const base64Key = Buffer.from(apiKey).toString('base64');
    
    const response = await fetch(
      `https://wakatime.com/api/v1/users/current/stats/${range}`,
      {
        headers: {
          'Authorization': `Basic ${base64Key}`,
          'Content-Type': 'application/json'
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('WakaTime API Error Details:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        apiKeyPrefix: apiKey.substring(0, 10) + '...'
      });
      throw new Error(`WakaTime API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return null;
  }
}

/**
 * Format seconds to human readable time
 * @param seconds - Total seconds
 * @returns Formatted time string (e.g., "5h 30m")
 */
export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

/**
 * Get today's coding time (approximation from last 7 days average)
 * @param stats - WakaTime stats
 * @returns Today's time in human readable format
 */
export function getTodayTime(stats: WakaTimeStats | null): string {
  if (!stats) return '0h 0m';
  return stats.data.human_readable_daily_average || '0h 0m';
}

/**
 * Get total time for the period
 * @param stats - WakaTime stats
 * @returns Total time in human readable format
 */
export function getTotalTime(stats: WakaTimeStats | null): string {
  if (!stats) return '0h 0m';
  return stats.data.human_readable_total || '0h 0m';
}

/**
 * Get top languages with percentages
 * @param stats - WakaTime stats
 * @param limit - Number of languages to return
 * @returns Array of top languages
 */
export function getTopLanguages(stats: WakaTimeStats | null, limit: number = 5) {
  if (!stats || !stats.data.languages) return [];
  return stats.data.languages.slice(0, limit);
}

/**
 * Get top projects
 * @param stats - WakaTime stats
 * @param limit - Number of projects to return
 * @returns Array of top projects
 */
export function getTopProjects(stats: WakaTimeStats | null, limit: number = 5) {
  if (!stats || !stats.data.projects) return [];
  return stats.data.projects.slice(0, limit);
}

