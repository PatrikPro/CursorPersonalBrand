import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BentoGrid />
      <Portfolio />
      <Process />
      <Contact />
    </main>
  );
}

