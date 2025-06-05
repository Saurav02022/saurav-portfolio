
import { Header } from "@/components/resume/Header";
import { Summary } from "@/components/resume/Summary";
import { Skills } from "@/components/resume/Skills";
import { Experience } from "@/components/resume/Experience";
import { Projects } from "@/components/resume/Projects";
import { Education } from "@/components/resume/Education";
import { Certifications } from "@/components/resume/Certifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </div>
    </div>
  );
};

export default Index;
