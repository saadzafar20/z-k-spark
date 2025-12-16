import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, FileCheck, Wrench, BarChart3, Battery, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { Helmet } from "react-helmet-async";

const iconComponents: Record<string, any> = {
  Sun,
  Zap,
  FileCheck,
  Wrench,
  BarChart3,
  Battery
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Solar Services - Z&K Solar | Industrial Solar EPC Pakistan</title>
        <meta 
          name="description" 
          content="Comprehensive solar services: System design, industrial EPC, net metering, O&M, energy audits, and inverter solutions for factories and commercial buildings." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Complete Solar Solutions for Industry
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              From initial consultation to long-term maintenance, we provide comprehensive 
              solar services tailored to your industrial and commercial energy needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const IconComponent = iconComponents[service.icon];
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
                        <IconComponent className="h-12 w-12 text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and customized proposal for your facility.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
