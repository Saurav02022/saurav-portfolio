
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      name: "BigBasket Clone",
      url: "https://github.com/Saurav02022/BigBasket-Clone",
      techStack: "React, Redux, JavaScript, Chakra UI, OAuth, HTML/CSS",
      description: [
        "Developed a full-featured e-commerce app with dynamic product browsing, cart, and secure login.",
        "Designed responsive UI for seamless use across desktop and mobile."
      ]
    }
  ];

  return (
    <section className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-200 pb-2">
        Key Projects
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
              <Button variant="outline" size="sm" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-slate-600 mb-2"><strong>Tech Stack:</strong></p>
              <p className="text-sm text-slate-700">{project.techStack}</p>
            </div>
            
            <ul className="space-y-2">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
