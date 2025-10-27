import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

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
  description: "Experienced Full-Stack Developer with 2+ years building scalable web applications. Specialized in React, Next.js, TypeScript, and React Native. Proven track record: 20% user engagement increase, 70% faster render times, 1000+ active users. Available for freelance projects and full-time opportunities.",
  keywords: [
    // Primary Skills
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    // Frontend Technologies
    "Frontend Engineer",
    "React.js Expert",
    "Next.js Expert",
    "JavaScript Developer",
    "Tailwind CSS",
    "Responsive Web Design",
    // Backend & Full-Stack
    "Node.js Developer",
    "RESTful API Development",
    "Full-Stack Engineer",
    "MERN Stack Developer",
    // Specific Tools & Libraries
    "Redux Toolkit",
    "TanStack Query",
    "React Testing Library",
    "Jest",
    "Cypress",
    // Modern Practices
    "PWA Development",
    "Performance Optimization",
    "Web Accessibility",
    "SEO Optimization",
    "Mobile-First Design",
    // Cloud & DevOps
    "Vercel",
    "Firebase",
    "Supabase",
    "CI/CD",
    "Git",
    "GitHub Actions",
    // Location & Work
    "India",
    "Remote Developer",
    "Freelance Developer",
    // Personal Brand
    "Saurav Kumar",
    "Portfolio",
    "Hire Full-Stack Developer"
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
