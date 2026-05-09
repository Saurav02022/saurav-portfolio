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

const SITE_URL = "https://saurav02022-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Saurav Kumar | Software Engineer | React • Next.js • FastAPI",
    template: "%s | Saurav Kumar",
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
  description:
    "Software engineer with about three years of experience shipping full-stack and mobile products, including AI-assisted EdTech systems (Next.js, FastAPI, PostgreSQL, Google Gemini) and high-traffic media platforms. Based in India; open to remote roles.",
  keywords: [
    "Saurav Kumar",
    "Software Engineer India",
    "Full stack developer",
    "Next.js",
    "React Native",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Google Gemini",
    "Supabase",
    "Docker",
    "Google Cloud Run",
    "Playwright",
    "Cypress",
    "EdTech developer",
    "OTT platform performance",
  ],
  authors: [
    {
      name: "Saurav Kumar",
      url: "https://github.com/saurav02022",
    },
  ],
  creator: "Saurav Kumar",
  publisher: "Saurav Kumar",
  applicationName: "Saurav Kumar Portfolio",
  
  // Open Graph Metadata for Social Sharing
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Saurav Kumar | Software Engineer",
    description:
      "Software engineer building production web and mobile systems with Next.js, FastAPI, PostgreSQL, and Google Gemini. Experience across EdTech at scale and media platform performance.",
    siteName: "Saurav Kumar — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saurav Kumar — Software engineer portfolio",
      },
    ],
  },
  
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Saurav Kumar | Software Engineer",
    description:
      "Full-stack and mobile delivery with Next.js, FastAPI, PostgreSQL, and Gemini. About three years in production systems for education and media.",
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
    canonical: SITE_URL,
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
