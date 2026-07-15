import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
// ≤160 chars so it doesn't truncate in SERPs.
const DESCRIPTION =
  "Full-stack software engineer, 3+ years in production. EdTech in 117 schools, a 10,000-creator video platform, and LLM features built to survive real use.";
const OG_DESCRIPTION =
  "Full-stack engineer, 3+ years. EdTech across 117 schools, a 10,000+ creator video platform, and LLM features that survive weak networks.";

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
  // Icons and OG/Twitter images come from the app/ file conventions
  // (icon.tsx, apple-icon.tsx, opengraph-image.tsx) — generated from design
  // tokens at build, so the mark can't drift from the site.
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
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    creator: "@saurav02022",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
