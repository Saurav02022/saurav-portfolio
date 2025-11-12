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
        { text: "Spearheaded end-to-end delivery of 3 mission-critical internal products—from requirements gathering to production deployment—accelerating feature releases by 35% and establishing a scalable development pipeline." },
        { text: "Transformed user experience across 3 legacy products through comprehensive UI modernization, driving a 20% surge in user engagement and reducing bounce rates by eliminating usability friction." },
        { text: "Architected and launched Sakhee: AI Teacher Coach, a Progressive Web App serving 100+ educators across Shikha Academy & Central School Foundation, achieving 80% positive satisfaction ratings and becoming the go-to coaching tool." },
        { text: "Engineered performance optimization strategy using TanStack Query, code-splitting, and lazy loading—slashing redundant API calls by 30% and improving Time to Interactive (TTI) by 40%." },
        { text: "Built and shipped Sakhee: AI Teacher Coach Android app from concept to 200+ downloads in 60 days using React Native + TypeScript—executing a streamlined development-to-testing pipeline (45-day dev, 15-day QA) that exceeded launch targets." },
        { text: "Revolutionized development velocity by integrating AI-powered tooling (Cursor, ChatGPT, Perplexity, Napkin), cutting development cycles by 50% through automated code generation, intelligent debugging, and rapid prototyping." }
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
        { text: "Transformed OTT platform performance by implementing advanced Next.js rendering strategies (SSR, SSG, ISR, PPR), achieving a dramatic 70% improvement in initial render time and eliminating user-reported lag complaints." },
        { text: "Optimized digital asset delivery through strategic Next.js Image implementation and resource compression, cutting overall page load times by 40% and boosting Core Web Vitals scores across all key metrics." },
        { text: "Established enterprise-grade component library following Atomic Design Methodology, accelerating development velocity by 25% while ensuring pixel-perfect UI consistency across 5+ product lines." },
        { text: "Drove 15% increase in user retention by architecting key features for React Native Android app, successfully onboarding 1,000+ users and reducing drop-off rates during critical user journeys." },
        { text: "Orchestrated seamless sprint-based releases across distributed Agile teams using GitHub, JIRA, and Slack—maintaining 100% on-time delivery through effective async collaboration in remote Scrum/Kanban workflows." }
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
        { text: "Mastered full-stack development by building 4+ production-grade applications and collaborating on 3+ team projects using React, Node.js, Express.js, and MongoDB—completing an intensive 1,200+ hour bootcamp with hands-on project experience." },
        { text: "Elevated peer success by mentoring 20+ developers on debugging strategies, code quality standards, and engineering best practices—creating a collaborative learning culture that improved team project outcomes by 30%." },
        { text: "Earned recognition as top performer among 100+ cohort members for exceptional execution and leadership, consistently delivering projects ahead of schedule while maintaining production-quality code standards." }
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
