import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zafar Enterprises - Industrial & Commercial Solar Solutions in Pakistan | In Collaboration with Landmark Energy</title>
        <meta 
          name="description" 
          content="In collaboration with Landmark Energy. Cut electricity costs by 70% with turnkey solar solutions for factories, textile mills, and commercial buildings in Pakistan." 
        />
        <meta property="og:title" content="Zafar Enterprises - Industrial Solar Solutions Pakistan | Landmark Energy Collaboration" />
        <meta property="og:description" content="Solar solutions for industrial and commercial clients in collaboration with Landmark Energy. 15+ MW installed capacity." />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ClientLogos />
      <CTASection />
    </>
  );
}
