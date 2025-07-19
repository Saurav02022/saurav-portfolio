import { Calendar, ExternalLink, Sparkles, Award, Briefcase, Code, Users, Zap, Shield, Cloud, GitBranch, Target, Layers, Cpu } from "lucide-react";
import { config } from "@/lib/config";

/**
 * Enhanced icon mapping for skill categories with new categories from enhanced config
 */
const SKILL_CATEGORY_ICONS = {
  languages: Code,
  frontend: Zap,
  uiFrameworks: Layers,
  architecture: Cpu,
  backend: Cloud,
  testing: Shield,
  devops: GitBranch,
  agile: Target,
  aiTools: Sparkles,
  soft: Users,
} as const;

/**
 * Enhanced color schemes for skill categories to improve visual hierarchy
 */
const SKILL_CATEGORY_COLORS = {
  languages: { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  frontend: { text: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
  uiFrameworks: { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  architecture: { text: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  backend: { text: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
  testing: { text: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  devops: { text: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  agile: { text: "text-teal-500", bg: "bg-teal-500/10", border: "border-teal-500/20" },
  aiTools: { text: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  soft: { text: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
} as const;

/**
 * TypeScript interface for skill category structure
 */
interface SkillCategory {
  key: keyof typeof SKILL_CATEGORY_ICONS;
  displayName: string;
  skills: string[];
}

/**
 * About Component - Enhanced profile page with comprehensive config integration
 * Features responsive design, professional information, and modern UI components
 */
const About = () => {
  /**
   * Calculate total years of experience from enhanced config data
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
   * Calculate total number of skills across all categories from enhanced config
   * @returns {number} Total skill count
   */
  const getTotalSkillsCount = (): number => {
    try {
      const skillCategories: SkillCategory[] = getSkillCategories();
      return skillCategories.reduce((total, category) => total + category.skills.length, 0);
    } catch (error) {
      console.error('Error calculating total skills:', error);
      return 50; // Fallback value
    }
  };

  /**
   * Get organized skill categories with all metadata from enhanced config
   * @returns {SkillCategory[]} Array of skill categories with enhanced data
   */
  const getSkillCategories = (): SkillCategory[] => {
    try {
      if (!config.skills || !config.skillCategories) {
        console.warn('Skills or skill categories not found in config');
        return [];
      }

      return Object.keys(config.skills).map(key => ({
        key: key as keyof typeof SKILL_CATEGORY_ICONS,
        displayName: config.skillCategories?.[key as keyof typeof config.skillCategories] || key,
        skills: config.skills?.[key as keyof typeof config.skills] || []
      }));
    } catch (error) {
      console.error('Error getting skill categories:', error);
      return [];
    }
  };

  /**
   * Enhanced text highlighting with support for all highlight types from config
   * @param {string} text - The text content
   * @param {Array} highlights - Array of highlight objects from enhanced config
   * @returns {JSX.Element} Formatted text with highlights
   */
  const renderHighlightedText = (text: string, highlights: typeof config.aboutMe.highlights): JSX.Element => {
    try {
      if (!highlights || highlights.length === 0) {
        return <span>{text}</span>;
      }

      let formattedText: JSX.Element = <span>{text}</span>;

      highlights.forEach((highlight) => {
        // Handle different highlight types from enhanced config
        const searchTerms = [
          highlight.company,
          highlight.description,
          highlight.achievement,
          highlight.methodology
        ].filter(Boolean);

        searchTerms.forEach(term => {
          if (term && text.includes(term)) {
            const parts = text.split(term);
            if (parts.length > 1) {
              formattedText = (
                <span>
                  {parts[0]}
                  <span className={`${highlight.color} font-medium`}>{term}</span>
                  {parts[1]}
                </span>
              );
            }
          }
        });
      });

      return formattedText;
    } catch (error) {
      console.error('Error rendering highlighted text:', error);
      return <span>{text}</span>;
    }
  };

  /**
   * Get professional availability status from enhanced config
   * @returns {string} Professional availability status
   */
  const getAvailabilityStatus = (): string => {
    try {
      if (config.professional?.availability?.status) {
        return config.professional.availability.status.charAt(0).toUpperCase() + 
               config.professional.availability.status.slice(1);
      }
      return 'Available';
    } catch (error) {
      console.error('Error getting availability status:', error);
      return 'Available';
    }
  };

  // Calculate dynamic values from enhanced config data
  const experienceYears = calculateExperience();
  const totalSkills = getTotalSkillsCount();
  const skillCategories = getSkillCategories();
  const availabilityStatus = getAvailabilityStatus();

  return (
    <div className="min-h-[calc(100vh-8rem)] relative">
      {/* Enhanced Background Elements - Config-driven */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.theme.backgrounds.about} pointer-events-none`} />
      <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 dark:from-green-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section 1: About Me - Enhanced with Professional Status */}
        <section className="space-y-8">
          <div className="text-center">
            {/* Enhanced Badge with Professional Status */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${config.theme?.components?.badge || 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full border border-blue-200/50 dark:border-blue-500/20'} backdrop-blur-sm mb-6`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                config.professional?.availability?.status === 'open'
                  ? 'bg-gradient-to-r from-green-400 to-blue-500'
                  : config.professional?.availability?.status === 'selective'
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500'
              }`}></div>
              <span className="text-sm font-medium text-foreground/80">
                {experienceYears}+ Years • {config.experience?.length || 0} Companies • {totalSkills}+ Skills • {availabilityStatus} to opportunities
              </span>
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${config.theme.gradients.primary} bg-clip-text text-transparent mb-8`}>
              {config.pages?.about?.title || "About Me"}
            </h1>
          </div>

          {/* Enhanced About Me Content with Professional Info */}
          <div className="max-w-6xl mx-auto">
            <div className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 sm:p-8 lg:p-12 hover:shadow-2xl transition-all duration-300`}>
              <div className="prose prose-lg max-w-none text-muted-foreground/90 space-y-6">
                {config.aboutMe?.introduction && (
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    {config.aboutMe.introduction}
                  </p>
                )}
                
                {config.aboutMe?.journey && (
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    {renderHighlightedText(config.aboutMe.journey, config.aboutMe.highlights)}
                  </p>
                )}
                
                {config.aboutMe?.passion && (
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    {renderHighlightedText(config.aboutMe.passion, config.aboutMe.highlights)}
                  </p>
                )}
                
                {config.aboutMe?.callToAction && (
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    {config.aboutMe.callToAction} 🚀
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Enhanced Technical Skills */}
        <section className="space-y-8">
          <div className="text-center">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${config.theme.gradients.secondary} bg-clip-text text-transparent`}>
                Technical Expertise
              </h2>
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {totalSkills}+ skills across {skillCategories.length} specialized areas
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skillCategories.map((category, index) => {
                const IconComponent = SKILL_CATEGORY_ICONS[category.key];
                const colors = SKILL_CATEGORY_COLORS[category.key];
                
                return (
                  <div 
                    key={index} 
                    className={`${config.theme?.components?.card?.replace('shadow-xl', 'shadow-lg') || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50'} p-4 sm:p-6 border ${colors.border} hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-sm sm:text-base ${colors.text}`}>
                          {category.displayName}
                        </h3>
                        <p className="text-xs text-muted-foreground">{category.skills.length} skills</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium border ${colors.border} hover:scale-105 transition-transform cursor-default`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Enhanced Professional Journey */}
        <section className="space-y-8">
          <div className="text-center">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${config.theme.gradients.tertiary} bg-clip-text text-transparent`}>
                Professional Journey
              </h2>
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {experienceYears}+ years of experience across {config.experience?.length || 0} organizations
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
            {config.experience?.map((exp, index) => (
              <div 
                key={index} 
                className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 sm:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative`}
              >
                {/* Enhanced Timeline indicator */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 sm:mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-primary text-sm sm:text-base">{exp.company}</span>
                      {exp.companyUrl && (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:text-primary/80 hover:scale-110 transition-all duration-200"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-3 lg:mt-0 bg-muted/30 dark:bg-muted/20 px-3 py-2 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium text-xs sm:text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 pl-4">
                  {exp.achievements?.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  )) || []}
                </ul>
              </div>
            )) || []}
          </div>
        </section>

        {/* Enhanced Contact & Professional Information Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {config.professional?.availability?.message || "Ready to discuss your next project? Let's connect!"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`${config.theme?.components?.card || 'bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50'} p-6 sm:p-8 text-center`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Response Time & Contact Info */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  {config.contact?.responseTime && (
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {config.contact.responseTime.email && (
                        <p>📧 {config.contact.responseTime.email}</p>
                      )}
                      {config.contact.responseTime.phone && (
                        <p>📞 {config.contact.responseTime.phone}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Location & Languages */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Location & Languages</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>📍 {config.location}</p>
                    {config.contact?.languages && (
                      <p>🗣️ {config.contact.languages.join(', ')}</p>
                    )}
                    {config.contact?.timezone && (
                      <p>🌍 {config.contact.timezone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Elements - Consistent with theme */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400/30 rounded-full animate-bounce delay-1000"></div>
    </div>
  );
};

export default About;
