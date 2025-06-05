
import { Mail, Linkedin, Github, Youtube, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/saurav02022", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Saurav02022", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 min-h-screen bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Saurav Kumar</h1>
      </div>

      {/* Stay in Touch */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          STAY IN TOUCH
        </h3>
        <div className="space-y-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <link.icon className="w-4 h-4" />
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          ACTIONS
        </h3>
        <div className="space-y-2">
          <Button
            variant={isActive("/") ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link to="/">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Link>
          </Button>
          <Button variant="default" className="w-full justify-start">
            <Mail className="w-4 h-4 mr-2" />
            Hire Me
          </Button>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-auto">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          THE LINE I LIVE BY
        </h3>
        <p className="text-sm text-gray-600 italic">
          A journey of a thousand miles begins with a single step.
        </p>
      </div>
    </div>
  );
};
