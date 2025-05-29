
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Shield, Truck, Clock } from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToKits = () => {
    document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Geometric Background inspired by the image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-turquoise to-turquoise-light transform skew-y-2 origin-top-left"></div>
        <div className="absolute top-1/4 left-0 w-full h-1/3 bg-gradient-to-br from-lime to-lime-light transform -skew-y-1"></div>
        <div className="absolute top-1/2 left-0 w-full h-1/3 bg-gradient-to-br from-coral to-coral-light transform skew-y-1"></div>
        <div className="absolute top-3/4 left-0 w-full h-1/3 bg-gradient-to-br from-sky to-sky-light transform -skew-y-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-br from-rose to-rose-light"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                Mais de 20 mil mulheres transformaram sua pele
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transforme Sua Pele em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  21 Dias
                </span>{" "}
                ou Seu Dinheiro de Volta
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Descubra o Kit Lanoa formulado especificamente para o{" "}
                <strong>SEU</strong> tipo de pele. Rotina completa, resultados reais, sem complicação.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Button 
                onClick={scrollToKits}
                size="lg" 
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                DESCOBRIR MEU KIT IDEAL
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Teste rápido de 60 segundos</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Frete Grátis</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-white/80 text-sm mb-2">Oferta especial expira em:</p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-2 min-w-[60px]">
                    <span className="text-2xl font-bold text-gray-900">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-white/80 mt-1 block">HORAS</span>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-2 min-w-[60px]">
                    <span className="text-2xl font-bold text-gray-900">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-white/80 mt-1 block">MIN</span>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-2 min-w-[60px]">
                    <span className="text-2xl font-bold text-gray-900">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-white/80 mt-1 block">SEG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-turquoise/20 to-coral/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-lime to-turquoise rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">LANOA</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">Resultados Reais</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>Antes</div>
                      <div>Depois de 21 dias</div>
                    </div>
                    <div className="bg-gradient-to-r from-red-100 to-green-100 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-pulse">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
