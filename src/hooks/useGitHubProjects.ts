import { useState, useEffect } from 'react';
import { config } from '@/lib/config';

/**
 * GitHub Repository interface with comprehensive type safety
 */
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  private: boolean;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
}

/**
 * Hook return type interface
 */
interface UseGitHubProjectsReturn {
  projects: GitHubRepo[];
  loading: boolean;
  error: string | null;
  totalProjects: number;
  allProjects: GitHubRepo[]; // All repos without filtering
}

/**
 * Custom hook to fetch and manage GitHub projects
 * Returns ALL repositories from GitHub without heavy filtering
 * @returns {UseGitHubProjectsReturn} Project data, loading state, and error handling
 */
export const useGitHubProjects = (): UseGitHubProjectsReturn => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Basic filtering - only exclude private repos and profile readme
   * @param {GitHubRepo[]} repos - Raw repository data from GitHub API
   * @returns {GitHubRepo[]} Lightly filtered repositories
   */
  const basicFilter = (repos: GitHubRepo[]): GitHubRepo[] => {
    try {
      let filteredRepos = [...repos];

      // Exclude private repositories (keep everything else)
      filteredRepos = filteredRepos.filter(repo => !repo.private);

      // Filter out repositories containing username (like profile readme)
      if (config.github?.username) {
        filteredRepos = filteredRepos.filter(repo => 
          !repo.name.toLowerCase().includes(config.github.username.toLowerCase())
        );
      }

      // Sort by updated date (most recent first)
      filteredRepos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

      return filteredRepos;
    } catch (error) {
      console.error('Error filtering projects:', error);
      return repos;
    }
  };

  /**
   * Fetch ALL projects from GitHub API with comprehensive error handling
   */
  useEffect(() => {
    const fetchProjects = async (): Promise<void> => {
      try {
        // Validate GitHub configuration
        if (!config.github?.username) {
          throw new Error('GitHub username not configured');
        }

        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${config.github.username}/repos?sort=updated&per_page=100&type=all`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'User-Agent': `${config.name} Portfolio`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`GitHub user '${config.github.username}' not found`);
          } else if (response.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
          } else {
            throw new Error(`Failed to fetch repositories: ${response.status} ${response.statusText}`);
          }
        }

        const data: GitHubRepo[] = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format from GitHub API');
        }

        setProjects(data);
        
        console.log(`✅ Successfully fetched ${data.length} repositories from GitHub`);
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred while fetching GitHub projects';
        console.error('GitHub API Error:', errorMessage);
        setError(errorMessage);
        
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if GitHub username is configured
    if (config.github?.username) {
      fetchProjects();
    } else {
      console.warn('⚠️ GitHub username not configured, skipping GitHub API fetch');
      setLoading(false);
    }
  }, []);

  // Apply basic filtering to show almost all repos
  const allProjects = basicFilter(projects);

  return {
    projects,
    loading,
    error,
    totalProjects: projects.length,
    allProjects, // All repos with minimal filtering
  };
};
