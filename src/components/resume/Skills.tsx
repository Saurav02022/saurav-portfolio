
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
      category: "Agile Workflow",
      skills: ["Scrum", "Sprint Planning", "Code Reviews", "Pair Programming"]
    },
    {
      category: "AI Productivity Tools",
      skills: ["Cursor AI", "ChatGPT", "Claude"]
    },
    {
      category: "Soft Skills",
      skills: ["Team Collaboration", "Communication", "Time Management", "Ownership", "Problem Solving"]
    }
  ];

  return (
    <section className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary/20 pb-2">
        Technical Skills
      </h2>
      <div className="grid gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-card rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
            <h3 className="font-bold text-primary mb-3">{category.category}:</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
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
