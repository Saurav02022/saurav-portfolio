import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Github, Sparkles, AlertTriangle } from "lucide-react";
import { config } from "@/lib/config";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState<number>(10);

  /**
   * Log 404 error with enhanced error tracking
   */
  useEffect(() => {
    try {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname,
        {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }
      );
    } catch (error) {
      console.error('Error logging 404:', error);
    }
  }, [location.pathname]);

  /**
   * Auto-redirect countdown timer
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  /**
   * Handle navigation with error handling
   */
  const handleNavigation = (path: string): void => {
    try {
      navigate(path);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to window.location
      window.location.href = path;
    }
  };

  /**
   * Handle going back with error handling
   */
  const handleGoBack = (): void => {
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Go back error:', error);
      navigate('/');
    }
  };

  /**
   * Get a helpful suggestion based on the attempted path
   */
  const getSuggestion = (): string => {
    const path = location.pathname.toLowerCase();
    
    if (path.includes('project')) return 'Looking for projects? Check out my work!';
    if (path.includes('about')) return 'Want to know more about me?';
    if (path.includes('contact')) return 'Let\'s get in touch!';
    if (path.includes('blog')) return 'Interested in my thoughts and articles?';
    
    return 'Explore my portfolio to see what I\'ve been working on!';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Elements - Consistent with other pages */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-yellow-50/40 dark:from-red-950/20 dark:via-orange-950/10 dark:to-yellow-950/20 pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-red-200/20 to-orange-200/20 dark:from-red-500/10 dark:to-orange-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 dark:from-orange-500/10 dark:to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          
          {/* Error Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950/50 dark:to-orange-950/50 rounded-full border border-red-200/50 dark:border-red-500/20 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">
              Page Not Found • Error 404
            </span>
            <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
          </div>

          {/* Main Error Content */}
          <div className="bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl p-8 sm:p-12 shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-300 space-y-8">
            
            {/* Giant 404 Display */}
            <div className="space-y-6">
              <div className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent leading-none">
                404
              </div>
              
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Oops! Page Not Found
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  The page you're looking for doesn't exist or has been moved. 
                  {getSuggestion()}
                </p>
              </div>
            </div>

            {/* Path Information */}
            <div className="bg-muted/30 dark:bg-muted/20 rounded-xl p-4 border border-border/30">
              <p className="text-sm text-muted-foreground mb-2">Attempted Path:</p>
              <code className="text-sm font-mono bg-muted/50 px-3 py-1 rounded-lg text-foreground break-all">
                {location.pathname}
              </code>
            </div>

            {/* Auto Redirect Info */}
            <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-xl p-4 border border-blue-200/50 dark:border-blue-500/20">
              <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">
                  Auto-redirecting to home in {countdown} seconds
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                onClick={() => handleNavigation('/')}
                className="group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                Go Home
              </Button>
              
              <Button 
                variant="outline"
                onClick={handleGoBack}
                className="group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold border-2 border-border/60 dark:border-border/40 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </div>

            {/* Quick Navigation Links */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4">Or explore these sections:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleNavigation('/about')}
                  className="hover:bg-muted/50 transition-all duration-200"
                >
                  About Me
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleNavigation('/projects')}
                  className="hover:bg-muted/50 transition-all duration-200"
                >
                  Projects
                </Button>
                {config.github?.username && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    asChild
                    className="hover:bg-muted/50 transition-all duration-200"
                  >
                    <a 
                      href={`https://github.com/${config.github.username}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-3 w-3" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-3">
                Still can't find what you're looking for?
              </p>
              <Button 
                variant="link" 
                size="sm"
                asChild
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <a href={`mailto:${config.email}?subject=404 Error - Page Not Found&body=I was looking for: ${location.pathname}`}>
                  Get in touch with me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Consistent with other pages */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-red-400/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400/30 rounded-full animate-bounce delay-1000"></div>
    </div>
  );
};

export default NotFound;
