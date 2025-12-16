import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import heroImage from "@/assets/hero-solar.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial solar panel installation at sunrise" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(135deg, hsl(220 60% 12% / 0.92) 0%, hsl(220 50% 18% / 0.85) 50%, hsl(220 45% 22% / 0.75) 100%)" 
          }}
        />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Pakistan's Leading Solar EPC Company
            </span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up animation-delay-100">
            Industrial & Commercial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
              Solar Solutions
            </span>{" "}
            in Pakistan
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed animate-fade-up animation-delay-200">
            Cut your electricity costs by up to 70% with our turnkey EPC solutions. 
            From design to installation and maintenance, we deliver reliable solar power 
            for factories, textile mills, and commercial buildings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href={companyInfo.phoneLink}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 animate-fade-up animation-delay-400">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-accent">
                {companyInfo.stats.mwInstalled}
              </p>
              <p className="text-white/60 text-sm mt-1">MW Installed</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-highlight">
                {companyInfo.stats.clientsServed}
              </p>
              <p className="text-white/60 text-sm mt-1">Clients Served</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-white">
                {companyInfo.stats.yearsExperience}
              </p>
              <p className="text-white/60 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
