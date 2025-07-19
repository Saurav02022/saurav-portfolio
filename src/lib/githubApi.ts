import { config } from "./config";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
  isPinned?: boolean;
}

interface PinnedRepoNode {
  name: string;
}

// Fetch pinned repositories using GitHub's GraphQL API
async function fetchPinnedRepos(username: string): Promise<string[]> {
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Note: This is a read-only public data query, so we're using a minimal approach
        // For production, you should use a proper authentication token
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "${username}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                  }
                }
              }
            }
          }
        `
      })
    });

    if (!response.ok) {
      // If GraphQL fails, we'll fall back to the config's pinned repos
      console.warn('Failed to fetch pinned repos from GitHub GraphQL API');
      return config.github.pinnedRepos || [];
    }

    const data = await response.json();
    
    // If we got valid data, extract the repo names
    if (data?.data?.user?.pinnedItems?.nodes) {
      return data.data.user.pinnedItems.nodes.map((node: PinnedRepoNode) => node.name);
    }
    
    return config.github.pinnedRepos || [];
  } catch (error) {
    console.warn('Error fetching pinned repos:', error);
    return config.github.pinnedRepos || [];
  }
}

export async function fetchGitHubRepos(): Promise<{
  pinnedRepos: GitHubRepo[];
  otherRepos: GitHubRepo[];
}> {
  const { username, reposToShow, excludeForks } = config.github;
  
  try {
    // Fetch pinned repos first
    const pinnedRepoNames = await fetchPinnedRepos(username);
    
    // Fetch all public repositories for the user
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    let repos: GitHubRepo[] = await response.json();
    
    // Filter out forks if specified
    if (excludeForks) {
      repos = repos.filter(repo => !repo.fork);
    }
    
    // Mark pinned repositories
    repos = repos.map(repo => ({
      ...repo,
      isPinned: pinnedRepoNames.includes(repo.name)
    }));
    
    // Separate pinned and other repositories
    const pinnedResults = repos.filter(repo => repo.isPinned);
    
    // Get remaining repos, excluding pinned ones, up to the limit
    const remainingLimit = Math.max(0, reposToShow - pinnedResults.length);
    const otherResults = repos
      .filter(repo => !repo.isPinned)
      .slice(0, remainingLimit);
    
    return {
      pinnedRepos: pinnedResults,
      otherRepos: otherResults
    };
    
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return {
      pinnedRepos: [],
      otherRepos: []
    };
  }
}

// Formats date to "Month DD, YYYY"
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
} 