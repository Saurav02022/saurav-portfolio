import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saurav-portfolio-lovat.vercel.app"),
  title: {
    default: "Saurav Kumar | Full-Stack Developer | React • Next.js • TypeScript Expert",
    template: "%s | Saurav Kumar - Full-Stack Developer"
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  description: "🚀 Saurav Kumar - Full-Stack Developer specializing in React, Next.js, TypeScript & React Native. 3+ years building high-performance web apps with measurable results: ⚡ 70% faster load times • 📈 20% engagement boost • 👥 1000+ active users. Available for hire: Freelance projects & full-time roles. Expert in MERN stack, PWA development, performance optimization. Based in India, working remotely worldwide.",
  keywords: [
    // Primary Roles & Titles
    "Saurav Kumar Full-Stack Developer",
    "React Developer for hire",
    "Next.js Developer India",
    "TypeScript Expert",
    "React Native Mobile Developer",
    "Senior Frontend Engineer",
    "MERN Stack Specialist",
    
    // Core Technologies
    "React.js development",
    "Next.js 14 App Router",
    "TypeScript development",
    "JavaScript ES6+",
    "Node.js backend",
    "Express.js API",
    "MongoDB database",
    
    // Frontend Excellence
    "React Hooks expert",
    "Redux Toolkit state management",
    "TanStack Query data fetching",
    "Tailwind CSS styling",
    "Responsive web design",
    "Mobile-first development",
    "Progressive Web Apps PWA",
    "Single Page Applications SPA",
    
    // Performance & Quality
    "Web performance optimization",
    "Core Web Vitals expert",
    "SEO optimization",
    "Web accessibility WCAG",
    "Code splitting lazy loading",
    "Server-side rendering SSR",
    "Static site generation SSG",
    
    // Testing & DevOps
    "Jest unit testing",
    "Cypress E2E testing",
    "React Testing Library",
    "CI/CD pipelines",
    "Git version control",
    "GitHub Actions automation",
    "Vercel deployment",
    
    // Services & Solutions
    "custom web application development",
    "e-commerce website development",
    "SaaS application development",
    "API integration services",
    "legacy code modernization",
    "website performance audit",
    
    // Work Arrangements
    "remote full-stack developer India",
    "freelance React developer",
    "contract developer available",
    "hire dedicated developer",
    "full-time developer opportunities",
    
    // Location & Availability
    "India based developer",
    "remote work worldwide",
    "IST timezone developer",
    "immediate availability",
    
    // Problem Solving
    "scalable web applications",
    "high-performance websites",
    "responsive user interfaces",
    "cross-browser compatibility",
    "mobile app development",
    
    // Industry Experience
    "EdTech platform development",
    "OTT platform optimization",
    "enterprise web applications",
    "startup technical consultant",
    
    // Personal Brand
    "Saurav Kumar portfolio",
    "sk729584 at gmail",
    "github Saurav02022",
  ],
  authors: [
    { 
      name: "Saurav Kumar", 
      url: "https://github.com/Saurav02022" 
    }
  ],
  creator: "Saurav Kumar",
  publisher: "Saurav Kumar",
  applicationName: "Saurav Kumar Portfolio",
  
  // Open Graph Metadata for Social Sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saurav-portfolio-lovat.vercel.app",
    title: "Saurav Kumar | Full-Stack Developer | React • Next.js • TypeScript Expert",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, and TypeScript. 2+ years building high-performance web applications with proven results: 20% engagement boost, 70% faster load times, 1000+ users served.",
    siteName: "Saurav Kumar - Full-Stack Developer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saurav Kumar - Full-Stack Developer Portfolio",
      },
    ],
  },
  
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Saurav Kumar | Full-Stack Developer | React • Next.js • TypeScript",
    description: "Building scalable web applications with React, Next.js & TypeScript. 3+ years experience. 20% engagement ↑, 70% faster renders, 1000+ users. Open to opportunities.",
    creator: "@saurav02022",
    images: ["/og-image.png"],
  },
  
  // Robots & SEO
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Additional Metadata
  category: "Technology",
  classification: "Portfolio Website",
  
  // Verification (Add your verification codes if you have them)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
  
  // Alternate Languages (if you add i18n in future)
  alternates: {
    canonical: "https://saurav-portfolio-lovat.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
