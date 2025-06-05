
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BigBasket Clone",
      description: "A template for a e-commerce website",
      image: "/lovable-uploads/a50011ee-b61c-4ab3-ad6b-6718ac3b30d8.png",
      technologies: ["React", "Redux", "JavaScript", "Chakra UI", "OAuth"],
      githubUrl: "https://github.com/Saurav02022/BigBasket-Clone",
      liveUrl: "#"
    },
    {
      title: "Portfolio Website", 
      description: "A modern portfolio website built with React",
      image: "/lovable-uploads/a50011ee-b61c-4ab3-ad6b-6718ac3b30d8.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/Saurav02022",
      liveUrl: "https://saurav02022.github.io"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">P</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
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
