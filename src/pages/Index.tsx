
import { Layout } from "@/components/layout/Layout";
import { Summary } from "@/components/resume/Summary";
import { Skills } from "@/components/resume/Skills";
import { Experience } from "@/components/resume/Experience";
import { Projects } from "@/components/resume/Projects";
import { Education } from "@/components/resume/Education";
import { Certifications } from "@/components/resume/Certifications";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hey there, I'm Saurav</h1>
          <p className="text-xl text-gray-600">Frontend Engineer | Web Developer</p>
        </div>
        
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </div>
    </Layout>
  );
};

export default Index;
