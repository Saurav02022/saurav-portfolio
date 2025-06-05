
import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>
            <div className="prose text-gray-700">
              <p className="mb-4">
                I'm a Mid-level Frontend Engineer with expertise in building performant, 
                accessible web applications using React, Next.js, and TypeScript. My experience 
                spans developing scalable UI systems, optimizing rendering performance, and 
                modernizing legacy codebases.
              </p>
              <p className="mb-4">
                My journey in tech began with the insatiable curiosity of learning new 
                technologies. Now, I'm passionate about creating seamless digital experiences. 
                When I'm not coding, you'll find me exploring new frameworks and contributing 
                to open-source projects.
              </p>
              <p>
                Let's connect and build something awesome (or at least mildly entertaining)!
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Skills</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "React Native", "Redux", "Tailwind CSS", "Material UI", "Chakra UI", "Shadcn UI"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Vercel", "Netlify", "GitHub Actions", "Git"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Work Experience</h1>
            
            <div className="space-y-8">
              <div className="border-l-2 border-blue-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">Shikha Learning Labs Private Limited</h3>
                  <span className="text-sm text-gray-500">Mumbai, India</span>
                </div>
                <h4 className="font-semibold text-blue-600 mb-2">Next.js Developer</h4>
                <p className="text-sm text-gray-500 mb-3">Nov 2024 - Present</p>
                
                <h5 className="font-medium text-gray-900 mb-2">Recent Projects</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Led end-to-end development of 2 internal products, improving project execution</li>
                  <li>• Redesigned 2 internal projects with modern UI/UX, increasing user engagement by 20%</li>
                  <li>• Developed PWA for Central School Foundation, tested with 50+ educators</li>
                  <li>• Optimized frontend performance, reducing API calls by 30%</li>
                </ul>
              </div>

              <div className="border-l-2 border-blue-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">Neweb Labs Private Limited</h3>
                  <span className="text-sm text-gray-500">Bengaluru, India</span>
                </div>
                <h4 className="font-semibold text-blue-600 mb-2">Full Stack Developer</h4>
                <p className="text-sm text-gray-500 mb-3">May 2023 - Sep 2024</p>
                
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Improved Nuveb OTT platform render time by 70% using Next.js</li>
                  <li>• Boosted organic traffic by 30% through SEO optimizations</li>
                  <li>• Developed reusable components using Atomic Design</li>
                  <li>• Contributed to React Native app with 1k+ new users</li>
                </ul>
              </div>

              <div className="border-l-2 border-blue-200 pl-6">
                <h3 className="font-bold text-gray-900 mb-2">Masai School</h3>
                <h4 className="font-semibold text-blue-600 mb-2">Full Stack Web Developer Trainee</h4>
                <p className="text-sm text-gray-500 mb-3">May 2022 - May 2023</p>
                
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Led 3 collaborative projects and developed 4 full-stack web apps</li>
                  <li>• Mentored 20+ peers in code optimization and debugging</li>
                  <li>• Ranked among top performers out of 100+ peers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
