
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SkinKits from "@/components/SkinKits";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Quiz from "@/components/Quiz";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <SkinKits />
      <Benefits />
      <Testimonials />
      <Quiz />
      <Footer />
    </div>
  );
};

export default Index;
