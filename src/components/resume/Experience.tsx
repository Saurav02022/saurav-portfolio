
import { Calendar, ExternalLink } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Next.js Developer",
      company: "Shikha Learning Labs Private Limited",
      companyUrl: "https://shikhaacademy.org/shikha-labs/",
      location: "Mumbai, India",
      period: "Nov 2024 -- Present",
      techStack: "Next.js, TypeScript, Tailwind CSS, Shadcn UI, Vite, React, i18n, Supabase, Git, GitHub, Docker, Heroku, Vercel, Cursor AI, ChatGPT, Claude",
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
      techStack: "Next.js, TypeScript, Tailwind CSS, Shadcn UI, React Native, Atomic Design, Git, GitHub, Docker, Jest, Cypress, JIRA, Agile methodology, Scrum",
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
      techStack: "React, Node.js, Express.js, MongoDB, Material UI, Chakra UI, Jest, Cypress, Netlify",
      achievements: [
        "Led 3 collaborative projects and independently developed 4 full-stack web apps, honing both technical and soft skills.",
        "Mentored 20+ peers in optimizing code, improving debugging practices, and fostering a collaborative learning environment.",
        "Ranked among the top performers out of 100+ peers for leadership, execution, and problem-solving abilities."
      ]
    }
  ];

  return (
    <section className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-200 pb-2">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-blue-600">{exp.company}</span>
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-slate-600">{exp.location}</p>
              </div>
              <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{exp.period}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-slate-600 mb-2"><strong>Tech Stack:</strong></p>
              <p className="text-sm text-slate-700">{exp.techStack}</p>
            </div>
            
            <ul className="space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
