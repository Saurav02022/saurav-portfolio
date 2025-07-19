import { 
  Github, Linkedin, Mail, MessageSquare, Phone, X, ExternalLink, 
  Home, User, FolderOpen, Sparkles, Heart 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export const Sidebar = ({ onClose, isMobile }: SidebarProps) => {
  const location = useLocation();
  
  const socialLinks = config.socialLinks.map(link => {
    const icon = link.icon === "Linkedin" ? Linkedin : Github;
    return { icon, href: link.url, label: link.platform };
  });

  const navigationItems = [
    { path: "/", label: "Home", icon: Home, color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { path: "/about", label: "About", icon: User, color: "text-green-500", bgColor: "bg-green-500/10" },
    { path: "/projects", label: "Projects", icon: FolderOpen, color: "text-purple-500", bgColor: "bg-purple-500/10" },
  ];

  /**
   * Check if current path is active
   */
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <aside className="h-full w-full p-8 overflow-y-auto relative">
      {/* Enhanced Header with Better Light Mode Contrast */}
      <div className="mb-12 relative">
        <Link to="/" onClick={onClose} className="block group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-primary dark:to-secondary rounded-full animate-pulse shadow-sm"></div>
            <h1 className="text-3xl font-bold text-foreground group-hover:text-primary group-hover:scale-105 transition-all duration-300">
              {config.name}
            </h1>
            <Sparkles className="w-5 h-5 text-blue-500 dark:text-primary animate-pulse" />
          </div>
        </Link>
        <p className="text-base text-foreground/70 dark:text-muted-foreground font-medium mb-4">{config.title}</p>
        
        {/* Enhanced Gradient Accent for Light Mode */}
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 dark:from-primary dark:via-secondary dark:to-primary rounded-full shadow-md"></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400/60 dark:bg-primary/30 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-8 right-4 w-1.5 h-1.5 bg-purple-400/60 dark:bg-secondary/40 rounded-full animate-bounce delay-300"></div>

        {/* Enhanced Close Button - Only show on mobile */}
        {onClose && isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0 hover:bg-destructive/20 hover:text-destructive hover:scale-110 transition-all duration-300 hover:rotate-90"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </Button>
        )}
      </div>

      {/* Enhanced Mobile Navigation with Better Light Mode */}
      {isMobile && (
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-foreground/80 dark:text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-primary dark:to-secondary rounded-full animate-pulse"></div>
            Navigation
            <div className="flex-1 h-px bg-gradient-to-r from-border/60 dark:from-border to-transparent"></div>
          </h3>
          
          <div className="space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group hover:scale-105 border ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-primary/20 dark:to-secondary/10 text-blue-600 dark:text-primary shadow-lg border-blue-200/50 dark:border-primary/20"
                    : "text-foreground/70 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:bg-muted/30 dark:hover:bg-muted/50 hover:shadow-md border-transparent hover:border-border/40 dark:hover:border-border/30"
                }`}
              >
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-blue-100 dark:bg-primary/20 shadow-md scale-110"
                    : `${item.bgColor} dark:${item.bgColor} group-hover:scale-110 group-hover:shadow-lg`
                }`}>
                  <item.icon className={`w-4 h-4 ${
                    isActive(item.path) ? "text-blue-600 dark:text-primary" : item.color
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium block">{item.label}</span>
                </div>
                {isActive(item.path) && (
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-primary dark:to-secondary rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Contact Section with Better Light Mode Styling */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-foreground/80 dark:text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-3">
          <Heart className="w-3 h-3 text-red-500 animate-pulse" />
          Stay in Touch
          <div className="flex-1 h-px bg-gradient-to-r from-border/60 dark:from-border to-transparent"></div>
        </h3>
        
        <div className="space-y-4">
          {/* Enhanced Email with Better Light Mode Contrast */}
          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-4 p-4 rounded-xl text-foreground/70 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:bg-gradient-to-r hover:from-muted/40 hover:to-blue-50 dark:hover:from-muted/50 dark:hover:to-primary/10 transition-all duration-300 group hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-200/50 dark:hover:border-primary/20"
          >
            <div className="p-3 bg-blue-50 dark:bg-primary/10 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
              <Mail className="w-4 h-4 text-blue-600 dark:text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium block truncate">{config.email}</span>
              <span className="text-xs text-muted-foreground">Drop me a line</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
          </a>

          {/* Enhanced Phone */}
          <a
            href={`tel:${config.phone}`}
            className="flex items-center gap-4 p-4 rounded-xl text-foreground/70 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:bg-gradient-to-r hover:from-muted/40 hover:to-green-50 dark:hover:from-muted/50 dark:hover:to-green-500/10 transition-all duration-300 group hover:scale-105 hover:shadow-lg border border-transparent hover:border-green-200/50 dark:hover:border-green-500/20"
          >
            <div className="p-3 bg-green-50 dark:bg-green-500/10 rounded-xl group-hover:bg-green-100 dark:group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
              <Phone className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium block">{config.phone}</span>
              <span className="text-xs text-muted-foreground">Let's talk</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
          </a>

          {/* Enhanced WhatsApp */}
          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl text-foreground/70 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:bg-gradient-to-r hover:from-muted/40 hover:to-green-50 dark:hover:from-muted/50 dark:hover:to-green-500/10 transition-all duration-300 group hover:scale-105 hover:shadow-lg border border-transparent hover:border-green-200/50 dark:hover:border-green-500/20"
          >
            <div className="p-3 bg-green-50 dark:bg-green-500/10 rounded-xl group-hover:bg-green-100 dark:group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
              <MessageSquare className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium block">WhatsApp</span>
              <span className="text-xs text-muted-foreground">Quick chat</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
          </a>

          {/* Enhanced Social Links */}
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-xl text-foreground/70 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-all duration-300 group hover:scale-105 hover:shadow-lg border border-transparent ${
                link.label === 'LinkedIn' 
                  ? 'hover:bg-gradient-to-r hover:from-muted/40 hover:to-blue-50 dark:hover:from-muted/50 dark:hover:to-blue-500/10 hover:border-blue-200/50 dark:hover:border-blue-500/20' 
                  : 'hover:bg-gradient-to-r hover:from-muted/40 hover:to-gray-50 dark:hover:from-muted/50 dark:hover:to-primary/10 hover:border-gray-200/50 dark:hover:border-primary/20'
              }`}
            >
              <div className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-sm ${
                link.label === 'LinkedIn' 
                  ? 'bg-blue-50 dark:bg-blue-500/10 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20' 
                  : 'bg-gray-50 dark:bg-primary/10 group-hover:bg-gray-100 dark:group-hover:bg-primary/20'
              }`}>
                <link.icon className={`w-4 h-4 ${
                  link.label === 'LinkedIn' ? 'text-blue-600' : 'text-gray-700 dark:text-primary'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium block">{link.label}</span>
                <span className="text-xs text-muted-foreground">Connect with me</span>
              </div>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
