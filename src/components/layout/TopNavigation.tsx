import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { config } from "@/lib/config";

interface TopNavigationProps {
  isMobile?: boolean;
  isScrolled?: boolean;
}

export const TopNavigation = ({ isMobile, isScrolled }: TopNavigationProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home", emoji: "🏠" },
    { path: "/about", label: "About", emoji: "👨‍💻" },
    { path: "/projects", label: "Projects", emoji: "🚀" },
  ];

  /**
   * Check if current path is active
   */
  const isActive = (path: string): boolean => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  /**
   * Handle theme toggle with error handling
   */
  const handleThemeToggle = (): void => {
    try {
      toggleTheme();
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-10 transition-all duration-500 ease-out ${
        isScrolled 
          ? "border-b-2 border-border/80 dark:border-border/80 bg-background/95 dark:bg-background/80 backdrop-blur-xl shadow-lg dark:shadow-lg" 
          : "border-b border-border/60 dark:border-border/40 bg-background/80 dark:bg-background/60 backdrop-blur-lg"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
        
        {isMobile ? (
          /* Enhanced Mobile Identity with Better Light Mode Contrast */
          <div className="flex-1 flex justify-center">
            <Link 
              to="/" 
              className="flex flex-col items-center group transition-all duration-300 hover:scale-105"
              aria-label="Go to homepage"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-primary dark:to-secondary rounded-full animate-pulse"></div>
                <h1 className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300">
                  {config.name}
                </h1>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-secondary dark:to-primary rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs text-muted-foreground/80 dark:text-muted-foreground font-medium group-hover:text-primary/80 transition-colors duration-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {config.title}
              </p>
            </Link>
          </div>
        ) : (
          /* Enhanced Desktop Navigation with Better Light Mode Visibility */
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl group ${
                  isActive(item.path)
                    ? "text-primary bg-primary/15 dark:bg-primary/10 shadow-md border border-primary/30 dark:border-primary/20"
                    : "text-foreground/70 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:bg-muted/40 dark:hover:bg-muted/50 border border-transparent hover:border-border/50 dark:hover:border-border/30"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                    {item.emoji}
                  </span>
                  {item.label}
                </span>
                
                {/* Enhanced Active Indicator for Light Mode */}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-primary dark:to-secondary rounded-full shadow-sm" />
                )}
              </Link>
            ))}
          </div>
        )}
        
        {/* Enhanced Theme Toggle with Better Light Mode Styling */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleThemeToggle}
          className="hover:bg-muted/60 dark:hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:rotate-12 bg-background/60 dark:bg-background/50 backdrop-blur-sm border-2 border-border/60 dark:border-border/30 shadow-sm hover:shadow-md hover:border-primary/50"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? 
            <Sun className="w-4 h-4 text-yellow-500 drop-shadow-lg animate-pulse" /> : 
            <Moon className="w-4 h-4 text-slate-600 drop-shadow-sm" />
          }
        </Button>
      </div>
    </nav>
  );
};
