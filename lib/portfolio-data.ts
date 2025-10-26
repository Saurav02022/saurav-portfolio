import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Saurav Kumar",
    title: "Full-Stack Developer",
    email: "sk729584@gmail.com",
    phone: "+919572365331",
    location: "India",
    bio: "Passionate Full-Stack Developer with 2+ years of experience in modern web technologies. Specialized in React, Next.js, and TypeScript with a proven track record of delivering high-performance applications and improving user engagement.",
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
      description: "Delivering end-to-end product development and modernizing internal applications to improve user engagement and operational efficiency.",
      technologies: ["Next.js", "TypeScript", "React Native", "TanStack Query", "PWA", "AI Tools"],
      achievements: [
        "Delivered 3 internal products end-to-end, managing requirements, implementation, and deployment",
        "Increased user engagement by 20% by revamping and modernizing 3 internal product UIs",
        "Achieved 80% positive feedback from 100+ educators with Sakhee: AI Teacher Coach PWA",
        "Reduced redundant API calls by 30% through TanStack Query optimization",
        "Reached 200+ downloads at release for Android app using React Native + TypeScript",
        "Cut development cycles by 50% leveraging AI-assisted tools (Cursor, ChatGPT, Perplexity)"
      ]
    },
    {
      id: "exp-2",
      title: "Full Stack Developer",
      company: "Nuveb",
      location: "Bengaluru, India",
      startDate: "2023-05",
      endDate: "2024-09",
      description: "Optimized OTT platform performance and established scalable development practices using modern React ecosystem.",
      technologies: ["Next.js", "React", "React Native", "SSR", "SSG", "ISR", "Atomic Design"],
      achievements: [
        "Improved OTT platform render time by 70% using Next.js rendering strategies (SSR, SSG, ISR, PPR)",
        "Reduced overall page load times by 40% by optimizing Next.js Image usage and asset delivery",
        "Increased development velocity by 25% with reusable component library using Atomic Design",
        "Boosted user retention by 15% contributing to React Native Android app for 1,000+ users",
        "Drove sprint-based releases in remote Agile teams using GitHub, JIRA, and Slack"
      ]
    },
    {
      id: "exp-3",
      title: "Full Stack Web Developer Trainee",
      company: "Masai School",
      location: "Bengaluru, India",
      startDate: "2022-05",
      endDate: "2023-05",
      description: "Intensive full-stack development training with hands-on project experience and peer mentorship responsibilities.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3"],
      achievements: [
        "Built 4+ full-stack applications and contributed to 3+ team projects using MERN stack",
        "Mentored 20+ peers on debugging, code quality, and best practices",
        "Recognized as top performer among 100+ cohort members for execution and leadership"
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
    { name: "Context API", category: "Frontend", proficiency: 90, icon: "react" },
    { name: "TanStack Query", category: "Frontend", proficiency: 85, icon: "react" },
    
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
    
    // Project Management & Workflow
    { name: "JIRA", category: "Tools", proficiency: 85, icon: "jira" },
    { name: "Agile/Scrum", category: "Tools", proficiency: 85, icon: "agile" },
    { name: "Kanban", category: "Tools", proficiency: 85, icon: "kanban" }
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

  codingStats: {
    totalHours: 2847,
    todayHours: 6.5,
    weekHours: 42,
    monthHours: 168,
    languages: [
      { name: "TypeScript", hours: 1200, percentage: 42 },
      { name: "JavaScript", hours: 850, percentage: 30 },
      { name: "Python", hours: 400, percentage: 14 },
      { name: "CSS", hours: 250, percentage: 9 },
      { name: "Other", hours: 147, percentage: 5 }
    ],
    projects: [
      { name: "Portfolio Website", hours: 45 },
      { name: "E-commerce App", hours: 120 },
      { name: "Task Management", hours: 80 },
      { name: "API Development", hours: 95 }
    ]
  }
};
