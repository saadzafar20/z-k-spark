import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/data/companyInfo";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-highlight rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Your Trusted Partner for{" "}
              <span className="text-accent">Industrial Solar</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              In collaboration with Landmark Energy, we deliver high-quality, reliable 
              solar solutions that maximize your energy savings and ROI. Together, we've 
              built a strong reputation in Pakistan's solar industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-primary-foreground/60 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-highlight/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/30 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-accent">
                    10+
                  </span>
                </div>
                <p className="text-2xl font-display font-semibold text-primary-foreground">
                  Years of Excellence
                </p>
                <p className="text-primary-foreground/60 mt-2">
                  Powering Pakistan's Industries
                </p>
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -top-4 -left-4 bg-card text-card-foreground rounded-xl p-4 shadow-lg animate-float">
              <p className="font-display text-2xl font-bold text-accent">50+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card text-card-foreground rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <p className="font-display text-2xl font-bold text-highlight">15MW+</p>
              <p className="text-sm text-muted-foreground">Installed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
