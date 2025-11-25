import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Portfolio />
      <Showcase />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
