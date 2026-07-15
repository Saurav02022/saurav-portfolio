import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
