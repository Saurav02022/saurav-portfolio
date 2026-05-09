/**
 * Structured Data (JSON-LD) Component
 * Provides rich snippets for search engines (Google, Bing, etc.)
 */

import { SITE_URL } from "@/lib/site-config";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saurav Kumar",
    jobTitle: "Full stack engineer",
    description:
      "India-based full stack engineer shipping Next.js, TypeScript, React Native, Python, FastAPI, and PostgreSQL — production EdTech at scale and media performance work. Open to remote roles.",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    email: "sk729584@gmail.com",
    telephone: "+919572365331",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    sameAs: [
      "https://github.com/saurav02022",
      "https://www.linkedin.com/in/saurav02022/",
      "https://leetcode.com/u/Saurav02022/",
      "https://dev.to/saurav_dev_2022",
      SITE_URL,
    ],
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
        description: "B.Sc. Mathematics (Honors)",
      },
    ],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "FastAPI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Docker",
      "Google Cloud Run",
      "Playwright",
      "Cypress",
      "Full-Stack Development",
      "Progressive Web Apps",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full stack engineer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
      skills:
        "Next.js, TypeScript, React Native, Python, FastAPI, PostgreSQL, Docker, GitHub Actions",
      experienceRequirements: "Three years professional experience",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Saurav Kumar - Full stack engineering",
    description:
      "Full stack and mobile software development with production experience in EdTech and media platforms, including AI-assisted workflows and offline-first delivery.",
    provider: {
      "@type": "Person",
      name: "Saurav Kumar",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Application Development",
      "Mobile App Development",
      "API Development",
      "LLM Integration",
      "Performance Improvement",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: SITE_URL,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+919572365331",
        contactType: "Customer Service",
      },
      servicePostalAddress: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saurav Kumar - Full stack engineer portfolio",
    alternateName: "Saurav Kumar Portfolio",
    url: SITE_URL,
    description:
      "Professional portfolio outlining full stack experience — React Native apps, FastAPI backends, Next.js surfaces, and structured LLM integrations.",
    author: {
      "@type": "Person",
      name: "Saurav Kumar",
    },
    inLanguage: "en-IN",
    copyrightYear: 2026,
    copyrightHolder: {
      "@type": "Person",
      name: "Saurav Kumar",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${SITE_URL}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: `${SITE_URL}/#experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${SITE_URL}/#contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
