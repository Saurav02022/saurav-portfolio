# 🚀 Modern Full-Stack Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, high-performance portfolio built with cutting-edge technologies**

[Live Demo](https://your-portfolio.vercel.app) • [Report Bug](https://github.com/Saurav02022/saurav-portfolio/issues) • [Request Feature](https://github.com/Saurav02022/saurav-portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

A production-ready, fully responsive portfolio website showcasing professional experience, technical skills, and projects. Built with modern web technologies and following industry best practices for performance, accessibility, and SEO.

### ✨ Highlights

- **Real-time Data**: Live coding statistics from WakaTime API
- **Dynamic Content**: Blog posts fetched from Dev.to
- **Modern UI/UX**: Built with shadcn/ui and Aceternity UI components
- **Theme Support**: Seamless dark/light mode with system preference detection
- **Fully Responsive**: Mobile-first design approach
- **Type-Safe**: 100% TypeScript for robust code quality

---

## 🌟 Key Features

### 🎨 **Modern Design System**
- Clean, professional aesthetic with consistent design language
- Smooth animations and micro-interactions using Framer Motion
- Glassmorphism effects and gradient accents
- Accessible color contrast (WCAG AA compliant)

### 📊 **Real-time Integrations**
- **WakaTime**: Live coding statistics and language breakdown
- **Dev.to**: Automatic blog post synchronization
- **GitHub**: Repository showcase with live stats
- **Calendly**: Direct meeting scheduling integration

### 💼 **Portfolio Sections**
1. **Hero Section**: Eye-catching introduction with animated background
2. **Experience Timeline**: Professional journey with detailed achievements
3. **Skills Showcase**: Technical proficiencies with interactive categories
4. **Projects Gallery**: GitHub-integrated project showcase
5. **Blog Integration**: Latest articles from Dev.to
6. **Coding Stats**: Real-time development metrics from WakaTime
7. **Education**: Academic background and certifications
8. **Contact & Scheduling**: Multiple ways to connect

### 🚀 **Performance Optimized**
- Server-Side Rendering (SSR) with Next.js 16
- Optimized images with next/image
- Code splitting and lazy loading
- Minimal bundle size (<300KB gzipped)
- Lighthouse score ≥90 across all metrics

### ♿ **Accessibility First**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Focus management

---

## 🛠 Tech Stack

### **Core**
- **[Next.js 16.0.0](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4.1.16](https://tailwindcss.com/)** - Utility-first CSS

### **UI Components & Animations**
- **[shadcn/ui](https://ui.shadcn.com/)** - Accessible component library
- **[Aceternity UI](https://ui.aceternity.com/)** - Premium animated components
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Motion](https://motion.dev/)** - Animation library (Framer Motion)
- **[Lucide React](https://lucide.dev/)** - Icon system

### **Features & Integrations**
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[WakaTime API](https://wakatime.com/developers)** - Coding statistics
- **[Dev.to API](https://developers.forem.com/api)** - Blog integration
- **[Octokit](https://github.com/octokit/rest.js)** - GitHub API client
- **[Calendly](https://calendly.com/)** - Meeting scheduling

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variants
- **clsx & tailwind-merge** - Class name utilities

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Saurav02022/saurav-portfolio.git
cd saurav-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# WakaTime API (Optional - for real-time coding stats)
WAKATIME_API_KEY=your_wakatime_api_key

# Dev.to API (Optional - for blog integration)
# Note: Dev.to API doesn't require a key for public articles

# GitHub API (Optional - for better rate limits)
GITHUB_TOKEN=your_github_personal_access_token
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── api/                      # API routes
│   │   ├── devto/
│   │   │   └── articles/        # Dev.to blog integration
│   │   ├── github/
│   │   │   ├── projects/        # GitHub repositories
│   │   │   └── stats/           # GitHub statistics
│   │   └── wakatime/
│   │       └── stats/           # WakaTime coding stats
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Main portfolio page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Navigation with theme toggle
│   │   └── Footer.tsx           # Footer component
│   ├── sections/                # Portfolio sections
│   │   ├── Hero.tsx             # Hero with animated background
│   │   ├── Experience.tsx       # Professional experience timeline
│   │   ├── Skills.tsx           # Technical skills showcase
│   │   ├── Projects.tsx         # GitHub projects gallery
│   │   ├── Blog.tsx             # Dev.to blog integration
│   │   ├── CodingTime.tsx       # WakaTime statistics
│   │   ├── Education.tsx        # Academic background
│   │   ├── Schedule.tsx         # Calendly integration
│   │   └── Contact.tsx          # Contact information
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx           # Button variants
│   │   ├── card.tsx             # Card component
│   │   ├── badge.tsx            # Badge component
│   │   ├── skeleton.tsx         # Loading skeletons
│   │   ├── timeline.tsx         # Timeline component
│   │   └── ...                  # Other UI components
│   ├── theme-provider.tsx       # Theme context provider
│   └── theme-toggle.tsx         # Theme switcher button
│
├── lib/
│   ├── types.ts                 # TypeScript type definitions
│   ├── portfolio-data.ts        # Portfolio content & configuration
│   ├── github-api.ts            # GitHub API utilities
│   ├── github-stats.ts          # GitHub statistics
│   ├── devto-api.ts             # Dev.to API utilities
│   ├── wakatime-api.ts          # WakaTime API utilities
│   └── utils.ts                 # Helper functions
│
├── public/                      # Static assets
├── .cursor/                     # Cursor AI configuration
├── components.json              # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies & scripts
```

---

## ⚙️ Configuration

### Personal Information

Update your portfolio content in `lib/portfolio-data.ts`:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Professional Title",
    email: "your.email@example.com",
    phone: "+1234567890",
    location: "Your City, Country",
    bio: "Your compelling professional bio...",
    resumeUrl: "https://link-to-your-resume.pdf"
  },
  
  social: [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    // ... more social links
  ],
  
  experience: [
    // Your professional experience
  ],
  
  skills: [
    // Your technical skills
  ],
  
  // ... other sections
};
```

### Theme Customization

Modify theme colors in `app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    /* ... customize colors */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark theme colors */
  }
}
```

---

## 🔌 API Integration

### WakaTime (Coding Statistics)

1. Create a [WakaTime account](https://wakatime.com/)
2. Install WakaTime plugin in your code editor
3. Get your API key from [Settings](https://wakatime.com/settings/account)
4. Add to `.env.local`: `WAKATIME_API_KEY=your_api_key`
5. Make your profile public in WakaTime settings

### Dev.to (Blog Integration)

1. Create a [Dev.to account](https://dev.to/)
2. Write and publish articles
3. Update `devToUsername` in `lib/portfolio-data.ts`
4. No API key required for public articles

### GitHub (Projects Showcase)

1. Update GitHub username in `lib/github-api.ts`
2. (Optional) Create a Personal Access Token for higher rate limits
3. Add to `.env.local`: `GITHUB_TOKEN=your_token`

### Calendly (Meeting Scheduling)

1. Create a [Calendly account](https://calendly.com/)
2. Set up your meeting types
3. Copy your scheduling link
4. Update `calendly.url` in `lib/portfolio-data.ts`

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Saurav02022/saurav-portfolio)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Deploy on Netlify

1. Push code to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📊 Performance

### Lighthouse Scores (Target)

- **Performance**: ≥90
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95

### Optimization Techniques

- Server-Side Rendering (SSR)
- Static Site Generation (SSG) where applicable
- Image optimization with `next/image`
- Code splitting and lazy loading
- Font optimization with `next/font`
- Minified and compressed assets
- Efficient caching strategies

### Bundle Size

- **First Load JS**: <150KB
- **Total Page Weight**: <300KB (gzipped)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

**Saurav Kumar**

- **Portfolio**: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)
- **Email**: [sk729584@gmail.com](mailto:sk729584@gmail.com)
- **GitHub**: [@Saurav02022](https://github.com/Saurav02022)
- **LinkedIn**: [linkedin.com/in/saurav02022](https://linkedin.com/in/saurav02022)
- **LeetCode**: [@Saurav02022](https://leetcode.com/u/Saurav02022/)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Aceternity UI](https://ui.aceternity.com/) - Stunning animated components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Hosting & deployment platform
- [WakaTime](https://wakatime.com/) - Automatic time tracking
- [Dev.to](https://dev.to/) - Developer blogging platform

---

## 📈 Roadmap

- [ ] Add unit tests with Jest
- [ ] Add E2E tests with Playwright
- [ ] Implement i18n (internationalization)
- [ ] Add blog CMS integration
- [ ] Add analytics dashboard
- [ ] Implement progressive web app (PWA)
- [ ] Add more animation variants

---

## 💡 Tips for Customization

1. **Update Colors**: Modify `app/globals.css` for theme colors
2. **Change Fonts**: Update `app/layout.tsx` for custom fonts
3. **Add Sections**: Create new components in `components/sections/`
4. **Modify Layout**: Edit `app/page.tsx` for section order
5. **Update Content**: All content lives in `lib/portfolio-data.ts`

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ by [Saurav Kumar](https://github.com/Saurav02022)**

</div>

