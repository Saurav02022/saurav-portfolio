export const config = {
  // Personal Information
  name: "Saurav Kumar",
  title: "Frontend Engineer",
  email: "sk729584@gmail.com",
  phone: "+919572365331",
  whatsapp: "+919572365331",
  location: "Mumbai, Maharashtra, India",

  // Professional Summary - Updated from resume
  summary:
    "Frontend Engineer with over 3 years of experience building scalable, high-performance web and mobile applications using React, Next.js, React Native, and TypeScript. Proven track record in delivering end-to-end features, optimizing rendering performance, and developing reusable, modular components. Skilled in Agile environments and committed to building intuitive user experiences through modern engineering practices and collaborative delivery.",

  // About Me Content - Enhanced with resume details
  aboutMe: {
    introduction:
      "I'm a Frontend Engineer with over 3 years of experience building scalable, high-performance web and mobile applications using React, Next.js, React Native, and TypeScript. My expertise spans delivering end-to-end features, optimizing rendering performance with advanced techniques like SSR, SSG, ISR, and PPR, and developing reusable, modular components using modern engineering practices.",

    journey:
      "My journey in tech began with an intensive Full Stack Web Development program at Masai School, where I ranked among the top performers and mentored over 20 peers. I've progressed through roles at innovative companies like Neweb Labs and currently at Shikha Learning Labs, contributing to products that serve thousands of users with a focus on performance optimization and scalable architecture.",

    passion:
      "I'm passionate about building intuitive user experiences through modern engineering practices, implementing Atomic Design Methodology for scalable component architecture, and leveraging AI productivity tools like Cursor AI, ChatGPT, and Claude to streamline development workflows. My commitment to collaborative delivery in Agile environments ensures high-quality solutions that meet both user needs and business objectives.",

    callToAction:
      "Let's connect and build something exceptional together! I'm always excited to collaborate on innovative projects and discuss opportunities in frontend development and scalable web applications.",

    highlights: [],
  },

  // Professional Details
  professional: {
    availability: {
      status: "open", // "open", "selective", "not-available"
      message:
        "Currently working at Shikha Learning Labs, open to discussing new opportunities and freelance projects",
    },
  },

  // Enhanced Contact Options
  contact: {
    primary: {
      email: "sk729584@gmail.com",
      phone: "+919572365331",
      whatsapp: "+919572365331",
      preferredMethod: "email",
    },

    timezone: "Asia/Kolkata",
    languages: ["English", "Hindi"],

    responseTime: {
      email: "Within 24 hours",
      phone: "9 AM - 6 PM IST, Mon-Sat",
    },
  },

  // Page-specific content
  pages: {
    home: {
      title: "Frontend Engineer Portfolio",
      subtitle: "Building Scalable Web Experiences",
      description:
        "Building scalable, high-performance web and mobile applications with React, Next.js, and TypeScript. Passionate about creating intuitive user experiences through modern engineering practices.",
      cta: {
        primary: "View Resume",
        secondary: "Hire Me",
      },
    },
    about: {
      title: "About Me",
      subtitle: "Professional Journey & Expertise",
      description:
        "Explore my background, technical skills, and professional experience in frontend development",
    },
    projects: {
      title: "My Projects",
      subtitle: "Complete Repository Collection",
      description:
        "Explore my portfolio of projects showcasing scalable web applications, performance optimizations, and modern development practices.",
    },
  },

  // Resume Link
  resumeUrl: "https://drive.google.com/file/d/1dXCSi_ufn4W0W9mrIpKgU_w9ONNmqsWF/view?usp=drive_link",

  // Social Links
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/saurav02022",
      icon: "Linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Saurav02022",
      icon: "Github",
    },
  ],

  // Enhanced Email Template for "Hire Me" button
  hireMe: {
    email: "sk729584@gmail.com",
    subject: "Frontend Engineer Opportunity Discussion",
    body: "Hi Saurav,\n\nI am interested in discussing a frontend development opportunity with you based on your impressive experience in React, Next.js, and scalable web applications.\n\nI found your portfolio particularly compelling, especially your work on:\n- Performance optimization (70% render time improvement at Neweb Labs)\n- AI integration projects and Cursor AI workflow optimization\n- Progressive Web App development at Shikha Learning Labs\n- Scalable component architecture using Atomic Design\n\nI'd love to schedule a call to discuss how your skills could benefit our team and explore potential collaboration opportunities.\n\nBest regards",
  },

  // Enhanced GitHub Configuration
  github: {
    username: "Saurav02022",
    reposToShow: 15,
    pinnedRepos: ["AI-Chat-Application", "BigBasket-Clone"],
    specificRepos: [],
    excludeForks: true,
    enabled: true,
    fallbackToStatic: true,
    apiSettings: {
      timeout: 10000,
      retryAttempts: 3,
    },
  },

  // Skills Structure - Aligned with Resume Categories
  skills: {
    // Core Frontend Technologies (from resume)
    languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
    frontend: [
      "React",
      "Next.js",
      "React Native",
      "Redux",
      "Context API",
      "Progressive Web Apps (PWA)",
      "Internationalization (i18n)",
    ],
    // UI Frameworks & Styling (from resume)
    uiFrameworks: [
      "Tailwind CSS",
      "Chakra UI",
      "Shadcn UI",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Accessibility (a11y)",
      "Reusable Component Design",
    ],
    // Frontend Architecture & Patterns (from resume)
    architecture: [
      "Atomic Design Methodology",
      "Scalable Component Architecture",
      "Performance Optimization",
      "State Management Patterns",
    ],
    // API Integration & Authentication (from resume)
    backend: ["RESTful APIs", "Supabase", "Firebase", "OAuth 2.0"],
    // Testing & Quality Assurance
    testing: ["Jest", "React Testing Library", "End-to-end Testing"],
    // DevOps & Workflow Tools (from resume)
    devops: ["Vercel", "Netlify", "Git", "GitHub", "GitLab", "JIRA", "CI/CD"],
    // Agile Methodologies (from resume)
    agile: [
      "Scrum",
      "Sprint Planning",
      "Code Reviews",
      "Pair Programming",
      "Agile Environments",
      "Collaborative Delivery",
    ],
    // AI Productivity Tools (from resume)
    aiTools: ["ChatGPT", "Cursor AI", "Claude"],
    // Leadership & Soft Skills
    soft: [
      "Team Collaboration",
      "Communication",
      "Leadership",
      "Mentoring",
      "Problem Solving",
      "Project Management",
    ],
  },

  // Skill Category Display Names - Aligned with Resume
  skillCategories: {
    languages: "Core Web Technologies",
    frontend: "Frontend Frameworks",
    uiFrameworks: "UI Libraries & Design Systems",
    architecture: "Architecture & Performance",
    backend: "Backend Integration",
    testing: "Testing & Quality Assurance",
    devops: "DevOps & Deployment",
    agile: "Agile & Collaboration",
    aiTools: "AI Productivity Tools",
    soft: "Leadership & Soft Skills",
  },

  // Work Experience - Matches Resume
  experience: [
    {
      title: "Next.js Developer",
      company: "Shikha Learning Labs Private Limited",
      companyUrl: "https://shikhaacademy.org/shikha-labs/",
      location: "Mumbai, Maharashtra, India",
      period: "Nov 2024 -- Present",
      achievements: [
        "Led the development lifecycle for 3 internal products, from requirements gathering to deployment, accelerating feature releases and improving project efficiency.",
        "Redesigned and modernized 3 internal products with improved UI/UX, resulting in a 20% rise in user engagement.",
        "Engineered a Progressive Web App for Central School Foundation, deployed as a proof of concept evaluated by over 100 educators, securing 80% positive feedback.",
        "Enhanced frontend performance by reducing redundant API calls by 30% using TanStack Query and code-splitting, while refactoring legacy codebases to reduce technical debt and improve maintainability.",
        "Integrated Cursor AI into the development workflow to streamline prototyping, debugging, and code reviews, reducing development time by 50%.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Neweb Labs Private Limited",
      companyUrl: "https://www.linkedin.com/company/thenuveb/",
      location: "Bengaluru, Karnataka, India",
      period: "May 2023 -- Sep 2024",
      achievements: [
        "Improved render time of the Nuveb OTT platform by 70% using Next.js rendering techniques, including SSR, SSG, ISR, and PPR.",
        "Built reusable modular components using Atomic Design Methodology, accelerating development velocity by 25% and ensuring code consistency.",
        "Decreased load times by 40% by optimizing the Next.js Image component and implementing smart asset handling.",
        "Contributed to core feature development in a React Native app, improving user retention by 15% and assisting in onboarding over 1,000 new users.",
        "Collaborated in a fully remote Agile setup using GitHub and JIRA to deliver sprint-based releases with effective asynchronous communication.",
      ],
    },
    {
      title: "Full Stack Web Developer Trainee",
      company: "Masai School",
      companyUrl: "https://www.masaischool.com/",
      location: "Bengaluru, Karnataka, India",
      period: "May 2022 -- May 2023",
      achievements: [
        "Delivered 4 full-stack web applications and actively contributed to 3 collaborative projects, strengthening both technical execution and cross-functional collaboration.",
        "Mentored over 20 peers in code optimization, debugging practices, and fostering a collaborative learning environment.",
        "Recognized as a top performer among 100+ peers for leadership, execution, and analytical abilities.",
      ],
    },
  ],

  // Enhanced Theme Configuration
  theme: {
    backgrounds: {
      home: "from-blue-50/50 via-purple-50/30 to-green-50/40 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-green-950/20",
      about:
        "from-blue-50/50 via-purple-50/30 to-green-50/40 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-green-950/20",
      projects:
        "from-blue-50/50 via-purple-50/30 to-green-50/40 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-green-950/20",
    },
    gradients: {
      primary:
        "from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400",
      secondary:
        "from-green-600 via-blue-600 to-green-600 dark:from-green-400 dark:via-blue-400 dark:to-green-400",
      tertiary:
        "from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400",
    },
    components: {
      card: "bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50",
      button: {
        primary:
          "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
        secondary:
          "border-2 border-border/60 hover:border-primary/50 bg-background/50",
      },
      badge:
        "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full border border-blue-200/50",
    },
    animations: {
      enabled: true,
      duration: "300ms",
      easing: "ease-in-out",
    },
  },

  // Enhanced Site Configuration
  siteConfig: {
    footer: {
      text: "© 2025 Saurav Kumar - Frontend Engineer",
    }
  },
};
