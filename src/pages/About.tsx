import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";
import { companyInfo, whyChooseUs } from "@/data/companyInfo";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build long-term relationships with our clients, becoming trusted energy partners."
  },
  {
    icon: Award,
    title: "Quality",
    description: "We use only tier-1 components and follow international quality standards."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of solar technology to deliver cutting-edge solutions."
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Zafar Enterprises | Pakistan's Trusted Solar Partner</title>
        <meta 
          name="description" 
          content="Learn about Zafar Enterprises - 10+ years connecting industries with trusted solar solutions and EPC partners across Pakistan." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-highlight/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Powering Pakistan's Industrial Future
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              {companyInfo.name} connects Pakistan's industries with trusted solar 
              solutions and certified EPC partners to transform the country's energy 
              landscape through sustainable solar power.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                A Decade of Solar Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to make clean energy accessible to Pakistan's 
                  industrial sector, Zafar Enterprises has grown to become one of the country's 
                  most trusted solar solutions partners.
                </p>
                <p>
                  Our journey began with a simple belief: that every factory, mill, and 
                  commercial facility deserves access to reliable, cost-effective solar 
                  energy. We work with certified EPC partners to turn this belief into 
                  reality for our clients across Pakistan.
                </p>
                <p>
                  Today, with partnerships spanning over 15 MW of installed capacity, 
                  we continue to connect industries with the best solar solutions in 
                  Pakistan's industrial heartland.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-display text-8xl font-bold text-accent mb-4">10+</p>
                  <p className="text-2xl font-semibold text-foreground">Years of Excellence</p>
                  <p className="text-muted-foreground mt-2">Serving Pakistan's Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Trusted Solar Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a proven track record and commitment to excellence, we deliver 
                solar solutions that maximize your energy savings and environmental impact.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
