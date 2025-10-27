import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Education } from "@/components/sections/Education";
import { CodingTime } from "@/components/sections/CodingTime";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { TimeTracker } from "@/components/ui/time-tracker";
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
      <Projects />
      
      {/* Blog - Thought leadership and personal branding */}
      <Blog username={portfolioData.devToUsername} />
      
      {/* Education - Academic background */}
      <Education />
      
      {/* Coding Time - Unique differentiator */}
      <CodingTime />
      
      {/* Contact & Schedule - Combined final call to action */}
      <Contact />
      
      <Footer />

      <TimeTracker />
    </main>
  );
}
