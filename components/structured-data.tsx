/**
 * Structured Data (JSON-LD) — Person, WebSite, projects (SoftwareSourceCode),
 * and breadcrumbs for rich results.
 */

import { SITE_URL } from "@/lib/site-config";
import { EMAIL, NAME, ROLE, SOCIALS, cases } from "@/lib/portfolio-data";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    jobTitle: ROLE,
    description:
      "Full-stack software engineer with 3+ years in production — EdTech running across 117 schools, a video platform past 10,000 creators, and LLM features built for reliability.",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
    },
    sameAs: SOCIALS.map((s) => s.url),
    worksFor: {
      "@type": "Organization",
      name: "Shikha Learning Labs",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "IIIT Ranchi",
        description: "MCA (Master of Computer Applications), expected 2028",
      },
      {
        "@type": "EducationalOrganization",
        name: "Munger University",
        description: "B.Sc. Mathematics (Honours)",
      },
    ],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "Next.js",
      "React Native",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Google Cloud Run",
      "Playwright",
      "LLM Integration",
      "Full-Stack Development",
      "Offline-First Applications",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: ROLE,
      occupationLocation: {
        "@type": "City",
        name: "Mumbai, India",
      },
      skills:
        "Next.js, TypeScript, React Native, Python, FastAPI, PostgreSQL, Redis, Docker, GitHub Actions",
      experienceRequirements: "3+ years professional experience",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${NAME} — ${ROLE} portfolio`,
    alternateName: "Saurav Kumar Portfolio",
    url: SITE_URL,
    description:
      "Portfolio of Saurav Kumar — full-stack software engineer. Production EdTech across 117 schools, a 10,000+ creator video platform, and reliable LLM features.",
    author: {
      "@type": "Person",
      name: NAME,
    },
    inLanguage: "en-IN",
    copyrightYear: 2026,
    copyrightHolder: {
      "@type": "Person",
      name: NAME,
    },
  };

  const projectSchemas = cases.map((c) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: c.title,
    description: c.summary,
    codeRepository: c.repoUrl,
    programmingLanguage: ["TypeScript", "Python"],
    ...(c.liveUrl ? { url: c.liveUrl } : {}),
    author: {
      "@type": "Person",
      name: NAME,
      url: SITE_URL,
    },
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experience",
        item: `${SITE_URL}/#experience`,
      },
      { "@type": "ListItem", position: 3, name: "Work", item: `${SITE_URL}/#work` },
      { "@type": "ListItem", position: 4, name: "About", item: `${SITE_URL}/#about` },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${SITE_URL}/#contact`,
      },
    ],
  };

  const schemas = [personSchema, websiteSchema, ...projectSchemas, breadcrumbSchema];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
