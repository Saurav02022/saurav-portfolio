import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Saurav Kumar",
    title: "Software Engineer",
    email: "sk729584@gmail.com",
    phone: "+919572365331",
    location: "India",
    bio: "Software engineer with about three years of experience owning delivery of full-stack, mobile, and AI-backed systems end to end at scale. I have shipped production applications serving 50,000+ users across 117 schools, cutting evaluation effort by roughly 87%, reducing sync failures by about 80%, and improving web performance with around 70% faster page loads. I focus on scalable backends, disciplined cross-functional delivery, and integrating LLMs in production safely and reliably.",
    resumeUrl:
      "https://drive.google.com/file/d/1dXCSi_ufn4W0W9mrIpKgU_w9ONNmqsWF/view?usp=sharing",
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/saurav02022",
      icon: "github",
      username: "saurav02022",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saurav02022/",
      icon: "linkedin",
      username: "saurav02022",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Saurav02022/",
      icon: "code",
      username: "Saurav02022",
    },
    {
      name: "Portfolio",
      url: "https://saurav02022-portfolio.vercel.app",
      icon: "globe",
      username: "saurav02022-portfolio",
    },
    {
      name: "Email",
      url: "mailto:sk729584@gmail.com",
      icon: "mail",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919572365331",
      icon: "phone",
    },
  ],

  experience: [
    {
      id: "exp-1",
      title: "Software Engineer",
      company: "Shikha Learning Labs",
      location: "Mumbai, India",
      startDate: "2024-11",
      endDate: null,
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Google Gemini",
        "Next.js",
        "React Native",
        "TypeScript",
        "Supabase",
        "IndexedDB",
        "PWA",
      ],
      achievements: [
        {
          text: "Architected the Sakhee AI Teacher Coach evaluation pipeline using Python, FastAPI, PostgreSQL, and Google Gemini, reducing manual evaluation time by about 87% (approximately 40 minutes to 5 minutes) for 200+ educators across 117 schools.",
        },
        {
          text: "Owned end-to-end delivery of four production applications (web and Android) using Next.js, React Native, TypeScript, FastAPI, and Supabase—sustaining 96%+ crash-free sessions at scale across 117 schools.",
        },
        {
          text: "Shipped an offline-first PWA for 50+ low-network schools using IndexedDB for client-side request queuing with FastAPI background reconciliation, lowering data sync failures by about 80%.",
        },
        {
          text: "Delivered an AI-assisted student portfolio platform using Next.js, FastAPI, and Google Gemini structured outputs, processing 5,000+ submissions with a 98% success rate and no data loss reported.",
        },
      ],
    },
    {
      id: "exp-2",
      title: "Full Stack Developer",
      company: "Nuveb",
      location: "Bengaluru, India",
      startDate: "2023-05",
      endDate: "2024-09",
      technologies: [
        "Next.js",
        "TypeScript",
        "SSR / SSG",
        "Sharp",
        "React Native",
        "Go REST APIs",
      ],
      achievements: [
        {
          text: "Led the Next.js SSR and SSG rendering overhaul for the Nuveb OTT platform—cutting page load time from about 8.5s to 2.5s for 50,000+ monthly active users.",
        },
        {
          text: "Built a Sharp-based image processing pipeline that reduced average server-side latency from about 3.2s to 1.9s across 10,000+ content creators.",
        },
        {
          text: "Owned the creator portal on Next.js and TypeScript—supporting 10,000+ creators managing video metadata, scheduling, and funding flows via Go-based REST APIs.",
        },
        {
          text: "Redesigned twelve core screens in React Native and TypeScript, contributing to a 15% lift in cohort retention within one quarter.",
        },
      ],
    },
  ],

  skills: [
    { name: "JavaScript", category: "Languages", proficiency: 95, icon: "javascript" },
    { name: "TypeScript", category: "Languages", proficiency: 90, icon: "typescript" },
    { name: "Python", category: "Languages", proficiency: 85, icon: "python" },
    { name: "HTML5", category: "Languages", proficiency: 95, icon: "html" },
    { name: "CSS3", category: "Languages", proficiency: 90, icon: "css" },

    { name: "React", category: "Frontend", proficiency: 95, icon: "react" },
    { name: "Next.js", category: "Frontend", proficiency: 90, icon: "nextjs" },
    { name: "React Native", category: "Frontend", proficiency: 85, icon: "react" },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 90, icon: "tailwind" },
    { name: "Redux Toolkit", category: "Frontend", proficiency: 85, icon: "redux" },
    { name: "Zustand", category: "Frontend", proficiency: 85, icon: "zustand" },

    { name: "Node.js", category: "Backend", proficiency: 80, icon: "nodejs" },
    { name: "Express.js", category: "Backend", proficiency: 80, icon: "express" },
    { name: "FastAPI", category: "Backend", proficiency: 82, icon: "fastapi" },
    { name: "REST APIs", category: "Backend", proficiency: 85, icon: "api" },

    { name: "PostgreSQL", category: "Database", proficiency: 82, icon: "postgresql" },
    { name: "Supabase", category: "Database", proficiency: 80, icon: "supabase" },
    { name: "MongoDB", category: "Database", proficiency: 80, icon: "mongodb" },
    { name: "IndexedDB", category: "Database", proficiency: 78, icon: "indexeddb" },

    { name: "Google Gemini", category: "Tools", proficiency: 85, icon: "gemini" },

    { name: "Docker", category: "DevOps", proficiency: 78, icon: "docker" },
    { name: "GitHub Actions", category: "DevOps", proficiency: 82, icon: "githubactions" },
    { name: "Google Cloud Run", category: "DevOps", proficiency: 75, icon: "gcp" },

    { name: "Git", category: "DevOps", proficiency: 90, icon: "git" },
    { name: "GitHub", category: "DevOps", proficiency: 90, icon: "github" },
    { name: "Vercel", category: "DevOps", proficiency: 85, icon: "vercel" },

    { name: "Playwright", category: "Tools", proficiency: 80, icon: "playwright" },
    { name: "Cypress", category: "Tools", proficiency: 75, icon: "cypress" },

    { name: "Cursor AI", category: "Tools", proficiency: 88, icon: "cursor" },
    { name: "ChatGPT", category: "Tools", proficiency: 85, icon: "openai" },
  ],

  education: [
    {
      id: "edu-1",
      institution: "IIIT Ranchi",
      location: "Ranchi, India",
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Applications",
      startDate: "2026-01",
      endDate: "2028-07",
      description: "Expected graduation July 2028.",
    },
    {
      id: "edu-2",
      institution: "Munger University",
      location: "Sheikhpura, India",
      degree: "Bachelor of Science",
      field: "Mathematics (Honours)",
      startDate: "2019-06",
      endDate: "2022-07",
      description:
        "Undergraduate programme with a strong grounding in quantitative reasoning.",
    },
  ],

  projects: [], // Populated from GitHub API

  devToUsername: "saurav_dev_2022",

  calendly: {
    enabled: true,
    url: "https://calendly.com/sk729584",
    meetingTypes: [
      {
        name: "Quick Chat",
        duration: "30 min",
        url: "https://calendly.com/sk729584/new-meeting-1",
      },
    ],
  },
};
