import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Z&K Solar - Industrial & Commercial Solar Solutions in Pakistan</title>
        <meta 
          name="description" 
          content="Pakistan's leading solar EPC company. Cut electricity costs by 70% with turnkey solar solutions for factories, textile mills, and commercial buildings." 
        />
        <meta property="og:title" content="Z&K Solar - Industrial Solar Solutions Pakistan" />
        <meta property="og:description" content="Turnkey solar EPC solutions for industrial and commercial clients. 15+ MW installed capacity." />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ClientLogos />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
