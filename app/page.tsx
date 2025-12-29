import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingBadges from "@/components/FloatingBadges";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import EnhancedCTA from "@/components/EnhancedCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <FloatingBadges />
      <Navigation />
      <Hero />
      <Stats />
      <TrustedBy />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <EnhancedCTA />
      <Footer />
    </main>
  );
}
