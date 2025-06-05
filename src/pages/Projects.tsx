
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";

const Projects = () => {
  const { projects, loading, error } = useGitHubProjects();

  if (loading) {
    return (
      <Layout>
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-muted rounded w-full mb-2"></div>
                <div className="h-3 bg-muted rounded w-2/3 mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                </div>
                <div className="h-8 bg-muted rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Projects</h1>
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Failed to load projects: {error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Github className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4 min-h-[3rem]">
                  {project.description || "No description available"}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  {project.language && (
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      {project.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {project.forks_count}
                  </span>
                </div>
                
                {project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
