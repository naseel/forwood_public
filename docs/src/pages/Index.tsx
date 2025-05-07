
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Cta from "@/components/sections/Cta";
import { Check, Shield, Star } from "lucide-react";

const Index = () => {
  // Hero section data
  const heroData = {
    heading: "Welcome to FORWOOD",
    subheading: "Premium PVC and WPC Panels for Timeless Interiors.",
    image: "/placeholder.svg", // Placeholder image until you upload a real one
    buttons: [
      {
        label: "Explore Products",
        link: "/products"
      },
      {
        label: "Request a Quote",
        link: "/quote"
      }
    ]
  };
  
  // Features section data
  const featuresData = {
    heading: "Why Choose FORWOOD?",
    items: [
      {
        title: "High Density",
        description: "Optimized for strength and durability in every sheet.",
        icon: <Check className="h-8 w-8" />
      },
      {
        title: "Moisture Resistant",
        description: "Ideal for humid environments and long-lasting applications.",
        icon: <Shield className="h-8 w-8" />
      },
      {
        title: "Premium Finishes",
        description: "Elegant look and superior quality across all product lines.",
        icon: <Star className="h-8 w-8" />
      }
    ]
  };
  
  // CTA section data
  const ctaData = {
    heading: "Need Help or Have a Question?",
    description: "Contact us anytime on WhatsApp or request a call.",
    buttons: [
      {
        label: "Chat on WhatsApp",
        link: "https://wa.me/919388176565"
      },
      {
        label: "Request a Quote",
        link: "/quote"
      }
    ]
  };

  return (
    <div>
      <Hero {...heroData} />
      <Features {...featuresData} />
      <Cta {...ctaData} />
    </div>
  );
};

export default Index;
