
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SkinKits from "@/components/SkinKits";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Quiz from "@/components/Quiz";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <SkinKits />
      <Benefits />
      <Testimonials />
      <Quiz />
    </div>
  );
};

export default Index;
