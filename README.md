# Saurav Kumar - Portfolio 2025

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring beautiful animations and real-time GitHub integration.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Real-time GitHub Integration**: Automatically fetches and displays latest repositories
- **VS Code Time Tracking**: Simulated coding activity with live statistics
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Lighthouse score ≥90, optimized for speed
- **Accessibility**: WCAG AA compliant with proper ARIA labels
- **SEO Optimized**: Comprehensive meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.16
- **UI Components**: shadcn/ui + Aceternity UI
- **Animations**: Motion (Framer Motion)
- **Theme**: next-themes
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Saurav02022/portfolio-2025.git
cd portfolio-2025
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── api/github/projects/    # GitHub API endpoints
│   ├── globals.css            # Global styles and animations
│   ├── layout.tsx             # Root layout with theme provider
│   └── page.tsx               # Main portfolio page
├── components/
│   ├── sections/              # Portfolio sections
│   │   ├── Hero.tsx           # Hero section with spotlight
│   │   ├── About.tsx          # About section
│   │   ├── Experience.tsx     # Professional experience
│   │   ├── Skills.tsx         # Technical skills
│   │   ├── Projects.tsx       # GitHub projects showcase
│   │   ├── CodingTime.tsx     # VS Code time tracking
│   │   └── Contact.tsx        # Contact information
│   ├── ui/                    # Reusable UI components
│   ├── floating-nav.tsx       # Floating navigation
│   └── theme-toggle.tsx       # Theme switcher
├── lib/
│   ├── types.ts               # TypeScript type definitions
│   ├── portfolio-data.ts      # Portfolio configuration
│   ├── github-api.ts          # GitHub API utilities
│   └── utils.ts               # Utility functions
└── public/                    # Static assets
```

## 🎨 Sections

### Hero Section
- Animated spotlight effect
- Typewriter text animation
- Profile avatar with gradient border
- Social media links
- Call-to-action buttons

### About Section
- Personal introduction
- Core focus areas with icons
- Skills overview with proficiency levels
- Technology stack badges

### Experience Section
- Professional timeline using Aceternity Timeline
- Company details and achievements
- Technology tags for each role
- Statistics summary

### Skills Section
- Interactive skill categories with tabs
- Hover effects on skill cards
- Proficiency progress bars
- Skills summary statistics

### Projects Section
- Real-time GitHub API integration
- Project cards with hover effects
- Language indicators and topics
- GitHub statistics display

### Coding Time Section
- Simulated VS Code time tracking
- Live coding session indicator
- Programming language breakdown
- Project time allocation
- Productivity insights

### Contact Section
- Multiple contact methods
- Quick action buttons
- Availability status
- Response time indicator

## 🔧 Configuration

### Personal Information
Update your details in `lib/portfolio-data.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other details
  },
  // ... other sections
};
```

### GitHub Integration
The portfolio automatically fetches repositories from the GitHub username specified in `lib/github-api.ts`. Update the `GITHUB_USERNAME` constant:

```typescript
const GITHUB_USERNAME = 'your-github-username';
```

### Theme Customization
Modify theme colors in `app/globals.css` and `tailwind.config.ts`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: ≥90
- **Page Weight**: <300KB gzipped
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🎯 SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt optimization

## 🔒 Security

- No client-side API keys
- Rate limiting on API endpoints
- Input validation and sanitization
- HTTPS enforcement
- Content Security Policy headers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saurav Kumar**
- GitHub: [@Saurav02022](https://github.com/Saurav02022)
- Email: sk729584@gmail.com
- LeetCode: [@Saurav02022](https://leetcode.com/u/Saurav02022/)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Aceternity UI](https://ui.aceternity.com/) for the stunning animations
- [Lucide](https://lucide.dev/) for the icon set
- [Vercel](https://vercel.com/) for hosting and deployment

---

⭐ If you found this portfolio helpful, please give it a star!
