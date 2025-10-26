import { Octokit } from '@octokit/rest';

export interface GitHubStats {
  totalCommits: number;
  totalRepos: number;
  languageStats: {
    name: string;
    bytes: number;
    percentage: number;
  }[];
  contributionData: {
    date: string;
    count: number;
  }[];
  streakData: {
    current: number;
    longest: number;
  };
}

export interface CommitActivity {
  week: number;
  total: number;
  days: number[];
}

const GITHUB_USERNAME = 'Saurav02022';

// Initialize Octokit (GitHub API client)
const octokit = new Octokit({
  // Note: For production, you might want to add a personal access token
  // auth: process.env.GITHUB_TOKEN,
});

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    // Fetch user repositories
    const { data: repos } = await octokit.rest.repos.listForUser({
      username: GITHUB_USERNAME,
      type: 'owner',
      sort: 'updated',
      per_page: 100,
    });

    // Filter out forks and get language data
    const ownRepos = repos.filter(repo => !repo.fork);
    
    // Fetch language statistics
    const languageStats = await fetchLanguageStats(ownRepos);
    
    // Fetch commit activity
    const commitActivity = await fetchCommitActivity(ownRepos.slice(0, 10)); // Limit to avoid rate limiting
    
    // Calculate total commits (approximation)
    const totalCommits = commitActivity.reduce((sum, week) => sum + week.total, 0);
    
    // Generate contribution data (last 365 days)
    const contributionData = generateContributionData(commitActivity);
    
    // Calculate streak data
    const streakData = calculateStreakData(contributionData);

    return {
      totalCommits,
      totalRepos: ownRepos.length,
      languageStats,
      contributionData,
      streakData,
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    // Return fallback data
    return getFallbackStats();
  }
}

async function fetchLanguageStats(repos: any[]) {
  const languageMap = new Map<string, number>();
  
  // Fetch languages for each repo (limit to avoid rate limiting)
  for (const repo of repos.slice(0, 20)) {
    try {
      const { data: languages } = await octokit.rest.repos.listLanguages({
        owner: GITHUB_USERNAME,
        repo: repo.name,
      });
      
      Object.entries(languages).forEach(([lang, bytes]) => {
        languageMap.set(lang, (languageMap.get(lang) || 0) + (bytes as number));
      });
    } catch (error) {
      // Skip repos with language fetch errors
      continue;
    }
  }
  
  const totalBytes = Array.from(languageMap.values()).reduce((sum, bytes) => sum + bytes, 0);
  
  return Array.from(languageMap.entries())
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: Math.round((bytes / totalBytes) * 100),
    }))
    .sort((a, b) => b.bytes - a.bytes)
    .slice(0, 8); // Top 8 languages
}

async function fetchCommitActivity(repos: any[]): Promise<CommitActivity[]> {
  const allActivity: CommitActivity[] = [];
  
  for (const repo of repos) {
    try {
      const { data: activity } = await octokit.rest.repos.getCommitActivityStats({
        owner: GITHUB_USERNAME,
        repo: repo.name,
      });
      
      if (activity && Array.isArray(activity)) {
        allActivity.push(...activity);
      }
    } catch (error) {
      // Skip repos with activity fetch errors
      continue;
    }
  }
  
  return allActivity;
}

function generateContributionData(commitActivity: CommitActivity[]) {
  const contributions: { date: string; count: number }[] = [];
  const now = new Date();
  
  // Generate last 365 days
  for (let i = 364; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Find matching commit activity for this date
    const weekStart = getWeekStart(date);
    const dayOfWeek = date.getDay();
    
    const weekActivity = commitActivity.find(activity => {
      const activityDate = new Date(activity.week * 1000);
      return activityDate.getTime() === weekStart.getTime();
    });
    
    const count = weekActivity ? weekActivity.days[dayOfWeek] || 0 : 0;
    
    contributions.push({
      date: date.toISOString().split('T')[0],
      count,
    });
  }
  
  return contributions;
}

function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day;
  return new Date(d.setDate(diff));
}

function calculateStreakData(contributions: { date: string; count: number }[]) {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  
  // Calculate from most recent backwards
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].count > 0) {
      tempStreak++;
      if (i === contributions.length - 1 || currentStreak === 0) {
        currentStreak = tempStreak;
      }
    } else {
      if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
      }
      if (i === contributions.length - 1) {
        currentStreak = 0;
      }
      tempStreak = 0;
    }
  }
  
  return {
    current: currentStreak,
    longest: Math.max(longestStreak, tempStreak),
  };
}

function getFallbackStats(): GitHubStats {
  return {
    totalCommits: 1200,
    totalRepos: 25,
    languageStats: [
      { name: 'TypeScript', bytes: 450000, percentage: 35 },
      { name: 'JavaScript', bytes: 380000, percentage: 30 },
      { name: 'HTML', bytes: 200000, percentage: 15 },
      { name: 'CSS', bytes: 150000, percentage: 12 },
      { name: 'Python', bytes: 100000, percentage: 8 },
    ],
    contributionData: [],
    streakData: {
      current: 15,
      longest: 45,
    },
  };
}
