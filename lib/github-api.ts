import { GitHubRepo, Project } from './types';
import { portfolioData } from './portfolio-data';
import { API_BASE_URLS, CACHE_TIMES, API_LIMITS } from './constants';
import { formatDateFull } from './date-utils';

const MAX_LANGS = API_LIMITS.MAX_LANGUAGES_PER_PROJECT;

// Get GitHub username from centralized portfolio data
const GITHUB_USERNAME = portfolioData.social.find(s => s.name === 'GitHub')?.username || 'Saurav02022';
const GITHUB_API_BASE = API_BASE_URLS.GITHUB;

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        },
        next: { revalidate: CACHE_TIMES.GITHUB_REPOS } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and archived repos
    return repos.filter(repo => !repo.fork && !repo.archived);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/** Byte counts per language from GitHub (all languages in the repo, not only primary). */
export async function fetchRepoLanguages(
  owner: string,
  repo: string,
): Promise<string[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App',
        },
        next: { revalidate: CACHE_TIMES.GITHUB_REPOS },
      },
    );

    if (!response.ok) {
      return [];
    }

    const data: Record<string, number> = await response.json();
    const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, MAX_LANGS).map(([lang]) => lang);
  } catch (error) {
    console.error(`Error fetching languages for ${owner}/${repo}:`, error);
    return [];
  }
}

export function transformRepoToProject(
  repo: GitHubRepo,
  languagesFromApi: string[] = [],
): Project {
  const languages =
    languagesFromApi.length > 0
      ? languagesFromApi
      : repo.language
        ? [repo.language]
        : [];
  const primary = languages[0] ?? repo.language ?? 'Unknown';

  return {
    id: repo.id.toString(),
    name: repo.name,
    description: repo.description || 'No description available',
    html_url: repo.html_url,
    homepage: repo.homepage || undefined,
    language: primary,
    languages: languages.length > 0 ? languages : [primary],
    stargazers_count: repo.stargazers_count,
    topics: repo.topics || [],
    pushed_at: repo.pushed_at,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
  };
}

export async function getLatestProjects(
  count: number = API_LIMITS.DEFAULT_PROJECTS,
): Promise<Project[]> {
  const repos = await fetchGitHubRepos();
  
  // Sort by last pushed date and take the latest ones
  const sortedRepos = repos
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, count);

  const languagesPerRepo = await Promise.all(
    sortedRepos.map((r) => {
      const [owner, repoName] = r.full_name.split('/');
      return fetchRepoLanguages(owner, repoName);
    }),
  );

  return sortedRepos.map((repo, i) =>
    transformRepoToProject(repo, languagesPerRepo[i]),
  );
}

// Export formatDate for backwards compatibility
export { formatDateFull as formatDate };

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'C': '#555555',
    'HTML': '#e34c26',
    'CSS': '#1572B6',
    'React': '#61dafb',
    'Vue': '#4FC08D',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Swift': '#fa7343',
    'Kotlin': '#A97BFF',
    'Dart': '#00B4AB'
  };

  return colors[language] || '#8b5cf6';
}
