import { Button } from "@/components/ui/button";
import { FileText, Mail, Phone, Github, Linkedin, Sparkles, ArrowRight, Download, Building2, Calendar, Award, ExternalLink } from "lucide-react";
import { config } from "@/lib/config";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";

/**
 * Icon mapping for social links with enhanced support
 */
const ICON_MAP = {
  Github: Github,
  Linkedin: Linkedin,
  ExternalLink: ExternalLink,
} as const;

/**
 * Home Component - Enhanced landing page with comprehensive config integration
 * Features responsive design, GitHub integration, and modern UI
 */
const Home = () => {
  // Integrate GitHub projects hook for dynamic project counting
  const { allProjects, loading, error } = useGitHubProjects();

  /**
   * Calculate total years of experience from config data
   * Uses the earliest start year from experience array
   * @returns {number} Number of years of professional experience
   */
  const calculateExperience = (): number => {
    try {
      const currentYear = new Date().getFullYear();
      const experiences = config.experience || [];
      
      if (experiences.length === 0) return 0;
      
      // Extract start years and find the earliest
      const earliestYear = Math.min(
        ...experiences.map(exp => {
          const startYear = parseInt(exp.period.split(' -- ')[0].split(' ').pop() || '2022');
          return startYear;
        })
      );
      
      return currentYear - earliestYear;
    } catch (error) {
      console.error('Error calculating experience:', error);
      return 3; // Fallback value based on resume
    }
  };

  /**
   * Get total project count - prioritizes GitHub data when available
   * Enhanced to work with the improved config structure
   * @returns {number} Total number of projects
   */
  const getProjectCount = (): number => {
    try {
      // If GitHub data is loaded and available, use it
      if (!loading && !error && allProjects && allProjects.length > 0) {
        return allProjects.length;
      }
      
      // Fallback to config-based calculation
      const githubRepos = config.github?.reposToShow || 0;
      return githubRepos;
    } catch (error) {
      console.error('Error getting project count:', error);
      return 12; // Updated fallback based on enhanced config
    }
  };

  /**
   * Get unique companies worked at from experience
   * @returns {number} Number of unique organizations worked at
   */
  const getCompaniesCount = (): number => {
    try {
      const companies = config.experience?.map(exp => exp.company) || [];
      return new Set(companies).size;
    } catch (error) {
      console.error('Error getting companies count:', error);
      return 3;
    }
  };

  /**
   * Enhanced availability check using professional config
   * @returns {boolean} Current employment status
   */
  const isCurrentlyWorking = (): boolean => {
    try {
      // Check professional availability status first
      if (config.professional?.availability?.status) {
        return config.professional.availability.status !== 'not-available';
      }
      
      // Fallback to experience period check
      return config.experience?.some(exp => 
        exp.period.toLowerCase().includes('present')
      ) || false;
    } catch (error) {
      console.error('Error checking current work status:', error);
      return true;
    }
  };

  /**
   * Get availability status message from enhanced config
   * @returns {string} Professional availability message
   */
  const getAvailabilityMessage = (): string => {
    try {
      if (config.professional?.availability?.message) {
        return config.professional.availability.message;
      }
      
      // Fallback logic
      const currentCompany = getCurrentCompany();
      if (currentCompany) {
        return `Currently working at ${currentCompany}`;
      }
      
      return 'Available for opportunities';
    } catch (error) {
      console.error('Error getting availability message:', error);
      return 'Available for opportunities';
    }
  };

  /**
   * Get the current company name
   * @returns {string} Name of current employer or empty string
   */
  const getCurrentCompany = (): string => {
    try {
      const currentExp = config.experience?.find(exp => 
        exp.period.toLowerCase().includes('present')
      );
      return currentExp?.company || '';
    } catch (error) {
      console.error('Error getting current company:', error);
      return '';
    }
  };

  /**
   * Handle resume click with error handling
   */
  const handleResumeClick = (): void => {
    try {
      if (config.resumeUrl) {
        window.open(config.resumeUrl, '_blank', 'noopener,noreferrer');
      } else {
        console.warn('Resume URL not configured in config.ts');
      }
    } catch (error) {
      console.error('Error opening resume:', error);
    }
  };

  /**
   * Handle hire me click with enhanced email template
   */
  const handleHireMe = (): void => {
    try {
      const { email, subject, body } = config.hireMe;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } catch (error) {
      console.error('Error opening email client:', error);
    }
  };

  // Calculate dynamic stats from enhanced config data and GitHub
  const experienceYears = calculateExperience();
  const projectCount = getProjectCount();
  const companiesCount = getCompaniesCount();
  const availabilityStatus = isCurrentlyWorking();
  const availabilityMessage = getAvailabilityMessage();

  return (
    <section className="min-h-[calc(100vh-12rem)] flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements - Config-driven */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.theme.backgrounds.home} pointer-events-none`} />
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 dark:from-green-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Section - Hero Content (Primary Focus) */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Enhanced Dynamic Availability Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${config.theme?.components?.badge || 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full border border-blue-200/50 dark:border-blue-500/20'} backdrop-blur-sm`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                config.professional?.availability?.status === 'open'
                  ? 'bg-gradient-to-r from-green-400 to-blue-500'
                  : config.professional?.availability?.status === 'selective'
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  : availabilityStatus 
                  ? 'bg-gradient-to-r from-green-400 to-blue-500' 
                  : 'bg-gradient-to-r from-red-400 to-pink-500'
              }`}></div>
              <span className="text-xs sm:text-sm font-medium text-foreground/80">
                {config.professional?.availability?.status === 'open' 
                  ? 'Open to opportunities'
                  : config.professional?.availability?.status === 'selective'
                  ? 'Selective opportunities'
                  : availabilityMessage
                }
              </span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 animate-pulse" />
            </div>

            {/* Main Hero Content - Config-driven */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground mb-1 sm:mb-2">Hi, I'm</span>
                <span className={`block bg-gradient-to-r ${config.theme.gradients.primary} bg-clip-text text-transparent animate-gradient-x`}>
                  {config.name}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                {config.title}
              </p>
            </div>

            {/* Enhanced Value Proposition from Config */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {config.pages.home.description}
            </p>

            {/* Primary CTA Buttons - Enhanced with theme components */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button 
                className={`group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold ${config.theme?.components?.button?.primary || 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                onClick={handleResumeClick}
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                {config.pages.home.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                className={`group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold ${config.theme?.components?.button?.secondary || 'border-2 border-border/60 dark:border-border/40 hover:border-primary/50 bg-background/50'} backdrop-blur-sm hover:bg-primary/5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                onClick={handleHireMe}
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                {config.pages.home.cta.secondary}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Stats with GitHub Integration */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div className={`text-center p-3 sm:p-4 rounded-xl ${config.theme?.components?.card?.replace('shadow-xl', 'shadow-md') || 'bg-background/60 dark:bg-background/30 backdrop-blur-sm border border-border/50'} hover:shadow-lg transition-all duration-300`}>
                <div className="text-xl sm:text-2xl font-bold text-primary flex items-center justify-center gap-1">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {experienceYears}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years</div>
              </div>
              
              <div className={`text-center p-3 sm:p-4 rounded-xl ${config.theme?.components?.card?.replace('shadow-xl', 'shadow-md') || 'bg-background/60 dark:bg-background/30 backdrop-blur-sm border border-border/50'} hover:shadow-lg transition-all duration-300 relative`}>
                <div className="text-xl sm:text-2xl font-bold text-green-500 flex items-center justify-center gap-1">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  {loading ? (
                    <div className="animate-spin w-4 h-4 border-2 border-green-500/30 border-t-green-500 rounded-full"></div>
                  ) : (
                    `${projectCount}+`
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Projects
                  {!loading && !error && allProjects && allProjects.length > 0 && (
                    <span className="block text-xs text-green-500">• Live</span>
                  )}
                </div>
              </div>
              
              <div className={`text-center p-3 sm:p-4 rounded-xl ${config.theme?.components?.card?.replace('shadow-xl', 'shadow-md') || 'bg-background/60 dark:bg-background/30 backdrop-blur-sm border border-border/50'} hover:shadow-lg transition-all duration-300`}>
                <div className="text-xl sm:text-2xl font-bold text-purple-500 flex items-center justify-center gap-1">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  {companiesCount}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>

          {/* Right Section - Enhanced Contact & Social */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Enhanced Contact Card with config.contact integration */}
            <div className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 sm:p-8 hover:shadow-2xl transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Get In Touch</h3>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-pulse" />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href={`mailto:${config.contact?.primary?.email || config.email}`} 
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group hover:scale-105 border border-transparent hover:border-blue-200/50 dark:hover:border-blue-500/20"
                >
                  <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-950/50 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Email {config.contact?.primary?.preferredMethod === 'email' && '(Preferred)'}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
                      {config.contact?.primary?.email || config.email}
                    </p>
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
                
                <a 
                  href={`tel:${config.contact?.primary?.phone || config.phone}`} 
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group hover:scale-105 border border-transparent hover:border-green-200/50 dark:hover:border-green-500/20"
                >
                  <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-950/50 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Phone {config.contact?.primary?.preferredMethod === 'phone' && '(Preferred)'}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground">
                      {config.contact?.primary?.phone || config.phone}
                    </p>
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Enhanced Contact Info */}
              {(config.contact?.responseTime || config.contact?.timezone) && (
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground text-center">
                    {config.contact?.responseTime?.email && (
                      <p>📧 {config.contact.responseTime.email}</p>
                    )}
                    {config.contact?.timezone && (
                      <p>🌍 {config.contact.timezone} {config.contact?.languages && `• ${config.contact.languages.join(', ')}`}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Social Links Card */}
            <div className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 sm:p-8 hover:shadow-2xl transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Connect With Me</h3>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                {config.socialLinks.map((link, index) => {
                  const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP];
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                        link.platform === 'LinkedIn' 
                          ? 'bg-blue-100 dark:bg-blue-950/50 hover:bg-blue-200 dark:hover:bg-blue-900/50 border border-blue-200/50 dark:border-blue-500/20' 
                          : link.platform === 'GitHub'
                          ? 'bg-gray-100 dark:bg-gray-950/50 hover:bg-gray-200 dark:hover:bg-gray-900/50 border border-gray-200/50 dark:border-gray-500/20'
                          : 'bg-purple-100 dark:bg-purple-950/50 hover:bg-purple-200 dark:hover:bg-purple-900/50 border border-purple-200/50 dark:border-purple-500/20'
                      }`}
                    >
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors ${
                        link.platform === 'LinkedIn' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : link.platform === 'GitHub'
                          ? 'text-gray-700 dark:text-gray-300'
                          : 'text-purple-600 dark:text-purple-400'
                      }`} />
                      
                      <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 px-2 sm:px-3 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {link.platform}
                      </div>
                    </a>
                  );
                })}
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/30">
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  {config.professional?.availability?.message || "Ready to discuss your next frontend project? Let's connect!"} 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consistent Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/30 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400/30 rounded-full animate-bounce delay-1000"></div>
    </section>
  );
};

export default Home;
