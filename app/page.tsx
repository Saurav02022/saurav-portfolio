import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { TimeTracker } from "@/components/ui/time-tracker";
import { ErrorBoundary } from "@/components/error-boundary";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section - First Impression */}
      <Hero />
      
      {/* Experience - What employers look for first */}
      <Experience />
      
      {/* Skills - Technical capabilities with context */}
      <Skills />
      
      {/* Projects - Showcase work with real examples */}
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
      
      {/* Blog - Thought leadership and personal branding */}
      <ErrorBoundary>
        <Blog username={portfolioData.devToUsername || 'saurav_dev_2022'} />
      </ErrorBoundary>
      
      {/* Education - Academic background */}
      <Education />
      
      {/* Contact & Schedule - Combined final call to action */}
      <Contact />
      
      <Footer />

      <TimeTracker />
    </main>
  );
}
