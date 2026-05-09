import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";
import { SITE_URL } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Saurav Kumar | Full stack engineer — Next.js, TypeScript, React Native, FastAPI",
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
    "Full stack engineer in India (three years) shipping Next.js and React Native apps with FastAPI, PostgreSQL and TypeScript — EdTech at 117 schools; prior streaming performance work. Open to remote roles.",
  keywords: [
    "Saurav Kumar",
    "Full stack engineer India",
    "Remote friendly developer",
    "Next.js",
    "React Native",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
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
    title: "Saurav Kumar | Full stack engineer · EdTech · Media performance",
    description:
      "Production web and mobile stacks, Postgres-backed APIs, offline-first PWAs at school scale and earlier OTT performance improvements. Includes accountable metrics on-page. Based in India.",
    siteName: "Saurav Kumar — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saurav Kumar — Full stack engineer portfolio",
      },
    ],
  },
  
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Saurav Kumar | Full stack engineer · EdTech · Media performance",
    description:
      "Production web and mobile stacks, Postgres-backed APIs, offline-first PWAs at school scale and earlier OTT performance improvements. Based in India.",
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

  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),

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
    <html lang="en-IN" suppressHydrationWarning>
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
