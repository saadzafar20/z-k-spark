import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from "lucide-react";
import { companyInfo, billRanges } from "@/data/companyInfo";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    billRange: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || formData.name.length > 100) {
      toast({ title: "Please enter a valid name (max 100 characters)", variant: "destructive" });
      return;
    }
    if (!formData.phone.trim() || !/^[\d\s\-+()]{7,20}$/.test(formData.phone)) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    if (formData.message && formData.message.length > 1000) {
      toast({ title: "Message must be less than 1000 characters", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll contact you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Z&K Solar | Get Free Solar Quote</title>
        <meta 
          name="description" 
          content="Contact Z&K Solar for a free consultation and solar quote. Call +923164116252 or fill our form for industrial and commercial solar solutions." 
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
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Let's Power Your Future
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Get in touch for a free consultation and customized solar proposal for your facility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to start saving on electricity? Contact us for a free site assessment 
                and customized solar proposal. Our experts are here to answer all your questions.
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href={companyInfo.phoneLink}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-foreground">{companyInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-[hsl(142_70%_45%)]/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(142_70%_45%)]/10 flex items-center justify-center group-hover:bg-[hsl(142_70%_45%)] transition-colors">
                    <MessageCircle className="h-6 w-6 text-[hsl(142_70%_45%)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">Chat with us</p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-highlight/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center group-hover:bg-highlight transition-colors">
                    <Mail className="h-6 w-6 text-highlight group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">{companyInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold text-foreground">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Map Placeholder</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        city: "",
                        billRange: "",
                        message: ""
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    Request a Free Quote
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we'll contact you with a customized solar proposal.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12"
                          required
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                          maxLength={255}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          City
                        </label>
                        <Input
                          type="text"
                          placeholder="Your city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="h-12"
                          maxLength={100}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Monthly Electricity Bill
                      </label>
                      <Select
                        value={formData.billRange}
                        onValueChange={(value) => setFormData({ ...formData, billRange: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your bill range" />
                        </SelectTrigger>
                        <SelectContent>
                          {billRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        maxLength={1000}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
