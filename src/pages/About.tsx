
import { Layout } from "@/components/layout/Layout";
import { Calendar, ExternalLink } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Next.js Developer",
      company: "Shikha Learning Labs Private Limited",
      companyUrl: "https://shikhaacademy.org/shikha-labs/",
      location: "Mumbai, India",
      period: "Nov 2024 -- Present",
      achievements: [
        "Led end-to-end development of 2 internal products, from requirement gathering to deployment, improving project execution and accelerating feature releases.",
        "Redesigned 2 internal projects with modern UI/UX, enhancing consistency and increasing user engagement by 20%.",
        "Developed a Progressive Web App for Central School Foundation, deployed as a proof of concept and tested with 50+ educators.",
        "Optimized frontend performance by reducing redundant API calls by 30% through TanStack Query and code-splitting techniques.",
        "Refactored legacy frontend codebases, significantly reducing technical debt and improving maintainability.",
        "Integrated Cursor AI to streamline prototyping, debugging, and code reviews, reducing development time by 50%."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Neweb Labs Private Limited",
      companyUrl: "https://www.linkedin.com/company/thenuveb/",
      location: "Bengaluru, India",
      period: "May 2023 -- Sep 2024",
      achievements: [
        "Improved render time of the Nuveb OTT platform by 70% using Next.js advanced rendering techniques including SSR, SSG, ISR, and PPR.",
        "Boosted organic traffic by 30% through strategic SEO optimizations, content structuring, and metadata improvements.",
        "Developed reusable modular components using Atomic Design, accelerating development velocity by 25% and ensuring code consistency.",
        "Reduced load times by 40% by optimizing the Next.js Image component and implementing smart asset handling.",
        "Contributed to the development of a React Native app improving user retention by 15% and helping onboard 1k+ new users.",
        "Collaborated in a fully remote Agile setup using GitHub and JIRA to deliver sprint-based releases with strong async communication."
      ]
    },
    {
      title: "Full Stack Web Developer Trainee",
      company: "Masai School",
      companyUrl: "https://www.masaischool.com/",
      location: "Bengaluru, India",
      period: "May 2022 -- May 2023",
      achievements: [
        "Led 3 collaborative projects and independently developed 4 full-stack web apps, honing both technical and soft skills.",
        "Mentored 20+ peers in optimizing code, improving debugging practices, and fostering a collaborative learning environment.",
        "Ranked among the top performers out of 100+ peers for leadership, execution, and problem-solving abilities."
      ]
    }
  ];

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
    <Layout>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me Section */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-6">About Me</h1>
            <div className="prose text-muted-foreground">
              <p className="mb-4">
                I'm a Mid-level Frontend Engineer with expertise in building performant, 
                accessible web applications using React, Next.js, and TypeScript. My experience 
                spans developing scalable UI systems, optimizing rendering performance, and 
                modernizing legacy codebases.
              </p>
              <p className="mb-4">
                My journey in tech began with the insatiable curiosity of learning new 
                technologies. Now, I'm passionate about creating seamless digital experiences. 
                When I'm not coding, you'll find me exploring new frameworks and contributing 
                to open-source projects.
              </p>
              <p>
                Let's connect and build something awesome (or at least mildly entertaining)!
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">Technical Skills</h2>
            
            <div className="space-y-6">
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
          </div>

          {/* Work Experience Section */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-6">Work Experience</h1>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-card rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
