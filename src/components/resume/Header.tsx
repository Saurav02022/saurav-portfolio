
import { Mail, Phone, Globe, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="text-center mb-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-slate-800 mb-2">
        Saurav Kumar
      </h1>
      <p className="text-2xl text-blue-600 font-medium mb-6">Frontend Engineer</p>
      
      <div className="flex flex-wrap justify-center items-center gap-6 text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Mumbai, India</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+91 9572365331</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:sk729584@gmail.com" className="hover:text-blue-600 transition-colors">
            sk729584@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-6">
        <Button variant="outline" size="sm" asChild>
          <a href="https://saurav02022.github.io" target="_blank" rel="noopener noreferrer">
            <Globe className="w-4 h-4 mr-2" />
            Portfolio
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href="https://linkedin.com/in/saurav02022" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href="https://github.com/Saurav02022" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
      </div>
    </header>
  );
};
