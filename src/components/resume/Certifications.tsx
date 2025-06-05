
import { Award, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      name: "Front-end Developer (React)",
      issuer: "HackerRank",
      year: "2024",
      url: "https://www.hackerrank.com/certificates/7b1b3fe04762"
    },
    {
      name: "JavaScript (Intermediate)",
      issuer: "HackerRank", 
      year: "2024",
      url: "https://www.hackerrank.com/certificates/2f1d11a75816"
    },
    {
      name: "Full Stack Web Development",
      issuer: "Masai School",
      year: "2024",
      url: "https://drive.google.com/file/d/1hfzEOXG47fB25Q9hs5l4I4ZXwPHkreTG/view"
    }
  ];

  return (
    <section className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-200 pb-2">
        Certifications
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-800 leading-tight">{cert.name}</h3>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-2">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                <p className="text-slate-600">{cert.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
