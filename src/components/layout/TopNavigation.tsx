
import { Link, useLocation } from "react-router-dom";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TopNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/posts", label: "Posts" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button variant="ghost" size="icon">
          <Moon className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
};
