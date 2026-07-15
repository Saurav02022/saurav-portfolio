import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { SITE_URL } from "@/lib/site-config";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const TITLE = "Saurav Kumar — Full-Stack Software Engineer";
const DESCRIPTION =
  "Saurav Kumar, full-stack software engineer with 3+ years in production. EdTech running across 117 schools, a video platform past 10,000 creators, and LLM features built for reliability.";
const OG_DESCRIPTION =
  "Full-stack engineer, 3+ years. Production EdTech across 117 schools, a 10,000+ creator video platform, and reliable LLM features.";

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Saurav Kumar",
  },
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  keywords: [
    "Saurav Kumar",
    "Full-Stack Software Engineer",
    "Full stack engineer India",
    "Next.js",
    "React Native",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "LLM engineering",
    "EdTech developer",
  ],
  authors: [{ name: "Saurav Kumar", url: "https://github.com/saurav02022" }],
  creator: "Saurav Kumar",
  publisher: "Saurav Kumar",
  applicationName: "Saurav Kumar Portfolio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "Saurav Kumar — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saurav Kumar — Full-Stack Software Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    creator: "@saurav02022",
    images: ["/og-image.png"],
  },
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
  category: "Technology",
  classification: "Portfolio Website",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
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
    <html
      lang="en-IN"
      className={`${hanken.variable} ${newsreader.variable} ${jetbrains.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
