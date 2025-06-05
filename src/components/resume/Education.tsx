
import { GraduationCap, ExternalLink } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "B.Sc. Mathematics",
      institution: "Chandrashekhar Nasib Banke College",
      url: "https://www.cnbcollege.org.in/",
      period: "June 2019 -- July 2023"
    },
    {
      degree: "Full Stack Web Development",
      institution: "Masai School",
      url: "https://www.masaischool.com/",
      period: "May 2022 -- May 2023"
    }
  ];

  return (
    <section className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-200 pb-2">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-800">{edu.degree}</h3>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-blue-600">{edu.institution}</span>
                  <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-slate-600">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
