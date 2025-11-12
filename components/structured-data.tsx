/**
 * Structured Data (JSON-LD) Component
 * Provides rich snippets for search engines (Google, Bing, etc.)
 * Helps appear in rich search results with enhanced information
 */

export function StructuredData() {
  // Person Schema - Professional Profile
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saurav Kumar",
    jobTitle: "Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, TypeScript, and React Native with 3+ years of professional experience",
    url: "https://saurav-portfolio-lovat.vercel.app",
    image: "https://saurav-portfolio-lovat.vercel.app/og-image.png",
    email: "sk729584@gmail.com",
    telephone: "+919572365331",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India"
    },
    sameAs: [
      "https://github.com/Saurav02022",
      "https://www.linkedin.com/in/saurav02022/",
      "https://leetcode.com/u/Saurav02022/",
      "https://dev.to/saurav_dev_2022"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Shikha Learning Labs"
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Masai School",
        description: "Full Stack Web Development"
      },
      {
        "@type": "EducationalOrganization",
        name: "Munger University",
        description: "Bachelor of Science in Mathematics"
      }
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React Native",
      "Web Development",
      "Mobile App Development",
      "Full-Stack Development",
      "MERN Stack",
      "Frontend Engineering",
      "Backend Development",
      "Progressive Web Apps",
      "Performance Optimization"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India"
      },
      skills: "React, Next.js, TypeScript, Node.js, JavaScript, React Native, MongoDB, Express.js, Tailwind CSS, Redux, Git, CI/CD",
      experienceRequirements: "3+ years"
    }
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Saurav Kumar - Full-Stack Development Services",
    description: "Professional web and mobile application development services specializing in React, Next.js, and TypeScript",
    provider: {
      "@type": "Person",
      name: "Saurav Kumar"
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Application Development",
      "Mobile App Development",
      "React Development",
      "Next.js Development",
      "TypeScript Development",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "Performance Optimization",
      "Technical Consulting"
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://saurav-portfolio-lovat.vercel.app",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+919572365331",
        contactType: "Customer Service"
      },
      servicePostalAddress: {
        "@type": "PostalAddress",
        addressCountry: "IN"
      }
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saurav Kumar - Full-Stack Developer Portfolio",
    alternateName: "Saurav Kumar Portfolio",
    url: "https://saurav-portfolio-lovat.vercel.app",
    description: "Professional portfolio showcasing full-stack development projects, skills, and experience in React, Next.js, and TypeScript",
    author: {
      "@type": "Person",
      name: "Saurav Kumar"
    },
    inLanguage: "en-US",
    copyrightYear: 2024,
    copyrightHolder: {
      "@type": "Person",
      name: "Saurav Kumar"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://saurav-portfolio-lovat.vercel.app"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://saurav-portfolio-lovat.vercel.app#projects"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: "https://saurav-portfolio-lovat.vercel.app#experience"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://saurav-portfolio-lovat.vercel.app#contact"
      }
    ]
  };

  return (
    <>
      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* Professional Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

