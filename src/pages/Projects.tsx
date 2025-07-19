import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Calendar, Code, Sparkles, RefreshCw, Clock, ExternalLink } from "lucide-react";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { config } from "@/lib/config";

/**
 * Projects Component - Clean project showcase with GitHub integration
 * Features responsive design and modern UI
 */
const Projects = () => {
  const { allProjects, loading, error, totalProjects } = useGitHubProjects();

  /**
   * Handle retry functionality with error handling
   */
  const handleRetry = (): void => {
    try {
      window.location.reload();
    } catch (error) {
      console.error('Error retrying projects fetch:', error);
    }
  };

  /**
   * Format date for better readability
   * @param {string} dateString - ISO date string
   * @returns {string} Formatted date
   */
  const formatDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Unknown';
    }
  };

  /**
   * Get language color for consistency
   * @param {string} language - Programming language
   * @returns {string} Tailwind color class
   */
  const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      React: 'bg-cyan-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
      CSS: 'bg-purple-500',
      HTML: 'bg-red-500',
      Vue: 'bg-green-400',
      PHP: 'bg-indigo-500',
      'C++': 'bg-blue-600',
      'C#': 'bg-purple-600',
      Go: 'bg-cyan-600',
      Rust: 'bg-orange-600',
      default: 'bg-gray-500'
    };
    return colors[language] || colors.default;
  };

  /**
   * Handle project card click with error handling
   * @param {string} githubUrl - GitHub repository URL
   * @param {string} projectName - Name of the project
   */
  const handleProjectClick = (githubUrl: string, projectName: string): void => {
    try {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening GitHub project:', error);
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.theme.backgrounds.projects} pointer-events-none`} />
        <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="mb-12 text-center space-y-4">
            <div className={`h-4 w-64 mx-auto rounded-full animate-pulse ${config.theme?.components?.badge || 'bg-muted'}`}></div>
            <div className="h-12 sm:h-16 bg-gradient-to-r from-muted via-muted/50 to-muted rounded-lg w-80 mx-auto animate-pulse"></div>
            <div className="h-6 bg-muted rounded-lg w-96 mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(config.github?.reposToShow || 12)].map((_, i) => (
              <div key={i} className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 animate-pulse`}>
                <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-muted rounded w-full mb-2"></div>
                <div className="h-4 bg-muted rounded w-2/3 mb-6"></div>
                <div className="flex gap-4 mb-4">
                  <div className="h-5 bg-muted rounded w-16"></div>
                  <div className="h-5 bg-muted rounded w-12"></div>
                  <div className="h-5 bg-muted rounded w-12"></div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="h-4 bg-muted rounded w-20"></div>
                  <div className="h-4 bg-muted rounded w-24"></div>
                </div>
                <div className="h-10 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-[calc(100vh-8rem)] relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.theme.backgrounds.projects} pointer-events-none`} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950/50 dark:to-orange-950/50 rounded-full border border-red-200/50 dark:border-red-500/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground/80">GitHub API Error</span>
              <Sparkles className="w-4 h-4 text-red-500 animate-pulse" />
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${config.theme.gradients.primary} bg-clip-text text-transparent mb-8`}>
              {config.pages.projects.title}
            </h1>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-8 text-center`}>
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Unable to Load Projects</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{error}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleRetry} className={`group ${config.theme?.components?.button?.primary || 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'}`}>
                  <RefreshCw className="mr-2 h-4 w-4 group-hover:animate-spin" />
                  Try Again
                </Button>
                {config.github?.username && (
                  <Button variant="outline" asChild>
                    <a href={`https://github.com/${config.github.username}`} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] relative">
      {/* Background Elements - Config-driven */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.theme.backgrounds.projects} pointer-events-none`} />
      <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 dark:from-green-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 space-y-12">
        
        {/* Header Section - Config-driven */}
        <section className="text-center space-y-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${config.theme?.components?.badge || 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full border border-blue-200/50 dark:border-blue-500/20'} backdrop-blur-sm`}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">
              {allProjects.length} Live Projects • {totalProjects} Total Repositories • GitHub Integrated
            </span>
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
          </div>
          
          <div className="space-y-6">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${config.theme.gradients.primary} bg-clip-text text-transparent`}>
              {config.pages.projects.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {config.pages.projects.description}
            </p>
          </div>
        </section>

        {/* Projects Grid - All Repos */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div 
                key={project.id} 
                className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer`}
                onClick={() => handleProjectClick(project.html_url, project.name)}
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1 text-nowrap">
                      {project.name}
                    </h3>
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
                  </div>
                  
                 
                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-sm">
                    {project.language && (
                      <span className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                        <span className="font-medium text-muted-foreground">{project.language}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-muted-foreground hover:text-yellow-500 transition-colors">
                      <Star className="w-3 h-3" />
                      {project.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors">
                      <GitFork className="w-3 h-3" />
                      {project.forks_count}
                    </span>
                  </div>

                  {/* Date Information */}
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>Created {formatDate(project.created_at)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>Updated {formatDate(project.updated_at)}</span>
                      </div>
                    </div>
                  </div>

                 
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full group/btn ${config.theme?.components?.button?.primary || 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} shadow-md hover:shadow-lg transition-all duration-300`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.html_url, project.name);
                    }}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {allProjects.length === 0 && (
            <div className="text-center py-16">
              <div className={`w-24 h-24 ${config.theme?.components?.card?.replace('shadow-xl', 'shadow-none') || 'bg-muted/50'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Code className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">No Projects Found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                No public repositories found. This might be due to API limits or configuration issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleRetry} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retry Loading
                </Button>
                {config.github?.username && (
                  <Button asChild>
                    <a href={`https://github.com/${config.github.username}`} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Profile on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* GitHub Integration Info */}
        <section className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 text-center max-w-4xl mx-auto`}>
          <h3 className="text-lg font-semibold text-foreground mb-2">Live GitHub Integration</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This page automatically fetches and displays my latest repositories from GitHub. 
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>📊 Total: {totalProjects} repos</span>
            <span>🔍 Showing: {allProjects.length} projects</span>
            <span>🔗 Live GitHub API</span>
          </div>
        </section>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400/30 rounded-full animate-bounce delay-1000"></div>
    </div>
  );
};

export default Projects;
