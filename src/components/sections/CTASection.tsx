import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import { toast } from "@/hooks/use-toast";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill required fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitted(true);
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly.",
    });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-[hsl(220_50%_25%)] text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Cut Your{" "}
              <span className="text-accent">Energy Costs</span> by 70%?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Get a free site survey and customized solar proposal for your 
              facility. Our experts will analyze your energy needs and design 
              the perfect solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="call" size="lg" asChild>
                <a href={companyInfo.phoneLink}>
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                No Obligation
              </span>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-2xl p-6 md:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We'll contact you within 24 hours with your free quote.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-muted-foreground mb-6">
                  Fill in your details and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email (Optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Request Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
