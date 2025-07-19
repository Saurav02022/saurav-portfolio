import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  /**
   * Enhanced mobile detection with better breakpoints
   * Using 1024px (lg) as breakpoint for better tablet/desktop distinction
   */
  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    const handleResize = (): void => {
      try {
        checkIfMobile();
      } catch (error) {
        console.warn('Error during resize handling:', error);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Enhanced scroll detection for dynamic UI changes
   */
  useEffect(() => {
    const handleScroll = (): void => {
      try {
        setIsScrolled(window.scrollY > 20);
      } catch (error) {
        console.warn('Error handling scroll:', error);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Handle outside click to close mobile sidebar
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      try {
        const sidebar = document.getElementById("sidebar");
        const hamburger = document.getElementById("hamburger-menu");

        if (
          isMobile &&
          isSidebarOpen &&
          sidebar &&
          !sidebar.contains(event.target as Node) &&
          hamburger &&
          !hamburger.contains(event.target as Node)
        ) {
          setIsSidebarOpen(false);
        }
      } catch (error) {
        console.warn('Error handling outside click:', error);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isSidebarOpen]);

  /**
   * Body scroll management for mobile sidebar
   */
  useEffect(() => {
    try {
      if (isMobile && isSidebarOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    } catch (error) {
      console.warn('Error managing body scroll:', error);
    }
  }, [isMobile, isSidebarOpen]);

  const handleSidebarClose = (): void => {
    try {
      setIsSidebarOpen(false);
    } catch (error) {
      console.error('Error closing sidebar:', error);
    }
  };

  const handleSidebarOpen = (): void => {
    try {
      setIsSidebarOpen(true);
    } catch (error) {
      console.error('Error opening sidebar:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-muted/10 to-muted/20 dark:from-background dark:via-background/95 dark:to-muted/30 relative overflow-hidden">
      {/* Enhanced Background Pattern - More Visible in Light Mode */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.05),transparent_50%)]" />
      
      {/* Enhanced Mobile Hamburger with Better Light Mode Styling */}
      {isMobile && (
        <Button
          id="hamburger-menu"
          variant="ghost"
          size="icon"
          className={`fixed top-6 left-6 z-50 transition-all duration-300 ease-out ${
            isSidebarOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          } bg-background/90 dark:bg-background/80 backdrop-blur-lg border-2 border-border/80 dark:border-border/50 shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl hover:scale-110 hover:bg-background hover:border-primary/50`}
          onClick={handleSidebarOpen}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5 text-foreground/80 dark:text-foreground" />
        </Button>
      )}

      {/* Enhanced Sidebar with Better Light Mode Background */}
      <div
        id="sidebar"
        className={`fixed left-0 top-0 h-full z-30 transition-all duration-500 ease-out ${
          isMobile
            ? isSidebarOpen
              ? "translate-x-0 shadow-2xl"
              : "-translate-x-full"
            : "translate-x-0"
        } w-80 lg:w-72 xl:w-80`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="h-full bg-background/95 dark:bg-background/95 backdrop-blur-xl border-r-2 border-border/80 dark:border-border/60 shadow-xl">
          <Sidebar onClose={handleSidebarClose} isMobile={isMobile} />
        </div>
      </div>

      {/* Main Content with Enhanced Responsiveness */}
      <div className={`flex-1 flex flex-col transition-all duration-500 ease-out ${
        isMobile ? "ml-0" : "ml-80 lg:ml-72 xl:ml-80"
      }`}>
        
        {/* Enhanced Top Navigation with Dynamic Blur */}
        <div className={`fixed top-0 right-0 z-20 transition-all duration-500 ease-out ${
          isMobile ? "left-0" : "left-80 lg:left-72 xl:left-80"
        }`}>
          <TopNavigation isMobile={isMobile} isScrolled={isScrolled} />
        </div>
        
        {/* Main Content Container */}
        <main className="flex-1 overflow-y-auto pt-24 pb-8" role="main">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {children}
            </div>
          </div>
        </main>
        
        {/* Enhanced Footer */}
        <footer 
          className="border-t-2 border-border/60 dark:border-border/50 py-8 px-6 sm:px-8 lg:px-12 text-center lg:text-left bg-muted/20 dark:bg-muted/20 backdrop-blur-sm"
          role="contentinfo"
        >
          <div className="container mx-auto max-w-7xl">
            <p className="text-sm text-muted-foreground">
              {config.siteConfig.footer.text}
            </p>
          </div>
        </footer>
      </div>

      {/* Enhanced Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 transition-all duration-300"
          onClick={handleSidebarClose}
          aria-label="Close navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleSidebarClose();
            }
          }}
        />
      )}
    </div>
  );
};
