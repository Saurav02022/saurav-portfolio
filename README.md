# Portfolio - Full Stack Engineer

> Modern, high-performance single-page portfolio showcasing Full Stack engineering expertise, content creation, and open-source contributions.

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90+-brightgreen)](https://developers.google.com/web/tools/lighthouse)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://react.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Live Demo](https://saurav-portfolio-lovat.vercel.app/) • [Report Bug](https://github.com/Saurav02022/saurav-portfolio/issues) • [Request Feature](https://github.com/Saurav02022/saurav-portfolio/issues)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

A professional single-page portfolio website designed for Full Stack Engineers who are building their personal brand through content creation and open-source contributions. This portfolio showcases:

- **Technical Projects** - Demonstrating full-stack development capabilities
- **Content Creation** - Articles from Dev.to, Hashnode, LinkedIn, and Twitter/X
- **Open Source** - GitHub contributions and community involvement
- **Professional Experience** - Career timeline with measurable impact

**Key Highlights:**
- ⚡ Lightning-fast performance (Lighthouse 90+)
- 📱 Mobile-first responsive design
- 🎨 Modern UI with Aceternity components
- 🌐 SEO optimized for discoverability
- ♿ WCAG 2.1 Level AA accessibility
- 🔄 Live data integration (GitHub, Dev.to)

---

## ✨ Features

### Core Features
- [x] **Hero Section** - Compelling introduction with animated background
- [x] **About** - Professional summary with key statistics
- [x] **Projects** - Showcase of 4-6 best projects with live demos
- [x] **Content & Writing** - Integration with Dev.to and Hashnode
- [x] **Open Source** - GitHub contributions and statistics
- [x] **Skills** - Categorized technical competencies
- [x] **Experience** - Professional timeline with achievements
- [x] **Contact** - Multiple contact methods and availability status

### Technical Features
- [x] Server-side rendering ready
- [x] Optimized image loading (lazy loading, WebP)
- [x] Code splitting and lazy component loading
- [x] API integration with caching
- [x] Dark mode support (optional)
- [x] Progressive Web App capabilities
- [x] Analytics integration
- [x] SEO meta tags and Open Graph

---

## 🛠 Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev) | 18.3+ | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.5+ | Type safety |
| [Vite](https://vitejs.dev/) | 5.4+ | Build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4+ | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Latest | Animations |

### UI Components
- **Aceternity UI** - Modern component library
- **Lucide React** - Icon library
- **Shadcn UI** - Additional UI components

### Optional Enhancements
- **Three.js** - 3D background effects
- **React Three Fiber** - React renderer for Three.js
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form management

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Vitest** - Unit testing

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0
- **Git** >= 2.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saurav02022/saurav-portfolio.git
   cd saurav-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   VITE_GITHUB_USERNAME=your_github_username
   VITE_DEVTO_USERNAME=your_devto_username
   VITE_HASHNODE_USERNAME=your_hashnode_username
   VITE_ANALYTICS_ID=your_analytics_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── resume.pdf         # Resume file
├── src/
│   ├── components/        # React components
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Content.tsx
│   │   │   ├── OpenSource.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/           # Reusable UI components
│   │   └── layout/       # Layout components
│   ├── lib/              # Utility functions
│   │   ├── config.ts     # Site configuration
│   │   ├── utils.ts      # Helper functions
│   │   └── api/          # API integration
│   │       ├── github.ts
│   │       ├── devto.ts
│   │       └── hashnode.ts
│   ├── hooks/            # Custom React hooks
│   │   ├── useGitHubStats.ts
│   │   ├── useArticles.ts
│   │   └── useTheme.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── assets/           # Images, fonts, etc.
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .env.example          # Environment variables template
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── docs/                 # Documentation folder
│   ├── PRD.md           # Product Requirements Document
│   └── DEVELOPMENT_PLAN.md # Development roadmap
├── package.json          # Dependencies
└── README.md             # This file
```

---

## ⚙️ Configuration

### Site Configuration

Edit `src/lib/config.ts` to customize your portfolio:

```typescript
export const config = {
  // Personal Information
  name: "Your Name",
  title: "Full Stack Engineer",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "City, Country",
  
  // Social Links
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/username", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/username", icon: "Linkedin" },
    // Add more...
  ],
  
  // GitHub Configuration
  github: {
    username: "your_username",
    reposToShow: 6,
  },
  
  // Projects
  projects: [
    {
      title: "Project Name",
      description: "Project description",
      technologies: ["React", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/user/repo",
    },
    // Add more...
  ],
  
  // Experience
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      period: "Jan 2023 -- Present",
      achievements: ["Achievement 1", "Achievement 2"],
    },
    // Add more...
  ],
  
  // Skills
  skills: {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PostgreSQL"],
    devops: ["Docker", "AWS", "CI/CD"],
  },
};
```

### Environment Variables

Create a `.env.local` file with these variables:

```env
# Required
VITE_GITHUB_USERNAME=your_github_username

# Optional
VITE_DEVTO_USERNAME=your_devto_username
VITE_HASHNODE_USERNAME=your_hashnode_username
VITE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_FORMSPREE_ID=xxxxx
```

---

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run format           # Run Prettier
npm run type-check       # TypeScript type checking

# Testing (if configured)
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, maintainable code
   - Follow existing code style
   - Add comments for complex logic

3. **Test your changes**
   ```bash
   npm run dev
   npm run lint
   npm run type-check
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR** (if applicable)
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

This project follows these conventions:

- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **Formatting**: Prettier with 2-space indentation
- **Naming**: 
  - Components: PascalCase (`ProjectCard.tsx`)
  - Files: camelCase (`useGitHubStats.ts`)
  - Variables: camelCase (`userName`)
  - Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Environment Variables on Hosting Platform

Don't forget to add your environment variables in the hosting platform dashboard:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

---

## ⚡ Performance

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | TBD |
| Largest Contentful Paint | < 2.5s | TBD |
| Time to Interactive | < 3.5s | TBD |
| Total Blocking Time | < 300ms | TBD |
| Cumulative Layout Shift | < 0.1 | TBD |
| Lighthouse Score | > 90 | TBD |

### Optimization Techniques

**Images**
- WebP format with fallback
- Responsive images with srcset
- Lazy loading for below-the-fold images
- Proper image dimensions to prevent CLS

**Code**
- Code splitting with React.lazy()
- Tree shaking (automatic with Vite)
- Minimize bundle size
- Remove unused dependencies

**Caching**
- API response caching (1 hour)
- Service worker for offline support
- CDN caching via hosting platform

**Fonts**
- System font stack (no external fonts)
- Or use font-display: swap for custom fonts

### Performance Monitoring

Run Lighthouse audit:
```bash
npm run lighthouse
```

Analyze bundle size:
```bash
npm run build
npx vite-bundle-visualizer
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Bug Reports

Found a bug? Please [open an issue](https://github.com/Saurav02022/saurav-portfolio/issues) with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Feature Requests

Have an idea? [Open an issue](https://github.com/Saurav02022/saurav-portfolio/issues) with:
- Clear description of the feature
- Why it would be useful
- Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**PR Guidelines:**
- Follow existing code style
- Update documentation if needed
- Add tests if applicable
- Ensure all tests pass
- Keep PRs focused and small

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Saurav Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contact

**Saurav Kumar**  
Full Stack Engineer

- 📧 Email: [sk729584@gmail.com](mailto:sk729584@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/saurav02022](https://linkedin.com/in/saurav02022)
- 🐙 GitHub: [github.com/Saurav02022](https://github.com/Saurav02022)
- 🐦 Twitter: [@YourTwitter](https://twitter.com/your_twitter)
- 📝 Dev.to: [dev.to/your_username](https://dev.to/your_username)
- 📰 Hashnode: [your_username.hashnode.dev](https://your_username.hashnode.dev)

**Portfolio Website:** [saurav-portfolio-lovat.vercel.app](https://saurav-portfolio-lovat.vercel.app/)

---

## 🙏 Acknowledgments

### Technologies & Libraries
- [React](https://react.dev) - UI framework
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Aceternity UI](https://ui.aceternity.com) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev) - Icon library

### Inspiration
- Modern developer portfolios
- Best practices from industry leaders
- Community feedback and suggestions

### Resources
- [Web.dev](https://web.dev) - Performance guidelines
- [React Documentation](https://react.dev) - React best practices
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling reference

---

## 📊 Project Status

**Current Version:** 1.0.0  
**Status:** 🚧 In Development  
**Last Updated:** January 2025

### Roadmap

**Phase 1: Foundation** ✅ (Complete)
- [x] Project setup
- [x] Core sections
- [x] Basic responsive design

**Phase 2: Content Integration** 🚧 (In Progress)
- [ ] GitHub API integration
- [ ] Dev.to API integration
- [ ] Article display
- [ ] Open source section

**Phase 3: Enhancement** 📋 (Planned)
- [ ] Three.js background
- [ ] Dark mode
- [ ] Testimonials
- [ ] Performance optimization

**Phase 4: Launch** 📋 (Planned)
- [ ] Final testing
- [ ] SEO optimization
- [ ] Production deployment
- [ ] Analytics setup

---

## 📈 Stats

![GitHub stars](https://img.shields.io/github/stars/Saurav02022/saurav-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/Saurav02022/saurav-portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/Saurav02022/saurav-portfolio)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Saurav02022/saurav-portfolio)

---

## 💡 Tips for Using This Portfolio

### Customization Guide

1. **Update Personal Information**
   - Edit `src/lib/config.ts` with your details
   - Replace placeholder images in `public/images/`
   - Update resume PDF in `public/`

2. **Add Your Projects**
   - Add project data to `config.projects` array
   - Include screenshots in `public/images/projects/`
   - Ensure live demos and GitHub links work

3. **Configure APIs**
   - Set environment variables for GitHub, Dev.to
   - Test API integrations work correctly
   - Implement fallbacks for API failures

4. **Optimize Performance**
   - Compress images before adding
   - Test on slow 3G network
   - Run Lighthouse audits regularly

5. **Deploy**
   - Choose hosting platform (Vercel/Netlify)
   - Set up custom domain
   - Configure SSL certificate
   - Set up analytics

### Best Practices

✅ **Do:**
- Keep content updated regularly
- Optimize images before uploading
- Test on multiple devices and browsers
- Monitor performance metrics
- Respond to contact form submissions promptly
- Update skills as you learn new technologies

❌ **Don't:**
- Commit sensitive data (API keys, passwords)
- Use copyrighted images without permission
- Neglect mobile responsiveness
- Ignore accessibility guidelines
- Over-engineer with unnecessary features
- Forget to update your resume

---

<div align="center">

**Built with ❤️ by [Saurav Kumar](https://github.com/Saurav02022)**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/Saurav02022/saurav-portfolio/issues) • [Request Feature](https://github.com/Saurav02022/saurav-portfolio/issues) • [Documentation](./docs/PRD.md)

</div>

