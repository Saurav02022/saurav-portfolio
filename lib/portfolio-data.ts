import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Saurav Kumar",
    title: "Full-Stack Developer",
    email: "sk729584@gmail.com",
    phone: "+919572365331",
    location: "India",
    bio: "I transform complex problems into elegant, high-performance solutions. As a Full-Stack Developer with 3+ years of professional experience, I specialize in building scalable web and mobile applications using React, Next.js, TypeScript, and React Native. My work has directly improved user engagement by 20%, slashed page load times by 70%, and delivered products trusted by 1,000+ active users. I thrive at the intersection of cutting-edge technology and real-world impact—whether it's architecting PWAs that earn 80% positive feedback or leveraging AI tools to accelerate development cycles by 50%. Let's collaborate to build something exceptional.",
    resumeUrl: "https://drive.google.com/file/d/1dXCSi_ufn4W0W9mrIpKgU_w9ONNmqsWF/view?usp=sharing"
  },
  
  social: [
    {
      name: "GitHub",
      url: "https://github.com/saurav02022",
      icon: "github",
      username: "saurav02022"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saurav02022/",
      icon: "linkedin",
      username: "saurav02022"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Saurav02022/",
      icon: "code",
      username: "Saurav02022"
    },
    {
      name: "Email",
      url: "mailto:sk729584@gmail.com",
      icon: "mail"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919572365331",
      icon: "phone"
    }
  ],

  experience: [
    {
      id: "exp-1",
      title: "Next.js Developer",
      company: "Shikha Learning Labs",
      location: "Mumbai, India",
      startDate: "2024-11",
      endDate: null,
      technologies: [
        "Next.js",
        "TypeScript",
        "React Native",
        "TanStack Query",
        "Progressive Web App (PWA)",
        "AI Tools (ChatGPT, Cursor, Perplexity)"
      ],
      achievements: [
        { text: "Launched the first version of the Sakhee AI Teacher Coach, a web app with Next.js, TypeScript, TanStack Query, and Supabase—supporting class creation, audio uploads, rubric-based AI feedback, and bilingual workflows." },
        { text: "Converted Sakhee into an offline-first PWA using service workers and IndexedDB caching, enabling reliable usage in low-connectivity government-school environments." },
        { text: "Delivered the Sakhee Android App end-to-end using React Native, TypeScript, TanStack Query, and Supabase; deployed to 200+ teachers across 50 schools with stable offline-first flows." },
        { text: "Developed the complete frontend for the multi-role AI-Assessed Portfolio Portal using Next.js, TypeScript, TanStack Query, and Supabase—supporting 1k+ users with guided reflections, submission workflows, and AI-generated evaluations." },
        { text: "Improved development velocity by 40% through structured AI-assisted workflows using Cursor, ChatGPT, Claude, and Perplexity while maintaining manual review quality." }
      ]
    },
    {
      id: "exp-2",
      title: "Full Stack Developer",
      company: "Nuveb",
      location: "Bengaluru, India",
      startDate: "2023-05",
      endDate: "2024-09",
      technologies: [
        "Next.js (SSR, SSG, ISR, PPR)",
        "React",
        "React Native",
        "TypeScript",
        "Atomic Design",
        "JIRA",
        "GitHub"
      ],
      achievements: [
        { text: "Improved load performance for a mid-scale OTT platform with 50k monthly viewers, achieving ~70% faster page loads through optimized SSR/ISR/SSG, refined API patterns, and bundle-size reductions." },
        { text: "Reduced image load latency by ~40% for a film campaign platform used by ~18k creators and viewers using optimized Next.js <Image> configurations and caching strategies." },
        { text: "Contributed to a React Native Android app with 10k+ users, improving onboarding and activation flows and helping lift early retention by ~15%." },
        { text: "Developed shared UI component libraries for web and mobile, reducing repeat implementation work by ~25% and improving design consistency across teams." }
      ]
    },
    {
      id: "exp-3",
      title: "Full Stack Web Developer Trainee",
      company: "Masai School",
      location: "Bengaluru, India",
      startDate: "2022-05",
      endDate: "2023-05",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "HTML5",
        "CSS3"
      ],
      achievements: [
        { text: "Built 4+ full-stack applications using React, Node.js, Express, and MongoDB—covering authentication, modular architecture, and production-ready UI + API integration." },
        { text: "Guided 20+ developers through debugging sessions, component design reviews, and best practices, improving overall project reliability." }
      ]
    }
  ],
  

  skills: [
    // Languages & Core Technologies
    { name: "JavaScript", category: "Languages", proficiency: 95, icon: "javascript" },
    { name: "TypeScript", category: "Languages", proficiency: 90, icon: "typescript" },
    { name: "HTML5", category: "Languages", proficiency: 95, icon: "html" },
    { name: "CSS3", category: "Languages", proficiency: 90, icon: "css" },
    
    // Frontend Frameworks & Libraries
    { name: "React", category: "Frontend", proficiency: 95, icon: "react" },
    { name: "Next.js", category: "Frontend", proficiency: 90, icon: "nextjs" },
    { name: "React Native", category: "Frontend", proficiency: 85, icon: "react" },
    
    // State Management & Data Fetching
    { name: "Redux Toolkit", category: "Frontend", proficiency: 85, icon: "redux" },
    { name: "Zustand", category: "Frontend", proficiency: 85, icon: "zustand" },
    { name: "TanStack Query", category: "Frontend", proficiency: 85, icon: "react" },
    
    // Monitoring & Analytics
    { name: "Sentry", category: "Tools", proficiency: 80, icon: "sentry" },
    { name: "Firebase Analytics", category: "Tools", proficiency: 80, icon: "firebase" },
    { name: "Hotjar", category: "Tools", proficiency: 75, icon: "hotjar" },
    
    // Testing & Quality Assurance
    { name: "Jest", category: "Tools", proficiency: 80, icon: "jest" },
    { name: "React Testing Library", category: "Tools", proficiency: 75, icon: "testing" },
    { name: "Cypress", category: "Tools", proficiency: 70, icon: "cypress" },
    
    // UI/Styling Frameworks
    { name: "Tailwind CSS", category: "Frontend", proficiency: 90, icon: "tailwind" },
    { name: "Chakra UI", category: "Frontend", proficiency: 85, icon: "chakra" },
    { name: "Shadcn UI", category: "Frontend", proficiency: 85, icon: "shadcn" },
    
    // Backend & APIs
    { name: "Node.js", category: "Backend", proficiency: 80, icon: "nodejs" },
    { name: "Express.js", category: "Backend", proficiency: 80, icon: "express" },
    { name: "RESTful APIs", category: "Backend", proficiency: 85, icon: "api" },
    
    // Database & Services
    { name: "MongoDB", category: "Database", proficiency: 80, icon: "mongodb" },
    { name: "Firebase", category: "Database", proficiency: 75, icon: "firebase" },
    { name: "Supabase", category: "Database", proficiency: 75, icon: "supabase" },
    { name: "Auth0", category: "Database", proficiency: 70, icon: "auth0" },
    
    // DevOps & Deployment
    { name: "Git", category: "DevOps", proficiency: 90, icon: "git" },
    { name: "GitHub", category: "DevOps", proficiency: 90, icon: "github" },
    { name: "GitHub Actions", category: "DevOps", proficiency: 80, icon: "github" },
    { name: "Vercel", category: "DevOps", proficiency: 85, icon: "vercel" },
    { name: "Netlify", category: "DevOps", proficiency: 80, icon: "netlify" },
    { name: "GCP", category: "DevOps", proficiency: 75, icon: "gcp" },
    
    // Project Management & Workflow
    { name: "JIRA", category: "Tools", proficiency: 85, icon: "jira" },
    { name: "Agile/Scrum", category: "Tools", proficiency: 85, icon: "agile" },
    { name: "Kanban", category: "Tools", proficiency: 85, icon: "kanban" },

    // AI Tools & Modern Development
    { name: "Cursor AI", category: "Tools", proficiency: 90, icon: "cursor" },
    { name: "ChatGPT", category: "Tools", proficiency: 90, icon: "openai" },
    { name: "Claude AI", category: "Tools", proficiency: 85, icon: "anthropic" },
    { name: "Perplexity", category: "Tools", proficiency: 85, icon: "perplexity" },
    { name: "Replit", category: "Tools", proficiency: 80, icon: "replit" }
  ],

  education: [
    {
      id: "edu-1",
      institution: "Masai School",
      location: "Bengaluru, India",
      degree: "Full Stack Web Development",
      field: "MERN Stack (Full-Time)",
      startDate: "2022-05",
      endDate: "2023-05",
      description: "Intensive full-stack development bootcamp focusing on modern web technologies"
    },
    {
      id: "edu-2",
      institution: "Munger University",
      location: "Sheikhpura, India",
      degree: "Bachelor of Science",
      field: "Mathematics (Honours)",
      startDate: "2019-07",
      endDate: "2022-07",
      description: "Strong foundation in analytical thinking and problem-solving"
    }
  ],

  projects: [], // Will be populated from GitHub API

  // Dev.to username for blog integration
  devToUsername: "saurav_dev_2022",

  // Calendly configuration for meeting scheduling
  calendly: {
    enabled: true, // Set to false to hide the Schedule section
    url: "https://calendly.com/sk729584", // Replace with your Calendly URL
    meetingTypes: [
     
      {
        name: "Quick Chat",
        duration: "30 min",
        url: "https://calendly.com/sk729584/new-meeting-1"
      },
      
    ]
  }
};
