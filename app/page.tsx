import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { CodingTime } from "@/components/sections/CodingTime";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { TimeTracker } from "@/components/ui/time-tracker";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      
      <Hero />
      
      <Skills />
      
      <Projects />
      
      <Experience />
      
      <Education />
      
      <CodingTime />
      
      <Contact />
      
      <Footer />

      <TimeTracker />
    </main>
  );
}
