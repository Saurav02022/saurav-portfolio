import { PortfolioData } from './types';
import { SITE_URL } from './site-config';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Saurav Kumar',
    title:
      'Full stack engineer — Next.js, TypeScript, React Native, Python, FastAPI, PostgreSQL',
    introLine:
      'I ship production web and Android applications for scaled EdTech (117-school footprint, 50,000+ users in current datasets) and have improved performance on high-traffic streaming surfaces. Comfortable owning APIs, data, deployments, and LLM-assisted product workflows when requirements are structured and reviewed.',
    heroCoreStack: [
      'Next.js',
      'TypeScript',
      'React Native',
      'Python',
      'FastAPI',
      'PostgreSQL',
    ],
    experienceIntro:
      'Full stack engineer, three years in production delivery — backends, Postgres, typed APIs, Next.js, React Native, and LLM-backed product features shipped with care around data and reliability.',
    email: 'sk729584@gmail.com',
    phone: '+919572365331',
    location: 'India',
    bio: 'Full stack engineer with three years building production web and Android stacks with typed APIs and relational data, including LLM-backed features with structured outputs. Comfortable owning delivery end to end alongside cross-functional deadlines. Earlier role: OTT web performance, image processing pipelines, creator tooling, React Native rework.',
    resumeUrl:
      'https://drive.google.com/file/d/1dXCSi_ufn4W0W9mrIpKgU_w9ONNmqsWF/view?usp=sharing',
  },

  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/saurav02022',
      icon: 'github',
      username: 'saurav02022',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurav02022/',
      icon: 'linkedin',
      username: 'saurav02022',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Saurav02022/',
      icon: 'code',
      username: 'Saurav02022',
    },
    {
      name: 'Portfolio',
      url: SITE_URL,
      icon: 'globe',
      username: 'saurav02022-portfolio',
    },
    {
      name: 'Email',
      url: 'mailto:sk729584@gmail.com',
      icon: 'mail',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919572365331',
      icon: 'phone',
    },
  ],

  experience: [
    {
      id: 'exp-1',
      title: 'Software Engineer',
      company: 'Shikha Learning Labs',
      location: 'Mumbai, India',
      startDate: '2024-11',
      endDate: null,
      technologies: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Next.js',
        'React Native',
        'TypeScript',
        'Supabase',
        'IndexedDB',
        'PWA',
      ],
      achievements: [
        {
          text: 'Architected the Sakhee AI Teacher Coach evaluation system using Python, FastAPI, PostgreSQL, and LLM APIs — reducing manual evaluation time by 87% (40 min to 5 min) for 200+ educators across 117 schools.',
        },
        {
          text: 'Owned end-to-end delivery of 4 production applications (web + Android) using Next.js, React Native, TypeScript, FastAPI, and Supabase — sustaining 96%+ crash-free session rate at scale across 117 schools.',
        },
        {
          text: 'Designed and shipped an offline-first PWA for 50+ low-network schools, using IndexedDB for client-side request queuing and FastAPI background reconciliation — reducing data sync failures by 80%.',
        },
        {
          text: 'Drove an AI-assisted student portfolio platform using Next.js, FastAPI, and structured LLM outputs, processing 5,000+ submissions with a 98% success rate and zero data loss.',
        },
      ],
    },
    {
      id: 'exp-2',
      title: 'Full Stack Developer',
      company: 'Nuveb',
      location: 'Bengaluru, India',
      startDate: '2023-05',
      endDate: '2024-09',
      technologies: [
        'Next.js',
        'TypeScript',
        'SSR / SSG',
        'Sharp',
        'React Native',
        'Go REST APIs',
      ],
      achievements: [
        {
          text: 'Led the Next.js SSR/SSG rendering strategy overhaul for the Nuveb OTT platform — cutting page load time from 8.5s to 2.5s for 50,000+ monthly active users.',
        },
        {
          text: 'Designed a Sharp-based image processing pipeline, reducing server-side latency from 3.2s to 1.9s across 10,000+ content creators.',
        },
        {
          text: 'Owned creator content portal using Next.js and TypeScript, enabling 10,000+ creators to manage video metadata, scheduling, and funding flows via Go-based REST APIs.',
        },
        {
          text: 'Redesigned 12 core mobile screens in React Native and TypeScript — contributing to a 15% improvement in user cohort retention within one quarter.',
        },
      ],
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'IIIT Ranchi',
      location: 'Ranchi, India',
      degree: 'Master of Computer Applications (MCA)',
      field: 'Computer Applications',
      startDate: '2026-01',
      endDate: '2028-07',
      description:
        'Online MCA • Weekend classes • Expected graduation July 2028 • Alongside full-time work',
    },
    {
      id: 'edu-2',
      institution: 'Munger University',
      location: 'Sheikhpura, India',
      degree: 'Bachelor of Science',
      field: 'Mathematics (Honors)',
      startDate: '2019-06',
      endDate: '2022-07',
      description:
        'Quantitative honours degree — strengthens analytical work around data and correctness.',
    },
  ],

  projects: [], // Populated from GitHub API

  devToUsername: 'saurav_dev_2022',

  calendly: {
    enabled: true,
    url: 'https://calendly.com/sk729584',
    meetingTypes: [
      {
        name: 'Quick Chat',
        duration: '30 min',
        url: 'https://calendly.com/sk729584/new-meeting-1',
      },
    ],
  },
};
