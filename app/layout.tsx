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
  title: "Saurav Kumar - Full-Stack Engineer",
  description: "Professional portfolio of Saurav Kumar, a passionate Full-Stack Engineer specializing in modern web technologies, React, Node.js, and cloud solutions.",
  keywords: ["Full-Stack Engineer", "React Developer", "Node.js", "TypeScript", "Next.js", "Portfolio", "Saurav Kumar"],
  authors: [{ name: "Saurav Kumar", url: "https://github.com/Saurav02022" }],
  creator: "Saurav Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sauravkumar.dev",
    title: "Saurav Kumar - Full-Stack Engineer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
    siteName: "Saurav Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Kumar - Full-Stack Engineer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
