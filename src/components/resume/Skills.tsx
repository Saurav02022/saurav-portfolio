
export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript"]
    },
    {
      category: "Frontend Technologies",
      skills: ["React", "Next.js", "React Native", "Vite", "Redux", "Context API", "Tailwind CSS", "Material UI", "Chakra UI", "Shadcn UI", "Internationalization (i18n)", "Progressive Web Apps (PWA)"]
    },
    {
      category: "UI Architecture & Design",
      skills: ["Atomic Design", "Responsive Design", "Accessibility", "Component Reusability"]
    },
    {
      category: "Backend & APIs",
      skills: ["Supabase", "Firebase", "RESTful APIs", "OAuth 2.0"]
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "Cypress", "React Testing Library"]
    },
    {
      category: "DevOps & Deployment",
      skills: ["Docker", "Vercel", "Netlify", "Heroku", "CI/CD (GitHub Actions)"]
    },
    {
      category: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "JIRA"]
    },
    {
      category: "AI Productivity Tools",
      skills: ["Cursor AI", "ChatGPT", "Claude"]
    }
  ];

  return (
    <section className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-200 pb-2">
        Technical Skills
      </h2>
      <div className="grid gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-blue-600 mb-3">{category.category}:</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
